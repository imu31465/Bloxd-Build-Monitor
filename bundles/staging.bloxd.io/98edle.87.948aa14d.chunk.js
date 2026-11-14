export const id = 87;
export const ids = [87];
export const modules = {
  34749: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => dW
    });
    var wW = MW(75),
      CW = MW(1544),
      zR = MW(34755),
      AW = MW.n(zR),
      bR = MW(3587),
      yR = MW(1523),
      NW = MW(1253),
      eW = MW(116),
      BW = MW(130),
      tR = MW(284),
      TW = MW(897),
      gR = MW.n(TW),
      iR = MW(27),
      YW = MW(904),
      JW = MW(1459),
      PW = MW(1495),
      IW = MW(1493),
      oW = MW(1595),
      lW = MW(1216),
      FW = MW(1657),
      fW = MW(1208),
      QW = MW(7674),
      rR = MW(34762),
      cR = MW(34786),
      XW = MW(1278),
      jR = MW(940);
    const kR = MW(34799),
      aR = ["enter", "t", "/"];

    function sW() {
      var WW, RW;
      (0, FW.c)();
      const MW = null !== (WW = null === (RW = (0, lW.d)()) || void 0 === RW ? void 0 : RW.getBoundButton("keyboardChannel")) && void 0 !== WW ? WW : null;
      return MW ? (0, jR.jsx)(oW.d, {
        className: "ChatInputChannelGlyph",
        glyph: MW
      }) : null
    }

    function dW() {
      const {
        isTouchScreen: WW
      } = (0, iR.i)(["isTouchScreen"]), RW = (0, fW.q)(), [MW, zR] = (0, wW.useState)(!1), TW = (0, wW.useRef)(MW), oW = (0, wW.useRef)(null), {
        messages: lW,
        reportedPlayers: FW,
        channel: dW
      } = (0, QW.o)(), hW = (0, wW.useRef)(0), UW = (0, wW.useRef)(""), EW = (0, wW.useRef)(null), [VW, mR] = (0, wW.useState)(!1), [xR, vR] = (0, wW.useState)(!1), KW = (0, wW.useRef)(VW), uW = (0, wW.useRef)(null), OW = (0, wW.useRef)(!1), nW = (0, wW.useRef)(null), GW = (0, wW.useRef)(null), LW = (0, wW.useRef)(null), HW = (0, wW.useRef)(ZW);

      function DW() {
        TW.current = !1, zR(!1), GW.current.blur()
      }

      function qR(WW) {
        KW.current = WW, mR(WW)
      }

      function ZW() {
        const WW = GW.current.value;
        GW.current.value = "", SW(WW)
      }

      function SW(WW) {
        (0, QW.l)(WW), hW.current = 0, qR(!1)
      }

      function WR(WW, RW) {
        0 === hW.current && (UW.current = GW.current.value);
        const MW = (0, QW.k)(hW.current + WW, RW);
        hW.current = MW.stepsBack, GW.current.value = 0 === MW.stepsBack ? UW.current : MW.text, setTimeout((() => {
          GW.current && GW.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function RR() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        EW.current && (!WW && KW.current || (EW.current.scrollTop = 1e5))
      }
      return HW.current = ZW, (0, bR.d)(!0, MW, "ChatComponent"), (0, NW.f)("appManagerUpdated|openEverythingMenuName", (() => {
        (0, JW.r)() && zR(!1)
      })), (0, wW.useEffect)((() => {
        GW.current.addEventListener("blur", (WW => {
          if (null === GW.current) return;
          Array.from(document.querySelectorAll(":hover")).some((WW => WW.classList.contains("ChatInputChannel") || WW.classList.contains("ChatMsgSelectWrapper"))) || ((0, eW.isMobile)() && TW.current && "" !== GW.current.value && HW.current(), zR(!1))
        }));
        const WW = WW => {
          oW.current.contains(WW.target) || (0, IW.j)(WW.target) || zR(!1)
        };
        document.addEventListener("touchstart", WW, {
          capture: !0
        });
        const RW = WW => {
          (0, cR.h)(WW.target) && (TW.current = !1, zR(!1))
        };
        document.addEventListener("mousedown", RW, {
          capture: !0
        });
        const MW = () => {
            clearTimeout(uW.current), qR(!0)
          },
          wW = () => {
            clearTimeout(uW.current), uW.current = setTimeout((() => {
              qR(!1), RR()
            }), 4e3)
          },
          bR = () => {
            document.pointerLockElement ? (zR(!1), vR(!0), OW.current = !1, qR(!1), RR()) : vR(!1)
          };
        EW.current.addEventListener("pointermove", (WW => {
          "touch" === WW.pointerType || OW.current || document.pointerLockElement || (OW.current = !0, MW())
        })), EW.current.addEventListener("pointerleave", (WW => {
          "touch" !== WW.pointerType && (OW.current = !1, wW())
        })), EW.current.addEventListener("wheel", (() => {
          document.pointerLockElement || (MW(), OW.current || (uW.current = setTimeout((() => {
            qR(!1)
          }), 4e3)))
        }), {
          passive: !0
        }), EW.current.addEventListener("touchstart", MW), EW.current.addEventListener("touchend", wW), EW.current.addEventListener("touchcancel", wW), document.addEventListener("pointerlockchange", bR);
        const yR = WW => {
          if ((TW.current || ! function(WW) {
              if ((0, PW.isTypingInInput)()) return !0;
              const RW = document.activeElement;
              return (RW instanceof HTMLButtonElement || "button" === (null === RW || void 0 === RW ? void 0 : RW.getAttribute("role"))) && ["Enter", " "].includes(WW.key)
            }(WW)) && "codeEditor" !== iR.b.get("openInGameMenuName") && "lobbyCodeEditor" !== iR.b.get("openInGameMenuName") && !CW.gameBridge.latest("connectedGame").replay)
            if (TW.current || !(0, JW.r)()) {
              if (TW.current) {
                if ("ArrowUp" === WW.code || "ArrowDown" === WW.code) return WR("ArrowUp" === WW.code ? 1 : -1, !1), void WW.stopPropagation();
                if ("Tab" === WW.code) return QW.d.selectNextChannel(), WW.stopPropagation(), void WW.preventDefault();
                if (WW.ctrlKey && pW.includes(kR[WW.keyCode])) return WW.preventDefault(), void WW.stopPropagation()
              }
              if ([...aR, "esc"].includes(AW()(WW)))
                if ("esc" !== AW()(WW)) {
                  if (!TW.current || "/" !== AW()(WW)) {
                    if ("t" === AW()(WW)) {
                      if (TW.current) return void WW.stopPropagation();
                      WW.preventDefault()
                    }
                    TW.current && "" !== GW.current.value && HW.current(), WW.repeat || (TW.current || "/" === AW()(WW) && (GW.current.value = "/", WW.preventDefault()), zR(!TW.current))
                  }
                } else TW.current && (zR(!1), WW.stopPropagation());
              else TW.current && WW.stopPropagation()
            } else aR.includes(AW()(WW)) && (WW.preventDefault(), WW.stopPropagation(), (0, JW.e)(WW))
        };
        document.addEventListener("keydown", yR, {
          capture: !0
        });
        const NW = EW.current;
        let BW = !1;
        const tR = new ResizeObserver((() => {
            BW && (BW = !1, RR())
          })),
          gR = () => {
            BW = !0, tR.unobserve(NW), tR.observe(NW)
          };
        nW.current = gR;
        const YW = new MutationObserver(gR);
        return YW.observe(NW, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("keydown", yR, {
            capture: !0
          }), document.removeEventListener("touchstart", WW, {
            capture: !0
          }), document.removeEventListener("mousedown", RW, {
            capture: !0
          }), document.removeEventListener("pointerlockchange", bR), nW.current = null, YW.disconnect(), tR.disconnect(), clearTimeout(uW.current)
        }
      }), []), (0, IW.m)(GW, {
        open: () => {
          zR(!0)
        },
        close: () => {
          DW()
        },
        submit: () => {
          "" !== GW.current.value && ZW(), DW()
        },
        stepHistory: () => {
          WR(1, !0)
        },
        sendLine: WW => {
          SW(WW), DW()
        },
        selectNextChannel: () => {
          QW.d.selectNextChannel()
        }
      }), (0, wW.useEffect)((() => {
        var WW;
        (TW.current = MW, GW.current) && (MW ? (hW.current = 0, GW.current.focus()) : (GW.current.blur(), null === (WW = nW.current) || void 0 === WW || WW.call(nW)))
      }), [MW]), (0, jR.jsx)(jR.Fragment, {
        children: (0, jR.jsxs)("div", {
          ref: oW,
          className: gR()("Chat", {
            Chatting: MW
          }),
          "data-camera-keeper": MW ? "" : void 0,
          children: [(0, jR.jsx)("div", {
            ref: EW,
            className: gR()("ChatMessages", {
              HideScrollbar: !VW && !MW,
              NoScrolling: !(0, eW.isMobile)() && xR
            }),
            children: (0, jR.jsx)(rR.e, {
              messages: lW,
              reportedPlayers: FW
            })
          }), WW && !MW ? (0, jR.jsx)("div", {
            className: "ChatIconWrapper SmallTextLight",
            children: (0, jR.jsx)(YW.e, {
              name: "comment-dots",
              className: "ChatIcon",
              ...(0, XW.d)((() => {
                zR(!0), LW.current.style.display = "flex", (0, eW.isIOS)() && GW.current.focus()
              }), "pointerup")
            })
          }) : null, (0, jR.jsxs)("div", {
            ref: LW,
            className: "ChatInputWrapper",
            style: {
              display: "" + (MW ? "flex" : "none")
            },
            children: [dW && (0, jR.jsx)("div", {
              className: "ChatInputChannel SmallTextBold",
              style: {
                backgroundColor: dW.elementBgColor
              },
              onClick: WW => {
                QW.d.selectNextChannel(), GW.current.focus()
              },
              children: (0, jR.jsx)(yR.c, {
                text: dW.elementContent
              })
            }), dW && RW && (0, jR.jsx)(sW, {}), (0, jR.jsx)("input", {
              className: "ChatInput",
              maxLength: tR.bd,
              ref: GW,
              spellCheck: "false",
              autoComplete: "off",
              autoCorrect: "off",
              placeholder: dW ? `${dW.channelName} Chat${"touchOnly"===(0,BW.c)()||RW?"":" [Tab]"}` : ""
            })]
          })]
        })
      })
    }
    const pW = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  34762: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => QW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(7677),
      bR = MW(33),
      yR = MW(116),
      NW = MW(1906),
      eW = MW(2682),
      BW = MW(1616),
      tR = MW(27),
      TW = MW(1523),
      gR = MW(34770),
      iR = MW(1749),
      YW = MW(34779),
      JW = MW(2043),
      PW = MW(2024),
      IW = MW(2017),
      oW = MW(2697),
      lW = MW(8118),
      FW = MW(940);

    function fW(WW) {
      for (let MW = WW.length - 1; MW >= 0; MW--) {
        const wW = "string" === typeof(RW = WW[MW]) ? RW : "str" in RW && "string" === typeof RW.str ? RW.str : "";
        if ("" !== wW.trim()) return wW
      }
      var RW;
      return ""
    }

    function QW(WW) {
      let {
        messages: RW,
        reportedPlayers: MW
      } = WW;
      return (0, FW.jsx)(FW.Fragment, {
        children: RW.map((WW => (0, FW.jsx)(rR, {
          message: WW,
          reportedPlayers: MW
        }, WW.clientChatMsgId)))
      })
    }
    const rR = (0, wW.memo)((function(WW) {
      var RW;
      let {
        message: MW,
        reportedPlayers: CW
      } = WW;
      const QW = (0, wW.useRef)(null),
        [rR] = (0, wW.useState)(lW.f),
        {
          author: cR
        } = MW,
        XW = null === cR || void 0 === cR ? void 0 : cR.id,
        jR = null !== (RW = null === cR || void 0 === cR ? void 0 : cR.name) && void 0 !== RW ? RW : void 0,
        kR = (0, BW.b)(jR),
        aR = null !== cR && void 0 !== cR && cR.profileEffect ? iR.e[cR.profileEffect] : void 0,
        sW = null !== cR && !cR.local,
        dW = null === cR && null !== MW.serverChatMsgId,
        pW = yR.featureFlags.useSocialFeatures && sW,
        hW = null === MW.serverChatMsgId || null === cR ? null : {
          text: fW(MW.content),
          serverChatMsgId: MW.serverChatMsgId,
          authorId: cR.id
        },
        UW = dW || null !== hW && !CW.includes(XW),
        EW = (0, eW.j)(sW && null !== jR && void 0 !== jR ? jR : null),
        VW = (0, IW.e)(QW);
      (0, wW.useEffect)((() => () => {
        IW.b.closeIfOwner(QW)
      }), []);
      const mR = () => {
          dW ? bR.k.Sz("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            PA: (0, AW.d)(MW.content),
            serverChatMsgId: MW.serverChatMsgId
          }) : null !== hW ? bR.k.Sz("OpenReportMenu", {
            playerEId: XW,
            playerName: jR,
            PA: hW.text,
            serverChatMsgId: hW.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        xR = void 0 === jR ? [] : (0, oW.c)(EW, jR, hW);
      return (0, FW.jsxs)("div", {
        ref: QW,
        className: zR()("MessageWrapper", {
          ChatMsgSelectWrapper: XW,
          Still: rR
        }),
        onContextMenu: pW ? WW => {
          (0, JW.g)(QW, WW, {
            ...(0, YW.c)(XW, jR),
            showLocation: !1,
            status: null,
            extraActions: UW ? [{
              icon: "flag",
              text: "Report",
              onClick: mR
            }] : [],
            friendRequestSource: "chat"
          }, tR.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: pW ? WW => {
          (0, PW.e)(WW, (() => (0, YW.c)(XW, jR).playerSocialPreview))
        } : void 0,
        children: [aR && (0, FW.jsx)(aR, {
          className: "ChatMessageBackground",
          simple: !0
        }), (sW || dW) && !VW && (0, FW.jsx)(gR.c, {
          className: "ChatFloatingActions",
          triggerElementRef: QW,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: mR,
            show: UW
          }, ...xR, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: WW => {
              (0, NW.j)(jR, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: sW && yR.featureFlags.useSocialFeatures && "blocked" !== EW
          }]
        }), (0, FW.jsx)(TW.c, {
          text: MW.content,
          friendBadgeFor: kR ? jR : void 0
        }, MW.clientChatMsgId)]
      }, MW.clientChatMsgId)
    }))
  },
  34827: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => TW,
      g: () => gR,
      k: () => tR,
      n: () => BW
    });
    var wW = MW(8135),
      CW = MW(34830),
      zR = MW(34838),
      AW = MW(7672),
      bR = MW(1253),
      yR = MW(75),
      NW = MW(93),
      eW = MW(940);

    function BW() {
      var WW;
      return (0, bR.i)(CW.c, (0, CW.h)()), (0, eW.jsx)(eW.Fragment, {
        children: null === (WW = (0, CW.h)()) || void 0 === WW ? void 0 : WW.content
      })
    }

    function tR(WW) {
      var RW;
      let {
        show: MW
      } = WW;
      (0, bR.i)(CW.c, (0, CW.h)());
      const NW = null === (RW = (0, CW.h)()) || void 0 === RW ? void 0 : RW.menu;
      return (0, yR.useEffect)((() => {
        MW || (null === NW || void 0 === NW || NW.onClose(), (0, zR.s)())
      }), [MW, NW]), (0, yR.useEffect)((() => MW ? (0, AW.g)(zR.D, zR.e) : void 0), [MW]), (0, eW.jsx)(wW.c, {
        showing: MW,
        globallyUniqueKey: "clientGameMenu",
        children: null === NW || void 0 === NW ? void 0 : NW.content
      })
    }

    function TW(WW) {
      let {
        placement: RW = "bottom"
      } = WW;
      return (0, eW.jsx)("div", {
        id: `clientGameHud-${RW}`,
        style: {
          display: "contents"
        }
      })
    }

    function gR(WW) {
      let {
        children: RW,
        placement: MW = "bottom"
      } = WW;
      const [wW, CW] = (0, yR.useState)(null);
      return (0, yR.useEffect)((() => {
        CW(document.getElementById(`clientGameHud-${MW}`))
      }), [MW]), wW ? (0, NW.createPortal)(RW, wW) : null
    }
  },
  35085: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => IW,
      f: () => YW,
      h: () => gR,
      j: () => TW,
      l: () => PW,
      o: () => FW,
      q: () => oW,
      s: () => lW,
      v: () => CW
    });
    var wW = MW(75);
    const CW = 5e3,
      zR = 500,
      AW = 3e3;
    let bR = null,
      yR = null,
      NW = null;
    const eW = new Set;

    function BW(WW) {
      bR = WW;
      for (const RW of eW) RW()
    }

    function tR() {
      if (!bR || void 0 !== bR.endedAt) return;
      null !== yR && (clearTimeout(yR), yR = null), BW({
        ...bR,
        endedAt: Date.now()
      });
      const WW = NW;
      NW = null, null === WW || void 0 === WW || WW()
    }

    function TW(WW, RW) {
      let {
        submit: MW,
        reopen: wW
      } = RW;
      null !== yR && clearTimeout(yR), NW = wW, BW({
        ...WW,
        startedAt: Date.now(),
        errors: []
      }), yR = setTimeout(tR, AW), MW()
    }

    function gR() {
      bR && void 0 === bR.endedAt && void 0 === bR.ranAt && (null !== yR && clearTimeout(yR), BW({
        ...bR,
        ranAt: Date.now()
      }), yR = setTimeout(tR, CW))
    }
    const iR = 3;

    function YW(WW) {
      if (!bR || void 0 === bR.ranAt || void 0 !== bR.endedAt || bR.errors.includes(WW) || bR.errors.length >= iR) return;
      const RW = 0 === bR.errors.length;
      BW({
        ...bR,
        errors: [...bR.errors, WW]
      }), RW && (null !== yR && clearTimeout(yR), yR = setTimeout(tR, zR))
    }

    function JW(WW) {
      var RW;
      return (null === (RW = bR) || void 0 === RW ? void 0 : RW.chatKey) === WW ? bR : null
    }

    function PW(WW) {
      const RW = JW(WW);
      return RW && void 0 !== RW.endedAt ? (BW(null), RW) : null
    }

    function IW(WW) {
      var RW;
      (null === (RW = bR) || void 0 === RW ? void 0 : RW.chatKey) === WW && (null !== yR && (clearTimeout(yR), yR = null), NW = null, BW(null))
    }

    function oW(WW) {
      return `Fix this in your change: when it ran, the world showed ${1===WW.length?"this error":"these errors"}: ${WW.join(" ")}`
    }

    function lW(WW) {
      var RW;
      if (void 0 === WW.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const MW = Math.max(1, Math.round(((null !== (RW = WW.endedAt) && void 0 !== RW ? RW : WW.ranAt) - WW.ranAt) / 1e3)),
        wW = `Your change ran in your world for ${MW} ${1===MW?"second":"seconds"}`;
      return 0 === WW.errors.length ? {
        title: "Tested: no errors",
        text: `${wW} without an error.`
      } : {
        title: 1 === WW.errors.length ? "Tested: it showed an error" : `Tested: it showed ${WW.errors.length} errors`,
        text: `${wW} and showed: ${WW.errors.join(" ")}`
      }
    }

    function FW(WW) {
      const [RW, MW] = (0, wW.useState)((() => JW(WW)));
      return (0, wW.useEffect)((() => {
        const RW = () => {
          MW(JW(WW))
        };
        return RW(), eW.add(RW), () => {
          eW.delete(RW)
        }
      }), [WW]), RW
    }
  },
  35090: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW,
      g: () => wW
    });
    const wW = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function CW(WW, RW, MW) {
      return {
        key: WW,
        label: `Code block at ${RW.join(", ")}`,
        codeBlock: !0,
        pos: RW,
        canChangePos: MW
      }
    }
  },
  35077: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      i: () => zR,
      j: () => AW,
      n: () => CW
    });
    const wW = "code block",
      CW = "World Code/";

    function zR(WW) {
      return WW.trim().toLowerCase().startsWith(CW.toLowerCase())
    }

    function AW(WW) {
      return WW.trim().slice(CW.length).replace(/^\.?\//, "")
    }
  },
  35063: (WW, RW, MW) => {
    MW.d(RW, {
      B: () => cR,
      F: () => tR,
      I: () => dW,
      L: () => QW,
      P: () => rR,
      S: () => sW,
      c: () => gR,
      e: () => yR,
      h: () => iR,
      j: () => XW,
      n: () => bR,
      o: () => eW,
      q: () => TW,
      s: () => YW,
      t: () => oW,
      x: () => jR
    });
    var wW = MW(35047),
      CW = MW(35056);
    const zR = "bloxd-world-code-directory-sync",
      AW = "handles",
      bR = "[INVALID SCHEMATIC PLACEHOLDER]";

    function yR(WW, RW) {
      return `${WW}::${RW}`
    }
    const NW = new Set(["node_modules", ".git"]);

    function eW() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function BW() {
      return new Promise(((WW, RW) => {
        const MW = indexedDB.open(zR, 1);
        MW.onupgradeneeded = () => {
          const WW = MW.result;
          WW.objectStoreNames.contains(AW) || WW.createObjectStore(AW)
        }, MW.onsuccess = () => {
          WW(MW.result)
        }, MW.onerror = () => {
          var WW;
          RW(null !== (WW = MW.error) && void 0 !== WW ? WW : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function tR(WW, RW) {
      const MW = await BW();
      try {
        await new Promise(((wW, CW) => {
          const zR = MW.transaction(AW, "readwrite");
          zR.objectStore(AW).put(RW, WW), zR.oncomplete = () => {
            wW()
          }, zR.onerror = () => {
            var WW;
            CW(null !== (WW = zR.error) && void 0 !== WW ? WW : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        MW.close()
      }
    }
    async function TW(WW) {
      const RW = await BW();
      try {
        return await new Promise(((MW, wW) => {
          const CW = RW.transaction(AW, "readonly").objectStore(AW).get(WW);
          CW.onsuccess = () => {
            var WW;
            MW(null !== (WW = CW.result) && void 0 !== WW ? WW : null)
          }, CW.onerror = () => {
            var WW;
            wW(null !== (WW = CW.error) && void 0 !== WW ? WW : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        RW.close()
      }
    }
    async function gR(WW) {
      const RW = await BW();
      try {
        await new Promise(((MW, wW) => {
          const CW = RW.transaction(AW, "readwrite");
          CW.objectStore(AW).delete(WW), CW.oncomplete = () => {
            MW()
          }, CW.onerror = () => {
            var WW;
            wW(null !== (WW = CW.error) && void 0 !== WW ? WW : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        RW.close()
      }
    }
    async function iR(WW) {
      const RW = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await WW.queryPermission(RW) || "granted" === await WW.requestPermission(RW)
    }
    async function YW(WW) {
      if (!eW()) return null;
      try {
        const RW = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await tR(WW, RW), RW
      } catch (RW) {
        if (function(WW) {
            return WW instanceof DOMException && "AbortError" === WW.name
          }(RW)) return null;
        throw RW
      }
    }

    function JW(WW) {
      return WW.startsWith(".") || NW.has(WW)
    }

    function PW(WW) {
      if (!WW) return !0;
      const RW = WW.split("/");
      for (const MW of RW)
        if ("" === MW || "." === MW || ".." === MW) return !1;
      return !0
    }
    async function IW(WW, RW, MW) {
      for await (const [zR, AW] of WW.entries()) {
        if ("directory" === AW.kind) {
          if (JW(zR)) continue;
          const WW = RW ? `${RW}/${zR}` : zR;
          if (!PW(WW)) continue;
          await IW(AW, WW, MW);
          continue
        }
        const WW = RW ? `${RW}/${zR}` : zR;
        if (!(0, wW.o)(WW) && !(0, CW.e)(WW)) continue;
        const bR = await AW.getFile();
        MW[WW] = (0, CW.e)(WW) ? await kR(bR) : await bR.text()
      }
    }
    async function oW(WW) {
      const RW = {};
      return await IW(WW, "", RW), RW
    }

    function lW(WW) {
      return !(!WW || WW !== WW.trim() || WW.startsWith("/") || WW.includes("\\") || WW.includes("\0")) && PW(WW)
    }
    async function FW(WW, RW, MW) {
      const wW = RW.split("/"),
        CW = wW[wW.length - 1];
      let zR = WW;
      for (let AW = 0; AW < wW.length - 1; AW++) zR = await zR.getDirectoryHandle(wW[AW], {
        create: MW
      });
      return {
        dir: zR,
        fileName: CW
      }
    }
    async function fW(WW, RW, MW) {
      if (!lW(RW)) throw new Error(`Refusing to write unsafe path: ${RW}`);
      const {
        dir: wW,
        fileName: CW
      } = await FW(WW, RW, !0), zR = await wW.getFileHandle(CW, {
        create: !0
      }), AW = await zR.createWritable();
      await AW.write(MW), await AW.close()
    }
    async function QW(WW, RW, MW) {
      const wW = await async function(WW, RW) {
        if (!lW(RW)) return null;
        try {
          const {
            dir: MW,
            fileName: wW
          } = await FW(WW, RW, !1), CW = await MW.getFileHandle(wW), zR = await CW.getFile();
          return await zR.text()
        } catch (MW) {
          if (MW instanceof DOMException && ("NotFoundError" === MW.name || "NotAllowedError" === MW.name)) return null;
          throw MW
        }
      }(WW, RW);
      wW !== MW && await fW(WW, RW, MW)
    }
    async function rR(WW, RW, MW) {
      if (!(0, wW.o)(RW) && !(0, CW.e)(RW)) throw new Error(`Refusing to write non-allowlisted path: ${RW}`);
      if ((0, CW.e)(RW)) {
        if (await aR(WW, RW) === bR) throw new Error(`Move the binary schematic ${RW} outside the linked folder before syncing its placeholder`)
      }
      await fW(WW, RW, MW)
    }
    async function cR(WW, RW) {
      if (!lW(RW)) throw new Error(`Refusing to remove unsafe path: ${RW}`);
      try {
        const {
          dir: MW,
          fileName: wW
        } = await FW(WW, RW, !1);
        await MW.removeEntry(wW)
      } catch (MW) {
        if (MW instanceof DOMException && ("NotFoundError" === MW.name || "NotAllowedError" === MW.name)) return;
        throw MW
      }
    }
    async function XW(WW, RW) {
      if (!lW(RW)) return null;
      try {
        const MW = RW.split("/");
        let wW = WW;
        for (const WW of MW) wW = await wW.getDirectoryHandle(WW);
        return wW
      } catch (MW) {
        if (MW instanceof DOMException && ("NotFoundError" === MW.name || "NotAllowedError" === MW.name)) return null;
        throw MW
      }
    }
    async function jR(WW, RW) {
      if ((0, wW.o)(RW) || (0, CW.e)(RW)) {
        if ((0, CW.e)(RW)) {
          if (await aR(WW, RW) === bR) throw new Error(`Refusing to remove a binary schematic: ${RW}`)
        }
        await cR(WW, RW)
      }
    }
    async function kR(WW) {
      if (WW.size > 64) return bR;
      const RW = await WW.text();
      return Array.from(RW).some((WW => {
        const RW = WW.charCodeAt(0);
        return RW < 9 || RW > 13 && RW < 32 || 65533 === RW
      })) ? bR : RW
    }
    async function aR(WW, RW) {
      try {
        const {
          dir: MW,
          fileName: wW
        } = await FW(WW, RW, !1);
        return await kR(await (await MW.getFileHandle(wW)).getFile())
      } catch (MW) {
        if (MW instanceof DOMException && "NotFoundError" === MW.name) return null;
        throw MW
      }
    }
    async function sW(WW, RW) {
      const MW = await oW(WW);
      for (const wW of Object.keys(MW)) wW in RW || (0, CW.e)(wW) || await jR(WW, wW);
      for (const [zR, AW] of Object.entries(RW))((0, wW.o)(zR) || (0, CW.e)(zR)) && await rR(WW, zR, AW)
    }

    function dW(WW, RW) {
      var MW, wW;
      let CW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const zR = null !== (MW = CW.debounceMs) && void 0 !== MW ? MW : 300,
        AW = null !== (wW = CW.pollMs) && void 0 !== wW ? wW : 1e3;
      let bR = !1,
        yR = null,
        NW = null,
        eW = null;
      const BW = () => {
          bR || (yR && clearTimeout(yR), yR = setTimeout((() => {
            yR = null, tR()
          }), zR))
        },
        tR = async () => {
          if (!bR) try {
            if (!await iR(WW, "readwrite")) return;
            const MW = await oW(WW);
            bR || RW(MW)
          } catch (MW) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", MW)
          }
        };
      tR();
      const TW = window.FileSystemObserver;
      if (TW) try {
        eW = new TW((() => {
          BW()
        })), eW.observe(WW, {
          recursive: !0
        })
      } catch (gR) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", gR), eW = null
      }
      return eW || (NW = setInterval((() => {
        BW()
      }), AW)), () => {
        bR = !0, yR && clearTimeout(yR), NW && clearInterval(NW), eW && eW.disconnect()
      }
    }
  },
  34924: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => TW,
      g: () => gR
    });
    var wW = MW(75),
      CW = MW(2221),
      zR = MW(1253),
      AW = MW(1571),
      bR = MW(34858),
      yR = MW(564),
      NW = MW(897),
      eW = MW.n(NW),
      BW = MW(940);
    const tR = {},
      TW = (0, wW.memo)((function() {
        const WW = (0, CW.b)();
        return (0, zR.f)("damagedByOtherPlayer", (RW => {
          let {
            U1: MW,
            direction: wW
          } = RW;
          const CW = MW || "nonDirectional";
          if (tR[CW]) {
            const RW = tR[CW];
            clearTimeout(RW.timeout), RW.direction = wW, RW.timeout = setTimeout((() => {
              delete tR[CW], WW()
            }), 800)
          } else tR[CW] = {
            direction: wW,
            iwW: null,
            timeout: setTimeout((() => {
              delete tR[CW], WW()
            }), 800)
          };
          WW()
        })), (0, AW.d)("kill", (RW => {
          let {
            killer: MW,
            victim: wW
          } = RW;
          const CW = wW.id;
          MW.local && CW && CW in tR && (clearTimeout(tR[CW].timeout), delete tR[CW], WW())
        })), (0, wW.useEffect)((() => {
          const WW = (0, bR.f)("turnDamageIndicators", gR);
          return () => {
            WW();
            for (const WW in tR) clearTimeout(tR[WW].timeout), delete tR[WW]
          }
        }), []), (0, BW.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(tR).map((WW => {
            let [RW, MW] = WW;
            const wW = (0, yR.S)(MW.direction);
            return (0, BW.jsx)("div", {
              ref: WW => {
                tR[RW] && (tR[RW].iwW = WW)
              },
              className: eW()("DamageIndicator", {
                DamageIndicatorFullCircle: wW
              })
            }, RW)
          }))
        })
      }));

    function gR(WW) {
      for (const RW in tR) {
        const {
          direction: MW,
          iwW: wW
        } = tR[RW];
        if ((0, yR.S)(MW)) continue;
        const CW = MW - WW;
        wW.style.rotate = `${CW}rad`
      }
    }
  },
  34770: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => iR
    });
    var wW = MW(75),
      CW = MW(93),
      zR = MW(1027),
      AW = MW(897),
      bR = MW.n(AW),
      yR = MW(1495),
      NW = MW(904),
      eW = MW(1111),
      BW = MW(1285),
      tR = MW(1480),
      TW = MW(940);
    const gR = 14;

    function iR(WW) {
      let {
        className: RW,
        triggerElementRef: MW,
        options: AW
      } = WW;
      const {
        t: iR
      } = (0, zR.C)(), [YW, JW] = (0, wW.useState)(!1), [PW, IW] = (0, wW.useState)({
        x: 0,
        y: 0
      }), oW = (0, wW.useRef)(null);
      (0, wW.useEffect)((() => {
        const WW = WW => {
            const RW = gR * (0, yR.getRemInPx)();
            IW({
              x: Math.min(WW.clientX, window.innerWidth - RW - 5),
              y: WW.clientY
            }), JW((WW => !WW))
          },
          RW = WW => {
            var RW;
            null !== (RW = oW.current) && void 0 !== RW && RW.contains(WW.relatedTarget) || JW(!1)
          },
          wW = MW.current;
        return wW.addEventListener("pointerup", WW), wW.addEventListener("mouseleave", RW), () => {
          wW.removeEventListener("pointerup", WW), wW.removeEventListener("mouseleave", RW)
        }
      }), [MW]), (0, wW.useEffect)((() => {
        if (YW) return (0, tR.b)("pointerdown", (WW => {
          !oW.current || oW.current.contains(WW.target) || MW.current.contains(WW.target) || JW(!1)
        }))
      }), [YW, MW]), (0, wW.useLayoutEffect)((() => {
        if (!YW || !oW.current) return;
        const WW = oW.current.getBoundingClientRect().height,
          RW = Math.max(5, window.innerHeight - WW - 5);
        PW.y > RW && IW({
          x: PW.x,
          y: RW
        })
      }), [YW, PW]), (0, eW.r)("popup", oW, (() => {
        JW(!1)
      }), YW);
      const lW = AW.filter((WW => !1 !== WW.show));
      return YW && 0 !== lW.length ? (0, CW.createPortal)((0, TW.jsx)("div", {
        ref: oW,
        className: bR()("FloatingActions", {
          [RW]: RW
        }),
        style: {
          width: `${gR}rem`,
          top: PW.y,
          left: PW.x
        },
        children: lW.map((WW => {
          let {
            icon: RW,
            text: MW,
            onPointerDown: wW,
            analyticsClick: CW
          } = WW;
          return (0, TW.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: WW => {
              void 0 !== CW && (0, BW.c)(CW), wW(WW), JW(!1), WW.stopPropagation()
            },
            children: [(0, TW.jsx)(NW.e, {
              name: RW
            }), (0, TW.jsx)("div", {
              children: iR(MW)
            })]
          }, MW)
        }))
      }), function() {
        var WW;
        return null !== (WW = document.querySelector(".WholeAppWrapperInner")) && void 0 !== WW ? WW : document.body
      }()) : null
    }
  },
  35119: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(75),
      AW = MW(1523),
      bR = MW(940);
    const yR = (0, zR.forwardRef)((function(WW, RW) {
      let {
        text: MW,
        className: wW,
        children: zR
      } = WW;
      return MW.hasText ? (0, bR.jsx)("div", {
        ref: RW,
        className: CW()("HudTextPanel", wW, {
          NoBackground: !MW.showBackground
        }),
        children: null !== zR && void 0 !== zR ? zR : (0, bR.jsx)(AW.c, {
          text: MW.content
        })
      }) : null
    }))
  },
  34939: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => QC
    });
    var wW = MW(34827),
      CW = MW(75),
      zR = MW(1650),
      AW = MW(3573),
      bR = MW(3578),
      yR = MW(1953),
      NW = MW(1544),
      eW = MW(940);

    function BW(WW) {
      let {
        className: RW,
        style: MW,
        vw: wW,
        maxPx: CW,
        children: zR
      } = WW;
      console.assert("number" === typeof wW && "number" === typeof CW, "vw and maxPx passed to Text must be numbers");
      const AW = window.innerWidth * (wW / 100) > CW ? `${CW}px` : `${wW}vw`;
      return (0, eW.jsx)("div", {
        className: RW,
        style: {
          ...MW,
          fontSize: AW
        },
        children: zR
      })
    }
    var tR = MW(34948),
      TW = MW(1255),
      gR = MW(33),
      iR = MW(1558),
      YW = MW(904);

    function JW(WW) {
      let {
        tasks: RW,
        lastDisplayedTasks: MW
      } = WW;
      return (0, eW.jsx)(eW.Fragment, {
        children: Object.keys(RW).map((WW => (0, eW.jsx)(PW, {
          task: RW[WW],
          lastDisplayedAs: MW[WW]
        }, RW[WW].text)))
      })
    }

    function PW(WW) {
      let {
        task: RW,
        lastDisplayedAs: MW
      } = WW;
      const [wW, zR] = (0, CW.useState)(null !== MW && void 0 !== MW && MW.progress ? MW.progress / RW.goal : 0), [AW, bR] = (0, CW.useState)(!1), [yR, NW] = (0, CW.useState)(RW.claimed || !1);
      return (0, CW.useEffect)((() => {
        zR(RW.progress / RW.goal)
      }), [RW.progress, RW.goal]), yR ? null : (0, eW.jsxs)("div", {
        className: "Task",
        children: [(0, eW.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, eW.jsx)(BW, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: RW.text
          })
        }), RW.progress < RW.goal ? (0, eW.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== wW ? (0, eW.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * wW + "%"
            }
          }) : null, (0, eW.jsx)("div", {
            className: "TaskProgressText",
            children: `${RW.progress}/${RW.goal}`
          })]
        }) : (0, eW.jsx)(TW.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            bR(!0)
          },
          children: (0, eW.jsx)(BW, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), AW ? (0, eW.jsx)(IW, {
          task: RW,
          close: () => {
            RW.claimed = !0, NW(!0), bR(!1)
          }
        }) : null]
      })
    }

    function IW(WW) {
      let {
        task: RW,
        close: MW
      } = WW;
      const [wW, zR] = (0, CW.useState)({}), [AW, bR] = (0, CW.useState)("closed");
      (0, CW.useEffect)((() => {
        let WW;
        return "animStart" === AW && (WW = setTimeout((() => {
          bR("animEnd")
        }), 700)), () => {
          clearTimeout(WW)
        }
      }), [AW]), (0, tR.b)((() => {
        NW.gameBridge.send("completeTask", RW.text)
      }));
      const BW = (0, yR.h)("currencyAmounts");
      return (0, eW.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === AW)
            if (0 === RW.rewards.length) MW(), NW.gameBridge.send("completeTask", RW.text);
            else {
              const WW = {
                ...iR.d.get("currencyAmounts")
              };
              for (const RW in wW) WW[RW] = {
                ...WW[RW],
                amount: WW[RW].amount + wW[RW]
              };
              iR.d.apply({
                currencyAmounts: WW
              }), bR("closed")
            }
          else "closed" === AW && (zR(RW.rewards.pop()), bR("animStart"))
        },
        children: [(0, eW.jsx)("img", {
          className: "Chest",
          alt: "closed" !== AW ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==AW?"open":"closed"}.png`
        }), (0, eW.jsx)("div", {
          className: "Rewards",
          children: "closed" !== AW ? Object.keys(wW).map((WW => {
            const RW = null === BW || void 0 === BW ? void 0 : BW[WW];
            return !RW || RW.hidden ? null : (0, eW.jsxs)("div", {
              className: "Reward",
              children: [(0, eW.jsx)(YW.e, {
                name: RW.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: RW.iconColour
                }
              }), (0, eW.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === AW ? 0 : wW[WW]
              })]
            }, WW)
          })) : null
        }), "animStart" === AW ? (0, eW.jsx)(oW, {}) : null, (0, eW.jsx)("div", {
          className: "ChestsLeft",
          children: RW.rewards.length
        })]
      })
    }

    function oW() {
      const [WW, RW] = (0, CW.useState)(0);
      (0, CW.useEffect)((() => {
        RW(1)
      }), []);
      return (0, eW.jsx)(eW.Fragment, {
        children: Array.from({
          length: 40
        }).map(((RW, MW) => (0, eW.jsx)(YW.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * WW * Math.cos(MW / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * WW * Math.sin(MW / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === WW ? 1 : 0
          }
        }, MW)))
      })
    }
    gR.k.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const WW = new Image,
          RW = new Image;
        WW.src = "/textures/miscImages/Treasure Chest open.png", RW.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var lW = MW(2273),
      FW = MW(969),
      fW = MW(1523),
      QW = MW(1253),
      rR = MW(284),
      cR = MW(1571),
      XW = MW(1157);

    function jR(WW) {
      var RW, MW;
      let {
        byId: wW,
        localId: CW
      } = WW;
      return null === CW ? null : null !== (RW = null === (MW = wW[CW]) || void 0 === MW ? void 0 : MW.name) && void 0 !== RW ? RW : null
    }

    function kR(WW) {
      let {
        lbStats: RW,
        storedState: MW = {}
      } = WW;
      const {
        userContext: wW
      } = (0, FW.c)(), zR = (0, cR.f)("players", jR), [AW, bR] = (0, CW.useState)(MW.selectedCat || (null === RW || void 0 === RW ? void 0 : RW[0]) || null), [yR, BW] = (0, CW.useState)(MW.selectedTimeframe || "Today"), [tR, TW] = (0, CW.useState)(null);
      (0, CW.useEffect)((() => {
        null === AW && null !== RW && RW.length > 0 && bR(RW[0])
      }), [RW, AW]);
      const [gR, iR] = (0, CW.useState)(MW.seeingTop || !1), [YW, JW] = (0, CW.useState)(!1), PW = (0, CW.useCallback)((() => {
        null !== AW && null !== yR && (NW.gameBridge.send("requestLeaderboard", {
          category: AW.value,
          timeframe: yR,
          seeTop: gR
        }), oW(!0), dW && pW(null))
      }), [AW, yR, MW, gR]);
      (0, CW.useEffect)((() => {
        PW(), MW.selectedCat = AW, MW.selectedTimeframe = yR, MW.seeingTop = gR
      }), [AW, yR, MW, gR, PW]), (0, CW.useEffect)((() => {
        if ((null === tR || void 0 === tR ? void 0 : tR.length) > 0)
          if (gR) gR && JW(null === kR(tR));
          else {
            for (const WW of tR)
              if (1 === WW.place) return void JW(!1);
            JW(!0)
          }
      }), [tR, gR]), (0, QW.f)("leaderboardResponse", (WW => {
        let {
          category: MW,
          timeframe: wW,
          data: CW
        } = WW;
        for (let zR = 0; zR < RW; zR++)
          if (RW[zR].value === MW) {
            bR(RW[zR]);
            break
          } BW(wW), TW(CW), oW(!1)
      }));
      const [IW, oW] = (0, CW.useState)(!0);

      function kR(WW) {
        const RW = jR(NW.gameBridge.latest("players"));
        for (let MW = 0; MW < WW.length; MW++)
          if (WW[MW].name === RW) return WW[MW].place;
        return null
      }
      const [aR, sW] = (0, CW.useState)(!1), [dW, pW] = (0, CW.useState)(null);
      (0, CW.useEffect)((() => {
        if (tR && !aR) {
          const WW = kR(tR);
          WW < (MW.lastSeenPlayerPlace || 0) && pW(MW.lastSeenPlayerPlace - WW), sW(!0)
        }
      }), [tR, MW, aR]), (0, CW.useEffect)((() => () => {
        tR && (MW.lastSeenPlayerPlace = kR(tR))
      }), [tR, MW]);
      const hW = (0, CW.useRef)(null),
        [UW, EW] = (0, CW.useState)(void 0);
      return (0, CW.useEffect)((() => {
        var WW, RW;
        UW !== (null === (WW = hW.current) || void 0 === WW ? void 0 : WW.offsetHeight) && EW(null === (RW = hW.current) || void 0 === RW ? void 0 : RW.offsetHeight)
      })), wW.isLoggedIn() ? (0, eW.jsxs)(eW.Fragment, {
        children: [(0, eW.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, eW.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, eW.jsx)(lW.b, {
              options: RW.map((WW => ({
                label: WW.label,
                value: WW.value
              }))),
              value: AW,
              onChange: WW => {
                bR(WW)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, eW.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, eW.jsx)(lW.b, {
              options: rR.Pc.map((WW => ({
                value: WW,
                label: WW,
                className: "LBDropdownMenuItem"
              }))),
              value: yR,
              onChange: WW => {
                BW(WW.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), YW ? (0, eW.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              iR(!gR)
            },
            children: gR ? "See Yourself" : "See Top"
          }) : null]
        }), (0, eW.jsx)("div", {
          className: "LBTableWrapper",
          children: IW ? (0, eW.jsx)("div", {
            className: "LoaderContainer",
            children: (0, eW.jsx)(XW.d, {})
          }) : null === dW ? (0, eW.jsx)(eW.Fragment, {
            children: (0, eW.jsxs)("table", {
              className: "LBTable",
              children: [(0, eW.jsx)("thead", {
                className: "LBTableTHead",
                ref: hW,
                children: (0, eW.jsxs)("tr", {
                  children: [(0, eW.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, eW.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, eW.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: AW.label.toUpperCase()
                  })]
                })
              }), (0, eW.jsx)("tbody", {
                children: tR.map((WW => (0, eW.jsxs)("tr", {
                  className: "LBTableTR " + (WW.name === zR ? "LBTableTRYou" : ""),
                  children: [(0, eW.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${WW.place}`
                  }), (0, eW.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, eW.jsx)(fW.c, {
                      text: [{
                        entityName: WW.name
                      }]
                    })
                  }), (0, eW.jsx)("td", {
                    className: "LBTableTD",
                    children: WW.stat
                  })]
                }, WW.name)))
              })]
            })
          }) : (0, eW.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              pW(null)
            },
            children: (0, eW.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, eW.jsx)("div", {
                className: "TriangleUp"
              }), (0, eW.jsx)("div", {
                className: "LBIncreaseText",
                children: `${dW} Place${dW>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, eW.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, eW.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, eW.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var aR = MW(964),
      sW = MW(116),
      dW = MW(50),
      pW = MW(2541);
    const hW = (0, CW.memo)((function(WW) {
      let {
        show: RW,
        onClose: MW
      } = WW;
      (0, aR.b)();
      const wW = (0, yR.h)("_tasks"),
        zR = (0, yR.h)("_availableLeaderboards"),
        [NW, BW] = (0, CW.useState)({});
      wW && Object.keys(wW).length > 0 && 0 === Object.keys(NW).length && BW(wW);
      const [tR] = (0, CW.useState)({
        tasks: {},
        leaderboard: {}
      }), TW = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!wW && Object.keys(wW).length > 0,
          content: (0, eW.jsx)(JW, {
            tasks: wW,
            lastDisplayedTasks: NW
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === zR || void 0 === zR ? void 0 : zR.length) > 0,
          content: (0, eW.jsx)(kR, {
            lbStats: zR,
            storedState: tR.leaderboard
          })
        }
      };

      function gR() {
        for (const WW in TW)
          if (TW[WW].getIsDefined()) return WW;
        return null
      }
      const [iR, YW] = (0, CW.useState)(gR());

      function PW() {
        BW({
          ...wW
        }), MW()
      }(0, CW.useEffect)((() => {
        iR || YW(gR())
      }), [gR()]), (0, bR.c)(!0, iR && RW), (0, CW.useEffect)((() => {
        RW && !iR && (console.log("CLOSE"), PW())
      }), [RW, iR]);
      const [IW, oW] = (0, CW.useState)(!1);
      return (0, CW.useEffect)((() => {
        RW && iR && !IW && oW(!0)
      }), [RW, IW, iR]), (0, CW.useEffect)((() => {
        !IW && wW && "tasks" !== iR && YW("tasks")
      }), [IW, wW, iR]), (0, eW.jsx)(eW.Fragment, {
        children: iR ? (0, eW.jsx)(pW.b, {
          className: "RetentionFeaturesWrapper",
          show: RW,
          children: (0, eW.jsxs)(AW.b, {
            close: PW,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, eW.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, eW.jsx)(EW, {}), (0, eW.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, eW.jsx)(UW, {
                  setCategory: YW,
                  menuCategories: TW,
                  selectedCat: iR
                }), (0, eW.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: TW[iR].content
                })]
              })]
            }), (0, eW.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: sW.featureFlags.useDiscord && (0, eW.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, eW.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, eW.jsx)(VW, {
                    tasks: wW
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function UW(WW) {
      let {
        selectedCat: RW,
        setCategory: MW,
        menuCategories: wW
      } = WW;
      return (0, eW.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(wW).map((WW => wW[WW].getIsDefined() ? (0, eW.jsx)("div", {
          className: "MenuHeaderCategory " + (WW === RW ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            MW(WW)
          },
          children: wW[WW].Title
        }, WW) : null))
      })
    }

    function EW() {
      const WW = (0, yR.h)("currencyAmounts");
      return (0, eW.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== WW && void 0 !== WW ? WW : {}).map((RW => {
          const MW = WW[RW];
          return MW.hidden ? null : (0, eW.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, eW.jsx)(YW.e, {
              name: MW.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: MW.iconColour
              }
            }), (0, eW.jsx)("div", {
              className: "UiCurrencyAmount",
              children: MW.amount
            })]
          }, RW)
        }))
      })
    }

    function VW(WW) {
      let {
        tasks: RW
      } = WW;
      return (0, eW.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, eW.jsx)(YW.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            dW.g.setItem("DiscordPressed", !0), NW.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in RW && gR.k.Sz("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, eW.jsx)(zR.d, {})]
      })
    }
    var mR = MW(8084),
      xR = MW(34950),
      vR = MW(2289),
      KW = MW(2295),
      uW = MW(1578);
    const OW = (WW, RW) => {
        (0, CW.useEffect)((() => {
          setTimeout((() => {
            WW && WW.current && WW.current.focus()
          }), 1)
        }), [RW])
      },
      nW = (0, CW.memo)((function(WW) {
        let {
          isInputActive: RW,
          onClose: MW,
          onChange: wW,
          textAreaRef: CW,
          fontSize: zR,
          lineHeight: AW,
          currText: bR
        } = WW;
        return (0, eW.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, eW.jsx)("img", {
            src: `${vR.d.getTexture("board_full",KW.j.BLOCK).url}`,
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, eW.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: bR,
            ref: CW,
            style: {
              fontSize: `${zR}rem`,
              lineHeight: `${AW}rem`
            },
            onKeyDown: WW => {
              var RW;
              "Escape" !== WW.key && (WW.stopPropagation(), "Tab" === WW.key && function(WW) {
                WW.preventDefault();
                const RW = WW.target,
                  {
                    value: MW
                  } = RW;
                let wW = RW.selectionStart,
                  CW = RW.selectionEnd,
                  zR = MW.slice(wW, CW);
                if (!zR.includes("\n") && !WW.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; wW > 0 && "\n" !== MW[wW - 1];) wW--;
                const AW = "\n" === MW[CW - 1];
                AW && CW--;
                zR = MW.slice(wW, CW);
                const bR = zR.split("\n").map((RW => WW.shiftKey ? RW.replace(/^\t/, "") : "\t" + RW)).join("\n");
                if (WW.shiftKey && MW.slice(wW, CW) === bR) return;
                let {
                  selectionStart: yR
                } = RW;
                RW.setSelectionRange(wW, CW), yR > wW && (!WW.shiftKey || "\t" === zR[0]) && (yR += WW.shiftKey ? -1 : 1);
                CW = wW + bR.length + (AW ? 1 : 0), document.execCommand("insertText", !1, bR), RW.setSelectionRange(yR, CW)
              }(WW), /^F\d+$/i.test(WW.code) && null !== (RW = uW.q.OpenCodeEditor) && void 0 !== RW && RW.includes(WW.code) && MW())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: wW
          })]
        })
      }));

    function GW(WW) {
      return 1.3 * WW
    }
    var LW = MW(1493);
    const HW = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(null), [yR, BW] = (0, CW.useState)(""), [tR, gR] = (0, CW.useState)(0), [iR, YW] = (0, CW.useState)(null), [JW, PW] = (0, CW.useState)({
          text: "",
          textSize: 0
        }), IW = (WW, RW) => iR ? (0, xR.s)(WW, RW, iR.width, iR.height) : (0, xR.h)(WW, RW), oW = WW => {
          BW(IW(yR, WW)), gR(WW), dW.g.setItem("lastBoardTextSize", WW)
        }, lW = () => {
          wW(), iR && yR === JW.text && tR === JW.textSize || NW.gameBridge.send("writeOnBoard", {
            pos: zR,
            text: yR,
            textSize: tR
          })
        };
        (0, cR.d)("boardEditRequested", (WW => {
          var CW, zR;
          if (!sW.featureFlags.canSeePlayerWrittenText) return;
          if (null === WW) return bR(null), void(RW && wW());
          const {
            pos: AW,
            noticeboardSpan: yR,
            text: NW
          } = WW;
          bR(AW), YW(yR), BW(NW);
          const eW = null !== (CW = null !== (zR = WW.textSize) && void 0 !== zR ? zR : dW.g.getItem("lastBoardTextSize")) && void 0 !== CW ? CW : 0;
          gR(eW), PW({
            text: NW,
            textSize: eW
          }), dW.g.setItem("lastBoardTextSize", eW), MW()
        }));
        const FW = (0, CW.useRef)(null);
        OW(FW, RW), (0, LW.q)(FW, {
          kind: "sign",
          submit: lW
        });
        const fW = function(WW, RW) {
            const MW = xR.d[WW];
            if (!RW) return MW.uiFontSize;
            const {
              numLines: wW,
              charsPerLine: CW
            } = (0, xR.A)(RW.width, RW.height, WW);
            return MW.uiFontSize * Math.min(MW.charsPerLine / CW, MW.numLines / wW)
          }(tR, iR),
          QW = GW(fW);
        return (0, eW.jsxs)(AW.b, {
          className: "WriteOnBoardBg",
          close: lW,
          escDoesExit: !0,
          show: RW,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, eW.jsx)(nW, {
            isInputActive: () => RW,
            onClose: lW,
            onChange: WW => {
              BW(IW(WW.target.value, tR))
            },
            textAreaRef: FW,
            fontSize: fW,
            lineHeight: QW,
            currText: yR
          }), (0, eW.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, eW.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, eW.jsx)(TW.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                oW(0)
              },
              disabled: 0 === tR,
              children: "Small"
            }), (0, eW.jsx)(TW.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                oW(1)
              },
              disabled: 1 === tR,
              children: "Medium"
            }), (0, eW.jsx)(TW.h, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                oW(2)
              },
              disabled: 2 === tR,
              children: "Large"
            })]
          })]
        })
      })),
      DW = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(""), yR = () => {
          wW(), NW.gameBridge.send("writeNameTag", zR)
        };
        (0, QW.f)("EditNameTag", (WW => {
          sW.featureFlags.canSeePlayerWrittenText && null !== WW && (bR(WW), MW())
        }));
        const BW = (0, CW.useRef)(null);
        OW(BW, RW), (0, LW.q)(BW, {
          kind: "nameTag",
          submit: yR
        });
        const tR = xR.N.nameTag.uiFontSize,
          gR = GW(tR);
        return (0, eW.jsxs)(AW.b, {
          className: "WriteOnBoardBg",
          close: yR,
          escDoesExit: !0,
          show: RW,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, eW.jsx)("div", {
            className: "NameTagTrim",
            children: (0, eW.jsx)(nW, {
              isInputActive: () => RW,
              onClose: yR,
              onChange: WW => {
                const RW = WW.target.value.replaceAll("\n", "");
                bR((0, xR.u)(RW, "nameTag"))
              },
              textAreaRef: BW,
              fontSize: tR,
              lineHeight: gR,
              currText: zR
            })
          }), (0, eW.jsx)(TW.h, {
            onClick: yR,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      qR = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(""), [yR, BW] = (0, CW.useState)(0), [tR, gR] = (0, CW.useState)(!1), [iR, YW] = (0, CW.useState)(["", "", "", "", "", "", "", "", "", ""]), [JW, PW] = (0, CW.useState)("Title"), [IW, oW] = (0, CW.useState)(!0), [lW, FW] = (0, CW.useState)(!1);
        (0, QW.f)("EditBook", (WW => {
          let {
            pages: RW,
            title: wW,
            isPublished: CW
          } = WW;
          var zR;
          sW.featureFlags.canSeePlayerWrittenText && (null !== RW ? (YW(RW), bR(null !== (zR = RW[0]) && void 0 !== zR ? zR : ""), PW(wW), BW(0), gR(!1), oW(!CW), FW(!1), MW()) : YW(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const fW = (0, CW.useRef)(null),
          rR = (0, CW.useRef)(null);
        OW(fW, RW), (0, LW.q)(fW, {
          kind: "book"
        }), (0, LW.q)(rR, {
          kind: "Tv"
        });
        const cR = xR.N.book.uiFontSize,
          XW = GW(cR),
          jR = RW ? vR.d.getTexture("book_page", KW.j.ITEM).url : void 0,
          kR = () => {
            (IW || lW) && NW.gameBridge.send("writeBook", {
              pages: [...iR],
              title: JW,
              published: !IW && lW
            })
          },
          aR = WW => {
            tR && (iR[yR] = zR, gR(!1)), bR(iR[WW]), BW(WW)
          };
        return (0, eW.jsxs)(AW.b, {
          className: "WriteOnBoardBg",
          close: () => {
            wW(), iR[yR] = zR, kR()
          },
          escDoesExit: !0,
          show: RW,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, eW.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, eW.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: JW,
              ref: rR,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${XW}rem`
              },
              onKeyDown: WW => {
                IW && WW.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: WW => {
                let RW = WW.target.value;
                RW = (0, xR.u)(RW, "Tv"), PW(RW)
              },
              readOnly: !IW
            }), (0, eW.jsx)("img", {
              src: jR,
              alt: "book_page",
              className: "WriteOnBookPageImg"
            }), (0, eW.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, eW.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: zR,
                ref: fW,
                style: {
                  fontSize: `${cR}rem`,
                  lineHeight: `${XW}rem`
                },
                onKeyDown: WW => {
                  IW && WW.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: WW => {
                  const RW = WW.target.value;
                  bR((0, xR.u)(RW, "book")), gR(!0)
                },
                readOnly: !IW
              })
            })]
          }), (0, eW.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, eW.jsx)(TW.h, {
              disabled: 0 === yR,
              onClick: () => {
                aR(yR - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, eW.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, eW.jsx)(TW.h, {
              disabled: 9 === yR,
              onClick: () => {
                aR(yR + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, eW.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, eW.jsx)(TW.h, {
              onClick: () => {
                oW(!IW), FW(!0)
              },
              className: "BookNavButton",
              children: IW ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var ZW = MW(34838),
      SW = MW(7576),
      WR = MW(1208),
      RR = MW(1027),
      MR = MW(1537);

    function wR(WW) {
      let {
        show: RW
      } = WW;
      (0, QW.i)(ZW.c, (0, ZW.m)());
      const {
        t: MW
      } = (0, RR.C)(), wW = (0, CW.useRef)(null);
      (0, CW.useEffect)((() => {
        var WW, MW;
        const CW = RW ? (0, ZW.E)() : null;
        if (!CW || !(0, WR.d)()) return;
        const zR = (0, ZW.m)().findIndex((WW => WW.id === CW));
        (0, SW.q)(null !== (WW = null === (MW = wW.current) || void 0 === MW ? void 0 : MW.children[zR]) && void 0 !== WW ? WW : null)
      }), [RW]);
      const zR = (0, ZW.m)();
      return 0 === zR.length ? null : (0, eW.jsx)("div", {
        ref: wW,
        className: "ClientGameInventoryButtons",
        onPointerDown: WW => {
          WW.stopPropagation()
        },
        onPointerUp: WW => {
          WW.stopPropagation()
        },
        children: zR.map((WW => {
          const RW = MW(WW.labelKey);
          return (0, eW.jsxs)(TW.m, {
            className: WW.className,
            disabled: WW.disabled,
            onClick: () => {
              (0, ZW.w)(WW)
            },
            ariaLabel: WW.iconOnly ? RW : void 0,
            title: WW.iconOnly ? RW : void 0,
            children: [WW.icon && (0, eW.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === WW.icon.kind && (0, eW.jsx)(MR.c, {
                itemName: WW.icon.name,
                amount: 0
              }), "image" === WW.icon.kind && (0, eW.jsx)("img", {
                src: WW.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === WW.icon.kind && (0, eW.jsx)(YW.e, {
                name: WW.icon.name
              })]
            }), !WW.iconOnly && RW]
          }, WW.id)
        }))
      })
    }
    var CR = MW(34954),
      zM = MW(2127),
      AR = MW(8153),
      bM = MW(34740),
      yM = MW(34738);
    let NR = null;
    window.setShowInventoryAdsOverride = WW => {
      NR = WW
    };
    const eR = 24e4;
    var BR = MW(1541);

    function tM(WW) {
      var RW;
      let {
        draggedInfo: {
          name: MW,
          attributes: wW,
          amount: CW
        },
        toAddRef: zR
      } = WW;
      return (0, eW.jsx)("div", {
        className: "DraggedInvenItem",
        ref: zR,
        children: (0, eW.jsx)(MR.c, {
          itemName: MW,
          amount: CW,
          enchantmentTier: null === wW || void 0 === wW || null === (RW = wW.customAttributes) || void 0 === RW ? void 0 : RW.enchantmentTier,
          bar: (0, BR.l)(wW)
        })
      })
    }

    function TR(WW) {
      let {
        className: RW = "",
        displayInfo: MW,
        domRef: wW
      } = WW;
      return (0, eW.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${RW}`,
        ref: wW,
        children: [(0, eW.jsx)(fW.c, {
          text: (0, rR.pb)(MW.name, {
            fontStyle: MW.fontStyle
          })
        }), (0, eW.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, eW.jsx)(fW.c, {
            text: MW.desc
          })
        })]
      })
    }

    function gM(WW) {
      let {
        info: RW,
        draggedInfo: MW
      } = WW;
      return (0, eW.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        style: {
          left: RW.initTouchX,
          top: RW.initTouchY
        },
        children: [(0, eW.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: MW.amount / RW.maxAmount * 100 + "%"
          }
        }), (0, eW.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [MW.amount, "/", RW.maxAmount]
        })]
      })
    }
    var iM = MW(897),
      YR = MW.n(iM),
      JR = MW(173);
    const PR = (0, CW.memo)((function(WW) {
      let {
        show: RW,
        onOpen: MW,
        onClose: wW
      } = WW;
      const zR = (0, CW.useRef)({
          pos: null
        }),
        [bR, yR] = (0, CW.useState)([0, 0, 0, 0]),
        {
          userContext: BW
        } = (0, FW.c)();
      (0, cR.d)("ironChestOpenRequested", (WW => {
        let {
          pos: RW,
          ownerDbId: wW,
          cachedPasskey: CW
        } = WW;
        if (zR.current.pos = RW, wW !== BW.whamm) return null !== CW ? (yR(CW), void tR(CW)) : void MW();
        tR(bR)
      })), (0, cR.d)("localEffectUpdated", (WW => {
        "Thief" === WW && wW()
      }));
      const tR = WW => {
        const {
          pos: RW
        } = zR.current;
        NW.gameBridge.send("openIronChest", {
          pos: RW,
          Wy: WW
        })
      };
      return (0, eW.jsx)(AW.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: wW,
        escDoesExit: !0,
        show: RW,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, eW.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, eW.jsx)(IR, {
            Wy: bR,
            onPasskeyUpdated: yR,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              tR(bR)
            }
          })
        })
      })
    }));

    function IR(WW) {
      let {
        className: RW = "",
        Wy: MW,
        onPasskeyUpdated: wW,
        confirmText: CW,
        onConfirm: zR
      } = WW;
      const {
        t: AW
      } = (0, RR.C)();
      return (0, eW.jsxs)("div", {
        className: `${RW} IronChestPasskeyInput`,
        children: [(0, eW.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: AW("ironChest:passkeyInputTitle")
        }), (0, eW.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(JR.c.ironChestPasskeyLength).fill(0).map(((WW, RW) => (0, eW.jsx)(oR, {
            digit: MW[RW],
            onPasskeyDigitUpdated: WW => {
              const CW = [...MW];
              CW[RW] = WW, wW(CW)
            }
          }, RW)))
        }), (0, eW.jsx)(TW.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: zR,
          children: AW(CW)
        })]
      })
    }

    function oR(WW) {
      let {
        digit: RW,
        onPasskeyDigitUpdated: MW
      } = WW;
      return (0, eW.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, eW.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, eW.jsx)(TW.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              MW(rR.d.mod(RW + 1, 10))
            },
            children: (0, eW.jsx)(YW.e, {
              name: "angle-up"
            })
          }), (0, eW.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: RW
          }), (0, eW.jsx)(TW.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              MW(rR.d.mod(RW - 1, 10))
            },
            children: (0, eW.jsx)(YW.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var lR = MW(8147),
      FR = MW(34988),
      fR = MW(34733);

    function QR(WW) {
      let {
        specialItemInfo: RW,
        setHovered: MW,
        pointerDown: wW,
        pointerUp: zR,
        enchantingTablePosition: AW,
        enchantingTableBlockName: bR
      } = WW;
      const {
        t: BW
      } = (0, RR.C)(), [tR, gR] = (0, CW.useState)(null), [iR, YW] = (0, CW.useState)(null), JW = (0, yR.h)("auraPerLevel"), PW = Math.floor((0, cR.h)("aura") / JW);
      (0, CW.useEffect)((() => {
        if (!RW) return void gR(null);
        let WW = !0;
        return NW.gameBridge.query("enchantingOffer", {
          slot: RW.idx,
          name: RW.name,
          blockName: bR
        }).then((MW => {
          var wW, CW;
          let {
            perks: zR,
            options: AW
          } = MW;
          if (!WW) return;
          const bR = {
            isEnchantable: zR.length > 0,
            possibleEnchantments: zR,
            options: AW.map((WW => {
              let {
                level: RW,
                odds: MW
              } = WW;
              return {
                level: RW,
                possibilities: Object.fromEntries(MW.map(((WW, RW) => [`Tier ${RW+1}`, WW])))
              }
            })),
            isAlreadyEnchanted: zR.length > 0 && void 0 !== (null === (wW = RW.attributes) || void 0 === wW || null === (CW = wW.customAttributes) || void 0 === CW ? void 0 : CW.enchantmentTier)
          };
          gR(bR), (WW => {
            const RW = WW.options.map((WW => Object.entries(WW.possibilities).map((WW => {
              let [RW, MW] = WW;
              return {
                str: `${RW}: ${MW>0?MW<.01?MW.toPrecision(1):MW.toFixed(2):0}%\n`,
                style: {
                  color: rR.lb[RW]
                }
              }
            }))));
            YW(RW)
          })(bR)
        })), () => {
          WW = !1
        }
      }), [RW, AW, bR]);
      const IW = [];
      for (let CW = 0; CW < FR.e; CW++) {
        const WW = null === tR || void 0 === tR ? void 0 : tR.options[CW],
          wW = !WW || WW.level > PW;
        IW.push((0, eW.jsx)(TW.h, {
          className: "EnchantmentButton",
          onPointerEnter: WW ? WW => null === MW || void 0 === MW ? void 0 : MW()(!0, {
            name: "",
            desc: iR[CW]
          }, WW) : void 0,
          onPointerLeave: WW ? () => null === MW || void 0 === MW ? void 0 : MW()(!1) : void 0,
          onClick: wW ? void 0 : () => {
            NW.gameBridge.send("enchantItem", {
              slot: RW.idx,
              level: WW.level,
              tablePos: AW
            }), gR(null)
          },
          disabled: wW,
          children: WW ? (0, eW.jsxs)(eW.Fragment, {
            children: [(0, eW.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, eW.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [BW("enchantments:cost"), ": "]
              }), " ", BW("enchantments:levels", {
                level: WW.level
              })]
            }), (0, eW.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, eW.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, eW.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: BW("enchantments:tier")
                }), Object.entries(WW.possibilities).map((WW => {
                  let [RW, MW] = WW;
                  return 0 === MW ? null : (0, eW.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: rR.lb[RW]
                    },
                    children: RW
                  }, RW)
                }))]
              }), (0, eW.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, eW.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: BW("enchantments:odds")
                }), Object.entries(WW.possibilities).map((WW => {
                  let [RW, MW] = WW;
                  return 0 === MW ? null : (0, eW.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: rR.lb[RW]
                    },
                    children: [MW > 0 && MW < .1 ? "<0.1" : MW.toFixed(0 < MW && MW < .95 ? 1 : 0), "%"]
                  }, RW)
                }))]
              })]
            })]
          }) : !1 === (null === tR || void 0 === tR ? void 0 : tR.isEnchantable) ? (0, eW.jsx)("h1", {
            className: "EnchantmentLevels",
            children: BW("enchantments:notEnchantable")
          }) : (0, eW.jsx)("h1", {
            className: "EnchantmentLevels",
            children: BW("enchantments:enterItem")
          })
        }, CW))
      }
      return (0, eW.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, eW.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: bR
        }), (0, eW.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, eW.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, eW.jsx)(fR.e, {
              idx: yM.e,
              setHovered: WW => {
                null === MW || void 0 === MW || MW(yM.e)(WW)
              },
              pointerDown: wW,
              pointerUp: zR,
              draggedInfo: null,
              specialItemInfo: RW,
              variation: "Enchanting Table"
            }), tR && tR.possibleEnchantments.length > 0 && (0, eW.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, eW.jsx)("h2", {
                children: "Possible Perks:"
              }), tR.possibleEnchantments.map((WW => (0, eW.jsxs)(CW.Fragment, {
                children: [(0, eW.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, eW.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, eW.jsx)(MR.c, {
                      itemName: `${WW} Enchantment`,
                      amount: 1
                    })
                  }), (0, eW.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: WW
                  })]
                }), (0, eW.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: BW((0, lR.g)(WW).translationKey)
                })]
              }, WW)))]
            })]
          }), (0, eW.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [tR && tR.isAlreadyEnchanted && (0, eW.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: BW("enchantments:alreadyEnchanted")
            }), IW]
          })]
        })]
      })
    }
    var rM = MW(34995);

    function cM(WW) {
      var RW;
      let {
        specialItemInfo: MW,
        setSpecialItemInfo: wW,
        setHovered: zR,
        pointerDown: AW,
        pointerUp: bR
      } = WW;
      const {
        t: yR
      } = (0, RR.C)(), BW = (0, cR.f)("inventory", (WW => WW.freeSlots)), [tR, gR] = (0, CW.useState)(null);
      (0, CW.useEffect)((() => {
        if (MW) {
          const WW = (0, rM.e)(MW.name, MW.amount);
          gR({
            salvageable: !!WW,
            produces: WW
          })
        } else gR(null)
      }), [MW, null === MW || void 0 === MW ? void 0 : MW.name, null === MW || void 0 === MW ? void 0 : MW.amount]);
      const iR = !!MW && !(null === tR || void 0 === tR || !tR.salvageable) && !(null !== (RW = tR.produces) && void 0 !== RW && RW.some((WW => {
        let {
          amt: RW
        } = WW;
        return RW < 1
      })));
      return (0, eW.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, eW.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: yR("item:salvagingTable")
        }), (0, eW.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, eW.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, eW.jsx)(fR.e, {
              idx: yM.e,
              setHovered: WW => {
                null === zR || void 0 === zR || zR(yM.e)(WW)
              },
              pointerDown: AW,
              pointerUp: bR,
              draggedInfo: null,
              specialItemInfo: MW,
              variation: "Salvaging Table"
            })
          }), (0, eW.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, eW.jsx)(TW.h, {
              className: "SalvageButton",
              onClick: iR ? () => {
                const {
                  idx: WW,
                  name: RW,
                  amount: CW
                } = MW;
                NW.gameBridge.send("salvageItem", {
                  slot: WW,
                  name: RW,
                  amount: CW
                }) && (gR(null), wW(null))
              } : void 0,
              disabled: !iR,
              children: tR ? tR.salvageable ? tR.produces.some((WW => {
                let {
                  amt: RW
                } = WW;
                return RW < 1
              })) ? (0, eW.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, eW.jsx)("div", {
                  className: "SalvageText Error",
                  children: yR("salvagingTable:notEnoughResources")
                })
              }) : BW < tR.produces.length ? (0, eW.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, eW.jsx)("div", {
                  className: "SalvageText Error",
                  children: yR("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, eW.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, eW.jsx)("div", {
                  className: "SalvageText",
                  children: yR("salvagingTable:salvage")
                }), (0, eW.jsx)("div", {
                  className: "SalvageIcons",
                  children: tR.produces.map(((WW, RW) => {
                    let {
                      item: MW,
                      amt: wW
                    } = WW;
                    return (0, eW.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: MW,
                        amount: Math.floor(wW)
                      })
                    }, RW)
                  }))
                })]
              }) : (0, eW.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, eW.jsx)("div", {
                  className: "SalvageText Error",
                  children: yR("salvagingTable:unsalvageable")
                })
              }) : (0, eW.jsx)(eW.Fragment, {})
            })
          })]
        })]
      })
    }
    var XR = MW(613),
      jM = MW(8180),
      kM = MW(2103),
      aM = MW(1489),
      sR = MW(7587),
      dR = MW(7585),
      pR = MW(1480),
      hR = MW(1595),
      UR = MW(1216),
      ER = MW(1657);

    function VR(WW, RW, MW) {
      const wW = WW.trim().toLowerCase();
      if ("" === wW) return 0;
      let CW = null;
      for (const zR of RW) {
        const WW = zR.toLowerCase().indexOf(wW);
        if (0 === WW) return 0;
        WW > 0 && (CW = 1)
      }
      if (null !== CW) return CW;
      for (const zR of MW)
        if (zR.toLowerCase().includes(wW)) return 2;
      return null
    }

    function mM(WW) {
      return WW.map((WW => {
        var RW;
        return WW ? {
          name: WW.name,
          amount: null !== (RW = WW.amount) && void 0 !== RW ? RW : 1
        } : null
      }))
    }

    function xM(WW) {
      return WW < 1e3 ? `${WW}` : WW < 1e4 ? Math.floor(WW / 100) / 10 + "k" : `${Math.floor(WW/1e3)}k`
    }
    var vM = MW(34998);
    const KR = TW.h,
      uR = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      OR = () => {
        const WW = (0, UR.d)();
        return WW ? WW.getPadRepeatTiming(uR) : uR
      };

    function nR(WW, RW, MW) {
      var wW, CW;
      const zR = (0, AR.x)(RW, WW);
      let AW = null === (wW = RW[WW]) || void 0 === wW ? void 0 : wW.description;
      if (MW && (null === (CW = (0, vM.c)().get(WW)) || void 0 === CW || !CW.hideIngredients)) {
        AW ? (AW = (0, rR.pb)(AW), AW.push({
          str: "\n"
        })) : AW = [], AW.push({
          str: "\n"
        }), AW.push({
          str: "Can be crafted from:\n"
        });
        for (const WW of MW) "string" === typeof WW && (AW.push({
          icon: WW,
          style: {
            fontSize: "1.5em"
          }
        }), AW.push({
          str: " "
        }), AW.push(...(0, rR.pb)((0, AR.x)(RW, WW))), AW.push({
          str: "\n"
        }))
      }
      return {
        name: zR,
        desc: AW
      }
    }

    function GR(WW) {
      let {
        name: RW,
        iH: MW
      } = WW;
      return `${RW}_${MW}`
    }

    function LR(WW) {
      var RW;
      let {
        onClick: MW,
        itemName: wW,
        recipeId: zR,
        isSelected: AW,
        haveIngredients: bR,
        craftable: yR,
        setHovered: NW,
        padActions: BW,
        marked: tR,
        lock: TW,
        itemInfo: gR
      } = WW;
      const iR = (0, CW.useRef)(null);
      return (0, sR.d)(iR, {
        press: WW => !bR || "secondary" === WW && !yR ? (BW.refuse(), !1) : "primary" === WW ? (BW.choose(), !0) : BW.craft(),
        release: BW.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, eW.jsxs)("div", {
        ref: iR,
        className: YR()("InvenItem", {
          CraftableItemNotEnoughIngredients: !bR && !TW,
          CraftableItemMarked: tR,
          CraftableItemLocked: void 0 !== TW,
          CraftableItemLockedFar: (null !== (RW = null === TW || void 0 === TW ? void 0 : TW.stepsAway) && void 0 !== RW ? RW : 1) > 1
        }),
        "data-recipe-key": zR,
        "data-pad-inventory-default": AW ? "" : void 0,
        onClick: MW,
        style: {
          cursor: AW ? null : "pointer"
        },
        onPointerEnter: WW => {
          null === NW || void 0 === NW || NW(!0, nR(wW, gR)), !AW && (0, pR.k)(WW.nativeEvent) && (0, dR.k)() && MW()
        },
        onPointerLeave: () => {
          null === NW || void 0 === NW || NW(!1)
        },
        children: [(0, eW.jsx)(MR.c, {
          itemName: wW,
          amount: 1
        }), tR && (0, eW.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), TW && (0, eW.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, eW.jsx)(YW.e, {
            name: "lock"
          }), (0, eW.jsx)(fW.c, {
            text: TW.tag
          })]
        })]
      })
    }

    function HR(WW) {
      let {
        idx: RW,
        status: MW,
        shownItem: wW,
        dim: zR,
        onHoverStart: AW,
        onHoverEnd: bR,
        onPadBack: yR
      } = WW;
      const NW = (0, CW.useRef)(null);
      (0, sR.d)(NW, {
        press: () => !1,
        back: yR,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const BW = MW.need > 0 ? Math.min(MW.have / MW.need, 1) : 1;
      return (0, eW.jsxs)("div", {
        ref: NW,
        className: YR()("CupTile", {
          Short: MW.missing > 0
        }),
        style: {
          width: zR,
          height: zR
        },
        "data-craft-ingredient": RW,
        onPointerEnter: AW,
        onPointerLeave: bR,
        children: [(0, eW.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${BW})`
          }
        }), (0, eW.jsx)(MR.c, {
          itemName: wW,
          amount: 0
        }), (0, eW.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [xM(MW.have), "/", xM(MW.need)]
        })]
      })
    }

    function DR(WW) {
      var RW, MW, wW, zR, AW;
      let {
        show: bR,
        recipeItem: {
          name: yR,
          iH: BW,
          requires: tR,
          produces: TW,
          haveIngredients: gR
        },
        detail: iR,
        onCraft: YW,
        setHovered: JW,
        craftButtonRef: PW,
        onPadBack: IW,
        showPadShortcut: oW,
        refusedCount: lW,
        lock: FW,
        itemInfo: QW
      } = WW;
      const {
        t: rR
      } = (0, RR.C)(), cR = null !== iR && !iR.roomForOne, XW = null !== (RW = null === iR || void 0 === iR ? void 0 : iR.craftAllTimes) && void 0 !== RW ? RW : 0, jR = function(WW, RW) {
        return WW.map((WW => {
          let {
            items: MW,
            amt: wW
          } = WW, CW = 0;
          const zR = [];
          for (const AW of MW) {
            const WW = RW(AW);
            CW += WW, WW > 0 && zR.push(AW)
          }
          return 0 === zR.length && zR.push(MW[0]), {
            shownItems: zR,
            need: wW,
            have: CW,
            missing: Math.max(wW - CW, 0)
          }
        }))
      }(tR, (WW => {
        var RW;
        return null !== (RW = null === iR || void 0 === iR ? void 0 : iR.amounts[WW]) && void 0 !== RW ? RW : 0
      }));
      let kR = "4rem",
        aR = 4;
      3 === tR.length || 4 === tR.length ? kR = "3.75rem" : tR.length >= 5 && (kR = "3rem"), 4 === tR.length ? aR = 2 : tR.length <= 6 && (aR = 3);
      const sW = `calc(${aR} * ${kR} + ${aR-1} * 0.4rem + 1px)`,
        dW = (0, CW.useRef)(null),
        pW = (0, CW.useRef)(null),
        hW = (0, CW.useRef)(lW);
      (0, CW.useEffect)((() => {
        if (lW === hW.current) return;
        hW.current = lW;
        const WW = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const wW of null !== (RW = null === (MW = dW.current) || void 0 === MW ? void 0 : MW.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== RW ? RW : []) {
          var RW, MW;
          wW.animate(WW, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [lW]);
      const UW = (WW, RW, MW) => {
          var wW;
          if ((0, vM.c)().has(yR)) return void(MW && clearInterval(EW.current));
          const CW = null !== (wW = null === iR || void 0 === iR ? void 0 : iR.resultStackable) && void 0 !== wW && wW,
            zR = mM(NW.gameBridge.latest("inventory").player),
            {
              YL: AW,
              jK: bR,
              amountAddedToSlot: eW
            } = NW.gameBridge.send("craftRecipe", {
              name: yR,
              iH: BW,
              times: RW || WW && CW ? null : 1
            });
          if (AW > 0) {
            const RW = [],
              wW = new Set(tR.flatMap((WW => {
                let {
                  items: RW
                } = WW;
                return RW
              }))),
              AW = function(WW, RW, MW) {
                const wW = [];
                for (let CW = 0; CW < WW.length; CW++) {
                  const zR = WW[CW];
                  if (!zR || !MW.has(zR.name)) continue;
                  const AW = RW[CW],
                    bR = (null === AW || void 0 === AW ? void 0 : AW.name) === zR.name ? AW.amount : 0;
                  bR < zR.amount && wW.push({
                    idx: CW,
                    itemName: zR.name,
                    amount: zR.amount - bR
                  })
                }
                return wW
              }(zR, mM(NW.gameBridge.latest("inventory").player), wW).slice(0, 12),
              BW = MW ? 0 : Math.min(50, 400 / AW.length),
              gR = MW ? 220 : 320;
            for (const WW of AW) {
              var TW;
              const MW = tR.findIndex((RW => {
                  let {
                    items: MW
                  } = RW;
                  return MW.includes(WW.itemName)
                })),
                wW = null === (TW = dW.current) || void 0 === TW ? void 0 : TW.querySelector(`[data-craft-ingredient="${MW}"]`),
                CW = (0, AR.g)(WW.idx);
              wW && CW && RW.push({
                kind: "ingredient",
                itemName: WW.itemName,
                amount: WW.amount,
                jK: WW.idx,
                from: CW,
                to: (0, AR.g)(wW),
                delayMs: Math.round(RW.length * BW),
                durationMs: gR
              })
            }
            let iR;
            if (null !== bR && eW > 0 && pW.current) {
              const WW = RW.length > 0 ? RW[RW.length - 1].delayMs + .6 * gR : 0;
              iR = {
                itemName: yR,
                amount: eW,
                jK: bR,
                from: (0, AR.g)(pW.current),
                delayMs: Math.round(WW)
              }
            }
            YW(iR, WW && !CW ? bR : null, RW), CR.b.play("wood1", .5).rate(1.75)
          }
        },
        EW = (0, CW.useRef)(null);
      (0, CW.useEffect)((() => () => {
        clearInterval(EW.current)
      }), []);
      const VW = (WW, RW) => {
          UW(WW, !1, !1), clearInterval(EW.current), RW && (EW.current = setTimeout((() => {
            EW.current = setInterval((() => {
              UW(WW, !1, !0)
            }), RW.intervalMs)
          }), RW.initialDelayMs))
        },
        mR = () => {
          clearInterval(EW.current)
        },
        xR = !gR || cR || Boolean(FW),
        vR = (0, CW.useRef)(null),
        KW = null !== (MW = null === (wW = (0, ER.c)()) || void 0 === wW ? void 0 : wW.hideButtonHints) && void 0 !== MW && MW,
        uW = null !== (zR = null === (AW = (0, UR.d)()) || void 0 === AW ? void 0 : AW.getBoundButton("inventorySecondary")) && void 0 !== zR ? zR : null,
        OW = () => !xR && (UW(!1, !0, !1), !0);
      (0, sR.d)(PW, {
        press: WW => "secondary" === WW ? OW() : !xR && (VW(!1, OR()), !0),
        release: mR,
        back: IW,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, sR.d)(vR, {
        press: OW,
        back: IW,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [nW, GW] = (0, CW.useState)(0), [LW, HW] = (0, CW.useState)(null);
      (0, CW.useEffect)((() => {
        if (!0 === bR) {
          GW(0);
          const WW = setInterval((() => {
            GW((WW => WW + 1))
          }), 1e3);
          return () => {
            clearInterval(WW)
          }
        }
        return () => {}
      }), [bR]);
      const DW = null === iR || void 0 === iR ? void 0 : iR.ingredientsCraftedFrom,
        qR = (0, CW.useRef)(JW);
      (0, CW.useEffect)((() => {
        qR.current = JW
      }), [JW]);
      const ZW = !(null === FW || void 0 === FW || !FW.hideIngredients);
      (0, CW.useEffect)((() => {
        var WW, RW;
        if (!LW) return;
        if (ZW) return HW(null), void(null === (RW = qR.current) || void 0 === RW || RW.call(qR, !1));
        const MW = LW[nW % LW.length];
        null === (WW = qR.current) || void 0 === WW || WW.call(qR, !0, nR(MW, QW, null === DW || void 0 === DW ? void 0 : DW[MW]))
      }), [LW, nW, QW, DW, ZW]);
      const SW = !!FW,
        WR = (0, CW.useRef)(!1);
      (0, CW.useEffect)((() => {
        var WW;
        SW && (clearInterval(EW.current), ZW && WR.current && (WR.current = !1, null === (WW = qR.current) || void 0 === WW || WW.call(qR, !1)))
      }), [SW, ZW]);
      const wR = (0, AR.x)(QW, yR);
      return (0, eW.jsxs)("div", {
        ref: dW,
        className: "CraftableInfo SmallTextBold",
        children: [(0, eW.jsx)("div", {
          className: "CraftableHeader",
          children: (0, eW.jsx)(fW.c, {
            text: wR
          })
        }), !ZW && (0, eW.jsx)("div", {
          className: YR()("CraftableIngredients", {
            Compact: tR.length >= 5
          }),
          style: {
            maxWidth: sW
          },
          children: jR.map(((WW, RW) => {
            const MW = WW.shownItems[nW % WW.shownItems.length];
            return (0, eW.jsx)(HR, {
              idx: RW,
              status: WW,
              shownItem: MW,
              dim: kR,
              onHoverStart: () => {
                HW(WW.shownItems)
              },
              onHoverEnd: () => {
                HW(null), null === JW || void 0 === JW || JW(!1)
              },
              onPadBack: IW
            }, RW)
          }))
        }), FW && (0, eW.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, eW.jsx)(fW.c, {
            text: FW.reason
          })
        }), !FW && (!gR || cR) && (0, eW.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!gR && "Missing ingredients", (0, eW.jsx)("br", {}), cR && "Inventory is full"]
        }), !ZW && (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsxs)(KR, {
            ref: PW,
            className: "DoCraftButton",
            onPointerDown: WW => {
              VW((0, AR.B)(WW), (0, pR.k)(WW.nativeEvent) ? OR() : uR)
            },
            onPointerUp: mR,
            onPointerLeave: mR,
            disabled: xR,
            children: [oW && uW && !xR && !KW && (0, eW.jsx)(hR.d, {
              className: "CraftShortcutGlyph",
              glyph: uW
            }), (0, eW.jsx)("div", {
              ref: pW,
              className: "DoCraftItem",
              onPointerEnter: () => {
                WR.current = !0, null === JW || void 0 === JW || JW(!0, nR(yR, QW))
              },
              onPointerLeave: () => {
                WR.current = !1, null === JW || void 0 === JW || JW(!1)
              },
              children: (0, eW.jsx)(MR.c, {
                itemName: yR,
                amount: TW
              })
            })]
          }), (0, eW.jsxs)(KR, {
            ref: vR,
            className: "DoCraftAllButton",
            onPointerDown: WW => {
              UW((0, AR.B)(WW), !0, !1)
            },
            disabled: xR,
            children: [(0, eW.jsx)("span", {
              className: "CraftAllLabel",
              children: rR("general:craftAll")
            }), XW > 0 && (0, eW.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", xM(XW)]
            })]
          })]
        })]
      })
    }

    function qM(WW) {
      let {
        selectedIdx: RW,
        hidden: MW
      } = WW;
      const wW = (0, WR.q)(),
        zR = (0, CW.useRef)(null);
      return (0, CW.useLayoutEffect)((() => {
        const WW = zR.current,
          wW = null === WW || void 0 === WW ? void 0 : WW.parentElement;
        if (!wW || !WW) return;
        const CW = wW.querySelector(".CraftableItems"),
          AW = () => {
            var zR, AW;
            if (MW) return void(WW.style.opacity = "0");
            const bR = null === CW || void 0 === CW ? void 0 : CW.children[RW],
              yR = null === (zR = null !== (AW = null === bR || void 0 === bR ? void 0 : bR.querySelector(".InvenItem")) && void 0 !== AW ? AW : bR) || void 0 === zR ? void 0 : zR.getBoundingClientRect();
            if (!yR || 0 === yR.width) return void(WW.style.opacity = "0");
            const NW = wW.getBoundingClientRect();
            WW.style.opacity = "1", WW.style.width = `${yR.width}px`, WW.style.height = `${yR.height}px`, WW.style.transform = `translate(${yR.left-NW.left+wW.scrollLeft}px, ${yR.top-NW.top+wW.scrollTop}px)`
          };
        AW();
        const bR = new MutationObserver(AW),
          yR = new ResizeObserver(AW);
        return yR.observe(wW), CW && (bR.observe(CW, {
          childList: !0,
          subtree: !0
        }), yR.observe(CW)), () => {
          bR.disconnect(), yR.disconnect()
        }
      }), [RW, MW]), (0, eW.jsx)("div", {
        ref: zR,
        className: YR()("SelectionReticle", {
          Secondary: wW
        })
      })
    }

    function ZR(WW, RW, MW) {
      return WW ? (0, XR.d)(jM.g, WW) ? SR(WW, RW, MW) : WW : MW("classicGame:handCrafting")
    }

    function SR(WW, RW, MW) {
      var wW;
      const CW = null === (wW = RW[WW]) || void 0 === wW ? void 0 : wW.displayName;
      if ("string" === typeof CW) return MW(CW);
      const zR = NW.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(CW) ? CW.map((WW => {
        if ("string" === typeof WW) return WW;
        if ("translationKey" in WW) return MW(WW.translationKey, (0, RR.p)(WW.params, zR));
        if ("str" in WW) {
          if ("string" === typeof WW.str) return WW.str;
          if ("translationKey" in WW.str) return MW(WW.str.translationKey, (0, RR.p)(WW.str.params, zR))
        }
        return ""
      })).join("") : CW && "translationKey" in CW ? MW(CW.translationKey, (0, RR.p)(CW.params, zR)) : WW
    }

    function WM(WW, RW) {
      return WW === RW || null !== WW && null !== RW && WW.name === RW.name && WW.iH === RW.iH
    }

    function RM(WW) {
      var RW, MW, wW;
      let {
        show: zR,
        onCraft: AW,
        dispatchSelectedCraftable: bR,
        selectedCraftable: yR,
        craftingStation: BW,
        setHovered: tR
      } = WW;
      const {
        t: TW
      } = (0, RR.C)(), [gR, iR] = (0, CW.useState)(""), [YW, JW] = (0, CW.useState)(0);
      (0, CW.useEffect)((() => {
        zR || (iR(""), JW((WW => WW + 1)))
      }), [zR]);
      const [PW, IW] = (0, CW.useState)(BW);
      PW !== BW && (IW(BW), "" !== gR && (iR(""), JW((WW => WW + 1))));
      const oW = (0, CW.useRef)(null),
        lW = (0, CW.useRef)(null),
        FW = (0, dR.o)(),
        fW = FW.showing && "recipe" === FW.kind,
        [QW, rR] = (0, CW.useState)(0),
        XW = null !== BW && void 0 !== BW ? BW : null,
        jR = (0, CW.useRef)(null),
        kR = WW => {
          return !((RW = jR.current) === (MW = WW) || null !== RW && null !== MW && RW.station === MW.station && WM(RW.recipe, MW.recipe)) && (jR.current = WW, NW.gameBridge.send("focusCrafting", WW), !0);
          var RW, MW
        };
      kR(zR ? {
        station: XW,
        recipe: (null === (RW = jR.current) || void 0 === RW ? void 0 : RW.station) === XW ? jR.current.recipe : null
      } : null);
      let aR = NW.gameBridge.latest("crafting");
      const sW = (0, cR.h)("itemInfo"),
        dW = "" !== gR.trim(),
        pW = (0, vM.F)(),
        hW = (0, vM.B)(),
        UW = (0, vM.I)(),
        EW = function(WW, RW) {
          const [MW, wW] = (0, CW.useState)(!1);
          (0, CW.useEffect)((() => {
            if (!WW) return void wW(!1);
            const RW = setTimeout((() => {
              wW(!0)
            }), 0);
            return () => {
              clearTimeout(RW)
            }
          }), [WW]);
          const zR = WW && MW,
            AW = (0, CW.useRef)({
              station: RW,
              at: new Map
            });
          return (AW.current.station !== RW || !zR && AW.current.at.size > 0) && (AW.current = {
            station: RW,
            at: new Map
          }), zR ? AW.current.at : null
        }(zR, BW);
      let VW = aR.recipes.filter((WW => {
        let {
          listed: RW
        } = WW;
        return RW
      }));
      if (dW) {
        const WW = [];
        for (const RW of aR.recipes) {
          var mR;
          const MW = null !== (mR = hW.get(RW.name)) && void 0 !== mR && mR.hideIngredients ? [] : RW.requires.flatMap((WW => {
              let {
                items: RW
              } = WW;
              return RW.flatMap((WW => [WW, SR(WW, sW, TW)]))
            })),
            wW = VR(gR, [RW.name, SR(RW.name, sW, TW)], MW);
          null !== wW && WW.push({
            item: RW,
            rank: wW
          })
        }
        WW.sort(((WW, RW) => WW.rank - RW.rank)), VW = WW.map((WW => {
          let {
            item: RW
          } = WW;
          return RW
        }))
      } else {
        if (EW && EW.size > 0) {
          const WW = aR.recipes.filter((WW => !WW.listed && EW.has(GR(WW))));
          VW = VW.concat(WW)
        }
        VW = (0, vM.g)(VW, pW, hW, UW), EW && (VW = (0, vM.e)(VW, EW, GR))
      }
      const xR = WW => VW.find((RW => GR(RW) === WW)),
        vR = `${BW}|${gR}`,
        [KW, uW] = (0, CW.useState)(null),
        OW = (null === KW || void 0 === KW ? void 0 : KW.context) === vR ? KW.key : null,
        nW = yR ? GR(yR) : null,
        GW = null !== (MW = null !== (wW = xR(nW)) && void 0 !== wW ? wW : xR(OW)) && void 0 !== MW ? MW : VW[0],
        LW = GW ? GR(GW) : null,
        HW = GW ? {
          name: GW.name,
          iH: GW.iH
        } : null;
      zR && kR({
        station: XW,
        recipe: HW
      }) && (aR = NW.gameBridge.latest("crafting")), LW !== nW && LW !== OW && uW(LW ? {
        context: vR,
        key: LW
      } : null), (0, CW.useEffect)((() => () => {
        jR.current = null, NW.gameBridge.send("focusCrafting", null)
      }), []);
      const DW = WM(aR.detail, HW) ? aR.detail : null,
        qR = null !== DW && !DW.roomForOne,
        ZW = VW.findIndex((WW => GR(WW) === GR(GW))),
        WR = () => lW.current ? (0, sR.c)(lW.current) : null,
        MR = (0, CW.useRef)(null),
        wR = (0, CW.useRef)(0);
      wR.current++;
      const CR = wR.current;
      (0, CW.useEffect)((() => {
        const WW = MR.current;
        if (!WW || CR <= WW.afterRender) return;
        if (MR.current = null, WW.key !== LW) return;
        const RW = WR();
        var MW;
        null !== RW && void 0 !== RW && RW.press("primary") && !WW.mM && (null === (MW = RW.release) || void 0 === MW || MW.call(RW))
      }));
      const zM = WW => {
          const RW = {
            name: WW.name,
            iH: WW.iH
          };
          return {
            choose: () => {
              bR(RW), (0, SW.q)(lW.current)
            },
            craft: () => {
              var WW, MW;
              return bR(RW), GR(RW) !== GR(GW) ? (MR.current = {
                key: GR(RW),
                mM: !0,
                afterRender: wR.current
              }, !0) : null !== (WW = null === (MW = WR()) || void 0 === MW ? void 0 : MW.press("primary")) && void 0 !== WW && WW
            },
            stopCraft: () => {
              var WW, RW;
              MR.current ? MR.current.mM = !1 : null === (WW = WR()) || void 0 === WW || null === (RW = WW.release) || void 0 === RW || RW.call(WW)
            },
            refuse: () => {
              GR(RW) !== GR(GW) && bR(RW), rR((WW => WW + 1))
            }
          }
        },
        AR = () => {
          var WW, RW, MW;
          (0, SW.q)(null !== (WW = null === (RW = oW.current) || void 0 === RW || null === (MW = RW.querySelector(".CraftableItems")) || void 0 === MW ? void 0 : MW.children[ZW]) && void 0 !== WW ? WW : null)
        },
        bM = VW.map(GR).join("|"),
        yM = (0, CW.useRef)(bM);
      return (0, CW.useEffect)((() => {
        yM.current !== bM && (yM.current = bM, fW && ZW >= 0 && (0, dR.k)() && AR())
      })), (0, eW.jsxs)("div", {
        className: "Craftables",
        children: [(0, eW.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: ZR(BW, sW, TW)
        }), (0, eW.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, eW.jsx)(aM.e, {
            className: "CraftingSearch",
            placeholderText: TW("general:searchRecipes"),
            defaultValue: gR,
            maxLength: 100,
            onValueChange: WW => {
              iR(WW)
            },
            blurOnEnter: !0
          }, YW), 0 === VW.length && dW && (0, eW.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: TW("general:noRecipesMatchSearch")
          }), VW.length > 0 && (0, eW.jsxs)(eW.Fragment, {
            children: [(0, eW.jsxs)("div", {
              ref: oW,
              className: "CraftablesLeftSide",
              children: [(0, eW.jsx)(kM.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(VW.map((WW => {
                  let {
                    name: RW,
                    iH: MW,
                    haveIngredients: wW
                  } = WW;
                  return {
                    name: RW,
                    iH: MW,
                    haveIngredients: wW
                  }
                })))],
                observing: zR,
                children: VW.map((WW => {
                  const {
                    name: RW,
                    iH: MW,
                    haveIngredients: wW
                  } = WW, CW = GR(WW);
                  return (0, eW.jsx)(LR, {
                    recipeId: CW,
                    itemName: RW,
                    onClick: () => {
                      bR({
                        name: RW,
                        iH: MW
                      })
                    },
                    isSelected: GR(GW) === CW,
                    haveIngredients: wW,
                    craftable: wW && !hW.has(RW) && !(GR(GW) === CW && qR),
                    setHovered: tR,
                    padActions: zM(WW),
                    marked: pW.has(RW),
                    lock: hW.get(RW),
                    itemInfo: sW
                  }, CW)
                }))
              }), (0, eW.jsx)(qM, {
                selectedIdx: ZW,
                hidden: fW && FW.steppingSlots
              })]
            }), (0, eW.jsx)(DR, {
              show: zR,
              recipeItem: GW,
              detail: DW,
              onCraft: AW,
              setHovered: tR,
              craftButtonRef: lW,
              onPadBack: AR,
              showPadShortcut: fW,
              refusedCount: QW,
              lock: hW.get(GW.name),
              itemInfo: sW
            })]
          })]
        })]
      })
    }
    var MM = MW(34920),
      wM = MW(2410),
      CM = MW(27),
      zw = MW(1696),
      AM = MW(7568);
    class bw {
      constructor(WW, RW, MW) {
        this.commit = WW, this.delayMs = RW, this.defers = MW, this.pending = null, this.timer = void 0, this.mM = !1, this.flush = () => {
          clearTimeout(this.timer);
          const WW = this.pending;
          null !== WW && (this.pending = null, this.commit(WW))
        }
      }
      type(WW) {
        this.pending = WW, clearTimeout(this.timer), this.mM || this.defers() ? this.mM || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(WW) {
        var RW;
        return null !== (RW = this.pending) && void 0 !== RW ? RW : WW
      }
      isHeld() {
        return this.mM
      }
      setHeld(WW) {
        this.mM = WW, WW || this.flush()
      }
    }

    function yw(WW) {
      return null === WW ? "creativeInventory:all" : `creativeInventory:${WW}`
    }

    function NM(WW) {
      let {
        category: RW
      } = WW;
      return null === RW ? (0, eW.jsx)(YW.e, {
        name: "layer-group"
      }) : (0, eW.jsx)(MR.c, {
        itemName: MM.creativeItemCategoryIcons[RW],
        amount: 0
      })
    }

    function eM(WW) {
      let {
        labelKey: RW,
        isSelected: MW,
        onSelect: wW,
        setHovered: CW,
        children: zR
      } = WW;
      return (0, eW.jsx)("div", {
        className: YR()("CreativeCategoryTab", {
          Selected: MW
        }),
        onClick: wW,
        onPointerEnter: WW => {
          (0, AR.t)(WW) || CW(!0, {
            name: {
              translationKey: RW
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          CW(!1)
        },
        children: zR
      })
    }

    function BM(WW) {
      let {
        categories: RW,
        selectedCategory: MW,
        onSelect: wW
      } = WW;
      const {
        t: zR
      } = (0, RR.C)(), [AW, bR] = (0, CW.useState)(!1), yR = (0, CW.useRef)(null), NW = (0, CW.useCallback)((() => {
        bR(!1)
      }), []);
      return (0, zw.d)(yR, NW), (0, eW.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: yR,
        children: [(0, eW.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            bR(!AW)
          },
          children: [(0, eW.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, eW.jsx)(NM, {
              category: MW
            })
          }), (0, eW.jsx)("span", {
            children: zR(yw(MW))
          }), (0, eW.jsx)(YW.e, {
            name: AW ? "caret-up" : "caret-down"
          })]
        }), AW && (0, eW.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: RW.map((WW => (0, eW.jsxs)("div", {
            className: YR()("CreativeCategoryDropdownOption", {
              Selected: MW === WW
            }),
            onClick: () => {
              wW(WW), bR(!1)
            },
            children: [(0, eW.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, eW.jsx)(NM, {
                category: WW
              })
            }), (0, eW.jsx)("span", {
              children: zR(yw(WW))
            })]
          }, null !== WW && void 0 !== WW ? WW : "all")))
        })]
      })
    }
    const tw = (0, CW.memo)((function(WW) {
      let {
        creativeScrollDiv: RW,
        playerInvenNumSlots: MW,
        getSetHoveringForIdx: wW,
        getPointerDownForIdx: zR,
        getPointerUpForIdx: AW,
        creativeSearchVal: bR,
        setCreativeSearchVal: NW,
        creativeCategory: BW,
        setCreativeCategory: tR,
        show: TW
      } = WW;
      const {
        t: gR
      } = (0, RR.C)(), iR = (0, cR.h)("creativeVisibility"), {
        userContext: JW
      } = (0, FW.c)(), PW = (0, yR.h)("canUseDevCreativeItems"), IW = JW.playerHasRank("developer") || !!PW, oW = (0, CW.useMemo)((() => gw("", iR, IW)), [iR, IW]), lW = (0, CW.useMemo)((() => {
        const WW = (0, MM.creativeItemIds)(),
          RW = new Set(oW.map((RW => (0, MM.creativeCategoryOf)(WW[RW]))));
        return MM.creativeItemCategories.filter((WW => RW.has(WW)))
      }), [oW]), fW = null !== BW && lW.includes(BW) ? BW : null, rR = (0, CW.useMemo)((() => "" === bR ? oW : gw(bR, iR, IW)), [oW, bR, iR, IW]), XW = (0, CW.useMemo)((() => {
        const WW = (0, MM.creativeItemIds)();
        return null !== fW ? rR.filter((RW => (0, MM.creativeCategoryOf)(WW[RW]) === fW)) : "" === bR ? rR.filter((RW => !(0, MM.showOnlyInCreativeCategory)(WW[RW]))) : rR
      }), [rR, fW, bR]), jR = wW();

      function kR(WW) {
        tR(WW), RW.current.scrollTop = 0
      }
      const aR = [null, ...lW],
        {
          isTouchScreen: sW
        } = (0, CM.i)(["isTouchScreen"]),
        dW = !sW,
        pW = (0, CW.useRef)(null),
        [hW, UW] = (0, CW.useState)(0);
      (0, CW.useEffect)((() => {
        const WW = pW.current;
        if (!WW) return;
        const RW = new ResizeObserver((WW => {
          UW(WW[0].contentRect.height)
        }));
        return RW.observe(WW), () => {
          RW.disconnect()
        }
      }), [dW]);
      const EW = (0, CW.useRef)(null),
        VW = (0, CW.useCallback)((function WW() {
          "up" === EW.current ? RW.current.scrollTop -= 10 : "down" === EW.current && (RW.current.scrollTop += 10), EW.current && requestAnimationFrame(WW)
        }), [RW]),
        mR = (0, CW.useCallback)((function(WW) {
          EW.current || (EW.current = WW, VW())
        }), [VW]);

      function xR() {
        EW.current = null
      }
      const vR = (0, CW.useRef)({
        creativeSearchVal: bR,
        setCreativeSearchVal: NW
      });
      vR.current = {
        creativeSearchVal: bR,
        setCreativeSearchVal: NW
      };
      const [KW] = (0, CW.useState)((() => new bw((WW => {
        vR.current.setCreativeSearchVal(WW)
      }), 250, WR.d))), uW = WW => {
        var MW;
        null === (MW = RW.current) || void 0 === MW || MW.classList.toggle("CreativeItemSlotsStale", WW)
      };
      (0, QW.f)(AM.c, (WW => {
        KW.setHeld(WW), WW || uW(!1)
      })), (0, CW.useEffect)((() => KW.flush), [KW]);
      const OW = (0, eW.jsx)(aM.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: bR,
          maxLength: 1e4,
          onValueChange: (WW, RW) => {
            "" === KW.getTyped(vR.current.creativeSearchVal) && "" !== WW && tR(null), KW.type(WW), uW(KW.isHeld())
          },
          onEnter: KW.flush,
          blurOnEnter: !0
        }),
        nW = (0, eW.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [sW && (0, eW.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, eW.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                mR("up")
              },
              onPointerLeave: xR,
              onPointerUp: xR,
              children: (0, eW.jsx)(YW.e, {
                name: "arrow-up"
              })
            }), (0, eW.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                mR("down")
              },
              onPointerLeave: xR,
              onPointerUp: xR,
              children: (0, eW.jsx)(YW.e, {
                name: "arrow-up"
              })
            })]
          }), (0, eW.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: RW,
            children: [0 === XW.length && "" !== bR && (0, eW.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: gR("general:noResults")
            }), (0, eW.jsx)(kM.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [bR, fW],
              observerRoot: "CreativeItemSlots",
              observing: TW,
              children: XW.map((WW => {
                const RW = MW + WW;
                return (0, eW.jsx)(fR.e, {
                  idx: RW,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: wW(RW),
                  pointerDown: zR(RW),
                  pointerUp: AW(RW)
                }, RW)
              }))
            })]
          })]
        });
      return (0, eW.jsxs)("div", {
        className: YR()("CreativeItemSlotsWrapper", dW ? "WithRail" : "WithDropdown"),
        children: [dW && (0, eW.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: pW,
          style: {
            "--rail-height": hW > 0 ? `${hW}px` : void 0,
            "--tab-rows": Math.ceil(aR.length / 2)
          },
          children: aR.map((WW => (0, eW.jsx)(eM, {
            labelKey: yw(WW),
            isSelected: fW === WW,
            onSelect: () => {
              kR(WW)
            },
            setHovered: jR,
            children: (0, eW.jsx)(NM, {
              category: WW
            })
          }, null !== WW && void 0 !== WW ? WW : "all")))
        }), (0, eW.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, eW.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [OW, !dW && (0, eW.jsx)(BM, {
              categories: aR,
              selectedCategory: fW,
              onSelect: kR
            })]
          }), nW]
        })]
      })
    }));

    function TM(WW) {
      var RW;
      return null !== (RW = (0, wM.g)(WW)) && void 0 !== RW ? RW : ""
    }

    function gw(WW, RW, MW) {
      let {
        publicLobby: wW,
        shownInGame: CW
      } = RW;
      const zR = WW.toLowerCase(),
        AW = (0, MM.creativeItemIds)(),
        bR = WW => {
          var RW;
          const zR = AW[WW];
          return !(0, MM.itemIsDisabled)(zR, wW, null === (RW = CW[TM(zR)]) || void 0 === RW || RW, MW)
        };
      if ("" === zR) return AW.map(((WW, RW) => RW)).filter((WW => !(0, MM.showOnlyInCreativeSearch)(AW[WW]))).filter(bR);
      const yR = [];
      for (let NW = 0; NW < AW.length; NW++) TM(AW[NW]).toLowerCase().includes(zR) && yR.push(NW);
      yR.sort(((WW, RW) => {
        const MW = TM(AW[WW]).toLowerCase(),
          wW = TM(AW[RW]).toLowerCase();
        return MW.indexOf(zR) - wW.indexOf(zR)
      }));
      for (const [NW, eW] of(0, MM.creativeAltNames)())
        for (const WW of eW)
          if (WW.toLowerCase().includes(zR)) {
            const WW = AW.indexOf(NW);
            yR.includes(WW) || yR.push(WW)
          } return yR.filter(bR)
    }
    var iw = MW(35012),
      YM = MW(564);

    function JM(WW) {
      const RW = WW / 2,
        MW = [];
      for (let wW = 0; wW < RW / 6; wW++)
        for (let WW = 0; WW < 12; WW++) {
          const CW = WW < 6 ? 0 : RW;
          MW.push(CW + 6 * wW + WW % 6)
        }
      return MW
    }

    function PM(WW) {
      let {
        numSlots: RW,
        renderSlot: MW
      } = WW;
      const {
        t: wW
      } = (0, RR.C)(), zR = (0, CW.useRef)(null);
      var AW;
      return AW = zR, (0, CW.useLayoutEffect)((() => {
        var WW;
        const RW = null === (WW = AW.current) || void 0 === WW ? void 0 : WW.closest(".InvenBody");
        if (!RW) return;
        const MW = () => {
          RW.style.zoom = "";
          const WW = parseFloat(getComputedStyle(document.documentElement).fontSize),
            MW = window.innerWidth - 2 * WW,
            wW = RW.getBoundingClientRect().width;
          wW > MW && (RW.style.zoom = "" + MW / wW)
        };
        return MW(), window.addEventListener("resize", MW), () => {
          window.removeEventListener("resize", MW), RW.style.zoom = ""
        }
      }), [AW]), (0, eW.jsxs)("div", {
        ref: zR,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, eW.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: wW("doubleChest:title")
        }), (0, eW.jsx)("div", {
          className: "GridItemSlots",
          children: JM(RW).map((WW => MW(WW)))
        })]
      })
    }

    function IM(WW) {
      let {
        bV: RW,
        initialPasskey: MW
      } = WW;
      const {
        t: wW
      } = (0, RR.C)(), [zR, AW] = (0, CW.useState)(MW), [bR, yR] = (0, CW.useState)(MW);
      (0, CW.useEffect)((() => {
        AW(MW), yR(MW)
      }), [...RW]);
      return (0, eW.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, eW.jsx)("div", {
          className: "SmallTextBold",
          children: wW("ironChest:currentPasskey", {
            currentPasskey: zR.join("")
          })
        }), (0, eW.jsx)(IR, {
          className: "IronChestPasskeyEditor",
          Wy: bR,
          onPasskeyUpdated: yR,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            NW.gameBridge.send("changeIronChestPasskey", {
              pos: [...RW],
              Wy: [...bR]
            }), AW([...bR])
          }
        })]
      })
    }

    function oM(WW) {
      let {
        variation: RW,
        canCraft: MW,
        show: wW,
        creativeMounted: CW,
        specialItemRef: zR,
        draggedInfo: AW,
        getSetHovering: bR,
        getPointerDownForIdx: yR,
        getPointerUpForIdx: NW,
        enchantingTablePosition: BW,
        enchantingTableBlockName: tR,
        selectedCraftable: TW,
        dispatchSelectedCraftable: gR,
        creativeScrollDiv: iR,
        creativeSearchVal: YW,
        setCreativeSearchVal: JW,
        creativeCategory: PW,
        setCreativeCategory: IW,
        onCraft: oW
      } = WW;
      const {
        userContext: lW
      } = (0, FW.c)(), {
        t: fW
      } = (0, RR.C)(), QW = (0, cR.f)("inventory", (WW => WW.chest)), rR = (0, cR.f)("inventory", (WW => WW.player.length)), XW = (0, cR.f)("inventory", (WW => WW.creative));
      if (0 === rR) return null;
      let jR, kR;
      const aR = WW => {
          const RW = rR + WW;
          return (0, eW.jsx)(fR.e, {
            idx: RW,
            draggedInfo: AW,
            specialItemInfo: zR.current,
            setHovered: bR(RW),
            pointerDown: yR(RW),
            pointerUp: NW(RW)
          }, RW)
        },
        sW = QW ? (0, iw.d)(QW.type) : null;
      if (sW) jR = YR()("InvenLeftSideChestCustom", sW.className), kR = (0, eW.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: sW.render({
          bV: QW.pos,
          renderSlot: aR
        })
      });
      else if (QW) {
        const WW = QW.pos,
          RW = "Iron" === QW.type || "Moonstone" === QW.type ? QW.type : "Standard";
        let MW = !1,
          wW = null;
        "Iron" === RW && (MW = QW.ironChest.ownerDbId === lW.whamm, wW = QW.ironChest.Wy), jR = `InvenLeftSideChest${RW}`;
        const CW = QW.numSlots > YM.o;
        kR = (0, eW.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [MW && (0, eW.jsx)(IM, {
            bV: WW,
            initialPasskey: wW
          }), CW && (0, eW.jsx)(PM, {
            numSlots: QW.numSlots,
            renderSlot: aR
          }), !CW && (0, eW.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, eW.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: fW("Moonstone" === RW ? "item:moonstoneChest" : "Iron" === RW ? "item:ironChest" : "item:chest")
            }), (0, eW.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(QW.numSlots).fill(0).map(((WW, RW) => aR(RW)))
            })]
          })]
        })
      } else if (!XW || RW && MW)
        if (MW && "Enchanting Table" === RW) jR = `InvenLeftSide${(null!==tR&&void 0!==tR?tR:"").replace(/ /gi,"")}`, kR = (0, eW.jsx)(QR, {
          specialItemInfo: zR.current,
          setHovered: bR,
          pointerDown: yR(yM.e),
          pointerUp: NW(yM.e),
          enchantingTablePosition: BW,
          enchantingTableBlockName: tR
        });
        else if (MW && "Salvaging Table" === RW) jR = "InvenLeftSideSalvagingTable", kR = (0, eW.jsx)(cM, {
        specialItemInfo: zR.current,
        setSpecialItemInfo: WW => {
          zR.current = WW
        },
        setHovered: bR,
        pointerDown: yR(yM.e),
        pointerUp: NW(yM.e)
      });
      else {
        if (!MW) return null;
        jR = `InvenLeftSide${(null!==RW&&void 0!==RW?RW:"HandCrafting").replace(/ /gi,"")}`, kR = (0, eW.jsx)(RM, {
          show: wW,
          onCraft: oW,
          craftingStation: RW,
          selectedCraftable: TW,
          dispatchSelectedCraftable: gR,
          setHovered: bR()
        })
      } else jR = "InvenLeftSideCreative", kR = CW ? (0, eW.jsx)(tw, {
        creativeScrollDiv: iR,
        playerInvenNumSlots: rR,
        getSetHoveringForIdx: bR,
        getPointerDownForIdx: yR,
        getPointerUpForIdx: NW,
        creativeSearchVal: YW,
        setCreativeSearchVal: JW,
        creativeCategory: PW,
        setCreativeCategory: IW,
        show: wW
      }) : null;
      const dW = !!QW || MW && !!RW;
      return (0, eW.jsx)("div", {
        className: `InvenLeftSide ${jR}`,
        "data-pad-inventory-start": dW ? "" : void 0,
        children: kR
      })
    }
    var lM = MW(548);
    const FM = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function fM(WW) {
      let {
        draggedInfo: RW,
        specialItemInfo: MW,
        craftFlyAnims: wW,
        getSetHovering: CW,
        getPointerDownForIdx: zR,
        getPointerUpForIdx: AW,
        variation: bR,
        canCraft: yR,
        isNewSlot: NW
      } = WW;
      const BW = (0, cR.f)("inventory", (WW => WW.player.length));
      return 0 === BW ? null : (0, eW.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, eW.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(lM.c.length).fill(0).map(((WW, tR) => {
            const TW = BW - lM.c.length + tR;
            return (0, eW.jsx)(fR.e, {
              idx: TW,
              draggedInfo: RW,
              specialItemInfo: MW,
              craftFlyHoldbackInfo: (0, bM.l)(wW, TW),
              setHovered: CW(TW),
              pointerDown: zR(TW),
              pointerUp: AW(TW),
              defaultIconB64: vR.d.getTexture(FM[lM.c[tR]], KW.j.ITEM).url,
              variation: yR ? bR : void 0,
              showNewDot: NW(TW)
            }, TW)
          }))
        }), (0, eW.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(BW - 10 - lM.c.length).fill(0).map(((WW, tR) => {
            const TW = BW - lM.c.length - tR - 1;
            return (0, eW.jsx)(fR.e, {
              idx: TW,
              draggedInfo: RW,
              specialItemInfo: MW,
              craftFlyHoldbackInfo: (0, bM.l)(wW, TW),
              setHovered: CW(TW),
              pointerDown: zR(TW),
              pointerUp: AW(TW),
              variation: yR ? bR : void 0,
              showNewDot: NW(TW)
            }, TW)
          }))
        })]
      })
    }
    var QM = MW(35015),
      rw = MW(35017);

    function cwW(WW) {
      const {
        e: RW,
        idx: MW
      } = WW, wW = (0, AR.l)(WW.readInventory(), MW), CW = (0, AR.q)(RW);
      MW === yM.c ? function(WW, RW) {
        const {
          draggedInfoRef: MW,
          removeItem: wW,
          removeDraggedInfoRef: CW,
          close: zR
        } = WW;
        if (MW.current) {
          const WW = RW && MW.current.amount || 1;
          wW(MW.current.idx, WW, !0) && (MW.current.amount -= WW, MW.current.amount <= 0 && CW())
        } else RW && zR()
      }(WW, CW) : MW === yM.e ? function(WW, RW) {
        const {
          e: MW,
          draggedInfoRef: wW,
          specialItemRef: CW,
          moveAmtIntoSlot: zR,
          removeDraggedInfoRef: AW
        } = WW;
        if ((0, AR.B)(MW) && CW.current) CW.current = null;
        else if (wW.current && CW.current && (wW.current.idx === CW.current.idx || (0, rw.c)(wW.current, CW.current)) && wW.current.amount > 0 && CW.current.amount > 0 && CW.current.amount < JR.c.maxItemStackSize)
          if (wW.current.idx === CW.current.idx) {
            if (RW) {
              const WW = Math.min(wW.current.amount, JR.c.maxItemStackSize - CW.current.amount);
              CW.current.amount += WW, wW.current.amount -= WW
            } else wW.current.amount--, CW.current.amount++;
            wW.current.amount <= 0 && AW()
          } else if (RW) {
          const WW = Math.min(wW.current.amount, JR.c.maxItemStackSize - CW.current.amount);
          zR(CW.current.idx, WW) && (CW.current.amount += WW)
        } else {
          zR(CW.current.idx, 1) && CW.current.amount++
        } else if (!wW.current || CW.current || RW) {
          const WW = wW.current;
          wW.current = CW.current, CW.current = WW
        } else wW.current.amount--, CW.current = {
          idx: wW.current.idx,
          name: wW.current.name,
          attributes: wW.current.attributes,
          amount: 1
        }
      }(WW, CW) : (0, AR.B)(RW) ? function(WW, RW) {
        var MW, wW;
        const {
          idx: CW,
          draggedInfoRef: zR,
          specialItemRef: AW,
          canCraft: bR,
          variation: yR,
          swapSlots: NW,
          moveIntoSlots: eW
        } = WW;
        if (!RW) return;
        let BW = RW.amount;
        CW === (null === (MW = zR.current) || void 0 === MW ? void 0 : MW.idx) && (BW = zR.current.amount <= 0 ? 0 : RW.amount - zR.current.amount);
        CW === (null === (wW = AW.current) || void 0 === wW ? void 0 : wW.idx) && (BW = AW.current.amount <= 0 ? 0 : RW.amount - AW.current.amount);
        if (0 === BW) return;
        const tR = WW.readInventory(),
          TW = tR.player.length,
          gR = tR.chest,
          iR = TW - lM.c.length,
          YW = () => {
            if (!(0, WR.d)()) return void eW(10, iR, CW, BW);
            const WW = WW => {
              const MW = (0, AR.l)(tR, WW);
              return MW ? {
                amount: MW.amount,
                stacksWithMoved: (0, rw.c)(MW, RW)
              } : null
            };
            for (const RW of ((WW, RW, MW, wW, CW) => {
                const zR = [];
                let AW = wW;
                if (null !== wW) {
                  let bR = 0;
                  for (let wW = RW; wW < MW; wW++) {
                    const RW = WW(wW);
                    null !== RW && void 0 !== RW && RW.stacksWithMoved && null !== RW.amount && RW.amount > 0 && (bR += Math.max(0, CW - RW.amount))
                  }
                  const yR = Math.min(wW, bR);
                  if (yR > 0 && (zR.push({
                      start: RW,
                      end: MW,
                      amount: yR
                    }), AW = wW - yR), AW <= 0) return zR
                }
                for (let bR = MW - 1; bR >= RW; bR--)
                  if (null === WW(bR)) {
                    zR.push({
                      start: bR,
                      end: bR + 1,
                      amount: AW
                    });
                    break
                  } return zR
              })(WW, 10, iR, BW, JR.c.maxItemStackSize)) eW(RW.start, RW.end, CW, RW.amount)
          };
        if (!bR || "Enchanting Table" !== yR && "Salvaging Table" !== yR) {
          const MW = (0, rR.wb)(RW.name),
            wW = MW ? (0, rR.vb)(MW) : null;
          if (!lM.c.includes(MW) || CW !== wW && (0, AR.m)(tR, WW.itemInfo, wW, CW))
            if (gR)
              if (CW < TW) {
                var JW, PW;
                const [WW, RW] = null !== (JW = null === (PW = (0, iw.d)(gR.type)) || void 0 === PW ? void 0 : PW.quickMoveRange) && void 0 !== JW ? JW : [0, gR.numSlots];
                eW(TW + WW, TW + RW, CW, BW)
              } else eW(0, TW - lM.c.length, CW, BW);
          else tR.creative ? CW < 10 ? YW() : CW < TW ? eW(0, 10, CW, BW) : eW(0, TW - lM.c.length, CW, null !== RW.amount ? JR.c.maxItemStackSize : null) : CW < 10 ? YW() : eW(0, 10, CW, BW);
          else CW < TW - lM.c.length || CW >= TW ? NW(wW, CW) : (eW(0, TW - lM.c.length, wW, BW), CR.b.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else AW.current = {
          idx: CW,
          name: RW.name,
          attributes: RW.attributes,
          amount: null !== RW.amount ? BW : 0
        }
      }(WW, wW) : WW.draggedInfoRef.current ? function(WW, RW, MW, wW) {
        const {
          draggedInfoRef: CW,
          specialItemRef: zR,
          moveAmtIntoSlot: AW,
          swapSlots: bR,
          removeItem: yR,
          removeDraggedInfoRef: NW
        } = WW, eW = WW.readInventory(), BW = CW.current.idx;
        if (MW && (RW === BW || (0, rw.c)(CW.current, MW)) && CW.current.amount > 0 && (0, AR.d)(MW) > 0 && (MW.amount < JR.c.maxItemStackSize || RW === BW)) wW ? MW.amount + CW.current.amount <= JR.c.maxItemStackSize || RW === BW ? AW(RW, CW.current.amount) : AW(RW, JR.c.maxItemStackSize - MW.amount) : AW(RW, 1);
        else if (CW.current.amount > 0 && !MW) AW(RW, wW ? CW.current.amount : 1);
        else if (wW || MW || 0 === CW.current.amount)
          if (eW.creative && !eW.chest && RW >= eW.player.length) {
            const WW = 0 === CW.current.amount ? 1 : CW.current.amount;
            yR(CW.current.idx, WW, !1) && NW()
          } else {
            var tR;
            const MW = (null === (tR = zR.current) || void 0 === tR ? void 0 : tR.idx) === RW;
            if (bR(RW, CW.current.idx)) {
              const wW = WW.readInventory(),
                AW = (0, AR.l)(wW, BW),
                bR = !wW.chest && wW.creative && CW.current.idx >= wW.player.length;
              if (AW && CW.current.idx !== RW && !bR) {
                let WW = (0, AR.d)(AW);
                MW && (WW -= zR.current.amount), CW.current = MW && 0 === WW ? null : {
                  idx: CW.current.idx,
                  name: AW.name,
                  attributes: AW.attributes,
                  amount: WW
                }
              } else NW()
            }
          }
        else AW(RW, 1)
      }(WW, MW, wW, CW) : function(WW, RW, MW, wW) {
        var CW;
        const {
          draggedInfoRef: zR,
          specialItemRef: AW
        } = WW;
        if (!MW) return;
        let bR = (0, AR.d)(MW);
        const yR = (null === (CW = AW.current) || void 0 === CW ? void 0 : CW.idx) === RW;
        yR && (bR -= AW.current.amount);
        wW || (bR = Math.ceil(bR / 2));
        zR.current = yR && 0 === bR ? null : {
          idx: RW,
          name: MW.name,
          attributes: MW.attributes,
          amount: bR
        }
      }(WW, MW, wW, CW)
    }

    function XM(WW, RW) {
      return !!RW && RW.name === WW.name
    }

    function jw() {
      return NW.gameBridge.latest("inventory")
    }

    function kw(WW, RW, MW) {
      return NW.gameBridge.send("removeInventoryItem", {
        slot: WW,
        amount: RW,
        drop: MW
      })
    }

    function aw(WW) {
      return (0, AR.k)(WW, NW.gameBridge.latest("itemInfo"), NW.gameBridge.latest("stationItems").enchantable)
    }

    function sM(WW) {
      let {
        show: RW,
        close: MW,
        canCraft: wW,
        variation: zR,
        inventoryItemsMoveable: AW,
        setCraftFlyAnims: bR
      } = WW;
      (0, cR.h)("itemInfo");
      const [yR, eW] = (0, CW.useState)(null), [BW, tR] = (0, CW.useState)(null), [TW, gR] = (0, CW.useState)(!1), iR = (0, CW.useRef)(null), YW = (0, CW.useRef)(null), JW = (0, CW.useRef)(null), PW = (0, CW.useRef)(null), [IW, oW] = (0, CW.useReducer)((WW => WW + 1), 0), lW = (0, CW.useCallback)((() => {
        RW && oW()
      }), [RW, oW]), FW = (0, CW.useCallback)((() => {
        YW.current = null, hW.current = null, lW()
      }), [lW]), fW = (0, CW.useCallback)(((WW, RW) => {
        bR((MW => MW.map((MW => "ingredient" === MW.kind ? MW : MW.jK === WW ? {
          ...MW,
          jK: RW,
          to: (0, AR.g)(RW)
        } : MW.jK === RW ? {
          ...MW,
          jK: WW,
          to: (0, AR.g)(WW)
        } : MW))))
      }), [bR]), QW = (0, CW.useCallback)(((WW, RW) => {
        const MW = VW.current;
        if (MW.x = WW, MW.y = RW, iR.current) !mR.current.isTouch || mR.current.itemBeingDragged && !hW.current ? (iR.current.style.transform = `translate(${MW.x}px, ${MW.y}px)`, gR(mR.current.isTouch && !hW.current)) : (iR.current.style.transform = "translate(0.5rem, 0.5rem)", gR(!0));
        else if (PW.current) {
          const MW = PW.current;
          let wW = WW + 10,
            CW = RW + 10;
          const zR = MW.offsetWidth,
            AW = MW.offsetHeight;
          wW + zR > window.innerWidth && (wW = WW - zR - 10), CW + AW > window.innerHeight && (CW = RW - AW - 10), wW < 0 && (wW = 0), CW < 0 && (CW = 0), PW.current.style.transform = `translate(${wW}px, ${CW}px)`
        }
      }), []), XW = (0, CW.useCallback)((WW => (RW, MW, wW) => {
        if (eW(RW && void 0 !== WW ? WW : null), RW) {
          if (void 0 === WW && !MW) return void(0, QM.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== WW) {
            var CW;
            const RW = jw();
            let MW;
            if (MW = WW === yM.e ? JW.current ? (0, AR.l)(RW, JW.current.idx) : null : (0, AR.l)(RW, WW), !MW) return void tR(null);
            if ((null === (CW = JW.current) || void 0 === CW ? void 0 : CW.idx) === WW) {
              if (0 === (0, AR.d)(MW) - JW.current.amount) return void tR(null)
            }
            tR(aw(MW))
          } else tR({
            name: MW.name,
            desc: MW.desc,
            fontStyle: "normal"
          })
        } else tR(null);
        wW && setTimeout((() => {
          QW(wW.pageX, wW.pageY)
        }), 0)
      }), [QW]), jR = (0, CW.useCallback)(((WW, RW) => {
        const MW = NW.gameBridge.send("moveInventoryItem", {
          from: YW.current.idx,
          to: WW,
          amount: RW
        });
        return MW ? (YW.current.amount -= RW, YW.current.amount <= 0 && FW()) : console.error("moveInventoryItem failed"), MW
      }), [FW]), kR = (0, CW.useCallback)(((WW, RW) => {
        const MW = JW.current,
          wW = null === MW || void 0 === MW ? void 0 : MW.idx;
        MW && (MW.idx = function(WW, RW, MW) {
          return WW === RW ? MW : WW === MW ? RW : WW
        }(wW, WW, RW));
        const CW = NW.gameBridge.send("swapInventorySlots", {
          a: WW,
          b: RW
        });
        return CW ? fW(WW, RW) : MW && (MW.idx = wW), CW
      }), [fW]), aR = (0, CW.useCallback)(((WW, RW, MW, wW) => {
        const CW = NW.gameBridge.send("quickMoveInventoryItem", {
          slot: MW,
          start: WW,
          end: RW,
          amount: wW
        });
        null !== CW && fW(MW, CW)
      }), [fW]), sW = (0, CW.useCallback)(((WW, RW) => {
        var CW;
        ((WW, RW, MW) => {
          const wW = WW - (MW - lM.c.length);
          return !(!RW || wW < 0 || wW >= lM.c.length) && (0, rR.wb)(RW) !== lM.c[wW]
        })(RW, null === (CW = YW.current) || void 0 === CW ? void 0 : CW.name, jw().player.length) || (cwW({
          e: WW,
          idx: RW,
          readInventory: jw,
          itemInfo: NW.gameBridge.latest("itemInfo"),
          draggedInfoRef: YW,
          specialItemRef: JW,
          moveAmtIntoSlot: jR,
          swapSlots: kR,
          moveIntoSlots: aR,
          removeItem: kw,
          removeDraggedInfoRef: FW,
          close: MW,
          canCraft: wW,
          variation: zR
        }), lW())
      }), [wW, MW, jR, aR, FW, kR, zR, lW]), dW = (0, CW.useRef)(0), pW = (0, CW.useRef)(null), hW = (0, CW.useRef)(null), UW = (0, CW.useRef)(null), EW = (0, CW.useRef)(new Set), VW = (0, CW.useRef)({
        x: 0,
        y: 0
      }), mR = (0, CW.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), xR = (0, CW.useCallback)((() => (UW.current = null, mR.current.itemBeingDragged = !1, clearTimeout(pW.current), !!hW.current && (hW.current = null, lW(), !0))), [lW]);
      (0, CW.useEffect)((() => {
        xR(), EW.current.clear()
      }), [RW]);
      const vR = WW => void 0 !== WW && (EW.current.has(WW) || null !== UW.current && WW !== UW.current),
        KW = WW => {
          mR.current.isTouch = (0, AR.t)(WW)
        },
        uW = (0, CW.useCallback)((WW => RW => {
          const wW = (0, AR.t)(RW);
          if (wW || QW(RW.pageX, RW.pageY), AW)
            if (vR(RW.pointerId)) void 0 !== RW.pointerId && EW.current.add(RW.pointerId);
            else {
              if (KW(RW), dW.current = Date.now(), wW) {
                mR.current.itemBeingDragged = !0, UW.current = RW.pointerId;
                const MW = (0, AR.l)(jw(), WW);
                if (MW && MW.amount && MW.amount > 0) {
                  const MW = RW.pageX,
                    wW = RW.pageY,
                    CW = VW.current.x,
                    zR = VW.current.y;
                  clearTimeout(pW.current), pW.current = setTimeout((() => {
                    if (YW.current && YW.current.idx === WW && (Math.abs(MW - VW.current.x) < 20 && Math.abs(wW - VW.current.y) < 20 || CW === VW.current.x && zR === VW.current.y) && mR.current.itemBeingDragged) {
                      const WW = jw(),
                        MW = WW.creative && !WW.chest && YW.current.idx >= JR.c.numInvenSlots && null !== (0, AR.l)(WW, YW.current.idx).amount ? JR.c.maxItemStackSize : YW.current.amount;
                      hW.current = {
                        initTouchX: RW.pageX,
                        initTouchY: RW.pageY,
                        maxAmount: MW
                      }, YW.current.amount = Math.ceil(YW.current.amount / 2), iR.current.style.transform = "translate(0.5rem, 0.5rem)", gR(!0), lW()
                    }
                  }), 500)
                }
              }
              sW(RW, WW)
            }
          else WW === yM.c && (0, AR.q)(RW) && MW()
        }), [QW, sW, AW, MW, lW]),
        OW = (0, CW.useCallback)((WW => WW => {
          if (vR(WW.pointerId)) return;
          const RW = (0, AR.t)(WW);
          if (KW(WW), !xR()) {
            if (RW && YW.current && Date.now() - dW.current > 150) {
              const RW = document.elementFromPoint(WW.clientX, WW.clientY);
              if (null !== RW) {
                const MW = RW.getAttribute("data-inven-idx");
                null !== MW ? sW(WW, parseInt(MW)) : RW.classList.contains("InventoryBackgroundScreen") && sW(WW, -1)
              }
            }
            QW(WW.pageX, WW.pageY)
          }
        }), [QW, sW, xR]);
      (0, CW.useEffect)((() => {
        let WW;
        const MW = ["pointerup", "pointercancel"],
          wW = WW => {
            EW.current.has(WW.pointerId) ? setTimeout((() => {
              EW.current.delete(WW.pointerId)
            }), 0) : WW.pointerId === UW.current && setTimeout((() => {
              UW.current === WW.pointerId && xR()
            }), 0)
          };
        if (RW) {
          for (const WW of MW) document.addEventListener(WW, wW, !0);
          if (!mR.current.isTouch) {
            const WW = VW.current;
            QW(WW.x, WW.y)
          }
          WW = WW => {
            WW.preventDefault(), vR(WW.pointerId) || (KW(WW), QW(WW.pageX, WW.pageY), hW.current && WW.pointerId === UW.current && (WW => {
              if (!YW.current) return hW.current = null, void lW();
              const {
                initTouchX: RW,
                maxAmount: MW
              } = hW.current, wW = (WW.pageX - RW) * hW.current.maxAmount / 160, CW = Math.ceil(MW / 2) + Math.ceil(wW);
              YW.current.amount = Math.min(MW, Math.max(1, CW)), lW()
            })(WW))
          }, document.addEventListener("pointermove", WW, !0)
        }
        return () => {
          document.removeEventListener("pointermove", WW, !0);
          for (const WW of MW) document.removeEventListener(WW, wW, !0)
        }
      }));
      const nW = (0, CW.useCallback)((() => {
          if (YW.current) {
            const WW = (0, AR.l)(jw(), YW.current.idx);
            (!XM(YW.current, WW) || WW.amount < YW.current.amount) && FW()
          }
        }), [FW]),
        GW = (0, CW.useCallback)((() => {
          const WW = YW.current;
          if (WW) {
            const RW = (0, AR.l)(jw(), WW.idx);
            XM(WW, RW) && (WW.attributes = RW.attributes)
          }
        }), []);
      return {
        draggedDomRef: iR,
        draggedInfoRef: YW,
        specialItemRef: JW,
        hoverInfoDomRef: PW,
        longHoldSplitInfoRef: hW,
        currHoveredIdx: yR,
        currHoveredDisplayInfo: BW,
        displayDraggedItemName: TW,
        forceRerenderIfVisible: lW,
        removeDraggedInfoRef: FW,
        checkDraggedItemConsistencyWithInven: nW,
        refreshDraggedAttributes: GW,
        swapSlots: kR,
        getPointerDownForIdx: uW,
        getPointerUpForIdx: OW,
        getSetHovering: XW,
        setCurrHoveredDisplayInfo: tR,
        moveFollowerTo: QW
      }
    }
    class dM {
      constructor(WW) {
        this.snapshot = [], this.newSlots = new Set, this.update(WW, !1)
      }
      update(WW, RW) {
        const MW = WW.map((WW => {
          var RW;
          return WW ? {
            name: WW.name,
            amount: null !== (RW = WW.amount) && void 0 !== RW ? RW : 1
          } : null
        }));
        MW.forEach(((WW, MW) => {
          const wW = this.snapshot[MW],
            CW = (null === WW || void 0 === WW ? void 0 : WW.name) !== (null === wW || void 0 === wW ? void 0 : wW.name);
          (!WW || CW || WW.amount < wW.amount) && this.newSlots.delete(MW), RW && WW && (CW || WW.amount > wW.amount) && this.newSlots.add(MW)
        })), this.snapshot = MW
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(WW) {
        return this.newSlots.has(WW)
      }
    }
    const pM = (WW, RW, MW) => ({
      button: RW,
      shiftKey: MW,
      pageX: WW.clientX,
      pageY: WW.clientY,
      clientX: WW.clientX,
      clientY: WW.clientY,
      pointerType: "mouse"
    });

    function hM(WW) {
      const [RW, MW] = (0, CW.useState)(WW);
      return WW && !RW && MW(!0), (0, CW.useEffect)((() => {
        if (RW) return;
        let WW = !0;
        const wW = () => {
            WW && (WW = !1, MW(!0))
          },
          CW = "function" === typeof window.requestIdleCallback,
          zR = CW ? window.requestIdleCallback(wW, {
            timeout: 2e3
          }) : void 0,
          AW = setTimeout(wW, CW ? 2e3 : 1e3);
        return () => {
          WW = !1, clearTimeout(AW), void 0 !== zR && window.cancelIdleCallback(zR)
        }
      }), [RW]), RW
    }
    const UM = (0, CW.memo)((function(WW) {
      var RW;
      let {
        show: MW,
        onOpen: wW,
        onClose: zR,
        variation: bR
      } = WW;
      const BW = (0, CW.useRef)(null),
        tR = (0, CW.useRef)(null),
        TW = function(WW) {
          const [RW, MW] = (0, CW.useState)(!0), [wW, zR] = (0, CW.useState)(!1), AW = (0, CW.useRef)(null), bR = (0, CW.useRef)(null), NW = (0, yR.h)("_shield"), eW = (0, CW.useRef)(null), BW = (0, yR.h)("_health"), tR = (0, CW.useRef)(null);

          function TW(WW) {
            const RW = Date.now() + WW;
            RW < bR.current || (MW(!1), clearTimeout(AW.current), bR.current = RW, AW.current = setTimeout((() => {
              MW(!0)
            }), WW))
          }
          return (0, CW.useEffect)((() => {
            TW(eR);
            const WW = gR.k.subscribe("requestingPlayVideoAd", (() => {
              TW(eR)
            }));
            return () => {
              clearTimeout(AW.current), gR.k.unsubscribe(WW)
            }
          }), []), (0, CW.useEffect)((() => {
            (eW.current > NW || tR.current > BW) && TW(6e4), eW.current = NW, tR.current = BW
          }), [NW, BW]), (0, CW.useEffect)((() => {
            let RW = null;
            return WW ? RW = setTimeout((() => {
              zR(!0)
            }), 250) : zR(!1), () => {
              clearTimeout(RW)
            }
          }), [WW]), RW && wW
        }(MW),
        iR = hM(MW),
        YW = hM(MW),
        [JW, PW] = (0, CW.useState)([]),
        IW = (0, CW.useCallback)((WW => {
          PW((RW => RW.filter((RW => RW.id !== WW))))
        }), []),
        oW = (0, CW.useRef)(null),
        lW = (0, CW.useRef)(0),
        FW = (0, CW.useCallback)((() => {
          oW.current && (lW.current = oW.current.scrollTop), zR()
        }), [zR]),
        fW = (0, yR.h)("inventoryItemsMoveable"),
        XW = (0, yR.h)("canCraft"),
        {
          clientEscMenuOptions: jR
        } = (0, CM.i)(["clientEscMenuOptions"]),
        kR = (0, CW.useRef)(null);
      kR.current || (kR.current = new dM(NW.gameBridge.latest("inventory").player));
      const aR = kR.current,
        {
          draggedDomRef: sW,
          draggedInfoRef: dW,
          specialItemRef: hW,
          hoverInfoDomRef: UW,
          longHoldSplitInfoRef: EW,
          currHoveredIdx: VW,
          currHoveredDisplayInfo: mR,
          displayDraggedItemName: xR,
          forceRerenderIfVisible: vR,
          removeDraggedInfoRef: KW,
          checkDraggedItemConsistencyWithInven: uW,
          refreshDraggedAttributes: OW,
          swapSlots: nW,
          getPointerDownForIdx: GW,
          getPointerUpForIdx: LW,
          getSetHovering: HW,
          setCurrHoveredDisplayInfo: DW,
          moveFollowerTo: qR
        } = sM({
          show: MW,
          close: FW,
          canCraft: XW,
          variation: bR,
          inventoryItemsMoveable: fW,
          setCraftFlyAnims: PW
        });
      (0, CW.useEffect)((() => {
        const WW = !MW && null !== NW.gameBridge.latest("inventory").chest;
        if (WW && NW.gameBridge.send("closeChest", null), MW || (aR.clearMarks(), HW(null)(!1)), gR.k.Sz("inventoryComponentVisible", MW), WW) {
          CR.b.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [MW]), (0, cR.d)("chestToggled", (WW => {
        if (WW ? wW() : MW && FW(), WW) {
          CR.b.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      })), (0, cR.d)("inventory", (WW => {
        let {
          player: RW
        } = WW;
        var wW, CW, zR;
        (aR.update(RW, !MW), hW.current) && (hW.current = (CW = hW.current, zR = null !== (wW = RW[hW.current.idx]) && void 0 !== wW ? wW : null, XM(CW, zR) ? (CW.attributes = zR.attributes, null !== zR.amount && CW.amount > zR.amount && (CW.amount = zR.amount), CW) : null));
        OW(), null !== VW && HW(VW)(!0), vR()
      })), (0, CW.useEffect)((() => (NW.gameBridge.send("setInventoryOpen", MW), () => {
        NW.gameBridge.send("setInventoryOpen", !1)
      })), [MW]);
      const ZW = (WW, RW) => {
        if (WW === yM.e) return void(WW => {
          const RW = hW.current;
          if (!RW || null === (0, AR.l)(NW.gameBridge.latest("inventory"), RW.idx)) return;
          const MW = WW ? Math.max(RW.amount, 1) : 1,
            wW = RW.amount - MW;
          if (!NW.gameBridge.send("removeInventoryItem", {
              slot: RW.idx,
              amount: MW,
              drop: !0
            })) return;
          const CW = hW.current;
          CW && (CW.amount = Math.min(CW.amount, wW), CW.amount <= 0 && (hW.current = null)), vR()
        })(RW);
        const MW = null === WW ? null : (0, AR.l)(NW.gameBridge.latest("inventory"), WW);
        if (null !== MW) {
          var wW, CW, zR;
          const AW = RW && null !== (wW = MW.amount) && void 0 !== wW ? wW : 1;
          NW.gameBridge.send("removeInventoryItem", {
            slot: WW,
            amount: AW,
            drop: !0
          }), WW === (null === (CW = dW.current) || void 0 === CW ? void 0 : CW.idx) && (dW.current.amount -= AW, dW.current.amount <= 0 && KW(), vR()), WW === (null === (zR = hW.current) || void 0 === zR ? void 0 : zR.idx) && (hW.current = null, vR())
        }
      };
      (0, cR.d)("inventoryDropRequested", (WW => {
        MW && VW !== yM.e && ZW(VW, WW)
      }));
      const WR = (WW, RW) => {
        let MW = RW;
        if (RW === yM.e) {
          if (!hW.current) return;
          MW = hW.current.idx
        }
        const wW = nW(WW, MW);
        if (wW && dW.current && (dW.current.idx === MW ? dW.current.idx = WW : dW.current.idx === WW && (dW.current.idx = MW)), wW && RW === yM.e) {
          const WW = (0, AR.l)(NW.gameBridge.latest("inventory"), MW);
          hW.current = WW ? {
            idx: MW,
            name: WW.name,
            attributes: WW.attributes,
            amount: WW.amount
          } : null
        }
        vR()
      };
      (0, cR.d)("numberKeyPressed", (WW => {
        null !== VW && MW && WR(WW - 1, VW)
      })), (0, CW.useEffect)((() => {
        MW || (hW.current = null, KW(), DW(null))
      }), [MW, KW, DW, hW]);
      const RR = hW.current;
      (0, CW.useEffect)((() => {
        VW === yM.e && HW(yM.e)(!0)
      }), [RR, VW, HW]), (0, cR.d)("chestRefreshed", (() => {
        uW(), OW(), vR()
      })), (0, cR.d)("inventorySynced", (() => {
        hW.current = null, KW(), vR()
      }));
      const [MR, NR] = (0, CW.useState)(new Map), BR = null !== (RW = MR.get(bR)) && void 0 !== RW ? RW : null, iM = (WW, RW) => {
        NR((MW => {
          const wW = MW.get(WW);
          return wW && wW.name === RW.name && wW.iH === RW.iH ? MW : new Map(MW).set(WW, RW)
        }))
      };
      (0, QW.f)("craftingRecipesEdited", (() => {
        vR()
      })), (0, QW.f)(vM.b, (WW => {
        let {
          variation: RW,
          itemName: MW
        } = WW;
        iM(RW, {
          name: MW,
          iH: 0
        })
      }));
      const [YR, JR] = (0, CW.useState)(null), [PR, IR] = (0, CW.useState)(null);
      (0, cR.d)("enchantingTableOpened", (WW => {
        let {
          position: RW,
          blockName: MW
        } = WW;
        JR(RW), IR(MW)
      }));
      const [oR, lR] = (0, CW.useState)(""), [FR, QR] = (0, CW.useState)(null);
      (0, CW.useEffect)((() => {
        MW && oW.current && (oW.current.scrollTop = lW.current)
      }), [MW]);
      return (WW => {
        const RW = (0, CW.useRef)(WW);
        RW.current = WW, (0, CW.useEffect)((() => {
          if (!WW.show) return;
          const MW = (WW, MW, wW, CW) => {
              const {
                getPointerDownForIdx: zR,
                getPointerUpForIdx: AW
              } = RW.current;
              zR(WW)(pM(MW, wW, CW)), AW(WW)(pM(MW, wW, CW))
            },
            wW = {
              primary: (WW, RW) => {
                MW(WW, RW, 0, !1)
              },
              secondary: (WW, RW) => {
                MW(WW, RW, 2, !1)
              },
              quickMove: (WW, RW) => {
                MW(WW, RW, 0, !0)
              },
              dropHeld: (WW, MW) => {
                RW.current.getPointerDownForIdx(yM.c)(pM(MW, WW ? 0 : 2, !1))
              },
              dropSlot: (WW, MW) => {
                RW.current.dropFromIdx(WW, MW)
              },
              swapWithHotbar: (WW, MW) => {
                RW.current.swapWithHotbar(WW, MW)
              },
              cancel: () => {
                RW.current.removeDraggedInfoRef()
              },
              isHolding: () => !!RW.current.draggedInfoRef.current,
              hasItemAt: WW => {
                const {
                  draggedInfoRef: MW,
                  specialItemRef: wW
                } = RW.current;
                if (WW === yM.e) return !!wW.current;
                const CW = (0, AR.l)(NW.gameBridge.latest("inventory"), WW);
                return !!CW && (0, fR.h)(WW, (0, AR.d)(CW), [MW.current, wW.current]).shown
              },
              hover: (WW, MW) => {
                const {
                  moveFollowerTo: wW,
                  getSetHovering: CW
                } = RW.current;
                wW(MW.clientX, MW.clientY), CW(null !== WW && void 0 !== WW ? WW : void 0)(null !== WW, void 0, {
                  pageX: MW.clientX,
                  pageY: MW.clientY
                })
              },
              moveTo: WW => {
                RW.current.moveFollowerTo(WW.clientX, WW.clientY)
              },
              close: () => {
                RW.current.close()
              }
            };
          return (0, SW.p)(wW)
        }), [WW.show])
      })({
        show: MW,
        close: FW,
        draggedInfoRef: dW,
        specialItemRef: hW,
        getPointerDownForIdx: GW,
        getPointerUpForIdx: LW,
        getSetHovering: HW,
        moveFollowerTo: qR,
        removeDraggedInfoRef: KW,
        dropFromIdx: ZW,
        swapWithHotbar: WR
      }), (0, CW.useEffect)((() => {
        gR.k.Sz("inventoryDraggedItemUpdated", {
          draggedInfo: dW.current,
          specialItemInfo: hW.current,
          setHovered: HW,
          pointerDown: GW,
          pointerUp: LW,
          variation: XW ? bR : void 0,
          craftFlyAnims: JW
        })
      })), (0, eW.jsxs)(pW.b, {
        show: MW,
        style: {
          touchAction: MW ? "none" : void 0
        },
        children: [dW.current && (0, eW.jsx)(tM, {
          draggedInfo: dW.current,
          toAddRef: sW
        }), dW.current && xR && (0, eW.jsx)(TR, {
          className: "DraggedInvenItemName",
          displayInfo: aw(dW.current),
          domRef: null
        }), !dW.current && mR && (0, eW.jsx)(TR, {
          displayInfo: mR,
          domRef: UW
        }), EW.current && dW.current && (0, eW.jsx)(gM, {
          info: EW.current,
          draggedInfo: dW.current
        }), JW.map((WW => (0, eW.jsx)(bM.e, {
          anim: WW,
          onComplete: IW
        }, WW.id))), (0, eW.jsx)(AW.b, {
          show: MW,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: FW,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: GW(yM.c),
          pointerUp: LW(yM.c),
          doGameplayStartStopOnShow: !0
        }), iR && (0, eW.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, eW.jsx)("div", {
            ref: BW,
            className: "InventoryAdOuter",
            children: (0, eW.jsx)(zM.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: BW
              },
              verticalAlign: "start",
              showing: MW && TW,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, eW.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, eW.jsxs)("div", {
              className: "Inventory",
              children: [(0, eW.jsx)("div", {
                className: "InventoryFiller"
              }), (0, eW.jsx)(wR, {
                show: MW
              }), (0, eW.jsxs)("div", {
                className: "InvenBody",
                children: [(0, eW.jsx)(oM, {
                  variation: bR,
                  canCraft: XW,
                  show: MW,
                  creativeMounted: YW,
                  specialItemRef: hW,
                  draggedInfo: dW.current,
                  getSetHovering: HW,
                  getPointerDownForIdx: GW,
                  getPointerUpForIdx: LW,
                  enchantingTablePosition: YR,
                  enchantingTableBlockName: PR,
                  selectedCraftable: BR,
                  dispatchSelectedCraftable: WW => {
                    iM(bR, WW)
                  },
                  creativeScrollDiv: oW,
                  creativeSearchVal: oR,
                  setCreativeSearchVal: lR,
                  creativeCategory: FR,
                  setCreativeCategory: QR,
                  onCraft: function(WW, RW) {
                    let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (uW(), (WW || MW.length > 0) && PW((RW => {
                        const wW = [...RW],
                          CW = RW.filter((WW => "ingredient" === WW.kind)).length;
                        for (const WW of MW.slice(0, Math.max(0, 24 - CW))) wW.push({
                          id: (0, bM.h)(),
                          ...WW,
                          to: WW.to
                        });
                        return WW && wW.push({
                          id: (0, bM.h)(),
                          ...WW,
                          to: (0, AR.g)(WW.jK)
                        }), wW
                      })), null !== RW) {
                      var wW;
                      const WW = NW.gameBridge.latest("inventory");
                      (0, rR.wb)(null === (wW = (0, AR.l)(WW, RW)) || void 0 === wW ? void 0 : wW.name) ? GW(RW)({
                        button: 0,
                        shiftKey: !0
                      }): nW(RW, WW.selectedSlot)
                    }
                  }
                }), (0, eW.jsx)(fM, {
                  draggedInfo: dW.current,
                  specialItemInfo: hW.current,
                  craftFlyAnims: JW,
                  getSetHovering: HW,
                  getPointerDownForIdx: GW,
                  getPointerUpForIdx: LW,
                  variation: bR,
                  canCraft: XW,
                  isNewSlot: WW => jR.showNewItemIndicator && aR.isNew(WW)
                })]
              })]
            }), (0, eW.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, eW.jsx)("div", {
                ref: tR,
                className: "InventoryAd",
                children: (0, eW.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var EM = MW(1235),
      VM = MW(151);
    const mw = (0, CW.memo)((function(WW) {
      let {
        show: RW,
        onOpen: MW,
        onClose: wW
      } = WW;
      const zR = (0, CW.useRef)(0),
        bR = () => (0, EM.e)() && !(0, EM.o)() && zR.current <= 2;
      RW = bR() && RW;
      const yR = () => {
        zR.current++, wW()
      };
      (0, QW.f)("ctrlCrouchWithoutFullscreen", (() => {
        bR() && MW()
      })), (0, QW.f)("displaymodeFullscreenChange", (WW => {
        RW && WW && yR()
      }));
      const NW = "crazygames" === VM.u;
      return (0, eW.jsx)(AW.b, {
        close: yR,
        escDoesExit: !0,
        show: RW,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, eW.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, eW.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), NW && (0, eW.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, eW.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, eW.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!NW && (0, eW.jsx)(TW.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, EM.t)(), yR()
              },
              children: (0, eW.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, eW.jsx)(TW.E, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                yR()
              },
              children: (0, eW.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var xw = MW(1090),
      vw = MW(2702);
    MW(2704);
    const KM = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(""), [yR, BW] = (0, CW.useState)(""), [tR, TW] = (0, CW.useState)(null), [gR, iR] = (0, CW.useState)(null), YW = (0, cR.h)("hiddenPlayerNames"), JW = {
          kind: "worldCodeLine",
          onSubmit: (WW, RW) => {
            wW(), NW.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: gR,
              ew: WW,
              details: RW
            })
          }
        }, PW = {
          kind: "player",
          shownPlayerName: (0, xw.f)(zR, YW),
          onSubmit: (WW, RW) => {
            wW(), (0, vw.g)({
              playerId: yR,
              playerName: zR,
              chatMsgId: gR,
              policyId: WW,
              details: RW
            })
          }
        };
        return (0, QW.f)("OpenReportMenu", (WW => {
          let {
            playerEId: RW,
            playerName: wW,
            PA: CW,
            serverChatMsgId: zR
          } = WW;
          BW(RW), bR(wW), TW(CW), iR(zR), MW()
        })), (0, eW.jsx)(AW.b, {
          show: RW,
          close: wW,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, eW.jsx)("div", {
            className: "ReportMenu",
            children: RW && (0, eW.jsx)(vw.c, {
              reported: null === yR ? JW : PW,
              chatMessage: tR,
              inGame: !0,
              onCancel: wW
            })
          })
        })
      })),
      uM = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(null), [yR, BW] = (0, CW.useState)(0);
        (0, QW.f)("OpenDiscordReportBox", (WW => {
          NW.gameBridge.send("requestDiscordReportKey", WW), BW(0), MW()
        }));
        return (0, QW.f)("setDiscordReportKey", (WW => {
          bR(WW)
        })), (0, eW.jsx)(AW.b, {
          show: RW,
          close: () => {
            wW(), bR(null), BW(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, eW.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, eW.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, eW.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, eW.jsx)("br", {}), (0, eW.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, eW.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, eW.jsx)("br", {}), "2. Copy the Report Key below", (0, eW.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, eW.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, eW.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, eW.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== zR && void 0 !== zR ? zR : "Loading report key..."
              }), (0, eW.jsx)(TW.h, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(zR).catch((WW => {
                    console.error("Failed to copy report key:", WW)
                  })), BW(Date.now())
                },
                disabled: Date.now() - yR < 1e3 || !zR,
                children: Date.now() - yR < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var OM = MW(1115),
      nM = MW(1180);
    const GM = {
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
      LM = (0, CW.memo)((function(WW) {
        let {
          show: RW,
          onOpen: MW,
          onClose: wW
        } = WW;
        const [zR, bR] = (0, CW.useState)(null), yR = (0, CW.useRef)(0), BW = (0, CW.useRef)(null), {
          t: tR
        } = (0, RR.C)();
        (0, QW.f)("EditCustomLobbyBlock", (WW => {
          let {
            pos: RW
          } = WW;
          bR(RW), null !== RW && MW(), BW.current.scrollTo(0, yR.current)
        }));
        const TW = WW => {
          NW.gameBridge.send("setCustomLobbyBlock", {
            pos: zR,
            blockName: WW
          }), wW()
        };
        return (0, eW.jsx)(AW.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: wW,
          escDoesExit: !0,
          show: RW,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, eW.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: BW,
            onScroll: () => {
              yR.current = BW.current.scrollTop
            },
            children: (0, eW.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(GM).map((WW => {
                let [RW, MW] = WW;
                return (0, eW.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, eW.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: tR(RW)
                  }), (0, eW.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(MW).map((WW => {
                      let [RW, {
                        tooltip: MW,
                        blocks: wW
                      }] = WW;
                      return (0, eW.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, eW.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [tR(RW), (0, eW.jsx)(nM.b, {
                            hoverInfo: tR(MW),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, eW.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: wW.map((WW => (0, eW.jsx)(HM, {
                            blockName: WW,
                            selectBlock: TW
                          }, WW)))
                        })]
                      }, RW)
                    }))
                  })]
                }, RW)
              }))
            })
          })
        })
      })),
      HM = (0, CW.memo)((function(WW) {
        var RW;
        let {
          blockName: MW,
          selectBlock: wW
        } = WW;
        const CW = (0, wM.e)(MW),
          zR = null !== (RW = void 0 === CW ? void 0 : (0, MM.displayNameOf)(CW)) && void 0 !== RW ? RW : MW,
          AW = void 0 === CW ? void 0 : (0, MM.descriptionOf)(CW);
        return (0, eW.jsx)(nM.e, {
          tooltipInner: (0, eW.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, eW.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, eW.jsx)(fW.c, {
                text: zR
              })
            }), AW && (0, eW.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, eW.jsx)(fW.c, {
                text: AW
              })
            })]
          }),
          children: (0, eW.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => wW(MW),
            children: (0, eW.jsx)(MR.c, {
              itemName: MW,
              amount: 1
            })
          })
        }, MW)
      }));
    var DM = MW(2221),
      qw = MW(3350),
      ZM = MW(35025);

    function SM() {
      const WW = (0, cR.h)("itemInfo");
      return (0, CW.useMemo)((() => function(WW) {
        return {
          getDefaultItemStat(RW, MW) {
            var wW;
            const CW = WW[RW];
            return "description" === MW ? null === CW || void 0 === CW ? void 0 : CW.description : null !== (wW = null === CW || void 0 === CW ? void 0 : CW.displayName) && void 0 !== wW ? wW : RW
          }
        }
      }(WW)), [WW])
    }
    const Ww = (0, CW.memo)((function(WW) {
        var RW, MW, wW, zR, bR, yR, NW, BW, tR, TW, gR, iR, JW, PW, IW, oW, lW, FW, fW, rR, cR, XW, jR;
        let {
          togglePointerLock: kR,
          show: aR,
          onOpen: sW,
          onClose: dW
        } = WW;
        const {
          t: pW
        } = (0, RR.C)(), hW = SM(), UW = (0, CW.useRef)(null), EW = (0, CW.useRef)(qw.c.MobHungerLevel.Hungry), VW = (0, CW.useRef)(null), mR = (0, DM.b)(), xR = (0, CW.useRef)(null), vR = (0, CW.useRef)(null), KW = UW.current;
        (0, CW.useEffect)((() => {
          if (!aR) return;
          const WW = ZM.e.openPet(xR.current);
          return vR.current = WW, () => {
            WW.close(), vR.current = null
          }
        }), [aR]), (0, CW.useEffect)((() => {
          aR && KW && vR.current.show(function(WW) {
            var RW;
            let {
              mobType: MW,
              mobSettings: wW
            } = WW;
            return {
              mobType: MW,
              variation: null !== (RW = wW.variation) && void 0 !== RW ? RW : "default",
              shownGroups: {
                collar: !(0, YM.S)(wW.ownerDbId),
                saddle: "Saddled" === wW.metaInfo,
                antlers: "Antlers" === wW.metaInfo
              }
            }
          }(KW))
        }), [aR, KW]), (0, CW.useEffect)((() => {
          const WW = () => {
            var WW;
            const RW = qw.c.getMobHungerLevel(null === (WW = UW.current) || void 0 === WW ? void 0 : WW.mobSettings.petInfo.lastFedAt);
            if (RW !== EW.current && (EW.current = RW, mR()), VW.current) {
              var MW;
              const WW = Date.now(),
                RW = qw.c.getNextStateAt(null === (MW = UW.current) || void 0 === MW ? void 0 : MW.mobSettings.petInfo.lastFedAt);
              let wW = Math.floor((RW - WW) / 1e3),
                CW = "";
              if (wW > 3600) {
                CW += Math.floor(wW / 60 / 60).toString().padStart(2, "0"), CW += ":", wW %= 3600
              }
              const zR = wW % 60;
              CW += Math.floor(wW / 60).toString().padStart(2, "0"), CW += ":", CW += zR.toString().padStart(2, "0"), VW.current.textContent = CW
            }
          };
          WW();
          const RW = setInterval(WW, 250);
          return () => {
            clearInterval(RW)
          }
        }), [KW, mR]), (0, QW.f)("showPetUi", (WW => {
          let {
            mobType: RW,
            mobSettings: MW
          } = WW;
          UW.current = {
            mobType: RW,
            mobSettings: MW
          }, aR || sW()
        }));
        const uW = null === (RW = UW.current) || void 0 === RW ? void 0 : RW.mobSettings.health,
          OW = null === (MW = UW.current) || void 0 === MW ? void 0 : MW.mobSettings.maxHealth,
          nW = qw.c.getFriendshipLevelInfo(null !== (wW = null === (zR = UW.current) || void 0 === zR ? void 0 : zR.mobSettings.petInfo.friendshipPoints) && void 0 !== wW ? wW : 0);
        return (0, eW.jsx)(AW.b, {
          className: "PetUIOuter",
          close: dW,
          escDoesExit: !0,
          show: aR,
          togglePointerLock: kR,
          forcePointerUnlock: aR,
          globallyUniqueKey: "PetUI",
          children: (0, eW.jsx)("div", {
            className: "PetUI",
            children: (0, eW.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, eW.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, eW.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (bR = null === (yR = UW.current) || void 0 === yR ? void 0 : yR.mobSettings.name) && void 0 !== bR ? bR : "Your Pet"
                }), (0, eW.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: xR
                })]
              }), (0, eW.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, YM.S)(null === (NW = UW.current) || void 0 === NW ? void 0 : NW.mobSettings.petInfo.friendshipPoints) && (0, eW.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, eW.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: pW("mobAiPlugin:friendshipTitle")
                  }), (0, eW.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: qw.c.getIconsFromFriendshipPoints(null !== (BW = UW.current.mobSettings.petInfo.friendshipPoints) && void 0 !== BW ? BW : 0).map(((WW, RW) => (0, eW.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: WW,
                        amount: 1
                      })
                    }, RW)))
                  }), (0, eW.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, eW.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, eW.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${nW.totalPointsForNextLevel>0?Math.max(nW.pointsIntoCurrentLevel/nW.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, eW.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: nW.totalPointsForNextLevel > 0 ? ` ${Math.ceil(nW.pointsIntoCurrentLevel)}/${Math.ceil(nW.totalPointsForNextLevel)}` : Math.ceil(nW.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, eW.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, eW.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: pW("mobAiPlugin:hungerTitle")
                  }), (0, eW.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: qw.c.hungerLevelIcons[EW.current].map(((WW, RW) => (0, eW.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: WW,
                        amount: 1
                      })
                    }, RW)))
                  }), (0, eW.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [pW(qw.c.hungerLevelTranslations[EW.current].translationKey), EW.current !== qw.c.MobHungerLevel.Starving && !(0, YM.S)(null === (tR = UW.current) || void 0 === tR ? void 0 : tR.mobSettings.petInfo.lastFedAt) && (0, eW.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [pW("mobAiPlugin:nextFeedIn", {
                        state: pW(qw.c.hungerLevelTranslations[EW.current + 1].translationKey)
                      }), ":", " ", (0, eW.jsx)("span", {
                        ref: VW
                      })]
                    })]
                  })]
                }), (0, eW.jsx)(nM.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, eW.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: pW("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, eW.jsxs)("div", {
                    className: YR()("PetUIQuickStatsItem", {
                      Disabled: (0, YM.S)(uW) || (0, YM.S)(OW)
                    }),
                    children: [(0, eW.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, eW.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, YM.S)(uW) || (0, YM.S)(OW) ? "" : (0, eW.jsxs)(eW.Fragment, {
                        children: [Math.ceil(uW), (0, eW.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(OW)]
                        })]
                      })
                    })]
                  })
                }), (0, eW.jsx)(nM.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, eW.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: pW("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, eW.jsxs)("div", {
                    className: YR()("PetUIQuickStatsItem", {
                      Disabled: (0, YM.S)(null === (TW = UW.current) || void 0 === TW ? void 0 : TW.mobSettings.attackDamage) || UW.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, eW.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, eW.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (gR = UW.current) || void 0 === gR ? void 0 : gR.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, eW.jsx)(nM.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, eW.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: pW("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, eW.jsxs)("div", {
                    className: YR()("PetUIQuickStatsItem", {
                      Disabled: (0, YM.S)(null === (iR = UW.current) || void 0 === iR ? void 0 : iR.mobSettings.secondaryAttackDamage) || UW.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, eW.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, eW.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (JW = UW.current) || void 0 === JW ? void 0 : JW.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, eW.jsx)(nM.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, eW.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: pW("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, eW.jsxs)("div", {
                    className: YR()("PetUIQuickStatsItem", {
                      Disabled: (0, YM.S)(null === (PW = UW.current) || void 0 === PW ? void 0 : PW.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, eW.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, eW.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (IW = null === (oW = UW.current) || void 0 === oW || null === (lW = oW.mobSettings.baseRunningSpeed) || void 0 === lW ? void 0 : lW.toFixed(2)) && void 0 !== IW ? IW : ""
                    })]
                  })
                }), (0, eW.jsx)(nM.e, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, eW.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: pW("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, eW.jsxs)("div", {
                    className: YR()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (FW = UW.current) || void 0 === FW ? void 0 : FW.mobSettings.metaInfo)
                    }),
                    children: [(0, eW.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, eW.jsx)(MR.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, eW.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (fW = UW.current) || void 0 === fW ? void 0 : fW.mobSettings.metaInfo) ? (0, eW.jsx)(YW.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, YM.S)(null === (rR = UW.current) || void 0 === rR ? void 0 : rR.mobSettings.tameInfo) && (0, eW.jsxs)(eW.Fragment, {
                  children: [(0, eW.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, eW.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, eW.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, eW.jsx)(Mw, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: qw.c.feedTextColours[qw.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, eW.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, eW.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: UW.current.mobSettings.petInfo.superlikedFoodKnown ? (0, eW.jsx)(Rw, {
                            food: UW.current.mobSettings.petInfo.superlikedFood
                          }) : (0, eW.jsx)(Mw, {
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
                    }), (0, eW.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, eW.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, eW.jsx)(Mw, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: qw.c.feedTextColours[qw.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, eW.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (cR = UW.current.mobSettings.tameInfo.likedFoods) || void 0 === cR ? void 0 : cR.filter((WW => !UW.current.mobSettings.petInfo.superlikedFoodKnown || WW !== UW.current.mobSettings.petInfo.superlikedFood)).map((WW => (0, eW.jsx)(Rw, {
                          food: WW
                        }, WW)))
                      })]
                    }), (0, eW.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, eW.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, eW.jsx)(Mw, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: qw.c.feedTextColours[qw.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, eW.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (XW = UW.current.mobSettings.tameInfo.neutralFoods) || void 0 === XW ? void 0 : XW.map((WW => (0, eW.jsx)(Rw, {
                          food: WW
                        }, WW)))
                      })]
                    }), (0, eW.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, eW.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, eW.jsx)(Mw, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: qw.c.feedTextColours[qw.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, eW.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (jR = UW.current.mobSettings.tameInfo.dislikedFoods) || void 0 === jR ? void 0 : jR.map((WW => (0, eW.jsx)(Rw, {
                          food: WW
                        }, WW)))
                      })]
                    })]
                  }), UW.current.mobSettings.tameInfo.levelUpBonuses && (0, eW.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: qw.c.MAX_LEVEL + 1
                    }).map(((WW, RW) => {
                      const MW = RW;
                      if (0 === MW) return null;
                      const wW = UW.current.mobSettings.tameInfo.levelUpBonuses[MW],
                        CW = qw.c.getBonusDisplayInfo(hW, UW.current.mobSettings, UW.current.mobType, wW);
                      return (0, eW.jsxs)("div", {
                        className: YR()("PetUIFeedDropContainer", {
                          Selected: MW === qw.c.getFriendshipLevelInfo(UW.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, eW.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: MW
                          }).map(((WW, RW) => (0, eW.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, eW.jsx)(MR.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${MW}-${RW}`)))
                        }), (0, eW.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: CW && (0, eW.jsx)(Mw, {
                            icon: CW.icon,
                            displayName: CW.displayName,
                            description: CW.description
                          })
                        })]
                      }, MW)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Rw = (0, CW.memo)((function(WW) {
        let {
          food: RW,
          includeDescription: MW = !1
        } = WW;
        const wW = SM(),
          CW = wW.getDefaultItemStat(RW, "displayName"),
          zR = wW.getDefaultItemStat(RW, "description");
        return (0, eW.jsx)(Mw, {
          icon: RW,
          displayName: CW,
          description: MW ? zR : null
        })
      })),
      Mw = (0, CW.memo)((function(WW) {
        let {
          icon: RW,
          displayName: MW,
          description: wW,
          tintColor: CW,
          className: zR = "PetUIFoodItem"
        } = WW;
        return (0, eW.jsx)(nM.e, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, eW.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, eW.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, eW.jsx)(fW.c, {
                text: MW
              })
            }), wW && (0, eW.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, eW.jsx)(fW.c, {
                text: wW
              })
            })]
          }),
          children: (0, eW.jsx)("div", {
            className: zR,
            children: (0, eW.jsx)(MR.c, {
              itemName: RW,
              amount: 1,
              tintColor: CW
            })
          })
        })
      }));
    var ww = MW(2826),
      Cw = MW(975),
      zC = MW(1053),
      Aw = MW(1066),
      bC = MW(35047),
      yC = MW(35045),
      Nw = MW(860),
      ew = MW(1173),
      Bw = MW(1166),
      tC = MW(1903);

    function Tw(WW) {
      let {
        peers: RW
      } = WW;
      const [MW, wW] = (0, CW.useState)(null), zR = (0, cR.h)("players");
      return (0, eW.jsx)("div", {
        className: "CodeEditorPresence",
        children: RW.map((WW => {
          var RW, CW;
          const AW = null !== (RW = null === (CW = zR.byId[WW.playerId]) || void 0 === CW ? void 0 : CW.cosmetics) && void 0 !== RW ? RW : {};
          return (0, eW.jsxs)("div", {
            className: YR()("PresenceIcon", {
              Viewer: !WW.isEditor
            }),
            style: {
              backgroundColor: WW.colour
            },
            onMouseEnter: () => {
              wW(WW.playerId)
            },
            onMouseLeave: () => {
              wW(null)
            },
            children: [(0, eW.jsx)(tC.b, {
              cosmetics: AW
            }), MW === WW.playerId && (0, eW.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: WW.colour
              },
              children: WW.playerName
            })]
          }, WW.playerId)
        }))
      })
    }
    var gC = MW(260),
      iC = MW(35036),
      Yw = MW(34770),
      Jw = MW(35056);

    function Pw(WW) {
      const RW = WW.split("/"),
        MW = [];
      for (let wW = 1; wW < RW.length; wW++) MW.push(RW.slice(0, wW).join("/"));
      return MW
    }

    function Iw(WW) {
      return WW.slice(WW.lastIndexOf("/") + 1)
    }
    const ow = (0, CW.memo)((function(WW) {
      var RW;
      let {
        files: MW,
        activePath: wW,
        canEdit: zR,
        directoryLinked: AW,
        pluginNames: bR,
        activePluginName: yR,
        activePluginFile: NW,
        onSelect: BW,
        onSelectPlugin: tR,
        onCreate: gR,
        onRename: iR,
        onRenameFolder: JW,
        onDelete: PW,
        onToggleDirectorySync: IW,
        schematics: oW,
        onManageSchematic: lW
      } = WW;
      const {
        t: FW
      } = (0, RR.C)(), fW = null !== (RW = (0, yC.b)(MW)) && void 0 !== RW ? RW : Aw.k, QW = Object.keys(MW), [rR, cR] = (0, CW.useState)((() => new Set)), XW = function(WW, RW, MW) {
        const wW = {
          folders: new Map,
          files: []
        };
        for (const AW of WW) {
          if (AW === RW) continue;
          let WW = wW;
          for (const RW of Pw(AW)) {
            let MW = WW.folders.get(RW);
            MW || (MW = {
              folders: new Map,
              files: []
            }, WW.folders.set(RW, MW)), WW = MW
          }
          WW.files.push(AW)
        }
        const CW = [];
        WW.includes(RW) && CW.push({
          kind: "file",
          path: RW,
          name: Iw(RW),
          depth: 0
        });
        const zR = (WW, RW) => {
          const wW = [...WW.folders.entries()].sort(((WW, RW) => {
            let [MW] = WW, [wW] = RW;
            return MW.localeCompare(wW)
          }));
          for (const [AW, bR] of wW) {
            const WW = MW.has(AW);
            CW.push({
              kind: "folder",
              path: AW,
              name: Iw(AW),
              depth: RW,
              collapsed: WW
            }), WW || zR(bR, RW + 1)
          }
          WW.files.sort(((WW, RW) => WW.localeCompare(RW)));
          for (const MW of WW.files) CW.push({
            kind: "file",
            path: MW,
            name: Iw(MW),
            depth: RW
          })
        };
        return zR(wW, 0), CW
      }(QW, fW, rR);
      (0, CW.useEffect)((() => {
        cR((WW => {
          const RW = new Set(WW);
          let MW = !1;
          for (const CW of Pw(wW)) MW = RW.delete(CW) || MW;
          return MW ? RW : WW
        }))
      }), [wW]);
      const jR = QW.length >= xR.F,
        kR = (WW, RW) => {
          if (WW.length > bC.q) return `Path must be at most ${bC.q} characters`;
          if (!(0, bC.o)(WW)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === WW) return "index.d.ts cannot be the world-code entry";
          const wW = !!RW && (0, yC.f)(RW, WW);
          if (RW && (0, yC.h)(RW) && !wW) return `Cannot rename ${RW} (only swapping ${Aw.k} and ${Aw.n} is allowed)`;
          if (WW in MW) return "A file with that path already exists";
          if ((0, yC.h)(WW) && !wW) {
            if ((WW === Aw.k ? Aw.n : Aw.k) in MW) return `World code cannot have both ${Aw.k} and ${Aw.n}`
          }
          return null
        },
        aR = WW => {
          Bw.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === WW ? void 0 : `${WW}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: WW => kR(WW)
          }).getResult().then((WW => {
            "notificationTornDown" !== WW && null !== WW && "submit" === WW.type && gR(WW.value)
          }))
        },
        sW = WW => {
          Bw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: WW,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: RW => RW === WW ? "That is already the file's path" : kR(RW, WW)
          }).getResult().then((RW => {
            "notificationTornDown" !== RW && null !== RW && "submit" === RW.type && iR(WW, RW.value)
          }))
        },
        dW = WW => {
          const RW = WW => WW.replace(/\/+$/, "");
          Bw.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: WW,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: MW => {
              const wW = RW(MW);
              if (wW === WW) return "That is already the folder's path";
              for (const [RW, CW] of(0, yC.n)(QW, WW, wW)) {
                const WW = kR(CW, RW);
                if (null !== WW) return WW
              }
              return null
            }
          }).getResult().then((MW => {
            "notificationTornDown" !== MW && null !== MW && "submit" === MW.type && JW(WW, RW(MW.value))
          }))
        },
        pW = WW => {
          Bw.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: WW
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((RW => {
            !0 === RW && PW(WW)
          }))
        };
      return (0, eW.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, eW.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, eW.jsx)("span", {
            children: "Files"
          }), zR && !jR && (0, eW.jsx)(TW.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              aR()
            },
            children: (0, eW.jsx)(YW.e, {
              name: "plus"
            })
          })]
        }), (0, eW.jsxs)("div", {
          className: "FileTreeList",
          children: [XW.map((WW => {
            const RW = WW.path;
            if ("folder" === WW.kind) return (0, eW.jsx)(fw, {
              path: RW,
              name: WW.name,
              depth: WW.depth,
              collapsed: WW.collapsed,
              onToggle: () => {
                var WW;
                WW = RW, cR((RW => {
                  const MW = new Set(RW);
                  return MW.delete(WW) || MW.add(WW), MW
                }))
              },
              canCreate: zR && !jR,
              canRename: zR,
              onCreate: aR,
              onRename: dW
            }, `folder:${RW}`);
            const CW = (0, yC.h)(RW),
              AW = Aw.k in MW && Aw.n in MW,
              bR = !CW || AW,
              NW = null === yR && RW === wW;
            return (0, eW.jsx)(rC, {
              path: RW,
              label: WW.name,
              depth: WW.depth,
              isActive: NW,
              canRename: zR,
              onSelect: BW,
              onRename: sW,
              onDelete: pW,
              canDelete: bR && zR
            }, RW)
          })), (0, eW.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, eW.jsxs)("span", {
              children: ["Schematics (", Object.keys(oW).length, "/", Jw.f, ")"]
            }), zR && (0, eW.jsx)(TW.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(oW).length >= Jw.f,
              onClick: () => {
                lW("")
              },
              children: (0, eW.jsx)(YW.e, {
                name: "plus"
              })
            })]
          }), Object.keys(oW).sort().map((WW => (0, eW.jsx)(rC, {
            path: WW,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: lW
          }, WW))), bR.length > 0 && (0, eW.jsxs)(eW.Fragment, {
            children: [(0, eW.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, eW.jsx)("span", {
                children: "Plugins"
              })
            }), bR.map((WW => {
              var RW;
              const MW = iC.d[WW],
                wW = Object.keys(null !== (RW = null === MW || void 0 === MW ? void 0 : MW.files) && void 0 !== RW ? RW : {
                  "index.ts": ""
                }).sort(((WW, RW) => "index.ts" === WW ? -1 : "index.ts" === RW ? 1 : WW.localeCompare(RW)));
              return (0, eW.jsxs)("div", {
                children: [(0, eW.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, yC.t)(WW)
                }), wW.map((RW => (0, eW.jsx)(rC, {
                  path: RW,
                  nested: !0,
                  isActive: yR === WW && NW === RW,
                  canRename: !1,
                  onSelect: () => {
                    tR(WW, RW)
                  },
                  canDelete: !1
                }, RW)))]
              }, WW)
            }))]
          })]
        }), (0, eW.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, eW.jsx)(TW.h, {
            className: "FileTreeFooterButton",
            onClick: IW,
            children: FW(AW ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function lw(WW) {
      return WW > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": WW
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Fw(WW) {
      let {
        depth: RW
      } = WW;
      return (0, eW.jsx)(eW.Fragment, {
        children: Array.from({
          length: RW
        }, ((WW, RW) => (0, eW.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": RW
          }
        }, RW)))
      })
    }

    function fw(WW) {
      let {
        path: RW,
        name: MW,
        depth: wW,
        collapsed: CW,
        onToggle: zR,
        canCreate: AW,
        canRename: bR,
        onCreate: yR,
        onRename: NW
      } = WW;
      const BW = [];
      AW && BW.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          yR(RW)
        }
      }), bR && BW.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          NW(RW)
        }
      });
      const tR = lw(wW);
      return (0, eW.jsxs)("div", {
        className: YR()("FileTreeItem FileTreeFolder", tR.className),
        style: tR.style,
        children: [(0, eW.jsx)(Fw, {
          depth: wW
        }), (0, eW.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !CW,
          onClick: zR,
          children: [(0, eW.jsx)(YW.e, {
            className: "FileTreeFolderCaret",
            name: CW ? "caret-right" : "caret-down"
          }), (0, eW.jsx)(YW.e, {
            className: "FileTreeFolderIcon",
            name: CW ? "folder" : "folder-open"
          }), MW]
        }), (0, eW.jsx)(Qw, {
          path: RW,
          actions: BW
        })]
      })
    }

    function Qw(WW) {
      let {
        path: RW,
        actions: MW
      } = WW;
      const wW = (0, CW.useRef)(null);
      return 0 === MW.length ? null : (0, eW.jsxs)("div", {
        ref: wW,
        className: "FileTreeItemActions",
        children: [(0, eW.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${RW}`,
          children: (0, eW.jsx)(YW.e, {
            name: "ellipsis"
          })
        }), (0, eW.jsx)(Yw.c, {
          triggerElementRef: wW,
          options: MW
        })]
      })
    }

    function rC(WW) {
      let {
        path: RW,
        label: MW = RW,
        depth: wW = 0,
        isActive: CW,
        canRename: zR,
        onSelect: AW,
        onRename: bR,
        onDelete: yR,
        canDelete: NW,
        nested: BW
      } = WW;
      const tR = [];
      zR && bR && tR.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          bR(RW)
        }
      }), NW && yR && tR.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          yR(RW)
        }
      });
      const TW = lw(wW);
      return (0, eW.jsxs)("div", {
        className: YR()("FileTreeItem", TW.className, {
          Active: CW,
          Nested: BW
        }),
        style: TW.style,
        children: [(0, eW.jsx)(Fw, {
          depth: wW
        }), (0, eW.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: MW === RW ? void 0 : RW,
          onClick: () => {
            AW(RW)
          },
          children: MW
        }), (0, eW.jsx)(Qw, {
          path: RW,
          actions: tR
        })]
      })
    }
    async function cC(WW) {
      const RW = (0, yC.b)(WW);
      if (!RW || "" === WW[RW].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: wW
      } = await Promise.all([MW.e(269), MW.e(270)]).then((() => MW(38960)));
      return (0, iC.b)(wW(WW))
    }
    var Xw = MW(35063);

    function jC(WW, RW) {
      const MW = Object.keys(WW),
        wW = Object.keys(RW);
      if (MW.length !== wW.length) return !1;
      for (const CW of MW)
        if (!(CW in RW) || WW[CW] !== RW[CW]) return !1;
      return !0
    }

    function kC(WW, RW) {
      const MW = [],
        wW = [],
        CW = [];
      for (const zR of Object.keys(RW)) zR in WW ? WW[zR] !== RW[zR] && CW.push(zR) : MW.push(zR);
      for (const zR of Object.keys(WW)) zR in RW || wW.push(zR);
      return MW.sort(), wW.sort(), CW.sort(), {
        creates: MW,
        deletes: wW,
        updates: CW
      }
    }

    function aC(WW, RW) {
      var MW;
      const wW = {
          ...WW
        },
        CW = (0, yC.b)(RW),
        zR = (0, yC.b)(wW);
      if (Aw.k in wW && Aw.n in wW) {
        const WW = null !== CW && void 0 !== CW ? CW : Aw.n,
          MW = WW === Aw.k ? Aw.n : Aw.k;
        var AW;
        if (!(WW in wW)) wW[WW] = null !== (AW = RW[WW]) && void 0 !== AW ? AW : "";
        return delete wW[MW], wW
      }
      var bR;
      return CW && !(CW in wW) ? (zR || (wW[CW] = null !== (bR = RW[CW]) && void 0 !== bR ? bR : ""), wW) : (zR || CW || (wW[Aw.k] = null !== (MW = wW[Aw.k]) && void 0 !== MW ? MW : "", delete wW[Aw.n]), wW)
    }

    function sw(WW, RW) {
      const MW = (0, yC.b)(RW),
        wW = Aw.k in RW && Aw.n in RW;
      return WW.filter((WW => !(0, yC.h)(WW) || (!!wW || MW !== WW)))
    }
    async function dw(WW, RW, wW) {
      const CW = WW.getLobbyFiles(),
        zR = (0, xR.p)(wW, (0, yC.o)(CW, RW)),
        AW = await WW.ensureJoined(RW),
        bR = (0, bC.u)(AW.docKey);
      if (AW.doc === zR) return;
      for (let MW = 0; MW < 100; MW++) {
        const MW = WW.getCollabSnapshot();
        if (MW && (0, bC.u)(MW.docKey) === bR && WW.getActivePath() === RW) {
          if (WW.replaceActiveDoc(bR, zR)) return;
          await (0, YM.U)(40)
        } else await (0, YM.U)(40)
      }
      const {
        ChangeSet: yR
      } = await MW.e(265).then((() => MW(38778))), eW = WW.getCollabSnapshot(), BW = eW && (0, bC.u)(eW.docKey) === bR ? eW : AW;
      await async function(WW, RW, MW, wW) {
        const CW = WW.of({
            from: 0,
            to: MW.length,
            insert: wW
          }, MW.length),
          zR = JSON.stringify([{
            clientID: RW.clientID,
            changes: CW.toJSON()
          }]),
          AW = (0, bC.u)(RW.docKey);
        zR.length <= bC.h ? NW.gameBridge.send("sendCodeCollab", {
          yV: bC.d.Push,
          tV: AW,
          iV: RW.version,
          lE: zR
        }) : await (0, Cw.postJsonWithMetricsCookiesAndJsonResponse)(`${RW.httpConfig.gsUrl}/code/collab-push`, ww.h["collab-push"].toBuffer({
          gameNameWithVariation: RW.httpConfig.gameNameWithVariation,
          lobbyName: RW.httpConfig.lobbyName,
          docKey: AW,
          version: RW.version,
          updates: zR
        }), {
          retries: 0
        })
      }(yR, BW, BW.doc, zR)
    }
    class pw {
      constructor(WW) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = WW
      }
      async writeLobbyFiles(WW) {
        const RW = {
            ...this.bridge.getLobbyFiles()
          },
          MW = {
            ...RW
          };
        for (const {
            path: zR,
            text: AW
          }
          of WW) MW[zR] = AW;
        if (!WW.every((WW => {
            let {
              path: RW,
              text: wW
            } = WW;
            return (0, xR.p)(wW, (0, yC.o)(MW, RW)) === wW
          }))) return !1;
        const wW = [];
        try {
          for (const {
              path: RW,
              text: MW
            }
            of WW) wW.push(RW), RW in this.bridge.getLobbyFiles() || (this.bridge.createFile(RW, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(RW, !0)), await dw(this.bridge, RW, MW)
        } catch (CW) {
          for (const WW of wW) WW in RW ? await dw(this.bridge, WW, RW[WW]).catch((RW => {
            console.error("World Code AI: couldn't put back", WW, RW)
          })) : this.bridge.deleteFile(WW);
          throw CW
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const WW = await (0, Xw.s)(this.bridge.getStorageKey());
        return !!WW && (this.handle = WW, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(WW), !0)
      }
      async unlinkFolder() {
        const WW = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Xw.c)(WW), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const WW = this.bridge.getStorageKey(),
          RW = await (0, Xw.q)(WW);
        return !!RW && (!!await (0, Xw.h)(RW, "readwrite") && (this.handle = RW, this.linked = !0, await (0, Xw.F)(WW, RW), await this.scaffoldLocalTypes(RW), !0))
      }
      scaffoldLocalTypes(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const wW = (await cC(RW)).map((WW => iC.d[WW])),
              CW = wW.map((WW => {
                var RW;
                return `${WW.name}:${Object.keys(null!==(RW=null===WW||void 0===WW?void 0:WW.files)&&void 0!==RW?RW:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === CW) return;
            const {
              ensureLocalBloxdTypes: zR
            } = await Promise.all([MW.e(69), MW.e(267), MW.e(272)]).then((() => MW(38963)));
            await zR(WW, wW), this.scaffoldedPluginNamesKey = CW
          } catch (wW) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", wW)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(WW) {
        this.handle && await this.scaffoldLocalTypes(this.handle, WW), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(WW)
      }
      async onDocTextChanged(WW, RW) {
        if (!this.handle) return;
        const MW = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [WW]: RW
        })];
        this.running && (this.pendingDocText.set(WW, RW), MW.push(this.flushDocTextToDisk())), await Promise.all(MW)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const WW = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const RW = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [MW, wW] of RW) this.lastSynced[MW] !== wW && (await (0, Xw.P)(WW, MW, wW), this.lastSynced = {
              ...this.lastSynced,
              [MW]: wW
            })
          }
        } catch (RW) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", RW), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Xw.t)(this.handle))
          } catch (WW) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", WW)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, Xw.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const RW = this.bridge.getLobbyFiles(),
              MW = await (0, Xw.t)(this.handle);
            for (const WW of Object.keys(RW).filter(Jw.e)) {
              if (MW[WW] === Xw.n) return void this.bridge.setMessage(`Move ${WW} outside the linked folder before syncing its placeholder.`, "warning");
              MW[WW] = Jw.l
            }
            if (jC(MW, RW)) {
              for (const WW of Object.keys(RW).filter(Jw.e)) await (0, Xw.P)(this.handle, WW, Jw.l);
              return this.lastSynced = {
                ...MW
              }, void this.beginWatch()
            }
            const wW = await this.promptReconcile(function(WW) {
              return null !== (0, yC.b)(WW)
            }(MW));
            if ("unlink" === wW) return void await this.unlinkFolder();
            if ("dismissed" === wW) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === wW) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(MW);
                for (const WW of Object.keys(RW).filter(Jw.e)) await (0, Xw.P)(this.handle, WW, Jw.l);
                this.lastSynced = {
                  ...await (0, Xw.t)(this.handle)
                }
              } else await (0, Xw.S)(this.handle, RW), this.lastSynced = {
                ...RW
              }
            } catch (WW) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", WW), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(WW) {
        return await new Promise((RW => {
          const MW = [{
              choice: "local",
              Button: TW.h,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: TW.h,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: TW.h,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            wW = (0, eW.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, eW.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, eW.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: WW ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, eW.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: MW.filter((RW => "local" !== RW.choice || WW)).map((WW => {
                  let {
                    choice: MW,
                    Button: wW,
                    labelKey: zR,
                    descriptionKey: AW
                  } = WW;
                  return (0, eW.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, eW.jsx)(wW, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (WW => {
                          CW.tearDownNotification(), RW(WW)
                        })(MW)
                      },
                      children: this.bridge.t(`codeEditor:${zR}`)
                    }), (0, eW.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${AW}`)
                    })]
                  }, MW)
                }))
              })]
            }),
            CW = Bw.NotificationProvider.showCustomPopup({
              body: wW,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          CW.getResult().then((WW => {
            "notificationTornDown" === WW && RW("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Xw.I)(this.handle, (WW => {
          this.onDiskFilesChanged(WW)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (WW) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", WW)
        }
      }
      async onDiskFilesChanged(WW) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const RW = this.bridge.getLobbyFiles();
        let MW = aC(WW, this.lastSynced);
        for (const zR in RW)
          if ((0, Jw.e)(zR) && MW[zR] === Xw.n) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const wW = Object.keys(MW).filter((WW => (0, Jw.e)(WW) && !(WW in RW)));
        wW.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const zR of Object.keys(RW).filter(Jw.e))(zR in MW || wW.length > 0 || !(zR in this.lastSynced)) && (MW[zR] = Jw.l);
        if (!jC(MW, WW)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(WW, MW), MW = aC(await (0, Xw.t)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!jC(MW, this.lastSynced)) {
          this.applying = !0;
          try {
            const WW = kC(this.lastSynced, MW);
            if (await this.pushDiskDeltaToLobby(MW, RW), null !== this.lastLobbySeen)
              for (const MW of [...WW.creates, ...WW.updates, ...WW.deletes])(0, Jw.e)(MW) || (MW in RW ? this.lastLobbySeen[MW] = RW[MW] : delete this.lastLobbySeen[MW]);
            this.lastSynced = {
              ...MW
            }
          } catch (CW) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", CW), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(WW, RW) {
        if (this.handle) {
          for (const MW of Object.keys(WW)) MW in RW || await (0, Xw.x)(this.handle, MW);
          for (const [MW, wW] of Object.entries(RW)) WW[MW] !== wW && await (0, Xw.P)(this.handle, MW, wW)
        }
      }
      async applyRemoteTreeToDisk(WW) {
        if (!this.handle) return;
        const RW = this.lastLobbySeen;
        if (null === RW) return void(this.lastLobbySeen = {
          ...WW
        });
        const MW = Object.keys(WW).filter((MW => RW[MW] !== WW[MW])),
          wW = Object.keys(RW).filter((RW => !(RW in WW)));
        if (0 !== MW.length || 0 !== wW.length) {
          this.applying = !0;
          try {
            for (const RW of [...wW, ...MW]) try {
              if (RW in WW) await (0, Xw.P)(this.handle, RW, WW[RW]), this.lastSynced = {
                ...this.lastSynced,
                [RW]: WW[RW]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [RW]: WW[RW]
              };
              else {
                await (0, Xw.x)(this.handle, RW);
                const WW = {
                  ...this.lastSynced
                };
                delete WW[RW], this.lastSynced = WW;
                const MW = {
                  ...this.lastLobbySeen
                };
                delete MW[RW], this.lastLobbySeen = MW
              }
            } catch (CW) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", CW), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(WW, RW) {
        const MW = function(WW, RW) {
          const MW = (0, yC.b)(WW),
            wW = (0, yC.b)(RW);
          return MW && wW && MW !== wW ? {
            from: MW,
            to: wW
          } : null
        }(WW, RW);
        return !!MW && (this.bridge.renameFile(MW.from, MW.to), await this.bridge.waitForLobbyPath(MW.to, !0), !0)
      }
      async applyLocalTreeToLobby(WW) {
        var RW;
        const MW = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), WW);
        const wW = this.bridge.getLobbyFiles(),
          CW = kC(wW, WW),
          zR = sw(CW.deletes, wW);
        for (const NW of CW.creates)(0, Jw.e)(NW) || (this.bridge.createFile(NW, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(NW, !0));
        for (const NW of zR)(0, Jw.e)(NW) || (this.bridge.deleteFile(NW), await this.bridge.waitForLobbyPath(NW, !1));
        if (!(0, yC.b)(this.bridge.getLobbyFiles()) && !(0, yC.b)(WW)) {
          if (this.bridge.createFile(Aw.k, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Aw.k, !0), !this.handle) return;
          await (0, Xw.P)(this.handle, Aw.k, ""), WW = {
            ...WW,
            [Aw.k]: ""
          }
        }
        const AW = this.bridge.getLobbyFiles();
        for (const NW of Object.keys(WW))(0, Jw.e)(NW) || AW[NW] !== WW[NW] && await dw(this.bridge, NW, WW[NW]);
        const bR = this.bridge.getLobbyFiles(),
          yR = MW in bR ? MW : null !== (RW = (0, yC.b)(bR)) && void 0 !== RW ? RW : Aw.k;
        await this.bridge.ensureJoined(yR)
      }
      async pushDiskDeltaToLobby(WW, RW) {
        const MW = this.bridge.getActivePath(),
          wW = await this.renameLobbyEntryIfSwitched(RW, WW) ? this.bridge.getLobbyFiles() : RW,
          CW = kC(this.lastSynced, WW),
          zR = sw(CW.deletes, wW).filter((WW => WW in wW));
        for (const AW of CW.creates)(0, Jw.e)(AW) || (AW in this.bridge.getLobbyFiles() || (this.bridge.createFile(AW, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(AW, !0)), await dw(this.bridge, AW, WW[AW]));
        for (const AW of zR)(0, Jw.e)(AW) ? await this.bridge.deleteSchematic(AW) : (this.bridge.deleteFile(AW), await this.bridge.waitForLobbyPath(AW, !1));
        for (const AW of CW.updates)(0, Jw.e)(AW) || await dw(this.bridge, AW, WW[AW]);
        MW in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== MW && await this.bridge.ensureJoined(MW)
      }
    }
    var hw = MW(1033);

    function Uw() {
      const {
        websocketUrl: WW,
        gameNameWithVariation: RW,
        lobbyName: MW
      } = NW.gameBridge.latest("connectedGame");
      return {
        gsUrl: hw.clientSideServerUrls.getHttpUrlFromWebSocketUrl(WW),
        gameNameWithVariation: RW,
        lobbyName: MW
      }
    }
    async function Ew(WW) {
      const {
        gsUrl: RW,
        gameNameWithVariation: MW,
        lobbyName: wW
      } = Uw();
      return await (0, Cw.postBinaryWithMetricsCookiesAndCustomResponse)(`${RW}/code/schematics`, ww.Bj.schematics.toBuffer({
        gameNameWithVariation: MW,
        lobbyName: wW,
        request: JSON.stringify(WW)
      }), {
        retries: 0
      }, Cw.HttpPayloadType.json)
    }
    var Vw = MW(156),
      mC = MW(34656);

    function xC(WW) {
      let {
        path: RW,
        revision: MW
      } = WW;
      const [wW, zR] = (0, CW.useState)(""), [AW, bR] = (0, CW.useState)(!1), [yR, NW] = (0, CW.useState)(0);
      return (0, CW.useEffect)((() => {
        let WW = !1;
        return zR(""), bR(!1), Ew({
          action: "preview",
          path: RW
        }).then((RW => {
          WW || zR(`data:image/webp;base64,${RW.previewBase64}`)
        })).catch((RW => {
          console.error("Could not load schematic preview", RW), WW || bR(!0)
        })), () => {
          WW = !0
        }
      }), [RW, MW, yR]), (0, eW.jsxs)("div", {
        className: "SchematicPreview",
        children: [wW && (0, eW.jsx)("img", {
          src: wW,
          alt: `Preview of ${RW}`
        }), !wW && !AW && (0, eW.jsx)(XW.d, {
          loaderType: "Secondary"
        }), AW && (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, eW.jsx)(TW.h, {
            onClick: () => {
              NW(yR + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function vC(WW) {
      var RW;
      let {
        initialPath: MW,
        onChanged: wW,
        onClose: zR
      } = WW;
      const AW = "" === MW,
        [bR, yR] = (0, CW.useState)(null),
        [NW, BW] = (0, CW.useState)(MW),
        [tR, gR] = (0, CW.useState)(!1),
        [iR, YW] = (0, CW.useState)(!1),
        [JW, PW] = (0, CW.useState)(null),
        [IW, oW] = (0, CW.useState)(!1),
        [lW, FW] = (0, CW.useState)(""),
        fW = (0, CW.useRef)(null),
        QW = (0, CW.useRef)(!1),
        rR = (0, CW.useRef)(!0);
      (0, CW.useEffect)((() => (rR.current = !0, Ew({
        action: "state"
      }).then((WW => {
        rR.current && yR(WW)
      })).catch((WW => {
        console.error("Could not load schematic assets", WW), rR.current && FW("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        rR.current = !1
      })), []);
      const cR = null === bR || void 0 === bR ? void 0 : bR.assets[MW],
        XW = Object.keys(null !== (RW = null === bR || void 0 === bR ? void 0 : bR.assets) && void 0 !== RW ? RW : {}).length,
        jR = NW.trim(),
        kR = jR ? (0, Jw.e)(jR) ? null !== bR && void 0 !== bR && bR.assets[jR] && (AW || jR !== MW) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        aR = !!jR && !kR && (AW ? XW < Jw.f : jR !== MW),
        sW = IW || !bR;
      async function dW(WW) {
        if (!QW.current && rR.current) {
          QW.current = !0, oW(!0), FW("");
          try {
            const RW = await Ew({
              ...WW,
              expectedRevision: bR.revision
            });
            wW(RW), rR.current && zR()
          } catch (MW) {
            var RW;
            if (console.error("Schematic asset operation failed", MW), rR.current) FW(MW instanceof Vw.d ? null !== (RW = MW.errorMessageForUser) && void 0 !== RW ? RW : MW.message : String(MW));
            try {
              const WW = await Ew({
                action: "state"
              });
              wW(WW), rR.current && yR(WW)
            } catch (CW) {
              console.error("Could not refresh schematic assets", CW)
            }
          } finally {
            QW.current = !1, rR.current && oW(!1)
          }
        }
      }
      return (0, eW.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, eW.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: AW ? "New schematic" : tR ? "Rename schematic" : "Schematic"
        }), lW && (0, eW.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: lW
        }), !bR && !lW && (0, eW.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, eW.jsxs)("fieldset", {
          disabled: sW,
          children: [AW || tR ? (0, eW.jsxs)("label", {
            className: "SchematicField",
            children: [(0, eW.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, eW.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, eW.jsx)(aM.e, {
                className: "InputGenericPopupInput",
                defaultValue: MW,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: BW
              }, tR ? "rename" : "create")
            })]
          }) : (0, eW.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: MW
          }), (AW || tR) && kR && (0, eW.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: kR
          }), AW ? (0, eW.jsxs)(eW.Fragment, {
            children: [XW >= Jw.f && (0, eW.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Jw.f, " maximum)."]
            }), iR ? (0, eW.jsxs)(eW.Fragment, {
              children: [(0, eW.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, eW.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": sW || !aR,
                children: (0, eW.jsx)(mC.d, {
                  loading: null === JW,
                  schematics: null !== JW && void 0 !== JW ? JW : [],
                  disableAutoExport: !0,
                  onSchematicPicked: WW => {
                    !sW && aR && dW({
                      action: "profile",
                      path: jR,
                      schematicId: WW.schematicId
                    })
                  }
                })
              }), (0, eW.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, eW.jsx)(TW.h, {
                  className: "InputGenericPopupButton",
                  disabled: sW,
                  onClick: () => {
                    YW(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, eW.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, eW.jsx)(TW.h, {
                className: "InputGenericPopupButton",
                disabled: sW || !aR,
                onClick: () => {
                  fW.current.click()
                },
                children: "Upload Schematic"
              }), (0, eW.jsx)(TW.h, {
                className: "InputGenericPopupButton",
                disabled: sW || !aR,
                onClick: () => {
                  !async function() {
                    if (YW(!0), FW(""), !JW) try {
                      const WW = await (0, Cw.postJsonWithMetricsCookiesAndJsonResponse)(`${hw.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      rR.current && PW(WW)
                    } catch (WW) {
                      console.error("Could not load profile schematics", WW), rR.current && (YW(!1), FW("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, eW.jsx)("input", {
              ref: fW,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: WW => {
                var RW;
                const MW = null === (RW = WW.target.files) || void 0 === RW ? void 0 : RW[0];
                if (WW.target.value = "", !MW) return;
                if (MW.size > Jw.j) return void FW("The schematic file is too large.");
                const wW = jR;
                oW(!0);
                const CW = new FileReader;
                CW.onload = () => {
                  dW({
                    action: "upload",
                    path: wW,
                    base64: String(CW.result).split(",")[1]
                  })
                }, CW.onerror = () => {
                  console.error("Could not read schematic file", CW.error), rR.current && (oW(!1), FW("Could not read the selected file."))
                }, CW.readAsDataURL(MW)
              }
            })]
          }) : cR ? (0, eW.jsxs)(eW.Fragment, {
            children: [!tR && (0, eW.jsx)(xC, {
              path: MW,
              revision: bR.revision
            }), !tR && (0, eW.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(cR.byteSize / 1024), " KB \xb7 ", cR.dimensions.join(" \xd7 "), " blocks"]
            }), (0, eW.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: tR ? (0, eW.jsxs)(eW.Fragment, {
                children: [(0, eW.jsx)(TW.h, {
                  className: "InputGenericPopupButton",
                  disabled: sW || !aR,
                  onClick: () => {
                    dW({
                      action: "rename",
                      path: MW,
                      newPath: jR
                    })
                  },
                  children: "Rename"
                }), (0, eW.jsx)(TW.h, {
                  className: "InputGenericPopupButton",
                  disabled: sW,
                  onClick: () => {
                    gR(!1), BW(MW)
                  },
                  children: "Cancel"
                })]
              }) : (0, eW.jsxs)(eW.Fragment, {
                children: [(0, eW.jsx)(TW.h, {
                  className: "InputGenericPopupButton",
                  disabled: sW,
                  onClick: () => {
                    gR(!0)
                  },
                  children: "Rename"
                }), (0, eW.jsx)(TW.E, {
                  className: "InputGenericPopupButton",
                  disabled: sW,
                  onClick: () => {
                    dW({
                      action: "remove",
                      path: MW
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : bR && (0, eW.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Kw(WW) {
      if ("string" !== typeof WW) return null;
      try {
        const RW = JSON.parse(WW);
        return (0, yC.j)(null === RW || void 0 === RW ? void 0 : RW.worldCodeEngine) && "boolean" === typeof RW.engineLocked && function(WW) {
          if (null === WW) return !0;
          const RW = null === WW || void 0 === WW ? void 0 : WW.location;
          return "string" === typeof(null === WW || void 0 === WW ? void 0 : WW.reason) && (null === RW || "string" === typeof(null === RW || void 0 === RW ? void 0 : RW.path) && Number.isInteger(RW.line))
        }(RW.fallback) ? RW : (console.error("[CodeCollab] Malformed engine settings", WW), null)
      } catch (RW) {
        return console.error("[CodeCollab] Failed to parse engine settings", RW), null
      }
    }

    function uw(WW) {
      let {
        fallback: RW,
        onGoToLine: MW
      } = WW;
      const {
        t: wW
      } = (0, RR.C)(), {
        location: CW
      } = RW;
      return (0, eW.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [wW("codeEditorEngine:notice", {
          reason: RW.reason
        }), CW && (0, eW.jsxs)(eW.Fragment, {
          children: [" ", (0, eW.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              MW(CW.path, CW.line)
            },
            children: wW("codeEditorEngine:goToLine", {
              line: String(CW.line)
            })
          })]
        })]
      })
    }
    var Ow = MW(3919),
      nw = MW(3458);

    function Gw(WW) {
      let {
        label: RW,
        hint: MW,
        checked: wW,
        onChange: CW
      } = WW;
      return (0, eW.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, eW.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, eW.jsx)("span", {
            children: RW
          }), (0, eW.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: MW
          })]
        }), (0, eW.jsx)("span", {
          className: "SwitchContainer",
          children: (0, eW.jsx)(nw.e, {
            className: "SwitchCheckbox",
            checked: wW,
            onChange: WW => {
              CW(WW.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Lw(WW) {
      let {
        engine: RW,
        onSetEngine: MW,
        aiHints: wW,
        variation: CW
      } = WW;
      const {
        t: zR
      } = (0, RR.C)();
      return (0, eW.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, eW.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: zR("codeEditor:moreOptions")
        }), RW && (0, eW.jsx)(Gw, {
          label: zR("codeEditorEngine:toggle"),
          hint: zR("codeEditorEngine:toggleHint"),
          checked: "ses" === RW,
          onChange: WW => {
            MW(WW ? "ses" : "quickjs")
          }
        }), wW && (0, eW.jsx)(Gw, {
          label: zR("codeEditorAiHints:toggle"),
          hint: zR("codeEditorAiHints:toggleHint"),
          checked: wW.shown,
          onChange: wW.setShown
        }), CW && (0, eW.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, eW.jsx)(Ow.e, {
            label: "codeEditor:variationLabel",
            children: (0, eW.jsx)(aM.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: CW.name,
              onValueChange: CW.setName,
              onEnter: CW.reload
            })
          }), (0, eW.jsx)(TW.v, {
            className: "CodeEditorButton",
            onClick: CW.reload,
            children: zR("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var Hw = MW(35067),
      Dw = MW(35072);

    function qC(WW) {
      let {
        close: RW
      } = WW;
      const {
        t: MW
      } = (0, RR.C)(), wW = [{
        name: MW("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: MW("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: MW("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, eW.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, eW.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: MW("codeEditor:tutorialsTitle")
        }), (0, eW.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: wW.map((WW => (0, eW.jsx)(TW.h, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              RW(), (0, Dw.E)(WW.tutorial)
            },
            children: WW.name
          }, WW.tutorial)))
        })]
      })
    }
    var Zw = MW(130),
      Sw = MW(34762),
      WC = MW(7674);
    const RC = (0, CW.forwardRef)((function(WW, RW) {
      let {
        value: MW,
        onChange: wW,
        onSubmit: CW,
        placeholder: zR,
        maxLength: AW,
        rows: bR = 2,
        allowNewLines: yR = !1,
        onKeyDown: NW,
        before: BW
      } = WW;
      const {
        t: tR
      } = (0, RR.C)(), gR = "" !== MW.trim(), iR = () => {
        gR && CW()
      };
      return (0, eW.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [BW, (0, eW.jsx)("textarea", {
          ref: RW,
          className: "PanelPromptInput",
          value: MW,
          maxLength: AW,
          rows: bR,
          placeholder: zR,
          spellCheck: !1,
          autoComplete: "off",
          onChange: WW => {
            wW(yR ? WW.target.value : WW.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: WW => {
            WW.nativeEvent.isComposing || 229 === WW.nativeEvent.keyCode ? WW.stopPropagation() : "Escape" !== WW.key && (WW.stopPropagation(), null === NW || void 0 === NW || NW(WW), WW.defaultPrevented || "Enter" !== WW.key || yR && WW.shiftKey || (WW.preventDefault(), iR()))
          }
        }), (0, eW.jsx)(TW.h, {
          className: "PanelPromptSend",
          disabled: !gR,
          onClick: iR,
          ariaLabel: tR("codeEditorPanels:send"),
          children: (0, eW.jsx)(YW.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function MC(WW) {
      let {
        close: RW,
        inputRef: MW
      } = WW;
      const {
        t: wW
      } = (0, RR.C)(), {
        messages: zR,
        reportedPlayers: AW,
        channel: bR
      } = (0, WC.o)(), [yR, NW] = (0, CW.useState)(""), BW = (0, CW.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, eW.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, eW.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, eW.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: wW("codeEditorChat:title")
          }), (0, eW.jsx)(TW.l, {
            className: "CodeEditorChatHide",
            onClick: RW
          })]
        }), 0 === zR.length ? (0, eW.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: wW("codeEditorChat:empty")
        }) : (0, eW.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, eW.jsx)(Sw.e, {
            messages: zR,
            reportedPlayers: AW
          })
        }), (0, eW.jsx)(RC, {
          ref: MW,
          value: yR,
          onChange: NW,
          onSubmit: () => {
            (0, WC.l)(yR), NW(""), BW.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: rR.bd,
          rows: 1,
          placeholder: bR ? wW("touchOnly" === (0, Zw.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: bR.channelName
          }) : wW("codeEditorChat:placeholder"),
          before: bR && (0, eW.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: bR.elementBgColor
            },
            onClick: () => {
              WC.d.selectNextChannel(), MW.current.focus()
            },
            children: (0, eW.jsx)(fW.c, {
              text: bR.elementContent
            })
          }),
          onKeyDown: WW => {
            const RW = yR === BW.current.text;
            if ("ArrowUp" !== WW.key && "ArrowDown" !== WW.key || !RW && "" !== yR) "Tab" === WW.key && !WW.shiftKey && bR && (WW.preventDefault(), WC.d.selectNextChannel());
            else {
              WW.preventDefault();
              const MW = RW ? BW.current.stepsBack : 0;
              BW.current = (0, WC.k)(MW + ("ArrowUp" === WW.key ? 1 : -1)), NW(BW.current.text)
            }
          }
        })]
      })
    }

    function wC(WW) {
      let {
        side: RW,
        defaultWidth: MW,
        children: wW
      } = WW;
      const zR = (0, CW.useRef)(null),
        [AW, bR] = (0, CW.useState)(null),
        yR = (0, CW.useRef)(null),
        NW = () => {
          yR.current = null
        };
      return (0, eW.jsxs)("div", {
        ref: zR,
        className: YR()("ResizableSidePanel", `ResizableSidePanel-${RW}`),
        style: {
          width: null !== AW && void 0 !== AW ? AW : MW
        },
        children: [wW, (0, eW.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: WW => {
            if (0 !== WW.button) return;
            WW.preventDefault();
            const RW = zR.current,
              MW = Array.from(RW.parentElement.children).reduce(((WW, MW) => MW !== RW && "0" !== getComputedStyle(MW).flexGrow ? WW + MW.clientWidth : WW), 0),
              wW = RW.offsetWidth,
              CW = Math.min(200, wW),
              AW = Math.max(CW, wW + Math.max(0, MW - 160));
            yR.current = {
              startX: WW.clientX,
              startWidth: wW,
              minWidth: CW,
              maxWidth: AW
            }, WW.currentTarget.setPointerCapture(WW.pointerId)
          },
          onPointerMove: WW => {
            const MW = yR.current;
            if (!MW) return;
            const wW = "left" === RW ? WW.clientX - MW.startX : MW.startX - WW.clientX;
            bR(Math.min(MW.maxWidth, Math.max(MW.minWidth, MW.startWidth + wW)))
          },
          onPointerUp: NW,
          onPointerCancel: NW,
          onLostPointerCapture: NW
        })]
      })
    }
    var CC = MW(35075);
    class zz {
      constructor(WW, RW) {
        this.storageKey = WW, this.defaultValue = RW, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const WW = dW.g.getItem(this.storageKey);
            this.value = "boolean" === typeof WW ? WW : this.defaultValue
          }
          return this.value
        }, this.set = WW => {
          this.value = WW, dW.g.setItem(this.storageKey, WW);
          for (const RW of this.listeners) RW(WW)
        }
      }
      subscribe(WW) {
        return this.listeners.add(WW), () => {
          this.listeners.delete(WW)
        }
      }
    }
    const AC = new zz("codeEditorLightMode", !1),
      bz = new zz("codeEditorAiHints", !0);

    function yz(WW) {
      const [RW, MW] = (0, CW.useState)(WW.get);
      return (0, CW.useEffect)((() => {
        const RW = WW.subscribe(MW);
        return MW(WW.get()), RW
      }), [WW]), [RW, WW.set]
    }
    var NC = MW(35077),
      eC = MW(35085),
      BC = MW(1459),
      tz = MW(35090);
    const TC = (0, CW.lazy)((() => Promise.all([MW.e(269), MW.e(265), MW.e(268), MW.e(264), MW.e(69), MW.e(267), MW.e(266), MW.e(263)]).then((() => MW(38774))))),
      gz = (0, CW.lazy)((() => Promise.all([MW.e(64), MW.e(67), MW.e(68), MW.e(66), MW.e(271)]).then((() => MW(38942))))),
      iz = (0, CW.lazy)((() => Promise.all([MW.e(269), MW.e(268), MW.e(69), MW.e(67), MW.e(68), MW.e(66), MW.e(267), MW.e(266), MW.e(65), MW.e(73)]).then((() => MW(38951)))));

    function YC(WW) {
      return NW.gameBridge.query("worldCodeAiChunk", WW)
    }

    function JC() {
      return NW.gameBridge.query("worldCodeAiGameState", null)
    }

    function PC(WW) {
      const {
        gsUrl: RW,
        gameNameWithVariation: MW,
        lobbyName: wW
      } = Uw();
      return (0, Cw.postJsonWithMetricsCookiesAndJsonResponse)(`${RW}/code/get-lobby-code`, ww.Bj["get-lobby-code"].toBuffer({
        gameNameWithVariation: MW,
        lobbyName: wW,
        path: WW
      }), {
        retries: 1
      })
    }
    let IC = !1;
    const oC = [],
      lC = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      FC = (0, CW.memo)((function(WW) {
        var RW, MW;
        let {
          show: wW,
          onOpen: zR,
          onClose: bR,
          isLobbyCode: BW
        } = WW;
        const tR = (0, CW.useRef)(""),
          [iR, JW] = (0, CW.useState)(null),
          PW = (0, CW.useRef)(BW),
          [IW, oW] = (0, CW.useState)({
            message: null,
            type: null
          }),
          [lW, FW] = (0, CW.useState)(""),
          fW = IW.message ? IW : {
            message: lW,
            type: "warning"
          },
          [jR, kR] = (0, CW.useState)(!0),
          [aR, dW] = yz(AC),
          [pW, hW] = yz(bz),
          [UW, EW] = (0, CW.useState)(!1),
          [VW, mR] = (0, CW.useState)(!1),
          vR = (0, CW.useRef)(null),
          KW = (0, CW.useRef)(!1);
        (0, CW.useEffect)((() => {
          var WW;
          VW && KW.current && (KW.current = !1, null === (WW = vR.current) || void 0 === WW || WW.focus())
        }), [VW]);
        const OW = (0, CC.c)(),
          nW = (0, CW.useRef)(null),
          GW = (0, CW.useRef)(null),
          {
            openInGameMenuName: LW,
            openEverythingMenuName: HW
          } = (0, CM.i)(["openInGameMenuName", "openEverythingMenuName"]),
          DW = WW => {
            wW && (nW.current = WW, QR.current = !0)
          };
        (0, QW.f)("OpenReportMenu", (() => {
          DW("Mw")
        })), (0, QW.f)("OpenStoreFromCodeEditor", (() => {
          DW("store")
        })), (0, CW.useEffect)((() => {
          const WW = nW.current;
          null === WW || "Mw" === WW && ("makeReport" === LW || "makeDiscordReport" === LW) || "store" === WW && null !== HW || (nW.current = null, null === LW && null === HW ? BW ? (GW.current = SR.current, gR.k.Sz("EditLobbyCode", iR)) : gR.k.Sz("EditCodeBlock", {
            pos: iR,
            canChangePos: PW.current
          }) : (0, Dw.v)())
        }), [LW, HW, BW, iR]), (0, CW.useEffect)((() => {
          if (wW) return () => {
            GW.current = null
          }
        }), [wW]);
        const [qR, ZW] = function() {
          const [WW, RW] = (0, CW.useState)(IC);
          return (0, QW.f)("CodeEditorAiHelperShown", (WW => {
            RW(WW)
          })), [WW, (0, CW.useCallback)((WW => {
            IC = WW, gR.k.Sz("CodeEditorAiHelperShown", WW)
          }), [])]
        }(), [SW, WR] = (0, CW.useState)(null), [MR, wR] = (0, CW.useState)([]), [CR, zM] = (0, CW.useState)(0), [AR, bM] = (0, CW.useState)(0), [yM, NR] = (0, CW.useState)(""), eR = (0, CW.useRef)(null), [BR, tM] = (0, CW.useState)(BW ? tz.g : null), TR = BW || null !== iR, gM = (0, yR.h)("canEditCode"), iM = (0, yR.h)("canUseDevCreativeItems"), JR = (0, Hw.f)("welcome"), PR = (0, Hw.f)("docsOverview"), IR = PR ? "docsOverview" : "welcome", oR = null !== PR && void 0 !== PR ? PR : JR, lR = (0, Hw.f)("aiHelperOverview"), FR = lR ? "aiHelperOverview" : "welcome", fR = null !== lR && void 0 !== lR ? lR : JR, QR = (0, CW.useRef)(!1), rM = (0, CW.useRef)(!1), cM = (0, CW.useRef)(null), [XR, jM] = (0, CW.useState)(""), [kM, aM] = (0, CW.useState)(!1), [sR, dR] = (0, CW.useState)(null), pR = (0, cR.h)("connectedGame"), hR = BW && gM && "classic" === pR.gameNameWithVariation && !(0, zC.F)(pR.lobbyName), [UR, ER] = (0, CW.useState)(null), [VR, mM] = (0, CW.useState)({
          [Aw.k]: ""
        }), [xM, vM] = (0, CW.useState)({
          assets: {},
          revision: 0
        }), KR = (0, CW.useRef)(xM), uR = (0, CW.useCallback)((WW => {
          var RW;
          WW.revision < KR.current.revision || (KR.current = WW, vM(WW), FW(WW.startupError ? `Schematics could not load: ${WW.startupError}` : ""), null === (RW = tw.current) || void 0 === RW || RW.onLobbyFilesChanged({
            ...zw.current,
            ...(0, Jw.k)(WW.assets)
          }))
        }), []), [OR, nR] = (0, CW.useState)(Aw.k), [GR, LR] = (0, CW.useState)(null), [HR, DR] = (0, CW.useState)(null), qM = (0, CW.useRef)(!1), ZR = (0, CW.useRef)(null), SR = (0, CW.useRef)(OR);
        SR.current = OR;
        const WM = (0, CW.useRef)(GR);
        WM.current = GR;
        const RM = GR ? null : sR,
          MM = RM && !RM.engineLocked ? RM.worldCodeEngine : null,
          wM = (0, CW.useRef)(HR);
        wM.current = HR;
        const zw = (0, CW.useRef)(VR);
        zw.current = VR;
        const AM = (0, CW.useRef)(null),
          bw = (0, CW.useRef)(null),
          [yw, NM] = (0, CW.useState)(!1),
          eM = (0, Xw.o)(),
          BM = (0, CW.useRef)([]),
          tw = (0, CW.useRef)(null),
          TM = (0, CW.useRef)(null),
          gw = (0, CW.useRef)(null);

        function iw(WW) {
          oW(WW), clearTimeout(cM.current), cM.current = setTimeout((() => {
            oW({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const JM = (0, CW.useCallback)((function() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            qM.current && ZR.current && (NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.Leave,
              tV: (0, bC.u)(ZR.current),
              vmW: !!WW || null
            }), qM.current = !1, ZR.current = null), ER(null)
          }), []),
          PM = (0, CW.useCallback)((WW => {
            const RW = {
              kind: "lobby",
              path: WW
            };
            ZR.current = RW, nR(WW), tR.current = "", NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.Join,
              tV: (0, bC.u)(RW)
            }), qM.current = !0
          }), []),
          IM = (0, CW.useCallback)((WW => {
            var RW;
            const MW = null === (RW = TM.current) || void 0 === RW ? void 0 : RW.collabState;
            return MW && "lobby" === MW.docKey.kind && MW.docKey.path === WW && SR.current === WW ? Promise.resolve({
              doc: MW.doc,
              version: MW.version,
              clientID: MW.clientID,
              docKey: MW.docKey,
              httpConfig: MW.httpConfig
            }) : new Promise(((RW, MW) => {
              const wW = setTimeout((() => {
                  BM.current = BM.current.filter((WW => WW !== CW)), MW(new Error(`Timed out joining ${WW}`))
                }), 15e3),
                CW = MW => {
                  "lobby" === MW.docKey.kind && MW.docKey.path === WW && (clearTimeout(wW), BM.current = BM.current.filter((WW => WW !== CW)), RW(MW))
                };
              BM.current.push(CW), SR.current !== WW ? (JM(!0), PM(WW)) : qM.current || PM(WW)
            }))
          }), [PM, JM]),
          oM = (0, CW.useCallback)((async function(WW, RW) {
            let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const wW = Date.now();
            let CW = WW in zw.current;
            for (; CW !== RW;) {
              if (Date.now() - wW > MW) throw new Error(`Timed out waiting for lobby path ${WW} present=${RW}`);
              await (0, YM.U)(50), CW = WW in zw.current
            }
          }), []),
          lM = (0, CW.useCallback)((WW => {
            const RW = zw.current,
              MW = Aw.k in RW && Aw.n in RW;
            if (!(0, yC.h)(WW) || MW) {
              if (SR.current === WW) {
                var wW;
                const CW = MW && (0, yC.h)(WW) ? WW === Aw.k ? Aw.n : Aw.k : null !== (wW = (0, yC.b)(RW)) && void 0 !== wW ? wW : Aw.k;
                bw.current = {
                  fromPath: WW,
                  toPath: CW
                }, nR(CW)
              }
              NW.gameBridge.send("sendCodeCollab", {
                yV: bC.d.DeleteFile,
                tV: (0, bC.u)({
                  kind: "lobby",
                  path: SR.current
                }),
                KV: WW
              })
            }
          }), []),
          FM = (0, CW.useCallback)((WW => {
            GW.current = null, LR(null), DR(null), !BW || WW === SR.current && qM.current || (JM(!0), PM(WW))
          }), [BW, JM, PM]),
          fM = (0, CW.useCallback)(((WW, RW) => {
            const MW = iC.d[WW],
              wW = MW && RW in MW.files ? RW : "index.ts";
            if (WW !== WM.current || wW !== wM.current) {
              var CW;
              if (WW !== WM.current) null === (CW = tw.current) || void 0 === CW || CW.stopContinuousSync(), JM(!0);
              LR(WW), DR(wW)
            }
          }), [JM]),
          QM = (0, CW.useCallback)((WW => {
            var RW;
            const MW = SR.current,
              wW = zw.current[MW],
              CW = qM.current && !WM.current && MW in WW && void 0 !== wW ? {
                ...WW,
                [MW]: wW
              } : WW;
            mM(CW);
            const zR = AM.current;
            if (zR && zR in WW) AM.current = null, zR !== SR.current && FM(zR);
            else if (!(SR.current in WW) && qM.current && !WM.current) {
              var AW;
              FM(null !== (AW = (0, yC.b)(WW)) && void 0 !== AW ? AW : Aw.k)
            }
            null === (RW = tw.current) || void 0 === RW || RW.onLobbyFilesChanged({
              ...CW,
              ...(0, Jw.k)(KR.current.assets)
            })
          }), [FM]),
          rw = (0, CW.useCallback)((() => PC(SR.current).then((async WW => {
            if (!qM.current || !WW.files) return null;
            QM(WW.files);
            const RW = await Ew({
              action: "state"
            });
            return uR(RW), {
              ...WW.files,
              ...(0, Jw.k)(RW.assets)
            }
          })).catch((WW => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", WW), iw({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [QM, uR]),
          cwW = () => {
            bR()
          };
        (0, CW.useEffect)((() => {
          if (FW(""), !wW || !BW) return;
          let WW = !1;
          return KR.current = {
            assets: {},
            revision: 0
          }, vM(KR.current), Ew({
            action: "state"
          }).then((RW => {
            WW || uR(RW)
          })).catch((RW => {
            console.error("Could not load project schematics", RW), WW || FW("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            WW = !0
          }
        }), [wW, BW, uR]);
        const XM = (0, CW.useCallback)((() => {
            ZR.current && NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.Submit,
              tV: (0, bC.u)(ZR.current)
            })
          }), []),
          jw = (0, CW.useCallback)((() => {
            if (!ZR.current || "lobby" !== ZR.current.kind) return;
            const WW = XR.trim();
            (0, Nw.p)(WW) ? (NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.ReloadAsVariation,
              tV: (0, bC.u)(ZR.current),
              lE: WW
            }), aM(!1)) : iw({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [XR]),
          kw = (0, CW.useCallback)((WW => {
            NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.SetEngine,
              tV: (0, bC.u)({
                kind: "lobby",
                path: SR.current
              }),
              lE: WW
            })
          }), []),
          aw = (0, CW.useCallback)((WW => {
            if (!WM.current && gM && (PW.current || BW)) {
              if (BW) {
                var RW;
                const MW = (0, yC.o)(zw.current, SR.current),
                  wW = Math.min(xR.B, Math.max(0, xR.J - MW)),
                  CW = WW.slice(0, wW);
                return tR.current = CW, mM((WW => ({
                  ...WW,
                  [SR.current]: CW
                }))), void(null === (RW = tw.current) || void 0 === RW || RW.onDocTextChanged(SR.current, CW))
              }
              tR.current = WW, NR(WW)
            }
          }), [gM, BW]);
        (0, QW.f)("EditLobbyCode", (WW => {
          var RW;
          sW.featureFlags.canSeePlayerWrittenText && BW && (JM(), JW(WW), tR.current = "", mM({
            [Aw.k]: ""
          }), dR(null), nR(Aw.k), LR(null), DR(null), AM.current = null, bw.current = null, null === (RW = tw.current) || void 0 === RW || RW.stopContinuousSync(), zR(), PM(Aw.k))
        })), (0, QW.f)("EditCodeBlock", (WW => {
          let {
            pos: RW,
            canChangePos: MW
          } = WW;
          if (sW.featureFlags.canSeePlayerWrittenText && !BW)
            if (JM(), null !== RW && (RW = [...RW]), JW(RW), PW.current = MW, null !== RW) {
              tR.current = "", NR(""), zR();
              const WW = {
                  kind: "codeBlock",
                  pos: RW
                },
                wW = (0, bC.u)(WW);
              eR.current !== wW && (eR.current = wW, wR([]), bM(CR)), tM((0, tz.c)(wW, [RW[0], RW[1], RW[2]], !!MW)), ZR.current = WW, NW.gameBridge.send("sendCodeCollab", {
                yV: bC.d.Join,
                tV: (0, bC.u)(WW)
              }), qM.current = !0
            } else wW && bR()
        })), (0, QW.f)("codeCollabRejoin", (WW => {
          const RW = ZR.current ? (0, bC.u)(ZR.current) : null;
          RW && WW.docKey === RW && (tR.current = WW.doc, BW || NR(WW.doc), ER((RW => RW ? {
            ...RW,
            doc: WW.doc,
            version: WW.version,
            clientID: (0, gC.b)()
          } : RW)))
        })), (0, QW.f)("codeCollab", (WW => {
          var RW;
          const MW = ZR.current ? (0, bC.u)(ZR.current) : null;
          if (WW.type === bC.e.LobbyFilesChanged && BW) {
            if ("string" !== typeof WW.files) return void rw();
            try {
              QM(JSON.parse(WW.files))
            } catch (NW) {
              console.error("[CodeCollab] Failed to parse lobby files", NW), rw()
            }
            return
          }
          if (WW.type === bC.e.EngineSettings && BW) return void dR(Kw(WW.engineSettings));
          const CW = WW.type === bC.e.Joined ? (0, bC.k)(WW.docKey) : null,
            zR = BW && "lobby" === (null === (RW = ZR.current) || void 0 === RW ? void 0 : RW.kind) && (0, yC.h)(ZR.current.path) && "lobby" === (null === CW || void 0 === CW ? void 0 : CW.kind) && (0, yC.h)(CW.path);
          if (!MW || WW.docKey === MW || zR)
            if (WW.type !== bC.e.ForceClose) {
              if (wW)
                if (WW.type === bC.e.Joined) {
                  var AW;
                  const eW = JSON.parse(WW.peers),
                    TW = WW.existingCursors ? JSON.parse(WW.existingCursors) : [],
                    gR = (0, gC.b)(),
                    YW = Uw(),
                    {
                      gsUrl: JW,
                      gameNameWithVariation: PW,
                      lobbyName: IW
                    } = YW,
                    lW = null !== (AW = (0, bC.k)(WW.docKey)) && void 0 !== AW ? AW : ZR.current;
                  lW && (ZR.current = lW, "lobby" === lW.kind && (nR(lW.path), SR.current = lW.path));
                  const FW = lW || (BW ? {
                    kind: "lobby",
                    path: SR.current
                  } : {
                    kind: "codeBlock",
                    pos: iR
                  });

                  function fW(RW) {
                    var MW, wW;
                    if (!qM.current) return;
                    const CW = null !== (MW = RW.code) && void 0 !== MW ? MW : "",
                      zR = null !== (wW = RW.collabVersion) && void 0 !== wW ? wW : 0;
                    tR.current = CW, BW || NR(CW), BW && RW.files ? mM(RW.files) : BW && mM((WW => ({
                      ...WW,
                      [SR.current]: CW
                    })));
                    const AW = {
                      doc: CW,
                      version: zR,
                      clientID: gR,
                      docKey: FW,
                      peers: eW,
                      editorCount: WW.editorCount,
                      existingCursors: TW,
                      httpConfig: YW
                    };
                    if (ER(AW), "lobby" === FW.kind) {
                      var bR;
                      const WW = {
                        doc: CW,
                        version: zR,
                        clientID: gR,
                        docKey: FW,
                        httpConfig: YW
                      };
                      for (const RW of [...BM.current]) RW(WW);
                      null === (bR = tw.current) || void 0 === bR || bR.startWhenReady()
                    }
                    RW.canSeeCode ? (clearTimeout(cM.current), oW({
                      message: null,
                      type: null
                    })) : function(WW) {
                      clearTimeout(cM.current), oW(WW)
                    }(lC);
                    const yR = GW.current;
                    GW.current = null, BW && yR && RW.files && yR in RW.files && yR !== SR.current && FM(yR)
                  }
                  BW ? PC(SR.current).then(fW).catch((WW => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", WW), JM()
                  })) : (0, Cw.postJsonWithMetricsCookiesAndJsonResponse)(`${JW}/code/get-code-block`, ww.Bj["get-code-block"].toBuffer({
                    gameNameWithVariation: PW,
                    lobbyName: IW,
                    pos: iR
                  }), {
                    retries: 1
                  }).then(fW).catch((WW => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", WW), JM()
                  }))
                } else if (WW.type === bC.e.Presence) {
                if (!MW) return;
                const QW = JSON.parse(WW.peers);
                ER((RW => RW ? {
                  ...RW,
                  peers: QW,
                  editorCount: WW.editorCount
                } : RW))
              }
            } else {
              var yR;
              if (!MW) return;
              const rR = ZR.current;
              qM.current = !1, ZR.current = null, ER(null);
              if (!BW || "close" === WW.updates) return (0, eC.h)(), void(wW && bR());
              if (!wW) return;
              const cR = zw.current,
                XW = bw.current;
              bw.current = null;
              const jR = "lobby" === (null === rR || void 0 === rR ? void 0 : rR.kind) && rR.path === (null === XW || void 0 === XW ? void 0 : XW.fromPath),
                kR = XW && (jR || XW.toPath in cR || (0, yC.h)(XW.toPath)) ? XW.toPath : SR.current in cR ? SR.current : null !== (yR = (0, yC.b)(cR)) && void 0 !== yR ? yR : Aw.k;
              PM(kR)
            }
        })), (0, QW.f)("refetchCode", (() => {
          sW.featureFlags.canSeePlayerWrittenText && wW && qM.current && (gM || (JM(), BW ? gR.k.Sz("EditLobbyCode", iR) : gR.k.Sz("EditCodeBlock", {
            pos: iR,
            canChangePos: PW.current
          })))
        }));
        const sM = (0, CW.useCallback)((() => {
            wW && (EW(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [wW]),
          dM = (0, CW.useCallback)((() => {
            EW(!1)
          }), []);
        (0, CW.useEffect)((() => {
          wW && gM && ("docsButton" === oR && UW ? (0, Dw.f)("docsButton") : oR && Dw.g.includes(oR) && !UW && (EW(!0), ZW(!1)))
        }), [wW, gM, oR, UW, ZW]);
        const pM = (0, CW.useCallback)((() => {
          ZW(!1)
        }), [ZW]);
        (0, CW.useEffect)((() => {
          wW && gM && TR && ("aiHelperButton" === fR && qR ? (0, Dw.f)("aiHelperButton") : fR && Dw.d.includes(fR) && !qR && (ZW(!0), EW(!1)))
        }), [wW, gM, TR, fR, qR, ZW]), (0, CW.useEffect)((() => {
          if (!wW || !gM) return;
          const WW = BW ? "worldCode" : "codeBlock";
          return (0, Dw.z)(WW, !0), () => {
            (0, Dw.z)(WW, !1)
          }
        }), [wW, gM, BW]), (0, CW.useEffect)((() => {
          if (wW) return () => {
            QR.current ? QR.current = !1 : (0, Dw.v)()
          }
        }), [wW]), (0, CW.useEffect)((() => {
          (0, Dw.C)("exportButton", !!iM)
        }), [iM]);
        const {
          t: hM
        } = (0, RR.C)(), UM = !qR && CR > AR, EM = UM ? TW.E : TW.v, VM = (0, CW.useCallback)(((WW, RW) => {
          gR.k.Sz("CodeEditorGoToLine", {
            path: WW,
            line: RW
          }), FM(WW)
        }), [FM]), mw = (0, CW.useCallback)((WW => {
          gw.current = WW
        }), []), xw = function(WW, RW) {
          const [MW, wW] = (0, CW.useState)(null);
          return (0, CW.useEffect)((() => {
            if (!RW) return void wW(null);
            let MW = !1;
            return cC(WW).then((WW => {
              MW || wW(WW)
            }), (WW => {
              console.error("[CodeEditor] could not collect the imported plugins", WW), MW || wW(null)
            })), () => {
              MW = !0
            }
          }), [WW, RW]), MW
        }(VR, wW);
        (0, CW.useEffect)((() => {
          xw && GR && !xw.includes(GR) && (LR(null), DR(null), BW && !qM.current && PM(SR.current))
        }), [GR, xw, BW, PM]), TM.current = {
          collabState: UR,
          ensureJoinedPath: IM,
          waitForLobbyPath: oM,
          pullLobbyFiles: rw,
          t: hM,
          canEditCode: !!gM
        }, tw.current || (tw.current = new pw({
          getLobbyFiles: () => ({
            ...zw.current,
            ...(0, Jw.k)(KR.current.assets)
          }),
          deleteSchematic: async WW => {
            const RW = await Ew({
              action: "remove",
              path: WW,
              expectedRevision: KR.current.revision
            });
            uR(RW)
          },
          getActivePath: () => SR.current,
          getCollabSnapshot: () => {
            var WW;
            if (WM.current) return null;
            const RW = null === (WW = TM.current) || void 0 === WW ? void 0 : WW.collabState;
            return RW ? {
              doc: RW.doc,
              version: RW.version,
              clientID: RW.clientID,
              docKey: RW.docKey,
              httpConfig: RW.httpConfig
            } : null
          },
          replaceActiveDoc: (WW, RW) => {
            var MW, wW;
            return null !== (MW = null === (wW = gw.current) || void 0 === wW ? void 0 : wW.call(gw, WW, RW)) && void 0 !== MW && MW
          },
          ensureJoined: WW => TM.current.ensureJoinedPath(WW),
          createFile: (WW, RW) => {
            !1 !== (null === RW || void 0 === RW ? void 0 : RW.focus) && (AM.current = WW), NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.CreateFile,
              tV: (0, bC.u)({
                kind: "lobby",
                path: SR.current
              }),
              KV: WW
            })
          },
          renameFile: (WW, RW) => {
            const MW = (0, bC.u)({
              kind: "lobby",
              path: SR.current
            });
            SR.current === WW && (bw.current = {
              fromPath: WW,
              toPath: RW
            }, nR(RW)), NW.gameBridge.send("sendCodeCollab", {
              yV: bC.d.RenameFile,
              tV: MW,
              KV: WW,
              GV: RW
            })
          },
          deleteFile: WW => {
            lM(WW)
          },
          waitForLobbyPath: (WW, RW, MW) => TM.current.waitForLobbyPath(WW, RW, MW),
          pullLobbyFiles: () => TM.current.pullLobbyFiles(),
          setMessage: (WW, RW) => {
            iw({
              message: WW,
              type: RW
            })
          },
          onUnlinked: () => {
            NM(!1)
          },
          t: WW => TM.current.t(WW),
          canEditCode: () => TM.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: WW,
              lobbyName: RW
            } = NW.gameBridge.latest("connectedGame");
            return (0, Xw.e)(WW, RW)
          }
        }));
        const vw = (0, CW.useCallback)((async WW => {
            const RW = tw.current;
            if (!RW) return !1;
            try {
              return await RW.writeLobbyFiles(WW)
            } catch (MW) {
              return console.error("World Code AI: couldn't write the change", MW), !1
            }
          }), []),
          KM = (0, CW.useCallback)((async WW => {
            var RW, MW;
            const wW = null === (RW = WW.find((WW => WW.path === NC.e))) || void 0 === RW ? void 0 : RW.text,
              CW = ZR.current;
            return void 0 !== wW && "codeBlock" === (null === CW || void 0 === CW ? void 0 : CW.kind) && (!(null === (MW = gw.current) || void 0 === MW || !MW.call(gw, (0, bC.u)(CW), wW)) && (tR.current = wW, NR(wW), !0))
          }), []),
          uM = (0, CW.useCallback)((async () => {
            try {
              var WW, RW;
              const MW = await PC(Aw.k);
              return !1 === MW.canSeeCode ? null : null !== (WW = MW.files) && void 0 !== WW ? WW : {
                [Aw.k]: null !== (RW = MW.code) && void 0 !== RW ? RW : ""
              }
            } catch (MW) {
              return console.error("World Code AI: couldn't read World Code for a code block", MW), null
            }
          }), []),
          OM = (0, CW.useMemo)((() => ({
            [NC.e]: yM
          })), [yM]),
          GM = (0, CW.useCallback)(((WW, RW) => {
            gR.k.Sz("CodeEditorGoToLine", {
              path: NC.e,
              line: RW
            })
          }), []);
        (0, CW.useEffect)((() => {
          qR && wW && bM(CR)
        }), [qR, wW, CR]);
        const LM = (0, CW.useCallback)((() => {
            var WW, RW;
            XM();
            const MW = (0, sW.isTouchscreen)() ? "open World Code again" : `press ${null!==(WW=null===(RW=uW.q.OpenCodeEditor)||void 0===RW?void 0:RW[0])&&void 0!==WW?WW:"F8"}`,
              wW = BW ? `\ud83e\udd16 Try out your change, then ${MW} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            gR.k.Sz("chat", {
              content: [{
                str: wW,
                style: {
                  color: rR.G.cyanUiText
                }
              }]
            })
          }), [XM, BW]),
          HM = (0, CW.useCallback)((WW => {
            const RW = iR,
              MW = PW.current;
            BW || !RW || NW.gameBridge.lookup("codeBlockClickable", RW) ? (0, eC.j)(WW, {
              submit: () => {
                XM(), gR.k.Sz("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: rR.G.cyanUiText
                    }
                  }]
                }), !BW && RW && setTimeout((() => {
                  NW.gameBridge.send("clickCodeBlock", RW)
                }), 1e3)
              },
              reopen: () => {
                (0, BC.o)() || (BW ? gR.k.Sz("EditLobbyCode", RW) : gR.k.Sz("EditCodeBlock", {
                  pos: RW,
                  canChangePos: MW
                }))
              }
            }) : LM()
          }), [XM, BW, iR, LM]),
          DM = (0, CW.useCallback)((() => {
            ZW(!1)
          }), [ZW]),
          qw = (0, CW.useRef)(cwW);
        qw.current = cwW;
        const ZM = (0, CW.useCallback)((function(WW) {
            let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            gR.k.Sz("WorldCodeAiDraft", {
              text: WW,
              send: RW
            }), qw.current(), gR.k.Sz("EditLobbyCode", iR)
          }), [iR]),
          SM = (0, CW.useCallback)((WW => {
            qw.current(), WW.codeBlock ? gR.k.Sz("EditCodeBlock", {
              pos: [...WW.pos],
              canChangePos: WW.canChangePos
            }) : gR.k.Sz("EditLobbyCode", iR)
          }), [iR]);
        (0, QW.f)("WorldCodeAiDraft", (WW => {
          BW && (WR(WW), ZW(!0))
        }));
        const Ww = !!gM && !!oR && Dw.g.includes(oR);
        (0, CW.useEffect)((() => {
          wW && qR && TR && !Ww && EW(!1)
        }), [wW, qR, TR, Ww]);
        const Rw = (0, CW.useCallback)((() => {
            WR(null)
          }), []),
          [Mw, tC] = (0, CW.useState)(null);
        (0, QW.f)("WorldCodeAiSelection", (WW => {
          wW && (tC(WW), ZW(!0), EW(!1))
        }));
        const Yw = (0, CW.useCallback)((() => {
          tC(null)
        }), []);
        (0, QW.f)("chat", (WW => {
          let {
            content: RW
          } = WW;
          if (!BW && null === eR.current) return;
          const MW = Array.isArray(RW) ? RW : [RW],
            wW = MW.some((WW => {
              var RW;
              return (null === WW || void 0 === WW || null === (RW = WW.style) || void 0 === RW ? void 0 : RW.color) === rR.G.redUiText
            })),
            CW = MW.map((WW => {
              var RW;
              const MW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.str) && void 0 !== RW ? RW : WW;
              return "string" === typeof MW ? MW : ""
            })).join("");
          wW && /world code|error/i.test(CW) && (wR((WW => [...WW, CW].slice(-10))), zM((WW => WW + 1)), (0, eC.f)(CW))
        })), (0, CW.useEffect)((() => {
          if (!wW || !BW || !eM) return;
          let WW = !1;
          return (async (RW, MW) => {
            const wW = await (null === (RW = tw.current) || void 0 === RW ? void 0 : RW.tryRestoreHandle());
            !WW && wW && (NM(!0), null === (MW = tw.current) || void 0 === MW || MW.startWhenReady())
          })(), () => {
            WW = !0
          }
        }), [wW, BW, eM]), (0, CW.useEffect)((() => {
          var WW;
          wW || (null === (WW = tw.current) || void 0 === WW || WW.stopContinuousSync(), JM(!1), rM.current && (rM.current = !1, NW.gameBridge.send("sendChatMessage", {
            PA: "//export",
            channelName: null
          })))
        }), [wW, JM]);
        const Pw = (0, CW.useCallback)((async () => {
            if (eM && tw.current) try {
              if (!await tw.current.linkFolder()) return;
              NM(!0), await tw.current.startWhenReady()
            } catch (WW) {
              console.error("[WorldCodeDirectorySync] Link failed", WW), iw({
                message: hM("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [eM, hM]),
          Iw = (0, CW.useCallback)((async () => {
            tw.current && await tw.current.unlinkFolder()
          }), []),
          lw = (0, CW.useCallback)((() => {
            eM ? yw ? Iw() : Pw() : Bw.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [eM, yw, Pw, Iw]);
        return (0, eW.jsxs)(AW.b, {
          className: YR()("CodeEditorBg", {
            CodeEditorLight: aR
          }),
          close: cwW,
          escDoesExit: !0,
          show: wW,
          togglePointerLock: !1,
          globallyUniqueKey: BW ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, eW.jsx)(Hw.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: hM("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!gM && !BW
          }), (0, eW.jsx)(Hw.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, eW.jsxs)(eW.Fragment, {
              children: [(0, eW.jsx)("p", {
                children: hM("codeEditor:tutorialWorldCodeWelcome")
              }), (0, eW.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, eW.jsx)("li", {
                  children: hM("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, eW.jsx)("li", {
                  children: hM("codeEditor:tutorialWorldCodeUseReact")
                }), (0, eW.jsx)("li", {
                  children: hM("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!gM && BW
          }), (0, eW.jsx)("div", {
            className: "CodeEditorTitle",
            children: BW ? "World Code" : "Code Block"
          }), (0, eW.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, eW.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, eW.jsx)(nM.e, {
                tooltipInner: hM(iM ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: iM ? void 0 : 0,
                hideTooltip: "exportButton" === JR,
                children: (0, eW.jsx)(Hw.d, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: hM("codeEditor:tutorialExport"),
                  enabled: !!gM,
                  children: (0, eW.jsx)(TW.m, {
                    className: "CodeEditorButton",
                    disabled: !iM,
                    onClick: () => {
                      "exportButton" === JR && ((0, Dw.f)("exportButton"), QR.current = !0), rM.current = !0, cwW()
                    },
                    padDestructive: !0,
                    children: hM("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, eW.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [gM && (0, eW.jsx)(nM.e, {
                tooltipInner: hM("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === JR,
                children: (0, eW.jsx)(Hw.d, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: hM("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, eW.jsx)(TW.h, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: hM("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, Dw.f)("helpButton"), Bw.NotificationProvider.showCustomPopup({
                        body: WW => (0, eW.jsx)(qC, {
                          close: WW
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, eW.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, eW.jsx)(YW.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, eW.jsx)(nM.e, {
                tooltipInner: hM("codeEditor:closeTooltip"),
                children: (0, eW.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    cwW()
                  },
                  children: (0, eW.jsx)(TW.l, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, eW.jsx)(Tw, {
            peers: null !== (RW = null === UR || void 0 === UR ? void 0 : UR.peers) && void 0 !== RW ? RW : []
          }), (0, eW.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [VW && OW && (0, eW.jsx)(wC, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, eW.jsx)(MC, {
                inputRef: vR,
                close: () => {
                  mR(!1)
                }
              })
            }), BW && (0, eW.jsx)(ow, {
              schematics: xM.assets,
              onManageSchematic: WW => {
                gM && Bw.NotificationProvider.showCustomPopup({
                  body: RW => (0, eW.jsx)(vC, {
                    initialPath: WW,
                    onChanged: uR,
                    onClose: RW
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: VR,
              activePath: OR,
              canEdit: !!gM,
              directoryLinked: yw,
              pluginNames: null !== xw && void 0 !== xw ? xw : oC,
              activePluginName: GR,
              activePluginFile: HR,
              onSelect: FM,
              onSelectPlugin: fM,
              onToggleDirectorySync: lw,
              onCreate: WW => {
                AM.current = WW, NW.gameBridge.send("sendCodeCollab", {
                  yV: bC.d.CreateFile,
                  tV: (0, bC.u)({
                    kind: "lobby",
                    path: SR.current
                  }),
                  KV: WW
                })
              },
              onRename: (WW, RW) => {
                SR.current === WW && (bw.current = {
                  fromPath: WW,
                  toPath: RW
                }, nR(RW)), NW.gameBridge.send("sendCodeCollab", {
                  yV: bC.d.RenameFile,
                  tV: (0, bC.u)({
                    kind: "lobby",
                    path: SR.current
                  }),
                  KV: WW,
                  GV: RW
                })
              },
              onRenameFolder: (WW, RW) => {
                const [MW] = (0, yC.n)([SR.current], WW, RW);
                MW && (bw.current = {
                  fromPath: MW[0],
                  toPath: MW[1]
                }, nR(MW[1])), NW.gameBridge.send("sendCodeCollab", {
                  yV: bC.d.RenameFolder,
                  tV: (0, bC.u)({
                    kind: "lobby",
                    path: SR.current
                  }),
                  KV: WW,
                  GV: RW
                })
              },
              onDelete: lM
            }), (0, eW.jsx)("div", {
              className: YR()("CodeEditorMessage", {
                CodeEditorMessageHidden: !fW.message,
                CodeEditorMessageSuccess: "success" === fW.type
              }),
              children: fW.message && (0, eW.jsx)("div", {
                className: "CodeEditorMessageText",
                children: fW.message
              })
            }), (0, eW.jsx)(CW.Suspense, {
              fallback: (0, eW.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, eW.jsx)(XW.d, {})
              }),
              children: (0, eW.jsx)(TC, {
                isLobbyCode: BW,
                code: UR ? UR.doc : tR.current,
                files: BW ? VR : void 0,
                activePath: BW ? OR : void 0,
                pluginName: GR,
                pluginFile: HR,
                pluginSource: GR && HR ? null === (MW = iC.d[GR]) || void 0 === MW ? void 0 : MW.files[HR] : void 0,
                onChange: aw,
                canEditCode: gM,
                setTemporaryMessage: iw,
                close: cwW,
                showTooltips: jR,
                lightMode: aR,
                collabState: UR,
                setActiveDocReplacer: mw,
                showAiHints: TR && pW,
                canAiChangeCode: !!gM && (BW || !!PW.current),
                onRemoteDocChange: WW => {
                  var RW;
                  (tR.current = WW, BW) ? (mM((RW => ({
                    ...RW,
                    [SR.current]: WW
                  }))), null === (RW = tw.current) || void 0 === RW || RW.onDocTextChanged(SR.current, WW)) : NR(WW)
                }
              })
            }), UW && (0, eW.jsx)(wC, {
              side: "right",
              defaultWidth: "40%",
              children: (0, eW.jsx)(CW.Suspense, {
                fallback: (0, eW.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, eW.jsx)(XW.d, {})
                }),
                children: (0, eW.jsx)(gz, {
                  popOutDocs: sM,
                  hideDocs: dM,
                  tutorialEnabled: !!gM
                })
              })
            }), qR && BR && TR && (0, eW.jsx)(wC, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, eW.jsx)(CW.Suspense, {
                fallback: (0, eW.jsx)(XW.d, {}),
                children: (0, eW.jsx)(iz, {
                  target: BR,
                  chatKey: `${pR.gameNameWithVariation}/${pR.lobbyName}/aiHelper`,
                  historyKey: `${pR.gameNameWithVariation}/${pR.lobbyName}/${BR.key}`,
                  files: BR.codeBlock ? OM : VR,
                  activePath: BR.codeBlock ? NC.e : OR,
                  canEdit: !!gM && (BR.codeBlock ? !!PW.current : !GR),
                  isLoaded: null !== UR,
                  errors: MR,
                  errorCount: CR,
                  applyFiles: BR.codeBlock ? KM : vw,
                  submit: LM,
                  testRun: HM,
                  close: DM,
                  goToLine: BR.codeBlock ? GM : VM,
                  openWorldCode: BR.codeBlock ? ZM : void 0,
                  readWorldCode: BR.codeBlock ? uM : void 0,
                  viewChunk: YC,
                  viewGameState: JC,
                  openTarget: gM ? SM : void 0,
                  draft: SW,
                  onDraftUsed: Rw,
                  selection: Mw,
                  onSelectionUsed: Yw
                }, BR.key)
              })
            })]
          }), (null === RM || void 0 === RM ? void 0 : RM.fallback) && (0, eW.jsx)(uw, {
            fallback: RM.fallback,
            onGoToLine: VM
          }), (0, eW.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, eW.jsx)(nM.e, {
              tooltipInner: hM(aR ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, eW.jsx)(TW.h, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: hM(aR ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  dW(!aR)
                },
                children: (0, eW.jsx)(YW.e, {
                  name: aR ? "moon" : "sun-bright"
                })
              })
            }), (0, eW.jsx)(nM.e, {
              tooltipInner: hM("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.m, {
                className: "CodeEditorButton",
                onClick: XM,
                padDefaultFocus: !0,
                children: hM("codeEditor:submitCode")
              })
            }), (0, eW.jsx)(nM.e, {
              tooltipInner: hM(UW ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === oR || "hideDocsButton" === oR,
              children: (0, eW.jsx)(Hw.d, {
                tutorial: IR,
                step: UW ? "hideDocsButton" : "docsButton",
                text: hM(UW ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!gM,
                placement: "top",
                waitForClick: !0,
                onPrevious: UW && "welcome" === IR ? dM : void 0,
                children: (0, eW.jsx)(TW.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, Dw.f)(UW ? "hideDocsButton" : "docsButton"), EW(!UW), ZW(!1)
                  },
                  children: hM(UW ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), TR && (0, eW.jsx)(Hw.d, {
              tutorial: FR,
              step: qR ? "hideAiHelperButton" : "aiHelperButton",
              text: hM(qR ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === FR ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!gM,
              placement: "top",
              waitForClick: !0,
              onPrevious: qR && "welcome" === FR ? pM : void 0,
              children: (0, eW.jsx)(EM, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, Dw.f)(qR ? "hideAiHelperButton" : "aiHelperButton"), ZW(!qR), EW(!1)
                },
                children: qR ? "Hide AI Helper" : UM ? "Fix error with AI" : "AI Helper"
              })
            }), OW && (0, eW.jsx)(nM.e, {
              tooltipInner: hM(VW ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.v, {
                className: "CodeEditorButton",
                onClick: () => {
                  KW.current = !VW, mR(!VW)
                },
                children: hM(VW ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, eW.jsx)(nM.e, {
              tooltipInner: hM("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  gR.k.Sz("FormatCode")
                },
                children: hM("codeEditor:formatCode")
              })
            }), (0, eW.jsx)(nM.e, {
              tooltipInner: hM("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(tR.current).then((() => {
                    iw({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    iw({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: hM("codeEditor:copyCode")
              })
            }), (0, eW.jsx)(nM.e, {
              tooltipInner: hM(jR ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.h, {
                className: "CodeEditorButton",
                onClick: () => {
                  kR(!jR)
                },
                children: hM(jR ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !BW && (0, eW.jsx)(nM.e, {
              tooltipInner: hM("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === JR,
              children: (0, eW.jsx)(Hw.d, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: hM("codeEditor:tutorialWorldCodeButton"),
                enabled: !!gM,
                placement: "top",
                waitForClick: !0,
                children: (0, eW.jsx)(TW.v, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === JR && ((0, Dw.f)("worldCodeButton"), QR.current = !0), cwW(), gR.k.Sz("EditLobbyCode", iR)
                  },
                  children: hM("codeEditor:worldCode")
                })
              })
            }), (hR || MM || TR) && (0, eW.jsx)(nM.e, {
              tooltipInner: hM("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, eW.jsx)(TW.h, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  aM(!0)
                },
                children: (0, eW.jsx)(YW.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), kM && (0, eW.jsx)(ew.b, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              aM(!1)
            },
            body: (0, eW.jsx)(Lw, {
              engine: MM,
              onSetEngine: kw,
              aiHints: TR ? {
                shown: pW,
                setShown: hW
              } : null,
              variation: hR ? {
                name: XR,
                setName: jM,
                reload: jw
              } : null
            })
          })]
        })
      })),
      fC = new Set(["makeReport", "makeDiscordReport", "inviteLink"]),
      QC = (0, CW.memo)((function() {
        const {
          openEverythingMenuName: WW,
          openInGameMenuName: RW
        } = (0, CM.i)(["openEverythingMenuName", "openInGameMenuName"]), MW = (0, cR.h)("fullInventory"), zR = (0, CW.useRef)(null);
        (0, QW.f)("toggleMenu", (WW => {
          var RW;
          const MW = CM.b.get("openInGameMenuName");
          let wW = null === WW || void 0 === WW ? void 0 : WW.split("|")[0];
          const CW = null !== (RW = null === WW || void 0 === WW ? void 0 : WW.split("|")[1]) && void 0 !== RW ? RW : null;
          ("closeCurrentMenu" === CW && MW || wW === MW) && (zR.current = null, wW = null);
          const AW = "closeCurrentMenu" === CW ? null : CW;
          zR.current !== AW && (zR.current = AW), null !== wW && (0, OM.n)("InGameMenu"), CM.b.set({
            openInGameMenuName: wW
          })
        }));
        const AW = (0, CW.useCallback)((WW => () => {
            gR.k.Sz("toggleMenu", WW)
          }), []),
          bR = (0, CW.useRef)({
            cantCrouchIfNotFullscreen: AW("cantCrouchIfNotFullscreen"),
            makeReport: AW("makeReport"),
            makeDiscordReport: AW("makeDiscordReport"),
            editBook: AW("editBook"),
            editNameTag: AW("editNameTag"),
            inventory: AW("inventory"),
            inviteLink: AW("inviteLink"),
            writeOnBoard: AW("writeOnBoard"),
            codeEditor: AW("codeEditor"),
            lobbyCodeEditor: AW("lobbyCodeEditor"),
            customLobbyBlockEditor: AW("customLobbyBlockEditor"),
            ironChestPasskeyInput: AW("ironChestPasskeyInput"),
            petUi: AW("petUi")
          }),
          yR = (0, CW.useCallback)((() => {
            CM.b.set({
              openInGameMenuName: null
            })
          }), []),
          NW = (0, CW.useRef)(null);
        return (0, CW.useEffect)((() => {
          if (RW) {
            var WW;
            (0, OM.n)("InGameMenu"), NW.current = fC.has(RW) ? null !== (WW = CM.b.get("openEverythingMenuName")) && void 0 !== WW ? WW : NW.current : null, CM.b.set({
              openEverythingMenuName: null
            })
          } else {
            const WW = NW.current;
            NW.current = null, null !== WW && null === CM.b.get("openEverythingMenuName") && CM.b.set({
              openEverythingMenuName: WW
            }), zR.current = null, (0, OM.j)("InGameMenu")
          }
        }), [RW]), (0, CW.useEffect)((() => {
          null !== WW && yR()
        }), [WW, yR]), (0, eW.jsxs)(eW.Fragment, {
          children: [(0, eW.jsx)(wW.k, {
            show: "clientGame" === RW
          }), (0, eW.jsx)(mw, {
            show: "cantCrouchIfNotFullscreen" === RW,
            onOpen: bR.current.cantCrouchIfNotFullscreen,
            onClose: yR
          }), (0, eW.jsx)(KM, {
            show: "makeReport" === RW,
            onOpen: bR.current.makeReport,
            onClose: yR
          }), (0, eW.jsx)(uM, {
            show: "makeDiscordReport" === RW,
            onOpen: bR.current.makeDiscordReport,
            onClose: yR
          }), (0, eW.jsx)(qR, {
            show: "editBook" === RW,
            onOpen: bR.current.editBook,
            onClose: yR
          }), (0, eW.jsx)(DW, {
            show: "editNameTag" === RW,
            onOpen: bR.current.editNameTag,
            onClose: yR
          }), MW && (0, eW.jsx)(UM, {
            show: "inventory" === RW,
            onOpen: bR.current.inventory,
            onClose: yR,
            variation: zR.current
          }), (0, eW.jsx)(mR.d, {
            show: "inviteLink" === RW,
            onClose: yR
          }), (0, eW.jsx)(hW, {
            show: "retentionFeatures" === RW,
            onClose: yR
          }), (0, eW.jsx)(HW, {
            show: "writeOnBoard" === RW,
            onOpen: bR.current.writeOnBoard,
            onClose: yR
          }), (0, eW.jsx)(FC, {
            show: "lobbyCodeEditor" === RW,
            onOpen: bR.current.lobbyCodeEditor,
            onClose: yR,
            isLobbyCode: !0
          }), (0, eW.jsx)(FC, {
            show: "codeEditor" === RW,
            onOpen: bR.current.codeEditor,
            onClose: yR,
            isLobbyCode: !1
          }), (0, eW.jsx)(LM, {
            show: "customLobbyBlockEditor" === RW,
            onOpen: bR.current.customLobbyBlockEditor,
            onClose: yR
          }), (0, eW.jsx)(PR, {
            show: "ironChestPasskeyInput" === RW,
            onOpen: bR.current.ironChestPasskeyInput,
            onClose: yR
          }), (0, eW.jsx)(Ww, {
            togglePointerLock: !0,
            show: "petUi" === RW,
            onOpen: bR.current.petUi,
            onClose: yR
          })]
        })
      }))
  },
  34720: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => ez
    });
    MW(34723);
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(2821),
      bR = MW(1253),
      yR = MW(1523),
      NW = MW(940);

    function eW() {
      const WW = 2e3,
        [RW, MW] = (0, wW.useState)(null),
        [CW, eW] = (0, wW.useState)(null),
        BW = (0, wW.useRef)(null);
      (0, bR.f)("showBottomMessage", (RW => {
        let {
          message: MW,
          timeoutLength: wW = WW,
          type: CW
        } = RW;
        eW({
          message: MW,
          type: CW
        }), clearTimeout(BW.current), BW.current = setTimeout((() => {
          eW(null)
        }), wW)
      })), (0, bR.f)("showPermanentBottomMessage", (WW => {
        MW(WW)
      })), (0, wW.useEffect)((() => ((0, AW.c)((() => {
        MW(null)
      })), () => {
        clearTimeout(BW.current)
      })), []);
      const tR = CW || RW;
      return tR ? (0, NW.jsx)("div", {
        className: zR()("BottomScreenMessage", tR.type),
        children: (0, NW.jsx)(yR.c, {
          text: tR.message
        })
      }) : null
    }
    var BW = MW(1897),
      tR = MW(1544),
      TW = MW(1330);
    var gR = MW(969),
      iR = MW(964),
      YW = MW(232),
      JW = MW(1953),
      PW = MW(33),
      IW = MW(1558),
      oW = MW(50),
      lW = MW(1571),
      FW = MW(27),
      fW = MW(1573),
      QW = MW(1208),
      rR = MW(7716),
      cR = MW(1600),
      XW = MW(1027);
    const jR = (0, wW.memo)((function() {
      const {
        isTouchScreen: WW,
        loadingOverlayVisible: RW
      } = (0, FW.i)(["isTouchScreen", "loadingOverlayVisible"]), MW = (0, QW.q)();
      (0, iR.b)();
      const CW = (0, JW.h)("showBasicMovementControls"),
        [AW, bR] = (0, wW.useState)("movement"),
        yR = "movement" === AW,
        eW = MW && !1 !== CW;
      return (0, wW.useEffect)((() => {
        "padActions" !== AW || eW || bR("done")
      }), [AW, eW]), (0, wW.useEffect)((() => {
        if (RW || "done" === AW) return;
        const WW = setTimeout((() => {
          bR("movement" === AW && (0, QW.d)() ? "padActions" : "done")
        }), 7e3);
        return () => {
          clearTimeout(WW)
        }
      }), [RW, AW]), oW.g.getItem(YW.Bb) > 2 ? (0, NW.jsx)(dW, {
        showingMovementControls: !1
      }) : (0, NW.jsxs)(NW.Fragment, {
        children: [WW && !MW || !yR || !1 === CW ? null : (0, NW.jsxs)("div", {
          className: zR()("ControlsTutorialDiv", {
            UnderLoadingOverlay: RW
          }),
          children: [(0, NW.jsx)(kR, {}), (0, NW.jsx)(sW, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, NW.jsx)(sW, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === AW && eW && (0, NW.jsx)(aR, {}), (0, NW.jsx)(dW, {
          showingMovementControls: "done" !== AW
        })]
      })
    }));

    function kR() {
      const WW = (0, QW.q)();
      return (0, NW.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, NW.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), WW && (0, NW.jsx)(fW.b, {
          noaAction: "forward"
        }), !WW && (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, NW.jsx)(fW.b, {
              noaAction: "forward"
            })
          }), (0, NW.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, NW.jsx)(fW.b, {
              noaAction: "left"
            }), (0, NW.jsx)(fW.b, {
              noaAction: "backward"
            }), (0, NW.jsx)(fW.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function aR() {
      const {
        t: WW
      } = (0, XW.C)(), RW = (0, JW.h)("useInventory");
      return (0, NW.jsxs)("div", {
        className: "ControlsTutorialDiv",
        children: [(0, NW.jsx)(sW, {
          header: WW("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, NW.jsx)(sW, {
          header: WW("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== RW && (0, NW.jsx)(sW, {
          header: WW("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, NW.jsx)(sW, {
          header: WW("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function sW(WW) {
      let {
        header: RW,
        noaAction: MW
      } = WW;
      return (0, NW.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, NW.jsx)("div", {
          className: "KeyHeader",
          children: RW
        }), (0, NW.jsx)(fW.b, {
          noaAction: MW
        })]
      })
    }

    function dW(WW) {
      let {
        showingMovementControls: RW
      } = WW;
      const {
        isTouchScreen: MW
      } = (0, FW.i)(["isTouchScreen"]), CW = (0, QW.q)(), zR = (0, cR.d)("OpenShop"), [AW, bR] = (0, wW.useState)(!1), yR = `SeenShopControls|${(0,lW.f)("connectedGame",(WW=>WW.gameNameWithVariation))}`, eW = () => (!(0, QW.d)() || null !== (0, rR.e)("OpenShop")) && !oW.g.getItem(yR) && IW.d.get("shopInfo") && !RW, BW = () => (bR(!0), oW.g.setItem(yR, !0), (0, QW.d)() || PW.k.Sz("showShopTouchTutorial"), setTimeout((() => {
        bR(!1)
      }), 7e3));
      (0, wW.useEffect)((() => {
        let WW;
        const RW = PW.k.subscribe("showShopTutorial", (() => {
          eW() && (WW = BW())
        }));
        return () => {
          clearTimeout(WW), PW.k.unsubscribe(RW)
        }
      }), [RW]);
      const tR = (0, wW.useRef)();
      return (0, JW.f)("currencyAmounts", (WW => {
        if (eW()) {
          let MW = !1;
          const wW = IW.d.get("shopInfo");
          for (const CW in wW) {
            for (const zR in wW[CW].items) {
              var RW;
              const AW = wW[CW].items[zR];
              if (void 0 !== AW.currency && WW[AW.currency] && AW.cost <= WW[AW.currency].amount && (null === (RW = AW.hidden) || void 0 === RW || !RW)) {
                MW = !0;
                break
              }
            }
            if (MW) break
          }
          MW && (tR.current = BW())
        }
      })), (0, wW.useEffect)((() => () => {
        clearTimeout(tR.current)
      }), [RW]), !AW || CW && !zR ? null : (0, NW.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: MW && !CW ? null : (0, NW.jsx)(sW, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var pW = MW(1180),
      hW = MW(904);
    const UW = (0, wW.memo)((function() {
      return (0, iR.b)(), (0, NW.jsx)(EW, {})
    }));
    class EW extends wW.Component {
      constructor(WW) {
        super(WW), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = PW.k.subscribe("TopRightHelper", (WW => {
          this.showQueue.push(WW), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        PW.k.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(WW, RW) {
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
        let WW, RW, MW, wW, CW, zR = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, WW = "slideIn") : "slideOut" === this.state.currState ? WW = "slideOut" : null === this.currMessage && (zR = !1), this.currMessage) {
          const zR = this.currMessage.color || "rgb(102, 102, 102)";
          RW = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === WW ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, MW = {
            backgroundColor: zR
          }, wW = {
            animation: "2s " + ("slideOut" === WW ? "CloseNotification" : "ExpandNotification")
          }, CW = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === WW ? "textDisappear" : "textAppear")
          }
        }
        return zR ? (0, NW.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...RW
          },
          children: [(0, NW.jsx)("div", {
            className: "LeftSide",
            style: MW,
            children: (0, NW.jsx)(hW.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, NW.jsx)("div", {
            className: "RightSide",
            style: wW,
            children: (0, NW.jsx)("div", {
              className: "HelperText",
              style: CW,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var VW = MW(34729),
      mR = MW(1216);
    const xR = (0, mR.g)((WW => WW.PadSneakChip));

    function vR(WW) {
      const [RW, MW, wW] = function(WW) {
        const RW = parseInt(WW.substring(1), 16),
          MW = (RW >> 16) / 255,
          wW = (RW >> 8 & 255) / 255,
          CW = (255 & RW) / 255,
          zR = Math.max(MW, wW, CW),
          AW = Math.min(MW, wW, CW),
          bR = (zR + AW) / 2,
          yR = zR - AW;
        if (0 === yR) return [0, 0, bR];
        const NW = yR / (1 - Math.abs(2 * bR - 1));
        let eW;
        eW = zR === MW ? (wW - CW) / yR % 6 : zR === wW ? (CW - MW) / yR + 2 : (MW - wW) / yR + 4;
        return [(60 * eW + 360) % 360, NW, bR]
      }(WW), CW = 0 === MW ? 0 : Math.min(.6, MW + .03), zR = wW > .5 ? -1 : 1, AW = KW(wW + .09 * zR);
      return {
        panel: WW,
        slot: uW(RW, CW, AW),
        slotSelected: uW(RW, CW, KW(AW + .2 * zR)),
        slotUnavailable: uW(RW, CW, KW(wW + -.1 * zR))
      }
    }

    function KW(WW) {
      return Math.min(1, Math.max(0, WW))
    }

    function uW(WW, RW, MW) {
      const wW = (1 - Math.abs(2 * MW - 1)) * RW,
        CW = wW * (1 - Math.abs(WW / 60 % 2 - 1)),
        zR = MW - wW / 2;
      let AW;
      return AW = WW < 60 ? [wW, CW, 0] : WW < 120 ? [CW, wW, 0] : WW < 180 ? [0, wW, CW] : WW < 240 ? [0, CW, wW] : WW < 300 ? [CW, 0, wW] : [wW, 0, CW], "#" + AW.map((WW => function(WW) {
        return Math.round(255 * WW).toString(16).padStart(2, "0")
      }(WW + zR))).join("")
    }
    var OW = MW(34749),
      nW = MW(3395),
      GW = MW(1939),
      LW = MW(1945),
      HW = MW(34807),
      DW = MW(3790),
      qR = MW(1273),
      ZW = MW(564);

    function SW(WW, RW) {
      return WW.clientX >= RW.left - 8 && WW.clientX <= RW.right + 8 && WW.clientY >= RW.top - 8 && WW.clientY <= RW.bottom + 8
    }
    var WR = MW(1115),
      RR = MW(7759);
    const MR = 25 * Math.PI / 180,
      wR = 45 * Math.PI / 180;
    class CR {
      constructor(WW) {
        this.deps = WW, this.phase = "idle", this.armTimer = null, this.speed = 0, this.armedSpeed = 0, this.suspended = !1
      }
      move(WW, RW, MW) {
        if (this.suspended) return;
        this.speed = MW;
        const wW = Math.hypot(WW, RW),
          CW = wW > 0 ? Math.acos(Math.min(1, -RW / wW)) : Math.PI;
        if ("armed" === this.phase || "ready" === this.phase) return void((wW < .5 || CW > wR) && this.setPhase("idle"));
        const zR = wW >= .8 && CW <= MR;
        zR && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.armedSpeed = this.speed, this.setPhase("armed")
        }), 1e3)) : zR || "charging" !== this.phase || this.setPhase("idle")
      }
      target(WW) {
        WW && "armed" === this.phase ? this.setPhase("ready") : WW || "ready" !== this.phase || this.setPhase("armed")
      }
      lift() {
        return "ready" !== this.phase ? (this.cancel(), null) : (this.setPhase("locked"), this.armedSpeed)
      }
      cancel() {
        "idle" !== this.phase && this.setPhase("idle")
      }
      suspend() {
        this.suspended = !0, this.cancel()
      }
      startTouch() {
        this.suspended = !1, this.cancel()
      }
      setPhase(WW) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const RW = this.phase;
        this.phase = WW, this.deps.onPhase(WW, RW)
      }
    }
    const zM = {
      charging: "AutorunCharging",
      armed: "AutorunArmed",
      ready: "AutorunReady",
      locked: "AutorunLocked"
    };
    const AR = 50;

    function bM(WW) {
      let {
        onMove: RW,
        mode: MW,
        speedCurve: CW,
        autorun: zR = !1
      } = WW;
      const AW = (0, wW.useRef)(null),
        bR = (0, wW.useRef)(null),
        yR = (0, wW.useRef)(null),
        eW = (0, wW.useRef)(null),
        BW = (0, wW.useRef)(null),
        TW = (0, wW.useRef)(null),
        gR = (0, wW.useRef)(null),
        iR = (0, wW.useRef)(null),
        YW = (0, wW.useRef)(!1),
        JW = (0, wW.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: PW
        } = (0, XW.C)(),
        IW = "fixed_shown" === MW || "fixed_hidden" === MW,
        oW = (0, FW.i)(["notchSize"]).notchSize.left,
        fW = function(WW, RW, MW, CW, zR) {
          const AW = (0, wW.useRef)(null),
            bR = (0, wW.useRef)({
              onUnlocked: CW,
              onArmed: zR
            });
          return bR.current = {
            onUnlocked: CW,
            onArmed: zR
          }, (0, wW.useEffect)((() => {
            if (!WW) return;
            let wW = null,
              CW = null;
            const zR = new CR({
              onPhase: (WW, AW) => {
                const yR = RW.current;
                if (null !== yR) {
                  for (const [RW, MW] of Object.entries(zM)) yR.classList.toggle(MW, RW === WW);
                  if ("charging" === WW) wW = MW.current.animate([{
                    strokeDashoffset: 1
                  }, {
                    strokeDashoffset: 0
                  }], {
                    delay: 400,
                    duration: 600,
                    fill: "forwards"
                  });
                  else if ("idle" === WW) {
                    var NW;
                    null === (NW = wW) || void 0 === NW || NW.cancel(), wW = null
                  }
                  "armed" === WW && "charging" === AW && bR.current.onArmed(), "ready" === WW && RR.d.play("autorunReady"), "locked" === WW && (RR.d.play("autorunLocked"), CW = setInterval((() => {
                    tR.gameBridge.lookup("dropAhead", null) && (RR.d.play("autorunLedgeStop"), zR.cancel())
                  }), 100)), "locked" === AW && (clearInterval(CW), CW = null, bR.current.onUnlocked())
                }
              }
            });
            AW.current = zR;
            const yR = () => {
                zR.suspend()
              },
              NW = () => {
                "hidden" === document.visibilityState && yR()
              },
              eW = (0, WR.c)(yR);
            return document.addEventListener("visibilitychange", NW), window.addEventListener("blur", yR), window.addEventListener("resize", yR), () => {
              eW(), document.removeEventListener("visibilitychange", NW), window.removeEventListener("blur", yR), window.removeEventListener("resize", yR), zR.cancel(), clearInterval(CW), AW.current = null
            }
          }), [WW, RW, MW]), (0, lW.d)("localPlayerAliveSet", (WW => {
            var RW;
            WW || null === (RW = AW.current) || void 0 === RW || RW.suspend()
          })), AW
        }(zR, bR, TW, (() => {
          aR(), kR()
        }), (() => {
          QW(), null === iR.current && fW.current.suspend()
        }));

      function QW() {
        iR.current = function(WW, RW, MW, wW) {
          WW.style.display = "";
          const CW = WW.offsetWidth,
            zR = WW.offsetHeight,
            AW = Math.min(Math.max(RW.x - CW / 2, 8), window.innerWidth - 8 - CW);
          let bR = RW.y - MW - 32 - zR;
          const yR = [...wW].sort(((WW, RW) => RW.top - WW.top));
          for (const NW of yR) AW < NW.right && AW + CW > NW.left && bR < NW.bottom && bR + zR > NW.top && (bR = NW.top - 8 - zR);
          return bR < 8 ? (WW.style.display = "none", null) : (WW.style.transform = `translate(${AW-(RW.x-MW)}px, ${bR-(RW.y-MW)}px)`, {
            left: AW,
            top: bR,
            right: AW + CW,
            bottom: bR + zR
          })
        }(gR.current, eW.current, AR, function() {
          const WW = [];
          for (const RW of document.querySelectorAll(".TouchInventoryKey")) {
            const MW = RW.getBoundingClientRect();
            MW.width > 0 && "visible" === getComputedStyle(RW).visibility && WW.push(MW)
          }
          return WW
        }()), YW.current = null !== iR.current && SW(JW.current, iR.current)
      }

      function rR(WW) {
        bR.current.style.transform = `translate(${WW.x-AR}px, ${WW.y-AR}px)`
      }

      function cR(WW) {
        const RW = bR.current;
        RW.classList.add("Resting"), RW.classList.toggle("Returning", WW), RW.style.display = "fixed_hidden" === MW ? "none" : "block", rR(function() {
          const WW = oW * window.innerWidth / 100,
            RW = window.innerHeight > window.innerWidth ? 135 : 100;
          return {
            x: WW + 90,
            y: window.innerHeight - RW
          }
        }())
      }
      const jR = (0, wW.useRef)({
        restFixed: cR,
        release: sW
      });

      function kR() {
        IW ? cR("fixed_shown" === MW) : "floating" === MW && (bR.current.style.display = "none"), RW({
          x: 0,
          y: 0
        })
      }

      function aR() {
        BW.current = null, eW.current = null, yR.current.style.transform = "translate(-50%, -50%)"
      }

      function sW(WW) {
        aR();
        const MW = fW.current,
          wW = WW && MW ? MW.lift() : null;
        null === wW ? (null === MW || void 0 === MW || MW.cancel(), kR()) : RW({
          x: 0,
          y: -wW
        })
      }

      function dW(WW) {
        const MW = Array.from(WW.touches).find((WW => WW.identifier === BW.current));
        if (null === eW.current || null === BW.current || (0, ZW.S)(MW)) return;
        const wW = fW.current,
          zR = MW.clientX - eW.current.x,
          AW = MW.clientY - eW.current.y,
          bR = Math.hypot(zR, AW),
          NW = bR > 0 ? Math.min(1, AR / bR) : 0,
          tR = zR * NW,
          TW = AW * NW,
          gR = Math.hypot(tR, TW) / AR,
          PW = CW && gR > 0 ? CW(gR) / gR : 1;
        yR.current.style.transform = `translate(calc(-50% + ${tR}px), calc(-50% + ${TW}px))`;
        const IW = tR / AR,
          oW = TW / AR;
        if (RW({
            x: IW * PW,
            y: oW * PW
          }), null !== wW && null !== iR.current) {
          wW.move(IW, oW, gR * PW), JW.current = {
            clientX: MW.clientX,
            clientY: MW.clientY
          };
          const WW = YW.current;
          YW.current = SW(MW, iR.current), YW.current !== WW && wW.target(YW.current)
        }
      }
      return jR.current = {
        restFixed: cR,
        release: sW
      }, (0, wW.useLayoutEffect)((() => {
        if (!IW) return;
        null === BW.current && jR.current.restFixed(!1);
        const WW = () => {
          null === BW.current && jR.current.restFixed(!1)
        };
        window.addEventListener("resize", WW);
        const RW = bR.current;
        return () => {
          window.removeEventListener("resize", WW), RW.classList.remove("Resting", "Returning"), null === BW.current && (RW.style.display = "", RW.style.transform = "")
        }
      }), [IW, MW, oW]), (0, wW.useEffect)((() => {
        const WW = WW => {
            const RW = BW.current;
            null === RW || Array.from(WW.touches).some((WW => WW.identifier === RW)) || jR.current.release("touchend" === WW.type && Array.from(WW.changedTouches).some((WW => WW.identifier === RW)))
          },
          RW = () => {
            null !== BW.current && jR.current.release(!1)
          },
          MW = () => {
            "hidden" === document.visibilityState && RW()
          };
        document.addEventListener("touchstart", WW, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", WW, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", WW, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", WW, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", RW), document.addEventListener("visibilitychange", MW);
        const wW = (0, WR.c)(RW);
        return () => {
          wW(), document.removeEventListener("touchstart", WW, {
            capture: !0
          }), document.removeEventListener("touchmove", WW, {
            capture: !0
          }), document.removeEventListener("touchend", WW, {
            capture: !0
          }), document.removeEventListener("touchcancel", WW, {
            capture: !0
          }), window.removeEventListener("blur", RW), document.removeEventListener("visibilitychange", MW)
        }
      }), []), (0, wW.useEffect)((() => {
        const WW = AW.current,
          RW = WW => {
            WW.preventDefault()
          };
        return WW.addEventListener("touchstart", RW, {
          passive: !1
        }), () => {
          WW.removeEventListener("touchstart", RW)
        }
      }), []), (0, NW.jsx)("div", {
        ref: AW,
        className: "JoystickZone",
        onTouchStart: function(WW) {
          var RW;
          if (null !== BW.current) return;
          const wW = Array.from(WW.changedTouches).find((WW => {
            var RW;
            return null === (RW = AW.current) || void 0 === RW ? void 0 : RW.contains(WW.target)
          }));
          if (wW) {
            if (null === (RW = fW.current) || void 0 === RW || RW.startTouch(), BW.current = wW.identifier, "pinned" === MW) {
              const WW = bR.current.getBoundingClientRect();
              eW.current = {
                x: WW.left + WW.width / 2,
                y: WW.top + WW.height / 2
              }
            } else eW.current = {
              x: wW.clientX,
              y: wW.clientY
            }, bR.current.classList.remove("Resting", "Returning"), bR.current.style.display = "block", rR(eW.current), zR && (JW.current = {
              clientX: wW.clientX,
              clientY: wW.clientY
            }, QW());
            dW(WW)
          }
        },
        onTouchMove: dW,
        children: (0, NW.jsxs)("div", {
          ref: bR,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === MW ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, NW.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), zR && (0, NW.jsxs)(NW.Fragment, {
            children: [(0, NW.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, NW.jsx)("circle", {
                ref: TW,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, NW.jsxs)("div", {
              ref: gR,
              className: "AutorunTarget",
              children: [(0, NW.jsx)(hW.e, {
                name: "lock"
              }), PW("settingsMenu:autoRun")]
            })]
          }), (0, NW.jsx)("div", {
            ref: yR,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var yM = MW(34815);

    function NR(WW, RW) {
      const MW = (0, wW.useRef)(null);
      return (0, wW.useLayoutEffect)((() => (HW.e.set(WW, MW.current, RW), () => {
        HW.e.set(WW, null)
      })), [WW, RW]), MW
    }
    const eR = "C",
      BR = "J",
      tM = "U",
      TR = "P",
      gM = "A",
      iM = "G",
      YR = "X",
      JR = (0, wW.forwardRef)((function(WW, RW) {
        let {
          slot: MW,
          canvasZone: wW = !1,
          lit: CW = !1,
          label: AW,
          className: bR,
          children: yR,
          ...eW
        } = WW;
        return (0, NW.jsx)("div", {
          ref: RW,
          className: zR()("TouchKeyHit", `TouchSlot${MW}`, bR, {
            CanvasZone: wW
          }),
          ...eW,
          children: (0, NW.jsxs)("div", {
            className: zR()("TouchKey", {
              Lit: CW,
              Labelled: void 0 !== AW
            }),
            children: [yR, void 0 !== AW && (0, NW.jsx)("span", {
              className: "TouchKeyLabel",
              children: AW
            })]
          })
        })
      }));

    function PR(WW, RW) {
      const MW = RW ? [YR] : [TR, YR];
      return WW.filter((WW => null !== WW)).slice(0, MW.length).map(((WW, RW) => {
        const CW = MW[RW];
        return (0, NW.jsx)(wW.Fragment, {
          children: WW.render(CW)
        }, `${WW.id}:${CW}`)
      }))
    }
    var IR = MW(7753),
      oR = MW(34822);
    class lR {
      constructor(WW) {
        this.zones = WW, this.followed = new Map, this.onStart = WW => {
          if (this.releaseMissing(WW.touches), WW.target instanceof HTMLCanvasElement)
            for (let RW = 0; RW < WW.changedTouches.length; RW++) {
              const {
                identifier: MW,
                clientX: wW,
                clientY: CW
              } = WW.changedTouches[RW];
              this.release(MW);
              const zR = this.zones.hitZone(wW, CW);
              if (!zR) continue;
              const AW = zR.element.firstElementChild;
              for (const WW of AW.getAnimations()) WW.cancel();
              const bR = {
                hit: zR.element,
                key: AW,
                x: zR.x,
                y: zR.y,
                reach: .6 * zR.radius
              };
              this.followed.set(MW, bR), (0, qR.d)(zR.element, !0), FR(bR, wW, CW)
            }
        }, this.onMove = WW => {
          this.releaseMissing(WW.touches);
          for (let RW = 0; RW < WW.changedTouches.length; RW++) {
            const {
              identifier: MW,
              clientX: wW,
              clientY: CW
            } = WW.changedTouches[RW], zR = this.followed.get(MW);
            zR && FR(zR, wW, CW)
          }
        }, this.onEnd = WW => {
          for (let RW = 0; RW < WW.changedTouches.length; RW++) this.release(WW.changedTouches[RW].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const WW = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, WW), document.addEventListener("touchmove", this.onMove, WW), document.addEventListener("touchend", this.onEnd, WW), document.addEventListener("touchcancel", this.onEnd, WW), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(WW) {
        for (const RW of [...this.followed.keys()])(0, oR.c)(WW, RW) || this.release(RW)
      }
      releaseAll() {
        for (const WW of [...this.followed.keys()]) this.release(WW)
      }
      release(WW) {
        const RW = this.followed.get(WW);
        if (!RW) return;
        this.followed.delete(WW);
        for (const CW of this.followed.values())
          if (CW.key === RW.key) return;
        (0, qR.d)(RW.hit, !1);
        const {
          key: MW
        } = RW, wW = MW.style.translate;
        MW.style.translate = "", wW && MW.animate({
          translate: [wW, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        })
      }
    }

    function FR(WW, RW, MW) {
      let {
        key: wW,
        x: CW,
        y: zR,
        reach: AW
      } = WW;
      const bR = RW - CW,
        yR = MW - zR,
        NW = Math.min(1, AW / (Math.hypot(bR, yR) || 1));
      wW.style.translate = `${bR*NW}px ${yR*NW}px`
    }
    const fR = new Set;

    function QR(WW) {
      const RW = new Set(Array.from(WW.touches, (WW => WW.identifier)));
      for (const MW of fR) {
        for (const WW of MW.ids) RW.has(WW) || MW.ids.delete(WW);
        if (0 === MW.ids.size) {
          fR.delete(MW);
          MW.pressesOnPointerDown && "touchstart" === WW.type && Array.from(WW.changedTouches).some((WW => WW.target instanceof Node && MW.element.contains(WW.target))) || MW.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Pz of ["touchstart", "touchmove"]) window.addEventListener(Pz, QR, {
        capture: !0,
        passive: !0
      });

    function rM(WW) {
      let {
        pressesOnPointerDown: RW = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const MW = (0, wW.useRef)(WW);
      MW.current = WW;
      const CW = (0, wW.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: RW,
        release: () => {
          MW.current()
        }
      });
      (0, wW.useEffect)((() => {
        const WW = CW.current;
        return () => {
          fR.delete(WW), WW.ids.clear()
        }
      }), []);
      const zR = WW => {
        const RW = CW.current;
        for (const MW of Array.from(WW.changedTouches)) RW.ids.delete(MW.identifier);
        0 === RW.ids.size && fR.delete(RW)
      };
      return {
        onTouchStart: WW => {
          const RW = CW.current;
          RW.element = WW.currentTarget;
          for (const MW of Array.from(WW.changedTouches)) MW.target instanceof Node && WW.currentTarget.contains(MW.target) && RW.ids.add(MW.identifier);
          RW.ids.size > 0 && fR.add(RW)
        },
        onTouchEnd: zR,
        onTouchCancel: zR
      }
    }
    const cM = () => {
      const WW = (0, nW.n)(),
        RW = (0, QW.q)();
      return WW || RW
    };

    function XR(WW) {
      (0, HW.i)(WW.x, WW.y)
    }
    const jM = (0, wW.memo)((function() {
        const WW = cM(),
          {
            joystickMode: RW,
            touchSpeedCurve: MW,
            autorun: CW
          } = (0, FW.i)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, wW.useEffect)((() => ((0, DW.j)(GW.z.TouchControls, GW.z.TouchControls), () => {
          (0, DW.j)(GW.z.TouchControls, 0), (0, HW.i)(0, 0)
        })), []), (0, NW.jsx)("div", {
          className: zR()("TouchMovementWrapper", {
            Hidden: WW
          }),
          "data-camera-keeper": "",
          children: (0, NW.jsx)(bM, {
            onMove: XR,
            mode: RW,
            speedCurve: MW ? yM.c : void 0,
            autorun: CW
          })
        })
      })),
      kM = (0, wW.memo)((function() {
        const WW = cM(),
          {
            clientEscMenuOptions: RW
          } = (0, FW.i)(["clientEscMenuOptions"]),
          MW = (0, IR.j)(RW.touchActionButtons);
        return (0, wW.useEffect)((() => new lR(HW.e).start()), []), (0, NW.jsxs)("div", {
          className: zR()("TouchComponentsButtons", {
            Hidden: WW
          }),
          "data-camera-keeper": "",
          children: [(0, NW.jsx)(pR, {}), (0, NW.jsx)(OR, {
            hidden: WW,
            actionButtons: MW
          }), (0, NW.jsx)(dR, {})]
        })
      }));

    function aM(WW, RW) {
      (0, wW.useEffect)((() => () => {
        RW.current && (RW.current = !1, (0, LW.z)(WW, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function sR(WW) {
      const RW = RW => MW => {
        (0, qR.d)(MW.currentTarget, RW), WW(RW, MW.nativeEvent)
      };
      return {
        onPointerDown: RW(!0),
        onPointerUp: RW(!1),
        onPointerCancel: RW(!1)
      }
    }

    function dR() {
      const WW = (0, JW.h)("canCrouch"),
        RW = (0, lW.h)("crouching"),
        MW = (0, wW.useRef)(!1);
      aM(GW.v.Crouch, MW);
      const CW = (WW, RW) => {
          MW.current = WW, (0, LW.z)(GW.v.Crouch, WW, RW)
        },
        zR = (0, wW.useRef)(null),
        AW = () => {
          MW.current && (zR.current && (0, qR.d)(zR.current, !1), CW(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        bR = rM(AW);
      return (0, wW.useEffect)((() => {
        !1 === WW && AW()
      }), [WW]), !1 === WW ? null : (0, NW.jsx)(JR, {
        ref: zR,
        slot: eR,
        className: "CrouchKey",
        lit: RW,
        ...bR,
        ...sR(CW),
        children: (0, NW.jsx)(hW.e, {
          name: "arrow-down-to-line"
        })
      })
    }

    function pR() {
      const WW = (0, wW.useRef)(!1);
      aM(GW.v.Jump, WW);
      const RW = RW => MW => {
          WW.current = RW, (0, qR.d)(MW.currentTarget, RW), (0, LW.z)(GW.v.Jump, RW, MW.nativeEvent)
        },
        MW = (0, wW.useRef)(null),
        CW = rM((() => {
          WW.current && (WW.current = !1, MW.current && (0, qR.d)(MW.current, !1), (0, LW.z)(GW.v.Jump, !1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        }));
      return (0, NW.jsx)(JR, {
        ref: MW,
        slot: BR,
        className: "JumpKey",
        onTouchStart: WW => {
          CW.onTouchStart(WW), RW(!0)(WW)
        },
        onTouchEnd: WW => {
          CW.onTouchEnd(WW), RW(!1)(WW)
        },
        onTouchCancel: WW => {
          CW.onTouchCancel(WW), RW(!1)(WW)
        },
        children: (0, NW.jsx)(hW.e, {
          name: "arrow-up-from-line"
        })
      })
    }
    const hR = [{
        icon: "arrows-rotate"
      }],
      UR = [{
        icon: "Arrow"
      }],
      ER = [{
        icon: "crosshairs"
      }],
      VR = [{
        icon: "swords"
      }],
      mM = [{
        icon: "hand-back-point-up"
      }],
      xM = [{
        icon: "Firecracker"
      }];

    function vM(WW, RW, MW, wW) {
      return {
        id: JSON.stringify(RW),
        render: CW => (0, NW.jsx)(nR, {
          code: WW,
          slot: CW,
          icon: RW,
          label: wW,
          hidden: MW
        })
      }
    }

    function KR(WW, RW) {
      return {
        id: "fly",
        render: MW => (0, NW.jsx)(uR, {
          slot: MW,
          flying: WW,
          label: RW
        })
      }
    }

    function uR(WW) {
      let {
        slot: RW,
        flying: MW,
        label: wW
      } = WW;
      return (0, NW.jsx)(JR, {
        slot: RW,
        className: "FlyKey",
        lit: MW,
        label: wW,
        ...sR(((WW, RW) => {
          (0, LW.z)(GW.v.Fly, WW, RW)
        })),
        children: (0, NW.jsx)(hW.e, {
          name: "feather-pointed"
        })
      })
    }

    function OR(WW) {
      var RW, MW;
      let {
        hidden: wW,
        actionButtons: CW
      } = WW;
      const {
        t: zR
      } = (0, XW.C)(), {
        gun: AW,
        aimable: bR,
        chargeName: yR
      } = (0, lW.h)("heldItemAim"), eW = (0, lW.h)("gliderBoostFuel"), {
        canFly: BW,
        flying: tR
      } = (0, lW.h)("flight"), TW = (0, JW.h)("touchscreenActionButton"), gR = AW ? hR : TW, iR = bR ? {
        icon: UR,
        label: zR("touchKeys:aim")
      } : null, YW = null !== yR ? {
        icon: [{
          icon: yR
        }]
      } : null, PW = null !== iR && void 0 !== iR ? iR : YW, IW = null !== (RW = null === (MW = AW ? iR : null !== YW && void 0 !== YW ? YW : iR) || void 0 === MW ? void 0 : MW.icon) && void 0 !== RW ? RW : mM, oW = [!CW && PW ? vM(HW.b.Action2, PW.icon, wW, PW.label) : null, AW ? vM(HW.b.Action3, ER, wW, zR("touchKeys:scope")) : null, BW ? KR(tR, zR("touchKeys:fly")) : null];
      return (0, NW.jsxs)(NW.Fragment, {
        children: [gR && (0, NW.jsx)(nR, {
          code: HW.b.Action1,
          slot: iM,
          icon: gR,
          label: AW ? zR("touchKeys:reload") : void 0,
          hidden: wW
        }, JSON.stringify(gR)), CW && (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)(nR, {
            code: HW.b.Attack,
            slot: gM,
            icon: VR,
            name: zR("touchKeys:attack"),
            hidden: wW
          }), (0, NW.jsx)(nR, {
            code: HW.b.Use,
            slot: tM,
            icon: IW,
            name: zR("touchKeys:use"),
            hidden: wW
          })]
        }), PR(oW, CW), eW > 0 && (0, NW.jsx)(nR, {
          code: HW.b.Boost,
          slot: YR,
          icon: xM,
          label: zR("touchKeys:boost", {
            fuel: eW > 99 ? "99+" : eW
          }),
          hidden: wW
        })]
      })
    }

    function nR(WW) {
      let {
        code: RW,
        slot: MW,
        icon: wW,
        label: CW,
        name: zR,
        hidden: AW
      } = WW;
      const bR = NR(RW, AW);
      return (0, NW.jsx)(JR, {
        ref: bR,
        slot: MW,
        className: "TouchActionKey",
        canvasZone: !0,
        label: CW,
        role: void 0 !== zR ? "img" : void 0,
        "aria-label": zR,
        children: (0, NW.jsx)(yR.c, {
          text: wW
        })
      })
    }
    var GR = MW(3369),
      LR = MW(2221),
      HR = MW(260);
    const DR = (0, wW.memo)((function() {
      (0, iR.b)();
      const WW = (0, wW.useRef)([]),
        RW = (0, LR.b)(),
        MW = (0, wW.useRef)(0),
        CW = (0, wW.useRef)(0),
        zR = (0, wW.useRef)([]),
        AW = (0, wW.useRef)(null);

      function eW(MW, wW, CW, zR) {
        const AW = (0, HR.b)(),
          bR = setTimeout((() => {
            WW.current = WW.current.filter((WW => WW.id !== AW)), RW()
          }), zR);
        tR.gameBridge.send("recordFlyingMiddleText", {
          content: MW,
          N9: wW,
          angle: CW,
          J9: zR
        }), WW.current.push({
          id: AW,
          content: MW,
          N9: wW,
          J9: zR,
          removeTimeout: bR,
          angle: CW
        }), RW()
      }
      return (0, lW.d)("shotDamageToShow", (WW => {
        let {
          damage: RW,
          wasCrit: MW,
          distance: wW
        } = WW;
        const CW = -Math.PI / 4 + Math.random() * Math.PI / 2;
        eW(MW ? [{
          str: RW.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [RW.toString()], wW, CW, 1e3)
      })), (0, bR.f)("flyingMiddleMessage", (WW => {
        let {
          content: RW,
          N9: wW,
          J9: bR
        } = WW;
        zR.current.push({
          content: RW,
          N9: wW,
          J9: bR
        });
        const yR = () => {
          const {
            content: WW,
            N9: RW,
            J9: wW
          } = zR.current.shift(), AW = function(WW) {
            const RW = -Math.PI / 4,
              MW = Math.PI / 4,
              wW = MW - RW,
              CW = (1 + Math.sqrt(5)) / 2,
              zR = 2 * Math.PI / (CW * CW);
            let AW = WW + zR;
            for (; AW > MW;) AW -= wW;
            for (; AW < RW;) AW += wW;
            const bR = Math.PI / 6;
            if (Math.abs(AW - WW) < bR) {
              AW = WW + (Math.sign(AW - WW) || 1) * bR, AW > MW && (AW = WW - bR), AW < RW && (AW = WW + bR)
            }
            return AW
          }(CW.current);
          CW.current = AW, MW.current = Date.now(), eW(WW, RW, AW, wW)
        };
        if (!AW.current) {
          const WW = () => {
            zR.current.length > 0 && yR(), 0 === zR.current.length && (clearInterval(AW.current), AW.current = null)
          };
          AW.current = setInterval(WW, 200), MW.current + 200 < Date.now() && WW()
        }
        for (; zR.current.length > 4;) yR()
      })), (0, bR.f)("forceFlyingMiddleMessage", (WW => {
        let {
          content: RW,
          N9: MW,
          angle: wW,
          J9: CW
        } = WW;
        eW(RW, MW, wW, CW)
      })), (0, wW.useEffect)((() => () => {
        clearInterval(AW.current), AW.current = null;
        for (const RW of WW.current) clearTimeout(RW.removeTimeout)
      }), []), (0, NW.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: WW.current.map((WW => {
          const {
            id: RW,
            content: MW,
            N9: wW,
            J9: CW,
            angle: zR
          } = WW;
          return WW.pos || (WW.pos = function(WW, RW) {
            const MW = 50 / (WW ** .7 * .35);
            return {
              x: MW * Math.sin(RW),
              y: -MW * Math.cos(RW)
            }
          }(wW, zR)), (0, NW.jsx)(qM, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: CW,
            enterActiveStyle: {
              transform: `translate(${WW.pos.x}vw, ${WW.pos.y}vh)`,
              transition: `transform ${CW}ms ease-out`
            },
            children: (0, NW.jsx)("div", {
              children: (0, NW.jsx)(yR.c, {
                text: MW
              })
            })
          }, RW)
        }))
      })
    }));

    function qM(WW) {
      let {
        children: RW,
        className: MW,
        classNames: CW,
        timeout: zR,
        enterActiveStyle: AW
      } = WW;
      const [bR, yR] = (0, wW.useState)(!1), [eW, BW] = (0, wW.useState)(!1), tR = (0, wW.useRef)(null);
      return (0, wW.useEffect)((() => {
        yR(!0)
      }), []), (0, NW.jsx)(GR.b, {
        className: MW,
        classNames: CW || MW,
        in: bR,
        timeout: zR,
        nodeRef: tR,
        onEntering: () => {
          BW(!0)
        },
        children: (0, wW.cloneElement)(RW, {
          ref: tR,
          style: eW && AW || void 0
        })
      })
    }
    var ZR = MW(34827);

    function SR() {
      const WW = (0, lW.h)("health");
      return (0, NW.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, NW.jsx)(ZR.d, {
          placement: "statBars"
        }), (0, NW.jsx)(WM, {
          actualValue: WW.shield,
          maxValue: WW.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, NW.jsx)(WM, {
          actualValue: WW.health,
          maxValue: WW.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function WM(WW) {
      let {
        actualValue: RW,
        maxValue: MW,
        hideAtValue: wW,
        icon: CW,
        className: zR
      } = WW;
      return (0, iR.f)(), null === RW || null === MW || RW === wW || MW === wW ? null : (0, NW.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, NW.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, NW.jsx)("div", {
            className: `BottomScreenStatBar ${zR}`,
            style: {
              transform: `scaleX(${Math.max(RW/MW,0)})`,
              transformOrigin: "left center"
            }
          }), (0, NW.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, NW.jsx)(hW.e, {
              name: CW
            }), ` ${Math.ceil(RW)}/${MW}`]
          })]
        })
      })
    }
    var RM = MW(8135),
      MM = MW(3573),
      wM = MW(1379),
      CM = MW(2127),
      zw = MW(1255),
      AM = MW(1135),
      bw = MW(2541),
      yw = MW(2569),
      NM = MW(607),
      eM = MW(2576),
      BM = MW(151),
      tw = MW(8088),
      TM = MW(284);

    function gw(WW, RW) {
      let {
        shownName: MW,
        lifeformType: wW
      } = WW;
      return null !== MW ? MW : null !== wW ? RW(`lifeform:${(0,TM.oe)(wW)}`) : null
    }
    var iw = MW(2558),
      YM = MW(2562);
    const JM = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      PM = (0, wW.memo)((function() {
        var WW, RW;
        const MW = (0, iR.b)(),
          CW = (0, TW.useNavigatePreserveSearch)(),
          {
            t: AW
          } = (0, XW.C)(),
          {
            loadingOverlayVisible: yR
          } = (0, FW.i)(["loadingOverlayVisible"]),
          eW = (0, QW.q)(),
          [BW, gR] = (0, wW.useState)(!1),
          [YW, PW] = (0, wW.useState)(!0),
          [oW, fW] = (0, wW.useState)(null),
          rR = (0, LR.b)(),
          cR = (0, JW.h)("respawnButtonText"),
          jR = (0, JW.h)("usePlayAgainButton"),
          kR = (0, JW.h)("useRespawnButton"),
          {
            gameNameWithVariation: aR
          } = (0, lW.h)("connectedGame"),
          sW = (0, wW.useRef)(IW.d.get("secsToRespawn")),
          dW = (0, wW.useRef)(tR.gameBridge.latest("localPlayerAlive")),
          pW = (0, wW.useRef)(IW.d.get("secsToRespawn")),
          UW = (0, wW.useRef)(IW.d.get("autoRespawn")),
          EW = (0, wW.useRef)(null),
          VW = (0, wW.useRef)(0),
          xR = (0, wW.useRef)(0),
          [vR, KW] = (0, wW.useState)(!1),
          uW = (0, wW.useRef)(null),
          OW = (0, wW.useRef)(null),
          nW = (0, wW.useRef)(null);
        (0, JW.f)("secsToRespawn", (WW => {
          console.log("Received new secsToRespawn with", WW, "and current canRespawn value of ", UW.current), pW.current = WW, DW()
        })), (0, JW.f)("autoRespawn", (WW => {
          console.log("Received autorespawn", WW, "current canRespawn value of ", sW.current), UW.current = WW, DW()
        }));
        const GW = WW => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", WW), WW || VW.current++, dW.current = WW, DW()
        };
        (0, lW.d)("localPlayerAliveSet", GW), (0, wW.useEffect)((() => {
          const WW = tR.gameBridge.latest("localPlayerAlive");
          WW === dW.current ? (console.log("Updating respawn component from initial mount"), DW()) : GW(WW)
        }), []), (0, wW.useEffect)((() => {
          if (BW) {
            KW(!1);
            const WW = setTimeout((() => {
              KW(!0)
            }), 600);
            return (0, tw.f)(), () => {
              clearTimeout(WW)
            }
          }
          return () => {}
        }), [BW]);
        (0, lW.d)("kill", (WW => {
          let {
            killer: RW,
            victim: MW,
            withItem: wW
          } = WW;
          if (!MW.local) return;
          const CW = ((WW, RW) => {
            if (WW.local) {
              const WW = JM[RW];
              return WW ? AW(WW) : null
            }
            const MW = gw(WW, AW);
            return MW ? AW("respawnPage:killedBy", {
              name: MW
            }) : null
          })(RW, wW);
          CW && fW({
            text: CW,
            deathCount: dW.current ? VW.current + 1 : VW.current
          })
        }));
        const LW = () => {
            BW && UW.current && dW.current && vR && gR(!1)
          },
          HW = BW && UW.current && dW.current && vR && !yR;
        (0, bR.f)("usedKeyboard", (() => {
          LW()
        })), (0, YM.d)("respawn", HW, LW);
        const DW = () => {
            PW(pW.current >= 3 || !UW.current), dW.current ? (clearInterval(EW.current), EW.current = null, UW.current ? rR() : gR(!1)) : (gR(!0), sW.current = pW.current, rR(), console.log("Running respawn stats updated", UW.current, sW.current), UW.current && sW.current <= 0 && qR(), clearInterval(EW.current), sW.current > 0 && (EW.current = setInterval((() => {
              sW.current = Math.max(sW.current - 1, 0), rR(), sW.current <= 0 && (clearInterval(EW.current), EW.current = null, IW.d.get("autoRespawn") && qR())
            }), 1e3)))
          },
          qR = () => {
            if (Date.now() - xR.current > 1e3) {
              const WW = () => {
                tR.gameBridge.send("respawn", null), xR.current = Date.now()
              };
              IW.d.get("autoRespawn") ? WW() : (0, AM.ab)((() => {
                WW()
              }), "video_respawn")
            }
          },
          ZW = (0, wW.useMemo)((() => {
            var WW;
            return null === (WW = (0, NM.l)(aR)) || void 0 === WW ? void 0 : WW.otherGameLinksOnRespawnPage
          }), [aR]),
          SW = 0 === sW.current,
          WR = (null === oW || void 0 === oW ? void 0 : oW.deathCount) === VW.current ? oW.text : null,
          RR = BW && YW && !yR,
          MR = eW && HW && null !== (WW = null === (RW = (0, mR.d)()) || void 0 === RW ? void 0 : RW.getBoundButton("menuConfirm")) && void 0 !== WW ? WW : null,
          wR = WW => SW ? WW : AW("respawnPage:actionInSeconds", {
            action: WW,
            seconds: sW.current
          });
        return (0, NW.jsx)(RM.c, {
          showing: BW,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, NW.jsx)(bw.b, {
            show: BW,
            children: (0, NW.jsxs)(MM.b, {
              close: () => {
                gR(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: UW.current || yR ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, BM.n)() && (0, NW.jsx)(zw.d, {
                onClick: yw.d,
                children: AW("homePage:backToGames")
              }), (0, NW.jsxs)("div", {
                className: "RespawnContainer",
                onClick: LW,
                children: [(0, NW.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, NW.jsx)("div", {
                    ref: OW,
                    className: "RespawnSideSquareBannerDiv",
                    children: MW[0] > 925 && (0, NW.jsx)(CM.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: OW
                      },
                      showing: RR,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, NW.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, NW.jsxs)("div", {
                      className: zR()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: eW
                      }),
                      children: [UW.current && (0, NW.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, NW.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, NW.jsx)(hW.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), AW("respawnPage:youDied")]
                        }), (0, NW.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === MR && (dW.current ? AW("respawnPage:pressAnywhereToContinue") : SW ? AW("respawnPage:respawning") : wR(AW("general:respawn"))), null !== MR && (0, NW.jsx)(iw.c, {
                            text: AW("controller:screensPressToContinue", {
                              button: iw.f
                            }),
                            glyph: MR,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), WR && (0, NW.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: WR
                        })]
                      }), !UW.current && (0, NW.jsxs)(NW.Fragment, {
                        children: [(0, NW.jsxs)("div", {
                          className: zR()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !ZW
                          }),
                          children: [jR && (0, NW.jsx)(zw.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, AM.ab)((() => {
                                (0, FW.f)("inGameReplay");
                                const WW = (0, wM.d)(aR);
                                CW(WW)
                              }), "video_start")
                            },
                            disabled: !SW || !vR,
                            touchPressOn: "pointerup",
                            children: wR(AW("respawnPage:playAgain"))
                          }), kR && (0, NW.jsx)(zw.h, {
                            className: "RespawnPageButton",
                            onClick: qR,
                            padDefaultFocus: !jR,
                            padBack: "sessionBasedGame:stayInLobby" === cR,
                            disabled: !SW || !vR,
                            touchPressOn: "pointerup",
                            children: wR(AW(cR))
                          }), !(0, BM.n)() && (0, NW.jsx)(zw.E, {
                            className: "RespawnPageButton",
                            onClick: yw.d,
                            disabled: !SW || !vR,
                            touchPressOn: "pointerup",
                            children: wR(AW("respawnPage:exitGame"))
                          })]
                        }), ZW && (0, NW.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, NW.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: AW("respawnPage:orTry")
                          }), (0, NW.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: ZW.map((WW => (0, NW.jsx)(eM.d, {
                              source: {
                                type: "game",
                                gameNameWithVariation: WW
                              },
                              disabled: !SW || !vR,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, FW.f)("inGameReplay");
                                const RW = (0, wM.d)(WW);
                                CW(RW)
                              }
                            }, WW)))
                          })]
                        })]
                      })]
                    })
                  }), (0, NW.jsx)("div", {
                    ref: nW,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, NW.jsx)("div", {
                  ref: uW,
                  className: "RespawnBottom",
                  children: (0, NW.jsx)(CM.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: uW
                    },
                    showing: RR,
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
    var IM = MW(34847);
    const oM = [{
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
      lM = [{
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
      FM = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      fM = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      QM = (0, wW.memo)((function() {
        const WW = (0, wW.useRef)(null);

        function RW(RW) {
          let {
            zWW: MW,
            screenPos: wW
          } = RW;
          const CW = WW.current;
          CW.getAnimations().forEach((WW => {
            WW.cancel()
          })), CW.classList.remove("HitmarkerCrit"), wW ? (CW.style.left = `${wW.x}%`, CW.style.top = `${wW.y}%`) : (CW.style.left = "50%", CW.style.top = "50%"), CW.style.rotate = 16 * (Math.random() - .5) + "deg", MW && CW.classList.add("HitmarkerCrit");
          CW.animate(MW ? lM : oM, MW ? fM : FM).onfinish = () => {
            CW.classList.remove("HitmarkerCrit")
          }
        }
        return (0, bR.f)("localGunHitmarker", (WW => {
          let {
            zWW: MW
          } = WW;
          RW({
            zWW: MW
          })
        })), (0, bR.f)("yourAttackHit", (WW => {
          let {
            zWW: MW,
            screenPos: wW
          } = WW;
          RW({
            zWW: MW,
            screenPos: FW.b.get("isTouchScreen") ? wW : void 0
          })
        })), (0, bR.f)("sendHitmarker", (WW => {
          let {
            zWW: MW,
            screenPos: wW
          } = WW;
          RW({
            zWW: MW,
            screenPos: wW
          })
        })), (0, NW.jsxs)("div", {
          ref: WW,
          className: "Hitmarker",
          children: [(0, NW.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, NW.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, NW.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, NW.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function rw() {
      const WW = (0, wW.useRef)(!0);
      return (0, bR.f)("localBlockMined", (() => {
        RR.d.play("blockMined")
      })), (0, bR.f)("yourAttackHit", (() => {
        RR.d.play("hitLanded")
      })), (0, bR.f)("localGunHitmarker", (() => {
        RR.d.play("hitLanded")
      })), (0, bR.f)("damagedByOtherPlayer", (() => {
        RR.d.play("damageTaken")
      })), (0, lW.d)("localPlayerAliveSet", (RW => {
        !RW && WW.current && RR.d.play("death"), WW.current = RW
      })), null
    }
    var cwW = MW(1537),
      XM = MW(34864),
      jw = MW.n(XM),
      kw = MW(1621),
      aw = MW(1609),
      sM = MW(2410),
      dM = MW(34920);
    const pM = TM.ce ? 7e7 : 7e3,
      hM = jw()("#ffffff").alpha(.5).string();

    function UM(WW) {
      const RW = (0, sM.e)(WW);
      return void 0 !== RW && "Gun" === (0, dM.itemTypeOf)(RW)
    }

    function EM(WW) {
      if (!WW) return console.error(`Killfeed colour was ${WW}`), hM;
      try {
        return jw()(WW).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${WW} is not a colour`), hM
      }
    }
    const VM = (0, wW.memo)((function() {
      const {
        t: WW
      } = (0, XW.C)(), RW = (0, wW.useRef)([]), MW = (0, LR.b)();
      return (0, lW.d)("kill", (function(wW) {
        var CW, zR;
        let {
          killer: AW,
          victim: bR,
          withItem: yR,
          killstreak: NW
        } = wW;
        const eW = RW.current;
        if (eW.length >= 3) {
          const WW = eW.shift();
          clearTimeout(WW.timeout)
        }
        const BW = tR.gameBridge.latest("hiddenPlayerNames"),
          TW = {
            deadName: gw(bR, WW),
            killerName: gw(AW, WW),
            isFriend: {
              killer: (0, kw.f)(AW.realName, BW),
              dead: (0, kw.f)(bR.realName, BW)
            },
            withItem: yR,
            wasHeadshot: !1,
            killstreak: NW,
            timeout: setTimeout((() => {
              eW.shift(), MW()
            }), pM),
            reactId: `${null!==(CW=AW.id)&&void 0!==CW?CW:AW.shownName}|${null!==(zR=bR.id)&&void 0!==zR?zR:bR.shownName}|${Date.now()}`,
            killerBackground: EM(AW.colour),
            deadBackground: EM(bR.colour)
          };
        eW.push(TW), MW()
      })), (0, wW.useEffect)((() => {
        const WW = RW.current;
        return () => {
          for (; WW.length > 0;) {
            const {
              timeout: RW
            } = WW.pop();
            clearTimeout(RW)
          }
        }
      }), []), (0, NW.jsx)("div", {
        className: "Killfeed",
        children: RW.current.map((WW => {
          let {
            deadName: RW,
            killerName: MW,
            withItem: wW,
            wasHeadshot: CW,
            killstreak: zR,
            killerBackground: AW,
            deadBackground: bR,
            reactId: yR,
            isFriend: eW
          } = WW;
          return (0, NW.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${AW} calc(100% - 10rem), ${bR} 100%)`
            },
            children: [zR >= 2 ? (0, NW.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, TM.N)(zR)
            }) : null, (0, NW.jsx)("div", {
              className: "KillfeedKillerName",
              children: MW
            }), eW.killer && (0, NW.jsx)(aw.d, {}), (0, NW.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: UM(wW) ? "7.5vmin" : "5vmin"
              },
              children: (0, NW.jsx)(cwW.c, {
                itemName: wW,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), CW ? (0, NW.jsx)(hW.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, NW.jsx)("div", {
              className: "KillfeedDeadName",
              children: RW
            }), eW.dead && (0, NW.jsx)(aw.d, {})]
          }, yR)
        }))
      })
    }));
    var mw = MW(34924),
      xw = MW(34930),
      vw = MW.n(xw),
      KM = MW(34745),
      uM = MW(34937),
      OM = MW(1126);
    const nM = {},
      GM = (0, wW.memo)((function() {
        const WW = (0, wW.useRef)({}),
          [, RW] = (0, wW.useReducer)((WW => WW + 1), 0);
        (0, bR.f)("setDirectionArrow", (MW => {
          let {
            id: wW,
            position: CW,
            style: zR,
            text: AW,
            uZ: bR
          } = MW;
          const yR = WW.current,
            NW = zR || nM,
            eW = AW,
            BW = yR[wW];
          if (!BW) return yR[wW] = {
            position: CW,
            style: NW,
            text: eW,
            shouldShowDistance: bR,
            iwW: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void RW();
          const tR = !vw()(BW.style, NW) || !vw()(BW.text, eW) || BW.shouldShowDistance !== bR;
          BW.position = CW, BW.style = NW, BW.text = eW, BW.shouldShowDistance = bR, tR && RW()
        })), (0, bR.f)("clearDirectionArrow", (MW => {
          let {
            id: wW
          } = MW;
          const CW = WW.current;
          if (null === wW)
            for (const WW in CW) delete CW[WW];
          else delete CW[wW];
          RW()
        })), (0, wW.useEffect)((() => {
          const RW = WW.current,
            MW = (0, OM.h)((() => {
              ! function(WW) {
                const RW = tR.gameBridge.lookup("localPos", null),
                  MW = KM.c - LM,
                  wW = (0, KM.l)() - LM;
                for (const CW in WW) {
                  const zR = WW[CW];
                  if (!zR.iwW) continue;
                  const AW = tR.gameBridge.lookup("screenPos", zR.position),
                    bR = AW.x - 50,
                    yR = AW.y - 50;
                  AW.x === zR.lastScreenX && AW.y === zR.lastScreenY || (zR.lastScreenX = AW.x, zR.lastScreenY = AW.y, zR.iwW.style.translate = `${AW.x}vw ${AW.y}vh`, zR.chevronElement && (zR.chevronElement.style.rotate = `${TM.d.fastATan2(yR,bR)}rad`));
                  const NW = Math.abs(bR) < MW && Math.abs(yR) < wW;
                  if (NW !== zR.onScreen && (zR.onScreen = NW, zR.iwW.classList.toggle("DirectionArrowOnScreen", NW)), zR.shouldShowDistance && zR.distanceElement) {
                    const WW = zR.position[0] - RW[0],
                      MW = zR.position[1] - RW[1],
                      wW = zR.position[2] - RW[2],
                      CW = Math.round(Math.sqrt(WW * WW + MW * MW + wW * wW));
                    (-1 === zR.lastRenderedDist || (0, uM.e)(CW, zR.lastRenderedDist, zR.lastDistUpdateTime)) && (zR.distanceElement.textContent = `${CW}m`, zR.lastRenderedDist = CW, zR.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(RW)
            }));
          return () => {
            MW();
            for (const WW in RW) delete RW[WW]
          }
        }), []);
        const MW = WW.current;
        return (0, NW.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(MW).map((WW => {
            var RW;
            let [wW, CW] = WW;
            const zR = null !== (RW = (0, YW.Lb)(CW.style)) && void 0 !== RW ? RW : "#ffffff";
            return (0, NW.jsxs)("div", {
              ref: WW => {
                MW[wW] && (MW[wW].iwW = WW)
              },
              className: "DirectionArrow",
              style: {
                fontSize: CW.style.fontSize,
                opacity: CW.style.opacity
              },
              children: [(0, NW.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: WW => {
                  MW[wW] && (MW[wW].chevronElement = WW)
                },
                children: [(0, NW.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, NW.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, NW.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, NW.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, NW.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: zR
                    }
                  }), (0, NW.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: zR
                    }
                  })]
                })]
              }), (0, NW.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: zR,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${zR}`
                }
              }), CW.text && (0, NW.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: zR,
                  fontWeight: CW.style.fontWeight,
                  fontStyle: CW.style.fontStyle
                },
                children: (0, NW.jsx)(yR.c, {
                  text: CW.text
                })
              }), CW.shouldShowDistance && (0, NW.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: WW => {
                  MW[wW] && (MW[wW].distanceElement = WW)
                },
                style: {
                  color: zR,
                  fontWeight: CW.style.fontWeight,
                  fontStyle: CW.style.fontStyle
                }
              })]
            }, wW)
          }))
        })
      })),
      LM = .5;
    const HM = (0, wW.memo)((function(WW) {
        let {
          isTouchScreen: RW
        } = WW;
        return (0, NW.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, NW.jsx)(SM, {}), RW && (0, NW.jsx)(kM, {})]
        })
      })),
      DM = {
        readyForNext: 0,
        running: 1
      },
      qw = 50;

    function ZM(WW) {
      console.assert(WW.state.current === DM.readyForNext);
      const RW = WW.queue.current,
        MW = WW.foreground.current;
      if (RW.length > 0 && MW) {
        const {
          toFraction: wW,
          toDuration: CW
        } = RW.shift();
        WW.state.current = DM.running, MW.style.transition = `transform ${Math.max(CW-qw,0)}ms linear`, MW.classList.remove("Complete"), WW.timeout.current = setTimeout((() => {
          MW.style.transform = `scaleX(${wW})`, WW.timeout.current = setTimeout((() => {
            1 === wW && MW.classList.add("Complete"), WW.state.current = DM.readyForNext, ZM(WW)
          }), Math.max(CW - qw, 0))
        }), qw)
      }
    }

    function SM() {
      const WW = (0, wW.useRef)([]),
        RW = (0, wW.useRef)(DM.readyForNext),
        MW = (0, wW.useRef)(void 0),
        CW = (0, wW.useRef)(null),
        zR = (0, wW.useRef)({
          queue: WW,
          state: RW,
          timeout: MW,
          foreground: CW
        }),
        AW = (0, JW.h)("showProgressBar");
      if ((0, wW.useLayoutEffect)((() => (AW && RW.current === DM.readyForNext && ZM(zR.current), () => {
          RW.current = DM.readyForNext, clearTimeout(MW.current), AW && (WW.current.length = 0)
        })), [AW]), (0, bR.f)("progressBarUpdate", (MW => {
          let {
            toFraction: wW,
            toDuration: CW
          } = MW;
          WW.current.push({
            toFraction: wW,
            toDuration: CW
          }), RW.current === DM.readyForNext && ZM(zR.current)
        })), !AW) return null;
      return (0, NW.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, NW.jsx)("div", {
          className: "ProgressBarForeground",
          ref: CW,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var Ww = MW(2766),
      Rw = MW(2757),
      Mw = MW(1526);
    const ww = (0, wW.memo)((function(WW) {
        let {
          durationMs: RW,
          endsAtMs: MW
        } = WW;
        const [, CW] = (0, wW.useReducer)((WW => WW + 1), 0), zR = null === MW ? RW : Math.max(MW - Date.now(), 0);
        return (0, wW.useEffect)((() => {
          if (null === MW || zR <= 0) return;
          const WW = setTimeout(CW, zR - 1e3 * (Math.ceil(zR / 1e3) - 1));
          return () => {
            clearTimeout(WW)
          }
        })), (0, NW.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, TM.cb)(zR)
        })
      })),
      Cw = (0, wW.memo)((function() {
        const WW = (0, lW.h)("localEffects");
        return (0, NW.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(WW).map((WW => {
            let [RW, {
              icon: MW,
              displayName: wW,
              durationMs: CW,
              endsAtMs: zR,
              level: AW
            }] = WW;
            return (0, NW.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, NW.jsx)(Mw.d, {
                icon: MW,
                className: "EffectInfoIcon"
              }), (0, NW.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== CW ? "0" : "1rem"
                },
                children: [(0, NW.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, NW.jsx)(yR.c, {
                    text: null !== wW && void 0 !== wW ? wW : RW,
                    className: "EffectInfoName SmallTextBold"
                  }), AW > 1 && (0, NW.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, TM.N)(AW)
                  })]
                }), null !== CW && (0, NW.jsx)(ww, {
                  durationMs: CW,
                  endsAtMs: zR
                })]
              })]
            }, RW)
          }))
        })
      }));
    var zC = MW(34939),
      Aw = MW(35075),
      bC = MW(173),
      yC = MW(1166),
      Nw = MW(2148);

    function ew(WW, RW) {
      (0, wW.useLayoutEffect)((() => {
        let RW, MW;
        const wW = requestAnimationFrame((() => {
          MW = setTimeout((() => {
            MW = void 0;
            const wW = WW();
            RW = "function" === typeof wW ? wW : void 0
          }), 0)
        }));
        return () => {
          var WW;
          cancelAnimationFrame(wW), clearTimeout(MW), null === (WW = RW) || void 0 === WW || WW()
        }
      }), RW)
    }

    function Bw(WW) {
      return 5 * (WW ? 4 : 3)
    }

    function tC(WW, RW, MW, wW, CW) {
      const zR = WW.getContext("2d");
      if (!zR) return null;
      const AW = RW.fontFamily,
        bR = RW.fontWeight;
      return WW.width = MW, WW.height = wW, zR.fillStyle = RW.color, zR.textAlign = "center", zR.textBaseline = "middle", zR.font = `${bR} ${CW}px ${AW}`, zR
    }
    const Tw = (0, wW.memo)((function(WW) {
      let {
        show: RW
      } = WW;
      const MW = (0, wW.useRef)(null),
        CW = (0, wW.useRef)(null),
        zR = (0, wW.useRef)(null);
      return (0, wW.useEffect)((() => {
        let WW = 0,
          RW = 0,
          MW = 0,
          wW = 0;
        const AW = (0, OM.h)((() => {
          var AW;
          WW++, RW++;
          const bR = performance.now();
          if (bR - MW < 1e3) return;
          const yR = Math.round(WW / (bR - MW) * 1e3);
          if (CW.current = yR, null === (AW = zR.current) || void 0 === AW || AW.call(zR, yR), WW = 0, MW = bR, yR < 55) {
            var NW, eW;
            wW += 1;
            const WW = oW.g.getItem("decreaseLoadDistPromptDeniedCount"),
              [RW, MW] = IW.d.get("minChunkAddDist");
            if (wW >= 15 && function(WW, RW) {
                const MW = tR.gameBridge.lookup("zk", null);
                return null !== MW && (MW.horizontal > WW || MW.vertical > RW)
              }(RW, MW) && (null !== (NW = oW.g.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== NW ? NW : 0) + 432e5 < Date.now() && (null !== (eW = oW.g.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== eW ? eW : 0) < 3) {
              oW.g.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              yC.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((wW => {
                wW ? (tR.gameBridge.send("setChunkAddDistance", {
                  horizontal: RW,
                  vertical: MW
                }), oW.g.setItem("chunkHorizAddDist", RW), oW.g.setItem("chunkVertAddDist", MW), PW.k.Sz("updatedChunkLoadDist"), oW.g.setItem("decreaseLoadDistPromptDeniedCount", 0)) : oW.g.setItem("decreaseLoadDistPromptDeniedCount", WW + 1)
              }))
            }
          } else wW = 0
        }));
        let bR = performance.now();
        RW = 0;
        let yR = null,
          NW = !document.hidden;

        function eW() {
          const WW = performance.now() - bR,
            MW = 1e3 * RW / WW;
          NW && (null === yR && (yR = MW), Nw.d.setFps(MW, yR)), RW = 0, bR = performance.now()
        }
        let BW = setInterval(eW, 15e3);

        function TW() {
          const WW = NW;
          NW = !document.hidden, !WW && NW && (RW = 0, bR = performance.now(), clearInterval(BW), BW = setInterval(eW, 15e3))
        }
        return document.addEventListener("visibilitychange", TW), () => {
          AW(), document.removeEventListener("visibilitychange", TW), clearInterval(BW)
        }
      }), []), ew((() => {
        var WW;
        if (!RW || zR.current) return;
        const wW = MW.current,
          AW = window.getComputedStyle(wW.parentElement),
          bR = null !== (WW = window.devicePixelRatio) && void 0 !== WW ? WW : 1,
          yR = parseFloat(AW.fontSize) * bR,
          NW = Math.round(3 * yR),
          eW = Math.round(yR),
          BW = tC(wW, AW, NW, eW, yR);
        if (!BW) return;
        const tR = WW => {
          BW.clearRect(0, 0, wW.width, wW.height), BW.fillText(WW.toString(), wW.width / 2, wW.height / 2)
        };
        zR.current = tR, null !== CW.current && tR(CW.current)
      }), [RW]), (0, NW.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: RW ? "flex" : "none"
        },
        children: [(0, NW.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, NW.jsx)("canvas", {
          className: "FpsCanvas",
          ref: MW,
          width: 48,
          height: 16
        })]
      })
    }));

    function gC(WW) {
      return Math.sign(WW) * Math.round(100 * Math.abs(WW))
    }

    function iC(WW) {
      let {
        getCoordinates: RW,
        showChunkCoords: MW
      } = WW;
      const CW = (0, wW.useRef)(null);
      return ew((() => {
        var WW;
        const wW = CW.current,
          zR = window.getComputedStyle(wW.parentElement),
          AW = null !== (WW = window.devicePixelRatio) && void 0 !== WW ? WW : 1,
          bR = parseFloat(zR.fontSize) * AW,
          yR = Math.round(bR * Bw(MW)),
          NW = Math.round(bR),
          eW = tC(wW, zR, yR, NW, bR);
        if (!eW) return;
        let BW = !0,
          TW = 0,
          gR = 0,
          iR = 0,
          YW = 0,
          JW = 0,
          PW = 0;
        const IW = () => {
          BW = !0
        };
        document.fonts.load(eW.font).then(IW, IW);
        const oW = () => {
          tC(wW, zR, yR, NW, bR), IW()
        };
        wW.addEventListener("contextrestored", oW);
        const lW = (0, OM.m)((() => {
          var WW, CW, zR, AW, yR, NW;
          const [IW, oW, lW] = RW(), FW = gC(IW), fW = gC(oW), QW = gC(lW);
          let rR = null;
          if (MW) {
            const WW = tR.gameBridge.lookup("localPos", null);
            rR = (0, ZW.hb)(WW[0], WW[1], WW[2])
          }
          const cR = null !== (WW = null === (CW = rR) || void 0 === CW ? void 0 : CW[0]) && void 0 !== WW ? WW : 0,
            XW = null !== (zR = null === (AW = rR) || void 0 === AW ? void 0 : AW[1]) && void 0 !== zR ? zR : 0,
            jR = null !== (yR = null === (NW = rR) || void 0 === NW ? void 0 : NW[2]) && void 0 !== yR ? yR : 0;
          if (!BW && FW === TW && fW === gR && QW === iR && cR === YW && XW === JW && jR === PW) return;
          BW = !1, TW = FW, gR = fW, iR = QW, YW = cR, JW = XW, PW = jR;
          const kR = [(FW / 100).toFixed(2), (fW / 100).toFixed(2), (QW / 100).toFixed(2)];
          rR && kR.unshift(`${cR} ${XW} ${jR}`), eW.clearRect(0, 0, wW.width, wW.height);
          const aR = wW.height / 2;
          for (let RW = 0; RW < kR.length; RW++) eW.fillText(kR[RW], 5 * bR * (RW + .5), aR)
        }));
        return () => {
          lW(), wW.removeEventListener("contextrestored", oW)
        }
      }), [RW, MW]), (0, NW.jsx)("div", {
        className: "CoordinateUI",
        children: (0, NW.jsx)("canvas", {
          ref: CW,
          className: "CoordinateCanvas",
          width: 16 * Bw(MW),
          height: 16
        })
      })
    }
    const Yw = (0, wW.memo)((function() {
        const WW = (0, wW.useCallback)((() => {
          const WW = tR.gameBridge.lookup("localPos", null);
          return [WW[0], WW[1], WW[2]]
        }), []);
        return (0, NW.jsx)(iC, {
          getCoordinates: WW,
          showChunkCoords: !1
        })
      })),
      Jw = (0, wW.memo)((function() {
        const WW = (0, wW.useCallback)((() => {
          const WW = tR.gameBridge.lookup("localPos", null),
            RW = bC.c.dw;
          let MW = WW[0] % RW,
            wW = WW[1] % RW,
            CW = WW[2] % RW;
          return MW < 0 && (MW += RW), wW < 0 && (wW += RW), CW < 0 && (CW += RW), [MW, wW, CW]
        }), []);
        return (0, NW.jsx)(iC, {
          getCoordinates: WW,
          showChunkCoords: !0
        })
      }));
    var Pw = MW(1637),
      Iw = MW(1157),
      ow = MW(1314),
      lw = MW(860),
      Fw = MW(1053),
      fw = MW(116),
      Qw = MW(34954),
      rC = MW(1264),
      cC = MW(2289);
    const Xw = (0, wW.memo)((function() {
      const WW = (0, JW.h)("auraPerLevel"),
        RW = (0, JW.h)("maxAuraLevel"),
        [MW, CW] = (0, wW.useState)((() => {
          var WW;
          return null !== (WW = tR.gameBridge.latest("aura")) && void 0 !== WW ? WW : void 0
        })),
        [zR, AW] = (0, wW.useState)((() => IW(MW))),
        [bR, yR] = (0, wW.useReducer)((WW => WW + 1), 0),
        eW = (0, wW.useRef)(null),
        BW = (0, wW.useRef)([]),
        TW = (0, wW.useRef)({
          width: 0,
          level: 0
        }),
        gR = (0, wW.useRef)(null),
        YW = (0, wW.useRef)(null);

      function PW() {
        if (null !== gR.current) return;
        if (0 === BW.current.length) return;
        const {
          width: WW,
          level: RW
        } = BW.current.shift();
        let MW;
        if (RW !== TW.current.level && RW > TW.current.level !== WW > TW.current.width) {
          const wW = RW > TW.current.level;
          MW = wW ? WW : 100 - WW, eW.current.style.transition = "none", eW.current.style.width = wW ? "0%" : "100%", eW.current.offsetWidth
        } else MW = Math.abs(WW - TW.current.width);
        const wW = 100 * MW / 20;
        eW.current.style.transition = `width ${wW}ms linear`, AW(WW), TW.current = {
          width: WW,
          level: RW
        }, BW.current.length > 0 && (gR.current = setTimeout((() => {
          gR.current = null, PW()
        }), wW))
      }

      function IW(MW) {
        return Math.floor(MW / WW) === RW ? 100 : MW % WW / WW * 100
      }
      return (0, wW.useEffect)((() => () => {
        clearTimeout(gR.current), clearTimeout(YW.current), gR.current = null, YW.current = null
      }), []), (0, lW.d)("aura", (RW => {
        if (YW.current && clearTimeout(YW.current), null === RW) return clearTimeout(gR.current), YW.current = null, gR.current = null, BW.current = [], TW.current = {
          width: 0,
          level: 0
        }, CW(void 0), void AW(0);
        YW.current = setTimeout((() => {
          const wW = Math.floor(MW / WW),
            zR = Math.floor(RW / WW),
            AW = IW(RW);
          RW > MW && Qw.b.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), zR > wW ? (zR % 5 === 0 && Qw.b.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), yR(), BW.current.push({
            width: 100,
            level: wW
          })) : zR < wW && BW.current.push({
            width: 0,
            level: wW
          }), RW === MW && zR === wW || BW.current.push({
            width: AW,
            level: zR
          }), CW(RW), PW()
        }), 50)
      })), (0, iR.f)(), 0 === RW ? null : (0, NW.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, NW.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, NW.jsx)(rC.b, {
            showSignal: bR,
            particleElement: (0, NW.jsx)("img", {
              src: (0, cC.g)("glint"),
              alt: ""
            })
          }), (0, NW.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, cC.g)("glint"),
            alt: "aura"
          }), (0, NW.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== MW && void 0 !== MW ? MW : 0) / WW)
          })]
        }), (0, NW.jsx)("div", {
          className: "AuraBar",
          children: (0, NW.jsx)("div", {
            ref: eW,
            className: "AuraBarBackground",
            style: {
              width: `${zR}%`
            }
          })
        })]
      })
    }));
    var jC = MW(1994);

    function kC(WW) {
      WW.timed && (WW.endedAnimation = WW.timed.animation, WW.timed = null)
    }
    const aC = (0, wW.memo)((function() {
      const WW = (0, wW.useRef)(null),
        RW = (0, wW.useRef)(null),
        MW = (0, wW.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, bR.f)("middleScreenBarInitiate", (WW => {
        var wW;
        let {
          duration: CW,
          xZ: zR,
          horizBarRemOffset: AW
        } = WW;
        const bR = MW.current;
        kC(bR);
        const yR = RW.current;
        if (!(CW >= 0) || !yR) return;
        null === (wW = bR.endedAnimation) || void 0 === wW || wW.cancel(), bR.endedAnimation = null;
        const NW = yR.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: CW,
          fill: "forwards"
        });
        bR.timed = {
          xZ: zR,
          horizBarRemOffset: AW,
          animation: NW
        }
      })), (0, bR.f)("middleScreenBarRemove", (() => {
        kC(MW.current)
      })), (0, wW.useEffect)((() => {
        const wW = MW.current;
        let CW = Number.NaN,
          zR = Number.NaN,
          AW = Number.NaN;
        return (0, OM.g)((() => {
          var MW, bR, yR, NW;
          const eW = WW.current,
            BW = RW.current;
          if (!eW || !BW) return;
          null !== (MW = wW.timed) && void 0 !== MW && MW.xZ && "finished" === wW.timed.animation.playState && kC(wW), null === (bR = wW.endedAnimation) || void 0 === bR || bR.cancel(), wW.endedAnimation = null;
          let TW = wW.timed ? 1 : 0;
          if (!wW.timed) {
            const WW = tR.gameBridge.lookup("momentumFrac", null);
            TW = WW > 0 ? 1 : 0, WW !== AW && (AW = WW, BW.style.transform = `scaleX(${WW})`)
          }
          const gR = null !== (yR = null === (NW = wW.timed) || void 0 === NW ? void 0 : NW.horizBarRemOffset) && void 0 !== yR ? yR : 0;
          gR === CW && TW === zR || (CW = gR, zR = TW, eW.style.transform = `translateX(calc(-50% + ${gR}rem)) scaleX(${TW})`)
        }))
      }), []), (0, NW.jsx)("div", {
        className: "MiddleScreenBar",
        ref: WW,
        children: (0, NW.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: RW
        })
      })
    }));
    var sw = MW(3662),
      dw = MW(3666);

    function pw() {
      const {
        t: WW
      } = (0, XW.C)(), RW = (0, bR.i)("serverUpdating", null), MW = (0, dw.e)(250, null !== RW);
      return null === RW || MW - RW > 3e4 ? null : (0, NW.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, NW.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: WW("updateWaiting:updatingIn", {
            countdown: (0, sw.r)(RW - MW)
          })
        }), (0, NW.jsx)("div", {
          children: WW("updateWaiting:bringYouBack")
        })]
      })
    }
    var hw = MW(35093),
      Uw = MW(1578);
    const Ew = [{
        translationKey: "general:interact"
      }],
      Vw = (0, wW.memo)((function() {
        const WW = (0, JW.h)("crosshairText"),
          {
            interactPrompt: RW,
            blockText: MW,
            neededTool: CW
          } = (0, lW.h)("crosshairTarget"),
          {
            isTouchScreen: zR
          } = (0, FW.i)(["isTouchScreen"]),
          AW = (0, QW.q)(),
          eW = (0, cR.d)("alt-fire");
        (0, wW.useEffect)((() => {
          tR.gameBridge.send("setCrosshairInteractPrompt", !zR || AW ? "key" : (0, IR.n)() ? "touch" : "off")
        }), [zR, AW]);
        const [BW, TW] = (0, wW.useReducer)((WW => WW + 1), 0);
        (0, bR.f)("customBindingsChanged", TW);
        var gR;
        if (null !== RW && (AW && null !== eW || !zR && null !== (0, Uw.o)("alt-fire"))) return (0, NW.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, NW.jsx)(fW.b, {
            noaAction: "alt-fire"
          }), (0, NW.jsx)(yR.c, {
            text: null !== (gR = RW.label) && void 0 !== gR ? gR : Ew
          })]
        });
        let iR = null;
        return null !== MW ? iR = MW : null !== WW && "" !== WW ? iR = WW : null !== CW && (iR = [{
          icon: CW,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), iR ? (0, NW.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, NW.jsx)(yR.c, {
            text: iR
          })
        }) : null
      }));
    var mC = MW(1996);
    const xC = (0, wW.memo)((function() {
      var WW;
      const {
        interactPrompt: RW
      } = (0, lW.h)("crosshairTarget"), {
        openInGameMenuName: MW,
        openEverythingMenuName: wW
      } = (0, FW.i)(["openInGameMenuName", "openEverythingMenuName"]), CW = (0, bR.i)("aimingOverlay", "none"), zR = (0, nW.n)(), AW = (0, mC.e)();
      return null === RW || null !== MW || null !== wW || "sniper" === CW || zR || AW ? null : (0, NW.jsx)(vC, {
        label: null !== (WW = RW.label) && void 0 !== WW ? WW : Ew
      })
    }));

    function vC(WW) {
      let {
        label: RW
      } = WW;
      const MW = NR(HW.b.Interact, !1);
      return (0, NW.jsx)("div", {
        ref: MW,
        className: "TouchInteractHit",
        children: (0, NW.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, NW.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, NW.jsx)(hW.e, {
              name: "hand-back-point-up"
            })
          }), (0, NW.jsx)(yR.c, {
            text: RW
          })]
        })
      })
    }
    var Kw = MW(3735),
      uw = MW(3803),
      Ow = MW(35111),
      nw = MW(35119);
    const Gw = (0, wW.memo)((function() {
      const WW = (0, JW.c)();
      return (0, NW.jsx)(NW.Fragment, {
        children: WW.map(((WW, RW) => (0, NW.jsx)(nw.e, {
          className: "HeaderChip",
          text: WW
        }, RW)))
      })
    }));
    var Lw = MW(2708),
      Hw = MW(3628);
    const Dw = (0, wW.memo)((function() {
      const {
        t: WW
      } = (0, XW.C)(), [RW, MW] = (0, wW.useState)(!1), CW = (0, wW.useRef)(!1), zR = function(WW) {
        let {
          gameNameWithVariation: RW,
          lobbyName: MW
        } = WW;
        if ((0, lw.k)(RW)) return qC;
        if ((0, Fw.z)(MW)) return Zw;
        return null
      }((0, lW.h)("connectedGame"));
      if (!zR || RW) return null;
      const AW = Hw.b[zR.target];
      return (0, NW.jsx)(pW.e, {
        tooltipInner: (0, NW.jsx)("div", {
          children: WW(AW.reportButtonTooltip)
        }),
        children: (0, NW.jsx)("div", {
          children: (0, NW.jsx)(zw.M, {
            onClick: () => {
              CW.current || (CW.current = !0, (0, Hw.e)(zR.reportPolicyIds, AW).then((WW => {
                null !== WW && void 0 !== WW && WW.selectedPolicyId && (tR.gameBridge.send("reportLobbyOrGame", {
                  target: zR.target,
                  ew: WW.selectedPolicyId,
                  details: WW.KU
                }), MW(!0))
              })).finally((() => {
                CW.current = !1
              })))
            }
          })
        })
      })
    }));
    const qC = {
        target: "customGame",
        reportPolicyIds: Lw.e
      },
      Zw = {
        target: "lobby",
        reportPolicyIds: Lw.f
      };
    var Sw = MW(7683),
      WC = MW(35123),
      RC = MW(35126),
      MC = MW(35135),
      wC = MW(35138),
      CC = MW(35161);

    function zz(WW) {
      return WW instanceof Error && AC.has(WW.message) ? WW.message : void 0
    }
    const AC = new Set([CC.d.saveBusy.text, CC.d.saveClosed.text, CC.d.cropBusy.text]);
    let bz = !1;
    async function yz(WW, RW) {
      var MW, wW;
      const {
        files: CW
      } = RW, zR = CW.replayKey();
      if (null === zR) return "none";
      if (bz) throw new Error(CC.d.saveBusy.text);
      const AW = null !== (MW = null === (wW = CW.saveRefusal) || void 0 === wW ? void 0 : wW.call(CW)) && void 0 !== MW ? MW : null;
      if (null !== AW) throw new Error(AW);
      bz = !0;
      try {
        return await async function(WW, RW, MW) {
          const {
            files: wW
          } = RW, CW = () => wW.replayKey() === MW, zR = (WW, RW) => {
            CW() && wW.markSaved(WW, RW)
          };
          let AW = null;
          if (RW.pickerSupported()) {
            try {
              if (AW = await RW.chooseFile(WW ? null : wW.fileHandle()), null === AW) return "JA"
            } catch (yR) {
              RW.onFallback(yR)
            }
            if (!CW()) throw new Error(CC.d.saveClosed.text)
          }
          const bR = await wW.encode();
          if (null === bR) {
            if (null !== AW) throw new Error(CC.d.saveClosed.text);
            return "none"
          }
          if (null !== AW) try {
            return await RW.write(AW, bR), zR(AW), "written"
          } catch (yR) {
            RW.onFallback(yR)
          }
          return zR(null, RW.download(bR)), "downloaded"
        }(WW, RW, zR)
      } finally {
        bz = !1
      }
    }
    var NC = MW(3587),
      eC = MW(93);
    const BC = [1, 2, 4, 8, 16, 32, 64];

    function tz(WW, RW) {
      return Math.max(0, Math.min(WW, RW))
    }

    function TC(WW, RW, MW) {
      return MW <= RW ? 0 : (WW - RW) / (MW - RW) * 100
    }

    function gz(WW, RW, MW) {
      const wW = MW - RW;
      return Math.round(RW + WW / 100 * wW)
    }

    function iz(WW, RW) {
      const MW = Math.floor(WW / RW / 60),
        wW = Math.floor(WW / RW % 60),
        CW = WW % RW;
      return `${MW.toString().padStart(2,"0")}:${wW.toString().padStart(2,"0")}:${CW.toString().padStart(2,"0")}`
    }

    function YC(WW) {
      return Number.isInteger(WW) || BC.includes(WW) ? `${Math.round(WW)}\xd7` : `${WW.toFixed(1)}\xd7`
    }

    function JC(WW, RW) {
      const MW = BC.indexOf(WW);
      if (-1 !== MW) return "in" === RW ? BC[Math.min(MW + 1, BC.length - 1)] : BC[Math.max(MW - 1, 0)];
      if ("in" === RW) {
        for (const RW of BC)
          if (RW >= WW) return RW;
        return WW
      }
      for (let wW = BC.length - 1; wW >= 0; wW--)
        if (BC[wW] <= WW) return BC[wW];
      return BC[0]
    }

    function PC(WW, RW) {
      const MW = RW.getBoundingClientRect();
      if (MW.width <= 0) return 0;
      const wW = (WW - MW.left) / MW.width * 100;
      return Math.max(0, Math.min(100, wW))
    }

    function IC(WW, RW) {
      return RW <= 0 ? 0 : WW / RW * 100
    }

    function oC(WW, RW, MW) {
      const wW = [];
      let CW = Math.ceil(WW / MW) * MW;
      for (; CW <= RW;) wW.push(CW), CW += MW;
      return wW
    }
    var lC = MW(35164);
    const FC = [{
        label: "Linear",
        easing: lC.i
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: lC.f
      }, {
        label: "Ease Out",
        easing: lC.g
      }, {
        label: "Ease In Out",
        easing: lC.d
      }],
      fC = 200,
      QC = 150;

    function rz(WW) {
      const RW = WW => Number(WW.toFixed(3)).toString();
      return `cubic-bezier(${RW(WW[0])}, ${RW(WW[1])}, ${RW(WW[2])}, ${RW(WW[3])})`
    }

    function cz(WW, RW) {
      return {
        cx: 25 + WW * QC,
        cy: 25 + (1 - RW) * QC
      }
    }

    function XC(WW, RW, MW) {
      const wW = WW - MW.left,
        CW = RW - MW.top;
      return {
        x: TM.d.clamp((wW - 25) / QC, 0, 1),
        y: TM.d.clamp(1 - (CW - 25) / QC, -1, 2)
      }
    }

    function jz(WW, RW, MW, wW, CW) {
      return {
        x: (0, lC.p)(WW, MW, CW),
        y: (0, lC.p)(RW, wW, CW)
      }
    }
    const kz = (0, wW.memo)((function(WW) {
      let {
        value: RW,
        onChange: MW
      } = WW;
      const CW = (0, wW.useRef)(null),
        zR = (0, wW.useRef)(null),
        [AW, bR] = (0, wW.useState)(null),
        yR = (0, wW.useCallback)((() => {
          const WW = CW.current;
          if (!WW) return;
          const MW = WW.getContext("2d");
          if (!MW) return;
          const wW = window.devicePixelRatio || 1;
          WW.width = fC * wW, WW.height = fC * wW, MW.setTransform(wW, 0, 0, wW, 0, 0), MW.clearRect(0, 0, fC, fC), MW.fillStyle = "rgba(38, 52, 93, 0.85)", MW.fillRect(0, 0, fC, fC), MW.beginPath();
          const zR = cz(0, 0),
            bR = cz(1, 1);
          MW.moveTo(zR.cx, zR.cy), MW.lineTo(bR.cx, bR.cy), MW.strokeStyle = "rgba(164, 164, 164, 0.35)", MW.setLineDash([3, 3]), MW.stroke(), MW.setLineDash([]);
          const [yR, NW, eW, BW] = RW, tR = cz(yR, NW), TW = cz(eW, BW);
          MW.strokeStyle = "rgba(252, 211, 115, 0.55)", MW.lineWidth = 1.5, MW.beginPath(), MW.moveTo(zR.cx, zR.cy), MW.lineTo(tR.cx, tR.cy), MW.moveTo(bR.cx, bR.cy), MW.lineTo(TW.cx, TW.cy), MW.stroke(), MW.strokeStyle = "#fcd373", MW.lineWidth = 2, MW.beginPath();
          for (let RW = 0; RW <= 50; RW++) {
            const WW = jz(yR, NW, eW, BW, RW / 50),
              wW = cz(WW.x, WW.y);
            0 === RW ? MW.moveTo(wW.cx, wW.cy) : MW.lineTo(wW.cx, wW.cy)
          }
          MW.stroke();
          const gR = (WW, RW, wW) => {
            MW.beginPath(), MW.arc(WW, RW, wW ? 6 : 5, 0, 2 * Math.PI), MW.fillStyle = wW ? "#ffb914" : "#fcd373", MW.fill(), MW.strokeStyle = "#1a1f2e", MW.lineWidth = 1.5, MW.stroke()
          };
          gR(tR.cx, tR.cy, "p1" === AW), gR(TW.cx, TW.cy, "p2" === AW)
        }), [AW, RW]);
      (0, wW.useEffect)((() => {
        yR()
      }), [yR]);
      const eW = (0, wW.useCallback)(((WW, wW) => {
          const AW = CW.current,
            bR = zR.current;
          if (!AW || !bR) return;
          const yR = AW.getBoundingClientRect(),
            {
              x: NW,
              y: eW
            } = XC(WW, wW, yR);
          MW("p1" === bR ? [NW, eW, RW[2], RW[3]] : [RW[0], RW[1], NW, eW])
        }), [MW, RW]),
        BW = (0, wW.useCallback)((WW => {
          const MW = CW.current;
          if (!MW) return;
          const wW = MW.getBoundingClientRect();
          let {
            x: AW,
            y: yR
          } = XC(WW.clientX, WW.clientY, wW);
          AW = TM.d.clamp(AW, 0, 1), yR = TM.d.clamp(yR, 0, 1);
          const [NW, BW, tR, TW] = RW.map((WW => TM.d.clamp(WW, 0, 1))), gR = Math.hypot(AW - NW, yR - BW), iR = Math.hypot(AW - tR, yR - TW), YW = gR <= iR ? "p1" : "p2";
          ("p1" === YW ? gR : iR) > .12 || (zR.current = YW, bR(YW), MW.setPointerCapture(WW.pointerId), eW(WW.clientX, WW.clientY))
        }), [eW, RW]),
        tR = (0, wW.useCallback)((WW => {
          zR.current && eW(WW.clientX, WW.clientY)
        }), [eW]),
        TW = (0, wW.useCallback)((WW => {
          zR.current = null, bR(null), WW.currentTarget.hasPointerCapture(WW.pointerId) && WW.currentTarget.releasePointerCapture(WW.pointerId)
        }), []);
      return (0, NW.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, NW.jsx)("canvas", {
          ref: CW,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: fC,
            height: fC
          },
          onPointerDown: BW,
          onPointerMove: tR,
          onPointerUp: TW,
          onPointerCancel: TW
        }), (0, NW.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: rz(RW)
        })]
      })
    }));
    var az = MW(1493),
      sC = MW(1480);
    const dC = 12;

    function pC(WW) {
      return {
        left: WW.left + WW.width / 2,
        top: WW.top - 8
      }
    }

    function hC(WW, RW) {
      const [MW, CW] = (0, wW.useState)(null);
      return (0, wW.useLayoutEffect)((() => {
        const MW = WW.current;
        if (!MW) return;
        const {
          width: wW,
          height: zR
        } = MW.getBoundingClientRect();
        CW(function(WW, RW, MW) {
          const wW = window.innerWidth,
            CW = window.innerHeight,
            zR = RW / 2;
          let AW = WW.left + WW.width / 2;
          AW = Math.max(dC + zR, Math.min(AW, wW - dC - zR));
          const bR = WW.top - 8 - dC,
            yR = CW - WW.bottom - 8 - dC,
            NW = bR < MW && yR >= bR;
          let eW;
          NW ? (eW = WW.bottom + 8, eW + MW > CW - dC && (eW = CW - dC - MW), eW = Math.max(dC, eW)) : (eW = WW.top - 8, eW - MW < dC && (eW = dC + MW));
          return {
            left: AW,
            top: eW,
            placeBelow: NW
          }
        }(RW, wW, zR))
      }), [RW, WW]), MW
    }

    function UC(WW, RW, MW) {
      (0, wW.useEffect)((() => (0, sC.b)("pointerdown", (wW => {
        var CW, zR;
        const AW = wW.target;
        AW instanceof Node && (null !== (CW = WW.current) && void 0 !== CW && CW.contains(AW) || null !== MW && void 0 !== MW && null !== (zR = MW.current) && void 0 !== zR && zR.contains(AW) || (0, az.j)(AW) || RW())
      }))), [MW, RW, WW])
    }

    function EC(WW) {
      let {
        label: RW,
        value: MW,
        onChange: wW
      } = WW;
      return (0, NW.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, NW.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: RW
        }), (0, NW.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((WW, RW) => (0, NW.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, NW.jsx)("span", {
              children: WW
            }), (0, NW.jsx)("input", {
              type: "number",
              step: "any",
              value: MW[RW],
              onChange: WW => {
                const CW = Number.parseFloat(WW.target.value);
                if (Number.isNaN(CW)) return;
                const zR = [MW[0], MW[1], MW[2]];
                zR[RW] = CW, wW(zR)
              }
            })]
          }, WW)))
        })]
      })
    }
    const VC = (0, wW.memo)((function(WW) {
        var RW, MW, CW;
        let {
          keyframe: AW,
          anchor: bR,
          hasOutgoingSegment: yR,
          onClose: eW,
          onApply: BW,
          onDelete: tR,
          onUseCurrentCamera: TW
        } = WW;
        const gR = (0, wW.useRef)(null),
          iR = hC(gR, bR.rect),
          [YW, JW] = (0, wW.useState)((() => [AW.position[0], AW.position[1], AW.position[2]])),
          [PW, IW] = (0, wW.useState)((() => [AW.direction[0], AW.direction[1], AW.direction[2]])),
          [oW, lW] = (0, wW.useState)((() => AW.easing));
        (0, wW.useEffect)((() => {
          JW([AW.position[0], AW.position[1], AW.position[2]]), IW([AW.direction[0], AW.direction[1], AW.direction[2]]), lW(AW.easing)
        }), [AW]), UC(gR, eW);
        const FW = (0, wW.useCallback)((() => {
            BW({
              WR: AW.WR,
              position: YW,
              direction: PW,
              easing: oW
            }), eW()
          }), [PW, oW, AW.WR, BW, eW, YW]),
          fW = (0, wW.useCallback)((() => {
            tR(AW.WR), eW()
          }), [AW.WR, tR, eW]),
          QW = (0, wW.useCallback)((() => {
            const WW = TW();
            WW && (JW([WW.position[0], WW.position[1], WW.position[2]]), IW([WW.direction[0], WW.direction[1], WW.direction[2]]))
          }), [TW]),
          rR = pC(bR.rect);
        return (0, NW.jsxs)("div", {
          ref: gR,
          className: zR()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (RW = null === iR || void 0 === iR ? void 0 : iR.placeBelow) && void 0 !== RW && RW,
            Positioned: null !== iR
          }),
          style: {
            left: `${null!==(MW=null===iR||void 0===iR?void 0:iR.left)&&void 0!==MW?MW:rR.left}px`,
            top: `${null!==(CW=null===iR||void 0===iR?void 0:iR.top)&&void 0!==CW?CW:rR.top}px`
          },
          onPointerDown: WW => {
            WW.stopPropagation()
          },
          children: [(0, NW.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, NW.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, NW.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", bR.WR]
            })]
          }), (0, NW.jsx)(EC, {
            label: "Position",
            value: YW,
            onChange: JW
          }), (0, NW.jsx)(EC, {
            label: "Direction",
            value: PW,
            onChange: IW
          }), yR && (0, NW.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, NW.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, NW.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: FC.map((WW => {
                const RW = (MW = oW, wW = WW.easing, MW[0] === wW[0] && MW[1] === wW[1] && MW[2] === wW[2] && MW[3] === wW[3]);
                var MW, wW;
                return (0, NW.jsx)(zw.O, {
                  className: zR()("ReplayKeyframePopoverPreset", {
                    Active: RW
                  }),
                  onClick: () => {
                    lW(WW.easing)
                  },
                  children: WW.label
                }, WW.label)
              }))
            }), (0, NW.jsx)(kz, {
              value: oW,
              onChange: lW
            })]
          }), (0, NW.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, NW.jsx)(zw.h, {
              className: "ReplayViewerCompactButton",
              onClick: QW,
              children: "Use current view"
            }), (0, NW.jsx)(zw.m, {
              className: "ReplayViewerCompactButton",
              onClick: FW,
              children: "Apply"
            }), (0, NW.jsx)(zw.E, {
              className: "ReplayViewerCompactButton",
              onClick: fW,
              children: "Delete"
            })]
          })]
        })
      })),
      mz = (0, wW.memo)((function(WW) {
        var RW, MW, CW;
        let {
          anchor: AW,
          hasPlaybackMark: bR,
          onClose: yR,
          onMark: eW,
          onZoom: BW,
          onCrop: tR,
          onDeleteKeyframes: TW,
          onClearMark: gR
        } = WW;
        const iR = (0, wW.useRef)(null),
          YW = hC(iR, AW.rect),
          JW = pC(AW.rect),
          PW = {
            startTick: AW.startTick,
            endTick: AW.endTick
          },
          IW = AW.endTick > AW.startTick;
        return UC(iR, yR), (0, NW.jsx)("div", {
          ref: iR,
          className: zR()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (RW = null === YW || void 0 === YW ? void 0 : YW.placeBelow) && void 0 !== RW && RW,
            Positioned: null !== YW
          }),
          style: {
            left: `${null!==(MW=null===YW||void 0===YW?void 0:YW.left)&&void 0!==MW?MW:JW.left}px`,
            top: `${null!==(CW=null===YW||void 0===YW?void 0:YW.top)&&void 0!==CW?CW:JW.top}px`
          },
          onPointerDown: WW => {
            WW.stopPropagation()
          },
          children: (0, NW.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, NW.jsx)(zw.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                eW(PW)
              },
              disabled: !IW,
              children: (0, NW.jsx)("span", {
                children: " Play range "
              })
            }), (0, NW.jsx)(zw.h, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                BW(PW)
              },
              children: (0, NW.jsx)("span", {
                children: " Zoom "
              })
            }), (0, NW.jsx)(zw.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                tR(PW)
              },
              disabled: !IW,
              children: (0, NW.jsx)("span", {
                children: " Crop "
              })
            }), (0, NW.jsx)(zw.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                TW(PW)
              },
              children: (0, NW.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), bR && (0, NW.jsx)(zw.O, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                gR()
              },
              children: (0, NW.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      xz = (0, wW.memo)((function(WW) {
        var RW, MW;
        let {
          maxTick: CW,
          displayTick: AW,
          FRW: bR,
          cameraKeyframes: yR,
          playbackMark: eW,
          onSeek: BW,
          onPause: tR,
          onScrubTickChange: TW,
          onMoveCameraKeyframe: gR,
          onUpdateCameraKeyframe: iR,
          onDeleteCameraKeyframe: YW,
          onUseCurrentCamera: JW,
          onMarkRange: PW,
          onCropRange: IW,
          onDeleteKeyframesInRange: oW,
          onClearMark: lW,
          zoomLevel: FW,
          onZoomLevelChange: fW
        } = WW;
        const QW = (0, wW.useRef)(null),
          rR = (0, wW.useRef)(null),
          cR = (0, wW.useRef)(!1),
          XW = (0, wW.useRef)(!1),
          jR = (0, wW.useRef)(FW),
          kR = (0, wW.useRef)(null),
          aR = (0, wW.useRef)(null),
          sW = (0, wW.useRef)(null),
          dW = (0, wW.useRef)(null),
          [pW, hW] = (0, wW.useState)(null),
          [UW, EW] = (0, wW.useState)(AW),
          [VW, mR] = (0, wW.useState)(null),
          [xR, vR] = (0, wW.useState)(null),
          [KW, uW] = (0, wW.useState)(null),
          [OW, nW] = (0, wW.useState)(null),
          GW = (0, wW.useMemo)((() => yR.map((WW => WW.WR))), [yR]),
          LW = null !== pW && void 0 !== pW ? pW : AW,
          {
            viewStart: HW,
            viewEnd: DW
          } = (0, wW.useMemo)((() => function(WW) {
            const RW = WW.maxTick + 1,
              MW = Math.max(1, Math.ceil(RW / WW.zoomLevel)),
              wW = Math.floor(MW / 2);
            let CW = WW.centerTick - wW;
            return CW = Math.max(0, Math.min(CW, WW.maxTick - MW + 1)), {
              viewStart: CW,
              viewEnd: Math.min(WW.maxTick, CW + MW - 1)
            }
          }({
            maxTick: CW,
            zoomLevel: FW,
            centerTick: UW
          })), [CW, FW, UW]);
        (0, wW.useEffect)((() => {
          if (null !== pW || null !== aR.current || null !== sW.current || null !== dW.current) return;
          if (cR.current) return void(cR.current = !1);
          if (XW.current) return void(XW.current = !1);
          const WW = jR.current !== FW;
          jR.current = FW, WW && EW(AW)
        }), [FW, AW, pW]);
        const qR = (0, wW.useCallback)((WW => {
            let RW = tz(WW, CW);
            return eW && (RW = Math.max(eW.inTick, Math.min(RW, eW.outTick))), RW
          }), [CW, eW]),
          ZW = (0, wW.useCallback)(((WW, RW) => {
            const MW = qR(WW);
            BW(MW), RW && EW(MW)
          }), [qR, BW]),
          SW = (0, wW.useCallback)(((WW, RW) => {
            const MW = qR(WW);
            hW(MW), TW(MW), ZW(MW, RW)
          }), [qR, ZW, TW]),
          WR = (0, wW.useCallback)((() => {
            hW((WW => (null !== WW && EW(WW), null))), TW(null)
          }), [TW]),
          RR = (0, wW.useCallback)((() => {
            uW(null), nW(null)
          }), []),
          MR = (0, wW.useCallback)((WW => {
            const RW = QW.current;
            if (!RW) return 0;
            return tz(gz(PC(WW, RW), HW, DW), CW)
          }), [CW, DW, HW]),
          wR = (0, wW.useCallback)((WW => {
            const RW = rR.current;
            if (!RW) return 0;
            return tz(gz(PC(WW, RW), 0, CW), CW)
          }), [CW]),
          CR = (0, wW.useMemo)((() => {
            if (!VW) return [...GW];
            const WW = GW.filter((WW => WW !== VW.fromTick));
            return WW.push(VW.previewTick), WW.sort(((WW, RW) => WW - RW)), WW
          }), [GW, VW]),
          zM = (0, wW.useMemo)((() => {
            var WW;
            return xR && null !== (WW = yR.find((WW => WW.WR === xR.WR))) && void 0 !== WW ? WW : null
          }), [yR, xR]),
          AR = (0, wW.useMemo)((() => !!zM && yR.some((WW => WW.WR > zM.WR))), [yR, zM]);
        (0, wW.useEffect)((() => {
          xR && !zM && vR(null)
        }), [xR, zM]), (0, wW.useEffect)((() => {
          if (!OW) return () => {};
          const WW = WW => {
            "Escape" === WW.key && RR()
          };
          return window.addEventListener("keydown", WW), () => {
            window.removeEventListener("keydown", WW)
          }
        }), [RR, OW]);
        const bM = (0, wW.useCallback)(((WW, RW) => {
            RR(), tR(), BW(WW, {
              ignorePlaybackMark: !0
            }), vR({
              WR: WW,
              rect: RW.getBoundingClientRect()
            })
          }), [RR, tR, BW]),
          yM = (0, wW.useCallback)(((WW, RW) => MW => {
            0 === MW.button && (MW.stopPropagation(), vR(null), RR(), tR(), kR.current = {
              fromTick: WW,
              startX: MW.clientX,
              startY: MW.clientY,
              didDrag: !1,
              track: RW
            }, mR({
              fromTick: WW,
              previewTick: WW,
              track: RW
            }), MW.currentTarget.setPointerCapture(MW.pointerId))
          }), [RR, tR]),
          NR = (0, wW.useCallback)((WW => {
            if (!VW) return;
            WW.stopPropagation();
            const RW = kR.current;
            if (RW && !RW.didDrag) {
              const MW = WW.clientX - RW.startX,
                wW = WW.clientY - RW.startY;
              Math.hypot(MW, wW) > 5 && (RW.didDrag = !0)
            }
            const MW = "detail" === VW.track ? MR(WW.clientX) : wR(WW.clientX);
            MW !== VW.previewTick && mR({
              ...VW,
              previewTick: MW
            })
          }), [VW, MR, wR]),
          eR = (0, wW.useCallback)((WW => {
            if (!VW) return;
            WW.stopPropagation();
            const RW = kR.current,
              MW = "detail" === VW.track ? MR(WW.clientX) : wR(WW.clientX);
            RW && !RW.didDrag ? bM(RW.fromTick, WW.currentTarget) : MW !== VW.fromTick && gR(VW.fromTick, MW), mR(null), kR.current = null, WW.currentTarget.releasePointerCapture(WW.pointerId)
          }), [VW, gR, bM, MR, wR]),
          BR = (0, wW.useCallback)((WW => {
            if (0 !== WW.button) return;
            vR(null), tR();
            const RW = MR(WW.clientX);
            aR.current = {
              pointerId: WW.pointerId,
              startX: WW.clientX,
              startY: WW.clientY,
              startTick: RW,
              currentTick: RW,
              didSelect: !1
            }, uW(null), nW(null), WW.currentTarget.setPointerCapture(WW.pointerId)
          }), [tR, MR]),
          tM = (0, wW.useCallback)((WW => {
            const RW = aR.current;
            if (!RW || RW.pointerId !== WW.pointerId) return;
            const MW = MR(WW.clientX);
            if (RW.currentTick = MW, !RW.didSelect) {
              const MW = WW.clientX - RW.startX,
                wW = WW.clientY - RW.startY;
              if (Math.hypot(MW, wW) <= 5) return;
              RW.didSelect = !0
            }
            const wW = Math.min(RW.startTick, MW),
              CW = Math.max(RW.startTick, MW);
            uW({
              startTick: wW,
              endTick: CW
            })
          }), [MR]),
          TR = (0, wW.useCallback)((WW => {
            const RW = aR.current;
            if (!RW || RW.pointerId !== WW.pointerId) return;
            if (aR.current = null, WW.currentTarget.releasePointerCapture(WW.pointerId), !RW.didSelect) return RR(), void ZW(RW.startTick, !0);
            const MW = MR(WW.clientX),
              wW = Math.min(RW.startTick, MW),
              CW = Math.max(RW.startTick, MW),
              zR = {
                startTick: wW,
                endTick: CW
              };
            uW(zR);
            const AW = QW.current;
            if (!AW) return;
            const bR = AW.getBoundingClientRect(),
              yR = TC(wW, HW, DW) / 100,
              NW = TC(CW, HW, DW) / 100,
              eW = bR.left + yR * bR.width,
              BW = bR.left + NW * bR.width;
            nW({
              ...zR,
              rect: new DOMRect(eW, bR.top, Math.max(BW - eW, 1), bR.height)
            })
          }), [RR, ZW, MR, DW, HW]),
          gM = (0, wW.useCallback)((WW => RW => {
            if (0 !== RW.button) return;
            RW.stopPropagation(), vR(null), RR(), tR(), sW.current = {
              pointerId: RW.pointerId,
              track: WW
            }, RW.currentTarget.setPointerCapture(RW.pointerId);
            const MW = "detail" === WW ? MR(RW.clientX) : wR(RW.clientX);
            SW(MW, !1)
          }), [RR, tR, SW, MR, wR]),
          iM = (0, wW.useCallback)((WW => {
            const RW = sW.current;
            if (!RW || RW.pointerId !== WW.pointerId) return;
            WW.stopPropagation();
            const MW = "detail" === RW.track ? MR(WW.clientX) : wR(WW.clientX);
            SW(MW, !1)
          }), [SW, MR, wR]),
          YR = (0, wW.useCallback)((WW => {
            const RW = sW.current;
            RW && RW.pointerId === WW.pointerId && (WW.stopPropagation(), sW.current = null, WW.currentTarget.releasePointerCapture(WW.pointerId), WR())
          }), [WR]),
          JR = (0, wW.useCallback)((WW => {
            0 === WW.button && (RR(), tR(), dW.current = {
              pointerId: WW.pointerId
            }, WW.currentTarget.setPointerCapture(WW.pointerId), SW(wR(WW.clientX), !0))
          }), [RR, tR, SW, wR]),
          PR = (0, wW.useCallback)((WW => {
            const RW = dW.current;
            RW && RW.pointerId === WW.pointerId && SW(wR(WW.clientX), !0)
          }), [SW, wR]),
          IR = (0, wW.useCallback)((WW => {
            const RW = dW.current;
            RW && RW.pointerId === WW.pointerId && (dW.current = null, WW.currentTarget.releasePointerCapture(WW.pointerId), WR())
          }), [WR]),
          oR = (0, wW.useCallback)((WW => {
            const RW = Math.max(1, WW.endTick - WW.startTick + 1),
              MW = CW + 1,
              wW = MW / RW,
              zR = Math.max(1, Math.ceil(MW / wW)),
              AW = WW.startTick + Math.floor((zR - 1) / 2);
            XW.current = !0, jR.current = wW, EW(tz(AW, CW)), fW(wW), RR()
          }), [RR, CW, fW]),
          lR = (0, wW.useCallback)((WW => {
            PW(WW), RR()
          }), [RR, PW]),
          FR = (0, wW.useCallback)((WW => {
            IW(WW), RR()
          }), [RR, IW]),
          fR = (0, wW.useCallback)((WW => {
            oW(WW), RR()
          }), [RR, oW]),
          QR = (0, wW.useCallback)((() => {
            lW(), RR()
          }), [RR, lW]);
        (0, wW.useEffect)((() => {
          const WW = QW.current;
          if (!WW) return () => {};
          const RW = RW => {
            RW.preventDefault();
            const MW = tz(gz(PC(RW.clientX, WW), HW, DW), CW),
              wW = RW.deltaY < 0 ? "in" : "out",
              zR = JC(FW, wW);
            zR !== FW && (cR.current = !0, EW(MW), fW(zR))
          };
          return WW.addEventListener("wheel", RW, {
            passive: !1
          }), () => {
            WW.removeEventListener("wheel", RW)
          }
        }), [CW, fW, DW, HW, FW]);
        const rM = TC(LW, HW, DW),
          cM = IC(LW, CW),
          XR = IC(HW, CW),
          jM = CW > 0 ? IC(DW, CW) : 100,
          kM = null !== eW,
          aM = null !== (RW = null === eW || void 0 === eW ? void 0 : eW.inTick) && void 0 !== RW ? RW : 0,
          sR = null !== (MW = null === eW || void 0 === eW ? void 0 : eW.outTick) && void 0 !== MW ? MW : CW,
          dR = IC(aM, CW),
          pR = Math.max(IC(sR, CW) - dR, 0),
          hR = TC(Math.max(aM, HW), HW, DW),
          UR = TC(Math.min(sR, DW), HW, DW),
          ER = Math.max(UR - hR, 0),
          VR = kM && sR >= HW && aM <= DW,
          mM = TC(aM, HW, DW),
          xM = TC(sR, HW, DW),
          vM = kM && aM >= HW && aM <= DW,
          KR = kM && sR >= HW && sR <= DW,
          uR = IC(aM, CW),
          OR = IC(sR, CW),
          nR = null !== KW && void 0 !== KW ? KW : OW ? {
            startTick: OW.startTick,
            endTick: OW.endTick
          } : null,
          GR = nR ? TC(Math.max(nR.startTick, HW), HW, DW) : 0,
          LR = nR ? TC(Math.min(nR.endTick, DW), HW, DW) : 0,
          HR = Math.max(LR - GR, 0),
          DR = null !== nR && nR.endTick >= HW && nR.startTick <= DW,
          qM = (0, wW.useMemo)((() => oC(0, CW, bR)), [CW, bR]),
          ZR = (0, wW.useMemo)((() => oC(HW, DW, bR)), [HW, DW, bR]),
          SR = (0, wW.useMemo)((() => CR.filter((WW => WW >= HW && WW <= DW))), [CR, DW, HW]),
          WM = (0, wW.useCallback)(((WW, RW, MW) => {
            const wW = "detail" === RW ? TC(WW, HW, DW) : IC(WW, CW),
              AW = null !== VW && MW === VW.fromTick,
              bR = null !== xR && xR.WR === MW;
            return (0, NW.jsx)("button", {
              type: "button",
              className: zR()("ReplayTimelineCameraKeyframeMarker", "detail" === RW ? "Detail" : "Overview", {
                Dragging: AW,
                Selected: bR
              }),
              style: {
                left: `${wW}%`
              },
              onPointerDown: yM(MW, RW),
              onPointerMove: NR,
              onPointerUp: eR,
              onPointerCancel: eR,
              "aria-label": `Camera keyframe at tick ${MW}`
            }, `cam-${RW}-${MW}`)
          }), [yM, xR, eR, VW, CW, NR, DW, HW]),
          RM = (0, wW.useCallback)((WW => VW && WW === VW.previewTick ? VW.fromTick : WW), [VW]);
        return CW <= 0 ? null : (0, NW.jsxs)("div", {
          className: "ReplayTimeline",
          children: [xR && zM && (0, eC.createPortal)((0, NW.jsx)(VC, {
            keyframe: zM,
            anchor: xR,
            hasOutgoingSegment: AR,
            onClose: () => {
              vR(null)
            },
            onApply: iR,
            onDelete: YW,
            onUseCurrentCamera: JW
          }), document.body), OW && (0, eC.createPortal)((0, NW.jsx)(mz, {
            anchor: OW,
            hasPlaybackMark: kM,
            onClose: RR,
            onMark: lR,
            onZoom: oR,
            onCrop: FR,
            onDeleteKeyframes: fR,
            onClearMark: QR
          }), document.body), (0, NW.jsxs)("div", {
            className: zR()("ReplayTimelineOverviewSection", {
              Hidden: FW <= 1
            }),
            children: [(0, NW.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, NW.jsxs)("div", {
              ref: rR,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: JR,
              onPointerMove: PR,
              onPointerUp: IR,
              onPointerCancel: IR,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": CW,
              "aria-valuenow": LW,
              tabIndex: 0,
              children: [qM.map((WW => {
                const RW = IC(WW, CW);
                return (0, NW.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${RW}%`
                  }
                }, WW)
              })), kM && (0, NW.jsxs)(NW.Fragment, {
                children: [(0, NW.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${dR}%`,
                    width: `${pR}%`
                  }
                }), (0, NW.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${uR}%`
                  },
                  "aria-hidden": !0
                }), (0, NW.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${OR}%`
                  },
                  "aria-hidden": !0
                })]
              }), CR.map((WW => WM(WW, "overview", RM(WW)))), (0, NW.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${XR}%`,
                  width: `${Math.max(jM-XR,.5)}%`
                }
              }), (0, NW.jsx)("button", {
                type: "button",
                className: zR()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== pW
                }),
                style: {
                  left: `${cM}%`
                },
                onPointerDown: gM("overview"),
                onPointerMove: iM,
                onPointerUp: YR,
                onPointerCancel: YR,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, NW.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, NW.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, NW.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, NW.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [iz(HW, bR), " \u2013 ", iz(DW, bR), FW > 1 && (0, NW.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: YC(FW)
                })]
              })]
            }), (0, NW.jsxs)("div", {
              ref: QW,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: BR,
              onPointerMove: tM,
              onPointerUp: TR,
              onPointerCancel: TR,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": HW,
              "aria-valuemax": DW,
              "aria-valuenow": LW,
              tabIndex: 0,
              children: [ZR.map((WW => {
                const RW = TC(WW, HW, DW);
                return (0, NW.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${RW}%`
                  }
                }, WW)
              })), VR && (0, NW.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${hR}%`,
                  width: `${ER}%`
                }
              }), vM && (0, NW.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${mM}%`
                },
                "aria-label": `Play range start at tick ${aM}`
              }), KR && (0, NW.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${xM}%`
                },
                "aria-label": `Play range end at tick ${sR}`
              }), DR && nR && (0, NW.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${GR}%`,
                  width: `${HR}%`
                }
              }), SR.map((WW => WM(WW, "detail", RM(WW)))), (0, NW.jsx)("button", {
                type: "button",
                className: zR()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== pW
                }),
                style: {
                  left: `${rM}%`
                },
                onPointerDown: gM("detail"),
                onPointerMove: iM,
                onPointerUp: YR,
                onPointerCancel: YR,
                "aria-label": "Scrub playhead"
              })]
            }), (0, NW.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, NW.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      vz = (0, wW.memo)((function(WW) {
        let {
          enabled: RW
        } = WW;
        const MW = (0, wW.useRef)(!1),
          CW = (0, wW.useRef)(null),
          [AW, bR] = (0, wW.useState)(!1),
          yR = (0, wW.useCallback)((WW => {
            RW && 0 === WW.button && (MW.current = !0, bR(!0), CW.current = {
              x: WW.clientX,
              y: WW.clientY
            }, WW.currentTarget.setPointerCapture(WW.pointerId))
          }), [RW]),
          eW = (0, wW.useCallback)((WW => {
            if (!RW || !MW.current || !CW.current) return;
            const wW = WW.clientX - CW.current.x,
              zR = WW.clientY - CW.current.y;
            CW.current = {
              x: WW.clientX,
              y: WW.clientY
            }, tR.gameBridge.send("dragReplayCamera", {
              dx: wW,
              dy: zR
            })
          }), [RW]),
          BW = (0, wW.useCallback)((WW => {
            MW.current && (MW.current = !1, bR(!1), CW.current = null, WW.currentTarget.releasePointerCapture(WW.pointerId))
          }), []);
        return RW ? (0, NW.jsx)("div", {
          className: zR()("ReplayViewerCameraDragSurface", {
            Dragging: AW
          }),
          onPointerDown: yR,
          onPointerMove: eW,
          onPointerUp: BW,
          onPointerCancel: BW,
          "aria-hidden": !0
        }) : null
      }));
    var KC = MW(35169),
      uC = MW(35171);
    const OC = (0, wW.memo)((function(WW) {
        var RW, MW, CW;
        let {
          anchorRect: AW,
          anchorRef: yR,
          onClose: eW
        } = WW;
        const BW = (0, wW.useRef)(null),
          tR = hC(BW, AW),
          [TW, gR] = (0, wW.useState)(uC.e),
          iR = (0, wW.useMemo)((() => Object.values(TW).every((WW => WW))), [TW]);
        (0, bR.f)("replayViewer|uiVisibilityChanged", (() => {
          gR((0, uC.e)())
        })), UC(BW, eW, yR);
        const YW = (0, wW.useCallback)(((WW, RW) => {
            (0, uC.k)(WW, RW), gR((0, uC.e)())
          }), []),
          JW = (0, wW.useCallback)((WW => {
            for (const {
                group: RW
              }
              of KC.f)(0, uC.k)(RW, WW);
            gR((0, uC.e)())
          }), []),
          PW = pC(AW);
        return (0, eC.createPortal)((0, NW.jsxs)("div", {
          ref: BW,
          className: zR()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (RW = null === tR || void 0 === tR ? void 0 : tR.placeBelow) && void 0 !== RW && RW,
            Positioned: null !== tR
          }),
          style: {
            left: `${null!==(MW=null===tR||void 0===tR?void 0:tR.left)&&void 0!==MW?MW:PW.left}px`,
            top: `${null!==(CW=null===tR||void 0===tR?void 0:tR.top)&&void 0!==CW?CW:PW.top}px`
          },
          onPointerDown: WW => {
            WW.stopPropagation()
          },
          children: [(0, NW.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, NW.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, NW.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, NW.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, NW.jsx)("input", {
                type: "checkbox",
                checked: iR,
                onChange: WW => {
                  JW(WW.target.checked)
                }
              }), (0, NW.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), KC.f.map((WW => {
              let {
                group: RW,
                label: MW
              } = WW;
              return (0, NW.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, NW.jsx)("input", {
                  type: "checkbox",
                  checked: TW[RW],
                  onChange: WW => {
                    YW(RW, WW.target.checked)
                  }
                }), (0, NW.jsx)("span", {
                  children: MW
                })]
              }, RW)
            }))]
          })]
        }), document.body)
      })),
      nC = (0, wW.memo)((function(WW) {
        let {
          disabled: RW
        } = WW;
        const MW = (0, wW.useRef)(null),
          [CW, zR] = (0, wW.useState)(!1),
          [AW, bR] = (0, wW.useState)(null),
          yR = (0, wW.useCallback)((() => {
            MW.current && (bR(MW.current.getBoundingClientRect()), zR((WW => !WW)))
          }), []),
          eW = (0, wW.useCallback)((() => {
            zR(!1)
          }), []);
        return (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)("div", {
            ref: MW,
            children: (0, NW.jsx)(zw.h, {
              className: "ReplayViewerActionButton",
              onClick: yR,
              disabled: RW,
              children: (0, NW.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), CW && AW && (0, NW.jsx)(OC, {
            anchorRect: AW,
            anchorRef: MW,
            onClose: eW
          })]
        })
      })),
      GC = ["freeCamUp", "freeCamDown"];

    function LC(WW, RW) {
      tR.gameBridge.send("holdReplayFreecamVertical", {
        action: WW,
        mM: RW
      })
    }
    const HC = (0, wW.memo)((function() {
        (0, wW.useEffect)((() => () => {
          ! function() {
            tR.gameBridge.send("moveReplayFreecam", null);
            for (const WW of GC) LC(WW, !1)
          }()
        }), []);
        const WW = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("moveReplayFreecam", WW)
          }), []),
          RW = (0, wW.useCallback)((WW => ({
            onTouchStart: RW => {
              RW.preventDefault(), RW.stopPropagation(), LC(WW, !0)
            },
            onTouchEnd: RW => {
              RW.preventDefault(), RW.stopPropagation(), LC(WW, !1)
            },
            onTouchCancel: RW => {
              RW.preventDefault(), RW.stopPropagation(), LC(WW, !1)
            }
          })), []);
        return (0, NW.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, NW.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, NW.jsx)(bM, {
              onMove: WW,
              mode: "pinned"
            })
          }), (0, NW.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, NW.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...RW("freeCamUp"),
              children: (0, NW.jsx)(hW.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, NW.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...RW("freeCamDown"),
              children: (0, NW.jsx)(hW.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      DC = [],
      qz = (0, wW.memo)((function() {
        const WW = (0, nW.n)();
        return (0, lW.d)("replayViewerRequested", (WW => {
          (0, nW.k)("toggle" === WW ? !(0, nW.h)() : "open" === WW)
        })), WW ? (0, NW.jsx)(ZC, {}) : null
      })),
      ZC = (0, wW.memo)((function() {
        var WW, RW, MW, CW, AW, bR, yR, eW, BW, TW, gR, iR;
        const YW = wW.useRef(null),
          [JW, PW] = (0, wW.useState)(null),
          [IW, oW] = (0, wW.useState)(1),
          [QW, rR] = (0, wW.useState)(null),
          [cR, XW] = (0, wW.useState)(!1),
          {
            isTouchScreen: jR
          } = (0, FW.i)(["isTouchScreen"]),
          kR = (0, lW.h)("replay"),
          aR = (0, lW.h)("replayEdits"),
          sW = null !== kR,
          dW = null !== (WW = null === kR || void 0 === kR ? void 0 : kR.WR) && void 0 !== WW ? WW : 0,
          UW = null !== (RW = null === kR || void 0 === kR ? void 0 : kR.totalTicks) && void 0 !== RW ? RW : 0,
          EW = Math.max(0, UW - 1),
          VW = null !== (MW = null === kR || void 0 === kR ? void 0 : kR.playing) && void 0 !== MW && MW,
          mR = null !== (CW = null === kR || void 0 === kR ? void 0 : kR.speed) && void 0 !== CW ? CW : 1,
          xR = null !== (AW = null === kR || void 0 === kR ? void 0 : kR.FRW) && void 0 !== AW ? AW : 20,
          vR = null !== QW && void 0 !== QW ? QW : dW,
          KW = null !== (bR = null === kR || void 0 === kR ? void 0 : kR.freecam) && void 0 !== bR && bR,
          uW = null !== (yR = null === kR || void 0 === kR ? void 0 : kR.cameraMode) && void 0 !== yR ? yR : "recording",
          OW = null !== (eW = null === aR || void 0 === aR ? void 0 : aR.cameraKeyframes) && void 0 !== eW ? eW : DC,
          GW = null !== (BW = null === aR || void 0 === aR ? void 0 : aR.playbackMark) && void 0 !== BW ? BW : null,
          LW = null !== (TW = null === aR || void 0 === aR ? void 0 : aR.fileName) && void 0 !== TW ? TW : null,
          HW = null !== (gR = null === aR || void 0 === aR ? void 0 : aR.unsavedChanges) && void 0 !== gR && gR,
          DW = null !== (iR = null === aR || void 0 === aR ? void 0 : aR.suggestSaveAs) && void 0 !== iR && iR,
          qR = (0, lW.h)("replayVideoExporting"),
          ZW = !qR && sW && ("freecam" === uW || ("recording" === uW || "keyframe" === uW) && !VW),
          SW = jR && sW && "freecam" === uW && !qR && !cR;
        (0, NC.d)(!0, !0, "ReplayViewerOverlay"), (0, wW.useEffect)((() => {
          tR.gameBridge.send("syncReplayCameraMode", null)
        }), [KW]);
        const WR = (0, wW.useCallback)(((WW, RW) => {
            tR.gameBridge.send("seekReplay", {
              WR: WW,
              ignorePlaybackMark: null === RW || void 0 === RW ? void 0 : RW.ignorePlaybackMark
            })
          }), []),
          RR = (0, wW.useCallback)((() => {
            tR.gameBridge.send("setReplayPlaying", !1)
          }), []),
          MR = (0, wW.useCallback)(((WW, RW) => {
            tR.gameBridge.send("moveReplayCameraKeyframe", {
              from: WW,
              to: RW
            })
          }), []),
          wR = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("setReplayCameraKeyframe", WW)
          }), []),
          CR = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("deleteReplayCameraKeyframes", {
              start: WW,
              end: WW
            })
          }), []),
          zM = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("deleteReplayCameraKeyframes", {
              start: WW.startTick,
              end: WW.endTick
            })
          }), []),
          AR = (0, wW.useCallback)((() => tR.gameBridge.lookup("replayCamera", null)), []),
          bM = (0, wW.useCallback)((WW => {
            rR(WW)
          }), []),
          yM = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("setReplayPlaybackMark", {
              inTick: WW.startTick,
              outTick: WW.endTick
            })
          }), []),
          NR = (0, wW.useCallback)((() => {
            tR.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          eR = (0, wW.useCallback)((WW => {
            const RW = tR.gameBridge.latest("replay");
            if (null === RW || WW.endTick <= WW.startTick) return;
            const MW = WW.startTick,
              wW = WW.endTick;
            yC.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((WW => {
              var CW;
              if (!0 !== WW) return;
              if ((null === (CW = tR.gameBridge.latest("replay")) || void 0 === CW ? void 0 : CW.id) !== RW.id) return;
              tR.gameBridge.send("cropReplay", {
                start: MW,
                end: wW
              }) && (rR(null), oW(1))
            }))
          }), []),
          BR = (0, wW.useCallback)(((WW, RW) => {
            PW(null), oW(1), rR(null), (0, WC.c)().open(WW, RW).catch((WW => {
              console.error(WW), PW(WW instanceof Error ? WW.message : "Failed to parse recording")
            }))
          }), []),
          tM = (0, wW.useCallback)(((WW, RW) => {
            null !== tR.gameBridge.latest("connectedGame").websocketUrl ? yC.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((MW => {
              !0 === MW && BR(WW, RW)
            })) : BR(WW, RW)
          }), [BR]),
          TR = (0, wW.useCallback)((WW => {
            var RW;
            const MW = null === (RW = WW.target.files) || void 0 === RW ? void 0 : RW[0];
            if (WW.target.value = "", !MW) return;
            const wW = new FileReader;
            wW.onload = () => {
              tM(new Uint8Array(wW.result), {
                fileName: MW.name
              })
            }, wW.onerror = () => {
              PW("Failed to read file")
            }, wW.readAsArrayBuffer(MW)
          }), [tM]),
          gM = (0, wW.useCallback)((() => {
            const WW = () => {
              var WW;
              null === (WW = YW.current) || void 0 === WW || WW.click()
            };
            (0, wC.i)() ? (0, wC.c)().then((WW => {
              WW && tM(WW.bytes, {
                fileHandle: WW.handle
              })
            })).catch((RW => {
              console.error(RW), WW()
            })): WW()
          }), [tM]),
          iM = (0, wW.useCallback)((async function() {
            let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let RW;
            try {
              RW = await yz(WW, {
                files: (0, WC.c)(),
                pickerSupported: wC.i,
                chooseFile: wC.b,
                write: wC.l,
                download: MC.k,
                onFallback: console.error
              })
            } catch (MW) {
              return void(WW => {
                console.error(WW), yC.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: zz(WW),
                  confirmText: "OK"
                })
              })(MW)
            }
            "written" !== RW && "downloaded" !== RW || (() => {
              const WW = yC.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                WW.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          YR = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("replayAction", WW)
          }), []),
          JR = (0, wW.useCallback)((WW => {
            oW((RW => JC(RW, WW)))
          }), []),
          PR = (0, wW.useCallback)((WW => {
            if (!tR.gameBridge.latest("replayVideoExporting")) switch (WW) {
              case "replayLoad":
                gM();
                break;
              case "replaySave":
                iM(!1);
                break;
              case "replaySaveAs":
                iM(!0);
                break;
              case "replayTimelineZoomIn":
                JR("in");
                break;
              case "replayTimelineZoomOut":
                JR("out")
            }
          }), [gM, iM, JR]);
        (0, lW.d)("replayUiActionRequested", PR);
        const IR = (0, wW.useCallback)((WW => {
            tR.gameBridge.send("setReplayCameraMode", WW)
          }), []),
          oR = sW ? zw.h : zw.m,
          lR = HW && !DW ? zw.m : zw.h,
          FR = HW && DW ? zw.m : zw.h;
        return (0, NW.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, NW.jsx)(vz, {
            enabled: ZW
          }), SW && (0, NW.jsx)(HC, {}), (0, NW.jsx)("input", {
            ref: YW,
            type: "file",
            accept: MC.c,
            className: "ReplayViewerFileInput",
            onChange: TR
          }), (0, NW.jsxs)("div", {
            className: zR()("ReplayViewerBar", {
              Collapsed: cR
            }),
            children: [(0, NW.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                cR ? XW(!1) : sW ? XW(!0) : (0, nW.e)()
              },
              "aria-expanded": !cR,
              "aria-label": cR ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, NW.jsx)(hW.e, {
                name: cR ? "angle-up" : "angle-down"
              })
            }), !cR && (0, NW.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [sW && UW > 0 && (0, NW.jsx)(xz, {
                maxTick: EW,
                displayTick: vR,
                FRW: xR,
                cameraKeyframes: OW,
                playbackMark: GW,
                onSeek: WR,
                onPause: RR,
                onScrubTickChange: bM,
                onMoveCameraKeyframe: MR,
                onUpdateCameraKeyframe: wR,
                onDeleteCameraKeyframe: CR,
                onUseCurrentCamera: AR,
                onMarkRange: yM,
                onCropRange: eR,
                onDeleteKeyframesInRange: zM,
                onClearMark: NR,
                zoomLevel: IW,
                onZoomLevelChange: oW
              }, EW), (0, NW.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, NW.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, NW.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [sW && (0, NW.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== LW && void 0 !== LW ? LW : "Unsaved recording", HW ? " *" : ""]
                    }), (0, NW.jsxs)(oR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        PR("replayLoad")
                      },
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, NW.jsxs)(zw.h, {
                      className: "ReplayViewerActionButton",
                      onClick: nW.e,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, NW.jsxs)(lR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        PR("replaySave")
                      },
                      disabled: !sW,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, NW.jsxs)(zw.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        tR.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !sW,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, NW.jsxs)(FR, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        PR("replaySaveAs")
                      },
                      disabled: !sW,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, NW.jsxs)(zw.h, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        tR.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !sW || 0 === UW || qR,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, NW.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, NW.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, NW.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, NW.jsx)(fW.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, NW.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, NW.jsx)(pW.e, {
                        tooltipInner: (0, NW.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, NW.jsxs)(zw.O, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === uW,
                          onClick: () => {
                            IR("recording")
                          },
                          disabled: !sW,
                          children: ["Recorded ", (0, NW.jsx)(hW.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, NW.jsx)(pW.e, {
                        tooltipInner: (0, NW.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, NW.jsxs)(zw.O, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === uW,
                          onClick: () => {
                            IR("freecam")
                          },
                          disabled: !sW,
                          children: ["Free ", (0, NW.jsx)(hW.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, NW.jsx)(pW.e, {
                        tooltipInner: (0, NW.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, NW.jsxs)(zw.O, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === uW,
                          onClick: () => {
                            IR("keyframe")
                          },
                          disabled: !sW,
                          children: ["Preview ", (0, NW.jsx)(hW.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, NW.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, NW.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, NW.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, NW.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: iz(vR, xR)
                      }), (0, NW.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, NW.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: iz(EW, xR)
                      })]
                    }), (0, NW.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", vR, " / ", EW]
                    })]
                  }), (0, NW.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, NW.jsxs)(zw.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        YR("replaySkipBack")
                      },
                      disabled: !sW,
                      children: [(0, NW.jsxs)("span", {
                        children: [" ", (0, NW.jsx)(hW.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, NW.jsx)(fW.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, NW.jsxs)(zw.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        tR.gameBridge.send("setReplayPlaying", !VW)
                      },
                      disabled: !sW,
                      children: [(0, NW.jsxs)("span", {
                        children: [" ", VW ? (0, NW.jsx)(hW.e, {
                          name: "pause"
                        }) : (0, NW.jsx)(hW.e, {
                          name: "play"
                        }), " "]
                      }), (0, NW.jsx)(fW.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, NW.jsxs)(zw.h, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        YR("replaySkipForward")
                      },
                      disabled: !sW,
                      children: [(0, NW.jsxs)("span", {
                        children: [" ", (0, NW.jsx)(hW.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, NW.jsx)(fW.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, NW.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, NW.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, NW.jsxs)(zw.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        YR("replayRecordKeyframe")
                      },
                      disabled: !sW,
                      children: [(0, NW.jsx)(fW.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, NW.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, NW.jsx)(nC, {
                      disabled: !sW
                    }), GW && (0, NW.jsx)(zw.O, {
                      className: "ReplayViewerActionButton",
                      onClick: NR,
                      disabled: !sW,
                      children: (0, NW.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, NW.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, NW.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, NW.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, NW.jsx)(zw.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          YR("replaySpeedDown")
                        },
                        disabled: !sW || (0, RC.d)(mR),
                        children: (0, NW.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, NW.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [mR, "\xd7"]
                      }), (0, NW.jsx)(zw.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          YR("replaySpeedUp")
                        },
                        disabled: !sW || (0, RC.c)(mR),
                        children: (0, NW.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, NW.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, NW.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, NW.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, NW.jsxs)(zw.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          PR("replayTimelineZoomOut")
                        },
                        disabled: !sW || IW <= BC[0],
                        children: [(0, NW.jsx)("span", {
                          children: " \u2212 "
                        }), (0, NW.jsx)(fW.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, NW.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: YC(IW)
                      }), (0, NW.jsxs)(zw.h, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          PR("replayTimelineZoomIn")
                        },
                        disabled: !sW || IW >= BC[BC.length - 1],
                        children: [(0, NW.jsx)("span", {
                          children: " + "
                        }), (0, NW.jsx)(fW.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, NW.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !sW && "Load a recording to begin playback"
              }), JW && (0, NW.jsx)("div", {
                className: "ReplayViewerError",
                children: JW
              })]
            })]
          })]
        })
      }));
    var SC = MW(1148);

    function Wz() {
      const [, WW] = (0, wW.useState)(0);
      return (0, bR.f)("replayViewer|uiVisibilityChanged", (() => {
          WW((WW => WW + 1))
        })), (0, bR.f)("replayViewer|replayLoaded", (() => {
          WW((WW => WW + 1))
        })),
        function() {
          if (!(0, SC.f)()) return {};
          const WW = {
              [KC.e]: "true"
            },
            RW = (0, uC.e)();
          for (const {
              group: MW,
              dataAttr: wW
            }
            of KC.f) wW && !RW[MW] && (WW[wW] = "true");
          return WW
        }()
    }
    var Rz = MW(8126),
      Mz = MW(1643),
      wz = MW(7609),
      Cz = MW(7601),
      zA = MW(1657);
    const Az = (0, wW.memo)((function() {
      var WW, RW, MW;
      const CW = (0, JW.h)("customButtons");
      (0, wW.useEffect)((() => CW ? (tR.gameBridge.send("bindCustomButtonKeys", CW.filter(wz.e).map((WW => {
        let {
          id: RW,
          keycode: MW
        } = WW;
        return {
          id: RW,
          keycode: MW
        }
      }))), () => {
        tR.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [CW]);
      const zR = null !== (WW = null === CW || void 0 === CW ? void 0 : CW.filter(wz.e)) && void 0 !== WW ? WW : [],
        AW = (0, Cz.h)(),
        bR = null !== (RW = null === (MW = (0, zA.c)()) || void 0 === MW ? void 0 : MW.hideButtonHints) && void 0 !== RW && RW,
        yR = "customButton" !== (null === AW || void 0 === AW ? void 0 : AW.kind) || bR ? null : AW.id,
        eW = zR.length > 0,
        BW = (0, wW.useRef)(null);
      return (0, wW.useLayoutEffect)((() => {
        if (!eW) return () => {};
        const WW = BW.current,
          RW = WW.closest(".InGameUi"),
          MW = () => {
            RW.style.setProperty("--custom-buttons-top", `${WW.offsetTop}px`)
          };
        MW();
        const wW = new ResizeObserver(MW);
        return wW.observe(WW), wW.observe(WW.parentElement), () => {
          wW.disconnect(), RW.style.removeProperty("--custom-buttons-top")
        }
      }), [eW]), (0, NW.jsx)("div", {
        ref: BW,
        className: "" + ((0, fw.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: zR.map((WW => {
          var RW, MW;
          return (0, NW.jsx)(bA, {
            button: WW,
            padGlyph: WW.id === yR && null !== (RW = null === (MW = (0, mR.d)()) || void 0 === MW ? void 0 : MW.getBoundButton("actionButton")) && void 0 !== RW ? RW : null
          }, WW.id)
        }))
      })
    }));

    function bA(WW) {
      let {
        button: RW,
        padGlyph: MW
      } = WW;
      const CW = (0, wW.useRef)(null),
        zR = () => {
          null !== CW.current && (CW.current = null, tR.gameBridge.send("pressCustomButton", {
            id: RW.id,
            down: !1
          }))
        };
      (0, wW.useEffect)((() => zR), []);
      const AW = rM(zR, {
          pressesOnPointerDown: !0
        }),
        bR = WW => {
          CW.current === WW.pointerId && zR()
        };
      return (0, NW.jsxs)("div", {
        className: "CustomIcon",
        ...AW,
        onLostPointerCapture: bR,
        children: [(0, NW.jsx)(Mz.b, {
          icon: RW.icon,
          keyboardHint: (0, wz.c)(RW.keycode),
          padGlyph: MW,
          onPointerDown: WW => {
            WW.currentTarget.setPointerCapture(WW.pointerId), null === CW.current && tR.gameBridge.send("pressCustomButton", {
              id: RW.id,
              down: !0
            }), CW.current = WW.pointerId
          },
          onPointerUp: bR,
          onPointerCancel: bR,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), RW.description && (0, NW.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: RW.description
        })]
      })
    }
    var yA = MW(1949),
      Nz = MW(34786);
    const ez = (0, wW.memo)((function() {
        const {
          isUiHidden: WW,
          isUiHiddenByCamera: RW,
          isTouchScreen: MW
        } = (0, FW.i)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), CW = (0, Aw.c)(), AW = Wz(), bR = (0, JW.h)("showKillfeed");
        return (0, wW.useEffect)((() => {
            let WW;
            const RW = () => {
                clearTimeout(WW), WW = setTimeout((() => {
                  tR.gameBridge.latest("connectedGame").replay || (tR.gameBridge.send("leaveGame", {
                    reloadPath: "/"
                  }), (0, TW.navigatePreserveSearch)("/"))
                }), 3e5)
              },
              MW = () => {
                clearTimeout(WW)
              };
            return window.addEventListener("focus", MW), window.addEventListener("blur", RW), () => {
              window.removeEventListener("blur", RW), window.removeEventListener("focus", MW), clearTimeout(WW)
            }
          }), []),
          function() {
            const WW = (0, JW.h)("inventoryColourOverride");
            (0, wW.useEffect)((() => {
              if (!WW) return;
              const {
                panel: RW,
                slot: MW,
                slotSelected: wW,
                slotUnavailable: CW
              } = vR(WW), zR = document.documentElement.style;
              return zR.setProperty("--InventoryPanelColour", RW), zR.setProperty("--InventorySlotColour", MW), zR.setProperty("--InventorySlotSelectedColour", wW), zR.setProperty("--InventorySlotUnavailableColour", CW), () => {
                zR.removeProperty("--InventoryPanelColour"), zR.removeProperty("--InventorySlotColour"), zR.removeProperty("--InventorySlotSelectedColour"), zR.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [WW])
          }(), (0, wW.useEffect)((() => {
            const WW = setTimeout((() => {
              (0, PW.g)()
            }), 0);
            return () => {
              clearTimeout(WW), PW.k.kN(!1)
            }
          }), []), (0, NW.jsxs)(NW.Fragment, {
            children: [(0, NW.jsxs)("div", {
              className: zR()("InGameUi", {
                Hidden: WW,
                HiddenByCamera: RW
              }),
              ...AW,
              children: [(0, NW.jsx)(IM.d, {}), (0, NW.jsx)(QM, {}), (0, NW.jsx)(rw, {}), (0, NW.jsx)(aC, {}), (0, NW.jsx)(Vw, {}), MW && (0, IR.n)() && (0, NW.jsx)(xC, {}), (0, NW.jsx)(DR, {}), (0, NW.jsx)(mw.c, {}), (0, NW.jsx)(GM, {}), (0, NW.jsx)(PM, {}), (0, NW.jsx)(hw.b, {}), (0, NW.jsx)(qz, {}), (0, NW.jsx)(Kw.e, {}), (0, NW.jsx)(uw.f, {}), (0, NW.jsx)(ZR.n, {}), (0, NW.jsx)(Yz, {
                showChat: CW
              }), (0, NW.jsx)(Ow.i, {}), (0, NW.jsx)(pw, {}), (0, NW.jsxs)("div", {
                className: zR()("RightElements", {
                  RightElementsTouchscreen: MW
                }),
                "data-camera-keeper-host": "",
                children: [(0, NW.jsxs)("div", {
                  className: Ow.e,
                  children: [(0, NW.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    children: [(0, NW.jsx)(Pw.b, {}), (0, NW.jsx)(UW, {}), (0, NW.jsx)(Ww.d, {}), fw.featureFlags.useSocialFeatures && (0, NW.jsx)(Rw.d, {
                      placement: "inGame"
                    }), bR && (0, NW.jsx)(VM, {}), (0, NW.jsx)(Rz.e, {})]
                  }), fw.featureFlags.useSocialFeatures && (0, NW.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, NW.jsx)(jC.d, {})
                  })]
                }), (0, NW.jsx)(ZR.d, {
                  placement: "topRight"
                }), (0, NW.jsx)(Jz, {})]
              }), (0, NW.jsx)("div", {
                className: "LeftCentre",
                children: (0, NW.jsx)(Az, {})
              }), (0, NW.jsxs)("div", {
                className: "BottomCentre",
                children: [(0, NW.jsx)(jR, {}), (0, NW.jsx)(Bz, {}), (0, NW.jsxs)("div", {
                  className: "BottomElements",
                  children: [(0, NW.jsxs)("div", {
                    className: zR()("BottomLeftElements", {
                      Touch: MW
                    }),
                    children: [(0, NW.jsx)(Cw, {}), !MW && (0, NW.jsx)(yA.c, {})]
                  }), (0, NW.jsx)(iA, {}), (0, NW.jsx)(HM, {
                    isTouchScreen: MW
                  })]
                })]
              }), (0, NW.jsx)("div", {
                className: "MiddleLeft"
              }), MW && (0, NW.jsx)(jM, {}), (0, NW.jsx)("div", {
                className: "CameraFadeHost",
                ref: Nz.j
              })]
            }), (0, NW.jsx)(Sw.e, {}), (0, NW.jsx)(zC.c, {})]
          })
      })),
      Bz = (0, wW.memo)((function() {
        const WW = (0, bR.i)("aimingOverlay", "none");
        (0, iR.b)();
        const RW = (0, JW.l)("middleTextUpper"),
          MW = (0, JW.l)("middleTextLower");
        return (0, NW.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === WW ? {
            visibility: "hidden"
          } : {},
          children: [(0, NW.jsx)(gA, {
            text: RW,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: tA
          }), (0, NW.jsx)(gA, {
            text: MW,
            className: "MiddleText",
            maxHeightFraction: Tz
          })]
        })
      })),
      tA = .3,
      Tz = .2;

    function gA(WW) {
      let {
        text: RW,
        className: MW,
        maxHeightFraction: CW
      } = WW;
      const zR = (0, wW.useRef)(null),
        AW = (0, wW.useRef)(null);
      return function(WW, RW, MW, CW) {
        (0, wW.useLayoutEffect)((() => {
          const wW = WW.current,
            CW = RW.current;
          if (!wW || !CW) return;
          let zR = -1,
            AW = -1;
          const bR = WW => (CW.style.setProperty("zoom", String(WW)), wW.getBoundingClientRect().height),
            yR = () => {
              const WW = document.documentElement.clientHeight * MW;
              let RW = 1;
              if (bR(1) > WW) {
                let MW = .5,
                  wW = 1;
                for (let RW = 0; RW < 6; RW++) {
                  const RW = (MW + wW) / 2;
                  bR(RW) <= WW ? MW = RW : wW = RW
                }
                RW = MW
              }
              AW = bR(RW), zR = wW.getBoundingClientRect().width
            };
          yR();
          let NW = 0;
          const eW = () => {
              cancelAnimationFrame(NW), NW = requestAnimationFrame(yR)
            },
            BW = new ResizeObserver((() => {
              const {
                width: WW,
                height: RW
              } = wW.getBoundingClientRect();
              WW === zR && RW === AW || eW()
            }));
          return BW.observe(wW), window.addEventListener("resize", eW), () => {
            BW.disconnect(), window.removeEventListener("resize", eW), cancelAnimationFrame(NW), CW.style.removeProperty("zoom")
          }
        }), [WW, RW, MW, CW])
      }(zR, AW, CW, RW.content), (0, NW.jsx)("div", {
        ref: zR,
        className: "MiddleTextFit",
        children: (0, NW.jsx)(nw.e, {
          ref: AW,
          text: RW,
          className: MW
        })
      })
    }
    const iA = (0, wW.memo)((function() {
        const WW = (0, bR.i)("aimingOverlay", "none");
        (0, iR.b)();
        const RW = (0, JW.h)("useInventory");
        return (0, NW.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === WW ? {
            visibility: "hidden"
          } : {},
          children: [(0, NW.jsx)(eW, {}), (0, NW.jsx)(ZR.d, {}), (0, NW.jsx)(SR, {}), (0, NW.jsx)(Xw, {}), (0, NW.jsxs)("div", {
            className: "HotBarRow",
            children: [RW ? (0, NW.jsx)(VW.c, {}) : (0, NW.jsx)(VW.f, {}), (0, NW.jsx)(xR, {})]
          })]
        })
      })),
      Yz = (0, wW.memo)((function(WW) {
        let {
          showChat: RW
        } = WW;
        const {
          t: MW
        } = (0, XW.C)(), {
          clientEscMenuOptions: CW
        } = (0, FW.i)(["clientEscMenuOptions"]);
        (0, iR.b)();
        const {
          userContext: zR,
          isUserContextUpdating: AW
        } = (0, gR.c)(), bR = (0, JW.h)("hideCoordinates"), yR = (0, JW.h)("customVariationTitle"), {
          requestedGameNameWithVariation: eW,
          gameNameWithVariation: tR,
          lobbyName: TW,
          shownLobbyName: PW
        } = (0, lW.h)("connectedGame"), IW = (0, BW.e)(eW, TW, !1), [oW, fW] = (0, wW.useState)(null), QW = (0, lw.m)(tR || eW || ""), rR = yR || QW || "";
        return (0, wW.useEffect)((() => {
          AW || ow.c.getFavouriteLobbies(zR).then((WW => {
            console.log("Got favourite lobbies", WW), fW(WW)
          }))
        }), [AW, zR]), (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsxs)("div", {
            className: Ow.b,
            children: [(0, NW.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, NW.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: WW => {
                  WW.stopPropagation(), WW.preventDefault()
                },
                onClick: () => {
                  FW.b.set({
                    openEverythingMenuName: YW.t.SETTINGS
                  })
                },
                children: [(0, NW.jsx)(Iw.d, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, NW.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, NW.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === IW && (0, NW.jsx)(Iw.d, {}), null !== IW && (0, NW.jsxs)(NW.Fragment, {
                  children: [IW, rR && ` ${rR}`]
                })]
              }), (0, NW.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, NW.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: PW
              }), (0, Fw.z)(TW) && (0, NW.jsx)(pW.e, {
                tooltipInner: (0, NW.jsx)("div", {
                  children: MW(null !== oW && oW.includes(TW) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, NW.jsx)("div", {
                  children: (0, NW.jsx)(zw.s, {
                    isLiked: null !== oW && oW.includes(TW),
                    onClick: () => {
                      try {
                        if (!oW) return;
                        oW.includes(TW) ? (ow.c.unfavouriteLobby(zR, TW).catch((WW => {
                          console.error("Failed to favourite lobby", WW)
                        })), fW(oW.filter((WW => WW !== TW)))) : (ow.c.favouriteLobby(zR, TW).catch((WW => {
                          console.error("Failed to favourite lobby", WW)
                        })), fW([...oW, TW]))
                      } catch (WW) {
                        console.error("Failed to like lobby", WW)
                      }
                    },
                    isLoading: null === oW
                  })
                })
              }), (0, NW.jsx)(Dw, {})]
            }), (0, NW.jsx)(Tw, {
              show: CW.showFPS
            }), !bR && CW.showCoordinates && (0, NW.jsx)(Yw, {}), !bR && CW.showChunkCoordinates && (0, NW.jsx)(Jw, {}), (0, NW.jsx)(Gw, {})]
          }), (0, NW.jsx)("div", {
            className: "TopLeftElements",
            children: (0, NW.jsx)("div", {
              className: "InGameHeaderAndChat",
              children: RW && (0, NW.jsx)(OW.c, {})
            })
          })]
        })
      })),
      Jz = (0, wW.memo)((function() {
        (0, iR.b)();
        const WW = (0, JW.l)("RightInfoText");
        return WW.hasText ? (0, NW.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, NW.jsx)(nw.e, {
            text: WW,
            className: "RightInfoDiv",
            children: (0, NW.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, NW.jsx)(yR.c, {
                text: WW.content
              })
            })
          })
        }) : null
      }))
  },
  34740: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR,
      h: () => eW,
      l: () => BW
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(1537),
      bR = MW(940);
    const yR = 350;
    let NW = 0;

    function eW() {
      return NW += 1, NW
    }

    function BW(WW, RW) {
      let MW = 0;
      for (const wW of WW) "ingredient" !== wW.kind && wW.jK === RW && (MW += wW.amount);
      return MW > 0 ? {
        idx: RW,
        amount: MW
      } : null
    }

    function tR(WW) {
      var RW, MW;
      let {
        anim: CW,
        onComplete: NW
      } = WW;
      const eW = null !== (RW = CW.delayMs) && void 0 !== RW ? RW : 0,
        BW = null !== (MW = CW.durationMs) && void 0 !== MW ? MW : yR,
        [tR, TW] = (0, wW.useState)(CW.from),
        [gR, iR] = (0, wW.useState)(0 === eW),
        [YW, JW] = (0, wW.useState)(!1),
        PW = (0, wW.useRef)(!1);
      return (0, wW.useEffect)((() => {
        let WW, RW;
        const MW = () => {
            PW.current = !0, iR(!0), WW = requestAnimationFrame((() => {
              RW = requestAnimationFrame((() => {
                TW({
                  x: CW.to.x,
                  y: CW.to.y
                }), JW(!0)
              }))
            }))
          },
          wW = PW.current ? 0 : eW;
        let zR;
        wW > 0 ? zR = setTimeout(MW, wW) : MW();
        const AW = setTimeout((() => {
          NW(CW.id)
        }), wW + BW + 50);
        return () => {
          clearTimeout(zR), cancelAnimationFrame(WW), cancelAnimationFrame(RW), clearTimeout(AW)
        }
      }), [CW.id, CW.to.x, CW.to.y, NW, eW, BW]), (0, bR.jsx)("div", {
        className: zR()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === CW.kind,
          Waiting: !gR,
          Arrived: YW
        }),
        style: {
          left: tR.x,
          top: tR.y,
          "--fly-duration": `${BW}ms`
        },
        children: (0, bR.jsx)(AW.c, {
          itemName: CW.itemName,
          amount: CW.amount
        })
      })
    }
  },
  34729: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => sW,
      f: () => hW
    });
    var wW = MW(75),
      CW = MW(2221),
      zR = MW(5568),
      AW = MW(1670),
      bR = MW(1643),
      yR = MW(1953),
      NW = MW(7728),
      eW = MW(284),
      BW = MW(33),
      tR = MW(1253),
      TW = MW(116),
      gR = MW(50),
      iR = MW(897),
      YW = MW.n(iR),
      JW = MW(232),
      PW = MW(34733),
      IW = MW(964),
      oW = MW(1523),
      lW = MW(7585),
      FW = MW(940);

    function fW(WW) {
      var RW, MW;
      let {
        selectedItem: zR,
        slotIdx: AW,
        ammo: bR
      } = WW;
      const [NW, BW] = (0, wW.useState)(!1), tR = (0, wW.useRef)(null), [TW, gR] = (0, wW.useState)(null), [iR, JW] = (0, wW.useState)(null), PW = (0, yR.h)("maxAuraLevel"), fW = (0, CW.b)(), QW = (0, wW.useCallback)((() => {
        if (clearTimeout(tR.current), zR) {
          var WW, RW, MW, wW;
          const yR = zR.displayName,
            NW = [],
            BW = Array.isArray(yR) ? yR : [yR],
            tR = {
              fontStyle: null !== (WW = zR.attributes.customAttributes) && void 0 !== WW && WW.author ? "italic" : "normal"
            };
          for (const WW of BW) WW.str ? NW.push(WW) : NW.push({
            str: WW,
            style: tR
          });
          if (null !== (RW = zR.attributes.customAttributes) && void 0 !== RW && RW.enchantments) {
            NW.push(" ");
            const WW = Object.entries(zR.attributes.customAttributes.enchantments).sort(((WW, RW) => RW[1] - WW[1])),
              RW = zR.attributes.customAttributes.enchantmentData;
            for (const [MW, wW] of WW) {
              var CW, AW;
              const WW = null !== (CW = null === RW || void 0 === RW || null === (AW = RW[MW]) || void 0 === AW ? void 0 : AW.icon) && void 0 !== CW ? CW : `${MW} Enchantment`;
              var bR;
              if (wW < 4)
                for (let RW = 0; RW < wW; RW++) NW.push({
                  icon: WW,
                  style: {
                    fontSize: "1.5em"
                  }
                });
              else NW.push({
                icon: WW,
                style: {
                  fontSize: "1.5em"
                }
              }), NW.push(null !== (bR = (0, eW.N)(wW)) && void 0 !== bR ? bR : wW.toString())
            }
          }
          gR(NW), JW(null !== (MW = null === (wW = zR.attributes.customAttributes) || void 0 === wW ? void 0 : wW.enchantmentTier) && void 0 !== MW ? MW : null)
        } else gR(null), JW(null);
        BW(!0), fW();
        const yR = null === zR || void 0 === zR ? void 0 : zR.attributes.customAttributes;
        void 0 === (null === yR || void 0 === yR ? void 0 : yR.shotsLeft) && (tR.current = setTimeout((() => {
          BW(!1)
        }), 2e3))
      }), [null === zR || void 0 === zR ? void 0 : zR.name, AW, null === zR || void 0 === zR ? void 0 : zR.instance, null === zR || void 0 === zR ? void 0 : zR.displayName]);
      (0, wW.useEffect)((() => (QW(), () => {
        clearTimeout(tR.current), BW(!1)
      })), [null === zR || void 0 === zR ? void 0 : zR.name, AW, null === zR || void 0 === zR ? void 0 : zR.instance, QW]);
      const rR = null === zR || void 0 === zR || null === (RW = zR.attributes.customAttributes) || void 0 === RW ? void 0 : RW.shotsLeft,
        cR = void 0 === rR ? null : (0, FW.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${rR}|${zR.requiresAmmo?`${bR}x${zR.clipSize}`:zR.clipSize}`
        }),
        XW = (0, IW.f)(),
        jR = (0, lW.o)();
      return (0, FW.jsx)(FW.Fragment, {
        children: NW && zR && !jR.showing ? (0, FW.jsxs)("div", {
          className: YW()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === PW,
            Enchanted: null !== iR
          }),
          style: {
            bottom: `${Math.min(Math.round(.05*XW),70)}px`,
            "--enchantmentColour": null !== (MW = eW.lb[iR]) && void 0 !== MW ? MW : eW.lb.None,
            "--duration": iR ? (0, eW.db)(iR) + "s" : void 0
          },
          children: [iR && (0, FW.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, FW.jsx)(oW.c, {
              text: TW
            }), cR]
          }), (0, FW.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, FW.jsx)(oW.c, {
              text: TW
            }), cR]
          })]
        }) : null
      })
    }
    var QW = MW(34740),
      rR = MW(27),
      cR = MW(1544),
      XW = MW(1571),
      jR = MW(564),
      kR = MW(34745);

    function aR() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    const sW = (0, wW.memo)((function() {
      var WW;
      const [RW, MW] = (0, wW.useState)(0), bR = (0, yR.h)("useFullInventory"), {
        isTouchScreen: NW,
        openInGameMenuName: eW
      } = (0, rR.i)(["isTouchScreen", "openInGameMenuName"]), gR = null !== eW && "inventory" !== eW, iR = (0, AW.d)(aR);
      (0, wW.useLayoutEffect)((() => ((0, kR.j)(), kR.j)), [NW, iR]);
      const [JW, IW] = (0, zR.c)("changedHotbarUsingNumkeys", !(0, TW.isMobile)()), oW = (0, XW.h)("hotbar"), lW = null !== (WW = oW.selectedSlot) && void 0 !== WW ? WW : RW, sW = oW.items[lW], [UW, EW] = (0, wW.useState)(!1), mR = (0, CW.b)(), xR = (0, wW.useRef)(null);
      (0, tR.f)("inventoryComponentVisible", (WW => {
        EW(WW)
      }));
      const vR = (0, tR.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, tR.f)("inventoryDraggedItemUpdated", (WW => {
        xR.current = WW, mR()
      })), (0, XW.d)("hotbarScrolled", (WW => {
        null === oW.selectedSlot && uW(WW)
      })), (0, XW.d)("hotbarSlotRequested", (WW => {
        KW(WW), IW(!1)
      })), (0, XW.d)("numberKeyPressed", (() => {
        IW(!1)
      })), (0, XW.d)("hotbarDropRequested", (WW => {
        if (sW) {
          var RW;
          const MW = WW && null !== (RW = sW.amount) && void 0 !== RW ? RW : 1;
          cR.gameBridge.send("removeInventoryItem", {
            slot: lW,
            amount: MW,
            drop: !0
          })
        }
      }));
      const KW = WW => {
          cR.gameBridge.send("selectHotbarSlot", WW), MW(WW)
        },
        uW = WW => {
          KW((lW + WW + jR.s) % jR.s)
        };
      let OW, nW = null,
        GW = null,
        LW = WW => WW => {},
        HW = WW => RW => {
          KW(WW)
        },
        DW = WW => WW => {},
        qR = [];
      if (UW) {
        var ZW;
        const WW = xR.current;
        if (null === WW || void 0 === WW || !WW.setHovered) return (0, FW.jsx)("div", {
          className: YW()("HotBarContainer", {
            Touch: NW,
            KeysAbove: NW && !iR
          }),
          children: (0, FW.jsx)("div", {
            className: "HotBar"
          })
        });
        nW = WW.draggedInfo, GW = WW.specialItemInfo, LW = WW.setHovered, HW = WW.pointerDown, DW = WW.pointerUp, OW = WW.variation, qR = null !== (ZW = WW.craftFlyAnims) && void 0 !== ZW ? ZW : []
      }
      return (0, FW.jsxs)("div", {
        className: YW()("HotBarContainer", {
          Touch: NW,
          PopupOpen: NW && gR,
          KeysAbove: NW && !iR
        }),
        children: [(0, FW.jsxs)("div", {
          className: YW()("HotBar", {
            HoverDisabled: vR
          }),
          children: [NW && (0, FW.jsxs)(FW.Fragment, {
            children: [(0, FW.jsx)(pW, {
              useFullInventory: bR,
              inventoryOpen: UW
            }), (0, FW.jsx)(dW, {
              direction: "Previous",
              onPress: () => {
                uW(-1)
              }
            })]
          }), !NW && (0, FW.jsxs)(FW.Fragment, {
            children: [(0, FW.jsx)(hW, {}), (0, FW.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, FW.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((WW, RW) => (0, FW.jsx)(PW.e, {
              idx: RW,
              draggedInfo: nW,
              specialItemInfo: GW,
              craftFlyHoldbackInfo: (0, QW.l)(qR, RW),
              setHovered: LW(RW),
              pointerDown: HW(RW),
              pointerUp: DW(RW),
              variation: OW,
              isSelected: RW === lW,
              hoverDisabled: vR,
              showNumber: JW
            }, RW)))
          }), NW && (0, FW.jsx)(dW, {
            direction: "Next",
            onPress: () => {
              uW(1)
            }
          }), !NW && (0, FW.jsxs)(FW.Fragment, {
            children: [(0, FW.jsx)("div", {
              className: "HotBarFiller"
            }), (0, FW.jsx)("div", {
              className: YW()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !bR
              }),
              onPointerDown: () => {
                BW.k.Sz("toggleMenu", "inventory")
              },
              children: (0, FW.jsx)(VW, {})
            })]
          })]
        }), (0, FW.jsx)(fW, {
          selectedItem: sW,
          slotIdx: lW,
          ammo: oW.ammo
        })]
      })
    }));

    function dW(WW) {
      let {
        direction: RW,
        onPress: MW
      } = WW;
      return (0, FW.jsx)("div", {
        className: YW()("HotBarArrow", RW),
        children: (0, FW.jsx)(bR.b, {
          icon: "Previous" === RW ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          showPress: !0,
          onClick: MW
        })
      })
    }
    const pW = (0, wW.memo)((function(WW) {
        let {
          useFullInventory: RW,
          inventoryOpen: MW
        } = WW;
        const wW = (0, yR.h)("maxAuraLevel");
        return (0, FW.jsxs)("div", {
          className: YW()("TouchInventoryKeys", {
            NoAuraBar: 0 === wW,
            InventoryOpen: MW
          }),
          children: [(0, FW.jsx)(hW, {
            touchKey: !0
          }), (0, FW.jsx)("div", {
            className: YW()("TouchInventoryKey BagKey", {
              Hidden: !RW
            }),
            children: (0, FW.jsx)(VW, {
              touchKey: !0
            })
          })]
        })
      })),
      hW = (0, wW.memo)((function(WW) {
        let {
          touchKey: RW = !1
        } = WW;
        const MW = (0, NW.b)();
        return (0, FW.jsx)("div", {
          className: RW ? YW()("TouchInventoryKey ShopKey", {
            Hidden: !MW
          }) : YW()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !MW
          }),
          children: (0, FW.jsx)(bR.b, {
            icon: (0, eW.cc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            showPress: RW,
            onClick: WW => {
              WW.stopPropagation(), MW && rR.b.set({
                openEverythingMenuName: JW.t.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function UW(WW) {
      let {
        player: RW
      } = WW;
      return RW.some((WW => null !== WW && eW.Wc.includes(WW.name)))
    }

    function EW(WW) {
      WW.creative || gR.g.getItem("LogInInventoryRedDotTutorialComplete") || (UW(WW) ? (BW.k.Sz("RedDotOpenInventoryIcon", !0), BW.k.Sz("TouchTutorialOpenInventoryIcon", !0)) : (BW.k.Sz("RedDotOpenInventoryIcon", !1), BW.k.Sz("TouchTutorialOpenInventoryIcon", !1)))
    }
    const VW = (0, wW.memo)((function(WW) {
      let {
        touchKey: RW = !1
      } = WW;
      return (0, wW.useEffect)((() => {
        EW(cR.gameBridge.latest("inventory"))
      }), []), (0, XW.d)("inventory", EW), (0, tR.f)("toggleMenu", (WW => {
        null !== WW && void 0 !== WW && WW.startsWith("inventory") && UW(cR.gameBridge.latest("inventory")) ? (gR.g.setItem("LogInInventoryRedDotTutorialComplete", !0), BW.k.Sz("RedDotOpenInventoryIcon", !1), BW.k.Sz("TouchTutorialOpenInventoryIcon", !1)) : "shop" === WW && BW.k.Sz("showShopTouchTutorial", !1)
      })), RW ? (0, FW.jsx)(bR.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        showPress: !0,
        onClick: () => {
          BW.k.Sz("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, FW.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          BW.k.Sz("toggleMenu", "inventory")
        },
        children: (0, FW.jsx)(bR.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: WW => {
            BW.k.Sz("toggleMenu", "inventory"), WW.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  34733: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => YW,
      h: () => gR
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(1541),
      bR = MW(1537),
      yR = MW(1544),
      NW = MW(1571),
      eW = MW(34738),
      BW = MW(8153),
      tR = MW(1208),
      TW = MW(940);
    const gR = (WW, RW, MW) => {
      let wW = RW,
        CW = !1;
      for (const zR of MW)(null === zR || void 0 === zR ? void 0 : zR.idx) === WW && (CW = !0, wW > 0 && (wW -= zR.amount));
      return {
        displayedAmt: wW,
        shown: !CW || wW > 0
      }
    };
    const iR = WW => {
        let {
          idx: RW
        } = WW;
        return (0, tR.q)() ? null : (0, TW.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: RW < 9 ? RW + 1 : 0
        })
      },
      YW = (0, wW.memo)((function(WW) {
        var RW, MW, wW;
        let {
          idx: CW,
          setHovered: tR,
          pointerDown: YW,
          pointerUp: JW,
          draggedInfo: PW,
          specialItemInfo: IW,
          craftFlyHoldbackInfo: oW,
          defaultIconB64: lW = null,
          variation: FW,
          isSelected: fW = !1,
          hoverDisabled: QW = !1,
          showNumber: rR = !1,
          showNewDot: cR = !1
        } = WW;
        const XW = (0, NW.f)("inventory", (WW => CW === eW.e ? null : (0, BW.l)(WW, CW)));
        let jR, kR, aR, sW;
        if (CW === eW.e) IW && (jR = IW.name, aR = IW.amount, sW = IW.attributes);
        else if (XW) {
          var dW;
          jR = XW.name, kR = XW.icon, aR = null !== (dW = XW.amount) && void 0 !== dW ? dW : 0, sW = XW.attributes
        }
        const pW = null === (RW = sW) || void 0 === RW || null === (MW = RW.customAttributes) || void 0 === MW ? void 0 : MW.enchantmentTier,
          hW = (0, AW.l)(sW),
          {
            displayedAmt: UW,
            shown: EW
          } = gR(CW, aR, [PW, IW, oW]),
          VW = jR && EW,
          mR = void 0 !== FW && function(WW, RW) {
            const {
              enchantable: MW,
              salvageable: wW
            } = yR.gameBridge.latest("stationItems");
            return "Enchanting Table" === WW ? !0 === MW[RW] : "Salvaging Table" === WW && !0 === wW[RW]
          }(FW, jR);
        return (0, TW.jsxs)("div", {
          className: zR()("InvenItem", {
            Highlighted: VW && mR,
            Selected: fW,
            HoverDisabled: QW
          }),
          onPointerEnter: () => {
            null === tR || void 0 === tR || tR(!0)
          },
          onPointerLeave: () => {
            null === tR || void 0 === tR || tR(!1)
          },
          onPointerDown: YW,
          onPointerUp: JW,
          "data-inven-idx": CW,
          children: [VW && (0, TW.jsx)(bR.c, {
            itemName: null !== (wW = kR) && void 0 !== wW ? wW : jR,
            amount: UW,
            enchantmentTier: pW,
            bar: hW
          }), VW && cR && (0, TW.jsx)("div", {
            className: "InvenItemNewDot"
          }), rR && (0, TW.jsx)(iR, {
            idx: CW
          }), lW && !VW && (0, TW.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${lW})`
            }
          })]
        })
      }))
  },
  34738: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW,
      e: () => CW
    });
    const wW = -1,
      CW = -2
  },
  35180: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => QW
    });
    var wW = MW(75),
      CW = MW(1953),
      zR = MW(1523),
      AW = MW(540),
      bR = MW(33),
      yR = MW(897),
      NW = MW.n(yR),
      eW = MW(116),
      BW = MW(34770),
      tR = MW(2017),
      TW = MW(34779),
      gR = MW(2043),
      iR = MW(2024),
      YW = MW(2697),
      JW = MW(27),
      PW = MW(1621),
      IW = MW(1903),
      oW = MW(1053),
      lW = MW(3901),
      FW = MW(1571),
      fW = MW(940);
    const QW = (0, wW.memo)((function() {
      const WW = (0, CW.h)("lobbyLeaderboardInfo"),
        RW = (0, FW.h)("players"),
        MW = (0, FW.h)("lobbyLeaderboardRows"),
        bR = (0, FW.h)("hiddenPlayerNames"),
        yR = (0, wW.useRef)(null),
        [NW, eW] = (0, wW.useReducer)((WW => WW + 1), 0);
      return (0, wW.useEffect)((() => (0, PW.d)((() => {
        eW()
      }))), []), (0, fW.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, fW.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!WW) return (0, fW.jsx)(fW.Fragment, {});
            const wW = JSON.parse(JSON.stringify(WW)),
              CW = [...RW.ids],
              NW = {},
              eW = {};
            for (const WW of CW) {
              var BW, tR;
              NW[WW] = null === (BW = MW[WW]) || void 0 === BW ? void 0 : BW.colour;
              const RW = null === (tR = MW[WW]) || void 0 === tR ? void 0 : tR.values;
              RW && (eW[WW] = {
                ...RW
              })
            }
            const TW = Object.keys(wW);
            TW.sort(((WW, RW) => wW[WW].sortPriority - wW[RW].sortPriority)), CW.sort(((WW, RW) => {
              if (!eW[WW] || !eW[RW]) return 0;
              for (const MW of TW) {
                const CW = eW[WW][MW],
                  zR = eW[RW][MW];
                let AW = 0;
                if ("string" == typeof CW && "string" == typeof zR ? AW = CW.localeCompare(zR) : "number" == typeof CW && "number" == typeof zR ? AW = CW - zR : "number" == typeof CW && "string" == typeof zR ? AW = 1 : "string" == typeof CW && "number" == typeof zR && (AW = -1), AW) return AW * ("ascending" === wW[MW].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const WW of CW) {
              var gR, iR, YW;
              const {
                name: wW,
                ranks: CW,
                cosmetics: zR
              } = RW.byId[WW], bR = [], yR = null !== (gR = null === (iR = MW[WW]) || void 0 === iR || null === (YW = iR.tags) || void 0 === YW ? void 0 : YW.flatMap((WW => 0 === WW.length ? WW : [...WW, String.fromCharCode(8198)]))) && void 0 !== gR ? gR : [];
              bR.push(...yR), bR.push(...(0, oW.s)(CW, wW, (null === zR || void 0 === zR ? void 0 : zR.nameColour) === AW.e || null === zR || void 0 === zR ? void 0 : zR.nameColour)), eW[WW] ??= {}, eW[WW].name = bR
            }

            function JW(WW, MW) {
              if (eW[WW] && void 0 !== eW[WW][MW]) {
                if ("name" === MW) {
                  const {
                    name: wW,
                    cosmetics: CW
                  } = RW.byId[WW];
                  return (0, fW.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [CW && (0, fW.jsx)(IW.b, {
                      cosmetics: CW
                    }), " ", (0, fW.jsx)(zR.c, {
                      text: eW[WW][MW],
                      friendBadgeFor: (0, PW.f)(wW, bR) ? wW : void 0
                    })]
                  })
                }
                return (0, fW.jsx)(zR.c, {
                  text: eW[WW][MW]
                })
              }
              return ""
            }
            const FW = Object.keys(wW).filter((WW => !0 !== wW[WW].hidden)).map((WW => {
              var RW;
              return {
                key: WW,
                header: (0, fW.jsx)(zR.c, {
                  text: null !== (RW = wW[WW].displayName) && void 0 !== RW ? RW : ""
                })
              }
            }));
            return (0, fW.jsx)("div", {
              ref: yR,
              className: "LobbyLeaderboard",
              children: (0, fW.jsx)(lW.d, {
                columns: FW,
                rows: CW,
                getRowKey: WW => WW,
                renderRow: WW => (0, fW.jsx)(rR, {
                  playerId: WW,
                  playerName: RW.byId[WW].name,
                  isOtherPlayer: WW !== RW.localId,
                  lobbyLeaderboardInfo: wW,
                  getPlayerValue: JW,
                  playerColors: NW
                })
              })
            })
          }()
        })
      })
    }));

    function rR(WW) {
      let {
        playerId: RW,
        playerName: MW,
        isOtherPlayer: CW,
        lobbyLeaderboardInfo: zR,
        getPlayerValue: AW,
        playerColors: yR
      } = WW;
      const PW = (0, wW.useRef)(null);
      (0, wW.useEffect)((() => () => {
        tR.b.closeIfOwner(PW)
      }), []);
      const IW = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            bR.k.Sz("OpenReportMenu", {
              playerEId: RW,
              playerName: MW,
              PA: null,
              serverChatMsgId: null
            })
          }
        },
        oW = CW && eW.featureFlags.useSocialFeatures,
        lW = () => ({
          ...(0, TW.c)(RW, MW),
          showLocation: !1,
          status: null,
          extraActions: [IW],
          friendRequestSource: "leaderboard"
        });
      return (0, fW.jsxs)("tr", {
        ref: PW,
        "data-pad-focusable": oW || void 0,
        [tR.c]: oW || void 0,
        onClick: oW ? () => {
          var WW;
          tR.b.toggle(PW, {
            ...lW(),
            anchor: null !== (WW = PW.current.querySelector(".PlayerPfpAndName")) && void 0 !== WW ? WW : PW.current
          })
        } : void 0,
        onContextMenu: oW ? WW => {
          (0, gR.g)(PW, WW, lW(), JW.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: oW ? WW => {
          (0, iR.e)(WW, (() => (0, TW.c)(RW, MW).playerSocialPreview))
        } : void 0,
        children: [Object.keys(zR).map((WW => !0 === zR[WW].hidden ? null : (0, fW.jsxs)("td", {
          className: NW()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !CW
          }),
          children: [(0, fW.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: AW(RW, WW)
          }), (0, fW.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: yR[RW]
            }
          })]
        }, WW))), CW && !eW.featureFlags.useSocialFeatures && (0, fW.jsx)(BW.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: PW,
          options: [{
            icon: IW.icon,
            text: IW.text,
            onPointerDown: IW.onClick
          }, ...null === MW ? [] : (0, YW.c)(null, MW)]
        })]
      })
    }
  },
  35111: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => eW,
      e: () => BW,
      i: () => tR
    });
    var wW = MW(897),
      CW = MW.n(wW),
      zR = MW(35119),
      AW = MW(75),
      bR = MW(1953),
      yR = MW(964),
      NW = MW(940);
    const eW = "InGameHeaderContainer",
      BW = "TopRightElements",
      tR = (0, AW.memo)((function() {
        const [WW] = (0, yR.b)(), RW = (0, bR.l)("middleTextTop"), MW = (0, AW.useRef)(null), [wW, tR] = (0, AW.useState)(!1), TW = RW.hasText;
        return (0, AW.useLayoutEffect)((() => {
          const WW = MW.current;
          if (!WW) return;
          const RW = document.querySelector(`.${eW}`),
            wW = document.querySelector(`.${BW}`),
            CW = () => {
              const MW = WW.getBoundingClientRect(),
                CW = RW ? RW.getBoundingClientRect().right : 0,
                zR = wW ? wW.getBoundingClientRect().left : window.innerWidth,
                AW = MW.left < CW + 8,
                bR = MW.right > zR - 8;
              tR(AW || bR)
            };
          CW();
          const zR = new ResizeObserver(CW);
          return zR.observe(WW), RW && zR.observe(RW), wW && zR.observe(wW), () => {
            zR.disconnect()
          }
        }), [TW, RW.content, WW]), TW ? (0, NW.jsx)("div", {
          className: CW()("MiddleTextTopContainer", {
            MiddleTextTopBelow: wW
          }),
          children: (0, NW.jsx)(zR.e, {
            ref: MW,
            className: "MiddleTextTop",
            text: RW
          })
        }) : null
      }))
  },
  34656: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => eW,
      e: () => tR
    });
    var wW = MW(75),
      CW = MW(1166),
      zR = MW(1027),
      AW = MW(1157),
      bR = MW(2576),
      yR = MW(3911),
      NW = MW(940);

    function eW(WW) {
      let {
        loading: RW,
        schematics: MW,
        onSchematicPicked: wW,
        selectedSchematicIdList: CW = [],
        disableAutoExport: yR
      } = WW;
      const {
        t: eW
      } = (0, zR.C)();
      return (0, NW.jsxs)("div", {
        className: "SchematicList",
        children: [RW && (0, NW.jsx)(AW.d, {}), !RW && 0 === MW.length && (0, NW.jsx)("div", {
          className: "NoSchematicsText",
          children: eW("worldBuilder:noSavedSchematic")
        }), !RW && MW.map((WW => (0, NW.jsx)(bR.d, {
          source: {
            type: "schematic",
            schematic: WW
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            wW(WW)
          },
          isSelected: CW.includes(WW.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: WW.isAutoExported && yR,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, WW.schematicId)))]
      })
    }

    function BW(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: CW
      } = WW;
      const {
        t: AW
      } = (0, zR.C)(), [bR, BW] = (0, wW.useState)(null);
      return (0, NW.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bR && (0, NW.jsxs)(NW.Fragment, {
          children: [(0, NW.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: AW("worldBuilder:schematicList")
          }), (0, NW.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: AW("worldBuilder:clickSchematicForOptions")
          }), (0, NW.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, NW.jsx)(eW, {
              loading: !1,
              schematics: RW,
              onSchematicPicked: WW => {
                BW(WW)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bR && (0, NW.jsx)(yR.h, {
          schematic: bR,
          inSourceWorld: bR.schematicId === MW,
          onSchematicUpdate: WW => {
            BW(WW)
          },
          onClose: () => {
            BW(null), CW()
          }
        })]
      })
    }

    function tR(WW) {
      let {
        ownedSchematics: RW,
        currentWorldSchematicId: MW,
        onClose: wW
      } = WW;
      CW.NotificationProvider.showCustomPopup({
        body: WW => (0, NW.jsx)(BW, {
          ownedSchematics: RW,
          currentWorldSchematicId: MW,
          onClose: WW
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: wW,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35093: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => lW,
      f: () => oW
    });
    var wW = MW(3369),
      CW = MW(1253),
      zR = MW(75),
      AW = MW(5473),
      bR = MW(3361),
      yR = MW(1115),
      NW = MW(1544),
      eW = MW(1523),
      BW = MW(1255),
      tR = MW(1027),
      TW = MW(35096),
      gR = MW(897),
      iR = MW.n(gR),
      YW = MW(1135),
      JW = MW(904),
      PW = MW(1111),
      IW = MW(940);
    const oW = "SleepingOverlay";

    function lW() {
      const {
        t: WW
      } = (0, tR.C)(), [RW, MW] = (0, zR.useState)(!1), [gR, lW] = (0, zR.useState)(null), [fW, QW] = (0, zR.useState)(1), [rR, cR] = (0, zR.useState)(!1), [XW, jR] = (0, zR.useState)(!1), kR = (0, zR.useRef)(0), aR = (0, zR.useRef)(!1), sW = (0, zR.useRef)(!1), dW = (0, zR.useRef)(), pW = (0, zR.useRef)(null);

      function hW() {
        const WW = null !== gR && void 0 !== gR ? gR : "Rested Speed";
        NW.gameBridge.send("wakeUp", XW ? WW : null), pW.current = null, MW(!1), lW(null), QW(1), cR(!1), jR(!1)
      }

      function UW() {
        return !rR && (hW(), !0)
      }
      return (0, CW.f)("PlayerPhysicsTypeUpdate", (WW => {
        WW !== pW.current && (pW.current = WW, WW === AW.p.SLEEPING ? (sW.current || (kR.current = NW.gameBridge.lookup("cameraZoom", null), sW.current = !0), aR.current = !0, NW.gameBridge.send("setCameraZoom", 3), MW(!0), QW(function() {
          for (const WW of NW.gameBridge.lookup("blocksStandingOn", null)) {
            if (TW.d.leafBeds.includes(WW)) return console.log(`Found leaf bed: ${WW}`), 1;
            if (TW.d.woolBeds.includes(WW)) return console.log(`Found woold bed: ${WW}`), 2;
            if (TW.d.strongBeds.includes(WW)) return console.log(`Found strong bed ${WW}`), 3
          }
          return 1
        }())) : (sW.current = !1, MW(!1), lW(null), QW(1)))
      })), (0, zR.useEffect)((() => () => {
        (0, yR.j)(oW)
      }), []), (0, zR.useEffect)((() => {
        RW ? (0, yR.n)(oW) : ((0, yR.j)(oW), aR.current && (NW.gameBridge.send("setCameraZoom", kR.current), aR.current = !1))
      }), [RW]), (0, PW.r)("overlay", dW, UW, RW), (0, IW.jsx)(wW.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: RW,
        timeout: 300,
        nodeRef: dW,
        unmountOnExit: !0,
        children: (0, IW.jsx)("div", {
          ref: dW,
          onClick: WW => {
            UW() && WW.stopPropagation()
          },
          children: (0, IW.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, IW.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bR.j.map((RW => (0, IW.jsxs)(FW, {
                restedEffect: RW,
                mD: gR,
                setChosenRestedEffect: lW,
                children: [(0, IW.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, IW.jsx)(eW.c, {
                    text: [{
                      icon: RW
                    }]
                  }), bR.g[RW].shortName]
                }), (0, IW.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: WW(bR.g[RW].description, {
                    time: bR.g[RW].effectLevelDurations[fW] / 6e4
                  })
                })]
              }, RW)))
            }), (0, IW.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, IW.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, IW.jsxs)(BW.h, {
                className: "SleepingOverlayWakeUpButton",
                onClick: WW => {
                  XW ? hW() : (cR(!0), (0, YW._)((() => {
                    cR(!1), jR(!0)
                  }), !0)), WW.stopPropagation()
                },
                loading: rR,
                children: [!XW && (0, IW.jsxs)(IW.Fragment, {
                  children: [(0, IW.jsx)(JW.e, {
                    name: "film"
                  }), " ", WW("classicGame:watchAdToGetRestedPerk")]
                }), XW && WW("classicGame:wakeUp")]
              }), (0, IW.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, IW.jsx)("div", {
                  className: iR()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fW
                  }),
                  children: (0, IW.jsx)(eW.c, {
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
    const FW = (0, zR.memo)((function(WW) {
      let {
        children: RW,
        restedEffect: MW,
        mD: wW,
        setChosenRestedEffect: CW
      } = WW;
      return MW === wW ? (0, IW.jsx)(BW.m, {
        onClick: WW => {
          WW.stopPropagation()
        },
        children: RW
      }) : (0, IW.jsx)(BW.j, {
        onClick: WW => {
          CW(MW), WW.stopPropagation()
        },
        children: RW
      })
    }))
  },
  34779: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    var wW = MW(540),
      CW = MW(1544),
      zR = MW(1464);

    function AW(WW, RW) {
      var MW, AW;
      const bR = zR.b.getSocialState().friends.find((WW => WW.name.toLowerCase() === RW.toLowerCase())),
        yR = CW.gameBridge.latest("players").byId[WW],
        NW = void 0 !== yR && yR.name === RW,
        eW = NW && null !== (MW = yR.cosmetics) && void 0 !== MW ? MW : void 0,
        BW = bR && eW ? {
          ...bR,
          cosmetics: eW
        } : bR;
      return {
        playerSocialPreview: null !== BW && void 0 !== BW ? BW : {
          isError: !1,
          name: RW,
          ranks: NW ? [...yR.ranks] : [],
          cosmetics: null !== eW && void 0 !== eW ? eW : {},
          nameColour: null !== (AW = null === eW || void 0 === eW ? void 0 : eW.nameColour) && void 0 !== AW ? AW : wW.e,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== bR
      }
    }
  },
  3901: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => bR
    });
    var wW = MW(75),
      CW = MW(897),
      zR = MW.n(CW),
      AW = MW(940);

    function bR(WW) {
      let {
        columns: RW,
        rows: MW,
        getRowKey: CW,
        renderRow: bR,
        className: yR
      } = WW;
      return (0, AW.jsxs)("table", {
        className: zR()("Table", yR),
        children: [(0, AW.jsx)("thead", {
          children: (0, AW.jsx)("tr", {
            children: RW.map((WW => (0, AW.jsx)("th", {
              children: WW.header
            }, WW.key)))
          })
        }), (0, AW.jsx)("tbody", {
          children: MW.map((WW => (0, AW.jsx)(wW.Fragment, {
            children: bR(WW)
          }, CW(WW))))
        })]
      })
    }
  },
  35067: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => oW,
      d: () => IW,
      f: () => tR
    });
    var wW = MW(75),
      CW = MW(93),
      zR = MW(1189),
      AW = MW(1255),
      bR = MW(1180),
      yR = MW(1111),
      NW = MW(1027),
      eW = MW(35072),
      BW = MW(940);

    function tR(WW) {
      const [RW, MW] = (0, wW.useState)((() => (0, eW.k)(WW)));
      return (0, wW.useEffect)((() => (MW((0, eW.k)(WW)), (0, eW.H)((() => {
        MW((0, eW.k)(WW))
      })))), [WW]), RW
    }

    function TW(WW, RW) {
      "function" === typeof WW ? WW(RW) : WW && (WW.current = RW)
    }

    function gR(WW) {
      let {
        tutorial: RW,
        step: MW,
        enabled: wW = !0
      } = WW;
      const CW = tR(RW);
      return wW && CW === MW
    }

    function iR(WW, RW) {
      const MW = (0, eW.n)(WW),
        wW = MW.indexOf(RW);
      return !MW.slice(wW + 1).some((RW => (0, eW.s)(WW, RW)))
    }

    function YW(WW, RW, MW, wW) {
      let {
        tutorial: CW,
        step: zR,
        waitForClick: AW = !1,
        onPrevious: bR
      } = WW;
      const NW = RW && (0, eW.r)(CW, zR),
        BW = RW && !iR(CW, zR),
        tR = AW ? wW : MW;
      let TW = null;
      NW ? TW = () => {
        null === bR || void 0 === bR || bR(), (0, eW.p)(CW, zR)
      } : BW && (TW = () => {
        (0, eW.j)(CW)
      }), (0, yR.r)("popup", null !== tR && void 0 !== tR ? tR : MW, TW, RW && null !== tR, null, NW ? void 0 : "controller:menusSkipTutorial")
    }

    function JW(WW) {
      let {
        tutorial: RW,
        step: MW,
        text: wW,
        waitForClick: CW = !1,
        onPrevious: zR
      } = WW;
      const {
        t: bR
      } = (0, NW.C)(), yR = iR(RW, MW);
      return (0, BW.jsxs)(BW.Fragment, {
        children: [(0, BW.jsx)("div", {
          className: "TutorialStepText",
          children: wW
        }), (0, BW.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, eW.r)(RW, MW) && (0, BW.jsx)(AW.j, {
            className: "TutorialStepButton",
            onClick: () => {
              null === zR || void 0 === zR || zR(), (0, eW.p)(RW, MW)
            },
            children: bR("tutorial:back")
          }), !CW && (0, BW.jsx)(AW.h, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, eW.f)(MW)
            },
            padDefaultFocus: !0,
            children: bR(yR ? "tutorial:done" : "tutorial:next")
          }), !yR && (0, BW.jsx)(AW.j, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, eW.j)(RW)
            },
            children: bR("tutorial:skip")
          })]
        })]
      })
    }

    function PW(WW) {
      let {
        rect: RW
      } = WW;
      const MW = Math.max(0, RW.top - 6),
        wW = RW.bottom + 6,
        CW = Math.max(0, RW.left - 6),
        zR = RW.right + 6;
      return (0, BW.jsxs)(BW.Fragment, {
        children: [(0, BW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: MW
          }
        }), (0, BW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: wW,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, BW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: MW,
            left: 0,
            width: CW,
            height: wW - MW
          }
        }), (0, BW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: MW,
            left: zR,
            right: 0,
            height: wW - MW
          }
        })]
      })
    }
    const IW = (0, wW.forwardRef)((function(WW, RW) {
      let {
        placement: MW = "right",
        children: AW,
        ...yR
      } = WW;
      const NW = gR(yR),
        eW = (0, wW.useRef)(null),
        tR = (0, wW.useRef)(null);
      YW(yR, NW, eW, tR);
      const {
        getArrowProps: iR,
        getTooltipProps: IW,
        setTooltipRef: oW,
        setTriggerRef: lW
      } = (0, zR.e)({
        placement: MW,
        trigger: null,
        visible: NW,
        interactive: !0,
        closeOnOutsideClick: !1
      }), [FW, fW] = (0, wW.useState)(null), QW = function(WW, RW) {
        const [MW, CW] = (0, wW.useState)(null);
        return (0, wW.useEffect)((() => {
          if (!RW || !WW) return void CW(null);
          let MW = 0,
            wW = null;
          const zR = () => {
            const RW = WW.getBoundingClientRect();
            wW && RW.left === wW.left && RW.top === wW.top && RW.width === wW.width && RW.height === wW.height || (wW = RW, CW(RW)), MW = requestAnimationFrame(zR)
          };
          return zR(), () => {
            cancelAnimationFrame(MW)
          }
        }), [WW, RW]), MW
      }(FW, NW);
      (0, wW.useEffect)((() => {
        NW && FW && FW.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [NW, FW]);
      const rR = AW.ref,
        cR = (0, wW.useCallback)((WW => {
          lW(WW), tR.current = WW, fW(WW), TW(RW, WW), TW(rR, WW)
        }), [lW, RW, rR]),
        XW = (0, wW.useCallback)((WW => {
          oW(WW), eW.current = WW
        }), [oW]);
      return (0, BW.jsxs)(BW.Fragment, {
        children: [(0, wW.cloneElement)(AW, {
          ref: cR
        }), NW && (0, CW.createPortal)((0, BW.jsxs)(BW.Fragment, {
          children: [QW && (0, BW.jsx)(PW, {
            rect: QW
          }), (0, BW.jsxs)("div", {
            ref: XW,
            ...IW({
              className: "tooltip-container SmallTextLight TutorialStep"
            }),
            children: [(0, BW.jsx)(JW, {
              ...yR
            }), (0, BW.jsx)("div", {
              ...iR({
                className: "tooltip-arrow"
              })
            })]
          })]
        }), (0, bR.h)())]
      })
    }));

    function oW(WW) {
      const RW = gR(WW),
        MW = (0, wW.useRef)(null);
      return YW(WW, RW, MW, null), RW ? (0, CW.createPortal)((0, BW.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, BW.jsx)("div", {
          ref: MW,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, BW.jsx)(JW, {
            ...WW
          })
        })
      }), (0, bR.h)()) : null
    }
  },
  5568: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(75),
      CW = MW(50);

    function zR(WW, RW) {
      var MW;
      const [zR, AW] = (0, wW.useState)(null !== (MW = CW.g.getItem(WW)) && void 0 !== MW ? MW : RW);
      return [zR, RW => {
        CW.g.setItem(WW, RW), AW(RW)
      }]
    }
  },
  35075: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(27),
      CW = MW(1135);

    function zR() {
      const {
        clientEscMenuOptions: WW
      } = (0, wW.i)(["clientEscMenuOptions"]);
      return (0, CW.z)() && WW.showChat
    }
  },
  35015: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => yR
    });
    var wW = MW(2154),
      CW = MW(2775),
      zR = MW(2202);
    const AW = ["Unable to create vertex buffer"];
    let bR = {};

    function yR(WW, RW) {
      const MW = new Date;
      console.error(`${MW.getUTCHours()}:${MW.getUTCMinutes()}:${MW.getUTCSeconds()}`, WW, RW, null === RW || void 0 === RW ? void 0 : RW.stack), AW.includes(null === RW || void 0 === RW ? void 0 : RW.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, wW.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${RW.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, zR.logError)("warning", `${WW}\n ${RW} "\n" ${null===RW||void 0===RW?void 0:RW.stack}`);
      const CW = WW + RW + (null === RW || void 0 === RW ? void 0 : RW.stack);
      CW in bR || ((0, zR.logError)("error", `${WW}\n ${RW} "\n" ${null===RW||void 0===RW?void 0:RW.stack}`), bR[CW] = !0)
    }(0, CW.onGameReset)((() => {
      bR = {}
    }))
  },
  34937: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    const wW = [{
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

    function CW(WW, RW, MW) {
      const CW = Math.abs(WW - RW),
        zR = Date.now() - MW;
      for (const AW of wW)
        if (WW < AW.maxDist) return CW >= AW.hardUpdateDist || zR > AW.timeBetweenSoftChecks && CW >= AW.softUpdateDist;
      return !1
    }
  },
  35126: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      d: () => zR,
      g: () => CW
    });
    const wW = [.25, .5, 1, 2, 4, 8, 16];

    function CW(WW, RW) {
      const MW = wW;
      let CW = MW.indexOf(WW);
      return -1 === CW && (CW = MW.findIndex((RW => RW >= WW)), -1 === CW && (CW = MW.length - 1)), "up" === RW ? MW[Math.min(CW + 1, MW.length - 1)] : MW[Math.max(CW - 1, 0)]
    }

    function zR(WW) {
      return WW <= wW[0]
    }

    function AW(WW) {
      return WW >= wW[wW.length - 1]
    }
  },
  35169: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW,
      f: () => CW
    });
    const wW = "data-replay-ui-active",
      CW = [{
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
  35171: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => NW,
      g: () => BW,
      k: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(35169);

    function AW() {
      const WW = {};
      for (const {
          group: RW
        }
        of zR.f) WW[RW] = !0;
      return WW
    }
    let bR = AW();

    function yR() {
      CW.k.Sz("replayViewer|uiVisibilityChanged")
    }

    function NW() {
      return bR
    }

    function eW(WW, RW) {
      bR[WW] !== RW && (bR = {
        ...bR,
        [WW]: RW
      }, "nametag" === WW && wW.b.set({
        areNametagsHidden: !RW
      }), yR())
    }

    function BW() {
      bR = AW(), wW.b.set({
        areNametagsHidden: !1
      }), yR()
    }
  },
  35034: (WW, RW, MW) => {
    function wW(WW, RW) {
      WW instanceof Promise ? WW.then(RW).catch((WW => {
        console.error("Couldn't open the preview", WW)
      })) : RW(WW)
    }
    MW.d(RW, {
      b: () => AW
    });
    class CW {
      constructor(WW) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height), null !== this.view && WW.show(this.view))
        }))
      }
      show(WW) {
        var RW;
        this.view = WW, null === (RW = this.opened) || void 0 === RW || RW.show(WW)
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    class zR {
      constructor(WW) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(WW).then((WW => WW.ready)), wW(WW, (WW => {
          this.closed ? WW.close() : (this.opened = WW, null !== this.size && WW.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var WW, RW;
        return null !== (WW = null === (RW = this.opened) || void 0 === RW ? void 0 : RW.isReady()) && void 0 !== WW && WW
      }
      setCosmetic(WW, RW) {
        var MW;
        null === (MW = this.opened) || void 0 === MW || MW.setCosmetic(WW, RW)
      }
      playEmote(WW) {
        var RW;
        null === (RW = this.opened) || void 0 === RW || RW.playEmote(WW)
      }
      async untilDrawn(WW) {
        var RW;
        await this.ready, await (null === (RW = this.opened) || void 0 === RW ? void 0 : RW.untilDrawn(WW))
      }
      resize(WW, RW) {
        var MW;
        this.size = {
          width: WW,
          height: RW
        }, null === (MW = this.opened) || void 0 === MW || MW.resize(WW, RW)
      }
      close() {
        var WW;
        this.closed = !0, null === (WW = this.opened) || void 0 === WW || WW.close(), this.opened = null
      }
    }
    const AW = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(WW) {
        this.host = WW
      }
      setDefaultHost(WW) {
        this.makeDefault = WW
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(WW) {
        return new CW(this.current().openMob(WW))
      }
      openPet(WW) {
        return new CW(this.current().openPet(WW))
      }
      openMobLineup(WW) {
        return new CW(this.current().openMobLineup(WW))
      }
      openCharacter(WW) {
        return new zR(this.current().openCharacter(WW))
      }
    }
  },
  35025: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.b
    });
    var wW = MW(35034);
    class CW {
      constructor(WW) {
        this.load = WW, this.loaded = null, this.loading = null
      }
      run(WW) {
        return null !== this.loaded ? WW(this.loaded) : (this.loading ??= this.load().then((WW => (this.loaded = WW, WW)), (WW => {
          throw this.loading = null, WW
        })), this.loading.then(WW))
      }
    }
    class zR {
      constructor() {
        this.mobScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(142)]).then((() => MW(38676))))), this.characterScene = new CW((() => Promise.all([MW.e(207), MW.e(206), MW.e(224), MW.e(225), MW.e(62), MW.e(222), MW.e(60), MW.e(232), MW.e(226), MW.e(61), MW.e(231), MW.e(229), MW.e(221), MW.e(198), MW.e(261), MW.e(203), MW.e(216), MW.e(227), MW.e(230), MW.e(120), MW.e(178), MW.e(214), MW.e(199), MW.e(98), MW.e(97), MW.e(262), MW.e(141)]).then((() => MW(38768)))))
      }
      openMob(WW) {
        return this.mobScene.run((RW => RW.openMobPreview(WW)))
      }
      openPet(WW) {
        return this.mobScene.run((RW => RW.openPetPreview(WW)))
      }
      openMobLineup(WW) {
        return this.mobScene.run((RW => RW.openMobLineupPreview(WW)))
      }
      openCharacter(WW) {
        return this.characterScene.run((RW => RW.openCharacterPreview(WW)))
      }
    }
    wW.b.setDefaultHost((() => new zR))
  },
  35012: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW,
      h: () => zR
    });
    const wW = new Map;

    function CW(WW) {
      var RW;
      return null === WW ? null : null !== (RW = wW.get(WW)) && void 0 !== RW ? RW : null
    }

    function zR(WW, RW) {
      return wW.set(WW, RW), () => {
        wW.get(WW) === RW && wW.delete(WW)
      }
    }
  },
  34838: (WW, RW, MW) => {
    MW.d(RW, {
      A: () => IW,
      D: () => gR,
      E: () => PW,
      c: () => zR,
      e: () => iR,
      i: () => YW,
      m: () => bR,
      q: () => tR,
      s: () => JW,
      w: () => BW
    });
    var wW = MW(27),
      CW = MW(33);
    const zR = "clientGameInventoryButtonsChanged",
      AW = new Map;

    function bR() {
      return [...AW.values()].sort(((WW, RW) => {
        var MW, wW;
        return (null !== (MW = WW.order) && void 0 !== MW ? MW : 0) - (null !== (wW = RW.order) && void 0 !== wW ? wW : 0)
      }))
    }
    let yR = null;

    function NW(WW) {
      yR = WW
    }
    let eW = !1;

    function BW(WW) {
      eW = !0;
      try {
        WW.onClick()
      } finally {
        eW = !1
      }
      WW.panel && "clientGame" === wW.b.get("openInGameMenuName") && NW(WW.id)
    }

    function tR() {
      return eW
    }

    function TW() {
      return bR().filter((WW => WW.panel && !WW.disabled))
    }

    function gR(WW) {
      const RW = TW(),
        MW = RW.findIndex((WW => WW.id === yR));
      return !(MW < 0 || RW.length < 2) && (BW(RW[(MW + WW + RW.length) % RW.length]), !0)
    }

    function iR() {
      return null !== yR && TW().length > 1
    }

    function YW() {
      NW(null)
    }

    function JW() {
      "inventory" !== wW.b.get("openInGameMenuName") && NW(null)
    }

    function PW() {
      const WW = yR;
      return NW(null), WW
    }

    function IW(WW) {
      return AW.set(WW.id, WW), CW.k.Sz(zR, bR(), !0), () => {
        AW.get(WW.id) === WW && (AW.delete(WW.id), CW.k.Sz(zR, bR()))
      }
    }
  },
  34830: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => bR,
      e: () => YW,
      f: () => JW,
      g: () => tR,
      h: () => NW,
      j: () => iR,
      k: () => TW,
      l: () => eW
    });
    var wW = MW(27),
      CW = MW(33),
      zR = MW(1115),
      AW = MW(34838);
    const bR = "clientGameUiChanged";
    let yR = null;

    function NW() {
      return yR
    }

    function eW(WW, RW) {
      const MW = {
        content: WW,
        menu: RW
      };
      return yR = MW, CW.k.Sz(bR, yR, !0), () => {
        yR === MW && (yR = null, gR = !1, YW(), CW.k.Sz(bR, null))
      }
    }
    let BW = null;

    function tR() {
      return BW
    }

    function TW(WW) {
      return BW = WW, () => {
        BW === WW && (BW = null)
      }
    }
    let gR = !1;

    function iR() {
      const WW = wW.b.get("openInGameMenuName");
      "clientGame" !== WW && (gR = "inventory" === WW), (0, AW.q)() || (0, AW.i)(), (0, zR.n)("InGameMenu"), wW.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function YW() {
      PW(!1)
    }

    function JW() {
      PW(gR)
    }

    function PW(WW) {
      "clientGame" === wW.b.get("openInGameMenuName") && wW.b.set({
        openInGameMenuName: WW ? "inventory" : null
      }), WW || (0, AW.i)(), gR = !1
    }
  },
  35141: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => ZR,
      f: () => qM
    });
    var wW = MW(3357),
      CW = MW(564),
      zR = MW(2846),
      AW = MW(2828),
      bR = MW.n(AW);
    const yR = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      NW = "EV_boolean",
      eW = "EV_double",
      BW = "EV_string",
      tR = "EV_doubleArr",
      TW = "EV_armour",
      gR = "EV_other",
      iR = "EV_cosmetics",
      YW = "OEV_boolean",
      JW = "OEV_int",
      PW = "OEV_double",
      IW = "OEV_string",
      oW = "OEV_stringArr",
      lW = "OEV_meshScaling",
      FW = "IV_int",
      fW = "IV_string",
      QW = "IV_doubleArr",
      rR = "IV_double",
      cR = "HV_int",
      XW = "HV_slots",
      jR = "EnvV_string",
      kR = "EnvV_double",
      aR = "EnvV_doubleArr",
      sW = "EnvV_boolean",
      dW = {
        type: BW,
        name: BW,
        position: tR,
        rotation: tR,
        scale: eW,
        speed: eW,
        jumping: NW,
        crouching: NW,
        cameraPitch: eW,
        armSwinging: NW,
        heldItemName: BW,
        heldItemEnchantmentTier: BW,
        pose: BW,
        followingEId: BW,
        ridingVehicleEId: BW,
        leaderboardTop: BW,
        meshKind: BW,
        meshOpts: BW,
        followingOffset: tR,
        shouldMatchFollowingEntityRotation: NW,
        meshOffset: tR,
        baseRenderHeading: eW,
        armour: TW,
        nRW: gR,
        playerCustomisations: iR,
        variation: BW,
        metaInfo: BW,
        soundName: BW,
        volume: eW,
        refDistance: eW,
        maxHearDist: eW,
        rate: eW,
        aiState: BW
      },
      pW = {
        opacity: PW,
        zIndex: JW,
        overlayColour: IW,
        canSee: YW,
        meshScaling: lW,
        nameTagInfo: IW,
        multilineTextBox: IW,
        hasPriorityNametag: YW,
        ranks: oW,
        nameColour: IW,
        _isAlive: YW,
        _invisibleEffect: YW,
        _invincible: YW,
        killfeedColour: IW,
        hideNameSeed: JW,
        _glowingEffect: YW,
        lockHeadToBody: YW
      },
      hW = {
        itemName: fW,
        amount: FW,
        position: QW,
        size: rR,
        attributes: fW
      },
      UW = {
        skyBox: jR,
        fogColourOverride: jR,
        fogChunkDistanceOverride: kR,
        cameraTint: aR,
        fogOnSkybox: sW,
        fogBlockDistanceOverride: kR
      },
      EW = {
        type: "array",
        items: "double"
      },
      VW = {
        type: "array",
        items: "int"
      },
      mR = {
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
      xR = {
        type: "map",
        values: EW
      };

    function vR(WW, RW) {
      return {
        type: "record",
        name: WW,
        fields: [{
          name: "x",
          type: RW
        }]
      }
    }
    const KW = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", vR(YW, "boolean"), vR(JW, "int"), vR(PW, "double"), vR(IW, "string"), vR(oW, {
              type: "array",
              items: "string"
            }), vR(lW, xR)]
          }]
        }
      },
      uW = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", vR(NW, "boolean"), vR(eW, "double"), vR(BW, "string"), vR(tR, EW), vR(TW, mR), vR(gR, KW), vR(iR, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      OW = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", vR(FW, "int"), vR(fW, "string"), vR(rR, "double"), vR(QW, EW)]
          }]
        }
      },
      nW = {
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
      GW = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", vR(cR, "int"), vR(XW, nW)]
        }]
      },
      LW = {
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
      HW = {
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
      DW = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", vR(jR, "string"), vR(kR, "double"), vR(aR, EW), vR(sW, "boolean")]
          }]
        }
      },
      qR = [{
        name: "tMW",
        type: "record",
        fields: [{
          name: "pos",
          type: VW
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
          type: VW
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
      ZW = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "K8",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "A7",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "N7",
              type: ["null", "string", EW],
              default: null
            }, {
              name: "B7",
              type: ["null", "double"],
              default: null
            }, {
              name: "J7",
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
          name: "XE",
          type: "string"
        }, {
          name: "vWW",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "qWW",
          type: "double"
        }, {
          name: "Z2",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "U1",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: EW
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "xV",
          type: "string"
        }, {
          name: "Jq",
          type: ["null", "double"],
          default: null
        }, {
          name: "Iq",
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
          name: "N9",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "J9",
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
      SW = [{
        name: "position",
        type: EW
      }, {
        name: "direction",
        type: EW
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

    function WR() {
      const WW = [{
        name: "entities",
        type: {
          type: "map",
          values: uW
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: OW
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: SW
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
              items: GW
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", LW],
        default: null
      }];
      return WW.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "xV",
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
      }), WW.push({
        name: "uiElements",
        type: HW
      }, {
        name: "environment",
        type: DW
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: qR
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: ZW
        }
      }), WW
    }
    const RR = {
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
                name: "WR",
                type: "int"
              }, {
                name: "position",
                type: EW
              }, {
                name: "direction",
                type: EW
              }, {
                name: "easing",
                type: EW
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
    var MR;
    const wR = {
      9: (MR = [{
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
            name: "FRW",
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
              type: VW
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
            fields: WR()
          }
        }
      }, RR], bR().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: MR
      }, {
        NM: Object.create(null)
      }))
    };
    var CR = MW(35150);
    let zM, AR, bM, yM;
    const NR = 12;
    var eR, BR;
    const tM = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 3, !1, 4, 16, 127, 128, 129, !0, 130, 131, 15, 126, 2, 10, 5, 11, 9, void 0, "P"];

    function TR(WW) {
      return typeof eR[WW] === tM[5] ? eR[WW] = function(WW) {
        var RW, MW, wW, CW, zR, AW, bR;
        for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
          var yR = 'TFDcImA6w~ptUdN*;?sg}oq[CYxWi)QhVa2b"uf=RyE`Z3vS#XkJj4>5/:@&rBH_e,{8Pnz1M%l|^]G.OL(0$!79+<K'.indexOf(RW[bR]);
          if (yR !== -tM[1])
            if (AW < tM[0]) AW = yR;
            else {
              YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
              do {
                YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
              } while (zR > tM[9]);
              AW = -tM[1]
            }
        }
        return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
      }(BR[WW]) : eR[WW]
    }

    function gM(WW) {
      return typeof MM !== tM[5] && MM ? (new MM).decode(new wM(WW)) : typeof CM !== tM[5] && CM ? CM.from(WW).toString("utf-8") : bw(WW)
    }

    function iM() {}

    function YR() {
      YR = function() {}
    }
    var JR, PR;
    YR(eR = {}, BR = ['"*lwif8bb>9L2BnCu#FJmrsD', "$Aa|<&xQy,7)|NbuR1$1t#;jc", '<&3^,"n:|?XNbDhu<,zjJ=2"@H,X&(AC+taWM#CQerzVnM}W3,KmP4_b&&FGF', ",AA^VbRD", "H24py_e7#sL_:MGxIbBp)0X6v_N}aMFhFU]kHvT", "^Pq^LL>vs_>{/crE&[JVlrOA?rRORWZ=", "VR2|&4ljV{DG@dFu", "fr>%Pl)blNCA1x=hOYEMcvyFkg|]T", '%Pfh5]Av_w<ggN@yD{=^a>;"|w"6o;VCs>RXkzYy:@yj/cV?3UbM>$?69d', 'N*RAB@R"wp:^am5RMP?JT2T"V:a?`(K)Usvj%"F4%}Y', 'mVQir]$2t&"5=fbQsJ/~r#9yzd2', "W[0wzMF98gvNI*t", "M&?At#bg!@!l1WHE&#6jkJy|[dj{u#HCirCX]:T", 'vPZ]cHc|L*h}tfr[FXSAF7LygrwWa;"YfHFAOHqjVU@zCW_Q^tKVAnkD', 'dX"]>2T', 'k3o5dk.:|?6Q/c"h:,3ho:g6<@@X:I!RcXol;', 'Tr9I73"QyN=%?"uh5PPxo!#D|N)jpuA', 'z3(4BMSdN*^VLI{">x8w', "5:J4SJZj%Nn]UW=Co[OAEOr@&t]s`Nsi|t[%H4bgI", "g1cke2g63t0_BC|YMN7hI7/7Orr6yMbh8HHIuBT", "OhVA_.SyC?tA*DFC|[%>q:)gcg=j}*v=j[?A", "~Vhi`b,Ffd#nic", "I*/~w5,[u@fNxXlYZUsJH$.F", ",[pMW0UD&Nf", "/,KVNf8:g>)WMc!q@,hXq:*6.sWcXr>RqF", 'o)[Itnr@T*o5F;:2+#>%2%V"^N!r{Y@EZ:6QS({Ac', "n30mx%}@?_[HAu#RpF", "0hbM<%nF", "53r4yP4SXs", "tUmpgL5_.4YW!CiyP#UlLn#vX{mJ|N72>?aJnlwQ<?zIF", ')*8)"S!)^,&b4;csBP*aU', "j~FGbO=dQo~PND&y4x*~9:uSbU~P`c", '3,<wibAs3&rX2uW?dIsM(n|6q@S^]"W)K22W3O;j"~7]g*2uIsD', 'V~6~wlHDZ&6,^c+)2~XWYGHQ@HvI`D8QrcUlF72"){Y5}c)[:T', ':3nxsLHU`/RO);hQH,Zpokn:X{y#.fKyrcvI*"yF', '`u`Vzk$Uerz{cx(Wg_kM,40:#o%i*DW"sx>66kt_Ae36qmTuAPFG<0?ym', ".?T>@@~L0g3p+1pxLAc", '.tg)w"Pv0:tPKxqRAUp|GLU@P~GXcfbuw`G6z"[6rtHt;c', "NVa|15^@meA2,#fsx)D", 'q)7h~""",U{_SN(iS~z^_5iOb~khpuMx139A>=g6jgV^QBmgGhn5OjGvI', "#~vi*^kD", "Y1lV&4qDgrxH}S.Wtv;agn=dm>b.I#I`x*Zpx", ")PP]Lj=S*U1q5@7i}r$4@@H72r[@ZSU=oU9~r]7j%H,{YI", "!E71x&ggt}Lr)#dgYPD", "Hi_^w5>OTrxW5(T[B>BjdlvR~5u24;jW@&c", "Q*~Qn#u6&NzX{uK;LN]64$|dx,CC{LcQoF", "6X=icv7U,_E", '|/^6PvDzh_DA#W_"31G1t0dg}>E?gkPC;U36G5j@B/kHF', '41Z)J=3S~p|)?"_QiF', "]&_A_]+Uv/UpMc", "y:~M}n$2vw;|MMuYeiz^L04F`N=6!ID[@PpVF=hy&N6d9D", 'Jc!1"/QUOs7l*c<bKE%>aO5)jgevAmy=k#6^H.VOodZOKx*', 'Gz)i,4?4y}R#r*%s!Jzij@l2Vo!UGY,CM>3lx%agVr&{^Wa"R>tp}', "nux|u/kRV_c..D*Rni(Jr2/jKNezZITu5#<J$jrD", 'yA_j~r/j|H{]|xN}B>IkRS:Fbr3XY"/2+=r4&@?bG43o!I', 'zP~JM"p@&?1]qxs}To>iaON"|&Rjzd(W}veJkPWbPg/', '`10VY:b|{>Lv`(B)O&wAcM:)}~V}e&RhuleA=>h)":Bi?r%=s1up+^dF', 'C*P]aRK7a:$"$*_E%A~Qer;C&&(vY#d}M,$l]LB_UN8OlL}R!T', "/[N6(f7C_w&&:C/bglPlhGl2Pee%Eu@).&,VZJT", "8AHievb_#{4YC&rb|NJw", "o}Z)3|2D.UID0DzhxlsMXJ/O&?%)9DO=|u|mRbT", ':R1%{My_OsY@u;h[A[fhs"?6@N46R0dgDr[ah>V7bghNTcP?;VhiuXT', "(z!I3(iQa>fH+1|xyP=Xr$Sy?r3opB#2{PvI.kJ6uguM|fCb$YmphS}@H&ZCF", "yu6~?^W4AdsnTr`x|/TQ!0<F", "K2pVV&ie^HV.H(Mh7NGhI769^NmdXMa?3}G1<&Qs<}<8MM%=|P_I;lods*", ";Aj)mlb:J>6cWx,u/PglTr4F", '^2xV]l"l$eM]}"bso[vh!j!yJgy6@nwx$E|V6Hhy6', "k}_~=%ijV*POAu2?$Jq6Ol^Cm", "wl_^Dvg)$eCd;&+Er[=^S_&d_r|/Zc", "*UI]1kDwj:0kDuI`M3|m,$HD", '"*G1j(*Y]sdBnCwh[A4hEPdF', "}Jml:zugBs(wy#?RYrj]z4pzmge/F", "R[lV;LYn`&WH}cCy3x<JP5@Rl?@", "4,Giqj8d6", 'W2_j("0)F>:X6kPs{2sV3_~F', "Z,4pML3d&,@", "52AhEO4[0>*.Ob>ye%XAA21dl}j%ic52s_tM>266x}f2%IqR`2]k&2c|.4f", 't`>i/J[Lze>zA("QGAlJ@@H79dd.(NFQy1Qh2Xj7/}5OWD', "s_EJYG*4I~VnZ1`YNu.%{vgST{?cR&|x_2YJl#64Ap", "`h|V_5rQ6pP%,u!y~U;Qp^vsnd(*Dm!qW)[~", "$J]i:4XFsgFQF", "OA[^(GXyBH}M(npx3:xV1HT", "e>]IEX[b4gR^/W4b6_5>wl8y+?K8^&Rse#D]{MT", "H2M~YRnJX*!8$OtgVlCavX0!^wdurWfsJcxJ/zCCLUP*YI", "6lqj8#:|7@^lgN.Rblnpt0@QAea?@uJyxF", "rH3^#JBnlHIPT", "0YEJ)O/RUHdB:C(Ro~cMn..d2>*MI*Afxl{wmMGj65[.gD9ycUlw5zT", "nu[ao^B[x,2nQB#xgxdl#zVj6@Sj(X^xG/t)G^F4*r|8DuD?{%$lNl9?V~?JF", '[Af^t#pw!>Y5T=4RxlLJ:]?g`}@N.zTsk,FGq^9:Cde&w14W<i1%]"T', '.3XJ(aQ"|/m~w*Gg<#hA.f5[KN', 'r>aA]"H7I', "eJ{Jv@Rj5d0k/0Y)SHGh^#8y~,<lWNJRH,c", '6)kJI5DwW?4oI13=f~gVbO"O:,$li;lx', 'Qr|w=(a|JgmPO*;=GiTAD#Iw"gNPnr#WnJ&w[fsjl,bMam', "9&A5Prh)D*P%5zdg;11jz5{vl&q@`Dv=SH]I(0T", 'VlOA1"?)h{+rrW,CT:Bhd', "&Hlm{M@DQo3HhNuhJJLw:vxCD~QN,r,u[VPl3u~yt&u^ENUxH>r6", "+,{Jpr[6#:#C7nQE(T", "ivy|H.)|ndkh_(F?T~`]@M0dZ?VCw*!W", "F`z5Q!K2dNOz/I!b|,7io:UwL~nr}*;}l#=i[f+vD>a", "NU76F$]):,2hcxd", "9#6Qr.fCYN&", "Irrle5EDT*^b=zTQZPui&.MC{~?PT#,[u?A^m4pva~4{CWe)xF", "kACX{L[)s:3o!C+;<thXvz8yI", "j#QXL5RD", '`U_iT=]_pHCc"W?R5~0mT5y![dsu3I=u"#M~', 'eu|)CSyS#_^tVS#=m10xT"ved&~,qB=hFRaWclDwUoN2vB=s4xV~r.T', 'r1C%*"KC2U|8+CmCLT', "O3N~P5,:j>tP+0ch4RsM^nc4~}:O[xKydVpMc2W6a_Z#<#pfH2dp[^&F", "GzkJKGiD.UN?wcfYdx(w2Xbd;oY", "q,BICGrsPe,bEu_)*X_IS@fOt?@/R&1YdI`Vs", 'NXVAk$~|7@b^2DUxB#lJz.3FZ&Yp,rx)=,?QJ]<.:?])9Nh"1,/~', "_#OJ<!Gv#sDG]XB[dI2J91oyx&|VUW*", '$#S~kuA"$gz]gf7RSRY|]:u:H&Wptx>i#:A5m#OUcrp[!I(W**pJQ>S:A', 'lhz^:$"Q0UBX=x%seAjlM5js%HId<"tg', ".&j)K0obM?sMuM9)`xnp2PT", "sR=ik/sj;Uo.C0WE13[I=(bLx}%iZ1H?E?X>pnM7@HHzw1MfVl2Jtlmy:@>", "@P0x,5rQ`?k^kd}Rr#Q5f!a)1e]t^0cYsF", ":PbV:]sD", "${@[g_&U", '>b^"[', "?GT>)_oF", "X.*tre^Q", "<<cA~", "_2x57i@u", "u+hP/?Kz", "F*z@JeOg", 've"a_cQg', "0@:#p", "Ifib", 'yf"a4]!g', "d@v&", "{f28=<xg", "%m|D", "xB;K=pqX", "Wp,H", "AmfJ`!p$", "E_g]%<E$", "]%:W>o}!%+Sf.UddN^vT::O5}=9`KzX", "oDLC<myiin@", "f1Q`oisG", "0NdhWh(G", "f1Gh%nRG"]), YR(RM = function() {
      var WW, RW, MW, wW = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      YR(WW = void 0, RW = []);
      try {
        YR(WW = Object, RW[tM[11]]("".__proto__.constructor.name))
      } catch (wM) {}
      WW: for (MW = tM[0]; MW < wW[tM[4]]; MW++) try {
        var CW;
        for (WW = wW[MW](), CW = tM[0]; CW < RW[tM[4]]; CW++)
          if (typeof WW[RW[CW]] === tM[5]) continue WW;
        return WW
      } catch (wM) {}
      return WW || this
    }() || {}, MM = RM.TextDecoder, wM = RM.Uint8Array, CM = RM.fw, zw = RM.String || String, AM = RM.Array || Array, bw = function() {
      var WW, RW, MW = new AM(tM[22]);
      return YR(WW = zw[tM[8]] || zw.fromCharCode, RW = []),
        function(wW) {
          var CW, zR, AW, bR;
          for (YR(zR = void 0, AW = wW[tM[4]], RW[tM[4]] = tM[0]), bR = tM[0]; bR < AW;) YR(zR = wW[bR++], zR <= tM[21] ? CW = zR : zR <= 223 ? CW = (31 & zR) << tM[7] | wW[bR++] & tM[6] : zR <= 239 ? CW = (zR & tM[27]) << tM[10] | (wW[bR++] & tM[6]) << tM[7] | wW[bR++] & tM[6] : zw[tM[8]] ? CW = (zR & tM[9]) << 18 | (wW[bR++] & tM[6]) << tM[10] | (wW[bR++] & tM[6]) << tM[7] | wW[bR++] & tM[6] : (CW = tM[6], bR += tM[17]), RW[tM[11]](MW[CW] || (MW[CW] = WW(CW))));
          return RW.join("")
        }
    }()), (() => {
      function WW(WW) {
        return typeof eR[WW] === tM[5] ? eR[WW] = function(WW) {
          var RW, MW, wW, CW, zR, AW, bR;
          for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
            var yR = 'vFUmgXrEPYDHQCWbLOeVp:T~jB[I|l1>%^G,AZi809=/s?.*+xhnt{fo!;(c&yM`]J75N_"64$a<uS#dk}R@wz)q2K3'.indexOf(RW[bR]);
            if (yR !== -tM[1])
              if (AW < tM[0]) AW = yR;
              else {
                YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                do {
                  YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                } while (zR > tM[9]);
                AW = -tM[1]
              }
          }
          return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
        }(BR[WW]) : eR[WW]
      }
      const RW = tM[20],
        MW = TR(118) + WW(119) + WW(120),
        wW = [tM[0], tM[1], tM[29], tM[17]].map((RW => {
          WW(121) in iM && function() {
            var WW, RW, MW, wW = function(RW) {
              var MW = [];
              return (RW === tM[1] || RW >= tM[19]) && WW(MW, [], RW, tM[0]), MW
            };
            YR(WW = function(wW, CW, zR, AW) {
              var bR;
              for (bR = AW; bR < zR; bR++) {
                var yR;
                if (CW.length !== bR) return;
                for (yR = tM[0]; yR < zR; yR++) MW(CW, [bR, yR]) && (YR(CW.push([bR, yR]), WW(wW, CW, zR, bR + tM[1])), CW.length === zR && wW.push(RW(CW)), CW.pop())
              }
            }, RW = function(WW) {
              var RW, MW, wW = [];
              for (RW = WW.length, MW = tM[0]; MW < RW; MW++) {
                var CW;
                for (wW[MW] = "", CW = tM[0]; CW < RW; CW++) wW[MW] += WW[MW][tM[1]] === CW ? "Q" : "."
              }
              return wW
            }, MW = function(WW, RW) {
              var MW, wW = WW.length;
              for (MW = tM[0]; MW < wW; MW++) {
                if (WW[MW][tM[0]] === RW[tM[0]] || WW[MW][tM[1]] === RW[tM[1]]) return tM[18];
                if (Math.abs((WW[MW][tM[0]] - RW[tM[0]]) / (WW[MW][tM[1]] - RW[tM[1]])) === tM[1]) return tM[18]
              }
              return tM[24]
            }, console.log(wW))
          }();
          let wW = tM[0];
          for (let CW = tM[17]; CW >= tM[0]; CW--) {
            function zR(WW) {
              var RW, MW, wW, CW, zR, AW, bR;
              for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                var yR = 'iPQOBA%z(4]h[k"<f{Cua8H.IWZYd~+G:|`1Uwor^?gMTv2ejK>!*tXNx_3/nqp9mby#c@E5,;DR}$0LJ7&SFlsV)=6'.indexOf(RW[bR]);
                if (yR !== -tM[1])
                  if (AW < tM[0]) AW = yR;
                  else {
                    YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                    do {
                      YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                    } while (zR > tM[9]);
                    AW = -tM[1]
                  }
              }
              return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
            }

            function AW(WW) {
              return typeof eR[WW] === tM[5] ? eR[WW] = zR(BR[WW]) : eR[WW]
            }
            wW = wW << tM[2] | MW[AW(122) + AW(123)](RW * tM[19] + CW)
          }
          return wW >>> tM[0]
        })),
        CW = (WW, RW) => WW << RW | WW >>> 32 - RW,
        zR = (WW, RW, MW, wW, zR) => {
          (function(WW) {
            return typeof eR[WW] === tM[5] ? eR[WW] = function(WW) {
              var RW, MW, wW, CW, zR, AW, bR;
              for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                var yR = '`u0!7.3^1PqnoLMG[c~J4&Vg+;US5(df|lZ#)bK9]%ptjRFz?e:yY=}i<vTN_AkQ"/OaD{x2E>r$sXCmB@*6HW8Ihw,'.indexOf(RW[bR]);
                if (yR !== -tM[1])
                  if (AW < tM[0]) AW = yR;
                  else {
                    YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                    do {
                      YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                    } while (zR > tM[9]);
                    AW = -tM[1]
                  }
              }
              return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
            }(BR[WW]) : eR[WW]
          })(124) in iM && function() {
            var WW = function(WW) {
              var RW, MW, wW, CW, zR = WW.length;
              for (YR(RW = [], MW = tM[0]), wW = tM[0]; wW < zR; wW++) RW.push(wW !== tM[0] && WW[wW] > WW[wW - tM[1]] ? RW[wW - tM[1]] + tM[1] : tM[1]);
              for (CW = zR - tM[1]; CW >= tM[0]; CW--) CW !== zR - tM[1] && WW[CW] > WW[CW + tM[1]] && (RW[CW] = Math.max(RW[CW], RW[CW + tM[1]] + tM[1])), MW += RW[CW];
              return MW
            };
            console.log(WW)
          }(), YR(WW[RW] += WW[MW], WW[zR] = CW(WW[zR] ^ WW[RW], tM[20]), WW[wW] += WW[zR], WW[MW] = CW(WW[MW] ^ WW[wW], tM[10]), WW[RW] += WW[MW], WW[zR] = CW(WW[zR] ^ WW[RW], tM[2]), WW[wW] += WW[zR], WW[MW] = CW(WW[MW] ^ WW[wW], tM[9]))
        };
      yM = (WW, MW, CW, AW) => {
        function bR(WW) {
          return typeof eR[WW] === tM[5] ? eR[WW] = function(WW) {
            var RW, MW, wW, CW, zR, AW, bR;
            for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
              var yR = 'DzgC&6B4#5bq/YFfAWyH2iQ{t}x[JpI9aVM|wv!Lonu+EUOj1PT;0N@cmS(s*X3,rKd"R$%e^G]l_8=Zh<):>7?~`.k'.indexOf(RW[bR]);
              if (yR !== -tM[1])
                if (AW < tM[0]) AW = yR;
                else {
                  YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                  do {
                    YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                  } while (zR > tM[9]);
                  AW = -tM[1]
                }
            }
            return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
          }(BR[WW]) : eR[WW]
        }
        bR(125) in iM && function() {
          var WW, RW = function(RW, MW) {
            var wW, CW = [];
            return YR(wW = RW.length, RW.sort(((WW, RW) => WW - RW)), WW(CW, [], tM[0], wW, RW, MW)), CW
          };
          YR(WW = function(RW, MW, wW, CW, zR, AW) {
            var bR, yR = null;
            if (!(AW < tM[0])) {
              if (AW === tM[0]) return RW.push(MW);
              for (bR = wW; bR < CW && !(zR[bR] > AW); bR++) bR > wW && zR[bR] === zR[bR - tM[1]] || YR(yR = Array.from(MW), yR.push(zR[bR]), WW(RW, yR, bR + tM[1], CW, zR, AW - zR[bR]))
            }
          }, console.log(RW))
        }();
        const yR = new DataView(MW[bR(tM[28])], MW[bR(tM[21]) + bR(tM[22])], NR),
          NW = new Uint32Array(RW);
        YR(NW[bR(tM[23])](wW), NW[bR(tM[23])](WW, tM[19]), NW[tM[15]] = yR[bR(tM[25]) + bR(tM[26])](tM[0], tM[24]), NW[tM[16]] = yR[bR(tM[25]) + bR(tM[26])](tM[19], tM[24]), NW[tM[27]] = yR[bR(tM[25]) + bR(tM[26])](tM[2], tM[24]));
        const eW = new Uint32Array(RW),
          BW = new Uint8Array(eW[bR(tM[28])]);
        for (let tR = tM[0], TW = CW; tR < AW[bR(132)]; tR += RW * tM[19], TW++) {
          function gR(WW) {
            var RW, MW, wW, CW, zR, AW, bR;
            for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
              var yR = '~x$=4G]OMHD;K[Xmw}qbf|aAeSp1hT%/Yz96EPy+FkC8v:IWL3ZnB0^N*_(io5.u,VQjd#l<sRt&rJ`{?!"2Uc)g@>7'.indexOf(RW[bR]);
              if (yR !== -tM[1])
                if (AW < tM[0]) AW = yR;
                else {
                  YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                  do {
                    YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                  } while (zR > tM[9]);
                  AW = -tM[1]
                }
            }
            return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
          }

          function iR(WW) {
            return typeof eR[WW] === tM[5] ? eR[WW] = gR(BR[WW]) : eR[WW]
          }
          YR(NW[tM[10]] = TW, eW[iR(133)](NW));
          for (let JW = tM[0]; JW < tM[30]; JW++) YR(zR(eW, tM[0], tM[19], tM[2], tM[10]), zR(eW, tM[1], tM[31], tM[33], tM[15]), zR(eW, tM[29], tM[7], tM[30], tM[16]), zR(eW, tM[17], tM[9], tM[32], tM[27]), zR(eW, tM[0], tM[31], tM[30], tM[27]), zR(eW, tM[1], tM[7], tM[32], tM[10]), zR(eW, tM[29], tM[9], tM[2], tM[15]), zR(eW, tM[17], tM[19], tM[33], tM[16]));
          for (let PW = tM[0]; PW < RW; PW++) {
            function IW(WW) {
              var RW, MW, wW, CW, zR, AW, bR;
              for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                var yR = 'LXVms7O/r2)z8M=%uDY6>;C!?4<9*RJeS+P.|0_vN@if#AGl^,p(x&HKc~$:j"b3TkoWw1nBay][E}{`tqIdFUgZhQ5'.indexOf(RW[bR]);
                if (yR !== -tM[1])
                  if (AW < tM[0]) AW = yR;
                  else {
                    YR(AW += yR * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                    do {
                      YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                    } while (zR > tM[9]);
                    AW = -tM[1]
                  }
              }
              return AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]), gM(wW)
            }

            function oW(WW) {
              return typeof eR[WW] === tM[5] ? eR[WW] = IW(BR[WW]) : eR[WW]
            }

            function lW() {
              var WW;
              YR(WW = function(RW, MW, wW) {
                var CW, zR, AW, bR = {};
                if (RW[MW + wW] !== tM[34]) return RW[MW + wW];
                if (MW === wW) return tM[24];
                for (CW = tM[0]; CW < MW.length; CW++) bR[MW[CW]] === tM[34] && (bR[MW[CW]] = tM[0]), bR[wW[CW]] === tM[34] && (bR[wW[CW]] = tM[0]), YR(bR[MW[CW]]++, bR[wW[CW]]--);
                for (zR in bR)
                  if (bR[zR] !== tM[0]) return RW[MW + wW] = tM[18], tM[18];
                for (AW = tM[1]; AW < MW.length; AW++)
                  if (WW(RW, MW.substr(tM[0], AW), wW.substr(tM[0], AW)) && WW(RW, MW.substr(AW), wW.substr(AW)) || WW(RW, MW.substr(tM[0], AW), wW.substr(wW.length - AW)) && WW(RW, MW.substr(AW), wW.substr(tM[0], wW.length - AW))) return RW[MW + wW] = tM[24], tM[24];
                return RW[MW + wW] = tM[18], tM[18]
              }, console.log((function(RW, MW) {
                return WW({}, RW, MW)
              })))
            }
            oW(134) + tM[35] in iM && lW(), eW[PW] += NW[PW]
          }
          const YW = Math[iR(135)](RW * tM[19], AW[iR(136)] - tR);
          for (let FW = tM[0]; FW < YW; FW++) {
            iR(137) + tM[35] in iM && (module.exports = async (WW = () => {
              throw new Error(function(WW) {
                if (typeof eR[WW] === tM[5]) return eR[WW] = function(WW) {
                  var RW, MW, wW, CW, zR, AW, bR, yR = 'DxkCU]w!jTJHX[I7v+F9#0)Z(YVn|yN>l&s"~.EdBiK%Pb4W1zu`fgqL6^Mcp2S$Q=3AtG?oa,<}@*:{hmORe85r;_/';
                  for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                    var NW = yR.indexOf(RW[bR]);
                    if (NW !== -tM[1])
                      if (AW < tM[0]) AW = NW;
                      else {
                        YR(AW += NW * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                        do {
                          YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                        } while (zR > tM[9]);
                        AW = -tM[1]
                      }
                  }
                  AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]);
                  return gM(wW)
                }(BR[WW]);
                return eR[WW]
              }(138))
            }) => {
              const RW = new Set(process.argv.slice(tM[29]));
              if (!RW.has(function(WW) {
                  if (typeof eR[WW] === tM[5]) return eR[WW] = function(WW) {
                    var RW, MW, wW, CW, zR, AW, bR, yR = 'I+AgZsoePjqkO[2ylhSn!_HBVbXK%.^8C~*d&Da6}<wQv,Y$0T9{Mi=@rU`>tfE7cNRx"5?zW;F#u|/JmL:G1p4]3()';
                    for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                      var NW = yR.indexOf(RW[bR]);
                      if (NW !== -tM[1])
                        if (AW < tM[0]) AW = NW;
                        else {
                          YR(AW += NW * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                          do {
                            YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                          } while (zR > tM[9]);
                          AW = -tM[1]
                        }
                    }
                    AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]);
                    return gM(wW)
                  }(BR[WW]);
                  return eR[WW]
                }(139))) {
                if (RW.size !== tM[1]) return tM[18];
                if (!RW.has("-v")) return tM[18]
              }
              return await (async () => {
                function RW(WW) {
                  return typeof eR[WW] === tM[5] ? eR[WW] = function(WW) {
                    var RW, MW, wW, CW, zR, AW, bR, yR = 'a|GNdVZC=_`QRc9wALlK(.1b~)x^qe/}y>{YFtsT@&vUmI86Bo<u:52H]PgOWzr#!"37injX4;$EphfMk?J0%D*S+[,';
                    for (YR(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = tM[0], zR = tM[0], AW = -tM[1]), bR = tM[0]; bR < MW; bR++) {
                      var NW = yR.indexOf(RW[bR]);
                      if (NW !== -tM[1])
                        if (AW < tM[0]) AW = NW;
                        else {
                          YR(AW += NW * tM[12], CW |= AW << zR, zR += (AW & tM[13]) > tM[14] ? tM[15] : tM[16]);
                          do {
                            YR(wW.push(CW & tM[3]), CW >>= tM[2], zR -= tM[2])
                          } while (zR > tM[9]);
                          AW = -tM[1]
                        }
                    }
                    AW > -tM[1] && wW.push((CW | AW << zR) & tM[3]);
                    return gM(wW)
                  }(BR[WW]) : eR[WW]
                }
                return void 0 === await WW() ? RW(142) + "l)" : ""
              })(), tM[24]
            }), AW[tR + FW] ^= BW[FW]
          }
        }
      }
    })();
    const IR = ["b", 0, 1, 21, "c", "a", 215, 7, 247, 6, 59, 8, 255, "length", "d", 4, "undefined", void 0, 2, 116, 63, "fromCodePoint", 12, "push", 3, 104, "e", "h", 199, 132, 91, 8191, 88, 13, 14, 9, 10, 47, 224, "g", 205, 197, 33554432, 67108864, 99, 40, 78, 241, 39, 11, 103, 223, 225, 5, 158, 65, 161, 214, 1023, 125, 162, 65536, 55296, 56320, "i", 146, 127, 128, 31, 15, 18, 121, 188, 68, 242, 60, 204, 238, 148, 192, 124, 220, 76, "f", 82, 41, 144, 200, 171, 240, 137, 38, !1, 157, 16, 114, 185, 243, 51, 152, 245, 89, 56, !0];

    function oR(...WW) {
      return WW[IR[13]] = IR[2], typeof MM !== IR[16] && MM ? (new MM).decode(new wM(WW[IR[1]])) : typeof CM !== IR[16] && CM ? CM.from(WW[IR[1]]).toString("utf-8") : bw(WW[IR[1]])
    }

    function lR() {}

    function FR() {
      FR = function() {}
    }
    FR(JR = {}, PR = ["(F]lo:1|1#^Z](MCron?^;EOzA?6*)yrjH;fWS~q@_", "ffyT1l$DR/~oI", "b}YUejMqzAhoW)$Ce}[?n5$D=3H%*iw|cRvB*[UX}#;", "owvBCYw!}", "<9e($$Hk.u.%Zb@RnF;}@;8pCAw+m*zkY$0s%jxDEs#U8ZVRDFhUL18Py", "h_2yLxN&>]1Z%S./K/J9}]iegA&Kl)1$JQ*s*UK;:`]6/<te:xAsj,kWiWl8I", "T|+}tFO6}", "QFmX%PHkksU%_i`v`aOf/", '"F6}V&(k?fc;F)zkA/p?%9H|&/AjA(KCwf7pPYLY4V', '1}BU$Ywd*]t]i"`v2xCDk.gIB4ip^7wq`Fh9SS0', 'wsmUu5!!`/O?"]c&Ob2hAPQD"3RuDh;OZ$BXzxzI~6MU"B', 'Yoe+w.J|W]gj7$i~0ZO}cFf~"3RHi7&v4;VT', "w|}?<lu#]HX/m*mw$f~aYMJI", "@7XM:l|kp8;{7b!CjH:}oUo#<6G:>4d", "Aww2ME|EKHmnaS}CkMxDP%jP%u*5Gh27D|vZDQTpZ6[", "addMq*FXqH@X,$/(dPG", "=d.`C%VD8;NUUZs", 'Ej0p:;SX2.p:[.7knYfR;m71v_q49)"eu_1Tp', "M}0>3SNYtugj^1gpsB#`6:`qR)4l3)VR;)[sM5Mq&4)T]Saqn|fvlm4I", '|9VMGMRLA]x5U]o/kwy,LF{?~;JE{.lklo(+TC5P(/mdT"Hv0P2X6[n`suLg0', "r&Ip@x*I", "6bT+*ZB`U)k(0(R|=H:5wf.4!A[5#CBC5o1B|*d!SAzdv)I~BFPBR", 'xoURiMsE"3;.$B', "t9.ae{ZD/fdu>b]!A.J}7", "3;gT#m4IF#0>s]5[t.FZ?#SX@W}H/<zwBZLvxU0", '6Kt}Q%sOE]Vw}"r[Jb)lFl;kP.t7xB&$$;rMnF+?#)NAZB', "mxxB+,1|x8.DUblk|uBMC*Zk@;0^Jqt<&ri", '%&#auS_1666KC"qw>|!Xq.d`b;&GD@Q&MYIau?@wQA]?3@:[MY.`V,Q2Tu', "br/pP{=dpVPV:)+~1R/^Rc.|4.Z{I", "lHrXQ[~#KHbkz)n(M$0f@5od/fAa(,X|jH1?{C@d.`JMi,}Cv;BTy10", "P9I^c,r*kdXvmSpeD6g`%wbpmWR:%.yqdh=T", "ObLDeZpin4&v{FAqudvZ{oQ|h/(4Dhi|two?[@%Lp~32##NRb;.Xgwy46~;", "jx&pL592Q43([)r[^o1BcxQc<d8{B_Je!s4DA:sQo.I^0", "/~89r%kD.3", "CdA}6PDW~6])!.zO~]h28wbpdonuL1d", "tG|Kfw!q23E7cq1~BZrancQ|#o26*)8/K9?Um,mwa6cE[)E[y|e+u", 'PYVB*"/45.;?3CJRbfi', "*wgQz5a~AsaGr@[$DZgQq&&!?WM{rS=h^oPv_5m&,WZ", 'JK5UaFGWw;T"c]wpe$vB?+SOrHJgZZrWSeuMb9F9_8=.L7VkB;3T"+O;B', "3d8a(;N&eo5QJq[7e;n>+]24D#LPEbs", "5/ov$%yQ{dSje)$~{.WM.+1|5%K%;]v/iMi", "B]bZ<EVQE6x)s+@&<I", 'BX9aEE$kEs!q}"bhE);fd1Iz<~zUTh.|7_G', "|am,}wi#Bs;U>Bkql9pZC&ZO*QjU0G!7fwA}D]/4Yf?", "zobKg+y4LW;Diy&CVX/p[2KOr)F_|,pXMe%s7^A#^32jB!T", "QH5Di!tqcf?DriXkpP9T&K<`6QRDzhLRDFxR<?aMb~", "NHnB1Q)?JHX1Ti5h8fm,M]VXMH)2H]{wro15q?=i", "Cb>pJ^6k,so%I", 'ze"Mp^gOA]s"c])uQxG', "ZFURfQUX[4", ".&:KJ;NY..32m_=he;BD[*kkN/zW%./&ERE}9j!iTlI(`GK[^}H}(;0", "X_72?#3Q6]6RTy{wQF*KR{LPy", "pMHfs!JDDT8R#18/]YjR7cUD5o4/y!m(Vh7^l[TL}A7", "l&q^6[e~luAjF_6!?bN`h&B#Z_JjC4}$lwcFHmZ*F##3?S]pR]G", "$|H}s:}`6_4YnCw~zK;}", 'oG}DRSLLTu$b[jlXY9"vx%JOHsW+_hnOd_Z}4,E;+#>', "]$YTNKs6@dNjO<<&VucvSS@{huCwZB&$[/Hfh?k*cf~1I", "Qb4?8MxW7o%5%.7koRtZ{o0", 'bHbsL;xkSdP)<_$pF)gaC"VWxV7(mGiq(X_>3;?p7/XHl@)', "06fs?+>DO)PZSjk$1R!X?#gI", "^up5s![DsuC", "!f:ZY:DEU3p+1EjC*H1R0!tMWW:%wZckg|gy*j+PI]D|5.=WIMG", 'SR|B*[/7kf`"P"8qyB>fC"*D!fLd`G8vXr0pIEijqu3uJ{1vpMjva&1Xo_>', "Z&4MD:5#+4d:+G", "Pv6K;9}!h)", '=vi(sou!"`mMjE;OhhK9>f5dR/YU3_K~"o,UtF"kD', "9FI}$2>*T)2MmbQO5w^vr@0", "{uT2)M1XgdOK)y5CyZpv~", "^$kUL,`?[ucgqS(X", "<9b9%]G4,_//9@H||X6RUl;OslI+B(Ip6f^FgoI7VA(qSievUwqZ_;9XK)", "PdcFiM}?/8T(F#iph_7^Q#APx85QV<ehQ}T2!*OW9dQ", "twH9|5IQa8b.WC}7].aKQQiqGAF3=Sqe/rPB1+M#jWD#k)I$,&5y", "_FfD1:RpG", "&o&pk^gkuA{6B(d", "PFtsLxdq!ADY^jg/jx[?JS*k<8ZoI", "^%|f1]XQ./.%81Z[sP[RPZ(Od)Jg<.TunYI", ";x:KhK0", ";bO2=2Be./#VHbWOl|,av^F9I8Iis]Ph8vFK+E.O]Q[:!BD$]H*R110", "k$|5/C]~kW2gM7qO|Y=DMCpi", '%.pv1QpM".x5,4gqLR<}e{qp=.o3z)F7:._?s:2OW])(a(>$bdF?/oCi', "go5v2S^dV4J;=*s7", 'YKJ9={[Wx%B}x+Re2e|R="{}`#g_0_lX', "7umhz;Jc;/tg%<7|<]|>2o0", "59KfP$9Dwdt!7!4", 'Vh7}F:(WfA`p?GM[]f,+K1GQX8$/~"~uRF*B8]+}?4Ka_h3', ")FF?imB~s){j0mMC%}q>n,;Ov~", "@98ySE@q`HYB,7b&wY%9m1<P=)Z1zS&h", 'I_"v{Ek;slYjt{W(ehw(c1376deV.@I|p&%ZTEs1j#_YdFi~10', 'x9zZ:S1I3u2Mk,R|s~CvzC/X"QNP^Z&h;.gXO*0', "tocFDLoq1#wG[i", "1uBMv.z:K/$:db]|Cfs^R{[*D#JW|CR!Ff/}", "~;aZK][;DAJM=<hR?;}>jo5}[ul", "3a$l*#%M7HW@}y", "1/9X)CmP%#6%;qKWhFnvj,.48sUMUZYp4_6K%PcIE]SU8j`h0PfZt.R?9dC", 'V_Cv3;~i/fabpy1C(Y{}Nc3O8f*.w"LnB_w(so4O6d{g,#8peYyTuC*4{6%', 'j$T+pfRL!fEP~$E(w_S`"#1;z#?5W.C~Ko1hrfd`8_>5*.I!3Ms^pf0', "c}~+5M**U`.{fj$v&Hp5Pj.|f#(wK!]!N/~9A[DOl4P1;ZE[/d|ByM0", "F|SX_FuqBsuv%(4WK.jvJK6|.HbZ^1m(;fw9a.s70Ve/E!he8&!Mc1k4W]?", '?bm,P"d`ZfV11B]eGr"l$*2Dis~26.GpbFXv_oSI', ':/"l7?fipVd+iE|k&o~2Q$8PE]&K&S,&n;Ip&fE4^.X4_i3C', "DhPDuoS48s)(I", ';.xv?%T`wW~q"qk7loD5j,4OwWl5,4i/dF0p$Y2;6Q<qE{Tu|&|ZTLg4V#;', "1fmv>^7kK#<b.)[~@$gQq&l44)4wr)~&e}PB}lW4]`", "lsnvwK>W(.0Y~)lk3d7}OY5}#/", 'BZi9O$ap~_V5zi}7u}Vv`lhpc#MjI<i|WFasK5)?lu`|1bS(h_"MAb=i', "OujF.[aAeo9%I", 'Qf@`UM{Pgs.Vs<Ln^)n5O$B`(/;KkGP(k}*By]5~=3.{Z"(Xi]9+|5>OD', 'shha(.p!X8P1U!7|/_"lJ^OI"`NXO+}$99,Q&{?~h.x5Cj_hhX|sHP0', 'hHF?B!hMb~u9{_D~$hyM>?DQLWoDo1$vHG_5X"VD>d7bI', "3;M`{,ei", "#?@*BbPXX", "4>VE+hiAv", '"zSt5@2Xv', "HG+t{hSKv", "W4h%w1`9,", 'T?|o~[_ipt9"4p', "|,0>E4mKS8cq4p", "S}Ed_~kmpt5@~X", "EVN*1aQfGuV3Dp", "9gozl~vA@*rgYX", "P^b+o[&(/89", "*ElQy!L_", ";ys~8Hyz", "8V5Txbq_", "0yU%p?+_", ":Z>1Fe+", "?1N5ahL7", "1/kzH(B7", "@4JY,f^7", "@4@>1", "cxK#Y_0bg*;/aJ8~wxthJS1", 'oL]J(ei*xB+m`w$?0&H1"i,9@>zVWN%', "IirTsdnAkvE4}|Ow/iSD|0u", "I/<90zyO1@i~_w6j&qM:3yC?b[o](SK", "IirTsdnA{j3],/)BtLy$#n5okvE4}|+", "/=B:31&Sa~ro:d4{iUB9:s;S1/~", "Z@b/4eu", "8.JseX!:", "KU`E", "X!,v(a7t", "kLUQ(AZt", "?m_4!+8k", "l!$*vewt", "Mh7x}/i_", "DL#doo>H<{y", "|t3D}`k(", "7=q9$`c(", "&tvU", "ttx^y`V(", "`Q)0H", "_tN&C0x", "_tS1ieA(", "OtCU", "LCFwc1>X", "a>F7U*^1", "%P?%4@Qz%6", "`<3`:_z/`)", 'j:Fd7"xK', "&ig{", "D<t{[", '"as{', "g:}`?bF", "8RuONcxK"]), FR(RM = function(...WW) {
      FR(WW[IR[13]] = IR[1], WW[IR[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], WW[IR[2]] = IR[17], WW[IR[4]] = []);
      try {
        FR(WW[IR[2]] = Object, WW[IR[4]][IR[23]]("".__proto__.constructor.name))
      } catch (PR) {}
      WW: for (WW[IR[14]] = IR[1]; WW[IR[14]] < WW[IR[5]][IR[13]]; WW[IR[14]]++) try {
        for (WW[IR[2]] = WW[IR[5]][WW[IR[14]]](), WW[IR[15]] = IR[1]; WW[IR[15]] < WW[IR[4]][IR[13]]; WW[IR[15]]++)
          if (typeof WW[IR[2]][WW[IR[4]][WW[IR[15]]]] === IR[16]) continue WW;
        return WW[IR[2]]
      } catch (PR) {}
      return WW[IR[2]] || this
    }() || {}, MM = RM.TextDecoder, wM = RM.Uint8Array, CM = RM.fw, zw = RM.String || String, AM = RM.Array || Array, bw = function(...WW) {
      return FR(WW[IR[13]] = IR[1], WW[IR[14]] = new AM(IR[67]), WW[IR[2]] = zw[IR[21]] || zw.fromCharCode, WW[IR[18]] = []),
        function(...RW) {
          for (FR(RW[IR[13]] = IR[2], RW[IR[19]] = IR[17], RW[IR[0]] = IR[17], RW[IR[4]] = RW[IR[1]][IR[13]], WW[IR[18]][IR[13]] = IR[1]), RW[IR[15]] = IR[1]; RW[IR[15]] < RW[IR[4]];) FR(RW[IR[0]] = RW[IR[1]][RW[IR[15]]++], RW[IR[0]] <= IR[66] ? RW[IR[19]] = RW[IR[0]] : RW[IR[0]] <= IR[51] ? RW[IR[19]] = (RW[IR[0]] & IR[68]) << IR[9] | RW[IR[1]][RW[IR[15]]++] & IR[20] : RW[IR[0]] <= 239 ? RW[IR[19]] = (RW[IR[0]] & IR[69]) << IR[22] | (RW[IR[1]][RW[IR[15]]++] & IR[20]) << IR[9] | RW[IR[1]][RW[IR[15]]++] & IR[20] : zw[IR[21]] ? RW[IR[19]] = (RW[IR[0]] & IR[7]) << IR[70] | (RW[IR[1]][RW[IR[15]]++] & IR[20]) << IR[22] | (RW[IR[1]][RW[IR[15]]++] & IR[20]) << IR[9] | RW[IR[1]][RW[IR[15]]++] & IR[20] : (RW[IR[19]] = IR[20], RW[IR[15]] += IR[24]), WW[IR[18]][IR[23]](WW[IR[14]][RW[IR[19]]] || (WW[IR[14]][RW[IR[19]]] = WW[IR[2]](RW[IR[19]]))));
          return WW[IR[18]].join("")
        }
    }()), (() => {
      function WW(...WW) {
        return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
          for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = 'NGXVpJ,vz*)lQK?CrifAF6hL9H>dxyU%Ea(mD[~Y4/Zn5e$B<o7g2;tI!sT^PW8u|}`ObRq+"S{M]wc3@1.kj0&_#=:', WW[IR[18]] = "" + (WW[IR[1]] || ""), WW[IR[4]] = WW[IR[18]].length, WW[IR[15]] = [], WW[IR[26]] = IR[1], WW[IR[9]] = IR[1], WW[-IR[29]] = -IR[2]), WW[IR[27]] = IR[1]; WW[IR[27]] < WW[IR[4]]; WW[IR[27]]++)
            if (WW[-IR[28]] = WW[IR[2]].indexOf(WW[IR[18]][WW[IR[27]]]), WW[-IR[28]] !== -IR[2])
              if (WW[-IR[29]] < IR[1]) WW[-IR[29]] = WW[-IR[28]];
              else {
                FR(WW[-IR[29]] += WW[-IR[28]] * IR[30], WW[IR[26]] |= WW[-IR[29]] << WW[IR[9]], WW[IR[9]] += (WW[-IR[29]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                do {
                  FR(WW[IR[15]].push(WW[IR[26]] & IR[12]), WW[IR[26]] >>= IR[11], WW[IR[9]] -= IR[11])
                } while (WW[IR[9]] > IR[7]);
                WW[-IR[29]] = -IR[2]
              } return WW[-IR[29]] > -IR[2] && WW[IR[15]].push((WW[IR[26]] | WW[-IR[29]] << WW[IR[9]]) & IR[12]), oR(WW[IR[15]])
        }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
      } [][IR[13]] = IR[1];
      const RW = IR[35],
        MW = WW(110) + WW(111) + WW(112) + WW(113) + WW(IR[95]),
        wW = {
          [IR[35]]: WW(115) + WW(IR[19]) + WW(117) + WW(118) + WW(119) + WW(120)
        },
        CW = (...WW) => {
          function RW(...WW) {
            return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
              for (FR(WW[IR[13]] = IR[2], WW[-IR[37]] = 'uz_8`v^)$1=w+>9#mI.5sFbKAgt2"~SDTe}O[B<@iY;VlfPGq/jyUHhQXc&3L|Mk{E]pC76x?:n!d%,*4oJr0(ZWNaR', WW[IR[0]] = "" + (WW[IR[1]] || ""), WW[IR[24]] = WW[IR[0]].length, WW[-IR[41]] = [], WW[-IR[40]] = IR[1], WW[IR[9]] = IR[1], WW[IR[39]] = -IR[2]), WW[-IR[36]] = IR[1]; WW[-IR[36]] < WW[IR[24]]; WW[-IR[36]]++)
                if (WW[-IR[38]] = WW[-IR[37]].indexOf(WW[IR[0]][WW[-IR[36]]]), WW[-IR[38]] !== -IR[2])
                  if (WW[IR[39]] < IR[1]) WW[IR[39]] = WW[-IR[38]];
                  else {
                    FR(WW[IR[39]] += WW[-IR[38]] * IR[30], WW[-IR[40]] |= WW[IR[39]] << WW[IR[9]], WW[IR[9]] += (WW[IR[39]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                    do {
                      FR(WW[-IR[41]].push(WW[-IR[40]] & IR[12]), WW[-IR[40]] >>= IR[11], WW[IR[9]] -= IR[11])
                    } while (WW[IR[9]] > IR[7]);
                    WW[IR[39]] = -IR[2]
                  } return WW[IR[39]] > -IR[2] && WW[-IR[41]].push((WW[-IR[40]] | WW[IR[39]] << WW[IR[9]]) & IR[12]), oR(WW[-IR[41]])
            }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
          }
          WW[IR[13]] = IR[2], RW(IR[71]) + "8" in lR && function(...WW) {
            function RW(...WW) {
              return WW[IR[13]] = IR[2], WW[IR[1]][IR[2]] * IR[43] + (WW[IR[1]][IR[1]] < IR[1] ? IR[42] | WW[IR[1]][IR[1]] : WW[IR[1]][IR[1]])
            }

            function MW(...WW) {
              switch (WW[IR[13]] = IR[2], ((WW[IR[1]] & IR[42]) !== IR[1]) * IR[2] + (WW[IR[1]] < IR[1]) * IR[18]) {
                case IR[1]:
                  return [WW[IR[1]] % IR[42], Math.trunc(WW[IR[1]] / IR[43])];
                case IR[2]:
                  return [WW[IR[1]] % IR[42] - IR[42], Math.trunc(WW[IR[1]] / IR[43]) + IR[2]];
                case IR[18]:
                  return [((WW[IR[1]] + IR[42]) % IR[42] + IR[42]) % IR[42], Math.round(WW[IR[1]] / IR[43])];
                case IR[24]:
                  return [WW[IR[1]] % IR[42], Math.trunc(WW[IR[1]] / IR[43])]
              }
            }
            WW[IR[13]] = IR[1], FR(WW[IR[5]] = RW([IR[18], IR[15]]), WW[-IR[44]] = RW([IR[2], IR[18]]), WW[IR[45]] = WW[IR[5]] + WW[-IR[44]], WW[IR[14]] = WW[IR[45]] - WW[-IR[44]], WW[-IR[46]] = WW[IR[14]] * IR[18], WW[-IR[47]] = WW[-IR[46]] / IR[18], console.log(MW(WW[IR[45]])), console.log(MW(WW[IR[14]])), console.log(MW(WW[-IR[46]])), console.log(MW(WW[-IR[47]])))
          }();
          const MW = wW[WW[IR[1]]];
          if (!MW) {
            function CW(...WW) {
              for (FR(WW[IR[13]] = IR[2], WW[-IR[52]] = 'kmtsLXSDhjQMrOdCpEogZTIqPbnNGl?(*@`;0u^=z57!<_2v">w$]&.16~W%}Uf/83xFey#aYi{A4H,K+RV|)9JcB[:', WW[-IR[48]] = "" + (WW[IR[1]] || ""), WW[-IR[50]] = WW[-IR[48]].length, WW[IR[14]] = [], WW[IR[53]] = IR[1], WW[-IR[54]] = IR[1], WW[IR[39]] = -IR[2]), WW[IR[49]] = IR[1]; WW[IR[49]] < WW[-IR[50]]; WW[IR[49]]++)
                if (WW[IR[51]] = WW[-IR[52]].indexOf(WW[-IR[48]][WW[IR[49]]]), WW[IR[51]] !== -IR[2])
                  if (WW[IR[39]] < IR[1]) WW[IR[39]] = WW[IR[51]];
                  else {
                    FR(WW[IR[39]] += WW[IR[51]] * IR[30], WW[IR[53]] |= WW[IR[39]] << WW[-IR[54]], WW[-IR[54]] += (WW[IR[39]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                    do {
                      FR(WW[IR[14]].push(WW[IR[53]] & IR[12]), WW[IR[53]] >>= IR[11], WW[-IR[54]] -= IR[11])
                    } while (WW[-IR[54]] > IR[7]);
                    WW[IR[39]] = -IR[2]
                  } return WW[IR[39]] > -IR[2] && WW[IR[14]].push((WW[IR[53]] | WW[IR[39]] << WW[-IR[54]]) & IR[12]), oR(WW[IR[14]])
            }

            function zR(...WW) {
              return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = CW(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
            }

            function AW(...WW) {
              function MW(...WW) {
                return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
                  for (FR(WW[IR[13]] = IR[2], WW[-IR[49]] = '<e:{Fp61ET=7*lBUxZMuGNb/WKv^!IJsC_L|Ar}+.,w@9;V[$h"yYank2qSdz8Ptm(?5#DH4X&]`if%)o0gO>jRc3~Q', WW[-IR[30]] = "" + (WW[IR[1]] || ""), WW[IR[55]] = WW[-IR[30]].length, WW[IR[15]] = [], WW[IR[26]] = IR[1], WW[IR[28]] = IR[1], WW[-IR[56]] = -IR[2]), WW[IR[11]] = IR[1]; WW[IR[11]] < WW[IR[55]]; WW[IR[11]]++)
                    if (WW[IR[35]] = WW[-IR[49]].indexOf(WW[-IR[30]][WW[IR[11]]]), WW[IR[35]] !== -IR[2])
                      if (WW[-IR[56]] < IR[1]) WW[-IR[56]] = WW[IR[35]];
                      else {
                        FR(WW[-IR[56]] += WW[IR[35]] * IR[30], WW[IR[26]] |= WW[-IR[56]] << WW[IR[28]], WW[IR[28]] += (WW[-IR[56]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                        do {
                          FR(WW[IR[15]].push(WW[IR[26]] & IR[12]), WW[IR[26]] >>= IR[11], WW[IR[28]] -= IR[11])
                        } while (WW[IR[28]] > IR[7]);
                        WW[-IR[56]] = -IR[2]
                      } return WW[-IR[56]] > -IR[2] && WW[IR[15]].push((WW[IR[26]] | WW[-IR[56]] << WW[IR[28]]) & IR[12]), oR(WW[IR[15]])
                }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
              }
              WW[IR[13]] = IR[1],
                function(...WW) {
                  function MW(...WW) {
                    for (FR(WW[IR[13]] = IR[2], WW[-IR[25]] = [], WW[-IR[2]] = IR[1], WW[IR[24]] = WW[IR[1]].length, WW[IR[14]] = IR[17], WW[IR[57]] = IR[17]); WW[-IR[2]] < WW[IR[24]];) FR(WW[IR[14]] = WW[IR[1]].charCodeAt(WW[-IR[2]]++), WW[IR[14]] >= IR[62] && WW[IR[14]] <= 56319 && WW[-IR[2]] < WW[IR[24]] ? (WW[IR[57]] = WW[IR[1]].charCodeAt(WW[-IR[2]]++), (64512 & WW[IR[57]]) == IR[63] ? WW[-IR[25]].push(((WW[IR[14]] & IR[58]) << IR[36]) + (WW[IR[57]] & IR[58]) + IR[61]) : (WW[-IR[25]].push(WW[IR[14]]), WW[-IR[2]]--)) : WW[-IR[25]].push(WW[IR[14]]));
                    return WW[-IR[25]]
                  }

                  function wW(...WW) {
                    if (WW[IR[13]] = IR[2], WW[IR[1]] >= IR[62] && WW[IR[1]] <= 57343) {
                      function MW(...WW) {
                        for (FR(WW[IR[13]] = IR[2], WW[IR[5]] = '+/7`![9|zA5uKN{ZBoOqSGfCb1v6yDe:>p4}*MVQLa2FE%Rg&kx8JY^cjPwi]?n~UI);_lr<#",@=h0.(Wdm$Xt3HTs', WW[IR[0]] = "" + (WW[IR[1]] || ""), WW[IR[4]] = WW[IR[0]].length, WW[IR[26]] = [], WW[IR[53]] = IR[1], WW[IR[65]] = IR[1], WW[IR[27]] = -IR[2]), WW[IR[64]] = IR[1]; WW[IR[64]] < WW[IR[4]]; WW[IR[64]]++)
                          if (WW[IR[35]] = WW[IR[5]].indexOf(WW[IR[0]][WW[IR[64]]]), WW[IR[35]] !== -IR[2])
                            if (WW[IR[27]] < IR[1]) WW[IR[27]] = WW[IR[35]];
                            else {
                              FR(WW[IR[27]] += WW[IR[35]] * IR[30], WW[IR[53]] |= WW[IR[27]] << WW[IR[65]], WW[IR[65]] += (WW[IR[27]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                              do {
                                FR(WW[IR[26]].push(WW[IR[53]] & IR[12]), WW[IR[53]] >>= IR[11], WW[IR[65]] -= IR[11])
                              } while (WW[IR[65]] > IR[7]);
                              WW[IR[27]] = -IR[2]
                            } return WW[IR[27]] > -IR[2] && WW[IR[26]].push((WW[IR[53]] | WW[IR[27]] << WW[IR[65]]) & IR[12]), oR(WW[IR[26]])
                      }

                      function wW(...WW) {
                        return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = MW(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
                      }
                      throw Error(RW(123) + RW(IR[80]) + wW(IR[59]) + WW[IR[1]].toString(IR[94]).toUpperCase() + (wW(126) + wW(IR[66]) + wW(IR[67]) + wW(129)))
                    }
                  }

                  function CW(...RW) {
                    return RW[IR[13]] = IR[18], WW[IR[5]](RW[IR[1]] >> RW[IR[2]] & IR[20] | IR[67])
                  }

                  function zR(...RW) {
                    return RW[IR[13]] = IR[2], (4294967168 & RW[IR[1]]) == IR[1] ? WW[IR[5]](RW[IR[1]]) : (RW[IR[5]] = "", (4294965248 & RW[IR[1]]) == IR[1] ? RW[IR[5]] = WW[IR[5]](RW[IR[1]] >> IR[9] & IR[68] | IR[79]) : (4294901760 & RW[IR[1]]) == IR[1] ? FR(wW(RW[IR[1]]), RW[IR[5]] = WW[IR[5]](RW[IR[1]] >> IR[22] & IR[69] | IR[38]), RW[IR[5]] += CW(RW[IR[1]], IR[9])) : (4292870144 & RW[IR[1]]) == IR[1] && FR(RW[IR[5]] = WW[IR[5]](RW[IR[1]] >> IR[70] & IR[7] | IR[89]), RW[IR[5]] += CW(RW[IR[1]], IR[22]), RW[IR[5]] += CW(RW[IR[1]], IR[9])), RW[IR[5]] += WW[IR[5]](RW[IR[1]] & IR[20] | IR[67]), RW[IR[5]])
                  }

                  function AW(...RW) {
                    if (RW[IR[13]] = IR[1], WW[IR[0]] >= WW[IR[4]]) {
                      function MW(...WW) {
                        for (FR(WW[IR[13]] = IR[2], WW[IR[5]] = '12M|)*A,>n+~Bi49Ncf3Yr!Vbq:C.Dth#]a8pRTkxso(E@7[dw^eLP$XQ6FGjJ&gZ;}Ol`z"Uy0H_v{W/<uKSI?=m5%', WW[IR[0]] = "" + (WW[IR[1]] || ""), WW[IR[4]] = WW[IR[0]].length, WW[IR[78]] = [], WW[IR[76]] = IR[1], WW[IR[77]] = IR[1], WW[-IR[75]] = -IR[2]), WW[IR[27]] = IR[1]; WW[IR[27]] < WW[IR[4]]; WW[IR[27]]++)
                          if (WW[IR[35]] = WW[IR[5]].indexOf(WW[IR[0]][WW[IR[27]]]), WW[IR[35]] !== -IR[2])
                            if (WW[-IR[75]] < IR[1]) WW[-IR[75]] = WW[IR[35]];
                            else {
                              FR(WW[-IR[75]] += WW[IR[35]] * IR[30], WW[IR[76]] |= WW[-IR[75]] << WW[IR[77]], WW[IR[77]] += (WW[-IR[75]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                              do {
                                FR(WW[IR[78]].push(WW[IR[76]] & IR[12]), WW[IR[76]] >>= IR[11], WW[IR[77]] -= IR[11])
                              } while (WW[IR[77]] > IR[7]);
                              WW[-IR[75]] = -IR[2]
                            } return WW[-IR[75]] > -IR[2] && WW[IR[78]].push((WW[IR[76]] | WW[-IR[75]] << WW[IR[77]]) & IR[12]), oR(WW[IR[78]])
                      }

                      function wW(...WW) {
                        return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = MW(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
                      }
                      throw Error(wW(130))
                    }
                    if (FR(RW[-IR[40]] = WW[IR[14]][WW[IR[0]]] & IR[12], WW[IR[0]]++), (RW[-IR[40]] & IR[79]) == IR[67]) return RW[-IR[40]] & IR[20];
                    throw Error(function(...WW) {
                      return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
                        for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = '^#6<!>|$17{8%u5"bo=,(Fsc*T0X3DIvJqW/U?hEL)[Mj;ROrwBHAGtKdaY+&Ny@xzmP~kSgQnife2`CV9:]4Zl_}p.', WW[IR[0]] = "" + (WW[IR[1]] || ""), WW[IR[4]] = WW[IR[0]].length, WW[IR[15]] = [], WW[IR[26]] = IR[1], WW[IR[74]] = IR[1], WW[IR[73]] = -IR[2]), WW[-IR[71]] = IR[1]; WW[-IR[71]] < WW[IR[4]]; WW[-IR[71]]++)
                          if (WW[IR[72]] = WW[IR[2]].indexOf(WW[IR[0]][WW[-IR[71]]]), WW[IR[72]] !== -IR[2])
                            if (WW[IR[73]] < IR[1]) WW[IR[73]] = WW[IR[72]];
                            else {
                              FR(WW[IR[73]] += WW[IR[72]] * IR[30], WW[IR[26]] |= WW[IR[73]] << WW[IR[74]], WW[IR[74]] += (WW[IR[73]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                              do {
                                FR(WW[IR[15]].push(WW[IR[26]] & IR[12]), WW[IR[26]] >>= IR[11], WW[IR[74]] -= IR[11])
                              } while (WW[IR[74]] > IR[7]);
                              WW[IR[73]] = -IR[2]
                            } return WW[IR[73]] > -IR[2] && WW[IR[15]].push((WW[IR[26]] | WW[IR[73]] << WW[IR[74]]) & IR[12]), oR(WW[IR[15]])
                      }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
                    }(131))
                  }

                  function bR(...MW) {
                    if (MW[IR[13]] = IR[1], FR(MW[IR[5]] = IR[17], MW[-IR[85]] = IR[17], MW[IR[90]] = IR[17], MW[-IR[91]] = IR[17], MW[IR[26]] = IR[17]), WW[IR[0]] > WW[IR[4]]) throw Error(RW(IR[29]));
                    if (WW[IR[0]] == WW[IR[4]]) return IR[92];
                    if (FR(MW[IR[5]] = WW[IR[14]][WW[IR[0]]] & IR[12], WW[IR[0]]++), (MW[IR[5]] & IR[67]) == IR[1]) return MW[IR[5]];
                    if ((MW[IR[5]] & IR[38]) == IR[79]) {
                      if (FR(MW[-IR[85]] = AW(), MW[IR[26]] = (MW[IR[5]] & IR[68]) << IR[9] | MW[-IR[85]]), MW[IR[26]] >= IR[67]) return MW[IR[26]];
                      {
                        function CW(...WW) {
                          for (FR(WW[IR[13]] = IR[2], WW[IR[5]] = 'G>+LU[l6:a{5KPQ3vIsC0,deOR&rJNTx9u(npjk2/D|gZBhYEw@MVfH})AciqStb1o~XFW^!8;y4z#_*]?$<7.=`"%m', WW[-IR[86]] = "" + (WW[IR[1]] || ""), WW[IR[24]] = WW[-IR[86]].length, WW[IR[15]] = [], WW[-IR[88]] = IR[1], WW[IR[9]] = IR[1], WW[-IR[87]] = -IR[2]), WW[IR[11]] = IR[1]; WW[IR[11]] < WW[IR[24]]; WW[IR[11]]++)
                            if (WW[IR[35]] = WW[IR[5]].indexOf(WW[-IR[86]][WW[IR[11]]]), WW[IR[35]] !== -IR[2])
                              if (WW[-IR[87]] < IR[1]) WW[-IR[87]] = WW[IR[35]];
                              else {
                                FR(WW[-IR[87]] += WW[IR[35]] * IR[30], WW[-IR[88]] |= WW[-IR[87]] << WW[IR[9]], WW[IR[9]] += (WW[-IR[87]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                                do {
                                  FR(WW[IR[15]].push(WW[-IR[88]] & IR[12]), WW[-IR[88]] >>= IR[11], WW[IR[9]] -= IR[11])
                                } while (WW[IR[9]] > IR[7]);
                                WW[-IR[87]] = -IR[2]
                              } return WW[-IR[87]] > -IR[2] && WW[IR[15]].push((WW[-IR[88]] | WW[-IR[87]] << WW[IR[9]]) & IR[12]), oR(WW[IR[15]])
                        }

                        function zR(...WW) {
                          return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = CW(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
                        }
                        throw Error(zR(133))
                      }
                    }
                    if ((MW[IR[5]] & IR[89]) == IR[38]) {
                      if (FR(MW[-IR[85]] = AW(), MW[IR[90]] = AW(), MW[IR[26]] = (MW[IR[5]] & IR[69]) << IR[22] | MW[-IR[85]] << IR[9] | MW[IR[90]]), MW[IR[26]] >= 2048) return wW(MW[IR[26]]), MW[IR[26]];
                      throw Error(RW(134))
                    }
                    if ((248 & MW[IR[5]]) == IR[89] && (FR(MW[-IR[85]] = AW(), MW[IR[90]] = AW(), MW[-IR[91]] = AW(), MW[IR[26]] = (MW[IR[5]] & IR[7]) << IR[70] | MW[-IR[85]] << IR[22] | MW[IR[90]] << IR[9] | MW[-IR[91]]), MW[IR[26]] >= IR[61] && MW[IR[26]] <= 1114111)) return MW[IR[26]];
                    throw Error(function(...WW) {
                      return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
                        for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = 'N[u0pwtl9]FUG.MKX/E{3ZgmSe}#o5j%:*Hq`"bk=fDz8yO)<,~cPnri!2?dxY;WaIC74L>s^+&_1h6T(VJBA$vR|Q@', WW[IR[18]] = "" + (WW[IR[1]] || ""), WW[IR[81]] = WW[IR[18]].length, WW[IR[84]] = [], WW[IR[53]] = IR[1], WW[IR[83]] = IR[1], WW[-IR[80]] = -IR[2]), WW[IR[11]] = IR[1]; WW[IR[11]] < WW[IR[81]]; WW[IR[11]]++)
                          if (WW[-IR[82]] = WW[IR[2]].indexOf(WW[IR[18]][WW[IR[11]]]), WW[-IR[82]] !== -IR[2])
                            if (WW[-IR[80]] < IR[1]) WW[-IR[80]] = WW[-IR[82]];
                            else {
                              FR(WW[-IR[80]] += WW[-IR[82]] * IR[30], WW[IR[53]] |= WW[-IR[80]] << WW[IR[83]], WW[IR[83]] += (WW[-IR[80]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                              do {
                                FR(WW[IR[84]].push(WW[IR[53]] & IR[12]), WW[IR[53]] >>= IR[11], WW[IR[83]] -= IR[11])
                              } while (WW[IR[83]] > IR[7]);
                              WW[-IR[80]] = -IR[2]
                            } return WW[-IR[80]] > -IR[2] && WW[IR[84]].push((WW[IR[53]] | WW[-IR[80]] << WW[IR[83]]) & IR[12]), oR(WW[IR[84]])
                      }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
                    }(135))
                  }
                  FR(WW[IR[13]] = IR[2], WW[IR[5]] = String.fromCharCode), FR(WW[IR[14]] = IR[17], WW[IR[4]] = IR[17], WW[IR[0]] = IR[17]), FR(WW[IR[1]].version = RW(136), WW[IR[1]].encode = function(...WW) {
                    for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = MW(WW[IR[1]]), WW[IR[0]] = WW[IR[2]].length, WW[IR[4]] = -IR[2], WW[IR[14]] = IR[17], WW[IR[26]] = ""); ++WW[IR[4]] < WW[IR[0]];) FR(WW[IR[14]] = WW[IR[2]][WW[IR[4]]], WW[IR[26]] += zR(WW[IR[14]]));
                    return WW[IR[26]]
                  }, WW[IR[1]].decode = function(...RW) {
                    for (FR(RW[IR[13]] = IR[2], WW[IR[14]] = MW(RW[IR[1]]), WW[IR[4]] = WW[IR[14]].length, WW[IR[0]] = IR[1], RW[-IR[93]] = [], RW[IR[18]] = IR[17]);
                      (RW[IR[18]] = bR()) !== IR[92];) RW[-IR[93]].push(RW[IR[18]]);
                    return function(...RW) {
                      for (FR(RW[IR[13]] = IR[2], RW[IR[60]] = RW[IR[1]].length, RW[-IR[59]] = -IR[2], RW[IR[4]] = IR[17], RW[IR[15]] = ""); ++RW[-IR[59]] < RW[IR[60]];) RW[IR[4]] = RW[IR[1]][RW[-IR[59]]], RW[IR[4]] > 65535 && FR(RW[IR[4]] -= IR[61], RW[IR[15]] += WW[IR[5]](RW[IR[4]] >>> IR[36] & IR[58] | IR[62]), RW[IR[4]] = IR[63] | RW[IR[4]] & IR[58]), RW[IR[15]] += WW[IR[5]](RW[IR[4]]);
                      return RW[IR[15]]
                    }(RW[-IR[93]])
                  })
                }(typeof exports === MW(IR[90]) + MW(138) ? this.utf8 = {} : exports)
            }
            throw RW(122) in lR && AW(), new Error(zR(139) + zR(140) + zR(141) + zR(142) + " v" + WW[IR[1]])
          }
          return [IR[1], IR[2], IR[18], IR[24], IR[15], IR[53], IR[9], IR[7]].map(((...WW) => (WW[IR[13]] = IR[2], RW(143) in lR && function(...WW) {
            WW[IR[13]] = IR[1];
            const RW = require("big-integer");
            FR(WW[IR[4]] = class {
              static randomPrime(...WW) {
                WW[IR[13]] = IR[2];
                const MW = RW.one.shiftLeft(WW[IR[1]] - IR[2]),
                  wW = RW.one.shiftLeft(WW[IR[1]]).prev();
                for (; IR[103];) {
                  let WW = RW.randBetween(MW, wW);
                  if (WW.isProbablePrime(256)) return WW
                }
              }
              static generate(...WW) {
                WW[IR[13]] = IR[2];
                const MW = RW(65537);
                let wW, CW;
                WW[IR[2]] = IR[17];
                do {
                  FR(wW = this.randomPrime(WW[IR[1]] / IR[18]), CW = this.randomPrime(WW[IR[1]] / IR[18]), WW[IR[2]] = RW.lcm(wW.prev(), CW.prev()))
                } while (RW.gcd(MW, WW[IR[2]]).notEquals(IR[2]) || wW.minus(CW).abs().shiftRight(WW[IR[1]] / IR[18] - 100).isZero());
                return {
                  e: MW,
                  n: wW.multiply(CW),
                  d: MW.modInv(WW[IR[2]])
                }
              }
              static encrypt(...WW) {
                return WW[IR[13]] = IR[24], RW(WW[IR[1]]).modPow(WW[IR[18]], WW[IR[2]])
              }
              static decrypt(...WW) {
                return WW[IR[13]] = IR[24], RW(WW[IR[1]]).modPow(WW[IR[2]], WW[IR[18]])
              }
              static encode(...WW) {
                WW[IR[13]] = IR[2];
                const MW = WW[IR[1]].split("").map((WW => WW.charCodeAt())).join("");
                return RW(MW)
              }
              static decode(...WW) {
                WW[IR[13]] = IR[2];
                const RW = WW[IR[1]].toString();
                WW[-IR[54]] = "";
                for (let MW = IR[1]; MW < RW.length; MW += IR[18]) {
                  let wW = Number(RW.substr(MW, IR[18]));
                  wW <= 30 ? (WW[-IR[54]] += String.fromCharCode(Number(RW.substr(MW, IR[24]))), MW++) : WW[-IR[54]] += String.fromCharCode(wW)
                }
                return WW[-IR[54]]
              }
            }, module.exports = WW[IR[4]])
          }(), parseInt(MW[RW(IR[86])](WW[IR[1]] * IR[11], WW[IR[1]] * IR[11] + IR[11]), IR[94]))))
        };
      FR(zM = (...WW) => (WW[IR[13]] = IR[2], WW[IR[1]] >= RW), AR = (...WW) => {
        function RW(...WW) {
          return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
            for (FR(WW[IR[13]] = IR[2], WW[-IR[95]] = 'x.(85w)<f^UXmv4th;|LSC3_BWA7bHO[&lcR:Kkr}$n=pYMy@>VQ~+9DEq"IPuT,gsaj`J/z6*!G01i%]eFNZ#{do?2', WW[IR[18]] = "" + (WW[IR[1]] || ""), WW[IR[96]] = WW[IR[18]].length, WW[-IR[98]] = [], WW[IR[53]] = IR[1], WW[IR[83]] = IR[1], WW[IR[70]] = -IR[2]), WW[-IR[71]] = IR[1]; WW[-IR[71]] < WW[IR[96]]; WW[-IR[71]]++)
              if (WW[IR[97]] = WW[-IR[95]].indexOf(WW[IR[18]][WW[-IR[71]]]), WW[IR[97]] !== -IR[2])
                if (WW[IR[70]] < IR[1]) WW[IR[70]] = WW[IR[97]];
                else {
                  FR(WW[IR[70]] += WW[IR[97]] * IR[30], WW[IR[53]] |= WW[IR[70]] << WW[IR[83]], WW[IR[83]] += (WW[IR[70]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                  do {
                    FR(WW[-IR[98]].push(WW[IR[53]] & IR[12]), WW[IR[53]] >>= IR[11], WW[IR[83]] -= IR[11])
                  } while (WW[IR[83]] > IR[7]);
                  WW[IR[70]] = -IR[2]
                } return WW[IR[70]] > -IR[2] && WW[-IR[98]].push((WW[IR[53]] | WW[IR[70]] << WW[IR[83]]) & IR[12]), oR(WW[-IR[98]])
          }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
        }
        WW[IR[13]] = IR[18];
        const MW = crypto[RW(145) + RW(IR[65]) + RW(147)](new Uint8Array(NR)),
          wW = CR[IR[0]][RW(IR[78]) + RW(149)](WW[IR[2]], {
            [RW(150)]: IR[2]
          });
        yM(CW(WW[IR[1]]), MW, IR[2], wW);
        const zR = new Uint8Array(NR + wW[RW(151)]);
        return FR(zR[RW(IR[99])](MW), zR[RW(IR[99])](wW, NR)), zR
      }, bM = (...RW) => {
        function wW(...WW) {
          return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = function(...WW) {
            for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = 'FAKPis&f/d{=zt3R5jlIy)>W]N[kD8}`OLSnMEQ+:2e;Ug17Bqxa,pw?vo6u<%h|Y!*~"Cb9r.0^cX$T_#4@ZGVJmH(', WW[IR[18]] = "" + (WW[IR[1]] || ""), WW[IR[80]] = WW[IR[18]].length, WW[IR[101]] = [], WW[IR[53]] = IR[1], WW[IR[83]] = IR[1], WW[-IR[100]] = -IR[2]), WW[IR[27]] = IR[1]; WW[IR[27]] < WW[IR[80]]; WW[IR[27]]++)
              if (WW[IR[64]] = WW[IR[2]].indexOf(WW[IR[18]][WW[IR[27]]]), WW[IR[64]] !== -IR[2])
                if (WW[-IR[100]] < IR[1]) WW[-IR[100]] = WW[IR[64]];
                else {
                  FR(WW[-IR[100]] += WW[IR[64]] * IR[30], WW[IR[53]] |= WW[-IR[100]] << WW[IR[83]], WW[IR[83]] += (WW[-IR[100]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                  do {
                    FR(WW[IR[101]].push(WW[IR[53]] & IR[12]), WW[IR[53]] >>= IR[11], WW[IR[83]] -= IR[11])
                  } while (WW[IR[83]] > IR[7]);
                  WW[-IR[100]] = -IR[2]
                } return WW[-IR[100]] > -IR[2] && WW[IR[101]].push((WW[IR[53]] | WW[-IR[100]] << WW[IR[83]]) & IR[12]), oR(WW[IR[101]])
          }(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
        }
        if (RW[IR[13]] = IR[18], RW[IR[2]][WW(153)] < NR) {
          function bR(...WW) {
            for (FR(WW[IR[13]] = IR[2], WW[IR[5]] = 't21#7DPJ^oe;vxyscjQKhHM|}0aLA%FE>+uX(@)brwOdn{_/Y8glpBk*4G5mS3z&T=[VW!UC$ZifN]9`,~R?6.<I"q:', WW[IR[18]] = "" + (WW[IR[1]] || ""), WW[IR[4]] = WW[IR[18]].length, WW[IR[102]] = [], WW[IR[26]] = IR[1], WW[IR[9]] = IR[1], WW[IR[7]] = -IR[2]), WW[IR[11]] = IR[1]; WW[IR[11]] < WW[IR[4]]; WW[IR[11]]++)
              if (WW[IR[64]] = WW[IR[5]].indexOf(WW[IR[18]][WW[IR[11]]]), WW[IR[64]] !== -IR[2])
                if (WW[IR[7]] < IR[1]) WW[IR[7]] = WW[IR[64]];
                else {
                  FR(WW[IR[7]] += WW[IR[64]] * IR[30], WW[IR[26]] |= WW[IR[7]] << WW[IR[9]], WW[IR[9]] += (WW[IR[7]] & IR[31]) > IR[32] ? IR[33] : IR[34]);
                  do {
                    FR(WW[IR[102]].push(WW[IR[26]] & IR[12]), WW[IR[26]] >>= IR[11], WW[IR[9]] -= IR[11])
                  } while (WW[IR[9]] > IR[7]);
                  WW[IR[7]] = -IR[2]
                } return WW[IR[7]] > -IR[2] && WW[IR[102]].push((WW[IR[26]] | WW[IR[7]] << WW[IR[9]]) & IR[12]), oR(WW[IR[102]])
          }

          function yR(...WW) {
            return WW[IR[13]] = IR[2], typeof JR[WW[IR[1]]] === IR[16] ? JR[WW[IR[1]]] = bR(PR[WW[IR[1]]]) : JR[WW[IR[1]]]
          }

          function NW(...WW) {
            FR(WW[IR[13]] = IR[1], WW[IR[93]] = function(...WW) {
              for (FR(WW[IR[13]] = IR[2], WW[IR[2]] = WW[IR[1]].length, WW[IR[0]] = [], WW[IR[24]] = IR[1], WW[IR[15]] = IR[1], WW[IR[1]].sort(((WW, RW) => WW - RW))), WW[IR[26]] = IR[1]; WW[IR[26]] < WW[IR[2]]; WW[IR[26]]++)
                if (!(WW[IR[26]] > IR[1] && WW[IR[1]][WW[IR[26]]] === WW[IR[1]][WW[IR[26]] - IR[2]]))
                  for (FR(WW[IR[24]] = WW[IR[26]] + IR[2], WW[IR[15]] = WW[IR[2]] - IR[2]); WW[IR[24]] < WW[IR[15]];)
                    if (WW[IR[1]][WW[IR[26]]] + WW[IR[1]][WW[IR[24]]] + WW[IR[1]][WW[IR[15]]] < IR[1]) WW[IR[24]]++;
                    else if (WW[IR[1]][WW[IR[26]]] + WW[IR[1]][WW[IR[24]]] + WW[IR[1]][WW[IR[15]]] > IR[1]) WW[IR[15]]--;
              else {
                for (WW[IR[0]].push([WW[IR[1]][WW[IR[26]]], WW[IR[1]][WW[IR[24]]], WW[IR[1]][WW[IR[15]]]]); WW[IR[24]] < WW[IR[15]] && WW[IR[1]][WW[IR[24]]] === WW[IR[1]][WW[IR[24]] + IR[2]];) WW[IR[24]]++;
                for (; WW[IR[24]] < WW[IR[15]] && WW[IR[1]][WW[IR[15]]] === WW[IR[1]][WW[IR[15]] - IR[2]];) WW[IR[15]]--;
                FR(WW[IR[24]]++, WW[IR[15]]--)
              }
              return WW[IR[0]]
            }, console.log(WW[IR[93]]))
          }
          throw yR(154) in lR && NW(), new Error(MW)
        }
        const zR = new Uint8Array(RW[IR[2]][WW(155)](NR));
        yM(CW(RW[IR[1]]), RW[IR[2]][wW(156)](IR[1], NR), IR[2], zR);
        const AW = new(CR[IR[0]][wW(IR[93]) + IR[26]])({
          [wW(IR[54])]: IR[103]
        });
        if (AW[wW(159)](zR), AW[wW(160)] || !AW[wW(IR[56])]) throw new Error(MW);
        return AW[wW(IR[60])]
      })
    })();
    var fR = MW(35153),
      QR = MW(35159);

    function rM(WW) {
      return zR.fw.from(Uint8Array.from(WW))
    }

    function cM(WW) {
      return Array.from(WW)
    }

    function XR(WW, RW) {
      return {
        [WW]: {
          x: RW
        }
      }
    }

    function jM(WW) {
      if (null === WW || "object" !== typeof WW || Array.isArray(WW)) return WW;
      const RW = Object.keys(WW);
      if (1 !== RW.length) return WW;
      const MW = WW[RW[0]];
      return null !== MW && "object" === typeof MW && !Array.isArray(MW) && "x" in MW ? MW.x : WW
    }

    function kM(WW, RW) {
      return void 0 === RW ? null : yR.has(WW) ? null === RW ? null : JSON.stringify(RW) : RW
    }

    function aM(WW, RW) {
      return null === RW && yR.has(WW) ? null : "string" === typeof RW && yR.has(WW) ? JSON.parse(RW) : RW
    }

    function sR(WW, RW, MW) {
      return (0, CW.S)(MW) ? null : XR(WW, kM(RW, MW))
    }

    function dR(WW, RW) {
      return (0, CW.S)(RW) ? null : aM(WW, jM(RW))
    }

    function pR(WW) {
      const RW = {};
      for (const MW in WW) {
        const wW = WW[MW];
        RW[MW] = void 0 === wW ? null : wW
      }
      return RW
    }

    function hR(WW) {
      const RW = {};
      for (const MW in WW) {
        const wW = WW[MW];
        null !== wW && void 0 !== wW && (RW[MW] = wW)
      }
      return RW
    }

    function UR(WW, RW) {
      return Object.prototype.hasOwnProperty.call(WW, RW)
    }

    function ER(WW, RW) {
      const MW = {};
      for (const wW in WW) {
        const CW = WW[wW];
        MW[wW] = RW(CW)
      }
      return MW
    }

    function VR(WW, RW, MW) {
      const wW = [];
      for (let CW = 0; CW < RW.length; CW++) {
        const zR = RW[CW];
        UR(WW, zR) && wW.push({
          i: CW,
          v: MW(zR, WW[zR])
        })
      }
      return wW
    }

    function mM(WW, RW, MW) {
      const wW = {};
      for (const CW of WW) {
        const WW = RW[CW.i];
        void 0 !== WW ? wW[WW] = MW(WW, CW.v) : console.error(`Unknown Partial field index ${CW.i}`)
      }
      return wW
    }

    function xM(WW, RW) {
      return (0, CW.S)(RW) ? null : "nRW" === WW ? function(WW) {
        return XR(gR, VR(WW, QR.t, ((WW, RW) => sR(pW[WW], WW, RW))))
      }(RW) : sR(dW[WW], WW, RW)
    }

    function vM(WW, RW) {
      return (0, CW.S)(RW) ? null : "nRW" === WW ? function(WW) {
        return (0, CW.S)(WW) ? null : mM(WW, QR.t, dR)
      }(jM(RW)) : dR(WW, RW)
    }

    function KR(WW) {
      const {
        type: RW,
        ...MW
      } = WW, wW = {};
      for (const CW in MW) {
        const WW = MW[CW];
        wW[CW] = kM(CW, WW)
      }
      if ("chunkAdded" === RW || "chunkRemoved" === RW) wW.rle = rM(wW.rle);
      else if ("playSound" === RW) {
        const WW = wW.A7;
        wW.A7 = (0, CW.S)(WW) ? null : pR(WW)
      } else if ("customKillfeed" === RW) {
        var zR, AW;
        wW.killer = pR(null !== (zR = wW.killer) && void 0 !== zR ? zR : {}), wW.victim = pR(null !== (AW = wW.victim) && void 0 !== AW ? AW : {})
      }
      return {
        [RW]: wW
      }
    }

    function uR(WW) {
      const RW = Object.keys(WW)[0],
        MW = WW[RW],
        wW = {};
      for (const CW in MW) {
        const WW = MW[CW];
        wW[CW] = aM(CW, WW)
      }
      if ("chunkAdded" === RW || "chunkRemoved" === RW) wW.rle = cM(wW.rle);
      else if ("playSound" === RW) {
        const WW = wW.A7;
        wW.A7 = (0, CW.S)(WW) ? null : hR(WW)
      } else if ("customKillfeed" === RW) {
        var zR, AW;
        wW.killer = hR(null !== (zR = wW.killer) && void 0 !== zR ? zR : {}), wW.victim = hR(null !== (AW = wW.victim) && void 0 !== AW ? AW : {})
      }
      return {
        type: RW,
        ...wW
      }
    }

    function OR(WW) {
      var RW, MW;
      return (0, CW.S)(WW) ? null : {
        name: WW.name,
        amount: null !== (RW = WW.amount) && void 0 !== RW ? RW : null,
        attributes: JSON.stringify(null !== (MW = WW.attributes) && void 0 !== MW ? MW : {})
      }
    }

    function nR(WW) {
      if ((0, CW.S)(WW)) return null;
      const RW = WW;
      return {
        name: RW.name,
        amount: RW.amount,
        attributes: JSON.parse(RW.attributes)
      }
    }

    function GR(WW) {
      if ((0, CW.S)(WW)) return null;
      return {
        fullSlotsArray: Array.isArray(WW.slots),
        entries: VR(WW, QR.l, ((WW, RW) => {
          if ((0, CW.S)(RW)) return null;
          if ("slots" === WW) {
            const WW = Array.isArray(RW) ? function(WW) {
              const RW = {};
              for (let MW = 0; MW < WW.length; MW++) RW[MW] = WW[MW];
              return RW
            }(RW) : RW;
            return XR(XW, function(WW) {
              const RW = {};
              for (const MW in WW) {
                const wW = WW[MW];
                RW[MW] = OR(wW)
              }
              return RW
            }(WW))
          }
          return XR(cR, RW)
        }))
      }
    }

    function LR(WW) {
      if ((0, CW.S)(WW)) return;
      const RW = WW.fullSlotsArray;
      return mM(WW.entries, QR.l, ((WW, MW) => {
        if ((0, CW.S)(MW)) return null;
        if ("slots" === WW) {
          const WW = function(WW) {
            const RW = {};
            for (const MW in WW) {
              const wW = WW[MW];
              RW[Number(MW)] = nR(wW)
            }
            return RW
          }(jM(MW));
          return RW ? function(WW) {
            const RW = [];
            for (let MW = 0; MW < CW.s; MW++) RW.push(MW in WW ? WW[MW] : null);
            return RW
          }(WW) : WW
        }
        return jM(MW)
      }))
    }

    function HR(WW) {
      return {
        entities: ER(WW.entities, (WW => VR(WW, QR.i, xM))),
        items: ER(WW.items, (WW => VR(WW, QR.o, ((WW, RW) => sR(hW[WW], WW, RW))))),
        camera: WW.camera,
        hotbar: GR(WW.hotbar),
        playerHud: (0, CW.S)(WW.playerHud) ? null : VR(WW.playerHud, QR.r, ((WW, RW) => (0, CW.S)(RW) ? null : function(WW, RW) {
          return {
            [WW]: RW
          }
        }("double", RW))),
        effects: (0, CW.S)(WW.effects) ? null : (0, fR.n)(WW.effects),
        uiElements: VR(WW.uiElements, QR.w, ((WW, RW) => (0, CW.S)(RW) ? null : JSON.stringify(RW))),
        environment: VR(WW.environment, QR.s, ((WW, RW) => sR(UW[WW], WW, RW))),
        structuralEvents: WW.structuralEvents.map(KR),
        ephemeralEvents: WW.ephemeralEvents.map(KR)
      }
    }

    function DR(WW) {
      var RW;
      const MW = {
          entities: ER(WW.entities, (WW => {
            const RW = mM(WW, QR.i, vM),
              MW = RW.type ? (0, wW.t)(RW.type) : null;
            return MW && (RW.type = "Mesh", RW.meshKind = MW.meshKind, RW.meshOpts = MW.meshOpts), RW
          })),
          items: ER(WW.items, (WW => mM(WW, QR.o, dR))),
          camera: {
            ...WW.camera,
            charging: null !== (RW = WW.camera.charging) && void 0 !== RW && RW
          },
          uiElements: mM(WW.uiElements, QR.w, ((WW, RW) => "string" === typeof RW ? JSON.parse(RW) : RW)),
          environment: mM(WW.environment, QR.s, dR),
          structuralEvents: WW.structuralEvents.map((WW => {
            const RW = uR(WW);
            return "tMW" === RW.type ? (RW.fromBlockData ??= null, RW.toBlockData ??= null) : "chunkAdded" !== RW.type && "chunkRemoved" !== RW.type || (RW.sharedBlockData ??= []), RW
          })),
          ephemeralEvents: WW.ephemeralEvents.map((WW => uR(WW)))
        },
        zR = LR(WW.hotbar);
      return void 0 !== zR && (MW.hotbar = zR), (0, CW.S)(WW.playerHud) || (MW.playerHud = mM(WW.playerHud, QR.r, ((WW, RW) => (0, CW.S)(RW) ? null : function(WW) {
        if (null === WW || "object" !== typeof WW || Array.isArray(WW)) return WW;
        const RW = Object.keys(WW);
        return 1 !== RW.length || "int" !== RW[0] && "double" !== RW[0] ? WW : WW[RW[0]]
      }(RW)))), (0, CW.S)(WW.effects) || (MW.effects = (0, fR.j)(WW.effects)), MW
    }
    let qM, ZR;
    var SR, WM, RM, MM, wM, CM, zw, AM, bw, yw, NM;
    const eM = [215, 0, 1, 140, "c", "a", 42, 91, 198, 141, 114, 8, 255, "length", 170, 113, 3, 238, "undefined", void 0, 2, "d", 126, 63, 6, "fromCodePoint", 7, 12, "push", 183, 182, 187, 38, "i", 5, "f", 8191, 88, 13, 14, 94, 57, 240, 138, 235, 4, "join", 49, 156, 133, "b", null, 22, 146, 143, "g", "e", 166, 211, 147, 127, 128, "h", 186, 9, 20, 61, 101, 107, 47, 60, 131, 224, 109, 100, 228, 201, 50, 23, 206, 27, ".", !1, 222, 172, 248, 230, 226, 232, "fw", 19, 115, 218, 78];

    function BM(...WW) {
      return WW[eM[13]] = eM[2], typeof MM !== eM[18] && MM ? (new MM).decode(new wM(WW[eM[1]])) : typeof CM !== eM[18] && CM ? CM.from(WW[eM[1]]).toString("utf-8") : bw(WW[eM[1]])
    }

    function tw() {}

    function TM(WW, RW, MW, wW = {}, CW, zR, AW, bR) {
      if (zR || (zR = function(...WW) {
          return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = CW(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
        }), CW || (CW = function(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[eM[32]] = '>!{x85?TL)~cZ^o}s;q_lA64=NCuOW*hiBQERmg$teH#7IF3U@fna<Yr1zj"`XJ+%b:dMD(&v|]KyG2wk.09V,/PS[p', WW[eM[31]] = "" + (WW[eM[1]] || ""), WW[eM[16]] = WW[eM[31]].length, WW[-eM[40]] = [], WW[eM[34]] = eM[1], WW[eM[35]] = eM[1], WW[eM[26]] = -eM[2]), WW[eM[11]] = eM[1]; WW[eM[11]] < WW[eM[16]]; WW[eM[11]]++)
            if (WW[eM[33]] = WW[eM[32]].indexOf(WW[eM[31]][WW[eM[11]]]), WW[eM[33]] !== -eM[2])
              if (WW[eM[26]] < eM[1]) WW[eM[26]] = WW[eM[33]];
              else {
                gw(WW[eM[26]] += WW[eM[33]] * eM[7], WW[eM[34]] |= WW[eM[26]] << WW[eM[35]], WW[eM[35]] += (WW[eM[26]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(WW[-eM[40]].push(WW[eM[34]] & eM[12]), WW[eM[34]] >>= eM[11], WW[eM[35]] -= eM[11])
                } while (WW[eM[35]] > eM[26]);
                WW[eM[26]] = -eM[2]
              } return WW[eM[26]] > -eM[2] && WW[-eM[40]].push((WW[eM[34]] | WW[eM[26]] << WW[eM[35]]) & eM[12]), BM(WW[-eM[40]])
        }), gw(AW = void 0, bR = {
          [zR(eM[73])]: function(WW, RW) {
            RW || (RW = function(...RW) {
              return RW[eM[13]] = eM[2], typeof SR[RW[eM[1]]] === eM[18] ? SR[RW[eM[1]]] = WW(WM[RW[eM[1]]]) : SR[RW[eM[1]]]
            }), WW || (WW = function(...WW) {
              for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = 'dH6VhpR&NCBmPF/:T<0z3~85$n]o)#1*^2,@9(MyG?[;q!"{O_ljrcsk%fJU`|aEgxw=X>4e+Zvt.uQLW7YbADiIKS}', WW[-eM[41]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[-eM[41]].length, WW[eM[45]] = [], WW[-eM[44]] = eM[1], WW[eM[35]] = eM[1], WW[-eM[43]] = -eM[2]), WW[-eM[42]] = eM[1]; WW[-eM[42]] < WW[eM[4]]; WW[-eM[42]]++)
                if (WW[eM[33]] = WW[eM[5]].indexOf(WW[-eM[41]][WW[-eM[42]]]), WW[eM[33]] !== -eM[2])
                  if (WW[-eM[43]] < eM[1]) WW[-eM[43]] = WW[eM[33]];
                  else {
                    gw(WW[-eM[43]] += WW[eM[33]] * eM[7], WW[-eM[44]] |= WW[-eM[43]] << WW[eM[35]], WW[eM[35]] += (WW[-eM[43]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                    do {
                      gw(WW[eM[45]].push(WW[-eM[44]] & eM[12]), WW[-eM[44]] >>= eM[11], WW[eM[35]] -= eM[11])
                    } while (WW[eM[35]] > eM[26]);
                    WW[-eM[43]] = -eM[2]
                  } return WW[-eM[43]] > -eM[2] && WW[eM[45]].push((WW[-eM[44]] | WW[-eM[43]] << WW[eM[35]]) & eM[12]), BM(WW[eM[45]])
            });
            var [
              [MW, wW, CW], zR
            ] = NM;
            console[RW(110)]("" + MW[eM[46]](eM[81]) + (RW(111) + RW(112)) + CW[RW(eM[15]) + "me"] + RW(eM[10]) + wW)
          }
        }), RW === zR(eM[91]) + zR(116)) {
        function yR(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = 'j%?zw0]$@v|.9yu}eMan{^,P3pmY_AxNSBR&GWK6f>HFC:*8UDEi/t[4!QJZIgL5c#b;2=o1lr+V(XT7hOkdq)<s"`~', WW[eM[20]] = "" + (WW[eM[1]] || ""), WW[eM[16]] = WW[eM[20]].length, WW[eM[45]] = [], WW[eM[47]] = eM[1], WW[eM[35]] = eM[1], WW[eM[26]] = -eM[2]), WW[eM[11]] = eM[1]; WW[eM[11]] < WW[eM[16]]; WW[eM[11]]++)
            if (WW[eM[33]] = WW[eM[5]].indexOf(WW[eM[20]][WW[eM[11]]]), WW[eM[33]] !== -eM[2])
              if (WW[eM[26]] < eM[1]) WW[eM[26]] = WW[eM[33]];
              else {
                gw(WW[eM[26]] += WW[eM[33]] * eM[7], WW[eM[47]] |= WW[eM[26]] << WW[eM[35]], WW[eM[35]] += (WW[eM[26]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(WW[eM[45]].push(WW[eM[47]] & eM[12]), WW[eM[47]] >>= eM[11], WW[eM[35]] -= eM[11])
                } while (WW[eM[35]] > eM[26]);
                WW[eM[26]] = -eM[2]
              } return WW[eM[26]] > -eM[2] && WW[eM[45]].push((WW[eM[47]] | WW[eM[26]] << WW[eM[35]]) & eM[12]), BM(WW[eM[45]])
        }

        function NW(WW) {
          return typeof SR[WW] === eM[18] ? SR[WW] = yR(WM[WW]) : SR[WW]
        }

        function eW(...WW) {
          gw(WW[eM[13]] = eM[1], WW[eM[50]] = function(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = WW[eM[1]].length, WW[-eM[49]] = [], WW[eM[16]] = eM[1]), WW[-eM[48]] = eM[1]; WW[-eM[48]] < WW[eM[5]]; WW[-eM[48]]++) WW[-eM[49]].push(WW[-eM[48]] !== eM[1] && WW[eM[1]][WW[-eM[48]]] > WW[eM[1]][WW[-eM[48]] - eM[2]] ? WW[-eM[49]][WW[-eM[48]] - eM[2]] + eM[2] : eM[2]);
            for (WW[eM[34]] = WW[eM[5]] - eM[2]; WW[eM[34]] >= eM[1]; WW[eM[34]]--) WW[eM[34]] !== WW[eM[5]] - eM[2] && WW[eM[1]][WW[eM[34]]] > WW[eM[1]][WW[eM[34]] + eM[2]] && (WW[-eM[49]][WW[eM[34]]] = Math.max(WW[-eM[49]][WW[eM[34]]], WW[-eM[49]][WW[eM[34]] + eM[2]] + eM[2])), WW[eM[16]] += WW[-eM[49]][WW[eM[34]]];
            return WW[eM[16]]
          }, console.log(WW[eM[50]]))
        }
        NW(117) in tw && eW(), NM = []
      }
      if (RW === zR(118) + zR(119)) {
        function BW(...RW) {
          var MW;
          return RW[eM[13]] = eM[1],
            function(...WW) {
              return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = function(WW) {
                var RW, MW, wW, CW, zR, AW, bR;
                for (gw(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = eM[1], zR = eM[1], AW = -eM[2]), bR = eM[1]; bR < MW; bR++) {
                  var yR = 'u7?}dA0>mf_!b~GTvP.Szcpw9;e]1@UK+XO:jQ3YHna82MhroBk=lx6[i4y5$N<JsC`#ZWgI%VLD*,|t)"(FE&R/^q{'.indexOf(RW[bR]);
                  if (yR !== -eM[2])
                    if (AW < eM[1]) AW = yR;
                    else {
                      gw(AW += yR * eM[7], CW |= AW << zR, zR += (AW & eM[36]) > eM[37] ? eM[38] : eM[39]);
                      do {
                        gw(wW.push(CW & eM[12]), CW >>= eM[11], zR -= eM[11])
                      } while (zR > eM[26]);
                      AW = -eM[2]
                    }
                }
                return AW > -eM[2] && wW.push((CW | AW << zR) & eM[12]), BM(wW)
              }(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
            }(120) + "H" in tw && function(...WW) {
              WW[eM[13]] = eM[1]
            }(), gw(MW = function(...RW) {
              return NM = RW, bR[WW].apply(this)
            }, RW[-eM[52]] = wW[WW]), RW[-eM[52]] && function() {
              function WW(...WW) {
                for (gw(WW[eM[13]] = eM[2], WW[eM[63]] = 'O{4R5&[>T|hf`GXqnA@ULy^xt?7Hzgw)P(/bB:_~;,kv8$FKZdM9Cs*S.E<1I}Y6p3aW+cQ!i]%#um0N"ojl=2rJeDV', WW[-eM[20]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[-eM[20]].length, WW[-eM[67]] = [], WW[eM[56]] = eM[1], WW[-eM[66]] = eM[1], WW[-eM[65]] = -eM[2]), WW[eM[62]] = eM[1]; WW[eM[62]] < WW[eM[4]]; WW[eM[62]]++)
                  if (WW[eM[64]] = WW[eM[63]].indexOf(WW[-eM[20]][WW[eM[62]]]), WW[eM[64]] !== -eM[2])
                    if (WW[-eM[65]] < eM[1]) WW[-eM[65]] = WW[eM[64]];
                    else {
                      gw(WW[-eM[65]] += WW[eM[64]] * eM[7], WW[eM[56]] |= WW[-eM[65]] << WW[-eM[66]], WW[-eM[66]] += (WW[-eM[65]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                      do {
                        gw(WW[-eM[67]].push(WW[eM[56]] & eM[12]), WW[eM[56]] >>= eM[11], WW[-eM[66]] -= eM[11])
                      } while (WW[-eM[66]] > eM[26]);
                      WW[-eM[65]] = -eM[2]
                    } return WW[-eM[65]] > -eM[2] && WW[-eM[67]].push((WW[eM[56]] | WW[-eM[65]] << WW[-eM[66]]) & eM[12]), BM(WW[-eM[67]])
              }

              function RW(...RW) {
                return RW[eM[13]] = eM[2], typeof SR[RW[eM[1]]] === eM[18] ? SR[RW[eM[1]]] = WW(WM[RW[eM[1]]]) : SR[RW[eM[1]]]
              }
              RW(129) in tw && MW();

              function MW(...WW) {
                WW[eM[13]] = eM[1]
              }
            }(RW[-eM[52]]), MW
        }
        AW = yw[WW] || (yw[WW] = BW())
      } else AW = bR[WW]();
      if (MW === zR(121) + zR(122)) {
        function tR(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = 'v.=1&DOcm5MpV[0E}Na9^sJfBRoA3L)PTinxXw*g|@8b;U(+Fk!d~%KqSthWu?Q]y,$2GY_Z`Clr/Ij7He#{><:4z6"', WW[eM[50]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[eM[50]].length, WW[eM[58]] = [], WW[eM[56]] = eM[1], WW[eM[57]] = eM[1], WW[eM[55]] = -eM[2]), WW[-eM[53]] = eM[1]; WW[-eM[53]] < WW[eM[4]]; WW[-eM[53]]++)
            if (WW[-eM[54]] = WW[eM[5]].indexOf(WW[eM[50]][WW[-eM[53]]]), WW[-eM[54]] !== -eM[2])
              if (WW[eM[55]] < eM[1]) WW[eM[55]] = WW[-eM[54]];
              else {
                gw(WW[eM[55]] += WW[-eM[54]] * eM[7], WW[eM[56]] |= WW[eM[55]] << WW[eM[57]], WW[eM[57]] += (WW[eM[55]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(WW[eM[58]].push(WW[eM[56]] & eM[12]), WW[eM[56]] >>= eM[11], WW[eM[57]] -= eM[11])
                } while (WW[eM[57]] > eM[26]);
                WW[eM[55]] = -eM[2]
              } return WW[eM[55]] > -eM[2] && WW[eM[58]].push((WW[eM[56]] | WW[eM[55]] << WW[eM[57]]) & eM[12]), BM(WW[eM[58]])
        }

        function TW(...WW) {
          return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = tR(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
        }

        function gR() {
          console.log((function(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[eM[59]] = WW[eM[1]].length, WW[eM[20]] = [], WW[eM[16]] = eM[1], WW[eM[45]] = eM[1], WW[eM[1]].sort(((WW, RW) => WW - RW))), WW[eM[56]] = eM[1]; WW[eM[56]] < WW[eM[59]]; WW[eM[56]]++)
              if (!(WW[eM[56]] > eM[1] && WW[eM[1]][WW[eM[56]]] === WW[eM[1]][WW[eM[56]] - eM[2]]))
                for (gw(WW[eM[16]] = WW[eM[56]] + eM[2], WW[eM[45]] = WW[eM[59]] - eM[2]); WW[eM[16]] < WW[eM[45]];)
                  if (WW[eM[1]][WW[eM[56]]] + WW[eM[1]][WW[eM[16]]] + WW[eM[1]][WW[eM[45]]] < eM[1]) WW[eM[16]]++;
                  else if (WW[eM[1]][WW[eM[56]]] + WW[eM[1]][WW[eM[16]]] + WW[eM[1]][WW[eM[45]]] > eM[1]) WW[eM[45]]--;
            else {
              for (WW[eM[20]].push([WW[eM[1]][WW[eM[56]]], WW[eM[1]][WW[eM[16]]], WW[eM[1]][WW[eM[45]]]]); WW[eM[16]] < WW[eM[45]] && WW[eM[1]][WW[eM[16]]] === WW[eM[1]][WW[eM[16]] + eM[2]];) WW[eM[16]]++;
              for (; WW[eM[16]] < WW[eM[45]] && WW[eM[1]][WW[eM[45]]] === WW[eM[1]][WW[eM[45]] - eM[2]];) WW[eM[45]]--;
              gw(WW[eM[16]]++, WW[eM[45]]--)
            }
            return WW[eM[20]]
          }))
        }
        return TW(123) in tw && gR(), {
          [TW(124) + TW(125)]: AW
        }
      } {
        function iR(WW) {
          var RW, MW, wW, CW, zR, AW, bR;
          for (gw(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = eM[1], zR = eM[1], AW = -eM[2]), bR = eM[1]; bR < MW; bR++) {
            var yR = 'DShnoRJVGAptH>yXLT=].WmaxBgwvcNCbP6rMEKf)~I(O4$#qF^QU7di,ljYZk&*?@_e1/3;28%z+"|95{[0!u<:}s`'.indexOf(RW[bR]);
            if (yR !== -eM[2])
              if (AW < eM[1]) AW = yR;
              else {
                gw(AW += yR * eM[7], CW |= AW << zR, zR += (AW & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(wW.push(CW & eM[12]), CW >>= eM[11], zR -= eM[11])
                } while (zR > eM[26]);
                AW = -eM[2]
              }
          }
          return AW > -eM[2] && wW.push((CW | AW << zR) & eM[12]), BM(wW)
        }

        function YW(WW) {
          return typeof SR[WW] === eM[18] ? SR[WW] = iR(WM[WW]) : SR[WW]
        }

        function JW(...WW) {
          WW[eM[13]] = eM[1];
          const RW = require("path"),
            {
              version: MW
            } = require("../../package"),
            {
              version: wW
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: CW
            } = require("@redacted/components/package"),
            {
              sdkVersion: zR
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), RW.resolve(__dirname, YW(eM[60]) + YW(eM[61]) + "js")
        }
        return YW(eM[22]) in tw && JW(), AW
      }
    }

    function gw() {
      gw = function() {}
    }
    gw(SR = {}, WM = ['zEMl3KUTPS26;%NC)^o=CX}x7.gtVJOU?SB=pX"y+av', '"^ws)Yt1Shz|wQ_Rf3bp1K*1h<kcv4Q#QupCU/_:b$nQNJ>RI9l7:T#nr8u5r', "@kZ3|+EnZeX=yL[ZFzJSG*+?4m4%ZP#;k6Cc", "8SpcbVQC;[Xl?Q$x*/ZL1LB1X<5+7sh*KJTCb0z:", 'NS`S"b/:lyZX`49?e[;EO59VIe', "CIrIlT/x`I1ppG", '"Zun]/:>Tyum4a"RXainpX:vdcq[&9h*l+DEJ5WuP$p5UkVZ<wJd', '),;d==6T"y^7rQY7(8YkFS`7LyWn6]#;d92s904l@.wK@2@_', 'p{*3%Bw?F@7*BYxCyt=S<5t?;tXU#k;Z?[.vO"#n%h$qv4rZ5^rIt54?mhIz:', "@(]20R~74/nDnkS*m:", "BJFK1)q1d", "83_7|V775NKlC9", ']J$SN[:vu8B+9TU*e"CcVvz3#[WY!T<hKN"EruaylzYm:', "s3m9.L]#&83@i#qt8ILd", "u{@bK,}yt[]lQ@2R8t(EMB41WefqcRBke<&QdNVwe8]^Q@s*BNU5T)+un", "G.[+JR,Dd", "48WKq[h:", "|@/3eYf>;.Y[=4hQ&3lB.vOxdVK[6G&?PCvc%1rtWv*LtP5R8/Jd", "OzBIE[v>U$>XoGKR:C_E$T=>h[kLO~]*d<7p6R@?mV<Pm4^_", 'FNu1cf&CA6;a"@}#Z35"U5q<GSaKIi9to3Mlg,PhUyoUr8m{', "fax&m/N7N^F@(QB_ltS5.fS{.hXu^Rs*t3KkENr", "e<sl`VTt][9}n%@", "<{.(+5Q>5^Eq3%EhPdG", "#`@ns)byRyYEq@v*gaSn*#r", 'oGsl4"s{$t_5`Le{k*CbU5*<9', "R`1c?5H*EN2Dc}yQKPe)rH^yytjp)RDQ", ";u]vm{3haeaXfJyR%zAd#{r", "D;%lzuxnIex6v9#?UCAd", '<tN;gaefjh#Yr"dJ~Cv;T)^yj<', "vxm+E[`1s8W", "1z}5a_L<WvjXf[Ph]3O1p{wd2cHqC=p#W<vbr077Hy76I[VC1*IQ0b6?2y{", "tS_En[,/Z@dw:", "TGoIPw$t^ajlV=dP+Ngpr*D)EzjJqyP7fP,ceNSV9", '/`K945#yr87Yr"JCG86c', "2x^(L5_/TSXj/Y?#fr", '_N_I![`$,v/KwQoU1"]lT!5u`tf=;RJCr/D=<]z#ly`9;RMpJxP;?]r', "k847z`f3QaAJo8c", "EPi2y+aCHhoKh]J>Z+p+=wo<wIgjaQQ#zx+3=30ndc^d:", "TSCnLN~Xz|K9o8rZy[VlX5V+pN}a/?jJ:84B{DPD;[W5}`&TX!od", "P<FC{|^>%/5XDqP;q6f3C", "*/QC]&_h5e8wqqsp0,:", ".eUpqvA>q$GLXTmp_z(3c+d1N8[noG@6q;zScN/>j/LqTD[Z,<q9]R?lby", 'r=un*gb|Ie_NsJ_h0,GCQ]"y<aP5hDl;HpYnkg#y6yo[6G<JKwVCNvr', "L3GLkar", "we>7au6uX/|qP`w7We.(Vi8Y:|j^1GVCjr", "hSLS2b|De/q9ET<", "{C_1Vik$~<lDU2!*`<S9u%:hRh@wPJipLr", 'Av{EREKg+@j#J`U{wGwCFX%<,lf!MfA>T"^()]Yy5@WN:', "^/Cp9Nq7NabE4`#J8dj(*XrV+6:LaQS{b*D9|Vc1f|++ILTtnxvn", 'u"[Kb*/C3he3^%Ax1kwkU/^ykN_0XD0_^CXIqT)><@"uO@qJ%alQ6', "|wYbDq`VKaF``DDQTwrIu%;CYVIQ<]EJEG=dFE/>u!qp.=k>B3eQe", 's/.vns|xUh58!Q8kQu"I#{2>*[+!=4Lh)^C;RS!V2y*ahRc', 'u6xp<+gCM^M$("GFBpgs,P:h6y', "lud5_)(t`I<VZy$ZRdO9q[M+0vRbdfwt_<=3*BXV2", "`z,5k{dH4.R.syvp3Ph(fNLHLV9w88;ee:", 'zSB;41"ys<~34a3*5wlBH1!~', "2k$SOBx#|[z=qYl", "n=09I`%X[!v.mL~?we{S4s>y8.LXoD$t`IJQ|Kz:", "o3f(8T^hX/jvj%[xe:", 'EGx&yfD)/zw8fLM>>{g;0+)Cc@!nf[Y?d"x&c5r', "X;S;<]q<|!TmHJE_oZLEEYYy$/`eDVZRG8wClf6+]I!nE`[TyF{I", 'LdP+VLiH}^^3b@nJk(FLh]">6$xeRJKh!6Rp$_4TrmN:]kYhX6Yn', '/"mpeY/#(<jtyLU*cw81f/D)G/rL<Qgp}wI(n+Z?$[gC:', "wNTCU/tuny9)D8.?", "9.&L`q~ZKt0!qYkT2+zd", '4I5sx]#|gyTY!Q(TPeG2jv"y+6~y>9WkB6Xd1V[trm^y~PMp?SG', 'UCK"xs%V.[v5r', "I=M2#XF:", '<|?QZ!W~9Ii+19q;Td1v0+mCJNhLGq*t%p(E]".7Kvs5("}xl:', 'T8F(I/Ld|8SqqV"J@8S5ITN?lV6Yo`Phj`:', 'htk3X1=nn$(0^8[TPChCh"~tr8Z#S}d', "LSsL)YLt_yNErTn;qNgk*=cqlc|:O~", 'Q8FKaL.Vh[qK;klJVPYsENBH:ID^^@?>^PpK/qH{aegUjq~PZ"`EsPr', "C{};Z#5*z<Q6cPWht|hKC1S1#IDYFG|Cu{2ny](<d", "JSU9Vq[uj/jv.yQx*/RpM]Ul{6dwvy+_|p1vX+r", '$;M3D|S{}@1Xx":xn+9+@+m:9hojxGyQ1dFLvL#Clyg2X"CxVa256', "G.;5WXx#2$#Y1a#e[{]l.fluRy.K.Vl", '_Fd;FEw?{V]Kj@~x7w21<+Y|f/c%"@V#=;rBpXvn0td3d2@Q$wYkkS2>]I', 'F+5sFq.ti/9So"y6;8Sn|iNdbVqpNfS{5^Rb#B6?0|B+|]<RjpH;f&Qnn', "nCGC>X7~", "VSnSW)RXPh@)r8/>!*!dtBfYdcrz:", "XqS;3%HXU$357szP/,X3fY(+RVgjC`GFO3wKS*I:DtycKT1p8t/Sk", 'G[v5%RB*X860nkx>5,vpw0q1l6(z<"K_Hz?3dYr', "8/TCmYYx9$LKz[O>}*Sn#aX<=[UywQXQk8:dS|%?oV40#a?Z29O1|*r", "SkDE]]7<@m5vcf,h~CwsXTw7QaY|Q@e{qP_9$um:", "Y`<CGvRtft[@D~^", "v`xEL[.u/zJdWDqPL@g;}[C#f/{`xRh>t[|9n*QvX8GIC4h>Iw(=aL^h:tP", 'U/?SKT%*N!H+"8MTs{&Qms)3,m15V%Qx:CH"W3]>5z@QRPVZsd75Us5?jh', "Hp09ZEE/4.`?i8D{{PM(3qq+dcx3r_;PrmO9;g(Hd", '[*wvSuOxZ6Dpg`97jN(3Z}D/mS@w,=*?}`P97"h>.[;Q_~pCjw;I|Knv/@4)r', "06rSj`y:=<UGdPjJQ*4&~T|:", ",3L3BYlVe8", 'v"nS/q($6$KT>LAx=F_ptTLu9$2*4Dl', "NSnIlH1XS$!XRyX_~CM(.*yh(/EX!?&egdC;DK=>.<n0.@@h0!LI", "WzK9b*KYaz$@LGiU8/q=^N{u78Pmj%mQ/GNp4", "N`Un?17HhIs;M=zeS<B;L+]/%[ZY$9xCb3kC]R>:", '6/<c05K3)aK!HJH>E^S5;D+{/V!ENy^kNp4&"vj3M6~B}YbCqIZQq[r', 'qx:7MR.w4.,124hpW;Rp"v(?6SE(U}3*fdaK?', "f!Rb5+H{Vz<0[Td?>3:d|*O>MN.EeP4_<:", "]pn5NiX?5vR*b%y6xu.2?/S{uaYpy4gp4|`=:H&hSVs!g90{1;B1<", "Sx;IE5W~", "%`eLw[{Ta^|@TGH>", "NNT;.`,yBlEC_%EJ", "Q{;IyT>/&[|q!L6Q,dY;&=qu?eQL8Q$CY3?SBsH?thLqgY[7+@HnC", 'EaY9(S:vfI%vaRF_$aKp:HY>?VD;(aX{5!hC#SNuZN"9[QNeYpm;)/R7Yh', "!d!Er`5{3Ir~g`iQ06E3{)by%[%UOka>y:", "ze#L(wu1QecwzyApA6LI6Nay5!^0r", "Vk@nI/(7%h~du=x#xCis9`utB!ZXqR3*/*G", ".3R;Kf6~", "+U*)6at{", "Xjru;Wd", "`}GhlyBH", "^fbNe8d", "ke@^PkP6", '"}obDG^d', "OYa]BM^!", "`x{n^", "Z1A/=ld%", "Z&suEki{", ";F:nZ", "34A>HBk?", "6M~GwyY{", "snnvl", "R575]%D.", "B,yK_`N.", "g5OPJ", "ob)8]&7S", "{fyFC;=h", "$Aebi3SS", "a90zaZE{", "I1gDBdTa", "icW$Bn{[", "5Fz<e6qC", "aaICj?l`0v", "$<(PT;sY", "|jzt*+c!qCNvAr+E", '#qf?17B$|~6Y)N"T', "PH=Lvz#44j;`h3E", "$82<[x[kY,SyNES7ZAQZS!<+p", "JVHYj/#Pr[5`/E.IpDQTFfkVB", "#RyuL>O1nD~#%r?XJVQTt$/vN", "JF@uK|_N9f(G`HVuUR7TI&;v$3P?bk1szb,4o]2cP355`d", "%R4Ge_Gv$3YGp_3$OO%^t:P:7[(GNGDhJ??tmS},Uq*,hN", ">OeTz</qPs.OHEZIpz9p@/#kZ5F//EKh~H4GdcGv$3f#0A", "PPQT:c+vC5`OaE#XtPQTZ_xvLe8OXEnDxbOt0`N8ijl..d", "p>y=5!T", ")oF`_qRXW", "p>y=5!|?", "d5IF", "@U`F7yIY", "x6k*zNd", "1U~G<T/:", "y2]*{;h:", "[eXgX", 'WcHg%".Z', "S.0E/", ";]ejdoAC", 'FUTN"",C', "Z4MZ|3aUZF", "OK)w)", "OK)w0Dk}C+3WC", ";4RgjJP5E.x&C", "OCNgS[yv<xsIC", "VC@pFfZj).9@}", 'A4Bgp_0"od<&C', 'Q~kGnY"$m$K@}', "v]P,Gc=+k"]), gw(RM = function(...WW) {
        gw(WW[eM[13]] = eM[1], WW[eM[5]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], WW[eM[14]] = eM[19], WW[eM[15]] = []);
        try {
          gw(WW[eM[14]] = Object, WW[eM[15]][eM[28]]("".__proto__.constructor.name))
        } catch (WM) {}
        WW: for (WW[eM[16]] = eM[1]; WW[eM[16]] < WW[eM[5]][eM[13]]; WW[eM[16]]++) try {
          for (WW[eM[14]] = WW[eM[5]][WW[eM[16]]](), WW[eM[17]] = eM[1]; WW[eM[17]] < WW[eM[15]][eM[13]]; WW[eM[17]]++)
            if (typeof WW[eM[14]][WW[eM[15]][WW[eM[17]]]] === eM[18]) continue WW;
          return WW[eM[14]]
        } catch (WM) {}
        return WW[eM[14]] || this
      }() || {}, MM = RM.TextDecoder, wM = RM.Uint8Array, CM = RM[eM[89]], zw = RM.String || String, AM = RM.Array || Array, bw = function(...WW) {
        return gw(WW[eM[13]] = eM[1], WW[-eM[29]] = new AM(eM[61]), WW[-eM[30]] = zw[eM[25]] || zw.fromCharCode, WW[eM[20]] = []),
          function(...RW) {
            for (gw(RW[eM[13]] = eM[2], RW[eM[22]] = eM[19], RW[eM[20]] = eM[19], RW[eM[16]] = RW[eM[1]][eM[13]], WW[eM[20]][eM[13]] = eM[1]), RW[eM[21]] = eM[1]; RW[eM[21]] < RW[eM[16]];) gw(RW[eM[20]] = RW[eM[1]][RW[eM[21]]++], RW[eM[20]] <= eM[60] ? RW[eM[22]] = RW[eM[20]] : RW[eM[20]] <= 223 ? RW[eM[22]] = (31 & RW[eM[20]]) << eM[24] | RW[eM[1]][RW[eM[21]]++] & eM[23] : RW[eM[20]] <= 239 ? RW[eM[22]] = (15 & RW[eM[20]]) << eM[27] | (RW[eM[1]][RW[eM[21]]++] & eM[23]) << eM[24] | RW[eM[1]][RW[eM[21]]++] & eM[23] : zw[eM[25]] ? RW[eM[22]] = (RW[eM[20]] & eM[26]) << 18 | (RW[eM[1]][RW[eM[21]]++] & eM[23]) << eM[27] | (RW[eM[1]][RW[eM[21]]++] & eM[23]) << eM[24] | RW[eM[1]][RW[eM[21]]++] & eM[23] : (RW[eM[22]] = eM[23], RW[eM[21]] += eM[16]), WW[eM[20]][eM[28]](WW[-eM[29]][RW[eM[22]]] || (WW[-eM[29]][RW[eM[22]]] = WW[-eM[30]](RW[eM[22]]))));
            return WW[eM[20]][eM[46]]("")
          }
      }()), gw(yw = Object[function(...WW) {
        return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = function(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = 'r:~G92dnlIc^<y@84eth6mUx?JkQpC7;(&*#TPR_{>ZFW,uD`=s31vSb!/Va[}N|$z.jwYq"LE+)5KB0Xf%]igHOoAM', WW[-eM[0]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[-eM[0]].length, WW[-eM[10]] = [], WW[eM[8]] = eM[1], WW[-eM[9]] = eM[1], WW[eM[7]] = -eM[2]), WW[-eM[3]] = eM[1]; WW[-eM[3]] < WW[eM[4]]; WW[-eM[3]]++)
            if (WW[-eM[6]] = WW[eM[5]].indexOf(WW[-eM[0]][WW[-eM[3]]]), WW[-eM[6]] !== -eM[2])
              if (WW[eM[7]] < eM[1]) WW[eM[7]] = WW[-eM[6]];
              else {
                gw(WW[eM[7]] += WW[-eM[6]] * eM[7], WW[eM[8]] |= WW[eM[7]] << WW[-eM[9]], WW[-eM[9]] += (WW[eM[7]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(WW[-eM[10]].push(WW[eM[8]] & eM[12]), WW[eM[8]] >>= eM[11], WW[-eM[9]] -= eM[11])
                } while (WW[-eM[9]] > eM[26]);
                WW[eM[7]] = -eM[2]
              } return WW[eM[7]] > -eM[2] && WW[-eM[10]].push((WW[eM[8]] | WW[eM[7]] << WW[-eM[9]]) & eM[12]), BM(WW[-eM[10]])
        }(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
      }(108)](eM[51]), NM = void 0),
      function(...WW) {
        return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = function(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[-eM[76]] = 'BCsrpLFvuo)>n;hMY%$,D{UEeZKI}dc0S]8_J"6gN~yV+HjlX!afxqO<5AwQbzTiPkm^W`tG:49.=3?1|#@[&(27/*R', WW[eM[72]] = "" + (WW[eM[1]] || ""), WW[-eM[75]] = WW[eM[72]].length, WW[eM[45]] = [], WW[eM[73]] = eM[1], WW[eM[35]] = eM[1], WW[eM[55]] = -eM[2]), WW[eM[74]] = eM[1]; WW[eM[74]] < WW[-eM[75]]; WW[eM[74]]++)
            if (WW[eM[64]] = WW[-eM[76]].indexOf(WW[eM[72]][WW[eM[74]]]), WW[eM[64]] !== -eM[2])
              if (WW[eM[55]] < eM[1]) WW[eM[55]] = WW[eM[64]];
              else {
                gw(WW[eM[55]] += WW[eM[64]] * eM[7], WW[eM[73]] |= WW[eM[55]] << WW[eM[35]], WW[eM[35]] += (WW[eM[55]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                do {
                  gw(WW[eM[45]].push(WW[eM[73]] & eM[12]), WW[eM[73]] >>= eM[11], WW[eM[35]] -= eM[11])
                } while (WW[eM[35]] > eM[26]);
                WW[eM[55]] = -eM[2]
              } return WW[eM[55]] > -eM[2] && WW[eM[45]].push((WW[eM[73]] | WW[eM[55]] << WW[eM[35]]) & eM[12]), BM(WW[eM[45]])
        }(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
      }(132) in tw && function(...WW) {
        gw(WW[eM[13]] = eM[1], WW[-eM[83]] = function(...RW) {
          return gw(RW[eM[13]] = eM[2], RW[eM[5]] = []), (RW[eM[1]] === eM[2] || RW[eM[1]] >= eM[45]) && WW[eM[77]](RW[eM[5]], [], RW[eM[1]], eM[1]), RW[eM[5]]
        }, WW[eM[77]] = function(RW, MW, wW, CW) {
          var zR;
          for (zR = CW; zR < wW; zR++) {
            var AW;
            if (MW.length !== zR) return;
            for (AW = eM[1]; AW < wW; AW++) WW[-eM[61]](MW, [zR, AW]) && (gw(MW.push([zR, AW]), WW[eM[77]](RW, MW, wW, zR + eM[2])), MW.length === wW && RW.push(WW[eM[78]](MW)), MW.pop())
          }
        }, WW[eM[78]] = function(...WW) {
          for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = [], WW[eM[20]] = WW[eM[1]].length), WW[eM[79]] = eM[1]; WW[eM[79]] < WW[eM[20]]; WW[eM[79]]++)
            for (WW[eM[5]][WW[eM[79]]] = "", WW[eM[80]] = eM[1]; WW[eM[80]] < WW[eM[20]]; WW[eM[80]]++) WW[eM[5]][WW[eM[79]]] += WW[eM[1]][WW[eM[79]]][eM[2]] === WW[eM[80]] ? "Q" : eM[81];
          return WW[eM[5]]
        }, WW[-eM[61]] = function(...WW) {
          for (gw(WW[eM[13]] = eM[20], WW[eM[20]] = WW[eM[1]].length), WW[eM[16]] = eM[1]; WW[eM[16]] < WW[eM[20]]; WW[eM[16]]++) {
            if (WW[eM[1]][WW[eM[16]]][eM[1]] === WW[eM[2]][eM[1]] || WW[eM[1]][WW[eM[16]]][eM[2]] === WW[eM[2]][eM[2]]) return eM[82];
            if (Math.abs((WW[eM[1]][WW[eM[16]]][eM[1]] - WW[eM[2]][eM[1]]) / (WW[eM[1]][WW[eM[16]]][eM[2]] - WW[eM[2]][eM[2]])) === eM[2]) return eM[82]
          }
          return !0
        }, console.log(WW[-eM[83]]))
      }(), gw(qM = (...WW) => {
        function RW(...WW) {
          return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = function(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[-eM[85]] = 'd:RBkaVAPGjYupJ_Hyr&L@^>~0I{D5vK<l6;geMO2}nE`9CQ(cWUZS7Xi43swho[%=!|]NmTFq,xf*t/").bz#18$?+', WW[eM[50]] = "" + (WW[eM[1]] || ""), WW[eM[84]] = WW[eM[50]].length, WW[eM[21]] = [], WW[eM[34]] = eM[1], WW[eM[87]] = eM[1], WW[-eM[86]] = -eM[2]), WW[eM[10]] = eM[1]; WW[eM[10]] < WW[eM[84]]; WW[eM[10]]++)
              if (WW[eM[64]] = WW[-eM[85]].indexOf(WW[eM[50]][WW[eM[10]]]), WW[eM[64]] !== -eM[2])
                if (WW[-eM[86]] < eM[1]) WW[-eM[86]] = WW[eM[64]];
                else {
                  gw(WW[-eM[86]] += WW[eM[64]] * eM[7], WW[eM[34]] |= WW[-eM[86]] << WW[eM[87]], WW[eM[87]] += (WW[-eM[86]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                  do {
                    gw(WW[eM[21]].push(WW[eM[34]] & eM[12]), WW[eM[34]] >>= eM[11], WW[eM[87]] -= eM[11])
                  } while (WW[eM[87]] > eM[26]);
                  WW[-eM[86]] = -eM[2]
                } return WW[-eM[86]] > -eM[2] && WW[eM[21]].push((WW[eM[34]] | WW[-eM[86]] << WW[eM[87]]) & eM[12]), BM(WW[eM[21]])
          }(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
        }
        WW[eM[13]] = eM[2];
        const MW = function(WW) {
            var RW;
            return {
              meta: {
                ...WW.meta,
                formatVersion: QR.d,
                variation: null !== (RW = WW.meta.variation) && void 0 !== RW ? RW : null
              },
              initialChunks: WW.initialChunks.map((WW => ({
                chunkPos: WW.chunkPos,
                rle: rM(WW.rle),
                sharedBlockData: kM("sharedBlockData", WW.sharedBlockData)
              }))),
              ticks: WW.ticks.map(HR),
              editState: WW.editState
            }
          }(WW[eM[1]]),
          wW = wR[QR[eM[21]]];
        WW[-eM[20]] = eM[19];
        try {
          function bR(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[-eM[87]] = 'xtnAojmgi60G7}XKp&HwvM+>[yV*C%`IPZlLO<!"JW4audeUr59,$h1;R={F(2_3).Tc8q:D?@zNS#f^|QE~Y/Bbks]', WW[eM[20]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[eM[20]].length, WW[eM[45]] = [], WW[eM[56]] = eM[1], WW[eM[24]] = eM[1], WW[eM[55]] = -eM[2]), WW[eM[62]] = eM[1]; WW[eM[62]] < WW[eM[4]]; WW[eM[62]]++)
              if (WW[eM[64]] = WW[-eM[87]].indexOf(WW[eM[20]][WW[eM[62]]]), WW[eM[64]] !== -eM[2])
                if (WW[eM[55]] < eM[1]) WW[eM[55]] = WW[eM[64]];
                else {
                  gw(WW[eM[55]] += WW[eM[64]] * eM[7], WW[eM[56]] |= WW[eM[55]] << WW[eM[24]], WW[eM[24]] += (WW[eM[55]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                  do {
                    gw(WW[eM[45]].push(WW[eM[56]] & eM[12]), WW[eM[56]] >>= eM[11], WW[eM[24]] -= eM[11])
                  } while (WW[eM[24]] > eM[26]);
                  WW[eM[55]] = -eM[2]
                } return WW[eM[55]] > -eM[2] && WW[eM[45]].push((WW[eM[56]] | WW[eM[55]] << WW[eM[24]]) & eM[12]), BM(WW[eM[45]])
          }

          function yR(...WW) {
            return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = bR(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
          }
          WW[-eM[20]] = wW[yR(eM[49])](MW)
        } catch (yw) {
          function eW(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[eM[2]] = 'T?YbPHWcsFAfrVJmgBa3_(7"X^2%Dj`0i{&8ledzISu5/<NQUxM>y|o):6~+;Zv@whGkp*.][KREq=OC!t4$,n1L}#9', WW[-eM[88]] = "" + (WW[eM[1]] || ""), WW[eM[16]] = WW[-eM[88]].length, WW[eM[45]] = [], WW[eM[56]] = eM[1], WW[eM[35]] = eM[1], WW[eM[26]] = -eM[2]), WW[eM[62]] = eM[1]; WW[eM[62]] < WW[eM[16]]; WW[eM[62]]++)
              if (WW[eM[71]] = WW[eM[2]].indexOf(WW[-eM[88]][WW[eM[62]]]), WW[eM[71]] !== -eM[2])
                if (WW[eM[26]] < eM[1]) WW[eM[26]] = WW[eM[71]];
                else {
                  gw(WW[eM[26]] += WW[eM[71]] * eM[7], WW[eM[56]] |= WW[eM[26]] << WW[eM[35]], WW[eM[35]] += (WW[eM[26]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                  do {
                    gw(WW[eM[45]].push(WW[eM[56]] & eM[12]), WW[eM[56]] >>= eM[11], WW[eM[35]] -= eM[11])
                  } while (WW[eM[35]] > eM[26]);
                  WW[eM[26]] = -eM[2]
                } return WW[eM[26]] > -eM[2] && WW[eM[45]].push((WW[eM[56]] | WW[eM[26]] << WW[eM[35]]) & eM[12]), BM(WW[eM[45]])
          }

          function BW(...WW) {
            return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = eW(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
          }

          function tR() {
            var WW, RW, MW;

            function wW(...WW) {
              return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = function(WW) {
                var RW, MW, wW, CW, zR, AW, bR;
                for (gw(RW = "" + (WW || ""), MW = RW.length, wW = [], CW = eM[1], zR = eM[1], AW = -eM[2]), bR = eM[1]; bR < MW; bR++) {
                  var yR = 'ndNpAQPBjLZeVEhFsqDgIXCRkbTtSJ4<uaM$cH_l&0o72K#*?GYv5%~UOWifr3[,:y(@!/`^=.8+"xw>|;z)6}1]{9m'.indexOf(RW[bR]);
                  if (yR !== -eM[2])
                    if (AW < eM[1]) AW = yR;
                    else {
                      gw(AW += yR * eM[7], CW |= AW << zR, zR += (AW & eM[36]) > eM[37] ? eM[38] : eM[39]);
                      do {
                        gw(wW.push(CW & eM[12]), CW >>= eM[11], zR -= eM[11])
                      } while (zR > eM[26]);
                      AW = -eM[2]
                    }
                }
                return AW > -eM[2] && wW.push((CW | AW << zR) & eM[12]), BM(wW)
              }(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
            }
            gw(WW = wW(135) + wW(136) + wW(137), RW = wW(eM[43]) + wW(139) + wW(eM[3]) + "?", MW = wW(eM[9]) + wW(142) + wW(eM[54]) + wW(144), WW.match(RW + MW))
          }
          throw BW(134) in tw && tR(), gw(console[BW(145)](MW), wW[BW(eM[53])](MW, {
            [BW(eM[59]) + BW(148)]: (...WW) => (NM = [WW, {}], TM(BW(149)))
          })), yw
        }
        const CW = AR(QR[eM[21]], WW[-eM[20]]),
          AW = zR[eM[89]][RW(150)](eM[45]);
        return AW[RW(151) + RW(152) + "E"](QR[eM[21]]), zR[eM[89]].concat([AW, CW])
      }, ZR = (...WW) => {
        function RW(WW) {
          return typeof SR[WW] === eM[18] ? SR[WW] = function(...WW) {
            for (gw(WW[eM[13]] = eM[2], WW[eM[2]] = '}CZBrdkLjOEmVv2]`$Dn.0_|+s/X3;9Ggw~:bW#*4()Fl@h,TN!e&"iAKU=Ro<xy^I%Ht[ac16?>p8PJfYSqzu57{MQ', WW[eM[90]] = "" + (WW[eM[1]] || ""), WW[eM[16]] = WW[eM[90]].length, WW[eM[92]] = [], WW[-eM[91]] = eM[1], WW[eM[15]] = eM[1], WW[eM[53]] = -eM[2]), WW[eM[11]] = eM[1]; WW[eM[11]] < WW[eM[16]]; WW[eM[11]]++)
              if (WW[-eM[29]] = WW[eM[2]].indexOf(WW[eM[90]][WW[eM[11]]]), WW[-eM[29]] !== -eM[2])
                if (WW[eM[53]] < eM[1]) WW[eM[53]] = WW[-eM[29]];
                else {
                  gw(WW[eM[53]] += WW[-eM[29]] * eM[7], WW[-eM[91]] |= WW[eM[53]] << WW[eM[15]], WW[eM[15]] += (WW[eM[53]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                  do {
                    gw(WW[eM[92]].push(WW[-eM[91]] & eM[12]), WW[-eM[91]] >>= eM[11], WW[eM[15]] -= eM[11])
                  } while (WW[eM[15]] > eM[26]);
                  WW[eM[53]] = -eM[2]
                } return WW[eM[53]] > -eM[2] && WW[eM[92]].push((WW[-eM[91]] | WW[eM[53]] << WW[eM[15]]) & eM[12]), BM(WW[eM[92]])
          }(WM[WW]) : SR[WW]
        }
        WW[eM[13]] = eM[2];
        const MW = zR[eM[89]][RW(153)](WW[eM[1]]);
        if (MW[RW(154) + RW(155)] >= eM[45]) {
          const wW = MW[RW(eM[48]) + RW(157)](eM[1]);
          if (wR[wW]) {
            function AW(...WW) {
              for (gw(WW[eM[13]] = eM[2], WW[eM[5]] = '^CfLrXeTUpBlaAMqJ#{GzFy$d!S)oxkZwjhv}(["|H;s5:D/*V1KNIn?g_],4um+90Pb2OW=.Rt%E&`<3Y7@~Qc>i68', WW[eM[86]] = "" + (WW[eM[1]] || ""), WW[eM[4]] = WW[eM[86]].length, WW[eM[21]] = [], WW[eM[56]] = eM[1], WW[eM[24]] = eM[1], WW[-eM[93]] = -eM[2]), WW[eM[62]] = eM[1]; WW[eM[62]] < WW[eM[4]]; WW[eM[62]]++)
                if (WW[eM[64]] = WW[eM[5]].indexOf(WW[eM[86]][WW[eM[62]]]), WW[eM[64]] !== -eM[2])
                  if (WW[-eM[93]] < eM[1]) WW[-eM[93]] = WW[eM[64]];
                  else {
                    gw(WW[-eM[93]] += WW[eM[64]] * eM[7], WW[eM[56]] |= WW[-eM[93]] << WW[eM[24]], WW[eM[24]] += (WW[-eM[93]] & eM[36]) > eM[37] ? eM[38] : eM[39]);
                    do {
                      gw(WW[eM[21]].push(WW[eM[56]] & eM[12]), WW[eM[56]] >>= eM[11], WW[eM[24]] -= eM[11])
                    } while (WW[eM[24]] > eM[26]);
                    WW[-eM[93]] = -eM[2]
                  } return WW[-eM[93]] > -eM[2] && WW[eM[21]].push((WW[eM[56]] | WW[-eM[93]] << WW[eM[24]]) & eM[12]), BM(WW[eM[21]])
            }

            function bR(...WW) {
              return WW[eM[13]] = eM[2], typeof SR[WW[eM[1]]] === eM[18] ? SR[WW[eM[1]]] = AW(WM[WW[eM[1]]]) : SR[WW[eM[1]]]
            }
            const yR = MW[bR(158)](eM[45]),
              NW = zM(wW) ? zR[eM[89]][bR(159)](bM(wW, yR)) : yR;
            return function(WW) {
              var RW, MW, wW, zR, AW;
              const bR = null === (RW = WW.meta) || void 0 === RW ? void 0 : RW.formatVersion;
              if (!QR.f.includes(bR)) throw new Error(`Unsupported recording format version: ${bR}`);
              if (!Array.isArray(WW.initialChunks) || !Array.isArray(WW.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const CW of WW.ticks)
                if (!Array.isArray(CW.structuralEvents) || !Array.isArray(CW.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const yR = {
                ...WW.meta
              };
              return yR.formatVersion = QR.d, (0, CW.S)(yR.variation) && delete yR.variation, {
                meta: yR,
                initialChunks: WW.initialChunks.map((WW => {
                  var RW;
                  return {
                    chunkPos: WW.chunkPos,
                    rle: cM(WW.rle),
                    sharedBlockData: null !== (RW = aM("sharedBlockData", WW.sharedBlockData)) && void 0 !== RW ? RW : []
                  }
                })),
                ticks: WW.ticks.map(DR),
                editState: {
                  cameraKeyframes: null !== (MW = null === (wW = WW.editState) || void 0 === wW ? void 0 : wW.cameraKeyframes) && void 0 !== MW ? MW : [],
                  playbackMark: null !== (zR = null === (AW = WW.editState) || void 0 === AW ? void 0 : AW.playbackMark) && void 0 !== zR ? zR : null
                }
              }
            }(wR[wW][bR(160)](NW))
          }
        }
        throw new Error(RW(161) + RW(162) + RW(163) + RW(164) + RW(165) + RW(eM[57]))
      })
  },
  35159: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => zR,
      d: () => wW,
      f: () => CW,
      i: () => eW,
      l: () => BW,
      o: () => yR,
      r: () => tR,
      s: () => bR,
      t: () => NW,
      w: () => AW
    });
    const wW = 9,
      CW = [9],
      zR = 100,
      AW = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      bR = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      yR = ["itemName", "amount", "position", "size", "attributes"],
      NW = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      eW = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "nRW", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      BW = ["selectedSlotIndex", "slots"],
      tR = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35153: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW,
      g: () => gR,
      j: () => yR,
      m: () => AW,
      n: () => bR,
      q: () => NW
    });
    var wW = MW(284),
      CW = MW(33);

    function zR(WW) {
      return null === WW || void 0 === WW ? null : "string" === typeof WW ? WW : null
    }

    function AW(WW, RW) {
      return JSON.stringify(WW) === JSON.stringify(RW)
    }

    function bR(WW) {
      const RW = [];
      for (const MW of Object.keys(WW)) {
        const wW = WW[MW];
        for (const WW of Object.keys(wW)) RW.push({
          xV: MW,
          name: WW,
          ...wW[WW]
        })
      }
      return RW
    }

    function yR(WW) {
      const RW = {};
      for (const zR of WW) {
        var MW, wW, CW;
        RW[zR.xV] || (RW[zR.xV] = {}), RW[zR.xV][zR.name] = {
          icon: zR.icon,
          level: zR.level,
          displayName: null !== (MW = zR.displayName) && void 0 !== MW ? MW : null,
          endTick: null !== (wW = zR.endTick) && void 0 !== wW ? wW : null,
          showInNametag: null === (CW = zR.showInNametag) || void 0 === CW || CW
        }
      }
      return RW
    }

    function NW(WW, RW) {
      const MW = {};
      for (const CW of Object.keys(WW)) {
        const zR = {};
        for (const MW of Object.keys(WW[CW])) {
          const wW = WW[CW][MW];
          null !== wW.endTick && wW.endTick < RW || (zR[MW] = {
            ...wW,
            endTick: null === wW.endTick ? null : wW.endTick - RW
          })
        }(0, wW.Cc)(zR) || (MW[CW] = zR)
      }
      return MW
    }

    function eW(WW, RW, MW) {
      if (null !== WW) return Math.max(0, 1e3 * (WW - RW) / MW)
    }
    class BW {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(WW, RW) {
        this.clear();
        const MW = Date.now();
        for (const bR of WW.iterateEntityIds()) {
          const yR = WW.getEffects(bR);
          if ((0, wW.Cc)(yR)) continue;
          const NW = RW(bR);
          for (const WW of Object.keys(yR)) {
            var CW, AW;
            const RW = yR[WW];
            this.upsert(NW, WW, {
              icon: RW.icon,
              level: RW.level,
              displayName: zR(RW.displayName),
              showInNametag: null === (CW = RW.showInNametag) || void 0 === CW || CW,
              endTime: void 0 !== RW.duration && null !== RW.duration ? (null !== (AW = RW.appliedAt) && void 0 !== AW ? AW : MW) + RW.duration : null
            })
          }
        }
      }
      upsert(WW, RW, MW) {
        this.tracked[WW] || (this.tracked[WW] = {}), this.tracked[WW][RW] = MW
      }
      remove(WW, RW) {
        const MW = this.tracked[WW];
        MW && (delete MW[RW], (0, wW.Cc)(MW) && delete this.tracked[WW])
      }
      handleUpdate(WW) {
        var RW;
        0 !== WW.duration ? this.upsert(WW.xV, WW.name, {
          icon: WW.icon,
          level: WW.level,
          displayName: zR(WW.displayName),
          showInNametag: null === (RW = WW.showInNametag) || void 0 === RW || RW,
          endTime: void 0 !== WW.duration && null !== WW.duration ? Date.now() + WW.duration : null
        }) : this.remove(WW.xV, WW.name)
      }
      handleRemove(WW, RW) {
        this.remove(WW, RW)
      }
      sample(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const CW = {},
          zR = 1e3 / RW;
        for (const AW of Object.keys(this.tracked)) {
          const RW = this.tracked[AW],
            bR = {};
          for (const wW of Object.keys(RW)) {
            const CW = RW[wW];
            let yR = null;
            if (null !== CW.endTime) {
              const RW = Math.max(0, CW.endTime - MW);
              if (0 === RW) {
                this.remove(AW, wW);
                continue
              }
              yR = WW + Math.ceil(RW / zR)
            }
            bR[wW] = {
              icon: CW.icon,
              level: CW.level,
              displayName: CW.displayName,
              endTick: yR,
              showInNametag: CW.showInNametag
            }
          }(0, wW.Cc)(bR) || (CW[AW] = bR)
        }
        return CW
      }
    }

    function tR(WW, RW, MW, wW) {
      WW.hasEntity(RW) ? WW.updateEffect(RW, MW, wW) : function(WW, RW, MW) {
        CW.k.Sz("EffectUpdate", {
          xV: WW,
          name: RW,
          ...MW
        }, !0)
      }(RW, MW, wW)
    }

    function TW(WW, RW, MW) {
      WW.hasEntity(RW) ? WW.removeEffect(RW, MW) : function(WW, RW) {
        CW.k.Sz("RemoveEffect", {
          xV: WW,
          name: RW
        }, !0)
      }(RW, MW)
    }

    function gR(WW, RW, MW, wW, CW, zR, AW) {
      for (const eW of Object.keys(MW))
        for (const zR of Object.keys(MW[eW])) {
          var bR;
          null !== (bR = RW[eW]) && void 0 !== bR && bR[zR] || (TW(WW, eW, zR), wW && eW === wW && String(CW) !== String(eW) && TW(WW, CW, zR))
        }
      for (const iR of Object.keys(RW))
        for (const bR of Object.keys(RW[iR])) {
          var yR, NW;
          const YW = RW[iR][bR],
            JW = eW(YW.endTick, zR, AW);
          if (0 === JW) {
            TW(WW, iR, bR), wW && iR === wW && String(CW) !== String(iR) && TW(WW, CW, bR);
            continue
          }
          const PW = null === (yR = MW[iR]) || void 0 === yR ? void 0 : yR[bR],
            IW = PW && (gR = YW, (BW = PW).icon === gR.icon && BW.level === gR.level && BW.displayName === gR.displayName && BW.endTick === gR.endTick && BW.showInNametag === gR.showInNametag),
            oW = {
              icon: YW.icon,
              level: YW.level,
              displayName: null !== (NW = YW.displayName) && void 0 !== NW ? NW : void 0,
              duration: JW,
              showInNametag: YW.showInNametag
            };
          IW || tR(WW, iR, bR, oW), wW && iR === wW && tR(WW, CW, bR, {
            ...oW,
            showInNametag: !1
          })
        }
      var BW, gR
    }
  },
  35138: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => NW,
      c: () => yR,
      g: () => BW,
      i: () => AW,
      l: () => eW
    });
    var wW = MW(35135),
      CW = MW(35141);
    const zR = {
      description: "Bloxd Replay",
      accept: {
        [wW.g]: wW.c
      }
    };

    function AW() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function bR(WW) {
      return WW instanceof DOMException && "AbortError" === WW.name
    }
    async function yR() {
      try {
        const [WW] = await window.showOpenFilePicker({
          multiple: !1,
          types: [zR]
        }), RW = await WW.getFile();
        return {
          handle: WW,
          bytes: new Uint8Array(await RW.arrayBuffer())
        }
      } catch (WW) {
        if (bR(WW)) return null;
        throw WW
      }
    }
    async function NW(WW) {
      if (WW && await async function(WW) {
          const RW = {
            mode: "readwrite"
          };
          return "granted" === await WW.queryPermission(RW) || "granted" === await WW.requestPermission(RW)
        }(WW)) return WW;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, wW.l)(),
          types: [zR]
        })
      } catch (RW) {
        if (bR(RW)) return null;
        throw RW
      }
    }
    async function eW(WW, RW) {
      const MW = await WW.createWritable();
      await MW.write(new Blob([RW], {
        type: wW.g
      })), await MW.close()
    }

    function BW(WW) {
      return (0, wW.k)((0, CW.f)(WW))
    }
  },
  34693: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => BW
    });
    var wW = MW(27),
      CW = MW(116),
      zR = MW(50),
      AW = MW(2675),
      bR = MW(2518),
      yR = MW(5661);
    const NW = "shaderPackListingCheckedAt",
      eW = 36e5;

    function BW() {
      const {
        canUseShaderPacks: WW
      } = CW.featureFlags.settings;
      var RW, BW;
      (0, bR.k)(WW) && !(0, bR.h)(WW) && (RW = zR.g.getItem(NW), BW = Date.now(), "number" !== typeof RW || BW < RW || BW - RW >= eW) && (0, AW.b)((() => {
        (async function() {
          if ("landingPage" !== wW.b.get("gameState")) return;
          const WW = await (0, yR.h)();
          if (void 0 === (null === WW || void 0 === WW ? void 0 : WW.listing)) return;
          zR.g.setItem(NW, Date.now());
          const {
            followListingUpdates: RW
          } = await Promise.all([MW.e(120), MW.e(117), MW.e(109)]).then((() => MW(38669)));
          await RW(WW, WW.listing) || zR.g.removeItem(NW)
        })().catch((WW => {
          console.error("Failed to check the shader pack listing for an update", WW)
        }))
      }))
    }
  },
  34709: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => yR
    });
    var wW = MW(232),
      CW = MW(27),
      zR = MW(34716),
      AW = MW(1459),
      bR = MW(1578);

    function yR(WW, RW) {
      var MW, yR, NW;
      if (!CW.b.get("isKeydownEnabled") || WW.repeat) return;
      const eW = WW.code;
      "Escape" === WW.key ? (0, AW.j)(WW) : null !== (MW = bR.q.OpenSettings) && void 0 !== MW && MW.includes(eW) ? (0, AW.u)(WW, wW.t.SETTINGS) : null !== (yR = bR.q.OpenCharacterCustomization) && void 0 !== yR && yR.includes(eW) ? (0, zR.b)() || (0, AW.u)(WW, wW.t.CUSTOMISATION, RW()) : null !== (NW = bR.q.ShowDebugOverlay) && void 0 !== NW && NW.includes(eW) && CW.b.set({
        showDebugOverlay: !CW.b.get("showDebugOverlay")
      })
    }
  },
  34699: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => JW
    });
    var wW = MW(564),
      CW = MW(1057),
      zR = MW(156),
      AW = MW(1072),
      bR = MW(1053),
      yR = MW(33),
      NW = MW(3421),
      eW = MW(1511),
      BW = MW(2213),
      tR = MW(1135),
      TW = MW(1148),
      gR = MW(1314),
      iR = MW(1033),
      YW = MW(34703);

    function JW(WW) {
      return async (RW, MW, bR, gR, iR) => {
        let YW;
        if ((0, wW.S)(bR)) {
          if (iR.aborted) return PW();
          const WW = await IW(RW, MW, gR);
          if (iR.aborted || BW.f.matchmakingEnded(WW.isError() ? null : performance.now()), WW.isError()) {
            const RW = WW.asError();
            return console.log("Join room did not succeed, reason:", RW.message), RW.forward()
          }
          YW = WW.getValue()
        } else {
          BW.f.skipPlayWait();
          const WW = oW(bR.replace("https://", "").replace("http://", ""));
          if (WW.isError()) return WW.asError().forward();
          YW = {
            endpoint: WW.getValue(),
            gameNameWithVariation: MW,
            lobbyName: RW instanceof CW.c ? RW.getLobbyName() : RW
          }
        }
        if (iR.aborted) return PW();
        console.log(`Connecting to ${YW.gameNameWithVariation} in lobby ${YW.lobbyName} on game server ${YW.endpoint}`), yR.k.Sz("matchmakeAndPlayStepCompleted", {
          step: zR.k.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, NW.f)(), eW.e.markGameLoadStart(), (0, TW.n)({
          websocketUrl: YW.endpoint,
          gameNameWithVariation: YW.gameNameWithVariation,
          lobbyName: YW.lobbyName
        }), yR.k.Sz("loadingScreenState", "loadingPage:loadingGame");
        const JW = await WW({
          place: YW,
          userContext: gR,
          direct: !(0, wW.S)(bR),
          rematch: async () => {
            const WW = await async function(WW, RW, MW, wW) {
              const CW = await IW(WW, RW, MW);
              if (!CW.isError() && !wW.aborted) {
                const {
                  endpoint: WW,
                  gameNameWithVariation: RW,
                  lobbyName: MW
                } = CW.getValue();
                (0, TW.n)({
                  websocketUrl: WW,
                  gameNameWithVariation: RW,
                  lobbyName: MW
                })
              }
              return CW
            }(RW, MW, gR, iR);
            return WW.isError() || (YW = WW.getValue()), WW
          }
        }, iR);
        return JW.isError() ? JW.asError().forward() : ((0, tR.Q)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), AW.e.value({
          gameNameWithVariation: YW.gameNameWithVariation,
          lobbyName: YW.lobbyName,
          addLobbyToRecentlyPlayed: !(RW instanceof CW.c)
        }))
      }
    }

    function PW() {
      return AW.e.errorWithCode("Left the game while it loaded", zR.k.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        JA: !0
      })
    }
    async function IW(WW, RW, MW) {
      return (0, wW.S)(WW) || WW instanceof CW.c || !(WW.length > bR.H) ? await gR.c.matchmakePlayer(MW, WW, RW, (0, YW.b)()).then((WW => {
        if (!1 === WW.succeeded) return AW.e.errorWithCode(WW.failReason, zR.k.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: RW,
          lobbyName: MW,
          gameNameWithVariation: wW
        } = WW, CW = oW(RW);
        return CW.isError() ? CW.asError().forward() : AW.e.value({
          endpoint: CW.getValue(),
          gameNameWithVariation: wW,
          lobbyName: MW
        })
      })).catch((WW => (console.error("Bad response from the matchmaking server:", WW), AW.e.errorWithCode(WW.toString(), zR.k.REQUEST_TO_MATCHMAKING, {
        error: WW,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", WW), AW.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", zR.k.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function oW(WW) {
      const RW = iR.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(WW);
      return RW.isError() ? AW.e.errorWithCode(RW.asError().message, zR.k.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : AW.e.value(RW.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, TW.j)("/")
    }
  },
  34703: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => iR,
      c: () => YW
    });
    var wW = MW(860),
      CW = MW(265),
      zR = MW(284),
      AW = MW(865),
      bR = MW(3563),
      yR = MW(116),
      NW = MW(151),
      eW = MW(1495),
      BW = MW(130),
      tR = MW(34706),
      TW = MW(50),
      gR = MW(932);

    function iR() {
      var WW, RW;
      return [...null !== (WW = navigator.languages) && void 0 !== WW ? WW : [null !== (RW = navigator.language) && void 0 !== RW ? RW : "none"], "en-gb"]
    }

    function YW(WW, RW, MW, YW, JW) {
      const PW = (0, wW.k)(RW) ? (0, wW.n)(RW) : null,
        IW = {
          cookies: (0, eW.getAllCookiesForGameNameWithVariation)(RW),
          isMobile: (0, yR.isMobile)(),
          isUsingCustomGameTexturePack: null !== PW && JW(PW),
          generalCookies: {
            joinDiscord: !!TW.g.getItem("DiscordPressed"),
            newGo: bR.b,
            ...WW.getMetricsCookies(),
            trafficCode: YW,
            compliance: yR.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, yR.getBrowserName)(),
            version: (0, yR.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, yR.getPlatformType)(),
            deviceType: (0, BW.c)()
          },
          isLoggedIn: WW.isLoggedIn(),
          lobbyName: MW,
          languages: iR(),
          version: CW.e,
          siteUsed: NW.u,
          subsiteUsed: NW.C,
          playSessionId: (0, tR.k)(RW),
          visitSessionId: (0, gR.e)()
        };
      return null !== PW && (0, zR.Ec)(PW) ? (IW.lobbyName = (0, wW.h)(PW, (0, wW.m)(RW), MW), {
        roomName: `classic_${AW.g}`,
        joinOptions: IW
      }) : {
        roomName: RW,
        joinOptions: IW
      }
    }
  },
  34822: (WW, RW, MW) => {
    function wW(WW, RW) {
      for (let MW = 0; MW < WW.length; MW++)
        if (WW[MW].identifier === RW) return !0;
      return !1
    }
    MW.d(RW, {
      c: () => wW
    })
  },
  35072: (WW, RW, MW) => {
    MW.d(RW, {
      C: () => EW,
      E: () => pW,
      H: () => VW,
      d: () => yR,
      f: () => jR,
      g: () => bR,
      j: () => dW,
      k: () => cR,
      n: () => FW,
      p: () => sW,
      r: () => aR,
      s: () => rR,
      v: () => hW,
      z: () => UW
    });
    var wW = MW(50);
    const CW = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      zR = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      AW = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      bR = zR.filter((WW => "docsButton" !== WW)),
      yR = AW.filter((WW => "aiHelperButton" !== WW)),
      NW = "codeEditorTutorials",
      eW = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      BW = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let tR = null,
      TW = null;
    const gR = new Set,
      iR = new Set;
    let YW = null;
    const JW = new Set,
      PW = new Set;

    function IW() {
      PW.forEach((WW => {
        WW()
      }))
    }

    function oW() {
      if (!tR) {
        const WW = wW.g.getItem(NW);
        tR = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof WW && null !== WW ? WW : {}
        }
      }
      return tR
    }

    function lW(WW) {
      const RW = oW();
      RW[WW] || (tR = {
        ...RW,
        [WW]: !0
      }, wW.g.setItem(NW, tR))
    }

    function FW(WW) {
      return "docsOverview" === WW ? zR : "aiHelperOverview" === WW ? AW : TW ? CW[TW] : []
    }

    function fW(WW) {
      return ("worldCodeButton" !== WW || !oW().worldCodeIntroShown) && !JW.has(WW)
    }

    function QW(WW) {
      var RW;
      return (null === (RW = YW) || void 0 === RW ? void 0 : RW.name) === WW ? YW.stepsDone : gR
    }

    function rR(WW, RW) {
      if (! function(WW) {
          return YW ? YW.name === WW : "welcome" === WW
        }(WW) || !fW(RW) || QW(WW).has(RW)) return !1;
      if (YW) return !0;
      const MW = eW[RW];
      return MW ? !oW()[MW] || iR.has(RW) : !oW()[BW[WW]]
    }

    function cR(WW) {
      var RW;
      return null !== (RW = FW(WW).find((RW => rR(WW, RW)))) && void 0 !== RW ? RW : null
    }

    function XW(WW) {
      var RW;
      lW(BW[WW]), (null === (RW = YW) || void 0 === RW ? void 0 : RW.name) === WW && (YW = null)
    }

    function jR(WW) {
      const RW = (YW ? [YW.name] : ["welcome", "docsOverview"]).find((RW => cR(RW) === WW));
      if (!RW) return;
      QW(RW).add(WW);
      const MW = eW[WW];
      MW && (lW(MW), YW || iR.add(WW)), null === cR(RW) && XW(RW), IW()
    }

    function kR(WW, RW) {
      const MW = FW(WW),
        wW = QW(WW);
      for (let CW = MW.indexOf(RW) - 1; CW >= 0; CW--)
        if (wW.has(MW[CW]) && fW(MW[CW])) return MW[CW];
      return null
    }

    function aR(WW, RW) {
      return null !== kR(WW, RW)
    }

    function sW(WW, RW) {
      const MW = kR(WW, RW);
      MW && (QW(WW).delete(MW), IW())
    }

    function dW(WW) {
      XW(WW), "welcome" === WW && FW("welcome").forEach((WW => {
        const RW = eW[WW];
        RW && lW(RW)
      })), IW()
    }

    function pW(WW) {
      YW = {
        name: WW,
        stepsDone: new Set
      }, IW()
    }

    function hW() {
      (YW || 0 !== gR.size || 0 !== iR.size) && (YW = null, gR.clear(), iR.clear(), IW())
    }

    function UW(WW, RW) {
      const MW = RW ? WW : TW === WW ? null : TW;
      MW !== TW && (TW = MW, IW())
    }

    function EW(WW, RW) {
      JW.has(WW) === RW && (RW ? JW.delete(WW) : JW.add(WW), IW())
    }

    function VW(WW) {
      return PW.add(WW), () => {
        PW.delete(WW)
      }
    }
  },
  34807: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => bR,
      e: () => NW,
      i: () => AW
    });
    var wW = MW(1939),
      CW = MW(1945),
      zR = MW(1947);

    function AW(WW, RW) {
      return (!(0, zR.e)() || 0 === WW && 0 === RW) && (0, CW.w)(wW.j.Joystick, 0, WW, RW, 0)
    }
    const bR = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function yR(WW) {
      return {
        x: WW.left + WW.width / 2,
        y: WW.top + WW.height / 2,
        radius: Math.min(WW.width, WW.height) / 2
      }
    }
    const NW = new class {
      constructor(WW) {
        this.write = WW, this.elements = new Map
      }
      set(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        RW ? this.elements.set(WW, {
          element: RW,
          hidden: MW
        }) : this.elements.delete(WW), this.measureOne(WW)
      }
      measure() {
        for (const WW of this.elements.keys()) this.measureOne(WW)
      }
      hitZone(WW, RW) {
        let MW = null,
          wW = 1;
        for (const CW of this.elements.keys()) {
          const zR = this.shownRect(CW);
          if (!zR) continue;
          const AW = yR(zR),
            bR = Math.max(0, zR.width / 2 - AW.radius),
            NW = Math.max(0, zR.height / 2 - AW.radius),
            eW = Math.max(0, Math.abs(WW - AW.x) - bR),
            BW = Math.max(0, Math.abs(RW - AW.y) - NW),
            tR = Math.hypot(eW, BW) / AW.radius;
          tR < wW && (MW = {
            code: CW,
            element: this.elements.get(CW).element,
            ...AW
          }, wW = tR)
        }
        return MW
      }
      measureOne(WW) {
        const RW = this.shownRect(WW);
        if (!RW) return void this.write(wW.j.TouchZone, WW, 0, 0, 0);
        const MW = yR(RW);
        this.write(wW.j.TouchZone, WW, MW.x, MW.y, (0, CW.k)(MW.radius))
      }
      shownRect(WW) {
        const RW = this.elements.get(WW),
          MW = RW && !RW.hidden ? RW.element.getBoundingClientRect() : null;
        return !MW || MW.width <= 0 || MW.height <= 0 ? null : MW
      }
    }(CW.w)
  },
  35036: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      d: () => bR
    });
    const wW = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      CW = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      zR = {
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
      AW = {
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
      bR = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: wW.files,
          dependencies: wW.dependencies,
          bundledSource: wW.bundledSource,
          types: wW.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: CW.files,
          dependencies: CW.dependencies,
          bundledSource: CW.bundledSource,
          types: CW.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: zR.files,
          dependencies: zR.dependencies,
          bundledSource: zR.bundledSource,
          types: zR.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: AW.files,
          dependencies: AW.dependencies,
          bundledSource: AW.bundledSource,
          types: AW.types
        }
      };

    function yR(WW) {
      const RW = [],
        MW = new Set,
        wW = WW => {
          if (MW.has(WW)) return;
          const CW = bR[WW];
          if (CW) {
            MW.add(WW);
            for (const WW of CW.dependencies) wW(WW);
            RW.push(WW)
          }
        };
      for (const CW of WW) wW(CW);
      return RW
    }
  },
  35045: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => yR,
      f: () => bR,
      h: () => AW,
      j: () => zR,
      n: () => NW,
      o: () => eW,
      r: () => gR,
      s: () => TW,
      t: () => tR
    });
    var wW = MW(1066);
    const CW = ["quickjs", "ses"];

    function zR(WW) {
      return CW.includes(WW)
    }

    function AW(WW) {
      return WW === wW.k || WW === wW.n
    }

    function bR(WW, RW) {
      return WW === wW.k && RW === wW.n || WW === wW.n && RW === wW.k
    }

    function yR(WW) {
      const RW = wW.n in WW,
        MW = wW.k in WW;
      return RW && MW ? null : RW ? wW.n : MW ? wW.k : null
    }

    function NW(WW, RW, MW) {
      const wW = `${RW}/`;
      return WW.filter((WW => WW.startsWith(wW))).map((WW => [WW, `${MW}/${WW.slice(wW.length)}`]))
    }

    function eW(WW, RW) {
      let MW = 0;
      for (const [wW, CW] of Object.entries(WW)) wW !== RW && (MW += CW.length);
      return MW
    }
    const BW = "@plugins/";

    function tR(WW) {
      return `${BW}${WW}`
    }

    function TW(WW, RW) {
      return `/node_modules/@plugins/${WW}/${RW}`
    }

    function gR(WW) {
      if (!WW.startsWith(BW)) return null;
      const RW = WW.slice(BW.length);
      return function(WW) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(WW)
      }(RW) ? RW : null
    }
  },
  35056: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      f: () => CW,
      j: () => AW,
      k: () => yR,
      l: () => zR
    });
    var wW = MW(35047);
    const CW = 5,
      zR = "[SCHEMATIC]",
      AW = 1024e4;

    function bR(WW) {
      return WW.endsWith(".bloxdschem") && (0, wW.o)(WW.slice(0, -11) + ".ts") && WW.length <= 64
    }

    function yR(WW) {
      return Object.fromEntries(Object.keys(WW).map((WW => [WW, zR])))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);