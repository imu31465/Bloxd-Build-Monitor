export const id = 76;
export const ids = [76];
export const modules = {
  35599: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => zJ,
      e: () => pJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1703),
      eJ = ZJ(35605),
      XJ = ZJ.n(eJ),
      AJ = ZJ(3966),
      qJ = ZJ(1675),
      jJ = ZJ(1326),
      YJ = ZJ(80),
      hJ = ZJ(93),
      DJ = ZJ(235),
      sJ = ZJ(926),
      nJ = ZJ.n(sJ),
      GJ = ZJ(13),
      fJ = ZJ(942),
      xJ = ZJ(1528),
      rJ = ZJ(1599),
      vJ = ZJ(1569),
      mJ = ZJ(1778),
      QJ = ZJ(1300),
      EJ = ZJ(1849),
      VJ = ZJ(1294),
      KJ = ZJ(8070),
      yJ = ZJ(35609),
      SJ = ZJ(35635),
      IJ = ZJ(1350),
      MJ = ZJ(2179),
      bJ = ZJ(1086),
      wJ = ZJ(35640);
    var WJ = ZJ(8541);
    var gJ = ZJ(990);
    const HJ = ZJ(35642),
      PJ = ["enter", "t", "/"];
    let kJ = !1;

    function pJ() {
      return kJ || (0, rJ.isTextEntry)(document.activeElement)
    }

    function dJ() {
      var JJ, cJ;
      (0, EJ.b)();
      const ZJ = null !== (JJ = null === (cJ = (0, QJ.f)()) || void 0 === cJ ? void 0 : cJ.getBoundButton("keyboardChannel")) && void 0 !== JJ ? JJ : null;
      return ZJ ? (0, gJ.jsx)(mJ.e, {
        className: "ChatInputChannelGlyph",
        glyph: ZJ
      }) : null
    }

    function zJ() {
      const {
        t: JJ
      } = (0, bJ.F)(), {
        isTouchScreen: cJ
      } = (0, GJ.j)(["isTouchScreen"]), ZJ = (0, VJ.q)(), [eJ, sJ] = (0, FJ.useState)(!1), mJ = (0, FJ.useRef)(eJ), QJ = (0, FJ.useRef)(null), {
        messages: EJ,
        reportedPlayers: pJ,
        channel: zJ
      } = (0, KJ.k)(), OJ = (0, FJ.useRef)(0), TJ = (0, FJ.useRef)(""), CJ = (0, FJ.useRef)(null);
      var uJ;
      uJ = CJ, (0, FJ.useEffect)((() => {
        if (!(0, YJ.isIOS)()) return;
        const JJ = uJ.current;
        let cJ = null;
        const ZJ = ZJ => {
            const FJ = ZJ.changedTouches[0];
            cJ = "none" === getComputedStyle(JJ).pointerEvents ? {
              id: FJ.identifier,
              y: FJ.clientY
            } : null
          },
          FJ = ZJ => {
            const FJ = cJ,
              UJ = FJ && (0, wJ.c)(ZJ.changedTouches, FJ.id);
            UJ && (ZJ.preventDefault(), JJ.scrollBy({
              top: FJ.y - UJ.clientY,
              behavior: "instant"
            }), FJ.y = UJ.clientY)
          };
        return JJ.addEventListener("touchstart", ZJ, {
          passive: !0
        }), JJ.addEventListener("touchmove", FJ, {
          passive: !1
        }), () => {
          JJ.removeEventListener("touchstart", ZJ), JJ.removeEventListener("touchmove", FJ)
        }
      }), [uJ]);
      const [iJ, RJ] = (0, FJ.useState)(!1), [LJ, aJ] = (0, FJ.useState)(!1), BJ = (0, FJ.useRef)(iJ), tJ = (0, FJ.useRef)(null), oJ = (0, FJ.useRef)(!1), lJ = (0, FJ.useRef)(null), Jc = (0, FJ.useRef)(null), cc = (0, FJ.useRef)(null), Zc = (0, FJ.useRef)(Xc);
      Zc.current = Xc;
      const Fc = (0, MJ.l)();

      function Uc() {
        mJ.current = !1, sJ(!1), Jc.current.blur()
      }

      function ec(JJ) {
        BJ.current = JJ, RJ(JJ)
      }

      function Xc() {
        const JJ = Jc.current.value;
        Jc.current.value = "", Ac(JJ)
      }

      function Ac(JJ) {
        (0, KJ.i)(JJ), OJ.current = 0, ec(!1)
      }

      function qc(JJ, cJ) {
        0 === OJ.current && (TJ.current = Jc.current.value);
        const ZJ = (0, KJ.h)(OJ.current + JJ, cJ);
        OJ.current = ZJ.stepsBack, Jc.current.value = 0 === ZJ.stepsBack ? TJ.current : ZJ.text, setTimeout((() => {
          Jc.current && Jc.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function jc() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        CJ.current && (!JJ && BJ.current || (CJ.current.scrollTop = 1e5))
      }
      return (0, AJ.c)(!0, eJ, "ChatComponent"), (0, FJ.useEffect)((() => (kJ = eJ, () => {
          kJ = !1
        })), [eJ]), (0, jJ.i)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, xJ.o)() && sJ(!1)
        })), (0, FJ.useEffect)((() => {
          Jc.current.addEventListener("blur", (JJ => {
            if (null === Jc.current) return;
            Array.from(document.querySelectorAll(":hover")).some((JJ => JJ.classList.contains("ChatInputChannel") || JJ.classList.contains("ChatMsgSelectWrapper"))) || ((0, YJ.isMobile)() && mJ.current && "" !== Jc.current.value && Zc.current(), sJ(!1))
          }));
          const JJ = JJ => {
            QJ.current.contains(JJ.target) || (0, vJ.o)(JJ.target) || sJ(!1)
          };
          document.addEventListener("touchstart", JJ, {
            capture: !0
          });
          const cJ = JJ => {
            (0, SJ.d)(JJ.target) && (mJ.current = !1, sJ(!1))
          };
          document.addEventListener("mousedown", cJ, {
            capture: !0
          });
          const ZJ = () => {
              clearTimeout(tJ.current), ec(!0)
            },
            FJ = () => {
              clearTimeout(tJ.current), tJ.current = setTimeout((() => {
                ec(!1), jc()
              }), 4e3)
            },
            eJ = () => {
              document.pointerLockElement ? (sJ(!1), aJ(!0), oJ.current = !1, ec(!1), jc()) : aJ(!1)
            };
          CJ.current.addEventListener("pointermove", (JJ => {
            "touch" === JJ.pointerType || oJ.current || document.pointerLockElement || (oJ.current = !0, clearTimeout(tJ.current))
          })), CJ.current.addEventListener("pointerleave", (JJ => {
            "touch" !== JJ.pointerType && (oJ.current = !1, BJ.current && FJ())
          })), CJ.current.addEventListener("pointerdown", (JJ => {
            "touch" === JJ.pointerType || document.pointerLockElement || (oJ.current = !0, ZJ())
          })), CJ.current.addEventListener("wheel", (JJ => {
            document.pointerLockElement || JJ.deltaY >= 0 && Math.abs(CJ.current.scrollTop) < 1 || (ZJ(), oJ.current || (tJ.current = setTimeout((() => {
              ec(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), CJ.current.addEventListener("touchstart", ZJ), CJ.current.addEventListener("touchend", FJ), CJ.current.addEventListener("touchcancel", FJ), document.addEventListener("pointerlockchange", eJ);
          const AJ = JJ => {
            if (Fc.shown && (mJ.current || ! function(JJ) {
                if ((0, rJ.isTypingInInput)()) return !0;
                const cJ = document.activeElement;
                return (cJ instanceof HTMLButtonElement || "button" === (null === cJ || void 0 === cJ ? void 0 : cJ.getAttribute("role"))) && ["Enter", " "].includes(JJ.key)
              }(JJ)) && "codeEditor" !== GJ.d.get("openInGameMenuName") && "lobbyCodeEditor" !== GJ.d.get("openInGameMenuName") && !UJ.gameBridge.latest("connectedGame").replay)
              if (mJ.current || !(0, xJ.o)()) {
                if (mJ.current) {
                  if ("ArrowUp" === JJ.code || "ArrowDown" === JJ.code) return qc("ArrowUp" === JJ.code ? 1 : -1, !1), void JJ.stopPropagation();
                  if ("Tab" === JJ.code) return KJ.e.selectNextChannel(), JJ.stopPropagation(), void JJ.preventDefault();
                  if (JJ.ctrlKey && NJ.includes(HJ[JJ.keyCode])) return JJ.preventDefault(), void JJ.stopPropagation()
                }
                if ([...PJ, "esc"].includes(XJ()(JJ)))
                  if ("esc" !== XJ()(JJ)) {
                    if (!mJ.current || "/" !== XJ()(JJ)) {
                      if ("t" === XJ()(JJ)) {
                        if (mJ.current) return void JJ.stopPropagation();
                        JJ.preventDefault()
                      }
                      mJ.current && "" !== Jc.current.value && Zc.current(), JJ.repeat || (mJ.current || "/" === XJ()(JJ) && (Jc.current.value = "/", JJ.preventDefault()), sJ(!mJ.current))
                    }
                  } else mJ.current && (sJ(!1), JJ.stopPropagation());
                else mJ.current && JJ.stopPropagation()
              } else PJ.includes(XJ()(JJ)) && (JJ.preventDefault(), JJ.stopPropagation(), (0, xJ.c)(JJ))
          };
          document.addEventListener("keydown", AJ, {
            capture: !0
          });
          const qJ = CJ.current;
          let jJ = !1;
          const hJ = new ResizeObserver((() => {
              jJ && (jJ = !1, jc())
            })),
            DJ = () => {
              jJ = !0, hJ.unobserve(qJ), hJ.observe(qJ)
            };
          lJ.current = DJ;
          const nJ = new MutationObserver(DJ);
          return nJ.observe(qJ, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", AJ, {
              capture: !0
            }), document.removeEventListener("touchstart", JJ, {
              capture: !0
            }), document.removeEventListener("mousedown", cJ, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", eJ), lJ.current = null, nJ.disconnect(), hJ.disconnect(), clearTimeout(tJ.current)
          }
        }), []), (0, vJ.w)(Jc, {
          open: () => {
            sJ(!0)
          },
          close: () => {
            Uc()
          },
          submit: () => {
            "" !== Jc.current.value && Xc(), Uc()
          },
          stepHistory: () => {
            qc(1, !0)
          },
          sendLine: JJ => {
            Ac(JJ), Uc()
          },
          selectNextChannel: () => {
            KJ.e.selectNextChannel()
          }
        }), (0, FJ.useEffect)((() => {
          var JJ;
          (mJ.current = eJ, Jc.current) && (eJ ? (OJ.current = 0, Jc.current.focus()) : (Jc.current.blur(), null === (JJ = lJ.current) || void 0 === JJ || JJ.call(lJ)))
        }), [eJ]),
        function(JJ, cJ) {
          (0, FJ.useLayoutEffect)((() => {
            if (!cJ) return;
            WJ.c.hold();
            const ZJ = JJ.current.closest(".InGameHeaderAndChat"),
              FJ = window.visualViewport;
            let UJ = "";
            const eJ = () => {
              const JJ = `${FJ.offsetTop+FJ.height}px`;
              JJ !== UJ && (UJ = JJ, ZJ.style.setProperty("--keyboard-top", JJ))
            };
            return eJ(), FJ.addEventListener("resize", eJ), FJ.addEventListener("scroll", eJ), () => {
              FJ.removeEventListener("resize", eJ), FJ.removeEventListener("scroll", eJ), ZJ.style.removeProperty("--keyboard-top"), WJ.c.release()
            }
          }), [JJ, cJ])
        }(QJ, eJ && cJ), (0, gJ.jsx)(gJ.Fragment, {
          children: (0, gJ.jsxs)("div", {
            ref: QJ,
            className: nJ()("Chat", {
              Chatting: eJ
            }),
            "data-camera-keeper": eJ ? "" : void 0,
            children: [(0, gJ.jsx)("div", {
              ref: CJ,
              className: nJ()("ChatMessages", {
                HideScrollbar: !iJ && !eJ,
                NoScrolling: !(0, YJ.isMobile)() && LJ
              }),
              children: (0, gJ.jsx)(yJ.b, {
                messages: EJ,
                reportedPlayers: pJ
              })
            }), cJ && !eJ && (0, gJ.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": JJ("general:chat"),
              ...(0, IJ.g)((() => {
                sJ(!0), cc.current.style.display = "flex", Jc.current.focus()
              }), "pointerup"),
              children: (0, gJ.jsx)(fJ.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, gJ.jsxs)("div", {
              ref: cc,
              className: "ChatInputWrapper",
              style: {
                display: "" + (eJ ? "flex" : "none")
              },
              children: [zJ && (0, gJ.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: zJ.elementBgColor
                },
                onClick: JJ => {
                  KJ.e.selectNextChannel(), Jc.current.focus()
                },
                children: (0, gJ.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, gJ.jsx)(qJ.d, {
                    text: zJ.elementContent
                  })
                })
              }), zJ && ZJ && (0, gJ.jsx)(dJ, {}), (0, gJ.jsx)("input", {
                className: "ChatInput",
                maxLength: DJ.Mc,
                ref: Jc,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": JJ("general:chat"),
                placeholder: zJ ? `${zJ.channelName} Chat${"touchOnly"===(0,hJ.e)()||ZJ?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const NJ = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35609: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => KJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(8076),
      AJ = ZJ(17),
      qJ = ZJ(2117),
      jJ = ZJ(3072),
      YJ = ZJ(1804),
      hJ = ZJ(13),
      DJ = ZJ(1675),
      sJ = ZJ(35617),
      nJ = ZJ(1931),
      GJ = ZJ(35626),
      fJ = ZJ(2270),
      xJ = ZJ(2251),
      rJ = ZJ(2248),
      vJ = ZJ(3086),
      mJ = ZJ(2601),
      QJ = ZJ(1743),
      EJ = ZJ(990);

    function VJ(JJ) {
      for (let ZJ = JJ.length - 1; ZJ >= 0; ZJ--) {
        const FJ = "string" === typeof(cJ = JJ[ZJ]) ? cJ : "str" in cJ && "string" === typeof cJ.str ? cJ.str : "";
        if ("" !== FJ.trim()) return FJ
      }
      var cJ;
      return ""
    }

    function KJ(JJ) {
      let {
        messages: cJ,
        reportedPlayers: ZJ
      } = JJ;
      return (0, EJ.jsx)(EJ.Fragment, {
        children: cJ.map((JJ => (0, EJ.jsx)(yJ, {
          message: JJ,
          reportedPlayers: ZJ
        }, JJ.clientChatMsgId)))
      })
    }
    const yJ = (0, FJ.memo)((function(JJ) {
      var cJ;
      let {
        message: ZJ,
        reportedPlayers: UJ
      } = JJ;
      const KJ = (0, FJ.useRef)(null),
        [yJ] = (0, FJ.useState)(mJ.j),
        {
          author: SJ
        } = ZJ,
        IJ = null === SJ || void 0 === SJ ? void 0 : SJ.id,
        MJ = null !== (cJ = null === SJ || void 0 === SJ ? void 0 : SJ.name) && void 0 !== cJ ? cJ : void 0,
        bJ = (0, YJ.d)(MJ),
        wJ = null !== SJ && void 0 !== SJ && SJ.profileEffect ? nJ.h[SJ.profileEffect] : void 0,
        WJ = null !== SJ && !SJ.local,
        gJ = null === SJ && null !== ZJ.serverChatMsgId,
        HJ = (0, QJ.d)("hiddenPlayerNames", (JJ => (0, GJ.c)(WJ, MJ, JJ))),
        PJ = null === ZJ.serverChatMsgId || null === SJ ? null : {
          text: VJ(ZJ.content),
          serverChatMsgId: ZJ.serverChatMsgId,
          authorId: SJ.id
        },
        kJ = gJ || null !== PJ && !UJ.includes(IJ),
        pJ = (0, jJ.j)(WJ && null !== MJ && void 0 !== MJ ? MJ : null),
        dJ = (0, rJ.g)(KJ);
      (0, FJ.useEffect)((() => () => {
        rJ.c.closeIfOwner(KJ)
      }), []);
      const zJ = () => {
          gJ ? AJ.i.Uf("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            JY: (0, XJ.c)(ZJ.content),
            serverChatMsgId: ZJ.serverChatMsgId
          }) : null !== PJ ? AJ.i.Uf("OpenReportMenu", {
            playerEId: IJ,
            playerName: MJ,
            JY: PJ.text,
            serverChatMsgId: PJ.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        NJ = void 0 === MJ ? [] : (0, vJ.b)(pJ, MJ, PJ);
      return (0, EJ.jsxs)("div", {
        ref: KJ,
        className: eJ()("MessageWrapper", {
          ChatMsgSelectWrapper: IJ,
          Still: yJ
        }),
        onContextMenu: HJ ? JJ => {
          (0, fJ.g)(KJ, JJ, {
            ...(0, GJ.b)(IJ, MJ),
            showLocation: !1,
            status: null,
            extraActions: kJ ? [{
              icon: "flag",
              text: "Report",
              onClick: zJ
            }] : [],
            friendRequestSource: "chat"
          }, hJ.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: HJ ? JJ => {
          (0, xJ.d)(JJ, (() => (0, GJ.b)(IJ, MJ).playerSocialPreview))
        } : void 0,
        children: [wJ && (0, EJ.jsx)(wJ, {
          className: "ChatMessageBackground",
          simple: !0
        }), (WJ || gJ) && !dJ && (0, EJ.jsx)(sJ.e, {
          className: "ChatFloatingActions",
          triggerElementRef: KJ,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: zJ,
            show: kJ
          }, ...NJ, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: JJ => {
              (0, qJ.l)(MJ, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: HJ && "blocked" !== pJ
          }]
        }), (0, EJ.jsx)(DJ.d, {
          text: ZJ.content,
          friendBadgeFor: bJ ? MJ : void 0
        }, ZJ.clientChatMsgId)]
      }, ZJ.clientChatMsgId)
    }))
  },
  35658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      f: () => nJ,
      j: () => DJ,
      m: () => hJ
    });
    var FJ = ZJ(8557),
      UJ = ZJ(35661),
      eJ = ZJ(35665),
      XJ = ZJ(8068),
      AJ = ZJ(1326),
      qJ = ZJ(47),
      jJ = ZJ(60),
      YJ = ZJ(990);

    function hJ() {
      var JJ;
      return (0, AJ.m)(UJ.b, (0, UJ.m)()), (0, YJ.jsx)(YJ.Fragment, {
        children: null === (JJ = (0, UJ.m)()) || void 0 === JJ ? void 0 : JJ.content
      })
    }

    function DJ(JJ) {
      var cJ;
      let {
        show: ZJ
      } = JJ;
      (0, AJ.m)(UJ.b, (0, UJ.m)());
      const jJ = null === (cJ = (0, UJ.m)()) || void 0 === cJ ? void 0 : cJ.menu;
      return (0, qJ.useEffect)((() => {
        var JJ;
        ZJ || (null === jJ || void 0 === jJ || null === (JJ = jJ.onClose) || void 0 === JJ || JJ.call(jJ), (0, eJ.m)())
      }), [ZJ, jJ]), (0, qJ.useEffect)((() => ZJ ? (0, XJ.f)(eJ.v, eJ.c) : void 0), [ZJ]), (0, YJ.jsx)(FJ.c, {
        showing: ZJ,
        globallyUniqueKey: "clientGameMenu",
        children: null === jJ || void 0 === jJ ? void 0 : jJ.content
      })
    }

    function sJ(JJ) {
      let {
        placement: cJ = "bottom"
      } = JJ;
      return (0, YJ.jsx)("div", {
        id: `clientGameHud-${cJ}`,
        style: {
          display: "contents"
        }
      })
    }

    function nJ(JJ) {
      let {
        children: cJ,
        placement: ZJ = "bottom"
      } = JJ;
      const [FJ, UJ] = (0, qJ.useState)(null);
      return (0, qJ.useEffect)((() => {
        UJ(document.getElementById(`clientGameHud-${ZJ}`))
      }), [ZJ]), FJ ? (0, jJ.createPortal)(cJ, FJ) : null
    }
  },
  35923: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => UJ,
      D: () => VJ,
      b: () => vJ,
      d: () => fJ,
      g: () => nJ,
      i: () => sJ,
      k: () => rJ,
      m: () => yJ,
      p: () => mJ,
      t: () => EJ,
      x: () => QJ,
      z: () => KJ
    });
    var FJ = ZJ(47);
    const UJ = 5e3,
      eJ = 500,
      XJ = 3e3;
    let AJ = null,
      qJ = null,
      jJ = null;
    const YJ = new Set;

    function hJ(JJ) {
      AJ = JJ;
      for (const cJ of YJ) cJ()
    }

    function DJ() {
      if (!AJ || void 0 !== AJ.endedAt) return;
      null !== qJ && (clearTimeout(qJ), qJ = null), hJ({
        ...AJ,
        endedAt: Date.now()
      });
      const JJ = jJ;
      jJ = null, null === JJ || void 0 === JJ || JJ()
    }

    function sJ(JJ, cJ) {
      let {
        submit: ZJ,
        reopen: FJ
      } = cJ;
      null !== qJ && clearTimeout(qJ), jJ = FJ, hJ({
        ...JJ,
        startedAt: Date.now(),
        errors: []
      }), qJ = setTimeout(DJ, XJ), ZJ()
    }

    function nJ() {
      AJ && void 0 === AJ.endedAt && void 0 === AJ.ranAt && (null !== qJ && clearTimeout(qJ), hJ({
        ...AJ,
        ranAt: Date.now()
      }), qJ = setTimeout(DJ, UJ))
    }
    const GJ = 3;

    function fJ(JJ) {
      if (!AJ || void 0 === AJ.ranAt || void 0 !== AJ.endedAt || AJ.errors.includes(JJ) || AJ.errors.length >= GJ) return;
      const cJ = 0 === AJ.errors.length;
      hJ({
        ...AJ,
        errors: [...AJ.errors, JJ]
      }), cJ && (null !== qJ && clearTimeout(qJ), qJ = setTimeout(DJ, eJ))
    }

    function xJ(JJ) {
      var cJ;
      return (null === (cJ = AJ) || void 0 === cJ ? void 0 : cJ.chatKey) === JJ ? AJ : null
    }

    function rJ(JJ) {
      const cJ = xJ(JJ);
      return cJ && void 0 !== cJ.endedAt ? (hJ(null), cJ) : null
    }

    function vJ(JJ) {
      var cJ;
      (null === (cJ = AJ) || void 0 === cJ ? void 0 : cJ.chatKey) === JJ && (null !== qJ && (clearTimeout(qJ), qJ = null), jJ = null, hJ(null))
    }
    const mJ = "These changes from your last answer didn't go in. Make them again.";

    function QJ(JJ) {
      const cJ = [...new Set(JJ)].slice(0, GJ);
      return `Fix this in your change: when it ran, the world showed ${1===cJ.length?"this error":"these errors"}: ${cJ.join(" ")}`
    }

    function EJ(JJ) {
      return `Your change didn't go in, because the code wouldn't run at all: ${JJ.join(" ")} Send the whole change again with that fixed.`
    }

    function VJ(JJ) {
      return `Fix this in your change: ${JJ.join(" ")}`
    }

    function KJ(JJ) {
      var cJ;
      if (void 0 === JJ.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const ZJ = Math.max(1, Math.round(((null !== (cJ = JJ.endedAt) && void 0 !== cJ ? cJ : JJ.ranAt) - JJ.ranAt) / 1e3)),
        FJ = `Your change ran in your world for ${ZJ} ${1===ZJ?"second":"seconds"}`;
      return 0 === JJ.errors.length ? {
        title: "Tested: no errors",
        text: `${FJ} without an error.`
      } : {
        title: 1 === JJ.errors.length ? "Tested: it showed an error" : `Tested: it showed ${JJ.errors.length} errors`,
        text: `${FJ} and showed: ${JJ.errors.join(" ")}`
      }
    }

    function yJ(JJ) {
      const [cJ, ZJ] = (0, FJ.useState)((() => xJ(JJ)));
      return (0, FJ.useEffect)((() => {
        const cJ = () => {
          ZJ(xJ(JJ))
        };
        return cJ(), YJ.add(cJ), () => {
          YJ.delete(cJ)
        }
      }), [JJ]), cJ
    }
  },
  35926: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      i: () => FJ
    });
    const FJ = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function UJ(JJ, cJ, ZJ) {
      return {
        key: JJ,
        label: `Code block at ${cJ.join(", ")}`,
        codeBlock: !0,
        pos: cJ,
        canChangePos: ZJ
      }
    }
  },
  35915: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ,
      f: () => eJ,
      i: () => XJ,
      k: () => UJ
    });
    const FJ = "code block",
      UJ = "World Code/";

    function eJ(JJ) {
      return JJ.trim().toLowerCase().startsWith(UJ.toLowerCase())
    }

    function XJ(JJ) {
      return JJ.trim().slice(UJ.length).replace(/^\.?\//, "")
    }
  },
  35894: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      B: () => MJ,
      F: () => SJ,
      H: () => DJ,
      I: () => gJ,
      J: () => KJ,
      M: () => yJ,
      Q: () => WJ,
      d: () => nJ,
      h: () => qJ,
      j: () => GJ,
      n: () => IJ,
      o: () => AJ,
      q: () => YJ,
      t: () => sJ,
      u: () => fJ,
      y: () => mJ
    });
    var FJ = ZJ(35886),
      UJ = ZJ(35892);
    const eJ = "bloxd-world-code-directory-sync",
      XJ = "handles",
      AJ = "[INVALID SCHEMATIC PLACEHOLDER]";

    function qJ(JJ, cJ) {
      return `${JJ}::${cJ}`
    }
    const jJ = new Set(["node_modules", ".git"]);

    function YJ() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function hJ() {
      return new Promise(((JJ, cJ) => {
        const ZJ = indexedDB.open(eJ, 1);
        ZJ.onupgradeneeded = () => {
          const JJ = ZJ.result;
          JJ.objectStoreNames.contains(XJ) || JJ.createObjectStore(XJ)
        }, ZJ.onsuccess = () => {
          JJ(ZJ.result)
        }, ZJ.onerror = () => {
          var JJ;
          cJ(null !== (JJ = ZJ.error) && void 0 !== JJ ? JJ : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function DJ(JJ, cJ) {
      const ZJ = await hJ();
      try {
        await new Promise(((FJ, UJ) => {
          const eJ = ZJ.transaction(XJ, "readwrite");
          eJ.objectStore(XJ).put(cJ, JJ), eJ.oncomplete = () => {
            FJ()
          }, eJ.onerror = () => {
            var JJ;
            UJ(null !== (JJ = eJ.error) && void 0 !== JJ ? JJ : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        ZJ.close()
      }
    }
    async function sJ(JJ) {
      const cJ = await hJ();
      try {
        return await new Promise(((ZJ, FJ) => {
          const UJ = cJ.transaction(XJ, "readonly").objectStore(XJ).get(JJ);
          UJ.onsuccess = () => {
            var JJ;
            ZJ(null !== (JJ = UJ.result) && void 0 !== JJ ? JJ : null)
          }, UJ.onerror = () => {
            var JJ;
            FJ(null !== (JJ = UJ.error) && void 0 !== JJ ? JJ : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        cJ.close()
      }
    }
    async function nJ(JJ) {
      const cJ = await hJ();
      try {
        await new Promise(((ZJ, FJ) => {
          const UJ = cJ.transaction(XJ, "readwrite");
          UJ.objectStore(XJ).delete(JJ), UJ.oncomplete = () => {
            ZJ()
          }, UJ.onerror = () => {
            var JJ;
            FJ(null !== (JJ = UJ.error) && void 0 !== JJ ? JJ : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        cJ.close()
      }
    }
    async function GJ(JJ) {
      const cJ = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await JJ.queryPermission(cJ) || "granted" === await JJ.requestPermission(cJ)
    }
    async function fJ(JJ) {
      if (!YJ()) return null;
      try {
        const cJ = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await DJ(JJ, cJ), cJ
      } catch (cJ) {
        if (function(JJ) {
            return JJ instanceof DOMException && "AbortError" === JJ.name
          }(cJ)) return null;
        throw cJ
      }
    }

    function xJ(JJ) {
      return JJ.startsWith(".") || jJ.has(JJ)
    }

    function rJ(JJ) {
      if (!JJ) return !0;
      const cJ = JJ.split("/");
      for (const ZJ of cJ)
        if ("" === ZJ || "." === ZJ || ".." === ZJ) return !1;
      return !0
    }
    async function vJ(JJ, cJ, ZJ) {
      for await (const [eJ, XJ] of JJ.entries()) {
        if ("directory" === XJ.kind) {
          if (xJ(eJ)) continue;
          const JJ = cJ ? `${cJ}/${eJ}` : eJ;
          if (!rJ(JJ)) continue;
          await vJ(XJ, JJ, ZJ);
          continue
        }
        const JJ = cJ ? `${cJ}/${eJ}` : eJ;
        if (!(0, FJ.u)(JJ) && !(0, UJ.b)(JJ)) continue;
        const AJ = await XJ.getFile();
        ZJ[JJ] = (0, UJ.b)(JJ) ? await bJ(AJ) : await AJ.text()
      }
    }
    async function mJ(JJ) {
      const cJ = {};
      return await vJ(JJ, "", cJ), cJ
    }

    function QJ(JJ) {
      return !(!JJ || JJ !== JJ.trim() || JJ.startsWith("/") || JJ.includes("\\") || JJ.includes("\0")) && rJ(JJ)
    }
    async function EJ(JJ, cJ, ZJ) {
      const FJ = cJ.split("/"),
        UJ = FJ[FJ.length - 1];
      let eJ = JJ;
      for (let XJ = 0; XJ < FJ.length - 1; XJ++) eJ = await eJ.getDirectoryHandle(FJ[XJ], {
        create: ZJ
      });
      return {
        dir: eJ,
        fileName: UJ
      }
    }
    async function VJ(JJ, cJ, ZJ) {
      if (!QJ(cJ)) throw new Error(`Refusing to write unsafe path: ${cJ}`);
      const {
        dir: FJ,
        fileName: UJ
      } = await EJ(JJ, cJ, !0), eJ = await FJ.getFileHandle(UJ, {
        create: !0
      }), XJ = await eJ.createWritable();
      await XJ.write(ZJ), await XJ.close()
    }
    async function KJ(JJ, cJ, ZJ) {
      const FJ = await async function(JJ, cJ) {
        if (!QJ(cJ)) return null;
        try {
          const {
            dir: ZJ,
            fileName: FJ
          } = await EJ(JJ, cJ, !1), UJ = await ZJ.getFileHandle(FJ), eJ = await UJ.getFile();
          return await eJ.text()
        } catch (ZJ) {
          if (ZJ instanceof DOMException && ("NotFoundError" === ZJ.name || "NotAllowedError" === ZJ.name)) return null;
          throw ZJ
        }
      }(JJ, cJ);
      FJ !== ZJ && await VJ(JJ, cJ, ZJ)
    }
    async function yJ(JJ, cJ, ZJ) {
      if (!(0, FJ.u)(cJ) && !(0, UJ.b)(cJ)) throw new Error(`Refusing to write non-allowlisted path: ${cJ}`);
      if ((0, UJ.b)(cJ)) {
        if (await wJ(JJ, cJ) === AJ) throw new Error(`Move the binary schematic ${cJ} outside the linked folder before syncing its placeholder`)
      }
      await VJ(JJ, cJ, ZJ)
    }
    async function SJ(JJ, cJ) {
      if (!QJ(cJ)) throw new Error(`Refusing to remove unsafe path: ${cJ}`);
      try {
        const {
          dir: ZJ,
          fileName: FJ
        } = await EJ(JJ, cJ, !1);
        await ZJ.removeEntry(FJ)
      } catch (ZJ) {
        if (ZJ instanceof DOMException && ("NotFoundError" === ZJ.name || "NotAllowedError" === ZJ.name)) return;
        throw ZJ
      }
    }
    async function IJ(JJ, cJ) {
      if (!QJ(cJ)) return null;
      try {
        const ZJ = cJ.split("/");
        let FJ = JJ;
        for (const JJ of ZJ) FJ = await FJ.getDirectoryHandle(JJ);
        return FJ
      } catch (ZJ) {
        if (ZJ instanceof DOMException && ("NotFoundError" === ZJ.name || "NotAllowedError" === ZJ.name)) return null;
        throw ZJ
      }
    }
    async function MJ(JJ, cJ) {
      if ((0, FJ.u)(cJ) || (0, UJ.b)(cJ)) {
        if ((0, UJ.b)(cJ)) {
          if (await wJ(JJ, cJ) === AJ) throw new Error(`Refusing to remove a binary schematic: ${cJ}`)
        }
        await SJ(JJ, cJ)
      }
    }
    async function bJ(JJ) {
      if (JJ.size > 64) return AJ;
      const cJ = await JJ.text();
      return Array.from(cJ).some((JJ => {
        const cJ = JJ.charCodeAt(0);
        return cJ < 9 || cJ > 13 && cJ < 32 || 65533 === cJ
      })) ? AJ : cJ
    }
    async function wJ(JJ, cJ) {
      try {
        const {
          dir: ZJ,
          fileName: FJ
        } = await EJ(JJ, cJ, !1);
        return await bJ(await (await ZJ.getFileHandle(FJ)).getFile())
      } catch (ZJ) {
        if (ZJ instanceof DOMException && "NotFoundError" === ZJ.name) return null;
        throw ZJ
      }
    }
    async function WJ(JJ, cJ) {
      const ZJ = await mJ(JJ);
      for (const FJ of Object.keys(ZJ)) FJ in cJ || (0, UJ.b)(FJ) || await MJ(JJ, FJ);
      for (const [eJ, XJ] of Object.entries(cJ))((0, FJ.u)(eJ) || (0, UJ.b)(eJ)) && await yJ(JJ, eJ, XJ)
    }

    function gJ(JJ, cJ) {
      var ZJ, FJ;
      let UJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const eJ = null !== (ZJ = UJ.debounceMs) && void 0 !== ZJ ? ZJ : 300,
        XJ = null !== (FJ = UJ.pollMs) && void 0 !== FJ ? FJ : 1e3;
      let AJ = !1,
        qJ = null,
        jJ = null,
        YJ = null;
      const hJ = () => {
          AJ || (qJ && clearTimeout(qJ), qJ = setTimeout((() => {
            qJ = null, DJ()
          }), eJ))
        },
        DJ = async () => {
          if (!AJ) try {
            if (!await GJ(JJ, "readwrite")) return;
            const ZJ = await mJ(JJ);
            AJ || cJ(ZJ)
          } catch (ZJ) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", ZJ)
          }
        };
      DJ();
      const sJ = window.FileSystemObserver;
      if (sJ) try {
        YJ = new sJ((() => {
          hJ()
        })), YJ.observe(JJ, {
          recursive: !0
        })
      } catch (nJ) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", nJ), YJ = null
      }
      return YJ || (jJ = setInterval((() => {
        hJ()
      }), XJ)), () => {
        AJ = !0, qJ && clearTimeout(qJ), jJ && clearInterval(jJ), YJ && YJ.disconnect()
      }
    }
  },
  4225: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => fJ,
      d: () => xJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(1086),
      AJ = ZJ(4233),
      qJ = ZJ(1675),
      jJ = ZJ(2175),
      YJ = ZJ(4242),
      hJ = ZJ(990);
    const DJ = new WeakMap;
    let sJ = 0;

    function nJ(JJ) {
      let cJ = DJ.get(JJ);
      return void 0 === cJ && (cJ = sJ++, DJ.set(JJ, cJ)), cJ
    }

    function GJ(JJ) {
      let {
        piece: cJ
      } = JJ;
      return "space" === cJ.kind ? (0, hJ.jsx)(hJ.Fragment, {
        children: cJ.text
      }) : (0, hJ.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${cJ.delayMs}ms`
        },
        children: (0, hJ.jsx)(AJ.c, {
          text: "icon" === cJ.kind ? `[[${cJ.icon}]]` : cJ.text
        })
      })
    }

    function fJ(JJ) {
      let {
        display: cJ
      } = JJ;
      const {
        selectedLanguage: ZJ
      } = (0, XJ.F)(), FJ = (0, eJ.useMemo)((() => (0, YJ.d)((0, YJ.f)(cJ).plan.pieces)), [cJ, ZJ.code]);
      return (0, hJ.jsxs)("div", {
        className: UJ()("Dialogue", {
          DialogueAnimateIn: !1 !== cJ.animateIn
        }),
        children: [cJ.speakerName && (0, hJ.jsx)(qJ.d, {
          text: cJ.speakerName,
          className: "DialogueSpeaker"
        }), (0, hJ.jsx)("p", {
          className: "DialogueLine",
          children: FJ.map(((JJ, cJ) => 1 === JJ.length && "space" === JJ[0].kind ? JJ[0].text : (0, hJ.jsx)("span", {
            className: "DialogueGlue",
            children: JJ.map(((JJ, cJ) => (0, hJ.jsx)(GJ, {
              piece: JJ
            }, cJ)))
          }, cJ)))
        })]
      })
    }
    const xJ = (0, eJ.memo)((function() {
      const JJ = (0, jJ.f)("dialogue");
      return (0, hJ.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: JJ && (0, hJ.jsx)(fJ, {
          display: JJ
        }, nJ(JJ))
      })
    }))
  },
  35745: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => sJ,
      e: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2514),
      eJ = ZJ(1326),
      XJ = ZJ(1743),
      AJ = ZJ(35678),
      qJ = ZJ(535),
      jJ = ZJ(926),
      YJ = ZJ.n(jJ),
      hJ = ZJ(990);
    const DJ = {},
      sJ = (0, FJ.memo)((function() {
        const JJ = (0, UJ.c)();
        return (0, eJ.i)("damagedByOtherPlayer", (cJ => {
          let {
            ac: ZJ,
            direction: FJ
          } = cJ;
          const UJ = ZJ || "nonDirectional";
          if (DJ[UJ]) {
            const cJ = DJ[UJ];
            clearTimeout(cJ.timeout), cJ.direction = FJ, cJ.timeout = setTimeout((() => {
              delete DJ[UJ], JJ()
            }), 800)
          } else DJ[UJ] = {
            direction: FJ,
            vW: null,
            timeout: setTimeout((() => {
              delete DJ[UJ], JJ()
            }), 800)
          };
          JJ()
        })), (0, XJ.b)("kill", (cJ => {
          let {
            killer: ZJ,
            victim: FJ
          } = cJ;
          const UJ = FJ.id;
          ZJ.local && UJ && UJ in DJ && (clearTimeout(DJ[UJ].timeout), delete DJ[UJ], JJ())
        })), (0, FJ.useEffect)((() => {
          const JJ = (0, AJ.g)("turnDamageIndicators", nJ);
          return () => {
            JJ();
            for (const JJ in DJ) clearTimeout(DJ[JJ].timeout), delete DJ[JJ]
          }
        }), []), (0, hJ.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(DJ).map((JJ => {
            let [cJ, ZJ] = JJ;
            const FJ = (0, qJ.P)(ZJ.direction);
            return (0, hJ.jsx)("div", {
              ref: JJ => {
                DJ[cJ] && (DJ[cJ].vW = JJ)
              },
              className: YJ()("DamageIndicator", {
                DamageIndicatorFullCircle: FJ
              })
            }, cJ)
          }))
        })
      }));

    function nJ(JJ) {
      for (const cJ in DJ) {
        const {
          direction: ZJ,
          vW: FJ
        } = DJ[cJ];
        if ((0, qJ.P)(ZJ)) continue;
        const UJ = ZJ - JJ;
        FJ.style.rotate = `${UJ}rad`
      }
    }
  },
  35617: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => fJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(60),
      eJ = ZJ(1086),
      XJ = ZJ(926),
      AJ = ZJ.n(XJ),
      qJ = ZJ(1599),
      jJ = ZJ(942),
      YJ = ZJ(1181),
      hJ = ZJ(1357),
      DJ = ZJ(1560),
      sJ = ZJ(1350),
      nJ = ZJ(990);
    const GJ = 14;

    function fJ(JJ) {
      let {
        className: cJ,
        triggerElementRef: ZJ,
        options: XJ
      } = JJ;
      const {
        t: fJ
      } = (0, eJ.F)(), [xJ, rJ] = (0, FJ.useState)(!1), [vJ, mJ] = (0, FJ.useState)({
        x: 0,
        y: 0
      }), QJ = (0, FJ.useRef)(null);
      (0, FJ.useEffect)((() => {
        let JJ = null;
        const cJ = cJ => {
            JJ = {
              x: cJ.clientX,
              y: cJ.clientY
            }
          },
          FJ = cJ => {
            if (null === JJ || !(0, sJ.d)(JJ, cJ)) return;
            JJ = null;
            const ZJ = GJ * (0, qJ.getRemInPx)();
            mJ({
              x: Math.min(cJ.clientX, window.innerWidth - ZJ - 5),
              y: cJ.clientY
            }), rJ((JJ => !JJ))
          },
          UJ = JJ => {
            var cJ;
            null !== (cJ = QJ.current) && void 0 !== cJ && cJ.contains(JJ.relatedTarget) || rJ(!1)
          },
          eJ = ZJ.current;
        return eJ.addEventListener("pointerdown", cJ), eJ.addEventListener("pointerup", FJ), eJ.addEventListener("mouseleave", UJ), () => {
          eJ.removeEventListener("pointerdown", cJ), eJ.removeEventListener("pointerup", FJ), eJ.removeEventListener("mouseleave", UJ)
        }
      }), [ZJ]), (0, FJ.useEffect)((() => {
        if (xJ) return (0, DJ.d)("pointerdown", (JJ => {
          !QJ.current || QJ.current.contains(JJ.target) || ZJ.current.contains(JJ.target) || rJ(!1)
        }))
      }), [xJ, ZJ]), (0, FJ.useLayoutEffect)((() => {
        if (!xJ || !QJ.current) return;
        const JJ = QJ.current.getBoundingClientRect().height,
          cJ = Math.max(5, window.innerHeight - JJ - 5);
        vJ.y > cJ && mJ({
          x: vJ.x,
          y: cJ
        })
      }), [xJ, vJ]), (0, YJ.p)("popup", QJ, (() => {
        rJ(!1)
      }), xJ);
      const EJ = XJ.filter((JJ => !1 !== JJ.show));
      return xJ && 0 !== EJ.length ? (0, UJ.createPortal)((0, nJ.jsx)("div", {
        ref: QJ,
        className: AJ()("FloatingActions", {
          [cJ]: cJ
        }),
        style: {
          width: `${GJ}rem`,
          top: vJ.y,
          left: vJ.x
        },
        children: EJ.map((JJ => {
          let {
            icon: cJ,
            text: ZJ,
            onPointerDown: FJ,
            analyticsClick: UJ
          } = JJ;
          return (0, nJ.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: JJ => {
              void 0 !== UJ && (0, hJ.f)(UJ), FJ(JJ), rJ(!1), JJ.stopPropagation()
            },
            children: [(0, nJ.jsx)(jJ.c, {
              name: cJ
            }), (0, nJ.jsx)("div", {
              children: fJ(ZJ)
            })]
          }, ZJ)
        }))
      }), function() {
        var JJ;
        return null !== (JJ = document.querySelector(".WholeAppWrapperInner")) && void 0 !== JJ ? JJ : document.body
      }()) : null
    }
  },
  35774: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => Pe
    });
    var FJ = ZJ(35658),
      UJ = ZJ(47),
      eJ = ZJ(1843),
      XJ = ZJ(3950),
      AJ = ZJ(3957),
      qJ = ZJ(2175),
      jJ = ZJ(1703),
      YJ = ZJ(990);

    function hJ(JJ) {
      let {
        className: cJ,
        style: ZJ,
        vw: FJ,
        maxPx: UJ,
        children: eJ
      } = JJ;
      console.assert("number" === typeof FJ && "number" === typeof UJ, "vw and maxPx passed to Text must be numbers");
      const XJ = window.innerWidth * (FJ / 100) > UJ ? `${UJ}px` : `${FJ}vw`;
      return (0, YJ.jsx)("div", {
        className: cJ,
        style: {
          ...ZJ,
          fontSize: XJ
        },
        children: eJ
      })
    }
    var DJ = ZJ(35778),
      sJ = ZJ(1329),
      nJ = ZJ(17),
      GJ = ZJ(1725),
      fJ = ZJ(942);

    function xJ(JJ) {
      let {
        tasks: cJ,
        lastDisplayedTasks: ZJ
      } = JJ;
      return (0, YJ.jsx)(YJ.Fragment, {
        children: Object.keys(cJ).map((JJ => (0, YJ.jsx)(rJ, {
          task: cJ[JJ],
          lastDisplayedAs: ZJ[JJ]
        }, cJ[JJ].text)))
      })
    }

    function rJ(JJ) {
      let {
        task: cJ,
        lastDisplayedAs: ZJ
      } = JJ;
      const [FJ, eJ] = (0, UJ.useState)(null !== ZJ && void 0 !== ZJ && ZJ.progress ? ZJ.progress / cJ.goal : 0), [XJ, AJ] = (0, UJ.useState)(!1), [qJ, jJ] = (0, UJ.useState)(cJ.claimed || !1);
      return (0, UJ.useEffect)((() => {
        eJ(cJ.progress / cJ.goal)
      }), [cJ.progress, cJ.goal]), qJ ? null : (0, YJ.jsxs)("div", {
        className: "Task",
        children: [(0, YJ.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, YJ.jsx)(hJ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: cJ.text
          })
        }), cJ.progress < cJ.goal ? (0, YJ.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== FJ ? (0, YJ.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * FJ + "%"
            }
          }) : null, (0, YJ.jsx)("div", {
            className: "TaskProgressText",
            children: `${cJ.progress}/${cJ.goal}`
          })]
        }) : (0, YJ.jsx)(sJ.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            AJ(!0)
          },
          children: (0, YJ.jsx)(hJ, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), XJ ? (0, YJ.jsx)(vJ, {
          task: cJ,
          close: () => {
            cJ.claimed = !0, jJ(!0), AJ(!1)
          }
        }) : null]
      })
    }

    function vJ(JJ) {
      let {
        task: cJ,
        close: ZJ
      } = JJ;
      const [FJ, eJ] = (0, UJ.useState)({}), [XJ, AJ] = (0, UJ.useState)("closed");
      (0, UJ.useEffect)((() => {
        let JJ;
        return "animStart" === XJ && (JJ = setTimeout((() => {
          AJ("animEnd")
        }), 700)), () => {
          clearTimeout(JJ)
        }
      }), [XJ]), (0, DJ.d)((() => {
        jJ.gameBridge.send("completeTask", cJ.text)
      }));
      const hJ = (0, qJ.f)("currencyAmounts");
      return (0, YJ.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === XJ)
            if (0 === cJ.rewards.length) ZJ(), jJ.gameBridge.send("completeTask", cJ.text);
            else {
              const JJ = {
                ...GJ.b.get("currencyAmounts")
              };
              for (const cJ in FJ) JJ[cJ] = {
                ...JJ[cJ],
                amount: JJ[cJ].amount + FJ[cJ]
              };
              GJ.b.apply({
                currencyAmounts: JJ
              }), AJ("closed")
            }
          else "closed" === XJ && (eJ(cJ.rewards.pop()), AJ("animStart"))
        },
        children: [(0, YJ.jsx)("img", {
          className: "Chest",
          alt: "closed" !== XJ ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==XJ?"open":"closed"}.png`
        }), (0, YJ.jsx)("div", {
          className: "Rewards",
          children: "closed" !== XJ ? Object.keys(FJ).map((JJ => {
            const cJ = null === hJ || void 0 === hJ ? void 0 : hJ[JJ];
            return !cJ || cJ.hidden ? null : (0, YJ.jsxs)("div", {
              className: "Reward",
              children: [(0, YJ.jsx)(fJ.c, {
                name: cJ.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: cJ.iconColour
                }
              }), (0, YJ.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === XJ ? 0 : FJ[JJ]
              })]
            }, JJ)
          })) : null
        }), "animStart" === XJ ? (0, YJ.jsx)(mJ, {}) : null, (0, YJ.jsx)("div", {
          className: "ChestsLeft",
          children: cJ.rewards.length
        })]
      })
    }

    function mJ() {
      const [JJ, cJ] = (0, UJ.useState)(0);
      (0, UJ.useEffect)((() => {
        cJ(1)
      }), []);
      return (0, YJ.jsx)(YJ.Fragment, {
        children: Array.from({
          length: 40
        }).map(((cJ, ZJ) => (0, YJ.jsx)(fJ.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * JJ * Math.cos(ZJ / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * JJ * Math.sin(ZJ / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === JJ ? 1 : 0
          }
        }, ZJ)))
      })
    }
    nJ.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const JJ = new Image,
          cJ = new Image;
        JJ.src = "/textures/miscImages/Treasure Chest open.png", cJ.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var QJ = ZJ(2623),
      EJ = ZJ(1022),
      VJ = ZJ(1675),
      KJ = ZJ(1326),
      yJ = ZJ(235),
      SJ = ZJ(1743),
      IJ = ZJ(1232);

    function MJ(JJ) {
      var cJ, ZJ;
      let {
        byId: FJ,
        localId: UJ
      } = JJ;
      return null === UJ ? null : null !== (cJ = null === (ZJ = FJ[UJ]) || void 0 === ZJ ? void 0 : ZJ.name) && void 0 !== cJ ? cJ : null
    }

    function bJ(JJ) {
      let {
        lbStats: cJ,
        storedState: ZJ = {}
      } = JJ;
      const {
        userContext: FJ
      } = (0, EJ.d)(), eJ = (0, SJ.d)("players", MJ), [XJ, AJ] = (0, UJ.useState)(ZJ.selectedCat || (null === cJ || void 0 === cJ ? void 0 : cJ[0]) || null), [qJ, hJ] = (0, UJ.useState)(ZJ.selectedTimeframe || "Today"), [DJ, sJ] = (0, UJ.useState)(null);
      (0, UJ.useEffect)((() => {
        null === XJ && null !== cJ && cJ.length > 0 && AJ(cJ[0])
      }), [cJ, XJ]);
      const [nJ, GJ] = (0, UJ.useState)(ZJ.seeingTop || !1), [fJ, xJ] = (0, UJ.useState)(!1), rJ = (0, UJ.useCallback)((() => {
        null !== XJ && null !== qJ && (jJ.gameBridge.send("requestLeaderboard", {
          category: XJ.value,
          timeframe: qJ,
          seeTop: nJ
        }), mJ(!0), gJ && HJ(null))
      }), [XJ, qJ, ZJ, nJ]);
      (0, UJ.useEffect)((() => {
        rJ(), ZJ.selectedCat = XJ, ZJ.selectedTimeframe = qJ, ZJ.seeingTop = nJ
      }), [XJ, qJ, ZJ, nJ, rJ]), (0, UJ.useEffect)((() => {
        if ((null === DJ || void 0 === DJ ? void 0 : DJ.length) > 0)
          if (nJ) nJ && xJ(null === bJ(DJ));
          else {
            for (const JJ of DJ)
              if (1 === JJ.place) return void xJ(!1);
            xJ(!0)
          }
      }), [DJ, nJ]), (0, KJ.i)("leaderboardResponse", (JJ => {
        let {
          category: ZJ,
          timeframe: FJ,
          data: UJ
        } = JJ;
        for (let eJ = 0; eJ < cJ; eJ++)
          if (cJ[eJ].value === ZJ) {
            AJ(cJ[eJ]);
            break
          } hJ(FJ), sJ(UJ), mJ(!1)
      }));
      const [vJ, mJ] = (0, UJ.useState)(!0);

      function bJ(JJ) {
        const cJ = MJ(jJ.gameBridge.latest("players"));
        for (let ZJ = 0; ZJ < JJ.length; ZJ++)
          if (JJ[ZJ].name === cJ) return JJ[ZJ].place;
        return null
      }
      const [wJ, WJ] = (0, UJ.useState)(!1), [gJ, HJ] = (0, UJ.useState)(null);
      (0, UJ.useEffect)((() => {
        if (DJ && !wJ) {
          const JJ = bJ(DJ);
          JJ < (ZJ.lastSeenPlayerPlace || 0) && HJ(ZJ.lastSeenPlayerPlace - JJ), WJ(!0)
        }
      }), [DJ, ZJ, wJ]), (0, UJ.useEffect)((() => () => {
        DJ && (ZJ.lastSeenPlayerPlace = bJ(DJ))
      }), [DJ, ZJ]);
      const PJ = (0, UJ.useRef)(null),
        [kJ, pJ] = (0, UJ.useState)(void 0);
      return (0, UJ.useEffect)((() => {
        var JJ, cJ;
        kJ !== (null === (JJ = PJ.current) || void 0 === JJ ? void 0 : JJ.offsetHeight) && pJ(null === (cJ = PJ.current) || void 0 === cJ ? void 0 : cJ.offsetHeight)
      })), FJ.isLoggedIn() ? (0, YJ.jsxs)(YJ.Fragment, {
        children: [(0, YJ.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, YJ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, YJ.jsx)(QJ.d, {
              options: cJ.map((JJ => ({
                label: JJ.label,
                value: JJ.value
              }))),
              value: XJ,
              onChange: JJ => {
                AJ(JJ)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, YJ.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, YJ.jsx)(QJ.d, {
              options: yJ.wc.map((JJ => ({
                value: JJ,
                label: JJ,
                className: "LBDropdownMenuItem"
              }))),
              value: qJ,
              onChange: JJ => {
                hJ(JJ.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), fJ ? (0, YJ.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              GJ(!nJ)
            },
            children: nJ ? "See Yourself" : "See Top"
          }) : null]
        }), (0, YJ.jsx)("div", {
          className: "LBTableWrapper",
          children: vJ ? (0, YJ.jsx)("div", {
            className: "LoaderContainer",
            children: (0, YJ.jsx)(IJ.c, {})
          }) : null === gJ ? (0, YJ.jsx)(YJ.Fragment, {
            children: (0, YJ.jsxs)("table", {
              className: "LBTable",
              children: [(0, YJ.jsx)("thead", {
                className: "LBTableTHead",
                ref: PJ,
                children: (0, YJ.jsxs)("tr", {
                  children: [(0, YJ.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, YJ.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, YJ.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: XJ.label.toUpperCase()
                  })]
                })
              }), (0, YJ.jsx)("tbody", {
                children: DJ.map((JJ => (0, YJ.jsxs)("tr", {
                  className: "LBTableTR " + (JJ.name === eJ ? "LBTableTRYou" : ""),
                  children: [(0, YJ.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${JJ.place}`
                  }), (0, YJ.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, YJ.jsx)(VJ.d, {
                      text: [{
                        entityName: JJ.name
                      }]
                    })
                  }), (0, YJ.jsx)("td", {
                    className: "LBTableTD",
                    children: JJ.stat
                  })]
                }, JJ.name)))
              })]
            })
          }) : (0, YJ.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              HJ(null)
            },
            children: (0, YJ.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, YJ.jsx)("div", {
                className: "TriangleUp"
              }), (0, YJ.jsx)("div", {
                className: "LBIncreaseText",
                children: `${gJ} Place${gJ>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, YJ.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, YJ.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, YJ.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var wJ = ZJ(1017),
      WJ = ZJ(80),
      gJ = ZJ(29),
      HJ = ZJ(2910);
    const PJ = (0, UJ.memo)((function(JJ) {
      let {
        show: cJ,
        onClose: ZJ
      } = JJ;
      (0, wJ.d)();
      const FJ = (0, qJ.f)("_tasks"),
        eJ = (0, qJ.f)("_availableLeaderboards"),
        [jJ, hJ] = (0, UJ.useState)({});
      FJ && Object.keys(FJ).length > 0 && 0 === Object.keys(jJ).length && hJ(FJ);
      const [DJ] = (0, UJ.useState)({
        tasks: {},
        leaderboard: {}
      }), sJ = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!FJ && Object.keys(FJ).length > 0,
          content: (0, YJ.jsx)(xJ, {
            tasks: FJ,
            lastDisplayedTasks: jJ
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === eJ || void 0 === eJ ? void 0 : eJ.length) > 0,
          content: (0, YJ.jsx)(bJ, {
            lbStats: eJ,
            storedState: DJ.leaderboard
          })
        }
      };

      function nJ() {
        for (const JJ in sJ)
          if (sJ[JJ].getIsDefined()) return JJ;
        return null
      }
      const [GJ, fJ] = (0, UJ.useState)(nJ());

      function rJ() {
        hJ({
          ...FJ
        }), ZJ()
      }(0, UJ.useEffect)((() => {
        GJ || fJ(nJ())
      }), [nJ()]), (0, AJ.c)(!0, GJ && cJ), (0, UJ.useEffect)((() => {
        cJ && !GJ && (console.log("CLOSE"), rJ())
      }), [cJ, GJ]);
      const [vJ, mJ] = (0, UJ.useState)(!1);
      return (0, UJ.useEffect)((() => {
        cJ && GJ && !vJ && mJ(!0)
      }), [cJ, vJ, GJ]), (0, UJ.useEffect)((() => {
        !vJ && FJ && "tasks" !== GJ && fJ("tasks")
      }), [vJ, FJ, GJ]), (0, YJ.jsx)(YJ.Fragment, {
        children: GJ ? (0, YJ.jsx)(HJ.b, {
          className: "RetentionFeaturesWrapper",
          show: cJ,
          children: (0, YJ.jsxs)(XJ.c, {
            close: rJ,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, YJ.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, YJ.jsx)(pJ, {}), (0, YJ.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, YJ.jsx)(kJ, {
                  setCategory: fJ,
                  menuCategories: sJ,
                  selectedCat: GJ
                }), (0, YJ.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: sJ[GJ].content
                })]
              })]
            }), (0, YJ.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: WJ.featureFlags.useDiscord && (0, YJ.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, YJ.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, YJ.jsx)(dJ, {
                    tasks: FJ
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function kJ(JJ) {
      let {
        selectedCat: cJ,
        setCategory: ZJ,
        menuCategories: FJ
      } = JJ;
      return (0, YJ.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(FJ).map((JJ => FJ[JJ].getIsDefined() ? (0, YJ.jsx)("div", {
          className: "MenuHeaderCategory " + (JJ === cJ ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            ZJ(JJ)
          },
          children: FJ[JJ].Title
        }, JJ) : null))
      })
    }

    function pJ() {
      const JJ = (0, qJ.f)("currencyAmounts");
      return (0, YJ.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== JJ && void 0 !== JJ ? JJ : {}).map((cJ => {
          const ZJ = JJ[cJ];
          return ZJ.hidden ? null : (0, YJ.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, YJ.jsx)(fJ.c, {
              name: ZJ.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: ZJ.iconColour
              }
            }), (0, YJ.jsx)("div", {
              className: "UiCurrencyAmount",
              children: ZJ.amount
            })]
          }, cJ)
        }))
      })
    }

    function dJ(JJ) {
      let {
        tasks: cJ
      } = JJ;
      return (0, YJ.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, YJ.jsx)(fJ.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            gJ.j.setItem("DiscordPressed", !0), jJ.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in cJ && nJ.i.Uf("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, YJ.jsx)(eJ.e, {})]
      })
    }
    var zJ = ZJ(13),
      NJ = ZJ(1528),
      OJ = ZJ(35599),
      TJ = ZJ(8487),
      CJ = ZJ(4049),
      uJ = ZJ(143),
      iJ = ZJ(1112),
      RJ = ZJ(1259),
      LJ = ZJ(2292),
      aJ = ZJ(1086),
      BJ = ZJ(1537),
      tJ = ZJ(2133),
      oJ = ZJ(2117),
      lJ = ZJ(1876),
      Jc = ZJ(1813),
      cc = ZJ(1162),
      Zc = ZJ(1357),
      Fc = ZJ(4006);

    function Uc(JJ) {
      const cJ = {
        lobbyName: JJ,
        answer: null,
        response: Fc.e.getSocialSettings(JJ)
      };
      return cJ.response.then((JJ => {
        cJ.answer = JJ
      })), cJ
    }
    const ec = new Map;

    function Xc(JJ) {
      const [cJ] = (0, UJ.useState)((() => function(JJ) {
        var cJ;
        const ZJ = null !== (cJ = ec.get(JJ)) && void 0 !== cJ ? cJ : null;
        return null !== ZJ && void 0 !== ZJ && ZJ.answer && "error" in ZJ.answer ? null : ZJ
      }(JJ))), [ZJ, FJ] = (0, UJ.useState)((() => null !== cJ && void 0 !== cJ && cJ.answer && "settings" in cJ.answer ? cJ.answer.settings : null)), [eJ, XJ] = (0, UJ.useState)(!0), [AJ, qJ] = (0, UJ.useState)(null !== ZJ), jJ = (0, UJ.useRef)(ZJ);
      jJ.current = ZJ;
      const YJ = (0, UJ.useRef)(0),
        hJ = (0, UJ.useRef)(0),
        DJ = (0, UJ.useRef)(!1),
        sJ = (0, UJ.useRef)(!0),
        nJ = (0, UJ.useCallback)((async cJ => {
          const ZJ = ++YJ.current,
            UJ = await (null !== cJ && void 0 !== cJ ? cJ : Fc.e.getSocialSettings(JJ));
          sJ.current && ZJ === YJ.current && (qJ(!0), XJ(!1), "error" in UJ || FJ(UJ.settings))
        }), [JJ]),
        GJ = (0, UJ.useCallback)((() => {
          XJ(!0), nJ()
        }), [nJ]);
      (0, UJ.useEffect)((() => (sJ.current = !0, ec.delete(JJ), XJ(!0), nJ(null === cJ || void 0 === cJ ? void 0 : cJ.response), () => {
        sJ.current = !1
      })), [nJ, JJ, cJ]);
      const fJ = JJ => {
        YJ.current++, XJ(!1), jJ.current = JJ, FJ(JJ)
      };
      return {
        settings: ZJ,
        loading: eJ,
        answered: AJ,
        retry: GJ,
        change: async function(cJ, ZJ) {
          let {
            quiet: FJ = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const UJ = jJ.current;
          if (null === UJ) return !1;
          fJ(ZJ(UJ)), hJ.current > 0 && (DJ.current = !0), hJ.current++;
          const eJ = await Fc.e.setSocialSettings(JJ, cJ);
          hJ.current--;
          const XJ = !("error" in eJ);
          if (!sJ.current) return XJ;
          if (FJ);
          else if ("error" in eJ) lJ.f.showMessage({
            translationKey: eJ.error
          });
          else
            for (const JJ of eJ.notFound) lJ.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: JJ
              }
            });
          if (hJ.current > 0) return XJ;
          const AJ = DJ.current;
          return DJ.current = !1, !AJ && "settings" in eJ ? fJ(eJ.settings) : (AJ || fJ(UJ), nJ()), XJ
        }
      }
    }

    function Ac(JJ, cJ) {
      const ZJ = cJ.toLowerCase();
      for (const FJ of JJ)
        if (FJ.toLowerCase() === ZJ) return !0;
      return !1
    }

    function qc(JJ) {
      if (null === JJ) return !0;
      const {
        visibility: cJ
      } = JJ;
      return "public" === cJ || "unlisted" === cJ || "whitelist" === cJ && JJ.canManage
    }

    function jc(JJ, cJ, ZJ) {
      if (ZJ) {
        const ZJ = cJ.filter((cJ => !Ac(JJ.whitelist, cJ)));
        return {
          ...JJ,
          whitelist: [...JJ.whitelist, ...ZJ]
        }
      }
      return {
        ...JJ,
        whitelist: JJ.whitelist.filter((JJ => !Ac(cJ, JJ)))
      }
    }
    var Yc = ZJ(2312);

    function hc(JJ) {
      let {
        worldCode: cJ,
        message: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), {
        isTouchScreen: eJ
      } = (0, zJ.j)(["isTouchScreen"]), XJ = WJ.featureFlags.canUseInviteLinks, AJ = (0, TJ.j)(XJ && null === ZJ), [qJ, jJ] = (0, Yc.k)(), hJ = (0, UJ.useRef)(null);
      if (null !== ZJ) return (0, YJ.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, YJ.jsx)(fJ.c, {
          name: "lock"
        }), (0, YJ.jsx)("span", {
          children: ZJ
        })]
      });
      const DJ = XJ ? AJ : cJ,
        nJ = eJ && XJ && (0, Yc.e)();
      return (0, YJ.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!XJ && (0, YJ.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: FJ("worldSocial:worldCode")
        }), (0, YJ.jsx)("input", {
          ref: hJ,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== DJ && void 0 !== DJ ? DJ : "",
          "aria-label": FJ(XJ ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: JJ => {
            JJ.currentTarget.select()
          }
        }), (0, YJ.jsxs)(sJ.d, {
          className: "WorldSocialCopy",
          disabled: null === DJ,
          onClick: () => {
            null !== DJ && (0, Yc.h)(DJ, {
              useShareSheet: nJ,
              onOutcome: JJ => {
                if ((0, Zc.f)({
                    id: "world_social.copy_link",
                    value: "copied" !== JJ || XJ ? JJ : "code"
                  }), "copied" === JJ) jJ();
                else if ("failed" === JJ) {
                  var cJ;
                  null === (cJ = hJ.current) || void 0 === cJ || cJ.focus(), lJ.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, YJ.jsx)(fJ.c, {
            name: qJ ? "check" : nJ ? "up-from-bracket" : "copy"
          }), " ", FJ(qJ ? "general:copied" : nJ ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var Dc = ZJ(926),
      sc = ZJ.n(Dc);
    const nc = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      Gc = ["unlisted", "public", "whitelist", "private"];

    function fc(JJ) {
      let {
        visibility: cJ,
        onPick: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), eJ = (0, UJ.useRef)([]);
      return (0, YJ.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": FJ("worldSocial:whoCanJoin"),
        children: Gc.map(((JJ, UJ) => {
          const XJ = JJ === cJ;
          return (0, YJ.jsxs)("button", {
            ref: JJ => {
              eJ.current[UJ] = JJ
            },
            type: "button",
            className: sc()("WorldSocialTile", {
              WorldSocialTileSelected: XJ
            }),
            "aria-pressed": XJ,
            tabIndex: XJ ? 0 : -1,
            onKeyDown: JJ => {
              ((JJ, cJ) => {
                const ZJ = "ArrowRight" === JJ.key || "ArrowDown" === JJ.key ? 1 : "ArrowLeft" === JJ.key || "ArrowUp" === JJ.key ? -1 : 0;
                var FJ;
                0 !== ZJ && (JJ.preventDefault(), null === (FJ = eJ.current[(cJ + ZJ + Gc.length) % Gc.length]) || void 0 === FJ || FJ.focus())
              })(JJ, UJ)
            },
            onClick: () => {
              ZJ(JJ)
            },
            children: [(0, YJ.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, YJ.jsx)(fJ.c, {
                name: nc[JJ]
              })
            }), (0, YJ.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, YJ.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: FJ(`worldSocial:${JJ}`)
              }), (0, YJ.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: FJ(`worldSocial:${JJ}Description`)
              })]
            })]
          }, JJ)
        }))
      })
    }
    var xc = ZJ(521),
      rc = ZJ(2289),
      vc = ZJ(2246),
      mc = ZJ(3826);

    function Qc(JJ, cJ) {
      var ZJ;
      return {
        isError: !1,
        name: JJ,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== cJ && void 0 !== cJ ? cJ : {},
        nameColour: null !== (ZJ = null === cJ || void 0 === cJ ? void 0 : cJ.nameColour) && void 0 !== ZJ ? ZJ : xc.d,
        location: {
          status: "offline"
        }
      }
    }

    function Ec(JJ) {
      let {
        player: cJ,
        isFriend: ZJ = !1,
        status: FJ,
        showLocation: UJ = void 0 === FJ,
        Hh: eJ,
        onSendFriendRequest: XJ,
        actions: AJ,
        zIndex: qJ
      } = JJ;
      const {
        t: jJ
      } = (0, aJ.F)();
      let hJ, DJ = FJ;
      return null !== eJ && void 0 !== eJ && eJ.on && (DJ = (0, YJ.jsxs)(YJ.Fragment, {
        children: [null !== FJ && void 0 !== FJ ? FJ : (0, YJ.jsx)(vc.c, {
          socialPreview: cJ
        }), (0, YJ.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", jJ("worldSocial:canJoin")]
        })]
      })), (AJ || eJ) && (hJ = (0, YJ.jsxs)(YJ.Fragment, {
        children: [AJ, eJ && (0, YJ.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, YJ.jsx)(mc.e, {
            checked: eJ.on,
            disabled: !1,
            ariaLabel: jJ("worldSocial:letJoin", {
              playerName: cJ.name
            }),
            onChange: JJ => {
              eJ.onChange(JJ.target.checked)
            }
          })
        })]
      })), (0, YJ.jsx)(rc.e, {
        playerSocialPreview: cJ,
        isFriend: ZJ,
        hideFriendBadge: !0,
        onFriendRemoved: ZJ ? JJ => {
          BJ.b.removeFriendFromState(JJ)
        } : void 0,
        status: DJ,
        showLocation: UJ,
        onSendFriendRequest: XJ,
        opensProfileCard: !1,
        zIndex: qJ,
        children: hJ
      })
    }

    function Vc(JJ) {
      let {
        row: cJ,
        Hh: ZJ,
        canInvite: FJ,
        invited: UJ,
        onInvite: eJ,
        zIndex: XJ
      } = JJ;
      const {
        t: AJ
      } = (0, aJ.F)(), qJ = "online" === cJ.place ? sJ.d : sJ.g;
      return (0, YJ.jsx)(Ec, {
        player: cJ.friend,
        isFriend: !0,
        status: "here" === cJ.place ? AJ("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        Hh: ZJ,
        zIndex: XJ,
        actions: FJ && (0, YJ.jsx)(qJ, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: UJ,
          onClick: eJ,
          ariaLabel: `${AJ("worldSocial:invite")} ${cJ.friend.name}`,
          children: AJ(UJ ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var Kc = ZJ(2359);

    function yc(JJ) {
      let {
        playersHere: cJ,
        exclude: ZJ,
        XE: FJ
      } = JJ;
      const {
        t: eJ
      } = (0, aJ.F)(), XJ = (0, Kc.j)(Kc.g), [AJ, qJ] = (0, UJ.useState)([]), jJ = [], hJ = (JJ, cJ) => {
        const FJ = [...ZJ, ...jJ.map((JJ => JJ.player.name))];
        jJ.length < 3 && !Ac(FJ, JJ.name) && jJ.push({
          player: JJ,
          status: cJ
        })
      };
      for (const UJ of cJ) hJ(Qc(UJ.name, UJ.cosmetics, UJ.ranks), eJ("worldSocial:inThisWorld"));
      if ("loaded" === XJ.state.status)
        for (const UJ of XJ.state.recentPlayers) UJ.preview.name && !UJ.preview.isError && hJ({
          ...UJ.preview,
          location: {
            status: "offline"
          }
        }, eJ("worldSocial:playedWithYou"));
      const DJ = JJ => {
        qJ((cJ => [...cJ, JJ])), FJ(JJ).finally((() => {
          qJ((cJ => cJ.filter((cJ => cJ !== JJ))))
        }))
      };
      return (0, YJ.jsx)(YJ.Fragment, {
        children: jJ.map(((JJ, cJ) => {
          let {
            player: ZJ,
            status: FJ
          } = JJ;
          return (0, YJ.jsx)(Ec, {
            zIndex: jJ.length - cJ,
            player: ZJ,
            status: FJ,
            onSendFriendRequest: () => {
              DJ(ZJ.name)
            },
            actions: (0, YJ.jsx)(RJ.g, {
              tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                children: eJ("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, YJ.jsx)(sJ.d, {
                className: "FriendRequestButton",
                disabled: AJ.includes(ZJ.name),
                ariaLabel: `${eJ("recentPlayers:addFriend")} ${ZJ.name}`,
                onClick: () => {
                  DJ(ZJ.name)
                },
                children: (0, YJ.jsx)(fJ.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${ZJ.name}`)
        }))
      })
    }
    var Sc = ZJ(1566);

    function Ic(JJ) {
      let {
        XE: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, aJ.F)(), FJ = (0, UJ.useRef)(null), [eJ, XJ] = (0, UJ.useState)(""), [AJ, qJ] = (0, UJ.useState)(!1), jJ = () => {
        const JJ = eJ.trim();
        "" === JJ || AJ || (qJ(!0), cJ(JJ).then((JJ => {
          JJ && FJ.current && (FJ.current.value = "", XJ(""))
        })).finally((() => {
          qJ(!1)
        })))
      };
      return (0, YJ.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: JJ => {
          JJ.target === FJ.current && "Escape" !== JJ.key && JJ.stopPropagation()
        },
        children: [(0, YJ.jsx)(Sc.e, {
          className: "WorldSocialAddFriendInput",
          domRef: FJ,
          maxLength: 32,
          placeholderText: ZJ("worldSocial:addFriendPlaceholder"),
          ariaLabel: ZJ("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: JJ => {
            XJ(JJ)
          },
          onEnter: jJ
        }), (0, YJ.jsxs)(sJ.d, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: AJ || "" === eJ.trim(),
          onClick: jJ,
          children: [(0, YJ.jsx)(fJ.c, {
            name: "user-plus"
          }), " ", ZJ("socialBar:sendRequest")]
        })]
      })
    }
    const Mc = new Map;

    function bc(JJ) {
      const cJ = Mc.get(JJ);
      if (!cJ) return [];
      const ZJ = Date.now();
      for (const [FJ, UJ] of cJ) ZJ - UJ >= uJ.h && cJ.delete(FJ);
      return [...cJ.keys()]
    }
    var wc = ZJ(1122),
      Wc = ZJ(1387),
      gc = ZJ(4046),
      Hc = ZJ(105),
      Pc = ZJ(4030);
    const kc = ["auto", "auto_existing"];

    function pc(JJ) {
      return kc.includes(JJ)
    }

    function dc(JJ, cJ) {
      const ZJ = (0, wc.rb)(JJ);
      return null !== cJ && (0, wc.rb)(cJ) === ZJ || (0, Pc.b)().some((JJ => (0, wc.rb)(JJ.name) === ZJ))
    }
    const zc = new Set;

    function Nc(JJ) {
      return `worldSocialSeen:${JJ}`
    }

    function Oc(JJ) {
      return !JJ || zc.has(JJ) || !0 === gJ.j.getItem(Nc(JJ))
    }

    function Tc(JJ) {
      JJ && !zc.has(JJ) && (zc.add(JJ), gJ.j.setItem(Nc(JJ), !0))
    }

    function Cc(JJ) {
      let {
        show: cJ,
        onClose: ZJ,
        opener: FJ
      } = JJ;
      const {
        lobbyName: eJ,
        shownLobbyName: AJ
      } = (0, SJ.f)("connectedGame");
      return (0, UJ.useEffect)((() => {
        cJ && (0, Zc.f)({
          id: "world_social.open",
          value: FJ
        })
      }), [cJ]), (0, YJ.jsx)(XJ.c, {
        show: cJ && null !== eJ,
        close: ZJ,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== FJ,
        children: cJ && null !== eJ && (0, YJ.jsx)(uc, {
          lobbyName: eJ,
          worldCode: null !== AJ && void 0 !== AJ ? AJ : eJ,
          onClose: ZJ
        }, eJ)
      })
    }

    function uc(JJ) {
      var cJ;
      let {
        lobbyName: ZJ,
        worldCode: FJ,
        onClose: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, aJ.F)(), AJ = (0, UJ.useRef)(null), {
        settings: qJ,
        loading: jJ,
        answered: hJ,
        change: DJ,
        retry: nJ
      } = Xc(ZJ), GJ = (0, BJ.k)(), xJ = (0, SJ.f)("players"), rJ = (0, SJ.f)("hiddenPlayerNames"), [vJ, mJ] = (0, UJ.useState)([]), [QJ, VJ] = (0, UJ.useState)([]), [KJ, yJ] = (0, UJ.useState)(!1), MJ = (0, UJ.useMemo)((() => {
        var JJ, cJ;
        const ZJ = null === xJ.localId ? null : null !== (JJ = null === (cJ = xJ.byId[xJ.localId]) || void 0 === cJ ? void 0 : cJ.name) && void 0 !== JJ ? JJ : null;
        return xJ.ids.flatMap((JJ => {
          const cJ = xJ.byId[JJ];
          return null !== cJ && void 0 !== cJ && cJ.name && cJ.name !== ZJ ? [{
            name: cJ.name,
            cosmetics: cJ.cosmetics,
            ranks: cJ.ranks
          }] : []
        }))
      }), [xJ]), bJ = (0, UJ.useMemo)((() => function(JJ, cJ, ZJ) {
        const FJ = [],
          UJ = [],
          eJ = [];
        for (const XJ of JJ) !XJ.isError && XJ.name && ("inGame" === XJ.location.status && XJ.location.inLobbyName === cJ || Ac(ZJ, XJ.name) ? UJ.push({
          friend: XJ,
          place: "here"
        }) : "offline" === XJ.location.status ? eJ.push({
          friend: XJ,
          place: "offline"
        }) : FJ.push({
          friend: XJ,
          place: "online"
        }));
        return [...FJ, ...UJ, ...eJ]
      }(GJ.friends, ZJ, MJ.map((JJ => JJ.name)))), [GJ.friends, ZJ, MJ]), wJ = WJ.featureFlags.canSeeRealPlayerNames ? MJ.filter((JJ => null === (0, cc.d)(JJ.name, rJ))) : [], gJ = null !== qJ && void 0 !== qJ && qJ.canManage ? qJ : null, HJ = null !== gJ, PJ = null !== (cJ = null === qJ || void 0 === qJ ? void 0 : qJ.visibility) && void 0 !== cJ ? cJ : null, kJ = "whitelist" === (null === gJ || void 0 === gJ ? void 0 : gJ.visibility), pJ = "private" === PJ || "whitelist" === PJ && !HJ, {
        userContext: dJ
      } = (0, EJ.d)();
      (0, UJ.useEffect)((() => {
        HJ && dc(ZJ, dJ.getPersonalWorldLobbyName()) && Tc(dJ.whamm)
      }), [HJ, ZJ, dJ]);
      const zJ = pJ ? XJ("whitelist" === PJ ? "socialBar:inviteWorldManagersOnly" : HJ ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        NJ = null === zJ;
      (0, UJ.useEffect)((() => pJ ? void 0 : lJ.f.quietFriendAdded()), [pJ]), (0, UJ.useEffect)((() => lJ.f.quietFriendRequests()), []);
      const TJ = (0, UJ.useRef)(!1);
      (0, UJ.useEffect)((() => {
        const JJ = AJ.current,
          cJ = !TJ.current;
        TJ.current = !0;
        const ZJ = null === document.activeElement || document.activeElement === document.body;
        null !== JJ && void 0 !== JJ && JJ.contains(document.activeElement) || !cJ && !ZJ || (0, OJ.e)() || null === JJ || void 0 === JJ || JJ.focus({
          preventScroll: !0
        })
      }), [NJ]), (0, UJ.useEffect)((() => {
        const JJ = JJ => {
          "Escape" !== JJ.key || null !== document.activeElement && document.activeElement !== document.body || eJ()
        };
        return document.addEventListener("keydown", JJ), () => {
          document.removeEventListener("keydown", JJ)
        }
      }), [eJ]);
      const Fc = null === qJ && !hJ,
        Uc = (jJ || GJ.loading) && 0 === GJ.friends.length,
        ec = GJ.friends.flatMap((JJ => JJ.name ? [JJ.name] : [])),
        Yc = vJ.filter((JJ => !Ac(ec, JJ))),
        Dc = bJ.length + 3,
        sc = Yc.length + Dc,
        nc = KJ ? GJ.requests : GJ.requests.slice(0, 1),
        Gc = async function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const ZJ of function(JJ, cJ) {
              const ZJ = [];
              for (let FJ = 0; FJ < JJ.length; FJ += cJ) ZJ.push(JJ.slice(FJ, FJ + cJ));
              return ZJ
            }(JJ, CJ.A)) {
            if (!await DJ({
                whitelistAdd: ZJ
              }, (JJ => jc(JJ, ZJ, !0)), {
                quiet: cJ
              })) return !1
          }
          return !0
        }, xc = async JJ => {
          if (JJ === PJ) return;
          (0, Zc.f)({
            id: "world_social.set_mode",
            value: JJ
          });
          const cJ = [...bc(ZJ), ...QJ],
            FJ = "whitelist" === JJ && qJ ? function(JJ, cJ, ZJ) {
              const FJ = [],
                UJ = JJ.flatMap((JJ => "here" === JJ.place ? [JJ.friend.name] : []));
              for (const eJ of [...UJ, ...cJ]) Ac(FJ, eJ) || Ac(ZJ, eJ) || FJ.push(eJ);
              return FJ
            }(bJ, cJ, qJ.whitelist) : [];
          await DJ({
            setVisibility: JJ
          }, (cJ => ({
            ...cJ,
            visibility: JJ
          }))) && await Gc(FJ)
        }, rc = JJ => {
          if (kJ && gJ) return {
            on: Ac(gJ.whitelist, JJ),
            onChange: cJ => {
              (0, Zc.f)({
                id: "world_social.whitelist_toggle",
                value: cJ ? "on" : "off"
              }), DJ(cJ ? {
                whitelistAdd: [JJ]
              } : {
                whitelistRemove: JJ
              }, (ZJ => jc(ZJ, [JJ], cJ)))
            }
          }
        }, vc = async JJ => {
          (0, Zc.f)({
            id: "world_social.invite",
            value: "friend"
          });
          const cJ = () => {
            VJ((cJ => cJ.filter((cJ => cJ !== JJ))))
          };
          VJ((cJ => [...cJ, JJ]));
          const FJ = function(JJ, cJ) {
            return null === JJ || void 0 === JJ || !JJ.canManage || Ac(JJ.whitelist, cJ) ? "none" : "whitelist" === JJ.visibility ? "required" : "quiet"
          }(qJ, JJ);
          if ("none" !== FJ) {
            const ZJ = Gc([JJ], "quiet" === FJ);
            if ("required" === FJ && !await ZJ) return void cJ()
          }
          await (0, tJ.g)(JJ, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(JJ, cJ) {
            var ZJ;
            const FJ = null !== (ZJ = Mc.get(JJ)) && void 0 !== ZJ ? ZJ : new Map;
            FJ.set(cJ, Date.now()), Mc.set(JJ, FJ)
          }(ZJ, JJ), setTimeout(cJ, uJ.j)) : cJ()
        }, mc = async (JJ, cJ) => {
          (0, Zc.f)({
            id: "world_social.add_friend",
            value: cJ
          });
          const ZJ = await (0, oJ.j)(JJ, "world_social");
          return (0, oJ.d)(ZJ, JJ, {
            announceSent: !1
          }), "failed" !== ZJ.kind && ("sent" === ZJ.kind && mJ((cJ => Ac(cJ, JJ) ? cJ : [...cJ, JJ])), kJ && await Gc([JJ]), !0)
        };
      return (0, YJ.jsxs)("div", {
        ref: AJ,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: JJ => {
          JJ.target === JJ.currentTarget && " " === JJ.key && JJ.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, YJ.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, YJ.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: XJ("worldSocial:title")
          }), (0, YJ.jsx)(sJ.j, {
            className: "WorldSocialClose",
            onClick: eJ
          })]
        }), Fc && (0, YJ.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, YJ.jsx)(IJ.c, {})
        }), !Fc && (0, YJ.jsxs)(YJ.Fragment, {
          children: [(0, YJ.jsx)(hc, {
            worldCode: FJ,
            message: zJ
          }), null === qJ && !jJ && (0, YJ.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: nJ,
            children: XJ("worldSocial:loadFailed")
          }), HJ && null !== PJ && (0, YJ.jsx)(fc, {
            visibility: PJ,
            onPick: JJ => {
              xc(JJ)
            }
          }), GJ.requests.length > 0 && (0, YJ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, YJ.jsx)(LJ.c, {
              label: (0, YJ.jsxs)(YJ.Fragment, {
                children: [(0, YJ.jsx)(fJ.c, {
                  name: Jc.g
                }), " ", XJ("socialBar:requests")]
              }),
              meta: (0, YJ.jsxs)(YJ.Fragment, {
                children: [GJ.requests.length, GJ.requests.length === iJ.n && (0, YJ.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: XJ("socialBar:limitReached")
                }), !KJ && GJ.requests.length > 1 && (0, YJ.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    yJ(!0)
                  },
                  children: XJ("worldSocial:moreRequests", {
                    count: GJ.requests.length - 1
                  })
                })]
              })
            }), (0, YJ.jsx)("div", {
              className: "PlayerRows",
              children: nc.map(((JJ, cJ) => (0, YJ.jsx)(Ec, {
                zIndex: nc.length - cJ,
                player: JJ,
                actions: (0, YJ.jsxs)(YJ.Fragment, {
                  children: [(0, YJ.jsx)(RJ.g, {
                    tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                      children: XJ("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, YJ.jsx)(sJ.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${XJ("general:accept")} ${JJ.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, oJ.h)(JJ.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, YJ.jsx)(fJ.c, {
                        name: "check"
                      })
                    })
                  }), (0, YJ.jsx)(RJ.g, {
                    tooltipInner: (0, YJ.jsx)(YJ.Fragment, {
                      children: XJ("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, YJ.jsx)(sJ.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${XJ("general:decline")} ${JJ.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, oJ.h)(JJ.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, YJ.jsx)(fJ.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${JJ.name}`)))
            })]
          }), (0, YJ.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, YJ.jsx)(LJ.c, {
              label: (0, YJ.jsxs)(YJ.Fragment, {
                children: [(0, YJ.jsx)(fJ.c, {
                  name: Jc.e
                }), " ", XJ("socialBar:friends")]
              }),
              meta: GJ.loaded && !pJ ? GJ.friends.length : void 0
            }), (0, YJ.jsx)(Ic, {
              XE: JJ => mc(JJ, "field")
            }), Uc && (0, YJ.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, YJ.jsx)(IJ.c, {})
            }), !Uc && (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsxs)("div", {
                className: "PlayerRows",
                children: [Yc.map(((JJ, cJ) => (0, YJ.jsx)(Ec, {
                  zIndex: sc - cJ,
                  player: Qc(JJ, null),
                  status: XJ("worldSocial:requestSent"),
                  Hh: rc(JJ)
                }, `request:${JJ}`))), !pJ && bJ.map(((JJ, cJ) => (0, YJ.jsx)(Vc, {
                  zIndex: Dc - cJ,
                  row: JJ,
                  Hh: rc(JJ.friend.name),
                  canInvite: qc(qJ) && "here" !== JJ.place,
                  invited: QJ.includes(JJ.friend.name),
                  onInvite: () => {
                    vc(JJ.friend.name)
                  }
                }, JJ.friend.name))), GJ.loaded && 0 === GJ.friends.length && (0, YJ.jsx)(yc, {
                  playersHere: wJ,
                  exclude: vJ,
                  XE: JJ => mc(JJ, "suggestion")
                })]
              }), kJ && GJ.loaded && 0 === GJ.friends.length && 0 === Yc.length && (0, YJ.jsx)("div", {
                className: "WorldSocialEmpty",
                children: XJ("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var ic = ZJ(2166),
      Rc = ZJ(2179);

    function Lc(JJ) {
      let {
        show: cJ,
        onClose: ZJ,
        option: FJ
      } = JJ;
      const eJ = (0, SJ.d)("connectedGame", (JJ => (0, ic.b)(JJ) ? JJ.lobbyName : null));
      return function(JJ) {
        const {
          gameEntrySource: cJ,
          loadingOverlayVisible: ZJ
        } = (0, zJ.j)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: FJ
        } = (0, EJ.d)(), eJ = (0, SJ.f)("localPlayerAlive"), XJ = (0, SJ.d)("players", (JJ => null !== JJ.localId && void 0 !== JJ.byId[JJ.localId])), AJ = (0, Rc.l)(), qJ = (0, UJ.useRef)(null), jJ = (0, UJ.useRef)(null), YJ = "worldCreation" === cJ, hJ = FJ.whamm, DJ = FJ.getPersonalWorldLobbyName();
        (0, UJ.useEffect)((() => {
          var cJ;
          null !== JJ && (null === (cJ = jJ.current) || void 0 === cJ ? void 0 : cJ.lobbyName) !== JJ && null !== oc(JJ, YJ, hJ, DJ) && (jJ.current = Uc(JJ))
        }), [YJ, JJ, hJ, DJ]), (0, UJ.useEffect)((() => {
          if (null !== JJ && (!ZJ && eJ && XJ)) return AJ.whenShown((() => {
            var cJ;
            const ZJ = qJ.current === JJ ? null : oc(JJ, YJ, hJ, DJ);
            if (null === ZJ) return;
            const FJ = (null === (cJ = jJ.current) || void 0 === cJ ? void 0 : cJ.lobbyName) === JJ ? jJ.current : Uc(JJ);
            jJ.current = null, qJ.current = JJ,
              function(JJ, cJ, ZJ, FJ) {
                const {
                  lobbyName: UJ
                } = JJ, eJ = () => {
                  ! function(JJ, cJ) {
                    if (!FZ()) return void cJ(!0);
                    const ZJ = performance.now() + cZ;
                    let FJ = 0;
                    const UJ = () => {
                      FJ = FZ() ? 0 : FJ + 1, FJ >= 2 ? cJ(!0) : !ZZ(JJ) || performance.now() > ZJ ? cJ(!1) : setTimeout(UJ, JZ)
                    };
                    setTimeout(UJ, JZ)
                  }(UJ, (eJ => {
                    FJ();
                    const XJ = "auto_existing" === cJ && Oc(ZJ);
                    eJ && ZZ(UJ) && !Bc(UJ) && !XJ && (lc(JJ) ? tc(UJ) : (tc(UJ), Tc(ZJ), function(JJ) {
                      const cJ = Hc.d.world_social_popup_v1;
                      return (0, Hc.l)("world_social_popup_v1"), (0, Zc.f)({
                        id: "world_social.auto_open",
                        value: `${cJ}:${(0,gc.e)()}:${JJ}`
                      }), (0, Wc.flushClientAnalyticsEvents)(), "auto_open" === cJ
                    }(cJ) && (! function(JJ) {
                      ec.set(JJ.lobbyName, JJ)
                    }(JJ), nJ.i.Uf("toggleMenu", `inviteLink|${cJ}`), "inviteLink" !== zJ.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === cJ && !lc(JJ)) return void eJ();
                JJ.response.then((JJ => {
                  if (!("error" in JJ)) return JJ.settings.canManage ? void eJ() : (tc(UJ), void FJ());
                  FJ()
                }))
              }(FJ, ZJ, hJ, (() => {
                qJ.current === JJ && (qJ.current = null)
              }))
          }))
        }), [AJ, YJ, ZJ, JJ, eJ, XJ, hJ, DJ])
      }(eJ), (0, UJ.useEffect)((() => {
        cJ && null !== eJ && tc(eJ)
      }), [cJ, eJ]), null !== eJ ? (0, YJ.jsx)(Cc, {
        show: cJ,
        onClose: ZJ,
        opener: pc(FJ) ? FJ : "icon"
      }) : (0, YJ.jsx)(TJ.d, {
        show: cJ,
        onClose: ZJ
      })
    }
    const ac = new Set;

    function Bc(JJ) {
      return ac.has(JJ) || !!gJ.k.getItem(`worldSocialShown:${JJ}`)
    }

    function tc(JJ) {
      ac.add(JJ), gJ.k.setItem(`worldSocialShown:${JJ}`, !0)
    }

    function oc(JJ, cJ, ZJ, FJ) {
      return Bc(JJ) ? null : function(JJ) {
        let {
          justMade: cJ,
          playerId: ZJ,
          lobbyName: FJ,
          personalWorld: UJ
        } = JJ;
        return cJ ? "auto" : !Oc(ZJ) && dc(FJ, UJ) ? "auto_existing" : null
      }({
        justMade: cJ,
        playerId: ZJ,
        lobbyName: JJ,
        personalWorld: FJ
      })
    }

    function lc(JJ) {
      let {
        answer: cJ
      } = JJ;
      return null !== cJ && "settings" in cJ && !cJ.settings.canManage
    }
    const JZ = 500,
      cZ = 3e4;

    function ZZ(JJ) {
      return "inGame" === zJ.d.get("gameState") && jJ.gameBridge.latest("connectedGame").lobbyName === JJ
    }

    function FZ() {
      return (0, OJ.e)() || zJ.d.get("loadingOverlayVisible") || (0, NJ.l)()
    }
    var UZ = ZJ(35781),
      eZ = ZJ(2649),
      XZ = ZJ(1756),
      AZ = ZJ(2642),
      qZ = ZJ(2675);

    function jZ(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)((() => null !== (0, qZ.p)()));
      return (0, UJ.useEffect)((() => {
        if (!cJ) return JJ && (0, qZ.u)(), (0, qZ.t)((() => {
          ZJ(!0)
        }))
      }), [cJ, JJ]), (JJ, ZJ) => cJ || AZ.b.overridesTexture(JJ) ? AZ.b.getTexture(JJ, ZJ).url : void 0
    }
    const YZ = (JJ, cJ) => {
        (0, UJ.useEffect)((() => {
          setTimeout((() => {
            JJ && JJ.current && JJ.current.focus()
          }), 1)
        }), [cJ])
      },
      hZ = (0, UJ.memo)((function(JJ) {
        let {
          isInputActive: cJ,
          onClose: ZJ,
          onChange: FJ,
          textAreaRef: UJ,
          fontSize: eJ,
          lineHeight: XJ,
          currText: AJ
        } = JJ;
        const qJ = jZ(!0)("board_full", eZ.f.BLOCK);
        return (0, YJ.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, YJ.jsx)("img", {
            src: qJ,
            alt: "Board",
            className: "WriteOnBoardImg",
            style: {
              visibility: void 0 === qJ ? "hidden" : void 0
            }
          }), (0, YJ.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: AJ,
            ref: UJ,
            style: {
              fontSize: `${eJ}rem`,
              lineHeight: `${XJ}rem`
            },
            onKeyDown: JJ => {
              var cJ;
              "Escape" !== JJ.key && (JJ.stopPropagation(), "Tab" === JJ.key && function(JJ) {
                JJ.preventDefault();
                const cJ = JJ.target,
                  {
                    value: ZJ
                  } = cJ;
                let FJ = cJ.selectionStart,
                  UJ = cJ.selectionEnd,
                  eJ = ZJ.slice(FJ, UJ);
                if (!eJ.includes("\n") && !JJ.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; FJ > 0 && "\n" !== ZJ[FJ - 1];) FJ--;
                const XJ = "\n" === ZJ[UJ - 1];
                XJ && UJ--;
                eJ = ZJ.slice(FJ, UJ);
                const AJ = eJ.split("\n").map((cJ => JJ.shiftKey ? cJ.replace(/^\t/, "") : "\t" + cJ)).join("\n");
                if (JJ.shiftKey && ZJ.slice(FJ, UJ) === AJ) return;
                let {
                  selectionStart: qJ
                } = cJ;
                cJ.setSelectionRange(FJ, UJ), qJ > FJ && (!JJ.shiftKey || "\t" === eJ[0]) && (qJ += JJ.shiftKey ? -1 : 1);
                UJ = FJ + AJ.length + (XJ ? 1 : 0), document.execCommand("insertText", !1, AJ), cJ.setSelectionRange(qJ, UJ)
              }(JJ), /^F\d+$/i.test(JJ.code) && null !== (cJ = XZ.z.OpenCodeEditor) && void 0 !== cJ && cJ.includes(JJ.code) && ZJ())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: FJ
          })]
        })
      }));

    function DZ(JJ) {
      return 1.3 * JJ
    }
    var sZ = ZJ(1569);
    const nZ = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(null), [qJ, hJ] = (0, UJ.useState)(""), [DJ, nJ] = (0, UJ.useState)(0), [GJ, fJ] = (0, UJ.useState)(null), [xJ, rJ] = (0, UJ.useState)({
          text: "",
          textSize: 0
        }), vJ = (JJ, cJ) => GJ ? (0, UZ.n)(JJ, cJ, GJ.width, GJ.height) : (0, UZ.e)(JJ, cJ), mJ = JJ => {
          hJ(vJ(qJ, JJ)), nJ(JJ), gJ.j.setItem("lastBoardTextSize", JJ)
        }, QJ = () => {
          FJ(), GJ && qJ === xJ.text && DJ === xJ.textSize || jJ.gameBridge.send("writeOnBoard", {
            pos: eJ,
            text: qJ,
            textSize: DJ
          })
        };
        (0, SJ.b)("boardEditRequested", (JJ => {
          var UJ, eJ;
          if (!WJ.featureFlags.canSeePlayerWrittenText) return;
          if (null === JJ) return AJ(null), void(cJ && FJ());
          const {
            pos: XJ,
            noticeboardSpan: qJ,
            text: jJ
          } = JJ;
          AJ(XJ), fJ(qJ), hJ(jJ);
          const YJ = null !== (UJ = null !== (eJ = JJ.textSize) && void 0 !== eJ ? eJ : gJ.j.getItem("lastBoardTextSize")) && void 0 !== UJ ? UJ : 0;
          nJ(YJ), rJ({
            text: jJ,
            textSize: YJ
          }), gJ.j.setItem("lastBoardTextSize", YJ), ZJ()
        }));
        const EJ = (0, UJ.useRef)(null);
        YZ(EJ, cJ), (0, sZ.x)(EJ, {
          kind: "sign",
          submit: QJ
        });
        const VJ = function(JJ, cJ) {
            const ZJ = UZ.c[JJ];
            if (!cJ) return ZJ.uiFontSize;
            const {
              numLines: FJ,
              charsPerLine: UJ
            } = (0, UZ.s)(cJ.width, cJ.height, JJ);
            return ZJ.uiFontSize * Math.min(ZJ.charsPerLine / UJ, ZJ.numLines / FJ)
          }(DJ, GJ),
          KJ = DZ(VJ);
        return (0, YJ.jsxs)(XJ.c, {
          className: "WriteOnBoardBg",
          close: QJ,
          escDoesExit: !0,
          show: cJ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, YJ.jsx)(hZ, {
            isInputActive: () => cJ,
            onClose: QJ,
            onChange: JJ => {
              hJ(vJ(JJ.target.value, DJ))
            },
            textAreaRef: EJ,
            fontSize: VJ,
            lineHeight: KJ,
            currText: qJ
          }), (0, YJ.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, YJ.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, YJ.jsx)(sJ.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mJ(0)
              },
              disabled: 0 === DJ,
              children: "Small"
            }), (0, YJ.jsx)(sJ.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mJ(1)
              },
              disabled: 1 === DJ,
              children: "Medium"
            }), (0, YJ.jsx)(sJ.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mJ(2)
              },
              disabled: 2 === DJ,
              children: "Large"
            })]
          })]
        })
      })),
      GZ = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(""), qJ = () => {
          FJ(), jJ.gameBridge.send("writeNameTag", eJ)
        };
        (0, KJ.i)("EditNameTag", (JJ => {
          WJ.featureFlags.canSeePlayerWrittenText && null !== JJ && (AJ(JJ), ZJ())
        }));
        const hJ = (0, UJ.useRef)(null);
        YZ(hJ, cJ), (0, sZ.x)(hJ, {
          kind: "nameTag",
          submit: qJ
        });
        const DJ = UZ.F.nameTag.uiFontSize,
          nJ = DZ(DJ);
        return (0, YJ.jsxs)(XJ.c, {
          className: "WriteOnBoardBg",
          close: qJ,
          escDoesExit: !0,
          show: cJ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, YJ.jsx)("div", {
            className: "NameTagTrim",
            children: (0, YJ.jsx)(hZ, {
              isInputActive: () => cJ,
              onClose: qJ,
              onChange: JJ => {
                const cJ = JJ.target.value.replaceAll("\n", "");
                AJ((0, UZ.o)(cJ, "nameTag"))
              },
              textAreaRef: hJ,
              fontSize: DJ,
              lineHeight: nJ,
              currText: eJ
            })
          }), (0, YJ.jsx)(sJ.d, {
            onClick: qJ,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      fZ = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(""), [qJ, hJ] = (0, UJ.useState)(0), [DJ, nJ] = (0, UJ.useState)(!1), [GJ, fJ] = (0, UJ.useState)(["", "", "", "", "", "", "", "", "", ""]), [xJ, rJ] = (0, UJ.useState)("Title"), [vJ, mJ] = (0, UJ.useState)(!0), [QJ, EJ] = (0, UJ.useState)(!1);
        (0, KJ.i)("EditBook", (JJ => {
          let {
            pages: cJ,
            title: FJ,
            isPublished: UJ
          } = JJ;
          var eJ;
          WJ.featureFlags.canSeePlayerWrittenText && (null !== cJ ? (fJ(cJ), AJ(null !== (eJ = cJ[0]) && void 0 !== eJ ? eJ : ""), rJ(FJ), hJ(0), nJ(!1), mJ(!UJ), EJ(!1), ZJ()) : fJ(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const VJ = (0, UJ.useRef)(null),
          yJ = (0, UJ.useRef)(null);
        YZ(VJ, cJ), (0, sZ.x)(VJ, {
          kind: "book"
        }), (0, sZ.x)(yJ, {
          kind: "sY"
        });
        const SJ = UZ.F.book.uiFontSize,
          IJ = DZ(SJ),
          MJ = jZ(cJ),
          bJ = cJ ? MJ("book_page", eZ.f.ITEM) : void 0,
          wJ = () => {
            (vJ || QJ) && jJ.gameBridge.send("writeBook", {
              pages: [...GJ],
              title: xJ,
              published: !vJ && QJ
            })
          },
          gJ = JJ => {
            DJ && (GJ[qJ] = eJ, nJ(!1)), AJ(GJ[JJ]), hJ(JJ)
          };
        return (0, YJ.jsxs)(XJ.c, {
          className: "WriteOnBoardBg",
          close: () => {
            FJ(), GJ[qJ] = eJ, wJ()
          },
          escDoesExit: !0,
          show: cJ,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, YJ.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, YJ.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: xJ,
              ref: yJ,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${IJ}rem`
              },
              onKeyDown: JJ => {
                vJ && JJ.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: JJ => {
                let cJ = JJ.target.value;
                cJ = (0, UZ.o)(cJ, "sY"), rJ(cJ)
              },
              readOnly: !vJ
            }), (0, YJ.jsx)("img", {
              src: bJ,
              alt: "book_page",
              className: "WriteOnBookPageImg",
              style: {
                visibility: void 0 === bJ ? "hidden" : void 0
              }
            }), (0, YJ.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, YJ.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: eJ,
                ref: VJ,
                style: {
                  fontSize: `${SJ}rem`,
                  lineHeight: `${IJ}rem`
                },
                onKeyDown: JJ => {
                  vJ && JJ.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: JJ => {
                  const cJ = JJ.target.value;
                  AJ((0, UZ.o)(cJ, "book")), nJ(!0)
                },
                readOnly: !vJ
              })
            })]
          }), (0, YJ.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, YJ.jsx)(sJ.d, {
              disabled: 0 === qJ,
              onClick: () => {
                gJ(qJ - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, YJ.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, YJ.jsx)(sJ.d, {
              disabled: 9 === qJ,
              onClick: () => {
                gJ(qJ + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, YJ.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, YJ.jsx)(sJ.d, {
              onClick: () => {
                mJ(!vJ), EJ(!0)
              },
              className: "BookNavButton",
              children: vJ ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var xZ = ZJ(35665),
      rZ = ZJ(7982),
      vZ = ZJ(1294),
      mZ = ZJ(1688);

    function QZ(JJ) {
      let {
        show: cJ,
        buttons: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), eJ = (0, UJ.useRef)(null);
      return (0, UJ.useEffect)((() => {
        var JJ, ZJ;
        const FJ = cJ ? (0, xZ.z)() : null;
        if (!FJ || !(0, vZ.e)()) return;
        const UJ = (0, xZ.j)().findIndex((JJ => JJ.id === FJ));
        (0, rZ.r)(null !== (JJ = null === (ZJ = eJ.current) || void 0 === ZJ ? void 0 : ZJ.children[UJ]) && void 0 !== JJ ? JJ : null)
      }), [cJ]), 0 === ZJ.length ? null : (0, YJ.jsx)("div", {
        ref: eJ,
        className: "ClientGameInventoryButtons",
        onPointerDown: JJ => {
          JJ.stopPropagation()
        },
        onPointerUp: JJ => {
          JJ.stopPropagation()
        },
        children: ZJ.map((JJ => {
          const cJ = FJ(JJ.labelKey);
          return (0, YJ.jsxs)(sJ.m, {
            className: JJ.className,
            disabled: JJ.disabled,
            onClick: () => {
              (0, xZ.p)(JJ)
            },
            ariaLabel: JJ.iconOnly ? cJ : void 0,
            title: JJ.iconOnly ? cJ : void 0,
            children: [JJ.icon && (0, YJ.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === JJ.icon.kind && (0, YJ.jsx)(mZ.d, {
                itemName: JJ.icon.name,
                amount: 0
              }), "image" === JJ.icon.kind && (0, YJ.jsx)("img", {
                src: JJ.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === JJ.icon.kind && (0, YJ.jsx)(fJ.c, {
                name: JJ.icon.name
              })]
            }), !JJ.iconOnly && cJ]
          }, JJ.id)
        }))
      })
    }
    var EZ = ZJ(35783),
      VZ = ZJ(2381),
      KZ = ZJ(8571),
      yZ = ZJ(35597),
      SZ = ZJ(35590);
    let IZ = null;
    window.setShowInventoryAdsOverride = JJ => {
      IZ = JJ
    };
    const MZ = 24e4;
    var bZ = ZJ(1694);

    function wZ(JJ) {
      var cJ;
      let {
        draggedInfo: {
          name: ZJ,
          attributes: FJ,
          amount: UJ
        },
        toAddRef: eJ
      } = JJ;
      return (0, YJ.jsx)("div", {
        className: "DraggedInvenItem",
        ref: eJ,
        children: (0, YJ.jsx)(mZ.d, {
          itemName: ZJ,
          amount: UJ,
          enchantmentTier: null === FJ || void 0 === FJ || null === (cJ = FJ.customAttributes) || void 0 === cJ ? void 0 : cJ.enchantmentTier,
          bar: (0, bZ.g)(FJ)
        })
      })
    }

    function WZ(JJ) {
      let {
        className: cJ = "",
        displayInfo: ZJ,
        domRef: FJ
      } = JJ;
      return (0, YJ.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${cJ}`,
        ref: FJ,
        children: [(0, YJ.jsx)(VJ.d, {
          text: (0, yJ.lb)(ZJ.name, {
            fontStyle: ZJ.fontStyle
          })
        }), (0, YJ.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, YJ.jsx)(VJ.d, {
            text: ZJ.desc
          })
        })]
      })
    }

    function gZ(JJ) {
      let {
        info: cJ,
        draggedInfo: ZJ
      } = JJ;
      const FJ = (0, UJ.useRef)(null);
      return (0, UJ.useLayoutEffect)((() => {
        const JJ = FJ.current,
          {
            left: ZJ,
            top: UJ
          } = function(JJ, cJ, ZJ, FJ) {
            const UJ = FJ.left * ZJ.width / 100 + 4,
              eJ = ZJ.width - FJ.right * ZJ.width / 100 - 4 - cJ.width,
              XJ = FJ.top * ZJ.height / 100 + 4,
              AJ = ZJ.height - 4 - cJ.height;
            return {
              left: Math.max(UJ, Math.min(JJ.x - cJ.width / 2, eJ)),
              top: Math.max(XJ, Math.min(JJ.y - 48 - cJ.height, AJ))
            }
          }({
            x: cJ.initTouchX,
            y: cJ.initTouchY
          }, {
            width: JJ.offsetWidth,
            height: JJ.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, zJ.d.get("notchSize"));
        JJ.style.left = `${ZJ}px`, JJ.style.top = `${UJ}px`
      }), [cJ]), (0, YJ.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: FJ,
        children: [(0, YJ.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: ZJ.amount / cJ.maxAmount * 100 + "%"
          }
        }), (0, YJ.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [ZJ.amount, "/", cJ.maxAmount]
        })]
      })
    }
    var HZ = ZJ(157);
    const PZ = (0, UJ.memo)((function(JJ) {
      let {
        show: cJ,
        onOpen: ZJ,
        onClose: FJ
      } = JJ;
      const eJ = (0, UJ.useRef)({
          pos: null
        }),
        [AJ, qJ] = (0, UJ.useState)([0, 0, 0, 0]),
        {
          userContext: hJ
        } = (0, EJ.d)();
      (0, SJ.b)("ironChestOpenRequested", (JJ => {
        let {
          pos: cJ,
          ownerDbId: FJ,
          cachedPasskey: UJ
        } = JJ;
        if (eJ.current.pos = cJ, FJ !== hJ.whamm) return null !== UJ ? (qJ(UJ), void DJ(UJ)) : void ZJ();
        DJ(AJ)
      })), (0, SJ.b)("localEffectUpdated", (JJ => {
        "Thief" === JJ && FJ()
      }));
      const DJ = JJ => {
        const {
          pos: cJ
        } = eJ.current;
        jJ.gameBridge.send("openIronChest", {
          pos: cJ,
          JX: JJ
        })
      };
      return (0, YJ.jsx)(XJ.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: FJ,
        escDoesExit: !0,
        show: cJ,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, YJ.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, YJ.jsx)(kZ, {
            JX: AJ,
            onPasskeyUpdated: qJ,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              DJ(AJ)
            }
          })
        })
      })
    }));

    function kZ(JJ) {
      let {
        className: cJ = "",
        JX: ZJ,
        onPasskeyUpdated: FJ,
        confirmText: UJ,
        onConfirm: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, aJ.F)();
      return (0, YJ.jsxs)("div", {
        className: `${cJ} IronChestPasskeyInput`,
        children: [(0, YJ.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: XJ("ironChest:passkeyInputTitle")
        }), (0, YJ.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(HZ.c.ironChestPasskeyLength).fill(0).map(((JJ, cJ) => (0, YJ.jsx)(pZ, {
            digit: ZJ[cJ],
            onPasskeyDigitUpdated: JJ => {
              const UJ = [...ZJ];
              UJ[cJ] = JJ, FJ(UJ)
            }
          }, cJ)))
        }), (0, YJ.jsx)(sJ.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: eJ,
          children: XJ(UJ)
        })]
      })
    }

    function pZ(JJ) {
      let {
        digit: cJ,
        onPasskeyDigitUpdated: ZJ
      } = JJ;
      return (0, YJ.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, YJ.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, YJ.jsx)(sJ.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZJ(yJ.c.mod(cJ + 1, 10))
            },
            children: (0, YJ.jsx)(fJ.c, {
              name: "angle-up"
            })
          }), (0, YJ.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: cJ
          }), (0, YJ.jsx)(sJ.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              ZJ(yJ.c.mod(cJ - 1, 10))
            },
            children: (0, YJ.jsx)(fJ.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var dZ = ZJ(8565),
      zZ = ZJ(35818),
      NZ = ZJ(35587);

    function OZ(JJ) {
      let {
        specialItemInfo: cJ,
        setHovered: ZJ,
        pointerDown: FJ,
        pointerUp: eJ,
        enchantingTablePosition: XJ,
        enchantingTableBlockName: AJ
      } = JJ;
      const {
        t: hJ
      } = (0, aJ.F)(), [DJ, nJ] = (0, UJ.useState)(null), [GJ, fJ] = (0, UJ.useState)(null), xJ = (0, qJ.f)("auraPerLevel"), rJ = Math.floor((0, SJ.f)("aura") / xJ);
      (0, UJ.useEffect)((() => {
        if (!cJ) return void nJ(null);
        let JJ = !0;
        return jJ.gameBridge.query("enchantingOffer", {
          slot: cJ.idx,
          name: cJ.name,
          blockName: AJ
        }).then((ZJ => {
          var FJ, UJ;
          let {
            perks: eJ,
            options: XJ
          } = ZJ;
          if (!JJ) return;
          const AJ = {
            isEnchantable: eJ.length > 0,
            possibleEnchantments: eJ,
            options: XJ.map((JJ => {
              let {
                level: cJ,
                odds: ZJ
              } = JJ;
              return {
                level: cJ,
                possibilities: Object.fromEntries(ZJ.map(((JJ, cJ) => [`Tier ${cJ+1}`, JJ])))
              }
            })),
            isAlreadyEnchanted: eJ.length > 0 && void 0 !== (null === (FJ = cJ.attributes) || void 0 === FJ || null === (UJ = FJ.customAttributes) || void 0 === UJ ? void 0 : UJ.enchantmentTier)
          };
          nJ(AJ), (JJ => {
            const cJ = JJ.options.map((JJ => Object.entries(JJ.possibilities).map((JJ => {
              let [cJ, ZJ] = JJ;
              return {
                str: `${cJ}: ${ZJ>0?ZJ<.01?ZJ.toPrecision(1):ZJ.toFixed(2):0}%\n`,
                style: {
                  color: yJ.gb[cJ]
                }
              }
            }))));
            fJ(cJ)
          })(AJ)
        })), () => {
          JJ = !1
        }
      }), [cJ, XJ, AJ]);
      const vJ = [];
      for (let UJ = 0; UJ < zZ.d; UJ++) {
        const JJ = null === DJ || void 0 === DJ ? void 0 : DJ.options[UJ],
          FJ = !JJ || JJ.level > rJ;
        vJ.push((0, YJ.jsx)(sJ.d, {
          className: "EnchantmentButton",
          onPointerEnter: JJ ? JJ => null === ZJ || void 0 === ZJ ? void 0 : ZJ()(!0, {
            name: "",
            desc: GJ[UJ]
          }, JJ) : void 0,
          onPointerLeave: JJ ? () => null === ZJ || void 0 === ZJ ? void 0 : ZJ()(!1) : void 0,
          onClick: FJ ? void 0 : () => {
            jJ.gameBridge.send("enchantItem", {
              slot: cJ.idx,
              level: JJ.level,
              tablePos: XJ
            }), nJ(null)
          },
          disabled: FJ,
          children: JJ ? (0, YJ.jsxs)(YJ.Fragment, {
            children: [(0, YJ.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, YJ.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [hJ("enchantments:cost"), ": "]
              }), " ", hJ("enchantments:levels", {
                level: JJ.level
              })]
            }), (0, YJ.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, YJ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, YJ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: hJ("enchantments:tier")
                }), Object.entries(JJ.possibilities).map((JJ => {
                  let [cJ, ZJ] = JJ;
                  return 0 === ZJ ? null : (0, YJ.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: yJ.gb[cJ]
                    },
                    children: cJ
                  }, cJ)
                }))]
              }), (0, YJ.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, YJ.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: hJ("enchantments:odds")
                }), Object.entries(JJ.possibilities).map((JJ => {
                  let [cJ, ZJ] = JJ;
                  return 0 === ZJ ? null : (0, YJ.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: yJ.gb[cJ]
                    },
                    children: [ZJ > 0 && ZJ < .1 ? "<0.1" : ZJ.toFixed(0 < ZJ && ZJ < .95 ? 1 : 0), "%"]
                  }, cJ)
                }))]
              })]
            })]
          }) : !1 === (null === DJ || void 0 === DJ ? void 0 : DJ.isEnchantable) ? (0, YJ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: hJ("enchantments:notEnchantable")
          }) : (0, YJ.jsx)("h1", {
            className: "EnchantmentLevels",
            children: hJ("enchantments:enterItem")
          })
        }, UJ))
      }
      return (0, YJ.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, YJ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: AJ
        }), (0, YJ.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, YJ.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, YJ.jsx)(NZ.e, {
              idx: SZ.g,
              setHovered: JJ => {
                null === ZJ || void 0 === ZJ || ZJ(SZ.g)(JJ)
              },
              pointerDown: FJ,
              pointerUp: eJ,
              draggedInfo: null,
              specialItemInfo: cJ,
              variation: "Enchanting Table"
            }), DJ && DJ.possibleEnchantments.length > 0 && (0, YJ.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, YJ.jsx)("h2", {
                children: "Possible Perks:"
              }), DJ.possibleEnchantments.map((JJ => (0, YJ.jsxs)(UJ.Fragment, {
                children: [(0, YJ.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, YJ.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, YJ.jsx)(mZ.d, {
                      itemName: `${JJ} Enchantment`,
                      amount: 1
                    })
                  }), (0, YJ.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: JJ
                  })]
                }), (0, YJ.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: hJ((0, dZ.j)(JJ).translationKey)
                })]
              }, JJ)))]
            })]
          }), (0, YJ.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [DJ && DJ.isAlreadyEnchanted && (0, YJ.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: hJ("enchantments:alreadyEnchanted")
            }), vJ]
          })]
        })]
      })
    }
    var TZ = ZJ(35822);

    function CZ(JJ) {
      var cJ;
      let {
        specialItemInfo: ZJ,
        setSpecialItemInfo: FJ,
        setHovered: eJ,
        pointerDown: XJ,
        pointerUp: AJ
      } = JJ;
      const {
        t: qJ
      } = (0, aJ.F)(), hJ = (0, SJ.d)("inventory", (JJ => JJ.freeSlots)), [DJ, nJ] = (0, UJ.useState)(null);
      (0, UJ.useEffect)((() => {
        if (ZJ) {
          const JJ = (0, TZ.c)(ZJ.name, ZJ.amount);
          nJ({
            salvageable: !!JJ,
            produces: JJ
          })
        } else nJ(null)
      }), [ZJ, null === ZJ || void 0 === ZJ ? void 0 : ZJ.name, null === ZJ || void 0 === ZJ ? void 0 : ZJ.amount]);
      const GJ = !!ZJ && !(null === DJ || void 0 === DJ || !DJ.salvageable) && !(null !== (cJ = DJ.produces) && void 0 !== cJ && cJ.some((JJ => {
        let {
          amt: cJ
        } = JJ;
        return cJ < 1
      })));
      return (0, YJ.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, YJ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: qJ("item:salvagingTable")
        }), (0, YJ.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, YJ.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, YJ.jsx)(NZ.e, {
              idx: SZ.g,
              setHovered: JJ => {
                null === eJ || void 0 === eJ || eJ(SZ.g)(JJ)
              },
              pointerDown: XJ,
              pointerUp: AJ,
              draggedInfo: null,
              specialItemInfo: ZJ,
              variation: "Salvaging Table"
            })
          }), (0, YJ.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, YJ.jsx)(sJ.d, {
              className: "SalvageButton",
              onClick: GJ ? () => {
                const {
                  idx: JJ,
                  name: cJ,
                  amount: UJ
                } = ZJ;
                jJ.gameBridge.send("salvageItem", {
                  slot: JJ,
                  name: cJ,
                  amount: UJ
                }) && (nJ(null), FJ(null))
              } : void 0,
              disabled: !GJ,
              children: DJ ? DJ.salvageable ? DJ.produces.some((JJ => {
                let {
                  amt: cJ
                } = JJ;
                return cJ < 1
              })) ? (0, YJ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, YJ.jsx)("div", {
                  className: "SalvageText Error",
                  children: qJ("salvagingTable:notEnoughResources")
                })
              }) : hJ < DJ.produces.length ? (0, YJ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, YJ.jsx)("div", {
                  className: "SalvageText Error",
                  children: qJ("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, YJ.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, YJ.jsx)("div", {
                  className: "SalvageText",
                  children: qJ("salvagingTable:salvage")
                }), (0, YJ.jsx)("div", {
                  className: "SalvageIcons",
                  children: DJ.produces.map(((JJ, cJ) => {
                    let {
                      item: ZJ,
                      amt: FJ
                    } = JJ;
                    return (0, YJ.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: ZJ,
                        amount: Math.floor(FJ)
                      })
                    }, cJ)
                  }))
                })]
              }) : (0, YJ.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, YJ.jsx)("div", {
                  className: "SalvageText Error",
                  children: qJ("salvagingTable:unsalvageable")
                })
              }) : (0, YJ.jsx)(YJ.Fragment, {})
            })
          })]
        })]
      })
    }
    var uZ = ZJ(629),
      iZ = ZJ(8636),
      RZ = ZJ(2344),
      LZ = ZJ(7996),
      aZ = ZJ(7988),
      BZ = ZJ(1560),
      tZ = ZJ(1778),
      oZ = ZJ(1300),
      lZ = ZJ(1849);

    function JF(JJ, cJ, ZJ) {
      const FJ = JJ.trim().toLowerCase();
      if ("" === FJ) return 0;
      let UJ = null;
      for (const eJ of cJ) {
        const JJ = eJ.toLowerCase().indexOf(FJ);
        if (0 === JJ) return 0;
        JJ > 0 && (UJ = 1)
      }
      if (null !== UJ) return UJ;
      for (const eJ of ZJ)
        if (eJ.toLowerCase().includes(FJ)) return 2;
      return null
    }

    function cF(JJ) {
      return JJ.map((JJ => {
        var cJ;
        return JJ ? {
          name: JJ.name,
          amount: null !== (cJ = JJ.amount) && void 0 !== cJ ? cJ : 1
        } : null
      }))
    }

    function ZF(JJ) {
      return JJ < 1e3 ? `${JJ}` : JJ < 1e4 ? Math.floor(JJ / 100) / 10 + "k" : `${Math.floor(JJ/1e3)}k`
    }
    var FF = ZJ(35828);
    const UF = sJ.d,
      eF = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      XF = () => {
        const JJ = (0, oZ.f)();
        return JJ ? JJ.getPadRepeatTiming(eF) : eF
      };

    function AF(JJ, cJ, ZJ) {
      var FJ, UJ;
      const eJ = (0, KZ.x)(cJ, JJ);
      let XJ = null === (FJ = cJ[JJ]) || void 0 === FJ ? void 0 : FJ.description;
      if (ZJ && (null === (UJ = (0, FF.e)().get(JJ)) || void 0 === UJ || !UJ.hideIngredients)) {
        XJ ? (XJ = (0, yJ.lb)(XJ), XJ.push({
          str: "\n"
        })) : XJ = [], XJ.push({
          str: "\n"
        }), XJ.push({
          str: "Can be crafted from:\n"
        });
        for (const JJ of ZJ) "string" === typeof JJ && (XJ.push({
          icon: JJ,
          style: {
            fontSize: "1.5em"
          }
        }), XJ.push({
          str: " "
        }), XJ.push(...(0, yJ.lb)((0, KZ.x)(cJ, JJ))), XJ.push({
          str: "\n"
        }))
      }
      return {
        name: eJ,
        desc: XJ
      }
    }

    function qF(JJ) {
      let {
        name: cJ,
        qj: ZJ
      } = JJ;
      return `${cJ}_${ZJ}`
    }

    function jF(JJ) {
      var cJ;
      let {
        onClick: ZJ,
        itemName: FJ,
        recipeId: eJ,
        isSelected: XJ,
        haveIngredients: AJ,
        craftable: qJ,
        setHovered: jJ,
        padActions: hJ,
        marked: DJ,
        lock: sJ,
        itemInfo: nJ
      } = JJ;
      const GJ = (0, UJ.useRef)(null);
      return (0, LZ.g)(GJ, {
        press: JJ => !AJ || "secondary" === JJ && !qJ ? (hJ.refuse(), !1) : "primary" === JJ ? (hJ.choose(), !0) : hJ.craft(),
        release: hJ.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, YJ.jsxs)("div", {
        ref: GJ,
        className: sc()("InvenItem", {
          CraftableItemNotEnoughIngredients: !AJ && !sJ,
          CraftableItemMarked: DJ,
          CraftableItemLocked: void 0 !== sJ,
          CraftableItemLockedFar: (null !== (cJ = null === sJ || void 0 === sJ ? void 0 : sJ.stepsAway) && void 0 !== cJ ? cJ : 1) > 1
        }),
        "data-recipe-key": eJ,
        "data-pad-inventory-default": XJ ? "" : void 0,
        onClick: ZJ,
        style: {
          cursor: XJ ? null : "pointer"
        },
        onPointerEnter: JJ => {
          null === jJ || void 0 === jJ || jJ(!0, AF(FJ, nJ)), !XJ && (0, BZ.q)(JJ.nativeEvent) && (0, aZ.f)() && ZJ()
        },
        onPointerLeave: () => {
          null === jJ || void 0 === jJ || jJ(!1)
        },
        children: [(0, YJ.jsx)(mZ.d, {
          itemName: FJ,
          amount: 1
        }), DJ && (0, YJ.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), sJ && (0, YJ.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, YJ.jsx)(fJ.c, {
            name: "lock"
          }), (0, YJ.jsx)(VJ.d, {
            text: sJ.tag
          })]
        })]
      })
    }

    function YF(JJ) {
      let {
        idx: cJ,
        status: ZJ,
        shownItem: FJ,
        dim: eJ,
        onHoverStart: XJ,
        onHoverEnd: AJ,
        onPadBack: qJ
      } = JJ;
      const jJ = (0, UJ.useRef)(null);
      (0, LZ.g)(jJ, {
        press: () => !1,
        back: qJ,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const hJ = ZJ.need > 0 ? Math.min(ZJ.have / ZJ.need, 1) : 1;
      return (0, YJ.jsxs)("div", {
        ref: jJ,
        className: sc()("CupTile", {
          Short: ZJ.missing > 0
        }),
        style: {
          width: eJ,
          height: eJ
        },
        "data-craft-ingredient": cJ,
        onPointerEnter: XJ,
        onPointerLeave: AJ,
        children: [(0, YJ.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${hJ})`
          }
        }), (0, YJ.jsx)(mZ.d, {
          itemName: FJ,
          amount: 0
        }), (0, YJ.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [ZF(ZJ.have), "/", ZF(ZJ.need)]
        })]
      })
    }

    function hF(JJ) {
      var cJ, ZJ, FJ, eJ, XJ;
      let {
        show: AJ,
        recipeItem: {
          name: qJ,
          qj: hJ,
          requires: DJ,
          produces: sJ,
          haveIngredients: nJ
        },
        detail: GJ,
        onCraft: fJ,
        setHovered: xJ,
        craftButtonRef: rJ,
        onPadBack: vJ,
        showPadShortcut: mJ,
        refusedCount: QJ,
        lock: EJ,
        itemInfo: KJ
      } = JJ;
      const {
        t: yJ
      } = (0, aJ.F)(), SJ = null !== GJ && !GJ.roomForOne, IJ = null !== (cJ = null === GJ || void 0 === GJ ? void 0 : GJ.craftAllTimes) && void 0 !== cJ ? cJ : 0, MJ = function(JJ, cJ) {
        return JJ.map((JJ => {
          let {
            items: ZJ,
            amt: FJ
          } = JJ, UJ = 0;
          const eJ = [];
          for (const XJ of ZJ) {
            const JJ = cJ(XJ);
            UJ += JJ, JJ > 0 && eJ.push(XJ)
          }
          return 0 === eJ.length && eJ.push(ZJ[0]), {
            shownItems: eJ,
            need: FJ,
            have: UJ,
            missing: Math.max(FJ - UJ, 0)
          }
        }))
      }(DJ, (JJ => {
        var cJ;
        return null !== (cJ = null === GJ || void 0 === GJ ? void 0 : GJ.amounts[JJ]) && void 0 !== cJ ? cJ : 0
      }));
      let bJ = "4rem",
        wJ = 4;
      3 === DJ.length || 4 === DJ.length ? bJ = "3.75rem" : DJ.length >= 5 && (bJ = "3rem"), 4 === DJ.length ? wJ = 2 : DJ.length <= 6 && (wJ = 3);
      const WJ = `calc(${wJ} * ${bJ} + ${wJ-1} * 0.4rem + 1px)`,
        gJ = (0, UJ.useRef)(null),
        HJ = (0, UJ.useRef)(null);
      (0, UJ.useLayoutEffect)((() => {
        gJ.current.scrollTop = 0
      }), [qJ, hJ]);
      const PJ = (0, UJ.useRef)(QJ);
      (0, UJ.useEffect)((() => {
        if (QJ === PJ.current) return;
        PJ.current = QJ;
        const JJ = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const FJ of null !== (cJ = null === (ZJ = gJ.current) || void 0 === ZJ ? void 0 : ZJ.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== cJ ? cJ : []) {
          var cJ, ZJ;
          FJ.animate(JJ, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [QJ]);
      const kJ = (JJ, cJ, ZJ) => {
          var FJ;
          if ((0, FF.e)().has(qJ)) return void(ZJ && clearInterval(pJ.current));
          const UJ = null !== (FJ = null === GJ || void 0 === GJ ? void 0 : GJ.resultStackable) && void 0 !== FJ && FJ,
            eJ = cF(jJ.gameBridge.latest("inventory").player),
            {
              jj: XJ,
              fA: AJ,
              amountAddedToSlot: YJ
            } = jJ.gameBridge.send("craftRecipe", {
              name: qJ,
              qj: hJ,
              times: cJ || JJ && UJ ? null : 1
            });
          if (XJ > 0) {
            const cJ = [],
              FJ = new Set(DJ.flatMap((JJ => {
                let {
                  items: cJ
                } = JJ;
                return cJ
              }))),
              XJ = function(JJ, cJ, ZJ) {
                const FJ = [];
                for (let UJ = 0; UJ < JJ.length; UJ++) {
                  const eJ = JJ[UJ];
                  if (!eJ || !ZJ.has(eJ.name)) continue;
                  const XJ = cJ[UJ],
                    AJ = (null === XJ || void 0 === XJ ? void 0 : XJ.name) === eJ.name ? XJ.amount : 0;
                  AJ < eJ.amount && FJ.push({
                    idx: UJ,
                    itemName: eJ.name,
                    amount: eJ.amount - AJ
                  })
                }
                return FJ
              }(eJ, cF(jJ.gameBridge.latest("inventory").player), FJ).slice(0, 12),
              hJ = ZJ ? 0 : Math.min(50, 400 / XJ.length),
              nJ = ZJ ? 220 : 320;
            for (const JJ of XJ) {
              var sJ;
              const ZJ = DJ.findIndex((cJ => {
                  let {
                    items: ZJ
                  } = cJ;
                  return ZJ.includes(JJ.itemName)
                })),
                FJ = null === (sJ = gJ.current) || void 0 === sJ ? void 0 : sJ.querySelector(`[data-craft-ingredient="${ZJ}"]`),
                UJ = (0, KZ.f)(JJ.idx);
              FJ && UJ && cJ.push({
                kind: "ingredient",
                itemName: JJ.itemName,
                amount: JJ.amount,
                fA: JJ.idx,
                from: UJ,
                to: (0, KZ.f)(FJ),
                delayMs: Math.round(cJ.length * hJ),
                durationMs: nJ
              })
            }
            let GJ;
            if (null !== AJ && YJ > 0 && HJ.current) {
              const JJ = cJ.length > 0 ? cJ[cJ.length - 1].delayMs + .6 * nJ : 0;
              GJ = {
                itemName: qJ,
                amount: YJ,
                fA: AJ,
                from: (0, KZ.f)(HJ.current),
                delayMs: Math.round(JJ)
              }
            }
            fJ(GJ, JJ && !UJ ? AJ : null, cJ), EZ.c.play("wood1", .5).rate(1.75)
          }
        },
        pJ = (0, UJ.useRef)(null);
      (0, UJ.useEffect)((() => () => {
        clearInterval(pJ.current)
      }), []);
      const dJ = (JJ, cJ) => {
          kJ(JJ, !1, !1), clearInterval(pJ.current), cJ && (pJ.current = setTimeout((() => {
            pJ.current = setInterval((() => {
              kJ(JJ, !1, !0)
            }), cJ.intervalMs)
          }), cJ.initialDelayMs))
        },
        zJ = () => {
          clearInterval(pJ.current)
        },
        NJ = !nJ || SJ || Boolean(EJ),
        OJ = (0, UJ.useRef)(null),
        TJ = null !== (ZJ = null === (FJ = (0, lZ.b)()) || void 0 === FJ ? void 0 : FJ.hideButtonHints) && void 0 !== ZJ && ZJ,
        CJ = null !== (eJ = null === (XJ = (0, oZ.f)()) || void 0 === XJ ? void 0 : XJ.getBoundButton("inventorySecondary")) && void 0 !== eJ ? eJ : null,
        uJ = () => !NJ && (kJ(!1, !0, !1), !0);
      (0, LZ.g)(rJ, {
        press: JJ => "secondary" === JJ ? uJ() : !NJ && (dJ(!1, XF()), !0),
        release: zJ,
        back: vJ,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, LZ.g)(OJ, {
        press: uJ,
        back: vJ,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [iJ, RJ] = (0, UJ.useState)(0), [LJ, BJ] = (0, UJ.useState)(null);
      (0, UJ.useEffect)((() => {
        if (!0 === AJ) {
          RJ(0);
          const JJ = setInterval((() => {
            RJ((JJ => JJ + 1))
          }), 1e3);
          return () => {
            clearInterval(JJ)
          }
        }
        return () => {}
      }), [AJ]);
      const tJ = null === GJ || void 0 === GJ ? void 0 : GJ.ingredientsCraftedFrom,
        oJ = (0, UJ.useRef)(xJ);
      (0, UJ.useEffect)((() => {
        oJ.current = xJ
      }), [xJ]);
      const lJ = !(null === EJ || void 0 === EJ || !EJ.hideIngredients);
      (0, UJ.useEffect)((() => {
        var JJ, cJ;
        if (!LJ) return;
        if (lJ) return BJ(null), void(null === (cJ = oJ.current) || void 0 === cJ || cJ.call(oJ, !1));
        const ZJ = LJ[iJ % LJ.length];
        null === (JJ = oJ.current) || void 0 === JJ || JJ.call(oJ, !0, AF(ZJ, KJ, null === tJ || void 0 === tJ ? void 0 : tJ[ZJ]))
      }), [LJ, iJ, KJ, tJ, lJ]);
      const Jc = !!EJ,
        cc = (0, UJ.useRef)(!1);
      (0, UJ.useEffect)((() => {
        var JJ;
        Jc && (clearInterval(pJ.current), lJ && cc.current && (cc.current = !1, null === (JJ = oJ.current) || void 0 === JJ || JJ.call(oJ, !1)))
      }), [Jc, lJ]);
      const Zc = (0, KZ.x)(KJ, qJ);
      return (0, YJ.jsxs)("div", {
        ref: gJ,
        className: "CraftableInfo SmallTextBold",
        children: [(0, YJ.jsx)("div", {
          className: "CraftableHeader",
          children: (0, YJ.jsx)(VJ.d, {
            text: Zc
          })
        }), !lJ && (0, YJ.jsx)("div", {
          className: sc()("CraftableIngredients", {
            Compact: DJ.length >= 5
          }),
          style: {
            maxWidth: WJ
          },
          children: MJ.map(((JJ, cJ) => {
            const ZJ = JJ.shownItems[iJ % JJ.shownItems.length];
            return (0, YJ.jsx)(YF, {
              idx: cJ,
              status: JJ,
              shownItem: ZJ,
              dim: bJ,
              onHoverStart: () => {
                BJ(JJ.shownItems)
              },
              onHoverEnd: () => {
                BJ(null), null === xJ || void 0 === xJ || xJ(!1)
              },
              onPadBack: vJ
            }, cJ)
          }))
        }), EJ && (0, YJ.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, YJ.jsx)(VJ.d, {
            text: EJ.reason
          })
        }), !EJ && (!nJ || SJ) && (0, YJ.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!nJ && "Missing ingredients", (0, YJ.jsx)("br", {}), SJ && "Inventory is full"]
        }), !lJ && (0, YJ.jsxs)(YJ.Fragment, {
          children: [(0, YJ.jsxs)(UF, {
            ref: rJ,
            className: "DoCraftButton",
            onPointerDown: JJ => {
              dJ((0, KZ.z)(JJ), (0, BZ.q)(JJ.nativeEvent) ? XF() : eF)
            },
            onPointerUp: zJ,
            onPointerLeave: zJ,
            disabled: NJ,
            children: [mJ && CJ && !NJ && !TJ && (0, YJ.jsx)(tZ.e, {
              className: "CraftShortcutGlyph",
              glyph: CJ
            }), (0, YJ.jsx)("div", {
              ref: HJ,
              className: "DoCraftItem",
              onPointerEnter: () => {
                cc.current = !0, null === xJ || void 0 === xJ || xJ(!0, AF(qJ, KJ))
              },
              onPointerLeave: () => {
                cc.current = !1, null === xJ || void 0 === xJ || xJ(!1)
              },
              children: (0, YJ.jsx)(mZ.d, {
                itemName: qJ,
                amount: sJ
              })
            })]
          }), (0, YJ.jsxs)(UF, {
            ref: OJ,
            className: "DoCraftAllButton",
            onPointerDown: JJ => {
              kJ((0, KZ.z)(JJ), !0, !1)
            },
            disabled: NJ,
            children: [(0, YJ.jsx)("span", {
              className: "CraftAllLabel",
              children: yJ("general:craftAll")
            }), IJ > 0 && (0, YJ.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", ZF(IJ)]
            })]
          })]
        })]
      })
    }

    function DF(JJ) {
      let {
        selectedIdx: cJ,
        hidden: ZJ
      } = JJ;
      const FJ = (0, vZ.q)(),
        eJ = (0, UJ.useRef)(null);
      return (0, UJ.useLayoutEffect)((() => {
        const JJ = eJ.current,
          FJ = null === JJ || void 0 === JJ ? void 0 : JJ.parentElement;
        if (!FJ || !JJ) return;
        const UJ = FJ.querySelector(".CraftableItems"),
          XJ = () => {
            var eJ, XJ;
            if (ZJ) return void(JJ.style.opacity = "0");
            const AJ = null === UJ || void 0 === UJ ? void 0 : UJ.children[cJ],
              qJ = null === (eJ = null !== (XJ = null === AJ || void 0 === AJ ? void 0 : AJ.querySelector(".InvenItem")) && void 0 !== XJ ? XJ : AJ) || void 0 === eJ ? void 0 : eJ.getBoundingClientRect();
            if (!qJ || 0 === qJ.width) return void(JJ.style.opacity = "0");
            const jJ = FJ.getBoundingClientRect();
            JJ.style.opacity = "1", JJ.style.width = `${qJ.width}px`, JJ.style.height = `${qJ.height}px`, JJ.style.transform = `translate(${qJ.left-jJ.left+FJ.scrollLeft}px, ${qJ.top-jJ.top+FJ.scrollTop}px)`
          };
        XJ();
        const AJ = new MutationObserver(XJ),
          qJ = new ResizeObserver(XJ);
        return qJ.observe(FJ), UJ && (AJ.observe(UJ, {
          childList: !0,
          subtree: !0
        }), qJ.observe(UJ)), () => {
          AJ.disconnect(), qJ.disconnect()
        }
      }), [cJ, ZJ]), (0, YJ.jsx)("div", {
        ref: eJ,
        className: sc()("SelectionReticle", {
          Secondary: FJ
        })
      })
    }

    function sF(JJ, cJ, ZJ) {
      return JJ ? (0, uZ.b)(iZ.m, JJ) ? nF(JJ, cJ, ZJ) : JJ : ZJ("classicGame:handCrafting")
    }

    function nF(JJ, cJ, ZJ) {
      var FJ;
      const UJ = null === (FJ = cJ[JJ]) || void 0 === FJ ? void 0 : FJ.displayName;
      if ("string" === typeof UJ) return ZJ(UJ);
      const eJ = jJ.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(UJ) ? UJ.map((JJ => {
        if ("string" === typeof JJ) return JJ;
        if ("translationKey" in JJ) return ZJ(JJ.translationKey, (0, aJ.s)(JJ.params, eJ));
        if ("str" in JJ) {
          if ("string" === typeof JJ.str) return JJ.str;
          if ("translationKey" in JJ.str) return ZJ(JJ.str.translationKey, (0, aJ.s)(JJ.str.params, eJ))
        }
        return ""
      })).join("") : UJ && "translationKey" in UJ ? ZJ(UJ.translationKey, (0, aJ.s)(UJ.params, eJ)) : JJ
    }

    function GF(JJ, cJ) {
      return JJ === cJ || null !== JJ && null !== cJ && JJ.name === cJ.name && JJ.qj === cJ.qj
    }

    function fF(JJ) {
      var cJ, ZJ, FJ;
      let {
        show: eJ,
        onCraft: XJ,
        dispatchSelectedCraftable: AJ,
        selectedCraftable: qJ,
        craftingStation: hJ,
        setHovered: DJ
      } = JJ;
      const {
        t: sJ
      } = (0, aJ.F)(), [nJ, GJ] = (0, UJ.useState)(""), [fJ, xJ] = (0, UJ.useState)(0);
      (0, UJ.useEffect)((() => {
        eJ || (GJ(""), xJ((JJ => JJ + 1)))
      }), [eJ]);
      const [rJ, vJ] = (0, UJ.useState)(hJ);
      rJ !== hJ && (vJ(hJ), "" !== nJ && (GJ(""), xJ((JJ => JJ + 1))));
      const mJ = (0, UJ.useRef)(null),
        QJ = (0, UJ.useRef)(null),
        EJ = (0, aZ.j)(),
        VJ = EJ.showing && "recipe" === EJ.kind,
        [KJ, yJ] = (0, UJ.useState)(0),
        IJ = null !== hJ && void 0 !== hJ ? hJ : null,
        MJ = (0, UJ.useRef)(null),
        bJ = JJ => {
          return !((cJ = MJ.current) === (ZJ = JJ) || null !== cJ && null !== ZJ && cJ.station === ZJ.station && GF(cJ.recipe, ZJ.recipe)) && (MJ.current = JJ, jJ.gameBridge.send("focusCrafting", JJ), !0);
          var cJ, ZJ
        };
      bJ(eJ ? {
        station: IJ,
        recipe: (null === (cJ = MJ.current) || void 0 === cJ ? void 0 : cJ.station) === IJ ? MJ.current.recipe : null
      } : null);
      let wJ = jJ.gameBridge.latest("crafting");
      const WJ = (0, SJ.f)("itemInfo"),
        gJ = "" !== nJ.trim(),
        HJ = (0, FF.u)(),
        PJ = (0, FF.t)(),
        kJ = (0, FF.v)(),
        pJ = function(JJ, cJ) {
          const [ZJ, FJ] = (0, UJ.useState)(!1);
          (0, UJ.useEffect)((() => {
            if (!JJ) return void FJ(!1);
            const cJ = setTimeout((() => {
              FJ(!0)
            }), 0);
            return () => {
              clearTimeout(cJ)
            }
          }), [JJ]);
          const eJ = JJ && ZJ,
            XJ = (0, UJ.useRef)({
              station: cJ,
              at: new Map
            });
          return (XJ.current.station !== cJ || !eJ && XJ.current.at.size > 0) && (XJ.current = {
            station: cJ,
            at: new Map
          }), eJ ? XJ.current.at : null
        }(eJ, hJ);
      let dJ = wJ.recipes.filter((JJ => {
        let {
          listed: cJ
        } = JJ;
        return cJ
      }));
      if (gJ) {
        const JJ = [];
        for (const cJ of wJ.recipes) {
          var zJ;
          const ZJ = null !== (zJ = PJ.get(cJ.name)) && void 0 !== zJ && zJ.hideIngredients ? [] : cJ.requires.flatMap((JJ => {
              let {
                items: cJ
              } = JJ;
              return cJ.flatMap((JJ => [JJ, nF(JJ, WJ, sJ)]))
            })),
            FJ = JF(nJ, [cJ.name, nF(cJ.name, WJ, sJ)], ZJ);
          null !== FJ && JJ.push({
            item: cJ,
            rank: FJ
          })
        }
        JJ.sort(((JJ, cJ) => JJ.rank - cJ.rank)), dJ = JJ.map((JJ => {
          let {
            item: cJ
          } = JJ;
          return cJ
        }))
      } else {
        if (pJ && pJ.size > 0) {
          const JJ = wJ.recipes.filter((JJ => !JJ.listed && pJ.has(qF(JJ))));
          dJ = dJ.concat(JJ)
        }
        dJ = (0, FF.h)(dJ, HJ, PJ, kJ), pJ && (dJ = (0, FF.f)(dJ, pJ, qF))
      }
      const NJ = JJ => dJ.find((cJ => qF(cJ) === JJ)),
        OJ = `${hJ}|${nJ}`,
        [TJ, CJ] = (0, UJ.useState)(null),
        uJ = (null === TJ || void 0 === TJ ? void 0 : TJ.context) === OJ ? TJ.key : null,
        iJ = qJ ? qF(qJ) : null,
        RJ = null !== (ZJ = null !== (FJ = NJ(iJ)) && void 0 !== FJ ? FJ : NJ(uJ)) && void 0 !== ZJ ? ZJ : dJ[0],
        LJ = RJ ? qF(RJ) : null,
        BJ = RJ ? {
          name: RJ.name,
          qj: RJ.qj
        } : null;
      eJ && bJ({
        station: IJ,
        recipe: BJ
      }) && (wJ = jJ.gameBridge.latest("crafting")), LJ !== iJ && LJ !== uJ && CJ(LJ ? {
        context: OJ,
        key: LJ
      } : null), (0, UJ.useEffect)((() => () => {
        MJ.current = null, jJ.gameBridge.send("focusCrafting", null)
      }), []);
      const tJ = GF(wJ.detail, BJ) ? wJ.detail : null,
        oJ = null !== tJ && !tJ.roomForOne,
        lJ = dJ.findIndex((JJ => qF(JJ) === qF(RJ))),
        Jc = () => QJ.current ? (0, LZ.e)(QJ.current) : null,
        cc = (0, UJ.useRef)(null),
        Zc = (0, UJ.useRef)(0);
      Zc.current++;
      const Fc = Zc.current;
      (0, UJ.useEffect)((() => {
        const JJ = cc.current;
        if (!JJ || Fc <= JJ.afterRender) return;
        if (cc.current = null, JJ.key !== LJ) return;
        const cJ = Jc();
        var ZJ;
        null !== cJ && void 0 !== cJ && cJ.press("primary") && !JJ.hj && (null === (ZJ = cJ.release) || void 0 === ZJ || ZJ.call(cJ))
      }));
      const Uc = JJ => {
          const cJ = {
            name: JJ.name,
            qj: JJ.qj
          };
          return {
            choose: () => {
              AJ(cJ), (0, rZ.r)(QJ.current)
            },
            craft: () => {
              var JJ, ZJ;
              return AJ(cJ), qF(cJ) !== qF(RJ) ? (cc.current = {
                key: qF(cJ),
                hj: !0,
                afterRender: Zc.current
              }, !0) : null !== (JJ = null === (ZJ = Jc()) || void 0 === ZJ ? void 0 : ZJ.press("primary")) && void 0 !== JJ && JJ
            },
            stopCraft: () => {
              var JJ, cJ;
              cc.current ? cc.current.hj = !1 : null === (JJ = Jc()) || void 0 === JJ || null === (cJ = JJ.release) || void 0 === cJ || cJ.call(JJ)
            },
            refuse: () => {
              qF(cJ) !== qF(RJ) && AJ(cJ), yJ((JJ => JJ + 1))
            }
          }
        },
        ec = () => {
          var JJ, cJ, ZJ;
          (0, rZ.r)(null !== (JJ = null === (cJ = mJ.current) || void 0 === cJ || null === (ZJ = cJ.querySelector(".CraftableItems")) || void 0 === ZJ ? void 0 : ZJ.children[lJ]) && void 0 !== JJ ? JJ : null)
        },
        Xc = dJ.map(qF).join("|"),
        Ac = (0, UJ.useRef)(Xc);
      return (0, UJ.useEffect)((() => {
        Ac.current !== Xc && (Ac.current = Xc, VJ && lJ >= 0 && (0, aZ.f)() && ec())
      })), (0, YJ.jsxs)("div", {
        className: "Craftables",
        children: [(0, YJ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: sF(hJ, WJ, sJ)
        }), (0, YJ.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, YJ.jsx)(Sc.e, {
            className: "CraftingSearch",
            placeholderText: sJ("general:searchRecipes"),
            defaultValue: nJ,
            maxLength: 100,
            onValueChange: JJ => {
              GJ(JJ)
            },
            blurOnEnter: !0
          }, fJ), 0 === dJ.length && gJ && (0, YJ.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: sJ("general:noRecipesMatchSearch")
          }), dJ.length > 0 && (0, YJ.jsxs)(YJ.Fragment, {
            children: [(0, YJ.jsxs)("div", {
              ref: mJ,
              className: "CraftablesLeftSide",
              children: [(0, YJ.jsx)(RZ.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(dJ.map((JJ => {
                  let {
                    name: cJ,
                    qj: ZJ,
                    haveIngredients: FJ
                  } = JJ;
                  return {
                    name: cJ,
                    qj: ZJ,
                    haveIngredients: FJ
                  }
                })))],
                observing: eJ,
                children: dJ.map((JJ => {
                  const {
                    name: cJ,
                    qj: ZJ,
                    haveIngredients: FJ
                  } = JJ, UJ = qF(JJ);
                  return (0, YJ.jsx)(jF, {
                    recipeId: UJ,
                    itemName: cJ,
                    onClick: () => {
                      AJ({
                        name: cJ,
                        qj: ZJ
                      })
                    },
                    isSelected: qF(RJ) === UJ,
                    haveIngredients: FJ,
                    craftable: FJ && !PJ.has(cJ) && !(qF(RJ) === UJ && oJ),
                    setHovered: DJ,
                    padActions: Uc(JJ),
                    marked: HJ.has(cJ),
                    lock: PJ.get(cJ),
                    itemInfo: WJ
                  }, UJ)
                }))
              }), (0, YJ.jsx)(DF, {
                selectedIdx: lJ,
                hidden: VJ && EJ.steppingSlots
              })]
            }), (0, YJ.jsx)(hF, {
              show: eJ,
              recipeItem: RJ,
              detail: tJ,
              onCraft: XJ,
              setHovered: DJ,
              craftButtonRef: QJ,
              onPadBack: ec,
              showPadShortcut: VJ,
              refusedCount: KJ,
              lock: PJ.get(RJ.name),
              itemInfo: WJ
            })]
          })]
        })]
      })
    }
    var xF = ZJ(35740),
      rF = ZJ(2778),
      vF = ZJ(1890),
      mF = ZJ(7977);
    class QF {
      constructor(JJ, cJ, ZJ) {
        this.commit = JJ, this.delayMs = cJ, this.defers = ZJ, this.pending = null, this.timer = void 0, this.hj = !1, this.flush = () => {
          clearTimeout(this.timer);
          const JJ = this.pending;
          null !== JJ && (this.pending = null, this.commit(JJ))
        }
      }
      type(JJ) {
        this.pending = JJ, clearTimeout(this.timer), this.hj || this.defers() ? this.hj || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(JJ) {
        var cJ;
        return null !== (cJ = this.pending) && void 0 !== cJ ? cJ : JJ
      }
      isHeld() {
        return this.hj
      }
      setHeld(JJ) {
        this.hj = JJ, JJ || this.flush()
      }
    }

    function EF(JJ) {
      return null === JJ ? "creativeInventory:all" : `creativeInventory:${JJ}`
    }

    function VF(JJ) {
      let {
        category: cJ
      } = JJ;
      return null === cJ ? (0, YJ.jsx)(fJ.c, {
        name: "layer-group"
      }) : (0, YJ.jsx)(mZ.d, {
        itemName: xF.creativeItemCategoryIcons[cJ],
        amount: 0
      })
    }

    function KF(JJ) {
      let {
        labelKey: cJ,
        isSelected: ZJ,
        onSelect: FJ,
        setHovered: UJ,
        children: eJ
      } = JJ;
      return (0, YJ.jsx)("div", {
        className: sc()("CreativeCategoryTab", {
          Selected: ZJ
        }),
        onClick: FJ,
        onPointerEnter: JJ => {
          (0, KZ.t)(JJ) || UJ(!0, {
            name: {
              translationKey: cJ
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          UJ(!1)
        },
        children: eJ
      })
    }

    function yF(JJ) {
      let {
        categories: cJ,
        selectedCategory: ZJ,
        onSelect: FJ
      } = JJ;
      const {
        t: eJ
      } = (0, aJ.F)(), [XJ, AJ] = (0, UJ.useState)(!1), qJ = (0, UJ.useRef)(null), jJ = (0, UJ.useCallback)((() => {
        AJ(!1)
      }), []);
      return (0, vF.c)(qJ, jJ), (0, YJ.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: qJ,
        children: [(0, YJ.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            AJ(!XJ)
          },
          children: [(0, YJ.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, YJ.jsx)(VF, {
              category: ZJ
            })
          }), (0, YJ.jsx)("span", {
            children: eJ(EF(ZJ))
          }), (0, YJ.jsx)(fJ.c, {
            name: XJ ? "caret-up" : "caret-down"
          })]
        }), XJ && (0, YJ.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: cJ.map((JJ => (0, YJ.jsxs)("div", {
            className: sc()("CreativeCategoryDropdownOption", {
              Selected: ZJ === JJ
            }),
            onClick: () => {
              FJ(JJ), AJ(!1)
            },
            children: [(0, YJ.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, YJ.jsx)(VF, {
                category: JJ
              })
            }), (0, YJ.jsx)("span", {
              children: eJ(EF(JJ))
            })]
          }, null !== JJ && void 0 !== JJ ? JJ : "all")))
        })]
      })
    }
    const SF = (0, UJ.memo)((function(JJ) {
      let {
        creativeScrollDiv: cJ,
        playerInvenNumSlots: ZJ,
        getSetHoveringForIdx: FJ,
        getPointerDownForIdx: eJ,
        getPointerUpForIdx: XJ,
        creativeSearchVal: AJ,
        setCreativeSearchVal: jJ,
        creativeCategory: hJ,
        setCreativeCategory: DJ,
        show: sJ
      } = JJ;
      const {
        t: nJ
      } = (0, aJ.F)(), GJ = (0, SJ.f)("creativeVisibility"), {
        userContext: xJ
      } = (0, EJ.d)(), rJ = (0, qJ.f)("canUseDevCreativeItems"), vJ = xJ.playerHasRank("developer") || !!rJ, mJ = (0, UJ.useMemo)((() => MF("", GJ, vJ)), [GJ, vJ]), QJ = (0, UJ.useMemo)((() => {
        const JJ = (0, xF.creativeItemIds)(),
          cJ = new Set(mJ.map((cJ => (0, xF.creativeCategoryOf)(JJ[cJ]))));
        return xF.creativeItemCategories.filter((JJ => cJ.has(JJ)))
      }), [mJ]), VJ = null !== hJ && QJ.includes(hJ) ? hJ : null, yJ = (0, UJ.useMemo)((() => "" === AJ ? mJ : MF(AJ, GJ, vJ)), [mJ, AJ, GJ, vJ]), IJ = (0, UJ.useMemo)((() => {
        const JJ = (0, xF.creativeItemIds)();
        return null !== VJ ? yJ.filter((cJ => (0, xF.creativeCategoryOf)(JJ[cJ]) === VJ)) : "" === AJ ? yJ.filter((cJ => !(0, xF.showOnlyInCreativeCategory)(JJ[cJ]))) : yJ
      }), [yJ, VJ, AJ]), MJ = FJ();

      function bJ(JJ) {
        DJ(JJ), cJ.current.scrollTop = 0
      }
      const wJ = [null, ...QJ],
        {
          isTouchScreen: WJ
        } = (0, zJ.j)(["isTouchScreen"]),
        gJ = !WJ,
        HJ = (0, UJ.useRef)(null),
        [PJ, kJ] = (0, UJ.useState)(0);
      (0, UJ.useEffect)((() => {
        const JJ = HJ.current;
        if (!JJ) return;
        const cJ = new ResizeObserver((JJ => {
          kJ(JJ[0].contentRect.height)
        }));
        return cJ.observe(JJ), () => {
          cJ.disconnect()
        }
      }), [gJ]);
      const pJ = (0, UJ.useRef)(null),
        dJ = (0, UJ.useCallback)((function JJ() {
          "up" === pJ.current ? cJ.current.scrollTop -= 10 : "down" === pJ.current && (cJ.current.scrollTop += 10), pJ.current && requestAnimationFrame(JJ)
        }), [cJ]),
        NJ = (0, UJ.useCallback)((function(JJ) {
          pJ.current || (pJ.current = JJ, dJ())
        }), [dJ]);

      function OJ() {
        pJ.current = null
      }
      const TJ = (0, UJ.useRef)({
        creativeSearchVal: AJ,
        setCreativeSearchVal: jJ
      });
      TJ.current = {
        creativeSearchVal: AJ,
        setCreativeSearchVal: jJ
      };
      const [CJ] = (0, UJ.useState)((() => new QF((JJ => {
        TJ.current.setCreativeSearchVal(JJ)
      }), 250, vZ.e))), uJ = JJ => {
        var ZJ;
        null === (ZJ = cJ.current) || void 0 === ZJ || ZJ.classList.toggle("CreativeItemSlotsStale", JJ)
      };
      (0, KJ.i)(mF.b, (JJ => {
        CJ.setHeld(JJ), JJ || uJ(!1)
      })), (0, UJ.useEffect)((() => CJ.flush), [CJ]);
      const iJ = (0, YJ.jsx)(Sc.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: AJ,
          maxLength: 1e4,
          onValueChange: (JJ, cJ) => {
            "" === CJ.getTyped(TJ.current.creativeSearchVal) && "" !== JJ && DJ(null), CJ.type(JJ), uJ(CJ.isHeld())
          },
          onEnter: CJ.flush,
          blurOnEnter: !0
        }),
        RJ = (0, YJ.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [WJ && (0, YJ.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, YJ.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                NJ("up")
              },
              onPointerLeave: OJ,
              onPointerUp: OJ,
              children: (0, YJ.jsx)(fJ.c, {
                name: "arrow-up"
              })
            }), (0, YJ.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                NJ("down")
              },
              onPointerLeave: OJ,
              onPointerUp: OJ,
              children: (0, YJ.jsx)(fJ.c, {
                name: "arrow-up"
              })
            })]
          }), (0, YJ.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: cJ,
            children: [0 === IJ.length && "" !== AJ && (0, YJ.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: nJ("general:noResults")
            }), (0, YJ.jsx)(RZ.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [AJ, VJ],
              observerRoot: "CreativeItemSlots",
              observing: sJ,
              children: IJ.map((JJ => {
                const cJ = ZJ + JJ;
                return (0, YJ.jsx)(NZ.e, {
                  idx: cJ,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: FJ(cJ),
                  pointerDown: eJ(cJ),
                  pointerUp: XJ(cJ)
                }, cJ)
              }))
            })]
          })]
        });
      return (0, YJ.jsxs)("div", {
        className: sc()("CreativeItemSlotsWrapper", gJ ? "WithRail" : "WithDropdown"),
        children: [gJ && (0, YJ.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: HJ,
          style: {
            "--rail-height": PJ > 0 ? `${PJ}px` : void 0,
            "--tab-rows": Math.ceil(wJ.length / 2)
          },
          children: wJ.map((JJ => (0, YJ.jsx)(KF, {
            labelKey: EF(JJ),
            isSelected: VJ === JJ,
            onSelect: () => {
              bJ(JJ)
            },
            setHovered: MJ,
            children: (0, YJ.jsx)(VF, {
              category: JJ
            })
          }, null !== JJ && void 0 !== JJ ? JJ : "all")))
        }), (0, YJ.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, YJ.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [iJ, !gJ && (0, YJ.jsx)(yF, {
              categories: wJ,
              selectedCategory: VJ,
              onSelect: bJ
            })]
          }), RJ]
        })]
      })
    }));

    function IF(JJ) {
      var cJ;
      return null !== (cJ = (0, rF.e)(JJ)) && void 0 !== cJ ? cJ : ""
    }

    function MF(JJ, cJ, ZJ) {
      let {
        publicLobby: FJ,
        shownInGame: UJ
      } = cJ;
      const eJ = JJ.toLowerCase(),
        XJ = (0, xF.creativeItemIds)(),
        AJ = JJ => {
          var cJ;
          const eJ = XJ[JJ];
          return !(0, xF.itemIsDisabled)(eJ, FJ, null === (cJ = UJ[IF(eJ)]) || void 0 === cJ || cJ, ZJ)
        };
      if ("" === eJ) return XJ.map(((JJ, cJ) => cJ)).filter((JJ => !(0, xF.showOnlyInCreativeSearch)(XJ[JJ]))).filter(AJ);
      const qJ = [];
      for (let jJ = 0; jJ < XJ.length; jJ++) IF(XJ[jJ]).toLowerCase().includes(eJ) && qJ.push(jJ);
      qJ.sort(((JJ, cJ) => {
        const ZJ = IF(XJ[JJ]).toLowerCase(),
          FJ = IF(XJ[cJ]).toLowerCase();
        return ZJ.indexOf(eJ) - FJ.indexOf(eJ)
      }));
      for (const [jJ, YJ] of(0, xF.creativeAltNames)())
        for (const JJ of YJ)
          if (JJ.toLowerCase().includes(eJ)) {
            const JJ = XJ.indexOf(jJ);
            qJ.includes(JJ) || qJ.push(JJ)
          } return qJ.filter(AJ)
    }
    var bF = ZJ(35848),
      wF = ZJ(535);

    function WF(JJ) {
      return JJ > wF.m
    }

    function gF(JJ) {
      const cJ = JJ / 2,
        ZJ = [];
      for (let FJ = 0; FJ < cJ / 6; FJ++)
        for (let JJ = 0; JJ < 12; JJ++) {
          const UJ = JJ < 6 ? 0 : cJ;
          ZJ.push(UJ + 6 * FJ + JJ % 6)
        }
      return ZJ
    }

    function HF(JJ) {
      let {
        numSlots: cJ,
        renderSlot: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), eJ = (0, UJ.useRef)(null);
      var XJ;
      return XJ = eJ, (0, UJ.useLayoutEffect)((() => {
        var JJ;
        const cJ = null === (JJ = XJ.current) || void 0 === JJ ? void 0 : JJ.closest(".InvenBody");
        if (!cJ) return;
        const ZJ = () => {
          cJ.style.zoom = "";
          const JJ = parseFloat(getComputedStyle(document.documentElement).fontSize),
            ZJ = window.innerWidth - 2 * JJ,
            FJ = cJ.getBoundingClientRect().width;
          FJ > ZJ && (cJ.style.zoom = "" + ZJ / FJ)
        };
        return ZJ(), window.addEventListener("resize", ZJ), () => {
          window.removeEventListener("resize", ZJ), cJ.style.zoom = ""
        }
      }), [XJ]), (0, YJ.jsxs)("div", {
        ref: eJ,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, YJ.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: FJ("doubleChest:title")
        }), (0, YJ.jsx)("div", {
          className: "GridItemSlots",
          children: gF(cJ).map((JJ => ZJ(JJ)))
        })]
      })
    }

    function PF(JJ) {
      let {
        JZ: cJ,
        initialPasskey: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), [eJ, XJ] = (0, UJ.useState)(ZJ), [AJ, qJ] = (0, UJ.useState)(ZJ);
      (0, UJ.useEffect)((() => {
        XJ(ZJ), qJ(ZJ)
      }), [...cJ]);
      return (0, YJ.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, YJ.jsx)("div", {
          className: "SmallTextBold",
          children: FJ("ironChest:currentPasskey", {
            currentPasskey: eJ.join("")
          })
        }), (0, YJ.jsx)(kZ, {
          className: "IronChestPasskeyEditor",
          JX: AJ,
          onPasskeyUpdated: qJ,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            jJ.gameBridge.send("changeIronChestPasskey", {
              pos: [...cJ],
              JX: [...AJ]
            }), XJ([...AJ])
          }
        })]
      })
    }

    function kF(JJ) {
      let {
        variation: cJ,
        canCraft: ZJ,
        show: FJ,
        creativeMounted: UJ,
        specialItemRef: eJ,
        draggedInfo: XJ,
        getSetHovering: AJ,
        getPointerDownForIdx: qJ,
        getPointerUpForIdx: jJ,
        enchantingTablePosition: hJ,
        enchantingTableBlockName: DJ,
        selectedCraftable: sJ,
        dispatchSelectedCraftable: nJ,
        creativeScrollDiv: GJ,
        creativeSearchVal: fJ,
        setCreativeSearchVal: xJ,
        creativeCategory: rJ,
        setCreativeCategory: vJ,
        onCraft: mJ
      } = JJ;
      const {
        userContext: QJ
      } = (0, EJ.d)(), {
        t: VJ
      } = (0, aJ.F)(), KJ = (0, SJ.d)("inventory", (JJ => JJ.chest)), yJ = (0, SJ.d)("inventory", (JJ => JJ.player.length)), IJ = (0, SJ.d)("inventory", (JJ => JJ.creative));
      if (0 === yJ) return null;
      let MJ, bJ;
      const wJ = JJ => {
          const cJ = yJ + JJ;
          return (0, YJ.jsx)(NZ.e, {
            idx: cJ,
            draggedInfo: XJ,
            specialItemInfo: eJ.current,
            setHovered: AJ(cJ),
            pointerDown: qJ(cJ),
            pointerUp: jJ(cJ)
          }, cJ)
        },
        WJ = KJ ? (0, bF.e)(KJ.type) : null;
      if (WJ) MJ = sc()("InvenLeftSideChestCustom", WJ.className), bJ = (0, YJ.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: WJ.render({
          JZ: KJ.pos,
          renderSlot: wJ
        })
      });
      else if (KJ) {
        const JJ = KJ.pos,
          cJ = "Iron" === KJ.type || "Moonstone" === KJ.type ? KJ.type : "Standard";
        let ZJ = !1,
          FJ = null;
        "Iron" === cJ && (ZJ = KJ.ironChest.ownerDbId === QJ.whamm, FJ = KJ.ironChest.JX), MJ = `InvenLeftSideChest${cJ}`;
        const UJ = WF(KJ.numSlots);
        bJ = (0, YJ.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [ZJ && (0, YJ.jsx)(PF, {
            JZ: JJ,
            initialPasskey: FJ
          }), UJ && (0, YJ.jsx)(HF, {
            numSlots: KJ.numSlots,
            renderSlot: wJ
          }), !UJ && (0, YJ.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, YJ.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: VJ("Moonstone" === cJ ? "item:moonstoneChest" : "Iron" === cJ ? "item:ironChest" : "item:chest")
            }), (0, YJ.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(KJ.numSlots).fill(0).map(((JJ, cJ) => wJ(cJ)))
            })]
          })]
        })
      } else if (!IJ || cJ && ZJ)
        if (ZJ && "Enchanting Table" === cJ) MJ = `InvenLeftSide${(null!==DJ&&void 0!==DJ?DJ:"").replace(/ /gi,"")}`, bJ = (0, YJ.jsx)(OZ, {
          specialItemInfo: eJ.current,
          setHovered: AJ,
          pointerDown: qJ(SZ.g),
          pointerUp: jJ(SZ.g),
          enchantingTablePosition: hJ,
          enchantingTableBlockName: DJ
        });
        else if (ZJ && "Salvaging Table" === cJ) MJ = "InvenLeftSideSalvagingTable", bJ = (0, YJ.jsx)(CZ, {
        specialItemInfo: eJ.current,
        setSpecialItemInfo: JJ => {
          eJ.current = JJ
        },
        setHovered: AJ,
        pointerDown: qJ(SZ.g),
        pointerUp: jJ(SZ.g)
      });
      else {
        if (!ZJ) return null;
        MJ = `InvenLeftSide${(null!==cJ&&void 0!==cJ?cJ:"HandCrafting").replace(/ /gi,"")}`, bJ = (0, YJ.jsx)(fF, {
          show: FJ,
          onCraft: mJ,
          craftingStation: cJ,
          selectedCraftable: sJ,
          dispatchSelectedCraftable: nJ,
          setHovered: AJ()
        })
      } else MJ = "InvenLeftSideCreative", bJ = UJ ? (0, YJ.jsx)(SF, {
        creativeScrollDiv: GJ,
        playerInvenNumSlots: yJ,
        getSetHoveringForIdx: AJ,
        getPointerDownForIdx: qJ,
        getPointerUpForIdx: jJ,
        creativeSearchVal: fJ,
        setCreativeSearchVal: xJ,
        creativeCategory: rJ,
        setCreativeCategory: vJ,
        show: FJ
      }) : null;
      const gJ = !!KJ || ZJ && !!cJ;
      return (0, YJ.jsx)("div", {
        className: `InvenLeftSide ${MJ}`,
        "data-pad-inventory-start": gJ ? "" : void 0,
        children: bJ
      })
    }
    var pF = ZJ(523);
    const dF = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function zF(JJ) {
      let {
        show: cJ,
        draggedInfo: ZJ,
        specialItemInfo: FJ,
        craftFlyAnims: UJ,
        getSetHovering: eJ,
        getPointerDownForIdx: XJ,
        getPointerUpForIdx: AJ,
        variation: qJ,
        canCraft: jJ,
        isNewSlot: hJ
      } = JJ;
      const DJ = (0, SJ.d)("inventory", (JJ => JJ.player.length)),
        sJ = jZ(cJ);
      return 0 === DJ ? null : (0, YJ.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, YJ.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(pF.e.length).fill(0).map(((JJ, cJ) => {
            var nJ;
            const GJ = DJ - pF.e.length + cJ;
            return (0, YJ.jsx)(NZ.e, {
              idx: GJ,
              draggedInfo: ZJ,
              specialItemInfo: FJ,
              craftFlyHoldbackInfo: (0, yZ.i)(UJ, GJ),
              setHovered: eJ(GJ),
              pointerDown: XJ(GJ),
              pointerUp: AJ(GJ),
              defaultIconB64: null !== (nJ = sJ(dF[pF.e[cJ]], eZ.f.ITEM)) && void 0 !== nJ ? nJ : null,
              variation: jJ ? qJ : void 0,
              showNewDot: hJ(GJ)
            }, GJ)
          }))
        }), (0, YJ.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(DJ - 10 - pF.e.length).fill(0).map(((JJ, cJ) => {
            const sJ = DJ - pF.e.length - cJ - 1;
            return (0, YJ.jsx)(NZ.e, {
              idx: sJ,
              draggedInfo: ZJ,
              specialItemInfo: FJ,
              craftFlyHoldbackInfo: (0, yZ.i)(UJ, sJ),
              setHovered: eJ(sJ),
              pointerDown: XJ(sJ),
              pointerUp: AJ(sJ),
              variation: jJ ? qJ : void 0,
              showNewDot: hJ(sJ)
            }, sJ)
          }))
        })]
      })
    }
    var NF = ZJ(35852),
      OF = ZJ(35858);

    function TF(JJ) {
      const {
        e: cJ,
        idx: ZJ
      } = JJ, FJ = (0, KZ.l)(JJ.readInventory(), ZJ), UJ = (0, KZ.q)(cJ);
      ZJ === SZ.e ? function(JJ, cJ) {
        const {
          draggedInfoRef: ZJ,
          removeItem: FJ,
          removeDraggedInfoRef: UJ,
          close: eJ
        } = JJ;
        if (ZJ.current) {
          const JJ = cJ && ZJ.current.amount || 1;
          FJ(ZJ.current.idx, JJ, !0) && (ZJ.current.amount -= JJ, ZJ.current.amount <= 0 && UJ())
        } else cJ && eJ()
      }(JJ, UJ) : ZJ === SZ.g ? function(JJ, cJ) {
        const {
          e: ZJ,
          draggedInfoRef: FJ,
          specialItemRef: UJ,
          moveAmtIntoSlot: eJ,
          removeDraggedInfoRef: XJ
        } = JJ;
        if ((0, KZ.z)(ZJ) && UJ.current) UJ.current = null;
        else if (FJ.current && UJ.current && (FJ.current.idx === UJ.current.idx || (0, OF.c)(FJ.current, UJ.current)) && FJ.current.amount > 0 && UJ.current.amount > 0 && UJ.current.amount < HZ.c.maxItemStackSize)
          if (FJ.current.idx === UJ.current.idx) {
            if (cJ) {
              const JJ = Math.min(FJ.current.amount, HZ.c.maxItemStackSize - UJ.current.amount);
              UJ.current.amount += JJ, FJ.current.amount -= JJ
            } else FJ.current.amount--, UJ.current.amount++;
            FJ.current.amount <= 0 && XJ()
          } else if (cJ) {
          const JJ = Math.min(FJ.current.amount, HZ.c.maxItemStackSize - UJ.current.amount);
          eJ(UJ.current.idx, JJ) && (UJ.current.amount += JJ)
        } else {
          eJ(UJ.current.idx, 1) && UJ.current.amount++
        } else if (!FJ.current || UJ.current || cJ) {
          const JJ = FJ.current;
          FJ.current = UJ.current, UJ.current = JJ
        } else FJ.current.amount--, UJ.current = {
          idx: FJ.current.idx,
          name: FJ.current.name,
          attributes: FJ.current.attributes,
          amount: 1
        }
      }(JJ, UJ) : (0, KZ.z)(cJ) ? function(JJ, cJ) {
        var ZJ, FJ;
        const {
          idx: UJ,
          draggedInfoRef: eJ,
          specialItemRef: XJ,
          canCraft: AJ,
          variation: qJ,
          swapSlots: jJ,
          moveIntoSlots: YJ
        } = JJ;
        if (!cJ) return;
        let hJ = cJ.amount;
        UJ === (null === (ZJ = eJ.current) || void 0 === ZJ ? void 0 : ZJ.idx) && (hJ = eJ.current.amount <= 0 ? 0 : cJ.amount - eJ.current.amount);
        UJ === (null === (FJ = XJ.current) || void 0 === FJ ? void 0 : FJ.idx) && (hJ = XJ.current.amount <= 0 ? 0 : cJ.amount - XJ.current.amount);
        if (0 === hJ) return;
        const DJ = JJ.readInventory(),
          sJ = DJ.player.length,
          nJ = DJ.chest,
          GJ = sJ - pF.e.length,
          fJ = () => {
            if (!(0, vZ.e)()) return void YJ(10, GJ, UJ, hJ);
            const JJ = JJ => {
              const ZJ = (0, KZ.l)(DJ, JJ);
              return ZJ ? {
                amount: ZJ.amount,
                stacksWithMoved: (0, OF.c)(ZJ, cJ)
              } : null
            };
            for (const cJ of ((JJ, cJ, ZJ, FJ, UJ) => {
                const eJ = [];
                let XJ = FJ;
                if (null !== FJ) {
                  let AJ = 0;
                  for (let FJ = cJ; FJ < ZJ; FJ++) {
                    const cJ = JJ(FJ);
                    null !== cJ && void 0 !== cJ && cJ.stacksWithMoved && null !== cJ.amount && cJ.amount > 0 && (AJ += Math.max(0, UJ - cJ.amount))
                  }
                  const qJ = Math.min(FJ, AJ);
                  if (qJ > 0 && (eJ.push({
                      start: cJ,
                      end: ZJ,
                      amount: qJ
                    }), XJ = FJ - qJ), XJ <= 0) return eJ
                }
                for (let AJ = ZJ - 1; AJ >= cJ; AJ--)
                  if (null === JJ(AJ)) {
                    eJ.push({
                      start: AJ,
                      end: AJ + 1,
                      amount: XJ
                    });
                    break
                  } return eJ
              })(JJ, 10, GJ, hJ, HZ.c.maxItemStackSize)) YJ(cJ.start, cJ.end, UJ, cJ.amount)
          };
        if (!AJ || "Enchanting Table" !== qJ && "Salvaging Table" !== qJ) {
          const ZJ = (0, yJ.sb)(cJ.name),
            FJ = ZJ ? (0, yJ.pb)(ZJ) : null;
          if (!pF.e.includes(ZJ) || UJ !== FJ && (0, KZ.m)(DJ, JJ.itemInfo, FJ, UJ))
            if (nJ)
              if (UJ < sJ) {
                var xJ, rJ;
                const [JJ, cJ] = null !== (xJ = null === (rJ = (0, bF.e)(nJ.type)) || void 0 === rJ ? void 0 : rJ.quickMoveRange) && void 0 !== xJ ? xJ : [0, nJ.numSlots];
                YJ(sJ + JJ, sJ + cJ, UJ, hJ)
              } else YJ(0, sJ - pF.e.length, UJ, hJ);
          else DJ.creative ? UJ < 10 ? fJ() : UJ < sJ ? YJ(0, 10, UJ, hJ) : YJ(0, sJ - pF.e.length, UJ, null !== cJ.amount ? HZ.c.maxItemStackSize : null) : UJ < 10 ? fJ() : YJ(0, 10, UJ, hJ);
          else UJ < sJ - pF.e.length || UJ >= sJ ? jJ(FJ, UJ) : (YJ(0, sJ - pF.e.length, FJ, hJ), EZ.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else XJ.current = {
          idx: UJ,
          name: cJ.name,
          attributes: cJ.attributes,
          amount: null !== cJ.amount ? hJ : 0
        }
      }(JJ, FJ) : JJ.draggedInfoRef.current ? function(JJ, cJ, ZJ, FJ) {
        const {
          draggedInfoRef: UJ,
          specialItemRef: eJ,
          moveAmtIntoSlot: XJ,
          swapSlots: AJ,
          removeItem: qJ,
          removeDraggedInfoRef: jJ
        } = JJ, YJ = JJ.readInventory(), hJ = UJ.current.idx;
        if (ZJ && (cJ === hJ || (0, OF.c)(UJ.current, ZJ)) && UJ.current.amount > 0 && (0, KZ.e)(ZJ) > 0 && (ZJ.amount < HZ.c.maxItemStackSize || cJ === hJ)) FJ ? ZJ.amount + UJ.current.amount <= HZ.c.maxItemStackSize || cJ === hJ ? XJ(cJ, UJ.current.amount) : XJ(cJ, HZ.c.maxItemStackSize - ZJ.amount) : XJ(cJ, 1);
        else if (UJ.current.amount > 0 && !ZJ) XJ(cJ, FJ ? UJ.current.amount : 1);
        else if (FJ || ZJ || 0 === UJ.current.amount)
          if (YJ.creative && !YJ.chest && cJ >= YJ.player.length) {
            const JJ = 0 === UJ.current.amount ? 1 : UJ.current.amount;
            qJ(UJ.current.idx, JJ, !1) && jJ()
          } else {
            var DJ;
            const ZJ = (null === (DJ = eJ.current) || void 0 === DJ ? void 0 : DJ.idx) === cJ;
            if (AJ(cJ, UJ.current.idx)) {
              const FJ = JJ.readInventory(),
                XJ = (0, KZ.l)(FJ, hJ),
                AJ = !FJ.chest && FJ.creative && UJ.current.idx >= FJ.player.length;
              if (XJ && UJ.current.idx !== cJ && !AJ) {
                let JJ = (0, KZ.e)(XJ);
                ZJ && (JJ -= eJ.current.amount), UJ.current = ZJ && 0 === JJ ? null : {
                  idx: UJ.current.idx,
                  name: XJ.name,
                  attributes: XJ.attributes,
                  amount: JJ
                }
              } else jJ()
            }
          }
        else XJ(cJ, 1)
      }(JJ, ZJ, FJ, UJ) : function(JJ, cJ, ZJ, FJ) {
        var UJ;
        const {
          draggedInfoRef: eJ,
          specialItemRef: XJ
        } = JJ;
        if (!ZJ) return;
        let AJ = (0, KZ.e)(ZJ);
        const qJ = (null === (UJ = XJ.current) || void 0 === UJ ? void 0 : UJ.idx) === cJ;
        qJ && (AJ -= XJ.current.amount);
        FJ || (AJ = Math.ceil(AJ / 2));
        eJ.current = qJ && 0 === AJ ? null : {
          idx: cJ,
          name: ZJ.name,
          attributes: ZJ.attributes,
          amount: AJ
        }
      }(JJ, ZJ, FJ, UJ)
    }

    function CF(JJ, cJ) {
      return !!cJ && cJ.name === JJ.name
    }

    function uF() {
      return jJ.gameBridge.latest("inventory")
    }

    function iF(JJ, cJ, ZJ) {
      return jJ.gameBridge.send("removeInventoryItem", {
        slot: JJ,
        amount: cJ,
        drop: ZJ
      })
    }

    function RF(JJ) {
      return (0, KZ.j)(JJ, jJ.gameBridge.latest("itemInfo"), jJ.gameBridge.latest("stationItems").enchantable)
    }

    function LF(JJ) {
      let {
        show: cJ,
        close: ZJ,
        canCraft: FJ,
        variation: eJ,
        inventoryItemsMoveable: XJ,
        setCraftFlyAnims: AJ
      } = JJ;
      (0, SJ.f)("itemInfo");
      const [qJ, YJ] = (0, UJ.useState)(null), [hJ, DJ] = (0, UJ.useState)(null), [sJ, nJ] = (0, UJ.useState)(!1), GJ = (0, UJ.useRef)(null), fJ = (0, UJ.useRef)(null), xJ = (0, UJ.useRef)(null), rJ = (0, UJ.useRef)(null), [vJ, mJ] = (0, UJ.useReducer)((JJ => JJ + 1), 0), QJ = (0, UJ.useCallback)((() => {
        cJ && mJ()
      }), [cJ, mJ]), EJ = (0, UJ.useCallback)((() => {
        fJ.current = null, PJ.current = null, QJ()
      }), [QJ]), VJ = (0, UJ.useCallback)(((JJ, cJ) => {
        AJ((ZJ => ZJ.map((ZJ => "ingredient" === ZJ.kind ? ZJ : ZJ.fA === JJ ? {
          ...ZJ,
          fA: cJ,
          to: (0, KZ.f)(cJ)
        } : ZJ.fA === cJ ? {
          ...ZJ,
          fA: JJ,
          to: (0, KZ.f)(JJ)
        } : ZJ))))
      }), [AJ]), KJ = (0, UJ.useCallback)(((JJ, cJ) => {
        const ZJ = dJ.current;
        if (ZJ.x = JJ, ZJ.y = cJ, GJ.current) !zJ.current.isTouch || zJ.current.itemBeingDragged && !PJ.current ? (GJ.current.style.transform = `translate(${ZJ.x}px, ${ZJ.y}px)`, nJ(zJ.current.isTouch && !PJ.current)) : (GJ.current.style.transform = "translate(0.5rem, 0.5rem)", nJ(!0));
        else if (rJ.current) {
          const ZJ = rJ.current;
          let FJ = JJ + 10,
            UJ = cJ + 10;
          const eJ = ZJ.offsetWidth,
            XJ = ZJ.offsetHeight;
          FJ + eJ > window.innerWidth && (FJ = JJ - eJ - 10), UJ + XJ > window.innerHeight && (UJ = cJ - XJ - 10), FJ < 0 && (FJ = 0), UJ < 0 && (UJ = 0), rJ.current.style.transform = `translate(${FJ}px, ${UJ}px)`
        }
      }), []), IJ = (0, UJ.useCallback)((JJ => (cJ, ZJ, FJ) => {
        if (YJ(cJ && void 0 !== JJ ? JJ : null), cJ) {
          if (void 0 === JJ && !ZJ) return void(0, NF.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== JJ) {
            var UJ;
            const cJ = uF();
            let ZJ;
            if (ZJ = JJ === SZ.g ? xJ.current ? (0, KZ.l)(cJ, xJ.current.idx) : null : (0, KZ.l)(cJ, JJ), !ZJ) return void DJ(null);
            if ((null === (UJ = xJ.current) || void 0 === UJ ? void 0 : UJ.idx) === JJ) {
              if (0 === (0, KZ.e)(ZJ) - xJ.current.amount) return void DJ(null)
            }
            DJ(RF(ZJ))
          } else DJ({
            name: ZJ.name,
            desc: ZJ.desc,
            fontStyle: "normal"
          })
        } else DJ(null);
        FJ && setTimeout((() => {
          KJ(FJ.pageX, FJ.pageY)
        }), 0)
      }), [KJ]), MJ = (0, UJ.useCallback)(((JJ, cJ) => {
        const ZJ = jJ.gameBridge.send("moveInventoryItem", {
          from: fJ.current.idx,
          to: JJ,
          amount: cJ
        });
        return ZJ ? (fJ.current.amount -= cJ, fJ.current.amount <= 0 && EJ()) : console.error("moveInventoryItem failed"), ZJ
      }), [EJ]), bJ = (0, UJ.useCallback)(((JJ, cJ) => {
        const ZJ = xJ.current,
          FJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.idx;
        ZJ && (ZJ.idx = function(JJ, cJ, ZJ) {
          return JJ === cJ ? ZJ : JJ === ZJ ? cJ : JJ
        }(FJ, JJ, cJ));
        const UJ = jJ.gameBridge.send("swapInventorySlots", {
          a: JJ,
          b: cJ
        });
        return UJ ? VJ(JJ, cJ) : ZJ && (ZJ.idx = FJ), UJ
      }), [VJ]), wJ = (0, UJ.useCallback)(((JJ, cJ, ZJ, FJ) => {
        const UJ = jJ.gameBridge.send("quickMoveInventoryItem", {
          slot: ZJ,
          start: JJ,
          end: cJ,
          amount: FJ
        });
        null !== UJ && VJ(ZJ, UJ)
      }), [VJ]), WJ = (0, UJ.useCallback)(((JJ, cJ) => {
        var UJ;
        ((JJ, cJ, ZJ) => {
          const FJ = JJ - (ZJ - pF.e.length);
          return !(!cJ || FJ < 0 || FJ >= pF.e.length) && (0, yJ.sb)(cJ) !== pF.e[FJ]
        })(cJ, null === (UJ = fJ.current) || void 0 === UJ ? void 0 : UJ.name, uF().player.length) || (TF({
          e: JJ,
          idx: cJ,
          readInventory: uF,
          itemInfo: jJ.gameBridge.latest("itemInfo"),
          draggedInfoRef: fJ,
          specialItemRef: xJ,
          moveAmtIntoSlot: MJ,
          swapSlots: bJ,
          moveIntoSlots: wJ,
          removeItem: iF,
          removeDraggedInfoRef: EJ,
          close: ZJ,
          canCraft: FJ,
          variation: eJ
        }), QJ())
      }), [FJ, ZJ, MJ, wJ, EJ, bJ, eJ, QJ]), gJ = (0, UJ.useRef)(0), HJ = (0, UJ.useRef)(null), PJ = (0, UJ.useRef)(null), kJ = (0, UJ.useRef)(null), pJ = (0, UJ.useRef)(new Set), dJ = (0, UJ.useRef)({
        x: 0,
        y: 0
      }), zJ = (0, UJ.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), NJ = (0, UJ.useCallback)((() => (kJ.current = null, zJ.current.itemBeingDragged = !1, clearTimeout(HJ.current), !!PJ.current && (PJ.current = null, QJ(), !0))), [QJ]);
      (0, UJ.useEffect)((() => {
        NJ(), pJ.current.clear()
      }), [cJ]);
      const OJ = JJ => void 0 !== JJ && (pJ.current.has(JJ) || null !== kJ.current && JJ !== kJ.current),
        TJ = JJ => {
          zJ.current.isTouch = (0, KZ.t)(JJ)
        },
        CJ = (0, UJ.useCallback)((JJ => cJ => {
          const FJ = (0, KZ.t)(cJ);
          if (FJ || KJ(cJ.pageX, cJ.pageY), XJ)
            if (OJ(cJ.pointerId)) void 0 !== cJ.pointerId && pJ.current.add(cJ.pointerId);
            else {
              if (TJ(cJ), FJ) {
                gJ.current = cJ.timeStamp, zJ.current.itemBeingDragged = !0, kJ.current = cJ.pointerId;
                const ZJ = (0, KZ.l)(uF(), JJ);
                if (ZJ && ZJ.amount && ZJ.amount > 0) {
                  const ZJ = cJ.pageX,
                    FJ = cJ.pageY,
                    UJ = dJ.current.x,
                    eJ = dJ.current.y;
                  clearTimeout(HJ.current), HJ.current = setTimeout((() => {
                    if (fJ.current && fJ.current.idx === JJ && (Math.abs(ZJ - dJ.current.x) < 20 && Math.abs(FJ - dJ.current.y) < 20 || UJ === dJ.current.x && eJ === dJ.current.y) && zJ.current.itemBeingDragged) {
                      const JJ = uF(),
                        ZJ = JJ.creative && !JJ.chest && fJ.current.idx >= HZ.c.numInvenSlots && null !== (0, KZ.l)(JJ, fJ.current.idx).amount ? HZ.c.maxItemStackSize : fJ.current.amount;
                      PJ.current = {
                        initTouchX: cJ.pageX,
                        initTouchY: cJ.pageY,
                        maxAmount: ZJ
                      }, fJ.current.amount = Math.ceil(fJ.current.amount / 2), GJ.current.style.transform = "translate(0.5rem, 0.5rem)", nJ(!0), QJ()
                    }
                  }), 500)
                }
              }
              WJ(cJ, JJ)
            }
          else JJ === SZ.e && (0, KZ.q)(cJ) && ZJ()
        }), [KJ, WJ, XJ, ZJ, QJ]),
        uJ = (0, UJ.useCallback)((JJ => JJ => {
          if (OJ(JJ.pointerId)) return;
          const cJ = (0, KZ.t)(JJ);
          if (TJ(JJ), !NJ()) {
            if (cJ && fJ.current && JJ.timeStamp - gJ.current > 150) {
              const cJ = document.elementFromPoint(JJ.clientX, JJ.clientY);
              if (null !== cJ) {
                const ZJ = cJ.getAttribute("data-inven-idx");
                null !== ZJ ? WJ(JJ, parseInt(ZJ)) : cJ.classList.contains("InventoryBackgroundScreen") && WJ(JJ, -1)
              }
            }
            KJ(JJ.pageX, JJ.pageY)
          }
        }), [KJ, WJ, NJ]);
      (0, UJ.useEffect)((() => {
        let JJ;
        const ZJ = ["pointerup", "pointercancel"],
          FJ = JJ => {
            pJ.current.has(JJ.pointerId) ? setTimeout((() => {
              pJ.current.delete(JJ.pointerId)
            }), 0) : JJ.pointerId === kJ.current && setTimeout((() => {
              kJ.current === JJ.pointerId && NJ()
            }), 0)
          };
        if (cJ) {
          for (const JJ of ZJ) document.addEventListener(JJ, FJ, !0);
          if (!zJ.current.isTouch) {
            const JJ = dJ.current;
            KJ(JJ.x, JJ.y)
          }
          JJ = JJ => {
            JJ.preventDefault(), OJ(JJ.pointerId) || (TJ(JJ), KJ(JJ.pageX, JJ.pageY), PJ.current && JJ.pointerId === kJ.current && (JJ => {
              if (!fJ.current) return PJ.current = null, void QJ();
              const {
                initTouchX: cJ,
                maxAmount: ZJ
              } = PJ.current, FJ = (JJ.pageX - cJ) * PJ.current.maxAmount / 160, UJ = Math.ceil(ZJ / 2) + Math.ceil(FJ);
              fJ.current.amount = Math.min(ZJ, Math.max(1, UJ)), QJ()
            })(JJ))
          }, document.addEventListener("pointermove", JJ, !0)
        }
        return () => {
          document.removeEventListener("pointermove", JJ, !0);
          for (const JJ of ZJ) document.removeEventListener(JJ, FJ, !0)
        }
      }));
      const iJ = (0, UJ.useCallback)((() => {
          if (fJ.current) {
            const JJ = (0, KZ.l)(uF(), fJ.current.idx);
            (!CF(fJ.current, JJ) || JJ.amount < fJ.current.amount) && EJ()
          }
        }), [EJ]),
        RJ = (0, UJ.useCallback)((() => {
          const JJ = fJ.current;
          if (JJ) {
            const cJ = (0, KZ.l)(uF(), JJ.idx);
            CF(JJ, cJ) && (JJ.attributes = cJ.attributes)
          }
        }), []);
      return {
        draggedDomRef: GJ,
        draggedInfoRef: fJ,
        specialItemRef: xJ,
        hoverInfoDomRef: rJ,
        longHoldSplitInfoRef: PJ,
        currHoveredIdx: qJ,
        currHoveredDisplayInfo: hJ,
        displayDraggedItemName: sJ,
        forceRerenderIfVisible: QJ,
        removeDraggedInfoRef: EJ,
        checkDraggedItemConsistencyWithInven: iJ,
        refreshDraggedAttributes: RJ,
        swapSlots: bJ,
        getPointerDownForIdx: CJ,
        getPointerUpForIdx: uJ,
        getSetHovering: IJ,
        setCurrHoveredDisplayInfo: DJ,
        moveFollowerTo: KJ
      }
    }
    class aF {
      constructor(JJ) {
        this.snapshot = [], this.newSlots = new Set, this.update(JJ, !1)
      }
      update(JJ, cJ) {
        const ZJ = JJ.map((JJ => {
          var cJ;
          return JJ ? {
            name: JJ.name,
            amount: null !== (cJ = JJ.amount) && void 0 !== cJ ? cJ : 1
          } : null
        }));
        ZJ.forEach(((JJ, ZJ) => {
          const FJ = this.snapshot[ZJ],
            UJ = (null === JJ || void 0 === JJ ? void 0 : JJ.name) !== (null === FJ || void 0 === FJ ? void 0 : FJ.name);
          (!JJ || UJ || JJ.amount < FJ.amount) && this.newSlots.delete(ZJ), cJ && JJ && (UJ || JJ.amount > FJ.amount) && this.newSlots.add(ZJ)
        })), this.snapshot = ZJ
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(JJ) {
        return this.newSlots.has(JJ)
      }
    }
    const BF = (JJ, cJ, ZJ) => ({
      button: cJ,
      shiftKey: ZJ,
      pageX: JJ.clientX,
      pageY: JJ.clientY,
      clientX: JJ.clientX,
      clientY: JJ.clientY,
      pointerType: "mouse"
    });

    function tF(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)(JJ);
      return JJ && !cJ && ZJ(!0), (0, UJ.useEffect)((() => {
        if (cJ) return;
        let JJ = !0;
        const FJ = () => {
            JJ && (JJ = !1, ZJ(!0))
          },
          UJ = "function" === typeof window.requestIdleCallback,
          eJ = UJ ? window.requestIdleCallback(FJ, {
            timeout: 2e3
          }) : void 0,
          XJ = setTimeout(FJ, UJ ? 2e3 : 1e3);
        return () => {
          JJ = !1, clearTimeout(XJ), void 0 !== eJ && window.cancelIdleCallback(eJ)
        }
      }), [cJ]), cJ
    }
    const oF = (0, UJ.memo)((function(JJ) {
      var cJ;
      let {
        show: ZJ,
        onOpen: FJ,
        onClose: eJ,
        variation: AJ
      } = JJ;
      const hJ = (0, UJ.useRef)(null),
        DJ = (0, UJ.useRef)(null),
        sJ = function(JJ) {
          const [cJ, ZJ] = (0, UJ.useState)(!0), [FJ, eJ] = (0, UJ.useState)(!1), XJ = (0, UJ.useRef)(null), AJ = (0, UJ.useRef)(null), jJ = (0, qJ.f)("_shield"), YJ = (0, UJ.useRef)(null), hJ = (0, qJ.f)("_health"), DJ = (0, UJ.useRef)(null);

          function sJ(JJ) {
            const cJ = Date.now() + JJ;
            cJ < AJ.current || (ZJ(!1), clearTimeout(XJ.current), AJ.current = cJ, XJ.current = setTimeout((() => {
              ZJ(!0)
            }), JJ))
          }
          return (0, UJ.useEffect)((() => {
            sJ(MZ);
            const JJ = nJ.i.subscribe("requestingPlayVideoAd", (() => {
              sJ(MZ)
            }));
            return () => {
              clearTimeout(XJ.current), nJ.i.unsubscribe(JJ)
            }
          }), []), (0, UJ.useEffect)((() => {
            (YJ.current > jJ || DJ.current > hJ) && sJ(6e4), YJ.current = jJ, DJ.current = hJ
          }), [jJ, hJ]), (0, UJ.useEffect)((() => {
            let cJ = null;
            return JJ ? cJ = setTimeout((() => {
              eJ(!0)
            }), 250) : eJ(!1), () => {
              clearTimeout(cJ)
            }
          }), [JJ]), cJ && FJ
        }(ZJ);
      (0, KJ.m)(xZ.b, null);
      const GJ = (0, xZ.j)(),
        fJ = GJ.some((JJ => JJ.panel)),
        xJ = (0, SJ.d)("inventory", (JJ => null !== JJ.chest && (null !== JJ.chest.ironChest || WF(JJ.chest.numSlots)))),
        rJ = tF(ZJ),
        vJ = tF(ZJ),
        [mJ, QJ] = (0, UJ.useState)([]),
        EJ = (0, UJ.useCallback)((JJ => {
          QJ((cJ => cJ.filter((cJ => cJ.id !== JJ))))
        }), []),
        VJ = (0, UJ.useRef)(null),
        IJ = (0, UJ.useRef)(0),
        MJ = (0, UJ.useCallback)((() => {
          VJ.current && (IJ.current = VJ.current.scrollTop), eJ()
        }), [eJ]),
        bJ = (0, qJ.f)("inventoryItemsMoveable"),
        wJ = (0, qJ.f)("canCraft"),
        {
          clientEscMenuOptions: WJ
        } = (0, zJ.j)(["clientEscMenuOptions"]),
        gJ = (0, UJ.useRef)(null);
      gJ.current || (gJ.current = new aF(jJ.gameBridge.latest("inventory").player));
      const PJ = gJ.current,
        {
          draggedDomRef: kJ,
          draggedInfoRef: pJ,
          specialItemRef: dJ,
          hoverInfoDomRef: NJ,
          longHoldSplitInfoRef: OJ,
          currHoveredIdx: TJ,
          currHoveredDisplayInfo: CJ,
          displayDraggedItemName: uJ,
          forceRerenderIfVisible: iJ,
          removeDraggedInfoRef: RJ,
          checkDraggedItemConsistencyWithInven: LJ,
          refreshDraggedAttributes: aJ,
          swapSlots: BJ,
          getPointerDownForIdx: tJ,
          getPointerUpForIdx: oJ,
          getSetHovering: lJ,
          setCurrHoveredDisplayInfo: Jc,
          moveFollowerTo: cc
        } = LF({
          show: ZJ,
          close: MJ,
          canCraft: wJ,
          variation: AJ,
          inventoryItemsMoveable: bJ,
          setCraftFlyAnims: QJ
        });
      (0, UJ.useEffect)((() => {
        const JJ = !ZJ && null !== jJ.gameBridge.latest("inventory").chest;
        if (JJ && jJ.gameBridge.send("closeChest", null), ZJ || (PJ.clearMarks(), lJ(null)(!1)), JJ) {
          EZ.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [ZJ]), (0, SJ.b)("chestToggled", (JJ => {
        if (JJ ? FJ() : ZJ && MJ(), JJ) {
          EZ.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Zc = (0, Rc.l)();
      (0, SJ.b)("inventory", (JJ => {
        let {
          player: cJ
        } = JJ;
        var FJ, UJ, eJ;
        (PJ.update(cJ, !ZJ && Zc.shown), dJ.current) && (dJ.current = (UJ = dJ.current, eJ = null !== (FJ = cJ[dJ.current.idx]) && void 0 !== FJ ? FJ : null, CF(UJ, eJ) ? (UJ.attributes = eJ.attributes, null !== eJ.amount && UJ.amount > eJ.amount && (UJ.amount = eJ.amount), UJ) : null));
        aJ(), null !== TJ && lJ(TJ)(!0), iJ()
      })), (0, UJ.useEffect)((() => (jJ.gameBridge.send("setInventoryOpen", ZJ), () => {
        jJ.gameBridge.send("setInventoryOpen", !1)
      })), [ZJ]);
      const Fc = (JJ, cJ) => {
        if (JJ === SZ.g) return void(JJ => {
          const cJ = dJ.current;
          if (!cJ || null === (0, KZ.l)(jJ.gameBridge.latest("inventory"), cJ.idx)) return;
          const ZJ = JJ ? Math.max(cJ.amount, 1) : 1,
            FJ = cJ.amount - ZJ;
          if (!jJ.gameBridge.send("removeInventoryItem", {
              slot: cJ.idx,
              amount: ZJ,
              drop: !0
            })) return;
          const UJ = dJ.current;
          UJ && (UJ.amount = Math.min(UJ.amount, FJ), UJ.amount <= 0 && (dJ.current = null)), iJ()
        })(cJ);
        const ZJ = null === JJ ? null : (0, KZ.l)(jJ.gameBridge.latest("inventory"), JJ);
        if (null !== ZJ) {
          var FJ, UJ, eJ;
          const XJ = cJ && null !== (FJ = ZJ.amount) && void 0 !== FJ ? FJ : 1;
          jJ.gameBridge.send("removeInventoryItem", {
            slot: JJ,
            amount: XJ,
            drop: !0
          }), JJ === (null === (UJ = pJ.current) || void 0 === UJ ? void 0 : UJ.idx) && (pJ.current.amount -= XJ, pJ.current.amount <= 0 && RJ(), iJ()), JJ === (null === (eJ = dJ.current) || void 0 === eJ ? void 0 : eJ.idx) && (dJ.current = null, iJ())
        }
      };
      (0, SJ.b)("inventoryDropRequested", (JJ => {
        ZJ && TJ !== SZ.g && Fc(TJ, JJ)
      }));
      const Uc = (JJ, cJ) => {
        let ZJ = cJ;
        if (cJ === SZ.g) {
          if (!dJ.current) return;
          ZJ = dJ.current.idx
        }
        const FJ = BJ(JJ, ZJ);
        if (FJ && pJ.current && (pJ.current.idx === ZJ ? pJ.current.idx = JJ : pJ.current.idx === JJ && (pJ.current.idx = ZJ)), FJ && cJ === SZ.g) {
          const JJ = (0, KZ.l)(jJ.gameBridge.latest("inventory"), ZJ);
          dJ.current = JJ ? {
            idx: ZJ,
            name: JJ.name,
            attributes: JJ.attributes,
            amount: JJ.amount
          } : null
        }
        iJ()
      };
      (0, SJ.b)("numberKeyPressed", (JJ => {
        null !== TJ && ZJ && Uc(JJ - 1, TJ)
      })), (0, UJ.useEffect)((() => {
        ZJ || (dJ.current = null, RJ(), Jc(null))
      }), [ZJ, RJ, Jc, dJ]);
      const ec = dJ.current;
      (0, UJ.useEffect)((() => {
        TJ === SZ.g && lJ(SZ.g)(!0)
      }), [ec, TJ, lJ]);
      const Xc = () => {
        LJ(), aJ(), iJ()
      };
      (0, SJ.b)("chestRefreshed", Xc), (0, SJ.b)("inventorySynced", Xc);
      const [Ac, qc] = (0, UJ.useState)(new Map), jc = null !== (cJ = Ac.get(AJ)) && void 0 !== cJ ? cJ : null, Yc = (JJ, cJ) => {
        qc((ZJ => {
          const FJ = ZJ.get(JJ);
          return FJ && FJ.name === cJ.name && FJ.qj === cJ.qj ? ZJ : new Map(ZJ).set(JJ, cJ)
        }))
      };
      (0, KJ.i)("craftingRecipesEdited", (() => {
        iJ()
      })), (0, KJ.i)(FF.d, (JJ => {
        let {
          variation: cJ,
          itemName: ZJ
        } = JJ;
        Yc(cJ, {
          name: ZJ,
          qj: 0
        })
      }));
      const [hc, Dc] = (0, UJ.useState)(null), [nc, Gc] = (0, UJ.useState)(null);
      (0, SJ.b)("enchantingTableOpened", (JJ => {
        let {
          position: cJ,
          blockName: ZJ
        } = JJ;
        Dc(cJ), Gc(ZJ)
      }));
      const [fc, xc] = (0, UJ.useState)(""), [rc, vc] = (0, UJ.useState)(null);
      (0, UJ.useEffect)((() => {
        ZJ && VJ.current && (VJ.current.scrollTop = IJ.current)
      }), [ZJ]);
      return (JJ => {
        const cJ = (0, UJ.useRef)(JJ);
        cJ.current = JJ, (0, UJ.useEffect)((() => {
          if (!JJ.show) return;
          const ZJ = (JJ, ZJ, FJ, UJ) => {
              const {
                getPointerDownForIdx: eJ,
                getPointerUpForIdx: XJ
              } = cJ.current;
              eJ(JJ)(BF(ZJ, FJ, UJ)), XJ(JJ)(BF(ZJ, FJ, UJ))
            },
            FJ = {
              primary: (JJ, cJ) => {
                ZJ(JJ, cJ, 0, !1)
              },
              secondary: (JJ, cJ) => {
                ZJ(JJ, cJ, 2, !1)
              },
              quickMove: (JJ, cJ) => {
                ZJ(JJ, cJ, 0, !0)
              },
              dropHeld: (JJ, ZJ) => {
                cJ.current.getPointerDownForIdx(SZ.e)(BF(ZJ, JJ ? 0 : 2, !1))
              },
              dropSlot: (JJ, ZJ) => {
                cJ.current.dropFromIdx(JJ, ZJ)
              },
              swapWithHotbar: (JJ, ZJ) => {
                cJ.current.swapWithHotbar(JJ, ZJ)
              },
              cancel: () => {
                cJ.current.removeDraggedInfoRef()
              },
              isHolding: () => !!cJ.current.draggedInfoRef.current,
              hasItemAt: JJ => {
                const {
                  draggedInfoRef: ZJ,
                  specialItemRef: FJ
                } = cJ.current;
                if (JJ === SZ.g) return !!FJ.current;
                const UJ = (0, KZ.l)(jJ.gameBridge.latest("inventory"), JJ);
                return !!UJ && (0, NZ.f)(JJ, (0, KZ.e)(UJ), [ZJ.current, FJ.current]).shown
              },
              hover: (JJ, ZJ) => {
                const {
                  moveFollowerTo: FJ,
                  getSetHovering: UJ
                } = cJ.current;
                FJ(ZJ.clientX, ZJ.clientY), UJ(null !== JJ && void 0 !== JJ ? JJ : void 0)(null !== JJ, void 0, {
                  pageX: ZJ.clientX,
                  pageY: ZJ.clientY
                })
              },
              moveTo: JJ => {
                cJ.current.moveFollowerTo(JJ.clientX, JJ.clientY)
              },
              close: () => {
                cJ.current.close()
              }
            };
          return (0, rZ.q)(FJ)
        }), [JJ.show])
      })({
        show: ZJ,
        close: MJ,
        draggedInfoRef: pJ,
        specialItemRef: dJ,
        getPointerDownForIdx: tJ,
        getPointerUpForIdx: oJ,
        getSetHovering: lJ,
        moveFollowerTo: cc,
        removeDraggedInfoRef: RJ,
        dropFromIdx: Fc,
        swapWithHotbar: Uc
      }), (0, UJ.useEffect)((() => {
        nJ.i.Uf("inventoryDraggedItemUpdated", {
          draggedInfo: pJ.current,
          specialItemInfo: dJ.current,
          setHovered: lJ,
          pointerDown: tJ,
          pointerUp: oJ,
          variation: wJ ? AJ : void 0,
          craftFlyAnims: mJ
        })
      })), (0, YJ.jsxs)(HJ.b, {
        show: ZJ,
        style: {
          touchAction: ZJ ? "none" : void 0
        },
        children: [pJ.current && (0, YJ.jsx)(wZ, {
          draggedInfo: pJ.current,
          toAddRef: kJ
        }), pJ.current && uJ && (0, YJ.jsx)(WZ, {
          className: "DraggedInvenItemName",
          displayInfo: RF(pJ.current),
          domRef: null
        }), !pJ.current && CJ && (0, YJ.jsx)(WZ, {
          displayInfo: CJ,
          domRef: NJ
        }), OJ.current && pJ.current && (0, YJ.jsx)(gZ, {
          info: OJ.current,
          draggedInfo: pJ.current
        }), mJ.map((JJ => (0, YJ.jsx)(yZ.d, {
          anim: JJ,
          onComplete: EJ
        }, JJ.id))), (0, YJ.jsx)(XJ.c, {
          show: ZJ,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: MJ,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: tJ(SZ.e),
          pointerUp: oJ(SZ.e),
          doGameplayStartStopOnShow: !0
        }), rJ && (0, YJ.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, YJ.jsx)("div", {
            ref: hJ,
            className: "InventoryAdOuter",
            children: (0, YJ.jsx)(VZ.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: hJ
              },
              verticalAlign: "start",
              showing: ZJ && sJ,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, YJ.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, YJ.jsxs)("div", {
              className: sc()("Inventory", {
                WithPanelButtons: fJ,
                WideChestOpen: xJ
              }),
              children: [(0, YJ.jsx)("div", {
                className: "InventoryFiller"
              }), (0, YJ.jsx)(QZ, {
                show: ZJ,
                buttons: GJ
              }), (0, YJ.jsxs)("div", {
                className: "InvenBody",
                children: [(0, YJ.jsx)(kF, {
                  variation: AJ,
                  canCraft: wJ,
                  show: ZJ,
                  creativeMounted: vJ,
                  specialItemRef: dJ,
                  draggedInfo: pJ.current,
                  getSetHovering: lJ,
                  getPointerDownForIdx: tJ,
                  getPointerUpForIdx: oJ,
                  enchantingTablePosition: hc,
                  enchantingTableBlockName: nc,
                  selectedCraftable: jc,
                  dispatchSelectedCraftable: JJ => {
                    Yc(AJ, JJ)
                  },
                  creativeScrollDiv: VJ,
                  creativeSearchVal: fc,
                  setCreativeSearchVal: xc,
                  creativeCategory: rc,
                  setCreativeCategory: vc,
                  onCraft: function(JJ, cJ) {
                    let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (LJ(), (JJ || ZJ.length > 0) && QJ((cJ => {
                        const FJ = [...cJ],
                          UJ = cJ.filter((JJ => "ingredient" === JJ.kind)).length;
                        for (const JJ of ZJ.slice(0, Math.max(0, 24 - UJ))) FJ.push({
                          id: (0, yZ.h)(),
                          ...JJ,
                          to: JJ.to
                        });
                        return JJ && FJ.push({
                          id: (0, yZ.h)(),
                          ...JJ,
                          to: (0, KZ.f)(JJ.fA)
                        }), FJ
                      })), null !== cJ) {
                      var FJ;
                      const JJ = jJ.gameBridge.latest("inventory");
                      (0, yJ.sb)(null === (FJ = (0, KZ.l)(JJ, cJ)) || void 0 === FJ ? void 0 : FJ.name) ? tJ(cJ)({
                        button: 0,
                        shiftKey: !0
                      }): BJ(cJ, JJ.selectedSlot)
                    }
                  }
                }), (0, YJ.jsx)(zF, {
                  show: ZJ,
                  draggedInfo: pJ.current,
                  specialItemInfo: dJ.current,
                  craftFlyAnims: mJ,
                  getSetHovering: lJ,
                  getPointerDownForIdx: tJ,
                  getPointerUpForIdx: oJ,
                  variation: AJ,
                  canCraft: wJ,
                  isNewSlot: JJ => WJ.showNewItemIndicator && PJ.isNew(JJ)
                })]
              })]
            }), (0, YJ.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, YJ.jsx)("div", {
                ref: DJ,
                className: "InventoryAd",
                children: (0, YJ.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var lF = ZJ(1319),
      JU = ZJ(112);
    const cU = (0, UJ.memo)((function(JJ) {
      let {
        show: cJ,
        onOpen: ZJ,
        onClose: FJ
      } = JJ;
      const eJ = (0, UJ.useRef)(0),
        AJ = () => (0, lF.g)() && !(0, lF.o)() && eJ.current <= 2;
      cJ = AJ() && cJ;
      const qJ = () => {
        eJ.current++, FJ()
      };
      (0, KJ.i)("ctrlCrouchWithoutFullscreen", (() => {
        AJ() && ZJ()
      })), (0, KJ.i)("displaymodeFullscreenChange", (JJ => {
        cJ && JJ && qJ()
      }));
      const jJ = "crazygames" === JU.n;
      return (0, YJ.jsx)(XJ.c, {
        close: qJ,
        escDoesExit: !0,
        show: cJ,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, YJ.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, YJ.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), jJ && (0, YJ.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, YJ.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, YJ.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!jJ && (0, YJ.jsx)(sJ.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, lF.v)(), qJ()
              },
              children: (0, YJ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, YJ.jsx)(sJ.I, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                qJ()
              },
              children: (0, YJ.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var ZU = ZJ(3090);
    ZJ(3098);
    const FU = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(""), [qJ, hJ] = (0, UJ.useState)(""), [DJ, sJ] = (0, UJ.useState)(null), [nJ, GJ] = (0, UJ.useState)(null), fJ = (0, SJ.f)("hiddenPlayerNames"), xJ = {
          kind: "worldCodeLine",
          onSubmit: (JJ, cJ) => {
            FJ(), jJ.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: nJ,
              XY: JJ,
              details: cJ
            })
          }
        }, rJ = {
          kind: "player",
          shownPlayerName: (0, cc.g)(eJ, fJ),
          onSubmit: (JJ, cJ) => {
            FJ(), (0, ZU.h)({
              playerId: qJ,
              playerName: eJ,
              chatMsgId: nJ,
              policyId: JJ,
              details: cJ
            })
          }
        };
        return (0, KJ.i)("OpenReportMenu", (JJ => {
          let {
            playerEId: cJ,
            playerName: FJ,
            JY: UJ,
            serverChatMsgId: eJ
          } = JJ;
          hJ(cJ), AJ(FJ), sJ(UJ), GJ(eJ), ZJ()
        })), (0, YJ.jsx)(XJ.c, {
          show: cJ,
          close: FJ,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, YJ.jsx)("div", {
            className: "ReportMenu",
            children: cJ && (0, YJ.jsx)(ZU.e, {
              reported: null === qJ ? xJ : rJ,
              chatMessage: DJ,
              inGame: !0,
              onCancel: FJ
            })
          })
        })
      })),
      UU = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(null), [qJ, hJ] = (0, UJ.useState)(0);
        (0, KJ.i)("OpenDiscordReportBox", (JJ => {
          jJ.gameBridge.send("requestDiscordReportKey", JJ), hJ(0), ZJ()
        }));
        return (0, KJ.i)("setDiscordReportKey", (JJ => {
          AJ(JJ)
        })), (0, YJ.jsx)(XJ.c, {
          show: cJ,
          close: () => {
            FJ(), AJ(null), hJ(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, YJ.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, YJ.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, YJ.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, YJ.jsx)("br", {}), (0, YJ.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, YJ.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, YJ.jsx)("br", {}), "2. Copy the Report Key below", (0, YJ.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, YJ.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, YJ.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, YJ.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== eJ && void 0 !== eJ ? eJ : "Loading report key..."
              }), (0, YJ.jsx)(sJ.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(eJ).catch((JJ => {
                    console.error("Failed to copy report key:", JJ)
                  })), hJ(Date.now())
                },
                disabled: Date.now() - qJ < 1e3 || !eJ,
                children: Date.now() - qJ < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var eU = ZJ(1184);
    const XU = {
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
      AU = (0, UJ.memo)((function(JJ) {
        let {
          show: cJ,
          onOpen: ZJ,
          onClose: FJ
        } = JJ;
        const [eJ, AJ] = (0, UJ.useState)(null), qJ = (0, UJ.useRef)(0), hJ = (0, UJ.useRef)(null), {
          t: DJ
        } = (0, aJ.F)();
        (0, KJ.i)("EditCustomLobbyBlock", (JJ => {
          let {
            pos: cJ
          } = JJ;
          AJ(cJ), null !== cJ && ZJ(), hJ.current.scrollTo(0, qJ.current)
        }));
        const sJ = JJ => {
          jJ.gameBridge.send("setCustomLobbyBlock", {
            pos: eJ,
            blockName: JJ
          }), FJ()
        };
        return (0, YJ.jsx)(XJ.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: FJ,
          escDoesExit: !0,
          show: cJ,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, YJ.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: hJ,
            onScroll: () => {
              qJ.current = hJ.current.scrollTop
            },
            children: (0, YJ.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(XU).map((JJ => {
                let [cJ, ZJ] = JJ;
                return (0, YJ.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, YJ.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: DJ(cJ)
                  }), (0, YJ.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(ZJ).map((JJ => {
                      let [cJ, {
                        tooltip: ZJ,
                        blocks: FJ
                      }] = JJ;
                      return (0, YJ.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, YJ.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [DJ(cJ), (0, YJ.jsx)(RJ.e, {
                            hoverInfo: DJ(ZJ),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, YJ.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: FJ.map((JJ => (0, YJ.jsx)(qU, {
                            blockName: JJ,
                            selectBlock: sJ
                          }, JJ)))
                        })]
                      }, cJ)
                    }))
                  })]
                }, cJ)
              }))
            })
          })
        })
      })),
      qU = (0, UJ.memo)((function(JJ) {
        var cJ;
        let {
          blockName: ZJ,
          selectBlock: FJ
        } = JJ;
        const UJ = (0, rF.c)(ZJ),
          eJ = null !== (cJ = void 0 === UJ ? void 0 : (0, xF.displayNameOf)(UJ)) && void 0 !== cJ ? cJ : ZJ,
          XJ = void 0 === UJ ? void 0 : (0, xF.descriptionOf)(UJ);
        return (0, YJ.jsx)(RJ.g, {
          tooltipInner: (0, YJ.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, YJ.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, YJ.jsx)(VJ.d, {
                text: eJ
              })
            }), XJ && (0, YJ.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, YJ.jsx)(VJ.d, {
                text: XJ
              })
            })]
          }),
          children: (0, YJ.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => FJ(ZJ),
            children: (0, YJ.jsx)(mZ.d, {
              itemName: ZJ,
              amount: 1
            })
          })
        }, ZJ)
      }));
    var jU = ZJ(2514),
      YU = ZJ(3715),
      hU = ZJ(35860);

    function DU() {
      const JJ = (0, SJ.f)("itemInfo");
      return (0, UJ.useMemo)((() => function(JJ) {
        return {
          getDefaultItemStat(cJ, ZJ) {
            var FJ;
            const UJ = JJ[cJ];
            return "description" === ZJ ? null === UJ || void 0 === UJ ? void 0 : UJ.description : null !== (FJ = null === UJ || void 0 === UJ ? void 0 : UJ.displayName) && void 0 !== FJ ? FJ : cJ
          }
        }
      }(JJ)), [JJ])
    }
    const sU = (0, UJ.memo)((function(JJ) {
        var cJ, ZJ, FJ, eJ, AJ, qJ, jJ, hJ, DJ, sJ, nJ, GJ, xJ, rJ, vJ, mJ, QJ, EJ, VJ, yJ, SJ, IJ, MJ;
        let {
          togglePointerLock: bJ,
          show: wJ,
          onOpen: WJ,
          onClose: gJ
        } = JJ;
        const {
          t: HJ
        } = (0, aJ.F)(), PJ = DU(), kJ = (0, UJ.useRef)(null), pJ = (0, UJ.useRef)(YU.b.MobHungerLevel.Hungry), dJ = (0, UJ.useRef)(null), zJ = (0, jU.c)(), NJ = (0, UJ.useRef)(null), OJ = (0, UJ.useRef)(null), TJ = kJ.current;
        (0, UJ.useEffect)((() => {
          if (!wJ) return;
          const JJ = hU.d.openPet(NJ.current);
          return OJ.current = JJ, () => {
            JJ.close(), OJ.current = null
          }
        }), [wJ]), (0, UJ.useEffect)((() => {
          wJ && TJ && OJ.current.show(function(JJ) {
            var cJ;
            let {
              mobType: ZJ,
              mobSettings: FJ
            } = JJ;
            return {
              mobType: ZJ,
              variation: null !== (cJ = FJ.variation) && void 0 !== cJ ? cJ : "default",
              metaInfo: FJ.metaInfo,
              tamed: !(0, wF.P)(FJ.ownerDbId)
            }
          }(TJ))
        }), [wJ, TJ]), (0, UJ.useEffect)((() => {
          const JJ = () => {
            var JJ;
            const cJ = YU.b.getMobHungerLevel(null === (JJ = kJ.current) || void 0 === JJ ? void 0 : JJ.mobSettings.petInfo.lastFedAt);
            if (cJ !== pJ.current && (pJ.current = cJ, zJ()), dJ.current) {
              var ZJ;
              const JJ = Date.now(),
                cJ = YU.b.getNextStateAt(null === (ZJ = kJ.current) || void 0 === ZJ ? void 0 : ZJ.mobSettings.petInfo.lastFedAt);
              let FJ = Math.floor((cJ - JJ) / 1e3),
                UJ = "";
              if (FJ > 3600) {
                UJ += Math.floor(FJ / 60 / 60).toString().padStart(2, "0"), UJ += ":", FJ %= 3600
              }
              const eJ = FJ % 60;
              UJ += Math.floor(FJ / 60).toString().padStart(2, "0"), UJ += ":", UJ += eJ.toString().padStart(2, "0"), dJ.current.textContent = UJ
            }
          };
          JJ();
          const cJ = setInterval(JJ, 250);
          return () => {
            clearInterval(cJ)
          }
        }), [TJ, zJ]), (0, KJ.i)("showPetUi", (JJ => {
          let {
            mobType: cJ,
            mobSettings: ZJ
          } = JJ;
          kJ.current = {
            mobType: cJ,
            mobSettings: ZJ
          }, wJ || WJ()
        }));
        const CJ = null === (cJ = kJ.current) || void 0 === cJ ? void 0 : cJ.mobSettings.health,
          uJ = null === (ZJ = kJ.current) || void 0 === ZJ ? void 0 : ZJ.mobSettings.maxHealth,
          iJ = YU.b.getFriendshipLevelInfo(null !== (FJ = null === (eJ = kJ.current) || void 0 === eJ ? void 0 : eJ.mobSettings.petInfo.friendshipPoints) && void 0 !== FJ ? FJ : 0);
        return (0, YJ.jsx)(XJ.c, {
          className: "PetUIOuter",
          close: gJ,
          escDoesExit: !0,
          show: wJ,
          togglePointerLock: bJ,
          forcePointerUnlock: wJ,
          globallyUniqueKey: "PetUI",
          children: (0, YJ.jsx)("div", {
            className: "PetUI",
            children: (0, YJ.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, YJ.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, YJ.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (AJ = null === (qJ = kJ.current) || void 0 === qJ ? void 0 : qJ.mobSettings.name) && void 0 !== AJ ? AJ : "Your Pet"
                }), (0, YJ.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: NJ
                })]
              }), (0, YJ.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, wF.P)(null === (jJ = kJ.current) || void 0 === jJ ? void 0 : jJ.mobSettings.petInfo.friendshipPoints) && (0, YJ.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, YJ.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: HJ("mobAiPlugin:friendshipTitle")
                  }), (0, YJ.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: YU.b.getIconsFromFriendshipPoints(null !== (hJ = kJ.current.mobSettings.petInfo.friendshipPoints) && void 0 !== hJ ? hJ : 0).map(((JJ, cJ) => (0, YJ.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: JJ,
                        amount: 1
                      })
                    }, cJ)))
                  }), (0, YJ.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, YJ.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, YJ.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${iJ.totalPointsForNextLevel>0?Math.max(iJ.pointsIntoCurrentLevel/iJ.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, YJ.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: iJ.totalPointsForNextLevel > 0 ? ` ${Math.ceil(iJ.pointsIntoCurrentLevel)}/${Math.ceil(iJ.totalPointsForNextLevel)}` : Math.ceil(iJ.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, YJ.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, YJ.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: HJ("mobAiPlugin:hungerTitle")
                  }), (0, YJ.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: YU.b.hungerLevelIcons[pJ.current].map(((JJ, cJ) => (0, YJ.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: JJ,
                        amount: 1
                      })
                    }, cJ)))
                  }), (0, YJ.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [HJ(YU.b.hungerLevelTranslations[pJ.current].translationKey), pJ.current !== YU.b.MobHungerLevel.Starving && !(0, wF.P)(null === (DJ = kJ.current) || void 0 === DJ ? void 0 : DJ.mobSettings.petInfo.lastFedAt) && (0, YJ.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [HJ("mobAiPlugin:nextFeedIn", {
                        state: HJ(YU.b.hungerLevelTranslations[pJ.current + 1].translationKey)
                      }), ":", " ", (0, YJ.jsx)("span", {
                        ref: dJ
                      })]
                    })]
                  })]
                }), (0, YJ.jsx)(RJ.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, YJ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: HJ("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, YJ.jsxs)("div", {
                    className: sc()("PetUIQuickStatsItem", {
                      Disabled: (0, wF.P)(CJ) || (0, wF.P)(uJ)
                    }),
                    children: [(0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, wF.P)(CJ) || (0, wF.P)(uJ) ? "" : (0, YJ.jsxs)(YJ.Fragment, {
                        children: [Math.ceil(CJ), (0, YJ.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(uJ)]
                        })]
                      })
                    })]
                  })
                }), (0, YJ.jsx)(RJ.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, YJ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: HJ("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, YJ.jsxs)("div", {
                    className: sc()("PetUIQuickStatsItem", {
                      Disabled: (0, wF.P)(null === (sJ = kJ.current) || void 0 === sJ ? void 0 : sJ.mobSettings.attackDamage) || kJ.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (nJ = kJ.current) || void 0 === nJ ? void 0 : nJ.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, YJ.jsx)(RJ.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, YJ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: HJ("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, YJ.jsxs)("div", {
                    className: sc()("PetUIQuickStatsItem", {
                      Disabled: (0, wF.P)(null === (GJ = kJ.current) || void 0 === GJ ? void 0 : GJ.mobSettings.secondaryAttackDamage) || kJ.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (xJ = kJ.current) || void 0 === xJ ? void 0 : xJ.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, YJ.jsx)(RJ.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, YJ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: HJ("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, YJ.jsxs)("div", {
                    className: sc()("PetUIQuickStatsItem", {
                      Disabled: (0, wF.P)(null === (rJ = kJ.current) || void 0 === rJ ? void 0 : rJ.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (vJ = null === (mJ = kJ.current) || void 0 === mJ || null === (QJ = mJ.mobSettings.baseRunningSpeed) || void 0 === QJ ? void 0 : QJ.toFixed(2)) && void 0 !== vJ ? vJ : ""
                    })]
                  })
                }), (0, YJ.jsx)(RJ.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, YJ.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: HJ("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, YJ.jsxs)("div", {
                    className: sc()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (EJ = kJ.current) || void 0 === EJ ? void 0 : EJ.mobSettings.metaInfo)
                    }),
                    children: [(0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, YJ.jsx)(mZ.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, YJ.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (VJ = kJ.current) || void 0 === VJ ? void 0 : VJ.mobSettings.metaInfo) ? (0, YJ.jsx)(fJ.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, wF.P)(null === (yJ = kJ.current) || void 0 === yJ ? void 0 : yJ.mobSettings.tameInfo) && (0, YJ.jsxs)(YJ.Fragment, {
                  children: [(0, YJ.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, YJ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, YJ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, YJ.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: YU.b.feedTextColours[YU.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, YJ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, YJ.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: kJ.current.mobSettings.petInfo.superlikedFoodKnown ? (0, YJ.jsx)(nU, {
                            food: kJ.current.mobSettings.petInfo.superlikedFood
                          }) : (0, YJ.jsx)(GU, {
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
                    }), (0, YJ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, YJ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, YJ.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: YU.b.feedTextColours[YU.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, YJ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (SJ = kJ.current.mobSettings.tameInfo.likedFoods) || void 0 === SJ ? void 0 : SJ.filter((JJ => !kJ.current.mobSettings.petInfo.superlikedFoodKnown || JJ !== kJ.current.mobSettings.petInfo.superlikedFood)).map((JJ => (0, YJ.jsx)(nU, {
                          food: JJ
                        }, JJ)))
                      })]
                    }), (0, YJ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, YJ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, YJ.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: YU.b.feedTextColours[YU.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, YJ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (IJ = kJ.current.mobSettings.tameInfo.neutralFoods) || void 0 === IJ ? void 0 : IJ.map((JJ => (0, YJ.jsx)(nU, {
                          food: JJ
                        }, JJ)))
                      })]
                    }), (0, YJ.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, YJ.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, YJ.jsx)(GU, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: YU.b.feedTextColours[YU.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, YJ.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (MJ = kJ.current.mobSettings.tameInfo.dislikedFoods) || void 0 === MJ ? void 0 : MJ.map((JJ => (0, YJ.jsx)(nU, {
                          food: JJ
                        }, JJ)))
                      })]
                    })]
                  }), kJ.current.mobSettings.tameInfo.levelUpBonuses && (0, YJ.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: YU.b.MAX_LEVEL + 1
                    }).map(((JJ, cJ) => {
                      const ZJ = cJ;
                      if (0 === ZJ) return null;
                      const FJ = kJ.current.mobSettings.tameInfo.levelUpBonuses[ZJ],
                        UJ = YU.b.getBonusDisplayInfo(PJ, kJ.current.mobSettings, kJ.current.mobType, FJ);
                      return (0, YJ.jsxs)("div", {
                        className: sc()("PetUIFeedDropContainer", {
                          Selected: ZJ === YU.b.getFriendshipLevelInfo(kJ.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, YJ.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: ZJ
                          }).map(((JJ, cJ) => (0, YJ.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, YJ.jsx)(mZ.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${ZJ}-${cJ}`)))
                        }), (0, YJ.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: UJ && (0, YJ.jsx)(GU, {
                            icon: UJ.icon,
                            displayName: UJ.displayName,
                            description: UJ.description
                          })
                        })]
                      }, ZJ)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      nU = (0, UJ.memo)((function(JJ) {
        let {
          food: cJ,
          includeDescription: ZJ = !1
        } = JJ;
        const FJ = DU(),
          UJ = FJ.getDefaultItemStat(cJ, "displayName"),
          eJ = FJ.getDefaultItemStat(cJ, "description");
        return (0, YJ.jsx)(GU, {
          icon: cJ,
          displayName: UJ,
          description: ZJ ? eJ : null
        })
      })),
      GU = (0, UJ.memo)((function(JJ) {
        let {
          icon: cJ,
          displayName: ZJ,
          description: FJ,
          tintColor: UJ,
          className: eJ = "PetUIFoodItem"
        } = JJ;
        return (0, YJ.jsx)(RJ.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, YJ.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, YJ.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, YJ.jsx)(VJ.d, {
                text: ZJ
              })
            }), FJ && (0, YJ.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, YJ.jsx)(VJ.d, {
                text: FJ
              })
            })]
          }),
          children: (0, YJ.jsx)("div", {
            className: eJ,
            children: (0, YJ.jsx)(mZ.d, {
              itemName: cJ,
              amount: 1,
              tintColor: UJ
            })
          })
        })
      }));
    var fU = ZJ(3242),
      xU = ZJ(1028),
      rU = ZJ(1137),
      vU = ZJ(35886),
      mU = ZJ(35882),
      QU = ZJ(889),
      EU = ZJ(1250),
      VU = ZJ(1247),
      KU = ZJ(2112);

    function yU(JJ) {
      let {
        peers: cJ
      } = JJ;
      const [ZJ, FJ] = (0, UJ.useState)(null), eJ = (0, SJ.f)("players");
      return (0, YJ.jsx)("div", {
        className: "CodeEditorPresence",
        children: cJ.map((JJ => {
          var cJ, UJ;
          const XJ = null !== (cJ = null === (UJ = eJ.byId[JJ.playerId]) || void 0 === UJ ? void 0 : UJ.cosmetics) && void 0 !== cJ ? cJ : {};
          return (0, YJ.jsxs)("div", {
            className: sc()("PresenceIcon", {
              Viewer: !JJ.isEditor
            }),
            style: {
              backgroundColor: JJ.colour
            },
            onMouseEnter: () => {
              FJ(JJ.playerId)
            },
            onMouseLeave: () => {
              FJ(null)
            },
            children: [(0, YJ.jsx)(KU.e, {
              cosmetics: XJ
            }), ZJ === JJ.playerId && (0, YJ.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: JJ.colour
              },
              children: JJ.playerName
            })]
          }, JJ.playerId)
        }))
      })
    }
    var SU = ZJ(556),
      IU = ZJ(35877),
      MU = ZJ(35617),
      bU = ZJ(35892);

    function wU(JJ) {
      const cJ = JJ.split("/"),
        ZJ = [];
      for (let FJ = 1; FJ < cJ.length; FJ++) ZJ.push(cJ.slice(0, FJ).join("/"));
      return ZJ
    }

    function WU(JJ) {
      return JJ.slice(JJ.lastIndexOf("/") + 1)
    }
    const gU = (0, UJ.memo)((function(JJ) {
      var cJ;
      let {
        files: ZJ,
        activePath: FJ,
        canEdit: eJ,
        directoryLinked: XJ,
        pluginNames: AJ,
        activePluginName: qJ,
        activePluginFile: jJ,
        onSelect: hJ,
        onSelectPlugin: DJ,
        onCreate: nJ,
        onRename: GJ,
        onRenameFolder: xJ,
        onDelete: rJ,
        onToggleDirectorySync: vJ,
        schematics: mJ,
        onManageSchematic: QJ
      } = JJ;
      const {
        t: EJ
      } = (0, aJ.F)(), VJ = null !== (cJ = (0, mU.e)(ZJ)) && void 0 !== cJ ? cJ : rU.g, KJ = Object.keys(ZJ), [yJ, SJ] = (0, UJ.useState)((() => new Set)), IJ = function(JJ, cJ, ZJ) {
        const FJ = {
          folders: new Map,
          files: []
        };
        for (const XJ of JJ) {
          if (XJ === cJ) continue;
          let JJ = FJ;
          for (const cJ of wU(XJ)) {
            let ZJ = JJ.folders.get(cJ);
            ZJ || (ZJ = {
              folders: new Map,
              files: []
            }, JJ.folders.set(cJ, ZJ)), JJ = ZJ
          }
          JJ.files.push(XJ)
        }
        const UJ = [];
        JJ.includes(cJ) && UJ.push({
          kind: "file",
          path: cJ,
          name: WU(cJ),
          depth: 0
        });
        const eJ = (JJ, cJ) => {
          const FJ = [...JJ.folders.entries()].sort(((JJ, cJ) => {
            let [ZJ] = JJ, [FJ] = cJ;
            return ZJ.localeCompare(FJ)
          }));
          for (const [XJ, AJ] of FJ) {
            const JJ = ZJ.has(XJ);
            UJ.push({
              kind: "folder",
              path: XJ,
              name: WU(XJ),
              depth: cJ,
              collapsed: JJ
            }), JJ || eJ(AJ, cJ + 1)
          }
          JJ.files.sort(((JJ, cJ) => JJ.localeCompare(cJ)));
          for (const ZJ of JJ.files) UJ.push({
            kind: "file",
            path: ZJ,
            name: WU(ZJ),
            depth: cJ
          })
        };
        return eJ(FJ, 0), UJ
      }(KJ, VJ, yJ);
      (0, UJ.useEffect)((() => {
        SJ((JJ => {
          const cJ = new Set(JJ);
          let ZJ = !1;
          for (const UJ of wU(FJ)) ZJ = cJ.delete(UJ) || ZJ;
          return ZJ ? cJ : JJ
        }))
      }), [FJ]);
      const MJ = KJ.length >= UZ.A,
        bJ = (JJ, cJ) => {
          if (JJ.length > vU.v) return `Path must be at most ${vU.v} characters`;
          if (!(0, vU.u)(JJ)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === JJ) return "index.d.ts cannot be the world-code entry";
          const FJ = !!cJ && (0, mU.i)(cJ, JJ);
          if (cJ && (0, mU.j)(cJ) && !FJ) return `Cannot rename ${cJ} (only swapping ${rU.g} and ${rU.k} is allowed)`;
          if (JJ in ZJ) return "A file with that path already exists";
          if ((0, mU.j)(JJ) && !FJ) {
            if ((JJ === rU.g ? rU.k : rU.g) in ZJ) return `World code cannot have both ${rU.g} and ${rU.k}`
          }
          return null
        },
        wJ = JJ => {
          VU.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === JJ ? void 0 : `${JJ}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: JJ => bJ(JJ)
          }).getResult().then((JJ => {
            "notificationTornDown" !== JJ && null !== JJ && "submit" === JJ.type && nJ(JJ.value)
          }))
        },
        WJ = JJ => {
          VU.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: JJ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cJ => cJ === JJ ? "That is already the file's path" : bJ(cJ, JJ)
          }).getResult().then((cJ => {
            "notificationTornDown" !== cJ && null !== cJ && "submit" === cJ.type && GJ(JJ, cJ.value)
          }))
        },
        gJ = JJ => {
          const cJ = JJ => JJ.replace(/\/+$/, "");
          VU.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: JJ,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: ZJ => {
              const FJ = cJ(ZJ);
              if (FJ === JJ) return "That is already the folder's path";
              for (const [cJ, UJ] of(0, mU.o)(KJ, JJ, FJ)) {
                const JJ = bJ(UJ, cJ);
                if (null !== JJ) return JJ
              }
              return null
            }
          }).getResult().then((ZJ => {
            "notificationTornDown" !== ZJ && null !== ZJ && "submit" === ZJ.type && xJ(JJ, cJ(ZJ.value))
          }))
        },
        HJ = JJ => {
          VU.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: JJ
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((cJ => {
            !0 === cJ && rJ(JJ)
          }))
        };
      return (0, YJ.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, YJ.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, YJ.jsx)("span", {
            children: "Files"
          }), eJ && !MJ && (0, YJ.jsx)(sJ.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              wJ()
            },
            children: (0, YJ.jsx)(fJ.c, {
              name: "plus"
            })
          })]
        }), (0, YJ.jsxs)("div", {
          className: "FileTreeList",
          children: [IJ.map((JJ => {
            const cJ = JJ.path;
            if ("folder" === JJ.kind) return (0, YJ.jsx)(kU, {
              path: cJ,
              name: JJ.name,
              depth: JJ.depth,
              collapsed: JJ.collapsed,
              onToggle: () => {
                var JJ;
                JJ = cJ, SJ((cJ => {
                  const ZJ = new Set(cJ);
                  return ZJ.delete(JJ) || ZJ.add(JJ), ZJ
                }))
              },
              canCreate: eJ && !MJ,
              canRename: eJ,
              onCreate: wJ,
              onRename: gJ
            }, `folder:${cJ}`);
            const UJ = (0, mU.j)(cJ),
              XJ = rU.g in ZJ && rU.k in ZJ,
              AJ = !UJ || XJ,
              jJ = null === qJ && cJ === FJ;
            return (0, YJ.jsx)(dU, {
              path: cJ,
              label: JJ.name,
              depth: JJ.depth,
              isActive: jJ,
              canRename: eJ,
              onSelect: hJ,
              onRename: WJ,
              onDelete: HJ,
              canDelete: AJ && eJ
            }, cJ)
          })), (0, YJ.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, YJ.jsxs)("span", {
              children: ["Schematics (", Object.keys(mJ).length, "/", bU.e, ")"]
            }), eJ && (0, YJ.jsx)(sJ.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(mJ).length >= bU.e,
              onClick: () => {
                QJ("")
              },
              children: (0, YJ.jsx)(fJ.c, {
                name: "plus"
              })
            })]
          }), Object.keys(mJ).sort().map((JJ => (0, YJ.jsx)(dU, {
            path: JJ,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: QJ
          }, JJ))), AJ.length > 0 && (0, YJ.jsxs)(YJ.Fragment, {
            children: [(0, YJ.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, YJ.jsx)("span", {
                children: "Plugins"
              })
            }), AJ.map((JJ => {
              var cJ;
              const ZJ = IU.g[JJ],
                FJ = Object.keys(null !== (cJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.files) && void 0 !== cJ ? cJ : {
                  "index.ts": ""
                }).sort(((JJ, cJ) => "index.ts" === JJ ? -1 : "index.ts" === cJ ? 1 : JJ.localeCompare(cJ)));
              return (0, YJ.jsxs)("div", {
                children: [(0, YJ.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, mU.z)(JJ)
                }), FJ.map((cJ => (0, YJ.jsx)(dU, {
                  path: cJ,
                  nested: !0,
                  isActive: qJ === JJ && jJ === cJ,
                  canRename: !1,
                  onSelect: () => {
                    DJ(JJ, cJ)
                  },
                  canDelete: !1
                }, cJ)))]
              }, JJ)
            }))]
          })]
        }), (0, YJ.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, YJ.jsx)(sJ.d, {
            className: "FileTreeFooterButton",
            onClick: vJ,
            children: EJ(XJ ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function HU(JJ) {
      return JJ > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": JJ
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function PU(JJ) {
      let {
        depth: cJ
      } = JJ;
      return (0, YJ.jsx)(YJ.Fragment, {
        children: Array.from({
          length: cJ
        }, ((JJ, cJ) => (0, YJ.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": cJ
          }
        }, cJ)))
      })
    }

    function kU(JJ) {
      let {
        path: cJ,
        name: ZJ,
        depth: FJ,
        collapsed: UJ,
        onToggle: eJ,
        canCreate: XJ,
        canRename: AJ,
        onCreate: qJ,
        onRename: jJ
      } = JJ;
      const hJ = [];
      XJ && hJ.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          qJ(cJ)
        }
      }), AJ && hJ.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          jJ(cJ)
        }
      });
      const DJ = HU(FJ);
      return (0, YJ.jsxs)("div", {
        className: sc()("FileTreeItem FileTreeFolder", DJ.className),
        style: DJ.style,
        children: [(0, YJ.jsx)(PU, {
          depth: FJ
        }), (0, YJ.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !UJ,
          onClick: eJ,
          children: [(0, YJ.jsx)(fJ.c, {
            className: "FileTreeFolderCaret",
            name: UJ ? "caret-right" : "caret-down"
          }), (0, YJ.jsx)(fJ.c, {
            className: "FileTreeFolderIcon",
            name: UJ ? "folder" : "folder-open"
          }), ZJ]
        }), (0, YJ.jsx)(pU, {
          path: cJ,
          actions: hJ
        })]
      })
    }

    function pU(JJ) {
      let {
        path: cJ,
        actions: ZJ
      } = JJ;
      const FJ = (0, UJ.useRef)(null);
      return 0 === ZJ.length ? null : (0, YJ.jsxs)("div", {
        ref: FJ,
        className: "FileTreeItemActions",
        children: [(0, YJ.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${cJ}`,
          children: (0, YJ.jsx)(fJ.c, {
            name: "ellipsis"
          })
        }), (0, YJ.jsx)(MU.e, {
          triggerElementRef: FJ,
          options: ZJ
        })]
      })
    }

    function dU(JJ) {
      let {
        path: cJ,
        label: ZJ = cJ,
        depth: FJ = 0,
        isActive: UJ,
        canRename: eJ,
        onSelect: XJ,
        onRename: AJ,
        onDelete: qJ,
        canDelete: jJ,
        nested: hJ
      } = JJ;
      const DJ = [];
      eJ && AJ && DJ.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          AJ(cJ)
        }
      }), jJ && qJ && DJ.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          qJ(cJ)
        }
      });
      const sJ = HU(FJ);
      return (0, YJ.jsxs)("div", {
        className: sc()("FileTreeItem", sJ.className, {
          Active: UJ,
          Nested: hJ
        }),
        style: sJ.style,
        children: [(0, YJ.jsx)(PU, {
          depth: FJ
        }), (0, YJ.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: ZJ === cJ ? void 0 : cJ,
          onClick: () => {
            XJ(cJ)
          },
          children: ZJ
        }), (0, YJ.jsx)(pU, {
          path: cJ,
          actions: DJ
        })]
      })
    }
    async function zU(JJ) {
      const cJ = (0, mU.e)(JJ);
      if (!cJ || "" === JJ[cJ].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: FJ
      } = await Promise.all([ZJ.e(279), ZJ.e(280)]).then((() => ZJ(40219)));
      return (0, IU.c)(FJ(JJ))
    }
    var NU = ZJ(35894);

    function OU(JJ, cJ) {
      const ZJ = Object.keys(JJ),
        FJ = Object.keys(cJ);
      if (ZJ.length !== FJ.length) return !1;
      for (const UJ of ZJ)
        if (!(UJ in cJ) || JJ[UJ] !== cJ[UJ]) return !1;
      return !0
    }

    function TU(JJ, cJ) {
      const ZJ = [],
        FJ = [],
        UJ = [];
      for (const eJ of Object.keys(cJ)) eJ in JJ ? JJ[eJ] !== cJ[eJ] && UJ.push(eJ) : ZJ.push(eJ);
      for (const eJ of Object.keys(JJ)) eJ in cJ || FJ.push(eJ);
      return ZJ.sort(), FJ.sort(), UJ.sort(), {
        creates: ZJ,
        deletes: FJ,
        updates: UJ
      }
    }

    function CU(JJ, cJ) {
      var ZJ;
      const FJ = {
          ...JJ
        },
        UJ = (0, mU.e)(cJ),
        eJ = (0, mU.e)(FJ);
      if (rU.g in FJ && rU.k in FJ) {
        const JJ = null !== UJ && void 0 !== UJ ? UJ : rU.k,
          ZJ = JJ === rU.g ? rU.k : rU.g;
        var XJ;
        if (!(JJ in FJ)) FJ[JJ] = null !== (XJ = cJ[JJ]) && void 0 !== XJ ? XJ : "";
        return delete FJ[ZJ], FJ
      }
      var AJ;
      return UJ && !(UJ in FJ) ? (eJ || (FJ[UJ] = null !== (AJ = cJ[UJ]) && void 0 !== AJ ? AJ : ""), FJ) : (eJ || UJ || (FJ[rU.g] = null !== (ZJ = FJ[rU.g]) && void 0 !== ZJ ? ZJ : "", delete FJ[rU.k]), FJ)
    }

    function uU(JJ, cJ) {
      const ZJ = (0, mU.e)(cJ),
        FJ = rU.g in cJ && rU.k in cJ;
      return JJ.filter((JJ => !(0, mU.j)(JJ) || (!!FJ || ZJ !== JJ)))
    }
    async function iU(JJ, cJ, FJ) {
      const UJ = JJ.getLobbyFiles(),
        eJ = (0, UZ.j)(FJ, (0, mU.r)(UJ, cJ)),
        XJ = await JJ.ensureJoined(cJ),
        AJ = (0, vU.x)(XJ.docKey);
      if (XJ.doc === eJ) return;
      for (let ZJ = 0; ZJ < 100; ZJ++) {
        const ZJ = JJ.getCollabSnapshot();
        if (ZJ && (0, vU.x)(ZJ.docKey) === AJ && JJ.getActivePath() === cJ) {
          if (JJ.replaceActiveDoc(AJ, eJ)) return;
          await (0, wF.X)(40)
        } else await (0, wF.X)(40)
      }
      const {
        ChangeSet: qJ
      } = await ZJ.e(275).then((() => ZJ(40060))), YJ = JJ.getCollabSnapshot(), hJ = YJ && (0, vU.x)(YJ.docKey) === AJ ? YJ : XJ;
      await async function(JJ, cJ, ZJ, FJ) {
        const UJ = JJ.of({
            from: 0,
            to: ZJ.length,
            insert: FJ
          }, ZJ.length),
          eJ = JSON.stringify([{
            clientID: cJ.clientID,
            changes: UJ.toJSON()
          }]),
          XJ = (0, vU.x)(cJ.docKey);
        eJ.length <= vU.k ? jJ.gameBridge.send("sendCodeCollab", {
          JJ: vU.e.Push,
          cJ: XJ,
          ZJ: cJ.version,
          eJ: eJ
        }) : await (0, xU.postJsonWithMetricsCookiesAndJsonResponse)(`${cJ.httpConfig.gsUrl}/code/collab-push`, fU.l["collab-push"].toBuffer({
          gameNameWithVariation: cJ.httpConfig.gameNameWithVariation,
          lobbyName: cJ.httpConfig.lobbyName,
          docKey: XJ,
          version: cJ.version,
          updates: eJ
        }), {
          retries: 0
        })
      }(qJ, hJ, hJ.doc, eJ)
    }
    class RU {
      constructor(JJ) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = JJ
      }
      async writeLobbyFiles(JJ) {
        const cJ = {
            ...this.bridge.getLobbyFiles()
          },
          ZJ = {
            ...cJ
          };
        for (const {
            path: eJ,
            text: XJ
          }
          of JJ) ZJ[eJ] = XJ;
        if (!JJ.every((JJ => {
            let {
              path: cJ,
              text: FJ
            } = JJ;
            return (0, UZ.j)(FJ, (0, mU.r)(ZJ, cJ)) === FJ
          }))) return !1;
        const FJ = [];
        try {
          for (const {
              path: cJ,
              text: ZJ
            }
            of JJ) FJ.push(cJ), cJ in this.bridge.getLobbyFiles() || (this.bridge.createFile(cJ, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(cJ, !0)), await iU(this.bridge, cJ, ZJ)
        } catch (UJ) {
          for (const JJ of FJ) JJ in cJ ? await iU(this.bridge, JJ, cJ[JJ]).catch((cJ => {
            console.error("World Code AI: couldn't put back", JJ, cJ)
          })) : this.bridge.deleteFile(JJ);
          throw UJ
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const JJ = await (0, NU.u)(this.bridge.getStorageKey());
        return !!JJ && (this.handle = JJ, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(JJ), !0)
      }
      async unlinkFolder() {
        const JJ = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, NU.d)(JJ), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const JJ = this.bridge.getStorageKey(),
          cJ = await (0, NU.t)(JJ);
        return !!cJ && (!!await (0, NU.j)(cJ, "readwrite") && (this.handle = cJ, this.linked = !0, await (0, NU.H)(JJ, cJ), await this.scaffoldLocalTypes(cJ), !0))
      }
      scaffoldLocalTypes(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const FJ = (await zU(cJ)).map((JJ => IU.g[JJ])),
              UJ = FJ.map((JJ => {
                var cJ;
                return `${JJ.name}:${Object.keys(null!==(cJ=null===JJ||void 0===JJ?void 0:JJ.files)&&void 0!==cJ?cJ:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === UJ) return;
            const {
              ensureLocalBloxdTypes: eJ
            } = await Promise.all([ZJ.e(75), ZJ.e(277), ZJ.e(282)]).then((() => ZJ(40225)));
            await eJ(JJ, FJ), this.scaffoldedPluginNamesKey = UJ
          } catch (FJ) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", FJ)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(JJ) {
        this.handle && await this.scaffoldLocalTypes(this.handle, JJ), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(JJ)
      }
      async onDocTextChanged(JJ, cJ) {
        if (!this.handle) return;
        const ZJ = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [JJ]: cJ
        })];
        this.running && (this.pendingDocText.set(JJ, cJ), ZJ.push(this.flushDocTextToDisk())), await Promise.all(ZJ)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const JJ = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const cJ = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [ZJ, FJ] of cJ) this.lastSynced[ZJ] !== FJ && (await (0, NU.M)(JJ, ZJ, FJ), this.lastSynced = {
              ...this.lastSynced,
              [ZJ]: FJ
            })
          }
        } catch (cJ) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", cJ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, NU.y)(this.handle))
          } catch (JJ) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", JJ)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, NU.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const cJ = this.bridge.getLobbyFiles(),
              ZJ = await (0, NU.y)(this.handle);
            for (const JJ of Object.keys(cJ).filter(bU.b)) {
              if (ZJ[JJ] === NU.o) return void this.bridge.setMessage(`Move ${JJ} outside the linked folder before syncing its placeholder.`, "warning");
              ZJ[JJ] = bU.k
            }
            if (OU(ZJ, cJ)) {
              for (const JJ of Object.keys(cJ).filter(bU.b)) await (0, NU.M)(this.handle, JJ, bU.k);
              return this.lastSynced = {
                ...ZJ
              }, void this.beginWatch()
            }
            const FJ = await this.promptReconcile(function(JJ) {
              return null !== (0, mU.e)(JJ)
            }(ZJ));
            if ("unlink" === FJ) return void await this.unlinkFolder();
            if ("dismissed" === FJ) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === FJ) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(ZJ);
                for (const JJ of Object.keys(cJ).filter(bU.b)) await (0, NU.M)(this.handle, JJ, bU.k);
                this.lastSynced = {
                  ...await (0, NU.y)(this.handle)
                }
              } else await (0, NU.Q)(this.handle, cJ), this.lastSynced = {
                ...cJ
              }
            } catch (JJ) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", JJ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(JJ) {
        return await new Promise((cJ => {
          const ZJ = [{
              choice: "local",
              Button: sJ.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: sJ.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: sJ.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            FJ = (0, YJ.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, YJ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, YJ.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: JJ ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, YJ.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: ZJ.filter((cJ => "local" !== cJ.choice || JJ)).map((JJ => {
                  let {
                    choice: ZJ,
                    Button: FJ,
                    labelKey: eJ,
                    descriptionKey: XJ
                  } = JJ;
                  return (0, YJ.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, YJ.jsx)(FJ, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (JJ => {
                          UJ.tearDownNotification(), cJ(JJ)
                        })(ZJ)
                      },
                      children: this.bridge.t(`codeEditor:${eJ}`)
                    }), (0, YJ.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${XJ}`)
                    })]
                  }, ZJ)
                }))
              })]
            }),
            UJ = VU.NotificationProvider.showCustomPopup({
              body: FJ,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          UJ.getResult().then((JJ => {
            "notificationTornDown" === JJ && cJ("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, NU.I)(this.handle, (JJ => {
          this.onDiskFilesChanged(JJ)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (JJ) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", JJ)
        }
      }
      async onDiskFilesChanged(JJ) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const cJ = this.bridge.getLobbyFiles();
        let ZJ = CU(JJ, this.lastSynced);
        for (const eJ in cJ)
          if ((0, bU.b)(eJ) && ZJ[eJ] === NU.o) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const FJ = Object.keys(ZJ).filter((JJ => (0, bU.b)(JJ) && !(JJ in cJ)));
        FJ.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const eJ of Object.keys(cJ).filter(bU.b))(eJ in ZJ || FJ.length > 0 || !(eJ in this.lastSynced)) && (ZJ[eJ] = bU.k);
        if (!OU(ZJ, JJ)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(JJ, ZJ), ZJ = CU(await (0, NU.y)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!OU(ZJ, this.lastSynced)) {
          this.applying = !0;
          try {
            const JJ = TU(this.lastSynced, ZJ);
            if (await this.pushDiskDeltaToLobby(ZJ, cJ), null !== this.lastLobbySeen)
              for (const ZJ of [...JJ.creates, ...JJ.updates, ...JJ.deletes])(0, bU.b)(ZJ) || (ZJ in cJ ? this.lastLobbySeen[ZJ] = cJ[ZJ] : delete this.lastLobbySeen[ZJ]);
            this.lastSynced = {
              ...ZJ
            }
          } catch (UJ) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", UJ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(JJ, cJ) {
        if (this.handle) {
          for (const ZJ of Object.keys(JJ)) ZJ in cJ || await (0, NU.B)(this.handle, ZJ);
          for (const [ZJ, FJ] of Object.entries(cJ)) JJ[ZJ] !== FJ && await (0, NU.M)(this.handle, ZJ, FJ)
        }
      }
      async applyRemoteTreeToDisk(JJ) {
        if (!this.handle) return;
        const cJ = this.lastLobbySeen;
        if (null === cJ) return void(this.lastLobbySeen = {
          ...JJ
        });
        const ZJ = Object.keys(JJ).filter((ZJ => cJ[ZJ] !== JJ[ZJ])),
          FJ = Object.keys(cJ).filter((cJ => !(cJ in JJ)));
        if (0 !== ZJ.length || 0 !== FJ.length) {
          this.applying = !0;
          try {
            for (const cJ of [...FJ, ...ZJ]) try {
              if (cJ in JJ) await (0, NU.M)(this.handle, cJ, JJ[cJ]), this.lastSynced = {
                ...this.lastSynced,
                [cJ]: JJ[cJ]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [cJ]: JJ[cJ]
              };
              else {
                await (0, NU.B)(this.handle, cJ);
                const JJ = {
                  ...this.lastSynced
                };
                delete JJ[cJ], this.lastSynced = JJ;
                const ZJ = {
                  ...this.lastLobbySeen
                };
                delete ZJ[cJ], this.lastLobbySeen = ZJ
              }
            } catch (UJ) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", UJ), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(JJ, cJ) {
        const ZJ = function(JJ, cJ) {
          const ZJ = (0, mU.e)(JJ),
            FJ = (0, mU.e)(cJ);
          return ZJ && FJ && ZJ !== FJ ? {
            from: ZJ,
            to: FJ
          } : null
        }(JJ, cJ);
        return !!ZJ && (this.bridge.renameFile(ZJ.from, ZJ.to), await this.bridge.waitForLobbyPath(ZJ.to, !0), !0)
      }
      async applyLocalTreeToLobby(JJ) {
        var cJ;
        const ZJ = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), JJ);
        const FJ = this.bridge.getLobbyFiles(),
          UJ = TU(FJ, JJ),
          eJ = uU(UJ.deletes, FJ);
        for (const jJ of UJ.creates)(0, bU.b)(jJ) || (this.bridge.createFile(jJ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(jJ, !0));
        for (const jJ of eJ)(0, bU.b)(jJ) || (this.bridge.deleteFile(jJ), await this.bridge.waitForLobbyPath(jJ, !1));
        if (!(0, mU.e)(this.bridge.getLobbyFiles()) && !(0, mU.e)(JJ)) {
          if (this.bridge.createFile(rU.g, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(rU.g, !0), !this.handle) return;
          await (0, NU.M)(this.handle, rU.g, ""), JJ = {
            ...JJ,
            [rU.g]: ""
          }
        }
        const XJ = this.bridge.getLobbyFiles();
        for (const jJ of Object.keys(JJ))(0, bU.b)(jJ) || XJ[jJ] !== JJ[jJ] && await iU(this.bridge, jJ, JJ[jJ]);
        const AJ = this.bridge.getLobbyFiles(),
          qJ = ZJ in AJ ? ZJ : null !== (cJ = (0, mU.e)(AJ)) && void 0 !== cJ ? cJ : rU.g;
        await this.bridge.ensureJoined(qJ)
      }
      async pushDiskDeltaToLobby(JJ, cJ) {
        const ZJ = this.bridge.getActivePath(),
          FJ = await this.renameLobbyEntryIfSwitched(cJ, JJ) ? this.bridge.getLobbyFiles() : cJ,
          UJ = TU(this.lastSynced, JJ),
          eJ = uU(UJ.deletes, FJ).filter((JJ => JJ in FJ));
        for (const XJ of UJ.creates)(0, bU.b)(XJ) || (XJ in this.bridge.getLobbyFiles() || (this.bridge.createFile(XJ, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(XJ, !0)), await iU(this.bridge, XJ, JJ[XJ]));
        for (const XJ of eJ)(0, bU.b)(XJ) ? await this.bridge.deleteSchematic(XJ) : (this.bridge.deleteFile(XJ), await this.bridge.waitForLobbyPath(XJ, !1));
        for (const XJ of UJ.updates)(0, bU.b)(XJ) || await iU(this.bridge, XJ, JJ[XJ]);
        ZJ in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== ZJ && await this.bridge.ensureJoined(ZJ)
      }
    }
    var LU = ZJ(1098);

    function aU() {
      const {
        websocketUrl: JJ,
        gameNameWithVariation: cJ,
        lobbyName: ZJ
      } = jJ.gameBridge.latest("connectedGame");
      return {
        gsUrl: LU.clientSideServerUrls.getHttpUrlFromWebSocketUrl(JJ),
        gameNameWithVariation: cJ,
        lobbyName: ZJ
      }
    }
    async function BU(JJ) {
      const {
        gsUrl: cJ,
        gameNameWithVariation: ZJ,
        lobbyName: FJ
      } = aU();
      return await (0, xU.postBinaryWithMetricsCookiesAndCustomResponse)(`${cJ}/code/schematics`, fU.Sj.schematics.toBuffer({
        gameNameWithVariation: ZJ,
        lobbyName: FJ,
        request: JSON.stringify(JJ)
      }), {
        retries: 0
      }, xU.HttpPayloadType.json)
    }
    var tU = ZJ(35474);

    function oU(JJ) {
      let {
        path: cJ,
        revision: ZJ
      } = JJ;
      const [FJ, eJ] = (0, UJ.useState)(""), [XJ, AJ] = (0, UJ.useState)(!1), [qJ, jJ] = (0, UJ.useState)(0);
      return (0, UJ.useEffect)((() => {
        let JJ = !1;
        return eJ(""), AJ(!1), BU({
          action: "preview",
          path: cJ
        }).then((cJ => {
          JJ || eJ(`data:image/webp;base64,${cJ.previewBase64}`)
        })).catch((cJ => {
          console.error("Could not load schematic preview", cJ), JJ || AJ(!0)
        })), () => {
          JJ = !0
        }
      }), [cJ, ZJ, qJ]), (0, YJ.jsxs)("div", {
        className: "SchematicPreview",
        children: [FJ && (0, YJ.jsx)("img", {
          src: FJ,
          alt: `Preview of ${cJ}`
        }), !FJ && !XJ && (0, YJ.jsx)(IJ.c, {
          loaderType: "Secondary"
        }), XJ && (0, YJ.jsxs)(YJ.Fragment, {
          children: [(0, YJ.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, YJ.jsx)(sJ.d, {
            onClick: () => {
              jJ(qJ + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function lU(JJ) {
      var cJ;
      let {
        initialPath: ZJ,
        onChanged: FJ,
        onClose: eJ
      } = JJ;
      const XJ = "" === ZJ,
        [AJ, qJ] = (0, UJ.useState)(null),
        [jJ, hJ] = (0, UJ.useState)(ZJ),
        [DJ, nJ] = (0, UJ.useState)(!1),
        [GJ, fJ] = (0, UJ.useState)(!1),
        [xJ, rJ] = (0, UJ.useState)(null),
        [vJ, mJ] = (0, UJ.useState)(!1),
        [QJ, EJ] = (0, UJ.useState)(""),
        VJ = (0, UJ.useRef)(null),
        KJ = (0, UJ.useRef)(!1),
        yJ = (0, UJ.useRef)(!0);
      (0, UJ.useEffect)((() => (yJ.current = !0, BU({
        action: "state"
      }).then((JJ => {
        yJ.current && qJ(JJ)
      })).catch((JJ => {
        console.error("Could not load schematic assets", JJ), yJ.current && EJ("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        yJ.current = !1
      })), []);
      const SJ = null === AJ || void 0 === AJ ? void 0 : AJ.assets[ZJ],
        IJ = Object.keys(null !== (cJ = null === AJ || void 0 === AJ ? void 0 : AJ.assets) && void 0 !== cJ ? cJ : {}).length,
        MJ = jJ.trim(),
        bJ = MJ ? (0, bU.b)(MJ) ? null !== AJ && void 0 !== AJ && AJ.assets[MJ] && (XJ || MJ !== ZJ) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        wJ = !!MJ && !bJ && (XJ ? IJ < bU.e : MJ !== ZJ),
        WJ = vJ || !AJ;
      async function gJ(JJ) {
        if (!KJ.current && yJ.current) {
          KJ.current = !0, mJ(!0), EJ("");
          try {
            const cJ = await BU({
              ...JJ,
              expectedRevision: AJ.revision
            });
            FJ(cJ), yJ.current && eJ()
          } catch (ZJ) {
            var cJ;
            if (console.error("Schematic asset operation failed", ZJ), yJ.current) EJ(ZJ instanceof uJ.b ? null !== (cJ = ZJ.errorMessageForUser) && void 0 !== cJ ? cJ : ZJ.message : String(ZJ));
            try {
              const JJ = await BU({
                action: "state"
              });
              FJ(JJ), yJ.current && qJ(JJ)
            } catch (UJ) {
              console.error("Could not refresh schematic assets", UJ)
            }
          } finally {
            KJ.current = !1, yJ.current && mJ(!1)
          }
        }
      }
      return (0, YJ.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, YJ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: XJ ? "New schematic" : DJ ? "Rename schematic" : "Schematic"
        }), QJ && (0, YJ.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: QJ
        }), !AJ && !QJ && (0, YJ.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, YJ.jsxs)("fieldset", {
          disabled: WJ,
          children: [XJ || DJ ? (0, YJ.jsxs)("label", {
            className: "SchematicField",
            children: [(0, YJ.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, YJ.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, YJ.jsx)(Sc.e, {
                className: "InputGenericPopupInput",
                defaultValue: ZJ,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: hJ
              }, DJ ? "rename" : "create")
            })]
          }) : (0, YJ.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: ZJ
          }), (XJ || DJ) && bJ && (0, YJ.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: bJ
          }), XJ ? (0, YJ.jsxs)(YJ.Fragment, {
            children: [IJ >= bU.e && (0, YJ.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", bU.e, " maximum)."]
            }), GJ ? (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, YJ.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": WJ || !wJ,
                children: (0, YJ.jsx)(tU.e, {
                  loading: null === xJ,
                  schematics: null !== xJ && void 0 !== xJ ? xJ : [],
                  disableAutoExport: !0,
                  onSchematicPicked: JJ => {
                    !WJ && wJ && gJ({
                      action: "profile",
                      path: MJ,
                      schematicId: JJ.schematicId
                    })
                  }
                })
              }), (0, YJ.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, YJ.jsx)(sJ.d, {
                  className: "InputGenericPopupButton",
                  disabled: WJ,
                  onClick: () => {
                    fJ(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, YJ.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, YJ.jsx)(sJ.d, {
                className: "InputGenericPopupButton",
                disabled: WJ || !wJ,
                onClick: () => {
                  VJ.current.click()
                },
                children: "Upload Schematic"
              }), (0, YJ.jsx)(sJ.d, {
                className: "InputGenericPopupButton",
                disabled: WJ || !wJ,
                onClick: () => {
                  !async function() {
                    if (fJ(!0), EJ(""), !xJ) try {
                      const JJ = await (0, xU.postJsonWithMetricsCookiesAndJsonResponse)(`${LU.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      yJ.current && rJ(JJ)
                    } catch (JJ) {
                      console.error("Could not load profile schematics", JJ), yJ.current && (fJ(!1), EJ("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, YJ.jsx)("input", {
              ref: VJ,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: JJ => {
                var cJ;
                const ZJ = null === (cJ = JJ.target.files) || void 0 === cJ ? void 0 : cJ[0];
                if (JJ.target.value = "", !ZJ) return;
                if (ZJ.size > bU.i) return void EJ("The schematic file is too large.");
                const FJ = MJ;
                mJ(!0);
                const UJ = new FileReader;
                UJ.onload = () => {
                  gJ({
                    action: "upload",
                    path: FJ,
                    base64: String(UJ.result).split(",")[1]
                  })
                }, UJ.onerror = () => {
                  console.error("Could not read schematic file", UJ.error), yJ.current && (mJ(!1), EJ("Could not read the selected file."))
                }, UJ.readAsDataURL(ZJ)
              }
            })]
          }) : SJ ? (0, YJ.jsxs)(YJ.Fragment, {
            children: [!DJ && (0, YJ.jsx)(oU, {
              path: ZJ,
              revision: AJ.revision
            }), !DJ && (0, YJ.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(SJ.byteSize / 1024), " KB \xb7 ", SJ.dimensions.join(" \xd7 "), " blocks"]
            }), (0, YJ.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: DJ ? (0, YJ.jsxs)(YJ.Fragment, {
                children: [(0, YJ.jsx)(sJ.d, {
                  className: "InputGenericPopupButton",
                  disabled: WJ || !wJ,
                  onClick: () => {
                    gJ({
                      action: "rename",
                      path: ZJ,
                      newPath: MJ
                    })
                  },
                  children: "Rename"
                }), (0, YJ.jsx)(sJ.d, {
                  className: "InputGenericPopupButton",
                  disabled: WJ,
                  onClick: () => {
                    nJ(!1), hJ(ZJ)
                  },
                  children: "Cancel"
                })]
              }) : (0, YJ.jsxs)(YJ.Fragment, {
                children: [(0, YJ.jsx)(sJ.d, {
                  className: "InputGenericPopupButton",
                  disabled: WJ,
                  onClick: () => {
                    nJ(!0)
                  },
                  children: "Rename"
                }), (0, YJ.jsx)(sJ.I, {
                  className: "InputGenericPopupButton",
                  disabled: WJ,
                  onClick: () => {
                    gJ({
                      action: "remove",
                      path: ZJ
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : AJ && (0, YJ.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Je(JJ) {
      if ("string" !== typeof JJ) return null;
      try {
        const cJ = JSON.parse(JJ);
        return (0, mU.l)(null === cJ || void 0 === cJ ? void 0 : cJ.worldCodeEngine) && "boolean" === typeof cJ.engineLocked && function(JJ) {
          if (null === JJ) return !0;
          const cJ = null === JJ || void 0 === JJ ? void 0 : JJ.location;
          return "string" === typeof(null === JJ || void 0 === JJ ? void 0 : JJ.reason) && (null === cJ || "string" === typeof(null === cJ || void 0 === cJ ? void 0 : cJ.path) && Number.isInteger(cJ.line))
        }(cJ.fallback) ? cJ : (console.error("[CodeCollab] Malformed engine settings", JJ), null)
      } catch (cJ) {
        return console.error("[CodeCollab] Failed to parse engine settings", cJ), null
      }
    }

    function ce(JJ) {
      let {
        fallback: cJ,
        onGoToLine: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), {
        location: UJ
      } = cJ;
      return (0, YJ.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [FJ("codeEditorEngine:notice", {
          reason: cJ.reason
        }), UJ && (0, YJ.jsxs)(YJ.Fragment, {
          children: [" ", (0, YJ.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              ZJ(UJ.path, UJ.line)
            },
            children: FJ("codeEditorEngine:goToLine", {
              line: String(UJ.line)
            })
          })]
        })]
      })
    }
    var Ze = ZJ(4345);

    function Fe(JJ) {
      let {
        label: cJ,
        hint: ZJ,
        checked: FJ,
        onChange: UJ
      } = JJ;
      return (0, YJ.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, YJ.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, YJ.jsx)("span", {
            children: cJ
          }), (0, YJ.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: ZJ
          })]
        }), (0, YJ.jsx)("span", {
          className: "SwitchContainer",
          children: (0, YJ.jsx)(mc.e, {
            className: "SwitchCheckbox",
            checked: FJ,
            onChange: JJ => {
              UJ(JJ.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Ue(JJ) {
      let {
        engine: cJ,
        onSetEngine: ZJ,
        aiHints: FJ,
        variation: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, aJ.F)();
      return (0, YJ.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, YJ.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: eJ("codeEditor:moreOptions")
        }), cJ && (0, YJ.jsx)(Fe, {
          label: eJ("codeEditorEngine:toggle"),
          hint: eJ("codeEditorEngine:toggleHint"),
          checked: "ses" === cJ,
          onChange: JJ => {
            ZJ(JJ ? "ses" : "quickjs")
          }
        }), FJ && (0, YJ.jsx)(Fe, {
          label: eJ("codeEditorAiHints:toggle"),
          hint: eJ("codeEditorAiHints:toggleHint"),
          checked: FJ.shown,
          onChange: FJ.setShown
        }), UJ && (0, YJ.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, YJ.jsx)(Ze.g, {
            label: "codeEditor:variationLabel",
            children: (0, YJ.jsx)(Sc.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: UJ.name,
              onValueChange: UJ.setName,
              onEnter: UJ.reload
            })
          }), (0, YJ.jsx)(sJ.y, {
            className: "CodeEditorButton",
            onClick: UJ.reload,
            children: eJ("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var ee = ZJ(35897),
      Xe = ZJ(35901);

    function Ae(JJ) {
      let {
        close: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, aJ.F)(), FJ = [{
        name: ZJ("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: ZJ("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: ZJ("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, YJ.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, YJ.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: ZJ("codeEditor:tutorialsTitle")
        }), (0, YJ.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: FJ.map((JJ => (0, YJ.jsx)(sJ.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              cJ(), (0, Xe.J)(JJ.tutorial)
            },
            children: JJ.name
          }, JJ.tutorial)))
        })]
      })
    }
    var qe = ZJ(93),
      je = ZJ(35609),
      Ye = ZJ(8070);
    const he = (0, UJ.forwardRef)((function(JJ, cJ) {
      let {
        value: ZJ,
        onChange: FJ,
        onSubmit: UJ,
        placeholder: eJ,
        maxLength: XJ,
        rows: AJ = 2,
        allowNewLines: qJ = !1,
        onKeyDown: jJ,
        before: hJ
      } = JJ;
      const {
        t: DJ
      } = (0, aJ.F)(), nJ = "" !== ZJ.trim(), GJ = () => {
        nJ && UJ()
      };
      return (0, YJ.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [hJ, (0, YJ.jsx)("textarea", {
          ref: cJ,
          className: "PanelPromptInput",
          value: ZJ,
          maxLength: XJ,
          rows: AJ,
          placeholder: eJ,
          spellCheck: !1,
          autoComplete: "off",
          onChange: JJ => {
            FJ(qJ ? JJ.target.value : JJ.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: JJ => {
            JJ.nativeEvent.isComposing || 229 === JJ.nativeEvent.keyCode ? JJ.stopPropagation() : "Escape" !== JJ.key && (JJ.stopPropagation(), null === jJ || void 0 === jJ || jJ(JJ), JJ.defaultPrevented || "Enter" !== JJ.key || qJ && JJ.shiftKey || (JJ.preventDefault(), GJ()))
          }
        }), (0, YJ.jsx)(sJ.d, {
          className: "PanelPromptSend",
          disabled: !nJ,
          onClick: GJ,
          ariaLabel: DJ("codeEditorPanels:send"),
          children: (0, YJ.jsx)(fJ.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function De(JJ) {
      let {
        close: cJ,
        inputRef: ZJ
      } = JJ;
      const {
        t: FJ
      } = (0, aJ.F)(), {
        messages: eJ,
        reportedPlayers: XJ,
        channel: AJ
      } = (0, Ye.k)(), [qJ, jJ] = (0, UJ.useState)(""), hJ = (0, UJ.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, YJ.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, YJ.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, YJ.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: FJ("codeEditorChat:title")
          }), (0, YJ.jsx)(sJ.j, {
            className: "CodeEditorChatHide",
            onClick: cJ
          })]
        }), 0 === eJ.length ? (0, YJ.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: FJ("codeEditorChat:empty")
        }) : (0, YJ.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, YJ.jsx)(je.b, {
            messages: eJ,
            reportedPlayers: XJ
          })
        }), (0, YJ.jsx)(he, {
          ref: ZJ,
          value: qJ,
          onChange: jJ,
          onSubmit: () => {
            (0, Ye.i)(qJ), jJ(""), hJ.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: yJ.Mc,
          rows: 1,
          placeholder: AJ ? FJ("touchOnly" === (0, qe.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: AJ.channelName
          }) : FJ("codeEditorChat:placeholder"),
          before: AJ && (0, YJ.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: AJ.elementBgColor
            },
            onClick: () => {
              Ye.e.selectNextChannel(), ZJ.current.focus()
            },
            children: (0, YJ.jsx)(VJ.d, {
              text: AJ.elementContent
            })
          }),
          onKeyDown: JJ => {
            const cJ = qJ === hJ.current.text;
            if ("ArrowUp" !== JJ.key && "ArrowDown" !== JJ.key || !cJ && "" !== qJ) "Tab" === JJ.key && !JJ.shiftKey && AJ && (JJ.preventDefault(), Ye.e.selectNextChannel());
            else {
              JJ.preventDefault();
              const ZJ = cJ ? hJ.current.stepsBack : 0;
              hJ.current = (0, Ye.h)(ZJ + ("ArrowUp" === JJ.key ? 1 : -1)), jJ(hJ.current.text)
            }
          }
        })]
      })
    }

    function se(JJ) {
      let {
        side: cJ,
        defaultWidth: ZJ,
        children: FJ
      } = JJ;
      const eJ = (0, UJ.useRef)(null),
        [XJ, AJ] = (0, UJ.useState)(null),
        qJ = (0, UJ.useRef)(null),
        jJ = () => {
          qJ.current = null
        };
      return (0, YJ.jsxs)("div", {
        ref: eJ,
        className: sc()("ResizableSidePanel", `ResizableSidePanel-${cJ}`),
        style: {
          width: null !== XJ && void 0 !== XJ ? XJ : ZJ
        },
        children: [FJ, (0, YJ.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: JJ => {
            if (0 !== JJ.button) return;
            JJ.preventDefault();
            const cJ = eJ.current,
              ZJ = Array.from(cJ.parentElement.children).reduce(((JJ, ZJ) => ZJ !== cJ && "0" !== getComputedStyle(ZJ).flexGrow ? JJ + ZJ.clientWidth : JJ), 0),
              FJ = cJ.offsetWidth,
              UJ = Math.min(200, FJ),
              XJ = Math.max(UJ, FJ + Math.max(0, ZJ - 160));
            qJ.current = {
              startX: JJ.clientX,
              startWidth: FJ,
              minWidth: UJ,
              maxWidth: XJ
            }, JJ.currentTarget.setPointerCapture(JJ.pointerId)
          },
          onPointerMove: JJ => {
            const ZJ = qJ.current;
            if (!ZJ) return;
            const FJ = "left" === cJ ? JJ.clientX - ZJ.startX : ZJ.startX - JJ.clientX;
            AJ(Math.min(ZJ.maxWidth, Math.max(ZJ.minWidth, ZJ.startWidth + FJ)))
          },
          onPointerUp: jJ,
          onPointerCancel: jJ,
          onLostPointerCapture: jJ
        })]
      })
    }
    var ne = ZJ(35909);
    class Ge {
      constructor(JJ, cJ) {
        this.storageKey = JJ, this.defaultValue = cJ, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const JJ = gJ.j.getItem(this.storageKey);
            this.value = "boolean" === typeof JJ ? JJ : this.defaultValue
          }
          return this.value
        }, this.set = JJ => {
          this.value = JJ, gJ.j.setItem(this.storageKey, JJ);
          for (const cJ of this.listeners) cJ(JJ)
        }
      }
      subscribe(JJ) {
        return this.listeners.add(JJ), () => {
          this.listeners.delete(JJ)
        }
      }
    }
    const fe = new Ge("codeEditorLightMode", !1),
      xe = new Ge("codeEditorAiHints", !0);

    function re(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)(JJ.get);
      return (0, UJ.useEffect)((() => {
        const cJ = JJ.subscribe(ZJ);
        return ZJ(JJ.get()), cJ
      }), [JJ]), [cJ, JJ.set]
    }
    var ve = ZJ(35915),
      me = ZJ(35923),
      Qe = ZJ(35926);
    const Ee = (0, UJ.lazy)((() => Promise.all([ZJ.e(279), ZJ.e(275), ZJ.e(278), ZJ.e(274), ZJ.e(75), ZJ.e(277), ZJ.e(276), ZJ.e(273)]).then((() => ZJ(40047))))),
      Ve = (0, UJ.lazy)((() => Promise.all([ZJ.e(70), ZJ.e(73), ZJ.e(74), ZJ.e(72), ZJ.e(281)]).then((() => ZJ(40205))))),
      Ke = (0, UJ.lazy)((() => Promise.all([ZJ.e(279), ZJ.e(278), ZJ.e(75), ZJ.e(73), ZJ.e(74), ZJ.e(72), ZJ.e(277), ZJ.e(276), ZJ.e(71), ZJ.e(82)]).then((() => ZJ(40211)))));

    function ye(JJ) {
      return jJ.gameBridge.query("worldCodeAiChunk", JJ)
    }

    function Se() {
      return jJ.gameBridge.query("worldCodeAiGameState", null)
    }

    function Ie(JJ) {
      const {
        gsUrl: cJ,
        gameNameWithVariation: ZJ,
        lobbyName: FJ
      } = aU();
      return (0, xU.postJsonWithMetricsCookiesAndJsonResponse)(`${cJ}/code/get-lobby-code`, fU.Sj["get-lobby-code"].toBuffer({
        gameNameWithVariation: ZJ,
        lobbyName: FJ,
        path: JJ
      }), {
        retries: 1
      })
    }
    let Me = !1;
    const be = [],
      we = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      We = (0, UJ.memo)((function(JJ) {
        var cJ, ZJ;
        let {
          show: FJ,
          onOpen: eJ,
          onClose: AJ,
          isLobbyCode: hJ
        } = JJ;
        const DJ = (0, UJ.useRef)(""),
          [GJ, xJ] = (0, UJ.useState)(null),
          rJ = (0, UJ.useRef)(hJ),
          [vJ, mJ] = (0, UJ.useState)({
            message: null,
            type: null
          }),
          [QJ, EJ] = (0, UJ.useState)(""),
          VJ = vJ.message ? vJ : {
            message: QJ,
            type: "warning"
          },
          [MJ, bJ] = (0, UJ.useState)(!0),
          [wJ, gJ] = re(fe),
          [HJ, PJ] = re(xe),
          [kJ, pJ] = (0, UJ.useState)(!1),
          [dJ, OJ] = (0, UJ.useState)(!1),
          TJ = (0, UJ.useRef)(null),
          CJ = (0, UJ.useRef)(!1);
        (0, UJ.useEffect)((() => {
          var JJ;
          dJ && CJ.current && (CJ.current = !1, null === (JJ = TJ.current) || void 0 === JJ || JJ.focus())
        }), [dJ]);
        const uJ = (0, ne.c)(),
          iJ = (0, UJ.useRef)(null),
          LJ = (0, UJ.useRef)(null),
          {
            openInGameMenuName: BJ,
            openEverythingMenuName: tJ
          } = (0, zJ.j)(["openInGameMenuName", "openEverythingMenuName"]),
          oJ = JJ => {
            FJ && (iJ.current = JJ, yc.current = !0)
          };
        (0, KJ.i)("OpenReportMenu", (() => {
          oJ("ls")
        })), (0, KJ.i)("OpenStoreFromCodeEditor", (() => {
          oJ("store")
        })), (0, UJ.useEffect)((() => {
          const JJ = iJ.current;
          null === JJ || "ls" === JJ && ("makeReport" === BJ || "makeDiscordReport" === BJ) || "store" === JJ && null !== tJ || (iJ.current = null, null === BJ && null === tJ ? hJ ? (LJ.current = cZ.current, nJ.i.Uf("EditLobbyCode", GJ)) : nJ.i.Uf("EditCodeBlock", {
            pos: GJ,
            canChangePos: rJ.current
          }) : (0, Xe.z)())
        }), [BJ, tJ, hJ, GJ]), (0, UJ.useEffect)((() => {
          if (FJ) return () => {
            LJ.current = null
          }
        }), [FJ]);
        const [lJ, Jc] = function() {
          const [JJ, cJ] = (0, UJ.useState)(Me);
          return (0, KJ.i)("CodeEditorAiHelperShown", (JJ => {
            cJ(JJ)
          })), [JJ, (0, UJ.useCallback)((JJ => {
            Me = JJ, nJ.i.Uf("CodeEditorAiHelperShown", JJ)
          }), [])]
        }(), [cc, Zc] = (0, UJ.useState)(null), [Fc, Uc] = (0, UJ.useState)([]), [ec, Xc] = (0, UJ.useState)(0), [Ac, qc] = (0, UJ.useState)(0), [jc, Yc] = (0, UJ.useState)(""), hc = (0, UJ.useRef)(null), [Dc, nc] = (0, UJ.useState)(hJ ? Qe.i : null), Gc = hJ || null !== GJ, fc = (0, qJ.f)("canEditCode"), xc = (0, qJ.f)("canUseDevCreativeItems"), rc = (0, ee.i)("welcome"), vc = (0, ee.i)("docsOverview"), mc = vc ? "docsOverview" : "welcome", Qc = null !== vc && void 0 !== vc ? vc : rc, Ec = (0, ee.i)("aiHelperOverview"), Vc = Ec ? "aiHelperOverview" : "welcome", Kc = null !== Ec && void 0 !== Ec ? Ec : rc, yc = (0, UJ.useRef)(!1), Sc = (0, UJ.useRef)(!1), Ic = (0, UJ.useRef)(null), [Mc, bc] = (0, UJ.useState)(""), [Wc, gc] = (0, UJ.useState)(!1), [Hc, Pc] = (0, UJ.useState)(null), kc = (0, SJ.f)("connectedGame"), pc = hJ && fc && "classic" === kc.gameNameWithVariation && !(0, wc.N)(kc.lobbyName), [dc, zc] = (0, UJ.useState)(null), [Nc, Oc] = (0, UJ.useState)({
          [rU.g]: ""
        }), [Tc, Cc] = (0, UJ.useState)({
          assets: {},
          revision: 0
        }), uc = (0, UJ.useRef)(Tc), ic = (0, UJ.useCallback)((JJ => {
          var cJ;
          JJ.revision < uc.current.revision || (uc.current = JJ, Cc(JJ), EJ(JJ.startupError ? `Schematics could not load: ${JJ.startupError}` : ""), null === (cJ = GZ.current) || void 0 === cJ || cJ.onLobbyFilesChanged({
            ...qZ.current,
            ...(0, bU.j)(JJ.assets)
          }))
        }), []), [Rc, Lc] = (0, UJ.useState)(rU.g), [ac, Bc] = (0, UJ.useState)(null), [tc, oc] = (0, UJ.useState)(null), lc = (0, UJ.useRef)(!1), JZ = (0, UJ.useRef)(null), cZ = (0, UJ.useRef)(Rc);
        cZ.current = Rc;
        const ZZ = (0, UJ.useRef)(ac);
        ZZ.current = ac;
        const FZ = ac ? null : Hc,
          eZ = FZ && !FZ.engineLocked ? FZ.worldCodeEngine : null,
          AZ = (0, UJ.useRef)(tc);
        AZ.current = tc;
        const qZ = (0, UJ.useRef)(Nc);
        qZ.current = Nc;
        const jZ = (0, UJ.useRef)(null),
          YZ = (0, UJ.useRef)(null),
          [hZ, DZ] = (0, UJ.useState)(!1),
          sZ = (0, NU.q)(),
          nZ = (0, UJ.useRef)([]),
          GZ = (0, UJ.useRef)(null),
          fZ = (0, UJ.useRef)(null),
          xZ = (0, UJ.useRef)(null);

        function rZ(JJ) {
          mJ(JJ), clearTimeout(Ic.current), Ic.current = setTimeout((() => {
            mJ({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const vZ = (0, UJ.useCallback)((function() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            lc.current && JZ.current && (jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.Leave,
              cJ: (0, vU.x)(JZ.current),
              JA: !!JJ || null
            }), lc.current = !1, JZ.current = null), zc(null)
          }), []),
          mZ = (0, UJ.useCallback)((JJ => {
            const cJ = {
              kind: "lobby",
              path: JJ
            };
            JZ.current = cJ, Lc(JJ), DJ.current = "", jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.Join,
              cJ: (0, vU.x)(cJ)
            }), lc.current = !0
          }), []),
          QZ = (0, UJ.useCallback)((JJ => {
            var cJ;
            const ZJ = null === (cJ = fZ.current) || void 0 === cJ ? void 0 : cJ.collabState;
            return ZJ && "lobby" === ZJ.docKey.kind && ZJ.docKey.path === JJ && cZ.current === JJ ? Promise.resolve({
              doc: ZJ.doc,
              version: ZJ.version,
              clientID: ZJ.clientID,
              docKey: ZJ.docKey,
              httpConfig: ZJ.httpConfig
            }) : new Promise(((cJ, ZJ) => {
              const FJ = setTimeout((() => {
                  nZ.current = nZ.current.filter((JJ => JJ !== UJ)), ZJ(new Error(`Timed out joining ${JJ}`))
                }), 15e3),
                UJ = ZJ => {
                  "lobby" === ZJ.docKey.kind && ZJ.docKey.path === JJ && (clearTimeout(FJ), nZ.current = nZ.current.filter((JJ => JJ !== UJ)), cJ(ZJ))
                };
              nZ.current.push(UJ), cZ.current !== JJ ? (vZ(!0), mZ(JJ)) : lc.current || mZ(JJ)
            }))
          }), [mZ, vZ]),
          EZ = (0, UJ.useCallback)((async function(JJ, cJ) {
            let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const FJ = Date.now();
            let UJ = JJ in qZ.current;
            for (; UJ !== cJ;) {
              if (Date.now() - FJ > ZJ) throw new Error(`Timed out waiting for lobby path ${JJ} present=${cJ}`);
              await (0, wF.X)(50), UJ = JJ in qZ.current
            }
          }), []),
          VZ = (0, UJ.useCallback)((JJ => {
            const cJ = qZ.current,
              ZJ = rU.g in cJ && rU.k in cJ;
            if (!(0, mU.j)(JJ) || ZJ) {
              if (cZ.current === JJ) {
                var FJ;
                const UJ = ZJ && (0, mU.j)(JJ) ? JJ === rU.g ? rU.k : rU.g : null !== (FJ = (0, mU.e)(cJ)) && void 0 !== FJ ? FJ : rU.g;
                YZ.current = {
                  fromPath: JJ,
                  toPath: UJ
                }, Lc(UJ)
              }
              jJ.gameBridge.send("sendCodeCollab", {
                JJ: vU.e.DeleteFile,
                cJ: (0, vU.x)({
                  kind: "lobby",
                  path: cZ.current
                }),
                cA: JJ
              })
            }
          }), []),
          KZ = (0, UJ.useCallback)((JJ => {
            LJ.current = null, Bc(null), oc(null), !hJ || JJ === cZ.current && lc.current || (vZ(!0), mZ(JJ))
          }), [hJ, vZ, mZ]),
          yZ = (0, UJ.useCallback)(((JJ, cJ) => {
            const ZJ = IU.g[JJ],
              FJ = ZJ && cJ in ZJ.files ? cJ : "index.ts";
            if (JJ !== ZZ.current || FJ !== AZ.current) {
              var UJ;
              if (JJ !== ZZ.current) null === (UJ = GZ.current) || void 0 === UJ || UJ.stopContinuousSync(), vZ(!0);
              Bc(JJ), oc(FJ)
            }
          }), [vZ]),
          SZ = (0, UJ.useCallback)((JJ => {
            var cJ;
            const ZJ = cZ.current,
              FJ = qZ.current[ZJ],
              UJ = lc.current && !ZZ.current && ZJ in JJ && void 0 !== FJ ? {
                ...JJ,
                [ZJ]: FJ
              } : JJ;
            Oc(UJ);
            const eJ = jZ.current;
            if (eJ && eJ in JJ) jZ.current = null, eJ !== cZ.current && KZ(eJ);
            else if (!(cZ.current in JJ) && lc.current && !ZZ.current) {
              var XJ;
              KZ(null !== (XJ = (0, mU.e)(JJ)) && void 0 !== XJ ? XJ : rU.g)
            }
            null === (cJ = GZ.current) || void 0 === cJ || cJ.onLobbyFilesChanged({
              ...UJ,
              ...(0, bU.j)(uc.current.assets)
            })
          }), [KZ]),
          IZ = (0, UJ.useCallback)((() => Ie(cZ.current).then((async JJ => {
            if (!lc.current || !JJ.files) return null;
            SZ(JJ.files);
            const cJ = await BU({
              action: "state"
            });
            return ic(cJ), {
              ...JJ.files,
              ...(0, bU.j)(cJ.assets)
            }
          })).catch((JJ => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", JJ), rZ({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [SZ, ic]),
          MZ = () => {
            AJ()
          };
        (0, UJ.useEffect)((() => {
          if (EJ(""), !FJ || !hJ) return;
          let JJ = !1;
          return uc.current = {
            assets: {},
            revision: 0
          }, Cc(uc.current), BU({
            action: "state"
          }).then((cJ => {
            JJ || ic(cJ)
          })).catch((cJ => {
            console.error("Could not load project schematics", cJ), JJ || EJ("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            JJ = !0
          }
        }), [FJ, hJ, ic]);
        const bZ = (0, UJ.useCallback)((() => {
            JZ.current && jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.Submit,
              cJ: (0, vU.x)(JZ.current)
            })
          }), []),
          wZ = (0, UJ.useCallback)((() => {
            if (!JZ.current || "lobby" !== JZ.current.kind) return;
            const JJ = Mc.trim();
            (0, QU.o)(JJ) ? (jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.ReloadAsVariation,
              cJ: (0, vU.x)(JZ.current),
              eJ: JJ
            }), gc(!1)) : rZ({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Mc]),
          WZ = (0, UJ.useCallback)((JJ => {
            jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.SetEngine,
              cJ: (0, vU.x)({
                kind: "lobby",
                path: cZ.current
              }),
              eJ: JJ
            })
          }), []),
          gZ = (0, UJ.useCallback)((JJ => {
            if (!ZZ.current && fc && (rJ.current || hJ)) {
              if (hJ) {
                var cJ;
                const ZJ = (0, mU.r)(qZ.current, cZ.current),
                  FJ = Math.min(UZ.w, Math.max(0, UZ.C - ZJ)),
                  UJ = JJ.slice(0, FJ);
                return DJ.current = UJ, Oc((JJ => ({
                  ...JJ,
                  [cZ.current]: UJ
                }))), void(null === (cJ = GZ.current) || void 0 === cJ || cJ.onDocTextChanged(cZ.current, UJ))
              }
              DJ.current = JJ, Yc(JJ)
            }
          }), [fc, hJ]);
        (0, KJ.i)("EditLobbyCode", (JJ => {
          var cJ;
          WJ.featureFlags.canSeePlayerWrittenText && hJ && (vZ(), xJ(JJ), DJ.current = "", Oc({
            [rU.g]: ""
          }), Pc(null), Lc(rU.g), Bc(null), oc(null), jZ.current = null, YZ.current = null, null === (cJ = GZ.current) || void 0 === cJ || cJ.stopContinuousSync(), eJ(), mZ(rU.g))
        })), (0, KJ.i)("EditCodeBlock", (JJ => {
          let {
            pos: cJ,
            canChangePos: ZJ
          } = JJ;
          if (WJ.featureFlags.canSeePlayerWrittenText && !hJ)
            if (vZ(), null !== cJ && (cJ = [...cJ]), xJ(cJ), rJ.current = ZJ, null !== cJ) {
              DJ.current = "", Yc(""), eJ();
              const JJ = {
                  kind: "codeBlock",
                  pos: cJ
                },
                FJ = (0, vU.x)(JJ);
              hc.current !== FJ && (hc.current = FJ, Uc([]), qc(ec)), nc((0, Qe.e)(FJ, [cJ[0], cJ[1], cJ[2]], !!ZJ)), JZ.current = JJ, jJ.gameBridge.send("sendCodeCollab", {
                JJ: vU.e.Join,
                cJ: (0, vU.x)(JJ)
              }), lc.current = !0
            } else FJ && AJ()
        })), (0, KJ.i)("codeCollabRejoin", (JJ => {
          const cJ = JZ.current ? (0, vU.x)(JZ.current) : null;
          cJ && JJ.docKey === cJ && (DJ.current = JJ.doc, hJ || Yc(JJ.doc), zc((cJ => cJ ? {
            ...cJ,
            doc: JJ.doc,
            version: JJ.version,
            clientID: (0, SU.b)()
          } : cJ)))
        })), (0, KJ.i)("codeCollab", (JJ => {
          var cJ;
          const ZJ = JZ.current ? (0, vU.x)(JZ.current) : null;
          if (JJ.type === vU.g.LobbyFilesChanged && hJ) {
            if ("string" !== typeof JJ.files) return void IZ();
            try {
              SZ(JSON.parse(JJ.files))
            } catch (jJ) {
              console.error("[CodeCollab] Failed to parse lobby files", jJ), IZ()
            }
            return
          }
          if (JJ.type === vU.g.EngineSettings && hJ) return void Pc(Je(JJ.engineSettings));
          const UJ = JJ.type === vU.g.Joined ? (0, vU.m)(JJ.docKey) : null,
            eJ = hJ && "lobby" === (null === (cJ = JZ.current) || void 0 === cJ ? void 0 : cJ.kind) && (0, mU.j)(JZ.current.path) && "lobby" === (null === UJ || void 0 === UJ ? void 0 : UJ.kind) && (0, mU.j)(UJ.path);
          if (!ZJ || JJ.docKey === ZJ || eJ)
            if (JJ.type !== vU.g.ForceClose) {
              if (FJ)
                if (JJ.type === vU.g.Joined) {
                  var XJ;
                  const YJ = JSON.parse(JJ.peers),
                    sJ = JJ.existingCursors ? JSON.parse(JJ.existingCursors) : [],
                    nJ = (0, SU.b)(),
                    fJ = aU(),
                    {
                      gsUrl: xJ,
                      gameNameWithVariation: rJ,
                      lobbyName: vJ
                    } = fJ,
                    QJ = null !== (XJ = (0, vU.m)(JJ.docKey)) && void 0 !== XJ ? XJ : JZ.current;
                  QJ && (JZ.current = QJ, "lobby" === QJ.kind && (Lc(QJ.path), cZ.current = QJ.path));
                  const EJ = QJ || (hJ ? {
                    kind: "lobby",
                    path: cZ.current
                  } : {
                    kind: "codeBlock",
                    pos: GJ
                  });

                  function VJ(cJ) {
                    var ZJ, FJ;
                    if (!lc.current) return;
                    const UJ = null !== (ZJ = cJ.code) && void 0 !== ZJ ? ZJ : "",
                      eJ = null !== (FJ = cJ.collabVersion) && void 0 !== FJ ? FJ : 0;
                    DJ.current = UJ, hJ || Yc(UJ), hJ && cJ.files ? Oc(cJ.files) : hJ && Oc((JJ => ({
                      ...JJ,
                      [cZ.current]: UJ
                    })));
                    const XJ = {
                      doc: UJ,
                      version: eJ,
                      clientID: nJ,
                      docKey: EJ,
                      peers: YJ,
                      editorCount: JJ.editorCount,
                      existingCursors: sJ,
                      httpConfig: fJ
                    };
                    if (zc(XJ), "lobby" === EJ.kind) {
                      var AJ;
                      const JJ = {
                        doc: UJ,
                        version: eJ,
                        clientID: nJ,
                        docKey: EJ,
                        httpConfig: fJ
                      };
                      for (const cJ of [...nZ.current]) cJ(JJ);
                      null === (AJ = GZ.current) || void 0 === AJ || AJ.startWhenReady()
                    }
                    cJ.canSeeCode ? (clearTimeout(Ic.current), mJ({
                      message: null,
                      type: null
                    })) : function(JJ) {
                      clearTimeout(Ic.current), mJ(JJ)
                    }(we);
                    const qJ = LJ.current;
                    LJ.current = null, hJ && qJ && cJ.files && qJ in cJ.files && qJ !== cZ.current && KZ(qJ)
                  }
                  hJ ? Ie(cZ.current).then(VJ).catch((JJ => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", JJ), vZ()
                  })) : (0, xU.postJsonWithMetricsCookiesAndJsonResponse)(`${xJ}/code/get-code-block`, fU.Sj["get-code-block"].toBuffer({
                    gameNameWithVariation: rJ,
                    lobbyName: vJ,
                    pos: GJ
                  }), {
                    retries: 1
                  }).then(VJ).catch((JJ => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", JJ), vZ()
                  }))
                } else if (JJ.type === vU.g.Presence) {
                if (!ZJ) return;
                const KJ = JSON.parse(JJ.peers);
                zc((cJ => cJ ? {
                  ...cJ,
                  peers: KJ,
                  editorCount: JJ.editorCount
                } : cJ))
              }
            } else {
              var qJ;
              if (!ZJ) return;
              const yJ = JZ.current;
              lc.current = !1, JZ.current = null, zc(null);
              if (!hJ || "close" === JJ.updates) return (0, me.g)(), void(FJ && AJ());
              if (!FJ) return;
              const SJ = qZ.current,
                IJ = YZ.current;
              YZ.current = null;
              const MJ = "lobby" === (null === yJ || void 0 === yJ ? void 0 : yJ.kind) && yJ.path === (null === IJ || void 0 === IJ ? void 0 : IJ.fromPath),
                bJ = IJ && (MJ || IJ.toPath in SJ || (0, mU.j)(IJ.toPath)) ? IJ.toPath : cZ.current in SJ ? cZ.current : null !== (qJ = (0, mU.e)(SJ)) && void 0 !== qJ ? qJ : rU.g;
              mZ(bJ)
            }
        })), (0, KJ.i)("refetchCode", (() => {
          WJ.featureFlags.canSeePlayerWrittenText && FJ && lc.current && (fc || (vZ(), hJ ? nJ.i.Uf("EditLobbyCode", GJ) : nJ.i.Uf("EditCodeBlock", {
            pos: GJ,
            canChangePos: rJ.current
          })))
        }));
        const HZ = (0, UJ.useCallback)((() => {
            FJ && (pJ(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [FJ]),
          PZ = (0, UJ.useCallback)((() => {
            pJ(!1)
          }), []);
        (0, UJ.useEffect)((() => {
          FJ && fc && ("docsButton" === Qc && kJ ? (0, Xe.f)("docsButton") : Qc && Xe.g.includes(Qc) && !kJ && (pJ(!0), Jc(!1)))
        }), [FJ, fc, Qc, kJ, Jc]);
        const kZ = (0, UJ.useCallback)((() => {
          Jc(!1)
        }), [Jc]);
        (0, UJ.useEffect)((() => {
          FJ && fc && Gc && ("aiHelperButton" === Kc && lJ ? (0, Xe.f)("aiHelperButton") : Kc && Xe.c.includes(Kc) && !lJ && (Jc(!0), pJ(!1)))
        }), [FJ, fc, Gc, Kc, lJ, Jc]), (0, UJ.useEffect)((() => {
          if (!FJ || !fc) return;
          const JJ = hJ ? "worldCode" : "codeBlock";
          return (0, Xe.D)(JJ, !0), () => {
            (0, Xe.D)(JJ, !1)
          }
        }), [FJ, fc, hJ]), (0, UJ.useEffect)((() => {
          if (FJ) return () => {
            yc.current ? yc.current = !1 : (0, Xe.z)()
          }
        }), [FJ]), (0, UJ.useEffect)((() => {
          (0, Xe.F)("exportButton", !!xc)
        }), [xc]);
        const {
          t: pZ
        } = (0, aJ.F)(), dZ = !lJ && ec > Ac, zZ = dZ ? sJ.I : sJ.y, NZ = (0, UJ.useCallback)(((JJ, cJ) => {
          nJ.i.Uf("CodeEditorGoToLine", {
            path: JJ,
            line: cJ
          }), KZ(JJ)
        }), [KZ]), OZ = (0, UJ.useCallback)((JJ => {
          xZ.current = JJ
        }), []), TZ = function(JJ, cJ) {
          const [ZJ, FJ] = (0, UJ.useState)(null);
          return (0, UJ.useEffect)((() => {
            if (!cJ) return void FJ(null);
            let ZJ = !1;
            return zU(JJ).then((JJ => {
              ZJ || FJ(JJ)
            }), (JJ => {
              console.error("[CodeEditor] could not collect the imported plugins", JJ), ZJ || FJ(null)
            })), () => {
              ZJ = !0
            }
          }), [JJ, cJ]), ZJ
        }(Nc, FJ);
        (0, UJ.useEffect)((() => {
          TZ && ac && !TZ.includes(ac) && (Bc(null), oc(null), hJ && !lc.current && mZ(cZ.current))
        }), [ac, TZ, hJ, mZ]), fZ.current = {
          collabState: dc,
          ensureJoinedPath: QZ,
          waitForLobbyPath: EZ,
          pullLobbyFiles: IZ,
          t: pZ,
          canEditCode: !!fc
        }, GZ.current || (GZ.current = new RU({
          getLobbyFiles: () => ({
            ...qZ.current,
            ...(0, bU.j)(uc.current.assets)
          }),
          deleteSchematic: async JJ => {
            const cJ = await BU({
              action: "remove",
              path: JJ,
              expectedRevision: uc.current.revision
            });
            ic(cJ)
          },
          getActivePath: () => cZ.current,
          getCollabSnapshot: () => {
            var JJ;
            if (ZZ.current) return null;
            const cJ = null === (JJ = fZ.current) || void 0 === JJ ? void 0 : JJ.collabState;
            return cJ ? {
              doc: cJ.doc,
              version: cJ.version,
              clientID: cJ.clientID,
              docKey: cJ.docKey,
              httpConfig: cJ.httpConfig
            } : null
          },
          replaceActiveDoc: (JJ, cJ) => {
            var ZJ, FJ;
            return null !== (ZJ = null === (FJ = xZ.current) || void 0 === FJ ? void 0 : FJ.call(xZ, JJ, cJ)) && void 0 !== ZJ && ZJ
          },
          ensureJoined: JJ => fZ.current.ensureJoinedPath(JJ),
          createFile: (JJ, cJ) => {
            !1 !== (null === cJ || void 0 === cJ ? void 0 : cJ.focus) && (jZ.current = JJ), jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.CreateFile,
              cJ: (0, vU.x)({
                kind: "lobby",
                path: cZ.current
              }),
              cA: JJ
            })
          },
          renameFile: (JJ, cJ) => {
            const ZJ = (0, vU.x)({
              kind: "lobby",
              path: cZ.current
            });
            cZ.current === JJ && (YZ.current = {
              fromPath: JJ,
              toPath: cJ
            }, Lc(cJ)), jJ.gameBridge.send("sendCodeCollab", {
              JJ: vU.e.RenameFile,
              cJ: ZJ,
              cA: JJ,
              ZA: cJ
            })
          },
          deleteFile: JJ => {
            VZ(JJ)
          },
          waitForLobbyPath: (JJ, cJ, ZJ) => fZ.current.waitForLobbyPath(JJ, cJ, ZJ),
          pullLobbyFiles: () => fZ.current.pullLobbyFiles(),
          setMessage: (JJ, cJ) => {
            rZ({
              message: JJ,
              type: cJ
            })
          },
          onUnlinked: () => {
            DZ(!1)
          },
          t: JJ => fZ.current.t(JJ),
          canEditCode: () => fZ.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: JJ,
              lobbyName: cJ
            } = jJ.gameBridge.latest("connectedGame");
            return (0, NU.h)(JJ, cJ)
          }
        }));
        const CZ = (0, UJ.useCallback)((async JJ => {
            const cJ = GZ.current;
            if (!cJ) return !1;
            try {
              return await cJ.writeLobbyFiles(JJ)
            } catch (ZJ) {
              return console.error("World Code AI: couldn't write the change", ZJ), !1
            }
          }), []),
          uZ = (0, UJ.useCallback)((async JJ => {
            var cJ, ZJ;
            const FJ = null === (cJ = JJ.find((JJ => JJ.path === ve.d))) || void 0 === cJ ? void 0 : cJ.text,
              UJ = JZ.current;
            return void 0 !== FJ && "codeBlock" === (null === UJ || void 0 === UJ ? void 0 : UJ.kind) && (!(null === (ZJ = xZ.current) || void 0 === ZJ || !ZJ.call(xZ, (0, vU.x)(UJ), FJ)) && (DJ.current = FJ, Yc(FJ), !0))
          }), []),
          iZ = (0, UJ.useCallback)((async () => {
            try {
              var JJ, cJ;
              const ZJ = await Ie(rU.g);
              return !1 === ZJ.canSeeCode ? null : null !== (JJ = ZJ.files) && void 0 !== JJ ? JJ : {
                [rU.g]: null !== (cJ = ZJ.code) && void 0 !== cJ ? cJ : ""
              }
            } catch (ZJ) {
              return console.error("World Code AI: couldn't read World Code for a code block", ZJ), null
            }
          }), []),
          RZ = (0, UJ.useMemo)((() => ({
            [ve.d]: jc
          })), [jc]),
          LZ = (0, UJ.useCallback)(((JJ, cJ) => {
            nJ.i.Uf("CodeEditorGoToLine", {
              path: ve.d,
              line: cJ
            })
          }), []);
        (0, UJ.useEffect)((() => {
          lJ && FJ && qc(ec)
        }), [lJ, FJ, ec]);
        const aZ = (0, UJ.useCallback)((() => {
            var JJ, cJ;
            bZ();
            const ZJ = (0, WJ.isTouchscreen)() ? "open World Code again" : `press ${null!==(JJ=null===(cJ=XZ.z.OpenCodeEditor)||void 0===cJ?void 0:cJ[0])&&void 0!==JJ?JJ:"F8"}`,
              FJ = hJ ? `\ud83e\udd16 Try out your change, then ${ZJ} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            nJ.i.Uf("chat", {
              content: [{
                str: FJ,
                style: {
                  color: yJ.D.cyanUiText
                }
              }]
            })
          }), [bZ, hJ]),
          BZ = (0, UJ.useCallback)((JJ => {
            const cJ = GJ,
              ZJ = rJ.current;
            hJ || !cJ || jJ.gameBridge.lookup("codeBlockClickable", cJ) ? (0, me.i)(JJ, {
              submit: () => {
                bZ(), nJ.i.Uf("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: yJ.D.cyanUiText
                    }
                  }]
                }), !hJ && cJ && setTimeout((() => {
                  jJ.gameBridge.send("clickCodeBlock", cJ)
                }), 1e3)
              },
              reopen: () => {
                (0, NJ.l)() || (hJ ? nJ.i.Uf("EditLobbyCode", cJ) : nJ.i.Uf("EditCodeBlock", {
                  pos: cJ,
                  canChangePos: ZJ
                }))
              }
            }) : aZ()
          }), [bZ, hJ, GJ, aZ]),
          tZ = (0, UJ.useCallback)((() => {
            Jc(!1)
          }), [Jc]),
          oZ = (0, UJ.useRef)(MZ);
        oZ.current = MZ;
        const lZ = (0, UJ.useCallback)((function(JJ) {
            let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            nJ.i.Uf("WorldCodeAiDraft", {
              text: JJ,
              send: cJ
            }), oZ.current(), nJ.i.Uf("EditLobbyCode", GJ)
          }), [GJ]),
          JF = (0, UJ.useCallback)((JJ => {
            oZ.current(), JJ.codeBlock ? nJ.i.Uf("EditCodeBlock", {
              pos: [...JJ.pos],
              canChangePos: JJ.canChangePos
            }) : nJ.i.Uf("EditLobbyCode", GJ)
          }), [GJ]);
        (0, KJ.i)("WorldCodeAiDraft", (JJ => {
          hJ && (Zc(JJ), Jc(!0))
        }));
        const cF = !!fc && !!Qc && Xe.g.includes(Qc);
        (0, UJ.useEffect)((() => {
          FJ && lJ && Gc && !cF && pJ(!1)
        }), [FJ, lJ, Gc, cF]);
        const ZF = (0, UJ.useCallback)((() => {
            Zc(null)
          }), []),
          [FF, UF] = (0, UJ.useState)(null);
        (0, KJ.i)("WorldCodeAiSelection", (JJ => {
          FJ && (UF(JJ), Jc(!0), pJ(!1))
        }));
        const eF = (0, UJ.useCallback)((() => {
          UF(null)
        }), []);
        (0, KJ.i)("chat", (JJ => {
          let {
            content: cJ
          } = JJ;
          if (!hJ && null === hc.current) return;
          const ZJ = Array.isArray(cJ) ? cJ : [cJ],
            FJ = ZJ.some((JJ => {
              var cJ;
              return (null === JJ || void 0 === JJ || null === (cJ = JJ.style) || void 0 === cJ ? void 0 : cJ.color) === yJ.D.redUiText
            })),
            UJ = ZJ.map((JJ => {
              var cJ;
              const ZJ = null !== (cJ = null === JJ || void 0 === JJ ? void 0 : JJ.str) && void 0 !== cJ ? cJ : JJ;
              return "string" === typeof ZJ ? ZJ : ""
            })).join("");
          FJ && /world code|error/i.test(UJ) && (Uc((JJ => [...JJ, UJ].slice(-10))), Xc((JJ => JJ + 1)), (0, me.d)(UJ))
        })), (0, UJ.useEffect)((() => {
          if (!FJ || !hJ || !sZ) return;
          let JJ = !1;
          return (async (cJ, ZJ) => {
            const FJ = await (null === (cJ = GZ.current) || void 0 === cJ ? void 0 : cJ.tryRestoreHandle());
            !JJ && FJ && (DZ(!0), null === (ZJ = GZ.current) || void 0 === ZJ || ZJ.startWhenReady())
          })(), () => {
            JJ = !0
          }
        }), [FJ, hJ, sZ]), (0, UJ.useEffect)((() => {
          var JJ;
          FJ || (null === (JJ = GZ.current) || void 0 === JJ || JJ.stopContinuousSync(), vZ(!1), Sc.current && (Sc.current = !1, jJ.gameBridge.send("sendChatMessage", {
            JY: "//export",
            channelName: null
          })))
        }), [FJ, vZ]);
        const XF = (0, UJ.useCallback)((async () => {
            if (sZ && GZ.current) try {
              if (!await GZ.current.linkFolder()) return;
              DZ(!0), await GZ.current.startWhenReady()
            } catch (JJ) {
              console.error("[WorldCodeDirectorySync] Link failed", JJ), rZ({
                message: pZ("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [sZ, pZ]),
          AF = (0, UJ.useCallback)((async () => {
            GZ.current && await GZ.current.unlinkFolder()
          }), []),
          qF = (0, UJ.useCallback)((() => {
            sZ ? hZ ? AF() : XF() : VU.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [sZ, hZ, XF, AF]);
        return (0, YJ.jsxs)(XJ.c, {
          className: sc()("CodeEditorBg", {
            CodeEditorLight: wJ
          }),
          close: MZ,
          escDoesExit: !0,
          show: FJ,
          togglePointerLock: !1,
          globallyUniqueKey: hJ ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, YJ.jsx)(ee.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: pZ("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!fc && !hJ
          }), (0, YJ.jsx)(ee.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, YJ.jsxs)(YJ.Fragment, {
              children: [(0, YJ.jsx)("p", {
                children: pZ("codeEditor:tutorialWorldCodeWelcome")
              }), (0, YJ.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, YJ.jsx)("li", {
                  children: pZ("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, YJ.jsx)("li", {
                  children: pZ("codeEditor:tutorialWorldCodeUseReact")
                }), (0, YJ.jsx)("li", {
                  children: pZ("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!fc && hJ
          }), (0, YJ.jsx)("div", {
            className: "CodeEditorTitle",
            children: hJ ? "World Code" : "Code Block"
          }), (0, YJ.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, YJ.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, YJ.jsx)(RJ.g, {
                tooltipInner: pZ(xc ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: xc ? void 0 : 0,
                hideTooltip: "exportButton" === rc,
                children: (0, YJ.jsx)(ee.e, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: pZ("codeEditor:tutorialExport"),
                  enabled: !!fc,
                  children: (0, YJ.jsx)(sJ.m, {
                    className: "CodeEditorButton",
                    disabled: !xc,
                    onClick: () => {
                      "exportButton" === rc && ((0, Xe.f)("exportButton"), yc.current = !0), Sc.current = !0, MZ()
                    },
                    padDestructive: !0,
                    children: pZ("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, YJ.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [fc && (0, YJ.jsx)(RJ.g, {
                tooltipInner: pZ("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === rc,
                children: (0, YJ.jsx)(ee.e, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: pZ("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, YJ.jsx)(sJ.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: pZ("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, Xe.f)("helpButton"), VU.NotificationProvider.showCustomPopup({
                        body: JJ => (0, YJ.jsx)(Ae, {
                          close: JJ
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, YJ.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, YJ.jsx)(fJ.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, YJ.jsx)(RJ.g, {
                tooltipInner: pZ("codeEditor:closeTooltip"),
                children: (0, YJ.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    MZ()
                  },
                  children: (0, YJ.jsx)(sJ.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, YJ.jsx)(yU, {
            peers: null !== (cJ = null === dc || void 0 === dc ? void 0 : dc.peers) && void 0 !== cJ ? cJ : []
          }), (0, YJ.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [dJ && uJ && (0, YJ.jsx)(se, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, YJ.jsx)(De, {
                inputRef: TJ,
                close: () => {
                  OJ(!1)
                }
              })
            }), hJ && (0, YJ.jsx)(gU, {
              schematics: Tc.assets,
              onManageSchematic: JJ => {
                fc && VU.NotificationProvider.showCustomPopup({
                  body: cJ => (0, YJ.jsx)(lU, {
                    initialPath: JJ,
                    onChanged: ic,
                    onClose: cJ
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Nc,
              activePath: Rc,
              canEdit: !!fc,
              directoryLinked: hZ,
              pluginNames: null !== TZ && void 0 !== TZ ? TZ : be,
              activePluginName: ac,
              activePluginFile: tc,
              onSelect: KZ,
              onSelectPlugin: yZ,
              onToggleDirectorySync: qF,
              onCreate: JJ => {
                jZ.current = JJ, jJ.gameBridge.send("sendCodeCollab", {
                  JJ: vU.e.CreateFile,
                  cJ: (0, vU.x)({
                    kind: "lobby",
                    path: cZ.current
                  }),
                  cA: JJ
                })
              },
              onRename: (JJ, cJ) => {
                cZ.current === JJ && (YZ.current = {
                  fromPath: JJ,
                  toPath: cJ
                }, Lc(cJ)), jJ.gameBridge.send("sendCodeCollab", {
                  JJ: vU.e.RenameFile,
                  cJ: (0, vU.x)({
                    kind: "lobby",
                    path: cZ.current
                  }),
                  cA: JJ,
                  ZA: cJ
                })
              },
              onRenameFolder: (JJ, cJ) => {
                const [ZJ] = (0, mU.o)([cZ.current], JJ, cJ);
                ZJ && (YZ.current = {
                  fromPath: ZJ[0],
                  toPath: ZJ[1]
                }, Lc(ZJ[1])), jJ.gameBridge.send("sendCodeCollab", {
                  JJ: vU.e.RenameFolder,
                  cJ: (0, vU.x)({
                    kind: "lobby",
                    path: cZ.current
                  }),
                  cA: JJ,
                  ZA: cJ
                })
              },
              onDelete: VZ
            }), (0, YJ.jsx)("div", {
              className: sc()("CodeEditorMessage", {
                CodeEditorMessageHidden: !VJ.message,
                CodeEditorMessageSuccess: "success" === VJ.type
              }),
              children: VJ.message && (0, YJ.jsx)("div", {
                className: "CodeEditorMessageText",
                children: VJ.message
              })
            }), (0, YJ.jsx)(UJ.Suspense, {
              fallback: (0, YJ.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, YJ.jsx)(IJ.c, {})
              }),
              children: (0, YJ.jsx)(Ee, {
                isLobbyCode: hJ,
                code: dc ? dc.doc : DJ.current,
                files: hJ ? Nc : void 0,
                activePath: hJ ? Rc : void 0,
                pluginName: ac,
                pluginFile: tc,
                pluginSource: ac && tc ? null === (ZJ = IU.g[ac]) || void 0 === ZJ ? void 0 : ZJ.files[tc] : void 0,
                onChange: gZ,
                canEditCode: fc,
                setTemporaryMessage: rZ,
                close: MZ,
                showTooltips: MJ,
                lightMode: wJ,
                collabState: dc,
                setActiveDocReplacer: OZ,
                showAiHints: Gc && HJ,
                canAiChangeCode: !!fc && (hJ || !!rJ.current),
                onRemoteDocChange: JJ => {
                  var cJ;
                  (DJ.current = JJ, hJ) ? (Oc((cJ => ({
                    ...cJ,
                    [cZ.current]: JJ
                  }))), null === (cJ = GZ.current) || void 0 === cJ || cJ.onDocTextChanged(cZ.current, JJ)) : Yc(JJ)
                }
              })
            }), kJ && (0, YJ.jsx)(se, {
              side: "right",
              defaultWidth: "40%",
              children: (0, YJ.jsx)(UJ.Suspense, {
                fallback: (0, YJ.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, YJ.jsx)(IJ.c, {})
                }),
                children: (0, YJ.jsx)(Ve, {
                  popOutDocs: HZ,
                  hideDocs: PZ,
                  tutorialEnabled: !!fc
                })
              })
            }), lJ && Dc && Gc && (0, YJ.jsx)(se, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, YJ.jsx)(UJ.Suspense, {
                fallback: (0, YJ.jsx)("div", {
                  className: "CodeEditorPanelLoading",
                  children: (0, YJ.jsx)(IJ.c, {})
                }),
                children: (0, YJ.jsx)(Ke, {
                  target: Dc,
                  chatKey: `${kc.gameNameWithVariation}/${kc.lobbyName}/aiHelper`,
                  historyKey: `${kc.gameNameWithVariation}/${kc.lobbyName}/${Dc.key}`,
                  files: Dc.codeBlock ? RZ : Nc,
                  activePath: Dc.codeBlock ? ve.d : Rc,
                  canEdit: !!fc && (Dc.codeBlock ? !!rJ.current : !ac),
                  isLoaded: null !== dc,
                  errors: Fc,
                  errorCount: ec,
                  applyFiles: Dc.codeBlock ? uZ : CZ,
                  submit: aZ,
                  testRun: BZ,
                  close: tZ,
                  goToLine: Dc.codeBlock ? LZ : NZ,
                  openWorldCode: Dc.codeBlock ? lZ : void 0,
                  readWorldCode: Dc.codeBlock ? iZ : void 0,
                  viewChunk: ye,
                  viewGameState: Se,
                  openTarget: fc ? JF : void 0,
                  draft: cc,
                  onDraftUsed: ZF,
                  selection: FF,
                  onSelectionUsed: eF
                }, Dc.key)
              })
            })]
          }), (null === FZ || void 0 === FZ ? void 0 : FZ.fallback) && (0, YJ.jsx)(ce, {
            fallback: FZ.fallback,
            onGoToLine: NZ
          }), (0, YJ.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ(wJ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: pZ(wJ ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  gJ(!wJ)
                },
                children: (0, YJ.jsx)(fJ.c, {
                  name: wJ ? "moon" : "sun-bright"
                })
              })
            }), (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.m, {
                className: "CodeEditorButton",
                onClick: bZ,
                padDefaultFocus: !0,
                children: pZ("codeEditor:submitCode")
              })
            }), (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ(kJ ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Qc || "hideDocsButton" === Qc,
              children: (0, YJ.jsx)(ee.e, {
                tutorial: mc,
                step: kJ ? "hideDocsButton" : "docsButton",
                text: pZ(kJ ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!fc,
                placement: "top",
                waitForClick: !0,
                onPrevious: kJ && "welcome" === mc ? PZ : void 0,
                children: (0, YJ.jsx)(sJ.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, Xe.f)(kJ ? "hideDocsButton" : "docsButton"), pJ(!kJ), Jc(!1)
                  },
                  children: pZ(kJ ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Gc && (0, YJ.jsx)(ee.e, {
              tutorial: Vc,
              step: lJ ? "hideAiHelperButton" : "aiHelperButton",
              text: pZ(lJ ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Vc ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!fc,
              placement: "top",
              waitForClick: !0,
              onPrevious: lJ && "welcome" === Vc ? kZ : void 0,
              children: (0, YJ.jsx)(zZ, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, Xe.f)(lJ ? "hideAiHelperButton" : "aiHelperButton"), Jc(!lJ), pJ(!1)
                },
                children: lJ ? "Hide AI Helper" : dZ ? "Fix error with AI" : "AI Helper"
              })
            }), uJ && (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ(dJ ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.y, {
                className: "CodeEditorButton",
                onClick: () => {
                  CJ.current = !dJ, OJ(!dJ)
                },
                children: pZ(dJ ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  nJ.i.Uf("FormatCode")
                },
                children: pZ("codeEditor:formatCode")
              })
            }), (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(DJ.current).then((() => {
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
                children: pZ("codeEditor:copyCode")
              })
            }), (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ(MJ ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  bJ(!MJ)
                },
                children: pZ(MJ ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !hJ && (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === rc,
              children: (0, YJ.jsx)(ee.e, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: pZ("codeEditor:tutorialWorldCodeButton"),
                enabled: !!fc,
                placement: "top",
                waitForClick: !0,
                children: (0, YJ.jsx)(sJ.y, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === rc && ((0, Xe.f)("worldCodeButton"), yc.current = !0), MZ(), nJ.i.Uf("EditLobbyCode", GJ)
                  },
                  children: pZ("codeEditor:worldCode")
                })
              })
            }), (pc || eZ || Gc) && (0, YJ.jsx)(RJ.g, {
              tooltipInner: pZ("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, YJ.jsx)(sJ.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  gc(!0)
                },
                children: (0, YJ.jsx)(fJ.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), Wc && (0, YJ.jsx)(EU.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              gc(!1)
            },
            body: (0, YJ.jsx)(Ue, {
              engine: eZ,
              onSetEngine: WZ,
              aiHints: Gc ? {
                shown: HJ,
                setShown: PJ
              } : null,
              variation: pc ? {
                name: Mc,
                setName: bc,
                reload: wZ
              } : null
            })
          })]
        })
      })),
      ge = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function He(JJ) {
      return "inventory" === JJ
    }
    const Pe = (0, UJ.memo)((function() {
      const {
        openEverythingMenuName: JJ,
        openInGameMenuName: cJ
      } = (0, zJ.j)(["openEverythingMenuName", "openInGameMenuName"]), ZJ = (0, SJ.f)("fullInventory"), eJ = (0, UJ.useRef)(null), XJ = (0, Rc.l)();
      (0, KJ.i)("toggleMenu", (JJ => {
        var cJ;
        if (!XJ.shown) return;
        const ZJ = zJ.d.get("openInGameMenuName");
        let FJ = JJ.split("|")[0];
        const UJ = null !== (cJ = JJ.split("|")[1]) && void 0 !== cJ ? cJ : null;
        ("closeCurrentMenu" === UJ && ZJ || FJ === ZJ) && (eJ.current = null, FJ = null);
        const AJ = "closeCurrentMenu" === UJ ? null : UJ;
        eJ.current !== AJ && (eJ.current = AJ), null !== FJ && (0, eU.h)("InGameMenu", {
          keepsMovement: He(FJ)
        }), zJ.d.set({
          openInGameMenuName: FJ
        })
      }));
      const AJ = (0, UJ.useCallback)((JJ => () => {
          nJ.i.Uf("toggleMenu", JJ)
        }), []),
        qJ = (0, UJ.useRef)({
          cantCrouchIfNotFullscreen: AJ("cantCrouchIfNotFullscreen"),
          makeReport: AJ("makeReport"),
          makeDiscordReport: AJ("makeDiscordReport"),
          editBook: AJ("editBook"),
          editNameTag: AJ("editNameTag"),
          inventory: AJ("inventory"),
          inviteLink: AJ("inviteLink"),
          writeOnBoard: AJ("writeOnBoard"),
          codeEditor: AJ("codeEditor"),
          lobbyCodeEditor: AJ("lobbyCodeEditor"),
          customLobbyBlockEditor: AJ("customLobbyBlockEditor"),
          ironChestPasskeyInput: AJ("ironChestPasskeyInput"),
          petUi: AJ("petUi")
        }),
        jJ = (0, UJ.useCallback)((() => {
          zJ.d.set({
            openInGameMenuName: null
          })
        }), []),
        hJ = (0, UJ.useRef)(null);
      return (0, UJ.useEffect)((() => {
        if (cJ) {
          var JJ;
          (0, eU.h)("InGameMenu", {
            keepsMovement: He(cJ)
          }), hJ.current = ge.has(cJ) ? null !== (JJ = zJ.d.get("openEverythingMenuName")) && void 0 !== JJ ? JJ : hJ.current : null, zJ.d.set({
            openEverythingMenuName: null
          })
        } else {
          const JJ = hJ.current;
          hJ.current = null, null !== JJ && null === zJ.d.get("openEverythingMenuName") && zJ.d.set({
            openEverythingMenuName: JJ
          }), eJ.current = null, (0, eU.e)("InGameMenu")
        }
      }), [cJ]), (0, UJ.useEffect)((() => {
        null !== JJ && jJ()
      }), [JJ, jJ]), (0, YJ.jsxs)(YJ.Fragment, {
        children: [(0, YJ.jsx)(FJ.j, {
          show: "clientGame" === cJ
        }), (0, YJ.jsx)(cU, {
          show: "cantCrouchIfNotFullscreen" === cJ,
          onOpen: qJ.current.cantCrouchIfNotFullscreen,
          onClose: jJ
        }), (0, YJ.jsx)(FU, {
          show: "makeReport" === cJ,
          onOpen: qJ.current.makeReport,
          onClose: jJ
        }), (0, YJ.jsx)(UU, {
          show: "makeDiscordReport" === cJ,
          onOpen: qJ.current.makeDiscordReport,
          onClose: jJ
        }), (0, YJ.jsx)(fZ, {
          show: "editBook" === cJ,
          onOpen: qJ.current.editBook,
          onClose: jJ
        }), (0, YJ.jsx)(GZ, {
          show: "editNameTag" === cJ,
          onOpen: qJ.current.editNameTag,
          onClose: jJ
        }), ZJ && (0, YJ.jsx)(oF, {
          show: "inventory" === cJ,
          onOpen: qJ.current.inventory,
          onClose: jJ,
          variation: eJ.current
        }), (0, YJ.jsx)(Lc, {
          show: "inviteLink" === cJ,
          onClose: jJ,
          option: eJ.current
        }), (0, YJ.jsx)(PJ, {
          show: "retentionFeatures" === cJ,
          onClose: jJ
        }), (0, YJ.jsx)(nZ, {
          show: "writeOnBoard" === cJ,
          onOpen: qJ.current.writeOnBoard,
          onClose: jJ
        }), (0, YJ.jsx)(We, {
          show: "lobbyCodeEditor" === cJ,
          onOpen: qJ.current.lobbyCodeEditor,
          onClose: jJ,
          isLobbyCode: !0
        }), (0, YJ.jsx)(We, {
          show: "codeEditor" === cJ,
          onOpen: qJ.current.codeEditor,
          onClose: jJ,
          isLobbyCode: !1
        }), (0, YJ.jsx)(AU, {
          show: "customLobbyBlockEditor" === cJ,
          onOpen: qJ.current.customLobbyBlockEditor,
          onClose: jJ
        }), (0, YJ.jsx)(PZ, {
          show: "ironChestPasskeyInput" === cJ,
          onOpen: qJ.current.ironChestPasskeyInput,
          onClose: jJ
        }), (0, YJ.jsx)(sU, {
          togglePointerLock: !0,
          show: "petUi" === cJ,
          onOpen: qJ.current.petUi,
          onClose: jJ
        })]
      })
    }))
  },
  35570: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => Oe
    });
    ZJ(35578);
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(3218),
      AJ = ZJ(1326),
      qJ = ZJ(1675),
      jJ = ZJ(990);

    function YJ() {
      const JJ = 2e3,
        [cJ, ZJ] = (0, FJ.useState)(null),
        [UJ, YJ] = (0, FJ.useState)(null),
        hJ = (0, FJ.useRef)(null);
      (0, AJ.i)("showBottomMessage", (cJ => {
        let {
          message: ZJ,
          timeoutLength: FJ = JJ,
          type: UJ
        } = cJ;
        YJ({
          message: ZJ,
          type: UJ
        }), clearTimeout(hJ.current), hJ.current = setTimeout((() => {
          YJ(null)
        }), FJ)
      })), (0, AJ.i)("showPermanentBottomMessage", (JJ => {
        ZJ(JJ)
      })), (0, FJ.useEffect)((() => ((0, XJ.c)((() => {
        ZJ(null)
      })), () => {
        clearTimeout(hJ.current)
      })), []);
      const DJ = UJ || cJ;
      return DJ ? (0, jJ.jsx)("div", {
        className: eJ()("BottomScreenMessage", DJ.type),
        children: (0, jJ.jsx)(qJ.d, {
          text: DJ.message
        })
      }) : null
    }
    var hJ = ZJ(2102),
      DJ = ZJ(1703),
      sJ = ZJ(1406),
      nJ = ZJ(2179);

    function GJ() {
      let JJ;
      const cJ = () => {
          clearTimeout(JJ), JJ = setTimeout((() => {
            DJ.gameBridge.latest("connectedGame").replay || (DJ.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, sJ.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        ZJ = () => {
          clearTimeout(JJ)
        };
      return window.addEventListener("focus", ZJ), window.addEventListener("blur", cJ), () => {
        window.removeEventListener("blur", cJ), window.removeEventListener("focus", ZJ), clearTimeout(JJ)
      }
    }
    var fJ = ZJ(1022),
      xJ = ZJ(1017),
      rJ = ZJ(227),
      vJ = ZJ(2175),
      mJ = ZJ(17),
      QJ = ZJ(1725),
      EJ = ZJ(29),
      VJ = ZJ(1743),
      KJ = ZJ(13),
      yJ = ZJ(1747),
      SJ = ZJ(1294),
      IJ = ZJ(8120),
      MJ = ZJ(1782),
      bJ = ZJ(1086);
    const wJ = (0, FJ.memo)((function() {
      const {
        isTouchScreen: JJ,
        loadingOverlayVisible: cJ,
        openInGameMenuName: ZJ,
        openEverythingMenuName: UJ
      } = (0, KJ.j)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), XJ = (0, SJ.q)();
      (0, xJ.d)();
      const AJ = (0, vJ.f)("showBasicMovementControls"),
        [qJ, YJ] = (0, FJ.useState)("movement"),
        hJ = "movement" === qJ,
        DJ = XJ && !1 !== AJ;
      (0, FJ.useEffect)((() => {
        "padActions" !== qJ || DJ || YJ("done")
      }), [qJ, DJ]);
      const sJ = cJ || null !== ZJ || null !== UJ,
        nJ = (0, FJ.useRef)({
          step: qJ,
          ms: 0
        });
      return (0, FJ.useEffect)((() => {
        if (sJ || "done" === qJ) return;
        nJ.current.step !== qJ && (nJ.current = {
          step: qJ,
          ms: 0
        });
        const JJ = nJ.current,
          cJ = performance.now(),
          ZJ = setTimeout((() => {
            YJ("movement" === qJ && (0, SJ.e)() ? "padActions" : "done")
          }), 7e3 - JJ.ms);
        return () => {
          clearTimeout(ZJ), JJ.ms += performance.now() - cJ
        }
      }), [sJ, qJ]), EJ.j.getItem(rJ.vb) > 2 ? (0, jJ.jsx)(PJ, {
        showingMovementControls: !1
      }) : (0, jJ.jsxs)(jJ.Fragment, {
        children: [JJ && !XJ || !hJ || !1 === AJ ? null : (0, jJ.jsxs)("div", {
          className: eJ()("ControlsTutorialDiv", {
            Covered: sJ
          }),
          children: [(0, jJ.jsx)(WJ, {}), (0, jJ.jsx)(HJ, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, jJ.jsx)(HJ, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === qJ && DJ && (0, jJ.jsx)(gJ, {
          covered: sJ
        }), (0, jJ.jsx)(PJ, {
          showingMovementControls: "done" !== qJ
        })]
      })
    }));

    function WJ() {
      const JJ = (0, SJ.q)();
      return (0, jJ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, jJ.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), JJ && (0, jJ.jsx)(yJ.e, {
          noaAction: "forward"
        }), !JJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, jJ.jsx)(yJ.e, {
              noaAction: "forward"
            })
          }), (0, jJ.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, jJ.jsx)(yJ.e, {
              noaAction: "left"
            }), (0, jJ.jsx)(yJ.e, {
              noaAction: "backward"
            }), (0, jJ.jsx)(yJ.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function gJ(JJ) {
      let {
        covered: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, bJ.F)(), FJ = (0, vJ.f)("useInventory");
      return (0, jJ.jsxs)("div", {
        className: eJ()("ControlsTutorialDiv", {
          Covered: cJ
        }),
        children: [(0, jJ.jsx)(HJ, {
          header: ZJ("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, jJ.jsx)(HJ, {
          header: ZJ("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== FJ && (0, jJ.jsx)(HJ, {
          header: ZJ("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, jJ.jsx)(HJ, {
          header: ZJ("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function HJ(JJ) {
      let {
        header: cJ,
        noaAction: ZJ
      } = JJ;
      return (0, jJ.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, jJ.jsx)("div", {
          className: "KeyHeader",
          children: cJ
        }), (0, jJ.jsx)(yJ.e, {
          noaAction: ZJ
        })]
      })
    }

    function PJ(JJ) {
      let {
        showingMovementControls: cJ
      } = JJ;
      const {
        isTouchScreen: ZJ
      } = (0, KJ.j)(["isTouchScreen"]), UJ = (0, SJ.q)(), eJ = (0, MJ.b)("OpenShop"), [XJ, AJ] = (0, FJ.useState)(!1), qJ = `SeenShopControls|${(0,VJ.d)("connectedGame",(JJ=>JJ.gameNameWithVariation))}`, YJ = () => (!(0, SJ.e)() || null !== (0, IJ.e)("OpenShop")) && !EJ.j.getItem(qJ) && QJ.b.get("shopInfo") && !cJ, hJ = () => (AJ(!0), EJ.j.setItem(qJ, !0), (0, SJ.e)() || mJ.i.Uf("showShopTouchTutorial"), setTimeout((() => {
        AJ(!1)
      }), 7e3));
      (0, FJ.useEffect)((() => {
        let JJ;
        const cJ = mJ.i.subscribe("showShopTutorial", (() => {
          YJ() && (JJ = hJ())
        }));
        return () => {
          clearTimeout(JJ), mJ.i.unsubscribe(cJ)
        }
      }), [cJ]);
      const DJ = (0, FJ.useRef)();
      return (0, vJ.e)("currencyAmounts", (JJ => {
        if (YJ()) {
          let ZJ = !1;
          const FJ = QJ.b.get("shopInfo");
          for (const UJ in FJ) {
            for (const eJ in FJ[UJ].items) {
              var cJ;
              const XJ = FJ[UJ].items[eJ];
              if (void 0 !== XJ.currency && JJ[XJ.currency] && XJ.cost <= JJ[XJ.currency].amount && (null === (cJ = XJ.hidden) || void 0 === cJ || !cJ)) {
                ZJ = !0;
                break
              }
            }
            if (ZJ) break
          }
          ZJ && (DJ.current = hJ())
        }
      })), (0, FJ.useEffect)((() => () => {
        clearTimeout(DJ.current)
      }), [cJ]), !XJ || UJ && !eJ ? null : (0, jJ.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: ZJ && !UJ ? null : (0, jJ.jsx)(HJ, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var kJ = ZJ(1259),
      pJ = ZJ(942);
    const dJ = (0, FJ.memo)((function() {
      return (0, xJ.d)(), (0, jJ.jsx)(zJ, {})
    }));
    class zJ extends FJ.Component {
      constructor(JJ) {
        super(JJ), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = mJ.i.subscribe("TopRightHelper", (JJ => {
          this.showQueue.push(JJ), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        mJ.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(JJ, cJ) {
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
        let JJ, cJ, ZJ, FJ, UJ, eJ = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, JJ = "slideIn") : "slideOut" === this.state.currState ? JJ = "slideOut" : null === this.currMessage && (eJ = !1), this.currMessage) {
          const eJ = this.currMessage.color || "rgb(102, 102, 102)";
          cJ = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === JJ ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, ZJ = {
            backgroundColor: eJ
          }, FJ = {
            animation: "2s " + ("slideOut" === JJ ? "CloseNotification" : "ExpandNotification")
          }, UJ = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === JJ ? "textDisappear" : "textAppear")
          }
        }
        return eJ ? (0, jJ.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...cJ
          },
          children: [(0, jJ.jsx)("div", {
            className: "LeftSide",
            style: ZJ,
            children: (0, jJ.jsx)(pJ.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, jJ.jsx)("div", {
            className: "RightSide",
            style: FJ,
            children: (0, jJ.jsx)("div", {
              className: "HelperText",
              style: UJ,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var NJ = ZJ(35584),
      OJ = ZJ(1300);
    const TJ = (0, OJ.g)((JJ => JJ.PadSneakChip));

    function CJ(JJ) {
      const [cJ, ZJ, FJ] = function(JJ) {
        const cJ = parseInt(JJ.substring(1), 16),
          ZJ = (cJ >> 16) / 255,
          FJ = (cJ >> 8 & 255) / 255,
          UJ = (255 & cJ) / 255,
          eJ = Math.max(ZJ, FJ, UJ),
          XJ = Math.min(ZJ, FJ, UJ),
          AJ = (eJ + XJ) / 2,
          qJ = eJ - XJ;
        if (0 === qJ) return [0, 0, AJ];
        const jJ = qJ / (1 - Math.abs(2 * AJ - 1));
        let YJ;
        YJ = eJ === ZJ ? (FJ - UJ) / qJ % 6 : eJ === FJ ? (UJ - ZJ) / qJ + 2 : (ZJ - FJ) / qJ + 4;
        return [(60 * YJ + 360) % 360, jJ, AJ]
      }(JJ), UJ = 0 === ZJ ? 0 : Math.min(.6, ZJ + .03), eJ = FJ > .5 ? -1 : 1, XJ = uJ(FJ + .09 * eJ);
      return {
        panel: JJ,
        slot: iJ(cJ, UJ, XJ),
        slotSelected: iJ(cJ, UJ, uJ(XJ + .2 * eJ)),
        slotUnavailable: iJ(cJ, UJ, uJ(FJ + -.1 * eJ))
      }
    }

    function uJ(JJ) {
      return Math.min(1, Math.max(0, JJ))
    }

    function iJ(JJ, cJ, ZJ) {
      const FJ = (1 - Math.abs(2 * ZJ - 1)) * cJ,
        UJ = FJ * (1 - Math.abs(JJ / 60 % 2 - 1)),
        eJ = ZJ - FJ / 2;
      let XJ;
      return XJ = JJ < 60 ? [FJ, UJ, 0] : JJ < 120 ? [UJ, FJ, 0] : JJ < 180 ? [0, FJ, UJ] : JJ < 240 ? [0, UJ, FJ] : JJ < 300 ? [UJ, 0, FJ] : [FJ, 0, UJ], "#" + XJ.map((JJ => function(JJ) {
        return Math.round(255 * JJ).toString(16).padStart(2, "0")
      }(JJ + eJ))).join("")
    }
    var RJ = ZJ(35599),
      LJ = ZJ(3758),
      aJ = ZJ(2146),
      BJ = ZJ(2153),
      tJ = ZJ(35644),
      oJ = ZJ(4217),
      lJ = ZJ(1341),
      Jc = ZJ(535);

    function cc(JJ, cJ, ZJ, FJ) {
      JJ.style.display = "";
      const UJ = JJ.offsetWidth,
        eJ = JJ.offsetHeight,
        XJ = Math.min(Math.max((cJ.left + cJ.right) / 2 - UJ / 2, 8), window.innerWidth - 8 - UJ);
      let AJ = cJ.top - ZJ - eJ;
      const qJ = [...FJ].sort(((JJ, cJ) => cJ.top - JJ.top));
      for (const jJ of qJ) XJ < jJ.right && XJ + UJ > jJ.left && AJ < jJ.bottom && AJ + eJ > jJ.top && (AJ = jJ.top - 8 - eJ);
      return AJ < 8 ? (JJ.style.display = "none", null) : (JJ.style.transform = `translate(${XJ-cJ.left}px, ${AJ-cJ.top}px)`, {
        left: XJ,
        top: AJ,
        right: XJ + UJ,
        bottom: AJ + eJ
      })
    }

    function Zc(JJ) {
      const cJ = [];
      for (const ZJ of document.querySelectorAll(JJ)) {
        const JJ = ZJ.getBoundingClientRect();
        JJ.width > 0 && "visible" === getComputedStyle(ZJ).visibility && cJ.push(JJ)
      }
      return cJ
    }

    function Fc(JJ, cJ) {
      return JJ.clientX >= cJ.left - 8 && JJ.clientX <= cJ.right + 8 && JJ.clientY >= cJ.top - 8 && JJ.clientY <= cJ.bottom + 8
    }
    var Uc = ZJ(8178);
    class ec {
      constructor(JJ) {
        this.deps = JJ, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(JJ) {
        JJ && "armed" === this.phase ? this.setPhase("ready") : JJ || "ready" !== this.phase || this.setPhase("armed")
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
      hold(JJ, cJ) {
        this.suspended || (this.offered ? cJ || this.setPhase("idle") : JJ && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : JJ || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(JJ) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const cJ = this.phase;
        this.phase = JJ, this.deps.onPhase(JJ, cJ)
      }
    }
    const Xc = 25 * Math.PI / 180,
      Ac = 45 * Math.PI / 180;
    class qc extends ec {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(JJ, cJ, ZJ) {
        this.speed = ZJ;
        const FJ = Math.hypot(JJ, cJ),
          UJ = FJ > 0 ? Math.acos(Math.min(1, -cJ / FJ)) : Math.PI;
        this.hold(FJ >= .8 && UJ <= Xc, FJ >= .5 && UJ <= Ac)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var jc = ZJ(1184);

    function Yc(JJ, cJ) {
      const ZJ = (0, FJ.useRef)(null),
        UJ = (0, FJ.useRef)(cJ);
      return UJ.current = cJ, (0, FJ.useEffect)((() => {
        if (!JJ) return;
        const {
          create: cJ,
          elementRef: FJ,
          ringRef: eJ,
          classPrefix: XJ,
          keptBehindMovementPanels: AJ,
          resizeEnds: qJ
        } = UJ.current, jJ = {
          charging: `${XJ}Charging`,
          armed: `${XJ}Armed`,
          ready: `${XJ}Ready`,
          locked: `${XJ}Locked`
        };
        let YJ = null;
        const hJ = cJ({
          onPhase: (JJ, cJ) => {
            const ZJ = FJ.current;
            if (null !== ZJ) {
              for (const [cJ, FJ] of Object.entries(jJ)) ZJ.classList.toggle(FJ, cJ === JJ);
              if ("charging" === JJ) YJ = eJ.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === JJ) {
                var XJ;
                null === (XJ = YJ) || void 0 === XJ || XJ.cancel(), YJ = null
              }
              var AJ, qJ;
              if ("armed" === JJ && "charging" === cJ && UJ.current.onArmed(), "ready" === JJ && Uc.g.play("lockReady"), "locked" === JJ) Uc.g.play("lockLocked"), null === (AJ = (qJ = UJ.current).onLocked) || void 0 === AJ || AJ.call(qJ);
              "locked" === cJ && UJ.current.onUnlocked()
            }
          }
        });
        ZJ.current = hJ;
        const DJ = () => {
            hJ.suspend()
          },
          sJ = () => {
            "hidden" === document.visibilityState && DJ()
          },
          nJ = () => {
            qJ ? hJ.suspend() : hJ.suspendArming()
          },
          GJ = (0, jc.c)((JJ => {
            let {
              keepsMovement: cJ
            } = JJ;
            cJ && AJ ? hJ.suspendArming() : DJ()
          }));
        return document.addEventListener("visibilitychange", sJ), window.addEventListener("blur", DJ), window.addEventListener("resize", nJ), () => {
          GJ(), document.removeEventListener("visibilitychange", sJ), window.removeEventListener("blur", DJ), window.removeEventListener("resize", nJ), hJ.cancel(), ZJ.current = null
        }
      }), [JJ]), (0, VJ.b)("localPlayerAliveSet", (() => {
        var JJ;
        null === (JJ = ZJ.current) || void 0 === JJ || JJ.suspend()
      })), ZJ
    }
    const hc = 50;

    function Dc(JJ) {
      let {
        onMove: cJ,
        mode: ZJ,
        speedCurve: UJ,
        autorun: eJ = !1
      } = JJ;
      const XJ = (0, FJ.useRef)(null),
        AJ = (0, FJ.useRef)(null),
        qJ = (0, FJ.useRef)(null),
        YJ = (0, FJ.useRef)(null),
        hJ = (0, FJ.useRef)(null),
        sJ = (0, FJ.useRef)(null),
        nJ = (0, FJ.useRef)(null),
        GJ = (0, FJ.useRef)(null),
        fJ = (0, FJ.useRef)(!1),
        xJ = (0, FJ.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: rJ
        } = (0, bJ.F)(),
        vJ = "fixed_shown" === ZJ || "fixed_hidden" === ZJ,
        mJ = (0, KJ.j)(["notchSize"]).notchSize.left,
        QJ = function(JJ, cJ, ZJ, UJ, eJ) {
          const XJ = (0, FJ.useRef)(null),
            AJ = () => {
              clearInterval(XJ.current), XJ.current = null
            },
            qJ = Yc(JJ, {
              create: JJ => new qc(JJ),
              elementRef: cJ,
              ringRef: ZJ,
              classPrefix: "Autorun",
              keptBehindMovementPanels: !0,
              resizeEnds: !0,
              onArmed: eJ,
              onLocked: () => {
                XJ.current = setInterval((() => {
                  DJ.gameBridge.lookup("dropAhead", null) && (Uc.g.play("autorunLedgeStop"), qJ.current.cancel())
                }), 100)
              },
              onUnlocked: () => {
                AJ(), UJ()
              }
            });
          return (0, FJ.useEffect)((() => AJ), []), qJ
        }(eJ, AJ, sJ, (() => {
          MJ(), IJ()
        }), (() => {
          EJ(), null === GJ.current && QJ.current.suspend()
        }));

      function EJ() {
        const JJ = AJ.current.getBoundingClientRect();
        GJ.current = cc(nJ.current, JJ, 80, Zc(".TouchInventoryKey")), fJ.current = null !== GJ.current && Fc(xJ.current, GJ.current)
      }

      function VJ(JJ) {
        AJ.current.style.transform = `translate(${JJ.x-hc}px, ${JJ.y-hc}px)`
      }

      function yJ(JJ) {
        const cJ = AJ.current;
        cJ.classList.add("Resting"), cJ.classList.toggle("Returning", JJ), cJ.style.display = "fixed_hidden" === ZJ ? "none" : "block", VJ(function() {
          const JJ = mJ * window.innerWidth / 100,
            cJ = window.innerHeight > window.innerWidth ? 135 : 100;
          return {
            x: JJ + 90,
            y: window.innerHeight - cJ
          }
        }())
      }
      const SJ = (0, FJ.useRef)({
        restFixed: yJ,
        release: wJ
      });

      function IJ() {
        vJ ? yJ("fixed_shown" === ZJ) : "floating" === ZJ && (AJ.current.style.display = "none"), cJ({
          x: 0,
          y: 0
        })
      }

      function MJ() {
        hJ.current = null, YJ.current = null, qJ.current.style.transform = "translate(-50%, -50%)"
      }

      function wJ(JJ) {
        MJ();
        const ZJ = QJ.current;
        JJ && null !== ZJ && void 0 !== ZJ && ZJ.lift() ? cJ({
          x: 0,
          y: -ZJ.lockedSpeed
        }) : (null === ZJ || void 0 === ZJ || ZJ.cancel(), IJ())
      }

      function WJ(JJ) {
        const ZJ = Array.from(JJ.touches).find((JJ => JJ.identifier === hJ.current));
        if (null === YJ.current || null === hJ.current || (0, Jc.P)(ZJ)) return;
        const FJ = QJ.current,
          eJ = ZJ.clientX - YJ.current.x,
          XJ = ZJ.clientY - YJ.current.y,
          AJ = Math.hypot(eJ, XJ),
          jJ = AJ > 0 ? Math.min(1, hc / AJ) : 0,
          DJ = eJ * jJ,
          sJ = XJ * jJ,
          nJ = Math.hypot(DJ, sJ) / hc,
          rJ = UJ && nJ > 0 ? UJ(nJ) / nJ : 1;
        qJ.current.style.transform = `translate(calc(-50% + ${DJ}px), calc(-50% + ${sJ}px))`;
        const vJ = DJ / hc,
          mJ = sJ / hc;
        if (cJ({
            x: vJ * rJ,
            y: mJ * rJ
          }), null !== FJ && null !== GJ.current) {
          FJ.move(vJ, mJ, nJ * rJ), xJ.current = {
            clientX: ZJ.clientX,
            clientY: ZJ.clientY
          };
          const JJ = fJ.current;
          fJ.current = Fc(ZJ, GJ.current), fJ.current !== JJ && FJ.target(fJ.current)
        }
      }
      return SJ.current = {
        restFixed: yJ,
        release: wJ
      }, (0, FJ.useLayoutEffect)((() => {
        if (!vJ) return;
        null === hJ.current && SJ.current.restFixed(!1);
        const JJ = () => {
          null === hJ.current && SJ.current.restFixed(!1)
        };
        window.addEventListener("resize", JJ);
        const cJ = AJ.current;
        return () => {
          window.removeEventListener("resize", JJ), cJ.classList.remove("Resting", "Returning"), null === hJ.current && (cJ.style.display = "", cJ.style.transform = "")
        }
      }), [vJ, ZJ, mJ]), (0, FJ.useEffect)((() => {
        const JJ = JJ => {
            const cJ = hJ.current;
            null === cJ || Array.from(JJ.touches).some((JJ => JJ.identifier === cJ)) || SJ.current.release("touchend" === JJ.type && Array.from(JJ.changedTouches).some((JJ => JJ.identifier === cJ)))
          },
          cJ = () => {
            null !== hJ.current && SJ.current.release(!1)
          },
          ZJ = () => {
            "hidden" === document.visibilityState && cJ()
          };
        document.addEventListener("touchstart", JJ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", JJ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", JJ, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", JJ, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", cJ), document.addEventListener("visibilitychange", ZJ);
        const FJ = (0, jc.c)((JJ => {
          let {
            keepsMovement: ZJ
          } = JJ;
          ZJ || cJ()
        }));
        return () => {
          FJ(), document.removeEventListener("touchstart", JJ, {
            capture: !0
          }), document.removeEventListener("touchmove", JJ, {
            capture: !0
          }), document.removeEventListener("touchend", JJ, {
            capture: !0
          }), document.removeEventListener("touchcancel", JJ, {
            capture: !0
          }), window.removeEventListener("blur", cJ), document.removeEventListener("visibilitychange", ZJ)
        }
      }), []), (0, FJ.useEffect)((() => {
        const JJ = XJ.current,
          cJ = JJ => {
            JJ.preventDefault()
          };
        return JJ.addEventListener("touchstart", cJ, {
          passive: !1
        }), () => {
          JJ.removeEventListener("touchstart", cJ)
        }
      }), []), (0, jJ.jsx)("div", {
        ref: XJ,
        className: "JoystickZone",
        onTouchStart: function(JJ) {
          var cJ;
          if (null !== hJ.current) return;
          const FJ = Array.from(JJ.changedTouches).find((JJ => {
            var cJ;
            return null === (cJ = XJ.current) || void 0 === cJ ? void 0 : cJ.contains(JJ.target)
          }));
          if (FJ) {
            if (null === (cJ = QJ.current) || void 0 === cJ || cJ.startTouch(), hJ.current = FJ.identifier, "pinned" === ZJ) {
              const JJ = AJ.current.getBoundingClientRect();
              YJ.current = {
                x: JJ.left + JJ.width / 2,
                y: JJ.top + JJ.height / 2
              }
            } else YJ.current = {
              x: FJ.clientX,
              y: FJ.clientY
            }, AJ.current.classList.remove("Resting", "Returning"), AJ.current.style.display = "block", VJ(YJ.current), eJ && (xJ.current = {
              clientX: FJ.clientX,
              clientY: FJ.clientY
            }, EJ());
            WJ(JJ)
          }
        },
        onTouchMove: WJ,
        children: (0, jJ.jsxs)("div", {
          ref: AJ,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === ZJ ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, jJ.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), eJ && (0, jJ.jsxs)(jJ.Fragment, {
            children: [(0, jJ.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, jJ.jsx)("circle", {
                ref: sJ,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, jJ.jsxs)("div", {
              ref: nJ,
              className: "AutorunTarget",
              children: [(0, jJ.jsx)(pJ.c, {
                name: "lock"
              }), rJ("settingsMenu:autoRun")]
            })]
          }), (0, jJ.jsx)("div", {
            ref: qJ,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var sc = ZJ(35650),
      nc = ZJ(2900);

    function Gc(JJ, cJ) {
      const ZJ = (0, FJ.useRef)(null);
      return (0, FJ.useLayoutEffect)((() => (tJ.d.set(JJ, ZJ.current, cJ), () => {
        tJ.d.set(JJ, null)
      })), [JJ, cJ]), ZJ
    }
    const fc = "C",
      xc = "J",
      rc = "U",
      vc = "P",
      mc = "A",
      Qc = "G",
      Ec = "X",
      Vc = (0, FJ.forwardRef)((function(JJ, cJ) {
        let {
          slot: ZJ,
          canvasZone: UJ = !1,
          lit: XJ = !1,
          label: AJ,
          className: qJ,
          children: YJ,
          ...hJ
        } = JJ;
        return (0, FJ.useEffect)((() => (mJ.i.Uf(nc.d), () => {
          mJ.i.Uf(nc.d)
        })), []), (0, jJ.jsx)("div", {
          ref: cJ,
          className: eJ()("TouchKeyHit", `TouchSlot${ZJ}`, qJ, {
            CanvasZone: UJ
          }),
          ...hJ,
          children: (0, jJ.jsxs)("div", {
            className: eJ()("TouchKey", {
              Lit: XJ,
              Labelled: void 0 !== AJ
            }),
            children: [YJ, void 0 !== AJ && (0, jJ.jsx)("span", {
              className: "TouchKeyLabel",
              children: AJ
            })]
          })
        })
      }));

    function Kc(JJ, cJ) {
      (0, FJ.useEffect)((() => () => {
        cJ.current && (cJ.current = !1, (0, BJ.D)(JJ, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function yc(JJ, cJ) {
      const ZJ = cJ ? [Ec] : [vc, Ec];
      return JJ.filter((JJ => null !== JJ)).slice(0, ZJ.length).map(((JJ, cJ) => {
        const UJ = ZJ[cJ];
        return (0, jJ.jsx)(FJ.Fragment, {
          children: JJ.render(UJ)
        }, `${JJ.id}:${UJ}`)
      }))
    }
    var Sc = ZJ(35640);
    class Ic extends ec {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(JJ, cJ) {
        this.start = {
          x: JJ,
          y: cJ
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(JJ, cJ, ZJ) {
        const FJ = Math.hypot(JJ - this.start.x, cJ - this.start.y) <= 12;
        this.moved ||= !FJ;
        const UJ = null !== ZJ && cJ < this.start.y - 12 && Fc({
          clientX: JJ,
          clientY: cJ
        }, ZJ);
        this.hold(!this.moved, FJ || UJ)
      }
    }
    const Mc = new Set;

    function bc(JJ) {
      const cJ = new Set(Array.from(JJ.touches, (JJ => JJ.identifier)));
      for (const ZJ of Mc) {
        for (const JJ of ZJ.ids) cJ.has(JJ) || ZJ.ids.delete(JJ);
        if (0 === ZJ.ids.size) {
          Mc.delete(ZJ);
          ZJ.pressesOnPointerDown && "touchstart" === JJ.type && Array.from(JJ.changedTouches).some((JJ => JJ.target instanceof Node && ZJ.element.contains(JJ.target))) || ZJ.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const oe of ["touchstart", "touchmove"]) window.addEventListener(oe, bc, {
        capture: !0,
        passive: !0
      });

    function wc(JJ) {
      let {
        pressesOnPointerDown: cJ = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const ZJ = (0, FJ.useRef)(JJ);
      ZJ.current = JJ;
      const UJ = (0, FJ.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: cJ,
        release: () => {
          ZJ.current()
        }
      });
      (0, FJ.useEffect)((() => {
        const JJ = UJ.current;
        return () => {
          Mc.delete(JJ), JJ.ids.clear()
        }
      }), []);
      const eJ = JJ => {
        const cJ = UJ.current;
        for (const ZJ of Array.from(JJ.changedTouches)) cJ.ids.delete(ZJ.identifier);
        0 === cJ.ids.size && Mc.delete(cJ)
      };
      return {
        onTouchStart: JJ => {
          const cJ = UJ.current;
          cJ.element = JJ.currentTarget;
          for (const ZJ of Array.from(JJ.changedTouches)) ZJ.target instanceof Node && JJ.currentTarget.contains(ZJ.target) && cJ.ids.add(ZJ.identifier);
          cJ.ids.size > 0 && Mc.add(cJ)
        },
        onTouchEnd: eJ,
        onTouchCancel: eJ
      }
    }

    function Wc(JJ, cJ) {
      return null === cJ ? null : (0, Sc.c)(JJ.nativeEvent.changedTouches, cJ.id)
    }

    function gc(JJ) {
      let {
        lockable: cJ
      } = JJ;
      const {
        t: ZJ
      } = (0, bJ.F)(), UJ = (0, FJ.useRef)(!1);
      Kc(aJ.C.Jump, UJ);
      const eJ = (0, FJ.useRef)(null),
        XJ = (0, FJ.useRef)(null),
        AJ = (0, FJ.useRef)(null),
        qJ = (0, FJ.useRef)(null),
        YJ = (0, FJ.useRef)(null),
        hJ = (0, FJ.useRef)(null),
        DJ = (0, FJ.useRef)(!1),
        sJ = (JJ, cJ) => {
          UJ.current = JJ, (0, BJ.D)(aJ.C.Jump, JJ, cJ)
        },
        nJ = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          UJ.current && (eJ.current && (0, lJ.g)(eJ.current, !1), sJ(!1, JJ))
        },
        GJ = Yc(cJ, {
          create: JJ => new Ic(JJ),
          elementRef: eJ,
          ringRef: XJ,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const JJ = eJ.current.getBoundingClientRect(),
              cJ = AJ.current.parentElement,
              ZJ = cJ.getBoundingClientRect(),
              FJ = {
                left: ZJ.left + cJ.clientLeft,
                top: ZJ.top + cJ.clientTop,
                right: ZJ.right - cJ.clientLeft,
                bottom: ZJ.bottom - cJ.clientTop
              };
            if (YJ.current = cc(AJ.current, FJ, 16, Zc(".TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey")), null === YJ.current) return void GJ.current.suspend();
            const UJ = YJ.current;
            hJ.current = {
              left: Math.min(JJ.left, UJ.left),
              top: UJ.top,
              right: Math.max(JJ.right, UJ.right),
              bottom: JJ.bottom
            }, DJ.current = null !== qJ.current && Fc({
              clientX: qJ.current.x,
              clientY: qJ.current.y
            }, UJ)
          },
          onUnlocked: () => {
            null === qJ.current && nJ()
          }
        }),
        fJ = JJ => {
          var cJ;
          qJ.current = null, null === (cJ = GJ.current) || void 0 === cJ || cJ.cancel(), nJ(JJ)
        },
        xJ = wc((() => {
          fJ()
        })),
        rJ = JJ => {
          const cJ = qJ.current;
          var ZJ;
          return null === cJ ? null !== (ZJ = GJ.current) && void 0 !== ZJ && ZJ.locked ? null : "lifted" : Wc(JJ, cJ) ? "lifted" : (0, Sc.f)(JJ.nativeEvent.touches, cJ.id) ? null : "dropped"
        };
      return (0, jJ.jsxs)(Vc, {
        ref: eJ,
        slot: xc,
        className: "JumpKey",
        onTouchStart: JJ => {
          xJ.onTouchStart(JJ), (0, lJ.g)(JJ.currentTarget, !0), null === qJ.current || (0, Sc.f)(JJ.nativeEvent.touches, qJ.current.id) || fJ();
          const cJ = JJ.changedTouches[0];
          var ZJ;
          null === qJ.current && cJ && (qJ.current = {
            id: cJ.identifier,
            x: cJ.clientX,
            y: cJ.clientY
          }, null === (ZJ = GJ.current) || void 0 === ZJ || ZJ.press(cJ.clientX, cJ.clientY));
          UJ.current || sJ(!0, JJ.nativeEvent)
        },
        onTouchMove: JJ => {
          const cJ = qJ.current,
            ZJ = Wc(JJ, cJ);
          if (!ZJ) return;
          const FJ = GJ.current;
          if (null === FJ || void 0 === FJ || FJ.move(ZJ.clientX, ZJ.clientY, hJ.current), null !== FJ && void 0 !== FJ && FJ.offered) {
            const JJ = Fc(ZJ, YJ.current);
            JJ !== DJ.current && (DJ.current = JJ, FJ.target(JJ))
          }
          cJ.x = ZJ.clientX, cJ.y = ZJ.clientY
        },
        onTouchEnd: JJ => {
          var cJ;
          xJ.onTouchEnd(JJ);
          const ZJ = rJ(JJ);
          null !== ZJ && ("dropped" !== ZJ ? (qJ.current = null, null !== (cJ = GJ.current) && void 0 !== cJ && cJ.lift() ? (0, lJ.g)(JJ.currentTarget, !1) : nJ(JJ.nativeEvent)) : fJ(JJ.nativeEvent))
        },
        onTouchCancel: JJ => {
          xJ.onTouchCancel(JJ), null !== rJ(JJ) && fJ(JJ.nativeEvent)
        },
        children: [(0, jJ.jsx)(pJ.c, {
          name: "arrow-up-from-line"
        }), cJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, jJ.jsx)(pJ.c, {
              name: "lock"
            })
          }), (0, jJ.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, jJ.jsx)("rect", {
              ref: XJ,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: "10",
              pathLength: 1
            })
          }), (0, jJ.jsxs)("div", {
            ref: AJ,
            className: "JumpLockTarget",
            children: [(0, jJ.jsx)(pJ.c, {
              name: "lock"
            }), ZJ("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const Hc = new WeakMap;
    class Pc {
      constructor(JJ) {
        this.zones = JJ, this.followed = new Map, this.onStart = JJ => {
          if (this.releaseMissing(JJ.touches), JJ.target instanceof HTMLCanvasElement)
            for (let ZJ = 0; ZJ < JJ.changedTouches.length; ZJ++) {
              var cJ;
              const {
                identifier: FJ,
                clientX: UJ,
                clientY: eJ
              } = JJ.changedTouches[ZJ];
              this.release(FJ);
              const XJ = this.zones.hitZone(UJ, eJ);
              if (!XJ) continue;
              const {
                key: AJ
              } = XJ;
              null === (cJ = Hc.get(AJ)) || void 0 === cJ || cJ.cancel();
              const qJ = {
                hit: XJ.element,
                key: AJ,
                x: XJ.x,
                y: XJ.y,
                reach: .6 * XJ.radius
              };
              this.followed.set(FJ, qJ), (0, lJ.g)(XJ.element, !0), kc(qJ, UJ, eJ)
            }
        }, this.onMove = JJ => {
          this.releaseMissing(JJ.touches);
          for (let cJ = 0; cJ < JJ.changedTouches.length; cJ++) {
            const {
              identifier: ZJ,
              clientX: FJ,
              clientY: UJ
            } = JJ.changedTouches[cJ], eJ = this.followed.get(ZJ);
            eJ && kc(eJ, FJ, UJ)
          }
        }, this.onEnd = JJ => {
          for (let cJ = 0; cJ < JJ.changedTouches.length; cJ++) this.release(JJ.changedTouches[cJ].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const JJ = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, JJ), document.addEventListener("touchmove", this.onMove, JJ), document.addEventListener("touchend", this.onEnd, JJ), document.addEventListener("touchcancel", this.onEnd, JJ), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(JJ) {
        for (const cJ of [...this.followed.keys()])(0, Sc.f)(JJ, cJ) || this.release(cJ)
      }
      releaseAll() {
        for (const JJ of [...this.followed.keys()]) this.release(JJ)
      }
      release(JJ) {
        const cJ = this.followed.get(JJ);
        if (!cJ) return;
        this.followed.delete(JJ);
        for (const UJ of this.followed.values())
          if (UJ.key === cJ.key) return;
        (0, lJ.g)(cJ.hit, !1);
        const {
          key: ZJ
        } = cJ, FJ = ZJ.style.translate;
        ZJ.style.translate = "", FJ && Hc.set(ZJ, ZJ.animate({
          translate: [FJ, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function kc(JJ, cJ, ZJ) {
      let {
        key: FJ,
        x: UJ,
        y: eJ,
        reach: XJ
      } = JJ;
      const AJ = cJ - UJ,
        qJ = ZJ - eJ,
        jJ = Math.min(1, XJ / (Math.hypot(AJ, qJ) || 1));
      FJ.style.translate = `${AJ*jJ}px ${qJ*jJ}px`
    }
    const pc = () => {
      const JJ = (0, LJ.f)(),
        cJ = (0, SJ.q)();
      return JJ || cJ
    };

    function dc(JJ) {
      (0, tJ.f)(JJ.x, JJ.y)
    }
    const zc = (0, FJ.memo)((function() {
        const JJ = pc(),
          {
            joystickMode: cJ,
            touchSpeedCurve: ZJ,
            autorun: UJ
          } = (0, KJ.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, FJ.useEffect)((() => ((0, oJ.g)(aJ.D.TouchControls, aJ.D.TouchControls), () => {
          (0, oJ.g)(aJ.D.TouchControls, 0), (0, tJ.f)(0, 0)
        })), []), (0, jJ.jsx)("div", {
          className: eJ()("TouchMovementWrapper", {
            Hidden: JJ
          }),
          "data-camera-keeper": "",
          children: (0, jJ.jsx)(Dc, {
            onMove: dc,
            mode: cJ,
            speedCurve: ZJ ? sc.d : void 0,
            autorun: UJ
          })
        })
      })),
      Nc = (0, FJ.memo)((function() {
        const JJ = pc(),
          {
            clientEscMenuOptions: cJ
          } = (0, KJ.j)(["clientEscMenuOptions"]),
          ZJ = cJ.touchActionButtons;
        return (0, FJ.useEffect)((() => new Pc(tJ.d).start()), []), (0, FJ.useEffect)((() => {
          mJ.i.Uf(nc.d)
        }), [JJ]), (0, jJ.jsxs)("div", {
          className: eJ()("TouchComponentsButtons", {
            Hidden: JJ
          }),
          "data-camera-keeper": "",
          children: [(0, jJ.jsx)(gc, {
            lockable: cJ.jumpLock && !JJ
          }), (0, jJ.jsx)(lc, {
            hidden: JJ,
            actionButtons: ZJ
          }), (0, jJ.jsx)(Tc, {})]
        })
      }));

    function Oc(JJ) {
      const cJ = cJ => ZJ => {
        (0, lJ.g)(ZJ.currentTarget, cJ), JJ(cJ, ZJ.nativeEvent)
      };
      return {
        onPointerDown: cJ(!0),
        onPointerUp: cJ(!1),
        onPointerCancel: cJ(!1)
      }
    }

    function Tc() {
      const JJ = (0, vJ.f)("canCrouch"),
        cJ = (0, VJ.f)("crouching"),
        ZJ = (0, FJ.useRef)(!1);
      Kc(aJ.C.Crouch, ZJ);
      const UJ = (JJ, cJ) => {
          ZJ.current = JJ, (0, BJ.D)(aJ.C.Crouch, JJ, cJ)
        },
        eJ = (0, FJ.useRef)(null),
        XJ = () => {
          ZJ.current && (eJ.current && (0, lJ.g)(eJ.current, !1), UJ(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        AJ = wc(XJ);
      return (0, FJ.useEffect)((() => {
        !1 === JJ && XJ()
      }), [JJ]), !1 === JJ ? null : (0, jJ.jsx)(Vc, {
        ref: eJ,
        slot: fc,
        className: "CrouchKey",
        lit: cJ,
        ...AJ,
        ...Oc(UJ),
        children: (0, jJ.jsx)(pJ.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Cc = [{
        icon: "arrows-rotate"
      }],
      uc = [{
        icon: "Arrow"
      }],
      ic = [{
        icon: "crosshairs"
      }],
      Rc = [{
        icon: "swords"
      }],
      Lc = [{
        icon: "hand-back-point-up"
      }],
      ac = [{
        icon: "Firecracker"
      }];

    function Bc(JJ, cJ, ZJ, FJ) {
      return {
        id: JSON.stringify(cJ),
        render: UJ => (0, jJ.jsx)(JZ, {
          code: JJ,
          slot: UJ,
          icon: cJ,
          label: FJ,
          hidden: ZJ
        })
      }
    }

    function tc(JJ, cJ) {
      return {
        id: "fly",
        render: ZJ => (0, jJ.jsx)(oc, {
          slot: ZJ,
          flying: JJ,
          label: cJ
        })
      }
    }

    function oc(JJ) {
      let {
        slot: cJ,
        flying: ZJ,
        label: FJ
      } = JJ;
      return (0, jJ.jsx)(Vc, {
        slot: cJ,
        className: "FlyKey",
        lit: ZJ,
        label: FJ,
        ...Oc(((JJ, cJ) => {
          (0, BJ.D)(aJ.C.Fly, JJ, cJ)
        })),
        children: (0, jJ.jsx)(pJ.c, {
          name: "feather-pointed"
        })
      })
    }

    function lc(JJ) {
      var cJ, ZJ;
      let {
        hidden: FJ,
        actionButtons: UJ
      } = JJ;
      const {
        t: eJ
      } = (0, bJ.F)(), {
        gun: XJ,
        aimable: AJ,
        chargeName: qJ
      } = (0, VJ.f)("heldItemAim"), YJ = (0, VJ.f)("gliderBoostFuel"), {
        canFly: hJ,
        flying: DJ
      } = (0, VJ.f)("flight"), sJ = (0, vJ.f)("touchscreenActionButton"), nJ = XJ ? Cc : sJ, GJ = AJ ? {
        icon: uc,
        label: eJ("touchKeys:aim")
      } : null, fJ = null !== qJ ? {
        icon: [{
          icon: qJ
        }]
      } : null, xJ = null !== GJ && void 0 !== GJ ? GJ : fJ, rJ = null !== (cJ = null === (ZJ = XJ ? GJ : null !== fJ && void 0 !== fJ ? fJ : GJ) || void 0 === ZJ ? void 0 : ZJ.icon) && void 0 !== cJ ? cJ : Lc, mJ = [!UJ && xJ ? Bc(tJ.b.Action2, xJ.icon, FJ, xJ.label) : null, XJ ? Bc(tJ.b.Action3, ic, FJ, eJ("touchKeys:scope")) : null, hJ ? tc(DJ, eJ("touchKeys:fly")) : null];
      return (0, jJ.jsxs)(jJ.Fragment, {
        children: [nJ && (0, jJ.jsx)(JZ, {
          code: tJ.b.Action1,
          slot: Qc,
          icon: nJ,
          label: XJ ? eJ("touchKeys:reload") : void 0,
          hidden: FJ
        }, JSON.stringify(nJ)), UJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)(JZ, {
            code: tJ.b.Attack,
            slot: mc,
            icon: Rc,
            name: eJ("touchKeys:attack"),
            hidden: FJ
          }), (0, jJ.jsx)(JZ, {
            code: tJ.b.Use,
            slot: rc,
            icon: rJ,
            name: eJ("touchKeys:use"),
            hidden: FJ
          })]
        }), yc(mJ, UJ), YJ > 0 && (0, jJ.jsx)(JZ, {
          code: tJ.b.Boost,
          slot: Ec,
          icon: ac,
          label: eJ("touchKeys:boost", {
            fuel: YJ > 99 ? "99+" : YJ
          }),
          hidden: FJ
        })]
      })
    }

    function JZ(JJ) {
      let {
        code: cJ,
        slot: ZJ,
        icon: FJ,
        label: UJ,
        name: eJ,
        hidden: XJ
      } = JJ;
      const AJ = Gc(cJ, XJ);
      return (0, jJ.jsx)(Vc, {
        ref: AJ,
        slot: ZJ,
        className: "TouchActionKey",
        canvasZone: !0,
        label: UJ,
        role: void 0 !== eJ ? "img" : void 0,
        "aria-label": eJ,
        children: (0, jJ.jsx)(qJ.d, {
          text: FJ
        })
      })
    }
    var cZ = ZJ(3737),
      ZZ = ZJ(2514),
      FZ = ZJ(556);
    const UZ = (0, FJ.memo)((function() {
      (0, xJ.d)();
      const JJ = (0, FJ.useRef)([]),
        cJ = (0, ZZ.c)(),
        ZJ = (0, FJ.useRef)(0),
        UJ = (0, FJ.useRef)(0),
        eJ = (0, FJ.useRef)([]),
        XJ = (0, FJ.useRef)(null);

      function YJ(ZJ, FJ, UJ, eJ) {
        const XJ = (0, FZ.b)(),
          AJ = setTimeout((() => {
            JJ.current = JJ.current.filter((JJ => JJ.id !== XJ)), cJ()
          }), eJ);
        DJ.gameBridge.send("recordFlyingMiddleText", {
          content: ZJ,
          NF: FJ,
          angle: UJ,
          TF: eJ
        }), JJ.current.push({
          id: XJ,
          content: ZJ,
          NF: FJ,
          TF: eJ,
          removeTimeout: AJ,
          angle: UJ
        }), cJ()
      }
      return (0, VJ.b)("shotDamageToShow", (JJ => {
        let {
          damage: cJ,
          wasCrit: ZJ,
          distance: FJ
        } = JJ;
        const UJ = -Math.PI / 4 + Math.random() * Math.PI / 2;
        YJ(ZJ ? [{
          str: cJ.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [cJ.toString()], FJ, UJ, 1e3)
      })), (0, AJ.i)("flyingMiddleMessage", (JJ => {
        let {
          content: cJ,
          NF: FJ,
          TF: AJ
        } = JJ;
        eJ.current.push({
          content: cJ,
          NF: FJ,
          TF: AJ
        });
        const qJ = () => {
          const {
            content: JJ,
            NF: cJ,
            TF: FJ
          } = eJ.current.shift(), XJ = function(JJ) {
            const cJ = -Math.PI / 4,
              ZJ = Math.PI / 4,
              FJ = ZJ - cJ,
              UJ = (1 + Math.sqrt(5)) / 2,
              eJ = 2 * Math.PI / (UJ * UJ);
            let XJ = JJ + eJ;
            for (; XJ > ZJ;) XJ -= FJ;
            for (; XJ < cJ;) XJ += FJ;
            const AJ = Math.PI / 6;
            if (Math.abs(XJ - JJ) < AJ) {
              XJ = JJ + (Math.sign(XJ - JJ) || 1) * AJ, XJ > ZJ && (XJ = JJ - AJ), XJ < cJ && (XJ = JJ + AJ)
            }
            return XJ
          }(UJ.current);
          UJ.current = XJ, ZJ.current = Date.now(), YJ(JJ, cJ, XJ, FJ)
        };
        if (!XJ.current) {
          const JJ = () => {
            eJ.current.length > 0 && qJ(), 0 === eJ.current.length && (clearInterval(XJ.current), XJ.current = null)
          };
          XJ.current = setInterval(JJ, 200), ZJ.current + 200 < Date.now() && JJ()
        }
        for (; eJ.current.length > 4;) qJ()
      })), (0, AJ.i)("forceFlyingMiddleMessage", (JJ => {
        let {
          content: cJ,
          NF: ZJ,
          angle: FJ,
          TF: UJ
        } = JJ;
        YJ(cJ, ZJ, FJ, UJ)
      })), (0, FJ.useEffect)((() => () => {
        clearInterval(XJ.current), XJ.current = null;
        for (const cJ of JJ.current) clearTimeout(cJ.removeTimeout)
      }), []), (0, jJ.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: JJ.current.map((JJ => {
          const {
            id: cJ,
            content: ZJ,
            NF: FJ,
            TF: UJ,
            angle: eJ
          } = JJ;
          return JJ.pos || (JJ.pos = function(JJ, cJ) {
            const ZJ = 50 / (JJ ** .7 * .35);
            return {
              x: ZJ * Math.sin(cJ),
              y: -ZJ * Math.cos(cJ)
            }
          }(FJ, eJ)), (0, jJ.jsx)(eZ, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: UJ,
            enterActiveStyle: {
              transform: `translate(${JJ.pos.x}vw, ${JJ.pos.y}vh)`,
              transition: `transform ${UJ}ms ease-out`
            },
            children: (0, jJ.jsx)("div", {
              children: (0, jJ.jsx)(qJ.d, {
                text: ZJ
              })
            })
          }, cJ)
        }))
      })
    }));

    function eZ(JJ) {
      let {
        children: cJ,
        className: ZJ,
        classNames: UJ,
        timeout: eJ,
        enterActiveStyle: XJ
      } = JJ;
      const [AJ, qJ] = (0, FJ.useState)(!1), [YJ, hJ] = (0, FJ.useState)(!1), DJ = (0, FJ.useRef)(null);
      return (0, FJ.useEffect)((() => {
        qJ(!0)
      }), []), (0, jJ.jsx)(cZ.d, {
        className: ZJ,
        classNames: UJ || ZJ,
        in: AJ,
        timeout: eJ,
        nodeRef: DJ,
        onEntering: () => {
          hJ(!0)
        },
        children: (0, FJ.cloneElement)(cJ, {
          ref: DJ,
          style: YJ && XJ || void 0
        })
      })
    }
    var XZ = ZJ(35658);

    function AZ() {
      const JJ = (0, VJ.f)("health");
      return (0, jJ.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, jJ.jsx)(XZ.b, {
          placement: "statBars"
        }), (0, jJ.jsx)(qZ, {
          actualValue: JJ.shield,
          maxValue: JJ.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, jJ.jsx)(qZ, {
          actualValue: JJ.health,
          maxValue: JJ.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function qZ(JJ) {
      let {
        actualValue: cJ,
        maxValue: ZJ,
        hideAtValue: FJ,
        icon: UJ,
        className: eJ
      } = JJ;
      return (0, xJ.e)(), null === cJ || null === ZJ || cJ === FJ || ZJ === FJ ? null : (0, jJ.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, jJ.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, jJ.jsx)("div", {
            className: `BottomScreenStatBar ${eJ}`,
            style: {
              transform: `scaleX(${Math.max(cJ/ZJ,0)})`,
              transformOrigin: "left center"
            }
          }), (0, jJ.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, jJ.jsx)(pJ.c, {
              name: UJ
            }), ` ${Math.ceil(cJ)}/${ZJ}`]
          })]
        })
      })
    }
    var jZ = ZJ(8557),
      YZ = ZJ(3950),
      hZ = ZJ(1221),
      DZ = ZJ(2381),
      sZ = ZJ(1329),
      nZ = ZJ(1201),
      GZ = ZJ(2910),
      fZ = ZJ(2951),
      xZ = ZJ(2924),
      rZ = ZJ(622),
      vZ = ZJ(2969),
      mZ = ZJ(112),
      QZ = ZJ(8493),
      EZ = ZJ(235);

    function VZ(JJ, cJ) {
      let {
        shownName: ZJ,
        lifeformType: FJ
      } = JJ;
      return null !== ZJ ? ZJ : null !== FJ ? cJ(`lifeform:${(0,EZ.be)(FJ)}`) : null
    }
    var KZ = ZJ(2920),
      yZ = ZJ(2922);
    const SZ = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      IZ = (0, FJ.memo)((function() {
        var JJ, cJ;
        const ZJ = (0, xJ.d)(),
          UJ = (0, sJ.useNavigatePreserveSearch)(),
          {
            t: XJ
          } = (0, bJ.F)(),
          {
            loadingOverlayVisible: qJ
          } = (0, KJ.j)(["loadingOverlayVisible"]),
          YJ = (0, SJ.q)(),
          [hJ, nJ] = (0, FJ.useState)(!1),
          [GJ, fJ] = (0, FJ.useState)(!0),
          [rJ, mJ] = (0, FJ.useState)(null),
          EJ = (0, ZZ.c)(),
          yJ = (0, vJ.f)("respawnButtonText"),
          IJ = (0, vJ.f)("usePlayAgainButton"),
          MJ = (0, vJ.f)("useRespawnButton"),
          {
            gameNameWithVariation: wJ
          } = (0, VJ.f)("connectedGame"),
          WJ = (0, FJ.useRef)(QJ.b.get("secsToRespawn")),
          gJ = (0, FJ.useRef)(DJ.gameBridge.latest("localPlayerAlive")),
          HJ = (0, FJ.useRef)(QJ.b.get("secsToRespawn")),
          PJ = (0, FJ.useRef)(QJ.b.get("autoRespawn")),
          kJ = (0, FJ.useRef)(null),
          dJ = (0, FJ.useRef)(0),
          zJ = (0, FJ.useRef)(0),
          [NJ, TJ] = (0, FJ.useState)(!1),
          CJ = (0, FJ.useRef)(null),
          uJ = (0, FJ.useRef)(null),
          iJ = (0, FJ.useRef)(null);
        (0, vJ.e)("secsToRespawn", (JJ => {
          console.log("Received new secsToRespawn with", JJ, "and current canRespawn value of ", PJ.current), HJ.current = JJ, BJ()
        })), (0, vJ.e)("autoRespawn", (JJ => {
          console.log("Received autorespawn", JJ, "current canRespawn value of ", WJ.current), PJ.current = JJ, BJ()
        }));
        const RJ = JJ => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", JJ), JJ || dJ.current++, gJ.current = JJ, BJ()
        };
        (0, VJ.b)("localPlayerAliveSet", RJ), (0, AJ.i)(fZ.n, (JJ => {
          "connected" === JJ && !gJ.current && PJ.current && WJ.current <= 0 && (zJ.current = 0, tJ())
        })), (0, FJ.useEffect)((() => {
          const JJ = DJ.gameBridge.latest("localPlayerAlive");
          JJ === gJ.current ? (console.log("Updating respawn component from initial mount"), BJ()) : RJ(JJ)
        }), []), (0, FJ.useEffect)((() => {
          if (hJ) {
            TJ(!1);
            const JJ = setTimeout((() => {
              TJ(!0)
            }), 600);
            return (0, QZ.d)(), () => {
              clearTimeout(JJ)
            }
          }
          return () => {}
        }), [hJ]);
        (0, VJ.b)("kill", (JJ => {
          let {
            killer: cJ,
            victim: ZJ,
            withItem: FJ
          } = JJ;
          if (!ZJ.local) return;
          const UJ = ((JJ, cJ) => {
            if (JJ.local) {
              const JJ = SZ[cJ];
              return JJ ? XJ(JJ) : null
            }
            const ZJ = VZ(JJ, XJ);
            return ZJ ? XJ("respawnPage:killedBy", {
              name: ZJ
            }) : null
          })(cJ, FJ);
          UJ && mJ({
            text: UJ,
            deathCount: gJ.current ? dJ.current + 1 : dJ.current
          })
        }));
        const LJ = () => {
            hJ && PJ.current && gJ.current && NJ && nJ(!1)
          },
          aJ = hJ && PJ.current && gJ.current && NJ && !qJ;
        (0, AJ.i)("usedKeyboard", (() => {
          LJ()
        })), (0, yZ.b)("respawn", aJ, LJ);
        const BJ = () => {
            fJ(HJ.current >= 3 || !PJ.current), gJ.current ? (clearInterval(kJ.current), kJ.current = null, PJ.current ? EJ() : nJ(!1)) : (nJ(!0), WJ.current = HJ.current, EJ(), console.log("Running respawn stats updated", PJ.current, WJ.current), PJ.current && WJ.current <= 0 && tJ(), clearInterval(kJ.current), WJ.current > 0 && (kJ.current = setInterval((() => {
              WJ.current = Math.max(WJ.current - 1, 0), EJ(), WJ.current <= 0 && (clearInterval(kJ.current), kJ.current = null, QJ.b.get("autoRespawn") && tJ())
            }), 1e3)))
          },
          tJ = () => {
            if (Date.now() - zJ.current > 1e3) {
              const JJ = () => {
                DJ.gameBridge.send("respawn", null), zJ.current = Date.now()
              };
              QJ.b.get("autoRespawn") ? JJ() : (0, nZ.db)((() => {
                JJ()
              }), "video_respawn")
            }
          },
          oJ = (0, FJ.useMemo)((() => {
            var JJ;
            return null === (JJ = (0, rZ.n)(wJ)) || void 0 === JJ ? void 0 : JJ.otherGameLinksOnRespawnPage
          }), [wJ]),
          lJ = 0 === WJ.current,
          Jc = (null === rJ || void 0 === rJ ? void 0 : rJ.deathCount) === dJ.current ? rJ.text : null,
          cc = hJ && GJ && !qJ,
          Zc = YJ && aJ && null !== (JJ = null === (cJ = (0, OJ.f)()) || void 0 === cJ ? void 0 : cJ.getBoundButton("menuConfirm")) && void 0 !== JJ ? JJ : null,
          Fc = JJ => lJ ? JJ : XJ("respawnPage:actionInSeconds", {
            action: JJ,
            seconds: WJ.current
          });
        return (0, jJ.jsx)(jZ.c, {
          showing: hJ,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, jJ.jsx)(GZ.b, {
            show: hJ,
            children: (0, jJ.jsxs)(YZ.c, {
              close: () => {
                nJ(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: PJ.current || qJ ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, mZ.f)() && (0, jJ.jsx)(sZ.b, {
                onClick: xZ.e,
                children: XJ("homePage:backToGames")
              }), (0, jJ.jsxs)("div", {
                className: "RespawnContainer",
                onClick: LJ,
                children: [(0, jJ.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, jJ.jsx)("div", {
                    ref: uJ,
                    className: "RespawnSideSquareBannerDiv",
                    children: ZJ[0] > 925 && (0, jJ.jsx)(DZ.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: uJ
                      },
                      showing: cc,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, jJ.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, jJ.jsxs)("div", {
                      className: eJ()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: YJ
                      }),
                      children: [PJ.current && (0, jJ.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, jJ.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, jJ.jsx)(pJ.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), XJ("respawnPage:youDied")]
                        }), (0, jJ.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Zc && (gJ.current ? XJ("respawnPage:pressAnywhereToContinue") : lJ ? XJ("respawnPage:respawning") : Fc(XJ("general:respawn"))), null !== Zc && (0, jJ.jsx)(KZ.d, {
                            text: XJ("controller:screensPressToContinue", {
                              button: KZ.f
                            }),
                            glyph: Zc,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Jc && (0, jJ.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Jc
                        })]
                      }), !PJ.current && (0, jJ.jsxs)(jJ.Fragment, {
                        children: [(0, jJ.jsxs)("div", {
                          className: eJ()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !oJ
                          }),
                          children: [IJ && (0, jJ.jsx)(sZ.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, nZ.db)((() => {
                                (0, KJ.h)("inGameReplay");
                                const JJ = (0, hZ.c)(wJ);
                                UJ(JJ)
                              }), "video_start")
                            },
                            disabled: !lJ || !NJ,
                            touchPressOn: "pointerup",
                            children: Fc(XJ("respawnPage:playAgain"))
                          }), MJ && (0, jJ.jsx)(sZ.d, {
                            className: "RespawnPageButton",
                            onClick: tJ,
                            padDefaultFocus: !IJ,
                            padBack: "sessionBasedGame:stayInLobby" === yJ,
                            disabled: !lJ || !NJ,
                            touchPressOn: "pointerup",
                            children: Fc(XJ(yJ))
                          }), !(0, mZ.f)() && (0, jJ.jsx)(sZ.I, {
                            className: "RespawnPageButton",
                            onClick: xZ.e,
                            disabled: !lJ || !NJ,
                            touchPressOn: "pointerup",
                            children: Fc(XJ("respawnPage:exitGame"))
                          })]
                        }), oJ && (0, jJ.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, jJ.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: XJ("respawnPage:orTry")
                          }), (0, jJ.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: oJ.map((JJ => (0, jJ.jsx)(vZ.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: JJ
                              },
                              disabled: !lJ || !NJ,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, KJ.h)("inGameReplay");
                                const cJ = (0, hZ.c)(JJ);
                                UJ(cJ)
                              }
                            }, JJ)))
                          })]
                        })]
                      })]
                    })
                  }), (0, jJ.jsx)("div", {
                    ref: iJ,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, jJ.jsx)("div", {
                  ref: CJ,
                  className: "RespawnBottom",
                  children: (0, jJ.jsx)(DZ.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: CJ
                    },
                    showing: cc,
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
    var MZ = ZJ(35669);
    const bZ = [{
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
      wZ = [{
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
      WZ = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      gZ = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      HZ = (0, FJ.memo)((function() {
        const JJ = (0, FJ.useRef)(null),
          cJ = (0, FJ.useRef)(null);

        function ZJ(ZJ) {
          var FJ;
          let {
            hU: UJ,
            screenPos: eJ
          } = ZJ;
          const XJ = JJ.current;
          null === (FJ = cJ.current) || void 0 === FJ || FJ.cancel(), XJ.classList.remove("HitmarkerCrit"), eJ ? (XJ.style.left = `${eJ.x}%`, XJ.style.top = `${eJ.y}%`) : (XJ.style.left = "50%", XJ.style.top = "50%"), XJ.style.rotate = 16 * (Math.random() - .5) + "deg", UJ && XJ.classList.add("HitmarkerCrit");
          const AJ = XJ.animate(UJ ? wZ : bZ, UJ ? gZ : WZ);
          cJ.current = AJ, AJ.onfinish = () => {
            XJ.classList.remove("HitmarkerCrit")
          }
        }
        return (0, AJ.i)("localGunHitmarker", (JJ => {
          let {
            hU: cJ
          } = JJ;
          ZJ({
            hU: cJ
          })
        })), (0, AJ.i)("yourAttackHit", (JJ => {
          let {
            hU: cJ,
            screenPos: FJ
          } = JJ;
          ZJ({
            hU: cJ,
            screenPos: KJ.d.get("isTouchScreen") ? FJ : void 0
          })
        })), (0, AJ.i)("sendHitmarker", (JJ => {
          let {
            hU: cJ,
            screenPos: FJ
          } = JJ;
          ZJ({
            hU: cJ,
            screenPos: FJ
          })
        })), (0, jJ.jsxs)("div", {
          ref: JJ,
          className: "Hitmarker",
          children: [(0, jJ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, jJ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, jJ.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, jJ.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function PZ() {
      const JJ = (0, FJ.useRef)(!0);
      return (0, AJ.i)("localBlockMined", (() => {
        Uc.g.play("blockMined")
      })), (0, AJ.i)("yourAttackHit", (() => {
        Uc.g.play("hitLanded")
      })), (0, AJ.i)("localGunHitmarker", (() => {
        Uc.g.play("hitLanded")
      })), (0, AJ.i)("damagedByOtherPlayer", (() => {
        Uc.g.play("damageTaken")
      })), (0, VJ.b)("localPlayerAliveSet", (cJ => {
        !cJ && JJ.current && Uc.g.play("death"), JJ.current = cJ
      })), null
    }
    var kZ = ZJ(1688),
      pZ = ZJ(35685),
      dZ = ZJ.n(pZ),
      zZ = ZJ(1811),
      NZ = ZJ(1795),
      OZ = ZJ(2778),
      TZ = ZJ(35740);
    const CZ = EZ.Vd ? 7e7 : 7e3,
      uZ = dZ()("#ffffff").alpha(.5).string();

    function iZ(JJ) {
      const cJ = (0, OZ.c)(JJ);
      return void 0 !== cJ && "Gun" === (0, TZ.itemTypeOf)(cJ)
    }

    function RZ(JJ) {
      if (!JJ) return console.error(`Killfeed colour was ${JJ}`), uZ;
      try {
        return dZ()(JJ).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${JJ} is not a colour`), uZ
      }
    }
    const LZ = (0, FJ.memo)((function() {
      const {
        t: JJ
      } = (0, bJ.F)(), cJ = (0, FJ.useRef)([]), ZJ = (0, ZZ.c)();
      return (0, VJ.b)("kill", (function(FJ) {
        var UJ, eJ;
        let {
          killer: XJ,
          victim: AJ,
          withItem: qJ,
          killstreak: jJ
        } = FJ;
        const YJ = cJ.current;
        if (YJ.length >= 3) {
          const JJ = YJ.shift();
          clearTimeout(JJ.timeout)
        }
        const hJ = DJ.gameBridge.latest("hiddenPlayerNames"),
          sJ = {
            deadName: VZ(AJ, JJ),
            killerName: VZ(XJ, JJ),
            isFriend: {
              killer: (0, zZ.e)(XJ.realName, hJ),
              dead: (0, zZ.e)(AJ.realName, hJ)
            },
            withItem: qJ,
            wasHeadshot: !1,
            killstreak: jJ,
            timeout: setTimeout((() => {
              YJ.shift(), ZJ()
            }), CZ),
            reactId: `${null!==(UJ=XJ.id)&&void 0!==UJ?UJ:XJ.shownName}|${null!==(eJ=AJ.id)&&void 0!==eJ?eJ:AJ.shownName}|${Date.now()}`,
            killerBackground: RZ(XJ.colour),
            deadBackground: RZ(AJ.colour)
          };
        YJ.push(sJ), ZJ()
      })), (0, FJ.useEffect)((() => {
        const JJ = cJ.current;
        return () => {
          for (; JJ.length > 0;) {
            const {
              timeout: cJ
            } = JJ.pop();
            clearTimeout(cJ)
          }
        }
      }), []), (0, jJ.jsx)("div", {
        className: "Killfeed",
        children: cJ.current.map((JJ => {
          let {
            deadName: cJ,
            killerName: ZJ,
            withItem: FJ,
            wasHeadshot: UJ,
            killstreak: eJ,
            killerBackground: XJ,
            deadBackground: AJ,
            reactId: qJ,
            isFriend: YJ
          } = JJ;
          return (0, jJ.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${XJ} calc(100% - 10rem), ${AJ} 100%)`
            },
            children: [eJ >= 2 ? (0, jJ.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, EZ.O)(eJ)
            }) : null, (0, jJ.jsx)("div", {
              className: "KillfeedKillerName",
              children: ZJ
            }), YJ.killer && (0, jJ.jsx)(NZ.d, {}), (0, jJ.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: iZ(FJ) ? "7.5vmin" : "5vmin"
              },
              children: (0, jJ.jsx)(kZ.d, {
                itemName: FJ,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), UJ ? (0, jJ.jsx)(pJ.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, jJ.jsx)("div", {
              className: "KillfeedDeadName",
              children: cJ
            }), YJ.dead && (0, jJ.jsx)(NZ.d, {})]
          }, qJ)
        }))
      })
    }));
    var aZ = ZJ(35745),
      BZ = ZJ(35753),
      tZ = ZJ.n(BZ),
      oZ = ZJ(2893),
      lZ = ZJ(35759),
      JF = ZJ(1192);
    const cF = {},
      ZF = (0, FJ.memo)((function() {
        const JJ = (0, FJ.useRef)({}),
          [, cJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
        (0, AJ.i)("setDirectionArrow", (ZJ => {
          let {
            id: FJ,
            position: UJ,
            style: eJ,
            text: XJ,
            vc: AJ
          } = ZJ;
          const qJ = JJ.current,
            jJ = eJ || cF,
            YJ = XJ,
            hJ = qJ[FJ];
          if (!hJ) return qJ[FJ] = {
            position: UJ,
            style: jJ,
            text: YJ,
            shouldShowDistance: AJ,
            vW: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void cJ();
          const DJ = !tZ()(hJ.style, jJ) || !tZ()(hJ.text, YJ) || hJ.shouldShowDistance !== AJ;
          hJ.position = UJ, hJ.style = jJ, hJ.text = YJ, hJ.shouldShowDistance = AJ, DJ && cJ()
        })), (0, AJ.i)("clearDirectionArrow", (ZJ => {
          let {
            id: FJ
          } = ZJ;
          const UJ = JJ.current;
          if (null === FJ)
            for (const JJ in UJ) delete UJ[JJ];
          else delete UJ[FJ];
          cJ()
        })), (0, FJ.useEffect)((() => {
          const cJ = JJ.current,
            ZJ = (0, JF.q)((() => {
              ! function(JJ) {
                const cJ = DJ.gameBridge.lookup("localPos", null),
                  ZJ = oZ.e - FF,
                  FJ = (0, oZ.n)() - FF;
                for (const UJ in JJ) {
                  const eJ = JJ[UJ];
                  if (!eJ.vW) continue;
                  const XJ = DJ.gameBridge.lookup("screenPos", eJ.position),
                    AJ = XJ.x - 50,
                    qJ = XJ.y - 50;
                  XJ.x === eJ.lastScreenX && XJ.y === eJ.lastScreenY || (eJ.lastScreenX = XJ.x, eJ.lastScreenY = XJ.y, eJ.vW.style.translate = `${XJ.x}vw ${XJ.y}vh`, eJ.chevronElement && (eJ.chevronElement.style.rotate = `${EZ.c.fastATan2(qJ,AJ)}rad`));
                  const jJ = Math.abs(AJ) < ZJ && Math.abs(qJ) < FJ;
                  if (jJ !== eJ.onScreen && (eJ.onScreen = jJ, eJ.vW.classList.toggle("DirectionArrowOnScreen", jJ)), eJ.shouldShowDistance && eJ.distanceElement) {
                    const JJ = eJ.position[0] - cJ[0],
                      ZJ = eJ.position[1] - cJ[1],
                      FJ = eJ.position[2] - cJ[2],
                      UJ = Math.round(Math.sqrt(JJ * JJ + ZJ * ZJ + FJ * FJ));
                    (-1 === eJ.lastRenderedDist || (0, lZ.e)(UJ, eJ.lastRenderedDist, eJ.lastDistUpdateTime)) && (eJ.distanceElement.textContent = `${UJ}m`, eJ.lastRenderedDist = UJ, eJ.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(cJ)
            }));
          return () => {
            ZJ();
            for (const JJ in cJ) delete cJ[JJ]
          }
        }), []);
        const ZJ = JJ.current;
        return (0, jJ.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(ZJ).map((JJ => {
            var cJ;
            let [FJ, UJ] = JJ;
            const eJ = null !== (cJ = (0, rJ.Lb)(UJ.style)) && void 0 !== cJ ? cJ : "#ffffff";
            return (0, jJ.jsxs)("div", {
              ref: JJ => {
                ZJ[FJ] && (ZJ[FJ].vW = JJ)
              },
              className: "DirectionArrow",
              style: {
                fontSize: UJ.style.fontSize,
                opacity: UJ.style.opacity
              },
              children: [(0, jJ.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: JJ => {
                  ZJ[FJ] && (ZJ[FJ].chevronElement = JJ)
                },
                children: [(0, jJ.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, jJ.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, jJ.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, jJ.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, jJ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: eJ
                    }
                  }), (0, jJ.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: eJ
                    }
                  })]
                })]
              }), (0, jJ.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: eJ,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${eJ}`
                }
              }), UJ.text && (0, jJ.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: eJ,
                  fontWeight: UJ.style.fontWeight,
                  fontStyle: UJ.style.fontStyle
                },
                children: (0, jJ.jsx)(qJ.d, {
                  text: UJ.text
                })
              }), UJ.shouldShowDistance && (0, jJ.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: JJ => {
                  ZJ[FJ] && (ZJ[FJ].distanceElement = JJ)
                },
                style: {
                  color: eJ,
                  fontWeight: UJ.style.fontWeight,
                  fontStyle: UJ.style.fontStyle
                }
              })]
            }, FJ)
          }))
        })
      })),
      FF = .5;
    const UF = (0, FJ.memo)((function(JJ) {
        let {
          isTouchScreen: cJ
        } = JJ;
        return (0, jJ.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, jJ.jsx)(qF, {}), cJ && (0, jJ.jsx)(Nc, {})]
        })
      })),
      eF = {
        readyForNext: 0,
        running: 1
      },
      XF = 50;

    function AF(JJ) {
      console.assert(JJ.state.current === eF.readyForNext);
      const cJ = JJ.queue.current,
        ZJ = JJ.foreground.current;
      if (cJ.length > 0 && ZJ) {
        const {
          toFraction: FJ,
          toDuration: UJ
        } = cJ.shift();
        JJ.state.current = eF.running, ZJ.style.transition = `transform ${Math.max(UJ-XF,0)}ms linear`, ZJ.classList.remove("Complete"), JJ.timeout.current = setTimeout((() => {
          ZJ.style.transform = `scaleX(${FJ})`, JJ.timeout.current = setTimeout((() => {
            1 === FJ && ZJ.classList.add("Complete"), JJ.state.current = eF.readyForNext, AF(JJ)
          }), Math.max(UJ - XF, 0))
        }), XF)
      }
    }

    function qF() {
      const JJ = (0, FJ.useRef)([]),
        cJ = (0, FJ.useRef)(eF.readyForNext),
        ZJ = (0, FJ.useRef)(void 0),
        UJ = (0, FJ.useRef)(null),
        eJ = (0, FJ.useRef)({
          queue: JJ,
          state: cJ,
          timeout: ZJ,
          foreground: UJ
        }),
        XJ = (0, vJ.f)("showProgressBar");
      if ((0, FJ.useLayoutEffect)((() => (XJ && cJ.current === eF.readyForNext && AF(eJ.current), () => {
          cJ.current = eF.readyForNext, clearTimeout(ZJ.current), XJ && (JJ.current.length = 0)
        })), [XJ]), (0, AJ.i)("progressBarUpdate", (ZJ => {
          let {
            toFraction: FJ,
            toDuration: UJ
          } = ZJ;
          JJ.current.push({
            toFraction: FJ,
            toDuration: UJ
          }), cJ.current === eF.readyForNext && AF(eJ.current)
        })), !XJ) return null;
      return (0, jJ.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, jJ.jsx)("div", {
          className: "ProgressBarForeground",
          ref: UJ,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var jF = ZJ(35765);
    var YF = ZJ(3150),
      hF = ZJ(3142),
      DF = ZJ(1528),
      sF = ZJ(1389),
      nF = ZJ(1537),
      GF = ZJ(1599),
      fF = ZJ(1876),
      xF = ZJ(1028),
      rF = ZJ(3762),
      vF = ZJ(1357),
      mF = ZJ(1250);
    const QF = 2e4,
      EF = 6e5,
      VF = new Set;

    function KF() {
      const {
        gameEntrySource: JJ,
        loadingOverlayVisible: cJ
      } = (0, KJ.j)(["gameEntrySource", "loadingOverlayVisible"]), ZJ = (0, VJ.d)("connectedGame", (JJ => (0, rF.j)(JJ) ? JJ.lobbyName : null)), UJ = (0, VJ.f)("localPlayerAlive"), eJ = (0, VJ.d)("players", (JJ => null !== JJ.localId && void 0 !== JJ.byId[JJ.localId])), [XJ, AJ] = (0, FJ.useState)(null);
      return !cJ && UJ && eJ && null !== ZJ && XJ !== ZJ && AJ(ZJ), (0, FJ.useEffect)((() => {
        if (!(0, rF.k)(JJ) || null === XJ || XJ !== ZJ || VF.has(XJ)) return;
        const cJ = setTimeout((() => {
          VF.add(XJ), async function(JJ) {
            const cJ = await xF.userContextManager.getCurrentUserContext();
            let ZJ;
            try {
              ZJ = (await sF.c.getWorldOwnerFriendOffer(cJ)).owner
            } catch (UJ) {
              return void console.warn("Couldn't ask who owns this world", UJ)
            }
            if (!ZJ || (0, rF.o)(ZJ.name, Date.now())) return;
            const FJ = ZJ;
            ! function(JJ, cJ) {
              const ZJ = Date.now() + EF;
              let FJ = Date.now(),
                UJ = 0;
              const eJ = () => {
                const XJ = Date.now(),
                  AJ = DJ.gameBridge.latest("connectedGame");
                AJ.lobbyName !== JJ || XJ > ZJ || (null === AJ.websocketUrl ? FJ = 1 / 0 : FJ === 1 / 0 && !KJ.d.get("loadingOverlayVisible") && DJ.gameBridge.latest("localPlayerAlive") && (FJ = XJ + QF), UJ = XJ < FJ || !DJ.gameBridge.latest("localPlayerAlive") || KJ.d.get("isUiHidden") || KJ.d.get("isUiHiddenByCamera") || (0, GF.isTypingInInput)() || KJ.d.get("loadingOverlayVisible") || (0, DF.l)() || (0, YF.e)() || (0, mF.k)() ? 0 : UJ + 1, UJ >= 2 ? cJ() : setTimeout(eJ, 500))
              };
              eJ()
            }(JJ, (() => {
              (0, rF.f)(nF.b.getSocialState().friends, FJ.name) || ((0, rF.n)(FJ.name, Date.now()), fF.f.showWorldOwnerOffer(FJ), (0, vF.f)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(XJ).catch((JJ => {
            console.error("Failed to offer the world's owner as a friend", JJ)
          }))
        }), QF);
        return () => {
          clearTimeout(cJ)
        }
      }), [JJ, XJ, ZJ]), null
    }
    var yF = ZJ(1677);
    const SF = (0, FJ.memo)((function(JJ) {
        let {
          durationMs: cJ,
          endsAtMs: ZJ
        } = JJ;
        const [, UJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0), eJ = null === ZJ ? cJ : Math.max(ZJ - Date.now(), 0);
        return (0, FJ.useEffect)((() => {
          if (null === ZJ || eJ <= 0) return;
          const JJ = setTimeout(UJ, eJ - 1e3 * (Math.ceil(eJ / 1e3) - 1));
          return () => {
            clearTimeout(JJ)
          }
        })), (0, jJ.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, EZ.cb)(eJ)
        })
      })),
      IF = (0, FJ.memo)((function() {
        const JJ = (0, VJ.f)("localEffects");
        return (0, jJ.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(JJ).map((JJ => {
            let [cJ, {
              icon: ZJ,
              displayName: FJ,
              durationMs: UJ,
              endsAtMs: eJ,
              level: XJ
            }] = JJ;
            return (0, jJ.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, jJ.jsx)(yF.c, {
                icon: ZJ,
                className: "EffectInfoIcon"
              }), (0, jJ.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== UJ ? "0" : "1rem"
                },
                children: [(0, jJ.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, jJ.jsx)(qJ.d, {
                    text: null !== FJ && void 0 !== FJ ? FJ : cJ,
                    className: "EffectInfoName SmallTextBold"
                  }), XJ > 1 && (0, jJ.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, EZ.O)(XJ)
                  })]
                }), null !== UJ && (0, jJ.jsx)(SF, {
                  durationMs: UJ,
                  endsAtMs: eJ
                })]
              })]
            }, cJ)
          }))
        })
      }));
    var MF = ZJ(35774),
      bF = ZJ(35909),
      wF = ZJ(157),
      WF = ZJ(1247),
      gF = ZJ(2393);

    function HF(JJ, cJ) {
      (0, FJ.useLayoutEffect)((() => {
        let cJ, ZJ;
        const FJ = requestAnimationFrame((() => {
          ZJ = setTimeout((() => {
            ZJ = void 0;
            const FJ = JJ();
            cJ = "function" === typeof FJ ? FJ : void 0
          }), 0)
        }));
        return () => {
          var JJ;
          cancelAnimationFrame(FJ), clearTimeout(ZJ), null === (JJ = cJ) || void 0 === JJ || JJ()
        }
      }), cJ)
    }
    const PF = [5, 5, 5],
      kF = [7, 4, 4, 4];

    function pF(JJ) {
      return JJ.reduce(((JJ, cJ) => JJ + cJ), 0)
    }

    function dF(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = JJ.getContext("2d");
      if (!eJ) return null;
      const XJ = cJ.fontFamily,
        AJ = cJ.fontWeight;
      return JJ.width = ZJ, JJ.height = FJ, eJ.fillStyle = cJ.color, eJ.textAlign = "center", eJ.textBaseline = "middle", eJ.font = `${AJ} ${UJ}px ${XJ}`, eJ
    }
    const zF = (0, FJ.memo)((function(JJ) {
      let {
        show: cJ
      } = JJ;
      const ZJ = (0, FJ.useRef)(null),
        UJ = (0, FJ.useRef)(null),
        eJ = (0, FJ.useRef)(null),
        XJ = (0, nJ.l)();
      return (0, FJ.useEffect)((() => XJ.whenShown((() => {
        let JJ = 0,
          cJ = 0,
          ZJ = 0,
          FJ = 0;
        const XJ = (0, JF.q)((() => {
          var XJ;
          JJ++, cJ++;
          const AJ = performance.now();
          if (AJ - ZJ < 1e3) return;
          const qJ = Math.round(JJ / (AJ - ZJ) * 1e3);
          if (UJ.current = qJ, null === (XJ = eJ.current) || void 0 === XJ || XJ.call(eJ, qJ), JJ = 0, ZJ = AJ, qJ < 55) {
            var jJ, YJ;
            FJ += 1;
            const JJ = EJ.j.getItem("decreaseLoadDistPromptDeniedCount"),
              [cJ, ZJ] = QJ.b.get("minChunkAddDist");
            if (FJ >= 15 && function(JJ, cJ) {
                const ZJ = DJ.gameBridge.lookup("EQ", null);
                return null !== ZJ && (ZJ.horizontal > JJ || ZJ.vertical > cJ)
              }(cJ, ZJ) && (null !== (jJ = EJ.j.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== jJ ? jJ : 0) + 432e5 < Date.now() && (null !== (YJ = EJ.j.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== YJ ? YJ : 0) < 3) {
              EJ.j.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              WF.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((FJ => {
                "notificationTornDown" !== FJ && (FJ ? (DJ.gameBridge.send("setChunkAddDistance", {
                  horizontal: cJ,
                  vertical: ZJ
                }), EJ.j.setItem("chunkHorizAddDist", cJ), EJ.j.setItem("chunkVertAddDist", ZJ), mJ.i.Uf("updatedChunkLoadDist"), EJ.j.setItem("decreaseLoadDistPromptDeniedCount", 0)) : EJ.j.setItem("decreaseLoadDistPromptDeniedCount", JJ + 1))
              }))
            }
          } else FJ = 0
        }));
        let AJ = performance.now();
        cJ = 0;
        let qJ = null,
          jJ = !document.hidden;

        function YJ() {
          const JJ = performance.now() - AJ,
            ZJ = 1e3 * cJ / JJ;
          jJ && (null === qJ && (qJ = ZJ), gF.d.setFps(ZJ, qJ)), cJ = 0, AJ = performance.now()
        }
        let hJ = setInterval(YJ, 15e3);

        function sJ() {
          const JJ = jJ;
          jJ = !document.hidden, !JJ && jJ && (cJ = 0, AJ = performance.now(), clearInterval(hJ), hJ = setInterval(YJ, 15e3))
        }
        return document.addEventListener("visibilitychange", sJ), () => {
          XJ(), document.removeEventListener("visibilitychange", sJ), clearInterval(hJ)
        }
      }))), [XJ]), HF((() => {
        var JJ;
        if (!cJ || eJ.current) return;
        const FJ = ZJ.current,
          XJ = window.getComputedStyle(FJ.parentElement),
          AJ = null !== (JJ = window.devicePixelRatio) && void 0 !== JJ ? JJ : 1,
          qJ = parseFloat(XJ.fontSize) * AJ,
          jJ = Math.round(3 * qJ),
          YJ = Math.round(qJ),
          hJ = dF(FJ, XJ, jJ, YJ, qJ);
        if (!hJ) return;
        const DJ = JJ => {
          hJ.clearRect(0, 0, FJ.width, FJ.height), hJ.fillText(JJ.toString(), FJ.width / 2, FJ.height / 2)
        };
        eJ.current = DJ, null !== UJ.current && DJ(UJ.current)
      }), [cJ]), (0, jJ.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: cJ ? "flex" : "none"
        },
        children: [(0, jJ.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, jJ.jsx)("canvas", {
          className: "FpsCanvas",
          ref: ZJ,
          width: 48,
          height: 16
        })]
      })
    }));

    function NF(JJ) {
      return Math.sign(JJ) * Math.round(100 * Math.abs(JJ))
    }

    function OF(JJ) {
      let {
        getCoordinates: cJ,
        showChunkCoords: ZJ,
        columns: UJ
      } = JJ;
      const eJ = (0, FJ.useRef)(null);
      return HF((() => {
        var JJ;
        const FJ = eJ.current,
          XJ = window.getComputedStyle(FJ.parentElement),
          AJ = null !== (JJ = window.devicePixelRatio) && void 0 !== JJ ? JJ : 1,
          qJ = parseFloat(XJ.fontSize) * AJ,
          jJ = Math.round(qJ * pF(UJ)),
          YJ = Math.round(qJ),
          hJ = dF(FJ, XJ, jJ, YJ, qJ);
        if (!hJ) return;
        let sJ = !0,
          nJ = 0,
          GJ = 0,
          fJ = 0,
          xJ = 0,
          rJ = 0,
          vJ = 0;
        const mJ = () => {
          sJ = !0
        };
        document.fonts.load(hJ.font).then(mJ, mJ);
        const QJ = () => {
          dF(FJ, XJ, jJ, YJ, qJ), mJ()
        };
        FJ.addEventListener("contextrestored", QJ);
        const EJ = (0, JF.u)((() => {
          var JJ, eJ, XJ, AJ, jJ, YJ;
          const [mJ, QJ, EJ] = cJ(), VJ = NF(mJ), KJ = NF(QJ), yJ = NF(EJ);
          let SJ = null;
          if (ZJ) {
            const JJ = DJ.gameBridge.lookup("localPos", null);
            SJ = (0, Jc.eb)(JJ[0], JJ[1], JJ[2])
          }
          const IJ = null !== (JJ = null === (eJ = SJ) || void 0 === eJ ? void 0 : eJ[0]) && void 0 !== JJ ? JJ : 0,
            MJ = null !== (XJ = null === (AJ = SJ) || void 0 === AJ ? void 0 : AJ[1]) && void 0 !== XJ ? XJ : 0,
            bJ = null !== (jJ = null === (YJ = SJ) || void 0 === YJ ? void 0 : YJ[2]) && void 0 !== jJ ? jJ : 0;
          if (!sJ && VJ === nJ && KJ === GJ && yJ === fJ && IJ === xJ && MJ === rJ && bJ === vJ) return;
          sJ = !1, nJ = VJ, GJ = KJ, fJ = yJ, xJ = IJ, rJ = MJ, vJ = bJ;
          const wJ = [(VJ / 100).toFixed(2), (KJ / 100).toFixed(2), (yJ / 100).toFixed(2)];
          SJ && wJ.unshift(`${IJ} ${MJ} ${bJ}`), hJ.clearRect(0, 0, FJ.width, FJ.height);
          const WJ = FJ.height / 2;
          let gJ = 0;
          for (let cJ = 0; cJ < wJ.length; cJ++) {
            const JJ = qJ * UJ[cJ];
            hJ.fillText(wJ[cJ], gJ + JJ / 2, WJ, JJ), gJ += JJ
          }
        }));
        return () => {
          EJ(), FJ.removeEventListener("contextrestored", QJ)
        }
      }), [cJ, ZJ, UJ]), (0, jJ.jsx)("div", {
        className: "CoordinateUI",
        children: (0, jJ.jsx)("canvas", {
          ref: eJ,
          className: "CoordinateCanvas",
          width: 16 * pF(UJ),
          height: 16
        })
      })
    }
    const TF = (0, FJ.memo)((function() {
        const JJ = (0, FJ.useCallback)((() => {
          const JJ = DJ.gameBridge.lookup("localPos", null);
          return [JJ[0], JJ[1], JJ[2]]
        }), []);
        return (0, jJ.jsx)(OF, {
          getCoordinates: JJ,
          showChunkCoords: !1,
          columns: PF
        })
      })),
      CF = (0, FJ.memo)((function() {
        const JJ = (0, FJ.useCallback)((() => {
          const JJ = DJ.gameBridge.lookup("localPos", null),
            cJ = wF.c.Kn;
          let ZJ = JJ[0] % cJ,
            FJ = JJ[1] % cJ,
            UJ = JJ[2] % cJ;
          return ZJ < 0 && (ZJ += cJ), FJ < 0 && (FJ += cJ), UJ < 0 && (UJ += cJ), [ZJ, FJ, UJ]
        }), []);
        return (0, jJ.jsx)(OF, {
          getCoordinates: JJ,
          showChunkCoords: !0,
          columns: kF
        })
      }));
    var uF = ZJ(1832),
      iF = ZJ(1232),
      RF = ZJ(889),
      LF = ZJ(1122),
      aF = ZJ(80),
      BF = ZJ(35783),
      tF = ZJ(1335),
      oF = ZJ(2642);
    const lF = (0, FJ.memo)((function() {
      const JJ = (0, vJ.f)("maxAuraLevel");
      return 0 === JJ ? null : (0, jJ.jsx)(JU, {
        maxLevel: JJ
      })
    }));

    function JU(JJ) {
      let {
        maxLevel: cJ
      } = JJ;
      const ZJ = (0, vJ.f)("auraPerLevel"),
        [UJ, eJ] = (0, FJ.useState)((() => {
          var JJ;
          return null !== (JJ = DJ.gameBridge.latest("aura")) && void 0 !== JJ ? JJ : void 0
        })),
        [XJ, AJ] = (0, FJ.useState)((() => mJ(UJ))),
        [qJ, YJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0),
        hJ = (0, FJ.useRef)(null),
        sJ = (0, FJ.useRef)([]),
        nJ = (0, FJ.useRef)({
          width: 0,
          level: 0
        }),
        GJ = (0, FJ.useRef)(null),
        fJ = (0, FJ.useRef)(null);

      function rJ() {
        if (null !== GJ.current) return;
        if (0 === sJ.current.length) return;
        const {
          width: JJ,
          level: cJ
        } = sJ.current.shift();
        let ZJ;
        if (cJ !== nJ.current.level && cJ > nJ.current.level !== JJ > nJ.current.width) {
          const FJ = cJ > nJ.current.level;
          ZJ = FJ ? JJ : 100 - JJ, hJ.current.style.transition = "none", hJ.current.style.width = FJ ? "0%" : "100%", hJ.current.offsetWidth
        } else ZJ = Math.abs(JJ - nJ.current.width);
        const FJ = 100 * ZJ / 20;
        hJ.current.style.transition = `width ${FJ}ms linear`, AJ(JJ), nJ.current = {
          width: JJ,
          level: cJ
        }, sJ.current.length > 0 && (GJ.current = setTimeout((() => {
          GJ.current = null, rJ()
        }), FJ))
      }

      function mJ(JJ) {
        return Math.floor(JJ / ZJ) === cJ ? 100 : JJ % ZJ / ZJ * 100
      }
      return (0, FJ.useEffect)((() => () => {
        clearTimeout(GJ.current), clearTimeout(fJ.current), GJ.current = null, fJ.current = null
      }), []), (0, VJ.b)("aura", (JJ => {
        if (fJ.current && clearTimeout(fJ.current), null === JJ) return clearTimeout(GJ.current), fJ.current = null, GJ.current = null, sJ.current = [], nJ.current = {
          width: 0,
          level: 0
        }, eJ(void 0), void AJ(0);
        fJ.current = setTimeout((() => {
          const cJ = Math.floor(UJ / ZJ),
            FJ = Math.floor(JJ / ZJ),
            XJ = mJ(JJ);
          JJ > UJ && BF.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), FJ > cJ ? (FJ % 5 === 0 && BF.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), YJ(), sJ.current.push({
            width: 100,
            level: cJ
          })) : FJ < cJ && sJ.current.push({
            width: 0,
            level: cJ
          }), JJ === UJ && FJ === cJ || sJ.current.push({
            width: XJ,
            level: FJ
          }), eJ(JJ), rJ()
        }), 50)
      })), (0, xJ.e)(), (0, jJ.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, jJ.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, jJ.jsx)(tF.c, {
            showSignal: qJ,
            particleElement: (0, jJ.jsx)("img", {
              src: (0, oF.d)("glint"),
              alt: ""
            })
          }), (0, jJ.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, oF.d)("glint"),
            alt: "aura"
          }), (0, jJ.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== UJ && void 0 !== UJ ? UJ : 0) / ZJ)
          })]
        }), (0, jJ.jsx)("div", {
          className: "AuraBar",
          children: (0, jJ.jsx)("div", {
            ref: hJ,
            className: "AuraBarBackground",
            style: {
              width: `${XJ}%`
            }
          })
        })]
      })
    }
    var cU = ZJ(2222);

    function ZU(JJ) {
      JJ.timed && (JJ.endedAnimation = JJ.timed.animation, JJ.timed = null)
    }
    const FU = (0, FJ.memo)((function() {
      const JJ = (0, FJ.useRef)(null),
        cJ = (0, FJ.useRef)(null),
        ZJ = (0, FJ.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, AJ.i)("middleScreenBarInitiate", (JJ => {
        var FJ;
        let {
          duration: UJ,
          GJ: eJ,
          horizBarRemOffset: XJ
        } = JJ;
        const AJ = ZJ.current;
        ZU(AJ);
        const qJ = cJ.current;
        if (!(UJ >= 0) || !qJ) return;
        null === (FJ = AJ.endedAnimation) || void 0 === FJ || FJ.cancel(), AJ.endedAnimation = null;
        const jJ = qJ.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: UJ,
          fill: "forwards"
        });
        AJ.timed = {
          GJ: eJ,
          horizBarRemOffset: XJ,
          animation: jJ
        }
      })), (0, AJ.i)("middleScreenBarRemove", (() => {
        ZU(ZJ.current)
      })), (0, FJ.useEffect)((() => {
        const FJ = ZJ.current;
        let UJ = Number.NaN,
          eJ = Number.NaN,
          XJ = Number.NaN;
        return (0, JF.n)((() => {
          var ZJ, AJ, qJ, jJ;
          const YJ = JJ.current,
            hJ = cJ.current;
          if (!YJ || !hJ) return;
          null !== (ZJ = FJ.timed) && void 0 !== ZJ && ZJ.GJ && "finished" === FJ.timed.animation.playState && ZU(FJ), null === (AJ = FJ.endedAnimation) || void 0 === AJ || AJ.cancel(), FJ.endedAnimation = null;
          let sJ = FJ.timed ? 1 : 0;
          if (!FJ.timed) {
            const JJ = DJ.gameBridge.lookup("momentumFrac", null);
            sJ = JJ > 0 ? 1 : 0, JJ !== XJ && (XJ = JJ, hJ.style.transform = `scaleX(${JJ})`)
          }
          const nJ = null !== (qJ = null === (jJ = FJ.timed) || void 0 === jJ ? void 0 : jJ.horizBarRemOffset) && void 0 !== qJ ? qJ : 0;
          nJ === UJ && sJ === eJ || (UJ = nJ, eJ = sJ, YJ.style.transform = `translateX(calc(-50% + ${nJ}rem)) scaleX(${sJ})`)
        }))
      }), []), (0, jJ.jsx)("div", {
        className: "MiddleScreenBar",
        ref: JJ,
        children: (0, jJ.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: cJ
        })
      })
    }));
    var UU = ZJ(4092),
      eU = ZJ(2377);

    function XU() {
      const {
        t: JJ
      } = (0, bJ.F)(), cJ = (0, AJ.m)("serverUpdating", null), ZJ = (0, eU.d)(250, null !== cJ);
      return null === cJ || ZJ - cJ > 3e4 ? null : (0, jJ.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, jJ.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: JJ("updateWaiting:updatingIn", {
            countdown: (0, UU.t)(cJ - ZJ)
          })
        }), (0, jJ.jsx)("div", {
          children: JJ("updateWaiting:bringYouBack")
        })]
      })
    }
    var AU = ZJ(35935),
      qU = ZJ(1756);
    const jU = [{
        translationKey: "general:interact"
      }],
      YU = (0, FJ.memo)((function() {
        const JJ = (0, vJ.f)("crosshairText"),
          {
            interactPrompt: cJ,
            blockText: ZJ,
            neededTool: UJ
          } = (0, VJ.f)("crosshairTarget"),
          {
            isTouchScreen: eJ
          } = (0, KJ.j)(["isTouchScreen"]),
          XJ = (0, SJ.q)(),
          YJ = (0, MJ.b)("alt-fire");
        (0, FJ.useEffect)((() => {
          DJ.gameBridge.send("setCrosshairInteractPrompt", !eJ || XJ ? "key" : "touch")
        }), [eJ, XJ]);
        const [hJ, sJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
        (0, AJ.i)("customBindingsChanged", sJ);
        var nJ;
        if (null !== cJ && (XJ && null !== YJ || !eJ && null !== (0, qU.u)("alt-fire"))) return (0, jJ.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, jJ.jsx)(yJ.e, {
            noaAction: "alt-fire"
          }), (0, jJ.jsx)(qJ.d, {
            text: null !== (nJ = cJ.label) && void 0 !== nJ ? nJ : jU
          })]
        });
        let GJ = null;
        return null !== ZJ ? GJ = ZJ : null !== JJ && "" !== JJ ? GJ = JJ : null !== UJ && (GJ = [{
          icon: UJ,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), GJ ? (0, jJ.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, jJ.jsx)(qJ.d, {
            text: GJ
          })
        }) : null
      }));
    var hU = ZJ(2231);
    const DU = (0, FJ.memo)((function() {
      var JJ;
      const {
        interactPrompt: cJ
      } = (0, VJ.f)("crosshairTarget"), {
        openInGameMenuName: ZJ,
        openEverythingMenuName: FJ
      } = (0, KJ.j)(["openInGameMenuName", "openEverythingMenuName"]), UJ = (0, AJ.m)("aimingOverlay", "none"), eJ = (0, LJ.f)(), XJ = (0, hU.c)();
      return null === cJ || null !== ZJ || null !== FJ || "sniper" === UJ || eJ || XJ ? null : (0, jJ.jsx)(sU, {
        label: null !== (JJ = cJ.label) && void 0 !== JJ ? JJ : jU
      })
    }));

    function sU(JJ) {
      let {
        label: cJ
      } = JJ;
      const ZJ = Gc(tJ.b.Interact, !1);
      return (0, jJ.jsx)("div", {
        ref: ZJ,
        className: "TouchInteractHit",
        children: (0, jJ.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, jJ.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, jJ.jsx)(pJ.c, {
              name: "hand-back-point-up"
            })
          }), (0, jJ.jsx)(qJ.d, {
            text: cJ
          })]
        })
      })
    }
    var nU = ZJ(4162),
      GU = ZJ(4225);
    const fU = (0, FJ.forwardRef)((function(JJ, cJ) {
        let {
          text: ZJ,
          className: FJ,
          children: UJ
        } = JJ;
        return ZJ.hasText ? (0, jJ.jsx)("div", {
          ref: cJ,
          className: eJ()("HudTextPanel", FJ, {
            NoBackground: !ZJ.showBackground
          }),
          children: null !== UJ && void 0 !== UJ ? UJ : (0, jJ.jsx)(qJ.d, {
            text: ZJ.content
          })
        }) : null
      })),
      xU = (0, FJ.memo)((function() {
        const JJ = (0, vJ.g)("middleTextTop"),
          [cJ, ZJ] = (0, FJ.useState)(null),
          UJ = (0, jF.h)(cJ);
        return JJ.hasText ? (0, jJ.jsx)("div", {
          className: eJ()("MiddleTextTopContainer", {
            MiddleTextTopBelow: UJ
          }),
          children: (0, jJ.jsx)(fU, {
            ref: ZJ,
            className: "MiddleTextTop",
            text: JJ
          })
        }) : null
      })),
      rU = (0, FJ.memo)((function() {
        const JJ = (0, vJ.d)();
        return (0, jJ.jsx)(jJ.Fragment, {
          children: JJ.map(((JJ, cJ) => (0, jJ.jsx)(fU, {
            className: "HeaderChip",
            text: JJ
          }, cJ)))
        })
      }));
    var vU = ZJ(3107),
      mU = ZJ(4023);
    const QU = (0, FJ.memo)((function() {
      const {
        t: JJ
      } = (0, bJ.F)(), [cJ, ZJ] = (0, FJ.useState)(!1), UJ = (0, FJ.useRef)(!1), eJ = function(JJ) {
        let {
          gameNameWithVariation: cJ,
          lobbyName: ZJ
        } = JJ;
        if ((0, RF.k)(cJ)) return EU;
        if ((0, LF.I)(ZJ)) return VU;
        return null
      }((0, VJ.f)("connectedGame"));
      if (!eJ || cJ) return null;
      const XJ = mU.b[eJ.target];
      return (0, jJ.jsx)(kJ.g, {
        tooltipInner: (0, jJ.jsx)("div", {
          children: JJ(XJ.reportButtonTooltip)
        }),
        children: (0, jJ.jsx)("div", {
          children: (0, jJ.jsx)(sZ.N, {
            onClick: () => {
              UJ.current || (UJ.current = !0, (0, mU.f)(eJ.reportPolicyIds, XJ).then((JJ => {
                null !== JJ && void 0 !== JJ && JJ.selectedPolicyId && (DJ.gameBridge.send("reportLobbyOrGame", {
                  target: eJ.target,
                  XY: JJ.selectedPolicyId,
                  details: JJ.AY
                }), ZJ(!0))
              })).finally((() => {
                UJ.current = !1
              })))
            }
          })
        })
      })
    }));
    const EU = {
        target: "customGame",
        reportPolicyIds: vU.d
      },
      VU = {
        target: "lobby",
        reportPolicyIds: vU.h
      };
    var KU = ZJ(8079),
      yU = ZJ(35957),
      SU = ZJ(35962),
      IU = ZJ(35969),
      MU = ZJ(35973),
      bU = ZJ(35998);

    function wU(JJ) {
      return JJ instanceof Error && WU.has(JJ.message) ? JJ.message : void 0
    }
    const WU = new Set([bU.d.saveBusy.text, bU.d.saveClosed.text, bU.d.cropBusy.text]);
    let gU = !1;
    async function HU(JJ, cJ) {
      var ZJ, FJ;
      const {
        files: UJ
      } = cJ, eJ = UJ.replayKey();
      if (null === eJ) return "none";
      if (gU) throw new Error(bU.d.saveBusy.text);
      const XJ = null !== (ZJ = null === (FJ = UJ.saveRefusal) || void 0 === FJ ? void 0 : FJ.call(UJ)) && void 0 !== ZJ ? ZJ : null;
      if (null !== XJ) throw new Error(XJ);
      gU = !0;
      try {
        return await async function(JJ, cJ, ZJ) {
          const {
            files: FJ
          } = cJ, UJ = () => FJ.replayKey() === ZJ, eJ = (JJ, cJ) => {
            UJ() && FJ.markSaved(JJ, cJ)
          };
          let XJ = null;
          if (cJ.pickerSupported()) {
            try {
              if (XJ = await cJ.chooseFile(JJ ? null : FJ.fileHandle()), null === XJ) return "hZ"
            } catch (qJ) {
              cJ.onFallback(qJ)
            }
            if (!UJ()) throw new Error(bU.d.saveClosed.text)
          }
          const AJ = await FJ.encode();
          if (null === AJ) {
            if (null !== XJ) throw new Error(bU.d.saveClosed.text);
            return "none"
          }
          if (null !== XJ) try {
            return await cJ.write(XJ, AJ), eJ(XJ), "written"
          } catch (qJ) {
            cJ.onFallback(qJ)
          }
          return eJ(null, cJ.download(AJ)), "downloaded"
        }(JJ, cJ, eJ)
      } finally {
        gU = !1
      }
    }
    var PU = ZJ(3966),
      kU = ZJ(60);
    const pU = [1, 2, 4, 8, 16, 32, 64];

    function dU(JJ, cJ) {
      return Math.max(0, Math.min(JJ, cJ))
    }

    function zU(JJ, cJ, ZJ) {
      return ZJ <= cJ ? 0 : (JJ - cJ) / (ZJ - cJ) * 100
    }

    function NU(JJ, cJ, ZJ) {
      const FJ = ZJ - cJ;
      return Math.round(cJ + JJ / 100 * FJ)
    }

    function OU(JJ, cJ) {
      const ZJ = Math.floor(JJ / cJ / 60),
        FJ = Math.floor(JJ / cJ % 60),
        UJ = JJ % cJ;
      return `${ZJ.toString().padStart(2,"0")}:${FJ.toString().padStart(2,"0")}:${UJ.toString().padStart(2,"0")}`
    }

    function TU(JJ) {
      return Number.isInteger(JJ) || pU.includes(JJ) ? `${Math.round(JJ)}\xd7` : `${JJ.toFixed(1)}\xd7`
    }

    function CU(JJ, cJ) {
      const ZJ = pU.indexOf(JJ);
      if (-1 !== ZJ) return "in" === cJ ? pU[Math.min(ZJ + 1, pU.length - 1)] : pU[Math.max(ZJ - 1, 0)];
      if ("in" === cJ) {
        for (const cJ of pU)
          if (cJ >= JJ) return cJ;
        return JJ
      }
      for (let FJ = pU.length - 1; FJ >= 0; FJ--)
        if (pU[FJ] <= JJ) return pU[FJ];
      return pU[0]
    }

    function uU(JJ, cJ) {
      const ZJ = cJ.getBoundingClientRect();
      if (ZJ.width <= 0) return 0;
      const FJ = (JJ - ZJ.left) / ZJ.width * 100;
      return Math.max(0, Math.min(100, FJ))
    }

    function iU(JJ, cJ) {
      return cJ <= 0 ? 0 : JJ / cJ * 100
    }

    function RU(JJ, cJ, ZJ) {
      const FJ = [];
      let UJ = Math.ceil(JJ / ZJ) * ZJ;
      for (; UJ <= cJ;) FJ.push(UJ), UJ += ZJ;
      return FJ
    }
    var LU = ZJ(36007);
    const aU = [{
        label: "Linear",
        easing: LU.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: LU.f
      }, {
        label: "Ease Out",
        easing: LU.g
      }, {
        label: "Ease In Out",
        easing: LU.e
      }],
      BU = 200,
      tU = 150;

    function oU(JJ) {
      const cJ = JJ => Number(JJ.toFixed(3)).toString();
      return `cubic-bezier(${cJ(JJ[0])}, ${cJ(JJ[1])}, ${cJ(JJ[2])}, ${cJ(JJ[3])})`
    }

    function lU(JJ, cJ) {
      return {
        cx: 25 + JJ * tU,
        cy: 25 + (1 - cJ) * tU
      }
    }

    function Je(JJ, cJ, ZJ) {
      const FJ = JJ - ZJ.left,
        UJ = cJ - ZJ.top;
      return {
        x: EZ.c.clamp((FJ - 25) / tU, 0, 1),
        y: EZ.c.clamp(1 - (UJ - 25) / tU, -1, 2)
      }
    }

    function ce(JJ, cJ, ZJ, FJ, UJ) {
      return {
        x: (0, LU.r)(JJ, ZJ, UJ),
        y: (0, LU.r)(cJ, FJ, UJ)
      }
    }
    const Ze = (0, FJ.memo)((function(JJ) {
      let {
        value: cJ,
        onChange: ZJ
      } = JJ;
      const UJ = (0, FJ.useRef)(null),
        eJ = (0, FJ.useRef)(null),
        [XJ, AJ] = (0, FJ.useState)(null),
        qJ = (0, FJ.useCallback)((() => {
          const JJ = UJ.current;
          if (!JJ) return;
          const ZJ = JJ.getContext("2d");
          if (!ZJ) return;
          const FJ = window.devicePixelRatio || 1;
          JJ.width = BU * FJ, JJ.height = BU * FJ, ZJ.setTransform(FJ, 0, 0, FJ, 0, 0), ZJ.clearRect(0, 0, BU, BU), ZJ.fillStyle = "rgba(38, 52, 93, 0.85)", ZJ.fillRect(0, 0, BU, BU), ZJ.beginPath();
          const eJ = lU(0, 0),
            AJ = lU(1, 1);
          ZJ.moveTo(eJ.cx, eJ.cy), ZJ.lineTo(AJ.cx, AJ.cy), ZJ.strokeStyle = "rgba(164, 164, 164, 0.35)", ZJ.setLineDash([3, 3]), ZJ.stroke(), ZJ.setLineDash([]);
          const [qJ, jJ, YJ, hJ] = cJ, DJ = lU(qJ, jJ), sJ = lU(YJ, hJ);
          ZJ.strokeStyle = "rgba(252, 211, 115, 0.55)", ZJ.lineWidth = 1.5, ZJ.beginPath(), ZJ.moveTo(eJ.cx, eJ.cy), ZJ.lineTo(DJ.cx, DJ.cy), ZJ.moveTo(AJ.cx, AJ.cy), ZJ.lineTo(sJ.cx, sJ.cy), ZJ.stroke(), ZJ.strokeStyle = "#fcd373", ZJ.lineWidth = 2, ZJ.beginPath();
          for (let cJ = 0; cJ <= 50; cJ++) {
            const JJ = ce(qJ, jJ, YJ, hJ, cJ / 50),
              FJ = lU(JJ.x, JJ.y);
            0 === cJ ? ZJ.moveTo(FJ.cx, FJ.cy) : ZJ.lineTo(FJ.cx, FJ.cy)
          }
          ZJ.stroke();
          const nJ = (JJ, cJ, FJ) => {
            ZJ.beginPath(), ZJ.arc(JJ, cJ, FJ ? 6 : 5, 0, 2 * Math.PI), ZJ.fillStyle = FJ ? "#ffb914" : "#fcd373", ZJ.fill(), ZJ.strokeStyle = "#1a1f2e", ZJ.lineWidth = 1.5, ZJ.stroke()
          };
          nJ(DJ.cx, DJ.cy, "p1" === XJ), nJ(sJ.cx, sJ.cy, "p2" === XJ)
        }), [XJ, cJ]);
      (0, FJ.useEffect)((() => {
        qJ()
      }), [qJ]);
      const YJ = (0, FJ.useCallback)(((JJ, FJ) => {
          const XJ = UJ.current,
            AJ = eJ.current;
          if (!XJ || !AJ) return;
          const qJ = XJ.getBoundingClientRect(),
            {
              x: jJ,
              y: YJ
            } = Je(JJ, FJ, qJ);
          ZJ("p1" === AJ ? [jJ, YJ, cJ[2], cJ[3]] : [cJ[0], cJ[1], jJ, YJ])
        }), [ZJ, cJ]),
        hJ = (0, FJ.useCallback)((JJ => {
          const ZJ = UJ.current;
          if (!ZJ) return;
          const FJ = ZJ.getBoundingClientRect();
          let {
            x: XJ,
            y: qJ
          } = Je(JJ.clientX, JJ.clientY, FJ);
          XJ = EZ.c.clamp(XJ, 0, 1), qJ = EZ.c.clamp(qJ, 0, 1);
          const [jJ, hJ, DJ, sJ] = cJ.map((JJ => EZ.c.clamp(JJ, 0, 1))), nJ = Math.hypot(XJ - jJ, qJ - hJ), GJ = Math.hypot(XJ - DJ, qJ - sJ), fJ = nJ <= GJ ? "p1" : "p2";
          ("p1" === fJ ? nJ : GJ) > .12 || (eJ.current = fJ, AJ(fJ), ZJ.setPointerCapture(JJ.pointerId), YJ(JJ.clientX, JJ.clientY))
        }), [YJ, cJ]),
        DJ = (0, FJ.useCallback)((JJ => {
          eJ.current && YJ(JJ.clientX, JJ.clientY)
        }), [YJ]),
        sJ = (0, FJ.useCallback)((JJ => {
          eJ.current = null, AJ(null), JJ.currentTarget.hasPointerCapture(JJ.pointerId) && JJ.currentTarget.releasePointerCapture(JJ.pointerId)
        }), []);
      return (0, jJ.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, jJ.jsx)("canvas", {
          ref: UJ,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: BU,
            height: BU
          },
          onPointerDown: hJ,
          onPointerMove: DJ,
          onPointerUp: sJ,
          onPointerCancel: sJ
        }), (0, jJ.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: oU(cJ)
        })]
      })
    }));
    var Fe = ZJ(1569),
      Ue = ZJ(1560);
    const ee = 12;

    function Xe(JJ) {
      return {
        left: JJ.left + JJ.width / 2,
        top: JJ.top - 8
      }
    }

    function Ae(JJ, cJ) {
      const [ZJ, UJ] = (0, FJ.useState)(null);
      return (0, FJ.useLayoutEffect)((() => {
        const ZJ = JJ.current;
        if (!ZJ) return;
        const {
          width: FJ,
          height: eJ
        } = ZJ.getBoundingClientRect();
        UJ(function(JJ, cJ, ZJ) {
          const FJ = window.innerWidth,
            UJ = window.innerHeight,
            eJ = cJ / 2;
          let XJ = JJ.left + JJ.width / 2;
          XJ = Math.max(ee + eJ, Math.min(XJ, FJ - ee - eJ));
          const AJ = JJ.top - 8 - ee,
            qJ = UJ - JJ.bottom - 8 - ee,
            jJ = AJ < ZJ && qJ >= AJ;
          let YJ;
          jJ ? (YJ = JJ.bottom + 8, YJ + ZJ > UJ - ee && (YJ = UJ - ee - ZJ), YJ = Math.max(ee, YJ)) : (YJ = JJ.top - 8, YJ - ZJ < ee && (YJ = ee + ZJ));
          return {
            left: XJ,
            top: YJ,
            placeBelow: jJ
          }
        }(cJ, FJ, eJ))
      }), [cJ, JJ]), ZJ
    }

    function qe(JJ, cJ, ZJ) {
      (0, FJ.useEffect)((() => (0, Ue.d)("pointerdown", (FJ => {
        var UJ, eJ;
        const XJ = FJ.target;
        XJ instanceof Node && (null !== (UJ = JJ.current) && void 0 !== UJ && UJ.contains(XJ) || null !== ZJ && void 0 !== ZJ && null !== (eJ = ZJ.current) && void 0 !== eJ && eJ.contains(XJ) || (0, Fe.o)(XJ) || cJ())
      }))), [ZJ, cJ, JJ])
    }

    function je(JJ) {
      let {
        label: cJ,
        value: ZJ,
        onChange: FJ
      } = JJ;
      return (0, jJ.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, jJ.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: cJ
        }), (0, jJ.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((JJ, cJ) => (0, jJ.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, jJ.jsx)("span", {
              children: JJ
            }), (0, jJ.jsx)("input", {
              type: "number",
              step: "any",
              value: ZJ[cJ],
              onChange: JJ => {
                const UJ = Number.parseFloat(JJ.target.value);
                if (Number.isNaN(UJ)) return;
                const eJ = [ZJ[0], ZJ[1], ZJ[2]];
                eJ[cJ] = UJ, FJ(eJ)
              }
            })]
          }, JJ)))
        })]
      })
    }
    const Ye = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ, UJ;
        let {
          keyframe: XJ,
          anchor: AJ,
          hasOutgoingSegment: qJ,
          onClose: YJ,
          onApply: hJ,
          onDelete: DJ,
          onUseCurrentCamera: sJ
        } = JJ;
        const nJ = (0, FJ.useRef)(null),
          GJ = Ae(nJ, AJ.rect),
          [fJ, xJ] = (0, FJ.useState)((() => [XJ.position[0], XJ.position[1], XJ.position[2]])),
          [rJ, vJ] = (0, FJ.useState)((() => [XJ.direction[0], XJ.direction[1], XJ.direction[2]])),
          [mJ, QJ] = (0, FJ.useState)((() => XJ.easing));
        (0, FJ.useEffect)((() => {
          xJ([XJ.position[0], XJ.position[1], XJ.position[2]]), vJ([XJ.direction[0], XJ.direction[1], XJ.direction[2]]), QJ(XJ.easing)
        }), [XJ]), qe(nJ, YJ);
        const EJ = (0, FJ.useCallback)((() => {
            hJ({
              Hh: XJ.Hh,
              position: fJ,
              direction: rJ,
              easing: mJ
            }), YJ()
          }), [rJ, mJ, XJ.Hh, hJ, YJ, fJ]),
          VJ = (0, FJ.useCallback)((() => {
            DJ(XJ.Hh), YJ()
          }), [XJ.Hh, DJ, YJ]),
          KJ = (0, FJ.useCallback)((() => {
            const JJ = sJ();
            JJ && (xJ([JJ.position[0], JJ.position[1], JJ.position[2]]), vJ([JJ.direction[0], JJ.direction[1], JJ.direction[2]]))
          }), [sJ]),
          yJ = Xe(AJ.rect);
        return (0, jJ.jsxs)("div", {
          ref: nJ,
          className: eJ()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (cJ = null === GJ || void 0 === GJ ? void 0 : GJ.placeBelow) && void 0 !== cJ && cJ,
            Positioned: null !== GJ
          }),
          style: {
            left: `${null!==(ZJ=null===GJ||void 0===GJ?void 0:GJ.left)&&void 0!==ZJ?ZJ:yJ.left}px`,
            top: `${null!==(UJ=null===GJ||void 0===GJ?void 0:GJ.top)&&void 0!==UJ?UJ:yJ.top}px`
          },
          onPointerDown: JJ => {
            JJ.stopPropagation()
          },
          children: [(0, jJ.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, jJ.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, jJ.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", AJ.Hh]
            })]
          }), (0, jJ.jsx)(je, {
            label: "Position",
            value: fJ,
            onChange: xJ
          }), (0, jJ.jsx)(je, {
            label: "Direction",
            value: rJ,
            onChange: vJ
          }), qJ && (0, jJ.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, jJ.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, jJ.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: aU.map((JJ => {
                const cJ = (ZJ = mJ, FJ = JJ.easing, ZJ[0] === FJ[0] && ZJ[1] === FJ[1] && ZJ[2] === FJ[2] && ZJ[3] === FJ[3]);
                var ZJ, FJ;
                return (0, jJ.jsx)(sZ.O, {
                  className: eJ()("ReplayKeyframePopoverPreset", {
                    Active: cJ
                  }),
                  onClick: () => {
                    QJ(JJ.easing)
                  },
                  children: JJ.label
                }, JJ.label)
              }))
            }), (0, jJ.jsx)(Ze, {
              value: mJ,
              onChange: QJ
            })]
          }), (0, jJ.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, jJ.jsx)(sZ.d, {
              className: "ReplayViewerCompactButton",
              onClick: KJ,
              children: "Use current view"
            }), (0, jJ.jsx)(sZ.m, {
              className: "ReplayViewerCompactButton",
              onClick: EJ,
              children: "Apply"
            }), (0, jJ.jsx)(sZ.I, {
              className: "ReplayViewerCompactButton",
              onClick: VJ,
              children: "Delete"
            })]
          })]
        })
      })),
      he = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ, UJ;
        let {
          anchor: XJ,
          hasPlaybackMark: AJ,
          onClose: qJ,
          onMark: YJ,
          onZoom: hJ,
          onCrop: DJ,
          onDeleteKeyframes: sJ,
          onClearMark: nJ
        } = JJ;
        const GJ = (0, FJ.useRef)(null),
          fJ = Ae(GJ, XJ.rect),
          xJ = Xe(XJ.rect),
          rJ = {
            startTick: XJ.startTick,
            endTick: XJ.endTick
          },
          vJ = XJ.endTick > XJ.startTick;
        return qe(GJ, qJ), (0, jJ.jsx)("div", {
          ref: GJ,
          className: eJ()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (cJ = null === fJ || void 0 === fJ ? void 0 : fJ.placeBelow) && void 0 !== cJ && cJ,
            Positioned: null !== fJ
          }),
          style: {
            left: `${null!==(ZJ=null===fJ||void 0===fJ?void 0:fJ.left)&&void 0!==ZJ?ZJ:xJ.left}px`,
            top: `${null!==(UJ=null===fJ||void 0===fJ?void 0:fJ.top)&&void 0!==UJ?UJ:xJ.top}px`
          },
          onPointerDown: JJ => {
            JJ.stopPropagation()
          },
          children: (0, jJ.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, jJ.jsx)(sZ.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                YJ(rJ)
              },
              disabled: !vJ,
              children: (0, jJ.jsx)("span", {
                children: " Play range "
              })
            }), (0, jJ.jsx)(sZ.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                hJ(rJ)
              },
              children: (0, jJ.jsx)("span", {
                children: " Zoom "
              })
            }), (0, jJ.jsx)(sZ.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                DJ(rJ)
              },
              disabled: !vJ,
              children: (0, jJ.jsx)("span", {
                children: " Crop "
              })
            }), (0, jJ.jsx)(sZ.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                sJ(rJ)
              },
              children: (0, jJ.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), AJ && (0, jJ.jsx)(sZ.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                nJ()
              },
              children: (0, jJ.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      De = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ;
        let {
          maxTick: UJ,
          displayTick: XJ,
          Gy: AJ,
          cameraKeyframes: qJ,
          playbackMark: YJ,
          onSeek: hJ,
          onPause: DJ,
          onScrubTickChange: sJ,
          onMoveCameraKeyframe: nJ,
          onUpdateCameraKeyframe: GJ,
          onDeleteCameraKeyframe: fJ,
          onUseCurrentCamera: xJ,
          onMarkRange: rJ,
          onCropRange: vJ,
          onDeleteKeyframesInRange: mJ,
          onClearMark: QJ,
          zoomLevel: EJ,
          onZoomLevelChange: VJ
        } = JJ;
        const KJ = (0, FJ.useRef)(null),
          yJ = (0, FJ.useRef)(null),
          SJ = (0, FJ.useRef)(!1),
          IJ = (0, FJ.useRef)(!1),
          MJ = (0, FJ.useRef)(EJ),
          bJ = (0, FJ.useRef)(null),
          wJ = (0, FJ.useRef)(null),
          WJ = (0, FJ.useRef)(null),
          gJ = (0, FJ.useRef)(null),
          [HJ, PJ] = (0, FJ.useState)(null),
          [kJ, pJ] = (0, FJ.useState)(XJ),
          [dJ, zJ] = (0, FJ.useState)(null),
          [NJ, OJ] = (0, FJ.useState)(null),
          [TJ, CJ] = (0, FJ.useState)(null),
          [uJ, iJ] = (0, FJ.useState)(null),
          RJ = (0, FJ.useMemo)((() => qJ.map((JJ => JJ.Hh))), [qJ]),
          LJ = null !== HJ && void 0 !== HJ ? HJ : XJ,
          {
            viewStart: aJ,
            viewEnd: BJ
          } = (0, FJ.useMemo)((() => function(JJ) {
            const cJ = JJ.maxTick + 1,
              ZJ = Math.max(1, Math.ceil(cJ / JJ.zoomLevel)),
              FJ = Math.floor(ZJ / 2);
            let UJ = JJ.centerTick - FJ;
            return UJ = Math.max(0, Math.min(UJ, JJ.maxTick - ZJ + 1)), {
              viewStart: UJ,
              viewEnd: Math.min(JJ.maxTick, UJ + ZJ - 1)
            }
          }({
            maxTick: UJ,
            zoomLevel: EJ,
            centerTick: kJ
          })), [UJ, EJ, kJ]);
        (0, FJ.useEffect)((() => {
          if (null !== HJ || null !== wJ.current || null !== WJ.current || null !== gJ.current) return;
          if (SJ.current) return void(SJ.current = !1);
          if (IJ.current) return void(IJ.current = !1);
          const JJ = MJ.current !== EJ;
          MJ.current = EJ, JJ && pJ(XJ)
        }), [EJ, XJ, HJ]);
        const tJ = (0, FJ.useCallback)((JJ => {
            let cJ = dU(JJ, UJ);
            return YJ && (cJ = Math.max(YJ.inTick, Math.min(cJ, YJ.outTick))), cJ
          }), [UJ, YJ]),
          oJ = (0, FJ.useCallback)(((JJ, cJ) => {
            const ZJ = tJ(JJ);
            hJ(ZJ), cJ && pJ(ZJ)
          }), [tJ, hJ]),
          lJ = (0, FJ.useCallback)(((JJ, cJ) => {
            const ZJ = tJ(JJ);
            PJ(ZJ), sJ(ZJ), oJ(ZJ, cJ)
          }), [tJ, oJ, sJ]),
          Jc = (0, FJ.useCallback)((() => {
            PJ((JJ => (null !== JJ && pJ(JJ), null))), sJ(null)
          }), [sJ]),
          cc = (0, FJ.useCallback)((() => {
            CJ(null), iJ(null)
          }), []),
          Zc = (0, FJ.useCallback)((JJ => {
            const cJ = KJ.current;
            if (!cJ) return 0;
            return dU(NU(uU(JJ, cJ), aJ, BJ), UJ)
          }), [UJ, BJ, aJ]),
          Fc = (0, FJ.useCallback)((JJ => {
            const cJ = yJ.current;
            if (!cJ) return 0;
            return dU(NU(uU(JJ, cJ), 0, UJ), UJ)
          }), [UJ]),
          Uc = (0, FJ.useMemo)((() => {
            if (!dJ) return [...RJ];
            const JJ = RJ.filter((JJ => JJ !== dJ.fromTick));
            return JJ.push(dJ.previewTick), JJ.sort(((JJ, cJ) => JJ - cJ)), JJ
          }), [RJ, dJ]),
          ec = (0, FJ.useMemo)((() => {
            var JJ;
            return NJ && null !== (JJ = qJ.find((JJ => JJ.Hh === NJ.Hh))) && void 0 !== JJ ? JJ : null
          }), [qJ, NJ]),
          Xc = (0, FJ.useMemo)((() => !!ec && qJ.some((JJ => JJ.Hh > ec.Hh))), [qJ, ec]);
        (0, FJ.useEffect)((() => {
          NJ && !ec && OJ(null)
        }), [NJ, ec]), (0, FJ.useEffect)((() => {
          if (!uJ) return () => {};
          const JJ = JJ => {
            "Escape" === JJ.key && cc()
          };
          return window.addEventListener("keydown", JJ), () => {
            window.removeEventListener("keydown", JJ)
          }
        }), [cc, uJ]);
        const Ac = (0, FJ.useCallback)(((JJ, cJ) => {
            cc(), DJ(), hJ(JJ, {
              ignorePlaybackMark: !0
            }), OJ({
              Hh: JJ,
              rect: cJ.getBoundingClientRect()
            })
          }), [cc, DJ, hJ]),
          qc = (0, FJ.useCallback)(((JJ, cJ) => ZJ => {
            0 === ZJ.button && (ZJ.stopPropagation(), OJ(null), cc(), DJ(), bJ.current = {
              fromTick: JJ,
              startX: ZJ.clientX,
              startY: ZJ.clientY,
              didDrag: !1,
              track: cJ
            }, zJ({
              fromTick: JJ,
              previewTick: JJ,
              track: cJ
            }), ZJ.currentTarget.setPointerCapture(ZJ.pointerId))
          }), [cc, DJ]),
          jc = (0, FJ.useCallback)((JJ => {
            if (!dJ) return;
            JJ.stopPropagation();
            const cJ = bJ.current;
            if (cJ && !cJ.didDrag) {
              const ZJ = JJ.clientX - cJ.startX,
                FJ = JJ.clientY - cJ.startY;
              Math.hypot(ZJ, FJ) > 5 && (cJ.didDrag = !0)
            }
            const ZJ = "detail" === dJ.track ? Zc(JJ.clientX) : Fc(JJ.clientX);
            ZJ !== dJ.previewTick && zJ({
              ...dJ,
              previewTick: ZJ
            })
          }), [dJ, Zc, Fc]),
          Yc = (0, FJ.useCallback)((JJ => {
            if (!dJ) return;
            JJ.stopPropagation();
            const cJ = bJ.current,
              ZJ = "detail" === dJ.track ? Zc(JJ.clientX) : Fc(JJ.clientX);
            cJ && !cJ.didDrag ? Ac(cJ.fromTick, JJ.currentTarget) : ZJ !== dJ.fromTick && nJ(dJ.fromTick, ZJ), zJ(null), bJ.current = null, JJ.currentTarget.releasePointerCapture(JJ.pointerId)
          }), [dJ, nJ, Ac, Zc, Fc]),
          hc = (0, FJ.useCallback)((JJ => {
            if (0 !== JJ.button) return;
            OJ(null), DJ();
            const cJ = Zc(JJ.clientX);
            wJ.current = {
              pointerId: JJ.pointerId,
              startX: JJ.clientX,
              startY: JJ.clientY,
              startTick: cJ,
              currentTick: cJ,
              didSelect: !1
            }, CJ(null), iJ(null), JJ.currentTarget.setPointerCapture(JJ.pointerId)
          }), [DJ, Zc]),
          Dc = (0, FJ.useCallback)((JJ => {
            const cJ = wJ.current;
            if (!cJ || cJ.pointerId !== JJ.pointerId) return;
            const ZJ = Zc(JJ.clientX);
            if (cJ.currentTick = ZJ, !cJ.didSelect) {
              const ZJ = JJ.clientX - cJ.startX,
                FJ = JJ.clientY - cJ.startY;
              if (Math.hypot(ZJ, FJ) <= 5) return;
              cJ.didSelect = !0
            }
            const FJ = Math.min(cJ.startTick, ZJ),
              UJ = Math.max(cJ.startTick, ZJ);
            CJ({
              startTick: FJ,
              endTick: UJ
            })
          }), [Zc]),
          sc = (0, FJ.useCallback)((JJ => {
            const cJ = wJ.current;
            if (!cJ || cJ.pointerId !== JJ.pointerId) return;
            if (wJ.current = null, JJ.currentTarget.releasePointerCapture(JJ.pointerId), !cJ.didSelect) return cc(), void oJ(cJ.startTick, !0);
            const ZJ = Zc(JJ.clientX),
              FJ = Math.min(cJ.startTick, ZJ),
              UJ = Math.max(cJ.startTick, ZJ),
              eJ = {
                startTick: FJ,
                endTick: UJ
              };
            CJ(eJ);
            const XJ = KJ.current;
            if (!XJ) return;
            const AJ = XJ.getBoundingClientRect(),
              qJ = zU(FJ, aJ, BJ) / 100,
              jJ = zU(UJ, aJ, BJ) / 100,
              YJ = AJ.left + qJ * AJ.width,
              hJ = AJ.left + jJ * AJ.width;
            iJ({
              ...eJ,
              rect: new DOMRect(YJ, AJ.top, Math.max(hJ - YJ, 1), AJ.height)
            })
          }), [cc, oJ, Zc, BJ, aJ]),
          nc = (0, FJ.useCallback)((JJ => cJ => {
            if (0 !== cJ.button) return;
            cJ.stopPropagation(), OJ(null), cc(), DJ(), WJ.current = {
              pointerId: cJ.pointerId,
              track: JJ
            }, cJ.currentTarget.setPointerCapture(cJ.pointerId);
            const ZJ = "detail" === JJ ? Zc(cJ.clientX) : Fc(cJ.clientX);
            lJ(ZJ, !1)
          }), [cc, DJ, lJ, Zc, Fc]),
          Gc = (0, FJ.useCallback)((JJ => {
            const cJ = WJ.current;
            if (!cJ || cJ.pointerId !== JJ.pointerId) return;
            JJ.stopPropagation();
            const ZJ = "detail" === cJ.track ? Zc(JJ.clientX) : Fc(JJ.clientX);
            lJ(ZJ, !1)
          }), [lJ, Zc, Fc]),
          fc = (0, FJ.useCallback)((JJ => {
            const cJ = WJ.current;
            cJ && cJ.pointerId === JJ.pointerId && (JJ.stopPropagation(), WJ.current = null, JJ.currentTarget.releasePointerCapture(JJ.pointerId), Jc())
          }), [Jc]),
          xc = (0, FJ.useCallback)((JJ => {
            0 === JJ.button && (cc(), DJ(), gJ.current = {
              pointerId: JJ.pointerId
            }, JJ.currentTarget.setPointerCapture(JJ.pointerId), lJ(Fc(JJ.clientX), !0))
          }), [cc, DJ, lJ, Fc]),
          rc = (0, FJ.useCallback)((JJ => {
            const cJ = gJ.current;
            cJ && cJ.pointerId === JJ.pointerId && lJ(Fc(JJ.clientX), !0)
          }), [lJ, Fc]),
          vc = (0, FJ.useCallback)((JJ => {
            const cJ = gJ.current;
            cJ && cJ.pointerId === JJ.pointerId && (gJ.current = null, JJ.currentTarget.releasePointerCapture(JJ.pointerId), Jc())
          }), [Jc]),
          mc = (0, FJ.useCallback)((JJ => {
            const cJ = Math.max(1, JJ.endTick - JJ.startTick + 1),
              ZJ = UJ + 1,
              FJ = ZJ / cJ,
              eJ = Math.max(1, Math.ceil(ZJ / FJ)),
              XJ = JJ.startTick + Math.floor((eJ - 1) / 2);
            IJ.current = !0, MJ.current = FJ, pJ(dU(XJ, UJ)), VJ(FJ), cc()
          }), [cc, UJ, VJ]),
          Qc = (0, FJ.useCallback)((JJ => {
            rJ(JJ), cc()
          }), [cc, rJ]),
          Ec = (0, FJ.useCallback)((JJ => {
            vJ(JJ), cc()
          }), [cc, vJ]),
          Vc = (0, FJ.useCallback)((JJ => {
            mJ(JJ), cc()
          }), [cc, mJ]),
          Kc = (0, FJ.useCallback)((() => {
            QJ(), cc()
          }), [cc, QJ]);
        (0, FJ.useEffect)((() => {
          const JJ = KJ.current;
          if (!JJ) return () => {};
          const cJ = cJ => {
            cJ.preventDefault();
            const ZJ = dU(NU(uU(cJ.clientX, JJ), aJ, BJ), UJ),
              FJ = cJ.deltaY < 0 ? "in" : "out",
              eJ = CU(EJ, FJ);
            eJ !== EJ && (SJ.current = !0, pJ(ZJ), VJ(eJ))
          };
          return JJ.addEventListener("wheel", cJ, {
            passive: !1
          }), () => {
            JJ.removeEventListener("wheel", cJ)
          }
        }), [UJ, VJ, BJ, aJ, EJ]);
        const yc = zU(LJ, aJ, BJ),
          Sc = iU(LJ, UJ),
          Ic = iU(aJ, UJ),
          Mc = UJ > 0 ? iU(BJ, UJ) : 100,
          bc = null !== YJ,
          wc = null !== (cJ = null === YJ || void 0 === YJ ? void 0 : YJ.inTick) && void 0 !== cJ ? cJ : 0,
          Wc = null !== (ZJ = null === YJ || void 0 === YJ ? void 0 : YJ.outTick) && void 0 !== ZJ ? ZJ : UJ,
          gc = iU(wc, UJ),
          Hc = Math.max(iU(Wc, UJ) - gc, 0),
          Pc = zU(Math.max(wc, aJ), aJ, BJ),
          kc = zU(Math.min(Wc, BJ), aJ, BJ),
          pc = Math.max(kc - Pc, 0),
          dc = bc && Wc >= aJ && wc <= BJ,
          zc = zU(wc, aJ, BJ),
          Nc = zU(Wc, aJ, BJ),
          Oc = bc && wc >= aJ && wc <= BJ,
          Tc = bc && Wc >= aJ && Wc <= BJ,
          Cc = iU(wc, UJ),
          uc = iU(Wc, UJ),
          ic = null !== TJ && void 0 !== TJ ? TJ : uJ ? {
            startTick: uJ.startTick,
            endTick: uJ.endTick
          } : null,
          Rc = ic ? zU(Math.max(ic.startTick, aJ), aJ, BJ) : 0,
          Lc = ic ? zU(Math.min(ic.endTick, BJ), aJ, BJ) : 0,
          ac = Math.max(Lc - Rc, 0),
          Bc = null !== ic && ic.endTick >= aJ && ic.startTick <= BJ,
          tc = (0, FJ.useMemo)((() => RU(0, UJ, AJ)), [UJ, AJ]),
          oc = (0, FJ.useMemo)((() => RU(aJ, BJ, AJ)), [aJ, BJ, AJ]),
          lc = (0, FJ.useMemo)((() => Uc.filter((JJ => JJ >= aJ && JJ <= BJ))), [Uc, BJ, aJ]),
          JZ = (0, FJ.useCallback)(((JJ, cJ, ZJ) => {
            const FJ = "detail" === cJ ? zU(JJ, aJ, BJ) : iU(JJ, UJ),
              XJ = null !== dJ && ZJ === dJ.fromTick,
              AJ = null !== NJ && NJ.Hh === ZJ;
            return (0, jJ.jsx)("button", {
              type: "button",
              className: eJ()("ReplayTimelineCameraKeyframeMarker", "detail" === cJ ? "Detail" : "Overview", {
                Dragging: XJ,
                Selected: AJ
              }),
              style: {
                left: `${FJ}%`
              },
              onPointerDown: qc(ZJ, cJ),
              onPointerMove: jc,
              onPointerUp: Yc,
              onPointerCancel: Yc,
              "aria-label": `Camera keyframe at tick ${ZJ}`
            }, `cam-${cJ}-${ZJ}`)
          }), [qc, NJ, Yc, dJ, UJ, jc, BJ, aJ]),
          cZ = (0, FJ.useCallback)((JJ => dJ && JJ === dJ.previewTick ? dJ.fromTick : JJ), [dJ]);
        return UJ <= 0 ? null : (0, jJ.jsxs)("div", {
          className: "ReplayTimeline",
          children: [NJ && ec && (0, kU.createPortal)((0, jJ.jsx)(Ye, {
            keyframe: ec,
            anchor: NJ,
            hasOutgoingSegment: Xc,
            onClose: () => {
              OJ(null)
            },
            onApply: GJ,
            onDelete: fJ,
            onUseCurrentCamera: xJ
          }), document.body), uJ && (0, kU.createPortal)((0, jJ.jsx)(he, {
            anchor: uJ,
            hasPlaybackMark: bc,
            onClose: cc,
            onMark: Qc,
            onZoom: mc,
            onCrop: Ec,
            onDeleteKeyframes: Vc,
            onClearMark: Kc
          }), document.body), (0, jJ.jsxs)("div", {
            className: eJ()("ReplayTimelineOverviewSection", {
              Hidden: EJ <= 1
            }),
            children: [(0, jJ.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, jJ.jsxs)("div", {
              ref: yJ,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: xc,
              onPointerMove: rc,
              onPointerUp: vc,
              onPointerCancel: vc,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": UJ,
              "aria-valuenow": LJ,
              tabIndex: 0,
              children: [tc.map((JJ => {
                const cJ = iU(JJ, UJ);
                return (0, jJ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${cJ}%`
                  }
                }, JJ)
              })), bc && (0, jJ.jsxs)(jJ.Fragment, {
                children: [(0, jJ.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${gc}%`,
                    width: `${Hc}%`
                  }
                }), (0, jJ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${Cc}%`
                  },
                  "aria-hidden": !0
                }), (0, jJ.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${uc}%`
                  },
                  "aria-hidden": !0
                })]
              }), Uc.map((JJ => JZ(JJ, "overview", cZ(JJ)))), (0, jJ.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Ic}%`,
                  width: `${Math.max(Mc-Ic,.5)}%`
                }
              }), (0, jJ.jsx)("button", {
                type: "button",
                className: eJ()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== HJ
                }),
                style: {
                  left: `${Sc}%`
                },
                onPointerDown: nc("overview"),
                onPointerMove: Gc,
                onPointerUp: fc,
                onPointerCancel: fc,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, jJ.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, jJ.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, jJ.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, jJ.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [OU(aJ, AJ), " \u2013 ", OU(BJ, AJ), EJ > 1 && (0, jJ.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: TU(EJ)
                })]
              })]
            }), (0, jJ.jsxs)("div", {
              ref: KJ,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: hc,
              onPointerMove: Dc,
              onPointerUp: sc,
              onPointerCancel: sc,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": aJ,
              "aria-valuemax": BJ,
              "aria-valuenow": LJ,
              tabIndex: 0,
              children: [oc.map((JJ => {
                const cJ = zU(JJ, aJ, BJ);
                return (0, jJ.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${cJ}%`
                  }
                }, JJ)
              })), dc && (0, jJ.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${Pc}%`,
                  width: `${pc}%`
                }
              }), Oc && (0, jJ.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${zc}%`
                },
                "aria-label": `Play range start at tick ${wc}`
              }), Tc && (0, jJ.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Nc}%`
                },
                "aria-label": `Play range end at tick ${Wc}`
              }), Bc && ic && (0, jJ.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Rc}%`,
                  width: `${ac}%`
                }
              }), lc.map((JJ => JZ(JJ, "detail", cZ(JJ)))), (0, jJ.jsx)("button", {
                type: "button",
                className: eJ()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== HJ
                }),
                style: {
                  left: `${yc}%`
                },
                onPointerDown: nc("detail"),
                onPointerMove: Gc,
                onPointerUp: fc,
                onPointerCancel: fc,
                "aria-label": "Scrub playhead"
              })]
            }), (0, jJ.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, jJ.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      se = (0, FJ.memo)((function(JJ) {
        let {
          enabled: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(!1),
          UJ = (0, FJ.useRef)(null),
          [XJ, AJ] = (0, FJ.useState)(!1),
          qJ = (0, FJ.useCallback)((JJ => {
            cJ && 0 === JJ.button && (ZJ.current = !0, AJ(!0), UJ.current = {
              x: JJ.clientX,
              y: JJ.clientY
            }, JJ.currentTarget.setPointerCapture(JJ.pointerId))
          }), [cJ]),
          YJ = (0, FJ.useCallback)((JJ => {
            if (!cJ || !ZJ.current || !UJ.current) return;
            const FJ = JJ.clientX - UJ.current.x,
              eJ = JJ.clientY - UJ.current.y;
            UJ.current = {
              x: JJ.clientX,
              y: JJ.clientY
            }, DJ.gameBridge.send("dragReplayCamera", {
              dx: FJ,
              dy: eJ
            })
          }), [cJ]),
          hJ = (0, FJ.useCallback)((JJ => {
            ZJ.current && (ZJ.current = !1, AJ(!1), UJ.current = null, JJ.currentTarget.releasePointerCapture(JJ.pointerId))
          }), []);
        return cJ ? (0, jJ.jsx)("div", {
          className: eJ()("ReplayViewerCameraDragSurface", {
            Dragging: XJ
          }),
          onPointerDown: qJ,
          onPointerMove: YJ,
          onPointerUp: hJ,
          onPointerCancel: hJ,
          "aria-hidden": !0
        }) : null
      }));
    var ne = ZJ(36009),
      Ge = ZJ(36014);
    const fe = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ, UJ;
        let {
          anchorRect: XJ,
          anchorRef: qJ,
          onClose: YJ
        } = JJ;
        const hJ = (0, FJ.useRef)(null),
          DJ = Ae(hJ, XJ),
          [sJ, nJ] = (0, FJ.useState)(Ge.b),
          GJ = (0, FJ.useMemo)((() => Object.values(sJ).every((JJ => JJ))), [sJ]);
        (0, AJ.i)("replayViewer|uiVisibilityChanged", (() => {
          nJ((0, Ge.b)())
        })), qe(hJ, YJ, qJ);
        const fJ = (0, FJ.useCallback)(((JJ, cJ) => {
            (0, Ge.h)(JJ, cJ), nJ((0, Ge.b)())
          }), []),
          xJ = (0, FJ.useCallback)((JJ => {
            for (const {
                group: cJ
              }
              of ne.e)(0, Ge.h)(cJ, JJ);
            nJ((0, Ge.b)())
          }), []),
          rJ = Xe(XJ);
        return (0, kU.createPortal)((0, jJ.jsxs)("div", {
          ref: hJ,
          className: eJ()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (cJ = null === DJ || void 0 === DJ ? void 0 : DJ.placeBelow) && void 0 !== cJ && cJ,
            Positioned: null !== DJ
          }),
          style: {
            left: `${null!==(ZJ=null===DJ||void 0===DJ?void 0:DJ.left)&&void 0!==ZJ?ZJ:rJ.left}px`,
            top: `${null!==(UJ=null===DJ||void 0===DJ?void 0:DJ.top)&&void 0!==UJ?UJ:rJ.top}px`
          },
          onPointerDown: JJ => {
            JJ.stopPropagation()
          },
          children: [(0, jJ.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, jJ.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, jJ.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, jJ.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, jJ.jsx)("input", {
                type: "checkbox",
                checked: GJ,
                onChange: JJ => {
                  xJ(JJ.target.checked)
                }
              }), (0, jJ.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), ne.e.map((JJ => {
              let {
                group: cJ,
                label: ZJ
              } = JJ;
              return (0, jJ.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, jJ.jsx)("input", {
                  type: "checkbox",
                  checked: sJ[cJ],
                  onChange: JJ => {
                    fJ(cJ, JJ.target.checked)
                  }
                }), (0, jJ.jsx)("span", {
                  children: ZJ
                })]
              }, cJ)
            }))]
          })]
        }), document.body)
      })),
      xe = (0, FJ.memo)((function(JJ) {
        let {
          disabled: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(null),
          [UJ, eJ] = (0, FJ.useState)(!1),
          [XJ, AJ] = (0, FJ.useState)(null),
          qJ = (0, FJ.useCallback)((() => {
            ZJ.current && (AJ(ZJ.current.getBoundingClientRect()), eJ((JJ => !JJ)))
          }), []),
          YJ = (0, FJ.useCallback)((() => {
            eJ(!1)
          }), []);
        return (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("div", {
            ref: ZJ,
            children: (0, jJ.jsx)(sZ.d, {
              className: "ReplayViewerActionButton",
              onClick: qJ,
              disabled: cJ,
              children: (0, jJ.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), UJ && XJ && (0, jJ.jsx)(fe, {
            anchorRect: XJ,
            anchorRef: ZJ,
            onClose: YJ
          })]
        })
      })),
      re = ["freeCamUp", "freeCamDown"];

    function ve(JJ, cJ) {
      DJ.gameBridge.send("holdReplayFreecamVertical", {
        action: JJ,
        hj: cJ
      })
    }
    const me = (0, FJ.memo)((function() {
        (0, FJ.useEffect)((() => () => {
          ! function() {
            DJ.gameBridge.send("moveReplayFreecam", null);
            for (const JJ of re) ve(JJ, !1)
          }()
        }), []);
        const JJ = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("moveReplayFreecam", JJ)
          }), []),
          cJ = (0, FJ.useCallback)((JJ => ({
            onTouchStart: cJ => {
              cJ.preventDefault(), cJ.stopPropagation(), ve(JJ, !0)
            },
            onTouchEnd: cJ => {
              cJ.preventDefault(), cJ.stopPropagation(), ve(JJ, !1)
            },
            onTouchCancel: cJ => {
              cJ.preventDefault(), cJ.stopPropagation(), ve(JJ, !1)
            }
          })), []);
        return (0, jJ.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, jJ.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, jJ.jsx)(Dc, {
              onMove: JJ,
              mode: "pinned"
            })
          }), (0, jJ.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, jJ.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...cJ("freeCamUp"),
              children: (0, jJ.jsx)(pJ.c, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, jJ.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...cJ("freeCamDown"),
              children: (0, jJ.jsx)(pJ.c, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Qe = [],
      Ee = (0, FJ.memo)((function() {
        const JJ = (0, LJ.f)();
        return (0, VJ.b)("replayViewerRequested", (JJ => {
          (0, LJ.d)("toggle" === JJ ? !(0, LJ.c)() : "open" === JJ)
        })), JJ ? (0, jJ.jsx)(Ve, {}) : null
      })),
      Ve = (0, FJ.memo)((function() {
        var JJ, cJ, ZJ, UJ, XJ, AJ, qJ, YJ, hJ, sJ, nJ, GJ;
        const fJ = FJ.useRef(null),
          [xJ, rJ] = (0, FJ.useState)(null),
          [vJ, mJ] = (0, FJ.useState)(1),
          [QJ, EJ] = (0, FJ.useState)(null),
          [SJ, IJ] = (0, FJ.useState)(!1),
          {
            isTouchScreen: MJ
          } = (0, KJ.j)(["isTouchScreen"]),
          bJ = (0, VJ.f)("replay"),
          wJ = (0, VJ.f)("replayEdits"),
          WJ = null !== bJ,
          gJ = null !== (JJ = null === bJ || void 0 === bJ ? void 0 : bJ.Hh) && void 0 !== JJ ? JJ : 0,
          HJ = null !== (cJ = null === bJ || void 0 === bJ ? void 0 : bJ.totalTicks) && void 0 !== cJ ? cJ : 0,
          PJ = Math.max(0, HJ - 1),
          dJ = null !== (ZJ = null === bJ || void 0 === bJ ? void 0 : bJ.playing) && void 0 !== ZJ && ZJ,
          zJ = null !== (UJ = null === bJ || void 0 === bJ ? void 0 : bJ.speed) && void 0 !== UJ ? UJ : 1,
          NJ = null !== (XJ = null === bJ || void 0 === bJ ? void 0 : bJ.Gy) && void 0 !== XJ ? XJ : 20,
          OJ = null !== QJ && void 0 !== QJ ? QJ : gJ,
          TJ = null !== (AJ = null === bJ || void 0 === bJ ? void 0 : bJ.freecam) && void 0 !== AJ && AJ,
          CJ = null !== (qJ = null === bJ || void 0 === bJ ? void 0 : bJ.cameraMode) && void 0 !== qJ ? qJ : "recording",
          uJ = null !== (YJ = null === wJ || void 0 === wJ ? void 0 : wJ.cameraKeyframes) && void 0 !== YJ ? YJ : Qe,
          iJ = null !== (hJ = null === wJ || void 0 === wJ ? void 0 : wJ.playbackMark) && void 0 !== hJ ? hJ : null,
          RJ = null !== (sJ = null === wJ || void 0 === wJ ? void 0 : wJ.fileName) && void 0 !== sJ ? sJ : null,
          aJ = null !== (nJ = null === wJ || void 0 === wJ ? void 0 : wJ.unsavedChanges) && void 0 !== nJ && nJ,
          BJ = null !== (GJ = null === wJ || void 0 === wJ ? void 0 : wJ.suggestSaveAs) && void 0 !== GJ && GJ,
          tJ = (0, VJ.f)("replayVideoExporting"),
          oJ = !tJ && WJ && ("freecam" === CJ || ("recording" === CJ || "keyframe" === CJ) && !dJ),
          lJ = MJ && WJ && "freecam" === CJ && !tJ && !SJ;
        (0, PU.c)(!0, !0, "ReplayViewerOverlay"), (0, FJ.useEffect)((() => {
          DJ.gameBridge.send("syncReplayCameraMode", null)
        }), [TJ]);
        const Jc = (0, FJ.useCallback)(((JJ, cJ) => {
            DJ.gameBridge.send("seekReplay", {
              Hh: JJ,
              ignorePlaybackMark: null === cJ || void 0 === cJ ? void 0 : cJ.ignorePlaybackMark
            })
          }), []),
          cc = (0, FJ.useCallback)((() => {
            DJ.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Zc = (0, FJ.useCallback)(((JJ, cJ) => {
            DJ.gameBridge.send("moveReplayCameraKeyframe", {
              from: JJ,
              to: cJ
            })
          }), []),
          Fc = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("setReplayCameraKeyframe", JJ)
          }), []),
          Uc = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: JJ,
              end: JJ
            })
          }), []),
          ec = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("deleteReplayCameraKeyframes", {
              start: JJ.startTick,
              end: JJ.endTick
            })
          }), []),
          Xc = (0, FJ.useCallback)((() => DJ.gameBridge.lookup("replayCamera", null)), []),
          Ac = (0, FJ.useCallback)((JJ => {
            EJ(JJ)
          }), []),
          qc = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("setReplayPlaybackMark", {
              inTick: JJ.startTick,
              outTick: JJ.endTick
            })
          }), []),
          jc = (0, FJ.useCallback)((() => {
            DJ.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          Yc = (0, FJ.useCallback)((JJ => {
            const cJ = DJ.gameBridge.latest("replay");
            if (null === cJ || JJ.endTick <= JJ.startTick) return;
            const ZJ = JJ.startTick,
              FJ = JJ.endTick;
            WF.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((JJ => {
              var UJ;
              if (!0 !== JJ) return;
              if ((null === (UJ = DJ.gameBridge.latest("replay")) || void 0 === UJ ? void 0 : UJ.id) !== cJ.id) return;
              DJ.gameBridge.send("cropReplay", {
                start: ZJ,
                end: FJ
              }) && (EJ(null), mJ(1))
            }))
          }), []),
          hc = (0, FJ.useCallback)(((JJ, cJ) => {
            rJ(null), mJ(1), EJ(null), (0, yU.c)().open(JJ, cJ).catch((JJ => {
              console.error(JJ), rJ(JJ instanceof Error ? JJ.message : "Failed to parse recording")
            }))
          }), []),
          Dc = (0, FJ.useCallback)(((JJ, cJ) => {
            null !== DJ.gameBridge.latest("connectedGame").websocketUrl ? WF.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((ZJ => {
              !0 === ZJ && hc(JJ, cJ)
            })) : hc(JJ, cJ)
          }), [hc]),
          sc = (0, FJ.useCallback)((JJ => {
            var cJ;
            const ZJ = null === (cJ = JJ.target.files) || void 0 === cJ ? void 0 : cJ[0];
            if (JJ.target.value = "", !ZJ) return;
            const FJ = new FileReader;
            FJ.onload = () => {
              Dc(new Uint8Array(FJ.result), {
                fileName: ZJ.name
              })
            }, FJ.onerror = () => {
              rJ("Failed to read file")
            }, FJ.readAsArrayBuffer(ZJ)
          }), [Dc]),
          nc = (0, FJ.useCallback)((() => {
            const JJ = () => {
              var JJ;
              null === (JJ = fJ.current) || void 0 === JJ || JJ.click()
            };
            (0, MU.n)() ? (0, MU.h)().then((JJ => {
              JJ && Dc(JJ.bytes, {
                fileHandle: JJ.handle
              })
            })).catch((cJ => {
              console.error(cJ), JJ()
            })): JJ()
          }), [Dc]),
          Gc = (0, FJ.useCallback)((async function() {
            let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let cJ;
            try {
              cJ = await HU(JJ, {
                files: (0, yU.c)(),
                pickerSupported: MU.n,
                chooseFile: MU.d,
                write: MU.q,
                download: IU.j,
                onFallback: console.error
              })
            } catch (ZJ) {
              return void(JJ => {
                console.error(JJ), WF.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: wU(JJ),
                  confirmText: "OK"
                })
              })(ZJ)
            }
            "written" !== cJ && "downloaded" !== cJ || (() => {
              const JJ = WF.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                JJ.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          fc = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("replayAction", JJ)
          }), []),
          xc = (0, FJ.useCallback)((JJ => {
            mJ((cJ => CU(cJ, JJ)))
          }), []),
          rc = (0, FJ.useCallback)((JJ => {
            if (!DJ.gameBridge.latest("replayVideoExporting")) switch (JJ) {
              case "replayLoad":
                nc();
                break;
              case "replaySave":
                Gc(!1);
                break;
              case "replaySaveAs":
                Gc(!0);
                break;
              case "replayTimelineZoomIn":
                xc("in");
                break;
              case "replayTimelineZoomOut":
                xc("out")
            }
          }), [nc, Gc, xc]);
        (0, VJ.b)("replayUiActionRequested", rc);
        const vc = (0, FJ.useCallback)((JJ => {
            DJ.gameBridge.send("setReplayCameraMode", JJ)
          }), []),
          mc = WJ ? sZ.d : sZ.m,
          Qc = aJ && !BJ ? sZ.m : sZ.d,
          Ec = aJ && BJ ? sZ.m : sZ.d;
        return (0, jJ.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, jJ.jsx)(se, {
            enabled: oJ
          }), lJ && (0, jJ.jsx)(me, {}), (0, jJ.jsx)("input", {
            ref: fJ,
            type: "file",
            accept: IU.e,
            className: "ReplayViewerFileInput",
            onChange: sc
          }), (0, jJ.jsxs)("div", {
            className: eJ()("ReplayViewerBar", {
              Collapsed: SJ
            }),
            children: [(0, jJ.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                SJ ? IJ(!1) : WJ ? IJ(!0) : (0, LJ.b)()
              },
              "aria-expanded": !SJ,
              "aria-label": SJ ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, jJ.jsx)(pJ.c, {
                name: SJ ? "angle-up" : "angle-down"
              })
            }), !SJ && (0, jJ.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [WJ && HJ > 0 && (0, jJ.jsx)(De, {
                maxTick: PJ,
                displayTick: OJ,
                Gy: NJ,
                cameraKeyframes: uJ,
                playbackMark: iJ,
                onSeek: Jc,
                onPause: cc,
                onScrubTickChange: Ac,
                onMoveCameraKeyframe: Zc,
                onUpdateCameraKeyframe: Fc,
                onDeleteCameraKeyframe: Uc,
                onUseCurrentCamera: Xc,
                onMarkRange: qc,
                onCropRange: Yc,
                onDeleteKeyframesInRange: ec,
                onClearMark: jc,
                zoomLevel: vJ,
                onZoomLevelChange: mJ
              }, PJ), (0, jJ.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, jJ.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, jJ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [WJ && (0, jJ.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== RJ && void 0 !== RJ ? RJ : "Unsaved recording", aJ ? " *" : ""]
                    }), (0, jJ.jsxs)(mc, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        rc("replayLoad")
                      },
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, jJ.jsxs)(sZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: LJ.b,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, jJ.jsxs)(Qc, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        rc("replaySave")
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, jJ.jsxs)(sZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        DJ.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, jJ.jsxs)(Ec, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        rc("replaySaveAs")
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, jJ.jsxs)(sZ.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        DJ.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !WJ || 0 === HJ || tJ,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, jJ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, jJ.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, jJ.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, jJ.jsx)(yJ.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, jJ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, jJ.jsx)(kJ.g, {
                        tooltipInner: (0, jJ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, jJ.jsxs)(sZ.O, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === CJ,
                          onClick: () => {
                            vc("recording")
                          },
                          disabled: !WJ,
                          children: ["Recorded ", (0, jJ.jsx)(pJ.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, jJ.jsx)(kJ.g, {
                        tooltipInner: (0, jJ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, jJ.jsxs)(sZ.O, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === CJ,
                          onClick: () => {
                            vc("freecam")
                          },
                          disabled: !WJ,
                          children: ["Free ", (0, jJ.jsx)(pJ.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, jJ.jsx)(kJ.g, {
                        tooltipInner: (0, jJ.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, jJ.jsxs)(sZ.O, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === CJ,
                          onClick: () => {
                            vc("keyframe")
                          },
                          disabled: !WJ,
                          children: ["Preview ", (0, jJ.jsx)(pJ.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, jJ.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, jJ.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, jJ.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, jJ.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: OU(OJ, NJ)
                      }), (0, jJ.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, jJ.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: OU(PJ, NJ)
                      })]
                    }), (0, jJ.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", OJ, " / ", PJ]
                    })]
                  }), (0, jJ.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, jJ.jsxs)(sZ.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        fc("replaySkipBack")
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsxs)("span", {
                        children: [" ", (0, jJ.jsx)(pJ.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, jJ.jsx)(yJ.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, jJ.jsxs)(sZ.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        DJ.gameBridge.send("setReplayPlaying", !dJ)
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsxs)("span", {
                        children: [" ", dJ ? (0, jJ.jsx)(pJ.c, {
                          name: "pause"
                        }) : (0, jJ.jsx)(pJ.c, {
                          name: "play"
                        }), " "]
                      }), (0, jJ.jsx)(yJ.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, jJ.jsxs)(sZ.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        fc("replaySkipForward")
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsxs)("span", {
                        children: [" ", (0, jJ.jsx)(pJ.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, jJ.jsx)(yJ.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, jJ.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, jJ.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, jJ.jsxs)(sZ.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        fc("replayRecordKeyframe")
                      },
                      disabled: !WJ,
                      children: [(0, jJ.jsx)(yJ.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, jJ.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, jJ.jsx)(xe, {
                      disabled: !WJ
                    }), iJ && (0, jJ.jsx)(sZ.O, {
                      className: "ReplayViewerActionButton",
                      onClick: jc,
                      disabled: !WJ,
                      children: (0, jJ.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, jJ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, jJ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, jJ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, jJ.jsx)(sZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          fc("replaySpeedDown")
                        },
                        disabled: !WJ || (0, SU.f)(zJ),
                        children: (0, jJ.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, jJ.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [zJ, "\xd7"]
                      }), (0, jJ.jsx)(sZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          fc("replaySpeedUp")
                        },
                        disabled: !WJ || (0, SU.d)(zJ),
                        children: (0, jJ.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, jJ.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, jJ.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, jJ.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, jJ.jsxs)(sZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          rc("replayTimelineZoomOut")
                        },
                        disabled: !WJ || vJ <= pU[0],
                        children: [(0, jJ.jsx)("span", {
                          children: " \u2212 "
                        }), (0, jJ.jsx)(yJ.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, jJ.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: TU(vJ)
                      }), (0, jJ.jsxs)(sZ.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          rc("replayTimelineZoomIn")
                        },
                        disabled: !WJ || vJ >= pU[pU.length - 1],
                        children: [(0, jJ.jsx)("span", {
                          children: " + "
                        }), (0, jJ.jsx)(yJ.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, jJ.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !WJ && "Load a recording to begin playback"
              }), xJ && (0, jJ.jsx)("div", {
                className: "ReplayViewerError",
                children: xJ
              })]
            })]
          })]
        })
      }));
    var Ke = ZJ(1213);

    function ye() {
      const [, JJ] = (0, FJ.useState)(0);
      return (0, AJ.i)("replayViewer|uiVisibilityChanged", (() => {
          JJ((JJ => JJ + 1))
        })), (0, AJ.i)("replayViewer|replayLoaded", (() => {
          JJ((JJ => JJ + 1))
        })),
        function() {
          if (!(0, Ke.g)()) return {};
          const JJ = {
              [ne.c]: "true"
            },
            cJ = (0, Ge.b)();
          for (const {
              group: ZJ,
              dataAttr: FJ
            }
            of ne.e) FJ && !cJ[ZJ] && (JJ[FJ] = "true");
          return JJ
        }()
    }
    var Se = ZJ(8550),
      Ie = ZJ(1834),
      Me = ZJ(8019),
      be = ZJ(8004),
      we = ZJ(1849);
    const We = (0, FJ.memo)((function() {
      var JJ, cJ, ZJ;
      const UJ = (0, vJ.f)("customButtons");
      (0, FJ.useEffect)((() => UJ ? (DJ.gameBridge.send("bindCustomButtonKeys", UJ.filter(Me.g).map((JJ => {
        let {
          id: cJ,
          keycode: ZJ
        } = JJ;
        return {
          id: cJ,
          keycode: ZJ
        }
      }))), () => {
        DJ.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [UJ]);
      const eJ = null !== (JJ = null === UJ || void 0 === UJ ? void 0 : UJ.filter(Me.g)) && void 0 !== JJ ? JJ : [],
        XJ = (0, be.g)(),
        AJ = null !== (cJ = null === (ZJ = (0, we.b)()) || void 0 === ZJ ? void 0 : ZJ.hideButtonHints) && void 0 !== cJ && cJ,
        qJ = "customButton" !== (null === XJ || void 0 === XJ ? void 0 : XJ.kind) || AJ ? null : XJ.id,
        YJ = eJ.length > 0,
        hJ = (0, FJ.useRef)(null);
      return (0, FJ.useLayoutEffect)((() => {
        if (!YJ) return () => {};
        const JJ = hJ.current,
          cJ = JJ.closest(".InGameUi"),
          ZJ = () => {
            cJ.style.setProperty("--custom-buttons-top", `${JJ.offsetTop}px`)
          };
        ZJ();
        const FJ = new ResizeObserver(ZJ);
        return FJ.observe(JJ), FJ.observe(JJ.parentElement), () => {
          FJ.disconnect(), cJ.style.removeProperty("--custom-buttons-top")
        }
      }), [YJ]), (0, jJ.jsx)("div", {
        ref: hJ,
        className: "" + ((0, aF.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: eJ.map((JJ => {
          var cJ, ZJ;
          return (0, jJ.jsx)(ge, {
            button: JJ,
            padGlyph: JJ.id === qJ && null !== (cJ = null === (ZJ = (0, OJ.f)()) || void 0 === ZJ ? void 0 : ZJ.getBoundButton("actionButton")) && void 0 !== cJ ? cJ : null
          }, JJ.id)
        }))
      })
    }));

    function ge(JJ) {
      let {
        button: cJ,
        padGlyph: ZJ
      } = JJ;
      const UJ = (0, FJ.useRef)(null),
        eJ = () => {
          null !== UJ.current && (UJ.current = null, DJ.gameBridge.send("pressCustomButton", {
            id: cJ.id,
            down: !1
          }))
        };
      (0, FJ.useEffect)((() => eJ), []);
      const XJ = wc(eJ, {
          pressesOnPointerDown: !0
        }),
        AJ = JJ => {
          UJ.current === JJ.pointerId && eJ()
        };
      return (0, jJ.jsxs)("div", {
        className: "CustomIcon",
        ...XJ,
        onLostPointerCapture: AJ,
        children: [(0, jJ.jsx)(Ie.d, {
          icon: cJ.icon,
          keyboardHint: (0, Me.d)(cJ.keycode),
          padGlyph: ZJ,
          onPointerDown: JJ => {
            try {
              JJ.currentTarget.setPointerCapture(JJ.pointerId)
            } catch {
              return
            }
            null === UJ.current && DJ.gameBridge.send("pressCustomButton", {
              id: cJ.id,
              down: !0
            }), UJ.current = JJ.pointerId
          },
          onPointerUp: AJ,
          onPointerCancel: AJ,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), cJ.description && (0, jJ.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: cJ.description
        })]
      })
    }
    var He = ZJ(2173),
      Pe = ZJ(35635),
      ke = ZJ(2595);
    const pe = {
      frame: JJ => {
        const cJ = requestAnimationFrame((() => {
          JJ()
        }));
        return () => {
          cancelAnimationFrame(cJ)
        }
      },
      afterFrame: JJ => {
        const cJ = setTimeout(JJ, 0);
        return () => {
          clearTimeout(cJ)
        }
      }
    };
    class de {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke.e,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe;
        this.idle = JJ, this.frames = cJ, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (JJ(), () => {}) : (cJ ? this.waiting.unshift(JJ) : this.waiting.push(JJ), this.schedule(), () => {
          const cJ = this.waiting.indexOf(JJ);
          cJ >= 0 && (this.waiting.splice(cJ, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((JJ => {
          for (this.cancelIdle = null; this.waiting.length > 0 && JJ.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const JJ = this.waiting.shift();
        try {
          JJ()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var JJ, cJ, ZJ;
        null === (JJ = this.cancelIdle) || void 0 === JJ || JJ.call(this), this.cancelIdle = null, null === (cJ = this.cancelFrame) || void 0 === cJ || cJ.call(this), this.cancelFrame = null, null === (ZJ = this.cancelAfterFrame) || void 0 === ZJ || ZJ.call(this), this.cancelAfterFrame = null
      }
    }
    const ze = (0, FJ.createContext)(null);

    function Ne(JJ) {
      let {
        children: cJ,
        first: ZJ = !1
      } = JJ;
      const UJ = (0, FJ.useContext)(ze),
        [eJ, XJ] = (0, FJ.useState)(null === UJ);
      return (0, FJ.useEffect)((() => {
        if (!eJ && null !== UJ) return UJ.request((() => {
          XJ(!0)
        }), ZJ)
      }), [ZJ, eJ, UJ]), eJ ? (0, FJ.createElement)(FJ.Fragment, null, cJ) : null
    }
    const Oe = (0, FJ.memo)((function(JJ) {
        let {
          shown: cJ
        } = JJ;
        const [ZJ] = (0, FJ.useState)((() => new nJ.e(cJ))), [UJ] = (0, FJ.useState)((() => cJ ? null : new de));
        return (0, FJ.useLayoutEffect)((() => {
          cJ && (null === UJ || void 0 === UJ || UJ.show(), ZJ.show())
        }), [cJ, ZJ, UJ]), (0, jJ.jsx)(nJ.b.Provider, {
          value: ZJ,
          children: (0, jJ.jsx)(ze.Provider, {
            value: UJ,
            children: (0, jJ.jsx)(Te, {})
          })
        })
      })),
      Te = (0, FJ.memo)((function() {
        const {
          isUiHidden: JJ,
          isUiHiddenByCamera: cJ,
          isTouchScreen: ZJ
        } = (0, KJ.j)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), UJ = (0, bF.c)(), XJ = ye(), AJ = (0, nJ.l)(), qJ = (0, FJ.useRef)(null), YJ = (0, vJ.f)("showKillfeed");
        return function() {
            const JJ = (0, nJ.l)();
            (0, FJ.useEffect)((() => JJ.whenShown(GJ)), [JJ])
          }(),
          function() {
            const JJ = (0, vJ.f)("inventoryColourOverride");
            (0, FJ.useEffect)((() => {
              if (!JJ) return;
              const {
                panel: cJ,
                slot: ZJ,
                slotSelected: FJ,
                slotUnavailable: UJ
              } = CJ(JJ), eJ = document.documentElement.style;
              return eJ.setProperty("--InventoryPanelColour", cJ), eJ.setProperty("--InventorySlotColour", ZJ), eJ.setProperty("--InventorySlotSelectedColour", FJ), eJ.setProperty("--InventorySlotUnavailableColour", UJ), () => {
                eJ.removeProperty("--InventoryPanelColour"), eJ.removeProperty("--InventorySlotColour"), eJ.removeProperty("--InventorySlotSelectedColour"), eJ.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [JJ])
          }(), (0, FJ.useLayoutEffect)((() => AJ.whenShown((() => {
            var JJ;
            null === (JJ = qJ.current) || void 0 === JJ || JJ.classList.remove("PreMounted")
          }))), [AJ]), (0, jJ.jsxs)(jJ.Fragment, {
            children: [(0, jJ.jsxs)("div", {
              ref: qJ,
              className: eJ()("InGameUi", {
                PreMounted: !AJ.shown,
                Hidden: JJ,
                HiddenByCamera: cJ
              }),
              ...XJ,
              children: [(0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(MZ.b, {}), (0, jJ.jsx)(HZ, {})]
              }), (0, jJ.jsx)(nJ.h, {
                children: (0, jJ.jsx)(PZ, {})
              }), (0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(FU, {}), (0, jJ.jsx)(YU, {}), ZJ && (0, jJ.jsx)(DU, {})]
              }), (0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(UZ, {}), (0, jJ.jsx)(aZ.b, {}), (0, jJ.jsx)(ZF, {})]
              }), (0, jJ.jsx)(nJ.h, {
                children: (0, jJ.jsx)(IZ, {})
              }), (0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(AU.b, {}), (0, jJ.jsx)(Ee, {})]
              }), (0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(nU.h, {}), (0, jJ.jsx)(GU.d, {})]
              }), (0, jJ.jsx)(Ne, {
                children: (0, jJ.jsx)(XZ.m, {})
              }), (0, jJ.jsx)(Ne, {
                children: (0, jJ.jsx)(Be, {
                  showChat: UJ
                })
              }), (0, jJ.jsxs)(Ne, {
                children: [(0, jJ.jsx)(xU, {}), (0, jJ.jsx)(XU, {})]
              }), (0, jJ.jsxs)("div", {
                className: eJ()("RightElements", {
                  RightElementsTouchscreen: ZJ
                }),
                "data-camera-keeper-host": "",
                children: [(0, jJ.jsxs)("div", {
                  className: jF.f,
                  children: [(0, jJ.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    children: [(0, jJ.jsx)(Ne, {
                      children: (0, jJ.jsx)(uF.e, {})
                    }), (0, jJ.jsxs)(Ne, {
                      children: [(0, jJ.jsx)(dJ, {}), (0, jJ.jsx)(YF.c, {})]
                    }), aF.featureFlags.useSocialFeatures && (0, jJ.jsx)(nJ.h, {
                      children: (0, jJ.jsx)(hF.e, {
                        placement: "inGame"
                      })
                    }), aF.featureFlags.useSocialFeatures && (0, jJ.jsx)(nJ.h, {
                      children: (0, jJ.jsx)(KF, {})
                    }), YJ && (0, jJ.jsx)(nJ.h, {
                      children: (0, jJ.jsx)(LZ, {})
                    }), (0, jJ.jsx)(Ne, {
                      children: (0, jJ.jsx)(Se.d, {})
                    })]
                  }), aF.featureFlags.useSocialFeatures && (0, jJ.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, jJ.jsx)(Ne, {
                      children: (0, jJ.jsx)(cU.b, {})
                    })
                  })]
                }), (0, jJ.jsxs)(Ne, {
                  children: [(0, jJ.jsx)(XZ.b, {
                    placement: "topRight"
                  }), (0, jJ.jsx)(te, {})]
                })]
              }), (0, jJ.jsx)("div", {
                className: "LeftCentre",
                children: (0, jJ.jsx)(Ne, {
                  children: (0, jJ.jsx)(We, {})
                })
              }), (0, jJ.jsxs)("div", {
                className: "BottomCentre",
                children: [(0, jJ.jsx)(nJ.h, {
                  children: (0, jJ.jsx)(wJ, {})
                }), (0, jJ.jsx)(Ne, {
                  children: (0, jJ.jsx)(ue, {})
                }), (0, jJ.jsxs)("div", {
                  className: "BottomElements",
                  children: [(0, jJ.jsx)("div", {
                    className: eJ()("BottomLeftElements", {
                      Touch: ZJ
                    }),
                    children: (0, jJ.jsxs)(Ne, {
                      children: [(0, jJ.jsx)(IF, {}), !ZJ && (0, jJ.jsx)(He.c, {})]
                    })
                  }), (0, jJ.jsx)(Ne, {
                    children: (0, jJ.jsx)(ae, {})
                  }), (0, jJ.jsx)(Ne, {
                    children: (0, jJ.jsx)(UF, {
                      isTouchScreen: ZJ
                    })
                  })]
                })]
              }), (0, jJ.jsx)("div", {
                className: "MiddleLeft"
              }), ZJ && (0, jJ.jsx)(Ne, {
                children: (0, jJ.jsx)(zc, {})
              }), (0, jJ.jsx)("div", {
                className: "CameraFadeHost",
                ref: Pe.f
              })]
            }), (0, jJ.jsx)(nJ.h, {
              children: (0, jJ.jsx)(KU.c, {})
            }), (0, jJ.jsx)(Ne, {
              first: !0,
              children: (0, jJ.jsx)(MF.d, {})
            }), (0, jJ.jsx)(nJ.h, {
              children: (0, jJ.jsx)(Ce, {})
            })]
          })
      }));

    function Ce() {
      return (0, FJ.useEffect)((() => {
        const JJ = setTimeout((() => {
          (0, mJ.h)()
        }), 0);
        return () => {
          clearTimeout(JJ), mJ.i.Bx(!1)
        }
      }), []), null
    }
    const ue = (0, FJ.memo)((function() {
        const JJ = (0, AJ.m)("aimingOverlay", "none");
        (0, xJ.d)();
        const cJ = (0, vJ.g)("middleTextUpper"),
          ZJ = (0, vJ.g)("middleTextLower");
        return (0, jJ.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === JJ ? {
            visibility: "hidden"
          } : {},
          children: [(0, jJ.jsx)(Le, {
            text: cJ,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: ie
          }), (0, jJ.jsx)(Le, {
            text: ZJ,
            className: "MiddleText",
            maxHeightFraction: Re
          })]
        })
      })),
      ie = .3,
      Re = .2;

    function Le(JJ) {
      let {
        text: cJ,
        className: ZJ,
        maxHeightFraction: UJ
      } = JJ;
      const eJ = (0, FJ.useRef)(null),
        XJ = (0, FJ.useRef)(null);
      return function(JJ, cJ, ZJ, UJ) {
        (0, FJ.useLayoutEffect)((() => {
          const FJ = JJ.current,
            UJ = cJ.current;
          if (!FJ || !UJ) return;
          let eJ = -1,
            XJ = -1;
          const AJ = JJ => (UJ.style.setProperty("zoom", String(JJ)), FJ.getBoundingClientRect().height),
            qJ = () => {
              const JJ = document.documentElement.clientHeight * ZJ;
              let cJ = 1;
              if (AJ(1) > JJ) {
                let ZJ = .5,
                  FJ = 1;
                for (let cJ = 0; cJ < 6; cJ++) {
                  const cJ = (ZJ + FJ) / 2;
                  AJ(cJ) <= JJ ? ZJ = cJ : FJ = cJ
                }
                cJ = ZJ
              }
              XJ = AJ(cJ), eJ = FJ.getBoundingClientRect().width
            };
          qJ();
          let jJ = 0;
          const YJ = () => {
              cancelAnimationFrame(jJ), jJ = requestAnimationFrame(qJ)
            },
            hJ = new ResizeObserver((() => {
              const {
                width: JJ,
                height: cJ
              } = FJ.getBoundingClientRect();
              JJ === eJ && cJ === XJ || YJ()
            }));
          return hJ.observe(FJ), window.addEventListener("resize", YJ), () => {
            hJ.disconnect(), window.removeEventListener("resize", YJ), cancelAnimationFrame(jJ), UJ.style.removeProperty("zoom")
          }
        }), [JJ, cJ, ZJ, UJ])
      }(eJ, XJ, UJ, cJ.content), (0, jJ.jsx)("div", {
        ref: eJ,
        className: "MiddleTextFit",
        children: (0, jJ.jsx)(fU, {
          ref: XJ,
          text: cJ,
          className: ZJ
        })
      })
    }
    const ae = (0, FJ.memo)((function() {
        const JJ = (0, AJ.m)("aimingOverlay", "none");
        (0, xJ.d)();
        const cJ = (0, vJ.f)("useInventory");
        return (0, jJ.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === JJ ? {
            visibility: "hidden"
          } : {},
          children: [(0, jJ.jsx)(YJ, {}), (0, jJ.jsx)(XZ.b, {}), (0, jJ.jsx)(AZ, {}), (0, jJ.jsx)(nJ.h, {
            children: (0, jJ.jsx)(lF, {})
          }), (0, jJ.jsxs)("div", {
            className: "HotBarRow",
            children: [cJ ? (0, jJ.jsx)(NJ.d, {}) : (0, jJ.jsx)(NJ.g, {}), (0, jJ.jsx)(TJ, {})]
          })]
        })
      })),
      Be = (0, FJ.memo)((function(JJ) {
        let {
          showChat: cJ
        } = JJ;
        const {
          t: ZJ
        } = (0, bJ.F)(), {
          clientEscMenuOptions: UJ,
          isTouchScreen: XJ
        } = (0, KJ.j)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, xJ.d)();
        const {
          userContext: AJ,
          isUserContextUpdating: qJ
        } = (0, fJ.d)(), YJ = (0, vJ.f)("hideCoordinates"), DJ = (0, vJ.f)("customVariationTitle"), {
          requestedGameNameWithVariation: sJ,
          gameNameWithVariation: nJ,
          lobbyName: GJ,
          shownLobbyName: mJ
        } = (0, VJ.f)("connectedGame"), QJ = (0, hJ.c)(sJ, GJ, !1), [EJ, yJ] = (0, FJ.useState)(null), SJ = (0, RF.l)(nJ || sJ || ""), IJ = DJ || SJ || "";
        (0, FJ.useEffect)((() => {
          qJ || sF.c.getFavouriteLobbies(AJ).then((JJ => {
            console.log("Got favourite lobbies", JJ), yJ(JJ)
          }))
        }), [qJ, AJ]);
        const MJ = (0, FJ.useRef)(null);
        return (0, FJ.useLayoutEffect)((() => {
            const JJ = MJ.current,
              cJ = document.documentElement,
              ZJ = new ResizeObserver((() => {
                cJ.style.setProperty("--InGameHeaderRowsHeight", `${JJ.offsetHeight}px`)
              }));
            return ZJ.observe(JJ), () => {
              ZJ.disconnect(), cJ.style.removeProperty("--InGameHeaderRowsHeight")
            }
          }), []),
          function(JJ) {
            const {
              isTouchScreen: cJ
            } = (0, KJ.j)(["isTouchScreen"]);
            (0, FJ.useLayoutEffect)((() => {
              if (!cJ) return;
              const ZJ = JJ.current,
                FJ = document.querySelector(`.${jF.f}`),
                UJ = JJ => {
                  const cJ = () => {
                    const cJ = `${Math.floor(JJ.getBoundingClientRect().left-ZJ.getBoundingClientRect().left-4)}px`;
                    ZJ.style.getPropertyValue("--InGameHeaderMaxWidth") !== cJ && ZJ.style.setProperty("--InGameHeaderMaxWidth", cJ)
                  };
                  cJ();
                  const UJ = new ResizeObserver(cJ);
                  UJ.observe(JJ), UJ.observe(FJ), window.addEventListener("resize", cJ);
                  const eJ = new MutationObserver(cJ);
                  return eJ.observe(document.documentElement, {
                    attributes: !0,
                    attributeFilter: ["style"]
                  }), () => {
                    UJ.disconnect(), eJ.disconnect(), window.removeEventListener("resize", cJ)
                  }
                },
                eJ = () => FJ.querySelector(".TopRightIconsContainer"),
                XJ = eJ();
              let AJ;
              if (XJ) AJ = UJ(XJ);
              else {
                const JJ = new MutationObserver((() => {
                  const cJ = eJ();
                  cJ && (JJ.disconnect(), AJ = UJ(cJ))
                }));
                JJ.observe(FJ, {
                  childList: !0,
                  subtree: !0
                }), AJ = () => {
                  JJ.disconnect()
                }
              }
              return () => {
                AJ(), ZJ.style.removeProperty("--InGameHeaderMaxWidth")
              }
            }), [cJ, JJ])
          }(MJ), (0, jJ.jsxs)(jJ.Fragment, {
            children: [(0, jJ.jsxs)("div", {
              className: eJ()(jF.e, {
                Touchscreen: XJ
              }),
              ref: MJ,
              children: [(0, jJ.jsxs)("div", {
                className: "InGameHeader",
                children: [(0, jJ.jsxs)("div", {
                  className: "InGameHeaderLogo",
                  onMouseDown: JJ => {
                    JJ.stopPropagation(), JJ.preventDefault()
                  },
                  onClick: () => {
                    KJ.d.set({
                      openEverythingMenuName: rJ.m.SETTINGS
                    })
                  },
                  children: [(0, jJ.jsx)(iF.c, {
                    showFace: !0,
                    loading: !1
                  }), "bloxd.io"]
                }), (0, jJ.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, jJ.jsxs)("div", {
                  className: "InGameHeaderGameName",
                  children: [null === QJ && (0, jJ.jsx)(iF.c, {}), null !== QJ && (0, jJ.jsxs)(jJ.Fragment, {
                    children: [QJ, IJ && ` ${IJ}`]
                  })]
                }), (0, jJ.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, jJ.jsx)("div", {
                  className: "InGameHeaderLobbyName",
                  children: mJ
                }), (0, LF.I)(GJ) && (0, jJ.jsx)(kJ.g, {
                  tooltipInner: (0, jJ.jsx)("div", {
                    children: ZJ(null !== EJ && EJ.includes(GJ) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                  }),
                  children: (0, jJ.jsx)("div", {
                    children: (0, jJ.jsx)(sZ.u, {
                      isLiked: null !== EJ && EJ.includes(GJ),
                      onClick: () => {
                        try {
                          if (!EJ) return;
                          EJ.includes(GJ) ? (sF.c.unfavouriteLobby(AJ, GJ).catch((JJ => {
                            console.error("Failed to favourite lobby", JJ)
                          })), yJ(EJ.filter((JJ => JJ !== GJ)))) : (sF.c.favouriteLobby(AJ, GJ).catch((JJ => {
                            console.error("Failed to favourite lobby", JJ)
                          })), yJ([...EJ, GJ]))
                        } catch (JJ) {
                          console.error("Failed to like lobby", JJ)
                        }
                      },
                      isLoading: null === EJ
                    })
                  })
                }), (0, jJ.jsx)(QU, {})]
              }), (0, jJ.jsx)(zF, {
                show: UJ.showFPS
              }), !YJ && UJ.showCoordinates && (0, jJ.jsx)(TF, {}), !YJ && UJ.showChunkCoordinates && (0, jJ.jsx)(CF, {}), (0, jJ.jsx)(rU, {})]
            }), (0, jJ.jsx)("div", {
              className: "TopLeftElements",
              children: (0, jJ.jsx)("div", {
                className: "InGameHeaderAndChat",
                children: cJ && (0, jJ.jsx)(RJ.c, {})
              })
            })]
          })
      })),
      te = (0, FJ.memo)((function() {
        (0, xJ.d)();
        const JJ = (0, vJ.g)("RightInfoText"),
          [cJ, ZJ] = (0, FJ.useState)(null);
        return (0, nc.h)(cJ, ".RightElements"), JJ.hasText ? (0, jJ.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, jJ.jsx)(fU, {
            ref: ZJ,
            text: JJ,
            className: "RightInfoDiv",
            children: (0, jJ.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, jJ.jsx)(qJ.d, {
                text: JJ.content
              })
            })
          })
        }) : null
      }))
  },
  4233: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(227),
      eJ = ZJ(1688),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        text: cJ
      } = JJ;
      const ZJ = [];
      let AJ = "";
      return (0, UJ.Sb)(cJ).forEach(((JJ, cJ) => {
        if ("string" === typeof JJ || !(0, eJ.e)(JJ.icon)) return void(AJ += "string" === typeof JJ ? JJ : JJ.icon);
        const UJ = Math.max(0, AJ.trimEnd().search(/\S{1,12}$/));
        ZJ.push((0, XJ.jsxs)(FJ.Fragment, {
          children: [AJ.slice(0, UJ), (0, XJ.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [AJ.slice(UJ), (0, XJ.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": JJ.icon,
              children: (0, XJ.jsx)(eJ.d, {
                itemName: JJ.icon,
                amount: 0
              })
            })]
          })]
        }, cJ)), AJ = ""
      })), ZJ.push(AJ), (0, XJ.jsx)(XJ.Fragment, {
        children: ZJ
      })
    }
  },
  35597: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => DJ,
      h: () => YJ,
      i: () => hJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1688),
      AJ = ZJ(990);
    const qJ = 350;
    let jJ = 0;

    function YJ() {
      return jJ += 1, jJ
    }

    function hJ(JJ, cJ) {
      let ZJ = 0;
      for (const FJ of JJ) "ingredient" !== FJ.kind && FJ.fA === cJ && (ZJ += FJ.amount);
      return ZJ > 0 ? {
        idx: cJ,
        amount: ZJ
      } : null
    }

    function DJ(JJ) {
      var cJ, ZJ;
      let {
        anim: UJ,
        onComplete: jJ
      } = JJ;
      const YJ = null !== (cJ = UJ.delayMs) && void 0 !== cJ ? cJ : 0,
        hJ = null !== (ZJ = UJ.durationMs) && void 0 !== ZJ ? ZJ : qJ,
        [DJ, sJ] = (0, FJ.useState)(UJ.from),
        [nJ, GJ] = (0, FJ.useState)(0 === YJ),
        [fJ, xJ] = (0, FJ.useState)(!1),
        rJ = (0, FJ.useRef)(!1);
      return (0, FJ.useEffect)((() => {
        let JJ, cJ;
        const ZJ = () => {
            rJ.current = !0, GJ(!0), JJ = requestAnimationFrame((() => {
              cJ = requestAnimationFrame((() => {
                sJ({
                  x: UJ.to.x,
                  y: UJ.to.y
                }), xJ(!0)
              }))
            }))
          },
          FJ = rJ.current ? 0 : YJ;
        let eJ;
        FJ > 0 ? eJ = setTimeout(ZJ, FJ) : ZJ();
        const XJ = setTimeout((() => {
          jJ(UJ.id)
        }), FJ + hJ + 50);
        return () => {
          clearTimeout(eJ), cancelAnimationFrame(JJ), cancelAnimationFrame(cJ), clearTimeout(XJ)
        }
      }), [UJ.id, UJ.to.x, UJ.to.y, jJ, YJ, hJ]), (0, AJ.jsx)("div", {
        className: eJ()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === UJ.kind,
          Waiting: !nJ,
          Arrived: fJ
        }),
        style: {
          left: DJ.x,
          top: DJ.y,
          "--fly-duration": `${hJ}ms`
        },
        children: (0, AJ.jsx)(XJ.d, {
          itemName: UJ.itemName,
          amount: UJ.amount
        })
      })
    }
  },
  35584: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => WJ,
      g: () => PJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2514),
      eJ = ZJ(5910),
      XJ = ZJ(1834),
      AJ = ZJ(2175),
      qJ = ZJ(8131),
      jJ = ZJ(235),
      YJ = ZJ(17),
      hJ = ZJ(1326),
      DJ = ZJ(29),
      sJ = ZJ(926),
      nJ = ZJ.n(sJ),
      GJ = ZJ(227),
      fJ = ZJ(35587),
      xJ = ZJ(1675),
      rJ = ZJ(1743),
      vJ = ZJ(7988),
      mJ = ZJ(990);

    function QJ(JJ) {
      var cJ, ZJ;
      let {
        slotIdx: eJ
      } = JJ;
      const XJ = (0, rJ.d)("hotbar", (JJ => {
          var cJ;
          return null !== (cJ = JJ.items[eJ]) && void 0 !== cJ ? cJ : null
        })),
        qJ = (0, rJ.d)("hotbar", (JJ => JJ.ammo)),
        [YJ, hJ] = (0, FJ.useState)(!1),
        DJ = (0, FJ.useRef)(null),
        [sJ, GJ] = (0, FJ.useState)(null),
        [fJ, QJ] = (0, FJ.useState)(null),
        EJ = (0, AJ.f)("maxAuraLevel"),
        VJ = (0, UJ.c)(),
        KJ = (0, FJ.useCallback)((() => {
          if (clearTimeout(DJ.current), XJ) {
            var JJ, cJ, ZJ, FJ;
            const qJ = XJ.displayName,
              YJ = [],
              hJ = Array.isArray(qJ) ? qJ : [qJ],
              DJ = {
                fontStyle: null !== (JJ = XJ.attributes.customAttributes) && void 0 !== JJ && JJ.author ? "italic" : "normal"
              };
            for (const JJ of hJ) JJ.str ? YJ.push(JJ) : YJ.push({
              str: JJ,
              style: DJ
            });
            if (null !== (cJ = XJ.attributes.customAttributes) && void 0 !== cJ && cJ.enchantments) {
              YJ.push(" ");
              const JJ = Object.entries(XJ.attributes.customAttributes.enchantments).sort(((JJ, cJ) => cJ[1] - JJ[1])),
                cJ = XJ.attributes.customAttributes.enchantmentData;
              for (const [ZJ, FJ] of JJ) {
                var UJ, eJ;
                const JJ = null !== (UJ = null === cJ || void 0 === cJ || null === (eJ = cJ[ZJ]) || void 0 === eJ ? void 0 : eJ.icon) && void 0 !== UJ ? UJ : `${ZJ} Enchantment`;
                var AJ;
                if (FJ < 4)
                  for (let cJ = 0; cJ < FJ; cJ++) YJ.push({
                    icon: JJ,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else YJ.push({
                  icon: JJ,
                  style: {
                    fontSize: "1.5em"
                  }
                }), YJ.push(null !== (AJ = (0, jJ.O)(FJ)) && void 0 !== AJ ? AJ : FJ.toString())
              }
            }
            GJ(YJ), QJ(null !== (ZJ = null === (FJ = XJ.attributes.customAttributes) || void 0 === FJ ? void 0 : FJ.enchantmentTier) && void 0 !== ZJ ? ZJ : null)
          } else GJ(null), QJ(null);
          hJ(!0), VJ();
          const qJ = null === XJ || void 0 === XJ ? void 0 : XJ.attributes.customAttributes;
          void 0 === (null === qJ || void 0 === qJ ? void 0 : qJ.shotsLeft) && (DJ.current = setTimeout((() => {
            hJ(!1)
          }), 2e3))
        }), [null === XJ || void 0 === XJ ? void 0 : XJ.name, eJ, null === XJ || void 0 === XJ ? void 0 : XJ.instance, null === XJ || void 0 === XJ ? void 0 : XJ.displayName]);
      (0, FJ.useEffect)((() => (KJ(), () => {
        clearTimeout(DJ.current), hJ(!1)
      })), [null === XJ || void 0 === XJ ? void 0 : XJ.name, eJ, null === XJ || void 0 === XJ ? void 0 : XJ.instance, KJ]);
      const yJ = null === XJ || void 0 === XJ || null === (cJ = XJ.attributes.customAttributes) || void 0 === cJ ? void 0 : cJ.shotsLeft,
        SJ = void 0 === yJ ? null : (0, mJ.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${yJ}|${XJ.requiresAmmo?`${qJ}x${XJ.clipSize}`:XJ.clipSize}`
        }),
        IJ = (0, vJ.j)();
      return (0, mJ.jsx)(mJ.Fragment, {
        children: YJ && XJ && !IJ.showing ? (0, mJ.jsxs)("div", {
          className: nJ()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === EJ,
            Enchanted: null !== fJ
          }),
          style: {
            "--enchantmentColour": null !== (ZJ = jJ.gb[fJ]) && void 0 !== ZJ ? ZJ : jJ.gb.None,
            "--duration": fJ ? (0, jJ.db)(fJ) + "s" : void 0
          },
          children: [fJ && (0, mJ.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, mJ.jsx)(xJ.d, {
              text: sJ
            }), SJ]
          }), (0, mJ.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, mJ.jsx)(xJ.d, {
              text: sJ
            }), SJ]
          })]
        }) : null
      })
    }
    var EJ = ZJ(35597),
      VJ = ZJ(13),
      KJ = ZJ(1703),
      yJ = ZJ(535),
      SJ = ZJ(2179),
      IJ = ZJ(2893),
      MJ = ZJ(2900);
    var bJ = ZJ(1861);
    var wJ = ZJ(1341);
    const WJ = (0, FJ.memo)((function() {
      const [JJ, cJ] = (0, FJ.useState)(0), ZJ = (0, AJ.f)("useFullInventory"), XJ = (0, AJ.f)("highlightedHotbarSlots"), {
        isTouchScreen: qJ,
        openInGameMenuName: jJ
      } = (0, VJ.j)(["isTouchScreen", "openInGameMenuName"]), DJ = null !== jJ && "inventory" !== jJ, sJ = (0, rJ.f)("fullInventory") && "inventory" === jJ, GJ = function() {
        const JJ = (0, FJ.useRef)(null);
        return (0, bJ.c)(((cJ, ZJ) => {
          var FJ;
          const UJ = ZJ >= cJ;
          if ((null === (FJ = JJ.current) || void 0 === FJ ? void 0 : FJ.width) !== cJ || JJ.current.portrait !== UJ) {
            const ZJ = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare"));
            JJ.current = {
              width: cJ,
              portrait: UJ,
              atEnds: ZJ >= 0
            }
          }
          return JJ.current.atEnds
        }))
      }(), xJ = qJ && !GJ;
      ! function(JJ, cJ, ZJ) {
        (0, FJ.useLayoutEffect)((() => {
          const FJ = document.documentElement.classList;
          return JJ && (FJ.add("TouchHotbar"), FJ.toggle("TouchHotbarKeysAbove", cJ), FJ.toggle("TouchHotbarHasBag", ZJ)), (0, IJ.j)(), YJ.i.Uf(MJ.d), () => {
            FJ.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, IJ.j)(), YJ.i.Uf(MJ.d)
          }
        }), [JJ, cJ, ZJ])
      }(qJ, xJ, ZJ);
      const [vJ, SJ] = (0, eJ.b)("changedHotbarUsingNumkeys", !0), wJ = (0, rJ.d)("hotbar", (JJ => JJ.selectedSlot)), WJ = null !== wJ && void 0 !== wJ ? wJ : JJ, kJ = (0, UJ.c)(), pJ = (0, FJ.useRef)(null), zJ = (0, hJ.m)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, hJ.i)("inventoryDraggedItemUpdated", (JJ => {
        pJ.current = JJ, kJ()
      })), (0, rJ.b)("hotbarScrolled", (JJ => {
        null === wJ && OJ(JJ)
      })), (0, rJ.b)("hotbarSlotRequested", (JJ => {
        NJ(JJ), SJ(!1)
      })), (0, rJ.b)("numberKeyPressed", (() => {
        SJ(!1)
      })), (0, rJ.b)("hotbarDropRequested", (JJ => {
        const cJ = KJ.gameBridge.latest("hotbar").items[WJ];
        if (cJ) {
          var ZJ;
          const FJ = JJ && null !== (ZJ = cJ.amount) && void 0 !== ZJ ? ZJ : 1;
          KJ.gameBridge.send("removeInventoryItem", {
            slot: WJ,
            amount: FJ,
            drop: !0
          })
        }
      }));
      const NJ = JJ => {
          KJ.gameBridge.send("selectHotbarSlot", JJ), cJ(JJ)
        },
        OJ = JJ => {
          NJ((WJ + JJ + yJ.p) % yJ.p)
        };
      let TJ, CJ = null,
        uJ = null,
        iJ = JJ => JJ => {},
        RJ = JJ => cJ => {
          NJ(JJ)
        },
        LJ = JJ => JJ => {},
        aJ = [];
      if (sJ) {
        var BJ;
        const JJ = pJ.current;
        if (null === JJ || void 0 === JJ || !JJ.setHovered) return (0, mJ.jsx)("div", {
          className: nJ()("HotBarContainer", {
            Touch: qJ,
            KeysAbove: xJ
          }),
          children: (0, mJ.jsx)("div", {
            className: "HotBar"
          })
        });
        CJ = JJ.draggedInfo, uJ = JJ.specialItemInfo, iJ = JJ.setHovered, RJ = JJ.pointerDown, LJ = JJ.pointerUp, TJ = JJ.variation, aJ = null !== (BJ = JJ.craftFlyAnims) && void 0 !== BJ ? BJ : []
      }
      return (0, mJ.jsxs)("div", {
        className: nJ()("HotBarContainer", {
          Touch: qJ,
          PopupOpen: qJ && DJ,
          KeysAbove: xJ
        }),
        children: [(0, mJ.jsxs)("div", {
          className: nJ()("HotBar", {
            HoverDisabled: zJ
          }),
          children: [qJ && (0, mJ.jsxs)(mJ.Fragment, {
            children: [(0, mJ.jsx)(HJ, {
              useFullInventory: ZJ,
              inventoryOpen: sJ
            }), (0, mJ.jsx)(gJ, {
              direction: "Previous",
              onPress: () => {
                OJ(-1)
              }
            })]
          }), !qJ && (0, mJ.jsxs)(mJ.Fragment, {
            children: [(0, mJ.jsx)(PJ, {}), (0, mJ.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, mJ.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((JJ, cJ) => (0, mJ.jsx)(fJ.e, {
              idx: cJ,
              draggedInfo: CJ,
              specialItemInfo: uJ,
              craftFlyHoldbackInfo: (0, EJ.i)(aJ, cJ),
              setHovered: iJ(cJ),
              pointerDown: RJ(cJ),
              pointerUp: LJ(cJ),
              variation: TJ,
              isSelected: cJ === WJ,
              hotbarHighlighted: !0 === (null === XJ || void 0 === XJ ? void 0 : XJ.includes(cJ)),
              hoverDisabled: zJ,
              showNumber: vJ && !qJ
            }, cJ)))
          }), qJ && (0, mJ.jsx)(gJ, {
            direction: "Next",
            onPress: () => {
              OJ(1)
            }
          }), !qJ && (0, mJ.jsxs)(mJ.Fragment, {
            children: [(0, mJ.jsx)("div", {
              className: "HotBarFiller"
            }), (0, mJ.jsx)("div", {
              className: nJ()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !ZJ
              }),
              onPointerDown: () => {
                YJ.i.Uf("toggleMenu", "inventory")
              },
              children: (0, mJ.jsx)(dJ, {})
            })]
          })]
        }), (0, mJ.jsx)(QJ, {
          slotIdx: WJ
        })]
      })
    }));

    function gJ(JJ) {
      let {
        direction: cJ,
        onPress: ZJ
      } = JJ;
      return (0, mJ.jsx)("div", {
        className: nJ()("HotBarArrow", cJ),
        ...wJ.e,
        children: (0, mJ.jsx)(XJ.d, {
          icon: "Previous" === cJ ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: ZJ
        })
      })
    }
    const HJ = (0, FJ.memo)((function(JJ) {
        let {
          useFullInventory: cJ,
          inventoryOpen: ZJ
        } = JJ;
        const UJ = (0, AJ.f)("maxAuraLevel"),
          eJ = (0, FJ.useRef)(null);
        return function(JJ, cJ, ZJ) {
          (0, FJ.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", cJ), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [cJ]), (0, FJ.useLayoutEffect)((() => {
            const cJ = JJ.current.closest(".BottomMiddleElements");
            return cJ.classList.toggle("TouchInventoryOpen", ZJ), () => {
              cJ.classList.remove("TouchInventoryOpen")
            }
          }), [JJ, ZJ])
        }(eJ, (0, qJ.c)(), ZJ), (0, mJ.jsxs)("div", {
          ref: eJ,
          className: nJ()("TouchInventoryKeys", {
            NoAuraBar: 0 === UJ,
            InventoryOpen: ZJ
          }),
          children: [(0, mJ.jsx)(PJ, {
            touchKey: !0
          }), (0, mJ.jsx)("div", {
            className: nJ()("TouchInventoryKey BagKey", {
              Hidden: !cJ
            }),
            ...wJ.e,
            children: (0, mJ.jsx)(dJ, {
              touchKey: !0
            })
          })]
        })
      })),
      PJ = (0, FJ.memo)((function(JJ) {
        let {
          touchKey: cJ = !1
        } = JJ;
        const ZJ = (0, qJ.c)();
        return (0, mJ.jsx)("div", {
          className: cJ ? nJ()("TouchInventoryKey ShopKey", {
            Hidden: !ZJ
          }) : nJ()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !ZJ
          }),
          ...cJ ? wJ.e : {},
          children: (0, mJ.jsx)(XJ.d, {
            icon: (0, jJ.Yb)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            onClick: () => {
              ZJ && VJ.d.set({
                openEverythingMenuName: GJ.m.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function kJ(JJ) {
      let {
        player: cJ
      } = JJ;
      return cJ.some((JJ => null !== JJ && jJ.Cc.includes(JJ.name)))
    }

    function pJ(JJ) {
      JJ.creative || DJ.j.getItem("LogInInventoryRedDotTutorialComplete") || (kJ(JJ) ? (YJ.i.Uf("RedDotOpenInventoryIcon", !0), YJ.i.Uf("TouchTutorialOpenInventoryIcon", !0)) : (YJ.i.Uf("RedDotOpenInventoryIcon", !1), YJ.i.Uf("TouchTutorialOpenInventoryIcon", !1)))
    }
    const dJ = (0, FJ.memo)((function(JJ) {
      let {
        touchKey: cJ = !1
      } = JJ;
      const {
        backpackPointerRequested: ZJ
      } = (0, VJ.j)(["backpackPointerRequested"]);
      (0, FJ.useEffect)((() => {
        pJ(KJ.gameBridge.latest("inventory"))
      }), []), (0, rJ.b)("inventory", pJ);
      const UJ = (0, SJ.l)();
      return (0, hJ.i)("toggleMenu", (JJ => {
        UJ.shown && (null !== JJ && void 0 !== JJ && JJ.startsWith("inventory") && kJ(KJ.gameBridge.latest("inventory")) ? (DJ.j.setItem("LogInInventoryRedDotTutorialComplete", !0), YJ.i.Uf("RedDotOpenInventoryIcon", !1), YJ.i.Uf("TouchTutorialOpenInventoryIcon", !1)) : "shop" === JJ && YJ.i.Uf("showShopTouchTutorial", !1))
      })), cJ ? (0, mJ.jsx)(XJ.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        onClick: () => {
          YJ.i.Uf("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: ZJ,
        touchIconPosition: "topleft"
      }) : (0, mJ.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          YJ.i.Uf("toggleMenu", "inventory")
        },
        children: (0, mJ.jsx)(XJ.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: JJ => {
            YJ.i.Uf("toggleMenu", "inventory"), JJ.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: ZJ,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35587: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => fJ,
      f: () => nJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1694),
      AJ = ZJ(1688),
      qJ = ZJ(1703),
      jJ = ZJ(1743),
      YJ = ZJ(35590),
      hJ = ZJ(8571),
      DJ = ZJ(1294),
      sJ = ZJ(990);
    const nJ = (JJ, cJ, ZJ) => {
      let FJ = cJ,
        UJ = !1;
      for (const eJ of ZJ)(null === eJ || void 0 === eJ ? void 0 : eJ.idx) === JJ && (UJ = !0, FJ > 0 && (FJ -= eJ.amount));
      return {
        displayedAmt: FJ,
        shown: !UJ || FJ > 0
      }
    };
    const GJ = JJ => {
        let {
          idx: cJ
        } = JJ;
        return (0, DJ.q)() ? null : (0, sJ.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: cJ < 9 ? cJ + 1 : 0
        })
      },
      fJ = (0, FJ.memo)((function(JJ) {
        var cJ, ZJ, FJ;
        let {
          idx: UJ,
          setHovered: DJ,
          pointerDown: fJ,
          pointerUp: xJ,
          draggedInfo: rJ,
          specialItemInfo: vJ,
          craftFlyHoldbackInfo: mJ,
          defaultIconB64: QJ = null,
          variation: EJ,
          isSelected: VJ = !1,
          hotbarHighlighted: KJ = !1,
          hoverDisabled: yJ = !1,
          showNumber: SJ = !1,
          showNewDot: IJ = !1
        } = JJ;
        const MJ = (0, jJ.d)("inventory", (JJ => UJ === YJ.g ? null : (0, hJ.l)(JJ, UJ)));
        let bJ, wJ, WJ, gJ;
        if (UJ === YJ.g) vJ && (bJ = vJ.name, WJ = vJ.amount, gJ = vJ.attributes);
        else if (MJ) {
          var HJ;
          bJ = MJ.name, wJ = MJ.icon, WJ = null !== (HJ = MJ.amount) && void 0 !== HJ ? HJ : 0, gJ = MJ.attributes
        }
        const PJ = null === (cJ = gJ) || void 0 === cJ || null === (ZJ = cJ.customAttributes) || void 0 === ZJ ? void 0 : ZJ.enchantmentTier,
          kJ = (0, XJ.g)(gJ),
          {
            displayedAmt: pJ,
            shown: dJ
          } = nJ(UJ, WJ, [rJ, vJ, mJ]),
          zJ = bJ && dJ,
          NJ = void 0 !== EJ && function(JJ, cJ) {
            const {
              enchantable: ZJ,
              salvageable: FJ
            } = qJ.gameBridge.latest("stationItems");
            return "Enchanting Table" === JJ ? !0 === ZJ[cJ] : "Salvaging Table" === JJ && !0 === FJ[cJ]
          }(EJ, bJ);
        return (0, sJ.jsxs)("div", {
          className: eJ()("InvenItem", {
            Highlighted: zJ && NJ,
            Selected: VJ,
            HotbarHighlighted: KJ,
            HoverDisabled: yJ
          }),
          onPointerEnter: () => {
            null === DJ || void 0 === DJ || DJ(!0)
          },
          onPointerLeave: () => {
            null === DJ || void 0 === DJ || DJ(!1)
          },
          onPointerDown: fJ,
          onPointerUp: xJ,
          "data-inven-idx": UJ,
          children: [zJ && (0, sJ.jsx)(AJ.d, {
            itemName: null !== (FJ = wJ) && void 0 !== FJ ? FJ : bJ,
            amount: pJ,
            enchantmentTier: PJ,
            bar: kJ
          }), zJ && IJ && (0, sJ.jsx)("div", {
            className: "InvenItemNewDot"
          }), SJ && (0, sJ.jsx)(GJ, {
            idx: UJ
          }), QJ && !zJ && (0, sJ.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${QJ})`
            }
          })]
        })
      }))
  },
  8563: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(8565);

    function eJ(JJ, cJ, ZJ) {
      const eJ = Object.entries(cJ).sort(((JJ, cJ) => cJ[1] - JJ[1])),
        XJ = (0, FJ.lb)(JJ);
      XJ.push(JJ ? "\n\n" : "\n");
      for (const [UJ, nJ] of eJ) {
        var AJ, qJ, jJ;
        const JJ = null !== (AJ = null === ZJ || void 0 === ZJ || null === (qJ = ZJ[UJ]) || void 0 === qJ ? void 0 : qJ.icon) && void 0 !== AJ ? AJ : `${UJ} Enchantment`;
        XJ.push({
          icon: JJ,
          style: {
            fontSize: "1.5rem"
          }
        }), XJ.push({
          str: `${UJ} ${null!==(jJ=(0,FJ.O)(nJ))&&void 0!==jJ?jJ:nJ}\n`
        })
      }
      XJ.push({
        str: "\n"
      });
      for (const [FJ, nJ] of eJ) {
        var YJ, hJ, DJ, sJ;
        const JJ = null !== (YJ = null === ZJ || void 0 === ZJ || null === (hJ = ZJ[FJ]) || void 0 === hJ ? void 0 : hJ.icon) && void 0 !== YJ ? YJ : `${FJ} Enchantment`,
          cJ = null !== (DJ = null === ZJ || void 0 === ZJ || null === (sJ = ZJ[FJ]) || void 0 === sJ ? void 0 : sJ.description) && void 0 !== DJ ? DJ : (0, UJ.j)(FJ);
        XJ.push({
          icon: JJ,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), XJ.push({
          str: cJ,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), XJ.push({
          str: "\n"
        })
      }
      return XJ
    }
  },
  35590: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ,
      g: () => UJ
    });
    const FJ = -1,
      UJ = -2
  },
  8571: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => jJ,
      f: () => rJ,
      j: () => fJ,
      l: () => qJ,
      m: () => xJ,
      q: () => YJ,
      t: () => DJ,
      x: () => GJ,
      z: () => hJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(535),
      eJ = ZJ(235),
      XJ = ZJ(3715),
      AJ = ZJ(8563);

    function qJ(JJ, cJ) {
      var ZJ;
      let {
        player: FJ,
        chestOrCreative: UJ
      } = JJ;
      var eJ;
      return cJ < FJ.length ? null !== (eJ = FJ[cJ]) && void 0 !== eJ ? eJ : null : null !== (ZJ = UJ[cJ - FJ.length]) && void 0 !== ZJ ? ZJ : null
    }

    function jJ(JJ) {
      var cJ;
      return null !== (cJ = JJ.amount) && void 0 !== cJ ? cJ : 0
    }

    function YJ(JJ) {
      return 0 === JJ.button || void 0 === JJ.button
    }

    function hJ(JJ) {
      return !!JJ.shiftKey
    }

    function DJ(JJ) {
      return "touches" in JJ || "touch" === JJ.pointerType || "pen" === JJ.pointerType
    }
    const sJ = new Set,
      nJ = 50;

    function GJ(JJ, cJ) {
      var ZJ;
      const FJ = null === (ZJ = JJ[cJ]) || void 0 === ZJ ? void 0 : ZJ.displayName;
      return (0, UJ.P)(FJ) ? "string" !== typeof cJ ? "" : (!sJ.has(cJ) && sJ.size < nJ && (sJ.add(cJ), console.warn(`No item called "${cJ}", so its hover shows the name as given`)), cJ) : FJ
    }

    function fJ(JJ, cJ, ZJ) {
      var qJ, jJ, YJ, hJ, DJ, sJ, nJ, fJ, xJ, rJ, vJ, mJ, QJ, EJ;
      const VJ = JJ.attributes,
        KJ = null !== (qJ = null === (jJ = cJ[JJ.name]) || void 0 === jJ ? void 0 : jJ.rootName) && void 0 !== qJ ? qJ : JJ.name,
        yJ = null !== (YJ = null !== (hJ = VJ.customDisplayName) && void 0 !== hJ ? hJ : null === (DJ = cJ[JJ.name]) || void 0 === DJ ? void 0 : DJ.displayName) && void 0 !== YJ ? YJ : GJ(cJ, KJ);
      let SJ = yJ;
      const IJ = null === (sJ = VJ.customAttributes) || void 0 === sJ ? void 0 : sJ.enchantmentTier;
      IJ && (SJ = (0, eJ.lb)(yJ, {
        colour: eJ.gb[IJ]
      }));
      const MJ = null !== (nJ = null !== (fJ = null !== (xJ = function(JJ, cJ) {
        var ZJ;
        if (void 0 === JJ || null !== (ZJ = cJ.customAttributes) && void 0 !== ZJ && ZJ.author) return JJ;
        const UJ = (0, FJ.Sb)(JJ);
        return UJ.every((JJ => "string" === typeof JJ)) ? JJ : UJ.map((JJ => "string" === typeof JJ ? JJ : {
          icon: JJ.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(VJ.customDescription, VJ)) && void 0 !== xJ ? xJ : null === (rJ = cJ[JJ.name]) || void 0 === rJ ? void 0 : rJ.description) && void 0 !== fJ ? fJ : null === (vJ = cJ[KJ]) || void 0 === vJ ? void 0 : vJ.description) && void 0 !== nJ ? nJ : "";
      let bJ = MJ;
      if (null !== (mJ = VJ.customAttributes) && void 0 !== mJ && mJ.enchantments) bJ = (0, AJ.d)(MJ, VJ.customAttributes.enchantments, VJ.customAttributes.enchantmentData);
      else if (ZJ[KJ]) bJ = (0, eJ.lb)(MJ), bJ.push({
        str: "\n"
      }), bJ.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (QJ = VJ.customAttributes) && void 0 !== QJ && QJ.mobSettings) {
        var wJ, WJ;
        const JJ = VJ.customAttributes.mobSettings;
        var gJ, HJ;
        if (bJ = [], (0, UJ.P)(VJ.customAttributes.health) || (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: VJ.customAttributes.health.toString()
          }), (0, UJ.P)(JJ.maxHealth) || (bJ.push({
            str: "/"
          }), bJ.push({
            str: JJ.maxHealth.toString()
          }))), !(0, UJ.P)(JJ.attackDamage) && JJ.attackDamage > 0 && (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.attackDamage.toString()
          })), !(0, UJ.P)(JJ.secondaryAttackDamage) && JJ.secondaryAttackDamage > 0 && (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.secondaryAttackDamage.toString()
          })), (0, UJ.P)(JJ.baseRunningSpeed) || (bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: " "
          }), bJ.push({
            str: JJ.baseRunningSpeed.toFixed(2)
          })), "Saddled" === JJ.metaInfo) bJ.push({
          str: "\n"
        }), bJ.push({
          str: {
            translationKey: "general:has"
          }
        }), bJ.push({
          str: " "
        }), bJ.push({
          icon: null !== (gJ = null === (HJ = JJ.tameInfo) || void 0 === HJ ? void 0 : HJ.saddleItemName) && void 0 !== gJ ? gJ : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (bJ.push({
            str: "\n"
          }), bJ.push({
            str: "\n"
          }), JJ.petInfo && null !== (wJ = JJ.tameInfo) && void 0 !== wJ && wJ.supportsFriendship) {
          const cJ = XJ.b.getIconsFromFriendshipPoints(JJ.petInfo.friendshipPoints);
          for (const JJ of cJ) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: "\n"
          });
          const ZJ = XJ.b.getMobHungerLevel(JJ.petInfo.lastFedAt);
          for (const JJ of XJ.b.hungerLevelIcons[ZJ]) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: " "
          }), bJ.push({
            str: XJ.b.hungerLevelTranslations[ZJ],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (JJ.tameInfo && null !== (WJ = JJ.tameInfo) && void 0 !== WJ && WJ.supportsFriendship) {
          var PJ, kJ;
          let cJ = null !== (PJ = JJ.tameInfo.likedFoods) && void 0 !== PJ ? PJ : [];
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Superliked]
            }
          }), bJ.push({
            str: " "
          }), null !== (kJ = JJ.petInfo) && void 0 !== kJ && kJ.superlikedFoodKnown ? (bJ.push({
            icon: JJ.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), cJ = cJ.filter((cJ => cJ !== JJ.petInfo.superlikedFood))) : bJ.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Liked]
            }
          }), bJ.push({
            str: " "
          });
          for (const JJ of cJ) bJ.push({
            icon: JJ,
            style: {
              fontSize: "1.5em"
            }
          });
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Neutral]
            }
          }), bJ.push({
            str: " "
          });
          for (const ZJ of null !== (pJ = JJ.tameInfo.neutralFoods) && void 0 !== pJ ? pJ : []) {
            var pJ;
            bJ.push({
              icon: ZJ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          bJ.push({
            str: "\n"
          }), bJ.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: XJ.b.feedTextColours[XJ.b.MobFoodType.Disliked]
            }
          }), bJ.push({
            str: " "
          });
          for (const ZJ of null !== (dJ = JJ.tameInfo.dislikedFoods) && void 0 !== dJ ? dJ : []) {
            var dJ;
            bJ.push({
              icon: ZJ,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        bJ.length > 0 ? (bJ.shift(), bJ.unshift(...(0, eJ.lb)(MJ))) : bJ = (0, eJ.lb)(MJ)
      }
      return {
        name: SJ,
        desc: bJ,
        fontStyle: null !== (EJ = VJ.customAttributes) && void 0 !== EJ && EJ.author ? "italic" : "normal"
      }
    }

    function xJ(JJ, cJ, ZJ, FJ) {
      const UJ = qJ(JJ, ZJ),
        eJ = qJ(JJ, FJ);
      if (!UJ) return !1;
      const XJ = cJ[UJ.name].armourReduction,
        AJ = cJ[eJ.name].armourReduction;
      if (AJ === XJ) {
        var jJ, YJ, hJ, DJ;
        const JJ = null !== (jJ = null === (YJ = UJ.attributes.customAttributes) || void 0 === YJ ? void 0 : YJ.enchantmentTier) && void 0 !== jJ ? jJ : "Tier 0",
          cJ = null !== (hJ = null === (DJ = eJ.attributes.customAttributes) || void 0 === DJ ? void 0 : DJ.enchantmentTier) && void 0 !== hJ ? hJ : "Tier 0";
        return parseInt(JJ.replace("Tier ", "")) >= parseInt(cJ.replace("Tier ", ""))
      }
      return XJ > AJ
    }

    function rJ(JJ) {
      let cJ;
      if ("number" === typeof JJ) {
        const ZJ = document.querySelector(`[data-inven-idx="${JJ}"]`);
        if (!ZJ) return null;
        cJ = ZJ.getBoundingClientRect()
      } else cJ = JJ.getBoundingClientRect();
      return {
        x: cJ.left + cJ.width / 2,
        y: cJ.top + cJ.height / 2
      }
    }
  },
  8487: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => sJ,
      g: () => nJ,
      j: () => GJ
    });
    var FJ = ZJ(1329),
      UJ = ZJ(47),
      eJ = ZJ(1201),
      XJ = ZJ(3950),
      AJ = ZJ(2102),
      qJ = ZJ(1086),
      jJ = ZJ(80),
      YJ = ZJ(1743),
      hJ = ZJ(1232),
      DJ = ZJ(990);

    function sJ(JJ) {
      let {
        show: cJ,
        onClose: ZJ
      } = JJ;
      const {
        requestedGameNameWithVariation: FJ,
        lobbyName: UJ,
        shownLobbyName: eJ
      } = (0, YJ.f)("connectedGame"), qJ = (0, AJ.c)(FJ, UJ, !1);
      return jJ.featureFlags.canUseInviteLinks && (0, DJ.jsx)(XJ.c, {
        show: cJ,
        close: ZJ,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, DJ.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, DJ.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, DJ.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, DJ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === qJ ? (0, DJ.jsx)(hJ.c, {}) : qJ, (0, DJ.jsx)("br", {}), "Lobby Name: ", eJ, (0, DJ.jsx)("br", {}), (0, DJ.jsx)("br", {}), (0, DJ.jsx)("br", {}), (0, DJ.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, DJ.jsx)(nJ, {})]
        })
      })
    }

    function nJ() {
      var JJ;
      const {
        t: cJ
      } = (0, qJ.F)(), ZJ = null !== (JJ = GJ(jJ.featureFlags.canUseInviteLinks)) && void 0 !== JJ ? JJ : "Loading Link...", [eJ, XJ] = (0, UJ.useState)(0), [AJ, YJ] = (0, UJ.useReducer)((JJ => JJ + 1), 0);
      return (0, UJ.useEffect)((() => {
        const JJ = setTimeout((() => {
          YJ()
        }), 1100);
        return () => {
          clearTimeout(JJ)
        }
      }), [eJ]), jJ.featureFlags.canUseInviteLinks && (0, DJ.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, DJ.jsx)("div", {
          className: "InviteLinkInner",
          children: ZJ
        }), (0, DJ.jsx)(FJ.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(ZJ).catch((JJ => {
              console.error("Failed to copy invite link:", JJ)
            })), XJ(Date.now())
          },
          disabled: Date.now() - eJ < 1e3,
          children: Date.now() - eJ < 1e3 ? cJ("general:copied") : cJ("general:copy")
        })]
      })
    }

    function GJ(JJ) {
      const [cJ, ZJ] = (0, UJ.useState)(null);
      return (0, UJ.useEffect)((() => {
        if (!JJ) return;
        let cJ = !0;
        return (0, eJ.y)().then((JJ => {
          cJ && ZJ(JJ)
        })).catch((JJ => {
          console.error("Failed to get invite link:", JJ)
        })), () => {
          cJ = !1
        }
      }), [JJ]), cJ
    }
  },
  36023: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => KJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(2175),
      eJ = ZJ(1675),
      XJ = ZJ(521),
      AJ = ZJ(17),
      qJ = ZJ(926),
      jJ = ZJ.n(qJ),
      YJ = ZJ(35617),
      hJ = ZJ(2248),
      DJ = ZJ(35626),
      sJ = ZJ(2270),
      nJ = ZJ(2251),
      GJ = ZJ(3086),
      fJ = ZJ(13),
      xJ = ZJ(1811),
      rJ = ZJ(2112),
      vJ = ZJ(1122),
      mJ = ZJ(4325),
      QJ = ZJ(1743),
      EJ = ZJ(80),
      VJ = ZJ(990);
    const KJ = (0, FJ.memo)((function() {
      const JJ = (0, UJ.f)("lobbyLeaderboardInfo"),
        cJ = (0, QJ.f)("players"),
        ZJ = (0, QJ.f)("lobbyLeaderboardRows"),
        AJ = (0, QJ.f)("hiddenPlayerNames"),
        qJ = (0, FJ.useRef)(null),
        [jJ, YJ] = (0, FJ.useReducer)((JJ => JJ + 1), 0);
      return (0, FJ.useEffect)((() => (0, xJ.d)((() => {
        YJ()
      }))), []), (0, VJ.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, VJ.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!JJ) return (0, VJ.jsx)(VJ.Fragment, {});
            const FJ = JSON.parse(JSON.stringify(JJ)),
              UJ = [...cJ.ids],
              jJ = {},
              YJ = {};
            for (const JJ of UJ) {
              var hJ, sJ;
              jJ[JJ] = null === (hJ = ZJ[JJ]) || void 0 === hJ ? void 0 : hJ.colour;
              const cJ = null === (sJ = ZJ[JJ]) || void 0 === sJ ? void 0 : sJ.values;
              cJ && (YJ[JJ] = {
                ...cJ
              })
            }
            const nJ = Object.keys(FJ);
            nJ.sort(((JJ, cJ) => FJ[JJ].sortPriority - FJ[cJ].sortPriority)), UJ.sort(((JJ, cJ) => {
              if (!YJ[JJ] || !YJ[cJ]) return 0;
              for (const ZJ of nJ) {
                const UJ = YJ[JJ][ZJ],
                  eJ = YJ[cJ][ZJ];
                let XJ = 0;
                if ("string" == typeof UJ && "string" == typeof eJ ? XJ = UJ.localeCompare(eJ) : "number" == typeof UJ && "number" == typeof eJ ? XJ = UJ - eJ : "number" == typeof UJ && "string" == typeof eJ ? XJ = 1 : "string" == typeof UJ && "number" == typeof eJ && (XJ = -1), XJ) return XJ * ("ascending" === FJ[ZJ].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const JJ of UJ) {
              var GJ, fJ, QJ;
              const {
                name: FJ,
                ranks: UJ,
                cosmetics: eJ
              } = cJ.byId[JJ], AJ = [], qJ = null !== (GJ = null === (fJ = ZJ[JJ]) || void 0 === fJ || null === (QJ = fJ.tags) || void 0 === QJ ? void 0 : QJ.flatMap((JJ => 0 === JJ.length ? JJ : [...JJ, String.fromCharCode(8198)]))) && void 0 !== GJ ? GJ : [];
              AJ.push(...qJ), AJ.push(...(0, vJ.v)(UJ, FJ, (null === eJ || void 0 === eJ ? void 0 : eJ.nameColour) === XJ.d || null === eJ || void 0 === eJ ? void 0 : eJ.nameColour)), YJ[JJ] ??= {}, YJ[JJ].name = AJ
            }

            function EJ(JJ, ZJ) {
              if (YJ[JJ] && void 0 !== YJ[JJ][ZJ]) {
                if ("name" === ZJ) {
                  const {
                    name: FJ,
                    cosmetics: UJ
                  } = cJ.byId[JJ];
                  return (0, VJ.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [UJ && (0, VJ.jsx)(rJ.e, {
                      cosmetics: UJ
                    }), " ", (0, VJ.jsx)(eJ.d, {
                      text: YJ[JJ][ZJ],
                      friendBadgeFor: (0, xJ.e)(FJ, AJ) ? FJ : void 0
                    })]
                  })
                }
                return (0, VJ.jsx)(eJ.d, {
                  text: YJ[JJ][ZJ]
                })
              }
              return ""
            }
            const KJ = Object.keys(FJ).filter((JJ => !0 !== FJ[JJ].hidden)).map((JJ => {
              var cJ;
              return {
                key: JJ,
                header: (0, VJ.jsx)(eJ.d, {
                  text: null !== (cJ = FJ[JJ].displayName) && void 0 !== cJ ? cJ : ""
                })
              }
            }));
            return (0, VJ.jsx)("div", {
              ref: qJ,
              className: "LobbyLeaderboard",
              children: (0, VJ.jsx)(mJ.e, {
                columns: KJ,
                rows: UJ,
                getRowKey: JJ => JJ,
                renderRow: JJ => {
                  const ZJ = JJ !== cJ.localId;
                  return (0, VJ.jsx)(yJ, {
                    playerId: JJ,
                    playerName: cJ.byId[JJ].name,
                    isOtherPlayer: ZJ,
                    opensProfileCard: (0, DJ.c)(ZJ, cJ.byId[JJ].name, AJ),
                    lobbyLeaderboardInfo: FJ,
                    getPlayerValue: EJ,
                    playerColors: jJ
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function yJ(JJ) {
      let {
        playerId: cJ,
        playerName: ZJ,
        isOtherPlayer: UJ,
        opensProfileCard: eJ,
        lobbyLeaderboardInfo: XJ,
        getPlayerValue: qJ,
        playerColors: xJ
      } = JJ;
      const rJ = (0, FJ.useRef)(null);
      (0, FJ.useEffect)((() => () => {
        hJ.c.closeIfOwner(rJ)
      }), []);
      const vJ = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            AJ.i.Uf("OpenReportMenu", {
              playerEId: cJ,
              playerName: ZJ,
              JY: null,
              serverChatMsgId: null
            })
          }
        },
        mJ = () => ({
          ...(0, DJ.b)(cJ, ZJ),
          showLocation: !1,
          status: null,
          extraActions: [vJ],
          friendRequestSource: "leaderboard"
        });
      return (0, VJ.jsxs)("tr", {
        ref: rJ,
        "data-pad-focusable": eJ || void 0,
        [hJ.f]: eJ || void 0,
        onClick: eJ ? () => {
          var JJ;
          hJ.c.toggle(rJ, {
            ...mJ(),
            anchor: null !== (JJ = rJ.current.querySelector(".PlayerPfpAndName")) && void 0 !== JJ ? JJ : rJ.current
          })
        } : void 0,
        onContextMenu: eJ ? JJ => {
          (0, sJ.g)(rJ, JJ, mJ(), fJ.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: eJ ? JJ => {
          (0, nJ.d)(JJ, (() => (0, DJ.b)(cJ, ZJ).playerSocialPreview))
        } : void 0,
        children: [Object.keys(XJ).map((JJ => !0 === XJ[JJ].hidden ? null : (0, VJ.jsxs)("td", {
          className: jJ()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !UJ
          }),
          children: [(0, VJ.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: qJ(cJ, JJ)
          }), (0, VJ.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: xJ[cJ]
            }
          })]
        }, JJ))), UJ && !eJ && (0, VJ.jsx)(YJ.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: rJ,
          options: [{
            icon: vJ.icon,
            text: vJ.text,
            onPointerDown: vJ.onClick
          }, ...null === ZJ || EJ.featureFlags.useSocialFeatures ? [] : (0, GJ.b)(null, ZJ)]
        })]
      })
    }
  },
  4162: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      h: () => rJ,
      e: () => xJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1326),
      eJ = ZJ(1675),
      XJ = ZJ(4164),
      AJ = ZJ(990);
    const qJ = (0, FJ.memo)((function(JJ) {
      let {
        initialParameters: cJ
      } = JJ;
      const ZJ = (0, FJ.useRef)(null),
        UJ = (0, FJ.useRef)(null),
        qJ = (0, FJ.useRef)(0),
        jJ = (0, FJ.useRef)(null),
        YJ = cJ.description,
        hJ = cJ.MU,
        {
          scale: DJ,
          rotation: sJ
        } = null !== cJ && void 0 !== cJ ? cJ : {},
        nJ = (0, XJ.g)();
      return (0, FJ.useEffect)((() => {
        const JJ = nJ.onFrame((() => {
          const JJ = nJ.getState();
          if (!JJ.isActive || !ZJ.current || !UJ.current) return;
          const cJ = JJ.state;
          if (ZJ.current.value = cJ.progress, cJ.clickCount > qJ.current) {
            qJ.current = cJ.clickCount;
            const JJ = UJ.current;
            JJ.classList.add("pulse"), jJ.current = setTimeout((() => {
              JJ.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(jJ.current), JJ()
        }
      }), [nJ]), (0, AJ.jsx)(AJ.Fragment, {
        children: (0, AJ.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== DJ && {
              "--scale": DJ
            },
            ...null !== sJ && {
              "--rotation": `${sJ}deg`
            }
          },
          children: [(0, AJ.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: ZJ
          }), (0, AJ.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: UJ,
            children: (0, AJ.jsx)(eJ.d, {
              text: [{
                icon: hJ
              }]
            })
          }), (0, AJ.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, AJ.jsx)(eJ.d, {
              text: YJ
            })
          })]
        })
      })
    }));
    var jJ = ZJ(926),
      YJ = ZJ.n(jJ);
    const hJ = 2 * Math.PI * 90,
      DJ = (0, FJ.memo)((function(JJ) {
        let {
          initialParameters: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(null),
          UJ = (0, FJ.useRef)(null),
          qJ = (0, FJ.useRef)(null),
          jJ = cJ.label,
          DJ = cJ.icon,
          sJ = cJ.WU,
          {
            scale: nJ,
            rotation: GJ,
            gU: fJ
          } = null !== cJ && void 0 !== cJ ? cJ : {},
          xJ = (0, XJ.g)();
        return (0, FJ.useEffect)((() => {
          const JJ = xJ.onFrame((() => {
            var JJ, cJ;
            const FJ = xJ.getState();
            if (!FJ.isActive || !UJ.current) return;
            const eJ = FJ.state,
              XJ = null !== (JJ = eJ.timeRemaining) && void 0 !== JJ ? JJ : 0,
              AJ = null !== (cJ = eJ.wU) && void 0 !== cJ ? cJ : 1,
              jJ = hJ * (1 - XJ / AJ);
            UJ.current.style.strokeDashoffset = `${jJ}`, ZJ.current && (ZJ.current.style.opacity = XJ > 0 ? "1" : "0"), qJ.current && sJ && (qJ.current.textContent = `${(XJ/1e3).toFixed(1)}s`)
          }));
          return () => {
            JJ()
          }
        }), [xJ, sJ]), (0, AJ.jsxs)("div", {
          className: "QTETimedClick",
          ref: ZJ,
          style: {
            ...null !== nJ && {
              "--scale": nJ
            },
            ...null !== GJ && {
              "--rotation": `${GJ}deg`
            }
          },
          children: [(0, AJ.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, AJ.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, AJ.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, AJ.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: hJ,
                ref: UJ
              })]
            }), (0, AJ.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, AJ.jsx)(eJ.d, {
                text: [{
                  icon: DJ
                }],
                className: YJ()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: fJ
                })
              })
            })]
          }), (0, AJ.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, AJ.jsx)(eJ.d, {
              text: jJ,
              className: "QTETimedClickLabelText"
            }), sJ && (0, AJ.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: qJ
            })]
          })]
        })
      })),
      sJ = (0, FJ.memo)((function(JJ) {
        let {
          initialParameters: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(null),
          UJ = (0, FJ.useRef)(null),
          qJ = (0, FJ.useRef)(null),
          jJ = (0, FJ.useRef)(!1),
          YJ = cJ.description,
          hJ = null === cJ || void 0 === cJ ? void 0 : cJ.icon,
          DJ = (0, XJ.g)();
        return (0, FJ.useEffect)((() => {
          const JJ = DJ.onFrame((() => {
            const JJ = DJ.getState();
            if (!JJ.isActive) return;
            const cJ = JJ.state;
            if (ZJ.current) {
              const JJ = 100 * (cJ.catchZonePosition - cJ.PU / 2);
              ZJ.current.style.left = `${JJ}%`, ZJ.current.style.width = 100 * cJ.PU + "%", cJ.isCatching !== jJ.current && (jJ.current = cJ.isCatching, cJ.isCatching ? ZJ.current.classList.add("catching") : ZJ.current.classList.remove("catching"))
            }
            UJ.current && (UJ.current.style.left = 100 * cJ.moverPosition + "%"), qJ.current && (qJ.current.value = cJ.progress)
          }));
          return () => {
            JJ()
          }
        }), [DJ]), (0, AJ.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, AJ.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, AJ.jsx)(eJ.d, {
              text: YJ
            })
          }), (0, AJ.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: qJ
          }), (0, AJ.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, AJ.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: ZJ
            }), (0, AJ.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: UJ,
              children: (0, AJ.jsx)("span", {
                children: hJ && (0, AJ.jsx)(eJ.d, {
                  text: [{
                    icon: hJ,
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
    var nJ = ZJ(535);
    const GJ = (0, FJ.memo)((function(JJ) {
        let {
          initialParameters: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(null),
          UJ = cJ.label,
          qJ = cJ.TU,
          {
            icon: jJ,
            scale: YJ,
            rotation: hJ
          } = null !== cJ && void 0 !== cJ ? cJ : {},
          DJ = 100 * (.5 - qJ / 2),
          sJ = 100 * qJ,
          GJ = (0, XJ.g)();
        return (0, FJ.useEffect)((() => {
          const JJ = GJ.onFrame((() => {
            const JJ = GJ.getState();
            if (!JJ.isActive || !ZJ.current) return;
            const cJ = JJ.state;
            ZJ.current.style.left = 100 * cJ.markerPosition + "%"
          }));
          return () => {
            JJ()
          }
        }), [GJ]), (0, AJ.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, nJ.P)(YJ) && {
              "--scale": YJ
            },
            ...!(0, nJ.P)(hJ) && {
              "--rotation": `${hJ}deg`
            }
          },
          children: [jJ && (0, AJ.jsx)(eJ.d, {
            text: [{
              icon: jJ
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, AJ.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, AJ.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${DJ}%`,
                width: `${sJ}%`
              }
            }), (0, AJ.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: ZJ
            })]
          }), (0, AJ.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, AJ.jsx)(eJ.d, {
              text: UJ
            })
          })]
        })
      })),
      fJ = (0, FJ.memo)((function(JJ) {
        let {
          initialParameters: cJ
        } = JJ;
        const ZJ = (0, FJ.useRef)(null),
          [UJ, qJ] = (0, FJ.useState)((() => new Array(cJ.uU).fill("pending"))),
          [jJ, YJ] = (0, FJ.useState)((() => {
            const JJ = cJ.LU;
            return (0, nJ.P)(JJ) || JJ <= 0 ? [] : new Array(JJ).fill("pending")
          })),
          hJ = cJ.label,
          {
            icon: DJ
          } = cJ,
          sJ = (0, FJ.useRef)(0),
          GJ = (0, FJ.useRef)(0),
          fJ = (0, FJ.useRef)([]),
          xJ = (0, XJ.g)();
        return (0, FJ.useEffect)((() => {
          const JJ = xJ.onFrame((() => {
            const JJ = xJ.getState();
            if (!JJ.isActive || !ZJ.current) return;
            const cJ = JJ.state,
              FJ = 30 + 60 * cJ.outerCircleProgress;
            if (ZJ.current.setAttribute("r", String(FJ)), !0 === cJ.lastClickResult && cJ.successes > sJ.current) {
              ZJ.current.classList.remove("QTERhythmClickOuterCircle--miss"), ZJ.current.classList.add("QTERhythmClickOuterCircle--hit");
              const JJ = setTimeout((() => {
                var JJ;
                null === (JJ = ZJ.current) || void 0 === JJ || JJ.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              fJ.current.push(JJ)
            } else if (!1 === cJ.lastClickResult && cJ.misses > GJ.current) {
              ZJ.current.classList.remove("QTERhythmClickOuterCircle--hit"), ZJ.current.classList.add("QTERhythmClickOuterCircle--miss");
              const JJ = setTimeout((() => {
                var JJ;
                null === (JJ = ZJ.current) || void 0 === JJ || JJ.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              fJ.current.push(JJ)
            }
            cJ.successes === sJ.current && cJ.misses === GJ.current || (sJ.current = cJ.successes, GJ.current = cJ.misses, qJ((JJ => {
              const ZJ = [...JJ];
              for (let FJ = 0; FJ < cJ.uU; FJ++) ZJ[FJ] = FJ < cJ.successes ? "success" : "pending";
              return ZJ
            })), YJ((JJ => {
              if (0 === JJ.length) return JJ;
              const ZJ = [...JJ];
              for (let FJ = 0; FJ < ZJ.length; FJ++) ZJ[FJ] = FJ < cJ.misses ? "miss" : "pending";
              return ZJ
            })))
          }));
          return () => {
            JJ();
            for (const JJ of fJ.current) clearTimeout(JJ);
            fJ.current = []
          }
        }), [xJ]), (0, AJ.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, AJ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: UJ.map(((JJ, cJ) => (0, AJ.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === JJ ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, cJ)))
          }), (0, AJ.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, AJ.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, AJ.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, AJ.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: ZJ
              })]
            }), DJ && (0, AJ.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, AJ.jsx)(eJ.d, {
                text: [{
                  icon: DJ
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), jJ.length > 0 && (0, AJ.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: jJ.map(((JJ, cJ) => (0, AJ.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === JJ ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, cJ)))
          }), (0, AJ.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, AJ.jsx)(eJ.d, {
              text: hJ
            })
          })]
        })
      }));

    function xJ(JJ) {
      let {
        qte: cJ
      } = JJ;
      switch (cJ.type) {
        case "progressBar":
          return (0, AJ.jsx)(qJ, {
            initialParameters: cJ.parameters
          });
        case "timedClick":
          return (0, AJ.jsx)(DJ, {
            initialParameters: cJ.parameters
          });
        case "gravityBar":
          return (0, AJ.jsx)(sJ, {
            initialParameters: cJ.parameters
          });
        case "precisionBar":
          return (0, AJ.jsx)(GJ, {
            initialParameters: cJ.parameters
          });
        case "rhythmClick":
          return (0, AJ.jsx)(fJ, {
            initialParameters: cJ.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const rJ = (0, FJ.memo)((function() {
      const [JJ, cJ] = (0, FJ.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, UJ.i)("qteStateUpdated", (JJ => {
        cJ(JJ)
      })), JJ.isActive && JJ.type ? (0, AJ.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, AJ.jsx)(xJ, {
          qte: JJ
        })
      }) : null
    }))
  },
  4164: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => AJ,
      g: () => qJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1192),
      eJ = ZJ(4171);
    const XJ = {
        getState: () => eJ.c.getCurrentState(),
        onFrame: UJ.n
      },
      AJ = (0, FJ.createContext)(XJ);

    function qJ() {
      return (0, FJ.useContext)(AJ)
    }
  },
  8550: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(1743),
      AJ = ZJ(990);

    function qJ(JJ) {
      const cJ = Math.floor(JJ / 3600),
        ZJ = Math.floor(JJ % 3600 / 60),
        FJ = Math.floor(JJ % 60),
        UJ = `${ZJ.toString().padStart(2,"0")}:${FJ.toString().padStart(2,"0")}`;
      return cJ > 0 ? `${cJ}:${UJ}` : UJ
    }
    const jJ = (0, FJ.memo)((function(JJ) {
      let {
        className: cJ
      } = JJ;
      const {
        recording: ZJ,
        seconds: FJ
      } = (0, XJ.f)("replayRecorder");
      return ZJ ? (0, AJ.jsxs)("div", {
        className: eJ()("RecordingIndicator", cJ),
        children: [(0, AJ.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, AJ.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, AJ.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: qJ(FJ)
        })]
      }) : null
    }))
  },
  35474: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => YJ,
      g: () => DJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1247),
      eJ = ZJ(1086),
      XJ = ZJ(1232),
      AJ = ZJ(2969),
      qJ = ZJ(4340),
      jJ = ZJ(990);

    function YJ(JJ) {
      let {
        loading: cJ,
        schematics: ZJ,
        onSchematicPicked: FJ,
        selectedSchematicIdList: UJ = [],
        disableAutoExport: qJ
      } = JJ;
      const {
        t: YJ
      } = (0, eJ.F)();
      return (0, jJ.jsxs)("div", {
        className: "SchematicList",
        children: [cJ && (0, jJ.jsx)(XJ.c, {}), !cJ && 0 === ZJ.length && (0, jJ.jsx)("div", {
          className: "NoSchematicsText",
          children: YJ("worldBuilder:noSavedSchematic")
        }), !cJ && ZJ.map((JJ => (0, jJ.jsx)(AJ.f, {
          source: {
            type: "schematic",
            schematic: JJ
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            FJ(JJ)
          },
          isSelected: UJ.includes(JJ.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: JJ.isAutoExported && qJ,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, JJ.schematicId)))]
      })
    }

    function hJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: UJ
      } = JJ;
      const {
        t: XJ
      } = (0, eJ.F)(), [AJ, hJ] = (0, FJ.useState)(null);
      return (0, jJ.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === AJ && (0, jJ.jsxs)(jJ.Fragment, {
          children: [(0, jJ.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: XJ("worldBuilder:schematicList")
          }), (0, jJ.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: XJ("worldBuilder:clickSchematicForOptions")
          }), (0, jJ.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, jJ.jsx)(YJ, {
              loading: !1,
              schematics: cJ,
              onSchematicPicked: JJ => {
                hJ(JJ)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== AJ && (0, jJ.jsx)(qJ.h, {
          schematic: AJ,
          inSourceWorld: AJ.schematicId === ZJ,
          onSchematicUpdate: JJ => {
            hJ(JJ)
          },
          onClose: () => {
            hJ(null), UJ()
          }
        })]
      })
    }

    function DJ(JJ) {
      let {
        ownedSchematics: cJ,
        currentWorldSchematicId: ZJ,
        onClose: FJ
      } = JJ;
      UJ.NotificationProvider.showCustomPopup({
        body: JJ => (0, jJ.jsx)(hJ, {
          ownedSchematics: cJ,
          currentWorldSchematicId: ZJ,
          onClose: JJ
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: FJ,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35935: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => QJ,
      c: () => mJ
    });
    var FJ = ZJ(3737),
      UJ = ZJ(1326),
      eJ = ZJ(47),
      XJ = ZJ(5817),
      AJ = ZJ(3728),
      qJ = ZJ(1184),
      jJ = ZJ(1703),
      YJ = ZJ(1675),
      hJ = ZJ(1329),
      DJ = ZJ(1086),
      sJ = ZJ(35944),
      nJ = ZJ(926),
      GJ = ZJ.n(nJ),
      fJ = ZJ(1201),
      xJ = ZJ(942),
      rJ = ZJ(1181),
      vJ = ZJ(990);
    const mJ = "SleepingOverlay";

    function QJ() {
      const {
        t: JJ
      } = (0, DJ.F)(), [cJ, ZJ] = (0, eJ.useState)(!1), [nJ, QJ] = (0, eJ.useState)(null), [VJ, KJ] = (0, eJ.useState)(1), [yJ, SJ] = (0, eJ.useState)(!1), [IJ, MJ] = (0, eJ.useState)(!1), bJ = (0, eJ.useRef)(0), wJ = (0, eJ.useRef)(!1), WJ = (0, eJ.useRef)(!1), gJ = (0, eJ.useRef)(), HJ = (0, eJ.useRef)(null);

      function PJ() {
        const JJ = null !== nJ && void 0 !== nJ ? nJ : "Rested Speed";
        jJ.gameBridge.send("wakeUp", IJ ? JJ : null), HJ.current = null, ZJ(!1), QJ(null), KJ(1), SJ(!1), MJ(!1)
      }

      function kJ() {
        return !yJ && (PJ(), !0)
      }
      return (0, UJ.i)("PlayerPhysicsTypeUpdate", (JJ => {
        JJ !== HJ.current && (HJ.current = JJ, JJ === XJ.s.SLEEPING ? (WJ.current || (bJ.current = jJ.gameBridge.lookup("cameraZoom", null), WJ.current = !0), wJ.current = !0, jJ.gameBridge.send("setCameraZoom", 3), ZJ(!0), KJ(function() {
          for (const JJ of jJ.gameBridge.lookup("blocksStandingOn", null)) {
            if (sJ.c.leafBeds.includes(JJ)) return console.log(`Found leaf bed: ${JJ}`), 1;
            if (sJ.c.woolBeds.includes(JJ)) return console.log(`Found woold bed: ${JJ}`), 2;
            if (sJ.c.strongBeds.includes(JJ)) return console.log(`Found strong bed ${JJ}`), 3
          }
          return 1
        }())) : (WJ.current = !1, ZJ(!1), QJ(null), KJ(1)))
      })), (0, eJ.useEffect)((() => () => {
        (0, qJ.e)(mJ)
      }), []), (0, eJ.useEffect)((() => {
        cJ ? (0, qJ.h)(mJ) : ((0, qJ.e)(mJ), wJ.current && (jJ.gameBridge.send("setCameraZoom", bJ.current), wJ.current = !1))
      }), [cJ]), (0, rJ.p)("overlay", gJ, kJ, cJ), (0, vJ.jsx)(FJ.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: cJ,
        timeout: 300,
        nodeRef: gJ,
        unmountOnExit: !0,
        children: (0, vJ.jsx)("div", {
          ref: gJ,
          onClick: JJ => {
            kJ() && JJ.stopPropagation()
          },
          children: (0, vJ.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, vJ.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: AJ.i.map((cJ => (0, vJ.jsxs)(EJ, {
                restedEffect: cJ,
                YX: nJ,
                setChosenRestedEffect: QJ,
                children: [(0, vJ.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: cJ
                    }]
                  }), AJ.g[cJ].shortName]
                }), (0, vJ.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: JJ(AJ.g[cJ].description, {
                    time: AJ.g[cJ].effectLevelDurations[VJ] / 6e4
                  })
                })]
              }, cJ)))
            }), (0, vJ.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, vJ.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, vJ.jsxs)(hJ.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: JJ => {
                  IJ ? PJ() : (SJ(!0), (0, fJ.bb)((() => {
                    SJ(!1), MJ(!0)
                  }), !0)), JJ.stopPropagation()
                },
                loading: yJ,
                children: [!IJ && (0, vJ.jsxs)(vJ.Fragment, {
                  children: [(0, vJ.jsx)(xJ.c, {
                    name: "film"
                  }), " ", JJ("classicGame:watchAdToGetRestedPerk")]
                }), IJ && JJ("classicGame:wakeUp")]
              }), (0, vJ.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, vJ.jsx)("div", {
                  className: GJ()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === VJ
                  }),
                  children: (0, vJ.jsx)(YJ.d, {
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
    const EJ = (0, eJ.memo)((function(JJ) {
      let {
        children: cJ,
        restedEffect: ZJ,
        YX: FJ,
        setChosenRestedEffect: UJ
      } = JJ;
      return ZJ === FJ ? (0, vJ.jsx)(hJ.m, {
        onClick: JJ => {
          JJ.stopPropagation()
        },
        children: cJ
      }) : (0, vJ.jsx)(hJ.g, {
        onClick: JJ => {
          UJ(ZJ), JJ.stopPropagation()
        },
        children: cJ
      })
    }))
  },
  35626: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      c: () => qJ
    });
    var FJ = ZJ(521),
      UJ = ZJ(1703),
      eJ = ZJ(1537),
      XJ = ZJ(80),
      AJ = ZJ(1162);

    function qJ(JJ, cJ, ZJ) {
      return XJ.featureFlags.useSocialFeatures && JJ && null === (0, AJ.d)(cJ, ZJ)
    }

    function jJ(JJ, cJ) {
      var ZJ, XJ;
      const AJ = eJ.b.getSocialState().friends.find((JJ => JJ.name.toLowerCase() === cJ.toLowerCase())),
        qJ = UJ.gameBridge.latest("players").byId[JJ],
        jJ = void 0 !== qJ && qJ.name === cJ,
        YJ = jJ && null !== (ZJ = qJ.cosmetics) && void 0 !== ZJ ? ZJ : void 0,
        hJ = AJ && YJ ? {
          ...AJ,
          cosmetics: YJ
        } : AJ;
      return {
        playerSocialPreview: null !== hJ && void 0 !== hJ ? hJ : {
          isError: !1,
          name: cJ,
          ranks: jJ ? [...qJ.ranks] : [],
          cosmetics: null !== YJ && void 0 !== YJ ? YJ : {},
          nameColour: null !== (XJ = null === YJ || void 0 === YJ ? void 0 : YJ.nameColour) && void 0 !== XJ ? XJ : FJ.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== AJ
      }
    }
  },
  8557: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(3957),
      UJ = ZJ(3966);

    function eJ(JJ) {
      let {
        children: cJ,
        showing: ZJ,
        globallyUniqueKey: eJ,
        alwaysMountChildren: XJ = !1,
        doGameplayStartStopOnShow: AJ = !0,
        keepsMovement: qJ = !1
      } = JJ;
      return (0, UJ.c)(!0, ZJ, eJ, qJ), (0, FJ.c)(AJ, ZJ), ZJ || XJ ? cJ : null
    }
  },
  4325: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => AJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(926),
      eJ = ZJ.n(UJ),
      XJ = ZJ(990);

    function AJ(JJ) {
      let {
        columns: cJ,
        rows: ZJ,
        getRowKey: UJ,
        renderRow: AJ,
        className: qJ
      } = JJ;
      return (0, XJ.jsxs)("table", {
        className: eJ()("Table", qJ),
        children: [(0, XJ.jsx)("thead", {
          children: (0, XJ.jsx)("tr", {
            children: cJ.map((JJ => (0, XJ.jsx)("th", {
              children: JJ.header
            }, JJ.key)))
          })
        }), (0, XJ.jsx)("tbody", {
          children: ZJ.map((JJ => (0, XJ.jsx)(FJ.Fragment, {
            children: AJ(JJ)
          }, UJ(JJ))))
        })]
      })
    }
  },
  35897: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => KJ,
      c: () => EJ,
      e: () => VJ,
      i: () => nJ
    });
    var FJ = ZJ(926),
      UJ = ZJ.n(FJ),
      eJ = ZJ(47),
      XJ = ZJ(60),
      AJ = ZJ(1266),
      qJ = ZJ(1329),
      jJ = ZJ(1259),
      YJ = ZJ(1181),
      hJ = ZJ(1086),
      DJ = ZJ(35901),
      sJ = ZJ(990);

    function nJ(JJ) {
      const [cJ, ZJ] = (0, eJ.useState)((() => (0, DJ.m)(JJ)));
      return (0, eJ.useEffect)((() => (ZJ((0, DJ.m)(JJ)), (0, DJ.L)((() => {
        ZJ((0, DJ.m)(JJ))
      })))), [JJ]), cJ
    }

    function GJ(JJ, cJ) {
      "function" === typeof JJ ? JJ(cJ) : JJ && (JJ.current = cJ)
    }

    function fJ(JJ) {
      let {
        tutorial: cJ,
        step: ZJ,
        enabled: FJ = !0
      } = JJ;
      const UJ = nJ(cJ);
      return FJ && UJ === ZJ
    }

    function xJ(JJ, cJ) {
      const ZJ = (0, DJ.q)(JJ),
        FJ = ZJ.indexOf(cJ);
      return !ZJ.slice(FJ + 1).some((cJ => (0, DJ.w)(JJ, cJ)))
    }

    function rJ(JJ, cJ, ZJ, FJ) {
      let {
        tutorial: UJ,
        step: eJ,
        waitForClick: XJ = !1,
        onPrevious: AJ
      } = JJ;
      const qJ = cJ && (0, DJ.t)(UJ, eJ),
        jJ = cJ && !xJ(UJ, eJ),
        hJ = XJ ? FJ : ZJ;
      let sJ = null;
      qJ ? sJ = () => {
        null === AJ || void 0 === AJ || AJ(), (0, DJ.r)(UJ, eJ)
      } : jJ && (sJ = () => {
        (0, DJ.i)(UJ)
      }), (0, YJ.p)("popup", null !== hJ && void 0 !== hJ ? hJ : ZJ, sJ, cJ && null !== hJ, null, qJ ? void 0 : "controller:menusSkipTutorial")
    }

    function vJ(JJ) {
      let {
        tutorial: cJ,
        step: ZJ,
        text: FJ,
        waitForClick: UJ = !1,
        onPrevious: eJ
      } = JJ;
      const {
        t: XJ
      } = (0, hJ.F)(), AJ = xJ(cJ, ZJ);
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, sJ.jsx)("div", {
          className: "TutorialStepText",
          children: FJ
        }), (0, sJ.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, DJ.t)(cJ, ZJ) && (0, sJ.jsx)(qJ.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === eJ || void 0 === eJ || eJ(), (0, DJ.r)(cJ, ZJ)
            },
            children: XJ("tutorial:back")
          }), !UJ && (0, sJ.jsx)(qJ.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, DJ.f)(ZJ)
            },
            padDefaultFocus: !0,
            children: XJ(AJ ? "tutorial:done" : "tutorial:next")
          }), !AJ && (0, sJ.jsx)(qJ.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, DJ.i)(cJ)
            },
            children: XJ("tutorial:skip")
          })]
        })]
      })
    }
    const mJ = 6;

    function QJ(JJ) {
      let {
        rect: cJ,
        margin: ZJ
      } = JJ;
      const FJ = Math.max(0, cJ.top - ZJ),
        UJ = cJ.bottom + ZJ,
        eJ = Math.max(0, cJ.left - ZJ),
        XJ = cJ.right + ZJ;
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: FJ
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: UJ,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FJ,
            left: 0,
            width: eJ,
            height: UJ - FJ
          }
        }), (0, sJ.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: FJ,
            left: XJ,
            right: 0,
            height: UJ - FJ
          }
        })]
      })
    }

    function EJ(JJ) {
      let {
        target: cJ,
        placement: ZJ,
        boxRef: FJ,
        className: qJ,
        spotlightMargin: YJ = mJ,
        children: hJ
      } = JJ;
      const {
        getArrowProps: DJ,
        getTooltipProps: nJ,
        setTooltipRef: GJ,
        setTriggerRef: fJ
      } = (0, AJ.d)({
        placement: ZJ,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, YJ]
      });
      (0, eJ.useLayoutEffect)((() => {
        fJ(cJ)
      }), [cJ, fJ]);
      const xJ = function(JJ, cJ) {
        const [ZJ, FJ] = (0, eJ.useState)(null);
        return (0, eJ.useEffect)((() => {
          if (!cJ || !JJ) return void FJ(null);
          let ZJ = 0,
            UJ = null;
          const eJ = () => {
            const cJ = JJ.getBoundingClientRect();
            UJ && cJ.left === UJ.left && cJ.top === UJ.top && cJ.width === UJ.width && cJ.height === UJ.height || (UJ = cJ, FJ(cJ)), ZJ = requestAnimationFrame(eJ)
          };
          return eJ(), () => {
            cancelAnimationFrame(ZJ)
          }
        }), [JJ, cJ]), ZJ
      }(cJ, !0);
      (0, eJ.useEffect)((() => {
        null === cJ || void 0 === cJ || cJ.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [cJ]);
      const rJ = (0, eJ.useCallback)((JJ => {
        GJ(JJ), FJ && (FJ.current = JJ)
      }), [GJ, FJ]);
      return (0, XJ.createPortal)((0, sJ.jsxs)(sJ.Fragment, {
        children: [xJ && (0, sJ.jsx)(QJ, {
          rect: xJ,
          margin: YJ
        }), (0, sJ.jsxs)("div", {
          ref: rJ,
          ...nJ({
            className: UJ()("tooltip-container SmallTextLight TutorialStep", qJ)
          }),
          children: [hJ, (0, sJ.jsx)("div", {
            ...DJ({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, jJ.j)())
    }
    const VJ = (0, eJ.forwardRef)((function(JJ, cJ) {
      let {
        placement: ZJ = "right",
        children: FJ,
        ...UJ
      } = JJ;
      const XJ = fJ(UJ),
        AJ = (0, eJ.useRef)(null),
        qJ = (0, eJ.useRef)(null);
      rJ(UJ, XJ, AJ, qJ);
      const [jJ, YJ] = (0, eJ.useState)(null), hJ = FJ.ref, DJ = (0, eJ.useCallback)((JJ => {
        qJ.current = JJ, YJ(JJ), GJ(cJ, JJ), GJ(hJ, JJ)
      }), [cJ, hJ]);
      return (0, sJ.jsxs)(sJ.Fragment, {
        children: [(0, eJ.cloneElement)(FJ, {
          ref: DJ
        }), XJ && (0, sJ.jsx)(EJ, {
          target: jJ,
          placement: ZJ,
          boxRef: AJ,
          children: (0, sJ.jsx)(vJ, {
            ...UJ
          })
        })]
      })
    }));

    function KJ(JJ) {
      const cJ = fJ(JJ),
        ZJ = (0, eJ.useRef)(null);
      return rJ(JJ, cJ, ZJ, null), cJ ? (0, XJ.createPortal)((0, sJ.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, sJ.jsx)("div", {
          ref: ZJ,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, sJ.jsx)(vJ, {
            ...JJ
          })
        })
      }), (0, jJ.j)()) : null
    }
  },
  35765: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => eJ,
      e: () => XJ,
      f: () => AJ,
      h: () => qJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(1017);
    const eJ = 8,
      XJ = "InGameHeaderContainer",
      AJ = "TopRightElements";

    function qJ(JJ) {
      const [cJ] = (0, UJ.d)(), [ZJ, qJ] = (0, FJ.useState)(!1);
      return (0, FJ.useLayoutEffect)((() => {
        if (!JJ) return;
        const cJ = document.querySelector(`.${XJ}`),
          ZJ = document.querySelector(`.${AJ}`),
          FJ = () => {
            const FJ = JJ.getBoundingClientRect(),
              UJ = cJ ? cJ.getBoundingClientRect().right : 0,
              XJ = ZJ ? ZJ.getBoundingClientRect().left : window.innerWidth,
              AJ = FJ.left < UJ + eJ,
              jJ = FJ.right > XJ - eJ;
            qJ(AJ || jJ)
          };
        FJ();
        const UJ = new ResizeObserver(FJ);
        return UJ.observe(JJ), cJ && UJ.observe(cJ), ZJ && UJ.observe(ZJ), () => {
          UJ.disconnect()
        }
      }), [JJ, cJ]), ZJ
    }
  },
  5910: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ
    });
    var FJ = ZJ(47),
      UJ = ZJ(29);

    function eJ(JJ, cJ) {
      var ZJ;
      const [eJ, XJ] = (0, FJ.useState)(null !== (ZJ = UJ.j.getItem(JJ)) && void 0 !== ZJ ? ZJ : cJ);
      return [eJ, cJ => {
        UJ.j.setItem(JJ, cJ), XJ(cJ)
      }]
    }
  },
  35909: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => eJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1201);

    function eJ() {
      const {
        clientEscMenuOptions: JJ
      } = (0, FJ.j)(["clientEscMenuOptions"]);
      return (0, UJ.v)() && JJ.showChat
    }
  },
  35852: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ
    });
    var FJ = ZJ(2401),
      UJ = ZJ(3155),
      eJ = ZJ(2473);
    const XJ = ["Unable to create vertex buffer"];
    let AJ = {};

    function qJ(JJ, cJ) {
      const ZJ = new Date;
      console.error(`${ZJ.getUTCHours()}:${ZJ.getUTCMinutes()}:${ZJ.getUTCSeconds()}`, JJ, cJ, null === cJ || void 0 === cJ ? void 0 : cJ.stack), XJ.includes(null === cJ || void 0 === cJ ? void 0 : cJ.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, FJ.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${cJ.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, eJ.logError)("warning", `${JJ}\n ${cJ} "\n" ${null===cJ||void 0===cJ?void 0:cJ.stack}`);
      const UJ = JJ + cJ + (null === cJ || void 0 === cJ ? void 0 : cJ.stack);
      UJ in AJ || ((0, eJ.logError)("error", `${JJ}\n ${cJ} "\n" ${null===cJ||void 0===cJ?void 0:cJ.stack}`), AJ[UJ] = !0)
    }(0, UJ.onGameReset)((() => {
      AJ = {}
    }))
  },
  4242: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => HJ,
      f: () => gJ
    });
    var FJ = ZJ(4245),
      UJ = ZJ(227);
    const eJ = 120,
      XJ = 260,
      AJ = 1.15,
      qJ = 1.2,
      jJ = 2,
      YJ = 1.08,
      hJ = .8,
      DJ = .95,
      sJ = 8,
      nJ = "[\"')\\]\u300d\u300f\uff09]*",
      GJ = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${nJ}$`),
      fJ = new RegExp(`[?\uff1f]${nJ}$`),
      xJ = new RegExp(`[!\uff01]${nJ}$`),
      rJ = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      vJ = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mJ = new RegExp(`[${vJ}]`),
      QJ = new RegExp(`[${vJ}]|[^${vJ}]+`, "g"),
      EJ = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function VJ(JJ) {
      let cJ = 2166136261;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ ^= JJ.charCodeAt(ZJ), cJ = Math.imul(cJ, 16777619);
      return (cJ >>> 0) / 4294967295 * 2 - 1
    }

    function KJ(JJ) {
      var cJ;
      if (mJ.test(JJ)) return 1;
      const ZJ = JJ.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        FJ = ZJ.replace(/[^0-9]/g, "");
      if (FJ.length > 0 && !/\p{L}/u.test(ZJ)) return Math.min(FJ.length, 4);
      const UJ = null !== (cJ = ZJ.match(EJ)) && void 0 !== cJ ? cJ : [];
      if (0 === UJ.length) {
        var eJ, XJ;
        const JJ = null !== (eJ = null === (XJ = ZJ.match(/\p{L}/gu)) || void 0 === XJ ? void 0 : XJ.length) && void 0 !== eJ ? eJ : 0;
        return 0 === JJ ? 0 : Math.min(Math.max(1, Math.round(JJ / 2.5)), sJ)
      }
      const AJ = ZJ.replace(/[^\p{L}]/gu, ""),
        qJ = UJ.length > 1 && "e" === UJ.at(-1) && AJ.endsWith("e") && !AJ.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(JJ.replace(/[^\p{L}]/gu, ""));
      return Math.min(UJ.length - (qJ ? 1 : 0), sJ)
    }

    function yJ(JJ) {
      return JJ.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function SJ(JJ) {
      const cJ = JJ.replace(/[^\p{L}]/gu, "");
      return cJ.length >= 2 && cJ === cJ.toUpperCase() && cJ !== cJ.toLowerCase()
    }

    function IJ(JJ, cJ) {
      var ZJ;
      const sJ = cJ && (0, FJ.h)(cJ),
        nJ = null !== (ZJ = null === sJ || void 0 === sJ ? void 0 : sJ.syllableMs) && void 0 !== ZJ ? ZJ : FJ.c,
        vJ = function(JJ) {
          const cJ = [];
          for (const FJ of (0, UJ.Sb)(JJ))
            if ("string" === typeof FJ)
              for (const JJ of FJ.split(/(\s+)/)) {
                if ("" === JJ) continue;
                if (/^\s+$/.test(JJ)) {
                  cJ.push({
                    kind: "space",
                    text: JJ
                  });
                  continue
                }
                if (!mJ.test(JJ)) {
                  cJ.push({
                    kind: "word",
                    text: JJ,
                    delayMs: 0
                  });
                  continue
                }
                let FJ = !0;
                for (const UJ of null !== (ZJ = JJ.match(QJ)) && void 0 !== ZJ ? ZJ : []) {
                  var ZJ;
                  const JJ = cJ.at(-1);
                  FJ || "word" !== (null === JJ || void 0 === JJ ? void 0 : JJ.kind) || mJ.test(UJ) || /[\p{L}\p{N}]/u.test(UJ) ? (FJ || cJ.push({
                    kind: "space",
                    text: "\u200b"
                  }), cJ.push({
                    kind: "word",
                    text: UJ,
                    delayMs: 0
                  }), FJ = !1) : JJ.text += UJ
                }
              } else cJ.push({
                kind: "icon",
                text: FJ.icon,
                delayMs: 0
              });
          return cJ
        }(JJ),
        EJ = [];
      let IJ = [];
      for (const FJ of vJ) "space" !== FJ.kind && (IJ.push(FJ), GJ.test(FJ.text) && (EJ.push(IJ), IJ = []));
      EJ.push(IJ);
      const MJ = [];
      let bJ = 0;
      for (const FJ of EJ) {
        var wJ, WJ;
        const JJ = null !== (wJ = null === (WJ = FJ.at(-1)) || void 0 === WJ ? void 0 : WJ.text) && void 0 !== wJ ? wJ : "",
          cJ = fJ.test(JJ),
          ZJ = xJ.test(JJ),
          UJ = FJ.map((JJ => "word" === JJ.kind ? KJ(JJ.text) : 1)),
          vJ = UJ.findLastIndex((JJ => JJ > 0));
        for (const [fJ, xJ] of FJ.entries()) {
          const JJ = "word" === xJ.kind,
            FJ = UJ[fJ];
          xJ.delayMs = bJ;
          for (let UJ = 0; sJ && UJ < FJ; UJ++) {
            const {
              intonation: eJ
            } = sJ;
            let XJ = vJ > 0 ? -eJ.declineSemitones * (fJ / vJ) : 0;
            XJ += VJ(`${yJ(xJ.text)}|${UJ}`) * eJ.variationSemitones;
            const GJ = Math.min(1, eJ.variationSemitones);
            let rJ = sJ.glideSemitones,
              mJ = 1;
            ZJ && (XJ += eJ.exclaimLiftSemitones, mJ *= AJ), cJ && fJ === vJ && (XJ += eJ.questionRiseSemitones * (FJ > 1 ? .5 + .5 * UJ / (FJ - 1) : 1), UJ === FJ - 1 && (rJ = Math.abs(rJ) + eJ.questionRiseSemitones / 2)), JJ && SJ(xJ.text) && (XJ += jJ * GJ, mJ *= qJ), FJ > 1 && 0 === UJ && (XJ += hJ * GJ, mJ *= YJ), MJ.push({
              atMs: bJ + UJ * nJ,
              semitones: XJ,
              glideSemitones: rJ,
              durationMs: UJ < FJ - 1 ? Math.min(sJ.durationMs, nJ * DJ) : sJ.durationMs,
              level: mJ
            })
          }
          bJ += FJ * nJ + (GJ.test(xJ.text) ? XJ : rJ.test(xJ.text) ? eJ : 0)
        }
      }
      return {
        pieces: vJ.map((JJ => "space" === JJ.kind ? JJ : "icon" === JJ.kind ? {
          kind: "icon",
          icon: JJ.text,
          delayMs: JJ.delayMs
        } : {
          kind: "word",
          text: JJ.text,
          delayMs: JJ.delayMs
        })),
        blips: MJ
      }
    }
    var MJ = ZJ(1086),
      bJ = ZJ(1151),
      wJ = ZJ(1712);

    function WJ(JJ) {
      if ("string" === typeof JJ) return JJ;
      const cJ = bJ.e.get().getCurrentLanguageCode();
      return (0, MJ.t)(cJ, JJ.translationKey, (0, MJ.s)(JJ.params, wJ.d.shown))
    }

    function gJ(JJ) {
      const cJ = void 0 === JJ.voice ? null : (0, FJ.k)(JJ.voice),
        ZJ = cJ && (0, FJ.h)(cJ);
      return {
        plan: IJ(WJ(JJ.line), ZJ),
        synth: ZJ
      }
    }

    function HJ(JJ) {
      const cJ = [];
      let ZJ = [];
      for (const [UJ, eJ] of JJ.entries()) {
        var FJ;
        "space" === eJ.kind && (" " !== eJ.text || "icon" !== (null === (FJ = JJ[UJ + 1]) || void 0 === FJ ? void 0 : FJ.kind)) ? (ZJ.length > 0 && cJ.push(ZJ), cJ.push([eJ]), ZJ = []) : ZJ.push(eJ)
      }
      return ZJ.length > 0 && cJ.push(ZJ), cJ
    }
  },
  35759: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ
    });
    const FJ = [{
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

    function UJ(JJ, cJ, ZJ) {
      const UJ = Math.abs(JJ - cJ),
        eJ = Date.now() - ZJ;
      for (const XJ of FJ)
        if (JJ < XJ.maxDist) return UJ >= XJ.hardUpdateDist || eJ > XJ.timeBetweenSoftChecks && UJ >= XJ.softUpdateDist;
      return !1
    }
  },
  35962: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      f: () => eJ,
      i: () => UJ
    });
    const FJ = [.25, .5, 1, 2, 4, 8, 16];

    function UJ(JJ, cJ) {
      const ZJ = FJ;
      let UJ = ZJ.indexOf(JJ);
      return -1 === UJ && (UJ = ZJ.findIndex((cJ => cJ >= JJ)), -1 === UJ && (UJ = ZJ.length - 1)), "up" === cJ ? ZJ[Math.min(UJ + 1, ZJ.length - 1)] : ZJ[Math.max(UJ - 1, 0)]
    }

    function eJ(JJ) {
      return JJ <= FJ[0]
    }

    function XJ(JJ) {
      return JJ >= FJ[FJ.length - 1]
    }
  },
  36009: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ,
      e: () => UJ
    });
    const FJ = "data-replay-ui-active",
      UJ = [{
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
  36014: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => jJ,
      e: () => hJ,
      h: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(36009);

    function XJ() {
      const JJ = {};
      for (const {
          group: cJ
        }
        of eJ.e) JJ[cJ] = !0;
      return JJ
    }
    let AJ = XJ();

    function qJ() {
      UJ.i.Uf("replayViewer|uiVisibilityChanged")
    }

    function jJ() {
      return AJ
    }

    function YJ(JJ, cJ) {
      AJ[JJ] !== cJ && (AJ = {
        ...AJ,
        [JJ]: cJ
      }, "nametag" === JJ && FJ.d.set({
        areNametagsHidden: !cJ
      }), qJ())
    }

    function hJ() {
      AJ = XJ(), FJ.d.set({
        areNametagsHidden: !1
      }), qJ()
    }
  },
  35868: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => qJ
    });
    const FJ = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      UJ = {
        player: FJ,
        store: {
          ...FJ,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function eJ(JJ, cJ) {
      JJ instanceof Promise ? JJ.then(cJ).catch((JJ => {
        console.error("Couldn't open the preview", JJ)
      })) : cJ(JJ)
    }
    class XJ {
      constructor(JJ) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height), null !== this.view && JJ.show(this.view))
        }))
      }
      show(JJ) {
        var cJ;
        this.view = JJ, null === (cJ = this.opened) || void 0 === cJ || cJ.show(JJ)
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    class AJ {
      constructor(JJ) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(JJ).then((JJ => JJ.ready)), eJ(JJ, (JJ => {
          this.closed ? JJ.close() : (this.opened = JJ, null !== this.size && JJ.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var JJ, cJ;
        return null !== (JJ = null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.isReady()) && void 0 !== JJ && JJ
      }
      setCosmetic(JJ, cJ) {
        var ZJ;
        null === (ZJ = this.opened) || void 0 === ZJ || ZJ.setCosmetic(JJ, cJ)
      }
      playEmote(JJ) {
        var cJ;
        null === (cJ = this.opened) || void 0 === cJ || cJ.playEmote(JJ)
      }
      resetCamera() {
        var JJ;
        null === (JJ = this.opened) || void 0 === JJ || JJ.resetCamera()
      }
      async untilDrawn(JJ) {
        var cJ;
        await this.ready, await (null === (cJ = this.opened) || void 0 === cJ ? void 0 : cJ.untilDrawn(JJ))
      }
      resize(JJ, cJ) {
        var ZJ;
        this.size = {
          width: JJ,
          height: cJ
        }, null === (ZJ = this.opened) || void 0 === ZJ || ZJ.resize(JJ, cJ)
      }
      close() {
        var JJ;
        this.closed = !0, null === (JJ = this.opened) || void 0 === JJ || JJ.close(), this.opened = null
      }
    }
    const qJ = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(JJ) {
        this.host = JJ
      }
      setDefaultHost(JJ) {
        this.makeDefault = JJ
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(JJ) {
        return new XJ(this.current().openMob(JJ))
      }
      openPet(JJ) {
        return new XJ(this.current().openPet(JJ))
      }
      openMobLineup(JJ) {
        return new XJ(this.current().openMobLineup(JJ))
      }
      openCharacter(JJ, cJ) {
        return new AJ(this.current().openCharacter(JJ, cJ))
      }
    }
  },
  35860: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ.g
    });
    var FJ = ZJ(35868);
    class UJ {
      constructor(JJ) {
        this.load = JJ, this.loaded = null, this.loading = null
      }
      run(JJ) {
        return null !== this.loaded ? JJ(this.loaded) : (this.loading ??= this.load().then((JJ => (this.loaded = JJ, JJ)), (JJ => {
          throw this.loading = null, JJ
        })), this.loading.then(JJ))
      }
    }
    class eJ {
      constructor() {
        this.mobScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(146)]).then((() => ZJ(39946))))), this.characterScene = new UJ((() => Promise.all([ZJ.e(215), ZJ.e(214), ZJ.e(234), ZJ.e(235), ZJ.e(67), ZJ.e(66), ZJ.e(232), ZJ.e(65), ZJ.e(242), ZJ.e(236), ZJ.e(241), ZJ.e(239), ZJ.e(231), ZJ.e(206), ZJ.e(271), ZJ.e(211), ZJ.e(225), ZJ.e(237), ZJ.e(240), ZJ.e(126), ZJ.e(185), ZJ.e(207), ZJ.e(222), ZJ.e(205), ZJ.e(106), ZJ.e(68), ZJ.e(272), ZJ.e(145)]).then((() => ZJ(40040)))))
      }
      openMob(JJ) {
        return this.mobScene.run((cJ => cJ.openMobPreview(JJ)))
      }
      openPet(JJ) {
        return this.mobScene.run((cJ => cJ.openPetPreview(JJ)))
      }
      openMobLineup(JJ) {
        return this.mobScene.run((cJ => cJ.openMobLineupPreview(JJ)))
      }
      openCharacter(JJ, cJ) {
        return this.characterScene.run((ZJ => ZJ.openCharacterPreview(JJ, cJ)))
      }
    }
    FJ.g.setDefaultHost((() => new eJ))
  },
  35848: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      f: () => eJ
    });
    const FJ = new Map;

    function UJ(JJ) {
      var cJ;
      return null === JJ ? null : null !== (cJ = FJ.get(JJ)) && void 0 !== cJ ? cJ : null
    }

    function eJ(JJ, cJ) {
      return FJ.set(JJ, cJ), () => {
        FJ.get(JJ) === cJ && FJ.delete(JJ)
      }
    }
  },
  35665: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => eJ,
      c: () => GJ,
      f: () => fJ,
      j: () => AJ,
      l: () => DJ,
      m: () => xJ,
      p: () => hJ,
      t: () => vJ,
      v: () => nJ,
      z: () => rJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17);
    const eJ = "clientGameInventoryButtonsChanged",
      XJ = new Map;

    function AJ() {
      return [...XJ.values()].sort(((JJ, cJ) => {
        var ZJ, FJ;
        return (null !== (ZJ = JJ.order) && void 0 !== ZJ ? ZJ : 0) - (null !== (FJ = cJ.order) && void 0 !== FJ ? FJ : 0)
      }))
    }
    let qJ = null;

    function jJ(JJ) {
      qJ = JJ
    }
    let YJ = !1;

    function hJ(JJ) {
      YJ = !0;
      try {
        JJ.onClick()
      } finally {
        YJ = !1
      }
      JJ.panel && "clientGame" === FJ.d.get("openInGameMenuName") && jJ(JJ.id)
    }

    function DJ() {
      return YJ
    }

    function sJ() {
      return AJ().filter((JJ => JJ.panel && !JJ.disabled))
    }

    function nJ(JJ) {
      const cJ = sJ(),
        ZJ = cJ.findIndex((JJ => JJ.id === qJ));
      return !(ZJ < 0 || cJ.length < 2) && (hJ(cJ[(ZJ + JJ + cJ.length) % cJ.length]), !0)
    }

    function GJ() {
      return null !== qJ && sJ().length > 1
    }

    function fJ() {
      jJ(null)
    }

    function xJ() {
      "inventory" !== FJ.d.get("openInGameMenuName") && jJ(null)
    }

    function rJ() {
      const JJ = qJ;
      return jJ(null), JJ
    }

    function vJ(JJ) {
      return XJ.set(JJ.id, JJ), UJ.i.Uf(eJ, AJ(), !0), () => {
        XJ.get(JJ.id) === JJ && (XJ.delete(JJ.id), UJ.i.Uf(eJ, AJ()))
      }
    }
  },
  35661: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      f: () => fJ,
      j: () => xJ,
      k: () => DJ,
      m: () => jJ,
      n: () => GJ,
      r: () => sJ,
      u: () => YJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(17),
      eJ = ZJ(1184),
      XJ = ZJ(35665);
    const AJ = "clientGameUiChanged";
    let qJ = null;

    function jJ() {
      return qJ
    }

    function YJ(JJ, cJ) {
      const ZJ = {
        content: JJ,
        menu: cJ
      };
      return qJ = ZJ, UJ.i.Uf(AJ, qJ, !0), () => {
        qJ === ZJ && (qJ = null, nJ = !1, fJ(), UJ.i.Uf(AJ, null))
      }
    }
    let hJ = null;

    function DJ() {
      return hJ
    }

    function sJ(JJ) {
      return hJ = JJ, () => {
        hJ === JJ && (hJ = null)
      }
    }
    let nJ = !1;

    function GJ() {
      const JJ = FJ.d.get("openInGameMenuName");
      "clientGame" !== JJ && (nJ = "inventory" === JJ), (0, XJ.l)() || (0, XJ.f)(), (0, eJ.h)("InGameMenu"), FJ.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function fJ() {
      rJ(!1)
    }

    function xJ() {
      rJ(nJ)
    }

    function rJ(JJ) {
      "clientGame" === FJ.d.get("openInGameMenuName") && FJ.d.set({
        openInGameMenuName: JJ ? "inventory" : null
      }), JJ || (0, XJ.f)(), nJ = !1
    }
  },
  35978: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => oc,
      f: () => tc
    });
    var FJ = ZJ(3726),
      UJ = ZJ(535),
      eJ = ZJ(3226),
      XJ = ZJ(3246),
      AJ = ZJ.n(XJ);
    const qJ = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      jJ = "EV_boolean",
      YJ = "EV_double",
      hJ = "EV_string",
      DJ = "EV_doubleArr",
      sJ = "EV_armour",
      nJ = "EV_other",
      GJ = "EV_cosmetics",
      fJ = "OEV_boolean",
      xJ = "OEV_int",
      rJ = "OEV_double",
      vJ = "OEV_string",
      mJ = "OEV_stringArr",
      QJ = "OEV_meshScaling",
      EJ = "IV_int",
      VJ = "IV_string",
      KJ = "IV_doubleArr",
      yJ = "IV_double",
      SJ = "HV_int",
      IJ = "HV_slots",
      MJ = "EnvV_string",
      bJ = "EnvV_double",
      wJ = "EnvV_doubleArr",
      WJ = "EnvV_boolean",
      gJ = {
        type: hJ,
        name: hJ,
        position: DJ,
        rotation: DJ,
        scale: YJ,
        speed: YJ,
        jumping: jJ,
        crouching: jJ,
        cameraPitch: YJ,
        armSwinging: jJ,
        heldItemName: hJ,
        heldItemEnchantmentTier: hJ,
        pose: hJ,
        followingEId: hJ,
        ridingVehicleEId: hJ,
        leaderboardTop: hJ,
        meshKind: hJ,
        meshOpts: hJ,
        followingOffset: DJ,
        shouldMatchFollowingEntityRotation: jJ,
        meshOffset: DJ,
        baseRenderHeading: YJ,
        armour: sJ,
        pI: nJ,
        playerCustomisations: GJ,
        variation: hJ,
        metaInfo: hJ,
        soundName: hJ,
        volume: YJ,
        refDistance: YJ,
        maxHearDist: YJ,
        rate: YJ,
        aiState: hJ
      },
      HJ = {
        opacity: rJ,
        zIndex: xJ,
        overlayColour: vJ,
        canSee: fJ,
        meshScaling: QJ,
        nameTagInfo: vJ,
        multilineTextBox: vJ,
        hasPriorityNametag: fJ,
        ranks: mJ,
        nameColour: vJ,
        _isAlive: fJ,
        _invisibleEffect: fJ,
        _invincible: fJ,
        killfeedColour: vJ,
        hideNameSeed: xJ,
        _glowingEffect: fJ,
        lockHeadToBody: fJ
      },
      PJ = {
        itemName: VJ,
        amount: EJ,
        position: KJ,
        size: yJ,
        attributes: VJ
      },
      kJ = {
        skyBox: MJ,
        fogColourOverride: MJ,
        fogChunkDistanceOverride: bJ,
        cameraTint: wJ,
        fogOnSkybox: WJ,
        fogBlockDistanceOverride: bJ
      },
      pJ = {
        type: "array",
        items: "double"
      },
      dJ = {
        type: "array",
        items: "int"
      },
      zJ = {
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
      NJ = {
        type: "map",
        values: pJ
      };

    function OJ(JJ, cJ) {
      return {
        type: "record",
        name: JJ,
        fields: [{
          name: "x",
          type: cJ
        }]
      }
    }
    const TJ = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", OJ(fJ, "boolean"), OJ(xJ, "int"), OJ(rJ, "double"), OJ(vJ, "string"), OJ(mJ, {
              type: "array",
              items: "string"
            }), OJ(QJ, NJ)]
          }]
        }
      },
      CJ = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", OJ(jJ, "boolean"), OJ(YJ, "double"), OJ(hJ, "string"), OJ(DJ, pJ), OJ(sJ, zJ), OJ(nJ, TJ), OJ(GJ, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      uJ = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", OJ(EJ, "int"), OJ(VJ, "string"), OJ(yJ, "double"), OJ(KJ, pJ)]
          }]
        }
      },
      iJ = {
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
      RJ = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", OJ(SJ, "int"), OJ(IJ, iJ)]
        }]
      },
      LJ = {
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
      aJ = {
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
      BJ = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", OJ(MJ, "string"), OJ(bJ, "double"), OJ(wJ, pJ), OJ(WJ, "boolean")]
          }]
        }
      },
      tJ = [{
        name: "fK",
        type: "record",
        fields: [{
          name: "pos",
          type: dJ
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
          type: dJ
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
      oJ = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "aF",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "oF",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "lF",
              type: ["null", "string", pJ],
              default: null
            }, {
              name: "JU",
              type: ["null", "double"],
              default: null
            }, {
              name: "cU",
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
          name: "mc",
          type: "string"
        }, {
          name: "Qc",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "Ec",
          type: "double"
        }, {
          name: "Vc",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "ac",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: pJ
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "vJ",
          type: "string"
        }, {
          name: "ae",
          type: ["null", "double"],
          default: null
        }, {
          name: "Be",
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
          name: "NF",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "TF",
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
      lJ = [{
        name: "position",
        type: pJ
      }, {
        name: "direction",
        type: pJ
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

    function Jc() {
      const JJ = [{
        name: "entities",
        type: {
          type: "map",
          values: CJ
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: uJ
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: lJ
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
              items: RJ
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", LJ],
        default: null
      }];
      return JJ.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "vJ",
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
      }), JJ.push({
        name: "uiElements",
        type: aJ
      }, {
        name: "environment",
        type: BJ
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: tJ
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: oJ
        }
      }), JJ
    }
    const cc = {
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
                name: "Hh",
                type: "int"
              }, {
                name: "position",
                type: pJ
              }, {
                name: "direction",
                type: pJ
              }, {
                name: "easing",
                type: pJ
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
    let Zc;

    function Fc(JJ) {
      if (9 === JJ) return Zc ??= (cJ = [{
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
            name: "Gy",
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
              type: dJ
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
            fields: Jc()
          }
        }
      }, cc], AJ().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: cJ
      }, {
        uD: Object.create(null)
      })), Zc;
      var cJ
    }
    var Uc = ZJ(35985);
    let ec, Xc, Ac, qc;
    const jc = 12;
    var Yc, hc;
    const Dc = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 33554432, 67108864, 2, 3, 91, 8191, 88, 13, 14, 1023, 65536, 10, 55296, 56320, 16, 128, 31, 15, 18, 192, 224, 240, !1, 4, 512, 127, 56319, 57343, 65535, 32, 5, 24, 19, 64, 141, 142, 143, !0, 138, 9, 11, null];

    function sc(JJ) {
      return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
        var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
        for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
          var qJ = 'AIx:&y[1^v<Xr=(8_?Om4g~wBMlYCjR!p0T,d{`#.2G/Uk5on6@+>Fiz*);|PbfaNqQ793VS]htcZu}eK$JDHEs%WL"'.indexOf(cJ[AJ]);
          if (qJ !== -Dc[1])
            if (XJ < Dc[0]) XJ = qJ;
            else {
              fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
              do {
                fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
              } while (eJ > Dc[9]);
              XJ = -Dc[1]
            }
        }
        return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
      }(hc[JJ]) : Yc[JJ]
    }

    function nc(JJ) {
      return typeof ZZ !== Dc[5] && ZZ ? (new ZZ).decode(new FZ(JJ)) : typeof UZ !== Dc[5] && UZ ? UZ.from(JJ).toString("utf-8") : AZ(JJ)
    }

    function Gc() {}

    function fc() {
      fc = function() {}
    }
    var xc, rc;
    fc(Yc = {}, hc = ["~PzZB)xG8Q8]TVX`", "!ib&Tbbj$id]b=e#`nx", "k)y!#cZ;pg9Q(y", "h+Bv7n$=oaRqw(tM&8Ctxs&BaODM#JVMQ:`Zl", "d9VC<3rO:PB]5(c#Zw*vxdUOcf.K#;b,4)91L|px", "]kPzZDfs{mU<_YX", "%f4<AH)jq8)Z{&JY4Pv]m3E1$P@gTbxOH#]hUbiR6Q#", "{[O+Wog2DiOBbdjwJ[GYW},30v6f{&pO", 'U.7pxHu=kgU3o(TRSqbC>*^^Pq9QO{QRm+y@4Dzj{=d<0&bG[r_[l}"9Zfi', "Rv!6j>y2|?_eKPP,uXSZJ@J5lqTfk&IR|fni*V`xy", 'd)[vC}{)*;"@F&^Ot?A[', "d[M+(3&GG|=z`=sY;qg>IPdRrf#n/JvM8vaZ?3psW;Yz@{sCNvXp(", "8a9uGbrdZqB", "{)xu09CBDPv{a(Y?)(5!pK*.yNLt6_R?T9=1q$A", "Pv1ZI$4>`;Mz8JTOM/Oc!S/I(aye@JrlPn:", "^6qp,KxG0)IvuPx{yP,tW>u1#4c70bg.h|5>O", "+lw&|FC^bO(<d|RGMi]vbPS=V=G3f$IwXOktrDPx", "a{iZkJ!25^:}`VU#Ag4u{6PKW;7^*:p?w)DuV$7)i=ZKI", "*k|<@6f5y=;1(b{m?aIYQPCxePJ~!Jq?O+E!xHqj5aqaAY>C^6E><PY2>m", "fqK6l|gonQ[_vHnY[p~1qe];U?6gt6aj", "34+j}nqIsm$7;(yO`)$+hnNOpQ=crHKTeT31Yi1=}X0(u]>YNi3>*#8I", "$n(!o9Qtdi/|,V&O1ax]Ro4N[N<4mxqdw)shU*`BB?L53B#MK|C<c$k1xm", "x8RC5K3I", "z|zCBSvM_8[x4:=Y?Sx+bPz=a8;6M]7RQGL+Vfptc?G</lQBSiZ1T,t5y", "(&gzo#62Fm4nc(o.)w!>GiujCfeOnoF2m):", "hnIiKf4B=|^40_>C3A", "Ir}>f]{o5g,]{M]!>:!h3PwjX|!exJ~T).wC|+W.58rn`MX", "3k,u%oQt2q^;LBd!8)~hW`{))4Yz@6?.p:s&he}O>vj3^Ywjni_vs)hI", "R/i!t)oE?)reaDF,n{!h@;n;M4{]R(mYxQ:", "X9i>75ZTtXOnu]7?z)qpliBN2?DVU:", "ZkoZk9LjCq,", "pPruMhoI4v{ZY:2lh9@]$DL)ufngWS;2u4l+rzzEUf#h4P=#@)3z}n5RAO_TI", "6lDpJd@.Ug~=]D3BtqO]u$0,&", '^)ElX3c=uF3a3&,dIj?RRh)E2?V,y]jj"*80M}H><q)Vqdzj4jBRnH|I', ",v`&vPFIuf#", "LquC}nd;AQLpbP>.Q{B0`9+=Ir4]sVA/]X7pR", "c[TpQP2$!g)1KDc`VnNv&suI", "t4!>l)omy", 'L:e>@{">*=[;k]3MFS%[UcA', "wiD@Nde+Iv~eXY^!_)ovu@<>`=d![yd`]GoZS@srRa#enPvMT/HjN#K51", "k!Gc^eE,UX=;[yr#;?K6$Dc3P(NhA", "!w+^%}~xkO;*M&", "v{><(n=1]?CfF]m209tpzVA", ">w@YB>^>|fhI/`z2qC{<.i,,5gUK56S{?vwhutPO1N&vI", "Uf7pC>y%kgl;~yiYAjKi:]ZsRQq(LKz2D|,<", "0)PjuD5rNF)K{Ms~Nna>(3yIuf8eZ|K#pP[v`*~df8hhKB`{^p)ir3[Bim", "@[`1bFxG|?Pu,:", "7hDjK>A", "bn.R7zPRm)]hWBIw=)}6`.Y,;fg?M&", "bCdu&t9K^;!?wxhlP|0]Ua)2?O$89|+YGlA}YEpx", "TiV>1sT>B;^;4:`Bdi_v^t*R(QG3=_$.KC_02KrBJiS7Ln8lM9x", "`4Q^MhA", "aqahU{<Vs;z&hBEYDV[!GJe=pvZ67J6#s(kz:F>;:POf_S6.@q6i&dTR:", "#fctRES=UFC3Z]!wcTc^PV;xa*[[M&(#I&.i,c8Idm<=)nhM=I", "6//j{owjtqn(;6V{SksvxF(x;XF", "0/E1hd)cV;~f/(bRZXF!e)TrgiZaOy!RXtoC8fm=+r$pwJl2F:Pu3nA", 'k{^[yd6,n8[J]::?"CMRY|a)k^', "Ii3z7tjm<|Y]A])w)l;^", 'n:10M}n5/(]aG{d`ClS6">mo1', ",))^`*1I", "445C?fCR{mR4p|rmj/~Cf]HT#4j<I", 'xrohjE&RFN}P8`SmY.!&E>vI+r=97Jd`"k#Z+VgIL4J^I', "U{yz@97,W;?3SV)w", "uwSZp,M1qaCBd:", "1lE!~3A", "8O:p^f4dc|y+9D@.%CLicD1Fz=04rDCwa?dt)FPR:", '(S_igDl^@i,]b="~9vNv', 'EC<+b+ymn8|*`{"G:,cp:$;xy', "xpVZxTSc9iU|I", "m5.R}`3+U?G(h&gY`v;p!S=oKa@|}6BC<)|t8ZTx", "I,&uVF.xQ)dZclX`o)3l~", "ofzvv)Dj||[q<$1{(lr<9n*5K)Dy+(I?", "Mjf>Ui>R:NhX.DolzTsZ3FQrY|)1yn3Ma:j<C", "W?e>_)7+)4y95=.{JV%[#b=3,v3&rDU`AaZyd*4t=g", "_/gtoV>5Zq#,EB:dt*1[e@>.;f9h3$#m>S`z!E2m8Ps5f=7OOI", "]f2c=nxO!Q%8!x$.?pWiOZym}*4!=nbdx)#Z>*xdf^oZhBNd<)y1", "t[2Y1z{1ZFAR_Yt!@+Tj@u[5[N;|UYLjOpB0*J}t:)_[aVc#=ldj$$A", 'P9?R3njFMqOeB:m4PTu@"EpRWq%rdoz2nS7pQ5sT1=HtIPdBivahHkV[|Xz', "9i6]Q5TRJitI>:*G#)?]tf*.*=d<,x<MG{uS8tvct(8z(bOCkl3@F+A", '6[V&>JGN"(*|P8>Tf9]h~)>.q)e*H,r#b(9l*]z=nQ.|P:=', "I/cFB@A", "g)ZS#6ldc?8TI", "h*F>q$L?SN@3[l?Ypn.[B>dB{=b6:l[", "dl^}Z@Fj%=x],o&/_[E@F]@5w=+,Wo[O/fh[b]ldc({ZpY0!x)&1", '29vibPiKw=MfId1!h(ulK)p>f8dZ*]um":;^XDe+2fmcOJDYEMpRYoRNX?', '88l]Q]lK|X~;j&",*fV!Is[^aaAv^YRBDn*vI#/cIaK&qdW,lq^0ouuI`m', "L|V&5;~^AgEy#VL2:r+^KS5K&ND8?]F,%q|FA;vm:", "g+izG6%2Om38e()Cy&y@?D}.hfC;48:/h*Op1Pm=RQfQ/;Zld)Lp]f7=GX", "o4*6i;tOi=q60&.OvSmpw`lR>v", '4vGYU*JBG?3h]89{=OavaT"tKPe$7`|?1&&u4@=m];me%x', "T96[PF^^E;U&S;ARGrlc{*A", "?pHlxn.dN)3VYSFCLfxy*T8MP*t~X(}m+.+^/,j2J)*&~bP,@)c^$fceQrSCI", "1tzh8@|c@P&[;b{{Bw0RUa][<qe*_D>.|w4<ct)2O8zZdY6.8O:", 'I,}!cncIR|Aq4oz2APFZkbdt:)DuZPiC"fIY^tRBf8', "*4p6QHuEpPJMjnAG", "Z+pcHZ3+2q5>O{3M:,J+za?=AOhh&]W_}[q+aP8=Ov^bQ3|jD4.6=zA", "6rARxf(^AOUn(by/24SC;TBKbXUfUY#!Q+CtN]:m7rNgI", "D!t^*HPx", ")9,p)uOx", "fAYcirHL", ".EC(c", ";R^lb$x@", ".k>EFfR|", "8ArYV92|", "bxEsk;{", "csvzqY6|", 's("/~?W|', "TgrBSfD|", "TgTEs", "QN_6OG@%bA1kmi<ylN]LiR.", "ewNpt*r^:U?8in(6uj+hCrkYJ%QSP5z", "?xKI2zi5UP>sE(tT)x]^(LC", "fWD:H2`@B{1GFIl*ESp$}`|me=Qjkaq", "?xKI2zi5b}~X7)mG%&eNci8kUP>sE(F", 'TGzE2M"iH=+%E]7ZQOzrEKtiMT=', "Z0Q5X,%", "(x]^B#g@", 'Qc"N', "`f[.J:x@", "ccRPV", "B#x_A2;P", 'c"h@', "3t`x%7N9AZ])7[z760|@", "%YOr>%?sI.LF~9_BB?iy", "Ov!)(S>=y0zILg{W%)_O", "w@|yJ)t%lOD7(UrB%*NO", "I}V5,q0<", "lCNl`&1<", ".kbuK", "G:]w9YWA", "g*Ugh<rQ", "NI]0s", "1j:BIS*cIT~qsS`r", 'Bt8s$TZ"o.5Gg.<1', "FjULQ9Tk4F))M6t,", "nt(Gz2YP)JAy6`jt", "GS*9;>*w;mz2}2B", "J2h,3mz3", "?M9{K^|3", "2^TCL1X3", ".{o+#", "BHWV", "yHTC(mj3", "t{2u", "YH4a}Nq3", "Xq<!a1+3", "JxYjKN&O", "+3>#>1CO", "t05X7nuA", "s_~K=.cM", "%!,#~qcM", "?k(#J8Kc/W`_xawR|h$V66@Y9Ps,47wR9omp9|?{IO,}LT|k7kg[V", "u]3rK|J62j*COzloDcIs//Yyg_+.vZloCf^b??)UDK*8EWO%[&", ">e,#_Zt{%3$Ed(955eLHb6_M`A&]o_|bSCx]p", "1E9M", "PqJ<", '2L"{0y>K', "x`0W45iK"]), fc(cZ = function() {
      var JJ, cJ, ZJ, FJ = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      fc(JJ = void 0, cJ = []);
      try {
        fc(JJ = Object, cJ[Dc[11]]("".__proto__.constructor.name))
      } catch (FZ) {}
      JJ: for (ZJ = Dc[0]; ZJ < FJ[Dc[4]]; ZJ++) try {
        var UJ;
        for (JJ = FJ[ZJ](), UJ = Dc[0]; UJ < cJ[Dc[4]]; UJ++)
          if (typeof JJ[cJ[UJ]] === Dc[5]) continue JJ;
        return JJ
      } catch (FZ) {}
      return JJ || this
    }() || {}, ZZ = cZ.TextDecoder, FZ = cZ.Uint8Array, UZ = cZ.fn, eZ = cZ.String || String, XZ = cZ.Array || Array, AZ = function() {
      var JJ, cJ, ZJ = new XZ(Dc[27]);
      return fc(JJ = eZ[Dc[8]] || eZ.fromCharCode, cJ = []),
        function(FJ) {
          var UJ, eJ, XJ, AJ;
          for (fc(eJ = void 0, XJ = FJ[Dc[4]], cJ[Dc[4]] = Dc[0]), AJ = Dc[0]; AJ < XJ;) fc(eJ = FJ[AJ++], eJ <= Dc[37] ? UJ = eJ : eJ <= 223 ? UJ = (eJ & Dc[28]) << Dc[7] | FJ[AJ++] & Dc[6] : eJ <= 239 ? UJ = (eJ & Dc[29]) << Dc[10] | (FJ[AJ++] & Dc[6]) << Dc[7] | FJ[AJ++] & Dc[6] : eZ[Dc[8]] ? UJ = (eJ & Dc[9]) << Dc[30] | (FJ[AJ++] & Dc[6]) << Dc[10] | (FJ[AJ++] & Dc[6]) << Dc[7] | FJ[AJ++] & Dc[6] : (UJ = Dc[6], AJ += Dc[15]), cJ[Dc[11]](ZJ[UJ] || (ZJ[UJ] = JJ(UJ))));
          return cJ.join("")
        }
    }()), sc(97) in Gc && function() {
      function JJ(JJ) {
        return JJ[Dc[1]] * Dc[13] + (JJ[Dc[0]] < Dc[0] ? Dc[12] | JJ[Dc[0]] : JJ[Dc[0]])
      }

      function cJ(JJ) {
        switch (((JJ & Dc[12]) !== Dc[0]) * Dc[1] + (JJ < Dc[0]) * Dc[14]) {
          case Dc[0]:
            return [JJ % Dc[12], Math.trunc(JJ / Dc[13])];
          case Dc[1]:
            return [JJ % Dc[12] - Dc[12], Math.trunc(JJ / Dc[13]) + Dc[1]];
          case Dc[14]:
            return [((JJ + Dc[12]) % Dc[12] + Dc[12]) % Dc[12], Math.round(JJ / Dc[13])];
          case Dc[15]:
            return [JJ % Dc[12], Math.trunc(JJ / Dc[13])]
        }
      }
      let ZJ = JJ([Dc[14], Dc[35]]),
        FJ = JJ([Dc[1], Dc[14]]),
        UJ = ZJ + FJ,
        eJ = UJ - FJ,
        XJ = eJ * Dc[14],
        AJ = XJ / Dc[14];
      fc(console.log(cJ(UJ)), console.log(cJ(eJ)), console.log(cJ(XJ)), console.log(cJ(AJ)))
    }(), (() => {
      function JJ(JJ) {
        return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
          var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
          for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
            var qJ = '<FL0iVoSRyk~sO,E5W&_D8|XlQc21xT.JCht7j6I@Be9ZwNvU+G"%A]:?K)gH[MPd}!q/r(u4f#$^z>b;mnYa`p3{*='.indexOf(cJ[AJ]);
            if (qJ !== -Dc[1])
              if (XJ < Dc[0]) XJ = qJ;
              else {
                fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                do {
                  fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                } while (eJ > Dc[9]);
                XJ = -Dc[1]
              }
          }
          return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
        }(hc[JJ]) : Yc[JJ]
      }
      const cJ = Dc[26],
        ZJ = sc(98) + JJ(99) + JJ(100),
        FJ = [Dc[0], Dc[1], Dc[14], Dc[15]].map((JJ => {
          let cJ = Dc[0];
          for (let FJ = Dc[15]; FJ >= Dc[0]; FJ--) {
            function UJ(JJ) {
              var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
              for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                var qJ = 'CB@puPDmNH|TFWjc0?r823vf5Q%dgV]^IyEt=GwJxZ*!{6q:$)}e[.`hn,;~&(AUb>X/R+<4#li"z_7Osk9KLSoaMY1'.indexOf(cJ[AJ]);
                if (qJ !== -Dc[1])
                  if (XJ < Dc[0]) XJ = qJ;
                  else {
                    fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                    do {
                      fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                    } while (eJ > Dc[9]);
                    XJ = -Dc[1]
                  }
              }
              return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
            }

            function eJ(JJ) {
              return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = UJ(hc[JJ]) : Yc[JJ]
            }

            function XJ() {
              ! function(JJ) {
                var cJ, ZJ, FJ, UJ;

                function XJ(JJ) {
                  var cJ, ZJ, FJ, UJ, eJ = [];
                  for (fc(cJ = Dc[0], ZJ = JJ.length, FJ = void 0, UJ = void 0); cJ < ZJ;) fc(FJ = JJ.charCodeAt(cJ++), FJ >= Dc[24] && FJ <= Dc[38] && cJ < ZJ ? (64512 & (UJ = JJ.charCodeAt(cJ++))) == Dc[25] ? eJ.push(((FJ & Dc[21]) << Dc[23]) + (UJ & Dc[21]) + Dc[22]) : (eJ.push(FJ), cJ--) : eJ.push(FJ));
                  return eJ
                }

                function AJ(JJ) {
                  var ZJ, FJ, UJ, eJ = JJ.length;
                  for (fc(ZJ = -Dc[1], FJ = void 0, UJ = ""); ++ZJ < eJ;)(FJ = JJ[ZJ]) > Dc[40] && fc(FJ -= Dc[22], UJ += cJ(FJ >>> Dc[23] & Dc[21] | Dc[24]), FJ = Dc[25] | FJ & Dc[21]), UJ += cJ(FJ);
                  return UJ
                }

                function qJ(JJ) {
                  if (JJ >= Dc[24] && JJ <= Dc[39]) {
                    function cJ(JJ) {
                      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                      for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                        var qJ = '{(|.u=y[/0z}2v7xW#I>tpfwMso1NC;bEZgeUnJ+6qPk&hH$R"XArBDQL`3Glc%!a4jV):^F9KSTOYdm?<5_8@,*~i]'.indexOf(cJ[AJ]);
                        if (qJ !== -Dc[1])
                          if (XJ < Dc[0]) XJ = qJ;
                          else {
                            fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                            do {
                              fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                            } while (eJ > Dc[9]);
                            XJ = -Dc[1]
                          }
                      }
                      return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                    }

                    function ZJ(JJ) {
                      return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = cJ(hc[JJ]) : Yc[JJ]
                    }
                    throw Error(ZJ(102) + ZJ(103) + ZJ(104) + JJ.toString(Dc[26]).toUpperCase() + (ZJ(105) + ZJ(106) + ZJ(107) + ZJ(108)))
                  }
                }

                function jJ(JJ, ZJ) {
                  return cJ(JJ >> ZJ & Dc[6] | Dc[27])
                }

                function YJ(JJ) {
                  var ZJ;
                  return (4294967168 & JJ) == Dc[0] ? cJ(JJ) : (ZJ = "", (4294965248 & JJ) == Dc[0] ? ZJ = cJ(JJ >> Dc[7] & Dc[28] | Dc[31]) : (4294901760 & JJ) == Dc[0] ? fc(qJ(JJ), ZJ = cJ(JJ >> Dc[10] & Dc[29] | Dc[32]), ZJ += jJ(JJ, Dc[7])) : (4292870144 & JJ) == Dc[0] && fc(ZJ = cJ(JJ >> Dc[30] & Dc[9] | Dc[33]), ZJ += jJ(JJ, Dc[10]), ZJ += jJ(JJ, Dc[7])), ZJ += cJ(JJ & Dc[6] | Dc[27]))
                }

                function hJ() {
                  var JJ;
                  if (UJ >= FJ) {
                    function cJ(JJ) {
                      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                      for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                        var qJ = '.:^[3A}&zdByxw0g7Q*CO+/D%"E;Sj]L6Mm<8VfPNcKpWsvuXlo|,H2Y{eTa9iqb#1>`U!Zt4r@FGJn(k=~_Rh$I)?5'.indexOf(cJ[AJ]);
                        if (qJ !== -Dc[1])
                          if (XJ < Dc[0]) XJ = qJ;
                          else {
                            fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                            do {
                              fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                            } while (eJ > Dc[9]);
                            XJ = -Dc[1]
                          }
                      }
                      return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                    }

                    function eJ(JJ) {
                      return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = cJ(hc[JJ]) : Yc[JJ]
                    }
                    throw Error(eJ(109))
                  }
                  if (fc(JJ = ZJ[UJ] & Dc[3], UJ++), (JJ & Dc[31]) == Dc[27]) return JJ & Dc[6];
                  throw Error(function(JJ) {
                    return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
                      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                      for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                        var qJ = 'D01"9%}(h!3Ez<LCve,kt/~M^2uZH>cApaPoK6.lw;T=g[yxmnU+|IGFfdb?j5RJ:Q8{W_7s$Vr4*BiOSY`N)X#]@q&'.indexOf(cJ[AJ]);
                        if (qJ !== -Dc[1])
                          if (XJ < Dc[0]) XJ = qJ;
                          else {
                            fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                            do {
                              fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                            } while (eJ > Dc[9]);
                            XJ = -Dc[1]
                          }
                      }
                      return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                    }(hc[JJ]) : Yc[JJ]
                  }(110))
                }

                function DJ() {
                  var JJ, cJ, XJ, AJ, jJ;
                  if (fc(void 0, cJ = void 0, XJ = void 0, AJ = void 0, jJ = void 0), UJ > FJ) throw Error(eJ(111));
                  if (UJ == FJ) return Dc[34];
                  if (fc(JJ = ZJ[UJ] & Dc[3], UJ++), (JJ & Dc[27]) == Dc[0]) return JJ;
                  if ((JJ & Dc[32]) == Dc[31]) {
                    if (fc(cJ = hJ(), jJ = (JJ & Dc[28]) << Dc[7] | cJ), jJ >= Dc[27]) return jJ;
                    {
                      function YJ(JJ) {
                        var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                        for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                          var qJ = 'nbhoX=[l$wdLq(s}9fP|HgAx@ZEY4vy6:MkJ^*8_W,R>3+%ruI{p"C<#?Oz1SaTeBQGi7/.!]0`~2&FtjmcDU;V)N5K'.indexOf(cJ[AJ]);
                          if (qJ !== -Dc[1])
                            if (XJ < Dc[0]) XJ = qJ;
                            else {
                              fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                              do {
                                fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                              } while (eJ > Dc[9]);
                              XJ = -Dc[1]
                            }
                        }
                        return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                      }

                      function DJ(JJ) {
                        return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = YJ(hc[JJ]) : Yc[JJ]
                      }
                      throw Error(DJ(112))
                    }
                  }
                  if ((JJ & Dc[33]) == Dc[32]) {
                    if (fc(cJ = hJ(), XJ = hJ(), jJ = (JJ & Dc[29]) << Dc[10] | cJ << Dc[7] | XJ), jJ >= 2048) return qJ(jJ), jJ;
                    throw Error(eJ(113))
                  }
                  if ((248 & JJ) == Dc[33] && (fc(cJ = hJ(), XJ = hJ(), AJ = hJ(), jJ = (JJ & Dc[9]) << Dc[30] | cJ << Dc[10] | XJ << Dc[7] | AJ), jJ >= Dc[22] && jJ <= 1114111)) return jJ;
                  throw Error(function(JJ) {
                    return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
                      var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                      for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                        var qJ = 'Unf6Bk~9ry8OCj:S(TPZ2.4uib1g%F*AEVlpa<;[GD#_e>cIJ`=hvs+Qxwq])Nt}HdX57?mKL!"WMoR$03{z@^|/,&Y'.indexOf(cJ[AJ]);
                        if (qJ !== -Dc[1])
                          if (XJ < Dc[0]) XJ = qJ;
                          else {
                            fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                            do {
                              fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                            } while (eJ > Dc[9]);
                            XJ = -Dc[1]
                          }
                      }
                      return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                    }(hc[JJ]) : Yc[JJ]
                  }(114))
                }
                cJ = String.fromCharCode, fc(ZJ = void 0, FJ = void 0, UJ = void 0), fc(JJ.version = function(JJ) {
                  return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
                    var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                    for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                      var qJ = '%hfDjoHAblWNFeSRp}mJ#qQBsPTI^@div,M~VwK0g]n18!42k5O[).a"cL<|tC;:zuU{9&*x`Y=>+6?(X3y7_EZr$/G'.indexOf(cJ[AJ]);
                      if (qJ !== -Dc[1])
                        if (XJ < Dc[0]) XJ = qJ;
                        else {
                          fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                          do {
                            fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                          } while (eJ > Dc[9]);
                          XJ = -Dc[1]
                        }
                    }
                    return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                  }(hc[JJ]) : Yc[JJ]
                }(115), JJ.encode = function(JJ) {
                  var cJ, ZJ, FJ, UJ, eJ = XJ(JJ);
                  for (fc(cJ = eJ.length, ZJ = -Dc[1], FJ = void 0, UJ = ""); ++ZJ < cJ;) fc(FJ = eJ[ZJ], UJ += YJ(FJ));
                  return UJ
                }, JJ.decode = function(JJ) {
                  var cJ, eJ;
                  for (fc(ZJ = XJ(JJ), FJ = ZJ.length, UJ = Dc[0], cJ = [], eJ = void 0);
                    (eJ = DJ()) !== Dc[34];) cJ.push(eJ);
                  return AJ(cJ)
                })
              }(typeof exports === eJ(116) + eJ(117) ? this.utf8 = {} : exports)
            }
            eJ(101) + "F" in Gc && XJ(), cJ = cJ << Dc[2] | ZJ[eJ(118) + eJ(119)](JJ * Dc[35] + FJ)
          }
          return cJ >>> Dc[0]
        })),
        UJ = (JJ, cJ) => JJ << cJ | JJ >>> Dc[41] - cJ,
        eJ = (JJ, cJ, ZJ, FJ, eJ) => {
          function XJ(JJ) {
            return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
              var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
              for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                var qJ = 'A<Ptxn"_@BS/9[T0j6Z>:emy^+MlWRDwIr7?q8QEN1O*i&.4}K=|;)v!%#2(${Fc,CLhp]f5g~oHGud`z3XJVsUYabk'.indexOf(cJ[AJ]);
                if (qJ !== -Dc[1])
                  if (XJ < Dc[0]) XJ = qJ;
                  else {
                    fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                    do {
                      fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                    } while (eJ > Dc[9]);
                    XJ = -Dc[1]
                  }
              }
              return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
            }(hc[JJ]) : Yc[JJ]
          }
          XJ(120) + "7" in Gc && function() {
            var JJ = function() {
              var JJ, cJ, ZJ = Dc[0];

              function FJ(JJ) {
                return YJ(qJ(sJ(JJ)))
              }

              function UJ(JJ, cJ) {
                return YJ(jJ(sJ(JJ), sJ(cJ)))
              }

              function eJ(JJ, cJ) {
                return hJ(jJ(sJ(JJ), sJ(cJ)))
              }

              function AJ(JJ, cJ, ZJ) {
                return DJ(jJ(sJ(JJ), sJ(cJ)), ZJ)
              }

              function qJ(JJ) {
                return GJ(KJ(nJ(JJ), JJ.length * Dc[2]))
              }

              function jJ(JJ, cJ) {
                var ZJ, FJ, UJ = nJ(JJ);
                UJ.length > Dc[26] && (UJ = KJ(UJ, JJ.length * Dc[2]));
                var eJ = Array(Dc[26]),
                  XJ = Array(Dc[26]);
                for (ZJ = Dc[0]; ZJ < Dc[26]; ZJ++) fc(eJ[ZJ] = 909522486 ^ UJ[ZJ], XJ[ZJ] = 1549556828 ^ UJ[ZJ]);
                return FJ = KJ(eJ.concat(nJ(cJ)), Dc[36] + cJ.length * Dc[2]), GJ(KJ(XJ.concat(FJ), Dc[36] + 256))
              }

              function YJ(JJ) {
                var cJ, FJ, UJ, eJ;

                function AJ(JJ) {
                  var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ = 'PAQqOMfXmbpkIorWSKdDJtaBVsCgnlFNGchLYEZ{Ue3&_H/[:Rjui0?8+%2^4z#69*$;<v=w@1|5}(>7xy`!]),"~T.';
                  for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                    var jJ = qJ.indexOf(cJ[AJ]);
                    if (jJ !== -Dc[1])
                      if (XJ < Dc[0]) XJ = jJ;
                      else {
                        fc(XJ += jJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                        do {
                          fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                        } while (eJ > Dc[9]);
                        XJ = -Dc[1]
                      }
                  }
                  return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                }

                function qJ(JJ) {
                  return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = AJ(hc[JJ]) : Yc[JJ]
                }
                for (fc(cJ = ZJ ? XJ(126) + XJ(Dc[37]) + qJ(Dc[27]) : qJ(129) + qJ(130) + qJ(131), FJ = "", UJ = void 0), eJ = Dc[0]; eJ < JJ.length; eJ++) fc(UJ = JJ.charCodeAt(eJ), FJ += cJ.charAt(UJ >>> Dc[35] & Dc[29]) + cJ.charAt(UJ & Dc[29]));
                return FJ
              }

              function hJ(cJ) {
                var ZJ, FJ, UJ, eJ;

                function XJ(JJ) {
                  var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ = 'oANYXBjVLmHKg&q.`/+RJx=C"PbrQsZ1G4w(>n,fck~tzu{lS6!8DEeOdTh)}aWF;IMUp_<9]%^5@7y32$|:*[v#?i0';
                  for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                    var jJ = qJ.indexOf(cJ[AJ]);
                    if (jJ !== -Dc[1])
                      if (XJ < Dc[0]) XJ = jJ;
                      else {
                        fc(XJ += jJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                        do {
                          fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                        } while (eJ > Dc[9]);
                        XJ = -Dc[1]
                      }
                  }
                  return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
                }

                function AJ(JJ) {
                  return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = XJ(hc[JJ]) : Yc[JJ]
                }
                for (fc(ZJ = AJ(132) + AJ(133) + AJ(134) + AJ(135) + AJ(136), FJ = "", UJ = cJ.length), eJ = Dc[0]; eJ < UJ; eJ += Dc[15]) {
                  var qJ, jJ = cJ.charCodeAt(eJ) << Dc[26] | (eJ + Dc[1] < UJ ? cJ.charCodeAt(eJ + Dc[1]) << Dc[2] : Dc[0]) | (eJ + Dc[14] < UJ ? cJ.charCodeAt(eJ + Dc[14]) : Dc[0]);
                  for (qJ = Dc[0]; qJ < Dc[35]; qJ++) eJ * Dc[2] + qJ * Dc[7] > cJ.length * Dc[2] ? FJ += JJ : FJ += ZJ.charAt(jJ >>> Dc[7] * (Dc[15] - qJ) & Dc[6])
                }
                return FJ
              }

              function DJ(JJ, cJ) {
                var ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ = cJ.length;
                for (ZJ = Array(), FJ = Array(Math.ceil(JJ.length / Dc[14])), XJ = Dc[0]; XJ < FJ.length; XJ++) FJ[XJ] = JJ.charCodeAt(XJ * Dc[14]) << Dc[2] | JJ.charCodeAt(XJ * Dc[14] + Dc[1]);
                for (; FJ.length > Dc[0];) {
                  for (fc(jJ = Array(), qJ = Dc[0]), XJ = Dc[0]; XJ < FJ.length; XJ++) fc(qJ = (qJ << Dc[26]) + FJ[XJ], AJ = Math.floor(qJ / YJ), qJ -= AJ * YJ), (jJ.length > Dc[0] || AJ > Dc[0]) && (jJ[jJ.length] = AJ);
                  fc(ZJ[ZJ.length] = qJ, FJ = jJ)
                }
                for (UJ = "", XJ = ZJ.length - Dc[1]; XJ >= Dc[0]; XJ--) UJ += cJ.charAt(ZJ[XJ]);
                for (eJ = Math.ceil(JJ.length * Dc[2] / (Math.log(cJ.length) / Math.log(Dc[14]))), XJ = UJ.length; XJ < eJ; XJ++) UJ = cJ[Dc[0]] + UJ;
                return UJ
              }

              function sJ(JJ) {
                var cJ, ZJ, FJ, UJ = "";
                for (cJ = -Dc[1]; ++cJ < JJ.length;) fc(ZJ = JJ.charCodeAt(cJ), FJ = cJ + Dc[1] < JJ.length ? JJ.charCodeAt(cJ + Dc[1]) : Dc[0]), Dc[24] <= ZJ && ZJ <= Dc[38] && Dc[25] <= FJ && FJ <= Dc[39] && fc(ZJ = Dc[22] + ((ZJ & Dc[21]) << Dc[23]) + (FJ & Dc[21]), cJ++), ZJ <= Dc[37] ? UJ += String.fromCharCode(ZJ) : ZJ <= 2047 ? UJ += String.fromCharCode(Dc[31] | ZJ >>> Dc[7] & Dc[28], Dc[27] | ZJ & Dc[6]) : ZJ <= Dc[40] ? UJ += String.fromCharCode(Dc[32] | ZJ >>> Dc[10] & Dc[29], Dc[27] | ZJ >>> Dc[7] & Dc[6], Dc[27] | ZJ & Dc[6]) : ZJ <= 2097151 && (UJ += String.fromCharCode(Dc[33] | ZJ >>> Dc[30] & Dc[9], Dc[27] | ZJ >>> Dc[10] & Dc[6], Dc[27] | ZJ >>> Dc[7] & Dc[6], Dc[27] | ZJ & Dc[6]));
                return UJ
              }

              function nJ(JJ) {
                var cJ, ZJ = Array(JJ.length >> Dc[14]);
                for (cJ = Dc[0]; cJ < ZJ.length; cJ++) ZJ[cJ] = Dc[0];
                for (cJ = Dc[0]; cJ < JJ.length * Dc[2]; cJ += Dc[2]) ZJ[cJ >> Dc[42]] |= (JJ.charCodeAt(cJ / Dc[2]) & Dc[3]) << Dc[43] - cJ % Dc[41];
                return ZJ
              }

              function GJ(JJ) {
                var cJ, ZJ = "";
                for (cJ = Dc[0]; cJ < JJ.length * Dc[41]; cJ += Dc[2]) ZJ += String.fromCharCode(JJ[cJ >> Dc[42]] >>> Dc[43] - cJ % Dc[41] & Dc[3]);
                return ZJ
              }

              function fJ(JJ, cJ) {
                return JJ >>> cJ | JJ << Dc[41] - cJ
              }

              function xJ(JJ, cJ) {
                return JJ >>> cJ
              }

              function rJ(JJ, cJ, ZJ) {
                return JJ & cJ ^ ~JJ & ZJ
              }

              function vJ(JJ, cJ, ZJ) {
                return JJ & cJ ^ JJ & ZJ ^ cJ & ZJ
              }

              function mJ(JJ) {
                return fJ(JJ, Dc[14]) ^ fJ(JJ, Dc[19]) ^ fJ(JJ, 22)
              }

              function QJ(JJ) {
                return fJ(JJ, Dc[7]) ^ fJ(JJ, Dc[52]) ^ fJ(JJ, 25)
              }

              function EJ(JJ) {
                return fJ(JJ, Dc[9]) ^ fJ(JJ, Dc[30]) ^ xJ(JJ, Dc[15])
              }

              function VJ(JJ) {
                return fJ(JJ, 17) ^ fJ(JJ, Dc[44]) ^ xJ(JJ, Dc[23])
              }

              function KJ(JJ, ZJ) {
                var FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225);
                for (FJ = new Array(Dc[45]), fc(JJ[ZJ >> Dc[42]] |= Dc[27] << Dc[43] - ZJ % Dc[41], JJ[(ZJ + Dc[45] >> Dc[51] << Dc[35]) + Dc[29]] = ZJ), DJ = Dc[0]; DJ < JJ.length; DJ += Dc[26]) {
                  for (fc(UJ = fJ[Dc[0]], eJ = fJ[Dc[1]], XJ = fJ[Dc[14]], AJ = fJ[Dc[15]], qJ = fJ[Dc[35]], jJ = fJ[Dc[42]], YJ = fJ[Dc[7]], hJ = fJ[Dc[9]]), sJ = Dc[0]; sJ < Dc[45]; sJ++) fc(sJ < Dc[26] ? FJ[sJ] = JJ[sJ + DJ] : FJ[sJ] = yJ(yJ(yJ(VJ(FJ[sJ - Dc[14]]), FJ[sJ - Dc[9]]), EJ(FJ[sJ - Dc[29]])), FJ[sJ - Dc[26]]), nJ = yJ(yJ(yJ(yJ(hJ, QJ(qJ)), rJ(qJ, jJ, YJ)), cJ[sJ]), FJ[sJ]), GJ = yJ(mJ(UJ), vJ(UJ, eJ, XJ)), hJ = YJ, YJ = jJ, jJ = qJ, qJ = yJ(AJ, nJ), AJ = XJ, XJ = eJ, eJ = UJ, UJ = yJ(nJ, GJ));
                  fc(fJ[Dc[0]] = yJ(UJ, fJ[Dc[0]]), fJ[Dc[1]] = yJ(eJ, fJ[Dc[1]]), fJ[Dc[14]] = yJ(XJ, fJ[Dc[14]]), fJ[Dc[15]] = yJ(AJ, fJ[Dc[15]]), fJ[Dc[35]] = yJ(qJ, fJ[Dc[35]]), fJ[Dc[42]] = yJ(jJ, fJ[Dc[42]]), fJ[Dc[7]] = yJ(YJ, fJ[Dc[7]]), fJ[Dc[9]] = yJ(hJ, fJ[Dc[9]]))
                }
                return fJ
              }

              function yJ(JJ, cJ) {
                var ZJ = (JJ & Dc[40]) + (cJ & Dc[40]);
                return (JJ >> Dc[26]) + (cJ >> Dc[26]) + (ZJ >> Dc[26]) << Dc[26] | ZJ & Dc[40]
              }
              return JJ = "", cJ = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
                hex: FJ,
                b64: eJ,
                any: AJ,
                hex_hmac: UJ,
                b64_hmac: eJ,
                any_hmac: AJ
              }
            }();
            console.log(JJ)
          }(), fc(JJ[cJ] += JJ[ZJ], JJ[eJ] = UJ(JJ[eJ] ^ JJ[cJ], Dc[26]), JJ[FJ] += JJ[eJ], JJ[ZJ] = UJ(JJ[ZJ] ^ JJ[FJ], Dc[10]), JJ[cJ] += JJ[ZJ], JJ[eJ] = UJ(JJ[eJ] ^ JJ[cJ], Dc[2]), JJ[FJ] += JJ[eJ], JJ[ZJ] = UJ(JJ[ZJ] ^ JJ[FJ], Dc[9]))
        };
      qc = (JJ, ZJ, UJ, XJ) => {
        function AJ(JJ) {
          return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
            var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
            for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
              var qJ = 'U93DuA!(+<V/xR?H0;yG4WXYI=q[K#B7CQ`p&2jlcsv8_>|Pz6O~.,{1$)weMSFkJ"tTE]5^*dmhLa}:%N@ofrbZing'.indexOf(cJ[AJ]);
              if (qJ !== -Dc[1])
                if (XJ < Dc[0]) XJ = qJ;
                else {
                  fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                  do {
                    fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                  } while (eJ > Dc[9]);
                  XJ = -Dc[1]
                }
            }
            return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
          }(hc[JJ]) : Yc[JJ]
        }
        AJ(137) + "e" in Gc && function() {
          var JJ = function(JJ) {
            var cJ, ZJ, FJ, UJ, eJ = JJ.length;
            for (fc(cJ = [], ZJ = Dc[0], FJ = Dc[0], JJ.sort(((JJ, cJ) => JJ - cJ))), UJ = Dc[0]; UJ < eJ; UJ++)
              if (!(UJ > Dc[0] && JJ[UJ] === JJ[UJ - Dc[1]]))
                for (fc(ZJ = UJ + Dc[1], FJ = eJ - Dc[1]); ZJ < FJ;)
                  if (JJ[UJ] + JJ[ZJ] + JJ[FJ] < Dc[0]) ZJ++;
                  else if (JJ[UJ] + JJ[ZJ] + JJ[FJ] > Dc[0]) FJ--;
            else {
              for (cJ.push([JJ[UJ], JJ[ZJ], JJ[FJ]]); ZJ < FJ && JJ[ZJ] === JJ[ZJ + Dc[1]];) ZJ++;
              for (; ZJ < FJ && JJ[FJ] === JJ[FJ - Dc[1]];) FJ--;
              fc(ZJ++, FJ--)
            }
            return cJ
          };
          console.log(JJ)
        }();
        const qJ = new DataView(ZJ[AJ(Dc[50])], ZJ[AJ(139) + AJ(140)], jc),
          jJ = new Uint32Array(cJ);
        fc(jJ[AJ(Dc[46])](FJ), jJ[AJ(Dc[46])](JJ, Dc[35]), jJ[Dc[19]] = qJ[AJ(Dc[47]) + AJ(Dc[48])](Dc[0], Dc[49]), jJ[Dc[20]] = qJ[AJ(Dc[47]) + AJ(Dc[48])](Dc[35], Dc[49]), jJ[Dc[29]] = qJ[AJ(Dc[47]) + AJ(Dc[48])](Dc[2], Dc[49]));
        const YJ = new Uint32Array(cJ),
          hJ = new Uint8Array(YJ[AJ(Dc[50])]);
        for (let DJ = Dc[0], sJ = UJ; DJ < XJ[AJ(144)]; DJ += cJ * Dc[35], sJ++) {
          function nJ(JJ) {
            var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
            for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
              var qJ = '1JKYWHBaEIFDhbXLeAUu"oG2_v>!Z#~N:kC[(l9cOj%R+ri=fq}?.n5wM]Q&P$`S7^)/d<3;gpTV|{0m@ys6tx8,*z4'.indexOf(cJ[AJ]);
              if (qJ !== -Dc[1])
                if (XJ < Dc[0]) XJ = qJ;
                else {
                  fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                  do {
                    fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                  } while (eJ > Dc[9]);
                  XJ = -Dc[1]
                }
            }
            return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
          }

          function GJ(JJ) {
            return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = nJ(hc[JJ]) : Yc[JJ]
          }

          function fJ() {
            function JJ(JJ) {
              return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = function(JJ) {
                var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
                for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                  var qJ = 'gOAQTMjzu5Ef~?)py*^U]PdJYR%$os2eL`3k@icBF&4+l0;CWr1X}/7ND<n|[bSh.qIGvZK8H!V#,t_m(>{w"6=9x:a'.indexOf(cJ[AJ]);
                  if (qJ !== -Dc[1])
                    if (XJ < Dc[0]) XJ = qJ;
                    else {
                      fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                      do {
                        fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                      } while (eJ > Dc[9]);
                      XJ = -Dc[1]
                    }
                }
                return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
              }(hc[JJ]) : Yc[JJ]
            }

            function cJ(JJ) {
              if (!JJ) return -Dc[1];
              const ZJ = cJ(JJ.left),
                FJ = cJ(JJ.right),
                UJ = Math.abs(ZJ - FJ);
              if (ZJ === 1 / 0 || FJ === 1 / 0 || UJ > Dc[1]) return 1 / 0;
              return Math.max(ZJ, FJ) + Dc[1]
            }
            window[JJ(146) + JJ(147) + JJ(148) + "_"] = {
              buildCharacterMap: function(JJ) {
                const cJ = {};
                for (let ZJ of JJ.replace(/[^w]/g, "").toLowerCase()) cJ[ZJ] = cJ[ZJ] + Dc[1] || Dc[1];
                return cJ
              },
              isAnagrams: function(JJ, cJ) {
                const ZJ = buildCharMap(JJ),
                  FJ = buildCharMap(cJ);
                for (let UJ in ZJ)
                  if (ZJ[UJ] !== FJ[UJ]) return Dc[34];
                return Object.keys(ZJ).length !== Object.keys(FJ).length ? Dc[34] : Dc[49]
              },
              isBalanced: function(JJ) {
                return cJ(JJ) !== 1 / 0
              },
              getHeightBalanced: cJ
            }
          }
          AJ(145) in Gc && fJ(), fc(jJ[Dc[10]] = sJ, YJ[AJ(Dc[46])](jJ));
          for (let rJ = Dc[0]; rJ < Dc[23]; rJ++) {
            function vJ(JJ) {
              var cJ, ZJ, FJ, UJ, eJ, XJ, AJ;
              for (fc(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = Dc[0], eJ = Dc[0], XJ = -Dc[1]), AJ = Dc[0]; AJ < ZJ; AJ++) {
                var qJ = 'vtMDCWLfSpVR=Qeha?nsJ;|Uc+0r)uj[#xbwdy5ok^4"<}_:%7T,1{gHl!i~z$A/OP3GZ2]ImEK98q6XB.@(F&Y*`>N'.indexOf(cJ[AJ]);
                if (qJ !== -Dc[1])
                  if (XJ < Dc[0]) XJ = qJ;
                  else {
                    fc(XJ += qJ * Dc[16], UJ |= XJ << eJ, eJ += (XJ & Dc[17]) > Dc[18] ? Dc[19] : Dc[20]);
                    do {
                      fc(FJ.push(UJ & Dc[3]), UJ >>= Dc[2], eJ -= Dc[2])
                    } while (eJ > Dc[9]);
                    XJ = -Dc[1]
                  }
              }
              return XJ > -Dc[1] && FJ.push((UJ | XJ << eJ) & Dc[3]), nc(FJ)
            }

            function mJ(JJ) {
              return typeof Yc[JJ] === Dc[5] ? Yc[JJ] = vJ(hc[JJ]) : Yc[JJ]
            }
            mJ(149), fc(eJ(YJ, Dc[0], Dc[35], Dc[2], Dc[10]), eJ(YJ, Dc[1], Dc[42], Dc[51], Dc[19]), eJ(YJ, Dc[14], Dc[7], Dc[23], Dc[20]), eJ(YJ, Dc[15], Dc[9], Dc[52], Dc[29]), eJ(YJ, Dc[0], Dc[42], Dc[23], Dc[29]), eJ(YJ, Dc[1], Dc[7], Dc[52], Dc[10]), eJ(YJ, Dc[14], Dc[9], Dc[2], Dc[19]), eJ(YJ, Dc[15], Dc[35], Dc[51], Dc[20]))
          }
          for (let QJ = Dc[0]; QJ < cJ; QJ++) YJ[QJ] += jJ[QJ];
          const xJ = Math[AJ(155)](cJ * Dc[35], XJ[GJ(156)] - DJ);
          for (let EJ = Dc[0]; EJ < xJ; EJ++) {
            function VJ() {
              var JJ = function(JJ) {
                fc(this.qh = JJ, this.length = Dc[0], this.map = {}, this.head = Dc[53], this.tail = Dc[53])
              };
              fc(JJ.prototype.get = function(JJ) {
                var cJ = this.map[JJ];
                return cJ ? (this.remove(cJ), this.insert(cJ.key, cJ.val), cJ.val) : -Dc[1]
              }, JJ.prototype.put = function(JJ, cJ) {
                this.map[JJ] ? (this.remove(this.map[JJ]), this.insert(JJ, cJ)) : this.length === this.qh ? (this.remove(this.head), this.insert(JJ, cJ)) : (this.insert(JJ, cJ), this.length++)
              }, JJ.prototype.remove = function(JJ) {
                var cJ, ZJ = JJ.prev;
                (cJ = JJ.next) && (cJ.prev = ZJ), ZJ && (ZJ.next = cJ), this.head === JJ && (this.head = cJ), this.tail === JJ && (this.tail = ZJ), delete this.map[JJ.key]
              }, JJ.prototype.insert = function(JJ, cJ) {
                var ZJ = new List(JJ, cJ);
                fc(this.tail ? (this.tail.next = ZJ, ZJ.prev = this.tail, this.tail = ZJ) : (this.tail = ZJ, this.head = ZJ), this.map[JJ] = ZJ)
              }, console.log(JJ))
            }
            GJ(157) in Gc && VJ(), XJ[DJ + EJ] ^= hJ[EJ]
          }
        }
      }
    })();
    const vc = [147, 0, 1, 143, "c", "a", 9, 232, "e", "f", "d", 8, 255, "length", "b", 3, 4, "undefined", void 0, 2, 233, 107, 70, 63, 6, "fromCodePoint", 7, 12, "push", 123, 91, 8191, 88, 13, 14, 33, 62, "g", 44, 127, 128, 86, 40, 177, 37, !1, 5, 41, 167, "h", 105, 31, 11, 198, "i", 97, 76, 1023, 228, 65536, 209, 10, 55296, 56320, 181, 201, 168, 15, 18, 126, 183, 192, 248, 77, 184, 160, 224, 229, 221, 240, 16, 169, 48, 145, !0, 220, 87, 171, 102, 210, 35, 214, 99, 175];

    function mc(...JJ) {
      return JJ[vc[13]] = vc[2], typeof ZZ !== vc[17] && ZZ ? (new ZZ).decode(new FZ(JJ[vc[1]])) : typeof UZ !== vc[17] && UZ ? UZ.from(JJ[vc[1]]).toString("utf-8") : AZ(JJ[vc[1]])
    }

    function Qc() {}

    function Ec() {
      Ec = function() {}
    }
    Ec(xc = {}, rc = ["c/G5>Wg%?", 'ub"ANvQ', "TLt?e@4FqxJ5(b/guTn7w$c]a&pJ_b9D=9(o", "Iv([RK#^?", ":vnMQHB$|%kyc#yW_:VoG<m$w/M+A9v[rx:5Yc.r%+6&u9", "gxb/rs4R)BuncH_y", "^9vo^gwZK/~F9G>ev/E#,eGDQ%=A+Ci]t77)REFPHnq1Q1K]3I9", 'c[E`G<W*1H4ulZJD=7[`be|]:B_F*"MgZR', '!t629h,FQ1+r#ys|7p</&g7;"onFP31:', 'jtS)u>+,]iNbB;&Oevu?ES.xM7*ckGV4+(9I"Wd4[%Dg4W@gZ(9', 'k8b?szOFK;QMIy$eWv%zB5.;X+;OC"@y*V}F', "<(NAW)2h[1qJ1,sP4pUMw${`r7pH8HX2/M!/P{x!F", "Qxn<[+{W~C[(39KyTOeA?>Y]X4RtcZ7PEM.Msbj&>niC?.x![$95Zq=R", "##m5Ir.V2C`", 'Avj#>c;P8|{suW"|9hp#=umk(|"7eJ82kHz?@S0;9/o)D:&', "&<F/qG<|ftUDR", "{/%oJGADL&", 'f_76;W2Z4%,F?";(h[(5j6xrQaD>rko', "Tv1*8x+!7405Tk2rVt{*@cI*o4", "AnjFZxp]Fzqn~;R4#762I/1;Kxx5C:OZ%p9I0gzF(;ot!kN|M/_F#u,|97", "S?%oN{R;v^gb6<KjFaLu;cmk", "HO(hQbDZZ(COe:4{S1]*yq``[D:y1NV4|:AG@x?Zw%", '4/N[&B];#7;i^qwWxMx?"WDi5C6D[:4:R89', "s(!Aiu]xGHH", '"/?7UGGi>=]4R', "<Mo)6W+,Niza.ZB*r7[`7>Q", '41$2ageFmn>WaNh:,xuM%EdxA4;@n+6{dt.M!c"cF;lIYHoPUJ9', "y$0IVp{W$n/U^b:WZprV(GPV41[z+CzVf4*zP+=R", "WhP*[p?$RDMZuy%", 'D$)"d,+r,8', "^B(F;zQiVC", "hMZMyNm$mC=s(+&|=/u?", '%O5hqcV,.H%v6N?DMM;z"zYVK^t5F:Q~x:{/HesR', '</!29=nE++[Cg}"Z4MK5g<b^)47MdCWZaC:uKqBE#', "gMz?gUU$=;U<W+D{JM1S_nLFM^BJU9", "1xnM`5V=.7B$|NzV~VoIEGC`r7E0W9FOsT5[_rfUY;=wvq;|uQ", '"p,74x>M8/ObS#}!"rd<3', "~MVo|N;,Q8ry8bkO.Mc[KG>]=;[g{q%:*Om5esIEFzyg9:pO1$R", "~B[sX6=Vb8%gR", '9LBzN@6Dv/Ry1GhPkxkyG@w%L+iCIp2~<bA"', 'u~4*.WxrI%_A%9[~!(#"^KFc:B3v&9tW3?H5ea~`tHdW]b&Nu[@&|qEE)4', 'rH=AIs*%=ii`&yG2nM^7/e)xqx/FV#yW"r,sSr<F+&C!B<G2m(oMXqQ', "${$2JB4,0%x`}WU:4pc`cWD`||4B43^~y(EApW($7o^CkOv*b(k", 'ghw&~}4VbD_ATGOZYex?L/@i3wx<s#7[%h#G*/u$"', "E_a`:sVVY|)0%eiWjpu?S+miBDo)7Hh:]47?H$dYAB8g{9.g3R", "V/hM.S^*U%dJ+y=gqJK53xBklik@GONDsB4?,@$$0%<sxPUg=Q", 'gbs&Kc8RVC,oiPt!4D~u<J3ESxDoh.cPWbp2^zz,"|~FR', "c(P*1p2D}+lV;H^!mvR", "[v2zg`;Rn4O9]#Z]U_esk=m{)4$oxbWZQ<$#uH4;a=+CZ92!}BR", "#I+Vn$Z*4H@IR", ".nK5Bgo`)Bvs{38g^OsMiKQDIHyorGr*ggP*gYb*</<<6c&", "5!}oMiu*F", 'jI"oQiX%#', "B+[?5G*`*+>HBP.yk#}o$@~`Wx.0c;l]049", "cbVo_UpMY;", "8pj[!`J`VCYWw;i]Z{8oiMRaH&}5o}hPqtdA}50]F", '`?Mu8Y$$5+]cf#C|1:"[>zBD8^`DGOJZ6Tq=O{w$O|B2R', "vM!2RWR=wxBJ$k)N?pmo", ".937ea**{(VFrC+WLBgIHHWZwaC>2#*rqspsB=8R", 'G{KG6NLxQ1`s&p9Oe4rVm/kZ)+."%97:&Ib/(+=,w/PB~<][>sU7C', 'R{KG(+uZUH2[G;IZEth5x=9]`|Ztj"X2E+D)1GrFXCqT^1~NkH5F6.MR', '5+Dyzg?Z=|h5!yG{g1E[ag/$h(nA3yFOcBAhW}!|IxtC[N"|mxqV0zQ', "{Vb<&hm`~T", 'D7"FN<uD^a.<#qT|%1TIFEDJE^*>S<]P+C&S/JSaxtkOL@X2CpcFwK0r"', ",B2z1AX%siI`RKf3SV$FFgz,*1h<zNzgz!Ah=aw$S7Tb]u`g?R", ',xp?4ztR6T+C"33:v[TuI+m`~+x<JcSZVve/a>hDC8]Z9:DeSOLVg{3k', "J(X&|.qYEit5T9IOjx{*)Gw*ZtC(&1)P*{%Vgv>V8|qa43D(", "64^7#gtV9xmo[G?P`ba2?>ji_&?kMi%NE?d`Qb~%1DnrdCvP0sE#7EzY3H!oR", "?<GV&hD`EiC>dCc[DHsIQEE%I8Xhm,:~d~*[4B,,XBIZzJRL,pX&", "o#(5FG{W_TEJOO#L6OH=fp1|4a2[>:XVT#^7UGjk", "v7^sJHMV<x2Abyzr4:]))c{*!^XWR", "2Ve7rs)F#|C(W+Q~!MG&cup]l(JJ^#[Of?>s*YR=E^UP;K7", "z:P/Bg}RJ|`DCO?D%#9", "Gbz2m@4,lt`A,i9Lpb|hQW7|mTzrcH`2XCM5>BaMRH5nn9", "6OW5H>pVf(UJ]<?", "3a0GAAcak%D)lUKy)B>/*", 'mxv5JhsVD|usvu,es??`YpzV249>gCaVZpN[qx"R', "rxlMSYm{)+sV^9", "f4C`}i[|sC<AryAeL!&*>NDh$&4vypMg8%9", "Vpn?F.LcgHVcKqX]8/5[aHI`F", '@OmVm//*6ak7,@vDeB!2YG3Zit`nGPX~n/,A"u{i,DQv+NTN8v?7', ",B4/S}>M`7k@]3TNKb3*uzd!Bnl^]uM]~hvo", "::/[?=@iY;k;HySZSOAGahkZL+V>m,RO9Hf?NvjiT4", "V!!AobiZI%DbR", "J7J#gY{^:C&iK,D{3a#[NvG{0x1umpwOQrXIt=Q", '_tN2?H"=#xJacu]eG%H=TbuZ3xlJ]O?NLx]/phHh?', "4MV21x4;0/`n+i8{9<XIXxAZb=nJn#ANm4^7?z;.uiMaR", "c_GMvg$k%8I[ic#Z!Ib7AcL;<7f5O3pDB9d<W)xrftb[|khPZ/Iyj{W*?", 'pTcGQiO,U12Bi<pPI9q"pBfZrxVyQpQD8!k', 's+w&Sr(k28]F.U&N9L"[.SXUBnGn6PBV+b6`w.*k', "O4hM,M%ka%*t=3?N:h_F0u5>7zO9#ePVFp)G)b1,q|D@tWvZ", "9!Ep#WX`R/K=J.u|#I0Vf,0!d;F*QeC", "mB8oCcP|!^P98bOP4:_h>AbD)C>j(po(", "+BU<J=NDF(<[P31", "OV#V;c,Ya=Iuaq+~)nu<*}:Zw7jozJ<{c/jz5_?~tHT)cuRLp79", 'vgT5^Hd4Q1nTHyY]#%Q7I6ID4/0n(1Yr~4p2tzj&"', "@+Ho#zZZG7VZwPU:%%B#", ">tB7v>tR7(^$^+o", 'l(Y[q6>]5CnC`+6:K9qIvzT|gxe`j"P!tMZ<[/m$T43>w;OZ$x;hkE/*q7nrR', "8$DVP,*k28q0vWsP6(x?8A($3xH8my1", 'FI`V0u|]#x"?E<7|LvEFS6|Rx(m', "YCaArY_rUDXJw;T", 'UJO[Re}]<7vTzibg4a=F;G%W"', '6PJpW+*Z"^LU)+_|BO"GUAQ', "O1+=&zYF8^ir$<^*qOl/OvnU_8l0;K+!]V&*f6;;g7G8R", 'Qa@"b@Q*,nB$lH)e4:<M{sADD%d5|Cx]ibQykE2k', 'G/WV*/gZOiNsq+U:Q88hb)K`24>D83FN%{A"1B.x&o1By@e[8R', "1<7/*,Q", "+g+&,af%0/3>P3e[7vNsUWHk", "Zp9oXA&*B+DMTG0[PpSu!q^$3%qIX.JNc~Czg<8cbDz", 'i!0&3AoJk%(@?"byHC7y1q~`d^VgRK3yY_tMl+E%.%', 'O!fs;h"P|x7)uysPx/+&c=4.stFi6.+~', "@+4/qq0!VD,<f1oN/%gM0>2D9^M8rJI!ABJ7I`:k)&", "mLj#X`!cJi%>gN<e!7])Q$w*<Dus):0WT#EF#u;RxiB`YZYg^vOA(`WD?", 'Y+D5x=m^g/VBL:x2fBmFK_c]41pHpCJDMp!S/Oh*281>{3Z]"vLVccVr07fhR', "h(`VR=.r+&lJL9${(/d/>AM];B2b;HhNy{9u9ENk", 'xp,#r6D$Kx)D@.<{ABqIlY=r>DAhB@EjKsMVUGr.bH.1*"T(z9KGzenvZ(l&R', "KJN#!,jh8;", "wvPIN{5V*wCu>1y2dJ>2qcL;k|vs@N?Dm!Vzqx5FgH}8eCX]", ';x0"iJrx.D$wR', "dB_zLOm%}+Iu9G)P|V&7lpX`HC1u1+o", "Utx&sxm`R%6Pup#NCI:yHJ2Wyt%;sHFO", "O/h&qc,,RHKhUqa4*xB`^>f$%BCvSP4yN:J2JHQ", "YMMISY0r@1}RRK={w_k", "XgVo..jk", ")VTSjkX9", "bDBFGPaa", "@3~kZeR4", ")*dk.gMS", "DUHn.|Y4", ".R~k}p#4", ";GJDU6z4", "6w?ADnS", "q3MQzf]*tUdO79UK", "HwIV[L:v=T*lW<TL", ")^Z,J#q#RTcTh4bJ", "@*stynYE`*p,3z1r", ".EKVzf5*Lk;,D&^", "X9/k>uA4", ")##3&/*n", "N5qET]G$", "O;lUT@2$", "0nCQ5r4O", "h5czED.$", "dfRh&YnW", "_1ls/Sz=", "P~|A:cN=", "?fsH1w]", "[Hm)uAY=", "Ho52th3=", "Wy|<+S{=", "WyWsH", "Ux67S|yX@P~/e0YCuxAL04B", "ci39Wt+*{D`_;0e<%R[kn+qzyOZamxN", "%Gj>=IY4yDM{]eb.iGvmeCg", 'I}MWV.mlgehpYyXP0QqGHmvB#92>&J"', '@kmcJPOi[XACZMNYhf*bLOQwgt:9"7S', "F~ynNGS412fznZI%|sy5nko4GF2", "e3!&k~]", "yjYg0[SI", "GH*V", "L3d|99DV$^O", ",](bqFnx", "<8!tZ9:Z", "l~q/3_4K", "tSLR:_fK", "v~21", "~~`sc_5K", "_,U^z", "G~[vB^`", "G~8romTK", "e~B1", "BWhBm),f", "TJp_ns#O", "zR(uWogf", "`^L`UFGk`9", "3U.uXWzO", "MhPQ", "w^5Q#", "WdgQ", "PUt`B/.", "rJq;&7zO"]), Ec(cZ = function(...JJ) {
      Ec(JJ[vc[13]] = vc[1], JJ[vc[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], JJ[vc[14]] = vc[18], JJ[vc[4]] = []);
      try {
        Ec(JJ[vc[14]] = Object, JJ[vc[4]][vc[28]]("".__proto__.constructor.name))
      } catch (rc) {}
      JJ: for (JJ[vc[15]] = vc[1]; JJ[vc[15]] < JJ[vc[5]][vc[13]]; JJ[vc[15]]++) try {
        for (JJ[vc[14]] = JJ[vc[5]][JJ[vc[15]]](), JJ[vc[16]] = vc[1]; JJ[vc[16]] < JJ[vc[4]][vc[13]]; JJ[vc[16]]++)
          if (typeof JJ[vc[14]][JJ[vc[4]][JJ[vc[16]]]] === vc[17]) continue JJ;
        return JJ[vc[14]]
      } catch (rc) {}
      return JJ[vc[14]] || this
    }() || {}, ZZ = cZ.TextDecoder, FZ = cZ.Uint8Array, UZ = cZ.fn, eZ = cZ.String || String, XZ = cZ.Array || Array, AZ = function(...JJ) {
      return Ec(JJ[vc[13]] = vc[1], JJ[vc[5]] = new XZ(vc[40]), JJ[vc[29]] = eZ[vc[25]] || eZ.fromCharCode, JJ[vc[19]] = []),
        function(...cJ) {
          for (Ec(cJ[vc[13]] = vc[2], cJ[-vc[22]] = vc[18], cJ[vc[21]] = vc[18], cJ[vc[20]] = cJ[vc[1]][vc[13]], JJ[vc[19]][vc[13]] = vc[1]), cJ[vc[10]] = vc[1]; cJ[vc[10]] < cJ[vc[20]];) Ec(cJ[vc[21]] = cJ[vc[1]][cJ[vc[10]]++], cJ[vc[21]] <= vc[39] ? cJ[-vc[22]] = cJ[vc[21]] : cJ[vc[21]] <= 223 ? cJ[-vc[22]] = (cJ[vc[21]] & vc[51]) << vc[24] | cJ[vc[1]][cJ[vc[10]]++] & vc[23] : cJ[vc[21]] <= 239 ? cJ[-vc[22]] = (cJ[vc[21]] & vc[67]) << vc[27] | (cJ[vc[1]][cJ[vc[10]]++] & vc[23]) << vc[24] | cJ[vc[1]][cJ[vc[10]]++] & vc[23] : eZ[vc[25]] ? cJ[-vc[22]] = (cJ[vc[21]] & vc[26]) << vc[68] | (cJ[vc[1]][cJ[vc[10]]++] & vc[23]) << vc[27] | (cJ[vc[1]][cJ[vc[10]]++] & vc[23]) << vc[24] | cJ[vc[1]][cJ[vc[10]]++] & vc[23] : (cJ[-vc[22]] = vc[23], cJ[vc[10]] += vc[15]), JJ[vc[19]][vc[28]](JJ[vc[5]][cJ[-vc[22]]] || (JJ[vc[5]][cJ[-vc[22]]] = JJ[vc[29]](cJ[-vc[22]]))));
          return JJ[vc[19]].join("")
        }
    }()), (() => {
      function JJ(...JJ) {
        return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = function(...JJ) {
          for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = 'SG4wti^v`kbhEP3&/*WrJ)p;d$9V0{.sAHKL2fz[#x!+yaYZFQIljTUDmoqXR_uBMCN?e1ngO(8},:|=~<6">57]@c%', JJ[vc[19]] = "" + (JJ[vc[1]] || ""), JJ[vc[35]] = JJ[vc[19]].length, JJ[vc[10]] = [], JJ[vc[8]] = vc[1], JJ[-vc[38]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[vc[35]]; JJ[vc[11]]++)
            if (JJ[-vc[36]] = JJ[vc[5]].indexOf(JJ[vc[19]][JJ[vc[11]]]), JJ[-vc[36]] !== -vc[2])
              if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[-vc[36]];
              else {
                Ec(JJ[vc[37]] += JJ[-vc[36]] * vc[30], JJ[vc[8]] |= JJ[vc[37]] << JJ[-vc[38]], JJ[-vc[38]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                do {
                  Ec(JJ[vc[10]].push(JJ[vc[8]] & vc[12]), JJ[vc[8]] >>= vc[11], JJ[-vc[38]] -= vc[11])
                } while (JJ[-vc[38]] > vc[26]);
                JJ[vc[37]] = -vc[2]
              } return JJ[vc[37]] > -vc[2] && JJ[vc[10]].push((JJ[vc[8]] | JJ[vc[37]] << JJ[-vc[38]]) & vc[12]), mc(JJ[vc[10]])
        }(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
      } [][vc[13]] = vc[1];
      const cJ = vc[6],
        ZJ = JJ(vc[39]) + JJ(vc[40]) + JJ(129) + JJ(130) + JJ(131) + JJ(132),
        FJ = {
          [vc[6]]: JJ(133) + JJ(134) + JJ(135) + JJ(136) + JJ(137)
        },
        UJ = (...cJ) => {
          cJ[vc[13]] = vc[2], JJ(138) in Qc && function(...JJ) {
            JJ[vc[13]] = vc[1]
          }();
          const ZJ = FJ[cJ[vc[1]]];
          if (!ZJ) {
            function UJ(...JJ) {
              for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = 'On$b;NKAo}Ut^,VHfv"k2xIJpR_3(h0TzZ#gPaSL`MG5?C)Ed%.ci*[ueBj<yl+F4~{WDYw]916@Qmq|rX!>7/8&=:s', JJ[vc[19]] = "" + (JJ[vc[1]] || ""), JJ[vc[41]] = JJ[vc[19]].length, JJ[vc[44]] = [], JJ[-vc[43]] = vc[1], JJ[vc[24]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[vc[41]]; JJ[vc[11]]++)
                if (JJ[vc[42]] = JJ[vc[5]].indexOf(JJ[vc[19]][JJ[vc[11]]]), JJ[vc[42]] !== -vc[2])
                  if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[42]];
                  else {
                    Ec(JJ[vc[37]] += JJ[vc[42]] * vc[30], JJ[-vc[43]] |= JJ[vc[37]] << JJ[vc[24]], JJ[vc[24]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                    do {
                      Ec(JJ[vc[44]].push(JJ[-vc[43]] & vc[12]), JJ[-vc[43]] >>= vc[11], JJ[vc[24]] -= vc[11])
                    } while (JJ[vc[24]] > vc[26]);
                    JJ[vc[37]] = -vc[2]
                  } return JJ[vc[37]] > -vc[2] && JJ[vc[44]].push((JJ[-vc[43]] | JJ[vc[37]] << JJ[vc[24]]) & vc[12]), mc(JJ[vc[44]])
            }

            function eJ(...JJ) {
              return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = UJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
            }

            function XJ(...JJ) {
              Ec(JJ[vc[13]] = vc[1], JJ[-vc[47]] = function(...cJ) {
                return Ec(cJ[vc[13]] = vc[15], cJ[vc[5]] = {}), cJ[vc[19]].length !== cJ[vc[1]].length + cJ[vc[2]].length ? vc[45] : JJ[vc[2]](cJ[vc[1]], cJ[vc[2]], cJ[vc[19]], vc[1], vc[1], vc[1], cJ[vc[5]])
              }, JJ[vc[2]] = function(...cJ) {
                return Ec(cJ[vc[13]] = vc[26], cJ[vc[26]] = vc[45]), cJ[vc[46]] >= cJ[vc[19]].length ? vc[84] : cJ[vc[24]]["" + cJ[vc[15]] + cJ[vc[16]] + cJ[vc[46]]] !== vc[18] ? cJ[vc[24]]["" + cJ[vc[15]] + cJ[vc[16]] + cJ[vc[46]]] : (cJ[vc[19]][cJ[vc[46]]] === cJ[vc[1]][cJ[vc[15]]] && cJ[vc[19]][cJ[vc[46]]] === cJ[vc[2]][cJ[vc[16]]] ? cJ[vc[26]] = JJ[vc[2]](cJ[vc[1]], cJ[vc[2]], cJ[vc[19]], cJ[vc[15]] + vc[2], cJ[vc[16]], cJ[vc[46]] + vc[2], cJ[vc[24]]) || JJ[vc[2]](cJ[vc[1]], cJ[vc[2]], cJ[vc[19]], cJ[vc[15]], cJ[vc[16]] + vc[2], cJ[vc[46]] + vc[2], cJ[vc[24]]) : cJ[vc[19]][cJ[vc[46]]] === cJ[vc[1]][cJ[vc[15]]] ? cJ[vc[26]] = JJ[vc[2]](cJ[vc[1]], cJ[vc[2]], cJ[vc[19]], cJ[vc[15]] + vc[2], cJ[vc[16]], cJ[vc[46]] + vc[2], cJ[vc[24]]) : cJ[vc[19]][cJ[vc[46]]] === cJ[vc[2]][cJ[vc[16]]] && (cJ[vc[26]] = JJ[vc[2]](cJ[vc[1]], cJ[vc[2]], cJ[vc[19]], cJ[vc[15]], cJ[vc[16]] + vc[2], cJ[vc[46]] + vc[2], cJ[vc[24]])), cJ[vc[24]]["" + cJ[vc[15]] + cJ[vc[16]] + cJ[vc[46]]] = cJ[vc[26]], cJ[vc[26]])
              }, console.log(JJ[-vc[47]]))
            }
            throw eJ(139) + "V" in Qc && XJ(), new Error(eJ(140) + eJ(141) + eJ(142) + eJ(vc[3]) + " v" + cJ[vc[1]])
          }
          return [vc[1], vc[2], vc[19], vc[15], vc[16], vc[46], vc[24], vc[26]].map((JJ => {
            function cJ(...JJ) {
              return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = function(...JJ) {
                for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = 'BWiNmPMhbqGCKDcdpUknSrHjXJfZ[sAL7EeYzt$Qx%&.{lR2gu1OIVv?F_Ta30)@^~:#*`5+]}y,|w=!/9>64"<(8;o', JJ[-vc[48]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[-vc[48]].length, JJ[vc[16]] = [], JJ[vc[8]] = vc[1], JJ[vc[9]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[49]] = vc[1]; JJ[vc[49]] < JJ[vc[15]]; JJ[vc[49]]++)
                  if (JJ[vc[50]] = JJ[vc[5]].indexOf(JJ[-vc[48]][JJ[vc[49]]]), JJ[vc[50]] !== -vc[2])
                    if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[50]];
                    else {
                      Ec(JJ[vc[37]] += JJ[vc[50]] * vc[30], JJ[vc[8]] |= JJ[vc[37]] << JJ[vc[9]], JJ[vc[9]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                      do {
                        Ec(JJ[vc[16]].push(JJ[vc[8]] & vc[12]), JJ[vc[8]] >>= vc[11], JJ[vc[9]] -= vc[11])
                      } while (JJ[vc[9]] > vc[26]);
                      JJ[vc[37]] = -vc[2]
                    } return JJ[vc[37]] > -vc[2] && JJ[vc[16]].push((JJ[vc[8]] | JJ[vc[37]] << JJ[vc[9]]) & vc[12]), mc(JJ[vc[16]])
              }(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
            }
            return cJ(144) + "6" in Qc && function(...JJ) {
              function ZJ(...JJ) {
                for (Ec(JJ[vc[13]] = vc[2], JJ[vc[53]] = 'M0IATCsWVJlOrpmHBiPKFndbLGEQShYgXDa+U%R/jcw9Z8t@vN^"3>,kzo#qfye}.1?)$2`5[x~*(6<|4!{&;=]_:u7', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[-vc[52]] = JJ[vc[14]].length, JJ[vc[51]] = [], JJ[vc[8]] = vc[1], JJ[-vc[56]] = vc[1], JJ[vc[55]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[-vc[52]]; JJ[vc[11]]++)
                  if (JJ[vc[54]] = JJ[vc[53]].indexOf(JJ[vc[14]][JJ[vc[11]]]), JJ[vc[54]] !== -vc[2])
                    if (JJ[vc[55]] < vc[1]) JJ[vc[55]] = JJ[vc[54]];
                    else {
                      Ec(JJ[vc[55]] += JJ[vc[54]] * vc[30], JJ[vc[8]] |= JJ[vc[55]] << JJ[-vc[56]], JJ[-vc[56]] += (JJ[vc[55]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                      do {
                        Ec(JJ[vc[51]].push(JJ[vc[8]] & vc[12]), JJ[vc[8]] >>= vc[11], JJ[-vc[56]] -= vc[11])
                      } while (JJ[-vc[56]] > vc[26]);
                      JJ[vc[55]] = -vc[2]
                    } return JJ[vc[55]] > -vc[2] && JJ[vc[51]].push((JJ[vc[8]] | JJ[vc[55]] << JJ[-vc[56]]) & vc[12]), mc(JJ[vc[51]])
              }

              function FJ(...JJ) {
                return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = ZJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
              }
              JJ[vc[13]] = vc[1],
                function(...JJ) {
                  function ZJ(JJ) {
                    var cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ = ']qRLiWsHGUxX>FO)@Qb7nm!(DoZv|[#5;~SV?J=32}f_:/hCt&+z$91lBNgyM,8PIE"<A4cwjru0*K`^kaTp6.e%Y{d';
                    for (Ec(cJ = "" + (JJ || ""), ZJ = cJ.length, FJ = [], UJ = vc[1], eJ = vc[1], XJ = -vc[2]), AJ = vc[1]; AJ < ZJ; AJ++) {
                      var jJ = qJ.indexOf(cJ[AJ]);
                      if (jJ !== -vc[2])
                        if (XJ < vc[1]) XJ = jJ;
                        else {
                          Ec(XJ += jJ * vc[30], UJ |= XJ << eJ, eJ += (XJ & vc[31]) > vc[32] ? vc[33] : vc[34]);
                          do {
                            Ec(FJ.push(UJ & vc[12]), UJ >>= vc[11], eJ -= vc[11])
                          } while (eJ > vc[26]);
                          XJ = -vc[2]
                        }
                    }
                    return XJ > -vc[2] && FJ.push((UJ | XJ << eJ) & vc[12]), mc(FJ)
                  }

                  function FJ(JJ) {
                    return typeof xc[JJ] === vc[17] ? xc[JJ] = ZJ(rc[JJ]) : xc[JJ]
                  }

                  function UJ(...JJ) {
                    for (Ec(JJ[vc[13]] = vc[2], JJ[-vc[56]] = [], JJ[vc[19]] = vc[1], JJ[vc[15]] = JJ[vc[1]].length, JJ[vc[10]] = vc[18], JJ[vc[46]] = vc[18]); JJ[vc[19]] < JJ[vc[15]];) Ec(JJ[vc[10]] = JJ[vc[1]].charCodeAt(JJ[vc[19]]++), JJ[vc[10]] >= vc[62] && JJ[vc[10]] <= 56319 && JJ[vc[19]] < JJ[vc[15]] ? (JJ[vc[46]] = JJ[vc[1]].charCodeAt(JJ[vc[19]]++), (64512 & JJ[vc[46]]) == vc[63] ? JJ[-vc[56]].push(((JJ[vc[10]] & vc[57]) << vc[61]) + (JJ[vc[46]] & vc[57]) + vc[59]) : (JJ[-vc[56]].push(JJ[vc[10]]), JJ[vc[19]]--)) : JJ[-vc[56]].push(JJ[vc[10]]));
                    return JJ[-vc[56]]
                  }

                  function eJ(...cJ) {
                    for (Ec(cJ[vc[13]] = vc[2], cJ[vc[5]] = cJ[vc[1]].length, cJ[-vc[58]] = -vc[2], cJ[vc[4]] = vc[18], cJ[vc[16]] = ""); ++cJ[-vc[58]] < cJ[vc[5]];) cJ[vc[4]] = cJ[vc[1]][cJ[-vc[58]]], cJ[vc[4]] > 65535 && Ec(cJ[vc[4]] -= vc[59], cJ[vc[16]] += JJ[vc[60]](cJ[vc[4]] >>> vc[61] & vc[57] | vc[62]), cJ[vc[4]] = vc[63] | cJ[vc[4]] & vc[57]), cJ[vc[16]] += JJ[vc[60]](cJ[vc[4]]);
                    return cJ[vc[16]]
                  }

                  function XJ(...JJ) {
                    if (JJ[vc[13]] = vc[2], JJ[vc[1]] >= vc[62] && JJ[vc[1]] <= 57343) {
                      function cJ(...JJ) {
                        for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = ']o=_6>Q.2*)ZNmvf3DbldVSkiHgeUaw?s@y0j%OLYuq17&$pz5I~|<{C"48r#[X}^Jn:R`,/cB+WKA9Fhx!(PMT;tEG', JJ[vc[19]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[vc[19]].length, JJ[-vc[65]] = [], JJ[vc[46]] = vc[1], JJ[vc[9]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[-vc[64]] = vc[1]; JJ[-vc[64]] < JJ[vc[15]]; JJ[-vc[64]]++)
                          if (JJ[-vc[60]] = JJ[vc[5]].indexOf(JJ[vc[19]][JJ[-vc[64]]]), JJ[-vc[60]] !== -vc[2])
                            if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[-vc[60]];
                            else {
                              Ec(JJ[vc[37]] += JJ[-vc[60]] * vc[30], JJ[vc[46]] |= JJ[vc[37]] << JJ[vc[9]], JJ[vc[9]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                              do {
                                Ec(JJ[-vc[65]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[vc[9]] -= vc[11])
                              } while (JJ[vc[9]] > vc[26]);
                              JJ[vc[37]] = -vc[2]
                            } return JJ[vc[37]] > -vc[2] && JJ[-vc[65]].push((JJ[vc[46]] | JJ[vc[37]] << JJ[vc[9]]) & vc[12]), mc(JJ[-vc[65]])
                      }

                      function ZJ(...JJ) {
                        return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = cJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                      }
                      throw Error(ZJ(vc[83]) + ZJ(146) + ZJ(vc[0]) + JJ[vc[1]].toString(vc[80]).toUpperCase() + (ZJ(148) + ZJ(149) + ZJ(150) + ZJ(151)))
                    }
                  }

                  function AJ(...cJ) {
                    return cJ[vc[13]] = vc[19], JJ[vc[60]](cJ[vc[1]] >> cJ[vc[2]] & vc[23] | vc[40])
                  }

                  function qJ(...cJ) {
                    return cJ[vc[13]] = vc[2], (4294967168 & cJ[vc[1]]) == vc[1] ? JJ[vc[60]](cJ[vc[1]]) : (cJ[vc[66]] = "", (4294965248 & cJ[vc[1]]) == vc[1] ? cJ[vc[66]] = JJ[vc[60]](cJ[vc[1]] >> vc[24] & vc[51] | vc[71]) : (4294901760 & cJ[vc[1]]) == vc[1] ? Ec(XJ(cJ[vc[1]]), cJ[vc[66]] = JJ[vc[60]](cJ[vc[1]] >> vc[27] & vc[67] | vc[76]), cJ[vc[66]] += AJ(cJ[vc[1]], vc[24])) : (4292870144 & cJ[vc[1]]) == vc[1] && Ec(cJ[vc[66]] = JJ[vc[60]](cJ[vc[1]] >> vc[68] & vc[26] | vc[79]), cJ[vc[66]] += AJ(cJ[vc[1]], vc[27]), cJ[vc[66]] += AJ(cJ[vc[1]], vc[24])), cJ[vc[66]] += JJ[vc[60]](cJ[vc[1]] & vc[23] | vc[40]), cJ[vc[66]])
                  }

                  function jJ(JJ) {
                    var cJ, ZJ, FJ, eJ, XJ = UJ(JJ);
                    for (Ec(cJ = XJ.length, ZJ = -vc[2], FJ = void 0, eJ = ""); ++ZJ < cJ;) Ec(FJ = XJ[ZJ], eJ += qJ(FJ));
                    return eJ
                  }

                  function YJ(...ZJ) {
                    function FJ(...JJ) {
                      for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = 'ugfoIOBekbLXNQFnjcvqWHSC*6%MEl5P9}m"|<!]i21^AG#rU0D[Jp,/Ksw`Rx$y{Z_@>VTh&Y+)t?;=az~3d8.:(47', JJ[vc[19]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[vc[19]].length, JJ[vc[10]] = [], JJ[vc[8]] = vc[1], JJ[vc[9]] = vc[1], JJ[-vc[70]] = -vc[2]), JJ[vc[49]] = vc[1]; JJ[vc[49]] < JJ[vc[15]]; JJ[vc[49]]++)
                        if (JJ[-vc[69]] = JJ[vc[5]].indexOf(JJ[vc[19]][JJ[vc[49]]]), JJ[-vc[69]] !== -vc[2])
                          if (JJ[-vc[70]] < vc[1]) JJ[-vc[70]] = JJ[-vc[69]];
                          else {
                            Ec(JJ[-vc[70]] += JJ[-vc[69]] * vc[30], JJ[vc[8]] |= JJ[-vc[70]] << JJ[vc[9]], JJ[vc[9]] += (JJ[-vc[70]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                            do {
                              Ec(JJ[vc[10]].push(JJ[vc[8]] & vc[12]), JJ[vc[8]] >>= vc[11], JJ[vc[9]] -= vc[11])
                            } while (JJ[vc[9]] > vc[26]);
                            JJ[-vc[70]] = -vc[2]
                          } return JJ[-vc[70]] > -vc[2] && JJ[vc[10]].push((JJ[vc[8]] | JJ[-vc[70]] << JJ[vc[9]]) & vc[12]), mc(JJ[vc[10]])
                    }

                    function UJ(...JJ) {
                      return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = FJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                    }
                    if (ZJ[vc[13]] = vc[1], JJ[vc[19]] >= JJ[vc[15]]) throw Error(cJ(152));
                    if (Ec(ZJ[-vc[51]] = JJ[vc[16]][JJ[vc[19]]] & vc[12], JJ[vc[19]]++), (ZJ[-vc[51]] & vc[71]) == vc[40]) return ZJ[-vc[51]] & vc[23];
                    throw Error(UJ(153))
                  }

                  function hJ(...cJ) {
                    function ZJ(...JJ) {
                      for (Ec(JJ[vc[13]] = vc[2], JJ[vc[2]] = 'h$UBX;3H5LTsM>vWxFD%NOp.4@AmzJC]nEuw&ReP~qgl*/[j}Y2:67f|d=?Z#Voc1rbQIiKkt)S!G<98^_"y(0,`+{a', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[vc[14]].length, JJ[-vc[51]] = [], JJ[vc[46]] = vc[1], JJ[vc[9]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[vc[15]]; JJ[vc[11]]++)
                        if (JJ[vc[54]] = JJ[vc[2]].indexOf(JJ[vc[14]][JJ[vc[11]]]), JJ[vc[54]] !== -vc[2])
                          if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[54]];
                          else {
                            Ec(JJ[vc[37]] += JJ[vc[54]] * vc[30], JJ[vc[46]] |= JJ[vc[37]] << JJ[vc[9]], JJ[vc[9]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                            do {
                              Ec(JJ[-vc[51]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[vc[9]] -= vc[11])
                            } while (JJ[vc[9]] > vc[26]);
                            JJ[vc[37]] = -vc[2]
                          } return JJ[vc[37]] > -vc[2] && JJ[-vc[51]].push((JJ[vc[46]] | JJ[vc[37]] << JJ[vc[9]]) & vc[12]), mc(JJ[-vc[51]])
                    }

                    function FJ(...JJ) {
                      return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = ZJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                    }
                    if (cJ[vc[13]] = vc[1], Ec(cJ[vc[5]] = vc[18], cJ[vc[2]] = vc[18], cJ[vc[19]] = vc[18], cJ[vc[15]] = vc[18], cJ[vc[16]] = vc[18]), JJ[vc[19]] > JJ[vc[15]]) {
                      function UJ(...JJ) {
                        for (Ec(JJ[vc[13]] = vc[2], JJ[vc[2]] = 'g1J$HDQt#PX.a5}?E%W@=7TL4|6dowvm>N]b&AR!Gn,`/+2l*iBSUp^O~"k0Ve:yfM<hF_3q)uY9Iz;K{[sjCc8r(Zx', JJ[-vc[72]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[-vc[72]].length, JJ[vc[10]] = [], JJ[-vc[75]] = vc[1], JJ[vc[24]] = vc[1], JJ[vc[74]] = -vc[2]), JJ[vc[73]] = vc[1]; JJ[vc[73]] < JJ[vc[15]]; JJ[vc[73]]++)
                          if (JJ[vc[6]] = JJ[vc[2]].indexOf(JJ[-vc[72]][JJ[vc[73]]]), JJ[vc[6]] !== -vc[2])
                            if (JJ[vc[74]] < vc[1]) JJ[vc[74]] = JJ[vc[6]];
                            else {
                              Ec(JJ[vc[74]] += JJ[vc[6]] * vc[30], JJ[-vc[75]] |= JJ[vc[74]] << JJ[vc[24]], JJ[vc[24]] += (JJ[vc[74]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                              do {
                                Ec(JJ[vc[10]].push(JJ[-vc[75]] & vc[12]), JJ[-vc[75]] >>= vc[11], JJ[vc[24]] -= vc[11])
                              } while (JJ[vc[24]] > vc[26]);
                              JJ[vc[74]] = -vc[2]
                            } return JJ[vc[74]] > -vc[2] && JJ[vc[10]].push((JJ[-vc[75]] | JJ[vc[74]] << JJ[vc[24]]) & vc[12]), mc(JJ[vc[10]])
                      }

                      function eJ(...JJ) {
                        return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = UJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                      }
                      throw Error(eJ(154))
                    }
                    if (JJ[vc[19]] == JJ[vc[15]]) return vc[45];
                    if (Ec(cJ[vc[5]] = JJ[vc[16]][JJ[vc[19]]] & vc[12], JJ[vc[19]]++), (cJ[vc[5]] & vc[40]) == vc[1]) return cJ[vc[5]];
                    if ((cJ[vc[5]] & vc[76]) == vc[71]) {
                      if (Ec(cJ[vc[2]] = YJ(), cJ[vc[16]] = (cJ[vc[5]] & vc[51]) << vc[24] | cJ[vc[2]]), cJ[vc[16]] >= vc[40]) return cJ[vc[16]];
                      {
                        function AJ(...JJ) {
                          for (Ec(JJ[vc[13]] = vc[2], JJ[vc[77]] = 'F;wU+9]XG(D{"R~H*IkvV@!Tl50s[druW3&K6P^N}/<a=t41xyeq7O8,_%ohQJS#g2p:|?LZ`imc.fYj>B)MzE$bCAn', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[vc[4]] = JJ[vc[14]].length, JJ[vc[16]] = [], JJ[vc[46]] = vc[1], JJ[-vc[78]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[vc[4]]; JJ[vc[11]]++)
                            if (JJ[-vc[30]] = JJ[vc[77]].indexOf(JJ[vc[14]][JJ[vc[11]]]), JJ[-vc[30]] !== -vc[2])
                              if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[-vc[30]];
                              else {
                                Ec(JJ[vc[37]] += JJ[-vc[30]] * vc[30], JJ[vc[46]] |= JJ[vc[37]] << JJ[-vc[78]], JJ[-vc[78]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                                do {
                                  Ec(JJ[vc[16]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[-vc[78]] -= vc[11])
                                } while (JJ[-vc[78]] > vc[26]);
                                JJ[vc[37]] = -vc[2]
                              } return JJ[vc[37]] > -vc[2] && JJ[vc[16]].push((JJ[vc[46]] | JJ[vc[37]] << JJ[-vc[78]]) & vc[12]), mc(JJ[vc[16]])
                        }

                        function qJ(...JJ) {
                          return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = AJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                        }
                        throw Error(qJ(155))
                      }
                    }
                    if ((cJ[vc[5]] & vc[79]) == vc[76]) {
                      if (Ec(cJ[vc[2]] = YJ(), cJ[vc[19]] = YJ(), cJ[vc[16]] = (cJ[vc[5]] & vc[67]) << vc[27] | cJ[vc[2]] << vc[24] | cJ[vc[19]]), cJ[vc[16]] >= 2048) return XJ(cJ[vc[16]]), cJ[vc[16]];
                      {
                        function jJ(...JJ) {
                          for (Ec(JJ[vc[13]] = vc[2], JJ[-vc[23]] = '(oE=,tpNbqW3SFrLu@GQJsBHi_h/d>&yc~"!4Y|xka0v.%<DzMX*I8$T^R+Af7lg[:C;#`e1{)O6P]Z59wKmj}2V?Un', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[vc[15]] = JJ[vc[14]].length, JJ[vc[16]] = [], JJ[vc[46]] = vc[1], JJ[vc[24]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[-vc[64]] = vc[1]; JJ[-vc[64]] < JJ[vc[15]]; JJ[-vc[64]]++)
                            if (JJ[vc[54]] = JJ[-vc[23]].indexOf(JJ[vc[14]][JJ[-vc[64]]]), JJ[vc[54]] !== -vc[2])
                              if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[54]];
                              else {
                                Ec(JJ[vc[37]] += JJ[vc[54]] * vc[30], JJ[vc[46]] |= JJ[vc[37]] << JJ[vc[24]], JJ[vc[24]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                                do {
                                  Ec(JJ[vc[16]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[vc[24]] -= vc[11])
                                } while (JJ[vc[24]] > vc[26]);
                                JJ[vc[37]] = -vc[2]
                              } return JJ[vc[37]] > -vc[2] && JJ[vc[16]].push((JJ[vc[46]] | JJ[vc[37]] << JJ[vc[24]]) & vc[12]), mc(JJ[vc[16]])
                        }

                        function hJ(...JJ) {
                          return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = jJ(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
                        }
                        throw Error(hJ(156))
                      }
                    }
                    if ((cJ[vc[5]] & vc[72]) == vc[79] && (Ec(cJ[vc[2]] = YJ(), cJ[vc[19]] = YJ(), cJ[vc[15]] = YJ(), cJ[vc[16]] = (cJ[vc[5]] & vc[26]) << vc[68] | cJ[vc[2]] << vc[27] | cJ[vc[19]] << vc[24] | cJ[vc[15]]), cJ[vc[16]] >= vc[59] && cJ[vc[16]] <= 1114111)) return cJ[vc[16]];
                    throw Error(FJ(157))
                  }

                  function DJ(...cJ) {
                    for (Ec(cJ[vc[13]] = vc[2], JJ[vc[16]] = UJ(cJ[vc[1]]), JJ[vc[15]] = JJ[vc[16]].length, JJ[vc[19]] = vc[1], cJ[vc[5]] = [], cJ[vc[19]] = vc[18]);
                      (cJ[vc[19]] = hJ()) !== vc[45];) cJ[vc[5]].push(cJ[vc[19]]);
                    return eJ(cJ[vc[5]])
                  }
                  JJ[vc[13]] = vc[2], JJ[vc[60]] = String.fromCharCode, Ec(JJ[vc[16]] = vc[18], JJ[vc[15]] = vc[18], JJ[vc[19]] = vc[18]), Ec(JJ[vc[1]].version = FJ(158), JJ[vc[1]].encode = jJ, JJ[vc[1]].decode = DJ)
                }(typeof exports === FJ(159) + FJ(vc[75]) ? this.utf8 = {} : exports)
            }(), parseInt(ZJ[cJ(161)](JJ * vc[11], JJ * vc[11] + vc[11]), vc[80])
          }))
        };
      Ec(ec = (...JJ) => (JJ[vc[13]] = vc[2], function(...JJ) {
        return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = function(...JJ) {
          for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = 'e@x^0`A%&a9KUyOg}X.=<uM?p#)o!vB,_Ff(:;*>4Vzh5PRD1NnmIbj+w2$3Q6lYZ{J"]r8[7|W/~cEtdSLkTCGiqHs', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[vc[4]] = JJ[vc[14]].length, JJ[vc[10]] = [], JJ[vc[46]] = vc[1], JJ[vc[24]] = vc[1], JJ[vc[26]] = -vc[2]), JJ[vc[49]] = vc[1]; JJ[vc[49]] < JJ[vc[4]]; JJ[vc[49]]++)
            if (JJ[vc[81]] = JJ[vc[5]].indexOf(JJ[vc[14]][JJ[vc[49]]]), JJ[vc[81]] !== -vc[2])
              if (JJ[vc[26]] < vc[1]) JJ[vc[26]] = JJ[vc[81]];
              else {
                Ec(JJ[vc[26]] += JJ[vc[81]] * vc[30], JJ[vc[46]] |= JJ[vc[26]] << JJ[vc[24]], JJ[vc[24]] += (JJ[vc[26]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                do {
                  Ec(JJ[vc[10]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[vc[24]] -= vc[11])
                } while (JJ[vc[24]] > vc[26]);
                JJ[vc[26]] = -vc[2]
              } return JJ[vc[26]] > -vc[2] && JJ[vc[10]].push((JJ[vc[46]] | JJ[vc[26]] << JJ[vc[24]]) & vc[12]), mc(JJ[vc[10]])
        }(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
      }(162) + "H" in Qc && function(...JJ) {
        Ec(JJ[vc[13]] = vc[1], JJ[vc[5]] = function(...JJ) {
          for (Ec(JJ[vc[13]] = vc[2], JJ[vc[2]] = vc[1], JJ[vc[19]] = {}, JJ[vc[4]] = vc[1], JJ[-vc[82]] = vc[1], JJ[-vc[20]] = vc[1], JJ[vc[24]] = JJ[vc[1]].length), JJ[vc[37]] = vc[1]; JJ[vc[37]] < JJ[vc[24]]; JJ[vc[37]]++) {
            for (Ec(JJ[vc[19]] = {}, JJ[vc[4]] = vc[1], JJ[-vc[82]] = vc[2]), JJ[vc[49]] = JJ[vc[37]] + vc[2]; JJ[vc[49]] < JJ[vc[24]]; JJ[vc[49]]++) JJ[vc[1]][JJ[vc[37]]].x !== JJ[vc[1]][JJ[vc[49]]].x || JJ[vc[1]][JJ[vc[37]]].y !== JJ[vc[1]][JJ[vc[49]]].y ? (JJ[vc[1]][JJ[vc[37]]].y === JJ[vc[1]][JJ[vc[49]]].y ? JJ[-vc[20]] = Number.MAX_SAFE_INTEGER : JJ[-vc[20]] = (JJ[vc[1]][JJ[vc[37]]].x - JJ[vc[1]][JJ[vc[49]]].x) / (JJ[vc[1]][JJ[vc[37]]].y - JJ[vc[1]][JJ[vc[49]]].y), JJ[vc[19]][JJ[-vc[20]]] || (JJ[vc[19]][JJ[-vc[20]]] = vc[1]), Ec(JJ[vc[19]][JJ[-vc[20]]]++, JJ[vc[4]] = Math.max(JJ[vc[4]], JJ[vc[19]][JJ[-vc[20]]]))) : JJ[-vc[82]]++;
            Ec(JJ[vc[4]] += JJ[-vc[82]], JJ[vc[2]] = Math.max(JJ[vc[2]], JJ[vc[4]]))
          }
          return JJ[vc[2]]
        }, console.log(JJ[vc[5]]))
      }(), JJ[vc[1]] >= cJ), Xc = (...JJ) => {
        function cJ(JJ) {
          return typeof xc[JJ] === vc[17] ? xc[JJ] = function(...JJ) {
            for (Ec(JJ[vc[13]] = vc[2], JJ[vc[5]] = '`ZKCnjUWMs1&?2x~iglk8BqGwyTtFze;vIf#J{4u3:0S>Ddc)!5,*hR/%Lp(9NVHY=E7_"@6P+$|^roQ.mO[<Xb]A}a', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[-vc[7]] = JJ[vc[14]].length, JJ[vc[10]] = [], JJ[vc[8]] = vc[1], JJ[vc[24]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[-vc[7]]; JJ[vc[11]]++)
              if (JJ[vc[6]] = JJ[vc[5]].indexOf(JJ[vc[14]][JJ[vc[11]]]), JJ[vc[6]] !== -vc[2])
                if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[6]];
                else {
                  Ec(JJ[vc[37]] += JJ[vc[6]] * vc[30], JJ[vc[8]] |= JJ[vc[37]] << JJ[vc[24]], JJ[vc[24]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                  do {
                    Ec(JJ[vc[10]].push(JJ[vc[8]] & vc[12]), JJ[vc[8]] >>= vc[11], JJ[vc[24]] -= vc[11])
                  } while (JJ[vc[24]] > vc[26]);
                  JJ[vc[37]] = -vc[2]
                } return JJ[vc[37]] > -vc[2] && JJ[vc[10]].push((JJ[vc[8]] | JJ[vc[37]] << JJ[vc[24]]) & vc[12]), mc(JJ[vc[10]])
          }(rc[JJ]) : xc[JJ]
        }
        JJ[vc[13]] = vc[19], cJ(163) in Qc && function(...JJ) {
          JJ[vc[13]] = vc[1];
          const cJ = require("big-integer");
          Ec(JJ[-vc[83]] = class {
            static randomPrime(...JJ) {
              JJ[vc[13]] = vc[2];
              const ZJ = cJ.one.shiftLeft(JJ[vc[1]] - vc[2]),
                FJ = cJ.one.shiftLeft(JJ[vc[1]]).prev();
              for (; vc[84];) {
                let JJ = cJ.randBetween(ZJ, FJ);
                if (JJ.isProbablePrime(256)) return JJ
              }
            }
            static generate(...JJ) {
              JJ[vc[13]] = vc[2];
              const ZJ = cJ(65537);
              let FJ, UJ;
              JJ[-vc[85]] = vc[18];
              do {
                Ec(FJ = this.randomPrime(JJ[vc[1]] / vc[19]), UJ = this.randomPrime(JJ[vc[1]] / vc[19]), JJ[-vc[85]] = cJ.lcm(FJ.prev(), UJ.prev()))
              } while (cJ.gcd(ZJ, JJ[-vc[85]]).notEquals(vc[2]) || FJ.minus(UJ).abs().shiftRight(JJ[vc[1]] / vc[19] - 100).isZero());
              return {
                e: ZJ,
                n: FJ.multiply(UJ),
                d: ZJ.modInv(JJ[-vc[85]])
              }
            }
            static encrypt(...JJ) {
              return JJ[vc[13]] = vc[15], cJ(JJ[vc[1]]).modPow(JJ[vc[19]], JJ[vc[2]])
            }
            static decrypt(...JJ) {
              return JJ[vc[13]] = vc[15], cJ(JJ[vc[1]]).modPow(JJ[vc[2]], JJ[vc[19]])
            }
            static encode(...JJ) {
              JJ[vc[13]] = vc[2];
              const ZJ = JJ[vc[1]].split("").map((JJ => JJ.charCodeAt())).join("");
              return cJ(ZJ)
            }
            static decode(...JJ) {
              JJ[vc[13]] = vc[2];
              const cJ = JJ[vc[1]].toString();
              JJ[vc[86]] = "";
              for (let ZJ = vc[1]; ZJ < cJ.length; ZJ += vc[19]) {
                let FJ = Number(cJ.substr(ZJ, vc[19]));
                FJ <= 30 ? (JJ[vc[86]] += String.fromCharCode(Number(cJ.substr(ZJ, vc[15]))), ZJ++) : JJ[vc[86]] += String.fromCharCode(FJ)
              }
              return JJ[vc[86]]
            }
          }, module.exports = JJ[-vc[83]])
        }();
        const ZJ = crypto[cJ(164) + cJ(165) + cJ(166)](new Uint8Array(jc)),
          FJ = Uc[vc[14]][cJ(vc[48]) + cJ(vc[66])](JJ[vc[2]], {
            [cJ(vc[81])]: vc[2]
          });
        qc(UJ(JJ[vc[1]]), ZJ, vc[2], FJ);
        const eJ = new Uint8Array(jc + FJ[cJ(170)]);
        return Ec(eJ[cJ(vc[87])](ZJ), eJ[cJ(vc[87])](FJ, jc)), eJ
      }, Ac = (...JJ) => {
        function cJ(...JJ) {
          return JJ[vc[13]] = vc[2], typeof xc[JJ[vc[1]]] === vc[17] ? xc[JJ[vc[1]]] = function(...JJ) {
            for (Ec(JJ[vc[13]] = vc[2], JJ[vc[2]] = '.fOahgMAkuQ}G5LJK3N{p9vT~&#4wrt`;b*xyVSeU"8!|PcXY$zdDjRBI]Hq^lE(6:?=W)/0o[mZ7_n%Fsi><,C1+@2', JJ[vc[14]] = "" + (JJ[vc[1]] || ""), JJ[vc[4]] = JJ[vc[14]].length, JJ[-vc[61]] = [], JJ[vc[46]] = vc[1], JJ[vc[9]] = vc[1], JJ[vc[37]] = -vc[2]), JJ[vc[11]] = vc[1]; JJ[vc[11]] < JJ[vc[4]]; JJ[vc[11]]++)
              if (JJ[vc[54]] = JJ[vc[2]].indexOf(JJ[vc[14]][JJ[vc[11]]]), JJ[vc[54]] !== -vc[2])
                if (JJ[vc[37]] < vc[1]) JJ[vc[37]] = JJ[vc[54]];
                else {
                  Ec(JJ[vc[37]] += JJ[vc[54]] * vc[30], JJ[vc[46]] |= JJ[vc[37]] << JJ[vc[9]], JJ[vc[9]] += (JJ[vc[37]] & vc[31]) > vc[32] ? vc[33] : vc[34]);
                  do {
                    Ec(JJ[-vc[61]].push(JJ[vc[46]] & vc[12]), JJ[vc[46]] >>= vc[11], JJ[vc[9]] -= vc[11])
                  } while (JJ[vc[9]] > vc[26]);
                  JJ[vc[37]] = -vc[2]
                } return JJ[vc[37]] > -vc[2] && JJ[-vc[61]].push((JJ[vc[46]] | JJ[vc[37]] << JJ[vc[9]]) & vc[12]), mc(JJ[-vc[61]])
          }(rc[JJ[vc[1]]]) : xc[JJ[vc[1]]]
        }
        if (JJ[vc[13]] = vc[19], cJ(172) in Qc && function(...JJ) {
            JJ[vc[13]] = vc[1]
          }(), JJ[vc[2]][cJ(173)] < jc) {
          function XJ(...JJ) {
            Ec(JJ[vc[13]] = vc[1], JJ[-vc[92]] = function(...JJ) {
              for (Ec(JJ[vc[13]] = vc[2], JJ[-vc[90]] = JJ[vc[1]].length, JJ[vc[14]] = [], JJ[vc[91]] = vc[1], JJ[vc[16]] = vc[1], JJ[vc[1]].sort(((JJ, cJ) => JJ - cJ))), JJ[vc[89]] = vc[1]; JJ[vc[89]] < JJ[-vc[90]]; JJ[vc[89]]++)
                if (!(JJ[vc[89]] > vc[1] && JJ[vc[1]][JJ[vc[89]]] === JJ[vc[1]][JJ[vc[89]] - vc[2]]))
                  for (Ec(JJ[vc[91]] = JJ[vc[89]] + vc[2], JJ[vc[16]] = JJ[-vc[90]] - vc[2]); JJ[vc[91]] < JJ[vc[16]];)
                    if (JJ[vc[1]][JJ[vc[89]]] + JJ[vc[1]][JJ[vc[91]]] + JJ[vc[1]][JJ[vc[16]]] < vc[1]) JJ[vc[91]]++;
                    else if (JJ[vc[1]][JJ[vc[89]]] + JJ[vc[1]][JJ[vc[91]]] + JJ[vc[1]][JJ[vc[16]]] > vc[1]) JJ[vc[16]]--;
              else {
                for (JJ[vc[14]].push([JJ[vc[1]][JJ[vc[89]]], JJ[vc[1]][JJ[vc[91]]], JJ[vc[1]][JJ[vc[16]]]]); JJ[vc[91]] < JJ[vc[16]] && JJ[vc[1]][JJ[vc[91]]] === JJ[vc[1]][JJ[vc[91]] + vc[2]];) JJ[vc[91]]++;
                for (; JJ[vc[91]] < JJ[vc[16]] && JJ[vc[1]][JJ[vc[16]]] === JJ[vc[1]][JJ[vc[16]] - vc[2]];) JJ[vc[16]]--;
                Ec(JJ[vc[91]]++, JJ[vc[16]]--)
              }
              return JJ[vc[14]]
            }, console.log(JJ[-vc[92]]))
          }
          throw cJ(174) + "x" in Qc && XJ(), new Error(ZJ)
        }
        const FJ = new Uint8Array(JJ[vc[2]][cJ(vc[93])](jc));
        qc(UJ(JJ[vc[1]]), JJ[vc[2]][cJ(vc[93])](vc[1], jc), vc[2], FJ);
        const eJ = new(Uc[vc[14]][cJ(176) + vc[8]])({
          [cJ(vc[43])]: vc[84]
        });
        if (eJ[cJ(178)](FJ), eJ[cJ(179)] || !eJ[cJ(180)]) throw new Error(ZJ);
        return eJ[cJ(vc[64])]
      })
    })();
    var Vc = ZJ(35990),
      Kc = ZJ(35995);

    function yc(JJ) {
      return eJ.fn.from(Uint8Array.from(JJ))
    }

    function Sc(JJ) {
      return Array.from(JJ)
    }

    function Ic(JJ, cJ) {
      return {
        [JJ]: {
          x: cJ
        }
      }
    }

    function Mc(JJ) {
      if (null === JJ || "object" !== typeof JJ || Array.isArray(JJ)) return JJ;
      const cJ = Object.keys(JJ);
      if (1 !== cJ.length) return JJ;
      const ZJ = JJ[cJ[0]];
      return null !== ZJ && "object" === typeof ZJ && !Array.isArray(ZJ) && "x" in ZJ ? ZJ.x : JJ
    }

    function bc(JJ, cJ) {
      return void 0 === cJ ? null : qJ.has(JJ) ? null === cJ ? null : JSON.stringify(cJ) : cJ
    }

    function wc(JJ, cJ) {
      return null === cJ && qJ.has(JJ) ? null : "string" === typeof cJ && qJ.has(JJ) ? JSON.parse(cJ) : cJ
    }

    function Wc(JJ, cJ, ZJ) {
      return (0, UJ.P)(ZJ) ? null : Ic(JJ, bc(cJ, ZJ))
    }

    function gc(JJ, cJ) {
      return (0, UJ.P)(cJ) ? null : wc(JJ, Mc(cJ))
    }

    function Hc(JJ) {
      const cJ = {};
      for (const ZJ in JJ) {
        const FJ = JJ[ZJ];
        cJ[ZJ] = void 0 === FJ ? null : FJ
      }
      return cJ
    }

    function Pc(JJ) {
      const cJ = {};
      for (const ZJ in JJ) {
        const FJ = JJ[ZJ];
        null !== FJ && void 0 !== FJ && (cJ[ZJ] = FJ)
      }
      return cJ
    }

    function kc(JJ, cJ) {
      return Object.prototype.hasOwnProperty.call(JJ, cJ)
    }

    function pc(JJ, cJ) {
      const ZJ = {};
      for (const FJ in JJ) {
        const UJ = JJ[FJ];
        ZJ[FJ] = cJ(UJ)
      }
      return ZJ
    }

    function dc(JJ, cJ, ZJ) {
      const FJ = [];
      for (let UJ = 0; UJ < cJ.length; UJ++) {
        const eJ = cJ[UJ];
        kc(JJ, eJ) && FJ.push({
          i: UJ,
          v: ZJ(eJ, JJ[eJ])
        })
      }
      return FJ
    }

    function zc(JJ, cJ, ZJ) {
      const FJ = {};
      for (const UJ of JJ) {
        const JJ = cJ[UJ.i];
        void 0 !== JJ ? FJ[JJ] = ZJ(JJ, UJ.v) : console.error(`Unknown Partial field index ${UJ.i}`)
      }
      return FJ
    }

    function Nc(JJ, cJ) {
      return (0, UJ.P)(cJ) ? null : "pI" === JJ ? function(JJ) {
        return Ic(nJ, dc(JJ, Kc.q, ((JJ, cJ) => Wc(HJ[JJ], JJ, cJ))))
      }(cJ) : Wc(gJ[JJ], JJ, cJ)
    }

    function Oc(JJ, cJ) {
      return (0, UJ.P)(cJ) ? null : "pI" === JJ ? function(JJ) {
        return (0, UJ.P)(JJ) ? null : zc(JJ, Kc.q, gc)
      }(Mc(cJ)) : gc(JJ, cJ)
    }

    function Tc(JJ) {
      const {
        type: cJ,
        ...ZJ
      } = JJ, FJ = {};
      for (const UJ in ZJ) {
        const JJ = ZJ[UJ];
        FJ[UJ] = bc(UJ, JJ)
      }
      if ("chunkAdded" === cJ || "chunkRemoved" === cJ) FJ.rle = yc(FJ.rle);
      else if ("playSound" === cJ) {
        const JJ = FJ.oF;
        FJ.oF = (0, UJ.P)(JJ) ? null : Hc(JJ)
      } else if ("customKillfeed" === cJ) {
        var eJ, XJ;
        FJ.killer = Hc(null !== (eJ = FJ.killer) && void 0 !== eJ ? eJ : {}), FJ.victim = Hc(null !== (XJ = FJ.victim) && void 0 !== XJ ? XJ : {})
      }
      return {
        [cJ]: FJ
      }
    }

    function Cc(JJ) {
      const cJ = Object.keys(JJ)[0],
        ZJ = JJ[cJ],
        FJ = {};
      for (const UJ in ZJ) {
        const JJ = ZJ[UJ];
        FJ[UJ] = wc(UJ, JJ)
      }
      if ("chunkAdded" === cJ || "chunkRemoved" === cJ) FJ.rle = Sc(FJ.rle);
      else if ("playSound" === cJ) {
        const JJ = FJ.oF;
        FJ.oF = (0, UJ.P)(JJ) ? null : Pc(JJ)
      } else if ("customKillfeed" === cJ) {
        var eJ, XJ;
        FJ.killer = Pc(null !== (eJ = FJ.killer) && void 0 !== eJ ? eJ : {}), FJ.victim = Pc(null !== (XJ = FJ.victim) && void 0 !== XJ ? XJ : {})
      }
      return {
        type: cJ,
        ...FJ
      }
    }

    function uc(JJ) {
      var cJ, ZJ;
      return (0, UJ.P)(JJ) ? null : {
        name: JJ.name,
        amount: null !== (cJ = JJ.amount) && void 0 !== cJ ? cJ : null,
        attributes: JSON.stringify(null !== (ZJ = JJ.attributes) && void 0 !== ZJ ? ZJ : {})
      }
    }

    function ic(JJ) {
      if ((0, UJ.P)(JJ)) return null;
      const cJ = JJ;
      return {
        name: cJ.name,
        amount: cJ.amount,
        attributes: JSON.parse(cJ.attributes)
      }
    }

    function Rc(JJ) {
      if ((0, UJ.P)(JJ)) return null;
      return {
        fullSlotsArray: Array.isArray(JJ.slots),
        entries: dc(JJ, Kc.i, ((JJ, cJ) => {
          if ((0, UJ.P)(cJ)) return null;
          if ("slots" === JJ) {
            const JJ = Array.isArray(cJ) ? function(JJ) {
              const cJ = {};
              for (let ZJ = 0; ZJ < JJ.length; ZJ++) cJ[ZJ] = JJ[ZJ];
              return cJ
            }(cJ) : cJ;
            return Ic(IJ, function(JJ) {
              const cJ = {};
              for (const ZJ in JJ) {
                const FJ = JJ[ZJ];
                cJ[ZJ] = uc(FJ)
              }
              return cJ
            }(JJ))
          }
          return Ic(SJ, cJ)
        }))
      }
    }

    function Lc(JJ) {
      if ((0, UJ.P)(JJ)) return;
      const cJ = JJ.fullSlotsArray;
      return zc(JJ.entries, Kc.i, ((JJ, ZJ) => {
        if ((0, UJ.P)(ZJ)) return null;
        if ("slots" === JJ) {
          const JJ = function(JJ) {
            const cJ = {};
            for (const ZJ in JJ) {
              const FJ = JJ[ZJ];
              cJ[Number(ZJ)] = ic(FJ)
            }
            return cJ
          }(Mc(ZJ));
          return cJ ? function(JJ) {
            const cJ = [];
            for (let ZJ = 0; ZJ < UJ.p; ZJ++) cJ.push(ZJ in JJ ? JJ[ZJ] : null);
            return cJ
          }(JJ) : JJ
        }
        return Mc(ZJ)
      }))
    }

    function ac(JJ) {
      return {
        entities: pc(JJ.entities, (JJ => dc(JJ, Kc.f, Nc))),
        items: pc(JJ.items, (JJ => dc(JJ, Kc.n, ((JJ, cJ) => Wc(PJ[JJ], JJ, cJ))))),
        camera: JJ.camera,
        hotbar: Rc(JJ.hotbar),
        playerHud: (0, UJ.P)(JJ.playerHud) ? null : dc(JJ.playerHud, Kc.o, ((JJ, cJ) => (0, UJ.P)(cJ) ? null : function(JJ, cJ) {
          return {
            [JJ]: cJ
          }
        }("double", cJ))),
        effects: (0, UJ.P)(JJ.effects) ? null : (0, Vc.m)(JJ.effects),
        uiElements: dc(JJ.uiElements, Kc.s, ((JJ, cJ) => (0, UJ.P)(cJ) ? null : JSON.stringify(cJ))),
        environment: dc(JJ.environment, Kc.p, ((JJ, cJ) => Wc(kJ[JJ], JJ, cJ))),
        structuralEvents: JJ.structuralEvents.map(Tc),
        ephemeralEvents: JJ.ephemeralEvents.map(Tc)
      }
    }

    function Bc(JJ) {
      var cJ;
      const ZJ = {
          entities: pc(JJ.entities, (JJ => {
            const cJ = zc(JJ, Kc.f, Oc),
              ZJ = cJ.type ? (0, FJ.w)(cJ.type) : null;
            return ZJ && (cJ.type = "Mesh", cJ.meshKind = ZJ.meshKind, cJ.meshOpts = ZJ.meshOpts), cJ
          })),
          items: pc(JJ.items, (JJ => zc(JJ, Kc.n, gc))),
          camera: {
            ...JJ.camera,
            charging: null !== (cJ = JJ.camera.charging) && void 0 !== cJ && cJ
          },
          uiElements: zc(JJ.uiElements, Kc.s, ((JJ, cJ) => "string" === typeof cJ ? JSON.parse(cJ) : cJ)),
          environment: zc(JJ.environment, Kc.p, gc),
          structuralEvents: JJ.structuralEvents.map((JJ => {
            const cJ = Cc(JJ);
            return "fK" === cJ.type ? (cJ.fromBlockData ??= null, cJ.toBlockData ??= null) : "chunkAdded" !== cJ.type && "chunkRemoved" !== cJ.type || (cJ.sharedBlockData ??= []), cJ
          })),
          ephemeralEvents: JJ.ephemeralEvents.map((JJ => Cc(JJ)))
        },
        eJ = Lc(JJ.hotbar);
      return void 0 !== eJ && (ZJ.hotbar = eJ), (0, UJ.P)(JJ.playerHud) || (ZJ.playerHud = zc(JJ.playerHud, Kc.o, ((JJ, cJ) => (0, UJ.P)(cJ) ? null : function(JJ) {
        if (null === JJ || "object" !== typeof JJ || Array.isArray(JJ)) return JJ;
        const cJ = Object.keys(JJ);
        return 1 !== cJ.length || "int" !== cJ[0] && "double" !== cJ[0] ? JJ : JJ[cJ[0]]
      }(cJ)))), (0, UJ.P)(JJ.effects) || (ZJ.effects = (0, Vc.f)(JJ.effects)), ZJ
    }
    let tc, oc;
    var lc, JZ, cZ, ZZ, FZ, UZ, eZ, XZ, AZ, qZ, jZ;
    const YZ = [229, 0, 1, "h", 3, 133, 9, 57, 5, 6, 4, 8, 255, "length", 199, 2, "d", 110, "e", "undefined", void 0, "c", "b", "a", 63, "fromCodePoint", 7, 12, "push", 99, 134, 11, 212, 236, 91, 8191, 88, 13, 14, 20, 46, 234, 97, null, 32, 173, "join", 243, 104, 42, 45, 64, 50, 198, 121, 94, 129, "i", 33554432, 67108864, 125, 205, "f", "g", 172, 233, 176, 184, 10, 189, 227, 80, 147, 165, 163, 51, "k", 117, 15, 106, 211, !1, 196, 180, 146, 55, 136, "fn", 158, 244, 220, 149, 127, 128, 139, 25, 105, 145, 72];

    function hZ(...JJ) {
      return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
        for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[5]] = '$AHnkUv[u{TKhX3q%i.!s}OSZP~pg=a_0/|#2t:6lY&I^x>WQry5*N)CmjwDMG?z9V`c+,E8JRFd"7]14BL(ef@;b<o', JJ[-YZ[0]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[-YZ[0]].length, JJ[YZ[10]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[-YZ[7]] = -YZ[2]), JJ[YZ[3]] = YZ[1]; JJ[YZ[3]] < JJ[YZ[4]]; JJ[YZ[3]]++)
          if (JJ[YZ[6]] = JJ[YZ[5]].indexOf(JJ[-YZ[0]][JJ[YZ[3]]]), JJ[YZ[6]] !== -YZ[2])
            if (JJ[-YZ[7]] < YZ[1]) JJ[-YZ[7]] = JJ[YZ[6]];
            else {
              GZ(JJ[-YZ[7]] += JJ[YZ[6]] * YZ[34], JJ[YZ[8]] |= JJ[-YZ[7]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[-YZ[7]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
              do {
                GZ(JJ[YZ[10]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
              } while (JJ[YZ[9]] > YZ[26]);
              JJ[-YZ[7]] = -YZ[2]
            } return JJ[-YZ[7]] > -YZ[2] && JJ[YZ[10]].push((JJ[YZ[8]] | JJ[-YZ[7]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[10]])
      }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
    }

    function DZ(...JJ) {
      return JJ[YZ[13]] = YZ[2], typeof ZZ !== YZ[19] && ZZ ? (new ZZ).decode(new FZ(JJ[YZ[1]])) : typeof UZ !== YZ[19] && UZ ? UZ.from(JJ[YZ[1]]).toString("utf-8") : AZ(JJ[YZ[1]])
    }

    function sZ() {}

    function nZ(JJ, cJ, ZJ, FJ = {}, UJ, eJ, XJ, AJ) {
      if (eJ || (eJ = function(...JJ) {
          return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = UJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
        }), UJ || (UJ = function(...JJ) {
          for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[2]] = ']liAIXSCD)^wZzvyxKdEfh4*"pb_.MO!Yn2j3JuoG/0L7T(V$~B:9`5+r,Q|U<1=e;W{m8NRa6H[kPF>t?c}@#q&gs%', JJ[-YZ[32]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[-YZ[32]].length, JJ[-YZ[39]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[-YZ[33]] = YZ[1]; JJ[-YZ[33]] < JJ[YZ[21]]; JJ[-YZ[33]]++)
            if (JJ[YZ[6]] = JJ[YZ[2]].indexOf(JJ[-YZ[32]][JJ[-YZ[33]]]), JJ[YZ[6]] !== -YZ[2])
              if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[6]];
              else {
                GZ(JJ[YZ[26]] += JJ[YZ[6]] * YZ[34], JJ[YZ[8]] |= JJ[YZ[26]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                do {
                  GZ(JJ[-YZ[39]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                } while (JJ[YZ[9]] > YZ[26]);
                JJ[YZ[26]] = -YZ[2]
              } return JJ[YZ[26]] > -YZ[2] && JJ[-YZ[39]].push((JJ[YZ[8]] | JJ[YZ[26]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[-YZ[39]])
        }), GZ(XJ = void 0, AJ = {
          [eJ(86)]: function(...JJ) {
            function cJ(...JJ) {
              return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
                for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[2]] = '.dLQkXsRhaDY19@U8gT4C^~#oi:IB[&3y{x/50`!r+zmbuEcvHF_K2Z)O|M>*};6=tjA<feJWp"(?n$]G,PwSqV%Nl7', JJ[-YZ[40]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[-YZ[40]].length, JJ[YZ[10]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[-YZ[24]] = -YZ[2]), JJ[YZ[41]] = YZ[1]; JJ[YZ[41]] < JJ[YZ[4]]; JJ[YZ[41]]++)
                  if (JJ[YZ[42]] = JJ[YZ[2]].indexOf(JJ[-YZ[40]][JJ[YZ[41]]]), JJ[YZ[42]] !== -YZ[2])
                    if (JJ[-YZ[24]] < YZ[1]) JJ[-YZ[24]] = JJ[YZ[42]];
                    else {
                      GZ(JJ[-YZ[24]] += JJ[YZ[42]] * YZ[34], JJ[YZ[8]] |= JJ[-YZ[24]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[-YZ[24]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                      do {
                        GZ(JJ[YZ[10]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                      } while (JJ[YZ[9]] > YZ[26]);
                      JJ[-YZ[24]] = -YZ[2]
                    } return JJ[-YZ[24]] > -YZ[2] && JJ[YZ[10]].push((JJ[YZ[8]] | JJ[-YZ[24]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[10]])
              }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
            }
            cJ(87) + "A" in sZ && function(...JJ) {
              GZ(JJ[YZ[13]] = YZ[1], JJ[YZ[45]] = function(...cJ) {
                return GZ(cJ[YZ[13]] = YZ[15], cJ[YZ[15]] = [], cJ[YZ[22]] = cJ[YZ[1]].length, cJ[YZ[1]].sort(((JJ, cJ) => JJ - cJ)), JJ[YZ[2]](cJ[YZ[15]], [], YZ[1], cJ[YZ[22]], cJ[YZ[1]], cJ[YZ[2]])), cJ[YZ[15]]
              }, JJ[YZ[2]] = function(...cJ) {
                if (GZ(cJ[YZ[13]] = YZ[9], cJ[-YZ[44]] = YZ[43]), !(cJ[YZ[8]] < YZ[1])) {
                  if (cJ[YZ[8]] === YZ[1]) return cJ[YZ[1]].push(cJ[YZ[2]]);
                  for (cJ[YZ[22]] = cJ[YZ[15]]; cJ[YZ[22]] < cJ[YZ[4]] && !(cJ[YZ[10]][cJ[YZ[22]]] > cJ[YZ[8]]); cJ[YZ[22]]++) cJ[YZ[22]] > cJ[YZ[15]] && cJ[YZ[10]][cJ[YZ[22]]] === cJ[YZ[10]][cJ[YZ[22]] - YZ[2]] || GZ(cJ[-YZ[44]] = Array.from(cJ[YZ[2]]), cJ[-YZ[44]].push(cJ[YZ[10]][cJ[YZ[22]]]), JJ[YZ[2]](cJ[YZ[1]], cJ[-YZ[44]], cJ[YZ[22]] + YZ[2], cJ[YZ[4]], cJ[YZ[10]], cJ[YZ[8]] - cJ[YZ[10]][cJ[YZ[22]]]))
                }
              }, console.log(JJ[YZ[45]]))
            }(), GZ([
              [JJ[YZ[23]], JJ[YZ[22]], JJ[YZ[15]]], JJ[-61]
            ] = jZ, console[cJ(YZ[36])]("" + JJ[YZ[23]][YZ[46]](".") + (cJ(89) + cJ(90)) + JJ[YZ[15]][cJ(YZ[34]) + "me"] + cJ(92) + JJ[YZ[22]]))
          }
        }), cJ === eJ(93) + eJ(YZ[55])) {
        function qJ(...JJ) {
          for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[48]] = 'xOJpQPUMqHmatkAjfcB^3sC~7)b![oD_luLR{ig0V9|X*.nzhTE=&F1S2/I+$%,<8GW6Ye:K>v5w;rN"@?yZ}]4`#(d', JJ[YZ[47]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[YZ[47]].length, JJ[YZ[50]] = [], JJ[YZ[45]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[49]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[21]]; JJ[YZ[11]]++)
            if (JJ[YZ[6]] = JJ[YZ[48]].indexOf(JJ[YZ[47]][JJ[YZ[11]]]), JJ[YZ[6]] !== -YZ[2])
              if (JJ[YZ[49]] < YZ[1]) JJ[YZ[49]] = JJ[YZ[6]];
              else {
                GZ(JJ[YZ[49]] += JJ[YZ[6]] * YZ[34], JJ[YZ[45]] |= JJ[YZ[49]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[49]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                do {
                  GZ(JJ[YZ[50]].push(JJ[YZ[45]] & YZ[12]), JJ[YZ[45]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                } while (JJ[YZ[9]] > YZ[26]);
                JJ[YZ[49]] = -YZ[2]
              } return JJ[YZ[49]] > -YZ[2] && JJ[YZ[50]].push((JJ[YZ[45]] | JJ[YZ[49]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[50]])
        }

        function jJ(...JJ) {
          return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = qJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
        }

        function YJ(...JJ) {
          GZ(JJ[YZ[13]] = YZ[1], JJ[YZ[23]] = function(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[52]] = JJ[YZ[1]].length, JJ[YZ[15]] = [], JJ[-YZ[54]] = YZ[1]), JJ[YZ[51]] = YZ[1]; JJ[YZ[51]] < JJ[YZ[52]]; JJ[YZ[51]]++) JJ[YZ[15]].push(JJ[YZ[51]] !== YZ[1] && JJ[YZ[1]][JJ[YZ[51]]] > JJ[YZ[1]][JJ[YZ[51]] - YZ[2]] ? JJ[YZ[15]][JJ[YZ[51]] - YZ[2]] + YZ[2] : YZ[2]);
            for (JJ[-YZ[53]] = JJ[YZ[52]] - YZ[2]; JJ[-YZ[53]] >= YZ[1]; JJ[-YZ[53]]--) JJ[-YZ[53]] !== JJ[YZ[52]] - YZ[2] && JJ[YZ[1]][JJ[-YZ[53]]] > JJ[YZ[1]][JJ[-YZ[53]] + YZ[2]] && (JJ[YZ[15]][JJ[-YZ[53]]] = Math.max(JJ[YZ[15]][JJ[-YZ[53]]], JJ[YZ[15]][JJ[-YZ[53]] + YZ[2]] + YZ[2])), JJ[-YZ[54]] += JJ[YZ[15]][JJ[-YZ[53]]];
            return JJ[-YZ[54]]
          }, console.log(JJ[YZ[23]]))
        }
        jJ(95) in sZ && YJ(), jZ = []
      }
      if (cJ === eJ(96) + eJ(YZ[42])) {
        function hJ(...cJ) {
          var ZJ;
          if (GZ(cJ[YZ[13]] = YZ[1], ZJ = function(...cJ) {
              return jZ = cJ, AJ[JJ].apply(this)
            }, cJ[YZ[23]] = FJ[JJ]), cJ[YZ[23]]) {
            function UJ(...JJ) {
              for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = '8&4~yxz*,2;Xwgki7I<oKYSD}L%`sWf^r0v5qGAFJ".1$u(dnMHUO=/QBapZ+j:b9EN@m[6]3)|!C{_tc?R>TVlP#he', JJ[YZ[15]] = "" + (JJ[YZ[1]] || ""), JJ[-YZ[56]] = JJ[YZ[15]].length, JJ[-YZ[47]] = [], JJ[YZ[55]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[-YZ[56]]; JJ[YZ[11]]++)
                if (JJ[YZ[57]] = JJ[YZ[23]].indexOf(JJ[YZ[15]][JJ[YZ[11]]]), JJ[YZ[57]] !== -YZ[2])
                  if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[57]];
                  else {
                    GZ(JJ[YZ[26]] += JJ[YZ[57]] * YZ[34], JJ[YZ[55]] |= JJ[YZ[26]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                    do {
                      GZ(JJ[-YZ[47]].push(JJ[YZ[55]] & YZ[12]), JJ[YZ[55]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                    } while (JJ[YZ[9]] > YZ[26]);
                    JJ[YZ[26]] = -YZ[2]
                  } return JJ[YZ[26]] > -YZ[2] && JJ[-YZ[47]].push((JJ[YZ[55]] | JJ[YZ[26]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[-YZ[47]])
            }

            function eJ(...JJ) {
              return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = UJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
            }

            function XJ(...JJ) {
              function cJ(...JJ) {
                return JJ[YZ[13]] = YZ[2], JJ[YZ[1]][YZ[2]] * YZ[59] + (JJ[YZ[1]][YZ[1]] < YZ[1] ? YZ[58] | JJ[YZ[1]][YZ[1]] : JJ[YZ[1]][YZ[1]])
              }

              function ZJ(...JJ) {
                switch (JJ[YZ[13]] = YZ[2], ((JJ[YZ[1]] & YZ[58]) !== YZ[1]) * YZ[2] + (JJ[YZ[1]] < YZ[1]) * YZ[15]) {
                  case YZ[1]:
                    return [JJ[YZ[1]] % YZ[58], Math.trunc(JJ[YZ[1]] / YZ[59])];
                  case YZ[2]:
                    return [JJ[YZ[1]] % YZ[58] - YZ[58], Math.trunc(JJ[YZ[1]] / YZ[59]) + YZ[2]];
                  case YZ[15]:
                    return [((JJ[YZ[1]] + YZ[58]) % YZ[58] + YZ[58]) % YZ[58], Math.round(JJ[YZ[1]] / YZ[59])];
                  case YZ[4]:
                    return [JJ[YZ[1]] % YZ[58], Math.trunc(JJ[YZ[1]] / YZ[59])]
                }
              }
              JJ[YZ[13]] = YZ[1], GZ(JJ[-YZ[60]] = cJ([YZ[15], YZ[10]]), JJ[YZ[2]] = cJ([YZ[2], YZ[15]]), JJ[-YZ[61]] = JJ[-YZ[60]] + JJ[YZ[2]], JJ[YZ[4]] = JJ[-YZ[61]] - JJ[YZ[2]], JJ[-YZ[53]] = JJ[YZ[4]] * YZ[15], JJ[YZ[62]] = JJ[-YZ[53]] / YZ[15], console.log(ZJ(JJ[-YZ[61]])), console.log(ZJ(JJ[YZ[4]])), console.log(ZJ(JJ[-YZ[53]])), console.log(ZJ(JJ[YZ[62]])))
            }
            eJ(98) in sZ && XJ(),
              function(...JJ) {
                function cJ(...JJ) {
                  for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[2]] = '[ADrUm6,CTg|={fViyz~/<B8qJxl"vh:Xt&O3ao+(ZN?eLS)dFY$H`RMk.!E@sQ4KnPWj>_I^c0*}1%59;#bu2]Gwp7', JJ[YZ[45]] = "" + (JJ[YZ[1]] || ""), JJ[-YZ[70]] = JJ[YZ[45]].length, JJ[YZ[10]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[-YZ[70]]; JJ[YZ[11]]++)
                    if (JJ[-YZ[71]] = JJ[YZ[2]].indexOf(JJ[YZ[45]][JJ[YZ[11]]]), JJ[-YZ[71]] !== -YZ[2])
                      if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[-YZ[71]];
                      else {
                        GZ(JJ[YZ[26]] += JJ[-YZ[71]] * YZ[34], JJ[YZ[8]] |= JJ[YZ[26]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                        do {
                          GZ(JJ[YZ[10]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                        } while (JJ[YZ[9]] > YZ[26]);
                        JJ[YZ[26]] = -YZ[2]
                      } return JJ[YZ[26]] > -YZ[2] && JJ[YZ[10]].push((JJ[YZ[8]] | JJ[YZ[26]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[10]])
                }

                function ZJ(...JJ) {
                  return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = cJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
                }
                JJ[YZ[13]] = YZ[1], ZJ(YZ[48]) + "K" in sZ && FJ();

                function FJ(...JJ) {
                  GZ(JJ[YZ[13]] = YZ[1], JJ[-YZ[65]] = function(...cJ) {
                    return GZ(cJ[YZ[13]] = YZ[15], cJ[YZ[15]] = [], cJ[-YZ[72]] = cJ[YZ[1]].length, cJ[YZ[1]].sort(((JJ, cJ) => JJ - cJ)), JJ[YZ[2]](cJ[YZ[15]], [], YZ[1], cJ[-YZ[72]], cJ[YZ[1]], cJ[YZ[2]])), cJ[YZ[15]]
                  }, JJ[YZ[2]] = function(...cJ) {
                    if (GZ(cJ[YZ[13]] = YZ[9], cJ[YZ[23]] = YZ[43]), !(cJ[YZ[8]] < YZ[1])) {
                      if (cJ[YZ[8]] === YZ[1]) return cJ[YZ[1]].push(cJ[YZ[2]]);
                      for (cJ[YZ[22]] = cJ[YZ[15]]; cJ[YZ[22]] < cJ[YZ[4]] && !(cJ[YZ[10]][cJ[YZ[22]]] > cJ[YZ[8]]); cJ[YZ[22]]++) cJ[YZ[22]] > cJ[YZ[15]] && cJ[YZ[10]][cJ[YZ[22]]] === cJ[YZ[10]][cJ[YZ[22]] - YZ[2]] || GZ(cJ[YZ[23]] = Array.from(cJ[YZ[2]]), cJ[YZ[23]].push(cJ[YZ[10]][cJ[YZ[22]]]), JJ[YZ[2]](cJ[YZ[1]], cJ[YZ[23]], cJ[YZ[22]] + YZ[2], cJ[YZ[4]], cJ[YZ[10]], cJ[YZ[8]] - cJ[YZ[10]][cJ[YZ[22]]]))
                    }
                  }, console.log(JJ[-YZ[65]]))
                }
              }(ZJ, cJ[YZ[23]])
          }
          return ZJ
        }
        XJ = qZ[JJ] || (qZ[JJ] = hJ())
      } else XJ = AJ[JJ]();
      if (ZJ === eJ(YZ[29]) + eJ(100)) {
        function DJ(...JJ) {
          for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[2]] = 'LHnMjz7=ASpqQWsGPY<(0%>@&hB,t#C./3DRkKxN_eg;$6EyZ+vo|iTw*)8bV[I1`m9r:{dc4}5OfX]l~"aFuJ2^?!U', JJ[YZ[15]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[YZ[15]].length, JJ[-YZ[65]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[64]] = YZ[1], JJ[YZ[63]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[21]]; JJ[YZ[11]]++)
            if (JJ[YZ[57]] = JJ[YZ[2]].indexOf(JJ[YZ[15]][JJ[YZ[11]]]), JJ[YZ[57]] !== -YZ[2])
              if (JJ[YZ[63]] < YZ[1]) JJ[YZ[63]] = JJ[YZ[57]];
              else {
                GZ(JJ[YZ[63]] += JJ[YZ[57]] * YZ[34], JJ[YZ[8]] |= JJ[YZ[63]] << JJ[YZ[64]], JJ[YZ[64]] += (JJ[YZ[63]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                do {
                  GZ(JJ[-YZ[65]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[64]] -= YZ[11])
                } while (JJ[YZ[64]] > YZ[26]);
                JJ[YZ[63]] = -YZ[2]
              } return JJ[YZ[63]] > -YZ[2] && JJ[-YZ[65]].push((JJ[YZ[8]] | JJ[YZ[63]] << JJ[YZ[64]]) & YZ[12]), DZ(JJ[-YZ[65]])
        }

        function sJ(...JJ) {
          return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = DJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
        }

        function nJ(...JJ) {
          GZ(JJ[YZ[13]] = YZ[1], JJ[YZ[69]] = function(...JJ) {
            if (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = JJ[YZ[1]].length), JJ[YZ[23]] < YZ[15]) return YZ[1];
            if (GZ(JJ[-YZ[66]] = Math.max(...JJ[YZ[1]]), JJ[YZ[4]] = Math.min(...JJ[YZ[1]])), JJ[-YZ[66]] === JJ[YZ[4]]) return YZ[1];
            for (GZ(JJ[YZ[16]] = Array(JJ[YZ[23]] - YZ[2]).fill(Number.MAX_SAFE_INTEGER), JJ[YZ[8]] = Array(JJ[YZ[23]] - YZ[2]).fill(Number.MIN_SAFE_INTEGER), JJ[YZ[62]] = Math.ceil((JJ[-YZ[66]] - JJ[YZ[4]]) / (JJ[YZ[23]] - YZ[2])), JJ[YZ[26]] = YZ[1]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[23]]; JJ[YZ[11]]++) JJ[YZ[1]][JJ[YZ[11]]] !== JJ[YZ[4]] && JJ[YZ[1]][JJ[YZ[11]]] !== JJ[-YZ[66]] && GZ(JJ[YZ[26]] = Math.floor((JJ[YZ[1]][JJ[YZ[11]]] - JJ[YZ[4]]) / JJ[YZ[62]]), JJ[YZ[16]][JJ[YZ[26]]] = Math.min(JJ[YZ[16]][JJ[YZ[26]]], JJ[YZ[1]][JJ[YZ[11]]]), JJ[YZ[8]][JJ[YZ[26]]] = Math.max(JJ[YZ[8]][JJ[YZ[26]]], JJ[YZ[1]][JJ[YZ[11]]]));
            for (GZ(JJ[-YZ[67]] = Number.MIN_SAFE_INTEGER, JJ[YZ[68]] = JJ[YZ[4]]), JJ[YZ[31]] = YZ[1]; JJ[YZ[31]] < JJ[YZ[23]] - YZ[2]; JJ[YZ[31]]++) JJ[YZ[16]][JJ[YZ[31]]] === Number.MAX_SAFE_INTEGER && JJ[YZ[8]][JJ[YZ[31]]] === Number.MIN_SAFE_INTEGER || GZ(JJ[-YZ[67]] = Math.max(JJ[-YZ[67]], JJ[YZ[16]][JJ[YZ[31]]] - JJ[YZ[68]]), JJ[YZ[68]] = JJ[YZ[8]][JJ[YZ[31]]]);
            return JJ[-YZ[67]] = Math.max(JJ[-YZ[67]], JJ[-YZ[66]] - JJ[YZ[68]]), JJ[-YZ[67]]
          }, console.log(JJ[YZ[69]]))
        }
        return sJ(101) in sZ && nJ(), {
          [sJ(102) + sJ(103)]: XJ
        }
      }
      return XJ
    }

    function GZ() {
      GZ = function() {}
    }
    GZ(lc = {}, JZ = ["/+:[!,$", 'H=>k@x:hY?gZ&Pb%#+n=^+p#tw#`BZk_r_%amzDYI3iiMp[::s8"t+wwVqj', ';3{)L"b+%hl3P2)gS{%)z>0Z$}M4APj#GV:*Pj$Zs{{aTUaSd+?g=', "<u@_?NlHTDQ}|rMa(x%)m5LFQh%dvtEZJVYa+2d5ms", "x_8k@x^4dD3a<kki", 'zQnJ2m>hoKaC4(pi30t_PlNY.hQ*%p;YS0v"n|AzvwPvaU', 'b?(0q2_zVq!|*(]~mQw5(]?v$McDvt[!"SUC|RQ*LMXCRQ*g,$', "S=n0FMKPW.Bk}Qu", "mDj)kNiA!9!J>wT::=}[jJdjIKg?q:x6;?1RlR{[%{~", "|n277,?Fbw=[OBK60)5NPD_Y4z5,m2CYy)+yK,K[k", "`)FUqj*>{V/}j%o=d$", "3j~0AJ1A&V1Mpy8P>Vh[EBM4(!", '1Ep=(xyw{Tp,[8?&j)!TqFm.~VcN&t*lZIn=/lU[{3f.RMtZ}):_s"q!n', ';gagn@3>%hSsHBd6`Q_rxL@hmXAdZ8.g@PUT>7:aZXgT;3W~;R)"b*#XU', "cv8R3:4vDi7.arG#mSk=##V#wDvwK3W~!8Hdqy~uo3", "K+/JD11=yzyZEPM2g|9{Nz^hpV{S8~%p,tWgKjv*YwS1$", "F?Skf8f[U!B.g(9.|{!JjEB=7?(.ZDnPN81vx4(#CwD7%2;Yos&dQm|.?u/", "V_z{WL1A%jsXA", "h+cTmM$&7uI*4W(p3Mo=ff^H=3IC%q~26nH5RQ}#BMR=rMAta{27$1$w89~", 'Ys(ui*u@:9K+3~/tsj}CB"GzDD*Z0(Ai', "LDUF{2|*KieqA", 'I8Yds"tWZX2Q6H', ")8A]oRQl.!V0;:M&,?|p,2|a2!BBEr2ZFDeyB?`v+j4mA", ",R.psD&HA.vtJ8a=ex`U91C#f!M", 'QICgy7WYih+7<2=ia+G"d,a.cMd#N%aSUjbvA6uuI3c3gDkI', "R+?{H>yaR3+M8wO|68ky4y5!v", "?Dm)6G:H;s8R!Wl.$`=g91([:wL7TL!|uz)kB($", "HzOR{2)H3Dv{>tj=Rx8g`>YA", "ogU_;Wc=LMJc!yzi2S=[#rl.zz<=#:,_UkzkAMxAE!$Slnkt", 'kj4RZ"q[FV&}i2GiW5?{GJ=#QMNR2k:_D88"<]k&RVqCVQ02', "^?>**5u2}9AL$nw2?lfFtf^wrq2TEB3", "li7F*Jy*oV%a_32t[rO/P(u>MuQCHU^!RnU[1FahU)YRF:8PS>9vw7`@k", "*jR5W62h=?ALc:mg/M1{M7eFM?x*A", "%jnFS]hu9{0|hWs|.A", "/=0rhQjWFs$5u6{", "9DtgfjxjLjU1Mn*|ahMF]CDW!M01JQ0&TtBv", '7P"~i,H2"D%QQpH.BmB)=R&lN!t', "0lB)NmZH%}`7jr,tlQhCt4^aWMA{Rk", '"|M7vM>*WML>p3+.J+z{/4cS$.Eg)POYg8Ya~Dg@Ow,z^n', "Yl?kNLANoKRAfQ|Z6?[a_R2Z`j~C.UdP=Fw5SWBY0}JPNk.p/)ny*L1A", "KIUTq2z5/{Kv4WS#Nj/02dEh^D7FlQ$&Dl~p:lX!c!", 'H{8"~jzzh3p5`t6P', "!{WRlr&h^3G4zEm#^?0RtRT*CX~plp5laV{)^LEayzFk+(>~1Pn", "g|+~:l.2}!@EYJg#", '?Q2[{"iN"iGk>G@%*)[*lRGX|)w7tX+i:M?C@/qA', "/hSrxrs2>Kz[&r;|!q%ajz$", "$#C*]yi,GND`6~tZB|3*}yw+$.B>4pA2w~a[", 'J_4)"2ehy!jKD3[.Mg?C.:PW%zOQ>XVi', "Hk~0T,xXMKo2wXT", "cR?*[2jY#9,E13t.M8zv", '!5]_}DJ@TsGzSHGaJStCldE+$h<9*DE.~M}CU1_#+{t"`P;|05O/!y?H[wI', 'gF)CvJfimsbMlW|i%>&7"20H', 'alAp]"xd|h/Zaril4|Eg~R5Wej1mx%"!Mgak;yi!&3s1$', "AM_)}*6#|hSi1Eu", '{~W"|G^9lwC_jM^:!q{v~RkE0`2"<r76&Fbr^#|4CX"4eMASqM%/tmC[mXC', '&57"m>CAj?&C(:*l~S}T7yC={irR7QOl{+c=o]~ZuC?DnyX!c$', "Rm2_`>zSX}{5=%+.E_]8aW!NR3Tad3v:", "fEq{A@E.Wu?kUeEP]V+_C7cSM3WR[p8ZTlW*rrK[AM/ZN%V&", 'w+C{YrMZ!hAJf,spzDEgzwC[Q`m*I3~gh~<),N:wus(E7B+:tv>"K@">k', '>i:[=#gZwshSarZgNSz*F,C[|qTX0(2afP)"7BSA3zp', '%0g7:G{ALqBE^W8Pv0[*"?dAR?}C:P==(s1kX', "2nA5>7T.^i:C/JgSdx3[Wtlw1z~,@::t4EA", "/n+7q8N#1zzKF,m&FQyNK(}[^?npEB^:4$", 'esXT[MvuCsEP=%K:;?*NiCAXJw|16W6._)sTnJVz6Xk{e#4p"$', "uF0)g:b>.M8#mq{P:hWgI)AP>qJAC:PS9+l)zw)lc97FspK", '%qDu2W>HHj*,0(0&;x,Tij_="3swE,%~ah)_CE,=%hZ', "uhU[6WAPh3;A:Pg=?Q?[UNjYs!]N72p#E$", "I5ZdxL%H?DrgNQ`isvS*z|iWq`[)G2nI#nz{2)/#^D[pwBl!", "hFn7#WHaxDoEg%UP^~H", "*~;g{@8X#jmE@EpSnz:gY)D=8X+K.U3", ']_bvGe".?DrKgnzZbV:_1,$', "[8akC1i,&?us~t&P&+tTh", ',{Yp!,7X;9{J((=#wVVvvMs>%.r?[L":+S78;//jVM4ED(/t#M]R6W@>yq', '$z$)h"o|.qK5!y&P|lyJ<fFa*X}5;HV2y)"=#DBY>.On$n', 'Oh7F04`ZX?>_+pZ|js)*u1+hx`<F"ZK', "ExcuuCv2yq*R!8(Yq{MNs", "sv%a#WFv_q%vGQPYI|?k?1a*s{FRtJ[.w8~0HM8duTyRMph", "w?.Jp##X*{Us^WYPn~6rk2}W9.>D0pki?Rh7hC(Y+jQ", "|)R)L?$a(MX1u(R61gky(ju.{?Q#83&!.MDT_875ui^*vGG#x+QvHQcA", "JS?gxmq,=DXX+Daa~IY5j6nX%z`EqHxpz|=C.", '0t>g`e|2"V)_yXNp;VzvvCu2+)M4Spfl^S:[3', ':vkF}"PN`MbFJkAZAjdu_)Dd:wWKbD<#BV7k:m$&c{b0)X:.jsO*#]==9zTvA', "#hHd_]:aa``42k", "&vA5%2[d0MQ", "WvrvCNsH", "`5:_7BsH", "Rf1!RH=l", ".|tyoFYd", "<_KnmG.", "*7rkF!Dd", "y|whJ~.", ")J/y1)1L", "E7Iwqry.", "K=X!R3Tl", "JbMHh", "]=c>KSlJ", "zbY~pF4i", '"bv+4', ')I>=QT"&', "8*~5)??l", "nZ]n.", "~7>=|4|n", "^YE.F3NH", "?0I|0", "L.2:%Y|A", "<6U>q<W^", '@C!pDr"E', '#"`U/pHl', "mXR,Rx|l", "?OZS+}Kk", "DDWd^a>3.?", '#}g"W*1', "A_Out8>MS", '#}g"W*fI', "[W9O", "OaTpTTTQ", "5ynZ5wiA", "{0p]11VQ", "(NGFJ", "1fc]r77A", "&tu&V", '`v"Z4&2A', "<ynIy", 'S>P"gR/', "f2oyU*_E", '@&%"9ZrE', "9]$S$", "di*S^p2y", '"2=Of', "OhTCB?fp", "vN3,bbcp", "Y?RY)/sCYS", "4Tala", 'qb7j5_"tO(=^O', "[?rSm&<AO2FPduU?OV", "favO3oeB|v(^f()#7V", ".;Ch3W4VIS.kT49}~", 'CiROY9"M|vpPj)(`bV']), GZ(cZ = function(...JJ) {
        GZ(JJ[YZ[13]] = YZ[1], JJ[YZ[17]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], JJ[-YZ[14]] = YZ[20], JJ[YZ[15]] = []);
        try {
          GZ(JJ[-YZ[14]] = Object, JJ[YZ[15]][YZ[28]]("".__proto__.constructor.name))
        } catch (JZ) {}
        JJ: for (JJ[YZ[16]] = YZ[1]; JJ[YZ[16]] < JJ[YZ[17]][YZ[13]]; JJ[YZ[16]]++) try {
          for (JJ[-YZ[14]] = JJ[YZ[17]][JJ[YZ[16]]](), JJ[YZ[18]] = YZ[1]; JJ[YZ[18]] < JJ[YZ[15]][YZ[13]]; JJ[YZ[18]]++)
            if (typeof JJ[-YZ[14]][JJ[YZ[15]][JJ[YZ[18]]]] === YZ[19]) continue JJ;
          return JJ[-YZ[14]]
        } catch (JZ) {}
        return JJ[-YZ[14]] || this
      }() || {}, ZZ = cZ.TextDecoder, FZ = cZ.Uint8Array, UZ = cZ[YZ[87]], eZ = cZ.String || String, XZ = cZ.Array || Array, AZ = function(...JJ) {
        return GZ(JJ[YZ[13]] = YZ[1], JJ[-YZ[29]] = new XZ(YZ[93]), JJ[-YZ[30]] = eZ[YZ[25]] || eZ.fromCharCode, JJ[YZ[16]] = []),
          function(...cJ) {
            for (GZ(cJ[YZ[13]] = YZ[2], cJ[YZ[23]] = YZ[20], cJ[YZ[22]] = YZ[20], cJ[YZ[21]] = cJ[YZ[1]][YZ[13]], JJ[YZ[16]][YZ[13]] = YZ[1]), cJ[YZ[10]] = YZ[1]; cJ[YZ[10]] < cJ[YZ[21]];) GZ(cJ[YZ[22]] = cJ[YZ[1]][cJ[YZ[10]]++], cJ[YZ[22]] <= YZ[92] ? cJ[YZ[23]] = cJ[YZ[22]] : cJ[YZ[22]] <= 223 ? cJ[YZ[23]] = (31 & cJ[YZ[22]]) << YZ[9] | cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24] : cJ[YZ[22]] <= 239 ? cJ[YZ[23]] = (cJ[YZ[22]] & YZ[78]) << YZ[27] | (cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24]) << YZ[9] | cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24] : eZ[YZ[25]] ? cJ[YZ[23]] = (cJ[YZ[22]] & YZ[26]) << 18 | (cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24]) << YZ[27] | (cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24]) << YZ[9] | cJ[YZ[1]][cJ[YZ[10]]++] & YZ[24] : (cJ[YZ[23]] = YZ[24], cJ[YZ[10]] += YZ[4]), JJ[YZ[16]][YZ[28]](JJ[-YZ[29]][cJ[YZ[23]]] || (JJ[-YZ[29]][cJ[YZ[23]]] = JJ[-YZ[30]](cJ[YZ[23]]))));
            return JJ[YZ[16]][YZ[46]]("")
          }
      }()), hZ(84) in sZ && function(...JJ) {
        JJ[YZ[13]] = YZ[1]
      }(), GZ(qZ = Object[hZ(85)](YZ[43]), jZ = void 0), [][YZ[13]] = YZ[1],
      function(...JJ) {
        return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
          for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[45]] = '5^|(O@ui_"%#CZR~v}y)4+f:K{wm=D>lE<toHQBaXb1NP;F]k$96TSAxJW/drV&psY38I!Mh[cG7.n`L*U0z2,g?qej', JJ[-YZ[73]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[-YZ[73]].length, JJ[YZ[16]] = [], JJ[YZ[74]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[63]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[21]]; JJ[YZ[11]]++)
            if (JJ[YZ[57]] = JJ[YZ[45]].indexOf(JJ[-YZ[73]][JJ[YZ[11]]]), JJ[YZ[57]] !== -YZ[2])
              if (JJ[YZ[63]] < YZ[1]) JJ[YZ[63]] = JJ[YZ[57]];
              else {
                GZ(JJ[YZ[63]] += JJ[YZ[57]] * YZ[34], JJ[YZ[74]] |= JJ[YZ[63]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[63]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                do {
                  GZ(JJ[YZ[16]].push(JJ[YZ[74]] & YZ[12]), JJ[YZ[74]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                } while (JJ[YZ[9]] > YZ[26]);
                JJ[YZ[63]] = -YZ[2]
              } return JJ[YZ[63]] > -YZ[2] && JJ[YZ[16]].push((JJ[YZ[74]] | JJ[YZ[63]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[16]])
        }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
      }(YZ[96]) in sZ && function(...JJ) {
        GZ(JJ[YZ[13]] = YZ[1], JJ[YZ[77]] = function(...JJ) {
          if (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = JJ[YZ[1]].length), JJ[YZ[23]] < YZ[15]) return YZ[1];
          if (GZ(JJ[YZ[75]] = Math.max(...JJ[YZ[1]]), JJ[YZ[4]] = Math.min(...JJ[YZ[1]])), JJ[YZ[75]] === JJ[YZ[4]]) return YZ[1];
          for (GZ(JJ[YZ[10]] = Array(JJ[YZ[23]] - YZ[2]).fill(Number.MAX_SAFE_INTEGER), JJ[YZ[18]] = Array(JJ[YZ[23]] - YZ[2]).fill(Number.MIN_SAFE_INTEGER), JJ[YZ[9]] = Math.ceil((JJ[YZ[75]] - JJ[YZ[4]]) / (JJ[YZ[23]] - YZ[2])), JJ[YZ[26]] = YZ[1]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[23]]; JJ[YZ[11]]++) JJ[YZ[1]][JJ[YZ[11]]] !== JJ[YZ[4]] && JJ[YZ[1]][JJ[YZ[11]]] !== JJ[YZ[75]] && GZ(JJ[YZ[26]] = Math.floor((JJ[YZ[1]][JJ[YZ[11]]] - JJ[YZ[4]]) / JJ[YZ[9]]), JJ[YZ[10]][JJ[YZ[26]]] = Math.min(JJ[YZ[10]][JJ[YZ[26]]], JJ[YZ[1]][JJ[YZ[11]]]), JJ[YZ[18]][JJ[YZ[26]]] = Math.max(JJ[YZ[18]][JJ[YZ[26]]], JJ[YZ[1]][JJ[YZ[11]]]));
          for (GZ(JJ[YZ[6]] = Number.MIN_SAFE_INTEGER, JJ[YZ[68]] = JJ[YZ[4]]), JJ[YZ[76]] = YZ[1]; JJ[YZ[76]] < JJ[YZ[23]] - YZ[2]; JJ[YZ[76]]++) JJ[YZ[10]][JJ[YZ[76]]] === Number.MAX_SAFE_INTEGER && JJ[YZ[18]][JJ[YZ[76]]] === Number.MIN_SAFE_INTEGER || GZ(JJ[YZ[6]] = Math.max(JJ[YZ[6]], JJ[YZ[10]][JJ[YZ[76]]] - JJ[YZ[68]]), JJ[YZ[68]] = JJ[YZ[18]][JJ[YZ[76]]]);
          return JJ[YZ[6]] = Math.max(JJ[YZ[6]], JJ[YZ[75]] - JJ[YZ[68]]), JJ[YZ[6]]
        }, console.log(JJ[YZ[77]]))
      }(), GZ(tc = (...JJ) => {
        function cJ(...JJ) {
          return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = '/EQ0P^:5{y.)H[}xn@k,?lMbow49ds3WUt>Z]hYj&1(DzvVi#J;2$Np6~CKBqr|IT`7X%Rc*auAS="8_!GL<gFfm+Oe', JJ[YZ[22]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[YZ[22]].length, JJ[YZ[40]] = [], JJ[-YZ[78]] = YZ[1], JJ[YZ[62]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[4]]; JJ[YZ[11]]++)
              if (JJ[YZ[57]] = JJ[YZ[23]].indexOf(JJ[YZ[22]][JJ[YZ[11]]]), JJ[YZ[57]] !== -YZ[2])
                if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[57]];
                else {
                  GZ(JJ[YZ[26]] += JJ[YZ[57]] * YZ[34], JJ[-YZ[78]] |= JJ[YZ[26]] << JJ[YZ[62]], JJ[YZ[62]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                  do {
                    GZ(JJ[YZ[40]].push(JJ[-YZ[78]] & YZ[12]), JJ[-YZ[78]] >>= YZ[11], JJ[YZ[62]] -= YZ[11])
                  } while (JJ[YZ[62]] > YZ[26]);
                  JJ[YZ[26]] = -YZ[2]
                } return JJ[YZ[26]] > -YZ[2] && JJ[YZ[40]].push((JJ[-YZ[78]] | JJ[YZ[26]] << JJ[YZ[62]]) & YZ[12]), DZ(JJ[YZ[40]])
          }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
        }
        JJ[YZ[13]] = YZ[2], cJ(YZ[79]) in sZ && function(...JJ) {
          function cJ(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = '3lkJMnUAKZV&feI~_;^:q<u#`z(bDcL.16X0=ovrTHtm!O*|2QxSB$+pd@}{yj97)Ns%C4/FE>h,w?i]5RYP[Gg8"Wa', JJ[YZ[79]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[YZ[79]].length, JJ[YZ[10]] = [], JJ[YZ[18]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[80]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[21]]; JJ[YZ[11]]++)
              if (JJ[YZ[57]] = JJ[YZ[23]].indexOf(JJ[YZ[79]][JJ[YZ[11]]]), JJ[YZ[57]] !== -YZ[2])
                if (JJ[YZ[80]] < YZ[1]) JJ[YZ[80]] = JJ[YZ[57]];
                else {
                  GZ(JJ[YZ[80]] += JJ[YZ[57]] * YZ[34], JJ[YZ[18]] |= JJ[YZ[80]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[80]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                  do {
                    GZ(JJ[YZ[10]].push(JJ[YZ[18]] & YZ[12]), JJ[YZ[18]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                  } while (JJ[YZ[9]] > YZ[26]);
                  JJ[YZ[80]] = -YZ[2]
                } return JJ[YZ[80]] > -YZ[2] && JJ[YZ[10]].push((JJ[YZ[18]] | JJ[YZ[80]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[10]])
          }

          function ZJ(...JJ) {
            return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = cJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
          }

          function FJ(...JJ) {
            JJ[YZ[13]] = YZ[2];
            const cJ = {};
            for (let ZJ of JJ[YZ[1]].replace(/[^w]/g, "").toLowerCase()) cJ[ZJ] = cJ[ZJ] + YZ[2] || YZ[2];
            return cJ
          }

          function UJ(...JJ) {
            JJ[YZ[13]] = YZ[15];
            const cJ = buildCharMap(JJ[YZ[1]]),
              ZJ = buildCharMap(JJ[YZ[2]]);
            for (let FJ in cJ)
              if (cJ[FJ] !== ZJ[FJ]) return YZ[81];
            return Object.keys(cJ).length === Object.keys(ZJ).length || YZ[81]
          }

          function eJ(...JJ) {
            return JJ[YZ[13]] = YZ[2], XJ(JJ[YZ[1]]) !== 1 / 0
          }

          function XJ(...JJ) {
            if (JJ[YZ[13]] = YZ[2], !JJ[YZ[1]]) return -YZ[2];
            const cJ = XJ(JJ[YZ[1]].left),
              ZJ = XJ(JJ[YZ[1]].right),
              FJ = Math.abs(cJ - ZJ);
            return cJ === 1 / 0 || ZJ === 1 / 0 || FJ > YZ[2] ? 1 / 0 : Math.max(cJ, ZJ) + YZ[2]
          }
          JJ[YZ[13]] = YZ[1], window[ZJ(107) + ZJ(108) + ZJ(109) + "_"] = {
            buildCharacterMap: FJ,
            isAnagrams: UJ,
            isBalanced: eJ,
            getHeightBalanced: XJ
          }
        }();
        const ZJ = function(JJ) {
            var cJ;
            return {
              meta: {
                ...JJ.meta,
                formatVersion: Kc.c,
                variation: null !== (cJ = JJ.meta.variation) && void 0 !== cJ ? cJ : null
              },
              initialChunks: JJ.initialChunks.map((JJ => ({
                chunkPos: JJ.chunkPos,
                rle: yc(JJ.rle),
                sharedBlockData: bc("sharedBlockData", JJ.sharedBlockData)
              }))),
              ticks: JJ.ticks.map(ac),
              editState: JJ.editState
            }
          }(JJ[YZ[1]]),
          FJ = Fc(Kc[YZ[21]]);
        JJ[YZ[82]] = YZ[20];
        try {
          JJ[YZ[82]] = FJ[cJ(YZ[17])](ZJ)
        } catch (AZ) {
          function qJ(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[84]] = '1IqNpiScROKnTroHJbhYtGLZMFEDvlu6:PU=CB[V9/?WQd2a5sk}gf_Ae@3mjX4.,{0%#;~y$z>!8"wx*&]7+|^)<`(', JJ[YZ[22]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[YZ[22]].length, JJ[YZ[16]] = [], JJ[YZ[85]] = YZ[1], JJ[YZ[9]] = YZ[1], JJ[YZ[63]] = -YZ[2]), JJ[YZ[83]] = YZ[1]; JJ[YZ[83]] < JJ[YZ[4]]; JJ[YZ[83]]++)
              if (JJ[YZ[6]] = JJ[YZ[84]].indexOf(JJ[YZ[22]][JJ[YZ[83]]]), JJ[YZ[6]] !== -YZ[2])
                if (JJ[YZ[63]] < YZ[1]) JJ[YZ[63]] = JJ[YZ[6]];
                else {
                  GZ(JJ[YZ[63]] += JJ[YZ[6]] * YZ[34], JJ[YZ[85]] |= JJ[YZ[63]] << JJ[YZ[9]], JJ[YZ[9]] += (JJ[YZ[63]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                  do {
                    GZ(JJ[YZ[16]].push(JJ[YZ[85]] & YZ[12]), JJ[YZ[85]] >>= YZ[11], JJ[YZ[9]] -= YZ[11])
                  } while (JJ[YZ[9]] > YZ[26]);
                  JJ[YZ[63]] = -YZ[2]
                } return JJ[YZ[63]] > -YZ[2] && JJ[YZ[16]].push((JJ[YZ[85]] | JJ[YZ[63]] << JJ[YZ[9]]) & YZ[12]), DZ(JJ[YZ[16]])
          }

          function jJ(...JJ) {
            return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = qJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
          }
          throw GZ(console[jJ(111)](ZJ), FJ[jJ(112)](ZJ, {
            [jJ(113) + jJ(114)](...JJ) {
              function cJ(...JJ) {
                return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
                  for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[23]] = 'uAQjeGaWHrFkt#~z=v*syYJfMS+dV|BZp&o%RbX20hEqC9"L{cO_I;]@/.Tm(>ni,g^6N1P5U[w?D8$l37)4x:!`<K}', JJ[YZ[15]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[YZ[15]].length, JJ[YZ[10]] = [], JJ[YZ[8]] = YZ[1], JJ[YZ[62]] = YZ[1], JJ[YZ[63]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[21]]; JJ[YZ[11]]++)
                    if (JJ[-YZ[86]] = JJ[YZ[23]].indexOf(JJ[YZ[15]][JJ[YZ[11]]]), JJ[-YZ[86]] !== -YZ[2])
                      if (JJ[YZ[63]] < YZ[1]) JJ[YZ[63]] = JJ[-YZ[86]];
                      else {
                        GZ(JJ[YZ[63]] += JJ[-YZ[86]] * YZ[34], JJ[YZ[8]] |= JJ[YZ[63]] << JJ[YZ[62]], JJ[YZ[62]] += (JJ[YZ[63]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                        do {
                          GZ(JJ[YZ[10]].push(JJ[YZ[8]] & YZ[12]), JJ[YZ[8]] >>= YZ[11], JJ[YZ[62]] -= YZ[11])
                        } while (JJ[YZ[62]] > YZ[26]);
                        JJ[YZ[63]] = -YZ[2]
                      } return JJ[YZ[63]] > -YZ[2] && JJ[YZ[10]].push((JJ[YZ[8]] | JJ[YZ[63]] << JJ[YZ[62]]) & YZ[12]), DZ(JJ[YZ[10]])
                }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
              }
              return cJ(115) + "Y" in sZ && function(...JJ) {
                JJ[YZ[13]] = YZ[1]
              }(), jZ = [JJ, {}], nZ(cJ(116), cJ(YZ[77]) + cJ(118), cJ(119) + cJ(120))[cJ(YZ[54]) + cJ(122)]
            }
          })), AZ
        }
        const UJ = Xc(Kc[YZ[21]], JJ[YZ[82]]),
          XJ = eJ[YZ[87]][cJ(123)](YZ[10]);
        return XJ[cJ(124) + cJ(YZ[60]) + "E"](Kc[YZ[21]]), eJ[YZ[87]].concat([XJ, UJ])
      }, oc = (...JJ) => {
        function cJ(...JJ) {
          return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = function(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[-YZ[89]] = 'QVy5uvbZm_O3URqKH:/}2=k)c7f$J[4@SD#`CdW!?B{a,>gwst8]Pp~NGnTr.(F|lY^*+9xiheoXL6<&MI"1jEAz0%;', JJ[-YZ[88]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[-YZ[88]].length, JJ[YZ[16]] = [], JJ[YZ[91]] = YZ[1], JJ[YZ[62]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[4]]; JJ[YZ[11]]++)
              if (JJ[YZ[90]] = JJ[-YZ[89]].indexOf(JJ[-YZ[88]][JJ[YZ[11]]]), JJ[YZ[90]] !== -YZ[2])
                if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[90]];
                else {
                  GZ(JJ[YZ[26]] += JJ[YZ[90]] * YZ[34], JJ[YZ[91]] |= JJ[YZ[26]] << JJ[YZ[62]], JJ[YZ[62]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                  do {
                    GZ(JJ[YZ[16]].push(JJ[YZ[91]] & YZ[12]), JJ[YZ[91]] >>= YZ[11], JJ[YZ[62]] -= YZ[11])
                  } while (JJ[YZ[62]] > YZ[26]);
                  JJ[YZ[26]] = -YZ[2]
                } return JJ[YZ[26]] > -YZ[2] && JJ[YZ[16]].push((JJ[YZ[91]] | JJ[YZ[26]] << JJ[YZ[62]]) & YZ[12]), DZ(JJ[YZ[16]])
          }(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
        }
        JJ[YZ[13]] = YZ[2];
        const ZJ = eJ[YZ[87]][cJ(126)](JJ[YZ[1]]);
        if (ZJ[cJ(YZ[92]) + cJ(YZ[93])] >= YZ[10]) {
          function FJ(...JJ) {
            for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[2]] = '2pJGABjHCWtUsmRhgMXDdSPiKVqaEOoYlQF=xe0k)7[v"u8c3,&T.b]f!N1I?:yZ<(Lrn4%{+6|9^_@5/`$#~z>*}w;', JJ[YZ[32]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[4]] = JJ[YZ[32]].length, JJ[YZ[95]] = [], JJ[YZ[18]] = YZ[1], JJ[YZ[62]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[YZ[11]] = YZ[1]; JJ[YZ[11]] < JJ[YZ[4]]; JJ[YZ[11]]++)
              if (JJ[YZ[94]] = JJ[YZ[2]].indexOf(JJ[YZ[32]][JJ[YZ[11]]]), JJ[YZ[94]] !== -YZ[2])
                if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[94]];
                else {
                  GZ(JJ[YZ[26]] += JJ[YZ[94]] * YZ[34], JJ[YZ[18]] |= JJ[YZ[26]] << JJ[YZ[62]], JJ[YZ[62]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                  do {
                    GZ(JJ[YZ[95]].push(JJ[YZ[18]] & YZ[12]), JJ[YZ[18]] >>= YZ[11], JJ[YZ[62]] -= YZ[11])
                  } while (JJ[YZ[62]] > YZ[26]);
                  JJ[YZ[26]] = -YZ[2]
                } return JJ[YZ[26]] > -YZ[2] && JJ[YZ[95]].push((JJ[YZ[18]] | JJ[YZ[26]] << JJ[YZ[62]]) & YZ[12]), DZ(JJ[YZ[95]])
          }

          function XJ(...JJ) {
            return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = FJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
          }
          const AJ = ZJ[XJ(YZ[56]) + XJ(130)](YZ[1]);
          if ((YZ[1], Kc.j)(AJ)) {
            function qJ(...JJ) {
              for (GZ(JJ[YZ[13]] = YZ[2], JJ[YZ[67]] = 'xOQp0;X#Z9&W*}A~[E2TRi3c14,7Fv"njmDst>/?<kd)hH_6]wPbzu%!$arl+J@(M5YBfq^I|N`e{S8o=gGUK:C.VLy', JJ[YZ[96]] = "" + (JJ[YZ[1]] || ""), JJ[YZ[21]] = JJ[YZ[96]].length, JJ[YZ[16]] = [], JJ[-YZ[98]] = YZ[1], JJ[-YZ[11]] = YZ[1], JJ[YZ[26]] = -YZ[2]), JJ[-YZ[97]] = YZ[1]; JJ[-YZ[97]] < JJ[YZ[21]]; JJ[-YZ[97]]++)
                if (JJ[YZ[6]] = JJ[YZ[67]].indexOf(JJ[YZ[96]][JJ[-YZ[97]]]), JJ[YZ[6]] !== -YZ[2])
                  if (JJ[YZ[26]] < YZ[1]) JJ[YZ[26]] = JJ[YZ[6]];
                  else {
                    GZ(JJ[YZ[26]] += JJ[YZ[6]] * YZ[34], JJ[-YZ[98]] |= JJ[YZ[26]] << JJ[-YZ[11]], JJ[-YZ[11]] += (JJ[YZ[26]] & YZ[35]) > YZ[36] ? YZ[37] : YZ[38]);
                    do {
                      GZ(JJ[YZ[16]].push(JJ[-YZ[98]] & YZ[12]), JJ[-YZ[98]] >>= YZ[11], JJ[-YZ[11]] -= YZ[11])
                    } while (JJ[-YZ[11]] > YZ[26]);
                    JJ[YZ[26]] = -YZ[2]
                  } return JJ[YZ[26]] > -YZ[2] && JJ[YZ[16]].push((JJ[-YZ[98]] | JJ[YZ[26]] << JJ[-YZ[11]]) & YZ[12]), DZ(JJ[YZ[16]])
            }

            function jJ(...JJ) {
              return JJ[YZ[13]] = YZ[2], typeof lc[JJ[YZ[1]]] === YZ[19] ? lc[JJ[YZ[1]]] = qJ(JZ[JJ[YZ[1]]]) : lc[JJ[YZ[1]]]
            }
            const YJ = ZJ[XJ(131)](YZ[10]),
              hJ = ec(AJ) ? eJ[YZ[87]][XJ(132)](Ac(AJ, YJ)) : YJ;
            return function(JJ) {
              var cJ, ZJ, FJ, eJ, XJ;
              const AJ = null === (cJ = JJ.meta) || void 0 === cJ ? void 0 : cJ.formatVersion;
              if (!(0, Kc.j)(AJ)) throw new Error(`Unsupported recording format version: ${AJ}`);
              if (!Array.isArray(JJ.initialChunks) || !Array.isArray(JJ.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const UJ of JJ.ticks)
                if (!Array.isArray(UJ.structuralEvents) || !Array.isArray(UJ.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const qJ = {
                ...JJ.meta
              };
              return qJ.formatVersion = Kc.c, (0, UJ.P)(qJ.variation) && delete qJ.variation, {
                meta: qJ,
                initialChunks: JJ.initialChunks.map((JJ => {
                  var cJ;
                  return {
                    chunkPos: JJ.chunkPos,
                    rle: Sc(JJ.rle),
                    sharedBlockData: null !== (cJ = wc("sharedBlockData", JJ.sharedBlockData)) && void 0 !== cJ ? cJ : []
                  }
                })),
                ticks: JJ.ticks.map(Bc),
                editState: {
                  cameraKeyframes: null !== (ZJ = null === (FJ = JJ.editState) || void 0 === FJ ? void 0 : FJ.cameraKeyframes) && void 0 !== ZJ ? ZJ : [],
                  playbackMark: null !== (eJ = null === (XJ = JJ.editState) || void 0 === XJ ? void 0 : XJ.playbackMark) && void 0 !== eJ ? eJ : null
                }
              }
            }(Fc(AJ)[jJ(YZ[5])](hJ))
          }
        }
        throw new Error(cJ(YZ[30]) + cJ(135) + cJ(YZ[86]) + cJ(137) + YZ[16])
      })
  },
  35995: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => XJ,
      c: () => FJ,
      f: () => hJ,
      i: () => DJ,
      j: () => eJ,
      n: () => jJ,
      o: () => sJ,
      p: () => qJ,
      q: () => YJ,
      s: () => AJ
    });
    const FJ = 9,
      UJ = [9];

    function eJ(JJ) {
      return UJ.includes(JJ)
    }
    const XJ = 100,
      AJ = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      qJ = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      jJ = ["itemName", "amount", "position", "size", "attributes"],
      YJ = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      hJ = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "pI", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      DJ = ["selectedSlotIndex", "slots"],
      sJ = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35990: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ,
      e: () => nJ,
      f: () => qJ,
      i: () => XJ,
      m: () => AJ,
      p: () => jJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(17);

    function eJ(JJ) {
      return null === JJ || void 0 === JJ ? null : "string" === typeof JJ ? JJ : null
    }

    function XJ(JJ, cJ) {
      return JSON.stringify(JJ) === JSON.stringify(cJ)
    }

    function AJ(JJ) {
      const cJ = [];
      for (const ZJ of Object.keys(JJ)) {
        const FJ = JJ[ZJ];
        for (const JJ of Object.keys(FJ)) cJ.push({
          vJ: ZJ,
          name: JJ,
          ...FJ[JJ]
        })
      }
      return cJ
    }

    function qJ(JJ) {
      const cJ = {};
      for (const eJ of JJ) {
        var ZJ, FJ, UJ;
        cJ[eJ.vJ] || (cJ[eJ.vJ] = {}), cJ[eJ.vJ][eJ.name] = {
          icon: eJ.icon,
          level: eJ.level,
          displayName: null !== (ZJ = eJ.displayName) && void 0 !== ZJ ? ZJ : null,
          endTick: null !== (FJ = eJ.endTick) && void 0 !== FJ ? FJ : null,
          showInNametag: null === (UJ = eJ.showInNametag) || void 0 === UJ || UJ
        }
      }
      return cJ
    }

    function jJ(JJ, cJ) {
      const ZJ = {};
      for (const UJ of Object.keys(JJ)) {
        const eJ = {};
        for (const ZJ of Object.keys(JJ[UJ])) {
          const FJ = JJ[UJ][ZJ];
          null !== FJ.endTick && FJ.endTick < cJ || (eJ[ZJ] = {
            ...FJ,
            endTick: null === FJ.endTick ? null : FJ.endTick - cJ
          })
        }(0, FJ.mc)(eJ) || (ZJ[UJ] = eJ)
      }
      return ZJ
    }

    function YJ(JJ, cJ, ZJ) {
      if (null !== JJ) return Math.max(0, 1e3 * (JJ - cJ) / ZJ)
    }
    class hJ {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(JJ, cJ) {
        this.clear();
        const ZJ = Date.now();
        for (const AJ of JJ.iterateEntityIds()) {
          const qJ = JJ.getEffects(AJ);
          if ((0, FJ.mc)(qJ)) continue;
          const jJ = cJ(AJ);
          for (const JJ of Object.keys(qJ)) {
            var UJ, XJ;
            const cJ = qJ[JJ];
            this.upsert(jJ, JJ, {
              icon: cJ.icon,
              level: cJ.level,
              displayName: eJ(cJ.displayName),
              showInNametag: null === (UJ = cJ.showInNametag) || void 0 === UJ || UJ,
              endTime: void 0 !== cJ.duration && null !== cJ.duration ? (null !== (XJ = cJ.appliedAt) && void 0 !== XJ ? XJ : ZJ) + cJ.duration : null
            })
          }
        }
      }
      upsert(JJ, cJ, ZJ) {
        this.tracked[JJ] || (this.tracked[JJ] = {}), this.tracked[JJ][cJ] = ZJ
      }
      remove(JJ, cJ) {
        const ZJ = this.tracked[JJ];
        ZJ && (delete ZJ[cJ], (0, FJ.mc)(ZJ) && delete this.tracked[JJ])
      }
      handleUpdate(JJ) {
        var cJ;
        0 !== JJ.duration ? this.upsert(JJ.vJ, JJ.name, {
          icon: JJ.icon,
          level: JJ.level,
          displayName: eJ(JJ.displayName),
          showInNametag: null === (cJ = JJ.showInNametag) || void 0 === cJ || cJ,
          endTime: void 0 !== JJ.duration && null !== JJ.duration ? Date.now() + JJ.duration : null
        }) : this.remove(JJ.vJ, JJ.name)
      }
      handleRemove(JJ, cJ) {
        this.remove(JJ, cJ)
      }
      sample(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const UJ = {},
          eJ = 1e3 / cJ;
        for (const XJ of Object.keys(this.tracked)) {
          const cJ = this.tracked[XJ],
            AJ = {};
          for (const FJ of Object.keys(cJ)) {
            const UJ = cJ[FJ];
            let qJ = null;
            if (null !== UJ.endTime) {
              const cJ = Math.max(0, UJ.endTime - ZJ);
              if (0 === cJ) {
                this.remove(XJ, FJ);
                continue
              }
              qJ = JJ + Math.ceil(cJ / eJ)
            }
            AJ[FJ] = {
              icon: UJ.icon,
              level: UJ.level,
              displayName: UJ.displayName,
              endTick: qJ,
              showInNametag: UJ.showInNametag
            }
          }(0, FJ.mc)(AJ) || (UJ[XJ] = AJ)
        }
        return UJ
      }
    }

    function DJ(JJ, cJ, ZJ, FJ) {
      JJ.hasEntity(cJ) ? JJ.updateEffect(cJ, ZJ, FJ) : function(JJ, cJ, ZJ) {
        UJ.i.Uf("EffectUpdate", {
          vJ: JJ,
          name: cJ,
          ...ZJ
        }, !0)
      }(cJ, ZJ, FJ)
    }

    function sJ(JJ, cJ, ZJ) {
      JJ.hasEntity(cJ) ? JJ.removeEffect(cJ, ZJ) : function(JJ, cJ) {
        UJ.i.Uf("RemoveEffect", {
          vJ: JJ,
          name: cJ
        }, !0)
      }(cJ, ZJ)
    }

    function nJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      for (const YJ of Object.keys(ZJ))
        for (const eJ of Object.keys(ZJ[YJ])) {
          var AJ;
          null !== (AJ = cJ[YJ]) && void 0 !== AJ && AJ[eJ] || (sJ(JJ, YJ, eJ), FJ && YJ === FJ && String(UJ) !== String(YJ) && sJ(JJ, UJ, eJ))
        }
      for (const GJ of Object.keys(cJ))
        for (const AJ of Object.keys(cJ[GJ])) {
          var qJ, jJ;
          const fJ = cJ[GJ][AJ],
            xJ = YJ(fJ.endTick, eJ, XJ);
          if (0 === xJ) {
            sJ(JJ, GJ, AJ), FJ && GJ === FJ && String(UJ) !== String(GJ) && sJ(JJ, UJ, AJ);
            continue
          }
          const rJ = null === (qJ = ZJ[GJ]) || void 0 === qJ ? void 0 : qJ[AJ],
            vJ = rJ && (nJ = fJ, (hJ = rJ).icon === nJ.icon && hJ.level === nJ.level && hJ.displayName === nJ.displayName && hJ.endTick === nJ.endTick && hJ.showInNametag === nJ.showInNametag),
            mJ = {
              icon: fJ.icon,
              level: fJ.level,
              displayName: null !== (jJ = fJ.displayName) && void 0 !== jJ ? jJ : void 0,
              duration: xJ,
              showInNametag: fJ.showInNametag
            };
          vJ || DJ(JJ, GJ, AJ, mJ), FJ && GJ === FJ && DJ(JJ, UJ, AJ, {
            ...mJ,
            showInNametag: !1
          })
        }
      var hJ, nJ
    }
  },
  35973: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => jJ,
      h: () => qJ,
      k: () => hJ,
      n: () => XJ,
      q: () => YJ
    });
    var FJ = ZJ(35969),
      UJ = ZJ(35978);
    const eJ = {
      description: "Bloxd Replay",
      accept: {
        [FJ.f]: FJ.e
      }
    };

    function XJ() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function AJ(JJ) {
      return JJ instanceof DOMException && "AbortError" === JJ.name
    }
    async function qJ() {
      try {
        const [JJ] = await window.showOpenFilePicker({
          multiple: !1,
          types: [eJ]
        }), cJ = await JJ.getFile();
        return {
          handle: JJ,
          bytes: new Uint8Array(await cJ.arrayBuffer())
        }
      } catch (JJ) {
        if (AJ(JJ)) return null;
        throw JJ
      }
    }
    async function jJ(JJ) {
      if (JJ && await async function(JJ) {
          const cJ = {
            mode: "readwrite"
          };
          return "granted" === await JJ.queryPermission(cJ) || "granted" === await JJ.requestPermission(cJ)
        }(JJ)) return JJ;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, FJ.n)(),
          types: [eJ]
        })
      } catch (cJ) {
        if (AJ(cJ)) return null;
        throw cJ
      }
    }
    async function YJ(JJ, cJ) {
      const ZJ = await JJ.createWritable();
      await ZJ.write(new Blob([cJ], {
        type: FJ.f
      })), await ZJ.close()
    }

    function hJ(JJ) {
      return (0, FJ.j)((0, UJ.f)(JJ))
    }
  },
  35540: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => hJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(80),
      eJ = ZJ(29),
      XJ = ZJ(3059),
      AJ = ZJ(2938),
      qJ = ZJ(6004);
    const jJ = "shaderPackListingCheckedAt",
      YJ = 36e5;

    function hJ() {
      const {
        canUseShaderPacks: JJ
      } = UJ.featureFlags.settings;
      var cJ, hJ;
      (0, AJ.k)(JJ) && !(0, AJ.h)(JJ) && (cJ = eJ.j.getItem(jJ), hJ = Date.now(), "number" !== typeof cJ || hJ < cJ || hJ - cJ >= YJ) && (0, XJ.e)((() => {
        (async function() {
          if ("landingPage" !== FJ.d.get("gameState")) return;
          const JJ = await (0, qJ.f)();
          if (void 0 === (null === JJ || void 0 === JJ ? void 0 : JJ.listing)) return;
          eJ.j.setItem(jJ, Date.now());
          const {
            followListingUpdates: cJ
          } = await Promise.all([ZJ.e(126), ZJ.e(124), ZJ.e(116)]).then((() => ZJ(39943)));
          await cJ(JJ, JJ.listing) || eJ.j.removeItem(jJ)
        })().catch((JJ => {
          console.error("Failed to check the shader pack listing for an update", JJ)
        }))
      }))
    }
  },
  35560: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => qJ
    });
    var FJ = ZJ(227),
      UJ = ZJ(13),
      eJ = ZJ(35562),
      XJ = ZJ(1528),
      AJ = ZJ(1756);

    function qJ(JJ, cJ) {
      var ZJ, qJ, jJ;
      if (!UJ.d.get("isKeydownEnabled") || JJ.repeat) return;
      const YJ = JJ.code;
      "Escape" === JJ.key ? (0, XJ.i)(JJ) : null !== (ZJ = AJ.z.OpenSettings) && void 0 !== ZJ && ZJ.includes(YJ) ? (0, XJ.s)(JJ, FJ.m.SETTINGS) : null !== (qJ = AJ.z.OpenCharacterCustomization) && void 0 !== qJ && qJ.includes(YJ) ? (0, eJ.b)() || (0, XJ.s)(JJ, FJ.m.CUSTOMISATION, cJ()) : null !== (jJ = AJ.z.ShowDebugOverlay) && void 0 !== jJ && jJ.includes(YJ) && UJ.d.set({
        showDebugOverlay: !UJ.d.get("showDebugOverlay")
      })
    }
  },
  35545: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => bJ
    });
    var FJ = ZJ(535),
      UJ = ZJ(1126),
      eJ = ZJ(143);
    const XJ = "cf-";

    function AJ(JJ) {
      return `${XJ}${JJ}`
    }

    function qJ(JJ) {
      return JJ.startsWith(AJ("game-server-"))
    }

    function jJ(JJ) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(JJ)
    }
    var YJ = ZJ(1144),
      hJ = ZJ(1122),
      DJ = ZJ(17),
      sJ = ZJ(1638),
      nJ = ZJ(1645),
      GJ = ZJ(2492),
      fJ = ZJ(1201),
      xJ = ZJ(1213),
      rJ = ZJ(1389),
      vJ = ZJ(1098),
      mJ = ZJ(35551),
      QJ = ZJ(29),
      EJ = ZJ(112),
      VJ = ZJ(3122);
    const KJ = Date.UTC(2026, 10, 25),
      yJ = 1728e5,
      SJ = "gameServerRoute";
    async function IJ(JJ) {
      if (!JJ.ok) {
        const cJ = await JJ.text().catch((() => ""));
        return 403 === JJ.status && "ipv6_unsupported" === cJ ? "ipv6Refused" : "other"
      }
      const cJ = await JJ.json().catch((() => null));
      return "object" === typeof cJ && null !== cJ && Number.isFinite(cJ.version) ? "ours" : "other"
    }
    const MJ = new class {
      constructor(JJ) {
        this.deps = JJ
      }
      hostFor(JJ) {
        return this.deps.enabled && jJ(JJ) && "cloudflare" === this.heldRoute() ? AJ(JJ) : JJ
      }
      async afterJoinFailed(JJ, cJ) {
        var ZJ;
        if (!this.deps.enabled || void 0 === cJ) return !1;
        const FJ = new URL(JJ).hostname,
          UJ = this.stored();
        if (qJ(FJ)) {
          var eJ;
          if (this.deps.ls("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === UJ || void 0 === UJ ? void 0 : UJ.route) || UJ.aliasFailedOnce || "ours" !== (await this.probeHost(FJ)).answer) this.store({
            arm: null !== (eJ = null === UJ || void 0 === UJ ? void 0 : UJ.arm) && void 0 !== eJ ? eJ : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...UJ,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!jJ(FJ) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: XJ,
          cfMs: AJ
        } = await this.check(FJ);
        if ("blocked" !== XJ) return this.deps.ls("game_server_route", XJ, AJ), !1;
        const YJ = this.deps.now() >= KJ ? "cloudflare" : null !== (ZJ = null === UJ || void 0 === UJ ? void 0 : UJ.arm) && void 0 !== ZJ ? ZJ : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === YJ ? (this.store({
          arm: YJ,
          route: "direct",
          until: Math.min(this.deps.now() + yJ, KJ)
        }), this.deps.ls("game_server_route", "blocked_holdout", AJ), !1) : (this.store({
          arm: YJ,
          route: "cloudflare",
          until: this.deps.now() + yJ
        }), this.deps.ls("game_server_route", "blocked", AJ), !0)
      }
      afterJoined(JJ) {
        if (!this.deps.enabled) return;
        const cJ = new URL(JJ).hostname,
          ZJ = qJ(cJ);
        if (ZJ) this.deps.ls("game_server_route", "cf_join", 0);
        else if (!jJ(cJ) || this.deps.random() >= .01) return;
        const FJ = ZJ ? cJ.slice(XJ.length) : cJ;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(FJ, "direct", "direct_failed"), await this.reportRtt(AJ(FJ), "cf", "cf_failed")
        }))
      }
      async check(JJ) {
        const cJ = this.probeHost(AJ(JJ));
        if ("none" !== (await this.probeHost(JJ)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: ZJ,
          ms: FJ
        } = await cJ;
        return "ours" !== ZJ && "ipv6Refused" !== ZJ ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(JJ)).answer ? {
          outcome: "direct_reachable",
          cfMs: FJ
        } : {
          outcome: "ipv6Refused" === ZJ ? "blocked_ipv6" : "blocked",
          cfMs: FJ
        }
      }
      async reportRtt(JJ, cJ, ZJ) {
        const FJ = "ours" === (await this.probeHost(JJ)).answer ? await this.probeHost(JJ) : null;
        "ours" === (null === FJ || void 0 === FJ ? void 0 : FJ.answer) ? this.deps.ls("game_server_rtt", cJ, FJ.ms): this.deps.ls("game_server_rtt", ZJ, 0)
      }
      probeHost(JJ) {
        return this.deps.probe(`https://${JJ}/version`, 8e3)
      }
      stored() {
        return function(JJ) {
          if ("object" !== typeof JJ || null === JJ) return null;
          const {
            arm: cJ,
            route: ZJ,
            until: FJ,
            aliasFailedOnce: UJ
          } = JJ;
          return "cloudflare" !== cJ && "holdout" !== cJ || "cloudflare" !== ZJ && "direct" !== ZJ || "number" !== typeof FJ ? null : !0 === UJ ? {
            arm: cJ,
            route: ZJ,
            until: FJ,
            aliasFailedOnce: UJ
          } : {
            arm: cJ,
            route: ZJ,
            until: FJ
          }
        }(this.deps.storage.getItem(SJ))
      }
      heldRoute() {
        const JJ = this.stored();
        return null !== JJ && JJ.until > this.deps.now() ? JJ.route : null
      }
      store(JJ) {
        this.deps.storage.setItem(SJ, JJ)
      }
    }({
      storage: QJ.j,
      probe: async function(JJ, cJ) {
        const ZJ = performance.now(),
          FJ = await (0, VJ.k)(JJ, {
            cache: "no-store"
          }, cJ, (async JJ => {
            const cJ = Math.round(performance.now() - ZJ);
            return {
              answer: await IJ(JJ),
              ms: cJ
            }
          }));
        return null !== FJ && void 0 !== FJ ? FJ : {
          answer: "none",
          ms: 0
        }
      },
      ls: sJ.o,
      enabled: !(0, EJ.b)(),
      now: Date.now,
      random: Math.random,
      delay: JJ => new Promise((cJ => {
        setTimeout(cJ, JJ)
      }))
    });

    function bJ(JJ) {
      return async (cJ, ZJ, XJ, AJ, jJ) => {
        let hJ;
        if ((0, FJ.P)(XJ)) {
          if (jJ.aborted) return wJ();
          const JJ = await WJ(cJ, ZJ, AJ);
          if (jJ.aborted || GJ.d.matchmakingEnded(JJ.isError() ? null : performance.now()), JJ.isError()) {
            const cJ = JJ.asError();
            return console.log("Join room did not succeed, reason:", cJ.message), cJ.forward()
          }
          hJ = JJ.getValue()
        } else {
          GJ.d.skipPlayWait();
          const JJ = gJ(XJ.replace("https://", "").replace("http://", ""));
          if (JJ.isError()) return JJ.asError().forward();
          hJ = {
            endpoint: JJ.getValue(),
            gameNameWithVariation: ZJ,
            lobbyName: cJ instanceof UJ.f ? cJ.getLobbyName() : cJ
          }
        }
        if (jJ.aborted) return wJ();
        console.log(`Connecting to ${hJ.gameNameWithVariation} in lobby ${hJ.lobbyName} on game server ${hJ.endpoint}`), DJ.i.Uf("matchmakeAndPlayStepCompleted", {
          step: eJ.e.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, sJ.f)(), nJ.d.markGameLoadStart(), (0, xJ.o)({
          websocketUrl: hJ.endpoint,
          gameNameWithVariation: hJ.gameNameWithVariation,
          lobbyName: hJ.lobbyName
        }), DJ.i.Uf("loadingScreenState", "loadingPage:loadingGame");
        const rJ = async () => {
          const JJ = await async function(JJ, cJ, ZJ, FJ) {
            const UJ = await WJ(JJ, cJ, ZJ);
            if (!UJ.isError() && !FJ.aborted) {
              const {
                endpoint: JJ,
                gameNameWithVariation: cJ,
                lobbyName: ZJ
              } = UJ.getValue();
              (0, xJ.o)({
                websocketUrl: JJ,
                gameNameWithVariation: cJ,
                lobbyName: ZJ
              })
            }
            return UJ
          }(cJ, ZJ, AJ, jJ);
          return JJ.isError() || (hJ = JJ.getValue()), JJ
        }, vJ = !(0, FJ.P)(XJ), mJ = () => JJ({
          place: hJ,
          userContext: AJ,
          direct: vJ,
          rematch: rJ
        }, jJ);
        let QJ = await mJ();
        const EJ = QJ.isError() && !0 === QJ.asError().debugResult.rematch;
        if (QJ.isError() && !vJ && !jJ.aborted && (EJ || await MJ.afterJoinFailed(hJ.endpoint, QJ.asError().debugResult.gameServerUnreachable))) {
          if (jJ.aborted) return wJ();
          console.log("Matchmaking again");
          const JJ = await rJ();
          if (JJ.isError()) return JJ.asError().forward();
          if (jJ.aborted) return wJ();
          QJ = await mJ(), !QJ.isError() || EJ && !qJ(new URL(hJ.endpoint).hostname) || await MJ.afterJoinFailed(hJ.endpoint, QJ.asError().debugResult.gameServerUnreachable)
        }
        return QJ.isError() ? QJ.asError().forward() : (MJ.afterJoined(hJ.endpoint), (0, fJ.U)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), YJ.b.value({
          gameNameWithVariation: hJ.gameNameWithVariation,
          lobbyName: hJ.lobbyName,
          addLobbyToRecentlyPlayed: !(cJ instanceof UJ.f)
        }))
      }
    }

    function wJ() {
      return YJ.b.errorWithCode("Left the game while it loaded", eJ.e.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        hZ: !0
      })
    }
    async function WJ(JJ, cJ, ZJ) {
      return (0, FJ.P)(JJ) || JJ instanceof UJ.f || !(JJ.length > hJ.R) ? await rJ.c.matchmakePlayer(ZJ, JJ, cJ, (0, mJ.b)()).then((JJ => {
        if (!1 === JJ.succeeded) return YJ.b.errorWithCode(JJ.failReason, eJ.e.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: cJ,
          lobbyName: ZJ,
          gameNameWithVariation: FJ
        } = JJ, UJ = gJ(MJ.hostFor(cJ));
        return UJ.isError() ? UJ.asError().forward() : YJ.b.value({
          endpoint: UJ.getValue(),
          gameNameWithVariation: FJ,
          lobbyName: ZJ
        })
      })).catch((JJ => (console.error("Bad response from the matchmaking server:", JJ), YJ.b.errorWithCode(JJ.toString(), eJ.e.REQUEST_TO_MATCHMAKING, {
        error: JJ,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", JJ), YJ.b.errorWithCode("This lobby link's name is too long. Ask for a new link.", eJ.e.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function gJ(JJ) {
      const cJ = vJ.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(JJ);
      return cJ.isError() ? YJ.b.errorWithCode(cJ.asError().message, eJ.e.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : YJ.b.value(cJ.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, xJ.j)("/")
    }
  },
  8493: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => sJ,
      d: () => DJ
    });
    var FJ = ZJ(13),
      UJ = ZJ(1572),
      eJ = ZJ(29),
      XJ = ZJ(1247),
      AJ = ZJ(3134),
      qJ = ZJ(1357),
      jJ = ZJ(1294);
    const YJ = 2592e5,
      hJ = "notificationOptInLastPromptedAt";
    async function DJ() {
      var JJ;
      const cJ = await sJ();
      if (null === cJ) return;
      const ZJ = null !== (JJ = eJ.j.getItem(hJ)) && void 0 !== JJ ? JJ : 0;
      if (Date.now() - ZJ < YJ) return;
      if ((0, jJ.e)()) return;
      const FJ = await XJ.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: UJ.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== FJ && (eJ.j.setItem(hJ, Date.now()), (0, qJ.f)({
        id: !0 === FJ ? "push.allow" : "push.deny",
        value: UJ.d.supports("notifications") ? "app" : "browser"
      }), !0 === FJ && cJ().catch((JJ => {
        console.error("Failed to ask for push notifications:", JJ)
      })))
    }
    async function sJ() {
      return await UJ.d.ready, UJ.d.supports("notifications") ? FJ.d.get("mobilePushNotificationsCanAsk") ? async () => {
        UJ.d.request("notifications.requestPermission", {}).then((JJ => {
          let {
            canAsk: cJ
          } = JJ;
          FJ.d.set({
            mobilePushNotificationsCanAsk: cJ
          })
        }), (JJ => {
          console.error("The app couldn't ask for push notifications:", JJ)
        }))
      }: null: await AJ.d.canAsk() ? () => AJ.d.requestPermission() : null
    }
  },
  35554: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => DJ,
      f: () => YJ,
      h: () => sJ,
      i: () => hJ
    });
    var FJ = ZJ(235),
      UJ = ZJ(556),
      eJ = ZJ(976),
      XJ = ZJ(29);
    const AJ = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      qJ = "playSessionGameNameWithVariation",
      jJ = "wasMatchmakePlayer";

    function YJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      (0, eJ.f)(JJ, AJ)
    }

    function hJ() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).setItem(jJ, !0)
    }

    function DJ() {
      let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k;
      return (0, eJ.b)(JJ, AJ)
    }

    function sJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XJ.k;
      const ZJ = (0, eJ.b)(cJ, AJ),
        YJ = function(JJ) {
          const cJ = JJ.getItem(qJ);
          return "string" !== typeof cJ ? null : cJ
        }(cJ),
        hJ = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).getItem(jJ)
        }(cJ);
      let DJ;
      return DJ = null !== ZJ && null !== YJ && (0, eJ.c)(cJ, AJ) && function(JJ, cJ, ZJ) {
          const UJ = (0, FJ.Jb)(JJ),
            eJ = (0, FJ.Jb)(cJ),
            XJ = (0, FJ.Hb)(JJ),
            AJ = (0, FJ.Hb)(cJ);
          return !(UJ !== eJ || !ZJ) || UJ === eJ && XJ === AJ
        }(YJ, JJ, hJ) ? ZJ : (0, UJ.b)(), (0, eJ.i)(cJ, AJ, DJ), cJ.setItem(qJ, JJ),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : XJ.k).removeItem(jJ)
        }(cJ), DJ
    }
  },
  35551: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => fJ,
      c: () => xJ
    });
    var FJ = ZJ(889),
      UJ = ZJ(538),
      eJ = ZJ(235),
      XJ = ZJ(896),
      AJ = ZJ(547),
      qJ = ZJ(3935),
      jJ = ZJ(80),
      YJ = ZJ(112),
      hJ = ZJ(1599),
      DJ = ZJ(93),
      sJ = ZJ(35554),
      nJ = ZJ(29),
      GJ = ZJ(969);

    function fJ() {
      var JJ, cJ;
      return [...null !== (JJ = navigator.languages) && void 0 !== JJ ? JJ : [null !== (cJ = navigator.language) && void 0 !== cJ ? cJ : "none"], "En-Gb"]
    }

    function xJ(JJ, cJ, ZJ, xJ, rJ) {
      const vJ = (0, FJ.k)(cJ) ? (0, FJ.n)(cJ) : null,
        mJ = {
          cookies: (0, hJ.getAllCookiesForGameNameWithVariation)(cJ),
          isMobile: (0, jJ.isMobile)(),
          isUsingCustomGameTexturePack: null !== vJ && rJ(vJ),
          generalCookies: {
            joinDiscord: !!nJ.j.getItem("DiscordPressed"),
            newGo: qJ.c,
            ...JJ.getMetricsCookies(),
            trafficCode: xJ,
            compliance: jJ.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, jJ.getBrowserName)(),
            version: (0, jJ.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, jJ.getPlatformType)(),
            deviceType: (0, DJ.e)()
          },
          isLoggedIn: JJ.isLoggedIn(),
          lobbyName: ZJ,
          languages: fJ(),
          version: UJ.b,
          siteUsed: YJ.n,
          subsiteUsed: YJ.y,
          playSessionId: (0, sJ.h)(cJ),
          visitSessionId: (0, GJ.d)(),
          clientReason: AJ.i.reason
        };
      return null !== vJ && (0, eJ.oc)(vJ) ? (mJ.lobbyName = (0, FJ.j)(vJ, (0, FJ.l)(cJ), ZJ), {
        roomName: `classic_${XJ.e}`,
        joinOptions: mJ
      }) : {
        roomName: cJ,
        joinOptions: mJ
      }
    }
  },
  35640: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      for (let ZJ = 0; ZJ < JJ.length; ZJ++)
        if (JJ[ZJ].identifier === cJ) return JJ[ZJ];
      return null
    }

    function UJ(JJ, cJ) {
      return null !== FJ(JJ, cJ)
    }
    ZJ.d(cJ, {
      c: () => FJ,
      f: () => UJ
    })
  },
  35901: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      D: () => kJ,
      F: () => pJ,
      J: () => HJ,
      L: () => dJ,
      c: () => qJ,
      f: () => MJ,
      g: () => AJ,
      i: () => gJ,
      m: () => SJ,
      q: () => EJ,
      r: () => WJ,
      t: () => wJ,
      w: () => yJ,
      z: () => PJ
    });
    var FJ = ZJ(29);
    const UJ = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      eJ = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      XJ = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      AJ = eJ.filter((JJ => "docsButton" !== JJ)),
      qJ = XJ.filter((JJ => "aiHelperButton" !== JJ)),
      jJ = "codeEditorTutorials",
      YJ = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      hJ = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let DJ = null,
      sJ = null;
    const nJ = new Set,
      GJ = new Set;
    let fJ = null;
    const xJ = new Set,
      rJ = new Set;

    function vJ() {
      rJ.forEach((JJ => {
        JJ()
      }))
    }

    function mJ() {
      if (!DJ) {
        const JJ = FJ.j.getItem(jJ);
        DJ = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof JJ && null !== JJ ? JJ : {}
        }
      }
      return DJ
    }

    function QJ(JJ) {
      const cJ = mJ();
      cJ[JJ] || (DJ = {
        ...cJ,
        [JJ]: !0
      }, FJ.j.setItem(jJ, DJ))
    }

    function EJ(JJ) {
      return "docsOverview" === JJ ? eJ : "aiHelperOverview" === JJ ? XJ : sJ ? UJ[sJ] : []
    }

    function VJ(JJ) {
      return ("worldCodeButton" !== JJ || !mJ().worldCodeIntroShown) && !xJ.has(JJ)
    }

    function KJ(JJ) {
      var cJ;
      return (null === (cJ = fJ) || void 0 === cJ ? void 0 : cJ.name) === JJ ? fJ.stepsDone : nJ
    }

    function yJ(JJ, cJ) {
      if (! function(JJ) {
          return fJ ? fJ.name === JJ : "welcome" === JJ
        }(JJ) || !VJ(cJ) || KJ(JJ).has(cJ)) return !1;
      if (fJ) return !0;
      const ZJ = YJ[cJ];
      return ZJ ? !mJ()[ZJ] || GJ.has(cJ) : !mJ()[hJ[JJ]]
    }

    function SJ(JJ) {
      var cJ;
      return null !== (cJ = EJ(JJ).find((cJ => yJ(JJ, cJ)))) && void 0 !== cJ ? cJ : null
    }

    function IJ(JJ) {
      var cJ;
      QJ(hJ[JJ]), (null === (cJ = fJ) || void 0 === cJ ? void 0 : cJ.name) === JJ && (fJ = null)
    }

    function MJ(JJ) {
      const cJ = (fJ ? [fJ.name] : ["welcome", "docsOverview"]).find((cJ => SJ(cJ) === JJ));
      if (!cJ) return;
      KJ(cJ).add(JJ);
      const ZJ = YJ[JJ];
      ZJ && (QJ(ZJ), fJ || GJ.add(JJ)), null === SJ(cJ) && IJ(cJ), vJ()
    }

    function bJ(JJ, cJ) {
      const ZJ = EJ(JJ),
        FJ = KJ(JJ);
      for (let UJ = ZJ.indexOf(cJ) - 1; UJ >= 0; UJ--)
        if (FJ.has(ZJ[UJ]) && VJ(ZJ[UJ])) return ZJ[UJ];
      return null
    }

    function wJ(JJ, cJ) {
      return null !== bJ(JJ, cJ)
    }

    function WJ(JJ, cJ) {
      const ZJ = bJ(JJ, cJ);
      ZJ && (KJ(JJ).delete(ZJ), vJ())
    }

    function gJ(JJ) {
      IJ(JJ), "welcome" === JJ && EJ("welcome").forEach((JJ => {
        const cJ = YJ[JJ];
        cJ && QJ(cJ)
      })), vJ()
    }

    function HJ(JJ) {
      fJ = {
        name: JJ,
        stepsDone: new Set
      }, vJ()
    }

    function PJ() {
      (fJ || 0 !== nJ.size || 0 !== GJ.size) && (fJ = null, nJ.clear(), GJ.clear(), vJ())
    }

    function kJ(JJ, cJ) {
      const ZJ = cJ ? JJ : sJ === JJ ? null : sJ;
      ZJ !== sJ && (sJ = ZJ, vJ())
    }

    function pJ(JJ, cJ) {
      xJ.has(JJ) === cJ && (cJ ? xJ.delete(JJ) : xJ.add(JJ), vJ())
    }

    function dJ(JJ) {
      return rJ.add(JJ), () => {
        rJ.delete(JJ)
      }
    }
  },
  35644: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      d: () => hJ,
      f: () => XJ
    });
    var FJ = ZJ(2146),
      UJ = ZJ(2153),
      eJ = ZJ(2161);

    function XJ(JJ, cJ) {
      return (!(0, eJ.b)() || 0 === JJ && 0 === cJ) && (0, UJ.z)(FJ.l.Joystick, 0, JJ, cJ, 0)
    }
    const AJ = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function qJ(JJ) {
      return !(JJ instanceof HTMLElement) || JJ.offsetWidth <= 0 || JJ.offsetHeight <= 0 ? null : {
        width: JJ.offsetWidth,
        height: JJ.offsetHeight
      }
    }

    function jJ(JJ, cJ) {
      const ZJ = JJ => Math.min(65535, Math.round(4 * JJ));
      return (ZJ(JJ) | ZJ(cJ) << 16) >>> 0
    }

    function YJ(JJ) {
      return {
        x: JJ.left + JJ.width / 2,
        y: JJ.top + JJ.height / 2,
        radius: Math.min(JJ.width, JJ.height) / 2
      }
    }
    const hJ = new class {
      constructor(JJ) {
        this.write = JJ, this.elements = new Map
      }
      set(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        cJ ? this.elements.set(JJ, {
          element: cJ,
          hidden: ZJ
        }) : this.elements.delete(JJ), this.measureOne(JJ)
      }
      measure() {
        for (const JJ of this.elements.keys()) this.measureOne(JJ)
      }
      hitZone(JJ, cJ) {
        let ZJ = null,
          FJ = 1;
        for (const UJ of this.elements.keys()) {
          const eJ = this.shown(UJ);
          if (!eJ) continue;
          const {
            rect: XJ,
            element: AJ
          } = eJ, jJ = YJ(XJ), hJ = Math.max(0, XJ.width / 2 - jJ.radius), DJ = Math.max(0, XJ.height / 2 - jJ.radius), sJ = Math.max(0, Math.abs(JJ - jJ.x) - hJ), nJ = Math.max(0, Math.abs(cJ - jJ.y) - DJ), GJ = AJ.firstElementChild;
          let fJ = Math.hypot(sJ, nJ) / jJ.radius;
          const xJ = qJ(GJ);
          xJ && (fJ = Math.min(fJ, Math.max(2 * Math.abs(JJ - jJ.x) / xJ.width, 2 * Math.abs(cJ - jJ.y) / xJ.height))), fJ < FJ && (ZJ = {
            code: UJ,
            element: AJ,
            key: GJ,
            ...jJ
          }, FJ = fJ)
        }
        return ZJ
      }
      measureOne(JJ) {
        const cJ = this.shown(JJ);
        if (!cJ) return void this.write(FJ.l.TouchZone, JJ, 0, 0, 0);
        const {
          rect: ZJ,
          element: UJ
        } = cJ, eJ = YJ(ZJ);
        this.write(FJ.l.TouchZone, JJ, eJ.x, eJ.y, jJ(ZJ.width, ZJ.height));
        const XJ = qJ(UJ.firstElementChild);
        this.write(FJ.l.TouchZone, 256 | JJ, 0, 0, XJ ? jJ(XJ.width, XJ.height) : 0)
      }
      shown(JJ) {
        const cJ = this.elements.get(JJ);
        if (!cJ || cJ.hidden) return null;
        const ZJ = cJ.element.getBoundingClientRect();
        return ZJ.width <= 0 || ZJ.height <= 0 ? null : {
          rect: ZJ,
          element: cJ.element
        }
      }
    }(UJ.z)
  },
  35877: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => qJ,
      g: () => AJ
    });
    const FJ = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      UJ = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      eJ = {
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
      XJ = {
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
      AJ = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: FJ.files,
          dependencies: FJ.dependencies,
          bundledSource: FJ.bundledSource,
          types: FJ.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: UJ.files,
          dependencies: UJ.dependencies,
          bundledSource: UJ.bundledSource,
          types: UJ.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: eJ.files,
          dependencies: eJ.dependencies,
          bundledSource: eJ.bundledSource,
          types: eJ.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: XJ.files,
          dependencies: XJ.dependencies,
          bundledSource: XJ.bundledSource,
          types: XJ.types
        }
      };

    function qJ(JJ) {
      const cJ = [],
        ZJ = new Set,
        FJ = JJ => {
          if (ZJ.has(JJ)) return;
          const UJ = AJ[JJ];
          if (UJ) {
            ZJ.add(JJ);
            for (const JJ of UJ.dependencies) FJ(JJ);
            cJ.push(JJ)
          }
        };
      for (const UJ of JJ) FJ(UJ);
      return cJ
    }
  },
  35882: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => qJ,
      i: () => AJ,
      j: () => XJ,
      l: () => eJ,
      o: () => jJ,
      r: () => YJ,
      u: () => nJ,
      y: () => sJ,
      z: () => DJ
    });
    var FJ = ZJ(1137);
    const UJ = ["quickjs", "ses"];

    function eJ(JJ) {
      return UJ.includes(JJ)
    }

    function XJ(JJ) {
      return JJ === FJ.g || JJ === FJ.k
    }

    function AJ(JJ, cJ) {
      return JJ === FJ.g && cJ === FJ.k || JJ === FJ.k && cJ === FJ.g
    }

    function qJ(JJ) {
      const cJ = FJ.k in JJ,
        ZJ = FJ.g in JJ;
      return cJ && ZJ ? null : cJ ? FJ.k : ZJ ? FJ.g : null
    }

    function jJ(JJ, cJ, ZJ) {
      const FJ = `${cJ}/`;
      return JJ.filter((JJ => JJ.startsWith(FJ))).map((JJ => [JJ, `${ZJ}/${JJ.slice(FJ.length)}`]))
    }

    function YJ(JJ, cJ) {
      let ZJ = 0;
      for (const [FJ, UJ] of Object.entries(JJ)) FJ !== cJ && (ZJ += UJ.length);
      return ZJ
    }
    const hJ = "@plugins/";

    function DJ(JJ) {
      return `${hJ}${JJ}`
    }

    function sJ(JJ, cJ) {
      return `/node_modules/@plugins/${JJ}/${cJ}`
    }

    function nJ(JJ) {
      if (!JJ.startsWith(hJ)) return null;
      const cJ = JJ.slice(hJ.length);
      return function(JJ) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(JJ)
      }(cJ) ? cJ : null
    }
  },
  35892: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      e: () => UJ,
      i: () => XJ,
      j: () => qJ,
      k: () => eJ
    });
    var FJ = ZJ(35886);
    const UJ = 5,
      eJ = "[SCHEMATIC]",
      XJ = 1024e4;

    function AJ(JJ) {
      return JJ.endsWith(".bloxdschem") && (0, FJ.u)(JJ.slice(0, -11) + ".ts") && JJ.length <= 64
    }

    function qJ(JJ) {
      return Object.fromEntries(Object.keys(JJ).map((JJ => [JJ, eJ])))
    }
  },
  35886: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      g: () => eJ,
      k: () => DJ,
      m: () => AJ,
      p: () => qJ,
      r: () => jJ,
      u: () => hJ,
      v: () => YJ,
      x: () => XJ
    });
    var FJ = ZJ(1137);
    let UJ = function(JJ) {
        return JJ[JJ.Join = 0] = "Join", JJ[JJ.Leave = 1] = "Leave", JJ[JJ.Push = 2] = "Push", JJ[JJ.Cursor = 3] = "Cursor", JJ[JJ.Submit = 4] = "Submit", JJ[JJ.ReloadAsVariation = 5] = "ReloadAsVariation", JJ[JJ.CreateFile = 6] = "CreateFile", JJ[JJ.RenameFile = 7] = "RenameFile", JJ[JJ.DeleteFile = 8] = "DeleteFile", JJ[JJ.SetEngine = 9] = "SetEngine", JJ[JJ.RenameFolder = 10] = "RenameFolder", JJ
      }({}),
      eJ = function(JJ) {
        return JJ[JJ.Joined = 0] = "Joined", JJ[JJ.Updates = 1] = "Updates", JJ[JJ.Presence = 2] = "Presence", JJ[JJ.RemoteCursor = 3] = "RemoteCursor", JJ[JJ.ForceClose = 4] = "ForceClose", JJ[JJ.LobbyFilesChanged = 5] = "LobbyFilesChanged", JJ[JJ.EngineSettings = 6] = "EngineSettings", JJ
      }({});

    function XJ(JJ) {
      return "lobby" === JJ.kind ? `lobby:${JJ.path}` : `codeBlock:${JJ.pos[0]},${JJ.pos[1]},${JJ.pos[2]}`
    }

    function AJ(JJ) {
      if ("lobby" === JJ) return {
        kind: "lobby",
        path: FJ.g
      };
      if (JJ.startsWith("lobby:")) {
        const cJ = JJ.slice(6);
        return hJ(cJ) ? {
          kind: "lobby",
          path: cJ
        } : null
      }
      const cJ = JJ.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return cJ ? {
        kind: "codeBlock",
        pos: [parseInt(cJ[1]), parseInt(cJ[2]), parseInt(cJ[3])]
      } : null
    }

    function qJ(JJ) {
      return JJ.endsWith(".d.ts")
    }

    function jJ(JJ) {
      return JJ.endsWith(".ts") && !qJ(JJ)
    }
    const YJ = 64;

    function hJ(JJ) {
      if (!JJ || JJ !== JJ.trim()) return !1;
      if (JJ.length > YJ) return !1;
      if (JJ.startsWith("/") || JJ.includes("\\") || JJ.includes("\0")) return !1;
      if (!qJ(JJ) && !jJ(JJ) && ! function(JJ) {
          return JJ.endsWith(".js") && !JJ.endsWith(".min.js") && !JJ.endsWith(".bundle.js")
        }(JJ)) return !1;
      const cJ = JJ.split("/");
      for (const ZJ of cJ)
        if ("" === ZJ || "." === ZJ || ".." === ZJ) return !1;
      return !0
    }
    const DJ = 14e3
  },
  4245: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ,
      d: () => FJ,
      f: () => eJ,
      h: () => qJ,
      k: () => XJ
    });
    const FJ = ["sine", "triangle", "square", "sawtooth"],
      UJ = 55,
      eJ = {
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

    function XJ(JJ) {
      return "string" !== typeof JJ ? JJ : Object.hasOwn(eJ, JJ) ? eJ[JJ] : null
    }

    function AJ(JJ, cJ, ZJ) {
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function qJ(JJ) {
      const cJ = AJ(JJ.durationMs, 10, 500),
        ZJ = AJ(JJ.attackMs, 0, cJ),
        {
          intonation: UJ
        } = JJ;
      return {
        waveform: FJ.includes(JJ.waveform) ? JJ.waveform : "sine",
        pitchHz: AJ(JJ.pitchHz, 20, 4e3),
        glideSemitones: AJ(JJ.glideSemitones, -24, 24),
        durationMs: cJ,
        attackMs: ZJ,
        releaseMs: AJ(JJ.releaseMs, 0, cJ - ZJ),
        lowpassHz: null === JJ.lowpassHz ? null : AJ(JJ.lowpassHz, 20, 2e4),
        volume: AJ(JJ.volume, 0, 2),
        intonation: {
          variationSemitones: AJ(UJ.variationSemitones, 0, 6),
          declineSemitones: AJ(UJ.declineSemitones, 0, 12),
          questionRiseSemitones: AJ(UJ.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: AJ(UJ.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: AJ(JJ.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);