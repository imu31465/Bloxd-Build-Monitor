export const id = 86;
export const ids = [86];
export const modules = {
  36610: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => PB,
      f: () => AB
    });
    var QB = zB(62),
      nB = zB(1982),
      dB = zB(36619),
      IB = zB.n(dB),
      NB = zB(4664),
      uB = zB(1952),
      UB = zB(1471),
      aB = zB(106),
      pB = zB(125),
      rB = zB(376),
      sB = zB(1091),
      JB = zB.n(sB),
      mB = zB(28),
      yB = zB(1108),
      kB = zB(1664),
      GB = zB(1778),
      LB = zB(1718),
      gB = zB(2053),
      tB = zB(1442),
      SB = zB(2131),
      MB = zB(1418),
      EB = zB(3738),
      iB = zB(36624),
      qB = zB(36646),
      fB = zB(1507),
      oB = zB(2525),
      HB = zB(1240),
      DB = zB(36656);
    var FB = zB(34188),
      YB = zB(1311);
    var VB = zB(1148);
    const hB = zB(36662),
      XB = ["enter", "t", "/"];
    let ZB = !1;

    function AB() {
      return ZB || (0, GB.isTextEntry)(document.activeElement)
    }

    function TB() {
      var BB, jB;
      (0, SB.e)();
      const zB = null !== (BB = null === (jB = (0, tB.d)()) || void 0 === jB ? void 0 : jB.getBoundButton("keyboardChannel")) && void 0 !== BB ? BB : null;
      return zB ? (0, VB.jsx)(gB.b, {
        className: "ChatInputChannelGlyph",
        glyph: zB
      }) : null
    }

    function PB() {
      const {
        t: BB
      } = (0, HB.D)(), {
        isTouchScreen: jB
      } = (0, mB.m)(["isTouchScreen"]), zB = (0, MB.u)(), [dB, sB] = (0, QB.useState)(!1), gB = (0, QB.useRef)(dB), tB = (0, QB.useRef)(null), {
        messages: SB,
        reportedPlayers: AB,
        channel: PB
      } = (0, EB.l)(), eB = (0, QB.useRef)(0), lB = (0, QB.useRef)(""), wB = (0, QB.useRef)(null);
      var xB;
      xB = wB, (0, QB.useEffect)((() => {
        if (!(0, aB.isIOS)()) return;
        const BB = xB.current;
        let jB = null;
        const zB = zB => {
            const QB = zB.changedTouches[0];
            jB = "none" === getComputedStyle(BB).pointerEvents ? {
              id: QB.identifier,
              y: QB.clientY
            } : null
          },
          QB = zB => {
            const QB = jB,
              nB = QB && (0, DB.b)(zB.changedTouches, QB.id);
            nB && (zB.preventDefault(), BB.scrollBy({
              top: QB.y - nB.clientY,
              behavior: "instant"
            }), QB.y = nB.clientY)
          };
        return BB.addEventListener("touchstart", zB, {
          passive: !0
        }), BB.addEventListener("touchmove", QB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", zB), BB.removeEventListener("touchmove", QB)
        }
      }), [xB]);
      const [KB, CB] = (0, QB.useState)(!1), [cB, bB] = (0, QB.useState)(!1), vB = (0, QB.useRef)(KB), RB = (0, QB.useRef)(null), OB = (0, QB.useRef)(!1), Bj = (0, QB.useRef)(null), jj = (0, QB.useRef)(null), zj = (0, QB.useRef)(null), Qj = (0, QB.useRef)(Nj);
      Qj.current = Nj;
      const nj = (0, oB.o)();

      function dj() {
        gB.current = !1, sB(!1), jj.current.blur()
      }

      function Ij(BB) {
        vB.current = BB, CB(BB)
      }

      function Nj() {
        const BB = jj.current.value;
        jj.current.value = "", uj(BB)
      }

      function uj(BB) {
        (0, EB.k)(BB), eB.current = 0, Ij(!1)
      }

      function Uj(BB, jB) {
        0 === eB.current && (lB.current = jj.current.value);
        const zB = (0, EB.j)(eB.current + BB, jB);
        eB.current = zB.stepsBack, jj.current.value = 0 === zB.stepsBack ? lB.current : zB.text, setTimeout((() => {
          jj.current && jj.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function aj() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wB.current && (!BB && vB.current || (wB.current.scrollTop = 1e5))
      }
      return (0, NB.c)(!0, dB, "ChatComponent"), (0, QB.useEffect)((() => (ZB = dB, () => {
          ZB = !1
        })), [dB]), (0, UB.f)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, kB.q)() && sB(!1)
        })), (0, QB.useEffect)((() => {
          jj.current.addEventListener("blur", (BB => {
            if (null === jj.current) return;
            Array.from(document.querySelectorAll(":hover")).some((BB => BB.classList.contains("ChatInputChannel") || BB.classList.contains("ChatMsgSelectWrapper"))) || ((0, aB.isMobile)() && gB.current && "" !== jj.current.value && Qj.current(), sB(!1))
          }));
          const BB = BB => {
            tB.current.contains(BB.target) || (0, LB.l)(BB.target) || sB(!1)
          };
          document.addEventListener("touchstart", BB, {
            capture: !0
          });
          const jB = BB => {
            (0, qB.g)(BB.target) && (gB.current = !1, sB(!1))
          };
          document.addEventListener("mousedown", jB, {
            capture: !0
          });
          const zB = () => {
              clearTimeout(RB.current), Ij(!0)
            },
            QB = () => {
              clearTimeout(RB.current), RB.current = setTimeout((() => {
                Ij(!1), aj()
              }), 4e3)
            },
            dB = () => {
              document.pointerLockElement ? (sB(!1), bB(!0), OB.current = !1, Ij(!1), aj()) : bB(!1)
            };
          wB.current.addEventListener("pointermove", (BB => {
            "touch" === BB.pointerType || OB.current || document.pointerLockElement || (OB.current = !0, clearTimeout(RB.current))
          })), wB.current.addEventListener("pointerleave", (BB => {
            "touch" !== BB.pointerType && (OB.current = !1, vB.current && QB())
          })), wB.current.addEventListener("pointerdown", (BB => {
            "touch" === BB.pointerType || document.pointerLockElement || (OB.current = !0, zB())
          })), wB.current.addEventListener("wheel", (BB => {
            document.pointerLockElement || BB.deltaY >= 0 && Math.abs(wB.current.scrollTop) < 1 || (zB(), OB.current || (RB.current = setTimeout((() => {
              Ij(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), wB.current.addEventListener("touchstart", zB), wB.current.addEventListener("touchend", QB), wB.current.addEventListener("touchcancel", QB), document.addEventListener("pointerlockchange", dB);
          const NB = BB => {
            if (nj.shown && (gB.current || ! function(BB) {
                if ((0, GB.isTypingInInput)()) return !0;
                const jB = document.activeElement;
                return (jB instanceof HTMLButtonElement || "button" === (null === jB || void 0 === jB ? void 0 : jB.getAttribute("role"))) && ["Enter", " "].includes(BB.key)
              }(BB)) && "codeEditor" !== mB.c.get("openInGameMenuName") && "lobbyCodeEditor" !== mB.c.get("openInGameMenuName") && !nB.gameBridge.latest("connectedGame").replay)
              if (gB.current || !(0, kB.q)()) {
                if (gB.current) {
                  if ("ArrowUp" === BB.code || "ArrowDown" === BB.code) return Uj("ArrowUp" === BB.code ? 1 : -1, !1), void BB.stopPropagation();
                  if ("Tab" === BB.code) return EB.e.selectNextChannel(), BB.stopPropagation(), void BB.preventDefault();
                  if (BB.ctrlKey && WB.includes(hB[BB.keyCode])) return BB.preventDefault(), void BB.stopPropagation()
                }
                if ([...XB, "esc"].includes(IB()(BB)))
                  if ("esc" !== IB()(BB)) {
                    if (!gB.current || "/" !== IB()(BB)) {
                      if ("t" === IB()(BB)) {
                        if (gB.current) return void BB.stopPropagation();
                        BB.preventDefault()
                      }
                      gB.current && "" !== jj.current.value && Qj.current(), BB.repeat || (gB.current || "/" === IB()(BB) && (jj.current.value = "/", BB.preventDefault()), sB(!gB.current))
                    }
                  } else gB.current && (sB(!1), BB.stopPropagation());
                else gB.current && BB.stopPropagation()
              } else XB.includes(IB()(BB)) && (BB.preventDefault(), BB.stopPropagation(), (0, kB.b)(BB))
          };
          document.addEventListener("keydown", NB, {
            capture: !0
          });
          const uB = wB.current;
          let UB = !1;
          const pB = new ResizeObserver((() => {
              UB && (UB = !1, aj())
            })),
            rB = () => {
              UB = !0, pB.unobserve(uB), pB.observe(uB)
            };
          Bj.current = rB;
          const JB = new MutationObserver(rB);
          return JB.observe(uB, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", NB, {
              capture: !0
            }), document.removeEventListener("touchstart", BB, {
              capture: !0
            }), document.removeEventListener("mousedown", jB, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", dB), Bj.current = null, JB.disconnect(), pB.disconnect(), clearTimeout(RB.current)
          }
        }), []), (0, LB.t)(jj, {
          open: () => {
            sB(!0)
          },
          close: () => {
            dj()
          },
          submit: () => {
            "" !== jj.current.value && Nj(), dj()
          },
          stepHistory: () => {
            Uj(1, !0)
          },
          sendLine: BB => {
            uj(BB), dj()
          },
          selectNextChannel: () => {
            EB.e.selectNextChannel()
          }
        }), (0, QB.useEffect)((() => {
          var BB;
          (gB.current = dB, jj.current) && (dB ? (eB.current = 0, jj.current.focus()) : (jj.current.blur(), null === (BB = Bj.current) || void 0 === BB || BB.call(Bj)))
        }), [dB]),
        function(BB, jB) {
          (0, QB.useLayoutEffect)((() => {
            if (!jB) return;
            FB.c.hold();
            const zB = BB.current.closest(".InGameHeaderAndChat"),
              QB = (0, YB.b)((BB => {
                let {
                  top: jB,
                  height: QB
                } = BB;
                zB.style.setProperty("--keyboard-top", `${jB+QB}px`)
              }));
            return () => {
              QB(), zB.style.removeProperty("--keyboard-top"), FB.c.release()
            }
          }), [BB, jB])
        }(tB, dB && jB), (0, VB.jsx)(VB.Fragment, {
          children: (0, VB.jsxs)("div", {
            ref: tB,
            className: JB()("Chat", {
              Chatting: dB
            }),
            "data-camera-keeper": dB ? "" : void 0,
            children: [(0, VB.jsx)("div", {
              ref: wB,
              className: JB()("ChatMessages", {
                HideScrollbar: !KB && !dB,
                NoScrolling: !(0, aB.isMobile)() && cB
              }),
              children: (0, VB.jsx)(iB.c, {
                messages: SB,
                reportedPlayers: AB
              })
            }), jB && !dB && (0, VB.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": BB("general:chat"),
              ...(0, fB.f)((() => {
                sB(!0), zj.current.style.display = "flex", (0, aB.isIOS)() && jj.current.focus()
              }), "pointerup"),
              children: (0, VB.jsx)(yB.c, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, VB.jsxs)("div", {
              ref: zj,
              className: "ChatInputWrapper",
              style: {
                display: "" + (dB ? "flex" : "none")
              },
              children: [PB && (0, VB.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: PB.elementBgColor
                },
                onClick: BB => {
                  EB.e.selectNextChannel(), jj.current.focus()
                },
                children: (0, VB.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, VB.jsx)(uB.e, {
                    text: PB.elementContent
                  })
                })
              }), PB && zB && (0, VB.jsx)(TB, {}), (0, VB.jsx)("input", {
                className: "ChatInput",
                maxLength: rB.fd,
                ref: jj,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": BB("general:chat"),
                placeholder: PB ? `${PB.channelName} Chat${"touchOnly"===(0,pB.c)()||zB?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const WB = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36624: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => iB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(3740),
      NB = zB(31),
      uB = zB(2463),
      UB = zB(3685),
      aB = zB(2078),
      pB = zB(28),
      rB = zB(1952),
      sB = zB(36631),
      JB = zB(2224),
      mB = zB(36633),
      yB = zB(2746),
      kB = zB(2720),
      GB = zB(2714),
      LB = zB(3700),
      gB = zB(36635),
      tB = zB(3228),
      SB = zB(2025),
      MB = zB(1148);

    function EB(BB) {
      for (let zB = BB.length - 1; zB >= 0; zB--) {
        const QB = "string" === typeof(jB = BB[zB]) ? jB : "str" in jB && "string" === typeof jB.str ? jB.str : "";
        if ("" !== QB.trim()) return QB
      }
      var jB;
      return ""
    }

    function iB(BB) {
      let {
        messages: jB,
        reportedPlayers: zB
      } = BB;
      return (0, MB.jsx)(MB.Fragment, {
        children: jB.map((BB => (0, MB.jsx)(qB, {
          message: BB,
          reportedPlayers: zB
        }, BB.clientChatMsgId)))
      })
    }
    const qB = (0, QB.memo)((function(BB) {
      var jB;
      let {
        message: zB,
        reportedPlayers: nB
      } = BB;
      const iB = (0, QB.useRef)(null),
        [qB] = (0, QB.useState)(tB.e),
        {
          author: fB
        } = zB,
        oB = null === fB || void 0 === fB ? void 0 : fB.id,
        HB = null !== (jB = null === fB || void 0 === fB ? void 0 : fB.name) && void 0 !== jB ? jB : void 0,
        DB = (0, aB.c)(HB),
        FB = null !== fB && void 0 !== fB && fB.profileEffect ? JB.d[fB.profileEffect] : void 0,
        YB = null !== fB && !fB.local,
        VB = null === fB && null !== zB.serverChatMsgId,
        hB = (0, SB.h)("hiddenPlayerNames", (BB => (0, mB.f)(YB, HB, BB))),
        XB = null === zB.serverChatMsgId || null === fB ? null : {
          text: EB(zB.content),
          serverChatMsgId: zB.serverChatMsgId,
          authorId: fB.id
        },
        ZB = VB || null !== XB && !nB.includes(oB),
        AB = (0, UB.d)(YB && null !== HB && void 0 !== HB ? HB : null),
        TB = (0, GB.i)(iB);
      (0, QB.useEffect)((() => () => {
        GB.c.closeIfOwner(iB)
      }), []);
      const PB = () => {
          VB ? NB.n.Ly("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            ha: (0, IB.b)(zB.content),
            serverChatMsgId: zB.serverChatMsgId
          }) : null !== XB ? NB.n.Ly("OpenReportMenu", {
            playerEId: oB,
            playerName: HB,
            ha: XB.text,
            serverChatMsgId: XB.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        WB = void 0 === HB ? [] : (0, LB.c)(AB, HB, XB);
      return (0, MB.jsxs)("div", {
        ref: iB,
        className: dB()("MessageWrapper", {
          ChatMsgSelectWrapper: oB,
          Still: qB
        }),
        onContextMenu: hB ? BB => {
          (0, yB.f)(iB, BB, {
            ...(0, mB.d)(oB, HB),
            showLocation: !1,
            status: null,
            extraActions: ZB ? [{
              icon: "flag",
              text: "Report",
              onClick: PB
            }] : [],
            moderationActions: (0, gB.b)(HB),
            friendRequestSource: "chat"
          }, pB.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: hB ? BB => {
          (0, kB.e)(BB, (() => (0, mB.d)(oB, HB).playerSocialPreview))
        } : void 0,
        children: [FB && (0, MB.jsx)(FB, {
          className: "ChatMessageBackground",
          simple: !0
        }), (YB || VB) && !TB && (0, MB.jsx)(sB.e, {
          className: "ChatFloatingActions",
          triggerElementRef: iB,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: PB,
            show: ZB
          }, ...WB, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: BB => {
              (0, uB.l)(HB, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: hB && "blocked" !== AB
          }]
        }), (0, MB.jsx)(rB.e, {
          text: zB.content,
          friendBadgeFor: DB ? HB : void 0
        }, zB.clientChatMsgId)]
      }, zB.clientChatMsgId)
    }))
  },
  36677: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => sB,
      e: () => JB,
      g: () => rB,
      h: () => pB
    });
    var QB = zB(34242),
      nB = zB(36682),
      dB = zB(36687),
      IB = zB(8722),
      NB = zB(1471),
      uB = zB(62),
      UB = zB(83),
      aB = zB(1148);

    function pB() {
      var BB;
      return (0, NB.h)(nB.c, (0, nB.n)()), (0, aB.jsx)(aB.Fragment, {
        children: null === (BB = (0, nB.n)()) || void 0 === BB ? void 0 : BB.content
      })
    }

    function rB(BB) {
      var jB;
      let {
        show: zB
      } = BB;
      (0, NB.h)(nB.c, (0, nB.n)());
      const UB = null === (jB = (0, nB.n)()) || void 0 === jB ? void 0 : jB.menu;
      return (0, uB.useEffect)((() => {
        var BB;
        zB || (null === UB || void 0 === UB || null === (BB = UB.onClose) || void 0 === BB || BB.call(UB), (0, dB.n)())
      }), [zB, UB]), (0, uB.useEffect)((() => zB ? (0, IB.f)(dB.w, dB.f) : void 0), [zB]), (0, aB.jsx)(QB.b, {
        showing: zB,
        globallyUniqueKey: "clientGameMenu",
        children: null === UB || void 0 === UB ? void 0 : UB.content
      })
    }

    function sB(BB) {
      let {
        placement: jB = "bottom"
      } = BB;
      return (0, aB.jsx)("div", {
        id: `clientGameHud-${jB}`,
        style: {
          display: "contents"
        }
      })
    }

    function JB(BB) {
      let {
        children: jB,
        placement: zB = "bottom"
      } = BB;
      const [QB, nB] = (0, uB.useState)(null);
      return (0, uB.useEffect)((() => {
        nB(document.getElementById(`clientGameHud-${zB}`))
      }), [zB]), QB ? (0, UB.createPortal)(jB, QB) : null
    }
  },
  36958: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      e: () => aB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1478),
      NB = zB(1148);
    const uB = 200,
      UB = 160;

    function aB() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function pB(BB) {
      let {
        side: jB,
        defaultSize: zB,
        covers: nB,
        onClose: aB,
        children: pB
      } = BB;
      const rB = (0, QB.useRef)(null),
        [sB, JB] = (0, QB.useState)(null),
        [mB, yB] = (0, QB.useState)(zB);
      mB !== zB && (yB(zB), JB(null));
      const kB = (0, QB.useRef)(null),
        GB = "top" === jB,
        LB = BB => GB ? BB.clientY : BB.clientX,
        gB = () => {
          kB.current = null
        };
      return (0, NB.jsxs)("div", {
        ref: rB,
        className: dB()("ResizableSidePanel", jB && `ResizableSidePanel-${jB}`, {
          Covers: "always" === nB,
          CoversWhenNarrow: "narrow" === nB,
          Dragged: null !== sB
        }),
        style: {
          [GB ? "height" : "width"]: null !== sB && void 0 !== sB ? sB : zB
        },
        children: [pB, jB && (0, NB.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": GB ? "horizontal" : "vertical",
          onPointerDown: BB => {
            if (0 !== BB.button) return;
            BB.preventDefault();
            const jB = rB.current,
              zB = Array.from(jB.parentElement.children).reduce(((BB, zB) => zB !== jB && "0" !== getComputedStyle(zB).flexGrow ? BB + (BB => GB ? BB.clientHeight : BB.clientWidth)(zB) : BB), 0),
              QB = GB ? jB.offsetHeight : jB.offsetWidth,
              nB = Math.min(uB, QB),
              dB = Math.max(nB, QB + Math.max(0, zB - UB));
            kB.current = {
              start: LB(BB),
              startSize: QB,
              minSize: nB,
              maxSize: dB
            }, BB.currentTarget.setPointerCapture(BB.pointerId)
          },
          onPointerMove: BB => {
            const zB = kB.current;
            if (!zB) return;
            const QB = "right" === jB ? zB.start - BB.clientX : LB(BB) - zB.start;
            JB(Math.min(zB.maxSize, Math.max(zB.minSize, zB.startSize + QB)))
          },
          onPointerUp: gB,
          onPointerCancel: gB,
          onLostPointerCapture: gB
        }), aB && (0, NB.jsx)(IB.j, {
          className: "ResizableSidePanelClose",
          onClick: aB
        })]
      })
    }
  },
  36986: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => EB,
      F: () => nB,
      G: () => MB,
      d: () => LB,
      h: () => yB,
      i: () => JB,
      m: () => sB,
      o: () => GB,
      s: () => iB,
      w: () => gB,
      x: () => SB,
      z: () => tB
    });
    var QB = zB(62);
    const nB = 5e3,
      dB = 500,
      IB = 3e3;
    let NB = null,
      uB = null,
      UB = null;
    const aB = new Set;

    function pB(BB) {
      NB = BB;
      for (const jB of aB) jB()
    }

    function rB() {
      if (!NB || void 0 !== NB.endedAt) return;
      null !== uB && (clearTimeout(uB), uB = null), pB({
        ...NB,
        endedAt: Date.now()
      });
      const BB = UB;
      UB = null, null === BB || void 0 === BB || BB()
    }

    function sB(BB, jB) {
      let {
        submit: zB,
        reopen: QB
      } = jB;
      null !== uB && clearTimeout(uB), UB = QB, pB({
        ...BB,
        startedAt: Date.now(),
        errors: []
      }), uB = setTimeout(rB, IB), zB()
    }

    function JB() {
      NB && void 0 === NB.endedAt && void 0 === NB.ranAt && (null !== uB && clearTimeout(uB), pB({
        ...NB,
        ranAt: Date.now()
      }), uB = setTimeout(rB, nB))
    }
    const mB = 3;

    function yB(BB) {
      if (!NB || void 0 === NB.ranAt || void 0 !== NB.endedAt || NB.errors.includes(BB) || NB.errors.length >= mB) return;
      const jB = 0 === NB.errors.length;
      pB({
        ...NB,
        errors: [...NB.errors, BB]
      }), jB && (null !== uB && clearTimeout(uB), uB = setTimeout(rB, dB))
    }

    function kB(BB) {
      var jB;
      return (null === (jB = NB) || void 0 === jB ? void 0 : jB.chatKey) === BB ? NB : null
    }

    function GB(BB) {
      const jB = kB(BB);
      return jB && void 0 !== jB.endedAt ? (pB(null), jB) : null
    }

    function LB(BB) {
      var jB;
      (null === (jB = NB) || void 0 === jB ? void 0 : jB.chatKey) === BB && (null !== uB && (clearTimeout(uB), uB = null), UB = null, pB(null))
    }
    const gB = "These changes from your last answer didn't go in. Make them again.";

    function tB(BB) {
      const jB = [...new Set(BB)].slice(0, mB);
      return `Fix this in your change: when it ran, the world showed ${1===jB.length?"this error":"these errors"}: ${jB.join(" ")}`
    }

    function SB(BB) {
      return `Your change didn't go in, because the code wouldn't run at all: ${BB.join(" ")} Send the whole change again with that fixed.`
    }

    function MB(BB) {
      return `Fix this in your change: ${BB.join(" ")}`
    }

    function EB(BB) {
      var jB;
      if (void 0 === BB.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const zB = Math.max(1, Math.round(((null !== (jB = BB.endedAt) && void 0 !== jB ? jB : BB.ranAt) - BB.ranAt) / 1e3)),
        QB = `Your change ran in your world for ${zB} ${1===zB?"second":"seconds"}`;
      return 0 === BB.errors.length ? {
        title: "Tested: no errors",
        text: `${QB} without an error.`
      } : {
        title: 1 === BB.errors.length ? "Tested: it showed an error" : `Tested: it showed ${BB.errors.length} errors`,
        text: `${QB} and showed: ${BB.errors.join(" ")}`
      }
    }

    function iB(BB) {
      const [jB, zB] = (0, QB.useState)((() => kB(BB)));
      return (0, QB.useEffect)((() => {
        const jB = () => {
          zB(kB(BB))
        };
        return jB(), aB.add(jB), () => {
          aB.delete(jB)
        }
      }), [BB]), jB
    }
  },
  36988: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => nB,
      h: () => QB
    });
    const QB = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function nB(BB, jB, zB) {
      return {
        key: BB,
        label: `Code block at ${jB.join(", ")}`,
        codeBlock: !0,
        pos: jB,
        canChangePos: zB
      }
    }
  },
  36977: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB,
      f: () => dB,
      i: () => IB,
      l: () => nB
    });
    const QB = "code block",
      nB = "World Code/";

    function dB(BB) {
      return BB.trim().toLowerCase().startsWith(nB.toLowerCase())
    }

    function IB(BB) {
      return BB.trim().slice(nB.length).replace(/^\.?\//, "")
    }
  },
  36944: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => uB,
      g: () => UB,
      i: () => NB,
      j: () => aB
    });
    var QB = zB(62),
      nB = zB(41),
      dB = zB(106);
    class IB {
      constructor(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this.storageKey = BB, this.defaultValue = jB, this.canChange = zB, this.value = null, this.listeners = new Set, this.get = () => {
          if (!this.canChange) return this.defaultValue;
          if (null === this.value) {
            const BB = nB.j.getItem(this.storageKey);
            this.value = "boolean" === typeof BB ? BB : this.defaultValue
          }
          return this.value
        }, this.set = BB => {
          this.value = BB, nB.j.setItem(this.storageKey, BB);
          for (const jB of this.listeners) jB(BB)
        }
      }
      subscribe(BB) {
        return this.listeners.add(BB), () => {
          this.listeners.delete(BB)
        }
      }
    }
    const NB = new IB("codeEditorLightMode", !1),
      uB = new IB("codeEditorAiHints", !0),
      UB = new IB("codeEditorAiKeySafetyCheck", !0, dB.featureFlags.isOwnTopLevelSite);

    function aB(BB) {
      const [jB, zB] = (0, QB.useState)(BB.get);
      return (0, QB.useEffect)((() => {
        const jB = BB.subscribe(zB);
        return zB(BB.get()), jB
      }), [BB]), [jB, BB.set]
    }
  },
  36938: (BB, jB, zB) => {
    zB.d(jB, {
      B: () => oB,
      D: () => qB,
      G: () => rB,
      K: () => YB,
      L: () => EB,
      P: () => iB,
      R: () => FB,
      b: () => JB,
      d: () => uB,
      e: () => mB,
      i: () => fB,
      l: () => NB,
      m: () => aB,
      p: () => sB,
      t: () => yB,
      x: () => gB
    });
    var QB = zB(2509),
      nB = zB(36936);
    const dB = "bloxd-world-code-directory-sync",
      IB = "handles",
      NB = "[INVALID SCHEMATIC PLACEHOLDER]";

    function uB(BB, jB) {
      return `${BB}::${jB}`
    }
    const UB = new Set(["node_modules", ".git"]);

    function aB() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function pB() {
      return new Promise(((BB, jB) => {
        const zB = indexedDB.open(dB, 1);
        zB.onupgradeneeded = () => {
          const BB = zB.result;
          BB.objectStoreNames.contains(IB) || BB.createObjectStore(IB)
        }, zB.onsuccess = () => {
          BB(zB.result)
        }, zB.onerror = () => {
          var BB;
          jB(null !== (BB = zB.error) && void 0 !== BB ? BB : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function rB(BB, jB) {
      const zB = await pB();
      try {
        await new Promise(((QB, nB) => {
          const dB = zB.transaction(IB, "readwrite");
          dB.objectStore(IB).put(jB, BB), dB.oncomplete = () => {
            QB()
          }, dB.onerror = () => {
            var BB;
            nB(null !== (BB = dB.error) && void 0 !== BB ? BB : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        zB.close()
      }
    }
    async function sB(BB) {
      const jB = await pB();
      try {
        return await new Promise(((zB, QB) => {
          const nB = jB.transaction(IB, "readonly").objectStore(IB).get(BB);
          nB.onsuccess = () => {
            var BB;
            zB(null !== (BB = nB.result) && void 0 !== BB ? BB : null)
          }, nB.onerror = () => {
            var BB;
            QB(null !== (BB = nB.error) && void 0 !== BB ? BB : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        jB.close()
      }
    }
    async function JB(BB) {
      const jB = await pB();
      try {
        await new Promise(((zB, QB) => {
          const nB = jB.transaction(IB, "readwrite");
          nB.objectStore(IB).delete(BB), nB.oncomplete = () => {
            zB()
          }, nB.onerror = () => {
            var BB;
            QB(null !== (BB = nB.error) && void 0 !== BB ? BB : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        jB.close()
      }
    }
    async function mB(BB) {
      const jB = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await BB.queryPermission(jB) || "granted" === await BB.requestPermission(jB)
    }
    async function yB(BB) {
      if (!aB()) return null;
      try {
        const jB = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await rB(BB, jB), jB
      } catch (jB) {
        if (function(BB) {
            return BB instanceof DOMException && "AbortError" === BB.name
          }(jB)) return null;
        throw jB
      }
    }

    function kB(BB) {
      return BB.startsWith(".") || UB.has(BB)
    }

    function GB(BB) {
      if (!BB) return !0;
      const jB = BB.split("/");
      for (const zB of jB)
        if ("" === zB || "." === zB || ".." === zB) return !1;
      return !0
    }
    async function LB(BB, jB, zB) {
      for await (const [dB, IB] of BB.entries()) {
        if ("directory" === IB.kind) {
          if (kB(dB)) continue;
          const BB = jB ? `${jB}/${dB}` : dB;
          if (!GB(BB)) continue;
          await LB(IB, BB, zB);
          continue
        }
        const BB = jB ? `${jB}/${dB}` : dB;
        if (!(0, QB.q)(BB) && !(0, nB.e)(BB)) continue;
        const NB = await IB.getFile();
        zB[BB] = (0, nB.e)(BB) ? await HB(NB) : await NB.text()
      }
    }
    async function gB(BB) {
      const jB = {};
      return await LB(BB, "", jB), jB
    }

    function tB(BB) {
      return !(!BB || BB !== BB.trim() || BB.startsWith("/") || BB.includes("\\") || BB.includes("\0")) && GB(BB)
    }
    async function SB(BB, jB, zB) {
      const QB = jB.split("/"),
        nB = QB[QB.length - 1];
      let dB = BB;
      for (let IB = 0; IB < QB.length - 1; IB++) dB = await dB.getDirectoryHandle(QB[IB], {
        create: zB
      });
      return {
        dir: dB,
        fileName: nB
      }
    }
    async function MB(BB, jB, zB) {
      if (!tB(jB)) throw new Error(`Refusing to write unsafe path: ${jB}`);
      const {
        dir: QB,
        fileName: nB
      } = await SB(BB, jB, !0), dB = await QB.getFileHandle(nB, {
        create: !0
      }), IB = await dB.createWritable();
      await IB.write(zB), await IB.close()
    }
    async function EB(BB, jB, zB) {
      const QB = await async function(BB, jB) {
        if (!tB(jB)) return null;
        try {
          const {
            dir: zB,
            fileName: QB
          } = await SB(BB, jB, !1), nB = await zB.getFileHandle(QB), dB = await nB.getFile();
          return await dB.text()
        } catch (zB) {
          if (zB instanceof DOMException && ("NotFoundError" === zB.name || "NotAllowedError" === zB.name)) return null;
          throw zB
        }
      }(BB, jB);
      QB !== zB && await MB(BB, jB, zB)
    }
    async function iB(BB, jB, zB) {
      if (!(0, QB.q)(jB) && !(0, nB.e)(jB)) throw new Error(`Refusing to write non-allowlisted path: ${jB}`);
      if ((0, nB.e)(jB)) {
        if (await DB(BB, jB) === NB) throw new Error(`Move the binary schematic ${jB} outside the linked folder before syncing its placeholder`)
      }
      await MB(BB, jB, zB)
    }
    async function qB(BB, jB) {
      if (!tB(jB)) throw new Error(`Refusing to remove unsafe path: ${jB}`);
      try {
        const {
          dir: zB,
          fileName: QB
        } = await SB(BB, jB, !1);
        await zB.removeEntry(QB)
      } catch (zB) {
        if (zB instanceof DOMException && ("NotFoundError" === zB.name || "NotAllowedError" === zB.name)) return;
        throw zB
      }
    }
    async function fB(BB, jB) {
      if (!tB(jB)) return null;
      try {
        const zB = jB.split("/");
        let QB = BB;
        for (const BB of zB) QB = await QB.getDirectoryHandle(BB);
        return QB
      } catch (zB) {
        if (zB instanceof DOMException && ("NotFoundError" === zB.name || "NotAllowedError" === zB.name)) return null;
        throw zB
      }
    }
    async function oB(BB, jB) {
      if ((0, QB.q)(jB) || (0, nB.e)(jB)) {
        if ((0, nB.e)(jB)) {
          if (await DB(BB, jB) === NB) throw new Error(`Refusing to remove a binary schematic: ${jB}`)
        }
        await qB(BB, jB)
      }
    }
    async function HB(BB) {
      if (BB.size > 64) return NB;
      const jB = await BB.text();
      return Array.from(jB).some((BB => {
        const jB = BB.charCodeAt(0);
        return jB < 9 || jB > 13 && jB < 32 || 65533 === jB
      })) ? NB : jB
    }
    async function DB(BB, jB) {
      try {
        const {
          dir: zB,
          fileName: QB
        } = await SB(BB, jB, !1);
        return await HB(await (await zB.getFileHandle(QB)).getFile())
      } catch (zB) {
        if (zB instanceof DOMException && "NotFoundError" === zB.name) return null;
        throw zB
      }
    }
    async function FB(BB, jB) {
      const zB = await gB(BB);
      for (const QB of Object.keys(zB)) QB in jB || (0, nB.e)(QB) || await oB(BB, QB);
      for (const [dB, IB] of Object.entries(jB))((0, QB.q)(dB) || (0, nB.e)(dB)) && await iB(BB, dB, IB)
    }

    function YB(BB, jB) {
      var zB, QB;
      let nB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const dB = null !== (zB = nB.debounceMs) && void 0 !== zB ? zB : 300,
        IB = null !== (QB = nB.pollMs) && void 0 !== QB ? QB : 1e3;
      let NB = !1,
        uB = null,
        UB = null,
        aB = null;
      const pB = () => {
          NB || (uB && clearTimeout(uB), uB = setTimeout((() => {
            uB = null, rB()
          }), dB))
        },
        rB = async () => {
          if (!NB) try {
            if (!await mB(BB, "readwrite")) return;
            const zB = await gB(BB);
            NB || jB(zB)
          } catch (zB) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", zB)
          }
        };
      rB();
      const sB = window.FileSystemObserver;
      if (sB) try {
        aB = new sB((() => {
          pB()
        })), aB.observe(BB, {
          recursive: !0
        })
      } catch (JB) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", JB), aB = null
      }
      return aB || (UB = setInterval((() => {
        pB()
      }), IB)), () => {
        NB = !0, uB && clearTimeout(uB), UB && clearInterval(UB), aB && aB.disconnect()
      }
    }
  },
  4925: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => yB,
      f: () => kB
    });
    var QB = zB(1091),
      nB = zB.n(QB),
      dB = zB(62),
      IB = zB(1240),
      NB = zB(4928),
      uB = zB(1952),
      UB = zB(2516),
      aB = zB(4932),
      pB = zB(1148);
    const rB = new WeakMap;
    let sB = 0;

    function JB(BB) {
      let jB = rB.get(BB);
      return void 0 === jB && (jB = sB++, rB.set(BB, jB)), jB
    }

    function mB(BB) {
      let {
        piece: jB
      } = BB;
      return "space" === jB.kind ? (0, pB.jsx)(pB.Fragment, {
        children: jB.text
      }) : (0, pB.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${jB.delayMs}ms`
        },
        children: (0, pB.jsx)(NB.e, {
          text: "icon" === jB.kind ? `[[${jB.icon}]]` : jB.text
        })
      })
    }

    function yB(BB) {
      let {
        display: jB
      } = BB;
      const {
        selectedLanguage: zB
      } = (0, IB.D)(), QB = (0, dB.useMemo)((() => (0, aB.e)((0, aB.g)(jB).plan.pieces)), [jB, zB.code]);
      return (0, pB.jsxs)("div", {
        className: nB()("Dialogue", {
          DialogueAnimateIn: !1 !== jB.animateIn
        }),
        children: [jB.speakerName && (0, pB.jsx)(uB.e, {
          text: jB.speakerName,
          className: "DialogueSpeaker"
        }), (0, pB.jsx)("p", {
          className: "DialogueLine",
          children: QB.map(((BB, jB) => 1 === BB.length && "space" === BB[0].kind ? BB[0].text : (0, pB.jsx)("span", {
            className: "DialogueGlue",
            children: BB.map(((BB, jB) => (0, pB.jsx)(mB, {
              piece: BB
            }, jB)))
          }, jB)))
        })]
      })
    }
    const kB = (0, dB.memo)((function() {
      const BB = (0, UB.i)("dialogue");
      return (0, pB.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: BB && (0, pB.jsx)(yB, {
          display: BB
        }, JB(BB))
      })
    }))
  },
  36751: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => mB,
      g: () => yB
    });
    var QB = zB(62),
      nB = zB(1471),
      dB = zB(2025),
      IB = zB(36703),
      NB = zB(658),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(1148);
    const pB = [rB()];

    function rB() {
      return {
        source: null,
        direction: null,
        RV: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function sB(BB) {
      return pB.find((jB => null !== jB.source && jB.source === BB))
    }

    function JB(BB) {
      clearTimeout(BB.timeout), BB.source = null, BB.direction = null, BB.writtenAngle = null, BB.RV && (BB.RV.style.rotate = "")
    }
    const mB = (0, QB.memo)((function() {
      const [, BB] = (0, QB.useReducer)((BB => BB + 1), 0);
      return (0, nB.f)("damagedByOtherPlayer", (jB => {
        let {
          Gz: zB,
          direction: QB
        } = jB;
        const nB = zB || "nonDirectional",
          dB = function(BB) {
            var jB;
            const zB = null !== (jB = sB(BB)) && void 0 !== jB ? jB : pB.find((BB => null === BB.source));
            if (zB) return zB;
            const QB = {
              source: null,
              direction: null,
              RV: null,
              timeout: void 0,
              writtenAngle: null
            };
            return pB.push(QB), QB
          }(nB);
        clearTimeout(dB.timeout), dB.source = nB, dB.direction = QB, dB.timeout = setTimeout((() => {
          JB(dB), BB()
        }), 800), BB()
      })), (0, dB.d)("kill", (jB => {
        let {
          killer: zB,
          victim: QB
        } = jB;
        const nB = zB.local && sB(QB.id);
        nB && (JB(nB), BB())
      })), (0, QB.useEffect)((() => {
        const BB = (0, IB.e)("turnDamageIndicators", yB);
        return () => {
          BB(), pB.forEach(JB)
        }
      }), []), (0, aB.jsx)("div", {
        className: "DirectionalDamage",
        children: pB.map(((BB, jB) => (0, aB.jsx)("div", {
          ref: jB => {
            BB.RV = jB
          },
          className: UB()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, NB.I)(BB.direction),
            DamageIndicatorIdle: null === BB.source
          })
        }, jB)))
      })
    }));

    function yB(BB) {
      for (const jB of pB) {
        if (null === jB.source || (0, NB.I)(jB.direction)) continue;
        const zB = jB.direction - BB;
        zB !== jB.writtenAngle && (jB.writtenAngle = zB, jB.RV.style.rotate = `${zB}rad`)
      }
    }
  },
  8776: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => DB,
      h: () => qB,
      l: () => fB
    });
    var QB = zB(62),
      nB = zB(4664),
      dB = zB(1169),
      IB = zB(1471),
      NB = zB(31),
      uB = zB(3536),
      UB = zB(2304),
      aB = zB(1270),
      pB = zB(2667),
      rB = zB(1982),
      sB = zB(2025),
      JB = zB(1240),
      mB = zB(28),
      yB = zB(1664),
      kB = zB(1091),
      GB = zB.n(kB),
      LB = zB(8785),
      gB = zB(8792),
      tB = zB(8795),
      SB = zB(8718),
      MB = zB(8798),
      EB = (zB(8805), zB(1148));
    let iB = null;

    function qB() {
      return null !== iB
    }

    function fB() {
      return "pad" === iB
    }

    function oB() {
      return "inGame" === mB.c.get("gameState") && !(0, yB.m)()
    }

    function HB(BB) {
      return (0, gB.o)(BB, aB.n, gB.c, gB.d, gB.f)
    }
    const DB = (0, QB.memo)((function() {
      const {
        t: BB
      } = (0, JB.D)(), {
        userContext: jB
      } = (0, dB.d)(), [zB, mB] = (0, QB.useState)(null), [kB, qB] = (0, QB.useState)(null), fB = (0, QB.useRef)(null), DB = (0, QB.useCallback)((BB => {
        fB.current = BB, qB(BB)
      }), []), FB = (0, QB.useRef)(0), YB = (0, QB.useRef)(null), VB = (0, QB.useRef)({
        x: 0,
        y: 0
      }), [hB, XB] = (0, QB.useState)(0), ZB = (0, QB.useMemo)((() => function(BB) {
        const jB = [];
        for (let QB = 0; QB < aB.n; QB++) {
          var zB;
          jB.push(null !== (zB = BB[QB]) && void 0 !== zB ? zB : null)
        }
        return jB
      }((0, pB.j)(jB.getPlayerCosmetics().emote))), [jB, hB]);
      (0, sB.d)("cosmeticsUpdated", (BB => {
        BB.some((BB => BB.local && "emote" === BB.Wd)) && XB((BB => BB + 1))
      }));
      const AB = (0, QB.useRef)(!1),
        TB = (0, QB.useCallback)((function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          "pad" === BB && (0, tB.f)(), AB.current = jB, VB.current = {
            x: 0,
            y: 0
          }, DB(null), mB(BB)
        }), [DB]),
        PB = (0, QB.useCallback)((() => {
          mB(null), DB(null), VB.current = {
            x: 0,
            y: 0
          }
        }), [DB]),
        WB = (0, QB.useCallback)((BB => {
          if (Date.now() < FB.current) return;
          const jB = (0, UB.f)(BB),
            zB = !!jB.holdUntilMove,
            QB = zB ? 600 : Math.ceil(1e3 * jB.animation.animation_length / UB.b) + 200;
          FB.current = Date.now() + QB, YB.current = BB, rB.gameBridge.send("playEmote", BB), rB.gameBridge.send("applyTemporaryThirdPerson", zB ? {} : {
            durationMs: QB
          })
        }), []);
      (0, IB.f)("requestToggleEmoteWheel", (() => {
        null === zB ? oB() && TB("click") : PB()
      })), (0, IB.f)("requestEmoteWheelHoldOpen", (() => {
        null === zB && oB() && TB((0, LB.d)() ? "hold" : "click")
      })), (0, IB.f)("requestEmoteWheelPadOpen", (BB => {
        null !== zB || !oB() || (0, SB.d)() || (0, MB.j)() || TB("pad", BB)
      })), (0, IB.f)("requestEmoteRepeatLast", (() => {
        if (null !== zB || !oB() || (0, SB.d)() || (0, MB.j)()) return;
        const BB = YB.current;
        null !== BB && ZB.includes(BB) ? WB(BB) : TB("pad", !0)
      }));
      const eB = () => {
        const BB = fB.current,
          jB = null !== BB ? ZB[BB] : null;
        null !== jB && "pad" === zB && Date.now() < FB.current || (PB(), null !== jB && WB(jB))
      };
      (0, IB.f)("emoteWheelPadAim", (BB => {
        if ("pad" !== zB) return;
        const jB = (0, gB.x)(BB, aB.n, fB.current);
        DB(null !== jB && null !== ZB[jB] ? jB : null)
      })), (0, IB.f)("requestEmoteWheelPadCommit", (BB => {
        "pad" !== zB || BB && AB.current || eB()
      })), (0, IB.f)("appManagerUpdated|activeInputDevice", (BB => {
        null !== zB && "pad" === zB !== ("gamepad" === BB) && PB()
      })), (0, QB.useLayoutEffect)((() => (iB = zB, (0, uB.v)("emoteWheel", "pad" === zB), NB.n.Ly(uB.p), () => {
        iB = null, (0, uB.v)("emoteWheel", !1), NB.n.Ly(uB.p)
      })), [zB]), (0, IB.f)("requestEmoteWheelHoldRelease", (() => {
        "hold" === zB && eB()
      })), (0, IB.f)("requestEmoteWheelClose", (() => {
        null !== zB && PB()
      })), (0, IB.f)("appManagerUpdated|gameState", (BB => {
        "inGame" !== BB && PB()
      }));
      const lB = () => {
        (0, yB.m)() && PB()
      };
      if ((0, IB.f)("appManagerUpdated|openEverythingMenuName", lB), (0, IB.f)("appManagerUpdated|openInGameMenuName", lB), (0, IB.f)("pointerLockUpdate", (BB => {
          BB || "hold" !== zB || PB()
        })), (0, QB.useEffect)((() => {
          if (null === zB) return;
          const BB = BB => {
            "Escape" === BB.key && (BB.stopImmediatePropagation(), BB.preventDefault(), PB())
          };
          return document.addEventListener("keydown", BB, !0), () => {
            document.removeEventListener("keydown", BB, !0)
          }
        }), [zB, PB]), (0, nB.c)(!0, "click" === zB, "EmoteWheelOverlay"), (0, QB.useEffect)((() => {
          if ("hold" === zB) return rB.gameBridge.send("holdEmoteWheel", !0), () => {
            rB.gameBridge.send("holdEmoteWheel", !1)
          }
        }), [zB]), (0, QB.useEffect)((() => {
          if ("hold" !== zB) return;
          const BB = parseFloat(window.getComputedStyle(document.documentElement).fontSize),
            jB = gB.n * BB,
            QB = gB.l * BB,
            nB = BB => {
              let zB = VB.current.x + BB.movementX,
                nB = VB.current.y + BB.movementY;
              const dB = Math.hypot(zB, nB);
              if (dB > jB) {
                const BB = jB / dB;
                zB *= BB, nB *= BB
              }
              VB.current = {
                x: zB,
                y: nB
              }, DB(function(BB, jB, zB, QB) {
                if (Math.hypot(BB, jB) < zB) return null;
                const nB = (0, gB.s)(BB, jB, aB.n);
                return null === QB[nB] ? null : nB
              }(zB, nB, QB, ZB))
            };
          return document.addEventListener("mousemove", nB), () => {
            document.removeEventListener("mousemove", nB)
          }
        }), [zB, ZB, DB]), null === zB) return null;
      const wB = "hold" === zB || "pad" === zB,
        xB = null !== kB ? ZB[kB] : null,
        KB = null !== xB ? (0, UB.f)(xB).displayName : BB("emotes:pickEmote");
      return (0, EB.jsx)("div", {
        className: GB()("EmoteWheelOverlay", {
          EmoteWheelOverlayPad: "pad" === zB
        }),
        onMouseDown: BB => {
          BB.target === BB.currentTarget && PB()
        },
        children: (0, EB.jsxs)("div", {
          className: "EmoteWheel",
          style: {
            width: 2 * gB.n + "rem",
            height: 2 * gB.n + "rem"
          },
          children: [(0, EB.jsxs)("svg", {
            className: "EmoteWheelSvg",
            viewBox: `0 0 ${gB.i} ${gB.i}`,
            children: [ZB.map(((jB, zB) => {
              const QB = null !== jB,
                nB = wB && zB === kB;
              return (0, EB.jsx)("path", {
                d: HB(zB),
                className: GB()("EmoteWheelWedge", {
                  EmoteWheelWedgeHighlighted: nB,
                  EmoteWheelWedgeDisabled: !QB
                }),
                onClick: BB => {
                  BB.stopPropagation(), null !== jB && (BB => {
                    PB(), WB(BB)
                  })(jB)
                },
                "aria-label": null !== jB ? (0, UB.f)(jB).displayName : BB("emotes:emptySlot")
              }, zB)
            })), (0, EB.jsx)("circle", {
              className: "EmoteWheelOuterRing",
              cx: gB.c,
              cy: gB.c,
              r: gB.f
            }), (0, EB.jsx)("circle", {
              className: "EmoteWheelInnerRing",
              cx: gB.c,
              cy: gB.c,
              r: gB.d
            }), wB && null !== kB && (0, EB.jsx)("path", {
              className: "EmoteWheelWedgeOutline",
              d: HB(kB)
            })]
          }), ZB.map(((BB, jB) => {
            const zB = null !== BB,
              QB = wB && jB === kB,
              nB = (0, gB.t)(jB, aB.n),
              dB = gB.b * Math.cos(nB),
              IB = gB.b * Math.sin(nB);
            return (0, EB.jsx)("div", {
              className: GB()("EmoteWheelSlotIcon", {
                EmoteWheelSlotIconHighlighted: QB,
                EmoteWheelSlotIconDisabled: !zB
              }),
              style: {
                left: `calc(50% + ${dB}rem)`,
                top: `calc(50% + ${IB}rem)`,
                backgroundImage: zB ? `url(/textures/charSkins/previews/emote_${BB}_preview.png)` : void 0
              },
              "aria-hidden": !0
            }, jB)
          })), (0, EB.jsx)("div", {
            className: "EmoteWheelHint SmallTextBold",
            children: KB
          })]
        })
      })
    }))
  },
  36631: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => yB
    });
    var QB = zB(62),
      nB = zB(83),
      dB = zB(1240),
      IB = zB(1091),
      NB = zB.n(IB),
      uB = zB(1778),
      UB = zB(1108),
      aB = zB(1306),
      pB = zB(1514),
      rB = zB(1694),
      sB = zB(1507),
      JB = zB(1148);
    const mB = 14;

    function yB(BB) {
      let {
        className: jB,
        triggerElementRef: zB,
        options: IB
      } = BB;
      const {
        t: yB
      } = (0, dB.D)(), [kB, GB] = (0, QB.useState)(!1), [LB, gB] = (0, QB.useState)({
        x: 0,
        y: 0
      }), tB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => {
        let BB = null;
        const jB = jB => {
            BB = {
              x: jB.clientX,
              y: jB.clientY
            }
          },
          QB = jB => {
            if (null === BB || !(0, sB.b)(BB, jB)) return;
            BB = null;
            const zB = mB * (0, uB.getRemInPx)();
            gB({
              x: Math.min(jB.clientX, window.innerWidth - zB - 5),
              y: jB.clientY
            }), GB((BB => !BB))
          },
          nB = BB => {
            var jB;
            null !== (jB = tB.current) && void 0 !== jB && jB.contains(BB.relatedTarget) || GB(!1)
          },
          dB = zB.current;
        return dB.addEventListener("pointerdown", jB), dB.addEventListener("pointerup", QB), dB.addEventListener("mouseleave", nB), () => {
          dB.removeEventListener("pointerdown", jB), dB.removeEventListener("pointerup", QB), dB.removeEventListener("mouseleave", nB)
        }
      }), [zB]), (0, QB.useEffect)((() => {
        if (kB) return (0, rB.c)("pointerdown", (BB => {
          !tB.current || tB.current.contains(BB.target) || zB.current.contains(BB.target) || GB(!1)
        }))
      }), [kB, zB]), (0, QB.useLayoutEffect)((() => {
        if (!kB || !tB.current) return;
        const BB = tB.current.getBoundingClientRect().height,
          jB = Math.max(5, window.innerHeight - BB - 5);
        LB.y > jB && gB({
          x: LB.x,
          y: jB
        })
      }), [kB, LB]), (0, aB.v)("popup", tB, (() => {
        GB(!1)
      }), kB);
      const SB = IB.filter((BB => !1 !== BB.show));
      return kB && 0 !== SB.length ? (0, nB.createPortal)((0, JB.jsx)("div", {
        ref: tB,
        className: NB()("FloatingActions", {
          [jB]: jB
        }),
        style: {
          width: `${mB}rem`,
          top: LB.y,
          left: LB.x
        },
        children: SB.map((BB => {
          let {
            icon: jB,
            text: zB,
            onPointerDown: QB,
            analyticsClick: nB
          } = BB;
          return (0, JB.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: BB => {
              void 0 !== nB && (0, pB.reportAnalyticsClick)(nB), QB(BB), GB(!1), BB.stopPropagation()
            },
            children: [(0, JB.jsx)(UB.c, {
              name: jB
            }), (0, JB.jsx)("div", {
              children: yB(zB)
            })]
          }, zB)
        }))
      }), function() {
        var BB;
        return null !== (BB = document.querySelector(".WholeAppWrapperInner")) && void 0 !== BB ? BB : document.body
      }()) : null
    }
  },
  36771: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => UI
    });
    var QB = zB(36677),
      nB = zB(62),
      dB = zB(2127),
      IB = zB(4653),
      NB = zB(4657),
      uB = zB(2516),
      UB = zB(1982),
      aB = zB(1148);

    function pB(BB) {
      let {
        className: jB,
        style: zB,
        vw: QB,
        maxPx: nB,
        children: dB
      } = BB;
      console.assert("number" === typeof QB && "number" === typeof nB, "vw and maxPx passed to Text must be numbers");
      const IB = window.innerWidth * (QB / 100) > nB ? `${nB}px` : `${QB}vw`;
      return (0, aB.jsx)("div", {
        className: jB,
        style: {
          ...zB,
          fontSize: IB
        },
        children: dB
      })
    }
    var rB = zB(36775),
      sB = zB(1478),
      JB = zB(31),
      mB = zB(2006),
      yB = zB(1108);

    function kB(BB) {
      let {
        tasks: jB,
        lastDisplayedTasks: zB
      } = BB;
      return (0, aB.jsx)(aB.Fragment, {
        children: Object.keys(jB).map((BB => (0, aB.jsx)(GB, {
          task: jB[BB],
          lastDisplayedAs: zB[BB]
        }, jB[BB].text)))
      })
    }

    function GB(BB) {
      let {
        task: jB,
        lastDisplayedAs: zB
      } = BB;
      const [QB, dB] = (0, nB.useState)(null !== zB && void 0 !== zB && zB.progress ? zB.progress / jB.goal : 0), [IB, NB] = (0, nB.useState)(!1), [uB, UB] = (0, nB.useState)(jB.claimed || !1);
      return (0, nB.useEffect)((() => {
        dB(jB.progress / jB.goal)
      }), [jB.progress, jB.goal]), uB ? null : (0, aB.jsxs)("div", {
        className: "Task",
        children: [(0, aB.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, aB.jsx)(pB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: jB.text
          })
        }), jB.progress < jB.goal ? (0, aB.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== QB ? (0, aB.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * QB + "%"
            }
          }) : null, (0, aB.jsx)("div", {
            className: "TaskProgressText",
            children: `${jB.progress}/${jB.goal}`
          })]
        }) : (0, aB.jsx)(sB.m, {
          className: "ClaimRewardButton",
          onClick: () => {
            NB(!0)
          },
          children: (0, aB.jsx)(pB, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), IB ? (0, aB.jsx)(LB, {
          task: jB,
          close: () => {
            jB.claimed = !0, UB(!0), NB(!1)
          }
        }) : null]
      })
    }

    function LB(BB) {
      let {
        task: jB,
        close: zB
      } = BB;
      const [QB, dB] = (0, nB.useState)({}), [IB, NB] = (0, nB.useState)("closed");
      (0, nB.useEffect)((() => {
        let BB;
        return "animStart" === IB && (BB = setTimeout((() => {
          NB("animEnd")
        }), 700)), () => {
          clearTimeout(BB)
        }
      }), [IB]), (0, rB.b)((() => {
        UB.gameBridge.send("completeTask", jB.text)
      }));
      const pB = (0, uB.i)("currencyAmounts");
      return (0, aB.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === IB)
            if (0 === jB.rewards.length) zB(), UB.gameBridge.send("completeTask", jB.text);
            else {
              const BB = {
                ...mB.c.get("currencyAmounts")
              };
              for (const jB in QB) BB[jB] = {
                ...BB[jB],
                amount: BB[jB].amount + QB[jB]
              };
              mB.c.apply({
                currencyAmounts: BB
              }), NB("closed")
            }
          else "closed" === IB && (dB(jB.rewards.pop()), NB("animStart"))
        },
        children: [(0, aB.jsx)("img", {
          className: "Chest",
          alt: "closed" !== IB ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==IB?"open":"closed"}.png`
        }), (0, aB.jsx)("div", {
          className: "Rewards",
          children: "closed" !== IB ? Object.keys(QB).map((BB => {
            const jB = null === pB || void 0 === pB ? void 0 : pB[BB];
            return !jB || jB.hidden ? null : (0, aB.jsxs)("div", {
              className: "Reward",
              children: [(0, aB.jsx)(yB.c, {
                name: jB.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: jB.iconColour
                }
              }), (0, aB.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === IB ? 0 : QB[BB]
              })]
            }, BB)
          })) : null
        }), "animStart" === IB ? (0, aB.jsx)(gB, {}) : null, (0, aB.jsx)("div", {
          className: "ChestsLeft",
          children: jB.rewards.length
        })]
      })
    }

    function gB() {
      const [BB, jB] = (0, nB.useState)(0);
      (0, nB.useEffect)((() => {
        jB(1)
      }), []);
      return (0, aB.jsx)(aB.Fragment, {
        children: Array.from({
          length: 40
        }).map(((jB, zB) => (0, aB.jsx)(yB.c, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * BB * Math.cos(zB / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * BB * Math.sin(zB / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === BB ? 1 : 0
          }
        }, zB)))
      })
    }
    JB.n.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const BB = new Image,
          jB = new Image;
        BB.src = "/textures/miscImages/Treasure Chest open.png", jB.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var tB = zB(3252),
      SB = zB(1169),
      MB = zB(1952),
      EB = zB(1471),
      iB = zB(376),
      qB = zB(2025),
      fB = zB(1369);

    function oB(BB) {
      var jB, zB;
      let {
        byId: QB,
        localId: nB
      } = BB;
      return null === nB ? null : null !== (jB = null === (zB = QB[nB]) || void 0 === zB ? void 0 : zB.name) && void 0 !== jB ? jB : null
    }

    function HB(BB) {
      let {
        lbStats: jB,
        storedState: zB = {}
      } = BB;
      const {
        userContext: QB
      } = (0, SB.d)(), dB = (0, qB.h)("players", oB), [IB, NB] = (0, nB.useState)(zB.selectedCat || (null === jB || void 0 === jB ? void 0 : jB[0]) || null), [uB, pB] = (0, nB.useState)(zB.selectedTimeframe || "Today"), [rB, sB] = (0, nB.useState)(null);
      (0, nB.useEffect)((() => {
        null === IB && null !== jB && jB.length > 0 && NB(jB[0])
      }), [jB, IB]);
      const [JB, mB] = (0, nB.useState)(zB.seeingTop || !1), [yB, kB] = (0, nB.useState)(!1), GB = (0, nB.useCallback)((() => {
        null !== IB && null !== uB && (UB.gameBridge.send("requestLeaderboard", {
          category: IB.value,
          timeframe: uB,
          seeTop: JB
        }), gB(!0), YB && VB(null))
      }), [IB, uB, zB, JB]);
      (0, nB.useEffect)((() => {
        GB(), zB.selectedCat = IB, zB.selectedTimeframe = uB, zB.seeingTop = JB
      }), [IB, uB, zB, JB, GB]), (0, nB.useEffect)((() => {
        if ((null === rB || void 0 === rB ? void 0 : rB.length) > 0)
          if (JB) JB && kB(null === HB(rB));
          else {
            for (const BB of rB)
              if (1 === BB.place) return void kB(!1);
            kB(!0)
          }
      }), [rB, JB]), (0, EB.f)("leaderboardResponse", (BB => {
        let {
          category: zB,
          timeframe: QB,
          data: nB
        } = BB;
        for (let dB = 0; dB < jB; dB++)
          if (jB[dB].value === zB) {
            NB(jB[dB]);
            break
          } pB(QB), sB(nB), gB(!1)
      }));
      const [LB, gB] = (0, nB.useState)(!0);

      function HB(BB) {
        const jB = oB(UB.gameBridge.latest("players"));
        for (let zB = 0; zB < BB.length; zB++)
          if (BB[zB].name === jB) return BB[zB].place;
        return null
      }
      const [DB, FB] = (0, nB.useState)(!1), [YB, VB] = (0, nB.useState)(null);
      (0, nB.useEffect)((() => {
        if (rB && !DB) {
          const BB = HB(rB);
          BB < (zB.lastSeenPlayerPlace || 0) && VB(zB.lastSeenPlayerPlace - BB), FB(!0)
        }
      }), [rB, zB, DB]), (0, nB.useEffect)((() => () => {
        rB && (zB.lastSeenPlayerPlace = HB(rB))
      }), [rB, zB]);
      const hB = (0, nB.useRef)(null),
        [XB, ZB] = (0, nB.useState)(void 0);
      return (0, nB.useEffect)((() => {
        var BB, jB;
        XB !== (null === (BB = hB.current) || void 0 === BB ? void 0 : BB.offsetHeight) && ZB(null === (jB = hB.current) || void 0 === jB ? void 0 : jB.offsetHeight)
      })), QB.isLoggedIn() ? (0, aB.jsxs)(aB.Fragment, {
        children: [(0, aB.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, aB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, aB.jsx)(tB.e, {
              options: jB.map((BB => ({
                label: BB.label,
                value: BB.value
              }))),
              value: IB,
              onChange: BB => {
                NB(BB)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, aB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, aB.jsx)(tB.e, {
              options: iB.Tc.map((BB => ({
                value: BB,
                label: BB,
                className: "LBDropdownMenuItem"
              }))),
              value: uB,
              onChange: BB => {
                pB(BB.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), yB ? (0, aB.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              mB(!JB)
            },
            children: JB ? "See Yourself" : "See Top"
          }) : null]
        }), (0, aB.jsx)("div", {
          className: "LBTableWrapper",
          children: LB ? (0, aB.jsx)("div", {
            className: "LoaderContainer",
            children: (0, aB.jsx)(fB.e, {})
          }) : null === YB ? (0, aB.jsx)(aB.Fragment, {
            children: (0, aB.jsxs)("table", {
              className: "LBTable",
              children: [(0, aB.jsx)("thead", {
                className: "LBTableTHead",
                ref: hB,
                children: (0, aB.jsxs)("tr", {
                  children: [(0, aB.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, aB.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, aB.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: IB.label.toUpperCase()
                  })]
                })
              }), (0, aB.jsx)("tbody", {
                children: rB.map((BB => (0, aB.jsxs)("tr", {
                  className: "LBTableTR " + (BB.name === dB ? "LBTableTRYou" : ""),
                  children: [(0, aB.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${BB.place}`
                  }), (0, aB.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, aB.jsx)(MB.e, {
                      text: [{
                        entityName: BB.name
                      }]
                    })
                  }), (0, aB.jsx)("td", {
                    className: "LBTableTD",
                    children: BB.stat
                  })]
                }, BB.name)))
              })]
            })
          }) : (0, aB.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              VB(null)
            },
            children: (0, aB.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, aB.jsx)("div", {
                className: "TriangleUp"
              }), (0, aB.jsx)("div", {
                className: "LBIncreaseText",
                children: `${YB} Place${YB>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, aB.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, aB.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, aB.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var DB = zB(3219),
      FB = zB(106),
      YB = zB(41),
      VB = zB(3527);
    const hB = (0, nB.memo)((function(BB) {
      let {
        show: jB,
        onClose: zB
      } = BB;
      (0, DB.d)();
      const QB = (0, uB.i)("_tasks"),
        dB = (0, uB.i)("_availableLeaderboards"),
        [UB, pB] = (0, nB.useState)({});
      QB && Object.keys(QB).length > 0 && 0 === Object.keys(UB).length && pB(QB);
      const [rB] = (0, nB.useState)({
        tasks: {},
        leaderboard: {}
      }), sB = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!QB && Object.keys(QB).length > 0,
          content: (0, aB.jsx)(kB, {
            tasks: QB,
            lastDisplayedTasks: UB
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === dB || void 0 === dB ? void 0 : dB.length) > 0,
          content: (0, aB.jsx)(HB, {
            lbStats: dB,
            storedState: rB.leaderboard
          })
        }
      };

      function JB() {
        for (const BB in sB)
          if (sB[BB].getIsDefined()) return BB;
        return null
      }
      const [mB, yB] = (0, nB.useState)(JB());

      function GB() {
        pB({
          ...QB
        }), zB()
      }(0, nB.useEffect)((() => {
        mB || yB(JB())
      }), [JB()]), (0, NB.d)(!0, mB && jB), (0, nB.useEffect)((() => {
        jB && !mB && (console.log("CLOSE"), GB())
      }), [jB, mB]);
      const [LB, gB] = (0, nB.useState)(!1);
      return (0, nB.useEffect)((() => {
        jB && mB && !LB && gB(!0)
      }), [jB, LB, mB]), (0, nB.useEffect)((() => {
        !LB && QB && "tasks" !== mB && yB("tasks")
      }), [LB, QB, mB]), (0, aB.jsx)(aB.Fragment, {
        children: mB ? (0, aB.jsx)(VB.e, {
          className: "RetentionFeaturesWrapper",
          show: jB,
          children: (0, aB.jsxs)(IB.d, {
            close: GB,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, aB.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, aB.jsx)(ZB, {}), (0, aB.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, aB.jsx)(XB, {
                  setCategory: yB,
                  menuCategories: sB,
                  selectedCat: mB
                }), (0, aB.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: sB[mB].content
                })]
              })]
            }), (0, aB.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: FB.featureFlags.useDiscord && (0, aB.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, aB.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, aB.jsx)(AB, {
                    tasks: QB
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function XB(BB) {
      let {
        selectedCat: jB,
        setCategory: zB,
        menuCategories: QB
      } = BB;
      return (0, aB.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(QB).map((BB => QB[BB].getIsDefined() ? (0, aB.jsx)("div", {
          className: "MenuHeaderCategory " + (BB === jB ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            zB(BB)
          },
          children: QB[BB].Title
        }, BB) : null))
      })
    }

    function ZB() {
      const BB = (0, uB.i)("currencyAmounts");
      return (0, aB.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== BB && void 0 !== BB ? BB : {}).map((jB => {
          const zB = BB[jB];
          return zB.hidden ? null : (0, aB.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, aB.jsx)(yB.c, {
              name: zB.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: zB.iconColour
              }
            }), (0, aB.jsx)("div", {
              className: "UiCurrencyAmount",
              children: zB.amount
            })]
          }, jB)
        }))
      })
    }

    function AB(BB) {
      let {
        tasks: jB
      } = BB;
      return (0, aB.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, aB.jsx)(yB.c, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            YB.j.setItem("DiscordPressed", !0), UB.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in jB && JB.n.Ly("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, aB.jsx)(dB.c, {})]
      })
    }
    var TB = zB(28),
      PB = zB(1664),
      WB = zB(36610),
      eB = zB(34141),
      lB = zB(4729),
      wB = zB(174),
      xB = zB(1256),
      KB = zB(1388),
      CB = zB(2772),
      cB = zB(1240),
      bB = zB(1668),
      vB = zB(2473),
      RB = zB(2463),
      OB = zB(1901),
      Bj = zB(2093),
      jj = zB(1292),
      zj = zB(1514),
      Qj = zB(36783),
      nj = zB(36790),
      dj = zB(36793),
      Ij = zB(36795),
      Nj = zB(36800),
      uj = zB(2826);

    function Uj(BB) {
      let {
        playersHere: jB,
        exclude: zB,
        xG: QB
      } = BB;
      const {
        t: dB
      } = (0, cB.D)(), IB = (0, uj.n)(uj.k), [NB, uB] = (0, nB.useState)([]), UB = [], pB = (BB, jB) => {
        const QB = [...zB, ...UB.map((BB => BB.player.name))];
        UB.length < 3 && !(0, nj.l)(QB, BB.name) && UB.push({
          player: BB,
          status: jB
        })
      };
      for (const nB of jB) pB((0, Nj.e)(nB.name, nB.cosmetics, nB.ranks), dB("worldSocial:inThisWorld"));
      if ("loaded" === IB.state.status)
        for (const nB of IB.state.recentPlayers) nB.preview.name && !nB.preview.isError && pB({
          ...nB.preview,
          location: {
            status: "offline"
          }
        }, dB("worldSocial:playedWithYou"));
      const rB = BB => {
        uB((jB => [...jB, BB])), QB(BB).finally((() => {
          uB((jB => jB.filter((jB => jB !== BB))))
        }))
      };
      return (0, aB.jsx)(aB.Fragment, {
        children: UB.map(((BB, jB) => {
          let {
            player: zB,
            status: QB
          } = BB;
          return (0, aB.jsx)(Nj.d, {
            zIndex: UB.length - jB,
            player: zB,
            status: QB,
            onSendFriendRequest: () => {
              rB(zB.name)
            },
            actions: (0, aB.jsx)(KB.g, {
              tooltipInner: (0, aB.jsx)(aB.Fragment, {
                children: dB("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, aB.jsx)(sB.f, {
                className: "FriendRequestButton",
                disabled: NB.includes(zB.name),
                ariaLabel: `${dB("recentPlayers:addFriend")} ${zB.name}`,
                onClick: () => {
                  rB(zB.name)
                },
                children: (0, aB.jsx)(yB.c, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${zB.name}`)
        }))
      })
    }
    var aj = zB(36812),
      pj = zB(36820),
      rj = zB(1263),
      sj = zB(1525),
      Jj = zB(4431),
      mj = zB(297),
      yj = zB(4715);
    const kj = ["auto", "auto_existing"];

    function Gj(BB) {
      return kj.includes(BB)
    }

    function Lj(BB, jB) {
      const zB = (0, rj.db)(BB);
      return null !== jB && (0, rj.db)(jB) === zB || (0, yj.c)().some((BB => (0, rj.db)(BB.name) === zB))
    }
    const gj = new Set;

    function tj(BB) {
      return `worldSocialSeen:${BB}`
    }

    function Sj(BB) {
      return !BB || gj.has(BB) || !0 === YB.j.getItem(tj(BB))
    }

    function Mj(BB) {
      BB && !gj.has(BB) && (gj.add(BB), YB.j.setItem(tj(BB), !0))
    }
    var Ej = zB(2532),
      ij = zB(2540);

    function qj(BB) {
      let {
        show: jB,
        onClose: zB,
        opener: QB
      } = BB;
      const {
        lobbyName: dB,
        shownLobbyName: NB
      } = (0, qB.k)("connectedGame");
      return (0, nB.useEffect)((() => {
        jB && (0, zj.reportAnalyticsClick)({
          id: "world_social.open",
          value: QB
        })
      }), [jB]), (0, aB.jsx)(IB.d, {
        show: jB && null !== dB,
        close: zB,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== QB,
        children: jB && null !== dB && (0, aB.jsx)(fj, {
          lobbyName: dB,
          worldCode: null !== NB && void 0 !== NB ? NB : dB,
          onClose: zB
        }, dB)
      })
    }

    function fj(BB) {
      var jB;
      let {
        lobbyName: zB,
        worldCode: QB,
        onClose: dB
      } = BB;
      const {
        t: IB
      } = (0, cB.D)(), NB = (0, nB.useRef)(null), {
        settings: uB,
        loading: UB,
        answered: pB,
        change: rB,
        retry: JB
      } = (0, Qj.g)(zB), mB = (0, bB.j)(), kB = (0, qB.k)("players"), GB = (0, qB.k)("hiddenPlayerNames"), [LB, gB] = (0, nB.useState)([]), [tB, MB] = (0, nB.useState)([]), [EB, iB] = (0, nB.useState)(!1), oB = (0, Ej.c)(), HB = (0, nB.useMemo)((() => {
        var BB, jB;
        const zB = null === kB.localId ? null : null !== (BB = null === (jB = kB.byId[kB.localId]) || void 0 === jB ? void 0 : jB.name) && void 0 !== BB ? BB : null;
        return kB.ids.flatMap((BB => {
          const jB = kB.byId[BB];
          return null !== jB && void 0 !== jB && jB.name && jB.name !== zB ? [{
            name: jB.name,
            cosmetics: jB.cosmetics,
            ranks: jB.ranks
          }] : []
        }))
      }), [kB]), DB = (0, nB.useMemo)((() => (0, nj.k)(mB.friends, zB, HB.map((BB => BB.name)))), [mB.friends, zB, HB]), YB = FB.featureFlags.canSeeRealPlayerNames ? HB.filter((BB => null === (0, jj.e)(BB.name, GB))) : [], VB = null !== uB && void 0 !== uB && uB.canManage ? uB : null, hB = null !== VB, XB = null !== (jB = null === uB || void 0 === uB ? void 0 : uB.visibility) && void 0 !== jB ? jB : null, ZB = "whitelist" === (null === VB || void 0 === VB ? void 0 : VB.visibility), AB = "private" === XB || "whitelist" === XB && !hB, {
        userContext: TB
      } = (0, SB.d)();
      (0, nB.useEffect)((() => {
        hB && Lj(zB, TB.getPersonalWorldLobbyName()) && Mj(TB.whamm)
      }), [hB, zB, TB]);
      const PB = AB ? IB("whitelist" === XB ? "socialBar:inviteWorldManagersOnly" : hB ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        eB = null === PB;
      (0, nB.useEffect)((() => AB ? void 0 : OB.f.quietFriendAdded()), [AB]), (0, nB.useEffect)((() => OB.f.quietFriendRequests()), []);
      const uj = (0, nB.useRef)(!1);
      (0, nB.useEffect)((() => {
        const BB = NB.current,
          jB = !uj.current;
        uj.current = !0;
        const zB = null === document.activeElement || document.activeElement === document.body;
        null !== BB && void 0 !== BB && BB.contains(document.activeElement) || !jB && !zB || (0, WB.f)() || null === BB || void 0 === BB || BB.focus({
          preventScroll: !0
        })
      }), [eB]), (0, nB.useEffect)((() => {
        const BB = BB => {
          "Escape" !== BB.key || null !== document.activeElement && document.activeElement !== document.body || dB()
        };
        return document.addEventListener("keydown", BB), () => {
          document.removeEventListener("keydown", BB)
        }
      }), [dB]);
      const rj = null === uB && !pB,
        sj = (UB || mB.loading) && 0 === mB.friends.length,
        Jj = mB.friends.flatMap((BB => BB.name ? [BB.name] : [])),
        mj = LB.filter((BB => !(0, nj.l)(Jj, BB))),
        yj = DB.length + 3,
        kj = mj.length + yj,
        Gj = EB ? mB.requests : mB.requests.slice(0, 1),
        gj = async function(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const zB of (0, nj.n)(BB, lB.x)) {
            if (!await rB({
                whitelistAdd: zB
              }, (BB => (0, nj.r)(BB, zB, !0)), {
                quiet: jB
              })) return !1
          }
          return !0
        }, tj = BB => {
          if (ZB && VB) return {
            on: (0, nj.l)(VB.whitelist, BB),
            onChange: jB => {
              (0, zj.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: jB ? "on" : "off"
              }), rB(jB ? {
                whitelistAdd: [BB]
              } : {
                whitelistRemove: BB
              }, (zB => (0, nj.r)(zB, [BB], jB)))
            }
          }
        }, Sj = async (BB, jB) => {
          (0, zj.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: jB
          });
          const zB = await (0, RB.j)(BB, "world_social");
          return (0, RB.d)(zB, BB, {
            announceSent: !1
          }), "failed" !== zB.kind && ("sent" === zB.kind && gB((jB => (0, nj.l)(jB, BB) ? jB : [...jB, BB])), ZB && await gj([BB]), !0)
        };
      return (0, aB.jsxs)("div", {
        ref: NB,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: BB => {
          BB.target === BB.currentTarget && " " === BB.key && BB.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, aB.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, aB.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: IB("worldSocial:title")
          }), (0, aB.jsx)(sB.j, {
            className: "WorldSocialClose",
            onClick: dB
          })]
        }), rj && (0, aB.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, aB.jsx)(fB.e, {})
        }), !rj && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(dj.b, {
            worldCode: QB,
            message: PB
          }), null === uB && !UB && (0, aB.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: JB,
            children: IB("worldSocial:loadFailed")
          }), hB && null !== XB && (0, aB.jsx)(Ij.b, {
            visibility: XB,
            onPick: BB => {
              (async BB => {
                if (BB === XB) return;
                (0, zj.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: BB
                });
                const jB = [...(0, pj.d)(zB), ...tB],
                  QB = "whitelist" === BB && uB ? (0, nj.g)(DB, jB, uB.whitelist) : [];
                await rB({
                  setVisibility: BB
                }, (jB => ({
                  ...jB,
                  visibility: BB
                }))) && await gj(QB)
              })(BB)
            }
          }), mB.requests.length > 0 && (0, aB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, aB.jsx)(CB.d, {
              label: (0, aB.jsxs)(aB.Fragment, {
                children: [(0, aB.jsx)(yB.c, {
                  name: Bj.f
                }), " ", IB("socialBar:requests")]
              }),
              meta: (0, aB.jsxs)(aB.Fragment, {
                children: [mB.requests.length, mB.requests.length === xB.p && (0, aB.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: IB("socialBar:limitReached")
                }), !EB && mB.requests.length > 1 && (0, aB.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    iB(!0)
                  },
                  children: IB("worldSocial:moreRequests", {
                    count: mB.requests.length - 1
                  })
                })]
              })
            }), (0, aB.jsx)("div", {
              className: "PlayerRows",
              children: Gj.map(((BB, jB) => (0, aB.jsx)(Nj.d, {
                zIndex: Gj.length - jB,
                player: BB,
                actions: (0, aB.jsxs)(aB.Fragment, {
                  children: [(0, aB.jsx)(KB.g, {
                    tooltipInner: (0, aB.jsx)(aB.Fragment, {
                      children: IB("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, aB.jsx)(sB.f, {
                      className: "FriendRequestButton",
                      ariaLabel: `${IB("general:accept")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, RB.h)(BB.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, aB.jsx)(yB.c, {
                        name: "check"
                      })
                    })
                  }), (0, aB.jsx)(KB.g, {
                    tooltipInner: (0, aB.jsx)(aB.Fragment, {
                      children: IB("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, aB.jsx)(sB.h, {
                      className: "FriendRequestButton",
                      ariaLabel: `${IB("general:decline")} ${BB.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, RB.h)(BB.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, aB.jsx)(yB.c, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${BB.name}`)))
            })]
          }), (0, aB.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, aB.jsx)(CB.d, {
              label: (0, aB.jsxs)(aB.Fragment, {
                children: [(0, aB.jsx)(yB.c, {
                  name: Bj.d
                }), " ", IB("socialBar:friends")]
              }),
              meta: mB.loaded && !AB ? mB.friends.length : void 0
            }), (0, aB.jsx)(aj.d, {
              label: IB("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: IB("worldSocial:addFriendPlaceholder"),
              onSubmit: async BB => await Sj(BB, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), sj && (0, aB.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, aB.jsx)(fB.e, {})
            }), !sj && (0, aB.jsxs)(aB.Fragment, {
              children: [(0, aB.jsxs)("div", {
                className: "PlayerRows",
                children: [mj.map(((BB, jB) => (0, aB.jsx)(Nj.d, {
                  zIndex: kj - jB,
                  player: (0, Nj.e)(BB, null),
                  status: IB("worldSocial:requestSent"),
                  vp: tj(BB)
                }, `request:${BB}`))), !AB && DB.map(((BB, jB) => (0, aB.jsx)(Nj.b, {
                  zIndex: yj - jB,
                  row: BB,
                  vp: tj(BB.friend.name),
                  canInvite: (0, nj.c)(uB) && "here" !== BB.place,
                  invited: tB.includes(BB.friend.name),
                  onInvite: () => {
                    (async BB => {
                      (0, zj.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const jB = () => {
                        MB((jB => jB.filter((jB => jB !== BB))))
                      };
                      MB((jB => [...jB, BB]));
                      const QB = (0, nj.p)(uB, BB);
                      if ("none" !== QB) {
                        const zB = gj([BB], "quiet" === QB);
                        if ("required" === QB && !await zB) return void jB()
                      }
                      await (0, vB.j)(BB, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, pj.f)(zB, BB), setTimeout(jB, wB.q)) : jB()
                    })(BB.friend.name)
                  }
                }, BB.friend.name))), mB.loaded && 0 === mB.friends.length && (0, aB.jsx)(Uj, {
                  playersHere: YB,
                  exclude: LB,
                  xG: BB => Sj(BB, "suggestion")
                })]
              }), ZB && mB.loaded && 0 === mB.friends.length && 0 === mj.length && (0, aB.jsx)("div", {
                className: "WorldSocialEmpty",
                children: IB("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), oB && (0, aB.jsxs)(sB.M, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, ij.h)({
              page: "players",
              source: "invite_popup"
            }), dB()
          },
          children: [(0, aB.jsx)(yB.c, {
            name: "users-gear"
          }), " ", IB("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var oj = zB(2570),
      Hj = zB(2525);

    function Dj(BB) {
      let {
        show: jB,
        onClose: zB,
        option: QB
      } = BB;
      const dB = (0, qB.h)("connectedGame", (BB => (0, oj.d)(BB) ? BB.lobbyName : null));
      return function(BB) {
        const {
          gameEntrySource: jB,
          loadingOverlayVisible: zB
        } = (0, TB.m)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: QB
        } = (0, SB.d)(), dB = (0, qB.k)("localPlayerAlive"), IB = (0, qB.h)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), NB = (0, Hj.o)(), uB = (0, nB.useRef)(null), UB = (0, nB.useRef)(null), aB = "worldCreation" === jB, pB = QB.whamm, rB = QB.getPersonalWorldLobbyName();
        (0, nB.useEffect)((() => {
          var jB;
          null !== BB && (null === (jB = UB.current) || void 0 === jB ? void 0 : jB.lobbyName) !== BB && null !== hj(BB, aB, pB, rB) && (UB.current = (0, Qj.c)(BB))
        }), [aB, BB, pB, rB]), (0, nB.useEffect)((() => {
          if (null !== BB && (!zB && dB && IB)) return NB.whenShown((() => {
            var jB;
            const zB = uB.current === BB ? null : hj(BB, aB, pB, rB);
            if (null === zB) return;
            const QB = (null === (jB = UB.current) || void 0 === jB ? void 0 : jB.lobbyName) === BB ? UB.current : (0, Qj.c)(BB);
            UB.current = null, uB.current = BB,
              function(BB, jB, zB, QB) {
                const {
                  lobbyName: nB
                } = BB, dB = () => {
                  ! function(BB, jB) {
                    if (!Pj()) return void jB(!0);
                    const zB = performance.now() + Aj;
                    let QB = 0;
                    const nB = () => {
                      QB = Pj() ? 0 : QB + 1, QB >= 2 ? jB(!0) : !Tj(BB) || performance.now() > zB ? jB(!1) : setTimeout(nB, Zj)
                    };
                    setTimeout(nB, Zj)
                  }(nB, (dB => {
                    QB();
                    const IB = "auto_existing" === jB && Sj(zB);
                    dB && Tj(nB) && !Yj(nB) && !IB && (Xj(BB) ? Vj(nB) : (Vj(nB), Mj(zB), function(BB) {
                      const jB = mj.c.world_social_popup_v1;
                      return (0, mj.h)("world_social_popup_v1"), (0, zj.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${jB}:${(0,Jj.e)()}:${BB}`
                      }), (0, sj.flushClientAnalyticsEvents)(), "auto_open" === jB
                    }(jB) && ((0, Qj.b)(BB), JB.n.Ly("toggleMenu", `inviteLink|${jB}`), "inviteLink" !== TB.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === jB && !Xj(BB)) return void dB();
                BB.response.then((BB => {
                  if (!("error" in BB)) return BB.settings.canManage ? void dB() : (Vj(nB), void QB());
                  QB()
                }))
              }(QB, zB, pB, (() => {
                uB.current === BB && (uB.current = null)
              }))
          }))
        }), [NB, aB, zB, BB, dB, IB, pB, rB])
      }(dB), (0, nB.useEffect)((() => {
        jB && null !== dB && Vj(dB)
      }), [jB, dB]), null !== dB ? (0, aB.jsx)(qj, {
        show: jB,
        onClose: zB,
        opener: Gj(QB) ? QB : "icon"
      }) : (0, aB.jsx)(eB.d, {
        show: jB,
        onClose: zB
      })
    }
    const Fj = new Set;

    function Yj(BB) {
      return Fj.has(BB) || !!YB.k.getItem(`worldSocialShown:${BB}`)
    }

    function Vj(BB) {
      Fj.add(BB), YB.k.setItem(`worldSocialShown:${BB}`, !0)
    }

    function hj(BB, jB, zB, QB) {
      return Yj(BB) ? null : function(BB) {
        let {
          justMade: jB,
          playerId: zB,
          lobbyName: QB,
          personalWorld: nB
        } = BB;
        return jB ? "auto" : !Sj(zB) && Lj(QB, nB) ? "auto_existing" : null
      }({
        justMade: jB,
        playerId: zB,
        lobbyName: BB,
        personalWorld: QB
      })
    }

    function Xj(BB) {
      let {
        answer: jB
      } = BB;
      return null !== jB && "settings" in jB && !jB.settings.canManage
    }
    const Zj = 500,
      Aj = 3e4;

    function Tj(BB) {
      return "inGame" === TB.c.get("gameState") && UB.gameBridge.latest("connectedGame").lobbyName === BB
    }

    function Pj() {
      return (0, WB.f)() || TB.c.get("loadingOverlayVisible") || (0, PB.m)()
    }
    var Wj = zB(36823),
      ej = zB(3274),
      lj = zB(2033),
      wj = zB(3270);

    function xj(BB, jB, zB) {
      return wj.e.overridesTexture(BB) ? wj.e.getTexture(BB, jB).url : zB
    }
    var Kj = zB(10002);
    const Cj = (BB, jB) => {
        (0, nB.useEffect)((() => {
          setTimeout((() => {
            BB && BB.current && BB.current.focus()
          }), 1)
        }), [jB])
      },
      cj = (0, nB.memo)((function(BB) {
        let {
          isInputActive: jB,
          onClose: zB,
          onChange: QB,
          textAreaRef: nB,
          fontSize: dB,
          lineHeight: IB,
          currText: NB
        } = BB;
        return (0, aB.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, aB.jsx)("img", {
            src: xj("board_full", ej.k.BLOCK, Kj),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, aB.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: NB,
            ref: nB,
            style: {
              fontSize: `${dB}rem`,
              lineHeight: `${IB}rem`
            },
            onKeyDown: BB => {
              var jB;
              "Escape" !== BB.key && (BB.stopPropagation(), "Tab" === BB.key && function(BB) {
                BB.preventDefault();
                const jB = BB.target,
                  {
                    value: zB
                  } = jB;
                let QB = jB.selectionStart,
                  nB = jB.selectionEnd,
                  dB = zB.slice(QB, nB);
                if (!dB.includes("\n") && !BB.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; QB > 0 && "\n" !== zB[QB - 1];) QB--;
                const IB = "\n" === zB[nB - 1];
                IB && nB--;
                dB = zB.slice(QB, nB);
                const NB = dB.split("\n").map((jB => BB.shiftKey ? jB.replace(/^\t/, "") : "\t" + jB)).join("\n");
                if (BB.shiftKey && zB.slice(QB, nB) === NB) return;
                let {
                  selectionStart: uB
                } = jB;
                jB.setSelectionRange(QB, nB), uB > QB && (!BB.shiftKey || "\t" === dB[0]) && (uB += BB.shiftKey ? -1 : 1);
                nB = QB + NB.length + (IB ? 1 : 0), document.execCommand("insertText", !1, NB), jB.setSelectionRange(uB, nB)
              }(BB), /^F\d+$/i.test(BB.code) && null !== (jB = lj.w.OpenCodeEditor) && void 0 !== jB && jB.includes(BB.code) && zB())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: QB
          })]
        })
      }));

    function bj(BB) {
      return 1.3 * BB
    }
    var vj = zB(1718);
    const Rj = (0, nB.memo)((function(BB) {
        let {
          show: jB,
          onOpen: zB,
          onClose: QB
        } = BB;
        const [dB, NB] = (0, nB.useState)(null), [uB, pB] = (0, nB.useState)(""), [rB, JB] = (0, nB.useState)(0), [mB, yB] = (0, nB.useState)(null), [kB, GB] = (0, nB.useState)({
          text: "",
          textSize: 0
        }), LB = (BB, jB) => mB ? (0, Wj.n)(BB, jB, mB.width, mB.height) : (0, Wj.h)(BB, jB), gB = BB => {
          pB(LB(uB, BB)), JB(BB), YB.j.setItem("lastBoardTextSize", BB)
        }, tB = () => {
          QB(), mB && uB === kB.text && rB === kB.textSize || UB.gameBridge.send("writeOnBoard", {
            pos: dB,
            text: uB,
            textSize: rB
          })
        };
        (0, qB.d)("boardEditRequested", (BB => {
          var nB, dB;
          if (!FB.featureFlags.canSeePlayerWrittenText) return;
          if (null === BB) return NB(null), void(jB && QB());
          const {
            pos: IB,
            noticeboardSpan: uB,
            text: UB
          } = BB;
          NB(IB), yB(uB), pB(UB);
          const aB = null !== (nB = null !== (dB = BB.textSize) && void 0 !== dB ? dB : YB.j.getItem("lastBoardTextSize")) && void 0 !== nB ? nB : 0;
          JB(aB), GB({
            text: UB,
            textSize: aB
          }), YB.j.setItem("lastBoardTextSize", aB), zB()
        }));
        const SB = (0, nB.useRef)(null);
        Cj(SB, jB), (0, vj.u)(SB, {
          kind: "sign",
          submit: tB
        });
        const MB = function(BB, jB) {
            const zB = Wj.e[BB];
            if (!jB) return zB.uiFontSize;
            const {
              numLines: QB,
              charsPerLine: nB
            } = (0, Wj.x)(jB.width, jB.height, BB);
            return zB.uiFontSize * Math.min(zB.charsPerLine / nB, zB.numLines / QB)
          }(rB, mB),
          EB = bj(MB);
        return (0, aB.jsxs)(IB.d, {
          className: "WriteOnBoardBg",
          close: tB,
          escDoesExit: !0,
          show: jB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, aB.jsx)(cj, {
            isInputActive: () => jB,
            onClose: tB,
            onChange: BB => {
              pB(LB(BB.target.value, rB))
            },
            textAreaRef: SB,
            fontSize: MB,
            lineHeight: EB,
            currText: uB
          }), (0, aB.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, aB.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, aB.jsx)(sB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                gB(0)
              },
              disabled: 0 === rB,
              children: "Small"
            }), (0, aB.jsx)(sB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                gB(1)
              },
              disabled: 1 === rB,
              children: "Medium"
            }), (0, aB.jsx)(sB.f, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                gB(2)
              },
              disabled: 2 === rB,
              children: "Large"
            })]
          })]
        })
      })),
      Oj = (0, nB.memo)((function(BB) {
        let {
          show: jB,
          onOpen: zB,
          onClose: QB
        } = BB;
        const [dB, NB] = (0, nB.useState)(""), uB = () => {
          QB(), UB.gameBridge.send("writeNameTag", dB)
        };
        (0, EB.f)("EditNameTag", (BB => {
          FB.featureFlags.canSeePlayerWrittenText && null !== BB && (NB(BB), zB())
        }));
        const pB = (0, nB.useRef)(null);
        Cj(pB, jB), (0, vj.u)(pB, {
          kind: "nameTag",
          submit: uB
        });
        const rB = Wj.F.nameTag.uiFontSize,
          JB = bj(rB);
        return (0, aB.jsxs)(IB.d, {
          className: "WriteOnBoardBg",
          close: uB,
          escDoesExit: !0,
          show: jB,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, aB.jsx)("div", {
            className: "NameTagTrim",
            children: (0, aB.jsx)(cj, {
              isInputActive: () => jB,
              onClose: uB,
              onChange: BB => {
                const jB = BB.target.value.replaceAll("\n", "");
                NB((0, Wj.r)(jB, "nameTag"))
              },
              textAreaRef: pB,
              fontSize: rB,
              lineHeight: JB,
              currText: dB
            })
          }), (0, aB.jsx)(sB.f, {
            onClick: uB,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var Bz = zB(18189);
    const jz = (0, nB.memo)((function(BB) {
      let {
        show: jB,
        onOpen: zB,
        onClose: QB
      } = BB;
      const [dB, NB] = (0, nB.useState)(""), [uB, pB] = (0, nB.useState)(0), [rB, JB] = (0, nB.useState)(!1), [mB, yB] = (0, nB.useState)(["", "", "", "", "", "", "", "", "", ""]), [kB, GB] = (0, nB.useState)("Title"), [LB, gB] = (0, nB.useState)(!0), [tB, SB] = (0, nB.useState)(!1);
      (0, EB.f)("EditBook", (BB => {
        let {
          pages: jB,
          title: QB,
          isPublished: nB
        } = BB;
        var dB;
        FB.featureFlags.canSeePlayerWrittenText && (null !== jB ? (yB(jB), NB(null !== (dB = jB[0]) && void 0 !== dB ? dB : ""), GB(QB), pB(0), JB(!1), gB(!nB), SB(!1), zB()) : yB(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const MB = (0, nB.useRef)(null),
        iB = (0, nB.useRef)(null);
      Cj(MB, jB), (0, vj.u)(MB, {
        kind: "book"
      }), (0, vj.u)(iB, {
        kind: "zN"
      });
      const qB = Wj.F.book.uiFontSize,
        fB = bj(qB),
        oB = () => {
          (LB || tB) && UB.gameBridge.send("writeBook", {
            pages: [...mB],
            title: kB,
            published: !LB && tB
          })
        },
        HB = BB => {
          rB && (mB[uB] = dB, JB(!1)), NB(mB[BB]), pB(BB)
        };
      return (0, aB.jsxs)(IB.d, {
        className: "WriteOnBoardBg",
        close: () => {
          QB(), mB[uB] = dB, oB()
        },
        escDoesExit: !0,
        show: jB,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, aB.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, aB.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: kB,
            ref: iB,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${fB}rem`
            },
            onKeyDown: BB => {
              LB && BB.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: BB => {
              let jB = BB.target.value;
              jB = (0, Wj.r)(jB, "zN"), GB(jB)
            },
            readOnly: !LB
          }), (0, aB.jsx)("img", {
            src: xj("book_page", ej.k.ITEM, Bz),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, aB.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, aB.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: dB,
              ref: MB,
              style: {
                fontSize: `${qB}rem`,
                lineHeight: `${fB}rem`
              },
              onKeyDown: BB => {
                LB && BB.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: BB => {
                const jB = BB.target.value;
                NB((0, Wj.r)(jB, "book")), JB(!0)
              },
              readOnly: !LB
            })
          })]
        }), (0, aB.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, aB.jsx)(sB.f, {
            disabled: 0 === uB,
            onClick: () => {
              HB(uB - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, aB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, aB.jsx)(sB.f, {
            disabled: 9 === uB,
            onClick: () => {
              HB(uB + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, aB.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, aB.jsx)(sB.f, {
            onClick: () => {
              gB(!LB), SB(!0)
            },
            className: "BookNavButton",
            children: LB ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var zz = zB(36687),
      Qz = zB(8685),
      nz = zB(1418),
      dz = zB(1971);

    function Iz(BB) {
      let {
        show: jB,
        buttons: zB
      } = BB;
      const {
        t: QB
      } = (0, cB.D)(), dB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        var BB, zB;
        const QB = jB ? (0, zz.A)() : null;
        if (!QB || !(0, nz.l)()) return;
        const nB = (0, zz.l)().findIndex((BB => BB.id === QB));
        (0, Qz.o)(null !== (BB = null === (zB = dB.current) || void 0 === zB ? void 0 : zB.children[nB]) && void 0 !== BB ? BB : null)
      }), [jB]), 0 === zB.length ? null : (0, aB.jsx)("div", {
        ref: dB,
        className: "ClientGameInventoryButtons",
        onPointerDown: BB => {
          BB.stopPropagation()
        },
        onPointerUp: BB => {
          BB.stopPropagation()
        },
        children: zB.map((BB => {
          const jB = QB(BB.labelKey);
          return (0, aB.jsxs)(sB.m, {
            className: BB.className,
            disabled: BB.disabled,
            onClick: () => {
              (0, zz.r)(BB)
            },
            ariaLabel: BB.iconOnly ? jB : void 0,
            title: BB.iconOnly ? jB : void 0,
            children: [BB.icon && (0, aB.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === BB.icon.kind && (0, aB.jsx)(dz.c, {
                itemName: BB.icon.name,
                amount: 0
              }), "image" === BB.icon.kind && (0, aB.jsx)("img", {
                src: BB.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === BB.icon.kind && (0, aB.jsx)(yB.c, {
                name: BB.icon.name
              })]
            }), !BB.iconOnly && jB]
          }, BB.id)
        }))
      })
    }
    var Nz = zB(36828),
      uz = zB(2851),
      Uz = zB(34262),
      az = zB(36606),
      pz = zB(36599);
    let rz = null;
    window.setShowInventoryAdsOverride = BB => {
      rz = BB
    };
    const sz = 24e4;
    var Jz = zB(1980);

    function mz(BB) {
      var jB;
      let {
        draggedInfo: {
          name: zB,
          attributes: QB,
          amount: nB
        },
        toAddRef: dB
      } = BB;
      return (0, aB.jsx)("div", {
        className: "DraggedInvenItem",
        ref: dB,
        children: (0, aB.jsx)(dz.c, {
          itemName: zB,
          amount: nB,
          enchantmentTier: null === QB || void 0 === QB || null === (jB = QB.customAttributes) || void 0 === jB ? void 0 : jB.enchantmentTier,
          bar: (0, Jz.i)(QB)
        })
      })
    }

    function yz(BB) {
      let {
        className: jB = "",
        displayInfo: zB,
        domRef: QB
      } = BB;
      return (0, aB.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${jB}`,
        ref: QB,
        children: [(0, aB.jsx)(MB.e, {
          text: (0, iB.ob)(zB.name, {
            fontStyle: zB.fontStyle
          })
        }), (0, aB.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, aB.jsx)(MB.e, {
            text: zB.desc
          })
        })]
      })
    }

    function kz(BB) {
      let {
        info: jB,
        draggedInfo: zB
      } = BB;
      const QB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => {
        const BB = QB.current,
          {
            left: zB,
            top: nB
          } = function(BB, jB, zB, QB) {
            const nB = QB.left * zB.width / 100 + 4,
              dB = zB.width - QB.right * zB.width / 100 - 4 - jB.width,
              IB = QB.top * zB.height / 100 + 4,
              NB = zB.height - 4 - jB.height;
            return {
              left: Math.max(nB, Math.min(BB.x - jB.width / 2, dB)),
              top: Math.max(IB, Math.min(BB.y - 48 - jB.height, NB))
            }
          }({
            x: jB.initTouchX,
            y: jB.initTouchY
          }, {
            width: BB.offsetWidth,
            height: BB.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, TB.c.get("notchSize"));
        BB.style.left = `${zB}px`, BB.style.top = `${nB}px`
      }), [jB]), (0, aB.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: QB,
        children: [(0, aB.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: zB.amount / jB.maxAmount * 100 + "%"
          }
        }), (0, aB.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [zB.amount, "/", jB.maxAmount]
        })]
      })
    }
    var Gz = zB(1091),
      Lz = zB.n(Gz),
      gz = zB(214);
    const tz = (0, nB.memo)((function(BB) {
      let {
        show: jB,
        onOpen: zB,
        onClose: QB
      } = BB;
      const dB = (0, nB.useRef)({
          pos: null
        }),
        [NB, uB] = (0, nB.useState)([0, 0, 0, 0]),
        {
          userContext: pB
        } = (0, SB.d)();
      (0, qB.d)("ironChestOpenRequested", (BB => {
        let {
          pos: jB,
          ownerDbId: QB,
          cachedPasskey: nB
        } = BB;
        if (dB.current.pos = jB, QB !== pB.whamm) return null !== nB ? (uB(nB), void rB(nB)) : void zB();
        rB(NB)
      })), (0, qB.d)("localEffectUpdated", (BB => {
        "Thief" === BB && QB()
      }));
      const rB = BB => {
        const {
          pos: jB
        } = dB.current;
        UB.gameBridge.send("openIronChest", {
          pos: jB,
          oN: BB
        })
      };
      return (0, aB.jsx)(IB.d, {
        className: "IronChestPasskeyInputScreenOuter",
        close: QB,
        escDoesExit: !0,
        show: jB,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, aB.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, aB.jsx)(Sz, {
            oN: NB,
            onPasskeyUpdated: uB,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              rB(NB)
            }
          })
        })
      })
    }));

    function Sz(BB) {
      let {
        className: jB = "",
        oN: zB,
        onPasskeyUpdated: QB,
        confirmText: nB,
        onConfirm: dB
      } = BB;
      const {
        t: IB
      } = (0, cB.D)();
      return (0, aB.jsxs)("div", {
        className: `${jB} IronChestPasskeyInput`,
        children: [(0, aB.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: IB("ironChest:passkeyInputTitle")
        }), (0, aB.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(gz.e.ironChestPasskeyLength).fill(0).map(((BB, jB) => (0, aB.jsx)(Mz, {
            digit: zB[jB],
            onPasskeyDigitUpdated: BB => {
              const nB = [...zB];
              nB[jB] = BB, QB(nB)
            }
          }, jB)))
        }), (0, aB.jsx)(sB.m, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: dB,
          children: IB(nB)
        })]
      })
    }

    function Mz(BB) {
      let {
        digit: jB,
        onPasskeyDigitUpdated: zB
      } = BB;
      return (0, aB.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, aB.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, aB.jsx)(sB.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              zB(iB.b.mod(jB + 1, 10))
            },
            children: (0, aB.jsx)(yB.c, {
              name: "angle-up"
            })
          }), (0, aB.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: jB
          }), (0, aB.jsx)(sB.m, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              zB(iB.b.mod(jB - 1, 10))
            },
            children: (0, aB.jsx)(yB.c, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var Ez = zB(34254),
      iz = zB(36887),
      qz = zB(36596);

    function fz(BB) {
      let {
        specialItemInfo: jB,
        setHovered: zB,
        pointerDown: QB,
        pointerUp: dB,
        enchantingTablePosition: IB,
        enchantingTableBlockName: NB
      } = BB;
      const {
        t: pB
      } = (0, cB.D)(), [rB, JB] = (0, nB.useState)(null), [mB, yB] = (0, nB.useState)(null), kB = (0, uB.i)("auraPerLevel"), GB = Math.floor((0, qB.k)("aura") / kB);
      (0, nB.useEffect)((() => {
        if (!jB) return void JB(null);
        let BB = !0;
        return UB.gameBridge.query("enchantingOffer", {
          slot: jB.idx,
          name: jB.name,
          blockName: NB
        }).then((zB => {
          var QB, nB;
          let {
            perks: dB,
            options: IB
          } = zB;
          if (!BB) return;
          const NB = {
            isEnchantable: dB.length > 0,
            possibleEnchantments: dB,
            options: IB.map((BB => {
              let {
                level: jB,
                odds: zB
              } = BB;
              return {
                level: jB,
                possibilities: Object.fromEntries(zB.map(((BB, jB) => [`Tier ${jB+1}`, BB])))
              }
            })),
            isAlreadyEnchanted: dB.length > 0 && void 0 !== (null === (QB = jB.attributes) || void 0 === QB || null === (nB = QB.customAttributes) || void 0 === nB ? void 0 : nB.enchantmentTier)
          };
          JB(NB), (BB => {
            const jB = BB.options.map((BB => Object.entries(BB.possibilities).map((BB => {
              let [jB, zB] = BB;
              return {
                str: `${jB}: ${zB>0?zB<.01?zB.toPrecision(1):zB.toFixed(2):0}%\n`,
                style: {
                  color: iB.hb[jB]
                }
              }
            }))));
            yB(jB)
          })(NB)
        })), () => {
          BB = !1
        }
      }), [jB, IB, NB]);
      const LB = [];
      for (let nB = 0; nB < iz.c; nB++) {
        const BB = null === rB || void 0 === rB ? void 0 : rB.options[nB],
          QB = !BB || BB.level > GB;
        LB.push((0, aB.jsx)(sB.f, {
          className: "EnchantmentButton",
          onPointerEnter: BB ? BB => null === zB || void 0 === zB ? void 0 : zB()(!0, {
            name: "",
            desc: mB[nB]
          }, BB) : void 0,
          onPointerLeave: BB ? () => null === zB || void 0 === zB ? void 0 : zB()(!1) : void 0,
          onClick: QB ? void 0 : () => {
            UB.gameBridge.send("enchantItem", {
              slot: jB.idx,
              level: BB.level,
              tablePos: IB
            }), JB(null)
          },
          disabled: QB,
          children: BB ? (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, aB.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [pB("enchantments:cost"), ": "]
              }), " ", pB("enchantments:levels", {
                level: BB.level
              })]
            }), (0, aB.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, aB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, aB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pB("enchantments:tier")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [jB, zB] = BB;
                  return 0 === zB ? null : (0, aB.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: iB.hb[jB]
                    },
                    children: jB
                  }, jB)
                }))]
              }), (0, aB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, aB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: pB("enchantments:odds")
                }), Object.entries(BB.possibilities).map((BB => {
                  let [jB, zB] = BB;
                  return 0 === zB ? null : (0, aB.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: iB.hb[jB]
                    },
                    children: [zB > 0 && zB < .1 ? "<0.1" : zB.toFixed(0 < zB && zB < .95 ? 1 : 0), "%"]
                  }, jB)
                }))]
              })]
            })]
          }) : !1 === (null === rB || void 0 === rB ? void 0 : rB.isEnchantable) ? (0, aB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pB("enchantments:notEnchantable")
          }) : (0, aB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: pB("enchantments:enterItem")
          })
        }, nB))
      }
      return (0, aB.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, aB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: NB
        }), (0, aB.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, aB.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, aB.jsx)(qz.d, {
              idx: pz.g,
              setHovered: BB => {
                null === zB || void 0 === zB || zB(pz.g)(BB)
              },
              pointerDown: QB,
              pointerUp: dB,
              draggedInfo: null,
              specialItemInfo: jB,
              variation: "Enchanting Table"
            }), rB && rB.possibleEnchantments.length > 0 && (0, aB.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, aB.jsx)("h2", {
                children: "Possible Perks:"
              }), rB.possibleEnchantments.map((BB => (0, aB.jsxs)(nB.Fragment, {
                children: [(0, aB.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, aB.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, aB.jsx)(dz.c, {
                      itemName: `${BB} Enchantment`,
                      amount: 1
                    })
                  }), (0, aB.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: BB
                  })]
                }), (0, aB.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: pB((0, Ez.i)(BB).translationKey)
                })]
              }, BB)))]
            })]
          }), (0, aB.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [rB && rB.isAlreadyEnchanted && (0, aB.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: pB("enchantments:alreadyEnchanted")
            }), LB]
          })]
        })]
      })
    }
    var oz = zB(36893);

    function Hz(BB) {
      var jB;
      let {
        specialItemInfo: zB,
        setSpecialItemInfo: QB,
        setHovered: dB,
        pointerDown: IB,
        pointerUp: NB
      } = BB;
      const {
        t: uB
      } = (0, cB.D)(), pB = (0, qB.h)("inventory", (BB => BB.freeSlots)), [rB, JB] = (0, nB.useState)(null);
      (0, nB.useEffect)((() => {
        if (zB) {
          const BB = (0, oz.e)(zB.name, zB.amount);
          JB({
            salvageable: !!BB,
            produces: BB
          })
        } else JB(null)
      }), [zB, null === zB || void 0 === zB ? void 0 : zB.name, null === zB || void 0 === zB ? void 0 : zB.amount]);
      const mB = !!zB && !(null === rB || void 0 === rB || !rB.salvageable) && !(null !== (jB = rB.produces) && void 0 !== jB && jB.some((BB => {
        let {
          amt: jB
        } = BB;
        return jB < 1
      })));
      return (0, aB.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, aB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: uB("item:salvagingTable")
        }), (0, aB.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, aB.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, aB.jsx)(qz.d, {
              idx: pz.g,
              setHovered: BB => {
                null === dB || void 0 === dB || dB(pz.g)(BB)
              },
              pointerDown: IB,
              pointerUp: NB,
              draggedInfo: null,
              specialItemInfo: zB,
              variation: "Salvaging Table"
            })
          }), (0, aB.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, aB.jsx)(sB.f, {
              className: "SalvageButton",
              onClick: mB ? () => {
                const {
                  idx: BB,
                  name: jB,
                  amount: nB
                } = zB;
                UB.gameBridge.send("salvageItem", {
                  slot: BB,
                  name: jB,
                  amount: nB
                }) && (JB(null), QB(null))
              } : void 0,
              disabled: !mB,
              children: rB ? rB.salvageable ? rB.produces.some((BB => {
                let {
                  amt: jB
                } = BB;
                return jB < 1
              })) ? (0, aB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, aB.jsx)("div", {
                  className: "SalvageText Error",
                  children: uB("salvagingTable:notEnoughResources")
                })
              }) : pB < rB.produces.length ? (0, aB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, aB.jsx)("div", {
                  className: "SalvageText Error",
                  children: uB("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, aB.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, aB.jsx)("div", {
                  className: "SalvageText",
                  children: uB("salvagingTable:salvage")
                }), (0, aB.jsx)("div", {
                  className: "SalvageIcons",
                  children: rB.produces.map(((BB, jB) => {
                    let {
                      item: zB,
                      amt: QB
                    } = BB;
                    return (0, aB.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: zB,
                        amount: Math.floor(QB)
                      })
                    }, jB)
                  }))
                })]
              }) : (0, aB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, aB.jsx)("div", {
                  className: "SalvageText Error",
                  children: uB("salvagingTable:unsalvageable")
                })
              }) : (0, aB.jsx)(aB.Fragment, {})
            })
          })]
        })]
      })
    }
    var Dz = zB(225),
      Fz = zB(9266),
      Yz = zB(2816),
      Vz = zB(1710),
      hz = zB(8698),
      Xz = zB(8691),
      Zz = zB(1694),
      Az = zB(2053),
      Tz = zB(1442),
      Pz = zB(2131);

    function Wz(BB, jB, zB) {
      const QB = BB.trim().toLowerCase();
      if ("" === QB) return 0;
      let nB = null;
      for (const dB of jB) {
        const BB = dB.toLowerCase().indexOf(QB);
        if (0 === BB) return 0;
        BB > 0 && (nB = 1)
      }
      if (null !== nB) return nB;
      for (const dB of zB)
        if (dB.toLowerCase().includes(QB)) return 2;
      return null
    }

    function ez(BB) {
      return BB.map((BB => {
        var jB;
        return BB ? {
          name: BB.name,
          amount: null !== (jB = BB.amount) && void 0 !== jB ? jB : 1
        } : null
      }))
    }

    function lz(BB) {
      return BB < 1e3 ? `${BB}` : BB < 1e4 ? Math.floor(BB / 100) / 10 + "k" : `${Math.floor(BB/1e3)}k`
    }
    var wz = zB(36897);
    const xz = sB.f,
      Kz = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      Cz = () => {
        const BB = (0, Tz.d)();
        return BB ? BB.getPadRepeatTiming(Kz) : Kz
      };

    function cz(BB, jB, zB) {
      var QB, nB;
      const dB = (0, Uz.q)(jB, BB);
      let IB = null === (QB = jB[BB]) || void 0 === QB ? void 0 : QB.description;
      if (zB && (null === (nB = (0, wz.i)().get(BB)) || void 0 === nB || !nB.hideIngredients)) {
        IB ? (IB = (0, iB.ob)(IB), IB.push({
          str: "\n"
        })) : IB = [], IB.push({
          str: "\n"
        }), IB.push({
          str: "Can be crafted from:\n"
        });
        for (const BB of zB) "string" === typeof BB && (IB.push({
          icon: BB,
          style: {
            fontSize: "1.5em"
          }
        }), IB.push({
          str: " "
        }), IB.push(...(0, iB.ob)((0, Uz.q)(jB, BB))), IB.push({
          str: "\n"
        }))
      }
      return {
        name: dB,
        desc: IB
      }
    }

    function bz(BB) {
      let {
        name: jB,
        qa: zB
      } = BB;
      return `${jB}_${zB}`
    }

    function vz(BB) {
      var jB;
      let {
        onClick: zB,
        itemName: QB,
        recipeId: dB,
        isSelected: IB,
        haveIngredients: NB,
        craftable: uB,
        setHovered: UB,
        padActions: pB,
        marked: rB,
        lock: sB,
        itemInfo: JB
      } = BB;
      const mB = (0, nB.useRef)(null);
      return (0, hz.f)(mB, {
        press: BB => !NB || "secondary" === BB && !uB ? (pB.refuse(), !1) : "primary" === BB ? (pB.choose(), !0) : pB.craft(),
        release: pB.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, aB.jsxs)("div", {
        ref: mB,
        className: Lz()("InvenItem", {
          CraftableItemNotEnoughIngredients: !NB && !sB,
          CraftableItemMarked: rB,
          CraftableItemLocked: void 0 !== sB,
          CraftableItemLockedFar: (null !== (jB = null === sB || void 0 === sB ? void 0 : sB.stepsAway) && void 0 !== jB ? jB : 1) > 1
        }),
        "data-recipe-key": dB,
        "data-pad-inventory-default": IB ? "" : void 0,
        onClick: zB,
        style: {
          cursor: IB ? null : "pointer"
        },
        onPointerEnter: BB => {
          null === UB || void 0 === UB || UB(!0, cz(QB, JB)), !IB && (0, Zz.q)(BB.nativeEvent) && (0, Xz.h)() && zB()
        },
        onPointerLeave: () => {
          null === UB || void 0 === UB || UB(!1)
        },
        children: [(0, aB.jsx)(dz.c, {
          itemName: QB,
          amount: 1
        }), rB && (0, aB.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), sB && (0, aB.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, aB.jsx)(yB.c, {
            name: "lock"
          }), (0, aB.jsx)(MB.e, {
            text: sB.tag
          })]
        })]
      })
    }

    function Rz(BB) {
      let {
        idx: jB,
        status: zB,
        shownItem: QB,
        dim: dB,
        onHoverStart: IB,
        onHoverEnd: NB,
        onPadBack: uB
      } = BB;
      const UB = (0, nB.useRef)(null);
      (0, hz.f)(UB, {
        press: () => !1,
        back: uB,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const pB = zB.need > 0 ? Math.min(zB.have / zB.need, 1) : 1;
      return (0, aB.jsxs)("div", {
        ref: UB,
        className: Lz()("CupTile", {
          Short: zB.missing > 0
        }),
        style: {
          width: dB,
          height: dB
        },
        "data-craft-ingredient": jB,
        onPointerEnter: IB,
        onPointerLeave: NB,
        children: [(0, aB.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${pB})`
          }
        }), (0, aB.jsx)(dz.c, {
          itemName: QB,
          amount: 0
        }), (0, aB.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [lz(zB.have), "/", lz(zB.need)]
        })]
      })
    }

    function Oz(BB) {
      var jB, zB, QB, dB, IB;
      let {
        show: NB,
        recipeItem: {
          name: uB,
          qa: pB,
          requires: rB,
          produces: sB,
          haveIngredients: JB
        },
        detail: mB,
        onCraft: yB,
        setHovered: kB,
        craftButtonRef: GB,
        onPadBack: LB,
        showPadShortcut: gB,
        refusedCount: tB,
        lock: SB,
        itemInfo: EB
      } = BB;
      const {
        t: iB
      } = (0, cB.D)(), qB = null !== mB && !mB.roomForOne, fB = null !== (jB = null === mB || void 0 === mB ? void 0 : mB.craftAllTimes) && void 0 !== jB ? jB : 0, oB = function(BB, jB) {
        return BB.map((BB => {
          let {
            items: zB,
            amt: QB
          } = BB, nB = 0;
          const dB = [];
          for (const IB of zB) {
            const BB = jB(IB);
            nB += BB, BB > 0 && dB.push(IB)
          }
          return 0 === dB.length && dB.push(zB[0]), {
            shownItems: dB,
            need: QB,
            have: nB,
            missing: Math.max(QB - nB, 0)
          }
        }))
      }(rB, (BB => {
        var jB;
        return null !== (jB = null === mB || void 0 === mB ? void 0 : mB.amounts[BB]) && void 0 !== jB ? jB : 0
      }));
      let HB = "4rem",
        DB = 4;
      3 === rB.length || 4 === rB.length ? HB = "3.75rem" : rB.length >= 5 && (HB = "3rem"), 4 === rB.length ? DB = 2 : rB.length <= 6 && (DB = 3);
      const FB = `calc(${DB} * ${HB} + ${DB-1} * 0.4rem + 1px)`,
        YB = (0, nB.useRef)(null),
        VB = (0, nB.useRef)(null);
      (0, nB.useLayoutEffect)((() => {
        YB.current.scrollTop = 0
      }), [uB, pB]);
      const hB = (0, nB.useRef)(tB);
      (0, nB.useEffect)((() => {
        if (tB === hB.current) return;
        hB.current = tB;
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
        for (const QB of null !== (jB = null === (zB = YB.current) || void 0 === zB ? void 0 : zB.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== jB ? jB : []) {
          var jB, zB;
          QB.animate(BB, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [tB]);
      const XB = (BB, jB, zB) => {
          var QB;
          if ((0, wz.i)().has(uB)) return void(zB && clearInterval(ZB.current));
          const nB = null !== (QB = null === mB || void 0 === mB ? void 0 : mB.resultStackable) && void 0 !== QB && QB,
            dB = ez(UB.gameBridge.latest("inventory").player),
            {
              fa: IB,
              zu: NB,
              amountAddedToSlot: aB
            } = UB.gameBridge.send("craftRecipe", {
              name: uB,
              qa: pB,
              times: jB || BB && nB ? null : 1
            });
          if (IB > 0) {
            const jB = [],
              QB = new Set(rB.flatMap((BB => {
                let {
                  items: jB
                } = BB;
                return jB
              }))),
              IB = function(BB, jB, zB) {
                const QB = [];
                for (let nB = 0; nB < BB.length; nB++) {
                  const dB = BB[nB];
                  if (!dB || !zB.has(dB.name)) continue;
                  const IB = jB[nB],
                    NB = (null === IB || void 0 === IB ? void 0 : IB.name) === dB.name ? IB.amount : 0;
                  NB < dB.amount && QB.push({
                    idx: nB,
                    itemName: dB.name,
                    amount: dB.amount - NB
                  })
                }
                return QB
              }(dB, ez(UB.gameBridge.latest("inventory").player), QB).slice(0, 12),
              pB = zB ? 0 : Math.min(50, 400 / IB.length),
              JB = zB ? 220 : 320;
            for (const BB of IB) {
              var sB;
              const zB = rB.findIndex((jB => {
                  let {
                    items: zB
                  } = jB;
                  return zB.includes(BB.itemName)
                })),
                QB = null === (sB = YB.current) || void 0 === sB ? void 0 : sB.querySelector(`[data-craft-ingredient="${zB}"]`),
                nB = (0, Uz.c)(BB.idx);
              QB && nB && jB.push({
                kind: "ingredient",
                itemName: BB.itemName,
                amount: BB.amount,
                zu: BB.idx,
                from: nB,
                to: (0, Uz.c)(QB),
                delayMs: Math.round(jB.length * pB),
                durationMs: JB
              })
            }
            let mB;
            if (null !== NB && aB > 0 && VB.current) {
              const BB = jB.length > 0 ? jB[jB.length - 1].delayMs + .6 * JB : 0;
              mB = {
                itemName: uB,
                amount: aB,
                zu: NB,
                from: (0, Uz.c)(VB.current),
                delayMs: Math.round(BB)
              }
            }
            yB(mB, BB && !nB ? NB : null, jB), Nz.e.play("wood1", .5).rate(1.75)
          }
        },
        ZB = (0, nB.useRef)(null);
      (0, nB.useEffect)((() => () => {
        clearInterval(ZB.current)
      }), []);
      const AB = (BB, jB) => {
          XB(BB, !1, !1), clearInterval(ZB.current), jB && (ZB.current = setTimeout((() => {
            ZB.current = setInterval((() => {
              XB(BB, !1, !0)
            }), jB.intervalMs)
          }), jB.initialDelayMs))
        },
        TB = () => {
          clearInterval(ZB.current)
        },
        PB = !JB || qB || Boolean(SB),
        WB = (0, nB.useRef)(null),
        eB = null !== (zB = null === (QB = (0, Pz.e)()) || void 0 === QB ? void 0 : QB.hideButtonHints) && void 0 !== zB && zB,
        lB = null !== (dB = null === (IB = (0, Tz.d)()) || void 0 === IB ? void 0 : IB.getBoundButton("inventorySecondary")) && void 0 !== dB ? dB : null,
        wB = () => !PB && (XB(!1, !0, !1), !0);
      (0, hz.f)(GB, {
        press: BB => "secondary" === BB ? wB() : !PB && (AB(!1, Cz()), !0),
        release: TB,
        back: LB,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, hz.f)(WB, {
        press: wB,
        back: LB,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [xB, KB] = (0, nB.useState)(0), [CB, bB] = (0, nB.useState)(null);
      (0, nB.useEffect)((() => {
        if (!0 === NB) {
          KB(0);
          const BB = setInterval((() => {
            KB((BB => BB + 1))
          }), 1e3);
          return () => {
            clearInterval(BB)
          }
        }
        return () => {}
      }), [NB]);
      const vB = null === mB || void 0 === mB ? void 0 : mB.ingredientsCraftedFrom,
        RB = (0, nB.useRef)(kB);
      (0, nB.useEffect)((() => {
        RB.current = kB
      }), [kB]);
      const OB = !(null === SB || void 0 === SB || !SB.hideIngredients);
      (0, nB.useEffect)((() => {
        var BB, jB;
        if (!CB) return;
        if (OB) return bB(null), void(null === (jB = RB.current) || void 0 === jB || jB.call(RB, !1));
        const zB = CB[xB % CB.length];
        null === (BB = RB.current) || void 0 === BB || BB.call(RB, !0, cz(zB, EB, null === vB || void 0 === vB ? void 0 : vB[zB]))
      }), [CB, xB, EB, vB, OB]);
      const Bj = !!SB,
        jj = (0, nB.useRef)(!1);
      (0, nB.useEffect)((() => {
        var BB;
        Bj && (clearInterval(ZB.current), OB && jj.current && (jj.current = !1, null === (BB = RB.current) || void 0 === BB || BB.call(RB, !1)))
      }), [Bj, OB]);
      const zj = (0, Uz.q)(EB, uB);
      return (0, aB.jsxs)("div", {
        ref: YB,
        className: "CraftableInfo SmallTextBold",
        children: [(0, aB.jsx)("div", {
          className: "CraftableHeader",
          children: (0, aB.jsx)(MB.e, {
            text: zj
          })
        }), !OB && (0, aB.jsx)("div", {
          className: Lz()("CraftableIngredients", {
            Compact: rB.length >= 5
          }),
          style: {
            maxWidth: FB
          },
          children: oB.map(((BB, jB) => {
            const zB = BB.shownItems[xB % BB.shownItems.length];
            return (0, aB.jsx)(Rz, {
              idx: jB,
              status: BB,
              shownItem: zB,
              dim: HB,
              onHoverStart: () => {
                bB(BB.shownItems)
              },
              onHoverEnd: () => {
                bB(null), null === kB || void 0 === kB || kB(!1)
              },
              onPadBack: LB
            }, jB)
          }))
        }), SB && (0, aB.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, aB.jsx)(MB.e, {
            text: SB.reason
          })
        }), !SB && (!JB || qB) && (0, aB.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!JB && "Missing ingredients", (0, aB.jsx)("br", {}), qB && "Inventory is full"]
        }), !OB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsxs)(xz, {
            ref: GB,
            className: "DoCraftButton",
            onPointerDown: BB => {
              AB((0, Uz.t)(BB), (0, Zz.q)(BB.nativeEvent) ? Cz() : Kz)
            },
            onPointerUp: TB,
            onPointerLeave: TB,
            disabled: PB,
            children: [gB && lB && !PB && !eB && (0, aB.jsx)(Az.b, {
              className: "CraftShortcutGlyph",
              glyph: lB
            }), (0, aB.jsx)("div", {
              ref: VB,
              className: "DoCraftItem",
              onPointerEnter: () => {
                jj.current = !0, null === kB || void 0 === kB || kB(!0, cz(uB, EB))
              },
              onPointerLeave: () => {
                jj.current = !1, null === kB || void 0 === kB || kB(!1)
              },
              children: (0, aB.jsx)(dz.c, {
                itemName: uB,
                amount: sB
              })
            })]
          }), (0, aB.jsxs)(xz, {
            ref: WB,
            className: "DoCraftAllButton",
            onPointerDown: BB => {
              XB((0, Uz.t)(BB), !0, !1)
            },
            disabled: PB,
            children: [(0, aB.jsx)("span", {
              className: "CraftAllLabel",
              children: iB("general:craftAll")
            }), fB > 0 && (0, aB.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", lz(fB)]
            })]
          })]
        })]
      })
    }

    function BQ(BB) {
      let {
        selectedIdx: jB,
        hidden: zB
      } = BB;
      const QB = (0, nz.u)(),
        dB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => {
        const BB = dB.current,
          QB = null === BB || void 0 === BB ? void 0 : BB.parentElement;
        if (!QB || !BB) return;
        const nB = QB.querySelector(".CraftableItems"),
          IB = () => {
            var dB, IB;
            if (zB) return void(BB.style.opacity = "0");
            const NB = null === nB || void 0 === nB ? void 0 : nB.children[jB],
              uB = null === (dB = null !== (IB = null === NB || void 0 === NB ? void 0 : NB.querySelector(".InvenItem")) && void 0 !== IB ? IB : NB) || void 0 === dB ? void 0 : dB.getBoundingClientRect();
            if (!uB || 0 === uB.width) return void(BB.style.opacity = "0");
            const UB = QB.getBoundingClientRect();
            BB.style.opacity = "1", BB.style.width = `${uB.width}px`, BB.style.height = `${uB.height}px`, BB.style.transform = `translate(${uB.left-UB.left+QB.scrollLeft}px, ${uB.top-UB.top+QB.scrollTop}px)`
          };
        IB();
        const NB = new MutationObserver(IB),
          uB = new ResizeObserver(IB);
        return uB.observe(QB), nB && (NB.observe(nB, {
          childList: !0,
          subtree: !0
        }), uB.observe(nB)), () => {
          NB.disconnect(), uB.disconnect()
        }
      }), [jB, zB]), (0, aB.jsx)("div", {
        ref: dB,
        className: Lz()("SelectionReticle", {
          Secondary: QB
        })
      })
    }

    function jQ(BB, jB, zB) {
      return BB ? (0, Dz.b)(Fz.i, BB) ? zQ(BB, jB, zB) : BB : zB("classicGame:handCrafting")
    }

    function zQ(BB, jB, zB) {
      var QB;
      const nB = null === (QB = jB[BB]) || void 0 === QB ? void 0 : QB.displayName;
      if ("string" === typeof nB) return zB(nB);
      const dB = UB.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(nB) ? nB.map((BB => {
        if ("string" === typeof BB) return BB;
        if ("translationKey" in BB) return zB(BB.translationKey, (0, cB.p)(BB.params, dB));
        if ("str" in BB) {
          if ("string" === typeof BB.str) return BB.str;
          if ("translationKey" in BB.str) return zB(BB.str.translationKey, (0, cB.p)(BB.str.params, dB))
        }
        return ""
      })).join("") : nB && "translationKey" in nB ? zB(nB.translationKey, (0, cB.p)(nB.params, dB)) : BB
    }

    function QQ(BB, jB) {
      return BB === jB || null !== BB && null !== jB && BB.name === jB.name && BB.qa === jB.qa
    }

    function nQ(BB) {
      var jB, zB, QB;
      let {
        show: dB,
        onCraft: IB,
        dispatchSelectedCraftable: NB,
        selectedCraftable: uB,
        craftingStation: pB,
        setHovered: rB
      } = BB;
      const {
        t: sB
      } = (0, cB.D)(), [JB, mB] = (0, nB.useState)(""), [yB, kB] = (0, nB.useState)(0);
      (0, nB.useEffect)((() => {
        dB || (mB(""), kB((BB => BB + 1)))
      }), [dB]);
      const [GB, LB] = (0, nB.useState)(pB);
      GB !== pB && (LB(pB), "" !== JB && (mB(""), kB((BB => BB + 1))));
      const gB = (0, nB.useRef)(null),
        tB = (0, nB.useRef)(null),
        SB = (0, Xz.l)(),
        MB = SB.showing && "recipe" === SB.kind,
        [EB, iB] = (0, nB.useState)(0),
        fB = null !== pB && void 0 !== pB ? pB : null,
        oB = (0, nB.useRef)(null),
        HB = BB => {
          return !((jB = oB.current) === (zB = BB) || null !== jB && null !== zB && jB.station === zB.station && QQ(jB.recipe, zB.recipe)) && (oB.current = BB, UB.gameBridge.send("focusCrafting", BB), !0);
          var jB, zB
        };
      HB(dB ? {
        station: fB,
        recipe: (null === (jB = oB.current) || void 0 === jB ? void 0 : jB.station) === fB ? oB.current.recipe : null
      } : null);
      let DB = UB.gameBridge.latest("crafting");
      const FB = (0, qB.k)("itemInfo"),
        YB = "" !== JB.trim(),
        VB = (0, wz.A)(),
        hB = (0, wz.z)(),
        XB = (0, wz.E)(),
        ZB = function(BB, jB) {
          const [zB, QB] = (0, nB.useState)(!1);
          (0, nB.useEffect)((() => {
            if (!BB) return void QB(!1);
            const jB = setTimeout((() => {
              QB(!0)
            }), 0);
            return () => {
              clearTimeout(jB)
            }
          }), [BB]);
          const dB = BB && zB,
            IB = (0, nB.useRef)({
              station: jB,
              at: new Map
            });
          return (IB.current.station !== jB || !dB && IB.current.at.size > 0) && (IB.current = {
            station: jB,
            at: new Map
          }), dB ? IB.current.at : null
        }(dB, pB);
      let AB = DB.recipes.filter((BB => {
        let {
          listed: jB
        } = BB;
        return jB
      }));
      if (YB) {
        const BB = [];
        for (const jB of DB.recipes) {
          var TB;
          const zB = null !== (TB = hB.get(jB.name)) && void 0 !== TB && TB.hideIngredients ? [] : jB.requires.flatMap((BB => {
              let {
                items: jB
              } = BB;
              return jB.flatMap((BB => [BB, zQ(BB, FB, sB)]))
            })),
            QB = Wz(JB, [jB.name, zQ(jB.name, FB, sB)], zB);
          null !== QB && BB.push({
            item: jB,
            rank: QB
          })
        }
        BB.sort(((BB, jB) => BB.rank - jB.rank)), AB = BB.map((BB => {
          let {
            item: jB
          } = BB;
          return jB
        }))
      } else {
        if (ZB && ZB.size > 0) {
          const BB = DB.recipes.filter((BB => !BB.listed && ZB.has(bz(BB))));
          AB = AB.concat(BB)
        }
        AB = (0, wz.l)(AB, VB, hB, XB), ZB && (AB = (0, wz.j)(AB, ZB, bz))
      }
      const PB = BB => AB.find((jB => bz(jB) === BB)),
        WB = `${pB}|${JB}`,
        [eB, lB] = (0, nB.useState)(null),
        wB = (null === eB || void 0 === eB ? void 0 : eB.context) === WB ? eB.key : null,
        xB = uB ? bz(uB) : null,
        KB = null !== (zB = null !== (QB = PB(xB)) && void 0 !== QB ? QB : PB(wB)) && void 0 !== zB ? zB : AB[0],
        CB = KB ? bz(KB) : null,
        bB = KB ? {
          name: KB.name,
          qa: KB.qa
        } : null;
      dB && HB({
        station: fB,
        recipe: bB
      }) && (DB = UB.gameBridge.latest("crafting")), CB !== xB && CB !== wB && lB(CB ? {
        context: WB,
        key: CB
      } : null), (0, nB.useEffect)((() => () => {
        oB.current = null, UB.gameBridge.send("focusCrafting", null)
      }), []);
      const vB = QQ(DB.detail, bB) ? DB.detail : null,
        RB = null !== vB && !vB.roomForOne,
        OB = AB.findIndex((BB => bz(BB) === bz(KB))),
        Bj = () => tB.current ? (0, hz.b)(tB.current) : null,
        jj = (0, nB.useRef)(null),
        zj = (0, nB.useRef)(0);
      zj.current++;
      const Qj = zj.current;
      (0, nB.useEffect)((() => {
        const BB = jj.current;
        if (!BB || Qj <= BB.afterRender) return;
        if (jj.current = null, BB.key !== CB) return;
        const jB = Bj();
        var zB;
        null !== jB && void 0 !== jB && jB.press("primary") && !BB.DN && (null === (zB = jB.release) || void 0 === zB || zB.call(jB))
      }));
      const nj = BB => {
          const jB = {
            name: BB.name,
            qa: BB.qa
          };
          return {
            choose: () => {
              NB(jB), (0, Qz.o)(tB.current)
            },
            craft: () => {
              var BB, zB;
              return NB(jB), bz(jB) !== bz(KB) ? (jj.current = {
                key: bz(jB),
                DN: !0,
                afterRender: zj.current
              }, !0) : null !== (BB = null === (zB = Bj()) || void 0 === zB ? void 0 : zB.press("primary")) && void 0 !== BB && BB
            },
            stopCraft: () => {
              var BB, jB;
              jj.current ? jj.current.DN = !1 : null === (BB = Bj()) || void 0 === BB || null === (jB = BB.release) || void 0 === jB || jB.call(BB)
            },
            refuse: () => {
              bz(jB) !== bz(KB) && NB(jB), iB((BB => BB + 1))
            }
          }
        },
        dj = () => {
          var BB, jB, zB;
          (0, Qz.o)(null !== (BB = null === (jB = gB.current) || void 0 === jB || null === (zB = jB.querySelector(".CraftableItems")) || void 0 === zB ? void 0 : zB.children[OB]) && void 0 !== BB ? BB : null)
        },
        Ij = AB.map(bz).join("|"),
        Nj = (0, nB.useRef)(Ij);
      return (0, nB.useEffect)((() => {
        Nj.current !== Ij && (Nj.current = Ij, MB && OB >= 0 && (0, Xz.h)() && dj())
      })), (0, aB.jsxs)("div", {
        className: "Craftables",
        children: [(0, aB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: jQ(pB, FB, sB)
        }), (0, aB.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, aB.jsx)(Vz.d, {
            className: "CraftingSearch",
            placeholderText: sB("general:searchRecipes"),
            defaultValue: JB,
            maxLength: 100,
            onValueChange: BB => {
              mB(BB)
            },
            blurOnEnter: !0
          }, yB), 0 === AB.length && YB && (0, aB.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: sB("general:noRecipesMatchSearch")
          }), AB.length > 0 && (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsxs)("div", {
              ref: gB,
              className: "CraftablesLeftSide",
              children: [(0, aB.jsx)(Yz.d, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(AB.map((BB => {
                  let {
                    name: jB,
                    qa: zB,
                    haveIngredients: QB
                  } = BB;
                  return {
                    name: jB,
                    qa: zB,
                    haveIngredients: QB
                  }
                })))],
                observing: dB,
                children: AB.map((BB => {
                  const {
                    name: jB,
                    qa: zB,
                    haveIngredients: QB
                  } = BB, nB = bz(BB);
                  return (0, aB.jsx)(vz, {
                    recipeId: nB,
                    itemName: jB,
                    onClick: () => {
                      NB({
                        name: jB,
                        qa: zB
                      })
                    },
                    isSelected: bz(KB) === nB,
                    haveIngredients: QB,
                    craftable: QB && !hB.has(jB) && !(bz(KB) === nB && RB),
                    setHovered: rB,
                    padActions: nj(BB),
                    marked: VB.has(jB),
                    lock: hB.get(jB),
                    itemInfo: FB
                  }, nB)
                }))
              }), (0, aB.jsx)(BQ, {
                selectedIdx: OB,
                hidden: MB && SB.steppingSlots
              })]
            }), (0, aB.jsx)(Oz, {
              show: dB,
              recipeItem: KB,
              detail: vB,
              onCraft: IB,
              setHovered: rB,
              craftButtonRef: tB,
              onPadBack: dj,
              showPadShortcut: MB,
              refusedCount: EB,
              lock: hB.get(KB.name),
              itemInfo: FB
            })]
          })]
        })]
      })
    }
    var dQ = zB(34264),
      IQ = zB(3402),
      NQ = zB(2167),
      uQ = zB(8665);
    class UQ {
      constructor(BB, jB, zB) {
        this.commit = BB, this.delayMs = jB, this.defers = zB, this.pending = null, this.timer = void 0, this.DN = !1, this.flush = () => {
          clearTimeout(this.timer);
          const BB = this.pending;
          null !== BB && (this.pending = null, this.commit(BB))
        }
      }
      type(BB) {
        this.pending = BB, clearTimeout(this.timer), this.DN || this.defers() ? this.DN || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(BB) {
        var jB;
        return null !== (jB = this.pending) && void 0 !== jB ? jB : BB
      }
      isHeld() {
        return this.DN
      }
      setHeld(BB) {
        this.DN = BB, BB || this.flush()
      }
    }

    function aQ(BB) {
      return null === BB ? "creativeInventory:all" : `creativeInventory:${BB}`
    }

    function pQ(BB) {
      let {
        category: jB
      } = BB;
      return null === jB ? (0, aB.jsx)(yB.c, {
        name: "layer-group"
      }) : (0, aB.jsx)(dz.c, {
        itemName: dQ.creativeItemCategoryIcons[jB],
        amount: 0
      })
    }

    function rQ(BB) {
      let {
        labelKey: jB,
        isSelected: zB,
        onSelect: QB,
        setHovered: nB,
        children: dB
      } = BB;
      return (0, aB.jsx)("div", {
        className: Lz()("CreativeCategoryTab", {
          Selected: zB
        }),
        onClick: QB,
        onPointerEnter: BB => {
          (0, Uz.m)(BB) || nB(!0, {
            name: {
              translationKey: jB
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          nB(!1)
        },
        children: dB
      })
    }

    function sQ(BB) {
      let {
        categories: jB,
        selectedCategory: zB,
        onSelect: QB
      } = BB;
      const {
        t: dB
      } = (0, cB.D)(), [IB, NB] = (0, nB.useState)(!1), uB = (0, nB.useRef)(null), UB = (0, nB.useCallback)((() => {
        NB(!1)
      }), []);
      return (0, NQ.c)(uB, UB), (0, aB.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: uB,
        children: [(0, aB.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            NB(!IB)
          },
          children: [(0, aB.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, aB.jsx)(pQ, {
              category: zB
            })
          }), (0, aB.jsx)("span", {
            children: dB(aQ(zB))
          }), (0, aB.jsx)(yB.c, {
            name: IB ? "caret-up" : "caret-down"
          })]
        }), IB && (0, aB.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: jB.map((BB => (0, aB.jsxs)("div", {
            className: Lz()("CreativeCategoryDropdownOption", {
              Selected: zB === BB
            }),
            onClick: () => {
              QB(BB), NB(!1)
            },
            children: [(0, aB.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, aB.jsx)(pQ, {
                category: BB
              })
            }), (0, aB.jsx)("span", {
              children: dB(aQ(BB))
            })]
          }, null !== BB && void 0 !== BB ? BB : "all")))
        })]
      })
    }
    const JQ = (0, nB.memo)((function(BB) {
      let {
        creativeScrollDiv: jB,
        playerInvenNumSlots: zB,
        getSetHoveringForIdx: QB,
        getPointerDownForIdx: dB,
        getPointerUpForIdx: IB,
        creativeSearchVal: NB,
        setCreativeSearchVal: UB,
        creativeCategory: pB,
        setCreativeCategory: rB,
        show: sB
      } = BB;
      const {
        t: JB
      } = (0, cB.D)(), mB = (0, qB.k)("creativeVisibility"), {
        userContext: kB
      } = (0, SB.d)(), GB = (0, uB.i)("canUseDevCreativeItems"), LB = kB.playerHasRank("developer") || !!GB, gB = (0, nB.useMemo)((() => yQ("", mB, LB)), [mB, LB]), tB = (0, nB.useMemo)((() => {
        const BB = (0, dQ.creativeItemIds)(),
          jB = new Set(gB.map((jB => (0, dQ.creativeCategoryOf)(BB[jB]))));
        return dQ.creativeItemCategories.filter((BB => jB.has(BB)))
      }), [gB]), MB = null !== pB && tB.includes(pB) ? pB : null, iB = (0, nB.useMemo)((() => "" === NB ? gB : yQ(NB, mB, LB)), [gB, NB, mB, LB]), fB = (0, nB.useMemo)((() => {
        const BB = (0, dQ.creativeItemIds)();
        return null !== MB ? iB.filter((jB => (0, dQ.creativeCategoryOf)(BB[jB]) === MB)) : "" === NB ? iB.filter((jB => !(0, dQ.showOnlyInCreativeCategory)(BB[jB]))) : iB
      }), [iB, MB, NB]), oB = QB();

      function HB(BB) {
        rB(BB), jB.current.scrollTop = 0
      }
      const DB = [null, ...tB],
        {
          isTouchScreen: FB
        } = (0, TB.m)(["isTouchScreen"]),
        YB = !FB,
        VB = (0, nB.useRef)(null),
        [hB, XB] = (0, nB.useState)(0);
      (0, nB.useEffect)((() => {
        const BB = VB.current;
        if (!BB) return;
        const jB = new ResizeObserver((BB => {
          XB(BB[0].contentRect.height)
        }));
        return jB.observe(BB), () => {
          jB.disconnect()
        }
      }), [YB]);
      const ZB = (0, nB.useRef)(null),
        AB = (0, nB.useCallback)((function BB() {
          "up" === ZB.current ? jB.current.scrollTop -= 10 : "down" === ZB.current && (jB.current.scrollTop += 10), ZB.current && requestAnimationFrame(BB)
        }), [jB]),
        PB = (0, nB.useCallback)((function(BB) {
          ZB.current || (ZB.current = BB, AB())
        }), [AB]);

      function WB() {
        ZB.current = null
      }
      const eB = (0, nB.useRef)({
        creativeSearchVal: NB,
        setCreativeSearchVal: UB
      });
      eB.current = {
        creativeSearchVal: NB,
        setCreativeSearchVal: UB
      };
      const [lB] = (0, nB.useState)((() => new UQ((BB => {
        eB.current.setCreativeSearchVal(BB)
      }), 250, nz.l))), wB = BB => {
        var zB;
        null === (zB = jB.current) || void 0 === zB || zB.classList.toggle("CreativeItemSlotsStale", BB)
      };
      (0, EB.f)(uQ.b, (BB => {
        lB.setHeld(BB), BB || wB(!1)
      })), (0, nB.useEffect)((() => lB.flush), [lB]);
      const xB = (0, aB.jsx)(Vz.d, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: NB,
          maxLength: 1e4,
          onValueChange: (BB, jB) => {
            "" === lB.getTyped(eB.current.creativeSearchVal) && "" !== BB && rB(null), lB.type(BB), wB(lB.isHeld())
          },
          onEnter: lB.flush,
          blurOnEnter: !0
        }),
        KB = (0, aB.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [FB && (0, aB.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, aB.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                PB("up")
              },
              onPointerLeave: WB,
              onPointerUp: WB,
              children: (0, aB.jsx)(yB.c, {
                name: "arrow-up"
              })
            }), (0, aB.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                PB("down")
              },
              onPointerLeave: WB,
              onPointerUp: WB,
              children: (0, aB.jsx)(yB.c, {
                name: "arrow-up"
              })
            })]
          }), (0, aB.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: jB,
            children: [0 === fB.length && "" !== NB && (0, aB.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: JB("general:noResults")
            }), (0, aB.jsx)(Yz.d, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [NB, MB],
              observerRoot: "CreativeItemSlots",
              observing: sB,
              children: fB.map((BB => {
                const jB = zB + BB;
                return (0, aB.jsx)(qz.d, {
                  idx: jB,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: QB(jB),
                  pointerDown: dB(jB),
                  pointerUp: IB(jB)
                }, jB)
              }))
            })]
          })]
        });
      return (0, aB.jsxs)("div", {
        className: Lz()("CreativeItemSlotsWrapper", YB ? "WithRail" : "WithDropdown"),
        children: [YB && (0, aB.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: VB,
          style: {
            "--rail-height": hB > 0 ? `${hB}px` : void 0,
            "--tab-rows": Math.ceil(DB.length / 2)
          },
          children: DB.map((BB => (0, aB.jsx)(rQ, {
            labelKey: aQ(BB),
            isSelected: MB === BB,
            onSelect: () => {
              HB(BB)
            },
            setHovered: oB,
            children: (0, aB.jsx)(pQ, {
              category: BB
            })
          }, null !== BB && void 0 !== BB ? BB : "all")))
        }), (0, aB.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, aB.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [xB, !YB && (0, aB.jsx)(sQ, {
              categories: DB,
              selectedCategory: MB,
              onSelect: HB
            })]
          }), KB]
        })]
      })
    }));

    function mQ(BB) {
      var jB;
      return null !== (jB = (0, IQ.e)(BB)) && void 0 !== jB ? jB : ""
    }

    function yQ(BB, jB, zB) {
      let {
        publicLobby: QB,
        shownInGame: nB
      } = jB;
      const dB = BB.toLowerCase(),
        IB = (0, dQ.creativeItemIds)(),
        NB = BB => {
          var jB;
          const dB = IB[BB];
          return !(0, dQ.itemIsDisabled)(dB, QB, null === (jB = nB[mQ(dB)]) || void 0 === jB || jB, zB)
        };
      if ("" === dB) return IB.map(((BB, jB) => jB)).filter((BB => !(0, dQ.showOnlyInCreativeSearch)(IB[BB]))).filter(NB);
      const uB = [];
      for (let UB = 0; UB < IB.length; UB++) mQ(IB[UB]).toLowerCase().includes(dB) && uB.push(UB);
      uB.sort(((BB, jB) => {
        const zB = mQ(IB[BB]).toLowerCase(),
          QB = mQ(IB[jB]).toLowerCase();
        return zB.indexOf(dB) - QB.indexOf(dB)
      }));
      for (const [UB, aB] of(0, dQ.creativeAltNames)())
        for (const BB of aB)
          if (BB.toLowerCase().includes(dB)) {
            const BB = IB.indexOf(UB);
            uB.includes(BB) || uB.push(BB)
          } return uB.filter(NB)
    }
    var kQ = zB(36907),
      GQ = zB(658);

    function LQ(BB) {
      return BB > GQ.k
    }

    function gQ(BB) {
      const jB = BB / 2,
        zB = [];
      for (let QB = 0; QB < jB / 6; QB++)
        for (let BB = 0; BB < 12; BB++) {
          const nB = BB < 6 ? 0 : jB;
          zB.push(nB + 6 * QB + BB % 6)
        }
      return zB
    }

    function tQ(BB) {
      let {
        numSlots: jB,
        renderSlot: zB
      } = BB;
      const {
        t: QB
      } = (0, cB.D)(), dB = (0, nB.useRef)(null);
      var IB;
      return IB = dB, (0, nB.useLayoutEffect)((() => {
        var BB;
        const jB = null === (BB = IB.current) || void 0 === BB ? void 0 : BB.closest(".InvenBody");
        if (!jB) return;
        const zB = () => {
          jB.style.zoom = "";
          const BB = parseFloat(getComputedStyle(document.documentElement).fontSize),
            zB = window.innerWidth - 2 * BB,
            QB = jB.getBoundingClientRect().width;
          QB > zB && (jB.style.zoom = "" + zB / QB)
        };
        return zB(), window.addEventListener("resize", zB), () => {
          window.removeEventListener("resize", zB), jB.style.zoom = ""
        }
      }), [IB]), (0, aB.jsxs)("div", {
        ref: dB,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, aB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: QB("doubleChest:title")
        }), (0, aB.jsx)("div", {
          className: "GridItemSlots",
          children: gQ(jB).map((BB => zB(BB)))
        })]
      })
    }

    function SQ(BB) {
      let {
        vn: jB,
        initialPasskey: zB
      } = BB;
      const {
        t: QB
      } = (0, cB.D)(), [dB, IB] = (0, nB.useState)(zB), [NB, uB] = (0, nB.useState)(zB);
      (0, nB.useEffect)((() => {
        IB(zB), uB(zB)
      }), [...jB]);
      return (0, aB.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, aB.jsx)("div", {
          className: "SmallTextBold",
          children: QB("ironChest:currentPasskey", {
            currentPasskey: dB.join("")
          })
        }), (0, aB.jsx)(Sz, {
          className: "IronChestPasskeyEditor",
          oN: NB,
          onPasskeyUpdated: uB,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            UB.gameBridge.send("changeIronChestPasskey", {
              pos: [...jB],
              oN: [...NB]
            }), IB([...NB])
          }
        })]
      })
    }

    function MQ(BB, jB) {
      return "Iron" === BB.type && BB.ironChest.ownerDbId === jB
    }

    function EQ(BB) {
      let {
        variation: jB,
        canCraft: zB,
        show: QB,
        creativeMounted: nB,
        specialItemRef: dB,
        draggedInfo: IB,
        getSetHovering: NB,
        getPointerDownForIdx: uB,
        getPointerUpForIdx: UB,
        enchantingTablePosition: pB,
        enchantingTableBlockName: rB,
        selectedCraftable: sB,
        dispatchSelectedCraftable: JB,
        creativeScrollDiv: mB,
        creativeSearchVal: yB,
        setCreativeSearchVal: kB,
        creativeCategory: GB,
        setCreativeCategory: LB,
        onCraft: gB
      } = BB;
      const {
        userContext: tB
      } = (0, SB.d)(), {
        t: MB
      } = (0, cB.D)(), EB = (0, qB.h)("inventory", (BB => BB.chest)), iB = (0, qB.h)("inventory", (BB => BB.player.length)), fB = (0, qB.h)("inventory", (BB => BB.creative));
      if (0 === iB) return null;
      let oB, HB;
      const DB = BB => {
          const jB = iB + BB;
          return (0, aB.jsx)(qz.d, {
            idx: jB,
            draggedInfo: IB,
            specialItemInfo: dB.current,
            setHovered: NB(jB),
            pointerDown: uB(jB),
            pointerUp: UB(jB)
          }, jB)
        },
        FB = EB ? (0, kQ.b)(EB.type) : null;
      if (FB) oB = Lz()("InvenLeftSideChestCustom", FB.className), HB = (0, aB.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: FB.render({
          vn: EB.pos,
          renderSlot: DB
        })
      });
      else if (EB) {
        const BB = EB.pos,
          jB = "Iron" === EB.type || "Moonstone" === EB.type ? EB.type : "Standard";
        oB = `InvenLeftSideChest${jB}`;
        const zB = LQ(EB.numSlots);
        HB = (0, aB.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [MQ(EB, tB.whamm) && (0, aB.jsx)(SQ, {
            vn: BB,
            initialPasskey: EB.ironChest.oN
          }), zB && (0, aB.jsx)(tQ, {
            numSlots: EB.numSlots,
            renderSlot: DB
          }), !zB && (0, aB.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, aB.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: MB("Moonstone" === jB ? "item:moonstoneChest" : "Iron" === jB ? "item:ironChest" : "item:chest")
            }), (0, aB.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(EB.numSlots).fill(0).map(((BB, jB) => DB(jB)))
            })]
          })]
        })
      } else if (!fB || jB && zB)
        if (zB && "Enchanting Table" === jB) oB = `InvenLeftSide${(null!==rB&&void 0!==rB?rB:"").replace(/ /gi,"")}`, HB = (0, aB.jsx)(fz, {
          specialItemInfo: dB.current,
          setHovered: NB,
          pointerDown: uB(pz.g),
          pointerUp: UB(pz.g),
          enchantingTablePosition: pB,
          enchantingTableBlockName: rB
        });
        else if (zB && "Salvaging Table" === jB) oB = "InvenLeftSideSalvagingTable", HB = (0, aB.jsx)(Hz, {
        specialItemInfo: dB.current,
        setSpecialItemInfo: BB => {
          dB.current = BB
        },
        setHovered: NB,
        pointerDown: uB(pz.g),
        pointerUp: UB(pz.g)
      });
      else {
        if (!zB) return null;
        oB = `InvenLeftSide${(null!==jB&&void 0!==jB?jB:"HandCrafting").replace(/ /gi,"")}`, HB = (0, aB.jsx)(nQ, {
          show: QB,
          onCraft: gB,
          craftingStation: jB,
          selectedCraftable: sB,
          dispatchSelectedCraftable: JB,
          setHovered: NB()
        })
      } else oB = "InvenLeftSideCreative", HB = nB ? (0, aB.jsx)(JQ, {
        creativeScrollDiv: mB,
        playerInvenNumSlots: iB,
        getSetHoveringForIdx: NB,
        getPointerDownForIdx: uB,
        getPointerUpForIdx: UB,
        creativeSearchVal: yB,
        setCreativeSearchVal: kB,
        creativeCategory: GB,
        setCreativeCategory: LB,
        show: QB
      }) : null;
      const YB = !!EB || zB && !!jB;
      return (0, aB.jsx)("div", {
        className: `InvenLeftSide ${oB}`,
        "data-pad-inventory-start": YB ? "" : void 0,
        children: HB
      })
    }
    var iQ = zB(644),
      qQ = zB(20064),
      fQ = zB(20069),
      oQ = zB(20071);
    const HQ = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: zB(20078)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: fQ
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: oQ
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: zB(20086)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: qQ
      }
    };

    function DQ(BB) {
      const {
        sprite: jB,
        image: zB
      } = HQ[BB];
      return xj(jB, ej.k.ITEM, zB)
    }

    function FQ(BB) {
      let {
        draggedInfo: jB,
        specialItemInfo: zB,
        craftFlyAnims: QB,
        getSetHovering: nB,
        getPointerDownForIdx: dB,
        getPointerUpForIdx: IB,
        variation: NB,
        canCraft: uB,
        isNewSlot: UB
      } = BB;
      const pB = (0, qB.h)("inventory", (BB => BB.player.length));
      return 0 === pB ? null : (0, aB.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, aB.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(iQ.c.length).fill(0).map(((BB, rB) => {
            const sB = pB - iQ.c.length + rB;
            return (0, aB.jsx)(qz.d, {
              idx: sB,
              draggedInfo: jB,
              specialItemInfo: zB,
              craftFlyHoldbackInfo: (0, az.k)(QB, sB),
              setHovered: nB(sB),
              pointerDown: dB(sB),
              pointerUp: IB(sB),
              defaultIconB64: DQ(iQ.c[rB]),
              variation: uB ? NB : void 0,
              showNewDot: UB(sB)
            }, sB)
          }))
        }), (0, aB.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(pB - 10 - iQ.c.length).fill(0).map(((BB, rB) => {
            const sB = pB - iQ.c.length - rB - 1;
            return (0, aB.jsx)(qz.d, {
              idx: sB,
              draggedInfo: jB,
              specialItemInfo: zB,
              craftFlyHoldbackInfo: (0, az.k)(QB, sB),
              setHovered: nB(sB),
              pointerDown: dB(sB),
              pointerUp: IB(sB),
              variation: uB ? NB : void 0,
              showNewDot: UB(sB)
            }, sB)
          }))
        })]
      })
    }
    var YQ = zB(36911),
      VQ = zB(36920);

    function hQ(BB) {
      const {
        e: jB,
        idx: zB
      } = BB, QB = (0, Uz.i)(BB.readInventory(), zB), nB = (0, Uz.l)(jB);
      zB === pz.c ? function(BB, jB) {
        const {
          draggedInfoRef: zB,
          removeItem: QB,
          removeDraggedInfoRef: nB,
          close: dB
        } = BB;
        if (zB.current) {
          const BB = jB && zB.current.amount || 1;
          QB(zB.current.idx, BB, !0) && (zB.current.amount -= BB, zB.current.amount <= 0 && nB())
        } else jB && dB()
      }(BB, nB) : zB === pz.g ? function(BB, jB) {
        const {
          e: zB,
          draggedInfoRef: QB,
          specialItemRef: nB,
          moveAmtIntoSlot: dB,
          removeDraggedInfoRef: IB
        } = BB;
        if ((0, Uz.t)(zB) && nB.current) nB.current = null;
        else if (QB.current && nB.current && (QB.current.idx === nB.current.idx || (0, VQ.d)(QB.current, nB.current)) && QB.current.amount > 0 && nB.current.amount > 0 && nB.current.amount < gz.e.maxItemStackSize)
          if (QB.current.idx === nB.current.idx) {
            if (jB) {
              const BB = Math.min(QB.current.amount, gz.e.maxItemStackSize - nB.current.amount);
              nB.current.amount += BB, QB.current.amount -= BB
            } else QB.current.amount--, nB.current.amount++;
            QB.current.amount <= 0 && IB()
          } else if (jB) {
          const BB = Math.min(QB.current.amount, gz.e.maxItemStackSize - nB.current.amount);
          dB(nB.current.idx, BB) && (nB.current.amount += BB)
        } else {
          dB(nB.current.idx, 1) && nB.current.amount++
        } else if (QB.current && !nB.current && !jB && QB.current.amount > 0) QB.current.amount--, nB.current = {
          idx: QB.current.idx,
          name: QB.current.name,
          attributes: QB.current.attributes,
          amount: 1
        }, QB.current.amount <= 0 && IB();
        else {
          const BB = QB.current;
          QB.current = nB.current, nB.current = BB
        }
      }(BB, nB) : (0, Uz.t)(jB) ? function(BB, jB) {
        var zB, QB;
        const {
          idx: nB,
          draggedInfoRef: dB,
          specialItemRef: IB,
          canCraft: NB,
          variation: uB,
          swapSlots: UB,
          moveIntoSlots: aB
        } = BB;
        if (!jB) return;
        let pB = jB.amount;
        nB === (null === (zB = dB.current) || void 0 === zB ? void 0 : zB.idx) && (pB = dB.current.amount <= 0 ? 0 : jB.amount - dB.current.amount);
        nB === (null === (QB = IB.current) || void 0 === QB ? void 0 : QB.idx) && (pB = IB.current.amount <= 0 ? 0 : jB.amount - IB.current.amount);
        if (0 === pB) return;
        const rB = BB.readInventory(),
          sB = rB.player.length,
          JB = rB.chest,
          mB = sB - iQ.c.length,
          yB = () => {
            if (!(0, nz.l)()) return void aB(10, mB, nB, pB);
            const BB = BB => {
              const zB = (0, Uz.i)(rB, BB);
              return zB ? {
                amount: zB.amount,
                stacksWithMoved: (0, VQ.d)(zB, jB)
              } : null
            };
            for (const jB of ((BB, jB, zB, QB, nB) => {
                const dB = [];
                let IB = QB;
                if (null !== QB) {
                  let NB = 0;
                  for (let QB = jB; QB < zB; QB++) {
                    const jB = BB(QB);
                    null !== jB && void 0 !== jB && jB.stacksWithMoved && null !== jB.amount && jB.amount > 0 && (NB += Math.max(0, nB - jB.amount))
                  }
                  const uB = Math.min(QB, NB);
                  if (uB > 0 && (dB.push({
                      start: jB,
                      end: zB,
                      amount: uB
                    }), IB = QB - uB), IB <= 0) return dB
                }
                for (let NB = zB - 1; NB >= jB; NB--)
                  if (null === BB(NB)) {
                    dB.push({
                      start: NB,
                      end: NB + 1,
                      amount: IB
                    });
                    break
                  } return dB
              })(BB, 10, mB, pB, gz.e.maxItemStackSize)) aB(jB.start, jB.end, nB, jB.amount)
          };
        if (!NB || "Enchanting Table" !== uB && "Salvaging Table" !== uB) {
          const zB = (0, iB.zb)(jB.name),
            QB = zB ? (0, iB.vb)(zB) : null;
          if (!iQ.c.includes(zB) || nB !== QB && (0, Uz.k)(rB, BB.itemInfo, QB, nB))
            if (JB)
              if (nB < sB) {
                var kB, GB;
                const [BB, jB] = null !== (kB = null === (GB = (0, kQ.b)(JB.type)) || void 0 === GB ? void 0 : GB.quickMoveRange) && void 0 !== kB ? kB : [0, JB.numSlots];
                aB(sB + BB, sB + jB, nB, pB)
              } else aB(0, sB - iQ.c.length, nB, pB);
          else rB.creative ? nB < 10 ? yB() : nB < sB ? aB(0, 10, nB, pB) : aB(0, sB - iQ.c.length, nB, null !== jB.amount ? gz.e.maxItemStackSize : null) : nB < 10 ? yB() : aB(0, 10, nB, pB);
          else nB < sB - iQ.c.length || nB >= sB ? UB(QB, nB) : (aB(0, sB - iQ.c.length, QB, pB), Nz.e.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else IB.current = {
          idx: nB,
          name: jB.name,
          attributes: jB.attributes,
          amount: null !== jB.amount ? pB : 0
        }
      }(BB, QB) : BB.draggedInfoRef.current ? function(BB, jB, zB, QB) {
        const {
          draggedInfoRef: nB,
          specialItemRef: dB,
          moveAmtIntoSlot: IB,
          swapSlots: NB,
          removeItem: uB,
          removeDraggedInfoRef: UB
        } = BB, aB = BB.readInventory(), pB = nB.current.idx;
        if (zB && (jB === pB || (0, VQ.d)(nB.current, zB)) && nB.current.amount > 0 && (0, Uz.b)(zB) > 0 && (zB.amount < gz.e.maxItemStackSize || jB === pB)) QB ? zB.amount + nB.current.amount <= gz.e.maxItemStackSize || jB === pB ? IB(jB, nB.current.amount) : IB(jB, gz.e.maxItemStackSize - zB.amount) : IB(jB, 1);
        else if (nB.current.amount > 0 && !zB) IB(jB, QB ? nB.current.amount : 1);
        else if (QB || zB || 0 === nB.current.amount)
          if (aB.creative && !aB.chest && jB >= aB.player.length) {
            const BB = 0 === nB.current.amount ? 1 : nB.current.amount;
            uB(nB.current.idx, BB, !1) && UB()
          } else {
            var rB;
            const zB = (null === (rB = dB.current) || void 0 === rB ? void 0 : rB.idx) === jB;
            if (NB(jB, nB.current.idx)) {
              const QB = BB.readInventory(),
                IB = (0, Uz.i)(QB, pB),
                NB = !QB.chest && QB.creative && nB.current.idx >= QB.player.length;
              if (IB && nB.current.idx !== jB && !NB) {
                let BB = (0, Uz.b)(IB);
                zB && (BB -= dB.current.amount), nB.current = zB && 0 === BB ? null : {
                  idx: nB.current.idx,
                  name: IB.name,
                  attributes: IB.attributes,
                  amount: BB
                }
              } else UB()
            }
          }
        else IB(jB, 1)
      }(BB, zB, QB, nB) : function(BB, jB, zB, QB) {
        var nB;
        const {
          draggedInfoRef: dB,
          specialItemRef: IB
        } = BB;
        if (!zB) return;
        let NB = (0, Uz.b)(zB);
        const uB = (null === (nB = IB.current) || void 0 === nB ? void 0 : nB.idx) === jB;
        uB && (NB -= IB.current.amount);
        QB || (NB = Math.ceil(NB / 2));
        dB.current = uB && 0 === NB ? null : {
          idx: jB,
          name: zB.name,
          attributes: zB.attributes,
          amount: NB
        }
      }(BB, zB, QB, nB)
    }

    function XQ(BB, jB) {
      return !!jB && jB.name === BB.name
    }

    function ZQ() {
      return UB.gameBridge.latest("inventory")
    }

    function AQ(BB, jB, zB) {
      return UB.gameBridge.send("removeInventoryItem", {
        slot: BB,
        amount: jB,
        drop: zB
      })
    }

    function TQ(BB) {
      return (0, Uz.g)(BB, UB.gameBridge.latest("itemInfo"), UB.gameBridge.latest("stationItems").enchantable)
    }

    function PQ(BB) {
      let {
        show: jB,
        close: zB,
        canCraft: QB,
        variation: dB,
        inventoryItemsMoveable: IB,
        setCraftFlyAnims: NB
      } = BB;
      (0, qB.k)("itemInfo");
      const [uB, aB] = (0, nB.useState)(null), [pB, rB] = (0, nB.useState)(null), [sB, JB] = (0, nB.useState)(!1), mB = (0, nB.useRef)(null), yB = (0, nB.useRef)(null), kB = (0, nB.useRef)(null), GB = (0, nB.useRef)(null), [LB, gB] = (0, nB.useReducer)((BB => BB + 1), 0), tB = (0, nB.useCallback)((() => {
        jB && gB()
      }), [jB, gB]), SB = (0, nB.useCallback)((() => {
        yB.current = null, hB.current = null, tB()
      }), [tB]), MB = (0, nB.useCallback)(((BB, jB) => {
        NB((zB => zB.map((zB => "ingredient" === zB.kind ? zB : zB.zu === BB ? {
          ...zB,
          zu: jB,
          to: (0, Uz.c)(jB)
        } : zB.zu === jB ? {
          ...zB,
          zu: BB,
          to: (0, Uz.c)(BB)
        } : zB))))
      }), [NB]), EB = (0, nB.useCallback)(((BB, jB) => {
        const zB = AB.current;
        if (zB.x = BB, zB.y = jB, mB.current) !TB.current.isTouch || TB.current.itemBeingDragged && !hB.current ? (mB.current.style.transform = `translate(${zB.x}px, ${zB.y}px)`, JB(TB.current.isTouch && !hB.current)) : (mB.current.style.transform = "translate(0.5rem, 0.5rem)", JB(!0));
        else if (GB.current) {
          const zB = GB.current;
          let QB = BB + 10,
            nB = jB + 10;
          const dB = zB.offsetWidth,
            IB = zB.offsetHeight;
          QB + dB > window.innerWidth && (QB = BB - dB - 10), nB + IB > window.innerHeight && (nB = jB - IB - 10), QB < 0 && (QB = 0), nB < 0 && (nB = 0), GB.current.style.transform = `translate(${QB}px, ${nB}px)`
        }
      }), []), fB = (0, nB.useCallback)((BB => (jB, zB, QB) => {
        if (aB(jB && void 0 !== BB ? BB : null), jB) {
          if (void 0 === BB && !zB) return void(0, YQ.b)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== BB) {
            var nB;
            const jB = ZQ();
            let zB;
            if (zB = BB === pz.g ? kB.current ? (0, Uz.i)(jB, kB.current.idx) : null : (0, Uz.i)(jB, BB), !zB) return void rB(null);
            if ((null === (nB = kB.current) || void 0 === nB ? void 0 : nB.idx) === BB) {
              if (0 === (0, Uz.b)(zB) - kB.current.amount) return void rB(null)
            }
            rB(TQ(zB))
          } else rB({
            name: zB.name,
            desc: zB.desc,
            fontStyle: "normal"
          })
        } else rB(null);
        QB && setTimeout((() => {
          EB(QB.pageX, QB.pageY)
        }), 0)
      }), [EB]), oB = (0, nB.useCallback)(((BB, jB) => {
        const zB = UB.gameBridge.send("moveInventoryItem", {
          from: yB.current.idx,
          to: BB,
          amount: jB
        });
        return zB ? (yB.current.amount -= jB, yB.current.amount <= 0 && SB()) : console.error("moveInventoryItem failed"), zB
      }), [SB]), HB = (0, nB.useCallback)(((BB, jB) => {
        const zB = kB.current,
          QB = null === zB || void 0 === zB ? void 0 : zB.idx;
        zB && (zB.idx = function(BB, jB, zB) {
          return BB === jB ? zB : BB === zB ? jB : BB
        }(QB, BB, jB));
        const nB = UB.gameBridge.send("swapInventorySlots", {
          a: BB,
          b: jB
        });
        return nB ? MB(BB, jB) : zB && (zB.idx = QB), nB
      }), [MB]), DB = (0, nB.useCallback)(((BB, jB, zB, QB) => {
        const nB = UB.gameBridge.send("quickMoveInventoryItem", {
          slot: zB,
          start: BB,
          end: jB,
          amount: QB
        });
        null !== nB && MB(zB, nB)
      }), [MB]), FB = (0, nB.useCallback)(((BB, jB) => {
        var nB;
        ((BB, jB, zB) => {
          const QB = BB - (zB - iQ.c.length);
          return !(!jB || QB < 0 || QB >= iQ.c.length) && (0, iB.zb)(jB) !== iQ.c[QB]
        })(jB, null === (nB = yB.current) || void 0 === nB ? void 0 : nB.name, ZQ().player.length) || (hQ({
          e: BB,
          idx: jB,
          readInventory: ZQ,
          itemInfo: UB.gameBridge.latest("itemInfo"),
          draggedInfoRef: yB,
          specialItemRef: kB,
          moveAmtIntoSlot: oB,
          swapSlots: HB,
          moveIntoSlots: DB,
          removeItem: AQ,
          removeDraggedInfoRef: SB,
          close: zB,
          canCraft: QB,
          variation: dB
        }), tB())
      }), [QB, zB, oB, DB, SB, HB, dB, tB]), YB = (0, nB.useRef)(0), VB = (0, nB.useRef)(null), hB = (0, nB.useRef)(null), XB = (0, nB.useRef)(null), ZB = (0, nB.useRef)(new Set), AB = (0, nB.useRef)({
        x: 0,
        y: 0
      }), TB = (0, nB.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), PB = (0, nB.useCallback)((() => (XB.current = null, TB.current.itemBeingDragged = !1, clearTimeout(VB.current), !!hB.current && (hB.current = null, tB(), !0))), [tB]);
      (0, nB.useEffect)((() => {
        PB(), ZB.current.clear()
      }), [jB]);
      const WB = BB => void 0 !== BB && (ZB.current.has(BB) || null !== XB.current && BB !== XB.current),
        eB = BB => {
          TB.current.isTouch = (0, Uz.m)(BB)
        },
        lB = (0, nB.useCallback)((BB => jB => {
          const QB = (0, Uz.m)(jB);
          if (QB || EB(jB.pageX, jB.pageY), IB)
            if (WB(jB.pointerId)) void 0 !== jB.pointerId && ZB.current.add(jB.pointerId);
            else {
              if (eB(jB), QB) {
                YB.current = jB.timeStamp, TB.current.itemBeingDragged = !0, XB.current = jB.pointerId;
                const zB = (0, Uz.i)(ZQ(), BB);
                if (zB && zB.amount && zB.amount > 0) {
                  const zB = jB.pageX,
                    QB = jB.pageY,
                    nB = AB.current.x,
                    dB = AB.current.y;
                  clearTimeout(VB.current), VB.current = setTimeout((() => {
                    if (yB.current && yB.current.idx === BB && (Math.abs(zB - AB.current.x) < 20 && Math.abs(QB - AB.current.y) < 20 || nB === AB.current.x && dB === AB.current.y) && TB.current.itemBeingDragged) {
                      const BB = ZQ(),
                        zB = BB.creative && !BB.chest && yB.current.idx >= gz.e.numInvenSlots && null !== (0, Uz.i)(BB, yB.current.idx).amount ? gz.e.maxItemStackSize : yB.current.amount;
                      hB.current = {
                        initTouchX: jB.pageX,
                        initTouchY: jB.pageY,
                        maxAmount: zB
                      }, yB.current.amount = Math.ceil(yB.current.amount / 2), mB.current.style.transform = "translate(0.5rem, 0.5rem)", JB(!0), tB()
                    }
                  }), 500)
                }
              }
              FB(jB, BB)
            }
          else BB === pz.c && (0, Uz.l)(jB) && zB()
        }), [EB, FB, IB, zB, tB]),
        wB = (0, nB.useCallback)((BB => BB => {
          if (WB(BB.pointerId)) return;
          const jB = (0, Uz.m)(BB);
          if (eB(BB), !PB()) {
            if (jB && yB.current && BB.timeStamp - YB.current > 150) {
              const jB = document.elementFromPoint(BB.clientX, BB.clientY);
              if (null !== jB) {
                const zB = jB.getAttribute("data-inven-idx");
                null !== zB ? FB(BB, parseInt(zB)) : jB.classList.contains("InventoryBackgroundScreen") && FB(BB, -1)
              }
            }
            EB(BB.pageX, BB.pageY)
          }
        }), [EB, FB, PB]);
      (0, nB.useEffect)((() => {
        let BB;
        const zB = ["pointerup", "pointercancel"],
          QB = BB => {
            ZB.current.has(BB.pointerId) ? setTimeout((() => {
              ZB.current.delete(BB.pointerId)
            }), 0) : BB.pointerId === XB.current && setTimeout((() => {
              XB.current === BB.pointerId && PB()
            }), 0)
          };
        if (jB) {
          for (const BB of zB) document.addEventListener(BB, QB, !0);
          if (!TB.current.isTouch) {
            const BB = AB.current;
            EB(BB.x, BB.y)
          }
          BB = BB => {
            BB.preventDefault(), WB(BB.pointerId) || (eB(BB), EB(BB.pageX, BB.pageY), hB.current && BB.pointerId === XB.current && (BB => {
              if (!yB.current) return hB.current = null, void tB();
              const {
                initTouchX: jB,
                maxAmount: zB
              } = hB.current, QB = (BB.pageX - jB) * hB.current.maxAmount / 160, nB = Math.ceil(zB / 2) + Math.ceil(QB);
              yB.current.amount = Math.min(zB, Math.max(1, nB)), tB()
            })(BB))
          }, document.addEventListener("pointermove", BB, !0)
        }
        return () => {
          document.removeEventListener("pointermove", BB, !0);
          for (const BB of zB) document.removeEventListener(BB, QB, !0)
        }
      }));
      const xB = (0, nB.useCallback)((() => {
          if (yB.current) {
            const BB = (0, Uz.i)(ZQ(), yB.current.idx);
            (!XQ(yB.current, BB) || BB.amount < yB.current.amount) && SB()
          }
        }), [SB]),
        KB = (0, nB.useCallback)((() => {
          const BB = yB.current;
          if (BB) {
            const jB = (0, Uz.i)(ZQ(), BB.idx);
            XQ(BB, jB) && (BB.attributes = jB.attributes)
          }
        }), []);
      return {
        draggedDomRef: mB,
        draggedInfoRef: yB,
        specialItemRef: kB,
        hoverInfoDomRef: GB,
        longHoldSplitInfoRef: hB,
        currHoveredIdx: uB,
        currHoveredDisplayInfo: pB,
        displayDraggedItemName: sB,
        forceRerenderIfVisible: tB,
        removeDraggedInfoRef: SB,
        checkDraggedItemConsistencyWithInven: xB,
        refreshDraggedAttributes: KB,
        swapSlots: HB,
        getPointerDownForIdx: lB,
        getPointerUpForIdx: wB,
        getSetHovering: fB,
        setCurrHoveredDisplayInfo: rB,
        moveFollowerTo: EB
      }
    }
    class WQ {
      constructor(BB) {
        this.snapshot = [], this.newSlots = new Set, this.update(BB, !1)
      }
      update(BB, jB) {
        const zB = BB.map((BB => {
          var jB;
          return BB ? {
            name: BB.name,
            amount: null !== (jB = BB.amount) && void 0 !== jB ? jB : 1
          } : null
        }));
        zB.forEach(((BB, zB) => {
          const QB = this.snapshot[zB],
            nB = (null === BB || void 0 === BB ? void 0 : BB.name) !== (null === QB || void 0 === QB ? void 0 : QB.name);
          (!BB || nB || BB.amount < QB.amount) && this.newSlots.delete(zB), jB && BB && (nB || BB.amount > QB.amount) && this.newSlots.add(zB)
        })), this.snapshot = zB
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(BB) {
        return this.newSlots.has(BB)
      }
    }
    const eQ = (BB, jB, zB) => ({
      button: jB,
      shiftKey: zB,
      pageX: BB.clientX,
      pageY: BB.clientY,
      clientX: BB.clientX,
      clientY: BB.clientY,
      pointerType: "mouse"
    });

    function lQ(BB) {
      const [jB, zB] = (0, nB.useState)(BB);
      return BB && !jB && zB(!0), (0, nB.useEffect)((() => {
        if (jB) return;
        let BB = !0;
        const QB = () => {
            BB && (BB = !1, zB(!0))
          },
          nB = "function" === typeof window.requestIdleCallback,
          dB = nB ? window.requestIdleCallback(QB, {
            timeout: 2e3
          }) : void 0,
          IB = setTimeout(QB, nB ? 2e3 : 1e3);
        return () => {
          BB = !1, clearTimeout(IB), void 0 !== dB && window.cancelIdleCallback(dB)
        }
      }), [jB]), jB
    }
    const wQ = (0, nB.memo)((function(BB) {
      var jB;
      let {
        show: zB,
        onOpen: QB,
        onClose: dB,
        variation: NB
      } = BB;
      const pB = (0, nB.useRef)(null),
        rB = (0, nB.useRef)(null),
        sB = function(BB) {
          const [jB, zB] = (0, nB.useState)(!0), [QB, dB] = (0, nB.useState)(!1), IB = (0, nB.useRef)(null), NB = (0, nB.useRef)(null), UB = (0, uB.i)("_shield"), aB = (0, nB.useRef)(null), pB = (0, uB.i)("_health"), rB = (0, nB.useRef)(null);

          function sB(BB) {
            const jB = Date.now() + BB;
            jB < NB.current || (zB(!1), clearTimeout(IB.current), NB.current = jB, IB.current = setTimeout((() => {
              zB(!0)
            }), BB))
          }
          return (0, nB.useEffect)((() => {
            sB(sz);
            const BB = JB.n.subscribe("requestingPlayVideoAd", (() => {
              sB(sz)
            }));
            return () => {
              clearTimeout(IB.current), JB.n.unsubscribe(BB)
            }
          }), []), (0, nB.useEffect)((() => {
            (aB.current > UB || rB.current > pB) && sB(6e4), aB.current = UB, rB.current = pB
          }), [UB, pB]), (0, nB.useEffect)((() => {
            let jB = null;
            return BB ? jB = setTimeout((() => {
              dB(!0)
            }), 250) : dB(!1), () => {
              clearTimeout(jB)
            }
          }), [BB]), jB && QB
        }(zB);
      (0, EB.h)(zz.e, null);
      const mB = (0, zz.l)(),
        yB = mB.some((BB => BB.panel)),
        {
          userContext: kB
        } = (0, SB.d)(),
        GB = (0, qB.h)("inventory", (BB => {
          const jB = BB.chest;
          return null !== jB && (LQ(jB.numSlots) || MQ(jB, kB.whamm))
        })),
        LB = lQ(zB),
        gB = lQ(zB),
        [tB, MB] = (0, nB.useState)([]),
        fB = (0, nB.useCallback)((BB => {
          MB((jB => jB.filter((jB => jB.id !== BB))))
        }), []),
        oB = (0, nB.useRef)(null),
        HB = (0, nB.useRef)(0),
        DB = (0, nB.useCallback)((() => {
          oB.current && (HB.current = oB.current.scrollTop), dB()
        }), [dB]),
        FB = (0, uB.i)("inventoryItemsMoveable"),
        YB = (0, uB.i)("canCraft"),
        {
          clientEscMenuOptions: hB
        } = (0, TB.m)(["clientEscMenuOptions"]),
        XB = (0, nB.useRef)(null);
      XB.current || (XB.current = new WQ(UB.gameBridge.latest("inventory").player));
      const ZB = XB.current,
        {
          draggedDomRef: AB,
          draggedInfoRef: PB,
          specialItemRef: WB,
          hoverInfoDomRef: eB,
          longHoldSplitInfoRef: lB,
          currHoveredIdx: wB,
          currHoveredDisplayInfo: xB,
          displayDraggedItemName: KB,
          forceRerenderIfVisible: CB,
          removeDraggedInfoRef: cB,
          checkDraggedItemConsistencyWithInven: bB,
          refreshDraggedAttributes: vB,
          swapSlots: RB,
          getPointerDownForIdx: OB,
          getPointerUpForIdx: Bj,
          getSetHovering: jj,
          setCurrHoveredDisplayInfo: zj,
          moveFollowerTo: Qj
        } = PQ({
          show: zB,
          close: DB,
          canCraft: YB,
          variation: NB,
          inventoryItemsMoveable: FB,
          setCraftFlyAnims: MB
        });
      (0, nB.useEffect)((() => {
        const BB = !zB && null !== UB.gameBridge.latest("inventory").chest;
        if (BB && UB.gameBridge.send("closeChest", null), zB || (ZB.clearMarks(), jj(null)(!1)), BB) {
          Nz.e.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [zB]), (0, qB.d)("chestToggled", (BB => {
        if (BB ? QB() : zB && DB(), BB) {
          Nz.e.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const nj = (0, Hj.o)();
      (0, qB.d)("inventory", (BB => {
        let {
          player: jB
        } = BB;
        var QB, nB, dB;
        (ZB.update(jB, !zB && nj.shown), WB.current) && (WB.current = (nB = WB.current, dB = null !== (QB = jB[WB.current.idx]) && void 0 !== QB ? QB : null, XQ(nB, dB) ? (nB.attributes = dB.attributes, null !== dB.amount && nB.amount > dB.amount && (nB.amount = dB.amount), nB) : null));
        vB(), null !== wB && jj(wB)(!0), CB()
      })), (0, nB.useEffect)((() => (UB.gameBridge.send("setInventoryOpen", zB), () => {
        UB.gameBridge.send("setInventoryOpen", !1)
      })), [zB]);
      const dj = (BB, jB) => {
        if (BB === pz.g) return void(BB => {
          const jB = WB.current;
          if (!jB || null === (0, Uz.i)(UB.gameBridge.latest("inventory"), jB.idx)) return;
          const zB = BB ? Math.max(jB.amount, 1) : 1,
            QB = jB.amount - zB;
          if (!UB.gameBridge.send("removeInventoryItem", {
              slot: jB.idx,
              amount: zB,
              drop: !0
            })) return;
          const nB = WB.current;
          nB && (nB.amount = Math.min(nB.amount, QB), nB.amount <= 0 && (WB.current = null)), CB()
        })(jB);
        const zB = null === BB ? null : (0, Uz.i)(UB.gameBridge.latest("inventory"), BB);
        if (null !== zB) {
          var QB, nB, dB;
          const IB = jB && null !== (QB = zB.amount) && void 0 !== QB ? QB : 1;
          UB.gameBridge.send("removeInventoryItem", {
            slot: BB,
            amount: IB,
            drop: !0
          }), BB === (null === (nB = PB.current) || void 0 === nB ? void 0 : nB.idx) && (PB.current.amount -= IB, PB.current.amount <= 0 && cB(), CB()), BB === (null === (dB = WB.current) || void 0 === dB ? void 0 : dB.idx) && (WB.current = null, CB())
        }
      };
      (0, qB.d)("inventoryDropRequested", (BB => {
        zB && wB !== pz.g && dj(wB, BB)
      }));
      const Ij = (BB, jB) => {
        let zB = jB;
        if (jB === pz.g) {
          if (!WB.current) return;
          zB = WB.current.idx
        }
        const QB = RB(BB, zB);
        if (QB && PB.current && (PB.current.idx === zB ? PB.current.idx = BB : PB.current.idx === BB && (PB.current.idx = zB)), QB && jB === pz.g) {
          const BB = (0, Uz.i)(UB.gameBridge.latest("inventory"), zB);
          WB.current = BB ? {
            idx: zB,
            name: BB.name,
            attributes: BB.attributes,
            amount: (0, Uz.b)(BB)
          } : null
        }
        CB()
      };
      (0, qB.d)("numberKeyPressed", (BB => {
        null !== wB && zB && Ij(BB - 1, wB)
      })), (0, nB.useEffect)((() => {
        zB || (WB.current = null, cB(), zj(null))
      }), [zB, cB, zj, WB]);
      const Nj = WB.current;
      (0, nB.useEffect)((() => {
        wB === pz.g && jj(pz.g)(!0)
      }), [Nj, wB, jj]);
      const uj = () => {
        bB(), vB(), CB()
      };
      (0, qB.d)("chestRefreshed", uj), (0, qB.d)("inventorySynced", uj);
      const [Uj, aj] = (0, nB.useState)(new Map), pj = null !== (jB = Uj.get(NB)) && void 0 !== jB ? jB : null, rj = (BB, jB) => {
        aj((zB => {
          const QB = zB.get(BB);
          return QB && QB.name === jB.name && QB.qa === jB.qa ? zB : new Map(zB).set(BB, jB)
        }))
      };
      (0, EB.f)("craftingRecipesEdited", (() => {
        CB()
      })), (0, EB.f)(wz.e, (BB => {
        let {
          variation: jB,
          itemName: zB
        } = BB;
        rj(jB, {
          name: zB,
          qa: 0
        })
      }));
      const [sj, Jj] = (0, nB.useState)(null), [mj, yj] = (0, nB.useState)(null);
      (0, qB.d)("enchantingTableOpened", (BB => {
        let {
          position: jB,
          blockName: zB
        } = BB;
        Jj(jB), yj(zB)
      }));
      const [kj, Gj] = (0, nB.useState)(""), [Lj, gj] = (0, nB.useState)(null);
      (0, nB.useEffect)((() => {
        zB && oB.current && (oB.current.scrollTop = HB.current)
      }), [zB]);
      return (BB => {
        const jB = (0, nB.useRef)(BB);
        jB.current = BB, (0, nB.useEffect)((() => {
          if (!BB.show) return;
          const zB = (BB, zB, QB, nB) => {
              const {
                getPointerDownForIdx: dB,
                getPointerUpForIdx: IB
              } = jB.current;
              dB(BB)(eQ(zB, QB, nB)), IB(BB)(eQ(zB, QB, nB))
            },
            QB = {
              primary: (BB, jB) => {
                zB(BB, jB, 0, !1)
              },
              secondary: (BB, jB) => {
                zB(BB, jB, 2, !1)
              },
              quickMove: (BB, jB) => {
                zB(BB, jB, 0, !0)
              },
              dropHeld: (BB, zB) => {
                jB.current.getPointerDownForIdx(pz.c)(eQ(zB, BB ? 0 : 2, !1))
              },
              dropSlot: (BB, zB) => {
                jB.current.dropFromIdx(BB, zB)
              },
              swapWithHotbar: (BB, zB) => {
                jB.current.swapWithHotbar(BB, zB)
              },
              cancel: () => {
                jB.current.removeDraggedInfoRef()
              },
              isHolding: () => !!jB.current.draggedInfoRef.current,
              hasItemAt: BB => {
                const {
                  draggedInfoRef: zB,
                  specialItemRef: QB
                } = jB.current;
                if (BB === pz.g) return !!QB.current;
                const nB = (0, Uz.i)(UB.gameBridge.latest("inventory"), BB);
                return !!nB && (0, qz.g)(BB, (0, Uz.b)(nB), [zB.current, QB.current]).shown
              },
              hover: (BB, zB) => {
                const {
                  moveFollowerTo: QB,
                  getSetHovering: nB
                } = jB.current;
                QB(zB.clientX, zB.clientY), nB(null !== BB && void 0 !== BB ? BB : void 0)(null !== BB, void 0, {
                  pageX: zB.clientX,
                  pageY: zB.clientY
                })
              },
              moveTo: BB => {
                jB.current.moveFollowerTo(BB.clientX, BB.clientY)
              },
              close: () => {
                jB.current.close()
              }
            };
          return (0, Qz.m)(QB)
        }), [BB.show])
      })({
        show: zB,
        close: DB,
        draggedInfoRef: PB,
        specialItemRef: WB,
        getPointerDownForIdx: OB,
        getPointerUpForIdx: Bj,
        getSetHovering: jj,
        moveFollowerTo: Qj,
        removeDraggedInfoRef: cB,
        dropFromIdx: dj,
        swapWithHotbar: Ij
      }), (0, nB.useEffect)((() => {
        JB.n.Ly("inventoryDraggedItemUpdated", {
          draggedInfo: PB.current,
          specialItemInfo: WB.current,
          setHovered: jj,
          pointerDown: OB,
          pointerUp: Bj,
          variation: YB ? NB : void 0,
          craftFlyAnims: tB
        })
      })), (0, aB.jsxs)(VB.e, {
        show: zB,
        style: {
          touchAction: zB ? "none" : void 0
        },
        children: [PB.current && (0, aB.jsx)(mz, {
          draggedInfo: PB.current,
          toAddRef: AB
        }), PB.current && KB && (0, aB.jsx)(yz, {
          className: "DraggedInvenItemName",
          displayInfo: TQ(PB.current),
          domRef: null
        }), !PB.current && xB && (0, aB.jsx)(yz, {
          displayInfo: xB,
          domRef: eB
        }), lB.current && PB.current && (0, aB.jsx)(kz, {
          info: lB.current,
          draggedInfo: PB.current
        }), tB.map((BB => (0, aB.jsx)(az.d, {
          anim: BB,
          onComplete: fB
        }, BB.id))), (0, aB.jsx)(IB.d, {
          show: zB,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: DB,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: OB(pz.c),
          pointerUp: Bj(pz.c),
          doGameplayStartStopOnShow: !0
        }), LB && (0, aB.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, aB.jsx)("div", {
            ref: pB,
            className: "InventoryAdOuter",
            children: (0, aB.jsx)(uz.e, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: pB
              },
              verticalAlign: "start",
              showing: zB && sB,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, aB.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, aB.jsxs)("div", {
              className: Lz()("Inventory", {
                WithGameButtons: mB.length > 0,
                WithPanelButtons: yB,
                WideChestOpen: GB
              }),
              children: [(0, aB.jsx)("div", {
                className: "InventoryFiller"
              }), (0, aB.jsx)(Iz, {
                show: zB,
                buttons: mB
              }), (0, aB.jsxs)("div", {
                className: "InvenBody",
                children: [(0, aB.jsx)(EQ, {
                  variation: NB,
                  canCraft: YB,
                  show: zB,
                  creativeMounted: gB,
                  specialItemRef: WB,
                  draggedInfo: PB.current,
                  getSetHovering: jj,
                  getPointerDownForIdx: OB,
                  getPointerUpForIdx: Bj,
                  enchantingTablePosition: sj,
                  enchantingTableBlockName: mj,
                  selectedCraftable: pj,
                  dispatchSelectedCraftable: BB => {
                    rj(NB, BB)
                  },
                  creativeScrollDiv: oB,
                  creativeSearchVal: kj,
                  setCreativeSearchVal: Gj,
                  creativeCategory: Lj,
                  setCreativeCategory: gj,
                  onCraft: function(BB, jB) {
                    let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (bB(), (BB || zB.length > 0) && MB((jB => {
                        const QB = [...jB],
                          nB = jB.filter((BB => "ingredient" === BB.kind)).length;
                        for (const BB of zB.slice(0, Math.max(0, 24 - nB))) QB.push({
                          id: (0, az.h)(),
                          ...BB,
                          to: BB.to
                        });
                        return BB && QB.push({
                          id: (0, az.h)(),
                          ...BB,
                          to: (0, Uz.c)(BB.zu)
                        }), QB
                      })), null !== jB) {
                      var QB;
                      const BB = UB.gameBridge.latest("inventory");
                      (0, iB.zb)(null === (QB = (0, Uz.i)(BB, jB)) || void 0 === QB ? void 0 : QB.name) ? OB(jB)({
                        button: 0,
                        shiftKey: !0
                      }): RB(jB, BB.selectedSlot)
                    }
                  }
                }), (0, aB.jsx)(FQ, {
                  draggedInfo: PB.current,
                  specialItemInfo: WB.current,
                  craftFlyAnims: tB,
                  getSetHovering: jj,
                  getPointerDownForIdx: OB,
                  getPointerUpForIdx: Bj,
                  variation: NB,
                  canCraft: YB,
                  isNewSlot: BB => hB.showNewItemIndicator && ZB.isNew(BB)
                })]
              })]
            }), (0, aB.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, aB.jsx)("div", {
                ref: rB,
                className: "InventoryAd",
                children: (0, aB.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var xQ = zB(1456),
      KQ = zB(145);
    const CQ = (0, nB.memo)((function(BB) {
      let {
        show: jB,
        onOpen: zB,
        onClose: QB
      } = BB;
      const dB = (0, nB.useRef)(0),
        NB = () => (0, xQ.h)() && !(0, xQ.l)() && dB.current <= 2;
      jB = NB() && jB;
      const uB = () => {
        dB.current++, QB()
      };
      (0, EB.f)("ctrlCrouchWithoutFullscreen", (() => {
        NB() && zB()
      })), (0, EB.f)("displaymodeFullscreenChange", (BB => {
        jB && BB && uB()
      }));
      const UB = "crazygames" === KQ.siteUsed;
      return (0, aB.jsx)(IB.d, {
        close: uB,
        escDoesExit: !0,
        show: jB,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, aB.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, aB.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), UB && (0, aB.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, aB.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, aB.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!UB && (0, aB.jsx)(sB.m, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, xQ.o)(), uB()
              },
              children: (0, aB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, aB.jsx)(sB.G, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                uB()
              },
              children: (0, aB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var cQ = zB(3704),
      bQ = zB(3736),
      vQ = zB(1381),
      RQ = zB(3685),
      OQ = zB(1385),
      Bn = zB(36633),
      jn = zB(3697),
      zn = zB(3700);

    function Qn(BB, jB) {
      return (0, Bn.f)(!0, BB, jB) ? () => {
        !async function(BB) {
          await RQ.b.refresh();
          const {
            data: jB,
            failed: zB
          } = RQ.b.getState();
          if (null === jB || zB) return;
          const QB = RQ.b.getExclusion(BB);
          if ("blocked" === QB) return;
          const nB = null === QB;
          vQ.NotificationProvider.showCustomPopup({
            body: jB => {
              const zB = zB => ({
                text: jn.f[zB].text,
                onClick: () => {
                  jB(), (0, zn.g)(zB, BB, null)
                }
              });
              return (0, aB.jsx)(OQ.i, {
                title: nB ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: BB
                  }
                },
                secondary: nB ? zB("ignore") : void 0,
                confirm: zB("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: jB
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(BB)
      } : null
    }
    zB(3718);
    const nn = (0, nB.memo)((function(BB) {
      let {
        show: jB,
        onOpen: zB,
        onClose: QB
      } = BB;
      const [dB, NB] = (0, nB.useState)(""), [uB, pB] = (0, nB.useState)(""), [rB, sB] = (0, nB.useState)(null), [JB, mB] = (0, nB.useState)(null), yB = (0, qB.k)("hiddenPlayerNames"), kB = {
        kind: "worldCodeLine",
        onSubmit: (BB, jB) => {
          QB(), UB.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: JB,
            sN: BB,
            details: jB
          })
        }
      }, GB = {
        kind: "player",
        shownPlayerName: (0, jj.h)(dB, yB),
        onSubmit: (BB, jB) => {
          QB(), (0, bQ.e)({
            playerId: uB,
            playerName: dB,
            chatMsgId: JB,
            policyId: BB,
            details: jB,
            onAccepted: Qn(dB, yB)
          })
        }
      };
      return (0, EB.f)("OpenReportMenu", (BB => {
        let {
          playerEId: jB,
          playerName: QB,
          ha: nB,
          serverChatMsgId: dB
        } = BB;
        pB(jB), NB(QB), sB(nB), mB(dB), zB()
      })), (0, aB.jsx)(IB.d, {
        show: jB,
        close: QB,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, aB.jsx)("div", {
          className: "ReportPanel",
          children: jB && (0, aB.jsx)(cQ.d, {
            reported: null === uB ? kB : GB,
            chatMessage: rB,
            inGame: !0,
            onCancel: QB
          })
        })
      })
    }));
    var dn = zB(36926),
      In = zB(3709);
    const Nn = {
        playerGone: "report:reportKeyPlayerGone",
        rateLimited: "report:reportKeyRateLimited",
        timedOut: "report:reportKeyTimedOut"
      },
      un = (0, nB.memo)((function(BB) {
        var jB, zB;
        let {
          show: QB,
          onOpen: dB,
          onClose: NB
        } = BB;
        const {
          t: uB
        } = (0, cB.D)(), [pB, rB] = (0, nB.useState)(null), [JB, mB] = (0, nB.useState)(0);
        (0, EB.f)("OpenDiscordReportBox", (BB => {
          UB.gameBridge.send("requestDiscordReportKey", BB), rB(null), mB(0), dB()
        })), (0, EB.f)("setDiscordReportKey", rB);
        const yB = QB && null === pB;
        (0, nB.useEffect)((() => {
          if (!yB) return;
          const BB = setTimeout((() => {
            console.warn("No answer to a Discord report key request within 10000 ms"), rB({
              UI: null,
              aI: "timedOut"
            })
          }), 1e4);
          return () => {
            clearTimeout(BB)
          }
        }), [yB]);
        const kB = null !== (jB = null === pB || void 0 === pB ? void 0 : pB.UI) && void 0 !== jB ? jB : null,
          GB = null !== (zB = null === pB || void 0 === pB ? void 0 : pB.aI) && void 0 !== zB ? zB : null;
        return (0, aB.jsx)(IB.d, {
          show: QB,
          close: NB,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          className: "ReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, aB.jsx)("div", {
            className: "ReportPanel",
            children: (0, aB.jsxs)(OQ.i, {
              className: "ReportKeyBox",
              title: "report:discordReportTitle",
              subtitle: null === GB ? "report:discordReportDescription" : void 0,
              confirm: null === GB ? {
                text: "report:openDiscord",
                onClick: () => {
                  window.open(dn.c, "_blank", "noreferrer")
                },
                padMouseOnly: !0
              } : void 0,
              cancel: {
                text: null === GB ? "general:cancel" : "general:ok",
                onClick: NB
              },
              padStartsOn: "cancel",
              children: [null !== GB && (0, aB.jsx)(In.e, {
                children: uB(Nn[GB])
              }), null === GB && (0, aB.jsxs)("div", {
                className: "ReportKeyRow",
                children: [(0, aB.jsx)("div", {
                  className: "ReportKeyInner",
                  children: null !== kB && void 0 !== kB ? kB : uB("report:loadingReportKey")
                }), (0, aB.jsx)(sB.f, {
                  className: "ReportKeyCopyButton",
                  onClick: () => {
                    navigator.clipboard.writeText(kB).catch((BB => {
                      console.error("Failed to copy report key:", BB)
                    })), mB(Date.now())
                  },
                  disabled: Date.now() - JB < 1e3 || !kB,
                  children: Date.now() - JB < 1e3 ? uB("general:copied") : uB("general:copy")
                })]
              })]
            })
          })
        })
      }));
    var Un = zB(1316);
    const an = {
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
      pn = (0, nB.memo)((function(BB) {
        let {
          show: jB,
          onOpen: zB,
          onClose: QB
        } = BB;
        const [dB, NB] = (0, nB.useState)(null), uB = (0, nB.useRef)(0), pB = (0, nB.useRef)(null), {
          t: rB
        } = (0, cB.D)();
        (0, EB.f)("EditCustomLobbyBlock", (BB => {
          let {
            pos: jB
          } = BB;
          NB(jB), null !== jB && zB(), pB.current.scrollTo(0, uB.current)
        }));
        const sB = BB => {
          UB.gameBridge.send("setCustomLobbyBlock", {
            pos: dB,
            blockName: BB
          }), QB()
        };
        return (0, aB.jsx)(IB.d, {
          className: "CustomLobbyBlockEditorOuter",
          close: QB,
          escDoesExit: !0,
          show: jB,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, aB.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: pB,
            onScroll: () => {
              uB.current = pB.current.scrollTop
            },
            children: (0, aB.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(an).map((BB => {
                let [jB, zB] = BB;
                return (0, aB.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, aB.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: rB(jB)
                  }), (0, aB.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(zB).map((BB => {
                      let [jB, {
                        tooltip: zB,
                        blocks: QB
                      }] = BB;
                      return (0, aB.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, aB.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [rB(jB), (0, aB.jsx)(KB.e, {
                            hoverInfo: rB(zB),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, aB.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: QB.map((BB => (0, aB.jsx)(rn, {
                            blockName: BB,
                            selectBlock: sB
                          }, BB)))
                        })]
                      }, jB)
                    }))
                  })]
                }, jB)
              }))
            })
          })
        })
      })),
      rn = (0, nB.memo)((function(BB) {
        var jB;
        let {
          blockName: zB,
          selectBlock: QB
        } = BB;
        const nB = (0, IQ.c)(zB),
          dB = null !== (jB = void 0 === nB ? void 0 : (0, dQ.displayNameOf)(nB)) && void 0 !== jB ? jB : zB,
          IB = void 0 === nB ? void 0 : (0, dQ.descriptionOf)(nB);
        return (0, aB.jsx)(KB.g, {
          tooltipInner: (0, aB.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, aB.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, aB.jsx)(MB.e, {
                text: dB
              })
            }), IB && (0, aB.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, aB.jsx)(MB.e, {
                text: IB
              })
            })]
          }),
          children: (0, aB.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => QB(zB),
            children: (0, aB.jsx)(dz.c, {
              itemName: zB,
              amount: 1
            })
          })
        }, zB)
      }));
    var sn = zB(3116),
      Jn = zB(4321),
      mn = zB(34283);

    function yn() {
      const BB = (0, qB.k)("itemInfo");
      return (0, nB.useMemo)((() => function(BB) {
        return {
          getDefaultItemStat(jB, zB) {
            var QB;
            const nB = BB[jB];
            return "description" === zB ? null === nB || void 0 === nB ? void 0 : nB.description : null !== (QB = null === nB || void 0 === nB ? void 0 : nB.displayName) && void 0 !== QB ? QB : jB
          }
        }
      }(BB)), [BB])
    }
    const kn = (0, nB.memo)((function(BB) {
        var jB, zB, QB, dB, NB, uB, UB, pB, rB, sB, JB, mB, kB, GB, LB, gB, tB, SB, MB, iB, qB, fB, oB;
        let {
          togglePointerLock: HB,
          show: DB,
          onOpen: FB,
          onClose: YB
        } = BB;
        const {
          t: VB
        } = (0, cB.D)(), hB = yn(), XB = (0, nB.useRef)(null), ZB = (0, nB.useRef)(Jn.b.MobHungerLevel.Hungry), AB = (0, nB.useRef)(null), TB = (0, sn.d)(), PB = (0, nB.useRef)(null), WB = (0, nB.useRef)(null), eB = XB.current;
        (0, nB.useEffect)((() => {
          if (!DB) return;
          const BB = mn.i.openPet(PB.current);
          return WB.current = BB, () => {
            BB.close(), WB.current = null
          }
        }), [DB]), (0, nB.useEffect)((() => {
          DB && eB && WB.current.show(function(BB) {
            var jB;
            let {
              mobType: zB,
              mobSettings: QB
            } = BB;
            return {
              mobType: zB,
              variation: null !== (jB = QB.variation) && void 0 !== jB ? jB : "default",
              metaInfo: QB.metaInfo,
              tamed: !(0, GQ.I)(QB.ownerDbId)
            }
          }(eB))
        }), [DB, eB]), (0, nB.useEffect)((() => {
          const BB = () => {
            var BB;
            const jB = Jn.b.getMobHungerLevel(null === (BB = XB.current) || void 0 === BB ? void 0 : BB.mobSettings.petInfo.lastFedAt);
            if (jB !== ZB.current && (ZB.current = jB, TB()), AB.current) {
              var zB;
              const BB = Date.now(),
                jB = Jn.b.getNextStateAt(null === (zB = XB.current) || void 0 === zB ? void 0 : zB.mobSettings.petInfo.lastFedAt);
              let QB = Math.floor((jB - BB) / 1e3),
                nB = "";
              if (QB > 3600) {
                nB += Math.floor(QB / 60 / 60).toString().padStart(2, "0"), nB += ":", QB %= 3600
              }
              const dB = QB % 60;
              nB += Math.floor(QB / 60).toString().padStart(2, "0"), nB += ":", nB += dB.toString().padStart(2, "0"), AB.current.textContent = nB
            }
          };
          BB();
          const jB = setInterval(BB, 250);
          return () => {
            clearInterval(jB)
          }
        }), [eB, TB]), (0, EB.f)("showPetUi", (BB => {
          let {
            mobType: jB,
            mobSettings: zB
          } = BB;
          XB.current = {
            mobType: jB,
            mobSettings: zB
          }, DB || FB()
        }));
        const lB = null === (jB = XB.current) || void 0 === jB ? void 0 : jB.mobSettings.health,
          wB = null === (zB = XB.current) || void 0 === zB ? void 0 : zB.mobSettings.maxHealth,
          xB = Jn.b.getFriendshipLevelInfo(null !== (QB = null === (dB = XB.current) || void 0 === dB ? void 0 : dB.mobSettings.petInfo.friendshipPoints) && void 0 !== QB ? QB : 0);
        return (0, aB.jsx)(IB.d, {
          className: "PetUIOuter",
          close: YB,
          escDoesExit: !0,
          show: DB,
          togglePointerLock: HB,
          forcePointerUnlock: DB,
          globallyUniqueKey: "PetUI",
          children: (0, aB.jsx)("div", {
            className: "PetUI",
            children: (0, aB.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, aB.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, aB.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (NB = null === (uB = XB.current) || void 0 === uB ? void 0 : uB.mobSettings.name) && void 0 !== NB ? NB : "Your Pet"
                }), (0, aB.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: PB
                })]
              }), (0, aB.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, GQ.I)(null === (UB = XB.current) || void 0 === UB ? void 0 : UB.mobSettings.petInfo.friendshipPoints) && (0, aB.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, aB.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: VB("mobAiPlugin:friendshipTitle")
                  }), (0, aB.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: Jn.b.getIconsFromFriendshipPoints(null !== (pB = XB.current.mobSettings.petInfo.friendshipPoints) && void 0 !== pB ? pB : 0).map(((BB, jB) => (0, aB.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, jB)))
                  }), (0, aB.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, aB.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, aB.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${xB.totalPointsForNextLevel>0?Math.max(xB.pointsIntoCurrentLevel/xB.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, aB.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: xB.totalPointsForNextLevel > 0 ? ` ${Math.ceil(xB.pointsIntoCurrentLevel)}/${Math.ceil(xB.totalPointsForNextLevel)}` : Math.ceil(xB.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, aB.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, aB.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: VB("mobAiPlugin:hungerTitle")
                  }), (0, aB.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: Jn.b.hungerLevelIcons[ZB.current].map(((BB, jB) => (0, aB.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: BB,
                        amount: 1
                      })
                    }, jB)))
                  }), (0, aB.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [VB(Jn.b.hungerLevelTranslations[ZB.current].translationKey), ZB.current !== Jn.b.MobHungerLevel.Starving && !(0, GQ.I)(null === (rB = XB.current) || void 0 === rB ? void 0 : rB.mobSettings.petInfo.lastFedAt) && (0, aB.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [VB("mobAiPlugin:nextFeedIn", {
                        state: VB(Jn.b.hungerLevelTranslations[ZB.current + 1].translationKey)
                      }), ":", " ", (0, aB.jsx)("span", {
                        ref: AB
                      })]
                    })]
                  })]
                }), (0, aB.jsx)(KB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, aB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: VB("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, aB.jsxs)("div", {
                    className: Lz()("PetUIQuickStatsItem", {
                      Disabled: (0, GQ.I)(lB) || (0, GQ.I)(wB)
                    }),
                    children: [(0, aB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, aB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, GQ.I)(lB) || (0, GQ.I)(wB) ? "" : (0, aB.jsxs)(aB.Fragment, {
                        children: [Math.ceil(lB), (0, aB.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(wB)]
                        })]
                      })
                    })]
                  })
                }), (0, aB.jsx)(KB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, aB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: VB("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, aB.jsxs)("div", {
                    className: Lz()("PetUIQuickStatsItem", {
                      Disabled: (0, GQ.I)(null === (sB = XB.current) || void 0 === sB ? void 0 : sB.mobSettings.attackDamage) || XB.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, aB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, aB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (JB = XB.current) || void 0 === JB ? void 0 : JB.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, aB.jsx)(KB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, aB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: VB("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, aB.jsxs)("div", {
                    className: Lz()("PetUIQuickStatsItem", {
                      Disabled: (0, GQ.I)(null === (mB = XB.current) || void 0 === mB ? void 0 : mB.mobSettings.secondaryAttackDamage) || XB.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, aB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, aB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (kB = XB.current) || void 0 === kB ? void 0 : kB.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, aB.jsx)(KB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, aB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: VB("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, aB.jsxs)("div", {
                    className: Lz()("PetUIQuickStatsItem", {
                      Disabled: (0, GQ.I)(null === (GB = XB.current) || void 0 === GB ? void 0 : GB.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, aB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, aB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (LB = null === (gB = XB.current) || void 0 === gB || null === (tB = gB.mobSettings.baseRunningSpeed) || void 0 === tB ? void 0 : tB.toFixed(2)) && void 0 !== LB ? LB : ""
                    })]
                  })
                }), (0, aB.jsx)(KB.g, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, aB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: VB("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, aB.jsxs)("div", {
                    className: Lz()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (SB = XB.current) || void 0 === SB ? void 0 : SB.mobSettings.metaInfo)
                    }),
                    children: [(0, aB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, aB.jsx)(dz.c, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, aB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (MB = XB.current) || void 0 === MB ? void 0 : MB.mobSettings.metaInfo) ? (0, aB.jsx)(yB.c, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, GQ.I)(null === (iB = XB.current) || void 0 === iB ? void 0 : iB.mobSettings.tameInfo) && (0, aB.jsxs)(aB.Fragment, {
                  children: [(0, aB.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, aB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, aB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, aB.jsx)(Ln, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: Jn.b.feedTextColours[Jn.b.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, aB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, aB.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: XB.current.mobSettings.petInfo.superlikedFoodKnown ? (0, aB.jsx)(Gn, {
                            food: XB.current.mobSettings.petInfo.superlikedFood
                          }) : (0, aB.jsx)(Ln, {
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
                    }), (0, aB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, aB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, aB.jsx)(Ln, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: Jn.b.feedTextColours[Jn.b.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, aB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (qB = XB.current.mobSettings.tameInfo.likedFoods) || void 0 === qB ? void 0 : qB.filter((BB => !XB.current.mobSettings.petInfo.superlikedFoodKnown || BB !== XB.current.mobSettings.petInfo.superlikedFood)).map((BB => (0, aB.jsx)(Gn, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, aB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, aB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, aB.jsx)(Ln, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: Jn.b.feedTextColours[Jn.b.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, aB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (fB = XB.current.mobSettings.tameInfo.neutralFoods) || void 0 === fB ? void 0 : fB.map((BB => (0, aB.jsx)(Gn, {
                          food: BB
                        }, BB)))
                      })]
                    }), (0, aB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, aB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, aB.jsx)(Ln, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: Jn.b.feedTextColours[Jn.b.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, aB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (oB = XB.current.mobSettings.tameInfo.dislikedFoods) || void 0 === oB ? void 0 : oB.map((BB => (0, aB.jsx)(Gn, {
                          food: BB
                        }, BB)))
                      })]
                    })]
                  }), XB.current.mobSettings.tameInfo.levelUpBonuses && (0, aB.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: Jn.b.MAX_LEVEL + 1
                    }).map(((BB, jB) => {
                      const zB = jB;
                      if (0 === zB) return null;
                      const QB = XB.current.mobSettings.tameInfo.levelUpBonuses[zB],
                        nB = Jn.b.getBonusDisplayInfo(hB, XB.current.mobSettings, XB.current.mobType, QB);
                      return (0, aB.jsxs)("div", {
                        className: Lz()("PetUIFeedDropContainer", {
                          Selected: zB === Jn.b.getFriendshipLevelInfo(XB.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, aB.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: zB
                          }).map(((BB, jB) => (0, aB.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, aB.jsx)(dz.c, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${zB}-${jB}`)))
                        }), (0, aB.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: nB && (0, aB.jsx)(Ln, {
                            icon: nB.icon,
                            displayName: nB.displayName,
                            description: nB.description
                          })
                        })]
                      }, zB)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      Gn = (0, nB.memo)((function(BB) {
        let {
          food: jB,
          includeDescription: zB = !1
        } = BB;
        const QB = yn(),
          nB = QB.getDefaultItemStat(jB, "displayName"),
          dB = QB.getDefaultItemStat(jB, "description");
        return (0, aB.jsx)(Ln, {
          icon: jB,
          displayName: nB,
          description: zB ? dB : null
        })
      })),
      Ln = (0, nB.memo)((function(BB) {
        let {
          icon: jB,
          displayName: zB,
          description: QB,
          tintColor: nB,
          className: dB = "PetUIFoodItem"
        } = BB;
        return (0, aB.jsx)(KB.g, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, aB.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, aB.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, aB.jsx)(MB.e, {
                text: zB
              })
            }), QB && (0, aB.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, aB.jsx)(MB.e, {
                text: QB
              })
            })]
          }),
          children: (0, aB.jsx)("div", {
            className: dB,
            children: (0, aB.jsx)(dz.c, {
              itemName: jB,
              amount: 1,
              tintColor: nB
            })
          })
        })
      }));
    var gn = zB(3849),
      tn = zB(1173),
      Sn = zB(1270),
      Mn = zB(2509),
      En = zB(36932),
      qn = zB(1067),
      fn = zB(2458);

    function Hn(BB) {
      let {
        peers: jB
      } = BB;
      const [zB, QB] = (0, nB.useState)(null), dB = (0, qB.k)("players");
      return (0, aB.jsx)("div", {
        className: "CodeEditorPresence",
        children: jB.map((BB => {
          var jB, nB;
          const IB = null !== (jB = null === (nB = dB.byId[BB.playerId]) || void 0 === nB ? void 0 : nB.cosmetics) && void 0 !== jB ? jB : {};
          return (0, aB.jsxs)("div", {
            className: Lz()("PresenceIcon", {
              Viewer: !BB.isEditor
            }),
            style: {
              backgroundColor: BB.colour
            },
            onMouseEnter: () => {
              QB(BB.playerId)
            },
            onMouseLeave: () => {
              QB(null)
            },
            children: [(0, aB.jsx)(fn.c, {
              cosmetics: IB
            }), zB === BB.playerId && (0, aB.jsx)("div", {
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
    var Dn = zB(698),
      Fn = zB(36929),
      Yn = zB(36631),
      Vn = zB(36936);

    function hn(BB) {
      const jB = BB.split("/"),
        zB = [];
      for (let QB = 1; QB < jB.length; QB++) zB.push(jB.slice(0, QB).join("/"));
      return zB
    }

    function Xn(BB) {
      return BB.slice(BB.lastIndexOf("/") + 1)
    }
    const Zn = (0, nB.memo)((function(BB) {
      var jB;
      let {
        files: zB,
        activePath: QB,
        canEdit: dB,
        directoryLinked: IB,
        pluginNames: NB,
        activePluginName: uB,
        activePluginFile: UB,
        onSelect: pB,
        onSelectPlugin: rB,
        onCreate: JB,
        onRename: mB,
        onRenameFolder: kB,
        onDelete: GB,
        onToggleDirectorySync: LB,
        schematics: gB,
        onManageSchematic: tB
      } = BB;
      const {
        t: SB
      } = (0, cB.D)(), MB = null !== (jB = (0, En.e)(zB)) && void 0 !== jB ? jB : Sn.j, EB = Object.keys(zB), [iB, qB] = (0, nB.useState)((() => new Set)), fB = function(BB, jB, zB) {
        const QB = {
          folders: new Map,
          files: []
        };
        for (const IB of BB) {
          if (IB === jB) continue;
          let BB = QB;
          for (const jB of hn(IB)) {
            let zB = BB.folders.get(jB);
            zB || (zB = {
              folders: new Map,
              files: []
            }, BB.folders.set(jB, zB)), BB = zB
          }
          BB.files.push(IB)
        }
        const nB = [];
        BB.includes(jB) && nB.push({
          kind: "file",
          path: jB,
          name: Xn(jB),
          depth: 0
        });
        const dB = (BB, jB) => {
          const QB = [...BB.folders.entries()].sort(((BB, jB) => {
            let [zB] = BB, [QB] = jB;
            return zB.localeCompare(QB)
          }));
          for (const [IB, NB] of QB) {
            const BB = zB.has(IB);
            nB.push({
              kind: "folder",
              path: IB,
              name: Xn(IB),
              depth: jB,
              collapsed: BB
            }), BB || dB(NB, jB + 1)
          }
          BB.files.sort(((BB, jB) => BB.localeCompare(jB)));
          for (const zB of BB.files) nB.push({
            kind: "file",
            path: zB,
            name: Xn(zB),
            depth: jB
          })
        };
        return dB(QB, 0), nB
      }(EB, MB, iB);
      (0, nB.useEffect)((() => {
        qB((BB => {
          const jB = new Set(BB);
          let zB = !1;
          for (const nB of hn(QB)) zB = jB.delete(nB) || zB;
          return zB ? jB : BB
        }))
      }), [QB]);
      const oB = EB.length >= Wj.z,
        HB = (BB, jB) => {
          if (BB.length > Mn.s) return `Path must be at most ${Mn.s} characters`;
          if (!(0, Mn.q)(BB)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === BB) return "index.d.ts cannot be the world-code entry";
          const QB = !!jB && (0, En.i)(jB, BB);
          if (jB && (0, En.l)(jB) && !QB) return `Cannot rename ${jB} (only swapping ${Sn.j} and ${Sn.k} is allowed)`;
          if (BB in zB) return "A file with that path already exists";
          if ((0, En.l)(BB) && !QB) {
            if ((BB === Sn.j ? Sn.k : Sn.j) in zB) return `World code cannot have both ${Sn.j} and ${Sn.k}`
          }
          return null
        },
        DB = BB => {
          vQ.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === BB ? void 0 : `${BB}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: BB => HB(BB)
          }).getResult().then((BB => {
            "notificationTornDown" !== BB && null !== BB && "submit" === BB.type && JB(BB.value)
          }))
        },
        FB = BB => {
          vQ.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: jB => jB === BB ? "That is already the file's path" : HB(jB, BB)
          }).getResult().then((jB => {
            "notificationTornDown" !== jB && null !== jB && "submit" === jB.type && mB(BB, jB.value)
          }))
        },
        YB = BB => {
          const jB = BB => BB.replace(/\/+$/, "");
          vQ.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: BB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: zB => {
              const QB = jB(zB);
              if (QB === BB) return "That is already the folder's path";
              for (const [jB, nB] of(0, En.r)(EB, BB, QB)) {
                const BB = HB(nB, jB);
                if (null !== BB) return BB
              }
              return null
            }
          }).getResult().then((zB => {
            "notificationTornDown" !== zB && null !== zB && "submit" === zB.type && kB(BB, jB(zB.value))
          }))
        },
        VB = BB => {
          vQ.NotificationProvider.showPromptPopup({
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
          }).getResult().then((jB => {
            !0 === jB && GB(BB)
          }))
        };
      return (0, aB.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, aB.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, aB.jsx)("span", {
            children: "Files"
          }), dB && !oB && (0, aB.jsx)(sB.r, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              DB()
            },
            children: (0, aB.jsx)(yB.c, {
              name: "plus"
            })
          })]
        }), (0, aB.jsxs)("div", {
          className: "FileTreeList",
          children: [fB.map((BB => {
            const jB = BB.path;
            if ("folder" === BB.kind) return (0, aB.jsx)(Pn, {
              path: jB,
              name: BB.name,
              depth: BB.depth,
              collapsed: BB.collapsed,
              onToggle: () => {
                var BB;
                BB = jB, qB((jB => {
                  const zB = new Set(jB);
                  return zB.delete(BB) || zB.add(BB), zB
                }))
              },
              canCreate: dB && !oB,
              canRename: dB,
              onCreate: DB,
              onRename: YB
            }, `folder:${jB}`);
            const nB = (0, En.l)(jB),
              IB = Sn.j in zB && Sn.k in zB,
              NB = !nB || IB,
              UB = null === uB && jB === QB;
            return (0, aB.jsx)(en, {
              path: jB,
              label: BB.name,
              depth: BB.depth,
              isActive: UB,
              canRename: dB,
              onSelect: pB,
              onRename: FB,
              onDelete: VB,
              canDelete: NB && dB
            }, jB)
          })), (0, aB.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, aB.jsxs)("span", {
              children: ["Schematics (", Object.keys(gB).length, "/", Vn.i, ")"]
            }), dB && (0, aB.jsx)(sB.r, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(gB).length >= Vn.i,
              onClick: () => {
                tB("")
              },
              children: (0, aB.jsx)(yB.c, {
                name: "plus"
              })
            })]
          }), Object.keys(gB).sort().map((BB => (0, aB.jsx)(en, {
            path: BB,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: tB
          }, BB))), NB.length > 0 && (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, aB.jsx)("span", {
                children: "Plugins"
              })
            }), NB.map((BB => {
              var jB;
              const zB = Fn.e[BB],
                QB = Object.keys(null !== (jB = null === zB || void 0 === zB ? void 0 : zB.files) && void 0 !== jB ? jB : {
                  "index.ts": ""
                }).sort(((BB, jB) => "index.ts" === BB ? -1 : "index.ts" === jB ? 1 : BB.localeCompare(jB)));
              return (0, aB.jsxs)("div", {
                children: [(0, aB.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, En.D)(BB)
                }), QB.map((jB => (0, aB.jsx)(en, {
                  path: jB,
                  nested: !0,
                  isActive: uB === BB && UB === jB,
                  canRename: !1,
                  onSelect: () => {
                    rB(BB, jB)
                  },
                  canDelete: !1
                }, jB)))]
              }, BB)
            }))]
          })]
        }), (0, aB.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, aB.jsx)(sB.f, {
            className: "FileTreeFooterButton",
            onClick: LB,
            children: SB(IB ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function An(BB) {
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

    function Tn(BB) {
      let {
        depth: jB
      } = BB;
      return (0, aB.jsx)(aB.Fragment, {
        children: Array.from({
          length: jB
        }, ((BB, jB) => (0, aB.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": jB
          }
        }, jB)))
      })
    }

    function Pn(BB) {
      let {
        path: jB,
        name: zB,
        depth: QB,
        collapsed: nB,
        onToggle: dB,
        canCreate: IB,
        canRename: NB,
        onCreate: uB,
        onRename: UB
      } = BB;
      const pB = [];
      IB && pB.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          uB(jB)
        }
      }), NB && pB.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          UB(jB)
        }
      });
      const rB = An(QB);
      return (0, aB.jsxs)("div", {
        className: Lz()("FileTreeItem FileTreeFolder", rB.className),
        style: rB.style,
        children: [(0, aB.jsx)(Tn, {
          depth: QB
        }), (0, aB.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !nB,
          onClick: dB,
          children: [(0, aB.jsx)(yB.c, {
            className: "FileTreeFolderCaret",
            name: nB ? "caret-right" : "caret-down"
          }), (0, aB.jsx)(yB.c, {
            className: "FileTreeFolderIcon",
            name: nB ? "folder" : "folder-open"
          }), zB]
        }), (0, aB.jsx)(Wn, {
          path: jB,
          actions: pB
        })]
      })
    }

    function Wn(BB) {
      let {
        path: jB,
        actions: zB
      } = BB;
      const QB = (0, nB.useRef)(null);
      return 0 === zB.length ? null : (0, aB.jsxs)("div", {
        ref: QB,
        className: "FileTreeItemActions",
        children: [(0, aB.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${jB}`,
          children: (0, aB.jsx)(yB.c, {
            name: "ellipsis"
          })
        }), (0, aB.jsx)(Yn.e, {
          triggerElementRef: QB,
          options: zB
        })]
      })
    }

    function en(BB) {
      let {
        path: jB,
        label: zB = jB,
        depth: QB = 0,
        isActive: nB,
        canRename: dB,
        onSelect: IB,
        onRename: NB,
        onDelete: uB,
        canDelete: UB,
        nested: pB
      } = BB;
      const rB = [];
      dB && NB && rB.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          NB(jB)
        }
      }), UB && uB && rB.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          uB(jB)
        }
      });
      const sB = An(QB);
      return (0, aB.jsxs)("div", {
        className: Lz()("FileTreeItem", sB.className, {
          Active: nB,
          Nested: pB
        }),
        style: sB.style,
        children: [(0, aB.jsx)(Tn, {
          depth: QB
        }), (0, aB.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: zB === jB ? void 0 : jB,
          onClick: () => {
            IB(jB)
          },
          children: zB
        }), (0, aB.jsx)(Wn, {
          path: jB,
          actions: rB
        })]
      })
    }
    async function wn(BB) {
      const jB = (0, En.e)(BB);
      if (!jB || "" === BB[jB].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: QB
      } = await Promise.all([zB.e(303), zB.e(304)]).then((() => zB(41580)));
      return (0, Fn.b)(QB(BB))
    }
    var xn = zB(36938);

    function Kn(BB, jB) {
      const zB = Object.keys(BB),
        QB = Object.keys(jB);
      if (zB.length !== QB.length) return !1;
      for (const nB of zB)
        if (!(nB in jB) || BB[nB] !== jB[nB]) return !1;
      return !0
    }

    function Cn(BB, jB) {
      const zB = [],
        QB = [],
        nB = [];
      for (const dB of Object.keys(jB)) dB in BB ? BB[dB] !== jB[dB] && nB.push(dB) : zB.push(dB);
      for (const dB of Object.keys(BB)) dB in jB || QB.push(dB);
      return zB.sort(), QB.sort(), nB.sort(), {
        creates: zB,
        deletes: QB,
        updates: nB
      }
    }

    function cn(BB, jB) {
      var zB;
      const QB = {
          ...BB
        },
        nB = (0, En.e)(jB),
        dB = (0, En.e)(QB);
      if (Sn.j in QB && Sn.k in QB) {
        const BB = null !== nB && void 0 !== nB ? nB : Sn.k,
          zB = BB === Sn.j ? Sn.k : Sn.j;
        var IB;
        if (!(BB in QB)) QB[BB] = null !== (IB = jB[BB]) && void 0 !== IB ? IB : "";
        return delete QB[zB], QB
      }
      var NB;
      return nB && !(nB in QB) ? (dB || (QB[nB] = null !== (NB = jB[nB]) && void 0 !== NB ? NB : ""), QB) : (dB || nB || (QB[Sn.j] = null !== (zB = QB[Sn.j]) && void 0 !== zB ? zB : "", delete QB[Sn.k]), QB)
    }

    function bn(BB, jB) {
      const zB = (0, En.e)(jB),
        QB = Sn.j in jB && Sn.k in jB;
      return BB.filter((BB => !(0, En.l)(BB) || (!!QB || zB !== BB)))
    }
    async function vn(BB, jB, QB) {
      const nB = BB.getLobbyFiles(),
        dB = (0, Wj.m)(QB, (0, En.u)(nB, jB)),
        IB = await BB.ensureJoined(jB),
        NB = (0, Mn.u)(IB.docKey);
      if (IB.doc === dB) return;
      for (let zB = 0; zB < 100; zB++) {
        const zB = BB.getCollabSnapshot();
        if (zB && (0, Mn.u)(zB.docKey) === NB && BB.getActivePath() === jB) {
          if (BB.replaceActiveDoc(NB, dB)) return;
          await (0, GQ.M)(40)
        } else await (0, GQ.M)(40)
      }
      const {
        ChangeSet: uB
      } = await zB.e(299).then((() => zB(41408))), aB = BB.getCollabSnapshot(), pB = aB && (0, Mn.u)(aB.docKey) === NB ? aB : IB;
      await async function(BB, jB, zB, QB) {
        const nB = BB.of({
            from: 0,
            to: zB.length,
            insert: QB
          }, zB.length),
          dB = JSON.stringify([{
            clientID: jB.clientID,
            changes: nB.toJSON()
          }]),
          IB = (0, Mn.u)(jB.docKey);
        dB.length <= Mn.g ? UB.gameBridge.send("sendCodeCollab", {
          Nd: Mn.b.Push,
          ud: IB,
          Ud: jB.version,
          sd: dB
        }) : await (0, tn.postJsonWithMetricsCookiesAndJsonResponse)(`${jB.httpConfig.gsUrl}/code/collab-push`, gn.o["collab-push"].toBuffer({
          gameNameWithVariation: jB.httpConfig.gameNameWithVariation,
          lobbyName: jB.httpConfig.lobbyName,
          docKey: IB,
          version: jB.version,
          updates: dB
        }), {
          retries: 0
        })
      }(uB, pB, pB.doc, dB)
    }
    class Rn {
      constructor(BB) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = BB
      }
      async writeLobbyFiles(BB) {
        const jB = {
            ...this.bridge.getLobbyFiles()
          },
          zB = {
            ...jB
          };
        for (const {
            path: dB,
            text: IB
          }
          of BB) zB[dB] = IB;
        if (!BB.every((BB => {
            let {
              path: jB,
              text: QB
            } = BB;
            return (0, Wj.m)(QB, (0, En.u)(zB, jB)) === QB
          }))) return !1;
        const QB = [];
        try {
          for (const {
              path: jB,
              text: zB
            }
            of BB) QB.push(jB), jB in this.bridge.getLobbyFiles() || (this.bridge.createFile(jB, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(jB, !0)), await vn(this.bridge, jB, zB)
        } catch (nB) {
          for (const BB of QB) BB in jB ? await vn(this.bridge, BB, jB[BB]).catch((jB => {
            console.error("World Code AI: couldn't put back", BB, jB)
          })) : this.bridge.deleteFile(BB);
          throw nB
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const BB = await (0, xn.t)(this.bridge.getStorageKey());
        return !!BB && (this.handle = BB, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(BB), !0)
      }
      async unlinkFolder() {
        const BB = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, xn.b)(BB), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const BB = this.bridge.getStorageKey(),
          jB = await (0, xn.p)(BB);
        return !!jB && (!!await (0, xn.e)(jB, "readwrite") && (this.handle = jB, this.linked = !0, await (0, xn.G)(BB, jB), await this.scaffoldLocalTypes(jB), !0))
      }
      scaffoldLocalTypes(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const QB = (await wn(jB)).map((BB => Fn.e[BB])),
              nB = QB.map((BB => {
                var jB;
                return `${BB.name}:${Object.keys(null!==(jB=null===BB||void 0===BB?void 0:BB.files)&&void 0!==jB?jB:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === nB) return;
            const {
              ensureLocalBloxdTypes: dB
            } = await Promise.all([zB.e(85), zB.e(301), zB.e(306)]).then((() => zB(41585)));
            await dB(BB, QB), this.scaffoldedPluginNamesKey = nB
          } catch (QB) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", QB)
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
      async onDocTextChanged(BB, jB) {
        if (!this.handle) return;
        const zB = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [BB]: jB
        })];
        this.running && (this.pendingDocText.set(BB, jB), zB.push(this.flushDocTextToDisk())), await Promise.all(zB)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const BB = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const jB = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [zB, QB] of jB) this.lastSynced[zB] !== QB && (await (0, xn.P)(BB, zB, QB), this.lastSynced = {
              ...this.lastSynced,
              [zB]: QB
            })
          }
        } catch (jB) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", jB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, xn.x)(this.handle))
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
            if (!await (0, xn.e)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const jB = this.bridge.getLobbyFiles(),
              zB = await (0, xn.x)(this.handle);
            for (const BB of Object.keys(jB).filter(Vn.e)) {
              if (zB[BB] === xn.l) return void this.bridge.setMessage(`Move ${BB} outside the linked folder before syncing its placeholder.`, "warning");
              zB[BB] = Vn.r
            }
            if (Kn(zB, jB)) {
              for (const BB of Object.keys(jB).filter(Vn.e)) await (0, xn.P)(this.handle, BB, Vn.r);
              return this.lastSynced = {
                ...zB
              }, void this.beginWatch()
            }
            const QB = await this.promptReconcile(function(BB) {
              return null !== (0, En.e)(BB)
            }(zB));
            if ("unlink" === QB) return void await this.unlinkFolder();
            if ("dismissed" === QB) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === QB) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(zB);
                for (const BB of Object.keys(jB).filter(Vn.e)) await (0, xn.P)(this.handle, BB, Vn.r);
                this.lastSynced = {
                  ...await (0, xn.x)(this.handle)
                }
              } else await (0, xn.R)(this.handle, jB), this.lastSynced = {
                ...jB
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
        return await new Promise((jB => {
          const zB = [{
              choice: "local",
              Button: sB.f,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: sB.f,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: sB.f,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            QB = (0, aB.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, aB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, aB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: BB ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, aB.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: zB.filter((jB => "local" !== jB.choice || BB)).map((BB => {
                  let {
                    choice: zB,
                    Button: QB,
                    labelKey: dB,
                    descriptionKey: IB
                  } = BB;
                  return (0, aB.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, aB.jsx)(QB, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (BB => {
                          nB.tearDownNotification(), jB(BB)
                        })(zB)
                      },
                      children: this.bridge.t(`codeEditor:${dB}`)
                    }), (0, aB.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${IB}`)
                    })]
                  }, zB)
                }))
              })]
            }),
            nB = vQ.NotificationProvider.showCustomPopup({
              body: QB,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          nB.getResult().then((BB => {
            "notificationTornDown" === BB && jB("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, xn.K)(this.handle, (BB => {
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
        const jB = this.bridge.getLobbyFiles();
        let zB = cn(BB, this.lastSynced);
        for (const dB in jB)
          if ((0, Vn.e)(dB) && zB[dB] === xn.l) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const QB = Object.keys(zB).filter((BB => (0, Vn.e)(BB) && !(BB in jB)));
        QB.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const dB of Object.keys(jB).filter(Vn.e))(dB in zB || QB.length > 0 || !(dB in this.lastSynced)) && (zB[dB] = Vn.r);
        if (!Kn(zB, BB)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(BB, zB), zB = cn(await (0, xn.x)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!Kn(zB, this.lastSynced)) {
          this.applying = !0;
          try {
            const BB = Cn(this.lastSynced, zB);
            if (await this.pushDiskDeltaToLobby(zB, jB), null !== this.lastLobbySeen)
              for (const zB of [...BB.creates, ...BB.updates, ...BB.deletes])(0, Vn.e)(zB) || (zB in jB ? this.lastLobbySeen[zB] = jB[zB] : delete this.lastLobbySeen[zB]);
            this.lastSynced = {
              ...zB
            }
          } catch (nB) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", nB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(BB, jB) {
        if (this.handle) {
          for (const zB of Object.keys(BB)) zB in jB || await (0, xn.B)(this.handle, zB);
          for (const [zB, QB] of Object.entries(jB)) BB[zB] !== QB && await (0, xn.P)(this.handle, zB, QB)
        }
      }
      async applyRemoteTreeToDisk(BB) {
        if (!this.handle) return;
        const jB = this.lastLobbySeen;
        if (null === jB) return void(this.lastLobbySeen = {
          ...BB
        });
        const zB = Object.keys(BB).filter((zB => jB[zB] !== BB[zB])),
          QB = Object.keys(jB).filter((jB => !(jB in BB)));
        if (0 !== zB.length || 0 !== QB.length) {
          this.applying = !0;
          try {
            for (const jB of [...QB, ...zB]) try {
              if (jB in BB) await (0, xn.P)(this.handle, jB, BB[jB]), this.lastSynced = {
                ...this.lastSynced,
                [jB]: BB[jB]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [jB]: BB[jB]
              };
              else {
                await (0, xn.B)(this.handle, jB);
                const BB = {
                  ...this.lastSynced
                };
                delete BB[jB], this.lastSynced = BB;
                const zB = {
                  ...this.lastLobbySeen
                };
                delete zB[jB], this.lastLobbySeen = zB
              }
            } catch (nB) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", nB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(BB, jB) {
        const zB = function(BB, jB) {
          const zB = (0, En.e)(BB),
            QB = (0, En.e)(jB);
          return zB && QB && zB !== QB ? {
            from: zB,
            to: QB
          } : null
        }(BB, jB);
        return !!zB && (this.bridge.renameFile(zB.from, zB.to), await this.bridge.waitForLobbyPath(zB.to, !0), !0)
      }
      async applyLocalTreeToLobby(BB) {
        var jB;
        const zB = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), BB);
        const QB = this.bridge.getLobbyFiles(),
          nB = Cn(QB, BB),
          dB = bn(nB.deletes, QB);
        for (const UB of nB.creates)(0, Vn.e)(UB) || (this.bridge.createFile(UB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(UB, !0));
        for (const UB of dB)(0, Vn.e)(UB) || (this.bridge.deleteFile(UB), await this.bridge.waitForLobbyPath(UB, !1));
        if (!(0, En.e)(this.bridge.getLobbyFiles()) && !(0, En.e)(BB)) {
          if (this.bridge.createFile(Sn.j, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(Sn.j, !0), !this.handle) return;
          await (0, xn.P)(this.handle, Sn.j, ""), BB = {
            ...BB,
            [Sn.j]: ""
          }
        }
        const IB = this.bridge.getLobbyFiles();
        for (const UB of Object.keys(BB))(0, Vn.e)(UB) || IB[UB] !== BB[UB] && await vn(this.bridge, UB, BB[UB]);
        const NB = this.bridge.getLobbyFiles(),
          uB = zB in NB ? zB : null !== (jB = (0, En.e)(NB)) && void 0 !== jB ? jB : Sn.j;
        await this.bridge.ensureJoined(uB)
      }
      async pushDiskDeltaToLobby(BB, jB) {
        const zB = this.bridge.getActivePath(),
          QB = await this.renameLobbyEntryIfSwitched(jB, BB) ? this.bridge.getLobbyFiles() : jB,
          nB = Cn(this.lastSynced, BB),
          dB = bn(nB.deletes, QB).filter((BB => BB in QB));
        for (const IB of nB.creates)(0, Vn.e)(IB) || (IB in this.bridge.getLobbyFiles() || (this.bridge.createFile(IB, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(IB, !0)), await vn(this.bridge, IB, BB[IB]));
        for (const IB of dB)(0, Vn.e)(IB) ? await this.bridge.deleteSchematic(IB) : (this.bridge.deleteFile(IB), await this.bridge.waitForLobbyPath(IB, !1));
        for (const IB of nB.updates)(0, Vn.e)(IB) || await vn(this.bridge, IB, BB[IB]);
        zB in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== zB && await this.bridge.ensureJoined(zB)
      }
    }
    var On = zB(1244);

    function Bd() {
      const {
        websocketUrl: BB,
        gameNameWithVariation: jB,
        lobbyName: zB
      } = UB.gameBridge.latest("connectedGame");
      return {
        gsUrl: On.clientSideServerUrls.getHttpUrlFromWebSocketUrl(BB),
        gameNameWithVariation: jB,
        lobbyName: zB
      }
    }
    async function jd(BB) {
      const {
        gsUrl: jB,
        gameNameWithVariation: zB,
        lobbyName: QB
      } = Bd();
      return await (0, tn.postBinaryWithMetricsCookiesAndCustomResponse)(`${jB}/code/schematics`, gn.xk.schematics.toBuffer({
        gameNameWithVariation: zB,
        lobbyName: QB,
        request: JSON.stringify(BB)
      }), {
        retries: 0
      }, tn.HttpPayloadType.json)
    }
    var zd = zB(36418);

    function Qd(BB) {
      let {
        path: jB,
        revision: zB
      } = BB;
      const [QB, dB] = (0, nB.useState)(""), [IB, NB] = (0, nB.useState)(!1), [uB, UB] = (0, nB.useState)(0);
      return (0, nB.useEffect)((() => {
        let BB = !1;
        return dB(""), NB(!1), jd({
          action: "preview",
          path: jB
        }).then((jB => {
          BB || dB(`data:image/webp;base64,${jB.previewBase64}`)
        })).catch((jB => {
          console.error("Could not load schematic preview", jB), BB || NB(!0)
        })), () => {
          BB = !0
        }
      }), [jB, zB, uB]), (0, aB.jsxs)("div", {
        className: "SchematicPreview",
        children: [QB && (0, aB.jsx)("img", {
          src: QB,
          alt: `Preview of ${jB}`
        }), !QB && !IB && (0, aB.jsx)(fB.e, {
          loaderType: "Secondary"
        }), IB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, aB.jsx)(sB.f, {
            onClick: () => {
              UB(uB + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }
    var nd = zB(3258);

    function dd(BB) {
      var jB;
      let {
        initialPath: zB,
        onChanged: QB,
        onClose: dB
      } = BB;
      const IB = "" === zB,
        [NB, uB] = (0, nB.useState)(null),
        [UB, pB] = (0, nB.useState)(zB),
        [rB, JB] = (0, nB.useState)(!1),
        [mB, yB] = (0, nB.useState)(!1),
        [kB, GB] = (0, nB.useState)(null),
        [LB, gB] = (0, nB.useState)(!1),
        [tB, SB] = (0, nB.useState)(""),
        MB = (0, nB.useRef)(null),
        EB = (0, nB.useRef)(!1),
        iB = (0, nB.useRef)(!0);
      (0, nB.useEffect)((() => (iB.current = !0, jd({
        action: "state"
      }).then((BB => {
        iB.current && uB(BB)
      })).catch((BB => {
        console.error("Could not load schematic assets", BB), iB.current && SB("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        iB.current = !1
      })), []);
      const qB = null === NB || void 0 === NB ? void 0 : NB.assets[zB],
        fB = Object.keys(null !== (jB = null === NB || void 0 === NB ? void 0 : NB.assets) && void 0 !== jB ? jB : {}).length,
        oB = UB.trim(),
        HB = oB ? (0, Vn.e)(oB) ? null !== NB && void 0 !== NB && NB.assets[oB] && (IB || oB !== zB) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        DB = !!oB && !HB && (IB ? fB < Vn.i : oB !== zB),
        FB = LB || !NB;
      async function YB(BB) {
        if (!EB.current && iB.current) {
          EB.current = !0, gB(!0), SB("");
          try {
            const jB = await jd({
              ...BB,
              expectedRevision: NB.revision
            });
            QB(jB), iB.current && dB()
          } catch (zB) {
            var jB;
            if (console.error("Schematic asset operation failed", zB), iB.current) SB(zB instanceof wB.c ? null !== (jB = zB.errorMessageForUser) && void 0 !== jB ? jB : zB.message : String(zB));
            try {
              const BB = await jd({
                action: "state"
              });
              QB(BB), iB.current && uB(BB)
            } catch (nB) {
              console.error("Could not refresh schematic assets", nB)
            }
          } finally {
            EB.current = !1, iB.current && gB(!1)
          }
        }
      }
      return (0, aB.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, aB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: IB ? "New schematic" : rB ? "Rename schematic" : "Schematic"
        }), tB && (0, aB.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: tB
        }), !NB && !tB && (0, aB.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, aB.jsxs)("fieldset", {
          disabled: FB,
          children: [IB || rB ? (0, aB.jsxs)("label", {
            className: "SchematicField",
            children: [(0, aB.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, aB.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, aB.jsx)(Vz.d, {
                className: "InputGenericPopupInput",
                defaultValue: zB,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: pB
              }, rB ? "rename" : "create")
            })]
          }) : (0, aB.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: zB
          }), (IB || rB) && HB && (0, aB.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: HB
          }), IB ? (0, aB.jsxs)(aB.Fragment, {
            children: [fB >= Vn.i && (0, aB.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", Vn.i, " maximum)."]
            }), mB ? (0, aB.jsxs)(aB.Fragment, {
              children: [(0, aB.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, aB.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": FB || !DB,
                children: (0, aB.jsx)(zd.c, {
                  loading: null === kB,
                  schematics: null !== kB && void 0 !== kB ? kB : [],
                  disableAutoExport: !0,
                  onSchematicPicked: BB => {
                    !FB && DB && YB({
                      action: "profile",
                      path: oB,
                      schematicId: BB.schematicId
                    })
                  }
                })
              }), (0, aB.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, aB.jsx)(sB.f, {
                  className: "InputGenericPopupButton",
                  disabled: FB,
                  onClick: () => {
                    yB(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, aB.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, aB.jsx)(sB.f, {
                className: "InputGenericPopupButton",
                disabled: FB || !DB,
                onClick: () => {
                  (0, nd.f)(MB.current)
                },
                children: "Upload Schematic"
              }), (0, aB.jsx)(sB.f, {
                className: "InputGenericPopupButton",
                disabled: FB || !DB,
                onClick: () => {
                  !async function() {
                    if (yB(!0), SB(""), !kB) try {
                      const BB = await (0, tn.postJsonWithMetricsCookiesAndJsonResponse)(`${On.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      iB.current && GB(BB)
                    } catch (BB) {
                      console.error("Could not load profile schematics", BB), iB.current && (yB(!1), SB("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, aB.jsx)("input", {
              ref: MB,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: BB => {
                var jB;
                const zB = null === (jB = BB.target.files) || void 0 === jB ? void 0 : jB[0];
                if (BB.target.value = "", !zB) return;
                if (zB.size > Vn.k) return void SB("The schematic file is too large.");
                const QB = oB;
                gB(!0);
                const nB = new FileReader;
                nB.onload = () => {
                  YB({
                    action: "upload",
                    path: QB,
                    base64: String(nB.result).split(",")[1]
                  })
                }, nB.onerror = () => {
                  console.error("Could not read schematic file", nB.error), iB.current && (gB(!1), SB("Could not read the selected file."))
                }, nB.readAsDataURL(zB)
              }
            })]
          }) : qB ? (0, aB.jsxs)(aB.Fragment, {
            children: [!rB && (0, aB.jsx)(Qd, {
              path: zB,
              revision: NB.revision
            }), !rB && (0, aB.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(qB.byteSize / 1024), " KB \xb7 ", qB.dimensions.join(" \xd7 "), " blocks"]
            }), (0, aB.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: rB ? (0, aB.jsxs)(aB.Fragment, {
                children: [(0, aB.jsx)(sB.f, {
                  className: "InputGenericPopupButton",
                  disabled: FB || !DB,
                  onClick: () => {
                    YB({
                      action: "rename",
                      path: zB,
                      newPath: oB
                    })
                  },
                  children: "Rename"
                }), (0, aB.jsx)(sB.f, {
                  className: "InputGenericPopupButton",
                  disabled: FB,
                  onClick: () => {
                    JB(!1), pB(zB)
                  },
                  children: "Cancel"
                })]
              }) : (0, aB.jsxs)(aB.Fragment, {
                children: [(0, aB.jsx)(sB.f, {
                  className: "InputGenericPopupButton",
                  disabled: FB,
                  onClick: () => {
                    JB(!0)
                  },
                  children: "Rename"
                }), (0, aB.jsx)(sB.G, {
                  className: "InputGenericPopupButton",
                  disabled: FB,
                  onClick: () => {
                    YB({
                      action: "remove",
                      path: zB
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : NB && (0, aB.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function Id(BB) {
      if ("string" !== typeof BB) return null;
      try {
        const jB = JSON.parse(BB);
        return (0, En.p)(null === jB || void 0 === jB ? void 0 : jB.worldCodeEngine) && "boolean" === typeof jB.engineLocked && function(BB) {
          if (null === BB) return !0;
          const jB = null === BB || void 0 === BB ? void 0 : BB.location;
          return "string" === typeof(null === BB || void 0 === BB ? void 0 : BB.reason) && (null === jB || "string" === typeof(null === jB || void 0 === jB ? void 0 : jB.path) && Number.isInteger(jB.line))
        }(jB.fallback) ? jB : (console.error("[CodeCollab] Malformed engine settings", BB), null)
      } catch (jB) {
        return console.error("[CodeCollab] Failed to parse engine settings", jB), null
      }
    }

    function Nd(BB) {
      let {
        fallback: jB,
        onGoToLine: zB
      } = BB;
      const {
        t: QB
      } = (0, cB.D)(), {
        location: nB
      } = jB;
      return (0, aB.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [QB("codeEditorEngine:notice", {
          reason: jB.reason
        }), nB && (0, aB.jsxs)(aB.Fragment, {
          children: [" ", (0, aB.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              zB(nB.path, nB.line)
            },
            children: QB("codeEditorEngine:goToLine", {
              line: String(nB.line)
            })
          })]
        })]
      })
    }
    var ud = zB(5029),
      Ud = zB(4478),
      pd = zB(36944);

    function rd(BB) {
      let {
        label: jB,
        hint: zB,
        checked: QB,
        onChange: nB
      } = BB;
      return (0, aB.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, aB.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, aB.jsx)("span", {
            children: jB
          }), (0, aB.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: zB
          })]
        }), (0, aB.jsx)("span", {
          className: "SwitchContainer",
          children: (0, aB.jsx)(Ud.e, {
            className: "SwitchCheckbox",
            checked: QB,
            onChange: BB => {
              nB(BB.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function sd(BB) {
      let {
        engine: jB,
        onSetEngine: zB,
        aiHints: QB,
        variation: nB
      } = BB;
      const {
        t: dB
      } = (0, cB.D)(), [IB, NB] = (0, pd.j)(pd.g);
      return (0, aB.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, aB.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: dB("codeEditor:moreOptions")
        }), jB && (0, aB.jsx)(rd, {
          label: dB("codeEditorEngine:toggle"),
          hint: dB("codeEditorEngine:toggleHint"),
          checked: "ses" === jB,
          onChange: BB => {
            zB(BB ? "ses" : "quickjs")
          }
        }), QB && (0, aB.jsx)(rd, {
          label: dB("codeEditorAiHints:toggle"),
          hint: dB("codeEditorAiHints:toggleHint"),
          checked: QB.shown,
          onChange: QB.setShown
        }), QB && pd.g.canChange && (0, aB.jsx)(rd, {
          label: dB("codeEditorAiKeySafetyCheck:toggle"),
          hint: dB("codeEditorAiKeySafetyCheck:toggleHint"),
          checked: IB,
          onChange: BB => {
            BB ? NB(!0) : vQ.NotificationProvider.showPromptPopup({
              title: "codeEditorAiKeySafetyCheck:offWarning",
              confirmText: "general:yes",
              destructive: !0,
              cancelText: "general:no"
            }).getResult().then((BB => {
              !0 === BB && NB(!1)
            }))
          }
        }), nB && (0, aB.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, aB.jsx)(ud.f, {
            label: "codeEditor:variationLabel",
            children: (0, aB.jsx)(Vz.d, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: nB.name,
              onValueChange: nB.setName,
              onEnter: nB.reload
            })
          }), (0, aB.jsx)(sB.x, {
            className: "CodeEditorButton",
            onClick: nB.reload,
            children: dB("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var Jd = zB(36946),
      md = zB(36955);

    function yd(BB) {
      let {
        close: jB
      } = BB;
      const {
        t: zB
      } = (0, cB.D)(), QB = [{
        name: zB("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: zB("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: zB("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, aB.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, aB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: zB("codeEditor:tutorialsTitle")
        }), (0, aB.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: QB.map((BB => (0, aB.jsx)(sB.f, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              jB(), (0, md.D)(BB.tutorial)
            },
            children: BB.name
          }, BB.tutorial)))
        })]
      })
    }
    var kd = zB(125),
      Gd = zB(36624),
      Ld = zB(3738);
    const gd = (0, nB.forwardRef)((function(BB, jB) {
      let {
        value: zB,
        onChange: QB,
        onSubmit: nB,
        placeholder: dB,
        maxLength: IB,
        rows: NB = 2,
        allowNewLines: uB = !1,
        onKeyDown: UB,
        before: pB
      } = BB;
      const {
        t: rB
      } = (0, cB.D)(), JB = "" !== zB.trim(), mB = () => {
        JB && nB()
      };
      return (0, aB.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [pB, (0, aB.jsx)("textarea", {
          ref: jB,
          className: "PanelPromptInput",
          value: zB,
          maxLength: IB,
          rows: NB,
          placeholder: dB,
          spellCheck: !1,
          autoComplete: "off",
          onChange: BB => {
            QB(uB ? BB.target.value : BB.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: BB => {
            BB.nativeEvent.isComposing || 229 === BB.nativeEvent.keyCode ? BB.stopPropagation() : "Escape" !== BB.key && (BB.stopPropagation(), null === UB || void 0 === UB || UB(BB), BB.defaultPrevented || "Enter" !== BB.key || uB && BB.shiftKey || (BB.preventDefault(), mB()))
          }
        }), (0, aB.jsx)(sB.f, {
          className: "PanelPromptSend",
          disabled: !JB,
          onClick: mB,
          ariaLabel: rB("codeEditorPanels:send"),
          children: (0, aB.jsx)(yB.c, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function td(BB) {
      let {
        inputRef: jB
      } = BB;
      const {
        t: zB
      } = (0, cB.D)(), {
        messages: QB,
        reportedPlayers: dB,
        channel: IB
      } = (0, Ld.l)(), [NB, uB] = (0, nB.useState)(""), UB = (0, nB.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, aB.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, aB.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, aB.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: zB("codeEditorChat:title")
          })
        }), 0 === QB.length ? (0, aB.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: zB("codeEditorChat:empty")
        }) : (0, aB.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, aB.jsx)(Gd.c, {
            messages: QB,
            reportedPlayers: dB
          })
        }), (0, aB.jsx)(gd, {
          ref: jB,
          value: NB,
          onChange: uB,
          onSubmit: () => {
            (0, Ld.k)(NB), uB(""), UB.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: iB.fd,
          rows: 1,
          placeholder: IB ? zB("touchOnly" === (0, kd.c)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: IB.channelName
          }) : zB("codeEditorChat:placeholder"),
          before: IB && (0, aB.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: IB.elementBgColor
            },
            onClick: () => {
              Ld.e.selectNextChannel(), jB.current.focus()
            },
            children: (0, aB.jsx)(MB.e, {
              text: IB.elementContent
            })
          }),
          onKeyDown: BB => {
            const jB = NB === UB.current.text;
            if ("ArrowUp" !== BB.key && "ArrowDown" !== BB.key || !jB && "" !== NB) "Tab" === BB.key && !BB.shiftKey && IB && (BB.preventDefault(), Ld.e.selectNextChannel());
            else {
              BB.preventDefault();
              const zB = jB ? UB.current.stepsBack : 0;
              UB.current = (0, Ld.j)(zB + ("ArrowUp" === BB.key ? 1 : -1)), uB(UB.current.text)
            }
          }
        })]
      })
    }
    var Sd = zB(36958);

    function Md(BB) {
      return "expanded" === BB ? "always" : "shown" === BB ? "narrow" : void 0
    }

    function Ed(BB) {
      var jB;
      let {
        zr: zB,
        worldPanel: QB,
        closeWorld: nB,
        aiShown: dB,
        defaultWidth: IB,
        children: NB
      } = BB;
      const uB = "hidden" !== zB;
      return (0, aB.jsx)(Sd.c, {
        side: "right",
        defaultSize: uB ? "max(18rem, 40%)" : IB,
        covers: null !== (jB = Md(zB)) && void 0 !== jB ? jB : dB ? "narrow" : void 0,
        children: (0, aB.jsxs)("div", {
          className: Lz()("CodeEditorRightColumn", {
            WorldShown: uB,
            WorldExpanded: "expanded" === zB
          }),
          children: [uB && (0, aB.jsx)(Sd.c, {
            side: "top",
            onClose: nB,
            children: QB
          }), NB]
        })
      })
    }
    var qd = zB(2027),
      fd = zB(1167),
      od = zB(1325);
    class Hd {
      constructor(BB, jB, zB) {
        this.measure = BB, this.apply = jB, this.now = zB, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var BB, jB;
        return null !== (BB = null === (jB = this.last) || void 0 === jB ? void 0 : jB.rect) && void 0 !== BB ? BB : null
      }
      sync() {
        const BB = function(BB) {
          const jB = Math.round(BB.left),
            zB = Math.round(BB.top);
          return {
            left: jB,
            top: zB,
            width: Math.round(BB.right) - jB,
            height: Math.round(BB.bottom) - zB
          }
        }(this.measure());
        if (BB.width <= 0 || BB.height <= 0) return;
        const jB = this.now(),
          zB = this.last;
        let QB = {
          width: BB.width,
          height: BB.height
        };
        null === zB || BB.width === zB.rect.width && BB.height === zB.rect.height || (this.resizing = jB - this.resizedAt < 100, this.resizedAt = jB);
        const nB = null !== zB && this.resizing && jB - this.resizedAt < 100 && (BB.width !== zB.bufferSize.width || BB.height !== zB.bufferSize.height);
        nB && (this.stretchedAt ??= jB), nB && jB - this.stretchedAt < 250 ? QB = zB.bufferSize : this.stretchedAt = null;
        const dB = {
          rect: BB,
          bufferSize: QB
        };
        var IB, NB;
        null !== zB && (NB = dB, (IB = zB).rect.left === NB.rect.left && IB.rect.top === NB.rect.top && IB.rect.width === NB.rect.width && IB.rect.height === NB.rect.height && IB.bufferSize.width === NB.bufferSize.width && IB.bufferSize.height === NB.bufferSize.height) || (this.last = dB, this.apply(dB))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function Dd(BB) {
      const {
        style: jB
      } = document.documentElement;
      for (const [zB, QB] of [
          ["--worldViewLeft", null === BB || void 0 === BB ? void 0 : BB.left],
          ["--worldViewTop", null === BB || void 0 === BB ? void 0 : BB.top],
          ["--worldViewWidth", null === BB || void 0 === BB ? void 0 : BB.width],
          ["--worldViewHeight", null === BB || void 0 === BB ? void 0 : BB.height]
        ]) void 0 === QB ? jB.removeProperty(zB) : jB.setProperty(zB, `${QB}px`)
    }
    var Fd = zB(1778),
      Yd = zB(2042);

    function Vd(BB, jB) {
      (0, nB.useEffect)((() => {
        if (!BB) return;
        const zB = BB => {
          var zB;
          "Escape" === BB.key ? (BB.stopPropagation(), BB.preventDefault(), jB()) : (zB = BB.code, Object.entries(lj.w).some((BB => {
            let [jB, QB] = BB;
            const nB = Yd.g[jB];
            return nB.includes("ui") && !nB.includes("core") && QB.includes(zB)
          })) && !(0, Fd.isTextEntry)(BB.target) && BB.preventDefault())
        };
        window.addEventListener("keydown", zB, !0);
        const QB = (0, PB.i)(jB);
        return () => {
          window.removeEventListener("keydown", zB, !0), QB()
        }
      }), [BB, jB])
    }

    function hd() {
      return (0, Un.o)().some((BB => BB !== Un.e))
    }

    function Xd(BB, jB) {
      return BB.map((BB => jB ? String(BB) : BB.toFixed(1))).join(", ")
    }

    function Zd(BB) {
      let {
        freeCamera: jB,
        picking: zB,
        hovered: QB
      } = BB;
      const {
        t: dB
      } = (0, cB.D)(), IB = (0, nB.useRef)(null), NB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        const BB = (BB, jB) => {
            BB.textContent !== jB && (BB.textContent = jB)
          },
          zB = () => {
            const zB = jB ? UB.gameBridge.lookup("freeCameraPos", null) : null;
            BB(IB.current, Xd(null !== zB && void 0 !== zB ? zB : UB.gameBridge.lookup("localPos", null), !1));
            const QB = UB.gameBridge.lookup("targetedBlockPos", null);
            BB(NB.current, QB ? Xd(QB, !0) : "-")
          };
        return zB(), (0, od.B)(zB)
      }), [jB]), (0, aB.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, aB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: dB(jB ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, aB.jsx)("span", {
          ref: IB
        }), (0, aB.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: dB("codeEditorWorld:lookingAt")
        }), (0, aB.jsx)("span", {
          ref: NB,
          hidden: zB
        }), zB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)("span", {
            children: QB ? Xd(QB.pos, !0) : "-"
          }), QB && (0, aB.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: QB.name
          })]
        })]
      })
    }
    var Ad = zB(36964),
      Td = zB(1507);

    function Pd(BB) {
      const jB = BB.currentTarget.getBoundingClientRect();
      return {
        x: (BB.clientX - jB.left) / jB.width,
        y: (BB.clientY - jB.top) / jB.height
      }
    }

    function Wd(BB) {
      const [jB, zB] = (0, nB.useState)(!1), [QB, dB] = (0, nB.useState)(null), IB = (0, nB.useRef)(null);
      (0, nB.useEffect)((() => {
        if (!jB) return;
        let BB = null,
          zB = null,
          QB = 1 / 0;
        const nB = (0, od.x)((jB => {
          QB += jB;
          const nB = IB.current;
          if (nB === zB && QB < 100) return;
          zB = nB, QB = 0;
          const NB = nB && UB.gameBridge.lookup("blockAtViewPoint", nB);
          var uB, aB;
          (uB = NB) === (aB = BB) || null !== uB && null !== aB && uB.name === aB.name && (0, Ad.e)(uB.pos, aB.pos) && (0, Ad.e)(uB.normal, aB.normal) || (BB = NB, dB(NB), UB.gameBridge.send("setBlockHighlight", NB))
        }));
        return () => {
          nB(), null !== BB && UB.gameBridge.send("setBlockHighlight", null), dB(null)
        }
      }), [jB]);
      const NB = (0, nB.useCallback)((() => {
        zB(!1)
      }), []);
      Vd(jB, NB);
      const uB = QB => {
          if (!jB) return;
          const nB = UB.gameBridge.lookup("blockAtViewPoint", Pd(QB));
          null !== nB && (zB(!1), BB(nB.pos))
        },
        aB = jB ? (0, Td.f)(uB, "pointerup") : null,
        pB = {
          onPointerDown: BB => {
            null === aB || void 0 === aB || aB.onPointerDown(BB)
          },
          onPointerMove: BB => {
            IB.current = Pd(BB)
          },
          onPointerLeave: () => {
            IB.current = null
          },
          onPointerUp: null === aB || void 0 === aB ? void 0 : aB.onPointerUp,
          onClick: BB => {
            "pointerType" in BB.nativeEvent && "touch" === BB.nativeEvent.pointerType || uB(BB)
          }
        };
      return {
        picking: jB,
        setPicking: zB,
        hovered: QB,
        slotHandlers: pB
      }
    }

    function ed(BB) {
      UB.gameBridge.send("setFreeCameraMovesFly", BB)
    }

    function ld(BB) {
      let {
        shown: jB,
        setShown: zB,
        canInsertCode: QB
      } = BB;
      const {
        t: dB
      } = (0, cB.D)(), {
        isTouchScreen: IB
      } = (0, TB.m)(["isTouchScreen"]), NB = (0, nB.useRef)(null), UB = (0, nB.useCallback)((() => {
        var BB;
        null === (BB = NB.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === BB || BB.focus()
      }), []), {
        control: pB,
        take: rB,
        release: mB,
        blocked: kB
      } = function(BB) {
        const [jB, zB] = (0, nB.useState)("none"), QB = (0, nB.useRef)("none"), [dB, IB] = (0, nB.useState)(!1), NB = BB => {
          QB.current = BB, zB(BB)
        }, uB = (0, nB.useCallback)((() => {
          const jB = QB.current;
          "none" !== jB && (NB("none"), (0, Un.u)(Un.e), "mouse" === jB && BB())
        }), [BB]), UB = (0, nB.useCallback)((BB => {
          hd() ? IB(!0) : (NB("mouse" === BB && "touchOnly" !== (0, kd.c)() ? "mouse" : "touch"), (0, Un.s)(Un.e))
        }), []);
        return (0, EB.f)("pointerLockUpdate", (BB => {
          BB && "touch" === QB.current && "touchOnly" !== (0, kd.c)() ? NB("mouse") : BB || "mouse" !== QB.current || uB()
        })), (0, nB.useEffect)((() => {
          if (!dB) return;
          const BB = () => {
            hd() || IB(!1)
          };
          return BB(), (0, Un.j)(BB)
        }), [dB]), Vd("none" !== jB, uB), (0, nB.useEffect)((() => {
          if ("none" === jB) return;
          const BB = BB => {
            (0, Fd.isTextEntry)(BB.target) && uB()
          };
          return document.addEventListener("focusin", BB), () => {
            document.removeEventListener("focusin", BB)
          }
        }), [jB, uB]), (0, nB.useEffect)((() => (document.addEventListener("pointerlockerror", uB), () => {
          document.removeEventListener("pointerlockerror", uB)
        })), [uB]), (0, nB.useEffect)((() => () => {
          "none" !== QB.current && null !== TB.c.get("openInGameMenuName") && (0, Un.u)(Un.e)
        }), []), {
          control: jB,
          take: UB,
          release: uB,
          blocked: dB
        }
      }(UB), GB = (0, fd.l)(Sd.e);
      (0, nB.useEffect)((() => {
        "touch" !== pB || "shown" !== jB || GB ? "none" === pB && "expanded" === jB && zB("shown") : zB("expanded")
      }), [pB, GB]),
      function(BB, jB) {
        const zB = (0, nB.useRef)(jB);
        zB.current = jB;
        const QB = (0, nB.useRef)(null);
        (0, nB.useLayoutEffect)((() => {
          const jB = new Hd((() => BB.current.getBoundingClientRect()), (BB => {
            var jB;
            "none" !== zB.current && Dd(null !== (jB = null === BB || void 0 === BB ? void 0 : BB.rect) && void 0 !== jB ? jB : null), (0, od.F)().setGameView(BB)
          }), (() => performance.now()));
          QB.current = jB, jB.sync();
          const nB = (0, od.u)((() => {
            jB.sync()
          }));
          return () => {
            nB(), TB.c.set({
              worldPanelHud: null
            }), jB.stop()
          }
        }), [BB]), (0, nB.useLayoutEffect)((() => {
          QB.current.sync(), Dd("none" === jB ? null : QB.current.rect), TB.c.set({
            worldPanelHud: jB
          })
        }), [jB])
      }(NB, "touch" === pB ? "touchControls" : "none");
      const {
        picking: LB,
        setPicking: gB,
        hovered: tB,
        slotHandlers: {
          onPointerDown: SB,
          ...MB
        }
      } = Wd((BB => {
        JB.n.Ly("CodeEditorInsertText", {
          text: `[${BB.join(", ")}]`,
          focus: !IB
        }), (0, Sd.e)() && zB("hidden")
      })), iB = function() {
        const {
          allowed: BB,
          movesFly: jB
        } = (0, qB.k)("freeCamera"), zB = (0, nB.useRef)(jB), QB = (0, nB.useRef)(jB);
        return QB.current !== jB && (QB.current = jB, zB.current = jB), (0, nB.useEffect)((() => () => {
          zB.current && ed(!1)
        }), []), {
          allowed: BB,
          on: jB,
          toggle: () => {
            zB.current = !jB, ed(!jB)
          }
        }
      }(), fB = (0, uB.i)("hideCoordinates"), oB = (0, qB.k)("localPlayerAlive"), HB = !oB || kB;
      (0, nB.useEffect)((() => {
        oB || mB()
      }), [oB, mB]), (0, nB.useEffect)((() => {
        !HB && QB || gB(!1)
      }), [HB, QB, gB]);
      const DB = iB.on ? sB.m : sB.f,
        FB = LB ? sB.m : sB.f;
      return (0, aB.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, aB.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, aB.jsx)("span", {
            className: "WorldPanelTitle",
            children: dB("codeEditorWorld:title")
          }), "touch" === pB && !GB && (0, aB.jsx)(sB.f, {
            className: "WorldPanelButton",
            onClick: mB,
            children: dB("codeEditorWorld:backToCode")
          }), !HB && iB.allowed && !IB && (0, aB.jsx)(KB.g, {
            tooltipInner: dB("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, aB.jsx)(DB, {
              className: "WorldPanelButton",
              ariaPressed: iB.on,
              ariaLabel: dB("codeEditorWorld:freeCamera"),
              onClick: iB.toggle,
              children: (0, aB.jsx)(yB.c, {
                name: "video"
              })
            })
          }), !HB && QB && (0, aB.jsx)(KB.g, {
            tooltipInner: dB("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, aB.jsxs)(FB, {
              className: "WorldPanelButton",
              ariaPressed: LB,
              onClick: () => {
                mB(), gB(!LB)
              },
              children: [(0, aB.jsx)(yB.c, {
                name: "crosshairs"
              }), dB("codeEditorWorld:pick")]
            })
          })]
        }), !fB && (0, aB.jsx)(Zd, {
          freeCamera: iB.on,
          picking: LB,
          hovered: tB
        }), (0, aB.jsxs)("div", {
          ref: NB,
          className: Lz()("WorldPanelSlot", {
            TouchControl: "touch" === pB,
            Picking: LB
          }),
          onPointerDown: BB => {
            0 !== BB.button || HB || LB || rB(BB.pointerType), SB(BB)
          },
          ...MB,
          children: [!HB && !LB && (0, aB.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !HB && "touch" !== pB && (0, aB.jsxs)("div", {
            className: "WorldPanelHint",
            children: [LB && dB(IB ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !LB && "none" === pB && !iB.on && dB(IB ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !LB && "none" === pB && iB.on && dB("codeEditorWorld:clickToFly"), "mouse" === pB && (0, aB.jsxs)(aB.Fragment, {
              children: [(0, aB.jsx)(qd.b, {
                noaAction: "OpenLobbyLeaderboard"
              }), dB("codeEditorWorld:backToCode")]
            })]
          }), HB && (0, aB.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, aB.jsx)("span", {
              children: dB(oB ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, aB.jsx)(sB.f, {
              onClick: PB.c,
              children: dB("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var wd = zB(5097);

    function xd(BB) {
      let {
        zr: jB,
        setWorld: zB,
        toggleWorld: QB,
        aiShown: nB,
        closeAi: dB
      } = BB;
      const {
        t: IB
      } = (0, cB.D)(), NB = nB ? "ai" : "hidden" !== jB ? "world" : "code", uB = [{
        value: "code",
        label: IB("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: IB("codeEditorWorld:title")
      }];
      nB && uB.push({
        value: "ai",
        label: IB("codeEditorWorld:aiPane")
      });
      return (0, aB.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, aB.jsx)(wd.e, {
          options: uB,
          value: NB,
          onChange: BB => {
            "world" !== BB ? (nB && dB(), zB("hidden")) : "hidden" === jB ? QB() : dB()
          },
          ariaLabel: IB("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var Kd = zB(36971),
      Cd = zB(36977),
      cd = zB(36986),
      bd = zB(36988);
    const vd = (0, nB.lazy)((() => Promise.all([zB.e(303), zB.e(299), zB.e(302), zB.e(298), zB.e(85), zB.e(301), zB.e(300), zB.e(297)]).then((() => zB(41391))))),
      Rd = (0, nB.lazy)((() => Promise.all([zB.e(80), zB.e(83), zB.e(84), zB.e(82), zB.e(305)]).then((() => zB(41571))))),
      Od = (0, nB.lazy)((() => Promise.all([zB.e(303), zB.e(302), zB.e(85), zB.e(83), zB.e(84), zB.e(82), zB.e(301), zB.e(300), zB.e(81), zB.e(92)]).then((() => zB(41575)))));

    function BI(BB) {
      return UB.gameBridge.query("worldCodeAiChunk", BB)
    }

    function jI() {
      return UB.gameBridge.query("worldCodeAiGameState", null)
    }

    function zI(BB) {
      const {
        gsUrl: jB,
        gameNameWithVariation: zB,
        lobbyName: QB
      } = Bd();
      return (0, tn.postJsonWithMetricsCookiesAndJsonResponse)(`${jB}/code/get-lobby-code`, gn.xk["get-lobby-code"].toBuffer({
        gameNameWithVariation: zB,
        lobbyName: QB,
        path: BB
      }), {
        retries: 1
      })
    }
    let QI = !1;
    const nI = [],
      dI = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      II = (0, nB.memo)((function(BB) {
        var jB, zB;
        let {
          show: QB,
          onOpen: dB,
          onClose: NB,
          isLobbyCode: pB
        } = BB;
        const rB = (0, nB.useRef)(""),
          [mB, kB] = (0, nB.useState)(null),
          GB = (0, nB.useRef)(pB),
          [LB, gB] = (0, nB.useState)({
            message: null,
            type: null
          }),
          [tB, SB] = (0, nB.useState)(""),
          MB = LB.message ? LB : {
            message: tB,
            type: "warning"
          },
          [oB, HB] = (0, nB.useState)(!0),
          [DB, YB] = (0, pd.j)(pd.i),
          [VB, hB] = (0, pd.j)(pd.e),
          [XB, ZB] = (0, nB.useState)(!1),
          [AB, WB] = (0, nB.useState)(!1),
          eB = (0, nB.useRef)(null),
          lB = (0, nB.useRef)(!1);
        (0, nB.useEffect)((() => {
          var BB;
          AB && lB.current && (lB.current = !1, null === (BB = eB.current) || void 0 === BB || BB.focus())
        }), [AB]);
        const wB = (0, Kd.c)(),
          xB = (0, nB.useRef)(null),
          CB = (0, nB.useRef)(null),
          {
            openInGameMenuName: bB,
            openEverythingMenuName: vB,
            worldPanelHud: RB
          } = (0, TB.m)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          OB = BB => {
            QB && (xB.current = BB, qj.current = !0)
          };
        (0, EB.f)("OpenReportMenu", (() => {
          OB("JJ")
        })), (0, EB.f)("OpenStoreFromCodeEditor", (() => {
          OB("store")
        })), (0, nB.useEffect)((() => {
          const BB = xB.current;
          null === BB || "JJ" === BB && ("makeReport" === bB || "makeDiscordReport" === bB) || "store" === BB && null !== vB || (xB.current = null, null === bB && null === vB ? pB ? (CB.current = Qz.current, JB.n.Ly("EditLobbyCode", mB)) : JB.n.Ly("EditCodeBlock", {
            pos: mB,
            canChangePos: GB.current
          }) : (0, md.y)())
        }), [bB, vB, pB, mB]), (0, nB.useEffect)((() => {
          if (QB) return () => {
            CB.current = null
          }
        }), [QB]);
        const [Bj, jj] = function() {
          const [BB, jB] = (0, nB.useState)(QI);
          return (0, EB.f)("CodeEditorAiHelperShown", (BB => {
            jB(BB)
          })), [BB, (0, nB.useCallback)((BB => {
            QI = BB, JB.n.Ly("CodeEditorAiHelperShown", BB)
          }), [])]
        }(), [zj, Qj] = (0, nB.useState)(null), [nj, dj] = (0, nB.useState)([]), [Ij, Nj] = (0, nB.useState)(0), [uj, Uj] = (0, nB.useState)(0), [aj, pj] = (0, nB.useState)(""), sj = (0, nB.useRef)(null), [Jj, mj] = (0, nB.useState)(pB ? bd.h : null), yj = pB || null !== mB, kj = (0, uB.i)("canEditCode"), Gj = (0, uB.i)("canUseDevCreativeItems"), Lj = (0, Jd.l)("welcome"), gj = (0, Jd.l)("docsOverview"), tj = gj ? "docsOverview" : "welcome", Sj = null !== gj && void 0 !== gj ? gj : Lj, Mj = (0, Jd.l)("aiHelperOverview"), Ej = Mj ? "aiHelperOverview" : "welcome", ij = null !== Mj && void 0 !== Mj ? Mj : Lj, qj = (0, nB.useRef)(!1), fj = (0, nB.useRef)(!1), oj = (0, nB.useRef)(null), [Hj, Dj] = (0, nB.useState)(""), [Fj, Yj] = (0, nB.useState)(!1), [Vj, hj] = (0, nB.useState)(null), Xj = (0, qB.k)("connectedGame"), Zj = pB && kj && "classic" === Xj.gameNameWithVariation && !(0, rj.E)(Xj.lobbyName), [Aj, Tj] = (0, nB.useState)(null), [Pj, ej] = (0, nB.useState)({
          [Sn.j]: ""
        }), [wj, xj] = (0, nB.useState)({
          assets: {},
          revision: 0
        }), Kj = (0, nB.useRef)(wj), Cj = (0, nB.useCallback)((BB => {
          var jB;
          BB.revision < Kj.current.revision || (Kj.current = BB, xj(BB), SB(BB.startupError ? `Schematics could not load: ${BB.startupError}` : ""), null === (jB = mz.current) || void 0 === jB || jB.onLobbyFilesChanged({
            ...uz.current,
            ...(0, Vn.o)(BB.assets)
          }))
        }), []), [cj, bj] = (0, nB.useState)(Sn.j), [vj, Rj] = (0, nB.useState)(null), [Oj, Bz] = (0, nB.useState)(null), jz = (0, nB.useRef)(!1), zz = (0, nB.useRef)(null), Qz = (0, nB.useRef)(cj);
        Qz.current = cj;
        const nz = (0, nB.useRef)(vj);
        nz.current = vj;
        const dz = vj ? null : Vj,
          Iz = dz && !dz.engineLocked ? dz.worldCodeEngine : null,
          Nz = (0, nB.useRef)(Oj);
        Nz.current = Oj;
        const uz = (0, nB.useRef)(Pj);
        uz.current = Pj;
        const Uz = (0, nB.useRef)(null),
          az = (0, nB.useRef)(null),
          [pz, rz] = (0, nB.useState)(!1),
          sz = (0, xn.m)(),
          Jz = (0, nB.useRef)([]),
          mz = (0, nB.useRef)(null),
          yz = (0, nB.useRef)(null),
          kz = (0, nB.useRef)(null);

        function Gz(BB) {
          gB(BB), clearTimeout(oj.current), oj.current = setTimeout((() => {
            gB({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const gz = (0, nB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            jz.current && zz.current && (UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.Leave,
              ud: (0, Mn.u)(zz.current),
              Fa: !!BB || null
            }), jz.current = !1, zz.current = null), Tj(null)
          }), []),
          tz = (0, nB.useCallback)((BB => {
            const jB = {
              kind: "lobby",
              path: BB
            };
            zz.current = jB, bj(BB), rB.current = "", UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.Join,
              ud: (0, Mn.u)(jB)
            }), jz.current = !0
          }), []),
          Sz = (0, nB.useCallback)((BB => {
            var jB;
            const zB = null === (jB = yz.current) || void 0 === jB ? void 0 : jB.collabState;
            return zB && "lobby" === zB.docKey.kind && zB.docKey.path === BB && Qz.current === BB ? Promise.resolve({
              doc: zB.doc,
              version: zB.version,
              clientID: zB.clientID,
              docKey: zB.docKey,
              httpConfig: zB.httpConfig
            }) : new Promise(((jB, zB) => {
              const QB = setTimeout((() => {
                  Jz.current = Jz.current.filter((BB => BB !== nB)), zB(new Error(`Timed out joining ${BB}`))
                }), 15e3),
                nB = zB => {
                  "lobby" === zB.docKey.kind && zB.docKey.path === BB && (clearTimeout(QB), Jz.current = Jz.current.filter((BB => BB !== nB)), jB(zB))
                };
              Jz.current.push(nB), Qz.current !== BB ? (gz(!0), tz(BB)) : jz.current || tz(BB)
            }))
          }), [tz, gz]),
          Mz = (0, nB.useCallback)((async function(BB, jB) {
            let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const QB = Date.now();
            let nB = BB in uz.current;
            for (; nB !== jB;) {
              if (Date.now() - QB > zB) throw new Error(`Timed out waiting for lobby path ${BB} present=${jB}`);
              await (0, GQ.M)(50), nB = BB in uz.current
            }
          }), []),
          Ez = (0, nB.useCallback)((BB => {
            const jB = uz.current,
              zB = Sn.j in jB && Sn.k in jB;
            if (!(0, En.l)(BB) || zB) {
              if (Qz.current === BB) {
                var QB;
                const nB = zB && (0, En.l)(BB) ? BB === Sn.j ? Sn.k : Sn.j : null !== (QB = (0, En.e)(jB)) && void 0 !== QB ? QB : Sn.j;
                az.current = {
                  fromPath: BB,
                  toPath: nB
                }, bj(nB)
              }
              UB.gameBridge.send("sendCodeCollab", {
                Nd: Mn.b.DeleteFile,
                ud: (0, Mn.u)({
                  kind: "lobby",
                  path: Qz.current
                }),
                Ya: BB
              })
            }
          }), []),
          iz = (0, nB.useCallback)((BB => {
            CB.current = null, Rj(null), Bz(null), !pB || BB === Qz.current && jz.current || (gz(!0), tz(BB))
          }), [pB, gz, tz]),
          qz = (0, nB.useCallback)(((BB, jB) => {
            const zB = Fn.e[BB],
              QB = zB && jB in zB.files ? jB : "index.ts";
            if (BB !== nz.current || QB !== Nz.current) {
              var nB;
              if (BB !== nz.current) null === (nB = mz.current) || void 0 === nB || nB.stopContinuousSync(), gz(!0);
              Rj(BB), Bz(QB)
            }
          }), [gz]),
          fz = (0, nB.useCallback)((BB => {
            var jB;
            const zB = Qz.current,
              QB = uz.current[zB],
              nB = jz.current && !nz.current && zB in BB && void 0 !== QB ? {
                ...BB,
                [zB]: QB
              } : BB;
            ej(nB);
            const dB = Uz.current;
            if (dB && dB in BB) Uz.current = null, dB !== Qz.current && iz(dB);
            else if (!(Qz.current in BB) && jz.current && !nz.current) {
              var IB;
              iz(null !== (IB = (0, En.e)(BB)) && void 0 !== IB ? IB : Sn.j)
            }
            null === (jB = mz.current) || void 0 === jB || jB.onLobbyFilesChanged({
              ...nB,
              ...(0, Vn.o)(Kj.current.assets)
            })
          }), [iz]),
          oz = (0, nB.useCallback)((() => zI(Qz.current).then((async BB => {
            if (!jz.current || !BB.files) return null;
            fz(BB.files);
            const jB = await jd({
              action: "state"
            });
            return Cj(jB), {
              ...BB.files,
              ...(0, Vn.o)(jB.assets)
            }
          })).catch((BB => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", BB), Gz({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [fz, Cj]),
          Hz = () => {
            NB()
          };
        (0, nB.useEffect)((() => {
          if (SB(""), !QB || !pB) return;
          let BB = !1;
          return Kj.current = {
            assets: {},
            revision: 0
          }, xj(Kj.current), jd({
            action: "state"
          }).then((jB => {
            BB || Cj(jB)
          })).catch((jB => {
            console.error("Could not load project schematics", jB), BB || SB("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            BB = !0
          }
        }), [QB, pB, Cj]);
        const Dz = (0, nB.useCallback)((function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zz.current && UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.Submit,
              ud: (0, Mn.u)(zz.current),
              ...BB ? {
                sd: "keepOpen"
              } : {}
            })
          }), []),
          Fz = (0, nB.useCallback)((() => {
            if (!zz.current || "lobby" !== zz.current.kind) return;
            const BB = Hj.trim();
            (0, qn.u)(BB) ? (UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.ReloadAsVariation,
              ud: (0, Mn.u)(zz.current),
              sd: BB
            }), Yj(!1)) : Gz({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Hj]),
          Yz = (0, nB.useCallback)((BB => {
            UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.SetEngine,
              ud: (0, Mn.u)({
                kind: "lobby",
                path: Qz.current
              }),
              sd: BB
            })
          }), []),
          Vz = (0, nB.useCallback)((BB => {
            if (!nz.current && kj && (GB.current || pB)) {
              if (pB) {
                var jB;
                const zB = (0, En.u)(uz.current, Qz.current),
                  QB = Math.min(Wj.y, Math.max(0, Wj.D - zB)),
                  nB = BB.slice(0, QB);
                return rB.current = nB, ej((BB => ({
                  ...BB,
                  [Qz.current]: nB
                }))), void(null === (jB = mz.current) || void 0 === jB || jB.onDocTextChanged(Qz.current, nB))
              }
              rB.current = BB, pj(BB)
            }
          }), [kj, pB]);
        (0, EB.f)("EditLobbyCode", (BB => {
          var jB;
          FB.featureFlags.canSeePlayerWrittenText && pB && (gz(), kB(BB), rB.current = "", ej({
            [Sn.j]: ""
          }), hj(null), bj(Sn.j), Rj(null), Bz(null), Uz.current = null, az.current = null, null === (jB = mz.current) || void 0 === jB || jB.stopContinuousSync(), dB(), tz(Sn.j))
        })), (0, EB.f)("EditCodeBlock", (BB => {
          let {
            pos: jB,
            canChangePos: zB
          } = BB;
          if (FB.featureFlags.canSeePlayerWrittenText && !pB)
            if (gz(), null !== jB && (jB = [...jB]), kB(jB), GB.current = zB, null !== jB) {
              rB.current = "", pj(""), dB();
              const BB = {
                  kind: "codeBlock",
                  pos: jB
                },
                QB = (0, Mn.u)(BB);
              sj.current !== QB && (sj.current = QB, dj([]), Uj(Ij)), mj((0, bd.e)(QB, [jB[0], jB[1], jB[2]], !!zB)), zz.current = BB, UB.gameBridge.send("sendCodeCollab", {
                Nd: Mn.b.Join,
                ud: (0, Mn.u)(BB)
              }), jz.current = !0
            } else QB && NB()
        })), (0, EB.f)("codeCollabRejoin", (BB => {
          const jB = zz.current ? (0, Mn.u)(zz.current) : null;
          jB && BB.docKey === jB && (rB.current = BB.doc, pB || pj(BB.doc), Tj((jB => jB ? {
            ...jB,
            doc: BB.doc,
            version: BB.version,
            clientID: (0, Dn.b)()
          } : jB)))
        })), (0, EB.f)("codeCollab", (BB => {
          var jB;
          const zB = zz.current ? (0, Mn.u)(zz.current) : null;
          if (BB.type === Mn.e.LobbyFilesChanged && pB) {
            if ("string" !== typeof BB.files) return void oz();
            try {
              fz(JSON.parse(BB.files))
            } catch (UB) {
              console.error("[CodeCollab] Failed to parse lobby files", UB), oz()
            }
            return
          }
          if (BB.type === Mn.e.EngineSettings && pB) return void hj(Id(BB.engineSettings));
          const nB = BB.type === Mn.e.Joined ? (0, Mn.i)(BB.docKey) : null,
            dB = pB && "lobby" === (null === (jB = zz.current) || void 0 === jB ? void 0 : jB.kind) && (0, En.l)(zz.current.path) && "lobby" === (null === nB || void 0 === nB ? void 0 : nB.kind) && (0, En.l)(nB.path);
          if (!zB || BB.docKey === zB || dB)
            if (BB.type !== Mn.e.ForceClose) {
              if (QB)
                if (BB.type === Mn.e.Joined) {
                  var IB;
                  const aB = JSON.parse(BB.peers),
                    sB = BB.existingCursors ? JSON.parse(BB.existingCursors) : [],
                    yB = (0, Dn.b)(),
                    kB = Bd(),
                    {
                      gsUrl: GB,
                      gameNameWithVariation: LB,
                      lobbyName: tB
                    } = kB,
                    SB = null !== (IB = (0, Mn.i)(BB.docKey)) && void 0 !== IB ? IB : zz.current;
                  SB && (zz.current = SB, "lobby" === SB.kind && (bj(SB.path), Qz.current = SB.path));
                  const MB = SB || (pB ? {
                    kind: "lobby",
                    path: Qz.current
                  } : {
                    kind: "codeBlock",
                    pos: mB
                  });

                  function EB(jB) {
                    var zB, QB;
                    if (!jz.current) return;
                    const nB = null !== (zB = jB.code) && void 0 !== zB ? zB : "",
                      dB = null !== (QB = jB.collabVersion) && void 0 !== QB ? QB : 0;
                    rB.current = nB, pB || pj(nB), pB && jB.files ? ej(jB.files) : pB && ej((BB => ({
                      ...BB,
                      [Qz.current]: nB
                    })));
                    const IB = {
                      doc: nB,
                      version: dB,
                      clientID: yB,
                      docKey: MB,
                      peers: aB,
                      editorCount: BB.editorCount,
                      existingCursors: sB,
                      httpConfig: kB
                    };
                    if (Tj(IB), "lobby" === MB.kind) {
                      var NB;
                      const BB = {
                        doc: nB,
                        version: dB,
                        clientID: yB,
                        docKey: MB,
                        httpConfig: kB
                      };
                      for (const jB of [...Jz.current]) jB(BB);
                      null === (NB = mz.current) || void 0 === NB || NB.startWhenReady()
                    }
                    jB.canSeeCode ? (clearTimeout(oj.current), gB({
                      message: null,
                      type: null
                    })) : function(BB) {
                      clearTimeout(oj.current), gB(BB)
                    }(dI);
                    const uB = CB.current;
                    CB.current = null, pB && uB && jB.files && uB in jB.files && uB !== Qz.current && iz(uB)
                  }
                  pB ? zI(Qz.current).then(EB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", BB), gz()
                  })) : (0, tn.postJsonWithMetricsCookiesAndJsonResponse)(`${GB}/code/get-code-block`, gn.xk["get-code-block"].toBuffer({
                    gameNameWithVariation: LB,
                    lobbyName: tB,
                    pos: mB
                  }), {
                    retries: 1
                  }).then(EB).catch((BB => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", BB), gz()
                  }))
                } else if (BB.type === Mn.e.Presence) {
                if (!zB) return;
                const iB = JSON.parse(BB.peers);
                Tj((jB => jB ? {
                  ...jB,
                  peers: iB,
                  editorCount: BB.editorCount
                } : jB))
              }
            } else {
              var uB;
              if (!zB) return;
              QB && pB && "keptOpen" === BB.updates && JB.n.Ly("CodeEditorKeepEdits");
              const qB = zz.current;
              jz.current = !1, zz.current = null, Tj(null);
              if (!pB || "close" === BB.updates) return (0, cd.i)(), void(QB && NB());
              if (!QB) return;
              const fB = uz.current,
                oB = az.current;
              az.current = null;
              const HB = "lobby" === (null === qB || void 0 === qB ? void 0 : qB.kind) && qB.path === (null === oB || void 0 === oB ? void 0 : oB.fromPath),
                DB = oB && (HB || oB.toPath in fB || (0, En.l)(oB.toPath)) ? oB.toPath : Qz.current in fB ? Qz.current : null !== (uB = (0, En.e)(fB)) && void 0 !== uB ? uB : Sn.j;
              tz(DB)
            }
        })), (0, EB.f)("refetchCode", (() => {
          FB.featureFlags.canSeePlayerWrittenText && QB && jz.current && (kj || (gz(), pB ? JB.n.Ly("EditLobbyCode", mB) : JB.n.Ly("EditCodeBlock", {
            pos: mB,
            canChangePos: GB.current
          })))
        }));
        const hz = (0, nB.useCallback)((() => {
            QB && (ZB(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [QB]),
          Xz = (0, nB.useCallback)((() => {
            ZB(!1)
          }), []);
        (0, nB.useEffect)((() => {
          QB && kj && ("docsButton" === Sj && XB ? (0, md.e)("docsButton") : Sj && md.f.includes(Sj) && !XB && (ZB(!0), jj(!1)))
        }), [QB, kj, Sj, XB, jj]);
        const Zz = (0, nB.useCallback)((() => {
          jj(!1)
        }), [jj]);
        (0, nB.useEffect)((() => {
          QB && kj && yj && ("aiHelperButton" === ij && Bj ? (0, md.e)("aiHelperButton") : ij && md.b.includes(ij) && !Bj && (jj(!0), ZB(!1)))
        }), [QB, kj, yj, ij, Bj, jj]), (0, nB.useEffect)((() => {
          if (!QB || !kj) return;
          const BB = pB ? "worldCode" : "codeBlock";
          return (0, md.A)(BB, !0), () => {
            (0, md.A)(BB, !1)
          }
        }), [QB, kj, pB]), (0, nB.useEffect)((() => {
          if (QB) return () => {
            qj.current ? qj.current = !1 : (0, md.y)()
          }
        }), [QB]), (0, nB.useEffect)((() => {
          (0, md.C)("exportButton", !!Gj)
        }), [Gj]);
        const {
          t: Az
        } = (0, cB.D)(), Tz = !Bj && Ij > uj, Pz = Tz ? sB.G : sB.x, Wz = (0, nB.useCallback)(((BB, jB) => {
          JB.n.Ly("CodeEditorGoToLine", {
            path: BB,
            line: jB
          }), iz(BB)
        }), [iz]), ez = (0, nB.useCallback)((BB => {
          kz.current = BB
        }), []), lz = function(BB, jB) {
          const [zB, QB] = (0, nB.useState)(null);
          return (0, nB.useEffect)((() => {
            if (!jB) return void QB(null);
            let zB = !1;
            return wn(BB).then((BB => {
              zB || QB(BB)
            }), (BB => {
              console.error("[CodeEditor] could not collect the imported plugins", BB), zB || QB(null)
            })), () => {
              zB = !0
            }
          }), [BB, jB]), zB
        }(Pj, QB);
        (0, nB.useEffect)((() => {
          lz && vj && !lz.includes(vj) && (Rj(null), Bz(null), pB && !jz.current && tz(Qz.current))
        }), [vj, lz, pB, tz]), yz.current = {
          collabState: Aj,
          ensureJoinedPath: Sz,
          waitForLobbyPath: Mz,
          pullLobbyFiles: oz,
          t: Az,
          canEditCode: !!kj
        }, mz.current || (mz.current = new Rn({
          getLobbyFiles: () => ({
            ...uz.current,
            ...(0, Vn.o)(Kj.current.assets)
          }),
          deleteSchematic: async BB => {
            const jB = await jd({
              action: "remove",
              path: BB,
              expectedRevision: Kj.current.revision
            });
            Cj(jB)
          },
          getActivePath: () => Qz.current,
          getCollabSnapshot: () => {
            var BB;
            if (nz.current) return null;
            const jB = null === (BB = yz.current) || void 0 === BB ? void 0 : BB.collabState;
            return jB ? {
              doc: jB.doc,
              version: jB.version,
              clientID: jB.clientID,
              docKey: jB.docKey,
              httpConfig: jB.httpConfig
            } : null
          },
          replaceActiveDoc: (BB, jB) => {
            var zB, QB;
            return null !== (zB = null === (QB = kz.current) || void 0 === QB ? void 0 : QB.call(kz, BB, jB)) && void 0 !== zB && zB
          },
          ensureJoined: BB => yz.current.ensureJoinedPath(BB),
          createFile: (BB, jB) => {
            !1 !== (null === jB || void 0 === jB ? void 0 : jB.focus) && (Uz.current = BB), UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.CreateFile,
              ud: (0, Mn.u)({
                kind: "lobby",
                path: Qz.current
              }),
              Ya: BB
            })
          },
          renameFile: (BB, jB) => {
            const zB = (0, Mn.u)({
              kind: "lobby",
              path: Qz.current
            });
            Qz.current === BB && (az.current = {
              fromPath: BB,
              toPath: jB
            }, bj(jB)), UB.gameBridge.send("sendCodeCollab", {
              Nd: Mn.b.RenameFile,
              ud: zB,
              Ya: BB,
              Va: jB
            })
          },
          deleteFile: BB => {
            Ez(BB)
          },
          waitForLobbyPath: (BB, jB, zB) => yz.current.waitForLobbyPath(BB, jB, zB),
          pullLobbyFiles: () => yz.current.pullLobbyFiles(),
          setMessage: (BB, jB) => {
            Gz({
              message: BB,
              type: jB
            })
          },
          onUnlinked: () => {
            rz(!1)
          },
          t: BB => yz.current.t(BB),
          canEditCode: () => yz.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: BB,
              lobbyName: jB
            } = UB.gameBridge.latest("connectedGame");
            return (0, xn.d)(BB, jB)
          }
        }));
        const wz = (0, nB.useCallback)((async BB => {
            const jB = mz.current;
            if (!jB) return !1;
            try {
              return await jB.writeLobbyFiles(BB)
            } catch (zB) {
              return console.error("World Code AI: couldn't write the change", zB), !1
            }
          }), []),
          xz = (0, nB.useCallback)((async BB => {
            var jB, zB;
            const QB = null === (jB = BB.find((BB => BB.path === Cd.d))) || void 0 === jB ? void 0 : jB.text,
              nB = zz.current;
            return void 0 !== QB && "codeBlock" === (null === nB || void 0 === nB ? void 0 : nB.kind) && (!(null === (zB = kz.current) || void 0 === zB || !zB.call(kz, (0, Mn.u)(nB), QB)) && (rB.current = QB, pj(QB), !0))
          }), []),
          Kz = (0, nB.useCallback)((async () => {
            try {
              var BB, jB;
              const zB = await zI(Sn.j);
              return !1 === zB.canSeeCode ? null : null !== (BB = zB.files) && void 0 !== BB ? BB : {
                [Sn.j]: null !== (jB = zB.code) && void 0 !== jB ? jB : ""
              }
            } catch (zB) {
              return console.error("World Code AI: couldn't read World Code for a code block", zB), null
            }
          }), []),
          Cz = (0, nB.useMemo)((() => ({
            [Cd.d]: aj
          })), [aj]),
          cz = (0, nB.useCallback)(((BB, jB) => {
            JB.n.Ly("CodeEditorGoToLine", {
              path: Cd.d,
              line: jB
            })
          }), []);
        (0, nB.useEffect)((() => {
          Bj && QB && Uj(Ij)
        }), [Bj, QB, Ij]);
        const bz = (0, nB.useCallback)((() => {
            var BB, jB;
            Dz();
            const zB = (0, FB.isTouchscreen)() ? "open World Code again" : `press ${null!==(BB=null===(jB=lj.w.OpenCodeEditor)||void 0===jB?void 0:jB[0])&&void 0!==BB?BB:"F8"}`,
              QB = pB ? `\ud83e\udd16 Try out your change, then ${zB} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            JB.n.Ly("chat", {
              content: [{
                str: QB,
                style: {
                  color: iB.E.cyanUiText
                }
              }]
            })
          }), [Dz, pB]),
          vz = (0, nB.useCallback)((BB => {
            const jB = mB,
              zB = GB.current;
            pB || !jB || UB.gameBridge.lookup("codeBlockClickable", jB) ? (0, cd.m)(BB, {
              submit: () => {
                Dz(), JB.n.Ly("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: iB.E.cyanUiText
                    }
                  }]
                }), !pB && jB && setTimeout((() => {
                  UB.gameBridge.send("clickCodeBlock", jB)
                }), 1e3)
              },
              reopen: () => {
                (0, PB.m)() || (pB ? JB.n.Ly("EditLobbyCode", jB) : JB.n.Ly("EditCodeBlock", {
                  pos: jB,
                  canChangePos: zB
                }))
              }
            }) : bz()
          }), [Dz, pB, mB, bz]),
          Rz = (0, nB.useCallback)((() => {
            jj(!1)
          }), [jj]),
          Oz = (0, nB.useRef)(Hz);
        Oz.current = Hz;
        const BQ = (0, nB.useCallback)((function(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            JB.n.Ly("WorldCodeAiDraft", {
              text: BB,
              send: jB
            }), Oz.current(), JB.n.Ly("EditLobbyCode", mB)
          }), [mB]),
          jQ = (0, nB.useCallback)((BB => {
            Oz.current(), BB.codeBlock ? JB.n.Ly("EditCodeBlock", {
              pos: [...BB.pos],
              canChangePos: BB.canChangePos
            }) : JB.n.Ly("EditLobbyCode", mB)
          }), [mB]);
        (0, EB.f)("WorldCodeAiDraft", (BB => {
          pB && (Qj(BB), jj(!0))
        }));
        const zQ = !!kj && !!Sj && md.f.includes(Sj),
          QQ = !!kj && !!ij && md.b.includes(ij);
        (0, nB.useEffect)((() => {
          QB && Bj && yj && !zQ && ZB(!1)
        }), [QB, Bj, yj, zQ]);
        const nQ = (0, nB.useCallback)((() => {
            jj(!1), ZB(!1)
          }), [jj]),
          {
            zr: dQ,
            setWorld: IQ,
            toggleWorld: NQ
          } = function(BB) {
            let {
              showAi: jB,
              showDocs: zB,
              showChat: QB,
              hideOtherRightPanels: dB
            } = BB;
            const [IB, NB] = (0, nB.useState)("hidden"), uB = (0, nB.useRef)(null), UB = (0, nB.useCallback)((() => {
              uB.current = null, NB((BB => "hidden" === BB ? BB : (0, Sd.e)() ? "hidden" : "shown"))
            }), []);
            (0, nB.useEffect)((() => {
              (jB || zB) && UB()
            }), [jB, zB, UB]), (0, nB.useEffect)((() => {
              QB && UB()
            }), [QB, UB]);
            const aB = "hidden" !== IB && (0, Sd.e)();
            (0, nB.useLayoutEffect)((() => {
              if (aB) {
                const BB = document.activeElement;
                BB instanceof HTMLElement && BB.closest(".cm-content") && (uB.current = BB, BB.blur())
              } else {
                var BB;
                null === (BB = uB.current) || void 0 === BB || BB.focus(), uB.current = null
              }
            }), [aB]);
            const pB = (0, nB.useCallback)((() => {
              "hidden" === IB ? (NB("shown"), (0, Sd.e)() && dB()) : NB("hidden")
            }), [IB, dB]);
            return {
              zr: IB,
              setWorld: NB,
              toggleWorld: pB
            }
          }({
            showAi: Bj,
            showDocs: XB,
            showChat: AB,
            hideOtherRightPanels: nQ
          }),
          uQ = Bj && null !== Jj && yj,
          UQ = (0, nB.useCallback)((() => {
            Qj(null)
          }), []),
          [aQ, pQ] = (0, nB.useState)(null);
        (0, EB.f)("WorldCodeAiSelection", (BB => {
          QB && (pQ(BB), jj(!0), ZB(!1))
        }));
        const rQ = (0, nB.useCallback)((() => {
          pQ(null)
        }), []);
        (0, EB.f)("chat", (BB => {
          let {
            content: jB
          } = BB;
          if (!pB && null === sj.current) return;
          const zB = Array.isArray(jB) ? jB : [jB],
            QB = zB.some((BB => {
              var jB;
              return (null === BB || void 0 === BB || null === (jB = BB.style) || void 0 === jB ? void 0 : jB.color) === iB.E.redUiText
            })),
            nB = zB.map((BB => {
              var jB;
              const zB = null !== (jB = null === BB || void 0 === BB ? void 0 : BB.str) && void 0 !== jB ? jB : BB;
              return "string" === typeof zB ? zB : ""
            })).join("");
          QB && /world code|error/i.test(nB) && (dj((BB => [...BB, nB].slice(-10))), Nj((BB => BB + 1)), (0, cd.h)(nB))
        })), (0, nB.useEffect)((() => {
          if (!QB || !pB || !sz) return;
          let BB = !1;
          return (async (jB, zB) => {
            const QB = await (null === (jB = mz.current) || void 0 === jB ? void 0 : jB.tryRestoreHandle());
            !BB && QB && (rz(!0), null === (zB = mz.current) || void 0 === zB || zB.startWhenReady())
          })(), () => {
            BB = !0
          }
        }), [QB, pB, sz]), (0, nB.useEffect)((() => {
          var BB;
          QB || (null === (BB = mz.current) || void 0 === BB || BB.stopContinuousSync(), gz(!1), fj.current && (fj.current = !1, UB.gameBridge.send("sendChatMessage", {
            ha: "//export",
            channelName: null
          })))
        }), [QB, gz]);
        const sQ = (0, nB.useCallback)((async () => {
            if (sz && mz.current) try {
              if (!await mz.current.linkFolder()) return;
              rz(!0), await mz.current.startWhenReady()
            } catch (BB) {
              console.error("[WorldCodeDirectorySync] Link failed", BB), Gz({
                message: Az("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [sz, Az]),
          JQ = (0, nB.useCallback)((async () => {
            mz.current && await mz.current.unlinkFolder()
          }), []),
          mQ = (0, nB.useCallback)((() => {
            sz ? pz ? JQ() : sQ() : vQ.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [sz, pz, sQ, JQ]),
          yQ = pB && "hidden" !== dQ;
        return (0, aB.jsxs)(IB.d, {
          className: Lz()("CodeEditorBg", {
            CodeEditorLight: DB,
            WorldShown: "hidden" !== dQ,
            WorldTouchControl: "touchControls" === RB
          }),
          close: Hz,
          escDoesExit: !0,
          show: QB,
          togglePointerLock: !1,
          globallyUniqueKey: pB ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, aB.jsx)(Jd.c, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: Az("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!kj && !pB
          }), (0, aB.jsx)(Jd.c, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, aB.jsxs)(aB.Fragment, {
              children: [(0, aB.jsx)("p", {
                children: Az("codeEditor:tutorialWorldCodeWelcome")
              }), (0, aB.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, aB.jsx)("li", {
                  children: Az("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, aB.jsx)("li", {
                  children: Az("codeEditor:tutorialWorldCodeUseReact")
                }), (0, aB.jsx)("li", {
                  children: Az("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!kj && pB
          }), (0, aB.jsx)("div", {
            className: "CodeEditorTitle",
            children: pB ? "World Code" : "Code Block"
          }), (0, aB.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, aB.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, aB.jsx)(KB.g, {
                tooltipInner: Az(Gj ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: Gj ? void 0 : 0,
                hideTooltip: "exportButton" === Lj,
                children: (0, aB.jsx)(Jd.h, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: Az("codeEditor:tutorialExport"),
                  enabled: !!kj,
                  children: (0, aB.jsx)(sB.m, {
                    className: "CodeEditorButton",
                    disabled: !Gj,
                    onClick: () => {
                      "exportButton" === Lj && ((0, md.e)("exportButton"), qj.current = !0), fj.current = !0, Hz()
                    },
                    padDestructive: !0,
                    children: Az("codeEditor:exportWorld")
                  })
                })
              }), (0, aB.jsx)(xd, {
                zr: dQ,
                setWorld: IQ,
                toggleWorld: NQ,
                aiShown: uQ,
                closeAi: Rz
              })]
            }), (0, aB.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [kj && (0, aB.jsx)(KB.g, {
                tooltipInner: Az("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Lj,
                children: (0, aB.jsx)(Jd.h, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: Az("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, aB.jsx)(sB.f, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: Az("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, md.e)("helpButton"), vQ.NotificationProvider.showCustomPopup({
                        body: BB => (0, aB.jsx)(yd, {
                          close: BB
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, aB.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, aB.jsx)(yB.c, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, aB.jsx)(KB.g, {
                tooltipInner: Az("codeEditor:closeTooltip"),
                children: (0, aB.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Hz()
                  },
                  children: (0, aB.jsx)(sB.j, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, aB.jsx)(Hn, {
            peers: null !== (jB = null === Aj || void 0 === Aj ? void 0 : Aj.peers) && void 0 !== jB ? jB : []
          }), (0, aB.jsxs)("div", {
            className: Lz()("CodeEditorMainArea", {
              WorldCovers: "always" === Md(dQ),
              WorldCoversWhenNarrow: "narrow" === Md(dQ)
            }),
            children: [AB && wB && (0, aB.jsx)(Sd.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                WB(!1)
              },
              children: (0, aB.jsx)(td, {
                inputRef: eB
              })
            }), pB && (0, aB.jsx)(Zn, {
              schematics: wj.assets,
              onManageSchematic: BB => {
                kj && vQ.NotificationProvider.showCustomPopup({
                  body: jB => (0, aB.jsx)(dd, {
                    initialPath: BB,
                    onChanged: Cj,
                    onClose: jB
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Pj,
              activePath: cj,
              canEdit: !!kj,
              directoryLinked: pz,
              pluginNames: null !== lz && void 0 !== lz ? lz : nI,
              activePluginName: vj,
              activePluginFile: Oj,
              onSelect: iz,
              onSelectPlugin: qz,
              onToggleDirectorySync: mQ,
              onCreate: BB => {
                Uz.current = BB, UB.gameBridge.send("sendCodeCollab", {
                  Nd: Mn.b.CreateFile,
                  ud: (0, Mn.u)({
                    kind: "lobby",
                    path: Qz.current
                  }),
                  Ya: BB
                })
              },
              onRename: (BB, jB) => {
                Qz.current === BB && (az.current = {
                  fromPath: BB,
                  toPath: jB
                }, bj(jB)), UB.gameBridge.send("sendCodeCollab", {
                  Nd: Mn.b.RenameFile,
                  ud: (0, Mn.u)({
                    kind: "lobby",
                    path: Qz.current
                  }),
                  Ya: BB,
                  Va: jB
                })
              },
              onRenameFolder: (BB, jB) => {
                const [zB] = (0, En.r)([Qz.current], BB, jB);
                zB && (az.current = {
                  fromPath: zB[0],
                  toPath: zB[1]
                }, bj(zB[1])), UB.gameBridge.send("sendCodeCollab", {
                  Nd: Mn.b.RenameFolder,
                  ud: (0, Mn.u)({
                    kind: "lobby",
                    path: Qz.current
                  }),
                  Ya: BB,
                  Va: jB
                })
              },
              onDelete: Ez
            }), (0, aB.jsx)("div", {
              className: Lz()("CodeEditorMessage", {
                CodeEditorMessageHidden: !MB.message,
                CodeEditorMessageSuccess: "success" === MB.type
              }),
              children: MB.message && (0, aB.jsx)("div", {
                className: "CodeEditorMessageText",
                children: MB.message
              })
            }), (0, aB.jsx)(nB.Suspense, {
              fallback: (0, aB.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, aB.jsx)(fB.e, {})
              }),
              children: (0, aB.jsx)(vd, {
                isLobbyCode: pB,
                code: Aj ? Aj.doc : rB.current,
                files: pB ? Pj : void 0,
                activePath: pB ? cj : void 0,
                pluginName: vj,
                pluginFile: Oj,
                pluginSource: vj && Oj ? null === (zB = Fn.e[vj]) || void 0 === zB ? void 0 : zB.files[Oj] : void 0,
                onChange: Vz,
                canEditCode: kj,
                setTemporaryMessage: Gz,
                close: Hz,
                showTooltips: oB,
                lightMode: DB,
                collabState: Aj,
                setActiveDocReplacer: ez,
                showAiHints: yj && VB,
                canAiChangeCode: !!kj && (pB || !!GB.current),
                onRemoteDocChange: BB => {
                  var jB;
                  (rB.current = BB, pB) ? (ej((jB => ({
                    ...jB,
                    [Qz.current]: BB
                  }))), null === (jB = mz.current) || void 0 === jB || jB.onDocTextChanged(Qz.current, BB)) : pj(BB)
                }
              })
            }), (XB || uQ || "hidden" !== dQ) && (0, aB.jsxs)(Ed, {
              zr: dQ,
              worldPanel: (0, aB.jsx)(ld, {
                shown: dQ,
                setShown: IQ,
                canInsertCode: !!kj && !vj
              }),
              closeWorld: () => {
                IQ("hidden")
              },
              aiShown: uQ,
              defaultWidth: XB ? "40%" : "max(18rem, 36%)",
              children: [XB && (0, aB.jsx)(Sd.c, {
                onClose: zQ ? void 0 : Xz,
                children: (0, aB.jsx)(nB.Suspense, {
                  fallback: (0, aB.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, aB.jsx)(fB.e, {})
                  }),
                  children: (0, aB.jsx)(Rd, {
                    popOutDocs: hz,
                    hideDocs: Xz,
                    tutorialEnabled: !!kj
                  })
                })
              }), uQ && (0, aB.jsx)(Sd.c, {
                onClose: QQ ? void 0 : Rz,
                children: (0, aB.jsx)(nB.Suspense, {
                  fallback: (0, aB.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, aB.jsx)(fB.e, {})
                  }),
                  children: (0, aB.jsx)(Od, {
                    target: Jj,
                    chatKey: `${Xj.gameNameWithVariation}/${Xj.lobbyName}/aiHelper`,
                    historyKey: `${Xj.gameNameWithVariation}/${Xj.lobbyName}/${Jj.key}`,
                    files: Jj.codeBlock ? Cz : Pj,
                    activePath: Jj.codeBlock ? Cd.d : cj,
                    canEdit: !!kj && (Jj.codeBlock ? !!GB.current : !vj),
                    isLoaded: null !== Aj,
                    errors: nj,
                    errorCount: Ij,
                    applyFiles: Jj.codeBlock ? xz : wz,
                    submit: bz,
                    testRun: vz,
                    close: Rz,
                    goToLine: Jj.codeBlock ? cz : Wz,
                    openWorldCode: Jj.codeBlock ? BQ : void 0,
                    readWorldCode: Jj.codeBlock ? Kz : void 0,
                    viewChunk: BI,
                    viewGameState: jI,
                    openTarget: kj ? jQ : void 0,
                    draft: zj,
                    onDraftUsed: UQ,
                    selection: aQ,
                    onSelectionUsed: rQ
                  }, Jj.key)
                })
              })]
            })]
          }), (null === dz || void 0 === dz ? void 0 : dz.fallback) && (0, aB.jsx)(Nd, {
            fallback: dz.fallback,
            onGoToLine: Wz
          }), (0, aB.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, aB.jsx)(KB.g, {
              tooltipInner: Az(DB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, aB.jsx)(sB.f, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: Az(DB ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  YB(!DB)
                },
                children: (0, aB.jsx)(yB.c, {
                  name: DB ? "moon" : "sun-bright"
                })
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az(yQ ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.m, {
                className: "CodeEditorButton",
                onClick: () => {
                  Dz(yQ)
                },
                padDefaultFocus: !0,
                children: Az("codeEditor:submitCode")
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az(XB ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === Sj || "hideDocsButton" === Sj,
              children: (0, aB.jsx)(Jd.h, {
                tutorial: tj,
                step: XB ? "hideDocsButton" : "docsButton",
                text: Az(XB ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!kj,
                placement: "top",
                waitForClick: !0,
                onPrevious: XB && "welcome" === tj ? Xz : void 0,
                children: (0, aB.jsx)(sB.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, md.e)(XB ? "hideDocsButton" : "docsButton"), ZB(!XB), jj(!1)
                  },
                  children: Az(XB ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), yj && (0, aB.jsx)(Jd.h, {
              tutorial: Ej,
              step: Bj ? "hideAiHelperButton" : "aiHelperButton",
              text: Az(Bj ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Ej ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!kj,
              placement: "top",
              waitForClick: !0,
              onPrevious: Bj && "welcome" === Ej ? Zz : void 0,
              children: (0, aB.jsx)(Pz, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, md.e)(Bj ? "hideAiHelperButton" : "aiHelperButton"), jj(!Bj), ZB(!1)
                },
                children: Bj ? "Hide AI Helper" : Tz ? "Fix error with AI" : "AI Helper"
              })
            }), wB && (0, aB.jsx)(KB.g, {
              tooltipInner: Az(AB ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.x, {
                className: "CodeEditorButton",
                onClick: () => {
                  lB.current = !AB, WB(!AB)
                },
                children: Az(AB ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az("hidden" === dQ ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.x, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: NQ,
                children: Az("hidden" === dQ ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  JB.n.Ly("FormatCode")
                },
                children: Az("codeEditor:formatCode")
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(rB.current).then((() => {
                    Gz({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    Gz({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: Az("codeEditor:copyCode")
              })
            }), (0, aB.jsx)(KB.g, {
              tooltipInner: Az(oB ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.f, {
                className: "CodeEditorButton",
                onClick: () => {
                  HB(!oB)
                },
                children: Az(oB ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !pB && (0, aB.jsx)(KB.g, {
              tooltipInner: Az("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Lj,
              children: (0, aB.jsx)(Jd.h, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: Az("codeEditor:tutorialWorldCodeButton"),
                enabled: !!kj,
                placement: "top",
                waitForClick: !0,
                children: (0, aB.jsx)(sB.x, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Lj && ((0, md.e)("worldCodeButton"), qj.current = !0), Hz(), JB.n.Ly("EditLobbyCode", mB)
                  },
                  children: Az("codeEditor:worldCode")
                })
              })
            }), (Zj || Iz || yj) && (0, aB.jsx)(KB.g, {
              tooltipInner: Az("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, aB.jsx)(sB.f, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  Yj(!0)
                },
                children: (0, aB.jsx)(yB.c, {
                  name: "ellipsis"
                })
              })
            })]
          }), Fj && (0, aB.jsx)(OQ.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              Yj(!1)
            },
            body: (0, aB.jsx)(sd, {
              engine: Iz,
              onSetEngine: Yz,
              aiHints: yj ? {
                shown: VB,
                setShown: hB
              } : null,
              variation: Zj ? {
                name: Hj,
                setName: Dj,
                reload: Fz
              } : null
            })
          })]
        })
      })),
      NI = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function uI(BB) {
      return "inventory" === BB
    }
    const UI = (0, nB.memo)((function() {
      const {
        openEverythingMenuName: BB,
        openInGameMenuName: jB
      } = (0, TB.m)(["openEverythingMenuName", "openInGameMenuName"]), zB = (0, qB.k)("fullInventory"), dB = (0, nB.useRef)(null), IB = (0, Hj.o)();
      (0, EB.f)("toggleMenu", (BB => {
        var jB;
        if (!IB.shown) return;
        const zB = TB.c.get("openInGameMenuName");
        let QB = BB.split("|")[0];
        const nB = null !== (jB = BB.split("|")[1]) && void 0 !== jB ? jB : null;
        ("closeCurrentMenu" === nB && zB || QB === zB) && (dB.current = null, QB = null);
        const NB = "closeCurrentMenu" === nB ? null : nB;
        dB.current !== NB && (dB.current = NB), null !== QB && (0, Un.u)(Un.e, {
          keepsMovement: uI(QB)
        }), TB.c.set({
          openInGameMenuName: QB
        })
      }));
      const NB = (0, nB.useCallback)((BB => () => {
          JB.n.Ly("toggleMenu", BB)
        }), []),
        uB = (0, nB.useRef)({
          cantCrouchIfNotFullscreen: NB("cantCrouchIfNotFullscreen"),
          makeReport: NB("makeReport"),
          makeDiscordReport: NB("makeDiscordReport"),
          editBook: NB("editBook"),
          editNameTag: NB("editNameTag"),
          inventory: NB("inventory"),
          inviteLink: NB("inviteLink"),
          writeOnBoard: NB("writeOnBoard"),
          codeEditor: NB("codeEditor"),
          lobbyCodeEditor: NB("lobbyCodeEditor"),
          customLobbyBlockEditor: NB("customLobbyBlockEditor"),
          ironChestPasskeyInput: NB("ironChestPasskeyInput"),
          petUi: NB("petUi")
        }),
        UB = (0, nB.useCallback)((() => {
          TB.c.set({
            openInGameMenuName: null
          })
        }), []),
        pB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        if (jB) {
          var BB;
          (0, Un.u)(Un.e, {
            keepsMovement: uI(jB)
          }), pB.current = NI.has(jB) ? null !== (BB = TB.c.get("openEverythingMenuName")) && void 0 !== BB ? BB : pB.current : null, TB.c.set({
            openEverythingMenuName: null
          })
        } else {
          const BB = pB.current;
          pB.current = null, null !== BB && null === TB.c.get("openEverythingMenuName") && TB.c.set({
            openEverythingMenuName: BB
          }), dB.current = null, (0, Un.s)(Un.e)
        }
      }), [jB]), (0, nB.useEffect)((() => {
        null !== BB && UB()
      }), [BB, UB]), (0, aB.jsxs)(aB.Fragment, {
        children: [(0, aB.jsx)(QB.g, {
          show: "clientGame" === jB
        }), (0, aB.jsx)(CQ, {
          show: "cantCrouchIfNotFullscreen" === jB,
          onOpen: uB.current.cantCrouchIfNotFullscreen,
          onClose: UB
        }), (0, aB.jsx)(nn, {
          show: "makeReport" === jB,
          onOpen: uB.current.makeReport,
          onClose: UB
        }), (0, aB.jsx)(un, {
          show: "makeDiscordReport" === jB,
          onOpen: uB.current.makeDiscordReport,
          onClose: UB
        }), (0, aB.jsx)(jz, {
          show: "editBook" === jB,
          onOpen: uB.current.editBook,
          onClose: UB
        }), (0, aB.jsx)(Oj, {
          show: "editNameTag" === jB,
          onOpen: uB.current.editNameTag,
          onClose: UB
        }), zB && (0, aB.jsx)(wQ, {
          show: "inventory" === jB,
          onOpen: uB.current.inventory,
          onClose: UB,
          variation: dB.current
        }), (0, aB.jsx)(Dj, {
          show: "inviteLink" === jB,
          onClose: UB,
          option: dB.current
        }), (0, aB.jsx)(hB, {
          show: "retentionFeatures" === jB,
          onClose: UB
        }), (0, aB.jsx)(Rj, {
          show: "writeOnBoard" === jB,
          onOpen: uB.current.writeOnBoard,
          onClose: UB
        }), (0, aB.jsx)(II, {
          show: "lobbyCodeEditor" === jB,
          onOpen: uB.current.lobbyCodeEditor,
          onClose: UB,
          isLobbyCode: !0
        }), (0, aB.jsx)(II, {
          show: "codeEditor" === jB,
          onOpen: uB.current.codeEditor,
          onClose: UB,
          isLobbyCode: !1
        }), (0, aB.jsx)(pn, {
          show: "customLobbyBlockEditor" === jB,
          onOpen: uB.current.customLobbyBlockEditor,
          onClose: UB
        }), (0, aB.jsx)(tz, {
          show: "ironChestPasskeyInput" === jB,
          onOpen: uB.current.ironChestPasskeyInput,
          onClose: UB
        }), (0, aB.jsx)(kn, {
          togglePointerLock: !0,
          show: "petUi" === jB,
          onOpen: uB.current.petUi,
          onClose: UB
        })]
      })
    }))
  },
  36577: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => ZI
    });
    zB(36583);
    var QB = zB(1859),
      nB = zB(62),
      dB = zB(1091),
      IB = zB.n(dB),
      NB = zB(3834),
      uB = zB(1471),
      UB = zB(1952),
      aB = zB(1148);

    function pB() {
      const BB = 2e3,
        [jB, zB] = (0, nB.useState)(null),
        [QB, dB] = (0, nB.useState)(null),
        pB = (0, nB.useRef)(null);
      (0, uB.f)("showBottomMessage", (jB => {
        let {
          message: zB,
          timeoutLength: QB = BB,
          type: nB
        } = jB;
        dB({
          message: zB,
          type: nB
        }), clearTimeout(pB.current), pB.current = setTimeout((() => {
          dB(null)
        }), QB)
      })), (0, uB.f)("showPermanentBottomMessage", (BB => {
        zB(BB)
      })), (0, nB.useEffect)((() => ((0, NB.c)((() => {
        zB(null)
      })), () => {
        clearTimeout(pB.current)
      })), []);
      const rB = QB || jB;
      return rB ? (0, aB.jsx)("div", {
        className: IB()("BottomScreenMessage", rB.type),
        children: (0, aB.jsx)(UB.e, {
          text: rB.message
        })
      }) : null
    }
    var rB = zB(2443),
      sB = zB(1982),
      JB = zB(1543),
      mB = zB(2525);

    function yB() {
      let BB;
      const jB = () => {
          clearTimeout(BB), BB = setTimeout((() => {
            sB.gameBridge.latest("connectedGame").replay || (sB.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, JB.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        zB = () => {
          clearTimeout(BB)
        };
      return window.addEventListener("focus", zB), window.addEventListener("blur", jB), () => {
        window.removeEventListener("blur", jB), window.removeEventListener("focus", zB), clearTimeout(BB)
      }
    }
    var kB = zB(1169),
      GB = zB(3219),
      LB = zB(363),
      gB = zB(2516),
      tB = zB(31),
      SB = zB(2006),
      MB = zB(41),
      EB = zB(2025),
      iB = zB(28),
      qB = zB(2027),
      fB = zB(1418),
      oB = zB(8814),
      HB = zB(2059),
      DB = zB(1240);
    const FB = (0, nB.memo)((function() {
      const {
        isTouchScreen: BB,
        loadingOverlayVisible: jB,
        openInGameMenuName: zB,
        openEverythingMenuName: QB
      } = (0, iB.m)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), dB = (0, fB.u)();
      (0, GB.d)();
      const NB = (0, gB.i)("showBasicMovementControls"),
        [uB, UB] = (0, nB.useState)("movement"),
        pB = "movement" === uB,
        rB = dB && !1 !== NB;
      (0, nB.useEffect)((() => {
        "padActions" !== uB || rB || UB("done")
      }), [uB, rB]);
      const sB = jB || null !== zB || null !== QB,
        JB = (0, nB.useRef)({
          step: uB,
          ms: 0
        });
      return (0, nB.useEffect)((() => {
        if (sB || "done" === uB) return;
        JB.current.step !== uB && (JB.current = {
          step: uB,
          ms: 0
        });
        const BB = JB.current,
          jB = performance.now(),
          zB = setTimeout((() => {
            UB("movement" === uB && (0, fB.l)() ? "padActions" : "done")
          }), 7e3 - BB.ms);
        return () => {
          clearTimeout(zB), BB.ms += performance.now() - jB
        }
      }), [sB, uB]), MB.j.getItem(LB.yb) > 2 ? (0, aB.jsx)(XB, {
        showingMovementControls: !1
      }) : (0, aB.jsxs)(aB.Fragment, {
        children: [BB && !dB || !pB || !1 === NB ? null : (0, aB.jsxs)("div", {
          className: IB()("ControlsTutorialDiv", {
            Covered: sB
          }),
          children: [(0, aB.jsx)(YB, {}), (0, aB.jsx)(hB, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, aB.jsx)(hB, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === uB && rB && (0, aB.jsx)(VB, {
          covered: sB
        }), (0, aB.jsx)(XB, {
          showingMovementControls: "done" !== uB
        })]
      })
    }));

    function YB() {
      const BB = (0, fB.u)();
      return (0, aB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, aB.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), BB && (0, aB.jsx)(qB.b, {
          noaAction: "forward"
        }), !BB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, aB.jsx)(qB.b, {
              noaAction: "forward"
            })
          }), (0, aB.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, aB.jsx)(qB.b, {
              noaAction: "left"
            }), (0, aB.jsx)(qB.b, {
              noaAction: "backward"
            }), (0, aB.jsx)(qB.b, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function VB(BB) {
      let {
        covered: jB
      } = BB;
      const {
        t: zB
      } = (0, DB.D)(), QB = (0, gB.i)("useInventory");
      return (0, aB.jsxs)("div", {
        className: IB()("ControlsTutorialDiv", {
          Covered: jB
        }),
        children: [(0, aB.jsx)(hB, {
          header: zB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, aB.jsx)(hB, {
          header: zB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== QB && (0, aB.jsx)(hB, {
          header: zB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, aB.jsx)(hB, {
          header: zB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function hB(BB) {
      let {
        header: jB,
        noaAction: zB
      } = BB;
      return (0, aB.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, aB.jsx)("div", {
          className: "KeyHeader",
          children: jB
        }), (0, aB.jsx)(qB.b, {
          noaAction: zB
        })]
      })
    }

    function XB(BB) {
      let {
        showingMovementControls: jB
      } = BB;
      const {
        isTouchScreen: zB
      } = (0, iB.m)(["isTouchScreen"]), QB = (0, fB.u)(), dB = (0, HB.c)("OpenShop"), [IB, NB] = (0, nB.useState)(!1), uB = `SeenShopControls|${(0,EB.h)("connectedGame",(BB=>BB.gameNameWithVariation))}`, UB = () => (!(0, fB.l)() || null !== (0, oB.d)("OpenShop")) && !MB.j.getItem(uB) && SB.c.get("shopInfo") && !jB, pB = () => (NB(!0), MB.j.setItem(uB, !0), (0, fB.l)() || tB.n.Ly("showShopTouchTutorial"), setTimeout((() => {
        NB(!1)
      }), 7e3));
      (0, nB.useEffect)((() => {
        let BB;
        const jB = tB.n.subscribe("showShopTutorial", (() => {
          UB() && (BB = pB())
        }));
        return () => {
          clearTimeout(BB), tB.n.unsubscribe(jB)
        }
      }), [jB]);
      const rB = (0, nB.useRef)();
      return (0, gB.h)("currencyAmounts", (BB => {
        if (UB()) {
          let zB = !1;
          const QB = SB.c.get("shopInfo");
          for (const nB in QB) {
            for (const dB in QB[nB].items) {
              var jB;
              const IB = QB[nB].items[dB];
              if (void 0 !== IB.currency && BB[IB.currency] && IB.cost <= BB[IB.currency].amount && (null === (jB = IB.hidden) || void 0 === jB || !jB)) {
                zB = !0;
                break
              }
            }
            if (zB) break
          }
          zB && (rB.current = pB())
        }
      })), (0, nB.useEffect)((() => () => {
        clearTimeout(rB.current)
      }), [jB]), !IB || QB && !dB ? null : (0, aB.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: zB && !QB ? null : (0, aB.jsx)(hB, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var ZB = zB(1388),
      AB = zB(1108);
    const TB = (0, nB.memo)((function() {
      return (0, GB.d)(), (0, aB.jsx)(PB, {})
    }));
    class PB extends nB.Component {
      constructor(BB) {
        super(BB), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = tB.n.subscribe("TopRightHelper", (BB => {
          this.showQueue.push(BB), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        tB.n.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(BB, jB) {
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
        let BB, jB, zB, QB, nB, dB = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, BB = "slideIn") : "slideOut" === this.state.currState ? BB = "slideOut" : null === this.currMessage && (dB = !1), this.currMessage) {
          const dB = this.currMessage.color || "rgb(102, 102, 102)";
          jB = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === BB ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, zB = {
            backgroundColor: dB
          }, QB = {
            animation: "2s " + ("slideOut" === BB ? "CloseNotification" : "ExpandNotification")
          }, nB = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === BB ? "textDisappear" : "textAppear")
          }
        }
        return dB ? (0, aB.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...jB
          },
          children: [(0, aB.jsx)("div", {
            className: "LeftSide",
            style: zB,
            children: (0, aB.jsx)(AB.c, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, aB.jsx)("div", {
            className: "RightSide",
            style: QB,
            children: (0, aB.jsx)("div", {
              className: "HelperText",
              style: nB,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var WB = zB(36590),
      eB = zB(1442);
    const lB = (0, eB.f)((BB => BB.PadSneakChip));

    function wB(BB) {
      const [jB, zB, QB] = function(BB) {
        const jB = parseInt(BB.substring(1), 16),
          zB = (jB >> 16) / 255,
          QB = (jB >> 8 & 255) / 255,
          nB = (255 & jB) / 255,
          dB = Math.max(zB, QB, nB),
          IB = Math.min(zB, QB, nB),
          NB = (dB + IB) / 2,
          uB = dB - IB;
        if (0 === uB) return [0, 0, NB];
        const UB = uB / (1 - Math.abs(2 * NB - 1));
        let aB;
        aB = dB === zB ? (QB - nB) / uB % 6 : dB === QB ? (nB - zB) / uB + 2 : (zB - QB) / uB + 4;
        return [(60 * aB + 360) % 360, UB, NB]
      }(BB), nB = 0 === zB ? 0 : Math.min(.6, zB + .03), dB = QB > .5 ? -1 : 1, IB = xB(QB + .09 * dB);
      return {
        panel: BB,
        slot: KB(jB, nB, IB),
        slotSelected: KB(jB, nB, xB(IB + .2 * dB)),
        slotUnavailable: KB(jB, nB, xB(QB + -.1 * dB))
      }
    }

    function xB(BB) {
      return Math.min(1, Math.max(0, BB))
    }

    function KB(BB, jB, zB) {
      const QB = (1 - Math.abs(2 * zB - 1)) * jB,
        nB = QB * (1 - Math.abs(BB / 60 % 2 - 1)),
        dB = zB - QB / 2;
      let IB;
      return IB = BB < 60 ? [QB, nB, 0] : BB < 120 ? [nB, QB, 0] : BB < 180 ? [0, QB, nB] : BB < 240 ? [0, nB, QB] : BB < 300 ? [nB, 0, QB] : [QB, 0, nB], "#" + IB.map((BB => function(BB) {
        return Math.round(255 * BB).toString(16).padStart(2, "0")
      }(BB + dB))).join("")
    }
    var CB = zB(36610),
      cB = zB(4369),
      bB = zB(2482),
      vB = zB(2491),
      RB = zB(36665),
      OB = zB(4909),
      Bj = zB(1501),
      jj = zB(658);

    function zj(BB, jB, zB, QB) {
      BB.style.display = "";
      const nB = BB.offsetWidth,
        dB = BB.offsetHeight,
        IB = Math.min(Math.max((jB.left + jB.right) / 2 - nB / 2, 8), window.innerWidth - 8 - nB);
      let NB = jB.top - zB - dB;
      const uB = [...QB].sort(((BB, jB) => jB.top - BB.top));
      for (const UB of uB) IB < UB.right && IB + nB > UB.left && NB < UB.bottom && NB + dB > UB.top && (NB = UB.top - 8 - dB);
      return NB < 8 ? (BB.style.display = "none", null) : (BB.style.transform = `translate(${IB-jB.left}px, ${NB-jB.top}px)`, {
        left: IB,
        top: NB,
        right: IB + nB,
        bottom: NB + dB
      })
    }

    function Qj(BB) {
      const jB = [];
      for (const zB of document.querySelectorAll(BB)) {
        const BB = zB.getBoundingClientRect();
        BB.width > 0 && "visible" === getComputedStyle(zB).visibility && jB.push(BB)
      }
      return jB
    }

    function nj(BB, jB) {
      return BB.clientX >= jB.left - 8 && BB.clientX <= jB.right + 8 && BB.clientY >= jB.top - 8 && BB.clientY <= jB.bottom + 8
    }
    var dj = zB(8888);
    class Ij {
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
      hold(BB, jB) {
        this.suspended || (this.offered ? jB || this.setPhase("idle") : BB && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : BB || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(BB) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const jB = this.phase;
        this.phase = BB, this.deps.onPhase(BB, jB)
      }
    }
    const Nj = 25 * Math.PI / 180,
      uj = 45 * Math.PI / 180;
    class Uj extends Ij {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(BB, jB, zB) {
        this.speed = zB;
        const QB = Math.hypot(BB, jB),
          nB = QB > 0 ? Math.acos(Math.min(1, -jB / QB)) : Math.PI;
        this.hold(QB >= .8 && nB <= Nj, QB >= .5 && nB <= uj)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var aj = zB(1316);

    function pj(BB, jB) {
      const zB = (0, nB.useRef)(null),
        QB = (0, nB.useRef)(jB);
      return QB.current = jB, (0, nB.useEffect)((() => {
        if (!BB) return;
        const {
          create: jB,
          elementRef: nB,
          ringRef: dB,
          classPrefix: IB,
          keptBehindMovementPanels: NB,
          resizeEnds: uB
        } = QB.current, UB = {
          charging: `${IB}Charging`,
          armed: `${IB}Armed`,
          ready: `${IB}Ready`,
          locked: `${IB}Locked`
        };
        let aB = null;
        const pB = jB({
          onPhase: (BB, jB) => {
            const zB = nB.current;
            if (null !== zB) {
              for (const [jB, QB] of Object.entries(UB)) zB.classList.toggle(QB, jB === BB);
              if ("charging" === BB) aB = dB.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === BB) {
                var IB;
                null === (IB = aB) || void 0 === IB || IB.cancel(), aB = null
              }
              var NB, uB;
              if ("armed" === BB && "charging" === jB && QB.current.onArmed(), "ready" === BB && dj.h.play("lockReady"), "locked" === BB) dj.h.play("lockLocked"), null === (NB = (uB = QB.current).onLocked) || void 0 === NB || NB.call(uB);
              "locked" === jB && QB.current.onUnlocked()
            }
          }
        });
        zB.current = pB;
        const rB = () => {
            pB.suspend()
          },
          sB = () => {
            "hidden" === document.visibilityState && rB()
          },
          JB = () => {
            uB ? pB.suspend() : pB.suspendArming()
          },
          mB = (0, aj.l)((BB => {
            let {
              keepsMovement: jB
            } = BB;
            jB && NB ? pB.suspendArming() : rB()
          }));
        return document.addEventListener("visibilitychange", sB), window.addEventListener("blur", rB), window.addEventListener("resize", JB), () => {
          mB(), document.removeEventListener("visibilitychange", sB), window.removeEventListener("blur", rB), window.removeEventListener("resize", JB), pB.cancel(), zB.current = null
        }
      }), [BB]), (0, EB.d)("localPlayerAliveSet", (() => {
        var BB;
        null === (BB = zB.current) || void 0 === BB || BB.suspend()
      })), zB
    }
    const rj = "data-joystick-tap";

    function sj(BB) {
      var jB, zB;
      const QB = null === (jB = (zB = BB).closest) || void 0 === jB ? void 0 : jB.call(zB, `[${rj}]`);
      return QB instanceof HTMLElement ? QB : null
    }
    class Jj {
      constructor() {
        this.tap = null
      }
      get touchId() {
        var BB, jB;
        return null !== (BB = null === (jB = this.tap) || void 0 === jB ? void 0 : jB.id) && void 0 !== BB ? BB : null
      }
      land(BB, jB) {
        null === this.tap && (this.tap = {
          key: BB,
          id: jB.identifier,
          x: jB.clientX,
          y: jB.clientY
        }, (0, Bj.i)(BB, !0))
      }
      slidFrom(BB) {
        const jB = this.tap,
          zB = jB ? BB.find((BB => BB.identifier === jB.id)) : void 0;
        return !zB || Math.hypot(zB.clientX - jB.x, zB.clientY - jB.y) <= 12 ? null : (this.end(!1), {
          identifier: jB.id,
          clientX: jB.x,
          clientY: jB.y
        })
      }
      end(BB) {
        const jB = this.tap;
        jB && (this.tap = null, (0, Bj.i)(jB.key, !1), BB && jB.key.click())
      }
    }
    var mj = zB(2559),
      yj = zB(2574),
      kj = zB(1162),
      Gj = zB(3517),
      Lj = zB(2585);

    function gj(BB, jB, zB) {
      const QB = function(BB, jB, zB) {
        const QB = zB.map((zB => ({
            left: Math.max(0, zB.left),
            top: Math.max(0, zB.top),
            right: Math.min(BB, zB.right),
            bottom: Math.min(jB, zB.bottom)
          }))).filter((BB => BB.right > BB.left && BB.bottom > BB.top)),
          nB = [...new Set([0, jB, ...QB.flatMap((BB => [BB.top, BB.bottom]))])].sort(((BB, jB) => BB - jB)),
          dB = [];
        for (let IB = 0; IB < nB.length - 1; IB++) {
          const jB = nB[IB],
            zB = nB[IB + 1],
            NB = QB.filter((BB => BB.top <= jB && BB.bottom >= zB)).map((BB => [BB.left, BB.right])).sort(((BB, jB) => BB[0] - jB[0]));
          let uB = 0;
          for (const [BB, QB] of NB) BB > uB && dB.push({
            left: uB,
            top: jB,
            right: BB,
            bottom: zB
          }), uB = Math.max(uB, QB);
          uB < BB && dB.push({
            left: uB,
            top: jB,
            right: BB,
            bottom: zB
          })
        }
        return dB
      }(BB, jB, zB);
      if (0 === QB.length) return 'path("M0 0Z")';
      if (1 === QB.length && 0 === QB[0].left && 0 === QB[0].top && QB[0].right === BB && QB[0].bottom === jB) return "";
      const nB = BB => Math.round(10 * BB) / 10;
      return `path("${QB.map((BB=>`M${nB(BB.left)} ${nB(BB.top)}H${nB(BB.right)}V${nB(BB.bottom)}H${nB(BB.left)}Z`)).join("")}")`
    }

    function tj(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const nB = [],
        dB = 2 * zB / QB;
      for (let IB = 0; IB < QB; IB++) {
        const QB = jB - zB + IB * dB,
          NB = QB + dB,
          uB = Math.min(Math.max(jB, QB), NB) - jB,
          UB = Math.sqrt(Math.max(0, zB * zB - uB * uB));
        nB.push({
          left: BB - UB,
          top: QB,
          right: BB + UB,
          bottom: NB
        })
      }
      return nB
    }
    var Sj = zB(8901),
      Mj = zB(36646);

    function Ej(BB) {
      const jB = BB.getBoundingClientRect(),
        zB = {
          left: jB.left,
          top: jB.top,
          right: jB.right,
          bottom: jB.bottom
        },
        QB = (0, RB.f)(BB);
      if (QB.whole) return [zB];
      const nB = function(BB) {
          const jB = BB.right - BB.left,
            zB = BB.bottom - BB.top,
            QB = Math.min(jB, zB) / 2,
            nB = (BB.left + BB.right) / 2,
            dB = (BB.top + BB.bottom) / 2;
          return jB >= zB ? [{
            left: BB.left + QB,
            top: BB.top,
            right: BB.right - QB,
            bottom: BB.bottom
          }, ...tj(BB.left + QB, dB, QB), ...tj(BB.right - QB, dB, QB)] : [{
            left: BB.left,
            top: BB.top + QB,
            right: BB.right,
            bottom: BB.bottom - QB
          }, ...tj(nB, BB.top + QB, QB), ...tj(nB, BB.bottom - QB, QB)]
        }(zB),
        dB = QB.keyBox;
      if (dB) {
        const BB = (zB.left + zB.right) / 2,
          jB = (zB.top + zB.bottom) / 2;
        nB.push({
          left: BB - dB.width / 2,
          top: jB - dB.height / 2,
          right: BB + dB.width / 2,
          bottom: jB + dB.height / 2
        })
      }
      return nB
    }

    function ij(BB) {
      const jB = BB.getBoundingClientRect();
      return 0 === jB.width && 0 === jB.height || "visible" !== getComputedStyle(BB).visibility ? [] : [(0, Sj.t)(jB, 44)]
    }

    function qj(BB, jB) {
      (0, nB.useEffect)((() => {
        const zB = BB.current;
        if (!jB || !zB) return;
        const QB = () => {
          const BB = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            jB = BB.find((BB => BB.classList.contains("TouchInteractHit")));
          jB !== nB && (nB && dB.unobserve(nB), nB = jB, jB && dB.observe(jB));
          const QB = Array.from(document.querySelectorAll(Lj.c)),
            IB = [...BB.flatMap((BB => Ej(BB))), ...QB.flatMap(ij)],
            NB = function(BB, jB) {
              const zB = jB.map((jB => ({
                left: jB.left - BB.left,
                top: jB.top - BB.top,
                right: jB.right - BB.left,
                bottom: jB.bottom - BB.top
              })));
              return gj(Math.ceil(BB.width), Math.ceil(BB.height), zB)
            }(zB.getBoundingClientRect(), IB);
          zB.style.clipPath !== NB && (zB.style.clipPath = NB)
        };
        let nB;
        const dB = new ResizeObserver((() => {
          QB()
        }));
        QB(), dB.observe(zB);
        const IB = zB.closest(".InGameUi"),
          NB = new MutationObserver(QB);
        IB && NB.observe(IB, {
          attributes: !0,
          attributeFilter: ["class", Mj.f]
        });
        const uB = [(0, tB.q)(Gj.b, QB), (0, tB.q)(Lj.u, QB), (0, tB.q)(Lj.f, QB)];
        return () => {
          dB.disconnect(), NB.disconnect();
          for (const BB of uB) BB();
          zB.style.clipPath = ""
        }
      }), [BB, jB])
    }
    var fj = zB(4527);

    function oj(BB) {
      var jB;
      let {
        onMove: zB,
        mode: QB,
        speedCurve: dB,
        autorun: IB = !1,
        keys: NB
      } = BB;
      const uB = (0, nB.useRef)(null),
        UB = (0, nB.useRef)(null),
        pB = (0, nB.useRef)(null),
        rB = (0, nB.useRef)(null),
        JB = (0, nB.useRef)(null),
        mB = (0, nB.useRef)(null),
        yB = (0, nB.useRef)(new Jj).current,
        kB = (0, nB.useRef)(null),
        GB = (0, nB.useRef)(null),
        LB = (0, nB.useRef)(null),
        gB = (0, nB.useRef)(!1),
        tB = (0, nB.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: SB
        } = (0, DB.D)(),
        MB = (0, fj.m)(QB),
        EB = (0, iB.m)(["notchSize"]).notchSize,
        qB = EB.left,
        fB = (0, nB.useRef)(16),
        oB = (0, yj.d)(),
        [HB, FB, YB] = "pinned" === QB ? mj.m : null !== (jB = oB.hudElements.joystick) && void 0 !== jB ? jB : mj.m,
        VB = "pinned" === QB ? null : oB.hudSafe,
        hB = Math.max(fj.i, fj.k * YB);
      qj(UB, "pinned" !== QB);
      const XB = function(BB, jB, zB, QB, dB) {
        const IB = (0, nB.useRef)(null),
          NB = () => {
            clearInterval(IB.current), IB.current = null
          },
          uB = pj(BB, {
            create: BB => new Uj(BB),
            elementRef: jB,
            ringRef: zB,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: dB,
            onLocked: () => {
              IB.current = setInterval((() => {
                sB.gameBridge.lookup("dropAhead", null) && (dj.h.play("autorunLedgeStop"), uB.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              NB(), QB()
            }
          });
        return (0, nB.useEffect)((() => NB), []), uB
      }(IB, pB, kB, (() => {
        wB(), lB()
      }), (() => {
        ZB(), null === LB.current && XB.current.suspend()
      }));

      function ZB() {
        const BB = pB.current.getBoundingClientRect();
        LB.current = zj(GB.current, BB, 80, Qj(`.TouchInventoryKey, .TouchSprintKey, ${Lj.c}`)), gB.current = null !== LB.current && nj(tB.current, LB.current)
      }

      function TB() {
        const {
          innerWidth: BB,
          innerHeight: jB
        } = window, zB = (0, Lj.J)(VB, BB, jB, (0, Lj.Q)(EB, BB, jB), fB.current);
        return {
          left: zB[3],
          bottom: zB[2]
        }
      }

      function PB(BB) {
        pB.current.style.transform = `translate(${BB.x-hB}px, ${BB.y-hB}px)`
      }

      function WB(BB) {
        const jB = pB.current;
        jB.classList.add("Resting"), jB.classList.toggle("Returning", BB), jB.style.display = "fixed_hidden" === QB ? "none" : "block", PB(function() {
          const {
            innerWidth: BB,
            innerHeight: jB
          } = window, zB = TB(), QB = qB * BB / 100 + zB.left, nB = uB.current.offsetHeight || jB, dB = ((0, kj.b)(BB, jB) ? fj.e : fj.d) + zB.bottom;
          return {
            x: Math.min(BB - hB, Math.max(hB, QB + fj.h + HB * BB)),
            y: Math.min(nB - hB, Math.max(hB, nB - dB + FB * nB))
          }
        }())
      }
      const eB = (0, nB.useRef)({
        restFixed: WB,
        release: xB
      });

      function lB() {
        MB ? WB("fixed_shown" === QB) : "floating" === QB && (pB.current.style.display = "none"), zB({
          x: 0,
          y: 0
        })
      }

      function wB() {
        mB.current = null, JB.current = null, rB.current.style.transform = "translate(-50%, -50%)"
      }

      function xB(BB) {
        wB();
        const jB = XB.current;
        BB && null !== jB && void 0 !== jB && jB.lift() ? zB({
          x: 0,
          y: -jB.lockedSpeed
        }) : (null === jB || void 0 === jB || jB.cancel(), lB())
      }

      function KB(BB) {
        var jB;
        if (null === (jB = XB.current) || void 0 === jB || jB.startTouch(), "pinned" === QB) {
          const BB = pB.current.getBoundingClientRect();
          JB.current = {
            x: BB.left + BB.width / 2,
            y: BB.top + BB.height / 2
          }
        } else {
          JB.current = {
            x: BB.clientX,
            y: BB.clientY
          }, pB.current.classList.remove("Resting", "Returning"), pB.current.style.display = "block";
          const jB = uB.current.getBoundingClientRect();
          PB({
            x: BB.clientX - jB.left,
            y: BB.clientY - jB.top
          }), IB && (tB.current = {
            clientX: BB.clientX,
            clientY: BB.clientY
          }, ZB())
        }
      }

      function CB(BB) {
        const jB = yB.slidFrom(Array.from(BB.touches));
        jB && null === mB.current && (mB.current = jB.identifier, KB(jB));
        const QB = Array.from(BB.touches).find((BB => BB.identifier === mB.current));
        if (null === JB.current || null === mB.current || (0, jj.I)(QB)) return;
        const nB = XB.current,
          IB = QB.clientX - JB.current.x,
          NB = QB.clientY - JB.current.y,
          uB = Math.hypot(IB, NB),
          UB = uB > 0 ? Math.min(1, hB / uB) : 0,
          aB = IB * UB,
          pB = NB * UB,
          sB = Math.hypot(aB, pB) / hB,
          kB = dB && sB > 0 ? dB(sB) / sB : 1;
        rB.current.style.transform = `translate(calc(-50% + ${aB}px), calc(-50% + ${pB}px))`;
        const GB = aB / hB,
          SB = pB / hB;
        if (zB({
            x: GB * kB,
            y: SB * kB
          }), null !== nB && null !== LB.current) {
          nB.move(GB, SB, sB * kB), tB.current = {
            clientX: QB.clientX,
            clientY: QB.clientY
          };
          const BB = gB.current;
          gB.current = nj(QB, LB.current), gB.current !== BB && nB.target(gB.current)
        }
      }
      return eB.current = {
        restFixed: WB,
        release: xB
      }, (0, nB.useLayoutEffect)((() => {
        if (!MB) return;
        const BB = () => {
          fB.current = (0, Lj.T)(document)
        };
        BB(), null === mB.current && eB.current.restFixed(!1);
        const jB = new ResizeObserver((() => {
          BB(), null === mB.current && eB.current.restFixed(!1)
        }));
        jB.observe(uB.current);
        const zB = pB.current;
        return () => {
          jB.disconnect(), zB.classList.remove("Resting", "Returning"), null === mB.current && (zB.style.display = "", zB.style.transform = "")
        }
      }), [MB, QB, EB, HB, FB, hB, VB]), (0, nB.useEffect)((() => {
        const BB = (BB, jB) => void 0 === jB || null === jB || Array.from(BB.touches).some((BB => BB.identifier === jB)) ? null : {
            lifted: "touchend" === BB.type && Array.from(BB.changedTouches).some((BB => BB.identifier === jB))
          },
          jB = jB => {
            const zB = BB(jB, mB.current);
            zB && eB.current.release(zB.lifted);
            const QB = BB(jB, yB.touchId);
            QB && yB.end(QB.lifted)
          },
          zB = () => {
            null !== mB.current && eB.current.release(!1), yB.end(!1)
          },
          QB = () => {
            "hidden" === document.visibilityState && zB()
          };
        document.addEventListener("touchstart", jB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", jB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", jB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", jB, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", zB), document.addEventListener("visibilitychange", QB);
        const nB = (0, aj.l)((BB => {
          let {
            keepsMovement: jB
          } = BB;
          jB || zB()
        }));
        return () => {
          nB(), document.removeEventListener("touchstart", jB, {
            capture: !0
          }), document.removeEventListener("touchmove", jB, {
            capture: !0
          }), document.removeEventListener("touchend", jB, {
            capture: !0
          }), document.removeEventListener("touchcancel", jB, {
            capture: !0
          }), window.removeEventListener("blur", zB), document.removeEventListener("visibilitychange", QB)
        }
      }), []), (0, nB.useEffect)((() => {
        const BB = uB.current,
          jB = BB => {
            BB.preventDefault()
          };
        return BB.addEventListener("touchstart", jB, {
          passive: !1
        }), () => {
          BB.removeEventListener("touchstart", jB)
        }
      }), []), (0, aB.jsxs)("div", {
        ref: uB,
        className: "JoystickZone",
        style: MB && (HB > 0 || YB > 1 || TB().left > 0) ? {
          width: `max(35vw, calc(${qB+100*HB}vw + ${TB().left+fj.h+hB+24}px))`
        } : void 0,
        onTouchStart: function(BB) {
          const jB = Array.from(BB.changedTouches).filter((BB => {
            var jB;
            return null === (jB = uB.current) || void 0 === jB ? void 0 : jB.contains(BB.target)
          }));
          for (const QB of jB) {
            const BB = sj(QB.target);
            BB && yB.land(BB, QB)
          }
          const zB = jB.find((BB => null === sj(BB.target)));
          zB && null === mB.current && (mB.current = zB.identifier, KB(zB), CB(BB))
        },
        onTouchMove: CB,
        children: [(0, aB.jsx)("div", {
          ref: UB,
          className: "JoystickTouchLayer"
        }), (0, aB.jsxs)("div", {
          ref: pB,
          className: "Joystick",
          style: {
            width: 2 * hB + "px",
            height: 2 * hB + "px",
            transform: "pinned" === QB ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, aB.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * hB + "px",
              height: 2 * hB + "px"
            }
          }), IB && (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, aB.jsx)("circle", {
                ref: kB,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, aB.jsxs)("div", {
              ref: GB,
              className: "AutorunTarget",
              children: [(0, aB.jsx)(AB.c, {
                name: "lock"
              }), SB("settingsMenu:autoRun")]
            })]
          }), (0, aB.jsx)("div", {
            ref: rB,
            className: "JoystickKnob",
            style: {
              width: `${hB}px`,
              height: `${hB}px`
            }
          })]
        }), NB]
      })
    }
    var Hj = zB(297);
    const Dj = {
        deadZone: .1,
        creepEnd: .35,
        fullSpeedAt: .85,
        creepMin: .06,
        creepMax: .22
      },
      Fj = {
        short_creep: {
          ...Dj,
          creepEnd: .25,
          fullSpeedAt: .75
        },
        long_creep: {
          ...Dj,
          creepEnd: .45,
          fullSpeedAt: .95
        },
        small_dead_zone: {
          ...Dj,
          deadZone: .05
        },
        control: Dj
      };

    function Yj(BB) {
      return function(BB, jB) {
        const {
          deadZone: zB,
          creepEnd: QB,
          fullSpeedAt: nB,
          creepMin: dB,
          creepMax: IB
        } = BB;
        if (jB < zB) return 0;
        if (jB < QB) {
          const BB = (jB - zB) / (QB - zB);
          return dB + (IB - dB) * BB * BB
        }
        return jB < nB ? IB + (1 - IB) * (jB - QB) / (nB - QB) : 1
      }(Fj[Hj.c.mobile_walk_curve_v1], BB)
    }
    var Vj = zB(8907);

    function hj(BB, jB) {
      const zB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => (RB.h.set(BB, zB.current, jB), () => {
        RB.h.set(BB, null)
      })), [BB, jB]), zB
    }
    const Xj = "C",
      Zj = "J",
      Aj = "U",
      Tj = "A",
      Pj = "G",
      Wj = "X",
      ej = (0, nB.forwardRef)((function(BB, jB) {
        let {
          slot: zB,
          canvasZone: QB = !1,
          lit: dB = !1,
          label: NB,
          className: uB,
          children: UB,
          ...pB
        } = BB;
        return (0, nB.useEffect)((() => (tB.n.Ly(Gj.b), () => {
          tB.n.Ly(Gj.b)
        })), []), (0, aB.jsx)("div", {
          ref: jB,
          className: IB()("TouchKeyHit", `TouchSlot${zB}`, uB, {
            CanvasZone: QB
          }),
          ...pB,
          children: (0, aB.jsxs)("div", {
            className: IB()("TouchKey", {
              Lit: dB,
              Labelled: void 0 !== NB
            }),
            children: [UB, void 0 !== NB && (0, aB.jsx)("span", {
              className: "TouchKeyLabel",
              children: NB
            })]
          })
        })
      }));

    function lj(BB, jB) {
      (0, nB.useEffect)((() => () => {
        jB.current && (jB.current = !1, (0, vB.A)(BB, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function wj(BB, jB) {
      const zB = (0, Vj.j)(jB);
      return BB.filter((BB => null !== BB)).slice(0, zB.length).map(((BB, jB) => {
        const QB = zB[jB];
        return (0, aB.jsx)(nB.Fragment, {
          children: BB.render(QB)
        }, `${BB.id}:${QB}`)
      }))
    }
    var xj = zB(36656);
    class Kj extends Ij {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(BB, jB) {
        this.start = {
          x: BB,
          y: jB
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(BB, jB, zB) {
        const QB = Math.hypot(BB - this.start.x, jB - this.start.y) <= 12;
        this.moved ||= !QB;
        const nB = null !== zB && jB < this.start.y - 12 && nj({
          clientX: BB,
          clientY: jB
        }, zB);
        this.hold(!this.moved, QB || nB)
      }
    }
    const Cj = new Set;

    function cj(BB) {
      const jB = new Set(Array.from(BB.touches, (BB => BB.identifier)));
      for (const zB of Cj) {
        for (const BB of zB.ids) jB.has(BB) || zB.ids.delete(BB);
        if (0 === zB.ids.size) {
          Cj.delete(zB);
          zB.pressesOnPointerDown && "touchstart" === BB.type && Array.from(BB.changedTouches).some((BB => BB.target instanceof Node && zB.element.contains(BB.target))) || zB.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const CI of ["touchstart", "touchmove"]) window.addEventListener(CI, cj, {
        capture: !0,
        passive: !0
      });

    function bj(BB) {
      let {
        pressesOnPointerDown: jB = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const zB = (0, nB.useRef)(BB);
      zB.current = BB;
      const QB = (0, nB.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: jB,
        release: () => {
          zB.current()
        }
      });
      (0, nB.useEffect)((() => {
        const BB = QB.current;
        return () => {
          Cj.delete(BB), BB.ids.clear()
        }
      }), []);
      const dB = BB => {
        const jB = QB.current;
        for (const zB of Array.from(BB.changedTouches)) jB.ids.delete(zB.identifier);
        0 === jB.ids.size && Cj.delete(jB)
      };
      return {
        onTouchStart: BB => {
          const jB = QB.current;
          jB.element = BB.currentTarget;
          for (const zB of Array.from(BB.changedTouches)) zB.target instanceof Node && BB.currentTarget.contains(zB.target) && jB.ids.add(zB.identifier);
          jB.ids.size > 0 && Cj.add(jB)
        },
        onTouchEnd: dB,
        onTouchCancel: dB
      }
    }

    function vj(BB, jB) {
      return null === jB ? null : (0, xj.b)(BB.nativeEvent.changedTouches, jB.id)
    }

    function Rj(BB) {
      let {
        lockable: jB
      } = BB;
      const {
        t: zB
      } = (0, DB.D)(), QB = "round" === (0, mj.Z)().hudShape, dB = (0, nB.useRef)(!1);
      lj(bB.q.Jump, dB);
      const IB = (0, nB.useRef)(null),
        NB = (0, nB.useRef)(null),
        uB = (0, nB.useRef)(null),
        UB = (0, nB.useRef)(null),
        pB = (0, nB.useRef)(null),
        rB = (0, nB.useRef)(null),
        sB = (0, nB.useRef)(!1),
        JB = (BB, jB) => {
          dB.current = BB, (0, vB.A)(bB.q.Jump, BB, jB)
        },
        mB = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          dB.current && (IB.current && (0, Bj.i)(IB.current, !1), JB(!1, BB))
        },
        yB = pj(jB, {
          create: BB => new Kj(BB),
          elementRef: IB,
          ringRef: NB,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const BB = IB.current.getBoundingClientRect(),
              jB = uB.current.parentElement,
              zB = jB.getBoundingClientRect(),
              QB = {
                left: zB.left + jB.clientLeft,
                top: zB.top + jB.clientTop,
                right: zB.right - jB.clientLeft,
                bottom: zB.bottom - jB.clientTop
              };
            if (pB.current = zj(uB.current, QB, 16, Qj(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, .TouchSprintKey, ${Lj.c}`)), null === pB.current) return void yB.current.suspend();
            const nB = pB.current;
            rB.current = {
              left: Math.min(BB.left, nB.left),
              top: nB.top,
              right: Math.max(BB.right, nB.right),
              bottom: BB.bottom
            }, sB.current = null !== UB.current && nj({
              clientX: UB.current.x,
              clientY: UB.current.y
            }, nB)
          },
          onUnlocked: () => {
            null === UB.current && mB()
          }
        }),
        kB = BB => {
          var jB;
          UB.current = null, null === (jB = yB.current) || void 0 === jB || jB.cancel(), mB(BB)
        },
        GB = bj((() => {
          kB()
        })),
        LB = BB => {
          const jB = UB.current;
          var zB;
          return null === jB ? null !== (zB = yB.current) && void 0 !== zB && zB.locked ? null : "lifted" : vj(BB, jB) ? "lifted" : (0, xj.e)(BB.nativeEvent.touches, jB.id) ? null : "dropped"
        };
      return (0, aB.jsxs)(ej, {
        ref: IB,
        slot: Zj,
        className: "JumpKey",
        onTouchStart: BB => {
          GB.onTouchStart(BB), (0, Bj.i)(BB.currentTarget, !0), null === UB.current || (0, xj.e)(BB.nativeEvent.touches, UB.current.id) || kB();
          const jB = BB.changedTouches[0];
          var zB;
          null === UB.current && jB && (UB.current = {
            id: jB.identifier,
            x: jB.clientX,
            y: jB.clientY
          }, null === (zB = yB.current) || void 0 === zB || zB.press(jB.clientX, jB.clientY));
          dB.current || JB(!0, BB.nativeEvent)
        },
        onTouchMove: BB => {
          const jB = UB.current,
            zB = vj(BB, jB);
          if (!zB) return;
          const QB = yB.current;
          if (null === QB || void 0 === QB || QB.move(zB.clientX, zB.clientY, rB.current), null !== QB && void 0 !== QB && QB.offered) {
            const BB = nj(zB, pB.current);
            BB !== sB.current && (sB.current = BB, QB.target(BB))
          }
          jB.x = zB.clientX, jB.y = zB.clientY
        },
        onTouchEnd: BB => {
          var jB;
          GB.onTouchEnd(BB);
          const zB = LB(BB);
          null !== zB && ("dropped" !== zB ? (UB.current = null, null !== (jB = yB.current) && void 0 !== jB && jB.lift() ? (0, Bj.i)(BB.currentTarget, !1) : mB(BB.nativeEvent)) : kB(BB.nativeEvent))
        },
        onTouchCancel: BB => {
          GB.onTouchCancel(BB), null !== LB(BB) && kB(BB.nativeEvent)
        },
        children: [(0, aB.jsx)(AB.c, {
          name: "arrow-up-from-line"
        }), jB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, aB.jsx)(AB.c, {
              name: "lock"
            })
          }), (0, aB.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, aB.jsx)("rect", {
              ref: NB,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: QB ? 48 : 0,
              pathLength: 1
            })
          }), (0, aB.jsxs)("div", {
            ref: uB,
            className: "JumpLockTarget",
            children: [(0, aB.jsx)(AB.c, {
              name: "lock"
            }), zB("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    var Oj = zB(36668);

    function Bz(BB) {
      let {
        atHome: jB
      } = BB;
      const {
        t: zB
      } = (0, DB.D)(), QB = (dB = (0, gB.i)("runningSpeed"), NB = (0, gB.i)("walkingSpeed"), null !== dB && null !== NB && dB > NB);
      var dB, NB;
      const UB = (0, mj.s)((0, yj.d)().hudElements, "sprint"),
        pB = (0, uB.h)(Oj.d, (0, Oj.e)());
      return (0, nB.useEffect)((() => {
        QB && !UB || (0, Oj.i)(!0)
      }), [QB, UB]), (0, nB.useEffect)((() => () => {
        (0, Oj.i)(!0)
      }), []), QB ? (0, aB.jsx)("div", {
        className: IB()("TouchSprintHit", {
          AtHome: jB
        }),
        role: "switch",
        "aria-checked": pB,
        "aria-label": zB("touchKeys:sprint"),
        [rj]: "",
        onClick: () => {
          (0, Oj.i)(!(0, Oj.e)())
        },
        children: (0, aB.jsx)("div", {
          className: IB()("TouchKey TouchSprintKey", {
            Lit: pB
          }),
          children: (0, aB.jsx)(AB.c, {
            name: pB ? "person-running" : "person-walking"
          })
        })
      }) : null
    }
    const jz = new WeakMap;
    class zz {
      constructor(BB) {
        this.zones = BB, this.followed = new Map, this.onStart = BB => {
          if (this.releaseMissing(BB.touches), BB.target instanceof HTMLCanvasElement)
            for (let zB = 0; zB < BB.changedTouches.length; zB++) {
              var jB;
              const {
                identifier: QB,
                clientX: nB,
                clientY: dB
              } = BB.changedTouches[zB];
              this.release(QB);
              const IB = this.zones.hitZone(nB, dB);
              if (!IB) continue;
              const {
                key: NB
              } = IB;
              null === (jB = jz.get(NB)) || void 0 === jB || jB.cancel();
              const uB = {
                hit: IB.element,
                key: NB,
                x: IB.x,
                y: IB.y,
                reach: .6 * IB.radius
              };
              this.followed.set(QB, uB), (0, Bj.i)(IB.element, !0), Qz(uB, nB, dB)
            }
        }, this.onMove = BB => {
          this.releaseMissing(BB.touches);
          for (let jB = 0; jB < BB.changedTouches.length; jB++) {
            const {
              identifier: zB,
              clientX: QB,
              clientY: nB
            } = BB.changedTouches[jB], dB = this.followed.get(zB);
            dB && Qz(dB, QB, nB)
          }
        }, this.onEnd = BB => {
          for (let jB = 0; jB < BB.changedTouches.length; jB++) this.release(BB.changedTouches[jB].identifier)
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
        for (const jB of [...this.followed.keys()])(0, xj.e)(BB, jB) || this.release(jB)
      }
      releaseAll() {
        for (const BB of [...this.followed.keys()]) this.release(BB)
      }
      release(BB) {
        const jB = this.followed.get(BB);
        if (!jB) return;
        this.followed.delete(BB);
        for (const nB of this.followed.values())
          if (nB.key === jB.key) return;
        (0, Bj.i)(jB.hit, !1);
        const {
          key: zB
        } = jB, QB = zB.style.translate;
        zB.style.translate = "", QB && jz.set(zB, zB.animate({
          translate: [QB, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function Qz(BB, jB, zB) {
      let {
        key: QB,
        x: nB,
        y: dB,
        reach: IB
      } = BB;
      const NB = jB - nB,
        uB = zB - dB,
        UB = Math.min(1, IB / (Math.hypot(NB, uB) || 1));
      QB.style.translate = `${NB*UB}px ${uB*UB}px`
    }
    var nz = zB(1514),
      dz = zB(106),
      Iz = zB(1381);
    const Nz = "threeFingerHintShown",
      uz = {
        android: "touchHint:threeFingerAndroid",
        ios: "touchHint:threeFingerIos"
      };
    let Uz = 0,
      az = !1;

    function pz() {
      const BB = new Set;
      let jB = -1 / 0,
        zB = -1 / 0,
        QB = null,
        nB = 0;
      const dB = () => {
          BB.clear()
        },
        IB = dB => {
          if (dB.touches.length > 0) return;
          for (let jB = 0; jB < dB.changedTouches.length; jB++) BB.add(dB.changedTouches[jB].identifier);
          const IB = BB.size;
          if (IB < 3 || !(0, aj.y)()) return;
          if (nB = IB, null !== QB) return;
          const NB = performance.now(),
            uB = jB >= NB - 200;
          QB = setTimeout((() => {
            if (QB = null, !(0, aj.y)()) return;
            const BB = zB >= NB - 200 || document.hidden;
            ! function(BB, jB) {
              var zB;
              const QB = (0, dz.getOperatingSystem)();
              Uz < 5 && (Uz++, (0, nz.reportAnalyticsClick)({
                id: "touch.os_cancel",
                value: null === jB ? `${QB}:${BB}` : `${QB}:${BB}:${jB}`
              })), null === jB && (az || !0 === MB.j.getItem(Nz) || (az = !0, MB.j.setItem(Nz, !0), Iz.NotificationProvider.showAlertPopup({
                title: "touchHint:threeFingerTitle",
                subtitle: null !== (zB = uz[QB]) && void 0 !== zB ? zB : "touchHint:threeFingerOther",
                confirmText: "general:ok",
                disablePressBackgroundToClose: !0,
                unlockPointerKey: "threeFingerHint"
              })))
            }(nB, BB ? "hide" : uB ? "blur" : null)
          }), 500)
        },
        NB = () => {
          zB = performance.now()
        },
        uB = () => {
          jB = performance.now()
        },
        UB = {
          capture: !0,
          passive: !0
        };
      return document.addEventListener("touchstart", dB, UB), document.addEventListener("touchcancel", IB, UB), document.addEventListener("visibilitychange", NB), window.addEventListener("blur", uB), window.addEventListener("resize", NB), window.addEventListener("orientationchange", NB), () => {
        document.removeEventListener("touchstart", dB, UB), document.removeEventListener("touchcancel", IB, UB), document.removeEventListener("visibilitychange", NB), window.removeEventListener("blur", uB), window.removeEventListener("resize", NB), window.removeEventListener("orientationchange", NB), null !== QB && clearTimeout(QB)
      }
    }
    const rz = () => {
      const BB = (0, cB.j)(),
        jB = (0, fB.y)();
      return BB || jB
    };

    function sz(BB) {
      (0, RB.k)(BB.x, BB.y)
    }
    const Jz = (0, nB.memo)((function() {
        const BB = rz(),
          {
            joystickMode: jB,
            touchSpeedCurve: zB,
            autorun: QB
          } = (0, iB.m)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, nB.useEffect)((() => ((0, OB.l)(bB.t.TouchControls, bB.t.TouchControls), () => {
          (0, OB.l)(bB.t.TouchControls, 0), (0, RB.k)(0, 0)
        })), []), (0, nB.useEffect)(pz, []), (0, aB.jsx)("div", {
          className: IB()("TouchMovementWrapper", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: (0, aB.jsx)(oj, {
            onMove: sz,
            mode: jB,
            speedCurve: zB ? Yj : void 0,
            autorun: QB,
            keys: (0, aB.jsx)(Bz, {
              atHome: !(0, fj.m)(jB)
            })
          })
        })
      })),
      mz = (0, nB.memo)((function() {
        const BB = rz(),
          {
            clientEscMenuOptions: jB
          } = (0, iB.m)(["clientEscMenuOptions"]),
          zB = jB.touchActionButtons;
        return (0, nB.useEffect)((() => new zz(RB.h).start()), []), (0, nB.useEffect)((() => {
          tB.n.Ly(Gj.b)
        }), [BB]), (0, aB.jsxs)("div", {
          className: IB()("TouchComponentsButtons", {
            Hidden: BB
          }),
          "data-camera-keeper": "",
          children: [(0, aB.jsx)(Rj, {
            lockable: jB.jumpLock && !BB
          }), (0, aB.jsx)(fz, {
            hidden: BB,
            actionButtons: zB
          }), (0, aB.jsx)(kz, {})]
        })
      }));

    function yz(BB) {
      const jB = jB => zB => {
        (0, Bj.i)(zB.currentTarget, jB), BB(jB, zB.nativeEvent)
      };
      return {
        onPointerDown: jB(!0),
        onPointerUp: jB(!1),
        onPointerCancel: jB(!1)
      }
    }

    function kz() {
      const BB = (0, gB.i)("canCrouch"),
        jB = (0, EB.k)("crouching"),
        zB = (0, nB.useRef)(!1);
      lj(bB.q.Crouch, zB);
      const QB = (BB, jB) => {
          zB.current = BB, (0, vB.A)(bB.q.Crouch, BB, jB)
        },
        dB = (0, nB.useRef)(null),
        IB = () => {
          zB.current && (dB.current && (0, Bj.i)(dB.current, !1), QB(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        NB = bj(IB);
      return (0, nB.useEffect)((() => {
        !1 === BB && IB()
      }), [BB]), !1 === BB ? null : (0, aB.jsx)(ej, {
        ref: dB,
        slot: Xj,
        className: "CrouchKey",
        lit: jB,
        ...NB,
        ...yz(QB),
        children: (0, aB.jsx)(AB.c, {
          name: "arrow-down-to-line"
        })
      })
    }
    const Gz = [{
        icon: "arrows-rotate"
      }],
      Lz = [{
        icon: "Arrow"
      }],
      gz = [{
        icon: "crosshairs"
      }],
      tz = [{
        icon: "swords"
      }],
      Sz = [{
        icon: "hand-back-point-up"
      }],
      Mz = [{
        icon: "Firecracker"
      }];

    function Ez(BB, jB, zB, QB) {
      return {
        id: JSON.stringify(jB),
        render: nB => (0, aB.jsx)(oz, {
          code: BB,
          slot: nB,
          icon: jB,
          label: QB,
          hidden: zB
        })
      }
    }

    function iz(BB, jB) {
      return {
        id: "fly",
        render: zB => (0, aB.jsx)(qz, {
          slot: zB,
          flying: BB,
          label: jB
        })
      }
    }

    function qz(BB) {
      let {
        slot: jB,
        flying: zB,
        label: QB
      } = BB;
      return (0, aB.jsx)(ej, {
        slot: jB,
        className: "FlyKey",
        lit: zB,
        label: QB,
        ...yz(((BB, jB) => {
          (0, vB.A)(bB.q.Fly, BB, jB)
        })),
        children: (0, aB.jsx)(AB.c, {
          name: "feather-pointed"
        })
      })
    }

    function fz(BB) {
      var jB, zB;
      let {
        hidden: QB,
        actionButtons: nB
      } = BB;
      const {
        t: dB
      } = (0, DB.D)(), {
        gun: IB,
        aimable: NB,
        chargeName: uB
      } = (0, EB.k)("heldItemAim"), UB = (0, EB.k)("gliderBoostFuel"), {
        canFly: pB,
        flying: rB
      } = (0, EB.k)("flight"), sB = (0, gB.i)("touchscreenActionButton"), JB = IB ? Gz : sB, mB = NB ? {
        icon: Lz,
        label: dB("touchKeys:aim")
      } : null, yB = null !== uB ? {
        icon: [{
          icon: uB
        }]
      } : null, kB = null !== mB && void 0 !== mB ? mB : yB, GB = null !== (jB = null === (zB = IB ? mB : null !== yB && void 0 !== yB ? yB : mB) || void 0 === zB ? void 0 : zB.icon) && void 0 !== jB ? jB : Sz, LB = [!nB && kB ? Ez(RB.c.Action2, kB.icon, QB, kB.label) : null, IB ? Ez(RB.c.Action3, gz, QB, dB("touchKeys:scope")) : null, pB ? iz(rB, dB("touchKeys:fly")) : null];
      return (0, aB.jsxs)(aB.Fragment, {
        children: [JB && (0, aB.jsx)(oz, {
          code: RB.c.Action1,
          slot: Pj,
          icon: JB,
          label: IB ? dB("touchKeys:reload") : void 0,
          hidden: QB
        }, JSON.stringify(JB)), nB && (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)(oz, {
            code: RB.c.Attack,
            slot: Tj,
            icon: tz,
            name: dB("touchKeys:attack"),
            hidden: QB
          }), (0, aB.jsx)(oz, {
            code: RB.c.Use,
            slot: Aj,
            icon: GB,
            name: dB("touchKeys:use"),
            hidden: QB
          })]
        }), wj(LB, nB), UB > 0 && (0, aB.jsx)(oz, {
          code: RB.c.Boost,
          slot: Wj,
          icon: Mz,
          label: dB("touchKeys:boost", {
            fuel: UB > 99 ? "99+" : UB
          }),
          hidden: QB
        })]
      })
    }

    function oz(BB) {
      let {
        code: jB,
        slot: zB,
        icon: QB,
        label: nB,
        name: dB,
        hidden: IB
      } = BB;
      const NB = hj(jB, IB);
      return (0, aB.jsx)(ej, {
        ref: NB,
        slot: zB,
        className: "TouchActionKey",
        canvasZone: !0,
        label: nB,
        role: void 0 !== dB ? "img" : void 0,
        "aria-label": dB,
        children: (0, aB.jsx)(UB.e, {
          text: QB
        })
      })
    }
    var Hz = zB(4352),
      Dz = zB(3116),
      Fz = zB(698);
    const Yz = (0, nB.memo)((function() {
      (0, GB.d)();
      const BB = (0, nB.useRef)([]),
        jB = (0, Dz.d)(),
        zB = (0, nB.useRef)(0),
        QB = (0, nB.useRef)(0),
        dB = (0, nB.useRef)([]),
        IB = (0, nB.useRef)(null);

      function NB(zB, QB, nB, dB) {
        const IB = (0, Fz.b)(),
          NB = setTimeout((() => {
            BB.current = BB.current.filter((BB => BB.id !== IB)), jB()
          }), dB);
        sB.gameBridge.send("recordFlyingMiddleText", {
          content: zB,
          xd: QB,
          angle: nB,
          Kd: dB
        }), BB.current.push({
          id: IB,
          content: zB,
          xd: QB,
          Kd: dB,
          removeTimeout: NB,
          angle: nB
        }), jB()
      }
      return (0, EB.d)("shotDamageToShow", (BB => {
        let {
          damage: jB,
          wasCrit: zB,
          distance: QB
        } = BB;
        const nB = -Math.PI / 4 + Math.random() * Math.PI / 2;
        NB(zB ? [{
          str: jB.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [jB.toString()], QB, nB, 1e3)
      })), (0, uB.f)("flyingMiddleMessage", (BB => {
        let {
          content: jB,
          xd: nB,
          Kd: uB
        } = BB;
        dB.current.push({
          content: jB,
          xd: nB,
          Kd: uB
        });
        const UB = () => {
          const {
            content: BB,
            xd: jB,
            Kd: nB
          } = dB.current.shift(), IB = function(BB) {
            const jB = -Math.PI / 4,
              zB = Math.PI / 4,
              QB = zB - jB,
              nB = (1 + Math.sqrt(5)) / 2,
              dB = 2 * Math.PI / (nB * nB);
            let IB = BB + dB;
            for (; IB > zB;) IB -= QB;
            for (; IB < jB;) IB += QB;
            const NB = Math.PI / 6;
            if (Math.abs(IB - BB) < NB) {
              IB = BB + (Math.sign(IB - BB) || 1) * NB, IB > zB && (IB = BB - NB), IB < jB && (IB = BB + NB)
            }
            return IB
          }(QB.current);
          QB.current = IB, zB.current = Date.now(), NB(BB, jB, IB, nB)
        };
        if (!IB.current) {
          const BB = () => {
            dB.current.length > 0 && UB(), 0 === dB.current.length && (clearInterval(IB.current), IB.current = null)
          };
          IB.current = setInterval(BB, 200), zB.current + 200 < Date.now() && BB()
        }
        for (; dB.current.length > 4;) UB()
      })), (0, uB.f)("forceFlyingMiddleMessage", (BB => {
        let {
          content: jB,
          xd: zB,
          angle: QB,
          Kd: nB
        } = BB;
        NB(jB, zB, QB, nB)
      })), (0, nB.useEffect)((() => () => {
        clearInterval(IB.current), IB.current = null;
        for (const jB of BB.current) clearTimeout(jB.removeTimeout)
      }), []), (0, aB.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: BB.current.map((BB => {
          const {
            id: jB,
            content: zB,
            xd: QB,
            Kd: nB,
            angle: dB
          } = BB;
          return BB.pos || (BB.pos = function(BB, jB) {
            const zB = 50 / (BB ** .7 * .35);
            return {
              x: zB * Math.sin(jB),
              y: -zB * Math.cos(jB)
            }
          }(QB, dB)), (0, aB.jsx)(Vz, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: nB,
            enterActiveStyle: {
              transform: `translate(${BB.pos.x}vw, ${BB.pos.y}vh)`,
              transition: `transform ${nB}ms ease-out`
            },
            children: (0, aB.jsx)("div", {
              children: (0, aB.jsx)(UB.e, {
                text: zB
              })
            })
          }, jB)
        }))
      })
    }));

    function Vz(BB) {
      let {
        children: jB,
        className: zB,
        classNames: QB,
        timeout: dB,
        enterActiveStyle: IB
      } = BB;
      const [NB, uB] = (0, nB.useState)(!1), [UB, pB] = (0, nB.useState)(!1), rB = (0, nB.useRef)(null);
      return (0, nB.useEffect)((() => {
        uB(!0)
      }), []), (0, aB.jsx)(Hz.d, {
        className: zB,
        classNames: QB || zB,
        in: NB,
        timeout: dB,
        nodeRef: rB,
        onEntering: () => {
          pB(!0)
        },
        children: (0, nB.cloneElement)(jB, {
          ref: rB,
          style: UB && IB || void 0
        })
      })
    }
    var hz = zB(36677);

    function Xz() {
      const BB = (0, EB.k)("health");
      return (0, aB.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, aB.jsx)(hz.c, {
          placement: "statBars"
        }), (0, aB.jsx)(Zz, {
          actualValue: BB.shield,
          maxValue: BB.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, aB.jsx)(Zz, {
          actualValue: BB.health,
          maxValue: BB.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function Zz(BB) {
      let {
        actualValue: jB,
        maxValue: zB,
        hideAtValue: QB,
        icon: nB,
        className: dB
      } = BB;
      return (0, GB.e)(), null === jB || null === zB || jB === QB || zB === QB ? null : (0, aB.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, aB.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, aB.jsx)("div", {
            className: `BottomScreenStatBar ${dB}`,
            style: {
              transform: `scaleX(${Math.max(jB/zB,0)})`,
              transformOrigin: "left center"
            }
          }), (0, aB.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, aB.jsx)(AB.c, {
              name: nB
            }), ` ${Math.ceil(jB)}/${zB}`]
          })]
        })
      })
    }
    var Az = zB(34242),
      Tz = zB(4653),
      Pz = zB(1359),
      Wz = zB(2851),
      ez = zB(1478),
      lz = zB(1343),
      wz = zB(3527),
      xz = zB(3084),
      Kz = zB(2196),
      Cz = zB(814),
      cz = zB(3587),
      bz = zB(145),
      vz = zB(1725),
      Rz = zB(34168);

    function Oz(BB) {
      let {
        showing: jB,
        enabled: zB,
        autoRespawn: QB
      } = BB;
      const {
        t: dB
      } = (0, DB.D)(), IB = (0, fB.u)(), {
        mobilePushNotificationsCanAsk: NB
      } = (0, iB.m)(["mobilePushNotificationsCanAsk"]), [uB, UB] = (0, nB.useState)(null), [pB, rB] = (0, nB.useState)(!1), [sB, JB] = (0, nB.useState)(null);
      jB && null === sB ? JB(IB) : jB || null === sB || JB(null);
      const mB = jB && null !== uB && !1 === sB;
      if ((0, nB.useEffect)((() => {
          if (jB) return;
          UB(null), rB(!1);
          let BB = !0;
          return (0, Rz.b)().then((jB => {
            BB && UB((() => jB))
          }), (BB => {
            console.error("Failed to tell whether to offer push notifications:", BB)
          })), () => {
            BB = !1
          }
        }), [jB, NB]), (0, nB.useEffect)((() => {
          mB && !QB && (0, Rz.g)()
        }), [mB, QB]), !mB) return null;
      const yB = () => {
          (0, Rz.g)(), rB(!0)
        },
        kB = vz.c.supports("notifications") ? "app" : "browser";
      return (0, aB.jsxs)("div", {
        className: "RespawnNotificationOptIn",
        style: pB ? {
          visibility: "hidden"
        } : void 0,
        children: [(0, aB.jsxs)("div", {
          className: "RespawnPanelSectionTitle",
          children: [(0, aB.jsx)(AB.c, {
            name: "bell"
          }), dB("mobilePushNotifications:optInTitle")]
        }), (0, aB.jsxs)("div", {
          className: "RespawnNotificationOptInButtons",
          children: [(0, aB.jsx)(ez.f, {
            onClick: () => {
              yB(), uB().catch((BB => {
                console.error("Failed to ask for push notifications:", BB)
              }))
            },
            disabled: !zB || pB,
            analyticsClick: {
              id: "push.allow",
              value: kB
            },
            touchPressOn: "pointerup",
            children: dB("mobilePushNotifications:optInConfirm")
          }), (0, aB.jsx)(ez.h, {
            onClick: yB,
            disabled: !zB || pB,
            analyticsClick: {
              id: "push.deny",
              value: kB
            },
            touchPressOn: "pointerup",
            children: dB("mobilePushNotifications:optInCancel")
          })]
        })]
      })
    }
    var BQ = zB(376);

    function jQ(BB, jB) {
      let {
        shownName: zB,
        lifeformType: QB
      } = BB;
      return null !== zB ? zB : null !== QB ? jB(`lifeform:${(0,BQ.He)(QB)}`) : null
    }
    var zQ = zB(3545),
      QQ = zB(3549);
    const nQ = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      dQ = (0, nB.memo)((function() {
        var BB, jB;
        const zB = (0, GB.d)(),
          QB = (0, JB.useNavigatePreserveSearch)(),
          {
            t: dB
          } = (0, DB.D)(),
          {
            loadingOverlayVisible: NB
          } = (0, iB.m)(["loadingOverlayVisible"]),
          UB = (0, fB.u)(),
          [pB, rB] = (0, nB.useState)(!1),
          [mB, yB] = (0, nB.useState)(!0),
          [kB, LB] = (0, nB.useState)(null),
          tB = (0, Dz.d)(),
          MB = (0, gB.i)("respawnButtonText"),
          qB = (0, gB.i)("usePlayAgainButton"),
          oB = (0, gB.i)("useRespawnButton"),
          {
            gameNameWithVariation: HB
          } = (0, EB.k)("connectedGame"),
          FB = (0, nB.useRef)(SB.c.get("secsToRespawn")),
          YB = (0, nB.useRef)(sB.gameBridge.latest("localPlayerAlive")),
          VB = (0, nB.useRef)(SB.c.get("secsToRespawn")),
          hB = (0, nB.useRef)(SB.c.get("autoRespawn")),
          XB = (0, nB.useRef)(null),
          ZB = (0, nB.useRef)(0),
          TB = (0, nB.useRef)(0),
          [PB, WB] = (0, nB.useState)(!1),
          lB = (0, nB.useRef)(null),
          wB = (0, nB.useRef)(null),
          xB = (0, nB.useRef)(null);
        (0, gB.h)("secsToRespawn", (BB => {
          console.log("Received new secsToRespawn with", BB, "and current canRespawn value of ", hB.current), VB.current = BB, bB()
        })), (0, gB.h)("autoRespawn", (BB => {
          console.log("Received autorespawn", BB, "current canRespawn value of ", FB.current), hB.current = BB, bB()
        }));
        const KB = BB => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", BB), BB || ZB.current++, YB.current = BB, bB()
        };
        (0, EB.d)("localPlayerAliveSet", KB), (0, uB.f)(xz.j, (BB => {
          "connected" === BB && !YB.current && hB.current && FB.current <= 0 && (TB.current = 0, vB())
        })), (0, nB.useEffect)((() => {
          const BB = sB.gameBridge.latest("localPlayerAlive");
          BB === YB.current ? (console.log("Updating respawn component from initial mount"), bB()) : KB(BB)
        }), []), (0, nB.useEffect)((() => {
          if (pB) {
            WB(!1);
            const BB = setTimeout((() => {
              WB(!0)
            }), 600);
            return () => {
              clearTimeout(BB)
            }
          }
          return () => {}
        }), [pB]);
        (0, EB.d)("kill", (BB => {
          let {
            killer: jB,
            victim: zB,
            withItem: QB
          } = BB;
          if (!zB.local) return;
          const nB = ((BB, jB) => {
            if (BB.local) {
              const BB = nQ[jB];
              return BB ? dB(BB) : null
            }
            const zB = jQ(BB, dB);
            return zB ? dB("respawnPage:killedBy", {
              name: zB
            }) : null
          })(jB, QB);
          nB && LB({
            text: nB,
            deathCount: YB.current ? ZB.current + 1 : ZB.current
          })
        }));
        const CB = () => {
            pB && hB.current && YB.current && PB && rB(!1)
          },
          cB = pB && hB.current && YB.current && PB && !NB;
        (0, uB.f)("usedKeyboard", (() => {
          CB()
        })), (0, QQ.d)("respawn", cB, CB);
        const bB = () => {
            yB(VB.current >= 3 || !hB.current), YB.current ? (clearInterval(XB.current), XB.current = null, hB.current ? tB() : rB(!1)) : (rB(!0), FB.current = VB.current, tB(), console.log("Running respawn stats updated", hB.current, FB.current), hB.current && FB.current <= 0 && vB(), clearInterval(XB.current), FB.current > 0 && (XB.current = setInterval((() => {
              FB.current = Math.max(FB.current - 1, 0), tB(), FB.current <= 0 && (clearInterval(XB.current), XB.current = null, SB.c.get("autoRespawn") && vB())
            }), 1e3)))
          },
          vB = () => {
            if (Date.now() - TB.current > 1e3) {
              const BB = () => {
                sB.gameBridge.send("respawn", null), TB.current = Date.now()
              };
              SB.c.get("autoRespawn") ? BB() : (0, lz.W)((() => {
                BB()
              }), "video_respawn")
            }
          },
          RB = (0, nB.useMemo)((() => {
            var BB;
            return null === (BB = (0, Cz.g)(HB)) || void 0 === BB ? void 0 : BB.otherGameLinksOnRespawnPage
          }), [HB]),
          OB = 0 === FB.current,
          Bj = (null === kB || void 0 === kB ? void 0 : kB.deathCount) === ZB.current ? kB.text : null,
          jj = pB && mB && !NB,
          zj = UB && cB && null !== (BB = null === (jB = (0, eB.d)()) || void 0 === jB ? void 0 : jB.getBoundButton("menuConfirm")) && void 0 !== BB ? BB : null,
          Qj = BB => OB ? BB : dB("respawnPage:actionInSeconds", {
            action: BB,
            seconds: FB.current
          });
        return (0, aB.jsx)(Az.b, {
          showing: pB,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, aB.jsx)(wz.e, {
            show: pB,
            "data-holds-camera-keeper": "",
            children: (0, aB.jsxs)(Tz.d, {
              close: () => {
                rB(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: hB.current || NB ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, bz.is99NightsCrazyGamesBundle)() && (0, aB.jsx)(ez.c, {
                onClick: Kz.f,
                children: dB("homePage:backToGames")
              }), (0, aB.jsxs)("div", {
                className: "RespawnContainer",
                onClick: CB,
                children: [(0, aB.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, aB.jsx)("div", {
                    ref: wB,
                    className: "RespawnSideSquareBannerDiv",
                    children: zB[0] > 925 && (0, aB.jsx)(Wz.e, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: wB
                      },
                      showing: jj,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, aB.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, aB.jsxs)("div", {
                      className: IB()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: UB
                      }),
                      children: [hB.current && (0, aB.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, aB.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, aB.jsx)(AB.c, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), dB("respawnPage:youDied")]
                        }), (0, aB.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === zj && (YB.current ? dB("respawnPage:pressAnywhereToContinue") : OB ? dB("respawnPage:respawning") : Qj(dB("general:respawn"))), null !== zj && (0, aB.jsx)(zQ.e, {
                            text: dB("controller:screensPressToContinue", {
                              button: zQ.f
                            }),
                            glyph: zj,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), Bj && (0, aB.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: Bj
                        })]
                      }), !hB.current && (0, aB.jsxs)(aB.Fragment, {
                        children: [(0, aB.jsxs)("div", {
                          className: IB()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !RB
                          }),
                          children: [qB && (0, aB.jsx)(ez.m, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, lz.W)((() => {
                                (0, iB.i)("inGameReplay");
                                const BB = (0, Pz.e)(HB);
                                QB(BB)
                              }), "video_start")
                            },
                            disabled: !OB || !PB,
                            touchPressOn: "pointerup",
                            children: Qj(dB("respawnPage:playAgain"))
                          }), oB && (0, aB.jsx)(ez.f, {
                            className: "RespawnPageButton",
                            onClick: vB,
                            padDefaultFocus: !qB,
                            padBack: "sessionBasedGame:stayInLobby" === MB,
                            disabled: !OB || !PB,
                            touchPressOn: "pointerup",
                            children: Qj(dB(MB))
                          }), !(0, bz.is99NightsCrazyGamesBundle)() && (0, aB.jsx)(ez.G, {
                            className: "RespawnPageButton",
                            onClick: Kz.f,
                            disabled: !OB || !PB,
                            touchPressOn: "pointerup",
                            children: Qj(dB("respawnPage:exitGame"))
                          })]
                        }), RB && (0, aB.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, aB.jsx)("div", {
                            className: "RespawnPanelSectionTitle",
                            children: dB("respawnPage:orTry")
                          }), (0, aB.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: RB.map((BB => (0, aB.jsx)(cz.f, {
                              source: {
                                type: "game",
                                gameNameWithVariation: BB
                              },
                              disabled: !OB || !PB,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, iB.i)("inGameReplay");
                                const jB = (0, Pz.e)(BB);
                                QB(jB)
                              }
                            }, BB)))
                          })]
                        })]
                      }), (0, aB.jsx)(Oz, {
                        showing: pB,
                        enabled: PB,
                        autoRespawn: hB.current
                      })]
                    })
                  }), (0, aB.jsx)("div", {
                    ref: xB,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, aB.jsx)("div", {
                  ref: lB,
                  className: "RespawnBottom",
                  children: (0, aB.jsx)(Wz.e, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: lB
                    },
                    showing: jj,
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
    var IQ = zB(36694);
    const NQ = [{
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
      uQ = [{
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
      UQ = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      aQ = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      pQ = (0, nB.memo)((function() {
        const BB = (0, nB.useRef)(null),
          jB = (0, nB.useRef)(null);

        function zB(zB) {
          var QB;
          let {
            Wj: nB,
            screenPos: dB
          } = zB;
          const IB = BB.current;
          null === (QB = jB.current) || void 0 === QB || QB.cancel(), IB.classList.remove("HitmarkerCrit"), dB ? (IB.style.left = `${dB.x}%`, IB.style.top = `${dB.y}%`) : (IB.style.left = "50%", IB.style.top = "50%"), IB.style.rotate = 16 * (Math.random() - .5) + "deg", nB && IB.classList.add("HitmarkerCrit");
          const NB = IB.animate(nB ? uQ : NQ, nB ? aQ : UQ);
          jB.current = NB, NB.onfinish = () => {
            IB.classList.remove("HitmarkerCrit")
          }
        }
        return (0, uB.f)("localGunHitmarker", (BB => {
          let {
            Wj: jB
          } = BB;
          zB({
            Wj: jB
          })
        })), (0, uB.f)("yourAttackHit", (BB => {
          let {
            Wj: jB,
            screenPos: QB
          } = BB;
          zB({
            Wj: jB,
            screenPos: iB.c.get("isTouchScreen") ? QB : void 0
          })
        })), (0, uB.f)("sendHitmarker", (BB => {
          let {
            Wj: jB,
            screenPos: QB
          } = BB;
          zB({
            Wj: jB,
            screenPos: QB
          })
        })), (0, aB.jsxs)("div", {
          ref: BB,
          className: "Hitmarker",
          children: [(0, aB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aB.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, aB.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function rQ() {
      const BB = (0, nB.useRef)(!0);
      return (0, uB.f)("localBlockMined", (() => {
        dj.h.play("blockMined")
      })), (0, uB.f)("yourAttackHit", (() => {
        dj.h.play("hitLanded")
      })), (0, uB.f)("localGunHitmarker", (() => {
        dj.h.play("hitLanded")
      })), (0, uB.f)("damagedByOtherPlayer", (() => {
        dj.h.play("damageTaken")
      })), (0, EB.d)("localPlayerAliveSet", (jB => {
        !jB && BB.current && dj.h.play("death"), BB.current = jB
      })), null
    }
    var sQ = zB(1971),
      JQ = zB(36711),
      mQ = zB.n(JQ),
      yQ = zB(2087),
      kQ = zB(2074),
      GQ = zB(3402),
      LQ = zB(34264);
    const gQ = BQ.ye ? 7e7 : 7e3,
      tQ = mQ()("#ffffff").alpha(.5).string();

    function SQ(BB) {
      const jB = (0, GQ.c)(BB);
      return void 0 !== jB && "Gun" === (0, LQ.itemTypeOf)(jB)
    }

    function MQ(BB) {
      if (!BB) return console.error(`Killfeed colour was ${BB}`), tQ;
      try {
        return mQ()(BB).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${BB} is not a colour`), tQ
      }
    }
    const EQ = (0, nB.memo)((function() {
      const {
        t: BB
      } = (0, DB.D)(), jB = (0, nB.useRef)([]), zB = (0, Dz.d)();
      return (0, EB.d)("kill", (function(QB) {
        var nB, dB;
        let {
          killer: IB,
          victim: NB,
          withItem: uB,
          killstreak: UB
        } = QB;
        const aB = jB.current;
        if (aB.length >= 3) {
          const BB = aB.shift();
          clearTimeout(BB.timeout)
        }
        const pB = sB.gameBridge.latest("hiddenPlayerNames"),
          rB = {
            deadName: jQ(NB, BB),
            killerName: jQ(IB, BB),
            isFriend: {
              killer: (0, yQ.h)(IB.realName, pB),
              dead: (0, yQ.h)(NB.realName, pB)
            },
            withItem: uB,
            wasHeadshot: !1,
            killstreak: UB,
            timeout: setTimeout((() => {
              aB.shift(), zB()
            }), gQ),
            reactId: `${null!==(nB=IB.id)&&void 0!==nB?nB:IB.shownName}|${null!==(dB=NB.id)&&void 0!==dB?dB:NB.shownName}|${Date.now()}`,
            killerBackground: MQ(IB.colour),
            deadBackground: MQ(NB.colour)
          };
        aB.push(rB), zB()
      })), (0, nB.useEffect)((() => {
        const BB = jB.current;
        return () => {
          for (; BB.length > 0;) {
            const {
              timeout: jB
            } = BB.pop();
            clearTimeout(jB)
          }
        }
      }), []), (0, aB.jsx)("div", {
        className: "Killfeed",
        children: jB.current.map((BB => {
          let {
            deadName: jB,
            killerName: zB,
            withItem: QB,
            wasHeadshot: nB,
            killstreak: dB,
            killerBackground: IB,
            deadBackground: NB,
            reactId: uB,
            isFriend: UB
          } = BB;
          return (0, aB.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${IB} calc(100% - 10rem), ${NB} 100%)`
            },
            children: [dB >= 2 ? (0, aB.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, BQ.O)(dB)
            }) : null, (0, aB.jsx)("div", {
              className: "KillfeedKillerName",
              children: zB
            }), UB.killer && (0, aB.jsx)(kQ.e, {}), (0, aB.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: SQ(QB) ? "7.5vmin" : "5vmin"
              },
              children: (0, aB.jsx)(sQ.c, {
                itemName: QB,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), nB ? (0, aB.jsx)(AB.c, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, aB.jsx)("div", {
              className: "KillfeedDeadName",
              children: jB
            }), UB.dead && (0, aB.jsx)(kQ.e, {})]
          }, uB)
        }))
      })
    }));
    var iQ = zB(36751),
      qQ = zB(1181),
      fQ = zB.n(qQ),
      oQ = zB(3510),
      HQ = zB(36757),
      DQ = zB(1325);
    const FQ = {},
      YQ = (0, nB.memo)((function() {
        const BB = (0, nB.useRef)({}),
          [, jB] = (0, nB.useReducer)((BB => BB + 1), 0);
        (0, uB.f)("setDirectionArrow", (zB => {
          let {
            id: QB,
            position: nB,
            style: dB,
            text: IB,
            hj: NB
          } = zB;
          const uB = BB.current,
            UB = dB || FQ,
            aB = IB,
            pB = uB[QB];
          if (!pB) return uB[QB] = {
            position: nB,
            style: UB,
            text: aB,
            shouldShowDistance: NB,
            RV: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void jB();
          const rB = !fQ()(pB.style, UB) || !fQ()(pB.text, aB) || pB.shouldShowDistance !== NB;
          pB.position = nB, pB.style = UB, pB.text = aB, pB.shouldShowDistance = NB, rB && jB()
        })), (0, uB.f)("clearDirectionArrow", (zB => {
          let {
            id: QB
          } = zB;
          const nB = BB.current;
          if (null === QB)
            for (const BB in nB) delete nB[BB];
          else delete nB[QB];
          jB()
        })), (0, nB.useEffect)((() => {
          const jB = BB.current,
            zB = (0, DQ.x)((() => {
              ! function(BB) {
                const jB = sB.gameBridge.lookup("localPos", null),
                  zB = oQ.e - VQ,
                  QB = (0, oQ.k)() - VQ;
                for (const nB in BB) {
                  const dB = BB[nB];
                  if (!dB.RV) continue;
                  const IB = sB.gameBridge.lookup("screenPos", dB.position),
                    NB = IB.x - 50,
                    uB = IB.y - 50;
                  IB.x === dB.lastScreenX && IB.y === dB.lastScreenY || (dB.lastScreenX = IB.x, dB.lastScreenY = IB.y, dB.RV.style.translate = `${IB.x}vw ${IB.y}vh`, dB.chevronElement && (dB.chevronElement.style.rotate = `${BQ.b.fastATan2(uB,NB)}rad`));
                  const UB = Math.abs(NB) < zB && Math.abs(uB) < QB;
                  if (UB !== dB.onScreen && (dB.onScreen = UB, dB.RV.classList.toggle("DirectionArrowOnScreen", UB)), dB.shouldShowDistance && dB.distanceElement) {
                    const BB = dB.position[0] - jB[0],
                      zB = dB.position[1] - jB[1],
                      QB = dB.position[2] - jB[2],
                      nB = Math.round(Math.sqrt(BB * BB + zB * zB + QB * QB));
                    (-1 === dB.lastRenderedDist || (0, HQ.c)(nB, dB.lastRenderedDist, dB.lastDistUpdateTime)) && (dB.distanceElement.textContent = `${nB}m`, dB.lastRenderedDist = nB, dB.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(jB)
            }));
          return () => {
            zB();
            for (const BB in jB) delete jB[BB]
          }
        }), []);
        const zB = BB.current;
        return (0, aB.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(zB).map((BB => {
            var jB;
            let [QB, nB] = BB;
            const dB = null !== (jB = (0, LB.Kb)(nB.style)) && void 0 !== jB ? jB : "#ffffff";
            return (0, aB.jsxs)("div", {
              ref: BB => {
                zB[QB] && (zB[QB].RV = BB)
              },
              className: "DirectionArrow",
              style: {
                fontSize: nB.style.fontSize,
                opacity: nB.style.opacity
              },
              children: [(0, aB.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: BB => {
                  zB[QB] && (zB[QB].chevronElement = BB)
                },
                children: [(0, aB.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, aB.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, aB.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, aB.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, aB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: dB
                    }
                  }), (0, aB.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: dB
                    }
                  })]
                })]
              }), (0, aB.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: dB,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${dB}`
                }
              }), nB.text && (0, aB.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: dB,
                  fontWeight: nB.style.fontWeight,
                  fontStyle: nB.style.fontStyle
                },
                children: (0, aB.jsx)(UB.e, {
                  text: nB.text
                })
              }), nB.shouldShowDistance && (0, aB.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: BB => {
                  zB[QB] && (zB[QB].distanceElement = BB)
                },
                style: {
                  color: dB,
                  fontWeight: nB.style.fontWeight,
                  fontStyle: nB.style.fontStyle
                }
              })]
            }, QB)
          }))
        })
      })),
      VQ = .5;
    const hQ = (0, nB.memo)((function(BB) {
        let {
          isTouchScreen: jB
        } = BB;
        return (0, aB.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, aB.jsx)(TQ, {}), jB && (0, aB.jsx)(mz, {})]
        })
      })),
      XQ = {
        readyForNext: 0,
        running: 1
      },
      ZQ = 50;

    function AQ(BB) {
      console.assert(BB.state.current === XQ.readyForNext);
      const jB = BB.queue.current,
        zB = BB.foreground.current;
      if (jB.length > 0 && zB) {
        const {
          toFraction: QB,
          toDuration: nB
        } = jB.shift();
        BB.state.current = XQ.running, zB.style.transition = `transform ${Math.max(nB-ZQ,0)}ms linear`, zB.classList.remove("Complete"), BB.timeout.current = setTimeout((() => {
          zB.style.transform = `scaleX(${QB})`, BB.timeout.current = setTimeout((() => {
            1 === QB && zB.classList.add("Complete"), BB.state.current = XQ.readyForNext, AQ(BB)
          }), Math.max(nB - ZQ, 0))
        }), ZQ)
      }
    }

    function TQ() {
      const BB = (0, nB.useRef)([]),
        jB = (0, nB.useRef)(XQ.readyForNext),
        zB = (0, nB.useRef)(void 0),
        QB = (0, nB.useRef)(null),
        dB = (0, nB.useRef)({
          queue: BB,
          state: jB,
          timeout: zB,
          foreground: QB
        }),
        IB = (0, gB.i)("showProgressBar");
      if ((0, nB.useLayoutEffect)((() => (IB && jB.current === XQ.readyForNext && AQ(dB.current), () => {
          jB.current = XQ.readyForNext, clearTimeout(zB.current), IB && (BB.current.length = 0)
        })), [IB]), (0, uB.f)("progressBarUpdate", (zB => {
          let {
            toFraction: QB,
            toDuration: nB
          } = zB;
          BB.current.push({
            toFraction: QB,
            toDuration: nB
          }), jB.current === XQ.readyForNext && AQ(dB.current)
        })), !IB) return null;
      return (0, aB.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, aB.jsx)("div", {
          className: "ProgressBarForeground",
          ref: QB,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var PQ = zB(36762),
      WQ = zB(2568);
    const eQ = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function lQ(BB) {
      let {
        classes: jB,
        gone: zB
      } = BB;
      const QB = document.documentElement;
      QB.classList.remove(...jB);
      for (const nB of zB) nB.style.display = "block";
      return () => {
        QB.classList.add(...jB);
        for (const BB of zB) BB.style.display = ""
      }
    }

    function wQ(BB) {
      const {
        isTouchScreen: jB
      } = (0, iB.m)(["isTouchScreen"]);
      (0, nB.useLayoutEffect)((() => {
        if (!jB) return;
        const zB = BB.current,
          QB = document.querySelector(`.${PQ.l}`),
          nB = BB => {
            const jB = () => {
              const jB = BB.querySelector(WQ.h),
                QB = function(BB) {
                  const jB = document.documentElement;
                  return {
                    classes: mj.F.map(Lj.C).filter((BB => jB.classList.contains(BB))),
                    gone: [...BB.querySelectorAll(`.TopRightTrayToggle.${WQ.l}`)]
                  }
                }(BB);
              jB && function(BB, jB) {
                (0, WQ.F)(BB, jB.classes.length > 0 || jB.gone.length > 0, (() => lQ(jB)))
              }(jB, QB);
              const nB = `${Math.floor(function(BB,jB,zB){const QB=document.documentElement,nB=QB.classList.contains((0,Lj.H)("menu")),dB=QB.style.getPropertyValue((0,Lj.N)("menu"));if(!nB&&""===dB)return BB.getBoundingClientRect().left;const IB=jB?(0,WQ.s)(jB):()=>{},NB=lQ(zB);QB.classList.remove((0,Lj.H)("menu")),QB.style.removeProperty((0,Lj.N)("menu"));const uB=BB.getBoundingClientRect().left;return NB(),IB(),nB&&QB.classList.add((0,Lj.H)("menu")),""!==dB&&QB.style.setProperty((0,Lj.N)("menu"),dB),uB}(BB,jB,QB)-zB.getBoundingClientRect().left-4)}px`;
              zB.style.getPropertyValue("--InGameHeaderMaxWidth") !== nB && zB.style.setProperty("--InGameHeaderMaxWidth", nB)
            };
            jB();
            const nB = new ResizeObserver(jB);
            nB.observe(BB), nB.observe(QB), window.addEventListener("resize", jB);
            const dB = () => eQ.map((BB => document.documentElement.style.getPropertyValue(BB))).join();
            let IB = dB();
            const NB = new MutationObserver((() => {
              const BB = dB();
              BB !== IB && (IB = BB, jB())
            }));
            NB.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const uB = (0, tB.q)(Lj.f, jB),
              UB = new MutationObserver(jB);
            return UB.observe(BB, {
              childList: !0,
              subtree: !0
            }), () => {
              nB.disconnect(), NB.disconnect(), UB.disconnect(), uB(), window.removeEventListener("resize", jB);
              const zB = BB.querySelector(WQ.h);
              zB && (0, WQ.s)(zB)
            }
          },
          dB = () => QB.querySelector(".TopRightIconsContainer"),
          IB = dB();
        let NB;
        if (IB) NB = nB(IB);
        else {
          const BB = new MutationObserver((() => {
            const jB = dB();
            jB && (BB.disconnect(), NB = nB(jB))
          }));
          BB.observe(QB, {
            childList: !0,
            subtree: !0
          }), NB = () => {
            BB.disconnect()
          }
        }
        return () => {
          NB(), zB.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [jB, BB])
    }
    var xQ = zB(3789),
      KQ = zB(3782),
      CQ = zB(1664),
      cQ = zB(1532),
      bQ = zB(1668),
      vQ = zB(1778),
      RQ = zB(1901),
      OQ = zB(1173),
      Bn = zB(4376),
      jn = zB(1385);
    const zn = 2e4,
      Qn = 6e5,
      nn = new Set;

    function dn() {
      const {
        gameEntrySource: BB,
        loadingOverlayVisible: jB
      } = (0, iB.m)(["gameEntrySource", "loadingOverlayVisible"]), zB = (0, EB.h)("connectedGame", (BB => (0, Bn.h)(BB) ? BB.lobbyName : null)), QB = (0, EB.k)("localPlayerAlive"), dB = (0, EB.h)("players", (BB => null !== BB.localId && void 0 !== BB.byId[BB.localId])), [IB, NB] = (0, nB.useState)(null);
      return !jB && QB && dB && null !== zB && IB !== zB && NB(zB), (0, nB.useEffect)((() => {
        if (!(0, Bn.j)(BB) || null === IB || IB !== zB || nn.has(IB)) return;
        const jB = setTimeout((() => {
          nn.add(IB), async function(BB) {
            const jB = await OQ.userContextManager.getCurrentUserContext();
            let zB;
            try {
              zB = (await cQ.b.getWorldOwnerFriendOffer(jB)).owner
            } catch (nB) {
              return void console.warn("Couldn't ask who owns this world", nB)
            }
            if (!zB || (0, Bn.m)(zB.name, Date.now())) return;
            const QB = zB;
            ! function(BB, jB) {
              const zB = Date.now() + Qn;
              let QB = Date.now(),
                nB = 0;
              const dB = () => {
                const IB = Date.now(),
                  NB = sB.gameBridge.latest("connectedGame");
                NB.lobbyName !== BB || IB > zB || (null === NB.websocketUrl ? QB = 1 / 0 : QB === 1 / 0 && !iB.c.get("loadingOverlayVisible") && sB.gameBridge.latest("localPlayerAlive") && (QB = IB + zn), nB = IB < QB || !sB.gameBridge.latest("localPlayerAlive") || iB.c.get("isUiHidden") || iB.c.get("isUiHiddenByCamera") || (0, vQ.isTypingInInput)() || iB.c.get("loadingOverlayVisible") || (0, CQ.m)() || (0, xQ.f)() || (0, jn.k)() ? 0 : nB + 1, nB >= 2 ? jB() : setTimeout(dB, 500))
              };
              dB()
            }(BB, (() => {
              (0, Bn.d)(bQ.d.getSocialState().friends, QB.name) || ((0, Bn.l)(QB.name, Date.now()), RQ.f.showWorldOwnerOffer(QB), (0, nz.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(IB).catch((BB => {
            console.error("Failed to offer the world's owner as a friend", BB)
          }))
        }), zn);
        return () => {
          clearTimeout(jB)
        }
      }), [BB, IB, zB]), null
    }
    var In = zB(1957);
    const Nn = (0, nB.memo)((function(BB) {
        let {
          durationMs: jB,
          endsAtMs: zB
        } = BB;
        const [, QB] = (0, nB.useReducer)((BB => BB + 1), 0), dB = null === zB ? jB : Math.max(zB - Date.now(), 0);
        return (0, nB.useEffect)((() => {
          if (null === zB || dB <= 0) return;
          const BB = setTimeout(QB, dB - 1e3 * (Math.ceil(dB / 1e3) - 1));
          return () => {
            clearTimeout(BB)
          }
        })), (0, aB.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, BQ.cb)(dB)
        })
      })),
      un = (0, nB.memo)((function() {
        const BB = (0, EB.k)("localEffects");
        return (0, aB.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(BB).map((BB => {
            let [jB, {
              icon: zB,
              displayName: QB,
              durationMs: nB,
              endsAtMs: dB,
              level: IB
            }] = BB;
            return (0, aB.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, aB.jsx)(In.c, {
                icon: zB,
                className: "EffectInfoIcon"
              }), (0, aB.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== nB ? "0" : "1rem"
                },
                children: [(0, aB.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, aB.jsx)(UB.e, {
                    text: null !== QB && void 0 !== QB ? QB : jB,
                    className: "EffectInfoName SmallTextBold"
                  }), IB > 1 && (0, aB.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, BQ.O)(IB)
                  })]
                }), null !== nB && (0, aB.jsx)(Nn, {
                  durationMs: nB,
                  endsAtMs: dB
                })]
              })]
            }, jB)
          }))
        })
      }));
    var Un = zB(36771),
      an = zB(36971),
      pn = zB(214),
      rn = zB(2859),
      sn = zB(3034);

    function Jn(BB, jB) {
      (0, nB.useLayoutEffect)((() => {
        let jB, zB;
        const QB = requestAnimationFrame((() => {
          zB = setTimeout((() => {
            zB = void 0;
            const QB = BB();
            jB = "function" === typeof QB ? QB : void 0
          }), 0)
        }));
        return () => {
          var BB;
          cancelAnimationFrame(QB), clearTimeout(zB), null === (BB = jB) || void 0 === BB || BB()
        }
      }), jB)
    }
    const mn = [5, 5, 5],
      yn = [7, 4, 4, 4];

    function kn(BB) {
      return BB.reduce(((BB, jB) => BB + jB), 0)
    }

    function Gn(BB, jB, zB, QB, nB) {
      const dB = BB.getContext("2d");
      if (!dB) return null;
      const IB = jB.color,
        NB = `${jB.fontWeight} ${nB}px ${jB.fontFamily}`,
        uB = () => {
          BB.width = zB, BB.height = QB, dB.fillStyle = IB, dB.textAlign = "center", dB.textBaseline = "middle", dB.font = NB
        };
      return uB(), {
        ctx: dB,
        reset: uB
      }
    }
    const Ln = (0, nB.memo)((function(BB) {
      let {
        show: jB
      } = BB;
      const zB = (0, nB.useRef)(null),
        QB = (0, nB.useRef)(null),
        dB = (0, nB.useRef)(null),
        IB = (0, mB.o)();
      return (0, nB.useEffect)((() => IB.whenShown((() => {
        let BB = 0,
          jB = 0,
          zB = performance.now(),
          nB = 0;
        const IB = (0, DQ.x)((() => {
          var IB, NB, uB;
          BB++, jB++;
          const UB = performance.now();
          if (UB - zB < 1e3) return;
          const aB = Math.round(BB / (UB - zB) * 1e3);
          if (QB.current = aB, null === (IB = dB.current) || void 0 === IB || IB.call(dB, aB), BB = 0, zB = UB, aB >= 55) return void(nB = 0);
          if (nB += 1, nB < 15) return;
          const pB = null !== (NB = MB.j.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== NB ? NB : 0,
            [rB, JB] = SB.c.get("minChunkAddDist");
          if (function(BB, jB) {
              const zB = sB.gameBridge.lookup("lG", null);
              return null !== zB && (zB.horizontal > BB || zB.vertical > jB)
            }(rB, JB) && (null !== (uB = MB.j.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== uB ? uB : 0) + 432e5 < Date.now() && pB < 3) {
            MB.j.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            Iz.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((BB => {
              "notificationTornDown" !== BB && (BB ? (sB.gameBridge.send("setChunkAddDistance", {
                horizontal: rB,
                vertical: JB
              }), MB.j.setItem("chunkHorizAddDist", rB), MB.j.setItem("chunkVertAddDist", JB), tB.n.Ly("updatedChunkLoadDist"), MB.j.setItem("decreaseLoadDistPromptDeniedCount", 0)) : MB.j.setItem("decreaseLoadDistPromptDeniedCount", pB + 1))
            }))
          }
        }));
        let NB = performance.now();
        jB = 0;
        let uB = null,
          UB = !document.hidden,
          aB = !1;

        function pB() {
          const BB = performance.now() - NB,
            zB = 1e3 * jB / BB;
          UB && !aB && (null === uB && (uB = zB), rn.d.setFps(zB, uB)), jB = 0, NB = performance.now()
        }
        let rB = setInterval(pB, sn.c);

        function JB() {
          jB = 0, NB = performance.now(), clearInterval(rB), rB = setInterval(pB, sn.c)
        }

        function mB() {
          const BB = UB;
          UB = !document.hidden, !BB && UB && JB()
        }
        document.addEventListener("visibilitychange", mB);
        const yB = (0, tB.q)(xz.j, (BB => {
          const jB = aB;
          aB = (0, xz.l)(BB), jB && !aB && JB()
        }));
        return () => {
          IB(), document.removeEventListener("visibilitychange", mB), yB(), clearInterval(rB)
        }
      }))), [IB]), Jn((() => {
        var BB;
        if (!jB || dB.current) return;
        const nB = zB.current,
          IB = window.getComputedStyle(nB.parentElement),
          NB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          uB = parseFloat(IB.fontSize) * NB,
          UB = Math.round(3 * uB),
          aB = Math.round(uB),
          pB = Gn(nB, IB, UB, aB, uB);
        if (!pB) return;
        const {
          ctx: rB,
          reset: sB
        } = pB, JB = BB => {
          sB(), rB.fillText(BB.toString(), nB.width / 2, nB.height / 2)
        };
        dB.current = JB, null !== QB.current && JB(QB.current)
      }), [jB]), (0, aB.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: jB ? "flex" : "none"
        },
        children: [(0, aB.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, aB.jsx)("canvas", {
          className: "FpsCanvas",
          ref: zB,
          width: 48,
          height: 16
        })]
      })
    }));

    function gn(BB) {
      return Math.sign(BB) * Math.round(100 * Math.abs(BB))
    }

    function tn(BB) {
      let {
        getCoordinates: jB,
        showChunkCoords: zB,
        columns: QB
      } = BB;
      const dB = (0, nB.useRef)(null);
      return Jn((() => {
        var BB;
        const nB = dB.current,
          IB = window.getComputedStyle(nB.parentElement),
          NB = null !== (BB = window.devicePixelRatio) && void 0 !== BB ? BB : 1,
          uB = parseFloat(IB.fontSize) * NB,
          UB = Math.round(uB * kn(QB)),
          aB = Math.round(uB),
          pB = Gn(nB, IB, UB, aB, uB);
        if (!pB) return;
        const {
          ctx: rB,
          reset: JB
        } = pB;
        let mB = !0,
          yB = 0,
          kB = 0,
          GB = 0,
          LB = 0,
          gB = 0,
          tB = 0;
        const SB = () => {
          mB = !0
        };
        document.fonts.load(rB.font).then(SB, SB);
        const MB = () => {
          JB(), SB()
        };
        nB.addEventListener("contextrestored", MB);
        let EB = performance.now();
        const iB = (0, DQ.B)((() => {
          var BB, dB, IB, NB, UB, aB;
          const pB = performance.now();
          pB - EB >= 1e3 && (EB = pB, JB(), SB());
          const [MB, iB, qB] = jB(), fB = gn(MB), oB = gn(iB), HB = gn(qB);
          let DB = null;
          if (zB) {
            const BB = sB.gameBridge.lookup("localPos", null);
            DB = (0, jj.Z)(BB[0], BB[1], BB[2])
          }
          const FB = null !== (BB = null === (dB = DB) || void 0 === dB ? void 0 : dB[0]) && void 0 !== BB ? BB : 0,
            YB = null !== (IB = null === (NB = DB) || void 0 === NB ? void 0 : NB[1]) && void 0 !== IB ? IB : 0,
            VB = null !== (UB = null === (aB = DB) || void 0 === aB ? void 0 : aB[2]) && void 0 !== UB ? UB : 0;
          if (!mB && fB === yB && oB === kB && HB === GB && FB === LB && YB === gB && VB === tB) return;
          mB = !1, yB = fB, kB = oB, GB = HB, LB = FB, gB = YB, tB = VB;
          const hB = [(fB / 100).toFixed(2), (oB / 100).toFixed(2), (HB / 100).toFixed(2)];
          DB && hB.unshift(`${FB} ${YB} ${VB}`), rB.clearRect(0, 0, nB.width, nB.height);
          const XB = nB.height / 2;
          let ZB = 0;
          for (let jB = 0; jB < hB.length; jB++) {
            const BB = uB * QB[jB];
            rB.fillText(hB[jB], ZB + BB / 2, XB, BB), ZB += BB
          }
        }));
        return () => {
          iB(), nB.removeEventListener("contextrestored", MB)
        }
      }), [jB, zB, QB]), (0, aB.jsx)("div", {
        className: "CoordinateUI",
        children: (0, aB.jsx)("canvas", {
          ref: dB,
          className: "CoordinateCanvas",
          width: 16 * kn(QB),
          height: 16
        })
      })
    }
    const Sn = (0, nB.memo)((function() {
        const BB = (0, nB.useCallback)((() => {
          const BB = sB.gameBridge.lookup("localPos", null);
          return [BB[0], BB[1], BB[2]]
        }), []);
        return (0, aB.jsx)(tn, {
          getCoordinates: BB,
          showChunkCoords: !1,
          columns: mn
        })
      })),
      Mn = (0, nB.memo)((function() {
        const BB = (0, nB.useCallback)((() => {
          const BB = sB.gameBridge.lookup("localPos", null),
            jB = pn.e.ZJ;
          let zB = BB[0] % jB,
            QB = BB[1] % jB,
            nB = BB[2] % jB;
          return zB < 0 && (zB += jB), QB < 0 && (QB += jB), nB < 0 && (nB += jB), [zB, QB, nB]
        }), []);
        return (0, aB.jsx)(tn, {
          getCoordinates: BB,
          showChunkCoords: !0,
          columns: yn
        })
      }));
    var En = zB(2118),
      qn = zB(1369),
      fn = zB(1067),
      Hn = zB(1263),
      Dn = zB(36828),
      Fn = zB(1487),
      Yn = zB(3270);
    const Vn = (0, nB.memo)((function() {
      const BB = (0, gB.i)("maxAuraLevel");
      return 0 === BB ? null : (0, aB.jsx)(hn, {
        maxLevel: BB
      })
    }));

    function hn(BB) {
      let {
        maxLevel: jB
      } = BB;
      const zB = (0, gB.i)("auraPerLevel"),
        [QB, dB] = (0, nB.useState)((() => {
          var BB;
          return null !== (BB = sB.gameBridge.latest("aura")) && void 0 !== BB ? BB : void 0
        })),
        [IB, NB] = (0, nB.useState)((() => LB(QB))),
        [uB, UB] = (0, nB.useReducer)((BB => BB + 1), 0),
        pB = (0, nB.useRef)(null),
        rB = (0, nB.useRef)([]),
        JB = (0, nB.useRef)({
          width: 0,
          level: 0
        }),
        mB = (0, nB.useRef)(null),
        yB = (0, nB.useRef)(null);

      function kB() {
        if (null !== mB.current) return;
        if (0 === rB.current.length) return;
        const {
          width: BB,
          level: jB
        } = rB.current.shift();
        let zB;
        if (jB !== JB.current.level && jB > JB.current.level !== BB > JB.current.width) {
          const QB = jB > JB.current.level;
          zB = QB ? BB : 100 - BB, pB.current.style.transition = "none", pB.current.style.width = QB ? "0%" : "100%", pB.current.offsetWidth
        } else zB = Math.abs(BB - JB.current.width);
        const QB = 100 * zB / 20;
        pB.current.style.transition = `width ${QB}ms linear`, NB(BB), JB.current = {
          width: BB,
          level: jB
        }, rB.current.length > 0 && (mB.current = setTimeout((() => {
          mB.current = null, kB()
        }), QB))
      }

      function LB(BB) {
        return Math.floor(BB / zB) === jB ? 100 : BB % zB / zB * 100
      }
      return (0, nB.useEffect)((() => () => {
        clearTimeout(mB.current), clearTimeout(yB.current), mB.current = null, yB.current = null
      }), []), (0, EB.d)("aura", (BB => {
        if (yB.current && clearTimeout(yB.current), null === BB) return clearTimeout(mB.current), yB.current = null, mB.current = null, rB.current = [], JB.current = {
          width: 0,
          level: 0
        }, dB(void 0), void NB(0);
        yB.current = setTimeout((() => {
          const jB = Math.floor(QB / zB),
            nB = Math.floor(BB / zB),
            IB = LB(BB);
          BB > QB && Dn.e.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), nB > jB ? (nB % 5 === 0 && Dn.e.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), UB(), rB.current.push({
            width: 100,
            level: jB
          })) : nB < jB && rB.current.push({
            width: 0,
            level: jB
          }), BB === QB && nB === jB || rB.current.push({
            width: IB,
            level: nB
          }), dB(BB), kB()
        }), 50)
      })), (0, GB.e)(), (0, aB.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, aB.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, aB.jsx)(Fn.b, {
            showSignal: uB,
            particleElement: (0, aB.jsx)("img", {
              src: (0, Yn.f)("glint"),
              alt: ""
            })
          }), (0, aB.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, Yn.f)("glint"),
            alt: "aura"
          }), (0, aB.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== QB && void 0 !== QB ? QB : 0) / zB)
          })]
        }), (0, aB.jsx)("div", {
          className: "AuraBar",
          children: (0, aB.jsx)("div", {
            ref: pB,
            className: "AuraBarBackground",
            style: {
              width: `${IB}%`
            }
          })
        })]
      })
    }
    var Xn = zB(2682);

    function Zn(BB) {
      BB.timed && (BB.endedAnimation = BB.timed.animation, BB.timed = null)
    }
    const An = (0, nB.memo)((function() {
      const BB = (0, nB.useRef)(null),
        jB = (0, nB.useRef)(null),
        zB = (0, nB.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, uB.f)("middleScreenBarInitiate", (BB => {
        var QB;
        let {
          duration: nB,
          Tn: dB,
          horizBarRemOffset: IB
        } = BB;
        const NB = zB.current;
        Zn(NB);
        const uB = jB.current;
        if (!(nB >= 0) || !uB) return;
        null === (QB = NB.endedAnimation) || void 0 === QB || QB.cancel(), NB.endedAnimation = null;
        const UB = uB.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: nB,
          fill: "forwards"
        });
        NB.timed = {
          Tn: dB,
          horizBarRemOffset: IB,
          animation: UB
        }
      })), (0, uB.f)("middleScreenBarRemove", (() => {
        Zn(zB.current)
      })), (0, nB.useEffect)((() => {
        const QB = zB.current;
        let nB = Number.NaN,
          dB = Number.NaN,
          IB = Number.NaN;
        return (0, DQ.u)((() => {
          var zB, NB, uB, UB;
          const aB = BB.current,
            pB = jB.current;
          if (!aB || !pB) return;
          null !== (zB = QB.timed) && void 0 !== zB && zB.Tn && "finished" === QB.timed.animation.playState && Zn(QB), null === (NB = QB.endedAnimation) || void 0 === NB || NB.cancel(), QB.endedAnimation = null;
          let rB = QB.timed ? 1 : 0;
          if (!QB.timed) {
            const BB = sB.gameBridge.lookup("momentumFrac", null);
            rB = BB > 0 ? 1 : 0, BB !== IB && (IB = BB, pB.style.transform = `scaleX(${BB})`)
          }
          const JB = null !== (uB = null === (UB = QB.timed) || void 0 === UB ? void 0 : UB.horizBarRemOffset) && void 0 !== uB ? uB : 0;
          JB === nB && rB === dB || (nB = JB, dB = rB, aB.style.transform = `translateX(calc(-50% + ${JB}rem)) scaleX(${rB})`)
        }))
      }), []), (0, aB.jsx)("div", {
        className: "MiddleScreenBar",
        ref: BB,
        children: (0, aB.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: jB
        })
      })
    }));
    var Tn = zB(4766),
      Pn = zB(2847);

    function Wn() {
      const {
        t: BB
      } = (0, DB.D)(), jB = (0, uB.h)("serverUpdating", null), zB = (0, Pn.b)(250, null !== jB);
      return null === jB || zB - jB > 3e4 ? null : (0, aB.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, aB.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: BB("updateWaiting:updatingIn", {
            countdown: (0, Tn.m)(jB - zB)
          })
        }), (0, aB.jsx)("div", {
          children: BB("updateWaiting:bringYouBack")
        })]
      })
    }
    var en = zB(36994),
      wn = zB(2033);
    const xn = [{
        translationKey: "general:interact"
      }],
      Kn = (0, nB.memo)((function() {
        const BB = (0, gB.i)("crosshairText"),
          {
            interactPrompt: jB,
            blockText: zB,
            neededTool: QB
          } = (0, EB.k)("crosshairTarget"),
          {
            isTouchScreen: dB
          } = (0, iB.m)(["isTouchScreen"]),
          IB = (0, fB.u)(),
          NB = (0, HB.c)("alt-fire");
        (0, nB.useEffect)((() => {
          sB.gameBridge.send("setCrosshairInteractPrompt", !dB || IB ? "key" : "touch")
        }), [dB, IB]);
        const [pB, rB] = (0, nB.useReducer)((BB => BB + 1), 0);
        (0, uB.f)("customBindingsChanged", rB);
        var JB;
        if (null !== jB && (IB && null !== NB || !dB && null !== (0, wn.q)("alt-fire"))) return (0, aB.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, aB.jsx)(qB.b, {
            noaAction: "alt-fire"
          }), (0, aB.jsx)(UB.e, {
            text: null !== (JB = jB.label) && void 0 !== JB ? JB : xn
          })]
        });
        let mB = null;
        return null !== zB ? mB = zB : null !== BB && "" !== BB ? mB = BB : null !== QB && (mB = [{
          icon: QB,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), mB ? (0, aB.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, aB.jsx)(UB.e, {
            text: mB
          })
        }) : null
      }));
    var Cn = zB(2690);
    const cn = (0, nB.memo)((function() {
      var BB;
      const {
        interactPrompt: jB
      } = (0, EB.k)("crosshairTarget"), {
        openInGameMenuName: zB,
        openEverythingMenuName: QB
      } = (0, iB.m)(["openInGameMenuName", "openEverythingMenuName"]), nB = (0, uB.h)("aimingOverlay", "none"), dB = (0, cB.j)(), IB = (0, Cn.c)();
      return null === jB || null !== zB || null !== QB || "sniper" === nB || dB || IB ? null : (0, aB.jsx)(bn, {
        label: null !== (BB = jB.label) && void 0 !== BB ? BB : xn
      })
    }));

    function bn(BB) {
      let {
        label: jB
      } = BB;
      const zB = hj(RB.c.Interact, !1);
      return (0, nB.useEffect)((() => (tB.n.Ly(Lj.u), () => {
        tB.n.Ly(Lj.u)
      })), []), (0, aB.jsx)("div", {
        ref: zB,
        className: "TouchInteractHit",
        children: (0, aB.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, aB.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, aB.jsx)(AB.c, {
              name: "hand-back-point-up"
            })
          }), (0, aB.jsx)(UB.e, {
            text: jB
          })]
        })
      })
    }
    var vn = zB(83),
      Rn = zB(34148),
      On = zB(1794),
      Bd = zB(34163);
    const jd = "ScreenshotMode";
    let zd = [];
    const Qd = new Set;

    function nd(BB) {
      zd = BB;
      for (const jB of Qd) jB(BB)
    }
    const dd = (0, nB.memo)((function() {
      const {
        screenshotMode: BB,
        isTouchScreen: jB,
        openEverythingMenuName: zB,
        openInGameMenuName: QB
      } = (0, iB.m)(["screenshotMode", "isTouchScreen", "openEverythingMenuName", "openInGameMenuName"]), dB = null !== zB || null !== QB, IB = (0, EB.k)("localPlayerAlive");
      return (0, nB.useEffect)((() => {
        !BB || !dB && jB && IB || (0, Rn.g)()
      }), [BB, dB, jB, IB]), (0, nB.useEffect)((() => Rn.g), []), (0, nB.useEffect)((() => {
        if (BB) return document.documentElement.classList.add(jd), (0, OB.l)(bB.t.ScreenshotMode, bB.t.ScreenshotMode, "screenshotMode"), () => {
          document.documentElement.classList.remove(jd), (0, OB.l)(bB.t.ScreenshotMode, 0, "screenshotMode")
        }
      }), [BB]), BB ? (0, vn.createPortal)((0, aB.jsx)(Id, {}), document.body) : null
    }));

    function Id() {
      const {
        t: BB
      } = (0, DB.D)(), [jB, zB] = (0, nB.useState)(!1), [QB, dB] = (0, nB.useState)(0), [IB, NB] = (0, nB.useState)(null), uB = function() {
        const [BB, jB] = (0, nB.useState)(zd);
        return (0, nB.useEffect)((() => (Qd.add(jB), jB(zd), () => {
          Qd.delete(jB)
        })), []), BB
      }(), UB = (0, nB.useRef)(), pB = (0, nB.useRef)(!1);
      (0, nB.useEffect)((() => () => {
        clearTimeout(UB.current)
      }), []);
      const rB = BB => {
          clearTimeout(UB.current), NB(BB), BB && (UB.current = setTimeout((() => {
            NB(null)
          }), 2e3))
        },
        sB = (jB, zB) => {
          switch (jB) {
            case "saved":
              rB(BB("screenshotMode:saved"));
              break;
            case "denied":
              rB(BB("screenshotMode:denied"));
              break;
            case "needsTap":
              zd.length >= 8 ? (console.error("Screenshot mode: 8 photos already wait on Save photo"), rB(BB("screenshotMode:saveWaitingFirst"))) : nd([...zd, zB])
          }
        },
        JB = jB => {
          console.error("Screenshot mode: the photo wasn't saved", jB), rB(BB("screenshotMode:failed"))
        };
      return (0, aB.jsxs)("div", {
        className: "ScreenshotModeOverlay",
        children: [(0, aB.jsx)("div", {
          className: "ScreenshotModeViewfinder",
          "aria-hidden": !0
        }), (0, aB.jsx)("div", {
          className: "ScreenshotModeCentre",
          "aria-hidden": !0
        }), QB > 0 && (0, aB.jsx)("div", {
          className: "ScreenshotModeFlash"
        }, QB), (0, aB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeBack",
          "aria-label": BB("screenshotMode:back"),
          onClick: Rn.g,
          children: (0, aB.jsx)(AB.c, {
            name: "arrow-left"
          })
        }), (0, aB.jsx)("button", {
          type: "button",
          className: "ScreenshotModeButton ScreenshotModeShutter",
          "aria-label": BB("screenshotMode:takePhoto"),
          "aria-busy": jB,
          onClick: () => {
            (async () => {
              if (!jB) {
                zB(!0), rB(null);
                try {
                  const BB = await (0, Rn.k)();
                  dB((BB => BB + 1)), sB(await (0, Bd.d)(BB), BB)
                } catch (BB) {
                  JB(BB)
                } finally {
                  zB(!1)
                }
              }
            })()
          },
          children: (0, aB.jsx)(AB.c, {
            name: "camera-alt"
          })
        }), null !== IB ? (0, aB.jsx)("div", {
          className: "ScreenshotModeNote",
          role: "status",
          children: IB
        }) : uB.length > 0 && (0, aB.jsxs)("button", {
          type: "button",
          className: "ScreenshotModeNote ScreenshotModeSaveNote",
          onClick: () => {
            if (pB.current) return;
            pB.current = !0;
            const [BB] = zd;
            nd(zd.slice(1));
            const jB = jB => {
              console.warn("Screenshot mode: downloading a photo the share sheet didn't take", jB), (0, On.e)(BB, BB.name), sB("saved", BB)
            };
            (0, Bd.h)(BB).then((zB => {
              "needsTap" === zB ? jB(zB) : sB(zB, BB)
            }), jB).catch(JB).finally((() => {
              pB.current = !1
            }))
          },
          children: [(0, aB.jsx)(AB.c, {
            name: "image"
          }), BB("screenshotMode:savePhoto"), uB.length > 1 && ` (${uB.length})`]
        })]
      })
    }
    var Nd = zB(4855),
      ud = zB(4925);
    const Ud = (0, nB.forwardRef)((function(BB, jB) {
        let {
          text: zB,
          className: QB,
          children: nB
        } = BB;
        return zB.hasText ? (0, aB.jsx)("div", {
          ref: jB,
          className: IB()("HudTextPanel", QB, {
            NoBackground: !zB.showBackground
          }),
          children: null !== nB && void 0 !== nB ? nB : (0, aB.jsx)(UB.e, {
            text: zB.content
          })
        }) : null
      })),
      pd = (0, nB.memo)((function() {
        const BB = (0, gB.m)("middleTextTop"),
          [jB, zB] = (0, nB.useState)(null),
          QB = (0, PQ.o)(jB);
        return BB.hasText ? (0, aB.jsx)("div", {
          className: IB()("MiddleTextTopContainer", {
            MiddleTextTopBelow: QB
          }),
          children: (0, aB.jsx)(Ud, {
            ref: zB,
            className: "MiddleTextTop",
            text: BB
          })
        }) : null
      })),
      rd = (0, nB.memo)((function() {
        const BB = (0, gB.d)();
        return (0, aB.jsx)(aB.Fragment, {
          children: BB.map(((BB, jB) => (0, aB.jsx)(Ud, {
            className: "HeaderChip",
            text: BB
          }, jB)))
        })
      }));
    var sd = zB(3727),
      Jd = zB(4713);
    const md = (0, nB.memo)((function() {
      const {
        t: BB
      } = (0, DB.D)(), [jB, zB] = (0, nB.useState)(!1), QB = (0, nB.useRef)(!1), dB = function(BB) {
        let {
          gameNameWithVariation: jB,
          lobbyName: zB
        } = BB;
        if ((0, fn.n)(jB)) return yd;
        if ((0, Hn.B)(zB)) return kd;
        return null
      }((0, EB.k)("connectedGame"));
      if (!dB || jB) return null;
      const IB = Jd.d[dB.target];
      return (0, aB.jsx)(ZB.g, {
        tooltipInner: (0, aB.jsx)("div", {
          children: BB(IB.reportButtonTooltip)
        }),
        children: (0, aB.jsx)("div", {
          children: (0, aB.jsx)(ez.L, {
            onClick: () => {
              QB.current || (QB.current = !0, (0, Jd.g)(dB.reportPolicyIds, IB).then((BB => {
                null !== BB && void 0 !== BB && BB.selectedPolicyId && (sB.gameBridge.send("reportLobbyOrGame", {
                  target: dB.target,
                  sN: BB.selectedPolicyId,
                  details: BB.JN
                }), zB(!0))
              })).finally((() => {
                QB.current = !1
              })))
            }
          })
        })
      })
    }));
    const yd = {
        target: "customGame",
        reportPolicyIds: sd.d
      },
      kd = {
        target: "lobby",
        reportPolicyIds: sd.g
      };
    var Gd = zB(8776),
      Ld = zB(37007),
      gd = zB(37020),
      td = zB(37023),
      Sd = zB(37031),
      Md = zB(37012);
    let Ed = !1;
    async function qd(BB, jB) {
      var zB, QB;
      const {
        files: nB
      } = jB, dB = nB.replayKey();
      if (null === dB) return "none";
      if (Ed) throw new Error(Md.d.saveBusy.text);
      const IB = null !== (zB = null === (QB = nB.saveRefusal) || void 0 === QB ? void 0 : QB.call(nB)) && void 0 !== zB ? zB : null;
      if (null !== IB) throw new Error(IB);
      Ed = !0;
      try {
        return await async function(BB, jB, zB) {
          const {
            files: QB
          } = jB, nB = () => QB.replayKey() === zB, dB = (BB, jB) => {
            nB() && QB.markSaved(BB, jB)
          };
          let IB = null;
          if (jB.pickerSupported()) {
            try {
              if (IB = await jB.chooseFile(BB ? null : QB.fileHandle()), null === IB) return "xz"
            } catch (uB) {
              jB.onFallback(uB)
            }
            if (!nB()) throw new Error(Md.d.saveClosed.text)
          }
          const NB = await QB.encode();
          if (null === NB) {
            if (null !== IB) throw new Error(Md.d.saveClosed.text);
            return "none"
          }
          if (null !== IB) try {
            return await jB.write(IB, NB), dB(IB), "written"
          } catch (uB) {
            jB.onFallback(uB)
          }
          return dB(null, jB.download(NB)), "downloaded"
        }(BB, jB, dB)
      } finally {
        Ed = !1
      }
    }
    var fd = zB(37062),
      od = zB(4664);
    const Hd = [1, 2, 4, 8, 16, 32, 64];

    function Dd(BB, jB) {
      return Math.max(0, Math.min(BB, jB))
    }

    function Fd(BB, jB, zB) {
      return zB <= jB ? 0 : (BB - jB) / (zB - jB) * 100
    }

    function Yd(BB, jB, zB) {
      const QB = zB - jB;
      return Math.round(jB + BB / 100 * QB)
    }

    function Vd(BB, jB) {
      const zB = Math.floor(BB / jB / 60),
        QB = Math.floor(BB / jB % 60),
        nB = BB % jB;
      return `${zB.toString().padStart(2,"0")}:${QB.toString().padStart(2,"0")}:${nB.toString().padStart(2,"0")}`
    }

    function hd(BB) {
      return Number.isInteger(BB) || Hd.includes(BB) ? `${Math.round(BB)}\xd7` : `${BB.toFixed(1)}\xd7`
    }

    function Xd(BB, jB) {
      const zB = Hd.indexOf(BB);
      if (-1 !== zB) return "in" === jB ? Hd[Math.min(zB + 1, Hd.length - 1)] : Hd[Math.max(zB - 1, 0)];
      if ("in" === jB) {
        for (const jB of Hd)
          if (jB >= BB) return jB;
        return BB
      }
      for (let QB = Hd.length - 1; QB >= 0; QB--)
        if (Hd[QB] <= BB) return Hd[QB];
      return Hd[0]
    }

    function Zd(BB, jB) {
      const zB = jB.getBoundingClientRect();
      if (zB.width <= 0) return 0;
      const QB = (BB - zB.left) / zB.width * 100;
      return Math.max(0, Math.min(100, QB))
    }

    function Ad(BB, jB) {
      return jB <= 0 ? 0 : BB / jB * 100
    }

    function Td(BB, jB, zB) {
      const QB = [];
      let nB = Math.ceil(BB / zB) * zB;
      for (; nB <= jB;) QB.push(nB), nB += zB;
      return QB
    }
    var Pd = zB(37071);
    const Wd = [{
        label: "Linear",
        easing: Pd.k
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: Pd.d
      }, {
        label: "Ease Out",
        easing: Pd.h
      }, {
        label: "Ease In Out",
        easing: Pd.c
      }],
      ed = 200,
      ld = 150;

    function wd(BB) {
      const jB = BB => Number(BB.toFixed(3)).toString();
      return `cubic-bezier(${jB(BB[0])}, ${jB(BB[1])}, ${jB(BB[2])}, ${jB(BB[3])})`
    }

    function xd(BB, jB) {
      return {
        cx: 25 + BB * ld,
        cy: 25 + (1 - jB) * ld
      }
    }

    function Kd(BB, jB, zB) {
      const QB = BB - zB.left,
        nB = jB - zB.top;
      return {
        x: BQ.b.clamp((QB - 25) / ld, 0, 1),
        y: BQ.b.clamp(1 - (nB - 25) / ld, -1, 2)
      }
    }

    function Cd(BB, jB, zB, QB, nB) {
      return {
        x: (0, Pd.v)(BB, zB, nB),
        y: (0, Pd.v)(jB, QB, nB)
      }
    }
    const cd = (0, nB.memo)((function(BB) {
      let {
        value: jB,
        onChange: zB
      } = BB;
      const QB = (0, nB.useRef)(null),
        dB = (0, nB.useRef)(null),
        [IB, NB] = (0, nB.useState)(null),
        uB = (0, nB.useCallback)((() => {
          const BB = QB.current;
          if (!BB) return;
          const zB = BB.getContext("2d");
          if (!zB) return;
          const nB = window.devicePixelRatio || 1;
          BB.width = ed * nB, BB.height = ed * nB, zB.setTransform(nB, 0, 0, nB, 0, 0), zB.clearRect(0, 0, ed, ed), zB.fillStyle = "rgba(38, 52, 93, 0.85)", zB.fillRect(0, 0, ed, ed), zB.beginPath();
          const dB = xd(0, 0),
            NB = xd(1, 1);
          zB.moveTo(dB.cx, dB.cy), zB.lineTo(NB.cx, NB.cy), zB.strokeStyle = "rgba(164, 164, 164, 0.35)", zB.setLineDash([3, 3]), zB.stroke(), zB.setLineDash([]);
          const [uB, UB, aB, pB] = jB, rB = xd(uB, UB), sB = xd(aB, pB);
          zB.strokeStyle = "rgba(252, 211, 115, 0.55)", zB.lineWidth = 1.5, zB.beginPath(), zB.moveTo(dB.cx, dB.cy), zB.lineTo(rB.cx, rB.cy), zB.moveTo(NB.cx, NB.cy), zB.lineTo(sB.cx, sB.cy), zB.stroke(), zB.strokeStyle = "#fcd373", zB.lineWidth = 2, zB.beginPath();
          for (let jB = 0; jB <= 50; jB++) {
            const BB = Cd(uB, UB, aB, pB, jB / 50),
              QB = xd(BB.x, BB.y);
            0 === jB ? zB.moveTo(QB.cx, QB.cy) : zB.lineTo(QB.cx, QB.cy)
          }
          zB.stroke();
          const JB = (BB, jB, QB) => {
            zB.beginPath(), zB.arc(BB, jB, QB ? 6 : 5, 0, 2 * Math.PI), zB.fillStyle = QB ? "#ffb914" : "#fcd373", zB.fill(), zB.strokeStyle = "#1a1f2e", zB.lineWidth = 1.5, zB.stroke()
          };
          JB(rB.cx, rB.cy, "p1" === IB), JB(sB.cx, sB.cy, "p2" === IB)
        }), [IB, jB]);
      (0, nB.useEffect)((() => {
        uB()
      }), [uB]);
      const UB = (0, nB.useCallback)(((BB, nB) => {
          const IB = QB.current,
            NB = dB.current;
          if (!IB || !NB) return;
          const uB = IB.getBoundingClientRect(),
            {
              x: UB,
              y: aB
            } = Kd(BB, nB, uB);
          zB("p1" === NB ? [UB, aB, jB[2], jB[3]] : [jB[0], jB[1], UB, aB])
        }), [zB, jB]),
        pB = (0, nB.useCallback)((BB => {
          const zB = QB.current;
          if (!zB) return;
          const nB = zB.getBoundingClientRect();
          let {
            x: IB,
            y: uB
          } = Kd(BB.clientX, BB.clientY, nB);
          IB = BQ.b.clamp(IB, 0, 1), uB = BQ.b.clamp(uB, 0, 1);
          const [aB, pB, rB, sB] = jB.map((BB => BQ.b.clamp(BB, 0, 1))), JB = Math.hypot(IB - aB, uB - pB), mB = Math.hypot(IB - rB, uB - sB), yB = JB <= mB ? "p1" : "p2";
          ("p1" === yB ? JB : mB) > .12 || (dB.current = yB, NB(yB), zB.setPointerCapture(BB.pointerId), UB(BB.clientX, BB.clientY))
        }), [UB, jB]),
        rB = (0, nB.useCallback)((BB => {
          dB.current && UB(BB.clientX, BB.clientY)
        }), [UB]),
        sB = (0, nB.useCallback)((BB => {
          dB.current = null, NB(null), BB.currentTarget.hasPointerCapture(BB.pointerId) && BB.currentTarget.releasePointerCapture(BB.pointerId)
        }), []);
      return (0, aB.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, aB.jsx)("canvas", {
          ref: QB,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: ed,
            height: ed
          },
          onPointerDown: pB,
          onPointerMove: rB,
          onPointerUp: sB,
          onPointerCancel: sB
        }), (0, aB.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: wd(jB)
        })]
      })
    }));
    var bd = zB(1718),
      vd = zB(1694);
    const Rd = 12;

    function Od(BB) {
      return {
        left: BB.left + BB.width / 2,
        top: BB.top - 8
      }
    }

    function BI(BB, jB) {
      const [zB, QB] = (0, nB.useState)(null);
      return (0, nB.useLayoutEffect)((() => {
        const zB = BB.current;
        if (!zB) return;
        const {
          width: nB,
          height: dB
        } = zB.getBoundingClientRect();
        QB(function(BB, jB, zB) {
          const QB = window.innerWidth,
            nB = window.innerHeight,
            dB = jB / 2;
          let IB = BB.left + BB.width / 2;
          IB = Math.max(Rd + dB, Math.min(IB, QB - Rd - dB));
          const NB = BB.top - 8 - Rd,
            uB = nB - BB.bottom - 8 - Rd,
            UB = NB < zB && uB >= NB;
          let aB;
          UB ? (aB = BB.bottom + 8, aB + zB > nB - Rd && (aB = nB - Rd - zB), aB = Math.max(Rd, aB)) : (aB = BB.top - 8, aB - zB < Rd && (aB = Rd + zB));
          return {
            left: IB,
            top: aB,
            placeBelow: UB
          }
        }(jB, nB, dB))
      }), [jB, BB]), zB
    }

    function jI(BB, jB, zB) {
      (0, nB.useEffect)((() => (0, vd.c)("pointerdown", (QB => {
        var nB, dB;
        const IB = QB.target;
        IB instanceof Node && (null !== (nB = BB.current) && void 0 !== nB && nB.contains(IB) || null !== zB && void 0 !== zB && null !== (dB = zB.current) && void 0 !== dB && dB.contains(IB) || (0, bd.l)(IB) || jB())
      }))), [zB, jB, BB])
    }

    function zI(BB) {
      let {
        label: jB,
        value: zB,
        onChange: QB
      } = BB;
      return (0, aB.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, aB.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: jB
        }), (0, aB.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((BB, jB) => (0, aB.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, aB.jsx)("span", {
              children: BB
            }), (0, aB.jsx)("input", {
              type: "number",
              step: "any",
              value: zB[jB],
              onChange: BB => {
                const nB = Number.parseFloat(BB.target.value);
                if (Number.isNaN(nB)) return;
                const dB = [zB[0], zB[1], zB[2]];
                dB[jB] = nB, QB(dB)
              }
            })]
          }, BB)))
        })]
      })
    }
    const QI = (0, nB.memo)((function(BB) {
        var jB, zB, QB;
        let {
          keyframe: dB,
          anchor: NB,
          hasOutgoingSegment: uB,
          onClose: UB,
          onApply: pB,
          onDelete: rB,
          onUseCurrentCamera: sB
        } = BB;
        const JB = (0, nB.useRef)(null),
          mB = BI(JB, NB.rect),
          [yB, kB] = (0, nB.useState)((() => [dB.position[0], dB.position[1], dB.position[2]])),
          [GB, LB] = (0, nB.useState)((() => [dB.direction[0], dB.direction[1], dB.direction[2]])),
          [gB, tB] = (0, nB.useState)((() => dB.easing));
        (0, nB.useEffect)((() => {
          kB([dB.position[0], dB.position[1], dB.position[2]]), LB([dB.direction[0], dB.direction[1], dB.direction[2]]), tB(dB.easing)
        }), [dB]), jI(JB, UB);
        const SB = (0, nB.useCallback)((() => {
            pB({
              vp: dB.vp,
              position: yB,
              direction: GB,
              easing: gB
            }), UB()
          }), [GB, gB, dB.vp, pB, UB, yB]),
          MB = (0, nB.useCallback)((() => {
            rB(dB.vp), UB()
          }), [dB.vp, rB, UB]),
          EB = (0, nB.useCallback)((() => {
            const BB = sB();
            BB && (kB([BB.position[0], BB.position[1], BB.position[2]]), LB([BB.direction[0], BB.direction[1], BB.direction[2]]))
          }), [sB]),
          iB = Od(NB.rect);
        return (0, aB.jsxs)("div", {
          ref: JB,
          className: IB()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (jB = null === mB || void 0 === mB ? void 0 : mB.placeBelow) && void 0 !== jB && jB,
            Positioned: null !== mB
          }),
          style: {
            left: `${null!==(zB=null===mB||void 0===mB?void 0:mB.left)&&void 0!==zB?zB:iB.left}px`,
            top: `${null!==(QB=null===mB||void 0===mB?void 0:mB.top)&&void 0!==QB?QB:iB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, aB.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, aB.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, aB.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", NB.vp]
            })]
          }), (0, aB.jsx)(zI, {
            label: "Position",
            value: yB,
            onChange: kB
          }), (0, aB.jsx)(zI, {
            label: "Direction",
            value: GB,
            onChange: LB
          }), uB && (0, aB.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, aB.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, aB.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: Wd.map((BB => {
                const jB = (zB = gB, QB = BB.easing, zB[0] === QB[0] && zB[1] === QB[1] && zB[2] === QB[2] && zB[3] === QB[3]);
                var zB, QB;
                return (0, aB.jsx)(ez.M, {
                  className: IB()("ReplayKeyframePopoverPreset", {
                    Active: jB
                  }),
                  onClick: () => {
                    tB(BB.easing)
                  },
                  children: BB.label
                }, BB.label)
              }))
            }), (0, aB.jsx)(cd, {
              value: gB,
              onChange: tB
            })]
          }), (0, aB.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, aB.jsx)(ez.f, {
              className: "ReplayViewerCompactButton",
              onClick: EB,
              children: "Use current view"
            }), (0, aB.jsx)(ez.m, {
              className: "ReplayViewerCompactButton",
              onClick: SB,
              children: "Apply"
            }), (0, aB.jsx)(ez.G, {
              className: "ReplayViewerCompactButton",
              onClick: MB,
              children: "Delete"
            })]
          })]
        })
      })),
      nI = (0, nB.memo)((function(BB) {
        var jB, zB, QB;
        let {
          anchor: dB,
          hasPlaybackMark: NB,
          onClose: uB,
          onMark: UB,
          onZoom: pB,
          onCrop: rB,
          onDeleteKeyframes: sB,
          onClearMark: JB
        } = BB;
        const mB = (0, nB.useRef)(null),
          yB = BI(mB, dB.rect),
          kB = Od(dB.rect),
          GB = {
            startTick: dB.startTick,
            endTick: dB.endTick
          },
          LB = dB.endTick > dB.startTick;
        return jI(mB, uB), (0, aB.jsx)("div", {
          ref: mB,
          className: IB()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (jB = null === yB || void 0 === yB ? void 0 : yB.placeBelow) && void 0 !== jB && jB,
            Positioned: null !== yB
          }),
          style: {
            left: `${null!==(zB=null===yB||void 0===yB?void 0:yB.left)&&void 0!==zB?zB:kB.left}px`,
            top: `${null!==(QB=null===yB||void 0===yB?void 0:yB.top)&&void 0!==QB?QB:kB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: (0, aB.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, aB.jsx)(ez.m, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                UB(GB)
              },
              disabled: !LB,
              children: (0, aB.jsx)("span", {
                children: " Play range "
              })
            }), (0, aB.jsx)(ez.f, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                pB(GB)
              },
              children: (0, aB.jsx)("span", {
                children: " Zoom "
              })
            }), (0, aB.jsx)(ez.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                rB(GB)
              },
              disabled: !LB,
              children: (0, aB.jsx)("span", {
                children: " Crop "
              })
            }), (0, aB.jsx)(ez.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                sB(GB)
              },
              children: (0, aB.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), NB && (0, aB.jsx)(ez.M, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                JB()
              },
              children: (0, aB.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      dI = (0, nB.memo)((function(BB) {
        var jB, zB;
        let {
          maxTick: QB,
          displayTick: dB,
          KF: NB,
          cameraKeyframes: uB,
          playbackMark: UB,
          onSeek: pB,
          onPause: rB,
          onScrubTickChange: sB,
          onMoveCameraKeyframe: JB,
          onUpdateCameraKeyframe: mB,
          onDeleteCameraKeyframe: yB,
          onUseCurrentCamera: kB,
          onMarkRange: GB,
          onCropRange: LB,
          onDeleteKeyframesInRange: gB,
          onClearMark: tB,
          zoomLevel: SB,
          onZoomLevelChange: MB
        } = BB;
        const EB = (0, nB.useRef)(null),
          iB = (0, nB.useRef)(null),
          qB = (0, nB.useRef)(!1),
          fB = (0, nB.useRef)(!1),
          oB = (0, nB.useRef)(SB),
          HB = (0, nB.useRef)(null),
          DB = (0, nB.useRef)(null),
          FB = (0, nB.useRef)(null),
          YB = (0, nB.useRef)(null),
          [VB, hB] = (0, nB.useState)(null),
          [XB, ZB] = (0, nB.useState)(dB),
          [AB, TB] = (0, nB.useState)(null),
          [PB, WB] = (0, nB.useState)(null),
          [eB, lB] = (0, nB.useState)(null),
          [wB, xB] = (0, nB.useState)(null),
          KB = (0, nB.useMemo)((() => uB.map((BB => BB.vp))), [uB]),
          CB = null !== VB && void 0 !== VB ? VB : dB,
          {
            viewStart: cB,
            viewEnd: bB
          } = (0, nB.useMemo)((() => function(BB) {
            const jB = BB.maxTick + 1,
              zB = Math.max(1, Math.ceil(jB / BB.zoomLevel)),
              QB = Math.floor(zB / 2);
            let nB = BB.centerTick - QB;
            return nB = Math.max(0, Math.min(nB, BB.maxTick - zB + 1)), {
              viewStart: nB,
              viewEnd: Math.min(BB.maxTick, nB + zB - 1)
            }
          }({
            maxTick: QB,
            zoomLevel: SB,
            centerTick: XB
          })), [QB, SB, XB]);
        (0, nB.useEffect)((() => {
          if (null !== VB || null !== DB.current || null !== FB.current || null !== YB.current) return;
          if (qB.current) return void(qB.current = !1);
          if (fB.current) return void(fB.current = !1);
          const BB = oB.current !== SB;
          oB.current = SB, BB && ZB(dB)
        }), [SB, dB, VB]);
        const vB = (0, nB.useCallback)((BB => {
            let jB = Dd(BB, QB);
            return UB && (jB = Math.max(UB.inTick, Math.min(jB, UB.outTick))), jB
          }), [QB, UB]),
          RB = (0, nB.useCallback)(((BB, jB) => {
            const zB = vB(BB);
            pB(zB), jB && ZB(zB)
          }), [vB, pB]),
          OB = (0, nB.useCallback)(((BB, jB) => {
            const zB = vB(BB);
            hB(zB), sB(zB), RB(zB, jB)
          }), [vB, RB, sB]),
          Bj = (0, nB.useCallback)((() => {
            hB((BB => (null !== BB && ZB(BB), null))), sB(null)
          }), [sB]),
          jj = (0, nB.useCallback)((() => {
            lB(null), xB(null)
          }), []),
          zj = (0, nB.useCallback)((BB => {
            const jB = EB.current;
            if (!jB) return 0;
            return Dd(Yd(Zd(BB, jB), cB, bB), QB)
          }), [QB, bB, cB]),
          Qj = (0, nB.useCallback)((BB => {
            const jB = iB.current;
            if (!jB) return 0;
            return Dd(Yd(Zd(BB, jB), 0, QB), QB)
          }), [QB]),
          nj = (0, nB.useMemo)((() => {
            if (!AB) return [...KB];
            const BB = KB.filter((BB => BB !== AB.fromTick));
            return BB.push(AB.previewTick), BB.sort(((BB, jB) => BB - jB)), BB
          }), [KB, AB]),
          dj = (0, nB.useMemo)((() => {
            var BB;
            return PB && null !== (BB = uB.find((BB => BB.vp === PB.vp))) && void 0 !== BB ? BB : null
          }), [uB, PB]),
          Ij = (0, nB.useMemo)((() => !!dj && uB.some((BB => BB.vp > dj.vp))), [uB, dj]);
        (0, nB.useEffect)((() => {
          PB && !dj && WB(null)
        }), [PB, dj]), (0, nB.useEffect)((() => {
          if (!wB) return () => {};
          const BB = BB => {
            "Escape" === BB.key && jj()
          };
          return window.addEventListener("keydown", BB), () => {
            window.removeEventListener("keydown", BB)
          }
        }), [jj, wB]);
        const Nj = (0, nB.useCallback)(((BB, jB) => {
            jj(), rB(), pB(BB, {
              ignorePlaybackMark: !0
            }), WB({
              vp: BB,
              rect: jB.getBoundingClientRect()
            })
          }), [jj, rB, pB]),
          uj = (0, nB.useCallback)(((BB, jB) => zB => {
            0 === zB.button && (zB.stopPropagation(), WB(null), jj(), rB(), HB.current = {
              fromTick: BB,
              startX: zB.clientX,
              startY: zB.clientY,
              didDrag: !1,
              track: jB
            }, TB({
              fromTick: BB,
              previewTick: BB,
              track: jB
            }), zB.currentTarget.setPointerCapture(zB.pointerId))
          }), [jj, rB]),
          Uj = (0, nB.useCallback)((BB => {
            if (!AB) return;
            BB.stopPropagation();
            const jB = HB.current;
            if (jB && !jB.didDrag) {
              const zB = BB.clientX - jB.startX,
                QB = BB.clientY - jB.startY;
              Math.hypot(zB, QB) > 5 && (jB.didDrag = !0)
            }
            const zB = "detail" === AB.track ? zj(BB.clientX) : Qj(BB.clientX);
            zB !== AB.previewTick && TB({
              ...AB,
              previewTick: zB
            })
          }), [AB, zj, Qj]),
          aj = (0, nB.useCallback)((BB => {
            if (!AB) return;
            BB.stopPropagation();
            const jB = HB.current,
              zB = "detail" === AB.track ? zj(BB.clientX) : Qj(BB.clientX);
            jB && !jB.didDrag ? Nj(jB.fromTick, BB.currentTarget) : zB !== AB.fromTick && JB(AB.fromTick, zB), TB(null), HB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId)
          }), [AB, JB, Nj, zj, Qj]),
          pj = (0, nB.useCallback)((BB => {
            if (0 !== BB.button) return;
            WB(null), rB();
            const jB = zj(BB.clientX);
            DB.current = {
              pointerId: BB.pointerId,
              startX: BB.clientX,
              startY: BB.clientY,
              startTick: jB,
              currentTick: jB,
              didSelect: !1
            }, lB(null), xB(null), BB.currentTarget.setPointerCapture(BB.pointerId)
          }), [rB, zj]),
          rj = (0, nB.useCallback)((BB => {
            const jB = DB.current;
            if (!jB || jB.pointerId !== BB.pointerId) return;
            const zB = zj(BB.clientX);
            if (jB.currentTick = zB, !jB.didSelect) {
              const zB = BB.clientX - jB.startX,
                QB = BB.clientY - jB.startY;
              if (Math.hypot(zB, QB) <= 5) return;
              jB.didSelect = !0
            }
            const QB = Math.min(jB.startTick, zB),
              nB = Math.max(jB.startTick, zB);
            lB({
              startTick: QB,
              endTick: nB
            })
          }), [zj]),
          sj = (0, nB.useCallback)((BB => {
            const jB = DB.current;
            if (!jB || jB.pointerId !== BB.pointerId) return;
            if (DB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), !jB.didSelect) return jj(), void RB(jB.startTick, !0);
            const zB = zj(BB.clientX),
              QB = Math.min(jB.startTick, zB),
              nB = Math.max(jB.startTick, zB),
              dB = {
                startTick: QB,
                endTick: nB
              };
            lB(dB);
            const IB = EB.current;
            if (!IB) return;
            const NB = IB.getBoundingClientRect(),
              uB = Fd(QB, cB, bB) / 100,
              UB = Fd(nB, cB, bB) / 100,
              aB = NB.left + uB * NB.width,
              pB = NB.left + UB * NB.width;
            xB({
              ...dB,
              rect: new DOMRect(aB, NB.top, Math.max(pB - aB, 1), NB.height)
            })
          }), [jj, RB, zj, bB, cB]),
          Jj = (0, nB.useCallback)((BB => jB => {
            if (0 !== jB.button) return;
            jB.stopPropagation(), WB(null), jj(), rB(), FB.current = {
              pointerId: jB.pointerId,
              track: BB
            }, jB.currentTarget.setPointerCapture(jB.pointerId);
            const zB = "detail" === BB ? zj(jB.clientX) : Qj(jB.clientX);
            OB(zB, !1)
          }), [jj, rB, OB, zj, Qj]),
          mj = (0, nB.useCallback)((BB => {
            const jB = FB.current;
            if (!jB || jB.pointerId !== BB.pointerId) return;
            BB.stopPropagation();
            const zB = "detail" === jB.track ? zj(BB.clientX) : Qj(BB.clientX);
            OB(zB, !1)
          }), [OB, zj, Qj]),
          yj = (0, nB.useCallback)((BB => {
            const jB = FB.current;
            jB && jB.pointerId === BB.pointerId && (BB.stopPropagation(), FB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), Bj())
          }), [Bj]),
          kj = (0, nB.useCallback)((BB => {
            0 === BB.button && (jj(), rB(), YB.current = {
              pointerId: BB.pointerId
            }, BB.currentTarget.setPointerCapture(BB.pointerId), OB(Qj(BB.clientX), !0))
          }), [jj, rB, OB, Qj]),
          Gj = (0, nB.useCallback)((BB => {
            const jB = YB.current;
            jB && jB.pointerId === BB.pointerId && OB(Qj(BB.clientX), !0)
          }), [OB, Qj]),
          Lj = (0, nB.useCallback)((BB => {
            const jB = YB.current;
            jB && jB.pointerId === BB.pointerId && (YB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId), Bj())
          }), [Bj]),
          gj = (0, nB.useCallback)((BB => {
            const jB = Math.max(1, BB.endTick - BB.startTick + 1),
              zB = QB + 1,
              nB = zB / jB,
              dB = Math.max(1, Math.ceil(zB / nB)),
              IB = BB.startTick + Math.floor((dB - 1) / 2);
            fB.current = !0, oB.current = nB, ZB(Dd(IB, QB)), MB(nB), jj()
          }), [jj, QB, MB]),
          tj = (0, nB.useCallback)((BB => {
            GB(BB), jj()
          }), [jj, GB]),
          Sj = (0, nB.useCallback)((BB => {
            LB(BB), jj()
          }), [jj, LB]),
          Mj = (0, nB.useCallback)((BB => {
            gB(BB), jj()
          }), [jj, gB]),
          Ej = (0, nB.useCallback)((() => {
            tB(), jj()
          }), [jj, tB]);
        (0, nB.useEffect)((() => {
          const BB = EB.current;
          if (!BB) return () => {};
          const jB = jB => {
            jB.preventDefault();
            const zB = Dd(Yd(Zd(jB.clientX, BB), cB, bB), QB),
              nB = jB.deltaY < 0 ? "in" : "out",
              dB = Xd(SB, nB);
            dB !== SB && (qB.current = !0, ZB(zB), MB(dB))
          };
          return BB.addEventListener("wheel", jB, {
            passive: !1
          }), () => {
            BB.removeEventListener("wheel", jB)
          }
        }), [QB, MB, bB, cB, SB]);
        const ij = Fd(CB, cB, bB),
          qj = Ad(CB, QB),
          fj = Ad(cB, QB),
          oj = QB > 0 ? Ad(bB, QB) : 100,
          Hj = null !== UB,
          Dj = null !== (jB = null === UB || void 0 === UB ? void 0 : UB.inTick) && void 0 !== jB ? jB : 0,
          Fj = null !== (zB = null === UB || void 0 === UB ? void 0 : UB.outTick) && void 0 !== zB ? zB : QB,
          Yj = Ad(Dj, QB),
          Vj = Math.max(Ad(Fj, QB) - Yj, 0),
          hj = Fd(Math.max(Dj, cB), cB, bB),
          Xj = Fd(Math.min(Fj, bB), cB, bB),
          Zj = Math.max(Xj - hj, 0),
          Aj = Hj && Fj >= cB && Dj <= bB,
          Tj = Fd(Dj, cB, bB),
          Pj = Fd(Fj, cB, bB),
          Wj = Hj && Dj >= cB && Dj <= bB,
          ej = Hj && Fj >= cB && Fj <= bB,
          lj = Ad(Dj, QB),
          wj = Ad(Fj, QB),
          xj = null !== eB && void 0 !== eB ? eB : wB ? {
            startTick: wB.startTick,
            endTick: wB.endTick
          } : null,
          Kj = xj ? Fd(Math.max(xj.startTick, cB), cB, bB) : 0,
          Cj = xj ? Fd(Math.min(xj.endTick, bB), cB, bB) : 0,
          cj = Math.max(Cj - Kj, 0),
          bj = null !== xj && xj.endTick >= cB && xj.startTick <= bB,
          vj = (0, nB.useMemo)((() => Td(0, QB, NB)), [QB, NB]),
          Rj = (0, nB.useMemo)((() => Td(cB, bB, NB)), [cB, bB, NB]),
          Oj = (0, nB.useMemo)((() => nj.filter((BB => BB >= cB && BB <= bB))), [nj, bB, cB]),
          Bz = (0, nB.useCallback)(((BB, jB, zB) => {
            const nB = "detail" === jB ? Fd(BB, cB, bB) : Ad(BB, QB),
              dB = null !== AB && zB === AB.fromTick,
              NB = null !== PB && PB.vp === zB;
            return (0, aB.jsx)("button", {
              type: "button",
              className: IB()("ReplayTimelineCameraKeyframeMarker", "detail" === jB ? "Detail" : "Overview", {
                Dragging: dB,
                Selected: NB
              }),
              style: {
                left: `${nB}%`
              },
              onPointerDown: uj(zB, jB),
              onPointerMove: Uj,
              onPointerUp: aj,
              onPointerCancel: aj,
              "aria-label": `Camera keyframe at tick ${zB}`
            }, `cam-${jB}-${zB}`)
          }), [uj, PB, aj, AB, QB, Uj, bB, cB]),
          jz = (0, nB.useCallback)((BB => AB && BB === AB.previewTick ? AB.fromTick : BB), [AB]);
        return QB <= 0 ? null : (0, aB.jsxs)("div", {
          className: "ReplayTimeline",
          children: [PB && dj && (0, vn.createPortal)((0, aB.jsx)(QI, {
            keyframe: dj,
            anchor: PB,
            hasOutgoingSegment: Ij,
            onClose: () => {
              WB(null)
            },
            onApply: mB,
            onDelete: yB,
            onUseCurrentCamera: kB
          }), document.body), wB && (0, vn.createPortal)((0, aB.jsx)(nI, {
            anchor: wB,
            hasPlaybackMark: Hj,
            onClose: jj,
            onMark: tj,
            onZoom: gj,
            onCrop: Sj,
            onDeleteKeyframes: Mj,
            onClearMark: Ej
          }), document.body), (0, aB.jsxs)("div", {
            className: IB()("ReplayTimelineOverviewSection", {
              Hidden: SB <= 1
            }),
            children: [(0, aB.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, aB.jsxs)("div", {
              ref: iB,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: kj,
              onPointerMove: Gj,
              onPointerUp: Lj,
              onPointerCancel: Lj,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": QB,
              "aria-valuenow": CB,
              tabIndex: 0,
              children: [vj.map((BB => {
                const jB = Ad(BB, QB);
                return (0, aB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${jB}%`
                  }
                }, BB)
              })), Hj && (0, aB.jsxs)(aB.Fragment, {
                children: [(0, aB.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${Yj}%`,
                    width: `${Vj}%`
                  }
                }), (0, aB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${lj}%`
                  },
                  "aria-hidden": !0
                }), (0, aB.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${wj}%`
                  },
                  "aria-hidden": !0
                })]
              }), nj.map((BB => Bz(BB, "overview", jz(BB)))), (0, aB.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${fj}%`,
                  width: `${Math.max(oj-fj,.5)}%`
                }
              }), (0, aB.jsx)("button", {
                type: "button",
                className: IB()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== VB
                }),
                style: {
                  left: `${qj}%`
                },
                onPointerDown: Jj("overview"),
                onPointerMove: mj,
                onPointerUp: yj,
                onPointerCancel: yj,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, aB.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, aB.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, aB.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, aB.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [Vd(cB, NB), " \u2013 ", Vd(bB, NB), SB > 1 && (0, aB.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: hd(SB)
                })]
              })]
            }), (0, aB.jsxs)("div", {
              ref: EB,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: pj,
              onPointerMove: rj,
              onPointerUp: sj,
              onPointerCancel: sj,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": cB,
              "aria-valuemax": bB,
              "aria-valuenow": CB,
              tabIndex: 0,
              children: [Rj.map((BB => {
                const jB = Fd(BB, cB, bB);
                return (0, aB.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${jB}%`
                  }
                }, BB)
              })), Aj && (0, aB.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${hj}%`,
                  width: `${Zj}%`
                }
              }), Wj && (0, aB.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Tj}%`
                },
                "aria-label": `Play range start at tick ${Dj}`
              }), ej && (0, aB.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Pj}%`
                },
                "aria-label": `Play range end at tick ${Fj}`
              }), bj && xj && (0, aB.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Kj}%`,
                  width: `${cj}%`
                }
              }), Oj.map((BB => Bz(BB, "detail", jz(BB)))), (0, aB.jsx)("button", {
                type: "button",
                className: IB()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== VB
                }),
                style: {
                  left: `${ij}%`
                },
                onPointerDown: Jj("detail"),
                onPointerMove: mj,
                onPointerUp: yj,
                onPointerCancel: yj,
                "aria-label": "Scrub playhead"
              })]
            }), (0, aB.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, aB.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      II = (0, nB.memo)((function(BB) {
        let {
          enabled: jB
        } = BB;
        const zB = (0, nB.useRef)(!1),
          QB = (0, nB.useRef)(null),
          [dB, NB] = (0, nB.useState)(!1),
          uB = (0, nB.useCallback)((BB => {
            jB && 0 === BB.button && (zB.current = !0, NB(!0), QB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, BB.currentTarget.setPointerCapture(BB.pointerId))
          }), [jB]),
          UB = (0, nB.useCallback)((BB => {
            if (!jB || !zB.current || !QB.current) return;
            const nB = BB.clientX - QB.current.x,
              dB = BB.clientY - QB.current.y;
            QB.current = {
              x: BB.clientX,
              y: BB.clientY
            }, sB.gameBridge.send("dragReplayCamera", {
              dx: nB,
              dy: dB
            })
          }), [jB]),
          pB = (0, nB.useCallback)((BB => {
            zB.current && (zB.current = !1, NB(!1), QB.current = null, BB.currentTarget.releasePointerCapture(BB.pointerId))
          }), []);
        return jB ? (0, aB.jsx)("div", {
          className: IB()("ReplayViewerCameraDragSurface", {
            Dragging: dB
          }),
          onPointerDown: uB,
          onPointerMove: UB,
          onPointerUp: pB,
          onPointerCancel: pB,
          "aria-hidden": !0
        }) : null
      }));
    var NI = zB(37073),
      uI = zB(37082);
    const UI = (0, nB.memo)((function(BB) {
        var jB, zB, QB;
        let {
          anchorRect: dB,
          anchorRef: NB,
          onClose: UB
        } = BB;
        const pB = (0, nB.useRef)(null),
          rB = BI(pB, dB),
          [sB, JB] = (0, nB.useState)(uI.d),
          mB = (0, nB.useMemo)((() => Object.values(sB).every((BB => BB))), [sB]);
        (0, uB.f)("replayViewer|uiVisibilityChanged", (() => {
          JB((0, uI.d)())
        })), jI(pB, UB, NB);
        const yB = (0, nB.useCallback)(((BB, jB) => {
            (0, uI.k)(BB, jB), JB((0, uI.d)())
          }), []),
          kB = (0, nB.useCallback)((BB => {
            for (const {
                group: jB
              }
              of NI.f)(0, uI.k)(jB, BB);
            JB((0, uI.d)())
          }), []),
          GB = Od(dB);
        return (0, vn.createPortal)((0, aB.jsxs)("div", {
          ref: pB,
          className: IB()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (jB = null === rB || void 0 === rB ? void 0 : rB.placeBelow) && void 0 !== jB && jB,
            Positioned: null !== rB
          }),
          style: {
            left: `${null!==(zB=null===rB||void 0===rB?void 0:rB.left)&&void 0!==zB?zB:GB.left}px`,
            top: `${null!==(QB=null===rB||void 0===rB?void 0:rB.top)&&void 0!==QB?QB:GB.top}px`
          },
          onPointerDown: BB => {
            BB.stopPropagation()
          },
          children: [(0, aB.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, aB.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, aB.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, aB.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, aB.jsx)("input", {
                type: "checkbox",
                checked: mB,
                onChange: BB => {
                  kB(BB.target.checked)
                }
              }), (0, aB.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), NI.f.map((BB => {
              let {
                group: jB,
                label: zB
              } = BB;
              return (0, aB.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, aB.jsx)("input", {
                  type: "checkbox",
                  checked: sB[jB],
                  onChange: BB => {
                    yB(jB, BB.target.checked)
                  }
                }), (0, aB.jsx)("span", {
                  children: zB
                })]
              }, jB)
            }))]
          })]
        }), document.body)
      })),
      aI = (0, nB.memo)((function(BB) {
        let {
          disabled: jB
        } = BB;
        const zB = (0, nB.useRef)(null),
          [QB, dB] = (0, nB.useState)(!1),
          [IB, NB] = (0, nB.useState)(null),
          uB = (0, nB.useCallback)((() => {
            zB.current && (NB(zB.current.getBoundingClientRect()), dB((BB => !BB)))
          }), []),
          UB = (0, nB.useCallback)((() => {
            dB(!1)
          }), []);
        return (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsx)("div", {
            ref: zB,
            children: (0, aB.jsx)(ez.f, {
              className: "ReplayViewerActionButton",
              onClick: uB,
              disabled: jB,
              children: (0, aB.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), QB && IB && (0, aB.jsx)(UI, {
            anchorRect: IB,
            anchorRef: zB,
            onClose: UB
          })]
        })
      })),
      pI = ["freeCamUp", "freeCamDown"];

    function rI(BB, jB) {
      sB.gameBridge.send("holdReplayFreecamVertical", {
        action: BB,
        DN: jB
      })
    }
    const sI = (0, nB.memo)((function() {
      (0, nB.useEffect)((() => () => {
        ! function() {
          sB.gameBridge.send("moveReplayFreecam", null);
          for (const BB of pI) rI(BB, !1)
        }()
      }), []);
      const BB = (0, nB.useCallback)((BB => {
          sB.gameBridge.send("moveReplayFreecam", BB)
        }), []),
        jB = (0, nB.useCallback)((BB => ({
          onTouchStart: jB => {
            jB.preventDefault(), jB.stopPropagation(), rI(BB, !0)
          },
          onTouchEnd: jB => {
            jB.preventDefault(), jB.stopPropagation(), rI(BB, !1)
          },
          onTouchCancel: jB => {
            jB.preventDefault(), jB.stopPropagation(), rI(BB, !1)
          }
        })), []);
      return (0, aB.jsxs)("div", {
        className: "ReplayFreecamTouchControls",
        children: [(0, aB.jsx)("div", {
          className: "ReplayFreecamJoystickWrap",
          children: (0, aB.jsx)(oj, {
            onMove: BB,
            mode: "pinned"
          })
        }), (0, aB.jsxs)("div", {
          className: "ReplayFreecamVerticalButtons",
          children: [(0, aB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam up",
            ...jB("freeCamUp"),
            children: (0, aB.jsx)(AB.c, {
              name: "angle-up",
              className: "ReplayFreecamVerticalIcon"
            })
          }), (0, aB.jsx)("button", {
            type: "button",
            className: "ReplayFreecamVerticalButton",
            "aria-label": "Freecam down",
            ...jB("freeCamDown"),
            children: (0, aB.jsx)(AB.c, {
              name: "angle-down",
              className: "ReplayFreecamVerticalIcon"
            })
          })]
        })]
      })
    }));
    var JI = zB(3258);
    const mI = [],
      yI = "Failed to load recording";

    function kI(BB, jB, zB) {
      var QB;
      console.error(jB), Iz.NotificationProvider.showAlertPopup({
        title: BB,
        subtitle: null !== (QB = (0, Md.j)(jB)) && void 0 !== QB ? QB : zB,
        confirmText: "OK"
      })
    }

    function GI(BB) {
      kI(yI, BB, Md.d.cantOpen.text)
    }
    const LI = (0, nB.memo)((function() {
        const BB = (0, cB.j)(),
          {
            gameState: jB
          } = (0, iB.m)(["gameState"]),
          zB = "inGame" === jB;
        return (0, EB.d)("replayViewerRequested", (BB => {
          (0, cB.i)("toggle" === BB ? !(0, cB.g)() : "open" === BB)
        })), (0, nB.useEffect)((() => {
          zB && (0, fd.f)().then((BB => {
            if (null !== BB) return (0, cB.i)(!0), (0, Ld.b)().open(BB.bytes, BB.source)
          })).catch((BB => {
            (0, cB.i)(!0), GI(BB)
          }))
        }), [zB]), BB ? (0, aB.jsx)(gI, {}) : null
      })),
      gI = (0, nB.memo)((function() {
        var BB, jB, zB, QB, dB, NB, uB, UB, pB, rB, JB, mB;
        const yB = nB.useRef(null),
          [kB, GB] = (0, nB.useState)(1),
          [LB, gB] = (0, nB.useState)(null),
          [tB, SB] = (0, nB.useState)(!1),
          {
            isTouchScreen: MB
          } = (0, iB.m)(["isTouchScreen"]),
          fB = (0, EB.k)("replay"),
          oB = (0, EB.k)("replayEdits"),
          HB = null !== fB,
          DB = null !== (BB = null === fB || void 0 === fB ? void 0 : fB.vp) && void 0 !== BB ? BB : 0,
          FB = null !== (jB = null === fB || void 0 === fB ? void 0 : fB.totalTicks) && void 0 !== jB ? jB : 0,
          YB = Math.max(0, FB - 1),
          VB = null !== (zB = null === fB || void 0 === fB ? void 0 : fB.playing) && void 0 !== zB && zB,
          hB = null !== (QB = null === fB || void 0 === fB ? void 0 : fB.speed) && void 0 !== QB ? QB : 1,
          XB = null !== (dB = null === fB || void 0 === fB ? void 0 : fB.KF) && void 0 !== dB ? dB : 20,
          TB = null !== LB && void 0 !== LB ? LB : DB,
          PB = null !== (NB = null === fB || void 0 === fB ? void 0 : fB.freecam) && void 0 !== NB && NB,
          WB = null !== (uB = null === fB || void 0 === fB ? void 0 : fB.cameraMode) && void 0 !== uB ? uB : "recording",
          eB = null !== (UB = null === oB || void 0 === oB ? void 0 : oB.cameraKeyframes) && void 0 !== UB ? UB : mI,
          lB = null !== (pB = null === oB || void 0 === oB ? void 0 : oB.playbackMark) && void 0 !== pB ? pB : null,
          wB = null !== (rB = null === oB || void 0 === oB ? void 0 : oB.fileName) && void 0 !== rB ? rB : null,
          xB = null !== (JB = null === oB || void 0 === oB ? void 0 : oB.unsavedChanges) && void 0 !== JB && JB,
          KB = null !== (mB = null === oB || void 0 === oB ? void 0 : oB.suggestSaveAs) && void 0 !== mB && mB,
          CB = (0, EB.k)("replayVideoExporting"),
          bB = !CB && HB && ("freecam" === WB || ("recording" === WB || "keyframe" === WB) && !VB),
          vB = MB && HB && "freecam" === WB && !CB && !tB;
        (0, od.c)(!0, !0, "ReplayViewerOverlay"), (0, nB.useEffect)((() => {
          sB.gameBridge.send("syncReplayCameraMode", null)
        }), [PB]);
        const RB = (0, nB.useCallback)(((BB, jB) => {
            sB.gameBridge.send("seekReplay", {
              vp: BB,
              ignorePlaybackMark: null === jB || void 0 === jB ? void 0 : jB.ignorePlaybackMark
            })
          }), []),
          OB = (0, nB.useCallback)((() => {
            sB.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Bj = (0, nB.useCallback)(((BB, jB) => {
            sB.gameBridge.send("moveReplayCameraKeyframe", {
              from: BB,
              to: jB
            })
          }), []),
          jj = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("setReplayCameraKeyframe", BB)
          }), []),
          zj = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB,
              end: BB
            })
          }), []),
          Qj = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("deleteReplayCameraKeyframes", {
              start: BB.startTick,
              end: BB.endTick
            })
          }), []),
          nj = (0, nB.useCallback)((() => sB.gameBridge.lookup("replayCamera", null)), []),
          dj = (0, nB.useCallback)((BB => {
            gB(BB)
          }), []),
          Ij = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("setReplayPlaybackMark", {
              inTick: BB.startTick,
              outTick: BB.endTick
            })
          }), []),
          Nj = (0, nB.useCallback)((() => {
            sB.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          uj = (0, nB.useCallback)((BB => {
            const jB = sB.gameBridge.latest("replay");
            if (null === jB || BB.endTick <= BB.startTick) return;
            const zB = BB.startTick,
              QB = BB.endTick;
            Iz.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((BB => {
              var nB;
              if (!0 !== BB) return;
              if ((null === (nB = sB.gameBridge.latest("replay")) || void 0 === nB ? void 0 : nB.id) !== jB.id) return;
              sB.gameBridge.send("cropReplay", {
                start: zB,
                end: QB
              }) && (gB(null), GB(1))
            }))
          }), []),
          Uj = (0, nB.useCallback)(((BB, jB) => {
            GB(1), gB(null), (0, Ld.b)().open(BB, jB).catch(GI)
          }), []),
          aj = (0, nB.useCallback)(((BB, jB) => {
            null !== sB.gameBridge.latest("connectedGame").websocketUrl ? Iz.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((zB => {
              !0 === zB && Uj(BB, jB)
            })) : Uj(BB, jB)
          }), [Uj]),
          pj = (0, nB.useCallback)((BB => {
            var jB;
            const zB = null === (jB = BB.target.files) || void 0 === jB ? void 0 : jB[0];
            if (BB.target.value = "", !zB) return;
            const QB = new FileReader;
            QB.onload = () => {
              aj(new Uint8Array(QB.result), {
                fileName: zB.name
              })
            }, QB.onerror = () => {
              GI(QB.error)
            }, QB.readAsArrayBuffer(zB)
          }), [aj]),
          rj = (0, nB.useCallback)((() => {
            const BB = () => {
              null !== yB.current && (0, JI.f)(yB.current)
            };
            (0, Sd.k)() ? (0, Sd.f)().then((BB => {
              BB && aj(BB.bytes, {
                fileHandle: BB.handle
              })
            })).catch((jB => {
              console.error(jB), Iz.NotificationProvider.showPromptPopup({
                title: yI,
                confirmText: "Choose file",
                cancelText: "Cancel"
              }).getResult().then((jB => {
                !0 === jB && BB()
              }))
            })): BB()
          }), [aj]),
          sj = (0, nB.useCallback)((async function() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let jB;
            try {
              jB = await qd(BB, {
                files: (0, Ld.b)(),
                pickerSupported: Sd.k,
                chooseFile: Sd.d,
                write: Sd.n,
                download: td.h,
                onFallback: console.error
              })
            } catch (zB) {
              return void kI("Failed to save recording", zB)
            }
            "written" !== jB && "downloaded" !== jB || (() => {
              const BB = Iz.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                BB.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Jj = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("replayAction", BB)
          }), []),
          mj = (0, nB.useCallback)((BB => {
            GB((jB => Xd(jB, BB)))
          }), []),
          yj = (0, nB.useCallback)((BB => {
            if (!sB.gameBridge.latest("replayVideoExporting")) switch (BB) {
              case "replayLoad":
                rj();
                break;
              case "replaySave":
                sj(!1);
                break;
              case "replaySaveAs":
                sj(!0);
                break;
              case "replayTimelineZoomIn":
                mj("in");
                break;
              case "replayTimelineZoomOut":
                mj("out")
            }
          }), [rj, sj, mj]);
        (0, EB.d)("replayUiActionRequested", yj);
        const kj = (0, nB.useCallback)((BB => {
            sB.gameBridge.send("setReplayCameraMode", BB)
          }), []),
          Gj = HB ? ez.f : ez.m,
          Lj = xB && !KB ? ez.m : ez.f,
          gj = xB && KB ? ez.m : ez.f;
        return (0, aB.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, aB.jsx)(II, {
            enabled: bB
          }), vB && (0, aB.jsx)(sI, {}), (0, aB.jsx)("input", {
            ref: yB,
            type: "file",
            accept: td.b,
            className: "ReplayViewerFileInput",
            onChange: pj
          }), (0, aB.jsxs)("div", {
            className: IB()("ReplayViewerBar", {
              Collapsed: tB
            }),
            children: [(0, aB.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                tB ? SB(!1) : HB ? SB(!0) : (0, cB.c)()
              },
              "aria-expanded": !tB,
              "aria-label": tB ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, aB.jsx)(AB.c, {
                name: tB ? "angle-up" : "angle-down"
              })
            }), !tB && (0, aB.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [HB && FB > 0 && (0, aB.jsx)(dI, {
                maxTick: YB,
                displayTick: TB,
                KF: XB,
                cameraKeyframes: eB,
                playbackMark: lB,
                onSeek: RB,
                onPause: OB,
                onScrubTickChange: dj,
                onMoveCameraKeyframe: Bj,
                onUpdateCameraKeyframe: jj,
                onDeleteCameraKeyframe: zj,
                onUseCurrentCamera: nj,
                onMarkRange: Ij,
                onCropRange: uj,
                onDeleteKeyframesInRange: Qj,
                onClearMark: Nj,
                zoomLevel: kB,
                onZoomLevelChange: GB
              }, YB), (0, aB.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, aB.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, aB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [HB && (0, aB.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== wB && void 0 !== wB ? wB : "Unsaved recording", xB ? " *" : ""]
                    }), (0, aB.jsxs)(Gj, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yj("replayLoad")
                      },
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, aB.jsxs)(ez.f, {
                      className: "ReplayViewerActionButton",
                      onClick: cB.c,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, aB.jsxs)(Lj, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yj("replaySave")
                      },
                      disabled: !HB,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, aB.jsxs)(ez.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        sB.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !HB,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, aB.jsxs)(gj, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yj("replaySaveAs")
                      },
                      disabled: !HB,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, aB.jsxs)(ez.f, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        sB.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !HB || 0 === FB || CB,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, aB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aB.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, aB.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, aB.jsx)(qB.b, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, aB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, aB.jsx)(ZB.g, {
                        tooltipInner: (0, aB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, aB.jsxs)(ez.M, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === WB,
                          onClick: () => {
                            kj("recording")
                          },
                          disabled: !HB,
                          children: ["Recorded ", (0, aB.jsx)(AB.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, aB.jsx)(ZB.g, {
                        tooltipInner: (0, aB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, aB.jsxs)(ez.M, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === WB,
                          onClick: () => {
                            kj("freecam")
                          },
                          disabled: !HB,
                          children: ["Free ", (0, aB.jsx)(AB.c, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, aB.jsx)(ZB.g, {
                        tooltipInner: (0, aB.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, aB.jsxs)(ez.M, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === WB,
                          onClick: () => {
                            kj("keyframe")
                          },
                          disabled: !HB,
                          children: ["Preview ", (0, aB.jsx)(AB.c, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, aB.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, aB.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, aB.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, aB.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: Vd(TB, XB)
                      }), (0, aB.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, aB.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: Vd(YB, XB)
                      })]
                    }), (0, aB.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", TB, " / ", YB]
                    })]
                  }), (0, aB.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, aB.jsxs)(ez.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Jj("replaySkipBack")
                      },
                      disabled: !HB,
                      children: [(0, aB.jsxs)("span", {
                        children: [" ", (0, aB.jsx)(AB.c, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, aB.jsx)(qB.b, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, aB.jsxs)(ez.m, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        sB.gameBridge.send("setReplayPlaying", !VB)
                      },
                      disabled: !HB,
                      children: [(0, aB.jsxs)("span", {
                        children: [" ", VB ? (0, aB.jsx)(AB.c, {
                          name: "pause"
                        }) : (0, aB.jsx)(AB.c, {
                          name: "play"
                        }), " "]
                      }), (0, aB.jsx)(qB.b, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, aB.jsxs)(ez.f, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Jj("replaySkipForward")
                      },
                      disabled: !HB,
                      children: [(0, aB.jsxs)("span", {
                        children: [" ", (0, aB.jsx)(AB.c, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, aB.jsx)(qB.b, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, aB.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, aB.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, aB.jsxs)(ez.m, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Jj("replayRecordKeyframe")
                      },
                      disabled: !HB,
                      children: [(0, aB.jsx)(qB.b, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, aB.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, aB.jsx)(aI, {
                      disabled: !HB
                    }), lB && (0, aB.jsx)(ez.M, {
                      className: "ReplayViewerActionButton",
                      onClick: Nj,
                      disabled: !HB,
                      children: (0, aB.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, aB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, aB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, aB.jsx)(ez.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Jj("replaySpeedDown")
                        },
                        disabled: !HB || (0, gd.f)(hB),
                        children: (0, aB.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, aB.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [hB, "\xd7"]
                      }), (0, aB.jsx)(ez.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Jj("replaySpeedUp")
                        },
                        disabled: !HB || (0, gd.d)(hB),
                        children: (0, aB.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, aB.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, aB.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, aB.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, aB.jsxs)(ez.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yj("replayTimelineZoomOut")
                        },
                        disabled: !HB || kB <= Hd[0],
                        children: [(0, aB.jsx)("span", {
                          children: " \u2212 "
                        }), (0, aB.jsx)(qB.b, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, aB.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: hd(kB)
                      }), (0, aB.jsxs)(ez.f, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yj("replayTimelineZoomIn")
                        },
                        disabled: !HB || kB >= Hd[Hd.length - 1],
                        children: [(0, aB.jsx)("span", {
                          children: " + "
                        }), (0, aB.jsx)(qB.b, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, aB.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !HB && "Load a recording to begin playback"
              })]
            })]
          })]
        })
      }));
    var tI = zB(1357);

    function SI() {
      const [, BB] = (0, nB.useState)(0);
      return (0, uB.f)("replayViewer|uiVisibilityChanged", (() => {
          BB((BB => BB + 1))
        })), (0, uB.f)("replayViewer|replayLoaded", (() => {
          BB((BB => BB + 1))
        })),
        function() {
          if (!(0, tI.e)()) return {};
          const BB = {
              [NI.c]: "true"
            },
            jB = (0, uI.d)();
          for (const {
              group: zB,
              dataAttr: QB
            }
            of NI.f) QB && !jB[zB] && (BB[QB] = "true");
          return BB
        }()
    }
    var MI = zB(34238),
      EI = zB(2125),
      iI = zB(8740),
      qI = zB(8730),
      fI = zB(2131);
    const oI = (0, nB.memo)((function() {
      var BB, jB, zB;
      const QB = (0, gB.i)("customButtons");
      (0, nB.useEffect)((() => QB ? (sB.gameBridge.send("bindCustomButtonKeys", QB.filter(iI.f).map((BB => {
        let {
          id: jB,
          keycode: zB
        } = BB;
        return {
          id: jB,
          keycode: zB
        }
      }))), () => {
        sB.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [QB]);
      const dB = null !== (BB = null === QB || void 0 === QB ? void 0 : QB.filter(iI.f)) && void 0 !== BB ? BB : [],
        IB = (0, qI.d)(),
        NB = null !== (jB = null === (zB = (0, fI.e)()) || void 0 === zB ? void 0 : zB.hideButtonHints) && void 0 !== jB && jB,
        uB = "customButton" !== (null === IB || void 0 === IB ? void 0 : IB.kind) || NB ? null : IB.id,
        UB = dB.length > 0,
        pB = (0, nB.useRef)(null);
      return (0, nB.useLayoutEffect)((() => {
        if (!UB) return () => {};
        const BB = pB.current,
          jB = BB.closest(".InGameUi"),
          zB = () => {
            jB.style.setProperty("--custom-buttons-top", `${BB.offsetTop}px`)
          };
        zB();
        const QB = new ResizeObserver(zB);
        return QB.observe(BB), QB.observe(BB.parentElement), () => {
          QB.disconnect(), jB.style.removeProperty("--custom-buttons-top")
        }
      }), [UB]), (0, aB.jsx)("div", {
        ref: pB,
        className: "" + ((0, dz.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: dB.map((BB => {
          var jB, zB;
          return (0, aB.jsx)(HI, {
            button: BB,
            padGlyph: BB.id === uB && null !== (jB = null === (zB = (0, eB.d)()) || void 0 === zB ? void 0 : zB.getBoundButton("actionButton")) && void 0 !== jB ? jB : null
          }, BB.id)
        }))
      })
    }));

    function HI(BB) {
      let {
        button: jB,
        padGlyph: zB
      } = BB;
      const QB = (0, nB.useRef)(null),
        dB = () => {
          null !== QB.current && (QB.current = null, sB.gameBridge.send("pressCustomButton", {
            id: jB.id,
            down: !1
          }))
        };
      (0, nB.useEffect)((() => dB), []);
      const IB = bj(dB, {
          pressesOnPointerDown: !0
        }),
        NB = BB => {
          QB.current === BB.pointerId && dB()
        };
      return (0, aB.jsxs)("div", {
        className: "CustomIcon",
        ...IB,
        onLostPointerCapture: NB,
        children: [(0, aB.jsx)(EI.e, {
          icon: jB.icon,
          keyboardHint: (0, iI.b)(jB.keycode),
          padGlyph: zB,
          onPointerDown: BB => {
            try {
              BB.currentTarget.setPointerCapture(BB.pointerId)
            } catch {
              return
            }
            null === QB.current && sB.gameBridge.send("pressCustomButton", {
              id: jB.id,
              down: !0
            }), QB.current = BB.pointerId
          },
          onPointerUp: NB,
          onPointerCancel: NB,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), jB.description && (0, aB.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: jB.description
        })]
      })
    }
    var DI = zB(2501),
      FI = zB(269);
    const YI = {
      frame: BB => {
        const jB = requestAnimationFrame((() => {
          BB()
        }));
        return () => {
          cancelAnimationFrame(jB)
        }
      },
      afterFrame: BB => {
        const jB = setTimeout(BB, 0);
        return () => {
          clearTimeout(jB)
        }
      }
    };
    class VI {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FI.c,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YI,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => {};
        this.idle = BB, this.frames = jB, this.onHiddenMount = zB, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (BB(), () => {}) : (jB ? this.waiting.unshift(BB) : this.waiting.push(BB), this.schedule(), () => {
          const jB = this.waiting.indexOf(BB);
          jB >= 0 && (this.waiting.splice(jB, 1), this.settle())
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
        const BB = this.waiting.shift(),
          jB = !this.shown,
          zB = performance.now();
        try {
          BB()
        } finally {
          jB && this.onHiddenMount(performance.now() - zB), this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var BB, jB, zB;
        null === (BB = this.cancelIdle) || void 0 === BB || BB.call(this), this.cancelIdle = null, null === (jB = this.cancelFrame) || void 0 === jB || jB.call(this), this.cancelFrame = null, null === (zB = this.cancelAfterFrame) || void 0 === zB || zB.call(this), this.cancelAfterFrame = null
      }
    }
    const hI = (0, nB.createContext)(null);

    function XI(BB) {
      let {
        children: jB,
        first: zB = !1
      } = BB;
      const QB = (0, nB.useContext)(hI),
        [dB, IB] = (0, nB.useState)(null === QB);
      return (0, nB.useEffect)((() => {
        if (!dB && null !== QB) return QB.request((() => {
          IB(!0)
        }), zB)
      }), [zB, dB, QB]), dB ? (0, nB.createElement)(nB.Fragment, null, jB) : null
    }
    const ZI = (0, nB.memo)((function(BB) {
        let {
          shown: jB
        } = BB;
        const [zB] = (0, nB.useState)((() => new mB.i(jB))), [dB] = (0, nB.useState)((() => jB ? null : new VI(void 0, void 0, (BB => {
          QB.b.noteWorkDuringAdmissionWait(BB)
        }))));
        return (0, nB.useLayoutEffect)((() => {
          jB && (null === dB || void 0 === dB || dB.show(), zB.show())
        }), [jB, zB, dB]), (0, aB.jsx)(mB.e.Provider, {
          value: zB,
          children: (0, aB.jsx)(hI.Provider, {
            value: dB,
            children: (0, aB.jsx)(AI, {})
          })
        })
      })),
      AI = (0, nB.memo)((function() {
        const {
          isUiHidden: BB,
          isUiHiddenByCamera: jB,
          worldPanelHud: zB,
          isTouchScreen: QB
        } = (0, iB.m)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), dB = (0, an.c)(), NB = SI(), uB = (0, mB.o)(), UB = (0, nB.useRef)(null), pB = (0, gB.i)("showKillfeed");
        return function() {
            const BB = (0, mB.o)();
            (0, nB.useEffect)((() => BB.whenShown(yB)), [BB])
          }(),
          function() {
            const BB = (0, gB.i)("inventoryColourOverride");
            (0, nB.useEffect)((() => {
              if (!BB) return;
              const {
                panel: jB,
                slot: zB,
                slotSelected: QB,
                slotUnavailable: nB
              } = wB(BB), dB = document.documentElement.style;
              return dB.setProperty("--InventoryPanelColour", jB), dB.setProperty("--InventorySlotColour", zB), dB.setProperty("--InventorySlotSelectedColour", QB), dB.setProperty("--InventorySlotUnavailableColour", nB), () => {
                dB.removeProperty("--InventoryPanelColour"), dB.removeProperty("--InventorySlotColour"), dB.removeProperty("--InventorySlotSelectedColour"), dB.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [BB])
          }(), (0, nB.useLayoutEffect)((() => uB.whenShown((() => {
            var BB;
            null === (BB = UB.current) || void 0 === BB || BB.classList.remove("PreMounted")
          }))), [uB]), (0, aB.jsxs)(aB.Fragment, {
            children: [(0, aB.jsxs)("div", {
              ref: UB,
              className: IB()("InGameUi", {
                PreMounted: !uB.shown,
                Hidden: BB,
                HiddenByCamera: jB,
                HiddenByWorldPanel: null !== zB,
                WorldPanelTouchControl: "touchControls" === zB
              }),
              ...NB,
              children: [(0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(IQ.e, {}), (0, aB.jsx)(pQ, {})]
              }), (0, aB.jsx)(mB.k, {
                children: (0, aB.jsx)(rQ, {})
              }), (0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(An, {}), (0, aB.jsx)(Kn, {}), QB && (0, aB.jsx)(cn, {})]
              }), (0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(Yz, {}), (0, aB.jsx)(iQ.e, {}), (0, aB.jsx)(YQ, {})]
              }), (0, aB.jsx)(mB.k, {
                children: (0, aB.jsx)(dQ, {})
              }), (0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(en.c, {}), (0, aB.jsx)(LI, {})]
              }), (0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(Nd.h, {}), (0, aB.jsx)(ud.f, {})]
              }), (0, aB.jsx)(XI, {
                children: (0, aB.jsx)(hz.h, {})
              }), (0, aB.jsx)(XI, {
                children: (0, aB.jsx)(xI, {
                  showChat: dB
                })
              }), (0, aB.jsxs)(XI, {
                children: [(0, aB.jsx)(pd, {}), (0, aB.jsx)(Wn, {})]
              }), (0, aB.jsxs)("div", {
                className: IB()("RightElements", {
                  RightElementsTouchscreen: QB
                }),
                "data-camera-keeper-host": "",
                children: [(0, aB.jsxs)("div", {
                  className: PQ.l,
                  "data-holds-camera-keeper": "",
                  children: [(0, aB.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, aB.jsx)(XI, {
                      children: (0, aB.jsx)(En.b, {})
                    }), (0, aB.jsxs)(XI, {
                      children: [(0, aB.jsx)(TB, {}), (0, aB.jsx)(xQ.b, {})]
                    }), dz.featureFlags.useSocialFeatures && (0, aB.jsx)(mB.k, {
                      children: (0, aB.jsx)(KQ.d, {
                        placement: "inGame"
                      })
                    }), dz.featureFlags.useSocialFeatures && (0, aB.jsx)(mB.k, {
                      children: (0, aB.jsx)(dn, {})
                    }), pB && (0, aB.jsx)(mB.k, {
                      children: (0, aB.jsx)(EQ, {})
                    }), (0, aB.jsx)(XI, {
                      children: (0, aB.jsx)(MI.d, {})
                    })]
                  }), dz.featureFlags.useSocialFeatures && (0, aB.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, aB.jsx)(XI, {
                      children: (0, aB.jsx)(Xn.b, {})
                    })
                  })]
                }), (0, aB.jsxs)(XI, {
                  children: [(0, aB.jsx)(hz.c, {
                    placement: "topRight"
                  }), (0, aB.jsx)(KI, {})]
                })]
              }), (0, aB.jsx)("div", {
                className: "LeftCentre",
                children: (0, aB.jsx)(XI, {
                  children: (0, aB.jsx)(oI, {})
                })
              }), (0, aB.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": QB ? "" : void 0,
                children: [(0, aB.jsx)(mB.k, {
                  children: (0, aB.jsx)(FB, {})
                }), (0, aB.jsx)(XI, {
                  children: (0, aB.jsx)(PI, {})
                }), (0, aB.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": QB ? "" : void 0,
                  children: [(0, aB.jsx)("div", {
                    className: IB()("BottomLeftElements", {
                      Touch: QB
                    }),
                    children: (0, aB.jsxs)(XI, {
                      children: [(0, aB.jsx)(un, {}), !QB && (0, aB.jsx)(DI.d, {})]
                    })
                  }), (0, aB.jsx)(XI, {
                    children: (0, aB.jsx)(wI, {})
                  }), (0, aB.jsx)(XI, {
                    children: (0, aB.jsx)(hQ, {
                      isTouchScreen: QB
                    })
                  })]
                })]
              }), (0, aB.jsx)("div", {
                className: "MiddleLeft"
              }), QB && (0, aB.jsx)(XI, {
                children: (0, aB.jsx)(Jz, {})
              }), (0, aB.jsx)("div", {
                className: "CameraFadeHost",
                ref: Mj.h
              })]
            }), (0, aB.jsx)(mB.k, {
              children: (0, aB.jsx)(Gd.d, {})
            }), (0, aB.jsx)(mB.k, {
              children: (0, aB.jsx)(dd, {})
            }), (0, aB.jsx)(XI, {
              first: !0,
              children: (0, aB.jsx)(Un.c, {})
            }), (0, aB.jsx)(mB.k, {
              children: (0, aB.jsx)(TI, {})
            })]
          })
      }));

    function TI() {
      return (0, nB.useEffect)((() => {
        const BB = setTimeout((() => {
          (0, tB.l)()
        }), 0);
        return () => {
          clearTimeout(BB), tB.n.Vk(!1)
        }
      }), []), null
    }
    const PI = (0, nB.memo)((function() {
        const BB = (0, uB.h)("aimingOverlay", "none");
        (0, GB.d)();
        const jB = (0, gB.m)("middleTextUpper"),
          zB = (0, gB.m)("middleTextLower");
        return (0, aB.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, aB.jsx)(lI, {
            text: jB,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: WI
          }), (0, aB.jsx)(lI, {
            text: zB,
            className: "MiddleText",
            maxHeightFraction: eI
          })]
        })
      })),
      WI = .3,
      eI = .2;

    function lI(BB) {
      let {
        text: jB,
        className: zB,
        maxHeightFraction: QB
      } = BB;
      const dB = (0, nB.useRef)(null),
        IB = (0, nB.useRef)(null);
      return function(BB, jB, zB, QB) {
        (0, nB.useLayoutEffect)((() => {
          const QB = BB.current,
            nB = jB.current;
          if (!QB || !nB) return;
          let dB = -1,
            IB = -1;
          const NB = BB => (nB.style.setProperty("zoom", String(BB)), QB.getBoundingClientRect().height),
            uB = () => {
              const BB = document.documentElement.clientHeight * zB;
              let jB = 1;
              if (NB(1) > BB) {
                let zB = .5,
                  QB = 1;
                for (let jB = 0; jB < 6; jB++) {
                  const jB = (zB + QB) / 2;
                  NB(jB) <= BB ? zB = jB : QB = jB
                }
                jB = zB
              }
              IB = NB(jB), dB = QB.getBoundingClientRect().width
            };
          uB();
          let UB = 0;
          const aB = () => {
              cancelAnimationFrame(UB), UB = requestAnimationFrame(uB)
            },
            pB = new ResizeObserver((() => {
              const {
                width: BB,
                height: jB
              } = QB.getBoundingClientRect();
              BB === dB && jB === IB || aB()
            }));
          return pB.observe(QB), window.addEventListener("resize", aB), () => {
            pB.disconnect(), window.removeEventListener("resize", aB), cancelAnimationFrame(UB), nB.style.removeProperty("zoom")
          }
        }), [BB, jB, zB, QB])
      }(dB, IB, QB, jB.content), (0, aB.jsx)("div", {
        ref: dB,
        className: "MiddleTextFit",
        children: (0, aB.jsx)(Ud, {
          ref: IB,
          text: jB,
          className: zB
        })
      })
    }
    const wI = (0, nB.memo)((function() {
        const BB = (0, uB.h)("aimingOverlay", "none");
        (0, GB.d)();
        const jB = (0, gB.i)("useInventory");
        return (0, aB.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === BB ? {
            visibility: "hidden"
          } : {},
          children: [(0, aB.jsx)(pB, {}), (0, aB.jsx)(hz.c, {}), (0, aB.jsx)(Xz, {}), (0, aB.jsx)(mB.k, {
            children: (0, aB.jsx)(Vn, {})
          }), (0, aB.jsxs)("div", {
            className: "HotBarRow",
            children: [jB ? (0, aB.jsx)(WB.e, {}) : (0, aB.jsx)(WB.g, {}), (0, aB.jsx)(lB, {})]
          })]
        })
      })),
      xI = (0, nB.memo)((function(BB) {
        let {
          showChat: jB
        } = BB;
        const {
          t: zB
        } = (0, DB.D)(), {
          clientEscMenuOptions: QB,
          isTouchScreen: dB
        } = (0, iB.m)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, GB.d)();
        const {
          userContext: NB,
          isUserContextUpdating: uB
        } = (0, kB.d)(), UB = (0, gB.i)("hideCoordinates"), pB = (0, gB.i)("customVariationTitle"), {
          requestedGameNameWithVariation: sB,
          gameNameWithVariation: JB,
          lobbyName: mB,
          shownLobbyName: yB
        } = (0, EB.k)("connectedGame"), tB = (0, rB.e)(sB, mB, !1), [SB, MB] = (0, nB.useState)(null), qB = (0, fn.p)(JB || sB || ""), fB = pB || qB || "";
        (0, nB.useEffect)((() => {
          uB || cQ.b.getFavouriteLobbies(NB).then((BB => {
            console.log("Got favourite lobbies", BB), MB(BB)
          }))
        }), [uB, NB]);
        const oB = (0, nB.useRef)(null);
        return (0, nB.useLayoutEffect)((() => {
          const BB = oB.current,
            jB = document.documentElement,
            zB = new ResizeObserver((() => {
              jB.style.setProperty("--InGameHeaderRowsHeight", `${BB.offsetHeight}px`)
            }));
          return zB.observe(BB), () => {
            zB.disconnect(), jB.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), wQ(oB), (0, aB.jsxs)(aB.Fragment, {
          children: [(0, aB.jsxs)("div", {
            className: IB()(PQ.h, {
              Touchscreen: dB
            }),
            ref: oB,
            children: [(0, aB.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, aB.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: BB => {
                  BB.stopPropagation(), BB.preventDefault()
                },
                onClick: () => {
                  iB.c.set({
                    openEverythingMenuName: LB.o.SETTINGS
                  })
                },
                children: [(0, aB.jsx)(qn.e, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, aB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, aB.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === tB && (0, aB.jsx)(qn.e, {}), null !== tB && (0, aB.jsxs)(aB.Fragment, {
                  children: [tB, fB && ` ${fB}`]
                })]
              }), (0, aB.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, aB.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: yB
              }), (0, Hn.B)(mB) && (0, aB.jsx)(ZB.g, {
                tooltipInner: (0, aB.jsx)("div", {
                  children: zB(null !== SB && SB.includes(mB) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, aB.jsx)("div", {
                  children: (0, aB.jsx)(ez.t, {
                    isLiked: null !== SB && SB.includes(mB),
                    onClick: () => {
                      try {
                        if (!SB) return;
                        SB.includes(mB) ? (cQ.b.unfavouriteLobby(NB, mB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), MB(SB.filter((BB => BB !== mB)))) : (cQ.b.favouriteLobby(NB, mB).catch((BB => {
                          console.error("Failed to favourite lobby", BB)
                        })), MB([...SB, mB]))
                      } catch (BB) {
                        console.error("Failed to like lobby", BB)
                      }
                    },
                    isLoading: null === SB
                  })
                })
              }), (0, aB.jsx)(md, {})]
            }), (0, aB.jsx)(Ln, {
              show: QB.showFPS
            }), !UB && QB.showCoordinates && (0, aB.jsx)(Sn, {}), !UB && QB.showChunkCoordinates && (0, aB.jsx)(Mn, {}), (0, aB.jsx)(rd, {})]
          }), (0, aB.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, aB.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: jB && (0, aB.jsx)(CB.c, {})
            })
          })]
        })
      })),
      KI = (0, nB.memo)((function() {
        (0, GB.d)();
        const BB = (0, gB.m)("RightInfoText"),
          [jB, zB] = (0, nB.useState)(null);
        return (0, Gj.e)(jB, ".RightElements"), BB.hasText ? (0, aB.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, aB.jsx)(Ud, {
            ref: zB,
            text: BB,
            className: "RightInfoDiv",
            children: (0, aB.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, aB.jsx)(UB.e, {
                text: BB.content
              })
            })
          })
        }) : null
      }))
  },
  4928: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB
    });
    var QB = zB(62),
      nB = zB(363),
      dB = zB(1971),
      IB = zB(1148);

    function NB(BB) {
      let {
        text: jB
      } = BB;
      const zB = [];
      let NB = "";
      return (0, nB.Rb)(jB).forEach(((BB, jB) => {
        if ("string" === typeof BB || !(0, dB.d)(BB.icon)) return void(NB += "string" === typeof BB ? BB : BB.icon);
        const nB = Math.max(0, NB.trimEnd().search(/\S{1,12}$/));
        zB.push((0, IB.jsxs)(QB.Fragment, {
          children: [NB.slice(0, nB), (0, IB.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [NB.slice(nB), (0, IB.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": BB.icon,
              children: (0, IB.jsx)(dB.c, {
                itemName: BB.icon,
                amount: 0
              })
            })]
          })]
        }, jB)), NB = ""
      })), zB.push(NB), (0, IB.jsx)(IB.Fragment, {
        children: zB
      })
    }
  },
  36606: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB,
      h: () => aB,
      k: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1971),
      NB = zB(1148);
    const uB = 350;
    let UB = 0;

    function aB() {
      return UB += 1, UB
    }

    function pB(BB, jB) {
      let zB = 0;
      for (const QB of BB) "ingredient" !== QB.kind && QB.zu === jB && (zB += QB.amount);
      return zB > 0 ? {
        idx: jB,
        amount: zB
      } : null
    }

    function rB(BB) {
      var jB, zB;
      let {
        anim: nB,
        onComplete: UB
      } = BB;
      const aB = null !== (jB = nB.delayMs) && void 0 !== jB ? jB : 0,
        pB = null !== (zB = nB.durationMs) && void 0 !== zB ? zB : uB,
        [rB, sB] = (0, QB.useState)(nB.from),
        [JB, mB] = (0, QB.useState)(0 === aB),
        [yB, kB] = (0, QB.useState)(!1),
        GB = (0, QB.useRef)(!1);
      return (0, QB.useEffect)((() => {
        let BB, jB;
        const zB = () => {
            GB.current = !0, mB(!0), BB = requestAnimationFrame((() => {
              jB = requestAnimationFrame((() => {
                sB({
                  x: nB.to.x,
                  y: nB.to.y
                }), kB(!0)
              }))
            }))
          },
          QB = GB.current ? 0 : aB;
        let dB;
        QB > 0 ? dB = setTimeout(zB, QB) : zB();
        const IB = setTimeout((() => {
          UB(nB.id)
        }), QB + pB + 50);
        return () => {
          clearTimeout(dB), cancelAnimationFrame(BB), cancelAnimationFrame(jB), clearTimeout(IB)
        }
      }), [nB.id, nB.to.x, nB.to.y, UB, aB, pB]), (0, NB.jsx)("div", {
        className: dB()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === nB.kind,
          Waiting: !JB,
          Arrived: yB
        }),
        style: {
          left: rB.x,
          top: rB.y,
          "--fly-duration": `${pB}ms`
        },
        children: (0, NB.jsx)(IB.c, {
          itemName: nB.itemName,
          amount: nB.amount
        })
      })
    }
  },
  36590: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => XB,
      g: () => TB
    });
    var QB = zB(62),
      nB = zB(3116),
      dB = zB(6539),
      IB = zB(2125),
      NB = zB(2516),
      uB = zB(8830),
      UB = zB(376),
      aB = zB(31),
      pB = zB(1471),
      rB = zB(41),
      sB = zB(1091),
      JB = zB.n(sB),
      mB = zB(363),
      yB = zB(36596),
      kB = zB(1952),
      GB = zB(2025),
      LB = zB(8691),
      gB = zB(1148);

    function tB(BB) {
      var jB, zB;
      let {
        slotIdx: dB
      } = BB;
      const IB = (0, GB.h)("hotbar", (BB => {
          var jB;
          return null !== (jB = BB.items[dB]) && void 0 !== jB ? jB : null
        })),
        uB = (0, GB.h)("hotbar", (BB => BB.ammo)),
        [aB, pB] = (0, QB.useState)(!1),
        rB = (0, QB.useRef)(null),
        [sB, mB] = (0, QB.useState)(null),
        [yB, tB] = (0, QB.useState)(null),
        SB = (0, NB.i)("maxAuraLevel"),
        MB = (0, nB.d)(),
        EB = (0, QB.useCallback)((() => {
          if (clearTimeout(rB.current), IB) {
            var BB, jB, zB, QB;
            const uB = IB.displayName,
              aB = [],
              pB = Array.isArray(uB) ? uB : [uB],
              rB = {
                fontStyle: null !== (BB = IB.attributes.customAttributes) && void 0 !== BB && BB.author ? "italic" : "normal"
              };
            for (const BB of pB) BB.str ? aB.push(BB) : aB.push({
              str: BB,
              style: rB
            });
            if (null !== (jB = IB.attributes.customAttributes) && void 0 !== jB && jB.enchantments) {
              aB.push(" ");
              const BB = Object.entries(IB.attributes.customAttributes.enchantments).sort(((BB, jB) => jB[1] - BB[1])),
                jB = IB.attributes.customAttributes.enchantmentData;
              for (const [zB, QB] of BB) {
                var nB, dB;
                const BB = null !== (nB = null === jB || void 0 === jB || null === (dB = jB[zB]) || void 0 === dB ? void 0 : dB.icon) && void 0 !== nB ? nB : `${zB} Enchantment`;
                var NB;
                if (QB < 4)
                  for (let jB = 0; jB < QB; jB++) aB.push({
                    icon: BB,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else aB.push({
                  icon: BB,
                  style: {
                    fontSize: "1.5em"
                  }
                }), aB.push(null !== (NB = (0, UB.O)(QB)) && void 0 !== NB ? NB : QB.toString())
              }
            }
            mB(aB), tB(null !== (zB = null === (QB = IB.attributes.customAttributes) || void 0 === QB ? void 0 : QB.enchantmentTier) && void 0 !== zB ? zB : null)
          } else mB(null), tB(null);
          pB(!0), MB();
          const uB = null === IB || void 0 === IB ? void 0 : IB.attributes.customAttributes;
          void 0 === (null === uB || void 0 === uB ? void 0 : uB.shotsLeft) && (rB.current = setTimeout((() => {
            pB(!1)
          }), 2e3))
        }), [null === IB || void 0 === IB ? void 0 : IB.name, dB, null === IB || void 0 === IB ? void 0 : IB.instance, null === IB || void 0 === IB ? void 0 : IB.displayName]);
      (0, QB.useEffect)((() => (EB(), () => {
        clearTimeout(rB.current), pB(!1)
      })), [null === IB || void 0 === IB ? void 0 : IB.name, dB, null === IB || void 0 === IB ? void 0 : IB.instance, EB]);
      const iB = null === IB || void 0 === IB || null === (jB = IB.attributes.customAttributes) || void 0 === jB ? void 0 : jB.shotsLeft,
        qB = void 0 === iB ? null : (0, gB.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${iB}|${IB.requiresAmmo?`${uB}x${IB.clipSize}`:IB.clipSize}`
        }),
        fB = (0, LB.l)();
      return (0, gB.jsx)(gB.Fragment, {
        children: aB && IB && !fB.showing ? (0, gB.jsxs)("div", {
          className: JB()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === SB,
            Enchanted: null !== yB
          }),
          style: {
            "--enchantmentColour": null !== (zB = UB.hb[yB]) && void 0 !== zB ? zB : UB.hb.None,
            "--duration": yB ? (0, UB.db)(yB) + "s" : void 0
          },
          children: [yB && (0, gB.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, gB.jsx)(kB.e, {
              text: sB
            }), qB]
          }), (0, gB.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, gB.jsx)(kB.e, {
              text: sB
            }), qB]
          })]
        }) : null
      })
    }
    var SB = zB(36606),
      MB = zB(28),
      EB = zB(1982),
      iB = zB(658),
      qB = zB(2525),
      fB = zB(3510),
      oB = zB(3517);
    var HB = zB(1167),
      DB = zB(1162),
      FB = zB(2585);

    function YB() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var VB = zB(8910),
      hB = zB(1501);
    const XB = (0, QB.memo)((function() {
      const [BB, jB] = (0, QB.useState)(0), zB = (0, NB.i)("useFullInventory"), IB = (0, NB.i)("highlightedHotbarSlots"), {
        isTouchScreen: uB,
        openInGameMenuName: UB
      } = (0, MB.m)(["isTouchScreen", "openInGameMenuName"]), rB = null !== UB && "inventory" !== UB, sB = (0, GB.k)("fullInventory") && "inventory" === UB, mB = function() {
        const BB = (0, HB.l)(((BB, jB) => `${BB}:${(0,DB.b)(BB,jB)?"portrait":"landscape"}`)),
          [jB, zB] = (0, QB.useState)(YB);
        return (0, QB.useLayoutEffect)((() => {
          zB(YB())
        }), [BB]), (0, pB.f)(FB.f, (() => {
          zB(YB())
        })), jB
      }(), kB = uB && !mB;
      ! function(BB, jB, zB) {
        (0, QB.useLayoutEffect)((() => {
          const QB = document.documentElement.classList;
          return BB && (QB.add("TouchHotbar"), QB.toggle("TouchHotbarKeysAbove", jB), QB.toggle("TouchHotbarHasBag", zB)), (0, fB.h)(), aB.n.Ly(oB.b), () => {
            QB.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, fB.h)(), aB.n.Ly(oB.b)
          }
        }), [BB, jB, zB])
      }(uB, kB, zB);
      const [LB, qB] = (0, dB.e)("changedHotbarUsingNumkeys", !0), VB = (0, GB.h)("hotbar", (BB => BB.selectedSlot)), hB = null !== VB && void 0 !== VB ? VB : BB, XB = (0, nB.d)(), PB = (0, QB.useRef)(null), WB = (0, pB.h)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, pB.f)("inventoryDraggedItemUpdated", (BB => {
        PB.current = BB, XB()
      })), (0, GB.d)("hotbarScrolled", (BB => {
        null === VB && wB(BB)
      })), (0, GB.d)("hotbarSlotRequested", (BB => {
        lB(BB), qB(!1)
      })), (0, GB.d)("numberKeyPressed", (() => {
        qB(!1)
      })), (0, GB.d)("hotbarDropRequested", (BB => {
        const jB = EB.gameBridge.latest("hotbar").items[hB];
        if (jB) {
          var zB;
          const QB = BB && null !== (zB = jB.amount) && void 0 !== zB ? zB : 1;
          EB.gameBridge.send("removeInventoryItem", {
            slot: hB,
            amount: QB,
            drop: !0
          })
        }
      }));
      const lB = BB => {
          EB.gameBridge.send("selectHotbarSlot", BB), jB(BB)
        },
        wB = BB => {
          lB((hB + BB + iB.n) % iB.n)
        };
      let xB, KB = null,
        CB = null,
        cB = BB => BB => {},
        bB = BB => jB => {
          lB(BB)
        },
        vB = BB => BB => {},
        RB = [];
      if (sB) {
        var OB;
        const BB = PB.current;
        if (null === BB || void 0 === BB || !BB.setHovered) return (0, gB.jsx)("div", {
          className: JB()("HotBarContainer", {
            Touch: uB,
            KeysAbove: kB
          }),
          children: (0, gB.jsx)("div", {
            className: "HotBar"
          })
        });
        KB = BB.draggedInfo, CB = BB.specialItemInfo, cB = BB.setHovered, bB = BB.pointerDown, vB = BB.pointerUp, xB = BB.variation, RB = null !== (OB = BB.craftFlyAnims) && void 0 !== OB ? OB : []
      }
      return (0, gB.jsxs)("div", {
        className: JB()("HotBarContainer", {
          Touch: uB,
          PopupOpen: uB && rB,
          KeysAbove: kB
        }),
        children: [(0, gB.jsxs)("div", {
          className: JB()("HotBar", {
            HoverDisabled: WB
          }),
          children: [uB && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)(AB, {
              useFullInventory: zB,
              inventoryOpen: sB
            }), (0, gB.jsx)(ZB, {
              direction: "Previous",
              onPress: () => {
                wB(-1)
              }
            })]
          }), !uB && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)(TB, {}), (0, gB.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, gB.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((BB, jB) => (0, gB.jsx)(yB.d, {
              idx: jB,
              draggedInfo: KB,
              specialItemInfo: CB,
              craftFlyHoldbackInfo: (0, SB.k)(RB, jB),
              setHovered: cB(jB),
              pointerDown: bB(jB),
              pointerUp: vB(jB),
              variation: xB,
              isSelected: jB === hB,
              hotbarHighlighted: !0 === (null === IB || void 0 === IB ? void 0 : IB.includes(jB)),
              hoverDisabled: WB,
              showNumber: LB && !uB
            }, jB)))
          }), uB && (0, gB.jsx)(ZB, {
            direction: "Next",
            onPress: () => {
              wB(1)
            }
          }), !uB && (0, gB.jsxs)(gB.Fragment, {
            children: [(0, gB.jsx)("div", {
              className: "HotBarFiller"
            }), (0, gB.jsx)("div", {
              className: JB()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !zB
              }),
              onPointerDown: () => {
                aB.n.Ly("toggleMenu", "inventory")
              },
              children: (0, gB.jsx)(eB, {})
            })]
          })]
        }), (0, gB.jsx)(tB, {
          slotIdx: hB
        })]
      })
    }));

    function ZB(BB) {
      let {
        direction: jB,
        onPress: zB
      } = BB;
      return (0, gB.jsx)("div", {
        className: JB()("HotBarArrow", jB),
        ...hB.h,
        children: (0, gB.jsx)(IB.e, {
          icon: "Previous" === jB ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: zB
        })
      })
    }
    const AB = (0, QB.memo)((function(BB) {
        let {
          useFullInventory: jB,
          inventoryOpen: zB
        } = BB;
        const nB = (0, NB.i)("maxAuraLevel"),
          dB = (0, QB.useRef)(null),
          IB = (0, uB.b)();
        return function(BB, jB, zB) {
          (0, QB.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", jB), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [jB]), (0, QB.useLayoutEffect)((() => {
            const jB = BB.current.closest(".BottomMiddleElements");
            return jB.classList.toggle("TouchInventoryOpen", zB), () => {
              jB.classList.remove("TouchInventoryOpen")
            }
          }), [BB, zB])
        }(dB, IB, zB), (0, VB.d)(dB, IB, zB), (0, gB.jsxs)("div", {
          ref: dB,
          className: JB()("TouchInventoryKeys", {
            NoAuraBar: 0 === nB,
            InventoryOpen: zB
          }),
          children: [(0, gB.jsx)(TB, {
            touchKey: !0
          }), (0, gB.jsx)("div", {
            className: JB()("TouchInventoryKey BagKey", {
              Hidden: !jB
            }),
            ...hB.h,
            children: (0, gB.jsx)(eB, {
              touchKey: !0
            })
          })]
        })
      })),
      TB = (0, QB.memo)((function(BB) {
        let {
          touchKey: jB = !1
        } = BB;
        const zB = (0, uB.b)();
        return (0, gB.jsx)("div", {
          className: jB ? JB()("TouchInventoryKey ShopKey", {
            Hidden: !zB
          }) : JB()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !zB
          }),
          ...jB ? hB.h : {},
          children: (0, gB.jsx)(IB.e, {
            icon: (0, UB.dc)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              zB && MB.c.set({
                openEverythingMenuName: mB.o.SHOP
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
        player: jB
      } = BB;
      return jB.some((BB => null !== BB && UB.Yc.includes(BB.name)))
    }

    function WB(BB) {
      BB.creative || rB.j.getItem("LogInInventoryRedDotTutorialComplete") || (PB(BB) ? (aB.n.Ly("RedDotOpenInventoryIcon", !0), aB.n.Ly("TouchTutorialOpenInventoryIcon", !0)) : (aB.n.Ly("RedDotOpenInventoryIcon", !1), aB.n.Ly("TouchTutorialOpenInventoryIcon", !1)))
    }
    const eB = (0, QB.memo)((function(BB) {
      let {
        touchKey: jB = !1
      } = BB;
      (0, QB.useEffect)((() => {
        WB(EB.gameBridge.latest("inventory"))
      }), []), (0, GB.d)("inventory", WB);
      const zB = (0, qB.o)();
      return (0, pB.f)("toggleMenu", (BB => {
        zB.shown && (null !== BB && void 0 !== BB && BB.startsWith("inventory") && PB(EB.gameBridge.latest("inventory")) ? (rB.j.setItem("LogInInventoryRedDotTutorialComplete", !0), aB.n.Ly("RedDotOpenInventoryIcon", !1), aB.n.Ly("TouchTutorialOpenInventoryIcon", !1)) : "shop" === BB && aB.n.Ly("showShopTouchTutorial", !1))
      })), jB ? (0, gB.jsx)(IB.e, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          aB.n.Ly("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, gB.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          aB.n.Ly("toggleMenu", "inventory")
        },
        children: (0, gB.jsx)(IB.e, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: BB => {
            aB.n.Ly("toggleMenu", "inventory"), BB.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36596: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => yB,
      g: () => JB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1980),
      NB = zB(1971),
      uB = zB(1982),
      UB = zB(2025),
      aB = zB(36599),
      pB = zB(34262),
      rB = zB(1418),
      sB = zB(1148);
    const JB = (BB, jB, zB) => {
      let QB = jB,
        nB = !1;
      for (const dB of zB)(null === dB || void 0 === dB ? void 0 : dB.idx) === BB && (nB = !0, QB > 0 && (QB -= dB.amount));
      return {
        displayedAmt: QB,
        shown: !nB || QB > 0
      }
    };
    const mB = BB => {
        let {
          idx: jB
        } = BB;
        return (0, rB.u)() ? null : (0, sB.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: jB < 9 ? jB + 1 : 0
        })
      },
      yB = (0, QB.memo)((function(BB) {
        var jB, zB, QB;
        let {
          idx: nB,
          setHovered: rB,
          pointerDown: yB,
          pointerUp: kB,
          draggedInfo: GB,
          specialItemInfo: LB,
          craftFlyHoldbackInfo: gB,
          defaultIconB64: tB = null,
          variation: SB,
          isSelected: MB = !1,
          hotbarHighlighted: EB = !1,
          hoverDisabled: iB = !1,
          showNumber: qB = !1,
          showNewDot: fB = !1
        } = BB;
        const oB = (0, UB.h)("inventory", (BB => nB === aB.g ? null : (0, pB.i)(BB, nB)));
        let HB, DB, FB, YB;
        if (nB === aB.g) LB && (HB = LB.name, FB = LB.amount, YB = LB.attributes);
        else if (oB) {
          var VB;
          HB = oB.name, DB = oB.icon, FB = null !== (VB = oB.amount) && void 0 !== VB ? VB : 0, YB = oB.attributes
        }
        const hB = null === (jB = YB) || void 0 === jB || null === (zB = jB.customAttributes) || void 0 === zB ? void 0 : zB.enchantmentTier,
          XB = (0, IB.i)(YB),
          {
            displayedAmt: ZB,
            shown: AB
          } = JB(nB, FB, [GB, LB, gB]),
          TB = HB && AB,
          PB = void 0 !== SB && function(BB, jB) {
            const {
              enchantable: zB,
              salvageable: QB
            } = uB.gameBridge.latest("stationItems");
            return "Enchanting Table" === BB ? !0 === zB[jB] : "Salvaging Table" === BB && !0 === QB[jB]
          }(SB, HB);
        return (0, sB.jsxs)("div", {
          className: dB()("InvenItem", {
            Highlighted: TB && PB,
            Selected: MB,
            HotbarHighlighted: EB,
            HoverDisabled: iB
          }),
          onPointerEnter: () => {
            null === rB || void 0 === rB || rB(!0)
          },
          onPointerLeave: () => {
            null === rB || void 0 === rB || rB(!1)
          },
          onPointerDown: yB,
          onPointerUp: kB,
          "data-inven-idx": nB,
          children: [TB && (0, sB.jsx)(NB.c, {
            itemName: null !== (QB = DB) && void 0 !== QB ? QB : HB,
            amount: ZB,
            enchantmentTier: hB,
            bar: XB
          }), TB && fB && (0, sB.jsx)("div", {
            className: "InvenItemNewDot"
          }), qB && (0, sB.jsx)(mB, {
            idx: nB
          }), tB && !TB && (0, sB.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${tB})`
            }
          })]
        })
      }))
  },
  36599: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      g: () => nB
    });
    const QB = -1,
      nB = -2
  },
  37089: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => iB
    });
    var QB = zB(62),
      nB = zB(37091),
      dB = zB(1952),
      IB = zB(635),
      NB = zB(31),
      uB = zB(1091),
      UB = zB.n(uB),
      aB = zB(36631),
      pB = zB(2714),
      rB = zB(36633),
      sB = zB(2746),
      JB = zB(2720),
      mB = zB(3700),
      yB = zB(36635),
      kB = zB(28),
      GB = zB(2087),
      LB = zB(2458),
      gB = zB(1263),
      tB = zB(5004),
      SB = zB(2025),
      MB = zB(106),
      EB = zB(1148);
    const iB = (0, QB.memo)((function() {
      const BB = (0, nB.e)(),
        jB = (0, SB.k)("players"),
        zB = (0, SB.k)("lobbyLeaderboardRows"),
        NB = (0, SB.k)("hiddenPlayerNames"),
        uB = (0, QB.useRef)(null),
        [UB, aB] = (0, QB.useReducer)((BB => BB + 1), 0);
      return (0, QB.useEffect)((() => (0, GB.d)((() => {
        aB()
      }))), []), (0, EB.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, EB.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!BB) return (0, EB.jsx)(EB.Fragment, {});
            const QB = [...jB.ids],
              nB = {},
              UB = {};
            for (const BB of QB) {
              var aB, pB;
              nB[BB] = null === (aB = zB[BB]) || void 0 === aB ? void 0 : aB.colour;
              const jB = null === (pB = zB[BB]) || void 0 === pB ? void 0 : pB.values;
              jB && (UB[BB] = {
                ...jB
              })
            }
            const sB = Object.keys(BB);
            sB.sort(((jB, zB) => BB[jB].sortPriority - BB[zB].sortPriority)), QB.sort(((jB, zB) => {
              if (!UB[jB] || !UB[zB]) return 0;
              for (const QB of sB) {
                const nB = UB[jB][QB],
                  dB = UB[zB][QB];
                let IB = 0;
                if ("string" == typeof nB && "string" == typeof dB ? IB = nB.localeCompare(dB) : "number" == typeof nB && "number" == typeof dB ? IB = nB - dB : "number" == typeof nB && "string" == typeof dB ? IB = 1 : "string" == typeof nB && "number" == typeof dB && (IB = -1), IB) return IB * ("ascending" === BB[QB].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const BB of QB) {
              var JB, mB, yB;
              const {
                name: QB,
                ranks: nB,
                cosmetics: dB
              } = jB.byId[BB], NB = [], uB = null !== (JB = null === (mB = zB[BB]) || void 0 === mB || null === (yB = mB.tags) || void 0 === yB ? void 0 : yB.flatMap((BB => 0 === BB.length ? BB : [...BB, String.fromCharCode(8198)]))) && void 0 !== JB ? JB : [];
              NB.push(...uB), NB.push(...(0, gB.s)(nB, QB, (null === dB || void 0 === dB ? void 0 : dB.nameColour) === IB.b || null === dB || void 0 === dB ? void 0 : dB.nameColour)), UB[BB] ??= {}, UB[BB].name = NB
            }

            function kB(BB, zB) {
              if (UB[BB] && void 0 !== UB[BB][zB]) {
                if ("name" === zB) {
                  const {
                    name: QB,
                    cosmetics: nB
                  } = jB.byId[BB];
                  return (0, EB.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [nB && (0, EB.jsx)(LB.c, {
                      cosmetics: nB
                    }), " ", (0, EB.jsx)(dB.e, {
                      text: UB[BB][zB],
                      friendBadgeFor: (0, GB.h)(QB, NB) ? QB : void 0
                    })]
                  })
                }
                return (0, EB.jsx)(dB.e, {
                  text: UB[BB][zB]
                })
              }
              return ""
            }
            const SB = Object.keys(BB).filter((jB => !0 !== BB[jB].hidden)).map((jB => {
              var zB;
              return {
                key: jB,
                header: (0, EB.jsx)(dB.e, {
                  text: null !== (zB = BB[jB].displayName) && void 0 !== zB ? zB : ""
                })
              }
            }));
            return (0, EB.jsx)("div", {
              ref: uB,
              className: "LobbyLeaderboard",
              children: (0, EB.jsx)(tB.c, {
                columns: SB,
                rows: QB,
                getRowKey: BB => BB,
                renderRow: zB => {
                  const QB = zB !== jB.localId;
                  return (0, EB.jsx)(qB, {
                    playerId: zB,
                    playerName: jB.byId[zB].name,
                    isOtherPlayer: QB,
                    opensProfileCard: (0, rB.f)(QB, jB.byId[zB].name, NB),
                    lobbyLeaderboardInfo: BB,
                    getPlayerValue: kB,
                    playerColors: nB
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function qB(BB) {
      let {
        playerId: jB,
        playerName: zB,
        isOtherPlayer: nB,
        opensProfileCard: dB,
        lobbyLeaderboardInfo: IB,
        getPlayerValue: uB,
        playerColors: GB
      } = BB;
      const LB = (0, QB.useRef)(null);
      (0, QB.useEffect)((() => () => {
        pB.c.closeIfOwner(LB)
      }), []);
      const gB = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            NB.n.Ly("OpenReportMenu", {
              playerEId: jB,
              playerName: zB,
              ha: null,
              serverChatMsgId: null
            })
          }
        },
        tB = () => ({
          ...(0, rB.d)(jB, zB),
          showLocation: !1,
          status: null,
          extraActions: [gB],
          moderationActions: null === zB ? [] : (0, yB.b)(zB),
          friendRequestSource: "leaderboard"
        });
      return (0, EB.jsxs)("tr", {
        ref: LB,
        "data-pad-focusable": dB || void 0,
        [pB.e]: dB || void 0,
        onClick: dB ? () => {
          var BB;
          pB.c.toggle(LB, {
            ...tB(),
            anchor: null !== (BB = LB.current.querySelector(".PlayerPfpAndName")) && void 0 !== BB ? BB : LB.current
          })
        } : void 0,
        onContextMenu: dB ? BB => {
          (0, sB.f)(LB, BB, tB(), kB.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: dB ? BB => {
          (0, JB.e)(BB, (() => (0, rB.d)(jB, zB).playerSocialPreview))
        } : void 0,
        children: [Object.keys(IB).map((BB => !0 === IB[BB].hidden ? null : (0, EB.jsxs)("td", {
          className: UB()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !nB
          }),
          children: [(0, EB.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: uB(jB, BB)
          }), (0, EB.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: GB[jB]
            }
          })]
        }, BB))), nB && !dB && (0, EB.jsx)(aB.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: LB,
          options: [{
            icon: gB.icon,
            text: gB.text,
            onPointerDown: gB.onClick
          }, ...null === zB || MB.featureFlags.useSocialFeatures ? [] : (0, mB.c)(null, zB)]
        })]
      })
    }
  },
  36635: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB
    });
    var QB = zB(2006),
      nB = zB(2540),
      dB = zB(36637);
    const IB = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function NB(BB, jB) {
      return async () => function(BB, jB, zB) {
        return null === jB ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : jB.ok ? {
          message: {
            key: IB[BB.type]
          },
          next: zB
        } : {
          message: {
            fromServer: jB.message
          },
          next: null
        }
      }(BB, await (0, dB.c)(BB), jB())
    }

    function uB(BB) {
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
        run: NB({
          type: "ban",
          name: BB
        }, (() => function(BB) {
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
            run: NB({
              type: "unban",
              name: BB
            }, (() => null))
          }
        }(BB)))
      }
    }

    function UB(BB, jB) {
      if (null === BB) return [];
      const zB = [],
        QB = function(BB, jB) {
          var zB, QB;
          return null !== (zB = null !== (QB = BB.here.find((BB => BB.name === jB))) && void 0 !== QB ? QB : BB.away.find((BB => BB.name === jB))) && void 0 !== zB ? zB : null
        }(BB, jB);
      var dB, IB;
      return null !== QB && void 0 !== QB && QB.can.kick && zB.push((dB = jB, IB = QB.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: NB({
          type: "kick",
          name: dB
        }, (() => IB ? uB(dB) : null))
      })), null !== QB && void 0 !== QB && QB.can.ban && zB.push(uB(jB)), zB.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, nB.h)({
            page: "players",
            focusName: jB,
            source: "profile_card"
          })
        }
      }), zB
    }

    function aB(BB) {
      var jB;
      return UB(null !== (jB = QB.c.get("lobbyManage")) && void 0 !== jB ? jB : null, BB)
    }
  },
  36637: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      c: () => uB
    });
    var QB = zB(1514),
      nB = zB(2006),
      dB = zB(1982);
    const IB = 1e4;
    let NB = 0;

    function uB(BB) {
      const jB = ++NB;
      return new Promise((zB => {
        const NB = jB => {
            uB(), clearTimeout(UB), !1 === (null === jB || void 0 === jB ? void 0 : jB.ok) && (0, QB.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: BB.type
            }), zB(jB)
          },
          uB = nB.c.subscribe("lobbyManage", (BB => {
            const zB = function(BB, jB) {
              var zB;
              return null !== (zB = null === BB || void 0 === BB ? void 0 : BB.results.find((BB => BB.requestId === jB))) && void 0 !== zB ? zB : null
            }(BB, jB);
            null !== zB && NB(zB)
          })),
          UB = setTimeout((() => {
            NB(null)
          }), IB);
        dB.gameBridge.send("lobbyManage", {
          ...BB,
          requestId: jB
        })
      }))
    }
    const UB = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class aB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : uB;
        this.onChange = BB, this.sendAction = jB, this.pending = new Map, this.statuses = new Map
      }
      send(BB, jB, zB) {
        var QB;
        return this.statuses.delete(jB), this.pending.set(jB, (null !== (QB = this.pending.get(jB)) && void 0 !== QB ? QB : 0) + 1), this.sendAction(BB).then((BB => {
          var QB;
          const nB = null !== BB && void 0 !== BB ? BB : {
              requestId: -1,
              ok: !1,
              message: UB
            },
            dB = (null !== (QB = this.pending.get(jB)) && void 0 !== QB ? QB : 1) - 1;
          dB > 0 ? this.pending.set(jB, dB) : this.pending.delete(jB);
          const IB = !nB.ok || nB.message.length > 0 ? nB.message : null === zB ? null : [zB];
          return null !== IB && this.statuses.set(jB, {
            ok: nB.ok,
            text: IB,
            until: Date.now() + 4e3
          }), this.onChange(), nB
        }))
      }
      show(BB, jB) {
        this.statuses.set(BB, {
          ...jB,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(BB) {
        for (const [jB, zB] of this.statuses) zB.until <= BB && this.statuses.delete(jB)
      }
      nextDeadline() {
        let BB = null;
        for (const zB of this.statuses.values()) {
          var jB;
          BB = Math.min(null !== (jB = BB) && void 0 !== jB ? jB : 1 / 0, zB.until)
        }
        return BB
      }
      statusOf(BB, jB) {
        const zB = this.statuses.get(BB);
        return !zB || zB.until <= jB ? null : {
          ok: zB.ok,
          text: zB.text
        }
      }
      isPending(BB) {
        return this.pending.has(BB)
      }
    }
  },
  4855: (BB, jB, zB) => {
    zB.d(jB, {
      h: () => GB,
      d: () => kB
    });
    var QB = zB(62),
      nB = zB(1471),
      dB = zB(1952),
      IB = zB(4862),
      NB = zB(1148);
    const uB = (0, QB.memo)((function(BB) {
      let {
        initialParameters: jB
      } = BB;
      const zB = (0, QB.useRef)(null),
        nB = (0, QB.useRef)(null),
        uB = (0, QB.useRef)(0),
        UB = (0, QB.useRef)(null),
        aB = jB.description,
        pB = jB.Qj,
        {
          scale: rB,
          rotation: sB
        } = null !== jB && void 0 !== jB ? jB : {},
        JB = (0, IB.f)();
      return (0, QB.useEffect)((() => {
        const BB = JB.onFrame((() => {
          const BB = JB.getState();
          if (!BB.isActive || !zB.current || !nB.current) return;
          const jB = BB.state;
          if (zB.current.value = jB.progress, jB.clickCount > uB.current) {
            uB.current = jB.clickCount;
            const BB = nB.current;
            BB.classList.add("pulse"), UB.current = setTimeout((() => {
              BB.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(UB.current), BB()
        }
      }), [JB]), (0, NB.jsx)(NB.Fragment, {
        children: (0, NB.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== rB && {
              "--scale": rB
            },
            ...null !== sB && {
              "--rotation": `${sB}deg`
            }
          },
          children: [(0, NB.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: zB
          }), (0, NB.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: nB,
            children: (0, NB.jsx)(dB.e, {
              text: [{
                icon: pB
              }]
            })
          }), (0, NB.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, NB.jsx)(dB.e, {
              text: aB
            })
          })]
        })
      })
    }));
    var UB = zB(1091),
      aB = zB.n(UB);
    const pB = 2 * Math.PI * 90,
      rB = (0, QB.memo)((function(BB) {
        let {
          initialParameters: jB
        } = BB;
        const zB = (0, QB.useRef)(null),
          nB = (0, QB.useRef)(null),
          uB = (0, QB.useRef)(null),
          UB = jB.label,
          rB = jB.icon,
          sB = jB.Nj,
          {
            scale: JB,
            rotation: mB,
            uj: yB
          } = null !== jB && void 0 !== jB ? jB : {},
          kB = (0, IB.f)();
        return (0, QB.useEffect)((() => {
          const BB = kB.onFrame((() => {
            var BB, jB;
            const QB = kB.getState();
            if (!QB.isActive || !nB.current) return;
            const dB = QB.state,
              IB = null !== (BB = dB.timeRemaining) && void 0 !== BB ? BB : 0,
              NB = null !== (jB = dB.Ij) && void 0 !== jB ? jB : 1,
              UB = pB * (1 - IB / NB);
            nB.current.style.strokeDashoffset = `${UB}`, zB.current && (zB.current.style.opacity = IB > 0 ? "1" : "0"), uB.current && sB && (uB.current.textContent = `${(IB/1e3).toFixed(1)}s`)
          }));
          return () => {
            BB()
          }
        }), [kB, sB]), (0, NB.jsxs)("div", {
          className: "QTETimedClick",
          ref: zB,
          style: {
            ...null !== JB && {
              "--scale": JB
            },
            ...null !== mB && {
              "--rotation": `${mB}deg`
            }
          },
          children: [(0, NB.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, NB.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, NB.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, NB.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: pB,
                ref: nB
              })]
            }), (0, NB.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, NB.jsx)(dB.e, {
                text: [{
                  icon: rB
                }],
                className: aB()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: yB
                })
              })
            })]
          }), (0, NB.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, NB.jsx)(dB.e, {
              text: UB,
              className: "QTETimedClickLabelText"
            }), sB && (0, NB.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: uB
            })]
          })]
        })
      })),
      sB = (0, QB.memo)((function(BB) {
        let {
          initialParameters: jB
        } = BB;
        const zB = (0, QB.useRef)(null),
          nB = (0, QB.useRef)(null),
          uB = (0, QB.useRef)(null),
          UB = (0, QB.useRef)(!1),
          aB = jB.description,
          pB = null === jB || void 0 === jB ? void 0 : jB.icon,
          rB = (0, IB.f)();
        return (0, QB.useEffect)((() => {
          const BB = rB.onFrame((() => {
            const BB = rB.getState();
            if (!BB.isActive) return;
            const jB = BB.state;
            if (zB.current) {
              const BB = 100 * (jB.catchZonePosition - jB.aj / 2);
              zB.current.style.left = `${BB}%`, zB.current.style.width = 100 * jB.aj + "%", jB.isCatching !== UB.current && (UB.current = jB.isCatching, jB.isCatching ? zB.current.classList.add("catching") : zB.current.classList.remove("catching"))
            }
            nB.current && (nB.current.style.left = 100 * jB.moverPosition + "%"), uB.current && (uB.current.value = jB.progress)
          }));
          return () => {
            BB()
          }
        }), [rB]), (0, NB.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, NB.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, NB.jsx)(dB.e, {
              text: aB
            })
          }), (0, NB.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: uB
          }), (0, NB.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, NB.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: zB
            }), (0, NB.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: nB,
              children: (0, NB.jsx)("span", {
                children: pB && (0, NB.jsx)(dB.e, {
                  text: [{
                    icon: pB,
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
    var JB = zB(658);
    const mB = (0, QB.memo)((function(BB) {
        let {
          initialParameters: jB
        } = BB;
        const zB = (0, QB.useRef)(null),
          nB = jB.label,
          uB = jB.kj,
          {
            icon: UB,
            scale: aB,
            rotation: pB
          } = null !== jB && void 0 !== jB ? jB : {},
          rB = 100 * (.5 - uB / 2),
          sB = 100 * uB,
          mB = (0, IB.f)();
        return (0, QB.useEffect)((() => {
          const BB = mB.onFrame((() => {
            const BB = mB.getState();
            if (!BB.isActive || !zB.current) return;
            const jB = BB.state;
            zB.current.style.left = 100 * jB.markerPosition + "%"
          }));
          return () => {
            BB()
          }
        }), [mB]), (0, NB.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, JB.I)(aB) && {
              "--scale": aB
            },
            ...!(0, JB.I)(pB) && {
              "--rotation": `${pB}deg`
            }
          },
          children: [UB && (0, NB.jsx)(dB.e, {
            text: [{
              icon: UB
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, NB.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, NB.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${rB}%`,
                width: `${sB}%`
              }
            }), (0, NB.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: zB
            })]
          }), (0, NB.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, NB.jsx)(dB.e, {
              text: nB
            })
          })]
        })
      })),
      yB = (0, QB.memo)((function(BB) {
        let {
          initialParameters: jB
        } = BB;
        const zB = (0, QB.useRef)(null),
          [nB, uB] = (0, QB.useState)((() => new Array(jB.Lj).fill("pending"))),
          [UB, aB] = (0, QB.useState)((() => {
            const BB = jB.Sj;
            return (0, JB.I)(BB) || BB <= 0 ? [] : new Array(BB).fill("pending")
          })),
          pB = jB.label,
          {
            icon: rB
          } = jB,
          sB = (0, QB.useRef)(0),
          mB = (0, QB.useRef)(0),
          yB = (0, QB.useRef)([]),
          kB = (0, IB.f)();
        return (0, QB.useEffect)((() => {
          const BB = kB.onFrame((() => {
            const BB = kB.getState();
            if (!BB.isActive || !zB.current) return;
            const jB = BB.state,
              QB = 30 + 60 * jB.outerCircleProgress;
            if (zB.current.setAttribute("r", String(QB)), !0 === jB.lastClickResult && jB.successes > sB.current) {
              zB.current.classList.remove("QTERhythmClickOuterCircle--miss"), zB.current.classList.add("QTERhythmClickOuterCircle--hit");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = zB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              yB.current.push(BB)
            } else if (!1 === jB.lastClickResult && jB.misses > mB.current) {
              zB.current.classList.remove("QTERhythmClickOuterCircle--hit"), zB.current.classList.add("QTERhythmClickOuterCircle--miss");
              const BB = setTimeout((() => {
                var BB;
                null === (BB = zB.current) || void 0 === BB || BB.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              yB.current.push(BB)
            }
            jB.successes === sB.current && jB.misses === mB.current || (sB.current = jB.successes, mB.current = jB.misses, uB((BB => {
              const zB = [...BB];
              for (let QB = 0; QB < jB.Lj; QB++) zB[QB] = QB < jB.successes ? "success" : "pending";
              return zB
            })), aB((BB => {
              if (0 === BB.length) return BB;
              const zB = [...BB];
              for (let QB = 0; QB < zB.length; QB++) zB[QB] = QB < jB.misses ? "miss" : "pending";
              return zB
            })))
          }));
          return () => {
            BB();
            for (const BB of yB.current) clearTimeout(BB);
            yB.current = []
          }
        }), [kB]), (0, NB.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, NB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: nB.map(((BB, jB) => (0, NB.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === BB ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, jB)))
          }), (0, NB.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, NB.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, NB.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, NB.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: zB
              })]
            }), rB && (0, NB.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, NB.jsx)(dB.e, {
                text: [{
                  icon: rB
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), UB.length > 0 && (0, NB.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: UB.map(((BB, jB) => (0, NB.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === BB ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, jB)))
          }), (0, NB.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, NB.jsx)(dB.e, {
              text: pB
            })
          })]
        })
      }));

    function kB(BB) {
      let {
        qte: jB
      } = BB;
      switch (jB.type) {
        case "progressBar":
          return (0, NB.jsx)(uB, {
            initialParameters: jB.parameters
          });
        case "timedClick":
          return (0, NB.jsx)(rB, {
            initialParameters: jB.parameters
          });
        case "gravityBar":
          return (0, NB.jsx)(sB, {
            initialParameters: jB.parameters
          });
        case "precisionBar":
          return (0, NB.jsx)(mB, {
            initialParameters: jB.parameters
          });
        case "rhythmClick":
          return (0, NB.jsx)(yB, {
            initialParameters: jB.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const GB = (0, QB.memo)((function() {
      const [BB, jB] = (0, QB.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, nB.f)("qteStateUpdated", (BB => {
        jB(BB)
      })), BB.isActive && BB.type ? (0, NB.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, NB.jsx)(kB, {
          qte: BB
        })
      }) : null
    }))
  },
  4862: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => NB,
      f: () => uB
    });
    var QB = zB(62),
      nB = zB(1325),
      dB = zB(4866);
    const IB = {
        getState: () => dB.c.getCurrentState(),
        onFrame: nB.u
      },
      NB = (0, QB.createContext)(IB);

    function uB() {
      return (0, QB.useContext)(NB)
    }
  },
  36418: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      e: () => rB
    });
    var QB = zB(62),
      nB = zB(1381),
      dB = zB(1240),
      IB = zB(1369),
      NB = zB(3587),
      uB = zB(5026),
      UB = zB(1148);

    function aB(BB) {
      let {
        loading: jB,
        schematics: zB,
        onSchematicPicked: QB,
        selectedSchematicIdList: nB = [],
        disableAutoExport: uB
      } = BB;
      const {
        t: aB
      } = (0, dB.D)();
      return (0, UB.jsxs)("div", {
        className: "SchematicList",
        children: [jB && (0, UB.jsx)(IB.e, {}), !jB && 0 === zB.length && (0, UB.jsx)("div", {
          className: "NoSchematicsText",
          children: aB("worldBuilder:noSavedSchematic")
        }), !jB && zB.map((BB => (0, UB.jsx)(NB.f, {
          source: {
            type: "schematic",
            schematic: BB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            QB(BB)
          },
          isSelected: nB.includes(BB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: BB.isAutoExported && uB,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, BB.schematicId)))]
      })
    }

    function pB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: nB
      } = BB;
      const {
        t: IB
      } = (0, dB.D)(), [NB, pB] = (0, QB.useState)(null);
      return (0, UB.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === NB && (0, UB.jsxs)(UB.Fragment, {
          children: [(0, UB.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: IB("worldBuilder:schematicList")
          }), (0, UB.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: IB("worldBuilder:clickSchematicForOptions")
          }), (0, UB.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, UB.jsx)(aB, {
              loading: !1,
              schematics: jB,
              onSchematicPicked: BB => {
                pB(BB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== NB && (0, UB.jsx)(uB.h, {
          schematic: NB,
          inSourceWorld: NB.schematicId === zB,
          onSchematicUpdate: BB => {
            pB(BB)
          },
          onClose: () => {
            pB(null), nB()
          }
        })]
      })
    }

    function rB(BB) {
      let {
        ownedSchematics: jB,
        currentWorldSchematicId: zB,
        onClose: QB
      } = BB;
      nB.NotificationProvider.showCustomPopup({
        body: BB => (0, UB.jsx)(pB, {
          ownedSchematics: jB,
          currentWorldSchematicId: zB,
          onClose: BB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: QB,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36994: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => tB,
      e: () => gB
    });
    var QB = zB(4352),
      nB = zB(1471),
      dB = zB(62),
      IB = zB(6428),
      NB = zB(4340),
      uB = zB(1316),
      UB = zB(1982),
      aB = zB(1952),
      pB = zB(1478),
      rB = zB(1240),
      sB = zB(36998),
      JB = zB(1091),
      mB = zB.n(JB),
      yB = zB(1343),
      kB = zB(1108),
      GB = zB(1306),
      LB = zB(1148);
    const gB = "SleepingOverlay";

    function tB() {
      const {
        t: BB
      } = (0, rB.D)(), [jB, zB] = (0, dB.useState)(!1), [JB, tB] = (0, dB.useState)(null), [MB, EB] = (0, dB.useState)(1), [iB, qB] = (0, dB.useState)(!1), [fB, oB] = (0, dB.useState)(!1), HB = (0, dB.useRef)(0), DB = (0, dB.useRef)(!1), FB = (0, dB.useRef)(!1), YB = (0, dB.useRef)(), VB = (0, dB.useRef)(null);

      function hB() {
        const BB = null !== JB && void 0 !== JB ? JB : "Rested Speed";
        UB.gameBridge.send("wakeUp", fB ? BB : null), VB.current = null, zB(!1), tB(null), EB(1), qB(!1), oB(!1)
      }

      function XB() {
        return !iB && (hB(), !0)
      }
      return (0, nB.f)("PlayerPhysicsTypeUpdate", (BB => {
        BB !== VB.current && (VB.current = BB, BB === IB.t.SLEEPING ? (FB.current || (HB.current = UB.gameBridge.lookup("cameraZoom", null), FB.current = !0), DB.current = !0, UB.gameBridge.send("setCameraZoom", 3), zB(!0), EB(function() {
          for (const BB of UB.gameBridge.lookup("blocksStandingOn", null)) {
            if (sB.e.leafBeds.includes(BB)) return console.log(`Found leaf bed: ${BB}`), 1;
            if (sB.e.woolBeds.includes(BB)) return console.log(`Found woold bed: ${BB}`), 2;
            if (sB.e.strongBeds.includes(BB)) return console.log(`Found strong bed ${BB}`), 3
          }
          return 1
        }())) : (FB.current = !1, zB(!1), tB(null), EB(1)))
      })), (0, dB.useEffect)((() => () => {
        (0, uB.s)(gB)
      }), []), (0, dB.useEffect)((() => {
        jB ? (0, uB.u)(gB) : ((0, uB.s)(gB), DB.current && (UB.gameBridge.send("setCameraZoom", HB.current), DB.current = !1))
      }), [jB]), (0, GB.v)("overlay", YB, XB, jB), (0, LB.jsx)(QB.d, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: jB,
        timeout: 300,
        nodeRef: YB,
        unmountOnExit: !0,
        children: (0, LB.jsx)("div", {
          ref: YB,
          onClick: BB => {
            XB() && BB.stopPropagation()
          },
          children: (0, LB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, LB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: NB.f.map((jB => (0, LB.jsxs)(SB, {
                restedEffect: jB,
                ou: JB,
                setChosenRestedEffect: tB,
                children: [(0, LB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, LB.jsx)(aB.e, {
                    text: [{
                      icon: jB
                    }]
                  }), NB.d[jB].shortName]
                }), (0, LB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: BB(NB.d[jB].description, {
                    time: NB.d[jB].effectLevelDurations[MB] / 6e4
                  })
                })]
              }, jB)))
            }), (0, LB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, LB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, LB.jsxs)(pB.f, {
                className: "SleepingOverlayWakeUpButton",
                onClick: BB => {
                  fB ? hB() : (qB(!0), (0, yB.V)((() => {
                    qB(!1), oB(!0)
                  }), !0)), BB.stopPropagation()
                },
                loading: iB,
                children: [!fB && (0, LB.jsxs)(LB.Fragment, {
                  children: [(0, LB.jsx)(kB.c, {
                    name: "film"
                  }), " ", BB("classicGame:watchAdToGetRestedPerk")]
                }), fB && BB("classicGame:wakeUp")]
              }), (0, LB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, LB.jsx)("div", {
                  className: mB()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === MB
                  }),
                  children: (0, LB.jsx)(aB.e, {
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
    const SB = (0, dB.memo)((function(BB) {
      let {
        children: jB,
        restedEffect: zB,
        ou: QB,
        setChosenRestedEffect: nB
      } = BB;
      return zB === QB ? (0, LB.jsx)(pB.m, {
        onClick: BB => {
          BB.stopPropagation()
        },
        children: jB
      }) : (0, LB.jsx)(pB.h, {
        onClick: BB => {
          nB(zB), BB.stopPropagation()
        },
        children: jB
      })
    }))
  },
  36633: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      f: () => uB
    });
    var QB = zB(635),
      nB = zB(1982),
      dB = zB(1668),
      IB = zB(106),
      NB = zB(1292);

    function uB(BB, jB, zB) {
      return IB.featureFlags.useSocialFeatures && BB && null === (0, NB.e)(jB, zB)
    }

    function UB(BB, jB) {
      var zB, IB;
      const NB = dB.d.getSocialState().friends.find((BB => BB.name.toLowerCase() === jB.toLowerCase())),
        uB = nB.gameBridge.latest("players").byId[BB],
        UB = void 0 !== uB && uB.name === jB,
        aB = UB && null !== (zB = uB.cosmetics) && void 0 !== zB ? zB : void 0,
        pB = NB && aB ? {
          ...NB,
          cosmetics: aB
        } : NB;
      return {
        playerSocialPreview: null !== pB && void 0 !== pB ? pB : {
          isError: !1,
          name: jB,
          ranks: UB ? [...uB.ranks] : [],
          cosmetics: null !== aB && void 0 !== aB ? aB : {},
          nameColour: null !== (IB = null === aB || void 0 === aB ? void 0 : aB.nameColour) && void 0 !== IB ? IB : QB.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== NB
      }
    }
  },
  5004: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => NB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1148);

    function NB(BB) {
      let {
        columns: jB,
        rows: zB,
        getRowKey: nB,
        renderRow: NB,
        className: uB
      } = BB;
      return (0, IB.jsxs)("table", {
        className: dB()("Table", uB),
        children: [(0, IB.jsx)("thead", {
          children: (0, IB.jsx)("tr", {
            children: jB.map((BB => (0, IB.jsx)("th", {
              children: BB.header
            }, BB.key)))
          })
        }), (0, IB.jsx)("tbody", {
          children: zB.map((BB => (0, IB.jsx)(QB.Fragment, {
            children: NB(BB)
          }, nB(BB))))
        })]
      })
    }
  },
  36762: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB,
      h: () => IB,
      l: () => NB,
      o: () => uB
    });
    var QB = zB(62),
      nB = zB(3219);
    const dB = 8,
      IB = "InGameHeaderContainer",
      NB = "TopRightElements";

    function uB(BB) {
      const [jB] = (0, nB.d)(), [zB, uB] = (0, QB.useState)(!1);
      return (0, QB.useLayoutEffect)((() => {
        if (!BB) return;
        const jB = document.querySelector(`.${IB}`),
          zB = document.querySelector(`.${NB}`),
          QB = () => {
            const QB = BB.getBoundingClientRect(),
              nB = jB ? jB.getBoundingClientRect().right : 0,
              IB = zB ? zB.getBoundingClientRect().left : window.innerWidth,
              NB = QB.left < nB + dB,
              UB = QB.right > IB - dB;
            uB(NB || UB)
          };
        QB();
        const nB = new ResizeObserver(QB);
        return nB.observe(BB), jB && nB.observe(jB), zB && nB.observe(zB), () => {
          nB.disconnect()
        }
      }), [BB, jB]), zB
    }
  },
  36812: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1710),
      NB = zB(1478),
      uB = zB(1369),
      UB = zB(1108),
      aB = zB(1148);

    function pB(BB) {
      let {
        label: jB,
        icon: zB,
        placeholder: nB,
        onSubmit: pB
      } = BB;
      const rB = (0, QB.useRef)(null),
        [sB, JB] = (0, QB.useState)(""),
        [mB, yB] = (0, QB.useState)("Enter"),
        [kB, GB] = (0, QB.useState)(null);
      (0, QB.useEffect)((() => {
        if ("Success" !== mB && "Error" !== mB) return;
        const BB = setTimeout((() => {
          "Success" === mB && rB.current && (rB.current.value = "", JB("")), yB("Enter")
        }), "Success" === mB ? 1e3 : 4e3);
        return () => {
          clearTimeout(BB)
        }
      }), [mB]);
      const LB = () => {
        const BB = sB.trim();
        "" !== BB && "Enter" === mB && (yB("Loading"), pB(BB).then((BB => {
          rB.current && ("error" in BB ? null === BB.error ? yB("Enter") : (GB(BB.error), yB("Error")) : yB("Success"))
        })))
      };
      return (0, aB.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: BB => {
          BB.target === rB.current && "Escape" !== BB.key && BB.stopPropagation()
        },
        children: [(0, aB.jsxs)("div", {
          className: dB()("AddFriendBodyOverlay", `AddFriendBodyOverlay${mB}`),
          children: ["Loading" === mB && (0, aB.jsx)(uB.e, {}), "Success" === mB && (0, aB.jsx)(UB.c, {
            name: "check"
          }), "Error" === mB && kB]
        }), (0, aB.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, aB.jsx)(IB.d, {
            className: "PlayerSearchInput",
            domRef: rB,
            maxLength: 32,
            placeholderText: nB,
            ariaLabel: nB,
            stopPropagation: !1,
            onValueChange: BB => {
              JB(BB)
            },
            onEnter: LB
          }), (0, aB.jsxs)(NB.f, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== mB || "" === sB.trim(),
            onClick: LB,
            children: [(0, aB.jsx)(UB.c, {
              name: zB
            }), " ", jB]
          })]
        })]
      })
    }
  },
  36795: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB
    });
    var QB = zB(62),
      nB = zB(1091),
      dB = zB.n(nB),
      IB = zB(1240),
      NB = zB(1108),
      uB = zB(1148);
    const UB = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      aB = ["unlisted", "public", "whitelist", "private"];

    function pB(BB) {
      let {
        visibility: jB,
        onPick: zB
      } = BB;
      const {
        t: nB
      } = (0, IB.D)(), pB = (0, QB.useRef)([]);
      return (0, uB.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": nB("worldSocial:whoCanJoin"),
        children: aB.map(((BB, QB) => {
          const IB = BB === jB;
          return (0, uB.jsxs)("button", {
            ref: BB => {
              pB.current[QB] = BB
            },
            type: "button",
            className: dB()("WorldSocialTile", {
              WorldSocialTileSelected: IB
            }),
            "aria-pressed": IB,
            tabIndex: IB ? 0 : -1,
            onKeyDown: BB => {
              ((BB, jB) => {
                const zB = "ArrowRight" === BB.key || "ArrowDown" === BB.key ? 1 : "ArrowLeft" === BB.key || "ArrowUp" === BB.key ? -1 : 0;
                var QB;
                0 !== zB && (BB.preventDefault(), null === (QB = pB.current[(jB + zB + aB.length) % aB.length]) || void 0 === QB || QB.focus())
              })(BB, QB)
            },
            onClick: () => {
              zB(BB)
            },
            children: [(0, uB.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, uB.jsx)(NB.c, {
                name: UB[BB]
              })
            }), (0, uB.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, uB.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: nB(`worldSocial:${BB}`)
              }), (0, uB.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: nB(`worldSocial:${BB}Description`)
              })]
            })]
          }, BB)
        }))
      })
    }
  },
  36805: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB
    });
    var QB = zB(1240),
      nB = zB(2766),
      dB = zB(4478),
      IB = zB(1148);

    function NB(BB) {
      let {
        vp: jB,
        children: zB,
        ...NB
      } = BB;
      const {
        t: uB
      } = (0, QB.D)();
      return (0, IB.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          jB.onChange(!jB.on)
        },
        children: (0, IB.jsx)(nB.f, {
          ...NB,
          opensProfileCard: !1,
          children: (0, IB.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: BB => {
              BB.stopPropagation()
            },
            children: [zB, (0, IB.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, IB.jsx)(dB.e, {
                checked: jB.on,
                disabled: !1,
                ariaLabel: uB("worldSocial:letJoin", {
                  playerName: NB.playerSocialPreview.name
                }),
                onChange: BB => {
                  jB.onChange(BB.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36793: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => JB
    });
    var QB = zB(62),
      nB = zB(1240),
      dB = zB(1901),
      IB = zB(106),
      NB = zB(28),
      uB = zB(1514),
      UB = zB(2792),
      aB = zB(34141),
      pB = zB(1478),
      rB = zB(1108),
      sB = zB(1148);

    function JB(BB) {
      let {
        worldCode: jB,
        message: zB
      } = BB;
      const {
        t: JB
      } = (0, nB.D)(), {
        isTouchScreen: mB
      } = (0, NB.m)(["isTouchScreen"]), yB = IB.featureFlags.canUseInviteLinks, kB = (0, aB.j)(yB && null === zB), [GB, LB] = (0, UB.j)(), gB = (0, QB.useRef)(null);
      if (null !== zB) return (0, sB.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, sB.jsx)(rB.c, {
          name: "lock"
        }), (0, sB.jsx)("span", {
          children: zB
        })]
      });
      const tB = yB ? kB : jB,
        SB = mB && yB && (0, UB.e)();
      return (0, sB.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!yB && (0, sB.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: JB("worldSocial:worldCode")
        }), (0, sB.jsx)("input", {
          ref: gB,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== tB && void 0 !== tB ? tB : "",
          "aria-label": JB(yB ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: BB => {
            BB.currentTarget.select()
          }
        }), (0, sB.jsxs)(pB.f, {
          className: "WorldSocialCopy",
          disabled: null === tB,
          onClick: () => {
            null !== tB && (0, UB.f)(tB, {
              useShareSheet: SB,
              onOutcome: BB => {
                if ((0, uB.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== BB || yB ? BB : "code"
                  }), "copied" === BB) LB();
                else if ("failed" === BB) {
                  var jB;
                  null === (jB = gB.current) || void 0 === jB || jB.focus(), dB.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, sB.jsx)(rB.c, {
            name: GB ? "check" : SB ? "up-from-bracket" : "copy"
          }), " ", JB(GB ? "general:copied" : SB ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36800: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => sB,
      d: () => rB,
      e: () => pB
    });
    var QB = zB(635),
      nB = zB(1240),
      dB = zB(1668),
      IB = zB(2766),
      NB = zB(2711),
      uB = zB(1478),
      UB = zB(36805),
      aB = zB(1148);

    function pB(BB, jB) {
      var zB;
      return {
        isError: !1,
        name: BB,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== jB && void 0 !== jB ? jB : {},
        nameColour: null !== (zB = null === jB || void 0 === jB ? void 0 : jB.nameColour) && void 0 !== zB ? zB : QB.b,
        location: {
          status: "offline"
        }
      }
    }

    function rB(BB) {
      let {
        player: jB,
        isFriend: zB = !1,
        status: QB,
        showLocation: uB = void 0 === QB,
        vp: pB,
        onSendFriendRequest: rB,
        actions: sB,
        zIndex: JB
      } = BB;
      const {
        t: mB
      } = (0, nB.D)();
      let yB = QB;
      null !== pB && void 0 !== pB && pB.on && (yB = (0, aB.jsxs)(aB.Fragment, {
        children: [null !== QB && void 0 !== QB ? QB : (0, aB.jsx)(NB.c, {
          socialPreview: jB
        }), (0, aB.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", mB("worldSocial:canJoin")]
        })]
      }));
      const kB = {
        playerSocialPreview: jB,
        isFriend: zB,
        hideFriendBadge: !0,
        onFriendRemoved: zB ? BB => {
          dB.d.removeFriendFromState(BB)
        } : void 0,
        status: yB,
        showLocation: uB,
        onSendFriendRequest: rB,
        zIndex: JB
      };
      return pB ? (0, aB.jsx)(UB.d, {
        ...kB,
        vp: pB,
        children: sB
      }) : (0, aB.jsx)(IB.f, {
        ...kB,
        opensProfileCard: !1,
        children: sB || void 0
      })
    }

    function sB(BB) {
      let {
        row: jB,
        vp: zB,
        canInvite: QB,
        invited: dB,
        onInvite: IB,
        zIndex: NB
      } = BB;
      const {
        t: UB
      } = (0, nB.D)(), pB = "online" === jB.place ? uB.f : uB.h;
      return (0, aB.jsx)(rB, {
        player: jB.friend,
        isFriend: !0,
        status: "here" === jB.place ? UB("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        vp: zB,
        zIndex: NB,
        actions: QB && (0, aB.jsx)(pB, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: dB,
          onClick: IB,
          ariaLabel: `${UB("worldSocial:invite")} ${jB.friend.name}`,
          children: UB(dB ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36783: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      c: () => IB,
      g: () => UB
    });
    var QB = zB(62),
      nB = zB(4696),
      dB = zB(1901);

    function IB(BB) {
      const jB = {
        lobbyName: BB,
        answer: null,
        response: nB.b.getSocialSettings(BB)
      };
      return jB.response.then((BB => {
        jB.answer = BB
      })), jB
    }
    const NB = new Map;

    function uB(BB) {
      NB.set(BB.lobbyName, BB)
    }

    function UB(BB) {
      const [jB] = (0, QB.useState)((() => function(BB) {
        var jB;
        const zB = null !== (jB = NB.get(BB)) && void 0 !== jB ? jB : null;
        return null !== zB && void 0 !== zB && zB.answer && "error" in zB.answer ? null : zB
      }(BB))), [zB, IB] = (0, QB.useState)((() => null !== jB && void 0 !== jB && jB.answer && "settings" in jB.answer ? jB.answer.settings : null)), [uB, UB] = (0, QB.useState)(!0), [aB, pB] = (0, QB.useState)(null !== zB), rB = (0, QB.useRef)(zB);
      rB.current = zB;
      const sB = (0, QB.useRef)(0),
        JB = (0, QB.useRef)(0),
        mB = (0, QB.useRef)(!1),
        yB = (0, QB.useRef)(!0),
        kB = (0, QB.useCallback)((async jB => {
          const zB = ++sB.current,
            QB = await (null !== jB && void 0 !== jB ? jB : nB.b.getSocialSettings(BB));
          yB.current && zB === sB.current && (pB(!0), UB(!1), "error" in QB || IB(QB.settings))
        }), [BB]),
        GB = (0, QB.useCallback)((() => {
          UB(!0), kB()
        }), [kB]),
        LB = (0, QB.useCallback)((() => {
          JB.current > 0 ? mB.current = !0 : kB()
        }), [kB]);
      (0, QB.useEffect)((() => (yB.current = !0, NB.delete(BB), UB(!0), kB(null === jB || void 0 === jB ? void 0 : jB.response), () => {
        yB.current = !1
      })), [kB, BB, jB]);
      const gB = BB => {
        sB.current++, UB(!1), rB.current = BB, IB(BB)
      };
      return {
        settings: zB,
        loading: uB,
        answered: aB,
        retry: GB,
        refresh: LB,
        change: async function(jB, zB) {
          let {
            quiet: QB = !1,
            onAnswer: IB
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const NB = rB.current;
          if (null === NB) return !1;
          gB(zB(NB)), JB.current > 0 && (mB.current = !0), JB.current++;
          const uB = await nB.b.setSocialSettings(BB, jB);
          JB.current--;
          const UB = !("error" in uB);
          if (!yB.current) return UB;
          if (null === IB || void 0 === IB || IB(uB), QB);
          else if ("error" in uB) dB.f.showMessage({
            translationKey: uB.error
          });
          else
            for (const BB of uB.notFound) dB.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: BB
              }
            });
          if (JB.current > 0) return UB;
          const aB = mB.current;
          return mB.current = !1, !aB && "settings" in uB ? gB(uB.settings) : (aB || gB(NB), kB()), UB
        }
      }
    }
  },
  36820: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB
    });
    var QB = zB(174);
    const nB = new Map;

    function dB(BB, jB) {
      var zB;
      const QB = null !== (zB = nB.get(BB)) && void 0 !== zB ? zB : new Map;
      QB.set(jB, Date.now()), nB.set(BB, QB)
    }

    function IB(BB) {
      const jB = nB.get(BB);
      if (!jB) return [];
      const zB = Date.now();
      for (const [nB, dB] of jB) zB - dB >= QB.n && jB.delete(nB);
      return [...jB.keys()]
    }
  },
  36790: (BB, jB, zB) => {
    function QB(BB, jB) {
      const zB = jB.toLowerCase();
      for (const QB of BB)
        if (QB.toLowerCase() === zB) return !0;
      return !1
    }

    function nB(BB, jB, zB) {
      const nB = [],
        dB = [],
        IB = [];
      for (const NB of BB) !NB.isError && NB.name && ("inGame" === NB.location.status && NB.location.inLobbyName === jB || QB(zB, NB.name) ? dB.push({
        friend: NB,
        place: "here"
      }) : "offline" === NB.location.status ? IB.push({
        friend: NB,
        place: "offline"
      }) : nB.push({
        friend: NB,
        place: "online"
      }));
      return [...nB, ...dB, ...IB]
    }

    function dB(BB, jB, zB) {
      const nB = [],
        dB = BB.flatMap((BB => "here" === BB.place ? [BB.friend.name] : []));
      for (const IB of [...dB, ...jB]) QB(nB, IB) || QB(zB, IB) || nB.push(IB);
      return nB
    }

    function IB(BB, jB) {
      return null === BB || void 0 === BB || !BB.canManage || QB(BB.whitelist, jB) ? "none" : "whitelist" === BB.visibility ? "required" : "quiet"
    }

    function NB(BB) {
      if (null === BB) return !0;
      const {
        visibility: jB
      } = BB;
      return "public" === jB || "unlisted" === jB || "whitelist" === jB && BB.canManage
    }

    function uB(BB, jB, zB) {
      if (zB) {
        const zB = jB.filter((jB => !QB(BB.whitelist, jB)));
        return {
          ...BB,
          whitelist: [...BB.whitelist, ...zB]
        }
      }
      return {
        ...BB,
        whitelist: BB.whitelist.filter((BB => !QB(jB, BB)))
      }
    }

    function UB(BB, jB) {
      const zB = [];
      for (let QB = 0; QB < BB.length; QB += jB) zB.push(BB.slice(QB, QB + jB));
      return zB
    }
    zB.d(jB, {
      c: () => NB,
      g: () => dB,
      k: () => nB,
      l: () => QB,
      n: () => UB,
      p: () => IB,
      r: () => uB
    })
  },
  8740: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => dB
    });
    var QB = zB(2046);
    const nB = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
      dB = BB => "string" === typeof BB.icon && "" !== BB.icon && "string" === typeof BB.keycode && nB.test(BB.keycode),
      IB = BB => "Space" === BB ? "_" : QB.e[BB]
  },
  8785: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(28);

    function nB() {
      return !QB.c.get("isTouchScreen") && null !== document.pointerLockElement
    }
  },
  8792: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      c: () => NB,
      d: () => UB,
      f: () => uB,
      i: () => IB,
      l: () => nB,
      n: () => QB,
      o: () => JB,
      s: () => pB,
      t: () => aB,
      w: () => rB,
      x: () => sB
    });
    const QB = 14,
      nB = 6,
      dB = (QB + nB) / 2,
      IB = 200,
      NB = IB / 2,
      uB = IB / 2 - 1,
      UB = nB / QB * (IB / 2),
      aB = (BB, jB) => -Math.PI / 2 + 2 * BB * Math.PI / jB,
      pB = (BB, jB, zB) => {
        const QB = 2 * Math.PI / zB;
        return (Math.round((Math.atan2(jB, BB) + Math.PI / 2) / QB) % zB + zB) % zB
      },
      rB = .5,
      sB = (BB, jB, zB) => Math.hypot(BB.x, BB.y) < rB ? zB : pB(BB.x, BB.y, jB),
      JB = (BB, jB, zB, QB, nB) => {
        const dB = Math.PI / jB,
          IB = aB(BB, jB),
          NB = IB - dB,
          uB = IB + dB,
          UB = (BB, jB) => `${zB+BB*Math.cos(jB)} ${zB+BB*Math.sin(jB)}`;
        return [`M ${UB(QB,NB)}`, `L ${UB(nB,NB)}`, `A ${nB} ${nB} 0 0 1 ${UB(nB,uB)}`, `L ${UB(QB,uB)}`, `A ${QB} ${QB} 0 0 0 ${UB(QB,NB)}`, "Z"].join(" ")
      }
  },
  36971: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB
    });
    var QB = zB(28),
      nB = zB(1343);

    function dB() {
      const {
        clientEscMenuOptions: BB
      } = (0, QB.m)(["clientEscMenuOptions"]);
      return (0, nB.u)() && BB.showChat
    }
  },
  8830: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(62),
      nB = zB(8769),
      dB = zB(2516);

    function IB() {
      const BB = (0, dB.i)("shopInfo"),
        [, jB] = (0, QB.useReducer)((BB => BB + 1), 0);
      return (0, dB.h)("shopInfo", jB), !(0, nB.b)(BB)
    }
  },
  37091: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(62),
      nB = zB(2516);

    function dB() {
      const BB = (0, nB.i)("lobbyLeaderboardInfo");
      return (0, QB.useMemo)((() => function(BB) {
        if (null === BB) return null;
        const jB = Object.entries(BB),
          zB = jB.filter((BB => {
            let [, jB] = BB;
            return void 0 !== jB
          }));
        if (zB.length === jB.length) return BB;
        const QB = Object.fromEntries(zB),
          nB = Object.keys(BB).filter((BB => !Object.hasOwn(QB, BB)));
        return console.warn(`lobbyLeaderboardInfo left out its undefined columns: ${nB.join(", ")}`), QB
      }(BB)), [BB])
    }
  },
  36911: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(2863),
      nB = zB(3798),
      dB = zB(3015);
    const IB = ["Unable to create vertex buffer"];
    let NB = {};

    function uB(BB, jB) {
      const zB = new Date;
      console.error(`${zB.getUTCHours()}:${zB.getUTCMinutes()}:${zB.getUTCSeconds()}`, BB, jB, null === jB || void 0 === jB ? void 0 : jB.stack), IB.includes(null === jB || void 0 === jB ? void 0 : jB.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, QB.c)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${jB.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, dB.logError)("warning", `${BB}\n ${jB} "\n" ${null===jB||void 0===jB?void 0:jB.stack}`);
      const nB = BB + jB + (null === jB || void 0 === jB ? void 0 : jB.stack);
      nB in NB || ((0, dB.logError)("error", `${BB}\n ${jB} "\n" ${null===jB||void 0===jB?void 0:jB.stack}`), NB[nB] = !0)
    }(0, nB.onGameReset)((() => {
      NB = {}
    }))
  },
  4932: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => VB,
      g: () => YB
    });
    var QB = zB(4939),
      nB = zB(363);
    const dB = 120,
      IB = 260,
      NB = 1.15,
      uB = 1.2,
      UB = 2,
      aB = 1.08,
      pB = .8,
      rB = .95,
      sB = 8,
      JB = "[\"')\\]\u300d\u300f\uff09]*",
      mB = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${JB}$`),
      yB = new RegExp(`[?\uff1f]${JB}$`),
      kB = new RegExp(`[!\uff01]${JB}$`),
      GB = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      LB = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      gB = new RegExp(`[${LB}]`),
      tB = new RegExp(`[${LB}]|[^${LB}]+`, "g"),
      SB = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function MB(BB) {
      let jB = 2166136261;
      for (let zB = 0; zB < BB.length; zB++) jB ^= BB.charCodeAt(zB), jB = Math.imul(jB, 16777619);
      return (jB >>> 0) / 4294967295 * 2 - 1
    }

    function EB(BB) {
      var jB;
      if (gB.test(BB)) return 1;
      const zB = BB.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        QB = zB.replace(/[^0-9]/g, "");
      if (QB.length > 0 && !/\p{L}/u.test(zB)) return Math.min(QB.length, 4);
      const nB = null !== (jB = zB.match(SB)) && void 0 !== jB ? jB : [];
      if (0 === nB.length) {
        var dB, IB;
        const BB = null !== (dB = null === (IB = zB.match(/\p{L}/gu)) || void 0 === IB ? void 0 : IB.length) && void 0 !== dB ? dB : 0;
        return 0 === BB ? 0 : Math.min(Math.max(1, Math.round(BB / 2.5)), sB)
      }
      const NB = zB.replace(/[^\p{L}]/gu, ""),
        uB = nB.length > 1 && "e" === nB.at(-1) && NB.endsWith("e") && !NB.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(BB.replace(/[^\p{L}]/gu, ""));
      return Math.min(nB.length - (uB ? 1 : 0), sB)
    }

    function iB(BB) {
      return BB.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function qB(BB) {
      const jB = BB.replace(/[^\p{L}]/gu, "");
      return jB.length >= 2 && jB === jB.toUpperCase() && jB !== jB.toLowerCase()
    }

    function fB(BB, jB) {
      var zB;
      const sB = jB && (0, QB.i)(jB),
        JB = null !== (zB = null === sB || void 0 === sB ? void 0 : sB.syllableMs) && void 0 !== zB ? zB : QB.d,
        LB = function(BB) {
          const jB = [];
          for (const QB of (0, nB.Rb)(BB))
            if ("string" === typeof QB)
              for (const BB of QB.split(/(\s+)/)) {
                if ("" === BB) continue;
                if (/^\s+$/.test(BB)) {
                  jB.push({
                    kind: "space",
                    text: BB
                  });
                  continue
                }
                if (!gB.test(BB)) {
                  jB.push({
                    kind: "word",
                    text: BB,
                    delayMs: 0
                  });
                  continue
                }
                let QB = !0;
                for (const nB of null !== (zB = BB.match(tB)) && void 0 !== zB ? zB : []) {
                  var zB;
                  const BB = jB.at(-1);
                  QB || "word" !== (null === BB || void 0 === BB ? void 0 : BB.kind) || gB.test(nB) || /[\p{L}\p{N}]/u.test(nB) ? (QB || jB.push({
                    kind: "space",
                    text: "\u200b"
                  }), jB.push({
                    kind: "word",
                    text: nB,
                    delayMs: 0
                  }), QB = !1) : BB.text += nB
                }
              } else jB.push({
                kind: "icon",
                text: QB.icon,
                delayMs: 0
              });
          return jB
        }(BB),
        SB = [];
      let fB = [];
      for (const QB of LB) "space" !== QB.kind && (fB.push(QB), mB.test(QB.text) && (SB.push(fB), fB = []));
      SB.push(fB);
      const oB = [];
      let HB = 0;
      for (const QB of SB) {
        var DB, FB;
        const BB = null !== (DB = null === (FB = QB.at(-1)) || void 0 === FB ? void 0 : FB.text) && void 0 !== DB ? DB : "",
          jB = yB.test(BB),
          zB = kB.test(BB),
          nB = QB.map((BB => "word" === BB.kind ? EB(BB.text) : 1)),
          LB = nB.findLastIndex((BB => BB > 0));
        for (const [yB, kB] of QB.entries()) {
          const BB = "word" === kB.kind,
            QB = nB[yB];
          kB.delayMs = HB;
          for (let nB = 0; sB && nB < QB; nB++) {
            const {
              intonation: dB
            } = sB;
            let IB = LB > 0 ? -dB.declineSemitones * (yB / LB) : 0;
            IB += MB(`${iB(kB.text)}|${nB}`) * dB.variationSemitones;
            const mB = Math.min(1, dB.variationSemitones);
            let GB = sB.glideSemitones,
              gB = 1;
            zB && (IB += dB.exclaimLiftSemitones, gB *= NB), jB && yB === LB && (IB += dB.questionRiseSemitones * (QB > 1 ? .5 + .5 * nB / (QB - 1) : 1), nB === QB - 1 && (GB = Math.abs(GB) + dB.questionRiseSemitones / 2)), BB && qB(kB.text) && (IB += UB * mB, gB *= uB), QB > 1 && 0 === nB && (IB += pB * mB, gB *= aB), oB.push({
              atMs: HB + nB * JB,
              semitones: IB,
              glideSemitones: GB,
              durationMs: nB < QB - 1 ? Math.min(sB.durationMs, JB * rB) : sB.durationMs,
              level: gB
            })
          }
          HB += QB * JB + (mB.test(kB.text) ? IB : GB.test(kB.text) ? dB : 0)
        }
      }
      return {
        pieces: LB.map((BB => "space" === BB.kind ? BB : "icon" === BB.kind ? {
          kind: "icon",
          icon: BB.text,
          delayMs: BB.delayMs
        } : {
          kind: "word",
          text: BB.text,
          delayMs: BB.delayMs
        })),
        blips: oB
      }
    }
    var oB = zB(1240),
      HB = zB(1284),
      DB = zB(1991);

    function FB(BB) {
      if ("string" === typeof BB) return BB;
      const jB = HB.c.get().getCurrentLanguageCode();
      return (0, oB.t)(jB, BB.translationKey, (0, oB.p)(BB.params, DB.b.shown))
    }

    function YB(BB) {
      const jB = void 0 === BB.voice ? null : (0, QB.k)(BB.voice),
        zB = jB && (0, QB.i)(jB);
      return {
        plan: fB(FB(BB.line), zB),
        synth: zB
      }
    }

    function VB(BB) {
      const jB = [];
      let zB = [];
      for (const [nB, dB] of BB.entries()) {
        var QB;
        "space" === dB.kind && (" " !== dB.text || "icon" !== (null === (QB = BB[nB + 1]) || void 0 === QB ? void 0 : QB.kind)) ? (zB.length > 0 && jB.push(zB), jB.push([dB]), zB = []) : zB.push(dB)
      }
      return zB.length > 0 && jB.push(zB), jB
    }
  },
  36757: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    const QB = [{
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

    function nB(BB, jB, zB) {
      const nB = Math.abs(BB - jB),
        dB = Date.now() - zB;
      for (const IB of QB)
        if (BB < IB.maxDist) return nB >= IB.hardUpdateDist || dB > IB.timeBetweenSoftChecks && nB >= IB.softUpdateDist;
      return !1
    }
  },
  37062: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => pB,
      f: () => rB
    });
    var QB = zB(658),
      nB = zB(41),
      dB = zB(37012);
    const IB = "replayFileKeptForReload",
      NB = "replayFileKeptForReloadAt",
      uB = "replayFileKeptForReloadTab",
      UB = 3e5,
      aB = 5e3;
    async function pB(BB, jB) {
      const zB = Date.now(),
        dB = {
          at: zB,
          bytes: BB,
          source: jB
        },
        UB = await Promise.race([(async () => await nB.g.setItem(NB, zB) && nB.g.setItem(IB, dB))(), (0, QB.M)(aB).then((() => !1))]);
      UB || console.warn("The replay file couldn't be kept across the reload into a newer build: the reloaded page asks for it again");
      const pB = {
        at: zB,
        Cs: UB
      };
      nB.k.setItem(uB, pB)
    }
    async function rB() {
      var BB;
      const jB = nB.k.getItem(uB);
      null !== jB && nB.k.removeItem(uB);
      const zB = Date.now(),
        QB = await nB.g.getItem(NB),
        aB = null !== jB && zB - jB.at <= UB,
        pB = null !== jB && QB === jB.at;
      let rB = null;
      if (null !== QB && (pB || ("number" !== typeof QB || zB - QB > UB)) && (rB = aB && pB && jB.Cs ? await nB.g.getItem(IB) : null, await Promise.all([nB.g.removeItem(NB), nB.g.removeItem(IB)])), !aB) return null;
      if ((null === (BB = rB) || void 0 === BB ? void 0 : BB.at) !== jB.at) throw new Error(dB.d.replayNotKept.text);
      return {
        bytes: rB.bytes,
        source: rB.source
      }
    }
  },
  37059: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB,
      f: () => dB,
      j: () => nB
    });
    const QB = [9];

    function nB(BB) {
      return QB.includes(BB)
    }

    function dB(BB) {
      return null !== BB && BB >= 3 && BB < QB[0]
    }
  },
  37020: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      f: () => dB,
      i: () => nB
    });
    const QB = [.25, .5, 1, 2, 4, 8, 16];

    function nB(BB, jB) {
      const zB = QB;
      let nB = zB.indexOf(BB);
      return -1 === nB && (nB = zB.findIndex((jB => jB >= BB)), -1 === nB && (nB = zB.length - 1)), "up" === jB ? zB[Math.min(nB + 1, zB.length - 1)] : zB[Math.max(nB - 1, 0)]
    }

    function dB(BB) {
      return BB <= QB[0]
    }

    function IB(BB) {
      return BB >= QB[QB.length - 1]
    }
  },
  37073: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB,
      f: () => nB
    });
    const QB = "data-replay-ui-active",
      nB = [{
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
  37082: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => UB,
      g: () => pB,
      k: () => aB
    });
    var QB = zB(28),
      nB = zB(31),
      dB = zB(37073);

    function IB() {
      const BB = {};
      for (const {
          group: jB
        }
        of dB.f) BB[jB] = !0;
      return BB
    }
    let NB = IB();

    function uB() {
      nB.n.Ly("replayViewer|uiVisibilityChanged")
    }

    function UB() {
      return NB
    }

    function aB(BB, jB) {
      NB[BB] !== jB && (NB = {
        ...NB,
        [BB]: jB
      }, "nametag" === BB && QB.c.set({
        areNametagsHidden: !jB
      }), uB())
    }

    function pB() {
      NB = IB(), QB.c.set({
        areNametagsHidden: !1
      }), uB()
    }
  },
  8733: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => IB,
      j: () => NB,
      l: () => nB
    });
    var QB = zB(8740);
    const nB = BB => {
        const jB = [];
        BB.holdingGun && jB.push({
          kind: "reload"
        }), BB.touchscreenActionButton && jB.push({
          kind: "touchButton",
          label: BB.touchscreenActionButton
        });
        for (const dB of null !== (zB = null === (nB = BB.customButtons) || void 0 === nB ? void 0 : nB.filter(QB.f)) && void 0 !== zB ? zB : []) {
          var zB, nB;
          jB.push({
            kind: "customButton",
            id: dB.id,
            icon: dB.icon,
            description: dB.description
          })
        }
        return jB
      },
      dB = BB => BB.length >= 2,
      IB = BB => "specialAction" !== BB.kind,
      NB = (BB, jB) => {
        if (null === BB || null === jB) return BB === jB;
        if (BB.kind !== jB.kind) return !1;
        switch (BB.kind) {
          case "reload":
            return !0;
          case "specialAction":
            return BB.action === jB.action;
          case "customButton":
            return BB.id === jB.id && BB.icon === jB.icon;
          case "touchButton":
            return BB.label === jB.label
        }
      }
  },
  8730: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => aB,
      c: () => sB,
      d: () => pB,
      h: () => JB
    });
    var QB = zB(62),
      nB = zB(31),
      dB = zB(1471),
      IB = zB(8733),
      NB = zB(8747);
    let uB = null;
    const UB = () => uB,
      aB = BB => {
        (0, IB.j)(uB, BB) || (uB = BB, nB.n.Ly(NB.g, uB))
      },
      pB = () => {
        const [BB, jB] = (0, QB.useState)(UB);
        return (0, dB.f)(NB.g, jB), BB
      };
    let rB = !1;
    const sB = BB => {
        BB !== rB && (rB = BB, nB.n.Ly(NB.k, BB))
      },
      JB = () => {
        const [BB, jB] = (0, QB.useState)(rB);
        return (0, dB.f)(NB.k, jB), BB
      }
  },
  8747: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      g: () => QB,
      k: () => nB,
      m: () => NB,
      n: () => uB,
      p: () => UB,
      t: () => IB
    });
    const QB = "controllerActionHintChanged",
      nB = "controllerActionWheelHintChanged",
      dB = "controllerOpenChat",
      IB = "controllerSneakToggledChanged",
      NB = "controllerAttackLatchedChanged",
      uB = "controllerDropStackHoldChanged",
      UB = "controllerPickBlockHintChanged"
  },
  8691: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => dB,
      h: () => uB,
      l: () => NB
    });
    var QB = zB(1471),
      nB = zB(1442);
    const dB = "controllerInventoryCursorChanged",
      IB = {
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
      NB = () => {
        var BB, jB;
        return (0, QB.h)(dB, null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.getInventoryCursorState()) && void 0 !== BB ? BB : IB)
      },
      uB = () => {
        var BB, jB;
        return null !== (BB = null === (jB = (0, nB.d)()) || void 0 === jB ? void 0 : jB.isPadSteppingSlots()) && void 0 !== BB && BB
      }
  },
  8685: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => rB,
      f: () => NB,
      h: () => uB,
      l: () => IB,
      m: () => dB,
      o: () => aB,
      r: () => pB
    });
    let QB = null;
    const nB = new Set,
      dB = BB => (QB = BB, () => {
        if (QB === BB) {
          QB = null;
          for (const BB of nB) BB()
        }
      }),
      IB = BB => (nB.add(BB), () => {
        nB.delete(BB)
      }),
      NB = () => QB,
      uB = () => null !== QB;
    let UB = null;
    const aB = BB => {
        UB = BB
      },
      pB = () => {
        const BB = UB;
        return UB = null, BB
      },
      rB = (BB, jB) => {
        var zB, QB;
        return null !== (zB = null !== (QB = BB.find((BB => BB.element === jB))) && void 0 !== QB ? QB : BB.find((BB => BB.element.contains(jB)))) && void 0 !== zB ? zB : null
      }
  },
  8698: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      f: () => IB
    });
    var QB = zB(62);
    const nB = new WeakMap,
      dB = BB => {
        var jB, zB;
        return null !== (jB = null === (zB = nB.get(BB)) || void 0 === zB ? void 0 : zB.current) && void 0 !== jB ? jB : null
      },
      IB = (BB, jB) => {
        const zB = (0, QB.useRef)(jB);
        zB.current = jB;
        const dB = (0, QB.useRef)(null);
        (0, QB.useEffect)((() => {
          const jB = BB.current,
            QB = dB.current;
          jB !== QB && (QB && nB.get(QB) === zB && nB.delete(QB), dB.current = jB, jB && nB.set(jB, zB))
        })), (0, QB.useEffect)((() => () => {
          const BB = dB.current;
          BB && nB.get(BB) === zB && nB.delete(BB), dB.current = null
        }), [])
      }
  },
  8814: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      e: () => UB,
      i: () => pB,
      m: () => aB,
      n: () => uB,
      r: () => sB
    });
    var QB = zB(31),
      nB = zB(2065),
      dB = zB(1442),
      IB = zB(1418);
    const NB = BB => {
        var jB, zB;
        return (0, IB.l)() && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getGlyphForNoaAction(BB)) && void 0 !== jB ? jB : null
      },
      uB = "controllerGlyph:",
      UB = BB => {
        var jB, zB;
        return null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconName(BB)) && void 0 !== jB ? jB : `${uB}xbox/${BB}`
      },
      aB = BB => BB.startsWith(uB),
      pB = BB => {
        var jB, zB;
        return aB(BB) && null !== (jB = null === (zB = (0, dB.d)()) || void 0 === zB ? void 0 : zB.getPadGlyphIconUrl(BB)) && void 0 !== jB ? jB : null
      },
      rB = ["customBindingsChanged", "appManagerUpdated|isTouchScreen", IB.b, nB.e, nB.d],
      sB = BB => {
        const jB = rB.map((jB => QB.n.subscribe(jB, BB)));
        return () => {
          for (const BB of jB) QB.n.unsubscribe(BB)
        }
      }
  },
  8722: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB,
      f: () => nB
    });
    let QB = null;
    const nB = function(BB) {
        const jB = {
          cycle: BB,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return QB = jB, () => {
          QB === jB && (QB = null)
        }
      },
      dB = () => {
        var BB;
        return null !== (BB = QB) && void 0 !== BB && BB.canCycle() ? QB.cycle : null
      }
  },
  8798: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      c: () => IB,
      e: () => dB,
      f: () => QB,
      g: () => NB,
      j: () => UB,
      k: () => aB
    });
    const QB = "controllerActionWheelOpen",
      nB = "controllerActionWheelAim",
      dB = "controllerActionWheelCommit",
      IB = "controllerActionWheelClose",
      NB = "controllerActionWheelPick";
    let uB = !1;
    const UB = () => uB,
      aB = BB => {
        uB = BB
      }
  },
  8795: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      f: () => nB
    });
    let QB = 0;
    const nB = () => {
        QB++
      },
      dB = () => QB
  },
  8718: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      e: () => nB,
      f: () => IB,
      h: () => dB,
      i: () => QB,
      k: () => UB
    });
    const QB = "controllerQuickChatWheelOpen",
      nB = "controllerQuickChatWheelAim",
      dB = "controllerQuickChatWheelCommit",
      IB = "controllerQuickChatWheelClose";
    let NB = !1;
    const uB = () => NB,
      UB = BB => {
        NB = BB
      }
  },
  36907: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB,
      d: () => dB
    });
    const QB = new Map;

    function nB(BB) {
      var jB;
      return null === BB ? null : null !== (jB = QB.get(BB)) && void 0 !== jB ? jB : null
    }

    function dB(BB, jB) {
      return QB.set(BB, jB), () => {
        QB.get(BB) === jB && QB.delete(BB)
      }
    }
  },
  37037: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => Oj,
      f: () => Rj
    });
    var QB = zB(4334),
      nB = zB(658),
      dB = zB(3836),
      IB = zB(3855),
      NB = zB.n(IB);
    const uB = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      UB = "EV_boolean",
      aB = "EV_double",
      pB = "EV_string",
      rB = "EV_doubleArr",
      sB = "EV_armour",
      JB = "EV_other",
      mB = "EV_cosmetics",
      yB = "OEV_boolean",
      kB = "OEV_int",
      GB = "OEV_double",
      LB = "OEV_string",
      gB = "OEV_stringArr",
      tB = "OEV_meshScaling",
      SB = "IV_int",
      MB = "IV_string",
      EB = "IV_doubleArr",
      iB = "IV_double",
      qB = "HV_int",
      fB = "HV_slots",
      oB = "EnvV_string",
      HB = "EnvV_double",
      DB = "EnvV_doubleArr",
      FB = "EnvV_boolean",
      YB = {
        type: pB,
        name: pB,
        position: rB,
        rotation: rB,
        scale: aB,
        speed: aB,
        jumping: UB,
        crouching: UB,
        cameraPitch: aB,
        armSwinging: UB,
        heldItemName: pB,
        heldItemEnchantmentTier: pB,
        pose: pB,
        followingEId: pB,
        ridingVehicleEId: pB,
        leaderboardTop: pB,
        meshKind: pB,
        meshOpts: pB,
        followingOffset: rB,
        shouldMatchFollowingEntityRotation: UB,
        meshOffset: rB,
        baseRenderHeading: aB,
        armour: sB,
        RY: JB,
        playerCustomisations: mB,
        variation: pB,
        metaInfo: pB,
        soundName: pB,
        volume: aB,
        refDistance: aB,
        maxHearDist: aB,
        rate: aB,
        aiState: pB
      },
      VB = {
        opacity: GB,
        zIndex: kB,
        overlayColour: LB,
        canSee: yB,
        meshScaling: tB,
        nameTagInfo: LB,
        multilineTextBox: LB,
        hasPriorityNametag: yB,
        ranks: gB,
        nameColour: LB,
        _isAlive: yB,
        _invisibleEffect: yB,
        _invincible: yB,
        killfeedColour: LB,
        hideNameSeed: kB,
        _glowingEffect: yB,
        lockHeadToBody: yB
      },
      hB = {
        itemName: MB,
        amount: SB,
        position: EB,
        size: iB,
        attributes: MB
      },
      XB = {
        skyBox: oB,
        fogColourOverride: oB,
        fogChunkDistanceOverride: HB,
        cameraTint: DB,
        fogOnSkybox: FB,
        fogBlockDistanceOverride: HB
      },
      ZB = {
        type: "array",
        items: "double"
      },
      AB = {
        type: "array",
        items: "int"
      },
      TB = {
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
      PB = {
        type: "map",
        values: ZB
      };

    function WB(BB, jB) {
      return {
        type: "record",
        name: BB,
        fields: [{
          name: "x",
          type: jB
        }]
      }
    }
    const eB = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", WB(yB, "boolean"), WB(kB, "int"), WB(GB, "double"), WB(LB, "string"), WB(gB, {
              type: "array",
              items: "string"
            }), WB(tB, PB)]
          }]
        }
      },
      lB = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", WB(UB, "boolean"), WB(aB, "double"), WB(pB, "string"), WB(rB, ZB), WB(sB, TB), WB(JB, eB), WB(mB, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      wB = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", WB(SB, "int"), WB(MB, "string"), WB(iB, "double"), WB(EB, ZB)]
          }]
        }
      },
      xB = {
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
      KB = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", WB(qB, "int"), WB(fB, xB)]
        }]
      },
      CB = {
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
      cB = {
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
      bB = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", WB(oB, "string"), WB(HB, "double"), WB(DB, ZB), WB(FB, "boolean")]
          }]
        }
      },
      vB = [{
        name: "eD",
        type: "record",
        fields: [{
          name: "pos",
          type: AB
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
          type: AB
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
      RB = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "BB",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "QB",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "nB",
              type: ["null", "string", ZB],
              default: null
            }, {
              name: "dB",
              type: ["null", "double"],
              default: null
            }, {
              name: "IB",
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
          name: "PQ",
          type: "string"
        }, {
          name: "WQ",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "eQ",
          type: "double"
        }, {
          name: "lQ",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Gz",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: ZB
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "VB",
          type: "string"
        }, {
          name: "qj",
          type: ["null", "double"],
          default: null
        }, {
          name: "fj",
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
          name: "xd",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Kd",
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
      OB = [{
        name: "position",
        type: ZB
      }, {
        name: "direction",
        type: ZB
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

    function Bj() {
      const BB = [{
        name: "entities",
        type: {
          type: "map",
          values: lB
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: wB
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: OB
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
              items: KB
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", CB],
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
              name: "VB",
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
        type: cB
      }, {
        name: "environment",
        type: bB
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: vB
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: RB
        }
      }), BB
    }
    const jj = {
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
                name: "vp",
                type: "int"
              }, {
                name: "position",
                type: ZB
              }, {
                name: "direction",
                type: ZB
              }, {
                name: "easing",
                type: ZB
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
    let zj;

    function Qj(BB) {
      if (9 === BB) return zj ??= (jB = [{
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
            name: "KF",
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
              type: AB
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
            fields: Bj()
          }
        }
      }, jj], NB().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: jB
      }, {
        Gs: Object.create(null)
      })), zj;
      var jB
    }
    var nj = zB(2929);
    let dj, Ij, Nj, uj;
    const Uj = 12;
    var aj, pj;
    const rj = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, 2, 3, null, 16, "B", 112, 4, 113, 114, !0, 15, 109, 100, 10, 5, 11, 9, 115, !1];

    function sj(BB) {
      return typeof aj[BB] === rj[5] ? aj[BB] = function(BB) {
        var jB, zB, QB, nB, dB, IB, NB;
        for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
          var uB = 'NzsEv*ZaOM0oIg:D+XK$ht.#8]C{^wW?&`d<Jf2bSynm6[=GuQ!7B%cAY|jPUV)LRi1l,~}T_e9/H>"4kp5q3;F(xr@'.indexOf(jB[NB]);
          if (uB !== -rj[1])
            if (IB < rj[0]) IB = uB;
            else {
              yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
              do {
                yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
              } while (dB > rj[9]);
              IB = -rj[1]
            }
        }
        return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
      }(pj[BB]) : aj[BB]
    }

    function Jj(BB) {
      return typeof Qz !== rj[5] && Qz ? (new Qz).decode(new nz(BB)) : typeof dz !== rj[5] && dz ? dz.from(BB).toString("utf-8") : uz(BB)
    }

    function mj() {}

    function yj() {
      yj = function() {}
    }
    var kj, Gj;
    yj(aj = {}, pj = ['F}var"NFyXGHJv', "E#y/&P0J&UagdVr<!CaM;~V#Yi9}y+GSr7ZB^G3=sUE4y+t{.9%0", "t7%A9J:O7Rc:@pIbNK6w~uuspKo5zuIh/f3>A3/|*${0+DdKkhh9[Vhk[%B", 'H75&"JVwyi_>>Ukd#is*@e$$uDA}!:UJrYDHBj}BlMbX"]|d~cH!(`N', "zm&eKpL<W1iQiUM]tDow;[~7!L+X*_92+ZH*=,=s", "<mH%VUbajX)zy+t{EtcHYUMaTgOE=g~8M=uM", ')eW^G}f|"OF9Qgo]1Mz/aJrw~csj!Vb?<7s>1dpz%jJ4=2!^n7|cI', "r%,9Vj}8Z0feCCLw0=Ge)3Is", '$CN"R_~z', "fXHCbeR8z15lSGS2lc;Bl4dBp||}k802g,<_`kN", "aQR7[k/a)O=0bCO", "^dG^:|4gAh6~cjz?{c3*G}xIB$vGp_1fC,U0bc[ajP)1NEg2zcLM3Tz(oP9lz", "_,(Q}p4aZ0s+vTr#a#`WCHHZE", 'NwycJ<~gzcAo>U5^{cr&%>Wse)C7Zp@.XKO"?cXw_i[8cVO$XIf0', "7hmwvA[Gwtm~P:=SIKOM(GF)`D:AJ{3S(uaZ4J]pkUvG~Ug$R,E", "rXQZXH44zLn)XJa?{h,0*%c=IP@.s*~K>^/&{2pyr:X{vDsm*,F^;;hsP:U", "Pu5>[V|wXcFwYq9CySV?I!j=o:j>#qudti>C$", "Wwv!DH7zM0", "Wi7952;4=Ks`(:M", "|XC7A37w!c^~r]H$:CTHJPea6o=12f}8WDz/W;Gz", "g|THdc7y<$P", "$TkQU>3=[1pKz", '|)WH{"gg4%{{:*PyuZG^."J8Nt%k{{sX!i.^~p+RuI;9BD4bCc!>+', "/PnwQ7N", "Em@&EdTzu%QHpU)Wk760cfyGDtS", '3nw?2kmGH:y:0pebOC?H#"ujN1C{uP%<Qm!_8"lyuLr*o5Z', "bZOc?;@,@:}Q+qCJH)haLb,Kv", "[|}M/~qazIw0xGwwvMSWA>{aOAI_&ubKui1O9HN", "S#VA~UqgO0,LV_HC>?FH+pIBBMhf=Q/bMQAZS/GaK$ZdTCO", "a=s/Gj}Zni.H8+}KB7+{bQhJXMC", "69E_.~,kp|6HqTa]Y7MW5|;wW1b4N", "I9c^.!19JRdH+qbfF[VADp]wYgd_u+Nn{z", "Vfy{TUI=SgJ0SPdf", "&|GvQ}2KKI>U_ES?G7RZ7}kZw1.Hpuzm@Yu72;=S/:cez", 'qe|ZG,M]Pis"qTLw,[gA`SXym)Ae+UlW/N', "<U(^cfCJsU|aQUbKMSU9I9@=Z", "7dfaH~N", "oL/!2Qd8X1kDIq?fFh.^|b^9Z", '5^jOC;agK$"U?s*$yus_U>4a}g', "XLGH5|S8Sjsgg3O$6f=HX~dWxiWXVU7{yuE*FHN", "c,LZMHj,|iGH8vAS+cj7O4;~n:0,n}kbr[H%vuAg$MYks}XSlM=Aub/z", "h&#Q*d.J`U/<rvudcSAe_H=kNU?)cQXbcMRQ@;o%MhHDKf4{S7kZ[Y!s", "O|H%wG4gmYLLe8FyHo,>j%oz&MChzu3SOvzc*U|#X18EMUNW5]aBG}k=E", '6Cz7"uUWL%gj0V`J~Z~075Hd}Rfa!go2Nt?H~_~7D1Ch_T#yH:8ex`E%4I[', "NMaH6VN", "~[IA?e[aQIz{Ibh{fZe70U?</YqYvT%SB7}^FB28Ph${e8h{", "*|;9(TXz", "RP/&32E]xiJauqg{ovFHGjKs", "yC.Bu3uBIiaEJGqd$UDZSG+JsDY}6+KbY)gHg", "xbRMB>/7)ONcuD`WGIc^OHy|pDY&_D189hb^<S.J=OL}Yq,?y,)M", "~hs7j3=Wfj|kS_YnQd`c$P[/KI+W8TbfcuC>]", "&Mq*]H@ID1v7Kp6$F[:`{S8J7RdE=fgbKz", ";PS{(qR8kK,]6PJ8JZAeE4x=pD@puEJ?MvE", '9?SZd"68Oi(w1pJ?dcyW+qv8[OYe6un2=MzcEuz<GIO/djBS', "#i`7J,.sKMm1BD*8", "7uxQBb`/8hoAVJ+hkh;T`cxI1UPo=Qt{XL>HLdN", "|7XWq)FBnPn)~8J?vLU?`Q4aHo>>O3|<re`W4)[zqUpUz", "AT?QZdWW6)7ekG!SlXn/ip|ysD[", "`#>!oq#zejC7X_v?az", "B?DMf;/|0:~D(:D{Y[y&134g0i>9#sHCKCuQL%l7bj9.ms&f?Z<wA7?G,|m", "?f;a)>cBiDAk8u)w?z", "^D)BWGLG1$1Q2](ypim_i3|w1$`8guO", 'L)DZ^T"9VPc?@p^W%[|cx`0JpMt_HDpb|:;a,4`y"KHOpU_?^Ms{<e~ga', "0IzZ[kgG&|w~Fs0", "?Sqwl)_BEU$7gJ(dI,1*JGl<)DdH<:^#@h!&suP;kKsdJ{<J", ",n=vO!Vw@hV1tuH$*UN`T%!WMj3Le8O]kN", '"eX"dcFS*R{8}]=S6m4v>H"Z{)B?6Eo2MwzZ', "fEj&1d>Lv", "h7(M]Sez&MXh)]T?hD3**UkBVKFJsV/CM<E*j_hB7IVQD:8w7[z", 'H:WA6/6IQMGHvTEKGC+cH91K7R/9?sa2hTyc)j(|QM21%UWWThO"tTN', '[7J0DTSk;$(.9QN8NM8Wq2R=BciY"]T]jfs/pqUFKI', "s|)a=L&80)Po^G3S>YH%y/uj/)VYKpVJ+z", '#717oAG$"YU>RPA<[d#`uLCW5cd{?2sJ",>^j=N', "cX.HPd9By)^jG2r+x),*2e.9O0!1}gDhO,3TC2&k=Kc<hG!dKz", "N1Sc7/sKmiuQ)gLWCTw0$pYsOgP", "i?z/OJsJ3M(>|f8n1)O{Ydz%v$cQ7}1XDS+c`QxI!Dn", "=CB0+HXg;cgdSE+dQutv", "`E<wjdJRaAq]Gj$ya|q!JkM~XM.gyu~fU:OM", "s|{_0)sWHi3Kp8sW17#`%bN", "tT=^j%$w;cYkYENfMf*98q58XI,eQ+OCyhF^9JjWri.49CIbjSE", "@%`&/)6s", 'ZC1&"pYB"O"YMub]dc=^_Azg9iahzJy$i,WH0!+J0PxlF~M', "!IDB~_1W/oBKj~J8bu9wrB]$zLPL?:Un:UbMBj_j$$X7dQ/bT?zZ", "hhABP72W[)r=8{@w4epZ]", 'x)BAhH1I&t&hRq22.|QZJP+J+K;*3qiX&,J>fe@9PXP>OUkSA)"?^<&s=Lj', "O=v>,%NW$IOMuE", ")e^9k|CO4KC~<5O", "dI#QTUJKTjyavq~8]#OZ", '"^:afSjs', "VSZBR=tz", "u|7&P>8s", 'XSq&hH98L*x=`+<o.DV0""5F/i$7nQ<o/b_M/.X%TR7[Z!.SQSc?0', "Di;pRuyU!b|rVClkjo_B[[@4&0T<Fxlkra^A**5hjR|9Y.VGKN", "+bxPB:)4E$X!*~j;;bie?zBoy](<QB{?3us<>", "C!jo", "69OW}%Ys", "H&.9Hq47", "Url28WT7", "VF/y2", "k~C2:gU^", "EOvR<`Za", "??XQ5", "#63XKgG,", "kyJB8I_Y", "#y;u@0pH", ";x]DUX?u*>As%},yM&3i__:F`Q^2d+,y`C@O`M;~!E21N#Mx+xqRi", "fA^uF5?p!k)vlN{sat<E]]}84%o;`2{svnxD99|HaF)zh/lmXK", "Vn;uv,Yj#:<3m^4IInObM]vH)=7zGvaMdRlzD", "T34H", "n|Y.S~vH", "(~>u5baH", "T.^dB", "[tQE", "Jt>uc?IH", ":.(R", "WtF0]9ZH", "SeMHopfP", "^LNlV@UY", "PZ&D", ";%+5exoY", "N/6<|hne/jvp~Maa`+Cb66DmnHg?45I", "O(9uX1tjjob", "]asE2,IH", "^LR0|0FH", "OHY~f/<Y"]), yj(zz = function() {
      var BB, jB, zB, QB = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      yj(BB = void 0, jB = []);
      try {
        yj(BB = Object, jB[rj[11]]("".__proto__.constructor.name))
      } catch (nz) {}
      BB: for (zB = rj[0]; zB < QB[rj[4]]; zB++) try {
        var nB;
        for (BB = QB[zB](), nB = rj[0]; nB < jB[rj[4]]; nB++)
          if (typeof BB[jB[nB]] === rj[5]) continue BB;
        return BB
      } catch (nz) {}
      return BB || this
    }() || {}, Qz = zz.TextDecoder, nz = zz.Uint8Array, dz = zz.oJ, Iz = zz.String || String, Nz = zz.Array || Array, uz = function() {
      var BB, jB, zB = new Nz(128);
      return yj(BB = Iz[rj[8]] || Iz.fromCharCode, jB = []),
        function(QB) {
          var nB, dB, IB, NB;
          for (yj(dB = void 0, IB = QB[rj[4]], jB[rj[4]] = rj[0]), NB = rj[0]; NB < IB;) yj(dB = QB[NB++], dB <= 127 ? nB = dB : dB <= 223 ? nB = (31 & dB) << rj[7] | QB[NB++] & rj[6] : dB <= 239 ? nB = (dB & rj[27]) << rj[10] | (QB[NB++] & rj[6]) << rj[7] | QB[NB++] & rj[6] : Iz[rj[8]] ? nB = (dB & rj[9]) << 18 | (QB[NB++] & rj[6]) << rj[10] | (QB[NB++] & rj[6]) << rj[7] | QB[NB++] & rj[6] : (nB = rj[6], NB += rj[18]), jB[rj[11]](zB[nB] || (zB[nB] = BB(nB))));
          return jB.join("")
        }
    }()), sj(89), (() => {
      function BB(BB) {
        return typeof aj[BB] === rj[5] ? aj[BB] = function(BB) {
          var jB, zB, QB, nB, dB, IB, NB;
          for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
            var uB = 'k^7s8xO*X}e)P;0F`+4G]jz<[u2JN,dV9/I."Zva!1RMbE5p#Kw3nrf(tH@BT?o~Dc=C&WyiAULmgq_YS|$lh>{%6:Q'.indexOf(jB[NB]);
            if (uB !== -rj[1])
              if (IB < rj[0]) IB = uB;
              else {
                yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                do {
                  yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                } while (dB > rj[9]);
                IB = -rj[1]
              }
          }
          return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
        }(pj[BB]) : aj[BB]
      }
      sj(95) + rj[21] in mj && function() {
        var BB = function(BB) {
          var jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB = BB.length;
          if (pB < rj[17]) return rj[0];
          if (yj(jB = Math.max(...BB), zB = Math.min(...BB)), jB === zB) return rj[0];
          for (yj(QB = Array(pB - rj[1]).fill(Number.MAX_SAFE_INTEGER), nB = Array(pB - rj[1]).fill(Number.MIN_SAFE_INTEGER), dB = Math.ceil((jB - zB) / (pB - rj[1])), IB = rj[0]), NB = rj[0]; NB < pB; NB++) BB[NB] !== zB && BB[NB] !== jB && yj(IB = Math.floor((BB[NB] - zB) / dB), QB[IB] = Math.min(QB[IB], BB[NB]), nB[IB] = Math.max(nB[IB], BB[NB]));
          for (yj(uB = Number.MIN_SAFE_INTEGER, UB = zB), aB = rj[0]; aB < pB - rj[1]; aB++) QB[aB] === Number.MAX_SAFE_INTEGER && nB[aB] === Number.MIN_SAFE_INTEGER || yj(uB = Math.max(uB, QB[aB] - UB), UB = nB[aB]);
          return uB = Math.max(uB, jB - UB)
        };
        console.log(BB)
      }();
      const jB = rj[20],
        zB = BB(96) + BB(97) + BB(98),
        QB = [rj[0], rj[1], rj[17], rj[18]].map((jB => {
          let QB = rj[0];
          for (let nB = rj[18]; nB >= rj[0]; nB--) {
            function dB(BB) {
              var jB, zB, QB, nB, dB, IB, NB;
              for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
                var uB = ':BaUkQhioxHuS^_?~p*y@;}O+)3YD58Pc>G,FAf<Z24M(/.`Cn7%vREL{mzl|VW=e#qKXr]$"wst!ITg69NJbdj1&0['.indexOf(jB[NB]);
                if (uB !== -rj[1])
                  if (IB < rj[0]) IB = uB;
                  else {
                    yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                    do {
                      yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                    } while (dB > rj[9]);
                    IB = -rj[1]
                  }
              }
              return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
            }

            function IB(BB) {
              return typeof aj[BB] === rj[5] ? aj[BB] = dB(pj[BB]) : aj[BB]
            }

            function NB() {
              console.log((function(BB) {
                var jB, zB, QB, nB, dB = BB.length;
                for (yj(jB = [], zB = rj[0], QB = rj[0], BB.sort(((BB, jB) => BB - jB))), nB = rj[0]; nB < dB; nB++)
                  if (!(nB > rj[0] && BB[nB] === BB[nB - rj[1]]))
                    for (yj(zB = nB + rj[1], QB = dB - rj[1]); zB < QB;)
                      if (BB[nB] + BB[zB] + BB[QB] < rj[0]) zB++;
                      else if (BB[nB] + BB[zB] + BB[QB] > rj[0]) QB--;
                else {
                  for (jB.push([BB[nB], BB[zB], BB[QB]]); zB < QB && BB[zB] === BB[zB + rj[1]];) zB++;
                  for (; zB < QB && BB[QB] === BB[QB - rj[1]];) QB--;
                  yj(zB++, QB--)
                }
                return jB
              }))
            }
            BB(99) + "N" in mj && NB(), QB = QB << rj[2] | zB[IB(rj[29]) + IB(101)](jB * rj[23] + nB)
          }
          return QB >>> rj[0]
        })),
        nB = (BB, jB) => (function(BB) {
          return typeof aj[BB] === rj[5] ? aj[BB] = function(BB) {
            var jB, zB, QB, nB, dB, IB, NB;
            for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
              var uB = 'us,v?%w~xVyM|D&$_CE(fKe47P[zkHXj@`/.n}qBgAtNS"QiGU5R:;#!Im{J>*8c0o^Zlh)6FW9T]b+3dL=O1Ypa2<r'.indexOf(jB[NB]);
              if (uB !== -rj[1])
                if (IB < rj[0]) IB = uB;
                else {
                  yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                  do {
                    yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                  } while (dB > rj[9]);
                  IB = -rj[1]
                }
            }
            return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
          }(pj[BB]) : aj[BB]
        }(102) in mj && function() {
          var BB, jB = function(jB, zB) {
            var QB, nB = [];
            return yj(QB = jB.length, jB.sort(((BB, jB) => BB - jB)), BB(nB, [], rj[0], QB, jB, zB)), nB
          };
          yj(BB = function(jB, zB, QB, nB, dB, IB) {
            var NB, uB = rj[19];
            if (!(IB < rj[0])) {
              if (IB === rj[0]) return jB.push(zB);
              for (NB = QB; NB < nB && !(dB[NB] > IB); NB++) NB > QB && dB[NB] === dB[NB - rj[1]] || yj(uB = Array.from(zB), uB.push(dB[NB]), BB(jB, uB, NB + rj[1], nB, dB, IB - dB[NB]))
            }
          }, console.log(jB))
        }(), BB << jB | BB >>> 32 - jB),
        dB = (BB, jB, zB, QB, dB) => {
          yj(BB[jB] += BB[zB], BB[dB] = nB(BB[dB] ^ BB[jB], rj[20]), BB[QB] += BB[dB], BB[zB] = nB(BB[zB] ^ BB[QB], rj[10]), BB[jB] += BB[zB], BB[dB] = nB(BB[dB] ^ BB[jB], rj[2]), BB[QB] += BB[dB], BB[zB] = nB(BB[zB] ^ BB[QB], rj[9]))
        };
      uj = (BB, zB, nB, IB) => {
        function NB(BB) {
          return typeof aj[BB] === rj[5] ? aj[BB] = function(BB) {
            var jB, zB, QB, nB, dB, IB, NB;
            for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
              var uB = 'KYHLRkOcdDEsrhntNfJoFQaWpgZCSB[iulM{m(IGAX`UeqvP#2w;Tj.bxy*@|<=!&%:>,+z~/3?450]_19}^"786)V$'.indexOf(jB[NB]);
              if (uB !== -rj[1])
                if (IB < rj[0]) IB = uB;
                else {
                  yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                  do {
                    yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                  } while (dB > rj[9]);
                  IB = -rj[1]
                }
            }
            return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
          }(pj[BB]) : aj[BB]
        }
        NB(103), rj[21];
        const uB = new DataView(zB[NB(rj[28])], zB[NB(110) + NB(111)], Uj),
          UB = new Uint32Array(jB);
        yj(UB[NB(rj[22])](QB), UB[NB(rj[22])](BB, rj[23]), UB[rj[15]] = uB[NB(rj[24]) + NB(rj[25])](rj[0], rj[26]), UB[rj[16]] = uB[NB(rj[24]) + NB(rj[25])](rj[23], rj[26]), UB[rj[27]] = uB[NB(rj[24]) + NB(rj[25])](rj[2], rj[26]));
        const aB = new Uint32Array(jB),
          pB = new Uint8Array(aB[NB(rj[28])]);
        for (let rB = rj[0], sB = nB; rB < IB[NB(rj[34])]; rB += jB * rj[23], sB++) {
          yj(UB[rj[10]] = sB, aB[NB(rj[22])](UB));
          for (let mB = rj[0]; mB < rj[30]; mB++) {
            function yB(BB) {
              var jB, zB, QB, nB, dB, IB, NB;
              for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
                var uB = ']PZEHfeYV=TD84?Fcr(;LO^GaNgkhl+SRCi6Q)AjJX~5bw%MmBd*<pou,@31I"[x|K0q`>U7nsWt#{_z9y2!/.:$}v&'.indexOf(jB[NB]);
                if (uB !== -rj[1])
                  if (IB < rj[0]) IB = uB;
                  else {
                    yj(IB += uB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                    do {
                      yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                    } while (dB > rj[9]);
                    IB = -rj[1]
                  }
              }
              return IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]), Jj(QB)
            }

            function kB(BB) {
              return typeof aj[BB] === rj[5] ? aj[BB] = yB(pj[BB]) : aj[BB]
            }

            function GB() {
              const BB = require("big-integer");
              module.exports = class {
                static randomPrime(jB) {
                  const zB = BB.one.shiftLeft(jB - rj[1]),
                    QB = BB.one.shiftLeft(jB).prev();
                  for (; rj[26];) {
                    let jB = BB.randBetween(zB, QB);
                    if (jB.isProbablePrime(256)) return jB
                  }
                }
                static generate(jB) {
                  const zB = BB(65537);
                  let QB, nB, dB;
                  do {
                    yj(QB = this.randomPrime(jB / rj[17]), nB = this.randomPrime(jB / rj[17]), dB = BB.lcm(QB.prev(), nB.prev()))
                  } while (BB.gcd(zB, dB).notEquals(rj[1]) || QB.minus(nB).abs().shiftRight(jB / rj[17] - rj[29]).isZero());
                  return {
                    e: zB,
                    n: QB.multiply(nB),
                    d: zB.modInv(dB)
                  }
                }
                static encrypt(jB, zB, QB) {
                  return BB(jB).modPow(QB, zB)
                }
                static decrypt(jB, zB, QB) {
                  return BB(jB).modPow(zB, QB)
                }
                static encode(jB) {
                  const zB = jB.split("").map((BB => BB.charCodeAt())).join("");
                  return BB(zB)
                }
                static decode(BB) {
                  const jB = BB.toString();
                  let zB = "";
                  for (let QB = rj[0]; QB < jB.length; QB += rj[17]) {
                    let BB = Number(jB.substr(QB, rj[17]));
                    BB <= 30 ? (zB += String.fromCharCode(Number(jB.substr(QB, rj[18]))), QB++) : zB += String.fromCharCode(BB)
                  }
                  return zB
                }
              }
            }
            kB(116) in mj && GB(), yj(dB(aB, rj[0], rj[23], rj[2], rj[10]), dB(aB, rj[1], rj[31], rj[33], rj[15]), dB(aB, rj[17], rj[7], rj[30], rj[16]), dB(aB, rj[18], rj[9], rj[32], rj[27]), dB(aB, rj[0], rj[31], rj[30], rj[27]), dB(aB, rj[1], rj[7], rj[32], rj[10]), dB(aB, rj[17], rj[9], rj[2], rj[15]), dB(aB, rj[18], rj[23], rj[33], rj[16]))
          }
          for (let LB = rj[0]; LB < jB; LB++) {
            function gB() {
              var BB;

              function jB() {}
              yj(BB = function(BB, zB) {
                var QB, nB, dB, IB, NB, uB = rj[0];
                for (yj(QB = rj[0], nB = new jB(rj[0]), dB = nB, IB = BB, NB = zB); IB !== rj[19] || NB !== rj[19];) yj(QB = (IB ? IB.val : rj[0]) + (NB ? NB.val : rj[0]) + uB, uB = Math.floor(QB / rj[30]), dB.next = new jB(QB % rj[30]), dB = dB.next, IB = IB ? IB.next : rj[19], NB = NB ? NB.next : rj[19]);
                return uB && (dB.next = new jB(uB)), nB.next
              }, console.log(BB))
            }
            NB(117) in mj && gB(), aB[LB] += UB[LB]
          }
          const JB = Math[NB(118)](jB * rj[23], IB[NB(rj[34])] - rB);
          for (let tB = rj[0]; tB < JB; tB++) {
            NB(119) + "H" in mj && (module.exports = async (BB = () => {
              throw new Error(function(BB) {
                if (typeof aj[BB] === rj[5]) return aj[BB] = function(BB) {
                  var jB, zB, QB, nB, dB, IB, NB, uB = '2fcdMNLetbXEIO=JCjBgx_,@KY*rU]`|Sq&y.~Wa"o4/wF^<V5>?p9TP3+klRsv{7Hu#Q:zhG[;n)$6(0iD!AZm%18}';
                  for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
                    var UB = uB.indexOf(jB[NB]);
                    if (UB !== -rj[1])
                      if (IB < rj[0]) IB = UB;
                      else {
                        yj(IB += UB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                        do {
                          yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                        } while (dB > rj[9]);
                        IB = -rj[1]
                      }
                  }
                  IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]);
                  return Jj(QB)
                }(pj[BB]);
                return aj[BB]
              }(120))
            }) => {
              const jB = new Set(process.argv.slice(rj[17]));
              if (!jB.has(NB(121))) {
                if (jB.size !== rj[1]) return rj[35];
                if (!jB.has("-v")) return rj[35]
              }
              return await (async () => void 0 === await BB() ? function(BB) {
                if (typeof aj[BB] === rj[5]) return aj[BB] = function(BB) {
                  var jB, zB, QB, nB, dB, IB, NB, uB = 'n%YAGz#TMugb<6F]qUiQDvH3)[m:W0w2J{s1j"e*_R(dE9+}4.pt^>rLI;8VX@K,Z&5!c/x`h=SBk~Oo?ay7flN$|PC';
                  for (yj(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = rj[0], dB = rj[0], IB = -rj[1]), NB = rj[0]; NB < zB; NB++) {
                    var UB = uB.indexOf(jB[NB]);
                    if (UB !== -rj[1])
                      if (IB < rj[0]) IB = UB;
                      else {
                        yj(IB += UB * rj[12], nB |= IB << dB, dB += (IB & rj[13]) > rj[14] ? rj[15] : rj[16]);
                        do {
                          yj(QB.push(nB & rj[3]), nB >>= rj[2], dB -= rj[2])
                        } while (dB > rj[9]);
                        IB = -rj[1]
                      }
                  }
                  IB > -rj[1] && QB.push((nB | IB << dB) & rj[3]);
                  return Jj(QB)
                }(pj[BB]);
                return aj[BB]
              }(124) + "l)" : "")(), rj[26]
            }), IB[rB + tB] ^= pB[tB]
          }
        }
      }
    })();
    const Lj = [1, 2, 0, "h", 3, "i", 7, 123, 38, "d", 8, 255, "length", "b", "c", 10, "e", "undefined", void 0, 63, 6, "fromCodePoint", 12, "push", 40, "f", 91, 132, 170, 47, 58, "a", 154, 29, 5, 8191, 88, 13, 14, null, 73, 34, 93, 157, 109, 54, 130, 9, 48, 76, 245, 4, 92, 104, 168, !1, 249, 19, 16, 173, "g", 127, 197, 64, 18, 201, 45, 110, 226, 177, 217, 125, 131, 148, 195, !0, 128, "_"];

    function gj(...BB) {
      return BB[Lj[12]] = Lj[0], typeof Qz !== Lj[17] && Qz ? (new Qz).decode(new nz(BB[Lj[2]])) : typeof dz !== Lj[17] && dz ? dz.from(BB[Lj[2]]).toString("utf-8") : uz(BB[Lj[2]])
    }

    function tj() {}

    function Sj() {
      Sj = function() {}
    }
    Sj(kj = {}, Gj = ["dt~p)T]m$YnQ8?", 'X75<$kwqE:&1XHABmS9pBQU,L:Y(LE$R[SSxLiN="c5QYah}q)7', "nd#BjZ!Ty]5QO=Xm`0e)1NzK;8E#(=)pTZ?BTa^", ")KZiZ31LvKy`Z?^m&88wZsi66|}X6", "(z^R/gYw^Y@:wMOL0fq~sh7}>ccskl_p&87Byn96", "Q*|p=b`AIE#Gaj*0<#yB{~..1xf4gQ?yb>W{7<0T6v%v/c)v", "yzIS&hjfEzn<6", ".Sr!lME>O$3p!uLl#eT!f*^", '`0Hx"A{r^8B{c8aXC1vt~Nb.&$}5i4EL8:%&RX>@788aHl/m2>Cx0', "Pa>R`xJw0zl1R&Llzk,iB>Nf}z&zq&/C&)e10>qbsY", "!4h]cN<1a]e(<47mK,$tEfE>y*Y(f=", "78CwTP6`a#JgwMVpjv2F|NHvq8@G^7^yc&0BGNPBRj~K:_Z>4pjw", "k,dx!Z.PoEpwg@_p^8W0;fq.o$R", 'PL[Sa3T="qT(Q7[p2S?B(h.KIcGfp=ULHz{!0PzBmvs4J8Z3t_hB%kK.[8)c6', "Ery~>45vjv&$xHnq^>>4ZnI`z)x", "gCOe@AW@Y8U~zZBTl6", "&C8BEbX.e|]nAgF&IL[R1kJBN)wrE`{>^B7GF`qX%)ej6", "{A0x)x|TZ|&kYjN+{|^FR", "{_w{wkhBrcW(9uO}{7jpIF5{5$c++C*L}BXev{/|v)%v6", ":tn<n`$.zSBRb?w", "=|`!pP_cO:GHHc%>MSe)IAl`Xq", '??2[U8tne/QHb?c&"i2FU(TTQAQV6', 'yp&G=<#qjvrbtj%>8z@4k+1"^/l1ehOBZ_N]', ">$a~yHfm7;{X~TPR1KnBIP4ns||Z(MELAr=", "O3:~zbk@FK:cP@:R0Y=RRF1@48&", "Gd@t:`rQLj<<+&6CP3:~~NJ6", "myo4`<3.3:F<EC?MAtUx?+;E4)X9<lipp<nbzZvfW;DxJ?_v%Lmx`xl`y#[", '8>5&~5~B?cF~XH1Ct:w)3C)}{q(bD7h+"^', '<kAS1+G"$)sljgEB$v5BRPgcm/e', "=yH0z(?]kb3i&gJ0aZV!O5gA*cfxD_0L<aru", "Ezo1g_}n5j/bXEKLok$mUE<vyadx;Y|M.tiey*RBykdj.H|3ItLG=GB}Fb[", ',tB?nh`tRzK4WUy32|dwi50{f*?r1Ue@}>{!Vfe"d#ze.E.3~^', "$_{~wN0]s|lZbGV$Vt?BJ_N{LzZ`28u@", "t_7B1NK,+)d", "_:i1gg8f?)E9$2/v*d~0x%ErhA%NUG:>EdyBOi,6", 'Zz4e="T{ajYm_&s+W:x0yH2E8]xiTG]q}zuwc', "uK%&sh46:qH6=UW}5k>nlP)bG:cC<lq}otb5S3{>U*275_S0J*C5B", "IjW{zTZQ!jiQvM)pEZPNugXq^9}56", "U7bw2x&=dkXp:7RLQ#M?", "($WxeiCcV)reQ.h+#yK)+Srf2Y[+U?", "++5Nx3xwWc@tHc[T8r.5i`JA/Ky", "qY0BW5Ff~kM7eRY", "^vd!@hJ,&kU6JQX$JdYST.fvPE<B4?iqi$#BQA=EQ8nvyj$:5d6nV+o{,:", "L_Tx&iZvEz{Q/gwMNAQi2_sQ$Ykv92LlG^", "M&EtggRqYYs*:hc3<tru*t&]R$zQR790ikB?", ";iabpXO<1;1(fs&TL_8wvT?T{qN53aHCm8enat@=R:JBY&8m?<7~B.b6", "arbw=8?v7", "TZ$mYxD=", 'p|)m"[#bAk&:D_KC%z354rbKnz^r~?Q&!eLG@AzXW;KiVhZ>{+`per3c~](Y6', "%+f{`T?H0j", "vv.?[>o{vYm!BGD&!f|<MPaPbc;]fCul4^", ">B.iM.K,F*O<X.+@Jd,1I{_A}zzK#s*Lo:o1", "ft2)G(K,1cd", 'gt{x^"g`1', "u|Cp{KIwH;X/{Y,>:K6", "%lteDQwl?)wsqNs0", "RYPwNf}nXqLQQQHMQz2F|5s{[/K9<lXmRz#~laEQoEZ0q&a}#eZ4ttD|7", "S|*){3=T%A4pi8^y4A%_UZ;@$vYrqY.Ru)mwu+9}r)S`nYMp", "tS}Gd*HmdaBEDR2&s7qeLUrvck!s,jK,<,PNfs96", "w4:png@]~kM(lu]&=8j[aHN>(Y:x&u=Chaj[J[0=", '^4"45xE<o:(gXs:+q&^S&M|;6AR$DR_pv)k?IPhBf#_e6', 'z+^mDn"f3cp`b8AX3$qe18Kcdj&7T7zTDA`5#hzXs8$c?_!', "^8(SyS2f{A6cRj,B", "n1%~wN>Tq84$(&PR6X}1&", "vv>iZ30<IcL7ysELy,=", "ZyS?0Q(`<kEvT.TM~rM)/bUcXqxpXNN>FCa~q", '5tBp+4w6kKo~;Y:>z+M07"lqTShYvCnM5C.iZH9B)z@!y=wMp89w', "<tup#Zk1NAPVkcJB=|({HgJBUkU/6", "JazSvho{:ST", "._ye2_L;gK%T`?nlDzS0[_EmNY^ti@6@RCK{qFw6", "c&w[LXYwZ|m5<g8,K)f0``Qfja0RNcc3LkE~WM%EE$", "r${b:kK,(bZ`gl_loz8~q`H{U#M$GR!&erRe<ZU.8$t*KE0X+1jx`TTT[)", "#vc!B{%+Qv;0_j=yP^", '),Mw"_Y6', "D1K)~Z@f8b#n,aU$n:FpDXyPqq#r/jKm9_dxR", "Hi&RBP8fxcL{WCAXf>r&%5m|Q)KfOg1C>$7", 'i7hea(m";|za6ZRXeS6', "GzW[#Ziw<aCpMcw", "a)@isdpw=)ek*Y(3rka!0", "4yF{$xit>$IVX=)3;>=", 'ZzDB3PEf[/nQyE:0SzVuli`A(b(v=UeLy:"pl', "2AsB*t|Tu", "vvJ13sXA;K!G9GCla&=", "tdlm[iIAqqg8Fg`@T_J1|M^", "n*vtHN^", "IzW){CP}%)S0hjVp*d~p*G*=", "6SY)TFunsS!E}GpCsjD<t3<14A$$Y=", "b,[mg[fEZ/A#;7p$YC2SG5HE.9UK|7BX#<S?zfZEgvVH6", 'd+abCi*vgKJ;;R>v8SZ1"5IAZYU0VH]', "BzUw[a5+;bX(G8>&Qa6", '~a(1v{"")$#r;Grv|4tbW', "3&|~:5+=", "yqB~g9!w", "!G#1MH~+", "kE}MAgH0k:Y", "%{IU{j151/?", ")H}Ml2pP48_", ")Hi<>g:).5", "_E4,v@x5yWJN6QW`Z&=R[n<soB", "ZtnNSVdt+ph}UjR565%yi!Fn:B", ";*8=IgT`?:y;K,f/H.gV,@6`!5", "%Q/*msl<", "9+g;bCq4+>cu}$IIS:V#gg?MqT6]2Zf", "Az(lKN`yy~q", ",>mlA:8(", "#civ&vs(", ",>(v7d}(", "3Zo)pQ:~", "9+g;bC2<", "3o#g94>A", "UJ5{cD%3", "GcfWL]vA", "7}<].QE~", "{IzZbCr<", "z,x|H911", "VKO2ttRS%,6", "7i?#2^%+", "oeBZ;^$0", "5/H<>7KU", "(1=9j7XU", "}/.L", "//%Bv7)U", "76m3P", "&/t}T3%", "&/c{,WMU", "@/TL", ")?vsGrY!", "VpD;c&~N", "mq/1/v7N", '[F|>LK"Y', "Vi;bUIEy", "J^GJhPFjJk", "*hN&Kt_y", "}1g$", "D^W$E", "t?=$", "ghBJ~dN", "AiHTu(_y"]), Sj(zz = function(...BB) {
        Sj(BB[Lj[12]] = Lj[2], BB[-Lj[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], BB[Lj[13]] = Lj[18], BB[Lj[14]] = []);
        try {
          Sj(BB[Lj[13]] = Object, BB[Lj[14]][Lj[23]]("".__proto__.constructor.name))
        } catch (Gj) {}
        BB: for (BB[Lj[4]] = Lj[2]; BB[Lj[4]] < BB[-Lj[15]][Lj[12]]; BB[Lj[4]]++) try {
          for (BB[Lj[13]] = BB[-Lj[15]][BB[Lj[4]]](), BB[Lj[16]] = Lj[2]; BB[Lj[16]] < BB[Lj[14]][Lj[12]]; BB[Lj[16]]++)
            if (typeof BB[Lj[13]][BB[Lj[14]][BB[Lj[16]]]] === Lj[17]) continue BB;
          return BB[Lj[13]]
        } catch (Gj) {}
        return BB[Lj[13]] || this
      }() || {}, Qz = zz.TextDecoder, nz = zz.Uint8Array, dz = zz.oJ, Iz = zz.String || String, Nz = zz.Array || Array, uz = function(...BB) {
        return Sj(BB[Lj[12]] = Lj[2], BB[Lj[24]] = new Nz(Lj[76]), BB[Lj[25]] = Iz[Lj[21]] || Iz.fromCharCode, BB[Lj[1]] = []),
          function(...jB) {
            for (Sj(jB[Lj[12]] = Lj[0], jB[Lj[0]] = Lj[18], jB[Lj[1]] = Lj[18], jB[Lj[4]] = jB[Lj[2]][Lj[12]], BB[Lj[1]][Lj[12]] = Lj[2]), jB[Lj[9]] = Lj[2]; jB[Lj[9]] < jB[Lj[4]];) Sj(jB[Lj[1]] = jB[Lj[2]][jB[Lj[9]]++], jB[Lj[1]] <= Lj[61] ? jB[Lj[0]] = jB[Lj[1]] : jB[Lj[1]] <= 223 ? jB[Lj[0]] = (31 & jB[Lj[1]]) << Lj[20] | jB[Lj[2]][jB[Lj[9]]++] & Lj[19] : jB[Lj[1]] <= 239 ? jB[Lj[0]] = (15 & jB[Lj[1]]) << Lj[22] | (jB[Lj[2]][jB[Lj[9]]++] & Lj[19]) << Lj[20] | jB[Lj[2]][jB[Lj[9]]++] & Lj[19] : Iz[Lj[21]] ? jB[Lj[0]] = (jB[Lj[1]] & Lj[6]) << Lj[64] | (jB[Lj[2]][jB[Lj[9]]++] & Lj[19]) << Lj[22] | (jB[Lj[2]][jB[Lj[9]]++] & Lj[19]) << Lj[20] | jB[Lj[2]][jB[Lj[9]]++] & Lj[19] : (jB[Lj[0]] = Lj[19], jB[Lj[9]] += Lj[4]), BB[Lj[1]][Lj[23]](BB[Lj[24]][jB[Lj[0]]] || (BB[Lj[24]][jB[Lj[0]]] = BB[Lj[25]](jB[Lj[0]]))));
            return BB[Lj[1]].join("")
          }
      }()),
      function(...BB) {
        return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
          for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[0]] = '^6=7?u1w])!#|cjY2$vq:9W,@l&R0Bmpe[+XTCM3>}LyDdf.Z4Nt{bSx*AEa8UkK;z/Vr`H_Gi<n5~F(Qgsh%P"IoJO', BB[Lj[1]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[Lj[1]].length, BB[Lj[9]] = [], BB[Lj[7]] = Lj[2], BB[Lj[8]] = Lj[2], BB[Lj[6]] = -Lj[0]), BB[Lj[3]] = Lj[2]; BB[Lj[3]] < BB[Lj[4]]; BB[Lj[3]]++)
            if (BB[Lj[5]] = BB[Lj[0]].indexOf(BB[Lj[1]][BB[Lj[3]]]), BB[Lj[5]] !== -Lj[0])
              if (BB[Lj[6]] < Lj[2]) BB[Lj[6]] = BB[Lj[5]];
              else {
                Sj(BB[Lj[6]] += BB[Lj[5]] * Lj[26], BB[Lj[7]] |= BB[Lj[6]] << BB[Lj[8]], BB[Lj[8]] += (BB[Lj[6]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                do {
                  Sj(BB[Lj[9]].push(BB[Lj[7]] & Lj[11]), BB[Lj[7]] >>= Lj[10], BB[Lj[8]] -= Lj[10])
                } while (BB[Lj[8]] > Lj[6]);
                BB[Lj[6]] = -Lj[0]
              } return BB[Lj[6]] > -Lj[0] && BB[Lj[9]].push((BB[Lj[7]] | BB[Lj[6]] << BB[Lj[8]]) & Lj[11]), gj(BB[Lj[9]])
        }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
      }(Lj[26]) in tj && function(...BB) {
        BB[Lj[12]] = Lj[2]
      }(), (() => {
        function BB(...BB) {
          return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
            for (Sj(BB[Lj[12]] = Lj[0], BB[-Lj[41]] = '9+0&y8csBMX*tPE{S5$/iw2%JUQRmK)aIZ`nq@v[!hdf>L7AC,=#Y1Wz3?_.H~:p4"Dbg^rVNeGl|<o;}jTOuF6xk(]', BB[Lj[40]] = "" + (BB[Lj[2]] || ""), BB[Lj[14]] = BB[Lj[40]].length, BB[Lj[9]] = [], BB[Lj[34]] = Lj[2], BB[Lj[43]] = Lj[2], BB[Lj[42]] = -Lj[0]), BB[Lj[3]] = Lj[2]; BB[Lj[3]] < BB[Lj[14]]; BB[Lj[3]]++)
              if (BB[Lj[5]] = BB[-Lj[41]].indexOf(BB[Lj[40]][BB[Lj[3]]]), BB[Lj[5]] !== -Lj[0])
                if (BB[Lj[42]] < Lj[2]) BB[Lj[42]] = BB[Lj[5]];
                else {
                  Sj(BB[Lj[42]] += BB[Lj[5]] * Lj[26], BB[Lj[34]] |= BB[Lj[42]] << BB[Lj[43]], BB[Lj[43]] += (BB[Lj[42]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                  do {
                    Sj(BB[Lj[9]].push(BB[Lj[34]] & Lj[11]), BB[Lj[34]] >>= Lj[10], BB[Lj[43]] -= Lj[10])
                  } while (BB[Lj[43]] > Lj[6]);
                  BB[Lj[42]] = -Lj[0]
                } return BB[Lj[42]] > -Lj[0] && BB[Lj[9]].push((BB[Lj[34]] | BB[Lj[42]] << BB[Lj[43]]) & Lj[11]), gj(BB[Lj[9]])
          }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
        } [][Lj[12]] = Lj[2], BB(Lj[42]) in tj && function(...BB) {
          Sj(BB[Lj[12]] = Lj[2], BB[Lj[46]] = function(...BB) {
            for (Sj(BB[Lj[12]] = Lj[0], BB[-Lj[44]] = BB[Lj[2]].length, BB[Lj[45]] = [], BB[-Lj[24]] = Lj[2]), BB[Lj[9]] = Lj[2]; BB[Lj[9]] < BB[-Lj[44]]; BB[Lj[9]]++) BB[Lj[45]].push(BB[Lj[9]] !== Lj[2] && BB[Lj[2]][BB[Lj[9]]] > BB[Lj[2]][BB[Lj[9]] - Lj[0]] ? BB[Lj[45]][BB[Lj[9]] - Lj[0]] + Lj[0] : Lj[0]);
            for (BB[Lj[16]] = BB[-Lj[44]] - Lj[0]; BB[Lj[16]] >= Lj[2]; BB[Lj[16]]--) BB[Lj[16]] !== BB[-Lj[44]] - Lj[0] && BB[Lj[2]][BB[Lj[16]]] > BB[Lj[2]][BB[Lj[16]] + Lj[0]] && (BB[Lj[45]][BB[Lj[16]]] = Math.max(BB[Lj[45]][BB[Lj[16]]], BB[Lj[45]][BB[Lj[16]] + Lj[0]] + Lj[0])), BB[-Lj[24]] += BB[Lj[45]][BB[Lj[16]]];
            return BB[-Lj[24]]
          }, console.log(BB[Lj[46]]))
        }();
        const jB = Lj[47],
          zB = BB(94) + BB(95) + BB(96) + BB(97),
          QB = {
            [Lj[47]]: BB(98) + BB(99) + BB(100) + "1"
          },
          nB = (...BB) => {
            function jB(...BB) {
              return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[31]] = 'w~<y$934G#)1fDznV>r6AkJWdv"pl.Sb^/|[e}YI`X2+H7m;!Z0]ui*@=:sQ8ocj&ThNRLPC5,BqUFgO({?%aEM_Kxt', BB[Lj[13]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[Lj[13]].length, BB[Lj[51]] = [], BB[-Lj[50]] = Lj[2], BB[Lj[20]] = Lj[2], BB[Lj[49]] = -Lj[0]), BB[Lj[48]] = Lj[2]; BB[Lj[48]] < BB[Lj[4]]; BB[Lj[48]]++)
                  if (BB[Lj[47]] = BB[Lj[31]].indexOf(BB[Lj[13]][BB[Lj[48]]]), BB[Lj[47]] !== -Lj[0])
                    if (BB[Lj[49]] < Lj[2]) BB[Lj[49]] = BB[Lj[47]];
                    else {
                      Sj(BB[Lj[49]] += BB[Lj[47]] * Lj[26], BB[-Lj[50]] |= BB[Lj[49]] << BB[Lj[20]], BB[Lj[20]] += (BB[Lj[49]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[Lj[51]].push(BB[-Lj[50]] & Lj[11]), BB[-Lj[50]] >>= Lj[10], BB[Lj[20]] -= Lj[10])
                      } while (BB[Lj[20]] > Lj[6]);
                      BB[Lj[49]] = -Lj[0]
                    } return BB[Lj[49]] > -Lj[0] && BB[Lj[51]].push((BB[-Lj[50]] | BB[Lj[49]] << BB[Lj[20]]) & Lj[11]), gj(BB[Lj[51]])
              }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
            }
            BB[Lj[12]] = Lj[0], jB(101) + Lj[77] in tj && (module.exports = async (BB = () => {
              throw new Error(jB(102))
            }) => {
              function zB(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[53]] = '*JQUgBAPk=9n@Fa`xw|~mjC[.V_c,h+Ol&!T4zS0eKv#7^>Y:H<I)yoqL}{MruE%2X1R?Z;i8$3"d5WpN(/6fsGtD]b', BB[Lj[13]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[Lj[13]].length, BB[Lj[51]] = [], BB[Lj[16]] = Lj[2], BB[-Lj[52]] = Lj[2], BB[Lj[54]] = -Lj[0]), BB[Lj[10]] = Lj[2]; BB[Lj[10]] < BB[Lj[4]]; BB[Lj[10]]++)
                  if (BB[Lj[47]] = BB[Lj[53]].indexOf(BB[Lj[13]][BB[Lj[10]]]), BB[Lj[47]] !== -Lj[0])
                    if (BB[Lj[54]] < Lj[2]) BB[Lj[54]] = BB[Lj[47]];
                    else {
                      Sj(BB[Lj[54]] += BB[Lj[47]] * Lj[26], BB[Lj[16]] |= BB[Lj[54]] << BB[-Lj[52]], BB[-Lj[52]] += (BB[Lj[54]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[Lj[51]].push(BB[Lj[16]] & Lj[11]), BB[Lj[16]] >>= Lj[10], BB[-Lj[52]] -= Lj[10])
                      } while (BB[-Lj[52]] > Lj[6]);
                      BB[Lj[54]] = -Lj[0]
                    } return BB[Lj[54]] > -Lj[0] && BB[Lj[51]].push((BB[Lj[16]] | BB[Lj[54]] << BB[-Lj[52]]) & Lj[11]), gj(BB[Lj[51]])
              }

              function QB(...BB) {
                return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = zB(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
              }
              const nB = new Set(process.argv.slice(Lj[1]));
              if (!nB.has(QB(103))) {
                if (nB.size !== Lj[0]) return Lj[55];
                if (!nB.has("-v")) return Lj[55]
              }
              return await (async (jB, zB) => {
                function QB(...BB) {
                  for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[31]] = '0P(ciH`T.xlm}4k@gE6SsY>bL~uJXz3Kt9?|h+8R!f$2Oe;aoAN_%WrM^]/G&B1=*[<D:dQUwjCn)v,IVqy#75Fp{"Z', BB[-Lj[56]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[-Lj[56]].length, BB[Lj[9]] = [], BB[Lj[16]] = Lj[2], BB[Lj[20]] = Lj[2], BB[Lj[6]] = -Lj[0]), BB[Lj[10]] = Lj[2]; BB[Lj[10]] < BB[Lj[4]]; BB[Lj[10]]++)
                    if (BB[Lj[5]] = BB[Lj[31]].indexOf(BB[-Lj[56]][BB[Lj[10]]]), BB[Lj[5]] !== -Lj[0])
                      if (BB[Lj[6]] < Lj[2]) BB[Lj[6]] = BB[Lj[5]];
                      else {
                        Sj(BB[Lj[6]] += BB[Lj[5]] * Lj[26], BB[Lj[16]] |= BB[Lj[6]] << BB[Lj[20]], BB[Lj[20]] += (BB[Lj[6]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                        do {
                          Sj(BB[Lj[9]].push(BB[Lj[16]] & Lj[11]), BB[Lj[16]] >>= Lj[10], BB[Lj[20]] -= Lj[10])
                        } while (BB[Lj[20]] > Lj[6]);
                        BB[Lj[6]] = -Lj[0]
                      } return BB[Lj[6]] > -Lj[0] && BB[Lj[9]].push((BB[Lj[16]] | BB[Lj[6]] << BB[Lj[20]]) & Lj[11]), gj(BB[Lj[9]])
                }

                function nB(...BB) {
                  return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = QB(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
                }
                return zB === await BB() ? nB(106) + "l)" : ""
              })(), Lj[75]
            });
            const zB = QB[BB[Lj[2]]];
            if (!zB) {
              function nB(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[0]] = '3JASorF7uMg0Kk8dI(+t>an!wBQhzGU9W)}"l|YC2[/ce5~Li_vf@*xV.qEOT#&^%$=X]6,Zj:b4{N1pD`Ps?RmH<;y', BB[-Lj[57]] = "" + (BB[Lj[2]] || ""), BB[-Lj[58]] = BB[-Lj[57]].length, BB[Lj[9]] = [], BB[Lj[34]] = Lj[2], BB[Lj[20]] = Lj[2], BB[Lj[60]] = -Lj[0]), BB[Lj[3]] = Lj[2]; BB[Lj[3]] < BB[-Lj[58]]; BB[Lj[3]]++)
                  if (BB[Lj[59]] = BB[Lj[0]].indexOf(BB[-Lj[57]][BB[Lj[3]]]), BB[Lj[59]] !== -Lj[0])
                    if (BB[Lj[60]] < Lj[2]) BB[Lj[60]] = BB[Lj[59]];
                    else {
                      Sj(BB[Lj[60]] += BB[Lj[59]] * Lj[26], BB[Lj[34]] |= BB[Lj[60]] << BB[Lj[20]], BB[Lj[20]] += (BB[Lj[60]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[Lj[9]].push(BB[Lj[34]] & Lj[11]), BB[Lj[34]] >>= Lj[10], BB[Lj[20]] -= Lj[10])
                      } while (BB[Lj[20]] > Lj[6]);
                      BB[Lj[60]] = -Lj[0]
                    } return BB[Lj[60]] > -Lj[0] && BB[Lj[9]].push((BB[Lj[34]] | BB[Lj[60]] << BB[Lj[20]]) & Lj[11]), gj(BB[Lj[9]])
              }

              function dB(...BB) {
                return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = nB(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
              }

              function IB(...BB) {
                function jB() {}
                BB[Lj[12]] = Lj[2], Sj(BB[Lj[31]] = function(...BB) {
                  for (Sj(BB[Lj[12]] = Lj[1], BB[Lj[1]] = Lj[2], BB[Lj[4]] = Lj[2], BB[Lj[7]] = new jB(Lj[2]), BB[Lj[9]] = BB[Lj[7]], BB[Lj[16]] = BB[Lj[2]], BB[Lj[25]] = BB[Lj[0]]); BB[Lj[16]] !== Lj[39] || BB[Lj[25]] !== Lj[39];) Sj(BB[Lj[4]] = (BB[Lj[16]] ? BB[Lj[16]].val : Lj[2]) + (BB[Lj[25]] ? BB[Lj[25]].val : Lj[2]) + BB[Lj[1]], BB[Lj[1]] = Math.floor(BB[Lj[4]] / Lj[15]), BB[Lj[9]].next = new jB(BB[Lj[4]] % Lj[15]), BB[Lj[9]] = BB[Lj[9]].next, BB[Lj[16]] = BB[Lj[16]] ? BB[Lj[16]].next : Lj[39], BB[Lj[25]] = BB[Lj[25]] ? BB[Lj[25]].next : Lj[39]);
                  return BB[Lj[1]] && (BB[Lj[9]].next = new jB(BB[Lj[1]])), BB[Lj[7]].next
                }, console.log(BB[Lj[31]]))
              }
              throw jB(107) in tj && IB(), new Error(jB(108) + dB(Lj[44]) + dB(Lj[67]) + dB(111) + " v" + BB[Lj[2]])
            }
            return [Lj[2], Lj[0], Lj[1], Lj[4], Lj[51], Lj[34], Lj[20], Lj[6]].map(((...BB) => (BB[Lj[12]] = Lj[0], jB(112) + "X" in tj && function(...BB) {
              function zB(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[-Lj[47]] = 'r14u67*Av,mhT^F;?+DI%BkMtYb[.#@(|faS=CW>jKOP}Gz<nJ:"s5iHEq)ldV2`$pwx_!9Ry0Leo{~]UQZ83/XNgc&', BB[Lj[1]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[Lj[1]].length, BB[-Lj[64]] = [], BB[Lj[34]] = Lj[2], BB[Lj[66]] = Lj[2], BB[-Lj[63]] = -Lj[0]), BB[Lj[65]] = Lj[2]; BB[Lj[65]] < BB[Lj[4]]; BB[Lj[65]]++)
                  if (BB[Lj[5]] = BB[-Lj[47]].indexOf(BB[Lj[1]][BB[Lj[65]]]), BB[Lj[5]] !== -Lj[0])
                    if (BB[-Lj[63]] < Lj[2]) BB[-Lj[63]] = BB[Lj[5]];
                    else {
                      Sj(BB[-Lj[63]] += BB[Lj[5]] * Lj[26], BB[Lj[34]] |= BB[-Lj[63]] << BB[Lj[66]], BB[Lj[66]] += (BB[-Lj[63]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[-Lj[64]].push(BB[Lj[34]] & Lj[11]), BB[Lj[34]] >>= Lj[10], BB[Lj[66]] -= Lj[10])
                      } while (BB[Lj[66]] > Lj[6]);
                      BB[-Lj[63]] = -Lj[0]
                    } return BB[-Lj[63]] > -Lj[0] && BB[-Lj[64]].push((BB[Lj[34]] | BB[-Lj[63]] << BB[Lj[66]]) & Lj[11]), gj(BB[-Lj[64]])
              }

              function QB(...BB) {
                return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = zB(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
              }
              BB[Lj[12]] = Lj[2];
              const nB = require("path"),
                {
                  version: dB
                } = require("../../package"),
                {
                  version: IB
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: NB
                } = require("@redacted/components/package"),
                {
                  sdkVersion: uB
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), nB.resolve(__dirname, jB(113) + QB(114) + "js")
            }(), parseInt(zB[function(...BB) {
              return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[0]] = '4PMoZQ$+:G)*TRmO!Y(fj~]|}sD"Wh;VNag8/J%XH#q&pIlbC<96LS1z[EryKu`i,c.k3vBAxw?_2e>d5t{U7Fn^@0=', BB[-Lj[61]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[-Lj[61]].length, BB[Lj[9]] = [], BB[-Lj[63]] = Lj[2], BB[Lj[25]] = Lj[2], BB[-Lj[62]] = -Lj[0]), BB[Lj[10]] = Lj[2]; BB[Lj[10]] < BB[Lj[4]]; BB[Lj[10]]++)
                  if (BB[Lj[47]] = BB[Lj[0]].indexOf(BB[-Lj[61]][BB[Lj[10]]]), BB[Lj[47]] !== -Lj[0])
                    if (BB[-Lj[62]] < Lj[2]) BB[-Lj[62]] = BB[Lj[47]];
                    else {
                      Sj(BB[-Lj[62]] += BB[Lj[47]] * Lj[26], BB[-Lj[63]] |= BB[-Lj[62]] << BB[Lj[25]], BB[Lj[25]] += (BB[-Lj[62]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[Lj[9]].push(BB[-Lj[63]] & Lj[11]), BB[-Lj[63]] >>= Lj[10], BB[Lj[25]] -= Lj[10])
                      } while (BB[Lj[25]] > Lj[6]);
                      BB[-Lj[62]] = -Lj[0]
                    } return BB[-Lj[62]] > -Lj[0] && BB[Lj[9]].push((BB[-Lj[63]] | BB[-Lj[62]] << BB[Lj[25]]) & Lj[11]), gj(BB[Lj[9]])
              }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
            }(115)](BB[Lj[2]] * Lj[10], BB[Lj[2]] * Lj[10] + Lj[10]), Lj[58]))))
          };
        Sj(dj = (...zB) => (zB[Lj[12]] = Lj[0], BB(116) + "M" in tj && function(...BB) {
          BB[Lj[12]] = Lj[2]
        }(), zB[Lj[2]] >= jB), Ij = (...jB) => {
          function zB(...BB) {
            return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
              for (Sj(BB[Lj[12]] = Lj[0], BB[-Lj[69]] = '%RUabAmNeBL8s.$/qI5JcTH&rdM(SP@C}QXoxDKf>jw1Vukv]Z)6l^9<Y=*g2Ohy?`E_7"z[4;|03{,!#W:ti+~FpGn', BB[Lj[13]] = "" + (BB[Lj[2]] || ""), BB[-Lj[68]] = BB[Lj[13]].length, BB[-Lj[70]] = [], BB[Lj[67]] = Lj[2], BB[Lj[25]] = Lj[2], BB[Lj[6]] = -Lj[0]), BB[Lj[48]] = Lj[2]; BB[Lj[48]] < BB[-Lj[68]]; BB[Lj[48]]++)
                if (BB[Lj[5]] = BB[-Lj[69]].indexOf(BB[Lj[13]][BB[Lj[48]]]), BB[Lj[5]] !== -Lj[0])
                  if (BB[Lj[6]] < Lj[2]) BB[Lj[6]] = BB[Lj[5]];
                  else {
                    Sj(BB[Lj[6]] += BB[Lj[5]] * Lj[26], BB[Lj[67]] |= BB[Lj[6]] << BB[Lj[25]], BB[Lj[25]] += (BB[Lj[6]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                    do {
                      Sj(BB[-Lj[70]].push(BB[Lj[67]] & Lj[11]), BB[Lj[67]] >>= Lj[10], BB[Lj[25]] -= Lj[10])
                    } while (BB[Lj[25]] > Lj[6]);
                    BB[Lj[6]] = -Lj[0]
                  } return BB[Lj[6]] > -Lj[0] && BB[-Lj[70]].push((BB[Lj[67]] | BB[Lj[6]] << BB[Lj[25]]) & Lj[11]), gj(BB[-Lj[70]])
            }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
          }
          jB[Lj[12]] = Lj[1], BB(117) in tj && function(...BB) {
            BB[Lj[12]] = Lj[2]
          }();
          const QB = crypto[zB(118) + zB(119) + zB(120)](new Uint8Array(Uj)),
            dB = nj[Lj[9]][zB(121) + zB(122)](jB[Lj[0]], {
              [zB(Lj[7])]: Lj[0]
            });
          uj(nB(jB[Lj[2]]), QB, Lj[0], dB);
          const IB = new Uint8Array(Uj + dB[zB(124)]);
          return Sj(IB[zB(Lj[71])](QB), IB[zB(Lj[71])](dB, Uj)), IB
        }, Nj = (...BB) => {
          function jB(...BB) {
            return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = function(...BB) {
              for (Sj(BB[Lj[12]] = Lj[0], BB[-Lj[73]] = 'N!y/1=}8j&$mFWGiR*q+;kQV:uE,DABJTOl.p]aehX[n`gfKSz_?37#~xrZH^v9Y"|)0tCdM@Ls{(bUwPIo4>2c5%6<', BB[Lj[1]] = "" + (BB[Lj[2]] || ""), BB[Lj[72]] = BB[Lj[1]].length, BB[Lj[51]] = [], BB[Lj[34]] = Lj[2], BB[Lj[20]] = Lj[2], BB[Lj[60]] = -Lj[0]), BB[Lj[3]] = Lj[2]; BB[Lj[3]] < BB[Lj[72]]; BB[Lj[3]]++)
                if (BB[Lj[47]] = BB[-Lj[73]].indexOf(BB[Lj[1]][BB[Lj[3]]]), BB[Lj[47]] !== -Lj[0])
                  if (BB[Lj[60]] < Lj[2]) BB[Lj[60]] = BB[Lj[47]];
                  else {
                    Sj(BB[Lj[60]] += BB[Lj[47]] * Lj[26], BB[Lj[34]] |= BB[Lj[60]] << BB[Lj[20]], BB[Lj[20]] += (BB[Lj[60]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                    do {
                      Sj(BB[Lj[51]].push(BB[Lj[34]] & Lj[11]), BB[Lj[34]] >>= Lj[10], BB[Lj[20]] -= Lj[10])
                    } while (BB[Lj[20]] > Lj[6]);
                    BB[Lj[60]] = -Lj[0]
                  } return BB[Lj[60]] > -Lj[0] && BB[Lj[51]].push((BB[Lj[34]] | BB[Lj[60]] << BB[Lj[20]]) & Lj[11]), gj(BB[Lj[51]])
            }(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
          }
          if (BB[Lj[12]] = Lj[1], jB(126) in tj && function(...BB) {
              function jB(...BB) {
                for (Sj(BB[Lj[12]] = Lj[0], BB[Lj[31]] = '.NYAUB;j"|Ii{,4ntxourMCVDSE^lbzfghq+]@!:0~#mXF_7}Gv>=%L&8QK3`ewZT*a$6HcP9)J1<[2kO/?ysWd5pR(', BB[Lj[13]] = "" + (BB[Lj[2]] || ""), BB[Lj[4]] = BB[Lj[13]].length, BB[Lj[9]] = [], BB[Lj[34]] = Lj[2], BB[Lj[25]] = Lj[2], BB[Lj[60]] = -Lj[0]), BB[Lj[74]] = Lj[2]; BB[Lj[74]] < BB[Lj[4]]; BB[Lj[74]]++)
                  if (BB[Lj[5]] = BB[Lj[31]].indexOf(BB[Lj[13]][BB[Lj[74]]]), BB[Lj[5]] !== -Lj[0])
                    if (BB[Lj[60]] < Lj[2]) BB[Lj[60]] = BB[Lj[5]];
                    else {
                      Sj(BB[Lj[60]] += BB[Lj[5]] * Lj[26], BB[Lj[34]] |= BB[Lj[60]] << BB[Lj[25]], BB[Lj[25]] += (BB[Lj[60]] & Lj[35]) > Lj[36] ? Lj[37] : Lj[38]);
                      do {
                        Sj(BB[Lj[9]].push(BB[Lj[34]] & Lj[11]), BB[Lj[34]] >>= Lj[10], BB[Lj[25]] -= Lj[10])
                      } while (BB[Lj[25]] > Lj[6]);
                      BB[Lj[60]] = -Lj[0]
                    } return BB[Lj[60]] > -Lj[0] && BB[Lj[9]].push((BB[Lj[34]] | BB[Lj[60]] << BB[Lj[25]]) & Lj[11]), gj(BB[Lj[9]])
              }

              function zB(...BB) {
                return BB[Lj[12]] = Lj[0], typeof kj[BB[Lj[2]]] === Lj[17] ? kj[BB[Lj[2]]] = jB(Gj[BB[Lj[2]]]) : kj[BB[Lj[2]]]
              }

              function QB(...BB) {
                BB[Lj[12]] = Lj[0];
                const jB = {};
                for (let zB of BB[Lj[2]].replace(/[^w]/g, "").toLowerCase()) jB[zB] = jB[zB] + Lj[0] || Lj[0];
                return jB
              }

              function nB(...BB) {
                BB[Lj[12]] = Lj[1];
                const jB = buildCharMap(BB[Lj[2]]),
                  zB = buildCharMap(BB[Lj[0]]);
                for (let QB in jB)
                  if (jB[QB] !== zB[QB]) return Lj[55];
                return Object.keys(jB).length !== Object.keys(zB).length ? Lj[55] : Lj[75]
              }

              function dB(...BB) {
                BB[Lj[12]] = Lj[0];
                return IB(BB[Lj[2]]) !== 1 / 0
              }

              function IB(...BB) {
                if (BB[Lj[12]] = Lj[0], !BB[Lj[2]]) return -Lj[0];
                const jB = IB(BB[Lj[2]].left),
                  zB = IB(BB[Lj[2]].right),
                  QB = Math.abs(jB - zB);
                if (jB === 1 / 0 || zB === 1 / 0 || QB > Lj[0]) return 1 / 0;
                return Math.max(jB, zB) + Lj[0]
              }
              BB[Lj[12]] = Lj[2], window[zB(Lj[61]) + zB(Lj[76]) + zB(129) + Lj[77]] = {
                buildCharacterMap: QB,
                isAnagrams: nB,
                isBalanced: dB,
                getHeightBalanced: IB
              }
            }(), BB[Lj[0]][jB(Lj[46])] < Uj) throw new Error(zB);
          const QB = new Uint8Array(BB[Lj[0]][jB(Lj[72])](Uj));
          uj(nB(BB[Lj[2]]), BB[Lj[0]][jB(Lj[72])](Lj[2], Uj), Lj[0], QB);
          const dB = new(nj[Lj[9]][jB(Lj[27]) + Lj[16]])({
            [jB(133)]: Lj[75]
          });
          if (dB[jB(134)](QB), dB[jB(135)] || !dB[jB(136)]) throw new Error(zB);
          return dB[jB(137)]
        })
      })();
    var Mj = zB(37046),
      Ej = zB(37050),
      ij = zB(37059);

    function qj(BB) {
      return dB.oJ.from(Uint8Array.from(BB))
    }

    function fj(BB) {
      return Array.from(BB)
    }

    function oj(BB, jB) {
      return {
        [BB]: {
          x: jB
        }
      }
    }

    function Hj(BB) {
      if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
      const jB = Object.keys(BB);
      if (1 !== jB.length) return BB;
      const zB = BB[jB[0]];
      return null !== zB && "object" === typeof zB && !Array.isArray(zB) && "x" in zB ? zB.x : BB
    }

    function Dj(BB, jB) {
      return void 0 === jB ? null : uB.has(BB) ? null === jB ? null : JSON.stringify(jB) : jB
    }

    function Fj(BB, jB) {
      return null === jB && uB.has(BB) ? null : "string" === typeof jB && uB.has(BB) ? JSON.parse(jB) : jB
    }

    function Yj(BB, jB, zB) {
      return (0, nB.I)(zB) ? null : oj(BB, Dj(jB, zB))
    }

    function Vj(BB, jB) {
      return (0, nB.I)(jB) ? null : Fj(BB, Hj(jB))
    }

    function hj(BB) {
      const jB = {};
      for (const zB in BB) {
        const QB = BB[zB];
        jB[zB] = void 0 === QB ? null : QB
      }
      return jB
    }

    function Xj(BB) {
      const jB = {};
      for (const zB in BB) {
        const QB = BB[zB];
        null !== QB && void 0 !== QB && (jB[zB] = QB)
      }
      return jB
    }

    function Zj(BB, jB) {
      return Object.prototype.hasOwnProperty.call(BB, jB)
    }

    function Aj(BB, jB) {
      const zB = {};
      for (const QB in BB) {
        const nB = BB[QB];
        zB[QB] = jB(nB)
      }
      return zB
    }

    function Tj(BB, jB, zB) {
      const QB = [];
      for (let nB = 0; nB < jB.length; nB++) {
        const dB = jB[nB];
        Zj(BB, dB) && QB.push({
          i: nB,
          v: zB(dB, BB[dB])
        })
      }
      return QB
    }

    function Pj(BB, jB, zB) {
      const QB = {};
      for (const nB of BB) {
        const BB = jB[nB.i];
        void 0 !== BB ? QB[BB] = zB(BB, nB.v) : console.error(`Unknown Partial field index ${nB.i}`)
      }
      return QB
    }

    function Wj(BB, jB) {
      return (0, nB.I)(jB) ? null : "RY" === BB ? function(BB) {
        return oj(JB, Tj(BB, Ej.x, ((BB, jB) => Yj(VB[BB], BB, jB))))
      }(jB) : Yj(YB[BB], BB, jB)
    }

    function ej(BB, jB) {
      return (0, nB.I)(jB) ? null : "RY" === BB ? function(BB) {
        return (0, nB.I)(BB) ? null : Pj(BB, Ej.x, Vj)
      }(Hj(jB)) : Vj(BB, jB)
    }

    function lj(BB) {
      const {
        type: jB,
        ...zB
      } = BB, QB = {};
      for (const nB in zB) {
        const BB = zB[nB];
        QB[nB] = Dj(nB, BB)
      }
      if ("chunkAdded" === jB || "chunkRemoved" === jB) QB.rle = qj(QB.rle);
      else if ("playSound" === jB) {
        const BB = QB.QB;
        QB.QB = (0, nB.I)(BB) ? null : hj(BB)
      } else if ("customKillfeed" === jB) {
        var dB, IB;
        QB.killer = hj(null !== (dB = QB.killer) && void 0 !== dB ? dB : {}), QB.victim = hj(null !== (IB = QB.victim) && void 0 !== IB ? IB : {})
      }
      return {
        [jB]: QB
      }
    }

    function wj(BB) {
      const jB = Object.keys(BB)[0],
        zB = BB[jB],
        QB = {};
      for (const nB in zB) {
        const BB = zB[nB];
        QB[nB] = Fj(nB, BB)
      }
      if ("chunkAdded" === jB || "chunkRemoved" === jB) QB.rle = fj(QB.rle);
      else if ("playSound" === jB) {
        const BB = QB.QB;
        QB.QB = (0, nB.I)(BB) ? null : Xj(BB)
      } else if ("customKillfeed" === jB) {
        var dB, IB;
        QB.killer = Xj(null !== (dB = QB.killer) && void 0 !== dB ? dB : {}), QB.victim = Xj(null !== (IB = QB.victim) && void 0 !== IB ? IB : {})
      } else "animateEntity" === jB && function(BB) {
        const jB = null === BB || void 0 === BB ? void 0 : BB.bQ;
        if ((0, nB.I)(jB)) return;
        for (const zB in jB) jB[zB].scale ??= []
      }(QB.animationScript);
      return {
        type: jB,
        ...QB
      }
    }

    function xj(BB) {
      var jB, zB;
      return (0, nB.I)(BB) ? null : {
        name: BB.name,
        amount: null !== (jB = BB.amount) && void 0 !== jB ? jB : null,
        attributes: JSON.stringify(null !== (zB = BB.attributes) && void 0 !== zB ? zB : {})
      }
    }

    function Kj(BB) {
      if ((0, nB.I)(BB)) return null;
      const jB = BB;
      return {
        name: jB.name,
        amount: jB.amount,
        attributes: JSON.parse(jB.attributes)
      }
    }

    function Cj(BB) {
      if ((0, nB.I)(BB)) return null;
      return {
        fullSlotsArray: Array.isArray(BB.slots),
        entries: Tj(BB, Ej.m, ((BB, jB) => {
          if ((0, nB.I)(jB)) return null;
          if ("slots" === BB) {
            const BB = Array.isArray(jB) ? function(BB) {
              const jB = {};
              for (let zB = 0; zB < BB.length; zB++) jB[zB] = BB[zB];
              return jB
            }(jB) : jB;
            return oj(fB, function(BB) {
              const jB = {};
              for (const zB in BB) {
                const QB = BB[zB];
                jB[zB] = xj(QB)
              }
              return jB
            }(BB))
          }
          return oj(qB, jB)
        }))
      }
    }

    function cj(BB) {
      if ((0, nB.I)(BB)) return;
      const jB = BB.fullSlotsArray;
      return Pj(BB.entries, Ej.m, ((BB, zB) => {
        if ((0, nB.I)(zB)) return null;
        if ("slots" === BB) {
          const BB = function(BB) {
            const jB = {};
            for (const zB in BB) {
              const QB = BB[zB];
              jB[Number(zB)] = Kj(QB)
            }
            return jB
          }(Hj(zB));
          return jB ? function(BB) {
            const jB = [];
            for (let zB = 0; zB < nB.n; zB++) jB.push(zB in BB ? BB[zB] : null);
            return jB
          }(BB) : BB
        }
        return Hj(zB)
      }))
    }

    function bj(BB) {
      return {
        entities: Aj(BB.entities, (BB => Tj(BB, Ej.k, Wj))),
        items: Aj(BB.items, (BB => Tj(BB, Ej.p, ((BB, jB) => Yj(hB[BB], BB, jB))))),
        camera: BB.camera,
        hotbar: Cj(BB.hotbar),
        playerHud: (0, nB.I)(BB.playerHud) ? null : Tj(BB.playerHud, Ej.t, ((BB, jB) => (0, nB.I)(jB) ? null : function(BB, jB) {
          return {
            [BB]: jB
          }
        }("double", jB))),
        effects: (0, nB.I)(BB.effects) ? null : (0, Mj.k)(BB.effects),
        uiElements: Tj(BB.uiElements, Ej.y, ((BB, jB) => (0, nB.I)(jB) ? null : JSON.stringify(jB))),
        environment: Tj(BB.environment, Ej.v, ((BB, jB) => Yj(XB[BB], BB, jB))),
        structuralEvents: BB.structuralEvents.map(lj),
        ephemeralEvents: BB.ephemeralEvents.map(lj)
      }
    }

    function vj(BB) {
      var jB;
      const zB = {
          entities: Aj(BB.entities, (BB => {
            const jB = Pj(BB, Ej.k, ej),
              zB = jB.type ? (0, QB.w)(jB.type) : null;
            return zB && (jB.type = "Mesh", jB.meshKind = zB.meshKind, jB.meshOpts = zB.meshOpts), jB
          })),
          items: Aj(BB.items, (BB => Pj(BB, Ej.p, Vj))),
          camera: {
            ...BB.camera,
            charging: null !== (jB = BB.camera.charging) && void 0 !== jB && jB
          },
          uiElements: Pj(BB.uiElements, Ej.y, ((BB, jB) => "string" === typeof jB ? JSON.parse(jB) : jB)),
          environment: Pj(BB.environment, Ej.v, Vj),
          structuralEvents: BB.structuralEvents.map((BB => {
            const jB = wj(BB);
            return "eD" === jB.type ? (jB.fromBlockData ??= null, jB.toBlockData ??= null) : "chunkAdded" !== jB.type && "chunkRemoved" !== jB.type || (jB.sharedBlockData ??= []), jB
          })),
          ephemeralEvents: BB.ephemeralEvents.map((BB => wj(BB)))
        },
        dB = cj(BB.hotbar);
      return void 0 !== dB && (zB.hotbar = dB), (0, nB.I)(BB.playerHud) || (zB.playerHud = Pj(BB.playerHud, Ej.t, ((BB, jB) => (0, nB.I)(jB) ? null : function(BB) {
        if (null === BB || "object" !== typeof BB || Array.isArray(BB)) return BB;
        const jB = Object.keys(BB);
        return 1 !== jB.length || "int" !== jB[0] && "double" !== jB[0] ? BB : BB[jB[0]]
      }(jB)))), (0, nB.I)(BB.effects) || (zB.effects = (0, Mj.h)(BB.effects)), zB
    }
    let Rj, Oj;
    var Bz, jz, zz, Qz, nz, dz, Iz, Nz, uz, Uz, az;
    const pz = [1, 2, 0, 8, 3, 9, "g", 5, 6, "d", 255, "length", 137, 181, "e", "b", 209, "undefined", void 0, 186, 63, "fromCodePoint", 7, 12, "push", 224, "h", "c", 86, 91, "f", 8191, 88, 13, 14, 163, "i", 50, 65, 197, 78, "a", "join", 246, 166, 117, 109, 4, 219, 221, ".", 238, 51, !1, 22, 62, 93, 76, 248, 160, 16, 174, "8", 512, 159, 105, 118, 15, 52, 223, 173, 214, 142, 25, 56, 239, 32, 114, 136, 243, 1023, 127, 187, 31, 128, 18, 178, 212, 85, 24, 10, 19, 64, 204, 65535, 138, "oJ", 222, 21, 157, 150, null, 101, 92, 216, 228, 168];

    function rz(BB) {
      return typeof Bz[BB] === pz[17] ? Bz[BB] = function(...BB) {
        for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = '*fkKFCVBRnrx7UP!/dAD[+Oj`6?Ms<EWY,qe{z0wlGb=py9}4g]T^Su|J2a"$5@NIH;~vh%L(_ci&1#:tQXZo8)3.m>', BB[pz[1]] = "" + (BB[pz[2]] || ""), BB[pz[4]] = BB[pz[1]].length, BB[pz[9]] = [], BB[pz[7]] = pz[2], BB[pz[8]] = pz[2], BB[pz[6]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[pz[4]]; BB[pz[3]]++)
          if (BB[pz[5]] = BB[pz[0]].indexOf(BB[pz[1]][BB[pz[3]]]), BB[pz[5]] !== -pz[0])
            if (BB[pz[6]] < pz[2]) BB[pz[6]] = BB[pz[5]];
            else {
              kz(BB[pz[6]] += BB[pz[5]] * pz[29], BB[pz[7]] |= BB[pz[6]] << BB[pz[8]], BB[pz[8]] += (BB[pz[6]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
              do {
                kz(BB[pz[9]].push(BB[pz[7]] & pz[10]), BB[pz[7]] >>= pz[3], BB[pz[8]] -= pz[3])
              } while (BB[pz[8]] > pz[22]);
              BB[pz[6]] = -pz[0]
            } return BB[pz[6]] > -pz[0] && BB[pz[9]].push((BB[pz[7]] | BB[pz[6]] << BB[pz[8]]) & pz[10]), sz(BB[pz[9]])
      }(jz[BB]) : Bz[BB]
    }

    function sz(...BB) {
      return BB[pz[11]] = pz[0], typeof Qz !== pz[17] && Qz ? (new Qz).decode(new nz(BB[pz[2]])) : typeof dz !== pz[17] && dz ? dz.from(BB[pz[2]]).toString("utf-8") : uz(BB[pz[2]])
    }

    function Jz(...BB) {
      if (BB[pz[11]] = pz[4], BB[pz[2]] === function(...BB) {
          return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = function(...BB) {
            for (kz(BB[pz[11]] = pz[0], BB[-pz[28]] = 'QHe3=0qg[RtdVS%s!b9nf`K{uvB61Yjh]>/~,NzWxr}?JLyXaGI^&UE*w#5kF;$D"lM.:moP)4+(28<@|_ApiTZ7cCO', BB[pz[25]] = "" + (BB[pz[2]] || ""), BB[pz[27]] = BB[pz[25]].length, BB[-pz[35]] = [], BB[pz[7]] = pz[2], BB[pz[30]] = pz[2], BB[pz[22]] = -pz[0]), BB[pz[26]] = pz[2]; BB[pz[26]] < BB[pz[27]]; BB[pz[26]]++)
              if (BB[pz[5]] = BB[-pz[28]].indexOf(BB[pz[25]][BB[pz[26]]]), BB[pz[5]] !== -pz[0])
                if (BB[pz[22]] < pz[2]) BB[pz[22]] = BB[pz[5]];
                else {
                  kz(BB[pz[22]] += BB[pz[5]] * pz[29], BB[pz[7]] |= BB[pz[22]] << BB[pz[30]], BB[pz[30]] += (BB[pz[22]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                  do {
                    kz(BB[-pz[35]].push(BB[pz[7]] & pz[10]), BB[pz[7]] >>= pz[3], BB[pz[30]] -= pz[3])
                  } while (BB[pz[30]] > pz[22]);
                  BB[pz[22]] = -pz[0]
                } return BB[pz[22]] > -pz[0] && BB[-pz[35]].push((BB[pz[7]] | BB[pz[22]] << BB[pz[30]]) & pz[10]), sz(BB[-pz[35]])
          }(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
        }(77) + pz[62]) return BB[pz[0]] + BB[pz[1]]
    }

    function mz() {}

    function yz(BB, jB, zB, QB = {}, nB, dB, IB, NB) {
      if (dB || (dB = function(BB) {
          return typeof Bz[BB] === pz[17] ? Bz[BB] = nB(jz[BB]) : Bz[BB]
        }), nB || (nB = function(BB) {
          var jB, zB, QB, nB, dB, IB, NB;
          for (kz(jB = "" + (BB || ""), zB = jB.length, QB = [], nB = pz[2], dB = pz[2], IB = -pz[0]), NB = pz[2]; NB < zB; NB++) {
            var uB = '1,})=9#x>|NAhDgR&%K?wHBI2V5M:lUS;i$J]e!o0Of*G.sQ_`E<"djZat^CT6[zvcyPub8Ynr3q{4p/+@~mX7Wk(LF'.indexOf(jB[NB]);
            if (uB !== -pz[0])
              if (IB < pz[2]) IB = uB;
              else {
                kz(IB += uB * pz[29], nB |= IB << dB, dB += (IB & pz[31]) > pz[32] ? pz[33] : pz[34]);
                do {
                  kz(QB.push(nB & pz[10]), nB >>= pz[3], dB -= pz[3])
                } while (dB > pz[22]);
                IB = -pz[0]
              }
          }
          return IB > -pz[0] && QB.push((nB | IB << dB) & pz[10]), sz(QB)
        }), kz(IB = void 0, NB = {
          [dB(79)]: function(...BB) {
            function jB(...BB) {
              return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = function(...BB) {
                for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = 'uLPHcQfAk<|5s$oYGDT.#%01Fz>m{M!)x^tiVn+("UhvdaXW:ZpyRI*/}w`b_J8;6[lEBS,rjq=g&327CKeON?@]4~9', BB[pz[15]] = "" + (BB[pz[2]] || ""), BB[pz[27]] = BB[pz[15]].length, BB[-pz[39]] = [], BB[pz[14]] = pz[2], BB[-pz[38]] = pz[2], BB[pz[37]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[pz[27]]; BB[pz[3]]++)
                  if (BB[pz[36]] = BB[pz[0]].indexOf(BB[pz[15]][BB[pz[3]]]), BB[pz[36]] !== -pz[0])
                    if (BB[pz[37]] < pz[2]) BB[pz[37]] = BB[pz[36]];
                    else {
                      kz(BB[pz[37]] += BB[pz[36]] * pz[29], BB[pz[14]] |= BB[pz[37]] << BB[-pz[38]], BB[-pz[38]] += (BB[pz[37]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                      do {
                        kz(BB[-pz[39]].push(BB[pz[14]] & pz[10]), BB[pz[14]] >>= pz[3], BB[-pz[38]] -= pz[3])
                      } while (BB[-pz[38]] > pz[22]);
                      BB[pz[37]] = -pz[0]
                    } return BB[pz[37]] > -pz[0] && BB[-pz[39]].push((BB[pz[14]] | BB[pz[37]] << BB[-pz[38]]) & pz[10]), sz(BB[-pz[39]])
              }(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
            }
            kz([
              [BB[pz[41]], BB[pz[40]], BB[pz[43]]], BB[-pz[86]]
            ] = az, console[jB(80)]("" + BB[pz[41]][pz[42]](pz[50]) + (jB(81) + jB(82)) + BB[pz[43]][jB(83) + "me"] + jB(84) + BB[pz[40]]))
          }
        }), jB === dB(pz[88]) + dB(pz[28]) && (az = []), jB === dB(87) + dB(pz[32])) {
        function uB() {
          var jB, zB = function(...jB) {
            return az = jB, NB[BB].apply(this)
          };
          return (jB = QB[BB]) && function(...BB) {
            function jB(...BB) {
              for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = '3PGi6@Utpmh<;2,"Lb^VCxO[+WzR`ndq$}1fB~IYA#w?(vZyQc7Ks5|ugSak8e4/r*:F.DJ)0>HM]_9&E=!lXNoT%{j', BB[pz[44]] = "" + (BB[pz[2]] || ""), BB[pz[27]] = BB[pz[44]].length, BB[pz[9]] = [], BB[pz[7]] = pz[2], BB[pz[30]] = pz[2], BB[pz[6]] = -pz[0]), BB[-pz[45]] = pz[2]; BB[-pz[45]] < BB[pz[27]]; BB[-pz[45]]++)
                if (BB[pz[46]] = BB[pz[0]].indexOf(BB[pz[44]][BB[-pz[45]]]), BB[pz[46]] !== -pz[0])
                  if (BB[pz[6]] < pz[2]) BB[pz[6]] = BB[pz[46]];
                  else {
                    kz(BB[pz[6]] += BB[pz[46]] * pz[29], BB[pz[7]] |= BB[pz[6]] << BB[pz[30]], BB[pz[30]] += (BB[pz[6]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                    do {
                      kz(BB[pz[9]].push(BB[pz[7]] & pz[10]), BB[pz[7]] >>= pz[3], BB[pz[30]] -= pz[3])
                    } while (BB[pz[30]] > pz[22]);
                    BB[pz[6]] = -pz[0]
                  } return BB[pz[6]] > -pz[0] && BB[pz[9]].push((BB[pz[7]] | BB[pz[6]] << BB[pz[30]]) & pz[10]), sz(BB[pz[9]])
            }

            function zB(...BB) {
              return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = jB(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
            }
            BB[pz[11]] = pz[2], zB(pz[56]) + "D" in mz && QB();

            function QB(...BB) {
              kz(BB[pz[11]] = pz[2], BB[pz[40]] = function(...jB) {
                return kz(jB[pz[11]] = pz[0], jB[pz[41]] = []), (jB[pz[2]] === pz[0] || jB[pz[2]] >= pz[47]) && BB[pz[0]](jB[pz[41]], [], jB[pz[2]], pz[2]), jB[pz[41]]
              }, BB[pz[0]] = function(...jB) {
                for (jB[pz[11]] = pz[47], jB[pz[47]] = jB[pz[4]]; jB[pz[47]] < jB[pz[1]]; jB[pz[47]]++) {
                  if (jB[pz[0]].length !== jB[pz[47]]) return;
                  for (jB[-pz[48]] = pz[2]; jB[-pz[48]] < jB[pz[1]]; jB[-pz[48]]++) BB[pz[1]](jB[pz[0]], [jB[pz[47]], jB[-pz[48]]]) && (kz(jB[pz[0]].push([jB[pz[47]], jB[-pz[48]]]), BB[pz[0]](jB[pz[2]], jB[pz[0]], jB[pz[1]], jB[pz[47]] + pz[0])), jB[pz[0]].length === jB[pz[1]] && jB[pz[2]].push(BB[pz[14]](jB[pz[0]])), jB[pz[0]].pop())
                }
              }, BB[pz[14]] = function(...BB) {
                for (kz(BB[pz[11]] = pz[0], BB[pz[41]] = [], BB[pz[49]] = BB[pz[2]].length), BB[pz[4]] = pz[2]; BB[pz[4]] < BB[pz[49]]; BB[pz[4]]++)
                  for (BB[pz[41]][BB[pz[4]]] = "", BB[pz[47]] = pz[2]; BB[pz[47]] < BB[pz[49]]; BB[pz[47]]++) BB[pz[41]][BB[pz[4]]] += BB[pz[2]][BB[pz[4]]][pz[0]] === BB[pz[47]] ? "Q" : pz[50];
                return BB[pz[41]]
              }, BB[pz[1]] = function(...BB) {
                for (kz(BB[pz[11]] = pz[1], BB[-pz[52]] = BB[pz[2]].length), BB[-pz[51]] = pz[2]; BB[-pz[51]] < BB[-pz[52]]; BB[-pz[51]]++) {
                  if (BB[pz[2]][BB[-pz[51]]][pz[2]] === BB[pz[0]][pz[2]] || BB[pz[2]][BB[-pz[51]]][pz[0]] === BB[pz[0]][pz[0]]) return pz[53];
                  if (Math.abs((BB[pz[2]][BB[-pz[51]]][pz[2]] - BB[pz[0]][pz[2]]) / (BB[pz[2]][BB[-pz[51]]][pz[0]] - BB[pz[0]][pz[0]])) === pz[0]) return pz[53]
                }
                return !0
              }, console.log(BB[pz[40]]))
            }
          }(zB, jB), zB
        }
        IB = Uz[BB] || (Uz[BB] = uB())
      } else IB = NB[BB]();
      return zB === dB(89) + dB(90) ? {
        [dB(pz[29]) + dB(pz[103])]: IB
      } : IB
    }

    function kz() {
      kz = function() {}
    }
    kz(Bz = {}, jz = ["guDrv4Hf", '`u^S"(DGe7YdqC`qTqx(=N+Q`[uA*K#l>SHRL]wDrd=`e%(WLz|^%$(^&H2', 'p@e("aYEJdF}MX8e1PO^2o9l;nm1i!*`1yT<2NZezI:QQt}MU?#^8ZkAC', ":yS^Q@07dA", "b22TjhyhQ2CqlZU", "^W?iQ2]k@x1Y5(U", 'cWRVM8"NnH~"=k', "^22V9N@V;NY(X6fbmw)L@$CDC", "vj}gD@=UA!w4}P7?Qq`VQ@,D!;/@PC", "2vIV:&q7:S/[,(zWwTU||TmBoUy&2Fq{zTPB=JSi#R`a{KG0(*", "Z_ZS4J[cW!WB5`764n;TS1*", "PNz&,u$k", 'VLg(.^P%PA1<v",d9T%n', "*A;YH$L2/;=", "l7qT<8*", "L4p1R&)af2.DWXR0^[N&~|HeA7FkC{E`e2Ccv|y2Cu.Q7K8eNzv?M", "Q4TYSTp^QAZOPzHW&WT1W_O`3I7az(060?`_U|Z:>[z&vK", '!!B,3&<}]NG^)Q"jQ4E^3^iiA7;g2$6j&qS|GgXq7+/`NXXl""YnR$jeuaY', "(W4gh$EtQ2Vuq5jG?LBV=zMS`Uz:W};zCN6E&]`9x[wW:?L6avlVlvYk", 'VF<WwvvcW+ix`"`q_"#W{e]a@"9&cP"eb2]M]ii<ySZ6.L<elzf#&]dDC', 'vuAM=ez}&"AhM?q`;y?YML{t*$)Y{K&6zLYM?#hj2d|Wv!!lKFn#2S*', "&V5W(&4k", "=2n#yvze_P<Bf", '=<guCS:U#!Z~KK6s,V>YJ:JAVD~;J"?sSynEf9*', '*;3_(&/9E!He3Pp?Izu|91Z<OaNse]IbZ"K]Cq|fSui~oFKzvW~Yr0*', 'i"]T0liT]7', "wudi*(P`.UF/Azse$u1^4X/a@JK5xP1D3VMY9za`ANr(<5wz", '~s$rX#}e<P%%dz3<6uWs?^dUZ7N"]5osUf', "mxw_B)c)V", '+2hs6lW<=R<al}"G!!sc_QI)U"(eD]gw^*', "047rZ@>7,;ATPQyD/T.VCc5hkum9d/w6$qlV)h::X$166{V", ";4A1X#BG*$51p4sj^u]TSi^^yAy^rzLW#qL^!ZmG*7r(,g}wRf", "tW`nV:ba+U`dLaB64nk", "G<Jnj^M},uxiDM,WZT2RN9P`F", "KgIg;4nGg7&S.e|GFj71#ylt*$u^VzV0n7K", '}[D<Sa$cIA(f@zP[[L?ix]"<#Rp+)hxw%v_V%h2j2HTe2FcD"nkT<"4k2a@%*', 'Yl"1|NmBb[|', "*e&c0vQfway;jP?G8TtuM2<SqnJx[L%0vsj,gw07D$+W8`zWdf", 'P=~Y}T&q~u{4,FY<NWA(I(#A]2ys[!WbBAUBtLxfcHH"U(r', "2Kqi)y:85x4P]gr6+!?(t|N<HAX~BLB0fewnS1.qwUE&m4gMfAnTkc*", "owSr9vdG6@R(74tlw<sr7)yh~nctf", "S4icx0*", 's9|_lJQT"P!dXh7wgV}^h$?k', "8s(V$qoq;N3f}0+l.TN_ccq{WAMdDPN`", "rFZY?&?I}N3fagtq%HfT5wO{P!w&C4j<*$S|JoXaa@CnJK", "M9QTlt_B.[", '_@0_P|BUd;Lft}msvK.gk)?^*73%MK102uj&"qyB^n]A5`Kdl2*Vw_*', ":HS^r2y2B", 'n2#L;q/{tS>c9kRzfN?TA09A<PW&{("b,V/E0u~UGH%_W?hz+v6Tbe*', "qj]Y6ZcceD6[1{m<", "VnWg3#gGK$J", '_@}FZQ_<TuUvOQ7DUA9BRq5e%UjKl"+e7c3_=Xo`47!E^"Pll7aR#c#7K', "x2McJ9?kdu~_#hhWxl=(:0|U*!", "p=SW6LUUndt~/}4?e<OWOhgfL[`[}XNjN@fTgTJ9}J$", "U${Wj&l{W7V/8`ez?=1?&caaG[7(x]1wXsj&/Z^^*;0@?g4?gl/EU", "duGij^=}#!PX96Kzp7P^rhD}}Je+06><", "zVE|D2w2DD>CRKlD&yYnqvd<R|8cG5>bb<UB", '@KFr6"F{FIw&*', 'kN3gwX)tHNK:${^s"LGVuq%A6@0sxkYd?jk', "LyLF=XaA=Rm$h(l?Vj>R|qfUFuVXC/edHdo<d", '@liCi@:T2d%N96Id3"wFW_Jl6[N^*Km/HzCcx@~2ISs[[K/wdTZS4w8f', "e?kM:{kbC", "tWB^Y}G2cdI%1{B6~T6#<lKD*7CXTP2qR9h?)&A9.H?", "ib%WNStqk$xjGFl0z49gzgJkzuPM0UPD)sB^V]3e9;AK}Px", '%[qMZ"Gh,N[rN%BzoTf', 'J"2uh4ZUM[rMvK#w:yf', '@"$S":=fq!@_J!v`HvnVbualH!?(f', "/7qM&&*", "ULHTBcl{zI/E(M7wx7tuU|=eW;If[MHj~_oCH488<+w4XgBAHlP^D2$k", '(@!EH{v`NJJt!ZzzzVT(":9^Vr2%/Kl6oWln', "q2`uKS.vku]JWX|e[$ec`2V9ySP[r5m<~K}&q#]AK", "FguW`ZO9mP", '"LF]d{*', "sziR%4}27@4&5$Pl", ")bJ_K($v9A,46/%6rLqYU2DD&R2xf", '2u"ckc`^hurvG/TG{$6T8^)`5"$AkQos@j[rN:*', "FjkilJgiyS)Q7MTq=jTYGijf=@jTvZ@dS21cJTAILU_9f", "wPZ=s+Ke", ";T0W1Q[k", "@)#Zw!K}", "ByR3vCu", '_9"cp(|L', "xwOkr0u", "/rixs/sP", 'X9mO?"xu', "=K/{)[T}", "~S=EM", "z$!xxTQ,", "WwAlg", '3.9"(E%,', ")ID3%", "==arO`o,", "3CB:D", "*1mM55gG", "%|i;NVHf", "99;EcC$)hS", ";,N+l&Qd", "5Z;d", "qjRN+]6SMb3ump", '9d<"=/IZG$&zLp', "gg5N=/xtld:2EN", "@=<@e]:kFLc3~p", "~jv2G3IZxd:$^p", "~G#Nq%kidGw", "#>%eb=Hd", "cV12IGD+", "#?/#Y;=+", "%EX@9", "#?/#{e3L", "v_1k|", "EpaW,k!|,[2jfkOKWIuf([gQnb", 'k.J<xN$"Q]CrJ+tz0iqcFUI!O~', '=S"ZV&(w]g#&1"k]Gu9xGE8SC5', "]u.6I:n", "+3lgAw=Qp", "]u.6I:rV", "CI|l", "cIZaR=rk", "mfR<1YjK%K15b", "y;qLA7fb", "ICUyf", "GGNz^iSb", "y8Q$U", "d$Gi2_x", "z+nX83PL", "F/gi7u,L", "hTMYM", 'CS}"/cfl', "Mf$W[", "`6iJjoPD", "R_BAccgD", "{p|{>hgz{0", "_*$=$", "_*$=#`V9mwh/m"]), kz(zz = function(...BB) {
      kz(BB[pz[11]] = pz[2], BB[pz[15]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], BB[pz[12]] = pz[18], BB[-pz[13]] = []);
      try {
        kz(BB[pz[12]] = Object, BB[-pz[13]][pz[24]]("".__proto__.constructor.name))
      } catch (jz) {}
      BB: for (BB[pz[14]] = pz[2]; BB[pz[14]] < BB[pz[15]][pz[11]]; BB[pz[14]]++) try {
        for (BB[pz[12]] = BB[pz[15]][BB[pz[14]]](), BB[pz[16]] = pz[2]; BB[pz[16]] < BB[-pz[13]][pz[11]]; BB[pz[16]]++)
          if (typeof BB[pz[12]][BB[-pz[13]][BB[pz[16]]]] === pz[17]) continue BB;
        return BB[pz[12]]
      } catch (jz) {}
      return BB[pz[12]] || this
    }() || {}, Qz = zz.TextDecoder, nz = zz.Uint8Array, dz = zz[pz[96]], Iz = zz.String || String, Nz = zz.Array || Array, uz = function() {
      var BB, jB, zB = new Nz(pz[84]);
      return kz(BB = Iz[pz[21]] || Iz.fromCharCode, jB = []),
        function(...QB) {
          for (kz(QB[pz[11]] = pz[0], QB[pz[0]] = pz[18], QB[pz[1]] = pz[18], QB[pz[19]] = QB[pz[2]][pz[11]], jB[pz[11]] = pz[2]), QB[pz[9]] = pz[2]; QB[pz[9]] < QB[pz[19]];) kz(QB[pz[1]] = QB[pz[2]][QB[pz[9]]++], QB[pz[1]] <= pz[81] ? QB[pz[0]] = QB[pz[1]] : QB[pz[1]] <= pz[69] ? QB[pz[0]] = (QB[pz[1]] & pz[83]) << pz[8] | QB[pz[2]][QB[pz[9]]++] & pz[20] : QB[pz[1]] <= pz[75] ? QB[pz[0]] = (QB[pz[1]] & pz[67]) << pz[23] | (QB[pz[2]][QB[pz[9]]++] & pz[20]) << pz[8] | QB[pz[2]][QB[pz[9]]++] & pz[20] : Iz[pz[21]] ? QB[pz[0]] = (QB[pz[1]] & pz[22]) << pz[85] | (QB[pz[2]][QB[pz[9]]++] & pz[20]) << pz[23] | (QB[pz[2]][QB[pz[9]]++] & pz[20]) << pz[8] | QB[pz[2]][QB[pz[9]]++] & pz[20] : (QB[pz[0]] = pz[20], QB[pz[9]] += pz[4]), jB[pz[24]](zB[QB[pz[0]]] || (zB[QB[pz[0]]] = BB(QB[pz[0]]))));
          return jB[pz[42]]("")
        }
    }()), kz(Uz = Object[rz(pz[40])](pz[101]), az = void 0), kz(Rj = (...BB) => {
      function jB(...BB) {
        return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = function(...BB) {
          for (kz(BB[pz[11]] = pz[0], BB[-pz[34]] = 'xLfDGcjKHXhANpJeoFTISQMBnrs7Et);8{$u>b:O/(v9*|~w^W!+q<RkyY1}0,?am[4#g_@3C.ld6i&PU=%V25z]`"Z', BB[pz[1]] = "" + (BB[pz[2]] || ""), BB[pz[27]] = BB[pz[1]].length, BB[pz[47]] = [], BB[pz[55]] = pz[2], BB[pz[30]] = pz[2], BB[pz[22]] = -pz[0]), BB[pz[26]] = pz[2]; BB[pz[26]] < BB[pz[27]]; BB[pz[26]]++)
            if (BB[pz[54]] = BB[-pz[34]].indexOf(BB[pz[1]][BB[pz[26]]]), BB[pz[54]] !== -pz[0])
              if (BB[pz[22]] < pz[2]) BB[pz[22]] = BB[pz[54]];
              else {
                kz(BB[pz[22]] += BB[pz[54]] * pz[29], BB[pz[55]] |= BB[pz[22]] << BB[pz[30]], BB[pz[30]] += (BB[pz[22]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                do {
                  kz(BB[pz[47]].push(BB[pz[55]] & pz[10]), BB[pz[55]] >>= pz[3], BB[pz[30]] -= pz[3])
                } while (BB[pz[30]] > pz[22]);
                BB[pz[22]] = -pz[0]
              } return BB[pz[22]] > -pz[0] && BB[pz[47]].push((BB[pz[55]] | BB[pz[22]] << BB[pz[30]]) & pz[10]), sz(BB[pz[47]])
        }(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
      }
      BB[pz[11]] = pz[0], jB(94) in mz && function(...BB) {
        kz(BB[pz[11]] = pz[2], BB[pz[41]] = function(...BB) {
          for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = BB[pz[2]].length, BB[pz[1]] = [], BB[-pz[56]] = pz[2]), BB[pz[9]] = pz[2]; BB[pz[9]] < BB[pz[0]]; BB[pz[9]]++) BB[pz[1]].push(BB[pz[9]] !== pz[2] && BB[pz[2]][BB[pz[9]]] > BB[pz[2]][BB[pz[9]] - pz[0]] ? BB[pz[1]][BB[pz[9]] - pz[0]] + pz[0] : pz[0]);
          for (BB[pz[14]] = BB[pz[0]] - pz[0]; BB[pz[14]] >= pz[2]; BB[pz[14]]--) BB[pz[14]] !== BB[pz[0]] - pz[0] && BB[pz[2]][BB[pz[14]]] > BB[pz[2]][BB[pz[14]] + pz[0]] && (BB[pz[1]][BB[pz[14]]] = Math.max(BB[pz[1]][BB[pz[14]]], BB[pz[1]][BB[pz[14]] + pz[0]] + pz[0])), BB[-pz[56]] += BB[pz[1]][BB[pz[14]]];
          return BB[-pz[56]]
        }, console.log(BB[pz[41]]))
      }();
      const zB = function(BB) {
          var jB;
          return {
            meta: {
              ...BB.meta,
              formatVersion: Ej.h,
              variation: null !== (jB = BB.meta.variation) && void 0 !== jB ? jB : null
            },
            initialChunks: BB.initialChunks.map((BB => ({
              chunkPos: BB.chunkPos,
              rle: qj(BB.rle),
              sharedBlockData: Dj("sharedBlockData", BB.sharedBlockData)
            }))),
            ticks: BB.ticks.map(bj),
            editState: BB.editState
          }
        }(BB[pz[2]]),
        QB = Qj(Ej[pz[26]]);
      BB[pz[0]] = pz[18];
      try {
        BB[pz[0]] = QB[jB(95)](zB)
      } catch (uz) {
        function uB(...BB) {
          for (kz(BB[pz[11]] = pz[0], BB[-pz[57]] = 'nVdheWpcXlmsUijbODtPAFHYQBZKNfgEMTRSLqCz|G2Io;?Jk$4u.r3+#[1<{0&@`,v*]}7>98=)w6_~:(ya!/%x5^"', BB[pz[15]] = "" + (BB[pz[2]] || ""), BB[pz[4]] = BB[pz[15]].length, BB[pz[47]] = [], BB[-pz[58]] = pz[2], BB[-pz[59]] = pz[2], BB[pz[6]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[pz[4]]; BB[pz[3]]++)
            if (BB[pz[36]] = BB[-pz[57]].indexOf(BB[pz[15]][BB[pz[3]]]), BB[pz[36]] !== -pz[0])
              if (BB[pz[6]] < pz[2]) BB[pz[6]] = BB[pz[36]];
              else {
                kz(BB[pz[6]] += BB[pz[36]] * pz[29], BB[-pz[58]] |= BB[pz[6]] << BB[-pz[59]], BB[-pz[59]] += (BB[pz[6]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                do {
                  kz(BB[pz[47]].push(BB[-pz[58]] & pz[10]), BB[-pz[58]] >>= pz[3], BB[-pz[59]] -= pz[3])
                } while (BB[-pz[59]] > pz[22]);
                BB[pz[6]] = -pz[0]
              } return BB[pz[6]] > -pz[0] && BB[pz[47]].push((BB[-pz[58]] | BB[pz[6]] << BB[-pz[59]]) & pz[10]), sz(BB[pz[47]])
        }

        function UB(...BB) {
          return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = uB(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
        }

        function aB(...BB) {
          kz(BB[pz[11]] = pz[2], BB[pz[41]] = function(...BB) {
            function jB(...BB) {
              return BB[pz[11]] = pz[1], dB(QB(IB(BB[pz[2]]), IB(BB[pz[0]])))
            }

            function zB(...BB) {
              return BB[pz[11]] = pz[4],
                function(...BB) {
                  var jB, zB, QB, nB;
                  for (kz(BB[pz[11]] = pz[1], BB[pz[41]] = BB[pz[0]].length, BB[-pz[78]] = Array()), BB[pz[27]] = Array(Math.ceil(BB[pz[2]].length / pz[1])), jB = pz[2]; jB < BB[pz[27]].length; jB++) BB[pz[27]][jB] = BB[pz[2]].charCodeAt(jB * pz[1]) << pz[3] | BB[pz[2]].charCodeAt(jB * pz[1] + pz[0]);
                  for (; BB[pz[27]].length > pz[2];) {
                    for (kz(nB = Array(), QB = pz[2]), jB = pz[2]; jB < BB[pz[27]].length; jB++) kz(QB = (QB << pz[60]) + BB[pz[27]][jB], zB = Math.floor(QB / BB[pz[41]]), QB -= zB * BB[pz[41]]), (nB.length > pz[2] || zB > pz[2]) && (nB[nB.length] = zB);
                    kz(BB[-pz[78]][BB[-pz[78]].length] = QB, BB[pz[27]] = nB)
                  }
                  for (BB[pz[79]] = "", jB = BB[-pz[78]].length - pz[0]; jB >= pz[2]; jB--) BB[pz[79]] += BB[pz[0]].charAt(BB[-pz[78]][jB]);
                  for (BB[pz[14]] = Math.ceil(BB[pz[2]].length * pz[3] / (Math.log(BB[pz[0]].length) / Math.log(pz[1]))), jB = BB[pz[79]].length; jB < BB[pz[14]]; jB++) BB[pz[79]] = BB[pz[0]][pz[2]] + BB[pz[79]];
                  return BB[pz[79]]
                }(QB(IB(BB[pz[2]]), IB(BB[pz[0]])), BB[pz[1]])
            }

            function QB(...BB) {
              kz(BB[pz[11]] = pz[1], BB[pz[1]] = NB(BB[pz[2]])), BB[pz[1]].length > pz[60] && (BB[pz[1]] = GB(BB[pz[1]], BB[pz[2]].length * pz[3]));
              var jB = Array(pz[60]),
                zB = Array(pz[60]);
              for (BB[-pz[61]] = pz[2]; BB[-pz[61]] < pz[60]; BB[-pz[61]]++) kz(jB[BB[-pz[61]]] = 909522486 ^ BB[pz[1]][BB[-pz[61]]], zB[BB[-pz[61]]] = 1549556828 ^ BB[pz[1]][BB[-pz[61]]]);
              return BB[pz[47]] = GB(jB.concat(NB(BB[pz[0]])), pz[63] + BB[pz[0]].length * pz[3]), uB(GB(zB.concat(BB[pz[47]]), Jz(UB(104) + pz[62], pz[63], 256)))
            }

            function nB(...jB) {
              function QB(...BB) {
                return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = function(...BB) {
                  for (kz(BB[pz[11]] = pz[0], BB[pz[41]] = 'R+LWlSFjwXTE_<3DK9()C[JZ*|~#6sBvch{iG]g"/=aA4;>0Vu&@:k8^nH75xQq$I?rmezy2!}Mp.NoYUtO`1dPf,b%', BB[pz[1]] = "" + (BB[pz[2]] || ""), BB[pz[27]] = BB[pz[1]].length, BB[pz[47]] = [], BB[pz[7]] = pz[2], BB[pz[30]] = pz[2], BB[pz[64]] = -pz[0]), BB[pz[56]] = pz[2]; BB[pz[56]] < BB[pz[27]]; BB[pz[56]]++)
                    if (BB[pz[5]] = BB[pz[41]].indexOf(BB[pz[1]][BB[pz[56]]]), BB[pz[5]] !== -pz[0])
                      if (BB[pz[64]] < pz[2]) BB[pz[64]] = BB[pz[5]];
                      else {
                        kz(BB[pz[64]] += BB[pz[5]] * pz[29], BB[pz[7]] |= BB[pz[64]] << BB[pz[30]], BB[pz[30]] += (BB[pz[64]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                        do {
                          kz(BB[pz[47]].push(BB[pz[7]] & pz[10]), BB[pz[7]] >>= pz[3], BB[pz[30]] -= pz[3])
                        } while (BB[pz[30]] > pz[22]);
                        BB[pz[64]] = -pz[0]
                      } return BB[pz[64]] > -pz[0] && BB[pz[47]].push((BB[pz[7]] | BB[pz[64]] << BB[pz[30]]) & pz[10]), sz(BB[pz[47]])
                }(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
              }
              jB[pz[11]] = pz[0];
              try {
                BB[pz[41]]
              } catch (zB) {
                BB[pz[41]] = pz[2]
              }
              for (kz(jB[pz[0]] = BB[pz[41]] ? QB(pz[65]) + QB(106) + QB(107) : QB(pz[65]) + QB(108) + QB(pz[46]), jB[pz[1]] = "", jB[pz[27]] = pz[18]), jB[-pz[66]] = pz[2]; jB[-pz[66]] < jB[pz[2]].length; jB[-pz[66]]++) kz(jB[pz[27]] = jB[pz[2]].charCodeAt(jB[-pz[66]]), jB[pz[1]] += jB[pz[0]].charAt(jB[pz[27]] >>> pz[47] & pz[67]) + jB[pz[0]].charAt(jB[pz[27]] & pz[67]));
              return jB[pz[1]]
            }

            function dB(...jB) {
              function QB(BB) {
                return typeof Bz[BB] === pz[17] ? Bz[BB] = function(...BB) {
                  for (kz(BB[pz[11]] = pz[0], BB[pz[70]] = 'DeKXBP`5ycZLH"R)Y]d~3T#WJM0}[i<v2h1$z4EpqwAQn?s{%xfSroCVua@k|b9Nt.gm_Ol,j6IGU/78=;&+>:!F*(^', BB[pz[68]] = "" + (BB[pz[2]] || ""), BB[pz[4]] = BB[pz[68]].length, BB[-pz[69]] = [], BB[pz[72]] = pz[2], BB[pz[8]] = pz[2], BB[-pz[71]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[pz[4]]; BB[pz[3]]++)
                    if (BB[pz[5]] = BB[pz[70]].indexOf(BB[pz[68]][BB[pz[3]]]), BB[pz[5]] !== -pz[0])
                      if (BB[-pz[71]] < pz[2]) BB[-pz[71]] = BB[pz[5]];
                      else {
                        kz(BB[-pz[71]] += BB[pz[5]] * pz[29], BB[pz[72]] |= BB[-pz[71]] << BB[pz[8]], BB[pz[8]] += (BB[-pz[71]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                        do {
                          kz(BB[-pz[69]].push(BB[pz[72]] & pz[10]), BB[pz[72]] >>= pz[3], BB[pz[8]] -= pz[3])
                        } while (BB[pz[8]] > pz[22]);
                        BB[-pz[71]] = -pz[0]
                      } return BB[-pz[71]] > -pz[0] && BB[-pz[69]].push((BB[pz[72]] | BB[-pz[71]] << BB[pz[8]]) & pz[10]), sz(BB[-pz[69]])
                }(jz[BB]) : Bz[BB]
              }
              jB[pz[11]] = pz[0];
              try {
                BB[pz[15]]
              } catch (zB) {
                BB[pz[15]] = ""
              }
              for (kz(jB[-pz[77]] = UB(110) + QB(111) + QB(112) + "/", jB[-pz[76]] = "", jB[-pz[74]] = jB[pz[2]].length), jB[-pz[73]] = pz[2]; jB[-pz[73]] < jB[-pz[74]]; jB[-pz[73]] += pz[4])
                for (jB[pz[7]] = jB[pz[2]].charCodeAt(jB[-pz[73]]) << pz[60] | (jB[-pz[73]] + pz[0] < jB[-pz[74]] ? jB[pz[2]].charCodeAt(jB[-pz[73]] + pz[0]) << pz[3] : pz[2]) | (jB[-pz[73]] + pz[1] < jB[-pz[74]] ? jB[pz[2]].charCodeAt(jB[-pz[73]] + pz[1]) : pz[2]), jB[-pz[75]] = pz[2]; jB[-pz[75]] < pz[47]; jB[-pz[75]]++) jB[-pz[73]] * pz[3] + jB[-pz[75]] * pz[8] > jB[pz[2]].length * pz[3] ? jB[-pz[76]] += BB[pz[15]] : jB[-pz[76]] += jB[-pz[77]].charAt(jB[pz[7]] >>> pz[8] * (pz[4] - jB[-pz[75]]) & pz[20]);
              return jB[-pz[76]]
            }

            function IB(...BB) {
              var jB, zB;
              for (kz(BB[pz[11]] = pz[0], BB[-pz[82]] = "", BB[pz[1]] = -pz[0]); ++BB[pz[1]] < BB[pz[2]].length;) kz(jB = BB[pz[2]].charCodeAt(BB[pz[1]]), zB = BB[pz[1]] + pz[0] < BB[pz[2]].length ? BB[pz[2]].charCodeAt(BB[pz[1]] + pz[0]) : pz[2]), 55296 <= jB && jB <= 56319 && 56320 <= zB && zB <= 57343 && kz(jB = 65536 + ((jB & pz[80]) << pz[90]) + (zB & pz[80]), BB[pz[1]]++), jB <= pz[81] ? BB[-pz[82]] += String.fromCharCode(jB) : jB <= 2047 ? BB[-pz[82]] += String.fromCharCode(192 | jB >>> pz[8] & pz[83], pz[84] | jB & pz[20]) : jB <= pz[94] ? BB[-pz[82]] += String.fromCharCode(pz[25] | jB >>> pz[23] & pz[67], pz[84] | jB >>> pz[8] & pz[20], pz[84] | jB & pz[20]) : jB <= 2097151 && (BB[-pz[82]] += String.fromCharCode(240 | jB >>> pz[85] & pz[22], pz[84] | jB >>> pz[23] & pz[20], pz[84] | jB >>> pz[8] & pz[20], pz[84] | jB & pz[20]));
              return BB[-pz[82]]
            }

            function NB(...BB) {
              for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = Array(BB[pz[2]].length >> pz[1])), BB[-pz[88]] = pz[2]; BB[-pz[88]] < BB[pz[0]].length; BB[-pz[88]]++) BB[pz[0]][BB[-pz[88]]] = pz[2];
              for (BB[-pz[88]] = pz[2]; BB[-pz[88]] < BB[pz[2]].length * pz[3]; BB[-pz[88]] += pz[3]) BB[pz[0]][BB[-pz[88]] >> pz[7]] |= (BB[pz[2]].charCodeAt(BB[-pz[88]] / pz[3]) & pz[10]) << pz[89] - BB[-pz[88]] % pz[76];
              return BB[pz[0]]
            }

            function uB(BB) {
              var jB, zB = "";
              for (jB = pz[2]; jB < BB.length * pz[76]; jB += pz[3]) zB += String.fromCharCode(BB[jB >> pz[7]] >>> pz[89] - jB % pz[76] & pz[10]);
              return zB
            }

            function aB(...BB) {
              return BB[pz[11]] = pz[1], BB[pz[2]] >>> BB[pz[0]] | BB[pz[2]] << pz[76] - BB[pz[0]]
            }

            function pB(...BB) {
              return BB[pz[11]] = pz[1], BB[pz[2]] >>> BB[pz[0]]
            }

            function rB(...BB) {
              return BB[pz[11]] = pz[4], BB[pz[2]] & BB[pz[0]] ^ ~BB[pz[2]] & BB[pz[1]]
            }

            function sB(...BB) {
              return BB[pz[11]] = pz[4], BB[pz[2]] & BB[pz[0]] ^ BB[pz[2]] & BB[pz[1]] ^ BB[pz[0]] & BB[pz[1]]
            }

            function JB(...BB) {
              return BB[pz[11]] = pz[0], aB(BB[pz[2]], pz[1]) ^ aB(BB[pz[2]], pz[33]) ^ aB(BB[pz[2]], pz[54])
            }

            function mB(BB) {
              return aB(BB, pz[8]) ^ aB(BB, 11) ^ aB(BB, pz[73])
            }

            function yB(...BB) {
              return BB[pz[11]] = pz[0], aB(BB[pz[2]], pz[22]) ^ aB(BB[pz[2]], pz[85]) ^ pB(BB[pz[2]], pz[4])
            }

            function kB(...BB) {
              return BB[pz[11]] = pz[0], aB(BB[pz[2]], 17) ^ aB(BB[pz[2]], pz[91]) ^ pB(BB[pz[2]], pz[90])
            }

            function GB(...jB) {
              var zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, GB, gB;
              for (kz(jB[pz[11]] = pz[1], jB[pz[93]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), jB[pz[4]] = new Array(pz[92])), kz(jB[pz[2]][jB[pz[0]] >> pz[7]] |= pz[84] << pz[89] - jB[pz[0]] % pz[76], jB[pz[2]][(jB[pz[0]] + pz[92] >> pz[5] << pz[47]) + pz[67]] = jB[pz[0]]), aB = pz[2]; aB < jB[pz[2]].length; aB += pz[60]) {
                for (kz(zB = jB[pz[93]][pz[2]], QB = jB[pz[93]][pz[0]], nB = jB[pz[93]][pz[1]], dB = jB[pz[93]][pz[4]], IB = jB[pz[93]][pz[47]], NB = jB[pz[93]][pz[7]], uB = jB[pz[93]][pz[8]], UB = jB[pz[93]][pz[22]]), pB = pz[2]; pB < pz[92]; pB++) kz(pB < pz[60] ? jB[pz[4]][pB] = jB[pz[2]][pB + aB] : jB[pz[4]][pB] = LB(LB(LB(kB(jB[pz[4]][pB - pz[1]]), jB[pz[4]][pB - pz[22]]), yB(jB[pz[4]][pB - pz[67]])), jB[pz[4]][pB - pz[60]]), GB = LB(LB(LB(LB(UB, mB(IB)), rB(IB, NB, uB)), BB[pz[27]][pB]), jB[pz[4]][pB]), gB = LB(JB(zB), sB(zB, QB, nB)), UB = uB, uB = NB, NB = IB, IB = LB(dB, GB), dB = nB, nB = QB, QB = zB, zB = LB(GB, gB));
                kz(jB[pz[93]][pz[2]] = LB(zB, jB[pz[93]][pz[2]]), jB[pz[93]][pz[0]] = LB(QB, jB[pz[93]][pz[0]]), jB[pz[93]][pz[1]] = LB(nB, jB[pz[93]][pz[1]]), jB[pz[93]][pz[4]] = LB(dB, jB[pz[93]][pz[4]]), jB[pz[93]][pz[47]] = LB(IB, jB[pz[93]][pz[47]]), jB[pz[93]][pz[7]] = LB(NB, jB[pz[93]][pz[7]]), jB[pz[93]][pz[8]] = LB(uB, jB[pz[93]][pz[8]]), jB[pz[93]][pz[22]] = LB(UB, jB[pz[93]][pz[22]]))
              }
              return jB[pz[93]]
            }

            function LB(...BB) {
              return kz(BB[pz[11]] = pz[1], BB[pz[1]] = (BB[pz[2]] & pz[94]) + (BB[pz[0]] & pz[94]), BB[pz[4]] = (BB[pz[2]] >> pz[60]) + (BB[pz[0]] >> pz[60]) + (BB[pz[1]] >> pz[60])), BB[pz[4]] << pz[60] | BB[pz[1]] & pz[94]
            }
            return kz(BB[pz[11]] = pz[2], BB[pz[41]] = pz[2], BB[pz[15]] = ""), BB[pz[27]] = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: function(...BB) {
                return BB[pz[11]] = pz[0], nB(function(BB) {
                  return uB(GB(NB(BB), BB.length * pz[3]))
                }(IB(BB[pz[2]])))
              },
              b64: jB,
              any: zB,
              hex_hmac: function(...BB) {
                return BB[pz[11]] = pz[1], nB(QB(IB(BB[pz[2]]), IB(BB[pz[0]])))
              },
              b64_hmac: jB,
              any_hmac: zB
            }
          }(), console.log(BB[pz[41]]))
        }
        throw UB(96) + "0" in mz && aB(), kz(console[UB(113)](zB), QB[UB(pz[77])](zB, {
          [UB(115) + UB(116)](...BB) {
            function jB(BB) {
              return typeof Bz[BB] === pz[17] ? Bz[BB] = function(...BB) {
                for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = '{bkIGqZheFEJKUMl4frDRuQCB!#O$t9+?&[02)=S3^](X;j.Hi7/L5paN*>8PTYn~m%,v`}dgzy|@<wx:c16"sWVAo_', BB[pz[1]] = "" + (BB[pz[2]] || ""), BB[-pz[95]] = BB[pz[1]].length, BB[pz[9]] = [], BB[pz[14]] = pz[2], BB[pz[30]] = pz[2], BB[pz[6]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[-pz[95]]; BB[pz[3]]++)
                  if (BB[pz[36]] = BB[pz[0]].indexOf(BB[pz[1]][BB[pz[3]]]), BB[pz[36]] !== -pz[0])
                    if (BB[pz[6]] < pz[2]) BB[pz[6]] = BB[pz[36]];
                    else {
                      kz(BB[pz[6]] += BB[pz[36]] * pz[29], BB[pz[14]] |= BB[pz[6]] << BB[pz[30]], BB[pz[30]] += (BB[pz[6]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                      do {
                        kz(BB[pz[9]].push(BB[pz[14]] & pz[10]), BB[pz[14]] >>= pz[3], BB[pz[30]] -= pz[3])
                      } while (BB[pz[30]] > pz[22]);
                      BB[pz[6]] = -pz[0]
                    } return BB[pz[6]] > -pz[0] && BB[pz[9]].push((BB[pz[14]] | BB[pz[6]] << BB[pz[30]]) & pz[10]), sz(BB[pz[9]])
              }(jz[BB]) : Bz[BB]
            }
            return az = [BB, {}], yz(jB(pz[45]), jB(pz[66]), jB(119) + jB(120))[jB(121) + jB(122)]
          }
        })), uz
      }
      const nB = Ij(Ej[pz[26]], BB[pz[0]]),
        IB = dB[pz[96]][jB(123)](pz[47]);
      return IB[jB(124) + jB(125) + "E"](Ej[pz[26]]), dB[pz[96]].concat([IB, nB])
    }, Oj = (...BB) => {
      function jB(BB) {
        return typeof Bz[BB] === pz[17] ? Bz[BB] = function(...BB) {
          for (kz(BB[pz[11]] = pz[0], BB[pz[0]] = '?DlHKjmEJ+Wa;u(6&p=Nf$7z2y[Fb`L{"vTUkC)]<YZRn8qgBA4i9c>PG_!so#,X0*/}^xIShdrweQ3@V%MOt5.1|~:', BB[pz[15]] = "" + (BB[pz[2]] || ""), BB[-pz[97]] = BB[pz[15]].length, BB[-pz[100]] = [], BB[-pz[98]] = pz[2], BB[-pz[99]] = pz[2], BB[pz[22]] = -pz[0]), BB[pz[3]] = pz[2]; BB[pz[3]] < BB[-pz[97]]; BB[pz[3]]++)
            if (BB[pz[36]] = BB[pz[0]].indexOf(BB[pz[15]][BB[pz[3]]]), BB[pz[36]] !== -pz[0])
              if (BB[pz[22]] < pz[2]) BB[pz[22]] = BB[pz[36]];
              else {
                kz(BB[pz[22]] += BB[pz[36]] * pz[29], BB[-pz[98]] |= BB[pz[22]] << BB[-pz[99]], BB[-pz[99]] += (BB[pz[22]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                do {
                  kz(BB[-pz[100]].push(BB[-pz[98]] & pz[10]), BB[-pz[98]] >>= pz[3], BB[-pz[99]] -= pz[3])
                } while (BB[-pz[99]] > pz[22]);
                BB[pz[22]] = -pz[0]
              } return BB[pz[22]] > -pz[0] && BB[-pz[100]].push((BB[-pz[98]] | BB[pz[22]] << BB[-pz[99]]) & pz[10]), sz(BB[-pz[100]])
        }(jz[BB]) : Bz[BB]
      }
      BB[pz[11]] = pz[0];
      const zB = dB[pz[96]][rz(126)](BB[pz[2]]),
        QB = zB[jB(pz[81]) + jB(pz[84])] >= pz[47] ? zB[jB(129) + jB(130)](pz[2]) : pz[101];
      if (QB !== pz[101] && (pz[2], ij.j)(QB)) {
        function IB(...BB) {
          for (kz(BB[pz[11]] = pz[0], BB[pz[102]] = 'AmuBx1U:zeHQg?|q%7].v0^8j56$4<V{=!MN9oZk>}ct@E`(2L3*)JnaFDIKp"Twd#[+X_/~Py&,;iGRhsWYCrOSflb', BB[-pz[104]] = "" + (BB[pz[2]] || ""), BB[pz[103]] = BB[-pz[104]].length, BB[pz[9]] = [], BB[-pz[106]] = pz[2], BB[pz[30]] = pz[2], BB[pz[22]] = -pz[0]), BB[pz[105]] = pz[2]; BB[pz[105]] < BB[pz[103]]; BB[pz[105]]++)
            if (BB[pz[36]] = BB[pz[102]].indexOf(BB[-pz[104]][BB[pz[105]]]), BB[pz[36]] !== -pz[0])
              if (BB[pz[22]] < pz[2]) BB[pz[22]] = BB[pz[36]];
              else {
                kz(BB[pz[22]] += BB[pz[36]] * pz[29], BB[-pz[106]] |= BB[pz[22]] << BB[pz[30]], BB[pz[30]] += (BB[pz[22]] & pz[31]) > pz[32] ? pz[33] : pz[34]);
                do {
                  kz(BB[pz[9]].push(BB[-pz[106]] & pz[10]), BB[-pz[106]] >>= pz[3], BB[pz[30]] -= pz[3])
                } while (BB[pz[30]] > pz[22]);
                BB[pz[22]] = -pz[0]
              } return BB[pz[22]] > -pz[0] && BB[pz[9]].push((BB[-pz[106]] | BB[pz[22]] << BB[pz[30]]) & pz[10]), sz(BB[pz[9]])
        }

        function NB(...BB) {
          return BB[pz[11]] = pz[0], typeof Bz[BB[pz[2]]] === pz[17] ? Bz[BB[pz[2]]] = IB(jz[BB[pz[2]]]) : Bz[BB[pz[2]]]
        }
        const uB = zB[NB(131)](pz[47]),
          UB = dj(QB) ? dB[pz[96]][NB(132)](Nj(QB, uB)) : uB;
        return function(BB) {
          var jB, zB, QB, dB, IB;
          const NB = null === (jB = BB.meta) || void 0 === jB ? void 0 : jB.formatVersion;
          if (!(0, ij.j)(NB)) throw new Error(`Unsupported recording format version: ${NB}`);
          if (!Array.isArray(BB.initialChunks) || !Array.isArray(BB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
          for (const nB of BB.ticks)
            if (!Array.isArray(nB.structuralEvents) || !Array.isArray(nB.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
          const uB = {
            ...BB.meta
          };
          return uB.formatVersion = Ej.h, (0, nB.I)(uB.variation) && delete uB.variation, {
            meta: uB,
            initialChunks: BB.initialChunks.map((BB => {
              var jB;
              return {
                chunkPos: BB.chunkPos,
                rle: fj(BB.rle),
                sharedBlockData: null !== (jB = Fj("sharedBlockData", BB.sharedBlockData)) && void 0 !== jB ? jB : []
              }
            })),
            ticks: BB.ticks.map(vj),
            editState: {
              cameraKeyframes: null !== (zB = null === (QB = BB.editState) || void 0 === QB ? void 0 : QB.cameraKeyframes) && void 0 !== zB ? zB : [],
              playbackMark: null !== (dB = null === (IB = BB.editState) || void 0 === IB ? void 0 : IB.playbackMark) && void 0 !== dB ? dB : null
            }
          }
        }(Qj(QB)[NB(133)](UB))
      }
      throw new Ej[pz[36]](QB)
    })
  },
  37050: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB,
      h: () => nB,
      i: () => dB,
      k: () => pB,
      m: () => rB,
      p: () => UB,
      t: () => sB,
      v: () => uB,
      x: () => aB,
      y: () => NB
    });
    var QB = zB(37059);
    const nB = 9;
    class dB extends Error {
      constructor(BB) {
        super(`Unsupported recording format: header ${null!==BB&&void 0!==BB?BB:"missing"}, reading v${QB.b.join(", v")}`), this.older = void 0, this.older = (0, QB.f)(BB)
      }
    }
    const IB = 100,
      NB = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      uB = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      UB = ["itemName", "amount", "position", "size", "attributes"],
      aB = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      pB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "RY", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      rB = ["selectedSlotIndex", "slots"],
      sB = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  37046: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => pB,
      d: () => JB,
      h: () => uB,
      i: () => IB,
      k: () => NB,
      o: () => UB
    });
    var QB = zB(376),
      nB = zB(31);

    function dB(BB) {
      return null === BB || void 0 === BB ? null : "string" === typeof BB ? BB : null
    }

    function IB(BB, jB) {
      return JSON.stringify(BB) === JSON.stringify(jB)
    }

    function NB(BB) {
      const jB = [];
      for (const zB of Object.keys(BB)) {
        const QB = BB[zB];
        for (const BB of Object.keys(QB)) jB.push({
          VB: zB,
          name: BB,
          ...QB[BB]
        })
      }
      return jB
    }

    function uB(BB) {
      const jB = {};
      for (const dB of BB) {
        var zB, QB, nB;
        jB[dB.VB] || (jB[dB.VB] = {}), jB[dB.VB][dB.name] = {
          icon: dB.icon,
          level: dB.level,
          displayName: null !== (zB = dB.displayName) && void 0 !== zB ? zB : null,
          endTick: null !== (QB = dB.endTick) && void 0 !== QB ? QB : null,
          showInNametag: null === (nB = dB.showInNametag) || void 0 === nB || nB
        }
      }
      return jB
    }

    function UB(BB, jB) {
      const zB = {};
      for (const nB of Object.keys(BB)) {
        const dB = {};
        for (const zB of Object.keys(BB[nB])) {
          const QB = BB[nB][zB];
          null !== QB.endTick && QB.endTick < jB || (dB[zB] = {
            ...QB,
            endTick: null === QB.endTick ? null : QB.endTick - jB
          })
        }(0, QB.Ac)(dB) || (zB[nB] = dB)
      }
      return zB
    }

    function aB(BB, jB, zB) {
      if (null !== BB) return Math.max(0, 1e3 * (BB - jB) / zB)
    }
    class pB {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(BB, jB) {
        this.clear();
        const zB = Date.now();
        for (const NB of BB.iterateEntityIds()) {
          const uB = BB.getEffects(NB);
          if ((0, QB.Ac)(uB)) continue;
          const UB = jB(NB);
          for (const BB of Object.keys(uB)) {
            var nB, IB;
            const jB = uB[BB];
            this.upsert(UB, BB, {
              icon: jB.icon,
              level: jB.level,
              displayName: dB(jB.displayName),
              showInNametag: null === (nB = jB.showInNametag) || void 0 === nB || nB,
              endTime: void 0 !== jB.duration && null !== jB.duration ? (null !== (IB = jB.appliedAt) && void 0 !== IB ? IB : zB) + jB.duration : null
            })
          }
        }
      }
      upsert(BB, jB, zB) {
        this.tracked[BB] || (this.tracked[BB] = {}), this.tracked[BB][jB] = zB
      }
      remove(BB, jB) {
        const zB = this.tracked[BB];
        zB && (delete zB[jB], (0, QB.Ac)(zB) && delete this.tracked[BB])
      }
      handleUpdate(BB) {
        var jB;
        0 !== BB.duration ? this.upsert(BB.VB, BB.name, {
          icon: BB.icon,
          level: BB.level,
          displayName: dB(BB.displayName),
          showInNametag: null === (jB = BB.showInNametag) || void 0 === jB || jB,
          endTime: void 0 !== BB.duration && null !== BB.duration ? Date.now() + BB.duration : null
        }) : this.remove(BB.VB, BB.name)
      }
      handleRemove(BB, jB) {
        this.remove(BB, jB)
      }
      sample(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const nB = {},
          dB = 1e3 / jB;
        for (const IB of Object.keys(this.tracked)) {
          const jB = this.tracked[IB],
            NB = {};
          for (const QB of Object.keys(jB)) {
            const nB = jB[QB];
            let uB = null;
            if (null !== nB.endTime) {
              const jB = Math.max(0, nB.endTime - zB);
              if (0 === jB) {
                this.remove(IB, QB);
                continue
              }
              uB = BB + Math.ceil(jB / dB)
            }
            NB[QB] = {
              icon: nB.icon,
              level: nB.level,
              displayName: nB.displayName,
              endTick: uB,
              showInNametag: nB.showInNametag
            }
          }(0, QB.Ac)(NB) || (nB[IB] = NB)
        }
        return nB
      }
    }

    function rB(BB, jB, zB, QB) {
      BB.hasEntity(jB) ? BB.updateEffect(jB, zB, QB) : function(BB, jB, zB) {
        nB.n.Ly("EffectUpdate", {
          VB: BB,
          name: jB,
          ...zB
        }, !0)
      }(jB, zB, QB)
    }

    function sB(BB, jB, zB) {
      BB.hasEntity(jB) ? BB.removeEffect(jB, zB) : function(BB, jB) {
        nB.n.Ly("RemoveEffect", {
          VB: BB,
          name: jB
        }, !0)
      }(jB, zB)
    }

    function JB(BB, jB, zB, QB, nB, dB, IB) {
      for (const aB of Object.keys(zB))
        for (const dB of Object.keys(zB[aB])) {
          var NB;
          null !== (NB = jB[aB]) && void 0 !== NB && NB[dB] || (sB(BB, aB, dB), QB && aB === QB && String(nB) !== String(aB) && sB(BB, nB, dB))
        }
      for (const mB of Object.keys(jB))
        for (const NB of Object.keys(jB[mB])) {
          var uB, UB;
          const yB = jB[mB][NB],
            kB = aB(yB.endTick, dB, IB);
          if (0 === kB) {
            sB(BB, mB, NB), QB && mB === QB && String(nB) !== String(mB) && sB(BB, nB, NB);
            continue
          }
          const GB = null === (uB = zB[mB]) || void 0 === uB ? void 0 : uB[NB],
            LB = GB && (JB = yB, (pB = GB).icon === JB.icon && pB.level === JB.level && pB.displayName === JB.displayName && pB.endTick === JB.endTick && pB.showInNametag === JB.showInNametag),
            gB = {
              icon: yB.icon,
              level: yB.level,
              displayName: null !== (UB = yB.displayName) && void 0 !== UB ? UB : void 0,
              duration: kB,
              showInNametag: yB.showInNametag
            };
          LB || rB(BB, mB, NB, gB), QB && mB === QB && rB(BB, nB, NB, {
            ...gB,
            showInNametag: !1
          })
        }
      var pB, JB
    }
  },
  37031: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      f: () => UB,
      g: () => rB,
      k: () => NB,
      n: () => pB
    });
    var QB = zB(37023),
      nB = zB(37037),
      dB = zB(328);
    const IB = {
      description: "Bloxd Replay",
      accept: {
        [QB.f]: QB.b
      }
    };

    function NB() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker && !(0, dB.d)()
    }

    function uB(BB) {
      return BB instanceof DOMException && "AbortError" === BB.name
    }
    async function UB() {
      try {
        const [BB] = await window.showOpenFilePicker({
          multiple: !1,
          types: [IB]
        }), jB = await BB.getFile();
        return {
          handle: BB,
          bytes: new Uint8Array(await jB.arrayBuffer())
        }
      } catch (BB) {
        if (uB(BB)) return null;
        throw BB
      }
    }
    async function aB(BB) {
      if (BB && await async function(BB) {
          const jB = {
            mode: "readwrite"
          };
          return "granted" === await BB.queryPermission(jB) || "granted" === await BB.requestPermission(jB)
        }(BB)) return BB;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, QB.i)(),
          types: [IB]
        })
      } catch (jB) {
        if (uB(jB)) return null;
        throw jB
      }
    }
    async function pB(BB, jB) {
      const zB = await BB.createWritable();
      await zB.write(new Blob([jB], {
        type: QB.f
      })), await zB.close()
    }

    function rB(BB) {
      return (0, QB.h)((0, nB.f)(BB))
    }
  },
  36522: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => pB
    });
    var QB = zB(28),
      nB = zB(106),
      dB = zB(41),
      IB = zB(3673),
      NB = zB(3572),
      uB = zB(6606);
    const UB = "shaderPackListingCheckedAt",
      aB = 36e5;

    function pB() {
      const {
        canUseShaderPacks: BB
      } = nB.featureFlags.settings;
      var jB, pB;
      (0, NB.o)(BB) && !(0, NB.k)(BB) && (jB = dB.j.getItem(UB), pB = Date.now(), "number" !== typeof jB || pB < jB || pB - jB >= aB) && (0, IB.c)((() => {
        (async function() {
          if ("landingPage" !== QB.c.get("gameState")) return;
          const BB = await (0, uB.h)();
          if (void 0 === (null === BB || void 0 === BB ? void 0 : BB.listing)) return;
          dB.j.setItem(UB, Date.now());
          const {
            followListingUpdates: jB
          } = await Promise.all([zB.e(78), zB.e(136), zB.e(132)]).then((() => zB(41383)));
          await jB(BB, BB.listing) || dB.j.removeItem(UB)
        })().catch((BB => {
          console.error("Failed to check the shader pack listing for an update", BB)
        }))
      }))
    }
  },
  8953: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => NB,
      f: () => nB,
      i: () => dB,
      m: () => IB
    });
    let QB = null;

    function nB(BB, jB) {
      return `${jB}\n${null!==BB&&void 0!==BB?BB:""}`
    }

    function dB(BB) {
      QB = BB
    }

    function IB(BB) {
      const jB = QB;
      return QB = null, null !== jB && jB.key === BB ? jB.settled : null
    }

    function NB(BB, jB, zB, QB) {
      let nB = !1;
      null !== jB && setTimeout((() => {
        QB() && !nB && jB()
      }), 0), BB.then((BB => {
        nB = !0, zB(BB)
      }))
    }
  },
  36570: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB
    });
    var QB = zB(363),
      nB = zB(28),
      dB = zB(36574),
      IB = zB(1664),
      NB = zB(2033);

    function uB(BB, jB) {
      var zB, uB, UB;
      if (!nB.c.get("isKeydownEnabled") || BB.repeat) return;
      const aB = BB.code;
      "Escape" === BB.key ? (0, IB.e)(BB) : null !== (zB = NB.w.OpenSettings) && void 0 !== zB && zB.includes(aB) ? (0, IB.t)(BB, QB.o.SETTINGS) : null !== (uB = NB.w.OpenCharacterCustomization) && void 0 !== uB && uB.includes(aB) ? (0, dB.b)() || (0, IB.t)(BB, QB.o.CUSTOMISATION, jB()) : null !== (UB = NB.w.ShowDebugOverlay) && void 0 !== UB && UB.includes(aB) && nB.c.set({
        showDebugOverlay: !nB.c.get("showDebugOverlay")
      })
    }
  },
  36530: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => VB,
      g: () => AB
    });
    var QB = zB(658),
      nB = zB(1265),
      dB = zB(174);
    const IB = "cf-";

    function NB(BB) {
      return `${IB}${BB}`
    }

    function uB(BB) {
      return BB.startsWith(NB("game-server-"))
    }

    function UB(BB) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(BB)
    }
    var aB = zB(1277),
      pB = zB(1263),
      rB = zB(31),
      sB = zB(1253),
      JB = zB(1817),
      mB = zB(1859),
      yB = zB(3064),
      kB = zB(1343),
      GB = zB(1357),
      LB = zB(1532),
      gB = zB(1244),
      tB = zB(36533),
      SB = zB(41),
      MB = zB(145),
      EB = zB(1867),
      iB = zB(36568);
    const qB = Date.UTC(2026, 11, 8),
      fB = new Set(["seat_lost", "socket_unopened", "socket_timeout_unopened"]),
      oB = "gameServerRoute";
    async function HB(BB) {
      if (!BB.ok) {
        const jB = await BB.text().catch((() => ""));
        return 403 === BB.status && "ipv6_unsupported" === jB ? "ipv6Refused" : "other"
      }
      const jB = await BB.json().catch((() => null));
      return "object" === typeof jB && null !== jB && Number.isFinite(jB.version) ? "ours" : "other"
    }
    const DB = new class {
      constructor(BB) {
        this.deps = BB, this.autoRetriesLeft = 1, this.armReported = !1, this.pageArm = null, this.aliasFailedAt = null
      }
      hostFor(BB) {
        return this.deps.enabled && UB(BB) && "cloudflare" === this.heldRoute() ? NB(BB) : BB
      }
      async afterJoinFailed(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        if (!this.deps.enabled) return null;
        const QB = new URL(BB).hostname;
        return uB(QB) ? await this.afterAliasJoinFailed(QB, jB, zB) : void 0 !== jB.gameServerUnreachable && this.checksJoinsTo(QB) && this.settle(await this.check(QB)) ? "reroute" : null
      }
      takeAutoRetry() {
        return !(this.autoRetriesLeft <= 0) && (this.autoRetriesLeft--, !0)
      }
      async waitToRetry(BB) {
        const jB = 1e3 + 2e3 * this.deps.random();
        return await this.deps.sleep(jB, BB).then((() => !0), (() => !1))
      }
      afterAutoRetryJoined(BB) {
        this.deps.enabled && this.deps.JJ("game_server_route", "cf_retry_joined", BB)
      }
      afterAutoRetryFailed(BB) {
        if (!this.deps.enabled) return;
        if (null === BB) return void this.deps.JJ("game_server_route", "cf_retry_failed:matchmake", 0);
        const {
          joinFailure: jB
        } = BB;
        void 0 === jB ? this.deps.JJ("game_server_route", "cf_retry_failed:other", 0) : "refused" === jB.at ? this.deps.JJ("game_server_route", "cf_retry_failed:refused", jB.code) : this.deps.JJ("game_server_route", `cf_retry_failed:${jB.at}`, jB.code)
      }
      afterMatchmade(BB) {
        var jB;
        if (!this.deps.enabled) return;
        const zB = null === (jB = this.stored()) || void 0 === jB ? void 0 : jB.recoveryArm;
        if (void 0 !== zB && null !== this.heldRoute() && this.reportArm(zB), null === this.aliasFailedAt) return;
        const QB = uB(new URL(BB).hostname);
        this.deps.JJ("game_server_route", QB ? "manual_retry_cf" : "manual_retry_direct", this.deps.now() - this.aliasFailedAt), this.aliasFailedAt = null
      }
      async checkStalledJoin(BB, jB, zB) {
        const QB = new URL(BB).hostname;
        if (!this.deps.enabled || !this.checksJoinsTo(QB) || !await this.deps.seatLegs.whenSlow(jB)) return null;
        const nB = this.deps.seatLegs.answered,
          dB = await this.check(QB);
        return zB() ? this.settle(dB) ? "blocked" : "reported" : "blocked" !== dB.outcome || jB.aborted || this.deps.seatLegs.answered !== nB ? null : (this.settle(dB), "blocked")
      }
      afterAliasJoinLeft(BB) {
        this.deps.enabled && (this.reportArm(), this.deps.JJ("game_server_route", "cf_join_left", BB))
      }
      afterJoined(BB) {
        if (!this.deps.enabled) return;
        this.aliasFailedAt = null;
        const jB = new URL(BB).hostname,
          zB = uB(jB);
        if (zB) this.reportArm(), this.deps.JJ("game_server_route", "cf_join", 0);
        else if (!UB(jB) || this.deps.random() >= .01) return;
        const QB = zB ? jB.slice(IB.length) : jB;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(QB, "direct", "direct_failed"), await this.reportRtt(NB(QB), "cf", "cf_failed")
        }))
      }
      async afterAliasJoinFailed(BB, jB, zB) {
        let {
          gameServerUnreachable: QB,
          joinFailure: nB
        } = jB;
        if (void 0 === nB) return null;
        if ("refused" === nB.at) return this.reportArm(), this.deps.JJ("game_server_route", "cf_join_refused", nB.code), null;
        const dB = this.recoveryArm();
        if (this.reportArm(dB), this.deps.JJ("game_server_route", `cf_join_failed:${nB.at}`, nB.code), null !== zB && this.deps.JJ("game_server_route", "cf_failed_since_route", zB), this.aliasFailedAt = this.deps.now(), void 0 === QB) return null;
        const IB = this.stored();
        return "cloudflare" !== (null === IB || void 0 === IB ? void 0 : IB.route) || "on" !== dB && IB.aliasFailedOnce || "ours" !== (await this.probeHost(BB)).answer ? (this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }), null) : "holdout" === dB ? (this.store({
          ...IB,
          aliasFailedOnce: !0
        }), null) : "cloudflare" === this.heldRoute() && fB.has(nB.at) ? "retry" : null
      }
      recoveryArm() {
        if (this.deps.now() >= qB) return "on";
        const BB = this.stored();
        return void 0 !== (null === BB || void 0 === BB ? void 0 : BB.recoveryArm) ? BB.recoveryArm : (this.pageArm ??= 100 * this.deps.random() < 20 ? "holdout" : "on", null !== BB && this.store(BB), this.pageArm)
      }
      reportArm(BB) {
        this.armReported || this.deps.now() >= qB || (this.armReported = !0, this.deps.JJ("game_server_route", "holdout" === (null !== BB && void 0 !== BB ? BB : this.recoveryArm()) ? "alias_recovery_holdout" : "alias_recovery_on", 0))
      }
      checksJoinsTo(BB) {
        return UB(BB) && "direct" !== this.heldRoute()
      }
      settle(BB) {
        let {
          outcome: jB,
          cfMs: zB
        } = BB;
        return this.deps.JJ("game_server_route", jB, zB), "blocked" === jB && (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), !0)
      }
      async check(BB) {
        const jB = this.probeHost(NB(BB));
        if ("none" !== (await this.probeHost(BB)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: zB,
          ms: QB
        } = await jB;
        return "ours" !== zB && "ipv6Refused" !== zB ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(BB)).answer ? {
          outcome: "direct_reachable",
          cfMs: QB
        } : {
          outcome: "ipv6Refused" === zB ? "blocked_ipv6" : "blocked",
          cfMs: QB
        }
      }
      async reportRtt(BB, jB, zB) {
        const QB = "ours" === (await this.probeHost(BB)).answer ? await this.probeHost(BB) : null;
        "ours" === (null === QB || void 0 === QB ? void 0 : QB.answer) ? this.deps.JJ("game_server_rtt", jB, QB.ms): this.deps.JJ("game_server_rtt", zB, 0)
      }
      probeHost(BB) {
        return this.deps.probe(`https://${BB}/version`, 8e3)
      }
      stored() {
        return function(BB) {
          if ("object" !== typeof BB || null === BB) return null;
          const {
            route: jB,
            until: zB,
            aliasFailedOnce: QB,
            recoveryArm: nB
          } = BB;
          return "cloudflare" !== jB && "direct" !== jB || "number" !== typeof zB ? null : {
            route: jB,
            until: zB,
            ...!0 === QB ? {
              aliasFailedOnce: QB
            } : {},
            ..."on" === nB || "holdout" === nB ? {
              recoveryArm: nB
            } : {}
          }
        }(this.deps.storage.getItem(oB))
      }
      heldRoute() {
        const BB = this.stored();
        return null !== BB && BB.until > this.deps.now() ? BB.route : null
      }
      store(BB) {
        var jB, zB, QB, nB;
        const dB = null !== (jB = null !== (zB = null !== (QB = BB.recoveryArm) && void 0 !== QB ? QB : null === (nB = this.stored()) || void 0 === nB ? void 0 : nB.recoveryArm) && void 0 !== zB ? zB : this.pageArm) && void 0 !== jB ? jB : void 0;
        this.deps.storage.setItem(oB, void 0 === dB ? BB : {
          ...BB,
          recoveryArm: dB
        })
      }
    }({
      storage: SB.j,
      probe: async function(BB, jB) {
        const zB = performance.now(),
          QB = await (0, sB.m)(BB, {
            cache: "no-store"
          }, jB, (async BB => {
            const jB = Math.round(performance.now() - zB);
            return {
              answer: await HB(BB),
              ms: jB
            }
          }));
        return null !== QB && void 0 !== QB ? QB : {
          answer: "none",
          ms: 0
        }
      },
      JJ: JB.z,
      enabled: !(0, MB.isDiscordClient)(),
      now: Date.now,
      random: Math.random,
      delay: BB => new Promise((jB => {
        setTimeout(jB, BB)
      })),
      sleep: EB.b,
      seatLegs: iB.j
    });
    var FB = zB(1760),
      YB = zB(8953);

    function VB(BB) {
      return async (jB, zB, IB, NB, UB) => {
        let pB, LB = performance.now();
        if ((0, QB.I)(IB)) {
          if (UB.aborted) return XB();
          const BB = jB instanceof nB.g ? null : (0, YB.m)((0, YB.f)(jB, zB));
          let QB = await (null !== BB && void 0 !== BB ? BB : AB(jB, zB, NB));
          if (null !== BB && performance.now() - QB.at > ZB && !UB.aborted) {
            const BB = await AB(jB, zB, NB);
            BB.result.isError() && !QB.result.isError() || (QB = BB)
          }
          const dB = QB.result;
          if (LB = QB.at, UB.aborted || yB.g.matchmakingEnded(dB.isError() ? null : QB.at), dB.isError()) {
            const BB = dB.asError();
            return console.log("Join room did not succeed, reason:", BB.message), BB.forward()
          }
          pB = dB.getValue(), DB.afterMatchmade(pB.endpoint)
        } else {
          yB.g.skipPlayWait();
          const BB = PB(IB.replace("https://", "").replace("http://", ""));
          if (BB.isError()) return BB.asError().forward();
          pB = {
            endpoint: BB.getValue(),
            gameNameWithVariation: zB,
            lobbyName: jB instanceof nB.g ? jB.getLobbyName() : jB
          }
        }
        if (UB.aborted) return XB();
        console.log(`Connecting to ${pB.gameNameWithVariation} in lobby ${pB.lobbyName} on game server ${pB.endpoint}`), rB.n.Ly("matchmakeAndPlayStepCompleted", {
          step: dB.j.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, JB.k)(), mB.b.markGameLoadStart((0, FB.i)()), (0, GB.q)({
          websocketUrl: pB.endpoint,
          gameNameWithVariation: pB.gameNameWithVariation,
          lobbyName: pB.lobbyName
        }), rB.n.Ly("loadingScreenState", "loadingPage:loadingGame");
        const gB = async () => {
          const BB = await async function(BB, jB, zB, QB) {
            const nB = await TB(BB, jB, zB);
            if (!nB.isError() && !QB.aborted) {
              const {
                endpoint: BB,
                gameNameWithVariation: jB,
                lobbyName: zB
              } = nB.getValue();
              (0, GB.q)({
                websocketUrl: BB,
                gameNameWithVariation: jB,
                lobbyName: zB
              })
            }
            return nB
          }(jB, zB, NB, UB);
          return BB.isError() || (pB = BB.getValue(), LB = performance.now()), BB
        }, tB = !(0, QB.I)(IB), SB = jB => BB({
          place: pB,
          userContext: NB,
          direct: tB,
          matchedAt: LB,
          rematch: gB
        }, jB), MB = () => uB(new URL(pB.endpoint).hostname), EB = MB() ? performance.now() : null, iB = tB ? {
          result: await SB(UB),
          blockedAt: null,
          failureChecked: !1
        } : await async function(BB, jB, zB) {
          const QB = new sB.c(zB),
            nB = new AbortController;
          let dB = null,
            IB = !1,
            NB = null;
          const uB = DB.checkStalledJoin(BB, nB.signal, (() => IB)).then((BB => {
            NB = BB, "blocked" === BB && (dB = performance.now(), QB.controller.abort())
          }));
          try {
            const BB = await jB(QB.signal);
            return IB = BB.isError() && void 0 !== BB.asError().debugResult.gameServerUnreachable, nB.abort(), IB && await uB, {
              result: BB,
              blockedAt: dB,
              failureChecked: "reported" === NB
            }
          } finally {
            nB.abort(), QB.unfollow()
          }
        }(pB.endpoint, SB, UB);
        let qB = null !== EB && void 0 !== EB ? EB : iB.blockedAt,
          fB = iB.result;
        const oB = () => null === qB ? null : performance.now() - qB,
          HB = fB.isError() && !0 === fB.asError().debugResult.rematch;
        let VB = null;
        if (!fB.isError() || tB || UB.aborted || HB || null !== iB.blockedAt || iB.failureChecked || (VB = await DB.afterJoinFailed(pB.endpoint, fB.asError().debugResult, oB())), fB.isError() && !tB && ("reroute" === VB || !UB.aborted && (HB || null !== iB.blockedAt))) {
          if (HB || (qB ??= performance.now(), rB.n.Ly("gameServerRouteSwitched")), UB.aborted) return hB(qB), XB();
          console.log("Matchmaking again");
          const BB = await gB();
          if (BB.isError()) return BB.asError().forward();
          if (UB.aborted) return hB(qB), XB();
          fB = await SB(UB), VB = null, !fB.isError() || UB.aborted || HB && !MB() || (VB = await DB.afterJoinFailed(pB.endpoint, fB.asError().debugResult, oB()))
        }
        if (fB.isError() && "retry" === VB && !UB.aborted && DB.takeAutoRetry()) {
          if (!await DB.waitToRetry(UB)) return XB();
          console.log("Joining through Cloudflare again");
          const BB = await gB();
          if (UB.aborted) return XB();
          if (BB.isError()) return DB.afterAutoRetryFailed(null), fB.asError().forward();
          if (fB = await SB(UB), fB.isError() && !UB.aborted) {
            const BB = fB.asError().debugResult;
            await DB.afterJoinFailed(pB.endpoint, BB, null), DB.afterAutoRetryFailed(BB)
          } else if (!fB.isError()) {
            var WB;
            DB.afterAutoRetryJoined(null !== (WB = oB()) && void 0 !== WB ? WB : 0)
          }
        }
        return fB.isError() ? (!0 === fB.asError().debugResult.xz && UB.aborted && hB(qB), fB.asError().forward()) : (DB.afterJoined(pB.endpoint), (0, kB.K)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), aB.d.value({
          gameNameWithVariation: pB.gameNameWithVariation,
          lobbyName: pB.lobbyName
        }))
      }
    }

    function hB(BB) {
      null !== BB && DB.afterAliasJoinLeft(performance.now() - BB)
    }

    function XB() {
      return aB.d.errorWithCode("Left the game while it loaded", dB.j.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        xz: !0
      })
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3);
    const ZB = 1e4;

    function AB(BB, jB, zB) {
      return TB(BB, jB, zB).then((BB => ({
        result: BB,
        at: performance.now()
      })))
    }
    async function TB(BB, jB, zB) {
      return (0, QB.I)(BB) || BB instanceof nB.g || !(BB.length > pB.H) ? await LB.b.matchmakePlayer(zB, BB, jB, (0, tB.e)()).then((BB => {
        if (!1 === BB.succeeded) return aB.d.errorWithCode(BB.failReason, dB.j.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: jB,
          lobbyName: zB,
          gameNameWithVariation: QB
        } = BB, nB = PB(DB.hostFor(jB));
        return nB.isError() ? nB.asError().forward() : aB.d.value({
          endpoint: nB.getValue(),
          gameNameWithVariation: QB,
          lobbyName: zB
        })
      })).catch((BB => (console.error("Bad response from the matchmaking server:", BB), aB.d.errorWithCode(BB.toString(), dB.j.REQUEST_TO_MATCHMAKING, {
        error: BB,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", BB), aB.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", dB.j.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function PB(BB) {
      const jB = gB.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(BB);
      return jB.isError() ? aB.d.errorWithCode(jB.asError().message, dB.j.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : aB.d.value(jB.getValue())
    }
    window.leaveGame = () => {
      (0, GB.l)("/")
    }
  },
  8769: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB
    });
    var QB = zB(8773),
      nB = zB(658),
      dB = zB(145);

    function IB(BB) {
      var jB, zB;
      if ((0, nB.I)(BB)) return !0;
      const IB = null !== (jB = null === (zB = dB.siteUsedData[dB.siteUsed]) || void 0 === zB ? void 0 : zB.adConfig.showRewardedAds) && void 0 !== jB && jB;
      for (const nB in BB) {
        const jB = BB[nB];
        if (null !== jB && void 0 !== jB && jB.items)
          for (const BB in jB.items)
            if ((0, QB.h)(jB.items[BB], IB)) return !1
      }
      return !0
    }
  },
  36656: (BB, jB, zB) => {
    function QB(BB, jB) {
      for (let zB = 0; zB < BB.length; zB++)
        if (BB[zB].identifier === jB) return BB[zB];
      return null
    }

    function nB(BB, jB) {
      return null !== QB(BB, jB)
    }
    zB.d(jB, {
      b: () => QB,
      e: () => nB
    })
  },
  36665: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => aB,
      f: () => rB,
      h: () => kB,
      k: () => UB
    });
    var QB = zB(28),
      nB = zB(2482),
      dB = zB(2491),
      IB = zB(2493),
      NB = zB(2585),
      uB = zB(31);

    function UB(BB, jB) {
      return (!(0, IB.b)() || 0 === BB && 0 === jB) && (0, dB.w)(nB.j.Joystick, 0, BB, jB, 0)
    }
    const aB = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function pB(BB) {
      return BB.classList.contains("TouchKeyHit") && sB() ? null : BB.firstElementChild
    }

    function rB(BB) {
      return BB.classList.contains("TouchKeyHit") && !BB.classList.contains("CanvasZone") ? {
        whole: !sB(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: JB(pB(BB))
      }
    }

    function sB() {
      return document.documentElement.classList.contains(NB.j)
    }

    function JB(BB) {
      return !(BB instanceof HTMLElement) || BB.offsetWidth <= 0 || BB.offsetHeight <= 0 ? null : {
        width: BB.offsetWidth,
        height: BB.offsetHeight
      }
    }

    function mB(BB, jB) {
      const zB = BB => Math.min(65535, Math.round(4 * BB));
      return (zB(BB) | zB(jB) << 16) >>> 0
    }

    function yB(BB) {
      return {
        x: BB.left + BB.width / 2,
        y: BB.top + BB.height / 2,
        radius: Math.min(BB.width, BB.height) / 2
      }
    }
    const kB = new class {
      constructor(BB) {
        this.write = BB, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        jB ? this.elements.set(BB, {
          element: jB,
          hidden: zB
        }) : this.elements.delete(BB), this.measureOne(BB)
      }
      measure() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = BB.left, this.canvasTop = BB.top;
        for (const jB of this.elements.keys()) this.measureOne(jB)
      }
      hitZone(BB, jB) {
        let zB = null,
          QB = 1;
        for (const nB of this.elements.keys()) {
          const dB = this.shown(nB);
          if (!dB) continue;
          const {
            rect: IB,
            element: NB
          } = dB, uB = yB(IB), UB = Math.max(0, IB.width / 2 - uB.radius), aB = Math.max(0, IB.height / 2 - uB.radius), rB = Math.max(0, Math.abs(BB - uB.x) - UB), sB = Math.max(0, Math.abs(jB - uB.y) - aB), mB = NB.firstElementChild;
          let kB = Math.hypot(rB, sB) / uB.radius;
          const GB = JB(pB(NB));
          GB && (kB = Math.min(kB, Math.max(2 * Math.abs(BB - uB.x) / GB.width, 2 * Math.abs(jB - uB.y) / GB.height))), kB < QB && (zB = {
            code: nB,
            element: NB,
            key: mB,
            ...uB
          }, QB = kB)
        }
        return zB
      }
      measureOne(BB) {
        const jB = this.shown(BB);
        if (!jB) return void this.write(nB.j.TouchZone, BB, 0, 0, 0);
        const {
          rect: zB,
          element: QB
        } = jB, dB = yB(zB);
        this.write(nB.j.TouchZone, BB, dB.x - this.canvasLeft, dB.y - this.canvasTop, mB(zB.width, zB.height));
        const IB = JB(pB(QB));
        this.write(nB.j.TouchZone, 256 | BB, 0, 0, IB ? mB(IB.width, IB.height) : 0)
      }
      shown(BB) {
        const jB = this.elements.get(BB),
          zB = QB.c.get("worldPanelHud");
        if (!jB || jB.hidden || "none" === zB) return null;
        const nB = jB.element.getBoundingClientRect();
        return nB.width <= 0 || nB.height <= 0 ? null : {
          rect: nB,
          element: jB.element
        }
      }
    }(dB.w);
    (0, uB.q)(NB.f, (() => {
      kB.measure()
    }))
  },
  36926: (BB, jB, zB) => {
    function QB(BB) {
      return "fetch" === BB || "timeout" === BB || "integrity" === BB ? "download" : "browser"
    }
    zB.d(jB, {
      c: () => nB,
      e: () => IB,
      f: () => uB,
      i: () => NB,
      m: () => QB,
      q: () => dB
    });
    const nB = "https://discord.gg/playbloxd";

    function dB(BB) {
      return "download" === BB ? {
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

    function IB(BB, jB) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: jB ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: BB.code
        },
        discordLink: jB,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function NB() {
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

    function uB(BB, jB, zB) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: zB ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: BB.reason
        },
        discordLink: null === BB.name,
        confirm: jB ? "general:reconnect" : BB.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36964: (BB, jB, zB) => {
    function QB(BB, jB) {
      return null === BB || null === jB ? BB === jB : BB[0] === jB[0] && BB[1] === jB[1] && BB[2] === jB[2]
    }

    function nB(BB) {
      return [BB[0] + .5, BB[1] + .5, BB[2] + .5]
    }
    zB.d(jB, {
      c: () => nB,
      e: () => QB
    })
  },
  36929: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => uB,
      e: () => NB
    });
    const QB = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      nB = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      dB = {
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
      IB = {
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
      NB = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: QB.files,
          dependencies: QB.dependencies,
          bundledSource: QB.bundledSource,
          types: QB.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: nB.files,
          dependencies: nB.dependencies,
          bundledSource: nB.bundledSource,
          types: nB.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: dB.files,
          dependencies: dB.dependencies,
          bundledSource: dB.bundledSource,
          types: dB.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: IB.files,
          dependencies: IB.dependencies,
          bundledSource: IB.bundledSource,
          types: IB.types
        }
      };

    function uB(BB) {
      const jB = [],
        zB = new Set,
        QB = BB => {
          if (zB.has(BB)) return;
          const nB = NB[BB];
          if (nB) {
            zB.add(BB);
            for (const BB of nB.dependencies) QB(BB);
            jB.push(BB)
          }
        };
      for (const nB of BB) QB(nB);
      return jB
    }
  },
  36932: (BB, jB, zB) => {
    zB.d(jB, {
      C: () => sB,
      D: () => rB,
      e: () => uB,
      i: () => NB,
      l: () => IB,
      p: () => dB,
      r: () => UB,
      u: () => aB,
      y: () => JB
    });
    var QB = zB(1270);
    const nB = ["quickjs", "ses"];

    function dB(BB) {
      return nB.includes(BB)
    }

    function IB(BB) {
      return BB === QB.j || BB === QB.k
    }

    function NB(BB, jB) {
      return BB === QB.j && jB === QB.k || BB === QB.k && jB === QB.j
    }

    function uB(BB) {
      const jB = QB.k in BB,
        zB = QB.j in BB;
      return jB && zB ? null : jB ? QB.k : zB ? QB.j : null
    }

    function UB(BB, jB, zB) {
      const QB = `${jB}/`;
      return BB.filter((BB => BB.startsWith(QB))).map((BB => [BB, `${zB}/${BB.slice(QB.length)}`]))
    }

    function aB(BB, jB) {
      let zB = 0;
      for (const [QB, nB] of Object.entries(BB)) QB !== jB && (zB += nB.length);
      return zB
    }
    const pB = "@plugins/";

    function rB(BB) {
      return `${pB}${BB}`
    }

    function sB(BB, jB) {
      return `/node_modules/@plugins/${BB}/${jB}`
    }

    function JB(BB) {
      if (!BB.startsWith(pB)) return null;
      const jB = BB.slice(pB.length);
      return function(BB) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(BB)
      }(jB) ? jB : null
    }
  },
  36936: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      i: () => nB,
      k: () => IB,
      o: () => uB,
      r: () => dB
    });
    var QB = zB(2509);
    const nB = 5,
      dB = "[SCHEMATIC]",
      IB = 1024e4;

    function NB(BB) {
      return BB.endsWith(".bloxdschem") && (0, QB.q)(BB.slice(0, -11) + ".ts") && BB.length <= 64
    }

    function uB(BB) {
      return Object.fromEntries(Object.keys(BB).map((BB => [BB, dB])))
    }
  },
  4939: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB,
      e: () => QB,
      h: () => dB,
      i: () => uB,
      k: () => IB
    });
    const QB = ["sine", "triangle", "square", "sawtooth"],
      nB = 55,
      dB = {
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

    function IB(BB) {
      return "string" !== typeof BB ? BB : Object.hasOwn(dB, BB) ? dB[BB] : null
    }

    function NB(BB, jB, zB) {
      return Math.min(zB, Math.max(jB, BB))
    }

    function uB(BB) {
      const jB = NB(BB.durationMs, 10, 500),
        zB = NB(BB.attackMs, 0, jB),
        {
          intonation: nB
        } = BB;
      return {
        waveform: QB.includes(BB.waveform) ? BB.waveform : "sine",
        pitchHz: NB(BB.pitchHz, 20, 4e3),
        glideSemitones: NB(BB.glideSemitones, -24, 24),
        durationMs: jB,
        attackMs: zB,
        releaseMs: NB(BB.releaseMs, 0, jB - zB),
        lowpassHz: null === BB.lowpassHz ? null : NB(BB.lowpassHz, 20, 2e4),
        volume: NB(BB.volume, 0, 2),
        intonation: {
          variationSemitones: NB(nB.variationSemitones, 0, 6),
          declineSemitones: NB(nB.declineSemitones, 0, 12),
          questionRiseSemitones: NB(nB.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: NB(nB.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: NB(BB.syllableMs, 25, 200)
      }
    }
  },
  8805: () => {},
  10002: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18189: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  20064: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  20069: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  20071: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  20078: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  20086: BB => {
    BB.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);