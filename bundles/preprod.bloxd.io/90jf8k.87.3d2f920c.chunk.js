export const id = 87;
export const ids = [87];
export const modules = {
  35059: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => MF
    });
    var CF = SF(46),
      AF = SF(1576),
      uF = SF(35068),
      hF = SF.n(uF),
      bW = SF(3621),
      dF = SF(1546),
      PF = SF(1262),
      RF = SF(89),
      iW = SF(107),
      eF = SF(271),
      EF = SF(918),
      QF = SF.n(EF),
      rW = SF(11),
      gW = SF(929),
      tW = SF(1475),
      TF = SF(1510),
      aW = SF(1507),
      kW = SF(1635),
      qW = SF(1234),
      VF = SF(1686),
      NF = SF(1223),
      DF = SF(7709),
      LF = SF(35072),
      mW = SF(35084),
      OF = SF(1298),
      xW = SF(971);
    const ZF = SF(35097),
      oF = ["enter", "t", "/"];

    function YF() {
      var FF, WF;
      (0, VF.e)();
      const SF = null !== (FF = null === (WF = (0, qW.g)()) || void 0 === WF ? void 0 : WF.getBoundButton("keyboardChannel")) && void 0 !== FF ? FF : null;
      return SF ? (0, xW.jsx)(kW.c, {
        className: "ChatInputChannelGlyph",
        glyph: SF
      }) : null
    }

    function MF() {
      const {
        isTouchScreen: FF
      } = (0, rW.d)(["isTouchScreen"]), WF = (0, NF.r)(), [SF, uF] = (0, CF.useState)(!1), EF = (0, CF.useRef)(SF), kW = (0, CF.useRef)(null), {
        messages: qW,
        reportedPlayers: VF,
        channel: MF
      } = (0, DF.p)(), GF = (0, CF.useRef)(0), zW = (0, CF.useRef)(""), IF = (0, CF.useRef)(null), [fF, yW] = (0, CF.useState)(!1), [sF, nF] = (0, CF.useState)(!1), HF = (0, CF.useRef)(fF), KF = (0, CF.useRef)(null), wF = (0, CF.useRef)(!1), XF = (0, CF.useRef)(null), UF = (0, CF.useRef)(null), BF = (0, CF.useRef)(null), jW = (0, CF.useRef)(pF);

      function vW() {
        EF.current = !1, uF(!1), UF.current.blur()
      }

      function JF(FF) {
        HF.current = FF, yW(FF)
      }

      function pF() {
        const FF = UF.current.value;
        UF.current.value = "", lF(FF)
      }

      function lF(FF) {
        (0, DF.l)(FF), GF.current = 0, JF(!1)
      }

      function FW(FF, WF) {
        0 === GF.current && (zW.current = UF.current.value);
        const SF = (0, DF.k)(GF.current + FF, WF);
        GF.current = SF.stepsBack, UF.current.value = 0 === SF.stepsBack ? zW.current : SF.text, setTimeout((() => {
          UF.current && UF.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function WW() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        IF.current && (!FF && HF.current || (IF.current.scrollTop = 1e5))
      }
      return jW.current = pF, (0, bW.d)(!0, SF, "ChatComponent"), (0, PF.e)("appManagerUpdated|openEverythingMenuName", (() => {
        (0, tW.n)() && uF(!1)
      })), (0, CF.useEffect)((() => {
        UF.current.addEventListener("blur", (FF => {
          if (null === UF.current) return;
          Array.from(document.querySelectorAll(":hover")).some((FF => FF.classList.contains("ChatInputChannel") || FF.classList.contains("ChatMsgSelectWrapper"))) || ((0, RF.isMobile)() && EF.current && "" !== UF.current.value && jW.current(), uF(!1))
        }));
        const FF = FF => {
          kW.current.contains(FF.target) || (0, aW.k)(FF.target) || uF(!1)
        };
        document.addEventListener("touchstart", FF, {
          capture: !0
        });
        const WF = FF => {
          (0, mW.f)(FF.target) && (EF.current = !1, uF(!1))
        };
        document.addEventListener("mousedown", WF, {
          capture: !0
        });
        const SF = () => {
            clearTimeout(KF.current), JF(!0)
          },
          CF = () => {
            clearTimeout(KF.current), KF.current = setTimeout((() => {
              JF(!1), WW()
            }), 4e3)
          },
          bW = () => {
            document.pointerLockElement ? (uF(!1), nF(!0), wF.current = !1, JF(!1), WW()) : nF(!1)
          };
        IF.current.addEventListener("pointermove", (FF => {
          "touch" === FF.pointerType || wF.current || document.pointerLockElement || (wF.current = !0, SF())
        })), IF.current.addEventListener("pointerleave", (FF => {
          "touch" !== FF.pointerType && (wF.current = !1, CF())
        })), IF.current.addEventListener("wheel", (() => {
          document.pointerLockElement || (SF(), wF.current || (KF.current = setTimeout((() => {
            JF(!1)
          }), 4e3)))
        }), {
          passive: !0
        }), IF.current.addEventListener("touchstart", SF), IF.current.addEventListener("touchend", CF), IF.current.addEventListener("touchcancel", CF), document.addEventListener("pointerlockchange", bW);
        const dF = FF => {
          if ((EF.current || ! function(FF) {
              if ((0, TF.isTypingInInput)()) return !0;
              const WF = document.activeElement;
              return (WF instanceof HTMLButtonElement || "button" === (null === WF || void 0 === WF ? void 0 : WF.getAttribute("role"))) && ["Enter", " "].includes(FF.key)
            }(FF)) && "codeEditor" !== rW.b.get("openInGameMenuName") && "lobbyCodeEditor" !== rW.b.get("openInGameMenuName") && !AF.gameBridge.latest("connectedGame").replay)
            if (EF.current || !(0, tW.n)()) {
              if (EF.current) {
                if ("ArrowUp" === FF.code || "ArrowDown" === FF.code) return FW("ArrowUp" === FF.code ? 1 : -1, !1), void FF.stopPropagation();
                if ("Tab" === FF.code) return DF.e.selectNextChannel(), FF.stopPropagation(), void FF.preventDefault();
                if (FF.ctrlKey && cW.includes(ZF[FF.keyCode])) return FF.preventDefault(), void FF.stopPropagation()
              }
              if ([...oF, "esc"].includes(hF()(FF)))
                if ("esc" !== hF()(FF)) {
                  if (!EF.current || "/" !== hF()(FF)) {
                    if ("t" === hF()(FF)) {
                      if (EF.current) return void FF.stopPropagation();
                      FF.preventDefault()
                    }
                    EF.current && "" !== UF.current.value && jW.current(), FF.repeat || (EF.current || "/" === hF()(FF) && (UF.current.value = "/", FF.preventDefault()), uF(!EF.current))
                  }
                } else EF.current && (uF(!1), FF.stopPropagation());
              else EF.current && FF.stopPropagation()
            } else oF.includes(hF()(FF)) && (FF.preventDefault(), FF.stopPropagation(), (0, tW.d)(FF))
        };
        document.addEventListener("keydown", dF, {
          capture: !0
        });
        const PF = IF.current;
        let iW = !1;
        const eF = new ResizeObserver((() => {
            iW && (iW = !1, WW())
          })),
          QF = () => {
            iW = !0, eF.unobserve(PF), eF.observe(PF)
          };
        XF.current = QF;
        const gW = new MutationObserver(QF);
        return gW.observe(PF, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("keydown", dF, {
            capture: !0
          }), document.removeEventListener("touchstart", FF, {
            capture: !0
          }), document.removeEventListener("mousedown", WF, {
            capture: !0
          }), document.removeEventListener("pointerlockchange", bW), XF.current = null, gW.disconnect(), eF.disconnect(), clearTimeout(KF.current)
        }
      }), []), (0, aW.p)(UF, {
        open: () => {
          uF(!0)
        },
        close: () => {
          vW()
        },
        submit: () => {
          "" !== UF.current.value && pF(), vW()
        },
        stepHistory: () => {
          FW(1, !0)
        },
        sendLine: FF => {
          lF(FF), vW()
        },
        selectNextChannel: () => {
          DF.e.selectNextChannel()
        }
      }), (0, CF.useEffect)((() => {
        var FF;
        (EF.current = SF, UF.current) && (SF ? (GF.current = 0, UF.current.focus()) : (UF.current.blur(), null === (FF = XF.current) || void 0 === FF || FF.call(XF)))
      }), [SF]), (0, xW.jsx)(xW.Fragment, {
        children: (0, xW.jsxs)("div", {
          ref: kW,
          className: QF()("Chat", {
            Chatting: SF
          }),
          "data-camera-keeper": SF ? "" : void 0,
          children: [(0, xW.jsx)("div", {
            ref: IF,
            className: QF()("ChatMessages", {
              HideScrollbar: !fF && !SF,
              NoScrolling: !(0, RF.isMobile)() && sF
            }),
            children: (0, xW.jsx)(LF.c, {
              messages: qW,
              reportedPlayers: VF
            })
          }), FF && !SF ? (0, xW.jsx)("div", {
            className: "ChatIconWrapper SmallTextLight",
            children: (0, xW.jsx)(gW.e, {
              name: "comment-dots",
              className: "ChatIcon",
              ...(0, OF.d)((() => {
                uF(!0), BF.current.style.display = "flex", (0, RF.isIOS)() && UF.current.focus()
              }), "pointerup")
            })
          }) : null, (0, xW.jsxs)("div", {
            ref: BF,
            className: "ChatInputWrapper",
            style: {
              display: "" + (SF ? "flex" : "none")
            },
            children: [MF && (0, xW.jsx)("div", {
              className: "ChatInputChannel SmallTextBold",
              style: {
                backgroundColor: MF.elementBgColor
              },
              onClick: FF => {
                DF.e.selectNextChannel(), UF.current.focus()
              },
              children: (0, xW.jsx)(dF.d, {
                text: MF.elementContent
              })
            }), MF && WF && (0, xW.jsx)(YF, {}), (0, xW.jsx)("input", {
              className: "ChatInput",
              maxLength: eF.$c,
              ref: UF,
              spellCheck: "false",
              autoComplete: "off",
              autoCorrect: "off",
              placeholder: MF ? `${MF.channelName} Chat${"touchOnly"===(0,iW.c)()||WF?"":" [Tab]"}` : ""
            })]
          })]
        })
      })
    }
    const cW = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35072: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => DF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(7715),
      bW = SF(20),
      dF = SF(89),
      PF = SF(1926),
      RF = SF(2777),
      iW = SF(1651),
      eF = SF(11),
      EF = SF(1546),
      QF = SF(35077),
      rW = SF(1775),
      gW = SF(35079),
      tW = SF(2056),
      TF = SF(2024),
      aW = SF(2020),
      kW = SF(2791),
      qW = SF(8189),
      VF = SF(971);

    function NF(FF) {
      for (let SF = FF.length - 1; SF >= 0; SF--) {
        const CF = "string" === typeof(WF = FF[SF]) ? WF : "str" in WF && "string" === typeof WF.str ? WF.str : "";
        if ("" !== CF.trim()) return CF
      }
      var WF;
      return ""
    }

    function DF(FF) {
      let {
        messages: WF,
        reportedPlayers: SF
      } = FF;
      return (0, VF.jsx)(VF.Fragment, {
        children: WF.map((FF => (0, VF.jsx)(LF, {
          message: FF,
          reportedPlayers: SF
        }, FF.clientChatMsgId)))
      })
    }
    const LF = (0, CF.memo)((function(FF) {
      var WF;
      let {
        message: SF,
        reportedPlayers: AF
      } = FF;
      const DF = (0, CF.useRef)(null),
        [LF] = (0, CF.useState)(qW.c),
        {
          author: mW
        } = SF,
        OF = null === mW || void 0 === mW ? void 0 : mW.id,
        xW = null !== (WF = null === mW || void 0 === mW ? void 0 : mW.name) && void 0 !== WF ? WF : void 0,
        ZF = (0, iW.b)(xW),
        oF = null !== mW && void 0 !== mW && mW.profileEffect ? rW.f[mW.profileEffect] : void 0,
        YF = null !== mW && !mW.local,
        MF = null === mW && null !== SF.serverChatMsgId,
        cW = dF.featureFlags.useSocialFeatures && YF,
        GF = null === SF.serverChatMsgId || null === mW ? null : {
          text: NF(SF.content),
          serverChatMsgId: SF.serverChatMsgId,
          authorId: mW.id
        },
        zW = MF || null !== GF && !AF.includes(OF),
        IF = (0, RF.j)(YF && null !== xW && void 0 !== xW ? xW : null),
        fF = (0, aW.i)(DF);
      (0, CF.useEffect)((() => () => {
        aW.c.closeIfOwner(DF)
      }), []);
      const yW = () => {
          MF ? bW.j.Uu("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            rb: (0, hF.e)(SF.content),
            serverChatMsgId: SF.serverChatMsgId
          }) : null !== GF ? bW.j.Uu("OpenReportMenu", {
            playerEId: OF,
            playerName: xW,
            rb: GF.text,
            serverChatMsgId: GF.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        sF = void 0 === xW ? [] : (0, kW.d)(IF, xW, GF);
      return (0, VF.jsxs)("div", {
        ref: DF,
        className: uF()("MessageWrapper", {
          ChatMsgSelectWrapper: OF,
          Still: LF
        }),
        onContextMenu: cW ? FF => {
          (0, tW.f)(DF, FF, {
            ...(0, gW.c)(OF, xW),
            showLocation: !1,
            status: null,
            extraActions: zW ? [{
              icon: "flag",
              text: "Report",
              onClick: yW
            }] : [],
            friendRequestSource: "chat"
          }, eF.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: cW ? FF => {
          (0, TF.b)(FF, (() => (0, gW.c)(OF, xW).playerSocialPreview))
        } : void 0,
        children: [oF && (0, VF.jsx)(oF, {
          className: "ChatMessageBackground",
          simple: !0
        }), (YF || MF) && !fF && (0, VF.jsx)(QF.c, {
          className: "ChatFloatingActions",
          triggerElementRef: DF,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: yW,
            show: zW
          }, ...sF, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: FF => {
              (0, PF.j)(xW, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: YF && dF.featureFlags.useSocialFeatures && "blocked" !== IF
          }]
        }), (0, VF.jsx)(EF.d, {
          text: SF.content,
          friendBadgeFor: ZF ? xW : void 0
        }, SF.clientChatMsgId)]
      }, SF.clientChatMsgId)
    }))
  },
  35122: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => EF,
      e: () => QF,
      f: () => eF,
      h: () => iW
    });
    var CF = SF(8210),
      AF = SF(35131),
      uF = SF(35133),
      hF = SF(7700),
      bW = SF(1262),
      dF = SF(46),
      PF = SF(61),
      RF = SF(971);

    function iW() {
      var FF;
      return (0, bW.i)(AF.b, (0, AF.j)()), (0, RF.jsx)(RF.Fragment, {
        children: null === (FF = (0, AF.j)()) || void 0 === FF ? void 0 : FF.content
      })
    }

    function eF(FF) {
      var WF;
      let {
        show: SF
      } = FF;
      (0, bW.i)(AF.b, (0, AF.j)());
      const PF = null === (WF = (0, AF.j)()) || void 0 === WF ? void 0 : WF.menu;
      return (0, dF.useEffect)((() => {
        SF || (null === PF || void 0 === PF || PF.onClose(), (0, uF.r)())
      }), [SF, PF]), (0, dF.useEffect)((() => SF ? (0, hF.i)(uF.A, uF.h) : void 0), [SF]), (0, RF.jsx)(CF.d, {
        showing: SF,
        globallyUniqueKey: "clientGameMenu",
        children: null === PF || void 0 === PF ? void 0 : PF.content
      })
    }

    function EF(FF) {
      let {
        placement: WF = "bottom"
      } = FF;
      return (0, RF.jsx)("div", {
        id: `clientGameHud-${WF}`,
        style: {
          display: "contents"
        }
      })
    }

    function QF(FF) {
      let {
        children: WF,
        placement: SF = "bottom"
      } = FF;
      const [CF, AF] = (0, dF.useState)(null);
      return (0, dF.useEffect)((() => {
        AF(document.getElementById(`clientGameHud-${SF}`))
      }), [SF]), CF ? (0, PF.createPortal)(WF, CF) : null
    }
  },
  35380: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => aW,
      h: () => gW,
      k: () => QF,
      l: () => EF,
      n: () => TF,
      p: () => VF,
      s: () => kW,
      v: () => qW,
      z: () => AF
    });
    var CF = SF(46);
    const AF = 5e3,
      uF = 500,
      hF = 3e3;
    let bW = null,
      dF = null,
      PF = null;
    const RF = new Set;

    function iW(FF) {
      bW = FF;
      for (const WF of RF) WF()
    }

    function eF() {
      if (!bW || void 0 !== bW.endedAt) return;
      null !== dF && (clearTimeout(dF), dF = null), iW({
        ...bW,
        endedAt: Date.now()
      });
      const FF = PF;
      PF = null, null === FF || void 0 === FF || FF()
    }

    function EF(FF, WF) {
      let {
        submit: SF,
        reopen: CF
      } = WF;
      null !== dF && clearTimeout(dF), PF = CF, iW({
        ...FF,
        startedAt: Date.now(),
        errors: []
      }), dF = setTimeout(eF, hF), SF()
    }

    function QF() {
      bW && void 0 === bW.endedAt && void 0 === bW.ranAt && (null !== dF && clearTimeout(dF), iW({
        ...bW,
        ranAt: Date.now()
      }), dF = setTimeout(eF, AF))
    }
    const rW = 3;

    function gW(FF) {
      if (!bW || void 0 === bW.ranAt || void 0 !== bW.endedAt || bW.errors.includes(FF) || bW.errors.length >= rW) return;
      const WF = 0 === bW.errors.length;
      iW({
        ...bW,
        errors: [...bW.errors, FF]
      }), WF && (null !== dF && clearTimeout(dF), dF = setTimeout(eF, uF))
    }

    function tW(FF) {
      var WF;
      return (null === (WF = bW) || void 0 === WF ? void 0 : WF.chatKey) === FF ? bW : null
    }

    function TF(FF) {
      const WF = tW(FF);
      return WF && void 0 !== WF.endedAt ? (iW(null), WF) : null
    }

    function aW(FF) {
      var WF;
      (null === (WF = bW) || void 0 === WF ? void 0 : WF.chatKey) === FF && (null !== dF && (clearTimeout(dF), dF = null), PF = null, iW(null))
    }

    function kW(FF) {
      return `Fix this in your change: when it ran, the world showed ${1===FF.length?"this error":"these errors"}: ${FF.join(" ")}`
    }

    function qW(FF) {
      var WF;
      if (void 0 === FF.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const SF = Math.max(1, Math.round(((null !== (WF = FF.endedAt) && void 0 !== WF ? WF : FF.ranAt) - FF.ranAt) / 1e3)),
        CF = `Your change ran in your world for ${SF} ${1===SF?"second":"seconds"}`;
      return 0 === FF.errors.length ? {
        title: "Tested: no errors",
        text: `${CF} without an error.`
      } : {
        title: 1 === FF.errors.length ? "Tested: it showed an error" : `Tested: it showed ${FF.errors.length} errors`,
        text: `${CF} and showed: ${FF.errors.join(" ")}`
      }
    }

    function VF(FF) {
      const [WF, SF] = (0, CF.useState)((() => tW(FF)));
      return (0, CF.useEffect)((() => {
        const WF = () => {
          SF(tW(FF))
        };
        return WF(), RF.add(WF), () => {
          RF.delete(WF)
        }
      }), [FF]), WF
    }
  },
  35384: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      g: () => CF
    });
    const CF = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function AF(FF, WF, SF) {
      return {
        key: FF,
        label: `Code block at ${WF.join(", ")}`,
        codeBlock: !0,
        pos: WF,
        canChangePos: SF
      }
    }
  },
  35371: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF,
      c: () => uF,
      g: () => hF,
      k: () => AF
    });
    const CF = "code block",
      AF = "World Code/";

    function uF(FF) {
      return FF.trim().toLowerCase().startsWith(AF.toLowerCase())
    }

    function hF(FF) {
      return FF.trim().slice(AF.length).replace(/^\.?\//, "")
    }
  },
  35354: (FF, WF, SF) => {
    SF.d(WF, {
      B: () => mW,
      D: () => eF,
      F: () => MF,
      G: () => DF,
      J: () => LF,
      L: () => YF,
      c: () => QF,
      g: () => dF,
      h: () => rW,
      i: () => OF,
      k: () => bW,
      n: () => RF,
      p: () => EF,
      r: () => gW,
      v: () => kW,
      z: () => xW
    });
    var CF = SF(35350),
      AF = SF(35352);
    const uF = "bloxd-world-code-directory-sync",
      hF = "handles",
      bW = "[INVALID SCHEMATIC PLACEHOLDER]";

    function dF(FF, WF) {
      return `${FF}::${WF}`
    }
    const PF = new Set(["node_modules", ".git"]);

    function RF() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function iW() {
      return new Promise(((FF, WF) => {
        const SF = indexedDB.open(uF, 1);
        SF.onupgradeneeded = () => {
          const FF = SF.result;
          FF.objectStoreNames.contains(hF) || FF.createObjectStore(hF)
        }, SF.onsuccess = () => {
          FF(SF.result)
        }, SF.onerror = () => {
          var FF;
          WF(null !== (FF = SF.error) && void 0 !== FF ? FF : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function eF(FF, WF) {
      const SF = await iW();
      try {
        await new Promise(((CF, AF) => {
          const uF = SF.transaction(hF, "readwrite");
          uF.objectStore(hF).put(WF, FF), uF.oncomplete = () => {
            CF()
          }, uF.onerror = () => {
            var FF;
            AF(null !== (FF = uF.error) && void 0 !== FF ? FF : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        SF.close()
      }
    }
    async function EF(FF) {
      const WF = await iW();
      try {
        return await new Promise(((SF, CF) => {
          const AF = WF.transaction(hF, "readonly").objectStore(hF).get(FF);
          AF.onsuccess = () => {
            var FF;
            SF(null !== (FF = AF.result) && void 0 !== FF ? FF : null)
          }, AF.onerror = () => {
            var FF;
            CF(null !== (FF = AF.error) && void 0 !== FF ? FF : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        WF.close()
      }
    }
    async function QF(FF) {
      const WF = await iW();
      try {
        await new Promise(((SF, CF) => {
          const AF = WF.transaction(hF, "readwrite");
          AF.objectStore(hF).delete(FF), AF.oncomplete = () => {
            SF()
          }, AF.onerror = () => {
            var FF;
            CF(null !== (FF = AF.error) && void 0 !== FF ? FF : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        WF.close()
      }
    }
    async function rW(FF) {
      const WF = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await FF.queryPermission(WF) || "granted" === await FF.requestPermission(WF)
    }
    async function gW(FF) {
      if (!RF()) return null;
      try {
        const WF = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await eF(FF, WF), WF
      } catch (WF) {
        if (function(FF) {
            return FF instanceof DOMException && "AbortError" === FF.name
          }(WF)) return null;
        throw WF
      }
    }

    function tW(FF) {
      return FF.startsWith(".") || PF.has(FF)
    }

    function TF(FF) {
      if (!FF) return !0;
      const WF = FF.split("/");
      for (const SF of WF)
        if ("" === SF || "." === SF || ".." === SF) return !1;
      return !0
    }
    async function aW(FF, WF, SF) {
      for await (const [uF, hF] of FF.entries()) {
        if ("directory" === hF.kind) {
          if (tW(uF)) continue;
          const FF = WF ? `${WF}/${uF}` : uF;
          if (!TF(FF)) continue;
          await aW(hF, FF, SF);
          continue
        }
        const FF = WF ? `${WF}/${uF}` : uF;
        if (!(0, CF.n)(FF) && !(0, AF.d)(FF)) continue;
        const bW = await hF.getFile();
        SF[FF] = (0, AF.d)(FF) ? await ZF(bW) : await bW.text()
      }
    }
    async function kW(FF) {
      const WF = {};
      return await aW(FF, "", WF), WF
    }

    function qW(FF) {
      return !(!FF || FF !== FF.trim() || FF.startsWith("/") || FF.includes("\\") || FF.includes("\0")) && TF(FF)
    }
    async function VF(FF, WF, SF) {
      const CF = WF.split("/"),
        AF = CF[CF.length - 1];
      let uF = FF;
      for (let hF = 0; hF < CF.length - 1; hF++) uF = await uF.getDirectoryHandle(CF[hF], {
        create: SF
      });
      return {
        dir: uF,
        fileName: AF
      }
    }
    async function NF(FF, WF, SF) {
      if (!qW(WF)) throw new Error(`Refusing to write unsafe path: ${WF}`);
      const {
        dir: CF,
        fileName: AF
      } = await VF(FF, WF, !0), uF = await CF.getFileHandle(AF, {
        create: !0
      }), hF = await uF.createWritable();
      await hF.write(SF), await hF.close()
    }
    async function DF(FF, WF, SF) {
      const CF = await async function(FF, WF) {
        if (!qW(WF)) return null;
        try {
          const {
            dir: SF,
            fileName: CF
          } = await VF(FF, WF, !1), AF = await SF.getFileHandle(CF), uF = await AF.getFile();
          return await uF.text()
        } catch (SF) {
          if (SF instanceof DOMException && ("NotFoundError" === SF.name || "NotAllowedError" === SF.name)) return null;
          throw SF
        }
      }(FF, WF);
      CF !== SF && await NF(FF, WF, SF)
    }
    async function LF(FF, WF, SF) {
      if (!(0, CF.n)(WF) && !(0, AF.d)(WF)) throw new Error(`Refusing to write non-allowlisted path: ${WF}`);
      if ((0, AF.d)(WF)) {
        if (await oF(FF, WF) === bW) throw new Error(`Move the binary schematic ${WF} outside the linked folder before syncing its placeholder`)
      }
      await NF(FF, WF, SF)
    }
    async function mW(FF, WF) {
      if (!qW(WF)) throw new Error(`Refusing to remove unsafe path: ${WF}`);
      try {
        const {
          dir: SF,
          fileName: CF
        } = await VF(FF, WF, !1);
        await SF.removeEntry(CF)
      } catch (SF) {
        if (SF instanceof DOMException && ("NotFoundError" === SF.name || "NotAllowedError" === SF.name)) return;
        throw SF
      }
    }
    async function OF(FF, WF) {
      if (!qW(WF)) return null;
      try {
        const SF = WF.split("/");
        let CF = FF;
        for (const FF of SF) CF = await CF.getDirectoryHandle(FF);
        return CF
      } catch (SF) {
        if (SF instanceof DOMException && ("NotFoundError" === SF.name || "NotAllowedError" === SF.name)) return null;
        throw SF
      }
    }
    async function xW(FF, WF) {
      if ((0, CF.n)(WF) || (0, AF.d)(WF)) {
        if ((0, AF.d)(WF)) {
          if (await oF(FF, WF) === bW) throw new Error(`Refusing to remove a binary schematic: ${WF}`)
        }
        await mW(FF, WF)
      }
    }
    async function ZF(FF) {
      if (FF.size > 64) return bW;
      const WF = await FF.text();
      return Array.from(WF).some((FF => {
        const WF = FF.charCodeAt(0);
        return WF < 9 || WF > 13 && WF < 32 || 65533 === WF
      })) ? bW : WF
    }
    async function oF(FF, WF) {
      try {
        const {
          dir: SF,
          fileName: CF
        } = await VF(FF, WF, !1);
        return await ZF(await (await SF.getFileHandle(CF)).getFile())
      } catch (SF) {
        if (SF instanceof DOMException && "NotFoundError" === SF.name) return null;
        throw SF
      }
    }
    async function YF(FF, WF) {
      const SF = await kW(FF);
      for (const CF of Object.keys(SF)) CF in WF || (0, AF.d)(CF) || await xW(FF, CF);
      for (const [uF, hF] of Object.entries(WF))((0, CF.n)(uF) || (0, AF.d)(uF)) && await LF(FF, uF, hF)
    }

    function MF(FF, WF) {
      var SF, CF;
      let AF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const uF = null !== (SF = AF.debounceMs) && void 0 !== SF ? SF : 300,
        hF = null !== (CF = AF.pollMs) && void 0 !== CF ? CF : 1e3;
      let bW = !1,
        dF = null,
        PF = null,
        RF = null;
      const iW = () => {
          bW || (dF && clearTimeout(dF), dF = setTimeout((() => {
            dF = null, eF()
          }), uF))
        },
        eF = async () => {
          if (!bW) try {
            if (!await rW(FF, "readwrite")) return;
            const SF = await kW(FF);
            bW || WF(SF)
          } catch (SF) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", SF)
          }
        };
      eF();
      const EF = window.FileSystemObserver;
      if (EF) try {
        RF = new EF((() => {
          iW()
        })), RF.observe(FF, {
          recursive: !0
        })
      } catch (QF) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", QF), RF = null
      }
      return RF || (PF = setInterval((() => {
        iW()
      }), hF)), () => {
        bW = !0, dF && clearTimeout(dF), PF && clearInterval(PF), RF && RF.disconnect()
      }
    }
  },
  35206: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => EF,
      h: () => QF
    });
    var CF = SF(46),
      AF = SF(2279),
      uF = SF(1262),
      hF = SF(1607),
      bW = SF(35144),
      dF = SF(568),
      PF = SF(918),
      RF = SF.n(PF),
      iW = SF(971);
    const eF = {},
      EF = (0, CF.memo)((function() {
        const FF = (0, AF.d)();
        return (0, uF.e)("damagedByOtherPlayer", (WF => {
          let {
            upF: SF,
            direction: CF
          } = WF;
          const AF = SF || "nonDirectional";
          if (eF[AF]) {
            const WF = eF[AF];
            clearTimeout(WF.timeout), WF.direction = CF, WF.timeout = setTimeout((() => {
              delete eF[AF], FF()
            }), 800)
          } else eF[AF] = {
            direction: CF,
            tCF: null,
            timeout: setTimeout((() => {
              delete eF[AF], FF()
            }), 800)
          };
          FF()
        })), (0, hF.b)("kill", (WF => {
          let {
            killer: SF,
            victim: CF
          } = WF;
          const AF = CF.id;
          SF.local && AF && AF in eF && (clearTimeout(eF[AF].timeout), delete eF[AF], FF())
        })), (0, CF.useEffect)((() => {
          const FF = (0, bW.f)("turnDamageIndicators", QF);
          return () => {
            FF();
            for (const FF in eF) clearTimeout(eF[FF].timeout), delete eF[FF]
          }
        }), []), (0, iW.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(eF).map((FF => {
            let [WF, SF] = FF;
            const CF = (0, dF.Q)(SF.direction);
            return (0, iW.jsx)("div", {
              ref: FF => {
                eF[WF] && (eF[WF].tCF = FF)
              },
              className: RF()("DamageIndicator", {
                DamageIndicatorFullCircle: CF
              })
            }, WF)
          }))
        })
      }));

    function QF(FF) {
      for (const WF in eF) {
        const {
          direction: SF,
          tCF: CF
        } = eF[WF];
        if ((0, dF.Q)(SF)) continue;
        const AF = SF - FF;
        CF.style.rotate = `${AF}rad`
      }
    }
  },
  35077: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => rW
    });
    var CF = SF(46),
      AF = SF(61),
      uF = SF(1046),
      hF = SF(918),
      bW = SF.n(hF),
      dF = SF(1510),
      PF = SF(929),
      RF = SF(1141),
      iW = SF(1307),
      eF = SF(1731),
      EF = SF(971);
    const QF = 14;

    function rW(FF) {
      let {
        className: WF,
        triggerElementRef: SF,
        options: hF
      } = FF;
      const {
        t: rW
      } = (0, uF.B)(), [gW, tW] = (0, CF.useState)(!1), [TF, aW] = (0, CF.useState)({
        x: 0,
        y: 0
      }), kW = (0, CF.useRef)(null);
      (0, CF.useEffect)((() => {
        const FF = FF => {
            const WF = QF * (0, dF.getRemInPx)();
            aW({
              x: Math.min(FF.clientX, window.innerWidth - WF - 5),
              y: FF.clientY
            }), tW((FF => !FF))
          },
          WF = FF => {
            var WF;
            null !== (WF = kW.current) && void 0 !== WF && WF.contains(FF.relatedTarget) || tW(!1)
          },
          CF = SF.current;
        return CF.addEventListener("pointerup", FF), CF.addEventListener("mouseleave", WF), () => {
          CF.removeEventListener("pointerup", FF), CF.removeEventListener("mouseleave", WF)
        }
      }), [SF]), (0, CF.useEffect)((() => {
        if (gW) return (0, eF.e)("pointerdown", (FF => {
          !kW.current || kW.current.contains(FF.target) || SF.current.contains(FF.target) || tW(!1)
        }))
      }), [gW, SF]), (0, CF.useLayoutEffect)((() => {
        if (!gW || !kW.current) return;
        const FF = kW.current.getBoundingClientRect().height,
          WF = Math.max(5, window.innerHeight - FF - 5);
        TF.y > WF && aW({
          x: TF.x,
          y: WF
        })
      }), [gW, TF]), (0, RF.w)("popup", kW, (() => {
        tW(!1)
      }), gW);
      const qW = hF.filter((FF => !1 !== FF.show));
      return gW && 0 !== qW.length ? (0, AF.createPortal)((0, EF.jsx)("div", {
        ref: kW,
        className: bW()("FloatingActions", {
          [WF]: WF
        }),
        style: {
          width: `${QF}rem`,
          top: TF.y,
          left: TF.x
        },
        children: qW.map((FF => {
          let {
            icon: WF,
            text: SF,
            onPointerDown: CF,
            analyticsClick: AF
          } = FF;
          return (0, EF.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: FF => {
              void 0 !== AF && (0, iW.d)(AF), CF(FF), tW(!1), FF.stopPropagation()
            },
            children: [(0, EF.jsx)(PF.e, {
              name: WF
            }), (0, EF.jsx)("div", {
              children: rW(SF)
            })]
          }, SF)
        }))
      }), function() {
        var FF;
        return null !== (FF = document.querySelector(".WholeAppWrapperInner")) && void 0 !== FF ? FF : document.body
      }()) : null
    }
  },
  35414: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => dF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(46),
      hF = SF(1546),
      bW = SF(971);
    const dF = (0, uF.forwardRef)((function(FF, WF) {
      let {
        text: SF,
        className: CF,
        children: uF
      } = FF;
      return SF.hasText ? (0, bW.jsx)("div", {
        ref: WF,
        className: AF()("HudTextPanel", CF, {
          NoBackground: !SF.showBackground
        }),
        children: null !== uF && void 0 !== uF ? uF : (0, bW.jsx)(hF.d, {
          text: SF.content
        })
      }) : null
    }))
  },
  35226: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => DA
    });
    var CF = SF(35122),
      AF = SF(46),
      uF = SF(1680),
      hF = SF(3616),
      bW = SF(3618),
      dF = SF(1955),
      PF = SF(1576),
      RF = SF(971);

    function iW(FF) {
      let {
        className: WF,
        style: SF,
        vw: CF,
        maxPx: AF,
        children: uF
      } = FF;
      console.assert("number" === typeof CF && "number" === typeof AF, "vw and maxPx passed to Text must be numbers");
      const hF = window.innerWidth * (CF / 100) > AF ? `${AF}px` : `${CF}vw`;
      return (0, RF.jsx)("div", {
        className: WF,
        style: {
          ...SF,
          fontSize: hF
        },
        children: uF
      })
    }
    var eF = SF(35234),
      EF = SF(1266),
      QF = SF(20),
      rW = SF(1594),
      gW = SF(929);

    function tW(FF) {
      let {
        tasks: WF,
        lastDisplayedTasks: SF
      } = FF;
      return (0, RF.jsx)(RF.Fragment, {
        children: Object.keys(WF).map((FF => (0, RF.jsx)(TF, {
          task: WF[FF],
          lastDisplayedAs: SF[FF]
        }, WF[FF].text)))
      })
    }

    function TF(FF) {
      let {
        task: WF,
        lastDisplayedAs: SF
      } = FF;
      const [CF, uF] = (0, AF.useState)(null !== SF && void 0 !== SF && SF.progress ? SF.progress / WF.goal : 0), [hF, bW] = (0, AF.useState)(!1), [dF, PF] = (0, AF.useState)(WF.claimed || !1);
      return (0, AF.useEffect)((() => {
        uF(WF.progress / WF.goal)
      }), [WF.progress, WF.goal]), dF ? null : (0, RF.jsxs)("div", {
        className: "Task",
        children: [(0, RF.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, RF.jsx)(iW, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: WF.text
          })
        }), WF.progress < WF.goal ? (0, RF.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== CF ? (0, RF.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * CF + "%"
            }
          }) : null, (0, RF.jsx)("div", {
            className: "TaskProgressText",
            children: `${WF.progress}/${WF.goal}`
          })]
        }) : (0, RF.jsx)(EF.k, {
          className: "ClaimRewardButton",
          onClick: () => {
            bW(!0)
          },
          children: (0, RF.jsx)(iW, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), hF ? (0, RF.jsx)(aW, {
          task: WF,
          close: () => {
            WF.claimed = !0, PF(!0), bW(!1)
          }
        }) : null]
      })
    }

    function aW(FF) {
      let {
        task: WF,
        close: SF
      } = FF;
      const [CF, uF] = (0, AF.useState)({}), [hF, bW] = (0, AF.useState)("closed");
      (0, AF.useEffect)((() => {
        let FF;
        return "animStart" === hF && (FF = setTimeout((() => {
          bW("animEnd")
        }), 700)), () => {
          clearTimeout(FF)
        }
      }), [hF]), (0, eF.d)((() => {
        PF.gameBridge.send("completeTask", WF.text)
      }));
      const iW = (0, dF.k)("currencyAmounts");
      return (0, RF.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === hF)
            if (0 === WF.rewards.length) SF(), PF.gameBridge.send("completeTask", WF.text);
            else {
              const FF = {
                ...rW.d.get("currencyAmounts")
              };
              for (const WF in CF) FF[WF] = {
                ...FF[WF],
                amount: FF[WF].amount + CF[WF]
              };
              rW.d.apply({
                currencyAmounts: FF
              }), bW("closed")
            }
          else "closed" === hF && (uF(WF.rewards.pop()), bW("animStart"))
        },
        children: [(0, RF.jsx)("img", {
          className: "Chest",
          alt: "closed" !== hF ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==hF?"open":"closed"}.png`
        }), (0, RF.jsx)("div", {
          className: "Rewards",
          children: "closed" !== hF ? Object.keys(CF).map((FF => {
            const WF = null === iW || void 0 === iW ? void 0 : iW[FF];
            return !WF || WF.hidden ? null : (0, RF.jsxs)("div", {
              className: "Reward",
              children: [(0, RF.jsx)(gW.e, {
                name: WF.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: WF.iconColour
                }
              }), (0, RF.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === hF ? 0 : CF[FF]
              })]
            }, FF)
          })) : null
        }), "animStart" === hF ? (0, RF.jsx)(kW, {}) : null, (0, RF.jsx)("div", {
          className: "ChestsLeft",
          children: WF.rewards.length
        })]
      })
    }

    function kW() {
      const [FF, WF] = (0, AF.useState)(0);
      (0, AF.useEffect)((() => {
        WF(1)
      }), []);
      return (0, RF.jsx)(RF.Fragment, {
        children: Array.from({
          length: 40
        }).map(((WF, SF) => (0, RF.jsx)(gW.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * FF * Math.cos(SF / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * FF * Math.sin(SF / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === FF ? 1 : 0
          }
        }, SF)))
      })
    }
    QF.j.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const FF = new Image,
          WF = new Image;
        FF.src = "/textures/miscImages/Treasure Chest open.png", WF.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var qW = SF(2332),
      VF = SF(996),
      NF = SF(1546),
      DF = SF(1262),
      LF = SF(271),
      mW = SF(1607),
      OF = SF(1186);

    function xW(FF) {
      var WF, SF;
      let {
        byId: CF,
        localId: AF
      } = FF;
      return null === AF ? null : null !== (WF = null === (SF = CF[AF]) || void 0 === SF ? void 0 : SF.name) && void 0 !== WF ? WF : null
    }

    function ZF(FF) {
      let {
        lbStats: WF,
        storedState: SF = {}
      } = FF;
      const {
        userContext: CF
      } = (0, VF.b)(), uF = (0, mW.c)("players", xW), [hF, bW] = (0, AF.useState)(SF.selectedCat || (null === WF || void 0 === WF ? void 0 : WF[0]) || null), [dF, iW] = (0, AF.useState)(SF.selectedTimeframe || "Today"), [eF, EF] = (0, AF.useState)(null);
      (0, AF.useEffect)((() => {
        null === hF && null !== WF && WF.length > 0 && bW(WF[0])
      }), [WF, hF]);
      const [QF, rW] = (0, AF.useState)(SF.seeingTop || !1), [gW, tW] = (0, AF.useState)(!1), TF = (0, AF.useCallback)((() => {
        null !== hF && null !== dF && (PF.gameBridge.send("requestLeaderboard", {
          category: hF.value,
          timeframe: dF,
          seeTop: QF
        }), kW(!0), MF && cW(null))
      }), [hF, dF, SF, QF]);
      (0, AF.useEffect)((() => {
        TF(), SF.selectedCat = hF, SF.selectedTimeframe = dF, SF.seeingTop = QF
      }), [hF, dF, SF, QF, TF]), (0, AF.useEffect)((() => {
        if ((null === eF || void 0 === eF ? void 0 : eF.length) > 0)
          if (QF) QF && tW(null === ZF(eF));
          else {
            for (const FF of eF)
              if (1 === FF.place) return void tW(!1);
            tW(!0)
          }
      }), [eF, QF]), (0, DF.e)("leaderboardResponse", (FF => {
        let {
          category: SF,
          timeframe: CF,
          data: AF
        } = FF;
        for (let uF = 0; uF < WF; uF++)
          if (WF[uF].value === SF) {
            bW(WF[uF]);
            break
          } iW(CF), EF(AF), kW(!1)
      }));
      const [aW, kW] = (0, AF.useState)(!0);

      function ZF(FF) {
        const WF = xW(PF.gameBridge.latest("players"));
        for (let SF = 0; SF < FF.length; SF++)
          if (FF[SF].name === WF) return FF[SF].place;
        return null
      }
      const [oF, YF] = (0, AF.useState)(!1), [MF, cW] = (0, AF.useState)(null);
      (0, AF.useEffect)((() => {
        if (eF && !oF) {
          const FF = ZF(eF);
          FF < (SF.lastSeenPlayerPlace || 0) && cW(SF.lastSeenPlayerPlace - FF), YF(!0)
        }
      }), [eF, SF, oF]), (0, AF.useEffect)((() => () => {
        eF && (SF.lastSeenPlayerPlace = ZF(eF))
      }), [eF, SF]);
      const GF = (0, AF.useRef)(null),
        [zW, IF] = (0, AF.useState)(void 0);
      return (0, AF.useEffect)((() => {
        var FF, WF;
        zW !== (null === (FF = GF.current) || void 0 === FF ? void 0 : FF.offsetHeight) && IF(null === (WF = GF.current) || void 0 === WF ? void 0 : WF.offsetHeight)
      })), CF.isLoggedIn() ? (0, RF.jsxs)(RF.Fragment, {
        children: [(0, RF.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, RF.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, RF.jsx)(qW.c, {
              options: WF.map((FF => ({
                label: FF.label,
                value: FF.value
              }))),
              value: hF,
              onChange: FF => {
                bW(FF)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, RF.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, RF.jsx)(qW.c, {
              options: LF.Mc.map((FF => ({
                value: FF,
                label: FF,
                className: "LBDropdownMenuItem"
              }))),
              value: dF,
              onChange: FF => {
                iW(FF.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), gW ? (0, RF.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              rW(!QF)
            },
            children: QF ? "See Yourself" : "See Top"
          }) : null]
        }), (0, RF.jsx)("div", {
          className: "LBTableWrapper",
          children: aW ? (0, RF.jsx)("div", {
            className: "LoaderContainer",
            children: (0, RF.jsx)(OF.c, {})
          }) : null === MF ? (0, RF.jsx)(RF.Fragment, {
            children: (0, RF.jsxs)("table", {
              className: "LBTable",
              children: [(0, RF.jsx)("thead", {
                className: "LBTableTHead",
                ref: GF,
                children: (0, RF.jsxs)("tr", {
                  children: [(0, RF.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, RF.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, RF.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: hF.label.toUpperCase()
                  })]
                })
              }), (0, RF.jsx)("tbody", {
                children: eF.map((FF => (0, RF.jsxs)("tr", {
                  className: "LBTableTR " + (FF.name === uF ? "LBTableTRYou" : ""),
                  children: [(0, RF.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${FF.place}`
                  }), (0, RF.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, RF.jsx)(NF.d, {
                      text: [{
                        entityName: FF.name
                      }]
                    })
                  }), (0, RF.jsx)("td", {
                    className: "LBTableTD",
                    children: FF.stat
                  })]
                }, FF.name)))
              })]
            })
          }) : (0, RF.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              cW(null)
            },
            children: (0, RF.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, RF.jsx)("div", {
                className: "TriangleUp"
              }), (0, RF.jsx)("div", {
                className: "LBIncreaseText",
                children: `${MF} Place${MF>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, RF.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, RF.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, RF.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var oF = SF(990),
      YF = SF(89),
      MF = SF(33),
      cW = SF(2610);
    const GF = (0, AF.memo)((function(FF) {
      let {
        show: WF,
        onClose: SF
      } = FF;
      (0, oF.e)();
      const CF = (0, dF.k)("_tasks"),
        uF = (0, dF.k)("_availableLeaderboards"),
        [PF, iW] = (0, AF.useState)({});
      CF && Object.keys(CF).length > 0 && 0 === Object.keys(PF).length && iW(CF);
      const [eF] = (0, AF.useState)({
        tasks: {},
        leaderboard: {}
      }), EF = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!CF && Object.keys(CF).length > 0,
          content: (0, RF.jsx)(tW, {
            tasks: CF,
            lastDisplayedTasks: PF
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === uF || void 0 === uF ? void 0 : uF.length) > 0,
          content: (0, RF.jsx)(ZF, {
            lbStats: uF,
            storedState: eF.leaderboard
          })
        }
      };

      function QF() {
        for (const FF in EF)
          if (EF[FF].getIsDefined()) return FF;
        return null
      }
      const [rW, gW] = (0, AF.useState)(QF());

      function TF() {
        iW({
          ...CF
        }), SF()
      }(0, AF.useEffect)((() => {
        rW || gW(QF())
      }), [QF()]), (0, bW.b)(!0, rW && WF), (0, AF.useEffect)((() => {
        WF && !rW && (console.log("CLOSE"), TF())
      }), [WF, rW]);
      const [aW, kW] = (0, AF.useState)(!1);
      return (0, AF.useEffect)((() => {
        WF && rW && !aW && kW(!0)
      }), [WF, aW, rW]), (0, AF.useEffect)((() => {
        !aW && CF && "tasks" !== rW && gW("tasks")
      }), [aW, CF, rW]), (0, RF.jsx)(RF.Fragment, {
        children: rW ? (0, RF.jsx)(cW.b, {
          className: "RetentionFeaturesWrapper",
          show: WF,
          children: (0, RF.jsxs)(hF.b, {
            close: TF,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, RF.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, RF.jsx)(IF, {}), (0, RF.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, RF.jsx)(zW, {
                  setCategory: gW,
                  menuCategories: EF,
                  selectedCat: rW
                }), (0, RF.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: EF[rW].content
                })]
              })]
            }), (0, RF.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: YF.featureFlags.useDiscord && (0, RF.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, RF.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, RF.jsx)(fF, {
                    tasks: CF
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function zW(FF) {
      let {
        selectedCat: WF,
        setCategory: SF,
        menuCategories: CF
      } = FF;
      return (0, RF.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(CF).map((FF => CF[FF].getIsDefined() ? (0, RF.jsx)("div", {
          className: "MenuHeaderCategory " + (FF === WF ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            SF(FF)
          },
          children: CF[FF].Title
        }, FF) : null))
      })
    }

    function IF() {
      const FF = (0, dF.k)("currencyAmounts");
      return (0, RF.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== FF && void 0 !== FF ? FF : {}).map((WF => {
          const SF = FF[WF];
          return SF.hidden ? null : (0, RF.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, RF.jsx)(gW.e, {
              name: SF.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: SF.iconColour
              }
            }), (0, RF.jsx)("div", {
              className: "UiCurrencyAmount",
              children: SF.amount
            })]
          }, WF)
        }))
      })
    }

    function fF(FF) {
      let {
        tasks: WF
      } = FF;
      return (0, RF.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, RF.jsx)(gW.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            MF.h.setItem("DiscordPressed", !0), PF.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in WF && QF.j.Uu("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, RF.jsx)(uF.b, {})]
      })
    }
    var yW = SF(8153),
      sF = SF(35236),
      nF = SF(2344),
      HF = SF(2350),
      KF = SF(1621);
    const wF = (FF, WF) => {
        (0, AF.useEffect)((() => {
          setTimeout((() => {
            FF && FF.current && FF.current.focus()
          }), 1)
        }), [WF])
      },
      XF = (0, AF.memo)((function(FF) {
        let {
          isInputActive: WF,
          onClose: SF,
          onChange: CF,
          textAreaRef: AF,
          fontSize: uF,
          lineHeight: hF,
          currText: bW
        } = FF;
        return (0, RF.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, RF.jsx)("img", {
            src: `${nF.e.getTexture("board_full",HF.j.BLOCK).url}`,
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, RF.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: bW,
            ref: AF,
            style: {
              fontSize: `${uF}rem`,
              lineHeight: `${hF}rem`
            },
            onKeyDown: FF => {
              var WF;
              "Escape" !== FF.key && (FF.stopPropagation(), "Tab" === FF.key && function(FF) {
                FF.preventDefault();
                const WF = FF.target,
                  {
                    value: SF
                  } = WF;
                let CF = WF.selectionStart,
                  AF = WF.selectionEnd,
                  uF = SF.slice(CF, AF);
                if (!uF.includes("\n") && !FF.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; CF > 0 && "\n" !== SF[CF - 1];) CF--;
                const hF = "\n" === SF[AF - 1];
                hF && AF--;
                uF = SF.slice(CF, AF);
                const bW = uF.split("\n").map((WF => FF.shiftKey ? WF.replace(/^\t/, "") : "\t" + WF)).join("\n");
                if (FF.shiftKey && SF.slice(CF, AF) === bW) return;
                let {
                  selectionStart: dF
                } = WF;
                WF.setSelectionRange(CF, AF), dF > CF && (!FF.shiftKey || "\t" === uF[0]) && (dF += FF.shiftKey ? -1 : 1);
                AF = CF + bW.length + (hF ? 1 : 0), document.execCommand("insertText", !1, bW), WF.setSelectionRange(dF, AF)
              }(FF), /^F\d+$/i.test(FF.code) && null !== (WF = KF.z.OpenCodeEditor) && void 0 !== WF && WF.includes(FF.code) && SF())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: CF
          })]
        })
      }));

    function UF(FF) {
      return 1.3 * FF
    }
    var BF = SF(1507);
    const jW = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(null), [dF, iW] = (0, AF.useState)(""), [eF, QF] = (0, AF.useState)(0), [rW, gW] = (0, AF.useState)(null), [tW, TF] = (0, AF.useState)({
          text: "",
          textSize: 0
        }), aW = (FF, WF) => rW ? (0, sF.m)(FF, WF, rW.width, rW.height) : (0, sF.g)(FF, WF), kW = FF => {
          iW(aW(dF, FF)), QF(FF), MF.h.setItem("lastBoardTextSize", FF)
        }, qW = () => {
          CF(), rW && dF === tW.text && eF === tW.textSize || PF.gameBridge.send("writeOnBoard", {
            pos: uF,
            text: dF,
            textSize: eF
          })
        };
        (0, mW.b)("boardEditRequested", (FF => {
          var AF, uF;
          if (!YF.featureFlags.canSeePlayerWrittenText) return;
          if (null === FF) return bW(null), void(WF && CF());
          const {
            pos: hF,
            noticeboardSpan: dF,
            text: PF
          } = FF;
          bW(hF), gW(dF), iW(PF);
          const RF = null !== (AF = null !== (uF = FF.textSize) && void 0 !== uF ? uF : MF.h.getItem("lastBoardTextSize")) && void 0 !== AF ? AF : 0;
          QF(RF), TF({
            text: PF,
            textSize: RF
          }), MF.h.setItem("lastBoardTextSize", RF), SF()
        }));
        const VF = (0, AF.useRef)(null);
        wF(VF, WF), (0, BF.r)(VF, {
          kind: "sign",
          submit: qW
        });
        const NF = function(FF, WF) {
            const SF = sF.d[FF];
            if (!WF) return SF.uiFontSize;
            const {
              numLines: CF,
              charsPerLine: AF
            } = (0, sF.v)(WF.width, WF.height, FF);
            return SF.uiFontSize * Math.min(SF.charsPerLine / AF, SF.numLines / CF)
          }(eF, rW),
          DF = UF(NF);
        return (0, RF.jsxs)(hF.b, {
          className: "WriteOnBoardBg",
          close: qW,
          escDoesExit: !0,
          show: WF,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, RF.jsx)(XF, {
            isInputActive: () => WF,
            onClose: qW,
            onChange: FF => {
              iW(aW(FF.target.value, eF))
            },
            textAreaRef: VF,
            fontSize: NF,
            lineHeight: DF,
            currText: dF
          }), (0, RF.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, RF.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, RF.jsx)(EF.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                kW(0)
              },
              disabled: 0 === eF,
              children: "Small"
            }), (0, RF.jsx)(EF.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                kW(1)
              },
              disabled: 1 === eF,
              children: "Medium"
            }), (0, RF.jsx)(EF.e, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                kW(2)
              },
              disabled: 2 === eF,
              children: "Large"
            })]
          })]
        })
      })),
      vW = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(""), dF = () => {
          CF(), PF.gameBridge.send("writeNameTag", uF)
        };
        (0, DF.e)("EditNameTag", (FF => {
          YF.featureFlags.canSeePlayerWrittenText && null !== FF && (bW(FF), SF())
        }));
        const iW = (0, AF.useRef)(null);
        wF(iW, WF), (0, BF.r)(iW, {
          kind: "nameTag",
          submit: dF
        });
        const eF = sF.B.nameTag.uiFontSize,
          QF = UF(eF);
        return (0, RF.jsxs)(hF.b, {
          className: "WriteOnBoardBg",
          close: dF,
          escDoesExit: !0,
          show: WF,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, RF.jsx)("div", {
            className: "NameTagTrim",
            children: (0, RF.jsx)(XF, {
              isInputActive: () => WF,
              onClose: dF,
              onChange: FF => {
                const WF = FF.target.value.replaceAll("\n", "");
                bW((0, sF.q)(WF, "nameTag"))
              },
              textAreaRef: iW,
              fontSize: eF,
              lineHeight: QF,
              currText: uF
            })
          }), (0, RF.jsx)(EF.e, {
            onClick: dF,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      JF = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(""), [dF, iW] = (0, AF.useState)(0), [eF, QF] = (0, AF.useState)(!1), [rW, gW] = (0, AF.useState)(["", "", "", "", "", "", "", "", "", ""]), [tW, TF] = (0, AF.useState)("Title"), [aW, kW] = (0, AF.useState)(!0), [qW, VF] = (0, AF.useState)(!1);
        (0, DF.e)("EditBook", (FF => {
          let {
            pages: WF,
            title: CF,
            isPublished: AF
          } = FF;
          var uF;
          YF.featureFlags.canSeePlayerWrittenText && (null !== WF ? (gW(WF), bW(null !== (uF = WF[0]) && void 0 !== uF ? uF : ""), TF(CF), iW(0), QF(!1), kW(!AF), VF(!1), SF()) : gW(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const NF = (0, AF.useRef)(null),
          LF = (0, AF.useRef)(null);
        wF(NF, WF), (0, BF.r)(NF, {
          kind: "book"
        }), (0, BF.r)(LF, {
          kind: "iK"
        });
        const mW = sF.B.book.uiFontSize,
          OF = UF(mW),
          xW = WF ? nF.e.getTexture("book_page", HF.j.ITEM).url : void 0,
          ZF = () => {
            (aW || qW) && PF.gameBridge.send("writeBook", {
              pages: [...rW],
              title: tW,
              published: !aW && qW
            })
          },
          oF = FF => {
            eF && (rW[dF] = uF, QF(!1)), bW(rW[FF]), iW(FF)
          };
        return (0, RF.jsxs)(hF.b, {
          className: "WriteOnBoardBg",
          close: () => {
            CF(), rW[dF] = uF, ZF()
          },
          escDoesExit: !0,
          show: WF,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, RF.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, RF.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: tW,
              ref: LF,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${OF}rem`
              },
              onKeyDown: FF => {
                aW && FF.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: FF => {
                let WF = FF.target.value;
                WF = (0, sF.q)(WF, "iK"), TF(WF)
              },
              readOnly: !aW
            }), (0, RF.jsx)("img", {
              src: xW,
              alt: "book_page",
              className: "WriteOnBookPageImg"
            }), (0, RF.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, RF.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: uF,
                ref: NF,
                style: {
                  fontSize: `${mW}rem`,
                  lineHeight: `${OF}rem`
                },
                onKeyDown: FF => {
                  aW && FF.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: FF => {
                  const WF = FF.target.value;
                  bW((0, sF.q)(WF, "book")), QF(!0)
                },
                readOnly: !aW
              })
            })]
          }), (0, RF.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, RF.jsx)(EF.e, {
              disabled: 0 === dF,
              onClick: () => {
                oF(dF - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, RF.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, RF.jsx)(EF.e, {
              disabled: 9 === dF,
              onClick: () => {
                oF(dF + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, RF.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, RF.jsx)(EF.e, {
              onClick: () => {
                kW(!aW), VF(!0)
              },
              className: "BookNavButton",
              children: aW ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var pF = SF(35133),
      lF = SF(7608),
      FW = SF(1223),
      WW = SF(1046),
      SW = SF(1563);

    function CW(FF) {
      let {
        show: WF
      } = FF;
      (0, DF.i)(pF.e, (0, pF.l)());
      const {
        t: SF
      } = (0, WW.B)(), CF = (0, AF.useRef)(null);
      (0, AF.useEffect)((() => {
        var FF, SF;
        const AF = WF ? (0, pF.D)() : null;
        if (!AF || !(0, FW.f)()) return;
        const uF = (0, pF.l)().findIndex((FF => FF.id === AF));
        (0, lF.m)(null !== (FF = null === (SF = CF.current) || void 0 === SF ? void 0 : SF.children[uF]) && void 0 !== FF ? FF : null)
      }), [WF]);
      const uF = (0, pF.l)();
      return 0 === uF.length ? null : (0, RF.jsx)("div", {
        ref: CF,
        className: "ClientGameInventoryButtons",
        onPointerDown: FF => {
          FF.stopPropagation()
        },
        onPointerUp: FF => {
          FF.stopPropagation()
        },
        children: uF.map((FF => {
          const WF = SF(FF.labelKey);
          return (0, RF.jsxs)(EF.k, {
            className: FF.className,
            disabled: FF.disabled,
            onClick: () => {
              (0, pF.t)(FF)
            },
            ariaLabel: FF.iconOnly ? WF : void 0,
            title: FF.iconOnly ? WF : void 0,
            children: [FF.icon && (0, RF.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === FF.icon.kind && (0, RF.jsx)(SW.b, {
                itemName: FF.icon.name,
                amount: 0
              }), "image" === FF.icon.kind && (0, RF.jsx)("img", {
                src: FF.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === FF.icon.kind && (0, RF.jsx)(gW.e, {
                name: FF.icon.name
              })]
            }), !FF.iconOnly && WF]
          }, FF.id)
        }))
      })
    }
    var AW = SF(35243),
      uW = SF(2155),
      hW = SF(8220),
      bS = SF(35044),
      dW = SF(35041);
    let PW = null;
    window.setShowInventoryAdsOverride = FF => {
      PW = FF
    };
    const RW = 24e4;
    var iS = SF(1572);

    function eW(FF) {
      var WF;
      let {
        draggedInfo: {
          name: SF,
          attributes: CF,
          amount: AF
        },
        toAddRef: uF
      } = FF;
      return (0, RF.jsx)("div", {
        className: "DraggedInvenItem",
        ref: uF,
        children: (0, RF.jsx)(SW.b, {
          itemName: SF,
          amount: AF,
          enchantmentTier: null === CF || void 0 === CF || null === (WF = CF.customAttributes) || void 0 === WF ? void 0 : WF.enchantmentTier,
          bar: (0, iS.k)(CF)
        })
      })
    }

    function EW(FF) {
      let {
        className: WF = "",
        displayInfo: SF,
        domRef: CF
      } = FF;
      return (0, RF.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${WF}`,
        ref: CF,
        children: [(0, RF.jsx)(NF.d, {
          text: (0, LF.wb)(SF.name, {
            fontStyle: SF.fontStyle
          })
        }), (0, RF.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, RF.jsx)(NF.d, {
            text: SF.desc
          })
        })]
      })
    }

    function QW(FF) {
      let {
        info: WF,
        draggedInfo: SF
      } = FF;
      return (0, RF.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        style: {
          left: WF.initTouchX,
          top: WF.initTouchY
        },
        children: [(0, RF.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: SF.amount / WF.maxAmount * 100 + "%"
          }
        }), (0, RF.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [SF.amount, "/", WF.maxAmount]
        })]
      })
    }
    var rS = SF(918),
      gS = SF.n(rS),
      tS = SF(161);
    const TW = (0, AF.memo)((function(FF) {
      let {
        show: WF,
        onOpen: SF,
        onClose: CF
      } = FF;
      const uF = (0, AF.useRef)({
          pos: null
        }),
        [bW, dF] = (0, AF.useState)([0, 0, 0, 0]),
        {
          userContext: iW
        } = (0, VF.b)();
      (0, mW.b)("ironChestOpenRequested", (FF => {
        let {
          pos: WF,
          ownerDbId: CF,
          cachedPasskey: AF
        } = FF;
        if (uF.current.pos = WF, CF !== iW.whamm) return null !== AF ? (dF(AF), void eF(AF)) : void SF();
        eF(bW)
      })), (0, mW.b)("localEffectUpdated", (FF => {
        "Thief" === FF && CF()
      }));
      const eF = FF => {
        const {
          pos: WF
        } = uF.current;
        PF.gameBridge.send("openIronChest", {
          pos: WF,
          bR: FF
        })
      };
      return (0, RF.jsx)(hF.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: CF,
        escDoesExit: !0,
        show: WF,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, RF.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, RF.jsx)(aS, {
            bR: bW,
            onPasskeyUpdated: dF,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              eF(bW)
            }
          })
        })
      })
    }));

    function aS(FF) {
      let {
        className: WF = "",
        bR: SF,
        onPasskeyUpdated: CF,
        confirmText: AF,
        onConfirm: uF
      } = FF;
      const {
        t: hF
      } = (0, WW.B)();
      return (0, RF.jsxs)("div", {
        className: `${WF} IronChestPasskeyInput`,
        children: [(0, RF.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: hF("ironChest:passkeyInputTitle")
        }), (0, RF.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(tS.h.ironChestPasskeyLength).fill(0).map(((FF, WF) => (0, RF.jsx)(kS, {
            digit: SF[WF],
            onPasskeyDigitUpdated: FF => {
              const AF = [...SF];
              AF[WF] = FF, CF(AF)
            }
          }, WF)))
        }), (0, RF.jsx)(EF.k, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: uF,
          children: hF(AF)
        })]
      })
    }

    function kS(FF) {
      let {
        digit: WF,
        onPasskeyDigitUpdated: SF
      } = FF;
      return (0, RF.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, RF.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, RF.jsx)(EF.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              SF(LF.c.mod(WF + 1, 10))
            },
            children: (0, RF.jsx)(gW.e, {
              name: "angle-up"
            })
          }), (0, RF.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: WF
          }), (0, RF.jsx)(EF.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              SF(LF.c.mod(WF - 1, 10))
            },
            children: (0, RF.jsx)(gW.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var qS = SF(8218),
      VW = SF(35280),
      NW = SF(35034);

    function DW(FF) {
      let {
        specialItemInfo: WF,
        setHovered: SF,
        pointerDown: CF,
        pointerUp: uF,
        enchantingTablePosition: hF,
        enchantingTableBlockName: bW
      } = FF;
      const {
        t: iW
      } = (0, WW.B)(), [eF, QF] = (0, AF.useState)(null), [rW, gW] = (0, AF.useState)(null), tW = (0, dF.k)("auraPerLevel"), TF = Math.floor((0, mW.e)("aura") / tW);
      (0, AF.useEffect)((() => {
        if (!WF) return void QF(null);
        let FF = !0;
        return PF.gameBridge.query("enchantingOffer", {
          slot: WF.idx,
          name: WF.name,
          blockName: bW
        }).then((SF => {
          var CF, AF;
          let {
            perks: uF,
            options: hF
          } = SF;
          if (!FF) return;
          const bW = {
            isEnchantable: uF.length > 0,
            possibleEnchantments: uF,
            options: hF.map((FF => {
              let {
                level: WF,
                odds: SF
              } = FF;
              return {
                level: WF,
                possibilities: Object.fromEntries(SF.map(((FF, WF) => [`Tier ${WF+1}`, FF])))
              }
            })),
            isAlreadyEnchanted: uF.length > 0 && void 0 !== (null === (CF = WF.attributes) || void 0 === CF || null === (AF = CF.customAttributes) || void 0 === AF ? void 0 : AF.enchantmentTier)
          };
          QF(bW), (FF => {
            const WF = FF.options.map((FF => Object.entries(FF.possibilities).map((FF => {
              let [WF, SF] = FF;
              return {
                str: `${WF}: ${SF>0?SF<.01?SF.toPrecision(1):SF.toFixed(2):0}%\n`,
                style: {
                  color: LF.sb[WF]
                }
              }
            }))));
            gW(WF)
          })(bW)
        })), () => {
          FF = !1
        }
      }), [WF, hF, bW]);
      const aW = [];
      for (let AF = 0; AF < VW.b; AF++) {
        const FF = null === eF || void 0 === eF ? void 0 : eF.options[AF],
          CF = !FF || FF.level > TF;
        aW.push((0, RF.jsx)(EF.e, {
          className: "EnchantmentButton",
          onPointerEnter: FF ? FF => null === SF || void 0 === SF ? void 0 : SF()(!0, {
            name: "",
            desc: rW[AF]
          }, FF) : void 0,
          onPointerLeave: FF ? () => null === SF || void 0 === SF ? void 0 : SF()(!1) : void 0,
          onClick: CF ? void 0 : () => {
            PF.gameBridge.send("enchantItem", {
              slot: WF.idx,
              level: FF.level,
              tablePos: hF
            }), QF(null)
          },
          disabled: CF,
          children: FF ? (0, RF.jsxs)(RF.Fragment, {
            children: [(0, RF.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, RF.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [iW("enchantments:cost"), ": "]
              }), " ", iW("enchantments:levels", {
                level: FF.level
              })]
            }), (0, RF.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, RF.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, RF.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: iW("enchantments:tier")
                }), Object.entries(FF.possibilities).map((FF => {
                  let [WF, SF] = FF;
                  return 0 === SF ? null : (0, RF.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: LF.sb[WF]
                    },
                    children: WF
                  }, WF)
                }))]
              }), (0, RF.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, RF.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: iW("enchantments:odds")
                }), Object.entries(FF.possibilities).map((FF => {
                  let [WF, SF] = FF;
                  return 0 === SF ? null : (0, RF.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: LF.sb[WF]
                    },
                    children: [SF > 0 && SF < .1 ? "<0.1" : SF.toFixed(0 < SF && SF < .95 ? 1 : 0), "%"]
                  }, WF)
                }))]
              })]
            })]
          }) : !1 === (null === eF || void 0 === eF ? void 0 : eF.isEnchantable) ? (0, RF.jsx)("h1", {
            className: "EnchantmentLevels",
            children: iW("enchantments:notEnchantable")
          }) : (0, RF.jsx)("h1", {
            className: "EnchantmentLevels",
            children: iW("enchantments:enterItem")
          })
        }, AF))
      }
      return (0, RF.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, RF.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: bW
        }), (0, RF.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, RF.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, RF.jsx)(NW.d, {
              idx: dW.g,
              setHovered: FF => {
                null === SF || void 0 === SF || SF(dW.g)(FF)
              },
              pointerDown: CF,
              pointerUp: uF,
              draggedInfo: null,
              specialItemInfo: WF,
              variation: "Enchanting Table"
            }), eF && eF.possibleEnchantments.length > 0 && (0, RF.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, RF.jsx)("h2", {
                children: "Possible Perks:"
              }), eF.possibleEnchantments.map((FF => (0, RF.jsxs)(AF.Fragment, {
                children: [(0, RF.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, RF.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, RF.jsx)(SW.b, {
                      itemName: `${FF} Enchantment`,
                      amount: 1
                    })
                  }), (0, RF.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: FF
                  })]
                }), (0, RF.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: iW((0, qS.j)(FF).translationKey)
                })]
              }, FF)))]
            })]
          }), (0, RF.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [eF && eF.isAlreadyEnchanted && (0, RF.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: iW("enchantments:alreadyEnchanted")
            }), aW]
          })]
        })]
      })
    }
    var LW = SF(35288);

    function mS(FF) {
      var WF;
      let {
        specialItemInfo: SF,
        setSpecialItemInfo: CF,
        setHovered: uF,
        pointerDown: hF,
        pointerUp: bW
      } = FF;
      const {
        t: dF
      } = (0, WW.B)(), iW = (0, mW.c)("inventory", (FF => FF.freeSlots)), [eF, QF] = (0, AF.useState)(null);
      (0, AF.useEffect)((() => {
        if (SF) {
          const FF = (0, LW.d)(SF.name, SF.amount);
          QF({
            salvageable: !!FF,
            produces: FF
          })
        } else QF(null)
      }), [SF, null === SF || void 0 === SF ? void 0 : SF.name, null === SF || void 0 === SF ? void 0 : SF.amount]);
      const rW = !!SF && !(null === eF || void 0 === eF || !eF.salvageable) && !(null !== (WF = eF.produces) && void 0 !== WF && WF.some((FF => {
        let {
          amt: WF
        } = FF;
        return WF < 1
      })));
      return (0, RF.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, RF.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: dF("item:salvagingTable")
        }), (0, RF.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, RF.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, RF.jsx)(NW.d, {
              idx: dW.g,
              setHovered: FF => {
                null === uF || void 0 === uF || uF(dW.g)(FF)
              },
              pointerDown: hF,
              pointerUp: bW,
              draggedInfo: null,
              specialItemInfo: SF,
              variation: "Salvaging Table"
            })
          }), (0, RF.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, RF.jsx)(EF.e, {
              className: "SalvageButton",
              onClick: rW ? () => {
                const {
                  idx: FF,
                  name: WF,
                  amount: AF
                } = SF;
                PF.gameBridge.send("salvageItem", {
                  slot: FF,
                  name: WF,
                  amount: AF
                }) && (QF(null), CF(null))
              } : void 0,
              disabled: !rW,
              children: eF ? eF.salvageable ? eF.produces.some((FF => {
                let {
                  amt: WF
                } = FF;
                return WF < 1
              })) ? (0, RF.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, RF.jsx)("div", {
                  className: "SalvageText Error",
                  children: dF("salvagingTable:notEnoughResources")
                })
              }) : iW < eF.produces.length ? (0, RF.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, RF.jsx)("div", {
                  className: "SalvageText Error",
                  children: dF("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, RF.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, RF.jsx)("div", {
                  className: "SalvageText",
                  children: dF("salvagingTable:salvage")
                }), (0, RF.jsx)("div", {
                  className: "SalvageIcons",
                  children: eF.produces.map(((FF, WF) => {
                    let {
                      item: SF,
                      amt: CF
                    } = FF;
                    return (0, RF.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: SF,
                        amount: Math.floor(CF)
                      })
                    }, WF)
                  }))
                })]
              }) : (0, RF.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, RF.jsx)("div", {
                  className: "SalvageText Error",
                  children: dF("salvagingTable:unsalvageable")
                })
              }) : (0, RF.jsx)(RF.Fragment, {})
            })
          })]
        })]
      })
    }
    var OW = SF(617),
      xS = SF(8242),
      ZW = SF(2126),
      oW = SF(1504),
      YW = SF(7615),
      MW = SF(7612),
      cS = SF(1731),
      GW = SF(1635),
      zS = SF(1234),
      IW = SF(1686);

    function fW(FF, WF, SF) {
      const CF = FF.trim().toLowerCase();
      if ("" === CF) return 0;
      let AF = null;
      for (const uF of WF) {
        const FF = uF.toLowerCase().indexOf(CF);
        if (0 === FF) return 0;
        FF > 0 && (AF = 1)
      }
      if (null !== AF) return AF;
      for (const uF of SF)
        if (uF.toLowerCase().includes(CF)) return 2;
      return null
    }

    function yS(FF) {
      return FF.map((FF => {
        var WF;
        return FF ? {
          name: FF.name,
          amount: null !== (WF = FF.amount) && void 0 !== WF ? WF : 1
        } : null
      }))
    }

    function sW(FF) {
      return FF < 1e3 ? `${FF}` : FF < 1e4 ? Math.floor(FF / 100) / 10 + "k" : `${Math.floor(FF/1e3)}k`
    }
    var nW = SF(35291);
    const HW = EF.e,
      KW = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      wW = () => {
        const FF = (0, zS.g)();
        return FF ? FF.getPadRepeatTiming(KW) : KW
      };

    function XW(FF, WF, SF) {
      var CF, AF;
      const uF = (0, hW.u)(WF, FF);
      let hF = null === (CF = WF[FF]) || void 0 === CF ? void 0 : CF.description;
      if (SF && (null === (AF = (0, nW.h)().get(FF)) || void 0 === AF || !AF.hideIngredients)) {
        hF ? (hF = (0, LF.wb)(hF), hF.push({
          str: "\n"
        })) : hF = [], hF.push({
          str: "\n"
        }), hF.push({
          str: "Can be crafted from:\n"
        });
        for (const FF of SF) "string" === typeof FF && (hF.push({
          icon: FF,
          style: {
            fontSize: "1.5em"
          }
        }), hF.push({
          str: " "
        }), hF.push(...(0, LF.wb)((0, hW.u)(WF, FF))), hF.push({
          str: "\n"
        }))
      }
      return {
        name: uF,
        desc: hF
      }
    }

    function UW(FF) {
      let {
        name: WF,
        YH: SF
      } = FF;
      return `${WF}_${SF}`
    }

    function BW(FF) {
      var WF;
      let {
        onClick: SF,
        itemName: CF,
        recipeId: uF,
        isSelected: hF,
        haveIngredients: bW,
        craftable: dF,
        setHovered: PF,
        padActions: iW,
        marked: eF,
        lock: EF,
        itemInfo: QF
      } = FF;
      const rW = (0, AF.useRef)(null);
      return (0, YW.c)(rW, {
        press: FF => !bW || "secondary" === FF && !dF ? (iW.refuse(), !1) : "primary" === FF ? (iW.choose(), !0) : iW.craft(),
        release: iW.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, RF.jsxs)("div", {
        ref: rW,
        className: gS()("InvenItem", {
          CraftableItemNotEnoughIngredients: !bW && !EF,
          CraftableItemMarked: eF,
          CraftableItemLocked: void 0 !== EF,
          CraftableItemLockedFar: (null !== (WF = null === EF || void 0 === EF ? void 0 : EF.stepsAway) && void 0 !== WF ? WF : 1) > 1
        }),
        "data-recipe-key": uF,
        "data-pad-inventory-default": hF ? "" : void 0,
        onClick: SF,
        style: {
          cursor: hF ? null : "pointer"
        },
        onPointerEnter: FF => {
          null === PF || void 0 === PF || PF(!0, XW(CF, QF)), !hF && (0, cS.s)(FF.nativeEvent) && (0, MW.g)() && SF()
        },
        onPointerLeave: () => {
          null === PF || void 0 === PF || PF(!1)
        },
        children: [(0, RF.jsx)(SW.b, {
          itemName: CF,
          amount: 1
        }), eF && (0, RF.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), EF && (0, RF.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, RF.jsx)(gW.e, {
            name: "lock"
          }), (0, RF.jsx)(NF.d, {
            text: EF.tag
          })]
        })]
      })
    }

    function jS(FF) {
      let {
        idx: WF,
        status: SF,
        shownItem: CF,
        dim: uF,
        onHoverStart: hF,
        onHoverEnd: bW,
        onPadBack: dF
      } = FF;
      const PF = (0, AF.useRef)(null);
      (0, YW.c)(PF, {
        press: () => !1,
        back: dF,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const iW = SF.need > 0 ? Math.min(SF.have / SF.need, 1) : 1;
      return (0, RF.jsxs)("div", {
        ref: PF,
        className: gS()("CupTile", {
          Short: SF.missing > 0
        }),
        style: {
          width: uF,
          height: uF
        },
        "data-craft-ingredient": WF,
        onPointerEnter: hF,
        onPointerLeave: bW,
        children: [(0, RF.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${iW})`
          }
        }), (0, RF.jsx)(SW.b, {
          itemName: CF,
          amount: 0
        }), (0, RF.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [sW(SF.have), "/", sW(SF.need)]
        })]
      })
    }

    function vS(FF) {
      var WF, SF, CF, uF, hF;
      let {
        show: bW,
        recipeItem: {
          name: dF,
          YH: iW,
          requires: eF,
          produces: EF,
          haveIngredients: QF
        },
        detail: rW,
        onCraft: gW,
        setHovered: tW,
        craftButtonRef: TF,
        onPadBack: aW,
        showPadShortcut: kW,
        refusedCount: qW,
        lock: VF,
        itemInfo: DF
      } = FF;
      const {
        t: LF
      } = (0, WW.B)(), mW = null !== rW && !rW.roomForOne, OF = null !== (WF = null === rW || void 0 === rW ? void 0 : rW.craftAllTimes) && void 0 !== WF ? WF : 0, xW = function(FF, WF) {
        return FF.map((FF => {
          let {
            items: SF,
            amt: CF
          } = FF, AF = 0;
          const uF = [];
          for (const hF of SF) {
            const FF = WF(hF);
            AF += FF, FF > 0 && uF.push(hF)
          }
          return 0 === uF.length && uF.push(SF[0]), {
            shownItems: uF,
            need: CF,
            have: AF,
            missing: Math.max(CF - AF, 0)
          }
        }))
      }(eF, (FF => {
        var WF;
        return null !== (WF = null === rW || void 0 === rW ? void 0 : rW.amounts[FF]) && void 0 !== WF ? WF : 0
      }));
      let ZF = "4rem",
        oF = 4;
      3 === eF.length || 4 === eF.length ? ZF = "3.75rem" : eF.length >= 5 && (ZF = "3rem"), 4 === eF.length ? oF = 2 : eF.length <= 6 && (oF = 3);
      const YF = `calc(${oF} * ${ZF} + ${oF-1} * 0.4rem + 1px)`,
        MF = (0, AF.useRef)(null),
        cW = (0, AF.useRef)(null),
        GF = (0, AF.useRef)(qW);
      (0, AF.useEffect)((() => {
        if (qW === GF.current) return;
        GF.current = qW;
        const FF = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const CF of null !== (WF = null === (SF = MF.current) || void 0 === SF ? void 0 : SF.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== WF ? WF : []) {
          var WF, SF;
          CF.animate(FF, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [qW]);
      const zW = (FF, WF, SF) => {
          var CF;
          if ((0, nW.h)().has(dF)) return void(SF && clearInterval(IF.current));
          const AF = null !== (CF = null === rW || void 0 === rW ? void 0 : rW.resultStackable) && void 0 !== CF && CF,
            uF = yS(PF.gameBridge.latest("inventory").player),
            {
              zK: hF,
              fK: bW,
              amountAddedToSlot: RF
            } = PF.gameBridge.send("craftRecipe", {
              name: dF,
              YH: iW,
              times: WF || FF && AF ? null : 1
            });
          if (hF > 0) {
            const WF = [],
              CF = new Set(eF.flatMap((FF => {
                let {
                  items: WF
                } = FF;
                return WF
              }))),
              hF = function(FF, WF, SF) {
                const CF = [];
                for (let AF = 0; AF < FF.length; AF++) {
                  const uF = FF[AF];
                  if (!uF || !SF.has(uF.name)) continue;
                  const hF = WF[AF],
                    bW = (null === hF || void 0 === hF ? void 0 : hF.name) === uF.name ? hF.amount : 0;
                  bW < uF.amount && CF.push({
                    idx: AF,
                    itemName: uF.name,
                    amount: uF.amount - bW
                  })
                }
                return CF
              }(uF, yS(PF.gameBridge.latest("inventory").player), CF).slice(0, 12),
              iW = SF ? 0 : Math.min(50, 400 / hF.length),
              QF = SF ? 220 : 320;
            for (const FF of hF) {
              var EF;
              const SF = eF.findIndex((WF => {
                  let {
                    items: SF
                  } = WF;
                  return SF.includes(FF.itemName)
                })),
                CF = null === (EF = MF.current) || void 0 === EF ? void 0 : EF.querySelector(`[data-craft-ingredient="${SF}"]`),
                AF = (0, hW.c)(FF.idx);
              CF && AF && WF.push({
                kind: "ingredient",
                itemName: FF.itemName,
                amount: FF.amount,
                fK: FF.idx,
                from: AF,
                to: (0, hW.c)(CF),
                delayMs: Math.round(WF.length * iW),
                durationMs: QF
              })
            }
            let rW;
            if (null !== bW && RF > 0 && cW.current) {
              const FF = WF.length > 0 ? WF[WF.length - 1].delayMs + .6 * QF : 0;
              rW = {
                itemName: dF,
                amount: RF,
                fK: bW,
                from: (0, hW.c)(cW.current),
                delayMs: Math.round(FF)
              }
            }
            gW(rW, FF && !AF ? bW : null, WF), AW.d.play("wood1", .5).rate(1.75)
          }
        },
        IF = (0, AF.useRef)(null);
      (0, AF.useEffect)((() => () => {
        clearInterval(IF.current)
      }), []);
      const fF = (FF, WF) => {
          zW(FF, !1, !1), clearInterval(IF.current), WF && (IF.current = setTimeout((() => {
            IF.current = setInterval((() => {
              zW(FF, !1, !0)
            }), WF.intervalMs)
          }), WF.initialDelayMs))
        },
        yW = () => {
          clearInterval(IF.current)
        },
        sF = !QF || mW || Boolean(VF),
        nF = (0, AF.useRef)(null),
        HF = null !== (SF = null === (CF = (0, IW.e)()) || void 0 === CF ? void 0 : CF.hideButtonHints) && void 0 !== SF && SF,
        KF = null !== (uF = null === (hF = (0, zS.g)()) || void 0 === hF ? void 0 : hF.getBoundButton("inventorySecondary")) && void 0 !== uF ? uF : null,
        wF = () => !sF && (zW(!1, !0, !1), !0);
      (0, YW.c)(TF, {
        press: FF => "secondary" === FF ? wF() : !sF && (fF(!1, wW()), !0),
        release: yW,
        back: aW,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, YW.c)(nF, {
        press: wF,
        back: aW,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [XF, UF] = (0, AF.useState)(0), [BF, jW] = (0, AF.useState)(null);
      (0, AF.useEffect)((() => {
        if (!0 === bW) {
          UF(0);
          const FF = setInterval((() => {
            UF((FF => FF + 1))
          }), 1e3);
          return () => {
            clearInterval(FF)
          }
        }
        return () => {}
      }), [bW]);
      const vW = null === rW || void 0 === rW ? void 0 : rW.ingredientsCraftedFrom,
        JF = (0, AF.useRef)(tW);
      (0, AF.useEffect)((() => {
        JF.current = tW
      }), [tW]);
      const pF = !(null === VF || void 0 === VF || !VF.hideIngredients);
      (0, AF.useEffect)((() => {
        var FF, WF;
        if (!BF) return;
        if (pF) return jW(null), void(null === (WF = JF.current) || void 0 === WF || WF.call(JF, !1));
        const SF = BF[XF % BF.length];
        null === (FF = JF.current) || void 0 === FF || FF.call(JF, !0, XW(SF, DF, null === vW || void 0 === vW ? void 0 : vW[SF]))
      }), [BF, XF, DF, vW, pF]);
      const lF = !!VF,
        FW = (0, AF.useRef)(!1);
      (0, AF.useEffect)((() => {
        var FF;
        lF && (clearInterval(IF.current), pF && FW.current && (FW.current = !1, null === (FF = JF.current) || void 0 === FF || FF.call(JF, !1)))
      }), [lF, pF]);
      const CW = (0, hW.u)(DF, dF);
      return (0, RF.jsxs)("div", {
        ref: MF,
        className: "CraftableInfo SmallTextBold",
        children: [(0, RF.jsx)("div", {
          className: "CraftableHeader",
          children: (0, RF.jsx)(NF.d, {
            text: CW
          })
        }), !pF && (0, RF.jsx)("div", {
          className: gS()("CraftableIngredients", {
            Compact: eF.length >= 5
          }),
          style: {
            maxWidth: YF
          },
          children: xW.map(((FF, WF) => {
            const SF = FF.shownItems[XF % FF.shownItems.length];
            return (0, RF.jsx)(jS, {
              idx: WF,
              status: FF,
              shownItem: SF,
              dim: ZF,
              onHoverStart: () => {
                jW(FF.shownItems)
              },
              onHoverEnd: () => {
                jW(null), null === tW || void 0 === tW || tW(!1)
              },
              onPadBack: aW
            }, WF)
          }))
        }), VF && (0, RF.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, RF.jsx)(NF.d, {
            text: VF.reason
          })
        }), !VF && (!QF || mW) && (0, RF.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!QF && "Missing ingredients", (0, RF.jsx)("br", {}), mW && "Inventory is full"]
        }), !pF && (0, RF.jsxs)(RF.Fragment, {
          children: [(0, RF.jsxs)(HW, {
            ref: TF,
            className: "DoCraftButton",
            onPointerDown: FF => {
              fF((0, hW.x)(FF), (0, cS.s)(FF.nativeEvent) ? wW() : KW)
            },
            onPointerUp: yW,
            onPointerLeave: yW,
            disabled: sF,
            children: [kW && KF && !sF && !HF && (0, RF.jsx)(GW.c, {
              className: "CraftShortcutGlyph",
              glyph: KF
            }), (0, RF.jsx)("div", {
              ref: cW,
              className: "DoCraftItem",
              onPointerEnter: () => {
                FW.current = !0, null === tW || void 0 === tW || tW(!0, XW(dF, DF))
              },
              onPointerLeave: () => {
                FW.current = !1, null === tW || void 0 === tW || tW(!1)
              },
              children: (0, RF.jsx)(SW.b, {
                itemName: dF,
                amount: EF
              })
            })]
          }), (0, RF.jsxs)(HW, {
            ref: nF,
            className: "DoCraftAllButton",
            onPointerDown: FF => {
              zW((0, hW.x)(FF), !0, !1)
            },
            disabled: sF,
            children: [(0, RF.jsx)("span", {
              className: "CraftAllLabel",
              children: LF("general:craftAll")
            }), OF > 0 && (0, RF.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", sW(OF)]
            })]
          })]
        })]
      })
    }

    function JW(FF) {
      let {
        selectedIdx: WF,
        hidden: SF
      } = FF;
      const CF = (0, FW.r)(),
        uF = (0, AF.useRef)(null);
      return (0, AF.useLayoutEffect)((() => {
        const FF = uF.current,
          CF = null === FF || void 0 === FF ? void 0 : FF.parentElement;
        if (!CF || !FF) return;
        const AF = CF.querySelector(".CraftableItems"),
          hF = () => {
            var uF, hF;
            if (SF) return void(FF.style.opacity = "0");
            const bW = null === AF || void 0 === AF ? void 0 : AF.children[WF],
              dF = null === (uF = null !== (hF = null === bW || void 0 === bW ? void 0 : bW.querySelector(".InvenItem")) && void 0 !== hF ? hF : bW) || void 0 === uF ? void 0 : uF.getBoundingClientRect();
            if (!dF || 0 === dF.width) return void(FF.style.opacity = "0");
            const PF = CF.getBoundingClientRect();
            FF.style.opacity = "1", FF.style.width = `${dF.width}px`, FF.style.height = `${dF.height}px`, FF.style.transform = `translate(${dF.left-PF.left+CF.scrollLeft}px, ${dF.top-PF.top+CF.scrollTop}px)`
          };
        hF();
        const bW = new MutationObserver(hF),
          dF = new ResizeObserver(hF);
        return dF.observe(CF), AF && (bW.observe(AF, {
          childList: !0,
          subtree: !0
        }), dF.observe(AF)), () => {
          bW.disconnect(), dF.disconnect()
        }
      }), [WF, SF]), (0, RF.jsx)("div", {
        ref: uF,
        className: gS()("SelectionReticle", {
          Secondary: CF
        })
      })
    }

    function pW(FF, WF, SF) {
      return FF ? (0, OW.d)(xS.i, FF) ? lW(FF, WF, SF) : FF : SF("classicGame:handCrafting")
    }

    function lW(FF, WF, SF) {
      var CF;
      const AF = null === (CF = WF[FF]) || void 0 === CF ? void 0 : CF.displayName;
      if ("string" === typeof AF) return SF(AF);
      const uF = PF.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(AF) ? AF.map((FF => {
        if ("string" === typeof FF) return FF;
        if ("translationKey" in FF) return SF(FF.translationKey, (0, WW.n)(FF.params, uF));
        if ("str" in FF) {
          if ("string" === typeof FF.str) return FF.str;
          if ("translationKey" in FF.str) return SF(FF.str.translationKey, (0, WW.n)(FF.str.params, uF))
        }
        return ""
      })).join("") : AF && "translationKey" in AF ? SF(AF.translationKey, (0, WW.n)(AF.params, uF)) : FF
    }

    function FS(FF, WF) {
      return FF === WF || null !== FF && null !== WF && FF.name === WF.name && FF.YH === WF.YH
    }

    function WS(FF) {
      var WF, SF, CF;
      let {
        show: uF,
        onCraft: hF,
        dispatchSelectedCraftable: bW,
        selectedCraftable: dF,
        craftingStation: iW,
        setHovered: eF
      } = FF;
      const {
        t: EF
      } = (0, WW.B)(), [QF, rW] = (0, AF.useState)(""), [gW, tW] = (0, AF.useState)(0);
      (0, AF.useEffect)((() => {
        uF || (rW(""), tW((FF => FF + 1)))
      }), [uF]);
      const [TF, aW] = (0, AF.useState)(iW);
      TF !== iW && (aW(iW), "" !== QF && (rW(""), tW((FF => FF + 1))));
      const kW = (0, AF.useRef)(null),
        qW = (0, AF.useRef)(null),
        VF = (0, MW.j)(),
        NF = VF.showing && "recipe" === VF.kind,
        [DF, LF] = (0, AF.useState)(0),
        OF = null !== iW && void 0 !== iW ? iW : null,
        xW = (0, AF.useRef)(null),
        ZF = FF => {
          return !((WF = xW.current) === (SF = FF) || null !== WF && null !== SF && WF.station === SF.station && FS(WF.recipe, SF.recipe)) && (xW.current = FF, PF.gameBridge.send("focusCrafting", FF), !0);
          var WF, SF
        };
      ZF(uF ? {
        station: OF,
        recipe: (null === (WF = xW.current) || void 0 === WF ? void 0 : WF.station) === OF ? xW.current.recipe : null
      } : null);
      let oF = PF.gameBridge.latest("crafting");
      const YF = (0, mW.e)("itemInfo"),
        MF = "" !== QF.trim(),
        cW = (0, nW.D)(),
        GF = (0, nW.C)(),
        zW = (0, nW.G)(),
        IF = function(FF, WF) {
          const [SF, CF] = (0, AF.useState)(!1);
          (0, AF.useEffect)((() => {
            if (!FF) return void CF(!1);
            const WF = setTimeout((() => {
              CF(!0)
            }), 0);
            return () => {
              clearTimeout(WF)
            }
          }), [FF]);
          const uF = FF && SF,
            hF = (0, AF.useRef)({
              station: WF,
              at: new Map
            });
          return (hF.current.station !== WF || !uF && hF.current.at.size > 0) && (hF.current = {
            station: WF,
            at: new Map
          }), uF ? hF.current.at : null
        }(uF, iW);
      let fF = oF.recipes.filter((FF => {
        let {
          listed: WF
        } = FF;
        return WF
      }));
      if (MF) {
        const FF = [];
        for (const WF of oF.recipes) {
          var yW;
          const SF = null !== (yW = GF.get(WF.name)) && void 0 !== yW && yW.hideIngredients ? [] : WF.requires.flatMap((FF => {
              let {
                items: WF
              } = FF;
              return WF.flatMap((FF => [FF, lW(FF, YF, EF)]))
            })),
            CF = fW(QF, [WF.name, lW(WF.name, YF, EF)], SF);
          null !== CF && FF.push({
            item: WF,
            rank: CF
          })
        }
        FF.sort(((FF, WF) => FF.rank - WF.rank)), fF = FF.map((FF => {
          let {
            item: WF
          } = FF;
          return WF
        }))
      } else {
        if (IF && IF.size > 0) {
          const FF = oF.recipes.filter((FF => !FF.listed && IF.has(UW(FF))));
          fF = fF.concat(FF)
        }
        fF = (0, nW.o)(fF, cW, GF, zW), IF && (fF = (0, nW.k)(fF, IF, UW))
      }
      const sF = FF => fF.find((WF => UW(WF) === FF)),
        nF = `${iW}|${QF}`,
        [HF, KF] = (0, AF.useState)(null),
        wF = (null === HF || void 0 === HF ? void 0 : HF.context) === nF ? HF.key : null,
        XF = dF ? UW(dF) : null,
        UF = null !== (SF = null !== (CF = sF(XF)) && void 0 !== CF ? CF : sF(wF)) && void 0 !== SF ? SF : fF[0],
        BF = UF ? UW(UF) : null,
        jW = UF ? {
          name: UF.name,
          YH: UF.YH
        } : null;
      uF && ZF({
        station: OF,
        recipe: jW
      }) && (oF = PF.gameBridge.latest("crafting")), BF !== XF && BF !== wF && KF(BF ? {
        context: nF,
        key: BF
      } : null), (0, AF.useEffect)((() => () => {
        xW.current = null, PF.gameBridge.send("focusCrafting", null)
      }), []);
      const vW = FS(oF.detail, jW) ? oF.detail : null,
        JF = null !== vW && !vW.roomForOne,
        pF = fF.findIndex((FF => UW(FF) === UW(UF))),
        FW = () => qW.current ? (0, YW.b)(qW.current) : null,
        SW = (0, AF.useRef)(null),
        CW = (0, AF.useRef)(0);
      CW.current++;
      const AW = CW.current;
      (0, AF.useEffect)((() => {
        const FF = SW.current;
        if (!FF || AW <= FF.afterRender) return;
        if (SW.current = null, FF.key !== BF) return;
        const WF = FW();
        var SF;
        null !== WF && void 0 !== WF && WF.press("primary") && !FF.yS && (null === (SF = WF.release) || void 0 === SF || SF.call(WF))
      }));
      const uW = FF => {
          const WF = {
            name: FF.name,
            YH: FF.YH
          };
          return {
            choose: () => {
              bW(WF), (0, lF.m)(qW.current)
            },
            craft: () => {
              var FF, SF;
              return bW(WF), UW(WF) !== UW(UF) ? (SW.current = {
                key: UW(WF),
                yS: !0,
                afterRender: CW.current
              }, !0) : null !== (FF = null === (SF = FW()) || void 0 === SF ? void 0 : SF.press("primary")) && void 0 !== FF && FF
            },
            stopCraft: () => {
              var FF, WF;
              SW.current ? SW.current.yS = !1 : null === (FF = FW()) || void 0 === FF || null === (WF = FF.release) || void 0 === WF || WF.call(FF)
            },
            refuse: () => {
              UW(WF) !== UW(UF) && bW(WF), LF((FF => FF + 1))
            }
          }
        },
        hW = () => {
          var FF, WF, SF;
          (0, lF.m)(null !== (FF = null === (WF = kW.current) || void 0 === WF || null === (SF = WF.querySelector(".CraftableItems")) || void 0 === SF ? void 0 : SF.children[pF]) && void 0 !== FF ? FF : null)
        },
        bS = fF.map(UW).join("|"),
        dW = (0, AF.useRef)(bS);
      return (0, AF.useEffect)((() => {
        dW.current !== bS && (dW.current = bS, NF && pF >= 0 && (0, MW.g)() && hW())
      })), (0, RF.jsxs)("div", {
        className: "Craftables",
        children: [(0, RF.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: pW(iW, YF, EF)
        }), (0, RF.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, RF.jsx)(oW.d, {
            className: "CraftingSearch",
            placeholderText: EF("general:searchRecipes"),
            defaultValue: QF,
            maxLength: 100,
            onValueChange: FF => {
              rW(FF)
            },
            blurOnEnter: !0
          }, gW), 0 === fF.length && MF && (0, RF.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: EF("general:noRecipesMatchSearch")
          }), fF.length > 0 && (0, RF.jsxs)(RF.Fragment, {
            children: [(0, RF.jsxs)("div", {
              ref: kW,
              className: "CraftablesLeftSide",
              children: [(0, RF.jsx)(ZW.c, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(fF.map((FF => {
                  let {
                    name: WF,
                    YH: SF,
                    haveIngredients: CF
                  } = FF;
                  return {
                    name: WF,
                    YH: SF,
                    haveIngredients: CF
                  }
                })))],
                observing: uF,
                children: fF.map((FF => {
                  const {
                    name: WF,
                    YH: SF,
                    haveIngredients: CF
                  } = FF, AF = UW(FF);
                  return (0, RF.jsx)(BW, {
                    recipeId: AF,
                    itemName: WF,
                    onClick: () => {
                      bW({
                        name: WF,
                        YH: SF
                      })
                    },
                    isSelected: UW(UF) === AF,
                    haveIngredients: CF,
                    craftable: CF && !GF.has(WF) && !(UW(UF) === AF && JF),
                    setHovered: eF,
                    padActions: uW(FF),
                    marked: cW.has(WF),
                    lock: GF.get(WF),
                    itemInfo: YF
                  }, AF)
                }))
              }), (0, RF.jsx)(JW, {
                selectedIdx: pF,
                hidden: NF && VF.steppingSlots
              })]
            }), (0, RF.jsx)(vS, {
              show: uF,
              recipeItem: UF,
              detail: vW,
              onCraft: hF,
              setHovered: eF,
              craftButtonRef: qW,
              onPadBack: hW,
              showPadShortcut: NF,
              refusedCount: DF,
              lock: GF.get(UF.name),
              itemInfo: YF
            })]
          })]
        })]
      })
    }
    var SS = SF(35203),
      CS = SF(2477),
      AS = SF(11),
      uS = SF(1728),
      hS = SF(7599);
    class bC {
      constructor(FF, WF, SF) {
        this.commit = FF, this.delayMs = WF, this.defers = SF, this.pending = null, this.timer = void 0, this.yS = !1, this.flush = () => {
          clearTimeout(this.timer);
          const FF = this.pending;
          null !== FF && (this.pending = null, this.commit(FF))
        }
      }
      type(FF) {
        this.pending = FF, clearTimeout(this.timer), this.yS || this.defers() ? this.yS || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(FF) {
        var WF;
        return null !== (WF = this.pending) && void 0 !== WF ? WF : FF
      }
      isHeld() {
        return this.yS
      }
      setHeld(FF) {
        this.yS = FF, FF || this.flush()
      }
    }

    function dS(FF) {
      return null === FF ? "creativeInventory:all" : `creativeInventory:${FF}`
    }

    function PS(FF) {
      let {
        category: WF
      } = FF;
      return null === WF ? (0, RF.jsx)(gW.e, {
        name: "layer-group"
      }) : (0, RF.jsx)(SW.b, {
        itemName: SS.creativeItemCategoryIcons[WF],
        amount: 0
      })
    }

    function RS(FF) {
      let {
        labelKey: WF,
        isSelected: SF,
        onSelect: CF,
        setHovered: AF,
        children: uF
      } = FF;
      return (0, RF.jsx)("div", {
        className: gS()("CreativeCategoryTab", {
          Selected: SF
        }),
        onClick: CF,
        onPointerEnter: FF => {
          (0, hW.q)(FF) || AF(!0, {
            name: {
              translationKey: WF
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          AF(!1)
        },
        children: uF
      })
    }

    function iC(FF) {
      let {
        categories: WF,
        selectedCategory: SF,
        onSelect: CF
      } = FF;
      const {
        t: uF
      } = (0, WW.B)(), [hF, bW] = (0, AF.useState)(!1), dF = (0, AF.useRef)(null), PF = (0, AF.useCallback)((() => {
        bW(!1)
      }), []);
      return (0, uS.d)(dF, PF), (0, RF.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: dF,
        children: [(0, RF.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            bW(!hF)
          },
          children: [(0, RF.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, RF.jsx)(PS, {
              category: SF
            })
          }), (0, RF.jsx)("span", {
            children: uF(dS(SF))
          }), (0, RF.jsx)(gW.e, {
            name: hF ? "caret-up" : "caret-down"
          })]
        }), hF && (0, RF.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: WF.map((FF => (0, RF.jsxs)("div", {
            className: gS()("CreativeCategoryDropdownOption", {
              Selected: SF === FF
            }),
            onClick: () => {
              CF(FF), bW(!1)
            },
            children: [(0, RF.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, RF.jsx)(PS, {
                category: FF
              })
            }), (0, RF.jsx)("span", {
              children: uF(dS(FF))
            })]
          }, null !== FF && void 0 !== FF ? FF : "all")))
        })]
      })
    }
    const eS = (0, AF.memo)((function(FF) {
      let {
        creativeScrollDiv: WF,
        playerInvenNumSlots: SF,
        getSetHoveringForIdx: CF,
        getPointerDownForIdx: uF,
        getPointerUpForIdx: hF,
        creativeSearchVal: bW,
        setCreativeSearchVal: PF,
        creativeCategory: iW,
        setCreativeCategory: eF,
        show: EF
      } = FF;
      const {
        t: QF
      } = (0, WW.B)(), rW = (0, mW.e)("creativeVisibility"), {
        userContext: tW
      } = (0, VF.b)(), TF = (0, dF.k)("canUseDevCreativeItems"), aW = tW.playerHasRank("developer") || !!TF, kW = (0, AF.useMemo)((() => QS("", rW, aW)), [rW, aW]), qW = (0, AF.useMemo)((() => {
        const FF = (0, SS.creativeItemIds)(),
          WF = new Set(kW.map((WF => (0, SS.creativeCategoryOf)(FF[WF]))));
        return SS.creativeItemCategories.filter((FF => WF.has(FF)))
      }), [kW]), NF = null !== iW && qW.includes(iW) ? iW : null, LF = (0, AF.useMemo)((() => "" === bW ? kW : QS(bW, rW, aW)), [kW, bW, rW, aW]), OF = (0, AF.useMemo)((() => {
        const FF = (0, SS.creativeItemIds)();
        return null !== NF ? LF.filter((WF => (0, SS.creativeCategoryOf)(FF[WF]) === NF)) : "" === bW ? LF.filter((WF => !(0, SS.showOnlyInCreativeCategory)(FF[WF]))) : LF
      }), [LF, NF, bW]), xW = CF();

      function ZF(FF) {
        eF(FF), WF.current.scrollTop = 0
      }
      const oF = [null, ...qW],
        {
          isTouchScreen: YF
        } = (0, AS.d)(["isTouchScreen"]),
        MF = !YF,
        cW = (0, AF.useRef)(null),
        [GF, zW] = (0, AF.useState)(0);
      (0, AF.useEffect)((() => {
        const FF = cW.current;
        if (!FF) return;
        const WF = new ResizeObserver((FF => {
          zW(FF[0].contentRect.height)
        }));
        return WF.observe(FF), () => {
          WF.disconnect()
        }
      }), [MF]);
      const IF = (0, AF.useRef)(null),
        fF = (0, AF.useCallback)((function FF() {
          "up" === IF.current ? WF.current.scrollTop -= 10 : "down" === IF.current && (WF.current.scrollTop += 10), IF.current && requestAnimationFrame(FF)
        }), [WF]),
        yW = (0, AF.useCallback)((function(FF) {
          IF.current || (IF.current = FF, fF())
        }), [fF]);

      function sF() {
        IF.current = null
      }
      const nF = (0, AF.useRef)({
        creativeSearchVal: bW,
        setCreativeSearchVal: PF
      });
      nF.current = {
        creativeSearchVal: bW,
        setCreativeSearchVal: PF
      };
      const [HF] = (0, AF.useState)((() => new bC((FF => {
        nF.current.setCreativeSearchVal(FF)
      }), 250, FW.f))), KF = FF => {
        var SF;
        null === (SF = WF.current) || void 0 === SF || SF.classList.toggle("CreativeItemSlotsStale", FF)
      };
      (0, DF.e)(hS.b, (FF => {
        HF.setHeld(FF), FF || KF(!1)
      })), (0, AF.useEffect)((() => HF.flush), [HF]);
      const wF = (0, RF.jsx)(oW.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: bW,
          maxLength: 1e4,
          onValueChange: (FF, WF) => {
            "" === HF.getTyped(nF.current.creativeSearchVal) && "" !== FF && eF(null), HF.type(FF), KF(HF.isHeld())
          },
          onEnter: HF.flush,
          blurOnEnter: !0
        }),
        XF = (0, RF.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [YF && (0, RF.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, RF.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                yW("up")
              },
              onPointerLeave: sF,
              onPointerUp: sF,
              children: (0, RF.jsx)(gW.e, {
                name: "arrow-up"
              })
            }), (0, RF.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                yW("down")
              },
              onPointerLeave: sF,
              onPointerUp: sF,
              children: (0, RF.jsx)(gW.e, {
                name: "arrow-up"
              })
            })]
          }), (0, RF.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: WF,
            children: [0 === OF.length && "" !== bW && (0, RF.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: QF("general:noResults")
            }), (0, RF.jsx)(ZW.c, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [bW, NF],
              observerRoot: "CreativeItemSlots",
              observing: EF,
              children: OF.map((FF => {
                const WF = SF + FF;
                return (0, RF.jsx)(NW.d, {
                  idx: WF,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: CF(WF),
                  pointerDown: uF(WF),
                  pointerUp: hF(WF)
                }, WF)
              }))
            })]
          })]
        });
      return (0, RF.jsxs)("div", {
        className: gS()("CreativeItemSlotsWrapper", MF ? "WithRail" : "WithDropdown"),
        children: [MF && (0, RF.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: cW,
          style: {
            "--rail-height": GF > 0 ? `${GF}px` : void 0,
            "--tab-rows": Math.ceil(oF.length / 2)
          },
          children: oF.map((FF => (0, RF.jsx)(RS, {
            labelKey: dS(FF),
            isSelected: NF === FF,
            onSelect: () => {
              ZF(FF)
            },
            setHovered: xW,
            children: (0, RF.jsx)(PS, {
              category: FF
            })
          }, null !== FF && void 0 !== FF ? FF : "all")))
        }), (0, RF.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, RF.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [wF, !MF && (0, RF.jsx)(iC, {
              categories: oF,
              selectedCategory: NF,
              onSelect: ZF
            })]
          }), XF]
        })]
      })
    }));

    function ES(FF) {
      var WF;
      return null !== (WF = (0, CS.f)(FF)) && void 0 !== WF ? WF : ""
    }

    function QS(FF, WF, SF) {
      let {
        publicLobby: CF,
        shownInGame: AF
      } = WF;
      const uF = FF.toLowerCase(),
        hF = (0, SS.creativeItemIds)(),
        bW = FF => {
          var WF;
          const uF = hF[FF];
          return !(0, SS.itemIsDisabled)(uF, CF, null === (WF = AF[ES(uF)]) || void 0 === WF || WF, SF)
        };
      if ("" === uF) return hF.map(((FF, WF) => WF)).filter((FF => !(0, SS.showOnlyInCreativeSearch)(hF[FF]))).filter(bW);
      const dF = [];
      for (let PF = 0; PF < hF.length; PF++) ES(hF[PF]).toLowerCase().includes(uF) && dF.push(PF);
      dF.sort(((FF, WF) => {
        const SF = ES(hF[FF]).toLowerCase(),
          CF = ES(hF[WF]).toLowerCase();
        return SF.indexOf(uF) - CF.indexOf(uF)
      }));
      for (const [PF, RF] of(0, SS.creativeAltNames)())
        for (const FF of RF)
          if (FF.toLowerCase().includes(uF)) {
            const FF = hF.indexOf(PF);
            dF.includes(FF) || dF.push(FF)
          } return dF.filter(bW)
    }
    var rC = SF(35310),
      gC = SF(568);

    function tC(FF) {
      const WF = FF / 2,
        SF = [];
      for (let CF = 0; CF < WF / 6; CF++)
        for (let FF = 0; FF < 12; FF++) {
          const AF = FF < 6 ? 0 : WF;
          SF.push(AF + 6 * CF + FF % 6)
        }
      return SF
    }

    function TS(FF) {
      let {
        numSlots: WF,
        renderSlot: SF
      } = FF;
      const {
        t: CF
      } = (0, WW.B)(), uF = (0, AF.useRef)(null);
      var hF;
      return hF = uF, (0, AF.useLayoutEffect)((() => {
        var FF;
        const WF = null === (FF = hF.current) || void 0 === FF ? void 0 : FF.closest(".InvenBody");
        if (!WF) return;
        const SF = () => {
          WF.style.zoom = "";
          const FF = parseFloat(getComputedStyle(document.documentElement).fontSize),
            SF = window.innerWidth - 2 * FF,
            CF = WF.getBoundingClientRect().width;
          CF > SF && (WF.style.zoom = "" + SF / CF)
        };
        return SF(), window.addEventListener("resize", SF), () => {
          window.removeEventListener("resize", SF), WF.style.zoom = ""
        }
      }), [hF]), (0, RF.jsxs)("div", {
        ref: uF,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, RF.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: CF("doubleChest:title")
        }), (0, RF.jsx)("div", {
          className: "GridItemSlots",
          children: tC(WF).map((FF => SF(FF)))
        })]
      })
    }

    function aC(FF) {
      let {
        vY: WF,
        initialPasskey: SF
      } = FF;
      const {
        t: CF
      } = (0, WW.B)(), [uF, hF] = (0, AF.useState)(SF), [bW, dF] = (0, AF.useState)(SF);
      (0, AF.useEffect)((() => {
        hF(SF), dF(SF)
      }), [...WF]);
      return (0, RF.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, RF.jsx)("div", {
          className: "SmallTextBold",
          children: CF("ironChest:currentPasskey", {
            currentPasskey: uF.join("")
          })
        }), (0, RF.jsx)(aS, {
          className: "IronChestPasskeyEditor",
          bR: bW,
          onPasskeyUpdated: dF,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            PF.gameBridge.send("changeIronChestPasskey", {
              pos: [...WF],
              bR: [...bW]
            }), hF([...bW])
          }
        })]
      })
    }

    function kC(FF) {
      let {
        variation: WF,
        canCraft: SF,
        show: CF,
        creativeMounted: AF,
        specialItemRef: uF,
        draggedInfo: hF,
        getSetHovering: bW,
        getPointerDownForIdx: dF,
        getPointerUpForIdx: PF,
        enchantingTablePosition: iW,
        enchantingTableBlockName: eF,
        selectedCraftable: EF,
        dispatchSelectedCraftable: QF,
        creativeScrollDiv: rW,
        creativeSearchVal: gW,
        setCreativeSearchVal: tW,
        creativeCategory: TF,
        setCreativeCategory: aW,
        onCraft: kW
      } = FF;
      const {
        userContext: qW
      } = (0, VF.b)(), {
        t: NF
      } = (0, WW.B)(), DF = (0, mW.c)("inventory", (FF => FF.chest)), LF = (0, mW.c)("inventory", (FF => FF.player.length)), OF = (0, mW.c)("inventory", (FF => FF.creative));
      if (0 === LF) return null;
      let xW, ZF;
      const oF = FF => {
          const WF = LF + FF;
          return (0, RF.jsx)(NW.d, {
            idx: WF,
            draggedInfo: hF,
            specialItemInfo: uF.current,
            setHovered: bW(WF),
            pointerDown: dF(WF),
            pointerUp: PF(WF)
          }, WF)
        },
        YF = DF ? (0, rC.d)(DF.type) : null;
      if (YF) xW = gS()("InvenLeftSideChestCustom", YF.className), ZF = (0, RF.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: YF.render({
          vY: DF.pos,
          renderSlot: oF
        })
      });
      else if (DF) {
        const FF = DF.pos,
          WF = "Iron" === DF.type || "Moonstone" === DF.type ? DF.type : "Standard";
        let SF = !1,
          CF = null;
        "Iron" === WF && (SF = DF.ironChest.ownerDbId === qW.whamm, CF = DF.ironChest.bR), xW = `InvenLeftSideChest${WF}`;
        const AF = DF.numSlots > gC.m;
        ZF = (0, RF.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [SF && (0, RF.jsx)(aC, {
            vY: FF,
            initialPasskey: CF
          }), AF && (0, RF.jsx)(TS, {
            numSlots: DF.numSlots,
            renderSlot: oF
          }), !AF && (0, RF.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, RF.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: NF("Moonstone" === WF ? "item:moonstoneChest" : "Iron" === WF ? "item:ironChest" : "item:chest")
            }), (0, RF.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(DF.numSlots).fill(0).map(((FF, WF) => oF(WF)))
            })]
          })]
        })
      } else if (!OF || WF && SF)
        if (SF && "Enchanting Table" === WF) xW = `InvenLeftSide${(null!==eF&&void 0!==eF?eF:"").replace(/ /gi,"")}`, ZF = (0, RF.jsx)(DW, {
          specialItemInfo: uF.current,
          setHovered: bW,
          pointerDown: dF(dW.g),
          pointerUp: PF(dW.g),
          enchantingTablePosition: iW,
          enchantingTableBlockName: eF
        });
        else if (SF && "Salvaging Table" === WF) xW = "InvenLeftSideSalvagingTable", ZF = (0, RF.jsx)(mS, {
        specialItemInfo: uF.current,
        setSpecialItemInfo: FF => {
          uF.current = FF
        },
        setHovered: bW,
        pointerDown: dF(dW.g),
        pointerUp: PF(dW.g)
      });
      else {
        if (!SF) return null;
        xW = `InvenLeftSide${(null!==WF&&void 0!==WF?WF:"HandCrafting").replace(/ /gi,"")}`, ZF = (0, RF.jsx)(WS, {
          show: CF,
          onCraft: kW,
          craftingStation: WF,
          selectedCraftable: EF,
          dispatchSelectedCraftable: QF,
          setHovered: bW()
        })
      } else xW = "InvenLeftSideCreative", ZF = AF ? (0, RF.jsx)(eS, {
        creativeScrollDiv: rW,
        playerInvenNumSlots: LF,
        getSetHoveringForIdx: bW,
        getPointerDownForIdx: dF,
        getPointerUpForIdx: PF,
        creativeSearchVal: gW,
        setCreativeSearchVal: tW,
        creativeCategory: TF,
        setCreativeCategory: aW,
        show: CF
      }) : null;
      const MF = !!DF || SF && !!WF;
      return (0, RF.jsx)("div", {
        className: `InvenLeftSide ${xW}`,
        "data-pad-inventory-start": MF ? "" : void 0,
        children: ZF
      })
    }
    var qC = SF(562);
    const VS = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function NS(FF) {
      let {
        draggedInfo: WF,
        specialItemInfo: SF,
        craftFlyAnims: CF,
        getSetHovering: AF,
        getPointerDownForIdx: uF,
        getPointerUpForIdx: hF,
        variation: bW,
        canCraft: dF,
        isNewSlot: PF
      } = FF;
      const iW = (0, mW.c)("inventory", (FF => FF.player.length));
      return 0 === iW ? null : (0, RF.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, RF.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(qC.b.length).fill(0).map(((FF, eF) => {
            const EF = iW - qC.b.length + eF;
            return (0, RF.jsx)(NW.d, {
              idx: EF,
              draggedInfo: WF,
              specialItemInfo: SF,
              craftFlyHoldbackInfo: (0, bS.j)(CF, EF),
              setHovered: AF(EF),
              pointerDown: uF(EF),
              pointerUp: hF(EF),
              defaultIconB64: nF.e.getTexture(VS[qC.b[eF]], HF.j.ITEM).url,
              variation: dF ? bW : void 0,
              showNewDot: PF(EF)
            }, EF)
          }))
        }), (0, RF.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(iW - 10 - qC.b.length).fill(0).map(((FF, eF) => {
            const EF = iW - qC.b.length - eF - 1;
            return (0, RF.jsx)(NW.d, {
              idx: EF,
              draggedInfo: WF,
              specialItemInfo: SF,
              craftFlyHoldbackInfo: (0, bS.j)(CF, EF),
              setHovered: AF(EF),
              pointerDown: uF(EF),
              pointerUp: hF(EF),
              variation: dF ? bW : void 0,
              showNewDot: PF(EF)
            }, EF)
          }))
        })]
      })
    }
    var DS = SF(35317),
      LS = SF(35319);

    function mC(FF) {
      const {
        e: WF,
        idx: SF
      } = FF, CF = (0, hW.h)(FF.readInventory(), SF), AF = (0, hW.p)(WF);
      SF === dW.c ? function(FF, WF) {
        const {
          draggedInfoRef: SF,
          removeItem: CF,
          removeDraggedInfoRef: AF,
          close: uF
        } = FF;
        if (SF.current) {
          const FF = WF && SF.current.amount || 1;
          CF(SF.current.idx, FF, !0) && (SF.current.amount -= FF, SF.current.amount <= 0 && AF())
        } else WF && uF()
      }(FF, AF) : SF === dW.g ? function(FF, WF) {
        const {
          e: SF,
          draggedInfoRef: CF,
          specialItemRef: AF,
          moveAmtIntoSlot: uF,
          removeDraggedInfoRef: hF
        } = FF;
        if ((0, hW.x)(SF) && AF.current) AF.current = null;
        else if (CF.current && AF.current && (CF.current.idx === AF.current.idx || (0, LS.d)(CF.current, AF.current)) && CF.current.amount > 0 && AF.current.amount > 0 && AF.current.amount < tS.h.maxItemStackSize)
          if (CF.current.idx === AF.current.idx) {
            if (WF) {
              const FF = Math.min(CF.current.amount, tS.h.maxItemStackSize - AF.current.amount);
              AF.current.amount += FF, CF.current.amount -= FF
            } else CF.current.amount--, AF.current.amount++;
            CF.current.amount <= 0 && hF()
          } else if (WF) {
          const FF = Math.min(CF.current.amount, tS.h.maxItemStackSize - AF.current.amount);
          uF(AF.current.idx, FF) && (AF.current.amount += FF)
        } else {
          uF(AF.current.idx, 1) && AF.current.amount++
        } else if (!CF.current || AF.current || WF) {
          const FF = CF.current;
          CF.current = AF.current, AF.current = FF
        } else CF.current.amount--, AF.current = {
          idx: CF.current.idx,
          name: CF.current.name,
          attributes: CF.current.attributes,
          amount: 1
        }
      }(FF, AF) : (0, hW.x)(WF) ? function(FF, WF) {
        var SF, CF;
        const {
          idx: AF,
          draggedInfoRef: uF,
          specialItemRef: hF,
          canCraft: bW,
          variation: dF,
          swapSlots: PF,
          moveIntoSlots: RF
        } = FF;
        if (!WF) return;
        let iW = WF.amount;
        AF === (null === (SF = uF.current) || void 0 === SF ? void 0 : SF.idx) && (iW = uF.current.amount <= 0 ? 0 : WF.amount - uF.current.amount);
        AF === (null === (CF = hF.current) || void 0 === CF ? void 0 : CF.idx) && (iW = hF.current.amount <= 0 ? 0 : WF.amount - hF.current.amount);
        if (0 === iW) return;
        const eF = FF.readInventory(),
          EF = eF.player.length,
          QF = eF.chest,
          rW = EF - qC.b.length,
          gW = () => {
            if (!(0, FW.f)()) return void RF(10, rW, AF, iW);
            const FF = FF => {
              const SF = (0, hW.h)(eF, FF);
              return SF ? {
                amount: SF.amount,
                stacksWithMoved: (0, LS.d)(SF, WF)
              } : null
            };
            for (const WF of ((FF, WF, SF, CF, AF) => {
                const uF = [];
                let hF = CF;
                if (null !== CF) {
                  let bW = 0;
                  for (let CF = WF; CF < SF; CF++) {
                    const WF = FF(CF);
                    null !== WF && void 0 !== WF && WF.stacksWithMoved && null !== WF.amount && WF.amount > 0 && (bW += Math.max(0, AF - WF.amount))
                  }
                  const dF = Math.min(CF, bW);
                  if (dF > 0 && (uF.push({
                      start: WF,
                      end: SF,
                      amount: dF
                    }), hF = CF - dF), hF <= 0) return uF
                }
                for (let bW = SF - 1; bW >= WF; bW--)
                  if (null === FF(bW)) {
                    uF.push({
                      start: bW,
                      end: bW + 1,
                      amount: hF
                    });
                    break
                  } return uF
              })(FF, 10, rW, iW, tS.h.maxItemStackSize)) RF(WF.start, WF.end, AF, WF.amount)
          };
        if (!bW || "Enchanting Table" !== dF && "Salvaging Table" !== dF) {
          const SF = (0, LF.Cb)(WF.name),
            CF = SF ? (0, LF.Ab)(SF) : null;
          if (!qC.b.includes(SF) || AF !== CF && (0, hW.l)(eF, FF.itemInfo, CF, AF))
            if (QF)
              if (AF < EF) {
                var tW, TF;
                const [FF, WF] = null !== (tW = null === (TF = (0, rC.d)(QF.type)) || void 0 === TF ? void 0 : TF.quickMoveRange) && void 0 !== tW ? tW : [0, QF.numSlots];
                RF(EF + FF, EF + WF, AF, iW)
              } else RF(0, EF - qC.b.length, AF, iW);
          else eF.creative ? AF < 10 ? gW() : AF < EF ? RF(0, 10, AF, iW) : RF(0, EF - qC.b.length, AF, null !== WF.amount ? tS.h.maxItemStackSize : null) : AF < 10 ? gW() : RF(0, 10, AF, iW);
          else AF < EF - qC.b.length || AF >= EF ? PF(CF, AF) : (RF(0, EF - qC.b.length, CF, iW), AW.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else hF.current = {
          idx: AF,
          name: WF.name,
          attributes: WF.attributes,
          amount: null !== WF.amount ? iW : 0
        }
      }(FF, CF) : FF.draggedInfoRef.current ? function(FF, WF, SF, CF) {
        const {
          draggedInfoRef: AF,
          specialItemRef: uF,
          moveAmtIntoSlot: hF,
          swapSlots: bW,
          removeItem: dF,
          removeDraggedInfoRef: PF
        } = FF, RF = FF.readInventory(), iW = AF.current.idx;
        if (SF && (WF === iW || (0, LS.d)(AF.current, SF)) && AF.current.amount > 0 && (0, hW.b)(SF) > 0 && (SF.amount < tS.h.maxItemStackSize || WF === iW)) CF ? SF.amount + AF.current.amount <= tS.h.maxItemStackSize || WF === iW ? hF(WF, AF.current.amount) : hF(WF, tS.h.maxItemStackSize - SF.amount) : hF(WF, 1);
        else if (AF.current.amount > 0 && !SF) hF(WF, CF ? AF.current.amount : 1);
        else if (CF || SF || 0 === AF.current.amount)
          if (RF.creative && !RF.chest && WF >= RF.player.length) {
            const FF = 0 === AF.current.amount ? 1 : AF.current.amount;
            dF(AF.current.idx, FF, !1) && PF()
          } else {
            var eF;
            const SF = (null === (eF = uF.current) || void 0 === eF ? void 0 : eF.idx) === WF;
            if (bW(WF, AF.current.idx)) {
              const CF = FF.readInventory(),
                hF = (0, hW.h)(CF, iW),
                bW = !CF.chest && CF.creative && AF.current.idx >= CF.player.length;
              if (hF && AF.current.idx !== WF && !bW) {
                let FF = (0, hW.b)(hF);
                SF && (FF -= uF.current.amount), AF.current = SF && 0 === FF ? null : {
                  idx: AF.current.idx,
                  name: hF.name,
                  attributes: hF.attributes,
                  amount: FF
                }
              } else PF()
            }
          }
        else hF(WF, 1)
      }(FF, SF, CF, AF) : function(FF, WF, SF, CF) {
        var AF;
        const {
          draggedInfoRef: uF,
          specialItemRef: hF
        } = FF;
        if (!SF) return;
        let bW = (0, hW.b)(SF);
        const dF = (null === (AF = hF.current) || void 0 === AF ? void 0 : AF.idx) === WF;
        dF && (bW -= hF.current.amount);
        CF || (bW = Math.ceil(bW / 2));
        uF.current = dF && 0 === bW ? null : {
          idx: WF,
          name: SF.name,
          attributes: SF.attributes,
          amount: bW
        }
      }(FF, SF, CF, AF)
    }

    function OS(FF, WF) {
      return !!WF && WF.name === FF.name
    }

    function xC() {
      return PF.gameBridge.latest("inventory")
    }

    function ZS(FF, WF, SF) {
      return PF.gameBridge.send("removeInventoryItem", {
        slot: FF,
        amount: WF,
        drop: SF
      })
    }

    function oS(FF) {
      return (0, hW.g)(FF, PF.gameBridge.latest("itemInfo"), PF.gameBridge.latest("stationItems").enchantable)
    }

    function YS(FF) {
      let {
        show: WF,
        close: SF,
        canCraft: CF,
        variation: uF,
        inventoryItemsMoveable: hF,
        setCraftFlyAnims: bW
      } = FF;
      (0, mW.e)("itemInfo");
      const [dF, RF] = (0, AF.useState)(null), [iW, eF] = (0, AF.useState)(null), [EF, QF] = (0, AF.useState)(!1), rW = (0, AF.useRef)(null), gW = (0, AF.useRef)(null), tW = (0, AF.useRef)(null), TF = (0, AF.useRef)(null), [aW, kW] = (0, AF.useReducer)((FF => FF + 1), 0), qW = (0, AF.useCallback)((() => {
        WF && kW()
      }), [WF, kW]), VF = (0, AF.useCallback)((() => {
        gW.current = null, GF.current = null, qW()
      }), [qW]), NF = (0, AF.useCallback)(((FF, WF) => {
        bW((SF => SF.map((SF => "ingredient" === SF.kind ? SF : SF.fK === FF ? {
          ...SF,
          fK: WF,
          to: (0, hW.c)(WF)
        } : SF.fK === WF ? {
          ...SF,
          fK: FF,
          to: (0, hW.c)(FF)
        } : SF))))
      }), [bW]), DF = (0, AF.useCallback)(((FF, WF) => {
        const SF = fF.current;
        if (SF.x = FF, SF.y = WF, rW.current) !yW.current.isTouch || yW.current.itemBeingDragged && !GF.current ? (rW.current.style.transform = `translate(${SF.x}px, ${SF.y}px)`, QF(yW.current.isTouch && !GF.current)) : (rW.current.style.transform = "translate(0.5rem, 0.5rem)", QF(!0));
        else if (TF.current) {
          const SF = TF.current;
          let CF = FF + 10,
            AF = WF + 10;
          const uF = SF.offsetWidth,
            hF = SF.offsetHeight;
          CF + uF > window.innerWidth && (CF = FF - uF - 10), AF + hF > window.innerHeight && (AF = WF - hF - 10), CF < 0 && (CF = 0), AF < 0 && (AF = 0), TF.current.style.transform = `translate(${CF}px, ${AF}px)`
        }
      }), []), OF = (0, AF.useCallback)((FF => (WF, SF, CF) => {
        if (RF(WF && void 0 !== FF ? FF : null), WF) {
          if (void 0 === FF && !SF) return void(0, DS.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== FF) {
            var AF;
            const WF = xC();
            let SF;
            if (SF = FF === dW.g ? tW.current ? (0, hW.h)(WF, tW.current.idx) : null : (0, hW.h)(WF, FF), !SF) return void eF(null);
            if ((null === (AF = tW.current) || void 0 === AF ? void 0 : AF.idx) === FF) {
              if (0 === (0, hW.b)(SF) - tW.current.amount) return void eF(null)
            }
            eF(oS(SF))
          } else eF({
            name: SF.name,
            desc: SF.desc,
            fontStyle: "normal"
          })
        } else eF(null);
        CF && setTimeout((() => {
          DF(CF.pageX, CF.pageY)
        }), 0)
      }), [DF]), xW = (0, AF.useCallback)(((FF, WF) => {
        const SF = PF.gameBridge.send("moveInventoryItem", {
          from: gW.current.idx,
          to: FF,
          amount: WF
        });
        return SF ? (gW.current.amount -= WF, gW.current.amount <= 0 && VF()) : console.error("moveInventoryItem failed"), SF
      }), [VF]), ZF = (0, AF.useCallback)(((FF, WF) => {
        const SF = tW.current,
          CF = null === SF || void 0 === SF ? void 0 : SF.idx;
        SF && (SF.idx = function(FF, WF, SF) {
          return FF === WF ? SF : FF === SF ? WF : FF
        }(CF, FF, WF));
        const AF = PF.gameBridge.send("swapInventorySlots", {
          a: FF,
          b: WF
        });
        return AF ? NF(FF, WF) : SF && (SF.idx = CF), AF
      }), [NF]), oF = (0, AF.useCallback)(((FF, WF, SF, CF) => {
        const AF = PF.gameBridge.send("quickMoveInventoryItem", {
          slot: SF,
          start: FF,
          end: WF,
          amount: CF
        });
        null !== AF && NF(SF, AF)
      }), [NF]), YF = (0, AF.useCallback)(((FF, WF) => {
        var AF;
        ((FF, WF, SF) => {
          const CF = FF - (SF - qC.b.length);
          return !(!WF || CF < 0 || CF >= qC.b.length) && (0, LF.Cb)(WF) !== qC.b[CF]
        })(WF, null === (AF = gW.current) || void 0 === AF ? void 0 : AF.name, xC().player.length) || (mC({
          e: FF,
          idx: WF,
          readInventory: xC,
          itemInfo: PF.gameBridge.latest("itemInfo"),
          draggedInfoRef: gW,
          specialItemRef: tW,
          moveAmtIntoSlot: xW,
          swapSlots: ZF,
          moveIntoSlots: oF,
          removeItem: ZS,
          removeDraggedInfoRef: VF,
          close: SF,
          canCraft: CF,
          variation: uF
        }), qW())
      }), [CF, SF, xW, oF, VF, ZF, uF, qW]), MF = (0, AF.useRef)(0), cW = (0, AF.useRef)(null), GF = (0, AF.useRef)(null), zW = (0, AF.useRef)(null), IF = (0, AF.useRef)(new Set), fF = (0, AF.useRef)({
        x: 0,
        y: 0
      }), yW = (0, AF.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), sF = (0, AF.useCallback)((() => (zW.current = null, yW.current.itemBeingDragged = !1, clearTimeout(cW.current), !!GF.current && (GF.current = null, qW(), !0))), [qW]);
      (0, AF.useEffect)((() => {
        sF(), IF.current.clear()
      }), [WF]);
      const nF = FF => void 0 !== FF && (IF.current.has(FF) || null !== zW.current && FF !== zW.current),
        HF = FF => {
          yW.current.isTouch = (0, hW.q)(FF)
        },
        KF = (0, AF.useCallback)((FF => WF => {
          const CF = (0, hW.q)(WF);
          if (CF || DF(WF.pageX, WF.pageY), hF)
            if (nF(WF.pointerId)) void 0 !== WF.pointerId && IF.current.add(WF.pointerId);
            else {
              if (HF(WF), MF.current = Date.now(), CF) {
                yW.current.itemBeingDragged = !0, zW.current = WF.pointerId;
                const SF = (0, hW.h)(xC(), FF);
                if (SF && SF.amount && SF.amount > 0) {
                  const SF = WF.pageX,
                    CF = WF.pageY,
                    AF = fF.current.x,
                    uF = fF.current.y;
                  clearTimeout(cW.current), cW.current = setTimeout((() => {
                    if (gW.current && gW.current.idx === FF && (Math.abs(SF - fF.current.x) < 20 && Math.abs(CF - fF.current.y) < 20 || AF === fF.current.x && uF === fF.current.y) && yW.current.itemBeingDragged) {
                      const FF = xC(),
                        SF = FF.creative && !FF.chest && gW.current.idx >= tS.h.numInvenSlots && null !== (0, hW.h)(FF, gW.current.idx).amount ? tS.h.maxItemStackSize : gW.current.amount;
                      GF.current = {
                        initTouchX: WF.pageX,
                        initTouchY: WF.pageY,
                        maxAmount: SF
                      }, gW.current.amount = Math.ceil(gW.current.amount / 2), rW.current.style.transform = "translate(0.5rem, 0.5rem)", QF(!0), qW()
                    }
                  }), 500)
                }
              }
              YF(WF, FF)
            }
          else FF === dW.c && (0, hW.p)(WF) && SF()
        }), [DF, YF, hF, SF, qW]),
        wF = (0, AF.useCallback)((FF => FF => {
          if (nF(FF.pointerId)) return;
          const WF = (0, hW.q)(FF);
          if (HF(FF), !sF()) {
            if (WF && gW.current && Date.now() - MF.current > 150) {
              const WF = document.elementFromPoint(FF.clientX, FF.clientY);
              if (null !== WF) {
                const SF = WF.getAttribute("data-inven-idx");
                null !== SF ? YF(FF, parseInt(SF)) : WF.classList.contains("InventoryBackgroundScreen") && YF(FF, -1)
              }
            }
            DF(FF.pageX, FF.pageY)
          }
        }), [DF, YF, sF]);
      (0, AF.useEffect)((() => {
        let FF;
        const SF = ["pointerup", "pointercancel"],
          CF = FF => {
            IF.current.has(FF.pointerId) ? setTimeout((() => {
              IF.current.delete(FF.pointerId)
            }), 0) : FF.pointerId === zW.current && setTimeout((() => {
              zW.current === FF.pointerId && sF()
            }), 0)
          };
        if (WF) {
          for (const FF of SF) document.addEventListener(FF, CF, !0);
          if (!yW.current.isTouch) {
            const FF = fF.current;
            DF(FF.x, FF.y)
          }
          FF = FF => {
            FF.preventDefault(), nF(FF.pointerId) || (HF(FF), DF(FF.pageX, FF.pageY), GF.current && FF.pointerId === zW.current && (FF => {
              if (!gW.current) return GF.current = null, void qW();
              const {
                initTouchX: WF,
                maxAmount: SF
              } = GF.current, CF = (FF.pageX - WF) * GF.current.maxAmount / 160, AF = Math.ceil(SF / 2) + Math.ceil(CF);
              gW.current.amount = Math.min(SF, Math.max(1, AF)), qW()
            })(FF))
          }, document.addEventListener("pointermove", FF, !0)
        }
        return () => {
          document.removeEventListener("pointermove", FF, !0);
          for (const FF of SF) document.removeEventListener(FF, CF, !0)
        }
      }));
      const XF = (0, AF.useCallback)((() => {
          if (gW.current) {
            const FF = (0, hW.h)(xC(), gW.current.idx);
            (!OS(gW.current, FF) || FF.amount < gW.current.amount) && VF()
          }
        }), [VF]),
        UF = (0, AF.useCallback)((() => {
          const FF = gW.current;
          if (FF) {
            const WF = (0, hW.h)(xC(), FF.idx);
            OS(FF, WF) && (FF.attributes = WF.attributes)
          }
        }), []);
      return {
        draggedDomRef: rW,
        draggedInfoRef: gW,
        specialItemRef: tW,
        hoverInfoDomRef: TF,
        longHoldSplitInfoRef: GF,
        currHoveredIdx: dF,
        currHoveredDisplayInfo: iW,
        displayDraggedItemName: EF,
        forceRerenderIfVisible: qW,
        removeDraggedInfoRef: VF,
        checkDraggedItemConsistencyWithInven: XF,
        refreshDraggedAttributes: UF,
        swapSlots: ZF,
        getPointerDownForIdx: KF,
        getPointerUpForIdx: wF,
        getSetHovering: OF,
        setCurrHoveredDisplayInfo: eF,
        moveFollowerTo: DF
      }
    }
    class MS {
      constructor(FF) {
        this.snapshot = [], this.newSlots = new Set, this.update(FF, !1)
      }
      update(FF, WF) {
        const SF = FF.map((FF => {
          var WF;
          return FF ? {
            name: FF.name,
            amount: null !== (WF = FF.amount) && void 0 !== WF ? WF : 1
          } : null
        }));
        SF.forEach(((FF, SF) => {
          const CF = this.snapshot[SF],
            AF = (null === FF || void 0 === FF ? void 0 : FF.name) !== (null === CF || void 0 === CF ? void 0 : CF.name);
          (!FF || AF || FF.amount < CF.amount) && this.newSlots.delete(SF), WF && FF && (AF || FF.amount > CF.amount) && this.newSlots.add(SF)
        })), this.snapshot = SF
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(FF) {
        return this.newSlots.has(FF)
      }
    }
    const cC = (FF, WF, SF) => ({
      button: WF,
      shiftKey: SF,
      pageX: FF.clientX,
      pageY: FF.clientY,
      clientX: FF.clientX,
      clientY: FF.clientY,
      pointerType: "mouse"
    });

    function GS(FF) {
      const [WF, SF] = (0, AF.useState)(FF);
      return FF && !WF && SF(!0), (0, AF.useEffect)((() => {
        if (WF) return;
        let FF = !0;
        const CF = () => {
            FF && (FF = !1, SF(!0))
          },
          AF = "function" === typeof window.requestIdleCallback,
          uF = AF ? window.requestIdleCallback(CF, {
            timeout: 2e3
          }) : void 0,
          hF = setTimeout(CF, AF ? 2e3 : 1e3);
        return () => {
          FF = !1, clearTimeout(hF), void 0 !== uF && window.cancelIdleCallback(uF)
        }
      }), [WF]), WF
    }
    const zC = (0, AF.memo)((function(FF) {
      var WF;
      let {
        show: SF,
        onOpen: CF,
        onClose: uF,
        variation: bW
      } = FF;
      const iW = (0, AF.useRef)(null),
        eF = (0, AF.useRef)(null),
        EF = function(FF) {
          const [WF, SF] = (0, AF.useState)(!0), [CF, uF] = (0, AF.useState)(!1), hF = (0, AF.useRef)(null), bW = (0, AF.useRef)(null), PF = (0, dF.k)("_shield"), RF = (0, AF.useRef)(null), iW = (0, dF.k)("_health"), eF = (0, AF.useRef)(null);

          function EF(FF) {
            const WF = Date.now() + FF;
            WF < bW.current || (SF(!1), clearTimeout(hF.current), bW.current = WF, hF.current = setTimeout((() => {
              SF(!0)
            }), FF))
          }
          return (0, AF.useEffect)((() => {
            EF(RW);
            const FF = QF.j.subscribe("requestingPlayVideoAd", (() => {
              EF(RW)
            }));
            return () => {
              clearTimeout(hF.current), QF.j.unsubscribe(FF)
            }
          }), []), (0, AF.useEffect)((() => {
            (RF.current > PF || eF.current > iW) && EF(6e4), RF.current = PF, eF.current = iW
          }), [PF, iW]), (0, AF.useEffect)((() => {
            let WF = null;
            return FF ? WF = setTimeout((() => {
              uF(!0)
            }), 250) : uF(!1), () => {
              clearTimeout(WF)
            }
          }), [FF]), WF && CF
        }(SF),
        rW = GS(SF),
        gW = GS(SF),
        [tW, TF] = (0, AF.useState)([]),
        aW = (0, AF.useCallback)((FF => {
          TF((WF => WF.filter((WF => WF.id !== FF))))
        }), []),
        kW = (0, AF.useRef)(null),
        qW = (0, AF.useRef)(0),
        VF = (0, AF.useCallback)((() => {
          kW.current && (qW.current = kW.current.scrollTop), uF()
        }), [uF]),
        NF = (0, dF.k)("inventoryItemsMoveable"),
        OF = (0, dF.k)("canCraft"),
        {
          clientEscMenuOptions: xW
        } = (0, AS.d)(["clientEscMenuOptions"]),
        ZF = (0, AF.useRef)(null);
      ZF.current || (ZF.current = new MS(PF.gameBridge.latest("inventory").player));
      const oF = ZF.current,
        {
          draggedDomRef: YF,
          draggedInfoRef: MF,
          specialItemRef: GF,
          hoverInfoDomRef: zW,
          longHoldSplitInfoRef: IF,
          currHoveredIdx: fF,
          currHoveredDisplayInfo: yW,
          displayDraggedItemName: sF,
          forceRerenderIfVisible: nF,
          removeDraggedInfoRef: HF,
          checkDraggedItemConsistencyWithInven: KF,
          refreshDraggedAttributes: wF,
          swapSlots: XF,
          getPointerDownForIdx: UF,
          getPointerUpForIdx: BF,
          getSetHovering: jW,
          setCurrHoveredDisplayInfo: vW,
          moveFollowerTo: JF
        } = YS({
          show: SF,
          close: VF,
          canCraft: OF,
          variation: bW,
          inventoryItemsMoveable: NF,
          setCraftFlyAnims: TF
        });
      (0, AF.useEffect)((() => {
        const FF = !SF && null !== PF.gameBridge.latest("inventory").chest;
        if (FF && PF.gameBridge.send("closeChest", null), SF || (oF.clearMarks(), jW(null)(!1)), QF.j.Uu("inventoryComponentVisible", SF), FF) {
          AW.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [SF]), (0, mW.b)("chestToggled", (FF => {
        if (FF ? CF() : SF && VF(), FF) {
          AW.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      })), (0, mW.b)("inventory", (FF => {
        let {
          player: WF
        } = FF;
        var CF, AF, uF;
        (oF.update(WF, !SF), GF.current) && (GF.current = (AF = GF.current, uF = null !== (CF = WF[GF.current.idx]) && void 0 !== CF ? CF : null, OS(AF, uF) ? (AF.attributes = uF.attributes, null !== uF.amount && AF.amount > uF.amount && (AF.amount = uF.amount), AF) : null));
        wF(), null !== fF && jW(fF)(!0), nF()
      })), (0, AF.useEffect)((() => (PF.gameBridge.send("setInventoryOpen", SF), () => {
        PF.gameBridge.send("setInventoryOpen", !1)
      })), [SF]);
      const pF = (FF, WF) => {
        if (FF === dW.g) return void(FF => {
          const WF = GF.current;
          if (!WF || null === (0, hW.h)(PF.gameBridge.latest("inventory"), WF.idx)) return;
          const SF = FF ? Math.max(WF.amount, 1) : 1,
            CF = WF.amount - SF;
          if (!PF.gameBridge.send("removeInventoryItem", {
              slot: WF.idx,
              amount: SF,
              drop: !0
            })) return;
          const AF = GF.current;
          AF && (AF.amount = Math.min(AF.amount, CF), AF.amount <= 0 && (GF.current = null)), nF()
        })(WF);
        const SF = null === FF ? null : (0, hW.h)(PF.gameBridge.latest("inventory"), FF);
        if (null !== SF) {
          var CF, AF, uF;
          const hF = WF && null !== (CF = SF.amount) && void 0 !== CF ? CF : 1;
          PF.gameBridge.send("removeInventoryItem", {
            slot: FF,
            amount: hF,
            drop: !0
          }), FF === (null === (AF = MF.current) || void 0 === AF ? void 0 : AF.idx) && (MF.current.amount -= hF, MF.current.amount <= 0 && HF(), nF()), FF === (null === (uF = GF.current) || void 0 === uF ? void 0 : uF.idx) && (GF.current = null, nF())
        }
      };
      (0, mW.b)("inventoryDropRequested", (FF => {
        SF && fF !== dW.g && pF(fF, FF)
      }));
      const FW = (FF, WF) => {
        let SF = WF;
        if (WF === dW.g) {
          if (!GF.current) return;
          SF = GF.current.idx
        }
        const CF = XF(FF, SF);
        if (CF && MF.current && (MF.current.idx === SF ? MF.current.idx = FF : MF.current.idx === FF && (MF.current.idx = SF)), CF && WF === dW.g) {
          const FF = (0, hW.h)(PF.gameBridge.latest("inventory"), SF);
          GF.current = FF ? {
            idx: SF,
            name: FF.name,
            attributes: FF.attributes,
            amount: FF.amount
          } : null
        }
        nF()
      };
      (0, mW.b)("numberKeyPressed", (FF => {
        null !== fF && SF && FW(FF - 1, fF)
      })), (0, AF.useEffect)((() => {
        SF || (GF.current = null, HF(), vW(null))
      }), [SF, HF, vW, GF]);
      const WW = GF.current;
      (0, AF.useEffect)((() => {
        fF === dW.g && jW(dW.g)(!0)
      }), [WW, fF, jW]), (0, mW.b)("chestRefreshed", (() => {
        KF(), wF(), nF()
      })), (0, mW.b)("inventorySynced", (() => {
        GF.current = null, HF(), nF()
      }));
      const [SW, PW] = (0, AF.useState)(new Map), iS = null !== (WF = SW.get(bW)) && void 0 !== WF ? WF : null, rS = (FF, WF) => {
        PW((SF => {
          const CF = SF.get(FF);
          return CF && CF.name === WF.name && CF.YH === WF.YH ? SF : new Map(SF).set(FF, WF)
        }))
      };
      (0, DF.e)("craftingRecipesEdited", (() => {
        nF()
      })), (0, DF.e)(nW.d, (FF => {
        let {
          variation: WF,
          itemName: SF
        } = FF;
        rS(WF, {
          name: SF,
          YH: 0
        })
      }));
      const [gS, tS] = (0, AF.useState)(null), [TW, aS] = (0, AF.useState)(null);
      (0, mW.b)("enchantingTableOpened", (FF => {
        let {
          position: WF,
          blockName: SF
        } = FF;
        tS(WF), aS(SF)
      }));
      const [kS, qS] = (0, AF.useState)(""), [VW, DW] = (0, AF.useState)(null);
      (0, AF.useEffect)((() => {
        SF && kW.current && (kW.current.scrollTop = qW.current)
      }), [SF]);
      return (FF => {
        const WF = (0, AF.useRef)(FF);
        WF.current = FF, (0, AF.useEffect)((() => {
          if (!FF.show) return;
          const SF = (FF, SF, CF, AF) => {
              const {
                getPointerDownForIdx: uF,
                getPointerUpForIdx: hF
              } = WF.current;
              uF(FF)(cC(SF, CF, AF)), hF(FF)(cC(SF, CF, AF))
            },
            CF = {
              primary: (FF, WF) => {
                SF(FF, WF, 0, !1)
              },
              secondary: (FF, WF) => {
                SF(FF, WF, 2, !1)
              },
              quickMove: (FF, WF) => {
                SF(FF, WF, 0, !0)
              },
              dropHeld: (FF, SF) => {
                WF.current.getPointerDownForIdx(dW.c)(cC(SF, FF ? 0 : 2, !1))
              },
              dropSlot: (FF, SF) => {
                WF.current.dropFromIdx(FF, SF)
              },
              swapWithHotbar: (FF, SF) => {
                WF.current.swapWithHotbar(FF, SF)
              },
              cancel: () => {
                WF.current.removeDraggedInfoRef()
              },
              isHolding: () => !!WF.current.draggedInfoRef.current,
              hasItemAt: FF => {
                const {
                  draggedInfoRef: SF,
                  specialItemRef: CF
                } = WF.current;
                if (FF === dW.g) return !!CF.current;
                const AF = (0, hW.h)(PF.gameBridge.latest("inventory"), FF);
                return !!AF && (0, NW.e)(FF, (0, hW.b)(AF), [SF.current, CF.current]).shown
              },
              hover: (FF, SF) => {
                const {
                  moveFollowerTo: CF,
                  getSetHovering: AF
                } = WF.current;
                CF(SF.clientX, SF.clientY), AF(null !== FF && void 0 !== FF ? FF : void 0)(null !== FF, void 0, {
                  pageX: SF.clientX,
                  pageY: SF.clientY
                })
              },
              moveTo: FF => {
                WF.current.moveFollowerTo(FF.clientX, FF.clientY)
              },
              close: () => {
                WF.current.close()
              }
            };
          return (0, lF.j)(CF)
        }), [FF.show])
      })({
        show: SF,
        close: VF,
        draggedInfoRef: MF,
        specialItemRef: GF,
        getPointerDownForIdx: UF,
        getPointerUpForIdx: BF,
        getSetHovering: jW,
        moveFollowerTo: JF,
        removeDraggedInfoRef: HF,
        dropFromIdx: pF,
        swapWithHotbar: FW
      }), (0, AF.useEffect)((() => {
        QF.j.Uu("inventoryDraggedItemUpdated", {
          draggedInfo: MF.current,
          specialItemInfo: GF.current,
          setHovered: jW,
          pointerDown: UF,
          pointerUp: BF,
          variation: OF ? bW : void 0,
          craftFlyAnims: tW
        })
      })), (0, RF.jsxs)(cW.b, {
        show: SF,
        style: {
          touchAction: SF ? "none" : void 0
        },
        children: [MF.current && (0, RF.jsx)(eW, {
          draggedInfo: MF.current,
          toAddRef: YF
        }), MF.current && sF && (0, RF.jsx)(EW, {
          className: "DraggedInvenItemName",
          displayInfo: oS(MF.current),
          domRef: null
        }), !MF.current && yW && (0, RF.jsx)(EW, {
          displayInfo: yW,
          domRef: zW
        }), IF.current && MF.current && (0, RF.jsx)(QW, {
          info: IF.current,
          draggedInfo: MF.current
        }), tW.map((FF => (0, RF.jsx)(bS.b, {
          anim: FF,
          onComplete: aW
        }, FF.id))), (0, RF.jsx)(hF.b, {
          show: SF,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: VF,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: UF(dW.c),
          pointerUp: BF(dW.c),
          doGameplayStartStopOnShow: !0
        }), rW && (0, RF.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, RF.jsx)("div", {
            ref: iW,
            className: "InventoryAdOuter",
            children: (0, RF.jsx)(uW.d, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: iW
              },
              verticalAlign: "start",
              showing: SF && EF,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, RF.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, RF.jsxs)("div", {
              className: "Inventory",
              children: [(0, RF.jsx)("div", {
                className: "InventoryFiller"
              }), (0, RF.jsx)(CW, {
                show: SF
              }), (0, RF.jsxs)("div", {
                className: "InvenBody",
                children: [(0, RF.jsx)(kC, {
                  variation: bW,
                  canCraft: OF,
                  show: SF,
                  creativeMounted: gW,
                  specialItemRef: GF,
                  draggedInfo: MF.current,
                  getSetHovering: jW,
                  getPointerDownForIdx: UF,
                  getPointerUpForIdx: BF,
                  enchantingTablePosition: gS,
                  enchantingTableBlockName: TW,
                  selectedCraftable: iS,
                  dispatchSelectedCraftable: FF => {
                    rS(bW, FF)
                  },
                  creativeScrollDiv: kW,
                  creativeSearchVal: kS,
                  setCreativeSearchVal: qS,
                  creativeCategory: VW,
                  setCreativeCategory: DW,
                  onCraft: function(FF, WF) {
                    let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (KF(), (FF || SF.length > 0) && TF((WF => {
                        const CF = [...WF],
                          AF = WF.filter((FF => "ingredient" === FF.kind)).length;
                        for (const FF of SF.slice(0, Math.max(0, 24 - AF))) CF.push({
                          id: (0, bS.f)(),
                          ...FF,
                          to: FF.to
                        });
                        return FF && CF.push({
                          id: (0, bS.f)(),
                          ...FF,
                          to: (0, hW.c)(FF.fK)
                        }), CF
                      })), null !== WF) {
                      var CF;
                      const FF = PF.gameBridge.latest("inventory");
                      (0, LF.Cb)(null === (CF = (0, hW.h)(FF, WF)) || void 0 === CF ? void 0 : CF.name) ? UF(WF)({
                        button: 0,
                        shiftKey: !0
                      }): XF(WF, FF.selectedSlot)
                    }
                  }
                }), (0, RF.jsx)(NS, {
                  draggedInfo: MF.current,
                  specialItemInfo: GF.current,
                  craftFlyAnims: tW,
                  getSetHovering: jW,
                  getPointerDownForIdx: UF,
                  getPointerUpForIdx: BF,
                  variation: bW,
                  canCraft: OF,
                  isNewSlot: FF => xW.showNewItemIndicator && oF.isNew(FF)
                })]
              })]
            }), (0, RF.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, RF.jsx)("div", {
                ref: eF,
                className: "InventoryAd",
                children: (0, RF.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var IS = SF(1249),
      fS = SF(132);
    const yC = (0, AF.memo)((function(FF) {
      let {
        show: WF,
        onOpen: SF,
        onClose: CF
      } = FF;
      const uF = (0, AF.useRef)(0),
        bW = () => (0, IS.d)() && !(0, IS.m)() && uF.current <= 2;
      WF = bW() && WF;
      const dF = () => {
        uF.current++, CF()
      };
      (0, DF.e)("ctrlCrouchWithoutFullscreen", (() => {
        bW() && SF()
      })), (0, DF.e)("displaymodeFullscreenChange", (FF => {
        WF && FF && dF()
      }));
      const PF = "crazygames" === fS.s;
      return (0, RF.jsx)(hF.b, {
        close: dF,
        escDoesExit: !0,
        show: WF,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, RF.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, RF.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), PF && (0, RF.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, RF.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, RF.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!PF && (0, RF.jsx)(EF.k, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, IS.p)(), dF()
              },
              children: (0, RF.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, RF.jsx)(EF.E, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                dF()
              },
              children: (0, RF.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var sS = SF(1124),
      nS = SF(2800);
    SF(2809);
    const HS = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(""), [dF, iW] = (0, AF.useState)(""), [eF, EF] = (0, AF.useState)(null), [QF, rW] = (0, AF.useState)(null), gW = (0, mW.e)("hiddenPlayerNames"), tW = {
          kind: "worldCodeLine",
          onSubmit: (FF, WF) => {
            CF(), PF.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: QF,
              RC: FF,
              details: WF
            })
          }
        }, TF = {
          kind: "player",
          shownPlayerName: (0, sS.g)(uF, gW),
          onSubmit: (FF, WF) => {
            CF(), (0, nS.g)({
              playerId: dF,
              playerName: uF,
              chatMsgId: QF,
              policyId: FF,
              details: WF
            })
          }
        };
        return (0, DF.e)("OpenReportMenu", (FF => {
          let {
            playerEId: WF,
            playerName: CF,
            rb: AF,
            serverChatMsgId: uF
          } = FF;
          iW(WF), bW(CF), EF(AF), rW(uF), SF()
        })), (0, RF.jsx)(hF.b, {
          show: WF,
          close: CF,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, RF.jsx)("div", {
            className: "ReportMenu",
            children: WF && (0, RF.jsx)(nS.d, {
              reported: null === dF ? tW : TF,
              chatMessage: eF,
              inGame: !0,
              onCancel: CF
            })
          })
        })
      })),
      KS = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(null), [dF, iW] = (0, AF.useState)(0);
        (0, DF.e)("OpenDiscordReportBox", (FF => {
          PF.gameBridge.send("requestDiscordReportKey", FF), iW(0), SF()
        }));
        return (0, DF.e)("setDiscordReportKey", (FF => {
          bW(FF)
        })), (0, RF.jsx)(hF.b, {
          show: WF,
          close: () => {
            CF(), bW(null), iW(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, RF.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, RF.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, RF.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, RF.jsx)("br", {}), (0, RF.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, RF.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, RF.jsx)("br", {}), "2. Copy the Report Key below", (0, RF.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, RF.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, RF.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, RF.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== uF && void 0 !== uF ? uF : "Loading report key..."
              }), (0, RF.jsx)(EF.e, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(uF).catch((FF => {
                    console.error("Failed to copy report key:", FF)
                  })), iW(Date.now())
                },
                disabled: Date.now() - dF < 1e3 || !uF,
                children: Date.now() - dF < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var wS = SF(1144),
      XS = SF(1198);
    const US = {
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
      BS = (0, AF.memo)((function(FF) {
        let {
          show: WF,
          onOpen: SF,
          onClose: CF
        } = FF;
        const [uF, bW] = (0, AF.useState)(null), dF = (0, AF.useRef)(0), iW = (0, AF.useRef)(null), {
          t: eF
        } = (0, WW.B)();
        (0, DF.e)("EditCustomLobbyBlock", (FF => {
          let {
            pos: WF
          } = FF;
          bW(WF), null !== WF && SF(), iW.current.scrollTo(0, dF.current)
        }));
        const EF = FF => {
          PF.gameBridge.send("setCustomLobbyBlock", {
            pos: uF,
            blockName: FF
          }), CF()
        };
        return (0, RF.jsx)(hF.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: CF,
          escDoesExit: !0,
          show: WF,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, RF.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: iW,
            onScroll: () => {
              dF.current = iW.current.scrollTop
            },
            children: (0, RF.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(US).map((FF => {
                let [WF, SF] = FF;
                return (0, RF.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, RF.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: eF(WF)
                  }), (0, RF.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(SF).map((FF => {
                      let [WF, {
                        tooltip: SF,
                        blocks: CF
                      }] = FF;
                      return (0, RF.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, RF.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [eF(WF), (0, RF.jsx)(XS.e, {
                            hoverInfo: eF(SF),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, RF.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: CF.map((FF => (0, RF.jsx)(jC, {
                            blockName: FF,
                            selectBlock: EF
                          }, FF)))
                        })]
                      }, WF)
                    }))
                  })]
                }, WF)
              }))
            })
          })
        })
      })),
      jC = (0, AF.memo)((function(FF) {
        var WF;
        let {
          blockName: SF,
          selectBlock: CF
        } = FF;
        const AF = (0, CS.b)(SF),
          uF = null !== (WF = void 0 === AF ? void 0 : (0, SS.displayNameOf)(AF)) && void 0 !== WF ? WF : SF,
          hF = void 0 === AF ? void 0 : (0, SS.descriptionOf)(AF);
        return (0, RF.jsx)(XS.g, {
          tooltipInner: (0, RF.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, RF.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, RF.jsx)(NF.d, {
                text: uF
              })
            }), hF && (0, RF.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, RF.jsx)(NF.d, {
                text: hF
              })
            })]
          }),
          children: (0, RF.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => CF(SF),
            children: (0, RF.jsx)(SW.b, {
              itemName: SF,
              amount: 1
            })
          })
        }, SF)
      }));
    var vC = SF(2279),
      JS = SF(3420),
      pS = SF(35327);

    function lS() {
      const FF = (0, mW.e)("itemInfo");
      return (0, AF.useMemo)((() => function(FF) {
        return {
          getDefaultItemStat(WF, SF) {
            var CF;
            const AF = FF[WF];
            return "description" === SF ? null === AF || void 0 === AF ? void 0 : AF.description : null !== (CF = null === AF || void 0 === AF ? void 0 : AF.displayName) && void 0 !== CF ? CF : WF
          }
        }
      }(FF)), [FF])
    }
    const FC = (0, AF.memo)((function(FF) {
        var WF, SF, CF, uF, bW, dF, PF, iW, eF, EF, QF, rW, tW, TF, aW, kW, qW, VF, NF, LF, mW, OF, xW;
        let {
          togglePointerLock: ZF,
          show: oF,
          onOpen: YF,
          onClose: MF
        } = FF;
        const {
          t: cW
        } = (0, WW.B)(), GF = lS(), zW = (0, AF.useRef)(null), IF = (0, AF.useRef)(JS.c.MobHungerLevel.Hungry), fF = (0, AF.useRef)(null), yW = (0, vC.d)(), sF = (0, AF.useRef)(null), nF = (0, AF.useRef)(null), HF = zW.current;
        (0, AF.useEffect)((() => {
          if (!oF) return;
          const FF = pS.c.openPet(sF.current);
          return nF.current = FF, () => {
            FF.close(), nF.current = null
          }
        }), [oF]), (0, AF.useEffect)((() => {
          oF && HF && nF.current.show(function(FF) {
            var WF;
            let {
              mobType: SF,
              mobSettings: CF
            } = FF;
            return {
              mobType: SF,
              variation: null !== (WF = CF.variation) && void 0 !== WF ? WF : "default",
              shownGroups: {
                collar: !(0, gC.Q)(CF.ownerDbId),
                saddle: "Saddled" === CF.metaInfo,
                antlers: "Antlers" === CF.metaInfo
              }
            }
          }(HF))
        }), [oF, HF]), (0, AF.useEffect)((() => {
          const FF = () => {
            var FF;
            const WF = JS.c.getMobHungerLevel(null === (FF = zW.current) || void 0 === FF ? void 0 : FF.mobSettings.petInfo.lastFedAt);
            if (WF !== IF.current && (IF.current = WF, yW()), fF.current) {
              var SF;
              const FF = Date.now(),
                WF = JS.c.getNextStateAt(null === (SF = zW.current) || void 0 === SF ? void 0 : SF.mobSettings.petInfo.lastFedAt);
              let CF = Math.floor((WF - FF) / 1e3),
                AF = "";
              if (CF > 3600) {
                AF += Math.floor(CF / 60 / 60).toString().padStart(2, "0"), AF += ":", CF %= 3600
              }
              const uF = CF % 60;
              AF += Math.floor(CF / 60).toString().padStart(2, "0"), AF += ":", AF += uF.toString().padStart(2, "0"), fF.current.textContent = AF
            }
          };
          FF();
          const WF = setInterval(FF, 250);
          return () => {
            clearInterval(WF)
          }
        }), [HF, yW]), (0, DF.e)("showPetUi", (FF => {
          let {
            mobType: WF,
            mobSettings: SF
          } = FF;
          zW.current = {
            mobType: WF,
            mobSettings: SF
          }, oF || YF()
        }));
        const KF = null === (WF = zW.current) || void 0 === WF ? void 0 : WF.mobSettings.health,
          wF = null === (SF = zW.current) || void 0 === SF ? void 0 : SF.mobSettings.maxHealth,
          XF = JS.c.getFriendshipLevelInfo(null !== (CF = null === (uF = zW.current) || void 0 === uF ? void 0 : uF.mobSettings.petInfo.friendshipPoints) && void 0 !== CF ? CF : 0);
        return (0, RF.jsx)(hF.b, {
          className: "PetUIOuter",
          close: MF,
          escDoesExit: !0,
          show: oF,
          togglePointerLock: ZF,
          forcePointerUnlock: oF,
          globallyUniqueKey: "PetUI",
          children: (0, RF.jsx)("div", {
            className: "PetUI",
            children: (0, RF.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, RF.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, RF.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (bW = null === (dF = zW.current) || void 0 === dF ? void 0 : dF.mobSettings.name) && void 0 !== bW ? bW : "Your Pet"
                }), (0, RF.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: sF
                })]
              }), (0, RF.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, gC.Q)(null === (PF = zW.current) || void 0 === PF ? void 0 : PF.mobSettings.petInfo.friendshipPoints) && (0, RF.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, RF.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: cW("mobAiPlugin:friendshipTitle")
                  }), (0, RF.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: JS.c.getIconsFromFriendshipPoints(null !== (iW = zW.current.mobSettings.petInfo.friendshipPoints) && void 0 !== iW ? iW : 0).map(((FF, WF) => (0, RF.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: FF,
                        amount: 1
                      })
                    }, WF)))
                  }), (0, RF.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, RF.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, RF.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${XF.totalPointsForNextLevel>0?Math.max(XF.pointsIntoCurrentLevel/XF.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, RF.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: XF.totalPointsForNextLevel > 0 ? ` ${Math.ceil(XF.pointsIntoCurrentLevel)}/${Math.ceil(XF.totalPointsForNextLevel)}` : Math.ceil(XF.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, RF.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, RF.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: cW("mobAiPlugin:hungerTitle")
                  }), (0, RF.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: JS.c.hungerLevelIcons[IF.current].map(((FF, WF) => (0, RF.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: FF,
                        amount: 1
                      })
                    }, WF)))
                  }), (0, RF.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [cW(JS.c.hungerLevelTranslations[IF.current].translationKey), IF.current !== JS.c.MobHungerLevel.Starving && !(0, gC.Q)(null === (eF = zW.current) || void 0 === eF ? void 0 : eF.mobSettings.petInfo.lastFedAt) && (0, RF.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [cW("mobAiPlugin:nextFeedIn", {
                        state: cW(JS.c.hungerLevelTranslations[IF.current + 1].translationKey)
                      }), ":", " ", (0, RF.jsx)("span", {
                        ref: fF
                      })]
                    })]
                  })]
                }), (0, RF.jsx)(XS.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, RF.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cW("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, RF.jsxs)("div", {
                    className: gS()("PetUIQuickStatsItem", {
                      Disabled: (0, gC.Q)(KF) || (0, gC.Q)(wF)
                    }),
                    children: [(0, RF.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, RF.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, gC.Q)(KF) || (0, gC.Q)(wF) ? "" : (0, RF.jsxs)(RF.Fragment, {
                        children: [Math.ceil(KF), (0, RF.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(wF)]
                        })]
                      })
                    })]
                  })
                }), (0, RF.jsx)(XS.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, RF.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cW("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, RF.jsxs)("div", {
                    className: gS()("PetUIQuickStatsItem", {
                      Disabled: (0, gC.Q)(null === (EF = zW.current) || void 0 === EF ? void 0 : EF.mobSettings.attackDamage) || zW.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, RF.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, RF.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (QF = zW.current) || void 0 === QF ? void 0 : QF.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, RF.jsx)(XS.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, RF.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cW("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, RF.jsxs)("div", {
                    className: gS()("PetUIQuickStatsItem", {
                      Disabled: (0, gC.Q)(null === (rW = zW.current) || void 0 === rW ? void 0 : rW.mobSettings.secondaryAttackDamage) || zW.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, RF.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, RF.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (tW = zW.current) || void 0 === tW ? void 0 : tW.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, RF.jsx)(XS.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, RF.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cW("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, RF.jsxs)("div", {
                    className: gS()("PetUIQuickStatsItem", {
                      Disabled: (0, gC.Q)(null === (TF = zW.current) || void 0 === TF ? void 0 : TF.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, RF.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, RF.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (aW = null === (kW = zW.current) || void 0 === kW || null === (qW = kW.mobSettings.baseRunningSpeed) || void 0 === qW ? void 0 : qW.toFixed(2)) && void 0 !== aW ? aW : ""
                    })]
                  })
                }), (0, RF.jsx)(XS.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, RF.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cW("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, RF.jsxs)("div", {
                    className: gS()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (VF = zW.current) || void 0 === VF ? void 0 : VF.mobSettings.metaInfo)
                    }),
                    children: [(0, RF.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, RF.jsx)(SW.b, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, RF.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (NF = zW.current) || void 0 === NF ? void 0 : NF.mobSettings.metaInfo) ? (0, RF.jsx)(gW.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, gC.Q)(null === (LF = zW.current) || void 0 === LF ? void 0 : LF.mobSettings.tameInfo) && (0, RF.jsxs)(RF.Fragment, {
                  children: [(0, RF.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, RF.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, RF.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, RF.jsx)(SC, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: JS.c.feedTextColours[JS.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, RF.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, RF.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: zW.current.mobSettings.petInfo.superlikedFoodKnown ? (0, RF.jsx)(WC, {
                            food: zW.current.mobSettings.petInfo.superlikedFood
                          }) : (0, RF.jsx)(SC, {
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
                    }), (0, RF.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, RF.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, RF.jsx)(SC, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: JS.c.feedTextColours[JS.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, RF.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (mW = zW.current.mobSettings.tameInfo.likedFoods) || void 0 === mW ? void 0 : mW.filter((FF => !zW.current.mobSettings.petInfo.superlikedFoodKnown || FF !== zW.current.mobSettings.petInfo.superlikedFood)).map((FF => (0, RF.jsx)(WC, {
                          food: FF
                        }, FF)))
                      })]
                    }), (0, RF.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, RF.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, RF.jsx)(SC, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: JS.c.feedTextColours[JS.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, RF.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (OF = zW.current.mobSettings.tameInfo.neutralFoods) || void 0 === OF ? void 0 : OF.map((FF => (0, RF.jsx)(WC, {
                          food: FF
                        }, FF)))
                      })]
                    }), (0, RF.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, RF.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, RF.jsx)(SC, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: JS.c.feedTextColours[JS.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, RF.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (xW = zW.current.mobSettings.tameInfo.dislikedFoods) || void 0 === xW ? void 0 : xW.map((FF => (0, RF.jsx)(WC, {
                          food: FF
                        }, FF)))
                      })]
                    })]
                  }), zW.current.mobSettings.tameInfo.levelUpBonuses && (0, RF.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: JS.c.MAX_LEVEL + 1
                    }).map(((FF, WF) => {
                      const SF = WF;
                      if (0 === SF) return null;
                      const CF = zW.current.mobSettings.tameInfo.levelUpBonuses[SF],
                        AF = JS.c.getBonusDisplayInfo(GF, zW.current.mobSettings, zW.current.mobType, CF);
                      return (0, RF.jsxs)("div", {
                        className: gS()("PetUIFeedDropContainer", {
                          Selected: SF === JS.c.getFriendshipLevelInfo(zW.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, RF.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: SF
                          }).map(((FF, WF) => (0, RF.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, RF.jsx)(SW.b, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${SF}-${WF}`)))
                        }), (0, RF.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: AF && (0, RF.jsx)(SC, {
                            icon: AF.icon,
                            displayName: AF.displayName,
                            description: AF.description
                          })
                        })]
                      }, SF)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      WC = (0, AF.memo)((function(FF) {
        let {
          food: WF,
          includeDescription: SF = !1
        } = FF;
        const CF = lS(),
          AF = CF.getDefaultItemStat(WF, "displayName"),
          uF = CF.getDefaultItemStat(WF, "description");
        return (0, RF.jsx)(SC, {
          icon: WF,
          displayName: AF,
          description: SF ? uF : null
        })
      })),
      SC = (0, AF.memo)((function(FF) {
        let {
          icon: WF,
          displayName: SF,
          description: CF,
          tintColor: AF,
          className: uF = "PetUIFoodItem"
        } = FF;
        return (0, RF.jsx)(XS.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, RF.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, RF.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, RF.jsx)(NF.d, {
                text: SF
              })
            }), CF && (0, RF.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, RF.jsx)(NF.d, {
                text: CF
              })
            })]
          }),
          children: (0, RF.jsx)("div", {
            className: uF,
            children: (0, RF.jsx)(SW.b, {
              itemName: WF,
              amount: 1,
              tintColor: AF
            })
          })
        })
      }));
    var CC = SF(2940),
      AC = SF(1001),
      uC = SF(1085),
      hC = SF(1101),
      bA = SF(35350),
      dC = SF(35347),
      PC = SF(874),
      RC = SF(1196),
      iA = SF(1189),
      eC = SF(1923);

    function EC(FF) {
      let {
        peers: WF
      } = FF;
      const [SF, CF] = (0, AF.useState)(null), uF = (0, mW.e)("players");
      return (0, RF.jsx)("div", {
        className: "CodeEditorPresence",
        children: WF.map((FF => {
          var WF, AF;
          const hF = null !== (WF = null === (AF = uF.byId[FF.playerId]) || void 0 === AF ? void 0 : AF.cosmetics) && void 0 !== WF ? WF : {};
          return (0, RF.jsxs)("div", {
            className: gS()("PresenceIcon", {
              Viewer: !FF.isEditor
            }),
            style: {
              backgroundColor: FF.colour
            },
            onMouseEnter: () => {
              CF(FF.playerId)
            },
            onMouseLeave: () => {
              CF(null)
            },
            children: [(0, RF.jsx)(eC.d, {
              cosmetics: hF
            }), SF === FF.playerId && (0, RF.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: FF.colour
              },
              children: FF.playerName
            })]
          }, FF.playerId)
        }))
      })
    }
    var QC = SF(244),
      rA = SF(35339),
      gA = SF(35077),
      tA = SF(35352);

    function TC(FF) {
      const WF = FF.split("/"),
        SF = [];
      for (let CF = 1; CF < WF.length; CF++) SF.push(WF.slice(0, CF).join("/"));
      return SF
    }

    function aA(FF) {
      return FF.slice(FF.lastIndexOf("/") + 1)
    }
    const kA = (0, AF.memo)((function(FF) {
      var WF;
      let {
        files: SF,
        activePath: CF,
        canEdit: uF,
        directoryLinked: hF,
        pluginNames: bW,
        activePluginName: dF,
        activePluginFile: PF,
        onSelect: iW,
        onSelectPlugin: eF,
        onCreate: QF,
        onRename: rW,
        onRenameFolder: tW,
        onDelete: TF,
        onToggleDirectorySync: aW,
        schematics: kW,
        onManageSchematic: qW
      } = FF;
      const {
        t: VF
      } = (0, WW.B)(), NF = null !== (WF = (0, dC.d)(SF)) && void 0 !== WF ? WF : hC.h, DF = Object.keys(SF), [LF, mW] = (0, AF.useState)((() => new Set)), OF = function(FF, WF, SF) {
        const CF = {
          folders: new Map,
          files: []
        };
        for (const hF of FF) {
          if (hF === WF) continue;
          let FF = CF;
          for (const WF of TC(hF)) {
            let SF = FF.folders.get(WF);
            SF || (SF = {
              folders: new Map,
              files: []
            }, FF.folders.set(WF, SF)), FF = SF
          }
          FF.files.push(hF)
        }
        const AF = [];
        FF.includes(WF) && AF.push({
          kind: "file",
          path: WF,
          name: aA(WF),
          depth: 0
        });
        const uF = (FF, WF) => {
          const CF = [...FF.folders.entries()].sort(((FF, WF) => {
            let [SF] = FF, [CF] = WF;
            return SF.localeCompare(CF)
          }));
          for (const [hF, bW] of CF) {
            const FF = SF.has(hF);
            AF.push({
              kind: "folder",
              path: hF,
              name: aA(hF),
              depth: WF,
              collapsed: FF
            }), FF || uF(bW, WF + 1)
          }
          FF.files.sort(((FF, WF) => FF.localeCompare(WF)));
          for (const SF of FF.files) AF.push({
            kind: "file",
            path: SF,
            name: aA(SF),
            depth: WF
          })
        };
        return uF(CF, 0), AF
      }(DF, NF, LF);
      (0, AF.useEffect)((() => {
        mW((FF => {
          const WF = new Set(FF);
          let SF = !1;
          for (const AF of TC(CF)) SF = WF.delete(AF) || SF;
          return SF ? WF : FF
        }))
      }), [CF]);
      const xW = DF.length >= sF.x,
        ZF = (FF, WF) => {
          if (FF.length > bA.q) return `Path must be at most ${bA.q} characters`;
          if (!(0, bA.n)(FF)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === FF) return "index.d.ts cannot be the world-code entry";
          const CF = !!WF && (0, dC.f)(WF, FF);
          if (WF && (0, dC.j)(WF) && !CF) return `Cannot rename ${WF} (only swapping ${hC.h} and ${hC.l} is allowed)`;
          if (FF in SF) return "A file with that path already exists";
          if ((0, dC.j)(FF) && !CF) {
            if ((FF === hC.h ? hC.l : hC.h) in SF) return `World code cannot have both ${hC.h} and ${hC.l}`
          }
          return null
        },
        oF = FF => {
          iA.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === FF ? void 0 : `${FF}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: FF => ZF(FF)
          }).getResult().then((FF => {
            "notificationTornDown" !== FF && null !== FF && "submit" === FF.type && QF(FF.value)
          }))
        },
        YF = FF => {
          iA.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: FF,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: WF => WF === FF ? "That is already the file's path" : ZF(WF, FF)
          }).getResult().then((WF => {
            "notificationTornDown" !== WF && null !== WF && "submit" === WF.type && rW(FF, WF.value)
          }))
        },
        MF = FF => {
          const WF = FF => FF.replace(/\/+$/, "");
          iA.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: FF,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: SF => {
              const CF = WF(SF);
              if (CF === FF) return "That is already the folder's path";
              for (const [WF, AF] of(0, dC.n)(DF, FF, CF)) {
                const FF = ZF(AF, WF);
                if (null !== FF) return FF
              }
              return null
            }
          }).getResult().then((SF => {
            "notificationTornDown" !== SF && null !== SF && "submit" === SF.type && tW(FF, WF(SF.value))
          }))
        },
        cW = FF => {
          iA.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: FF
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((WF => {
            !0 === WF && TF(FF)
          }))
        };
      return (0, RF.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, RF.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, RF.jsx)("span", {
            children: "Files"
          }), uF && !xW && (0, RF.jsx)(EF.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              oF()
            },
            children: (0, RF.jsx)(gW.e, {
              name: "plus"
            })
          })]
        }), (0, RF.jsxs)("div", {
          className: "FileTreeList",
          children: [OF.map((FF => {
            const WF = FF.path;
            if ("folder" === FF.kind) return (0, RF.jsx)(NC, {
              path: WF,
              name: FF.name,
              depth: FF.depth,
              collapsed: FF.collapsed,
              onToggle: () => {
                var FF;
                FF = WF, mW((WF => {
                  const SF = new Set(WF);
                  return SF.delete(FF) || SF.add(FF), SF
                }))
              },
              canCreate: uF && !xW,
              canRename: uF,
              onCreate: oF,
              onRename: MF
            }, `folder:${WF}`);
            const AF = (0, dC.j)(WF),
              hF = hC.h in SF && hC.l in SF,
              bW = !AF || hF,
              PF = null === dF && WF === CF;
            return (0, RF.jsx)(LC, {
              path: WF,
              label: FF.name,
              depth: FF.depth,
              isActive: PF,
              canRename: uF,
              onSelect: iW,
              onRename: YF,
              onDelete: cW,
              canDelete: bW && uF
            }, WF)
          })), (0, RF.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, RF.jsxs)("span", {
              children: ["Schematics (", Object.keys(kW).length, "/", tA.h, ")"]
            }), uF && (0, RF.jsx)(EF.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(kW).length >= tA.h,
              onClick: () => {
                qW("")
              },
              children: (0, RF.jsx)(gW.e, {
                name: "plus"
              })
            })]
          }), Object.keys(kW).sort().map((FF => (0, RF.jsx)(LC, {
            path: FF,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: qW
          }, FF))), bW.length > 0 && (0, RF.jsxs)(RF.Fragment, {
            children: [(0, RF.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, RF.jsx)("span", {
                children: "Plugins"
              })
            }), bW.map((FF => {
              var WF;
              const SF = rA.f[FF],
                CF = Object.keys(null !== (WF = null === SF || void 0 === SF ? void 0 : SF.files) && void 0 !== WF ? WF : {
                  "index.ts": ""
                }).sort(((FF, WF) => "index.ts" === FF ? -1 : "index.ts" === WF ? 1 : FF.localeCompare(WF)));
              return (0, RF.jsxs)("div", {
                children: [(0, RF.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, dC.y)(FF)
                }), CF.map((WF => (0, RF.jsx)(LC, {
                  path: WF,
                  nested: !0,
                  isActive: dF === FF && PF === WF,
                  canRename: !1,
                  onSelect: () => {
                    eF(FF, WF)
                  },
                  canDelete: !1
                }, WF)))]
              }, FF)
            }))]
          })]
        }), (0, RF.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, RF.jsx)(EF.e, {
            className: "FileTreeFooterButton",
            onClick: aW,
            children: VF(hF ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function qA(FF) {
      return FF > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": FF
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function VC(FF) {
      let {
        depth: WF
      } = FF;
      return (0, RF.jsx)(RF.Fragment, {
        children: Array.from({
          length: WF
        }, ((FF, WF) => (0, RF.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": WF
          }
        }, WF)))
      })
    }

    function NC(FF) {
      let {
        path: WF,
        name: SF,
        depth: CF,
        collapsed: AF,
        onToggle: uF,
        canCreate: hF,
        canRename: bW,
        onCreate: dF,
        onRename: PF
      } = FF;
      const iW = [];
      hF && iW.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          dF(WF)
        }
      }), bW && iW.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          PF(WF)
        }
      });
      const eF = qA(CF);
      return (0, RF.jsxs)("div", {
        className: gS()("FileTreeItem FileTreeFolder", eF.className),
        style: eF.style,
        children: [(0, RF.jsx)(VC, {
          depth: CF
        }), (0, RF.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !AF,
          onClick: uF,
          children: [(0, RF.jsx)(gW.e, {
            className: "FileTreeFolderCaret",
            name: AF ? "caret-right" : "caret-down"
          }), (0, RF.jsx)(gW.e, {
            className: "FileTreeFolderIcon",
            name: AF ? "folder" : "folder-open"
          }), SF]
        }), (0, RF.jsx)(DC, {
          path: WF,
          actions: iW
        })]
      })
    }

    function DC(FF) {
      let {
        path: WF,
        actions: SF
      } = FF;
      const CF = (0, AF.useRef)(null);
      return 0 === SF.length ? null : (0, RF.jsxs)("div", {
        ref: CF,
        className: "FileTreeItemActions",
        children: [(0, RF.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${WF}`,
          children: (0, RF.jsx)(gW.e, {
            name: "ellipsis"
          })
        }), (0, RF.jsx)(gA.c, {
          triggerElementRef: CF,
          options: SF
        })]
      })
    }

    function LC(FF) {
      let {
        path: WF,
        label: SF = WF,
        depth: CF = 0,
        isActive: AF,
        canRename: uF,
        onSelect: hF,
        onRename: bW,
        onDelete: dF,
        canDelete: PF,
        nested: iW
      } = FF;
      const eF = [];
      uF && bW && eF.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          bW(WF)
        }
      }), PF && dF && eF.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          dF(WF)
        }
      });
      const EF = qA(CF);
      return (0, RF.jsxs)("div", {
        className: gS()("FileTreeItem", EF.className, {
          Active: AF,
          Nested: iW
        }),
        style: EF.style,
        children: [(0, RF.jsx)(VC, {
          depth: CF
        }), (0, RF.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: SF === WF ? void 0 : WF,
          onClick: () => {
            hF(WF)
          },
          children: SF
        }), (0, RF.jsx)(DC, {
          path: WF,
          actions: eF
        })]
      })
    }
    async function mA(FF) {
      const WF = (0, dC.d)(FF);
      if (!WF || "" === FF[WF].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: CF
      } = await Promise.all([SF.e(269), SF.e(270)]).then((() => SF(39343)));
      return (0, rA.e)(CF(FF))
    }
    var OC = SF(35354);

    function xA(FF, WF) {
      const SF = Object.keys(FF),
        CF = Object.keys(WF);
      if (SF.length !== CF.length) return !1;
      for (const AF of SF)
        if (!(AF in WF) || FF[AF] !== WF[AF]) return !1;
      return !0
    }

    function ZC(FF, WF) {
      const SF = [],
        CF = [],
        AF = [];
      for (const uF of Object.keys(WF)) uF in FF ? FF[uF] !== WF[uF] && AF.push(uF) : SF.push(uF);
      for (const uF of Object.keys(FF)) uF in WF || CF.push(uF);
      return SF.sort(), CF.sort(), AF.sort(), {
        creates: SF,
        deletes: CF,
        updates: AF
      }
    }

    function oC(FF, WF) {
      var SF;
      const CF = {
          ...FF
        },
        AF = (0, dC.d)(WF),
        uF = (0, dC.d)(CF);
      if (hC.h in CF && hC.l in CF) {
        const FF = null !== AF && void 0 !== AF ? AF : hC.l,
          SF = FF === hC.h ? hC.l : hC.h;
        var hF;
        if (!(FF in CF)) CF[FF] = null !== (hF = WF[FF]) && void 0 !== hF ? hF : "";
        return delete CF[SF], CF
      }
      var bW;
      return AF && !(AF in CF) ? (uF || (CF[AF] = null !== (bW = WF[AF]) && void 0 !== bW ? bW : ""), CF) : (uF || AF || (CF[hC.h] = null !== (SF = CF[hC.h]) && void 0 !== SF ? SF : "", delete CF[hC.l]), CF)
    }

    function YC(FF, WF) {
      const SF = (0, dC.d)(WF),
        CF = hC.h in WF && hC.l in WF;
      return FF.filter((FF => !(0, dC.j)(FF) || (!!CF || SF !== FF)))
    }
    async function MC(FF, WF, CF) {
      const AF = FF.getLobbyFiles(),
        uF = (0, sF.l)(CF, (0, dC.o)(AF, WF)),
        hF = await FF.ensureJoined(WF),
        bW = (0, bA.s)(hF.docKey);
      if (hF.doc === uF) return;
      for (let SF = 0; SF < 100; SF++) {
        const SF = FF.getCollabSnapshot();
        if (SF && (0, bA.s)(SF.docKey) === bW && FF.getActivePath() === WF) {
          if (FF.replaceActiveDoc(bW, uF)) return;
          await (0, gC.W)(40)
        } else await (0, gC.W)(40)
      }
      const {
        ChangeSet: dF
      } = await SF.e(265).then((() => SF(39153))), RF = FF.getCollabSnapshot(), iW = RF && (0, bA.s)(RF.docKey) === bW ? RF : hF;
      await async function(FF, WF, SF, CF) {
        const AF = FF.of({
            from: 0,
            to: SF.length,
            insert: CF
          }, SF.length),
          uF = JSON.stringify([{
            clientID: WF.clientID,
            changes: AF.toJSON()
          }]),
          hF = (0, bA.s)(WF.docKey);
        uF.length <= bA.h ? PF.gameBridge.send("sendCodeCollab", {
          rM: bA.b.Push,
          gM: hF,
          VY: WF.version,
          ZY: uF
        }) : await (0, AC.postJsonWithMetricsCookiesAndJsonResponse)(`${WF.httpConfig.gsUrl}/code/collab-push`, CC.l["collab-push"].toBuffer({
          gameNameWithVariation: WF.httpConfig.gameNameWithVariation,
          lobbyName: WF.httpConfig.lobbyName,
          docKey: hF,
          version: WF.version,
          updates: uF
        }), {
          retries: 0
        })
      }(dF, iW, iW.doc, uF)
    }
    class cA {
      constructor(FF) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = FF
      }
      async writeLobbyFiles(FF) {
        const WF = {
            ...this.bridge.getLobbyFiles()
          },
          SF = {
            ...WF
          };
        for (const {
            path: uF,
            text: hF
          }
          of FF) SF[uF] = hF;
        if (!FF.every((FF => {
            let {
              path: WF,
              text: CF
            } = FF;
            return (0, sF.l)(CF, (0, dC.o)(SF, WF)) === CF
          }))) return !1;
        const CF = [];
        try {
          for (const {
              path: WF,
              text: SF
            }
            of FF) CF.push(WF), WF in this.bridge.getLobbyFiles() || (this.bridge.createFile(WF, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(WF, !0)), await MC(this.bridge, WF, SF)
        } catch (AF) {
          for (const FF of CF) FF in WF ? await MC(this.bridge, FF, WF[FF]).catch((WF => {
            console.error("World Code AI: couldn't put back", FF, WF)
          })) : this.bridge.deleteFile(FF);
          throw AF
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const FF = await (0, OC.r)(this.bridge.getStorageKey());
        return !!FF && (this.handle = FF, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(FF), !0)
      }
      async unlinkFolder() {
        const FF = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, OC.c)(FF), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const FF = this.bridge.getStorageKey(),
          WF = await (0, OC.p)(FF);
        return !!WF && (!!await (0, OC.h)(WF, "readwrite") && (this.handle = WF, this.linked = !0, await (0, OC.D)(FF, WF), await this.scaffoldLocalTypes(WF), !0))
      }
      scaffoldLocalTypes(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const CF = (await mA(WF)).map((FF => rA.f[FF])),
              AF = CF.map((FF => {
                var WF;
                return `${FF.name}:${Object.keys(null!==(WF=null===FF||void 0===FF?void 0:FF.files)&&void 0!==WF?WF:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === AF) return;
            const {
              ensureLocalBloxdTypes: uF
            } = await Promise.all([SF.e(69), SF.e(267), SF.e(272)]).then((() => SF(39345)));
            await uF(FF, CF), this.scaffoldedPluginNamesKey = AF
          } catch (CF) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", CF)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(FF) {
        this.handle && await this.scaffoldLocalTypes(this.handle, FF), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(FF)
      }
      async onDocTextChanged(FF, WF) {
        if (!this.handle) return;
        const SF = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [FF]: WF
        })];
        this.running && (this.pendingDocText.set(FF, WF), SF.push(this.flushDocTextToDisk())), await Promise.all(SF)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const FF = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const WF = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [SF, CF] of WF) this.lastSynced[SF] !== CF && (await (0, OC.J)(FF, SF, CF), this.lastSynced = {
              ...this.lastSynced,
              [SF]: CF
            })
          }
        } catch (WF) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", WF), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, OC.v)(this.handle))
          } catch (FF) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", FF)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, OC.h)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const WF = this.bridge.getLobbyFiles(),
              SF = await (0, OC.v)(this.handle);
            for (const FF of Object.keys(WF).filter(tA.d)) {
              if (SF[FF] === OC.k) return void this.bridge.setMessage(`Move ${FF} outside the linked folder before syncing its placeholder.`, "warning");
              SF[FF] = tA.p
            }
            if (xA(SF, WF)) {
              for (const FF of Object.keys(WF).filter(tA.d)) await (0, OC.J)(this.handle, FF, tA.p);
              return this.lastSynced = {
                ...SF
              }, void this.beginWatch()
            }
            const CF = await this.promptReconcile(function(FF) {
              return null !== (0, dC.d)(FF)
            }(SF));
            if ("unlink" === CF) return void await this.unlinkFolder();
            if ("dismissed" === CF) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === CF) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(SF);
                for (const FF of Object.keys(WF).filter(tA.d)) await (0, OC.J)(this.handle, FF, tA.p);
                this.lastSynced = {
                  ...await (0, OC.v)(this.handle)
                }
              } else await (0, OC.L)(this.handle, WF), this.lastSynced = {
                ...WF
              }
            } catch (FF) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", FF), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(FF) {
        return await new Promise((WF => {
          const SF = [{
              choice: "local",
              Button: EF.e,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: EF.e,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: EF.e,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            CF = (0, RF.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, RF.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, RF.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: FF ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, RF.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: SF.filter((WF => "local" !== WF.choice || FF)).map((FF => {
                  let {
                    choice: SF,
                    Button: CF,
                    labelKey: uF,
                    descriptionKey: hF
                  } = FF;
                  return (0, RF.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, RF.jsx)(CF, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (FF => {
                          AF.tearDownNotification(), WF(FF)
                        })(SF)
                      },
                      children: this.bridge.t(`codeEditor:${uF}`)
                    }), (0, RF.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${hF}`)
                    })]
                  }, SF)
                }))
              })]
            }),
            AF = iA.NotificationProvider.showCustomPopup({
              body: CF,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          AF.getResult().then((FF => {
            "notificationTornDown" === FF && WF("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, OC.F)(this.handle, (FF => {
          this.onDiskFilesChanged(FF)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (FF) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", FF)
        }
      }
      async onDiskFilesChanged(FF) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const WF = this.bridge.getLobbyFiles();
        let SF = oC(FF, this.lastSynced);
        for (const uF in WF)
          if ((0, tA.d)(uF) && SF[uF] === OC.k) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const CF = Object.keys(SF).filter((FF => (0, tA.d)(FF) && !(FF in WF)));
        CF.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const uF of Object.keys(WF).filter(tA.d))(uF in SF || CF.length > 0 || !(uF in this.lastSynced)) && (SF[uF] = tA.p);
        if (!xA(SF, FF)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(FF, SF), SF = oC(await (0, OC.v)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!xA(SF, this.lastSynced)) {
          this.applying = !0;
          try {
            const FF = ZC(this.lastSynced, SF);
            if (await this.pushDiskDeltaToLobby(SF, WF), null !== this.lastLobbySeen)
              for (const SF of [...FF.creates, ...FF.updates, ...FF.deletes])(0, tA.d)(SF) || (SF in WF ? this.lastLobbySeen[SF] = WF[SF] : delete this.lastLobbySeen[SF]);
            this.lastSynced = {
              ...SF
            }
          } catch (AF) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", AF), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(FF, WF) {
        if (this.handle) {
          for (const SF of Object.keys(FF)) SF in WF || await (0, OC.z)(this.handle, SF);
          for (const [SF, CF] of Object.entries(WF)) FF[SF] !== CF && await (0, OC.J)(this.handle, SF, CF)
        }
      }
      async applyRemoteTreeToDisk(FF) {
        if (!this.handle) return;
        const WF = this.lastLobbySeen;
        if (null === WF) return void(this.lastLobbySeen = {
          ...FF
        });
        const SF = Object.keys(FF).filter((SF => WF[SF] !== FF[SF])),
          CF = Object.keys(WF).filter((WF => !(WF in FF)));
        if (0 !== SF.length || 0 !== CF.length) {
          this.applying = !0;
          try {
            for (const WF of [...CF, ...SF]) try {
              if (WF in FF) await (0, OC.J)(this.handle, WF, FF[WF]), this.lastSynced = {
                ...this.lastSynced,
                [WF]: FF[WF]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [WF]: FF[WF]
              };
              else {
                await (0, OC.z)(this.handle, WF);
                const FF = {
                  ...this.lastSynced
                };
                delete FF[WF], this.lastSynced = FF;
                const SF = {
                  ...this.lastLobbySeen
                };
                delete SF[WF], this.lastLobbySeen = SF
              }
            } catch (AF) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", AF), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(FF, WF) {
        const SF = function(FF, WF) {
          const SF = (0, dC.d)(FF),
            CF = (0, dC.d)(WF);
          return SF && CF && SF !== CF ? {
            from: SF,
            to: CF
          } : null
        }(FF, WF);
        return !!SF && (this.bridge.renameFile(SF.from, SF.to), await this.bridge.waitForLobbyPath(SF.to, !0), !0)
      }
      async applyLocalTreeToLobby(FF) {
        var WF;
        const SF = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), FF);
        const CF = this.bridge.getLobbyFiles(),
          AF = ZC(CF, FF),
          uF = YC(AF.deletes, CF);
        for (const PF of AF.creates)(0, tA.d)(PF) || (this.bridge.createFile(PF, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(PF, !0));
        for (const PF of uF)(0, tA.d)(PF) || (this.bridge.deleteFile(PF), await this.bridge.waitForLobbyPath(PF, !1));
        if (!(0, dC.d)(this.bridge.getLobbyFiles()) && !(0, dC.d)(FF)) {
          if (this.bridge.createFile(hC.h, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(hC.h, !0), !this.handle) return;
          await (0, OC.J)(this.handle, hC.h, ""), FF = {
            ...FF,
            [hC.h]: ""
          }
        }
        const hF = this.bridge.getLobbyFiles();
        for (const PF of Object.keys(FF))(0, tA.d)(PF) || hF[PF] !== FF[PF] && await MC(this.bridge, PF, FF[PF]);
        const bW = this.bridge.getLobbyFiles(),
          dF = SF in bW ? SF : null !== (WF = (0, dC.d)(bW)) && void 0 !== WF ? WF : hC.h;
        await this.bridge.ensureJoined(dF)
      }
      async pushDiskDeltaToLobby(FF, WF) {
        const SF = this.bridge.getActivePath(),
          CF = await this.renameLobbyEntryIfSwitched(WF, FF) ? this.bridge.getLobbyFiles() : WF,
          AF = ZC(this.lastSynced, FF),
          uF = YC(AF.deletes, CF).filter((FF => FF in CF));
        for (const hF of AF.creates)(0, tA.d)(hF) || (hF in this.bridge.getLobbyFiles() || (this.bridge.createFile(hF, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(hF, !0)), await MC(this.bridge, hF, FF[hF]));
        for (const hF of uF)(0, tA.d)(hF) ? await this.bridge.deleteSchematic(hF) : (this.bridge.deleteFile(hF), await this.bridge.waitForLobbyPath(hF, !1));
        for (const hF of AF.updates)(0, tA.d)(hF) || await MC(this.bridge, hF, FF[hF]);
        SF in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== SF && await this.bridge.ensureJoined(SF)
      }
    }
    var GC = SF(1056);

    function zA() {
      const {
        websocketUrl: FF,
        gameNameWithVariation: WF,
        lobbyName: SF
      } = PF.gameBridge.latest("connectedGame");
      return {
        gsUrl: GC.clientSideServerUrls.getHttpUrlFromWebSocketUrl(FF),
        gameNameWithVariation: WF,
        lobbyName: SF
      }
    }
    async function IC(FF) {
      const {
        gsUrl: WF,
        gameNameWithVariation: SF,
        lobbyName: CF
      } = zA();
      return await (0, AC.postBinaryWithMetricsCookiesAndCustomResponse)(`${WF}/code/schematics`, CC.Zi.schematics.toBuffer({
        gameNameWithVariation: SF,
        lobbyName: CF,
        request: JSON.stringify(FF)
      }), {
        retries: 0
      }, AC.HttpPayloadType.json)
    }
    var fC = SF(138),
      yA = SF(34940);

    function sC(FF) {
      let {
        path: WF,
        revision: SF
      } = FF;
      const [CF, uF] = (0, AF.useState)(""), [hF, bW] = (0, AF.useState)(!1), [dF, PF] = (0, AF.useState)(0);
      return (0, AF.useEffect)((() => {
        let FF = !1;
        return uF(""), bW(!1), IC({
          action: "preview",
          path: WF
        }).then((WF => {
          FF || uF(`data:image/webp;base64,${WF.previewBase64}`)
        })).catch((WF => {
          console.error("Could not load schematic preview", WF), FF || bW(!0)
        })), () => {
          FF = !0
        }
      }), [WF, SF, dF]), (0, RF.jsxs)("div", {
        className: "SchematicPreview",
        children: [CF && (0, RF.jsx)("img", {
          src: CF,
          alt: `Preview of ${WF}`
        }), !CF && !hF && (0, RF.jsx)(OF.c, {
          loaderType: "Secondary"
        }), hF && (0, RF.jsxs)(RF.Fragment, {
          children: [(0, RF.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, RF.jsx)(EF.e, {
            onClick: () => {
              PF(dF + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function nC(FF) {
      var WF;
      let {
        initialPath: SF,
        onChanged: CF,
        onClose: uF
      } = FF;
      const hF = "" === SF,
        [bW, dF] = (0, AF.useState)(null),
        [PF, iW] = (0, AF.useState)(SF),
        [eF, QF] = (0, AF.useState)(!1),
        [rW, gW] = (0, AF.useState)(!1),
        [tW, TF] = (0, AF.useState)(null),
        [aW, kW] = (0, AF.useState)(!1),
        [qW, VF] = (0, AF.useState)(""),
        NF = (0, AF.useRef)(null),
        DF = (0, AF.useRef)(!1),
        LF = (0, AF.useRef)(!0);
      (0, AF.useEffect)((() => (LF.current = !0, IC({
        action: "state"
      }).then((FF => {
        LF.current && dF(FF)
      })).catch((FF => {
        console.error("Could not load schematic assets", FF), LF.current && VF("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        LF.current = !1
      })), []);
      const mW = null === bW || void 0 === bW ? void 0 : bW.assets[SF],
        OF = Object.keys(null !== (WF = null === bW || void 0 === bW ? void 0 : bW.assets) && void 0 !== WF ? WF : {}).length,
        xW = PF.trim(),
        ZF = xW ? (0, tA.d)(xW) ? null !== bW && void 0 !== bW && bW.assets[xW] && (hF || xW !== SF) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        oF = !!xW && !ZF && (hF ? OF < tA.h : xW !== SF),
        YF = aW || !bW;
      async function MF(FF) {
        if (!DF.current && LF.current) {
          DF.current = !0, kW(!0), VF("");
          try {
            const WF = await IC({
              ...FF,
              expectedRevision: bW.revision
            });
            CF(WF), LF.current && uF()
          } catch (SF) {
            var WF;
            if (console.error("Schematic asset operation failed", SF), LF.current) VF(SF instanceof fC.c ? null !== (WF = SF.errorMessageForUser) && void 0 !== WF ? WF : SF.message : String(SF));
            try {
              const FF = await IC({
                action: "state"
              });
              CF(FF), LF.current && dF(FF)
            } catch (AF) {
              console.error("Could not refresh schematic assets", AF)
            }
          } finally {
            DF.current = !1, LF.current && kW(!1)
          }
        }
      }
      return (0, RF.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, RF.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: hF ? "New schematic" : eF ? "Rename schematic" : "Schematic"
        }), qW && (0, RF.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: qW
        }), !bW && !qW && (0, RF.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, RF.jsxs)("fieldset", {
          disabled: YF,
          children: [hF || eF ? (0, RF.jsxs)("label", {
            className: "SchematicField",
            children: [(0, RF.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, RF.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, RF.jsx)(oW.d, {
                className: "InputGenericPopupInput",
                defaultValue: SF,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: iW
              }, eF ? "rename" : "create")
            })]
          }) : (0, RF.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: SF
          }), (hF || eF) && ZF && (0, RF.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: ZF
          }), hF ? (0, RF.jsxs)(RF.Fragment, {
            children: [OF >= tA.h && (0, RF.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", tA.h, " maximum)."]
            }), rW ? (0, RF.jsxs)(RF.Fragment, {
              children: [(0, RF.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, RF.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": YF || !oF,
                children: (0, RF.jsx)(yA.b, {
                  loading: null === tW,
                  schematics: null !== tW && void 0 !== tW ? tW : [],
                  disableAutoExport: !0,
                  onSchematicPicked: FF => {
                    !YF && oF && MF({
                      action: "profile",
                      path: xW,
                      schematicId: FF.schematicId
                    })
                  }
                })
              }), (0, RF.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, RF.jsx)(EF.e, {
                  className: "InputGenericPopupButton",
                  disabled: YF,
                  onClick: () => {
                    gW(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, RF.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, RF.jsx)(EF.e, {
                className: "InputGenericPopupButton",
                disabled: YF || !oF,
                onClick: () => {
                  NF.current.click()
                },
                children: "Upload Schematic"
              }), (0, RF.jsx)(EF.e, {
                className: "InputGenericPopupButton",
                disabled: YF || !oF,
                onClick: () => {
                  !async function() {
                    if (gW(!0), VF(""), !tW) try {
                      const FF = await (0, AC.postJsonWithMetricsCookiesAndJsonResponse)(`${GC.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      LF.current && TF(FF)
                    } catch (FF) {
                      console.error("Could not load profile schematics", FF), LF.current && (gW(!1), VF("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, RF.jsx)("input", {
              ref: NF,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: FF => {
                var WF;
                const SF = null === (WF = FF.target.files) || void 0 === WF ? void 0 : WF[0];
                if (FF.target.value = "", !SF) return;
                if (SF.size > tA.j) return void VF("The schematic file is too large.");
                const CF = xW;
                kW(!0);
                const AF = new FileReader;
                AF.onload = () => {
                  MF({
                    action: "upload",
                    path: CF,
                    base64: String(AF.result).split(",")[1]
                  })
                }, AF.onerror = () => {
                  console.error("Could not read schematic file", AF.error), LF.current && (kW(!1), VF("Could not read the selected file."))
                }, AF.readAsDataURL(SF)
              }
            })]
          }) : mW ? (0, RF.jsxs)(RF.Fragment, {
            children: [!eF && (0, RF.jsx)(sC, {
              path: SF,
              revision: bW.revision
            }), !eF && (0, RF.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(mW.byteSize / 1024), " KB \xb7 ", mW.dimensions.join(" \xd7 "), " blocks"]
            }), (0, RF.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: eF ? (0, RF.jsxs)(RF.Fragment, {
                children: [(0, RF.jsx)(EF.e, {
                  className: "InputGenericPopupButton",
                  disabled: YF || !oF,
                  onClick: () => {
                    MF({
                      action: "rename",
                      path: SF,
                      newPath: xW
                    })
                  },
                  children: "Rename"
                }), (0, RF.jsx)(EF.e, {
                  className: "InputGenericPopupButton",
                  disabled: YF,
                  onClick: () => {
                    QF(!1), iW(SF)
                  },
                  children: "Cancel"
                })]
              }) : (0, RF.jsxs)(RF.Fragment, {
                children: [(0, RF.jsx)(EF.e, {
                  className: "InputGenericPopupButton",
                  disabled: YF,
                  onClick: () => {
                    QF(!0)
                  },
                  children: "Rename"
                }), (0, RF.jsx)(EF.E, {
                  className: "InputGenericPopupButton",
                  disabled: YF,
                  onClick: () => {
                    MF({
                      action: "remove",
                      path: SF
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : bW && (0, RF.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function HC(FF) {
      if ("string" !== typeof FF) return null;
      try {
        const WF = JSON.parse(FF);
        return (0, dC.m)(null === WF || void 0 === WF ? void 0 : WF.worldCodeEngine) && function(FF) {
          if (null === FF) return !0;
          const WF = null === FF || void 0 === FF ? void 0 : FF.location;
          return "string" === typeof(null === FF || void 0 === FF ? void 0 : FF.reason) && (null === WF || "string" === typeof(null === WF || void 0 === WF ? void 0 : WF.path) && Number.isInteger(WF.line))
        }(WF.fallback) ? WF : (console.error("[CodeCollab] Malformed engine settings", FF), null)
      } catch (WF) {
        return console.error("[CodeCollab] Failed to parse engine settings", WF), null
      }
    }

    function KC(FF) {
      let {
        fallback: WF,
        onGoToLine: SF
      } = FF;
      const {
        t: CF
      } = (0, WW.B)(), {
        location: AF
      } = WF;
      return (0, RF.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [CF("codeEditorEngine:notice", {
          reason: WF.reason
        }), AF && (0, RF.jsxs)(RF.Fragment, {
          children: [" ", (0, RF.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              SF(AF.path, AF.line)
            },
            children: CF("codeEditorEngine:goToLine", {
              line: String(AF.line)
            })
          })]
        })]
      })
    }
    var wC = SF(3933),
      XC = SF(3517);

    function UC(FF) {
      let {
        label: WF,
        hint: SF,
        checked: CF,
        onChange: AF
      } = FF;
      return (0, RF.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, RF.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, RF.jsx)("span", {
            children: WF
          }), (0, RF.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: SF
          })]
        }), (0, RF.jsx)("span", {
          className: "SwitchContainer",
          children: (0, RF.jsx)(XC.b, {
            className: "SwitchCheckbox",
            checked: CF,
            onChange: FF => {
              AF(FF.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function BC(FF) {
      let {
        engineSettings: WF,
        onSetEngine: SF,
        aiHints: CF,
        variation: AF
      } = FF;
      const {
        t: uF
      } = (0, WW.B)();
      return (0, RF.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, RF.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: uF("codeEditor:moreOptions")
        }), WF && (0, RF.jsx)(UC, {
          label: uF("codeEditorEngine:toggle"),
          hint: uF("codeEditorEngine:toggleHint"),
          checked: "ses" === WF.worldCodeEngine,
          onChange: FF => {
            SF(FF ? "ses" : "quickjs")
          }
        }), CF && (0, RF.jsx)(UC, {
          label: uF("codeEditorAiHints:toggle"),
          hint: uF("codeEditorAiHints:toggleHint"),
          checked: CF.shown,
          onChange: CF.setShown
        }), AF && (0, RF.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, RF.jsx)(wC.d, {
            label: "codeEditor:variationLabel",
            children: (0, RF.jsx)(oW.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: AF.name,
              onValueChange: AF.setName,
              onEnter: AF.reload
            })
          }), (0, RF.jsx)(EF.u, {
            className: "CodeEditorButton",
            onClick: AF.reload,
            children: uF("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var jA = SF(35358),
      vA = SF(35361);

    function JC(FF) {
      let {
        close: WF
      } = FF;
      const {
        t: SF
      } = (0, WW.B)(), CF = [{
        name: SF("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: SF("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: SF("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, RF.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, RF.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: SF("codeEditor:tutorialsTitle")
        }), (0, RF.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: CF.map((FF => (0, RF.jsx)(EF.e, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              WF(), (0, vA.L)(FF.tutorial)
            },
            children: FF.name
          }, FF.tutorial)))
        })]
      })
    }
    var pC = SF(107),
      lC = SF(35072),
      FA = SF(7709);
    const WA = (0, AF.forwardRef)((function(FF, WF) {
      let {
        value: SF,
        onChange: CF,
        onSubmit: AF,
        placeholder: uF,
        maxLength: hF,
        rows: bW = 2,
        allowNewLines: dF = !1,
        onKeyDown: PF,
        before: iW
      } = FF;
      const {
        t: eF
      } = (0, WW.B)(), QF = "" !== SF.trim(), rW = () => {
        QF && AF()
      };
      return (0, RF.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [iW, (0, RF.jsx)("textarea", {
          ref: WF,
          className: "PanelPromptInput",
          value: SF,
          maxLength: hF,
          rows: bW,
          placeholder: uF,
          spellCheck: !1,
          autoComplete: "off",
          onChange: FF => {
            CF(dF ? FF.target.value : FF.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: FF => {
            FF.nativeEvent.isComposing || 229 === FF.nativeEvent.keyCode ? FF.stopPropagation() : "Escape" !== FF.key && (FF.stopPropagation(), null === PF || void 0 === PF || PF(FF), FF.defaultPrevented || "Enter" !== FF.key || dF && FF.shiftKey || (FF.preventDefault(), rW()))
          }
        }), (0, RF.jsx)(EF.e, {
          className: "PanelPromptSend",
          disabled: !QF,
          onClick: rW,
          ariaLabel: eF("codeEditorPanels:send"),
          children: (0, RF.jsx)(gW.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function SA(FF) {
      let {
        close: WF,
        inputRef: SF
      } = FF;
      const {
        t: CF
      } = (0, WW.B)(), {
        messages: uF,
        reportedPlayers: hF,
        channel: bW
      } = (0, FA.p)(), [dF, PF] = (0, AF.useState)(""), iW = (0, AF.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, RF.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, RF.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, RF.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: CF("codeEditorChat:title")
          }), (0, RF.jsx)(EF.h, {
            className: "CodeEditorChatHide",
            onClick: WF
          })]
        }), 0 === uF.length ? (0, RF.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: CF("codeEditorChat:empty")
        }) : (0, RF.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, RF.jsx)(lC.c, {
            messages: uF,
            reportedPlayers: hF
          })
        }), (0, RF.jsx)(WA, {
          ref: SF,
          value: dF,
          onChange: PF,
          onSubmit: () => {
            (0, FA.l)(dF), PF(""), iW.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: LF.$c,
          rows: 1,
          placeholder: bW ? CF("touchOnly" === (0, pC.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: bW.channelName
          }) : CF("codeEditorChat:placeholder"),
          before: bW && (0, RF.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: bW.elementBgColor
            },
            onClick: () => {
              FA.e.selectNextChannel(), SF.current.focus()
            },
            children: (0, RF.jsx)(NF.d, {
              text: bW.elementContent
            })
          }),
          onKeyDown: FF => {
            const WF = dF === iW.current.text;
            if ("ArrowUp" !== FF.key && "ArrowDown" !== FF.key || !WF && "" !== dF) "Tab" === FF.key && !FF.shiftKey && bW && (FF.preventDefault(), FA.e.selectNextChannel());
            else {
              FF.preventDefault();
              const SF = WF ? iW.current.stepsBack : 0;
              iW.current = (0, FA.k)(SF + ("ArrowUp" === FF.key ? 1 : -1)), PF(iW.current.text)
            }
          }
        })]
      })
    }

    function CA(FF) {
      let {
        side: WF,
        defaultWidth: SF,
        children: CF
      } = FF;
      const uF = (0, AF.useRef)(null),
        [hF, bW] = (0, AF.useState)(null),
        dF = (0, AF.useRef)(null),
        PF = () => {
          dF.current = null
        };
      return (0, RF.jsxs)("div", {
        ref: uF,
        className: gS()("ResizableSidePanel", `ResizableSidePanel-${WF}`),
        style: {
          width: null !== hF && void 0 !== hF ? hF : SF
        },
        children: [CF, (0, RF.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: FF => {
            if (0 !== FF.button) return;
            FF.preventDefault();
            const WF = uF.current,
              SF = Array.from(WF.parentElement.children).reduce(((FF, SF) => SF !== WF && "0" !== getComputedStyle(SF).flexGrow ? FF + SF.clientWidth : FF), 0),
              CF = WF.offsetWidth,
              AF = Math.min(200, CF),
              hF = Math.max(AF, CF + Math.max(0, SF - 160));
            dF.current = {
              startX: FF.clientX,
              startWidth: CF,
              minWidth: AF,
              maxWidth: hF
            }, FF.currentTarget.setPointerCapture(FF.pointerId)
          },
          onPointerMove: FF => {
            const SF = dF.current;
            if (!SF) return;
            const CF = "left" === WF ? FF.clientX - SF.startX : SF.startX - FF.clientX;
            bW(Math.min(SF.maxWidth, Math.max(SF.minWidth, SF.startWidth + CF)))
          },
          onPointerUp: PF,
          onPointerCancel: PF,
          onLostPointerCapture: PF
        })]
      })
    }
    var AA = SF(35364);
    class uA {
      constructor(FF, WF) {
        this.storageKey = FF, this.defaultValue = WF, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const FF = MF.h.getItem(this.storageKey);
            this.value = "boolean" === typeof FF ? FF : this.defaultValue
          }
          return this.value
        }, this.set = FF => {
          this.value = FF, MF.h.setItem(this.storageKey, FF);
          for (const WF of this.listeners) WF(FF)
        }
      }
      subscribe(FF) {
        return this.listeners.add(FF), () => {
          this.listeners.delete(FF)
        }
      }
    }
    const hA = new uA("codeEditorLightMode", !1),
      bu = new uA("codeEditorAiHints", !0);

    function dA(FF) {
      const [WF, SF] = (0, AF.useState)(FF.get);
      return (0, AF.useEffect)((() => {
        const WF = FF.subscribe(SF);
        return SF(FF.get()), WF
      }), [FF]), [WF, FF.set]
    }
    var PA = SF(35371),
      RA = SF(35380),
      iu = SF(1475),
      eA = SF(35384);
    const EA = (0, AF.lazy)((() => Promise.all([SF.e(269), SF.e(265), SF.e(268), SF.e(264), SF.e(69), SF.e(267), SF.e(266), SF.e(263)]).then((() => SF(39143))))),
      QA = (0, AF.lazy)((() => Promise.all([SF.e(64), SF.e(67), SF.e(68), SF.e(66), SF.e(271)]).then((() => SF(39327))))),
      ru = (0, AF.lazy)((() => Promise.all([SF.e(269), SF.e(268), SF.e(69), SF.e(67), SF.e(68), SF.e(66), SF.e(267), SF.e(266), SF.e(65), SF.e(73)]).then((() => SF(39335)))));

    function gu(FF) {
      return PF.gameBridge.query("worldCodeAiChunk", FF)
    }

    function tu() {
      return PF.gameBridge.query("worldCodeAiGameState", null)
    }

    function TA(FF) {
      const {
        gsUrl: WF,
        gameNameWithVariation: SF,
        lobbyName: CF
      } = zA();
      return (0, AC.postJsonWithMetricsCookiesAndJsonResponse)(`${WF}/code/get-lobby-code`, CC.Zi["get-lobby-code"].toBuffer({
        gameNameWithVariation: SF,
        lobbyName: CF,
        path: FF
      }), {
        retries: 1
      })
    }
    let au = !1;
    const ku = [],
      qu = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      VA = (0, AF.memo)((function(FF) {
        var WF, SF;
        let {
          show: CF,
          onOpen: uF,
          onClose: bW,
          isLobbyCode: iW
        } = FF;
        const eF = (0, AF.useRef)(""),
          [rW, tW] = (0, AF.useState)(null),
          TF = (0, AF.useRef)(iW),
          [aW, kW] = (0, AF.useState)({
            message: null,
            type: null
          }),
          [qW, VF] = (0, AF.useState)(""),
          NF = aW.message ? aW : {
            message: qW,
            type: "warning"
          },
          [xW, ZF] = (0, AF.useState)(!0),
          [oF, MF] = dA(hA),
          [cW, GF] = dA(bu),
          [zW, IF] = (0, AF.useState)(!1),
          [fF, yW] = (0, AF.useState)(!1),
          nF = (0, AF.useRef)(null),
          HF = (0, AF.useRef)(!1);
        (0, AF.useEffect)((() => {
          var FF;
          fF && HF.current && (HF.current = !1, null === (FF = nF.current) || void 0 === FF || FF.focus())
        }), [fF]);
        const wF = (0, AA.e)(),
          XF = (0, AF.useRef)(null),
          UF = (0, AF.useRef)(null),
          {
            openInGameMenuName: BF,
            openEverythingMenuName: jW
          } = (0, AS.d)(["openInGameMenuName", "openEverythingMenuName"]),
          vW = FF => {
            CF && (XF.current = FF, DW.current = !0)
          };
        (0, DF.e)("OpenReportMenu", (() => {
          vW("SC")
        })), (0, DF.e)("OpenStoreFromCodeEditor", (() => {
          vW("store")
        })), (0, AF.useEffect)((() => {
          const FF = XF.current;
          null === FF || "SC" === FF && ("makeReport" === BF || "makeDiscordReport" === BF) || "store" === FF && null !== jW || (XF.current = null, null === BF && null === jW ? iW ? (UF.current = lW.current, QF.j.Uu("EditLobbyCode", rW)) : QF.j.Uu("EditCodeBlock", {
            pos: rW,
            canChangePos: TF.current
          }) : (0, vA.D)())
        }), [BF, jW, iW, rW]), (0, AF.useEffect)((() => {
          if (CF) return () => {
            UF.current = null
          }
        }), [CF]);
        const [JF, pF] = function() {
          const [FF, WF] = (0, AF.useState)(au);
          return (0, DF.e)("CodeEditorAiHelperShown", (FF => {
            WF(FF)
          })), [FF, (0, AF.useCallback)((FF => {
            au = FF, QF.j.Uu("CodeEditorAiHelperShown", FF)
          }), [])]
        }(), [lF, FW] = (0, AF.useState)(null), [SW, CW] = (0, AF.useState)([]), [AW, uW] = (0, AF.useState)(0), [hW, bS] = (0, AF.useState)(0), [dW, PW] = (0, AF.useState)(""), RW = (0, AF.useRef)(null), [iS, eW] = (0, AF.useState)(iW ? eA.g : null), EW = iW || null !== rW, QW = (0, dF.k)("canEditCode"), rS = (0, dF.k)("canUseDevCreativeItems"), tS = (0, jA.i)("welcome"), TW = (0, jA.i)("docsOverview"), aS = TW ? "docsOverview" : "welcome", kS = null !== TW && void 0 !== TW ? TW : tS, qS = (0, jA.i)("aiHelperOverview"), VW = qS ? "aiHelperOverview" : "welcome", NW = null !== qS && void 0 !== qS ? qS : tS, DW = (0, AF.useRef)(!1), LW = (0, AF.useRef)(!1), mS = (0, AF.useRef)(null), [OW, xS] = (0, AF.useState)(""), [ZW, oW] = (0, AF.useState)(!1), [YW, MW] = (0, AF.useState)(null), cS = (0, mW.e)("connectedGame"), GW = iW && QW && "classic" === cS.gameNameWithVariation && !(0, uC.L)(cS.lobbyName), [zS, IW] = (0, AF.useState)(null), [fW, yS] = (0, AF.useState)({
          [hC.h]: ""
        }), [sW, nW] = (0, AF.useState)({
          assets: {},
          revision: 0
        }), HW = (0, AF.useRef)(sW), KW = (0, AF.useCallback)((FF => {
          var WF;
          FF.revision < HW.current.revision || (HW.current = FF, nW(FF), VF(FF.startupError ? `Schematics could not load: ${FF.startupError}` : ""), null === (WF = iC.current) || void 0 === WF || WF.onLobbyFilesChanged({
            ...CS.current,
            ...(0, tA.l)(FF.assets)
          }))
        }), []), [wW, XW] = (0, AF.useState)(hC.h), [UW, BW] = (0, AF.useState)(null), [jS, vS] = (0, AF.useState)(null), JW = (0, AF.useRef)(!1), pW = (0, AF.useRef)(null), lW = (0, AF.useRef)(wW);
        lW.current = wW;
        const FS = (0, AF.useRef)(UW);
        FS.current = UW;
        const WS = UW ? null : YW,
          SS = (0, AF.useRef)(jS);
        SS.current = jS;
        const CS = (0, AF.useRef)(fW);
        CS.current = fW;
        const uS = (0, AF.useRef)(null),
          hS = (0, AF.useRef)(null),
          [bC, dS] = (0, AF.useState)(!1),
          PS = (0, OC.n)(),
          RS = (0, AF.useRef)([]),
          iC = (0, AF.useRef)(null),
          eS = (0, AF.useRef)(null),
          ES = (0, AF.useRef)(null);

        function QS(FF) {
          kW(FF), clearTimeout(mS.current), mS.current = setTimeout((() => {
            kW({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const rC = (0, AF.useCallback)((function() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            JW.current && pW.current && (PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.Leave,
              gM: (0, bA.s)(pW.current),
              kH: !!FF || null
            }), JW.current = !1, pW.current = null), IW(null)
          }), []),
          tC = (0, AF.useCallback)((FF => {
            const WF = {
              kind: "lobby",
              path: FF
            };
            pW.current = WF, XW(FF), eF.current = "", PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.Join,
              gM: (0, bA.s)(WF)
            }), JW.current = !0
          }), []),
          TS = (0, AF.useCallback)((FF => {
            var WF;
            const SF = null === (WF = eS.current) || void 0 === WF ? void 0 : WF.collabState;
            return SF && "lobby" === SF.docKey.kind && SF.docKey.path === FF && lW.current === FF ? Promise.resolve({
              doc: SF.doc,
              version: SF.version,
              clientID: SF.clientID,
              docKey: SF.docKey,
              httpConfig: SF.httpConfig
            }) : new Promise(((WF, SF) => {
              const CF = setTimeout((() => {
                  RS.current = RS.current.filter((FF => FF !== AF)), SF(new Error(`Timed out joining ${FF}`))
                }), 15e3),
                AF = SF => {
                  "lobby" === SF.docKey.kind && SF.docKey.path === FF && (clearTimeout(CF), RS.current = RS.current.filter((FF => FF !== AF)), WF(SF))
                };
              RS.current.push(AF), lW.current !== FF ? (rC(!0), tC(FF)) : JW.current || tC(FF)
            }))
          }), [tC, rC]),
          aC = (0, AF.useCallback)((async function(FF, WF) {
            let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const CF = Date.now();
            let AF = FF in CS.current;
            for (; AF !== WF;) {
              if (Date.now() - CF > SF) throw new Error(`Timed out waiting for lobby path ${FF} present=${WF}`);
              await (0, gC.W)(50), AF = FF in CS.current
            }
          }), []),
          kC = (0, AF.useCallback)((FF => {
            const WF = CS.current,
              SF = hC.h in WF && hC.l in WF;
            if (!(0, dC.j)(FF) || SF) {
              if (lW.current === FF) {
                var CF;
                const AF = SF && (0, dC.j)(FF) ? FF === hC.h ? hC.l : hC.h : null !== (CF = (0, dC.d)(WF)) && void 0 !== CF ? CF : hC.h;
                hS.current = {
                  fromPath: FF,
                  toPath: AF
                }, XW(AF)
              }
              PF.gameBridge.send("sendCodeCollab", {
                rM: bA.b.DeleteFile,
                gM: (0, bA.s)({
                  kind: "lobby",
                  path: lW.current
                }),
                qH: FF
              })
            }
          }), []),
          qC = (0, AF.useCallback)((FF => {
            UF.current = null, BW(null), vS(null), !iW || FF === lW.current && JW.current || (rC(!0), tC(FF))
          }), [iW, rC, tC]),
          VS = (0, AF.useCallback)(((FF, WF) => {
            const SF = rA.f[FF],
              CF = SF && WF in SF.files ? WF : "index.ts";
            if (FF !== FS.current || CF !== SS.current) {
              var AF;
              if (FF !== FS.current) null === (AF = iC.current) || void 0 === AF || AF.stopContinuousSync(), rC(!0);
              BW(FF), vS(CF)
            }
          }), [rC]),
          NS = (0, AF.useCallback)((FF => {
            var WF;
            const SF = lW.current,
              CF = CS.current[SF],
              AF = JW.current && !FS.current && SF in FF && void 0 !== CF ? {
                ...FF,
                [SF]: CF
              } : FF;
            yS(AF);
            const uF = uS.current;
            if (uF && uF in FF) uS.current = null, uF !== lW.current && qC(uF);
            else if (!(lW.current in FF) && JW.current && !FS.current) {
              var hF;
              qC(null !== (hF = (0, dC.d)(FF)) && void 0 !== hF ? hF : hC.h)
            }
            null === (WF = iC.current) || void 0 === WF || WF.onLobbyFilesChanged({
              ...AF,
              ...(0, tA.l)(HW.current.assets)
            })
          }), [qC]),
          DS = (0, AF.useCallback)((() => TA(lW.current).then((async FF => {
            if (!JW.current || !FF.files) return null;
            NS(FF.files);
            const WF = await IC({
              action: "state"
            });
            return KW(WF), {
              ...FF.files,
              ...(0, tA.l)(WF.assets)
            }
          })).catch((FF => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", FF), QS({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [NS, KW]),
          LS = () => {
            bW()
          };
        (0, AF.useEffect)((() => {
          if (VF(""), !CF || !iW) return;
          let FF = !1;
          return HW.current = {
            assets: {},
            revision: 0
          }, nW(HW.current), IC({
            action: "state"
          }).then((WF => {
            FF || KW(WF)
          })).catch((WF => {
            console.error("Could not load project schematics", WF), FF || VF("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            FF = !0
          }
        }), [CF, iW, KW]);
        const mC = (0, AF.useCallback)((() => {
            pW.current && PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.Submit,
              gM: (0, bA.s)(pW.current)
            })
          }), []),
          OS = (0, AF.useCallback)((() => {
            if (!pW.current || "lobby" !== pW.current.kind) return;
            const FF = OW.trim();
            (0, PC.q)(FF) ? (PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.ReloadAsVariation,
              gM: (0, bA.s)(pW.current),
              ZY: FF
            }), oW(!1)) : QS({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [OW]),
          xC = (0, AF.useCallback)((FF => {
            PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.SetEngine,
              gM: (0, bA.s)({
                kind: "lobby",
                path: lW.current
              }),
              ZY: FF
            })
          }), []),
          ZS = (0, AF.useCallback)((FF => {
            if (!FS.current && QW && (TF.current || iW)) {
              if (iW) {
                var WF;
                const SF = (0, dC.o)(CS.current, lW.current),
                  CF = Math.min(sF.w, Math.max(0, sF.A - SF)),
                  AF = FF.slice(0, CF);
                return eF.current = AF, yS((FF => ({
                  ...FF,
                  [lW.current]: AF
                }))), void(null === (WF = iC.current) || void 0 === WF || WF.onDocTextChanged(lW.current, AF))
              }
              eF.current = FF, PW(FF)
            }
          }), [QW, iW]);
        (0, DF.e)("EditLobbyCode", (FF => {
          var WF;
          YF.featureFlags.canSeePlayerWrittenText && iW && (rC(), tW(FF), eF.current = "", yS({
            [hC.h]: ""
          }), MW(null), XW(hC.h), BW(null), vS(null), uS.current = null, hS.current = null, null === (WF = iC.current) || void 0 === WF || WF.stopContinuousSync(), uF(), tC(hC.h))
        })), (0, DF.e)("EditCodeBlock", (FF => {
          let {
            pos: WF,
            canChangePos: SF
          } = FF;
          if (YF.featureFlags.canSeePlayerWrittenText && !iW)
            if (rC(), null !== WF && (WF = [...WF]), tW(WF), TF.current = SF, null !== WF) {
              eF.current = "", PW(""), uF();
              const FF = {
                  kind: "codeBlock",
                  pos: WF
                },
                CF = (0, bA.s)(FF);
              RW.current !== CF && (RW.current = CF, CW([]), bS(AW)), eW((0, eA.d)(CF, [WF[0], WF[1], WF[2]], !!SF)), pW.current = FF, PF.gameBridge.send("sendCodeCollab", {
                rM: bA.b.Join,
                gM: (0, bA.s)(FF)
              }), JW.current = !0
            } else CF && bW()
        })), (0, DF.e)("codeCollabRejoin", (FF => {
          const WF = pW.current ? (0, bA.s)(pW.current) : null;
          WF && FF.docKey === WF && (eF.current = FF.doc, iW || PW(FF.doc), IW((WF => WF ? {
            ...WF,
            doc: FF.doc,
            version: FF.version,
            clientID: (0, QC.c)()
          } : WF)))
        })), (0, DF.e)("codeCollab", (FF => {
          var WF;
          const SF = pW.current ? (0, bA.s)(pW.current) : null;
          if (FF.type === bA.f.LobbyFilesChanged && iW) {
            if ("string" !== typeof FF.files) return void DS();
            try {
              NS(JSON.parse(FF.files))
            } catch (PF) {
              console.error("[CodeCollab] Failed to parse lobby files", PF), DS()
            }
            return
          }
          if (FF.type === bA.f.EngineSettings && iW) return void MW(HC(FF.engineSettings));
          const AF = FF.type === bA.f.Joined ? (0, bA.i)(FF.docKey) : null,
            uF = iW && "lobby" === (null === (WF = pW.current) || void 0 === WF ? void 0 : WF.kind) && (0, dC.j)(pW.current.path) && "lobby" === (null === AF || void 0 === AF ? void 0 : AF.kind) && (0, dC.j)(AF.path);
          if (!SF || FF.docKey === SF || uF)
            if (FF.type !== bA.f.ForceClose) {
              if (CF)
                if (FF.type === bA.f.Joined) {
                  var hF;
                  const RF = JSON.parse(FF.peers),
                    EF = FF.existingCursors ? JSON.parse(FF.existingCursors) : [],
                    QF = (0, QC.c)(),
                    gW = zA(),
                    {
                      gsUrl: tW,
                      gameNameWithVariation: TF,
                      lobbyName: aW
                    } = gW,
                    qW = null !== (hF = (0, bA.i)(FF.docKey)) && void 0 !== hF ? hF : pW.current;
                  qW && (pW.current = qW, "lobby" === qW.kind && (XW(qW.path), lW.current = qW.path));
                  const VF = qW || (iW ? {
                    kind: "lobby",
                    path: lW.current
                  } : {
                    kind: "codeBlock",
                    pos: rW
                  });

                  function NF(WF) {
                    var SF, CF;
                    if (!JW.current) return;
                    const AF = null !== (SF = WF.code) && void 0 !== SF ? SF : "",
                      uF = null !== (CF = WF.collabVersion) && void 0 !== CF ? CF : 0;
                    eF.current = AF, iW || PW(AF), iW && WF.files ? yS(WF.files) : iW && yS((FF => ({
                      ...FF,
                      [lW.current]: AF
                    })));
                    const hF = {
                      doc: AF,
                      version: uF,
                      clientID: QF,
                      docKey: VF,
                      peers: RF,
                      editorCount: FF.editorCount,
                      existingCursors: EF,
                      httpConfig: gW
                    };
                    if (IW(hF), "lobby" === VF.kind) {
                      var bW;
                      const FF = {
                        doc: AF,
                        version: uF,
                        clientID: QF,
                        docKey: VF,
                        httpConfig: gW
                      };
                      for (const WF of [...RS.current]) WF(FF);
                      null === (bW = iC.current) || void 0 === bW || bW.startWhenReady()
                    }
                    WF.canSeeCode ? (clearTimeout(mS.current), kW({
                      message: null,
                      type: null
                    })) : function(FF) {
                      clearTimeout(mS.current), kW(FF)
                    }(qu);
                    const dF = UF.current;
                    UF.current = null, iW && dF && WF.files && dF in WF.files && dF !== lW.current && qC(dF)
                  }
                  iW ? TA(lW.current).then(NF).catch((FF => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", FF), rC()
                  })) : (0, AC.postJsonWithMetricsCookiesAndJsonResponse)(`${tW}/code/get-code-block`, CC.Zi["get-code-block"].toBuffer({
                    gameNameWithVariation: TF,
                    lobbyName: aW,
                    pos: rW
                  }), {
                    retries: 1
                  }).then(NF).catch((FF => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", FF), rC()
                  }))
                } else if (FF.type === bA.f.Presence) {
                if (!SF) return;
                const DF = JSON.parse(FF.peers);
                IW((WF => WF ? {
                  ...WF,
                  peers: DF,
                  editorCount: FF.editorCount
                } : WF))
              }
            } else {
              var dF;
              if (!SF) return;
              const LF = pW.current;
              JW.current = !1, pW.current = null, IW(null);
              if (!iW || "close" === FF.updates) return (0, RA.k)(), void(CF && bW());
              if (!CF) return;
              const mW = CS.current,
                OF = hS.current;
              hS.current = null;
              const xW = "lobby" === (null === LF || void 0 === LF ? void 0 : LF.kind) && LF.path === (null === OF || void 0 === OF ? void 0 : OF.fromPath),
                ZF = OF && (xW || OF.toPath in mW || (0, dC.j)(OF.toPath)) ? OF.toPath : lW.current in mW ? lW.current : null !== (dF = (0, dC.d)(mW)) && void 0 !== dF ? dF : hC.h;
              tC(ZF)
            }
        })), (0, DF.e)("refetchCode", (() => {
          YF.featureFlags.canSeePlayerWrittenText && CF && JW.current && (QW || (rC(), iW ? QF.j.Uu("EditLobbyCode", rW) : QF.j.Uu("EditCodeBlock", {
            pos: rW,
            canChangePos: TF.current
          })))
        }));
        const oS = (0, AF.useCallback)((() => {
            CF && (IF(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [CF]),
          YS = (0, AF.useCallback)((() => {
            IF(!1)
          }), []);
        (0, AF.useEffect)((() => {
          CF && QW && ("docsButton" === kS && zW ? (0, vA.h)("docsButton") : kS && vA.l.includes(kS) && !zW && (IF(!0), pF(!1)))
        }), [CF, QW, kS, zW, pF]);
        const MS = (0, AF.useCallback)((() => {
          pF(!1)
        }), [pF]);
        (0, AF.useEffect)((() => {
          CF && QW && EW && ("aiHelperButton" === NW && JF ? (0, vA.h)("aiHelperButton") : NW && vA.d.includes(NW) && !JF && (pF(!0), IF(!1)))
        }), [CF, QW, EW, NW, JF, pF]), (0, AF.useEffect)((() => {
          if (!CF || !QW) return;
          const FF = iW ? "worldCode" : "codeBlock";
          return (0, vA.H)(FF, !0), () => {
            (0, vA.H)(FF, !1)
          }
        }), [CF, QW, iW]), (0, AF.useEffect)((() => {
          if (CF) return () => {
            DW.current ? DW.current = !1 : (0, vA.D)()
          }
        }), [CF]), (0, AF.useEffect)((() => {
          (0, vA.I)("exportButton", !!rS)
        }), [rS]);
        const {
          t: cC
        } = (0, WW.B)(), GS = !JF && AW > hW, zC = GS ? EF.E : EF.u, IS = (0, AF.useCallback)(((FF, WF) => {
          QF.j.Uu("CodeEditorGoToLine", {
            path: FF,
            line: WF
          }), qC(FF)
        }), [qC]), fS = (0, AF.useCallback)((FF => {
          ES.current = FF
        }), []), yC = function(FF, WF) {
          const [SF, CF] = (0, AF.useState)(null);
          return (0, AF.useEffect)((() => {
            if (!WF) return void CF(null);
            let SF = !1;
            return mA(FF).then((FF => {
              SF || CF(FF)
            }), (FF => {
              console.error("[CodeEditor] could not collect the imported plugins", FF), SF || CF(null)
            })), () => {
              SF = !0
            }
          }), [FF, WF]), SF
        }(fW, CF);
        (0, AF.useEffect)((() => {
          yC && UW && !yC.includes(UW) && (BW(null), vS(null), iW && !JW.current && tC(lW.current))
        }), [UW, yC, iW, tC]), eS.current = {
          collabState: zS,
          ensureJoinedPath: TS,
          waitForLobbyPath: aC,
          pullLobbyFiles: DS,
          t: cC,
          canEditCode: !!QW
        }, iC.current || (iC.current = new cA({
          getLobbyFiles: () => ({
            ...CS.current,
            ...(0, tA.l)(HW.current.assets)
          }),
          deleteSchematic: async FF => {
            const WF = await IC({
              action: "remove",
              path: FF,
              expectedRevision: HW.current.revision
            });
            KW(WF)
          },
          getActivePath: () => lW.current,
          getCollabSnapshot: () => {
            var FF;
            if (FS.current) return null;
            const WF = null === (FF = eS.current) || void 0 === FF ? void 0 : FF.collabState;
            return WF ? {
              doc: WF.doc,
              version: WF.version,
              clientID: WF.clientID,
              docKey: WF.docKey,
              httpConfig: WF.httpConfig
            } : null
          },
          replaceActiveDoc: (FF, WF) => {
            var SF, CF;
            return null !== (SF = null === (CF = ES.current) || void 0 === CF ? void 0 : CF.call(ES, FF, WF)) && void 0 !== SF && SF
          },
          ensureJoined: FF => eS.current.ensureJoinedPath(FF),
          createFile: (FF, WF) => {
            !1 !== (null === WF || void 0 === WF ? void 0 : WF.focus) && (uS.current = FF), PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.CreateFile,
              gM: (0, bA.s)({
                kind: "lobby",
                path: lW.current
              }),
              qH: FF
            })
          },
          renameFile: (FF, WF) => {
            const SF = (0, bA.s)({
              kind: "lobby",
              path: lW.current
            });
            lW.current === FF && (hS.current = {
              fromPath: FF,
              toPath: WF
            }, XW(WF)), PF.gameBridge.send("sendCodeCollab", {
              rM: bA.b.RenameFile,
              gM: SF,
              qH: FF,
              mH: WF
            })
          },
          deleteFile: FF => {
            kC(FF)
          },
          waitForLobbyPath: (FF, WF, SF) => eS.current.waitForLobbyPath(FF, WF, SF),
          pullLobbyFiles: () => eS.current.pullLobbyFiles(),
          setMessage: (FF, WF) => {
            QS({
              message: FF,
              type: WF
            })
          },
          onUnlinked: () => {
            dS(!1)
          },
          t: FF => eS.current.t(FF),
          canEditCode: () => eS.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: FF,
              lobbyName: WF
            } = PF.gameBridge.latest("connectedGame");
            return (0, OC.g)(FF, WF)
          }
        }));
        const sS = (0, AF.useCallback)((async FF => {
            const WF = iC.current;
            if (!WF) return !1;
            try {
              return await WF.writeLobbyFiles(FF)
            } catch (SF) {
              return console.error("World Code AI: couldn't write the change", SF), !1
            }
          }), []),
          nS = (0, AF.useCallback)((async FF => {
            var WF, SF;
            const CF = null === (WF = FF.find((FF => FF.path === PA.b))) || void 0 === WF ? void 0 : WF.text,
              AF = pW.current;
            return void 0 !== CF && "codeBlock" === (null === AF || void 0 === AF ? void 0 : AF.kind) && (!(null === (SF = ES.current) || void 0 === SF || !SF.call(ES, (0, bA.s)(AF), CF)) && (eF.current = CF, PW(CF), !0))
          }), []),
          HS = (0, AF.useCallback)((async () => {
            try {
              var FF, WF;
              const SF = await TA(hC.h);
              return !1 === SF.canSeeCode ? null : null !== (FF = SF.files) && void 0 !== FF ? FF : {
                [hC.h]: null !== (WF = SF.code) && void 0 !== WF ? WF : ""
              }
            } catch (SF) {
              return console.error("World Code AI: couldn't read World Code for a code block", SF), null
            }
          }), []),
          KS = (0, AF.useMemo)((() => ({
            [PA.b]: dW
          })), [dW]),
          wS = (0, AF.useCallback)(((FF, WF) => {
            QF.j.Uu("CodeEditorGoToLine", {
              path: PA.b,
              line: WF
            })
          }), []);
        (0, AF.useEffect)((() => {
          JF && CF && bS(AW)
        }), [JF, CF, AW]);
        const US = (0, AF.useCallback)((() => {
            var FF, WF;
            mC();
            const SF = (0, YF.isTouchscreen)() ? "open World Code again" : `press ${null!==(FF=null===(WF=KF.z.OpenCodeEditor)||void 0===WF?void 0:WF[0])&&void 0!==FF?FF:"F8"}`,
              CF = iW ? `\ud83e\udd16 Try out your change, then ${SF} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            QF.j.Uu("chat", {
              content: [{
                str: CF,
                style: {
                  color: LF.D.cyanUiText
                }
              }]
            })
          }), [mC, iW]),
          BS = (0, AF.useCallback)((FF => {
            const WF = rW,
              SF = TF.current;
            iW || !WF || PF.gameBridge.lookup("codeBlockClickable", WF) ? (0, RA.l)(FF, {
              submit: () => {
                mC(), QF.j.Uu("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: LF.D.cyanUiText
                    }
                  }]
                }), !iW && WF && setTimeout((() => {
                  PF.gameBridge.send("clickCodeBlock", WF)
                }), 1e3)
              },
              reopen: () => {
                (0, iu.l)() || (iW ? QF.j.Uu("EditLobbyCode", WF) : QF.j.Uu("EditCodeBlock", {
                  pos: WF,
                  canChangePos: SF
                }))
              }
            }) : US()
          }), [mC, iW, rW, US]),
          jC = (0, AF.useCallback)((() => {
            pF(!1)
          }), [pF]),
          vC = (0, AF.useRef)(LS);
        vC.current = LS;
        const JS = (0, AF.useCallback)((function(FF) {
            let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            QF.j.Uu("WorldCodeAiDraft", {
              text: FF,
              send: WF
            }), vC.current(), QF.j.Uu("EditLobbyCode", rW)
          }), [rW]),
          pS = (0, AF.useCallback)((FF => {
            vC.current(), FF.codeBlock ? QF.j.Uu("EditCodeBlock", {
              pos: [...FF.pos],
              canChangePos: FF.canChangePos
            }) : QF.j.Uu("EditLobbyCode", rW)
          }), [rW]);
        (0, DF.e)("WorldCodeAiDraft", (FF => {
          iW && (FW(FF), pF(!0))
        }));
        const lS = !!QW && !!kS && vA.l.includes(kS);
        (0, AF.useEffect)((() => {
          CF && JF && EW && !lS && IF(!1)
        }), [CF, JF, EW, lS]);
        const FC = (0, AF.useCallback)((() => {
            FW(null)
          }), []),
          [WC, SC] = (0, AF.useState)(null);
        (0, DF.e)("WorldCodeAiSelection", (FF => {
          CF && (SC(FF), pF(!0), IF(!1))
        }));
        const eC = (0, AF.useCallback)((() => {
          SC(null)
        }), []);
        (0, DF.e)("chat", (FF => {
          let {
            content: WF
          } = FF;
          if (!iW && null === RW.current) return;
          const SF = Array.isArray(WF) ? WF : [WF],
            CF = SF.some((FF => {
              var WF;
              return (null === FF || void 0 === FF || null === (WF = FF.style) || void 0 === WF ? void 0 : WF.color) === LF.D.redUiText
            })),
            AF = SF.map((FF => {
              var WF;
              const SF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.str) && void 0 !== WF ? WF : FF;
              return "string" === typeof SF ? SF : ""
            })).join("");
          CF && /world code|error/i.test(AF) && (CW((FF => [...FF, AF].slice(-10))), uW((FF => FF + 1)), (0, RA.h)(AF))
        })), (0, AF.useEffect)((() => {
          if (!CF || !iW || !PS) return;
          let FF = !1;
          return (async (WF, SF) => {
            const CF = await (null === (WF = iC.current) || void 0 === WF ? void 0 : WF.tryRestoreHandle());
            !FF && CF && (dS(!0), null === (SF = iC.current) || void 0 === SF || SF.startWhenReady())
          })(), () => {
            FF = !0
          }
        }), [CF, iW, PS]), (0, AF.useEffect)((() => {
          var FF;
          CF || (null === (FF = iC.current) || void 0 === FF || FF.stopContinuousSync(), rC(!1), LW.current && (LW.current = !1, PF.gameBridge.send("sendChatMessage", {
            rb: "//export",
            channelName: null
          })))
        }), [CF, rC]);
        const gA = (0, AF.useCallback)((async () => {
            if (PS && iC.current) try {
              if (!await iC.current.linkFolder()) return;
              dS(!0), await iC.current.startWhenReady()
            } catch (FF) {
              console.error("[WorldCodeDirectorySync] Link failed", FF), QS({
                message: cC("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [PS, cC]),
          TC = (0, AF.useCallback)((async () => {
            iC.current && await iC.current.unlinkFolder()
          }), []),
          aA = (0, AF.useCallback)((() => {
            PS ? bC ? TC() : gA() : iA.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [PS, bC, gA, TC]);
        return (0, RF.jsxs)(hF.b, {
          className: gS()("CodeEditorBg", {
            CodeEditorLight: oF
          }),
          close: LS,
          escDoesExit: !0,
          show: CF,
          togglePointerLock: !1,
          globallyUniqueKey: iW ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, RF.jsx)(jA.b, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: cC("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!QW && !iW
          }), (0, RF.jsx)(jA.b, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, RF.jsxs)(RF.Fragment, {
              children: [(0, RF.jsx)("p", {
                children: cC("codeEditor:tutorialWorldCodeWelcome")
              }), (0, RF.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, RF.jsx)("li", {
                  children: cC("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, RF.jsx)("li", {
                  children: cC("codeEditor:tutorialWorldCodeUseReact")
                }), (0, RF.jsx)("li", {
                  children: cC("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!QW && iW
          }), (0, RF.jsx)("div", {
            className: "CodeEditorTitle",
            children: iW ? "World Code" : "Code Block"
          }), (0, RF.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, RF.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, RF.jsx)(XS.g, {
                tooltipInner: cC(rS ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: rS ? void 0 : 0,
                hideTooltip: "exportButton" === tS,
                children: (0, RF.jsx)(jA.e, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: cC("codeEditor:tutorialExport"),
                  enabled: !!QW,
                  children: (0, RF.jsx)(EF.k, {
                    className: "CodeEditorButton",
                    disabled: !rS,
                    onClick: () => {
                      "exportButton" === tS && ((0, vA.h)("exportButton"), DW.current = !0), LW.current = !0, LS()
                    },
                    padDestructive: !0,
                    children: cC("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, RF.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [QW && (0, RF.jsx)(XS.g, {
                tooltipInner: cC("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === tS,
                children: (0, RF.jsx)(jA.e, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: cC("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, RF.jsx)(EF.e, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: cC("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, vA.h)("helpButton"), iA.NotificationProvider.showCustomPopup({
                        body: FF => (0, RF.jsx)(JC, {
                          close: FF
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, RF.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, RF.jsx)(gW.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, RF.jsx)(XS.g, {
                tooltipInner: cC("codeEditor:closeTooltip"),
                children: (0, RF.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    LS()
                  },
                  children: (0, RF.jsx)(EF.h, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, RF.jsx)(EC, {
            peers: null !== (WF = null === zS || void 0 === zS ? void 0 : zS.peers) && void 0 !== WF ? WF : []
          }), (0, RF.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [fF && wF && (0, RF.jsx)(CA, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, RF.jsx)(SA, {
                inputRef: nF,
                close: () => {
                  yW(!1)
                }
              })
            }), iW && (0, RF.jsx)(kA, {
              schematics: sW.assets,
              onManageSchematic: FF => {
                QW && iA.NotificationProvider.showCustomPopup({
                  body: WF => (0, RF.jsx)(nC, {
                    initialPath: FF,
                    onChanged: KW,
                    onClose: WF
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: fW,
              activePath: wW,
              canEdit: !!QW,
              directoryLinked: bC,
              pluginNames: null !== yC && void 0 !== yC ? yC : ku,
              activePluginName: UW,
              activePluginFile: jS,
              onSelect: qC,
              onSelectPlugin: VS,
              onToggleDirectorySync: aA,
              onCreate: FF => {
                uS.current = FF, PF.gameBridge.send("sendCodeCollab", {
                  rM: bA.b.CreateFile,
                  gM: (0, bA.s)({
                    kind: "lobby",
                    path: lW.current
                  }),
                  qH: FF
                })
              },
              onRename: (FF, WF) => {
                lW.current === FF && (hS.current = {
                  fromPath: FF,
                  toPath: WF
                }, XW(WF)), PF.gameBridge.send("sendCodeCollab", {
                  rM: bA.b.RenameFile,
                  gM: (0, bA.s)({
                    kind: "lobby",
                    path: lW.current
                  }),
                  qH: FF,
                  mH: WF
                })
              },
              onRenameFolder: (FF, WF) => {
                const [SF] = (0, dC.n)([lW.current], FF, WF);
                SF && (hS.current = {
                  fromPath: SF[0],
                  toPath: SF[1]
                }, XW(SF[1])), PF.gameBridge.send("sendCodeCollab", {
                  rM: bA.b.RenameFolder,
                  gM: (0, bA.s)({
                    kind: "lobby",
                    path: lW.current
                  }),
                  qH: FF,
                  mH: WF
                })
              },
              onDelete: kC
            }), (0, RF.jsx)("div", {
              className: gS()("CodeEditorMessage", {
                CodeEditorMessageHidden: !NF.message,
                CodeEditorMessageSuccess: "success" === NF.type
              }),
              children: NF.message && (0, RF.jsx)("div", {
                className: "CodeEditorMessageText",
                children: NF.message
              })
            }), (0, RF.jsx)(AF.Suspense, {
              fallback: (0, RF.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, RF.jsx)(OF.c, {})
              }),
              children: (0, RF.jsx)(EA, {
                isLobbyCode: iW,
                code: zS ? zS.doc : eF.current,
                files: iW ? fW : void 0,
                activePath: iW ? wW : void 0,
                pluginName: UW,
                pluginFile: jS,
                pluginSource: UW && jS ? null === (SF = rA.f[UW]) || void 0 === SF ? void 0 : SF.files[jS] : void 0,
                onChange: ZS,
                canEditCode: QW,
                setTemporaryMessage: QS,
                close: LS,
                showTooltips: xW,
                lightMode: oF,
                collabState: zS,
                setActiveDocReplacer: fS,
                showAiHints: EW && cW,
                canAiChangeCode: !!QW && (iW || !!TF.current),
                onRemoteDocChange: FF => {
                  var WF;
                  (eF.current = FF, iW) ? (yS((WF => ({
                    ...WF,
                    [lW.current]: FF
                  }))), null === (WF = iC.current) || void 0 === WF || WF.onDocTextChanged(lW.current, FF)) : PW(FF)
                }
              })
            }), zW && (0, RF.jsx)(CA, {
              side: "right",
              defaultWidth: "40%",
              children: (0, RF.jsx)(AF.Suspense, {
                fallback: (0, RF.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, RF.jsx)(OF.c, {})
                }),
                children: (0, RF.jsx)(QA, {
                  popOutDocs: oS,
                  hideDocs: YS,
                  tutorialEnabled: !!QW
                })
              })
            }), JF && iS && EW && (0, RF.jsx)(CA, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, RF.jsx)(AF.Suspense, {
                fallback: (0, RF.jsx)(OF.c, {}),
                children: (0, RF.jsx)(ru, {
                  target: iS,
                  chatKey: `${cS.gameNameWithVariation}/${cS.lobbyName}/aiHelper`,
                  historyKey: `${cS.gameNameWithVariation}/${cS.lobbyName}/${iS.key}`,
                  files: iS.codeBlock ? KS : fW,
                  activePath: iS.codeBlock ? PA.b : wW,
                  canEdit: !!QW && (iS.codeBlock ? !!TF.current : !UW),
                  isLoaded: null !== zS,
                  errors: SW,
                  errorCount: AW,
                  applyFiles: iS.codeBlock ? nS : sS,
                  submit: US,
                  testRun: BS,
                  close: jC,
                  goToLine: iS.codeBlock ? wS : IS,
                  openWorldCode: iS.codeBlock ? JS : void 0,
                  readWorldCode: iS.codeBlock ? HS : void 0,
                  viewChunk: gu,
                  viewGameState: tu,
                  openTarget: QW ? pS : void 0,
                  draft: lF,
                  onDraftUsed: FC,
                  selection: WC,
                  onSelectionUsed: eC
                }, iS.key)
              })
            })]
          }), (null === WS || void 0 === WS ? void 0 : WS.fallback) && (0, RF.jsx)(KC, {
            fallback: WS.fallback,
            onGoToLine: IS
          }), (0, RF.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, RF.jsx)(XS.g, {
              tooltipInner: cC(oF ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, RF.jsx)(EF.e, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: cC(oF ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  MF(!oF)
                },
                children: (0, RF.jsx)(gW.e, {
                  name: oF ? "moon" : "sun-bright"
                })
              })
            }), (0, RF.jsx)(XS.g, {
              tooltipInner: cC("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.k, {
                className: "CodeEditorButton",
                onClick: mC,
                padDefaultFocus: !0,
                children: cC("codeEditor:submitCode")
              })
            }), (0, RF.jsx)(XS.g, {
              tooltipInner: cC(zW ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === kS || "hideDocsButton" === kS,
              children: (0, RF.jsx)(jA.e, {
                tutorial: aS,
                step: zW ? "hideDocsButton" : "docsButton",
                text: cC(zW ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!QW,
                placement: "top",
                waitForClick: !0,
                onPrevious: zW && "welcome" === aS ? YS : void 0,
                children: (0, RF.jsx)(EF.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, vA.h)(zW ? "hideDocsButton" : "docsButton"), IF(!zW), pF(!1)
                  },
                  children: cC(zW ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), EW && (0, RF.jsx)(jA.e, {
              tutorial: VW,
              step: JF ? "hideAiHelperButton" : "aiHelperButton",
              text: cC(JF ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === VW ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!QW,
              placement: "top",
              waitForClick: !0,
              onPrevious: JF && "welcome" === VW ? MS : void 0,
              children: (0, RF.jsx)(zC, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, vA.h)(JF ? "hideAiHelperButton" : "aiHelperButton"), pF(!JF), IF(!1)
                },
                children: JF ? "Hide AI Helper" : GS ? "Fix error with AI" : "AI Helper"
              })
            }), wF && (0, RF.jsx)(XS.g, {
              tooltipInner: cC(fF ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.u, {
                className: "CodeEditorButton",
                onClick: () => {
                  HF.current = !fF, yW(!fF)
                },
                children: cC(fF ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, RF.jsx)(XS.g, {
              tooltipInner: cC("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  QF.j.Uu("FormatCode")
                },
                children: cC("codeEditor:formatCode")
              })
            }), (0, RF.jsx)(XS.g, {
              tooltipInner: cC("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(eF.current).then((() => {
                    QS({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    QS({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: cC("codeEditor:copyCode")
              })
            }), (0, RF.jsx)(XS.g, {
              tooltipInner: cC(xW ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.e, {
                className: "CodeEditorButton",
                onClick: () => {
                  ZF(!xW)
                },
                children: cC(xW ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !iW && (0, RF.jsx)(XS.g, {
              tooltipInner: cC("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === tS,
              children: (0, RF.jsx)(jA.e, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: cC("codeEditor:tutorialWorldCodeButton"),
                enabled: !!QW,
                placement: "top",
                waitForClick: !0,
                children: (0, RF.jsx)(EF.u, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === tS && ((0, vA.h)("worldCodeButton"), DW.current = !0), LS(), QF.j.Uu("EditLobbyCode", rW)
                  },
                  children: cC("codeEditor:worldCode")
                })
              })
            }), (GW || WS || EW) && (0, RF.jsx)(XS.g, {
              tooltipInner: cC("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, RF.jsx)(EF.e, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  oW(!0)
                },
                children: (0, RF.jsx)(gW.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), ZW && (0, RF.jsx)(RC.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              oW(!1)
            },
            body: (0, RF.jsx)(BC, {
              engineSettings: WS,
              onSetEngine: xC,
              aiHints: EW ? {
                shown: cW,
                setShown: GF
              } : null,
              variation: GW ? {
                name: OW,
                setName: xS,
                reload: OS
              } : null
            })
          })]
        })
      })),
      NA = new Set(["makeReport", "makeDiscordReport", "inviteLink"]),
      DA = (0, AF.memo)((function() {
        const {
          openEverythingMenuName: FF,
          openInGameMenuName: WF
        } = (0, AS.d)(["openEverythingMenuName", "openInGameMenuName"]), SF = (0, mW.e)("fullInventory"), uF = (0, AF.useRef)(null);
        (0, DF.e)("toggleMenu", (FF => {
          var WF;
          const SF = AS.b.get("openInGameMenuName");
          let CF = null === FF || void 0 === FF ? void 0 : FF.split("|")[0];
          const AF = null !== (WF = null === FF || void 0 === FF ? void 0 : FF.split("|")[1]) && void 0 !== WF ? WF : null;
          ("closeCurrentMenu" === AF && SF || CF === SF) && (uF.current = null, CF = null);
          const hF = "closeCurrentMenu" === AF ? null : AF;
          uF.current !== hF && (uF.current = hF), null !== CF && (0, wS.h)("InGameMenu"), AS.b.set({
            openInGameMenuName: CF
          })
        }));
        const hF = (0, AF.useCallback)((FF => () => {
            QF.j.Uu("toggleMenu", FF)
          }), []),
          bW = (0, AF.useRef)({
            cantCrouchIfNotFullscreen: hF("cantCrouchIfNotFullscreen"),
            makeReport: hF("makeReport"),
            makeDiscordReport: hF("makeDiscordReport"),
            editBook: hF("editBook"),
            editNameTag: hF("editNameTag"),
            inventory: hF("inventory"),
            inviteLink: hF("inviteLink"),
            writeOnBoard: hF("writeOnBoard"),
            codeEditor: hF("codeEditor"),
            lobbyCodeEditor: hF("lobbyCodeEditor"),
            customLobbyBlockEditor: hF("customLobbyBlockEditor"),
            ironChestPasskeyInput: hF("ironChestPasskeyInput"),
            petUi: hF("petUi")
          }),
          dF = (0, AF.useCallback)((() => {
            AS.b.set({
              openInGameMenuName: null
            })
          }), []),
          PF = (0, AF.useRef)(null);
        return (0, AF.useEffect)((() => {
          if (WF) {
            var FF;
            (0, wS.h)("InGameMenu"), PF.current = NA.has(WF) ? null !== (FF = AS.b.get("openEverythingMenuName")) && void 0 !== FF ? FF : PF.current : null, AS.b.set({
              openEverythingMenuName: null
            })
          } else {
            const FF = PF.current;
            PF.current = null, null !== FF && null === AS.b.get("openEverythingMenuName") && AS.b.set({
              openEverythingMenuName: FF
            }), uF.current = null, (0, wS.g)("InGameMenu")
          }
        }), [WF]), (0, AF.useEffect)((() => {
          null !== FF && dF()
        }), [FF, dF]), (0, RF.jsxs)(RF.Fragment, {
          children: [(0, RF.jsx)(CF.f, {
            show: "clientGame" === WF
          }), (0, RF.jsx)(yC, {
            show: "cantCrouchIfNotFullscreen" === WF,
            onOpen: bW.current.cantCrouchIfNotFullscreen,
            onClose: dF
          }), (0, RF.jsx)(HS, {
            show: "makeReport" === WF,
            onOpen: bW.current.makeReport,
            onClose: dF
          }), (0, RF.jsx)(KS, {
            show: "makeDiscordReport" === WF,
            onOpen: bW.current.makeDiscordReport,
            onClose: dF
          }), (0, RF.jsx)(JF, {
            show: "editBook" === WF,
            onOpen: bW.current.editBook,
            onClose: dF
          }), (0, RF.jsx)(vW, {
            show: "editNameTag" === WF,
            onOpen: bW.current.editNameTag,
            onClose: dF
          }), SF && (0, RF.jsx)(zC, {
            show: "inventory" === WF,
            onOpen: bW.current.inventory,
            onClose: dF,
            variation: uF.current
          }), (0, RF.jsx)(yW.e, {
            show: "inviteLink" === WF,
            onClose: dF
          }), (0, RF.jsx)(GF, {
            show: "retentionFeatures" === WF,
            onClose: dF
          }), (0, RF.jsx)(jW, {
            show: "writeOnBoard" === WF,
            onOpen: bW.current.writeOnBoard,
            onClose: dF
          }), (0, RF.jsx)(VA, {
            show: "lobbyCodeEditor" === WF,
            onOpen: bW.current.lobbyCodeEditor,
            onClose: dF,
            isLobbyCode: !0
          }), (0, RF.jsx)(VA, {
            show: "codeEditor" === WF,
            onOpen: bW.current.codeEditor,
            onClose: dF,
            isLobbyCode: !1
          }), (0, RF.jsx)(BS, {
            show: "customLobbyBlockEditor" === WF,
            onOpen: bW.current.customLobbyBlockEditor,
            onClose: dF
          }), (0, RF.jsx)(TW, {
            show: "ironChestPasskeyInput" === WF,
            onOpen: bW.current.ironChestPasskeyInput,
            onClose: dF
          }), (0, RF.jsx)(FC, {
            togglePointerLock: !0,
            show: "petUi" === WF,
            onOpen: bW.current.petUi,
            onClose: dF
          })]
        })
      }))
  },
  35012: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => Pu
    });
    SF(35018);
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(2935),
      bW = SF(1262),
      dF = SF(1546),
      PF = SF(971);

    function RF() {
      const FF = 2e3,
        [WF, SF] = (0, CF.useState)(null),
        [AF, RF] = (0, CF.useState)(null),
        iW = (0, CF.useRef)(null);
      (0, bW.e)("showBottomMessage", (WF => {
        let {
          message: SF,
          timeoutLength: CF = FF,
          type: AF
        } = WF;
        RF({
          message: SF,
          type: AF
        }), clearTimeout(iW.current), iW.current = setTimeout((() => {
          RF(null)
        }), CF)
      })), (0, bW.e)("showPermanentBottomMessage", (FF => {
        SF(FF)
      })), (0, CF.useEffect)((() => ((0, hF.c)((() => {
        SF(null)
      })), () => {
        clearTimeout(iW.current)
      })), []);
      const eF = AF || WF;
      return eF ? (0, PF.jsx)("div", {
        className: uF()("BottomScreenMessage", eF.type),
        children: (0, PF.jsx)(dF.d, {
          text: eF.message
        })
      }) : null
    }
    var iW = SF(1907),
      eF = SF(1576),
      EF = SF(1352);
    var QF = SF(996),
      rW = SF(990),
      gW = SF(220),
      tW = SF(1955),
      TF = SF(20),
      aW = SF(1594),
      kW = SF(33),
      qW = SF(1607),
      VF = SF(11),
      NF = SF(1616),
      DF = SF(1223),
      LF = SF(7752),
      mW = SF(1637),
      OF = SF(1046);
    const xW = (0, CF.memo)((function() {
      const {
        isTouchScreen: FF,
        loadingOverlayVisible: WF
      } = (0, VF.d)(["isTouchScreen", "loadingOverlayVisible"]), SF = (0, DF.r)();
      (0, rW.e)();
      const AF = (0, tW.k)("showBasicMovementControls"),
        [hF, bW] = (0, CF.useState)("movement"),
        dF = "movement" === hF,
        RF = SF && !1 !== AF;
      return (0, CF.useEffect)((() => {
        "padActions" !== hF || RF || bW("done")
      }), [hF, RF]), (0, CF.useEffect)((() => {
        if (WF || "done" === hF) return;
        const FF = setTimeout((() => {
          bW("movement" === hF && (0, DF.f)() ? "padActions" : "done")
        }), 7e3);
        return () => {
          clearTimeout(FF)
        }
      }), [WF, hF]), kW.h.getItem(gW.Jb) > 2 ? (0, PF.jsx)(MF, {
        showingMovementControls: !1
      }) : (0, PF.jsxs)(PF.Fragment, {
        children: [FF && !SF || !dF || !1 === AF ? null : (0, PF.jsxs)("div", {
          className: uF()("ControlsTutorialDiv", {
            UnderLoadingOverlay: WF
          }),
          children: [(0, PF.jsx)(ZF, {}), (0, PF.jsx)(YF, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, PF.jsx)(YF, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === hF && RF && (0, PF.jsx)(oF, {}), (0, PF.jsx)(MF, {
          showingMovementControls: "done" !== hF
        })]
      })
    }));

    function ZF() {
      const FF = (0, DF.r)();
      return (0, PF.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, PF.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), FF && (0, PF.jsx)(NF.d, {
          noaAction: "forward"
        }), !FF && (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, PF.jsx)(NF.d, {
              noaAction: "forward"
            })
          }), (0, PF.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, PF.jsx)(NF.d, {
              noaAction: "left"
            }), (0, PF.jsx)(NF.d, {
              noaAction: "backward"
            }), (0, PF.jsx)(NF.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function oF() {
      const {
        t: FF
      } = (0, OF.B)(), WF = (0, tW.k)("useInventory");
      return (0, PF.jsxs)("div", {
        className: "ControlsTutorialDiv",
        children: [(0, PF.jsx)(YF, {
          header: FF("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, PF.jsx)(YF, {
          header: FF("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== WF && (0, PF.jsx)(YF, {
          header: FF("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, PF.jsx)(YF, {
          header: FF("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function YF(FF) {
      let {
        header: WF,
        noaAction: SF
      } = FF;
      return (0, PF.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, PF.jsx)("div", {
          className: "KeyHeader",
          children: WF
        }), (0, PF.jsx)(NF.d, {
          noaAction: SF
        })]
      })
    }

    function MF(FF) {
      let {
        showingMovementControls: WF
      } = FF;
      const {
        isTouchScreen: SF
      } = (0, VF.d)(["isTouchScreen"]), AF = (0, DF.r)(), uF = (0, mW.c)("OpenShop"), [hF, bW] = (0, CF.useState)(!1), dF = `SeenShopControls|${(0,qW.c)("connectedGame",(FF=>FF.gameNameWithVariation))}`, RF = () => (!(0, DF.f)() || null !== (0, LF.d)("OpenShop")) && !kW.h.getItem(dF) && aW.d.get("shopInfo") && !WF, iW = () => (bW(!0), kW.h.setItem(dF, !0), (0, DF.f)() || TF.j.Uu("showShopTouchTutorial"), setTimeout((() => {
        bW(!1)
      }), 7e3));
      (0, CF.useEffect)((() => {
        let FF;
        const WF = TF.j.subscribe("showShopTutorial", (() => {
          RF() && (FF = iW())
        }));
        return () => {
          clearTimeout(FF), TF.j.unsubscribe(WF)
        }
      }), [WF]);
      const eF = (0, CF.useRef)();
      return (0, tW.h)("currencyAmounts", (FF => {
        if (RF()) {
          let SF = !1;
          const CF = aW.d.get("shopInfo");
          for (const AF in CF) {
            for (const uF in CF[AF].items) {
              var WF;
              const hF = CF[AF].items[uF];
              if (void 0 !== hF.currency && FF[hF.currency] && hF.cost <= FF[hF.currency].amount && (null === (WF = hF.hidden) || void 0 === WF || !WF)) {
                SF = !0;
                break
              }
            }
            if (SF) break
          }
          SF && (eF.current = iW())
        }
      })), (0, CF.useEffect)((() => () => {
        clearTimeout(eF.current)
      }), [WF]), !hF || AF && !uF ? null : (0, PF.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: SF && !AF ? null : (0, PF.jsx)(YF, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var cW = SF(1198),
      GF = SF(929);
    const zW = (0, CF.memo)((function() {
      return (0, rW.e)(), (0, PF.jsx)(IF, {})
    }));
    class IF extends CF.Component {
      constructor(FF) {
        super(FF), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = TF.j.subscribe("TopRightHelper", (FF => {
          this.showQueue.push(FF), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        TF.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(FF, WF) {
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
        let FF, WF, SF, CF, AF, uF = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, FF = "slideIn") : "slideOut" === this.state.currState ? FF = "slideOut" : null === this.currMessage && (uF = !1), this.currMessage) {
          const uF = this.currMessage.color || "rgb(102, 102, 102)";
          WF = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === FF ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, SF = {
            backgroundColor: uF
          }, CF = {
            animation: "2s " + ("slideOut" === FF ? "CloseNotification" : "ExpandNotification")
          }, AF = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === FF ? "textDisappear" : "textAppear")
          }
        }
        return uF ? (0, PF.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...WF
          },
          children: [(0, PF.jsx)("div", {
            className: "LeftSide",
            style: SF,
            children: (0, PF.jsx)(GF.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, PF.jsx)("div", {
            className: "RightSide",
            style: CF,
            children: (0, PF.jsx)("div", {
              className: "HelperText",
              style: AF,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var fF = SF(35027),
      yW = SF(1234);
    const sF = (0, yW.k)((FF => FF.PadSneakChip));

    function nF(FF) {
      const [WF, SF, CF] = function(FF) {
        const WF = parseInt(FF.substring(1), 16),
          SF = (WF >> 16) / 255,
          CF = (WF >> 8 & 255) / 255,
          AF = (255 & WF) / 255,
          uF = Math.max(SF, CF, AF),
          hF = Math.min(SF, CF, AF),
          bW = (uF + hF) / 2,
          dF = uF - hF;
        if (0 === dF) return [0, 0, bW];
        const PF = dF / (1 - Math.abs(2 * bW - 1));
        let RF;
        RF = uF === SF ? (CF - AF) / dF % 6 : uF === CF ? (AF - SF) / dF + 2 : (SF - CF) / dF + 4;
        return [(60 * RF + 360) % 360, PF, bW]
      }(FF), AF = 0 === SF ? 0 : Math.min(.6, SF + .03), uF = CF > .5 ? -1 : 1, hF = HF(CF + .09 * uF);
      return {
        panel: FF,
        slot: KF(WF, AF, hF),
        slotSelected: KF(WF, AF, HF(hF + .2 * uF)),
        slotUnavailable: KF(WF, AF, HF(CF + -.1 * uF))
      }
    }

    function HF(FF) {
      return Math.min(1, Math.max(0, FF))
    }

    function KF(FF, WF, SF) {
      const CF = (1 - Math.abs(2 * SF - 1)) * WF,
        AF = CF * (1 - Math.abs(FF / 60 % 2 - 1)),
        uF = SF - CF / 2;
      let hF;
      return hF = FF < 60 ? [CF, AF, 0] : FF < 120 ? [AF, CF, 0] : FF < 180 ? [0, CF, AF] : FF < 240 ? [0, AF, CF] : FF < 300 ? [AF, 0, CF] : [CF, 0, AF], "#" + hF.map((FF => function(FF) {
        return Math.round(255 * FF).toString(16).padStart(2, "0")
      }(FF + uF))).join("")
    }
    var wF = SF(35059),
      XF = SF(3462),
      UF = SF(1939),
      BF = SF(1943),
      jW = SF(35105),
      vW = SF(3812),
      JF = SF(1289),
      pF = SF(568);
    var lF = SF(1144),
      FW = SF(7818);
    const WW = 25 * Math.PI / 180,
      SW = 45 * Math.PI / 180;
    class CW {
      constructor(FF) {
        this.deps = FF, this.phase = "idle", this.armTimer = null, this.speed = 0, this.armedSpeed = 0, this.suspended = !1
      }
      move(FF, WF, SF) {
        if (this.suspended) return;
        this.speed = SF;
        const CF = Math.hypot(FF, WF),
          AF = CF > 0 ? Math.acos(Math.min(1, -WF / CF)) : Math.PI;
        if ("armed" === this.phase || "ready" === this.phase) return void((CF < .5 || AF > SW) && this.setPhase("idle"));
        const uF = CF >= .8 && AF <= WW;
        uF && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.armedSpeed = this.speed, this.setPhase("armed")
        }), 1e3)) : uF || "charging" !== this.phase || this.setPhase("idle")
      }
      target(FF) {
        FF && "armed" === this.phase ? this.setPhase("ready") : FF || "ready" !== this.phase || this.setPhase("armed")
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
      setPhase(FF) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const WF = this.phase;
        this.phase = FF, this.deps.onPhase(FF, WF)
      }
    }
    const AW = {
      charging: "AutorunCharging",
      armed: "AutorunArmed",
      ready: "AutorunReady",
      locked: "AutorunLocked"
    };
    const uW = 50;

    function hW(FF) {
      let {
        onMove: WF,
        mode: SF,
        speedCurve: AF,
        autorun: uF = !1
      } = FF;
      const hF = (0, CF.useRef)(null),
        bW = (0, CF.useRef)(null),
        dF = (0, CF.useRef)(null),
        RF = (0, CF.useRef)(null),
        iW = (0, CF.useRef)(null),
        EF = (0, CF.useRef)(null),
        QF = (0, CF.useRef)(null),
        rW = (0, CF.useRef)(null),
        gW = (0, CF.useRef)(!1),
        {
          t: tW
        } = (0, OF.B)(),
        TF = "fixed_shown" === SF || "fixed_hidden" === SF,
        aW = (0, VF.d)(["notchSize"]).notchSize.left,
        kW = function(FF, WF, SF, AF) {
          const uF = (0, CF.useRef)(null),
            hF = (0, CF.useRef)(AF);
          return hF.current = AF, (0, CF.useEffect)((() => {
            if (!FF) return;
            let CF = null,
              AF = null;
            const bW = new CW({
              onPhase: (FF, uF) => {
                const dF = WF.current;
                if (null !== dF) {
                  for (const [WF, SF] of Object.entries(AW)) dF.classList.toggle(SF, WF === FF);
                  if ("charging" === FF) CF = SF.current.animate([{
                    strokeDashoffset: 1
                  }, {
                    strokeDashoffset: 0
                  }], {
                    delay: 400,
                    duration: 600,
                    fill: "forwards"
                  });
                  else if ("idle" === FF) {
                    var PF;
                    null === (PF = CF) || void 0 === PF || PF.cancel(), CF = null
                  }
                  "ready" === FF && FW.f.play("autorunReady"), "locked" === FF && (FW.f.play("autorunLocked"), AF = setInterval((() => {
                    eF.gameBridge.lookup("dropAhead", null) && (FW.f.play("autorunLedgeStop"), bW.cancel())
                  }), 100)), "locked" === uF && (clearInterval(AF), AF = null, hF.current())
                }
              }
            });
            uF.current = bW;
            const dF = () => {
                bW.suspend()
              },
              PF = () => {
                "hidden" === document.visibilityState && dF()
              },
              RF = (0, lF.e)(dF);
            return document.addEventListener("visibilitychange", PF), window.addEventListener("blur", dF), window.addEventListener("resize", dF), () => {
              RF(), document.removeEventListener("visibilitychange", PF), window.removeEventListener("blur", dF), window.removeEventListener("resize", dF), bW.cancel(), clearInterval(AF), uF.current = null
            }
          }), [FF, WF, SF]), (0, qW.b)("localPlayerAliveSet", (FF => {
            var WF;
            FF || null === (WF = uF.current) || void 0 === WF || WF.suspend()
          })), uF
        }(uF, bW, EF, (() => {
          ZF(), xW()
        }));

      function NF() {
        const FF = aW * window.innerWidth / 100,
          WF = window.innerHeight > window.innerWidth ? 135 : 100;
        return {
          x: FF + 90,
          y: window.innerHeight - WF
        }
      }

      function DF(FF) {
        bW.current.style.transform = `translate(${FF.x-uW}px, ${FF.y-uW}px)`
      }

      function LF(FF) {
        const WF = bW.current;
        WF.classList.add("Resting"), WF.classList.toggle("Returning", FF), WF.style.display = "fixed_hidden" === SF ? "none" : "block", DF(NF())
      }
      const mW = (0, CF.useRef)({
        restFixed: LF,
        release: oF
      });

      function xW() {
        TF ? LF("fixed_shown" === SF) : "floating" === SF && (bW.current.style.display = "none"), WF({
          x: 0,
          y: 0
        })
      }

      function ZF() {
        iW.current = null, RF.current = null, dF.current.style.transform = "translate(-50%, -50%)"
      }

      function oF(FF) {
        ZF();
        const SF = kW.current,
          CF = FF && SF ? SF.lift() : null;
        null === CF ? (null === SF || void 0 === SF || SF.cancel(), xW()) : WF({
          x: 0,
          y: -CF
        })
      }

      function YF(FF) {
        const SF = Array.from(FF.touches).find((FF => FF.identifier === iW.current));
        if (null === RF.current || null === iW.current || (0, pF.Q)(SF)) return;
        const CF = kW.current,
          uF = SF.clientX - RF.current.x,
          hF = SF.clientY - RF.current.y,
          bW = Math.hypot(uF, hF),
          PF = bW > 0 ? Math.min(1, uW / bW) : 0,
          eF = uF * PF,
          EF = hF * PF,
          QF = Math.hypot(eF, EF) / uW,
          tW = AF && QF > 0 ? AF(QF) / QF : 1;
        dF.current.style.transform = `translate(calc(-50% + ${eF}px), calc(-50% + ${EF}px))`;
        const TF = eF / uW,
          aW = EF / uW;
        if (WF({
            x: TF * tW,
            y: aW * tW
          }), null !== CF && null !== rW.current) {
          CF.move(TF, aW, QF * tW);
          const FF = gW.current;
          gW.current = function(FF, WF) {
            return FF.clientX >= WF.left - 8 && FF.clientX <= WF.right + 8 && FF.clientY >= WF.top - 8 && FF.clientY <= WF.bottom + 8
          }(SF, rW.current), gW.current !== FF && CF.target(gW.current)
        }
      }
      return mW.current = {
        restFixed: LF,
        release: oF
      }, (0, CF.useLayoutEffect)((() => {
        if (!TF) return;
        null === iW.current && mW.current.restFixed(!1);
        const FF = () => {
          null === iW.current && mW.current.restFixed(!1)
        };
        window.addEventListener("resize", FF);
        const WF = bW.current;
        return () => {
          window.removeEventListener("resize", FF), WF.classList.remove("Resting", "Returning"), null === iW.current && (WF.style.display = "", WF.style.transform = "")
        }
      }), [TF, SF, aW]), (0, CF.useEffect)((() => {
        const FF = FF => {
            const WF = iW.current;
            null === WF || Array.from(FF.touches).some((FF => FF.identifier === WF)) || mW.current.release("touchend" === FF.type && Array.from(FF.changedTouches).some((FF => FF.identifier === WF)))
          },
          WF = () => {
            null !== iW.current && mW.current.release(!1)
          },
          SF = () => {
            "hidden" === document.visibilityState && WF()
          };
        return document.addEventListener("touchstart", FF, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", FF, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", FF, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", FF, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", WF), document.addEventListener("visibilitychange", SF), () => {
          document.removeEventListener("touchstart", FF, {
            capture: !0
          }), document.removeEventListener("touchmove", FF, {
            capture: !0
          }), document.removeEventListener("touchend", FF, {
            capture: !0
          }), document.removeEventListener("touchcancel", FF, {
            capture: !0
          }), window.removeEventListener("blur", WF), document.removeEventListener("visibilitychange", SF)
        }
      }), []), (0, CF.useEffect)((() => {
        const FF = hF.current,
          WF = FF => {
            FF.preventDefault()
          };
        return FF.addEventListener("touchstart", WF, {
          passive: !1
        }), () => {
          FF.removeEventListener("touchstart", WF)
        }
      }), []), (0, PF.jsx)("div", {
        ref: hF,
        className: "JoystickZone",
        onTouchStart: function(FF) {
          var WF;
          if (null !== iW.current) return;
          const CF = Array.from(FF.changedTouches).find((FF => {
            var WF;
            return null === (WF = hF.current) || void 0 === WF ? void 0 : WF.contains(FF.target)
          }));
          if (CF) {
            if (null === (WF = kW.current) || void 0 === WF || WF.startTouch(), iW.current = CF.identifier, "pinned" === SF) {
              const FF = bW.current.getBoundingClientRect();
              RF.current = {
                x: FF.left + FF.width / 2,
                y: FF.top + FF.height / 2
              }
            } else {
              const FF = TF ? NF() : null,
                WF = null !== FF && Math.hypot(CF.clientX - FF.x, CF.clientY - FF.y) <= 60;
              RF.current = WF ? FF : {
                x: CF.clientX,
                y: CF.clientY
              }, bW.current.classList.remove("Resting", "Returning"), bW.current.style.display = "block", DF(RF.current), uF && (rW.current = function(FF, WF, SF) {
                FF.style.display = "";
                const CF = FF.offsetWidth,
                  AF = FF.offsetHeight,
                  uF = Math.min(Math.max(WF.x - CF / 2, 8), window.innerWidth - 8 - CF),
                  hF = WF.y - SF - 32 - AF;
                return hF < 8 ? (FF.style.display = "none", null) : (FF.style.transform = `translate(${uF-(WF.x-SF)}px, ${hF-(WF.y-SF)}px)`, {
                  left: uF,
                  top: hF,
                  right: uF + CF,
                  bottom: hF + AF
                })
              }(QF.current, RF.current, uW), gW.current = !1)
            }
            YF(FF)
          }
        },
        onTouchMove: YF,
        children: (0, PF.jsxs)("div", {
          ref: bW,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === SF ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, PF.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), uF && (0, PF.jsxs)(PF.Fragment, {
            children: [(0, PF.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, PF.jsx)("circle", {
                ref: EF,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, PF.jsxs)("div", {
              ref: QF,
              className: "AutorunTarget",
              children: [(0, PF.jsx)(GF.e, {
                name: "lock"
              }), tW("settingsMenu:autoRun")]
            })]
          }), (0, PF.jsx)("div", {
            ref: dF,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var bS = SF(35110);

    function dW(FF, WF) {
      const SF = (0, CF.useRef)(null);
      return (0, CF.useLayoutEffect)((() => (jW.f.set(FF, SF.current, WF), () => {
        jW.f.set(FF, null)
      })), [FF, WF]), SF
    }
    const PW = "C",
      RW = "J",
      iS = "U",
      eW = "P",
      EW = "A",
      QW = "G",
      rS = "X",
      gS = (0, CF.forwardRef)((function(FF, WF) {
        let {
          slot: SF,
          canvasZone: CF = !1,
          lit: AF = !1,
          label: hF,
          className: bW,
          children: dF,
          ...RF
        } = FF;
        return (0, PF.jsx)("div", {
          ref: WF,
          className: uF()("TouchKeyHit", `TouchSlot${SF}`, bW, {
            CanvasZone: CF
          }),
          ...RF,
          children: (0, PF.jsxs)("div", {
            className: uF()("TouchKey", {
              Lit: AF,
              Labelled: void 0 !== hF
            }),
            children: [dF, void 0 !== hF && (0, PF.jsx)("span", {
              className: "TouchKeyLabel",
              children: hF
            })]
          })
        })
      }));

    function tS(FF, WF) {
      const SF = WF ? [rS] : [eW, rS];
      return FF.filter((FF => null !== FF)).slice(0, SF.length).map(((FF, WF) => {
        const AF = SF[WF];
        return (0, PF.jsx)(CF.Fragment, {
          children: FF.render(AF)
        }, `${FF.id}:${AF}`)
      }))
    }
    var TW = SF(7816),
      aS = SF(35116);
    class kS {
      constructor(FF) {
        this.zones = FF, this.followed = new Map, this.onStart = FF => {
          if (this.releaseMissing(FF.touches), FF.target instanceof HTMLCanvasElement)
            for (let WF = 0; WF < FF.changedTouches.length; WF++) {
              const {
                identifier: SF,
                clientX: CF,
                clientY: AF
              } = FF.changedTouches[WF];
              this.release(SF);
              const uF = this.zones.hitZone(CF, AF);
              if (!uF) continue;
              const hF = uF.element.firstElementChild;
              for (const FF of hF.getAnimations()) FF.cancel();
              const bW = {
                hit: uF.element,
                key: hF,
                x: uF.x,
                y: uF.y,
                reach: .6 * uF.radius
              };
              this.followed.set(SF, bW), (0, JF.c)(uF.element, !0), qS(bW, CF, AF)
            }
        }, this.onMove = FF => {
          this.releaseMissing(FF.touches);
          for (let WF = 0; WF < FF.changedTouches.length; WF++) {
            const {
              identifier: SF,
              clientX: CF,
              clientY: AF
            } = FF.changedTouches[WF], uF = this.followed.get(SF);
            uF && qS(uF, CF, AF)
          }
        }, this.onEnd = FF => {
          for (let WF = 0; WF < FF.changedTouches.length; WF++) this.release(FF.changedTouches[WF].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const FF = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, FF), document.addEventListener("touchmove", this.onMove, FF), document.addEventListener("touchend", this.onEnd, FF), document.addEventListener("touchcancel", this.onEnd, FF), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(FF) {
        for (const WF of [...this.followed.keys()])(0, aS.c)(FF, WF) || this.release(WF)
      }
      releaseAll() {
        for (const FF of [...this.followed.keys()]) this.release(FF)
      }
      release(FF) {
        const WF = this.followed.get(FF);
        if (!WF) return;
        this.followed.delete(FF);
        for (const AF of this.followed.values())
          if (AF.key === WF.key) return;
        (0, JF.c)(WF.hit, !1);
        const {
          key: SF
        } = WF, CF = SF.style.translate;
        SF.style.translate = "", CF && SF.animate({
          translate: [CF, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        })
      }
    }

    function qS(FF, WF, SF) {
      let {
        key: CF,
        x: AF,
        y: uF,
        reach: hF
      } = FF;
      const bW = WF - AF,
        dF = SF - uF,
        PF = Math.min(1, hF / (Math.hypot(bW, dF) || 1));
      CF.style.translate = `${bW*PF}px ${dF*PF}px`
    }
    const VW = new Set;

    function NW(FF) {
      const WF = new Set(Array.from(FF.touches, (FF => FF.identifier)));
      for (const SF of VW) {
        for (const FF of SF.ids) WF.has(FF) || SF.ids.delete(FF);
        if (0 === SF.ids.size) {
          VW.delete(SF);
          SF.pressesOnPointerDown && "touchstart" === FF.type && Array.from(FF.changedTouches).some((FF => FF.target instanceof Node && SF.element.contains(FF.target))) || SF.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const th of ["touchstart", "touchmove"]) window.addEventListener(th, NW, {
        capture: !0,
        passive: !0
      });

    function DW(FF) {
      let {
        pressesOnPointerDown: WF = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const SF = (0, CF.useRef)(FF);
      SF.current = FF;
      const AF = (0, CF.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: WF,
        release: () => {
          SF.current()
        }
      });
      (0, CF.useEffect)((() => {
        const FF = AF.current;
        return () => {
          VW.delete(FF), FF.ids.clear()
        }
      }), []);
      const uF = FF => {
        const WF = AF.current;
        for (const SF of Array.from(FF.changedTouches)) WF.ids.delete(SF.identifier);
        0 === WF.ids.size && VW.delete(WF)
      };
      return {
        onTouchStart: FF => {
          const WF = AF.current;
          WF.element = FF.currentTarget;
          for (const SF of Array.from(FF.changedTouches)) SF.target instanceof Node && FF.currentTarget.contains(SF.target) && WF.ids.add(SF.identifier);
          WF.ids.size > 0 && VW.add(WF)
        },
        onTouchEnd: uF,
        onTouchCancel: uF
      }
    }
    const LW = () => {
      const FF = (0, XF.n)(),
        WF = (0, DF.r)();
      return FF || WF
    };

    function mS(FF) {
      (0, jW.i)(FF.x, FF.y)
    }
    const OW = (0, CF.memo)((function() {
        const FF = LW(),
          {
            joystickMode: WF,
            touchSpeedCurve: SF,
            autorun: AF
          } = (0, VF.d)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, CF.useEffect)((() => ((0, vW.h)(UF.z.TouchControls, UF.z.TouchControls), () => {
          (0, vW.h)(UF.z.TouchControls, 0), (0, jW.i)(0, 0)
        })), []), (0, PF.jsx)("div", {
          className: uF()("TouchMovementWrapper", {
            Hidden: FF
          }),
          "data-camera-keeper": "",
          children: (0, PF.jsx)(hW, {
            onMove: mS,
            mode: WF,
            speedCurve: SF ? bS.e : void 0,
            autorun: AF
          })
        })
      })),
      xS = (0, CF.memo)((function() {
        const FF = LW(),
          {
            clientEscMenuOptions: WF
          } = (0, VF.d)(["clientEscMenuOptions"]),
          SF = (0, TW.l)(WF.touchActionButtons);
        return (0, CF.useEffect)((() => new kS(jW.f).start()), []), (0, PF.jsxs)("div", {
          className: uF()("TouchComponentsButtons", {
            Hidden: FF
          }),
          "data-camera-keeper": "",
          children: [(0, PF.jsx)(MW, {}), (0, PF.jsx)(KW, {
            hidden: FF,
            actionButtons: SF
          }), (0, PF.jsx)(YW, {})]
        })
      }));

    function ZW(FF, WF) {
      (0, CF.useEffect)((() => () => {
        WF.current && (WF.current = !1, (0, BF.v)(FF, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function oW(FF) {
      const WF = WF => SF => {
        (0, JF.c)(SF.currentTarget, WF), FF(WF, SF.nativeEvent)
      };
      return {
        onPointerDown: WF(!0),
        onPointerUp: WF(!1),
        onPointerCancel: WF(!1)
      }
    }

    function YW() {
      const FF = (0, tW.k)("canCrouch"),
        WF = (0, qW.e)("crouching"),
        SF = (0, CF.useRef)(!1);
      ZW(UF.v.Crouch, SF);
      const AF = (FF, WF) => {
          SF.current = FF, (0, BF.v)(UF.v.Crouch, FF, WF)
        },
        uF = (0, CF.useRef)(null),
        hF = () => {
          SF.current && (uF.current && (0, JF.c)(uF.current, !1), AF(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        bW = DW(hF);
      return (0, CF.useEffect)((() => {
        !1 === FF && hF()
      }), [FF]), !1 === FF ? null : (0, PF.jsx)(gS, {
        ref: uF,
        slot: PW,
        className: "CrouchKey",
        lit: WF,
        ...bW,
        ...oW(AF),
        children: (0, PF.jsx)(GF.e, {
          name: "arrow-down-to-line"
        })
      })
    }

    function MW() {
      const FF = (0, CF.useRef)(!1);
      ZW(UF.v.Jump, FF);
      const WF = WF => SF => {
          FF.current = WF, (0, JF.c)(SF.currentTarget, WF), (0, BF.v)(UF.v.Jump, WF, SF.nativeEvent)
        },
        SF = (0, CF.useRef)(null),
        AF = DW((() => {
          FF.current && (FF.current = !1, SF.current && (0, JF.c)(SF.current, !1), (0, BF.v)(UF.v.Jump, !1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        }));
      return (0, PF.jsx)(gS, {
        ref: SF,
        slot: RW,
        className: "JumpKey",
        onTouchStart: FF => {
          AF.onTouchStart(FF), WF(!0)(FF)
        },
        onTouchEnd: FF => {
          AF.onTouchEnd(FF), WF(!1)(FF)
        },
        onTouchCancel: FF => {
          AF.onTouchCancel(FF), WF(!1)(FF)
        },
        children: (0, PF.jsx)(GF.e, {
          name: "arrow-up-from-line"
        })
      })
    }
    const cS = [{
        icon: "arrows-rotate"
      }],
      GW = [{
        icon: "Arrow"
      }],
      zS = [{
        icon: "crosshairs"
      }],
      IW = [{
        icon: "swords"
      }],
      fW = [{
        icon: "hand-back-point-up"
      }],
      yS = [{
        icon: "Firecracker"
      }];

    function sW(FF, WF, SF, CF) {
      return {
        id: JSON.stringify(WF),
        render: AF => (0, PF.jsx)(wW, {
          code: FF,
          slot: AF,
          icon: WF,
          label: CF,
          hidden: SF
        })
      }
    }

    function nW(FF, WF) {
      return {
        id: "fly",
        render: SF => (0, PF.jsx)(HW, {
          slot: SF,
          flying: FF,
          label: WF
        })
      }
    }

    function HW(FF) {
      let {
        slot: WF,
        flying: SF,
        label: CF
      } = FF;
      return (0, PF.jsx)(gS, {
        slot: WF,
        className: "FlyKey",
        lit: SF,
        label: CF,
        ...oW(((FF, WF) => {
          (0, BF.v)(UF.v.Fly, FF, WF)
        })),
        children: (0, PF.jsx)(GF.e, {
          name: "feather-pointed"
        })
      })
    }

    function KW(FF) {
      var WF, SF;
      let {
        hidden: CF,
        actionButtons: AF
      } = FF;
      const {
        t: uF
      } = (0, OF.B)(), {
        gun: hF,
        aimable: bW,
        chargeName: dF
      } = (0, qW.e)("heldItemAim"), RF = (0, qW.e)("gliderBoostFuel"), {
        canFly: iW,
        flying: eF
      } = (0, qW.e)("flight"), EF = (0, tW.k)("touchscreenActionButton"), QF = hF ? cS : EF, rW = bW ? {
        icon: GW,
        label: uF("touchKeys:aim")
      } : null, gW = null !== dF ? {
        icon: [{
          icon: dF
        }]
      } : null, TF = null !== rW && void 0 !== rW ? rW : gW, aW = null !== (WF = null === (SF = hF ? rW : null !== gW && void 0 !== gW ? gW : rW) || void 0 === SF ? void 0 : SF.icon) && void 0 !== WF ? WF : fW, kW = [!AF && TF ? sW(jW.c.Action2, TF.icon, CF, TF.label) : null, hF ? sW(jW.c.Action3, zS, CF, uF("touchKeys:scope")) : null, iW ? nW(eF, uF("touchKeys:fly")) : null];
      return (0, PF.jsxs)(PF.Fragment, {
        children: [QF && (0, PF.jsx)(wW, {
          code: jW.c.Action1,
          slot: QW,
          icon: QF,
          label: hF ? uF("touchKeys:reload") : void 0,
          hidden: CF
        }, JSON.stringify(QF)), AF && (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)(wW, {
            code: jW.c.Attack,
            slot: EW,
            icon: IW,
            name: uF("touchKeys:attack"),
            hidden: CF
          }), (0, PF.jsx)(wW, {
            code: jW.c.Use,
            slot: iS,
            icon: aW,
            name: uF("touchKeys:use"),
            hidden: CF
          })]
        }), tS(kW, AF), RF > 0 && (0, PF.jsx)(wW, {
          code: jW.c.Boost,
          slot: rS,
          icon: yS,
          label: uF("touchKeys:boost", {
            fuel: RF > 99 ? "99+" : RF
          }),
          hidden: CF
        })]
      })
    }

    function wW(FF) {
      let {
        code: WF,
        slot: SF,
        icon: CF,
        label: AF,
        name: uF,
        hidden: hF
      } = FF;
      const bW = dW(WF, hF);
      return (0, PF.jsx)(gS, {
        ref: bW,
        slot: SF,
        className: "TouchActionKey",
        canvasZone: !0,
        label: AF,
        role: void 0 !== uF ? "img" : void 0,
        "aria-label": uF,
        children: (0, PF.jsx)(dF.d, {
          text: CF
        })
      })
    }
    var XW = SF(3448),
      UW = SF(2279),
      BW = SF(244);
    const jS = (0, CF.memo)((function() {
      (0, rW.e)();
      const FF = (0, CF.useRef)([]),
        WF = (0, UW.d)(),
        SF = (0, CF.useRef)(0),
        AF = (0, CF.useRef)(0),
        uF = (0, CF.useRef)([]),
        hF = (0, CF.useRef)(null);

      function RF(SF, CF, AF, uF) {
        const hF = (0, BW.c)(),
          bW = setTimeout((() => {
            FF.current = FF.current.filter((FF => FF.id !== hF)), WF()
          }), uF);
        eF.gameBridge.send("recordFlyingMiddleText", {
          content: SF,
          zp: CF,
          angle: AF,
          HJ: uF
        }), FF.current.push({
          id: hF,
          content: SF,
          zp: CF,
          HJ: uF,
          removeTimeout: bW,
          angle: AF
        }), WF()
      }
      return (0, qW.b)("shotDamageToShow", (FF => {
        let {
          damage: WF,
          wasCrit: SF,
          distance: CF
        } = FF;
        const AF = -Math.PI / 4 + Math.random() * Math.PI / 2;
        RF(SF ? [{
          str: WF.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [WF.toString()], CF, AF, 1e3)
      })), (0, bW.e)("flyingMiddleMessage", (FF => {
        let {
          content: WF,
          zp: CF,
          HJ: bW
        } = FF;
        uF.current.push({
          content: WF,
          zp: CF,
          HJ: bW
        });
        const dF = () => {
          const {
            content: FF,
            zp: WF,
            HJ: CF
          } = uF.current.shift(), hF = function(FF) {
            const WF = -Math.PI / 4,
              SF = Math.PI / 4,
              CF = SF - WF,
              AF = (1 + Math.sqrt(5)) / 2,
              uF = 2 * Math.PI / (AF * AF);
            let hF = FF + uF;
            for (; hF > SF;) hF -= CF;
            for (; hF < WF;) hF += CF;
            const bW = Math.PI / 6;
            if (Math.abs(hF - FF) < bW) {
              hF = FF + (Math.sign(hF - FF) || 1) * bW, hF > SF && (hF = FF - bW), hF < WF && (hF = FF + bW)
            }
            return hF
          }(AF.current);
          AF.current = hF, SF.current = Date.now(), RF(FF, WF, hF, CF)
        };
        if (!hF.current) {
          const FF = () => {
            uF.current.length > 0 && dF(), 0 === uF.current.length && (clearInterval(hF.current), hF.current = null)
          };
          hF.current = setInterval(FF, 200), SF.current + 200 < Date.now() && FF()
        }
        for (; uF.current.length > 4;) dF()
      })), (0, bW.e)("forceFlyingMiddleMessage", (FF => {
        let {
          content: WF,
          zp: SF,
          angle: CF,
          HJ: AF
        } = FF;
        RF(WF, SF, CF, AF)
      })), (0, CF.useEffect)((() => () => {
        clearInterval(hF.current), hF.current = null;
        for (const WF of FF.current) clearTimeout(WF.removeTimeout)
      }), []), (0, PF.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: FF.current.map((FF => {
          const {
            id: WF,
            content: SF,
            zp: CF,
            HJ: AF,
            angle: uF
          } = FF;
          return FF.pos || (FF.pos = function(FF, WF) {
            const SF = 50 / (FF ** .7 * .35);
            return {
              x: SF * Math.sin(WF),
              y: -SF * Math.cos(WF)
            }
          }(CF, uF)), (0, PF.jsx)(vS, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: AF,
            enterActiveStyle: {
              transform: `translate(${FF.pos.x}vw, ${FF.pos.y}vh)`,
              transition: `transform ${AF}ms ease-out`
            },
            children: (0, PF.jsx)("div", {
              children: (0, PF.jsx)(dF.d, {
                text: SF
              })
            })
          }, WF)
        }))
      })
    }));

    function vS(FF) {
      let {
        children: WF,
        className: SF,
        classNames: AF,
        timeout: uF,
        enterActiveStyle: hF
      } = FF;
      const [bW, dF] = (0, CF.useState)(!1), [RF, iW] = (0, CF.useState)(!1), eF = (0, CF.useRef)(null);
      return (0, CF.useEffect)((() => {
        dF(!0)
      }), []), (0, PF.jsx)(XW.b, {
        className: SF,
        classNames: AF || SF,
        in: bW,
        timeout: uF,
        nodeRef: eF,
        onEntering: () => {
          iW(!0)
        },
        children: (0, CF.cloneElement)(WF, {
          ref: eF,
          style: RF && hF || void 0
        })
      })
    }
    var JW = SF(35122);

    function pW() {
      const FF = (0, qW.e)("health");
      return (0, PF.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, PF.jsx)(JW.c, {
          placement: "statBars"
        }), (0, PF.jsx)(lW, {
          actualValue: FF.shield,
          maxValue: FF.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, PF.jsx)(lW, {
          actualValue: FF.health,
          maxValue: FF.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function lW(FF) {
      let {
        actualValue: WF,
        maxValue: SF,
        hideAtValue: CF,
        icon: AF,
        className: uF
      } = FF;
      return (0, rW.f)(), null === WF || null === SF || WF === CF || SF === CF ? null : (0, PF.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, PF.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, PF.jsx)("div", {
            className: `BottomScreenStatBar ${uF}`,
            style: {
              transform: `scaleX(${Math.max(WF/SF,0)})`,
              transformOrigin: "left center"
            }
          }), (0, PF.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, PF.jsx)(GF.e, {
              name: AF
            }), ` ${Math.ceil(WF)}/${SF}`]
          })]
        })
      })
    }
    var FS = SF(8210),
      WS = SF(3616),
      SS = SF(1392),
      CS = SF(2155),
      AS = SF(1266),
      uS = SF(1168),
      hS = SF(2610),
      bC = SF(2636),
      dS = SF(612),
      PS = SF(2649),
      RS = SF(132),
      iC = SF(8157),
      eS = SF(271);

    function ES(FF, WF) {
      let {
        shownName: SF,
        lifeformType: CF
      } = FF;
      return null !== SF ? SF : null !== CF ? WF(`lifeform:${(0,eS.xe)(CF)}`) : null
    }
    var QS = SF(2619),
      rC = SF(2627);
    const gC = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      tC = (0, CF.memo)((function() {
        var FF, WF;
        const SF = (0, rW.e)(),
          AF = (0, EF.useNavigatePreserveSearch)(),
          {
            t: hF
          } = (0, OF.B)(),
          {
            loadingOverlayVisible: dF
          } = (0, VF.d)(["loadingOverlayVisible"]),
          RF = (0, DF.r)(),
          [iW, QF] = (0, CF.useState)(!1),
          [gW, TF] = (0, CF.useState)(!0),
          [kW, NF] = (0, CF.useState)(null),
          LF = (0, UW.d)(),
          mW = (0, tW.k)("respawnButtonText"),
          xW = (0, tW.k)("usePlayAgainButton"),
          ZF = (0, tW.k)("useRespawnButton"),
          {
            gameNameWithVariation: oF
          } = (0, qW.e)("connectedGame"),
          YF = (0, CF.useRef)(aW.d.get("secsToRespawn")),
          MF = (0, CF.useRef)(eF.gameBridge.latest("localPlayerAlive")),
          cW = (0, CF.useRef)(aW.d.get("secsToRespawn")),
          zW = (0, CF.useRef)(aW.d.get("autoRespawn")),
          IF = (0, CF.useRef)(null),
          fF = (0, CF.useRef)(0),
          sF = (0, CF.useRef)(0),
          [nF, HF] = (0, CF.useState)(!1),
          KF = (0, CF.useRef)(null),
          wF = (0, CF.useRef)(null),
          XF = (0, CF.useRef)(null);
        (0, tW.h)("secsToRespawn", (FF => {
          console.log("Received new secsToRespawn with", FF, "and current canRespawn value of ", zW.current), cW.current = FF, vW()
        })), (0, tW.h)("autoRespawn", (FF => {
          console.log("Received autorespawn", FF, "current canRespawn value of ", YF.current), zW.current = FF, vW()
        }));
        const UF = FF => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", FF), FF || fF.current++, MF.current = FF, vW()
        };
        (0, qW.b)("localPlayerAliveSet", UF), (0, CF.useEffect)((() => {
          const FF = eF.gameBridge.latest("localPlayerAlive");
          FF === MF.current ? (console.log("Updating respawn component from initial mount"), vW()) : UF(FF)
        }), []), (0, CF.useEffect)((() => {
          if (iW) {
            HF(!1);
            const FF = setTimeout((() => {
              HF(!0)
            }), 600);
            return (0, iC.f)(), () => {
              clearTimeout(FF)
            }
          }
          return () => {}
        }), [iW]);
        (0, qW.b)("kill", (FF => {
          let {
            killer: WF,
            victim: SF,
            withItem: CF
          } = FF;
          if (!SF.local) return;
          const AF = ((FF, WF) => {
            if (FF.local) {
              const FF = gC[WF];
              return FF ? hF(FF) : null
            }
            const SF = ES(FF, hF);
            return SF ? hF("respawnPage:killedBy", {
              name: SF
            }) : null
          })(WF, CF);
          AF && NF({
            text: AF,
            deathCount: MF.current ? fF.current + 1 : fF.current
          })
        }));
        const BF = () => {
            iW && zW.current && MF.current && nF && QF(!1)
          },
          jW = iW && zW.current && MF.current && nF && !dF;
        (0, bW.e)("usedKeyboard", (() => {
          BF()
        })), (0, rC.b)("respawn", jW, BF);
        const vW = () => {
            TF(cW.current >= 3 || !zW.current), MF.current ? (clearInterval(IF.current), IF.current = null, zW.current ? LF() : QF(!1)) : (QF(!0), YF.current = cW.current, LF(), console.log("Running respawn stats updated", zW.current, YF.current), zW.current && YF.current <= 0 && JF(), clearInterval(IF.current), YF.current > 0 && (IF.current = setInterval((() => {
              YF.current = Math.max(YF.current - 1, 0), LF(), YF.current <= 0 && (clearInterval(IF.current), IF.current = null, aW.d.get("autoRespawn") && JF())
            }), 1e3)))
          },
          JF = () => {
            if (Date.now() - sF.current > 1e3) {
              const FF = () => {
                eF.gameBridge.send("respawn", null), sF.current = Date.now()
              };
              aW.d.get("autoRespawn") ? FF() : (0, uS.hb)((() => {
                FF()
              }), "video_respawn")
            }
          },
          pF = (0, CF.useMemo)((() => {
            var FF;
            return null === (FF = (0, dS.m)(oF)) || void 0 === FF ? void 0 : FF.otherGameLinksOnRespawnPage
          }), [oF]),
          lF = 0 === YF.current,
          FW = (null === kW || void 0 === kW ? void 0 : kW.deathCount) === fF.current ? kW.text : null,
          WW = iW && gW && !dF,
          SW = RF && jW && null !== (FF = null === (WF = (0, yW.g)()) || void 0 === WF ? void 0 : WF.getBoundButton("menuConfirm")) && void 0 !== FF ? FF : null,
          CW = FF => lF ? FF : hF("respawnPage:actionInSeconds", {
            action: FF,
            seconds: YF.current
          });
        return (0, PF.jsx)(FS.d, {
          showing: iW,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, PF.jsx)(hS.b, {
            show: iW,
            children: (0, PF.jsxs)(WS.b, {
              close: () => {
                QF(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: zW.current || dF ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, RS.l)() && (0, PF.jsx)(AS.c, {
                onClick: bC.c,
                children: hF("homePage:backToGames")
              }), (0, PF.jsxs)("div", {
                className: "RespawnContainer",
                onClick: BF,
                children: [(0, PF.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, PF.jsx)("div", {
                    ref: wF,
                    className: "RespawnSideSquareBannerDiv",
                    children: SF[0] > 925 && (0, PF.jsx)(CS.d, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: wF
                      },
                      showing: WW,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, PF.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, PF.jsxs)("div", {
                      className: uF()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: RF
                      }),
                      children: [zW.current && (0, PF.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, PF.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, PF.jsx)(GF.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), hF("respawnPage:youDied")]
                        }), (0, PF.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === SW && (MF.current ? hF("respawnPage:pressAnywhereToContinue") : lF ? hF("respawnPage:respawning") : CW(hF("general:respawn"))), null !== SW && (0, PF.jsx)(QS.d, {
                            text: hF("controller:screensPressToContinue", {
                              button: QS.f
                            }),
                            glyph: SW,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), FW && (0, PF.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: FW
                        })]
                      }), !zW.current && (0, PF.jsxs)(PF.Fragment, {
                        children: [(0, PF.jsxs)("div", {
                          className: uF()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !pF
                          }),
                          children: [xW && (0, PF.jsx)(AS.k, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, uS.hb)((() => {
                                (0, VF.c)("inGameReplay");
                                const FF = (0, SS.c)(oF);
                                AF(FF)
                              }), "video_start")
                            },
                            disabled: !lF || !nF,
                            touchPressOn: "pointerup",
                            children: CW(hF("respawnPage:playAgain"))
                          }), ZF && (0, PF.jsx)(AS.e, {
                            className: "RespawnPageButton",
                            onClick: JF,
                            padDefaultFocus: !xW,
                            padBack: "sessionBasedGame:stayInLobby" === mW,
                            disabled: !lF || !nF,
                            touchPressOn: "pointerup",
                            children: CW(hF(mW))
                          }), !(0, RS.l)() && (0, PF.jsx)(AS.E, {
                            className: "RespawnPageButton",
                            onClick: bC.c,
                            disabled: !lF || !nF,
                            touchPressOn: "pointerup",
                            children: CW(hF("respawnPage:exitGame"))
                          })]
                        }), pF && (0, PF.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, PF.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: hF("respawnPage:orTry")
                          }), (0, PF.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: pF.map((FF => (0, PF.jsx)(PS.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: FF
                              },
                              disabled: !lF || !nF,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, VF.c)("inGameReplay");
                                const WF = (0, SS.c)(FF);
                                AF(WF)
                              }
                            }, FF)))
                          })]
                        })]
                      })]
                    })
                  }), (0, PF.jsx)("div", {
                    ref: XF,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, PF.jsx)("div", {
                  ref: KF,
                  className: "RespawnBottom",
                  children: (0, PF.jsx)(CS.d, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: KF
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
    var TS = SF(35138);
    const aC = [{
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
      kC = [{
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
      qC = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      VS = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      NS = (0, CF.memo)((function() {
        const FF = (0, CF.useRef)(null);

        function WF(WF) {
          let {
            MJ: SF,
            screenPos: CF
          } = WF;
          const AF = FF.current;
          AF.getAnimations().forEach((FF => {
            FF.cancel()
          })), AF.classList.remove("HitmarkerCrit"), CF ? (AF.style.left = `${CF.x}%`, AF.style.top = `${CF.y}%`) : (AF.style.left = "50%", AF.style.top = "50%"), AF.style.rotate = 16 * (Math.random() - .5) + "deg", SF && AF.classList.add("HitmarkerCrit");
          AF.animate(SF ? kC : aC, SF ? VS : qC).onfinish = () => {
            AF.classList.remove("HitmarkerCrit")
          }
        }
        return (0, bW.e)("localGunHitmarker", (FF => {
          let {
            MJ: SF
          } = FF;
          WF({
            MJ: SF
          })
        })), (0, bW.e)("yourAttackHit", (FF => {
          let {
            MJ: SF,
            screenPos: CF
          } = FF;
          WF({
            MJ: SF,
            screenPos: VF.b.get("isTouchScreen") ? CF : void 0
          })
        })), (0, bW.e)("sendHitmarker", (FF => {
          let {
            MJ: SF,
            screenPos: CF
          } = FF;
          WF({
            MJ: SF,
            screenPos: CF
          })
        })), (0, PF.jsxs)("div", {
          ref: FF,
          className: "Hitmarker",
          children: [(0, PF.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, PF.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, PF.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, PF.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function DS() {
      const FF = (0, CF.useRef)(!0);
      return (0, bW.e)("localBlockMined", (() => {
        FW.f.play("blockMined")
      })), (0, bW.e)("yourAttackHit", (() => {
        FW.f.play("hitLanded")
      })), (0, bW.e)("localGunHitmarker", (() => {
        FW.f.play("hitLanded")
      })), (0, bW.e)("damagedByOtherPlayer", (() => {
        FW.f.play("damageTaken")
      })), (0, qW.b)("localPlayerAliveSet", (WF => {
        !WF && FF.current && FW.f.play("death"), FF.current = WF
      })), null
    }
    var LS = SF(1563),
      mC = SF(35149),
      OS = SF.n(mC),
      xC = SF(1656),
      ZS = SF(1644),
      oS = SF(2477),
      YS = SF(35203);
    const MS = eS.je ? 7e7 : 7e3,
      cC = OS()("#ffffff").alpha(.5).string();

    function GS(FF) {
      const WF = (0, oS.b)(FF);
      return void 0 !== WF && "Gun" === (0, YS.itemTypeOf)(WF)
    }

    function zC(FF) {
      if (!FF) return console.error(`Killfeed colour was ${FF}`), cC;
      try {
        return OS()(FF).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${FF} is not a colour`), cC
      }
    }
    const IS = (0, CF.memo)((function() {
      const {
        t: FF
      } = (0, OF.B)(), WF = (0, CF.useRef)([]), SF = (0, UW.d)();
      return (0, qW.b)("kill", (function(CF) {
        var AF, uF;
        let {
          killer: hF,
          victim: bW,
          withItem: dF,
          killstreak: PF
        } = CF;
        const RF = WF.current;
        if (RF.length >= 3) {
          const FF = RF.shift();
          clearTimeout(FF.timeout)
        }
        const iW = eF.gameBridge.latest("hiddenPlayerNames"),
          EF = {
            deadName: ES(bW, FF),
            killerName: ES(hF, FF),
            isFriend: {
              killer: (0, xC.f)(hF.realName, iW),
              dead: (0, xC.f)(bW.realName, iW)
            },
            withItem: dF,
            wasHeadshot: !1,
            killstreak: PF,
            timeout: setTimeout((() => {
              RF.shift(), SF()
            }), MS),
            reactId: `${null!==(AF=hF.id)&&void 0!==AF?AF:hF.shownName}|${null!==(uF=bW.id)&&void 0!==uF?uF:bW.shownName}|${Date.now()}`,
            killerBackground: zC(hF.colour),
            deadBackground: zC(bW.colour)
          };
        RF.push(EF), SF()
      })), (0, CF.useEffect)((() => {
        const FF = WF.current;
        return () => {
          for (; FF.length > 0;) {
            const {
              timeout: WF
            } = FF.pop();
            clearTimeout(WF)
          }
        }
      }), []), (0, PF.jsx)("div", {
        className: "Killfeed",
        children: WF.current.map((FF => {
          let {
            deadName: WF,
            killerName: SF,
            withItem: CF,
            wasHeadshot: AF,
            killstreak: uF,
            killerBackground: hF,
            deadBackground: bW,
            reactId: dF,
            isFriend: RF
          } = FF;
          return (0, PF.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${hF} calc(100% - 10rem), ${bW} 100%)`
            },
            children: [uF >= 2 ? (0, PF.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, eS.O)(uF)
            }) : null, (0, PF.jsx)("div", {
              className: "KillfeedKillerName",
              children: SF
            }), RF.killer && (0, PF.jsx)(ZS.b, {}), (0, PF.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: GS(CF) ? "7.5vmin" : "5vmin"
              },
              children: (0, PF.jsx)(LS.b, {
                itemName: CF,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), AF ? (0, PF.jsx)(GF.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, PF.jsx)("div", {
              className: "KillfeedDeadName",
              children: WF
            }), RF.dead && (0, PF.jsx)(ZS.b, {})]
          }, dF)
        }))
      })
    }));
    var fS = SF(35206),
      yC = SF(35213),
      sS = SF.n(yC),
      nS = SF(35052),
      HS = SF(35221),
      KS = SF(1153);
    const wS = {},
      XS = (0, CF.memo)((function() {
        const FF = (0, CF.useRef)({}),
          [, WF] = (0, CF.useReducer)((FF => FF + 1), 0);
        (0, bW.e)("setDirectionArrow", (SF => {
          let {
            id: CF,
            position: AF,
            style: uF,
            text: hF,
            o3: bW
          } = SF;
          const dF = FF.current,
            PF = uF || wS,
            RF = hF,
            iW = dF[CF];
          if (!iW) return dF[CF] = {
            position: AF,
            style: PF,
            text: RF,
            shouldShowDistance: bW,
            tCF: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void WF();
          const eF = !sS()(iW.style, PF) || !sS()(iW.text, RF) || iW.shouldShowDistance !== bW;
          iW.position = AF, iW.style = PF, iW.text = RF, iW.shouldShowDistance = bW, eF && WF()
        })), (0, bW.e)("clearDirectionArrow", (SF => {
          let {
            id: CF
          } = SF;
          const AF = FF.current;
          if (null === CF)
            for (const FF in AF) delete AF[FF];
          else delete AF[CF];
          WF()
        })), (0, CF.useEffect)((() => {
          const WF = FF.current,
            SF = (0, KS.d)((() => {
              ! function(FF) {
                const WF = eF.gameBridge.lookup("localPos", null),
                  SF = nS.b - US,
                  CF = (0, nS.j)() - US;
                for (const AF in FF) {
                  const uF = FF[AF];
                  if (!uF.tCF) continue;
                  const hF = eF.gameBridge.lookup("screenPos", uF.position),
                    bW = hF.x - 50,
                    dF = hF.y - 50;
                  hF.x === uF.lastScreenX && hF.y === uF.lastScreenY || (uF.lastScreenX = hF.x, uF.lastScreenY = hF.y, uF.tCF.style.translate = `${hF.x}vw ${hF.y}vh`, uF.chevronElement && (uF.chevronElement.style.rotate = `${eS.c.fastATan2(dF,bW)}rad`));
                  const PF = Math.abs(bW) < SF && Math.abs(dF) < CF;
                  if (PF !== uF.onScreen && (uF.onScreen = PF, uF.tCF.classList.toggle("DirectionArrowOnScreen", PF)), uF.shouldShowDistance && uF.distanceElement) {
                    const FF = uF.position[0] - WF[0],
                      SF = uF.position[1] - WF[1],
                      CF = uF.position[2] - WF[2],
                      AF = Math.round(Math.sqrt(FF * FF + SF * SF + CF * CF));
                    (-1 === uF.lastRenderedDist || (0, HS.c)(AF, uF.lastRenderedDist, uF.lastDistUpdateTime)) && (uF.distanceElement.textContent = `${AF}m`, uF.lastRenderedDist = AF, uF.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(WF)
            }));
          return () => {
            SF();
            for (const FF in WF) delete WF[FF]
          }
        }), []);
        const SF = FF.current;
        return (0, PF.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(SF).map((FF => {
            var WF;
            let [CF, AF] = FF;
            const uF = null !== (WF = (0, gW.Yb)(AF.style)) && void 0 !== WF ? WF : "#ffffff";
            return (0, PF.jsxs)("div", {
              ref: FF => {
                SF[CF] && (SF[CF].tCF = FF)
              },
              className: "DirectionArrow",
              style: {
                fontSize: AF.style.fontSize,
                opacity: AF.style.opacity
              },
              children: [(0, PF.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: FF => {
                  SF[CF] && (SF[CF].chevronElement = FF)
                },
                children: [(0, PF.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, PF.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, PF.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, PF.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, PF.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: uF
                    }
                  }), (0, PF.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: uF
                    }
                  })]
                })]
              }), (0, PF.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: uF,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${uF}`
                }
              }), AF.text && (0, PF.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: uF,
                  fontWeight: AF.style.fontWeight,
                  fontStyle: AF.style.fontStyle
                },
                children: (0, PF.jsx)(dF.d, {
                  text: AF.text
                })
              }), AF.shouldShowDistance && (0, PF.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: FF => {
                  SF[CF] && (SF[CF].distanceElement = FF)
                },
                style: {
                  color: uF,
                  fontWeight: AF.style.fontWeight,
                  fontStyle: AF.style.fontStyle
                }
              })]
            }, CF)
          }))
        })
      })),
      US = .5;
    const BS = (0, CF.memo)((function(FF) {
        let {
          isTouchScreen: WF
        } = FF;
        return (0, PF.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, PF.jsx)(pS, {}), WF && (0, PF.jsx)(xS, {})]
        })
      })),
      jC = {
        readyForNext: 0,
        running: 1
      },
      vC = 50;

    function JS(FF) {
      console.assert(FF.state.current === jC.readyForNext);
      const WF = FF.queue.current,
        SF = FF.foreground.current;
      if (WF.length > 0 && SF) {
        const {
          toFraction: CF,
          toDuration: AF
        } = WF.shift();
        FF.state.current = jC.running, SF.style.transition = `transform ${Math.max(AF-vC,0)}ms linear`, SF.classList.remove("Complete"), FF.timeout.current = setTimeout((() => {
          SF.style.transform = `scaleX(${CF})`, FF.timeout.current = setTimeout((() => {
            1 === CF && SF.classList.add("Complete"), FF.state.current = jC.readyForNext, JS(FF)
          }), Math.max(AF - vC, 0))
        }), vC)
      }
    }

    function pS() {
      const FF = (0, CF.useRef)([]),
        WF = (0, CF.useRef)(jC.readyForNext),
        SF = (0, CF.useRef)(void 0),
        AF = (0, CF.useRef)(null),
        uF = (0, CF.useRef)({
          queue: FF,
          state: WF,
          timeout: SF,
          foreground: AF
        }),
        hF = (0, tW.k)("showProgressBar");
      if ((0, CF.useLayoutEffect)((() => (hF && WF.current === jC.readyForNext && JS(uF.current), () => {
          WF.current = jC.readyForNext, clearTimeout(SF.current), hF && (FF.current.length = 0)
        })), [hF]), (0, bW.e)("progressBarUpdate", (SF => {
          let {
            toFraction: CF,
            toDuration: AF
          } = SF;
          FF.current.push({
            toFraction: CF,
            toDuration: AF
          }), WF.current === jC.readyForNext && JS(uF.current)
        })), !hF) return null;
      return (0, PF.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, PF.jsx)("div", {
          className: "ProgressBarForeground",
          ref: AF,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var lS = SF(2868),
      FC = SF(2862),
      WC = SF(1548);
    const SC = (0, CF.memo)((function(FF) {
        let {
          durationMs: WF,
          endsAtMs: SF
        } = FF;
        const [, AF] = (0, CF.useReducer)((FF => FF + 1), 0), uF = null === SF ? WF : Math.max(SF - Date.now(), 0);
        return (0, CF.useEffect)((() => {
          if (null === SF || uF <= 0) return;
          const FF = setTimeout(AF, uF - 1e3 * (Math.ceil(uF / 1e3) - 1));
          return () => {
            clearTimeout(FF)
          }
        })), (0, PF.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, eS.hb)(uF)
        })
      })),
      CC = (0, CF.memo)((function() {
        const FF = (0, qW.e)("localEffects");
        return (0, PF.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(FF).map((FF => {
            let [WF, {
              icon: SF,
              displayName: CF,
              durationMs: AF,
              endsAtMs: uF,
              level: hF
            }] = FF;
            return (0, PF.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, PF.jsx)(WC.c, {
                icon: SF,
                className: "EffectInfoIcon"
              }), (0, PF.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== AF ? "0" : "1rem"
                },
                children: [(0, PF.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, PF.jsx)(dF.d, {
                    text: null !== CF && void 0 !== CF ? CF : WF,
                    className: "EffectInfoName SmallTextBold"
                  }), hF > 1 && (0, PF.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, eS.O)(hF)
                  })]
                }), null !== AF && (0, PF.jsx)(SC, {
                  durationMs: AF,
                  endsAtMs: uF
                })]
              })]
            }, WF)
          }))
        })
      }));
    var AC = SF(35226),
      uC = SF(35364),
      hC = SF(161),
      bA = SF(1189),
      dC = SF(2174);

    function PC(FF, WF) {
      (0, CF.useLayoutEffect)((() => {
        let WF, SF;
        const CF = requestAnimationFrame((() => {
          SF = setTimeout((() => {
            SF = void 0;
            const CF = FF();
            WF = "function" === typeof CF ? CF : void 0
          }), 0)
        }));
        return () => {
          var FF;
          cancelAnimationFrame(CF), clearTimeout(SF), null === (FF = WF) || void 0 === FF || FF()
        }
      }), WF)
    }

    function RC(FF) {
      return 5 * (FF ? 4 : 3)
    }

    function iA(FF, WF, SF, CF, AF) {
      const uF = FF.getContext("2d");
      if (!uF) return null;
      const hF = WF.fontFamily,
        bW = WF.fontWeight;
      return FF.width = SF, FF.height = CF, uF.fillStyle = WF.color, uF.textAlign = "center", uF.textBaseline = "middle", uF.font = `${bW} ${AF}px ${hF}`, uF
    }
    const eC = (0, CF.memo)((function(FF) {
      let {
        show: WF
      } = FF;
      const SF = (0, CF.useRef)(null),
        AF = (0, CF.useRef)(null),
        uF = (0, CF.useRef)(null);
      return (0, CF.useEffect)((() => {
        let FF = 0,
          WF = 0,
          SF = 0,
          CF = 0;
        const hF = (0, KS.d)((() => {
          var hF;
          FF++, WF++;
          const bW = performance.now();
          if (bW - SF < 1e3) return;
          const dF = Math.round(FF / (bW - SF) * 1e3);
          if (AF.current = dF, null === (hF = uF.current) || void 0 === hF || hF.call(uF, dF), FF = 0, SF = bW, dF < 55) {
            var PF, RF;
            CF += 1;
            const FF = kW.h.getItem("decreaseLoadDistPromptDeniedCount"),
              [WF, SF] = aW.d.get("minChunkAddDist");
            if (CF >= 15 && function(FF, WF) {
                const SF = eF.gameBridge.lookup("lD", null);
                return null !== SF && (SF.horizontal > FF || SF.vertical > WF)
              }(WF, SF) && (null !== (PF = kW.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== PF ? PF : 0) + 432e5 < Date.now() && (null !== (RF = kW.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== RF ? RF : 0) < 3) {
              kW.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              bA.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((CF => {
                CF ? (eF.gameBridge.send("setChunkAddDistance", {
                  horizontal: WF,
                  vertical: SF
                }), kW.h.setItem("chunkHorizAddDist", WF), kW.h.setItem("chunkVertAddDist", SF), TF.j.Uu("updatedChunkLoadDist"), kW.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : kW.h.setItem("decreaseLoadDistPromptDeniedCount", FF + 1)
              }))
            }
          } else CF = 0
        }));
        let bW = performance.now();
        WF = 0;
        let dF = null,
          PF = !document.hidden;

        function RF() {
          const FF = performance.now() - bW,
            SF = 1e3 * WF / FF;
          PF && (null === dF && (dF = SF), dC.c.setFps(SF, dF)), WF = 0, bW = performance.now()
        }
        let iW = setInterval(RF, 15e3);

        function EF() {
          const FF = PF;
          PF = !document.hidden, !FF && PF && (WF = 0, bW = performance.now(), clearInterval(iW), iW = setInterval(RF, 15e3))
        }
        return document.addEventListener("visibilitychange", EF), () => {
          hF(), document.removeEventListener("visibilitychange", EF), clearInterval(iW)
        }
      }), []), PC((() => {
        var FF;
        if (!WF || uF.current) return;
        const CF = SF.current,
          hF = window.getComputedStyle(CF.parentElement),
          bW = null !== (FF = window.devicePixelRatio) && void 0 !== FF ? FF : 1,
          dF = parseFloat(hF.fontSize) * bW,
          PF = Math.round(3 * dF),
          RF = Math.round(dF),
          iW = iA(CF, hF, PF, RF, dF);
        if (!iW) return;
        const eF = FF => {
          iW.clearRect(0, 0, CF.width, CF.height), iW.fillText(FF.toString(), CF.width / 2, CF.height / 2)
        };
        uF.current = eF, null !== AF.current && eF(AF.current)
      }), [WF]), (0, PF.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: WF ? "flex" : "none"
        },
        children: [(0, PF.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, PF.jsx)("canvas", {
          className: "FpsCanvas",
          ref: SF,
          width: 48,
          height: 16
        })]
      })
    }));

    function EC(FF) {
      return Math.sign(FF) * Math.round(100 * Math.abs(FF))
    }

    function QC(FF) {
      let {
        getCoordinates: WF,
        showChunkCoords: SF
      } = FF;
      const AF = (0, CF.useRef)(null);
      return PC((() => {
        var FF;
        const CF = AF.current,
          uF = window.getComputedStyle(CF.parentElement),
          hF = null !== (FF = window.devicePixelRatio) && void 0 !== FF ? FF : 1,
          bW = parseFloat(uF.fontSize) * hF,
          dF = Math.round(bW * RC(SF)),
          PF = Math.round(bW),
          RF = iA(CF, uF, dF, PF, bW);
        if (!RF) return;
        let iW = !0,
          EF = 0,
          QF = 0,
          rW = 0,
          gW = 0,
          tW = 0,
          TF = 0;
        const aW = () => {
          iW = !0
        };
        document.fonts.load(RF.font).then(aW, aW);
        const kW = () => {
          iA(CF, uF, dF, PF, bW), aW()
        };
        CF.addEventListener("contextrestored", kW);
        const qW = (0, KS.k)((() => {
          var FF, AF, uF, hF, dF, PF;
          const [aW, kW, qW] = WF(), VF = EC(aW), NF = EC(kW), DF = EC(qW);
          let LF = null;
          if (SF) {
            const FF = eF.gameBridge.lookup("localPos", null);
            LF = (0, pF.kb)(FF[0], FF[1], FF[2])
          }
          const mW = null !== (FF = null === (AF = LF) || void 0 === AF ? void 0 : AF[0]) && void 0 !== FF ? FF : 0,
            OF = null !== (uF = null === (hF = LF) || void 0 === hF ? void 0 : hF[1]) && void 0 !== uF ? uF : 0,
            xW = null !== (dF = null === (PF = LF) || void 0 === PF ? void 0 : PF[2]) && void 0 !== dF ? dF : 0;
          if (!iW && VF === EF && NF === QF && DF === rW && mW === gW && OF === tW && xW === TF) return;
          iW = !1, EF = VF, QF = NF, rW = DF, gW = mW, tW = OF, TF = xW;
          const ZF = [(VF / 100).toFixed(2), (NF / 100).toFixed(2), (DF / 100).toFixed(2)];
          LF && ZF.unshift(`${mW} ${OF} ${xW}`), RF.clearRect(0, 0, CF.width, CF.height);
          const oF = CF.height / 2;
          for (let WF = 0; WF < ZF.length; WF++) RF.fillText(ZF[WF], 5 * bW * (WF + .5), oF)
        }));
        return () => {
          qW(), CF.removeEventListener("contextrestored", kW)
        }
      }), [WF, SF]), (0, PF.jsx)("div", {
        className: "CoordinateUI",
        children: (0, PF.jsx)("canvas", {
          ref: AF,
          className: "CoordinateCanvas",
          width: 16 * RC(SF),
          height: 16
        })
      })
    }
    const rA = (0, CF.memo)((function() {
        const FF = (0, CF.useCallback)((() => {
          const FF = eF.gameBridge.lookup("localPos", null);
          return [FF[0], FF[1], FF[2]]
        }), []);
        return (0, PF.jsx)(QC, {
          getCoordinates: FF,
          showChunkCoords: !1
        })
      })),
      gA = (0, CF.memo)((function() {
        const FF = (0, CF.useCallback)((() => {
          const FF = eF.gameBridge.lookup("localPos", null),
            WF = hC.h.MC;
          let SF = FF[0] % WF,
            CF = FF[1] % WF,
            AF = FF[2] % WF;
          return SF < 0 && (SF += WF), CF < 0 && (CF += WF), AF < 0 && (AF += WF), [SF, CF, AF]
        }), []);
        return (0, PF.jsx)(QC, {
          getCoordinates: FF,
          showChunkCoords: !0
        })
      }));
    var tA = SF(1670),
      TC = SF(1186),
      aA = SF(1336),
      kA = SF(874),
      qA = SF(1085),
      VC = SF(89),
      NC = SF(35243),
      DC = SF(1273),
      LC = SF(2344);
    const mA = (0, CF.memo)((function() {
      const FF = (0, tW.k)("auraPerLevel"),
        WF = (0, tW.k)("maxAuraLevel"),
        [SF, AF] = (0, CF.useState)((() => {
          var FF;
          return null !== (FF = eF.gameBridge.latest("aura")) && void 0 !== FF ? FF : void 0
        })),
        [uF, hF] = (0, CF.useState)((() => aW(SF))),
        [bW, dF] = (0, CF.useReducer)((FF => FF + 1), 0),
        RF = (0, CF.useRef)(null),
        iW = (0, CF.useRef)([]),
        EF = (0, CF.useRef)({
          width: 0,
          level: 0
        }),
        QF = (0, CF.useRef)(null),
        gW = (0, CF.useRef)(null);

      function TF() {
        if (null !== QF.current) return;
        if (0 === iW.current.length) return;
        const {
          width: FF,
          level: WF
        } = iW.current.shift();
        let SF;
        if (WF !== EF.current.level && WF > EF.current.level !== FF > EF.current.width) {
          const CF = WF > EF.current.level;
          SF = CF ? FF : 100 - FF, RF.current.style.transition = "none", RF.current.style.width = CF ? "0%" : "100%", RF.current.offsetWidth
        } else SF = Math.abs(FF - EF.current.width);
        const CF = 100 * SF / 20;
        RF.current.style.transition = `width ${CF}ms linear`, hF(FF), EF.current = {
          width: FF,
          level: WF
        }, iW.current.length > 0 && (QF.current = setTimeout((() => {
          QF.current = null, TF()
        }), CF))
      }

      function aW(SF) {
        return Math.floor(SF / FF) === WF ? 100 : SF % FF / FF * 100
      }
      return (0, CF.useEffect)((() => () => {
        clearTimeout(QF.current), clearTimeout(gW.current), QF.current = null, gW.current = null
      }), []), (0, qW.b)("aura", (WF => {
        if (gW.current && clearTimeout(gW.current), null === WF) return clearTimeout(QF.current), gW.current = null, QF.current = null, iW.current = [], EF.current = {
          width: 0,
          level: 0
        }, AF(void 0), void hF(0);
        gW.current = setTimeout((() => {
          const CF = Math.floor(SF / FF),
            uF = Math.floor(WF / FF),
            hF = aW(WF);
          WF > SF && NC.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), uF > CF ? (uF % 5 === 0 && NC.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), dF(), iW.current.push({
            width: 100,
            level: CF
          })) : uF < CF && iW.current.push({
            width: 0,
            level: CF
          }), WF === SF && uF === CF || iW.current.push({
            width: hF,
            level: uF
          }), AF(WF), TF()
        }), 50)
      })), (0, rW.f)(), 0 === WF ? null : (0, PF.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, PF.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, PF.jsx)(DC.e, {
            showSignal: bW,
            particleElement: (0, PF.jsx)("img", {
              src: (0, LC.h)("glint"),
              alt: ""
            })
          }), (0, PF.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, LC.h)("glint"),
            alt: "aura"
          }), (0, PF.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== SF && void 0 !== SF ? SF : 0) / FF)
          })]
        }), (0, PF.jsx)("div", {
          className: "AuraBar",
          children: (0, PF.jsx)("div", {
            ref: RF,
            className: "AuraBarBackground",
            style: {
              width: `${uF}%`
            }
          })
        })]
      })
    }));
    var OC = SF(1999);

    function xA(FF) {
      FF.timed && (FF.endedAnimation = FF.timed.animation, FF.timed = null)
    }
    const ZC = (0, CF.memo)((function() {
      const FF = (0, CF.useRef)(null),
        WF = (0, CF.useRef)(null),
        SF = (0, CF.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, bW.e)("middleScreenBarInitiate", (FF => {
        var CF;
        let {
          duration: AF,
          K8: uF,
          horizBarRemOffset: hF
        } = FF;
        const bW = SF.current;
        xA(bW);
        const dF = WF.current;
        if (!(AF >= 0) || !dF) return;
        null === (CF = bW.endedAnimation) || void 0 === CF || CF.cancel(), bW.endedAnimation = null;
        const PF = dF.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: AF,
          fill: "forwards"
        });
        bW.timed = {
          K8: uF,
          horizBarRemOffset: hF,
          animation: PF
        }
      })), (0, bW.e)("middleScreenBarRemove", (() => {
        xA(SF.current)
      })), (0, CF.useEffect)((() => {
        const CF = SF.current;
        let AF = Number.NaN,
          uF = Number.NaN,
          hF = Number.NaN;
        return (0, KS.c)((() => {
          var SF, bW, dF, PF;
          const RF = FF.current,
            iW = WF.current;
          if (!RF || !iW) return;
          null !== (SF = CF.timed) && void 0 !== SF && SF.K8 && "finished" === CF.timed.animation.playState && xA(CF), null === (bW = CF.endedAnimation) || void 0 === bW || bW.cancel(), CF.endedAnimation = null;
          let EF = CF.timed ? 1 : 0;
          if (!CF.timed) {
            const FF = eF.gameBridge.lookup("momentumFrac", null);
            EF = FF > 0 ? 1 : 0, FF !== hF && (hF = FF, iW.style.transform = `scaleX(${FF})`)
          }
          const QF = null !== (dF = null === (PF = CF.timed) || void 0 === PF ? void 0 : PF.horizBarRemOffset) && void 0 !== dF ? dF : 0;
          QF === AF && EF === uF || (AF = QF, uF = EF, RF.style.transform = `translateX(calc(-50% + ${QF}rem)) scaleX(${EF})`)
        }))
      }), []), (0, PF.jsx)("div", {
        className: "MiddleScreenBar",
        ref: FF,
        children: (0, PF.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: WF
        })
      })
    }));
    var oC = SF(3690),
      YC = SF(3694);

    function MC() {
      const {
        t: FF
      } = (0, OF.B)(), WF = (0, bW.i)("serverUpdating", null), SF = (0, YC.c)(250, null !== WF);
      return null === WF || SF - WF > 3e4 ? null : (0, PF.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, PF.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: FF("updateWaiting:updatingIn", {
            countdown: (0, oC.q)(WF - SF)
          })
        }), (0, PF.jsx)("div", {
          children: FF("updateWaiting:bringYouBack")
        })]
      })
    }
    var cA = SF(35389),
      GC = SF(1621);
    const zA = [{
        translationKey: "general:interact"
      }],
      IC = (0, CF.memo)((function() {
        const FF = (0, tW.k)("crosshairText"),
          {
            interactPrompt: WF,
            blockText: SF,
            neededTool: AF
          } = (0, qW.e)("crosshairTarget"),
          {
            isTouchScreen: uF
          } = (0, VF.d)(["isTouchScreen"]),
          hF = (0, DF.r)(),
          RF = (0, mW.c)("alt-fire");
        (0, CF.useEffect)((() => {
          eF.gameBridge.send("setCrosshairInteractPrompt", !uF || hF ? "key" : (0, TW.m)() ? "touch" : "off")
        }), [uF, hF]);
        const [iW, EF] = (0, CF.useReducer)((FF => FF + 1), 0);
        (0, bW.e)("customBindingsChanged", EF);
        var QF;
        if (null !== WF && (hF && null !== RF || !uF && null !== (0, GC.s)("alt-fire"))) return (0, PF.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, PF.jsx)(NF.d, {
            noaAction: "alt-fire"
          }), (0, PF.jsx)(dF.d, {
            text: null !== (QF = WF.label) && void 0 !== QF ? QF : zA
          })]
        });
        let rW = null;
        return null !== SF ? rW = SF : null !== FF && "" !== FF ? rW = FF : null !== AF && (rW = [{
          icon: AF,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), rW ? (0, PF.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, PF.jsx)(dF.d, {
            text: rW
          })
        }) : null
      }));
    var fC = SF(2004);
    const yA = (0, CF.memo)((function() {
      var FF;
      const {
        interactPrompt: WF
      } = (0, qW.e)("crosshairTarget"), {
        openInGameMenuName: SF,
        openEverythingMenuName: CF
      } = (0, VF.d)(["openInGameMenuName", "openEverythingMenuName"]), AF = (0, bW.i)("aimingOverlay", "none"), uF = (0, XF.n)(), hF = (0, fC.b)();
      return null === WF || null !== SF || null !== CF || "sniper" === AF || uF || hF ? null : (0, PF.jsx)(sC, {
        label: null !== (FF = WF.label) && void 0 !== FF ? FF : zA
      })
    }));

    function sC(FF) {
      let {
        label: WF
      } = FF;
      const SF = dW(jW.c.Interact, !1);
      return (0, PF.jsx)("div", {
        ref: SF,
        className: "TouchInteractHit",
        children: (0, PF.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, PF.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, PF.jsx)(GF.e, {
              name: "hand-back-point-up"
            })
          }), (0, PF.jsx)(dF.d, {
            text: WF
          })]
        })
      })
    }
    var nC = SF(3755),
      HC = SF(3823),
      KC = SF(35410),
      wC = SF(35414);
    const XC = (0, CF.memo)((function() {
      const FF = (0, tW.d)();
      return (0, PF.jsx)(PF.Fragment, {
        children: FF.map(((FF, WF) => (0, PF.jsx)(wC.b, {
          className: "HeaderChip",
          text: FF
        }, WF)))
      })
    }));
    var UC = SF(2814),
      BC = SF(3663);
    const jA = (0, CF.memo)((function() {
      const {
        t: FF
      } = (0, OF.B)(), [WF, SF] = (0, CF.useState)(!1), AF = (0, CF.useRef)(!1), uF = function(FF) {
        let {
          gameNameWithVariation: WF,
          lobbyName: SF
        } = FF;
        if ((0, kA.j)(WF)) return vA;
        if ((0, qA.D)(SF)) return JC;
        return null
      }((0, qW.e)("connectedGame"));
      if (!uF || WF) return null;
      const hF = BC.c[uF.target];
      return (0, PF.jsx)(cW.g, {
        tooltipInner: (0, PF.jsx)("div", {
          children: FF(hF.reportButtonTooltip)
        }),
        children: (0, PF.jsx)("div", {
          children: (0, PF.jsx)(AS.L, {
            onClick: () => {
              AF.current || (AF.current = !0, (0, BC.f)(uF.reportPolicyIds, hF).then((FF => {
                null !== FF && void 0 !== FF && FF.selectedPolicyId && (eF.gameBridge.send("reportLobbyOrGame", {
                  target: uF.target,
                  RC: FF.selectedPolicyId,
                  details: FF.aY
                }), SF(!0))
              })).finally((() => {
                AF.current = !1
              })))
            }
          })
        })
      })
    }));
    const vA = {
        target: "customGame",
        reportPolicyIds: UC.b
      },
      JC = {
        target: "lobby",
        reportPolicyIds: UC.f
      };
    var pC = SF(7722),
      lC = SF(35421),
      FA = SF(35423),
      WA = SF(35429),
      SA = SF(35433),
      CA = SF(35461);

    function AA(FF) {
      return FF instanceof Error && uA.has(FF.message) ? FF.message : void 0
    }
    const uA = new Set([CA.d.saveBusy.text, CA.d.saveClosed.text, CA.d.cropBusy.text]);
    let hA = !1;
    async function bu(FF, WF) {
      var SF, CF;
      const {
        files: AF
      } = WF, uF = AF.replayKey();
      if (null === uF) return "none";
      if (hA) throw new Error(CA.d.saveBusy.text);
      const hF = null !== (SF = null === (CF = AF.saveRefusal) || void 0 === CF ? void 0 : CF.call(AF)) && void 0 !== SF ? SF : null;
      if (null !== hF) throw new Error(hF);
      hA = !0;
      try {
        return await async function(FF, WF, SF) {
          const {
            files: CF
          } = WF, AF = () => CF.replayKey() === SF, uF = (FF, WF) => {
            AF() && CF.markSaved(FF, WF)
          };
          let hF = null;
          if (WF.pickerSupported()) {
            try {
              if (hF = await WF.chooseFile(FF ? null : CF.fileHandle()), null === hF) return "Qh"
            } catch (dF) {
              WF.onFallback(dF)
            }
            if (!AF()) throw new Error(CA.d.saveClosed.text)
          }
          const bW = await CF.encode();
          if (null === bW) {
            if (null !== hF) throw new Error(CA.d.saveClosed.text);
            return "none"
          }
          if (null !== hF) try {
            return await WF.write(hF, bW), uF(hF), "written"
          } catch (dF) {
            WF.onFallback(dF)
          }
          return uF(null, WF.download(bW)), "downloaded"
        }(FF, WF, uF)
      } finally {
        hA = !1
      }
    }
    var dA = SF(3621),
      PA = SF(61);
    const RA = [1, 2, 4, 8, 16, 32, 64];

    function iu(FF, WF) {
      return Math.max(0, Math.min(FF, WF))
    }

    function eA(FF, WF, SF) {
      return SF <= WF ? 0 : (FF - WF) / (SF - WF) * 100
    }

    function EA(FF, WF, SF) {
      const CF = SF - WF;
      return Math.round(WF + FF / 100 * CF)
    }

    function QA(FF, WF) {
      const SF = Math.floor(FF / WF / 60),
        CF = Math.floor(FF / WF % 60),
        AF = FF % WF;
      return `${SF.toString().padStart(2,"0")}:${CF.toString().padStart(2,"0")}:${AF.toString().padStart(2,"0")}`
    }

    function ru(FF) {
      return Number.isInteger(FF) || RA.includes(FF) ? `${Math.round(FF)}\xd7` : `${FF.toFixed(1)}\xd7`
    }

    function gu(FF, WF) {
      const SF = RA.indexOf(FF);
      if (-1 !== SF) return "in" === WF ? RA[Math.min(SF + 1, RA.length - 1)] : RA[Math.max(SF - 1, 0)];
      if ("in" === WF) {
        for (const WF of RA)
          if (WF >= FF) return WF;
        return FF
      }
      for (let CF = RA.length - 1; CF >= 0; CF--)
        if (RA[CF] <= FF) return RA[CF];
      return RA[0]
    }

    function tu(FF, WF) {
      const SF = WF.getBoundingClientRect();
      if (SF.width <= 0) return 0;
      const CF = (FF - SF.left) / SF.width * 100;
      return Math.max(0, Math.min(100, CF))
    }

    function TA(FF, WF) {
      return WF <= 0 ? 0 : FF / WF * 100
    }

    function au(FF, WF, SF) {
      const CF = [];
      let AF = Math.ceil(FF / SF) * SF;
      for (; AF <= WF;) CF.push(AF), AF += SF;
      return CF
    }
    var ku = SF(35463);
    const qu = [{
        label: "Linear",
        easing: ku.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: ku.h
      }, {
        label: "Ease Out",
        easing: ku.j
      }, {
        label: "Ease In Out",
        easing: ku.e
      }],
      VA = 200,
      NA = 150;

    function DA(FF) {
      const WF = FF => Number(FF.toFixed(3)).toString();
      return `cubic-bezier(${WF(FF[0])}, ${WF(FF[1])}, ${WF(FF[2])}, ${WF(FF[3])})`
    }

    function LA(FF, WF) {
      return {
        cx: 25 + FF * NA,
        cy: 25 + (1 - WF) * NA
      }
    }

    function mu(FF, WF, SF) {
      const CF = FF - SF.left,
        AF = WF - SF.top;
      return {
        x: eS.c.clamp((CF - 25) / NA, 0, 1),
        y: eS.c.clamp(1 - (AF - 25) / NA, -1, 2)
      }
    }

    function OA(FF, WF, SF, CF, AF) {
      return {
        x: (0, ku.t)(FF, SF, AF),
        y: (0, ku.t)(WF, CF, AF)
      }
    }
    const xu = (0, CF.memo)((function(FF) {
      let {
        value: WF,
        onChange: SF
      } = FF;
      const AF = (0, CF.useRef)(null),
        uF = (0, CF.useRef)(null),
        [hF, bW] = (0, CF.useState)(null),
        dF = (0, CF.useCallback)((() => {
          const FF = AF.current;
          if (!FF) return;
          const SF = FF.getContext("2d");
          if (!SF) return;
          const CF = window.devicePixelRatio || 1;
          FF.width = VA * CF, FF.height = VA * CF, SF.setTransform(CF, 0, 0, CF, 0, 0), SF.clearRect(0, 0, VA, VA), SF.fillStyle = "rgba(38, 52, 93, 0.85)", SF.fillRect(0, 0, VA, VA), SF.beginPath();
          const uF = LA(0, 0),
            bW = LA(1, 1);
          SF.moveTo(uF.cx, uF.cy), SF.lineTo(bW.cx, bW.cy), SF.strokeStyle = "rgba(164, 164, 164, 0.35)", SF.setLineDash([3, 3]), SF.stroke(), SF.setLineDash([]);
          const [dF, PF, RF, iW] = WF, eF = LA(dF, PF), EF = LA(RF, iW);
          SF.strokeStyle = "rgba(252, 211, 115, 0.55)", SF.lineWidth = 1.5, SF.beginPath(), SF.moveTo(uF.cx, uF.cy), SF.lineTo(eF.cx, eF.cy), SF.moveTo(bW.cx, bW.cy), SF.lineTo(EF.cx, EF.cy), SF.stroke(), SF.strokeStyle = "#fcd373", SF.lineWidth = 2, SF.beginPath();
          for (let WF = 0; WF <= 50; WF++) {
            const FF = OA(dF, PF, RF, iW, WF / 50),
              CF = LA(FF.x, FF.y);
            0 === WF ? SF.moveTo(CF.cx, CF.cy) : SF.lineTo(CF.cx, CF.cy)
          }
          SF.stroke();
          const QF = (FF, WF, CF) => {
            SF.beginPath(), SF.arc(FF, WF, CF ? 6 : 5, 0, 2 * Math.PI), SF.fillStyle = CF ? "#ffb914" : "#fcd373", SF.fill(), SF.strokeStyle = "#1a1f2e", SF.lineWidth = 1.5, SF.stroke()
          };
          QF(eF.cx, eF.cy, "p1" === hF), QF(EF.cx, EF.cy, "p2" === hF)
        }), [hF, WF]);
      (0, CF.useEffect)((() => {
        dF()
      }), [dF]);
      const RF = (0, CF.useCallback)(((FF, CF) => {
          const hF = AF.current,
            bW = uF.current;
          if (!hF || !bW) return;
          const dF = hF.getBoundingClientRect(),
            {
              x: PF,
              y: RF
            } = mu(FF, CF, dF);
          SF("p1" === bW ? [PF, RF, WF[2], WF[3]] : [WF[0], WF[1], PF, RF])
        }), [SF, WF]),
        iW = (0, CF.useCallback)((FF => {
          const SF = AF.current;
          if (!SF) return;
          const CF = SF.getBoundingClientRect();
          let {
            x: hF,
            y: dF
          } = mu(FF.clientX, FF.clientY, CF);
          hF = eS.c.clamp(hF, 0, 1), dF = eS.c.clamp(dF, 0, 1);
          const [PF, iW, eF, EF] = WF.map((FF => eS.c.clamp(FF, 0, 1))), QF = Math.hypot(hF - PF, dF - iW), rW = Math.hypot(hF - eF, dF - EF), gW = QF <= rW ? "p1" : "p2";
          ("p1" === gW ? QF : rW) > .12 || (uF.current = gW, bW(gW), SF.setPointerCapture(FF.pointerId), RF(FF.clientX, FF.clientY))
        }), [RF, WF]),
        eF = (0, CF.useCallback)((FF => {
          uF.current && RF(FF.clientX, FF.clientY)
        }), [RF]),
        EF = (0, CF.useCallback)((FF => {
          uF.current = null, bW(null), FF.currentTarget.hasPointerCapture(FF.pointerId) && FF.currentTarget.releasePointerCapture(FF.pointerId)
        }), []);
      return (0, PF.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, PF.jsx)("canvas", {
          ref: AF,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: VA,
            height: VA
          },
          onPointerDown: iW,
          onPointerMove: eF,
          onPointerUp: EF,
          onPointerCancel: EF
        }), (0, PF.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: DA(WF)
        })]
      })
    }));
    var ZA = SF(1507),
      oA = SF(1731);
    const YA = 12;

    function MA(FF) {
      return {
        left: FF.left + FF.width / 2,
        top: FF.top - 8
      }
    }

    function cu(FF, WF) {
      const [SF, AF] = (0, CF.useState)(null);
      return (0, CF.useLayoutEffect)((() => {
        const SF = FF.current;
        if (!SF) return;
        const {
          width: CF,
          height: uF
        } = SF.getBoundingClientRect();
        AF(function(FF, WF, SF) {
          const CF = window.innerWidth,
            AF = window.innerHeight,
            uF = WF / 2;
          let hF = FF.left + FF.width / 2;
          hF = Math.max(YA + uF, Math.min(hF, CF - YA - uF));
          const bW = FF.top - 8 - YA,
            dF = AF - FF.bottom - 8 - YA,
            PF = bW < SF && dF >= bW;
          let RF;
          PF ? (RF = FF.bottom + 8, RF + SF > AF - YA && (RF = AF - YA - SF), RF = Math.max(YA, RF)) : (RF = FF.top - 8, RF - SF < YA && (RF = YA + SF));
          return {
            left: hF,
            top: RF,
            placeBelow: PF
          }
        }(WF, CF, uF))
      }), [WF, FF]), SF
    }

    function GA(FF, WF, SF) {
      (0, CF.useEffect)((() => (0, oA.e)("pointerdown", (CF => {
        var AF, uF;
        const hF = CF.target;
        hF instanceof Node && (null !== (AF = FF.current) && void 0 !== AF && AF.contains(hF) || null !== SF && void 0 !== SF && null !== (uF = SF.current) && void 0 !== uF && uF.contains(hF) || (0, ZA.k)(hF) || WF())
      }))), [SF, WF, FF])
    }

    function zu(FF) {
      let {
        label: WF,
        value: SF,
        onChange: CF
      } = FF;
      return (0, PF.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, PF.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: WF
        }), (0, PF.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((FF, WF) => (0, PF.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, PF.jsx)("span", {
              children: FF
            }), (0, PF.jsx)("input", {
              type: "number",
              step: "any",
              value: SF[WF],
              onChange: FF => {
                const AF = Number.parseFloat(FF.target.value);
                if (Number.isNaN(AF)) return;
                const uF = [SF[0], SF[1], SF[2]];
                uF[WF] = AF, CF(uF)
              }
            })]
          }, FF)))
        })]
      })
    }
    const IA = (0, CF.memo)((function(FF) {
        var WF, SF, AF;
        let {
          keyframe: hF,
          anchor: bW,
          hasOutgoingSegment: dF,
          onClose: RF,
          onApply: iW,
          onDelete: eF,
          onUseCurrentCamera: EF
        } = FF;
        const QF = (0, CF.useRef)(null),
          rW = cu(QF, bW.rect),
          [gW, tW] = (0, CF.useState)((() => [hF.position[0], hF.position[1], hF.position[2]])),
          [TF, aW] = (0, CF.useState)((() => [hF.direction[0], hF.direction[1], hF.direction[2]])),
          [kW, qW] = (0, CF.useState)((() => hF.easing));
        (0, CF.useEffect)((() => {
          tW([hF.position[0], hF.position[1], hF.position[2]]), aW([hF.direction[0], hF.direction[1], hF.direction[2]]), qW(hF.easing)
        }), [hF]), GA(QF, RF);
        const VF = (0, CF.useCallback)((() => {
            iW({
              lF: hF.lF,
              position: gW,
              direction: TF,
              easing: kW
            }), RF()
          }), [TF, kW, hF.lF, iW, RF, gW]),
          NF = (0, CF.useCallback)((() => {
            eF(hF.lF), RF()
          }), [hF.lF, eF, RF]),
          DF = (0, CF.useCallback)((() => {
            const FF = EF();
            FF && (tW([FF.position[0], FF.position[1], FF.position[2]]), aW([FF.direction[0], FF.direction[1], FF.direction[2]]))
          }), [EF]),
          LF = MA(bW.rect);
        return (0, PF.jsxs)("div", {
          ref: QF,
          className: uF()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (WF = null === rW || void 0 === rW ? void 0 : rW.placeBelow) && void 0 !== WF && WF,
            Positioned: null !== rW
          }),
          style: {
            left: `${null!==(SF=null===rW||void 0===rW?void 0:rW.left)&&void 0!==SF?SF:LF.left}px`,
            top: `${null!==(AF=null===rW||void 0===rW?void 0:rW.top)&&void 0!==AF?AF:LF.top}px`
          },
          onPointerDown: FF => {
            FF.stopPropagation()
          },
          children: [(0, PF.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, PF.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, PF.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", bW.lF]
            })]
          }), (0, PF.jsx)(zu, {
            label: "Position",
            value: gW,
            onChange: tW
          }), (0, PF.jsx)(zu, {
            label: "Direction",
            value: TF,
            onChange: aW
          }), dF && (0, PF.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, PF.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, PF.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: qu.map((FF => {
                const WF = (SF = kW, CF = FF.easing, SF[0] === CF[0] && SF[1] === CF[1] && SF[2] === CF[2] && SF[3] === CF[3]);
                var SF, CF;
                return (0, PF.jsx)(AS.N, {
                  className: uF()("ReplayKeyframePopoverPreset", {
                    Active: WF
                  }),
                  onClick: () => {
                    qW(FF.easing)
                  },
                  children: FF.label
                }, FF.label)
              }))
            }), (0, PF.jsx)(xu, {
              value: kW,
              onChange: qW
            })]
          }), (0, PF.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, PF.jsx)(AS.e, {
              className: "ReplayViewerCompactButton",
              onClick: DF,
              children: "Use current view"
            }), (0, PF.jsx)(AS.k, {
              className: "ReplayViewerCompactButton",
              onClick: VF,
              children: "Apply"
            }), (0, PF.jsx)(AS.E, {
              className: "ReplayViewerCompactButton",
              onClick: NF,
              children: "Delete"
            })]
          })]
        })
      })),
      fA = (0, CF.memo)((function(FF) {
        var WF, SF, AF;
        let {
          anchor: hF,
          hasPlaybackMark: bW,
          onClose: dF,
          onMark: RF,
          onZoom: iW,
          onCrop: eF,
          onDeleteKeyframes: EF,
          onClearMark: QF
        } = FF;
        const rW = (0, CF.useRef)(null),
          gW = cu(rW, hF.rect),
          tW = MA(hF.rect),
          TF = {
            startTick: hF.startTick,
            endTick: hF.endTick
          },
          aW = hF.endTick > hF.startTick;
        return GA(rW, dF), (0, PF.jsx)("div", {
          ref: rW,
          className: uF()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (WF = null === gW || void 0 === gW ? void 0 : gW.placeBelow) && void 0 !== WF && WF,
            Positioned: null !== gW
          }),
          style: {
            left: `${null!==(SF=null===gW||void 0===gW?void 0:gW.left)&&void 0!==SF?SF:tW.left}px`,
            top: `${null!==(AF=null===gW||void 0===gW?void 0:gW.top)&&void 0!==AF?AF:tW.top}px`
          },
          onPointerDown: FF => {
            FF.stopPropagation()
          },
          children: (0, PF.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, PF.jsx)(AS.k, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                RF(TF)
              },
              disabled: !aW,
              children: (0, PF.jsx)("span", {
                children: " Play range "
              })
            }), (0, PF.jsx)(AS.e, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                iW(TF)
              },
              children: (0, PF.jsx)("span", {
                children: " Zoom "
              })
            }), (0, PF.jsx)(AS.N, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                eF(TF)
              },
              disabled: !aW,
              children: (0, PF.jsx)("span", {
                children: " Crop "
              })
            }), (0, PF.jsx)(AS.N, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                EF(TF)
              },
              children: (0, PF.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), bW && (0, PF.jsx)(AS.N, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                QF()
              },
              children: (0, PF.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      yu = (0, CF.memo)((function(FF) {
        var WF, SF;
        let {
          maxTick: AF,
          displayTick: hF,
          LWF: bW,
          cameraKeyframes: dF,
          playbackMark: RF,
          onSeek: iW,
          onPause: eF,
          onScrubTickChange: EF,
          onMoveCameraKeyframe: QF,
          onUpdateCameraKeyframe: rW,
          onDeleteCameraKeyframe: gW,
          onUseCurrentCamera: tW,
          onMarkRange: TF,
          onCropRange: aW,
          onDeleteKeyframesInRange: kW,
          onClearMark: qW,
          zoomLevel: VF,
          onZoomLevelChange: NF
        } = FF;
        const DF = (0, CF.useRef)(null),
          LF = (0, CF.useRef)(null),
          mW = (0, CF.useRef)(!1),
          OF = (0, CF.useRef)(!1),
          xW = (0, CF.useRef)(VF),
          ZF = (0, CF.useRef)(null),
          oF = (0, CF.useRef)(null),
          YF = (0, CF.useRef)(null),
          MF = (0, CF.useRef)(null),
          [cW, GF] = (0, CF.useState)(null),
          [zW, IF] = (0, CF.useState)(hF),
          [fF, yW] = (0, CF.useState)(null),
          [sF, nF] = (0, CF.useState)(null),
          [HF, KF] = (0, CF.useState)(null),
          [wF, XF] = (0, CF.useState)(null),
          UF = (0, CF.useMemo)((() => dF.map((FF => FF.lF))), [dF]),
          BF = null !== cW && void 0 !== cW ? cW : hF,
          {
            viewStart: jW,
            viewEnd: vW
          } = (0, CF.useMemo)((() => function(FF) {
            const WF = FF.maxTick + 1,
              SF = Math.max(1, Math.ceil(WF / FF.zoomLevel)),
              CF = Math.floor(SF / 2);
            let AF = FF.centerTick - CF;
            return AF = Math.max(0, Math.min(AF, FF.maxTick - SF + 1)), {
              viewStart: AF,
              viewEnd: Math.min(FF.maxTick, AF + SF - 1)
            }
          }({
            maxTick: AF,
            zoomLevel: VF,
            centerTick: zW
          })), [AF, VF, zW]);
        (0, CF.useEffect)((() => {
          if (null !== cW || null !== oF.current || null !== YF.current || null !== MF.current) return;
          if (mW.current) return void(mW.current = !1);
          if (OF.current) return void(OF.current = !1);
          const FF = xW.current !== VF;
          xW.current = VF, FF && IF(hF)
        }), [VF, hF, cW]);
        const JF = (0, CF.useCallback)((FF => {
            let WF = iu(FF, AF);
            return RF && (WF = Math.max(RF.inTick, Math.min(WF, RF.outTick))), WF
          }), [AF, RF]),
          pF = (0, CF.useCallback)(((FF, WF) => {
            const SF = JF(FF);
            iW(SF), WF && IF(SF)
          }), [JF, iW]),
          lF = (0, CF.useCallback)(((FF, WF) => {
            const SF = JF(FF);
            GF(SF), EF(SF), pF(SF, WF)
          }), [JF, pF, EF]),
          FW = (0, CF.useCallback)((() => {
            GF((FF => (null !== FF && IF(FF), null))), EF(null)
          }), [EF]),
          WW = (0, CF.useCallback)((() => {
            KF(null), XF(null)
          }), []),
          SW = (0, CF.useCallback)((FF => {
            const WF = DF.current;
            if (!WF) return 0;
            return iu(EA(tu(FF, WF), jW, vW), AF)
          }), [AF, vW, jW]),
          CW = (0, CF.useCallback)((FF => {
            const WF = LF.current;
            if (!WF) return 0;
            return iu(EA(tu(FF, WF), 0, AF), AF)
          }), [AF]),
          AW = (0, CF.useMemo)((() => {
            if (!fF) return [...UF];
            const FF = UF.filter((FF => FF !== fF.fromTick));
            return FF.push(fF.previewTick), FF.sort(((FF, WF) => FF - WF)), FF
          }), [UF, fF]),
          uW = (0, CF.useMemo)((() => {
            var FF;
            return sF && null !== (FF = dF.find((FF => FF.lF === sF.lF))) && void 0 !== FF ? FF : null
          }), [dF, sF]),
          hW = (0, CF.useMemo)((() => !!uW && dF.some((FF => FF.lF > uW.lF))), [dF, uW]);
        (0, CF.useEffect)((() => {
          sF && !uW && nF(null)
        }), [sF, uW]), (0, CF.useEffect)((() => {
          if (!wF) return () => {};
          const FF = FF => {
            "Escape" === FF.key && WW()
          };
          return window.addEventListener("keydown", FF), () => {
            window.removeEventListener("keydown", FF)
          }
        }), [WW, wF]);
        const bS = (0, CF.useCallback)(((FF, WF) => {
            WW(), eF(), iW(FF, {
              ignorePlaybackMark: !0
            }), nF({
              lF: FF,
              rect: WF.getBoundingClientRect()
            })
          }), [WW, eF, iW]),
          dW = (0, CF.useCallback)(((FF, WF) => SF => {
            0 === SF.button && (SF.stopPropagation(), nF(null), WW(), eF(), ZF.current = {
              fromTick: FF,
              startX: SF.clientX,
              startY: SF.clientY,
              didDrag: !1,
              track: WF
            }, yW({
              fromTick: FF,
              previewTick: FF,
              track: WF
            }), SF.currentTarget.setPointerCapture(SF.pointerId))
          }), [WW, eF]),
          PW = (0, CF.useCallback)((FF => {
            if (!fF) return;
            FF.stopPropagation();
            const WF = ZF.current;
            if (WF && !WF.didDrag) {
              const SF = FF.clientX - WF.startX,
                CF = FF.clientY - WF.startY;
              Math.hypot(SF, CF) > 5 && (WF.didDrag = !0)
            }
            const SF = "detail" === fF.track ? SW(FF.clientX) : CW(FF.clientX);
            SF !== fF.previewTick && yW({
              ...fF,
              previewTick: SF
            })
          }), [fF, SW, CW]),
          RW = (0, CF.useCallback)((FF => {
            if (!fF) return;
            FF.stopPropagation();
            const WF = ZF.current,
              SF = "detail" === fF.track ? SW(FF.clientX) : CW(FF.clientX);
            WF && !WF.didDrag ? bS(WF.fromTick, FF.currentTarget) : SF !== fF.fromTick && QF(fF.fromTick, SF), yW(null), ZF.current = null, FF.currentTarget.releasePointerCapture(FF.pointerId)
          }), [fF, QF, bS, SW, CW]),
          iS = (0, CF.useCallback)((FF => {
            if (0 !== FF.button) return;
            nF(null), eF();
            const WF = SW(FF.clientX);
            oF.current = {
              pointerId: FF.pointerId,
              startX: FF.clientX,
              startY: FF.clientY,
              startTick: WF,
              currentTick: WF,
              didSelect: !1
            }, KF(null), XF(null), FF.currentTarget.setPointerCapture(FF.pointerId)
          }), [eF, SW]),
          eW = (0, CF.useCallback)((FF => {
            const WF = oF.current;
            if (!WF || WF.pointerId !== FF.pointerId) return;
            const SF = SW(FF.clientX);
            if (WF.currentTick = SF, !WF.didSelect) {
              const SF = FF.clientX - WF.startX,
                CF = FF.clientY - WF.startY;
              if (Math.hypot(SF, CF) <= 5) return;
              WF.didSelect = !0
            }
            const CF = Math.min(WF.startTick, SF),
              AF = Math.max(WF.startTick, SF);
            KF({
              startTick: CF,
              endTick: AF
            })
          }), [SW]),
          EW = (0, CF.useCallback)((FF => {
            const WF = oF.current;
            if (!WF || WF.pointerId !== FF.pointerId) return;
            if (oF.current = null, FF.currentTarget.releasePointerCapture(FF.pointerId), !WF.didSelect) return WW(), void pF(WF.startTick, !0);
            const SF = SW(FF.clientX),
              CF = Math.min(WF.startTick, SF),
              AF = Math.max(WF.startTick, SF),
              uF = {
                startTick: CF,
                endTick: AF
              };
            KF(uF);
            const hF = DF.current;
            if (!hF) return;
            const bW = hF.getBoundingClientRect(),
              dF = eA(CF, jW, vW) / 100,
              PF = eA(AF, jW, vW) / 100,
              RF = bW.left + dF * bW.width,
              iW = bW.left + PF * bW.width;
            XF({
              ...uF,
              rect: new DOMRect(RF, bW.top, Math.max(iW - RF, 1), bW.height)
            })
          }), [WW, pF, SW, vW, jW]),
          QW = (0, CF.useCallback)((FF => WF => {
            if (0 !== WF.button) return;
            WF.stopPropagation(), nF(null), WW(), eF(), YF.current = {
              pointerId: WF.pointerId,
              track: FF
            }, WF.currentTarget.setPointerCapture(WF.pointerId);
            const SF = "detail" === FF ? SW(WF.clientX) : CW(WF.clientX);
            lF(SF, !1)
          }), [WW, eF, lF, SW, CW]),
          rS = (0, CF.useCallback)((FF => {
            const WF = YF.current;
            if (!WF || WF.pointerId !== FF.pointerId) return;
            FF.stopPropagation();
            const SF = "detail" === WF.track ? SW(FF.clientX) : CW(FF.clientX);
            lF(SF, !1)
          }), [lF, SW, CW]),
          gS = (0, CF.useCallback)((FF => {
            const WF = YF.current;
            WF && WF.pointerId === FF.pointerId && (FF.stopPropagation(), YF.current = null, FF.currentTarget.releasePointerCapture(FF.pointerId), FW())
          }), [FW]),
          tS = (0, CF.useCallback)((FF => {
            0 === FF.button && (WW(), eF(), MF.current = {
              pointerId: FF.pointerId
            }, FF.currentTarget.setPointerCapture(FF.pointerId), lF(CW(FF.clientX), !0))
          }), [WW, eF, lF, CW]),
          TW = (0, CF.useCallback)((FF => {
            const WF = MF.current;
            WF && WF.pointerId === FF.pointerId && lF(CW(FF.clientX), !0)
          }), [lF, CW]),
          aS = (0, CF.useCallback)((FF => {
            const WF = MF.current;
            WF && WF.pointerId === FF.pointerId && (MF.current = null, FF.currentTarget.releasePointerCapture(FF.pointerId), FW())
          }), [FW]),
          kS = (0, CF.useCallback)((FF => {
            const WF = Math.max(1, FF.endTick - FF.startTick + 1),
              SF = AF + 1,
              CF = SF / WF,
              uF = Math.max(1, Math.ceil(SF / CF)),
              hF = FF.startTick + Math.floor((uF - 1) / 2);
            OF.current = !0, xW.current = CF, IF(iu(hF, AF)), NF(CF), WW()
          }), [WW, AF, NF]),
          qS = (0, CF.useCallback)((FF => {
            TF(FF), WW()
          }), [WW, TF]),
          VW = (0, CF.useCallback)((FF => {
            aW(FF), WW()
          }), [WW, aW]),
          NW = (0, CF.useCallback)((FF => {
            kW(FF), WW()
          }), [WW, kW]),
          DW = (0, CF.useCallback)((() => {
            qW(), WW()
          }), [WW, qW]);
        (0, CF.useEffect)((() => {
          const FF = DF.current;
          if (!FF) return () => {};
          const WF = WF => {
            WF.preventDefault();
            const SF = iu(EA(tu(WF.clientX, FF), jW, vW), AF),
              CF = WF.deltaY < 0 ? "in" : "out",
              uF = gu(VF, CF);
            uF !== VF && (mW.current = !0, IF(SF), NF(uF))
          };
          return FF.addEventListener("wheel", WF, {
            passive: !1
          }), () => {
            FF.removeEventListener("wheel", WF)
          }
        }), [AF, NF, vW, jW, VF]);
        const LW = eA(BF, jW, vW),
          mS = TA(BF, AF),
          OW = TA(jW, AF),
          xS = AF > 0 ? TA(vW, AF) : 100,
          ZW = null !== RF,
          oW = null !== (WF = null === RF || void 0 === RF ? void 0 : RF.inTick) && void 0 !== WF ? WF : 0,
          YW = null !== (SF = null === RF || void 0 === RF ? void 0 : RF.outTick) && void 0 !== SF ? SF : AF,
          MW = TA(oW, AF),
          cS = Math.max(TA(YW, AF) - MW, 0),
          GW = eA(Math.max(oW, jW), jW, vW),
          zS = eA(Math.min(YW, vW), jW, vW),
          IW = Math.max(zS - GW, 0),
          fW = ZW && YW >= jW && oW <= vW,
          yS = eA(oW, jW, vW),
          sW = eA(YW, jW, vW),
          nW = ZW && oW >= jW && oW <= vW,
          HW = ZW && YW >= jW && YW <= vW,
          KW = TA(oW, AF),
          wW = TA(YW, AF),
          XW = null !== HF && void 0 !== HF ? HF : wF ? {
            startTick: wF.startTick,
            endTick: wF.endTick
          } : null,
          UW = XW ? eA(Math.max(XW.startTick, jW), jW, vW) : 0,
          BW = XW ? eA(Math.min(XW.endTick, vW), jW, vW) : 0,
          jS = Math.max(BW - UW, 0),
          vS = null !== XW && XW.endTick >= jW && XW.startTick <= vW,
          JW = (0, CF.useMemo)((() => au(0, AF, bW)), [AF, bW]),
          pW = (0, CF.useMemo)((() => au(jW, vW, bW)), [jW, vW, bW]),
          lW = (0, CF.useMemo)((() => AW.filter((FF => FF >= jW && FF <= vW))), [AW, vW, jW]),
          FS = (0, CF.useCallback)(((FF, WF, SF) => {
            const CF = "detail" === WF ? eA(FF, jW, vW) : TA(FF, AF),
              hF = null !== fF && SF === fF.fromTick,
              bW = null !== sF && sF.lF === SF;
            return (0, PF.jsx)("button", {
              type: "button",
              className: uF()("ReplayTimelineCameraKeyframeMarker", "detail" === WF ? "Detail" : "Overview", {
                Dragging: hF,
                Selected: bW
              }),
              style: {
                left: `${CF}%`
              },
              onPointerDown: dW(SF, WF),
              onPointerMove: PW,
              onPointerUp: RW,
              onPointerCancel: RW,
              "aria-label": `Camera keyframe at tick ${SF}`
            }, `cam-${WF}-${SF}`)
          }), [dW, sF, RW, fF, AF, PW, vW, jW]),
          WS = (0, CF.useCallback)((FF => fF && FF === fF.previewTick ? fF.fromTick : FF), [fF]);
        return AF <= 0 ? null : (0, PF.jsxs)("div", {
          className: "ReplayTimeline",
          children: [sF && uW && (0, PA.createPortal)((0, PF.jsx)(IA, {
            keyframe: uW,
            anchor: sF,
            hasOutgoingSegment: hW,
            onClose: () => {
              nF(null)
            },
            onApply: rW,
            onDelete: gW,
            onUseCurrentCamera: tW
          }), document.body), wF && (0, PA.createPortal)((0, PF.jsx)(fA, {
            anchor: wF,
            hasPlaybackMark: ZW,
            onClose: WW,
            onMark: qS,
            onZoom: kS,
            onCrop: VW,
            onDeleteKeyframes: NW,
            onClearMark: DW
          }), document.body), (0, PF.jsxs)("div", {
            className: uF()("ReplayTimelineOverviewSection", {
              Hidden: VF <= 1
            }),
            children: [(0, PF.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, PF.jsxs)("div", {
              ref: LF,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: tS,
              onPointerMove: TW,
              onPointerUp: aS,
              onPointerCancel: aS,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": AF,
              "aria-valuenow": BF,
              tabIndex: 0,
              children: [JW.map((FF => {
                const WF = TA(FF, AF);
                return (0, PF.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${WF}%`
                  }
                }, FF)
              })), ZW && (0, PF.jsxs)(PF.Fragment, {
                children: [(0, PF.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${MW}%`,
                    width: `${cS}%`
                  }
                }), (0, PF.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${KW}%`
                  },
                  "aria-hidden": !0
                }), (0, PF.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${wW}%`
                  },
                  "aria-hidden": !0
                })]
              }), AW.map((FF => FS(FF, "overview", WS(FF)))), (0, PF.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${OW}%`,
                  width: `${Math.max(xS-OW,.5)}%`
                }
              }), (0, PF.jsx)("button", {
                type: "button",
                className: uF()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== cW
                }),
                style: {
                  left: `${mS}%`
                },
                onPointerDown: QW("overview"),
                onPointerMove: rS,
                onPointerUp: gS,
                onPointerCancel: gS,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, PF.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, PF.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, PF.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, PF.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [QA(jW, bW), " \u2013 ", QA(vW, bW), VF > 1 && (0, PF.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: ru(VF)
                })]
              })]
            }), (0, PF.jsxs)("div", {
              ref: DF,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: iS,
              onPointerMove: eW,
              onPointerUp: EW,
              onPointerCancel: EW,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": jW,
              "aria-valuemax": vW,
              "aria-valuenow": BF,
              tabIndex: 0,
              children: [pW.map((FF => {
                const WF = eA(FF, jW, vW);
                return (0, PF.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${WF}%`
                  }
                }, FF)
              })), fW && (0, PF.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${GW}%`,
                  width: `${IW}%`
                }
              }), nW && (0, PF.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${yS}%`
                },
                "aria-label": `Play range start at tick ${oW}`
              }), HW && (0, PF.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${sW}%`
                },
                "aria-label": `Play range end at tick ${YW}`
              }), vS && XW && (0, PF.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${UW}%`,
                  width: `${jS}%`
                }
              }), lW.map((FF => FS(FF, "detail", WS(FF)))), (0, PF.jsx)("button", {
                type: "button",
                className: uF()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== cW
                }),
                style: {
                  left: `${LW}%`
                },
                onPointerDown: QW("detail"),
                onPointerMove: rS,
                onPointerUp: gS,
                onPointerCancel: gS,
                "aria-label": "Scrub playhead"
              })]
            }), (0, PF.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, PF.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      sA = (0, CF.memo)((function(FF) {
        let {
          enabled: WF
        } = FF;
        const SF = (0, CF.useRef)(!1),
          AF = (0, CF.useRef)(null),
          [hF, bW] = (0, CF.useState)(!1),
          dF = (0, CF.useCallback)((FF => {
            WF && 0 === FF.button && (SF.current = !0, bW(!0), AF.current = {
              x: FF.clientX,
              y: FF.clientY
            }, FF.currentTarget.setPointerCapture(FF.pointerId))
          }), [WF]),
          RF = (0, CF.useCallback)((FF => {
            if (!WF || !SF.current || !AF.current) return;
            const CF = FF.clientX - AF.current.x,
              uF = FF.clientY - AF.current.y;
            AF.current = {
              x: FF.clientX,
              y: FF.clientY
            }, eF.gameBridge.send("dragReplayCamera", {
              dx: CF,
              dy: uF
            })
          }), [WF]),
          iW = (0, CF.useCallback)((FF => {
            SF.current && (SF.current = !1, bW(!1), AF.current = null, FF.currentTarget.releasePointerCapture(FF.pointerId))
          }), []);
        return WF ? (0, PF.jsx)("div", {
          className: uF()("ReplayViewerCameraDragSurface", {
            Dragging: hF
          }),
          onPointerDown: dF,
          onPointerMove: RF,
          onPointerUp: iW,
          onPointerCancel: iW,
          "aria-hidden": !0
        }) : null
      }));
    var nA = SF(35472),
      HA = SF(35478);
    const KA = (0, CF.memo)((function(FF) {
        var WF, SF, AF;
        let {
          anchorRect: hF,
          anchorRef: dF,
          onClose: RF
        } = FF;
        const iW = (0, CF.useRef)(null),
          eF = cu(iW, hF),
          [EF, QF] = (0, CF.useState)(HA.e),
          rW = (0, CF.useMemo)((() => Object.values(EF).every((FF => FF))), [EF]);
        (0, bW.e)("replayViewer|uiVisibilityChanged", (() => {
          QF((0, HA.e)())
        })), GA(iW, RF, dF);
        const gW = (0, CF.useCallback)(((FF, WF) => {
            (0, HA.h)(FF, WF), QF((0, HA.e)())
          }), []),
          tW = (0, CF.useCallback)((FF => {
            for (const {
                group: WF
              }
              of nA.e)(0, HA.h)(WF, FF);
            QF((0, HA.e)())
          }), []),
          TF = MA(hF);
        return (0, PA.createPortal)((0, PF.jsxs)("div", {
          ref: iW,
          className: uF()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (WF = null === eF || void 0 === eF ? void 0 : eF.placeBelow) && void 0 !== WF && WF,
            Positioned: null !== eF
          }),
          style: {
            left: `${null!==(SF=null===eF||void 0===eF?void 0:eF.left)&&void 0!==SF?SF:TF.left}px`,
            top: `${null!==(AF=null===eF||void 0===eF?void 0:eF.top)&&void 0!==AF?AF:TF.top}px`
          },
          onPointerDown: FF => {
            FF.stopPropagation()
          },
          children: [(0, PF.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, PF.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, PF.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, PF.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, PF.jsx)("input", {
                type: "checkbox",
                checked: rW,
                onChange: FF => {
                  tW(FF.target.checked)
                }
              }), (0, PF.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), nA.e.map((FF => {
              let {
                group: WF,
                label: SF
              } = FF;
              return (0, PF.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, PF.jsx)("input", {
                  type: "checkbox",
                  checked: EF[WF],
                  onChange: FF => {
                    gW(WF, FF.target.checked)
                  }
                }), (0, PF.jsx)("span", {
                  children: SF
                })]
              }, WF)
            }))]
          })]
        }), document.body)
      })),
      wA = (0, CF.memo)((function(FF) {
        let {
          disabled: WF
        } = FF;
        const SF = (0, CF.useRef)(null),
          [AF, uF] = (0, CF.useState)(!1),
          [hF, bW] = (0, CF.useState)(null),
          dF = (0, CF.useCallback)((() => {
            SF.current && (bW(SF.current.getBoundingClientRect()), uF((FF => !FF)))
          }), []),
          RF = (0, CF.useCallback)((() => {
            uF(!1)
          }), []);
        return (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)("div", {
            ref: SF,
            children: (0, PF.jsx)(AS.e, {
              className: "ReplayViewerActionButton",
              onClick: dF,
              disabled: WF,
              children: (0, PF.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), AF && hF && (0, PF.jsx)(KA, {
            anchorRect: hF,
            anchorRef: SF,
            onClose: RF
          })]
        })
      })),
      XA = ["freeCamUp", "freeCamDown"];

    function UA(FF, WF) {
      eF.gameBridge.send("holdReplayFreecamVertical", {
        action: FF,
        yS: WF
      })
    }
    const BA = (0, CF.memo)((function() {
        (0, CF.useEffect)((() => () => {
          ! function() {
            eF.gameBridge.send("moveReplayFreecam", null);
            for (const FF of XA) UA(FF, !1)
          }()
        }), []);
        const FF = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("moveReplayFreecam", FF)
          }), []),
          WF = (0, CF.useCallback)((FF => ({
            onTouchStart: WF => {
              WF.preventDefault(), WF.stopPropagation(), UA(FF, !0)
            },
            onTouchEnd: WF => {
              WF.preventDefault(), WF.stopPropagation(), UA(FF, !1)
            },
            onTouchCancel: WF => {
              WF.preventDefault(), WF.stopPropagation(), UA(FF, !1)
            }
          })), []);
        return (0, PF.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, PF.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, PF.jsx)(hW, {
              onMove: FF,
              mode: "pinned"
            })
          }), (0, PF.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, PF.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...WF("freeCamUp"),
              children: (0, PF.jsx)(GF.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, PF.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...WF("freeCamDown"),
              children: (0, PF.jsx)(GF.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      ju = [],
      vu = (0, CF.memo)((function() {
        const FF = (0, XF.n)();
        return (0, qW.b)("replayViewerRequested", (FF => {
          (0, XF.l)("toggle" === FF ? !(0, XF.h)() : "open" === FF)
        })), FF ? (0, PF.jsx)(JA, {}) : null
      })),
      JA = (0, CF.memo)((function() {
        var FF, WF, SF, AF, hF, bW, dF, RF, iW, EF, QF, rW;
        const gW = CF.useRef(null),
          [tW, TF] = (0, CF.useState)(null),
          [aW, kW] = (0, CF.useState)(1),
          [DF, LF] = (0, CF.useState)(null),
          [mW, OF] = (0, CF.useState)(!1),
          {
            isTouchScreen: xW
          } = (0, VF.d)(["isTouchScreen"]),
          ZF = (0, qW.e)("replay"),
          oF = (0, qW.e)("replayEdits"),
          YF = null !== ZF,
          MF = null !== (FF = null === ZF || void 0 === ZF ? void 0 : ZF.lF) && void 0 !== FF ? FF : 0,
          zW = null !== (WF = null === ZF || void 0 === ZF ? void 0 : ZF.totalTicks) && void 0 !== WF ? WF : 0,
          IF = Math.max(0, zW - 1),
          fF = null !== (SF = null === ZF || void 0 === ZF ? void 0 : ZF.playing) && void 0 !== SF && SF,
          yW = null !== (AF = null === ZF || void 0 === ZF ? void 0 : ZF.speed) && void 0 !== AF ? AF : 1,
          sF = null !== (hF = null === ZF || void 0 === ZF ? void 0 : ZF.LWF) && void 0 !== hF ? hF : 20,
          nF = null !== DF && void 0 !== DF ? DF : MF,
          HF = null !== (bW = null === ZF || void 0 === ZF ? void 0 : ZF.freecam) && void 0 !== bW && bW,
          KF = null !== (dF = null === ZF || void 0 === ZF ? void 0 : ZF.cameraMode) && void 0 !== dF ? dF : "recording",
          wF = null !== (RF = null === oF || void 0 === oF ? void 0 : oF.cameraKeyframes) && void 0 !== RF ? RF : ju,
          UF = null !== (iW = null === oF || void 0 === oF ? void 0 : oF.playbackMark) && void 0 !== iW ? iW : null,
          BF = null !== (EF = null === oF || void 0 === oF ? void 0 : oF.fileName) && void 0 !== EF ? EF : null,
          jW = null !== (QF = null === oF || void 0 === oF ? void 0 : oF.unsavedChanges) && void 0 !== QF && QF,
          vW = null !== (rW = null === oF || void 0 === oF ? void 0 : oF.suggestSaveAs) && void 0 !== rW && rW,
          JF = (0, qW.e)("replayVideoExporting"),
          pF = !JF && YF && ("freecam" === KF || ("recording" === KF || "keyframe" === KF) && !fF),
          lF = xW && YF && "freecam" === KF && !JF && !mW;
        (0, dA.d)(!0, !0, "ReplayViewerOverlay"), (0, CF.useEffect)((() => {
          eF.gameBridge.send("syncReplayCameraMode", null)
        }), [HF]);
        const FW = (0, CF.useCallback)(((FF, WF) => {
            eF.gameBridge.send("seekReplay", {
              lF: FF,
              ignorePlaybackMark: null === WF || void 0 === WF ? void 0 : WF.ignorePlaybackMark
            })
          }), []),
          WW = (0, CF.useCallback)((() => {
            eF.gameBridge.send("setReplayPlaying", !1)
          }), []),
          SW = (0, CF.useCallback)(((FF, WF) => {
            eF.gameBridge.send("moveReplayCameraKeyframe", {
              from: FF,
              to: WF
            })
          }), []),
          CW = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("setReplayCameraKeyframe", FF)
          }), []),
          AW = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("deleteReplayCameraKeyframes", {
              start: FF,
              end: FF
            })
          }), []),
          uW = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("deleteReplayCameraKeyframes", {
              start: FF.startTick,
              end: FF.endTick
            })
          }), []),
          hW = (0, CF.useCallback)((() => eF.gameBridge.lookup("replayCamera", null)), []),
          bS = (0, CF.useCallback)((FF => {
            LF(FF)
          }), []),
          dW = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("setReplayPlaybackMark", {
              inTick: FF.startTick,
              outTick: FF.endTick
            })
          }), []),
          PW = (0, CF.useCallback)((() => {
            eF.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          RW = (0, CF.useCallback)((FF => {
            const WF = eF.gameBridge.latest("replay");
            if (null === WF || FF.endTick <= FF.startTick) return;
            const SF = FF.startTick,
              CF = FF.endTick;
            bA.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((FF => {
              var AF;
              if (!0 !== FF) return;
              if ((null === (AF = eF.gameBridge.latest("replay")) || void 0 === AF ? void 0 : AF.id) !== WF.id) return;
              eF.gameBridge.send("cropReplay", {
                start: SF,
                end: CF
              }) && (LF(null), kW(1))
            }))
          }), []),
          iS = (0, CF.useCallback)(((FF, WF) => {
            TF(null), kW(1), LF(null), (0, lC.c)().open(FF, WF).catch((FF => {
              console.error(FF), TF(FF instanceof Error ? FF.message : "Failed to parse recording")
            }))
          }), []),
          eW = (0, CF.useCallback)(((FF, WF) => {
            null !== eF.gameBridge.latest("connectedGame").websocketUrl ? bA.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((SF => {
              !0 === SF && iS(FF, WF)
            })) : iS(FF, WF)
          }), [iS]),
          EW = (0, CF.useCallback)((FF => {
            var WF;
            const SF = null === (WF = FF.target.files) || void 0 === WF ? void 0 : WF[0];
            if (FF.target.value = "", !SF) return;
            const CF = new FileReader;
            CF.onload = () => {
              eW(new Uint8Array(CF.result), {
                fileName: SF.name
              })
            }, CF.onerror = () => {
              TF("Failed to read file")
            }, CF.readAsArrayBuffer(SF)
          }), [eW]),
          QW = (0, CF.useCallback)((() => {
            const FF = () => {
              var FF;
              null === (FF = gW.current) || void 0 === FF || FF.click()
            };
            (0, SA.h)() ? (0, SA.c)().then((FF => {
              FF && eW(FF.bytes, {
                fileHandle: FF.handle
              })
            })).catch((WF => {
              console.error(WF), FF()
            })): FF()
          }), [eW]),
          rS = (0, CF.useCallback)((async function() {
            let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let WF;
            try {
              WF = await bu(FF, {
                files: (0, lC.c)(),
                pickerSupported: SA.h,
                chooseFile: SA.b,
                write: SA.k,
                download: WA.d,
                onFallback: console.error
              })
            } catch (SF) {
              return void(FF => {
                console.error(FF), bA.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: AA(FF),
                  confirmText: "OK"
                })
              })(SF)
            }
            "written" !== WF && "downloaded" !== WF || (() => {
              const FF = bA.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                FF.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          gS = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("replayAction", FF)
          }), []),
          tS = (0, CF.useCallback)((FF => {
            kW((WF => gu(WF, FF)))
          }), []),
          TW = (0, CF.useCallback)((FF => {
            if (!eF.gameBridge.latest("replayVideoExporting")) switch (FF) {
              case "replayLoad":
                QW();
                break;
              case "replaySave":
                rS(!1);
                break;
              case "replaySaveAs":
                rS(!0);
                break;
              case "replayTimelineZoomIn":
                tS("in");
                break;
              case "replayTimelineZoomOut":
                tS("out")
            }
          }), [QW, rS, tS]);
        (0, qW.b)("replayUiActionRequested", TW);
        const aS = (0, CF.useCallback)((FF => {
            eF.gameBridge.send("setReplayCameraMode", FF)
          }), []),
          kS = YF ? AS.e : AS.k,
          qS = jW && !vW ? AS.k : AS.e,
          VW = jW && vW ? AS.k : AS.e;
        return (0, PF.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, PF.jsx)(sA, {
            enabled: pF
          }), lF && (0, PF.jsx)(BA, {}), (0, PF.jsx)("input", {
            ref: gW,
            type: "file",
            accept: WA.b,
            className: "ReplayViewerFileInput",
            onChange: EW
          }), (0, PF.jsxs)("div", {
            className: uF()("ReplayViewerBar", {
              Collapsed: mW
            }),
            children: [(0, PF.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                mW ? OF(!1) : YF ? OF(!0) : (0, XF.d)()
              },
              "aria-expanded": !mW,
              "aria-label": mW ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, PF.jsx)(GF.e, {
                name: mW ? "angle-up" : "angle-down"
              })
            }), !mW && (0, PF.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [YF && zW > 0 && (0, PF.jsx)(yu, {
                maxTick: IF,
                displayTick: nF,
                LWF: sF,
                cameraKeyframes: wF,
                playbackMark: UF,
                onSeek: FW,
                onPause: WW,
                onScrubTickChange: bS,
                onMoveCameraKeyframe: SW,
                onUpdateCameraKeyframe: CW,
                onDeleteCameraKeyframe: AW,
                onUseCurrentCamera: hW,
                onMarkRange: dW,
                onCropRange: RW,
                onDeleteKeyframesInRange: uW,
                onClearMark: PW,
                zoomLevel: aW,
                onZoomLevelChange: kW
              }, IF), (0, PF.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, PF.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, PF.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [YF && (0, PF.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== BF && void 0 !== BF ? BF : "Unsaved recording", jW ? " *" : ""]
                    }), (0, PF.jsxs)(kS, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        TW("replayLoad")
                      },
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, PF.jsxs)(AS.e, {
                      className: "ReplayViewerActionButton",
                      onClick: XF.d,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, PF.jsxs)(qS, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        TW("replaySave")
                      },
                      disabled: !YF,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, PF.jsxs)(AS.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        eF.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !YF,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, PF.jsxs)(VW, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        TW("replaySaveAs")
                      },
                      disabled: !YF,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, PF.jsxs)(AS.e, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        eF.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !YF || 0 === zW || JF,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, PF.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, PF.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, PF.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, PF.jsx)(NF.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, PF.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, PF.jsx)(cW.g, {
                        tooltipInner: (0, PF.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, PF.jsxs)(AS.N, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === KF,
                          onClick: () => {
                            aS("recording")
                          },
                          disabled: !YF,
                          children: ["Recorded ", (0, PF.jsx)(GF.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, PF.jsx)(cW.g, {
                        tooltipInner: (0, PF.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, PF.jsxs)(AS.N, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === KF,
                          onClick: () => {
                            aS("freecam")
                          },
                          disabled: !YF,
                          children: ["Free ", (0, PF.jsx)(GF.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, PF.jsx)(cW.g, {
                        tooltipInner: (0, PF.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, PF.jsxs)(AS.N, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === KF,
                          onClick: () => {
                            aS("keyframe")
                          },
                          disabled: !YF,
                          children: ["Preview ", (0, PF.jsx)(GF.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, PF.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, PF.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, PF.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, PF.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: QA(nF, sF)
                      }), (0, PF.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, PF.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: QA(IF, sF)
                      })]
                    }), (0, PF.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", nF, " / ", IF]
                    })]
                  }), (0, PF.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, PF.jsxs)(AS.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        gS("replaySkipBack")
                      },
                      disabled: !YF,
                      children: [(0, PF.jsxs)("span", {
                        children: [" ", (0, PF.jsx)(GF.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, PF.jsx)(NF.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, PF.jsxs)(AS.k, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        eF.gameBridge.send("setReplayPlaying", !fF)
                      },
                      disabled: !YF,
                      children: [(0, PF.jsxs)("span", {
                        children: [" ", fF ? (0, PF.jsx)(GF.e, {
                          name: "pause"
                        }) : (0, PF.jsx)(GF.e, {
                          name: "play"
                        }), " "]
                      }), (0, PF.jsx)(NF.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, PF.jsxs)(AS.e, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        gS("replaySkipForward")
                      },
                      disabled: !YF,
                      children: [(0, PF.jsxs)("span", {
                        children: [" ", (0, PF.jsx)(GF.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, PF.jsx)(NF.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, PF.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, PF.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, PF.jsxs)(AS.k, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        gS("replayRecordKeyframe")
                      },
                      disabled: !YF,
                      children: [(0, PF.jsx)(NF.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, PF.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, PF.jsx)(wA, {
                      disabled: !YF
                    }), UF && (0, PF.jsx)(AS.N, {
                      className: "ReplayViewerActionButton",
                      onClick: PW,
                      disabled: !YF,
                      children: (0, PF.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, PF.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, PF.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, PF.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, PF.jsx)(AS.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          gS("replaySpeedDown")
                        },
                        disabled: !YF || (0, FA.e)(yW),
                        children: (0, PF.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, PF.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [yW, "\xd7"]
                      }), (0, PF.jsx)(AS.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          gS("replaySpeedUp")
                        },
                        disabled: !YF || (0, FA.c)(yW),
                        children: (0, PF.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, PF.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, PF.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, PF.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, PF.jsxs)(AS.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          TW("replayTimelineZoomOut")
                        },
                        disabled: !YF || aW <= RA[0],
                        children: [(0, PF.jsx)("span", {
                          children: " \u2212 "
                        }), (0, PF.jsx)(NF.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, PF.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: ru(aW)
                      }), (0, PF.jsxs)(AS.e, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          TW("replayTimelineZoomIn")
                        },
                        disabled: !YF || aW >= RA[RA.length - 1],
                        children: [(0, PF.jsx)("span", {
                          children: " + "
                        }), (0, PF.jsx)(NF.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, PF.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !YF && "Load a recording to begin playback"
              }), tW && (0, PF.jsx)("div", {
                className: "ReplayViewerError",
                children: tW
              })]
            })]
          })]
        })
      }));
    var pA = SF(1175);

    function lA() {
      const [, FF] = (0, CF.useState)(0);
      return (0, bW.e)("replayViewer|uiVisibilityChanged", (() => {
          FF((FF => FF + 1))
        })), (0, bW.e)("replayViewer|replayLoaded", (() => {
          FF((FF => FF + 1))
        })),
        function() {
          if (!(0, pA.i)()) return {};
          const FF = {
              [nA.d]: "true"
            },
            WF = (0, HA.e)();
          for (const {
              group: SF,
              dataAttr: CF
            }
            of nA.e) CF && !WF[SF] && (FF[CF] = "true");
          return FF
        }()
    }
    var Fu = SF(8204),
      Wu = SF(1678),
      Su = SF(7637),
      Cu = SF(7629),
      Au = SF(1686);
    const uu = (0, CF.memo)((function() {
      var FF, WF, SF;
      const AF = (0, tW.k)("customButtons");
      (0, CF.useEffect)((() => AF ? (eF.gameBridge.send("bindCustomButtonKeys", AF.filter(Su.e).map((FF => {
        let {
          id: WF,
          keycode: SF
        } = FF;
        return {
          id: WF,
          keycode: SF
        }
      }))), () => {
        eF.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [AF]);
      const uF = null !== (FF = null === AF || void 0 === AF ? void 0 : AF.filter(Su.e)) && void 0 !== FF ? FF : [],
        hF = (0, Cu.l)(),
        bW = null !== (WF = null === (SF = (0, Au.e)()) || void 0 === SF ? void 0 : SF.hideButtonHints) && void 0 !== WF && WF,
        dF = "customButton" !== (null === hF || void 0 === hF ? void 0 : hF.kind) || bW ? null : hF.id,
        RF = uF.length > 0,
        iW = (0, CF.useRef)(null);
      return (0, CF.useLayoutEffect)((() => {
        if (!RF) return () => {};
        const FF = iW.current,
          WF = FF.closest(".InGameUi"),
          SF = () => {
            WF.style.setProperty("--custom-buttons-top", `${FF.offsetTop}px`)
          };
        SF();
        const CF = new ResizeObserver(SF);
        return CF.observe(FF), CF.observe(FF.parentElement), () => {
          CF.disconnect(), WF.style.removeProperty("--custom-buttons-top")
        }
      }), [RF]), (0, PF.jsx)("div", {
        ref: iW,
        className: "" + ((0, VC.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: uF.map((FF => {
          var WF, SF;
          return (0, PF.jsx)(hu, {
            button: FF,
            padGlyph: FF.id === dF && null !== (WF = null === (SF = (0, yW.g)()) || void 0 === SF ? void 0 : SF.getBoundButton("actionButton")) && void 0 !== WF ? WF : null
          }, FF.id)
        }))
      })
    }));

    function hu(FF) {
      let {
        button: WF,
        padGlyph: SF
      } = FF;
      const AF = (0, CF.useRef)(null),
        uF = () => {
          null !== AF.current && (AF.current = null, eF.gameBridge.send("pressCustomButton", {
            id: WF.id,
            down: !1
          }))
        };
      (0, CF.useEffect)((() => uF), []);
      const hF = DW(uF, {
          pressesOnPointerDown: !0
        }),
        bW = FF => {
          AF.current === FF.pointerId && uF()
        };
      return (0, PF.jsxs)("div", {
        className: "CustomIcon",
        ...hF,
        onLostPointerCapture: bW,
        children: [(0, PF.jsx)(Wu.e, {
          icon: WF.icon,
          keyboardHint: (0, Su.b)(WF.keycode),
          padGlyph: SF,
          onPointerDown: FF => {
            FF.currentTarget.setPointerCapture(FF.pointerId), null === AF.current && eF.gameBridge.send("pressCustomButton", {
              id: WF.id,
              down: !0
            }), AF.current = FF.pointerId
          },
          onPointerUp: bW,
          onPointerCancel: bW,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), WF.description && (0, PF.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: WF.description
        })]
      })
    }
    var bh = SF(1951),
      du = SF(35084);
    const Pu = (0, CF.memo)((function() {
        const {
          isUiHidden: FF,
          isUiHiddenByCamera: WF,
          isTouchScreen: SF
        } = (0, VF.d)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), AF = (0, uC.e)(), hF = lA(), bW = (0, tW.k)("showKillfeed");
        return (0, CF.useEffect)((() => {
            let FF;
            const WF = () => {
                clearTimeout(FF), FF = setTimeout((() => {
                  eF.gameBridge.latest("connectedGame").replay || (eF.gameBridge.send("leaveGame", {
                    reloadPath: "/"
                  }), (0, EF.navigatePreserveSearch)("/"))
                }), 3e5)
              },
              SF = () => {
                clearTimeout(FF)
              };
            return window.addEventListener("focus", SF), window.addEventListener("blur", WF), () => {
              window.removeEventListener("blur", WF), window.removeEventListener("focus", SF), clearTimeout(FF)
            }
          }), []),
          function() {
            const FF = (0, tW.k)("inventoryColourOverride");
            (0, CF.useEffect)((() => {
              if (!FF) return;
              const {
                panel: WF,
                slot: SF,
                slotSelected: CF,
                slotUnavailable: AF
              } = nF(FF), uF = document.documentElement.style;
              return uF.setProperty("--InventoryPanelColour", WF), uF.setProperty("--InventorySlotColour", SF), uF.setProperty("--InventorySlotSelectedColour", CF), uF.setProperty("--InventorySlotUnavailableColour", AF), () => {
                uF.removeProperty("--InventoryPanelColour"), uF.removeProperty("--InventorySlotColour"), uF.removeProperty("--InventorySlotSelectedColour"), uF.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [FF])
          }(), (0, CF.useEffect)((() => {
            const FF = setTimeout((() => {
              (0, TF.f)()
            }), 0);
            return () => {
              clearTimeout(FF), TF.j.oR(!1)
            }
          }), []), (0, PF.jsxs)(PF.Fragment, {
            children: [(0, PF.jsxs)("div", {
              className: uF()("InGameUi", {
                Hidden: FF,
                HiddenByCamera: WF
              }),
              ...hF,
              children: [(0, PF.jsx)(TS.d, {}), (0, PF.jsx)(NS, {}), (0, PF.jsx)(DS, {}), (0, PF.jsx)(ZC, {}), (0, PF.jsx)(IC, {}), SF && (0, TW.m)() && (0, PF.jsx)(yA, {}), (0, PF.jsx)(jS, {}), (0, PF.jsx)(fS.e, {}), (0, PF.jsx)(XS, {}), (0, PF.jsx)(tC, {}), (0, PF.jsx)(cA.c, {}), (0, PF.jsx)(vu, {}), (0, PF.jsx)(nC.e, {}), (0, PF.jsx)(HC.f, {}), (0, PF.jsx)(JW.h, {}), (0, PF.jsx)(rh, {
                showChat: AF
              }), (0, PF.jsx)(KC.h, {}), (0, PF.jsx)(MC, {}), (0, PF.jsxs)("div", {
                className: uF()("RightElements", {
                  RightElementsTouchscreen: SF
                }),
                "data-camera-keeper-host": "",
                children: [(0, PF.jsxs)("div", {
                  className: KC.g,
                  children: [(0, PF.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    children: [(0, PF.jsx)(tA.d, {}), (0, PF.jsx)(zW, {}), (0, PF.jsx)(lS.c, {}), VC.featureFlags.useSocialFeatures && (0, PF.jsx)(FC.e, {
                      placement: "inGame"
                    }), bW && (0, PF.jsx)(IS, {}), (0, PF.jsx)(Fu.d, {})]
                  }), VC.featureFlags.useSocialFeatures && (0, PF.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, PF.jsx)(OC.e, {})
                  })]
                }), (0, PF.jsx)(JW.c, {
                  placement: "topRight"
                }), (0, PF.jsx)(gh, {})]
              }), (0, PF.jsx)("div", {
                className: "LeftCentre",
                children: (0, PF.jsx)(uu, {})
              }), (0, PF.jsxs)("div", {
                className: "BottomCentre",
                children: [(0, PF.jsx)(xW, {}), (0, PF.jsx)(Ru, {}), (0, PF.jsxs)("div", {
                  className: "BottomElements",
                  children: [(0, PF.jsxs)("div", {
                    className: "BottomLeftElements",
                    children: [(0, PF.jsx)(CC, {}), !SF && (0, PF.jsx)(bh.c, {})]
                  }), (0, PF.jsx)(Qu, {}), (0, PF.jsx)(BS, {
                    isTouchScreen: SF
                  })]
                })]
              }), (0, PF.jsx)("div", {
                className: "MiddleLeft"
              }), SF && (0, PF.jsx)(OW, {}), (0, PF.jsx)("div", {
                className: "CameraFadeHost",
                ref: du.g
              })]
            }), (0, PF.jsx)(pC.c, {}), (0, PF.jsx)(AC.c, {})]
          })
      })),
      Ru = (0, CF.memo)((function() {
        const FF = (0, bW.i)("aimingOverlay", "none");
        (0, rW.e)();
        const WF = (0, tW.l)("middleTextUpper"),
          SF = (0, tW.l)("middleTextLower");
        return (0, PF.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === FF ? {
            visibility: "hidden"
          } : {},
          children: [(0, PF.jsx)(Eu, {
            text: WF,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: ih
          }), (0, PF.jsx)(Eu, {
            text: SF,
            className: "MiddleText",
            maxHeightFraction: eu
          })]
        })
      })),
      ih = .3,
      eu = .2;

    function Eu(FF) {
      let {
        text: WF,
        className: SF,
        maxHeightFraction: AF
      } = FF;
      const uF = (0, CF.useRef)(null),
        hF = (0, CF.useRef)(null);
      return function(FF, WF, SF, AF) {
        (0, CF.useLayoutEffect)((() => {
          const CF = FF.current,
            AF = WF.current;
          if (!CF || !AF) return;
          let uF = -1,
            hF = -1;
          const bW = FF => (AF.style.setProperty("zoom", String(FF)), CF.getBoundingClientRect().height),
            dF = () => {
              const FF = document.documentElement.clientHeight * SF;
              let WF = 1;
              if (bW(1) > FF) {
                let SF = .5,
                  CF = 1;
                for (let WF = 0; WF < 6; WF++) {
                  const WF = (SF + CF) / 2;
                  bW(WF) <= FF ? SF = WF : CF = WF
                }
                WF = SF
              }
              hF = bW(WF), uF = CF.getBoundingClientRect().width
            };
          dF();
          let PF = 0;
          const RF = () => {
              cancelAnimationFrame(PF), PF = requestAnimationFrame(dF)
            },
            iW = new ResizeObserver((() => {
              const {
                width: FF,
                height: WF
              } = CF.getBoundingClientRect();
              FF === uF && WF === hF || RF()
            }));
          return iW.observe(CF), window.addEventListener("resize", RF), () => {
            iW.disconnect(), window.removeEventListener("resize", RF), cancelAnimationFrame(PF), AF.style.removeProperty("zoom")
          }
        }), [FF, WF, SF, AF])
      }(uF, hF, AF, WF.content), (0, PF.jsx)("div", {
        ref: uF,
        className: "MiddleTextFit",
        children: (0, PF.jsx)(wC.b, {
          ref: hF,
          text: WF,
          className: SF
        })
      })
    }
    const Qu = (0, CF.memo)((function() {
        const FF = (0, bW.i)("aimingOverlay", "none");
        (0, rW.e)();
        const WF = (0, tW.k)("useInventory");
        return (0, PF.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === FF ? {
            visibility: "hidden"
          } : {},
          children: [(0, PF.jsx)(RF, {}), (0, PF.jsx)(JW.c, {}), (0, PF.jsx)(pW, {}), (0, PF.jsx)(mA, {}), (0, PF.jsxs)("div", {
            className: "HotBarRow",
            children: [WF ? (0, PF.jsx)(fF.b, {}) : (0, PF.jsx)(fF.c, {}), (0, PF.jsx)(sF, {})]
          })]
        })
      })),
      rh = (0, CF.memo)((function(FF) {
        let {
          showChat: WF
        } = FF;
        const {
          t: SF
        } = (0, OF.B)(), {
          clientEscMenuOptions: AF
        } = (0, VF.d)(["clientEscMenuOptions"]);
        (0, rW.e)();
        const {
          userContext: uF,
          isUserContextUpdating: hF
        } = (0, QF.b)(), bW = (0, tW.k)("hideCoordinates"), dF = (0, tW.k)("customVariationTitle"), {
          requestedGameNameWithVariation: RF,
          gameNameWithVariation: eF,
          lobbyName: EF,
          shownLobbyName: TF
        } = (0, qW.e)("connectedGame"), aW = (0, iW.d)(RF, EF, !1), [kW, NF] = (0, CF.useState)(null), DF = (0, kA.l)(eF || RF || ""), LF = dF || DF || "";
        return (0, CF.useEffect)((() => {
          hF || aA.b.getFavouriteLobbies(uF).then((FF => {
            console.log("Got favourite lobbies", FF), NF(FF)
          }))
        }), [hF, uF]), (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsxs)("div", {
            className: KC.d,
            children: [(0, PF.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, PF.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: FF => {
                  FF.stopPropagation(), FF.preventDefault()
                },
                onClick: () => {
                  VF.b.set({
                    openEverythingMenuName: gW.n.SETTINGS
                  })
                },
                children: [(0, PF.jsx)(TC.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, PF.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, PF.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === aW && (0, PF.jsx)(TC.c, {}), null !== aW && (0, PF.jsxs)(PF.Fragment, {
                  children: [aW, LF && ` ${LF}`]
                })]
              }), (0, PF.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, PF.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: TF
              }), (0, qA.D)(EF) && (0, PF.jsx)(cW.g, {
                tooltipInner: (0, PF.jsx)("div", {
                  children: SF(null !== kW && kW.includes(EF) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, PF.jsx)("div", {
                  children: (0, PF.jsx)(AS.s, {
                    isLiked: null !== kW && kW.includes(EF),
                    onClick: () => {
                      try {
                        if (!kW) return;
                        kW.includes(EF) ? (aA.b.unfavouriteLobby(uF, EF).catch((FF => {
                          console.error("Failed to favourite lobby", FF)
                        })), NF(kW.filter((FF => FF !== EF)))) : (aA.b.favouriteLobby(uF, EF).catch((FF => {
                          console.error("Failed to favourite lobby", FF)
                        })), NF([...kW, EF]))
                      } catch (FF) {
                        console.error("Failed to like lobby", FF)
                      }
                    },
                    isLoading: null === kW
                  })
                })
              }), (0, PF.jsx)(jA, {})]
            }), (0, PF.jsx)(eC, {
              show: AF.showFPS
            }), !bW && AF.showCoordinates && (0, PF.jsx)(rA, {}), !bW && AF.showChunkCoordinates && (0, PF.jsx)(gA, {}), (0, PF.jsx)(XC, {})]
          }), (0, PF.jsx)("div", {
            className: "TopLeftElements",
            children: (0, PF.jsx)("div", {
              className: "InGameHeaderAndChat",
              children: WF && (0, PF.jsx)(wF.b, {})
            })
          })]
        })
      })),
      gh = (0, CF.memo)((function() {
        (0, rW.e)();
        const FF = (0, tW.l)("RightInfoText");
        return FF.hasText ? (0, PF.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, PF.jsx)(wC.b, {
            text: FF,
            className: "RightInfoDiv",
            children: (0, PF.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, PF.jsx)(dF.d, {
                text: FF.content
              })
            })
          })
        }) : null
      }))
  },
  35044: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => eF,
      f: () => RF,
      j: () => iW
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(1563),
      bW = SF(971);
    const dF = 350;
    let PF = 0;

    function RF() {
      return PF += 1, PF
    }

    function iW(FF, WF) {
      let SF = 0;
      for (const CF of FF) "ingredient" !== CF.kind && CF.fK === WF && (SF += CF.amount);
      return SF > 0 ? {
        idx: WF,
        amount: SF
      } : null
    }

    function eF(FF) {
      var WF, SF;
      let {
        anim: AF,
        onComplete: PF
      } = FF;
      const RF = null !== (WF = AF.delayMs) && void 0 !== WF ? WF : 0,
        iW = null !== (SF = AF.durationMs) && void 0 !== SF ? SF : dF,
        [eF, EF] = (0, CF.useState)(AF.from),
        [QF, rW] = (0, CF.useState)(0 === RF),
        [gW, tW] = (0, CF.useState)(!1),
        TF = (0, CF.useRef)(!1);
      return (0, CF.useEffect)((() => {
        let FF, WF;
        const SF = () => {
            TF.current = !0, rW(!0), FF = requestAnimationFrame((() => {
              WF = requestAnimationFrame((() => {
                EF({
                  x: AF.to.x,
                  y: AF.to.y
                }), tW(!0)
              }))
            }))
          },
          CF = TF.current ? 0 : RF;
        let uF;
        CF > 0 ? uF = setTimeout(SF, CF) : SF();
        const hF = setTimeout((() => {
          PF(AF.id)
        }), CF + iW + 50);
        return () => {
          clearTimeout(uF), cancelAnimationFrame(FF), cancelAnimationFrame(WF), clearTimeout(hF)
        }
      }), [AF.id, AF.to.x, AF.to.y, PF, RF, iW]), (0, bW.jsx)("div", {
        className: uF()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === AF.kind,
          Waiting: !QF,
          Arrived: gW
        }),
        style: {
          left: eF.x,
          top: eF.y,
          "--fly-duration": `${iW}ms`
        },
        children: (0, bW.jsx)(hF.b, {
          itemName: AF.itemName,
          amount: AF.amount
        })
      })
    }
  },
  35027: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => YF,
      c: () => GF
    });
    var CF = SF(46),
      AF = SF(2279),
      uF = SF(5538),
      hF = SF(1693),
      bW = SF(1678),
      dF = SF(1955),
      PF = SF(7763),
      RF = SF(271),
      iW = SF(20),
      eF = SF(1262),
      EF = SF(89),
      QF = SF(33),
      rW = SF(918),
      gW = SF.n(rW),
      tW = SF(220),
      TF = SF(35034),
      aW = SF(990),
      kW = SF(1546),
      qW = SF(7612),
      VF = SF(971);

    function NF(FF) {
      var WF, SF;
      let {
        selectedItem: uF,
        slotIdx: hF,
        ammo: bW
      } = FF;
      const [PF, iW] = (0, CF.useState)(!1), eF = (0, CF.useRef)(null), [EF, QF] = (0, CF.useState)(null), [rW, tW] = (0, CF.useState)(null), TF = (0, dF.k)("maxAuraLevel"), NF = (0, AF.d)(), DF = (0, CF.useCallback)((() => {
        if (clearTimeout(eF.current), uF) {
          var FF, WF, SF, CF;
          const dF = uF.displayName,
            PF = [],
            iW = Array.isArray(dF) ? dF : [dF],
            eF = {
              fontStyle: null !== (FF = uF.attributes.customAttributes) && void 0 !== FF && FF.author ? "italic" : "normal"
            };
          for (const FF of iW) FF.str ? PF.push(FF) : PF.push({
            str: FF,
            style: eF
          });
          if (null !== (WF = uF.attributes.customAttributes) && void 0 !== WF && WF.enchantments) {
            PF.push(" ");
            const FF = Object.entries(uF.attributes.customAttributes.enchantments).sort(((FF, WF) => WF[1] - FF[1])),
              WF = uF.attributes.customAttributes.enchantmentData;
            for (const [SF, CF] of FF) {
              var AF, hF;
              const FF = null !== (AF = null === WF || void 0 === WF || null === (hF = WF[SF]) || void 0 === hF ? void 0 : hF.icon) && void 0 !== AF ? AF : `${SF} Enchantment`;
              var bW;
              if (CF < 4)
                for (let WF = 0; WF < CF; WF++) PF.push({
                  icon: FF,
                  style: {
                    fontSize: "1.5em"
                  }
                });
              else PF.push({
                icon: FF,
                style: {
                  fontSize: "1.5em"
                }
              }), PF.push(null !== (bW = (0, RF.O)(CF)) && void 0 !== bW ? bW : CF.toString())
            }
          }
          QF(PF), tW(null !== (SF = null === (CF = uF.attributes.customAttributes) || void 0 === CF ? void 0 : CF.enchantmentTier) && void 0 !== SF ? SF : null)
        } else QF(null), tW(null);
        iW(!0), NF();
        const dF = null === uF || void 0 === uF ? void 0 : uF.attributes.customAttributes;
        void 0 === (null === dF || void 0 === dF ? void 0 : dF.shotsLeft) && (eF.current = setTimeout((() => {
          iW(!1)
        }), 2e3))
      }), [null === uF || void 0 === uF ? void 0 : uF.name, hF, null === uF || void 0 === uF ? void 0 : uF.instance, null === uF || void 0 === uF ? void 0 : uF.displayName]);
      (0, CF.useEffect)((() => (DF(), () => {
        clearTimeout(eF.current), iW(!1)
      })), [null === uF || void 0 === uF ? void 0 : uF.name, hF, null === uF || void 0 === uF ? void 0 : uF.instance, DF]);
      const LF = null === uF || void 0 === uF || null === (WF = uF.attributes.customAttributes) || void 0 === WF ? void 0 : WF.shotsLeft,
        mW = void 0 === LF ? null : (0, VF.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${LF}|${uF.requiresAmmo?`${bW}x${uF.clipSize}`:uF.clipSize}`
        }),
        OF = (0, aW.f)(),
        xW = (0, qW.j)();
      return (0, VF.jsx)(VF.Fragment, {
        children: PF && uF && !xW.showing ? (0, VF.jsxs)("div", {
          className: gW()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === TF,
            Enchanted: null !== rW
          }),
          style: {
            bottom: `${Math.min(Math.round(.05*OF),70)}px`,
            "--enchantmentColour": null !== (SF = RF.sb[rW]) && void 0 !== SF ? SF : RF.sb.None,
            "--duration": rW ? (0, RF.lb)(rW) + "s" : void 0
          },
          children: [rW && (0, VF.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, VF.jsx)(kW.d, {
              text: EF
            }), mW]
          }), (0, VF.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, VF.jsx)(kW.d, {
              text: EF
            }), mW]
          })]
        }) : null
      })
    }
    var DF = SF(35044),
      LF = SF(11),
      mW = SF(1576),
      OF = SF(1607),
      xW = SF(568),
      ZF = SF(35052);

    function oF() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    const YF = (0, CF.memo)((function() {
      var FF;
      const [WF, SF] = (0, CF.useState)(0), bW = (0, dF.k)("useFullInventory"), {
        isTouchScreen: PF,
        openInGameMenuName: RF
      } = (0, LF.d)(["isTouchScreen", "openInGameMenuName"]), QF = null !== RF && "inventory" !== RF, rW = (0, hF.b)(oF);
      (0, CF.useLayoutEffect)((() => ((0, ZF.g)(), ZF.g)), [PF, rW]);
      const [tW, aW] = (0, uF.c)("changedHotbarUsingNumkeys", !(0, EF.isMobile)()), kW = (0, OF.e)("hotbar"), qW = null !== (FF = kW.selectedSlot) && void 0 !== FF ? FF : WF, YF = kW.items[qW], [zW, IF] = (0, CF.useState)(!1), yW = (0, AF.d)(), sF = (0, CF.useRef)(null);
      (0, eF.e)("inventoryComponentVisible", (FF => {
        IF(FF)
      }));
      const nF = (0, eF.i)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, eF.e)("inventoryDraggedItemUpdated", (FF => {
        sF.current = FF, yW()
      })), (0, OF.b)("hotbarScrolled", (FF => {
        null === kW.selectedSlot && KF(FF)
      })), (0, OF.b)("hotbarSlotRequested", (FF => {
        HF(FF), aW(!1)
      })), (0, OF.b)("numberKeyPressed", (() => {
        aW(!1)
      })), (0, OF.b)("hotbarDropRequested", (FF => {
        if (YF) {
          var WF;
          const SF = FF && null !== (WF = YF.amount) && void 0 !== WF ? WF : 1;
          mW.gameBridge.send("removeInventoryItem", {
            slot: qW,
            amount: SF,
            drop: !0
          })
        }
      }));
      const HF = FF => {
          mW.gameBridge.send("selectHotbarSlot", FF), SF(FF)
        },
        KF = FF => {
          HF((qW + FF + xW.q) % xW.q)
        };
      let wF, XF = null,
        UF = null,
        BF = FF => FF => {},
        jW = FF => WF => {
          HF(FF)
        },
        vW = FF => FF => {},
        JF = [];
      if (zW) {
        var pF;
        const FF = sF.current;
        if (null === FF || void 0 === FF || !FF.setHovered) return (0, VF.jsx)("div", {
          className: gW()("HotBarContainer", {
            Touch: PF,
            KeysAbove: PF && !rW
          }),
          children: (0, VF.jsx)("div", {
            className: "HotBar"
          })
        });
        XF = FF.draggedInfo, UF = FF.specialItemInfo, BF = FF.setHovered, jW = FF.pointerDown, vW = FF.pointerUp, wF = FF.variation, JF = null !== (pF = FF.craftFlyAnims) && void 0 !== pF ? pF : []
      }
      return (0, VF.jsxs)("div", {
        className: gW()("HotBarContainer", {
          Touch: PF,
          PopupOpen: PF && QF,
          KeysAbove: PF && !rW
        }),
        children: [(0, VF.jsxs)("div", {
          className: gW()("HotBar", {
            HoverDisabled: nF
          }),
          children: [PF && (0, VF.jsxs)(VF.Fragment, {
            children: [(0, VF.jsx)(cW, {
              useFullInventory: bW,
              inventoryOpen: zW
            }), (0, VF.jsx)(MF, {
              direction: "Previous",
              onPress: () => {
                KF(-1)
              }
            })]
          }), !PF && (0, VF.jsxs)(VF.Fragment, {
            children: [(0, VF.jsx)(GF, {}), (0, VF.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, VF.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((FF, WF) => (0, VF.jsx)(TF.d, {
              idx: WF,
              draggedInfo: XF,
              specialItemInfo: UF,
              craftFlyHoldbackInfo: (0, DF.j)(JF, WF),
              setHovered: BF(WF),
              pointerDown: jW(WF),
              pointerUp: vW(WF),
              variation: wF,
              isSelected: WF === qW,
              hoverDisabled: nF,
              showNumber: tW
            }, WF)))
          }), PF && (0, VF.jsx)(MF, {
            direction: "Next",
            onPress: () => {
              KF(1)
            }
          }), !PF && (0, VF.jsxs)(VF.Fragment, {
            children: [(0, VF.jsx)("div", {
              className: "HotBarFiller"
            }), (0, VF.jsx)("div", {
              className: gW()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !bW
              }),
              onPointerDown: () => {
                iW.j.Uu("toggleMenu", "inventory")
              },
              children: (0, VF.jsx)(fF, {})
            })]
          })]
        }), (0, VF.jsx)(NF, {
          selectedItem: YF,
          slotIdx: qW,
          ammo: kW.ammo
        })]
      })
    }));

    function MF(FF) {
      let {
        direction: WF,
        onPress: SF
      } = FF;
      return (0, VF.jsx)("div", {
        className: gW()("HotBarArrow", WF),
        children: (0, VF.jsx)(bW.e, {
          icon: "Previous" === WF ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          showPress: !0,
          onClick: SF
        })
      })
    }
    const cW = (0, CF.memo)((function(FF) {
        let {
          useFullInventory: WF,
          inventoryOpen: SF
        } = FF;
        const CF = (0, dF.k)("maxAuraLevel");
        return (0, VF.jsxs)("div", {
          className: gW()("TouchInventoryKeys", {
            NoAuraBar: 0 === CF,
            InventoryOpen: SF
          }),
          children: [(0, VF.jsx)(GF, {
            touchKey: !0
          }), (0, VF.jsx)("div", {
            className: gW()("TouchInventoryKey BagKey", {
              Hidden: !WF
            }),
            children: (0, VF.jsx)(fF, {
              touchKey: !0
            })
          })]
        })
      })),
      GF = (0, CF.memo)((function(FF) {
        let {
          touchKey: WF = !1
        } = FF;
        const SF = (0, PF.c)();
        return (0, VF.jsx)("div", {
          className: WF ? gW()("TouchInventoryKey ShopKey", {
            Hidden: !SF
          }) : gW()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !SF
          }),
          children: (0, VF.jsx)(bW.e, {
            icon: (0, RF.ec)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            showPress: WF,
            onClick: FF => {
              LF.b.set({
                openEverythingMenuName: tW.n.SHOP
              }), FF.stopPropagation()
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function zW(FF) {
      let {
        player: WF
      } = FF;
      return WF.some((FF => null !== FF && RF.Sc.includes(FF.name)))
    }

    function IF(FF) {
      FF.creative || QF.h.getItem("LogInInventoryRedDotTutorialComplete") || (zW(FF) ? (iW.j.Uu("RedDotOpenInventoryIcon", !0), iW.j.Uu("TouchTutorialOpenInventoryIcon", !0)) : (iW.j.Uu("RedDotOpenInventoryIcon", !1), iW.j.Uu("TouchTutorialOpenInventoryIcon", !1)))
    }
    const fF = (0, CF.memo)((function(FF) {
      let {
        touchKey: WF = !1
      } = FF;
      return (0, CF.useEffect)((() => {
        IF(mW.gameBridge.latest("inventory"))
      }), []), (0, OF.b)("inventory", IF), (0, eF.e)("toggleMenu", (FF => {
        null !== FF && void 0 !== FF && FF.startsWith("inventory") && zW(mW.gameBridge.latest("inventory")) ? (QF.h.setItem("LogInInventoryRedDotTutorialComplete", !0), iW.j.Uu("RedDotOpenInventoryIcon", !1), iW.j.Uu("TouchTutorialOpenInventoryIcon", !1)) : "shop" === FF && iW.j.Uu("showShopTouchTutorial", !1)
      })), WF ? (0, VF.jsx)(bW.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        showPress: !0,
        onClick: () => {
          iW.j.Uu("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, VF.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          iW.j.Uu("toggleMenu", "inventory")
        },
        children: (0, VF.jsx)(bW.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: FF => {
            iW.j.Uu("toggleMenu", "inventory"), FF.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35034: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => gW,
      e: () => QF
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(1572),
      bW = SF(1563),
      dF = SF(1576),
      PF = SF(1607),
      RF = SF(35041),
      iW = SF(8220),
      eF = SF(1223),
      EF = SF(971);
    const QF = (FF, WF, SF) => {
      let CF = WF,
        AF = !1;
      for (const uF of SF)(null === uF || void 0 === uF ? void 0 : uF.idx) === FF && (AF = !0, CF > 0 && (CF -= uF.amount));
      return {
        displayedAmt: CF,
        shown: !AF || CF > 0
      }
    };
    const rW = FF => {
        let {
          idx: WF
        } = FF;
        return (0, eF.r)() ? null : (0, EF.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: WF < 9 ? WF + 1 : 0
        })
      },
      gW = (0, CF.memo)((function(FF) {
        var WF, SF, CF;
        let {
          idx: AF,
          setHovered: eF,
          pointerDown: gW,
          pointerUp: tW,
          draggedInfo: TF,
          specialItemInfo: aW,
          craftFlyHoldbackInfo: kW,
          defaultIconB64: qW = null,
          variation: VF,
          isSelected: NF = !1,
          hoverDisabled: DF = !1,
          showNumber: LF = !1,
          showNewDot: mW = !1
        } = FF;
        const OF = (0, PF.c)("inventory", (FF => AF === RF.g ? null : (0, iW.h)(FF, AF)));
        let xW, ZF, oF, YF;
        if (AF === RF.g) aW && (xW = aW.name, oF = aW.amount, YF = aW.attributes);
        else if (OF) {
          var MF;
          xW = OF.name, ZF = OF.icon, oF = null !== (MF = OF.amount) && void 0 !== MF ? MF : 0, YF = OF.attributes
        }
        const cW = null === (WF = YF) || void 0 === WF || null === (SF = WF.customAttributes) || void 0 === SF ? void 0 : SF.enchantmentTier,
          GF = (0, hF.k)(YF),
          {
            displayedAmt: zW,
            shown: IF
          } = QF(AF, oF, [TF, aW, kW]),
          fF = xW && IF,
          yW = void 0 !== VF && function(FF, WF) {
            const {
              enchantable: SF,
              salvageable: CF
            } = dF.gameBridge.latest("stationItems");
            return "Enchanting Table" === FF ? !0 === SF[WF] : "Salvaging Table" === FF && !0 === CF[WF]
          }(VF, xW);
        return (0, EF.jsxs)("div", {
          className: uF()("InvenItem", {
            Highlighted: fF && yW,
            Selected: NF,
            HoverDisabled: DF
          }),
          onPointerEnter: () => {
            null === eF || void 0 === eF || eF(!0)
          },
          onPointerLeave: () => {
            null === eF || void 0 === eF || eF(!1)
          },
          onPointerDown: gW,
          onPointerUp: tW,
          "data-inven-idx": AF,
          children: [fF && (0, EF.jsx)(bW.b, {
            itemName: null !== (CF = ZF) && void 0 !== CF ? CF : xW,
            amount: zW,
            enchantmentTier: cW,
            bar: GF
          }), fF && mW && (0, EF.jsx)("div", {
            className: "InvenItemNewDot"
          }), LF && (0, EF.jsx)(rW, {
            idx: AF
          }), qW && !fF && (0, EF.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${qW})`
            }
          })]
        })
      }))
  },
  35041: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF,
      g: () => AF
    });
    const CF = -1,
      AF = -2
  },
  35481: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => DF
    });
    var CF = SF(46),
      AF = SF(1955),
      uF = SF(1546),
      hF = SF(553),
      bW = SF(20),
      dF = SF(918),
      PF = SF.n(dF),
      RF = SF(89),
      iW = SF(35077),
      eF = SF(2020),
      EF = SF(35079),
      QF = SF(2056),
      rW = SF(2024),
      gW = SF(2791),
      tW = SF(11),
      TF = SF(1656),
      aW = SF(1923),
      kW = SF(1085),
      qW = SF(3907),
      VF = SF(1607),
      NF = SF(971);
    const DF = (0, CF.memo)((function() {
      const FF = (0, AF.k)("lobbyLeaderboardInfo"),
        WF = (0, VF.e)("players"),
        SF = (0, VF.e)("lobbyLeaderboardRows"),
        bW = (0, VF.e)("hiddenPlayerNames"),
        dF = (0, CF.useRef)(null),
        [PF, RF] = (0, CF.useReducer)((FF => FF + 1), 0);
      return (0, CF.useEffect)((() => (0, TF.c)((() => {
        RF()
      }))), []), (0, NF.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, NF.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!FF) return (0, NF.jsx)(NF.Fragment, {});
            const CF = JSON.parse(JSON.stringify(FF)),
              AF = [...WF.ids],
              PF = {},
              RF = {};
            for (const FF of AF) {
              var iW, eF;
              PF[FF] = null === (iW = SF[FF]) || void 0 === iW ? void 0 : iW.colour;
              const WF = null === (eF = SF[FF]) || void 0 === eF ? void 0 : eF.values;
              WF && (RF[FF] = {
                ...WF
              })
            }
            const EF = Object.keys(CF);
            EF.sort(((FF, WF) => CF[FF].sortPriority - CF[WF].sortPriority)), AF.sort(((FF, WF) => {
              if (!RF[FF] || !RF[WF]) return 0;
              for (const SF of EF) {
                const AF = RF[FF][SF],
                  uF = RF[WF][SF];
                let hF = 0;
                if ("string" == typeof AF && "string" == typeof uF ? hF = AF.localeCompare(uF) : "number" == typeof AF && "number" == typeof uF ? hF = AF - uF : "number" == typeof AF && "string" == typeof uF ? hF = 1 : "string" == typeof AF && "number" == typeof uF && (hF = -1), hF) return hF * ("ascending" === CF[SF].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const FF of AF) {
              var QF, rW, gW;
              const {
                name: CF,
                ranks: AF,
                cosmetics: uF
              } = WF.byId[FF], bW = [], dF = null !== (QF = null === (rW = SF[FF]) || void 0 === rW || null === (gW = rW.tags) || void 0 === gW ? void 0 : gW.flatMap((FF => 0 === FF.length ? FF : [...FF, String.fromCharCode(8198)]))) && void 0 !== QF ? QF : [];
              bW.push(...dF), bW.push(...(0, kW.t)(AF, CF, (null === uF || void 0 === uF ? void 0 : uF.nameColour) === hF.c || null === uF || void 0 === uF ? void 0 : uF.nameColour)), RF[FF] ??= {}, RF[FF].name = bW
            }

            function tW(FF, SF) {
              if (RF[FF] && void 0 !== RF[FF][SF]) {
                if ("name" === SF) {
                  const {
                    name: CF,
                    cosmetics: AF
                  } = WF.byId[FF];
                  return (0, NF.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [AF && (0, NF.jsx)(aW.d, {
                      cosmetics: AF
                    }), " ", (0, NF.jsx)(uF.d, {
                      text: RF[FF][SF],
                      friendBadgeFor: (0, TF.f)(CF, bW) ? CF : void 0
                    })]
                  })
                }
                return (0, NF.jsx)(uF.d, {
                  text: RF[FF][SF]
                })
              }
              return ""
            }
            const VF = Object.keys(CF).filter((FF => !0 !== CF[FF].hidden)).map((FF => {
              var WF;
              return {
                key: FF,
                header: (0, NF.jsx)(uF.d, {
                  text: null !== (WF = CF[FF].displayName) && void 0 !== WF ? WF : ""
                })
              }
            }));
            return (0, NF.jsx)("div", {
              ref: dF,
              className: "LobbyLeaderboard",
              children: (0, NF.jsx)(qW.e, {
                columns: VF,
                rows: AF,
                getRowKey: FF => FF,
                renderRow: FF => (0, NF.jsx)(LF, {
                  playerId: FF,
                  playerName: WF.byId[FF].name,
                  isOtherPlayer: FF !== WF.localId,
                  lobbyLeaderboardInfo: CF,
                  getPlayerValue: tW,
                  playerColors: PF
                })
              })
            })
          }()
        })
      })
    }));

    function LF(FF) {
      let {
        playerId: WF,
        playerName: SF,
        isOtherPlayer: AF,
        lobbyLeaderboardInfo: uF,
        getPlayerValue: hF,
        playerColors: dF
      } = FF;
      const TF = (0, CF.useRef)(null);
      (0, CF.useEffect)((() => () => {
        eF.c.closeIfOwner(TF)
      }), []);
      const aW = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            bW.j.Uu("OpenReportMenu", {
              playerEId: WF,
              playerName: SF,
              rb: null,
              serverChatMsgId: null
            })
          }
        },
        kW = AF && RF.featureFlags.useSocialFeatures,
        qW = () => ({
          ...(0, EF.c)(WF, SF),
          showLocation: !1,
          status: null,
          extraActions: [aW],
          friendRequestSource: "leaderboard"
        });
      return (0, NF.jsxs)("tr", {
        ref: TF,
        "data-pad-focusable": kW || void 0,
        [eF.f]: kW || void 0,
        onClick: kW ? () => {
          var FF;
          eF.c.toggle(TF, {
            ...qW(),
            anchor: null !== (FF = TF.current.querySelector(".PlayerPfpAndName")) && void 0 !== FF ? FF : TF.current
          })
        } : void 0,
        onContextMenu: kW ? FF => {
          (0, QF.f)(TF, FF, qW(), tW.b.get("isTouchScreen"))
        } : void 0,
        onPointerDown: kW ? FF => {
          (0, rW.b)(FF, (() => (0, EF.c)(WF, SF).playerSocialPreview))
        } : void 0,
        children: [Object.keys(uF).map((FF => !0 === uF[FF].hidden ? null : (0, NF.jsxs)("td", {
          className: PF()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !AF
          }),
          children: [(0, NF.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: hF(WF, FF)
          }), (0, NF.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: dF[WF]
            }
          })]
        }, FF))), AF && !RF.featureFlags.useSocialFeatures && (0, NF.jsx)(iW.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: TF,
          options: [{
            icon: aW.icon,
            text: aW.text,
            onPointerDown: aW.onClick
          }, ...null === SF ? [] : (0, gW.d)(null, SF)]
        })]
      })
    }
  },
  35410: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      g: () => iW,
      h: () => eF
    });
    var CF = SF(918),
      AF = SF.n(CF),
      uF = SF(35414),
      hF = SF(46),
      bW = SF(1955),
      dF = SF(990),
      PF = SF(971);
    const RF = "InGameHeaderContainer",
      iW = "TopRightElements",
      eF = (0, hF.memo)((function() {
        const [FF] = (0, dF.e)(), WF = (0, bW.l)("middleTextTop"), SF = (0, hF.useRef)(null), [CF, eF] = (0, hF.useState)(!1), EF = WF.hasText;
        return (0, hF.useLayoutEffect)((() => {
          const FF = SF.current;
          if (!FF) return;
          const WF = document.querySelector(`.${RF}`),
            CF = document.querySelector(`.${iW}`),
            AF = () => {
              const SF = FF.getBoundingClientRect(),
                AF = WF ? WF.getBoundingClientRect().right : 0,
                uF = CF ? CF.getBoundingClientRect().left : window.innerWidth,
                hF = SF.left < AF + 8,
                bW = SF.right > uF - 8;
              eF(hF || bW)
            };
          AF();
          const uF = new ResizeObserver(AF);
          return uF.observe(FF), WF && uF.observe(WF), CF && uF.observe(CF), () => {
            uF.disconnect()
          }
        }), [EF, WF.content, FF]), EF ? (0, PF.jsx)("div", {
          className: AF()("MiddleTextTopContainer", {
            MiddleTextTopBelow: CF
          }),
          children: (0, PF.jsx)(uF.b, {
            ref: SF,
            className: "MiddleTextTop",
            text: WF
          })
        }) : null
      }))
  },
  34940: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => RF,
      f: () => eF
    });
    var CF = SF(46),
      AF = SF(1189),
      uF = SF(1046),
      hF = SF(1186),
      bW = SF(2649),
      dF = SF(3924),
      PF = SF(971);

    function RF(FF) {
      let {
        loading: WF,
        schematics: SF,
        onSchematicPicked: CF,
        selectedSchematicIdList: AF = [],
        disableAutoExport: dF
      } = FF;
      const {
        t: RF
      } = (0, uF.B)();
      return (0, PF.jsxs)("div", {
        className: "SchematicList",
        children: [WF && (0, PF.jsx)(hF.c, {}), !WF && 0 === SF.length && (0, PF.jsx)("div", {
          className: "NoSchematicsText",
          children: RF("worldBuilder:noSavedSchematic")
        }), !WF && SF.map((FF => (0, PF.jsx)(bW.f, {
          source: {
            type: "schematic",
            schematic: FF
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            CF(FF)
          },
          isSelected: AF.includes(FF.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: FF.isAutoExported && dF,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, FF.schematicId)))]
      })
    }

    function iW(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: AF
      } = FF;
      const {
        t: hF
      } = (0, uF.B)(), [bW, iW] = (0, CF.useState)(null);
      return (0, PF.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === bW && (0, PF.jsxs)(PF.Fragment, {
          children: [(0, PF.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: hF("worldBuilder:schematicList")
          }), (0, PF.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: hF("worldBuilder:clickSchematicForOptions")
          }), (0, PF.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, PF.jsx)(RF, {
              loading: !1,
              schematics: WF,
              onSchematicPicked: FF => {
                iW(FF)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== bW && (0, PF.jsx)(dF.g, {
          schematic: bW,
          inSourceWorld: bW.schematicId === SF,
          onSchematicUpdate: FF => {
            iW(FF)
          },
          onClose: () => {
            iW(null), AF()
          }
        })]
      })
    }

    function eF(FF) {
      let {
        ownedSchematics: WF,
        currentWorldSchematicId: SF,
        onClose: CF
      } = FF;
      AF.NotificationProvider.showCustomPopup({
        body: FF => (0, PF.jsx)(iW, {
          ownedSchematics: WF,
          currentWorldSchematicId: SF,
          onClose: FF
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: CF,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35389: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => qW,
      e: () => kW
    });
    var CF = SF(3448),
      AF = SF(1262),
      uF = SF(46),
      hF = SF(5450),
      bW = SF(3438),
      dF = SF(1144),
      PF = SF(1576),
      RF = SF(1546),
      iW = SF(1266),
      eF = SF(1046),
      EF = SF(35397),
      QF = SF(918),
      rW = SF.n(QF),
      gW = SF(1168),
      tW = SF(929),
      TF = SF(1141),
      aW = SF(971);
    const kW = "SleepingOverlay";

    function qW() {
      const {
        t: FF
      } = (0, eF.B)(), [WF, SF] = (0, uF.useState)(!1), [QF, qW] = (0, uF.useState)(null), [NF, DF] = (0, uF.useState)(1), [LF, mW] = (0, uF.useState)(!1), [OF, xW] = (0, uF.useState)(!1), ZF = (0, uF.useRef)(0), oF = (0, uF.useRef)(!1), YF = (0, uF.useRef)(!1), MF = (0, uF.useRef)(), cW = (0, uF.useRef)(null);

      function GF() {
        const FF = null !== QF && void 0 !== QF ? QF : "Rested Speed";
        PF.gameBridge.send("wakeUp", OF ? FF : null), cW.current = null, SF(!1), qW(null), DF(1), mW(!1), xW(!1)
      }

      function zW() {
        return !LF && (GF(), !0)
      }
      return (0, AF.e)("PlayerPhysicsTypeUpdate", (FF => {
        FF !== cW.current && (cW.current = FF, FF === hF.m.SLEEPING ? (YF.current || (ZF.current = PF.gameBridge.lookup("cameraZoom", null), YF.current = !0), oF.current = !0, PF.gameBridge.send("setCameraZoom", 3), SF(!0), DF(function() {
          for (const FF of PF.gameBridge.lookup("blocksStandingOn", null)) {
            if (EF.b.leafBeds.includes(FF)) return console.log(`Found leaf bed: ${FF}`), 1;
            if (EF.b.woolBeds.includes(FF)) return console.log(`Found woold bed: ${FF}`), 2;
            if (EF.b.strongBeds.includes(FF)) return console.log(`Found strong bed ${FF}`), 3
          }
          return 1
        }())) : (YF.current = !1, SF(!1), qW(null), DF(1)))
      })), (0, uF.useEffect)((() => () => {
        (0, dF.g)(kW)
      }), []), (0, uF.useEffect)((() => {
        WF ? (0, dF.h)(kW) : ((0, dF.g)(kW), oF.current && (PF.gameBridge.send("setCameraZoom", ZF.current), oF.current = !1))
      }), [WF]), (0, TF.w)("overlay", MF, zW, WF), (0, aW.jsx)(CF.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: WF,
        timeout: 300,
        nodeRef: MF,
        unmountOnExit: !0,
        children: (0, aW.jsx)("div", {
          ref: MF,
          onClick: FF => {
            zW() && FF.stopPropagation()
          },
          children: (0, aW.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, aW.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: bW.e.map((WF => (0, aW.jsxs)(VF, {
                restedEffect: WF,
                Fy: QF,
                setChosenRestedEffect: qW,
                children: [(0, aW.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, aW.jsx)(RF.d, {
                    text: [{
                      icon: WF
                    }]
                  }), bW.d[WF].shortName]
                }), (0, aW.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: FF(bW.d[WF].description, {
                    time: bW.d[WF].effectLevelDurations[NF] / 6e4
                  })
                })]
              }, WF)))
            }), (0, aW.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, aW.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, aW.jsxs)(iW.e, {
                className: "SleepingOverlayWakeUpButton",
                onClick: FF => {
                  OF ? GF() : (mW(!0), (0, gW.eb)((() => {
                    mW(!1), xW(!0)
                  }), !0)), FF.stopPropagation()
                },
                loading: LF,
                children: [!OF && (0, aW.jsxs)(aW.Fragment, {
                  children: [(0, aW.jsx)(tW.e, {
                    name: "film"
                  }), " ", FF("classicGame:watchAdToGetRestedPerk")]
                }), OF && FF("classicGame:wakeUp")]
              }), (0, aW.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, aW.jsx)("div", {
                  className: rW()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === NF
                  }),
                  children: (0, aW.jsx)(RF.d, {
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
    const VF = (0, uF.memo)((function(FF) {
      let {
        children: WF,
        restedEffect: SF,
        Fy: CF,
        setChosenRestedEffect: AF
      } = FF;
      return SF === CF ? (0, aW.jsx)(iW.k, {
        onClick: FF => {
          FF.stopPropagation()
        },
        children: WF
      }) : (0, aW.jsx)(iW.f, {
        onClick: FF => {
          AF(SF), FF.stopPropagation()
        },
        children: WF
      })
    }))
  },
  35079: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF
    });
    var CF = SF(553),
      AF = SF(1576),
      uF = SF(1481);

    function hF(FF, WF) {
      var SF, hF;
      const bW = uF.e.getSocialState().friends.find((FF => FF.name.toLowerCase() === WF.toLowerCase())),
        dF = AF.gameBridge.latest("players").byId[FF],
        PF = void 0 !== dF && dF.name === WF,
        RF = PF && null !== (SF = dF.cosmetics) && void 0 !== SF ? SF : void 0,
        iW = bW && RF ? {
          ...bW,
          cosmetics: RF
        } : bW;
      return {
        playerSocialPreview: null !== iW && void 0 !== iW ? iW : {
          isError: !1,
          name: WF,
          ranks: PF ? [...dF.ranks] : [],
          cosmetics: null !== RF && void 0 !== RF ? RF : {},
          nameColour: null !== (hF = null === RF || void 0 === RF ? void 0 : RF.nameColour) && void 0 !== hF ? hF : CF.c,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== bW
      }
    }
  },
  3907: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW
    });
    var CF = SF(46),
      AF = SF(918),
      uF = SF.n(AF),
      hF = SF(971);

    function bW(FF) {
      let {
        columns: WF,
        rows: SF,
        getRowKey: AF,
        renderRow: bW,
        className: dF
      } = FF;
      return (0, hF.jsxs)("table", {
        className: uF()("Table", dF),
        children: [(0, hF.jsx)("thead", {
          children: (0, hF.jsx)("tr", {
            children: WF.map((FF => (0, hF.jsx)("th", {
              children: FF.header
            }, FF.key)))
          })
        }), (0, hF.jsx)("tbody", {
          children: SF.map((FF => (0, hF.jsx)(CF.Fragment, {
            children: bW(FF)
          }, AF(FF))))
        })]
      })
    }
  },
  35358: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => kW,
      e: () => aW,
      i: () => eF
    });
    var CF = SF(46),
      AF = SF(61),
      uF = SF(1200),
      hF = SF(1266),
      bW = SF(1198),
      dF = SF(1141),
      PF = SF(1046),
      RF = SF(35361),
      iW = SF(971);

    function eF(FF) {
      const [WF, SF] = (0, CF.useState)((() => (0, RF.r)(FF)));
      return (0, CF.useEffect)((() => (SF((0, RF.r)(FF)), (0, RF.P)((() => {
        SF((0, RF.r)(FF))
      })))), [FF]), WF
    }

    function EF(FF, WF) {
      "function" === typeof FF ? FF(WF) : FF && (FF.current = WF)
    }

    function QF(FF) {
      let {
        tutorial: WF,
        step: SF,
        enabled: CF = !0
      } = FF;
      const AF = eF(WF);
      return CF && AF === SF
    }

    function rW(FF, WF) {
      const SF = (0, RF.u)(FF),
        CF = SF.indexOf(WF);
      return !SF.slice(CF + 1).some((WF => (0, RF.C)(FF, WF)))
    }

    function gW(FF, WF, SF, CF) {
      let {
        tutorial: AF,
        step: uF,
        waitForClick: hF = !1,
        onPrevious: bW
      } = FF;
      const PF = WF && (0, RF.B)(AF, uF),
        iW = WF && !rW(AF, uF),
        eF = hF ? CF : SF;
      let EF = null;
      PF ? EF = () => {
        null === bW || void 0 === bW || bW(), (0, RF.y)(AF, uF)
      } : iW && (EF = () => {
        (0, RF.p)(AF)
      }), (0, dF.w)("popup", null !== eF && void 0 !== eF ? eF : SF, EF, WF && null !== eF, null, PF ? void 0 : "controller:menusSkipTutorial")
    }

    function tW(FF) {
      let {
        tutorial: WF,
        step: SF,
        text: CF,
        waitForClick: AF = !1,
        onPrevious: uF
      } = FF;
      const {
        t: bW
      } = (0, PF.B)(), dF = rW(WF, SF);
      return (0, iW.jsxs)(iW.Fragment, {
        children: [(0, iW.jsx)("div", {
          className: "TutorialStepText",
          children: CF
        }), (0, iW.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, RF.B)(WF, SF) && (0, iW.jsx)(hF.f, {
            className: "TutorialStepButton",
            onClick: () => {
              null === uF || void 0 === uF || uF(), (0, RF.y)(WF, SF)
            },
            children: bW("tutorial:back")
          }), !AF && (0, iW.jsx)(hF.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, RF.h)(SF)
            },
            padDefaultFocus: !0,
            children: bW(dF ? "tutorial:done" : "tutorial:next")
          }), !dF && (0, iW.jsx)(hF.f, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, RF.p)(WF)
            },
            children: bW("tutorial:skip")
          })]
        })]
      })
    }

    function TF(FF) {
      let {
        rect: WF
      } = FF;
      const SF = Math.max(0, WF.top - 6),
        CF = WF.bottom + 6,
        AF = Math.max(0, WF.left - 6),
        uF = WF.right + 6;
      return (0, iW.jsxs)(iW.Fragment, {
        children: [(0, iW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: SF
          }
        }), (0, iW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: CF,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, iW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: SF,
            left: 0,
            width: AF,
            height: CF - SF
          }
        }), (0, iW.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: SF,
            left: uF,
            right: 0,
            height: CF - SF
          }
        })]
      })
    }
    const aW = (0, CF.forwardRef)((function(FF, WF) {
      let {
        placement: SF = "right",
        children: hF,
        ...dF
      } = FF;
      const PF = QF(dF),
        RF = (0, CF.useRef)(null),
        eF = (0, CF.useRef)(null);
      gW(dF, PF, RF, eF);
      const {
        getArrowProps: rW,
        getTooltipProps: aW,
        setTooltipRef: kW,
        setTriggerRef: qW
      } = (0, uF.b)({
        placement: SF,
        trigger: null,
        visible: PF,
        interactive: !0,
        closeOnOutsideClick: !1
      }), [VF, NF] = (0, CF.useState)(null), DF = function(FF, WF) {
        const [SF, AF] = (0, CF.useState)(null);
        return (0, CF.useEffect)((() => {
          if (!WF || !FF) return void AF(null);
          let SF = 0,
            CF = null;
          const uF = () => {
            const WF = FF.getBoundingClientRect();
            CF && WF.left === CF.left && WF.top === CF.top && WF.width === CF.width && WF.height === CF.height || (CF = WF, AF(WF)), SF = requestAnimationFrame(uF)
          };
          return uF(), () => {
            cancelAnimationFrame(SF)
          }
        }), [FF, WF]), SF
      }(VF, PF);
      (0, CF.useEffect)((() => {
        PF && VF && VF.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [PF, VF]);
      const LF = hF.ref,
        mW = (0, CF.useCallback)((FF => {
          qW(FF), eF.current = FF, NF(FF), EF(WF, FF), EF(LF, FF)
        }), [qW, WF, LF]),
        OF = (0, CF.useCallback)((FF => {
          kW(FF), RF.current = FF
        }), [kW]);
      return (0, iW.jsxs)(iW.Fragment, {
        children: [(0, CF.cloneElement)(hF, {
          ref: mW
        }), PF && (0, AF.createPortal)((0, iW.jsxs)(iW.Fragment, {
          children: [DF && (0, iW.jsx)(TF, {
            rect: DF
          }), (0, iW.jsxs)("div", {
            ref: OF,
            ...aW({
              className: "tooltip-container SmallTextLight TutorialStep"
            }),
            children: [(0, iW.jsx)(tW, {
              ...dF
            }), (0, iW.jsx)("div", {
              ...rW({
                className: "tooltip-arrow"
              })
            })]
          })]
        }), (0, bW.h)())]
      })
    }));

    function kW(FF) {
      const WF = QF(FF),
        SF = (0, CF.useRef)(null);
      return gW(FF, WF, SF, null), WF ? (0, AF.createPortal)((0, iW.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, iW.jsx)("div", {
          ref: SF,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, iW.jsx)(tW, {
            ...FF
          })
        })
      }), (0, bW.h)()) : null
    }
  },
  5538: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF
    });
    var CF = SF(46),
      AF = SF(33);

    function uF(FF, WF) {
      var SF;
      const [uF, hF] = (0, CF.useState)(null !== (SF = AF.h.getItem(FF)) && void 0 !== SF ? SF : WF);
      return [uF, WF => {
        AF.h.setItem(FF, WF), hF(WF)
      }]
    }
  },
  35364: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => uF
    });
    var CF = SF(11),
      AF = SF(1168);

    function uF() {
      const {
        clientEscMenuOptions: FF
      } = (0, CF.d)(["clientEscMenuOptions"]);
      return (0, AF.A)() && FF.showChat
    }
  },
  35317: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => dF
    });
    var CF = SF(2180),
      AF = SF(2877),
      uF = SF(2241);
    const hF = ["Unable to create vertex buffer"];
    let bW = {};

    function dF(FF, WF) {
      const SF = new Date;
      console.error(`${SF.getUTCHours()}:${SF.getUTCMinutes()}:${SF.getUTCSeconds()}`, FF, WF, null === WF || void 0 === WF ? void 0 : WF.stack), hF.includes(null === WF || void 0 === WF ? void 0 : WF.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, CF.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${WF.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, uF.logError)("warning", `${FF}\n ${WF} "\n" ${null===WF||void 0===WF?void 0:WF.stack}`);
      const AF = FF + WF + (null === WF || void 0 === WF ? void 0 : WF.stack);
      AF in bW || ((0, uF.logError)("error", `${FF}\n ${WF} "\n" ${null===WF||void 0===WF?void 0:WF.stack}`), bW[AF] = !0)
    }(0, AF.onGameReset)((() => {
      bW = {}
    }))
  },
  35221: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => AF
    });
    const CF = [{
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

    function AF(FF, WF, SF) {
      const AF = Math.abs(FF - WF),
        uF = Date.now() - SF;
      for (const hF of CF)
        if (FF < hF.maxDist) return AF >= hF.hardUpdateDist || uF > hF.timeBetweenSoftChecks && AF >= hF.softUpdateDist;
      return !1
    }
  },
  35423: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => hF,
      e: () => uF,
      i: () => AF
    });
    const CF = [.25, .5, 1, 2, 4, 8, 16];

    function AF(FF, WF) {
      const SF = CF;
      let AF = SF.indexOf(FF);
      return -1 === AF && (AF = SF.findIndex((WF => WF >= FF)), -1 === AF && (AF = SF.length - 1)), "up" === WF ? SF[Math.min(AF + 1, SF.length - 1)] : SF[Math.max(AF - 1, 0)]
    }

    function uF(FF) {
      return FF <= CF[0]
    }

    function hF(FF) {
      return FF >= CF[CF.length - 1]
    }
  },
  35472: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => CF,
      e: () => AF
    });
    const CF = "data-replay-ui-active",
      AF = [{
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
  35478: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => PF,
      g: () => iW,
      h: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(35472);

    function hF() {
      const FF = {};
      for (const {
          group: WF
        }
        of uF.e) FF[WF] = !0;
      return FF
    }
    let bW = hF();

    function dF() {
      AF.j.Uu("replayViewer|uiVisibilityChanged")
    }

    function PF() {
      return bW
    }

    function RF(FF, WF) {
      bW[FF] !== WF && (bW = {
        ...bW,
        [FF]: WF
      }, "nametag" === FF && CF.b.set({
        areNametagsHidden: !WF
      }), dF())
    }

    function iW() {
      bW = hF(), CF.b.set({
        areNametagsHidden: !1
      }), dF()
    }
  },
  35334: (FF, WF, SF) => {
    function CF(FF, WF) {
      FF instanceof Promise ? FF.then(WF).catch((FF => {
        console.error("Couldn't open the preview", FF)
      })) : WF(FF)
    }
    SF.d(WF, {
      e: () => hF
    });
    class AF {
      constructor(FF) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height), null !== this.view && FF.show(this.view))
        }))
      }
      show(FF) {
        var WF;
        this.view = FF, null === (WF = this.opened) || void 0 === WF || WF.show(FF)
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    class uF {
      constructor(FF) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(FF).then((FF => FF.ready)), CF(FF, (FF => {
          this.closed ? FF.close() : (this.opened = FF, null !== this.size && FF.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var FF, WF;
        return null !== (FF = null === (WF = this.opened) || void 0 === WF ? void 0 : WF.isReady()) && void 0 !== FF && FF
      }
      setCosmetic(FF, WF) {
        var SF;
        null === (SF = this.opened) || void 0 === SF || SF.setCosmetic(FF, WF)
      }
      playEmote(FF) {
        var WF;
        null === (WF = this.opened) || void 0 === WF || WF.playEmote(FF)
      }
      async untilDrawn(FF) {
        var WF;
        await this.ready, await (null === (WF = this.opened) || void 0 === WF ? void 0 : WF.untilDrawn(FF))
      }
      resize(FF, WF) {
        var SF;
        this.size = {
          width: FF,
          height: WF
        }, null === (SF = this.opened) || void 0 === SF || SF.resize(FF, WF)
      }
      close() {
        var FF;
        this.closed = !0, null === (FF = this.opened) || void 0 === FF || FF.close(), this.opened = null
      }
    }
    const hF = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(FF) {
        this.host = FF
      }
      setDefaultHost(FF) {
        this.makeDefault = FF
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(FF) {
        return new AF(this.current().openMob(FF))
      }
      openPet(FF) {
        return new AF(this.current().openPet(FF))
      }
      openMobLineup(FF) {
        return new AF(this.current().openMobLineup(FF))
      }
      openCharacter(FF) {
        return new uF(this.current().openCharacter(FF))
      }
    }
  },
  35327: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF.e
    });
    var CF = SF(35334);
    class AF {
      constructor(FF) {
        this.load = FF, this.loaded = null, this.loading = null
      }
      run(FF) {
        return null !== this.loaded ? FF(this.loaded) : (this.loading ??= this.load().then((FF => (this.loaded = FF, FF)), (FF => {
          throw this.loading = null, FF
        })), this.loading.then(FF))
      }
    }
    class uF {
      constructor() {
        this.mobScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(142)]).then((() => SF(39045))))), this.characterScene = new AF((() => Promise.all([SF.e(207), SF.e(206), SF.e(224), SF.e(225), SF.e(62), SF.e(222), SF.e(60), SF.e(232), SF.e(226), SF.e(61), SF.e(231), SF.e(229), SF.e(221), SF.e(198), SF.e(261), SF.e(203), SF.e(216), SF.e(227), SF.e(230), SF.e(120), SF.e(178), SF.e(214), SF.e(199), SF.e(98), SF.e(97), SF.e(262), SF.e(141)]).then((() => SF(39135)))))
      }
      openMob(FF) {
        return this.mobScene.run((WF => WF.openMobPreview(FF)))
      }
      openPet(FF) {
        return this.mobScene.run((WF => WF.openPetPreview(FF)))
      }
      openMobLineup(FF) {
        return this.mobScene.run((WF => WF.openMobLineupPreview(FF)))
      }
      openCharacter(FF) {
        return this.characterScene.run((WF => WF.openCharacterPreview(FF)))
      }
    }
    CF.e.setDefaultHost((() => new uF))
  },
  35310: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF,
      f: () => uF
    });
    const CF = new Map;

    function AF(FF) {
      var WF;
      return null === FF ? null : null !== (WF = CF.get(FF)) && void 0 !== WF ? WF : null
    }

    function uF(FF, WF) {
      return CF.set(FF, WF), () => {
        CF.get(FF) === WF && CF.delete(FF)
      }
    }
  },
  35133: (FF, WF, SF) => {
    SF.d(WF, {
      A: () => QF,
      D: () => TF,
      e: () => uF,
      h: () => rW,
      i: () => gW,
      l: () => bW,
      p: () => eF,
      r: () => tW,
      t: () => iW,
      w: () => aW
    });
    var CF = SF(11),
      AF = SF(20);
    const uF = "clientGameInventoryButtonsChanged",
      hF = new Map;

    function bW() {
      return [...hF.values()].sort(((FF, WF) => {
        var SF, CF;
        return (null !== (SF = FF.order) && void 0 !== SF ? SF : 0) - (null !== (CF = WF.order) && void 0 !== CF ? CF : 0)
      }))
    }
    let dF = null;

    function PF(FF) {
      dF = FF
    }
    let RF = !1;

    function iW(FF) {
      RF = !0;
      try {
        FF.onClick()
      } finally {
        RF = !1
      }
      FF.panel && "clientGame" === CF.b.get("openInGameMenuName") && PF(FF.id)
    }

    function eF() {
      return RF
    }

    function EF() {
      return bW().filter((FF => FF.panel && !FF.disabled))
    }

    function QF(FF) {
      const WF = EF(),
        SF = WF.findIndex((FF => FF.id === dF));
      return !(SF < 0 || WF.length < 2) && (iW(WF[(SF + FF + WF.length) % WF.length]), !0)
    }

    function rW() {
      return null !== dF && EF().length > 1
    }

    function gW() {
      PF(null)
    }

    function tW() {
      "inventory" !== CF.b.get("openInGameMenuName") && PF(null)
    }

    function TF() {
      const FF = dF;
      return PF(null), FF
    }

    function aW(FF) {
      return hF.set(FF.id, FF), AF.j.Uu(uF, bW(), !0), () => {
        hF.get(FF.id) === FF && (hF.delete(FF.id), AF.j.Uu(uF, bW()))
      }
    }
  },
  35131: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => bW,
      d: () => gW,
      e: () => tW,
      h: () => eF,
      j: () => PF,
      n: () => rW,
      p: () => EF,
      r: () => RF
    });
    var CF = SF(11),
      AF = SF(20),
      uF = SF(1144),
      hF = SF(35133);
    const bW = "clientGameUiChanged";
    let dF = null;

    function PF() {
      return dF
    }

    function RF(FF, WF) {
      const SF = {
        content: FF,
        menu: WF
      };
      return dF = SF, AF.j.Uu(bW, dF, !0), () => {
        dF === SF && (dF = null, QF = !1, gW(), AF.j.Uu(bW, null))
      }
    }
    let iW = null;

    function eF() {
      return iW
    }

    function EF(FF) {
      return iW = FF, () => {
        iW === FF && (iW = null)
      }
    }
    let QF = !1;

    function rW() {
      const FF = CF.b.get("openInGameMenuName");
      "clientGame" !== FF && (QF = "inventory" === FF), (0, hF.p)() || (0, hF.i)(), (0, uF.h)("InGameMenu"), CF.b.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function gW() {
      TF(!1)
    }

    function tW() {
      TF(QF)
    }

    function TF(FF) {
      "clientGame" === CF.b.get("openInGameMenuName") && CF.b.set({
        openInGameMenuName: FF ? "inventory" : null
      }), FF || (0, hF.i)(), QF = !1
    }
  },
  35440: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => pW,
      e: () => JW
    });
    var CF = SF(3434),
      AF = SF(568),
      uF = SF(2978),
      hF = SF(2947),
      bW = SF.n(hF);
    const dF = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      PF = "EV_boolean",
      RF = "EV_double",
      iW = "EV_string",
      eF = "EV_doubleArr",
      EF = "EV_armour",
      QF = "EV_other",
      rW = "EV_cosmetics",
      gW = "OEV_boolean",
      tW = "OEV_int",
      TF = "OEV_double",
      aW = "OEV_string",
      kW = "OEV_stringArr",
      qW = "OEV_meshScaling",
      VF = "IV_int",
      NF = "IV_string",
      DF = "IV_doubleArr",
      LF = "IV_double",
      mW = "HV_int",
      OF = "HV_slots",
      xW = "EnvV_string",
      ZF = "EnvV_double",
      oF = "EnvV_doubleArr",
      YF = "EnvV_boolean",
      MF = {
        type: iW,
        name: iW,
        position: eF,
        rotation: eF,
        scale: RF,
        speed: RF,
        jumping: PF,
        crouching: PF,
        cameraPitch: RF,
        armSwinging: PF,
        heldItemName: iW,
        heldItemEnchantmentTier: iW,
        pose: iW,
        followingEId: iW,
        ridingVehicleEId: iW,
        leaderboardTop: iW,
        meshKind: iW,
        meshOpts: iW,
        followingOffset: eF,
        shouldMatchFollowingEntityRotation: PF,
        meshOffset: eF,
        baseRenderHeading: RF,
        armour: EF,
        jSF: QF,
        playerCustomisations: rW,
        variation: iW,
        metaInfo: iW,
        soundName: iW,
        volume: RF,
        refDistance: RF,
        maxHearDist: RF,
        rate: RF,
        aiState: iW
      },
      cW = {
        opacity: TF,
        zIndex: tW,
        overlayColour: aW,
        canSee: gW,
        meshScaling: qW,
        nameTagInfo: aW,
        multilineTextBox: aW,
        hasPriorityNametag: gW,
        ranks: kW,
        nameColour: aW,
        _isAlive: gW,
        _invisibleEffect: gW,
        _invincible: gW,
        killfeedColour: aW,
        hideNameSeed: tW,
        _glowingEffect: gW,
        lockHeadToBody: gW
      },
      GF = {
        itemName: NF,
        amount: VF,
        position: DF,
        size: LF,
        attributes: NF
      },
      zW = {
        skyBox: xW,
        fogColourOverride: xW,
        fogChunkDistanceOverride: ZF,
        cameraTint: oF,
        fogOnSkybox: YF,
        fogBlockDistanceOverride: ZF
      },
      IF = {
        type: "array",
        items: "double"
      },
      fF = {
        type: "array",
        items: "int"
      },
      yW = {
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
      sF = {
        type: "map",
        values: IF
      };

    function nF(FF, WF) {
      return {
        type: "record",
        name: FF,
        fields: [{
          name: "x",
          type: WF
        }]
      }
    }
    const HF = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nF(gW, "boolean"), nF(tW, "int"), nF(TF, "double"), nF(aW, "string"), nF(kW, {
              type: "array",
              items: "string"
            }), nF(qW, sF)]
          }]
        }
      },
      KF = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nF(PF, "boolean"), nF(RF, "double"), nF(iW, "string"), nF(eF, IF), nF(EF, yW), nF(QF, HF), nF(rW, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      wF = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nF(VF, "int"), nF(NF, "string"), nF(LF, "double"), nF(DF, IF)]
          }]
        }
      },
      XF = {
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
      UF = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", nF(mW, "int"), nF(OF, XF)]
        }]
      },
      BF = {
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
      jW = {
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
      vW = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", nF(xW, "string"), nF(ZF, "double"), nF(oF, IF), nF(YF, "boolean")]
          }]
        }
      },
      JF = [{
        name: "rSF",
        type: "record",
        fields: [{
          name: "pos",
          type: fF
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
          type: fF
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
      pF = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "RFF",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "eFF",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "EFF",
              type: ["null", "string", IF],
              default: null
            }, {
              name: "QFF",
              type: ["null", "double"],
              default: null
            }, {
              name: "rWF",
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
          name: "JY",
          type: "string"
        }, {
          name: "kWF",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "qWF",
          type: "double"
        }, {
          name: "VFF",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "upF",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: IF
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "bM",
          type: "string"
        }, {
          name: "A3",
          type: ["null", "double"],
          default: null
        }, {
          name: "i6",
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
          name: "zp",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "HJ",
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
      lF = [{
        name: "position",
        type: IF
      }, {
        name: "direction",
        type: IF
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

    function FW() {
      const FF = [{
        name: "entities",
        type: {
          type: "map",
          values: KF
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: wF
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: lF
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
              items: UF
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", BF],
        default: null
      }];
      return FF.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "bM",
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
      }), FF.push({
        name: "uiElements",
        type: jW
      }, {
        name: "environment",
        type: vW
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: JF
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: pF
        }
      }), FF
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
                name: "lF",
                type: "int"
              }, {
                name: "position",
                type: IF
              }, {
                name: "direction",
                type: IF
              }, {
                name: "easing",
                type: IF
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
    var SW;
    const CW = {
      9: (SW = [{
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
            name: "LWF",
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
              type: fF
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
            fields: FW()
          }
        }
      }, WW], bW().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: SW
      }, {
        dS: Object.create(null)
      }))
    };
    var AW = SF(35442);
    let uW, hW, bS, dW;
    const PW = 12;
    var RW, iS;
    const eW = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", !1, 91, 8191, 88, 13, 14, 3, 4, 16, 127, 128, 129, !0, 130, 131, 15, 126, null, "Q", ".", 2, 10, 5, 11, 9];

    function EW(FF) {
      return typeof SS !== eW[5] && SS ? (new SS).decode(new CS(FF)) : typeof AS !== eW[5] && AS ? AS.from(FF).toString("utf-8") : bC(FF)
    }

    function QW() {}

    function rS() {
      rS = function() {}
    }
    var gS, tS;
    rS(RW = {}, iS = ['/ue/RDd@rwuBhAN`dP4h]!ogI1mNH>)ZC@GT8S{@e2KeCvb2N~w34Af"9H(_(', "=<VYNEy!pXhfdUbkCSbLat;wBaq,XhvE", '"a0<;L#XI.64/rF2{|L*NEZ0b=yB[>', "p`M,x3Pw=J1l15|o*<%!Be8`6~i2]%2gLYIV9_eK6a`!.jIfcG", "#Y<TP:%gh", "1rkRaQ|g@u=e)>", "A76`8S1X1Xr", "%S>jSvnZ})r", "cP~N{uv7mOGe@0jX>~KoN", ';es6Ae&Z"s?bYE|m#Kfz!cW"HX.r>t7k8rT,IW8(', 'Pe(u8S"wU=B', "~r}N)$*F1:.QC$BNFXUVSaG", "}6du@yVg51eRK&:}XrI3{8]mw4CXUJkog7M!T", "gASbzaPwGXW;P]QY5qQI!&^XH:[)(AnI8UB<wsbZG7:xuwm@IY+cWpG", ".OdK8/]^t^&#GS?Y.6QKAk.%`UWhGN:f3=8`Xb>9g}{tR$1`", "C~tSc/?!#l1l4DKX|e^F", "CZI3PVXvgOU<gztm3U9!2SW(?U[7gz*O8AFuU@gwSO*]dUGq&G", "B~h,28b!=1sV<%h2NqBu,^)%WwY^5A{]z~9R2SmH:)+Jl8;oeRnSKnG", "!6{V#B37SOV=f/AZg};`eLy7z", "9UfI0j+H$sby%)@}T)?3>@YmF*f&7UIfm`E!EZe#])/15jK", "VoFKb1=Do.5^$zhqeeU`qCe7e27|]NnI~`VoAt$xfw", "lUd6ECc6ysOD>/JZCu:b]SUw}sQ$A8YI(`2V_v?Xh", "lA`Ire]!y)}}CvmIk6x~", ";}9I2sj!lO7Q_0uN!6@NPBvyvu/b!>", "[t<c)SC`8HY>Rj}NHK1Iy/1TZ|o|!)=Of(", "H>cha6D6?Uy=a)VkO~BKrW]^Fw", "Xs2`]ssgQ:SR[m4rWkZKKQFvW^:#a)iIAK0", "Cea`,tmv,w~C#5sf`eP!DDQ(", "`)lKisQs4~(&5z9]Kze*^a}g{}", "~BX`DA7ts}CyDDtX[|,K7", "$rTxFbHm::V5sv.NCef~`!?!uw2>Vm.IUYO`,#x(>", "w<uo1@Qw<s2N6JZrg}SR#C+!(7J@bSeXPqL,6k_m(XGua)8N?1C*", "7Zc`NSuT.wClI>7kj+<R6r;Du^.DXYi]FSIojbHK4~ZyS8[M^Y:B!r<0", "4eQu|k{y_FWa(", "(Z5NB[nnF^ntZSJOI3Dx.", ']snIiS6:ps9(eUErAY]K&8=L"2^', "SO;`<eteK*X@=Y|T+6MoY", 'z49~l:s",OA!jS*YZ3L30$DxF^R<@C5`{1M,7DJ!,HFc.CVNO(', "wY<K/[J^A4,o>/]k()Kbyb1XiOmbPwC}", 's6fpk%M^tHVF15}k41tRI":gA~d3]U5f]YnI&p/0', "|f;Vh$P2B4Z", 'afgc#Vt!uwo@2/}ZR>+N]E!ykwE!%J{":f7V{R52jOVlim;v,uozSL}5>a@', "2)v*qROvUU$`A>GqntVov_<y3JXA$j1+", 'E~NjwvM!!~n`Bjn]L6_zXEg"fw|#[>jXnO0', "^eG_msZ7))k*Rzkr3KYj7", "5Y]TTZem62Xw=&~o]rP*b,r2<.v4O%pmG40", 'LYpu#^<XWHaUBAGvpK!3u^"`;HpN.Am@nA9![PL:aFM&SY7', 'Yam_N8[@DHAyO%xX,Za``S$Q%)&;)%s"0<M!YR2wkw0%&BR5M(', "(:Co|Au#^1it:EOZi|jR~DM3R|xc`BrohfyB<!x2,wBD))+2G)4<^a2$Z^|R(", "Hu2<la!3_Xq}=&EXkYjBAexg6a*w)&D5{1EB2/YT4):.{54mMar,+&u0", "jK_I5Wd1m^h^A>hozz)~vu37~,2r7k~2QrF~uj=DZ^6", 'jl/L=$t^?F`}~["o=sbYM_s%_l1J"J~2`#/6UtG', 'B@du6lDc_X;Xwjl@d}"`F$r%^O[/vSQY%oeYBtG', ".sKo~nBwTX(u$jTvJ)Ex41$x+|NjdA7", "qfSR&s/T5OgU2EUfgYNV_b_Z.2(TBzeoq1s6:,Q`@)92k&po2S(", '])IVOUQx"2<m<%yN', "9OA~,#3@3OH(d)Y+to,!}8]F^UK0k^+5c1(", 'V=Jo_bF^)4iFQYSo`fm_M_f"VJ^y9%pf+s!`m', "sS/N1VmvZOFTl)vEc}V3hQ~5}s.Kq0", 'wSu!1^/0qO=K"0GqF3pT7b4X/~pQ;)+Eh"bhBlGtx,Q(LA~', 'M`?`9/Z7q=/"/wzT"a3F@_K#a=.^Cz', "(a*jHv;(Wu/lKhi+Z|&<m", "&Ao!ZeLcK", "()_o&s>2I.&5%0_Zc=Qb[Dy3h2%}VA1`X6yKD,9D=}[)(", "rey~XE*H(:E@$j[Z5ay66lZHps9;7a*", "f~YN^6`xvs^tm>wYMs(", '0)069_NLU=f1@C;5w)U`u&G+eH,RINf"_Prx.Z]!%FSy7]U+FeSzC@DsJ4Oo(', '^U$uk"^#ZO|#7>fgD}*6}D[!{|mw7NeEJqbLBVIv07X1fJ(m]qlBa^YF<.C', "sZ+cyEe#V1@o5];X1e7o3s?0qlx>,^5f,1$u}", 'sf}u"_eT):eyxkJ', ",Y+<IZE^x", '^JT!FbITaL{$|j,"co`,M', 'AroRMESsB7$X#rf@+6"jI!MF,^k*y)[MyPt!<eb#4aT1*h', "Q6rz9DC(", 'mScV]EOn4aF|7)sgcU.o)b:s1F"b<]75,egu6&~(/)Bb{D^g7s[S!6r2K', "5#~_Gje#&2*A_$FEQ1oBeLrw$X,Rn5*", "R+.,9sLfK", 'CSubsa>g"aVzoE.N#O#x~n9W]4OK1B{`4Z:~', "]~9~TWE^Q)JcnJ8N,ADx", ',}fI*A2w~^|BgjW"Ou$6!Vk21:&3[%nIPZY<E&2"GX', "9+}_JE9(", 'lPaL03Z#?|"DFj:+?Y>', "u>WoSLRDW2#JlNo}N#]c+y{7_=HIStDmWJ]T}!2gbl7C7NPN#6$Kgyf`+|N", ")X%~dU,`JUQl6JtE/s}<1[6wALl==YerJ7Ex2E,x:LPIbS]k/>>", "vuyR@ZG", "F#.ov%Dc}sjBk02Zk~z3u^Lg?U_3Wz?5AKg64A*v62/b,JxrRAfIybG", ">qsu9%JmkH}NRapolA#o{UzT0:SVfExrOY.,YslZNJ]m!)F5*B>", "+ZU`*A&7JX", "[IHB:@XFkO(_laWN^AeLvZcwO~E><Spf*B`x$1Q`[wsB=0*", "1A^6v_1#J)a.d%>q3JABl:4^&~?4mSmIgA(jO", 'G"`*v%Vwg}ytvz1}~q]KBBp"I}|L1Dn]@qpTvC<TK*u5ONI"blZ6T%A0', "h)honDKTe2HtC$mIJa0ho!s(1UN|5AtmyrL*", 'Y~h,"u1^M^A', "cKwx|k$`;ue)]N=Y&|X`Haj^kH>0.vnIl~ch13FnaF2>z))", "?ZQzZ&Gv<4mA8Em+NftS#:L(", "8>ZKOECg^1ZU_5zoSumB}b&yz", "8K1IJsiD))+}:t0vAo6`2", "rrqVz,0^`J1lEw~2&@fIRD!0", "?e)TnshxQajMTr5IUelu<e7^PUmwDv8No#/N/e_nyX.@(", "m3C*H#8Dt^SM/wQZ2<p6u^Jn0u6DIAwkCr@6Jv;g47|Ib>$Z[5VoM", '6u`3h3|"71$VqY|}IY_bvcC%EHI,}aJ', "Ps1IJbt3;~[t[mF", '}SP3XDam"21.(', "&|tBry#7QF4t0rXZ~Z6FL[IT8~}@NYCv1edR58o:D206AN[NCO>", "fu#xx,O^zugD%NaTq78VK/A^[~7N=J0XQOMI3s^XX:tVRAJ", "SP/<$p7#X7_lz8K", "ws06vZ+08aU=(", "6O4<DaZvc}", "o`BNVsGtz", "26$uF@;fbU<QG", "^|H~$!,w)4{vt5SE+YZK/rQg;7[:)0", "f#<BLrzF^}", "p~>`Kag%`X@jU8|r^}I*7", "nkQIEZL`/aD(ivSr7Y#zVP7^e~dtyNWgzeRK", "qqIV{Eb!x", "4PO3recg4:yMb>Cf/r,BEBr2jOTj~Aorg6*`a[ZX27}jQ8?2q`Wx", "Iu3F(AbK/u{;)0c5O<&6qrox>", "0XuzX8u![2lU[)0fPsDY!VA0", "5q2<vluXBuM*y8E5|f}KsaPWB~2Q_E3Y", "|~9~ISZ0", ")pg$)]aM", "Kr[1nZmM", "JvUx1", "mR9Uuv:Z", "DD?rW", ",,*B@I~>", "AQ*8y?G6", "`?R|W^n6", "v8<%4", "I.zK", "}.R|xl{6", "78`+", "[.3fTk@6", "^~hWoT(*", "bN={", "+8L#l3Fu", "zTVh^yTd", "{v!Q_Zh0", "Sc#W0^@Q3h}8F[=w~9BuXX&R(*old|=w(xAH(~St`fl:Yj~c|c!_u", "vH#w.*fs^X7xKo8(_iW9))0+>hDm|T8(xubQaalr_.7cM&Kg%d", "iI!Q8J<9{2N1(+pkkI,G|?80}aSR:8A|C>gRF", "e]A`", "YsXF", "JNh?0es`", "z[<TJ@9F"]), rS(WS = function() {
        var FF, WF, SF, CF = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        rS(FF = void 0, WF = []);
        try {
          rS(FF = Object, WF[eW[11]]("".__proto__.constructor.name))
        } catch (CS) {}
        FF: for (SF = eW[0]; SF < CF[eW[4]]; SF++) try {
          var AF;
          for (FF = CF[SF](), AF = eW[0]; AF < WF[eW[4]]; AF++)
            if (typeof FF[WF[AF]] === eW[5]) continue FF;
          return FF
        } catch (CS) {}
        return FF || this
      }() || {}, SS = WS.TextDecoder, CS = WS.Uint8Array, AS = WS.NC, uS = WS.String || String, hS = WS.Array || Array, bC = function() {
        var FF, WF, SF = new hS(eW[22]);
        return rS(FF = uS[eW[8]] || uS.fromCharCode, WF = []),
          function(CF) {
            var AF, uF, hF, bW;
            for (rS(uF = void 0, hF = CF[eW[4]], WF[eW[4]] = eW[0]), bW = eW[0]; bW < hF;) rS(uF = CF[bW++], uF <= eW[21] ? AF = uF : uF <= 223 ? AF = (31 & uF) << eW[7] | CF[bW++] & eW[6] : uF <= 239 ? AF = (uF & eW[27]) << eW[10] | (CF[bW++] & eW[6]) << eW[7] | CF[bW++] & eW[6] : uS[eW[8]] ? AF = (uF & eW[9]) << 18 | (CF[bW++] & eW[6]) << eW[10] | (CF[bW++] & eW[6]) << eW[7] | CF[bW++] & eW[6] : (AF = eW[6], bW += eW[18]), WF[eW[11]](SF[AF] || (SF[AF] = FF(AF))));
            return WF.join("")
          }
      }()),
      function(FF) {
        return typeof RW[FF] === eW[5] ? RW[FF] = function(FF) {
          var WF, SF, CF, AF, uF, hF, bW;
          for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
            var dF = 'G(0>zhKxF~*=7wJ)]}X2O.Mfm5YNI`To<p@"vrEkZg+q?P#%AB/6!Lu,ls^UaC1:H|4;eDtSjR3cbV_Qy$&8[Wn9di{'.indexOf(WF[bW]);
            if (dF !== -eW[1])
              if (hF < eW[0]) hF = dF;
              else {
                rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                do {
                  rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                } while (uF > eW[9]);
                hF = -eW[1]
              }
          }
          return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
        }(iS[FF]) : RW[FF]
      }(119) in QW && function() {
        var FF, WF, SF, CF = function(WF) {
          var SF = [];
          return (WF === eW[1] || WF >= eW[19]) && FF(SF, [], WF, eW[0]), SF
        };
        rS(FF = function(CF, AF, uF, hF) {
          var bW;
          for (bW = hF; bW < uF; bW++) {
            var dF;
            if (AF.length !== bW) return;
            for (dF = eW[0]; dF < uF; dF++) SF(AF, [bW, dF]) && (rS(AF.push([bW, dF]), FF(CF, AF, uF, bW + eW[1])), AF.length === uF && CF.push(WF(AF)), AF.pop())
          }
        }, WF = function(FF) {
          var WF, SF, CF = [];
          for (WF = FF.length, SF = eW[0]; SF < WF; SF++) {
            var AF;
            for (CF[SF] = "", AF = eW[0]; AF < WF; AF++) CF[SF] += FF[SF][eW[1]] === AF ? eW[30] : eW[31]
          }
          return CF
        }, SF = function(FF, WF) {
          var SF, CF = FF.length;
          for (SF = eW[0]; SF < CF; SF++) {
            if (FF[SF][eW[0]] === WF[eW[0]] || FF[SF][eW[1]] === WF[eW[1]]) return eW[12];
            if (Math.abs((FF[SF][eW[0]] - WF[eW[0]]) / (FF[SF][eW[1]] - WF[eW[1]])) === eW[1]) return eW[12]
          }
          return eW[24]
        }, console.log(CF))
      }(), (() => {
        function FF(FF) {
          return typeof RW[FF] === eW[5] ? RW[FF] = function(FF) {
            var WF, SF, CF, AF, uF, hF, bW;
            for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
              var dF = '=qMcnQjTW#GNe^6vC!a(Dk:0/|1hyzBJ$U"gSd%P{5>f_L@}3IXw4ru`?)A+m7FHO9~bpZxYlK2sR]V.8*<[,it&o;E'.indexOf(WF[bW]);
              if (dF !== -eW[1])
                if (hF < eW[0]) hF = dF;
                else {
                  rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                  do {
                    rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                  } while (uF > eW[9]);
                  hF = -eW[1]
                }
            }
            return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
          }(iS[FF]) : RW[FF]
        }
        const WF = eW[20],
          SF = FF(120) + FF(121) + FF(122),
          CF = [eW[0], eW[1], eW[32], eW[18]].map((FF => {
            let WF = eW[0];
            for (let CF = eW[18]; CF >= eW[0]; CF--) {
              function AF(FF) {
                var WF, SF, CF, AF, uF, hF, bW;
                for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                  var dF = 'eqZogrkaQSEihHNDOTlfdbIRJLMXPWnsC`pGVB{u:A@jY=&vt^cK9Um,x(3_*};|1~4"?%z8)<y$52>[+/w7].0!#F6'.indexOf(WF[bW]);
                  if (dF !== -eW[1])
                    if (hF < eW[0]) hF = dF;
                    else {
                      rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                      do {
                        rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                      } while (uF > eW[9]);
                      hF = -eW[1]
                    }
                }
                return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
              }

              function uF(FF) {
                return typeof RW[FF] === eW[5] ? RW[FF] = AF(iS[FF]) : RW[FF]
              }
              WF = WF << eW[2] | SF[uF(123) + uF(124)](FF * eW[19] + CF)
            }
            return WF >>> eW[0]
          })),
          AF = (FF, WF) => (function(FF) {
            return typeof RW[FF] === eW[5] ? RW[FF] = function(FF) {
              var WF, SF, CF, AF, uF, hF, bW;
              for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                var dF = 'rP>DU3gBAV+^zebn@y"k[x~/%aLRX,9pt`<}w.4:M7N&vK2S5O{m!(|6G0YCE*#o$Tq;s1Quh)=_]?c8JiZIFWflHdj'.indexOf(WF[bW]);
                if (dF !== -eW[1])
                  if (hF < eW[0]) hF = dF;
                  else {
                    rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                    do {
                      rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                    } while (uF > eW[9]);
                    hF = -eW[1]
                  }
              }
              return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
            }(iS[FF]) : RW[FF]
          }(125) + "4" in QW && function() {
            var FF = function(FF) {
              var WF, SF, CF, AF, uF = FF.length;
              for (rS(WF = [], SF = eW[0]), CF = eW[0]; CF < uF; CF++) WF.push(CF !== eW[0] && FF[CF] > FF[CF - eW[1]] ? WF[CF - eW[1]] + eW[1] : eW[1]);
              for (AF = uF - eW[1]; AF >= eW[0]; AF--) AF !== uF - eW[1] && FF[AF] > FF[AF + eW[1]] && (WF[AF] = Math.max(WF[AF], WF[AF + eW[1]] + eW[1])), SF += WF[AF];
              return SF
            };
            console.log(FF)
          }(), FF << WF | FF >>> 32 - WF),
          uF = (FF, WF, SF, CF, uF) => {
            rS(FF[WF] += FF[SF], FF[uF] = AF(FF[uF] ^ FF[WF], eW[20]), FF[CF] += FF[uF], FF[SF] = AF(FF[SF] ^ FF[CF], eW[10]), FF[WF] += FF[SF], FF[uF] = AF(FF[uF] ^ FF[WF], eW[2]), FF[CF] += FF[uF], FF[SF] = AF(FF[SF] ^ FF[CF], eW[9]))
          };
        dW = (FF, SF, AF, hF) => {
          function bW(FF) {
            return typeof RW[FF] === eW[5] ? RW[FF] = function(FF) {
              var WF, SF, CF, AF, uF, hF, bW;
              for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                var dF = '2*6~+&=x%HKsiPA.Bd}$3zn[]L@py4I#|>_oO`{Y/uZFb(GUma;cvC8^MJ5DQtqh"!7RSre?ENl0WfTVjk9<,w)gX:1'.indexOf(WF[bW]);
                if (dF !== -eW[1])
                  if (hF < eW[0]) hF = dF;
                  else {
                    rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                    do {
                      rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                    } while (uF > eW[9]);
                    hF = -eW[1]
                  }
              }
              return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
            }(iS[FF]) : RW[FF]
          }
          const dF = new DataView(SF[bW(eW[28])], SF[bW(eW[21]) + bW(eW[22])], PW),
            PF = new Uint32Array(WF);
          rS(PF[bW(eW[23])](CF), PF[bW(eW[23])](FF, eW[19]), PF[eW[16]] = dF[bW(eW[25]) + bW(eW[26])](eW[0], eW[24]), PF[eW[17]] = dF[bW(eW[25]) + bW(eW[26])](eW[19], eW[24]), PF[eW[27]] = dF[bW(eW[25]) + bW(eW[26])](eW[2], eW[24]));
          const RF = new Uint32Array(WF),
            iW = new Uint8Array(RF[bW(eW[28])]);
          for (let eF = eW[0], EF = AF; eF < hF[bW(132)]; eF += WF * eW[19], EF++) {
            function QF(FF) {
              var WF, SF, CF, AF, uF, hF, bW;
              for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                var dF = '/u`+@vz]SF{o.nEND:>th=jJ,gs5^8b7G1lOTcmx~pr6iydYRCQV#%wLW9|$IUZ<XHM&)fB(}A[KP?0"*e2q_3a4!;k'.indexOf(WF[bW]);
                if (dF !== -eW[1])
                  if (hF < eW[0]) hF = dF;
                  else {
                    rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                    do {
                      rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                    } while (uF > eW[9]);
                    hF = -eW[1]
                  }
              }
              return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
            }

            function rW(FF) {
              return typeof RW[FF] === eW[5] ? RW[FF] = QF(iS[FF]) : RW[FF]
            }
            bW(133), rS(PF[eW[10]] = EF, RF[rW(134)](PF));
            for (let tW = eW[0]; tW < eW[33]; tW++) {
              function TF() {
                var FF, WF, SF;
                rS(FF = function(CF, AF, uF, hF) {
                  var bW;
                  for (bW = hF; bW < uF; bW++) {
                    var dF;
                    if (AF.length !== bW) return;
                    for (dF = eW[0]; dF < uF; dF++) SF(AF, [bW, dF]) && (rS(AF.push([bW, dF]), FF(CF, AF, uF, bW + eW[1])), AF.length === uF && CF.push(WF(AF)), AF.pop())
                  }
                }, WF = function(FF) {
                  var WF, SF, CF = [];
                  for (WF = FF.length, SF = eW[0]; SF < WF; SF++) {
                    var AF;
                    for (CF[SF] = "", AF = eW[0]; AF < WF; AF++) CF[SF] += FF[SF][eW[1]] === AF ? eW[30] : eW[31]
                  }
                  return CF
                }, SF = function(FF, WF) {
                  var SF, CF = FF.length;
                  for (SF = eW[0]; SF < CF; SF++) {
                    if (FF[SF][eW[0]] === WF[eW[0]] || FF[SF][eW[1]] === WF[eW[1]]) return eW[12];
                    if (Math.abs((FF[SF][eW[0]] - WF[eW[0]]) / (FF[SF][eW[1]] - WF[eW[1]])) === eW[1]) return eW[12]
                  }
                  return eW[24]
                }, console.log((function(WF) {
                  var SF = [];
                  return (WF === eW[1] || WF >= eW[19]) && FF(SF, [], WF, eW[0]), SF
                })))
              }
              rW(135) + "l" in QW && TF(), rS(uF(RF, eW[0], eW[19], eW[2], eW[10]), uF(RF, eW[1], eW[34], eW[36], eW[16]), uF(RF, eW[32], eW[7], eW[33], eW[17]), uF(RF, eW[18], eW[9], eW[35], eW[27]), uF(RF, eW[0], eW[34], eW[33], eW[27]), uF(RF, eW[1], eW[7], eW[35], eW[10]), uF(RF, eW[32], eW[9], eW[2], eW[16]), uF(RF, eW[18], eW[19], eW[36], eW[17]))
            }
            for (let aW = eW[0]; aW < WF; aW++) {
              function kW(FF) {
                var WF, SF, CF, AF, uF, hF, bW;
                for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                  var dF = 'Bd_$}5*(<u>%6@/`:|8DoAfrj&hNsI=iGveLacH40mCbz?3+M)p!.EZlRXOKStU#;kqw~Y"TF{9Wxg^]JyPnV,1Q[27'.indexOf(WF[bW]);
                  if (dF !== -eW[1])
                    if (hF < eW[0]) hF = dF;
                    else {
                      rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                      do {
                        rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                      } while (uF > eW[9]);
                      hF = -eW[1]
                    }
                }
                return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
              }

              function qW(FF) {
                return typeof RW[FF] === eW[5] ? RW[FF] = kW(iS[FF]) : RW[FF]
              }
              qW(136), RF[aW] += PF[aW]
            }
            const gW = Math[rW(142)](WF * eW[19], hF[rW(143)] - eF);
            for (let VF = eW[0]; VF < gW; VF++) {
              function NF(FF) {
                var WF, SF, CF, AF, uF, hF, bW;
                for (rS(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = eW[0], uF = eW[0], hF = -eW[1]), bW = eW[0]; bW < SF; bW++) {
                  var dF = '1FteTdjEgMpJGDQR{Nn/xY`aW3fmqo0^}wvkuXc.[CrlZsh|"4LH8K:bz)_279@<$U#6,5];iBy&S?OP(=~%V+>A!*I'.indexOf(WF[bW]);
                  if (dF !== -eW[1])
                    if (hF < eW[0]) hF = dF;
                    else {
                      rS(hF += dF * eW[13], AF |= hF << uF, uF += (hF & eW[14]) > eW[15] ? eW[16] : eW[17]);
                      do {
                        rS(CF.push(AF & eW[3]), AF >>= eW[2], uF -= eW[2])
                      } while (uF > eW[9]);
                      hF = -eW[1]
                    }
                }
                return hF > -eW[1] && CF.push((AF | hF << uF) & eW[3]), EW(CF)
              }

              function DF(FF) {
                return typeof RW[FF] === eW[5] ? RW[FF] = NF(iS[FF]) : RW[FF]
              }
              DF(144), hF[eF + VF] ^= iW[VF]
            }
          }
        }
      })();
    const TW = [2, 0, 1, 8, 3, "a", "i", "g", 5, 74, 4, 255, "length", "b", 13, "undefined", void 0, 197, "d", 63, 6, "fromCodePoint", 7, 12, "push", 100, 91, 8191, 88, 14, 176, 9, "e", 243, 16, "T", 512, 236, "h", 141, 42, 79, 94, 77, 187, 212, 15, 33, 164, 23, 1023, 127, 31, 128, 18, 219, 45, 203, 32, 226, 24, 10, 19, 64, 196, 120, 65535, 158, 155, 95, 208, "f", 207, 33554432, 67108864, 11, "c", 103, 98, 169, 38, 130, 132];

    function aS(...FF) {
      return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = function(...FF) {
        for (VW(FF[TW[12]] = TW[2], FF[TW[5]] = 'uPGMVjALemlNB9`I/F[g|${7+kv@*?&Ca.n]wQbrZ)>y=:oH4},qYXc8dx"US1%zRD~K_T;JW(f3s#<65Ehp02^Oti!', FF[TW[0]] = "" + (FF[TW[1]] || ""), FF[TW[4]] = FF[TW[0]].length, FF[TW[10]] = [], FF[TW[8]] = TW[1], FF[-TW[9]] = TW[1], FF[TW[7]] = -TW[2]), FF[TW[3]] = TW[1]; FF[TW[3]] < FF[TW[4]]; FF[TW[3]]++)
          if (FF[TW[6]] = FF[TW[5]].indexOf(FF[TW[0]][FF[TW[3]]]), FF[TW[6]] !== -TW[2])
            if (FF[TW[7]] < TW[1]) FF[TW[7]] = FF[TW[6]];
            else {
              VW(FF[TW[7]] += FF[TW[6]] * TW[26], FF[TW[8]] |= FF[TW[7]] << FF[-TW[9]], FF[-TW[9]] += (FF[TW[7]] & TW[27]) > TW[28] ? TW[14] : TW[29]);
              do {
                VW(FF[TW[10]].push(FF[TW[8]] & TW[11]), FF[TW[8]] >>= TW[3], FF[-TW[9]] -= TW[3])
              } while (FF[-TW[9]] > TW[22]);
              FF[TW[7]] = -TW[2]
            } return FF[TW[7]] > -TW[2] && FF[TW[10]].push((FF[TW[8]] | FF[TW[7]] << FF[-TW[9]]) & TW[11]), kS(FF[TW[10]])
      }(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
    }

    function kS(...FF) {
      return FF[TW[12]] = TW[2], typeof SS !== TW[15] && SS ? (new SS).decode(new CS(FF[TW[1]])) : typeof AS !== TW[15] && AS ? AS.from(FF[TW[1]]).toString("utf-8") : bC(FF[TW[1]])
    }

    function qS() {}

    function VW() {
      VW = function() {}
    }
    VW(gS = {}, tS = ["1cY?{<XH@D%`@,nwY4Kj/x()Z9]6P", 'u[%LxqwGx`GG<E9rj_j,6f)9GIgQz"%+>fM?AEn+oe<f.V`', 'iqoL`8to2"m1P', "~_sCATM)sFrLsIDwr4|C0U9P", '$?%Yqq]]a~N3>k&?^>V,tb}Lz[WzU`eCiX#*v2L)"D2x0I@F3%)&jf7P', "9Ik&_WZ[nz$64@7]l}cC}zNExF", "x`<VWE{+SU3Ijw5ro_kck<9P", "^*8mtsF9UDCsi4yv|J{s5x,[}mm7Ch`Z^M0,@", "h|BlaUzq^RE;lEu7M?+&OT`e3dy%?43kEnam6bPT4BOfgG`gkcMj", "Cn<LL^R&sNG3L@Y@kJHm2TPX;gd(X1>bED<mzf9z*`", "{Sv?y;K]Ue[qnj=r[o+mkbu", "jm#v~%OxARD$n1JQuB#vW8+wod>~m4!)nc)&98,R5[mq0pNkkoNl|", "<C7.tJT3oefd=U!{8_cs|J1?Tg4Tg`E@}y|?SoKTV", '/Q?fZ]u".B?%x+O*"n<YF8fA^97Fq"17F[qa1WKP', ":%9L]Zu", "P~s?qqvw:`[6g,rQ#qAm+,rgM", "`aALRwso}zC@7`A", "2U.a}}le~S(k;T?FFmG", 'Ma>a]ZiLMRwWNHu+bm)&bQUHW"V/HhNki`oL=qE?!DZ+DW&>fC`LZ_NP', '<kC(4riTX9%Pz`KFJq@f)1b+C[I3T4i?+m+mg<l"|c>%ZM', "2>z}_8&GpStKUM", "O%P<Sq1z5Sd;&QyrIo)&PE<+>NT;zhr[Bo<C[s$X4m", "W_%}Z(i?uI,", "0q9f~E6xoNS$j4x)4x,?!<Cx?%B4mW]&CnSXI8qg8R,CR@P&z(a&Z5e+,x)TP", "%cj,M^9kIBaW6@zF_(&s^Y#P}c<Ipvt{>Jia(6RAEm", "w4#C{svf0cW(H;K&dMSlKfyL7R9|],(k5q[qb(l+UN", "Fx+3eSlwk`*F5@c*9[{L^2k)/B=V5pl", '(d6V5Jl^]m)4,kI|7DS?R6J9#UJV%THv&nBl"0Ve(%OP5@EvJ`cV', 'E;W}3,YoB%:Cz;"?~u', 'BzxqOH~"H$_;4@1?O|C}u0Y"t"5zZ@2]~CJVRo>"}Bd', "7aPA8;#P9`Ea}VDwyC<V2TX9PxCL2+knAP", 'oFX8;f,"s%/qNbd*QvU#IwFL5Bq+X4srjvs?A8<Y4[,[`j1&jmR}k', 'wA_,c#PT2g/6O`a?NJ|lS"(x9$d(Np)Cvv1f4zg9GcuDZ@!wbMdm', 'rFOV:zZZ"FfPBI<gaZfaGox7%zz(.},nWd_XoQu', "WNTCB8HH1[NWYI#rf4?L+bu", 'yf8ms%sn"%UUwpi/?P', "z(r*%6.xe|McKh}ZSv/m}}]]l8+", "JFV#P^82kF`h=UG[", "8J8Yi<<o%zY]E+u?s`>@;T}P", "I}2YaHOLhS1[P", 'IS~jlw62yFN9j/{]@7a&H"7gH$@lTW.QjBQCF8i]aBvT]vN', ':77}OY;[~xEK]"S>sqIsWwH9ZF', "a4HY?1$TzX1L./JCZvs#@", "7ZF@Pr_+bR<{yb;++JPqSriP", "PySf;Ep)M", "oA0jr}gHd9", "/vfem^?LuIj6N@:vCQ$f`,u", ",MZ&0pY[v|6;u", 'sN7s]<b+hIC6EE~[zD?LFs|R{"aTvb5@!XmA', "+vP<y5b[:%]6;9v>m7PA>};Y9`Ydb1x?HDRA6EC)A", "j_hq8zyLJ9#}+JzQ5nG", "wScmZHu", "iFhqB%ve0gLAYIOZsd]WTwE2*`2?;9F@.q98Snk]L", '.Sfq%"p9}cm"0J8nk?q?(4r]*FE;Kp3ghA+}ZzSo6zN3hG', "yD`Y._lo>%*6ob4@yBHs2,v&Yc<dHbLguS#,J,y].x^,k4P7_c;JTXqLL", 'd:]?f%"GZ9w6i+OZ=C,@E:9g}cG9,}_&8`2v*USoKS&6;}mrrcqfU;4G', "TQ9l=5dG+9&l1+G+A}Yl<f)gyN)", 'Gy$8L6!+(%7q"kZk*v3jhT}3V', ";q;CXX+GoNU[BIEZLcBf#wNX/xu3qpM&/xQ8Pwl+oI3X7bQQL}HYQ5%o2g", "|aR(a_{+L", '3A/.pJ~oDmrsKIS?9zYXp,)x}B:sy`8*L};L:#V+>`p{r"F|aoUl8Q(P', "~q.@Q569%N}TT}(kfq>qe8)LHz!#Sw;+V}hjSW4&e|Of+4z?", ')yS#IbD]RX+41+4vZQz}}_T)X"~aIhi7X4VLNb=Z<I', '"ZJVOJ+&tDH$Hh{Z5n5c0YxH{R^P25Nk8n>@/', "IqB#:1k?Fcv96vHvL_zVp%L33N6Xv1][.7ecj85ZV9s}OG", "p`|fVw>ZF[5emwPF*Dsf(%c&4x|sP", "KcXf+Y_+EB~}z;IvlV;Vfw{f:$QlP", ':BC((S6Le"TIZJmr3u', '8AFq"qYR(D}dRp:@}x8mkp<AfNPH|UDQ|x%()5WoU`{9%kPysDhX_wd&^g', 'z%icH;ZBTRS[NG+?2`;Y7Y?gZ|&`!E"wj[EA%WbG,IP3A1!)h|M', "Qf!eQQCzHzm@VJsb", "zDn?,Q!5o[O#dMdn_Mk&esvegcN4ZJLCga~qKWu", "Fa8*3f(P<NM/C`{nS4&LQ1u", '}A1Lh.pL4X7q1+GF|xo(8zso"|3P)/P7?JkA', '$m&8iUaGk"vnXV', "G?P3JS$9|9&Y0IF@!%:8H;u", "Pa+<{sXP", '`xVCC]u>uzc(A,>b6d7&VX"fNDY+VMS7mo6sY"i7PS[nrGL', "k_sja([;uSP3l,MQ%4#L.UV[,g3e25aw=7]W^2i7RI(#/IeghAbL:_I9V", '4A0?c"kX&$cT;;ZC*P', '`VJY,Qb[c9Yz2+*)Gapa<sx9IIGW7b6veVNa*Z&Y)"3X1VKQ[S_l|TUP', '"FSX~E!o"FP_XW%+1mUX_8AoM', '4J}qZ(jO|RP&+pS&uc@WM8gg2R1dTS2@"DT89xkg3eA_0pJk9}Z&>}u', "8x3aJ8A+bgU5uw,n!X,qZ(FT:U$FD4,ZsDCYWsO)6ezU(w%wjV=?L6|+w9", "7c;C4;E?Hez;CG%7j?<sAE<Z1`", 'moO*TSZ5Z"j">1srMV/.68=BIznl4I7*hnOVwcy]MB@|QW&F{c!junqP', "jvh3gJXP", "(?7iOi>u", ";%K1", "oC`gcU#Jr8pBUOYUV_n1", ':31LX:nR|4w6Dd[VVn"g', "1)vm{zX%g(5|wYQ}:m[1", "I>Fg`mr:T1oe{PLV:C&1", "{Sop5=r^", "=CFa$o43", "J#iJ^O/3", ".6UM`", "J#iJ?%D&", "spF*l", "r3<|$O[?$GQNIOen|CPIEGgs1&", "c$sgV;H2C)_Ds<@B#I?~tb=:KX", "!P2A}lq()4wl`2c)i>zViUMP_y", "t`5mH_SGG", "ZvMaJ{FgL", "}_jlW,K`[", "9zUl<>jP[", 'Yi>^|"T&%', "ag$):oOQwl&}I3ld16w+", '$Nc^;#T&vl^K?&5c"2`+', ";(rf6dCNiQW@GbBJ16nw", "|Fbw[@f41lj=uH+*6]^w", "V7sy[:rJl", "1:nc9:=WW", "97V8,:KiC", "fgA8CY^", '^HAD""Pf:$N', "/_bY{O6a", "s30)f;*z", "(yN0s|&`", "fyN<Lil&Ix~X;.pch@FYUUVd3SKjq1pc3tmC3hfPrDj(0vhy1yAnY", "eP!=R#Kr%h:./I$G7<XQ66nWl8EN2)$G.c9f[[UA7R:35M/z?g", '+F1C42z5&;sK9AYppFPBm%4^OSe"d4[m<Lg"v', "=KY^", "MA>niv:`", "7Gyl4vd`", "0APR", "WWoUeZV)", "Z(&pB", "SW5n3po", "SWPX;Da)", "YW3_", ">h2$/lDO", "X}dX,gmAX4", 'M,[K"]9O', "GfFp", "L}UpD", "]5Hp", "F,NXiy[", "8^kG|nqO", "!h7usn9O"]), VW(WS = function(...FF) {
      VW(FF[TW[12]] = TW[1], FF[TW[5]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], FF[TW[13]] = TW[16], FF[TW[0]] = []);
      try {
        VW(FF[TW[13]] = Object, FF[TW[0]][TW[24]]("".__proto__.constructor.name))
      } catch (tS) {}
      FF: for (FF[TW[4]] = TW[1]; FF[TW[4]] < FF[TW[5]][TW[12]]; FF[TW[4]]++) try {
        for (FF[TW[13]] = FF[TW[5]][FF[TW[4]]](), FF[TW[14]] = TW[1]; FF[TW[14]] < FF[TW[0]][TW[12]]; FF[TW[14]]++)
          if (typeof FF[TW[13]][FF[TW[0]][FF[TW[14]]]] === TW[15]) continue FF;
        return FF[TW[13]]
      } catch (tS) {}
      return FF[TW[13]] || this
    }() || {}, SS = WS.TextDecoder, CS = WS.Uint8Array, AS = WS.NC, uS = WS.String || String, hS = WS.Array || Array, bC = function(...FF) {
      return VW(FF[TW[12]] = TW[1], FF[TW[13]] = new hS(TW[53]), FF[-TW[25]] = uS[TW[21]] || uS.fromCharCode, FF[-TW[17]] = []),
        function(...WF) {
          for (VW(WF[TW[12]] = TW[2], WF[TW[5]] = TW[16], WF[TW[13]] = TW[16], WF[TW[4]] = WF[TW[1]][TW[12]], FF[-TW[17]][TW[12]] = TW[1]), WF[TW[18]] = TW[1]; WF[TW[18]] < WF[TW[4]];) VW(WF[TW[13]] = WF[TW[1]][WF[TW[18]]++], WF[TW[13]] <= TW[51] ? WF[TW[5]] = WF[TW[13]] : WF[TW[13]] <= 223 ? WF[TW[5]] = (WF[TW[13]] & TW[52]) << TW[20] | WF[TW[1]][WF[TW[18]]++] & TW[19] : WF[TW[13]] <= 239 ? WF[TW[5]] = (WF[TW[13]] & TW[46]) << TW[23] | (WF[TW[1]][WF[TW[18]]++] & TW[19]) << TW[20] | WF[TW[1]][WF[TW[18]]++] & TW[19] : uS[TW[21]] ? WF[TW[5]] = (WF[TW[13]] & TW[22]) << TW[54] | (WF[TW[1]][WF[TW[18]]++] & TW[19]) << TW[23] | (WF[TW[1]][WF[TW[18]]++] & TW[19]) << TW[20] | WF[TW[1]][WF[TW[18]]++] & TW[19] : (WF[TW[5]] = TW[19], WF[TW[18]] += TW[4]), FF[-TW[17]][TW[24]](FF[TW[13]][WF[TW[5]]] || (FF[TW[13]][WF[TW[5]]] = FF[-TW[25]](WF[TW[5]]))));
          return FF[-TW[17]].join("")
        }
    }()), (() => {
      function FF(...FF) {
        return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = function(...FF) {
          for (VW(FF[TW[12]] = TW[2], FF[TW[2]] = '5z`6w+%[_]RFpPgABQM*J~>{&937tem^01d#co:;i4SGWXLb()rNKflnuyasHYEC$.T=v@2U}j<!D|x/,"hZk?IO8qV', FF[TW[13]] = "" + (FF[TW[1]] || ""), FF[TW[4]] = FF[TW[13]].length, FF[TW[10]] = [], FF[TW[8]] = TW[1], FF[TW[20]] = TW[1], FF[TW[7]] = -TW[2]), FF[-TW[67]] = TW[1]; FF[-TW[67]] < FF[TW[4]]; FF[-TW[67]]++)
            if (FF[TW[31]] = FF[TW[2]].indexOf(FF[TW[13]][FF[-TW[67]]]), FF[TW[31]] !== -TW[2])
              if (FF[TW[7]] < TW[1]) FF[TW[7]] = FF[TW[31]];
              else {
                VW(FF[TW[7]] += FF[TW[31]] * TW[26], FF[TW[8]] |= FF[TW[7]] << FF[TW[20]], FF[TW[20]] += (FF[TW[7]] & TW[27]) > TW[28] ? TW[14] : TW[29]);
                do {
                  VW(FF[TW[10]].push(FF[TW[8]] & TW[11]), FF[TW[8]] >>= TW[3], FF[TW[20]] -= TW[3])
                } while (FF[TW[20]] > TW[22]);
                FF[TW[7]] = -TW[2]
              } return FF[TW[7]] > -TW[2] && FF[TW[10]].push((FF[TW[8]] | FF[TW[7]] << FF[TW[20]]) & TW[11]), kS(FF[TW[10]])
        }(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
      }
      const WF = TW[31],
        SF = aS(102) + aS(TW[77]) + FF(104) + FF(105) + FF(106),
        CF = {
          [TW[31]]: FF(107) + FF(108) + FF(109) + FF(110)
        },
        AF = WF => {
          const SF = CF[WF];
          if (!SF) {
            function AF(...FF) {
              for (VW(FF[TW[12]] = TW[2], FF[TW[5]] = '^fWTgVlC0h8<ei>&pZ_$bAd5~xN/R9?[InHq1)`j]2Q7}+(ym|{;XFPo6MBG=%!K#@vD*Jc:Ok3,u.sw"zSYaEL4trU', FF[TW[68]] = "" + (FF[TW[1]] || ""), FF[TW[4]] = FF[TW[68]].length, FF[-TW[69]] = [], FF[TW[65]] = TW[1], FF[TW[71]] = TW[1], FF[TW[7]] = -TW[2]), FF[-TW[70]] = TW[1]; FF[-TW[70]] < FF[TW[4]]; FF[-TW[70]]++)
                if (FF[TW[6]] = FF[TW[5]].indexOf(FF[TW[68]][FF[-TW[70]]]), FF[TW[6]] !== -TW[2])
                  if (FF[TW[7]] < TW[1]) FF[TW[7]] = FF[TW[6]];
                  else {
                    VW(FF[TW[7]] += FF[TW[6]] * TW[26], FF[TW[65]] |= FF[TW[7]] << FF[TW[71]], FF[TW[71]] += (FF[TW[7]] & TW[27]) > TW[28] ? TW[14] : TW[29]);
                    do {
                      VW(FF[-TW[69]].push(FF[TW[65]] & TW[11]), FF[TW[65]] >>= TW[3], FF[TW[71]] -= TW[3])
                    } while (FF[TW[71]] > TW[22]);
                    FF[TW[7]] = -TW[2]
                  } return FF[TW[7]] > -TW[2] && FF[-TW[69]].push((FF[TW[65]] | FF[TW[7]] << FF[TW[71]]) & TW[11]), kS(FF[-TW[69]])
            }

            function uF(...FF) {
              return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = AF(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
            }
            throw new Error(uF(111) + uF(112) + uF(113) + uF(114) + WF)
          }
          return [TW[1], TW[2], TW[0], TW[4], TW[10], TW[8], TW[20], TW[22]].map((WF => parseInt(SF[FF(115)](WF * TW[3], WF * TW[3] + TW[3]), TW[34])))
        };
      VW(uW = (...FF) => (FF[TW[12]] = TW[2], function(...FF) {
        return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = function(...FF) {
          for (VW(FF[TW[12]] = TW[2], FF[-TW[59]] = 'caWKF3zG&MIkE$b~^os4<m,7r]Nf/9xyeDh>g5}?VLH_C2pRB`Tn.6qOZ;=jPQX{JAd![S0l:v%tYUu*+@"|(81w#i)', FF[TW[13]] = "" + (FF[TW[1]] || ""), FF[-TW[17]] = FF[TW[13]].length, FF[TW[10]] = [], FF[TW[8]] = TW[1], FF[TW[71]] = TW[1], FF[-TW[72]] = -TW[2]), FF[TW[38]] = TW[1]; FF[TW[38]] < FF[-TW[17]]; FF[TW[38]]++)
            if (FF[TW[31]] = FF[-TW[59]].indexOf(FF[TW[13]][FF[TW[38]]]), FF[TW[31]] !== -TW[2])
              if (FF[-TW[72]] < TW[1]) FF[-TW[72]] = FF[TW[31]];
              else {
                VW(FF[-TW[72]] += FF[TW[31]] * TW[26], FF[TW[8]] |= FF[-TW[72]] << FF[TW[71]], FF[TW[71]] += (FF[-TW[72]] & TW[27]) > TW[28] ? TW[14] : TW[29]);
                do {
                  VW(FF[TW[10]].push(FF[TW[8]] & TW[11]), FF[TW[8]] >>= TW[3], FF[TW[71]] -= TW[3])
                } while (FF[TW[71]] > TW[22]);
                FF[-TW[72]] = -TW[2]
              } return FF[-TW[72]] > -TW[2] && FF[TW[10]].push((FF[TW[8]] | FF[-TW[72]] << FF[TW[71]]) & TW[11]), kS(FF[TW[10]])
        }(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
      }(116) in qS && function() {
        function FF(...FF) {
          return FF[TW[12]] = TW[2], FF[TW[1]][TW[2]] * TW[74] + (FF[TW[1]][TW[1]] < TW[1] ? TW[73] | FF[TW[1]][TW[1]] : FF[TW[1]][TW[1]])
        }

        function WF(...FF) {
          switch (FF[TW[12]] = TW[2], ((FF[TW[1]] & TW[73]) !== TW[1]) * TW[2] + (FF[TW[1]] < TW[1]) * TW[0]) {
            case TW[1]:
              return [FF[TW[1]] % TW[73], Math.trunc(FF[TW[1]] / TW[74])];
            case TW[2]:
              return [FF[TW[1]] % TW[73] - TW[73], Math.trunc(FF[TW[1]] / TW[74]) + TW[2]];
            case TW[0]:
              return [((FF[TW[1]] + TW[73]) % TW[73] + TW[73]) % TW[73], Math.round(FF[TW[1]] / TW[74])];
            case TW[4]:
              return [FF[TW[1]] % TW[73], Math.trunc(FF[TW[1]] / TW[74])]
          }
        }
        let SF = FF([TW[0], TW[10]]),
          CF = FF([TW[2], TW[0]]),
          AF = SF + CF,
          uF = AF - CF,
          hF = uF * TW[0],
          bW = hF / TW[0];
        VW(console.log(WF(AF)), console.log(WF(uF)), console.log(WF(hF)), console.log(WF(bW)))
      }(), FF[TW[1]] >= WF), hW = (...WF) => {
        function SF(...FF) {
          return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = function(...FF) {
            for (VW(FF[TW[12]] = TW[2], FF[TW[75]] = 'o%)E?y&zJU_|<^{Wqw+=P3}SGma:tBYFnc$I1/T"bQ47]g.e,sV(6RLHjlhx!`fvAkCrZ90~dN[KpX;u>D25@O#8iM*', FF[TW[0]] = "" + (FF[TW[1]] || ""), FF[TW[76]] = FF[TW[0]].length, FF[TW[18]] = [], FF[TW[32]] = TW[1], FF[TW[71]] = TW[1], FF[TW[7]] = -TW[2]), FF[TW[38]] = TW[1]; FF[TW[38]] < FF[TW[76]]; FF[TW[38]]++)
              if (FF[TW[31]] = FF[TW[75]].indexOf(FF[TW[0]][FF[TW[38]]]), FF[TW[31]] !== -TW[2])
                if (FF[TW[7]] < TW[1]) FF[TW[7]] = FF[TW[31]];
                else {
                  VW(FF[TW[7]] += FF[TW[31]] * TW[26], FF[TW[32]] |= FF[TW[7]] << FF[TW[71]], FF[TW[71]] += (FF[TW[7]] & TW[27]) > TW[28] ? TW[14] : TW[29]);
                  do {
                    VW(FF[TW[18]].push(FF[TW[32]] & TW[11]), FF[TW[32]] >>= TW[3], FF[TW[71]] -= TW[3])
                  } while (FF[TW[71]] > TW[22]);
                  FF[TW[7]] = -TW[2]
                } return FF[TW[7]] > -TW[2] && FF[TW[18]].push((FF[TW[32]] | FF[TW[7]] << FF[TW[71]]) & TW[11]), kS(FF[TW[18]])
          }(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
        }
        WF[TW[12]] = TW[0], FF(117);
        const CF = crypto[FF(123) + FF(124) + FF(125)](new Uint8Array(PW)),
          uF = AW[TW[32]][SF(126) + SF(TW[51])](WF[TW[2]], {
            [SF(TW[53])]: TW[2]
          });
        dW(AF(WF[TW[1]]), CF, TW[2], uF);
        const hF = new Uint8Array(PW + uF[SF(129)]);
        return VW(hF[SF(TW[81])](CF), hF[SF(TW[81])](uF, PW)), hF
      }, bS = (FF, WF) => {
        function CF(...FF) {
          return FF[TW[12]] = TW[2], typeof gS[FF[TW[1]]] === TW[15] ? gS[FF[TW[1]]] = function(FF) {
            var WF, SF, CF, AF, uF, hF, bW;
            for (VW(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = TW[1], uF = TW[1], hF = -TW[2]), bW = TW[1]; bW < SF; bW++) {
              var dF = '[tOefHGSAKpomUdhqM:;24z>ksDcL!NXuB=x0R#?,*18EF_"@b95Iavi)%Q7}P.<`^JC]wyTjY36n$/rglW{&(|V+~Z'.indexOf(WF[bW]);
              if (dF !== -TW[2])
                if (hF < TW[1]) hF = dF;
                else {
                  VW(hF += dF * TW[26], AF |= hF << uF, uF += (hF & TW[27]) > TW[28] ? TW[14] : TW[29]);
                  do {
                    VW(CF.push(AF & TW[11]), AF >>= TW[3], uF -= TW[3])
                  } while (uF > TW[22]);
                  hF = -TW[2]
                }
            }
            return hF > -TW[2] && CF.push((AF | hF << uF) & TW[11]), kS(CF)
          }(tS[FF[TW[1]]]) : gS[FF[TW[1]]]
        }
        if (WF[CF(131)] < PW) throw new Error(SF);
        const uF = new Uint8Array(WF[CF(TW[82])](PW));
        dW(AF(FF), WF[CF(TW[82])](TW[1], PW), TW[2], uF);
        const hF = new(AW[TW[32]][CF(133) + TW[32]])({
          [CF(134)]: !0
        });
        if (hF[CF(135)](uF), hF[CF(136)] || !hF[CF(137)]) {
          function bW(...FF) {
            FF[TW[12]] = TW[1]
          }
          throw CF(138) + "s" in qS && bW(), new Error(SF)
        }
        return hF[CF(139)]
      })
    })();
    var NW = SF(35448),
      DW = SF(35453);

    function LW(FF) {
      return uF.NC.from(Uint8Array.from(FF))
    }

    function mS(FF) {
      return Array.from(FF)
    }

    function OW(FF, WF) {
      return {
        [FF]: {
          x: WF
        }
      }
    }

    function xS(FF) {
      if (null === FF || "object" !== typeof FF || Array.isArray(FF)) return FF;
      const WF = Object.keys(FF);
      if (1 !== WF.length) return FF;
      const SF = FF[WF[0]];
      return null !== SF && "object" === typeof SF && !Array.isArray(SF) && "x" in SF ? SF.x : FF
    }

    function ZW(FF, WF) {
      return void 0 === WF ? null : dF.has(FF) ? null === WF ? null : JSON.stringify(WF) : WF
    }

    function oW(FF, WF) {
      return null === WF && dF.has(FF) ? null : "string" === typeof WF && dF.has(FF) ? JSON.parse(WF) : WF
    }

    function YW(FF, WF, SF) {
      return (0, AF.Q)(SF) ? null : OW(FF, ZW(WF, SF))
    }

    function MW(FF, WF) {
      return (0, AF.Q)(WF) ? null : oW(FF, xS(WF))
    }

    function cS(FF) {
      const WF = {};
      for (const SF in FF) {
        const CF = FF[SF];
        WF[SF] = void 0 === CF ? null : CF
      }
      return WF
    }

    function GW(FF) {
      const WF = {};
      for (const SF in FF) {
        const CF = FF[SF];
        null !== CF && void 0 !== CF && (WF[SF] = CF)
      }
      return WF
    }

    function zS(FF, WF) {
      return Object.prototype.hasOwnProperty.call(FF, WF)
    }

    function IW(FF, WF) {
      const SF = {};
      for (const CF in FF) {
        const AF = FF[CF];
        SF[CF] = WF(AF)
      }
      return SF
    }

    function fW(FF, WF, SF) {
      const CF = [];
      for (let AF = 0; AF < WF.length; AF++) {
        const uF = WF[AF];
        zS(FF, uF) && CF.push({
          i: AF,
          v: SF(uF, FF[uF])
        })
      }
      return CF
    }

    function yS(FF, WF, SF) {
      const CF = {};
      for (const AF of FF) {
        const FF = WF[AF.i];
        void 0 !== FF ? CF[FF] = SF(FF, AF.v) : console.error(`Unknown Partial field index ${AF.i}`)
      }
      return CF
    }

    function sW(FF, WF) {
      return (0, AF.Q)(WF) ? null : "jSF" === FF ? function(FF) {
        return OW(QF, fW(FF, DW.v, ((FF, WF) => YW(cW[FF], FF, WF))))
      }(WF) : YW(MF[FF], FF, WF)
    }

    function nW(FF, WF) {
      return (0, AF.Q)(WF) ? null : "jSF" === FF ? function(FF) {
        return (0, AF.Q)(FF) ? null : yS(FF, DW.v, MW)
      }(xS(WF)) : MW(FF, WF)
    }

    function HW(FF) {
      const {
        type: WF,
        ...SF
      } = FF, CF = {};
      for (const AF in SF) {
        const FF = SF[AF];
        CF[AF] = ZW(AF, FF)
      }
      if ("chunkAdded" === WF || "chunkRemoved" === WF) CF.rle = LW(CF.rle);
      else if ("playSound" === WF) {
        const FF = CF.eFF;
        CF.eFF = (0, AF.Q)(FF) ? null : cS(FF)
      } else if ("customKillfeed" === WF) {
        var uF, hF;
        CF.killer = cS(null !== (uF = CF.killer) && void 0 !== uF ? uF : {}), CF.victim = cS(null !== (hF = CF.victim) && void 0 !== hF ? hF : {})
      }
      return {
        [WF]: CF
      }
    }

    function KW(FF) {
      const WF = Object.keys(FF)[0],
        SF = FF[WF],
        CF = {};
      for (const AF in SF) {
        const FF = SF[AF];
        CF[AF] = oW(AF, FF)
      }
      if ("chunkAdded" === WF || "chunkRemoved" === WF) CF.rle = mS(CF.rle);
      else if ("playSound" === WF) {
        const FF = CF.eFF;
        CF.eFF = (0, AF.Q)(FF) ? null : GW(FF)
      } else if ("customKillfeed" === WF) {
        var uF, hF;
        CF.killer = GW(null !== (uF = CF.killer) && void 0 !== uF ? uF : {}), CF.victim = GW(null !== (hF = CF.victim) && void 0 !== hF ? hF : {})
      }
      return {
        type: WF,
        ...CF
      }
    }

    function wW(FF) {
      var WF, SF;
      return (0, AF.Q)(FF) ? null : {
        name: FF.name,
        amount: null !== (WF = FF.amount) && void 0 !== WF ? WF : null,
        attributes: JSON.stringify(null !== (SF = FF.attributes) && void 0 !== SF ? SF : {})
      }
    }

    function XW(FF) {
      if ((0, AF.Q)(FF)) return null;
      const WF = FF;
      return {
        name: WF.name,
        amount: WF.amount,
        attributes: JSON.parse(WF.attributes)
      }
    }

    function UW(FF) {
      if ((0, AF.Q)(FF)) return null;
      return {
        fullSlotsArray: Array.isArray(FF.slots),
        entries: fW(FF, DW.m, ((FF, WF) => {
          if ((0, AF.Q)(WF)) return null;
          if ("slots" === FF) {
            const FF = Array.isArray(WF) ? function(FF) {
              const WF = {};
              for (let SF = 0; SF < FF.length; SF++) WF[SF] = FF[SF];
              return WF
            }(WF) : WF;
            return OW(OF, function(FF) {
              const WF = {};
              for (const SF in FF) {
                const CF = FF[SF];
                WF[SF] = wW(CF)
              }
              return WF
            }(FF))
          }
          return OW(mW, WF)
        }))
      }
    }

    function BW(FF) {
      if ((0, AF.Q)(FF)) return;
      const WF = FF.fullSlotsArray;
      return yS(FF.entries, DW.m, ((FF, SF) => {
        if ((0, AF.Q)(SF)) return null;
        if ("slots" === FF) {
          const FF = function(FF) {
            const WF = {};
            for (const SF in FF) {
              const CF = FF[SF];
              WF[Number(SF)] = XW(CF)
            }
            return WF
          }(xS(SF));
          return WF ? function(FF) {
            const WF = [];
            for (let SF = 0; SF < AF.q; SF++) WF.push(SF in FF ? FF[SF] : null);
            return WF
          }(FF) : FF
        }
        return xS(SF)
      }))
    }

    function jS(FF) {
      return {
        entities: IW(FF.entities, (FF => fW(FF, DW.j, sW))),
        items: IW(FF.items, (FF => fW(FF, DW.n, ((FF, WF) => YW(GF[FF], FF, WF))))),
        camera: FF.camera,
        hotbar: UW(FF.hotbar),
        playerHud: (0, AF.Q)(FF.playerHud) ? null : fW(FF.playerHud, DW.r, ((FF, WF) => (0, AF.Q)(WF) ? null : function(FF, WF) {
          return {
            [FF]: WF
          }
        }("double", WF))),
        effects: (0, AF.Q)(FF.effects) ? null : (0, NW.n)(FF.effects),
        uiElements: fW(FF.uiElements, DW.x, ((FF, WF) => (0, AF.Q)(WF) ? null : JSON.stringify(WF))),
        environment: fW(FF.environment, DW.s, ((FF, WF) => YW(zW[FF], FF, WF))),
        structuralEvents: FF.structuralEvents.map(HW),
        ephemeralEvents: FF.ephemeralEvents.map(HW)
      }
    }

    function vS(FF) {
      var WF;
      const SF = {
          entities: IW(FF.entities, (FF => {
            const WF = yS(FF, DW.j, nW),
              SF = WF.type ? (0, CF.u)(WF.type) : null;
            return SF && (WF.type = "Mesh", WF.meshKind = SF.meshKind, WF.meshOpts = SF.meshOpts), WF
          })),
          items: IW(FF.items, (FF => yS(FF, DW.n, MW))),
          camera: {
            ...FF.camera,
            charging: null !== (WF = FF.camera.charging) && void 0 !== WF && WF
          },
          uiElements: yS(FF.uiElements, DW.x, ((FF, WF) => "string" === typeof WF ? JSON.parse(WF) : WF)),
          environment: yS(FF.environment, DW.s, MW),
          structuralEvents: FF.structuralEvents.map((FF => {
            const WF = KW(FF);
            return "rSF" === WF.type ? (WF.fromBlockData ??= null, WF.toBlockData ??= null) : "chunkAdded" !== WF.type && "chunkRemoved" !== WF.type || (WF.sharedBlockData ??= []), WF
          })),
          ephemeralEvents: FF.ephemeralEvents.map((FF => KW(FF)))
        },
        uF = BW(FF.hotbar);
      return void 0 !== uF && (SF.hotbar = uF), (0, AF.Q)(FF.playerHud) || (SF.playerHud = yS(FF.playerHud, DW.r, ((FF, WF) => (0, AF.Q)(WF) ? null : function(FF) {
        if (null === FF || "object" !== typeof FF || Array.isArray(FF)) return FF;
        const WF = Object.keys(FF);
        return 1 !== WF.length || "int" !== WF[0] && "double" !== WF[0] ? FF : FF[WF[0]]
      }(WF)))), (0, AF.Q)(FF.effects) || (SF.effects = (0, NW.i)(FF.effects)), SF
    }
    let JW, pW;
    var lW, FS, WS, SS, CS, AS, uS, hS, bC;
    const dS = [209, 0, 1, "h", 158, "a", "i", 99, 43, 60, "d", 8, 255, "length", "f", 170, "undefined", 7, void 0, "c", 4, 2, 137, 63, 6, "fromCodePoint", 12, "push", 36, 143, 202, 244, 91, 8191, 88, 13, 14, "join", 174, 116, 149, 199, 100, 3, 89, "b", "g", 192, 9, 52, 41, 194, 242, 5, 85, "NC", 145, 179, 146, 208, 87, "e", 1023, 191, 65536, 10, 55296, 56320, 134, 128, 31, 15, 18, 129, 39, 47, 117, 228, 214, 107, 94, 224, 211, 240, 231, 130, 127, 138, !1, 126, 203, 111, 193, 23, 82, 19, 210, 61];

    function PS(FF) {
      return typeof SS !== dS[16] && SS ? (new SS).decode(new CS(FF)) : typeof AS !== dS[16] && AS ? AS.from(FF).toString("utf-8") : bC(FF)
    }

    function RS() {}

    function iC() {
      iC = function() {}
    }
    iC(lW = {}, FS = ['mJM+3&"K$rL^u*7)_]4IL+&WW]_', "7[q$jt%K[C4ce|*M8*PGm_s>_8=B)E^Wg@[p;TQ,$@JuL*WWE}lyLw5", "xJ=9?s!Q)nrMNyq", "yS9YB}&tfR=B!=;K|?AqHf=WHQhB70l2LFiC", '7(TIk9>&t]WoWl5x>*p`+pAP"sOsYP', "o~+<w$=:v_5S;zb>F09ybXp<Pnq>Zm^&cQ1D", "D0>+$(hC1,#pD`_zG[!^vyAZ(_BNz=Dxl|IS`tiukN|0jMxdx>sC|oTRR)", "Qtcq^OZq&:z", "`(6WP}I)!(t9;uNOZac+hpnMv?>oOmldn|xpLK#PH", "P}vFy7}dpfE~_Rm`MWK/oTOm.@j75", 'r(ap5zWtIn&BgyL>.#(L5}n:6:5*g;:=B[0CMmFc3?RB"`6Mhc', "e`X9+^q,6t8SX&JMetrWzZ/D^,DGEh]Ws#!fW<;3t?dU:sl)", 'E(p}K&HUmeZ6*Hb",]Vl', "`W#0(A&tonPSj;6)2#iEDo.uo|j6GslY(FTWV*(P", 'E@]0SO/3oQ%8;zo`Gsc=1+N3"sn~qxOM,!9D', 'Z[^<CVpVIQr//z?.}!7FtO"uP(FqBH', 'H>EDN]cRC^=gH2PxP(<W3AD;s8I?c#&x"}3=UzY3"~s', 'f#mlrfaz<F71$#DYqIpEtkMm+sJHkxPz,Y[D"GZq0|Tnc', '$t$q"xC)5elGs=[2"~&IX+wW0)5B:`@>pq>lFp%uu8<UTsF', "zxQWtf|Pn)y]LTM3UxPG)UfG^R:q:i2)(`7<h]&&g^(&5*w3A5", "8q8=/oiZ;FbaNy5J,K2^i+.ZiQIpMlsW^HoL]XCVM~s", ':*6C$(%QJ?7922j";xo0FtSmt_#U&af.RkP', '/~3SDy&G"?"HBTxxC}$qKiq_f(=o=T*:M>VYrfLuq', "dF(D9pTc", "6>lgiT5", "c&1YaU(<g^nG<B{1V/]L!.g_E", "X[rIn;jKPF4tb|9O", ";xv0ntNDRrIaKH", 'pq3SKZ]qq^ZfN`}Mj~AFX2W;]Ah.uH^L7~2/{2"k#QJ&&7/O$Ss9[xwRPndUc', '&q8(3/f>)|"ZDyPuX[P', "b]Rg^i`dU_XMMB}2ts0(1t6c5e", "?nV*wUBqF81_(0ZKk8Yl8peWWeJsbB.z@.KF#7MW`8", 'ek,FEz432:R=^7`"8@LWA7:;385Gb|C2jO.=&biu2,5~N2Z`X5', "%.Tf)+R@g?=UBz:=vs2p8t`,U:n_buzdV7yCewzuhe_&hH", ">t6}$(VQZfe_wl]WLKP", ".x>F^9xD1,Do#HaO%}(<k!xRssRBxM8O>`lWM2WWhn_7%sW>q|,(Q", 'SF<f"i3:x,yAA=43Z]|fh', 'r"tq&s%,o@x/mHgOb!$(D^7d_8_&=`,8}?]D{miQ]n|0?=BY&tH', ">~z9Jbpuonw7RE", '6>uF"(R3#Q}Cc', ">nM(,kPuWsUrqbxY2(e^co|kh@HFDyldX7P", "7FPBp}ZuE,UfUl", ";S=B&Z~Rc@WpX|4W]YeYq}]Zo@+kCTb>7qH", "rq`=Rp}KcQuq4uNM", "o/hFC]z_`]g>*7B:6!MS&G@SSF5Pt|q", 'L>+YQzyPI@U0b||>t[C+e<Z<?(a_(MD26]c(v$X.8(TE"xrd', "7[@/~f!Q&|`u@_%OB>wDf9?Z[f%rIHnKk`BF9UwDh)!rBT(.PIaD:ywc", "l`^0S9Bqc|Ioax4h&|l^z+5", "]YyB:*y<Pt.U[MzxU#CSa;Jc?R?gv2eL!FY0,X:DO,4c:`]Wec", 'q|d<yS"d2_2p?|aKX7ZFiz`P', '"~>FB^Jc', 'C0I0`tK<nQug<nM"Jx5$`tLP', "Kqn<jp_}vRnq}MKx/NrCk9C_rFiyAsQ", "/NJIr#%<U,+7wu&uDJ:W)pS&R):BhH*uoqWY3(Nf|NhSCnbWR`2lMm$&9CBLc", "9>u(O/&&F8VfvagM@FGf&mvD4_Gn];5u8*G}tktWm@SUc", "6!+*|fLuq", "*!MI}phkyQU7c", "B(sII&~t|Czg~#/O~xH", "s.uq$mp_l", "mt1<$(|PdeMSKm5u_xmlIm]P", "`.m<Xp(P8r]aHye=Pr5G+pWm5|4;IsT.Kt5F>2tc", "]L{q<_+.UR(7v2<=9!B/Cogz)to;9#eL", "5t<gY*v3,@wzgbz)Qk@qBp7k8td.*_8KPWTC", "D*^()pCC;@M]?ns3c&cSdmW&A8(U6au3x(epoyJUOR9k$BR", "S.,qU..Q|A[UW0HM{SD<$mU3,@q.`0~u+?vF~Bd<k)ALc", "(~=9S_Vk[CGI8h680[<W7;.)e,XCCT7)p[$B`/&m]fCSNaF", "@>`=_92zKR", '#?u0IZ_u_~bDS7X1t.{q4T=W"~}0Wlx)HFH', "W!Zq;ze:Y|f/=*2)g}Y/Q^/D.nRGc", "+L`Iz!L<mQblo2~zz}M=(.0G)(h~dE#.|FP", "ps<WL*$m~)pNO`0=hq7Lm0`d*,Ka_xluRnI()y5", '&(ndHk"QGA;W$hyK(Sg9]|mwZ)~lpHX=kK{/q}5', "M`R}~XLQinj6{nAWgc", "G~wL+;)zdeD(c", "%SvlXUFD6:t7ch8=<Q0qAS5", "_[u=,O#k$Q=](x!dH@8q|9udH", "5Q9Yvw#)~tNiZmV3c&C(N^UG.Qe_.R0=3*xD", "v7R^<ie;g]M~&y#O/5", "axY/vs4Dg^}AmiEJ_(@(g#vW2:LoUliKf.npD|Rf[fYH>irxA#Dd305", 'IH1<Ry:cH|L<?mFYI>|g^OJ@"]1R!=[2QJOFsSAV.|f)c', "sK#0.s>c|8S@r04hd>*l3(}dM~VyMz).q|c+4[ikSt3/X*G:(>8q", 'q0wy~|sWFg7@cX}`8*_f:]"<%NJaV;$YB?<WUzcMTQ2', "GAhq*f__%Ac+Blq:v[VF&b2Z9N`", "~Y1pVyr)VR=~5nM>cnZ(UoNDIeZ71b5>X5", "F@:I|#5", "#J2l(x5", "t*9LXTkKt?", "D)5d=(,k.F3/*_*)/sH9Wb7dkNdDEzy.)S_I+t]qj]*&c", "9Y2D^Otmt_n!9z&x,!^(`sSR6(qS*_&YzJSfM", "b]OpV<MWLsPq[#C", 'jL|gqzkKA~!7:=8?vO~S1<xt8)`SG7d"dtQD|O}dynJ<70q', "&(l9/UVK,n#e2bgMnn69D^FDs8qSIHsL(tH", "L?8S4[43&,f/>`hKd~_C", "<KYl&slC`8`]0h=8alcSS7FRw:", "C*u$Mpz,|CK^db72A(20]|kdq:B@1;OMItnpTUZQCR5~ITp2|!,F", "^8[}tf4&>,8o&P7x}]o<2(tWP@%p4l", "XOX`Ry3czt]rXH", "b(oLUf5", "h@hSB.@S$@;c&7CYi5", ')*8("GdP', "<+h|V?d", "(*wjR]Ar", "&{%YW~d", "MWZ&eMe,", ">*i%^w&d", "kM1Vfi]E", "11kYF_>)ET", "*A$oH4k", "{[xR&asu=", "*A$oH47p", "ZHyx", "38l$]`Z", "?%{QJX|&", "bPI$H#O&", "x,4HTDME", "u1:lzkpC", "Cs>qoe^G", "DR5)*(r", "c)F2_q3G", ')9="NV!G', "IO>6WznG", "IOI5)", "ah8=)/4#pe6%|9kNXh:<9@7", 'W@!lYiV)m"O|?HT[,5*~]V:J^;%4.3_', "W@!lYiV)^;%4.3qSH@+K3{N", '35U_WgP"A&=LybZ]!CVw.P{rBT;cY[1', 'z<G^sSrmQ(g#pq`d1J"VYrw8]_O.Ak,', '7EV#D$FNC&2o#_s"pxV5#UjN$7&', "W~S:E3p", "aJWR1]o|", "er0.", "Q*BlB", "(W:Z%w_K", "q_OJg", "d%2su`Et", "?yOv<rbt", "l3f)]]Wt", "DU(Dg:p#DP", "4K{k{", "4K{k*s7yV!:oV", '6DyZQ.P"J_$;(R7DJm', "glCJUS>]hCp%gp#[vm", "@okcU|BmaZ@95BrM)", "kWVJ+rqdhCw;*#pTGm"]), iC(WS = function(...FF) {
      iC(FF[dS[13]] = dS[1], FF[dS[10]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], FF[dS[2]] = dS[18], FF[dS[14]] = []);
      try {
        iC(FF[dS[2]] = Object, FF[dS[14]][dS[27]]("".__proto__.constructor.name))
      } catch (FS) {}
      FF: for (FF[dS[15]] = dS[1]; FF[dS[15]] < FF[dS[10]][dS[13]]; FF[dS[15]]++) try {
        for (FF[dS[2]] = FF[dS[10]][FF[dS[15]]](), FF[dS[3]] = dS[1]; FF[dS[3]] < FF[dS[14]][dS[13]]; FF[dS[3]]++)
          if (typeof FF[dS[2]][FF[dS[14]][FF[dS[3]]]] === dS[16]) continue FF;
        return FF[dS[2]]
      } catch (FS) {}
      return FF[dS[2]] || this
    }() || {}, SS = WS.TextDecoder, CS = WS.Uint8Array, AS = WS[dS[55]], uS = WS.String || String, hS = WS.Array || Array, bC = function(...FF) {
      return iC(FF[dS[13]] = dS[1], FF[dS[28]] = new hS(dS[69]), FF[-dS[17]] = uS[dS[25]] || uS.fromCharCode, FF[dS[19]] = []),
        function(...WF) {
          for (iC(WF[dS[13]] = dS[2], WF[-dS[22]] = dS[18], WF[dS[21]] = dS[18], WF[dS[19]] = WF[dS[1]][dS[13]], FF[dS[19]][dS[13]] = dS[1]), WF[dS[20]] = dS[1]; WF[dS[20]] < WF[dS[19]];) iC(WF[dS[21]] = WF[dS[1]][WF[dS[20]]++], WF[dS[21]] <= dS[86] ? WF[-dS[22]] = WF[dS[21]] : WF[dS[21]] <= 223 ? WF[-dS[22]] = (WF[dS[21]] & dS[70]) << dS[24] | WF[dS[1]][WF[dS[20]]++] & dS[23] : WF[dS[21]] <= 239 ? WF[-dS[22]] = (WF[dS[21]] & dS[71]) << dS[26] | (WF[dS[1]][WF[dS[20]]++] & dS[23]) << dS[24] | WF[dS[1]][WF[dS[20]]++] & dS[23] : uS[dS[25]] ? WF[-dS[22]] = (WF[dS[21]] & dS[17]) << dS[72] | (WF[dS[1]][WF[dS[20]]++] & dS[23]) << dS[26] | (WF[dS[1]][WF[dS[20]]++] & dS[23]) << dS[24] | WF[dS[1]][WF[dS[20]]++] & dS[23] : (WF[-dS[22]] = dS[23], WF[dS[20]] += dS[43]), FF[dS[19]][dS[27]](FF[dS[28]][WF[-dS[22]]] || (FF[dS[28]][WF[-dS[22]]] = FF[-dS[17]](WF[-dS[22]]))));
          return FF[dS[19]][dS[37]]("")
        }
    }()), (() => {
      function FF(...FF) {
        return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = function(...FF) {
          for (iC(FF[dS[13]] = dS[2], FF[dS[2]] = 'NECua;UT~fvS_bA]IWP:Y2k()j,B9o+Klt.qD[8F@wx1Gh`rpH"*/R>L&M#O53y^m%|Z<Q=zdsVni$?64JX!{ge}07c', FF[dS[21]] = "" + (FF[dS[1]] || ""), FF[-dS[38]] = FF[dS[21]].length, FF[dS[41]] = [], FF[-dS[40]] = dS[1], FF[dS[14]] = dS[1], FF[dS[39]] = -dS[2]), FF[dS[3]] = dS[1]; FF[dS[3]] < FF[-dS[38]]; FF[dS[3]]++)
            if (FF[dS[6]] = FF[dS[2]].indexOf(FF[dS[21]][FF[dS[3]]]), FF[dS[6]] !== -dS[2])
              if (FF[dS[39]] < dS[1]) FF[dS[39]] = FF[dS[6]];
              else {
                iC(FF[dS[39]] += FF[dS[6]] * dS[32], FF[-dS[40]] |= FF[dS[39]] << FF[dS[14]], FF[dS[14]] += (FF[dS[39]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                do {
                  iC(FF[dS[41]].push(FF[-dS[40]] & dS[12]), FF[-dS[40]] >>= dS[11], FF[dS[14]] -= dS[11])
                } while (FF[dS[14]] > dS[17]);
                FF[dS[39]] = -dS[2]
              } return FF[dS[39]] > -dS[2] && FF[dS[41]].push((FF[-dS[40]] | FF[dS[39]] << FF[dS[14]]) & dS[12]), PS(FF[dS[41]])
        }(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
      }
      FF(105) + dS[46] in RS && function(...FF) {
        FF[dS[13]] = dS[1];
        const WF = require("big-integer");
        iC(FF[dS[5]] = class {
          static randomPrime(...FF) {
            FF[dS[13]] = dS[2];
            const SF = WF.one.shiftLeft(FF[dS[1]] - dS[2]),
              CF = WF.one.shiftLeft(FF[dS[1]]).prev();
            for (;;) {
              let FF = WF.randBetween(SF, CF);
              if (FF.isProbablePrime(256)) return FF
            }
          }
          static generate(...FF) {
            FF[dS[13]] = dS[2];
            const SF = WF(65537);
            let CF, AF;
            FF[dS[5]] = dS[18];
            do {
              iC(CF = this.randomPrime(FF[dS[1]] / dS[21]), AF = this.randomPrime(FF[dS[1]] / dS[21]), FF[dS[5]] = WF.lcm(CF.prev(), AF.prev()))
            } while (WF.gcd(SF, FF[dS[5]]).notEquals(dS[2]) || CF.minus(AF).abs().shiftRight(FF[dS[1]] / dS[21] - dS[42]).isZero());
            return {
              e: SF,
              n: CF.multiply(AF),
              d: SF.modInv(FF[dS[5]])
            }
          }
          static encrypt(...FF) {
            return FF[dS[13]] = dS[43], WF(FF[dS[1]]).modPow(FF[dS[21]], FF[dS[2]])
          }
          static decrypt(...FF) {
            return FF[dS[13]] = dS[43], WF(FF[dS[1]]).modPow(FF[dS[2]], FF[dS[21]])
          }
          static encode(...FF) {
            FF[dS[13]] = dS[2];
            const SF = FF[dS[1]].split("").map((FF => FF.charCodeAt())).join("");
            return WF(SF)
          }
          static decode(...FF) {
            FF[dS[13]] = dS[2];
            const WF = FF[dS[1]].toString();
            FF[-dS[44]] = "";
            for (let SF = dS[1]; SF < WF.length; SF += dS[21]) {
              let CF = Number(WF.substr(SF, dS[21]));
              CF <= 30 ? (FF[-dS[44]] += String.fromCharCode(Number(WF.substr(SF, dS[43]))), SF++) : FF[-dS[44]] += String.fromCharCode(CF)
            }
            return FF[-dS[44]]
          }
        }, module.exports = FF[dS[5]])
      }(), iC(JW = (...FF) => {
        function WF(...FF) {
          return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = function(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[-dS[47]] = 'Z&k(lWN64Q1Sat),cbjUrm.v{qDHC;diJT8#G}"9P=V_yeEhsF>%Yw~f<pBxLOuKoRAgI`:X[n+37$*|@52/]0?z!^M', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[dS[19]] = FF[dS[45]].length, FF[dS[10]] = [], FF[dS[49]] = dS[1], FF[dS[24]] = dS[1], FF[dS[46]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[dS[19]]; FF[dS[11]]++)
              if (FF[dS[48]] = FF[-dS[47]].indexOf(FF[dS[45]][FF[dS[11]]]), FF[dS[48]] !== -dS[2])
                if (FF[dS[46]] < dS[1]) FF[dS[46]] = FF[dS[48]];
                else {
                  iC(FF[dS[46]] += FF[dS[48]] * dS[32], FF[dS[49]] |= FF[dS[46]] << FF[dS[24]], FF[dS[24]] += (FF[dS[46]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[10]].push(FF[dS[49]] & dS[12]), FF[dS[49]] >>= dS[11], FF[dS[24]] -= dS[11])
                  } while (FF[dS[24]] > dS[17]);
                  FF[dS[46]] = -dS[2]
                } return FF[dS[46]] > -dS[2] && FF[dS[10]].push((FF[dS[49]] | FF[dS[46]] << FF[dS[24]]) & dS[12]), PS(FF[dS[10]])
          }(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
        }
        FF[dS[13]] = dS[2];
        const SF = function(FF) {
            var WF;
            return {
              meta: {
                ...FF.meta,
                formatVersion: DW.d,
                variation: null !== (WF = FF.meta.variation) && void 0 !== WF ? WF : null
              },
              initialChunks: FF.initialChunks.map((FF => ({
                chunkPos: FF.chunkPos,
                rle: LW(FF.rle),
                sharedBlockData: ZW("sharedBlockData", FF.sharedBlockData)
              }))),
              ticks: FF.ticks.map(jS),
              editState: FF.editState
            }
          }(FF[dS[1]]),
          CF = CW[DW[dS[10]]];
        FF[dS[2]] = dS[18];
        try {
          function dF(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[dS[50]] = 'HadofFiUZMEIDRJ/}Qq@TN"{(lhSYg)knu>PO7tVLz41$`cCbB*rm|W%=^,6AG]Xvs.jpe+#_w~[?9;5y!x8032<&K:', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[dS[43]] = FF[dS[45]].length, FF[dS[30]] = [], FF[-dS[52]] = dS[1], FF[dS[24]] = dS[1], FF[dS[46]] = -dS[2]), FF[dS[3]] = dS[1]; FF[dS[3]] < FF[dS[43]]; FF[dS[3]]++)
              if (FF[dS[51]] = FF[dS[50]].indexOf(FF[dS[45]][FF[dS[3]]]), FF[dS[51]] !== -dS[2])
                if (FF[dS[46]] < dS[1]) FF[dS[46]] = FF[dS[51]];
                else {
                  iC(FF[dS[46]] += FF[dS[51]] * dS[32], FF[-dS[52]] |= FF[dS[46]] << FF[dS[24]], FF[dS[24]] += (FF[dS[46]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[30]].push(FF[-dS[52]] & dS[12]), FF[-dS[52]] >>= dS[11], FF[dS[24]] -= dS[11])
                  } while (FF[dS[24]] > dS[17]);
                  FF[dS[46]] = -dS[2]
                } return FF[dS[46]] > -dS[2] && FF[dS[30]].push((FF[-dS[52]] | FF[dS[46]] << FF[dS[24]]) & dS[12]), PS(FF[dS[30]])
          }

          function PF(...FF) {
            return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = dF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
          }
          FF[dS[2]] = CF[PF(106)](SF)
        } catch (bW) {
          function RF(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = 'kpEL/D=2#x}tmT,QX_?!&;J+uzIPSlRdCwObv9ZNyUqH@YV.%BnA$7[{hKci`g5r"f3G*F|e(MsWao6>4<^01)~]:8j', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[dS[43]] = FF[dS[45]].length, FF[dS[10]] = [], FF[dS[53]] = dS[1], FF[dS[54]] = dS[1], FF[dS[17]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[dS[43]]; FF[dS[11]]++)
              if (FF[dS[48]] = FF[dS[5]].indexOf(FF[dS[45]][FF[dS[11]]]), FF[dS[48]] !== -dS[2])
                if (FF[dS[17]] < dS[1]) FF[dS[17]] = FF[dS[48]];
                else {
                  iC(FF[dS[17]] += FF[dS[48]] * dS[32], FF[dS[53]] |= FF[dS[17]] << FF[dS[54]], FF[dS[54]] += (FF[dS[17]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[10]].push(FF[dS[53]] & dS[12]), FF[dS[53]] >>= dS[11], FF[dS[54]] -= dS[11])
                  } while (FF[dS[54]] > dS[17]);
                  FF[dS[17]] = -dS[2]
                } return FF[dS[17]] > -dS[2] && FF[dS[10]].push((FF[dS[53]] | FF[dS[17]] << FF[dS[54]]) & dS[12]), PS(FF[dS[10]])
          }

          function iW(...FF) {
            return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = RF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
          }
          throw iC(console[iW(dS[79])](SF), CF[iW(108)](SF, {
            [iW(109) + iW(110)]: (...FF) => function([FF, WF, SF], CF, AF, uF) {
              uF || (uF = function(...FF) {
                return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = AF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
              }), AF || (AF = function(FF) {
                var WF, SF, CF, AF, uF, hF, bW;
                for (iC(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = dS[1], uF = dS[1], hF = -dS[2]), bW = dS[1]; bW < SF; bW++) {
                  var dF = 'dr,fjbaGYOABe8")_p0:Cu~l5=;im4zv&o[Zc9J]w$2V7x>3TNR+hXIMq{gn(s@6/1QH<LDW#`SUt|!E?}.%K^FkPy*'.indexOf(WF[bW]);
                  if (dF !== -dS[2])
                    if (hF < dS[1]) hF = dF;
                    else {
                      iC(hF += dF * dS[32], AF |= hF << uF, uF += (hF & dS[33]) > dS[34] ? dS[35] : dS[36]);
                      do {
                        iC(CF.push(AF & dS[12]), AF >>= dS[11], uF -= dS[11])
                      } while (uF > dS[17]);
                      hF = -dS[2]
                    }
                }
                return hF > -dS[2] && CF.push((AF | hF << uF) & dS[12]), PS(CF)
              }), console[uF(dS[42])]("" + FF[dS[37]](".") + (uF(101) + uF(102)) + SF[uF(103) + "me"] + uF(104) + WF)
            }(FF)
          })), bW
        }
        const AF = hW(DW[dS[10]], FF[dS[2]]),
          hF = uF[dS[55]][WF(dS[91])](dS[20]);
        return hF[WF(112) + WF(113) + "E"](DW[dS[10]]), uF[dS[55]].concat([hF, AF])
      }, pW = (...WF) => {
        function SF(...FF) {
          return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = function(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = '0mKLRCGjQnJU7V`?uAXM_O9#ivgHI6B3Z8[Tk(|bD]zlf{E2s,xY;w)~F}5y@p$h=+%:trNWc>S!<1P.daq^*&"/4eo', FF[dS[21]] = "" + (FF[dS[1]] || ""), FF[dS[43]] = FF[dS[21]].length, FF[dS[57]] = [], FF[-dS[56]] = dS[1], FF[dS[24]] = dS[1], FF[dS[17]] = -dS[2]), FF[dS[3]] = dS[1]; FF[dS[3]] < FF[dS[43]]; FF[dS[3]]++)
              if (FF[dS[48]] = FF[dS[5]].indexOf(FF[dS[21]][FF[dS[3]]]), FF[dS[48]] !== -dS[2])
                if (FF[dS[17]] < dS[1]) FF[dS[17]] = FF[dS[48]];
                else {
                  iC(FF[dS[17]] += FF[dS[48]] * dS[32], FF[-dS[56]] |= FF[dS[17]] << FF[dS[24]], FF[dS[24]] += (FF[dS[17]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[57]].push(FF[-dS[56]] & dS[12]), FF[-dS[56]] >>= dS[11], FF[dS[24]] -= dS[11])
                  } while (FF[dS[24]] > dS[17]);
                  FF[dS[17]] = -dS[2]
                } return FF[dS[17]] > -dS[2] && FF[dS[57]].push((FF[-dS[56]] | FF[dS[17]] << FF[dS[24]]) & dS[12]), PS(FF[dS[57]])
          }(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
        }
        WF[dS[13]] = dS[2], FF(114) in RS && function(...WF) {
          function SF(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = 'z1|7,){y.3G^>xAr(X4l?T`+Be@foLWR<kDZ=E9[J"p2:Fnb$qs!Yi86vc~#/ajS5N;HVhu&]gt0wCKQ%d}mMI*P_UO', FF[dS[58]] = "" + (FF[dS[1]] || ""), FF[dS[59]] = FF[dS[58]].length, FF[dS[20]] = [], FF[dS[53]] = dS[1], FF[dS[14]] = dS[1], FF[dS[46]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[dS[59]]; FF[dS[11]]++)
              if (FF[dS[6]] = FF[dS[5]].indexOf(FF[dS[58]][FF[dS[11]]]), FF[dS[6]] !== -dS[2])
                if (FF[dS[46]] < dS[1]) FF[dS[46]] = FF[dS[6]];
                else {
                  iC(FF[dS[46]] += FF[dS[6]] * dS[32], FF[dS[53]] |= FF[dS[46]] << FF[dS[14]], FF[dS[14]] += (FF[dS[46]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[20]].push(FF[dS[53]] & dS[12]), FF[dS[53]] >>= dS[11], FF[dS[14]] -= dS[11])
                  } while (FF[dS[14]] > dS[17]);
                  FF[dS[46]] = -dS[2]
                } return FF[dS[46]] > -dS[2] && FF[dS[20]].push((FF[dS[53]] | FF[dS[46]] << FF[dS[14]]) & dS[12]), PS(FF[dS[20]])
          }

          function CF(FF) {
            return typeof lW[FF] === dS[16] ? lW[FF] = SF(FS[FF]) : lW[FF]
          }
          WF[dS[13]] = dS[1],
            function(...WF) {
              function SF(FF) {
                var WF, SF, CF, AF, uF, hF, bW, dF = 'pB_=K0&91[u{A"IOj%tMY!SkPrL6z)/f]3n?a@g~GT>Z8*h<N:Fb.7RD5U#$C(2|v,;Qo}^cxHy`J+4wEiVXdlWeqms';
                for (iC(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = dS[1], uF = dS[1], hF = -dS[2]), bW = dS[1]; bW < SF; bW++) {
                  var PF = dF.indexOf(WF[bW]);
                  if (PF !== -dS[2])
                    if (hF < dS[1]) hF = PF;
                    else {
                      iC(hF += PF * dS[32], AF |= hF << uF, uF += (hF & dS[33]) > dS[34] ? dS[35] : dS[36]);
                      do {
                        iC(CF.push(AF & dS[12]), AF >>= dS[11], uF -= dS[11])
                      } while (uF > dS[17]);
                      hF = -dS[2]
                    }
                }
                return hF > -dS[2] && CF.push((AF | hF << uF) & dS[12]), PS(CF)
              }

              function CF(FF) {
                return typeof lW[FF] === dS[16] ? lW[FF] = SF(FS[FF]) : lW[FF]
              }

              function AF(...FF) {
                for (iC(FF[dS[13]] = dS[2], FF[dS[2]] = [], FF[dS[21]] = dS[1], FF[dS[19]] = FF[dS[1]].length, FF[-dS[60]] = dS[18], FF[dS[61]] = dS[18]); FF[dS[21]] < FF[dS[19]];) iC(FF[-dS[60]] = FF[dS[1]].charCodeAt(FF[dS[21]]++), FF[-dS[60]] >= dS[66] && FF[-dS[60]] <= 56319 && FF[dS[21]] < FF[dS[19]] ? (FF[dS[61]] = FF[dS[1]].charCodeAt(FF[dS[21]]++), (64512 & FF[dS[61]]) == dS[67] ? FF[dS[2]].push(((FF[-dS[60]] & dS[62]) << dS[65]) + (FF[dS[61]] & dS[62]) + dS[64]) : (FF[dS[2]].push(FF[-dS[60]]), FF[dS[21]]--)) : FF[dS[2]].push(FF[-dS[60]]));
                return FF[dS[2]]
              }

              function uF(...FF) {
                for (iC(FF[dS[13]] = dS[2], FF[dS[2]] = FF[dS[1]].length, FF[-dS[63]] = -dS[2], FF[dS[43]] = dS[18], FF[dS[10]] = ""); ++FF[-dS[63]] < FF[dS[2]];) FF[dS[43]] = FF[dS[1]][FF[-dS[63]]], FF[dS[43]] > 65535 && iC(FF[dS[43]] -= dS[64], FF[dS[10]] += WF[-dS[44]](FF[dS[43]] >>> dS[65] & dS[62] | dS[66]), FF[dS[43]] = dS[67] | FF[dS[43]] & dS[62]), FF[dS[10]] += WF[-dS[44]](FF[dS[43]]);
                return FF[dS[10]]
              }

              function hF(WF) {
                if (WF >= dS[66] && WF <= 57343) {
                  function SF(...FF) {
                    for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = 'r9GxZ:8]"u2d^FSR![%Ej/z<b)74ml(D5+OK~UQa3_H*f|v{1=$s>6n?@.ig0cMP,#;ow&`}eYWIJqyLVhpkCTXtNBA', FF[dS[21]] = "" + (FF[dS[1]] || ""), FF[dS[43]] = FF[dS[21]].length, FF[dS[20]] = [], FF[dS[53]] = dS[1], FF[dS[68]] = dS[1], FF[dS[17]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[dS[43]]; FF[dS[11]]++)
                      if (FF[dS[6]] = FF[dS[5]].indexOf(FF[dS[21]][FF[dS[11]]]), FF[dS[6]] !== -dS[2])
                        if (FF[dS[17]] < dS[1]) FF[dS[17]] = FF[dS[6]];
                        else {
                          iC(FF[dS[17]] += FF[dS[6]] * dS[32], FF[dS[53]] |= FF[dS[17]] << FF[dS[68]], FF[dS[68]] += (FF[dS[17]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                          do {
                            iC(FF[dS[20]].push(FF[dS[53]] & dS[12]), FF[dS[53]] >>= dS[11], FF[dS[68]] -= dS[11])
                          } while (FF[dS[68]] > dS[17]);
                          FF[dS[17]] = -dS[2]
                        } return FF[dS[17]] > -dS[2] && FF[dS[20]].push((FF[dS[53]] | FF[dS[17]] << FF[dS[68]]) & dS[12]), PS(FF[dS[20]])
                  }

                  function CF(...FF) {
                    return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = SF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
                  }
                  throw Error(FF(115) + CF(dS[39]) + CF(dS[76]) + WF.toString(16).toUpperCase() + (CF(118) + CF(119) + CF(120) + CF(121)))
                }
              }

              function bW(...FF) {
                return FF[dS[13]] = dS[21], WF[-dS[44]](FF[dS[1]] >> FF[dS[2]] & dS[23] | dS[69])
              }

              function dF(...FF) {
                return FF[dS[13]] = dS[2], (4294967168 & FF[dS[1]]) == dS[1] ? WF[-dS[44]](FF[dS[1]]) : (FF[dS[2]] = "", (4294965248 & FF[dS[1]]) == dS[1] ? FF[dS[2]] = WF[-dS[44]](FF[dS[1]] >> dS[24] & dS[70] | dS[47]) : (4294901760 & FF[dS[1]]) == dS[1] ? iC(hF(FF[dS[1]]), FF[dS[2]] = WF[-dS[44]](FF[dS[1]] >> dS[26] & dS[71] | dS[81]), FF[dS[2]] += bW(FF[dS[1]], dS[24])) : (4292870144 & FF[dS[1]]) == dS[1] && iC(FF[dS[2]] = WF[-dS[44]](FF[dS[1]] >> dS[72] & dS[17] | dS[83]), FF[dS[2]] += bW(FF[dS[1]], dS[26]), FF[dS[2]] += bW(FF[dS[1]], dS[24])), FF[dS[2]] += WF[-dS[44]](FF[dS[1]] & dS[23] | dS[69]), FF[dS[2]])
              }

              function PF(...FF) {
                for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = AF(FF[dS[1]]), FF[dS[74]] = FF[dS[5]].length, FF[dS[73]] = -dS[2], FF[dS[10]] = dS[18], FF[dS[75]] = ""); ++FF[dS[73]] < FF[dS[74]];) iC(FF[dS[10]] = FF[dS[5]][FF[dS[73]]], FF[dS[75]] += dF(FF[dS[10]]));
                return FF[dS[75]]
              }

              function RF() {
                var SF;
                if (WF[dS[21]] >= WF[dS[43]]) {
                  function CF(...FF) {
                    for (iC(FF[dS[13]] = dS[2], FF[dS[2]] = '7AHDTeGZPQBNK1u,la_b)n$r#jRv0I:<=y|kLMm]hCUsqgw~iXx.Sz{F!">Yc9&pt6}2E5df3o4(/V;+%W`8@[*?JO^', FF[-dS[47]] = "" + (FF[dS[1]] || ""), FF[-dS[77]] = FF[-dS[47]].length, FF[dS[10]] = [], FF[dS[61]] = dS[1], FF[dS[14]] = dS[1], FF[dS[76]] = -dS[2]), FF[dS[41]] = dS[1]; FF[dS[41]] < FF[-dS[77]]; FF[dS[41]]++)
                      if (FF[dS[78]] = FF[dS[2]].indexOf(FF[-dS[47]][FF[dS[41]]]), FF[dS[78]] !== -dS[2])
                        if (FF[dS[76]] < dS[1]) FF[dS[76]] = FF[dS[78]];
                        else {
                          iC(FF[dS[76]] += FF[dS[78]] * dS[32], FF[dS[61]] |= FF[dS[76]] << FF[dS[14]], FF[dS[14]] += (FF[dS[76]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                          do {
                            iC(FF[dS[10]].push(FF[dS[61]] & dS[12]), FF[dS[61]] >>= dS[11], FF[dS[14]] -= dS[11])
                          } while (FF[dS[14]] > dS[17]);
                          FF[dS[76]] = -dS[2]
                        } return FF[dS[76]] > -dS[2] && FF[dS[10]].push((FF[dS[61]] | FF[dS[76]] << FF[dS[14]]) & dS[12]), PS(FF[dS[10]])
                  }

                  function AF(...FF) {
                    return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = CF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
                  }
                  throw Error(AF(122))
                }
                if (iC(SF = WF[dS[10]][WF[dS[21]]] & dS[12], WF[dS[21]]++), (SF & dS[47]) == dS[69]) return SF & dS[23];
                throw Error(FF(123))
              }

              function iW(...SF) {
                function CF(...FF) {
                  for (iC(FF[dS[13]] = dS[2], FF[-dS[79]] = ',?9%*}!y5t.xmgS)`7K"D[YBNM>@oz=<#16PL^:/Efb0WH4ZOc&nda2phvr_;JjTC+w(s3uU]|Fl$X8kRqQVi{IeGA~', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[dS[43]] = FF[dS[45]].length, FF[dS[20]] = [], FF[dS[63]] = dS[1], FF[dS[23]] = dS[1], FF[dS[46]] = -dS[2]), FF[dS[3]] = dS[1]; FF[dS[3]] < FF[dS[43]]; FF[dS[3]]++)
                    if (FF[dS[48]] = FF[-dS[79]].indexOf(FF[dS[45]][FF[dS[3]]]), FF[dS[48]] !== -dS[2])
                      if (FF[dS[46]] < dS[1]) FF[dS[46]] = FF[dS[48]];
                      else {
                        iC(FF[dS[46]] += FF[dS[48]] * dS[32], FF[dS[63]] |= FF[dS[46]] << FF[dS[23]], FF[dS[23]] += (FF[dS[46]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                        do {
                          iC(FF[dS[20]].push(FF[dS[63]] & dS[12]), FF[dS[63]] >>= dS[11], FF[dS[23]] -= dS[11])
                        } while (FF[dS[23]] > dS[17]);
                        FF[dS[46]] = -dS[2]
                      } return FF[dS[46]] > -dS[2] && FF[dS[20]].push((FF[dS[63]] | FF[dS[46]] << FF[dS[23]]) & dS[12]), PS(FF[dS[20]])
                }

                function AF(...FF) {
                  return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = CF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
                }
                if (SF[dS[13]] = dS[1], iC(SF[dS[80]] = dS[18], SF[dS[19]] = dS[18], SF[dS[21]] = dS[18], SF[dS[61]] = dS[18], SF[dS[82]] = dS[18]), WF[dS[21]] > WF[dS[43]]) throw Error(FF(124));
                if (WF[dS[21]] == WF[dS[43]]) return dS[88];
                if (iC(SF[dS[80]] = WF[dS[10]][WF[dS[21]]] & dS[12], WF[dS[21]]++), (SF[dS[80]] & dS[69]) == dS[1]) return SF[dS[80]];
                if ((SF[dS[80]] & dS[81]) == dS[47]) {
                  if (iC(SF[dS[19]] = RF(), SF[dS[82]] = (SF[dS[80]] & dS[70]) << dS[24] | SF[dS[19]]), SF[dS[82]] >= dS[69]) return SF[dS[82]];
                  {
                    function uF(FF) {
                      var WF, SF, CF, AF, uF, hF, bW, dF = '4EiXFTMZwJtk1?2.@3d{WvQ8"D!xq*O,_zY9R]m+5e}~lK/$Nb&VjG^n%pf=C[(BA;L`|6I<#HPSg)y:cruU>0soh7a';
                      for (iC(WF = "" + (FF || ""), SF = WF.length, CF = [], AF = dS[1], uF = dS[1], hF = -dS[2]), bW = dS[1]; bW < SF; bW++) {
                        var PF = dF.indexOf(WF[bW]);
                        if (PF !== -dS[2])
                          if (hF < dS[1]) hF = PF;
                          else {
                            iC(hF += PF * dS[32], AF |= hF << uF, uF += (hF & dS[33]) > dS[34] ? dS[35] : dS[36]);
                            do {
                              iC(CF.push(AF & dS[12]), AF >>= dS[11], uF -= dS[11])
                            } while (uF > dS[17]);
                            hF = -dS[2]
                          }
                      }
                      return hF > -dS[2] && CF.push((AF | hF << uF) & dS[12]), PS(CF)
                    }

                    function bW(...FF) {
                      return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = uF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
                    }
                    throw Error(bW(125))
                  }
                }
                if ((SF[dS[80]] & dS[83]) == dS[81]) {
                  if (iC(SF[dS[19]] = RF(), SF[dS[21]] = RF(), SF[dS[82]] = (SF[dS[80]] & dS[71]) << dS[26] | SF[dS[19]] << dS[24] | SF[dS[21]]), SF[dS[82]] >= 2048) return hF(SF[dS[82]]), SF[dS[82]];
                  {
                    function dF(...FF) {
                      for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = '7{uKv_?`VW%D,@2YZzCws[9PmH1e;aB+^LAl*dtE<oI/=jUX)q("yx5b|0&gJkn]QO#h4N!i3>rFSfp6.8$G}c~TRM:', FF[dS[21]] = "" + (FF[dS[1]] || ""), FF[-dS[84]] = FF[dS[21]].length, FF[dS[20]] = [], FF[dS[61]] = dS[1], FF[dS[85]] = dS[1], FF[dS[79]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[-dS[84]]; FF[dS[11]]++)
                        if (FF[dS[6]] = FF[dS[5]].indexOf(FF[dS[21]][FF[dS[11]]]), FF[dS[6]] !== -dS[2])
                          if (FF[dS[79]] < dS[1]) FF[dS[79]] = FF[dS[6]];
                          else {
                            iC(FF[dS[79]] += FF[dS[6]] * dS[32], FF[dS[61]] |= FF[dS[79]] << FF[dS[85]], FF[dS[85]] += (FF[dS[79]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                            do {
                              iC(FF[dS[20]].push(FF[dS[61]] & dS[12]), FF[dS[61]] >>= dS[11], FF[dS[85]] -= dS[11])
                            } while (FF[dS[85]] > dS[17]);
                            FF[dS[79]] = -dS[2]
                          } return FF[dS[79]] > -dS[2] && FF[dS[20]].push((FF[dS[61]] | FF[dS[79]] << FF[dS[85]]) & dS[12]), PS(FF[dS[20]])
                    }

                    function PF(...FF) {
                      return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = dF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
                    }
                    throw Error(PF(dS[89]))
                  }
                }
                if ((248 & SF[dS[80]]) == dS[83] && (iC(SF[dS[19]] = RF(), SF[dS[21]] = RF(), SF[dS[61]] = RF(), SF[dS[82]] = (SF[dS[80]] & dS[17]) << dS[72] | SF[dS[19]] << dS[26] | SF[dS[21]] << dS[24] | SF[dS[61]]), SF[dS[82]] >= dS[64] && SF[dS[82]] <= 1114111)) return SF[dS[82]];
                throw Error(AF(dS[86]))
              }

              function eF(...FF) {
                for (iC(FF[dS[13]] = dS[2], WF[dS[10]] = AF(FF[dS[1]]), WF[dS[43]] = WF[dS[10]].length, WF[dS[21]] = dS[1], FF[-dS[52]] = [], FF[dS[87]] = dS[18]);
                  (FF[dS[87]] = iW()) !== dS[88];) FF[-dS[52]].push(FF[dS[87]]);
                return uF(FF[-dS[52]])
              }
              WF[dS[13]] = dS[2], WF[-dS[44]] = String.fromCharCode, iC(WF[dS[10]] = dS[18], WF[dS[43]] = dS[18], WF[dS[21]] = dS[18]), iC(WF[dS[1]].version = CF(dS[69]), WF[dS[1]].encode = PF, WF[dS[1]].decode = eF)
            }(typeof exports === CF(dS[73]) + CF(dS[85]) ? this.utf8 = {} : exports)
        }();
        const CF = uF[dS[55]][FF(131)](WF[dS[1]]);
        if (CF[SF(132) + SF(133)] >= dS[20]) {
          function hF(...FF) {
            for (iC(FF[dS[13]] = dS[2], FF[dS[5]] = '@tKDV<.}va9kMChyu"I=iexq~dR;w?5!sF$,X|`pL4zlSj+Wf)7O[]#b^3&Nr{*ng/:J8TZ%BQH10>Ac6_mEGU(oPY2', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[-dS[90]] = FF[dS[45]].length, FF[dS[10]] = [], FF[dS[53]] = dS[1], FF[dS[24]] = dS[1], FF[dS[46]] = -dS[2]), FF[-dS[89]] = dS[1]; FF[-dS[89]] < FF[-dS[90]]; FF[-dS[89]]++)
              if (FF[dS[6]] = FF[dS[5]].indexOf(FF[dS[45]][FF[-dS[89]]]), FF[dS[6]] !== -dS[2])
                if (FF[dS[46]] < dS[1]) FF[dS[46]] = FF[dS[6]];
                else {
                  iC(FF[dS[46]] += FF[dS[6]] * dS[32], FF[dS[53]] |= FF[dS[46]] << FF[dS[24]], FF[dS[24]] += (FF[dS[46]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                  do {
                    iC(FF[dS[10]].push(FF[dS[53]] & dS[12]), FF[dS[53]] >>= dS[11], FF[dS[24]] -= dS[11])
                  } while (FF[dS[24]] > dS[17]);
                  FF[dS[46]] = -dS[2]
                } return FF[dS[46]] > -dS[2] && FF[dS[10]].push((FF[dS[53]] | FF[dS[46]] << FF[dS[24]]) & dS[12]), PS(FF[dS[10]])
          }

          function bW(...FF) {
            return FF[dS[13]] = dS[2], typeof lW[FF[dS[1]]] === dS[16] ? lW[FF[dS[1]]] = hF(FS[FF[dS[1]]]) : lW[FF[dS[1]]]
          }

          function dF(...FF) {
            iC(FF[dS[13]] = dS[1], FF[dS[45]] = function(...FF) {
              for (iC(FF[dS[13]] = dS[2], FF[-dS[93]] = FF[dS[1]].length, FF[-dS[91]] = [], FF[-dS[94]] = dS[1], FF[-dS[95]] = dS[1], FF[dS[1]].sort(((FF, WF) => FF - WF))), FF[dS[92]] = dS[1]; FF[dS[92]] < FF[-dS[93]]; FF[dS[92]]++)
                if (!(FF[dS[92]] > dS[1] && FF[dS[1]][FF[dS[92]]] === FF[dS[1]][FF[dS[92]] - dS[2]]))
                  for (iC(FF[-dS[94]] = FF[dS[92]] + dS[2], FF[-dS[95]] = FF[-dS[93]] - dS[2]); FF[-dS[94]] < FF[-dS[95]];)
                    if (FF[dS[1]][FF[dS[92]]] + FF[dS[1]][FF[-dS[94]]] + FF[dS[1]][FF[-dS[95]]] < dS[1]) FF[-dS[94]]++;
                    else if (FF[dS[1]][FF[dS[92]]] + FF[dS[1]][FF[-dS[94]]] + FF[dS[1]][FF[-dS[95]]] > dS[1]) FF[-dS[95]]--;
              else {
                for (FF[-dS[91]].push([FF[dS[1]][FF[dS[92]]], FF[dS[1]][FF[-dS[94]]], FF[dS[1]][FF[-dS[95]]]]); FF[-dS[94]] < FF[-dS[95]] && FF[dS[1]][FF[-dS[94]]] === FF[dS[1]][FF[-dS[94]] + dS[2]];) FF[-dS[94]]++;
                for (; FF[-dS[94]] < FF[-dS[95]] && FF[dS[1]][FF[-dS[95]]] === FF[dS[1]][FF[-dS[95]] - dS[2]];) FF[-dS[95]]--;
                iC(FF[-dS[94]]++, FF[-dS[95]]--)
              }
              return FF[-dS[91]]
            }, console.log(FF[dS[45]]))
          }
          bW(dS[68]) in RS && dF();
          const PF = CF[bW(135) + bW(136)](dS[1]);
          if (CW[PF]) {
            function RF(...FF) {
              for (iC(FF[dS[13]] = dS[2], FF[-dS[38]] = 'YVTAIREv#|@Np$(/QX>wtPHaBlf{c`7Dk._Ly8J=gh]GWbsOMzFK+Z^?%;q~Uxu![*,ni4omS9rCe)d1:035"2&<}6j', FF[dS[45]] = "" + (FF[dS[1]] || ""), FF[-dS[95]] = FF[dS[45]].length, FF[-dS[97]] = [], FF[dS[53]] = dS[1], FF[dS[96]] = dS[1], FF[dS[8]] = -dS[2]), FF[dS[11]] = dS[1]; FF[dS[11]] < FF[-dS[95]]; FF[dS[11]]++)
                if (FF[dS[48]] = FF[-dS[38]].indexOf(FF[dS[45]][FF[dS[11]]]), FF[dS[48]] !== -dS[2])
                  if (FF[dS[8]] < dS[1]) FF[dS[8]] = FF[dS[48]];
                  else {
                    iC(FF[dS[8]] += FF[dS[48]] * dS[32], FF[dS[53]] |= FF[dS[8]] << FF[dS[96]], FF[dS[96]] += (FF[dS[8]] & dS[33]) > dS[34] ? dS[35] : dS[36]);
                    do {
                      iC(FF[-dS[97]].push(FF[dS[53]] & dS[12]), FF[dS[53]] >>= dS[11], FF[dS[96]] -= dS[11])
                    } while (FF[dS[96]] > dS[17]);
                    FF[dS[8]] = -dS[2]
                  } return FF[dS[8]] > -dS[2] && FF[-dS[97]].push((FF[dS[53]] | FF[dS[8]] << FF[dS[96]]) & dS[12]), PS(FF[-dS[97]])
            }

            function iW(FF) {
              return typeof lW[FF] === dS[16] ? lW[FF] = RF(FS[FF]) : lW[FF]
            }
            const eF = CF[iW(dS[22])](dS[20]),
              EF = uW(PF) ? uF[dS[55]][iW(dS[87])](bS(PF, eF)) : eF;
            return function(FF) {
              var WF, SF, CF, uF, hF;
              const bW = null === (WF = FF.meta) || void 0 === WF ? void 0 : WF.formatVersion;
              if (!DW.f.includes(bW)) throw new Error(`Unsupported recording format version: ${bW}`);
              if (!Array.isArray(FF.initialChunks) || !Array.isArray(FF.ticks)) throw new Error("Recording is missing initialChunks or ticks");
              for (const AF of FF.ticks)
                if (!Array.isArray(AF.structuralEvents) || !Array.isArray(AF.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
              const dF = {
                ...FF.meta
              };
              return dF.formatVersion = DW.d, (0, AF.Q)(dF.variation) && delete dF.variation, {
                meta: dF,
                initialChunks: FF.initialChunks.map((FF => {
                  var WF;
                  return {
                    chunkPos: FF.chunkPos,
                    rle: mS(FF.rle),
                    sharedBlockData: null !== (WF = oW("sharedBlockData", FF.sharedBlockData)) && void 0 !== WF ? WF : []
                  }
                })),
                ticks: FF.ticks.map(vS),
                editState: {
                  cameraKeyframes: null !== (SF = null === (CF = FF.editState) || void 0 === CF ? void 0 : CF.cameraKeyframes) && void 0 !== SF ? SF : [],
                  playbackMark: null !== (uF = null === (hF = FF.editState) || void 0 === hF ? void 0 : hF.playbackMark) && void 0 !== uF ? uF : null
                }
              }
            }(CW[PF][iW(139)](EF))
          }
        }
        throw new Error(SF(140) + SF(141) + SF(142) + SF(dS[29]) + dS[10])
      })
    })()
  },
  35453: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      d: () => CF,
      f: () => AF,
      j: () => RF,
      m: () => iW,
      n: () => dF,
      r: () => eF,
      s: () => bW,
      v: () => PF,
      x: () => hF
    });
    const CF = 9,
      AF = [9],
      uF = 100,
      hF = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      bW = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      dF = ["itemName", "amount", "position", "size", "attributes"],
      PF = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      RF = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "jSF", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      iW = ["selectedSlotIndex", "slots"],
      eF = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35448: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => iW,
      e: () => QF,
      i: () => dF,
      j: () => hF,
      n: () => bW,
      p: () => PF
    });
    var CF = SF(271),
      AF = SF(20);

    function uF(FF) {
      return null === FF || void 0 === FF ? null : "string" === typeof FF ? FF : null
    }

    function hF(FF, WF) {
      return JSON.stringify(FF) === JSON.stringify(WF)
    }

    function bW(FF) {
      const WF = [];
      for (const SF of Object.keys(FF)) {
        const CF = FF[SF];
        for (const FF of Object.keys(CF)) WF.push({
          bM: SF,
          name: FF,
          ...CF[FF]
        })
      }
      return WF
    }

    function dF(FF) {
      const WF = {};
      for (const uF of FF) {
        var SF, CF, AF;
        WF[uF.bM] || (WF[uF.bM] = {}), WF[uF.bM][uF.name] = {
          icon: uF.icon,
          level: uF.level,
          displayName: null !== (SF = uF.displayName) && void 0 !== SF ? SF : null,
          endTick: null !== (CF = uF.endTick) && void 0 !== CF ? CF : null,
          showInNametag: null === (AF = uF.showInNametag) || void 0 === AF || AF
        }
      }
      return WF
    }

    function PF(FF, WF) {
      const SF = {};
      for (const AF of Object.keys(FF)) {
        const uF = {};
        for (const SF of Object.keys(FF[AF])) {
          const CF = FF[AF][SF];
          null !== CF.endTick && CF.endTick < WF || (uF[SF] = {
            ...CF,
            endTick: null === CF.endTick ? null : CF.endTick - WF
          })
        }(0, CF.tc)(uF) || (SF[AF] = uF)
      }
      return SF
    }

    function RF(FF, WF, SF) {
      if (null !== FF) return Math.max(0, 1e3 * (FF - WF) / SF)
    }
    class iW {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(FF, WF) {
        this.clear();
        const SF = Date.now();
        for (const bW of FF.iterateEntityIds()) {
          const dF = FF.getEffects(bW);
          if ((0, CF.tc)(dF)) continue;
          const PF = WF(bW);
          for (const FF of Object.keys(dF)) {
            var AF, hF;
            const WF = dF[FF];
            this.upsert(PF, FF, {
              icon: WF.icon,
              level: WF.level,
              displayName: uF(WF.displayName),
              showInNametag: null === (AF = WF.showInNametag) || void 0 === AF || AF,
              endTime: void 0 !== WF.duration && null !== WF.duration ? (null !== (hF = WF.appliedAt) && void 0 !== hF ? hF : SF) + WF.duration : null
            })
          }
        }
      }
      upsert(FF, WF, SF) {
        this.tracked[FF] || (this.tracked[FF] = {}), this.tracked[FF][WF] = SF
      }
      remove(FF, WF) {
        const SF = this.tracked[FF];
        SF && (delete SF[WF], (0, CF.tc)(SF) && delete this.tracked[FF])
      }
      handleUpdate(FF) {
        var WF;
        0 !== FF.duration ? this.upsert(FF.bM, FF.name, {
          icon: FF.icon,
          level: FF.level,
          displayName: uF(FF.displayName),
          showInNametag: null === (WF = FF.showInNametag) || void 0 === WF || WF,
          endTime: void 0 !== FF.duration && null !== FF.duration ? Date.now() + FF.duration : null
        }) : this.remove(FF.bM, FF.name)
      }
      handleRemove(FF, WF) {
        this.remove(FF, WF)
      }
      sample(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const AF = {},
          uF = 1e3 / WF;
        for (const hF of Object.keys(this.tracked)) {
          const WF = this.tracked[hF],
            bW = {};
          for (const CF of Object.keys(WF)) {
            const AF = WF[CF];
            let dF = null;
            if (null !== AF.endTime) {
              const WF = Math.max(0, AF.endTime - SF);
              if (0 === WF) {
                this.remove(hF, CF);
                continue
              }
              dF = FF + Math.ceil(WF / uF)
            }
            bW[CF] = {
              icon: AF.icon,
              level: AF.level,
              displayName: AF.displayName,
              endTick: dF,
              showInNametag: AF.showInNametag
            }
          }(0, CF.tc)(bW) || (AF[hF] = bW)
        }
        return AF
      }
    }

    function eF(FF, WF, SF, CF) {
      FF.hasEntity(WF) ? FF.updateEffect(WF, SF, CF) : function(FF, WF, SF) {
        AF.j.Uu("EffectUpdate", {
          bM: FF,
          name: WF,
          ...SF
        }, !0)
      }(WF, SF, CF)
    }

    function EF(FF, WF, SF) {
      FF.hasEntity(WF) ? FF.removeEffect(WF, SF) : function(FF, WF) {
        AF.j.Uu("RemoveEffect", {
          bM: FF,
          name: WF
        }, !0)
      }(WF, SF)
    }

    function QF(FF, WF, SF, CF, AF, uF, hF) {
      for (const RF of Object.keys(SF))
        for (const uF of Object.keys(SF[RF])) {
          var bW;
          null !== (bW = WF[RF]) && void 0 !== bW && bW[uF] || (EF(FF, RF, uF), CF && RF === CF && String(AF) !== String(RF) && EF(FF, AF, uF))
        }
      for (const rW of Object.keys(WF))
        for (const bW of Object.keys(WF[rW])) {
          var dF, PF;
          const gW = WF[rW][bW],
            tW = RF(gW.endTick, uF, hF);
          if (0 === tW) {
            EF(FF, rW, bW), CF && rW === CF && String(AF) !== String(rW) && EF(FF, AF, bW);
            continue
          }
          const TF = null === (dF = SF[rW]) || void 0 === dF ? void 0 : dF[bW],
            aW = TF && (QF = gW, (iW = TF).icon === QF.icon && iW.level === QF.level && iW.displayName === QF.displayName && iW.endTick === QF.endTick && iW.showInNametag === QF.showInNametag),
            kW = {
              icon: gW.icon,
              level: gW.level,
              displayName: null !== (PF = gW.displayName) && void 0 !== PF ? PF : void 0,
              duration: tW,
              showInNametag: gW.showInNametag
            };
          aW || eF(FF, rW, bW, kW), CF && rW === CF && eF(FF, AF, bW, {
            ...kW,
            showInNametag: !1
          })
        }
      var iW, QF
    }
  },
  35433: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => PF,
      c: () => dF,
      d: () => iW,
      h: () => hF,
      k: () => RF
    });
    var CF = SF(35429),
      AF = SF(35440);
    const uF = {
      description: "Bloxd Replay",
      accept: {
        [CF.c]: CF.b
      }
    };

    function hF() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function bW(FF) {
      return FF instanceof DOMException && "AbortError" === FF.name
    }
    async function dF() {
      try {
        const [FF] = await window.showOpenFilePicker({
          multiple: !1,
          types: [uF]
        }), WF = await FF.getFile();
        return {
          handle: FF,
          bytes: new Uint8Array(await WF.arrayBuffer())
        }
      } catch (FF) {
        if (bW(FF)) return null;
        throw FF
      }
    }
    async function PF(FF) {
      if (FF && await async function(FF) {
          const WF = {
            mode: "readwrite"
          };
          return "granted" === await FF.queryPermission(WF) || "granted" === await FF.requestPermission(WF)
        }(FF)) return FF;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, CF.e)(),
          types: [uF]
        })
      } catch (WF) {
        if (bW(WF)) return null;
        throw WF
      }
    }
    async function RF(FF, WF) {
      const SF = await FF.createWritable();
      await SF.write(new Blob([WF], {
        type: CF.c
      })), await SF.close()
    }

    function iW(FF) {
      return (0, CF.d)((0, AF.e)(FF))
    }
  },
  34976: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => iW
    });
    var CF = SF(11),
      AF = SF(89),
      uF = SF(33),
      hF = SF(2765),
      bW = SF(2591),
      dF = SF(5630);
    const PF = "shaderPackListingCheckedAt",
      RF = 36e5;

    function iW() {
      const {
        canUseShaderPacks: FF
      } = AF.featureFlags.settings;
      var WF, iW;
      (0, bW.n)(FF) && !(0, bW.j)(FF) && (WF = uF.h.getItem(PF), iW = Date.now(), "number" !== typeof WF || iW < WF || iW - WF >= RF) && (0, hF.c)((() => {
        (async function() {
          if ("landingPage" !== CF.b.get("gameState")) return;
          const FF = await (0, dF.f)();
          if (void 0 === (null === FF || void 0 === FF ? void 0 : FF.listing)) return;
          uF.h.setItem(PF, Date.now());
          const {
            followListingUpdates: WF
          } = await Promise.all([SF.e(120), SF.e(117), SF.e(109)]).then((() => SF(39036)));
          await WF(FF, FF.listing) || uF.h.removeItem(PF)
        })().catch((FF => {
          console.error("Failed to check the shader pack listing for an update", FF)
        }))
      }))
    }
  },
  35e3: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => dF
    });
    var CF = SF(220),
      AF = SF(11),
      uF = SF(35009),
      hF = SF(1475),
      bW = SF(1621);

    function dF(FF, WF) {
      var SF, dF, PF;
      if (!AF.b.get("isKeydownEnabled") || FF.repeat) return;
      const RF = FF.code;
      "Escape" === FF.key ? (0, hF.i)(FF) : null !== (SF = bW.z.OpenSettings) && void 0 !== SF && SF.includes(RF) ? (0, hF.p)(FF, CF.n.SETTINGS) : null !== (dF = bW.z.OpenCharacterCustomization) && void 0 !== dF && dF.includes(RF) ? (0, uF.e)() || (0, hF.p)(FF, CF.n.CUSTOMISATION, WF()) : null !== (PF = bW.z.ShowDebugOverlay) && void 0 !== PF && PF.includes(RF) && AF.b.set({
        showDebugOverlay: !AF.b.get("showDebugOverlay")
      })
    }
  },
  34984: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => tW
    });
    var CF = SF(568),
      AF = SF(1090),
      uF = SF(138),
      hF = SF(1110),
      bW = SF(1085),
      dF = SF(20),
      PF = SF(3485),
      RF = SF(1529),
      iW = SF(2258),
      eF = SF(1168),
      EF = SF(1175),
      QF = SF(1336),
      rW = SF(1056),
      gW = SF(34989);

    function tW(FF) {
      return async (WF, SF, bW, QF, rW) => {
        let gW;
        if ((0, CF.Q)(bW)) {
          if (rW.aborted) return TF();
          const FF = await aW(WF, SF, QF);
          if (rW.aborted || iW.f.matchmakingEnded(FF.isError() ? null : performance.now()), FF.isError()) {
            const WF = FF.asError();
            return console.log("Join room did not succeed, reason:", WF.message), WF.forward()
          }
          gW = FF.getValue()
        } else {
          iW.f.skipPlayWait();
          const FF = kW(bW.replace("https://", "").replace("http://", ""));
          if (FF.isError()) return FF.asError().forward();
          gW = {
            endpoint: FF.getValue(),
            gameNameWithVariation: SF,
            lobbyName: WF instanceof AF.f ? WF.getLobbyName() : WF
          }
        }
        if (rW.aborted) return TF();
        console.log(`Connecting to ${gW.gameNameWithVariation} in lobby ${gW.lobbyName} on game server ${gW.endpoint}`), dF.j.Uu("matchmakeAndPlayStepCompleted", {
          step: uF.f.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, PF.e)(), RF.d.markGameLoadStart(), (0, EF.w)({
          websocketUrl: gW.endpoint,
          gameNameWithVariation: gW.gameNameWithVariation,
          lobbyName: gW.lobbyName
        }), dF.j.Uu("loadingScreenState", "loadingPage:loadingGame");
        const tW = await FF({
          place: gW,
          userContext: QF,
          direct: !(0, CF.Q)(bW),
          rematch: async () => {
            const FF = await async function(FF, WF, SF, CF) {
              const AF = await aW(FF, WF, SF);
              if (!AF.isError() && !CF.aborted) {
                const {
                  endpoint: FF,
                  gameNameWithVariation: WF,
                  lobbyName: SF
                } = AF.getValue();
                (0, EF.w)({
                  websocketUrl: FF,
                  gameNameWithVariation: WF,
                  lobbyName: SF
                })
              }
              return AF
            }(WF, SF, QF, rW);
            return FF.isError() || (gW = FF.getValue()), FF
          }
        }, rW);
        return tW.isError() ? tW.asError().forward() : ((0, eF.S)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), hF.d.value({
          gameNameWithVariation: gW.gameNameWithVariation,
          lobbyName: gW.lobbyName,
          addLobbyToRecentlyPlayed: !(WF instanceof AF.f)
        }))
      }
    }

    function TF() {
      return hF.d.errorWithCode("Left the game while it loaded", uF.f.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        Qh: !0
      })
    }
    async function aW(FF, WF, SF) {
      return (0, CF.Q)(FF) || FF instanceof AF.f || !(FF.length > bW.O) ? await QF.b.matchmakePlayer(SF, FF, WF, (0, gW.e)()).then((FF => {
        if (!1 === FF.succeeded) return hF.d.errorWithCode(FF.failReason, uF.f.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: WF,
          lobbyName: SF,
          gameNameWithVariation: CF
        } = FF, AF = kW(WF);
        return AF.isError() ? AF.asError().forward() : hF.d.value({
          endpoint: AF.getValue(),
          gameNameWithVariation: CF,
          lobbyName: SF
        })
      })).catch((FF => (console.error("Bad response from the matchmaking server:", FF), hF.d.errorWithCode(FF.toString(), uF.f.REQUEST_TO_MATCHMAKING, {
        error: FF,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", FF), hF.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", uF.f.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function kW(FF) {
      const WF = rW.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(FF);
      return WF.isError() ? hF.d.errorWithCode(WF.asError().message, uF.f.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : hF.d.value(WF.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, EF.q)("/")
    }
  },
  34989: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => rW,
      h: () => gW
    });
    var CF = SF(874),
      AF = SF(247),
      uF = SF(271),
      hF = SF(882),
      bW = SF(3607),
      dF = SF(89),
      PF = SF(132),
      RF = SF(1510),
      iW = SF(107),
      eF = SF(34993),
      EF = SF(33),
      QF = SF(958);

    function rW() {
      var FF, WF;
      return [...null !== (FF = navigator.languages) && void 0 !== FF ? FF : [null !== (WF = navigator.language) && void 0 !== WF ? WF : "none"], "en-Gb"]
    }

    function gW(FF, WF, SF, gW, tW) {
      const TF = (0, CF.j)(WF) ? (0, CF.o)(WF) : null,
        aW = {
          cookies: (0, RF.getAllCookiesForGameNameWithVariation)(WF),
          isMobile: (0, dF.isMobile)(),
          isUsingCustomGameTexturePack: null !== TF && tW(TF),
          generalCookies: {
            joinDiscord: !!EF.h.getItem("DiscordPressed"),
            newGo: bW.e,
            ...FF.getMetricsCookies(),
            trafficCode: gW,
            compliance: dF.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, dF.getBrowserName)(),
            version: (0, dF.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, dF.getPlatformType)(),
            deviceType: (0, iW.c)()
          },
          isLoggedIn: FF.isLoggedIn(),
          lobbyName: SF,
          languages: rW(),
          version: AF.c,
          siteUsed: PF.s,
          subsiteUsed: PF.z,
          playSessionId: (0, eF.f)(WF),
          visitSessionId: (0, QF.b)()
        };
      return null !== TF && (0, uF.zc)(TF) ? (aW.lobbyName = (0, CF.g)(TF, (0, CF.l)(WF), SF), {
        roomName: `classic_${hF.h}`,
        joinOptions: aW
      }) : {
        roomName: WF,
        joinOptions: aW
      }
    }
  },
  35116: (FF, WF, SF) => {
    function CF(FF, WF) {
      for (let SF = 0; SF < FF.length; SF++)
        if (FF[SF].identifier === WF) return !0;
      return !1
    }
    SF.d(WF, {
      c: () => CF
    })
  },
  35361: (FF, WF, SF) => {
    SF.d(WF, {
      B: () => oF,
      C: () => LF,
      D: () => GF,
      H: () => zW,
      I: () => IF,
      L: () => cW,
      P: () => fF,
      d: () => dF,
      h: () => xW,
      l: () => bW,
      p: () => MF,
      r: () => mW,
      u: () => VF,
      y: () => YF
    });
    var CF = SF(33);
    const AF = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      uF = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      hF = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      bW = uF.filter((FF => "docsButton" !== FF)),
      dF = hF.filter((FF => "aiHelperButton" !== FF)),
      PF = "codeEditorTutorials",
      RF = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      iW = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let eF = null,
      EF = null;
    const QF = new Set,
      rW = new Set;
    let gW = null;
    const tW = new Set,
      TF = new Set;

    function aW() {
      TF.forEach((FF => {
        FF()
      }))
    }

    function kW() {
      if (!eF) {
        const FF = CF.h.getItem(PF);
        eF = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof FF && null !== FF ? FF : {}
        }
      }
      return eF
    }

    function qW(FF) {
      const WF = kW();
      WF[FF] || (eF = {
        ...WF,
        [FF]: !0
      }, CF.h.setItem(PF, eF))
    }

    function VF(FF) {
      return "docsOverview" === FF ? uF : "aiHelperOverview" === FF ? hF : EF ? AF[EF] : []
    }

    function NF(FF) {
      return ("worldCodeButton" !== FF || !kW().worldCodeIntroShown) && !tW.has(FF)
    }

    function DF(FF) {
      var WF;
      return (null === (WF = gW) || void 0 === WF ? void 0 : WF.name) === FF ? gW.stepsDone : QF
    }

    function LF(FF, WF) {
      if (! function(FF) {
          return gW ? gW.name === FF : "welcome" === FF
        }(FF) || !NF(WF) || DF(FF).has(WF)) return !1;
      if (gW) return !0;
      const SF = RF[WF];
      return SF ? !kW()[SF] || rW.has(WF) : !kW()[iW[FF]]
    }

    function mW(FF) {
      var WF;
      return null !== (WF = VF(FF).find((WF => LF(FF, WF)))) && void 0 !== WF ? WF : null
    }

    function OF(FF) {
      var WF;
      qW(iW[FF]), (null === (WF = gW) || void 0 === WF ? void 0 : WF.name) === FF && (gW = null)
    }

    function xW(FF) {
      const WF = (gW ? [gW.name] : ["welcome", "docsOverview"]).find((WF => mW(WF) === FF));
      if (!WF) return;
      DF(WF).add(FF);
      const SF = RF[FF];
      SF && (qW(SF), gW || rW.add(FF)), null === mW(WF) && OF(WF), aW()
    }

    function ZF(FF, WF) {
      const SF = VF(FF),
        CF = DF(FF);
      for (let AF = SF.indexOf(WF) - 1; AF >= 0; AF--)
        if (CF.has(SF[AF]) && NF(SF[AF])) return SF[AF];
      return null
    }

    function oF(FF, WF) {
      return null !== ZF(FF, WF)
    }

    function YF(FF, WF) {
      const SF = ZF(FF, WF);
      SF && (DF(FF).delete(SF), aW())
    }

    function MF(FF) {
      OF(FF), "welcome" === FF && VF("welcome").forEach((FF => {
        const WF = RF[FF];
        WF && qW(WF)
      })), aW()
    }

    function cW(FF) {
      gW = {
        name: FF,
        stepsDone: new Set
      }, aW()
    }

    function GF() {
      (gW || 0 !== QF.size || 0 !== rW.size) && (gW = null, QF.clear(), rW.clear(), aW())
    }

    function zW(FF, WF) {
      const SF = WF ? FF : EF === FF ? null : EF;
      SF !== EF && (EF = SF, aW())
    }

    function IF(FF, WF) {
      tW.has(FF) === WF && (WF ? tW.delete(FF) : tW.add(FF), aW())
    }

    function fF(FF) {
      return TF.add(FF), () => {
        TF.delete(FF)
      }
    }
  },
  35105: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => bW,
      f: () => PF,
      i: () => hF
    });
    var CF = SF(1939),
      AF = SF(1943),
      uF = SF(1949);

    function hF(FF, WF) {
      return (!(0, uF.d)() || 0 === FF && 0 === WF) && (0, AF.t)(CF.i.Joystick, 0, FF, WF, 0)
    }
    const bW = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function dF(FF) {
      return {
        x: FF.left + FF.width / 2,
        y: FF.top + FF.height / 2,
        radius: Math.min(FF.width, FF.height) / 2
      }
    }
    const PF = new class {
      constructor(FF) {
        this.write = FF, this.elements = new Map
      }
      set(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        WF ? this.elements.set(FF, {
          element: WF,
          hidden: SF
        }) : this.elements.delete(FF), this.measureOne(FF)
      }
      measure() {
        for (const FF of this.elements.keys()) this.measureOne(FF)
      }
      hitZone(FF, WF) {
        let SF = null,
          CF = 1;
        for (const AF of this.elements.keys()) {
          const uF = this.shownRect(AF);
          if (!uF) continue;
          const hF = dF(uF),
            bW = Math.max(0, uF.width / 2 - hF.radius),
            PF = Math.max(0, uF.height / 2 - hF.radius),
            RF = Math.max(0, Math.abs(FF - hF.x) - bW),
            iW = Math.max(0, Math.abs(WF - hF.y) - PF),
            eF = Math.hypot(RF, iW) / hF.radius;
          eF < CF && (SF = {
            code: AF,
            element: this.elements.get(AF).element,
            ...hF
          }, CF = eF)
        }
        return SF
      }
      measureOne(FF) {
        const WF = this.shownRect(FF);
        if (!WF) return void this.write(CF.i.TouchZone, FF, 0, 0, 0);
        const SF = dF(WF);
        this.write(CF.i.TouchZone, FF, SF.x, SF.y, (0, AF.m)(SF.radius))
      }
      shownRect(FF) {
        const WF = this.elements.get(FF),
          SF = WF && !WF.hidden ? WF.element.getBoundingClientRect() : null;
        return !SF || SF.width <= 0 || SF.height <= 0 ? null : SF
      }
    }(AF.t)
  },
  35339: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => dF,
      f: () => bW
    });
    const CF = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      AF = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      uF = {
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
      hF = {
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
      bW = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: CF.files,
          dependencies: CF.dependencies,
          bundledSource: CF.bundledSource,
          types: CF.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: AF.files,
          dependencies: AF.dependencies,
          bundledSource: AF.bundledSource,
          types: AF.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: uF.files,
          dependencies: uF.dependencies,
          bundledSource: uF.bundledSource,
          types: uF.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: hF.files,
          dependencies: hF.dependencies,
          bundledSource: hF.bundledSource,
          types: hF.types
        }
      };

    function dF(FF) {
      const WF = [],
        SF = new Set,
        CF = FF => {
          if (SF.has(FF)) return;
          const AF = bW[FF];
          if (AF) {
            SF.add(FF);
            for (const FF of AF.dependencies) CF(FF);
            WF.push(FF)
          }
        };
      for (const AF of FF) CF(AF);
      return WF
    }
  },
  35347: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => dF,
      f: () => bW,
      j: () => hF,
      m: () => uF,
      n: () => PF,
      o: () => RF,
      s: () => QF,
      u: () => EF,
      y: () => eF
    });
    var CF = SF(1101);
    const AF = ["quickjs", "ses"];

    function uF(FF) {
      return AF.includes(FF)
    }

    function hF(FF) {
      return FF === CF.h || FF === CF.l
    }

    function bW(FF, WF) {
      return FF === CF.h && WF === CF.l || FF === CF.l && WF === CF.h
    }

    function dF(FF) {
      const WF = CF.l in FF,
        SF = CF.h in FF;
      return WF && SF ? null : WF ? CF.l : SF ? CF.h : null
    }

    function PF(FF, WF, SF) {
      const CF = `${WF}/`;
      return FF.filter((FF => FF.startsWith(CF))).map((FF => [FF, `${SF}/${FF.slice(CF.length)}`]))
    }

    function RF(FF, WF) {
      let SF = 0;
      for (const [CF, AF] of Object.entries(FF)) CF !== WF && (SF += AF.length);
      return SF
    }
    const iW = "@plugins/";

    function eF(FF) {
      return `${iW}${FF}`
    }

    function EF(FF, WF) {
      return `/node_modules/@plugins/${FF}/${WF}`
    }

    function QF(FF) {
      if (!FF.startsWith(iW)) return null;
      const WF = FF.slice(iW.length);
      return function(FF) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(FF)
      }(WF) ? WF : null
    }
  },
  35352: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => bW,
      h: () => AF,
      j: () => hF,
      l: () => dF,
      p: () => uF
    });
    var CF = SF(35350);
    const AF = 5,
      uF = "[SCHEMATIC]",
      hF = 1024e4;

    function bW(FF) {
      return FF.endsWith(".bloxdschem") && (0, CF.n)(FF.slice(0, -11) + ".ts") && FF.length <= 64
    }

    function dF(FF) {
      return Object.fromEntries(Object.keys(FF).map((FF => [FF, uF])))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);