export const id = 76;
export const ids = [76];
export const modules = {
  35538: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => aB,
      f: () => QB
    });
    var VB = dB(62),
      yB = dB(1679),
      pB = dB(35542),
      lB = dB.n(pB),
      JB = dB(3951),
      YB = dB(1657),
      gB = dB(1317),
      oB = dB(95),
      kB = dB(105),
      LB = dB(279),
      OB = dB(933),
      DB = dB.n(OB),
      uB = dB(21),
      HB = dB(946),
      EB = dB(1507),
      vB = dB(1596),
      mB = dB(1564),
      iB = dB(1754),
      NB = dB(1286),
      tB = dB(1817),
      fB = dB(1275),
      sB = dB(8107),
      MB = dB(35549),
      zB = dB(35561),
      wB = dB(1347),
      UB = dB(2144),
      FB = dB(1078),
      KB = dB(35568);
    var rB = dB(8556);
    var IB = dB(980);
    const cB = dB(35571),
      SB = ["enter", "t", "/"];
    let PB = !1;

    function QB() {
      return PB || (0, vB.isTextEntry)(document.activeElement)
    }

    function RB() {
      var BB, TB;
      (0, tB.e)();
      const dB = null !== (BB = null === (TB = (0, NB.i)()) || void 0 === TB ? void 0 : TB.getBoundButton("keyboardChannel")) && void 0 !== BB ? BB : null;
      return dB ? (0, IB.jsx)(iB.c, {
        className: "ChatInputChannelGlyph",
        glyph: dB
      }) : null
    }

    function aB() {
      const {
        t: BB
      } = (0, FB.z)(), {
        isTouchScreen: TB
      } = (0, uB.m)(["isTouchScreen"]), dB = (0, fB.r)(), [pB, OB] = (0, VB.useState)(!1), iB = (0, VB.useRef)(pB), NB = (0, VB.useRef)(null), {
        messages: tB,
        reportedPlayers: QB,
        channel: aB
      } = (0, sB.p)(), XB = (0, VB.useRef)(0), WB = (0, VB.useRef)(""), hB = (0, VB.useRef)(null);
      var CB;
      CB = hB, (0, VB.useEffect)((() => {
        if (!(0, oB.isIOS)()) return;
        const BB = CB.current;
        let TB = null;
        const dB = dB => {
            const VB = dB.changedTouches[0];
            TB = "none" === getComputedStyle(BB).pointerEvents ? {
              id: VB.identifier,
              y: VB.clientY
            } : null
          },
          VB = dB => {
            const VB = TB,
              yB = VB && (0, KB.c)(dB.changedTouches, VB.id);
            yB && (dB.preventDefault(), BB.scrollBy({
              top: VB.y - yB.clientY,
              behavior: "instant"
            }), VB.y = yB.clientY)
          };
        return BB.addEventListener("touchstart", dB, {
          passive: !0
        }), BB.addEventListener("touchmove", VB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", dB), BB.removeEventListener("touchmove", VB)
        }
      }), [CB]);
      const [GB, qB] = (0, VB.useState)(!1), [xB, jB] = (0, VB.useState)(!1), AB = (0, VB.useRef)(GB), bB = (0, VB.useRef)(null), nB = (0, VB.useRef)(!1), eB = (0, VB.useRef)(null), BT = (0, VB.useRef)(null), TT = (0, VB.useRef)(null), dT = (0, VB.useRef)(lT);
      dT.current = lT;
      const VT = (0, UB.f)();

      function yT() {
        iB.current = !1, OB(!1), BT.current.blur()
      }

      function pT(BB) {
        AB.current = BB, qB(BB)
      }

      function lT() {
        const BB = BT.current.value;
        BT.current.value = "", JT(BB)
      }

      function JT(BB) {
        (0, sB.l)(BB), XB.current = 0, pT(!1)
      }

      function YT(BB, TB) {
        0 === XB.current && (WB.current = BT.current.value);
        const dB = (0, sB.k)(XB.current + BB, TB);
        XB.current = dB.stepsBack, BT.current.value = 0 === dB.stepsBack ? WB.current : dB.text, setTimeout((() => {
          BT.current && BT.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function gT() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        hB.current && (!BB && AB.current || (hB.current.scrollTop = 1e5))
      }
      return (0, JB.d)(!0, pB, "ChatComponent"), (0, VB.useEffect)((() => (PB = pB, () => {
          PB = !1
        })), [pB]), (0, gB.e)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, EB.o)() && OB(!1)
        })), (0, VB.useEffect)((() => {
          BT.current.addEventListener("blur", (BB => {
            if (null === BT.current) return;
            Array.from(document.querySelectorAll(":hover")).some((BB => BB.classList.contains("ChatInputChannel") || BB.classList.contains("ChatMsgSelectWrapper"))) || ((0, oB.isMobile)() && iB.current && "" !== BT.current.value && dT.current(), OB(!1))
          }));
          const BB = BB => {
            NB.current.contains(BB.target) || (0, mB.l)(BB.target) || OB(!1)
          };
          document.addEventListener("touchstart", BB, {
            capture: !0
          });
          const TB = BB => {
            (0, zB.d)(BB.target) && (iB.current = !1, OB(!1))
          };
          document.addEventListener("mousedown", TB, {
            capture: !0
          });
          const dB = () => {
              clearTimeout(bB.current), pT(!0)
            },
            VB = () => {
              clearTimeout(bB.current), bB.current = setTimeout((() => {
                pT(!1), gT()
              }), 4e3)
            },
            pB = () => {
              document.pointerLockElement ? (OB(!1), jB(!0), nB.current = !1, pT(!1), gT()) : jB(!1)
            };
          hB.current.addEventListener("pointermove", (BB => {
            "touch" === BB.pointerType || nB.current || document.pointerLockElement || (nB.current = !0, clearTimeout(bB.current))
          })), hB.current.addEventListener("pointerleave", (BB => {
            "touch" !== BB.pointerType && (nB.current = !1, AB.current && VB())
          })), hB.current.addEventListener("pointerdown", (BB => {
            "touch" === BB.pointerType || document.pointerLockElement || (nB.current = !0, dB())
          })), hB.current.addEventListener("wheel", (BB => {
            document.pointerLockElement || BB.deltaY >= 0 && Math.abs(hB.current.scrollTop) < 1 || (dB(), nB.current || (bB.current = setTimeout((() => {
              pT(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), hB.current.addEventListener("touchstart", dB), hB.current.addEventListener("touchend", VB), hB.current.addEventListener("touchcancel", VB), document.addEventListener("pointerlockchange", pB);
          const JB = BB => {
            if (VT.shown && (iB.current || ! function(BB) {
                if ((0, vB.isTypingInInput)()) return !0;
                const TB = document.activeElement;
                return (TB instanceof HTMLButtonElement || "button" === (null === TB || void 0 === TB ? void 0 : TB.getAttribute("role"))) && ["Enter", " "].includes(BB.key)
              }(BB)) && "codeEditor" !== uB.d.get("openInGameMenuName") && "lobbyCodeEditor" !== uB.d.get("openInGameMenuName") && !yB.gameBridge.latest("connectedGame").replay)
              if (iB.current || !(0, EB.o)()) {
                if (iB.current) {
                  if ("ArrowUp" === BB.code || "ArrowDown" === BB.code) return YT("ArrowUp" === BB.code ? 1 : -1, !1), void BB.stopPropagation();
                  if ("Tab" === BB.code) return sB.e.selectNextChannel(), BB.stopPropagation(), void BB.preventDefault();
                  if (BB.ctrlKey && ZB.includes(cB[BB.keyCode])) return BB.preventDefault(), void BB.stopPropagation()
                }
                if ([...SB, "esc"].includes(lB()(BB)))
                  if ("esc" !== lB()(BB)) {
                    if (!iB.current || "/" !== lB()(BB)) {
                      if ("t" === lB()(BB)) {
                        if (iB.current) return void BB.stopPropagation();
                        BB.preventDefault()
                      }
                      iB.current && "" !== BT.current.value && dT.current(), BB.repeat || (iB.current || "/" === lB()(BB) && (BT.current.value = "/", BB.preventDefault()), OB(!iB.current))
                    }
                  } else iB.current && (OB(!1), BB.stopPropagation());
                else iB.current && BB.stopPropagation()
              } else SB.includes(lB()(BB)) && (BB.preventDefault(), BB.stopPropagation(), (0, EB.c)(BB))
          };
          document.addEventListener("keydown", JB, {
            capture: !0
          });
          const YB = hB.current;
          let gB = !1;
          const kB = new ResizeObserver((() => {
              gB && (gB = !1, gT())
            })),
            LB = () => {
              gB = !0, kB.unobserve(YB), kB.observe(YB)
            };
          eB.current = LB;
          const DB = new MutationObserver(LB);
          return DB.observe(YB, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", JB, {
              capture: !0
            }), document.removeEventListener("touchstart", BB, {
              capture: !0
            }), document.removeEventListener("mousedown", TB, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", pB), eB.current = null, DB.disconnect(), kB.disconnect(), clearTimeout(bB.current)
          }
        }), []), (0, mB.r)(BT, {
          open: () => {
            OB(!0)
          },
          close: () => {
            yT()
          },
          submit: () => {
            "" !== BT.current.value && lT(), yT()
          },
          stepHistory: () => {
            YT(1, !0)
          },
          sendLine: BB => {
            JT(BB), yT()
          },
          selectNextChannel: () => {
            sB.e.selectNextChannel()
          }
        }), (0, VB.useEffect)((() => {
          var BB;
          (iB.current = pB, BT.current) && (pB ? (XB.current = 0, BT.current.focus()) : (BT.current.blur(), null === (BB = eB.current) || void 0 === BB || BB.call(eB)))
        }), [pB]),
        function(BB, TB) {
          (0, VB.useLayoutEffect)((() => {
            if (!TB) return;
            rB.b.hold();
            const dB = BB.current.closest(".InGameHeaderAndChat"),
              VB = window.visualViewport;
            let yB = "";
            const pB = () => {
              const BB = `${VB.offsetTop+VB.height}px`;
              BB !== yB && (yB = BB, dB.style.setProperty("--keyboard-top", BB))
            };
            return pB(), VB.addEventListener("resize", pB), VB.addEventListener("scroll", pB), () => {
              VB.removeEventListener("resize", pB), VB.removeEventListener("scroll", pB), dB.style.removeProperty("--keyboard-top"), rB.b.release()
            }
          }), [BB, TB])
        }(NB, pB && TB), (0, IB.jsx)(IB.Fragment, {
          children: (0, IB.jsxs)("div", {
            ref: NB,
            className: DB()("Chat", {
              Chatting: pB
            }),
            "data-camera-keeper": pB ? "" : void 0,
            children: [(0, IB.jsx)("div", {
              ref: hB,
              className: DB()("ChatMessages", {
                HideScrollbar: !GB && !pB,
                NoScrolling: !(0, oB.isMobile)() && xB
              }),
              children: (0, IB.jsx)(MB.c, {
                messages: tB,
                reportedPlayers: QB
              })
            }), TB && !pB && (0, IB.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": BB("general:chat"),
              ...(0, wB.f)((() => {
                OB(!0), TT.current.style.display = "flex", BT.current.focus()
              }), "pointerup"),
              children: (0, IB.jsx)(HB.e, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, IB.jsxs)("div", {
              ref: TT,
              className: "ChatInputWrapper",
              style: {
                display: "" + (pB ? "flex" : "none")
              },
              children: [aB && (0, IB.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: aB.elementBgColor
                },
                onClick: BB => {
                  sB.e.selectNextChannel(), BT.current.focus()
                },
                children: (0, IB.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, IB.jsx)(YB.e, {
                    text: aB.elementContent
                  })
                })
              }), aB && dB && (0, IB.jsx)(RB, {}), (0, IB.jsx)("input", {
                className: "ChatInput",
                maxLength: LB._c,
                ref: BT,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": BB("general:chat"),
                placeholder: aB ? `${aB.channelName} Chat${"touchOnly"===(0,kB.e)()||dB?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const ZB = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35549: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => sB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(8116),
      JB = dB(24),
      YB = dB(2088),
      gB = dB(3080),
      oB = dB(1771),
      kB = dB(21),
      LB = dB(1657),
      OB = dB(35551),
      DB = dB(1901),
      uB = dB(35557),
      HB = dB(2250),
      EB = dB(2220),
      vB = dB(2211),
      mB = dB(3099),
      iB = dB(2575),
      NB = dB(1727),
      tB = dB(980);

    function fB(BB) {
      for (let dB = BB.length - 1; dB >= 0; dB--) {
        const VB = "string" === typeof(TB = BB[dB]) ? TB : "str" in TB && "string" === typeof TB.str ? TB.str : "";
        if ("" !== VB.trim()) return VB
      }
      var TB;
      return ""
    }

    function sB(BB) {
      let {
        messages: TB,
        reportedPlayers: dB
      } = BB;
      return (0, tB.jsx)(tB.Fragment, {
        children: TB.map((BB => (0, tB.jsx)(MB, {
          message: BB,
          reportedPlayers: dB
        }, BB.clientChatMsgId)))
      })
    }
    const MB = (0, VB.memo)((function(BB) {
      var TB;
      let {
        message: dB,
        reportedPlayers: yB
      } = BB;
      const sB = (0, VB.useRef)(null),
        [MB] = (0, VB.useState)(iB.j),
        {
          author: zB
        } = dB,
        wB = null === zB || void 0 === zB ? void 0 : zB.id,
        UB = null !== (TB = null === zB || void 0 === zB ? void 0 : zB.name) && void 0 !== TB ? TB : void 0,
        FB = (0, oB.c)(UB),
        KB = null !== zB && void 0 !== zB && zB.profileEffect ? DB.i[zB.profileEffect] : void 0,
        rB = null !== zB && !zB.local,
        IB = null === zB && null !== dB.serverChatMsgId,
        cB = (0, NB.g)("hiddenPlayerNames", (BB => (0, uB.g)(rB, UB, BB))),
        SB = null === dB.serverChatMsgId || null === zB ? null : {
          text: fB(dB.content),
          serverChatMsgId: dB.serverChatMsgId,
          authorId: zB.id
        },
        PB = IB || null !== SB && !yB.includes(wB),
        QB = (0, gB.f)(rB && null !== UB && void 0 !== UB ? UB : null),
        RB = (0, vB.g)(sB);
      (0, VB.useEffect)((() => () => {
        vB.e.closeIfOwner(sB)
      }), []);
      const aB = () => {
          IB ? JB.h.yH("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Jo: (0, lB.b)(dB.content),
            serverChatMsgId: dB.serverChatMsgId
          }) : null !== SB ? JB.h.yH("OpenReportMenu", {
            playerEId: wB,
            playerName: UB,
            Jo: SB.text,
            serverChatMsgId: SB.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        ZB = void 0 === UB ? [] : (0, mB.e)(QB, UB, SB);
      return (0, tB.jsxs)("div", {
        ref: sB,
        className: pB()("MessageWrapper", {
          ChatMsgSelectWrapper: wB,
          Still: MB
        }),
        onContextMenu: cB ? BB => {
          (0, HB.f)(sB, BB, {
            ...(0, uB.c)(wB, UB),
            showLocation: !1,
            status: null,
            extraActions: PB ? [{
              icon: "flag",
              text: "Report",
              onClick: aB
            }] : [],
            friendRequestSource: "chat"
          }, kB.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: cB ? BB => {
          (0, EB.c)(BB, (() => (0, uB.c)(wB, UB).playerSocialPreview))
        } : void 0,
        children: [KB && (0, tB.jsx)(KB, {
          className: "ChatMessageBackground",
          simple: !0
        }), (rB || IB) && !RB && (0, tB.jsx)(OB.b, {
          className: "ChatFloatingActions",
          triggerElementRef: sB,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: aB,
            show: PB
          }, ...ZB, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: BB => {
              (0, YB.i)(UB, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: cB && "blocked" !== QB
          }]
        }), (0, tB.jsx)(LB.e, {
          text: dB.content,
          friendBadgeFor: FB ? UB : void 0
        }, dB.clientChatMsgId)]
      }, dB.clientChatMsgId)
    }))
  },
  35589: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      e: () => DB,
      h: () => LB,
      l: () => kB
    });
    var VB = dB(8570),
      yB = dB(35595),
      pB = dB(35601),
      lB = dB(8103),
      JB = dB(1317),
      YB = dB(62),
      gB = dB(72),
      oB = dB(980);

    function kB() {
      var BB;
      return (0, JB.f)(yB.c, (0, yB.k)()), (0, oB.jsx)(oB.Fragment, {
        children: null === (BB = (0, yB.k)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function LB(BB) {
      var TB;
      let {
        show: dB
      } = BB;
      (0, JB.f)(yB.c, (0, yB.k)());
      const gB = null === (TB = (0, yB.k)()) || void 0 === TB ? void 0 : TB.menu;
      return (0, YB.useEffect)((() => {
        var BB;
        dB || (null === gB || void 0 === gB || null === (BB = gB.onClose) || void 0 === BB || BB.call(gB), (0, pB.r)())
      }), [dB, gB]), (0, YB.useEffect)((() => dB ? (0, lB.c)(pB.x, pB.e) : void 0), [dB]), (0, oB.jsx)(VB.d, {
        showing: dB,
        globallyUniqueKey: "clientGameMenu",
        children: null === gB || void 0 === gB ? void 0 : gB.content
      })
    }

    function OB(BB) {
      let {
        placement: TB = "bottom"
      } = BB;
      return (0, oB.jsx)("div", {
        id: `clientGameHud-${TB}`,
        style: {
          display: "contents"
        }
      })
    }

    function DB(BB) {
      let {
        children: TB,
        placement: dB = "bottom"
      } = BB;
      const [VB, yB] = (0, YB.useState)(null);
      return (0, YB.useEffect)((() => {
        yB(document.getElementById(`clientGameHud-${dB}`))
      }), [dB]), VB ? (0, gB.createPortal)(TB, VB) : null
    }
  },
  35876: (BB, TB, dB) => {
    dB.d(TB, {
      B: () => NB,
      F: () => sB,
      J: () => yB,
      M: () => fB,
      e: () => mB,
      f: () => HB,
      i: () => DB,
      m: () => OB,
      n: () => vB,
      q: () => MB,
      u: () => iB,
      x: () => tB
    });
    var VB = dB(62);
    const yB = 5e3,
      pB = 500,
      lB = 3e3;
    let JB = null,
      YB = null,
      gB = null;
    const oB = new Set;

    function kB(BB) {
      JB = BB;
      for (const TB of oB) TB()
    }

    function LB() {
      if (!JB || void 0 !== JB.endedAt) return;
      null !== YB && (clearTimeout(YB), YB = null), kB({
        ...JB,
        endedAt: Date.now()
      });
      const BB = gB;
      gB = null, null === BB || void 0 === BB || BB()
    }

    function OB(BB, TB) {
      let {
        submit: dB,
        reopen: VB
      } = TB;
      null !== YB && clearTimeout(YB), gB = VB, kB({
        ...BB,
        startedAt: Date.now(),
        errors: []
      }), YB = setTimeout(LB, lB), dB()
    }

    function DB() {
      JB && void 0 === JB.endedAt && void 0 === JB.ranAt && (null !== YB && clearTimeout(YB), kB({
        ...JB,
        ranAt: Date.now()
      }), YB = setTimeout(LB, yB))
    }
    const uB = 3;

    function HB(BB) {
      if (!JB || void 0 === JB.ranAt || void 0 !== JB.endedAt || JB.errors.includes(BB) || JB.errors.length >= uB) return;
      const TB = 0 === JB.errors.length;
      kB({
        ...JB,
        errors: [...JB.errors, BB]
      }), TB && (null !== YB && clearTimeout(YB), YB = setTimeout(LB, pB))
    }

    function EB(BB) {
      var TB;
      return (null === (TB = JB) || void 0 === TB ? void 0 : TB.chatKey) === BB ? JB : null
    }

    function vB(BB) {
      const TB = EB(BB);
      return TB && void 0 !== TB.endedAt ? (kB(null), TB) : null
    }

    function mB(BB) {
      var TB;
      (null === (TB = JB) || void 0 === TB ? void 0 : TB.chatKey) === BB && (null !== YB && (clearTimeout(YB), YB = null), gB = null, kB(null))
    }
    const iB = "These changes from your last answer didn't go in. Make them again.";

    function NB(BB) {
      const TB = [...new Set(BB)].slice(0, uB);
      return `Fix this in your change: when it ran, the world showed ${1===TB.length?"this error":"these errors"}: ${TB.join(" ")}`
    }

    function tB(BB) {
      return `Your change didn't go in, because the code wouldn't run at all: ${BB.join(" ")} Send the whole change again with that fixed.`
    }

    function fB(BB) {
      return `Fix this in your change: ${BB.join(" ")}`
    }

    function sB(BB) {
      var TB;
      if (void 0 === BB.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const dB = Math.max(1, Math.round(((null !== (TB = BB.endedAt) && void 0 !== TB ? TB : BB.ranAt) - BB.ranAt) / 1e3)),
        VB = `Your change ran in your world for ${dB} ${1===dB?"second":"seconds"}`;
      return 0 === BB.errors.length ? {
        title: "Tested: no errors",
        text: `${VB} without an error.`
      } : {
        title: 1 === BB.errors.length ? "Tested: it showed an error" : `Tested: it showed ${BB.errors.length} errors`,
        text: `${VB} and showed: ${BB.errors.join(" ")}`
      }
    }

    function MB(BB) {
      const [TB, dB] = (0, VB.useState)((() => EB(BB)));
      return (0, VB.useEffect)((() => {
        const TB = () => {
          dB(EB(BB))
        };
        return TB(), oB.add(TB), () => {
          oB.delete(TB)
        }
      }), [BB]), TB
    }
  },
  35878: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      f: () => VB
    });
    const VB = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function yB(BB, TB, dB) {
      return {
        key: BB,
        label: `Code block at ${TB.join(", ")}`,
        codeBlock: !0,
        pos: TB,
        canChangePos: dB
      }
    }
  },
  35873: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => pB,
      j: () => lB,
      k: () => yB
    });
    const VB = "code block",
      yB = "World Code/";

    function pB(BB) {
      return BB.trim().toLowerCase().startsWith(yB.toLowerCase())
    }

    function lB(BB) {
      return BB.trim().slice(yB.length).replace(/^\.?\//, "")
    }
  },
  35848: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => iB,
      E: () => UB,
      I: () => zB,
      M: () => LB,
      N: () => IB,
      P: () => sB,
      S: () => MB,
      T: () => rB,
      b: () => DB,
      f: () => YB,
      j: () => uB,
      n: () => wB,
      q: () => JB,
      r: () => oB,
      t: () => OB,
      w: () => HB
    });
    var VB = dB(35832),
      yB = dB(35841);
    const pB = "bloxd-world-code-directory-sync",
      lB = "handles",
      JB = "[INVALID SCHEMATIC PLACEHOLDER]";

    function YB(BB, TB) {
      return `${BB}::${TB}`
    }
    const gB = new Set(["node_modules", ".git"]);

    function oB() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function kB() {
      return new Promise(((BB, TB) => {
        const dB = indexedDB.open(pB, 1);
        dB.onupgradeneeded = () => {
          const BB = dB.result;
          BB.objectStoreNames.contains(lB) || BB.createObjectStore(lB)
        }, dB.onsuccess = () => {
          BB(dB.result)
        }, dB.onerror = () => {
          var BB;
          TB(null !== (BB = dB.error) && void 0 !== BB ? BB : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function LB(BB, TB) {
      const dB = await kB();
      try {
        await new Promise(((VB, yB) => {
          const pB = dB.transaction(lB, "readwrite");
          pB.objectStore(lB).put(TB, BB), pB.oncomplete = () => {
            VB()
          }, pB.onerror = () => {
            var BB;
            yB(null !== (BB = pB.error) && void 0 !== BB ? BB : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        dB.close()
      }
    }
    async function OB(BB) {
      const TB = await kB();
      try {
        return await new Promise(((dB, VB) => {
          const yB = TB.transaction(lB, "readonly").objectStore(lB).get(BB);
          yB.onsuccess = () => {
            var BB;
            dB(null !== (BB = yB.result) && void 0 !== BB ? BB : null)
          }, yB.onerror = () => {
            var BB;
            VB(null !== (BB = yB.error) && void 0 !== BB ? BB : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        TB.close()
      }
    }
    async function DB(BB) {
      const TB = await kB();
      try {
        await new Promise(((dB, VB) => {
          const yB = TB.transaction(lB, "readwrite");
          yB.objectStore(lB).delete(BB), yB.oncomplete = () => {
            dB()
          }, yB.onerror = () => {
            var BB;
            VB(null !== (BB = yB.error) && void 0 !== BB ? BB : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        TB.close()
      }
    }
    async function uB(BB) {
      const TB = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await BB.queryPermission(TB) || "granted" === await BB.requestPermission(TB)
    }
    async function HB(BB) {
      if (!oB()) return null;
      try {
        const TB = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await LB(BB, TB), TB
      } catch (TB) {
        if (function(BB) {
            return BB instanceof DOMException && "AbortError" === BB.name
          }(TB)) return null;
        throw TB
      }
    }

    function EB(BB) {
      return BB.startsWith(".") || gB.has(BB)
    }

    function vB(BB) {
      if (!BB) return !0;
      const TB = BB.split("/");
      for (const dB of TB)
        if ("" === dB || "." === dB || ".." === dB) return !1;
      return !0
    }
    async function mB(BB, TB, dB) {
      for await (const [pB, lB] of BB.entries()) {
        if ("directory" === lB.kind) {
          if (EB(pB)) continue;
          const BB = TB ? `${TB}/${pB}` : pB;
          if (!vB(BB)) continue;
          await mB(lB, BB, dB);
          continue
        }
        const BB = TB ? `${TB}/${pB}` : pB;
        if (!(0, VB.v)(BB) && !(0, yB.e)(BB)) continue;
        const JB = await lB.getFile();
        dB[BB] = (0, yB.e)(BB) ? await FB(JB) : await JB.text()
      }
    }
    async function iB(BB) {
      const TB = {};
      return await mB(BB, "", TB), TB
    }

    function NB(BB) {
      return !(!BB || BB !== BB.trim() || BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) && vB(BB)
    }
    async function tB(BB, TB, dB) {
      const VB = TB.split("/"),
        yB = VB[VB.length - 1];
      let pB = BB;
      for (let lB = 0; lB < VB.length - 1; lB++) pB = await pB.getDirectoryHandle(VB[lB], {
        create: dB
      });
      return {
        dir: pB,
        fileName: yB
      }
    }
    async function fB(BB, TB, dB) {
      if (!NB(TB)) throw new Error(`Refusing to write unsafe path: ${TB}`);
      const {
        dir: VB,
        fileName: yB
      } = await tB(BB, TB, !0), pB = await VB.getFileHandle(yB, {
        create: !0
      }), lB = await pB.createWritable();
      await lB.write(dB), await lB.close()
    }
    async function sB(BB, TB, dB) {
      const VB = await async function(BB, TB) {
        if (!NB(TB)) return null;
        try {
          const {
            dir: dB,
            fileName: VB
          } = await tB(BB, TB, !1), yB = await dB.getFileHandle(VB), pB = await yB.getFile();
          return await pB.text()
        } catch (dB) {
          if (dB instanceof DOMException && ("NotFoundError" === dB.name || "NotAllowedError" === dB.name)) return null;
          throw dB
        }
      }(BB, TB);
      VB !== dB && await fB(BB, TB, dB)
    }
    async function MB(BB, TB, dB) {
      if (!(0, VB.v)(TB) && !(0, yB.e)(TB)) throw new Error(`Refusing to write non-allowlisted path: ${TB}`);
      if ((0, yB.e)(TB)) {
        if (await KB(BB, TB) === JB) throw new Error(`Move the binary schematic ${TB} outside the linked folder before syncing its placeholder`)
      }
      await fB(BB, TB, dB)
    }
    async function zB(BB, TB) {
      if (!NB(TB)) throw new Error(`Refusing to remove unsafe path: ${TB}`);
      try {
        const {
          dir: dB,
          fileName: VB
        } = await tB(BB, TB, !1);
        await dB.removeEntry(VB)
      } catch (dB) {
        if (dB instanceof DOMException && ("NotFoundError" === dB.name || "NotAllowedError" === dB.name)) return;
        throw dB
      }
    }
    async function wB(BB, TB) {
      if (!NB(TB)) return null;
      try {
        const dB = TB.split("/");
        let VB = BB;
        for (const BB of dB) VB = await VB.getDirectoryHandle(BB);
        return VB
      } catch (dB) {
        if (dB instanceof DOMException && ("NotFoundError" === dB.name || "NotAllowedError" === dB.name)) return null;
        throw dB
      }
    }
    async function UB(BB, TB) {
      if ((0, VB.v)(TB) || (0, yB.e)(TB)) {
        if ((0, yB.e)(TB)) {
          if (await KB(BB, TB) === JB) throw new Error(`Refusing to remove a binary schematic: ${TB}`)
        }
        await zB(BB, TB)
      }
    }
    async function FB(BB) {
      if (BB.size > 64) return JB;
      const TB = await BB.text();
      return Array.from(TB).some((BB => {
        const TB = BB.charCodeAt(0);
        return TB < 9 || TB > 13 && TB < 32 || 65533 === TB
      })) ? JB : TB
    }
    async function KB(BB, TB) {
      try {
        const {
          dir: dB,
          fileName: VB
        } = await tB(BB, TB, !1);
        return await FB(await (await dB.getFileHandle(VB)).getFile())
      } catch (dB) {
        if (dB instanceof DOMException && "NotFoundError" === dB.name) return null;
        throw dB
      }
    }
    async function rB(BB, TB) {
      const dB = await iB(BB);
      for (const VB of Object.keys(dB)) VB in TB || (0, yB.e)(VB) || await UB(BB, VB);
      for (const [pB, lB] of Object.entries(TB))((0, VB.v)(pB) || (0, yB.e)(pB)) && await MB(BB, pB, lB)
    }

    function IB(BB, TB) {
      var dB, VB;
      let yB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const pB = null !== (dB = yB.debounceMs) && void 0 !== dB ? dB : 300,
        lB = null !== (VB = yB.pollMs) && void 0 !== VB ? VB : 1e3;
      let JB = !1,
        YB = null,
        gB = null,
        oB = null;
      const kB = () => {
          JB || (YB && clearTimeout(YB), YB = setTimeout((() => {
            YB = null, LB()
          }), pB))
        },
        LB = async () => {
          if (!JB) try {
            if (!await uB(BB, "readwrite")) return;
            const dB = await iB(BB);
            JB || TB(dB)
          } catch (dB) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", dB)
          }
        };
      LB();
      const OB = window.FileSystemObserver;
      if (OB) try {
        oB = new OB((() => {
          kB()
        })), oB.observe(BB, {
          recursive: !0
        })
      } catch (DB) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", DB), oB = null
      }
      return oB || (gB = setInterval((() => {
        kB()
      }), lB)), () => {
        JB = !0, YB && clearTimeout(YB), gB && clearInterval(gB), oB && oB.disconnect()
      }
    }
  },
  4226: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => HB,
      h: () => EB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(1078),
      JB = dB(4232),
      YB = dB(1657),
      gB = dB(2139),
      oB = dB(4240),
      kB = dB(980);
    const LB = new WeakMap;
    let OB = 0;

    function DB(BB) {
      let TB = LB.get(BB);
      return void 0 === TB && (TB = OB++, LB.set(BB, TB)), TB
    }

    function uB(BB) {
      let {
        piece: TB
      } = BB;
      return "space" === TB.kind ? (0, kB.jsx)(kB.Fragment, {
        children: TB.text
      }) : (0, kB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${TB.delayMs}ms`
        },
        children: (0, kB.jsx)(JB.d, {
          text: "icon" === TB.kind ? `[[${TB.icon}]]` : TB.text
        })
      })
    }

    function HB(BB) {
      let {
        display: TB
      } = BB;
      const {
        selectedLanguage: dB
      } = (0, lB.z)(), VB = (0, pB.useMemo)((() => (0, oB.e)((0, oB.f)(TB).plan.pieces)), [TB, dB.code]);
      return (0, kB.jsxs)("div", {
        className: yB()("Dialogue", {
          DialogueAnimateIn: !1 !== TB.animateIn
        }),
        children: [TB.speakerName && (0, kB.jsx)(YB.e, {
          text: TB.speakerName,
          className: "DialogueSpeaker"
        }), (0, kB.jsx)("p", {
          className: "DialogueLine",
          children: VB.map(((BB, TB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, kB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, TB) => (0, kB.jsx)(uB, {
              piece: BB
            }, TB)))
          }, TB)))
        })]
      })
    }
    const EB = (0, pB.memo)((function() {
      const BB = (0, gB.j)("dialogue");
      return (0, kB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, kB.jsx)(HB, {
          display: BB
        }, DB(BB))
      })
    }))
  },
  35688: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      f: () => DB
    });
    var VB = dB(62),
      yB = dB(2488),
      pB = dB(1317),
      lB = dB(1727),
      JB = dB(35624),
      YB = dB(572),
      gB = dB(933),
      oB = dB.n(gB),
      kB = dB(980);
    const LB = {},
      OB = (0, VB.memo)((function() {
        const BB = (0, yB.b)();
        return (0, pB.e)("damagedByOtherPlayer", (TB => {
          let {
            uT: dB,
            direction: VB
          } = TB;
          const yB = dB || "nonDirectional";
          if (LB[yB]) {
            const TB = LB[yB];
            clearTimeout(TB.timeout), TB.direction = VB, TB.timeout = setTimeout((() => {
              delete LB[yB], BB()
            }), 800)
          } else LB[yB] = {
            direction: VB,
            nS: null,
            timeout: setTimeout((() => {
              delete LB[yB], BB()
            }), 800)
          };
          BB()
        })), (0, lB.c)("kill", (TB => {
          let {
            killer: dB,
            victim: VB
          } = TB;
          const yB = VB.id;
          dB.local && yB && yB in LB && (clearTimeout(LB[yB].timeout), delete LB[yB], BB())
        })), (0, VB.useEffect)((() => {
          const BB = (0, JB.h)("turnDamageIndicators", DB);
          return () => {
            BB();
            for (const BB in LB) clearTimeout(LB[BB].timeout), delete LB[BB]
          }
        }), []), (0, kB.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(LB).map((BB => {
            let [TB, dB] = BB;
            const VB = (0, YB.M)(dB.direction);
            return (0, kB.jsx)("div", {
              ref: BB => {
                LB[TB] && (LB[TB].nS = BB)
              },
              className: oB()("DamageIndicator", {
                DamageIndicatorFullCircle: VB
              })
            }, TB)
          }))
        })
      }));

    function DB(BB) {
      for (const TB in LB) {
        const {
          direction: dB,
          nS: VB
        } = LB[TB];
        if ((0, YB.M)(dB)) continue;
        const yB = dB - BB;
        VB.style.rotate = `${yB}rad`
      }
    }
  },
  35551: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => HB
    });
    var VB = dB(62),
      yB = dB(72),
      pB = dB(1078),
      lB = dB(933),
      JB = dB.n(lB),
      YB = dB(1596),
      gB = dB(946),
      oB = dB(1165),
      kB = dB(1353),
      LB = dB(1546),
      OB = dB(1347),
      DB = dB(980);
    const uB = 14;

    function HB(BB) {
      let {
        className: TB,
        triggerElementRef: dB,
        options: lB
      } = BB;
      const {
        t: HB
      } = (0, pB.z)(), [EB, vB] = (0, VB.useState)(!1), [mB, iB] = (0, VB.useState)({
        x: 0,
        y: 0
      }), NB = (0, VB.useRef)(null);
      (0, VB.useEffect)((() => {
        let BB = null;
        const TB = TB => {
            BB = {
              x: TB.clientX,
              y: TB.clientY
            }
          },
          VB = TB => {
            if (null === BB || !(0, OB.d)(BB, TB)) return;
            BB = null;
            const dB = uB * (0, YB.getRemInPx)();
            iB({
              x: Math.min(TB.clientX, window.innerWidth - dB - 5),
              y: TB.clientY
            }), vB((BB => !BB))
          },
          yB = BB => {
            var TB;
            null !== (TB = NB.current) && void 0 !== TB && TB.contains(BB.relatedTarget) || vB(!1)
          },
          pB = dB.current;
        return pB.addEventListener("pointerdown", TB), pB.addEventListener("pointerup", VB), pB.addEventListener("mouseleave", yB), () => {
          pB.removeEventListener("pointerdown", TB), pB.removeEventListener("pointerup", VB), pB.removeEventListener("mouseleave", yB)
        }
      }), [dB]), (0, VB.useEffect)((() => {
        if (EB) return (0, LB.c)("pointerdown", (BB => {
          !NB.current || NB.current.contains(BB.target) || dB.current.contains(BB.target) || vB(!1)
        }))
      }), [EB, dB]), (0, VB.useLayoutEffect)((() => {
        if (!EB || !NB.current) return;
        const BB = NB.current.getBoundingClientRect().height,
          TB = Math.max(5, window.innerHeight - BB - 5);
        mB.y > TB && iB({
          x: mB.x,
          y: TB
        })
      }), [EB, mB]), (0, oB.y)("popup", NB, (() => {
        vB(!1)
      }), EB);
      const tB = lB.filter((BB => !1 !== BB.show));
      return EB && 0 !== tB.length ? (0, yB.createPortal)((0, DB.jsx)("div", {
        ref: NB,
        className: JB()("FloatingActions", {
          [TB]: TB
        }),
        style: {
          width: `${uB}rem`,
          top: mB.y,
          left: mB.x
        },
        children: tB.map((BB => {
          let {
            icon: TB,
            text: dB,
            onPointerDown: VB,
            analyticsClick: yB
          } = BB;
          return (0, DB.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: BB => {
              void 0 !== yB && (0, kB.f)(yB), VB(BB), vB(!1), BB.stopPropagation()
            },
            children: [(0, DB.jsx)(gB.e, {
              name: TB
            }), (0, DB.jsx)("div", {
              children: HB(dB)
            })]
          }, dB)
        }))
      }), function() {
        var BB;
        return null !== (BB = document.querySelector(".WholeAppWrapperInner")) && void 0 !== BB ? BB : document.body
      }()) : null
    }
  },
  35706: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => Qp
    });
    var VB = dB(35589),
      yB = dB(62),
      pB = dB(1815),
      lB = dB(3942),
      JB = dB(3948),
      YB = dB(2139),
      gB = dB(1679),
      oB = dB(980);

    function kB(BB) {
      let {
        className: TB,
        style: dB,
        vw: VB,
        maxPx: yB,
        children: pB
      } = BB;
      console.assert("number" === typeof VB && "number" === typeof yB, "vw and maxPx passed to Text must be numbers");
      const lB = window.innerWidth * (VB / 100) > yB ? `${yB}px` : `${VB}vw`;
      return (0, oB.jsx)("div", {
        className: TB,
        style: {
          ...dB,
          fontSize: lB
        },
        children: pB
      })
    }
    var LB = dB(35713),
      OB = dB(1324),
      DB = dB(24),
      uB = dB(1708),
      HB = dB(946);

    function EB(BB) {
      let {
        tasks: TB,
        lastDisplayedTasks: dB
      } = BB;
      return (0, oB.jsx)(oB.Fragment, {
        children: Object.keys(TB).map((BB => (0, oB.jsx)(vB, {
          task: TB[BB],
          lastDisplayedAs: dB[BB]
        }, TB[BB].text)))
      })
    }

    function vB(BB) {
      let {
        task: TB,
        lastDisplayedAs: dB
      } = BB;
      const [VB, pB] = (0, yB.useState)(null !== dB && void 0 !== dB && dB.progress ? dB.progress / TB.goal : 0), [lB, JB] = (0, yB.useState)(!1), [YB, gB] = (0, yB.useState)(TB.claimed || !1);
      return (0, yB.useEffect)((() => {
        pB(TB.progress / TB.goal)
      }), [TB.progress, TB.goal]), YB ? null : (0, oB.jsxs)("div", {
        className: "Task",
        children: [(0, oB.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, oB.jsx)(kB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: TB.text
          })
        }), TB.progress < TB.goal ? (0, oB.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== VB ? (0, oB.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * VB + "%"
            }
          }) : null, (0, oB.jsx)("div", {
            className: "TaskProgressText",
            children: `${TB.progress}/${TB.goal}`
          })]
        }) : (0, oB.jsx)(OB.k, {
          className: "ClaimRewardButton",
          onClick: () => {
            JB(!0)
          },
          children: (0, oB.jsx)(kB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), lB ? (0, oB.jsx)(mB, {
          task: TB,
          close: () => {
            TB.claimed = !0, gB(!0), JB(!1)
          }
        }) : null]
      })
    }

    function mB(BB) {
      let {
        task: TB,
        close: dB
      } = BB;
      const [VB, pB] = (0, yB.useState)({}), [lB, JB] = (0, yB.useState)("closed");
      (0, yB.useEffect)((() => {
        let BB;
        return "animStart" === lB && (BB = setTimeout((() => {
          JB("animEnd")
        }), 700)), () => {
          clearTimeout(BB)
        }
      }), [lB]), (0, LB.b)((() => {
        gB.gameBridge.send("completeTask", TB.text)
      }));
      const kB = (0, YB.j)("currencyAmounts");
      return (0, oB.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === lB)
            if (0 === TB.rewards.length) dB(), gB.gameBridge.send("completeTask", TB.text);
            else {
              const BB = {
                ...uB.c.get("currencyAmounts")
              };
              for (const TB in VB) BB[TB] = {
                ...BB[TB],
                amount: BB[TB].amount + VB[TB]
              };
              uB.c.apply({
                currencyAmounts: BB
              }), JB("closed")
            }
          else "closed" === lB && (pB(TB.rewards.pop()), JB("animStart"))
        },
        children: [(0, oB.jsx)("img", {
          className: "Chest",
          alt: "closed" !== lB ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==lB?"open":"closed"}.png`
        }), (0, oB.jsx)("div", {
          className: "Rewards",
          children: "closed" !== lB ? Object.keys(VB).map((BB => {
            const TB = null === kB || void 0 === kB ? void 0 : kB[BB];
            return !TB || TB.hidden ? null : (0, oB.jsxs)("div", {
              className: "Reward",
              children: [(0, oB.jsx)(HB.e, {
                name: TB.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: TB.iconColour
                }
              }), (0, oB.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === lB ? 0 : VB[BB]
              })]
            }, BB)
          })) : null
        }), "animStart" === lB ? (0, oB.jsx)(iB, {}) : null, (0, oB.jsx)("div", {
          className: "ChestsLeft",
          children: TB.rewards.length
        })]
      })
    }

    function iB() {
      const [BB, TB] = (0, yB.useState)(0);
      (0, yB.useEffect)((() => {
        TB(1)
      }), []);
      return (0, oB.jsx)(oB.Fragment, {
        children: Array.from({
          length: 40
        }).map(((TB, dB) => (0, oB.jsx)(HB.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * BB * Math.cos(dB / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * BB * Math.sin(dB / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === BB ? 1 : 0
          }
        }, dB)))
      })
    }
    DB.h.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const BB = new Image,
          TB = new Image;
        BB.src = "/textures/miscImages/Treasure Chest open.png", TB.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var NB = dB(2602),
      tB = dB(1011),
      fB = dB(1657),
      sB = dB(1317),
      MB = dB(279),
      zB = dB(1727),
      wB = dB(1225);

    function UB(BB) {
      var TB, dB;
      let {
        byId: VB,
        localId: yB
      } = BB;
      return null === yB ? null : null !== (TB = null === (dB = VB[yB]) || void 0 === dB ? void 0 : dB.name) && void 0 !== TB ? TB : null
    }

    function FB(BB) {
      let {
        lbStats: TB,
        storedState: dB = {}
      } = BB;
      const {
        userContext: VB
      } = (0, tB.b)(), pB = (0, zB.g)("players", UB), [lB, JB] = (0, yB.useState)(dB.selectedCat || (null === TB || void 0 === TB ? void 0 : TB[0]) || null), [YB, kB] = (0, yB.useState)(dB.selectedTimeframe || "Today"), [LB, OB] = (0, yB.useState)(null);
      (0, yB.useEffect)((() => {
        null === lB && null !== TB && TB.length > 0 && JB(TB[0])
      }), [TB, lB]);
      const [DB, uB] = (0, yB.useState)(dB.seeingTop || !1), [HB, EB] = (0, yB.useState)(!1), vB = (0, yB.useCallback)((() => {
        null !== lB && null !== YB && (gB.gameBridge.send("requestLeaderboard", {
          category: lB.value,
          timeframe: YB,
          seeTop: DB
        }), iB(!0), IB && cB(null))
      }), [lB, YB, dB, DB]);
      (0, yB.useEffect)((() => {
        vB(), dB.selectedCat = lB, dB.selectedTimeframe = YB, dB.seeingTop = DB
      }), [lB, YB, dB, DB, vB]), (0, yB.useEffect)((() => {
        if ((null === LB || void 0 === LB ? void 0 : LB.length) > 0)
          if (DB) DB && EB(null === FB(LB));
          else {
            for (const BB of LB)
              if (1 === BB.place) return void EB(!1);
            EB(!0)
          }
      }), [LB, DB]), (0, sB.e)("leaderboardResponse", (BB => {
        let {
          category: dB,
          timeframe: VB,
          data: yB
        } = BB;
        for (let pB = 0; pB < TB; pB++)
          if (TB[pB].value === dB) {
            JB(TB[pB]);
            break
          } kB(VB), OB(yB), iB(!1)
      }));
      const [mB, iB] = (0, yB.useState)(!0);

      function FB(BB) {
        const TB = UB(gB.gameBridge.latest("players"));
        for (let dB = 0; dB < BB.length; dB++)
          if (BB[dB].name === TB) return BB[dB].place;
        return null
      }
      const [KB, rB] = (0, yB.useState)(!1), [IB, cB] = (0, yB.useState)(null);
      (0, yB.useEffect)((() => {
        if (LB && !KB) {
          const BB = FB(LB);
          BB < (dB.lastSeenPlayerPlace || 0) && cB(dB.lastSeenPlayerPlace - BB), rB(!0)
        }
      }), [LB, dB, KB]), (0, yB.useEffect)((() => () => {
        LB && (dB.lastSeenPlayerPlace = FB(LB))
      }), [LB, dB]);
      const SB = (0, yB.useRef)(null),
        [PB, QB] = (0, yB.useState)(void 0);
      return (0, yB.useEffect)((() => {
        var BB, TB;
        PB !== (null === (BB = SB.current) || void 0 === BB ? void 0 : BB.offsetHeight) && QB(null === (TB = SB.current) || void 0 === TB ? void 0 : TB.offsetHeight)
      })), VB.isLoggedIn() ? (0, oB.jsxs)(oB.Fragment, {
        children: [(0, oB.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, oB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, oB.jsx)(NB.e, {
              options: TB.map((BB => ({
                label: BB.label,
                value: BB.value
              }))),
              value: lB,
              onChange: BB => {
                JB(BB)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, oB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, oB.jsx)(NB.e, {
              options: MB.Mc.map((BB => ({
                value: BB,
                label: BB,
                className: "LBDropdownMenuItem"
              }))),
              value: YB,
              onChange: BB => {
                kB(BB.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), HB ? (0, oB.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              uB(!DB)
            },
            children: DB ? "See Yourself" : "See Top"
          }) : null]
        }), (0, oB.jsx)("div", {
          className: "LBTableWrapper",
          children: mB ? (0, oB.jsx)("div", {
            className: "LoaderContainer",
            children: (0, oB.jsx)(wB.b, {})
          }) : null === IB ? (0, oB.jsx)(oB.Fragment, {
            children: (0, oB.jsxs)("table", {
              className: "LBTable",
              children: [(0, oB.jsx)("thead", {
                className: "LBTableTHead",
                ref: SB,
                children: (0, oB.jsxs)("tr", {
                  children: [(0, oB.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, oB.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, oB.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: lB.label.toUpperCase()
                  })]
                })
              }), (0, oB.jsx)("tbody", {
                children: LB.map((BB => (0, oB.jsxs)("tr", {
                  className: "LBTableTR " + (BB.name === pB ? "LBTableTRYou" : ""),
                  children: [(0, oB.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${BB.place}`
                  }), (0, oB.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, oB.jsx)(fB.e, {
                      text: [{
                        entityName: BB.name
                      }]
                    })
                  }), (0, oB.jsx)("td", {
                    className: "LBTableTD",
                    children: BB.stat
                  })]
                }, BB.name)))
              })]
            })
          }) : (0, oB.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              cB(null)
            },
            children: (0, oB.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, oB.jsx)("div", {
                className: "TriangleUp"
              }), (0, oB.jsx)("div", {
                className: "LBIncreaseText",
                children: `${IB} Place${IB>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, oB.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, oB.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, oB.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var KB = dB(1002),
      rB = dB(95),
      IB = dB(33),
      cB = dB(2898);
    const SB = (0, yB.memo)((function(BB) {
      let {
        show: TB,
        onClose: dB
      } = BB;
      (0, KB.e)();
      const VB = (0, YB.j)("_tasks"),
        pB = (0, YB.j)("_availableLeaderboards"),
        [gB, kB] = (0, yB.useState)({});
      VB && Object.keys(VB).length > 0 && 0 === Object.keys(gB).length && kB(VB);
      const [LB] = (0, yB.useState)({
        tasks: {},
        leaderboard: {}
      }), OB = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!VB && Object.keys(VB).length > 0,
          content: (0, oB.jsx)(EB, {
            tasks: VB,
            lastDisplayedTasks: gB
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === pB || void 0 === pB ? void 0 : pB.length) > 0,
          content: (0, oB.jsx)(FB, {
            lbStats: pB,
            storedState: LB.leaderboard
          })
        }
      };

      function DB() {
        for (const BB in OB)
          if (OB[BB].getIsDefined()) return BB;
        return null
      }
      const [uB, HB] = (0, yB.useState)(DB());

      function vB() {
        kB({
          ...VB
        }), dB()
      }(0, yB.useEffect)((() => {
        uB || HB(DB())
      }), [DB()]), (0, JB.e)(!0, uB && TB), (0, yB.useEffect)((() => {
        TB && !uB && (console.log("CLOSE"), vB())
      }), [TB, uB]);
      const [mB, iB] = (0, yB.useState)(!1);
      return (0, yB.useEffect)((() => {
        TB && uB && !mB && iB(!0)
      }), [TB, mB, uB]), (0, yB.useEffect)((() => {
        !mB && VB && "tasks" !== uB && HB("tasks")
      }), [mB, VB, uB]), (0, oB.jsx)(oB.Fragment, {
        children: uB ? (0, oB.jsx)(cB.c, {
          className: "RetentionFeaturesWrapper",
          show: TB,
          children: (0, oB.jsxs)(lB.b, {
            close: vB,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, oB.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, oB.jsx)(QB, {}), (0, oB.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, oB.jsx)(PB, {
                  setCategory: HB,
                  menuCategories: OB,
                  selectedCat: uB
                }), (0, oB.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: OB[uB].content
                })]
              })]
            }), (0, oB.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: rB.featureFlags.useDiscord && (0, oB.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, oB.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, oB.jsx)(RB, {
                    tasks: VB
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function PB(BB) {
      let {
        selectedCat: TB,
        setCategory: dB,
        menuCategories: VB
      } = BB;
      return (0, oB.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(VB).map((BB => VB[BB].getIsDefined() ? (0, oB.jsx)("div", {
          className: "MenuHeaderCategory " + (BB === TB ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            dB(BB)
          },
          children: VB[BB].Title
        }, BB) : null))
      })
    }

    function QB() {
      const BB = (0, YB.j)("currencyAmounts");
      return (0, oB.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== BB && void 0 !== BB ? BB : {}).map((TB => {
          const dB = BB[TB];
          return dB.hidden ? null : (0, oB.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, oB.jsx)(HB.e, {
              name: dB.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: dB.iconColour
              }
            }), (0, oB.jsx)("div", {
              className: "UiCurrencyAmount",
              children: dB.amount
            })]
          }, TB)
        }))
      })
    }

    function RB(BB) {
      let {
        tasks: TB
      } = BB;
      return (0, oB.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, oB.jsx)(HB.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            IB.j.setItem("DiscordPressed", !0), gB.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in TB && DB.h.yH("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, oB.jsx)(pB.b, {})]
      })
    }
    var aB = dB(21),
      ZB = dB(1507),
      XB = dB(35538),
      WB = dB(8529),
      hB = dB(4027),
      CB = dB(163),
      GB = dB(1096),
      qB = dB(1249),
      xB = dB(2271),
      jB = dB(1078),
      AB = dB(1514),
      bB = dB(2094),
      nB = dB(2088),
      eB = dB(1848),
      BT = dB(1788),
      TT = dB(1139),
      dT = dB(1353),
      VT = dB(3993);

    function yT(BB) {
      const TB = {
        lobbyName: BB,
        answer: null,
        response: VT.e.getSocialSettings(BB)
      };
      return TB.response.then((BB => {
        TB.answer = BB
      })), TB
    }
    const pT = new Map;

    function lT(BB) {
      const [TB] = (0, yB.useState)((() => function(BB) {
        var TB;
        const dB = null !== (TB = pT.get(BB)) && void 0 !== TB ? TB : null;
        return null !== dB && void 0 !== dB && dB.answer && "error" in dB.answer ? null : dB
      }(BB))), [dB, VB] = (0, yB.useState)((() => null !== TB && void 0 !== TB && TB.answer && "settings" in TB.answer ? TB.answer.settings : null)), [pB, lB] = (0, yB.useState)(!0), [JB, YB] = (0, yB.useState)(null !== dB), gB = (0, yB.useRef)(dB);
      gB.current = dB;
      const oB = (0, yB.useRef)(0),
        kB = (0, yB.useRef)(0),
        LB = (0, yB.useRef)(!1),
        OB = (0, yB.useRef)(!0),
        DB = (0, yB.useCallback)((async TB => {
          const dB = ++oB.current,
            yB = await (null !== TB && void 0 !== TB ? TB : VT.e.getSocialSettings(BB));
          OB.current && dB === oB.current && (YB(!0), lB(!1), "error" in yB || VB(yB.settings))
        }), [BB]),
        uB = (0, yB.useCallback)((() => {
          lB(!0), DB()
        }), [DB]);
      (0, yB.useEffect)((() => (OB.current = !0, pT.delete(BB), lB(!0), DB(null === TB || void 0 === TB ? void 0 : TB.response), () => {
        OB.current = !1
      })), [DB, BB, TB]);
      const HB = BB => {
        oB.current++, lB(!1), gB.current = BB, VB(BB)
      };
      return {
        settings: dB,
        loading: pB,
        answered: JB,
        retry: uB,
        change: async function(TB, dB) {
          let {
            quiet: VB = !1
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const yB = gB.current;
          if (null === yB) return !1;
          HB(dB(yB)), kB.current > 0 && (LB.current = !0), kB.current++;
          const pB = await VT.e.setSocialSettings(BB, TB);
          kB.current--;
          const lB = !("error" in pB);
          if (!OB.current) return lB;
          if (VB);
          else if ("error" in pB) eB.g.showMessage({
            translationKey: pB.error
          });
          else
            for (const BB of pB.notFound) eB.g.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (kB.current > 0) return lB;
          const JB = LB.current;
          return LB.current = !1, !JB && "settings" in pB ? HB(pB.settings) : (JB || HB(yB), DB()), lB
        }
      }
    }

    function JT(BB, TB) {
      const dB = TB.toLowerCase();
      for (const VB of BB)
        if (VB.toLowerCase() === dB) return !0;
      return !1
    }

    function YT(BB) {
      if (null === BB) return !0;
      const {
        visibility: TB
      } = BB;
      return "public" === TB || "unlisted" === TB || "whitelist" === TB && BB.canManage
    }

    function gT(BB, TB, dB) {
      if (dB) {
        const dB = TB.filter((TB => !JT(BB.whitelist, TB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...dB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !JT(TB, BB)))
      }
    }
    var oT = dB(2296);

    function kT(BB) {
      let {
        worldCode: TB,
        message: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), {
        isTouchScreen: pB
      } = (0, aB.m)(["isTouchScreen"]), lB = rB.featureFlags.canUseInviteLinks, JB = (0, WB.g)(lB && null === dB), [YB, gB] = (0, oT.k)(), kB = (0, yB.useRef)(null);
      if (null !== dB) return (0, oB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, oB.jsx)(HB.e, {
          name: "lock"
        }), (0, oB.jsx)("span", {
          children: dB
        })]
      });
      const LB = lB ? JB : TB,
        DB = pB && lB && (0, oT.e)();
      return (0, oB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!lB && (0, oB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: VB("worldSocial:worldCode")
        }), (0, oB.jsx)("input", {
          ref: kB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== LB && void 0 !== LB ? LB : "",
          "aria-label": VB(lB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, oB.jsxs)(OB.d, {
          className: "WorldSocialCopy",
          disabled: null === LB,
          onClick: () => {
            null !== LB && (0, oT.h)(LB, {
              useShareSheet: DB,
              onOutcome: BB => {
                if ((0, dT.f)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || lB ? BB : "code"
                  }), "copied" === BB) gB();
                else if ("failed" === BB) {
                  var TB;
                  null === (TB = kB.current) || void 0 === TB || TB.focus(), eB.g.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, oB.jsx)(HB.e, {
            name: YB ? "check" : DB ? "up-from-bracket" : "copy"
          }), " ", VB(YB ? "general:copied" : DB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
    var LT = dB(933),
      OT = dB.n(LT);
    const DT = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      uT = ["unlisted", "public", "whitelist", "private"];

    function HT(BB) {
      let {
        visibility: TB,
        onPick: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), pB = (0, yB.useRef)([]);
      return (0, oB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": VB("worldSocial:whoCanJoin"),
        children: uT.map(((BB, yB) => {
          const lB = BB === TB;
          return (0, oB.jsxs)("button", {
            ref: BB => {
              pB.current[yB] = BB
            },
            type: "button",
            className: OT()("WorldSocialTile", {
              WorldSocialTileSelected: lB
            }),
            "aria-pressed": lB,
            tabIndex: lB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, TB) => {
                const dB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var VB;
                0 !== dB && (BB.preventDefault(), null === (VB = pB.current[(TB + dB + uT.length) % uT.length]) || void 0 === VB || VB.focus())
              })(BB, yB)
            },
            onClick: () => {
              dB(BB)
            },
            children: [(0, oB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, oB.jsx)(HB.e, {
                name: DT[BB]
              })
            }), (0, oB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, oB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: VB(`worldSocial:${BB}`)
              }), (0, oB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: VB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
    var ET = dB(554),
      vT = dB(2264),
      mT = dB(2208),
      iT = dB(3821);

    function NT(BB, TB) {
      var dB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== TB && void 0 !== TB ? TB : {},
        nameColour: null !== (dB = null === TB || void 0 === TB ? void 0 : TB.nameColour) && void 0 !== dB ? dB : ET.d,
        location: {
          status: "offline"
        }
      }
    }

    function tT(BB) {
      let {
        player: TB,
        isFriend: dB = !1,
        status: VB,
        showLocation: yB = void 0 === VB,
        dL: pB,
        onSendFriendRequest: lB,
        actions: JB,
        zIndex: YB
      } = BB;
      const {
        t: gB
      } = (0, jB.z)();
      let kB, LB = VB;
      return null !== pB && void 0 !== pB && pB.on && (LB = (0, oB.jsxs)(oB.Fragment, {
        children: [null !== VB && void 0 !== VB ? VB : (0, oB.jsx)(mT.e, {
          socialPreview: TB
        }), (0, oB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", gB("worldSocial:canJoin")]
        })]
      })), (JB || pB) && (kB = (0, oB.jsxs)(oB.Fragment, {
        children: [JB, pB && (0, oB.jsx)("label", {
          className: "WorldSocialTick",
          children: (0, oB.jsx)(iT.b, {
            checked: pB.on,
            disabled: !1,
            ariaLabel: gB("worldSocial:letJoin", {
              playerName: TB.name
            }),
            onChange: BB => {
              pB.onChange(BB.target.checked)
            }
          })
        })]
      })), (0, oB.jsx)(vT.g, {
        playerSocialPreview: TB,
        isFriend: dB,
        hideFriendBadge: !0,
        onFriendRemoved: dB ? BB => {
          AB.e.removeFriendFromState(BB)
        } : void 0,
        status: LB,
        showLocation: yB,
        onSendFriendRequest: lB,
        opensProfileCard: !1,
        zIndex: YB,
        children: kB
      })
    }

    function fT(BB) {
      let {
        row: TB,
        dL: dB,
        canInvite: VB,
        invited: yB,
        onInvite: pB,
        zIndex: lB
      } = BB;
      const {
        t: JB
      } = (0, jB.z)(), YB = "online" === TB.place ? OB.d : OB.g;
      return (0, oB.jsx)(tT, {
        player: TB.friend,
        isFriend: !0,
        status: "here" === TB.place ? JB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        dL: dB,
        zIndex: lB,
        actions: VB && (0, oB.jsx)(YB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: yB,
          onClick: pB,
          ariaLabel: `${JB("worldSocial:invite")} ${TB.friend.name}`,
          children: JB(yB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
    var sT = dB(2338);

    function MT(BB) {
      let {
        playersHere: TB,
        exclude: dB,
        Om: VB
      } = BB;
      const {
        t: pB
      } = (0, jB.z)(), lB = (0, sT.o)(sT.i), [JB, YB] = (0, yB.useState)([]), gB = [], kB = (BB, TB) => {
        const VB = [...dB, ...gB.map((BB => BB.player.name))];
        gB.length < 3 && !JT(VB, BB.name) && gB.push({
          player: BB,
          status: TB
        })
      };
      for (const yB of TB) kB(NT(yB.name, yB.cosmetics, yB.ranks), pB("worldSocial:inThisWorld"));
      if ("loaded" === lB.state.status)
        for (const yB of lB.state.recentPlayers) yB.preview.name && !yB.preview.isError && kB({
          ...yB.preview,
          location: {
            status: "offline"
          }
        }, pB("worldSocial:playedWithYou"));
      const LB = BB => {
        YB((TB => [...TB, BB])), VB(BB).finally((() => {
          YB((TB => TB.filter((TB => TB !== BB))))
        }))
      };
      return (0, oB.jsx)(oB.Fragment, {
        children: gB.map(((BB, TB) => {
          let {
            player: dB,
            status: VB
          } = BB;
          return (0, oB.jsx)(tT, {
            zIndex: gB.length - TB,
            player: dB,
            status: VB,
            onSendFriendRequest: () => {
              LB(dB.name)
            },
            actions: (0, oB.jsx)(qB.h, {
              tooltipInner: (0, oB.jsx)(oB.Fragment, {
                children: pB("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, oB.jsx)(OB.d, {
                className: "FriendRequestButton",
                disabled: JB.includes(dB.name),
                ariaLabel: `${pB("recentPlayers:addFriend")} ${dB.name}`,
                onClick: () => {
                  LB(dB.name)
                },
                children: (0, oB.jsx)(HB.e, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${dB.name}`)
        }))
      })
    }
    var zT = dB(1555);

    function wT(BB) {
      let {
        Om: TB
      } = BB;
      const {
        t: dB
      } = (0, jB.z)(), VB = (0, yB.useRef)(null), [pB, lB] = (0, yB.useState)(""), [JB, YB] = (0, yB.useState)(!1), gB = () => {
        const BB = pB.trim();
        "" === BB || JB || (YB(!0), TB(BB).then((BB => {
          BB && VB.current && (VB.current.value = "", lB(""))
        })).finally((() => {
          YB(!1)
        })))
      };
      return (0, oB.jsxs)("div", {
        className: "WorldSocialAddFriend",
        onKeyDown: BB => {
          BB.target === VB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, oB.jsx)(zT.e, {
          className: "WorldSocialAddFriendInput",
          domRef: VB,
          maxLength: 32,
          placeholderText: dB("worldSocial:addFriendPlaceholder"),
          ariaLabel: dB("worldSocial:addFriendPlaceholder"),
          stopPropagation: !1,
          onValueChange: BB => {
            lB(BB)
          },
          onEnter: gB
        }), (0, oB.jsxs)(OB.d, {
          className: "WorldSocialAddFriendButton SmallTextLight",
          disabled: JB || "" === pB.trim(),
          onClick: gB,
          children: [(0, oB.jsx)(HB.e, {
            name: "user-plus"
          }), " ", dB("socialBar:sendRequest")]
        })]
      })
    }
    const UT = new Map;

    function FT(BB) {
      const TB = UT.get(BB);
      if (!TB) return [];
      const dB = Date.now();
      for (const [VB, yB] of TB) dB - yB >= CB.l && TB.delete(VB);
      return [...TB.keys()]
    }
    var KT = dB(1105),
      rT = dB(1385),
      IT = dB(4025),
      cT = dB(127),
      ST = dB(4011);
    const PT = ["auto", "auto_existing"];

    function QT(BB) {
      return PT.includes(BB)
    }

    function RT(BB, TB) {
      const dB = (0, KT.xb)(BB);
      return null !== TB && (0, KT.xb)(TB) === dB || (0, ST.c)().some((BB => (0, KT.xb)(BB.name) === dB))
    }
    const aT = new Set;

    function ZT(BB) {
      return `worldSocialSeen:${BB}`
    }

    function XT(BB) {
      return !BB || aT.has(BB) || !0 === IB.j.getItem(ZT(BB))
    }

    function WT(BB) {
      BB && !aT.has(BB) && (aT.add(BB), IB.j.setItem(ZT(BB), !0))
    }

    function hT(BB) {
      let {
        show: TB,
        onClose: dB,
        opener: VB
      } = BB;
      const {
        lobbyName: pB,
        shownLobbyName: JB
      } = (0, zB.i)("connectedGame");
      return (0, yB.useEffect)((() => {
        TB && (0, dT.f)({
          id: "world_social.open",
          value: VB
        })
      }), [TB]), (0, oB.jsx)(lB.b, {
        show: TB && null !== pB,
        close: dB,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== VB,
        children: TB && null !== pB && (0, oB.jsx)(CT, {
          lobbyName: pB,
          worldCode: null !== JB && void 0 !== JB ? JB : pB,
          onClose: dB
        }, pB)
      })
    }

    function CT(BB) {
      var TB;
      let {
        lobbyName: dB,
        worldCode: VB,
        onClose: pB
      } = BB;
      const {
        t: lB
      } = (0, jB.z)(), JB = (0, yB.useRef)(null), {
        settings: YB,
        loading: gB,
        answered: kB,
        change: LB,
        retry: DB
      } = lT(dB), uB = (0, AB.k)(), EB = (0, zB.i)("players"), vB = (0, zB.i)("hiddenPlayerNames"), [mB, iB] = (0, yB.useState)([]), [NB, fB] = (0, yB.useState)([]), [sB, MB] = (0, yB.useState)(!1), UB = (0, yB.useMemo)((() => {
        var BB, TB;
        const dB = null === EB.localId ? null : null !== (BB = null === (TB = EB.byId[EB.localId]) || void 0 === TB ? void 0 : TB.name) && void 0 !== BB ? BB : null;
        return EB.ids.flatMap((BB => {
          const TB = EB.byId[BB];
          return null !== TB && void 0 !== TB && TB.name && TB.name !== dB ? [{
            name: TB.name,
            cosmetics: TB.cosmetics,
            ranks: TB.ranks
          }] : []
        }))
      }), [EB]), FB = (0, yB.useMemo)((() => function(BB, TB, dB) {
        const VB = [],
          yB = [],
          pB = [];
        for (const lB of BB) !lB.isError && lB.name && ("inGame" === lB.location.status && lB.location.inLobbyName === TB || JT(dB, lB.name) ? yB.push({
          friend: lB,
          place: "here"
        }) : "offline" === lB.location.status ? pB.push({
          friend: lB,
          place: "offline"
        }) : VB.push({
          friend: lB,
          place: "online"
        }));
        return [...VB, ...yB, ...pB]
      }(uB.friends, dB, UB.map((BB => BB.name)))), [uB.friends, dB, UB]), KB = rB.featureFlags.canSeeRealPlayerNames ? UB.filter((BB => null === (0, TT.d)(BB.name, vB))) : [], IB = null !== YB && void 0 !== YB && YB.canManage ? YB : null, cB = null !== IB, SB = null !== (TB = null === YB || void 0 === YB ? void 0 : YB.visibility) && void 0 !== TB ? TB : null, PB = "whitelist" === (null === IB || void 0 === IB ? void 0 : IB.visibility), QB = "private" === SB || "whitelist" === SB && !cB, {
        userContext: RB
      } = (0, tB.b)();
      (0, yB.useEffect)((() => {
        cB && RT(dB, RB.getPersonalWorldLobbyName()) && WT(RB.whamm)
      }), [cB, dB, RB]);
      const aB = QB ? lB("whitelist" === SB ? "socialBar:inviteWorldManagersOnly" : cB ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        ZB = null === aB;
      (0, yB.useEffect)((() => QB ? void 0 : eB.g.quietFriendAdded()), [QB]), (0, yB.useEffect)((() => eB.g.quietFriendRequests()), []);
      const WB = (0, yB.useRef)(!1);
      (0, yB.useEffect)((() => {
        const BB = JB.current,
          TB = !WB.current;
        WB.current = !0;
        const dB = null === document.activeElement || document.activeElement === document.body;
        null !== BB && void 0 !== BB && BB.contains(document.activeElement) || !TB && !dB || (0, XB.f)() || null === BB || void 0 === BB || BB.focus({
          preventScroll: !0
        })
      }), [ZB]), (0, yB.useEffect)((() => {
        const BB = BB => {
          "Escape" !== BB.key || null !== document.activeElement && document.activeElement !== document.body || pB()
        };
        return document.addEventListener("keydown", BB), () => {
          document.removeEventListener("keydown", BB)
        }
      }), [pB]);
      const VT = null === YB && !kB,
        yT = (gB || uB.loading) && 0 === uB.friends.length,
        pT = uB.friends.flatMap((BB => BB.name ? [BB.name] : [])),
        oT = mB.filter((BB => !JT(pT, BB))),
        LT = FB.length + 3,
        OT = oT.length + LT,
        DT = sB ? uB.requests : uB.requests.slice(0, 1),
        uT = async function(BB) {
          let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const dB of function(BB, TB) {
              const dB = [];
              for (let VB = 0; VB < BB.length; VB += TB) dB.push(BB.slice(VB, VB + TB));
              return dB
            }(BB, hB.y)) {
            if (!await LB({
                whitelistAdd: dB
              }, (BB => gT(BB, dB, !0)), {
                quiet: TB
              })) return !1
          }
          return !0
        }, ET = async BB => {
          if (BB === SB) return;
          (0, dT.f)({
            id: "world_social.set_mode",
            value: BB
          });
          const TB = [...FT(dB), ...NB],
            VB = "whitelist" === BB && YB ? function(BB, TB, dB) {
              const VB = [],
                yB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
              for (const pB of [...yB, ...TB]) JT(VB, pB) || JT(dB, pB) || VB.push(pB);
              return VB
            }(FB, TB, YB.whitelist) : [];
          await LB({
            setVisibility: BB
          }, (TB => ({
            ...TB,
            visibility: BB
          }))) && await uT(VB)
        }, vT = BB => {
          if (PB && IB) return {
            on: JT(IB.whitelist, BB),
            onChange: TB => {
              (0, dT.f)({
                id: "world_social.whitelist_toggle",
                value: TB ? "on" : "off"
              }), LB(TB ? {
                whitelistAdd: [BB]
              } : {
                whitelistRemove: BB
              }, (dB => gT(dB, [BB], TB)))
            }
          }
        }, mT = async BB => {
          (0, dT.f)({
            id: "world_social.invite",
            value: "friend"
          });
          const TB = () => {
            fB((TB => TB.filter((TB => TB !== BB))))
          };
          fB((TB => [...TB, BB]));
          const VB = function(BB, TB) {
            return null === BB || void 0 === BB || !BB.canManage || JT(BB.whitelist, TB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
          }(YB, BB);
          if ("none" !== VB) {
            const dB = uT([BB], "quiet" === VB);
            if ("required" === VB && !await dB) return void TB()
          }
          await (0, bB.j)(BB, "game", {
            announceSent: !1,
            source: "world_social"
          }) ? (! function(BB, TB) {
            var dB;
            const VB = null !== (dB = UT.get(BB)) && void 0 !== dB ? dB : new Map;
            VB.set(TB, Date.now()), UT.set(BB, VB)
          }(dB, BB), setTimeout(TB, CB.m)) : TB()
        }, iT = async (BB, TB) => {
          (0, dT.f)({
            id: "world_social.add_friend",
            value: TB
          });
          const dB = await (0, nB.f)(BB, "world_social");
          return (0, nB.b)(dB, BB, {
            announceSent: !1
          }), "failed" !== dB.kind && ("sent" === dB.kind && iB((TB => JT(TB, BB) ? TB : [...TB, BB])), PB && await uT([BB]), !0)
        };
      return (0, oB.jsxs)("div", {
        ref: JB,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && " " === BB.key && BB.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, oB.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, oB.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: lB("worldSocial:title")
          }), (0, oB.jsx)(OB.i, {
            className: "WorldSocialClose",
            onClick: pB
          })]
        }), VT && (0, oB.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, oB.jsx)(wB.b, {})
        }), !VT && (0, oB.jsxs)(oB.Fragment, {
          children: [(0, oB.jsx)(kT, {
            worldCode: VB,
            message: aB
          }), null === YB && !gB && (0, oB.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: DB,
            children: lB("worldSocial:loadFailed")
          }), cB && null !== SB && (0, oB.jsx)(HT, {
            visibility: SB,
            onPick: BB => {
              ET(BB)
            }
          }), uB.requests.length > 0 && (0, oB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, oB.jsx)(xB.e, {
              label: (0, oB.jsxs)(oB.Fragment, {
                children: [(0, oB.jsx)(HB.e, {
                  name: BT.h
                }), " ", lB("socialBar:requests")]
              }),
              meta: (0, oB.jsxs)(oB.Fragment, {
                children: [uB.requests.length, uB.requests.length === GB.p && (0, oB.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: lB("socialBar:limitReached")
                }), !sB && uB.requests.length > 1 && (0, oB.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    MB(!0)
                  },
                  children: lB("worldSocial:moreRequests", {
                    count: uB.requests.length - 1
                  })
                })]
              })
            }), (0, oB.jsx)("div", {
              className: "PlayerRows",
              children: DT.map(((BB, TB) => (0, oB.jsx)(tT, {
                zIndex: DT.length - TB,
                player: BB,
                actions: (0, oB.jsxs)(oB.Fragment, {
                  children: [(0, oB.jsx)(qB.h, {
                    tooltipInner: (0, oB.jsx)(oB.Fragment, {
                      children: lB("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, oB.jsx)(OB.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${lB("general:accept")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nB.d)(BB.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, oB.jsx)(HB.e, {
                        name: "check"
                      })
                    })
                  }), (0, oB.jsx)(qB.h, {
                    tooltipInner: (0, oB.jsx)(oB.Fragment, {
                      children: lB("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, oB.jsx)(OB.g, {
                      className: "FriendRequestButton",
                      ariaLabel: `${lB("general:decline")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, nB.d)(BB.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, oB.jsx)(HB.e, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${BB.name}`)))
            })]
          }), (0, oB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, oB.jsx)(xB.e, {
              label: (0, oB.jsxs)(oB.Fragment, {
                children: [(0, oB.jsx)(HB.e, {
                  name: BT.e
                }), " ", lB("socialBar:friends")]
              }),
              meta: uB.loaded && !QB ? uB.friends.length : void 0
            }), (0, oB.jsx)(wT, {
              Om: BB => iT(BB, "field")
            }), yT && (0, oB.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, oB.jsx)(wB.b, {})
            }), !yT && (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsxs)("div", {
                className: "PlayerRows",
                children: [oT.map(((BB, TB) => (0, oB.jsx)(tT, {
                  zIndex: OT - TB,
                  player: NT(BB, null),
                  status: lB("worldSocial:requestSent"),
                  dL: vT(BB)
                }, `request:${BB}`))), !QB && FB.map(((BB, TB) => (0, oB.jsx)(fT, {
                  zIndex: LT - TB,
                  row: BB,
                  dL: vT(BB.friend.name),
                  canInvite: YT(YB) && "here" !== BB.place,
                  invited: NB.includes(BB.friend.name),
                  onInvite: () => {
                    mT(BB.friend.name)
                  }
                }, BB.friend.name))), uB.loaded && 0 === uB.friends.length && (0, oB.jsx)(MT, {
                  playersHere: KB,
                  exclude: mB,
                  Om: BB => iT(BB, "suggestion")
                })]
              }), PB && uB.loaded && 0 === uB.friends.length && 0 === oT.length && (0, oB.jsx)("div", {
                className: "WorldSocialEmpty",
                children: lB("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        })]
      })
    }
    var GT = dB(2122),
      qT = dB(2144);

    function xT(BB) {
      let {
        show: TB,
        onClose: dB,
        option: VB
      } = BB;
      const pB = (0, zB.g)("connectedGame", (BB => (0, GT.b)(BB) ? BB.lobbyName : null));
      return function(BB) {
        const {
          gameEntrySource: TB,
          loadingOverlayVisible: dB
        } = (0, aB.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: VB
        } = (0, tB.b)(), pB = (0, zB.i)("localPlayerAlive"), lB = (0, zB.g)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), JB = (0, qT.f)(), YB = (0, yB.useRef)(null), gB = (0, yB.useRef)(null), oB = "worldCreation" === TB, kB = VB.whamm, LB = VB.getPersonalWorldLobbyName();
        (0, yB.useEffect)((() => {
          var TB;
          null !== BB && (null === (TB = gB.current) || void 0 === TB ? void 0 : TB.lobbyName) !== BB && null !== nT(BB, oB, kB, LB) && (gB.current = yT(BB))
        }), [oB, BB, kB, LB]), (0, yB.useEffect)((() => {
          if (null !== BB && (!dB && pB && lB)) return JB.whenShown((() => {
            var TB;
            const dB = YB.current === BB ? null : nT(BB, oB, kB, LB);
            if (null === dB) return;
            const VB = (null === (TB = gB.current) || void 0 === TB ? void 0 : TB.lobbyName) === BB ? gB.current : yT(BB);
            gB.current = null, YB.current = BB,
              function(BB, TB, dB, VB) {
                const {
                  lobbyName: yB
                } = BB, pB = () => {
                  ! function(BB, TB) {
                    if (!Vd()) return void TB(!0);
                    const dB = performance.now() + Td;
                    let VB = 0;
                    const yB = () => {
                      VB = Vd() ? 0 : VB + 1, VB >= 2 ? TB(!0) : !dd(BB) || performance.now() > dB ? TB(!1) : setTimeout(yB, Bd)
                    };
                    setTimeout(yB, Bd)
                  }(yB, (pB => {
                    VB();
                    const lB = "auto_existing" === TB && XT(dB);
                    pB && dd(yB) && !AT(yB) && !lB && (eT(BB) ? bT(yB) : (bT(yB), WT(dB), function(BB) {
                      const TB = cT.e.world_social_popup_v1;
                      return (0, cT.p)("world_social_popup_v1"), (0, dT.f)({
                        id: "world_social.auto_open",
                        value: `${TB}:${(0,IT.d)()}:${BB}`
                      }), (0, rT.flushClientAnalyticsEvents)(), "auto_open" === TB
                    }(TB) && (! function(BB) {
                      pT.set(BB.lobbyName, BB)
                    }(BB), DB.h.yH("toggleMenu", `inviteLink|${TB}`), "inviteLink" !== aB.d.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === TB && !eT(BB)) return void pB();
                BB.response.then((BB => {
                  if (!("error" in BB)) return BB.settings.canManage ? void pB() : (bT(yB), void VB());
                  VB()
                }))
              }(VB, dB, kB, (() => {
                YB.current === BB && (YB.current = null)
              }))
          }))
        }), [JB, oB, dB, BB, pB, lB, kB, LB])
      }(pB), (0, yB.useEffect)((() => {
        TB && null !== pB && bT(pB)
      }), [TB, pB]), null !== pB ? (0, oB.jsx)(hT, {
        show: TB,
        onClose: dB,
        opener: QT(VB) ? VB : "icon"
      }) : (0, oB.jsx)(WB.c, {
        show: TB,
        onClose: dB
      })
    }
    const jT = new Set;

    function AT(BB) {
      return jT.has(BB) || !!IB.m.getItem(`worldSocialShown:${BB}`)
    }

    function bT(BB) {
      jT.add(BB), IB.m.setItem(`worldSocialShown:${BB}`, !0)
    }

    function nT(BB, TB, dB, VB) {
      return AT(BB) ? null : function(BB) {
        let {
          justMade: TB,
          playerId: dB,
          lobbyName: VB,
          personalWorld: yB
        } = BB;
        return TB ? "auto" : !XT(dB) && RT(VB, yB) ? "auto_existing" : null
      }({
        justMade: TB,
        playerId: dB,
        lobbyName: BB,
        personalWorld: VB
      })
    }

    function eT(BB) {
      let {
        answer: TB
      } = BB;
      return null !== TB && "settings" in TB && !TB.settings.canManage
    }
    const Bd = 500,
      Td = 3e4;

    function dd(BB) {
      return "inGame" === aB.d.get("gameState") && gB.gameBridge.latest("connectedGame").lobbyName === BB
    }

    function Vd() {
      return (0, XB.f)() || aB.d.get("loadingOverlayVisible") || (0, ZB.l)()
    }
    var yd = dB(35721),
      pd = dB(2623),
      ld = dB(1738),
      Jd = dB(2614),
      Yd = dB(2664);

    function gd(BB) {
      const [TB, dB] = (0, yB.useState)((() => null !== (0, Yd.n)()));
      return (0, yB.useEffect)((() => {
        if (!TB) return BB && (0, Yd.u)(), (0, Yd.q)((() => {
          dB(!0)
        }))
      }), [TB, BB]), (BB, dB) => TB || Jd.b.overridesTexture(BB) ? Jd.b.getTexture(BB, dB).url : void 0
    }
    const od = (BB, TB) => {
        (0, yB.useEffect)((() => {
          setTimeout((() => {
            BB && BB.current && BB.current.focus()
          }), 1)
        }), [TB])
      },
      kd = (0, yB.memo)((function(BB) {
        let {
          isInputActive: TB,
          onClose: dB,
          onChange: VB,
          textAreaRef: yB,
          fontSize: pB,
          lineHeight: lB,
          currText: JB
        } = BB;
        const YB = gd(!0)("board_full", pd.e.BLOCK);
        return (0, oB.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, oB.jsx)("img", {
            src: YB,
            alt: "Board",
            className: "WriteOnBoardImg",
            style: {
              visibility: void 0 === YB ? "hidden" : void 0
            }
          }), (0, oB.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: JB,
            ref: yB,
            style: {
              fontSize: `${pB}rem`,
              lineHeight: `${lB}rem`
            },
            onKeyDown: BB => {
              var TB;
              "Escape" !== BB.key && (BB.stopPropagation(), "Tab" === BB.key && function(BB) {
                BB.preventDefault();
                const TB = BB.target,
                  {
                    value: dB
                  } = TB;
                let VB = TB.selectionStart,
                  yB = TB.selectionEnd,
                  pB = dB.slice(VB, yB);
                if (!pB.includes("\n") && !BB.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; VB > 0 && "\n" !== dB[VB - 1];) VB--;
                const lB = "\n" === dB[yB - 1];
                lB && yB--;
                pB = dB.slice(VB, yB);
                const JB = pB.split("\n").map((TB => BB.shiftKey ? TB.replace(/^\t/, "") : "\t" + TB)).join("\n");
                if (BB.shiftKey && dB.slice(VB, yB) === JB) return;
                let {
                  selectionStart: YB
                } = TB;
                TB.setSelectionRange(VB, yB), YB > VB && (!BB.shiftKey || "\t" === pB[0]) && (YB += BB.shiftKey ? -1 : 1);
                yB = VB + JB.length + (lB ? 1 : 0), document.execCommand("insertText", !1, JB), TB.setSelectionRange(YB, yB)
              }(BB), /^F\d+$/i.test(BB.code) && null !== (TB = ld.r.OpenCodeEditor) && void 0 !== TB && TB.includes(BB.code) && dB())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: VB
          })]
        })
      }));

    function Ld(BB) {
      return 1.3 * BB
    }
    var Od = dB(1564);
    const Dd = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(null), [YB, kB] = (0, yB.useState)(""), [LB, DB] = (0, yB.useState)(0), [uB, HB] = (0, yB.useState)(null), [EB, vB] = (0, yB.useState)({
          text: "",
          textSize: 0
        }), mB = (BB, TB) => uB ? (0, yd.l)(BB, TB, uB.width, uB.height) : (0, yd.e)(BB, TB), iB = BB => {
          kB(mB(YB, BB)), DB(BB), IB.j.setItem("lastBoardTextSize", BB)
        }, NB = () => {
          VB(), uB && YB === EB.text && LB === EB.textSize || gB.gameBridge.send("writeOnBoard", {
            pos: pB,
            text: YB,
            textSize: LB
          })
        };
        (0, zB.c)("boardEditRequested", (BB => {
          var yB, pB;
          if (!rB.featureFlags.canSeePlayerWrittenText) return;
          if (null === BB) return JB(null), void(TB && VB());
          const {
            pos: lB,
            noticeboardSpan: YB,
            text: gB
          } = BB;
          JB(lB), HB(YB), kB(gB);
          const oB = null !== (yB = null !== (pB = BB.textSize) && void 0 !== pB ? pB : IB.j.getItem("lastBoardTextSize")) && void 0 !== yB ? yB : 0;
          DB(oB), vB({
            text: gB,
            textSize: oB
          }), IB.j.setItem("lastBoardTextSize", oB), dB()
        }));
        const tB = (0, yB.useRef)(null);
        od(tB, TB), (0, Od.s)(tB, {
          kind: "sign",
          submit: NB
        });
        const fB = function(BB, TB) {
            const dB = yd.d[BB];
            if (!TB) return dB.uiFontSize;
            const {
              numLines: VB,
              charsPerLine: yB
            } = (0, yd.t)(TB.width, TB.height, BB);
            return dB.uiFontSize * Math.min(dB.charsPerLine / yB, dB.numLines / VB)
          }(LB, uB),
          sB = Ld(fB);
        return (0, oB.jsxs)(lB.b, {
          className: "WriteOnBoardBg",
          close: NB,
          escDoesExit: !0,
          show: TB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, oB.jsx)(kd, {
            isInputActive: () => TB,
            onClose: NB,
            onChange: BB => {
              kB(mB(BB.target.value, LB))
            },
            textAreaRef: tB,
            fontSize: fB,
            lineHeight: sB,
            currText: YB
          }), (0, oB.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, oB.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, oB.jsx)(OB.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                iB(0)
              },
              disabled: 0 === LB,
              children: "Small"
            }), (0, oB.jsx)(OB.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                iB(1)
              },
              disabled: 1 === LB,
              children: "Medium"
            }), (0, oB.jsx)(OB.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                iB(2)
              },
              disabled: 2 === LB,
              children: "Large"
            })]
          })]
        })
      })),
      ud = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(""), YB = () => {
          VB(), gB.gameBridge.send("writeNameTag", pB)
        };
        (0, sB.e)("EditNameTag", (BB => {
          rB.featureFlags.canSeePlayerWrittenText && null !== BB && (JB(BB), dB())
        }));
        const kB = (0, yB.useRef)(null);
        od(kB, TB), (0, Od.s)(kB, {
          kind: "nameTag",
          submit: YB
        });
        const LB = yd.E.nameTag.uiFontSize,
          DB = Ld(LB);
        return (0, oB.jsxs)(lB.b, {
          className: "WriteOnBoardBg",
          close: YB,
          escDoesExit: !0,
          show: TB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, oB.jsx)("div", {
            className: "NameTagTrim",
            children: (0, oB.jsx)(kd, {
              isInputActive: () => TB,
              onClose: YB,
              onChange: BB => {
                const TB = BB.target.value.replaceAll("\n", "");
                JB((0, yd.m)(TB, "nameTag"))
              },
              textAreaRef: kB,
              fontSize: LB,
              lineHeight: DB,
              currText: pB
            })
          }), (0, oB.jsx)(OB.d, {
            onClick: YB,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      Hd = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(""), [YB, kB] = (0, yB.useState)(0), [LB, DB] = (0, yB.useState)(!1), [uB, HB] = (0, yB.useState)(["", "", "", "", "", "", "", "", "", ""]), [EB, vB] = (0, yB.useState)("Title"), [mB, iB] = (0, yB.useState)(!0), [NB, tB] = (0, yB.useState)(!1);
        (0, sB.e)("EditBook", (BB => {
          let {
            pages: TB,
            title: VB,
            isPublished: yB
          } = BB;
          var pB;
          rB.featureFlags.canSeePlayerWrittenText && (null !== TB ? (HB(TB), JB(null !== (pB = TB[0]) && void 0 !== pB ? pB : ""), vB(VB), kB(0), DB(!1), iB(!yB), tB(!1), dB()) : HB(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const fB = (0, yB.useRef)(null),
          MB = (0, yB.useRef)(null);
        od(fB, TB), (0, Od.s)(fB, {
          kind: "book"
        }), (0, Od.s)(MB, {
          kind: "Cg"
        });
        const zB = yd.E.book.uiFontSize,
          wB = Ld(zB),
          UB = gd(TB),
          FB = TB ? UB("book_page", pd.e.ITEM) : void 0,
          KB = () => {
            (mB || NB) && gB.gameBridge.send("writeBook", {
              pages: [...uB],
              title: EB,
              published: !mB && NB
            })
          },
          IB = BB => {
            LB && (uB[YB] = pB, DB(!1)), JB(uB[BB]), kB(BB)
          };
        return (0, oB.jsxs)(lB.b, {
          className: "WriteOnBoardBg",
          close: () => {
            VB(), uB[YB] = pB, KB()
          },
          escDoesExit: !0,
          show: TB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, oB.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, oB.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: EB,
              ref: MB,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${wB}rem`
              },
              onKeyDown: BB => {
                mB && BB.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: BB => {
                let TB = BB.target.value;
                TB = (0, yd.m)(TB, "Cg"), vB(TB)
              },
              readOnly: !mB
            }), (0, oB.jsx)("img", {
              src: FB,
              alt: "book_page",
              className: "WriteOnBookPageImg",
              style: {
                visibility: void 0 === FB ? "hidden" : void 0
              }
            }), (0, oB.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, oB.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: pB,
                ref: fB,
                style: {
                  fontSize: `${zB}rem`,
                  lineHeight: `${wB}rem`
                },
                onKeyDown: BB => {
                  mB && BB.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: BB => {
                  const TB = BB.target.value;
                  JB((0, yd.m)(TB, "book")), DB(!0)
                },
                readOnly: !mB
              })
            })]
          }), (0, oB.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, oB.jsx)(OB.d, {
              disabled: 0 === YB,
              onClick: () => {
                IB(YB - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, oB.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, oB.jsx)(OB.d, {
              disabled: 9 === YB,
              onClick: () => {
                IB(YB + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, oB.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, oB.jsx)(OB.d, {
              onClick: () => {
                iB(!mB), tB(!0)
              },
              className: "BookNavButton",
              children: mB ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var Ed = dB(35601),
      vd = dB(8013),
      md = dB(1275),
      Nd = dB(1666);

    function td(BB) {
      let {
        show: TB,
        buttons: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), pB = (0, yB.useRef)(null);
      return (0, yB.useEffect)((() => {
        var BB, dB;
        const VB = TB ? (0, Ed.A)() : null;
        if (!VB || !(0, md.i)()) return;
        const yB = (0, Ed.k)().findIndex((BB => BB.id === VB));
        (0, vd.r)(null !== (BB = null === (dB = pB.current) || void 0 === dB ? void 0 : dB.children[yB]) && void 0 !== BB ? BB : null)
      }), [TB]), 0 === dB.length ? null : (0, oB.jsx)("div", {
        ref: pB,
        className: "ClientGameInventoryButtons",
        onPointerDown: BB => {
          BB.stopPropagation()
        },
        onPointerUp: BB => {
          BB.stopPropagation()
        },
        children: dB.map((BB => {
          const TB = VB(BB.labelKey);
          return (0, oB.jsxs)(OB.k, {
            className: BB.className,
            disabled: BB.disabled,
            onClick: () => {
              (0, Ed.s)(BB)
            },
            ariaLabel: BB.iconOnly ? TB : void 0,
            title: BB.iconOnly ? TB : void 0,
            children: [BB.icon && (0, oB.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === BB.icon.kind && (0, oB.jsx)(Nd.c, {
                itemName: BB.icon.name,
                amount: 0
              }), "image" === BB.icon.kind && (0, oB.jsx)("img", {
                src: BB.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === BB.icon.kind && (0, oB.jsx)(HB.e, {
                name: BB.icon.name
              })]
            }), !BB.iconOnly && TB]
          }, BB.id)
        }))
      })
    }
    var fd = dB(35725),
      sd = dB(2366),
      Md = dB(8591),
      zd = dB(35530),
      wd = dB(35521);
    let Ud = null;
    window.setShowInventoryAdsOverride = BB => {
      Ud = BB
    };
    const Fd = 24e4;
    var Kd = dB(1675);

    function rd(BB) {
      var TB;
      let {
        draggedInfo: {
          name: dB,
          attributes: VB,
          amount: yB
        },
        toAddRef: pB
      } = BB;
      return (0, oB.jsx)("div", {
        className: "DraggedInvenItem",
        ref: pB,
        children: (0, oB.jsx)(Nd.c, {
          itemName: dB,
          amount: yB,
          enchantmentTier: null === VB || void 0 === VB || null === (TB = VB.customAttributes) || void 0 === TB ? void 0 : TB.enchantmentTier,
          bar: (0, Kd.k)(VB)
        })
      })
    }

    function Id(BB) {
      let {
        className: TB = "",
        displayInfo: dB,
        domRef: VB
      } = BB;
      return (0, oB.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${TB}`,
        ref: VB,
        children: [(0, oB.jsx)(fB.e, {
          text: (0, MB.qb)(dB.name, {
            fontStyle: dB.fontStyle
          })
        }), (0, oB.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, oB.jsx)(fB.e, {
            text: dB.desc
          })
        })]
      })
    }

    function cd(BB) {
      let {
        info: TB,
        draggedInfo: dB
      } = BB;
      const VB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = VB.current,
          {
            left: dB,
            top: yB
          } = function(BB, TB, dB, VB) {
            const yB = VB.left * dB.width / 100 + 4,
              pB = dB.width - VB.right * dB.width / 100 - 4 - TB.width,
              lB = VB.top * dB.height / 100 + 4,
              JB = dB.height - 4 - TB.height;
            return {
              left: Math.max(yB, Math.min(BB.x - TB.width / 2, pB)),
              top: Math.max(lB, Math.min(BB.y - 48 - TB.height, JB))
            }
          }({
            x: TB.initTouchX,
            y: TB.initTouchY
          }, {
            width: BB.offsetWidth,
            height: BB.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, aB.d.get("notchSize"));
        BB.style.left = `${dB}px`, BB.style.top = `${yB}px`
      }), [TB]), (0, oB.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: VB,
        children: [(0, oB.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: dB.amount / TB.maxAmount * 100 + "%"
          }
        }), (0, oB.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [dB.amount, "/", TB.maxAmount]
        })]
      })
    }
    var Sd = dB(184);
    const Pd = (0, yB.memo)((function(BB) {
      let {
        show: TB,
        onOpen: dB,
        onClose: VB
      } = BB;
      const pB = (0, yB.useRef)({
          pos: null
        }),
        [JB, YB] = (0, yB.useState)([0, 0, 0, 0]),
        {
          userContext: kB
        } = (0, tB.b)();
      (0, zB.c)("ironChestOpenRequested", (BB => {
        let {
          pos: TB,
          ownerDbId: VB,
          cachedPasskey: yB
        } = BB;
        if (pB.current.pos = TB, VB !== kB.whamm) return null !== yB ? (YB(yB), void LB(yB)) : void dB();
        LB(JB)
      })), (0, zB.c)("localEffectUpdated", (BB => {
        "Thief" === BB && VB()
      }));
      const LB = BB => {
        const {
          pos: TB
        } = pB.current;
        gB.gameBridge.send("openIronChest", {
          pos: TB,
          jl: BB
        })
      };
      return (0, oB.jsx)(lB.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: VB,
        escDoesExit: !0,
        show: TB,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, oB.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, oB.jsx)(Qd, {
            jl: JB,
            onPasskeyUpdated: YB,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              LB(JB)
            }
          })
        })
      })
    }));

    function Qd(BB) {
      let {
        className: TB = "",
        jl: dB,
        onPasskeyUpdated: VB,
        confirmText: yB,
        onConfirm: pB
      } = BB;
      const {
        t: lB
      } = (0, jB.z)();
      return (0, oB.jsxs)("div", {
        className: `${TB} IronChestPasskeyInput`,
        children: [(0, oB.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: lB("ironChest:passkeyInputTitle")
        }), (0, oB.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(Sd.c.ironChestPasskeyLength).fill(0).map(((BB, TB) => (0, oB.jsx)(Rd, {
            digit: dB[TB],
            onPasskeyDigitUpdated: BB => {
              const yB = [...dB];
              yB[TB] = BB, VB(yB)
            }
          }, TB)))
        }), (0, oB.jsx)(OB.k, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: pB,
          children: lB(yB)
        })]
      })
    }

    function Rd(BB) {
      let {
        digit: TB,
        onPasskeyDigitUpdated: dB
      } = BB;
      return (0, oB.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, oB.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, oB.jsx)(OB.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              dB(MB.e.mod(TB + 1, 10))
            },
            children: (0, oB.jsx)(HB.e, {
              name: "angle-up"
            })
          }), (0, oB.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: TB
          }), (0, oB.jsx)(OB.k, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              dB(MB.e.mod(TB - 1, 10))
            },
            children: (0, oB.jsx)(HB.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var ad = dB(8584),
      Zd = dB(35768),
      Xd = dB(35518);

    function Wd(BB) {
      let {
        specialItemInfo: TB,
        setHovered: dB,
        pointerDown: VB,
        pointerUp: pB,
        enchantingTablePosition: lB,
        enchantingTableBlockName: JB
      } = BB;
      const {
        t: kB
      } = (0, jB.z)(), [LB, DB] = (0, yB.useState)(null), [uB, HB] = (0, yB.useState)(null), EB = (0, YB.j)("auraPerLevel"), vB = Math.floor((0, zB.i)("aura") / EB);
      (0, yB.useEffect)((() => {
        if (!TB) return void DB(null);
        let BB = !0;
        return gB.gameBridge.query("enchantingOffer", {
          slot: TB.idx,
          name: TB.name,
          blockName: JB
        }).then((dB => {
          var VB, yB;
          let {
            perks: pB,
            options: lB
          } = dB;
          if (!BB) return;
          const JB = {
            isEnchantable: pB.length > 0,
            possibleEnchantments: pB,
            options: lB.map((BB => {
              let {
                level: TB,
                odds: dB
              } = BB;
              return {
                level: TB,
                possibilities: Object.fromEntries(dB.map(((BB, TB) => [`Tier ${TB+1}`, BB])))
              }
            })),
            isAlreadyEnchanted: pB.length > 0 && void 0 !== (null === (VB = TB.attributes) || void 0 === VB || null === (yB = VB.customAttributes) || void 0 === yB ? void 0 : yB.enchantmentTier)
          };
          DB(JB), (BB => {
            const TB = BB.options.map((BB => Object.entries(BB.possibilities).map((BB => {
              let [TB, dB] = BB;
              return {
                str: `${TB}: ${dB>0?dB<.01?dB.toPrecision(1):dB.toFixed(2):0}%\n`,
                style: {
                  color: MB.lb[TB]
                }
              }
            }))));
            HB(TB)
          })(JB)
        })), () => {
          BB = !1
        }
      }), [TB, lB, JB]);
      const mB = [];
      for (let yB = 0; yB < Zd.e; yB++) {
        const BB = null === LB || void 0 === LB ? void 0 : LB.options[yB],
          VB = !BB || BB.level > vB;
        mB.push((0, oB.jsx)(OB.d, {
          className: "EnchantmentButton",
          onPointerEnter: BB ? BB => null === dB || void 0 === dB ? void 0 : dB()(!0, {
            name: "",
            desc: uB[yB]
          }, BB) : void 0,
          onPointerLeave: BB ? () => null === dB || void 0 === dB ? void 0 : dB()(!1) : void 0,
          onClick: VB ? void 0 : () => {
            gB.gameBridge.send("enchantItem", {
              slot: TB.idx,
              level: BB.level,
              tablePos: lB
            }), DB(null)
          },
          disabled: VB,
          children: BB ? (0, oB.jsxs)(oB.Fragment, {
            children: [(0, oB.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, oB.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [kB("enchantments:cost"), ": "]
              }), " ", kB("enchantments:levels", {
                level: BB.level
              })]
            }), (0, oB.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, oB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, oB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: kB("enchantments:tier")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [TB, dB] = BB;
                  return 0 === dB ? null : (0, oB.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: MB.lb[TB]
                    },
                    children: TB
                  }, TB)
                }))]
              }), (0, oB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, oB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: kB("enchantments:odds")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [TB, dB] = BB;
                  return 0 === dB ? null : (0, oB.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: MB.lb[TB]
                    },
                    children: [dB > 0 && dB < .1 ? "<0.1" : dB.toFixed(0 < dB && dB < .95 ? 1 : 0), "%"]
                  }, TB)
                }))]
              })]
            })]
          }) : !1 === (null === LB || void 0 === LB ? void 0 : LB.isEnchantable) ? (0, oB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: kB("enchantments:notEnchantable")
          }) : (0, oB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: kB("enchantments:enterItem")
          })
        }, yB))
      }
      return (0, oB.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, oB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: JB
        }), (0, oB.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, oB.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, oB.jsx)(Xd.d, {
              idx: wd.f,
              setHovered: BB => {
                null === dB || void 0 === dB || dB(wd.f)(BB)
              },
              pointerDown: VB,
              pointerUp: pB,
              draggedInfo: null,
              specialItemInfo: TB,
              variation: "Enchanting Table"
            }), LB && LB.possibleEnchantments.length > 0 && (0, oB.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, oB.jsx)("h2", {
                children: "Possible Perks:"
              }), LB.possibleEnchantments.map((BB => (0, oB.jsxs)(yB.Fragment, {
                children: [(0, oB.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, oB.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, oB.jsx)(Nd.c, {
                      itemName: `${BB} Enchantment`,
                      amount: 1
                    })
                  }), (0, oB.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: BB
                  })]
                }), (0, oB.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: kB((0, ad.g)(BB).translationKey)
                })]
              }, BB)))]
            })]
          }), (0, oB.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [LB && LB.isAlreadyEnchanted && (0, oB.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: kB("enchantments:alreadyEnchanted")
            }), mB]
          })]
        })]
      })
    }
    var hd = dB(35772);

    function Cd(BB) {
      var TB;
      let {
        specialItemInfo: dB,
        setSpecialItemInfo: VB,
        setHovered: pB,
        pointerDown: lB,
        pointerUp: JB
      } = BB;
      const {
        t: YB
      } = (0, jB.z)(), kB = (0, zB.g)("inventory", (BB => BB.freeSlots)), [LB, DB] = (0, yB.useState)(null);
      (0, yB.useEffect)((() => {
        if (dB) {
          const BB = (0, hd.e)(dB.name, dB.amount);
          DB({
            salvageable: !!BB,
            produces: BB
          })
        } else DB(null)
      }), [dB, null === dB || void 0 === dB ? void 0 : dB.name, null === dB || void 0 === dB ? void 0 : dB.amount]);
      const uB = !!dB && !(null === LB || void 0 === LB || !LB.salvageable) && !(null !== (TB = LB.produces) && void 0 !== TB && TB.some((BB => {
        let {
          amt: TB
        } = BB;
        return TB < 1
      })));
      return (0, oB.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, oB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: YB("item:salvagingTable")
        }), (0, oB.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, oB.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, oB.jsx)(Xd.d, {
              idx: wd.f,
              setHovered: BB => {
                null === pB || void 0 === pB || pB(wd.f)(BB)
              },
              pointerDown: lB,
              pointerUp: JB,
              draggedInfo: null,
              specialItemInfo: dB,
              variation: "Salvaging Table"
            })
          }), (0, oB.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, oB.jsx)(OB.d, {
              className: "SalvageButton",
              onClick: uB ? () => {
                const {
                  idx: BB,
                  name: TB,
                  amount: yB
                } = dB;
                gB.gameBridge.send("salvageItem", {
                  slot: BB,
                  name: TB,
                  amount: yB
                }) && (DB(null), VB(null))
              } : void 0,
              disabled: !uB,
              children: LB ? LB.salvageable ? LB.produces.some((BB => {
                let {
                  amt: TB
                } = BB;
                return TB < 1
              })) ? (0, oB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oB.jsx)("div", {
                  className: "SalvageText Error",
                  children: YB("salvagingTable:notEnoughResources")
                })
              }) : kB < LB.produces.length ? (0, oB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oB.jsx)("div", {
                  className: "SalvageText Error",
                  children: YB("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, oB.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, oB.jsx)("div", {
                  className: "SalvageText",
                  children: YB("salvagingTable:salvage")
                }), (0, oB.jsx)("div", {
                  className: "SalvageIcons",
                  children: LB.produces.map(((BB, TB) => {
                    let {
                      item: dB,
                      amt: VB
                    } = BB;
                    return (0, oB.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: dB,
                        amount: Math.floor(VB)
                      })
                    }, TB)
                  }))
                })]
              }) : (0, oB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, oB.jsx)("div", {
                  className: "SalvageText Error",
                  children: YB("salvagingTable:unsalvageable")
                })
              }) : (0, oB.jsx)(oB.Fragment, {})
            })
          })]
        })]
      })
    }
    var Gd = dB(670),
      qd = dB(8653),
      xd = dB(2328),
      jd = dB(8018),
      Ad = dB(8016),
      bd = dB(1546),
      nd = dB(1754),
      ed = dB(1286),
      BV = dB(1817);

    function TV(BB, TB, dB) {
      const VB = BB.trim().toLowerCase();
      if ("" === VB) return 0;
      let yB = null;
      for (const pB of TB) {
        const BB = pB.toLowerCase().indexOf(VB);
        if (0 === BB) return 0;
        BB > 0 && (yB = 1)
      }
      if (null !== yB) return yB;
      for (const pB of dB)
        if (pB.toLowerCase().includes(VB)) return 2;
      return null
    }

    function dV(BB) {
      return BB.map((BB => {
        var TB;
        return BB ? {
          name: BB.name,
          amount: null !== (TB = BB.amount) && void 0 !== TB ? TB : 1
        } : null
      }))
    }

    function VV(BB) {
      return BB < 1e3 ? `${BB}` : BB < 1e4 ? Math.floor(BB / 100) / 10 + "k" : `${Math.floor(BB/1e3)}k`
    }
    var yV = dB(35780);
    const pV = OB.d,
      lV = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      JV = () => {
        const BB = (0, ed.i)();
        return BB ? BB.getPadRepeatTiming(lV) : lV
      };

    function YV(BB, TB, dB) {
      var VB, yB;
      const pB = (0, Md.t)(TB, BB);
      let lB = null === (VB = TB[BB]) || void 0 === VB ? void 0 : VB.description;
      if (dB && (null === (yB = (0, yV.e)().get(BB)) || void 0 === yB || !yB.hideIngredients)) {
        lB ? (lB = (0, MB.qb)(lB), lB.push({
          str: "\n"
        })) : lB = [], lB.push({
          str: "\n"
        }), lB.push({
          str: "Can be crafted from:\n"
        });
        for (const BB of dB) "string" === typeof BB && (lB.push({
          icon: BB,
          style: {
            fontSize: "1.5em"
          }
        }), lB.push({
          str: " "
        }), lB.push(...(0, MB.qb)((0, Md.t)(TB, BB))), lB.push({
          str: "\n"
        }))
      }
      return {
        name: pB,
        desc: lB
      }
    }

    function gV(BB) {
      let {
        name: TB,
        wo: dB
      } = BB;
      return `${TB}_${dB}`
    }

    function oV(BB) {
      var TB;
      let {
        onClick: dB,
        itemName: VB,
        recipeId: pB,
        isSelected: lB,
        haveIngredients: JB,
        craftable: YB,
        setHovered: gB,
        padActions: kB,
        marked: LB,
        lock: OB,
        itemInfo: DB
      } = BB;
      const uB = (0, yB.useRef)(null);
      return (0, jd.g)(uB, {
        press: BB => !JB || "secondary" === BB && !YB ? (kB.refuse(), !1) : "primary" === BB ? (kB.choose(), !0) : kB.craft(),
        release: kB.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, oB.jsxs)("div", {
        ref: uB,
        className: OT()("InvenItem", {
          CraftableItemNotEnoughIngredients: !JB && !OB,
          CraftableItemMarked: LB,
          CraftableItemLocked: void 0 !== OB,
          CraftableItemLockedFar: (null !== (TB = null === OB || void 0 === OB ? void 0 : OB.stepsAway) && void 0 !== TB ? TB : 1) > 1
        }),
        "data-recipe-key": pB,
        "data-pad-inventory-default": lB ? "" : void 0,
        onClick: dB,
        style: {
          cursor: lB ? null : "pointer"
        },
        onPointerEnter: BB => {
          null === gB || void 0 === gB || gB(!0, YV(VB, DB)), !lB && (0, bd.o)(BB.nativeEvent) && (0, Ad.f)() && dB()
        },
        onPointerLeave: () => {
          null === gB || void 0 === gB || gB(!1)
        },
        children: [(0, oB.jsx)(Nd.c, {
          itemName: VB,
          amount: 1
        }), LB && (0, oB.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), OB && (0, oB.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, oB.jsx)(HB.e, {
            name: "lock"
          }), (0, oB.jsx)(fB.e, {
            text: OB.tag
          })]
        })]
      })
    }

    function kV(BB) {
      let {
        idx: TB,
        status: dB,
        shownItem: VB,
        dim: pB,
        onHoverStart: lB,
        onHoverEnd: JB,
        onPadBack: YB
      } = BB;
      const gB = (0, yB.useRef)(null);
      (0, jd.g)(gB, {
        press: () => !1,
        back: YB,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const kB = dB.need > 0 ? Math.min(dB.have / dB.need, 1) : 1;
      return (0, oB.jsxs)("div", {
        ref: gB,
        className: OT()("CupTile", {
          Short: dB.missing > 0
        }),
        style: {
          width: pB,
          height: pB
        },
        "data-craft-ingredient": TB,
        onPointerEnter: lB,
        onPointerLeave: JB,
        children: [(0, oB.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${kB})`
          }
        }), (0, oB.jsx)(Nd.c, {
          itemName: VB,
          amount: 0
        }), (0, oB.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [VV(dB.have), "/", VV(dB.need)]
        })]
      })
    }

    function LV(BB) {
      var TB, dB, VB, pB, lB;
      let {
        show: JB,
        recipeItem: {
          name: YB,
          wo: kB,
          requires: LB,
          produces: OB,
          haveIngredients: DB
        },
        detail: uB,
        onCraft: HB,
        setHovered: EB,
        craftButtonRef: vB,
        onPadBack: mB,
        showPadShortcut: iB,
        refusedCount: NB,
        lock: tB,
        itemInfo: sB
      } = BB;
      const {
        t: MB
      } = (0, jB.z)(), zB = null !== uB && !uB.roomForOne, wB = null !== (TB = null === uB || void 0 === uB ? void 0 : uB.craftAllTimes) && void 0 !== TB ? TB : 0, UB = function(BB, TB) {
        return BB.map((BB => {
          let {
            items: dB,
            amt: VB
          } = BB, yB = 0;
          const pB = [];
          for (const lB of dB) {
            const BB = TB(lB);
            yB += BB, BB > 0 && pB.push(lB)
          }
          return 0 === pB.length && pB.push(dB[0]), {
            shownItems: pB,
            need: VB,
            have: yB,
            missing: Math.max(VB - yB, 0)
          }
        }))
      }(LB, (BB => {
        var TB;
        return null !== (TB = null === uB || void 0 === uB ? void 0 : uB.amounts[BB]) && void 0 !== TB ? TB : 0
      }));
      let FB = "4rem",
        KB = 4;
      3 === LB.length || 4 === LB.length ? FB = "3.75rem" : LB.length >= 5 && (FB = "3rem"), 4 === LB.length ? KB = 2 : LB.length <= 6 && (KB = 3);
      const rB = `calc(${KB} * ${FB} + ${KB-1} * 0.4rem + 1px)`,
        IB = (0, yB.useRef)(null),
        cB = (0, yB.useRef)(null);
      (0, yB.useLayoutEffect)((() => {
        IB.current.scrollTop = 0
      }), [YB, kB]);
      const SB = (0, yB.useRef)(NB);
      (0, yB.useEffect)((() => {
        if (NB === SB.current) return;
        SB.current = NB;
        const BB = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const VB of null !== (TB = null === (dB = IB.current) || void 0 === dB ? void 0 : dB.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== TB ? TB : []) {
          var TB, dB;
          VB.animate(BB, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [NB]);
      const PB = (BB, TB, dB) => {
          var VB;
          if ((0, yV.e)().has(YB)) return void(dB && clearInterval(QB.current));
          const yB = null !== (VB = null === uB || void 0 === uB ? void 0 : uB.resultStackable) && void 0 !== VB && VB,
            pB = dV(gB.gameBridge.latest("inventory").player),
            {
              Uo: lB,
              jg: JB,
              amountAddedToSlot: oB
            } = gB.gameBridge.send("craftRecipe", {
              name: YB,
              wo: kB,
              times: TB || BB && yB ? null : 1
            });
          if (lB > 0) {
            const TB = [],
              VB = new Set(LB.flatMap((BB => {
                let {
                  items: TB
                } = BB;
                return TB
              }))),
              lB = function(BB, TB, dB) {
                const VB = [];
                for (let yB = 0; yB < BB.length; yB++) {
                  const pB = BB[yB];
                  if (!pB || !dB.has(pB.name)) continue;
                  const lB = TB[yB],
                    JB = (null === lB || void 0 === lB ? void 0 : lB.name) === pB.name ? lB.amount : 0;
                  JB < pB.amount && VB.push({
                    idx: yB,
                    itemName: pB.name,
                    amount: pB.amount - JB
                  })
                }
                return VB
              }(pB, dV(gB.gameBridge.latest("inventory").player), VB).slice(0, 12),
              kB = dB ? 0 : Math.min(50, 400 / lB.length),
              DB = dB ? 220 : 320;
            for (const BB of lB) {
              var OB;
              const dB = LB.findIndex((TB => {
                  let {
                    items: dB
                  } = TB;
                  return dB.includes(BB.itemName)
                })),
                VB = null === (OB = IB.current) || void 0 === OB ? void 0 : OB.querySelector(`[data-craft-ingredient="${dB}"]`),
                yB = (0, Md.g)(BB.idx);
              VB && yB && TB.push({
                kind: "ingredient",
                itemName: BB.itemName,
                amount: BB.amount,
                jg: BB.idx,
                from: yB,
                to: (0, Md.g)(VB),
                delayMs: Math.round(TB.length * kB),
                durationMs: DB
              })
            }
            let uB;
            if (null !== JB && oB > 0 && cB.current) {
              const BB = TB.length > 0 ? TB[TB.length - 1].delayMs + .6 * DB : 0;
              uB = {
                itemName: YB,
                amount: oB,
                jg: JB,
                from: (0, Md.g)(cB.current),
                delayMs: Math.round(BB)
              }
            }
            HB(uB, BB && !yB ? JB : null, TB), fd.d.play("wood1", .5).rate(1.75)
          }
        },
        QB = (0, yB.useRef)(null);
      (0, yB.useEffect)((() => () => {
        clearInterval(QB.current)
      }), []);
      const RB = (BB, TB) => {
          PB(BB, !1, !1), clearInterval(QB.current), TB && (QB.current = setTimeout((() => {
            QB.current = setInterval((() => {
              PB(BB, !1, !0)
            }), TB.intervalMs)
          }), TB.initialDelayMs))
        },
        aB = () => {
          clearInterval(QB.current)
        },
        ZB = !DB || zB || Boolean(tB),
        XB = (0, yB.useRef)(null),
        WB = null !== (dB = null === (VB = (0, BV.e)()) || void 0 === VB ? void 0 : VB.hideButtonHints) && void 0 !== dB && dB,
        hB = null !== (pB = null === (lB = (0, ed.i)()) || void 0 === lB ? void 0 : lB.getBoundButton("inventorySecondary")) && void 0 !== pB ? pB : null,
        CB = () => !ZB && (PB(!1, !0, !1), !0);
      (0, jd.g)(vB, {
        press: BB => "secondary" === BB ? CB() : !ZB && (RB(!1, JV()), !0),
        release: aB,
        back: mB,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, jd.g)(XB, {
        press: CB,
        back: mB,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [GB, qB] = (0, yB.useState)(0), [xB, AB] = (0, yB.useState)(null);
      (0, yB.useEffect)((() => {
        if (!0 === JB) {
          qB(0);
          const BB = setInterval((() => {
            qB((BB => BB + 1))
          }), 1e3);
          return () => {
            clearInterval(BB)
          }
        }
        return () => {}
      }), [JB]);
      const bB = null === uB || void 0 === uB ? void 0 : uB.ingredientsCraftedFrom,
        nB = (0, yB.useRef)(EB);
      (0, yB.useEffect)((() => {
        nB.current = EB
      }), [EB]);
      const eB = !(null === tB || void 0 === tB || !tB.hideIngredients);
      (0, yB.useEffect)((() => {
        var BB, TB;
        if (!xB) return;
        if (eB) return AB(null), void(null === (TB = nB.current) || void 0 === TB || TB.call(nB, !1));
        const dB = xB[GB % xB.length];
        null === (BB = nB.current) || void 0 === BB || BB.call(nB, !0, YV(dB, sB, null === bB || void 0 === bB ? void 0 : bB[dB]))
      }), [xB, GB, sB, bB, eB]);
      const BT = !!tB,
        TT = (0, yB.useRef)(!1);
      (0, yB.useEffect)((() => {
        var BB;
        BT && (clearInterval(QB.current), eB && TT.current && (TT.current = !1, null === (BB = nB.current) || void 0 === BB || BB.call(nB, !1)))
      }), [BT, eB]);
      const dT = (0, Md.t)(sB, YB);
      return (0, oB.jsxs)("div", {
        ref: IB,
        className: "CraftableInfo SmallTextBold",
        children: [(0, oB.jsx)("div", {
          className: "CraftableHeader",
          children: (0, oB.jsx)(fB.e, {
            text: dT
          })
        }), !eB && (0, oB.jsx)("div", {
          className: OT()("CraftableIngredients", {
            Compact: LB.length >= 5
          }),
          style: {
            maxWidth: rB
          },
          children: UB.map(((BB, TB) => {
            const dB = BB.shownItems[GB % BB.shownItems.length];
            return (0, oB.jsx)(kV, {
              idx: TB,
              status: BB,
              shownItem: dB,
              dim: FB,
              onHoverStart: () => {
                AB(BB.shownItems)
              },
              onHoverEnd: () => {
                AB(null), null === EB || void 0 === EB || EB(!1)
              },
              onPadBack: mB
            }, TB)
          }))
        }), tB && (0, oB.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, oB.jsx)(fB.e, {
            text: tB.reason
          })
        }), !tB && (!DB || zB) && (0, oB.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!DB && "Missing ingredients", (0, oB.jsx)("br", {}), zB && "Inventory is full"]
        }), !eB && (0, oB.jsxs)(oB.Fragment, {
          children: [(0, oB.jsxs)(pV, {
            ref: vB,
            className: "DoCraftButton",
            onPointerDown: BB => {
              RB((0, Md.v)(BB), (0, bd.o)(BB.nativeEvent) ? JV() : lV)
            },
            onPointerUp: aB,
            onPointerLeave: aB,
            disabled: ZB,
            children: [iB && hB && !ZB && !WB && (0, oB.jsx)(nd.c, {
              className: "CraftShortcutGlyph",
              glyph: hB
            }), (0, oB.jsx)("div", {
              ref: cB,
              className: "DoCraftItem",
              onPointerEnter: () => {
                TT.current = !0, null === EB || void 0 === EB || EB(!0, YV(YB, sB))
              },
              onPointerLeave: () => {
                TT.current = !1, null === EB || void 0 === EB || EB(!1)
              },
              children: (0, oB.jsx)(Nd.c, {
                itemName: YB,
                amount: OB
              })
            })]
          }), (0, oB.jsxs)(pV, {
            ref: XB,
            className: "DoCraftAllButton",
            onPointerDown: BB => {
              PB((0, Md.v)(BB), !0, !1)
            },
            disabled: ZB,
            children: [(0, oB.jsx)("span", {
              className: "CraftAllLabel",
              children: MB("general:craftAll")
            }), wB > 0 && (0, oB.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", VV(wB)]
            })]
          })]
        })]
      })
    }

    function OV(BB) {
      let {
        selectedIdx: TB,
        hidden: dB
      } = BB;
      const VB = (0, md.r)(),
        pB = (0, yB.useRef)(null);
      return (0, yB.useLayoutEffect)((() => {
        const BB = pB.current,
          VB = null === BB || void 0 === BB ? void 0 : BB.parentElement;
        if (!VB || !BB) return;
        const yB = VB.querySelector(".CraftableItems"),
          lB = () => {
            var pB, lB;
            if (dB) return void(BB.style.opacity = "0");
            const JB = null === yB || void 0 === yB ? void 0 : yB.children[TB],
              YB = null === (pB = null !== (lB = null === JB || void 0 === JB ? void 0 : JB.querySelector(".InvenItem")) && void 0 !== lB ? lB : JB) || void 0 === pB ? void 0 : pB.getBoundingClientRect();
            if (!YB || 0 === YB.width) return void(BB.style.opacity = "0");
            const gB = VB.getBoundingClientRect();
            BB.style.opacity = "1", BB.style.width = `${YB.width}px`, BB.style.height = `${YB.height}px`, BB.style.transform = `translate(${YB.left-gB.left+VB.scrollLeft}px, ${YB.top-gB.top+VB.scrollTop}px)`
          };
        lB();
        const JB = new MutationObserver(lB),
          YB = new ResizeObserver(lB);
        return YB.observe(VB), yB && (JB.observe(yB, {
          childList: !0,
          subtree: !0
        }), YB.observe(yB)), () => {
          JB.disconnect(), YB.disconnect()
        }
      }), [TB, dB]), (0, oB.jsx)("div", {
        ref: pB,
        className: OT()("SelectionReticle", {
          Secondary: VB
        })
      })
    }

    function DV(BB, TB, dB) {
      return BB ? (0, Gd.b)(qd.h, BB) ? uV(BB, TB, dB) : BB : dB("classicGame:handCrafting")
    }

    function uV(BB, TB, dB) {
      var VB;
      const yB = null === (VB = TB[BB]) || void 0 === VB ? void 0 : VB.displayName;
      if ("string" === typeof yB) return dB(yB);
      const pB = gB.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(yB) ? yB.map((BB => {
        if ("string" === typeof BB) return BB;
        if ("translationKey" in BB) return dB(BB.translationKey, (0, jB.o)(BB.params, pB));
        if ("str" in BB) {
          if ("string" === typeof BB.str) return BB.str;
          if ("translationKey" in BB.str) return dB(BB.str.translationKey, (0, jB.o)(BB.str.params, pB))
        }
        return ""
      })).join("") : yB && "translationKey" in yB ? dB(yB.translationKey, (0, jB.o)(yB.params, pB)) : BB
    }

    function HV(BB, TB) {
      return BB === TB || null !== BB && null !== TB && BB.name === TB.name && BB.wo === TB.wo
    }

    function EV(BB) {
      var TB, dB, VB;
      let {
        show: pB,
        onCraft: lB,
        dispatchSelectedCraftable: JB,
        selectedCraftable: YB,
        craftingStation: kB,
        setHovered: LB
      } = BB;
      const {
        t: OB
      } = (0, jB.z)(), [DB, uB] = (0, yB.useState)(""), [HB, EB] = (0, yB.useState)(0);
      (0, yB.useEffect)((() => {
        pB || (uB(""), EB((BB => BB + 1)))
      }), [pB]);
      const [vB, mB] = (0, yB.useState)(kB);
      vB !== kB && (mB(kB), "" !== DB && (uB(""), EB((BB => BB + 1))));
      const iB = (0, yB.useRef)(null),
        NB = (0, yB.useRef)(null),
        tB = (0, Ad.j)(),
        fB = tB.showing && "recipe" === tB.kind,
        [sB, MB] = (0, yB.useState)(0),
        wB = null !== kB && void 0 !== kB ? kB : null,
        UB = (0, yB.useRef)(null),
        FB = BB => {
          return !((TB = UB.current) === (dB = BB) || null !== TB && null !== dB && TB.station === dB.station && HV(TB.recipe, dB.recipe)) && (UB.current = BB, gB.gameBridge.send("focusCrafting", BB), !0);
          var TB, dB
        };
      FB(pB ? {
        station: wB,
        recipe: (null === (TB = UB.current) || void 0 === TB ? void 0 : TB.station) === wB ? UB.current.recipe : null
      } : null);
      let KB = gB.gameBridge.latest("crafting");
      const rB = (0, zB.i)("itemInfo"),
        IB = "" !== DB.trim(),
        cB = (0, yV.z)(),
        SB = (0, yV.v)(),
        PB = (0, yV.B)(),
        QB = function(BB, TB) {
          const [dB, VB] = (0, yB.useState)(!1);
          (0, yB.useEffect)((() => {
            if (!BB) return void VB(!1);
            const TB = setTimeout((() => {
              VB(!0)
            }), 0);
            return () => {
              clearTimeout(TB)
            }
          }), [BB]);
          const pB = BB && dB,
            lB = (0, yB.useRef)({
              station: TB,
              at: new Map
            });
          return (lB.current.station !== TB || !pB && lB.current.at.size > 0) && (lB.current = {
            station: TB,
            at: new Map
          }), pB ? lB.current.at : null
        }(pB, kB);
      let RB = KB.recipes.filter((BB => {
        let {
          listed: TB
        } = BB;
        return TB
      }));
      if (IB) {
        const BB = [];
        for (const TB of KB.recipes) {
          var aB;
          const dB = null !== (aB = SB.get(TB.name)) && void 0 !== aB && aB.hideIngredients ? [] : TB.requires.flatMap((BB => {
              let {
                items: TB
              } = BB;
              return TB.flatMap((BB => [BB, uV(BB, rB, OB)]))
            })),
            VB = TV(DB, [TB.name, uV(TB.name, rB, OB)], dB);
          null !== VB && BB.push({
            item: TB,
            rank: VB
          })
        }
        BB.sort(((BB, TB) => BB.rank - TB.rank)), RB = BB.map((BB => {
          let {
            item: TB
          } = BB;
          return TB
        }))
      } else {
        if (QB && QB.size > 0) {
          const BB = KB.recipes.filter((BB => !BB.listed && QB.has(gV(BB))));
          RB = RB.concat(BB)
        }
        RB = (0, yV.j)(RB, cB, SB, PB), QB && (RB = (0, yV.h)(RB, QB, gV))
      }
      const ZB = BB => RB.find((TB => gV(TB) === BB)),
        XB = `${kB}|${DB}`,
        [WB, hB] = (0, yB.useState)(null),
        CB = (null === WB || void 0 === WB ? void 0 : WB.context) === XB ? WB.key : null,
        GB = YB ? gV(YB) : null,
        qB = null !== (dB = null !== (VB = ZB(GB)) && void 0 !== VB ? VB : ZB(CB)) && void 0 !== dB ? dB : RB[0],
        xB = qB ? gV(qB) : null,
        AB = qB ? {
          name: qB.name,
          wo: qB.wo
        } : null;
      pB && FB({
        station: wB,
        recipe: AB
      }) && (KB = gB.gameBridge.latest("crafting")), xB !== GB && xB !== CB && hB(xB ? {
        context: XB,
        key: xB
      } : null), (0, yB.useEffect)((() => () => {
        UB.current = null, gB.gameBridge.send("focusCrafting", null)
      }), []);
      const bB = HV(KB.detail, AB) ? KB.detail : null,
        nB = null !== bB && !bB.roomForOne,
        eB = RB.findIndex((BB => gV(BB) === gV(qB))),
        BT = () => NB.current ? (0, jd.c)(NB.current) : null,
        TT = (0, yB.useRef)(null),
        dT = (0, yB.useRef)(0);
      dT.current++;
      const VT = dT.current;
      (0, yB.useEffect)((() => {
        const BB = TT.current;
        if (!BB || VT <= BB.afterRender) return;
        if (TT.current = null, BB.key !== xB) return;
        const TB = BT();
        var dB;
        null !== TB && void 0 !== TB && TB.press("primary") && !BB.Dg && (null === (dB = TB.release) || void 0 === dB || dB.call(TB))
      }));
      const yT = BB => {
          const TB = {
            name: BB.name,
            wo: BB.wo
          };
          return {
            choose: () => {
              JB(TB), (0, vd.r)(NB.current)
            },
            craft: () => {
              var BB, dB;
              return JB(TB), gV(TB) !== gV(qB) ? (TT.current = {
                key: gV(TB),
                Dg: !0,
                afterRender: dT.current
              }, !0) : null !== (BB = null === (dB = BT()) || void 0 === dB ? void 0 : dB.press("primary")) && void 0 !== BB && BB
            },
            stopCraft: () => {
              var BB, TB;
              TT.current ? TT.current.Dg = !1 : null === (BB = BT()) || void 0 === BB || null === (TB = BB.release) || void 0 === TB || TB.call(BB)
            },
            refuse: () => {
              gV(TB) !== gV(qB) && JB(TB), MB((BB => BB + 1))
            }
          }
        },
        pT = () => {
          var BB, TB, dB;
          (0, vd.r)(null !== (BB = null === (TB = iB.current) || void 0 === TB || null === (dB = TB.querySelector(".CraftableItems")) || void 0 === dB ? void 0 : dB.children[eB]) && void 0 !== BB ? BB : null)
        },
        lT = RB.map(gV).join("|"),
        JT = (0, yB.useRef)(lT);
      return (0, yB.useEffect)((() => {
        JT.current !== lT && (JT.current = lT, fB && eB >= 0 && (0, Ad.f)() && pT())
      })), (0, oB.jsxs)("div", {
        className: "Craftables",
        children: [(0, oB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: DV(kB, rB, OB)
        }), (0, oB.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, oB.jsx)(zT.e, {
            className: "CraftingSearch",
            placeholderText: OB("general:searchRecipes"),
            defaultValue: DB,
            maxLength: 100,
            onValueChange: BB => {
              uB(BB)
            },
            blurOnEnter: !0
          }, HB), 0 === RB.length && IB && (0, oB.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: OB("general:noRecipesMatchSearch")
          }), RB.length > 0 && (0, oB.jsxs)(oB.Fragment, {
            children: [(0, oB.jsxs)("div", {
              ref: iB,
              className: "CraftablesLeftSide",
              children: [(0, oB.jsx)(xd.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(RB.map((BB => {
                  let {
                    name: TB,
                    wo: dB,
                    haveIngredients: VB
                  } = BB;
                  return {
                    name: TB,
                    wo: dB,
                    haveIngredients: VB
                  }
                })))],
                observing: pB,
                children: RB.map((BB => {
                  const {
                    name: TB,
                    wo: dB,
                    haveIngredients: VB
                  } = BB, yB = gV(BB);
                  return (0, oB.jsx)(oV, {
                    recipeId: yB,
                    itemName: TB,
                    onClick: () => {
                      JB({
                        name: TB,
                        wo: dB
                      })
                    },
                    isSelected: gV(qB) === yB,
                    haveIngredients: VB,
                    craftable: VB && !SB.has(TB) && !(gV(qB) === yB && nB),
                    setHovered: LB,
                    padActions: yT(BB),
                    marked: cB.has(TB),
                    lock: SB.get(TB),
                    itemInfo: rB
                  }, yB)
                }))
              }), (0, oB.jsx)(OV, {
                selectedIdx: eB,
                hidden: fB && tB.steppingSlots
              })]
            }), (0, oB.jsx)(LV, {
              show: pB,
              recipeItem: qB,
              detail: bB,
              onCraft: lB,
              setHovered: LB,
              craftButtonRef: NB,
              onPadBack: pT,
              showPadShortcut: fB,
              refusedCount: sB,
              lock: SB.get(qB.name),
              itemInfo: rB
            })]
          })]
        })]
      })
    }
    var vV = dB(35681),
      mV = dB(2760),
      iV = dB(1860),
      NV = dB(8009);
    class tV {
      constructor(BB, TB, dB) {
        this.commit = BB, this.delayMs = TB, this.defers = dB, this.pending = null, this.timer = void 0, this.Dg = !1, this.flush = () => {
          clearTimeout(this.timer);
          const BB = this.pending;
          null !== BB && (this.pending = null, this.commit(BB))
        }
      }
      type(BB) {
        this.pending = BB, clearTimeout(this.timer), this.Dg || this.defers() ? this.Dg || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(BB) {
        var TB;
        return null !== (TB = this.pending) && void 0 !== TB ? TB : BB
      }
      isHeld() {
        return this.Dg
      }
      setHeld(BB) {
        this.Dg = BB, BB || this.flush()
      }
    }

    function fV(BB) {
      return null === BB ? "creativeInventory:all" : `creativeInventory:${BB}`
    }

    function sV(BB) {
      let {
        category: TB
      } = BB;
      return null === TB ? (0, oB.jsx)(HB.e, {
        name: "layer-group"
      }) : (0, oB.jsx)(Nd.c, {
        itemName: vV.creativeItemCategoryIcons[TB],
        amount: 0
      })
    }

    function MV(BB) {
      let {
        labelKey: TB,
        isSelected: dB,
        onSelect: VB,
        setHovered: yB,
        children: pB
      } = BB;
      return (0, oB.jsx)("div", {
        className: OT()("CreativeCategoryTab", {
          Selected: dB
        }),
        onClick: VB,
        onPointerEnter: BB => {
          (0, Md.r)(BB) || yB(!0, {
            name: {
              translationKey: TB
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          yB(!1)
        },
        children: pB
      })
    }

    function zV(BB) {
      let {
        categories: TB,
        selectedCategory: dB,
        onSelect: VB
      } = BB;
      const {
        t: pB
      } = (0, jB.z)(), [lB, JB] = (0, yB.useState)(!1), YB = (0, yB.useRef)(null), gB = (0, yB.useCallback)((() => {
        JB(!1)
      }), []);
      return (0, iV.d)(YB, gB), (0, oB.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: YB,
        children: [(0, oB.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            JB(!lB)
          },
          children: [(0, oB.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, oB.jsx)(sV, {
              category: dB
            })
          }), (0, oB.jsx)("span", {
            children: pB(fV(dB))
          }), (0, oB.jsx)(HB.e, {
            name: lB ? "caret-up" : "caret-down"
          })]
        }), lB && (0, oB.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: TB.map((BB => (0, oB.jsxs)("div", {
            className: OT()("CreativeCategoryDropdownOption", {
              Selected: dB === BB
            }),
            onClick: () => {
              VB(BB), JB(!1)
            },
            children: [(0, oB.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, oB.jsx)(sV, {
                category: BB
              })
            }), (0, oB.jsx)("span", {
              children: pB(fV(BB))
            })]
          }, null !== BB && void 0 !== BB ? BB : "all")))
        })]
      })
    }
    const wV = (0, yB.memo)((function(BB) {
      let {
        creativeScrollDiv: TB,
        playerInvenNumSlots: dB,
        getSetHoveringForIdx: VB,
        getPointerDownForIdx: pB,
        getPointerUpForIdx: lB,
        creativeSearchVal: JB,
        setCreativeSearchVal: gB,
        creativeCategory: kB,
        setCreativeCategory: LB,
        show: OB
      } = BB;
      const {
        t: DB
      } = (0, jB.z)(), uB = (0, zB.i)("creativeVisibility"), {
        userContext: EB
      } = (0, tB.b)(), vB = (0, YB.j)("canUseDevCreativeItems"), mB = EB.playerHasRank("developer") || !!vB, iB = (0, yB.useMemo)((() => FV("", uB, mB)), [uB, mB]), NB = (0, yB.useMemo)((() => {
        const BB = (0, vV.creativeItemIds)(),
          TB = new Set(iB.map((TB => (0, vV.creativeCategoryOf)(BB[TB]))));
        return vV.creativeItemCategories.filter((BB => TB.has(BB)))
      }), [iB]), fB = null !== kB && NB.includes(kB) ? kB : null, MB = (0, yB.useMemo)((() => "" === JB ? iB : FV(JB, uB, mB)), [iB, JB, uB, mB]), wB = (0, yB.useMemo)((() => {
        const BB = (0, vV.creativeItemIds)();
        return null !== fB ? MB.filter((TB => (0, vV.creativeCategoryOf)(BB[TB]) === fB)) : "" === JB ? MB.filter((TB => !(0, vV.showOnlyInCreativeCategory)(BB[TB]))) : MB
      }), [MB, fB, JB]), UB = VB();

      function FB(BB) {
        LB(BB), TB.current.scrollTop = 0
      }
      const KB = [null, ...NB],
        {
          isTouchScreen: rB
        } = (0, aB.m)(["isTouchScreen"]),
        IB = !rB,
        cB = (0, yB.useRef)(null),
        [SB, PB] = (0, yB.useState)(0);
      (0, yB.useEffect)((() => {
        const BB = cB.current;
        if (!BB) return;
        const TB = new ResizeObserver((BB => {
          PB(BB[0].contentRect.height)
        }));
        return TB.observe(BB), () => {
          TB.disconnect()
        }
      }), [IB]);
      const QB = (0, yB.useRef)(null),
        RB = (0, yB.useCallback)((function BB() {
          "up" === QB.current ? TB.current.scrollTop -= 10 : "down" === QB.current && (TB.current.scrollTop += 10), QB.current && requestAnimationFrame(BB)
        }), [TB]),
        ZB = (0, yB.useCallback)((function(BB) {
          QB.current || (QB.current = BB, RB())
        }), [RB]);

      function XB() {
        QB.current = null
      }
      const WB = (0, yB.useRef)({
        creativeSearchVal: JB,
        setCreativeSearchVal: gB
      });
      WB.current = {
        creativeSearchVal: JB,
        setCreativeSearchVal: gB
      };
      const [hB] = (0, yB.useState)((() => new tV((BB => {
        WB.current.setCreativeSearchVal(BB)
      }), 250, md.i))), CB = BB => {
        var dB;
        null === (dB = TB.current) || void 0 === dB || dB.classList.toggle("CreativeItemSlotsStale", BB)
      };
      (0, sB.e)(NV.e, (BB => {
        hB.setHeld(BB), BB || CB(!1)
      })), (0, yB.useEffect)((() => hB.flush), [hB]);
      const GB = (0, oB.jsx)(zT.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: JB,
          maxLength: 1e4,
          onValueChange: (BB, TB) => {
            "" === hB.getTyped(WB.current.creativeSearchVal) && "" !== BB && LB(null), hB.type(BB), CB(hB.isHeld())
          },
          onEnter: hB.flush,
          blurOnEnter: !0
        }),
        qB = (0, oB.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [rB && (0, oB.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, oB.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                ZB("up")
              },
              onPointerLeave: XB,
              onPointerUp: XB,
              children: (0, oB.jsx)(HB.e, {
                name: "arrow-up"
              })
            }), (0, oB.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                ZB("down")
              },
              onPointerLeave: XB,
              onPointerUp: XB,
              children: (0, oB.jsx)(HB.e, {
                name: "arrow-up"
              })
            })]
          }), (0, oB.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: TB,
            children: [0 === wB.length && "" !== JB && (0, oB.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: DB("general:noResults")
            }), (0, oB.jsx)(xd.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [JB, fB],
              observerRoot: "CreativeItemSlots",
              observing: OB,
              children: wB.map((BB => {
                const TB = dB + BB;
                return (0, oB.jsx)(Xd.d, {
                  idx: TB,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: VB(TB),
                  pointerDown: pB(TB),
                  pointerUp: lB(TB)
                }, TB)
              }))
            })]
          })]
        });
      return (0, oB.jsxs)("div", {
        className: OT()("CreativeItemSlotsWrapper", IB ? "WithRail" : "WithDropdown"),
        children: [IB && (0, oB.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: cB,
          style: {
            "--rail-height": SB > 0 ? `${SB}px` : void 0,
            "--tab-rows": Math.ceil(KB.length / 2)
          },
          children: KB.map((BB => (0, oB.jsx)(MV, {
            labelKey: fV(BB),
            isSelected: fB === BB,
            onSelect: () => {
              FB(BB)
            },
            setHovered: UB,
            children: (0, oB.jsx)(sV, {
              category: BB
            })
          }, null !== BB && void 0 !== BB ? BB : "all")))
        }), (0, oB.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, oB.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [GB, !IB && (0, oB.jsx)(zV, {
              categories: KB,
              selectedCategory: fB,
              onSelect: FB
            })]
          }), qB]
        })]
      })
    }));

    function UV(BB) {
      var TB;
      return null !== (TB = (0, mV.c)(BB)) && void 0 !== TB ? TB : ""
    }

    function FV(BB, TB, dB) {
      let {
        publicLobby: VB,
        shownInGame: yB
      } = TB;
      const pB = BB.toLowerCase(),
        lB = (0, vV.creativeItemIds)(),
        JB = BB => {
          var TB;
          const pB = lB[BB];
          return !(0, vV.itemIsDisabled)(pB, VB, null === (TB = yB[UV(pB)]) || void 0 === TB || TB, dB)
        };
      if ("" === pB) return lB.map(((BB, TB) => TB)).filter((BB => !(0, vV.showOnlyInCreativeSearch)(lB[BB]))).filter(JB);
      const YB = [];
      for (let gB = 0; gB < lB.length; gB++) UV(lB[gB]).toLowerCase().includes(pB) && YB.push(gB);
      YB.sort(((BB, TB) => {
        const dB = UV(lB[BB]).toLowerCase(),
          VB = UV(lB[TB]).toLowerCase();
        return dB.indexOf(pB) - VB.indexOf(pB)
      }));
      for (const [gB, oB] of(0, vV.creativeAltNames)())
        for (const BB of oB)
          if (BB.toLowerCase().includes(pB)) {
            const BB = lB.indexOf(gB);
            YB.includes(BB) || YB.push(BB)
          } return YB.filter(JB)
    }
    var KV = dB(35805),
      rV = dB(572);

    function IV(BB) {
      return BB > rV.m
    }

    function cV(BB) {
      const TB = BB / 2,
        dB = [];
      for (let VB = 0; VB < TB / 6; VB++)
        for (let BB = 0; BB < 12; BB++) {
          const yB = BB < 6 ? 0 : TB;
          dB.push(yB + 6 * VB + BB % 6)
        }
      return dB
    }

    function SV(BB) {
      let {
        numSlots: TB,
        renderSlot: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), pB = (0, yB.useRef)(null);
      var lB;
      return lB = pB, (0, yB.useLayoutEffect)((() => {
        var BB;
        const TB = null === (BB = lB.current) || void 0 === BB ? void 0 : BB.closest(".InvenBody");
        if (!TB) return;
        const dB = () => {
          TB.style.zoom = "";
          const BB = parseFloat(getComputedStyle(document.documentElement).fontSize),
            dB = window.innerWidth - 2 * BB,
            VB = TB.getBoundingClientRect().width;
          VB > dB && (TB.style.zoom = "" + dB / VB)
        };
        return dB(), window.addEventListener("resize", dB), () => {
          window.removeEventListener("resize", dB), TB.style.zoom = ""
        }
      }), [lB]), (0, oB.jsxs)("div", {
        ref: pB,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, oB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: VB("doubleChest:title")
        }), (0, oB.jsx)("div", {
          className: "GridItemSlots",
          children: cV(TB).map((BB => dB(BB)))
        })]
      })
    }

    function PV(BB) {
      let {
        ad: TB,
        initialPasskey: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), [pB, lB] = (0, yB.useState)(dB), [JB, YB] = (0, yB.useState)(dB);
      (0, yB.useEffect)((() => {
        lB(dB), YB(dB)
      }), [...TB]);
      return (0, oB.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, oB.jsx)("div", {
          className: "SmallTextBold",
          children: VB("ironChest:currentPasskey", {
            currentPasskey: pB.join("")
          })
        }), (0, oB.jsx)(Qd, {
          className: "IronChestPasskeyEditor",
          jl: JB,
          onPasskeyUpdated: YB,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            gB.gameBridge.send("changeIronChestPasskey", {
              pos: [...TB],
              jl: [...JB]
            }), lB([...JB])
          }
        })]
      })
    }

    function QV(BB) {
      let {
        variation: TB,
        canCraft: dB,
        show: VB,
        creativeMounted: yB,
        specialItemRef: pB,
        draggedInfo: lB,
        getSetHovering: JB,
        getPointerDownForIdx: YB,
        getPointerUpForIdx: gB,
        enchantingTablePosition: kB,
        enchantingTableBlockName: LB,
        selectedCraftable: OB,
        dispatchSelectedCraftable: DB,
        creativeScrollDiv: uB,
        creativeSearchVal: HB,
        setCreativeSearchVal: EB,
        creativeCategory: vB,
        setCreativeCategory: mB,
        onCraft: iB
      } = BB;
      const {
        userContext: NB
      } = (0, tB.b)(), {
        t: fB
      } = (0, jB.z)(), sB = (0, zB.g)("inventory", (BB => BB.chest)), MB = (0, zB.g)("inventory", (BB => BB.player.length)), wB = (0, zB.g)("inventory", (BB => BB.creative));
      if (0 === MB) return null;
      let UB, FB;
      const KB = BB => {
          const TB = MB + BB;
          return (0, oB.jsx)(Xd.d, {
            idx: TB,
            draggedInfo: lB,
            specialItemInfo: pB.current,
            setHovered: JB(TB),
            pointerDown: YB(TB),
            pointerUp: gB(TB)
          }, TB)
        },
        rB = sB ? (0, KV.c)(sB.type) : null;
      if (rB) UB = OT()("InvenLeftSideChestCustom", rB.className), FB = (0, oB.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: rB.render({
          ad: sB.pos,
          renderSlot: KB
        })
      });
      else if (sB) {
        const BB = sB.pos,
          TB = "Iron" === sB.type || "Moonstone" === sB.type ? sB.type : "Standard";
        let dB = !1,
          VB = null;
        "Iron" === TB && (dB = sB.ironChest.ownerDbId === NB.whamm, VB = sB.ironChest.jl), UB = `InvenLeftSideChest${TB}`;
        const yB = IV(sB.numSlots);
        FB = (0, oB.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [dB && (0, oB.jsx)(PV, {
            ad: BB,
            initialPasskey: VB
          }), yB && (0, oB.jsx)(SV, {
            numSlots: sB.numSlots,
            renderSlot: KB
          }), !yB && (0, oB.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, oB.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: fB("Moonstone" === TB ? "item:moonstoneChest" : "Iron" === TB ? "item:ironChest" : "item:chest")
            }), (0, oB.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(sB.numSlots).fill(0).map(((BB, TB) => KB(TB)))
            })]
          })]
        })
      } else if (!wB || TB && dB)
        if (dB && "Enchanting Table" === TB) UB = `InvenLeftSide${(null!==LB&&void 0!==LB?LB:"").replace(/ /gi,"")}`, FB = (0, oB.jsx)(Wd, {
          specialItemInfo: pB.current,
          setHovered: JB,
          pointerDown: YB(wd.f),
          pointerUp: gB(wd.f),
          enchantingTablePosition: kB,
          enchantingTableBlockName: LB
        });
        else if (dB && "Salvaging Table" === TB) UB = "InvenLeftSideSalvagingTable", FB = (0, oB.jsx)(Cd, {
        specialItemInfo: pB.current,
        setSpecialItemInfo: BB => {
          pB.current = BB
        },
        setHovered: JB,
        pointerDown: YB(wd.f),
        pointerUp: gB(wd.f)
      });
      else {
        if (!dB) return null;
        UB = `InvenLeftSide${(null!==TB&&void 0!==TB?TB:"HandCrafting").replace(/ /gi,"")}`, FB = (0, oB.jsx)(EV, {
          show: VB,
          onCraft: iB,
          craftingStation: TB,
          selectedCraftable: OB,
          dispatchSelectedCraftable: DB,
          setHovered: JB()
        })
      } else UB = "InvenLeftSideCreative", FB = yB ? (0, oB.jsx)(wV, {
        creativeScrollDiv: uB,
        playerInvenNumSlots: MB,
        getSetHoveringForIdx: JB,
        getPointerDownForIdx: YB,
        getPointerUpForIdx: gB,
        creativeSearchVal: HB,
        setCreativeSearchVal: EB,
        creativeCategory: vB,
        setCreativeCategory: mB,
        show: VB
      }) : null;
      const IB = !!sB || dB && !!TB;
      return (0, oB.jsx)("div", {
        className: `InvenLeftSide ${UB}`,
        "data-pad-inventory-start": IB ? "" : void 0,
        children: FB
      })
    }
    var RV = dB(560);
    const aV = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function ZV(BB) {
      let {
        show: TB,
        draggedInfo: dB,
        specialItemInfo: VB,
        craftFlyAnims: yB,
        getSetHovering: pB,
        getPointerDownForIdx: lB,
        getPointerUpForIdx: JB,
        variation: YB,
        canCraft: gB,
        isNewSlot: kB
      } = BB;
      const LB = (0, zB.g)("inventory", (BB => BB.player.length)),
        OB = gd(TB);
      return 0 === LB ? null : (0, oB.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, oB.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(RV.b.length).fill(0).map(((BB, TB) => {
            var DB;
            const uB = LB - RV.b.length + TB;
            return (0, oB.jsx)(Xd.d, {
              idx: uB,
              draggedInfo: dB,
              specialItemInfo: VB,
              craftFlyHoldbackInfo: (0, zd.k)(yB, uB),
              setHovered: pB(uB),
              pointerDown: lB(uB),
              pointerUp: JB(uB),
              defaultIconB64: null !== (DB = OB(aV[RV.b[TB]], pd.e.ITEM)) && void 0 !== DB ? DB : null,
              variation: gB ? YB : void 0,
              showNewDot: kB(uB)
            }, uB)
          }))
        }), (0, oB.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(LB - 10 - RV.b.length).fill(0).map(((BB, TB) => {
            const OB = LB - RV.b.length - TB - 1;
            return (0, oB.jsx)(Xd.d, {
              idx: OB,
              draggedInfo: dB,
              specialItemInfo: VB,
              craftFlyHoldbackInfo: (0, zd.k)(yB, OB),
              setHovered: pB(OB),
              pointerDown: lB(OB),
              pointerUp: JB(OB),
              variation: gB ? YB : void 0,
              showNewDot: kB(OB)
            }, OB)
          }))
        })]
      })
    }
    var XV = dB(35810),
      WV = dB(35814);

    function hV(BB) {
      const {
        e: TB,
        idx: dB
      } = BB, VB = (0, Md.k)(BB.readInventory(), dB), yB = (0, Md.p)(TB);
      dB === wd.b ? function(BB, TB) {
        const {
          draggedInfoRef: dB,
          removeItem: VB,
          removeDraggedInfoRef: yB,
          close: pB
        } = BB;
        if (dB.current) {
          const BB = TB && dB.current.amount || 1;
          VB(dB.current.idx, BB, !0) && (dB.current.amount -= BB, dB.current.amount <= 0 && yB())
        } else TB && pB()
      }(BB, yB) : dB === wd.f ? function(BB, TB) {
        const {
          e: dB,
          draggedInfoRef: VB,
          specialItemRef: yB,
          moveAmtIntoSlot: pB,
          removeDraggedInfoRef: lB
        } = BB;
        if ((0, Md.v)(dB) && yB.current) yB.current = null;
        else if (VB.current && yB.current && (VB.current.idx === yB.current.idx || (0, WV.c)(VB.current, yB.current)) && VB.current.amount > 0 && yB.current.amount > 0 && yB.current.amount < Sd.c.maxItemStackSize)
          if (VB.current.idx === yB.current.idx) {
            if (TB) {
              const BB = Math.min(VB.current.amount, Sd.c.maxItemStackSize - yB.current.amount);
              yB.current.amount += BB, VB.current.amount -= BB
            } else VB.current.amount--, yB.current.amount++;
            VB.current.amount <= 0 && lB()
          } else if (TB) {
          const BB = Math.min(VB.current.amount, Sd.c.maxItemStackSize - yB.current.amount);
          pB(yB.current.idx, BB) && (yB.current.amount += BB)
        } else {
          pB(yB.current.idx, 1) && yB.current.amount++
        } else if (!VB.current || yB.current || TB) {
          const BB = VB.current;
          VB.current = yB.current, yB.current = BB
        } else VB.current.amount--, yB.current = {
          idx: VB.current.idx,
          name: VB.current.name,
          attributes: VB.current.attributes,
          amount: 1
        }
      }(BB, yB) : (0, Md.v)(TB) ? function(BB, TB) {
        var dB, VB;
        const {
          idx: yB,
          draggedInfoRef: pB,
          specialItemRef: lB,
          canCraft: JB,
          variation: YB,
          swapSlots: gB,
          moveIntoSlots: oB
        } = BB;
        if (!TB) return;
        let kB = TB.amount;
        yB === (null === (dB = pB.current) || void 0 === dB ? void 0 : dB.idx) && (kB = pB.current.amount <= 0 ? 0 : TB.amount - pB.current.amount);
        yB === (null === (VB = lB.current) || void 0 === VB ? void 0 : VB.idx) && (kB = lB.current.amount <= 0 ? 0 : TB.amount - lB.current.amount);
        if (0 === kB) return;
        const LB = BB.readInventory(),
          OB = LB.player.length,
          DB = LB.chest,
          uB = OB - RV.b.length,
          HB = () => {
            if (!(0, md.i)()) return void oB(10, uB, yB, kB);
            const BB = BB => {
              const dB = (0, Md.k)(LB, BB);
              return dB ? {
                amount: dB.amount,
                stacksWithMoved: (0, WV.c)(dB, TB)
              } : null
            };
            for (const TB of ((BB, TB, dB, VB, yB) => {
                const pB = [];
                let lB = VB;
                if (null !== VB) {
                  let JB = 0;
                  for (let VB = TB; VB < dB; VB++) {
                    const TB = BB(VB);
                    null !== TB && void 0 !== TB && TB.stacksWithMoved && null !== TB.amount && TB.amount > 0 && (JB += Math.max(0, yB - TB.amount))
                  }
                  const YB = Math.min(VB, JB);
                  if (YB > 0 && (pB.push({
                      start: TB,
                      end: dB,
                      amount: YB
                    }), lB = VB - YB), lB <= 0) return pB
                }
                for (let JB = dB - 1; JB >= TB; JB--)
                  if (null === BB(JB)) {
                    pB.push({
                      start: JB,
                      end: JB + 1,
                      amount: lB
                    });
                    break
                  } return pB
              })(BB, 10, uB, kB, Sd.c.maxItemStackSize)) oB(TB.start, TB.end, yB, TB.amount)
          };
        if (!JB || "Enchanting Table" !== YB && "Salvaging Table" !== YB) {
          const dB = (0, MB.Cb)(TB.name),
            VB = dB ? (0, MB.yb)(dB) : null;
          if (!RV.b.includes(dB) || yB !== VB && (0, Md.m)(LB, BB.itemInfo, VB, yB))
            if (DB)
              if (yB < OB) {
                var EB, vB;
                const [BB, TB] = null !== (EB = null === (vB = (0, KV.c)(DB.type)) || void 0 === vB ? void 0 : vB.quickMoveRange) && void 0 !== EB ? EB : [0, DB.numSlots];
                oB(OB + BB, OB + TB, yB, kB)
              } else oB(0, OB - RV.b.length, yB, kB);
          else LB.creative ? yB < 10 ? HB() : yB < OB ? oB(0, 10, yB, kB) : oB(0, OB - RV.b.length, yB, null !== TB.amount ? Sd.c.maxItemStackSize : null) : yB < 10 ? HB() : oB(0, 10, yB, kB);
          else yB < OB - RV.b.length || yB >= OB ? gB(VB, yB) : (oB(0, OB - RV.b.length, VB, kB), fd.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else lB.current = {
          idx: yB,
          name: TB.name,
          attributes: TB.attributes,
          amount: null !== TB.amount ? kB : 0
        }
      }(BB, VB) : BB.draggedInfoRef.current ? function(BB, TB, dB, VB) {
        const {
          draggedInfoRef: yB,
          specialItemRef: pB,
          moveAmtIntoSlot: lB,
          swapSlots: JB,
          removeItem: YB,
          removeDraggedInfoRef: gB
        } = BB, oB = BB.readInventory(), kB = yB.current.idx;
        if (dB && (TB === kB || (0, WV.c)(yB.current, dB)) && yB.current.amount > 0 && (0, Md.d)(dB) > 0 && (dB.amount < Sd.c.maxItemStackSize || TB === kB)) VB ? dB.amount + yB.current.amount <= Sd.c.maxItemStackSize || TB === kB ? lB(TB, yB.current.amount) : lB(TB, Sd.c.maxItemStackSize - dB.amount) : lB(TB, 1);
        else if (yB.current.amount > 0 && !dB) lB(TB, VB ? yB.current.amount : 1);
        else if (VB || dB || 0 === yB.current.amount)
          if (oB.creative && !oB.chest && TB >= oB.player.length) {
            const BB = 0 === yB.current.amount ? 1 : yB.current.amount;
            YB(yB.current.idx, BB, !1) && gB()
          } else {
            var LB;
            const dB = (null === (LB = pB.current) || void 0 === LB ? void 0 : LB.idx) === TB;
            if (JB(TB, yB.current.idx)) {
              const VB = BB.readInventory(),
                lB = (0, Md.k)(VB, kB),
                JB = !VB.chest && VB.creative && yB.current.idx >= VB.player.length;
              if (lB && yB.current.idx !== TB && !JB) {
                let BB = (0, Md.d)(lB);
                dB && (BB -= pB.current.amount), yB.current = dB && 0 === BB ? null : {
                  idx: yB.current.idx,
                  name: lB.name,
                  attributes: lB.attributes,
                  amount: BB
                }
              } else gB()
            }
          }
        else lB(TB, 1)
      }(BB, dB, VB, yB) : function(BB, TB, dB, VB) {
        var yB;
        const {
          draggedInfoRef: pB,
          specialItemRef: lB
        } = BB;
        if (!dB) return;
        let JB = (0, Md.d)(dB);
        const YB = (null === (yB = lB.current) || void 0 === yB ? void 0 : yB.idx) === TB;
        YB && (JB -= lB.current.amount);
        VB || (JB = Math.ceil(JB / 2));
        pB.current = YB && 0 === JB ? null : {
          idx: TB,
          name: dB.name,
          attributes: dB.attributes,
          amount: JB
        }
      }(BB, dB, VB, yB)
    }

    function CV(BB, TB) {
      return !!TB && TB.name === BB.name
    }

    function GV() {
      return gB.gameBridge.latest("inventory")
    }

    function qV(BB, TB, dB) {
      return gB.gameBridge.send("removeInventoryItem", {
        slot: BB,
        amount: TB,
        drop: dB
      })
    }

    function xV(BB) {
      return (0, Md.j)(BB, gB.gameBridge.latest("itemInfo"), gB.gameBridge.latest("stationItems").enchantable)
    }

    function jV(BB) {
      let {
        show: TB,
        close: dB,
        canCraft: VB,
        variation: pB,
        inventoryItemsMoveable: lB,
        setCraftFlyAnims: JB
      } = BB;
      (0, zB.i)("itemInfo");
      const [YB, oB] = (0, yB.useState)(null), [kB, LB] = (0, yB.useState)(null), [OB, DB] = (0, yB.useState)(!1), uB = (0, yB.useRef)(null), HB = (0, yB.useRef)(null), EB = (0, yB.useRef)(null), vB = (0, yB.useRef)(null), [mB, iB] = (0, yB.useReducer)((BB => BB + 1), 0), NB = (0, yB.useCallback)((() => {
        TB && iB()
      }), [TB, iB]), tB = (0, yB.useCallback)((() => {
        HB.current = null, SB.current = null, NB()
      }), [NB]), fB = (0, yB.useCallback)(((BB, TB) => {
        JB((dB => dB.map((dB => "ingredient" === dB.kind ? dB : dB.jg === BB ? {
          ...dB,
          jg: TB,
          to: (0, Md.g)(TB)
        } : dB.jg === TB ? {
          ...dB,
          jg: BB,
          to: (0, Md.g)(BB)
        } : dB))))
      }), [JB]), sB = (0, yB.useCallback)(((BB, TB) => {
        const dB = RB.current;
        if (dB.x = BB, dB.y = TB, uB.current) !aB.current.isTouch || aB.current.itemBeingDragged && !SB.current ? (uB.current.style.transform = `translate(${dB.x}px, ${dB.y}px)`, DB(aB.current.isTouch && !SB.current)) : (uB.current.style.transform = "translate(0.5rem, 0.5rem)", DB(!0));
        else if (vB.current) {
          const dB = vB.current;
          let VB = BB + 10,
            yB = TB + 10;
          const pB = dB.offsetWidth,
            lB = dB.offsetHeight;
          VB + pB > window.innerWidth && (VB = BB - pB - 10), yB + lB > window.innerHeight && (yB = TB - lB - 10), VB < 0 && (VB = 0), yB < 0 && (yB = 0), vB.current.style.transform = `translate(${VB}px, ${yB}px)`
        }
      }), []), wB = (0, yB.useCallback)((BB => (TB, dB, VB) => {
        if (oB(TB && void 0 !== BB ? BB : null), TB) {
          if (void 0 === BB && !dB) return void(0, XV.c)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== BB) {
            var yB;
            const TB = GV();
            let dB;
            if (dB = BB === wd.f ? EB.current ? (0, Md.k)(TB, EB.current.idx) : null : (0, Md.k)(TB, BB), !dB) return void LB(null);
            if ((null === (yB = EB.current) || void 0 === yB ? void 0 : yB.idx) === BB) {
              if (0 === (0, Md.d)(dB) - EB.current.amount) return void LB(null)
            }
            LB(xV(dB))
          } else LB({
            name: dB.name,
            desc: dB.desc,
            fontStyle: "normal"
          })
        } else LB(null);
        VB && setTimeout((() => {
          sB(VB.pageX, VB.pageY)
        }), 0)
      }), [sB]), UB = (0, yB.useCallback)(((BB, TB) => {
        const dB = gB.gameBridge.send("moveInventoryItem", {
          from: HB.current.idx,
          to: BB,
          amount: TB
        });
        return dB ? (HB.current.amount -= TB, HB.current.amount <= 0 && tB()) : console.error("moveInventoryItem failed"), dB
      }), [tB]), FB = (0, yB.useCallback)(((BB, TB) => {
        const dB = EB.current,
          VB = null === dB || void 0 === dB ? void 0 : dB.idx;
        dB && (dB.idx = function(BB, TB, dB) {
          return BB === TB ? dB : BB === dB ? TB : BB
        }(VB, BB, TB));
        const yB = gB.gameBridge.send("swapInventorySlots", {
          a: BB,
          b: TB
        });
        return yB ? fB(BB, TB) : dB && (dB.idx = VB), yB
      }), [fB]), KB = (0, yB.useCallback)(((BB, TB, dB, VB) => {
        const yB = gB.gameBridge.send("quickMoveInventoryItem", {
          slot: dB,
          start: BB,
          end: TB,
          amount: VB
        });
        null !== yB && fB(dB, yB)
      }), [fB]), rB = (0, yB.useCallback)(((BB, TB) => {
        var yB;
        ((BB, TB, dB) => {
          const VB = BB - (dB - RV.b.length);
          return !(!TB || VB < 0 || VB >= RV.b.length) && (0, MB.Cb)(TB) !== RV.b[VB]
        })(TB, null === (yB = HB.current) || void 0 === yB ? void 0 : yB.name, GV().player.length) || (hV({
          e: BB,
          idx: TB,
          readInventory: GV,
          itemInfo: gB.gameBridge.latest("itemInfo"),
          draggedInfoRef: HB,
          specialItemRef: EB,
          moveAmtIntoSlot: UB,
          swapSlots: FB,
          moveIntoSlots: KB,
          removeItem: qV,
          removeDraggedInfoRef: tB,
          close: dB,
          canCraft: VB,
          variation: pB
        }), NB())
      }), [VB, dB, UB, KB, tB, FB, pB, NB]), IB = (0, yB.useRef)(0), cB = (0, yB.useRef)(null), SB = (0, yB.useRef)(null), PB = (0, yB.useRef)(null), QB = (0, yB.useRef)(new Set), RB = (0, yB.useRef)({
        x: 0,
        y: 0
      }), aB = (0, yB.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), ZB = (0, yB.useCallback)((() => (PB.current = null, aB.current.itemBeingDragged = !1, clearTimeout(cB.current), !!SB.current && (SB.current = null, NB(), !0))), [NB]);
      (0, yB.useEffect)((() => {
        ZB(), QB.current.clear()
      }), [TB]);
      const XB = BB => void 0 !== BB && (QB.current.has(BB) || null !== PB.current && BB !== PB.current),
        WB = BB => {
          aB.current.isTouch = (0, Md.r)(BB)
        },
        hB = (0, yB.useCallback)((BB => TB => {
          const VB = (0, Md.r)(TB);
          if (VB || sB(TB.pageX, TB.pageY), lB)
            if (XB(TB.pointerId)) void 0 !== TB.pointerId && QB.current.add(TB.pointerId);
            else {
              if (WB(TB), VB) {
                IB.current = TB.timeStamp, aB.current.itemBeingDragged = !0, PB.current = TB.pointerId;
                const dB = (0, Md.k)(GV(), BB);
                if (dB && dB.amount && dB.amount > 0) {
                  const dB = TB.pageX,
                    VB = TB.pageY,
                    yB = RB.current.x,
                    pB = RB.current.y;
                  clearTimeout(cB.current), cB.current = setTimeout((() => {
                    if (HB.current && HB.current.idx === BB && (Math.abs(dB - RB.current.x) < 20 && Math.abs(VB - RB.current.y) < 20 || yB === RB.current.x && pB === RB.current.y) && aB.current.itemBeingDragged) {
                      const BB = GV(),
                        dB = BB.creative && !BB.chest && HB.current.idx >= Sd.c.numInvenSlots && null !== (0, Md.k)(BB, HB.current.idx).amount ? Sd.c.maxItemStackSize : HB.current.amount;
                      SB.current = {
                        initTouchX: TB.pageX,
                        initTouchY: TB.pageY,
                        maxAmount: dB
                      }, HB.current.amount = Math.ceil(HB.current.amount / 2), uB.current.style.transform = "translate(0.5rem, 0.5rem)", DB(!0), NB()
                    }
                  }), 500)
                }
              }
              rB(TB, BB)
            }
          else BB === wd.b && (0, Md.p)(TB) && dB()
        }), [sB, rB, lB, dB, NB]),
        CB = (0, yB.useCallback)((BB => BB => {
          if (XB(BB.pointerId)) return;
          const TB = (0, Md.r)(BB);
          if (WB(BB), !ZB()) {
            if (TB && HB.current && BB.timeStamp - IB.current > 150) {
              const TB = document.elementFromPoint(BB.clientX, BB.clientY);
              if (null !== TB) {
                const dB = TB.getAttribute("data-inven-idx");
                null !== dB ? rB(BB, parseInt(dB)) : TB.classList.contains("InventoryBackgroundScreen") && rB(BB, -1)
              }
            }
            sB(BB.pageX, BB.pageY)
          }
        }), [sB, rB, ZB]);
      (0, yB.useEffect)((() => {
        let BB;
        const dB = ["pointerup", "pointercancel"],
          VB = BB => {
            QB.current.has(BB.pointerId) ? setTimeout((() => {
              QB.current.delete(BB.pointerId)
            }), 0) : BB.pointerId === PB.current && setTimeout((() => {
              PB.current === BB.pointerId && ZB()
            }), 0)
          };
        if (TB) {
          for (const BB of dB) document.addEventListener(BB, VB, !0);
          if (!aB.current.isTouch) {
            const BB = RB.current;
            sB(BB.x, BB.y)
          }
          BB = BB => {
            BB.preventDefault(), XB(BB.pointerId) || (WB(BB), sB(BB.pageX, BB.pageY), SB.current && BB.pointerId === PB.current && (BB => {
              if (!HB.current) return SB.current = null, void NB();
              const {
                initTouchX: TB,
                maxAmount: dB
              } = SB.current, VB = (BB.pageX - TB) * SB.current.maxAmount / 160, yB = Math.ceil(dB / 2) + Math.ceil(VB);
              HB.current.amount = Math.min(dB, Math.max(1, yB)), NB()
            })(BB))
          }, document.addEventListener("pointermove", BB, !0)
        }
        return () => {
          document.removeEventListener("pointermove", BB, !0);
          for (const BB of dB) document.removeEventListener(BB, VB, !0)
        }
      }));
      const GB = (0, yB.useCallback)((() => {
          if (HB.current) {
            const BB = (0, Md.k)(GV(), HB.current.idx);
            (!CV(HB.current, BB) || BB.amount < HB.current.amount) && tB()
          }
        }), [tB]),
        qB = (0, yB.useCallback)((() => {
          const BB = HB.current;
          if (BB) {
            const TB = (0, Md.k)(GV(), BB.idx);
            CV(BB, TB) && (BB.attributes = TB.attributes)
          }
        }), []);
      return {
        draggedDomRef: uB,
        draggedInfoRef: HB,
        specialItemRef: EB,
        hoverInfoDomRef: vB,
        longHoldSplitInfoRef: SB,
        currHoveredIdx: YB,
        currHoveredDisplayInfo: kB,
        displayDraggedItemName: OB,
        forceRerenderIfVisible: NB,
        removeDraggedInfoRef: tB,
        checkDraggedItemConsistencyWithInven: GB,
        refreshDraggedAttributes: qB,
        swapSlots: FB,
        getPointerDownForIdx: hB,
        getPointerUpForIdx: CB,
        getSetHovering: wB,
        setCurrHoveredDisplayInfo: LB,
        moveFollowerTo: sB
      }
    }
    class AV {
      constructor(BB) {
        this.snapshot = [], this.newSlots = new Set, this.update(BB, !1)
      }
      update(BB, TB) {
        const dB = BB.map((BB => {
          var TB;
          return BB ? {
            name: BB.name,
            amount: null !== (TB = BB.amount) && void 0 !== TB ? TB : 1
          } : null
        }));
        dB.forEach(((BB, dB) => {
          const VB = this.snapshot[dB],
            yB = (null === BB || void 0 === BB ? void 0 : BB.name) !== (null === VB || void 0 === VB ? void 0 : VB.name);
          (!BB || yB || BB.amount < VB.amount) && this.newSlots.delete(dB), TB && BB && (yB || BB.amount > VB.amount) && this.newSlots.add(dB)
        })), this.snapshot = dB
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(BB) {
        return this.newSlots.has(BB)
      }
    }
    const bV = (BB, TB, dB) => ({
      button: TB,
      shiftKey: dB,
      pageX: BB.clientX,
      pageY: BB.clientY,
      clientX: BB.clientX,
      clientY: BB.clientY,
      pointerType: "mouse"
    });

    function nV(BB) {
      const [TB, dB] = (0, yB.useState)(BB);
      return BB && !TB && dB(!0), (0, yB.useEffect)((() => {
        if (TB) return;
        let BB = !0;
        const VB = () => {
            BB && (BB = !1, dB(!0))
          },
          yB = "function" === typeof window.requestIdleCallback,
          pB = yB ? window.requestIdleCallback(VB, {
            timeout: 2e3
          }) : void 0,
          lB = setTimeout(VB, yB ? 2e3 : 1e3);
        return () => {
          BB = !1, clearTimeout(lB), void 0 !== pB && window.cancelIdleCallback(pB)
        }
      }), [TB]), TB
    }
    const eV = (0, yB.memo)((function(BB) {
      var TB;
      let {
        show: dB,
        onOpen: VB,
        onClose: pB,
        variation: JB
      } = BB;
      const kB = (0, yB.useRef)(null),
        LB = (0, yB.useRef)(null),
        OB = function(BB) {
          const [TB, dB] = (0, yB.useState)(!0), [VB, pB] = (0, yB.useState)(!1), lB = (0, yB.useRef)(null), JB = (0, yB.useRef)(null), gB = (0, YB.j)("_shield"), oB = (0, yB.useRef)(null), kB = (0, YB.j)("_health"), LB = (0, yB.useRef)(null);

          function OB(BB) {
            const TB = Date.now() + BB;
            TB < JB.current || (dB(!1), clearTimeout(lB.current), JB.current = TB, lB.current = setTimeout((() => {
              dB(!0)
            }), BB))
          }
          return (0, yB.useEffect)((() => {
            OB(Fd);
            const BB = DB.h.subscribe("requestingPlayVideoAd", (() => {
              OB(Fd)
            }));
            return () => {
              clearTimeout(lB.current), DB.h.unsubscribe(BB)
            }
          }), []), (0, yB.useEffect)((() => {
            (oB.current > gB || LB.current > kB) && OB(6e4), oB.current = gB, LB.current = kB
          }), [gB, kB]), (0, yB.useEffect)((() => {
            let TB = null;
            return BB ? TB = setTimeout((() => {
              pB(!0)
            }), 250) : pB(!1), () => {
              clearTimeout(TB)
            }
          }), [BB]), TB && VB
        }(dB);
      (0, sB.f)(Ed.c, null);
      const uB = (0, Ed.k)(),
        HB = uB.some((BB => BB.panel)),
        EB = (0, zB.g)("inventory", (BB => null !== BB.chest && (null !== BB.chest.ironChest || IV(BB.chest.numSlots)))),
        vB = nV(dB),
        mB = nV(dB),
        [iB, NB] = (0, yB.useState)([]),
        tB = (0, yB.useCallback)((BB => {
          NB((TB => TB.filter((TB => TB.id !== BB))))
        }), []),
        fB = (0, yB.useRef)(null),
        wB = (0, yB.useRef)(0),
        UB = (0, yB.useCallback)((() => {
          fB.current && (wB.current = fB.current.scrollTop), pB()
        }), [pB]),
        FB = (0, YB.j)("inventoryItemsMoveable"),
        KB = (0, YB.j)("canCraft"),
        {
          clientEscMenuOptions: rB
        } = (0, aB.m)(["clientEscMenuOptions"]),
        IB = (0, yB.useRef)(null);
      IB.current || (IB.current = new AV(gB.gameBridge.latest("inventory").player));
      const SB = IB.current,
        {
          draggedDomRef: PB,
          draggedInfoRef: QB,
          specialItemRef: RB,
          hoverInfoDomRef: ZB,
          longHoldSplitInfoRef: XB,
          currHoveredIdx: WB,
          currHoveredDisplayInfo: hB,
          displayDraggedItemName: CB,
          forceRerenderIfVisible: GB,
          removeDraggedInfoRef: qB,
          checkDraggedItemConsistencyWithInven: xB,
          refreshDraggedAttributes: jB,
          swapSlots: AB,
          getPointerDownForIdx: bB,
          getPointerUpForIdx: nB,
          getSetHovering: eB,
          setCurrHoveredDisplayInfo: BT,
          moveFollowerTo: TT
        } = jV({
          show: dB,
          close: UB,
          canCraft: KB,
          variation: JB,
          inventoryItemsMoveable: FB,
          setCraftFlyAnims: NB
        });
      (0, yB.useEffect)((() => {
        const BB = !dB && null !== gB.gameBridge.latest("inventory").chest;
        if (BB && gB.gameBridge.send("closeChest", null), dB || (SB.clearMarks(), eB(null)(!1)), BB) {
          fd.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [dB]), (0, zB.c)("chestToggled", (BB => {
        if (BB ? VB() : dB && UB(), BB) {
          fd.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const dT = (0, qT.f)();
      (0, zB.c)("inventory", (BB => {
        let {
          player: TB
        } = BB;
        var VB, yB, pB;
        (SB.update(TB, !dB && dT.shown), RB.current) && (RB.current = (yB = RB.current, pB = null !== (VB = TB[RB.current.idx]) && void 0 !== VB ? VB : null, CV(yB, pB) ? (yB.attributes = pB.attributes, null !== pB.amount && yB.amount > pB.amount && (yB.amount = pB.amount), yB) : null));
        jB(), null !== WB && eB(WB)(!0), GB()
      })), (0, yB.useEffect)((() => (gB.gameBridge.send("setInventoryOpen", dB), () => {
        gB.gameBridge.send("setInventoryOpen", !1)
      })), [dB]);
      const VT = (BB, TB) => {
        if (BB === wd.f) return void(BB => {
          const TB = RB.current;
          if (!TB || null === (0, Md.k)(gB.gameBridge.latest("inventory"), TB.idx)) return;
          const dB = BB ? Math.max(TB.amount, 1) : 1,
            VB = TB.amount - dB;
          if (!gB.gameBridge.send("removeInventoryItem", {
              slot: TB.idx,
              amount: dB,
              drop: !0
            })) return;
          const yB = RB.current;
          yB && (yB.amount = Math.min(yB.amount, VB), yB.amount <= 0 && (RB.current = null)), GB()
        })(TB);
        const dB = null === BB ? null : (0, Md.k)(gB.gameBridge.latest("inventory"), BB);
        if (null !== dB) {
          var VB, yB, pB;
          const lB = TB && null !== (VB = dB.amount) && void 0 !== VB ? VB : 1;
          gB.gameBridge.send("removeInventoryItem", {
            slot: BB,
            amount: lB,
            drop: !0
          }), BB === (null === (yB = QB.current) || void 0 === yB ? void 0 : yB.idx) && (QB.current.amount -= lB, QB.current.amount <= 0 && qB(), GB()), BB === (null === (pB = RB.current) || void 0 === pB ? void 0 : pB.idx) && (RB.current = null, GB())
        }
      };
      (0, zB.c)("inventoryDropRequested", (BB => {
        dB && WB !== wd.f && VT(WB, BB)
      }));
      const yT = (BB, TB) => {
        let dB = TB;
        if (TB === wd.f) {
          if (!RB.current) return;
          dB = RB.current.idx
        }
        const VB = AB(BB, dB);
        if (VB && QB.current && (QB.current.idx === dB ? QB.current.idx = BB : QB.current.idx === BB && (QB.current.idx = dB)), VB && TB === wd.f) {
          const BB = (0, Md.k)(gB.gameBridge.latest("inventory"), dB);
          RB.current = BB ? {
            idx: dB,
            name: BB.name,
            attributes: BB.attributes,
            amount: BB.amount
          } : null
        }
        GB()
      };
      (0, zB.c)("numberKeyPressed", (BB => {
        null !== WB && dB && yT(BB - 1, WB)
      })), (0, yB.useEffect)((() => {
        dB || (RB.current = null, qB(), BT(null))
      }), [dB, qB, BT, RB]);
      const pT = RB.current;
      (0, yB.useEffect)((() => {
        WB === wd.f && eB(wd.f)(!0)
      }), [pT, WB, eB]);
      const lT = () => {
        xB(), jB(), GB()
      };
      (0, zB.c)("chestRefreshed", lT), (0, zB.c)("inventorySynced", lT);
      const [JT, YT] = (0, yB.useState)(new Map), gT = null !== (TB = JT.get(JB)) && void 0 !== TB ? TB : null, oT = (BB, TB) => {
        YT((dB => {
          const VB = dB.get(BB);
          return VB && VB.name === TB.name && VB.wo === TB.wo ? dB : new Map(dB).set(BB, TB)
        }))
      };
      (0, sB.e)("craftingRecipesEdited", (() => {
        GB()
      })), (0, sB.e)(yV.c, (BB => {
        let {
          variation: TB,
          itemName: dB
        } = BB;
        oT(TB, {
          name: dB,
          wo: 0
        })
      }));
      const [kT, LT] = (0, yB.useState)(null), [DT, uT] = (0, yB.useState)(null);
      (0, zB.c)("enchantingTableOpened", (BB => {
        let {
          position: TB,
          blockName: dB
        } = BB;
        LT(TB), uT(dB)
      }));
      const [HT, ET] = (0, yB.useState)(""), [vT, mT] = (0, yB.useState)(null);
      (0, yB.useEffect)((() => {
        dB && fB.current && (fB.current.scrollTop = wB.current)
      }), [dB]);
      return (BB => {
        const TB = (0, yB.useRef)(BB);
        TB.current = BB, (0, yB.useEffect)((() => {
          if (!BB.show) return;
          const dB = (BB, dB, VB, yB) => {
              const {
                getPointerDownForIdx: pB,
                getPointerUpForIdx: lB
              } = TB.current;
              pB(BB)(bV(dB, VB, yB)), lB(BB)(bV(dB, VB, yB))
            },
            VB = {
              primary: (BB, TB) => {
                dB(BB, TB, 0, !1)
              },
              secondary: (BB, TB) => {
                dB(BB, TB, 2, !1)
              },
              quickMove: (BB, TB) => {
                dB(BB, TB, 0, !0)
              },
              dropHeld: (BB, dB) => {
                TB.current.getPointerDownForIdx(wd.b)(bV(dB, BB ? 0 : 2, !1))
              },
              dropSlot: (BB, dB) => {
                TB.current.dropFromIdx(BB, dB)
              },
              swapWithHotbar: (BB, dB) => {
                TB.current.swapWithHotbar(BB, dB)
              },
              cancel: () => {
                TB.current.removeDraggedInfoRef()
              },
              isHolding: () => !!TB.current.draggedInfoRef.current,
              hasItemAt: BB => {
                const {
                  draggedInfoRef: dB,
                  specialItemRef: VB
                } = TB.current;
                if (BB === wd.f) return !!VB.current;
                const yB = (0, Md.k)(gB.gameBridge.latest("inventory"), BB);
                return !!yB && (0, Xd.e)(BB, (0, Md.d)(yB), [dB.current, VB.current]).shown
              },
              hover: (BB, dB) => {
                const {
                  moveFollowerTo: VB,
                  getSetHovering: yB
                } = TB.current;
                VB(dB.clientX, dB.clientY), yB(null !== BB && void 0 !== BB ? BB : void 0)(null !== BB, void 0, {
                  pageX: dB.clientX,
                  pageY: dB.clientY
                })
              },
              moveTo: BB => {
                TB.current.moveFollowerTo(BB.clientX, BB.clientY)
              },
              close: () => {
                TB.current.close()
              }
            };
          return (0, vd.n)(VB)
        }), [BB.show])
      })({
        show: dB,
        close: UB,
        draggedInfoRef: QB,
        specialItemRef: RB,
        getPointerDownForIdx: bB,
        getPointerUpForIdx: nB,
        getSetHovering: eB,
        moveFollowerTo: TT,
        removeDraggedInfoRef: qB,
        dropFromIdx: VT,
        swapWithHotbar: yT
      }), (0, yB.useEffect)((() => {
        DB.h.yH("inventoryDraggedItemUpdated", {
          draggedInfo: QB.current,
          specialItemInfo: RB.current,
          setHovered: eB,
          pointerDown: bB,
          pointerUp: nB,
          variation: KB ? JB : void 0,
          craftFlyAnims: iB
        })
      })), (0, oB.jsxs)(cB.c, {
        show: dB,
        style: {
          touchAction: dB ? "none" : void 0
        },
        children: [QB.current && (0, oB.jsx)(rd, {
          draggedInfo: QB.current,
          toAddRef: PB
        }), QB.current && CB && (0, oB.jsx)(Id, {
          className: "DraggedInvenItemName",
          displayInfo: xV(QB.current),
          domRef: null
        }), !QB.current && hB && (0, oB.jsx)(Id, {
          displayInfo: hB,
          domRef: ZB
        }), XB.current && QB.current && (0, oB.jsx)(cd, {
          info: XB.current,
          draggedInfo: QB.current
        }), iB.map((BB => (0, oB.jsx)(zd.c, {
          anim: BB,
          onComplete: tB
        }, BB.id))), (0, oB.jsx)(lB.b, {
          show: dB,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: UB,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: bB(wd.b),
          pointerUp: nB(wd.b),
          doGameplayStartStopOnShow: !0
        }), vB && (0, oB.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, oB.jsx)("div", {
            ref: kB,
            className: "InventoryAdOuter",
            children: (0, oB.jsx)(sd.b, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: kB
              },
              verticalAlign: "start",
              showing: dB && OB,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, oB.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, oB.jsxs)("div", {
              className: OT()("Inventory", {
                WithPanelButtons: HB,
                WideChestOpen: EB
              }),
              children: [(0, oB.jsx)("div", {
                className: "InventoryFiller"
              }), (0, oB.jsx)(td, {
                show: dB,
                buttons: uB
              }), (0, oB.jsxs)("div", {
                className: "InvenBody",
                children: [(0, oB.jsx)(QV, {
                  variation: JB,
                  canCraft: KB,
                  show: dB,
                  creativeMounted: mB,
                  specialItemRef: RB,
                  draggedInfo: QB.current,
                  getSetHovering: eB,
                  getPointerDownForIdx: bB,
                  getPointerUpForIdx: nB,
                  enchantingTablePosition: kT,
                  enchantingTableBlockName: DT,
                  selectedCraftable: gT,
                  dispatchSelectedCraftable: BB => {
                    oT(JB, BB)
                  },
                  creativeScrollDiv: fB,
                  creativeSearchVal: HT,
                  setCreativeSearchVal: ET,
                  creativeCategory: vT,
                  setCreativeCategory: mT,
                  onCraft: function(BB, TB) {
                    let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (xB(), (BB || dB.length > 0) && NB((TB => {
                        const VB = [...TB],
                          yB = TB.filter((BB => "ingredient" === BB.kind)).length;
                        for (const BB of dB.slice(0, Math.max(0, 24 - yB))) VB.push({
                          id: (0, zd.g)(),
                          ...BB,
                          to: BB.to
                        });
                        return BB && VB.push({
                          id: (0, zd.g)(),
                          ...BB,
                          to: (0, Md.g)(BB.jg)
                        }), VB
                      })), null !== TB) {
                      var VB;
                      const BB = gB.gameBridge.latest("inventory");
                      (0, MB.Cb)(null === (VB = (0, Md.k)(BB, TB)) || void 0 === VB ? void 0 : VB.name) ? bB(TB)({
                        button: 0,
                        shiftKey: !0
                      }): AB(TB, BB.selectedSlot)
                    }
                  }
                }), (0, oB.jsx)(ZV, {
                  show: dB,
                  draggedInfo: QB.current,
                  specialItemInfo: RB.current,
                  craftFlyAnims: iB,
                  getSetHovering: eB,
                  getPointerDownForIdx: bB,
                  getPointerUpForIdx: nB,
                  variation: JB,
                  canCraft: KB,
                  isNewSlot: BB => rB.showNewItemIndicator && SB.isNew(BB)
                })]
              })]
            }), (0, oB.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, oB.jsx)("div", {
                ref: LB,
                className: "InventoryAd",
                children: (0, oB.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var By = dB(1304),
      Ty = dB(138);
    const dy = (0, yB.memo)((function(BB) {
      let {
        show: TB,
        onOpen: dB,
        onClose: VB
      } = BB;
      const pB = (0, yB.useRef)(0),
        JB = () => (0, By.e)() && !(0, By.l)() && pB.current <= 2;
      TB = JB() && TB;
      const YB = () => {
        pB.current++, VB()
      };
      (0, sB.e)("ctrlCrouchWithoutFullscreen", (() => {
        JB() && dB()
      })), (0, sB.e)("displaymodeFullscreenChange", (BB => {
        TB && BB && YB()
      }));
      const gB = "crazygames" === Ty.v;
      return (0, oB.jsx)(lB.b, {
        close: YB,
        escDoesExit: !0,
        show: TB,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, oB.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, oB.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), gB && (0, oB.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, oB.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, oB.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!gB && (0, oB.jsx)(OB.k, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, By.r)(), YB()
              },
              children: (0, oB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, oB.jsx)(OB.K, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                YB()
              },
              children: (0, oB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Vy = dB(3107);
    dB(3109);
    const yy = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(""), [YB, kB] = (0, yB.useState)(""), [LB, OB] = (0, yB.useState)(null), [DB, uB] = (0, yB.useState)(null), HB = (0, zB.i)("hiddenPlayerNames"), EB = {
          kind: "worldCodeLine",
          onSubmit: (BB, TB) => {
            VB(), gB.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: DB,
              yl: BB,
              details: TB
            })
          }
        }, vB = {
          kind: "player",
          shownPlayerName: (0, TT.g)(pB, HB),
          onSubmit: (BB, TB) => {
            VB(), (0, Vy.c)({
              playerId: YB,
              playerName: pB,
              chatMsgId: DB,
              policyId: BB,
              details: TB
            })
          }
        };
        return (0, sB.e)("OpenReportMenu", (BB => {
          let {
            playerEId: TB,
            playerName: VB,
            Jo: yB,
            serverChatMsgId: pB
          } = BB;
          kB(TB), JB(VB), OB(yB), uB(pB), dB()
        })), (0, oB.jsx)(lB.b, {
          show: TB,
          close: VB,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, oB.jsx)("div", {
            className: "ReportMenu",
            children: TB && (0, oB.jsx)(Vy.b, {
              reported: null === YB ? EB : vB,
              chatMessage: LB,
              inGame: !0,
              onCancel: VB
            })
          })
        })
      })),
      py = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(null), [YB, kB] = (0, yB.useState)(0);
        (0, sB.e)("OpenDiscordReportBox", (BB => {
          gB.gameBridge.send("requestDiscordReportKey", BB), kB(0), dB()
        }));
        return (0, sB.e)("setDiscordReportKey", (BB => {
          JB(BB)
        })), (0, oB.jsx)(lB.b, {
          show: TB,
          close: () => {
            VB(), JB(null), kB(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, oB.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, oB.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, oB.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, oB.jsx)("br", {}), (0, oB.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, oB.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, oB.jsx)("br", {}), "2. Copy the Report Key below", (0, oB.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, oB.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, oB.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, oB.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== pB && void 0 !== pB ? pB : "Loading report key..."
              }), (0, oB.jsx)(OB.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(pB).catch((BB => {
                    console.error("Failed to copy report key:", BB)
                  })), kB(Date.now())
                },
                disabled: Date.now() - YB < 1e3 || !pB,
                children: Date.now() - YB < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var ly = dB(1173);
    const Jy = {
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
      Yy = (0, yB.memo)((function(BB) {
        let {
          show: TB,
          onOpen: dB,
          onClose: VB
        } = BB;
        const [pB, JB] = (0, yB.useState)(null), YB = (0, yB.useRef)(0), kB = (0, yB.useRef)(null), {
          t: LB
        } = (0, jB.z)();
        (0, sB.e)("EditCustomLobbyBlock", (BB => {
          let {
            pos: TB
          } = BB;
          JB(TB), null !== TB && dB(), kB.current.scrollTo(0, YB.current)
        }));
        const OB = BB => {
          gB.gameBridge.send("setCustomLobbyBlock", {
            pos: pB,
            blockName: BB
          }), VB()
        };
        return (0, oB.jsx)(lB.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: VB,
          escDoesExit: !0,
          show: TB,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, oB.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: kB,
            onScroll: () => {
              YB.current = kB.current.scrollTop
            },
            children: (0, oB.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(Jy).map((BB => {
                let [TB, dB] = BB;
                return (0, oB.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, oB.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: LB(TB)
                  }), (0, oB.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(dB).map((BB => {
                      let [TB, {
                        tooltip: dB,
                        blocks: VB
                      }] = BB;
                      return (0, oB.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, oB.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [LB(TB), (0, oB.jsx)(qB.e, {
                            hoverInfo: LB(dB),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, oB.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: VB.map((BB => (0, oB.jsx)(gy, {
                            blockName: BB,
                            selectBlock: OB
                          }, BB)))
                        })]
                      }, TB)
                    }))
                  })]
                }, TB)
              }))
            })
          })
        })
      })),
      gy = (0, yB.memo)((function(BB) {
        var TB;
        let {
          blockName: dB,
          selectBlock: VB
        } = BB;
        const yB = (0, mV.b)(dB),
          pB = null !== (TB = void 0 === yB ? void 0 : (0, vV.displayNameOf)(yB)) && void 0 !== TB ? TB : dB,
          lB = void 0 === yB ? void 0 : (0, vV.descriptionOf)(yB);
        return (0, oB.jsx)(qB.h, {
          tooltipInner: (0, oB.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, oB.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, oB.jsx)(fB.e, {
                text: pB
              })
            }), lB && (0, oB.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, oB.jsx)(fB.e, {
                text: lB
              })
            })]
          }),
          children: (0, oB.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => VB(dB),
            children: (0, oB.jsx)(Nd.c, {
              itemName: dB,
              amount: 1
            })
          })
        }, dB)
      }));
    var oy = dB(2488),
      ky = dB(3706),
      Ly = dB(35817);

    function Oy() {
      const BB = (0, zB.i)("itemInfo");
      return (0, yB.useMemo)((() => function(BB) {
        return {
          getDefaultItemStat(TB, dB) {
            var VB;
            const yB = BB[TB];
            return "description" === dB ? null === yB || void 0 === yB ? void 0 : yB.description : null !== (VB = null === yB || void 0 === yB ? void 0 : yB.displayName) && void 0 !== VB ? VB : TB
          }
        }
      }(BB)), [BB])
    }
    const Dy = (0, yB.memo)((function(BB) {
        var TB, dB, VB, pB, JB, YB, gB, kB, LB, OB, DB, uB, EB, vB, mB, iB, NB, tB, fB, MB, zB, wB, UB;
        let {
          togglePointerLock: FB,
          show: KB,
          onOpen: rB,
          onClose: IB
        } = BB;
        const {
          t: cB
        } = (0, jB.z)(), SB = Oy(), PB = (0, yB.useRef)(null), QB = (0, yB.useRef)(ky.e.MobHungerLevel.Hungry), RB = (0, yB.useRef)(null), aB = (0, oy.b)(), ZB = (0, yB.useRef)(null), XB = (0, yB.useRef)(null), WB = PB.current;
        (0, yB.useEffect)((() => {
          if (!KB) return;
          const BB = Ly.e.openPet(ZB.current);
          return XB.current = BB, () => {
            BB.close(), XB.current = null
          }
        }), [KB]), (0, yB.useEffect)((() => {
          KB && WB && XB.current.show(function(BB) {
            var TB;
            let {
              mobType: dB,
              mobSettings: VB
            } = BB;
            return {
              mobType: dB,
              variation: null !== (TB = VB.variation) && void 0 !== TB ? TB : "default",
              metaInfo: VB.metaInfo,
              tamed: !(0, rV.M)(VB.ownerDbId)
            }
          }(WB))
        }), [KB, WB]), (0, yB.useEffect)((() => {
          const BB = () => {
            var BB;
            const TB = ky.e.getMobHungerLevel(null === (BB = PB.current) || void 0 === BB ? void 0 : BB.mobSettings.petInfo.lastFedAt);
            if (TB !== QB.current && (QB.current = TB, aB()), RB.current) {
              var dB;
              const BB = Date.now(),
                TB = ky.e.getNextStateAt(null === (dB = PB.current) || void 0 === dB ? void 0 : dB.mobSettings.petInfo.lastFedAt);
              let VB = Math.floor((TB - BB) / 1e3),
                yB = "";
              if (VB > 3600) {
                yB += Math.floor(VB / 60 / 60).toString().padStart(2, "0"), yB += ":", VB %= 3600
              }
              const pB = VB % 60;
              yB += Math.floor(VB / 60).toString().padStart(2, "0"), yB += ":", yB += pB.toString().padStart(2, "0"), RB.current.textContent = yB
            }
          };
          BB();
          const TB = setInterval(BB, 250);
          return () => {
            clearInterval(TB)
          }
        }), [WB, aB]), (0, sB.e)("showPetUi", (BB => {
          let {
            mobType: TB,
            mobSettings: dB
          } = BB;
          PB.current = {
            mobType: TB,
            mobSettings: dB
          }, KB || rB()
        }));
        const hB = null === (TB = PB.current) || void 0 === TB ? void 0 : TB.mobSettings.health,
          CB = null === (dB = PB.current) || void 0 === dB ? void 0 : dB.mobSettings.maxHealth,
          GB = ky.e.getFriendshipLevelInfo(null !== (VB = null === (pB = PB.current) || void 0 === pB ? void 0 : pB.mobSettings.petInfo.friendshipPoints) && void 0 !== VB ? VB : 0);
        return (0, oB.jsx)(lB.b, {
          className: "PetUIOuter",
          close: IB,
          escDoesExit: !0,
          show: KB,
          togglePointerLock: FB,
          forcePointerUnlock: KB,
          globallyUniqueKey: "PetUI",
          children: (0, oB.jsx)("div", {
            className: "PetUI",
            children: (0, oB.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, oB.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, oB.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (JB = null === (YB = PB.current) || void 0 === YB ? void 0 : YB.mobSettings.name) && void 0 !== JB ? JB : "Your Pet"
                }), (0, oB.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: ZB
                })]
              }), (0, oB.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, rV.M)(null === (gB = PB.current) || void 0 === gB ? void 0 : gB.mobSettings.petInfo.friendshipPoints) && (0, oB.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, oB.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: cB("mobAiPlugin:friendshipTitle")
                  }), (0, oB.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: ky.e.getIconsFromFriendshipPoints(null !== (kB = PB.current.mobSettings.petInfo.friendshipPoints) && void 0 !== kB ? kB : 0).map(((BB, TB) => (0, oB.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, TB)))
                  }), (0, oB.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, oB.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, oB.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${GB.totalPointsForNextLevel>0?Math.max(GB.pointsIntoCurrentLevel/GB.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, oB.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: GB.totalPointsForNextLevel > 0 ? ` ${Math.ceil(GB.pointsIntoCurrentLevel)}/${Math.ceil(GB.totalPointsForNextLevel)}` : Math.ceil(GB.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, oB.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, oB.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: cB("mobAiPlugin:hungerTitle")
                  }), (0, oB.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: ky.e.hungerLevelIcons[QB.current].map(((BB, TB) => (0, oB.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, TB)))
                  }), (0, oB.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [cB(ky.e.hungerLevelTranslations[QB.current].translationKey), QB.current !== ky.e.MobHungerLevel.Starving && !(0, rV.M)(null === (LB = PB.current) || void 0 === LB ? void 0 : LB.mobSettings.petInfo.lastFedAt) && (0, oB.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [cB("mobAiPlugin:nextFeedIn", {
                        state: cB(ky.e.hungerLevelTranslations[QB.current + 1].translationKey)
                      }), ":", " ", (0, oB.jsx)("span", {
                        ref: RB
                      })]
                    })]
                  })]
                }), (0, oB.jsx)(qB.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cB("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, oB.jsxs)("div", {
                    className: OT()("PetUIQuickStatsItem", {
                      Disabled: (0, rV.M)(hB) || (0, rV.M)(CB)
                    }),
                    children: [(0, oB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, oB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, rV.M)(hB) || (0, rV.M)(CB) ? "" : (0, oB.jsxs)(oB.Fragment, {
                        children: [Math.ceil(hB), (0, oB.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(CB)]
                        })]
                      })
                    })]
                  })
                }), (0, oB.jsx)(qB.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cB("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, oB.jsxs)("div", {
                    className: OT()("PetUIQuickStatsItem", {
                      Disabled: (0, rV.M)(null === (OB = PB.current) || void 0 === OB ? void 0 : OB.mobSettings.attackDamage) || PB.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, oB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, oB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (DB = PB.current) || void 0 === DB ? void 0 : DB.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, oB.jsx)(qB.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cB("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, oB.jsxs)("div", {
                    className: OT()("PetUIQuickStatsItem", {
                      Disabled: (0, rV.M)(null === (uB = PB.current) || void 0 === uB ? void 0 : uB.mobSettings.secondaryAttackDamage) || PB.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, oB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, oB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (EB = PB.current) || void 0 === EB ? void 0 : EB.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, oB.jsx)(qB.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cB("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, oB.jsxs)("div", {
                    className: OT()("PetUIQuickStatsItem", {
                      Disabled: (0, rV.M)(null === (vB = PB.current) || void 0 === vB ? void 0 : vB.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, oB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, oB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (mB = null === (iB = PB.current) || void 0 === iB || null === (NB = iB.mobSettings.baseRunningSpeed) || void 0 === NB ? void 0 : NB.toFixed(2)) && void 0 !== mB ? mB : ""
                    })]
                  })
                }), (0, oB.jsx)(qB.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, oB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: cB("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, oB.jsxs)("div", {
                    className: OT()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (tB = PB.current) || void 0 === tB ? void 0 : tB.mobSettings.metaInfo)
                    }),
                    children: [(0, oB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, oB.jsx)(Nd.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, oB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (fB = PB.current) || void 0 === fB ? void 0 : fB.mobSettings.metaInfo) ? (0, oB.jsx)(HB.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, rV.M)(null === (MB = PB.current) || void 0 === MB ? void 0 : MB.mobSettings.tameInfo) && (0, oB.jsxs)(oB.Fragment, {
                  children: [(0, oB.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, oB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oB.jsx)(Hy, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: ky.e.feedTextColours[ky.e.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, oB.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: PB.current.mobSettings.petInfo.superlikedFoodKnown ? (0, oB.jsx)(uy, {
                            food: PB.current.mobSettings.petInfo.superlikedFood
                          }) : (0, oB.jsx)(Hy, {
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
                    }), (0, oB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oB.jsx)(Hy, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: ky.e.feedTextColours[ky.e.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (zB = PB.current.mobSettings.tameInfo.likedFoods) || void 0 === zB ? void 0 : zB.filter((BB => !PB.current.mobSettings.petInfo.superlikedFoodKnown || BB !== PB.current.mobSettings.petInfo.superlikedFood)).map((BB => (0, oB.jsx)(uy, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, oB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oB.jsx)(Hy, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: ky.e.feedTextColours[ky.e.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (wB = PB.current.mobSettings.tameInfo.neutralFoods) || void 0 === wB ? void 0 : wB.map((BB => (0, oB.jsx)(uy, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, oB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, oB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, oB.jsx)(Hy, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: ky.e.feedTextColours[ky.e.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, oB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (UB = PB.current.mobSettings.tameInfo.dislikedFoods) || void 0 === UB ? void 0 : UB.map((BB => (0, oB.jsx)(uy, {
                          food: BB
                        }, BB)))
                      })]
                    })]
                  }), PB.current.mobSettings.tameInfo.levelUpBonuses && (0, oB.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: ky.e.MAX_LEVEL + 1
                    }).map(((BB, TB) => {
                      const dB = TB;
                      if (0 === dB) return null;
                      const VB = PB.current.mobSettings.tameInfo.levelUpBonuses[dB],
                        yB = ky.e.getBonusDisplayInfo(SB, PB.current.mobSettings, PB.current.mobType, VB);
                      return (0, oB.jsxs)("div", {
                        className: OT()("PetUIFeedDropContainer", {
                          Selected: dB === ky.e.getFriendshipLevelInfo(PB.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, oB.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: dB
                          }).map(((BB, TB) => (0, oB.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, oB.jsx)(Nd.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${dB}-${TB}`)))
                        }), (0, oB.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: yB && (0, oB.jsx)(Hy, {
                            icon: yB.icon,
                            displayName: yB.displayName,
                            description: yB.description
                          })
                        })]
                      }, dB)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      uy = (0, yB.memo)((function(BB) {
        let {
          food: TB,
          includeDescription: dB = !1
        } = BB;
        const VB = Oy(),
          yB = VB.getDefaultItemStat(TB, "displayName"),
          pB = VB.getDefaultItemStat(TB, "description");
        return (0, oB.jsx)(Hy, {
          icon: TB,
          displayName: yB,
          description: dB ? pB : null
        })
      })),
      Hy = (0, yB.memo)((function(BB) {
        let {
          icon: TB,
          displayName: dB,
          description: VB,
          tintColor: yB,
          className: pB = "PetUIFoodItem"
        } = BB;
        return (0, oB.jsx)(qB.h, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, oB.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, oB.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, oB.jsx)(fB.e, {
                text: dB
              })
            }), VB && (0, oB.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, oB.jsx)(fB.e, {
                text: VB
              })
            })]
          }),
          children: (0, oB.jsx)("div", {
            className: pB,
            children: (0, oB.jsx)(Nd.c, {
              itemName: TB,
              amount: 1,
              tintColor: yB
            })
          })
        })
      }));
    var Ey = dB(3249),
      vy = dB(1020),
      my = dB(1117),
      iy = dB(35832),
      Ny = dB(35826),
      ty = dB(900),
      fy = dB(1242),
      sy = dB(1235),
      My = dB(2085);

    function zy(BB) {
      let {
        peers: TB
      } = BB;
      const [dB, VB] = (0, yB.useState)(null), pB = (0, zB.i)("players");
      return (0, oB.jsx)("div", {
        className: "CodeEditorPresence",
        children: TB.map((BB => {
          var TB, yB;
          const lB = null !== (TB = null === (yB = pB.byId[BB.playerId]) || void 0 === yB ? void 0 : yB.cosmetics) && void 0 !== TB ? TB : {};
          return (0, oB.jsxs)("div", {
            className: OT()("PresenceIcon", {
              Viewer: !BB.isEditor
            }),
            style: {
              backgroundColor: BB.colour
            },
            onMouseEnter: () => {
              VB(BB.playerId)
            },
            onMouseLeave: () => {
              VB(null)
            },
            children: [(0, oB.jsx)(My.e, {
              cosmetics: lB
            }), dB === BB.playerId && (0, oB.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: BB.colour
              },
              children: BB.playerName
            })]
          }, BB.playerId)
        }))
      })
    }
    var wy = dB(597),
      Uy = dB(35823),
      Fy = dB(35551),
      Ky = dB(35841);

    function ry(BB) {
      const TB = BB.split("/"),
        dB = [];
      for (let VB = 1; VB < TB.length; VB++) dB.push(TB.slice(0, VB).join("/"));
      return dB
    }

    function Iy(BB) {
      return BB.slice(BB.lastIndexOf("/") + 1)
    }
    const cy = (0, yB.memo)((function(BB) {
      var TB;
      let {
        files: dB,
        activePath: VB,
        canEdit: pB,
        directoryLinked: lB,
        pluginNames: JB,
        activePluginName: YB,
        activePluginFile: gB,
        onSelect: kB,
        onSelectPlugin: LB,
        onCreate: DB,
        onRename: uB,
        onRenameFolder: EB,
        onDelete: vB,
        onToggleDirectorySync: mB,
        schematics: iB,
        onManageSchematic: NB
      } = BB;
      const {
        t: tB
      } = (0, jB.z)(), fB = null !== (TB = (0, Ny.c)(dB)) && void 0 !== TB ? TB : my.f, sB = Object.keys(dB), [MB, zB] = (0, yB.useState)((() => new Set)), wB = function(BB, TB, dB) {
        const VB = {
          folders: new Map,
          files: []
        };
        for (const lB of BB) {
          if (lB === TB) continue;
          let BB = VB;
          for (const TB of ry(lB)) {
            let dB = BB.folders.get(TB);
            dB || (dB = {
              folders: new Map,
              files: []
            }, BB.folders.set(TB, dB)), BB = dB
          }
          BB.files.push(lB)
        }
        const yB = [];
        BB.includes(TB) && yB.push({
          kind: "file",
          path: TB,
          name: Iy(TB),
          depth: 0
        });
        const pB = (BB, TB) => {
          const VB = [...BB.folders.entries()].sort(((BB, TB) => {
            let [dB] = BB, [VB] = TB;
            return dB.localeCompare(VB)
          }));
          for (const [lB, JB] of VB) {
            const BB = dB.has(lB);
            yB.push({
              kind: "folder",
              path: lB,
              name: Iy(lB),
              depth: TB,
              collapsed: BB
            }), BB || pB(JB, TB + 1)
          }
          BB.files.sort(((BB, TB) => BB.localeCompare(TB)));
          for (const dB of BB.files) yB.push({
            kind: "file",
            path: dB,
            name: Iy(dB),
            depth: TB
          })
        };
        return pB(VB, 0), yB
      }(sB, fB, MB);
      (0, yB.useEffect)((() => {
        zB((BB => {
          const TB = new Set(BB);
          let dB = !1;
          for (const yB of ry(VB)) dB = TB.delete(yB) || dB;
          return dB ? TB : BB
        }))
      }), [VB]);
      const UB = sB.length >= yd.z,
        FB = (BB, TB) => {
          if (BB.length > iy.z) return `Path must be at most ${iy.z} characters`;
          if (!(0, iy.v)(BB)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === BB) return "index.d.ts cannot be the world-code entry";
          const VB = !!TB && (0, Ny.d)(TB, BB);
          if (TB && (0, Ny.h)(TB) && !VB) return `Cannot rename ${TB} (only swapping ${my.f} and ${my.i} is allowed)`;
          if (BB in dB) return "A file with that path already exists";
          if ((0, Ny.h)(BB) && !VB) {
            if ((BB === my.f ? my.i : my.f) in dB) return `World code cannot have both ${my.f} and ${my.i}`
          }
          return null
        },
        KB = BB => {
          sy.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === BB ? void 0 : `${BB}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: BB => FB(BB)
          }).getResult().then((BB => {
            "notificationTornDown" !== BB && null !== BB && "submit" === BB.type && DB(BB.value)
          }))
        },
        rB = BB => {
          sy.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: TB => TB === BB ? "That is already the file's path" : FB(TB, BB)
          }).getResult().then((TB => {
            "notificationTornDown" !== TB && null !== TB && "submit" === TB.type && uB(BB, TB.value)
          }))
        },
        IB = BB => {
          const TB = BB => BB.replace(/\/+$/, "");
          sy.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: dB => {
              const VB = TB(dB);
              if (VB === BB) return "That is already the folder's path";
              for (const [TB, yB] of(0, Ny.k)(sB, BB, VB)) {
                const BB = FB(yB, TB);
                if (null !== BB) return BB
              }
              return null
            }
          }).getResult().then((dB => {
            "notificationTornDown" !== dB && null !== dB && "submit" === dB.type && EB(BB, TB(dB.value))
          }))
        },
        cB = BB => {
          sy.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: BB
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((TB => {
            !0 === TB && vB(BB)
          }))
        };
      return (0, oB.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, oB.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, oB.jsx)("span", {
            children: "Files"
          }), pB && !UB && (0, oB.jsx)(OB.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              KB()
            },
            children: (0, oB.jsx)(HB.e, {
              name: "plus"
            })
          })]
        }), (0, oB.jsxs)("div", {
          className: "FileTreeList",
          children: [wB.map((BB => {
            const TB = BB.path;
            if ("folder" === BB.kind) return (0, oB.jsx)(Qy, {
              path: TB,
              name: BB.name,
              depth: BB.depth,
              collapsed: BB.collapsed,
              onToggle: () => {
                var BB;
                BB = TB, zB((TB => {
                  const dB = new Set(TB);
                  return dB.delete(BB) || dB.add(BB), dB
                }))
              },
              canCreate: pB && !UB,
              canRename: pB,
              onCreate: KB,
              onRename: IB
            }, `folder:${TB}`);
            const yB = (0, Ny.h)(TB),
              lB = my.f in dB && my.i in dB,
              JB = !yB || lB,
              gB = null === YB && TB === VB;
            return (0, oB.jsx)(ay, {
              path: TB,
              label: BB.name,
              depth: BB.depth,
              isActive: gB,
              canRename: pB,
              onSelect: kB,
              onRename: rB,
              onDelete: cB,
              canDelete: JB && pB
            }, TB)
          })), (0, oB.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, oB.jsxs)("span", {
              children: ["Schematics (", Object.keys(iB).length, "/", Ky.f, ")"]
            }), pB && (0, oB.jsx)(OB.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(iB).length >= Ky.f,
              onClick: () => {
                NB("")
              },
              children: (0, oB.jsx)(HB.e, {
                name: "plus"
              })
            })]
          }), Object.keys(iB).sort().map((BB => (0, oB.jsx)(ay, {
            path: BB,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: NB
          }, BB))), JB.length > 0 && (0, oB.jsxs)(oB.Fragment, {
            children: [(0, oB.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, oB.jsx)("span", {
                children: "Plugins"
              })
            }), JB.map((BB => {
              var TB;
              const dB = Uy.f[BB],
                VB = Object.keys(null !== (TB = null === dB || void 0 === dB ? void 0 : dB.files) && void 0 !== TB ? TB : {
                  "index.ts": ""
                }).sort(((BB, TB) => "index.ts" === BB ? -1 : "index.ts" === TB ? 1 : BB.localeCompare(TB)));
              return (0, oB.jsxs)("div", {
                children: [(0, oB.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, Ny.t)(BB)
                }), VB.map((TB => (0, oB.jsx)(ay, {
                  path: TB,
                  nested: !0,
                  isActive: YB === BB && gB === TB,
                  canRename: !1,
                  onSelect: () => {
                    LB(BB, TB)
                  },
                  canDelete: !1
                }, TB)))]
              }, BB)
            }))]
          })]
        }), (0, oB.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, oB.jsx)(OB.d, {
            className: "FileTreeFooterButton",
            onClick: mB,
            children: tB(lB ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function Sy(BB) {
      return BB > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": BB
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function Py(BB) {
      let {
        depth: TB
      } = BB;
      return (0, oB.jsx)(oB.Fragment, {
        children: Array.from({
          length: TB
        }, ((BB, TB) => (0, oB.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": TB
          }
        }, TB)))
      })
    }

    function Qy(BB) {
      let {
        path: TB,
        name: dB,
        depth: VB,
        collapsed: yB,
        onToggle: pB,
        canCreate: lB,
        canRename: JB,
        onCreate: YB,
        onRename: gB
      } = BB;
      const kB = [];
      lB && kB.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          YB(TB)
        }
      }), JB && kB.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          gB(TB)
        }
      });
      const LB = Sy(VB);
      return (0, oB.jsxs)("div", {
        className: OT()("FileTreeItem FileTreeFolder", LB.className),
        style: LB.style,
        children: [(0, oB.jsx)(Py, {
          depth: VB
        }), (0, oB.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !yB,
          onClick: pB,
          children: [(0, oB.jsx)(HB.e, {
            className: "FileTreeFolderCaret",
            name: yB ? "caret-right" : "caret-down"
          }), (0, oB.jsx)(HB.e, {
            className: "FileTreeFolderIcon",
            name: yB ? "folder" : "folder-open"
          }), dB]
        }), (0, oB.jsx)(Ry, {
          path: TB,
          actions: kB
        })]
      })
    }

    function Ry(BB) {
      let {
        path: TB,
        actions: dB
      } = BB;
      const VB = (0, yB.useRef)(null);
      return 0 === dB.length ? null : (0, oB.jsxs)("div", {
        ref: VB,
        className: "FileTreeItemActions",
        children: [(0, oB.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${TB}`,
          children: (0, oB.jsx)(HB.e, {
            name: "ellipsis"
          })
        }), (0, oB.jsx)(Fy.b, {
          triggerElementRef: VB,
          options: dB
        })]
      })
    }

    function ay(BB) {
      let {
        path: TB,
        label: dB = TB,
        depth: VB = 0,
        isActive: yB,
        canRename: pB,
        onSelect: lB,
        onRename: JB,
        onDelete: YB,
        canDelete: gB,
        nested: kB
      } = BB;
      const LB = [];
      pB && JB && LB.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          JB(TB)
        }
      }), gB && YB && LB.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          YB(TB)
        }
      });
      const OB = Sy(VB);
      return (0, oB.jsxs)("div", {
        className: OT()("FileTreeItem", OB.className, {
          Active: yB,
          Nested: kB
        }),
        style: OB.style,
        children: [(0, oB.jsx)(Py, {
          depth: VB
        }), (0, oB.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: dB === TB ? void 0 : TB,
          onClick: () => {
            lB(TB)
          },
          children: dB
        }), (0, oB.jsx)(Ry, {
          path: TB,
          actions: LB
        })]
      })
    }
    async function Zy(BB) {
      const TB = (0, Ny.c)(BB);
      if (!TB || "" === BB[TB].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: VB
      } = await Promise.all([dB.e(279), dB.e(280)]).then((() => dB(40218)));
      return (0, Uy.c)(VB(BB))
    }
    var Xy = dB(35848);

    function Wy(BB, TB) {
      const dB = Object.keys(BB),
        VB = Object.keys(TB);
      if (dB.length !== VB.length) return !1;
      for (const yB of dB)
        if (!(yB in TB) || BB[yB] !== TB[yB]) return !1;
      return !0
    }

    function hy(BB, TB) {
      const dB = [],
        VB = [],
        yB = [];
      for (const pB of Object.keys(TB)) pB in BB ? BB[pB] !== TB[pB] && yB.push(pB) : dB.push(pB);
      for (const pB of Object.keys(BB)) pB in TB || VB.push(pB);
      return dB.sort(), VB.sort(), yB.sort(), {
        creates: dB,
        deletes: VB,
        updates: yB
      }
    }

    function Cy(BB, TB) {
      var dB;
      const VB = {
          ...BB
        },
        yB = (0, Ny.c)(TB),
        pB = (0, Ny.c)(VB);
      if (my.f in VB && my.i in VB) {
        const BB = null !== yB && void 0 !== yB ? yB : my.i,
          dB = BB === my.f ? my.i : my.f;
        var lB;
        if (!(BB in VB)) VB[BB] = null !== (lB = TB[BB]) && void 0 !== lB ? lB : "";
        return delete VB[dB], VB
      }
      var JB;
      return yB && !(yB in VB) ? (pB || (VB[yB] = null !== (JB = TB[yB]) && void 0 !== JB ? JB : ""), VB) : (pB || yB || (VB[my.f] = null !== (dB = VB[my.f]) && void 0 !== dB ? dB : "", delete VB[my.i]), VB)
    }

    function Gy(BB, TB) {
      const dB = (0, Ny.c)(TB),
        VB = my.f in TB && my.i in TB;
      return BB.filter((BB => !(0, Ny.h)(BB) || (!!VB || dB !== BB)))
    }
    async function qy(BB, TB, VB) {
      const yB = BB.getLobbyFiles(),
        pB = (0, yd.i)(VB, (0, Ny.m)(yB, TB)),
        lB = await BB.ensureJoined(TB),
        JB = (0, iy.A)(lB.docKey);
      if (lB.doc === pB) return;
      for (let dB = 0; dB < 100; dB++) {
        const dB = BB.getCollabSnapshot();
        if (dB && (0, iy.A)(dB.docKey) === JB && BB.getActivePath() === TB) {
          if (BB.replaceActiveDoc(JB, pB)) return;
          await (0, rV.T)(40)
        } else await (0, rV.T)(40)
      }
      const {
        ChangeSet: YB
      } = await dB.e(275).then((() => dB(40036))), oB = BB.getCollabSnapshot(), kB = oB && (0, iy.A)(oB.docKey) === JB ? oB : lB;
      await async function(BB, TB, dB, VB) {
        const yB = BB.of({
            from: 0,
            to: dB.length,
            insert: VB
          }, dB.length),
          pB = JSON.stringify([{
            clientID: TB.clientID,
            changes: yB.toJSON()
          }]),
          lB = (0, iy.A)(TB.docKey);
        pB.length <= iy.i ? gB.gameBridge.send("sendCodeCollab", {
          Vp: iy.d.Push,
          yp: lB,
          lp: TB.version,
          kp: pB
        }) : await (0, vy.postJsonWithMetricsCookiesAndJsonResponse)(`${TB.httpConfig.gsUrl}/code/collab-push`, Ey.m["collab-push"].toBuffer({
          gameNameWithVariation: TB.httpConfig.gameNameWithVariation,
          lobbyName: TB.httpConfig.lobbyName,
          docKey: lB,
          version: TB.version,
          updates: pB
        }), {
          retries: 0
        })
      }(YB, kB, kB.doc, pB)
    }
    class xy {
      constructor(BB) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = BB
      }
      async writeLobbyFiles(BB) {
        const TB = {
            ...this.bridge.getLobbyFiles()
          },
          dB = {
            ...TB
          };
        for (const {
            path: pB,
            text: lB
          }
          of BB) dB[pB] = lB;
        if (!BB.every((BB => {
            let {
              path: TB,
              text: VB
            } = BB;
            return (0, yd.i)(VB, (0, Ny.m)(dB, TB)) === VB
          }))) return !1;
        const VB = [];
        try {
          for (const {
              path: TB,
              text: dB
            }
            of BB) VB.push(TB), TB in this.bridge.getLobbyFiles() || (this.bridge.createFile(TB, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(TB, !0)), await qy(this.bridge, TB, dB)
        } catch (yB) {
          for (const BB of VB) BB in TB ? await qy(this.bridge, BB, TB[BB]).catch((TB => {
            console.error("World Code AI: couldn't put back", BB, TB)
          })) : this.bridge.deleteFile(BB);
          throw yB
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const BB = await (0, Xy.w)(this.bridge.getStorageKey());
        return !!BB && (this.handle = BB, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(BB), !0)
      }
      async unlinkFolder() {
        const BB = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, Xy.b)(BB), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const BB = this.bridge.getStorageKey(),
          TB = await (0, Xy.t)(BB);
        return !!TB && (!!await (0, Xy.j)(TB, "readwrite") && (this.handle = TB, this.linked = !0, await (0, Xy.M)(BB, TB), await this.scaffoldLocalTypes(TB), !0))
      }
      scaffoldLocalTypes(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const VB = (await Zy(TB)).map((BB => Uy.f[BB])),
              yB = VB.map((BB => {
                var TB;
                return `${BB.name}:${Object.keys(null!==(TB=null===BB||void 0===BB?void 0:BB.files)&&void 0!==TB?TB:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === yB) return;
            const {
              ensureLocalBloxdTypes: pB
            } = await Promise.all([dB.e(75), dB.e(277), dB.e(282)]).then((() => dB(40222)));
            await pB(BB, VB), this.scaffoldedPluginNamesKey = yB
          } catch (VB) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", VB)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(BB) {
        this.handle && await this.scaffoldLocalTypes(this.handle, BB), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(BB)
      }
      async onDocTextChanged(BB, TB) {
        if (!this.handle) return;
        const dB = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [BB]: TB
        })];
        this.running && (this.pendingDocText.set(BB, TB), dB.push(this.flushDocTextToDisk())), await Promise.all(dB)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const BB = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const TB = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [dB, VB] of TB) this.lastSynced[dB] !== VB && (await (0, Xy.S)(BB, dB, VB), this.lastSynced = {
              ...this.lastSynced,
              [dB]: VB
            })
          }
        } catch (TB) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", TB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, Xy.A)(this.handle))
          } catch (BB) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", BB)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, Xy.j)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const TB = this.bridge.getLobbyFiles(),
              dB = await (0, Xy.A)(this.handle);
            for (const BB of Object.keys(TB).filter(Ky.e)) {
              if (dB[BB] === Xy.q) return void this.bridge.setMessage(`Move ${BB} outside the linked folder before syncing its placeholder.`, "warning");
              dB[BB] = Ky.j
            }
            if (Wy(dB, TB)) {
              for (const BB of Object.keys(TB).filter(Ky.e)) await (0, Xy.S)(this.handle, BB, Ky.j);
              return this.lastSynced = {
                ...dB
              }, void this.beginWatch()
            }
            const VB = await this.promptReconcile(function(BB) {
              return null !== (0, Ny.c)(BB)
            }(dB));
            if ("unlink" === VB) return void await this.unlinkFolder();
            if ("dismissed" === VB) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === VB) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(dB);
                for (const BB of Object.keys(TB).filter(Ky.e)) await (0, Xy.S)(this.handle, BB, Ky.j);
                this.lastSynced = {
                  ...await (0, Xy.A)(this.handle)
                }
              } else await (0, Xy.T)(this.handle, TB), this.lastSynced = {
                ...TB
              }
            } catch (BB) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", BB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(BB) {
        return await new Promise((TB => {
          const dB = [{
              choice: "local",
              Button: OB.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: OB.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: OB.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            VB = (0, oB.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, oB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, oB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: BB ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, oB.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: dB.filter((TB => "local" !== TB.choice || BB)).map((BB => {
                  let {
                    choice: dB,
                    Button: VB,
                    labelKey: pB,
                    descriptionKey: lB
                  } = BB;
                  return (0, oB.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, oB.jsx)(VB, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (BB => {
                          yB.tearDownNotification(), TB(BB)
                        })(dB)
                      },
                      children: this.bridge.t(`codeEditor:${pB}`)
                    }), (0, oB.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${lB}`)
                    })]
                  }, dB)
                }))
              })]
            }),
            yB = sy.NotificationProvider.showCustomPopup({
              body: VB,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          yB.getResult().then((BB => {
            "notificationTornDown" === BB && TB("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, Xy.N)(this.handle, (BB => {
          this.onDiskFilesChanged(BB)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (BB) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", BB)
        }
      }
      async onDiskFilesChanged(BB) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const TB = this.bridge.getLobbyFiles();
        let dB = Cy(BB, this.lastSynced);
        for (const pB in TB)
          if ((0, Ky.e)(pB) && dB[pB] === Xy.q) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const VB = Object.keys(dB).filter((BB => (0, Ky.e)(BB) && !(BB in TB)));
        VB.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const pB of Object.keys(TB).filter(Ky.e))(pB in dB || VB.length > 0 || !(pB in this.lastSynced)) && (dB[pB] = Ky.j);
        if (!Wy(dB, BB)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(BB, dB), dB = Cy(await (0, Xy.A)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Wy(dB, this.lastSynced)) {
          this.applying = !0;
          try {
            const BB = hy(this.lastSynced, dB);
            if (await this.pushDiskDeltaToLobby(dB, TB), null !== this.lastLobbySeen)
              for (const dB of [...BB.creates, ...BB.updates, ...BB.deletes])(0, Ky.e)(dB) || (dB in TB ? this.lastLobbySeen[dB] = TB[dB] : delete this.lastLobbySeen[dB]);
            this.lastSynced = {
              ...dB
            }
          } catch (yB) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", yB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(BB, TB) {
        if (this.handle) {
          for (const dB of Object.keys(BB)) dB in TB || await (0, Xy.E)(this.handle, dB);
          for (const [dB, VB] of Object.entries(TB)) BB[dB] !== VB && await (0, Xy.S)(this.handle, dB, VB)
        }
      }
      async applyRemoteTreeToDisk(BB) {
        if (!this.handle) return;
        const TB = this.lastLobbySeen;
        if (null === TB) return void(this.lastLobbySeen = {
          ...BB
        });
        const dB = Object.keys(BB).filter((dB => TB[dB] !== BB[dB])),
          VB = Object.keys(TB).filter((TB => !(TB in BB)));
        if (0 !== dB.length || 0 !== VB.length) {
          this.applying = !0;
          try {
            for (const TB of [...VB, ...dB]) try {
              if (TB in BB) await (0, Xy.S)(this.handle, TB, BB[TB]), this.lastSynced = {
                ...this.lastSynced,
                [TB]: BB[TB]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [TB]: BB[TB]
              };
              else {
                await (0, Xy.E)(this.handle, TB);
                const BB = {
                  ...this.lastSynced
                };
                delete BB[TB], this.lastSynced = BB;
                const dB = {
                  ...this.lastLobbySeen
                };
                delete dB[TB], this.lastLobbySeen = dB
              }
            } catch (yB) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", yB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(BB, TB) {
        const dB = function(BB, TB) {
          const dB = (0, Ny.c)(BB),
            VB = (0, Ny.c)(TB);
          return dB && VB && dB !== VB ? {
            from: dB,
            to: VB
          } : null
        }(BB, TB);
        return !!dB && (this.bridge.renameFile(dB.from, dB.to), await this.bridge.waitForLobbyPath(dB.to, !0), !0)
      }
      async applyLocalTreeToLobby(BB) {
        var TB;
        const dB = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), BB);
        const VB = this.bridge.getLobbyFiles(),
          yB = hy(VB, BB),
          pB = Gy(yB.deletes, VB);
        for (const gB of yB.creates)(0, Ky.e)(gB) || (this.bridge.createFile(gB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(gB, !0));
        for (const gB of pB)(0, Ky.e)(gB) || (this.bridge.deleteFile(gB), await this.bridge.waitForLobbyPath(gB, !1));
        if (!(0, Ny.c)(this.bridge.getLobbyFiles()) && !(0, Ny.c)(BB)) {
          if (this.bridge.createFile(my.f, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(my.f, !0), !this.handle) return;
          await (0, Xy.S)(this.handle, my.f, ""), BB = {
            ...BB,
            [my.f]: ""
          }
        }
        const lB = this.bridge.getLobbyFiles();
        for (const gB of Object.keys(BB))(0, Ky.e)(gB) || lB[gB] !== BB[gB] && await qy(this.bridge, gB, BB[gB]);
        const JB = this.bridge.getLobbyFiles(),
          YB = dB in JB ? dB : null !== (TB = (0, Ny.c)(JB)) && void 0 !== TB ? TB : my.f;
        await this.bridge.ensureJoined(YB)
      }
      async pushDiskDeltaToLobby(BB, TB) {
        const dB = this.bridge.getActivePath(),
          VB = await this.renameLobbyEntryIfSwitched(TB, BB) ? this.bridge.getLobbyFiles() : TB,
          yB = hy(this.lastSynced, BB),
          pB = Gy(yB.deletes, VB).filter((BB => BB in VB));
        for (const lB of yB.creates)(0, Ky.e)(lB) || (lB in this.bridge.getLobbyFiles() || (this.bridge.createFile(lB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(lB, !0)), await qy(this.bridge, lB, BB[lB]));
        for (const lB of pB)(0, Ky.e)(lB) ? await this.bridge.deleteSchematic(lB) : (this.bridge.deleteFile(lB), await this.bridge.waitForLobbyPath(lB, !1));
        for (const lB of yB.updates)(0, Ky.e)(lB) || await qy(this.bridge, lB, BB[lB]);
        dB in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== dB && await this.bridge.ensureJoined(dB)
      }
    }
    var jy = dB(1089);

    function Ay() {
      const {
        websocketUrl: BB,
        gameNameWithVariation: TB,
        lobbyName: dB
      } = gB.gameBridge.latest("connectedGame");
      return {
        gsUrl: jy.clientSideServerUrls.getHttpUrlFromWebSocketUrl(BB),
        gameNameWithVariation: TB,
        lobbyName: dB
      }
    }
    async function by(BB) {
      const {
        gsUrl: TB,
        gameNameWithVariation: dB,
        lobbyName: VB
      } = Ay();
      return await (0, vy.postBinaryWithMetricsCookiesAndCustomResponse)(`${TB}/code/schematics`, Ey.Fj.schematics.toBuffer({
        gameNameWithVariation: dB,
        lobbyName: VB,
        request: JSON.stringify(BB)
      }), {
        retries: 0
      }, vy.HttpPayloadType.json)
    }
    var ny = dB(35381);

    function ey(BB) {
      let {
        path: TB,
        revision: dB
      } = BB;
      const [VB, pB] = (0, yB.useState)(""), [lB, JB] = (0, yB.useState)(!1), [YB, gB] = (0, yB.useState)(0);
      return (0, yB.useEffect)((() => {
        let BB = !1;
        return pB(""), JB(!1), by({
          action: "preview",
          path: TB
        }).then((TB => {
          BB || pB(`data:image/webp;base64,${TB.previewBase64}`)
        })).catch((TB => {
          console.error("Could not load schematic preview", TB), BB || JB(!0)
        })), () => {
          BB = !0
        }
      }), [TB, dB, YB]), (0, oB.jsxs)("div", {
        className: "SchematicPreview",
        children: [VB && (0, oB.jsx)("img", {
          src: VB,
          alt: `Preview of ${TB}`
        }), !VB && !lB && (0, oB.jsx)(wB.b, {
          loaderType: "Secondary"
        }), lB && (0, oB.jsxs)(oB.Fragment, {
          children: [(0, oB.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, oB.jsx)(OB.d, {
            onClick: () => {
              gB(YB + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function Bp(BB) {
      var TB;
      let {
        initialPath: dB,
        onChanged: VB,
        onClose: pB
      } = BB;
      const lB = "" === dB,
        [JB, YB] = (0, yB.useState)(null),
        [gB, kB] = (0, yB.useState)(dB),
        [LB, DB] = (0, yB.useState)(!1),
        [uB, HB] = (0, yB.useState)(!1),
        [EB, vB] = (0, yB.useState)(null),
        [mB, iB] = (0, yB.useState)(!1),
        [NB, tB] = (0, yB.useState)(""),
        fB = (0, yB.useRef)(null),
        sB = (0, yB.useRef)(!1),
        MB = (0, yB.useRef)(!0);
      (0, yB.useEffect)((() => (MB.current = !0, by({
        action: "state"
      }).then((BB => {
        MB.current && YB(BB)
      })).catch((BB => {
        console.error("Could not load schematic assets", BB), MB.current && tB("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        MB.current = !1
      })), []);
      const zB = null === JB || void 0 === JB ? void 0 : JB.assets[dB],
        wB = Object.keys(null !== (TB = null === JB || void 0 === JB ? void 0 : JB.assets) && void 0 !== TB ? TB : {}).length,
        UB = gB.trim(),
        FB = UB ? (0, Ky.e)(UB) ? null !== JB && void 0 !== JB && JB.assets[UB] && (lB || UB !== dB) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        KB = !!UB && !FB && (lB ? wB < Ky.f : UB !== dB),
        rB = mB || !JB;
      async function IB(BB) {
        if (!sB.current && MB.current) {
          sB.current = !0, iB(!0), tB("");
          try {
            const TB = await by({
              ...BB,
              expectedRevision: JB.revision
            });
            VB(TB), MB.current && pB()
          } catch (dB) {
            var TB;
            if (console.error("Schematic asset operation failed", dB), MB.current) tB(dB instanceof CB.b ? null !== (TB = dB.errorMessageForUser) && void 0 !== TB ? TB : dB.message : String(dB));
            try {
              const BB = await by({
                action: "state"
              });
              VB(BB), MB.current && YB(BB)
            } catch (yB) {
              console.error("Could not refresh schematic assets", yB)
            }
          } finally {
            sB.current = !1, MB.current && iB(!1)
          }
        }
      }
      return (0, oB.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, oB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: lB ? "New schematic" : LB ? "Rename schematic" : "Schematic"
        }), NB && (0, oB.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: NB
        }), !JB && !NB && (0, oB.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, oB.jsxs)("fieldset", {
          disabled: rB,
          children: [lB || LB ? (0, oB.jsxs)("label", {
            className: "SchematicField",
            children: [(0, oB.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, oB.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, oB.jsx)(zT.e, {
                className: "InputGenericPopupInput",
                defaultValue: dB,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: kB
              }, LB ? "rename" : "create")
            })]
          }) : (0, oB.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: dB
          }), (lB || LB) && FB && (0, oB.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: FB
          }), lB ? (0, oB.jsxs)(oB.Fragment, {
            children: [wB >= Ky.f && (0, oB.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Ky.f, " maximum)."]
            }), uB ? (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, oB.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": rB || !KB,
                children: (0, oB.jsx)(ny.b, {
                  loading: null === EB,
                  schematics: null !== EB && void 0 !== EB ? EB : [],
                  disableAutoExport: !0,
                  onSchematicPicked: BB => {
                    !rB && KB && IB({
                      action: "profile",
                      path: UB,
                      schematicId: BB.schematicId
                    })
                  }
                })
              }), (0, oB.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, oB.jsx)(OB.d, {
                  className: "InputGenericPopupButton",
                  disabled: rB,
                  onClick: () => {
                    HB(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, oB.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, oB.jsx)(OB.d, {
                className: "InputGenericPopupButton",
                disabled: rB || !KB,
                onClick: () => {
                  fB.current.click()
                },
                children: "Upload Schematic"
              }), (0, oB.jsx)(OB.d, {
                className: "InputGenericPopupButton",
                disabled: rB || !KB,
                onClick: () => {
                  !async function() {
                    if (HB(!0), tB(""), !EB) try {
                      const BB = await (0, vy.postJsonWithMetricsCookiesAndJsonResponse)(`${jy.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      MB.current && vB(BB)
                    } catch (BB) {
                      console.error("Could not load profile schematics", BB), MB.current && (HB(!1), tB("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, oB.jsx)("input", {
              ref: fB,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: BB => {
                var TB;
                const dB = null === (TB = BB.target.files) || void 0 === TB ? void 0 : TB[0];
                if (BB.target.value = "", !dB) return;
                if (dB.size > Ky.h) return void tB("The schematic file is too large.");
                const VB = UB;
                iB(!0);
                const yB = new FileReader;
                yB.onload = () => {
                  IB({
                    action: "upload",
                    path: VB,
                    base64: String(yB.result).split(",")[1]
                  })
                }, yB.onerror = () => {
                  console.error("Could not read schematic file", yB.error), MB.current && (iB(!1), tB("Could not read the selected file."))
                }, yB.readAsDataURL(dB)
              }
            })]
          }) : zB ? (0, oB.jsxs)(oB.Fragment, {
            children: [!LB && (0, oB.jsx)(ey, {
              path: dB,
              revision: JB.revision
            }), !LB && (0, oB.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(zB.byteSize / 1024), " KB \xb7 ", zB.dimensions.join(" \xd7 "), " blocks"]
            }), (0, oB.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: LB ? (0, oB.jsxs)(oB.Fragment, {
                children: [(0, oB.jsx)(OB.d, {
                  className: "InputGenericPopupButton",
                  disabled: rB || !KB,
                  onClick: () => {
                    IB({
                      action: "rename",
                      path: dB,
                      newPath: UB
                    })
                  },
                  children: "Rename"
                }), (0, oB.jsx)(OB.d, {
                  className: "InputGenericPopupButton",
                  disabled: rB,
                  onClick: () => {
                    DB(!1), kB(dB)
                  },
                  children: "Cancel"
                })]
              }) : (0, oB.jsxs)(oB.Fragment, {
                children: [(0, oB.jsx)(OB.d, {
                  className: "InputGenericPopupButton",
                  disabled: rB,
                  onClick: () => {
                    DB(!0)
                  },
                  children: "Rename"
                }), (0, oB.jsx)(OB.K, {
                  className: "InputGenericPopupButton",
                  disabled: rB,
                  onClick: () => {
                    IB({
                      action: "remove",
                      path: dB
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : JB && (0, oB.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Tp(BB) {
      if ("string" !== typeof BB) return null;
      try {
        const TB = JSON.parse(BB);
        return (0, Ny.i)(null === TB || void 0 === TB ? void 0 : TB.worldCodeEngine) && "boolean" === typeof TB.engineLocked && function(BB) {
          if (null === BB) return !0;
          const TB = null === BB || void 0 === BB ? void 0 : BB.location;
          return "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.reason) && (null === TB || "string" === typeof(null === TB || void 0 === TB ? void 0 : TB.path) && Number.isInteger(TB.line))
        }(TB.fallback) ? TB : (console.error("[CodeCollab] Malformed engine settings", BB), null)
      } catch (TB) {
        return console.error("[CodeCollab] Failed to parse engine settings", TB), null
      }
    }

    function dp(BB) {
      let {
        fallback: TB,
        onGoToLine: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), {
        location: yB
      } = TB;
      return (0, oB.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [VB("codeEditorEngine:notice", {
          reason: TB.reason
        }), yB && (0, oB.jsxs)(oB.Fragment, {
          children: [" ", (0, oB.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              dB(yB.path, yB.line)
            },
            children: VB("codeEditorEngine:goToLine", {
              line: String(yB.line)
            })
          })]
        })]
      })
    }
    var Vp = dB(4339);

    function yp(BB) {
      let {
        label: TB,
        hint: dB,
        checked: VB,
        onChange: yB
      } = BB;
      return (0, oB.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, oB.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, oB.jsx)("span", {
            children: TB
          }), (0, oB.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: dB
          })]
        }), (0, oB.jsx)("span", {
          className: "SwitchContainer",
          children: (0, oB.jsx)(iT.b, {
            className: "SwitchCheckbox",
            checked: VB,
            onChange: BB => {
              yB(BB.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function pp(BB) {
      let {
        engine: TB,
        onSetEngine: dB,
        aiHints: VB,
        variation: yB
      } = BB;
      const {
        t: pB
      } = (0, jB.z)();
      return (0, oB.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, oB.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: pB("codeEditor:moreOptions")
        }), TB && (0, oB.jsx)(yp, {
          label: pB("codeEditorEngine:toggle"),
          hint: pB("codeEditorEngine:toggleHint"),
          checked: "ses" === TB,
          onChange: BB => {
            dB(BB ? "ses" : "quickjs")
          }
        }), VB && (0, oB.jsx)(yp, {
          label: pB("codeEditorAiHints:toggle"),
          hint: pB("codeEditorAiHints:toggleHint"),
          checked: VB.shown,
          onChange: VB.setShown
        }), yB && (0, oB.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, oB.jsx)(Vp.g, {
            label: "codeEditor:variationLabel",
            children: (0, oB.jsx)(zT.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: yB.name,
              onValueChange: yB.setName,
              onEnter: yB.reload
            })
          }), (0, oB.jsx)(OB.x, {
            className: "CodeEditorButton",
            onClick: yB.reload,
            children: pB("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var lp = dB(35856),
      Jp = dB(35860);

    function Yp(BB) {
      let {
        close: TB
      } = BB;
      const {
        t: dB
      } = (0, jB.z)(), VB = [{
        name: dB("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: dB("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: dB("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, oB.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, oB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: dB("codeEditor:tutorialsTitle")
        }), (0, oB.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: VB.map((BB => (0, oB.jsx)(OB.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              TB(), (0, Jp.R)(BB.tutorial)
            },
            children: BB.name
          }, BB.tutorial)))
        })]
      })
    }
    var gp = dB(105),
      op = dB(35549),
      kp = dB(8107);
    const Lp = (0, yB.forwardRef)((function(BB, TB) {
      let {
        value: dB,
        onChange: VB,
        onSubmit: yB,
        placeholder: pB,
        maxLength: lB,
        rows: JB = 2,
        allowNewLines: YB = !1,
        onKeyDown: gB,
        before: kB
      } = BB;
      const {
        t: LB
      } = (0, jB.z)(), DB = "" !== dB.trim(), uB = () => {
        DB && yB()
      };
      return (0, oB.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [kB, (0, oB.jsx)("textarea", {
          ref: TB,
          className: "PanelPromptInput",
          value: dB,
          maxLength: lB,
          rows: JB,
          placeholder: pB,
          spellCheck: !1,
          autoComplete: "off",
          onChange: BB => {
            VB(YB ? BB.target.value : BB.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: BB => {
            BB.nativeEvent.isComposing || 229 === BB.nativeEvent.keyCode ? BB.stopPropagation() : "Escape" !== BB.key && (BB.stopPropagation(), null === gB || void 0 === gB || gB(BB), BB.defaultPrevented || "Enter" !== BB.key || YB && BB.shiftKey || (BB.preventDefault(), uB()))
          }
        }), (0, oB.jsx)(OB.d, {
          className: "PanelPromptSend",
          disabled: !DB,
          onClick: uB,
          ariaLabel: LB("codeEditorPanels:send"),
          children: (0, oB.jsx)(HB.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function Op(BB) {
      let {
        close: TB,
        inputRef: dB
      } = BB;
      const {
        t: VB
      } = (0, jB.z)(), {
        messages: pB,
        reportedPlayers: lB,
        channel: JB
      } = (0, kp.p)(), [YB, gB] = (0, yB.useState)(""), kB = (0, yB.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, oB.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, oB.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, oB.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: VB("codeEditorChat:title")
          }), (0, oB.jsx)(OB.i, {
            className: "CodeEditorChatHide",
            onClick: TB
          })]
        }), 0 === pB.length ? (0, oB.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: VB("codeEditorChat:empty")
        }) : (0, oB.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, oB.jsx)(op.c, {
            messages: pB,
            reportedPlayers: lB
          })
        }), (0, oB.jsx)(Lp, {
          ref: dB,
          value: YB,
          onChange: gB,
          onSubmit: () => {
            (0, kp.l)(YB), gB(""), kB.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: MB._c,
          rows: 1,
          placeholder: JB ? VB("touchOnly" === (0, gp.e)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: JB.channelName
          }) : VB("codeEditorChat:placeholder"),
          before: JB && (0, oB.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: JB.elementBgColor
            },
            onClick: () => {
              kp.e.selectNextChannel(), dB.current.focus()
            },
            children: (0, oB.jsx)(fB.e, {
              text: JB.elementContent
            })
          }),
          onKeyDown: BB => {
            const TB = YB === kB.current.text;
            if ("ArrowUp" !== BB.key && "ArrowDown" !== BB.key || !TB && "" !== YB) "Tab" === BB.key && !BB.shiftKey && JB && (BB.preventDefault(), kp.e.selectNextChannel());
            else {
              BB.preventDefault();
              const dB = TB ? kB.current.stepsBack : 0;
              kB.current = (0, kp.k)(dB + ("ArrowUp" === BB.key ? 1 : -1)), gB(kB.current.text)
            }
          }
        })]
      })
    }

    function Dp(BB) {
      let {
        side: TB,
        defaultWidth: dB,
        children: VB
      } = BB;
      const pB = (0, yB.useRef)(null),
        [lB, JB] = (0, yB.useState)(null),
        YB = (0, yB.useRef)(null),
        gB = () => {
          YB.current = null
        };
      return (0, oB.jsxs)("div", {
        ref: pB,
        className: OT()("ResizableSidePanel", `ResizableSidePanel-${TB}`),
        style: {
          width: null !== lB && void 0 !== lB ? lB : dB
        },
        children: [VB, (0, oB.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: BB => {
            if (0 !== BB.button) return;
            BB.preventDefault();
            const TB = pB.current,
              dB = Array.from(TB.parentElement.children).reduce(((BB, dB) => dB !== TB && "0" !== getComputedStyle(dB).flexGrow ? BB + dB.clientWidth : BB), 0),
              VB = TB.offsetWidth,
              yB = Math.min(200, VB),
              lB = Math.max(yB, VB + Math.max(0, dB - 160));
            YB.current = {
              startX: BB.clientX,
              startWidth: VB,
              minWidth: yB,
              maxWidth: lB
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const dB = YB.current;
            if (!dB) return;
            const VB = "left" === TB ? BB.clientX - dB.startX : dB.startX - BB.clientX;
            JB(Math.min(dB.maxWidth, Math.max(dB.minWidth, dB.startWidth + VB)))
          },
          onPointerUp: gB,
          onPointerCancel: gB,
          onLostPointerCapture: gB
        })]
      })
    }
    var Hp = dB(35869);
    class Ep {
      constructor(BB, TB) {
        this.storageKey = BB, this.defaultValue = TB, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const BB = IB.j.getItem(this.storageKey);
            this.value = "boolean" === typeof BB ? BB : this.defaultValue
          }
          return this.value
        }, this.set = BB => {
          this.value = BB, IB.j.setItem(this.storageKey, BB);
          for (const TB of this.listeners) TB(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    const vp = new Ep("codeEditorLightMode", !1),
      mp = new Ep("codeEditorAiHints", !0);

    function ip(BB) {
      const [TB, dB] = (0, yB.useState)(BB.get);
      return (0, yB.useEffect)((() => {
        const TB = BB.subscribe(dB);
        return dB(BB.get()), TB
      }), [BB]), [TB, BB.set]
    }
    var Np = dB(35873),
      tp = dB(35876),
      fp = dB(35878);
    const sp = (0, yB.lazy)((() => Promise.all([dB.e(279), dB.e(275), dB.e(278), dB.e(274), dB.e(75), dB.e(277), dB.e(276), dB.e(273)]).then((() => dB(40028))))),
      Mp = (0, yB.lazy)((() => Promise.all([dB.e(70), dB.e(73), dB.e(74), dB.e(72), dB.e(281)]).then((() => dB(40202))))),
      zp = (0, yB.lazy)((() => Promise.all([dB.e(279), dB.e(278), dB.e(75), dB.e(73), dB.e(74), dB.e(72), dB.e(277), dB.e(276), dB.e(71), dB.e(82)]).then((() => dB(40205)))));

    function wp(BB) {
      return gB.gameBridge.query("worldCodeAiChunk", BB)
    }

    function Up() {
      return gB.gameBridge.query("worldCodeAiGameState", null)
    }

    function Fp(BB) {
      const {
        gsUrl: TB,
        gameNameWithVariation: dB,
        lobbyName: VB
      } = Ay();
      return (0, vy.postJsonWithMetricsCookiesAndJsonResponse)(`${TB}/code/get-lobby-code`, Ey.Fj["get-lobby-code"].toBuffer({
        gameNameWithVariation: dB,
        lobbyName: VB,
        path: BB
      }), {
        retries: 1
      })
    }
    let Kp = !1;
    const rp = [],
      Ip = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      cp = (0, yB.memo)((function(BB) {
        var TB, dB;
        let {
          show: VB,
          onOpen: pB,
          onClose: JB,
          isLobbyCode: kB
        } = BB;
        const LB = (0, yB.useRef)(""),
          [uB, EB] = (0, yB.useState)(null),
          vB = (0, yB.useRef)(kB),
          [mB, iB] = (0, yB.useState)({
            message: null,
            type: null
          }),
          [NB, tB] = (0, yB.useState)(""),
          fB = mB.message ? mB : {
            message: NB,
            type: "warning"
          },
          [UB, FB] = (0, yB.useState)(!0),
          [KB, IB] = ip(vp),
          [cB, SB] = ip(mp),
          [PB, QB] = (0, yB.useState)(!1),
          [RB, XB] = (0, yB.useState)(!1),
          WB = (0, yB.useRef)(null),
          hB = (0, yB.useRef)(!1);
        (0, yB.useEffect)((() => {
          var BB;
          RB && hB.current && (hB.current = !1, null === (BB = WB.current) || void 0 === BB || BB.focus())
        }), [RB]);
        const CB = (0, Hp.b)(),
          GB = (0, yB.useRef)(null),
          xB = (0, yB.useRef)(null),
          {
            openInGameMenuName: AB,
            openEverythingMenuName: bB
          } = (0, aB.m)(["openInGameMenuName", "openEverythingMenuName"]),
          nB = BB => {
            VB && (GB.current = BB, MT.current = !0)
          };
        (0, sB.e)("OpenReportMenu", (() => {
          nB("yD")
        })), (0, sB.e)("OpenStoreFromCodeEditor", (() => {
          nB("store")
        })), (0, yB.useEffect)((() => {
          const BB = GB.current;
          null === BB || "yD" === BB && ("makeReport" === AB || "makeDiscordReport" === AB) || "store" === BB && null !== bB || (GB.current = null, null === AB && null === bB ? kB ? (xB.current = Td.current, DB.h.yH("EditLobbyCode", uB)) : DB.h.yH("EditCodeBlock", {
            pos: uB,
            canChangePos: vB.current
          }) : (0, Jp.G)())
        }), [AB, bB, kB, uB]), (0, yB.useEffect)((() => {
          if (VB) return () => {
            xB.current = null
          }
        }), [VB]);
        const [eB, BT] = function() {
          const [BB, TB] = (0, yB.useState)(Kp);
          return (0, sB.e)("CodeEditorAiHelperShown", (BB => {
            TB(BB)
          })), [BB, (0, yB.useCallback)((BB => {
            Kp = BB, DB.h.yH("CodeEditorAiHelperShown", BB)
          }), [])]
        }(), [TT, dT] = (0, yB.useState)(null), [VT, yT] = (0, yB.useState)([]), [pT, lT] = (0, yB.useState)(0), [JT, YT] = (0, yB.useState)(0), [gT, oT] = (0, yB.useState)(""), kT = (0, yB.useRef)(null), [LT, DT] = (0, yB.useState)(kB ? fp.f : null), uT = kB || null !== uB, HT = (0, YB.j)("canEditCode"), ET = (0, YB.j)("canUseDevCreativeItems"), vT = (0, lp.l)("welcome"), mT = (0, lp.l)("docsOverview"), iT = mT ? "docsOverview" : "welcome", NT = null !== mT && void 0 !== mT ? mT : vT, tT = (0, lp.l)("aiHelperOverview"), fT = tT ? "aiHelperOverview" : "welcome", sT = null !== tT && void 0 !== tT ? tT : vT, MT = (0, yB.useRef)(!1), zT = (0, yB.useRef)(!1), wT = (0, yB.useRef)(null), [UT, FT] = (0, yB.useState)(""), [rT, IT] = (0, yB.useState)(!1), [cT, ST] = (0, yB.useState)(null), PT = (0, zB.i)("connectedGame"), QT = kB && HT && "classic" === PT.gameNameWithVariation && !(0, KT.O)(PT.lobbyName), [RT, aT] = (0, yB.useState)(null), [ZT, XT] = (0, yB.useState)({
          [my.f]: ""
        }), [WT, hT] = (0, yB.useState)({
          assets: {},
          revision: 0
        }), CT = (0, yB.useRef)(WT), GT = (0, yB.useCallback)((BB => {
          var TB;
          BB.revision < CT.current.revision || (CT.current = BB, hT(BB), tB(BB.startupError ? `Schematics could not load: ${BB.startupError}` : ""), null === (TB = ud.current) || void 0 === TB || TB.onLobbyFilesChanged({
            ...Yd.current,
            ...(0, Ky.i)(BB.assets)
          }))
        }), []), [qT, xT] = (0, yB.useState)(my.f), [jT, AT] = (0, yB.useState)(null), [bT, nT] = (0, yB.useState)(null), eT = (0, yB.useRef)(!1), Bd = (0, yB.useRef)(null), Td = (0, yB.useRef)(qT);
        Td.current = qT;
        const dd = (0, yB.useRef)(jT);
        dd.current = jT;
        const Vd = jT ? null : cT,
          pd = Vd && !Vd.engineLocked ? Vd.worldCodeEngine : null,
          Jd = (0, yB.useRef)(bT);
        Jd.current = bT;
        const Yd = (0, yB.useRef)(ZT);
        Yd.current = ZT;
        const gd = (0, yB.useRef)(null),
          od = (0, yB.useRef)(null),
          [kd, Ld] = (0, yB.useState)(!1),
          Od = (0, Xy.r)(),
          Dd = (0, yB.useRef)([]),
          ud = (0, yB.useRef)(null),
          Hd = (0, yB.useRef)(null),
          Ed = (0, yB.useRef)(null);

        function vd(BB) {
          iB(BB), clearTimeout(wT.current), wT.current = setTimeout((() => {
            iB({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const md = (0, yB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            eT.current && Bd.current && (gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.Leave,
              yp: (0, iy.A)(Bd.current),
              RY: !!BB || null
            }), eT.current = !1, Bd.current = null), aT(null)
          }), []),
          Nd = (0, yB.useCallback)((BB => {
            const TB = {
              kind: "lobby",
              path: BB
            };
            Bd.current = TB, xT(BB), LB.current = "", gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.Join,
              yp: (0, iy.A)(TB)
            }), eT.current = !0
          }), []),
          td = (0, yB.useCallback)((BB => {
            var TB;
            const dB = null === (TB = Hd.current) || void 0 === TB ? void 0 : TB.collabState;
            return dB && "lobby" === dB.docKey.kind && dB.docKey.path === BB && Td.current === BB ? Promise.resolve({
              doc: dB.doc,
              version: dB.version,
              clientID: dB.clientID,
              docKey: dB.docKey,
              httpConfig: dB.httpConfig
            }) : new Promise(((TB, dB) => {
              const VB = setTimeout((() => {
                  Dd.current = Dd.current.filter((BB => BB !== yB)), dB(new Error(`Timed out joining ${BB}`))
                }), 15e3),
                yB = dB => {
                  "lobby" === dB.docKey.kind && dB.docKey.path === BB && (clearTimeout(VB), Dd.current = Dd.current.filter((BB => BB !== yB)), TB(dB))
                };
              Dd.current.push(yB), Td.current !== BB ? (md(!0), Nd(BB)) : eT.current || Nd(BB)
            }))
          }), [Nd, md]),
          fd = (0, yB.useCallback)((async function(BB, TB) {
            let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const VB = Date.now();
            let yB = BB in Yd.current;
            for (; yB !== TB;) {
              if (Date.now() - VB > dB) throw new Error(`Timed out waiting for lobby path ${BB} present=${TB}`);
              await (0, rV.T)(50), yB = BB in Yd.current
            }
          }), []),
          sd = (0, yB.useCallback)((BB => {
            const TB = Yd.current,
              dB = my.f in TB && my.i in TB;
            if (!(0, Ny.h)(BB) || dB) {
              if (Td.current === BB) {
                var VB;
                const yB = dB && (0, Ny.h)(BB) ? BB === my.f ? my.i : my.f : null !== (VB = (0, Ny.c)(TB)) && void 0 !== VB ? VB : my.f;
                od.current = {
                  fromPath: BB,
                  toPath: yB
                }, xT(yB)
              }
              gB.gameBridge.send("sendCodeCollab", {
                Vp: iy.d.DeleteFile,
                yp: (0, iy.A)({
                  kind: "lobby",
                  path: Td.current
                }),
                aY: BB
              })
            }
          }), []),
          Md = (0, yB.useCallback)((BB => {
            xB.current = null, AT(null), nT(null), !kB || BB === Td.current && eT.current || (md(!0), Nd(BB))
          }), [kB, md, Nd]),
          zd = (0, yB.useCallback)(((BB, TB) => {
            const dB = Uy.f[BB],
              VB = dB && TB in dB.files ? TB : "index.ts";
            if (BB !== dd.current || VB !== Jd.current) {
              var yB;
              if (BB !== dd.current) null === (yB = ud.current) || void 0 === yB || yB.stopContinuousSync(), md(!0);
              AT(BB), nT(VB)
            }
          }), [md]),
          wd = (0, yB.useCallback)((BB => {
            var TB;
            const dB = Td.current,
              VB = Yd.current[dB],
              yB = eT.current && !dd.current && dB in BB && void 0 !== VB ? {
                ...BB,
                [dB]: VB
              } : BB;
            XT(yB);
            const pB = gd.current;
            if (pB && pB in BB) gd.current = null, pB !== Td.current && Md(pB);
            else if (!(Td.current in BB) && eT.current && !dd.current) {
              var lB;
              Md(null !== (lB = (0, Ny.c)(BB)) && void 0 !== lB ? lB : my.f)
            }
            null === (TB = ud.current) || void 0 === TB || TB.onLobbyFilesChanged({
              ...yB,
              ...(0, Ky.i)(CT.current.assets)
            })
          }), [Md]),
          Ud = (0, yB.useCallback)((() => Fp(Td.current).then((async BB => {
            if (!eT.current || !BB.files) return null;
            wd(BB.files);
            const TB = await by({
              action: "state"
            });
            return GT(TB), {
              ...BB.files,
              ...(0, Ky.i)(TB.assets)
            }
          })).catch((BB => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", BB), vd({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [wd, GT]),
          Fd = () => {
            JB()
          };
        (0, yB.useEffect)((() => {
          if (tB(""), !VB || !kB) return;
          let BB = !1;
          return CT.current = {
            assets: {},
            revision: 0
          }, hT(CT.current), by({
            action: "state"
          }).then((TB => {
            BB || GT(TB)
          })).catch((TB => {
            console.error("Could not load project schematics", TB), BB || tB("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            BB = !0
          }
        }), [VB, kB, GT]);
        const Kd = (0, yB.useCallback)((() => {
            Bd.current && gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.Submit,
              yp: (0, iy.A)(Bd.current)
            })
          }), []),
          rd = (0, yB.useCallback)((() => {
            if (!Bd.current || "lobby" !== Bd.current.kind) return;
            const BB = UT.trim();
            (0, ty.p)(BB) ? (gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.ReloadAsVariation,
              yp: (0, iy.A)(Bd.current),
              kp: BB
            }), IT(!1)) : vd({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [UT]),
          Id = (0, yB.useCallback)((BB => {
            gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.SetEngine,
              yp: (0, iy.A)({
                kind: "lobby",
                path: Td.current
              }),
              kp: BB
            })
          }), []),
          cd = (0, yB.useCallback)((BB => {
            if (!dd.current && HT && (vB.current || kB)) {
              if (kB) {
                var TB;
                const dB = (0, Ny.m)(Yd.current, Td.current),
                  VB = Math.min(yd.w, Math.max(0, yd.B - dB)),
                  yB = BB.slice(0, VB);
                return LB.current = yB, XT((BB => ({
                  ...BB,
                  [Td.current]: yB
                }))), void(null === (TB = ud.current) || void 0 === TB || TB.onDocTextChanged(Td.current, yB))
              }
              LB.current = BB, oT(BB)
            }
          }), [HT, kB]);
        (0, sB.e)("EditLobbyCode", (BB => {
          var TB;
          rB.featureFlags.canSeePlayerWrittenText && kB && (md(), EB(BB), LB.current = "", XT({
            [my.f]: ""
          }), ST(null), xT(my.f), AT(null), nT(null), gd.current = null, od.current = null, null === (TB = ud.current) || void 0 === TB || TB.stopContinuousSync(), pB(), Nd(my.f))
        })), (0, sB.e)("EditCodeBlock", (BB => {
          let {
            pos: TB,
            canChangePos: dB
          } = BB;
          if (rB.featureFlags.canSeePlayerWrittenText && !kB)
            if (md(), null !== TB && (TB = [...TB]), EB(TB), vB.current = dB, null !== TB) {
              LB.current = "", oT(""), pB();
              const BB = {
                  kind: "codeBlock",
                  pos: TB
                },
                VB = (0, iy.A)(BB);
              kT.current !== VB && (kT.current = VB, yT([]), YT(pT)), DT((0, fp.c)(VB, [TB[0], TB[1], TB[2]], !!dB)), Bd.current = BB, gB.gameBridge.send("sendCodeCollab", {
                Vp: iy.d.Join,
                yp: (0, iy.A)(BB)
              }), eT.current = !0
            } else VB && JB()
        })), (0, sB.e)("codeCollabRejoin", (BB => {
          const TB = Bd.current ? (0, iy.A)(Bd.current) : null;
          TB && BB.docKey === TB && (LB.current = BB.doc, kB || oT(BB.doc), aT((TB => TB ? {
            ...TB,
            doc: BB.doc,
            version: BB.version,
            clientID: (0, wy.e)()
          } : TB)))
        })), (0, sB.e)("codeCollab", (BB => {
          var TB;
          const dB = Bd.current ? (0, iy.A)(Bd.current) : null;
          if (BB.type === iy.g.LobbyFilesChanged && kB) {
            if ("string" !== typeof BB.files) return void Ud();
            try {
              wd(JSON.parse(BB.files))
            } catch (gB) {
              console.error("[CodeCollab] Failed to parse lobby files", gB), Ud()
            }
            return
          }
          if (BB.type === iy.g.EngineSettings && kB) return void ST(Tp(BB.engineSettings));
          const yB = BB.type === iy.g.Joined ? (0, iy.m)(BB.docKey) : null,
            pB = kB && "lobby" === (null === (TB = Bd.current) || void 0 === TB ? void 0 : TB.kind) && (0, Ny.h)(Bd.current.path) && "lobby" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (0, Ny.h)(yB.path);
          if (!dB || BB.docKey === dB || pB)
            if (BB.type !== iy.g.ForceClose) {
              if (VB)
                if (BB.type === iy.g.Joined) {
                  var lB;
                  const oB = JSON.parse(BB.peers),
                    OB = BB.existingCursors ? JSON.parse(BB.existingCursors) : [],
                    DB = (0, wy.e)(),
                    HB = Ay(),
                    {
                      gsUrl: EB,
                      gameNameWithVariation: vB,
                      lobbyName: mB
                    } = HB,
                    NB = null !== (lB = (0, iy.m)(BB.docKey)) && void 0 !== lB ? lB : Bd.current;
                  NB && (Bd.current = NB, "lobby" === NB.kind && (xT(NB.path), Td.current = NB.path));
                  const tB = NB || (kB ? {
                    kind: "lobby",
                    path: Td.current
                  } : {
                    kind: "codeBlock",
                    pos: uB
                  });

                  function fB(TB) {
                    var dB, VB;
                    if (!eT.current) return;
                    const yB = null !== (dB = TB.code) && void 0 !== dB ? dB : "",
                      pB = null !== (VB = TB.collabVersion) && void 0 !== VB ? VB : 0;
                    LB.current = yB, kB || oT(yB), kB && TB.files ? XT(TB.files) : kB && XT((BB => ({
                      ...BB,
                      [Td.current]: yB
                    })));
                    const lB = {
                      doc: yB,
                      version: pB,
                      clientID: DB,
                      docKey: tB,
                      peers: oB,
                      editorCount: BB.editorCount,
                      existingCursors: OB,
                      httpConfig: HB
                    };
                    if (aT(lB), "lobby" === tB.kind) {
                      var JB;
                      const BB = {
                        doc: yB,
                        version: pB,
                        clientID: DB,
                        docKey: tB,
                        httpConfig: HB
                      };
                      for (const TB of [...Dd.current]) TB(BB);
                      null === (JB = ud.current) || void 0 === JB || JB.startWhenReady()
                    }
                    TB.canSeeCode ? (clearTimeout(wT.current), iB({
                      message: null,
                      type: null
                    })) : function(BB) {
                      clearTimeout(wT.current), iB(BB)
                    }(Ip);
                    const YB = xB.current;
                    xB.current = null, kB && YB && TB.files && YB in TB.files && YB !== Td.current && Md(YB)
                  }
                  kB ? Fp(Td.current).then(fB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", BB), md()
                  })) : (0, vy.postJsonWithMetricsCookiesAndJsonResponse)(`${EB}/code/get-code-block`, Ey.Fj["get-code-block"].toBuffer({
                    gameNameWithVariation: vB,
                    lobbyName: mB,
                    pos: uB
                  }), {
                    retries: 1
                  }).then(fB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", BB), md()
                  }))
                } else if (BB.type === iy.g.Presence) {
                if (!dB) return;
                const sB = JSON.parse(BB.peers);
                aT((TB => TB ? {
                  ...TB,
                  peers: sB,
                  editorCount: BB.editorCount
                } : TB))
              }
            } else {
              var YB;
              if (!dB) return;
              const MB = Bd.current;
              eT.current = !1, Bd.current = null, aT(null);
              if (!kB || "close" === BB.updates) return (0, tp.i)(), void(VB && JB());
              if (!VB) return;
              const zB = Yd.current,
                wB = od.current;
              od.current = null;
              const UB = "lobby" === (null === MB || void 0 === MB ? void 0 : MB.kind) && MB.path === (null === wB || void 0 === wB ? void 0 : wB.fromPath),
                FB = wB && (UB || wB.toPath in zB || (0, Ny.h)(wB.toPath)) ? wB.toPath : Td.current in zB ? Td.current : null !== (YB = (0, Ny.c)(zB)) && void 0 !== YB ? YB : my.f;
              Nd(FB)
            }
        })), (0, sB.e)("refetchCode", (() => {
          rB.featureFlags.canSeePlayerWrittenText && VB && eT.current && (HT || (md(), kB ? DB.h.yH("EditLobbyCode", uB) : DB.h.yH("EditCodeBlock", {
            pos: uB,
            canChangePos: vB.current
          })))
        }));
        const Sd = (0, yB.useCallback)((() => {
            VB && (QB(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [VB]),
          Pd = (0, yB.useCallback)((() => {
            QB(!1)
          }), []);
        (0, yB.useEffect)((() => {
          VB && HT && ("docsButton" === NT && PB ? (0, Jp.g)("docsButton") : NT && Jp.k.includes(NT) && !PB && (QB(!0), BT(!1)))
        }), [VB, HT, NT, PB, BT]);
        const Qd = (0, yB.useCallback)((() => {
          BT(!1)
        }), [BT]);
        (0, yB.useEffect)((() => {
          VB && HT && uT && ("aiHelperButton" === sT && eB ? (0, Jp.g)("aiHelperButton") : sT && Jp.e.includes(sT) && !eB && (BT(!0), QB(!1)))
        }), [VB, HT, uT, sT, eB, BT]), (0, yB.useEffect)((() => {
          if (!VB || !HT) return;
          const BB = kB ? "worldCode" : "codeBlock";
          return (0, Jp.K)(BB, !0), () => {
            (0, Jp.K)(BB, !1)
          }
        }), [VB, HT, kB]), (0, yB.useEffect)((() => {
          if (VB) return () => {
            MT.current ? MT.current = !1 : (0, Jp.G)()
          }
        }), [VB]), (0, yB.useEffect)((() => {
          (0, Jp.O)("exportButton", !!ET)
        }), [ET]);
        const {
          t: Rd
        } = (0, jB.z)(), ad = !eB && pT > JT, Zd = ad ? OB.K : OB.x, Xd = (0, yB.useCallback)(((BB, TB) => {
          DB.h.yH("CodeEditorGoToLine", {
            path: BB,
            line: TB
          }), Md(BB)
        }), [Md]), Wd = (0, yB.useCallback)((BB => {
          Ed.current = BB
        }), []), hd = function(BB, TB) {
          const [dB, VB] = (0, yB.useState)(null);
          return (0, yB.useEffect)((() => {
            if (!TB) return void VB(null);
            let dB = !1;
            return Zy(BB).then((BB => {
              dB || VB(BB)
            }), (BB => {
              console.error("[CodeEditor] could not collect the imported plugins", BB), dB || VB(null)
            })), () => {
              dB = !0
            }
          }), [BB, TB]), dB
        }(ZT, VB);
        (0, yB.useEffect)((() => {
          hd && jT && !hd.includes(jT) && (AT(null), nT(null), kB && !eT.current && Nd(Td.current))
        }), [jT, hd, kB, Nd]), Hd.current = {
          collabState: RT,
          ensureJoinedPath: td,
          waitForLobbyPath: fd,
          pullLobbyFiles: Ud,
          t: Rd,
          canEditCode: !!HT
        }, ud.current || (ud.current = new xy({
          getLobbyFiles: () => ({
            ...Yd.current,
            ...(0, Ky.i)(CT.current.assets)
          }),
          deleteSchematic: async BB => {
            const TB = await by({
              action: "remove",
              path: BB,
              expectedRevision: CT.current.revision
            });
            GT(TB)
          },
          getActivePath: () => Td.current,
          getCollabSnapshot: () => {
            var BB;
            if (dd.current) return null;
            const TB = null === (BB = Hd.current) || void 0 === BB ? void 0 : BB.collabState;
            return TB ? {
              doc: TB.doc,
              version: TB.version,
              clientID: TB.clientID,
              docKey: TB.docKey,
              httpConfig: TB.httpConfig
            } : null
          },
          replaceActiveDoc: (BB, TB) => {
            var dB, VB;
            return null !== (dB = null === (VB = Ed.current) || void 0 === VB ? void 0 : VB.call(Ed, BB, TB)) && void 0 !== dB && dB
          },
          ensureJoined: BB => Hd.current.ensureJoinedPath(BB),
          createFile: (BB, TB) => {
            !1 !== (null === TB || void 0 === TB ? void 0 : TB.focus) && (gd.current = BB), gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.CreateFile,
              yp: (0, iy.A)({
                kind: "lobby",
                path: Td.current
              }),
              aY: BB
            })
          },
          renameFile: (BB, TB) => {
            const dB = (0, iy.A)({
              kind: "lobby",
              path: Td.current
            });
            Td.current === BB && (od.current = {
              fromPath: BB,
              toPath: TB
            }, xT(TB)), gB.gameBridge.send("sendCodeCollab", {
              Vp: iy.d.RenameFile,
              yp: dB,
              aY: BB,
              ZY: TB
            })
          },
          deleteFile: BB => {
            sd(BB)
          },
          waitForLobbyPath: (BB, TB, dB) => Hd.current.waitForLobbyPath(BB, TB, dB),
          pullLobbyFiles: () => Hd.current.pullLobbyFiles(),
          setMessage: (BB, TB) => {
            vd({
              message: BB,
              type: TB
            })
          },
          onUnlinked: () => {
            Ld(!1)
          },
          t: BB => Hd.current.t(BB),
          canEditCode: () => Hd.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: BB,
              lobbyName: TB
            } = gB.gameBridge.latest("connectedGame");
            return (0, Xy.f)(BB, TB)
          }
        }));
        const Cd = (0, yB.useCallback)((async BB => {
            const TB = ud.current;
            if (!TB) return !1;
            try {
              return await TB.writeLobbyFiles(BB)
            } catch (dB) {
              return console.error("World Code AI: couldn't write the change", dB), !1
            }
          }), []),
          Gd = (0, yB.useCallback)((async BB => {
            var TB, dB;
            const VB = null === (TB = BB.find((BB => BB.path === Np.c))) || void 0 === TB ? void 0 : TB.text,
              yB = Bd.current;
            return void 0 !== VB && "codeBlock" === (null === yB || void 0 === yB ? void 0 : yB.kind) && (!(null === (dB = Ed.current) || void 0 === dB || !dB.call(Ed, (0, iy.A)(yB), VB)) && (LB.current = VB, oT(VB), !0))
          }), []),
          qd = (0, yB.useCallback)((async () => {
            try {
              var BB, TB;
              const dB = await Fp(my.f);
              return !1 === dB.canSeeCode ? null : null !== (BB = dB.files) && void 0 !== BB ? BB : {
                [my.f]: null !== (TB = dB.code) && void 0 !== TB ? TB : ""
              }
            } catch (dB) {
              return console.error("World Code AI: couldn't read World Code for a code block", dB), null
            }
          }), []),
          xd = (0, yB.useMemo)((() => ({
            [Np.c]: gT
          })), [gT]),
          jd = (0, yB.useCallback)(((BB, TB) => {
            DB.h.yH("CodeEditorGoToLine", {
              path: Np.c,
              line: TB
            })
          }), []);
        (0, yB.useEffect)((() => {
          eB && VB && YT(pT)
        }), [eB, VB, pT]);
        const Ad = (0, yB.useCallback)((() => {
            var BB, TB;
            Kd();
            const dB = (0, rB.isTouchscreen)() ? "open World Code again" : `press ${null!==(BB=null===(TB=ld.r.OpenCodeEditor)||void 0===TB?void 0:TB[0])&&void 0!==BB?BB:"F8"}`,
              VB = kB ? `\ud83e\udd16 Try out your change, then ${dB} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            DB.h.yH("chat", {
              content: [{
                str: VB,
                style: {
                  color: MB.L.cyanUiText
                }
              }]
            })
          }), [Kd, kB]),
          bd = (0, yB.useCallback)((BB => {
            const TB = uB,
              dB = vB.current;
            kB || !TB || gB.gameBridge.lookup("codeBlockClickable", TB) ? (0, tp.m)(BB, {
              submit: () => {
                Kd(), DB.h.yH("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: MB.L.cyanUiText
                    }
                  }]
                }), !kB && TB && setTimeout((() => {
                  gB.gameBridge.send("clickCodeBlock", TB)
                }), 1e3)
              },
              reopen: () => {
                (0, ZB.l)() || (kB ? DB.h.yH("EditLobbyCode", TB) : DB.h.yH("EditCodeBlock", {
                  pos: TB,
                  canChangePos: dB
                }))
              }
            }) : Ad()
          }), [Kd, kB, uB, Ad]),
          nd = (0, yB.useCallback)((() => {
            BT(!1)
          }), [BT]),
          ed = (0, yB.useRef)(Fd);
        ed.current = Fd;
        const BV = (0, yB.useCallback)((function(BB) {
            let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            DB.h.yH("WorldCodeAiDraft", {
              text: BB,
              send: TB
            }), ed.current(), DB.h.yH("EditLobbyCode", uB)
          }), [uB]),
          TV = (0, yB.useCallback)((BB => {
            ed.current(), BB.codeBlock ? DB.h.yH("EditCodeBlock", {
              pos: [...BB.pos],
              canChangePos: BB.canChangePos
            }) : DB.h.yH("EditLobbyCode", uB)
          }), [uB]);
        (0, sB.e)("WorldCodeAiDraft", (BB => {
          kB && (dT(BB), BT(!0))
        }));
        const dV = !!HT && !!NT && Jp.k.includes(NT);
        (0, yB.useEffect)((() => {
          VB && eB && uT && !dV && QB(!1)
        }), [VB, eB, uT, dV]);
        const VV = (0, yB.useCallback)((() => {
            dT(null)
          }), []),
          [yV, pV] = (0, yB.useState)(null);
        (0, sB.e)("WorldCodeAiSelection", (BB => {
          VB && (pV(BB), BT(!0), QB(!1))
        }));
        const lV = (0, yB.useCallback)((() => {
          pV(null)
        }), []);
        (0, sB.e)("chat", (BB => {
          let {
            content: TB
          } = BB;
          if (!kB && null === kT.current) return;
          const dB = Array.isArray(TB) ? TB : [TB],
            VB = dB.some((BB => {
              var TB;
              return (null === BB || void 0 === BB || null === (TB = BB.style) || void 0 === TB ? void 0 : TB.color) === MB.L.redUiText
            })),
            yB = dB.map((BB => {
              var TB;
              const dB = null !== (TB = null === BB || void 0 === BB ? void 0 : BB.str) && void 0 !== TB ? TB : BB;
              return "string" === typeof dB ? dB : ""
            })).join("");
          VB && /world code|error/i.test(yB) && (yT((BB => [...BB, yB].slice(-10))), lT((BB => BB + 1)), (0, tp.f)(yB))
        })), (0, yB.useEffect)((() => {
          if (!VB || !kB || !Od) return;
          let BB = !1;
          return (async (TB, dB) => {
            const VB = await (null === (TB = ud.current) || void 0 === TB ? void 0 : TB.tryRestoreHandle());
            !BB && VB && (Ld(!0), null === (dB = ud.current) || void 0 === dB || dB.startWhenReady())
          })(), () => {
            BB = !0
          }
        }), [VB, kB, Od]), (0, yB.useEffect)((() => {
          var BB;
          VB || (null === (BB = ud.current) || void 0 === BB || BB.stopContinuousSync(), md(!1), zT.current && (zT.current = !1, gB.gameBridge.send("sendChatMessage", {
            Jo: "//export",
            channelName: null
          })))
        }), [VB, md]);
        const JV = (0, yB.useCallback)((async () => {
            if (Od && ud.current) try {
              if (!await ud.current.linkFolder()) return;
              Ld(!0), await ud.current.startWhenReady()
            } catch (BB) {
              console.error("[WorldCodeDirectorySync] Link failed", BB), vd({
                message: Rd("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [Od, Rd]),
          YV = (0, yB.useCallback)((async () => {
            ud.current && await ud.current.unlinkFolder()
          }), []),
          gV = (0, yB.useCallback)((() => {
            Od ? kd ? YV() : JV() : sy.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [Od, kd, JV, YV]);
        return (0, oB.jsxs)(lB.b, {
          className: OT()("CodeEditorBg", {
            CodeEditorLight: KB
          }),
          close: Fd,
          escDoesExit: !0,
          show: VB,
          togglePointerLock: !1,
          globallyUniqueKey: kB ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, oB.jsx)(lp.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Rd("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!HT && !kB
          }), (0, oB.jsx)(lp.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, oB.jsxs)(oB.Fragment, {
              children: [(0, oB.jsx)("p", {
                children: Rd("codeEditor:tutorialWorldCodeWelcome")
              }), (0, oB.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, oB.jsx)("li", {
                  children: Rd("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, oB.jsx)("li", {
                  children: Rd("codeEditor:tutorialWorldCodeUseReact")
                }), (0, oB.jsx)("li", {
                  children: Rd("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!HT && kB
          }), (0, oB.jsx)("div", {
            className: "CodeEditorTitle",
            children: kB ? "World Code" : "Code Block"
          }), (0, oB.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, oB.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, oB.jsx)(qB.h, {
                tooltipInner: Rd(ET ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: ET ? void 0 : 0,
                hideTooltip: "exportButton" === vT,
                children: (0, oB.jsx)(lp.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Rd("codeEditor:tutorialExport"),
                  enabled: !!HT,
                  children: (0, oB.jsx)(OB.k, {
                    className: "CodeEditorButton",
                    disabled: !ET,
                    onClick: () => {
                      "exportButton" === vT && ((0, Jp.g)("exportButton"), MT.current = !0), zT.current = !0, Fd()
                    },
                    padDestructive: !0,
                    children: Rd("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, oB.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [HT && (0, oB.jsx)(qB.h, {
                tooltipInner: Rd("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === vT,
                children: (0, oB.jsx)(lp.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Rd("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, oB.jsx)(OB.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Rd("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, Jp.g)("helpButton"), sy.NotificationProvider.showCustomPopup({
                        body: BB => (0, oB.jsx)(Yp, {
                          close: BB
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, oB.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, oB.jsx)(HB.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, oB.jsx)(qB.h, {
                tooltipInner: Rd("codeEditor:closeTooltip"),
                children: (0, oB.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Fd()
                  },
                  children: (0, oB.jsx)(OB.i, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, oB.jsx)(zy, {
            peers: null !== (TB = null === RT || void 0 === RT ? void 0 : RT.peers) && void 0 !== TB ? TB : []
          }), (0, oB.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [RB && CB && (0, oB.jsx)(Dp, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, oB.jsx)(Op, {
                inputRef: WB,
                close: () => {
                  XB(!1)
                }
              })
            }), kB && (0, oB.jsx)(cy, {
              schematics: WT.assets,
              onManageSchematic: BB => {
                HT && sy.NotificationProvider.showCustomPopup({
                  body: TB => (0, oB.jsx)(Bp, {
                    initialPath: BB,
                    onChanged: GT,
                    onClose: TB
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: ZT,
              activePath: qT,
              canEdit: !!HT,
              directoryLinked: kd,
              pluginNames: null !== hd && void 0 !== hd ? hd : rp,
              activePluginName: jT,
              activePluginFile: bT,
              onSelect: Md,
              onSelectPlugin: zd,
              onToggleDirectorySync: gV,
              onCreate: BB => {
                gd.current = BB, gB.gameBridge.send("sendCodeCollab", {
                  Vp: iy.d.CreateFile,
                  yp: (0, iy.A)({
                    kind: "lobby",
                    path: Td.current
                  }),
                  aY: BB
                })
              },
              onRename: (BB, TB) => {
                Td.current === BB && (od.current = {
                  fromPath: BB,
                  toPath: TB
                }, xT(TB)), gB.gameBridge.send("sendCodeCollab", {
                  Vp: iy.d.RenameFile,
                  yp: (0, iy.A)({
                    kind: "lobby",
                    path: Td.current
                  }),
                  aY: BB,
                  ZY: TB
                })
              },
              onRenameFolder: (BB, TB) => {
                const [dB] = (0, Ny.k)([Td.current], BB, TB);
                dB && (od.current = {
                  fromPath: dB[0],
                  toPath: dB[1]
                }, xT(dB[1])), gB.gameBridge.send("sendCodeCollab", {
                  Vp: iy.d.RenameFolder,
                  yp: (0, iy.A)({
                    kind: "lobby",
                    path: Td.current
                  }),
                  aY: BB,
                  ZY: TB
                })
              },
              onDelete: sd
            }), (0, oB.jsx)("div", {
              className: OT()("CodeEditorMessage", {
                CodeEditorMessageHidden: !fB.message,
                CodeEditorMessageSuccess: "success" === fB.type
              }),
              children: fB.message && (0, oB.jsx)("div", {
                className: "CodeEditorMessageText",
                children: fB.message
              })
            }), (0, oB.jsx)(yB.Suspense, {
              fallback: (0, oB.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, oB.jsx)(wB.b, {})
              }),
              children: (0, oB.jsx)(sp, {
                isLobbyCode: kB,
                code: RT ? RT.doc : LB.current,
                files: kB ? ZT : void 0,
                activePath: kB ? qT : void 0,
                pluginName: jT,
                pluginFile: bT,
                pluginSource: jT && bT ? null === (dB = Uy.f[jT]) || void 0 === dB ? void 0 : dB.files[bT] : void 0,
                onChange: cd,
                canEditCode: HT,
                setTemporaryMessage: vd,
                close: Fd,
                showTooltips: UB,
                lightMode: KB,
                collabState: RT,
                setActiveDocReplacer: Wd,
                showAiHints: uT && cB,
                canAiChangeCode: !!HT && (kB || !!vB.current),
                onRemoteDocChange: BB => {
                  var TB;
                  (LB.current = BB, kB) ? (XT((TB => ({
                    ...TB,
                    [Td.current]: BB
                  }))), null === (TB = ud.current) || void 0 === TB || TB.onDocTextChanged(Td.current, BB)) : oT(BB)
                }
              })
            }), PB && (0, oB.jsx)(Dp, {
              side: "right",
              defaultWidth: "40%",
              children: (0, oB.jsx)(yB.Suspense, {
                fallback: (0, oB.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, oB.jsx)(wB.b, {})
                }),
                children: (0, oB.jsx)(Mp, {
                  popOutDocs: Sd,
                  hideDocs: Pd,
                  tutorialEnabled: !!HT
                })
              })
            }), eB && LT && uT && (0, oB.jsx)(Dp, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, oB.jsx)(yB.Suspense, {
                fallback: (0, oB.jsx)("div", {
                  className: "CodeEditorPanelLoading",
                  children: (0, oB.jsx)(wB.b, {})
                }),
                children: (0, oB.jsx)(zp, {
                  target: LT,
                  chatKey: `${PT.gameNameWithVariation}/${PT.lobbyName}/aiHelper`,
                  historyKey: `${PT.gameNameWithVariation}/${PT.lobbyName}/${LT.key}`,
                  files: LT.codeBlock ? xd : ZT,
                  activePath: LT.codeBlock ? Np.c : qT,
                  canEdit: !!HT && (LT.codeBlock ? !!vB.current : !jT),
                  isLoaded: null !== RT,
                  errors: VT,
                  errorCount: pT,
                  applyFiles: LT.codeBlock ? Gd : Cd,
                  submit: Ad,
                  testRun: bd,
                  close: nd,
                  goToLine: LT.codeBlock ? jd : Xd,
                  openWorldCode: LT.codeBlock ? BV : void 0,
                  readWorldCode: LT.codeBlock ? qd : void 0,
                  viewChunk: wp,
                  viewGameState: Up,
                  openTarget: HT ? TV : void 0,
                  draft: TT,
                  onDraftUsed: VV,
                  selection: yV,
                  onSelectionUsed: lV
                }, LT.key)
              })
            })]
          }), (null === Vd || void 0 === Vd ? void 0 : Vd.fallback) && (0, oB.jsx)(dp, {
            fallback: Vd.fallback,
            onGoToLine: Xd
          }), (0, oB.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, oB.jsx)(qB.h, {
              tooltipInner: Rd(KB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, oB.jsx)(OB.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Rd(KB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  IB(!KB)
                },
                children: (0, oB.jsx)(HB.e, {
                  name: KB ? "moon" : "sun-bright"
                })
              })
            }), (0, oB.jsx)(qB.h, {
              tooltipInner: Rd("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.k, {
                className: "CodeEditorButton",
                onClick: Kd,
                padDefaultFocus: !0,
                children: Rd("codeEditor:submitCode")
              })
            }), (0, oB.jsx)(qB.h, {
              tooltipInner: Rd(PB ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === NT || "hideDocsButton" === NT,
              children: (0, oB.jsx)(lp.h, {
                tutorial: iT,
                step: PB ? "hideDocsButton" : "docsButton",
                text: Rd(PB ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!HT,
                placement: "top",
                waitForClick: !0,
                onPrevious: PB && "welcome" === iT ? Pd : void 0,
                children: (0, oB.jsx)(OB.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, Jp.g)(PB ? "hideDocsButton" : "docsButton"), QB(!PB), BT(!1)
                  },
                  children: Rd(PB ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), uT && (0, oB.jsx)(lp.h, {
              tutorial: fT,
              step: eB ? "hideAiHelperButton" : "aiHelperButton",
              text: Rd(eB ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === fT ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!HT,
              placement: "top",
              waitForClick: !0,
              onPrevious: eB && "welcome" === fT ? Qd : void 0,
              children: (0, oB.jsx)(Zd, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, Jp.g)(eB ? "hideAiHelperButton" : "aiHelperButton"), BT(!eB), QB(!1)
                },
                children: eB ? "Hide AI Helper" : ad ? "Fix error with AI" : "AI Helper"
              })
            }), CB && (0, oB.jsx)(qB.h, {
              tooltipInner: Rd(RB ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.x, {
                className: "CodeEditorButton",
                onClick: () => {
                  hB.current = !RB, XB(!RB)
                },
                children: Rd(RB ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, oB.jsx)(qB.h, {
              tooltipInner: Rd("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  DB.h.yH("FormatCode")
                },
                children: Rd("codeEditor:formatCode")
              })
            }), (0, oB.jsx)(qB.h, {
              tooltipInner: Rd("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(LB.current).then((() => {
                    vd({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    vd({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Rd("codeEditor:copyCode")
              })
            }), (0, oB.jsx)(qB.h, {
              tooltipInner: Rd(UB ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  FB(!UB)
                },
                children: Rd(UB ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !kB && (0, oB.jsx)(qB.h, {
              tooltipInner: Rd("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === vT,
              children: (0, oB.jsx)(lp.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Rd("codeEditor:tutorialWorldCodeButton"),
                enabled: !!HT,
                placement: "top",
                waitForClick: !0,
                children: (0, oB.jsx)(OB.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === vT && ((0, Jp.g)("worldCodeButton"), MT.current = !0), Fd(), DB.h.yH("EditLobbyCode", uB)
                  },
                  children: Rd("codeEditor:worldCode")
                })
              })
            }), (QT || pd || uT) && (0, oB.jsx)(qB.h, {
              tooltipInner: Rd("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, oB.jsx)(OB.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  IT(!0)
                },
                children: (0, oB.jsx)(HB.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), rT && (0, oB.jsx)(fy.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              IT(!1)
            },
            body: (0, oB.jsx)(pp, {
              engine: pd,
              onSetEngine: Id,
              aiHints: uT ? {
                shown: cB,
                setShown: SB
              } : null,
              variation: QT ? {
                name: UT,
                setName: FT,
                reload: rd
              } : null
            })
          })]
        })
      })),
      Sp = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function Pp(BB) {
      return "inventory" === BB
    }
    const Qp = (0, yB.memo)((function() {
      const {
        openEverythingMenuName: BB,
        openInGameMenuName: TB
      } = (0, aB.m)(["openEverythingMenuName", "openInGameMenuName"]), dB = (0, zB.i)("fullInventory"), pB = (0, yB.useRef)(null), lB = (0, qT.f)();
      (0, sB.e)("toggleMenu", (BB => {
        var TB;
        if (!lB.shown) return;
        const dB = aB.d.get("openInGameMenuName");
        let VB = BB.split("|")[0];
        const yB = null !== (TB = BB.split("|")[1]) && void 0 !== TB ? TB : null;
        ("closeCurrentMenu" === yB && dB || VB === dB) && (pB.current = null, VB = null);
        const JB = "closeCurrentMenu" === yB ? null : yB;
        pB.current !== JB && (pB.current = JB), null !== VB && (0, ly.p)("InGameMenu", {
          keepsMovement: Pp(VB)
        }), aB.d.set({
          openInGameMenuName: VB
        })
      }));
      const JB = (0, yB.useCallback)((BB => () => {
          DB.h.yH("toggleMenu", BB)
        }), []),
        YB = (0, yB.useRef)({
          cantCrouchIfNotFullscreen: JB("cantCrouchIfNotFullscreen"),
          makeReport: JB("makeReport"),
          makeDiscordReport: JB("makeDiscordReport"),
          editBook: JB("editBook"),
          editNameTag: JB("editNameTag"),
          inventory: JB("inventory"),
          inviteLink: JB("inviteLink"),
          writeOnBoard: JB("writeOnBoard"),
          codeEditor: JB("codeEditor"),
          lobbyCodeEditor: JB("lobbyCodeEditor"),
          customLobbyBlockEditor: JB("customLobbyBlockEditor"),
          ironChestPasskeyInput: JB("ironChestPasskeyInput"),
          petUi: JB("petUi")
        }),
        gB = (0, yB.useCallback)((() => {
          aB.d.set({
            openInGameMenuName: null
          })
        }), []),
        kB = (0, yB.useRef)(null);
      return (0, yB.useEffect)((() => {
        if (TB) {
          var BB;
          (0, ly.p)("InGameMenu", {
            keepsMovement: Pp(TB)
          }), kB.current = Sp.has(TB) ? null !== (BB = aB.d.get("openEverythingMenuName")) && void 0 !== BB ? BB : kB.current : null, aB.d.set({
            openEverythingMenuName: null
          })
        } else {
          const BB = kB.current;
          kB.current = null, null !== BB && null === aB.d.get("openEverythingMenuName") && aB.d.set({
            openEverythingMenuName: BB
          }), pB.current = null, (0, ly.l)("InGameMenu")
        }
      }), [TB]), (0, yB.useEffect)((() => {
        null !== BB && gB()
      }), [BB, gB]), (0, oB.jsxs)(oB.Fragment, {
        children: [(0, oB.jsx)(VB.h, {
          show: "clientGame" === TB
        }), (0, oB.jsx)(dy, {
          show: "cantCrouchIfNotFullscreen" === TB,
          onOpen: YB.current.cantCrouchIfNotFullscreen,
          onClose: gB
        }), (0, oB.jsx)(yy, {
          show: "makeReport" === TB,
          onOpen: YB.current.makeReport,
          onClose: gB
        }), (0, oB.jsx)(py, {
          show: "makeDiscordReport" === TB,
          onOpen: YB.current.makeDiscordReport,
          onClose: gB
        }), (0, oB.jsx)(Hd, {
          show: "editBook" === TB,
          onOpen: YB.current.editBook,
          onClose: gB
        }), (0, oB.jsx)(ud, {
          show: "editNameTag" === TB,
          onOpen: YB.current.editNameTag,
          onClose: gB
        }), dB && (0, oB.jsx)(eV, {
          show: "inventory" === TB,
          onOpen: YB.current.inventory,
          onClose: gB,
          variation: pB.current
        }), (0, oB.jsx)(xT, {
          show: "inviteLink" === TB,
          onClose: gB,
          option: pB.current
        }), (0, oB.jsx)(SB, {
          show: "retentionFeatures" === TB,
          onClose: gB
        }), (0, oB.jsx)(Dd, {
          show: "writeOnBoard" === TB,
          onOpen: YB.current.writeOnBoard,
          onClose: gB
        }), (0, oB.jsx)(cp, {
          show: "lobbyCodeEditor" === TB,
          onOpen: YB.current.lobbyCodeEditor,
          onClose: gB,
          isLobbyCode: !0
        }), (0, oB.jsx)(cp, {
          show: "codeEditor" === TB,
          onOpen: YB.current.codeEditor,
          onClose: gB,
          isLobbyCode: !1
        }), (0, oB.jsx)(Yy, {
          show: "customLobbyBlockEditor" === TB,
          onOpen: YB.current.customLobbyBlockEditor,
          onClose: gB
        }), (0, oB.jsx)(Pd, {
          show: "ironChestPasskeyInput" === TB,
          onOpen: YB.current.ironChestPasskeyInput,
          onClose: gB
        }), (0, oB.jsx)(Dy, {
          togglePointerLock: !0,
          show: "petUi" === TB,
          onOpen: YB.current.petUi,
          onClose: gB
        })]
      })
    }))
  },
  35500: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => hp
    });
    dB(35502);
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(3237),
      JB = dB(1317),
      YB = dB(1657),
      gB = dB(980);

    function oB() {
      const BB = 2e3,
        [TB, dB] = (0, VB.useState)(null),
        [yB, oB] = (0, VB.useState)(null),
        kB = (0, VB.useRef)(null);
      (0, JB.e)("showBottomMessage", (TB => {
        let {
          message: dB,
          timeoutLength: VB = BB,
          type: yB
        } = TB;
        oB({
          message: dB,
          type: yB
        }), clearTimeout(kB.current), kB.current = setTimeout((() => {
          oB(null)
        }), VB)
      })), (0, JB.e)("showPermanentBottomMessage", (BB => {
        dB(BB)
      })), (0, VB.useEffect)((() => ((0, lB.b)((() => {
        dB(null)
      })), () => {
        clearTimeout(kB.current)
      })), []);
      const LB = yB || TB;
      return LB ? (0, gB.jsx)("div", {
        className: pB()("BottomScreenMessage", LB.type),
        children: (0, gB.jsx)(YB.e, {
          text: LB.message
        })
      }) : null
    }
    var kB = dB(2068),
      LB = dB(1679),
      OB = dB(1407),
      DB = dB(2144);

    function uB() {
      let BB;
      const TB = () => {
          clearTimeout(BB), BB = setTimeout((() => {
            LB.gameBridge.latest("connectedGame").replay || (LB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, OB.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        dB = () => {
          clearTimeout(BB)
        };
      return window.addEventListener("focus", dB), window.addEventListener("blur", TB), () => {
        window.removeEventListener("blur", TB), window.removeEventListener("focus", dB), clearTimeout(BB)
      }
    }
    var HB = dB(1011),
      EB = dB(1002),
      vB = dB(270),
      mB = dB(2139),
      iB = dB(24),
      NB = dB(1708),
      tB = dB(33),
      fB = dB(1727),
      sB = dB(21),
      MB = dB(1736),
      zB = dB(1275),
      wB = dB(8164),
      UB = dB(1757),
      FB = dB(1078);
    const KB = (0, VB.memo)((function() {
      const {
        isTouchScreen: BB,
        loadingOverlayVisible: TB,
        openInGameMenuName: dB,
        openEverythingMenuName: yB
      } = (0, sB.m)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), lB = (0, zB.r)();
      (0, EB.e)();
      const JB = (0, mB.j)("showBasicMovementControls"),
        [YB, oB] = (0, VB.useState)("movement"),
        kB = "movement" === YB,
        LB = lB && !1 !== JB;
      (0, VB.useEffect)((() => {
        "padActions" !== YB || LB || oB("done")
      }), [YB, LB]);
      const OB = TB || null !== dB || null !== yB,
        DB = (0, VB.useRef)({
          step: YB,
          ms: 0
        });
      return (0, VB.useEffect)((() => {
        if (OB || "done" === YB) return;
        DB.current.step !== YB && (DB.current = {
          step: YB,
          ms: 0
        });
        const BB = DB.current,
          TB = performance.now(),
          dB = setTimeout((() => {
            oB("movement" === YB && (0, zB.i)() ? "padActions" : "done")
          }), 7e3 - BB.ms);
        return () => {
          clearTimeout(dB), BB.ms += performance.now() - TB
        }
      }), [OB, YB]), tB.j.getItem(vB.Hb) > 2 ? (0, gB.jsx)(SB, {
        showingMovementControls: !1
      }) : (0, gB.jsxs)(gB.Fragment, {
        children: [BB && !lB || !kB || !1 === JB ? null : (0, gB.jsxs)("div", {
          className: pB()("ControlsTutorialDiv", {
            Covered: OB
          }),
          children: [(0, gB.jsx)(rB, {}), (0, gB.jsx)(cB, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, gB.jsx)(cB, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === YB && LB && (0, gB.jsx)(IB, {
          covered: OB
        }), (0, gB.jsx)(SB, {
          showingMovementControls: "done" !== YB
        })]
      })
    }));

    function rB() {
      const BB = (0, zB.r)();
      return (0, gB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, gB.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), BB && (0, gB.jsx)(MB.d, {
          noaAction: "forward"
        }), !BB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, gB.jsx)(MB.d, {
              noaAction: "forward"
            })
          }), (0, gB.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, gB.jsx)(MB.d, {
              noaAction: "left"
            }), (0, gB.jsx)(MB.d, {
              noaAction: "backward"
            }), (0, gB.jsx)(MB.d, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function IB(BB) {
      let {
        covered: TB
      } = BB;
      const {
        t: dB
      } = (0, FB.z)(), VB = (0, mB.j)("useInventory");
      return (0, gB.jsxs)("div", {
        className: pB()("ControlsTutorialDiv", {
          Covered: TB
        }),
        children: [(0, gB.jsx)(cB, {
          header: dB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, gB.jsx)(cB, {
          header: dB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== VB && (0, gB.jsx)(cB, {
          header: dB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, gB.jsx)(cB, {
          header: dB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function cB(BB) {
      let {
        header: TB,
        noaAction: dB
      } = BB;
      return (0, gB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, gB.jsx)("div", {
          className: "KeyHeader",
          children: TB
        }), (0, gB.jsx)(MB.d, {
          noaAction: dB
        })]
      })
    }

    function SB(BB) {
      let {
        showingMovementControls: TB
      } = BB;
      const {
        isTouchScreen: dB
      } = (0, sB.m)(["isTouchScreen"]), yB = (0, zB.r)(), pB = (0, UB.b)("OpenShop"), [lB, JB] = (0, VB.useState)(!1), YB = `SeenShopControls|${(0,fB.g)("connectedGame",(BB=>BB.gameNameWithVariation))}`, oB = () => (!(0, zB.i)() || null !== (0, wB.c)("OpenShop")) && !tB.j.getItem(YB) && NB.c.get("shopInfo") && !TB, kB = () => (JB(!0), tB.j.setItem(YB, !0), (0, zB.i)() || iB.h.yH("showShopTouchTutorial"), setTimeout((() => {
        JB(!1)
      }), 7e3));
      (0, VB.useEffect)((() => {
        let BB;
        const TB = iB.h.subscribe("showShopTutorial", (() => {
          oB() && (BB = kB())
        }));
        return () => {
          clearTimeout(BB), iB.h.unsubscribe(TB)
        }
      }), [TB]);
      const LB = (0, VB.useRef)();
      return (0, mB.i)("currencyAmounts", (BB => {
        if (oB()) {
          let dB = !1;
          const VB = NB.c.get("shopInfo");
          for (const yB in VB) {
            for (const pB in VB[yB].items) {
              var TB;
              const lB = VB[yB].items[pB];
              if (void 0 !== lB.currency && BB[lB.currency] && lB.cost <= BB[lB.currency].amount && (null === (TB = lB.hidden) || void 0 === TB || !TB)) {
                dB = !0;
                break
              }
            }
            if (dB) break
          }
          dB && (LB.current = kB())
        }
      })), (0, VB.useEffect)((() => () => {
        clearTimeout(LB.current)
      }), [TB]), !lB || yB && !pB ? null : (0, gB.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: dB && !yB ? null : (0, gB.jsx)(cB, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var PB = dB(1249),
      QB = dB(946);
    const RB = (0, VB.memo)((function() {
      return (0, EB.e)(), (0, gB.jsx)(aB, {})
    }));
    class aB extends VB.Component {
      constructor(BB) {
        super(BB), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = iB.h.subscribe("TopRightHelper", (BB => {
          this.showQueue.push(BB), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        iB.h.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(BB, TB) {
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
        let BB, TB, dB, VB, yB, pB = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, BB = "slideIn") : "slideOut" === this.state.currState ? BB = "slideOut" : null === this.currMessage && (pB = !1), this.currMessage) {
          const pB = this.currMessage.color || "rgb(102, 102, 102)";
          TB = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === BB ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, dB = {
            backgroundColor: pB
          }, VB = {
            animation: "2s " + ("slideOut" === BB ? "CloseNotification" : "ExpandNotification")
          }, yB = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === BB ? "textDisappear" : "textAppear")
          }
        }
        return pB ? (0, gB.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...TB
          },
          children: [(0, gB.jsx)("div", {
            className: "LeftSide",
            style: dB,
            children: (0, gB.jsx)(QB.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, gB.jsx)("div", {
            className: "RightSide",
            style: VB,
            children: (0, gB.jsx)("div", {
              className: "HelperText",
              style: yB,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var ZB = dB(35510),
      XB = dB(1286);
    const WB = (0, XB.l)((BB => BB.PadSneakChip));

    function hB(BB) {
      const [TB, dB, VB] = function(BB) {
        const TB = parseInt(BB.substring(1), 16),
          dB = (TB >> 16) / 255,
          VB = (TB >> 8 & 255) / 255,
          yB = (255 & TB) / 255,
          pB = Math.max(dB, VB, yB),
          lB = Math.min(dB, VB, yB),
          JB = (pB + lB) / 2,
          YB = pB - lB;
        if (0 === YB) return [0, 0, JB];
        const gB = YB / (1 - Math.abs(2 * JB - 1));
        let oB;
        oB = pB === dB ? (VB - yB) / YB % 6 : pB === VB ? (yB - dB) / YB + 2 : (dB - VB) / YB + 4;
        return [(60 * oB + 360) % 360, gB, JB]
      }(BB), yB = 0 === dB ? 0 : Math.min(.6, dB + .03), pB = VB > .5 ? -1 : 1, lB = CB(VB + .09 * pB);
      return {
        panel: BB,
        slot: GB(TB, yB, lB),
        slotSelected: GB(TB, yB, CB(lB + .2 * pB)),
        slotUnavailable: GB(TB, yB, CB(VB + -.1 * pB))
      }
    }

    function CB(BB) {
      return Math.min(1, Math.max(0, BB))
    }

    function GB(BB, TB, dB) {
      const VB = (1 - Math.abs(2 * dB - 1)) * TB,
        yB = VB * (1 - Math.abs(BB / 60 % 2 - 1)),
        pB = dB - VB / 2;
      let lB;
      return lB = BB < 60 ? [VB, yB, 0] : BB < 120 ? [yB, VB, 0] : BB < 180 ? [0, VB, yB] : BB < 240 ? [0, yB, VB] : BB < 300 ? [yB, 0, VB] : [VB, 0, yB], "#" + lB.map((BB => function(BB) {
        return Math.round(255 * BB).toString(16).padStart(2, "0")
      }(BB + pB))).join("")
    }
    var qB = dB(35538),
      xB = dB(3762),
      jB = dB(2101),
      AB = dB(2109),
      bB = dB(35577),
      nB = dB(4209),
      eB = dB(1345),
      BT = dB(572);

    function TT(BB, TB, dB, VB) {
      BB.style.display = "";
      const yB = BB.offsetWidth,
        pB = BB.offsetHeight,
        lB = Math.min(Math.max((TB.left + TB.right) / 2 - yB / 2, 8), window.innerWidth - 8 - yB);
      let JB = TB.top - dB - pB;
      const YB = [...VB].sort(((BB, TB) => TB.top - BB.top));
      for (const gB of YB) lB < gB.right && lB + yB > gB.left && JB < gB.bottom && JB + pB > gB.top && (JB = gB.top - 8 - pB);
      return JB < 8 ? (BB.style.display = "none", null) : (BB.style.transform = `translate(${lB-TB.left}px, ${JB-TB.top}px)`, {
        left: lB,
        top: JB,
        right: lB + yB,
        bottom: JB + pB
      })
    }

    function dT(BB) {
      const TB = [];
      for (const dB of document.querySelectorAll(BB)) {
        const BB = dB.getBoundingClientRect();
        BB.width > 0 && "visible" === getComputedStyle(dB).visibility && TB.push(BB)
      }
      return TB
    }

    function VT(BB, TB) {
      return BB.clientX >= TB.left - 8 && BB.clientX <= TB.right + 8 && BB.clientY >= TB.top - 8 && BB.clientY <= TB.bottom + 8
    }
    var yT = dB(8204);
    class pT {
      constructor(BB) {
        this.deps = BB, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(BB) {
        BB && "armed" === this.phase ? this.setPhase("ready") : BB || "ready" !== this.phase || this.setPhase("armed")
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
      hold(BB, TB) {
        this.suspended || (this.offered ? TB || this.setPhase("idle") : BB && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : BB || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(BB) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const TB = this.phase;
        this.phase = BB, this.deps.onPhase(BB, TB)
      }
    }
    const lT = 25 * Math.PI / 180,
      JT = 45 * Math.PI / 180;
    class YT extends pT {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(BB, TB, dB) {
        this.speed = dB;
        const VB = Math.hypot(BB, TB),
          yB = VB > 0 ? Math.acos(Math.min(1, -TB / VB)) : Math.PI;
        this.hold(VB >= .8 && yB <= lT, VB >= .5 && yB <= JT)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var gT = dB(1173);

    function oT(BB, TB) {
      const dB = (0, VB.useRef)(null),
        yB = (0, VB.useRef)(TB);
      return yB.current = TB, (0, VB.useEffect)((() => {
        if (!BB) return;
        const {
          create: TB,
          elementRef: VB,
          ringRef: pB,
          classPrefix: lB,
          keptBehindMovementPanels: JB,
          resizeEnds: YB
        } = yB.current, gB = {
          charging: `${lB}Charging`,
          armed: `${lB}Armed`,
          ready: `${lB}Ready`,
          locked: `${lB}Locked`
        };
        let oB = null;
        const kB = TB({
          onPhase: (BB, TB) => {
            const dB = VB.current;
            if (null !== dB) {
              for (const [TB, VB] of Object.entries(gB)) dB.classList.toggle(VB, TB === BB);
              if ("charging" === BB) oB = pB.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === BB) {
                var lB;
                null === (lB = oB) || void 0 === lB || lB.cancel(), oB = null
              }
              var JB, YB;
              if ("armed" === BB && "charging" === TB && yB.current.onArmed(), "ready" === BB && yT.f.play("lockReady"), "locked" === BB) yT.f.play("lockLocked"), null === (JB = (YB = yB.current).onLocked) || void 0 === JB || JB.call(YB);
              "locked" === TB && yB.current.onUnlocked()
            }
          }
        });
        dB.current = kB;
        const LB = () => {
            kB.suspend()
          },
          OB = () => {
            "hidden" === document.visibilityState && LB()
          },
          DB = () => {
            YB ? kB.suspend() : kB.suspendArming()
          },
          uB = (0, gT.e)((BB => {
            let {
              keepsMovement: TB
            } = BB;
            TB && JB ? kB.suspendArming() : LB()
          }));
        return document.addEventListener("visibilitychange", OB), window.addEventListener("blur", LB), window.addEventListener("resize", DB), () => {
          uB(), document.removeEventListener("visibilitychange", OB), window.removeEventListener("blur", LB), window.removeEventListener("resize", DB), kB.cancel(), dB.current = null
        }
      }), [BB]), (0, fB.c)("localPlayerAliveSet", (() => {
        var BB;
        null === (BB = dB.current) || void 0 === BB || BB.suspend()
      })), dB
    }
    const kT = 50;

    function LT(BB) {
      let {
        onMove: TB,
        mode: dB,
        speedCurve: yB,
        autorun: pB = !1
      } = BB;
      const lB = (0, VB.useRef)(null),
        JB = (0, VB.useRef)(null),
        YB = (0, VB.useRef)(null),
        oB = (0, VB.useRef)(null),
        kB = (0, VB.useRef)(null),
        OB = (0, VB.useRef)(null),
        DB = (0, VB.useRef)(null),
        uB = (0, VB.useRef)(null),
        HB = (0, VB.useRef)(!1),
        EB = (0, VB.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: vB
        } = (0, FB.z)(),
        mB = "fixed_shown" === dB || "fixed_hidden" === dB,
        iB = (0, sB.m)(["notchSize"]).notchSize.left,
        NB = function(BB, TB, dB, yB, pB) {
          const lB = (0, VB.useRef)(null),
            JB = () => {
              clearInterval(lB.current), lB.current = null
            },
            YB = oT(BB, {
              create: BB => new YT(BB),
              elementRef: TB,
              ringRef: dB,
              classPrefix: "Autorun",
              keptBehindMovementPanels: !0,
              resizeEnds: !0,
              onArmed: pB,
              onLocked: () => {
                lB.current = setInterval((() => {
                  LB.gameBridge.lookup("dropAhead", null) && (yT.f.play("autorunLedgeStop"), YB.current.cancel())
                }), 100)
              },
              onUnlocked: () => {
                JB(), yB()
              }
            });
          return (0, VB.useEffect)((() => JB), []), YB
        }(pB, JB, OB, (() => {
          UB(), wB()
        }), (() => {
          tB(), null === uB.current && NB.current.suspend()
        }));

      function tB() {
        const BB = JB.current.getBoundingClientRect();
        uB.current = TT(DB.current, BB, 80, dT(".TouchInventoryKey")), HB.current = null !== uB.current && VT(EB.current, uB.current)
      }

      function fB(BB) {
        JB.current.style.transform = `translate(${BB.x-kT}px, ${BB.y-kT}px)`
      }

      function MB(BB) {
        const TB = JB.current;
        TB.classList.add("Resting"), TB.classList.toggle("Returning", BB), TB.style.display = "fixed_hidden" === dB ? "none" : "block", fB(function() {
          const BB = iB * window.innerWidth / 100,
            TB = window.innerHeight > window.innerWidth ? 135 : 100;
          return {
            x: BB + 90,
            y: window.innerHeight - TB
          }
        }())
      }
      const zB = (0, VB.useRef)({
        restFixed: MB,
        release: KB
      });

      function wB() {
        mB ? MB("fixed_shown" === dB) : "floating" === dB && (JB.current.style.display = "none"), TB({
          x: 0,
          y: 0
        })
      }

      function UB() {
        kB.current = null, oB.current = null, YB.current.style.transform = "translate(-50%, -50%)"
      }

      function KB(BB) {
        UB();
        const dB = NB.current;
        BB && null !== dB && void 0 !== dB && dB.lift() ? TB({
          x: 0,
          y: -dB.lockedSpeed
        }) : (null === dB || void 0 === dB || dB.cancel(), wB())
      }

      function rB(BB) {
        const dB = Array.from(BB.touches).find((BB => BB.identifier === kB.current));
        if (null === oB.current || null === kB.current || (0, BT.M)(dB)) return;
        const VB = NB.current,
          pB = dB.clientX - oB.current.x,
          lB = dB.clientY - oB.current.y,
          JB = Math.hypot(pB, lB),
          gB = JB > 0 ? Math.min(1, kT / JB) : 0,
          LB = pB * gB,
          OB = lB * gB,
          DB = Math.hypot(LB, OB) / kT,
          vB = yB && DB > 0 ? yB(DB) / DB : 1;
        YB.current.style.transform = `translate(calc(-50% + ${LB}px), calc(-50% + ${OB}px))`;
        const mB = LB / kT,
          iB = OB / kT;
        if (TB({
            x: mB * vB,
            y: iB * vB
          }), null !== VB && null !== uB.current) {
          VB.move(mB, iB, DB * vB), EB.current = {
            clientX: dB.clientX,
            clientY: dB.clientY
          };
          const BB = HB.current;
          HB.current = VT(dB, uB.current), HB.current !== BB && VB.target(HB.current)
        }
      }
      return zB.current = {
        restFixed: MB,
        release: KB
      }, (0, VB.useLayoutEffect)((() => {
        if (!mB) return;
        null === kB.current && zB.current.restFixed(!1);
        const BB = () => {
          null === kB.current && zB.current.restFixed(!1)
        };
        window.addEventListener("resize", BB);
        const TB = JB.current;
        return () => {
          window.removeEventListener("resize", BB), TB.classList.remove("Resting", "Returning"), null === kB.current && (TB.style.display = "", TB.style.transform = "")
        }
      }), [mB, dB, iB]), (0, VB.useEffect)((() => {
        const BB = BB => {
            const TB = kB.current;
            null === TB || Array.from(BB.touches).some((BB => BB.identifier === TB)) || zB.current.release("touchend" === BB.type && Array.from(BB.changedTouches).some((BB => BB.identifier === TB)))
          },
          TB = () => {
            null !== kB.current && zB.current.release(!1)
          },
          dB = () => {
            "hidden" === document.visibilityState && TB()
          };
        document.addEventListener("touchstart", BB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", BB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", BB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", BB, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", TB), document.addEventListener("visibilitychange", dB);
        const VB = (0, gT.e)((BB => {
          let {
            keepsMovement: dB
          } = BB;
          dB || TB()
        }));
        return () => {
          VB(), document.removeEventListener("touchstart", BB, {
            capture: !0
          }), document.removeEventListener("touchmove", BB, {
            capture: !0
          }), document.removeEventListener("touchend", BB, {
            capture: !0
          }), document.removeEventListener("touchcancel", BB, {
            capture: !0
          }), window.removeEventListener("blur", TB), document.removeEventListener("visibilitychange", dB)
        }
      }), []), (0, VB.useEffect)((() => {
        const BB = lB.current,
          TB = BB => {
            BB.preventDefault()
          };
        return BB.addEventListener("touchstart", TB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", TB)
        }
      }), []), (0, gB.jsx)("div", {
        ref: lB,
        className: "JoystickZone",
        onTouchStart: function(BB) {
          var TB;
          if (null !== kB.current) return;
          const VB = Array.from(BB.changedTouches).find((BB => {
            var TB;
            return null === (TB = lB.current) || void 0 === TB ? void 0 : TB.contains(BB.target)
          }));
          if (VB) {
            if (null === (TB = NB.current) || void 0 === TB || TB.startTouch(), kB.current = VB.identifier, "pinned" === dB) {
              const BB = JB.current.getBoundingClientRect();
              oB.current = {
                x: BB.left + BB.width / 2,
                y: BB.top + BB.height / 2
              }
            } else oB.current = {
              x: VB.clientX,
              y: VB.clientY
            }, JB.current.classList.remove("Resting", "Returning"), JB.current.style.display = "block", fB(oB.current), pB && (EB.current = {
              clientX: VB.clientX,
              clientY: VB.clientY
            }, tB());
            rB(BB)
          }
        },
        onTouchMove: rB,
        children: (0, gB.jsxs)("div", {
          ref: JB,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === dB ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, gB.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), pB && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, gB.jsx)("circle", {
                ref: OB,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, gB.jsxs)("div", {
              ref: DB,
              className: "AutorunTarget",
              children: [(0, gB.jsx)(QB.e, {
                name: "lock"
              }), vB("settingsMenu:autoRun")]
            })]
          }), (0, gB.jsx)("div", {
            ref: YB,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var OT = dB(35586),
      DT = dB(2884);

    function uT(BB, TB) {
      const dB = (0, VB.useRef)(null);
      return (0, VB.useLayoutEffect)((() => (bB.e.set(BB, dB.current, TB), () => {
        bB.e.set(BB, null)
      })), [BB, TB]), dB
    }
    const HT = "C",
      ET = "J",
      vT = "U",
      mT = "P",
      iT = "A",
      NT = "G",
      tT = "X",
      fT = (0, VB.forwardRef)((function(BB, TB) {
        let {
          slot: dB,
          canvasZone: yB = !1,
          lit: lB = !1,
          label: JB,
          className: YB,
          children: oB,
          ...kB
        } = BB;
        return (0, VB.useEffect)((() => (iB.h.yH(DT.e), () => {
          iB.h.yH(DT.e)
        })), []), (0, gB.jsx)("div", {
          ref: TB,
          className: pB()("TouchKeyHit", `TouchSlot${dB}`, YB, {
            CanvasZone: yB
          }),
          ...kB,
          children: (0, gB.jsxs)("div", {
            className: pB()("TouchKey", {
              Lit: lB,
              Labelled: void 0 !== JB
            }),
            children: [oB, void 0 !== JB && (0, gB.jsx)("span", {
              className: "TouchKeyLabel",
              children: JB
            })]
          })
        })
      }));

    function sT(BB, TB) {
      (0, VB.useEffect)((() => () => {
        TB.current && (TB.current = !1, (0, AB.u)(BB, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function MT(BB, TB) {
      const dB = TB ? [tT] : [mT, tT];
      return BB.filter((BB => null !== BB)).slice(0, dB.length).map(((BB, TB) => {
        const yB = dB[TB];
        return (0, gB.jsx)(VB.Fragment, {
          children: BB.render(yB)
        }, `${BB.id}:${yB}`)
      }))
    }
    var zT = dB(35568);
    class wT extends pT {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(BB, TB) {
        this.start = {
          x: BB,
          y: TB
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(BB, TB, dB) {
        const VB = Math.hypot(BB - this.start.x, TB - this.start.y) <= 12;
        this.moved ||= !VB;
        const yB = null !== dB && TB < this.start.y - 12 && VT({
          clientX: BB,
          clientY: TB
        }, dB);
        this.hold(!this.moved, VB || yB)
      }
    }
    const UT = new Set;

    function FT(BB) {
      const TB = new Set(Array.from(BB.touches, (BB => BB.identifier)));
      for (const dB of UT) {
        for (const BB of dB.ids) TB.has(BB) || dB.ids.delete(BB);
        if (0 === dB.ids.size) {
          UT.delete(dB);
          dB.pressesOnPointerDown && "touchstart" === BB.type && Array.from(BB.changedTouches).some((BB => BB.target instanceof Node && dB.element.contains(BB.target))) || dB.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const Bl of ["touchstart", "touchmove"]) window.addEventListener(Bl, FT, {
        capture: !0,
        passive: !0
      });

    function KT(BB) {
      let {
        pressesOnPointerDown: TB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const dB = (0, VB.useRef)(BB);
      dB.current = BB;
      const yB = (0, VB.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: TB,
        release: () => {
          dB.current()
        }
      });
      (0, VB.useEffect)((() => {
        const BB = yB.current;
        return () => {
          UT.delete(BB), BB.ids.clear()
        }
      }), []);
      const pB = BB => {
        const TB = yB.current;
        for (const dB of Array.from(BB.changedTouches)) TB.ids.delete(dB.identifier);
        0 === TB.ids.size && UT.delete(TB)
      };
      return {
        onTouchStart: BB => {
          const TB = yB.current;
          TB.element = BB.currentTarget;
          for (const dB of Array.from(BB.changedTouches)) dB.target instanceof Node && BB.currentTarget.contains(dB.target) && TB.ids.add(dB.identifier);
          TB.ids.size > 0 && UT.add(TB)
        },
        onTouchEnd: pB,
        onTouchCancel: pB
      }
    }

    function rT(BB, TB) {
      return null === TB ? null : (0, zT.c)(BB.nativeEvent.changedTouches, TB.id)
    }

    function IT(BB) {
      let {
        lockable: TB
      } = BB;
      const {
        t: dB
      } = (0, FB.z)(), yB = (0, VB.useRef)(!1);
      sT(jB.y.Jump, yB);
      const pB = (0, VB.useRef)(null),
        lB = (0, VB.useRef)(null),
        JB = (0, VB.useRef)(null),
        YB = (0, VB.useRef)(null),
        oB = (0, VB.useRef)(null),
        kB = (0, VB.useRef)(null),
        LB = (0, VB.useRef)(!1),
        OB = (BB, TB) => {
          yB.current = BB, (0, AB.u)(jB.y.Jump, BB, TB)
        },
        DB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          yB.current && (pB.current && (0, eB.f)(pB.current, !1), OB(!1, BB))
        },
        uB = oT(TB, {
          create: BB => new wT(BB),
          elementRef: pB,
          ringRef: lB,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const BB = pB.current.getBoundingClientRect(),
              TB = JB.current.parentElement,
              dB = TB.getBoundingClientRect(),
              VB = {
                left: dB.left + TB.clientLeft,
                top: dB.top + TB.clientTop,
                right: dB.right - TB.clientLeft,
                bottom: dB.bottom - TB.clientTop
              };
            if (oB.current = TT(JB.current, VB, 16, dT(".TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey")), null === oB.current) return void uB.current.suspend();
            const yB = oB.current;
            kB.current = {
              left: Math.min(BB.left, yB.left),
              top: yB.top,
              right: Math.max(BB.right, yB.right),
              bottom: BB.bottom
            }, LB.current = null !== YB.current && VT({
              clientX: YB.current.x,
              clientY: YB.current.y
            }, yB)
          },
          onUnlocked: () => {
            null === YB.current && DB()
          }
        }),
        HB = BB => {
          var TB;
          YB.current = null, null === (TB = uB.current) || void 0 === TB || TB.cancel(), DB(BB)
        },
        EB = KT((() => {
          HB()
        })),
        vB = BB => {
          const TB = YB.current;
          var dB;
          return null === TB ? null !== (dB = uB.current) && void 0 !== dB && dB.locked ? null : "lifted" : rT(BB, TB) ? "lifted" : (0, zT.g)(BB.nativeEvent.touches, TB.id) ? null : "dropped"
        };
      return (0, gB.jsxs)(fT, {
        ref: pB,
        slot: ET,
        className: "JumpKey",
        onTouchStart: BB => {
          EB.onTouchStart(BB), (0, eB.f)(BB.currentTarget, !0), null === YB.current || (0, zT.g)(BB.nativeEvent.touches, YB.current.id) || HB();
          const TB = BB.changedTouches[0];
          var dB;
          null === YB.current && TB && (YB.current = {
            id: TB.identifier,
            x: TB.clientX,
            y: TB.clientY
          }, null === (dB = uB.current) || void 0 === dB || dB.press(TB.clientX, TB.clientY));
          yB.current || OB(!0, BB.nativeEvent)
        },
        onTouchMove: BB => {
          const TB = YB.current,
            dB = rT(BB, TB);
          if (!dB) return;
          const VB = uB.current;
          if (null === VB || void 0 === VB || VB.move(dB.clientX, dB.clientY, kB.current), null !== VB && void 0 !== VB && VB.offered) {
            const BB = VT(dB, oB.current);
            BB !== LB.current && (LB.current = BB, VB.target(BB))
          }
          TB.x = dB.clientX, TB.y = dB.clientY
        },
        onTouchEnd: BB => {
          var TB;
          EB.onTouchEnd(BB);
          const dB = vB(BB);
          null !== dB && ("dropped" !== dB ? (YB.current = null, null !== (TB = uB.current) && void 0 !== TB && TB.lift() ? (0, eB.f)(BB.currentTarget, !1) : DB(BB.nativeEvent)) : HB(BB.nativeEvent))
        },
        onTouchCancel: BB => {
          EB.onTouchCancel(BB), null !== vB(BB) && HB(BB.nativeEvent)
        },
        children: [(0, gB.jsx)(QB.e, {
          name: "arrow-up-from-line"
        }), TB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, gB.jsx)(QB.e, {
              name: "lock"
            })
          }), (0, gB.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, gB.jsx)("rect", {
              ref: lB,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: "10",
              pathLength: 1
            })
          }), (0, gB.jsxs)("div", {
            ref: JB,
            className: "JumpLockTarget",
            children: [(0, gB.jsx)(QB.e, {
              name: "lock"
            }), dB("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const cT = new WeakMap;
    class ST {
      constructor(BB) {
        this.zones = BB, this.followed = new Map, this.onStart = BB => {
          if (this.releaseMissing(BB.touches), BB.target instanceof HTMLCanvasElement)
            for (let dB = 0; dB < BB.changedTouches.length; dB++) {
              var TB;
              const {
                identifier: VB,
                clientX: yB,
                clientY: pB
              } = BB.changedTouches[dB];
              this.release(VB);
              const lB = this.zones.hitZone(yB, pB);
              if (!lB) continue;
              const {
                key: JB
              } = lB;
              null === (TB = cT.get(JB)) || void 0 === TB || TB.cancel();
              const YB = {
                hit: lB.element,
                key: JB,
                x: lB.x,
                y: lB.y,
                reach: .6 * lB.radius
              };
              this.followed.set(VB, YB), (0, eB.f)(lB.element, !0), PT(YB, yB, pB)
            }
        }, this.onMove = BB => {
          this.releaseMissing(BB.touches);
          for (let TB = 0; TB < BB.changedTouches.length; TB++) {
            const {
              identifier: dB,
              clientX: VB,
              clientY: yB
            } = BB.changedTouches[TB], pB = this.followed.get(dB);
            pB && PT(pB, VB, yB)
          }
        }, this.onEnd = BB => {
          for (let TB = 0; TB < BB.changedTouches.length; TB++) this.release(BB.changedTouches[TB].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const BB = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, BB), document.addEventListener("touchmove", this.onMove, BB), document.addEventListener("touchend", this.onEnd, BB), document.addEventListener("touchcancel", this.onEnd, BB), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(BB) {
        for (const TB of [...this.followed.keys()])(0, zT.g)(BB, TB) || this.release(TB)
      }
      releaseAll() {
        for (const BB of [...this.followed.keys()]) this.release(BB)
      }
      release(BB) {
        const TB = this.followed.get(BB);
        if (!TB) return;
        this.followed.delete(BB);
        for (const yB of this.followed.values())
          if (yB.key === TB.key) return;
        (0, eB.f)(TB.hit, !1);
        const {
          key: dB
        } = TB, VB = dB.style.translate;
        dB.style.translate = "", VB && cT.set(dB, dB.animate({
          translate: [VB, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function PT(BB, TB, dB) {
      let {
        key: VB,
        x: yB,
        y: pB,
        reach: lB
      } = BB;
      const JB = TB - yB,
        YB = dB - pB,
        gB = Math.min(1, lB / (Math.hypot(JB, YB) || 1));
      VB.style.translate = `${JB*gB}px ${YB*gB}px`
    }
    const QT = () => {
      const BB = (0, xB.l)(),
        TB = (0, zB.r)();
      return BB || TB
    };

    function RT(BB) {
      (0, bB.h)(BB.x, BB.y)
    }
    const aT = (0, VB.memo)((function() {
        const BB = QT(),
          {
            joystickMode: TB,
            touchSpeedCurve: dB,
            autorun: yB
          } = (0, sB.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, VB.useEffect)((() => ((0, nB.f)(jB.A.TouchControls, jB.A.TouchControls), () => {
          (0, nB.f)(jB.A.TouchControls, 0), (0, bB.h)(0, 0)
        })), []), (0, gB.jsx)("div", {
          className: pB()("TouchMovementWrapper", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: (0, gB.jsx)(LT, {
            onMove: RT,
            mode: TB,
            speedCurve: dB ? OT.d : void 0,
            autorun: yB
          })
        })
      })),
      ZT = (0, VB.memo)((function() {
        const BB = QT(),
          {
            clientEscMenuOptions: TB
          } = (0, sB.m)(["clientEscMenuOptions"]),
          dB = TB.touchActionButtons;
        return (0, VB.useEffect)((() => new ST(bB.e).start()), []), (0, VB.useEffect)((() => {
          iB.h.yH(DT.e)
        }), [BB]), (0, gB.jsxs)("div", {
          className: pB()("TouchComponentsButtons", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: [(0, gB.jsx)(IT, {
            lockable: TB.jumpLock && !BB
          }), (0, gB.jsx)(eT, {
            hidden: BB,
            actionButtons: dB
          }), (0, gB.jsx)(WT, {})]
        })
      }));

    function XT(BB) {
      const TB = TB => dB => {
        (0, eB.f)(dB.currentTarget, TB), BB(TB, dB.nativeEvent)
      };
      return {
        onPointerDown: TB(!0),
        onPointerUp: TB(!1),
        onPointerCancel: TB(!1)
      }
    }

    function WT() {
      const BB = (0, mB.j)("canCrouch"),
        TB = (0, fB.i)("crouching"),
        dB = (0, VB.useRef)(!1);
      sT(jB.y.Crouch, dB);
      const yB = (BB, TB) => {
          dB.current = BB, (0, AB.u)(jB.y.Crouch, BB, TB)
        },
        pB = (0, VB.useRef)(null),
        lB = () => {
          dB.current && (pB.current && (0, eB.f)(pB.current, !1), yB(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        JB = KT(lB);
      return (0, VB.useEffect)((() => {
        !1 === BB && lB()
      }), [BB]), !1 === BB ? null : (0, gB.jsx)(fT, {
        ref: pB,
        slot: HT,
        className: "CrouchKey",
        lit: TB,
        ...JB,
        ...XT(yB),
        children: (0, gB.jsx)(QB.e, {
          name: "arrow-down-to-line"
        })
      })
    }
    const hT = [{
        icon: "arrows-rotate"
      }],
      CT = [{
        icon: "Arrow"
      }],
      GT = [{
        icon: "crosshairs"
      }],
      qT = [{
        icon: "swords"
      }],
      xT = [{
        icon: "hand-back-point-up"
      }],
      jT = [{
        icon: "Firecracker"
      }];

    function AT(BB, TB, dB, VB) {
      return {
        id: JSON.stringify(TB),
        render: yB => (0, gB.jsx)(Bd, {
          code: BB,
          slot: yB,
          icon: TB,
          label: VB,
          hidden: dB
        })
      }
    }

    function bT(BB, TB) {
      return {
        id: "fly",
        render: dB => (0, gB.jsx)(nT, {
          slot: dB,
          flying: BB,
          label: TB
        })
      }
    }

    function nT(BB) {
      let {
        slot: TB,
        flying: dB,
        label: VB
      } = BB;
      return (0, gB.jsx)(fT, {
        slot: TB,
        className: "FlyKey",
        lit: dB,
        label: VB,
        ...XT(((BB, TB) => {
          (0, AB.u)(jB.y.Fly, BB, TB)
        })),
        children: (0, gB.jsx)(QB.e, {
          name: "feather-pointed"
        })
      })
    }

    function eT(BB) {
      var TB, dB;
      let {
        hidden: VB,
        actionButtons: yB
      } = BB;
      const {
        t: pB
      } = (0, FB.z)(), {
        gun: lB,
        aimable: JB,
        chargeName: YB
      } = (0, fB.i)("heldItemAim"), oB = (0, fB.i)("gliderBoostFuel"), {
        canFly: kB,
        flying: LB
      } = (0, fB.i)("flight"), OB = (0, mB.j)("touchscreenActionButton"), DB = lB ? hT : OB, uB = JB ? {
        icon: CT,
        label: pB("touchKeys:aim")
      } : null, HB = null !== YB ? {
        icon: [{
          icon: YB
        }]
      } : null, EB = null !== uB && void 0 !== uB ? uB : HB, vB = null !== (TB = null === (dB = lB ? uB : null !== HB && void 0 !== HB ? HB : uB) || void 0 === dB ? void 0 : dB.icon) && void 0 !== TB ? TB : xT, iB = [!yB && EB ? AT(bB.c.Action2, EB.icon, VB, EB.label) : null, lB ? AT(bB.c.Action3, GT, VB, pB("touchKeys:scope")) : null, kB ? bT(LB, pB("touchKeys:fly")) : null];
      return (0, gB.jsxs)(gB.Fragment, {
        children: [DB && (0, gB.jsx)(Bd, {
          code: bB.c.Action1,
          slot: NT,
          icon: DB,
          label: lB ? pB("touchKeys:reload") : void 0,
          hidden: VB
        }, JSON.stringify(DB)), yB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)(Bd, {
            code: bB.c.Attack,
            slot: iT,
            icon: qT,
            name: pB("touchKeys:attack"),
            hidden: VB
          }), (0, gB.jsx)(Bd, {
            code: bB.c.Use,
            slot: vT,
            icon: vB,
            name: pB("touchKeys:use"),
            hidden: VB
          })]
        }), MT(iB, yB), oB > 0 && (0, gB.jsx)(Bd, {
          code: bB.c.Boost,
          slot: tT,
          icon: jT,
          label: pB("touchKeys:boost", {
            fuel: oB > 99 ? "99+" : oB
          }),
          hidden: VB
        })]
      })
    }

    function Bd(BB) {
      let {
        code: TB,
        slot: dB,
        icon: VB,
        label: yB,
        name: pB,
        hidden: lB
      } = BB;
      const JB = uT(TB, lB);
      return (0, gB.jsx)(fT, {
        ref: JB,
        slot: dB,
        className: "TouchActionKey",
        canvasZone: !0,
        label: yB,
        role: void 0 !== pB ? "img" : void 0,
        "aria-label": pB,
        children: (0, gB.jsx)(YB.e, {
          text: VB
        })
      })
    }
    var Td = dB(3741),
      dd = dB(2488),
      Vd = dB(597);
    const yd = (0, VB.memo)((function() {
      (0, EB.e)();
      const BB = (0, VB.useRef)([]),
        TB = (0, dd.b)(),
        dB = (0, VB.useRef)(0),
        yB = (0, VB.useRef)(0),
        pB = (0, VB.useRef)([]),
        lB = (0, VB.useRef)(null);

      function oB(dB, VB, yB, pB) {
        const lB = (0, Vd.e)(),
          JB = setTimeout((() => {
            BB.current = BB.current.filter((BB => BB.id !== lB)), TB()
          }), pB);
        LB.gameBridge.send("recordFlyingMiddleText", {
          content: dB,
          Nd: VB,
          angle: yB,
          td: pB
        }), BB.current.push({
          id: lB,
          content: dB,
          Nd: VB,
          td: pB,
          removeTimeout: JB,
          angle: yB
        }), TB()
      }
      return (0, fB.c)("shotDamageToShow", (BB => {
        let {
          damage: TB,
          wasCrit: dB,
          distance: VB
        } = BB;
        const yB = -Math.PI / 4 + Math.random() * Math.PI / 2;
        oB(dB ? [{
          str: TB.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [TB.toString()], VB, yB, 1e3)
      })), (0, JB.e)("flyingMiddleMessage", (BB => {
        let {
          content: TB,
          Nd: VB,
          td: JB
        } = BB;
        pB.current.push({
          content: TB,
          Nd: VB,
          td: JB
        });
        const YB = () => {
          const {
            content: BB,
            Nd: TB,
            td: VB
          } = pB.current.shift(), lB = function(BB) {
            const TB = -Math.PI / 4,
              dB = Math.PI / 4,
              VB = dB - TB,
              yB = (1 + Math.sqrt(5)) / 2,
              pB = 2 * Math.PI / (yB * yB);
            let lB = BB + pB;
            for (; lB > dB;) lB -= VB;
            for (; lB < TB;) lB += VB;
            const JB = Math.PI / 6;
            if (Math.abs(lB - BB) < JB) {
              lB = BB + (Math.sign(lB - BB) || 1) * JB, lB > dB && (lB = BB - JB), lB < TB && (lB = BB + JB)
            }
            return lB
          }(yB.current);
          yB.current = lB, dB.current = Date.now(), oB(BB, TB, lB, VB)
        };
        if (!lB.current) {
          const BB = () => {
            pB.current.length > 0 && YB(), 0 === pB.current.length && (clearInterval(lB.current), lB.current = null)
          };
          lB.current = setInterval(BB, 200), dB.current + 200 < Date.now() && BB()
        }
        for (; pB.current.length > 4;) YB()
      })), (0, JB.e)("forceFlyingMiddleMessage", (BB => {
        let {
          content: TB,
          Nd: dB,
          angle: VB,
          td: yB
        } = BB;
        oB(TB, dB, VB, yB)
      })), (0, VB.useEffect)((() => () => {
        clearInterval(lB.current), lB.current = null;
        for (const TB of BB.current) clearTimeout(TB.removeTimeout)
      }), []), (0, gB.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: BB.current.map((BB => {
          const {
            id: TB,
            content: dB,
            Nd: VB,
            td: yB,
            angle: pB
          } = BB;
          return BB.pos || (BB.pos = function(BB, TB) {
            const dB = 50 / (BB ** .7 * .35);
            return {
              x: dB * Math.sin(TB),
              y: -dB * Math.cos(TB)
            }
          }(VB, pB)), (0, gB.jsx)(pd, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: yB,
            enterActiveStyle: {
              transform: `translate(${BB.pos.x}vw, ${BB.pos.y}vh)`,
              transition: `transform ${yB}ms ease-out`
            },
            children: (0, gB.jsx)("div", {
              children: (0, gB.jsx)(YB.e, {
                text: dB
              })
            })
          }, TB)
        }))
      })
    }));

    function pd(BB) {
      let {
        children: TB,
        className: dB,
        classNames: yB,
        timeout: pB,
        enterActiveStyle: lB
      } = BB;
      const [JB, YB] = (0, VB.useState)(!1), [oB, kB] = (0, VB.useState)(!1), LB = (0, VB.useRef)(null);
      return (0, VB.useEffect)((() => {
        YB(!0)
      }), []), (0, gB.jsx)(Td.b, {
        className: dB,
        classNames: yB || dB,
        in: JB,
        timeout: pB,
        nodeRef: LB,
        onEntering: () => {
          kB(!0)
        },
        children: (0, VB.cloneElement)(TB, {
          ref: LB,
          style: oB && lB || void 0
        })
      })
    }
    var ld = dB(35589);

    function Jd() {
      const BB = (0, fB.i)("health");
      return (0, gB.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, gB.jsx)(ld.c, {
          placement: "statBars"
        }), (0, gB.jsx)(Yd, {
          actualValue: BB.shield,
          maxValue: BB.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, gB.jsx)(Yd, {
          actualValue: BB.health,
          maxValue: BB.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Yd(BB) {
      let {
        actualValue: TB,
        maxValue: dB,
        hideAtValue: VB,
        icon: yB,
        className: pB
      } = BB;
      return (0, EB.f)(), null === TB || null === dB || TB === VB || dB === VB ? null : (0, gB.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, gB.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, gB.jsx)("div", {
            className: `BottomScreenStatBar ${pB}`,
            style: {
              transform: `scaleX(${Math.max(TB/dB,0)})`,
              transformOrigin: "left center"
            }
          }), (0, gB.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, gB.jsx)(QB.e, {
              name: yB
            }), ` ${Math.ceil(TB)}/${dB}`]
          })]
        })
      })
    }
    var gd = dB(8570),
      od = dB(3942),
      kd = dB(1214),
      Ld = dB(2366),
      Od = dB(1324),
      Dd = dB(1201),
      ud = dB(2898),
      Hd = dB(2951),
      Ed = dB(2925),
      vd = dB(663),
      md = dB(2971),
      Nd = dB(138),
      td = dB(8531),
      fd = dB(279);

    function sd(BB, TB) {
      let {
        shownName: dB,
        lifeformType: VB
      } = BB;
      return null !== dB ? dB : null !== VB ? TB(`lifeform:${(0,fd.qe)(VB)}`) : null
    }
    var Md = dB(2909),
      zd = dB(2917);
    const wd = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      Ud = (0, VB.memo)((function() {
        var BB, TB;
        const dB = (0, EB.e)(),
          yB = (0, OB.useNavigatePreserveSearch)(),
          {
            t: lB
          } = (0, FB.z)(),
          {
            loadingOverlayVisible: YB
          } = (0, sB.m)(["loadingOverlayVisible"]),
          oB = (0, zB.r)(),
          [kB, DB] = (0, VB.useState)(!1),
          [uB, HB] = (0, VB.useState)(!0),
          [vB, iB] = (0, VB.useState)(null),
          tB = (0, dd.b)(),
          MB = (0, mB.j)("respawnButtonText"),
          wB = (0, mB.j)("usePlayAgainButton"),
          UB = (0, mB.j)("useRespawnButton"),
          {
            gameNameWithVariation: KB
          } = (0, fB.i)("connectedGame"),
          rB = (0, VB.useRef)(NB.c.get("secsToRespawn")),
          IB = (0, VB.useRef)(LB.gameBridge.latest("localPlayerAlive")),
          cB = (0, VB.useRef)(NB.c.get("secsToRespawn")),
          SB = (0, VB.useRef)(NB.c.get("autoRespawn")),
          PB = (0, VB.useRef)(null),
          RB = (0, VB.useRef)(0),
          aB = (0, VB.useRef)(0),
          [ZB, WB] = (0, VB.useState)(!1),
          hB = (0, VB.useRef)(null),
          CB = (0, VB.useRef)(null),
          GB = (0, VB.useRef)(null);
        (0, mB.i)("secsToRespawn", (BB => {
          console.log("Received new secsToRespawn with", BB, "and current canRespawn value of ", SB.current), cB.current = BB, AB()
        })), (0, mB.i)("autoRespawn", (BB => {
          console.log("Received autorespawn", BB, "current canRespawn value of ", rB.current), SB.current = BB, AB()
        }));
        const qB = BB => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", BB), BB || RB.current++, IB.current = BB, AB()
        };
        (0, fB.c)("localPlayerAliveSet", qB), (0, JB.e)(Hd.n, (BB => {
          "connected" === BB && !IB.current && SB.current && rB.current <= 0 && (aB.current = 0, bB())
        })), (0, VB.useEffect)((() => {
          const BB = LB.gameBridge.latest("localPlayerAlive");
          BB === IB.current ? (console.log("Updating respawn component from initial mount"), AB()) : qB(BB)
        }), []), (0, VB.useEffect)((() => {
          if (kB) {
            WB(!1);
            const BB = setTimeout((() => {
              WB(!0)
            }), 600);
            return (0, td.e)(), () => {
              clearTimeout(BB)
            }
          }
          return () => {}
        }), [kB]);
        (0, fB.c)("kill", (BB => {
          let {
            killer: TB,
            victim: dB,
            withItem: VB
          } = BB;
          if (!dB.local) return;
          const yB = ((BB, TB) => {
            if (BB.local) {
              const BB = wd[TB];
              return BB ? lB(BB) : null
            }
            const dB = sd(BB, lB);
            return dB ? lB("respawnPage:killedBy", {
              name: dB
            }) : null
          })(TB, VB);
          yB && iB({
            text: yB,
            deathCount: IB.current ? RB.current + 1 : RB.current
          })
        }));
        const xB = () => {
            kB && SB.current && IB.current && ZB && DB(!1)
          },
          jB = kB && SB.current && IB.current && ZB && !YB;
        (0, JB.e)("usedKeyboard", (() => {
          xB()
        })), (0, zd.b)("respawn", jB, xB);
        const AB = () => {
            HB(cB.current >= 3 || !SB.current), IB.current ? (clearInterval(PB.current), PB.current = null, SB.current ? tB() : DB(!1)) : (DB(!0), rB.current = cB.current, tB(), console.log("Running respawn stats updated", SB.current, rB.current), SB.current && rB.current <= 0 && bB(), clearInterval(PB.current), rB.current > 0 && (PB.current = setInterval((() => {
              rB.current = Math.max(rB.current - 1, 0), tB(), rB.current <= 0 && (clearInterval(PB.current), PB.current = null, NB.c.get("autoRespawn") && bB())
            }), 1e3)))
          },
          bB = () => {
            if (Date.now() - aB.current > 1e3) {
              const BB = () => {
                LB.gameBridge.send("respawn", null), aB.current = Date.now()
              };
              NB.c.get("autoRespawn") ? BB() : (0, Dd.cb)((() => {
                BB()
              }), "video_respawn")
            }
          },
          nB = (0, VB.useMemo)((() => {
            var BB;
            return null === (BB = (0, vd.l)(KB)) || void 0 === BB ? void 0 : BB.otherGameLinksOnRespawnPage
          }), [KB]),
          eB = 0 === rB.current,
          BT = (null === vB || void 0 === vB ? void 0 : vB.deathCount) === RB.current ? vB.text : null,
          TT = kB && uB && !YB,
          dT = oB && jB && null !== (BB = null === (TB = (0, XB.i)()) || void 0 === TB ? void 0 : TB.getBoundButton("menuConfirm")) && void 0 !== BB ? BB : null,
          VT = BB => eB ? BB : lB("respawnPage:actionInSeconds", {
            action: BB,
            seconds: rB.current
          });
        return (0, gB.jsx)(gd.d, {
          showing: kB,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, gB.jsx)(ud.c, {
            show: kB,
            "data-holds-camera-keeper": "",
            children: (0, gB.jsxs)(od.b, {
              close: () => {
                DB(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: SB.current || YB ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Nd.m)() && (0, gB.jsx)(Od.b, {
                onClick: Ed.b,
                children: lB("homePage:backToGames")
              }), (0, gB.jsxs)("div", {
                className: "RespawnContainer",
                onClick: xB,
                children: [(0, gB.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, gB.jsx)("div", {
                    ref: CB,
                    className: "RespawnSideSquareBannerDiv",
                    children: dB[0] > 925 && (0, gB.jsx)(Ld.b, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: CB
                      },
                      showing: TT,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, gB.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, gB.jsxs)("div", {
                      className: pB()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: oB
                      }),
                      children: [SB.current && (0, gB.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, gB.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, gB.jsx)(QB.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), lB("respawnPage:youDied")]
                        }), (0, gB.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === dT && (IB.current ? lB("respawnPage:pressAnywhereToContinue") : eB ? lB("respawnPage:respawning") : VT(lB("general:respawn"))), null !== dT && (0, gB.jsx)(Md.b, {
                            text: lB("controller:screensPressToContinue", {
                              button: Md.d
                            }),
                            glyph: dT,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), BT && (0, gB.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: BT
                        })]
                      }), !SB.current && (0, gB.jsxs)(gB.Fragment, {
                        children: [(0, gB.jsxs)("div", {
                          className: pB()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !nB
                          }),
                          children: [wB && (0, gB.jsx)(Od.k, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, Dd.cb)((() => {
                                (0, sB.i)("inGameReplay");
                                const BB = (0, kd.b)(KB);
                                yB(BB)
                              }), "video_start")
                            },
                            disabled: !eB || !ZB,
                            touchPressOn: "pointerup",
                            children: VT(lB("respawnPage:playAgain"))
                          }), UB && (0, gB.jsx)(Od.d, {
                            className: "RespawnPageButton",
                            onClick: bB,
                            padDefaultFocus: !wB,
                            padBack: "sessionBasedGame:stayInLobby" === MB,
                            disabled: !eB || !ZB,
                            touchPressOn: "pointerup",
                            children: VT(lB(MB))
                          }), !(0, Nd.m)() && (0, gB.jsx)(Od.K, {
                            className: "RespawnPageButton",
                            onClick: Ed.b,
                            disabled: !eB || !ZB,
                            touchPressOn: "pointerup",
                            children: VT(lB("respawnPage:exitGame"))
                          })]
                        }), nB && (0, gB.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, gB.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: lB("respawnPage:orTry")
                          }), (0, gB.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: nB.map((BB => (0, gB.jsx)(md.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: BB
                              },
                              disabled: !eB || !ZB,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, sB.i)("inGameReplay");
                                const TB = (0, kd.b)(BB);
                                yB(TB)
                              }
                            }, BB)))
                          })]
                        })]
                      })]
                    })
                  }), (0, gB.jsx)("div", {
                    ref: GB,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, gB.jsx)("div", {
                  ref: hB,
                  className: "RespawnBottom",
                  children: (0, gB.jsx)(Ld.b, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: hB
                    },
                    showing: TT,
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
    var Fd = dB(35607);
    const Kd = [{
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
      rd = [{
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
      Id = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      cd = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      Sd = (0, VB.memo)((function() {
        const BB = (0, VB.useRef)(null),
          TB = (0, VB.useRef)(null);

        function dB(dB) {
          var VB;
          let {
            jT: yB,
            screenPos: pB
          } = dB;
          const lB = BB.current;
          null === (VB = TB.current) || void 0 === VB || VB.cancel(), lB.classList.remove("HitmarkerCrit"), pB ? (lB.style.left = `${pB.x}%`, lB.style.top = `${pB.y}%`) : (lB.style.left = "50%", lB.style.top = "50%"), lB.style.rotate = 16 * (Math.random() - .5) + "deg", yB && lB.classList.add("HitmarkerCrit");
          const JB = lB.animate(yB ? rd : Kd, yB ? cd : Id);
          TB.current = JB, JB.onfinish = () => {
            lB.classList.remove("HitmarkerCrit")
          }
        }
        return (0, JB.e)("localGunHitmarker", (BB => {
          let {
            jT: TB
          } = BB;
          dB({
            jT: TB
          })
        })), (0, JB.e)("yourAttackHit", (BB => {
          let {
            jT: TB,
            screenPos: VB
          } = BB;
          dB({
            jT: TB,
            screenPos: sB.d.get("isTouchScreen") ? VB : void 0
          })
        })), (0, JB.e)("sendHitmarker", (BB => {
          let {
            jT: TB,
            screenPos: VB
          } = BB;
          dB({
            jT: TB,
            screenPos: VB
          })
        })), (0, gB.jsxs)("div", {
          ref: BB,
          className: "Hitmarker",
          children: [(0, gB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, gB.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Pd() {
      const BB = (0, VB.useRef)(!0);
      return (0, JB.e)("localBlockMined", (() => {
        yT.f.play("blockMined")
      })), (0, JB.e)("yourAttackHit", (() => {
        yT.f.play("hitLanded")
      })), (0, JB.e)("localGunHitmarker", (() => {
        yT.f.play("hitLanded")
      })), (0, JB.e)("damagedByOtherPlayer", (() => {
        yT.f.play("damageTaken")
      })), (0, fB.c)("localPlayerAliveSet", (TB => {
        !TB && BB.current && yT.f.play("death"), BB.current = TB
      })), null
    }
    var Qd = dB(1666),
      Rd = dB(35634),
      ad = dB.n(Rd),
      Zd = dB(1779),
      Xd = dB(1768),
      Wd = dB(2760),
      hd = dB(35681);
    const Cd = fd.ee ? 7e7 : 7e3,
      Gd = ad()("#ffffff").alpha(.5).string();

    function qd(BB) {
      const TB = (0, Wd.b)(BB);
      return void 0 !== TB && "Gun" === (0, hd.itemTypeOf)(TB)
    }

    function xd(BB) {
      if (!BB) return console.error(`Killfeed colour was ${BB}`), Gd;
      try {
        return ad()(BB).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${BB} is not a colour`), Gd
      }
    }
    const jd = (0, VB.memo)((function() {
      const {
        t: BB
      } = (0, FB.z)(), TB = (0, VB.useRef)([]), dB = (0, dd.b)();
      return (0, fB.c)("kill", (function(VB) {
        var yB, pB;
        let {
          killer: lB,
          victim: JB,
          withItem: YB,
          killstreak: gB
        } = VB;
        const oB = TB.current;
        if (oB.length >= 3) {
          const BB = oB.shift();
          clearTimeout(BB.timeout)
        }
        const kB = LB.gameBridge.latest("hiddenPlayerNames"),
          OB = {
            deadName: sd(JB, BB),
            killerName: sd(lB, BB),
            isFriend: {
              killer: (0, Zd.h)(lB.realName, kB),
              dead: (0, Zd.h)(JB.realName, kB)
            },
            withItem: YB,
            wasHeadshot: !1,
            killstreak: gB,
            timeout: setTimeout((() => {
              oB.shift(), dB()
            }), Cd),
            reactId: `${null!==(yB=lB.id)&&void 0!==yB?yB:lB.shownName}|${null!==(pB=JB.id)&&void 0!==pB?pB:JB.shownName}|${Date.now()}`,
            killerBackground: xd(lB.colour),
            deadBackground: xd(JB.colour)
          };
        oB.push(OB), dB()
      })), (0, VB.useEffect)((() => {
        const BB = TB.current;
        return () => {
          for (; BB.length > 0;) {
            const {
              timeout: TB
            } = BB.pop();
            clearTimeout(TB)
          }
        }
      }), []), (0, gB.jsx)("div", {
        className: "Killfeed",
        children: TB.current.map((BB => {
          let {
            deadName: TB,
            killerName: dB,
            withItem: VB,
            wasHeadshot: yB,
            killstreak: pB,
            killerBackground: lB,
            deadBackground: JB,
            reactId: YB,
            isFriend: oB
          } = BB;
          return (0, gB.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${lB} calc(100% - 10rem), ${JB} 100%)`
            },
            children: [pB >= 2 ? (0, gB.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, fd.U)(pB)
            }) : null, (0, gB.jsx)("div", {
              className: "KillfeedKillerName",
              children: dB
            }), oB.killer && (0, gB.jsx)(Xd.c, {}), (0, gB.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: qd(VB) ? "7.5vmin" : "5vmin"
              },
              children: (0, gB.jsx)(Qd.c, {
                itemName: VB,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), yB ? (0, gB.jsx)(QB.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, gB.jsx)("div", {
              className: "KillfeedDeadName",
              children: TB
            }), oB.dead && (0, gB.jsx)(Xd.c, {})]
          }, YB)
        }))
      })
    }));
    var Ad = dB(35688),
      bd = dB(35692),
      nd = dB.n(bd),
      ed = dB(2876),
      BV = dB(35696),
      TV = dB(1185);
    const dV = {},
      VV = (0, VB.memo)((function() {
        const BB = (0, VB.useRef)({}),
          [, TB] = (0, VB.useReducer)((BB => BB + 1), 0);
        (0, JB.e)("setDirectionArrow", (dB => {
          let {
            id: VB,
            position: yB,
            style: pB,
            text: lB,
            Pp: JB
          } = dB;
          const YB = BB.current,
            gB = pB || dV,
            oB = lB,
            kB = YB[VB];
          if (!kB) return YB[VB] = {
            position: yB,
            style: gB,
            text: oB,
            shouldShowDistance: JB,
            nS: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void TB();
          const LB = !nd()(kB.style, gB) || !nd()(kB.text, oB) || kB.shouldShowDistance !== JB;
          kB.position = yB, kB.style = gB, kB.text = oB, kB.shouldShowDistance = JB, LB && TB()
        })), (0, JB.e)("clearDirectionArrow", (dB => {
          let {
            id: VB
          } = dB;
          const yB = BB.current;
          if (null === VB)
            for (const BB in yB) delete yB[BB];
          else delete yB[VB];
          TB()
        })), (0, VB.useEffect)((() => {
          const TB = BB.current,
            dB = (0, TV.p)((() => {
              ! function(BB) {
                const TB = LB.gameBridge.lookup("localPos", null),
                  dB = ed.d - yV,
                  VB = (0, ed.m)() - yV;
                for (const yB in BB) {
                  const pB = BB[yB];
                  if (!pB.nS) continue;
                  const lB = LB.gameBridge.lookup("screenPos", pB.position),
                    JB = lB.x - 50,
                    YB = lB.y - 50;
                  lB.x === pB.lastScreenX && lB.y === pB.lastScreenY || (pB.lastScreenX = lB.x, pB.lastScreenY = lB.y, pB.nS.style.translate = `${lB.x}vw ${lB.y}vh`, pB.chevronElement && (pB.chevronElement.style.rotate = `${fd.e.fastATan2(YB,JB)}rad`));
                  const gB = Math.abs(JB) < dB && Math.abs(YB) < VB;
                  if (gB !== pB.onScreen && (pB.onScreen = gB, pB.nS.classList.toggle("DirectionArrowOnScreen", gB)), pB.shouldShowDistance && pB.distanceElement) {
                    const BB = pB.position[0] - TB[0],
                      dB = pB.position[1] - TB[1],
                      VB = pB.position[2] - TB[2],
                      yB = Math.round(Math.sqrt(BB * BB + dB * dB + VB * VB));
                    (-1 === pB.lastRenderedDist || (0, BV.d)(yB, pB.lastRenderedDist, pB.lastDistUpdateTime)) && (pB.distanceElement.textContent = `${yB}m`, pB.lastRenderedDist = yB, pB.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(TB)
            }));
          return () => {
            dB();
            for (const BB in TB) delete TB[BB]
          }
        }), []);
        const dB = BB.current;
        return (0, gB.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(dB).map((BB => {
            var TB;
            let [VB, yB] = BB;
            const pB = null !== (TB = (0, vB.Yb)(yB.style)) && void 0 !== TB ? TB : "#ffffff";
            return (0, gB.jsxs)("div", {
              ref: BB => {
                dB[VB] && (dB[VB].nS = BB)
              },
              className: "DirectionArrow",
              style: {
                fontSize: yB.style.fontSize,
                opacity: yB.style.opacity
              },
              children: [(0, gB.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: BB => {
                  dB[VB] && (dB[VB].chevronElement = BB)
                },
                children: [(0, gB.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, gB.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, gB.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, gB.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, gB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: pB
                    }
                  }), (0, gB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: pB
                    }
                  })]
                })]
              }), (0, gB.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: pB,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${pB}`
                }
              }), yB.text && (0, gB.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: pB,
                  fontWeight: yB.style.fontWeight,
                  fontStyle: yB.style.fontStyle
                },
                children: (0, gB.jsx)(YB.e, {
                  text: yB.text
                })
              }), yB.shouldShowDistance && (0, gB.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: BB => {
                  dB[VB] && (dB[VB].distanceElement = BB)
                },
                style: {
                  color: pB,
                  fontWeight: yB.style.fontWeight,
                  fontStyle: yB.style.fontStyle
                }
              })]
            }, VB)
          }))
        })
      })),
      yV = .5;
    const pV = (0, VB.memo)((function(BB) {
        let {
          isTouchScreen: TB
        } = BB;
        return (0, gB.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, gB.jsx)(gV, {}), TB && (0, gB.jsx)(ZT, {})]
        })
      })),
      lV = {
        readyForNext: 0,
        running: 1
      },
      JV = 50;

    function YV(BB) {
      console.assert(BB.state.current === lV.readyForNext);
      const TB = BB.queue.current,
        dB = BB.foreground.current;
      if (TB.length > 0 && dB) {
        const {
          toFraction: VB,
          toDuration: yB
        } = TB.shift();
        BB.state.current = lV.running, dB.style.transition = `transform ${Math.max(yB-JV,0)}ms linear`, dB.classList.remove("Complete"), BB.timeout.current = setTimeout((() => {
          dB.style.transform = `scaleX(${VB})`, BB.timeout.current = setTimeout((() => {
            1 === VB && dB.classList.add("Complete"), BB.state.current = lV.readyForNext, YV(BB)
          }), Math.max(yB - JV, 0))
        }), JV)
      }
    }

    function gV() {
      const BB = (0, VB.useRef)([]),
        TB = (0, VB.useRef)(lV.readyForNext),
        dB = (0, VB.useRef)(void 0),
        yB = (0, VB.useRef)(null),
        pB = (0, VB.useRef)({
          queue: BB,
          state: TB,
          timeout: dB,
          foreground: yB
        }),
        lB = (0, mB.j)("showProgressBar");
      if ((0, VB.useLayoutEffect)((() => (lB && TB.current === lV.readyForNext && YV(pB.current), () => {
          TB.current = lV.readyForNext, clearTimeout(dB.current), lB && (BB.current.length = 0)
        })), [lB]), (0, JB.e)("progressBarUpdate", (dB => {
          let {
            toFraction: VB,
            toDuration: yB
          } = dB;
          BB.current.push({
            toFraction: VB,
            toDuration: yB
          }), TB.current === lV.readyForNext && YV(pB.current)
        })), !lB) return null;
      return (0, gB.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, gB.jsx)("div", {
          className: "ProgressBarForeground",
          ref: yB,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var oV = dB(35700);
    var kV = dB(3183),
      LV = dB(3175),
      OV = dB(1507),
      DV = dB(1393),
      uV = dB(1514),
      HV = dB(1596),
      EV = dB(1848),
      vV = dB(1020),
      mV = dB(3764),
      iV = dB(1353),
      NV = dB(1242);
    const tV = 2e4,
      fV = 6e5,
      sV = new Set;

    function MV() {
      const {
        gameEntrySource: BB,
        loadingOverlayVisible: TB
      } = (0, sB.m)(["gameEntrySource", "loadingOverlayVisible"]), dB = (0, fB.g)("connectedGame", (BB => (0, mV.j)(BB) ? BB.lobbyName : null)), yB = (0, fB.i)("localPlayerAlive"), pB = (0, fB.g)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), [lB, JB] = (0, VB.useState)(null);
      return !TB && yB && pB && null !== dB && lB !== dB && JB(dB), (0, VB.useEffect)((() => {
        if (!(0, mV.n)(BB) || null === lB || lB !== dB || sV.has(lB)) return;
        const TB = setTimeout((() => {
          sV.add(lB), async function(BB) {
            const TB = await vV.userContextManager.getCurrentUserContext();
            let dB;
            try {
              dB = (await DV.c.getWorldOwnerFriendOffer(TB)).owner
            } catch (yB) {
              return void console.warn("Couldn't ask who owns this world", yB)
            }
            if (!dB || (0, mV.s)(dB.name, Date.now())) return;
            const VB = dB;
            ! function(BB, TB) {
              const dB = Date.now() + fV;
              let VB = Date.now(),
                yB = 0;
              const pB = () => {
                const lB = Date.now(),
                  JB = LB.gameBridge.latest("connectedGame");
                JB.lobbyName !== BB || lB > dB || (null === JB.websocketUrl ? VB = 1 / 0 : VB === 1 / 0 && !sB.d.get("loadingOverlayVisible") && LB.gameBridge.latest("localPlayerAlive") && (VB = lB + tV), yB = lB < VB || !LB.gameBridge.latest("localPlayerAlive") || sB.d.get("isUiHidden") || sB.d.get("isUiHiddenByCamera") || (0, HV.isTypingInInput)() || sB.d.get("loadingOverlayVisible") || (0, OV.l)() || (0, kV.e)() || (0, NV.j)() ? 0 : yB + 1, yB >= 2 ? TB() : setTimeout(pB, 500))
              };
              pB()
            }(BB, (() => {
              (0, mV.g)(uV.e.getSocialState().friends, VB.name) || ((0, mV.p)(VB.name, Date.now()), EV.g.showWorldOwnerOffer(VB), (0, iV.f)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(lB).catch((BB => {
            console.error("Failed to offer the world's owner as a friend", BB)
          }))
        }), tV);
        return () => {
          clearTimeout(TB)
        }
      }), [BB, lB, dB]), null
    }
    var zV = dB(1660);
    const wV = (0, VB.memo)((function(BB) {
        let {
          durationMs: TB,
          endsAtMs: dB
        } = BB;
        const [, yB] = (0, VB.useReducer)((BB => BB + 1), 0), pB = null === dB ? TB : Math.max(dB - Date.now(), 0);
        return (0, VB.useEffect)((() => {
          if (null === dB || pB <= 0) return;
          const BB = setTimeout(yB, pB - 1e3 * (Math.ceil(pB / 1e3) - 1));
          return () => {
            clearTimeout(BB)
          }
        })), (0, gB.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, fd.eb)(pB)
        })
      })),
      UV = (0, VB.memo)((function() {
        const BB = (0, fB.i)("localEffects");
        return (0, gB.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(BB).map((BB => {
            let [TB, {
              icon: dB,
              displayName: VB,
              durationMs: yB,
              endsAtMs: pB,
              level: lB
            }] = BB;
            return (0, gB.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, gB.jsx)(zV.d, {
                icon: dB,
                className: "EffectInfoIcon"
              }), (0, gB.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== yB ? "0" : "1rem"
                },
                children: [(0, gB.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, gB.jsx)(YB.e, {
                    text: null !== VB && void 0 !== VB ? VB : TB,
                    className: "EffectInfoName SmallTextBold"
                  }), lB > 1 && (0, gB.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, fd.U)(lB)
                  })]
                }), null !== yB && (0, gB.jsx)(wV, {
                  durationMs: yB,
                  endsAtMs: pB
                })]
              })]
            }, TB)
          }))
        })
      }));
    var FV = dB(35706),
      KV = dB(35869),
      rV = dB(184),
      IV = dB(1235),
      cV = dB(2380);

    function SV(BB, TB) {
      (0, VB.useLayoutEffect)((() => {
        let TB, dB;
        const VB = requestAnimationFrame((() => {
          dB = setTimeout((() => {
            dB = void 0;
            const VB = BB();
            TB = "function" === typeof VB ? VB : void 0
          }), 0)
        }));
        return () => {
          var BB;
          cancelAnimationFrame(VB), clearTimeout(dB), null === (BB = TB) || void 0 === BB || BB()
        }
      }), TB)
    }
    const PV = [5, 5, 5],
      QV = [7, 4, 4, 4];

    function RV(BB) {
      return BB.reduce(((BB, TB) => BB + TB), 0)
    }

    function aV(BB, TB, dB, VB, yB) {
      const pB = BB.getContext("2d");
      if (!pB) return null;
      const lB = TB.fontFamily,
        JB = TB.fontWeight;
      return BB.width = dB, BB.height = VB, pB.fillStyle = TB.color, pB.textAlign = "center", pB.textBaseline = "middle", pB.font = `${JB} ${yB}px ${lB}`, pB
    }
    const ZV = (0, VB.memo)((function(BB) {
      let {
        show: TB
      } = BB;
      const dB = (0, VB.useRef)(null),
        yB = (0, VB.useRef)(null),
        pB = (0, VB.useRef)(null),
        lB = (0, DB.f)();
      return (0, VB.useEffect)((() => lB.whenShown((() => {
        let BB = 0,
          TB = 0,
          dB = 0,
          VB = 0;
        const lB = (0, TV.p)((() => {
          var lB;
          BB++, TB++;
          const JB = performance.now();
          if (JB - dB < 1e3) return;
          const YB = Math.round(BB / (JB - dB) * 1e3);
          if (yB.current = YB, null === (lB = pB.current) || void 0 === lB || lB.call(pB, YB), BB = 0, dB = JB, YB < 55) {
            var gB, oB;
            VB += 1;
            const BB = tB.j.getItem("decreaseLoadDistPromptDeniedCount"),
              [TB, dB] = NB.c.get("minChunkAddDist");
            if (VB >= 15 && function(BB, TB) {
                const dB = LB.gameBridge.lookup("Tm", null);
                return null !== dB && (dB.horizontal > BB || dB.vertical > TB)
              }(TB, dB) && (null !== (gB = tB.j.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== gB ? gB : 0) + 432e5 < Date.now() && (null !== (oB = tB.j.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== oB ? oB : 0) < 3) {
              tB.j.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              IV.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((VB => {
                "notificationTornDown" !== VB && (VB ? (LB.gameBridge.send("setChunkAddDistance", {
                  horizontal: TB,
                  vertical: dB
                }), tB.j.setItem("chunkHorizAddDist", TB), tB.j.setItem("chunkVertAddDist", dB), iB.h.yH("updatedChunkLoadDist"), tB.j.setItem("decreaseLoadDistPromptDeniedCount", 0)) : tB.j.setItem("decreaseLoadDistPromptDeniedCount", BB + 1))
              }))
            }
          } else VB = 0
        }));
        let JB = performance.now();
        TB = 0;
        let YB = null,
          gB = !document.hidden;

        function oB() {
          const BB = performance.now() - JB,
            dB = 1e3 * TB / BB;
          gB && (null === YB && (YB = dB), cV.b.setFps(dB, YB)), TB = 0, JB = performance.now()
        }
        let kB = setInterval(oB, 15e3);

        function OB() {
          const BB = gB;
          gB = !document.hidden, !BB && gB && (TB = 0, JB = performance.now(), clearInterval(kB), kB = setInterval(oB, 15e3))
        }
        return document.addEventListener("visibilitychange", OB), () => {
          lB(), document.removeEventListener("visibilitychange", OB), clearInterval(kB)
        }
      }))), [lB]), SV((() => {
        var BB;
        if (!TB || pB.current) return;
        const VB = dB.current,
          lB = window.getComputedStyle(VB.parentElement),
          JB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          YB = parseFloat(lB.fontSize) * JB,
          gB = Math.round(3 * YB),
          oB = Math.round(YB),
          kB = aV(VB, lB, gB, oB, YB);
        if (!kB) return;
        const LB = BB => {
          kB.clearRect(0, 0, VB.width, VB.height), kB.fillText(BB.toString(), VB.width / 2, VB.height / 2)
        };
        pB.current = LB, null !== yB.current && LB(yB.current)
      }), [TB]), (0, gB.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: TB ? "flex" : "none"
        },
        children: [(0, gB.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, gB.jsx)("canvas", {
          className: "FpsCanvas",
          ref: dB,
          width: 48,
          height: 16
        })]
      })
    }));

    function XV(BB) {
      return Math.sign(BB) * Math.round(100 * Math.abs(BB))
    }

    function WV(BB) {
      let {
        getCoordinates: TB,
        showChunkCoords: dB,
        columns: yB
      } = BB;
      const pB = (0, VB.useRef)(null);
      return SV((() => {
        var BB;
        const VB = pB.current,
          lB = window.getComputedStyle(VB.parentElement),
          JB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          YB = parseFloat(lB.fontSize) * JB,
          gB = Math.round(YB * RV(yB)),
          oB = Math.round(YB),
          kB = aV(VB, lB, gB, oB, YB);
        if (!kB) return;
        let OB = !0,
          DB = 0,
          uB = 0,
          HB = 0,
          EB = 0,
          vB = 0,
          mB = 0;
        const iB = () => {
          OB = !0
        };
        document.fonts.load(kB.font).then(iB, iB);
        const NB = () => {
          aV(VB, lB, gB, oB, YB), iB()
        };
        VB.addEventListener("contextrestored", NB);
        const tB = (0, TV.v)((() => {
          var BB, pB, lB, JB, gB, oB;
          const [iB, NB, tB] = TB(), fB = XV(iB), sB = XV(NB), MB = XV(tB);
          let zB = null;
          if (dB) {
            const BB = LB.gameBridge.lookup("localPos", null);
            zB = (0, BT.eb)(BB[0], BB[1], BB[2])
          }
          const wB = null !== (BB = null === (pB = zB) || void 0 === pB ? void 0 : pB[0]) && void 0 !== BB ? BB : 0,
            UB = null !== (lB = null === (JB = zB) || void 0 === JB ? void 0 : JB[1]) && void 0 !== lB ? lB : 0,
            FB = null !== (gB = null === (oB = zB) || void 0 === oB ? void 0 : oB[2]) && void 0 !== gB ? gB : 0;
          if (!OB && fB === DB && sB === uB && MB === HB && wB === EB && UB === vB && FB === mB) return;
          OB = !1, DB = fB, uB = sB, HB = MB, EB = wB, vB = UB, mB = FB;
          const KB = [(fB / 100).toFixed(2), (sB / 100).toFixed(2), (MB / 100).toFixed(2)];
          zB && KB.unshift(`${wB} ${UB} ${FB}`), kB.clearRect(0, 0, VB.width, VB.height);
          const rB = VB.height / 2;
          let IB = 0;
          for (let TB = 0; TB < KB.length; TB++) {
            const BB = YB * yB[TB];
            kB.fillText(KB[TB], IB + BB / 2, rB, BB), IB += BB
          }
        }));
        return () => {
          tB(), VB.removeEventListener("contextrestored", NB)
        }
      }), [TB, dB, yB]), (0, gB.jsx)("div", {
        className: "CoordinateUI",
        children: (0, gB.jsx)("canvas", {
          ref: pB,
          className: "CoordinateCanvas",
          width: 16 * RV(yB),
          height: 16
        })
      })
    }
    const hV = (0, VB.memo)((function() {
        const BB = (0, VB.useCallback)((() => {
          const BB = LB.gameBridge.lookup("localPos", null);
          return [BB[0], BB[1], BB[2]]
        }), []);
        return (0, gB.jsx)(WV, {
          getCoordinates: BB,
          showChunkCoords: !1,
          columns: PV
        })
      })),
      CV = (0, VB.memo)((function() {
        const BB = (0, VB.useCallback)((() => {
          const BB = LB.gameBridge.lookup("localPos", null),
            TB = rV.c.UD;
          let dB = BB[0] % TB,
            VB = BB[1] % TB,
            yB = BB[2] % TB;
          return dB < 0 && (dB += TB), VB < 0 && (VB += TB), yB < 0 && (yB += TB), [dB, VB, yB]
        }), []);
        return (0, gB.jsx)(WV, {
          getCoordinates: BB,
          showChunkCoords: !0,
          columns: QV
        })
      }));
    var GV = dB(1800),
      qV = dB(1225),
      xV = dB(900),
      jV = dB(1105),
      AV = dB(95),
      bV = dB(35725),
      nV = dB(1330),
      eV = dB(2614);
    const By = (0, VB.memo)((function() {
      const BB = (0, mB.j)("maxAuraLevel");
      return 0 === BB ? null : (0, gB.jsx)(Ty, {
        maxLevel: BB
      })
    }));

    function Ty(BB) {
      let {
        maxLevel: TB
      } = BB;
      const dB = (0, mB.j)("auraPerLevel"),
        [yB, pB] = (0, VB.useState)((() => {
          var BB;
          return null !== (BB = LB.gameBridge.latest("aura")) && void 0 !== BB ? BB : void 0
        })),
        [lB, JB] = (0, VB.useState)((() => iB(yB))),
        [YB, oB] = (0, VB.useReducer)((BB => BB + 1), 0),
        kB = (0, VB.useRef)(null),
        OB = (0, VB.useRef)([]),
        DB = (0, VB.useRef)({
          width: 0,
          level: 0
        }),
        uB = (0, VB.useRef)(null),
        HB = (0, VB.useRef)(null);

      function vB() {
        if (null !== uB.current) return;
        if (0 === OB.current.length) return;
        const {
          width: BB,
          level: TB
        } = OB.current.shift();
        let dB;
        if (TB !== DB.current.level && TB > DB.current.level !== BB > DB.current.width) {
          const VB = TB > DB.current.level;
          dB = VB ? BB : 100 - BB, kB.current.style.transition = "none", kB.current.style.width = VB ? "0%" : "100%", kB.current.offsetWidth
        } else dB = Math.abs(BB - DB.current.width);
        const VB = 100 * dB / 20;
        kB.current.style.transition = `width ${VB}ms linear`, JB(BB), DB.current = {
          width: BB,
          level: TB
        }, OB.current.length > 0 && (uB.current = setTimeout((() => {
          uB.current = null, vB()
        }), VB))
      }

      function iB(BB) {
        return Math.floor(BB / dB) === TB ? 100 : BB % dB / dB * 100
      }
      return (0, VB.useEffect)((() => () => {
        clearTimeout(uB.current), clearTimeout(HB.current), uB.current = null, HB.current = null
      }), []), (0, fB.c)("aura", (BB => {
        if (HB.current && clearTimeout(HB.current), null === BB) return clearTimeout(uB.current), HB.current = null, uB.current = null, OB.current = [], DB.current = {
          width: 0,
          level: 0
        }, pB(void 0), void JB(0);
        HB.current = setTimeout((() => {
          const TB = Math.floor(yB / dB),
            VB = Math.floor(BB / dB),
            lB = iB(BB);
          BB > yB && bV.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), VB > TB ? (VB % 5 === 0 && bV.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), oB(), OB.current.push({
            width: 100,
            level: TB
          })) : VB < TB && OB.current.push({
            width: 0,
            level: TB
          }), BB === yB && VB === TB || OB.current.push({
            width: lB,
            level: VB
          }), pB(BB), vB()
        }), 50)
      })), (0, EB.f)(), (0, gB.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, gB.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, gB.jsx)(nV.c, {
            showSignal: YB,
            particleElement: (0, gB.jsx)("img", {
              src: (0, eV.e)("glint"),
              alt: ""
            })
          }), (0, gB.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, eV.e)("glint"),
            alt: "aura"
          }), (0, gB.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== yB && void 0 !== yB ? yB : 0) / dB)
          })]
        }), (0, gB.jsx)("div", {
          className: "AuraBar",
          children: (0, gB.jsx)("div", {
            ref: kB,
            className: "AuraBarBackground",
            style: {
              width: `${lB}%`
            }
          })
        })]
      })
    }
    var dy = dB(2182);

    function Vy(BB) {
      BB.timed && (BB.endedAnimation = BB.timed.animation, BB.timed = null)
    }
    const yy = (0, VB.memo)((function() {
      const BB = (0, VB.useRef)(null),
        TB = (0, VB.useRef)(null),
        dB = (0, VB.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, JB.e)("middleScreenBarInitiate", (BB => {
        var VB;
        let {
          duration: yB,
          Xp: pB,
          horizBarRemOffset: lB
        } = BB;
        const JB = dB.current;
        Vy(JB);
        const YB = TB.current;
        if (!(yB >= 0) || !YB) return;
        null === (VB = JB.endedAnimation) || void 0 === VB || VB.cancel(), JB.endedAnimation = null;
        const gB = YB.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: yB,
          fill: "forwards"
        });
        JB.timed = {
          Xp: pB,
          horizBarRemOffset: lB,
          animation: gB
        }
      })), (0, JB.e)("middleScreenBarRemove", (() => {
        Vy(dB.current)
      })), (0, VB.useEffect)((() => {
        const VB = dB.current;
        let yB = Number.NaN,
          pB = Number.NaN,
          lB = Number.NaN;
        return (0, TV.m)((() => {
          var dB, JB, YB, gB;
          const oB = BB.current,
            kB = TB.current;
          if (!oB || !kB) return;
          null !== (dB = VB.timed) && void 0 !== dB && dB.Xp && "finished" === VB.timed.animation.playState && Vy(VB), null === (JB = VB.endedAnimation) || void 0 === JB || JB.cancel(), VB.endedAnimation = null;
          let OB = VB.timed ? 1 : 0;
          if (!VB.timed) {
            const BB = LB.gameBridge.lookup("momentumFrac", null);
            OB = BB > 0 ? 1 : 0, BB !== lB && (lB = BB, kB.style.transform = `scaleX(${BB})`)
          }
          const DB = null !== (YB = null === (gB = VB.timed) || void 0 === gB ? void 0 : gB.horizBarRemOffset) && void 0 !== YB ? YB : 0;
          DB === yB && OB === pB || (yB = DB, pB = OB, oB.style.transform = `translateX(calc(-50% + ${DB}rem)) scaleX(${OB})`)
        }))
      }), []), (0, gB.jsx)("div", {
        className: "MiddleScreenBar",
        ref: BB,
        children: (0, gB.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: TB
        })
      })
    }));
    var py = dB(4081),
      ly = dB(2358);

    function Jy() {
      const {
        t: BB
      } = (0, FB.z)(), TB = (0, JB.f)("serverUpdating", null), dB = (0, ly.c)(250, null !== TB);
      return null === TB || dB - TB > 3e4 ? null : (0, gB.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, gB.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: BB("updateWaiting:updatingIn", {
            countdown: (0, py.m)(TB - dB)
          })
        }), (0, gB.jsx)("div", {
          children: BB("updateWaiting:bringYouBack")
        })]
      })
    }
    var Yy = dB(35880),
      gy = dB(1738);
    const oy = [{
        translationKey: "general:interact"
      }],
      ky = (0, VB.memo)((function() {
        const BB = (0, mB.j)("crosshairText"),
          {
            interactPrompt: TB,
            blockText: dB,
            neededTool: yB
          } = (0, fB.i)("crosshairTarget"),
          {
            isTouchScreen: pB
          } = (0, sB.m)(["isTouchScreen"]),
          lB = (0, zB.r)(),
          oB = (0, UB.b)("alt-fire");
        (0, VB.useEffect)((() => {
          LB.gameBridge.send("setCrosshairInteractPrompt", !pB || lB ? "key" : "touch")
        }), [pB, lB]);
        const [kB, OB] = (0, VB.useReducer)((BB => BB + 1), 0);
        (0, JB.e)("customBindingsChanged", OB);
        var DB;
        if (null !== TB && (lB && null !== oB || !pB && null !== (0, gy.m)("alt-fire"))) return (0, gB.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, gB.jsx)(MB.d, {
            noaAction: "alt-fire"
          }), (0, gB.jsx)(YB.e, {
            text: null !== (DB = TB.label) && void 0 !== DB ? DB : oy
          })]
        });
        let uB = null;
        return null !== dB ? uB = dB : null !== BB && "" !== BB ? uB = BB : null !== yB && (uB = [{
          icon: yB,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), uB ? (0, gB.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, gB.jsx)(YB.e, {
            text: uB
          })
        }) : null
      }));
    var Ly = dB(2191);
    const Oy = (0, VB.memo)((function() {
      var BB;
      const {
        interactPrompt: TB
      } = (0, fB.i)("crosshairTarget"), {
        openInGameMenuName: dB,
        openEverythingMenuName: VB
      } = (0, sB.m)(["openInGameMenuName", "openEverythingMenuName"]), yB = (0, JB.f)("aimingOverlay", "none"), pB = (0, xB.l)(), lB = (0, Ly.e)();
      return null === TB || null !== dB || null !== VB || "sniper" === yB || pB || lB ? null : (0, gB.jsx)(Dy, {
        label: null !== (BB = TB.label) && void 0 !== BB ? BB : oy
      })
    }));

    function Dy(BB) {
      let {
        label: TB
      } = BB;
      const dB = uT(bB.c.Interact, !1);
      return (0, gB.jsx)("div", {
        ref: dB,
        className: "TouchInteractHit",
        children: (0, gB.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, gB.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, gB.jsx)(QB.e, {
              name: "hand-back-point-up"
            })
          }), (0, gB.jsx)(YB.e, {
            text: TB
          })]
        })
      })
    }
    var uy = dB(4156),
      Hy = dB(4226);
    const Ey = (0, VB.forwardRef)((function(BB, TB) {
        let {
          text: dB,
          className: VB,
          children: yB
        } = BB;
        return dB.hasText ? (0, gB.jsx)("div", {
          ref: TB,
          className: pB()("HudTextPanel", VB, {
            NoBackground: !dB.showBackground
          }),
          children: null !== yB && void 0 !== yB ? yB : (0, gB.jsx)(YB.e, {
            text: dB.content
          })
        }) : null
      })),
      vy = (0, VB.memo)((function() {
        const BB = (0, mB.l)("middleTextTop"),
          [TB, dB] = (0, VB.useState)(null),
          yB = (0, oV.j)(TB);
        return BB.hasText ? (0, gB.jsx)("div", {
          className: pB()("MiddleTextTopContainer", {
            MiddleTextTopBelow: yB
          }),
          children: (0, gB.jsx)(Ey, {
            ref: dB,
            className: "MiddleTextTop",
            text: BB
          })
        }) : null
      })),
      my = (0, VB.memo)((function() {
        const BB = (0, mB.e)();
        return (0, gB.jsx)(gB.Fragment, {
          children: BB.map(((BB, TB) => (0, gB.jsx)(Ey, {
            className: "HeaderChip",
            text: BB
          }, TB)))
        })
      }));
    var iy = dB(3116),
      Ny = dB(4005);
    const ty = (0, VB.memo)((function() {
      const {
        t: BB
      } = (0, FB.z)(), [TB, dB] = (0, VB.useState)(!1), yB = (0, VB.useRef)(!1), pB = function(BB) {
        let {
          gameNameWithVariation: TB,
          lobbyName: dB
        } = BB;
        if ((0, xV.j)(TB)) return fy;
        if ((0, jV.L)(dB)) return sy;
        return null
      }((0, fB.i)("connectedGame"));
      if (!pB || TB) return null;
      const lB = Ny.b[pB.target];
      return (0, gB.jsx)(PB.h, {
        tooltipInner: (0, gB.jsx)("div", {
          children: BB(lB.reportButtonTooltip)
        }),
        children: (0, gB.jsx)("div", {
          children: (0, gB.jsx)(Od.Q, {
            onClick: () => {
              yB.current || (yB.current = !0, (0, Ny.d)(pB.reportPolicyIds, lB).then((BB => {
                null !== BB && void 0 !== BB && BB.selectedPolicyId && (LB.gameBridge.send("reportLobbyOrGame", {
                  target: pB.target,
                  yl: BB.selectedPolicyId,
                  details: BB.pl
                }), dB(!0))
              })).finally((() => {
                yB.current = !1
              })))
            }
          })
        })
      })
    }));
    const fy = {
        target: "customGame",
        reportPolicyIds: iy.e
      },
      sy = {
        target: "lobby",
        reportPolicyIds: iy.f
      };
    var My = dB(8122),
      zy = dB(35899),
      wy = dB(35908),
      Uy = dB(35913),
      Fy = dB(35920),
      Ky = dB(35941);

    function ry(BB) {
      return BB instanceof Error && Iy.has(BB.message) ? BB.message : void 0
    }
    const Iy = new Set([Ky.d.saveBusy.text, Ky.d.saveClosed.text, Ky.d.cropBusy.text]);
    let cy = !1;
    async function Sy(BB, TB) {
      var dB, VB;
      const {
        files: yB
      } = TB, pB = yB.replayKey();
      if (null === pB) return "none";
      if (cy) throw new Error(Ky.d.saveBusy.text);
      const lB = null !== (dB = null === (VB = yB.saveRefusal) || void 0 === VB ? void 0 : VB.call(yB)) && void 0 !== dB ? dB : null;
      if (null !== lB) throw new Error(lB);
      cy = !0;
      try {
        return await async function(BB, TB, dB) {
          const {
            files: VB
          } = TB, yB = () => VB.replayKey() === dB, pB = (BB, TB) => {
            yB() && VB.markSaved(BB, TB)
          };
          let lB = null;
          if (TB.pickerSupported()) {
            try {
              if (lB = await TB.chooseFile(BB ? null : VB.fileHandle()), null === lB) return "IT"
            } catch (YB) {
              TB.onFallback(YB)
            }
            if (!yB()) throw new Error(Ky.d.saveClosed.text)
          }
          const JB = await VB.encode();
          if (null === JB) {
            if (null !== lB) throw new Error(Ky.d.saveClosed.text);
            return "none"
          }
          if (null !== lB) try {
            return await TB.write(lB, JB), pB(lB), "written"
          } catch (YB) {
            TB.onFallback(YB)
          }
          return pB(null, TB.download(JB)), "downloaded"
        }(BB, TB, pB)
      } finally {
        cy = !1
      }
    }
    var Py = dB(3951),
      Qy = dB(72);
    const Ry = [1, 2, 4, 8, 16, 32, 64];

    function ay(BB, TB) {
      return Math.max(0, Math.min(BB, TB))
    }

    function Zy(BB, TB, dB) {
      return dB <= TB ? 0 : (BB - TB) / (dB - TB) * 100
    }

    function Xy(BB, TB, dB) {
      const VB = dB - TB;
      return Math.round(TB + BB / 100 * VB)
    }

    function Wy(BB, TB) {
      const dB = Math.floor(BB / TB / 60),
        VB = Math.floor(BB / TB % 60),
        yB = BB % TB;
      return `${dB.toString().padStart(2,"0")}:${VB.toString().padStart(2,"0")}:${yB.toString().padStart(2,"0")}`
    }

    function hy(BB) {
      return Number.isInteger(BB) || Ry.includes(BB) ? `${Math.round(BB)}\xd7` : `${BB.toFixed(1)}\xd7`
    }

    function Cy(BB, TB) {
      const dB = Ry.indexOf(BB);
      if (-1 !== dB) return "in" === TB ? Ry[Math.min(dB + 1, Ry.length - 1)] : Ry[Math.max(dB - 1, 0)];
      if ("in" === TB) {
        for (const TB of Ry)
          if (TB >= BB) return TB;
        return BB
      }
      for (let VB = Ry.length - 1; VB >= 0; VB--)
        if (Ry[VB] <= BB) return Ry[VB];
      return Ry[0]
    }

    function Gy(BB, TB) {
      const dB = TB.getBoundingClientRect();
      if (dB.width <= 0) return 0;
      const VB = (BB - dB.left) / dB.width * 100;
      return Math.max(0, Math.min(100, VB))
    }

    function qy(BB, TB) {
      return TB <= 0 ? 0 : BB / TB * 100
    }

    function xy(BB, TB, dB) {
      const VB = [];
      let yB = Math.ceil(BB / dB) * dB;
      for (; yB <= TB;) VB.push(yB), yB += dB;
      return VB
    }
    var jy = dB(35946);
    const Ay = [{
        label: "Linear",
        easing: jy.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: jy.e
      }, {
        label: "Ease Out",
        easing: jy.g
      }, {
        label: "Ease In Out",
        easing: jy.d
      }],
      by = 200,
      ny = 150;

    function ey(BB) {
      const TB = BB => Number(BB.toFixed(3)).toString();
      return `cubic-bezier(${TB(BB[0])}, ${TB(BB[1])}, ${TB(BB[2])}, ${TB(BB[3])})`
    }

    function Bp(BB, TB) {
      return {
        cx: 25 + BB * ny,
        cy: 25 + (1 - TB) * ny
      }
    }

    function Tp(BB, TB, dB) {
      const VB = BB - dB.left,
        yB = TB - dB.top;
      return {
        x: fd.e.clamp((VB - 25) / ny, 0, 1),
        y: fd.e.clamp(1 - (yB - 25) / ny, -1, 2)
      }
    }

    function dp(BB, TB, dB, VB, yB) {
      return {
        x: (0, jy.k)(BB, dB, yB),
        y: (0, jy.k)(TB, VB, yB)
      }
    }
    const Vp = (0, VB.memo)((function(BB) {
      let {
        value: TB,
        onChange: dB
      } = BB;
      const yB = (0, VB.useRef)(null),
        pB = (0, VB.useRef)(null),
        [lB, JB] = (0, VB.useState)(null),
        YB = (0, VB.useCallback)((() => {
          const BB = yB.current;
          if (!BB) return;
          const dB = BB.getContext("2d");
          if (!dB) return;
          const VB = window.devicePixelRatio || 1;
          BB.width = by * VB, BB.height = by * VB, dB.setTransform(VB, 0, 0, VB, 0, 0), dB.clearRect(0, 0, by, by), dB.fillStyle = "rgba(38, 52, 93, 0.85)", dB.fillRect(0, 0, by, by), dB.beginPath();
          const pB = Bp(0, 0),
            JB = Bp(1, 1);
          dB.moveTo(pB.cx, pB.cy), dB.lineTo(JB.cx, JB.cy), dB.strokeStyle = "rgba(164, 164, 164, 0.35)", dB.setLineDash([3, 3]), dB.stroke(), dB.setLineDash([]);
          const [YB, gB, oB, kB] = TB, LB = Bp(YB, gB), OB = Bp(oB, kB);
          dB.strokeStyle = "rgba(252, 211, 115, 0.55)", dB.lineWidth = 1.5, dB.beginPath(), dB.moveTo(pB.cx, pB.cy), dB.lineTo(LB.cx, LB.cy), dB.moveTo(JB.cx, JB.cy), dB.lineTo(OB.cx, OB.cy), dB.stroke(), dB.strokeStyle = "#fcd373", dB.lineWidth = 2, dB.beginPath();
          for (let TB = 0; TB <= 50; TB++) {
            const BB = dp(YB, gB, oB, kB, TB / 50),
              VB = Bp(BB.x, BB.y);
            0 === TB ? dB.moveTo(VB.cx, VB.cy) : dB.lineTo(VB.cx, VB.cy)
          }
          dB.stroke();
          const DB = (BB, TB, VB) => {
            dB.beginPath(), dB.arc(BB, TB, VB ? 6 : 5, 0, 2 * Math.PI), dB.fillStyle = VB ? "#ffb914" : "#fcd373", dB.fill(), dB.strokeStyle = "#1a1f2e", dB.lineWidth = 1.5, dB.stroke()
          };
          DB(LB.cx, LB.cy, "p1" === lB), DB(OB.cx, OB.cy, "p2" === lB)
        }), [lB, TB]);
      (0, VB.useEffect)((() => {
        YB()
      }), [YB]);
      const oB = (0, VB.useCallback)(((BB, VB) => {
          const lB = yB.current,
            JB = pB.current;
          if (!lB || !JB) return;
          const YB = lB.getBoundingClientRect(),
            {
              x: gB,
              y: oB
            } = Tp(BB, VB, YB);
          dB("p1" === JB ? [gB, oB, TB[2], TB[3]] : [TB[0], TB[1], gB, oB])
        }), [dB, TB]),
        kB = (0, VB.useCallback)((BB => {
          const dB = yB.current;
          if (!dB) return;
          const VB = dB.getBoundingClientRect();
          let {
            x: lB,
            y: YB
          } = Tp(BB.clientX, BB.clientY, VB);
          lB = fd.e.clamp(lB, 0, 1), YB = fd.e.clamp(YB, 0, 1);
          const [gB, kB, LB, OB] = TB.map((BB => fd.e.clamp(BB, 0, 1))), DB = Math.hypot(lB - gB, YB - kB), uB = Math.hypot(lB - LB, YB - OB), HB = DB <= uB ? "p1" : "p2";
          ("p1" === HB ? DB : uB) > .12 || (pB.current = HB, JB(HB), dB.setPointerCapture(BB.pointerId), oB(BB.clientX, BB.clientY))
        }), [oB, TB]),
        LB = (0, VB.useCallback)((BB => {
          pB.current && oB(BB.clientX, BB.clientY)
        }), [oB]),
        OB = (0, VB.useCallback)((BB => {
          pB.current = null, JB(null), BB.currentTarget.hasPointerCapture(BB.pointerId) && BB.currentTarget.releasePointerCapture(BB.pointerId)
        }), []);
      return (0, gB.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, gB.jsx)("canvas", {
          ref: yB,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: by,
            height: by
          },
          onPointerDown: kB,
          onPointerMove: LB,
          onPointerUp: OB,
          onPointerCancel: OB
        }), (0, gB.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: ey(TB)
        })]
      })
    }));
    var yp = dB(1564),
      pp = dB(1546);
    const lp = 12;

    function Jp(BB) {
      return {
        left: BB.left + BB.width / 2,
        top: BB.top - 8
      }
    }

    function Yp(BB, TB) {
      const [dB, yB] = (0, VB.useState)(null);
      return (0, VB.useLayoutEffect)((() => {
        const dB = BB.current;
        if (!dB) return;
        const {
          width: VB,
          height: pB
        } = dB.getBoundingClientRect();
        yB(function(BB, TB, dB) {
          const VB = window.innerWidth,
            yB = window.innerHeight,
            pB = TB / 2;
          let lB = BB.left + BB.width / 2;
          lB = Math.max(lp + pB, Math.min(lB, VB - lp - pB));
          const JB = BB.top - 8 - lp,
            YB = yB - BB.bottom - 8 - lp,
            gB = JB < dB && YB >= JB;
          let oB;
          gB ? (oB = BB.bottom + 8, oB + dB > yB - lp && (oB = yB - lp - dB), oB = Math.max(lp, oB)) : (oB = BB.top - 8, oB - dB < lp && (oB = lp + dB));
          return {
            left: lB,
            top: oB,
            placeBelow: gB
          }
        }(TB, VB, pB))
      }), [TB, BB]), dB
    }

    function gp(BB, TB, dB) {
      (0, VB.useEffect)((() => (0, pp.c)("pointerdown", (VB => {
        var yB, pB;
        const lB = VB.target;
        lB instanceof Node && (null !== (yB = BB.current) && void 0 !== yB && yB.contains(lB) || null !== dB && void 0 !== dB && null !== (pB = dB.current) && void 0 !== pB && pB.contains(lB) || (0, yp.l)(lB) || TB())
      }))), [dB, TB, BB])
    }

    function op(BB) {
      let {
        label: TB,
        value: dB,
        onChange: VB
      } = BB;
      return (0, gB.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, gB.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: TB
        }), (0, gB.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((BB, TB) => (0, gB.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, gB.jsx)("span", {
              children: BB
            }), (0, gB.jsx)("input", {
              type: "number",
              step: "any",
              value: dB[TB],
              onChange: BB => {
                const yB = Number.parseFloat(BB.target.value);
                if (Number.isNaN(yB)) return;
                const pB = [dB[0], dB[1], dB[2]];
                pB[TB] = yB, VB(pB)
              }
            })]
          }, BB)))
        })]
      })
    }
    const kp = (0, VB.memo)((function(BB) {
        var TB, dB, yB;
        let {
          keyframe: lB,
          anchor: JB,
          hasOutgoingSegment: YB,
          onClose: oB,
          onApply: kB,
          onDelete: LB,
          onUseCurrentCamera: OB
        } = BB;
        const DB = (0, VB.useRef)(null),
          uB = Yp(DB, JB.rect),
          [HB, EB] = (0, VB.useState)((() => [lB.position[0], lB.position[1], lB.position[2]])),
          [vB, mB] = (0, VB.useState)((() => [lB.direction[0], lB.direction[1], lB.direction[2]])),
          [iB, NB] = (0, VB.useState)((() => lB.easing));
        (0, VB.useEffect)((() => {
          EB([lB.position[0], lB.position[1], lB.position[2]]), mB([lB.direction[0], lB.direction[1], lB.direction[2]]), NB(lB.easing)
        }), [lB]), gp(DB, oB);
        const tB = (0, VB.useCallback)((() => {
            kB({
              dL: lB.dL,
              position: HB,
              direction: vB,
              easing: iB
            }), oB()
          }), [vB, iB, lB.dL, kB, oB, HB]),
          fB = (0, VB.useCallback)((() => {
            LB(lB.dL), oB()
          }), [lB.dL, LB, oB]),
          sB = (0, VB.useCallback)((() => {
            const BB = OB();
            BB && (EB([BB.position[0], BB.position[1], BB.position[2]]), mB([BB.direction[0], BB.direction[1], BB.direction[2]]))
          }), [OB]),
          MB = Jp(JB.rect);
        return (0, gB.jsxs)("div", {
          ref: DB,
          className: pB()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (TB = null === uB || void 0 === uB ? void 0 : uB.placeBelow) && void 0 !== TB && TB,
            Positioned: null !== uB
          }),
          style: {
            left: `${null!==(dB=null===uB||void 0===uB?void 0:uB.left)&&void 0!==dB?dB:MB.left}px`,
            top: `${null!==(yB=null===uB||void 0===uB?void 0:uB.top)&&void 0!==yB?yB:MB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, gB.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, gB.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, gB.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", JB.dL]
            })]
          }), (0, gB.jsx)(op, {
            label: "Position",
            value: HB,
            onChange: EB
          }), (0, gB.jsx)(op, {
            label: "Direction",
            value: vB,
            onChange: mB
          }), YB && (0, gB.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, gB.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, gB.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Ay.map((BB => {
                const TB = (dB = iB, VB = BB.easing, dB[0] === VB[0] && dB[1] === VB[1] && dB[2] === VB[2] && dB[3] === VB[3]);
                var dB, VB;
                return (0, gB.jsx)(Od.T, {
                  className: pB()("ReplayKeyframePopoverPreset", {
                    Active: TB
                  }),
                  onClick: () => {
                    NB(BB.easing)
                  },
                  children: BB.label
                }, BB.label)
              }))
            }), (0, gB.jsx)(Vp, {
              value: iB,
              onChange: NB
            })]
          }), (0, gB.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, gB.jsx)(Od.d, {
              className: "ReplayViewerCompactButton",
              onClick: sB,
              children: "Use current view"
            }), (0, gB.jsx)(Od.k, {
              className: "ReplayViewerCompactButton",
              onClick: tB,
              children: "Apply"
            }), (0, gB.jsx)(Od.K, {
              className: "ReplayViewerCompactButton",
              onClick: fB,
              children: "Delete"
            })]
          })]
        })
      })),
      Lp = (0, VB.memo)((function(BB) {
        var TB, dB, yB;
        let {
          anchor: lB,
          hasPlaybackMark: JB,
          onClose: YB,
          onMark: oB,
          onZoom: kB,
          onCrop: LB,
          onDeleteKeyframes: OB,
          onClearMark: DB
        } = BB;
        const uB = (0, VB.useRef)(null),
          HB = Yp(uB, lB.rect),
          EB = Jp(lB.rect),
          vB = {
            startTick: lB.startTick,
            endTick: lB.endTick
          },
          mB = lB.endTick > lB.startTick;
        return gp(uB, YB), (0, gB.jsx)("div", {
          ref: uB,
          className: pB()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (TB = null === HB || void 0 === HB ? void 0 : HB.placeBelow) && void 0 !== TB && TB,
            Positioned: null !== HB
          }),
          style: {
            left: `${null!==(dB=null===HB||void 0===HB?void 0:HB.left)&&void 0!==dB?dB:EB.left}px`,
            top: `${null!==(yB=null===HB||void 0===HB?void 0:HB.top)&&void 0!==yB?yB:EB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: (0, gB.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, gB.jsx)(Od.k, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                oB(vB)
              },
              disabled: !mB,
              children: (0, gB.jsx)("span", {
                children: " Play range "
              })
            }), (0, gB.jsx)(Od.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                kB(vB)
              },
              children: (0, gB.jsx)("span", {
                children: " Zoom "
              })
            }), (0, gB.jsx)(Od.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                LB(vB)
              },
              disabled: !mB,
              children: (0, gB.jsx)("span", {
                children: " Crop "
              })
            }), (0, gB.jsx)(Od.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                OB(vB)
              },
              children: (0, gB.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), JB && (0, gB.jsx)(Od.T, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                DB()
              },
              children: (0, gB.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      Op = (0, VB.memo)((function(BB) {
        var TB, dB;
        let {
          maxTick: yB,
          displayTick: lB,
          WU: JB,
          cameraKeyframes: YB,
          playbackMark: oB,
          onSeek: kB,
          onPause: LB,
          onScrubTickChange: OB,
          onMoveCameraKeyframe: DB,
          onUpdateCameraKeyframe: uB,
          onDeleteCameraKeyframe: HB,
          onUseCurrentCamera: EB,
          onMarkRange: vB,
          onCropRange: mB,
          onDeleteKeyframesInRange: iB,
          onClearMark: NB,
          zoomLevel: tB,
          onZoomLevelChange: fB
        } = BB;
        const sB = (0, VB.useRef)(null),
          MB = (0, VB.useRef)(null),
          zB = (0, VB.useRef)(!1),
          wB = (0, VB.useRef)(!1),
          UB = (0, VB.useRef)(tB),
          FB = (0, VB.useRef)(null),
          KB = (0, VB.useRef)(null),
          rB = (0, VB.useRef)(null),
          IB = (0, VB.useRef)(null),
          [cB, SB] = (0, VB.useState)(null),
          [PB, QB] = (0, VB.useState)(lB),
          [RB, aB] = (0, VB.useState)(null),
          [ZB, XB] = (0, VB.useState)(null),
          [WB, hB] = (0, VB.useState)(null),
          [CB, GB] = (0, VB.useState)(null),
          qB = (0, VB.useMemo)((() => YB.map((BB => BB.dL))), [YB]),
          xB = null !== cB && void 0 !== cB ? cB : lB,
          {
            viewStart: jB,
            viewEnd: AB
          } = (0, VB.useMemo)((() => function(BB) {
            const TB = BB.maxTick + 1,
              dB = Math.max(1, Math.ceil(TB / BB.zoomLevel)),
              VB = Math.floor(dB / 2);
            let yB = BB.centerTick - VB;
            return yB = Math.max(0, Math.min(yB, BB.maxTick - dB + 1)), {
              viewStart: yB,
              viewEnd: Math.min(BB.maxTick, yB + dB - 1)
            }
          }({
            maxTick: yB,
            zoomLevel: tB,
            centerTick: PB
          })), [yB, tB, PB]);
        (0, VB.useEffect)((() => {
          if (null !== cB || null !== KB.current || null !== rB.current || null !== IB.current) return;
          if (zB.current) return void(zB.current = !1);
          if (wB.current) return void(wB.current = !1);
          const BB = UB.current !== tB;
          UB.current = tB, BB && QB(lB)
        }), [tB, lB, cB]);
        const bB = (0, VB.useCallback)((BB => {
            let TB = ay(BB, yB);
            return oB && (TB = Math.max(oB.inTick, Math.min(TB, oB.outTick))), TB
          }), [yB, oB]),
          nB = (0, VB.useCallback)(((BB, TB) => {
            const dB = bB(BB);
            kB(dB), TB && QB(dB)
          }), [bB, kB]),
          eB = (0, VB.useCallback)(((BB, TB) => {
            const dB = bB(BB);
            SB(dB), OB(dB), nB(dB, TB)
          }), [bB, nB, OB]),
          BT = (0, VB.useCallback)((() => {
            SB((BB => (null !== BB && QB(BB), null))), OB(null)
          }), [OB]),
          TT = (0, VB.useCallback)((() => {
            hB(null), GB(null)
          }), []),
          dT = (0, VB.useCallback)((BB => {
            const TB = sB.current;
            if (!TB) return 0;
            return ay(Xy(Gy(BB, TB), jB, AB), yB)
          }), [yB, AB, jB]),
          VT = (0, VB.useCallback)((BB => {
            const TB = MB.current;
            if (!TB) return 0;
            return ay(Xy(Gy(BB, TB), 0, yB), yB)
          }), [yB]),
          yT = (0, VB.useMemo)((() => {
            if (!RB) return [...qB];
            const BB = qB.filter((BB => BB !== RB.fromTick));
            return BB.push(RB.previewTick), BB.sort(((BB, TB) => BB - TB)), BB
          }), [qB, RB]),
          pT = (0, VB.useMemo)((() => {
            var BB;
            return ZB && null !== (BB = YB.find((BB => BB.dL === ZB.dL))) && void 0 !== BB ? BB : null
          }), [YB, ZB]),
          lT = (0, VB.useMemo)((() => !!pT && YB.some((BB => BB.dL > pT.dL))), [YB, pT]);
        (0, VB.useEffect)((() => {
          ZB && !pT && XB(null)
        }), [ZB, pT]), (0, VB.useEffect)((() => {
          if (!CB) return () => {};
          const BB = BB => {
            "Escape" === BB.key && TT()
          };
          return window.addEventListener("keydown", BB), () => {
            window.removeEventListener("keydown", BB)
          }
        }), [TT, CB]);
        const JT = (0, VB.useCallback)(((BB, TB) => {
            TT(), LB(), kB(BB, {
              ignorePlaybackMark: !0
            }), XB({
              dL: BB,
              rect: TB.getBoundingClientRect()
            })
          }), [TT, LB, kB]),
          YT = (0, VB.useCallback)(((BB, TB) => dB => {
            0 === dB.button && (dB.stopPropagation(), XB(null), TT(), LB(), FB.current = {
              fromTick: BB,
              startX: dB.clientX,
              startY: dB.clientY,
              didDrag: !1,
              track: TB
            }, aB({
              fromTick: BB,
              previewTick: BB,
              track: TB
            }), dB.currentTarget.setPointerCapture(dB.pointerId))
          }), [TT, LB]),
          gT = (0, VB.useCallback)((BB => {
            if (!RB) return;
            BB.stopPropagation();
            const TB = FB.current;
            if (TB && !TB.didDrag) {
              const dB = BB.clientX - TB.startX,
                VB = BB.clientY - TB.startY;
              Math.hypot(dB, VB) > 5 && (TB.didDrag = !0)
            }
            const dB = "detail" === RB.track ? dT(BB.clientX) : VT(BB.clientX);
            dB !== RB.previewTick && aB({
              ...RB,
              previewTick: dB
            })
          }), [RB, dT, VT]),
          oT = (0, VB.useCallback)((BB => {
            if (!RB) return;
            BB.stopPropagation();
            const TB = FB.current,
              dB = "detail" === RB.track ? dT(BB.clientX) : VT(BB.clientX);
            TB && !TB.didDrag ? JT(TB.fromTick, BB.currentTarget) : dB !== RB.fromTick && DB(RB.fromTick, dB), aB(null), FB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId)
          }), [RB, DB, JT, dT, VT]),
          kT = (0, VB.useCallback)((BB => {
            if (0 !== BB.button) return;
            XB(null), LB();
            const TB = dT(BB.clientX);
            KB.current = {
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              startTick: TB,
              currentTick: TB,
              didSelect: !1
            }, hB(null), GB(null), BB.currentTarget.setPointerCapture(BB.pointerId)
          }), [LB, dT]),
          LT = (0, VB.useCallback)((BB => {
            const TB = KB.current;
            if (!TB || TB.pointerId !== BB.pointerId) return;
            const dB = dT(BB.clientX);
            if (TB.currentTick = dB, !TB.didSelect) {
              const dB = BB.clientX - TB.startX,
                VB = BB.clientY - TB.startY;
              if (Math.hypot(dB, VB) <= 5) return;
              TB.didSelect = !0
            }
            const VB = Math.min(TB.startTick, dB),
              yB = Math.max(TB.startTick, dB);
            hB({
              startTick: VB,
              endTick: yB
            })
          }), [dT]),
          OT = (0, VB.useCallback)((BB => {
            const TB = KB.current;
            if (!TB || TB.pointerId !== BB.pointerId) return;
            if (KB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), !TB.didSelect) return TT(), void nB(TB.startTick, !0);
            const dB = dT(BB.clientX),
              VB = Math.min(TB.startTick, dB),
              yB = Math.max(TB.startTick, dB),
              pB = {
                startTick: VB,
                endTick: yB
              };
            hB(pB);
            const lB = sB.current;
            if (!lB) return;
            const JB = lB.getBoundingClientRect(),
              YB = Zy(VB, jB, AB) / 100,
              gB = Zy(yB, jB, AB) / 100,
              oB = JB.left + YB * JB.width,
              kB = JB.left + gB * JB.width;
            GB({
              ...pB,
              rect: new DOMRect(oB, JB.top, Math.max(kB - oB, 1), JB.height)
            })
          }), [TT, nB, dT, AB, jB]),
          DT = (0, VB.useCallback)((BB => TB => {
            if (0 !== TB.button) return;
            TB.stopPropagation(), XB(null), TT(), LB(), rB.current = {
              pointerId: TB.pointerId,
              track: BB
            }, TB.currentTarget.setPointerCapture(TB.pointerId);
            const dB = "detail" === BB ? dT(TB.clientX) : VT(TB.clientX);
            eB(dB, !1)
          }), [TT, LB, eB, dT, VT]),
          uT = (0, VB.useCallback)((BB => {
            const TB = rB.current;
            if (!TB || TB.pointerId !== BB.pointerId) return;
            BB.stopPropagation();
            const dB = "detail" === TB.track ? dT(BB.clientX) : VT(BB.clientX);
            eB(dB, !1)
          }), [eB, dT, VT]),
          HT = (0, VB.useCallback)((BB => {
            const TB = rB.current;
            TB && TB.pointerId === BB.pointerId && (BB.stopPropagation(), rB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BT())
          }), [BT]),
          ET = (0, VB.useCallback)((BB => {
            0 === BB.button && (TT(), LB(), IB.current = {
              pointerId: BB.pointerId
            }, BB.currentTarget.setPointerCapture(BB.pointerId), eB(VT(BB.clientX), !0))
          }), [TT, LB, eB, VT]),
          vT = (0, VB.useCallback)((BB => {
            const TB = IB.current;
            TB && TB.pointerId === BB.pointerId && eB(VT(BB.clientX), !0)
          }), [eB, VT]),
          mT = (0, VB.useCallback)((BB => {
            const TB = IB.current;
            TB && TB.pointerId === BB.pointerId && (IB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), BT())
          }), [BT]),
          iT = (0, VB.useCallback)((BB => {
            const TB = Math.max(1, BB.endTick - BB.startTick + 1),
              dB = yB + 1,
              VB = dB / TB,
              pB = Math.max(1, Math.ceil(dB / VB)),
              lB = BB.startTick + Math.floor((pB - 1) / 2);
            wB.current = !0, UB.current = VB, QB(ay(lB, yB)), fB(VB), TT()
          }), [TT, yB, fB]),
          NT = (0, VB.useCallback)((BB => {
            vB(BB), TT()
          }), [TT, vB]),
          tT = (0, VB.useCallback)((BB => {
            mB(BB), TT()
          }), [TT, mB]),
          fT = (0, VB.useCallback)((BB => {
            iB(BB), TT()
          }), [TT, iB]),
          sT = (0, VB.useCallback)((() => {
            NB(), TT()
          }), [TT, NB]);
        (0, VB.useEffect)((() => {
          const BB = sB.current;
          if (!BB) return () => {};
          const TB = TB => {
            TB.preventDefault();
            const dB = ay(Xy(Gy(TB.clientX, BB), jB, AB), yB),
              VB = TB.deltaY < 0 ? "in" : "out",
              pB = Cy(tB, VB);
            pB !== tB && (zB.current = !0, QB(dB), fB(pB))
          };
          return BB.addEventListener("wheel", TB, {
            passive: !1
          }), () => {
            BB.removeEventListener("wheel", TB)
          }
        }), [yB, fB, AB, jB, tB]);
        const MT = Zy(xB, jB, AB),
          zT = qy(xB, yB),
          wT = qy(jB, yB),
          UT = yB > 0 ? qy(AB, yB) : 100,
          FT = null !== oB,
          KT = null !== (TB = null === oB || void 0 === oB ? void 0 : oB.inTick) && void 0 !== TB ? TB : 0,
          rT = null !== (dB = null === oB || void 0 === oB ? void 0 : oB.outTick) && void 0 !== dB ? dB : yB,
          IT = qy(KT, yB),
          cT = Math.max(qy(rT, yB) - IT, 0),
          ST = Zy(Math.max(KT, jB), jB, AB),
          PT = Zy(Math.min(rT, AB), jB, AB),
          QT = Math.max(PT - ST, 0),
          RT = FT && rT >= jB && KT <= AB,
          aT = Zy(KT, jB, AB),
          ZT = Zy(rT, jB, AB),
          XT = FT && KT >= jB && KT <= AB,
          WT = FT && rT >= jB && rT <= AB,
          hT = qy(KT, yB),
          CT = qy(rT, yB),
          GT = null !== WB && void 0 !== WB ? WB : CB ? {
            startTick: CB.startTick,
            endTick: CB.endTick
          } : null,
          qT = GT ? Zy(Math.max(GT.startTick, jB), jB, AB) : 0,
          xT = GT ? Zy(Math.min(GT.endTick, AB), jB, AB) : 0,
          jT = Math.max(xT - qT, 0),
          AT = null !== GT && GT.endTick >= jB && GT.startTick <= AB,
          bT = (0, VB.useMemo)((() => xy(0, yB, JB)), [yB, JB]),
          nT = (0, VB.useMemo)((() => xy(jB, AB, JB)), [jB, AB, JB]),
          eT = (0, VB.useMemo)((() => yT.filter((BB => BB >= jB && BB <= AB))), [yT, AB, jB]),
          Bd = (0, VB.useCallback)(((BB, TB, dB) => {
            const VB = "detail" === TB ? Zy(BB, jB, AB) : qy(BB, yB),
              lB = null !== RB && dB === RB.fromTick,
              JB = null !== ZB && ZB.dL === dB;
            return (0, gB.jsx)("button", {
              type: "button",
              className: pB()("ReplayTimelineCameraKeyframeMarker", "detail" === TB ? "Detail" : "Overview", {
                Dragging: lB,
                Selected: JB
              }),
              style: {
                left: `${VB}%`
              },
              onPointerDown: YT(dB, TB),
              onPointerMove: gT,
              onPointerUp: oT,
              onPointerCancel: oT,
              "aria-label": `Camera keyframe at tick ${dB}`
            }, `cam-${TB}-${dB}`)
          }), [YT, ZB, oT, RB, yB, gT, AB, jB]),
          Td = (0, VB.useCallback)((BB => RB && BB === RB.previewTick ? RB.fromTick : BB), [RB]);
        return yB <= 0 ? null : (0, gB.jsxs)("div", {
          className: "ReplayTimeline",
          children: [ZB && pT && (0, Qy.createPortal)((0, gB.jsx)(kp, {
            keyframe: pT,
            anchor: ZB,
            hasOutgoingSegment: lT,
            onClose: () => {
              XB(null)
            },
            onApply: uB,
            onDelete: HB,
            onUseCurrentCamera: EB
          }), document.body), CB && (0, Qy.createPortal)((0, gB.jsx)(Lp, {
            anchor: CB,
            hasPlaybackMark: FT,
            onClose: TT,
            onMark: NT,
            onZoom: iT,
            onCrop: tT,
            onDeleteKeyframes: fT,
            onClearMark: sT
          }), document.body), (0, gB.jsxs)("div", {
            className: pB()("ReplayTimelineOverviewSection", {
              Hidden: tB <= 1
            }),
            children: [(0, gB.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, gB.jsxs)("div", {
              ref: MB,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: ET,
              onPointerMove: vT,
              onPointerUp: mT,
              onPointerCancel: mT,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": yB,
              "aria-valuenow": xB,
              tabIndex: 0,
              children: [bT.map((BB => {
                const TB = qy(BB, yB);
                return (0, gB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${TB}%`
                  }
                }, BB)
              })), FT && (0, gB.jsxs)(gB.Fragment, {
                children: [(0, gB.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${IT}%`,
                    width: `${cT}%`
                  }
                }), (0, gB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${hT}%`
                  },
                  "aria-hidden": !0
                }), (0, gB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${CT}%`
                  },
                  "aria-hidden": !0
                })]
              }), yT.map((BB => Bd(BB, "overview", Td(BB)))), (0, gB.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${wT}%`,
                  width: `${Math.max(UT-wT,.5)}%`
                }
              }), (0, gB.jsx)("button", {
                type: "button",
                className: pB()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== cB
                }),
                style: {
                  left: `${zT}%`
                },
                onPointerDown: DT("overview"),
                onPointerMove: uT,
                onPointerUp: HT,
                onPointerCancel: HT,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, gB.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, gB.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, gB.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, gB.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Wy(jB, JB), " \u2013 ", Wy(AB, JB), tB > 1 && (0, gB.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: hy(tB)
                })]
              })]
            }), (0, gB.jsxs)("div", {
              ref: sB,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: kT,
              onPointerMove: LT,
              onPointerUp: OT,
              onPointerCancel: OT,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": jB,
              "aria-valuemax": AB,
              "aria-valuenow": xB,
              tabIndex: 0,
              children: [nT.map((BB => {
                const TB = Zy(BB, jB, AB);
                return (0, gB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${TB}%`
                  }
                }, BB)
              })), RT && (0, gB.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${ST}%`,
                  width: `${QT}%`
                }
              }), XT && (0, gB.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${aT}%`
                },
                "aria-label": `Play range start at tick ${KT}`
              }), WT && (0, gB.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${ZT}%`
                },
                "aria-label": `Play range end at tick ${rT}`
              }), AT && GT && (0, gB.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${qT}%`,
                  width: `${jT}%`
                }
              }), eT.map((BB => Bd(BB, "detail", Td(BB)))), (0, gB.jsx)("button", {
                type: "button",
                className: pB()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== cB
                }),
                style: {
                  left: `${MT}%`
                },
                onPointerDown: DT("detail"),
                onPointerMove: uT,
                onPointerUp: HT,
                onPointerCancel: HT,
                "aria-label": "Scrub playhead"
              })]
            }), (0, gB.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, gB.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Dp = (0, VB.memo)((function(BB) {
        let {
          enabled: TB
        } = BB;
        const dB = (0, VB.useRef)(!1),
          yB = (0, VB.useRef)(null),
          [lB, JB] = (0, VB.useState)(!1),
          YB = (0, VB.useCallback)((BB => {
            TB && 0 === BB.button && (dB.current = !0, JB(!0), yB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, BB.currentTarget.setPointerCapture(BB.pointerId))
          }), [TB]),
          oB = (0, VB.useCallback)((BB => {
            if (!TB || !dB.current || !yB.current) return;
            const VB = BB.clientX - yB.current.x,
              pB = BB.clientY - yB.current.y;
            yB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, LB.gameBridge.send("dragReplayCamera", {
              dx: VB,
              dy: pB
            })
          }), [TB]),
          kB = (0, VB.useCallback)((BB => {
            dB.current && (dB.current = !1, JB(!1), yB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId))
          }), []);
        return TB ? (0, gB.jsx)("div", {
          className: pB()("ReplayViewerCameraDragSurface", {
            Dragging: lB
          }),
          onPointerDown: YB,
          onPointerMove: oB,
          onPointerUp: kB,
          onPointerCancel: kB,
          "aria-hidden": !0
        }) : null
      }));
    var Hp = dB(35950),
      Ep = dB(35959);
    const vp = (0, VB.memo)((function(BB) {
        var TB, dB, yB;
        let {
          anchorRect: lB,
          anchorRef: YB,
          onClose: oB
        } = BB;
        const kB = (0, VB.useRef)(null),
          LB = Yp(kB, lB),
          [OB, DB] = (0, VB.useState)(Ep.d),
          uB = (0, VB.useMemo)((() => Object.values(OB).every((BB => BB))), [OB]);
        (0, JB.e)("replayViewer|uiVisibilityChanged", (() => {
          DB((0, Ep.d)())
        })), gp(kB, oB, YB);
        const HB = (0, VB.useCallback)(((BB, TB) => {
            (0, Ep.g)(BB, TB), DB((0, Ep.d)())
          }), []),
          EB = (0, VB.useCallback)((BB => {
            for (const {
                group: TB
              }
              of Hp.g)(0, Ep.g)(TB, BB);
            DB((0, Ep.d)())
          }), []),
          vB = Jp(lB);
        return (0, Qy.createPortal)((0, gB.jsxs)("div", {
          ref: kB,
          className: pB()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (TB = null === LB || void 0 === LB ? void 0 : LB.placeBelow) && void 0 !== TB && TB,
            Positioned: null !== LB
          }),
          style: {
            left: `${null!==(dB=null===LB||void 0===LB?void 0:LB.left)&&void 0!==dB?dB:vB.left}px`,
            top: `${null!==(yB=null===LB||void 0===LB?void 0:LB.top)&&void 0!==yB?yB:vB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, gB.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, gB.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, gB.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, gB.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, gB.jsx)("input", {
                type: "checkbox",
                checked: uB,
                onChange: BB => {
                  EB(BB.target.checked)
                }
              }), (0, gB.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), Hp.g.map((BB => {
              let {
                group: TB,
                label: dB
              } = BB;
              return (0, gB.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, gB.jsx)("input", {
                  type: "checkbox",
                  checked: OB[TB],
                  onChange: BB => {
                    HB(TB, BB.target.checked)
                  }
                }), (0, gB.jsx)("span", {
                  children: dB
                })]
              }, TB)
            }))]
          })]
        }), document.body)
      })),
      mp = (0, VB.memo)((function(BB) {
        let {
          disabled: TB
        } = BB;
        const dB = (0, VB.useRef)(null),
          [yB, pB] = (0, VB.useState)(!1),
          [lB, JB] = (0, VB.useState)(null),
          YB = (0, VB.useCallback)((() => {
            dB.current && (JB(dB.current.getBoundingClientRect()), pB((BB => !BB)))
          }), []),
          oB = (0, VB.useCallback)((() => {
            pB(!1)
          }), []);
        return (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("div", {
            ref: dB,
            children: (0, gB.jsx)(Od.d, {
              className: "ReplayViewerActionButton",
              onClick: YB,
              disabled: TB,
              children: (0, gB.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), yB && lB && (0, gB.jsx)(vp, {
            anchorRect: lB,
            anchorRef: dB,
            onClose: oB
          })]
        })
      })),
      ip = ["freeCamUp", "freeCamDown"];

    function Np(BB, TB) {
      LB.gameBridge.send("holdReplayFreecamVertical", {
        action: BB,
        Dg: TB
      })
    }
    const tp = (0, VB.memo)((function() {
        (0, VB.useEffect)((() => () => {
          ! function() {
            LB.gameBridge.send("moveReplayFreecam", null);
            for (const BB of ip) Np(BB, !1)
          }()
        }), []);
        const BB = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("moveReplayFreecam", BB)
          }), []),
          TB = (0, VB.useCallback)((BB => ({
            onTouchStart: TB => {
              TB.preventDefault(), TB.stopPropagation(), Np(BB, !0)
            },
            onTouchEnd: TB => {
              TB.preventDefault(), TB.stopPropagation(), Np(BB, !1)
            },
            onTouchCancel: TB => {
              TB.preventDefault(), TB.stopPropagation(), Np(BB, !1)
            }
          })), []);
        return (0, gB.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, gB.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, gB.jsx)(LT, {
              onMove: BB,
              mode: "pinned"
            })
          }), (0, gB.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, gB.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...TB("freeCamUp"),
              children: (0, gB.jsx)(QB.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, gB.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...TB("freeCamDown"),
              children: (0, gB.jsx)(QB.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      fp = [],
      sp = (0, VB.memo)((function() {
        const BB = (0, xB.l)();
        return (0, fB.c)("replayViewerRequested", (BB => {
          (0, xB.j)("toggle" === BB ? !(0, xB.g)() : "open" === BB)
        })), BB ? (0, gB.jsx)(Mp, {}) : null
      })),
      Mp = (0, VB.memo)((function() {
        var BB, TB, dB, yB, lB, JB, YB, oB, kB, OB, DB, uB;
        const HB = VB.useRef(null),
          [EB, vB] = (0, VB.useState)(null),
          [mB, iB] = (0, VB.useState)(1),
          [NB, tB] = (0, VB.useState)(null),
          [zB, wB] = (0, VB.useState)(!1),
          {
            isTouchScreen: UB
          } = (0, sB.m)(["isTouchScreen"]),
          FB = (0, fB.i)("replay"),
          KB = (0, fB.i)("replayEdits"),
          rB = null !== FB,
          IB = null !== (BB = null === FB || void 0 === FB ? void 0 : FB.dL) && void 0 !== BB ? BB : 0,
          cB = null !== (TB = null === FB || void 0 === FB ? void 0 : FB.totalTicks) && void 0 !== TB ? TB : 0,
          SB = Math.max(0, cB - 1),
          RB = null !== (dB = null === FB || void 0 === FB ? void 0 : FB.playing) && void 0 !== dB && dB,
          aB = null !== (yB = null === FB || void 0 === FB ? void 0 : FB.speed) && void 0 !== yB ? yB : 1,
          ZB = null !== (lB = null === FB || void 0 === FB ? void 0 : FB.WU) && void 0 !== lB ? lB : 20,
          XB = null !== NB && void 0 !== NB ? NB : IB,
          WB = null !== (JB = null === FB || void 0 === FB ? void 0 : FB.freecam) && void 0 !== JB && JB,
          hB = null !== (YB = null === FB || void 0 === FB ? void 0 : FB.cameraMode) && void 0 !== YB ? YB : "recording",
          CB = null !== (oB = null === KB || void 0 === KB ? void 0 : KB.cameraKeyframes) && void 0 !== oB ? oB : fp,
          GB = null !== (kB = null === KB || void 0 === KB ? void 0 : KB.playbackMark) && void 0 !== kB ? kB : null,
          qB = null !== (OB = null === KB || void 0 === KB ? void 0 : KB.fileName) && void 0 !== OB ? OB : null,
          jB = null !== (DB = null === KB || void 0 === KB ? void 0 : KB.unsavedChanges) && void 0 !== DB && DB,
          AB = null !== (uB = null === KB || void 0 === KB ? void 0 : KB.suggestSaveAs) && void 0 !== uB && uB,
          bB = (0, fB.i)("replayVideoExporting"),
          nB = !bB && rB && ("freecam" === hB || ("recording" === hB || "keyframe" === hB) && !RB),
          eB = UB && rB && "freecam" === hB && !bB && !zB;
        (0, Py.d)(!0, !0, "ReplayViewerOverlay"), (0, VB.useEffect)((() => {
          LB.gameBridge.send("syncReplayCameraMode", null)
        }), [WB]);
        const BT = (0, VB.useCallback)(((BB, TB) => {
            LB.gameBridge.send("seekReplay", {
              dL: BB,
              ignorePlaybackMark: null === TB || void 0 === TB ? void 0 : TB.ignorePlaybackMark
            })
          }), []),
          TT = (0, VB.useCallback)((() => {
            LB.gameBridge.send("setReplayPlaying", !1)
          }), []),
          dT = (0, VB.useCallback)(((BB, TB) => {
            LB.gameBridge.send("moveReplayCameraKeyframe", {
              from: BB,
              to: TB
            })
          }), []),
          VT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("setReplayCameraKeyframe", BB)
          }), []),
          yT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB,
              end: BB
            })
          }), []),
          pT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB.startTick,
              end: BB.endTick
            })
          }), []),
          lT = (0, VB.useCallback)((() => LB.gameBridge.lookup("replayCamera", null)), []),
          JT = (0, VB.useCallback)((BB => {
            tB(BB)
          }), []),
          YT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("setReplayPlaybackMark", {
              inTick: BB.startTick,
              outTick: BB.endTick
            })
          }), []),
          gT = (0, VB.useCallback)((() => {
            LB.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          oT = (0, VB.useCallback)((BB => {
            const TB = LB.gameBridge.latest("replay");
            if (null === TB || BB.endTick <= BB.startTick) return;
            const dB = BB.startTick,
              VB = BB.endTick;
            IV.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((BB => {
              var yB;
              if (!0 !== BB) return;
              if ((null === (yB = LB.gameBridge.latest("replay")) || void 0 === yB ? void 0 : yB.id) !== TB.id) return;
              LB.gameBridge.send("cropReplay", {
                start: dB,
                end: VB
              }) && (tB(null), iB(1))
            }))
          }), []),
          kT = (0, VB.useCallback)(((BB, TB) => {
            vB(null), iB(1), tB(null), (0, zy.e)().open(BB, TB).catch((BB => {
              console.error(BB), vB(BB instanceof Error ? BB.message : "Failed to parse recording")
            }))
          }), []),
          LT = (0, VB.useCallback)(((BB, TB) => {
            null !== LB.gameBridge.latest("connectedGame").websocketUrl ? IV.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((dB => {
              !0 === dB && kT(BB, TB)
            })) : kT(BB, TB)
          }), [kT]),
          OT = (0, VB.useCallback)((BB => {
            var TB;
            const dB = null === (TB = BB.target.files) || void 0 === TB ? void 0 : TB[0];
            if (BB.target.value = "", !dB) return;
            const VB = new FileReader;
            VB.onload = () => {
              LT(new Uint8Array(VB.result), {
                fileName: dB.name
              })
            }, VB.onerror = () => {
              vB("Failed to read file")
            }, VB.readAsArrayBuffer(dB)
          }), [LT]),
          DT = (0, VB.useCallback)((() => {
            const BB = () => {
              var BB;
              null === (BB = HB.current) || void 0 === BB || BB.click()
            };
            (0, Fy.l)() ? (0, Fy.e)().then((BB => {
              BB && LT(BB.bytes, {
                fileHandle: BB.handle
              })
            })).catch((TB => {
              console.error(TB), BB()
            })): BB()
          }), [LT]),
          uT = (0, VB.useCallback)((async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let TB;
            try {
              TB = await Sy(BB, {
                files: (0, zy.e)(),
                pickerSupported: Fy.l,
                chooseFile: Fy.b,
                write: Fy.o,
                download: Uy.i,
                onFallback: console.error
              })
            } catch (dB) {
              return void(BB => {
                console.error(BB), IV.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: ry(BB),
                  confirmText: "OK"
                })
              })(dB)
            }
            "written" !== TB && "downloaded" !== TB || (() => {
              const BB = IV.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                BB.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          HT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("replayAction", BB)
          }), []),
          ET = (0, VB.useCallback)((BB => {
            iB((TB => Cy(TB, BB)))
          }), []),
          vT = (0, VB.useCallback)((BB => {
            if (!LB.gameBridge.latest("replayVideoExporting")) switch (BB) {
              case "replayLoad":
                DT();
                break;
              case "replaySave":
                uT(!1);
                break;
              case "replaySaveAs":
                uT(!0);
                break;
              case "replayTimelineZoomIn":
                ET("in");
                break;
              case "replayTimelineZoomOut":
                ET("out")
            }
          }), [DT, uT, ET]);
        (0, fB.c)("replayUiActionRequested", vT);
        const mT = (0, VB.useCallback)((BB => {
            LB.gameBridge.send("setReplayCameraMode", BB)
          }), []),
          iT = rB ? Od.d : Od.k,
          NT = jB && !AB ? Od.k : Od.d,
          tT = jB && AB ? Od.k : Od.d;
        return (0, gB.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, gB.jsx)(Dp, {
            enabled: nB
          }), eB && (0, gB.jsx)(tp, {}), (0, gB.jsx)("input", {
            ref: HB,
            type: "file",
            accept: Uy.b,
            className: "ReplayViewerFileInput",
            onChange: OT
          }), (0, gB.jsxs)("div", {
            className: pB()("ReplayViewerBar", {
              Collapsed: zB
            }),
            children: [(0, gB.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                zB ? wB(!1) : rB ? wB(!0) : (0, xB.d)()
              },
              "aria-expanded": !zB,
              "aria-label": zB ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, gB.jsx)(QB.e, {
                name: zB ? "angle-up" : "angle-down"
              })
            }), !zB && (0, gB.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [rB && cB > 0 && (0, gB.jsx)(Op, {
                maxTick: SB,
                displayTick: XB,
                WU: ZB,
                cameraKeyframes: CB,
                playbackMark: GB,
                onSeek: BT,
                onPause: TT,
                onScrubTickChange: JT,
                onMoveCameraKeyframe: dT,
                onUpdateCameraKeyframe: VT,
                onDeleteCameraKeyframe: yT,
                onUseCurrentCamera: lT,
                onMarkRange: YT,
                onCropRange: oT,
                onDeleteKeyframesInRange: pT,
                onClearMark: gT,
                zoomLevel: mB,
                onZoomLevelChange: iB
              }, SB), (0, gB.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, gB.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, gB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [rB && (0, gB.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== qB && void 0 !== qB ? qB : "Unsaved recording", jB ? " *" : ""]
                    }), (0, gB.jsxs)(iT, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        vT("replayLoad")
                      },
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, gB.jsxs)(Od.d, {
                      className: "ReplayViewerActionButton",
                      onClick: xB.d,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, gB.jsxs)(NT, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        vT("replaySave")
                      },
                      disabled: !rB,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, gB.jsxs)(Od.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        LB.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !rB,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, gB.jsxs)(tT, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        vT("replaySaveAs")
                      },
                      disabled: !rB,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, gB.jsxs)(Od.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        LB.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !rB || 0 === cB || bB,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, gB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gB.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, gB.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, gB.jsx)(MB.d, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, gB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, gB.jsx)(PB.h, {
                        tooltipInner: (0, gB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, gB.jsxs)(Od.T, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === hB,
                          onClick: () => {
                            mT("recording")
                          },
                          disabled: !rB,
                          children: ["Recorded ", (0, gB.jsx)(QB.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, gB.jsx)(PB.h, {
                        tooltipInner: (0, gB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, gB.jsxs)(Od.T, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === hB,
                          onClick: () => {
                            mT("freecam")
                          },
                          disabled: !rB,
                          children: ["Free ", (0, gB.jsx)(QB.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, gB.jsx)(PB.h, {
                        tooltipInner: (0, gB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, gB.jsxs)(Od.T, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === hB,
                          onClick: () => {
                            mT("keyframe")
                          },
                          disabled: !rB,
                          children: ["Preview ", (0, gB.jsx)(QB.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, gB.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, gB.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, gB.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, gB.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Wy(XB, ZB)
                      }), (0, gB.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, gB.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Wy(SB, ZB)
                      })]
                    }), (0, gB.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", XB, " / ", SB]
                    })]
                  }), (0, gB.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, gB.jsxs)(Od.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        HT("replaySkipBack")
                      },
                      disabled: !rB,
                      children: [(0, gB.jsxs)("span", {
                        children: [" ", (0, gB.jsx)(QB.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, gB.jsx)(MB.d, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, gB.jsxs)(Od.k, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        LB.gameBridge.send("setReplayPlaying", !RB)
                      },
                      disabled: !rB,
                      children: [(0, gB.jsxs)("span", {
                        children: [" ", RB ? (0, gB.jsx)(QB.e, {
                          name: "pause"
                        }) : (0, gB.jsx)(QB.e, {
                          name: "play"
                        }), " "]
                      }), (0, gB.jsx)(MB.d, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, gB.jsxs)(Od.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        HT("replaySkipForward")
                      },
                      disabled: !rB,
                      children: [(0, gB.jsxs)("span", {
                        children: [" ", (0, gB.jsx)(QB.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, gB.jsx)(MB.d, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, gB.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, gB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, gB.jsxs)(Od.k, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        HT("replayRecordKeyframe")
                      },
                      disabled: !rB,
                      children: [(0, gB.jsx)(MB.d, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, gB.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, gB.jsx)(mp, {
                      disabled: !rB
                    }), GB && (0, gB.jsx)(Od.T, {
                      className: "ReplayViewerActionButton",
                      onClick: gT,
                      disabled: !rB,
                      children: (0, gB.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, gB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, gB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, gB.jsx)(Od.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          HT("replaySpeedDown")
                        },
                        disabled: !rB || (0, wy.e)(aB),
                        children: (0, gB.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, gB.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [aB, "\xd7"]
                      }), (0, gB.jsx)(Od.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          HT("replaySpeedUp")
                        },
                        disabled: !rB || (0, wy.c)(aB),
                        children: (0, gB.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, gB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, gB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, gB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, gB.jsxs)(Od.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          vT("replayTimelineZoomOut")
                        },
                        disabled: !rB || mB <= Ry[0],
                        children: [(0, gB.jsx)("span", {
                          children: " \u2212 "
                        }), (0, gB.jsx)(MB.d, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, gB.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: hy(mB)
                      }), (0, gB.jsxs)(Od.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          vT("replayTimelineZoomIn")
                        },
                        disabled: !rB || mB >= Ry[Ry.length - 1],
                        children: [(0, gB.jsx)("span", {
                          children: " + "
                        }), (0, gB.jsx)(MB.d, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, gB.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !rB && "Load a recording to begin playback"
              }), EB && (0, gB.jsx)("div", {
                className: "ReplayViewerError",
                children: EB
              })]
            })]
          })]
        })
      }));
    var zp = dB(1209);

    function wp() {
      const [, BB] = (0, VB.useState)(0);
      return (0, JB.e)("replayViewer|uiVisibilityChanged", (() => {
          BB((BB => BB + 1))
        })), (0, JB.e)("replayViewer|replayLoaded", (() => {
          BB((BB => BB + 1))
        })),
        function() {
          if (!(0, zp.h)()) return {};
          const BB = {
              [Hp.c]: "true"
            },
            TB = (0, Ep.d)();
          for (const {
              group: dB,
              dataAttr: VB
            }
            of Hp.g) VB && !TB[dB] && (BB[VB] = "true");
          return BB
        }()
    }
    var Up = dB(8565),
      Fp = dB(1808),
      Kp = dB(8043),
      rp = dB(8031),
      Ip = dB(1817);
    const cp = (0, VB.memo)((function() {
      var BB, TB, dB;
      const yB = (0, mB.j)("customButtons");
      (0, VB.useEffect)((() => yB ? (LB.gameBridge.send("bindCustomButtonKeys", yB.filter(Kp.e).map((BB => {
        let {
          id: TB,
          keycode: dB
        } = BB;
        return {
          id: TB,
          keycode: dB
        }
      }))), () => {
        LB.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [yB]);
      const pB = null !== (BB = null === yB || void 0 === yB ? void 0 : yB.filter(Kp.e)) && void 0 !== BB ? BB : [],
        lB = (0, rp.i)(),
        JB = null !== (TB = null === (dB = (0, Ip.e)()) || void 0 === dB ? void 0 : dB.hideButtonHints) && void 0 !== TB && TB,
        YB = "customButton" !== (null === lB || void 0 === lB ? void 0 : lB.kind) || JB ? null : lB.id,
        oB = pB.length > 0,
        kB = (0, VB.useRef)(null);
      return (0, VB.useLayoutEffect)((() => {
        if (!oB) return () => {};
        const BB = kB.current,
          TB = BB.closest(".InGameUi"),
          dB = () => {
            TB.style.setProperty("--custom-buttons-top", `${BB.offsetTop}px`)
          };
        dB();
        const VB = new ResizeObserver(dB);
        return VB.observe(BB), VB.observe(BB.parentElement), () => {
          VB.disconnect(), TB.style.removeProperty("--custom-buttons-top")
        }
      }), [oB]), (0, gB.jsx)("div", {
        ref: kB,
        className: "" + ((0, AV.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: pB.map((BB => {
          var TB, dB;
          return (0, gB.jsx)(Sp, {
            button: BB,
            padGlyph: BB.id === YB && null !== (TB = null === (dB = (0, XB.i)()) || void 0 === dB ? void 0 : dB.getBoundButton("actionButton")) && void 0 !== TB ? TB : null
          }, BB.id)
        }))
      })
    }));

    function Sp(BB) {
      let {
        button: TB,
        padGlyph: dB
      } = BB;
      const yB = (0, VB.useRef)(null),
        pB = () => {
          null !== yB.current && (yB.current = null, LB.gameBridge.send("pressCustomButton", {
            id: TB.id,
            down: !1
          }))
        };
      (0, VB.useEffect)((() => pB), []);
      const lB = KT(pB, {
          pressesOnPointerDown: !0
        }),
        JB = BB => {
          yB.current === BB.pointerId && pB()
        };
      return (0, gB.jsxs)("div", {
        className: "CustomIcon",
        ...lB,
        onLostPointerCapture: JB,
        children: [(0, gB.jsx)(Fp.d, {
          icon: TB.icon,
          keyboardHint: (0, Kp.d)(TB.keycode),
          padGlyph: dB,
          onPointerDown: BB => {
            try {
              BB.currentTarget.setPointerCapture(BB.pointerId)
            } catch {
              return
            }
            null === yB.current && LB.gameBridge.send("pressCustomButton", {
              id: TB.id,
              down: !0
            }), yB.current = BB.pointerId
          },
          onPointerUp: JB,
          onPointerCancel: JB,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), TB.description && (0, gB.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: TB.description
        })]
      })
    }
    var Pp = dB(2131),
      Qp = dB(35561),
      Rp = dB(232);
    const ap = {
      frame: BB => {
        const TB = requestAnimationFrame((() => {
          BB()
        }));
        return () => {
          cancelAnimationFrame(TB)
        }
      },
      afterFrame: BB => {
        const TB = setTimeout(BB, 0);
        return () => {
          clearTimeout(TB)
        }
      }
    };
    class Zp {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rp.e,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ap;
        this.idle = BB, this.frames = TB, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (BB(), () => {}) : (TB ? this.waiting.unshift(BB) : this.waiting.push(BB), this.schedule(), () => {
          const TB = this.waiting.indexOf(BB);
          TB >= 0 && (this.waiting.splice(TB, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((BB => {
          for (this.cancelIdle = null; this.waiting.length > 0 && BB.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const BB = this.waiting.shift();
        try {
          BB()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var BB, TB, dB;
        null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null, null === (TB = this.cancelFrame) || void 0 === TB || TB.call(this), this.cancelFrame = null, null === (dB = this.cancelAfterFrame) || void 0 === dB || dB.call(this), this.cancelAfterFrame = null
      }
    }
    const Xp = (0, VB.createContext)(null);

    function Wp(BB) {
      let {
        children: TB,
        first: dB = !1
      } = BB;
      const yB = (0, VB.useContext)(Xp),
        [pB, lB] = (0, VB.useState)(null === yB);
      return (0, VB.useEffect)((() => {
        if (!pB && null !== yB) return yB.request((() => {
          lB(!0)
        }), dB)
      }), [dB, pB, yB]), pB ? (0, VB.createElement)(VB.Fragment, null, TB) : null
    }
    const hp = (0, VB.memo)((function(BB) {
        let {
          shown: TB
        } = BB;
        const [dB] = (0, VB.useState)((() => new DB.d(TB))), [yB] = (0, VB.useState)((() => TB ? null : new Zp));
        return (0, VB.useLayoutEffect)((() => {
          TB && (null === yB || void 0 === yB || yB.show(), dB.show())
        }), [TB, dB, yB]), (0, gB.jsx)(DB.c.Provider, {
          value: dB,
          children: (0, gB.jsx)(Xp.Provider, {
            value: yB,
            children: (0, gB.jsx)(Cp, {})
          })
        })
      })),
      Cp = (0, VB.memo)((function() {
        const {
          isUiHidden: BB,
          isUiHiddenByCamera: TB,
          isTouchScreen: dB
        } = (0, sB.m)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), yB = (0, KV.b)(), lB = wp(), JB = (0, DB.f)(), YB = (0, VB.useRef)(null), oB = (0, mB.j)("showKillfeed");
        return function() {
            const BB = (0, DB.f)();
            (0, VB.useEffect)((() => BB.whenShown(uB)), [BB])
          }(),
          function() {
            const BB = (0, mB.j)("inventoryColourOverride");
            (0, VB.useEffect)((() => {
              if (!BB) return;
              const {
                panel: TB,
                slot: dB,
                slotSelected: VB,
                slotUnavailable: yB
              } = hB(BB), pB = document.documentElement.style;
              return pB.setProperty("--InventoryPanelColour", TB), pB.setProperty("--InventorySlotColour", dB), pB.setProperty("--InventorySlotSelectedColour", VB), pB.setProperty("--InventorySlotUnavailableColour", yB), () => {
                pB.removeProperty("--InventoryPanelColour"), pB.removeProperty("--InventorySlotColour"), pB.removeProperty("--InventorySlotSelectedColour"), pB.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [BB])
          }(), (0, VB.useLayoutEffect)((() => JB.whenShown((() => {
            var BB;
            null === (BB = YB.current) || void 0 === BB || BB.classList.remove("PreMounted")
          }))), [JB]), (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsxs)("div", {
              ref: YB,
              className: pB()("InGameUi", {
                PreMounted: !JB.shown,
                Hidden: BB,
                HiddenByCamera: TB
              }),
              ...lB,
              children: [(0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(Fd.d, {}), (0, gB.jsx)(Sd, {})]
              }), (0, gB.jsx)(DB.e, {
                children: (0, gB.jsx)(Pd, {})
              }), (0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(yy, {}), (0, gB.jsx)(ky, {}), dB && (0, gB.jsx)(Oy, {})]
              }), (0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(yd, {}), (0, gB.jsx)(Ad.c, {}), (0, gB.jsx)(VV, {})]
              }), (0, gB.jsx)(DB.e, {
                children: (0, gB.jsx)(Ud, {})
              }), (0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(Yy.b, {}), (0, gB.jsx)(sp, {})]
              }), (0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(uy.f, {}), (0, gB.jsx)(Hy.h, {})]
              }), (0, gB.jsx)(Wp, {
                children: (0, gB.jsx)(ld.l, {})
              }), (0, gB.jsx)(Wp, {
                children: (0, gB.jsx)(np, {
                  showChat: yB
                })
              }), (0, gB.jsxs)(Wp, {
                children: [(0, gB.jsx)(vy, {}), (0, gB.jsx)(Jy, {})]
              }), (0, gB.jsxs)("div", {
                className: pB()("RightElements", {
                  RightElementsTouchscreen: dB
                }),
                "data-camera-keeper-host": "",
                children: [(0, gB.jsxs)("div", {
                  className: oV.g,
                  "data-holds-camera-keeper": "",
                  children: [(0, gB.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, gB.jsx)(Wp, {
                      children: (0, gB.jsx)(GV.d, {})
                    }), (0, gB.jsxs)(Wp, {
                      children: [(0, gB.jsx)(RB, {}), (0, gB.jsx)(kV.b, {})]
                    }), AV.featureFlags.useSocialFeatures && (0, gB.jsx)(DB.e, {
                      children: (0, gB.jsx)(LV.e, {
                        placement: "inGame"
                      })
                    }), AV.featureFlags.useSocialFeatures && (0, gB.jsx)(DB.e, {
                      children: (0, gB.jsx)(MV, {})
                    }), oB && (0, gB.jsx)(DB.e, {
                      children: (0, gB.jsx)(jd, {})
                    }), (0, gB.jsx)(Wp, {
                      children: (0, gB.jsx)(Up.c, {})
                    })]
                  }), AV.featureFlags.useSocialFeatures && (0, gB.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, gB.jsx)(Wp, {
                      children: (0, gB.jsx)(dy.b, {})
                    })
                  })]
                }), (0, gB.jsxs)(Wp, {
                  children: [(0, gB.jsx)(ld.c, {
                    placement: "topRight"
                  }), (0, gB.jsx)(ep, {})]
                })]
              }), (0, gB.jsx)("div", {
                className: "LeftCentre",
                children: (0, gB.jsx)(Wp, {
                  children: (0, gB.jsx)(cp, {})
                })
              }), (0, gB.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": dB ? "" : void 0,
                children: [(0, gB.jsx)(DB.e, {
                  children: (0, gB.jsx)(KB, {})
                }), (0, gB.jsx)(Wp, {
                  children: (0, gB.jsx)(qp, {})
                }), (0, gB.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": dB ? "" : void 0,
                  children: [(0, gB.jsx)("div", {
                    className: pB()("BottomLeftElements", {
                      Touch: dB
                    }),
                    children: (0, gB.jsxs)(Wp, {
                      children: [(0, gB.jsx)(UV, {}), !dB && (0, gB.jsx)(Pp.d, {})]
                    })
                  }), (0, gB.jsx)(Wp, {
                    children: (0, gB.jsx)(bp, {})
                  }), (0, gB.jsx)(Wp, {
                    children: (0, gB.jsx)(pV, {
                      isTouchScreen: dB
                    })
                  })]
                })]
              }), (0, gB.jsx)("div", {
                className: "MiddleLeft"
              }), dB && (0, gB.jsx)(Wp, {
                children: (0, gB.jsx)(aT, {})
              }), (0, gB.jsx)("div", {
                className: "CameraFadeHost",
                ref: Qp.f
              })]
            }), (0, gB.jsx)(DB.e, {
              children: (0, gB.jsx)(My.e, {})
            }), (0, gB.jsx)(Wp, {
              first: !0,
              children: (0, gB.jsx)(FV.b, {})
            }), (0, gB.jsx)(DB.e, {
              children: (0, gB.jsx)(Gp, {})
            })]
          })
      }));

    function Gp() {
      return (0, VB.useEffect)((() => {
        const BB = setTimeout((() => {
          (0, iB.g)()
        }), 0);
        return () => {
          clearTimeout(BB), iB.h.jH(!1)
        }
      }), []), null
    }
    const qp = (0, VB.memo)((function() {
        const BB = (0, JB.f)("aimingOverlay", "none");
        (0, EB.e)();
        const TB = (0, mB.l)("middleTextUpper"),
          dB = (0, mB.l)("middleTextLower");
        return (0, gB.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, gB.jsx)(Ap, {
            text: TB,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: xp
          }), (0, gB.jsx)(Ap, {
            text: dB,
            className: "MiddleText",
            maxHeightFraction: jp
          })]
        })
      })),
      xp = .3,
      jp = .2;

    function Ap(BB) {
      let {
        text: TB,
        className: dB,
        maxHeightFraction: yB
      } = BB;
      const pB = (0, VB.useRef)(null),
        lB = (0, VB.useRef)(null);
      return function(BB, TB, dB, yB) {
        (0, VB.useLayoutEffect)((() => {
          const VB = BB.current,
            yB = TB.current;
          if (!VB || !yB) return;
          let pB = -1,
            lB = -1;
          const JB = BB => (yB.style.setProperty("zoom", String(BB)), VB.getBoundingClientRect().height),
            YB = () => {
              const BB = document.documentElement.clientHeight * dB;
              let TB = 1;
              if (JB(1) > BB) {
                let dB = .5,
                  VB = 1;
                for (let TB = 0; TB < 6; TB++) {
                  const TB = (dB + VB) / 2;
                  JB(TB) <= BB ? dB = TB : VB = TB
                }
                TB = dB
              }
              lB = JB(TB), pB = VB.getBoundingClientRect().width
            };
          YB();
          let gB = 0;
          const oB = () => {
              cancelAnimationFrame(gB), gB = requestAnimationFrame(YB)
            },
            kB = new ResizeObserver((() => {
              const {
                width: BB,
                height: TB
              } = VB.getBoundingClientRect();
              BB === pB && TB === lB || oB()
            }));
          return kB.observe(VB), window.addEventListener("resize", oB), () => {
            kB.disconnect(), window.removeEventListener("resize", oB), cancelAnimationFrame(gB), yB.style.removeProperty("zoom")
          }
        }), [BB, TB, dB, yB])
      }(pB, lB, yB, TB.content), (0, gB.jsx)("div", {
        ref: pB,
        className: "MiddleTextFit",
        children: (0, gB.jsx)(Ey, {
          ref: lB,
          text: TB,
          className: dB
        })
      })
    }
    const bp = (0, VB.memo)((function() {
        const BB = (0, JB.f)("aimingOverlay", "none");
        (0, EB.e)();
        const TB = (0, mB.j)("useInventory");
        return (0, gB.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, gB.jsx)(oB, {}), (0, gB.jsx)(ld.c, {}), (0, gB.jsx)(Jd, {}), (0, gB.jsx)(DB.e, {
            children: (0, gB.jsx)(By, {})
          }), (0, gB.jsxs)("div", {
            className: "HotBarRow",
            children: [TB ? (0, gB.jsx)(ZB.d, {}) : (0, gB.jsx)(ZB.f, {}), (0, gB.jsx)(WB, {})]
          })]
        })
      })),
      np = (0, VB.memo)((function(BB) {
        let {
          showChat: TB
        } = BB;
        const {
          t: dB
        } = (0, FB.z)(), {
          clientEscMenuOptions: yB,
          isTouchScreen: lB
        } = (0, sB.m)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, EB.e)();
        const {
          userContext: JB,
          isUserContextUpdating: YB
        } = (0, HB.b)(), oB = (0, mB.j)("hideCoordinates"), LB = (0, mB.j)("customVariationTitle"), {
          requestedGameNameWithVariation: OB,
          gameNameWithVariation: DB,
          lobbyName: uB,
          shownLobbyName: iB
        } = (0, fB.i)("connectedGame"), NB = (0, kB.d)(OB, uB, !1), [tB, MB] = (0, VB.useState)(null), zB = (0, xV.k)(DB || OB || ""), wB = LB || zB || "";
        (0, VB.useEffect)((() => {
          YB || DV.c.getFavouriteLobbies(JB).then((BB => {
            console.log("Got favourite lobbies", BB), MB(BB)
          }))
        }), [YB, JB]);
        const UB = (0, VB.useRef)(null);
        return (0, VB.useLayoutEffect)((() => {
            const BB = UB.current,
              TB = document.documentElement,
              dB = new ResizeObserver((() => {
                TB.style.setProperty("--InGameHeaderRowsHeight", `${BB.offsetHeight}px`)
              }));
            return dB.observe(BB), () => {
              dB.disconnect(), TB.style.removeProperty("--InGameHeaderRowsHeight")
            }
          }), []),
          function(BB) {
            const {
              isTouchScreen: TB
            } = (0, sB.m)(["isTouchScreen"]);
            (0, VB.useLayoutEffect)((() => {
              if (!TB) return;
              const dB = BB.current,
                VB = document.querySelector(`.${oV.g}`),
                yB = BB => {
                  const TB = () => {
                    const TB = `${Math.floor(BB.getBoundingClientRect().left-dB.getBoundingClientRect().left-4)}px`;
                    dB.style.getPropertyValue("--InGameHeaderMaxWidth") !== TB && dB.style.setProperty("--InGameHeaderMaxWidth", TB)
                  };
                  TB();
                  const yB = new ResizeObserver(TB);
                  yB.observe(BB), yB.observe(VB), window.addEventListener("resize", TB);
                  const pB = new MutationObserver(TB);
                  return pB.observe(document.documentElement, {
                    attributes: !0,
                    attributeFilter: ["style"]
                  }), () => {
                    yB.disconnect(), pB.disconnect(), window.removeEventListener("resize", TB)
                  }
                },
                pB = () => VB.querySelector(".TopRightIconsContainer"),
                lB = pB();
              let JB;
              if (lB) JB = yB(lB);
              else {
                const BB = new MutationObserver((() => {
                  const TB = pB();
                  TB && (BB.disconnect(), JB = yB(TB))
                }));
                BB.observe(VB, {
                  childList: !0,
                  subtree: !0
                }), JB = () => {
                  BB.disconnect()
                }
              }
              return () => {
                JB(), dB.style.removeProperty("--InGameHeaderMaxWidth")
              }
            }), [TB, BB])
          }(UB), (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsxs)("div", {
              className: pB()(oV.f, {
                Touchscreen: lB
              }),
              ref: UB,
              children: [(0, gB.jsxs)("div", {
                className: "InGameHeader",
                children: [(0, gB.jsxs)("div", {
                  className: "InGameHeaderLogo",
                  onMouseDown: BB => {
                    BB.stopPropagation(), BB.preventDefault()
                  },
                  onClick: () => {
                    sB.d.set({
                      openEverythingMenuName: vB.m.SETTINGS
                    })
                  },
                  children: [(0, gB.jsx)(qV.b, {
                    showFace: !0,
                    loading: !1
                  }), "bloxd.io"]
                }), (0, gB.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, gB.jsxs)("div", {
                  className: "InGameHeaderGameName",
                  children: [null === NB && (0, gB.jsx)(qV.b, {}), null !== NB && (0, gB.jsxs)(gB.Fragment, {
                    children: [NB, wB && ` ${wB}`]
                  })]
                }), (0, gB.jsx)("div", {
                  className: "InGameHeaderSpacer"
                }), (0, gB.jsx)("div", {
                  className: "InGameHeaderLobbyName",
                  children: iB
                }), (0, jV.L)(uB) && (0, gB.jsx)(PB.h, {
                  tooltipInner: (0, gB.jsx)("div", {
                    children: dB(null !== tB && tB.includes(uB) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                  }),
                  children: (0, gB.jsx)("div", {
                    children: (0, gB.jsx)(Od.t, {
                      isLiked: null !== tB && tB.includes(uB),
                      onClick: () => {
                        try {
                          if (!tB) return;
                          tB.includes(uB) ? (DV.c.unfavouriteLobby(JB, uB).catch((BB => {
                            console.error("Failed to favourite lobby", BB)
                          })), MB(tB.filter((BB => BB !== uB)))) : (DV.c.favouriteLobby(JB, uB).catch((BB => {
                            console.error("Failed to favourite lobby", BB)
                          })), MB([...tB, uB]))
                        } catch (BB) {
                          console.error("Failed to like lobby", BB)
                        }
                      },
                      isLoading: null === tB
                    })
                  })
                }), (0, gB.jsx)(ty, {})]
              }), (0, gB.jsx)(ZV, {
                show: yB.showFPS
              }), !oB && yB.showCoordinates && (0, gB.jsx)(hV, {}), !oB && yB.showChunkCoordinates && (0, gB.jsx)(CV, {}), (0, gB.jsx)(my, {})]
            }), (0, gB.jsx)("div", {
              className: "TopLeftElements",
              "data-holds-camera-keeper": "",
              children: (0, gB.jsx)("div", {
                className: "InGameHeaderAndChat",
                "data-holds-camera-keeper": "",
                children: TB && (0, gB.jsx)(qB.c, {})
              })
            })]
          })
      })),
      ep = (0, VB.memo)((function() {
        (0, EB.e)();
        const BB = (0, mB.l)("RightInfoText"),
          [TB, dB] = (0, VB.useState)(null);
        return (0, DT.k)(TB, ".RightElements"), BB.hasText ? (0, gB.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, gB.jsx)(Ey, {
            ref: dB,
            text: BB,
            className: "RightInfoDiv",
            children: (0, gB.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, gB.jsx)(YB.e, {
                text: BB.content
              })
            })
          })
        }) : null
      }))
  },
  4232: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => JB
    });
    var VB = dB(62),
      yB = dB(270),
      pB = dB(1666),
      lB = dB(980);

    function JB(BB) {
      let {
        text: TB
      } = BB;
      const dB = [];
      let JB = "";
      return (0, yB.hc)(TB).forEach(((BB, TB) => {
        if ("string" === typeof BB || !(0, pB.d)(BB.icon)) return void(JB += "string" === typeof BB ? BB : BB.icon);
        const yB = Math.max(0, JB.trimEnd().search(/\S{1,12}$/));
        dB.push((0, lB.jsxs)(VB.Fragment, {
          children: [JB.slice(0, yB), (0, lB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [JB.slice(yB), (0, lB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, lB.jsx)(pB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, TB)), JB = ""
      })), dB.push(JB), (0, lB.jsx)(lB.Fragment, {
        children: dB
      })
    }
  },
  35530: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB,
      g: () => oB,
      k: () => kB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1666),
      JB = dB(980);
    const YB = 350;
    let gB = 0;

    function oB() {
      return gB += 1, gB
    }

    function kB(BB, TB) {
      let dB = 0;
      for (const VB of BB) "ingredient" !== VB.kind && VB.jg === TB && (dB += VB.amount);
      return dB > 0 ? {
        idx: TB,
        amount: dB
      } : null
    }

    function LB(BB) {
      var TB, dB;
      let {
        anim: yB,
        onComplete: gB
      } = BB;
      const oB = null !== (TB = yB.delayMs) && void 0 !== TB ? TB : 0,
        kB = null !== (dB = yB.durationMs) && void 0 !== dB ? dB : YB,
        [LB, OB] = (0, VB.useState)(yB.from),
        [DB, uB] = (0, VB.useState)(0 === oB),
        [HB, EB] = (0, VB.useState)(!1),
        vB = (0, VB.useRef)(!1);
      return (0, VB.useEffect)((() => {
        let BB, TB;
        const dB = () => {
            vB.current = !0, uB(!0), BB = requestAnimationFrame((() => {
              TB = requestAnimationFrame((() => {
                OB({
                  x: yB.to.x,
                  y: yB.to.y
                }), EB(!0)
              }))
            }))
          },
          VB = vB.current ? 0 : oB;
        let pB;
        VB > 0 ? pB = setTimeout(dB, VB) : dB();
        const lB = setTimeout((() => {
          gB(yB.id)
        }), VB + kB + 50);
        return () => {
          clearTimeout(pB), cancelAnimationFrame(BB), cancelAnimationFrame(TB), clearTimeout(lB)
        }
      }), [yB.id, yB.to.x, yB.to.y, gB, oB, kB]), (0, JB.jsx)("div", {
        className: pB()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === yB.kind,
          Waiting: !DB,
          Arrived: HB
        }),
        style: {
          left: LB.x,
          top: LB.y,
          "--fly-duration": `${kB}ms`
        },
        children: (0, JB.jsx)(lB.c, {
          itemName: yB.itemName,
          amount: yB.amount
        })
      })
    }
  },
  35510: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => rB,
      f: () => SB
    });
    var VB = dB(62),
      yB = dB(2488),
      pB = dB(5913),
      lB = dB(1808),
      JB = dB(2139),
      YB = dB(8171),
      gB = dB(279),
      oB = dB(24),
      kB = dB(1317),
      LB = dB(33),
      OB = dB(933),
      DB = dB.n(OB),
      uB = dB(270),
      HB = dB(35518),
      EB = dB(1657),
      vB = dB(1727),
      mB = dB(8016),
      iB = dB(980);

    function NB(BB) {
      var TB, dB;
      let {
        slotIdx: pB
      } = BB;
      const lB = (0, vB.g)("hotbar", (BB => {
          var TB;
          return null !== (TB = BB.items[pB]) && void 0 !== TB ? TB : null
        })),
        YB = (0, vB.g)("hotbar", (BB => BB.ammo)),
        [oB, kB] = (0, VB.useState)(!1),
        LB = (0, VB.useRef)(null),
        [OB, uB] = (0, VB.useState)(null),
        [HB, NB] = (0, VB.useState)(null),
        tB = (0, JB.j)("maxAuraLevel"),
        fB = (0, yB.b)(),
        sB = (0, VB.useCallback)((() => {
          if (clearTimeout(LB.current), lB) {
            var BB, TB, dB, VB;
            const YB = lB.displayName,
              oB = [],
              kB = Array.isArray(YB) ? YB : [YB],
              LB = {
                fontStyle: null !== (BB = lB.attributes.customAttributes) && void 0 !== BB && BB.author ? "italic" : "normal"
              };
            for (const BB of kB) BB.str ? oB.push(BB) : oB.push({
              str: BB,
              style: LB
            });
            if (null !== (TB = lB.attributes.customAttributes) && void 0 !== TB && TB.enchantments) {
              oB.push(" ");
              const BB = Object.entries(lB.attributes.customAttributes.enchantments).sort(((BB, TB) => TB[1] - BB[1])),
                TB = lB.attributes.customAttributes.enchantmentData;
              for (const [dB, VB] of BB) {
                var yB, pB;
                const BB = null !== (yB = null === TB || void 0 === TB || null === (pB = TB[dB]) || void 0 === pB ? void 0 : pB.icon) && void 0 !== yB ? yB : `${dB} Enchantment`;
                var JB;
                if (VB < 4)
                  for (let TB = 0; TB < VB; TB++) oB.push({
                    icon: BB,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else oB.push({
                  icon: BB,
                  style: {
                    fontSize: "1.5em"
                  }
                }), oB.push(null !== (JB = (0, gB.U)(VB)) && void 0 !== JB ? JB : VB.toString())
              }
            }
            uB(oB), NB(null !== (dB = null === (VB = lB.attributes.customAttributes) || void 0 === VB ? void 0 : VB.enchantmentTier) && void 0 !== dB ? dB : null)
          } else uB(null), NB(null);
          kB(!0), fB();
          const YB = null === lB || void 0 === lB ? void 0 : lB.attributes.customAttributes;
          void 0 === (null === YB || void 0 === YB ? void 0 : YB.shotsLeft) && (LB.current = setTimeout((() => {
            kB(!1)
          }), 2e3))
        }), [null === lB || void 0 === lB ? void 0 : lB.name, pB, null === lB || void 0 === lB ? void 0 : lB.instance, null === lB || void 0 === lB ? void 0 : lB.displayName]);
      (0, VB.useEffect)((() => (sB(), () => {
        clearTimeout(LB.current), kB(!1)
      })), [null === lB || void 0 === lB ? void 0 : lB.name, pB, null === lB || void 0 === lB ? void 0 : lB.instance, sB]);
      const MB = null === lB || void 0 === lB || null === (TB = lB.attributes.customAttributes) || void 0 === TB ? void 0 : TB.shotsLeft,
        zB = void 0 === MB ? null : (0, iB.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${MB}|${lB.requiresAmmo?`${YB}x${lB.clipSize}`:lB.clipSize}`
        }),
        wB = (0, mB.j)();
      return (0, iB.jsx)(iB.Fragment, {
        children: oB && lB && !wB.showing ? (0, iB.jsxs)("div", {
          className: DB()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === tB,
            Enchanted: null !== HB
          }),
          style: {
            "--enchantmentColour": null !== (dB = gB.lb[HB]) && void 0 !== dB ? dB : gB.lb.None,
            "--duration": HB ? (0, gB.ib)(HB) + "s" : void 0
          },
          children: [HB && (0, iB.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, iB.jsx)(EB.e, {
              text: OB
            }), zB]
          }), (0, iB.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, iB.jsx)(EB.e, {
              text: OB
            }), zB]
          })]
        }) : null
      })
    }
    var tB = dB(35530),
      fB = dB(21),
      sB = dB(1679),
      MB = dB(572),
      zB = dB(2144),
      wB = dB(2876),
      UB = dB(2884);
    var FB = dB(1826);
    var KB = dB(1345);
    const rB = (0, VB.memo)((function() {
      const [BB, TB] = (0, VB.useState)(0), dB = (0, JB.j)("useFullInventory"), lB = (0, JB.j)("highlightedHotbarSlots"), {
        isTouchScreen: YB,
        openInGameMenuName: gB
      } = (0, fB.m)(["isTouchScreen", "openInGameMenuName"]), LB = null !== gB && "inventory" !== gB, OB = (0, vB.i)("fullInventory") && "inventory" === gB, uB = function() {
        const BB = (0, VB.useRef)(null);
        return (0, FB.e)(((TB, dB) => {
          var VB;
          const yB = dB >= TB;
          if ((null === (VB = BB.current) || void 0 === VB ? void 0 : VB.width) !== TB || BB.current.portrait !== yB) {
            const dB = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare"));
            BB.current = {
              width: TB,
              portrait: yB,
              atEnds: dB >= 0
            }
          }
          return BB.current.atEnds
        }))
      }(), EB = YB && !uB;
      ! function(BB, TB, dB) {
        (0, VB.useLayoutEffect)((() => {
          const VB = document.documentElement.classList;
          return BB && (VB.add("TouchHotbar"), VB.toggle("TouchHotbarKeysAbove", TB), VB.toggle("TouchHotbarHasBag", dB)), (0, wB.k)(), oB.h.yH(UB.e), () => {
            VB.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, wB.k)(), oB.h.yH(UB.e)
          }
        }), [BB, TB, dB])
      }(YB, EB, dB);
      const [mB, zB] = (0, pB.e)("changedHotbarUsingNumkeys", !0), KB = (0, vB.g)("hotbar", (BB => BB.selectedSlot)), rB = null !== KB && void 0 !== KB ? KB : BB, PB = (0, yB.b)(), QB = (0, VB.useRef)(null), aB = (0, kB.f)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, kB.e)("inventoryDraggedItemUpdated", (BB => {
        QB.current = BB, PB()
      })), (0, vB.c)("hotbarScrolled", (BB => {
        null === KB && XB(BB)
      })), (0, vB.c)("hotbarSlotRequested", (BB => {
        ZB(BB), zB(!1)
      })), (0, vB.c)("numberKeyPressed", (() => {
        zB(!1)
      })), (0, vB.c)("hotbarDropRequested", (BB => {
        const TB = sB.gameBridge.latest("hotbar").items[rB];
        if (TB) {
          var dB;
          const VB = BB && null !== (dB = TB.amount) && void 0 !== dB ? dB : 1;
          sB.gameBridge.send("removeInventoryItem", {
            slot: rB,
            amount: VB,
            drop: !0
          })
        }
      }));
      const ZB = BB => {
          sB.gameBridge.send("selectHotbarSlot", BB), TB(BB)
        },
        XB = BB => {
          ZB((rB + BB + MB.n) % MB.n)
        };
      let WB, hB = null,
        CB = null,
        GB = BB => BB => {},
        qB = BB => TB => {
          ZB(BB)
        },
        xB = BB => BB => {},
        jB = [];
      if (OB) {
        var AB;
        const BB = QB.current;
        if (null === BB || void 0 === BB || !BB.setHovered) return (0, iB.jsx)("div", {
          className: DB()("HotBarContainer", {
            Touch: YB,
            KeysAbove: EB
          }),
          children: (0, iB.jsx)("div", {
            className: "HotBar"
          })
        });
        hB = BB.draggedInfo, CB = BB.specialItemInfo, GB = BB.setHovered, qB = BB.pointerDown, xB = BB.pointerUp, WB = BB.variation, jB = null !== (AB = BB.craftFlyAnims) && void 0 !== AB ? AB : []
      }
      return (0, iB.jsxs)("div", {
        className: DB()("HotBarContainer", {
          Touch: YB,
          PopupOpen: YB && LB,
          KeysAbove: EB
        }),
        children: [(0, iB.jsxs)("div", {
          className: DB()("HotBar", {
            HoverDisabled: aB
          }),
          children: [YB && (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)(cB, {
              useFullInventory: dB,
              inventoryOpen: OB
            }), (0, iB.jsx)(IB, {
              direction: "Previous",
              onPress: () => {
                XB(-1)
              }
            })]
          }), !YB && (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)(SB, {}), (0, iB.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, iB.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((BB, TB) => (0, iB.jsx)(HB.d, {
              idx: TB,
              draggedInfo: hB,
              specialItemInfo: CB,
              craftFlyHoldbackInfo: (0, tB.k)(jB, TB),
              setHovered: GB(TB),
              pointerDown: qB(TB),
              pointerUp: xB(TB),
              variation: WB,
              isSelected: TB === rB,
              hotbarHighlighted: !0 === (null === lB || void 0 === lB ? void 0 : lB.includes(TB)),
              hoverDisabled: aB,
              showNumber: mB && !YB
            }, TB)))
          }), YB && (0, iB.jsx)(IB, {
            direction: "Next",
            onPress: () => {
              XB(1)
            }
          }), !YB && (0, iB.jsxs)(iB.Fragment, {
            children: [(0, iB.jsx)("div", {
              className: "HotBarFiller"
            }), (0, iB.jsx)("div", {
              className: DB()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !dB
              }),
              onPointerDown: () => {
                oB.h.yH("toggleMenu", "inventory")
              },
              children: (0, iB.jsx)(RB, {})
            })]
          })]
        }), (0, iB.jsx)(NB, {
          slotIdx: rB
        })]
      })
    }));

    function IB(BB) {
      let {
        direction: TB,
        onPress: dB
      } = BB;
      return (0, iB.jsx)("div", {
        className: DB()("HotBarArrow", TB),
        ...KB.e,
        children: (0, iB.jsx)(lB.d, {
          icon: "Previous" === TB ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: dB
        })
      })
    }
    const cB = (0, VB.memo)((function(BB) {
        let {
          useFullInventory: TB,
          inventoryOpen: dB
        } = BB;
        const yB = (0, JB.j)("maxAuraLevel"),
          pB = (0, VB.useRef)(null);
        return function(BB, TB, dB) {
          (0, VB.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", TB), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [TB]), (0, VB.useLayoutEffect)((() => {
            const TB = BB.current.closest(".BottomMiddleElements");
            return TB.classList.toggle("TouchInventoryOpen", dB), () => {
              TB.classList.remove("TouchInventoryOpen")
            }
          }), [BB, dB])
        }(pB, (0, YB.b)(), dB), (0, iB.jsxs)("div", {
          ref: pB,
          className: DB()("TouchInventoryKeys", {
            NoAuraBar: 0 === yB,
            InventoryOpen: dB
          }),
          children: [(0, iB.jsx)(SB, {
            touchKey: !0
          }), (0, iB.jsx)("div", {
            className: DB()("TouchInventoryKey BagKey", {
              Hidden: !TB
            }),
            ...KB.e,
            children: (0, iB.jsx)(RB, {
              touchKey: !0
            })
          })]
        })
      })),
      SB = (0, VB.memo)((function(BB) {
        let {
          touchKey: TB = !1
        } = BB;
        const dB = (0, YB.b)();
        return (0, iB.jsx)("div", {
          className: TB ? DB()("TouchInventoryKey ShopKey", {
            Hidden: !dB
          }) : DB()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !dB
          }),
          ...TB ? KB.e : {},
          children: (0, iB.jsx)(lB.d, {
            icon: (0, gB.ic)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            onClick: () => {
              dB && fB.d.set({
                openEverythingMenuName: uB.m.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function PB(BB) {
      let {
        player: TB
      } = BB;
      return TB.some((BB => null !== BB && gB.Sc.includes(BB.name)))
    }

    function QB(BB) {
      BB.creative || LB.j.getItem("LogInInventoryRedDotTutorialComplete") || (PB(BB) ? (oB.h.yH("RedDotOpenInventoryIcon", !0), oB.h.yH("TouchTutorialOpenInventoryIcon", !0)) : (oB.h.yH("RedDotOpenInventoryIcon", !1), oB.h.yH("TouchTutorialOpenInventoryIcon", !1)))
    }
    const RB = (0, VB.memo)((function(BB) {
      let {
        touchKey: TB = !1
      } = BB;
      const {
        backpackPointerRequested: dB
      } = (0, fB.m)(["backpackPointerRequested"]);
      (0, VB.useEffect)((() => {
        QB(sB.gameBridge.latest("inventory"))
      }), []), (0, vB.c)("inventory", QB);
      const yB = (0, zB.f)();
      return (0, kB.e)("toggleMenu", (BB => {
        yB.shown && (null !== BB && void 0 !== BB && BB.startsWith("inventory") && PB(sB.gameBridge.latest("inventory")) ? (LB.j.setItem("LogInInventoryRedDotTutorialComplete", !0), oB.h.yH("RedDotOpenInventoryIcon", !1), oB.h.yH("TouchTutorialOpenInventoryIcon", !1)) : "shop" === BB && oB.h.yH("showShopTouchTutorial", !1))
      })), TB ? (0, iB.jsx)(lB.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        onClick: () => {
          oB.h.yH("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: dB,
        touchIconPosition: "topleft"
      }) : (0, iB.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          oB.h.yH("toggleMenu", "inventory")
        },
        children: (0, iB.jsx)(lB.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: BB => {
            oB.h.yH("toggleMenu", "inventory"), BB.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: dB,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35518: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => HB,
      e: () => DB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1675),
      JB = dB(1666),
      YB = dB(1679),
      gB = dB(1727),
      oB = dB(35521),
      kB = dB(8591),
      LB = dB(1275),
      OB = dB(980);
    const DB = (BB, TB, dB) => {
      let VB = TB,
        yB = !1;
      for (const pB of dB)(null === pB || void 0 === pB ? void 0 : pB.idx) === BB && (yB = !0, VB > 0 && (VB -= pB.amount));
      return {
        displayedAmt: VB,
        shown: !yB || VB > 0
      }
    };
    const uB = BB => {
        let {
          idx: TB
        } = BB;
        return (0, LB.r)() ? null : (0, OB.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: TB < 9 ? TB + 1 : 0
        })
      },
      HB = (0, VB.memo)((function(BB) {
        var TB, dB, VB;
        let {
          idx: yB,
          setHovered: LB,
          pointerDown: HB,
          pointerUp: EB,
          draggedInfo: vB,
          specialItemInfo: mB,
          craftFlyHoldbackInfo: iB,
          defaultIconB64: NB = null,
          variation: tB,
          isSelected: fB = !1,
          hotbarHighlighted: sB = !1,
          hoverDisabled: MB = !1,
          showNumber: zB = !1,
          showNewDot: wB = !1
        } = BB;
        const UB = (0, gB.g)("inventory", (BB => yB === oB.f ? null : (0, kB.k)(BB, yB)));
        let FB, KB, rB, IB;
        if (yB === oB.f) mB && (FB = mB.name, rB = mB.amount, IB = mB.attributes);
        else if (UB) {
          var cB;
          FB = UB.name, KB = UB.icon, rB = null !== (cB = UB.amount) && void 0 !== cB ? cB : 0, IB = UB.attributes
        }
        const SB = null === (TB = IB) || void 0 === TB || null === (dB = TB.customAttributes) || void 0 === dB ? void 0 : dB.enchantmentTier,
          PB = (0, lB.k)(IB),
          {
            displayedAmt: QB,
            shown: RB
          } = DB(yB, rB, [vB, mB, iB]),
          aB = FB && RB,
          ZB = void 0 !== tB && function(BB, TB) {
            const {
              enchantable: dB,
              salvageable: VB
            } = YB.gameBridge.latest("stationItems");
            return "Enchanting Table" === BB ? !0 === dB[TB] : "Salvaging Table" === BB && !0 === VB[TB]
          }(tB, FB);
        return (0, OB.jsxs)("div", {
          className: pB()("InvenItem", {
            Highlighted: aB && ZB,
            Selected: fB,
            HotbarHighlighted: sB,
            HoverDisabled: MB
          }),
          onPointerEnter: () => {
            null === LB || void 0 === LB || LB(!0)
          },
          onPointerLeave: () => {
            null === LB || void 0 === LB || LB(!1)
          },
          onPointerDown: HB,
          onPointerUp: EB,
          "data-inven-idx": yB,
          children: [aB && (0, OB.jsx)(JB.c, {
            itemName: null !== (VB = KB) && void 0 !== VB ? VB : FB,
            amount: QB,
            enchantmentTier: SB,
            bar: PB
          }), aB && wB && (0, OB.jsx)("div", {
            className: "InvenItemNewDot"
          }), zB && (0, OB.jsx)(uB, {
            idx: yB
          }), NB && !aB && (0, OB.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${NB})`
            }
          })]
        })
      }))
  },
  8578: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(279),
      yB = dB(8584);

    function pB(BB, TB, dB) {
      const pB = Object.entries(TB).sort(((BB, TB) => TB[1] - BB[1])),
        lB = (0, VB.qb)(BB);
      lB.push(BB ? "\n\n" : "\n");
      for (const [yB, DB] of pB) {
        var JB, YB, gB;
        const BB = null !== (JB = null === dB || void 0 === dB || null === (YB = dB[yB]) || void 0 === YB ? void 0 : YB.icon) && void 0 !== JB ? JB : `${yB} Enchantment`;
        lB.push({
          icon: BB,
          style: {
            fontSize: "1.5rem"
          }
        }), lB.push({
          str: `${yB} ${null!==(gB=(0,VB.U)(DB))&&void 0!==gB?gB:DB}\n`
        })
      }
      lB.push({
        str: "\n"
      });
      for (const [VB, DB] of pB) {
        var oB, kB, LB, OB;
        const BB = null !== (oB = null === dB || void 0 === dB || null === (kB = dB[VB]) || void 0 === kB ? void 0 : kB.icon) && void 0 !== oB ? oB : `${VB} Enchantment`,
          TB = null !== (LB = null === dB || void 0 === dB || null === (OB = dB[VB]) || void 0 === OB ? void 0 : OB.description) && void 0 !== LB ? LB : (0, yB.g)(VB);
        lB.push({
          icon: BB,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), lB.push({
          str: TB,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), lB.push({
          str: "\n"
        })
      }
      return lB
    }
  },
  35521: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB,
      f: () => yB
    });
    const VB = -1,
      yB = -2
  },
  8591: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      g: () => vB,
      j: () => HB,
      k: () => YB,
      m: () => EB,
      p: () => oB,
      r: () => LB,
      t: () => uB,
      v: () => kB
    });
    var VB = dB(270),
      yB = dB(572),
      pB = dB(279),
      lB = dB(3706),
      JB = dB(8578);

    function YB(BB, TB) {
      var dB;
      let {
        player: VB,
        chestOrCreative: yB
      } = BB;
      var pB;
      return TB < VB.length ? null !== (pB = VB[TB]) && void 0 !== pB ? pB : null : null !== (dB = yB[TB - VB.length]) && void 0 !== dB ? dB : null
    }

    function gB(BB) {
      var TB;
      return null !== (TB = BB.amount) && void 0 !== TB ? TB : 0
    }

    function oB(BB) {
      return 0 === BB.button || void 0 === BB.button
    }

    function kB(BB) {
      return !!BB.shiftKey
    }

    function LB(BB) {
      return "touches" in BB || "touch" === BB.pointerType || "pen" === BB.pointerType
    }
    const OB = new Set,
      DB = 50;

    function uB(BB, TB) {
      var dB;
      const VB = null === (dB = BB[TB]) || void 0 === dB ? void 0 : dB.displayName;
      return (0, yB.M)(VB) ? "string" !== typeof TB ? "" : (!OB.has(TB) && OB.size < DB && (OB.add(TB), console.warn(`No item called "${TB}", so its hover shows the name as given`)), TB) : VB
    }

    function HB(BB, TB, dB) {
      var YB, gB, oB, kB, LB, OB, DB, HB, EB, vB, mB, iB, NB, tB;
      const fB = BB.attributes,
        sB = null !== (YB = null === (gB = TB[BB.name]) || void 0 === gB ? void 0 : gB.rootName) && void 0 !== YB ? YB : BB.name,
        MB = null !== (oB = null !== (kB = fB.customDisplayName) && void 0 !== kB ? kB : null === (LB = TB[BB.name]) || void 0 === LB ? void 0 : LB.displayName) && void 0 !== oB ? oB : uB(TB, sB);
      let zB = MB;
      const wB = null === (OB = fB.customAttributes) || void 0 === OB ? void 0 : OB.enchantmentTier;
      wB && (zB = (0, pB.qb)(MB, {
        colour: pB.lb[wB]
      }));
      const UB = null !== (DB = null !== (HB = null !== (EB = function(BB, TB) {
        var dB;
        if (void 0 === BB || null !== (dB = TB.customAttributes) && void 0 !== dB && dB.author) return BB;
        const yB = (0, VB.hc)(BB);
        return yB.every((BB => "string" === typeof BB)) ? BB : yB.map((BB => "string" === typeof BB ? BB : {
          icon: BB.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(fB.customDescription, fB)) && void 0 !== EB ? EB : null === (vB = TB[BB.name]) || void 0 === vB ? void 0 : vB.description) && void 0 !== HB ? HB : null === (mB = TB[sB]) || void 0 === mB ? void 0 : mB.description) && void 0 !== DB ? DB : "";
      let FB = UB;
      if (null !== (iB = fB.customAttributes) && void 0 !== iB && iB.enchantments) FB = (0, JB.b)(UB, fB.customAttributes.enchantments, fB.customAttributes.enchantmentData);
      else if (dB[sB]) FB = (0, pB.qb)(UB), FB.push({
        str: "\n"
      }), FB.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (NB = fB.customAttributes) && void 0 !== NB && NB.mobSettings) {
        var KB, rB;
        const BB = fB.customAttributes.mobSettings;
        var IB, cB;
        if (FB = [], (0, yB.M)(fB.customAttributes.health) || (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: fB.customAttributes.health.toString()
          }), (0, yB.M)(BB.maxHealth) || (FB.push({
            str: "/"
          }), FB.push({
            str: BB.maxHealth.toString()
          }))), !(0, yB.M)(BB.attackDamage) && BB.attackDamage > 0 && (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.attackDamage.toString()
          })), !(0, yB.M)(BB.secondaryAttackDamage) && BB.secondaryAttackDamage > 0 && (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.secondaryAttackDamage.toString()
          })), (0, yB.M)(BB.baseRunningSpeed) || (FB.push({
            str: "\n"
          }), FB.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: " "
          }), FB.push({
            str: BB.baseRunningSpeed.toFixed(2)
          })), "Saddled" === BB.metaInfo) FB.push({
          str: "\n"
        }), FB.push({
          str: {
            translationKey: "general:has"
          }
        }), FB.push({
          str: " "
        }), FB.push({
          icon: null !== (IB = null === (cB = BB.tameInfo) || void 0 === cB ? void 0 : cB.saddleItemName) && void 0 !== IB ? IB : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (FB.push({
            str: "\n"
          }), FB.push({
            str: "\n"
          }), BB.petInfo && null !== (KB = BB.tameInfo) && void 0 !== KB && KB.supportsFriendship) {
          const TB = lB.e.getIconsFromFriendshipPoints(BB.petInfo.friendshipPoints);
          for (const BB of TB) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: "\n"
          });
          const dB = lB.e.getMobHungerLevel(BB.petInfo.lastFedAt);
          for (const BB of lB.e.hungerLevelIcons[dB]) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: " "
          }), FB.push({
            str: lB.e.hungerLevelTranslations[dB],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (BB.tameInfo && null !== (rB = BB.tameInfo) && void 0 !== rB && rB.supportsFriendship) {
          var SB, PB;
          let TB = null !== (SB = BB.tameInfo.likedFoods) && void 0 !== SB ? SB : [];
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Superliked]
            }
          }), FB.push({
            str: " "
          }), null !== (PB = BB.petInfo) && void 0 !== PB && PB.superlikedFoodKnown ? (FB.push({
            icon: BB.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), TB = TB.filter((TB => TB !== BB.petInfo.superlikedFood))) : FB.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Liked]
            }
          }), FB.push({
            str: " "
          });
          for (const BB of TB) FB.push({
            icon: BB,
            style: {
              fontSize: "1.5em"
            }
          });
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Neutral]
            }
          }), FB.push({
            str: " "
          });
          for (const dB of null !== (QB = BB.tameInfo.neutralFoods) && void 0 !== QB ? QB : []) {
            var QB;
            FB.push({
              icon: dB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          FB.push({
            str: "\n"
          }), FB.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: lB.e.feedTextColours[lB.e.MobFoodType.Disliked]
            }
          }), FB.push({
            str: " "
          });
          for (const dB of null !== (RB = BB.tameInfo.dislikedFoods) && void 0 !== RB ? RB : []) {
            var RB;
            FB.push({
              icon: dB,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        FB.length > 0 ? (FB.shift(), FB.unshift(...(0, pB.qb)(UB))) : FB = (0, pB.qb)(UB)
      }
      return {
        name: zB,
        desc: FB,
        fontStyle: null !== (tB = fB.customAttributes) && void 0 !== tB && tB.author ? "italic" : "normal"
      }
    }

    function EB(BB, TB, dB, VB) {
      const yB = YB(BB, dB),
        pB = YB(BB, VB);
      if (!yB) return !1;
      const lB = TB[yB.name].armourReduction,
        JB = TB[pB.name].armourReduction;
      if (JB === lB) {
        var gB, oB, kB, LB;
        const BB = null !== (gB = null === (oB = yB.attributes.customAttributes) || void 0 === oB ? void 0 : oB.enchantmentTier) && void 0 !== gB ? gB : "Tier 0",
          TB = null !== (kB = null === (LB = pB.attributes.customAttributes) || void 0 === LB ? void 0 : LB.enchantmentTier) && void 0 !== kB ? kB : "Tier 0";
        return parseInt(BB.replace("Tier ", "")) >= parseInt(TB.replace("Tier ", ""))
      }
      return lB > JB
    }

    function vB(BB) {
      let TB;
      if ("number" === typeof BB) {
        const dB = document.querySelector(`[data-inven-idx="${BB}"]`);
        if (!dB) return null;
        TB = dB.getBoundingClientRect()
      } else TB = BB.getBoundingClientRect();
      return {
        x: TB.left + TB.width / 2,
        y: TB.top + TB.height / 2
      }
    }
  },
  8529: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => OB,
      f: () => DB,
      g: () => uB
    });
    var VB = dB(1324),
      yB = dB(62),
      pB = dB(1201),
      lB = dB(3942),
      JB = dB(2068),
      YB = dB(1078),
      gB = dB(95),
      oB = dB(1727),
      kB = dB(1225),
      LB = dB(980);

    function OB(BB) {
      let {
        show: TB,
        onClose: dB
      } = BB;
      const {
        requestedGameNameWithVariation: VB,
        lobbyName: yB,
        shownLobbyName: pB
      } = (0, oB.i)("connectedGame"), YB = (0, JB.d)(VB, yB, !1);
      return gB.featureFlags.canUseInviteLinks && (0, LB.jsx)(lB.b, {
        show: TB,
        close: dB,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, LB.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, LB.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, LB.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, LB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === YB ? (0, LB.jsx)(kB.b, {}) : YB, (0, LB.jsx)("br", {}), "Lobby Name: ", pB, (0, LB.jsx)("br", {}), (0, LB.jsx)("br", {}), (0, LB.jsx)("br", {}), (0, LB.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, LB.jsx)(DB, {})]
        })
      })
    }

    function DB() {
      var BB;
      const {
        t: TB
      } = (0, YB.z)(), dB = null !== (BB = uB(gB.featureFlags.canUseInviteLinks)) && void 0 !== BB ? BB : "Loading Link...", [pB, lB] = (0, yB.useState)(0), [JB, oB] = (0, yB.useReducer)((BB => BB + 1), 0);
      return (0, yB.useEffect)((() => {
        const BB = setTimeout((() => {
          oB()
        }), 1100);
        return () => {
          clearTimeout(BB)
        }
      }), [pB]), gB.featureFlags.canUseInviteLinks && (0, LB.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, LB.jsx)("div", {
          className: "InviteLinkInner",
          children: dB
        }), (0, LB.jsx)(VB.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(dB).catch((BB => {
              console.error("Failed to copy invite link:", BB)
            })), lB(Date.now())
          },
          disabled: Date.now() - pB < 1e3,
          children: Date.now() - pB < 1e3 ? TB("general:copied") : TB("general:copy")
        })]
      })
    }

    function uB(BB) {
      const [TB, dB] = (0, yB.useState)(null);
      return (0, yB.useEffect)((() => {
        if (!BB) return;
        let TB = !0;
        return (0, pB.z)().then((BB => {
          TB && dB(BB)
        })).catch((BB => {
          console.error("Failed to get invite link:", BB)
        })), () => {
          TB = !1
        }
      }), [BB]), TB
    }
  },
  35965: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => sB
    });
    var VB = dB(62),
      yB = dB(2139),
      pB = dB(1657),
      lB = dB(554),
      JB = dB(24),
      YB = dB(933),
      gB = dB.n(YB),
      oB = dB(35551),
      kB = dB(2211),
      LB = dB(35557),
      OB = dB(2250),
      DB = dB(2220),
      uB = dB(3099),
      HB = dB(21),
      EB = dB(1779),
      vB = dB(2085),
      mB = dB(1105),
      iB = dB(4316),
      NB = dB(1727),
      tB = dB(95),
      fB = dB(980);
    const sB = (0, VB.memo)((function() {
      const BB = (0, yB.j)("lobbyLeaderboardInfo"),
        TB = (0, NB.i)("players"),
        dB = (0, NB.i)("lobbyLeaderboardRows"),
        JB = (0, NB.i)("hiddenPlayerNames"),
        YB = (0, VB.useRef)(null),
        [gB, oB] = (0, VB.useReducer)((BB => BB + 1), 0);
      return (0, VB.useEffect)((() => (0, EB.e)((() => {
        oB()
      }))), []), (0, fB.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, fB.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!BB) return (0, fB.jsx)(fB.Fragment, {});
            const VB = JSON.parse(JSON.stringify(BB)),
              yB = [...TB.ids],
              gB = {},
              oB = {};
            for (const BB of yB) {
              var kB, OB;
              gB[BB] = null === (kB = dB[BB]) || void 0 === kB ? void 0 : kB.colour;
              const TB = null === (OB = dB[BB]) || void 0 === OB ? void 0 : OB.values;
              TB && (oB[BB] = {
                ...TB
              })
            }
            const DB = Object.keys(VB);
            DB.sort(((BB, TB) => VB[BB].sortPriority - VB[TB].sortPriority)), yB.sort(((BB, TB) => {
              if (!oB[BB] || !oB[TB]) return 0;
              for (const dB of DB) {
                const yB = oB[BB][dB],
                  pB = oB[TB][dB];
                let lB = 0;
                if ("string" == typeof yB && "string" == typeof pB ? lB = yB.localeCompare(pB) : "number" == typeof yB && "number" == typeof pB ? lB = yB - pB : "number" == typeof yB && "string" == typeof pB ? lB = 1 : "string" == typeof yB && "number" == typeof pB && (lB = -1), lB) return lB * ("ascending" === VB[dB].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const BB of yB) {
              var uB, HB, NB;
              const {
                name: VB,
                ranks: yB,
                cosmetics: pB
              } = TB.byId[BB], JB = [], YB = null !== (uB = null === (HB = dB[BB]) || void 0 === HB || null === (NB = HB.tags) || void 0 === NB ? void 0 : NB.flatMap((BB => 0 === BB.length ? BB : [...BB, String.fromCharCode(8198)]))) && void 0 !== uB ? uB : [];
              JB.push(...YB), JB.push(...(0, mB.E)(yB, VB, (null === pB || void 0 === pB ? void 0 : pB.nameColour) === lB.d || null === pB || void 0 === pB ? void 0 : pB.nameColour)), oB[BB] ??= {}, oB[BB].name = JB
            }

            function tB(BB, dB) {
              if (oB[BB] && void 0 !== oB[BB][dB]) {
                if ("name" === dB) {
                  const {
                    name: VB,
                    cosmetics: yB
                  } = TB.byId[BB];
                  return (0, fB.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [yB && (0, fB.jsx)(vB.e, {
                      cosmetics: yB
                    }), " ", (0, fB.jsx)(pB.e, {
                      text: oB[BB][dB],
                      friendBadgeFor: (0, EB.h)(VB, JB) ? VB : void 0
                    })]
                  })
                }
                return (0, fB.jsx)(pB.e, {
                  text: oB[BB][dB]
                })
              }
              return ""
            }
            const sB = Object.keys(VB).filter((BB => !0 !== VB[BB].hidden)).map((BB => {
              var TB;
              return {
                key: BB,
                header: (0, fB.jsx)(pB.e, {
                  text: null !== (TB = VB[BB].displayName) && void 0 !== TB ? TB : ""
                })
              }
            }));
            return (0, fB.jsx)("div", {
              ref: YB,
              className: "LobbyLeaderboard",
              children: (0, fB.jsx)(iB.c, {
                columns: sB,
                rows: yB,
                getRowKey: BB => BB,
                renderRow: BB => {
                  const dB = BB !== TB.localId;
                  return (0, fB.jsx)(MB, {
                    playerId: BB,
                    playerName: TB.byId[BB].name,
                    isOtherPlayer: dB,
                    opensProfileCard: (0, LB.g)(dB, TB.byId[BB].name, JB),
                    lobbyLeaderboardInfo: VB,
                    getPlayerValue: tB,
                    playerColors: gB
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function MB(BB) {
      let {
        playerId: TB,
        playerName: dB,
        isOtherPlayer: yB,
        opensProfileCard: pB,
        lobbyLeaderboardInfo: lB,
        getPlayerValue: YB,
        playerColors: EB
      } = BB;
      const vB = (0, VB.useRef)(null);
      (0, VB.useEffect)((() => () => {
        kB.e.closeIfOwner(vB)
      }), []);
      const mB = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            JB.h.yH("OpenReportMenu", {
              playerEId: TB,
              playerName: dB,
              Jo: null,
              serverChatMsgId: null
            })
          }
        },
        iB = () => ({
          ...(0, LB.c)(TB, dB),
          showLocation: !1,
          status: null,
          extraActions: [mB],
          friendRequestSource: "leaderboard"
        });
      return (0, fB.jsxs)("tr", {
        ref: vB,
        "data-pad-focusable": pB || void 0,
        [kB.f]: pB || void 0,
        onClick: pB ? () => {
          var BB;
          kB.e.toggle(vB, {
            ...iB(),
            anchor: null !== (BB = vB.current.querySelector(".PlayerPfpAndName")) && void 0 !== BB ? BB : vB.current
          })
        } : void 0,
        onContextMenu: pB ? BB => {
          (0, OB.f)(vB, BB, iB(), HB.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: pB ? BB => {
          (0, DB.c)(BB, (() => (0, LB.c)(TB, dB).playerSocialPreview))
        } : void 0,
        children: [Object.keys(lB).map((BB => !0 === lB[BB].hidden ? null : (0, fB.jsxs)("td", {
          className: gB()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !yB
          }),
          children: [(0, fB.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: YB(TB, BB)
          }), (0, fB.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: EB[TB]
            }
          })]
        }, BB))), yB && !pB && (0, fB.jsx)(oB.b, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: vB,
          options: [{
            icon: mB.icon,
            text: mB.text,
            onPointerDown: mB.onClick
          }, ...null === dB || tB.featureFlags.useSocialFeatures ? [] : (0, uB.e)(null, dB)]
        })]
      })
    }
  },
  4156: (BB, TB, dB) => {
    dB.d(TB, {
      f: () => vB,
      e: () => EB
    });
    var VB = dB(62),
      yB = dB(1317),
      pB = dB(1657),
      lB = dB(4162),
      JB = dB(980);
    const YB = (0, VB.memo)((function(BB) {
      let {
        initialParameters: TB
      } = BB;
      const dB = (0, VB.useRef)(null),
        yB = (0, VB.useRef)(null),
        YB = (0, VB.useRef)(0),
        gB = (0, VB.useRef)(null),
        oB = TB.description,
        kB = TB.JV,
        {
          scale: LB,
          rotation: OB
        } = null !== TB && void 0 !== TB ? TB : {},
        DB = (0, lB.f)();
      return (0, VB.useEffect)((() => {
        const BB = DB.onFrame((() => {
          const BB = DB.getState();
          if (!BB.isActive || !dB.current || !yB.current) return;
          const TB = BB.state;
          if (dB.current.value = TB.progress, TB.clickCount > YB.current) {
            YB.current = TB.clickCount;
            const BB = yB.current;
            BB.classList.add("pulse"), gB.current = setTimeout((() => {
              BB.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(gB.current), BB()
        }
      }), [DB]), (0, JB.jsx)(JB.Fragment, {
        children: (0, JB.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== LB && {
              "--scale": LB
            },
            ...null !== OB && {
              "--rotation": `${OB}deg`
            }
          },
          children: [(0, JB.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: dB
          }), (0, JB.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: yB,
            children: (0, JB.jsx)(pB.e, {
              text: [{
                icon: kB
              }]
            })
          }), (0, JB.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, JB.jsx)(pB.e, {
              text: oB
            })
          })]
        })
      })
    }));
    var gB = dB(933),
      oB = dB.n(gB);
    const kB = 2 * Math.PI * 90,
      LB = (0, VB.memo)((function(BB) {
        let {
          initialParameters: TB
        } = BB;
        const dB = (0, VB.useRef)(null),
          yB = (0, VB.useRef)(null),
          YB = (0, VB.useRef)(null),
          gB = TB.label,
          LB = TB.icon,
          OB = TB.oV,
          {
            scale: DB,
            rotation: uB,
            kV: HB
          } = null !== TB && void 0 !== TB ? TB : {},
          EB = (0, lB.f)();
        return (0, VB.useEffect)((() => {
          const BB = EB.onFrame((() => {
            var BB, TB;
            const VB = EB.getState();
            if (!VB.isActive || !yB.current) return;
            const pB = VB.state,
              lB = null !== (BB = pB.timeRemaining) && void 0 !== BB ? BB : 0,
              JB = null !== (TB = pB.gV) && void 0 !== TB ? TB : 1,
              gB = kB * (1 - lB / JB);
            yB.current.style.strokeDashoffset = `${gB}`, dB.current && (dB.current.style.opacity = lB > 0 ? "1" : "0"), YB.current && OB && (YB.current.textContent = `${(lB/1e3).toFixed(1)}s`)
          }));
          return () => {
            BB()
          }
        }), [EB, OB]), (0, JB.jsxs)("div", {
          className: "QTETimedClick",
          ref: dB,
          style: {
            ...null !== DB && {
              "--scale": DB
            },
            ...null !== uB && {
              "--rotation": `${uB}deg`
            }
          },
          children: [(0, JB.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, JB.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, JB.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, JB.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: kB,
                ref: yB
              })]
            }), (0, JB.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, JB.jsx)(pB.e, {
                text: [{
                  icon: LB
                }],
                className: oB()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: HB
                })
              })
            })]
          }), (0, JB.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, JB.jsx)(pB.e, {
              text: gB,
              className: "QTETimedClickLabelText"
            }), OB && (0, JB.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: YB
            })]
          })]
        })
      })),
      OB = (0, VB.memo)((function(BB) {
        let {
          initialParameters: TB
        } = BB;
        const dB = (0, VB.useRef)(null),
          yB = (0, VB.useRef)(null),
          YB = (0, VB.useRef)(null),
          gB = (0, VB.useRef)(!1),
          oB = TB.description,
          kB = null === TB || void 0 === TB ? void 0 : TB.icon,
          LB = (0, lB.f)();
        return (0, VB.useEffect)((() => {
          const BB = LB.onFrame((() => {
            const BB = LB.getState();
            if (!BB.isActive) return;
            const TB = BB.state;
            if (dB.current) {
              const BB = 100 * (TB.catchZonePosition - TB.OV / 2);
              dB.current.style.left = `${BB}%`, dB.current.style.width = 100 * TB.OV + "%", TB.isCatching !== gB.current && (gB.current = TB.isCatching, TB.isCatching ? dB.current.classList.add("catching") : dB.current.classList.remove("catching"))
            }
            yB.current && (yB.current.style.left = 100 * TB.moverPosition + "%"), YB.current && (YB.current.value = TB.progress)
          }));
          return () => {
            BB()
          }
        }), [LB]), (0, JB.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, JB.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, JB.jsx)(pB.e, {
              text: oB
            })
          }), (0, JB.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: YB
          }), (0, JB.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, JB.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: dB
            }), (0, JB.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: yB,
              children: (0, JB.jsx)("span", {
                children: kB && (0, JB.jsx)(pB.e, {
                  text: [{
                    icon: kB,
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
    var DB = dB(572);
    const uB = (0, VB.memo)((function(BB) {
        let {
          initialParameters: TB
        } = BB;
        const dB = (0, VB.useRef)(null),
          yB = TB.label,
          YB = TB.iV,
          {
            icon: gB,
            scale: oB,
            rotation: kB
          } = null !== TB && void 0 !== TB ? TB : {},
          LB = 100 * (.5 - YB / 2),
          OB = 100 * YB,
          uB = (0, lB.f)();
        return (0, VB.useEffect)((() => {
          const BB = uB.onFrame((() => {
            const BB = uB.getState();
            if (!BB.isActive || !dB.current) return;
            const TB = BB.state;
            dB.current.style.left = 100 * TB.markerPosition + "%"
          }));
          return () => {
            BB()
          }
        }), [uB]), (0, JB.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, DB.M)(oB) && {
              "--scale": oB
            },
            ...!(0, DB.M)(kB) && {
              "--rotation": `${kB}deg`
            }
          },
          children: [gB && (0, JB.jsx)(pB.e, {
            text: [{
              icon: gB
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, JB.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, JB.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${LB}%`,
                width: `${OB}%`
              }
            }), (0, JB.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: dB
            })]
          }), (0, JB.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, JB.jsx)(pB.e, {
              text: yB
            })
          })]
        })
      })),
      HB = (0, VB.memo)((function(BB) {
        let {
          initialParameters: TB
        } = BB;
        const dB = (0, VB.useRef)(null),
          [yB, YB] = (0, VB.useState)((() => new Array(TB.tV).fill("pending"))),
          [gB, oB] = (0, VB.useState)((() => {
            const BB = TB.MV;
            return (0, DB.M)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
          })),
          kB = TB.label,
          {
            icon: LB
          } = TB,
          OB = (0, VB.useRef)(0),
          uB = (0, VB.useRef)(0),
          HB = (0, VB.useRef)([]),
          EB = (0, lB.f)();
        return (0, VB.useEffect)((() => {
          const BB = EB.onFrame((() => {
            const BB = EB.getState();
            if (!BB.isActive || !dB.current) return;
            const TB = BB.state,
              VB = 30 + 60 * TB.outerCircleProgress;
            if (dB.current.setAttribute("r", String(VB)), !0 === TB.lastClickResult && TB.successes > OB.current) {
              dB.current.classList.remove("QTERhythmClickOuterCircle--miss"), dB.current.classList.add("QTERhythmClickOuterCircle--hit");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = dB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              HB.current.push(BB)
            } else if (!1 === TB.lastClickResult && TB.misses > uB.current) {
              dB.current.classList.remove("QTERhythmClickOuterCircle--hit"), dB.current.classList.add("QTERhythmClickOuterCircle--miss");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = dB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              HB.current.push(BB)
            }
            TB.successes === OB.current && TB.misses === uB.current || (OB.current = TB.successes, uB.current = TB.misses, YB((BB => {
              const dB = [...BB];
              for (let VB = 0; VB < TB.tV; VB++) dB[VB] = VB < TB.successes ? "success" : "pending";
              return dB
            })), oB((BB => {
              if (0 === BB.length) return BB;
              const dB = [...BB];
              for (let VB = 0; VB < dB.length; VB++) dB[VB] = VB < TB.misses ? "miss" : "pending";
              return dB
            })))
          }));
          return () => {
            BB();
            for (const BB of HB.current) clearTimeout(BB);
            HB.current = []
          }
        }), [EB]), (0, JB.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, JB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: yB.map(((BB, TB) => (0, JB.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, TB)))
          }), (0, JB.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, JB.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, JB.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, JB.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: dB
              })]
            }), LB && (0, JB.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, JB.jsx)(pB.e, {
                text: [{
                  icon: LB
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), gB.length > 0 && (0, JB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: gB.map(((BB, TB) => (0, JB.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, TB)))
          }), (0, JB.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, JB.jsx)(pB.e, {
              text: kB
            })
          })]
        })
      }));

    function EB(BB) {
      let {
        qte: TB
      } = BB;
      switch (TB.type) {
        case "progressBar":
          return (0, JB.jsx)(YB, {
            initialParameters: TB.parameters
          });
        case "timedClick":
          return (0, JB.jsx)(LB, {
            initialParameters: TB.parameters
          });
        case "gravityBar":
          return (0, JB.jsx)(OB, {
            initialParameters: TB.parameters
          });
        case "precisionBar":
          return (0, JB.jsx)(uB, {
            initialParameters: TB.parameters
          });
        case "rhythmClick":
          return (0, JB.jsx)(HB, {
            initialParameters: TB.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const vB = (0, VB.memo)((function() {
      const [BB, TB] = (0, VB.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, yB.e)("qteStateUpdated", (BB => {
        TB(BB)
      })), BB.isActive && BB.type ? (0, JB.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, JB.jsx)(EB, {
          qte: BB
        })
      }) : null
    }))
  },
  4162: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      f: () => YB
    });
    var VB = dB(62),
      yB = dB(1185),
      pB = dB(4167);
    const lB = {
        getState: () => pB.c.getCurrentState(),
        onFrame: yB.m
      },
      JB = (0, VB.createContext)(lB);

    function YB() {
      return (0, VB.useContext)(JB)
    }
  },
  8565: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(1727),
      JB = dB(980);

    function YB(BB) {
      const TB = Math.floor(BB / 3600),
        dB = Math.floor(BB % 3600 / 60),
        VB = Math.floor(BB % 60),
        yB = `${dB.toString().padStart(2,"0")}:${VB.toString().padStart(2,"0")}`;
      return TB > 0 ? `${TB}:${yB}` : yB
    }
    const gB = (0, VB.memo)((function(BB) {
      let {
        className: TB
      } = BB;
      const {
        recording: dB,
        seconds: VB
      } = (0, lB.i)("replayRecorder");
      return dB ? (0, JB.jsxs)("div", {
        className: pB()("RecordingIndicator", TB),
        children: [(0, JB.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, JB.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, JB.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: YB(VB)
        })]
      }) : null
    }))
  },
  35381: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => oB,
      e: () => LB
    });
    var VB = dB(62),
      yB = dB(1235),
      pB = dB(1078),
      lB = dB(1225),
      JB = dB(2971),
      YB = dB(4334),
      gB = dB(980);

    function oB(BB) {
      let {
        loading: TB,
        schematics: dB,
        onSchematicPicked: VB,
        selectedSchematicIdList: yB = [],
        disableAutoExport: YB
      } = BB;
      const {
        t: oB
      } = (0, pB.z)();
      return (0, gB.jsxs)("div", {
        className: "SchematicList",
        children: [TB && (0, gB.jsx)(lB.b, {}), !TB && 0 === dB.length && (0, gB.jsx)("div", {
          className: "NoSchematicsText",
          children: oB("worldBuilder:noSavedSchematic")
        }), !TB && dB.map((BB => (0, gB.jsx)(JB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            VB(BB)
          },
          isSelected: yB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && YB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function kB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: yB
      } = BB;
      const {
        t: lB
      } = (0, pB.z)(), [JB, kB] = (0, VB.useState)(null);
      return (0, gB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === JB && (0, gB.jsxs)(gB.Fragment, {
          children: [(0, gB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: lB("worldBuilder:schematicList")
          }), (0, gB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: lB("worldBuilder:clickSchematicForOptions")
          }), (0, gB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, gB.jsx)(oB, {
              loading: !1,
              schematics: TB,
              onSchematicPicked: BB => {
                kB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== JB && (0, gB.jsx)(YB.h, {
          schematic: JB,
          inSourceWorld: JB.schematicId === dB,
          onSchematicUpdate: BB => {
            kB(BB)
          },
          onClose: () => {
            kB(null), yB()
          }
        })]
      })
    }

    function LB(BB) {
      let {
        ownedSchematics: TB,
        currentWorldSchematicId: dB,
        onClose: VB
      } = BB;
      yB.NotificationProvider.showCustomPopup({
        body: BB => (0, gB.jsx)(kB, {
          ownedSchematics: TB,
          currentWorldSchematicId: dB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: VB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35880: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => NB,
      e: () => iB
    });
    var VB = dB(3741),
      yB = dB(1317),
      pB = dB(62),
      lB = dB(5839),
      JB = dB(3725),
      YB = dB(1173),
      gB = dB(1679),
      oB = dB(1657),
      kB = dB(1324),
      LB = dB(1078),
      OB = dB(35886),
      DB = dB(933),
      uB = dB.n(DB),
      HB = dB(1201),
      EB = dB(946),
      vB = dB(1165),
      mB = dB(980);
    const iB = "SleepingOverlay";

    function NB() {
      const {
        t: BB
      } = (0, LB.z)(), [TB, dB] = (0, pB.useState)(!1), [DB, NB] = (0, pB.useState)(null), [fB, sB] = (0, pB.useState)(1), [MB, zB] = (0, pB.useState)(!1), [wB, UB] = (0, pB.useState)(!1), FB = (0, pB.useRef)(0), KB = (0, pB.useRef)(!1), rB = (0, pB.useRef)(!1), IB = (0, pB.useRef)(), cB = (0, pB.useRef)(null);

      function SB() {
        const BB = null !== DB && void 0 !== DB ? DB : "Rested Speed";
        gB.gameBridge.send("wakeUp", wB ? BB : null), cB.current = null, dB(!1), NB(null), sB(1), zB(!1), UB(!1)
      }

      function PB() {
        return !MB && (SB(), !0)
      }
      return (0, yB.e)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== cB.current && (cB.current = BB, BB === lB.q.SLEEPING ? (rB.current || (FB.current = gB.gameBridge.lookup("cameraZoom", null), rB.current = !0), KB.current = !0, gB.gameBridge.send("setCameraZoom", 3), dB(!0), sB(function() {
          for (const BB of gB.gameBridge.lookup("blocksStandingOn", null)) {
            if (OB.e.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (OB.e.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (OB.e.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (rB.current = !1, dB(!1), NB(null), sB(1)))
      })), (0, pB.useEffect)((() => () => {
        (0, YB.l)(iB)
      }), []), (0, pB.useEffect)((() => {
        TB ? (0, YB.p)(iB) : ((0, YB.l)(iB), KB.current && (gB.gameBridge.send("setCameraZoom", FB.current), KB.current = !1))
      }), [TB]), (0, vB.y)("overlay", IB, PB, TB), (0, mB.jsx)(VB.b, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: TB,
        timeout: 300,
        nodeRef: IB,
        unmountOnExit: !0,
        children: (0, mB.jsx)("div", {
          ref: IB,
          onClick: BB => {
            PB() && BB.stopPropagation()
          },
          children: (0, mB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, mB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: JB.j.map((TB => (0, mB.jsxs)(tB, {
                restedEffect: TB,
                oo: DB,
                setChosenRestedEffect: NB,
                children: [(0, mB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, mB.jsx)(oB.e, {
                    text: [{
                      icon: TB
                    }]
                  }), JB.g[TB].shortName]
                }), (0, mB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(JB.g[TB].description, {
                    time: JB.g[TB].effectLevelDurations[fB] / 6e4
                  })
                })]
              }, TB)))
            }), (0, mB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, mB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, mB.jsxs)(kB.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  wB ? SB() : (zB(!0), (0, HB.$)((() => {
                    zB(!1), UB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: MB,
                children: [!wB && (0, mB.jsxs)(mB.Fragment, {
                  children: [(0, mB.jsx)(EB.e, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), wB && BB("classicGame:wakeUp")]
              }), (0, mB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, mB.jsx)("div", {
                  className: uB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === fB
                  }),
                  children: (0, mB.jsx)(oB.e, {
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
    const tB = (0, pB.memo)((function(BB) {
      let {
        children: TB,
        restedEffect: dB,
        oo: VB,
        setChosenRestedEffect: yB
      } = BB;
      return dB === VB ? (0, mB.jsx)(kB.k, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: TB
      }) : (0, mB.jsx)(kB.g, {
        onClick: BB => {
          yB(dB), BB.stopPropagation()
        },
        children: TB
      })
    }))
  },
  35557: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => gB,
      g: () => YB
    });
    var VB = dB(554),
      yB = dB(1679),
      pB = dB(1514),
      lB = dB(95),
      JB = dB(1139);

    function YB(BB, TB, dB) {
      return lB.featureFlags.useSocialFeatures && BB && null === (0, JB.d)(TB, dB)
    }

    function gB(BB, TB) {
      var dB, lB;
      const JB = pB.e.getSocialState().friends.find((BB => BB.name.toLowerCase() === TB.toLowerCase())),
        YB = yB.gameBridge.latest("players").byId[BB],
        gB = void 0 !== YB && YB.name === TB,
        oB = gB && null !== (dB = YB.cosmetics) && void 0 !== dB ? dB : void 0,
        kB = JB && oB ? {
          ...JB,
          cosmetics: oB
        } : JB;
      return {
        playerSocialPreview: null !== kB && void 0 !== kB ? kB : {
          isError: !1,
          name: TB,
          ranks: gB ? [...YB.ranks] : [],
          cosmetics: null !== oB && void 0 !== oB ? oB : {},
          nameColour: null !== (lB = null === oB || void 0 === oB ? void 0 : oB.nameColour) && void 0 !== lB ? lB : VB.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== JB
      }
    }
  },
  8570: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => pB
    });
    var VB = dB(3948),
      yB = dB(3951);

    function pB(BB) {
      let {
        children: TB,
        showing: dB,
        globallyUniqueKey: pB,
        alwaysMountChildren: lB = !1,
        doGameplayStartStopOnShow: JB = !0,
        keepsMovement: YB = !1
      } = BB;
      return (0, yB.d)(!0, dB, pB, YB), (0, VB.e)(JB, dB), dB || lB ? TB : null
    }
  },
  4316: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB
    });
    var VB = dB(62),
      yB = dB(933),
      pB = dB.n(yB),
      lB = dB(980);

    function JB(BB) {
      let {
        columns: TB,
        rows: dB,
        getRowKey: yB,
        renderRow: JB,
        className: YB
      } = BB;
      return (0, lB.jsxs)("table", {
        className: pB()("Table", YB),
        children: [(0, lB.jsx)("thead", {
          children: (0, lB.jsx)("tr", {
            children: TB.map((BB => (0, lB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, lB.jsx)("tbody", {
          children: dB.map((BB => (0, lB.jsx)(VB.Fragment, {
            children: JB(BB)
          }, yB(BB))))
        })]
      })
    }
  },
  35856: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => sB,
      f: () => tB,
      h: () => fB,
      l: () => DB
    });
    var VB = dB(933),
      yB = dB.n(VB),
      pB = dB(62),
      lB = dB(72),
      JB = dB(1251),
      YB = dB(1324),
      gB = dB(1249),
      oB = dB(1165),
      kB = dB(1078),
      LB = dB(35860),
      OB = dB(980);

    function DB(BB) {
      const [TB, dB] = (0, pB.useState)((() => (0, LB.s)(BB)));
      return (0, pB.useEffect)((() => (dB((0, LB.s)(BB)), (0, LB.T)((() => {
        dB((0, LB.s)(BB))
      })))), [BB]), TB
    }

    function uB(BB, TB) {
      "function" === typeof BB ? BB(TB) : BB && (BB.current = TB)
    }

    function HB(BB) {
      let {
        tutorial: TB,
        step: dB,
        enabled: VB = !0
      } = BB;
      const yB = DB(TB);
      return VB && yB === dB
    }

    function EB(BB, TB) {
      const dB = (0, LB.w)(BB),
        VB = dB.indexOf(TB);
      return !dB.slice(VB + 1).some((TB => (0, LB.D)(BB, TB)))
    }

    function vB(BB, TB, dB, VB) {
      let {
        tutorial: yB,
        step: pB,
        waitForClick: lB = !1,
        onPrevious: JB
      } = BB;
      const YB = TB && (0, LB.C)(yB, pB),
        gB = TB && !EB(yB, pB),
        kB = lB ? VB : dB;
      let OB = null;
      YB ? OB = () => {
        null === JB || void 0 === JB || JB(), (0, LB.y)(yB, pB)
      } : gB && (OB = () => {
        (0, LB.o)(yB)
      }), (0, oB.y)("popup", null !== kB && void 0 !== kB ? kB : dB, OB, TB && null !== kB, null, YB ? void 0 : "controller:menusSkipTutorial")
    }

    function mB(BB) {
      let {
        tutorial: TB,
        step: dB,
        text: VB,
        waitForClick: yB = !1,
        onPrevious: pB
      } = BB;
      const {
        t: lB
      } = (0, kB.z)(), JB = EB(TB, dB);
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, OB.jsx)("div", {
          className: "TutorialStepText",
          children: VB
        }), (0, OB.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, LB.C)(TB, dB) && (0, OB.jsx)(YB.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === pB || void 0 === pB || pB(), (0, LB.y)(TB, dB)
            },
            children: lB("tutorial:back")
          }), !yB && (0, OB.jsx)(YB.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LB.g)(dB)
            },
            padDefaultFocus: !0,
            children: lB(JB ? "tutorial:done" : "tutorial:next")
          }), !JB && (0, OB.jsx)(YB.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, LB.o)(TB)
            },
            children: lB("tutorial:skip")
          })]
        })]
      })
    }
    const iB = 6;

    function NB(BB) {
      let {
        rect: TB,
        margin: dB
      } = BB;
      const VB = Math.max(0, TB.top - dB),
        yB = TB.bottom + dB,
        pB = Math.max(0, TB.left - dB),
        lB = TB.right + dB;
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: VB
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: yB,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: VB,
            left: 0,
            width: pB,
            height: yB - VB
          }
        }), (0, OB.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: VB,
            left: lB,
            right: 0,
            height: yB - VB
          }
        })]
      })
    }

    function tB(BB) {
      let {
        target: TB,
        placement: dB,
        boxRef: VB,
        className: YB,
        spotlightMargin: oB = iB,
        children: kB
      } = BB;
      const {
        getArrowProps: LB,
        getTooltipProps: DB,
        setTooltipRef: uB,
        setTriggerRef: HB
      } = (0, JB.c)({
        placement: dB,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, oB]
      });
      (0, pB.useLayoutEffect)((() => {
        HB(TB)
      }), [TB, HB]);
      const EB = function(BB, TB) {
        const [dB, VB] = (0, pB.useState)(null);
        return (0, pB.useEffect)((() => {
          if (!TB || !BB) return void VB(null);
          let dB = 0,
            yB = null;
          const pB = () => {
            const TB = BB.getBoundingClientRect();
            yB && TB.left === yB.left && TB.top === yB.top && TB.width === yB.width && TB.height === yB.height || (yB = TB, VB(TB)), dB = requestAnimationFrame(pB)
          };
          return pB(), () => {
            cancelAnimationFrame(dB)
          }
        }), [BB, TB]), dB
      }(TB, !0);
      (0, pB.useEffect)((() => {
        null === TB || void 0 === TB || TB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [TB]);
      const vB = (0, pB.useCallback)((BB => {
        uB(BB), VB && (VB.current = BB)
      }), [uB, VB]);
      return (0, lB.createPortal)((0, OB.jsxs)(OB.Fragment, {
        children: [EB && (0, OB.jsx)(NB, {
          rect: EB,
          margin: oB
        }), (0, OB.jsxs)("div", {
          ref: vB,
          ...DB({
            className: yB()("tooltip-container SmallTextLight TutorialStep", YB)
          }),
          children: [kB, (0, OB.jsx)("div", {
            ...LB({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, gB.k)())
    }
    const fB = (0, pB.forwardRef)((function(BB, TB) {
      let {
        placement: dB = "right",
        children: VB,
        ...yB
      } = BB;
      const lB = HB(yB),
        JB = (0, pB.useRef)(null),
        YB = (0, pB.useRef)(null);
      vB(yB, lB, JB, YB);
      const [gB, oB] = (0, pB.useState)(null), kB = VB.ref, LB = (0, pB.useCallback)((BB => {
        YB.current = BB, oB(BB), uB(TB, BB), uB(kB, BB)
      }), [TB, kB]);
      return (0, OB.jsxs)(OB.Fragment, {
        children: [(0, pB.cloneElement)(VB, {
          ref: LB
        }), lB && (0, OB.jsx)(tB, {
          target: gB,
          placement: dB,
          boxRef: JB,
          children: (0, OB.jsx)(mB, {
            ...yB
          })
        })]
      })
    }));

    function sB(BB) {
      const TB = HB(BB),
        dB = (0, pB.useRef)(null);
      return vB(BB, TB, dB, null), TB ? (0, lB.createPortal)((0, OB.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, OB.jsx)("div", {
          ref: dB,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, OB.jsx)(mB, {
            ...BB
          })
        })
      }), (0, gB.k)()) : null
    }
  },
  35700: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => pB,
      f: () => lB,
      g: () => JB,
      j: () => YB
    });
    var VB = dB(62),
      yB = dB(1002);
    const pB = 8,
      lB = "InGameHeaderContainer",
      JB = "TopRightElements";

    function YB(BB) {
      const [TB] = (0, yB.e)(), [dB, YB] = (0, VB.useState)(!1);
      return (0, VB.useLayoutEffect)((() => {
        if (!BB) return;
        const TB = document.querySelector(`.${lB}`),
          dB = document.querySelector(`.${JB}`),
          VB = () => {
            const VB = BB.getBoundingClientRect(),
              yB = TB ? TB.getBoundingClientRect().right : 0,
              lB = dB ? dB.getBoundingClientRect().left : window.innerWidth,
              JB = VB.left < yB + pB,
              gB = VB.right > lB - pB;
            YB(JB || gB)
          };
        VB();
        const yB = new ResizeObserver(VB);
        return yB.observe(BB), TB && yB.observe(TB), dB && yB.observe(dB), () => {
          yB.disconnect()
        }
      }), [BB, TB]), dB
    }
  },
  5913: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB
    });
    var VB = dB(62),
      yB = dB(33);

    function pB(BB, TB) {
      var dB;
      const [pB, lB] = (0, VB.useState)(null !== (dB = yB.j.getItem(BB)) && void 0 !== dB ? dB : TB);
      return [pB, TB => {
        yB.j.setItem(BB, TB), lB(TB)
      }]
    }
  },
  35869: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(21),
      yB = dB(1201);

    function pB() {
      const {
        clientEscMenuOptions: BB
      } = (0, VB.m)(["clientEscMenuOptions"]);
      return (0, yB.w)() && BB.showChat
    }
  },
  35810: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB
    });
    var VB = dB(2385),
      yB = dB(3191),
      pB = dB(2465);
    const lB = ["Unable to create vertex buffer"];
    let JB = {};

    function YB(BB, TB) {
      const dB = new Date;
      console.error(`${dB.getUTCHours()}:${dB.getUTCMinutes()}:${dB.getUTCSeconds()}`, BB, TB, null === TB || void 0 === TB ? void 0 : TB.stack), lB.includes(null === TB || void 0 === TB ? void 0 : TB.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, VB.b)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${TB.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, pB.logError)("warning", `${BB}\n ${TB} "\n" ${null===TB||void 0===TB?void 0:TB.stack}`);
      const yB = BB + TB + (null === TB || void 0 === TB ? void 0 : TB.stack);
      yB in JB || ((0, pB.logError)("error", `${BB}\n ${TB} "\n" ${null===TB||void 0===TB?void 0:TB.stack}`), JB[yB] = !0)
    }(0, yB.onGameReset)((() => {
      JB = {}
    }))
  },
  4240: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => cB,
      f: () => IB
    });
    var VB = dB(4247),
      yB = dB(270);
    const pB = 120,
      lB = 260,
      JB = 1.15,
      YB = 1.2,
      gB = 2,
      oB = 1.08,
      kB = .8,
      LB = .95,
      OB = 8,
      DB = "[\"')\\]\u300d\u300f\uff09]*",
      uB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${DB}$`),
      HB = new RegExp(`[?\uff1f]${DB}$`),
      EB = new RegExp(`[!\uff01]${DB}$`),
      vB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      mB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      iB = new RegExp(`[${mB}]`),
      NB = new RegExp(`[${mB}]|[^${mB}]+`, "g"),
      tB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function fB(BB) {
      let TB = 2166136261;
      for (let dB = 0; dB < BB.length; dB++) TB ^= BB.charCodeAt(dB), TB = Math.imul(TB, 16777619);
      return (TB >>> 0) / 4294967295 * 2 - 1
    }

    function sB(BB) {
      var TB;
      if (iB.test(BB)) return 1;
      const dB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        VB = dB.replace(/[^0-9]/g, "");
      if (VB.length > 0 && !/\p{L}/u.test(dB)) return Math.min(VB.length, 4);
      const yB = null !== (TB = dB.match(tB)) && void 0 !== TB ? TB : [];
      if (0 === yB.length) {
        var pB, lB;
        const BB = null !== (pB = null === (lB = dB.match(/\p{L}/gu)) || void 0 === lB ? void 0 : lB.length) && void 0 !== pB ? pB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), OB)
      }
      const JB = dB.replace(/[^\p{L}]/gu, ""),
        YB = yB.length > 1 && "e" === yB.at(-1) && JB.endsWith("e") && !JB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(yB.length - (YB ? 1 : 0), OB)
    }

    function MB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function zB(BB) {
      const TB = BB.replace(/[^\p{L}]/gu, "");
      return TB.length >= 2 && TB === TB.toUpperCase() && TB !== TB.toLowerCase()
    }

    function wB(BB, TB) {
      var dB;
      const OB = TB && (0, VB.i)(TB),
        DB = null !== (dB = null === OB || void 0 === OB ? void 0 : OB.syllableMs) && void 0 !== dB ? dB : VB.b,
        mB = function(BB) {
          const TB = [];
          for (const VB of (0, yB.hc)(BB))
            if ("string" === typeof VB)
              for (const BB of VB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  TB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!iB.test(BB)) {
                  TB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let VB = !0;
                for (const yB of null !== (dB = BB.match(NB)) && void 0 !== dB ? dB : []) {
                  var dB;
                  const BB = TB.at(-1);
                  VB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || iB.test(yB) || /[\p{L}\p{N}]/u.test(yB) ? (VB || TB.push({
                    kind: "space",
                    text: "\u200b"
                  }), TB.push({
                    kind: "word",
                    text: yB,
                    delayMs: 0
                  }), VB = !1) : BB.text += yB
                }
              } else TB.push({
                kind: "icon",
                text: VB.icon,
                delayMs: 0
              });
          return TB
        }(BB),
        tB = [];
      let wB = [];
      for (const VB of mB) "space" !== VB.kind && (wB.push(VB), uB.test(VB.text) && (tB.push(wB), wB = []));
      tB.push(wB);
      const UB = [];
      let FB = 0;
      for (const VB of tB) {
        var KB, rB;
        const BB = null !== (KB = null === (rB = VB.at(-1)) || void 0 === rB ? void 0 : rB.text) && void 0 !== KB ? KB : "",
          TB = HB.test(BB),
          dB = EB.test(BB),
          yB = VB.map((BB => "word" === BB.kind ? sB(BB.text) : 1)),
          mB = yB.findLastIndex((BB => BB > 0));
        for (const [HB, EB] of VB.entries()) {
          const BB = "word" === EB.kind,
            VB = yB[HB];
          EB.delayMs = FB;
          for (let yB = 0; OB && yB < VB; yB++) {
            const {
              intonation: pB
            } = OB;
            let lB = mB > 0 ? -pB.declineSemitones * (HB / mB) : 0;
            lB += fB(`${MB(EB.text)}|${yB}`) * pB.variationSemitones;
            const uB = Math.min(1, pB.variationSemitones);
            let vB = OB.glideSemitones,
              iB = 1;
            dB && (lB += pB.exclaimLiftSemitones, iB *= JB), TB && HB === mB && (lB += pB.questionRiseSemitones * (VB > 1 ? .5 + .5 * yB / (VB - 1) : 1), yB === VB - 1 && (vB = Math.abs(vB) + pB.questionRiseSemitones / 2)), BB && zB(EB.text) && (lB += gB * uB, iB *= YB), VB > 1 && 0 === yB && (lB += kB * uB, iB *= oB), UB.push({
              atMs: FB + yB * DB,
              semitones: lB,
              glideSemitones: vB,
              durationMs: yB < VB - 1 ? Math.min(OB.durationMs, DB * LB) : OB.durationMs,
              level: iB
            })
          }
          FB += VB * DB + (uB.test(EB.text) ? lB : vB.test(EB.text) ? pB : 0)
        }
      }
      return {
        pieces: mB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: UB
      }
    }
    var UB = dB(1078),
      FB = dB(1133),
      KB = dB(1685);

    function rB(BB) {
      if ("string" === typeof BB) return BB;
      const TB = FB.f.get().getCurrentLanguageCode();
      return (0, UB.r)(TB, BB.translationKey, (0, UB.o)(BB.params, KB.c.shown))
    }

    function IB(BB) {
      const TB = void 0 === BB.voice ? null : (0, VB.j)(BB.voice),
        dB = TB && (0, VB.i)(TB);
      return {
        plan: wB(rB(BB.line), dB),
        synth: dB
      }
    }

    function cB(BB) {
      const TB = [];
      let dB = [];
      for (const [yB, pB] of BB.entries()) {
        var VB;
        "space" === pB.kind && (" " !== pB.text || "icon" !== (null === (VB = BB[yB + 1]) || void 0 === VB ? void 0 : VB.kind)) ? (dB.length > 0 && TB.push(dB), TB.push([pB]), dB = []) : dB.push(pB)
      }
      return dB.length > 0 && TB.push(dB), TB
    }
  },
  35696: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    const VB = [{
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

    function yB(BB, TB, dB) {
      const yB = Math.abs(BB - TB),
        pB = Date.now() - dB;
      for (const lB of VB)
        if (BB < lB.maxDist) return yB >= lB.hardUpdateDist || pB > lB.timeBetweenSoftChecks && yB >= lB.softUpdateDist;
      return !1
    }
  },
  35908: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => lB,
      e: () => pB,
      h: () => yB
    });
    const VB = [.25, .5, 1, 2, 4, 8, 16];

    function yB(BB, TB) {
      const dB = VB;
      let yB = dB.indexOf(BB);
      return -1 === yB && (yB = dB.findIndex((TB => TB >= BB)), -1 === yB && (yB = dB.length - 1)), "up" === TB ? dB[Math.min(yB + 1, dB.length - 1)] : dB[Math.max(yB - 1, 0)]
    }

    function pB(BB) {
      return BB <= VB[0]
    }

    function lB(BB) {
      return BB >= VB[VB.length - 1]
    }
  },
  35950: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    });
    const VB = "data-replay-ui-active",
      yB = [{
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
  35959: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => gB,
      e: () => kB,
      g: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(35950);

    function lB() {
      const BB = {};
      for (const {
          group: TB
        }
        of pB.g) BB[TB] = !0;
      return BB
    }
    let JB = lB();

    function YB() {
      yB.h.yH("replayViewer|uiVisibilityChanged")
    }

    function gB() {
      return JB
    }

    function oB(BB, TB) {
      JB[BB] !== TB && (JB = {
        ...JB,
        [BB]: TB
      }, "nametag" === BB && VB.d.set({
        areNametagsHidden: !TB
      }), YB())
    }

    function kB() {
      JB = lB(), VB.d.set({
        areNametagsHidden: !1
      }), YB()
    }
  },
  35819: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB,
      e: () => YB
    });
    const VB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      yB = {
        player: VB,
        store: {
          ...VB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pB(BB, TB) {
      BB instanceof Promise ? BB.then(TB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : TB(BB)
    }
    class lB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var TB;
        this.view = BB, null === (TB = this.opened) || void 0 === TB || TB.show(BB)
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), pB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, TB;
        return null !== (BB = null === (TB = this.opened) || void 0 === TB ? void 0 : TB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, TB) {
        var dB;
        null === (dB = this.opened) || void 0 === dB || dB.setCosmetic(BB, TB)
      }
      playEmote(BB) {
        var TB;
        null === (TB = this.opened) || void 0 === TB || TB.playEmote(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var TB;
        await this.ready, await (null === (TB = this.opened) || void 0 === TB ? void 0 : TB.untilDrawn(BB))
      }
      resize(BB, TB) {
        var dB;
        this.size = {
          width: BB,
          height: TB
        }, null === (dB = this.opened) || void 0 === dB || dB.resize(BB, TB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const YB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new lB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new lB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new lB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, TB) {
        return new JB(this.current().openCharacter(BB, TB))
      }
    }
  },
  35817: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB.e
    });
    var VB = dB(35819);
    class yB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class pB {
      constructor() {
        this.mobScene = new yB((() => Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(67), dB.e(66), dB.e(232), dB.e(65), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(206), dB.e(271), dB.e(211), dB.e(225), dB.e(237), dB.e(240), dB.e(126), dB.e(185), dB.e(207), dB.e(222), dB.e(205), dB.e(106), dB.e(68), dB.e(272), dB.e(146)]).then((() => dB(39925))))), this.characterScene = new yB((() => Promise.all([dB.e(215), dB.e(214), dB.e(234), dB.e(235), dB.e(67), dB.e(66), dB.e(232), dB.e(65), dB.e(242), dB.e(236), dB.e(241), dB.e(239), dB.e(231), dB.e(206), dB.e(271), dB.e(211), dB.e(225), dB.e(237), dB.e(240), dB.e(126), dB.e(185), dB.e(207), dB.e(222), dB.e(205), dB.e(106), dB.e(68), dB.e(272), dB.e(145)]).then((() => dB(40024)))))
      }
      openMob(BB) {
        return this.mobScene.run((TB => TB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((TB => TB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((TB => TB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, TB) {
        return this.characterScene.run((dB => dB.openCharacterPreview(BB, TB)))
      }
    }
    VB.e.setDefaultHost((() => new pB))
  },
  35805: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB,
      g: () => pB
    });
    const VB = new Map;

    function yB(BB) {
      var TB;
      return null === BB ? null : null !== (TB = VB.get(BB)) && void 0 !== TB ? TB : null
    }

    function pB(BB, TB) {
      return VB.set(BB, TB), () => {
        VB.get(BB) === TB && VB.delete(BB)
      }
    }
  },
  35601: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => vB,
      c: () => pB,
      e: () => uB,
      i: () => HB,
      k: () => JB,
      n: () => LB,
      r: () => EB,
      s: () => kB,
      v: () => mB,
      x: () => DB
    });
    var VB = dB(21),
      yB = dB(24);
    const pB = "clientGameInventoryButtonsChanged",
      lB = new Map;

    function JB() {
      return [...lB.values()].sort(((BB, TB) => {
        var dB, VB;
        return (null !== (dB = BB.order) && void 0 !== dB ? dB : 0) - (null !== (VB = TB.order) && void 0 !== VB ? VB : 0)
      }))
    }
    let YB = null;

    function gB(BB) {
      YB = BB
    }
    let oB = !1;

    function kB(BB) {
      oB = !0;
      try {
        BB.onClick()
      } finally {
        oB = !1
      }
      BB.panel && "clientGame" === VB.d.get("openInGameMenuName") && gB(BB.id)
    }

    function LB() {
      return oB
    }

    function OB() {
      return JB().filter((BB => BB.panel && !BB.disabled))
    }

    function DB(BB) {
      const TB = OB(),
        dB = TB.findIndex((BB => BB.id === YB));
      return !(dB < 0 || TB.length < 2) && (kB(TB[(dB + BB + TB.length) % TB.length]), !0)
    }

    function uB() {
      return null !== YB && OB().length > 1
    }

    function HB() {
      gB(null)
    }

    function EB() {
      "inventory" !== VB.d.get("openInGameMenuName") && gB(null)
    }

    function vB() {
      const BB = YB;
      return gB(null), BB
    }

    function mB(BB) {
      return lB.set(BB.id, BB), yB.h.yH(pB, JB(), !0), () => {
        lB.get(BB.id) === BB && (lB.delete(BB.id), yB.h.yH(pB, JB()))
      }
    }
  },
  35595: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      g: () => HB,
      h: () => EB,
      j: () => LB,
      k: () => gB,
      o: () => uB,
      p: () => OB,
      r: () => oB
    });
    var VB = dB(21),
      yB = dB(24),
      pB = dB(1173),
      lB = dB(35601);
    const JB = "clientGameUiChanged";
    let YB = null;

    function gB() {
      return YB
    }

    function oB(BB, TB) {
      const dB = {
        content: BB,
        menu: TB
      };
      return YB = dB, yB.h.yH(JB, YB, !0), () => {
        YB === dB && (YB = null, DB = !1, HB(), yB.h.yH(JB, null))
      }
    }
    let kB = null;

    function LB() {
      return kB
    }

    function OB(BB) {
      return kB = BB, () => {
        kB === BB && (kB = null)
      }
    }
    let DB = !1;

    function uB() {
      const BB = VB.d.get("openInGameMenuName");
      "clientGame" !== BB && (DB = "inventory" === BB), (0, lB.n)() || (0, lB.i)(), (0, pB.p)("InGameMenu"), VB.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function HB() {
      vB(!1)
    }

    function EB() {
      vB(DB)
    }

    function vB(BB) {
      "clientGame" === VB.d.get("openInGameMenuName") && VB.d.set({
        openInGameMenuName: BB ? "inventory" : null
      }), BB || (0, lB.i)(), DB = !1
    }
  },
  35925: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => nT,
      f: () => bT
    });
    var VB = dB(3716),
      yB = dB(572),
      pB = dB(3239),
      lB = dB(3257),
      JB = dB.n(lB);
    const YB = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      gB = "EV_boolean",
      oB = "EV_double",
      kB = "EV_string",
      LB = "EV_doubleArr",
      OB = "EV_armour",
      DB = "EV_other",
      uB = "EV_cosmetics",
      HB = "OEV_boolean",
      EB = "OEV_int",
      vB = "OEV_double",
      mB = "OEV_string",
      iB = "OEV_stringArr",
      NB = "OEV_meshScaling",
      tB = "IV_int",
      fB = "IV_string",
      sB = "IV_doubleArr",
      MB = "IV_double",
      zB = "HV_int",
      wB = "HV_slots",
      UB = "EnvV_string",
      FB = "EnvV_double",
      KB = "EnvV_doubleArr",
      rB = "EnvV_boolean",
      IB = {
        type: kB,
        name: kB,
        position: LB,
        rotation: LB,
        scale: oB,
        speed: oB,
        jumping: gB,
        crouching: gB,
        cameraPitch: oB,
        armSwinging: gB,
        heldItemName: kB,
        heldItemEnchantmentTier: kB,
        pose: kB,
        followingEId: kB,
        ridingVehicleEId: kB,
        leaderboardTop: kB,
        meshKind: kB,
        meshOpts: kB,
        followingOffset: LB,
        shouldMatchFollowingEntityRotation: gB,
        meshOffset: LB,
        baseRenderHeading: oB,
        armour: OB,
        zK: DB,
        playerCustomisations: uB,
        variation: kB,
        metaInfo: kB,
        soundName: kB,
        volume: oB,
        refDistance: oB,
        maxHearDist: oB,
        rate: oB,
        aiState: kB
      },
      cB = {
        opacity: vB,
        zIndex: EB,
        overlayColour: mB,
        canSee: HB,
        meshScaling: NB,
        nameTagInfo: mB,
        multilineTextBox: mB,
        hasPriorityNametag: HB,
        ranks: iB,
        nameColour: mB,
        _isAlive: HB,
        _invisibleEffect: HB,
        _invincible: HB,
        killfeedColour: mB,
        hideNameSeed: EB,
        _glowingEffect: HB,
        lockHeadToBody: HB
      },
      SB = {
        itemName: fB,
        amount: tB,
        position: sB,
        size: MB,
        attributes: fB
      },
      PB = {
        skyBox: UB,
        fogColourOverride: UB,
        fogChunkDistanceOverride: FB,
        cameraTint: KB,
        fogOnSkybox: rB,
        fogBlockDistanceOverride: FB
      },
      QB = {
        type: "array",
        items: "double"
      },
      RB = {
        type: "array",
        items: "int"
      },
      aB = {
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
      ZB = {
        type: "map",
        values: QB
      };

    function XB(BB, TB) {
      return {
        type: "record",
        name: BB,
        fields: [{
          name: "x",
          type: TB
        }]
      }
    }
    const WB = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", XB(HB, "boolean"), XB(EB, "int"), XB(vB, "double"), XB(mB, "string"), XB(iB, {
              type: "array",
              items: "string"
            }), XB(NB, ZB)]
          }]
        }
      },
      hB = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", XB(gB, "boolean"), XB(oB, "double"), XB(kB, "string"), XB(LB, QB), XB(OB, aB), XB(DB, WB), XB(uB, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      CB = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", XB(tB, "int"), XB(fB, "string"), XB(MB, "double"), XB(sB, QB)]
          }]
        }
      },
      GB = {
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
      qB = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", XB(zB, "int"), XB(wB, GB)]
        }]
      },
      xB = {
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
      jB = {
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
      AB = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", XB(UB, "string"), XB(FB, "double"), XB(KB, QB), XB(rB, "boolean")]
          }]
        }
      },
      bB = [{
        name: "Cw",
        type: "record",
        fields: [{
          name: "pos",
          type: RB
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
          type: RB
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
      nB = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "hp",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "qp",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "xp",
              type: ["null", "string", QB],
              default: null
            }, {
              name: "jp",
              type: ["null", "double"],
              default: null
            }, {
              name: "Ap",
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
          name: "My",
          type: "string"
        }, {
          name: "zy",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "wy",
          type: "double"
        }, {
          name: "Uy",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "uT",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: QB
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "aT",
          type: "string"
        }, {
          name: "Rp",
          type: ["null", "double"],
          default: null
        }, {
          name: "ap",
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
          name: "Nd",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "td",
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
      eB = [{
        name: "position",
        type: QB
      }, {
        name: "direction",
        type: QB
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

    function BT() {
      const BB = [{
        name: "entities",
        type: {
          type: "map",
          values: hB
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: CB
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: eB
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
              items: qB
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", xB],
        default: null
      }];
      return BB.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "aT",
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
      }), BB.push({
        name: "uiElements",
        type: jB
      }, {
        name: "environment",
        type: AB
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: bB
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: nB
        }
      }), BB
    }
    const TT = {
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
                name: "dL",
                type: "int"
              }, {
                name: "position",
                type: QB
              }, {
                name: "direction",
                type: QB
              }, {
                name: "easing",
                type: QB
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
    let dT;

    function VT(BB) {
      if (9 === BB) return dT ??= (TB = [{
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
            name: "WU",
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
              type: RB
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
            fields: BT()
          }
        }
      }, TT], JB().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: TB
      }, {
        kO: Object.create(null)
      })), dT;
      var TB
    }
    var yT = dB(35927);
    let pT, lT, JT, YT;
    const gT = 12;
    var oT, kT;
    const LT = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, null, 3, 16, "l", !1, 104, 4, !0, 105, 106, 15, 2, 10, 5, 11, 9];

    function OT(BB) {
      return typeof oT[BB] === LT[5] ? oT[BB] = function(BB) {
        var TB, dB, VB, yB, pB, lB, JB;
        for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
          var YB = 'AZbNUf>;0SXJuB!F]4&~oPCm<|VT)5ve"nLlGi78Hkw_WOzrdI2E/$*({x%DMRqatsgpchQ`jK^6+:=[@,9y3#?Y}1.'.indexOf(TB[JB]);
          if (YB !== -LT[1])
            if (lB < LT[0]) lB = YB;
            else {
              HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
              do {
                HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
              } while (pB > LT[9]);
              lB = -LT[1]
            }
        }
        return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
      }(kT[BB]) : oT[BB]
    }

    function DT(BB) {
      return typeof dd !== LT[5] && dd ? (new dd).decode(new Vd(BB)) : typeof yd !== LT[5] && yd ? yd.from(BB).toString("utf-8") : Jd(BB)
    }

    function uT() {}

    function HT() {
      HT = function() {}
    }
    var ET, vT;
    HT(oT = {}, kT = ["<Sq;pzrl7B2@`VnGum:e(Q7<LS", "aemU#Ovv+0+5~2yL]_Q;6^b?IFi)}F<lqmhV^7RZtS.5{y8&BiVEv*A", 'Zxn"`,//ZM,:6Q,T;U<IczJ$$ts{dNykaNa+UG=L)PbT3r%kRi/5[(Q%0X', 'Az^"rQ+%UtCsj`AG&a|v>(D6rPF%yQ3L', '+mL"YnfZ', "[DR;jL;$Z&|((%f<64X6AG1k_{[a[Ql|z`Z6zcyBAxdP=|*)", "3K3^,qKZ", "9|1Eri2/9*d)|UYH", '@J]**9bGKo{QeNyH0"">Y2v&@S"(JVpi^q8UPyI6Zxi', 'J`<TF^rZ9a[z<r8eoF4EeK4Bf~153yjVbu"v32:EP%8+;N1)ezN', "PMwjSGt^=0wl_7Xoje{*sM&0!go%S]{)Ocr>D%JZ0BLddDVkeZ", "}0hVOc6aU", "ouUXPy|~lx!maQPT(EF>Iaz&`%e[}`Q<_e*;v", ',!CU62##@uy"f])ladZ>Vy^<wD5%QIq<B`VToyN$6D!X]y.Cks8IY7>&Jo', '>xD"u?9<5q7)F!&LJ`i;7{;Z', "U*K0nrE6AgGX2|x5;_jSA^<^<oJc}GHeWVG^1=6k8B[INQH7CzZ", "kV|=!hO;I*qIyb;|lc+$QdA", "e_p:z%Y55g:IDQG73QIEv", "AMhXQ[z%FPLh@d^7{*$;Jd/zwq+GKU4H=A", "hi1*w6@%o*Y^dT><lubE]+o?9*e/F!i<[qN", "C`~5wRJkt&Lj2B#kJc[KtGJ|S%/+`%Av`EXEnRA", '!Ml"2cIZW4N*Z', 'aK*;h[`;#B`FGTJ~85T"3Ou/EuCLLB;', "LmdI9=`k_{=JZ3O~Ua#2@yhmrP", "L5G:WiW<z{},Wrsm]u)^67b?DJS]WTawj>mS", '"HZE:he5$*Yu#U(5em^EjGl6"M:z1dl|}Eb5)/A&q$SmE9B', "[i$XWQOZD0)q{yNi}qa+Jh7/wqO<p9CkFz~5oH3<Tqp@KI(L8>b", "IS#`86M%suw", "Io8KFqFZ9~rDVf", "Dd5^G@YxjB_hVf[V*H1>,`7<&S>9:<vwOVZEE%qv;", "SV32Sd?</~%JzBhvuIe//8Z,b*g{/Na5+EK>SdQz;", 'o`w"fh#B/BlN<rN4nHQ`ULTkZg=0sj#)Oc$^,+~,ISZ6>RA&', "[QC/&,HGngM@]Dv5kiyf,Gwt>XhFY!piysr))rob", "9KZ6v`hx5Dbv%iTm", 'oocXF,wvauO+WUQ~u_%0O6l5Fu1,m!"m!"u^P`>&~MwNZ', '[{"6[yN|7%u%UT4V1Dn>', "7>6f&,f$AFk4qBzVMe4vvr=<U", ':eeUj[LG"aC40`J7;xk6!(^>=&*UuFu', "*x7;e/x5)Pd!3FX~hEY*?+A", '8c:VX+"<1!H@aT.l', ',!~"%Lr;=J7', "|cM:!2$BguZ]Z", "xEbESG8;DqtasU", "Lx|vP+tzrPuB=|%5[Q|Tpz1;3B1~uNw|mzCK/8V<=0}tTVLvSup$}r)v=&", "OH]nf$pZ[{dUE!V)rxrS", '.dveHrF~7%lj"yav+i[S&', "6Dm/`[5~uDp&8%dVyEQSMEC<Lu", "Puy$kRI~sSH!X,!", "Ua|va%.zuDy:?!)v&`:)[xKkOqGj)Utm:EI>EE6;qDU*cN", "?!a/AL`hW{Ggmb07KoAvk{LbUBHeLf,8nxZTYy>GA&bB8QB8q)b", 'n_|TAGaBAadh<N"ixc~j,OQ^$~<[ff', "Gca/xzr#.q;oHDOT$dASf(gv2u1|(!&Tkxm/yD!/f*4>zIl&lVkvUMA", "cK0Su^YkusV(hd/H2uO^Iigu&MI", '6Ok"_Q$BE*>RA8X', "F`Bek*;;R!", "zql5pz]0/*_eo`O~!I+`YyianS0d7B2Lhc}Kpj~kI*zX/N{5yKMX", "V5VEIEt%E~?GMDB80znTz:}uUB&Nx]Rl", "F*m/dc!GASvjPdH&?d`>WlZ~6oJEoT$)zEP^_iA@A&", "7ctK+(@/9M@Fghv5;u#V=xtuGSyQ~r+V<sk>", "Z_H*=dr~qJqUh<tGex]vkrBk{%KIzICLrem+Ynq>P~nh,@f<%m3^n#HHf", '>aFSlR*^j%sKq%~LMcT:F7u%IakPPG"&}sZ', "=Q}IL=EZ[0", 'LmRXw@UwqD%QQhZ<>c%"q8m~OP3{LRX|=>O(T=U0sFO)+y(k=A', "AI(IQ^m$VoP+*B55qsF>", '&`j*?2bG(%um&ix)g)l"+d65>', 'gc5^"D<0N*#CQh54|seI"=^&0%uo(!+|0ce)@GYx6q2<0N', "6q;/[(t@1s~6Dy.56Eb", '/o4=zQir]gXL:MQ7/xU(>Mg<h*>9>i"vlMq)J?=H_4DI{ysG%q8+F2A', "j{^5`2Kh<%Sv9,>7h*NX#OSkK%;66y`&#N]nLRrZ", "w`PXsdia*%%/(Qmk7M]Ek{H%2S[0B]biBUaIr8ylqJ}~/N", 'niv(:xsxz$n!$j+VF`o5G6QunMIJ#G6|MsGXqMIryxZR`Q&L~M%"V', "k_#2V=0zd&XS|dq4Lm60", 'A5ITvRY;!a?Z8!|w0mZ=9yh;N~::)]"v(d7;|x0%xoB9[!vw', "kqk>NLU<4*Y^(y5mvL]>Cx?/MJ9JsGf_/A", 'z>J:|y~ZUBl+5feiv^mKLD~5ePden]#L%LX"r9`kESG[(N$l', ",|5^_9o0AgbvSMbifanjX?i;q$zq!fX~NP]=D8!/7B`CcT|k&Z", "eum/[yZ~606QC!h7piRe9xA", "yDZE972v)D`Usdu", 'UxJ^C#t^l~6JB]N&X"+^@`&<3t>*:jZ4uac;8I/vz$1~$]u7gOzU~', "}dZv*8%%.q/", "sqB^?7#m>%6Fm7sm!udS^,9/ToCo1dU_l>x*oH45So", 'd>dKmx=z*%cPBGL&,|#;i@4rMD0S"Tf<GM0SR$1kotN*T2RGBFB;uy0v_47', '[|!e*9Ja"g<%vI%G!it*XhkZ', "1qietz4hx4rUoFUv&M2:J2A", "$x)X!^N~@FpKA", '+c&"q%3<[{^&m2YCy8):0M"tNSUBZ', "7V7+>q<?/t35=|b&1d:`cG>wvDi", '~a"Sg3Lb', "mxYKnKRZ", 'xcl"x:&b', "lj+>cFwM", "P4%!>", "x>GW?Nk7", "JJu4_", "<:DRwmH[", "&18[?.gr", "4b{,K_HH", "=3SAj9@M", "L]Uk!n?C", "q/oZo5aC", ")Dn>~*fl", "`wC@sr0M", "%.|y{6Ub", "zSNHx", "GQ5&", "_Q|yA1tb", "OS%a", "/RMS3.@b", "`Qkc)[:b", "jC$v", "*>AD", "HCrQ+L>&", "gkEFdIH5"]), HT(Td = function() {
      var BB, TB, dB, VB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      HT(BB = void 0, TB = []);
      try {
        HT(BB = Object, TB[LT[11]]("".__proto__.constructor.name))
      } catch (Vd) {}
      BB: for (dB = LT[0]; dB < VB[LT[4]]; dB++) try {
        var yB;
        for (BB = VB[dB](), yB = LT[0]; yB < TB[LT[4]]; yB++)
          if (typeof BB[TB[yB]] === LT[5]) continue BB;
        return BB
      } catch (Vd) {}
      return BB || this
    }() || {}, dd = Td.TextDecoder, Vd = Td.Uint8Array, yd = Td.iD, pd = Td.String || String, ld = Td.Array || Array, Jd = function() {
      var BB, TB, dB = new ld(128);
      return HT(BB = pd[LT[8]] || pd.fromCharCode, TB = []),
        function(VB) {
          var yB, pB, lB, JB;
          for (HT(pB = void 0, lB = VB[LT[4]], TB[LT[4]] = LT[0]), JB = LT[0]; JB < lB;) HT(pB = VB[JB++], pB <= 127 ? yB = pB : pB <= 223 ? yB = (31 & pB) << LT[7] | VB[JB++] & LT[6] : pB <= 239 ? yB = (pB & LT[27]) << LT[10] | (VB[JB++] & LT[6]) << LT[7] | VB[JB++] & LT[6] : pd[LT[8]] ? yB = (pB & LT[9]) << 18 | (VB[JB++] & LT[6]) << LT[10] | (VB[JB++] & LT[6]) << LT[7] | VB[JB++] & LT[6] : (yB = LT[6], JB += LT[18]), TB[LT[11]](dB[yB] || (dB[yB] = BB(yB))));
          return TB.join("")
        }
    }()), OT(87) in uT && function() {
      var BB = function(BB) {
        var TB, dB, VB, yB, pB, lB, JB = LT[0];
        for (HT(TB = {}, dB = LT[0], VB = LT[0], yB = LT[0], pB = BB.length), lB = LT[0]; lB < pB; lB++) {
          var YB;
          for (HT(TB = {}, dB = LT[0], VB = LT[1]), YB = lB + LT[1]; YB < pB; YB++) BB[lB].x !== BB[YB].x || BB[lB].y !== BB[YB].y ? (TB[yB = BB[lB].y === BB[YB].y ? Number.MAX_SAFE_INTEGER : (BB[lB].x - BB[YB].x) / (BB[lB].y - BB[YB].y)] || (TB[yB] = LT[0]), HT(TB[yB]++, dB = Math.max(dB, TB[yB]))) : VB++;
          HT(dB += VB, JB = Math.max(JB, dB))
        }
        return JB
      };
      console.log(BB)
    }(), (() => {
      function BB(BB) {
        return typeof oT[BB] === LT[5] ? oT[BB] = function(BB) {
          var TB, dB, VB, yB, pB, lB, JB;
          for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
            var YB = '=CMhcgkDIpWfS&`46N"Rx8~LUO>*sB7P#%/vJ_bmE?(q$Q0a{d5[ij@nK,<ywY1uet^V.F!rGl3Z}A;|To2+9zH)]X:'.indexOf(TB[JB]);
            if (YB !== -LT[1])
              if (lB < LT[0]) lB = YB;
              else {
                HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                do {
                  HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                } while (pB > LT[9]);
                lB = -LT[1]
              }
          }
          return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
        }(kT[BB]) : oT[BB]
      }
      OT(LT[14]), LT[20];
      const TB = LT[19],
        dB = OT(89) + BB(90) + BB(LT[12]),
        VB = [LT[0], LT[1], LT[28], LT[18]].map((BB => {
          let TB = LT[0];
          for (let VB = LT[18]; VB >= LT[0]; VB--) {
            function yB(BB) {
              var TB, dB, VB, yB, pB, lB, JB;
              for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
                var YB = ';t7wD4E5%.HC/0MJ:Iv,h1}>2j+@s_#gc&d!Tnp?kzq9S)=NBA|bGWx[*VQ(f]"`y{FXu3PK8i6LeURaO^~rYZl<$om'.indexOf(TB[JB]);
                if (YB !== -LT[1])
                  if (lB < LT[0]) lB = YB;
                  else {
                    HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                    do {
                      HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                    } while (pB > LT[9]);
                    lB = -LT[1]
                  }
              }
              return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
            }

            function pB(BB) {
              return typeof oT[BB] === LT[5] ? oT[BB] = yB(kT[BB]) : oT[BB]
            }
            TB = TB << LT[2] | dB[pB(92) + pB(93)](BB * LT[23] + VB)
          }
          return TB >>> LT[0]
        })),
        yB = (BB, TB) => (function(BB) {
          return typeof oT[BB] === LT[5] ? oT[BB] = function(BB) {
            var TB, dB, VB, yB, pB, lB, JB;
            for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
              var YB = '&u[L7<f261PcB|K0hn,DE8tbQAvUM~kN=VHew%x@o?;GO{TW5lp`(+*!SI>iq$a:J_#9dyXz^}g./RZ3mC"sj]r4FY)'.indexOf(TB[JB]);
              if (YB !== -LT[1])
                if (lB < LT[0]) lB = YB;
                else {
                  HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                  do {
                    HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                  } while (pB > LT[9]);
                  lB = -LT[1]
                }
            }
            return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
          }(kT[BB]) : oT[BB]
        }(94) in uT && function() {
          function BB(BB) {
            var TB, dB, VB, yB, pB, lB, JB, YB = 'dHr<Jw)eVbvxp%8u`ygX"PAUa#M=z3l?,$^/o]i1BWjStF4*L[(!2ITK~DCE@>0nZRh{Yk_.sO5+69:7G&}c|f;QNmq';
            for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
              var gB = YB.indexOf(TB[JB]);
              if (gB !== -LT[1])
                if (lB < LT[0]) lB = gB;
                else {
                  HT(lB += gB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                  do {
                    HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                  } while (pB > LT[9]);
                  lB = -LT[1]
                }
            }
            return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
          }

          function TB(TB) {
            return typeof oT[TB] === LT[5] ? oT[TB] = BB(kT[TB]) : oT[TB]
          }
          const dB = require("path"),
            {
              version: VB
            } = require("../../package"),
            {
              version: yB
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: pB
            } = require("@redacted/components/package"),
            {
              sdkVersion: lB
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), dB.resolve(__dirname, TB(95) + TB(96) + "js")
        }(), BB << TB | BB >>> 32 - TB),
        pB = (BB, TB, dB, VB, pB) => {
          HT(BB[TB] += BB[dB], BB[pB] = yB(BB[pB] ^ BB[TB], LT[19]), BB[VB] += BB[pB], BB[dB] = yB(BB[dB] ^ BB[VB], LT[10]), BB[TB] += BB[dB], BB[pB] = yB(BB[pB] ^ BB[TB], LT[2]), BB[VB] += BB[pB], BB[dB] = yB(BB[dB] ^ BB[VB], LT[9]))
        };
      YT = (dB, yB, lB, JB) => {
        function YB(BB) {
          return typeof oT[BB] === LT[5] ? oT[BB] = function(BB) {
            var TB, dB, VB, yB, pB, lB, JB;
            for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
              var YB = 'uMbXaC=AH?&BY$/QD7_Fk5U`^v:w3xG8yVfJ]%tPL;,e}E@9ljT#zKS6n"d(Rh40p!O|Wgm.>Z1+{c)<o[2Ns*qri~I'.indexOf(TB[JB]);
              if (YB !== -LT[1])
                if (lB < LT[0]) lB = YB;
                else {
                  HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                  do {
                    HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                  } while (pB > LT[9]);
                  lB = -LT[1]
                }
            }
            return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
          }(kT[BB]) : oT[BB]
        }
        BB(97) + LT[20] in uT && function() {
          function TB(BB) {
            var TB, dB, VB, yB, pB, lB, JB, YB = 'uclKBtkYfnjIC9(,vJaGsQ:%AHdi^}m1&5Lr3?RWhV=8ED#M@!;>"z~weO*.<7q+U2X_S{`xZ]/[o)bF$6N4P0Tgyp|';
            for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
              var gB = YB.indexOf(TB[JB]);
              if (gB !== -LT[1])
                if (lB < LT[0]) lB = gB;
                else {
                  HT(lB += gB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                  do {
                    HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                  } while (pB > LT[9]);
                  lB = -LT[1]
                }
            }
            return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
          }

          function dB(BB) {
            return typeof oT[BB] === LT[5] ? oT[BB] = TB(kT[BB]) : oT[BB]
          }

          function VB(BB) {
            const TB = {};
            for (let dB of BB.replace(/[^w]/g, "").toLowerCase()) TB[dB] = TB[dB] + LT[1] || LT[1];
            return TB
          }

          function yB(BB, TB) {
            const dB = buildCharMap(BB),
              VB = buildCharMap(TB);
            for (let yB in dB)
              if (dB[yB] !== VB[yB]) return LT[21];
            return Object.keys(dB).length !== Object.keys(VB).length ? LT[21] : LT[24]
          }

          function pB(BB) {
            return lB(BB) !== 1 / 0
          }

          function lB(BB) {
            if (!BB) return -LT[1];
            const TB = lB(BB.left),
              dB = lB(BB.right),
              VB = Math.abs(TB - dB);
            if (TB === 1 / 0 || dB === 1 / 0 || VB > LT[1]) return 1 / 0;
            return Math.max(TB, dB) + LT[1]
          }
          window[BB(98) + BB(99) + dB(100) + "_"] = {
            buildCharacterMap: VB,
            isAnagrams: yB,
            isBalanced: pB,
            getHeightBalanced: lB
          }
        }();
        const gB = new DataView(yB[BB(101)], yB[YB(102) + YB(103)], gT),
          oB = new Uint32Array(TB);
        HT(oB[YB(LT[22])](VB), oB[YB(LT[22])](dB, LT[23]), oB[LT[15]] = gB[YB(LT[25]) + YB(LT[26])](LT[0], LT[24]), oB[LT[16]] = gB[YB(LT[25]) + YB(LT[26])](LT[23], LT[24]), oB[LT[27]] = gB[YB(LT[25]) + YB(LT[26])](LT[2], LT[24]));
        const kB = new Uint32Array(TB),
          LB = new Uint8Array(kB[YB(107)]);
        for (let OB = LT[0], DB = lB; OB < JB[YB(108)]; OB += TB * LT[23], DB++) {
          function uB(BB) {
            var TB, dB, VB, yB, pB, lB, JB;
            for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
              var YB = '5#&uhxcXEDvpgfUC%_~2r$TH|t>?Ysj[Bw0nmzk@:ed}!]{*6b)G7,NS`RiW/P^(AJ341MV<I9=ylQ+oFL"aKOq8.;Z'.indexOf(TB[JB]);
              if (YB !== -LT[1])
                if (lB < LT[0]) lB = YB;
                else {
                  HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                  do {
                    HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                  } while (pB > LT[9]);
                  lB = -LT[1]
                }
            }
            return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
          }

          function HB(BB) {
            return typeof oT[BB] === LT[5] ? oT[BB] = uB(kT[BB]) : oT[BB]
          }
          HT(oB[LT[10]] = DB, kB[HB(109)](oB));
          for (let vB = LT[0]; vB < LT[29]; vB++) HT(pB(kB, LT[0], LT[23], LT[2], LT[10]), pB(kB, LT[1], LT[30], LT[32], LT[15]), pB(kB, LT[28], LT[7], LT[29], LT[16]), pB(kB, LT[18], LT[9], LT[31], LT[27]), pB(kB, LT[0], LT[30], LT[29], LT[27]), pB(kB, LT[1], LT[7], LT[31], LT[10]), pB(kB, LT[28], LT[9], LT[2], LT[15]), pB(kB, LT[18], LT[23], LT[32], LT[16]));
          for (let mB = LT[0]; mB < TB; mB++) kB[mB] += oB[mB];
          const EB = Math[HB(110)](TB * LT[23], JB[HB(111)] - OB);
          for (let iB = LT[0]; iB < EB; iB++) {
            function NB(BB) {
              var TB, dB, VB, yB, pB, lB, JB;
              for (HT(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = LT[0], pB = LT[0], lB = -LT[1]), JB = LT[0]; JB < dB; JB++) {
                var YB = 'ub5cN~GFM|@zLQ%t1l<pJh+)O7V!X3n^R2DPgj86T,{[}CiBr40*H/E$?WZYS`>Kvm_a"#=U&fky]we9A:o.(Ixd;sq'.indexOf(TB[JB]);
                if (YB !== -LT[1])
                  if (lB < LT[0]) lB = YB;
                  else {
                    HT(lB += YB * LT[12], yB |= lB << pB, pB += (lB & LT[13]) > LT[14] ? LT[15] : LT[16]);
                    do {
                      HT(VB.push(yB & LT[3]), yB >>= LT[2], pB -= LT[2])
                    } while (pB > LT[9]);
                    lB = -LT[1]
                  }
              }
              return lB > -LT[1] && VB.push((yB | lB << pB) & LT[3]), DT(VB)
            }

            function tB(BB) {
              return typeof oT[BB] === LT[5] ? oT[BB] = NB(kT[BB]) : oT[BB]
            }
            tB(112), JB[OB + iB] ^= LB[iB]
          }
        }
      }
    })();
    const mT = [1, "b", 0, "h", "c", 137, 221, 67, 6, 58, 8, 255, "length", 43, 25, "d", "undefined", void 0, 2, 3, 63, "fromCodePoint", 7, 12, "push", 189, 5, 78, "g", "f", 4, "e", 11, 9, "j", "i", 184, 91, 8191, 88, 13, 14, 231, null, 222, "a", 234, 134, 236, 39, 218, 127, 128, 199, 105, 249, 235, 69, 178, 81, 64, 82, 230, 100, 142, 80, 143, 223, 68, 51, 65, 101, 217, "js", 248, 149, 115];

    function iT(...BB) {
      return BB[mT[12]] = mT[0], typeof dd !== mT[16] && dd ? (new dd).decode(new Vd(BB[mT[2]])) : typeof yd !== mT[16] && yd ? yd.from(BB[mT[2]]).toString("utf-8") : Jd(BB[mT[2]])
    }

    function NT() {}

    function tT() {
      tT = function() {}
    }
    tT(ET = {}, vT = ["E[b~Ek|Ce", "6tQ,1sjHmIYgNM", ":=[7p]oBaNn<kMOAoEBJ?bbf+qD2V|TVteNgc{bcJ", "B0c,ImjH=yH}{2e4c[wv5woCcw(j<<68JZW6E$>", 'RPs,xPUM{gc,b<|k"toe~D+bm)4;t|($CbYCB/N8ZII8H', "M=jvB{rKdD1lrD9,rUlF~}#oHgfnaXs,ev[L,3QDJ)GCqA6u*|3EN])f%aX", "s[M`ys1B`l+l^[qEhPgC4]]7QaJ,ft", 'f[+/HVyZt=C:InsEXP.eYs1YGyLE:p[k)o&+CnJJ/"`S`pXZ]S]0$*#*u"7', "3aERHmVZ&a0<Z2_1uwNOXP/KS2(.ykxQxl{R{c8yYRzX%1gVhPu^(PWJ8Dm|>", '_~<u~"$$t', '`zjRA5T`0o3sPp"Q', ")un/fAMXQo?eys/,8{:7GbF4Q2*Yn,Vutr7v,", ']Uo7e.j:>"eUdGg0Cw]G<cuTsNMFVk^l+[}YHm*C+fj|qho^r{w.|s>', "3Vl~N<gH", 'vrlFLm"~cgXDT|RUaES+wwuyQlg1Km0AFlZ+,PTJHN4n|K6yLt[J&kZI;U0', ">$n=q]HKJ)|!B8!^SeVE}o)40aSth;|[kUP]8k{X~wQoGmM4Qls+Dw:%G", 'IoP7A`XYw.S{`tAu;=.bYArIYL@"Knu^>!jv|n=BQo`B|85Q"[Q;R(>', "UBUuUPXMqDrl%;$y>/.b#OT`m=u<#<p", "]po7@TH86o^<2}trJ=%~3zeAMg>}/n?,W2_YGL<J`5u,[ewQ5=+^83b^Rl", '/~.RCw<K".KWNsDQubvu}A>', "<nX`S#[JK2:][8mcqbqLV=rH", "XBeb~BeA!IvD+Pmd<{U?>L$7LK{6ZkGyM!Kbhc;^@DTX)Nhv[IBeYbpDe", "|oqJd3qy*f{+Zpgu,:(CR(mB;aCcJ0%yY{Q+)DOJV)sX%;iyeI6=X", 'OwX`37fM=yecmZ10]p$/86_Z"4qRiPK', "w=9vEP*7l!(weVOl;5V^fAqT+!+n1T>:W5M", "Ggg=P.P%bS,;:kCk4=9sobm$0a:~hwI:p/D+aB{BYa}B>P)X#V^J", "nal^)Vk^OgqcQKU$Q$|PQ|CQ+Nw?d0BVN~{.Hmt@F494K1~,c~W6y", "Q0CLs?>^wSk6L|Vycwbv6wU#e)2", "+{IY^hp7BNP4hX3Zy$f?w;dD=yuWO1q%1BQ,5mx#}f?*&/mE&afJl", "LpL/?nqK`5#?C[lU2=`Y19vJ~))2:p,:0H", "7taCr}XBRlx(TkI:cNJ7m<<J?.94KmdEn>", "H!mP(7>", "+~{P^FYY3K_8shLZw=A?pobb`SAWRM", 'ccoJ49z<".eWfm&EiuV7C.}XxKD2CGsEN/YC:<SH#Kq;5AYyC+1CYw[<e', '^fO`^=dA8lL6>;Ml{EIC".fAOgupL|^Aoo0~?]VI2a|?N9YyxU0+xP_ZC', 'MNM~_92TLKj!Js%8p$+g$}8ZEqgn>t2%Wu`YETt"OI>^W0{l2{H', "{oVEjb@ZN!~SW0A^", "XU)C0Fg<]o}8+t", '}~KL+2NKxU%X1TMX>N"7fspD[=7ERGj[n=Vg%=]#e', "v[~+%[t<ty!6,s>XpH", "?[.bvT:.rUw", "@p2YV3CB:D_jJNZlEPiLXP(ZJ", 't"s+5c3W%lgC5t_cf{u^1b&bbps*4[_Z(n{0X', 'N+t+/~~vz5"6{;Y4', 'LIKL1LwX1wklW|Q8pI|uam^Xp",', "g+=J|w>", "LUQ;I|d#M=l<jp@ZTo!~1s=BLD6?9TGu}cJghWq%+gjSj}M4+n:/~}>", "CIV7JW=^}f$RGmyc|nmu~`}7WwVpXtUcI>", ",N0`X2ZTo5pa%eJ4K[2+dI%J*4]H`|q$N0o]&zqyeyLeb8LcPoF7N(<vCR", "Z:mG*Ag.qK+l{Nvl;~BL=D>", "jEk]chV(e)zLhX.EzcA?hWSHL)+u6A]yAPXC,kVTr5o|<XEv", "JBv7CLg.Own<}pZ^&YBLqPRX$D8CHAo^Xw.RjcC#,anl`0V8UbhL,IhTJ", "gPSvI|rI~f>P79hl1gg~?Lw{[KUnL}=$", "kg]Gw.|^>qa+^hMl9uKuV6a~:K&j_(^^gbxCs[/Zjyv;OG", "~a+^:T3%p2k", 'q~M+msNJ;lSUqnR8aoYOj.m*p4]YHw/$4"+=E9IT,ak', ']aVCVTt8"4]*<<xZ"aH', "*u]v}A/%/Nw?Yw=cT$pu*(]f%U/5>t<u", "I{s?|WOyl=}.0(uvwceRIWc^v4fDoKwZr$A?/[{BzYE", "0{V7{w`~&lD6ts&A*ad/75<vng", 'k[We[5S">4(jbpcXefE?Yo|48Dz6>t"l#UWE5Bvy&S@?C}Z42$>g@TQ4|K~uH', ">vu703L:4=N{}(<yybkLsBMDJ", "il{vQ/,(e)3|{XG^)t8=Rn&$l!CTD(Hl}|yvSs`J>!t~>N[8cCgC", ",b>FhDLJlfA!;2xd,gs~OF@%twf{;X+v", "!zM+NP8`~g.", "9[Funmy(4=/uH", "?5AL[Za~@Ul^{t", "*8PE<w<HUK0n,s.,$o~bZh=4ngP*]2gyGZZ;)Az34f>T],aQ]z%,l", "<Q9Yy<>", "ntg`7`&cv4cXU9#clBX~+*l8,2#Akh<[dvgF|(MQK4eDm9=c", 'Izt;4<_Jlw{N9kY0F||g#sg"{=FeTMkXj{LC0', "$~=6Yw=bYR_j7w`0Xv0+`LQ*z2UKiP]VlN>^p", "uthJMnu%o4,;&(^v+~:Ey2]74NJ}0G{4NIM~/`PIgR3v`kxE$r[uT/?vC", "<~3Pb<:T~fS^X2CXw{w?7;x7$Ul;~|Yy3Cm.y2=DJ", 'ifw.po[J""d~{2PyQUH,[hLTpN:WLp%0NH', "2PfRkTvv]2$*^}KyCvZv1s>", "Pa:=IBzH9w&+}(sECg@7mzs7fl.", "st{sz[D*<K?Ap(5Q|:M", "ge569<>", '`luE*(:TYKK:s8>4Fol;c=NyB",aEtolutmvf9WK+N', "fP:7_2Q^#yV]>", "zuEbV}>", ";nSb&9MAkDv<a/V[q~]PrZk)B5Fbyks$ou3bw~7blN[", "B~T65B>", "z~{v`<QB9y", "Wa1gKb7#aIR;m9}E$ty+<nMX?YPBCG{k?{1g~/D4SlHT/ehAdbM", '[0|upb*XmK(B{2R0g"kEn""""NIE;N},', "d+x/89zZS20ab(2%4N8~|Lh<IaEoTpXc~0:6$*>^m=8", "]U,v`Iu(}wvU$PC[)uke", "q{J=d32HOwuU^Gr065^uCodBjy]?a[N0R4R+=B6<CRFA?;(,QCM", '!~7LH#s4o"AW%eU,7~H', "OfM+Im<~FY", "$aYO}7!C7)m5hn@d2=|ERk(Z$l", "5oqb7DI`JK", "62:F@PyZBN]/0(P[0+R;2W=^jf%2UN&E/PAul", '::Q`[/j:"N)EC(UE52xg;w*DH!r*1N%06a:67`<:)fm41PY', "d:2.^FsB%puWu90QHe2?r`N.*gR`2NjA00{RL.M4,oGCP|:%]lt", "WEGJ~[X^~f&jze>r9cTEOP>", ";2y;WIeY^!W5I;hl!{9v0k;BgDmNupI:4H", "?U+=T/)#A)z7^/fUq$g^LcQMZ).79kZ4:=@=t#9J*wVoH", "Z:^e+Z]BqDc", "i[<P92*fG", 'htH`d<F$h2P|p("ljCwvHA5^XaU]>', "(5ebU9RBB4;+gAs$#l:/JL>", 't"LCvZ*f/N8~ft{lBPT/`b74c"8nt}|X!=wuCc_%fatM(XOXFolC', "7aqbS9]$O=4}|8~$7Cou@z~H", "9po7Rk+*6lAW>", "zPw.^$J(iY{ZK;)^%{~RVhWKsI?(*9DE(8!+B/jIGy]4Lp{ku=QvMcGyjgc", "ev)6!nZJ^4d}*P@vV[ug?<b78on2Vk$kVotG", ">$%,c{*fQpyD,s>Q5C]G;(!CgD.6cMx%?C8,&O?J,oLE>t9EFcoJ", "7ukE}FI3]pSL_nS06lb+|cnMCL7*hK9$_oUvT}xbgLg`Ms,vkw|POhUM", "J:}+l7pYKq`v~pdcA{H", 'J:9G?s)XJ)nlF<y%}~qL"ca:}=?8<;>4k0)C', "fB1~,I2:C", '"=s~(9oM', "Z84(5cpZ", "uZ`r^!iEuGN", "3sLBsD909H*", "{i`rvnYX2S[", "{i<%U!G{Q0", "[Z2m|?g0Ff+q5Cfz", ",t1>_j%Re90$wD9j", "TA^:<=[=i969hEl<", "u0&FU;WoJ0n:Z|4H", "{oz>|?70jr3:bsA", "e]CLN%Qa", "SPO^&kcE", "vP<f8MHV", 'Ah"{%4]v', ",%>lIt7V", ",f1Lk4Ka", "t0b)RRr/f4m", "MVefU$0a", "L{Q/2F8)", 'eA5"q%==', "[V`Y`!9k", "9iNjtzEk", "n,g}ZzTk", "VimX", "ii^sczfk", "z(Y7P", "Di)V%7^", "Di40+/Ck", "ri%X", "G&/b;10a", "D_Zm&kwE", "Wr)Lb;aa", "SMu0`c6m", "~Vz4Byd)", "o~ro[@hDoq", "t[RLp/Um", "AO|H", "v~nH6", "/TBH", "|[fogGR", "32.#=Yf;", "9MI<.XUm"]), tT(Td = function(...BB) {
        tT(BB[mT[12]] = mT[2], BB[mT[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], BB[mT[0]] = mT[17], BB[-mT[13]] = []);
        try {
          tT(BB[mT[0]] = Object, BB[-mT[13]][mT[24]]("".__proto__.constructor.name))
        } catch (vT) {}
        BB: for (BB[-mT[14]] = mT[2]; BB[-mT[14]] < BB[mT[15]][mT[12]]; BB[-mT[14]]++) try {
          for (BB[mT[0]] = BB[mT[15]][BB[-mT[14]]](), BB[mT[3]] = mT[2]; BB[mT[3]] < BB[-mT[13]][mT[12]]; BB[mT[3]]++)
            if (typeof BB[mT[0]][BB[-mT[13]][BB[mT[3]]]] === mT[16]) continue BB;
          return BB[mT[0]]
        } catch (vT) {}
        return BB[mT[0]] || this
      }() || {}, dd = Td.TextDecoder, Vd = Td.Uint8Array, yd = Td.iD, pd = Td.String || String, ld = Td.Array || Array, Jd = function(...BB) {
        return tT(BB[mT[12]] = mT[2], BB[mT[25]] = new ld(mT[52]), BB[mT[0]] = pd[mT[21]] || pd.fromCharCode, BB[mT[18]] = []),
          function(...TB) {
            for (tT(TB[mT[12]] = mT[0], TB[mT[0]] = mT[17], TB[mT[1]] = mT[17], TB[mT[19]] = TB[mT[2]][mT[12]], BB[mT[18]][mT[12]] = mT[2]), TB[mT[15]] = mT[2]; TB[mT[15]] < TB[mT[19]];) tT(TB[mT[1]] = TB[mT[2]][TB[mT[15]]++], TB[mT[1]] <= mT[51] ? TB[mT[0]] = TB[mT[1]] : TB[mT[1]] <= mT[67] ? TB[mT[0]] = (31 & TB[mT[1]]) << mT[8] | TB[mT[2]][TB[mT[15]]++] & mT[20] : TB[mT[1]] <= 239 ? TB[mT[0]] = (15 & TB[mT[1]]) << mT[23] | (TB[mT[2]][TB[mT[15]]++] & mT[20]) << mT[8] | TB[mT[2]][TB[mT[15]]++] & mT[20] : pd[mT[21]] ? TB[mT[0]] = (TB[mT[1]] & mT[22]) << 18 | (TB[mT[2]][TB[mT[15]]++] & mT[20]) << mT[23] | (TB[mT[2]][TB[mT[15]]++] & mT[20]) << mT[8] | TB[mT[2]][TB[mT[15]]++] & mT[20] : (TB[mT[0]] = mT[20], TB[mT[15]] += mT[19]), BB[mT[18]][mT[24]](BB[mT[25]][TB[mT[0]]] || (BB[mT[25]][TB[mT[0]]] = BB[mT[0]](TB[mT[0]]))));
            return BB[mT[18]].join("")
          }
      }()),
      function(...BB) {
        return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = function(...BB) {
          for (tT(BB[mT[12]] = mT[0], BB[mT[0]] = '>HMteGCJYgRSfKpN1l4yUqd:X80,Ev^u+OcZA[kV$%QrizBTn/s~7.=L5ID2who")a!j{<|P;6b`]?FW*(}9m3#@x_&', BB[mT[1]] = "" + (BB[mT[2]] || ""), BB[mT[4]] = BB[mT[1]].length, BB[-mT[9]] = [], BB[mT[7]] = mT[2], BB[mT[8]] = mT[2], BB[-mT[6]] = -mT[0]), BB[mT[3]] = mT[2]; BB[mT[3]] < BB[mT[4]]; BB[mT[3]]++)
            if (BB[-mT[5]] = BB[mT[0]].indexOf(BB[mT[1]][BB[mT[3]]]), BB[-mT[5]] !== -mT[0])
              if (BB[-mT[6]] < mT[2]) BB[-mT[6]] = BB[-mT[5]];
              else {
                tT(BB[-mT[6]] += BB[-mT[5]] * mT[37], BB[mT[7]] |= BB[-mT[6]] << BB[mT[8]], BB[mT[8]] += (BB[-mT[6]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                do {
                  tT(BB[-mT[9]].push(BB[mT[7]] & mT[11]), BB[mT[7]] >>= mT[10], BB[mT[8]] -= mT[10])
                } while (BB[mT[8]] > mT[22]);
                BB[-mT[6]] = -mT[0]
              } return BB[-mT[6]] > -mT[0] && BB[-mT[9]].push((BB[mT[7]] | BB[-mT[6]] << BB[mT[8]]) & mT[11]), iT(BB[-mT[9]])
        }(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
      }(114) + "E" in NT && function(...BB) {
        tT(BB[mT[12]] = mT[2], BB[-mT[27]] = function(...BB) {
          if (tT(BB[mT[12]] = mT[0], BB[mT[26]] = BB[mT[2]].length), BB[mT[26]] < mT[18]) return mT[2];
          if (tT(BB[mT[1]] = Math.max(...BB[mT[2]]), BB[mT[19]] = Math.min(...BB[mT[2]])), BB[mT[1]] === BB[mT[19]]) return mT[2];
          for (tT(BB[mT[30]] = Array(BB[mT[26]] - mT[0]).fill(Number.MAX_SAFE_INTEGER), BB[mT[31]] = Array(BB[mT[26]] - mT[0]).fill(Number.MIN_SAFE_INTEGER), BB[mT[29]] = Math.ceil((BB[mT[1]] - BB[mT[19]]) / (BB[mT[26]] - mT[0])), BB[mT[28]] = mT[2]), BB[-mT[27]] = mT[2]; BB[-mT[27]] < BB[mT[26]]; BB[-mT[27]]++) BB[mT[2]][BB[-mT[27]]] !== BB[mT[19]] && BB[mT[2]][BB[-mT[27]]] !== BB[mT[1]] && tT(BB[mT[28]] = Math.floor((BB[mT[2]][BB[-mT[27]]] - BB[mT[19]]) / BB[mT[29]]), BB[mT[30]][BB[mT[28]]] = Math.min(BB[mT[30]][BB[mT[28]]], BB[mT[2]][BB[-mT[27]]]), BB[mT[31]][BB[mT[28]]] = Math.max(BB[mT[31]][BB[mT[28]]], BB[mT[2]][BB[-mT[27]]]));
          for (tT(BB[mT[33]] = Number.MIN_SAFE_INTEGER, BB[mT[34]] = BB[mT[19]]), BB[mT[32]] = mT[2]; BB[mT[32]] < BB[mT[26]] - mT[0]; BB[mT[32]]++) BB[mT[30]][BB[mT[32]]] === Number.MAX_SAFE_INTEGER && BB[mT[31]][BB[mT[32]]] === Number.MIN_SAFE_INTEGER || tT(BB[mT[33]] = Math.max(BB[mT[33]], BB[mT[30]][BB[mT[32]]] - BB[mT[34]]), BB[mT[34]] = BB[mT[31]][BB[mT[32]]]);
          return BB[mT[33]] = Math.max(BB[mT[33]], BB[mT[1]] - BB[mT[34]]), BB[mT[33]]
        }, console.log(BB[-mT[27]]))
      }(), (() => {
        function BB(...BB) {
          return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = function(...BB) {
            for (tT(BB[mT[12]] = mT[0], BB[mT[45]] = '~aEtFSARJrlhoXZsI0wH<Tn3+BC>]@{&L,zj"?|_=xcPU/W^Mm1$N9fb8*[Qi(GY2V.)!4;kqKdv:%Oe`D}p#75gu6y', BB[mT[18]] = "" + (BB[mT[2]] || ""), BB[mT[4]] = BB[mT[18]].length, BB[mT[15]] = [], BB[mT[47]] = mT[2], BB[-mT[48]] = mT[2], BB[mT[28]] = -mT[0]), BB[mT[3]] = mT[2]; BB[mT[3]] < BB[mT[4]]; BB[mT[3]]++)
              if (BB[-mT[46]] = BB[mT[45]].indexOf(BB[mT[18]][BB[mT[3]]]), BB[-mT[46]] !== -mT[0])
                if (BB[mT[28]] < mT[2]) BB[mT[28]] = BB[-mT[46]];
                else {
                  tT(BB[mT[28]] += BB[-mT[46]] * mT[37], BB[mT[47]] |= BB[mT[28]] << BB[-mT[48]], BB[-mT[48]] += (BB[mT[28]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                  do {
                    tT(BB[mT[15]].push(BB[mT[47]] & mT[11]), BB[mT[47]] >>= mT[10], BB[-mT[48]] -= mT[10])
                  } while (BB[-mT[48]] > mT[22]);
                  BB[mT[28]] = -mT[0]
                } return BB[mT[28]] > -mT[0] && BB[mT[15]].push((BB[mT[47]] | BB[mT[28]] << BB[-mT[48]]) & mT[11]), iT(BB[mT[15]])
          }(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
        } [][mT[12]] = mT[2];
        const TB = mT[33],
          dB = BB(116) + BB(117) + BB(118) + BB(119),
          VB = {
            [mT[33]]: BB(120) + BB(121) + BB(122) + BB(123) + BB(124)
          },
          yB = (...TB) => {
            TB[mT[12]] = mT[0];
            const dB = VB[TB[mT[2]]];
            if (!dB) {
              function yB(...BB) {
                for (tT(BB[mT[12]] = mT[0], BB[mT[45]] = 'vhViPDNeRCfLBoTgjkO.H&1[)wEc},A8l^a+2!@nr`y%_"$I~x7>0GdSZQX5Y<#*]p:?t(ubJK3M{;9|4=FUW6msz/q', BB[mT[1]] = "" + (BB[mT[2]] || ""), BB[mT[4]] = BB[mT[1]].length, BB[mT[30]] = [], BB[mT[31]] = mT[2], BB[mT[8]] = mT[2], BB[mT[22]] = -mT[0]), BB[-mT[49]] = mT[2]; BB[-mT[49]] < BB[mT[4]]; BB[-mT[49]]++)
                  if (BB[mT[35]] = BB[mT[45]].indexOf(BB[mT[1]][BB[-mT[49]]]), BB[mT[35]] !== -mT[0])
                    if (BB[mT[22]] < mT[2]) BB[mT[22]] = BB[mT[35]];
                    else {
                      tT(BB[mT[22]] += BB[mT[35]] * mT[37], BB[mT[31]] |= BB[mT[22]] << BB[mT[8]], BB[mT[8]] += (BB[mT[22]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                      do {
                        tT(BB[mT[30]].push(BB[mT[31]] & mT[11]), BB[mT[31]] >>= mT[10], BB[mT[8]] -= mT[10])
                      } while (BB[mT[8]] > mT[22]);
                      BB[mT[22]] = -mT[0]
                    } return BB[mT[22]] > -mT[0] && BB[mT[30]].push((BB[mT[31]] | BB[mT[22]] << BB[mT[8]]) & mT[11]), iT(BB[mT[30]])
              }

              function pB(...BB) {
                return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = yB(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
              }

              function lB(...BB) {
                tT(BB[mT[12]] = mT[2], BB[-mT[50]] = function(...TB) {
                  return tT(TB[mT[12]] = mT[18], TB[mT[45]] = [], TB[mT[1]] = TB[mT[2]].length, TB[mT[2]].sort(((BB, TB) => BB - TB)), BB[mT[0]](TB[mT[45]], [], mT[2], TB[mT[1]], TB[mT[2]], TB[mT[0]])), TB[mT[45]]
                }, BB[mT[0]] = function(...TB) {
                  if (tT(TB[mT[12]] = mT[8], TB[mT[45]] = mT[43]), !(TB[mT[26]] < mT[2])) {
                    if (TB[mT[26]] === mT[2]) return TB[mT[2]].push(TB[mT[0]]);
                    for (TB[mT[1]] = TB[mT[18]]; TB[mT[1]] < TB[mT[19]] && !(TB[mT[30]][TB[mT[1]]] > TB[mT[26]]); TB[mT[1]]++) TB[mT[1]] > TB[mT[18]] && TB[mT[30]][TB[mT[1]]] === TB[mT[30]][TB[mT[1]] - mT[0]] || tT(TB[mT[45]] = Array.from(TB[mT[0]]), TB[mT[45]].push(TB[mT[30]][TB[mT[1]]]), BB[mT[0]](TB[mT[2]], TB[mT[45]], TB[mT[1]] + mT[0], TB[mT[19]], TB[mT[30]], TB[mT[26]] - TB[mT[30]][TB[mT[1]]]))
                  }
                }, console.log(BB[-mT[50]]))
              }
              throw BB(125) + "T" in NT && lB(), new Error(BB(126) + pB(mT[51]) + pB(mT[52]) + pB(129) + " v" + TB[mT[2]])
            }
            return [mT[2], mT[0], mT[18], mT[19], mT[30], mT[26], mT[8], mT[22]].map(((...TB) => (TB[mT[12]] = mT[0], BB(130) + mT[4] in NT && function(...BB) {
              tT(BB[mT[12]] = mT[2], BB[mT[4]] = function(...BB) {
                for (tT(BB[mT[12]] = mT[0], BB[mT[57]] = mT[2], BB[mT[56]] = {}, BB[mT[4]] = mT[2], BB[mT[15]] = mT[2], BB[mT[26]] = mT[2], BB[mT[29]] = BB[mT[2]].length), BB[mT[22]] = mT[2]; BB[mT[22]] < BB[mT[29]]; BB[mT[22]]++) {
                  for (tT(BB[mT[56]] = {}, BB[mT[4]] = mT[2], BB[mT[15]] = mT[0]), BB[mT[3]] = BB[mT[22]] + mT[0]; BB[mT[3]] < BB[mT[29]]; BB[mT[3]]++) BB[mT[2]][BB[mT[22]]].x !== BB[mT[2]][BB[mT[3]]].x || BB[mT[2]][BB[mT[22]]].y !== BB[mT[2]][BB[mT[3]]].y ? (BB[mT[2]][BB[mT[22]]].y === BB[mT[2]][BB[mT[3]]].y ? BB[mT[26]] = Number.MAX_SAFE_INTEGER : BB[mT[26]] = (BB[mT[2]][BB[mT[22]]].x - BB[mT[2]][BB[mT[3]]].x) / (BB[mT[2]][BB[mT[22]]].y - BB[mT[2]][BB[mT[3]]].y), BB[mT[56]][BB[mT[26]]] || (BB[mT[56]][BB[mT[26]]] = mT[2]), tT(BB[mT[56]][BB[mT[26]]]++, BB[mT[4]] = Math.max(BB[mT[4]], BB[mT[56]][BB[mT[26]]]))) : BB[mT[15]]++;
                  tT(BB[mT[4]] += BB[mT[15]], BB[mT[57]] = Math.max(BB[mT[57]], BB[mT[4]]))
                }
                return BB[mT[57]]
              }, console.log(BB[mT[4]]))
            }(), parseInt(dB[function(...BB) {
              return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = function(...BB) {
                for (tT(BB[mT[12]] = mT[0], BB[mT[54]] = '.AXIZH6W<h+Q*r$bB@xG|^CO9NodYsVtquDze?fcS]`1v5i[:UEmj/k7!=8y0}JT4>~M23%#&{a_)wLn"R;(p,FlKPg', BB[-mT[53]] = "" + (BB[mT[2]] || ""), BB[mT[4]] = BB[-mT[53]].length, BB[mT[15]] = [], BB[mT[26]] = mT[2], BB[mT[29]] = mT[2], BB[-mT[55]] = -mT[0]), BB[mT[10]] = mT[2]; BB[mT[10]] < BB[mT[4]]; BB[mT[10]]++)
                  if (BB[-mT[0]] = BB[mT[54]].indexOf(BB[-mT[53]][BB[mT[10]]]), BB[-mT[0]] !== -mT[0])
                    if (BB[-mT[55]] < mT[2]) BB[-mT[55]] = BB[-mT[0]];
                    else {
                      tT(BB[-mT[55]] += BB[-mT[0]] * mT[37], BB[mT[26]] |= BB[-mT[55]] << BB[mT[29]], BB[mT[29]] += (BB[-mT[55]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                      do {
                        tT(BB[mT[15]].push(BB[mT[26]] & mT[11]), BB[mT[26]] >>= mT[10], BB[mT[29]] -= mT[10])
                      } while (BB[mT[29]] > mT[22]);
                      BB[-mT[55]] = -mT[0]
                    } return BB[-mT[55]] > -mT[0] && BB[mT[15]].push((BB[mT[26]] | BB[-mT[55]] << BB[mT[29]]) & mT[11]), iT(BB[mT[15]])
              }(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
            }(131)](TB[mT[2]] * mT[10], TB[mT[2]] * mT[10] + mT[10]), 16))))
          };
        tT(pT = (...dB) => (dB[mT[12]] = mT[0], BB(132) + "U" in NT && function(...BB) {
          function TB(...BB) {
            for (tT(BB[mT[12]] = mT[0], BB[mT[45]] = 'K=)<yG.V,A4[O3QR1d8W>?J_u|cHUBk2"6Cf7Eg{#}p&P!eMs/+YoDIqmjNvz;]rb~l5t$%FiSwZhT^0XLa9:*@`(xn', BB[-mT[58]] = "" + (BB[mT[2]] || ""), BB[mT[6]] = BB[-mT[58]].length, BB[mT[15]] = [], BB[mT[26]] = mT[2], BB[-mT[60]] = mT[2], BB[mT[22]] = -mT[0]), BB[mT[59]] = mT[2]; BB[mT[59]] < BB[mT[6]]; BB[mT[59]]++)
              if (BB[mT[35]] = BB[mT[45]].indexOf(BB[-mT[58]][BB[mT[59]]]), BB[mT[35]] !== -mT[0])
                if (BB[mT[22]] < mT[2]) BB[mT[22]] = BB[mT[35]];
                else {
                  tT(BB[mT[22]] += BB[mT[35]] * mT[37], BB[mT[26]] |= BB[mT[22]] << BB[-mT[60]], BB[-mT[60]] += (BB[mT[22]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                  do {
                    tT(BB[mT[15]].push(BB[mT[26]] & mT[11]), BB[mT[26]] >>= mT[10], BB[-mT[60]] -= mT[10])
                  } while (BB[-mT[60]] > mT[22]);
                  BB[mT[22]] = -mT[0]
                } return BB[mT[22]] > -mT[0] && BB[mT[15]].push((BB[mT[26]] | BB[mT[22]] << BB[-mT[60]]) & mT[11]), iT(BB[mT[15]])
          }

          function dB(...BB) {
            return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = TB(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
          }
          BB[mT[12]] = mT[2];
          const VB = require("path"),
            {
              version: yB
            } = require("../../package"),
            {
              version: pB
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: lB
            } = require("@redacted/components/package"),
            {
              sdkVersion: JB
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), VB.resolve(__dirname, dB(133) + dB(mT[47]) + mT[73])
        }(), dB[mT[2]] >= TB), lT = (...BB) => {
          function TB(...BB) {
            return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = function(...BB) {
              for (tT(BB[mT[12]] = mT[0], BB[mT[0]] = '^BkSHRYqosXALmWiKI9Q4%NDa[CnGPruV#TwebEhtZ",>Jvc2_f(!:}j|gl56;F~d@UMz3yO{8$p70+&1/*)]x?=.`<', BB[mT[1]] = "" + (BB[mT[2]] || ""), BB[mT[19]] = BB[mT[1]].length, BB[mT[30]] = [], BB[mT[26]] = mT[2], BB[mT[29]] = mT[2], BB[mT[28]] = -mT[0]), BB[mT[10]] = mT[2]; BB[mT[10]] < BB[mT[19]]; BB[mT[10]]++)
                if (BB[-mT[61]] = BB[mT[0]].indexOf(BB[mT[1]][BB[mT[10]]]), BB[-mT[61]] !== -mT[0])
                  if (BB[mT[28]] < mT[2]) BB[mT[28]] = BB[-mT[61]];
                  else {
                    tT(BB[mT[28]] += BB[-mT[61]] * mT[37], BB[mT[26]] |= BB[mT[28]] << BB[mT[29]], BB[mT[29]] += (BB[mT[28]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                    do {
                      tT(BB[mT[30]].push(BB[mT[26]] & mT[11]), BB[mT[26]] >>= mT[10], BB[mT[29]] -= mT[10])
                    } while (BB[mT[29]] > mT[22]);
                    BB[mT[28]] = -mT[0]
                  } return BB[mT[28]] > -mT[0] && BB[mT[30]].push((BB[mT[26]] | BB[mT[28]] << BB[mT[29]]) & mT[11]), iT(BB[mT[30]])
            }(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
          }
          BB[mT[12]] = mT[18], TB(135) in NT && function(...BB) {
            tT(BB[mT[12]] = mT[2], BB[mT[65]] = function(...BB) {
              for (tT(BB[mT[12]] = mT[0], BB[mT[45]] = mT[2], BB[mT[18]] = {}, BB[mT[62]] = mT[2], BB[mT[60]] = mT[2], BB[-mT[64]] = mT[2], BB[mT[44]] = BB[mT[2]].length), BB[mT[28]] = mT[2]; BB[mT[28]] < BB[mT[44]]; BB[mT[28]]++) {
                for (tT(BB[mT[18]] = {}, BB[mT[62]] = mT[2], BB[mT[60]] = mT[0]), BB[mT[63]] = BB[mT[28]] + mT[0]; BB[mT[63]] < BB[mT[44]]; BB[mT[63]]++) BB[mT[2]][BB[mT[28]]].x !== BB[mT[2]][BB[mT[63]]].x || BB[mT[2]][BB[mT[28]]].y !== BB[mT[2]][BB[mT[63]]].y ? (BB[mT[2]][BB[mT[28]]].y === BB[mT[2]][BB[mT[63]]].y ? BB[-mT[64]] = Number.MAX_SAFE_INTEGER : BB[-mT[64]] = (BB[mT[2]][BB[mT[28]]].x - BB[mT[2]][BB[mT[63]]].x) / (BB[mT[2]][BB[mT[28]]].y - BB[mT[2]][BB[mT[63]]].y), BB[mT[18]][BB[-mT[64]]] || (BB[mT[18]][BB[-mT[64]]] = mT[2]), tT(BB[mT[18]][BB[-mT[64]]]++, BB[mT[62]] = Math.max(BB[mT[62]], BB[mT[18]][BB[-mT[64]]]))) : BB[mT[60]]++;
                tT(BB[mT[62]] += BB[mT[60]], BB[mT[45]] = Math.max(BB[mT[45]], BB[mT[62]]))
              }
              return BB[mT[45]]
            }, console.log(BB[mT[65]]))
          }();
          const dB = crypto[TB(136) + TB(mT[5]) + TB(138)](new Uint8Array(gT)),
            VB = yT[mT[15]][TB(139) + TB(140)](BB[mT[0]], {
              [TB(141)]: mT[0]
            });
          YT(yB(BB[mT[2]]), dB, mT[0], VB);
          const pB = new Uint8Array(gT + VB[TB(mT[64])]);
          return tT(pB[TB(mT[66])](dB), pB[TB(mT[66])](VB, gT)), pB
        }, JT = (...TB) => {
          function VB(...BB) {
            return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = function(...BB) {
              for (tT(BB[mT[12]] = mT[0], BB[mT[45]] = 'R)mFOBAZDLHChnrMEt15uq^S3.6bv9fo<s%zY!Q"[(];_|$p}WUTx4>gNw7I~{+,?Pke/yGVJ*idX0`j@cK=a:#l2&8', BB[-mT[68]] = "" + (BB[mT[2]] || ""), BB[-mT[67]] = BB[-mT[68]].length, BB[mT[30]] = [], BB[-mT[71]] = mT[2], BB[-mT[72]] = mT[2], BB[mT[70]] = -mT[0]), BB[mT[10]] = mT[2]; BB[mT[10]] < BB[-mT[67]]; BB[mT[10]]++)
                if (BB[mT[69]] = BB[mT[45]].indexOf(BB[-mT[68]][BB[mT[10]]]), BB[mT[69]] !== -mT[0])
                  if (BB[mT[70]] < mT[2]) BB[mT[70]] = BB[mT[69]];
                  else {
                    tT(BB[mT[70]] += BB[mT[69]] * mT[37], BB[-mT[71]] |= BB[mT[70]] << BB[-mT[72]], BB[-mT[72]] += (BB[mT[70]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                    do {
                      tT(BB[mT[30]].push(BB[-mT[71]] & mT[11]), BB[-mT[71]] >>= mT[10], BB[-mT[72]] -= mT[10])
                    } while (BB[-mT[72]] > mT[22]);
                    BB[mT[70]] = -mT[0]
                  } return BB[mT[70]] > -mT[0] && BB[mT[30]].push((BB[-mT[71]] | BB[mT[70]] << BB[-mT[72]]) & mT[11]), iT(BB[mT[30]])
            }(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
          }
          if (TB[mT[12]] = mT[18], BB(144) + "4" in NT && function(...TB) {
              TB[mT[12]] = mT[2];
              const dB = require("path"),
                {
                  version: VB
                } = require("../../package"),
                {
                  version: yB
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: pB
                } = require("@redacted/components/package"),
                {
                  sdkVersion: lB
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), dB.resolve(__dirname, BB(145) + BB(146) + mT[73])
            }(), TB[mT[0]][VB(147)] < gT) {
            function JB(...BB) {
              var TB;
              tT(BB[mT[12]] = mT[2], TB = function(...BB) {
                tT(BB[mT[12]] = mT[0], this.Kk = BB[mT[2]], this.length = mT[2], this.map = {}, this.head = mT[43], this.tail = mT[43])
              }, TB.prototype.get = function(...BB) {
                var TB;
                return tT(BB[mT[12]] = mT[0], TB = this.map[BB[mT[2]]]), TB ? (this.remove(TB), this.insert(TB.key, TB.val), TB.val) : -mT[0]
              }, TB.prototype.put = function(...BB) {
                tT(BB[mT[12]] = mT[18], this.map[BB[mT[2]]] ? (this.remove(this.map[BB[mT[2]]]), this.insert(BB[mT[2]], BB[mT[0]])) : this.length === this.Kk ? (this.remove(this.head), this.insert(BB[mT[2]], BB[mT[0]])) : (this.insert(BB[mT[2]], BB[mT[0]]), this.length++))
              }, TB.prototype.remove = function(...BB) {
                tT(BB[mT[12]] = mT[0], BB[mT[45]] = BB[mT[2]].prev, BB[mT[18]] = BB[mT[2]].next), BB[mT[18]] && (BB[mT[18]].prev = BB[mT[45]]), BB[mT[45]] && (BB[mT[45]].next = BB[mT[18]]), this.head === BB[mT[2]] && (this.head = BB[mT[18]]), this.tail === BB[mT[2]] && (this.tail = BB[mT[45]]), delete this.map[BB[mT[2]].key]
              }, TB.prototype.insert = function(...BB) {
                tT(BB[mT[12]] = mT[18], BB[-mT[74]] = new List(BB[mT[2]], BB[mT[0]]), this.tail ? (this.tail.next = BB[-mT[74]], BB[-mT[74]].prev = this.tail, this.tail = BB[-mT[74]]) : (this.tail = BB[-mT[74]], this.head = BB[-mT[74]]), this.map[BB[mT[2]]] = BB[-mT[74]])
              }, console.log(TB))
            }
            throw VB(148) in NT && JB(), new Error(dB)
          }
          const pB = new Uint8Array(TB[mT[0]][VB(mT[75])](gT));
          YT(yB(TB[mT[2]]), TB[mT[0]][VB(mT[75])](mT[2], gT), mT[0], pB);
          const lB = new(yT[mT[15]][VB(150) + mT[31]])({
            [VB(151)]: !0
          });
          if (lB[VB(152)](pB), lB[VB(153)] || !lB[VB(154)]) {
            function YB(...BB) {
              for (tT(BB[mT[12]] = mT[0], BB[mT[76]] = 'D;,9+`_[@%?0!/xw=}3y&Jkqv^s(B$l4ARmQaEdTLPtUpfI~z#c"C12{e67XjnHMZuGOFr<8b*)>Y|W.g:SKioNh5V]', BB[mT[18]] = "" + (BB[mT[2]] || ""), BB[mT[4]] = BB[mT[18]].length, BB[mT[30]] = [], BB[mT[31]] = mT[2], BB[-mT[68]] = mT[2], BB[mT[22]] = -mT[0]), BB[mT[3]] = mT[2]; BB[mT[3]] < BB[mT[4]]; BB[mT[3]]++)
                if (BB[mT[35]] = BB[mT[76]].indexOf(BB[mT[18]][BB[mT[3]]]), BB[mT[35]] !== -mT[0])
                  if (BB[mT[22]] < mT[2]) BB[mT[22]] = BB[mT[35]];
                  else {
                    tT(BB[mT[22]] += BB[mT[35]] * mT[37], BB[mT[31]] |= BB[mT[22]] << BB[-mT[68]], BB[-mT[68]] += (BB[mT[22]] & mT[38]) > mT[39] ? mT[40] : mT[41]);
                    do {
                      tT(BB[mT[30]].push(BB[mT[31]] & mT[11]), BB[mT[31]] >>= mT[10], BB[-mT[68]] -= mT[10])
                    } while (BB[-mT[68]] > mT[22]);
                    BB[mT[22]] = -mT[0]
                  } return BB[mT[22]] > -mT[0] && BB[mT[30]].push((BB[mT[31]] | BB[mT[22]] << BB[-mT[68]]) & mT[11]), iT(BB[mT[30]])
            }

            function gB(...BB) {
              return BB[mT[12]] = mT[0], typeof ET[BB[mT[2]]] === mT[16] ? ET[BB[mT[2]]] = YB(vT[BB[mT[2]]]) : ET[BB[mT[2]]]
            }

            function oB(...BB) {
              BB[mT[12]] = mT[2]
            }
            throw gB(155) + "S" in NT && oB(), new Error(dB)
          }
          return lB[VB(156)]
        })
      })();
    var fT = dB(35930),
      sT = dB(35935);

    function MT(BB) {
      return pB.iD.from(Uint8Array.from(BB))
    }

    function zT(BB) {
      return Array.from(BB)
    }

    function wT(BB, TB) {
      return {
        [BB]: {
          x: TB
        }
      }
    }

    function UT(BB) {
      if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
      const TB = Object.keys(BB);
      if (1 !== TB.length) return BB;
      const dB = BB[TB[0]];
      return null !== dB && "object" === typeof dB && !Array.isArray(dB) && "x" in dB ? dB.x : BB
    }

    function FT(BB, TB) {
      return void 0 === TB ? null : YB.has(BB) ? null === TB ? null : JSON.stringify(TB) : TB
    }

    function KT(BB, TB) {
      return null === TB && YB.has(BB) ? null : "string" === typeof TB && YB.has(BB) ? JSON.parse(TB) : TB
    }

    function rT(BB, TB, dB) {
      return (0, yB.M)(dB) ? null : wT(BB, FT(TB, dB))
    }

    function IT(BB, TB) {
      return (0, yB.M)(TB) ? null : KT(BB, UT(TB))
    }

    function cT(BB) {
      const TB = {};
      for (const dB in BB) {
        const VB = BB[dB];
        TB[dB] = void 0 === VB ? null : VB
      }
      return TB
    }

    function ST(BB) {
      const TB = {};
      for (const dB in BB) {
        const VB = BB[dB];
        null !== VB && void 0 !== VB && (TB[dB] = VB)
      }
      return TB
    }

    function PT(BB, TB) {
      return Object.prototype.hasOwnProperty.call(BB, TB)
    }

    function QT(BB, TB) {
      const dB = {};
      for (const VB in BB) {
        const yB = BB[VB];
        dB[VB] = TB(yB)
      }
      return dB
    }

    function RT(BB, TB, dB) {
      const VB = [];
      for (let yB = 0; yB < TB.length; yB++) {
        const pB = TB[yB];
        PT(BB, pB) && VB.push({
          i: yB,
          v: dB(pB, BB[pB])
        })
      }
      return VB
    }

    function aT(BB, TB, dB) {
      const VB = {};
      for (const yB of BB) {
        const BB = TB[yB.i];
        void 0 !== BB ? VB[BB] = dB(BB, yB.v) : console.error(`Unknown Partial field index ${yB.i}`)
      }
      return VB
    }

    function ZT(BB, TB) {
      return (0, yB.M)(TB) ? null : "zK" === BB ? function(BB) {
        return wT(DB, RT(BB, sT.x, ((BB, TB) => rT(cB[BB], BB, TB))))
      }(TB) : rT(IB[BB], BB, TB)
    }

    function XT(BB, TB) {
      return (0, yB.M)(TB) ? null : "zK" === BB ? function(BB) {
        return (0, yB.M)(BB) ? null : aT(BB, sT.x, IT)
      }(UT(TB)) : IT(BB, TB)
    }

    function WT(BB) {
      const {
        type: TB,
        ...dB
      } = BB, VB = {};
      for (const yB in dB) {
        const BB = dB[yB];
        VB[yB] = FT(yB, BB)
      }
      if ("chunkAdded" === TB || "chunkRemoved" === TB) VB.rle = MT(VB.rle);
      else if ("playSound" === TB) {
        const BB = VB.qp;
        VB.qp = (0, yB.M)(BB) ? null : cT(BB)
      } else if ("customKillfeed" === TB) {
        var pB, lB;
        VB.killer = cT(null !== (pB = VB.killer) && void 0 !== pB ? pB : {}), VB.victim = cT(null !== (lB = VB.victim) && void 0 !== lB ? lB : {})
      }
      return {
        [TB]: VB
      }
    }

    function hT(BB) {
      const TB = Object.keys(BB)[0],
        dB = BB[TB],
        VB = {};
      for (const yB in dB) {
        const BB = dB[yB];
        VB[yB] = KT(yB, BB)
      }
      if ("chunkAdded" === TB || "chunkRemoved" === TB) VB.rle = zT(VB.rle);
      else if ("playSound" === TB) {
        const BB = VB.qp;
        VB.qp = (0, yB.M)(BB) ? null : ST(BB)
      } else if ("customKillfeed" === TB) {
        var pB, lB;
        VB.killer = ST(null !== (pB = VB.killer) && void 0 !== pB ? pB : {}), VB.victim = ST(null !== (lB = VB.victim) && void 0 !== lB ? lB : {})
      }
      return {
        type: TB,
        ...VB
      }
    }

    function CT(BB) {
      var TB, dB;
      return (0, yB.M)(BB) ? null : {
        name: BB.name,
        amount: null !== (TB = BB.amount) && void 0 !== TB ? TB : null,
        attributes: JSON.stringify(null !== (dB = BB.attributes) && void 0 !== dB ? dB : {})
      }
    }

    function GT(BB) {
      if ((0, yB.M)(BB)) return null;
      const TB = BB;
      return {
        name: TB.name,
        amount: TB.amount,
        attributes: JSON.parse(TB.attributes)
      }
    }

    function qT(BB) {
      if ((0, yB.M)(BB)) return null;
      return {
        fullSlotsArray: Array.isArray(BB.slots),
        entries: RT(BB, sT.m, ((BB, TB) => {
          if ((0, yB.M)(TB)) return null;
          if ("slots" === BB) {
            const BB = Array.isArray(TB) ? function(BB) {
              const TB = {};
              for (let dB = 0; dB < BB.length; dB++) TB[dB] = BB[dB];
              return TB
            }(TB) : TB;
            return wT(wB, function(BB) {
              const TB = {};
              for (const dB in BB) {
                const VB = BB[dB];
                TB[dB] = CT(VB)
              }
              return TB
            }(BB))
          }
          return wT(zB, TB)
        }))
      }
    }

    function xT(BB) {
      if ((0, yB.M)(BB)) return;
      const TB = BB.fullSlotsArray;
      return aT(BB.entries, sT.m, ((BB, dB) => {
        if ((0, yB.M)(dB)) return null;
        if ("slots" === BB) {
          const BB = function(BB) {
            const TB = {};
            for (const dB in BB) {
              const VB = BB[dB];
              TB[Number(dB)] = GT(VB)
            }
            return TB
          }(UT(dB));
          return TB ? function(BB) {
            const TB = [];
            for (let dB = 0; dB < yB.n; dB++) TB.push(dB in BB ? BB[dB] : null);
            return TB
          }(BB) : BB
        }
        return UT(dB)
      }))
    }

    function jT(BB) {
      return {
        entities: QT(BB.entities, (BB => RT(BB, sT.i, ZT))),
        items: QT(BB.items, (BB => RT(BB, sT.r, ((BB, TB) => rT(SB[BB], BB, TB))))),
        camera: BB.camera,
        hotbar: qT(BB.hotbar),
        playerHud: (0, yB.M)(BB.playerHud) ? null : RT(BB.playerHud, sT.t, ((BB, TB) => (0, yB.M)(TB) ? null : function(BB, TB) {
          return {
            [BB]: TB
          }
        }("double", TB))),
        effects: (0, yB.M)(BB.effects) ? null : (0, fT.n)(BB.effects),
        uiElements: RT(BB.uiElements, sT.z, ((BB, TB) => (0, yB.M)(TB) ? null : JSON.stringify(TB))),
        environment: RT(BB.environment, sT.u, ((BB, TB) => rT(PB[BB], BB, TB))),
        structuralEvents: BB.structuralEvents.map(WT),
        ephemeralEvents: BB.ephemeralEvents.map(WT)
      }
    }

    function AT(BB) {
      var TB;
      const dB = {
          entities: QT(BB.entities, (BB => {
            const TB = aT(BB, sT.i, XT),
              dB = TB.type ? (0, VB.w)(TB.type) : null;
            return dB && (TB.type = "Mesh", TB.meshKind = dB.meshKind, TB.meshOpts = dB.meshOpts), TB
          })),
          items: QT(BB.items, (BB => aT(BB, sT.r, IT))),
          camera: {
            ...BB.camera,
            charging: null !== (TB = BB.camera.charging) && void 0 !== TB && TB
          },
          uiElements: aT(BB.uiElements, sT.z, ((BB, TB) => "string" === typeof TB ? JSON.parse(TB) : TB)),
          environment: aT(BB.environment, sT.u, IT),
          structuralEvents: BB.structuralEvents.map((BB => {
            const TB = hT(BB);
            return "Cw" === TB.type ? (TB.fromBlockData ??= null, TB.toBlockData ??= null) : "chunkAdded" !== TB.type && "chunkRemoved" !== TB.type || (TB.sharedBlockData ??= []), TB
          })),
          ephemeralEvents: BB.ephemeralEvents.map((BB => hT(BB)))
        },
        pB = xT(BB.hotbar);
      return void 0 !== pB && (dB.hotbar = pB), (0, yB.M)(BB.playerHud) || (dB.playerHud = aT(BB.playerHud, sT.t, ((BB, TB) => (0, yB.M)(TB) ? null : function(BB) {
        if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
        const TB = Object.keys(BB);
        return 1 !== TB.length || "int" !== TB[0] && "double" !== TB[0] ? BB : BB[TB[0]]
      }(TB)))), (0, yB.M)(BB.effects) || (dB.effects = (0, fT.k)(BB.effects)), dB
    }
    let bT, nT;
    var eT, Bd, Td, dd, Vd, yd, pd, ld, Jd, Yd, gd;
    const od = [1, 92, 0, 8, 3, "i", 83, 5, "f", 7, 255, "length", "undefined", void 0, "d", 4, 2, 63, 6, "fromCodePoint", 12, "push", "b", "c", 135, 88, 228, "a", 150, "g", 91, 8191, 13, 14, null, "h", 116, "e", 223, 70, 65, 10, 141, 33, 50, 119, 240, "join", 100, 250, 174, 172, 21, 22, !1, 114, !0, 56, 168, 148, 147, 51, 132, 64, 244, 226, 93, 245, 239, 113, 9, 89, 106, 16, 78, 110, 125, 154, 215, "iD", 127, 128, 39, 102, 188, 28, 187, 169, 32, 219, 139];

    function kd(...BB) {
      return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = function(...BB) {
        for (ud(BB[od[11]] = od[0], BB[od[0]] = 'kfnHI41PJ`.}RQb"Xe!tN$;OjV9W@<z_a#m,3=>6TrUC&y/8B(hZ7Y2pw{A|?vDLlEF^i*K:~SdG50c%])oq+[suxgM', BB[-od[1]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[-od[1]].length, BB[-od[9]] = [], BB[od[7]] = od[2], BB[od[8]] = od[2], BB[od[6]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[4]]; BB[od[3]]++)
          if (BB[od[5]] = BB[od[0]].indexOf(BB[-od[1]][BB[od[3]]]), BB[od[5]] !== -od[0])
            if (BB[od[6]] < od[2]) BB[od[6]] = BB[od[5]];
            else {
              ud(BB[od[6]] += BB[od[5]] * od[30], BB[od[7]] |= BB[od[6]] << BB[od[8]], BB[od[8]] += (BB[od[6]] & od[31]) > od[25] ? od[32] : od[33]);
              do {
                ud(BB[-od[9]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[8]] -= od[3])
              } while (BB[od[8]] > od[9]);
              BB[od[6]] = -od[0]
            } return BB[od[6]] > -od[0] && BB[-od[9]].push((BB[od[7]] | BB[od[6]] << BB[od[8]]) & od[10]), Ld(BB[-od[9]])
      }(Bd[BB[od[2]]]) : eT[BB[od[2]]]
    }

    function Ld(...BB) {
      return BB[od[11]] = od[0], typeof dd !== od[12] && dd ? (new dd).decode(new Vd(BB[od[2]])) : typeof yd !== od[12] && yd ? yd.from(BB[od[2]]).toString("utf-8") : Jd(BB[od[2]])
    }

    function Od() {}

    function Dd(BB, TB, dB, VB = {}, yB, pB, lB, JB, YB) {
      if (lB || (lB = function(...BB) {
          BB[od[11]] = od[2]
        }), pB || (pB = function(BB) {
          return typeof eT[BB] === od[12] ? eT[BB] = yB(Bd[BB]) : eT[BB]
        }), yB || (yB = function(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = 'sOdjg7.bD{CW?u"q]cJZei)XF9~[V|$8%Q4zTm@^HtEUGxIn`!;r_K5M}:Yplo<vNhfakPBRASLy6#+&31=(>/,2w*0', BB[od[16]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[od[16]].length, BB[od[15]] = [], BB[od[7]] = od[2], BB[od[8]] = od[2], BB[od[29]] = -od[0]), BB[-od[26]] = od[2]; BB[-od[26]] < BB[od[23]]; BB[-od[26]]++)
            if (BB[-od[28]] = BB[od[27]].indexOf(BB[od[16]][BB[-od[26]]]), BB[-od[28]] !== -od[0])
              if (BB[od[29]] < od[2]) BB[od[29]] = BB[-od[28]];
              else {
                ud(BB[od[29]] += BB[-od[28]] * od[30], BB[od[7]] |= BB[od[29]] << BB[od[8]], BB[od[8]] += (BB[od[29]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[15]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[8]] -= od[3])
                } while (BB[od[8]] > od[9]);
                BB[od[29]] = -od[0]
              } return BB[od[29]] > -od[0] && BB[od[15]].push((BB[od[7]] | BB[od[29]] << BB[od[8]]) & od[10]), Ld(BB[od[15]])
        }), pB(od[71]) in Od && lB(), ud(JB = void 0, YB = {
          [pB(90)]: function(BB, TB, dB) {
            dB || (dB = function(...BB) {
              BB[od[11]] = od[2]
            }), TB || (TB = function(...TB) {
              return TB[od[11]] = od[0], typeof eT[TB[od[2]]] === od[12] ? eT[TB[od[2]]] = BB(Bd[TB[od[2]]]) : eT[TB[od[2]]]
            }), BB || (BB = function(...BB) {
              for (ud(BB[od[11]] = od[0], BB[od[0]] = 'XZAbh1BCKfaQ:rM_|LNYewO(8%;2~^d5Jv6sU?]+oW#@,/*m!lu$Dn`t>c<4ig"V7[jSxTFR9qHP0EGpk3&.={)z}yI', BB[od[16]] = "" + (BB[od[2]] || ""), BB[od[36]] = BB[od[16]].length, BB[od[15]] = [], BB[od[37]] = od[2], BB[od[8]] = od[2], BB[od[29]] = -od[0]), BB[od[35]] = od[2]; BB[od[35]] < BB[od[36]]; BB[od[35]]++)
                if (BB[od[5]] = BB[od[0]].indexOf(BB[od[16]][BB[od[35]]]), BB[od[5]] !== -od[0])
                  if (BB[od[29]] < od[2]) BB[od[29]] = BB[od[5]];
                  else {
                    ud(BB[od[29]] += BB[od[5]] * od[30], BB[od[37]] |= BB[od[29]] << BB[od[8]], BB[od[8]] += (BB[od[29]] & od[31]) > od[25] ? od[32] : od[33]);
                    do {
                      ud(BB[od[15]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[od[8]] -= od[3])
                    } while (BB[od[8]] > od[9]);
                    BB[od[29]] = -od[0]
                  } return BB[od[29]] > -od[0] && BB[od[15]].push((BB[od[37]] | BB[od[29]] << BB[od[8]]) & od[10]), Ld(BB[od[15]])
            }), pB(od[30]) in Od && dB();
            var [
              [VB, yB, lB], JB
            ] = gd;
            console[TB(97)]("" + VB[od[47]](".") + (TB(98) + TB(99)) + lB[TB(od[48]) + "me"] + TB(101) + yB)
          }
        }), TB === pB(od[83]) + pB(103)) {
        function gB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = '^u;z76+SOsREkZQVh}<!%20nTK.5:=Hg]MeA("|aFNtBv~JD?/&*LGU1)w`xI4iry>fq,o3Cjl9#W@c8[Y_XP${dpbm', BB[od[22]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[od[22]].length, BB[od[14]] = [], BB[od[37]] = od[2], BB[od[8]] = od[2], BB[od[29]] = -od[0]), BB[od[35]] = od[2]; BB[od[35]] < BB[od[4]]; BB[od[35]]++)
            if (BB[-od[15]] = BB[od[27]].indexOf(BB[od[22]][BB[od[35]]]), BB[-od[15]] !== -od[0])
              if (BB[od[29]] < od[2]) BB[od[29]] = BB[-od[15]];
              else {
                ud(BB[od[29]] += BB[-od[15]] * od[30], BB[od[37]] |= BB[od[29]] << BB[od[8]], BB[od[8]] += (BB[od[29]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[14]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[od[8]] -= od[3])
                } while (BB[od[8]] > od[9]);
                BB[od[29]] = -od[0]
              } return BB[od[29]] > -od[0] && BB[od[14]].push((BB[od[37]] | BB[od[29]] << BB[od[8]]) & od[10]), Ld(BB[od[14]])
        }

        function oB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = gB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }

        function kB() {
          console.log((function(...BB) {
            for (ud(BB[od[11]] = od[0], BB[od[27]] = BB[od[2]].length, BB[-od[51]] = [], BB[od[23]] = od[2], BB[od[50]] = od[2], BB[od[2]].sort(((BB, TB) => BB - TB))), BB[-od[49]] = od[2]; BB[-od[49]] < BB[od[27]]; BB[-od[49]]++)
              if (!(BB[-od[49]] > od[2] && BB[od[2]][BB[-od[49]]] === BB[od[2]][BB[-od[49]] - od[0]]))
                for (ud(BB[od[23]] = BB[-od[49]] + od[0], BB[od[50]] = BB[od[27]] - od[0]); BB[od[23]] < BB[od[50]];)
                  if (BB[od[2]][BB[-od[49]]] + BB[od[2]][BB[od[23]]] + BB[od[2]][BB[od[50]]] < od[2]) BB[od[23]]++;
                  else if (BB[od[2]][BB[-od[49]]] + BB[od[2]][BB[od[23]]] + BB[od[2]][BB[od[50]]] > od[2]) BB[od[50]]--;
            else {
              for (BB[-od[51]].push([BB[od[2]][BB[-od[49]]], BB[od[2]][BB[od[23]]], BB[od[2]][BB[od[50]]]]); BB[od[23]] < BB[od[50]] && BB[od[2]][BB[od[23]]] === BB[od[2]][BB[od[23]] + od[0]];) BB[od[23]]++;
              for (; BB[od[23]] < BB[od[50]] && BB[od[2]][BB[od[50]]] === BB[od[2]][BB[od[50]] - od[0]];) BB[od[50]]--;
              ud(BB[od[23]]++, BB[od[50]]--)
            }
            return BB[-od[51]]
          }))
        }
        oB(104) + "Q" in Od && kB(), gd = []
      }
      if (TB === pB(105) + pB(od[72])) {
        function LB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[-od[46]] = 'jCG;%RQx(7y.BAd{O/a}!ps*=43]6,P+uz`&>@9^vw$|~1_<8#:5?)20["FYTebEMfZcDJtmoLIiNrSgWUlqhHnKXVk', BB[od[22]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[od[22]].length, BB[od[14]] = [], BB[-od[53]] = od[2], BB[od[8]] = od[2], BB[od[52]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[4]]; BB[od[3]]++)
            if (BB[od[5]] = BB[-od[46]].indexOf(BB[od[22]][BB[od[3]]]), BB[od[5]] !== -od[0])
              if (BB[od[52]] < od[2]) BB[od[52]] = BB[od[5]];
              else {
                ud(BB[od[52]] += BB[od[5]] * od[30], BB[-od[53]] |= BB[od[52]] << BB[od[8]], BB[od[8]] += (BB[od[52]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[14]].push(BB[-od[53]] & od[10]), BB[-od[53]] >>= od[3], BB[od[8]] -= od[3])
                } while (BB[od[8]] > od[9]);
                BB[od[52]] = -od[0]
              } return BB[od[52]] > -od[0] && BB[od[14]].push((BB[-od[53]] | BB[od[52]] << BB[od[8]]) & od[10]), Ld(BB[od[14]])
        }

        function OB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = LB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }

        function DB(...BB) {
          ud(BB[od[11]] = od[2], BB[-od[57]] = function(...TB) {
            return ud(TB[od[11]] = od[4], TB[-od[55]] = {}), TB[od[16]].length !== TB[od[2]].length + TB[od[0]].length ? od[54] : BB[od[22]](TB[od[2]], TB[od[0]], TB[od[16]], od[2], od[2], od[2], TB[-od[55]])
          }, BB[od[22]] = function(...TB) {
            return ud(TB[od[11]] = od[9], TB[od[27]] = od[54]), TB[od[7]] >= TB[od[16]].length ? od[56] : TB[od[18]]["" + TB[od[4]] + TB[od[15]] + TB[od[7]]] !== od[13] ? TB[od[18]]["" + TB[od[4]] + TB[od[15]] + TB[od[7]]] : (TB[od[16]][TB[od[7]]] === TB[od[2]][TB[od[4]]] && TB[od[16]][TB[od[7]]] === TB[od[0]][TB[od[15]]] ? TB[od[27]] = BB[od[22]](TB[od[2]], TB[od[0]], TB[od[16]], TB[od[4]] + od[0], TB[od[15]], TB[od[7]] + od[0], TB[od[18]]) || BB[od[22]](TB[od[2]], TB[od[0]], TB[od[16]], TB[od[4]], TB[od[15]] + od[0], TB[od[7]] + od[0], TB[od[18]]) : TB[od[16]][TB[od[7]]] === TB[od[2]][TB[od[4]]] ? TB[od[27]] = BB[od[22]](TB[od[2]], TB[od[0]], TB[od[16]], TB[od[4]] + od[0], TB[od[15]], TB[od[7]] + od[0], TB[od[18]]) : TB[od[16]][TB[od[7]]] === TB[od[0]][TB[od[15]]] && (TB[od[27]] = BB[od[22]](TB[od[2]], TB[od[0]], TB[od[16]], TB[od[4]], TB[od[15]] + od[0], TB[od[7]] + od[0], TB[od[18]])), TB[od[18]]["" + TB[od[4]] + TB[od[15]] + TB[od[7]]] = TB[od[27]], TB[od[27]])
          }, console.log(BB[-od[57]]))
        }

        function uB(...TB) {
          var dB;

          function yB(...BB) {
            return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = function(...BB) {
              for (ud(BB[od[11]] = od[0], BB[od[0]] = 'rCDbsdnALEHNRSMBVXleUfhWoZqQPYTpkKFcjiOIgGatJm`/1)^*["u@v>{~:#2,<3y}%]?(6$9&=x4_z+w7.58!|0;', BB[-od[58]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[-od[58]].length, BB[od[15]] = [], BB[od[7]] = od[2], BB[od[18]] = od[2], BB[-od[60]] = -od[0]), BB[od[59]] = od[2]; BB[od[59]] < BB[od[4]]; BB[od[59]]++)
                if (BB[od[5]] = BB[od[0]].indexOf(BB[-od[58]][BB[od[59]]]), BB[od[5]] !== -od[0])
                  if (BB[-od[60]] < od[2]) BB[-od[60]] = BB[od[5]];
                  else {
                    ud(BB[-od[60]] += BB[od[5]] * od[30], BB[od[7]] |= BB[-od[60]] << BB[od[18]], BB[od[18]] += (BB[-od[60]] & od[31]) > od[25] ? od[32] : od[33]);
                    do {
                      ud(BB[od[15]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[18]] -= od[3])
                    } while (BB[od[18]] > od[9]);
                    BB[-od[60]] = -od[0]
                  } return BB[-od[60]] > -od[0] && BB[od[15]].push((BB[od[7]] | BB[-od[60]] << BB[od[18]]) & od[10]), Ld(BB[od[15]])
            }(Bd[BB[od[2]]]) : eT[BB[od[2]]]
          }
          if (TB[od[11]] = od[2], yB(108) in Od && function(...BB) {
              function TB(...BB) {
                for (ud(BB[od[11]] = od[0], BB[od[27]] = '2AkL$[|j0~xX&5f^Jtc._`:YoBH{%4udb9]}RrypF=3miq;*"Pn)!IC+UK@8/G>e1(gNTvDZhQlwzaM6OV?#7W,<sSE', BB[od[22]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[od[22]].length, BB[od[15]] = [], BB[od[37]] = od[2], BB[-od[61]] = od[2], BB[od[9]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[23]]; BB[od[3]]++)
                  if (BB[-od[46]] = BB[od[27]].indexOf(BB[od[22]][BB[od[3]]]), BB[-od[46]] !== -od[0])
                    if (BB[od[9]] < od[2]) BB[od[9]] = BB[-od[46]];
                    else {
                      ud(BB[od[9]] += BB[-od[46]] * od[30], BB[od[37]] |= BB[od[9]] << BB[-od[61]], BB[-od[61]] += (BB[od[9]] & od[31]) > od[25] ? od[32] : od[33]);
                      do {
                        ud(BB[od[15]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[-od[61]] -= od[3])
                      } while (BB[-od[61]] > od[9]);
                      BB[od[9]] = -od[0]
                    } return BB[od[9]] > -od[0] && BB[od[15]].push((BB[od[37]] | BB[od[9]] << BB[-od[61]]) & od[10]), Ld(BB[od[15]])
              }

              function dB(...BB) {
                return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = TB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
              }
              BB[od[11]] = od[2];
              const VB = require("path"),
                {
                  version: pB
                } = require("../../package"),
                {
                  version: lB
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: JB
                } = require("@redacted/components/package"),
                {
                  sdkVersion: YB
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), VB.resolve(__dirname, yB(109) + dB(od[75]) + "js")
            }(), ud(dB = function(...TB) {
              return gd = TB, YB[BB].apply(this)
            }, TB[od[22]] = VB[BB]), TB[od[22]]) {
            function pB(...BB) {
              ud(BB[od[11]] = od[2], BB[od[64]] = function(...BB) {
                for (ud(BB[od[11]] = od[0], BB[od[0]] = od[2], BB[od[22]] = {}, BB[od[4]] = od[2], BB[od[14]] = od[2], BB[-od[63]] = od[2], BB[od[18]] = BB[od[2]].length), BB[od[29]] = od[2]; BB[od[29]] < BB[od[18]]; BB[od[29]]++) {
                  for (ud(BB[od[22]] = {}, BB[od[4]] = od[2], BB[od[14]] = od[0]), BB[-od[62]] = BB[od[29]] + od[0]; BB[-od[62]] < BB[od[18]]; BB[-od[62]]++) BB[od[2]][BB[od[29]]].x !== BB[od[2]][BB[-od[62]]].x || BB[od[2]][BB[od[29]]].y !== BB[od[2]][BB[-od[62]]].y ? (BB[od[2]][BB[od[29]]].y === BB[od[2]][BB[-od[62]]].y ? BB[-od[63]] = Number.MAX_SAFE_INTEGER : BB[-od[63]] = (BB[od[2]][BB[od[29]]].x - BB[od[2]][BB[-od[62]]].x) / (BB[od[2]][BB[od[29]]].y - BB[od[2]][BB[-od[62]]].y), BB[od[22]][BB[-od[63]]] || (BB[od[22]][BB[-od[63]]] = od[2]), ud(BB[od[22]][BB[-od[63]]]++, BB[od[4]] = Math.max(BB[od[4]], BB[od[22]][BB[-od[63]]]))) : BB[od[14]]++;
                  ud(BB[od[4]] += BB[od[14]], BB[od[0]] = Math.max(BB[od[0]], BB[od[4]]))
                }
                return BB[od[0]]
              }, console.log(BB[od[64]]))
            }
            yB(111) + "H" in Od && pB(), TB[od[22]]
          }
          return dB
        }
        OB(107) + "j" in Od && DB(), JB = Yd[BB] || (Yd[BB] = uB())
      } else {
        function HB(...BB) {
          function TB() {}
          BB[od[11]] = od[2], ud(BB[od[22]] = function(...BB) {
            for (ud(BB[od[11]] = od[16], BB[od[16]] = od[2], BB[od[4]] = od[2], BB[od[45]] = new TB(od[2]), BB[od[14]] = BB[od[45]], BB[-od[65]] = BB[od[2]], BB[od[9]] = BB[od[0]]); BB[-od[65]] !== od[34] || BB[od[9]] !== od[34];) ud(BB[od[4]] = (BB[-od[65]] ? BB[-od[65]].val : od[2]) + (BB[od[9]] ? BB[od[9]].val : od[2]) + BB[od[16]], BB[od[16]] = Math.floor(BB[od[4]] / od[41]), BB[od[14]].next = new TB(BB[od[4]] % od[41]), BB[od[14]] = BB[od[14]].next, BB[-od[65]] = BB[-od[65]] ? BB[-od[65]].next : od[34], BB[od[9]] = BB[od[9]] ? BB[od[9]].next : od[34]);
            return BB[od[16]] && (BB[od[14]].next = new TB(BB[od[16]])), BB[od[45]].next
          }, console.log(BB[od[22]]))
        }
        pB(112) + od[22] in Od && HB(), JB = YB[BB]()
      }
      if (dB === pB(od[69]) + pB(od[55])) {
        function EB(BB) {
          var TB, dB, VB, yB, pB, lB, JB;
          for (ud(TB = "" + (BB || ""), dB = TB.length, VB = [], yB = od[2], pB = od[2], lB = -od[0]), JB = od[2]; JB < dB; JB++) {
            var YB = 'WwhjSiLVko0Y!KHF$;nvZ56m`8l9A]D_rOs1qR~^["bMB=|7)?u@:eJ}z2>#f/{P<xt%Upa+gdQITCN.cE3GX&(*y,4'.indexOf(TB[JB]);
            if (YB !== -od[0])
              if (lB < od[2]) lB = YB;
              else {
                ud(lB += YB * od[30], yB |= lB << pB, pB += (lB & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(VB.push(yB & od[10]), yB >>= od[3], pB -= od[3])
                } while (pB > od[9]);
                lB = -od[0]
              }
          }
          return lB > -od[0] && VB.push((yB | lB << pB) & od[10]), Ld(VB)
        }

        function vB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = EB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }
        return {
          [vB(115) + vB(od[36])]: JB
        }
      } {
        function mB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = '5DABNisfaj4tc]UCSx7H$kw)n#hy(L/R@MWYv|~[%09KG.=,!}+V;P_2T>Q?1Jo`gF<6eOzpu3*^db&:qErI{"mZXl8', BB[od[16]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[od[16]].length, BB[-od[67]] = [], BB[od[7]] = od[2], BB[od[18]] = od[2], BB[-od[66]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[4]]; BB[od[3]]++)
            if (BB[od[5]] = BB[od[27]].indexOf(BB[od[16]][BB[od[3]]]), BB[od[5]] !== -od[0])
              if (BB[-od[66]] < od[2]) BB[-od[66]] = BB[od[5]];
              else {
                ud(BB[-od[66]] += BB[od[5]] * od[30], BB[od[7]] |= BB[-od[66]] << BB[od[18]], BB[od[18]] += (BB[-od[66]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[-od[67]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[18]] -= od[3])
                } while (BB[od[18]] > od[9]);
                BB[-od[66]] = -od[0]
              } return BB[-od[66]] > -od[0] && BB[-od[67]].push((BB[od[7]] | BB[-od[66]] << BB[od[18]]) & od[10]), Ld(BB[-od[67]])
        }

        function iB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = mB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }

        function NB() {
          var BB;
          ud(BB = function(...TB) {
            if (ud(TB[od[11]] = od[4], TB[od[27]] = {}), TB[od[2]][TB[od[0]] + TB[od[16]]] !== od[13]) return TB[od[2]][TB[od[0]] + TB[od[16]]];
            if (TB[od[0]] === TB[od[16]]) return od[56];
            for (TB[od[22]] = od[2]; TB[od[22]] < TB[od[0]].length; TB[od[22]]++) TB[od[27]][TB[od[0]][TB[od[22]]]] === od[13] && (TB[od[27]][TB[od[0]][TB[od[22]]]] = od[2]), TB[od[27]][TB[od[16]][TB[od[22]]]] === od[13] && (TB[od[27]][TB[od[16]][TB[od[22]]]] = od[2]), ud(TB[od[27]][TB[od[0]][TB[od[22]]]]++, TB[od[27]][TB[od[16]][TB[od[22]]]]--);
            for (TB[od[23]] in TB[od[27]])
              if (TB[od[27]][TB[od[23]]] !== od[2]) return TB[od[2]][TB[od[0]] + TB[od[16]]] = od[54], od[54];
            for (TB[od[18]] = od[0]; TB[od[18]] < TB[od[0]].length; TB[od[18]]++)
              if (BB(TB[od[2]], TB[od[0]].substr(od[2], TB[od[18]]), TB[od[16]].substr(od[2], TB[od[18]])) && BB(TB[od[2]], TB[od[0]].substr(TB[od[18]]), TB[od[16]].substr(TB[od[18]])) || BB(TB[od[2]], TB[od[0]].substr(od[2], TB[od[18]]), TB[od[16]].substr(TB[od[16]].length - TB[od[18]])) && BB(TB[od[2]], TB[od[0]].substr(TB[od[18]]), TB[od[16]].substr(od[2], TB[od[16]].length - TB[od[18]]))) return TB[od[2]][TB[od[0]] + TB[od[16]]] = od[56], od[56];
            return TB[od[2]][TB[od[0]] + TB[od[16]]] = od[54], od[54]
          }, console.log((function(...TB) {
            return TB[od[11]] = od[16], BB({}, TB[od[2]], TB[od[0]])
          })))
        }
        return iB(117) in Od && NB(), JB
      }
    }

    function ud() {
      ud = function() {}
    }
    ud(eT = {}, Bd = ['fR0dx>HQN{<mP>4V"`k2w~sTk!Hof', "t2*d{K1AxA9*@8KV7Z~Sa72!!t9DGbmjpEY@W2i]6Qv(%n*!Vf", "j<y.m,j3BFLKCWP_lia1D~mR4tap1v.V2k", "nFe1+DBAZ`ZjF(A@2bH~&Gpfz$K,XH", "^BL2KDUA2QZF|oR6>e:@,Gk", ";i82rwK7.|$.w|M3.d[_XpzRyb]Vt>ze51T1e", "L@hW%Dk", "(C/pIs_r!tv0}h.9f$K:h0]77t,%&W:j>BD_q#pQeF@p5H~Vk!K@*?k", 'q=Xz7=`Q]?HnjHm3e:W~/Ka!^2K"7"9U]KVW6=4fJe?$#I', 'p:2S5*|<nLTShA>j}RfWz8IUe"!*OosmSDn', "FSmWS5y[;AhS@~A3ABN<Rq!/f`nZ+|verCw2BKSfU|qd2Kum<N+4ri3n", "/`5<Q3sm/$);E~w@$aTS{+jzLL>H~H3>NaQPg#~7I", "9d27f+Fj4", "@/XZ:p]AQ|:,q>K=rC%(x{0%dN+J@W|@~by_Z6Jj]R+}N8cT3BkZB6SrUEh", '32C.>SvOQ!0]a|^e#C0dZK2TE"fEiqH!r1QP', "PiyPR><84", 'pHl("3prQFBSij8WUZ*d_c9JF?}Q`~QtR(PcYAaz[l6He3P>Y:i0Q', "C:3pX{&A(LkXubE!6<*9!ck", "wbLSR*yP1tC]aIH!YRTzv0&A0DlK7W+WUETZBwYPtl]?KQl3", 'mi"#ZKl]GE:?]HAr<iqao)`V/F(eS?WeCi`W/=&jwEBDFQL=ck', "pbT1V>`QlYxJxHx<mZ=7O5`tReH2|K2rLS/I", '22Np*%1Jsl9ZN"Ortf', "s6lSqDjz/$rHcV!6cy/5O7^re`+aIq^_^DB2<](ra$T_g3c9ROhJPdXn", 'N9%@oh!nJef#dVC6aO"#U(LQcLPHX||romY_P%erywEKCHsr4!l`,,jn', "?i?.,2/z,`~Sc*J!lOb543N/rNES>bZ@p|2p,TW<Z{DF}h.", ":H@dd*RAGN}W)~sX4O$.{~%r5Y>51=feD2fZ[{?/N`i!/QO@pE+<@", '9E4dj827[AC.DVsm7:AY0dQ)KAMh3|<3X"s7Ida7gbY7I:,VmB1`', "h:Fau7?n", 'e"H<_2|QUNK(<XqW$"fW`%^<VAB(yXHza<T(D?[r""%}u9|,dEl(DY)Z1', 'O2=P13ZQa{rPNHE!cybpDAIJ||bE!4&9yCh~R3t,D"@Ef', '[U[dlpTlELH%=IJ_4<+<=T})XRBFHou;GZ$p"dGG.b"zIqR', '8:8S&w5!l"(', "d}q0W2:PSDBw}b4=cD[:?Z){:lp]uqJ", "*1Z0i?^Q8Ju^b>d9;NG0W|n!{DvwWn", "hm>pC,;n7t#*.9j,RR`1TL8f]`o;VBx,x1ez}>wA4", 'W")Zd?HrLRQmrIem4!_5s#4Q[A;o^bCV4:c(s*An', "Gw59ldHQpQ>", 'C{$dacM/h"+K`+w@(:M<]dP*Ab"D)BWrEOZ0TiD/re$5f', "cw=Imik!<Dc)O9tWrRAas5K7cYG]/nYWDbk2$[5!y!2Su8xX", "cwl`1maRZ{Q=)]Stf!w2Rsk", "=Hl15p^rwQOQ;vT_M|kWd5g[t{a", "LOZaRB;j]!^K)I", "}:s:YL$f{bKKu8grB9:7N", "w:qYKm>AMN1%!oLeoKoJ", '@i~2"5GPa$V1z=L=z/O5mchn,2x;wqHV/96@|mBn.ev', "FUs_n+3ji2,$f", 'amiY)757_"85u,mewiVGY+rP&e', "_?:S<:.zUDT,S3#jQi61", 'ai`1W,0<*Qx)">.>b1"#.B=Q/LW*!vmz;`8I,SD1Ceq?gI', "^mf2#|x7MD@%W|eWp`P5{ZW81.q0Q++WFH0_$5kAP", 'SZ[I}>jl9DQGYIj,AT@d=Ty8Nlz%nVR>"{U~Gpp<n`tmi|)6u1.Z&i$QcL4=f', "Wip2KdIzSAC7!):_99$p#([Q(29QEIh@OT4.@]!K,{(", "eLq<.>om?ws;a:urwTs5j{er#{QND=*_<CfGRd<{f`&7iW6>&N+d13+j?J", 'K_D_R5x/gEa|x8u;lS*h3T^,GN*]O>Zm"f', ';O!al3$t+`6bw"HCGiwS^p6*2l<PwH,3KZW<CL>n', "(yqYdDEL9D6.SjaU)@*_HYUA!L9HCn", "jTfGBLK7`b", "HCT(BLTTR$cYg]u;(T3d4)ge!`", "fLv@03sjX!kGf+2TYi~(vYF/{DT,D*T!%|P24B_{?}", "peeZhG9jwA<56q>=X2u7V5}f", 'LE5<rv>Ri2m|<~7m.TY.!DIzZl5]R"Q9Z2RpId~!cY@%U=om*k', "`asIuyHY@|v}{36VLHbpi~=QhLd<f", 'rZ0@#][{)LvVCA]m*_*pYAkK?DwKKb&9"ZXz{Zk', "8Ns7M26,2lLf03r6,R85W", "5iC0CK(,?J", "M|N<Hs,tc}pK]:w@$/Hdb*L,l!8ef", 'dU[_"*j70wIA>VWO|2Qd3i}fvbVQ4?lU"{;_,|v<a!r7HhLeCD=pS%=,+{nck', '#dTS0he<6lj5_9k!P:U0AZc/o`z%_q[,cw*5KY"8WN', "{Ee~38xD5wuKz993EiE2f?tr~E,", "X2`1?K@zVe", 'mR;@{0}*hRVN<IZm3"#2w/I!#FtG+"Tt8Tn', "]w$pJ)UnRefiCn._", ']H$_":N3YtFS/ngOv2haBK.!JEiwfX(9Gia`yw1A]?$mH>St6R:Sv6p<^R', "8Z(ZV>TzYtY@,Aaz[E@<e", "&D}~Kphn#RbGQ=KjV9O#<|k", 'TB?<fs<8{DOZ"9Hez{^4cpoAo?_N7|*_.ii4r8Y[|etHq>hTiy|<eqK!P', "(Hc@bBp,k{}z@W3el2}dK)$8SN7PJH", 'nd"7Dmi1"RuaJH"N/EU~))x/{AZ53Xg;C{CaZ6;n', ":1V1l3ssG|G,Q3n3/:F4@:,)/JVECKljW:M0c>3jP", 'xb#Gv+J//|Z*}8==O/b`,2q<I2t%E=1="ZbPx5k', "wZvI1hO,d}M0u>+WpNi.", 'sy"72=Fj/"=~IXS9UEdZ%pCf0J^a.4E!YZVaIsk', 'cwPc{+nsMNb%P>d9^SK_l~<Y"!oJf+WOd10_W', "rOO74mQ*>lfQE?_OY`/PV8dAWD37f+rV&{*5=Tz7`D}%~~~t", "J:5:E+I3GeY", 'AbAa53O,>QSS.hS_H"KPpoYQlRw]h=_Oz{0_a:N7N2=5_9gmFk', "uD`1Hm4PWb#BQ+#e={Ih70PPMDiKk", "i230R5tf", "FZ>_0)Nn", "<h=%Im7O", ",jx8(pSO", "Xl,8m/uO", "gv%l]whd", "?C}lX9@hjR|k(UBqF&iD77);x/f%=bBqxu:cxF?n60%,Q3FCbCzZD", '~"^o,HRIik4fdcpE)DCb<<jlx0}rJOpEfF!T]]9Y),46Z=deUt', 'X6%&u1i]vR3b@)l((6Q"hquG0+/?juUh>zr?s', "#blG", "x$DE@kX", "iIohu+aZ", "Jc.KROX", "tRsJ:t:A", "*I2.{oJX", '"v%[sYPO', "0Sv{?", "Dk<*t[F;", "K:xCX:5d", "Y`/;~", "hYdxG_sG", "@>|ni5>C", "+IM)p(lD", ";~Nb+DAA", "^3.^7>eC", "r5f#?MhO", "IrxV<AUO", ";R>|]", "EdoJ{C^w", ">JX]A", "spiRM3PD", "{`4_4Bwn", 'kkg]"1u^PQ', "iZ70C]k", "p2`zN5dj1", "iZ70C]Yf", "`[&g", "ytn<!oIl", "yVi9wM{0", "GmI0+*k", ",z}?(M>u", "`oU~DPQu", "28Q%Q", "UF{%j^Se", "pSXc=", "X>KH|G}=", "1AkB,g%=", "eiU9MMD=", "G.NG=@fbGv", "lcjUj", "lcjUmR|dX*@eX", ">?;%n`VvcS", "EK,ni.M<^<", "0qG]{4T_^<", ",U8nc1MNU<", "&FV&U?*afI", "R_gE<#^IaI", "<hqEFA)zaI"]), ud(Td = function() {
      var BB, TB, dB, VB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      ud(BB = void 0, TB = []);
      try {
        ud(BB = Object, TB[od[21]]("".__proto__.constructor.name))
      } catch (Vd) {}
      BB: for (dB = od[2]; dB < VB[od[11]]; dB++) try {
        var yB;
        for (BB = VB[dB](), yB = od[2]; yB < TB[od[11]]; yB++)
          if (typeof BB[TB[yB]] === od[12]) continue BB;
        return BB
      } catch (Vd) {}
      return BB || this
    }() || {}, dd = Td.TextDecoder, Vd = Td.Uint8Array, yd = Td[od[79]], pd = Td.String || String, ld = Td.Array || Array, Jd = function(...BB) {
      return ud(BB[od[11]] = od[2], BB[od[22]] = new ld(od[81]), BB[od[23]] = pd[od[19]] || pd.fromCharCode, BB[od[14]] = []),
        function(...TB) {
          for (ud(TB[od[11]] = od[0], TB[od[0]] = od[13], TB[od[16]] = od[13], TB[od[4]] = TB[od[2]][od[11]], BB[od[14]][od[11]] = od[2]), TB[od[15]] = od[2]; TB[od[15]] < TB[od[4]];) ud(TB[od[16]] = TB[od[2]][TB[od[15]]++], TB[od[16]] <= od[80] ? TB[od[0]] = TB[od[16]] : TB[od[16]] <= od[38] ? TB[od[0]] = (31 & TB[od[16]]) << od[18] | TB[od[2]][TB[od[15]]++] & od[17] : TB[od[16]] <= od[68] ? TB[od[0]] = (15 & TB[od[16]]) << od[20] | (TB[od[2]][TB[od[15]]++] & od[17]) << od[18] | TB[od[2]][TB[od[15]]++] & od[17] : pd[od[19]] ? TB[od[0]] = (TB[od[16]] & od[9]) << 18 | (TB[od[2]][TB[od[15]]++] & od[17]) << od[20] | (TB[od[2]][TB[od[15]]++] & od[17]) << od[18] | TB[od[2]][TB[od[15]]++] & od[17] : (TB[od[0]] = od[17], TB[od[15]] += od[4]), BB[od[14]][od[21]](BB[od[22]][TB[od[0]]] || (BB[od[22]][TB[od[0]]] = BB[od[23]](TB[od[0]]))));
          return BB[od[14]][od[47]]("")
        }
    }()), kd(87) in Od && function(...BB) {
      BB[od[11]] = od[2];
      const TB = require("big-integer");
      ud(BB[-od[24]] = class {
        static randomPrime(...BB) {
          BB[od[11]] = od[0];
          const dB = TB.one.shiftLeft(BB[od[2]] - od[0]),
            VB = TB.one.shiftLeft(BB[od[2]]).prev();
          for (; od[56];) {
            let BB = TB.randBetween(dB, VB);
            if (BB.isProbablePrime(256)) return BB
          }
        }
        static generate(BB) {
          const dB = TB(65537);
          let VB, yB, pB;
          do {
            ud(VB = this.randomPrime(BB / od[16]), yB = this.randomPrime(BB / od[16]), pB = TB.lcm(VB.prev(), yB.prev()))
          } while (TB.gcd(dB, pB).notEquals(od[0]) || VB.minus(yB).abs().shiftRight(BB / od[16] - od[48]).isZero());
          return {
            e: dB,
            n: VB.multiply(yB),
            d: dB.modInv(pB)
          }
        }
        static encrypt(...BB) {
          return BB[od[11]] = od[4], TB(BB[od[2]]).modPow(BB[od[16]], BB[od[0]])
        }
        static decrypt(...BB) {
          return BB[od[11]] = od[4], TB(BB[od[2]]).modPow(BB[od[0]], BB[od[16]])
        }
        static encode(...BB) {
          BB[od[11]] = od[0];
          const dB = BB[od[2]].split("").map((BB => BB.charCodeAt())).join("");
          return TB(dB)
        }
        static decode(...BB) {
          BB[od[11]] = od[0];
          const TB = BB[od[2]].toString();
          BB[od[0]] = "";
          for (let dB = od[2]; dB < TB.length; dB += od[16]) {
            let VB = Number(TB.substr(dB, od[16]));
            VB <= 30 ? (BB[od[0]] += String.fromCharCode(Number(TB.substr(dB, od[4]))), dB++) : BB[od[0]] += String.fromCharCode(VB)
          }
          return BB[od[0]]
        }
      }, module.exports = BB[-od[24]])
    }(), ud(Yd = Object[kd(od[25])](od[34]), gd = void 0), ud(bT = (...BB) => {
      function TB(...BB) {
        return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = function(...BB) {
          for (ud(BB[od[11]] = od[0], BB[-od[68]] = '7u)[;"56$?=v4w/^|`&@xGqO}ShD8N]i(+XP#drsoHyZC{lJcFgzTbeK.pL%0Q19E<2_Ut!M*jnaf~I>RW:kYV,mB3A', BB[od[22]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[od[22]].length, BB[-od[69]] = [], BB[od[37]] = od[2], BB[od[18]] = od[2], BB[od[9]] = -od[0]), BB[-od[3]] = od[2]; BB[-od[3]] < BB[od[23]]; BB[-od[3]]++)
            if (BB[od[70]] = BB[-od[68]].indexOf(BB[od[22]][BB[-od[3]]]), BB[od[70]] !== -od[0])
              if (BB[od[9]] < od[2]) BB[od[9]] = BB[od[70]];
              else {
                ud(BB[od[9]] += BB[od[70]] * od[30], BB[od[37]] |= BB[od[9]] << BB[od[18]], BB[od[18]] += (BB[od[9]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[-od[69]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[od[18]] -= od[3])
                } while (BB[od[18]] > od[9]);
                BB[od[9]] = -od[0]
              } return BB[od[9]] > -od[0] && BB[-od[69]].push((BB[od[37]] | BB[od[9]] << BB[od[18]]) & od[10]), Ld(BB[-od[69]])
        }(Bd[BB[od[2]]]) : eT[BB[od[2]]]
      }
      BB[od[11]] = od[0], kd(118) in Od && function(...BB) {
        ud(BB[od[11]] = od[2], BB[od[27]] = function(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[61]] = BB[od[2]].length, BB[od[16]] = [], BB[od[23]] = od[2]), BB[od[15]] = od[2]; BB[od[15]] < BB[od[61]]; BB[od[15]]++) BB[od[16]].push(BB[od[15]] !== od[2] && BB[od[2]][BB[od[15]]] > BB[od[2]][BB[od[15]] - od[0]] ? BB[od[16]][BB[od[15]] - od[0]] + od[0] : od[0]);
          for (BB[od[7]] = BB[od[61]] - od[0]; BB[od[7]] >= od[2]; BB[od[7]]--) BB[od[7]] !== BB[od[61]] - od[0] && BB[od[2]][BB[od[7]]] > BB[od[2]][BB[od[7]] + od[0]] && (BB[od[16]][BB[od[7]]] = Math.max(BB[od[16]][BB[od[7]]], BB[od[16]][BB[od[7]] + od[0]] + od[0])), BB[od[23]] += BB[od[16]][BB[od[7]]];
          return BB[od[23]]
        }, console.log(BB[od[27]]))
      }();
      const dB = function(BB) {
          var TB;
          return {
            meta: {
              ...BB.meta,
              formatVersion: sT.h,
              variation: null !== (TB = BB.meta.variation) && void 0 !== TB ? TB : null
            },
            initialChunks: BB.initialChunks.map((BB => ({
              chunkPos: BB.chunkPos,
              rle: MT(BB.rle),
              sharedBlockData: FT("sharedBlockData", BB.sharedBlockData)
            }))),
            ticks: BB.ticks.map(jT),
            editState: BB.editState
          }
        }(BB[od[2]]),
        VB = VT(sT[od[35]]);
      BB[-od[71]] = od[13];
      try {
        function YB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = 'l0yX8";T5tPL2W9|ipm?Qxqc4hd$].^g3+uHR)DsBv6kea=z#_`jI&VYfo*M[JwG~b(FC>N<1AK%r7!U:ZEOn,}/@{S', BB[od[16]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[od[16]].length, BB[-od[74]] = [], BB[od[7]] = od[2], BB[od[72]] = od[2], BB[od[73]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[23]]; BB[od[3]]++)
            if (BB[od[5]] = BB[od[27]].indexOf(BB[od[16]][BB[od[3]]]), BB[od[5]] !== -od[0])
              if (BB[od[73]] < od[2]) BB[od[73]] = BB[od[5]];
              else {
                ud(BB[od[73]] += BB[od[5]] * od[30], BB[od[7]] |= BB[od[73]] << BB[od[72]], BB[od[72]] += (BB[od[73]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[-od[74]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[72]] -= od[3])
                } while (BB[od[72]] > od[9]);
                BB[od[73]] = -od[0]
              } return BB[od[73]] > -od[0] && BB[-od[74]].push((BB[od[7]] | BB[od[73]] << BB[od[72]]) & od[10]), Ld(BB[-od[74]])
        }

        function gB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = YB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }
        BB[-od[71]] = VB[gB(od[45])](dB)
      } catch (JB) {
        function oB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[-od[76]] = 'eOQZHwraig4EzqI@fPDpco8.U;xdJ7K#C2!k:?`$&]3[<l0"/YthM_6}GyT(N1,)~vu59L=>WV+j|^SF%nB{mAbRXs*', BB[-od[43]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[-od[43]].length, BB[od[75]] = [], BB[od[37]] = od[2], BB[od[18]] = od[2], BB[od[9]] = -od[0]), BB[od[40]] = od[2]; BB[od[40]] < BB[od[23]]; BB[od[40]]++)
            if (BB[od[5]] = BB[-od[76]].indexOf(BB[-od[43]][BB[od[40]]]), BB[od[5]] !== -od[0])
              if (BB[od[9]] < od[2]) BB[od[9]] = BB[od[5]];
              else {
                ud(BB[od[9]] += BB[od[5]] * od[30], BB[od[37]] |= BB[od[9]] << BB[od[18]], BB[od[18]] += (BB[od[9]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[75]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[od[18]] -= od[3])
                } while (BB[od[18]] > od[9]);
                BB[od[9]] = -od[0]
              } return BB[od[9]] > -od[0] && BB[od[75]].push((BB[od[37]] | BB[od[9]] << BB[od[18]]) & od[10]), Ld(BB[od[75]])
        }

        function kB(...BB) {
          return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = oB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
        }
        throw ud(console[kd(120)](dB), VB[kd(121)](dB, {
          [kd(122) + kB(123)](...BB) {
            function TB(...BB) {
              return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = function(...BB) {
                for (ud(BB[od[11]] = od[0], BB[od[27]] = 'a0lVkbug8YA`Ns?DLGP~}3$[).BRt&W9h6EX*Ff>ZzeOdip(IS!o+Cc<vUqM5nj:4|2_QmJ]1{K,HT=;%"^wrxy#7@/', BB[od[53]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[od[53]].length, BB[od[78]] = [], BB[od[37]] = od[2], BB[od[8]] = od[2], BB[-od[77]] = -od[0]), BB[od[42]] = od[2]; BB[od[42]] < BB[od[23]]; BB[od[42]]++)
                  if (BB[od[70]] = BB[od[27]].indexOf(BB[od[53]][BB[od[42]]]), BB[od[70]] !== -od[0])
                    if (BB[-od[77]] < od[2]) BB[-od[77]] = BB[od[70]];
                    else {
                      ud(BB[-od[77]] += BB[od[70]] * od[30], BB[od[37]] |= BB[-od[77]] << BB[od[8]], BB[od[8]] += (BB[-od[77]] & od[31]) > od[25] ? od[32] : od[33]);
                      do {
                        ud(BB[od[78]].push(BB[od[37]] & od[10]), BB[od[37]] >>= od[3], BB[od[8]] -= od[3])
                      } while (BB[od[8]] > od[9]);
                      BB[-od[77]] = -od[0]
                    } return BB[-od[77]] > -od[0] && BB[od[78]].push((BB[od[37]] | BB[-od[77]] << BB[od[8]]) & od[10]), Ld(BB[od[78]])
              }(Bd[BB[od[2]]]) : eT[BB[od[2]]]
            }
            return TB(124) + "w" in Od && function(...BB) {
              BB[od[11]] = od[2]
            }(), gd = [BB, {}], Dd(TB(od[76]))
          }
        })), JB
      }
      const yB = lT(sT[od[35]], BB[-od[71]]),
        lB = pB[od[79]][kd(126)](od[15]);
      return lB[TB(od[80]) + TB(od[81]) + "E"](sT[od[35]]), pB[od[79]].concat([lB, yB])
    }, nT = (...BB) => {
      function TB(...BB) {
        return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = function(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = '/heLWlgdnMcaqD:KBIs<SXAoiG=Q7>zE%C_}6U!O?1T[w$0&x@983^]y~|);PkHtZrj{b2JF4Y(,fmV`.#p"uNv*5+R', BB[od[82]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[od[82]].length, BB[od[15]] = [], BB[od[7]] = od[2], BB[od[84]] = od[2], BB[-od[83]] = -od[0]), BB[od[3]] = od[2]; BB[od[3]] < BB[od[4]]; BB[od[3]]++)
            if (BB[od[5]] = BB[od[27]].indexOf(BB[od[82]][BB[od[3]]]), BB[od[5]] !== -od[0])
              if (BB[-od[83]] < od[2]) BB[-od[83]] = BB[od[5]];
              else {
                ud(BB[-od[83]] += BB[od[5]] * od[30], BB[od[7]] |= BB[-od[83]] << BB[od[84]], BB[od[84]] += (BB[-od[83]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[15]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[84]] -= od[3])
                } while (BB[od[84]] > od[9]);
                BB[-od[83]] = -od[0]
              } return BB[-od[83]] > -od[0] && BB[od[15]].push((BB[od[7]] | BB[-od[83]] << BB[od[84]]) & od[10]), Ld(BB[od[15]])
        }(Bd[BB[od[2]]]) : eT[BB[od[2]]]
      }
      BB[od[11]] = od[0];
      const dB = pB[od[79]][TB(129)](BB[od[2]]);
      if (dB[TB(130) + TB(131)] >= od[15]) {
        function VB(...BB) {
          for (ud(BB[od[11]] = od[0], BB[od[27]] = '.=2[),0+B<H@>F_AE4JO]rwQulN5m1$vc/S8&nhWXy!e*:GDU9"k?M`%7iZzg~xsRf3|jKpLaqb{C}VYtId(#o^6;PT', BB[od[85]] = "" + (BB[od[2]] || ""), BB[od[4]] = BB[od[85]].length, BB[od[14]] = [], BB[-od[87]] = od[2], BB[od[8]] = od[2], BB[-od[86]] = -od[0]), BB[od[35]] = od[2]; BB[od[35]] < BB[od[4]]; BB[od[35]]++)
            if (BB[od[5]] = BB[od[27]].indexOf(BB[od[85]][BB[od[35]]]), BB[od[5]] !== -od[0])
              if (BB[-od[86]] < od[2]) BB[-od[86]] = BB[od[5]];
              else {
                ud(BB[-od[86]] += BB[od[5]] * od[30], BB[-od[87]] |= BB[-od[86]] << BB[od[8]], BB[od[8]] += (BB[-od[86]] & od[31]) > od[25] ? od[32] : od[33]);
                do {
                  ud(BB[od[14]].push(BB[-od[87]] & od[10]), BB[-od[87]] >>= od[3], BB[od[8]] -= od[3])
                } while (BB[od[8]] > od[9]);
                BB[-od[86]] = -od[0]
              } return BB[-od[86]] > -od[0] && BB[od[14]].push((BB[-od[87]] | BB[-od[86]] << BB[od[8]]) & od[10]), Ld(BB[od[14]])
        }

        function lB(BB) {
          return typeof eT[BB] === od[12] ? eT[BB] = VB(Bd[BB]) : eT[BB]
        }

        function JB(...BB) {
          function TB() {}
          BB[od[11]] = od[2], ud(BB[od[27]] = function(...BB) {
            for (ud(BB[od[11]] = od[16], BB[od[88]] = od[2], BB[od[4]] = od[2], BB[od[15]] = new TB(od[2]), BB[od[7]] = BB[od[15]], BB[od[37]] = BB[od[2]], BB[od[9]] = BB[od[0]]); BB[od[37]] !== od[34] || BB[od[9]] !== od[34];) ud(BB[od[4]] = (BB[od[37]] ? BB[od[37]].val : od[2]) + (BB[od[9]] ? BB[od[9]].val : od[2]) + BB[od[88]], BB[od[88]] = Math.floor(BB[od[4]] / od[41]), BB[od[7]].next = new TB(BB[od[4]] % od[41]), BB[od[7]] = BB[od[7]].next, BB[od[37]] = BB[od[37]] ? BB[od[37]].next : od[34], BB[od[9]] = BB[od[9]] ? BB[od[9]].next : od[34]);
            return BB[od[88]] && (BB[od[7]].next = new TB(BB[od[88]])), BB[od[15]].next
          }, console.log(BB[od[27]]))
        }
        lB(od[62]) in Od && JB();
        const YB = dB[lB(133) + lB(134)](od[2]);
        if ((od[2], sT.q)(YB)) {
          function gB(...BB) {
            for (ud(BB[od[11]] = od[0], BB[od[27]] = 'AXBMhIs#b~ZOf;N&6]qw0v4L`F8jYo|GUCHtda<+=)P:(,RyS{VcEuJ%[W/K._g*zm9n2le?5$xT1^7}@QD3!kirp">', BB[-od[89]] = "" + (BB[od[2]] || ""), BB[od[23]] = BB[-od[89]].length, BB[od[14]] = [], BB[od[7]] = od[2], BB[od[18]] = od[2], BB[od[29]] = -od[0]), BB[od[35]] = od[2]; BB[od[35]] < BB[od[23]]; BB[od[35]]++)
              if (BB[-od[81]] = BB[od[27]].indexOf(BB[-od[89]][BB[od[35]]]), BB[-od[81]] !== -od[0])
                if (BB[od[29]] < od[2]) BB[od[29]] = BB[-od[81]];
                else {
                  ud(BB[od[29]] += BB[-od[81]] * od[30], BB[od[7]] |= BB[od[29]] << BB[od[18]], BB[od[18]] += (BB[od[29]] & od[31]) > od[25] ? od[32] : od[33]);
                  do {
                    ud(BB[od[14]].push(BB[od[7]] & od[10]), BB[od[7]] >>= od[3], BB[od[18]] -= od[3])
                  } while (BB[od[18]] > od[9]);
                  BB[od[29]] = -od[0]
                } return BB[od[29]] > -od[0] && BB[od[14]].push((BB[od[7]] | BB[od[29]] << BB[od[18]]) & od[10]), Ld(BB[od[14]])
          }

          function oB(...BB) {
            return BB[od[11]] = od[0], typeof eT[BB[od[2]]] === od[12] ? eT[BB[od[2]]] = gB(Bd[BB[od[2]]]) : eT[BB[od[2]]]
          }
          const kB = dB[oB(od[24])](od[15]),
            LB = pT(YB) ? pB[od[79]][oB(136)](JT(YB, kB)) : kB;
          return function(BB) {
            var TB, dB, VB, pB, lB;
            const JB = null === (TB = BB.meta) || void 0 === TB ? void 0 : TB.formatVersion;
            if (!(0, sT.q)(JB)) throw new Error(`Unsupported recording format version: ${JB}`);
            if (!Array.isArray(BB.initialChunks) || !Array.isArray(BB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const yB of BB.ticks)
              if (!Array.isArray(yB.structuralEvents) || !Array.isArray(yB.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const YB = {
              ...BB.meta
            };
            return YB.formatVersion = sT.h, (0, yB.M)(YB.variation) && delete YB.variation, {
              meta: YB,
              initialChunks: BB.initialChunks.map((BB => {
                var TB;
                return {
                  chunkPos: BB.chunkPos,
                  rle: zT(BB.rle),
                  sharedBlockData: null !== (TB = KT("sharedBlockData", BB.sharedBlockData)) && void 0 !== TB ? TB : []
                }
              })),
              ticks: BB.ticks.map(AT),
              editState: {
                cameraKeyframes: null !== (dB = null === (VB = BB.editState) || void 0 === VB ? void 0 : VB.cameraKeyframes) && void 0 !== dB ? dB : [],
                playbackMark: null !== (pB = null === (lB = BB.editState) || void 0 === lB ? void 0 : lB.playbackMark) && void 0 !== pB ? pB : null
              }
            }
          }(VT(YB)[oB(137)](LB))
        }
      }
      throw new Error(TB(138) + TB(od[90]) + TB(140) + TB(od[42]) + TB(142) + TB(143) + TB(144) + od[14])
    })
  },
  35935: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => lB,
      h: () => VB,
      i: () => kB,
      m: () => LB,
      q: () => pB,
      r: () => gB,
      t: () => OB,
      u: () => YB,
      x: () => oB,
      z: () => JB
    });
    const VB = 9,
      yB = [9];

    function pB(BB) {
      return yB.includes(BB)
    }
    const lB = 100,
      JB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      YB = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      gB = ["itemName", "amount", "position", "size", "attributes"],
      oB = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      kB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "zK", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      LB = ["selectedSlotIndex", "slots"],
      OB = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35930: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => kB,
      g: () => DB,
      k: () => YB,
      m: () => lB,
      n: () => JB,
      o: () => gB
    });
    var VB = dB(279),
      yB = dB(24);

    function pB(BB) {
      return null === BB || void 0 === BB ? null : "string" === typeof BB ? BB : null
    }

    function lB(BB, TB) {
      return JSON.stringify(BB) === JSON.stringify(TB)
    }

    function JB(BB) {
      const TB = [];
      for (const dB of Object.keys(BB)) {
        const VB = BB[dB];
        for (const BB of Object.keys(VB)) TB.push({
          aT: dB,
          name: BB,
          ...VB[BB]
        })
      }
      return TB
    }

    function YB(BB) {
      const TB = {};
      for (const pB of BB) {
        var dB, VB, yB;
        TB[pB.aT] || (TB[pB.aT] = {}), TB[pB.aT][pB.name] = {
          icon: pB.icon,
          level: pB.level,
          displayName: null !== (dB = pB.displayName) && void 0 !== dB ? dB : null,
          endTick: null !== (VB = pB.endTick) && void 0 !== VB ? VB : null,
          showInNametag: null === (yB = pB.showInNametag) || void 0 === yB || yB
        }
      }
      return TB
    }

    function gB(BB, TB) {
      const dB = {};
      for (const yB of Object.keys(BB)) {
        const pB = {};
        for (const dB of Object.keys(BB[yB])) {
          const VB = BB[yB][dB];
          null !== VB.endTick && VB.endTick < TB || (pB[dB] = {
            ...VB,
            endTick: null === VB.endTick ? null : VB.endTick - TB
          })
        }(0, VB.Ac)(pB) || (dB[yB] = pB)
      }
      return dB
    }

    function oB(BB, TB, dB) {
      if (null !== BB) return Math.max(0, 1e3 * (BB - TB) / dB)
    }
    class kB {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(BB, TB) {
        this.clear();
        const dB = Date.now();
        for (const JB of BB.iterateEntityIds()) {
          const YB = BB.getEffects(JB);
          if ((0, VB.Ac)(YB)) continue;
          const gB = TB(JB);
          for (const BB of Object.keys(YB)) {
            var yB, lB;
            const TB = YB[BB];
            this.upsert(gB, BB, {
              icon: TB.icon,
              level: TB.level,
              displayName: pB(TB.displayName),
              showInNametag: null === (yB = TB.showInNametag) || void 0 === yB || yB,
              endTime: void 0 !== TB.duration && null !== TB.duration ? (null !== (lB = TB.appliedAt) && void 0 !== lB ? lB : dB) + TB.duration : null
            })
          }
        }
      }
      upsert(BB, TB, dB) {
        this.tracked[BB] || (this.tracked[BB] = {}), this.tracked[BB][TB] = dB
      }
      remove(BB, TB) {
        const dB = this.tracked[BB];
        dB && (delete dB[TB], (0, VB.Ac)(dB) && delete this.tracked[BB])
      }
      handleUpdate(BB) {
        var TB;
        0 !== BB.duration ? this.upsert(BB.aT, BB.name, {
          icon: BB.icon,
          level: BB.level,
          displayName: pB(BB.displayName),
          showInNametag: null === (TB = BB.showInNametag) || void 0 === TB || TB,
          endTime: void 0 !== BB.duration && null !== BB.duration ? Date.now() + BB.duration : null
        }) : this.remove(BB.aT, BB.name)
      }
      handleRemove(BB, TB) {
        this.remove(BB, TB)
      }
      sample(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const yB = {},
          pB = 1e3 / TB;
        for (const lB of Object.keys(this.tracked)) {
          const TB = this.tracked[lB],
            JB = {};
          for (const VB of Object.keys(TB)) {
            const yB = TB[VB];
            let YB = null;
            if (null !== yB.endTime) {
              const TB = Math.max(0, yB.endTime - dB);
              if (0 === TB) {
                this.remove(lB, VB);
                continue
              }
              YB = BB + Math.ceil(TB / pB)
            }
            JB[VB] = {
              icon: yB.icon,
              level: yB.level,
              displayName: yB.displayName,
              endTick: YB,
              showInNametag: yB.showInNametag
            }
          }(0, VB.Ac)(JB) || (yB[lB] = JB)
        }
        return yB
      }
    }

    function LB(BB, TB, dB, VB) {
      BB.hasEntity(TB) ? BB.updateEffect(TB, dB, VB) : function(BB, TB, dB) {
        yB.h.yH("EffectUpdate", {
          aT: BB,
          name: TB,
          ...dB
        }, !0)
      }(TB, dB, VB)
    }

    function OB(BB, TB, dB) {
      BB.hasEntity(TB) ? BB.removeEffect(TB, dB) : function(BB, TB) {
        yB.h.yH("RemoveEffect", {
          aT: BB,
          name: TB
        }, !0)
      }(TB, dB)
    }

    function DB(BB, TB, dB, VB, yB, pB, lB) {
      for (const oB of Object.keys(dB))
        for (const pB of Object.keys(dB[oB])) {
          var JB;
          null !== (JB = TB[oB]) && void 0 !== JB && JB[pB] || (OB(BB, oB, pB), VB && oB === VB && String(yB) !== String(oB) && OB(BB, yB, pB))
        }
      for (const uB of Object.keys(TB))
        for (const JB of Object.keys(TB[uB])) {
          var YB, gB;
          const HB = TB[uB][JB],
            EB = oB(HB.endTick, pB, lB);
          if (0 === EB) {
            OB(BB, uB, JB), VB && uB === VB && String(yB) !== String(uB) && OB(BB, yB, JB);
            continue
          }
          const vB = null === (YB = dB[uB]) || void 0 === YB ? void 0 : YB[JB],
            mB = vB && (DB = HB, (kB = vB).icon === DB.icon && kB.level === DB.level && kB.displayName === DB.displayName && kB.endTick === DB.endTick && kB.showInNametag === DB.showInNametag),
            iB = {
              icon: HB.icon,
              level: HB.level,
              displayName: null !== (gB = HB.displayName) && void 0 !== gB ? gB : void 0,
              duration: EB,
              showInNametag: HB.showInNametag
            };
          mB || LB(BB, uB, JB, iB), VB && uB === VB && LB(BB, yB, JB, {
            ...iB,
            showInNametag: !1
          })
        }
      var kB, DB
    }
  },
  35920: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => gB,
      e: () => YB,
      i: () => kB,
      l: () => lB,
      o: () => oB
    });
    var VB = dB(35913),
      yB = dB(35925);
    const pB = {
      description: "Bloxd Replay",
      accept: {
        [VB.f]: VB.b
      }
    };

    function lB() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function JB(BB) {
      return BB instanceof DOMException && "AbortError" === BB.name
    }
    async function YB() {
      try {
        const [BB] = await window.showOpenFilePicker({
          multiple: !1,
          types: [pB]
        }), TB = await BB.getFile();
        return {
          handle: BB,
          bytes: new Uint8Array(await TB.arrayBuffer())
        }
      } catch (BB) {
        if (JB(BB)) return null;
        throw BB
      }
    }
    async function gB(BB) {
      if (BB && await async function(BB) {
          const TB = {
            mode: "readwrite"
          };
          return "granted" === await BB.queryPermission(TB) || "granted" === await BB.requestPermission(TB)
        }(BB)) return BB;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, VB.j)(),
          types: [pB]
        })
      } catch (TB) {
        if (JB(TB)) return null;
        throw TB
      }
    }
    async function oB(BB, TB) {
      const dB = await BB.createWritable();
      await dB.write(new Blob([TB], {
        type: VB.f
      })), await dB.close()
    }

    function kB(BB) {
      return (0, VB.i)((0, yB.f)(BB))
    }
  },
  35466: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => kB
    });
    var VB = dB(21),
      yB = dB(95),
      pB = dB(33),
      lB = dB(3073),
      JB = dB(2939),
      YB = dB(5994);
    const gB = "shaderPackListingCheckedAt",
      oB = 36e5;

    function kB() {
      const {
        canUseShaderPacks: BB
      } = yB.featureFlags.settings;
      var TB, kB;
      (0, JB.k)(BB) && !(0, JB.g)(BB) && (TB = pB.j.getItem(gB), kB = Date.now(), "number" !== typeof TB || kB < TB || kB - TB >= oB) && (0, lB.b)((() => {
        (async function() {
          if ("landingPage" !== VB.d.get("gameState")) return;
          const BB = await (0, YB.d)();
          if (void 0 === (null === BB || void 0 === BB ? void 0 : BB.listing)) return;
          pB.j.setItem(gB, Date.now());
          const {
            followListingUpdates: TB
          } = await Promise.all([dB.e(126), dB.e(124), dB.e(116)]).then((() => dB(39918)));
          await TB(BB, BB.listing) || pB.j.removeItem(gB)
        })().catch((BB => {
          console.error("Failed to check the shader pack listing for an update", BB)
        }))
      }))
    }
  },
  35488: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => YB
    });
    var VB = dB(270),
      yB = dB(21),
      pB = dB(35497),
      lB = dB(1507),
      JB = dB(1738);

    function YB(BB, TB) {
      var dB, YB, gB;
      if (!yB.d.get("isKeydownEnabled") || BB.repeat) return;
      const oB = BB.code;
      "Escape" === BB.key ? (0, lB.i)(BB) : null !== (dB = JB.r.OpenSettings) && void 0 !== dB && dB.includes(oB) ? (0, lB.s)(BB, VB.m.SETTINGS) : null !== (YB = JB.r.OpenCharacterCustomization) && void 0 !== YB && YB.includes(oB) ? (0, pB.d)() || (0, lB.s)(BB, VB.m.CUSTOMISATION, TB()) : null !== (gB = JB.r.ShowDebugOverlay) && void 0 !== gB && gB.includes(oB) && yB.d.set({
        showDebugOverlay: !yB.d.get("showDebugOverlay")
      })
    }
  },
  35474: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => FB
    });
    var VB = dB(572),
      yB = dB(1109),
      pB = dB(163);
    const lB = "cf-";

    function JB(BB) {
      return `${lB}${BB}`
    }

    function YB(BB) {
      return BB.startsWith(JB("game-server-"))
    }

    function gB(BB) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(BB)
    }
    var oB = dB(1126),
      kB = dB(1105),
      LB = dB(24),
      OB = dB(1622),
      DB = dB(1636),
      uB = dB(2474),
      HB = dB(1201),
      EB = dB(1209),
      vB = dB(1393),
      mB = dB(1089),
      iB = dB(35476),
      NB = dB(33),
      tB = dB(138),
      fB = dB(3138);
    const sB = Date.UTC(2026, 10, 25),
      MB = 1728e5,
      zB = "gameServerRoute";
    async function wB(BB) {
      if (!BB.ok) {
        const TB = await BB.text().catch((() => ""));
        return 403 === BB.status && "ipv6_unsupported" === TB ? "ipv6Refused" : "other"
      }
      const TB = await BB.json().catch((() => null));
      return "object" === typeof TB && null !== TB && Number.isFinite(TB.version) ? "ours" : "other"
    }
    const UB = new class {
      constructor(BB) {
        this.deps = BB
      }
      hostFor(BB) {
        return this.deps.enabled && gB(BB) && "cloudflare" === this.heldRoute() ? JB(BB) : BB
      }
      async afterJoinFailed(BB, TB) {
        var dB;
        if (!this.deps.enabled || void 0 === TB) return !1;
        const VB = new URL(BB).hostname,
          yB = this.stored();
        if (YB(VB)) {
          var pB;
          if (this.deps.yD("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === yB || void 0 === yB ? void 0 : yB.route) || yB.aliasFailedOnce || "ours" !== (await this.probeHost(VB)).answer) this.store({
            arm: null !== (pB = null === yB || void 0 === yB ? void 0 : yB.arm) && void 0 !== pB ? pB : "cloudflare",
            route: "direct",
            until: this.deps.now() + 36e5
          });
          else this.store({
            ...yB,
            aliasFailedOnce: !0
          });
          return !1
        }
        if (!gB(VB) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: lB,
          cfMs: JB
        } = await this.check(VB);
        if ("blocked" !== lB) return this.deps.yD("game_server_route", lB, JB), !1;
        const oB = this.deps.now() >= sB ? "cloudflare" : null !== (dB = null === yB || void 0 === yB ? void 0 : yB.arm) && void 0 !== dB ? dB : 100 * this.deps.random() < 20 ? "holdout" : "cloudflare";
        return "holdout" === oB ? (this.store({
          arm: oB,
          route: "direct",
          until: Math.min(this.deps.now() + MB, sB)
        }), this.deps.yD("game_server_route", "blocked_holdout", JB), !1) : (this.store({
          arm: oB,
          route: "cloudflare",
          until: this.deps.now() + MB
        }), this.deps.yD("game_server_route", "blocked", JB), !0)
      }
      afterJoined(BB) {
        if (!this.deps.enabled) return;
        const TB = new URL(BB).hostname,
          dB = YB(TB);
        if (dB) this.deps.yD("game_server_route", "cf_join", 0);
        else if (!gB(TB) || this.deps.random() >= .01) return;
        const VB = dB ? TB.slice(lB.length) : TB;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(VB, "direct", "direct_failed"), await this.reportRtt(JB(VB), "cf", "cf_failed")
        }))
      }
      async check(BB) {
        const TB = this.probeHost(JB(BB));
        if ("none" !== (await this.probeHost(BB)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: dB,
          ms: VB
        } = await TB;
        return "ours" !== dB && "ipv6Refused" !== dB ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(BB)).answer ? {
          outcome: "direct_reachable",
          cfMs: VB
        } : {
          outcome: "ipv6Refused" === dB ? "blocked_ipv6" : "blocked",
          cfMs: VB
        }
      }
      async reportRtt(BB, TB, dB) {
        const VB = "ours" === (await this.probeHost(BB)).answer ? await this.probeHost(BB) : null;
        "ours" === (null === VB || void 0 === VB ? void 0 : VB.answer) ? this.deps.yD("game_server_rtt", TB, VB.ms): this.deps.yD("game_server_rtt", dB, 0)
      }
      probeHost(BB) {
        return this.deps.probe(`https://${BB}/version`, 8e3)
      }
      stored() {
        return function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            arm: TB,
            route: dB,
            until: VB,
            aliasFailedOnce: yB
          } = BB;
          return "cloudflare" !== TB && "holdout" !== TB || "cloudflare" !== dB && "direct" !== dB || "number" !== typeof VB ? null : !0 === yB ? {
            arm: TB,
            route: dB,
            until: VB,
            aliasFailedOnce: yB
          } : {
            arm: TB,
            route: dB,
            until: VB
          }
        }(this.deps.storage.getItem(zB))
      }
      heldRoute() {
        const BB = this.stored();
        return null !== BB && BB.until > this.deps.now() ? BB.route : null
      }
      store(BB) {
        this.deps.storage.setItem(zB, BB)
      }
    }({
      storage: NB.j,
      probe: async function(BB, TB) {
        const dB = performance.now(),
          VB = await (0, fB.g)(BB, {
            cache: "no-store"
          }, TB, (async BB => {
            const TB = Math.round(performance.now() - dB);
            return {
              answer: await wB(BB),
              ms: TB
            }
          }));
        return null !== VB && void 0 !== VB ? VB : {
          answer: "none",
          ms: 0
        }
      },
      yD: OB.t,
      enabled: !(0, tB.d)(),
      now: Date.now,
      random: Math.random,
      delay: BB => new Promise((TB => {
        setTimeout(TB, BB)
      }))
    });

    function FB(BB) {
      return async (TB, dB, lB, JB, gB) => {
        let kB;
        if ((0, VB.M)(lB)) {
          if (gB.aborted) return KB();
          const BB = await rB(TB, dB, JB);
          if (gB.aborted || uB.h.matchmakingEnded(BB.isError() ? null : performance.now()), BB.isError()) {
            const TB = BB.asError();
            return console.log("Join room did not succeed, reason:", TB.message), TB.forward()
          }
          kB = BB.getValue()
        } else {
          uB.h.skipPlayWait();
          const BB = IB(lB.replace("https://", "").replace("http://", ""));
          if (BB.isError()) return BB.asError().forward();
          kB = {
            endpoint: BB.getValue(),
            gameNameWithVariation: dB,
            lobbyName: TB instanceof yB.i ? TB.getLobbyName() : TB
          }
        }
        if (gB.aborted) return KB();
        console.log(`Connecting to ${kB.gameNameWithVariation} in lobby ${kB.lobbyName} on game server ${kB.endpoint}`), LB.h.yH("matchmakeAndPlayStepCompleted", {
          step: pB.i.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, OB.h)(), DB.d.markGameLoadStart(), (0, EB.r)({
          websocketUrl: kB.endpoint,
          gameNameWithVariation: kB.gameNameWithVariation,
          lobbyName: kB.lobbyName
        }), LB.h.yH("loadingScreenState", "loadingPage:loadingGame");
        const vB = async () => {
          const BB = await async function(BB, TB, dB, VB) {
            const yB = await rB(BB, TB, dB);
            if (!yB.isError() && !VB.aborted) {
              const {
                endpoint: BB,
                gameNameWithVariation: TB,
                lobbyName: dB
              } = yB.getValue();
              (0, EB.r)({
                websocketUrl: BB,
                gameNameWithVariation: TB,
                lobbyName: dB
              })
            }
            return yB
          }(TB, dB, JB, gB);
          return BB.isError() || (kB = BB.getValue()), BB
        }, mB = !(0, VB.M)(lB), iB = () => BB({
          place: kB,
          userContext: JB,
          direct: mB,
          rematch: vB
        }, gB);
        let NB = await iB();
        const tB = NB.isError() && !0 === NB.asError().debugResult.rematch;
        if (NB.isError() && !mB && !gB.aborted && (tB || await UB.afterJoinFailed(kB.endpoint, NB.asError().debugResult.gameServerUnreachable))) {
          if (gB.aborted) return KB();
          console.log("Matchmaking again");
          const BB = await vB();
          if (BB.isError()) return BB.asError().forward();
          if (gB.aborted) return KB();
          NB = await iB(), !NB.isError() || tB && !YB(new URL(kB.endpoint).hostname) || await UB.afterJoinFailed(kB.endpoint, NB.asError().debugResult.gameServerUnreachable)
        }
        return NB.isError() ? NB.asError().forward() : (UB.afterJoined(kB.endpoint), (0, HB.S)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), oB.d.value({
          gameNameWithVariation: kB.gameNameWithVariation,
          lobbyName: kB.lobbyName,
          addLobbyToRecentlyPlayed: !(TB instanceof yB.i)
        }))
      }
    }

    function KB() {
      return oB.d.errorWithCode("Left the game while it loaded", pB.i.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        IT: !0
      })
    }
    async function rB(BB, TB, dB) {
      return (0, VB.M)(BB) || BB instanceof yB.i || !(BB.length > kB.R) ? await vB.c.matchmakePlayer(dB, BB, TB, (0, iB.d)()).then((BB => {
        if (!1 === BB.succeeded) return oB.d.errorWithCode(BB.failReason, pB.i.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: TB,
          lobbyName: dB,
          gameNameWithVariation: VB
        } = BB, yB = IB(UB.hostFor(TB));
        return yB.isError() ? yB.asError().forward() : oB.d.value({
          endpoint: yB.getValue(),
          gameNameWithVariation: VB,
          lobbyName: dB
        })
      })).catch((BB => (console.error("Bad response from the matchmaking server:", BB), oB.d.errorWithCode(BB.toString(), pB.i.REQUEST_TO_MATCHMAKING, {
        error: BB,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", BB), oB.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", pB.i.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function IB(BB) {
      const TB = mB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(BB);
      return TB.isError() ? oB.d.errorWithCode(TB.asError().message, pB.i.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : oB.d.value(TB.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, EB.m)("/")
    }
  },
  8531: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => OB,
      e: () => LB
    });
    var VB = dB(21),
      yB = dB(1573),
      pB = dB(33),
      lB = dB(1235),
      JB = dB(3160),
      YB = dB(1353),
      gB = dB(1275);
    const oB = 2592e5,
      kB = "notificationOptInLastPromptedAt";
    async function LB() {
      var BB;
      const TB = await OB();
      if (null === TB) return;
      const dB = null !== (BB = pB.j.getItem(kB)) && void 0 !== BB ? BB : 0;
      if (Date.now() - dB < oB) return;
      if ((0, gB.i)()) return;
      const VB = await lB.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: yB.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOnCancel: !0
      }).getResult();
      "notificationTornDown" !== VB && (pB.j.setItem(kB, Date.now()), (0, YB.f)({
        id: !0 === VB ? "push.allow" : "push.deny",
        value: yB.d.supports("notifications") ? "app" : "browser"
      }), !0 === VB && TB().catch((BB => {
        console.error("Failed to ask for push notifications:", BB)
      })))
    }
    async function OB() {
      return await yB.d.ready, yB.d.supports("notifications") ? VB.d.get("mobilePushNotificationsCanAsk") ? async () => {
        yB.d.request("notifications.requestPermission", {}).then((BB => {
          let {
            canAsk: TB
          } = BB;
          VB.d.set({
            mobilePushNotificationsCanAsk: TB
          })
        }), (BB => {
          console.error("The app couldn't ask for push notifications:", BB)
        }))
      }: null: await JB.c.canAsk() ? () => JB.c.requestPermission() : null
    }
  },
  35479: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => LB,
      d: () => oB,
      f: () => OB,
      i: () => kB
    });
    var VB = dB(279),
      yB = dB(597),
      pB = dB(974),
      lB = dB(33);
    const JB = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      YB = "playSessionGameNameWithVariation",
      gB = "wasMatchmakePlayer";

    function oB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      (0, pB.k)(BB, JB)
    }

    function kB() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).setItem(gB, !0)
    }

    function LB() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m;
      return (0, pB.d)(BB, JB)
    }

    function OB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lB.m;
      const dB = (0, pB.d)(TB, JB),
        oB = function(BB) {
          const TB = BB.getItem(YB);
          return "string" !== typeof TB ? null : TB
        }(TB),
        kB = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).getItem(gB)
        }(TB);
      let LB;
      return LB = null !== dB && null !== oB && (0, pB.h)(TB, JB) && function(BB, TB, dB) {
          const yB = (0, VB.Vb)(BB),
            pB = (0, VB.Vb)(TB),
            lB = (0, VB.Qb)(BB),
            JB = (0, VB.Qb)(TB);
          return !(yB !== pB || !dB) || yB === pB && lB === JB
        }(oB, BB, kB) ? dB : (0, yB.e)(), (0, pB.n)(TB, JB, LB), TB.setItem(YB, BB),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : lB.m).removeItem(gB)
        }(TB), LB
    }
  },
  35476: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => HB,
      f: () => EB
    });
    var VB = dB(900),
      yB = dB(581),
      pB = dB(279),
      lB = dB(907),
      JB = dB(586),
      YB = dB(3931),
      gB = dB(95),
      oB = dB(138),
      kB = dB(1596),
      LB = dB(105),
      OB = dB(35479),
      DB = dB(33),
      uB = dB(965);

    function HB() {
      var BB, TB;
      return [...null !== (BB = navigator.languages) && void 0 !== BB ? BB : [null !== (TB = navigator.language) && void 0 !== TB ? TB : "none"], "en-gb"]
    }

    function EB(BB, TB, dB, EB, vB) {
      const mB = (0, VB.j)(TB) ? (0, VB.l)(TB) : null,
        iB = {
          cookies: (0, kB.getAllCookiesForGameNameWithVariation)(TB),
          isMobile: (0, gB.isMobile)(),
          isUsingCustomGameTexturePack: null !== mB && vB(mB),
          generalCookies: {
            joinDiscord: !!DB.j.getItem("DiscordPressed"),
            newGo: YB.c,
            ...BB.getMetricsCookies(),
            trafficCode: EB,
            compliance: gB.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, gB.getBrowserName)(),
            version: (0, gB.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, gB.getPlatformType)(),
            deviceType: (0, LB.e)()
          },
          isLoggedIn: BB.isLoggedIn(),
          lobbyName: dB,
          languages: HB(),
          version: yB.b,
          siteUsed: oB.v,
          subsiteUsed: oB.D,
          playSessionId: (0, OB.f)(TB),
          visitSessionId: (0, uB.b)(),
          clientReason: JB.h.reason
        };
      return null !== mB && (0, pB.Fc)(mB) ? (iB.lobbyName = (0, VB.i)(mB, (0, VB.k)(TB), dB), {
        roomName: `classic_${lB.e}`,
        joinOptions: iB
      }) : {
        roomName: TB,
        joinOptions: iB
      }
    }
  },
  35568: (BB, TB, dB) => {
    function VB(BB, TB) {
      for (let dB = 0; dB < BB.length; dB++)
        if (BB[dB].identifier === TB) return BB[dB];
      return null
    }

    function yB(BB, TB) {
      return null !== VB(BB, TB)
    }
    dB.d(TB, {
      c: () => VB,
      g: () => yB
    })
  },
  35860: (BB, TB, dB) => {
    dB.d(TB, {
      C: () => KB,
      D: () => MB,
      G: () => SB,
      K: () => PB,
      O: () => QB,
      R: () => cB,
      T: () => RB,
      e: () => YB,
      g: () => UB,
      k: () => JB,
      o: () => IB,
      s: () => zB,
      w: () => tB,
      y: () => rB
    });
    var VB = dB(33);
    const yB = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      pB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      lB = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      JB = pB.filter((BB => "docsButton" !== BB)),
      YB = lB.filter((BB => "aiHelperButton" !== BB)),
      gB = "codeEditorTutorials",
      oB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      kB = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let LB = null,
      OB = null;
    const DB = new Set,
      uB = new Set;
    let HB = null;
    const EB = new Set,
      vB = new Set;

    function mB() {
      vB.forEach((BB => {
        BB()
      }))
    }

    function iB() {
      if (!LB) {
        const BB = VB.j.getItem(gB);
        LB = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof BB && null !== BB ? BB : {}
        }
      }
      return LB
    }

    function NB(BB) {
      const TB = iB();
      TB[BB] || (LB = {
        ...TB,
        [BB]: !0
      }, VB.j.setItem(gB, LB))
    }

    function tB(BB) {
      return "docsOverview" === BB ? pB : "aiHelperOverview" === BB ? lB : OB ? yB[OB] : []
    }

    function fB(BB) {
      return ("worldCodeButton" !== BB || !iB().worldCodeIntroShown) && !EB.has(BB)
    }

    function sB(BB) {
      var TB;
      return (null === (TB = HB) || void 0 === TB ? void 0 : TB.name) === BB ? HB.stepsDone : DB
    }

    function MB(BB, TB) {
      if (! function(BB) {
          return HB ? HB.name === BB : "welcome" === BB
        }(BB) || !fB(TB) || sB(BB).has(TB)) return !1;
      if (HB) return !0;
      const dB = oB[TB];
      return dB ? !iB()[dB] || uB.has(TB) : !iB()[kB[BB]]
    }

    function zB(BB) {
      var TB;
      return null !== (TB = tB(BB).find((TB => MB(BB, TB)))) && void 0 !== TB ? TB : null
    }

    function wB(BB) {
      var TB;
      NB(kB[BB]), (null === (TB = HB) || void 0 === TB ? void 0 : TB.name) === BB && (HB = null)
    }

    function UB(BB) {
      const TB = (HB ? [HB.name] : ["welcome", "docsOverview"]).find((TB => zB(TB) === BB));
      if (!TB) return;
      sB(TB).add(BB);
      const dB = oB[BB];
      dB && (NB(dB), HB || uB.add(BB)), null === zB(TB) && wB(TB), mB()
    }

    function FB(BB, TB) {
      const dB = tB(BB),
        VB = sB(BB);
      for (let yB = dB.indexOf(TB) - 1; yB >= 0; yB--)
        if (VB.has(dB[yB]) && fB(dB[yB])) return dB[yB];
      return null
    }

    function KB(BB, TB) {
      return null !== FB(BB, TB)
    }

    function rB(BB, TB) {
      const dB = FB(BB, TB);
      dB && (sB(BB).delete(dB), mB())
    }

    function IB(BB) {
      wB(BB), "welcome" === BB && tB("welcome").forEach((BB => {
        const TB = oB[BB];
        TB && NB(TB)
      })), mB()
    }

    function cB(BB) {
      HB = {
        name: BB,
        stepsDone: new Set
      }, mB()
    }

    function SB() {
      (HB || 0 !== DB.size || 0 !== uB.size) && (HB = null, DB.clear(), uB.clear(), mB())
    }

    function PB(BB, TB) {
      const dB = TB ? BB : OB === BB ? null : OB;
      dB !== OB && (OB = dB, mB())
    }

    function QB(BB, TB) {
      EB.has(BB) === TB && (TB ? EB.delete(BB) : EB.add(BB), mB())
    }

    function RB(BB) {
      return vB.add(BB), () => {
        vB.delete(BB)
      }
    }
  },
  35577: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => JB,
      e: () => kB,
      h: () => lB
    });
    var VB = dB(2101),
      yB = dB(2109),
      pB = dB(2117);

    function lB(BB, TB) {
      return (!(0, pB.b)() || 0 === BB && 0 === TB) && (0, yB.t)(VB.k.Joystick, 0, BB, TB, 0)
    }
    const JB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function YB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function gB(BB, TB) {
      const dB = BB => Math.min(65535, Math.round(4 * BB));
      return (dB(BB) | dB(TB) << 16) >>> 0
    }

    function oB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const kB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map
      }
      set(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        TB ? this.elements.set(BB, {
          element: TB,
          hidden: dB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        for (const BB of this.elements.keys()) this.measureOne(BB)
      }
      hitZone(BB, TB) {
        let dB = null,
          VB = 1;
        for (const yB of this.elements.keys()) {
          const pB = this.shown(yB);
          if (!pB) continue;
          const {
            rect: lB,
            element: JB
          } = pB, gB = oB(lB), kB = Math.max(0, lB.width / 2 - gB.radius), LB = Math.max(0, lB.height / 2 - gB.radius), OB = Math.max(0, Math.abs(BB - gB.x) - kB), DB = Math.max(0, Math.abs(TB - gB.y) - LB), uB = JB.firstElementChild;
          let HB = Math.hypot(OB, DB) / gB.radius;
          const EB = YB(uB);
          EB && (HB = Math.min(HB, Math.max(2 * Math.abs(BB - gB.x) / EB.width, 2 * Math.abs(TB - gB.y) / EB.height))), HB < VB && (dB = {
            code: yB,
            element: JB,
            key: uB,
            ...gB
          }, VB = HB)
        }
        return dB
      }
      measureOne(BB) {
        const TB = this.shown(BB);
        if (!TB) return void this.write(VB.k.TouchZone, BB, 0, 0, 0);
        const {
          rect: dB,
          element: yB
        } = TB, pB = oB(dB);
        this.write(VB.k.TouchZone, BB, pB.x, pB.y, gB(dB.width, dB.height));
        const lB = YB(yB.firstElementChild);
        this.write(VB.k.TouchZone, 256 | BB, 0, 0, lB ? gB(lB.width, lB.height) : 0)
      }
      shown(BB) {
        const TB = this.elements.get(BB);
        if (!TB || TB.hidden) return null;
        const dB = TB.element.getBoundingClientRect();
        return dB.width <= 0 || dB.height <= 0 ? null : {
          rect: dB,
          element: TB.element
        }
      }
    }(yB.t)
  },
  35823: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      f: () => JB
    });
    const VB = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      yB = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      pB = {
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
      lB = {
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
      JB = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: VB.files,
          dependencies: VB.dependencies,
          bundledSource: VB.bundledSource,
          types: VB.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: yB.files,
          dependencies: yB.dependencies,
          bundledSource: yB.bundledSource,
          types: yB.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: pB.files,
          dependencies: pB.dependencies,
          bundledSource: pB.bundledSource,
          types: pB.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: lB.files,
          dependencies: lB.dependencies,
          bundledSource: lB.bundledSource,
          types: lB.types
        }
      };

    function YB(BB) {
      const TB = [],
        dB = new Set,
        VB = BB => {
          if (dB.has(BB)) return;
          const yB = JB[BB];
          if (yB) {
            dB.add(BB);
            for (const BB of yB.dependencies) VB(BB);
            TB.push(BB)
          }
        };
      for (const yB of BB) VB(yB);
      return TB
    }
  },
  35826: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => YB,
      d: () => JB,
      h: () => lB,
      i: () => pB,
      k: () => gB,
      m: () => oB,
      p: () => DB,
      q: () => OB,
      t: () => LB
    });
    var VB = dB(1117);
    const yB = ["quickjs", "ses"];

    function pB(BB) {
      return yB.includes(BB)
    }

    function lB(BB) {
      return BB === VB.f || BB === VB.i
    }

    function JB(BB, TB) {
      return BB === VB.f && TB === VB.i || BB === VB.i && TB === VB.f
    }

    function YB(BB) {
      const TB = VB.i in BB,
        dB = VB.f in BB;
      return TB && dB ? null : TB ? VB.i : dB ? VB.f : null
    }

    function gB(BB, TB, dB) {
      const VB = `${TB}/`;
      return BB.filter((BB => BB.startsWith(VB))).map((BB => [BB, `${dB}/${BB.slice(VB.length)}`]))
    }

    function oB(BB, TB) {
      let dB = 0;
      for (const [VB, yB] of Object.entries(BB)) VB !== TB && (dB += yB.length);
      return dB
    }
    const kB = "@plugins/";

    function LB(BB) {
      return `${kB}${BB}`
    }

    function OB(BB, TB) {
      return `/node_modules/@plugins/${BB}/${TB}`
    }

    function DB(BB) {
      if (!BB.startsWith(kB)) return null;
      const TB = BB.slice(kB.length);
      return function(BB) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(BB)
      }(TB) ? TB : null
    }
  },
  35841: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => JB,
      f: () => yB,
      h: () => lB,
      i: () => YB,
      j: () => pB
    });
    var VB = dB(35832);
    const yB = 5,
      pB = "[SCHEMATIC]",
      lB = 1024e4;

    function JB(BB) {
      return BB.endsWith(".bloxdschem") && (0, VB.v)(BB.slice(0, -11) + ".ts") && BB.length <= 64
    }

    function YB(BB) {
      return Object.fromEntries(Object.keys(BB).map((BB => [BB, pB])))
    }
  },
  35832: (BB, TB, dB) => {
    dB.d(TB, {
      A: () => lB,
      d: () => yB,
      g: () => pB,
      i: () => LB,
      m: () => JB,
      p: () => YB,
      s: () => gB,
      v: () => kB,
      z: () => oB
    });
    var VB = dB(1117);
    let yB = function(BB) {
        return BB[BB.Join = 0] = "Join", BB[BB.Leave = 1] = "Leave", BB[BB.Push = 2] = "Push", BB[BB.Cursor = 3] = "Cursor", BB[BB.Submit = 4] = "Submit", BB[BB.ReloadAsVariation = 5] = "ReloadAsVariation", BB[BB.CreateFile = 6] = "CreateFile", BB[BB.RenameFile = 7] = "RenameFile", BB[BB.DeleteFile = 8] = "DeleteFile", BB[BB.SetEngine = 9] = "SetEngine", BB[BB.RenameFolder = 10] = "RenameFolder", BB
      }({}),
      pB = function(BB) {
        return BB[BB.Joined = 0] = "Joined", BB[BB.Updates = 1] = "Updates", BB[BB.Presence = 2] = "Presence", BB[BB.RemoteCursor = 3] = "RemoteCursor", BB[BB.ForceClose = 4] = "ForceClose", BB[BB.LobbyFilesChanged = 5] = "LobbyFilesChanged", BB[BB.EngineSettings = 6] = "EngineSettings", BB
      }({});

    function lB(BB) {
      return "lobby" === BB.kind ? `lobby:${BB.path}` : `codeBlock:${BB.pos[0]},${BB.pos[1]},${BB.pos[2]}`
    }

    function JB(BB) {
      if ("lobby" === BB) return {
        kind: "lobby",
        path: VB.f
      };
      if (BB.startsWith("lobby:")) {
        const TB = BB.slice(6);
        return kB(TB) ? {
          kind: "lobby",
          path: TB
        } : null
      }
      const TB = BB.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return TB ? {
        kind: "codeBlock",
        pos: [parseInt(TB[1]), parseInt(TB[2]), parseInt(TB[3])]
      } : null
    }

    function YB(BB) {
      return BB.endsWith(".d.ts")
    }

    function gB(BB) {
      return BB.endsWith(".ts") && !YB(BB)
    }
    const oB = 64;

    function kB(BB) {
      if (!BB || BB !== BB.trim()) return !1;
      if (BB.length > oB) return !1;
      if (BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) return !1;
      if (!YB(BB) && !gB(BB) && ! function(BB) {
          return BB.endsWith(".js") && !BB.endsWith(".min.js") && !BB.endsWith(".bundle.js")
        }(BB)) return !1;
      const TB = BB.split("/");
      for (const dB of TB)
        if ("" === dB || "." === dB || ".." === dB) return !1;
      return !0
    }
    const LB = 14e3
  },
  4247: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB,
      d: () => VB,
      e: () => pB,
      i: () => YB,
      j: () => lB
    });
    const VB = ["sine", "triangle", "square", "sawtooth"],
      yB = 55,
      pB = {
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

    function lB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(pB, BB) ? pB[BB] : null
    }

    function JB(BB, TB, dB) {
      return Math.min(dB, Math.max(TB, BB))
    }

    function YB(BB) {
      const TB = JB(BB.durationMs, 10, 500),
        dB = JB(BB.attackMs, 0, TB),
        {
          intonation: yB
        } = BB;
      return {
        waveform: VB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: JB(BB.pitchHz, 20, 4e3),
        glideSemitones: JB(BB.glideSemitones, -24, 24),
        durationMs: TB,
        attackMs: dB,
        releaseMs: JB(BB.releaseMs, 0, TB - dB),
        lowpassHz: null === BB.lowpassHz ? null : JB(BB.lowpassHz, 20, 2e4),
        volume: JB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: JB(yB.variationSemitones, 0, 6),
          declineSemitones: JB(yB.declineSemitones, 0, 12),
          questionRiseSemitones: JB(yB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: JB(yB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: JB(BB.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);