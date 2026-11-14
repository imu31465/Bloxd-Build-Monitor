export const id = 89;
export const ids = [89];
export const modules = {
  35191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Dc
    });
    var Vc = nc(73),
      Ic = nc(1566),
      rB = nc(35195),
      uc = nc.n(rB),
      sc = nc(3652),
      Mc = nc(1536),
      Pc = nc(1252),
      qB = nc(107),
      Oc = nc(125),
      Tc = nc(302),
      fc = nc(912),
      mB = nc.n(fc),
      ec = nc(27),
      tB = nc(926),
      Sc = nc(1464),
      yB = nc(1495),
      zB = nc(1492),
      pc = nc(1632),
      hc = nc(1237),
      aB = nc(1691),
      lc = nc(1226),
      Yc = nc(7689),
      Lc = nc(35204),
      gB = nc(35219),
      Uc = nc(1275),
      bB = nc(1051),
      Zc = nc(957);
    const Qc = nc(35234),
      Cc = ["enter", "t", "/"];

    function vB() {
      var cB, Bc;
      (0, aB.e)();
      const nc = null !== (cB = null === (Bc = (0, hc.f)()) || void 0 === Bc ? void 0 : Bc.getBoundButton("keyboardChannel")) && void 0 !== cB ? cB : null;
      return nc ? (0, Zc.jsx)(pc.d, {
        className: "ChatInputChannelGlyph",
        glyph: nc
      }) : null
    }

    function Dc() {
      const {
        t: cB
      } = (0, bB.x)(), {
        isTouchScreen: Bc
      } = (0, ec.j)(["isTouchScreen"]), nc = (0, lc.s)(), [rB, fc] = (0, Vc.useState)(!1), pc = (0, Vc.useRef)(rB), hc = (0, Vc.useRef)(null), {
        messages: aB,
        reportedPlayers: Dc,
        channel: Ec
      } = (0, Yc.m)(), oc = (0, Vc.useRef)(0), Wc = (0, Vc.useRef)(""), wc = (0, Vc.useRef)(null), [kB, Xc] = (0, Vc.useState)(!1), [Hc, Fc] = (0, Vc.useState)(!1), Jc = (0, Vc.useRef)(kB), jB = (0, Vc.useRef)(null), Rc = (0, Vc.useRef)(!1), iB = (0, Vc.useRef)(null), Kc = (0, Vc.useRef)(null), xB = (0, Vc.useRef)(null), dc = (0, Vc.useRef)(cn);

      function Ac() {
        pc.current = !1, fc(!1), Kc.current.blur()
      }

      function Gc(cB) {
        Jc.current = cB, Xc(cB)
      }

      function cn() {
        const cB = Kc.current.value;
        Kc.current.value = "", BB(cB)
      }

      function BB(cB) {
        (0, Yc.l)(cB), oc.current = 0, Gc(!1)
      }

      function nB(cB, Bc) {
        0 === oc.current && (Wc.current = Kc.current.value);
        const nc = (0, Yc.j)(oc.current + cB, Bc);
        oc.current = nc.stepsBack, Kc.current.value = 0 === nc.stepsBack ? Wc.current : nc.text, setTimeout((() => {
          Kc.current && Kc.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function VB() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        wc.current && (!cB && Jc.current || (wc.current.scrollTop = 1e5))
      }
      return dc.current = cn, (0, sc.c)(!0, rB, "ChatComponent"), (0, Pc.f)("appManagerUpdated|openEverythingMenuName", (() => {
        (0, Sc.s)() && fc(!1)
      })), (0, Vc.useEffect)((() => {
        Kc.current.addEventListener("blur", (cB => {
          if (null === Kc.current) return;
          Array.from(document.querySelectorAll(":hover")).some((cB => cB.classList.contains("ChatInputChannel") || cB.classList.contains("ChatMsgSelectWrapper"))) || ((0, qB.isMobile)() && pc.current && "" !== Kc.current.value && dc.current(), fc(!1))
        }));
        const cB = cB => {
          hc.current.contains(cB.target) || (0, zB.i)(cB.target) || fc(!1)
        };
        document.addEventListener("touchstart", cB, {
          capture: !0
        });
        const Bc = cB => {
          (0, gB.h)(cB.target) && (pc.current = !1, fc(!1))
        };
        document.addEventListener("mousedown", Bc, {
          capture: !0
        });
        const nc = () => {
            clearTimeout(jB.current), Gc(!0)
          },
          Vc = () => {
            clearTimeout(jB.current), jB.current = setTimeout((() => {
              Gc(!1), VB()
            }), 4e3)
          },
          rB = () => {
            document.pointerLockElement ? (fc(!1), Fc(!0), Rc.current = !1, Gc(!1), VB()) : Fc(!1)
          };
        wc.current.addEventListener("pointermove", (cB => {
          "touch" === cB.pointerType || Rc.current || document.pointerLockElement || (Rc.current = !0, nc())
        })), wc.current.addEventListener("pointerleave", (cB => {
          "touch" !== cB.pointerType && (Rc.current = !1, Vc())
        })), wc.current.addEventListener("wheel", (() => {
          document.pointerLockElement || (nc(), Rc.current || (jB.current = setTimeout((() => {
            Gc(!1)
          }), 4e3)))
        }), {
          passive: !0
        }), wc.current.addEventListener("touchstart", nc), wc.current.addEventListener("touchend", Vc), wc.current.addEventListener("touchcancel", Vc), document.addEventListener("pointerlockchange", rB);
        const sc = cB => {
          if ((pc.current || ! function(cB) {
              if ((0, yB.isTypingInInput)()) return !0;
              const Bc = document.activeElement;
              return (Bc instanceof HTMLButtonElement || "button" === (null === Bc || void 0 === Bc ? void 0 : Bc.getAttribute("role"))) && ["Enter", " "].includes(cB.key)
            }(cB)) && "codeEditor" !== ec.d.get("openInGameMenuName") && "lobbyCodeEditor" !== ec.d.get("openInGameMenuName") && !Ic.gameBridge.latest("connectedGame").replay)
            if (pc.current || !(0, Sc.s)()) {
              if (pc.current) {
                if ("ArrowUp" === cB.code || "ArrowDown" === cB.code) return nB("ArrowUp" === cB.code ? 1 : -1, !1), void cB.stopPropagation();
                if ("Tab" === cB.code) return Yc.d.selectNextChannel(), cB.stopPropagation(), void cB.preventDefault();
                if (cB.ctrlKey && Nc.includes(Qc[cB.keyCode])) return cB.preventDefault(), void cB.stopPropagation()
              }
              if ([...Cc, "esc"].includes(uc()(cB)))
                if ("esc" !== uc()(cB)) {
                  if (!pc.current || "/" !== uc()(cB)) {
                    if ("t" === uc()(cB)) {
                      if (pc.current) return void cB.stopPropagation();
                      cB.preventDefault()
                    }
                    pc.current && "" !== Kc.current.value && dc.current(), cB.repeat || (pc.current || "/" === uc()(cB) && (Kc.current.value = "/", cB.preventDefault()), fc(!pc.current))
                  }
                } else pc.current && (fc(!1), cB.stopPropagation());
              else pc.current && cB.stopPropagation()
            } else Cc.includes(uc()(cB)) && (cB.preventDefault(), cB.stopPropagation(), (0, Sc.b)(cB))
        };
        document.addEventListener("keydown", sc, {
          capture: !0
        });
        const Mc = wc.current;
        let Pc = !1;
        const Oc = new ResizeObserver((() => {
            Pc && (Pc = !1, VB())
          })),
          Tc = () => {
            Pc = !0, Oc.unobserve(Mc), Oc.observe(Mc)
          };
        iB.current = Tc;
        const mB = new MutationObserver(Tc);
        return mB.observe(Mc, {
          childList: !0,
          subtree: !0
        }), () => {
          document.removeEventListener("keydown", sc, {
            capture: !0
          }), document.removeEventListener("touchstart", cB, {
            capture: !0
          }), document.removeEventListener("mousedown", Bc, {
            capture: !0
          }), document.removeEventListener("pointerlockchange", rB), iB.current = null, mB.disconnect(), Oc.disconnect(), clearTimeout(jB.current)
        }
      }), []), (0, zB.q)(Kc, {
        open: () => {
          fc(!0)
        },
        close: () => {
          Ac()
        },
        submit: () => {
          "" !== Kc.current.value && cn(), Ac()
        },
        stepHistory: () => {
          nB(1, !0)
        },
        sendLine: cB => {
          BB(cB), Ac()
        },
        selectNextChannel: () => {
          Yc.d.selectNextChannel()
        }
      }), (0, Vc.useEffect)((() => {
        var cB;
        (pc.current = rB, Kc.current) && (rB ? (oc.current = 0, Kc.current.focus()) : (Kc.current.blur(), null === (cB = iB.current) || void 0 === cB || cB.call(iB)))
      }), [rB]), (0, Zc.jsx)(Zc.Fragment, {
        children: (0, Zc.jsxs)("div", {
          ref: hc,
          className: mB()("Chat", {
            Chatting: rB
          }),
          "data-camera-keeper": rB ? "" : void 0,
          children: [(0, Zc.jsx)("div", {
            ref: wc,
            className: mB()("ChatMessages", {
              HideScrollbar: !kB && !rB,
              NoScrolling: !(0, qB.isMobile)() && Hc
            }),
            children: (0, Zc.jsx)(Lc.c, {
              messages: aB,
              reportedPlayers: Dc
            })
          }), Bc && !rB && (0, Zc.jsx)("button", {
            type: "button",
            className: "ChatIconWrapper SmallTextLight",
            "aria-label": cB("general:chat"),
            ...(0, Uc.d)((() => {
              fc(!0), xB.current.style.display = "flex", (0, qB.isIOS)() && Kc.current.focus()
            }), "pointerup"),
            children: (0, Zc.jsx)(tB.e, {
              name: "comment-dots",
              className: "ChatIcon"
            })
          }), (0, Zc.jsxs)("div", {
            ref: xB,
            className: "ChatInputWrapper",
            style: {
              display: "" + (rB ? "flex" : "none")
            },
            children: [Ec && (0, Zc.jsx)("button", {
              type: "button",
              className: "ChatInputChannel",
              style: {
                backgroundColor: Ec.elementBgColor
              },
              onClick: cB => {
                Yc.d.selectNextChannel(), Kc.current.focus()
              },
              children: (0, Zc.jsx)("span", {
                className: "SmallTextBold",
                children: (0, Zc.jsx)(Mc.e, {
                  text: Ec.elementContent
                })
              })
            }), Ec && nc && (0, Zc.jsx)(vB, {}), (0, Zc.jsx)("input", {
              className: "ChatInput",
              maxLength: Tc.vc,
              ref: Kc,
              spellCheck: "false",
              autoComplete: "off",
              autoCorrect: "off",
              placeholder: Ec ? `${Ec.channelName} Chat${"touchOnly"===(0,Oc.b)()||nc?"":" [Tab]"}` : ""
            })]
          })]
        })
      })
    }
    const Nc = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  35204: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Yc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(7692),
      sc = nc(35),
      Mc = nc(1912),
      Pc = nc(2763),
      qB = nc(1657),
      Oc = nc(27),
      Tc = nc(1536),
      fc = nc(35207),
      mB = nc(1762),
      ec = nc(35213),
      tB = nc(2056),
      Sc = nc(2036),
      yB = nc(2027),
      zB = nc(2785),
      pc = nc(8166),
      hc = nc(1609),
      aB = nc(957);

    function lc(cB) {
      for (let nc = cB.length - 1; nc >= 0; nc--) {
        const Vc = "string" === typeof(Bc = cB[nc]) ? Bc : "str" in Bc && "string" === typeof Bc.str ? Bc.str : "";
        if ("" !== Vc.trim()) return Vc
      }
      var Bc;
      return ""
    }

    function Yc(cB) {
      let {
        messages: Bc,
        reportedPlayers: nc
      } = cB;
      return (0, aB.jsx)(aB.Fragment, {
        children: Bc.map((cB => (0, aB.jsx)(Lc, {
          message: cB,
          reportedPlayers: nc
        }, cB.clientChatMsgId)))
      })
    }
    const Lc = (0, Vc.memo)((function(cB) {
      var Bc;
      let {
        message: nc,
        reportedPlayers: Ic
      } = cB;
      const Yc = (0, Vc.useRef)(null),
        [Lc] = (0, Vc.useState)(pc.i),
        {
          author: gB
        } = nc,
        Uc = null === gB || void 0 === gB ? void 0 : gB.id,
        bB = null !== (Bc = null === gB || void 0 === gB ? void 0 : gB.name) && void 0 !== Bc ? Bc : void 0,
        Zc = (0, qB.e)(bB),
        Qc = null !== gB && void 0 !== gB && gB.profileEffect ? mB.f[gB.profileEffect] : void 0,
        Cc = null !== gB && !gB.local,
        vB = null === gB && null !== nc.serverChatMsgId,
        Dc = (0, hc.e)("hiddenPlayerNames", (cB => (0, ec.i)(Cc, bB, cB))),
        Nc = null === nc.serverChatMsgId || null === gB ? null : {
          text: lc(nc.content),
          serverChatMsgId: nc.serverChatMsgId,
          authorId: gB.id
        },
        Ec = vB || null !== Nc && !Ic.includes(Uc),
        oc = (0, Pc.j)(Cc && null !== bB && void 0 !== bB ? bB : null),
        Wc = (0, yB.h)(Yc);
      (0, Vc.useEffect)((() => () => {
        yB.b.closeIfOwner(Yc)
      }), []);
      const wc = () => {
          vB ? sc.i.Vu("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            Uu: (0, uc.c)(nc.content),
            serverChatMsgId: nc.serverChatMsgId
          }) : null !== Nc ? sc.i.Vu("OpenReportMenu", {
            playerEId: Uc,
            playerName: bB,
            Uu: Nc.text,
            serverChatMsgId: Nc.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        kB = void 0 === bB ? [] : (0, zB.e)(oc, bB, Nc);
      return (0, aB.jsxs)("div", {
        ref: Yc,
        className: rB()("MessageWrapper", {
          ChatMsgSelectWrapper: Uc,
          Still: Lc
        }),
        onContextMenu: Dc ? cB => {
          (0, tB.g)(Yc, cB, {
            ...(0, ec.e)(Uc, bB),
            showLocation: !1,
            status: null,
            extraActions: Ec ? [{
              icon: "flag",
              text: "Report",
              onClick: wc
            }] : [],
            friendRequestSource: "chat"
          }, Oc.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: Dc ? cB => {
          (0, Sc.b)(cB, (() => (0, ec.e)(Uc, bB).playerSocialPreview))
        } : void 0,
        children: [Qc && (0, aB.jsx)(Qc, {
          className: "ChatMessageBackground",
          simple: !0
        }), (Cc || vB) && !Wc && (0, aB.jsx)(fc.c, {
          className: "ChatFloatingActions",
          triggerElementRef: Yc,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: wc,
            show: Ec
          }, ...kB, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: cB => {
              (0, Mc.j)(bB, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: Dc && "blocked" !== oc
          }]
        }), (0, aB.jsx)(Tc.e, {
          text: nc.content,
          friendBadgeFor: Zc ? bB : void 0
        }, nc.clientChatMsgId)]
      }, nc.clientChatMsgId)
    }))
  },
  35245: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      f: () => mB,
      i: () => Tc,
      j: () => Oc
    });
    var Vc = nc(8187),
      Ic = nc(35247),
      rB = nc(35253),
      uc = nc(7684),
      sc = nc(1252),
      Mc = nc(73),
      Pc = nc(83),
      qB = nc(957);

    function Oc() {
      var cB;
      return (0, sc.g)(Ic.d, (0, Ic.o)()), (0, qB.jsx)(qB.Fragment, {
        children: null === (cB = (0, Ic.o)()) || void 0 === cB ? void 0 : cB.content
      })
    }

    function Tc(cB) {
      var Bc;
      let {
        show: nc
      } = cB;
      (0, sc.g)(Ic.d, (0, Ic.o)());
      const Pc = null === (Bc = (0, Ic.o)()) || void 0 === Bc ? void 0 : Bc.menu;
      return (0, Mc.useEffect)((() => {
        nc || (null === Pc || void 0 === Pc || Pc.onClose(), (0, rB.q)())
      }), [nc, Pc]), (0, Mc.useEffect)((() => nc ? (0, uc.f)(rB.x, rB.h) : void 0), [nc]), (0, qB.jsx)(Vc.d, {
        showing: nc,
        globallyUniqueKey: "clientGameMenu",
        children: null === Pc || void 0 === Pc ? void 0 : Pc.content
      })
    }

    function fc(cB) {
      let {
        placement: Bc = "bottom"
      } = cB;
      return (0, qB.jsx)("div", {
        id: `clientGameHud-${Bc}`,
        style: {
          display: "contents"
        }
      })
    }

    function mB(cB) {
      let {
        children: Bc,
        placement: nc = "bottom"
      } = cB;
      const [Vc, Ic] = (0, Mc.useState)(null);
      return (0, Mc.useEffect)((() => {
        Ic(document.getElementById(`clientGameHud-${nc}`))
      }), [nc]), Vc ? (0, Pc.createPortal)(Bc, Vc) : null
    }
  },
  35519: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => zB,
      e: () => tB,
      i: () => mB,
      k: () => fc,
      m: () => yB,
      p: () => aB,
      q: () => pc,
      u: () => hc,
      y: () => Ic
    });
    var Vc = nc(73);
    const Ic = 5e3,
      rB = 500,
      uc = 3e3;
    let sc = null,
      Mc = null,
      Pc = null;
    const qB = new Set;

    function Oc(cB) {
      sc = cB;
      for (const Bc of qB) Bc()
    }

    function Tc() {
      if (!sc || void 0 !== sc.endedAt) return;
      null !== Mc && (clearTimeout(Mc), Mc = null), Oc({
        ...sc,
        endedAt: Date.now()
      });
      const cB = Pc;
      Pc = null, null === cB || void 0 === cB || cB()
    }

    function fc(cB, Bc) {
      let {
        submit: nc,
        reopen: Vc
      } = Bc;
      null !== Mc && clearTimeout(Mc), Pc = Vc, Oc({
        ...cB,
        startedAt: Date.now(),
        errors: []
      }), Mc = setTimeout(Tc, uc), nc()
    }

    function mB() {
      sc && void 0 === sc.endedAt && void 0 === sc.ranAt && (null !== Mc && clearTimeout(Mc), Oc({
        ...sc,
        ranAt: Date.now()
      }), Mc = setTimeout(Tc, Ic))
    }
    const ec = 3;

    function tB(cB) {
      if (!sc || void 0 === sc.ranAt || void 0 !== sc.endedAt || sc.errors.includes(cB) || sc.errors.length >= ec) return;
      const Bc = 0 === sc.errors.length;
      Oc({
        ...sc,
        errors: [...sc.errors, cB]
      }), Bc && (null !== Mc && clearTimeout(Mc), Mc = setTimeout(Tc, rB))
    }

    function Sc(cB) {
      var Bc;
      return (null === (Bc = sc) || void 0 === Bc ? void 0 : Bc.chatKey) === cB ? sc : null
    }

    function yB(cB) {
      const Bc = Sc(cB);
      return Bc && void 0 !== Bc.endedAt ? (Oc(null), Bc) : null
    }

    function zB(cB) {
      var Bc;
      (null === (Bc = sc) || void 0 === Bc ? void 0 : Bc.chatKey) === cB && (null !== Mc && (clearTimeout(Mc), Mc = null), Pc = null, Oc(null))
    }

    function pc(cB) {
      return `Fix this in your change: when it ran, the world showed ${1===cB.length?"this error":"these errors"}: ${cB.join(" ")}`
    }

    function hc(cB) {
      var Bc;
      if (void 0 === cB.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const nc = Math.max(1, Math.round(((null !== (Bc = cB.endedAt) && void 0 !== Bc ? Bc : cB.ranAt) - cB.ranAt) / 1e3)),
        Vc = `Your change ran in your world for ${nc} ${1===nc?"second":"seconds"}`;
      return 0 === cB.errors.length ? {
        title: "Tested: no errors",
        text: `${Vc} without an error.`
      } : {
        title: 1 === cB.errors.length ? "Tested: it showed an error" : `Tested: it showed ${cB.errors.length} errors`,
        text: `${Vc} and showed: ${cB.errors.join(" ")}`
      }
    }

    function aB(cB) {
      const [Bc, nc] = (0, Vc.useState)((() => Sc(cB)));
      return (0, Vc.useEffect)((() => {
        const Bc = () => {
          nc(Sc(cB))
        };
        return Bc(), qB.add(Bc), () => {
          qB.delete(Bc)
        }
      }), [cB]), Bc
    }
  },
  35521: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Ic,
      f: () => Vc
    });
    const Vc = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Ic(cB, Bc, nc) {
      return {
        key: cB,
        label: `Code block at ${Bc.join(", ")}`,
        codeBlock: !0,
        pos: Bc,
        canChangePos: nc
      }
    }
  },
  35516: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      g: () => rB,
      j: () => uc,
      n: () => Ic
    });
    const Vc = "code block",
      Ic = "World Code/";

    function rB(cB) {
      return cB.trim().toLowerCase().startsWith(Ic.toLowerCase())
    }

    function uc(cB) {
      return cB.trim().slice(Ic.length).replace(/^\.?\//, "")
    }
  },
  35496: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => pc,
      B: () => bB,
      D: () => gB,
      F: () => Tc,
      J: () => vB,
      K: () => Yc,
      O: () => Lc,
      Q: () => Cc,
      e: () => mB,
      h: () => Mc,
      k: () => ec,
      o: () => Uc,
      q: () => sc,
      t: () => qB,
      w: () => fc,
      y: () => tB
    });
    var Vc = nc(35484),
      Ic = nc(35490);
    const rB = "bloxd-world-code-directory-sync",
      uc = "handles",
      sc = "[INVALID SCHEMATIC PLACEHOLDER]";

    function Mc(cB, Bc) {
      return `${cB}::${Bc}`
    }
    const Pc = new Set(["node_modules", ".git"]);

    function qB() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Oc() {
      return new Promise(((cB, Bc) => {
        const nc = indexedDB.open(rB, 1);
        nc.onupgradeneeded = () => {
          const cB = nc.result;
          cB.objectStoreNames.contains(uc) || cB.createObjectStore(uc)
        }, nc.onsuccess = () => {
          cB(nc.result)
        }, nc.onerror = () => {
          var cB;
          Bc(null !== (cB = nc.error) && void 0 !== cB ? cB : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Tc(cB, Bc) {
      const nc = await Oc();
      try {
        await new Promise(((Vc, Ic) => {
          const rB = nc.transaction(uc, "readwrite");
          rB.objectStore(uc).put(Bc, cB), rB.oncomplete = () => {
            Vc()
          }, rB.onerror = () => {
            var cB;
            Ic(null !== (cB = rB.error) && void 0 !== cB ? cB : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        nc.close()
      }
    }
    async function fc(cB) {
      const Bc = await Oc();
      try {
        return await new Promise(((nc, Vc) => {
          const Ic = Bc.transaction(uc, "readonly").objectStore(uc).get(cB);
          Ic.onsuccess = () => {
            var cB;
            nc(null !== (cB = Ic.result) && void 0 !== cB ? cB : null)
          }, Ic.onerror = () => {
            var cB;
            Vc(null !== (cB = Ic.error) && void 0 !== cB ? cB : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        Bc.close()
      }
    }
    async function mB(cB) {
      const Bc = await Oc();
      try {
        await new Promise(((nc, Vc) => {
          const Ic = Bc.transaction(uc, "readwrite");
          Ic.objectStore(uc).delete(cB), Ic.oncomplete = () => {
            nc()
          }, Ic.onerror = () => {
            var cB;
            Vc(null !== (cB = Ic.error) && void 0 !== cB ? cB : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        Bc.close()
      }
    }
    async function ec(cB) {
      const Bc = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await cB.queryPermission(Bc) || "granted" === await cB.requestPermission(Bc)
    }
    async function tB(cB) {
      if (!qB()) return null;
      try {
        const Bc = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Tc(cB, Bc), Bc
      } catch (Bc) {
        if (function(cB) {
            return cB instanceof DOMException && "AbortError" === cB.name
          }(Bc)) return null;
        throw Bc
      }
    }

    function Sc(cB) {
      return cB.startsWith(".") || Pc.has(cB)
    }

    function yB(cB) {
      if (!cB) return !0;
      const Bc = cB.split("/");
      for (const nc of Bc)
        if ("" === nc || "." === nc || ".." === nc) return !1;
      return !0
    }
    async function zB(cB, Bc, nc) {
      for await (const [rB, uc] of cB.entries()) {
        if ("directory" === uc.kind) {
          if (Sc(rB)) continue;
          const cB = Bc ? `${Bc}/${rB}` : rB;
          if (!yB(cB)) continue;
          await zB(uc, cB, nc);
          continue
        }
        const cB = Bc ? `${Bc}/${rB}` : rB;
        if (!(0, Vc.p)(cB) && !(0, Ic.c)(cB)) continue;
        const sc = await uc.getFile();
        nc[cB] = (0, Ic.c)(cB) ? await Zc(sc) : await sc.text()
      }
    }
    async function pc(cB) {
      const Bc = {};
      return await zB(cB, "", Bc), Bc
    }

    function hc(cB) {
      return !(!cB || cB !== cB.trim() || cB.startsWith("/") || cB.includes("\\") || cB.includes("\0")) && yB(cB)
    }
    async function aB(cB, Bc, nc) {
      const Vc = Bc.split("/"),
        Ic = Vc[Vc.length - 1];
      let rB = cB;
      for (let uc = 0; uc < Vc.length - 1; uc++) rB = await rB.getDirectoryHandle(Vc[uc], {
        create: nc
      });
      return {
        dir: rB,
        fileName: Ic
      }
    }
    async function lc(cB, Bc, nc) {
      if (!hc(Bc)) throw new Error(`Refusing to write unsafe path: ${Bc}`);
      const {
        dir: Vc,
        fileName: Ic
      } = await aB(cB, Bc, !0), rB = await Vc.getFileHandle(Ic, {
        create: !0
      }), uc = await rB.createWritable();
      await uc.write(nc), await uc.close()
    }
    async function Yc(cB, Bc, nc) {
      const Vc = await async function(cB, Bc) {
        if (!hc(Bc)) return null;
        try {
          const {
            dir: nc,
            fileName: Vc
          } = await aB(cB, Bc, !1), Ic = await nc.getFileHandle(Vc), rB = await Ic.getFile();
          return await rB.text()
        } catch (nc) {
          if (nc instanceof DOMException && ("NotFoundError" === nc.name || "NotAllowedError" === nc.name)) return null;
          throw nc
        }
      }(cB, Bc);
      Vc !== nc && await lc(cB, Bc, nc)
    }
    async function Lc(cB, Bc, nc) {
      if (!(0, Vc.p)(Bc) && !(0, Ic.c)(Bc)) throw new Error(`Refusing to write non-allowlisted path: ${Bc}`);
      if ((0, Ic.c)(Bc)) {
        if (await Qc(cB, Bc) === sc) throw new Error(`Move the binary schematic ${Bc} outside the linked folder before syncing its placeholder`)
      }
      await lc(cB, Bc, nc)
    }
    async function gB(cB, Bc) {
      if (!hc(Bc)) throw new Error(`Refusing to remove unsafe path: ${Bc}`);
      try {
        const {
          dir: nc,
          fileName: Vc
        } = await aB(cB, Bc, !1);
        await nc.removeEntry(Vc)
      } catch (nc) {
        if (nc instanceof DOMException && ("NotFoundError" === nc.name || "NotAllowedError" === nc.name)) return;
        throw nc
      }
    }
    async function Uc(cB, Bc) {
      if (!hc(Bc)) return null;
      try {
        const nc = Bc.split("/");
        let Vc = cB;
        for (const cB of nc) Vc = await Vc.getDirectoryHandle(cB);
        return Vc
      } catch (nc) {
        if (nc instanceof DOMException && ("NotFoundError" === nc.name || "NotAllowedError" === nc.name)) return null;
        throw nc
      }
    }
    async function bB(cB, Bc) {
      if ((0, Vc.p)(Bc) || (0, Ic.c)(Bc)) {
        if ((0, Ic.c)(Bc)) {
          if (await Qc(cB, Bc) === sc) throw new Error(`Refusing to remove a binary schematic: ${Bc}`)
        }
        await gB(cB, Bc)
      }
    }
    async function Zc(cB) {
      if (cB.size > 64) return sc;
      const Bc = await cB.text();
      return Array.from(Bc).some((cB => {
        const Bc = cB.charCodeAt(0);
        return Bc < 9 || Bc > 13 && Bc < 32 || 65533 === Bc
      })) ? sc : Bc
    }
    async function Qc(cB, Bc) {
      try {
        const {
          dir: nc,
          fileName: Vc
        } = await aB(cB, Bc, !1);
        return await Zc(await (await nc.getFileHandle(Vc)).getFile())
      } catch (nc) {
        if (nc instanceof DOMException && "NotFoundError" === nc.name) return null;
        throw nc
      }
    }
    async function Cc(cB, Bc) {
      const nc = await pc(cB);
      for (const Vc of Object.keys(nc)) Vc in Bc || (0, Ic.c)(Vc) || await bB(cB, Vc);
      for (const [rB, uc] of Object.entries(Bc))((0, Vc.p)(rB) || (0, Ic.c)(rB)) && await Lc(cB, rB, uc)
    }

    function vB(cB, Bc) {
      var nc, Vc;
      let Ic = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const rB = null !== (nc = Ic.debounceMs) && void 0 !== nc ? nc : 300,
        uc = null !== (Vc = Ic.pollMs) && void 0 !== Vc ? Vc : 1e3;
      let sc = !1,
        Mc = null,
        Pc = null,
        qB = null;
      const Oc = () => {
          sc || (Mc && clearTimeout(Mc), Mc = setTimeout((() => {
            Mc = null, Tc()
          }), rB))
        },
        Tc = async () => {
          if (!sc) try {
            if (!await ec(cB, "readwrite")) return;
            const nc = await pc(cB);
            sc || Bc(nc)
          } catch (nc) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", nc)
          }
        };
      Tc();
      const fc = window.FileSystemObserver;
      if (fc) try {
        qB = new fc((() => {
          Oc()
        })), qB.observe(cB, {
          recursive: !0
        })
      } catch (mB) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", mB), qB = null
      }
      return qB || (Pc = setInterval((() => {
        Oc()
      }), uc)), () => {
        sc = !0, Mc && clearTimeout(Mc), Pc && clearInterval(Pc), qB && qB.disconnect()
      }
    }
  },
  35330: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => fc,
      g: () => mB
    });
    var Vc = nc(73),
      Ic = nc(2258),
      rB = nc(1252),
      uc = nc(1609),
      sc = nc(35270),
      Mc = nc(569),
      Pc = nc(912),
      qB = nc.n(Pc),
      Oc = nc(957);
    const Tc = {},
      fc = (0, Vc.memo)((function() {
        const cB = (0, Ic.e)();
        return (0, rB.f)("damagedByOtherPlayer", (Bc => {
          let {
            K9: nc,
            direction: Vc
          } = Bc;
          const Ic = nc || "nonDirectional";
          if (Tc[Ic]) {
            const Bc = Tc[Ic];
            clearTimeout(Bc.timeout), Bc.direction = Vc, Bc.timeout = setTimeout((() => {
              delete Tc[Ic], cB()
            }), 800)
          } else Tc[Ic] = {
            direction: Vc,
            Cnc: null,
            timeout: setTimeout((() => {
              delete Tc[Ic], cB()
            }), 800)
          };
          cB()
        })), (0, uc.d)("kill", (Bc => {
          let {
            killer: nc,
            victim: Vc
          } = Bc;
          const Ic = Vc.id;
          nc.local && Ic && Ic in Tc && (clearTimeout(Tc[Ic].timeout), delete Tc[Ic], cB())
        })), (0, Vc.useEffect)((() => {
          const cB = (0, sc.e)("turnDamageIndicators", mB);
          return () => {
            cB();
            for (const cB in Tc) clearTimeout(Tc[cB].timeout), delete Tc[cB]
          }
        }), []), (0, Oc.jsx)("div", {
          className: "DirectionalDamage",
          children: Object.entries(Tc).map((cB => {
            let [Bc, nc] = cB;
            const Vc = (0, Mc.E)(nc.direction);
            return (0, Oc.jsx)("div", {
              ref: cB => {
                Tc[Bc] && (Tc[Bc].Cnc = cB)
              },
              className: qB()("DamageIndicator", {
                DamageIndicatorFullCircle: Vc
              })
            }, Bc)
          }))
        })
      }));

    function mB(cB) {
      for (const Bc in Tc) {
        const {
          direction: nc,
          Cnc: Vc
        } = Tc[Bc];
        if ((0, Mc.E)(nc)) continue;
        const Ic = nc - cB;
        Vc.style.rotate = `${Ic}rad`
      }
    }
  },
  35207: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => ec
    });
    var Vc = nc(73),
      Ic = nc(83),
      rB = nc(1051),
      uc = nc(912),
      sc = nc.n(uc),
      Mc = nc(1495),
      Pc = nc(926),
      qB = nc(1134),
      Oc = nc(1283),
      Tc = nc(1480),
      fc = nc(957);
    const mB = 14;

    function ec(cB) {
      let {
        className: Bc,
        triggerElementRef: nc,
        options: uc
      } = cB;
      const {
        t: ec
      } = (0, rB.x)(), [tB, Sc] = (0, Vc.useState)(!1), [yB, zB] = (0, Vc.useState)({
        x: 0,
        y: 0
      }), pc = (0, Vc.useRef)(null);
      (0, Vc.useEffect)((() => {
        const cB = cB => {
            const Bc = mB * (0, Mc.getRemInPx)();
            zB({
              x: Math.min(cB.clientX, window.innerWidth - Bc - 5),
              y: cB.clientY
            }), Sc((cB => !cB))
          },
          Bc = cB => {
            var Bc;
            null !== (Bc = pc.current) && void 0 !== Bc && Bc.contains(cB.relatedTarget) || Sc(!1)
          },
          Vc = nc.current;
        return Vc.addEventListener("pointerup", cB), Vc.addEventListener("mouseleave", Bc), () => {
          Vc.removeEventListener("pointerup", cB), Vc.removeEventListener("mouseleave", Bc)
        }
      }), [nc]), (0, Vc.useEffect)((() => {
        if (tB) return (0, Tc.c)("pointerdown", (cB => {
          !pc.current || pc.current.contains(cB.target) || nc.current.contains(cB.target) || Sc(!1)
        }))
      }), [tB, nc]), (0, Vc.useLayoutEffect)((() => {
        if (!tB || !pc.current) return;
        const cB = pc.current.getBoundingClientRect().height,
          Bc = Math.max(5, window.innerHeight - cB - 5);
        yB.y > Bc && zB({
          x: yB.x,
          y: Bc
        })
      }), [tB, yB]), (0, qB.v)("popup", pc, (() => {
        Sc(!1)
      }), tB);
      const hc = uc.filter((cB => !1 !== cB.show));
      return tB && 0 !== hc.length ? (0, Ic.createPortal)((0, fc.jsx)("div", {
        ref: pc,
        className: sc()("FloatingActions", {
          [Bc]: Bc
        }),
        style: {
          width: `${mB}rem`,
          top: yB.y,
          left: yB.x
        },
        children: hc.map((cB => {
          let {
            icon: Bc,
            text: nc,
            onPointerDown: Vc,
            analyticsClick: Ic
          } = cB;
          return (0, fc.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: cB => {
              void 0 !== Ic && (0, Oc.h)(Ic), Vc(cB), Sc(!1), cB.stopPropagation()
            },
            children: [(0, fc.jsx)(Pc.e, {
              name: Bc
            }), (0, fc.jsx)("div", {
              children: ec(nc)
            })]
          }, nc)
        }))
      }), function() {
        var cB;
        return null !== (cB = document.querySelector(".WholeAppWrapperInner")) && void 0 !== cB ? cB : document.body
      }()) : null
    }
  },
  35549: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Mc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(73),
      uc = nc(1536),
      sc = nc(957);
    const Mc = (0, rB.forwardRef)((function(cB, Bc) {
      let {
        text: nc,
        className: Vc,
        children: rB
      } = cB;
      return nc.hasText ? (0, sc.jsx)("div", {
        ref: Bc,
        className: Ic()("HudTextPanel", Vc, {
          NoBackground: !nc.showBackground
        }),
        children: null !== rB && void 0 !== rB ? rB : (0, sc.jsx)(uc.e, {
          text: nc.content
        })
      }) : null
    }))
  },
  35353: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => gr
    });
    var Vc = nc(35245),
      Ic = nc(73),
      rB = nc(1686),
      uc = nc(3646),
      sc = nc(3648),
      Mc = nc(1946),
      Pc = nc(1566),
      qB = nc(957);

    function Oc(cB) {
      let {
        className: Bc,
        style: nc,
        vw: Vc,
        maxPx: Ic,
        children: rB
      } = cB;
      console.assert("number" === typeof Vc && "number" === typeof Ic, "vw and maxPx passed to Text must be numbers");
      const uc = window.innerWidth * (Vc / 100) > Ic ? `${Ic}px` : `${Vc}vw`;
      return (0, qB.jsx)("div", {
        className: Bc,
        style: {
          ...nc,
          fontSize: uc
        },
        children: rB
      })
    }
    var Tc = nc(35355),
      fc = nc(1255),
      mB = nc(35),
      ec = nc(1594),
      tB = nc(926);

    function Sc(cB) {
      let {
        tasks: Bc,
        lastDisplayedTasks: nc
      } = cB;
      return (0, qB.jsx)(qB.Fragment, {
        children: Object.keys(Bc).map((cB => (0, qB.jsx)(yB, {
          task: Bc[cB],
          lastDisplayedAs: nc[cB]
        }, Bc[cB].text)))
      })
    }

    function yB(cB) {
      let {
        task: Bc,
        lastDisplayedAs: nc
      } = cB;
      const [Vc, rB] = (0, Ic.useState)(null !== nc && void 0 !== nc && nc.progress ? nc.progress / Bc.goal : 0), [uc, sc] = (0, Ic.useState)(!1), [Mc, Pc] = (0, Ic.useState)(Bc.claimed || !1);
      return (0, Ic.useEffect)((() => {
        rB(Bc.progress / Bc.goal)
      }), [Bc.progress, Bc.goal]), Mc ? null : (0, qB.jsxs)("div", {
        className: "Task",
        children: [(0, qB.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, qB.jsx)(Oc, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: Bc.text
          })
        }), Bc.progress < Bc.goal ? (0, qB.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== Vc ? (0, qB.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * Vc + "%"
            }
          }) : null, (0, qB.jsx)("div", {
            className: "TaskProgressText",
            children: `${Bc.progress}/${Bc.goal}`
          })]
        }) : (0, qB.jsx)(fc.n, {
          className: "ClaimRewardButton",
          onClick: () => {
            sc(!0)
          },
          children: (0, qB.jsx)(Oc, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), uc ? (0, qB.jsx)(zB, {
          task: Bc,
          close: () => {
            Bc.claimed = !0, Pc(!0), sc(!1)
          }
        }) : null]
      })
    }

    function zB(cB) {
      let {
        task: Bc,
        close: nc
      } = cB;
      const [Vc, rB] = (0, Ic.useState)({}), [uc, sc] = (0, Ic.useState)("closed");
      (0, Ic.useEffect)((() => {
        let cB;
        return "animStart" === uc && (cB = setTimeout((() => {
          sc("animEnd")
        }), 700)), () => {
          clearTimeout(cB)
        }
      }), [uc]), (0, Tc.b)((() => {
        Pc.gameBridge.send("completeTask", Bc.text)
      }));
      const Oc = (0, Mc.j)("currencyAmounts");
      return (0, qB.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === uc)
            if (0 === Bc.rewards.length) nc(), Pc.gameBridge.send("completeTask", Bc.text);
            else {
              const cB = {
                ...ec.d.get("currencyAmounts")
              };
              for (const Bc in Vc) cB[Bc] = {
                ...cB[Bc],
                amount: cB[Bc].amount + Vc[Bc]
              };
              ec.d.apply({
                currencyAmounts: cB
              }), sc("closed")
            }
          else "closed" === uc && (rB(Bc.rewards.pop()), sc("animStart"))
        },
        children: [(0, qB.jsx)("img", {
          className: "Chest",
          alt: "closed" !== uc ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==uc?"open":"closed"}.png`
        }), (0, qB.jsx)("div", {
          className: "Rewards",
          children: "closed" !== uc ? Object.keys(Vc).map((cB => {
            const Bc = null === Oc || void 0 === Oc ? void 0 : Oc[cB];
            return !Bc || Bc.hidden ? null : (0, qB.jsxs)("div", {
              className: "Reward",
              children: [(0, qB.jsx)(tB.e, {
                name: Bc.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: Bc.iconColour
                }
              }), (0, qB.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === uc ? 0 : Vc[cB]
              })]
            }, cB)
          })) : null
        }), "animStart" === uc ? (0, qB.jsx)(pc, {}) : null, (0, qB.jsx)("div", {
          className: "ChestsLeft",
          children: Bc.rewards.length
        })]
      })
    }

    function pc() {
      const [cB, Bc] = (0, Ic.useState)(0);
      (0, Ic.useEffect)((() => {
        Bc(1)
      }), []);
      return (0, qB.jsx)(qB.Fragment, {
        children: Array.from({
          length: 40
        }).map(((Bc, nc) => (0, qB.jsx)(tB.e, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * cB * Math.cos(nc / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * cB * Math.sin(nc / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === cB ? 1 : 0
          }
        }, nc)))
      })
    }
    mB.i.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const cB = new Image,
          Bc = new Image;
        cB.src = "/textures/miscImages/Treasure Chest open.png", Bc.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var hc = nc(2311),
      aB = nc(985),
      lc = nc(1536),
      Yc = nc(1252),
      Lc = nc(302),
      gB = nc(1609),
      Uc = nc(1188);

    function bB(cB) {
      var Bc, nc;
      let {
        byId: Vc,
        localId: Ic
      } = cB;
      return null === Ic ? null : null !== (Bc = null === (nc = Vc[Ic]) || void 0 === nc ? void 0 : nc.name) && void 0 !== Bc ? Bc : null
    }

    function Zc(cB) {
      let {
        lbStats: Bc,
        storedState: nc = {}
      } = cB;
      const {
        userContext: Vc
      } = (0, aB.c)(), rB = (0, gB.e)("players", bB), [uc, sc] = (0, Ic.useState)(nc.selectedCat || (null === Bc || void 0 === Bc ? void 0 : Bc[0]) || null), [Mc, Oc] = (0, Ic.useState)(nc.selectedTimeframe || "Today"), [Tc, fc] = (0, Ic.useState)(null);
      (0, Ic.useEffect)((() => {
        null === uc && null !== Bc && Bc.length > 0 && sc(Bc[0])
      }), [Bc, uc]);
      const [mB, ec] = (0, Ic.useState)(nc.seeingTop || !1), [tB, Sc] = (0, Ic.useState)(!1), yB = (0, Ic.useCallback)((() => {
        null !== uc && null !== Mc && (Pc.gameBridge.send("requestLeaderboard", {
          category: uc.value,
          timeframe: Mc,
          seeTop: mB
        }), pc(!0), vB && Dc(null))
      }), [uc, Mc, nc, mB]);
      (0, Ic.useEffect)((() => {
        yB(), nc.selectedCat = uc, nc.selectedTimeframe = Mc, nc.seeingTop = mB
      }), [uc, Mc, nc, mB, yB]), (0, Ic.useEffect)((() => {
        if ((null === Tc || void 0 === Tc ? void 0 : Tc.length) > 0)
          if (mB) mB && Sc(null === Zc(Tc));
          else {
            for (const cB of Tc)
              if (1 === cB.place) return void Sc(!1);
            Sc(!0)
          }
      }), [Tc, mB]), (0, Yc.f)("leaderboardResponse", (cB => {
        let {
          category: nc,
          timeframe: Vc,
          data: Ic
        } = cB;
        for (let rB = 0; rB < Bc; rB++)
          if (Bc[rB].value === nc) {
            sc(Bc[rB]);
            break
          } Oc(Vc), fc(Ic), pc(!1)
      }));
      const [zB, pc] = (0, Ic.useState)(!0);

      function Zc(cB) {
        const Bc = bB(Pc.gameBridge.latest("players"));
        for (let nc = 0; nc < cB.length; nc++)
          if (cB[nc].name === Bc) return cB[nc].place;
        return null
      }
      const [Qc, Cc] = (0, Ic.useState)(!1), [vB, Dc] = (0, Ic.useState)(null);
      (0, Ic.useEffect)((() => {
        if (Tc && !Qc) {
          const cB = Zc(Tc);
          cB < (nc.lastSeenPlayerPlace || 0) && Dc(nc.lastSeenPlayerPlace - cB), Cc(!0)
        }
      }), [Tc, nc, Qc]), (0, Ic.useEffect)((() => () => {
        Tc && (nc.lastSeenPlayerPlace = Zc(Tc))
      }), [Tc, nc]);
      const Nc = (0, Ic.useRef)(null),
        [Ec, oc] = (0, Ic.useState)(void 0);
      return (0, Ic.useEffect)((() => {
        var cB, Bc;
        Ec !== (null === (cB = Nc.current) || void 0 === cB ? void 0 : cB.offsetHeight) && oc(null === (Bc = Nc.current) || void 0 === Bc ? void 0 : Bc.offsetHeight)
      })), Vc.isLoggedIn() ? (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, qB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, qB.jsx)(hc.c, {
              options: Bc.map((cB => ({
                label: cB.label,
                value: cB.value
              }))),
              value: uc,
              onChange: cB => {
                sc(cB)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, qB.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, qB.jsx)(hc.c, {
              options: Lc.mc.map((cB => ({
                value: cB,
                label: cB,
                className: "LBDropdownMenuItem"
              }))),
              value: Mc,
              onChange: cB => {
                Oc(cB.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), tB ? (0, qB.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              ec(!mB)
            },
            children: mB ? "See Yourself" : "See Top"
          }) : null]
        }), (0, qB.jsx)("div", {
          className: "LBTableWrapper",
          children: zB ? (0, qB.jsx)("div", {
            className: "LoaderContainer",
            children: (0, qB.jsx)(Uc.e, {})
          }) : null === vB ? (0, qB.jsx)(qB.Fragment, {
            children: (0, qB.jsxs)("table", {
              className: "LBTable",
              children: [(0, qB.jsx)("thead", {
                className: "LBTableTHead",
                ref: Nc,
                children: (0, qB.jsxs)("tr", {
                  children: [(0, qB.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, qB.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, qB.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: uc.label.toUpperCase()
                  })]
                })
              }), (0, qB.jsx)("tbody", {
                children: Tc.map((cB => (0, qB.jsxs)("tr", {
                  className: "LBTableTR " + (cB.name === rB ? "LBTableTRYou" : ""),
                  children: [(0, qB.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${cB.place}`
                  }), (0, qB.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, qB.jsx)(lc.e, {
                      text: [{
                        entityName: cB.name
                      }]
                    })
                  }), (0, qB.jsx)("td", {
                    className: "LBTableTD",
                    children: cB.stat
                  })]
                }, cB.name)))
              })]
            })
          }) : (0, qB.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              Dc(null)
            },
            children: (0, qB.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, qB.jsx)("div", {
                className: "TriangleUp"
              }), (0, qB.jsx)("div", {
                className: "LBIncreaseText",
                children: `${vB} Place${vB>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, qB.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, qB.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, qB.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Qc = nc(981),
      Cc = nc(107),
      vB = nc(51),
      Dc = nc(2604);
    const Nc = (0, Ic.memo)((function(cB) {
      let {
        show: Bc,
        onClose: nc
      } = cB;
      (0, Qc.e)();
      const Vc = (0, Mc.j)("_tasks"),
        rB = (0, Mc.j)("_availableLeaderboards"),
        [Pc, Oc] = (0, Ic.useState)({});
      Vc && Object.keys(Vc).length > 0 && 0 === Object.keys(Pc).length && Oc(Vc);
      const [Tc] = (0, Ic.useState)({
        tasks: {},
        leaderboard: {}
      }), fc = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!Vc && Object.keys(Vc).length > 0,
          content: (0, qB.jsx)(Sc, {
            tasks: Vc,
            lastDisplayedTasks: Pc
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === rB || void 0 === rB ? void 0 : rB.length) > 0,
          content: (0, qB.jsx)(Zc, {
            lbStats: rB,
            storedState: Tc.leaderboard
          })
        }
      };

      function mB() {
        for (const cB in fc)
          if (fc[cB].getIsDefined()) return cB;
        return null
      }
      const [ec, tB] = (0, Ic.useState)(mB());

      function yB() {
        Oc({
          ...Vc
        }), nc()
      }(0, Ic.useEffect)((() => {
        ec || tB(mB())
      }), [mB()]), (0, sc.c)(!0, ec && Bc), (0, Ic.useEffect)((() => {
        Bc && !ec && (console.log("CLOSE"), yB())
      }), [Bc, ec]);
      const [zB, pc] = (0, Ic.useState)(!1);
      return (0, Ic.useEffect)((() => {
        Bc && ec && !zB && pc(!0)
      }), [Bc, zB, ec]), (0, Ic.useEffect)((() => {
        !zB && Vc && "tasks" !== ec && tB("tasks")
      }), [zB, Vc, ec]), (0, qB.jsx)(qB.Fragment, {
        children: ec ? (0, qB.jsx)(Dc.c, {
          className: "RetentionFeaturesWrapper",
          show: Bc,
          children: (0, qB.jsxs)(uc.b, {
            close: yB,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, qB.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, qB.jsx)(oc, {}), (0, qB.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, qB.jsx)(Ec, {
                  setCategory: tB,
                  menuCategories: fc,
                  selectedCat: ec
                }), (0, qB.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: fc[ec].content
                })]
              })]
            }), (0, qB.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Cc.featureFlags.useDiscord && (0, qB.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, qB.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, qB.jsx)(Wc, {
                    tasks: Vc
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Ec(cB) {
      let {
        selectedCat: Bc,
        setCategory: nc,
        menuCategories: Vc
      } = cB;
      return (0, qB.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(Vc).map((cB => Vc[cB].getIsDefined() ? (0, qB.jsx)("div", {
          className: "MenuHeaderCategory " + (cB === Bc ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            nc(cB)
          },
          children: Vc[cB].Title
        }, cB) : null))
      })
    }

    function oc() {
      const cB = (0, Mc.j)("currencyAmounts");
      return (0, qB.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== cB && void 0 !== cB ? cB : {}).map((Bc => {
          const nc = cB[Bc];
          return nc.hidden ? null : (0, qB.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, qB.jsx)(tB.e, {
              name: nc.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: nc.iconColour
              }
            }), (0, qB.jsx)("div", {
              className: "UiCurrencyAmount",
              children: nc.amount
            })]
          }, Bc)
        }))
      })
    }

    function Wc(cB) {
      let {
        tasks: Bc
      } = cB;
      return (0, qB.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, qB.jsx)(tB.e, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            vB.h.setItem("DiscordPressed", !0), Pc.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in Bc && mB.i.Vu("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, qB.jsx)(rB.d, {})]
      })
    }
    var wc = nc(8129),
      kB = nc(35361),
      Xc = nc(2329),
      Hc = nc(2333),
      Fc = nc(1613);
    const Jc = (cB, Bc) => {
        (0, Ic.useEffect)((() => {
          setTimeout((() => {
            cB && cB.current && cB.current.focus()
          }), 1)
        }), [Bc])
      },
      jB = (0, Ic.memo)((function(cB) {
        let {
          isInputActive: Bc,
          onClose: nc,
          onChange: Vc,
          textAreaRef: Ic,
          fontSize: rB,
          lineHeight: uc,
          currText: sc
        } = cB;
        return (0, qB.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, qB.jsx)("img", {
            src: `${Xc.c.getTexture("board_full",Hc.h.BLOCK).url}`,
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, qB.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: sc,
            ref: Ic,
            style: {
              fontSize: `${rB}rem`,
              lineHeight: `${uc}rem`
            },
            onKeyDown: cB => {
              var Bc;
              "Escape" !== cB.key && (cB.stopPropagation(), "Tab" === cB.key && function(cB) {
                cB.preventDefault();
                const Bc = cB.target,
                  {
                    value: nc
                  } = Bc;
                let Vc = Bc.selectionStart,
                  Ic = Bc.selectionEnd,
                  rB = nc.slice(Vc, Ic);
                if (!rB.includes("\n") && !cB.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; Vc > 0 && "\n" !== nc[Vc - 1];) Vc--;
                const uc = "\n" === nc[Ic - 1];
                uc && Ic--;
                rB = nc.slice(Vc, Ic);
                const sc = rB.split("\n").map((Bc => cB.shiftKey ? Bc.replace(/^\t/, "") : "\t" + Bc)).join("\n");
                if (cB.shiftKey && nc.slice(Vc, Ic) === sc) return;
                let {
                  selectionStart: Mc
                } = Bc;
                Bc.setSelectionRange(Vc, Ic), Mc > Vc && (!cB.shiftKey || "\t" === rB[0]) && (Mc += cB.shiftKey ? -1 : 1);
                Ic = Vc + sc.length + (uc ? 1 : 0), document.execCommand("insertText", !1, sc), Bc.setSelectionRange(Mc, Ic)
              }(cB), /^F\d+$/i.test(cB.code) && null !== (Bc = Fc.v.OpenCodeEditor) && void 0 !== Bc && Bc.includes(cB.code) && nc())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: Vc
          })]
        })
      }));

    function Rc(cB) {
      return 1.3 * cB
    }
    var iB = nc(1492);
    const Kc = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(null), [Mc, Oc] = (0, Ic.useState)(""), [Tc, mB] = (0, Ic.useState)(0), [ec, tB] = (0, Ic.useState)(null), [Sc, yB] = (0, Ic.useState)({
          text: "",
          textSize: 0
        }), zB = (cB, Bc) => ec ? (0, kB.j)(cB, Bc, ec.width, ec.height) : (0, kB.e)(cB, Bc), pc = cB => {
          Oc(zB(Mc, cB)), mB(cB), vB.h.setItem("lastBoardTextSize", cB)
        }, hc = () => {
          Vc(), ec && Mc === Sc.text && Tc === Sc.textSize || Pc.gameBridge.send("writeOnBoard", {
            pos: rB,
            text: Mc,
            textSize: Tc
          })
        };
        (0, gB.d)("boardEditRequested", (cB => {
          var Ic, rB;
          if (!Cc.featureFlags.canSeePlayerWrittenText) return;
          if (null === cB) return sc(null), void(Bc && Vc());
          const {
            pos: uc,
            noticeboardSpan: Mc,
            text: Pc
          } = cB;
          sc(uc), tB(Mc), Oc(Pc);
          const qB = null !== (Ic = null !== (rB = cB.textSize) && void 0 !== rB ? rB : vB.h.getItem("lastBoardTextSize")) && void 0 !== Ic ? Ic : 0;
          mB(qB), yB({
            text: Pc,
            textSize: qB
          }), vB.h.setItem("lastBoardTextSize", qB), nc()
        }));
        const aB = (0, Ic.useRef)(null);
        Jc(aB, Bc), (0, iB.r)(aB, {
          kind: "sign",
          submit: hc
        });
        const lc = function(cB, Bc) {
            const nc = kB.d[cB];
            if (!Bc) return nc.uiFontSize;
            const {
              numLines: Vc,
              charsPerLine: Ic
            } = (0, kB.s)(Bc.width, Bc.height, cB);
            return nc.uiFontSize * Math.min(nc.charsPerLine / Ic, nc.numLines / Vc)
          }(Tc, ec),
          Yc = Rc(lc);
        return (0, qB.jsxs)(uc.b, {
          className: "WriteOnBoardBg",
          close: hc,
          escDoesExit: !0,
          show: Bc,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, qB.jsx)(jB, {
            isInputActive: () => Bc,
            onClose: hc,
            onChange: cB => {
              Oc(zB(cB.target.value, Tc))
            },
            textAreaRef: aB,
            fontSize: lc,
            lineHeight: Yc,
            currText: Mc
          }), (0, qB.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, qB.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, qB.jsx)(fc.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pc(0)
              },
              disabled: 0 === Tc,
              children: "Small"
            }), (0, qB.jsx)(fc.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pc(1)
              },
              disabled: 1 === Tc,
              children: "Medium"
            }), (0, qB.jsx)(fc.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                pc(2)
              },
              disabled: 2 === Tc,
              children: "Large"
            })]
          })]
        })
      })),
      xB = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(""), Mc = () => {
          Vc(), Pc.gameBridge.send("writeNameTag", rB)
        };
        (0, Yc.f)("EditNameTag", (cB => {
          Cc.featureFlags.canSeePlayerWrittenText && null !== cB && (sc(cB), nc())
        }));
        const Oc = (0, Ic.useRef)(null);
        Jc(Oc, Bc), (0, iB.r)(Oc, {
          kind: "nameTag",
          submit: Mc
        });
        const Tc = kB.z.nameTag.uiFontSize,
          mB = Rc(Tc);
        return (0, qB.jsxs)(uc.b, {
          className: "WriteOnBoardBg",
          close: Mc,
          escDoesExit: !0,
          show: Bc,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, qB.jsx)("div", {
            className: "NameTagTrim",
            children: (0, qB.jsx)(jB, {
              isInputActive: () => Bc,
              onClose: Mc,
              onChange: cB => {
                const Bc = cB.target.value.replaceAll("\n", "");
                sc((0, kB.k)(Bc, "nameTag"))
              },
              textAreaRef: Oc,
              fontSize: Tc,
              lineHeight: mB,
              currText: rB
            })
          }), (0, qB.jsx)(fc.d, {
            onClick: Mc,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      })),
      dc = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(""), [Mc, Oc] = (0, Ic.useState)(0), [Tc, mB] = (0, Ic.useState)(!1), [ec, tB] = (0, Ic.useState)(["", "", "", "", "", "", "", "", "", ""]), [Sc, yB] = (0, Ic.useState)("Title"), [zB, pc] = (0, Ic.useState)(!0), [hc, aB] = (0, Ic.useState)(!1);
        (0, Yc.f)("EditBook", (cB => {
          let {
            pages: Bc,
            title: Vc,
            isPublished: Ic
          } = cB;
          var rB;
          Cc.featureFlags.canSeePlayerWrittenText && (null !== Bc ? (tB(Bc), sc(null !== (rB = Bc[0]) && void 0 !== rB ? rB : ""), yB(Vc), Oc(0), mB(!1), pc(!Ic), aB(!1), nc()) : tB(["", "", "", "", "", "", "", "", "", ""]))
        }));
        const lc = (0, Ic.useRef)(null),
          Lc = (0, Ic.useRef)(null);
        Jc(lc, Bc), (0, iB.r)(lc, {
          kind: "book"
        }), (0, iB.r)(Lc, {
          kind: "Hk"
        });
        const gB = kB.z.book.uiFontSize,
          Uc = Rc(gB),
          bB = Bc ? Xc.c.getTexture("book_page", Hc.h.ITEM).url : void 0,
          Zc = () => {
            (zB || hc) && Pc.gameBridge.send("writeBook", {
              pages: [...ec],
              title: Sc,
              published: !zB && hc
            })
          },
          Qc = cB => {
            Tc && (ec[Mc] = rB, mB(!1)), sc(ec[cB]), Oc(cB)
          };
        return (0, qB.jsxs)(uc.b, {
          className: "WriteOnBoardBg",
          close: () => {
            Vc(), ec[Mc] = rB, Zc()
          },
          escDoesExit: !0,
          show: Bc,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnBookComp",
          children: [(0, qB.jsxs)("div", {
            className: "WriteOnBookWrapper",
            children: [(0, qB.jsx)("textarea", {
              className: "BookTitleTextArea SmallTextLight",
              value: Sc,
              ref: Lc,
              style: {
                fontSize: "2.5rem",
                lineHeight: `${Uc}rem`
              },
              onKeyDown: cB => {
                zB && cB.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: cB => {
                let Bc = cB.target.value;
                Bc = (0, kB.k)(Bc, "Hk"), yB(Bc)
              },
              readOnly: !zB
            }), (0, qB.jsx)("img", {
              src: bB,
              alt: "book_page",
              className: "WriteOnBookPageImg"
            }), (0, qB.jsx)("div", {
              className: "BookTextAreaPadding",
              children: (0, qB.jsx)("textarea", {
                className: "WriteOnBookPageTextArea",
                value: rB,
                ref: lc,
                style: {
                  fontSize: `${gB}rem`,
                  lineHeight: `${Uc}rem`
                },
                onKeyDown: cB => {
                  zB && cB.stopPropagation()
                },
                spellCheck: "false",
                autoComplete: "off",
                onChange: cB => {
                  const Bc = cB.target.value;
                  sc((0, kB.k)(Bc, "book")), mB(!0)
                },
                readOnly: !zB
              })
            })]
          }), (0, qB.jsxs)("div", {
            className: "BookNavigationWrapper",
            children: [(0, qB.jsx)(fc.d, {
              disabled: 0 === Mc,
              onClick: () => {
                Qc(Mc - 1)
              },
              className: "BookNavButton",
              children: "<"
            }), (0, qB.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, qB.jsx)(fc.d, {
              disabled: 9 === Mc,
              onClick: () => {
                Qc(Mc + 1)
              },
              className: "BookNavButton",
              children: ">"
            }), (0, qB.jsx)("div", {
              style: {
                width: "2rem"
              }
            }), (0, qB.jsx)(fc.d, {
              onClick: () => {
                pc(!zB), aB(!0)
              },
              className: "BookNavButton",
              children: zB ? "Publish" : "Edit"
            })]
          })]
        })
      }));
    var Ac = nc(35253),
      Gc = nc(7592),
      cn = nc(1226),
      BB = nc(1051),
      nB = nc(1553);

    function VB(cB) {
      let {
        show: Bc
      } = cB;
      (0, Yc.g)(Ac.d, (0, Ac.m)());
      const {
        t: nc
      } = (0, BB.x)(), Vc = (0, Ic.useRef)(null);
      (0, Ic.useEffect)((() => {
        var cB, nc;
        const Ic = Bc ? (0, Ac.y)() : null;
        if (!Ic || !(0, cn.f)()) return;
        const rB = (0, Ac.m)().findIndex((cB => cB.id === Ic));
        (0, Gc.w)(null !== (cB = null === (nc = Vc.current) || void 0 === nc ? void 0 : nc.children[rB]) && void 0 !== cB ? cB : null)
      }), [Bc]);
      const rB = (0, Ac.m)();
      return 0 === rB.length ? null : (0, qB.jsx)("div", {
        ref: Vc,
        className: "ClientGameInventoryButtons",
        onPointerDown: cB => {
          cB.stopPropagation()
        },
        onPointerUp: cB => {
          cB.stopPropagation()
        },
        children: rB.map((cB => {
          const Bc = nc(cB.labelKey);
          return (0, qB.jsxs)(fc.n, {
            className: cB.className,
            disabled: cB.disabled,
            onClick: () => {
              (0, Ac.t)(cB)
            },
            ariaLabel: cB.iconOnly ? Bc : void 0,
            title: cB.iconOnly ? Bc : void 0,
            children: [cB.icon && (0, qB.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === cB.icon.kind && (0, qB.jsx)(nB.d, {
                itemName: cB.icon.name,
                amount: 0
              }), "image" === cB.icon.kind && (0, qB.jsx)("img", {
                src: cB.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === cB.icon.kind && (0, qB.jsx)(tB.e, {
                name: cB.icon.name
              })]
            }), !cB.iconOnly && Bc]
          }, cB.id)
        }))
      })
    }
    var IB = nc(35363),
      rn = nc(2167),
      uB = nc(8201),
      sB = nc(35164),
      MB = nc(35161);
    let PB = null;
    window.setShowInventoryAdsOverride = cB => {
      PB = cB
    };
    const qn = 24e4;
    var OB = nc(1559);

    function TB(cB) {
      var Bc;
      let {
        draggedInfo: {
          name: nc,
          attributes: Vc,
          amount: Ic
        },
        toAddRef: rB
      } = cB;
      return (0, qB.jsx)("div", {
        className: "DraggedInvenItem",
        ref: rB,
        children: (0, qB.jsx)(nB.d, {
          itemName: nc,
          amount: Ic,
          enchantmentTier: null === Vc || void 0 === Vc || null === (Bc = Vc.customAttributes) || void 0 === Bc ? void 0 : Bc.enchantmentTier,
          bar: (0, OB.g)(Vc)
        })
      })
    }

    function fB(cB) {
      let {
        className: Bc = "",
        displayInfo: nc,
        domRef: Vc
      } = cB;
      return (0, qB.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${Bc}`,
        ref: Vc,
        children: [(0, qB.jsx)(lc.e, {
          text: (0, Lc.fb)(nc.name, {
            fontStyle: nc.fontStyle
          })
        }), (0, qB.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, qB.jsx)(lc.e, {
            text: nc.desc
          })
        })]
      })
    }

    function mn(cB) {
      let {
        info: Bc,
        draggedInfo: nc
      } = cB;
      return (0, qB.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        style: {
          left: Bc.initTouchX,
          top: Bc.initTouchY
        },
        children: [(0, qB.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: nc.amount / Bc.maxAmount * 100 + "%"
          }
        }), (0, qB.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [nc.amount, "/", Bc.maxAmount]
        })]
      })
    }
    var eB = nc(912),
      tn = nc.n(eB),
      SB = nc(174);
    const yn = (0, Ic.memo)((function(cB) {
      let {
        show: Bc,
        onOpen: nc,
        onClose: Vc
      } = cB;
      const rB = (0, Ic.useRef)({
          pos: null
        }),
        [sc, Mc] = (0, Ic.useState)([0, 0, 0, 0]),
        {
          userContext: Oc
        } = (0, aB.c)();
      (0, gB.d)("ironChestOpenRequested", (cB => {
        let {
          pos: Bc,
          ownerDbId: Vc,
          cachedPasskey: Ic
        } = cB;
        if (rB.current.pos = Bc, Vc !== Oc.whamm) return null !== Ic ? (Mc(Ic), void Tc(Ic)) : void nc();
        Tc(sc)
      })), (0, gB.d)("localEffectUpdated", (cB => {
        "Thief" === cB && Vc()
      }));
      const Tc = cB => {
        const {
          pos: Bc
        } = rB.current;
        Pc.gameBridge.send("openIronChest", {
          pos: Bc,
          Gs: cB
        })
      };
      return (0, qB.jsx)(uc.b, {
        className: "IronChestPasskeyInputScreenOuter",
        close: Vc,
        escDoesExit: !0,
        show: Bc,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, qB.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, qB.jsx)(zn, {
            Gs: sc,
            onPasskeyUpdated: Mc,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Tc(sc)
            }
          })
        })
      })
    }));

    function zn(cB) {
      let {
        className: Bc = "",
        Gs: nc,
        onPasskeyUpdated: Vc,
        confirmText: Ic,
        onConfirm: rB
      } = cB;
      const {
        t: uc
      } = (0, BB.x)();
      return (0, qB.jsxs)("div", {
        className: `${Bc} IronChestPasskeyInput`,
        children: [(0, qB.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: uc("ironChest:passkeyInputTitle")
        }), (0, qB.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(SB.e.ironChestPasskeyLength).fill(0).map(((cB, Bc) => (0, qB.jsx)(pB, {
            digit: nc[Bc],
            onPasskeyDigitUpdated: cB => {
              const Ic = [...nc];
              Ic[Bc] = cB, Vc(Ic)
            }
          }, Bc)))
        }), (0, qB.jsx)(fc.n, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: rB,
          children: uc(Ic)
        })]
      })
    }

    function pB(cB) {
      let {
        digit: Bc,
        onPasskeyDigitUpdated: nc
      } = cB;
      return (0, qB.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, qB.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, qB.jsx)(fc.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              nc(Lc.b.mod(Bc + 1, 10))
            },
            children: (0, qB.jsx)(tB.e, {
              name: "angle-up"
            })
          }), (0, qB.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: Bc
          }), (0, qB.jsx)(fc.n, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              nc(Lc.b.mod(Bc - 1, 10))
            },
            children: (0, qB.jsx)(tB.e, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var hB = nc(8196),
      an = nc(35406),
      lB = nc(35157);

    function YB(cB) {
      let {
        specialItemInfo: Bc,
        setHovered: nc,
        pointerDown: Vc,
        pointerUp: rB,
        enchantingTablePosition: uc,
        enchantingTableBlockName: sc
      } = cB;
      const {
        t: Oc
      } = (0, BB.x)(), [Tc, mB] = (0, Ic.useState)(null), [ec, tB] = (0, Ic.useState)(null), Sc = (0, Mc.j)("auraPerLevel"), yB = Math.floor((0, gB.g)("aura") / Sc);
      (0, Ic.useEffect)((() => {
        if (!Bc) return void mB(null);
        let cB = !0;
        return Pc.gameBridge.query("enchantingOffer", {
          slot: Bc.idx,
          name: Bc.name,
          blockName: sc
        }).then((nc => {
          var Vc, Ic;
          let {
            perks: rB,
            options: uc
          } = nc;
          if (!cB) return;
          const sc = {
            isEnchantable: rB.length > 0,
            possibleEnchantments: rB,
            options: uc.map((cB => {
              let {
                level: Bc,
                odds: nc
              } = cB;
              return {
                level: Bc,
                possibilities: Object.fromEntries(nc.map(((cB, Bc) => [`Tier ${Bc+1}`, cB])))
              }
            })),
            isAlreadyEnchanted: rB.length > 0 && void 0 !== (null === (Vc = Bc.attributes) || void 0 === Vc || null === (Ic = Vc.customAttributes) || void 0 === Ic ? void 0 : Ic.enchantmentTier)
          };
          mB(sc), (cB => {
            const Bc = cB.options.map((cB => Object.entries(cB.possibilities).map((cB => {
              let [Bc, nc] = cB;
              return {
                str: `${Bc}: ${nc>0?nc<.01?nc.toPrecision(1):nc.toFixed(2):0}%\n`,
                style: {
                  color: Lc.db[Bc]
                }
              }
            }))));
            tB(Bc)
          })(sc)
        })), () => {
          cB = !1
        }
      }), [Bc, uc, sc]);
      const zB = [];
      for (let Ic = 0; Ic < an.b; Ic++) {
        const cB = null === Tc || void 0 === Tc ? void 0 : Tc.options[Ic],
          Vc = !cB || cB.level > yB;
        zB.push((0, qB.jsx)(fc.d, {
          className: "EnchantmentButton",
          onPointerEnter: cB ? cB => null === nc || void 0 === nc ? void 0 : nc()(!0, {
            name: "",
            desc: ec[Ic]
          }, cB) : void 0,
          onPointerLeave: cB ? () => null === nc || void 0 === nc ? void 0 : nc()(!1) : void 0,
          onClick: Vc ? void 0 : () => {
            Pc.gameBridge.send("enchantItem", {
              slot: Bc.idx,
              level: cB.level,
              tablePos: uc
            }), mB(null)
          },
          disabled: Vc,
          children: cB ? (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, qB.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Oc("enchantments:cost"), ": "]
              }), " ", Oc("enchantments:levels", {
                level: cB.level
              })]
            }), (0, qB.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, qB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, qB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Oc("enchantments:tier")
                }), Object.entries(cB.possibilities).map((cB => {
                  let [Bc, nc] = cB;
                  return 0 === nc ? null : (0, qB.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Lc.db[Bc]
                    },
                    children: Bc
                  }, Bc)
                }))]
              }), (0, qB.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, qB.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Oc("enchantments:odds")
                }), Object.entries(cB.possibilities).map((cB => {
                  let [Bc, nc] = cB;
                  return 0 === nc ? null : (0, qB.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: Lc.db[Bc]
                    },
                    children: [nc > 0 && nc < .1 ? "<0.1" : nc.toFixed(0 < nc && nc < .95 ? 1 : 0), "%"]
                  }, Bc)
                }))]
              })]
            })]
          }) : !1 === (null === Tc || void 0 === Tc ? void 0 : Tc.isEnchantable) ? (0, qB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Oc("enchantments:notEnchantable")
          }) : (0, qB.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Oc("enchantments:enterItem")
          })
        }, Ic))
      }
      return (0, qB.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, qB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: sc
        }), (0, qB.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, qB.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, qB.jsx)(lB.c, {
              idx: MB.f,
              setHovered: cB => {
                null === nc || void 0 === nc || nc(MB.f)(cB)
              },
              pointerDown: Vc,
              pointerUp: rB,
              draggedInfo: null,
              specialItemInfo: Bc,
              variation: "Enchanting Table"
            }), Tc && Tc.possibleEnchantments.length > 0 && (0, qB.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, qB.jsx)("h2", {
                children: "Possible Perks:"
              }), Tc.possibleEnchantments.map((cB => (0, qB.jsxs)(Ic.Fragment, {
                children: [(0, qB.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, qB.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, qB.jsx)(nB.d, {
                      itemName: `${cB} Enchantment`,
                      amount: 1
                    })
                  }), (0, qB.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: cB
                  })]
                }), (0, qB.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Oc((0, hB.k)(cB).translationKey)
                })]
              }, cB)))]
            })]
          }), (0, qB.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Tc && Tc.isAlreadyEnchanted && (0, qB.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Oc("enchantments:alreadyEnchanted")
            }), zB]
          })]
        })]
      })
    }
    var LB = nc(35414);

    function gn(cB) {
      var Bc;
      let {
        specialItemInfo: nc,
        setSpecialItemInfo: Vc,
        setHovered: rB,
        pointerDown: uc,
        pointerUp: sc
      } = cB;
      const {
        t: Mc
      } = (0, BB.x)(), Oc = (0, gB.e)("inventory", (cB => cB.freeSlots)), [Tc, mB] = (0, Ic.useState)(null);
      (0, Ic.useEffect)((() => {
        if (nc) {
          const cB = (0, LB.c)(nc.name, nc.amount);
          mB({
            salvageable: !!cB,
            produces: cB
          })
        } else mB(null)
      }), [nc, null === nc || void 0 === nc ? void 0 : nc.name, null === nc || void 0 === nc ? void 0 : nc.amount]);
      const ec = !!nc && !(null === Tc || void 0 === Tc || !Tc.salvageable) && !(null !== (Bc = Tc.produces) && void 0 !== Bc && Bc.some((cB => {
        let {
          amt: Bc
        } = cB;
        return Bc < 1
      })));
      return (0, qB.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, qB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Mc("item:salvagingTable")
        }), (0, qB.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, qB.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, qB.jsx)(lB.c, {
              idx: MB.f,
              setHovered: cB => {
                null === rB || void 0 === rB || rB(MB.f)(cB)
              },
              pointerDown: uc,
              pointerUp: sc,
              draggedInfo: null,
              specialItemInfo: nc,
              variation: "Salvaging Table"
            })
          }), (0, qB.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, qB.jsx)(fc.d, {
              className: "SalvageButton",
              onClick: ec ? () => {
                const {
                  idx: cB,
                  name: Bc,
                  amount: Ic
                } = nc;
                Pc.gameBridge.send("salvageItem", {
                  slot: cB,
                  name: Bc,
                  amount: Ic
                }) && (mB(null), Vc(null))
              } : void 0,
              disabled: !ec,
              children: Tc ? Tc.salvageable ? Tc.produces.some((cB => {
                let {
                  amt: Bc
                } = cB;
                return Bc < 1
              })) ? (0, qB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, qB.jsx)("div", {
                  className: "SalvageText Error",
                  children: Mc("salvagingTable:notEnoughResources")
                })
              }) : Oc < Tc.produces.length ? (0, qB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, qB.jsx)("div", {
                  className: "SalvageText Error",
                  children: Mc("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, qB.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, qB.jsx)("div", {
                  className: "SalvageText",
                  children: Mc("salvagingTable:salvage")
                }), (0, qB.jsx)("div", {
                  className: "SalvageIcons",
                  children: Tc.produces.map(((cB, Bc) => {
                    let {
                      item: nc,
                      amt: Vc
                    } = cB;
                    return (0, qB.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: nc,
                        amount: Math.floor(Vc)
                      })
                    }, Bc)
                  }))
                })]
              }) : (0, qB.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, qB.jsx)("div", {
                  className: "SalvageText Error",
                  children: Mc("salvagingTable:unsalvageable")
                })
              }) : (0, qB.jsx)(qB.Fragment, {})
            })
          })]
        })]
      })
    }
    var UB = nc(626),
      bn = nc(8235),
      ZB = nc(2121),
      QB = nc(1485),
      CB = nc(7601),
      vn = nc(7597),
      DB = nc(1480),
      NB = nc(1632),
      EB = nc(1237),
      oB = nc(1691);

    function WB(cB, Bc, nc) {
      const Vc = cB.trim().toLowerCase();
      if ("" === Vc) return 0;
      let Ic = null;
      for (const rB of Bc) {
        const cB = rB.toLowerCase().indexOf(Vc);
        if (0 === cB) return 0;
        cB > 0 && (Ic = 1)
      }
      if (null !== Ic) return Ic;
      for (const rB of nc)
        if (rB.toLowerCase().includes(Vc)) return 2;
      return null
    }

    function wB(cB) {
      return cB.map((cB => {
        var Bc;
        return cB ? {
          name: cB.name,
          amount: null !== (Bc = cB.amount) && void 0 !== Bc ? Bc : 1
        } : null
      }))
    }

    function kn(cB) {
      return cB < 1e3 ? `${cB}` : cB < 1e4 ? Math.floor(cB / 100) / 10 + "k" : `${Math.floor(cB/1e3)}k`
    }
    var XB = nc(35418);
    const HB = fc.d,
      FB = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      JB = () => {
        const cB = (0, EB.f)();
        return cB ? cB.getPadRepeatTiming(FB) : FB
      };

    function jn(cB, Bc, nc) {
      var Vc, Ic;
      const rB = (0, uB.x)(Bc, cB);
      let uc = null === (Vc = Bc[cB]) || void 0 === Vc ? void 0 : Vc.description;
      if (nc && (null === (Ic = (0, XB.h)().get(cB)) || void 0 === Ic || !Ic.hideIngredients)) {
        uc ? (uc = (0, Lc.fb)(uc), uc.push({
          str: "\n"
        })) : uc = [], uc.push({
          str: "\n"
        }), uc.push({
          str: "Can be crafted from:\n"
        });
        for (const cB of nc) "string" === typeof cB && (uc.push({
          icon: cB,
          style: {
            fontSize: "1.5em"
          }
        }), uc.push({
          str: " "
        }), uc.push(...(0, Lc.fb)((0, uB.x)(Bc, cB))), uc.push({
          str: "\n"
        }))
      }
      return {
        name: rB,
        desc: uc
      }
    }

    function RB(cB) {
      let {
        name: Bc,
        lF: nc
      } = cB;
      return `${Bc}_${nc}`
    }

    function KB(cB) {
      var Bc;
      let {
        onClick: nc,
        itemName: Vc,
        recipeId: rB,
        isSelected: uc,
        haveIngredients: sc,
        craftable: Mc,
        setHovered: Pc,
        padActions: Oc,
        marked: Tc,
        lock: fc,
        itemInfo: mB
      } = cB;
      const ec = (0, Ic.useRef)(null);
      return (0, CB.e)(ec, {
        press: cB => !sc || "secondary" === cB && !Mc ? (Oc.refuse(), !1) : "primary" === cB ? (Oc.choose(), !0) : Oc.craft(),
        release: Oc.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, qB.jsxs)("div", {
        ref: ec,
        className: tn()("InvenItem", {
          CraftableItemNotEnoughIngredients: !sc && !fc,
          CraftableItemMarked: Tc,
          CraftableItemLocked: void 0 !== fc,
          CraftableItemLockedFar: (null !== (Bc = null === fc || void 0 === fc ? void 0 : fc.stepsAway) && void 0 !== Bc ? Bc : 1) > 1
        }),
        "data-recipe-key": rB,
        "data-pad-inventory-default": uc ? "" : void 0,
        onClick: nc,
        style: {
          cursor: uc ? null : "pointer"
        },
        onPointerEnter: cB => {
          null === Pc || void 0 === Pc || Pc(!0, jn(Vc, mB)), !uc && (0, DB.q)(cB.nativeEvent) && (0, vn.h)() && nc()
        },
        onPointerLeave: () => {
          null === Pc || void 0 === Pc || Pc(!1)
        },
        children: [(0, qB.jsx)(nB.d, {
          itemName: Vc,
          amount: 1
        }), Tc && (0, qB.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), fc && (0, qB.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, qB.jsx)(tB.e, {
            name: "lock"
          }), (0, qB.jsx)(lc.e, {
            text: fc.tag
          })]
        })]
      })
    }

    function xn(cB) {
      let {
        idx: Bc,
        status: nc,
        shownItem: Vc,
        dim: rB,
        onHoverStart: uc,
        onHoverEnd: sc,
        onPadBack: Mc
      } = cB;
      const Pc = (0, Ic.useRef)(null);
      (0, CB.e)(Pc, {
        press: () => !1,
        back: Mc,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Oc = nc.need > 0 ? Math.min(nc.have / nc.need, 1) : 1;
      return (0, qB.jsxs)("div", {
        ref: Pc,
        className: tn()("CupTile", {
          Short: nc.missing > 0
        }),
        style: {
          width: rB,
          height: rB
        },
        "data-craft-ingredient": Bc,
        onPointerEnter: uc,
        onPointerLeave: sc,
        children: [(0, qB.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Oc})`
          }
        }), (0, qB.jsx)(nB.d, {
          itemName: Vc,
          amount: 0
        }), (0, qB.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [kn(nc.have), "/", kn(nc.need)]
        })]
      })
    }

    function dB(cB) {
      var Bc, nc, Vc, rB, uc;
      let {
        show: sc,
        recipeItem: {
          name: Mc,
          lF: Oc,
          requires: Tc,
          produces: fc,
          haveIngredients: mB
        },
        detail: ec,
        onCraft: tB,
        setHovered: Sc,
        craftButtonRef: yB,
        onPadBack: zB,
        showPadShortcut: pc,
        refusedCount: hc,
        lock: aB,
        itemInfo: Yc
      } = cB;
      const {
        t: Lc
      } = (0, BB.x)(), gB = null !== ec && !ec.roomForOne, Uc = null !== (Bc = null === ec || void 0 === ec ? void 0 : ec.craftAllTimes) && void 0 !== Bc ? Bc : 0, bB = function(cB, Bc) {
        return cB.map((cB => {
          let {
            items: nc,
            amt: Vc
          } = cB, Ic = 0;
          const rB = [];
          for (const uc of nc) {
            const cB = Bc(uc);
            Ic += cB, cB > 0 && rB.push(uc)
          }
          return 0 === rB.length && rB.push(nc[0]), {
            shownItems: rB,
            need: Vc,
            have: Ic,
            missing: Math.max(Vc - Ic, 0)
          }
        }))
      }(Tc, (cB => {
        var Bc;
        return null !== (Bc = null === ec || void 0 === ec ? void 0 : ec.amounts[cB]) && void 0 !== Bc ? Bc : 0
      }));
      let Zc = "4rem",
        Qc = 4;
      3 === Tc.length || 4 === Tc.length ? Zc = "3.75rem" : Tc.length >= 5 && (Zc = "3rem"), 4 === Tc.length ? Qc = 2 : Tc.length <= 6 && (Qc = 3);
      const Cc = `calc(${Qc} * ${Zc} + ${Qc-1} * 0.4rem + 1px)`,
        vB = (0, Ic.useRef)(null),
        Dc = (0, Ic.useRef)(null),
        Nc = (0, Ic.useRef)(hc);
      (0, Ic.useEffect)((() => {
        if (hc === Nc.current) return;
        Nc.current = hc;
        const cB = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const Vc of null !== (Bc = null === (nc = vB.current) || void 0 === nc ? void 0 : nc.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== Bc ? Bc : []) {
          var Bc, nc;
          Vc.animate(cB, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [hc]);
      const Ec = (cB, Bc, nc) => {
          var Vc;
          if ((0, XB.h)().has(Mc)) return void(nc && clearInterval(oc.current));
          const Ic = null !== (Vc = null === ec || void 0 === ec ? void 0 : ec.resultStackable) && void 0 !== Vc && Vc,
            rB = wB(Pc.gameBridge.latest("inventory").player),
            {
              YF: uc,
              FX: sc,
              amountAddedToSlot: qB
            } = Pc.gameBridge.send("craftRecipe", {
              name: Mc,
              lF: Oc,
              times: Bc || cB && Ic ? null : 1
            });
          if (uc > 0) {
            const Bc = [],
              Vc = new Set(Tc.flatMap((cB => {
                let {
                  items: Bc
                } = cB;
                return Bc
              }))),
              uc = function(cB, Bc, nc) {
                const Vc = [];
                for (let Ic = 0; Ic < cB.length; Ic++) {
                  const rB = cB[Ic];
                  if (!rB || !nc.has(rB.name)) continue;
                  const uc = Bc[Ic],
                    sc = (null === uc || void 0 === uc ? void 0 : uc.name) === rB.name ? uc.amount : 0;
                  sc < rB.amount && Vc.push({
                    idx: Ic,
                    itemName: rB.name,
                    amount: rB.amount - sc
                  })
                }
                return Vc
              }(rB, wB(Pc.gameBridge.latest("inventory").player), Vc).slice(0, 12),
              Oc = nc ? 0 : Math.min(50, 400 / uc.length),
              mB = nc ? 220 : 320;
            for (const cB of uc) {
              var fc;
              const nc = Tc.findIndex((Bc => {
                  let {
                    items: nc
                  } = Bc;
                  return nc.includes(cB.itemName)
                })),
                Vc = null === (fc = vB.current) || void 0 === fc ? void 0 : fc.querySelector(`[data-craft-ingredient="${nc}"]`),
                Ic = (0, uB.i)(cB.idx);
              Vc && Ic && Bc.push({
                kind: "ingredient",
                itemName: cB.itemName,
                amount: cB.amount,
                FX: cB.idx,
                from: Ic,
                to: (0, uB.i)(Vc),
                delayMs: Math.round(Bc.length * Oc),
                durationMs: mB
              })
            }
            let ec;
            if (null !== sc && qB > 0 && Dc.current) {
              const cB = Bc.length > 0 ? Bc[Bc.length - 1].delayMs + .6 * mB : 0;
              ec = {
                itemName: Mc,
                amount: qB,
                FX: sc,
                from: (0, uB.i)(Dc.current),
                delayMs: Math.round(cB)
              }
            }
            tB(ec, cB && !Ic ? sc : null, Bc), IB.d.play("wood1", .5).rate(1.75)
          }
        },
        oc = (0, Ic.useRef)(null);
      (0, Ic.useEffect)((() => () => {
        clearInterval(oc.current)
      }), []);
      const Wc = (cB, Bc) => {
          Ec(cB, !1, !1), clearInterval(oc.current), Bc && (oc.current = setTimeout((() => {
            oc.current = setInterval((() => {
              Ec(cB, !1, !0)
            }), Bc.intervalMs)
          }), Bc.initialDelayMs))
        },
        wc = () => {
          clearInterval(oc.current)
        },
        kB = !mB || gB || Boolean(aB),
        Xc = (0, Ic.useRef)(null),
        Hc = null !== (nc = null === (Vc = (0, oB.e)()) || void 0 === Vc ? void 0 : Vc.hideButtonHints) && void 0 !== nc && nc,
        Fc = null !== (rB = null === (uc = (0, EB.f)()) || void 0 === uc ? void 0 : uc.getBoundButton("inventorySecondary")) && void 0 !== rB ? rB : null,
        Jc = () => !kB && (Ec(!1, !0, !1), !0);
      (0, CB.e)(yB, {
        press: cB => "secondary" === cB ? Jc() : !kB && (Wc(!1, JB()), !0),
        release: wc,
        back: zB,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, CB.e)(Xc, {
        press: Jc,
        back: zB,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [jB, Rc] = (0, Ic.useState)(0), [iB, Kc] = (0, Ic.useState)(null);
      (0, Ic.useEffect)((() => {
        if (!0 === sc) {
          Rc(0);
          const cB = setInterval((() => {
            Rc((cB => cB + 1))
          }), 1e3);
          return () => {
            clearInterval(cB)
          }
        }
        return () => {}
      }), [sc]);
      const xB = null === ec || void 0 === ec ? void 0 : ec.ingredientsCraftedFrom,
        dc = (0, Ic.useRef)(Sc);
      (0, Ic.useEffect)((() => {
        dc.current = Sc
      }), [Sc]);
      const Ac = !(null === aB || void 0 === aB || !aB.hideIngredients);
      (0, Ic.useEffect)((() => {
        var cB, Bc;
        if (!iB) return;
        if (Ac) return Kc(null), void(null === (Bc = dc.current) || void 0 === Bc || Bc.call(dc, !1));
        const nc = iB[jB % iB.length];
        null === (cB = dc.current) || void 0 === cB || cB.call(dc, !0, jn(nc, Yc, null === xB || void 0 === xB ? void 0 : xB[nc]))
      }), [iB, jB, Yc, xB, Ac]);
      const Gc = !!aB,
        cn = (0, Ic.useRef)(!1);
      (0, Ic.useEffect)((() => {
        var cB;
        Gc && (clearInterval(oc.current), Ac && cn.current && (cn.current = !1, null === (cB = dc.current) || void 0 === cB || cB.call(dc, !1)))
      }), [Gc, Ac]);
      const VB = (0, uB.x)(Yc, Mc);
      return (0, qB.jsxs)("div", {
        ref: vB,
        className: "CraftableInfo SmallTextBold",
        children: [(0, qB.jsx)("div", {
          className: "CraftableHeader",
          children: (0, qB.jsx)(lc.e, {
            text: VB
          })
        }), !Ac && (0, qB.jsx)("div", {
          className: tn()("CraftableIngredients", {
            Compact: Tc.length >= 5
          }),
          style: {
            maxWidth: Cc
          },
          children: bB.map(((cB, Bc) => {
            const nc = cB.shownItems[jB % cB.shownItems.length];
            return (0, qB.jsx)(xn, {
              idx: Bc,
              status: cB,
              shownItem: nc,
              dim: Zc,
              onHoverStart: () => {
                Kc(cB.shownItems)
              },
              onHoverEnd: () => {
                Kc(null), null === Sc || void 0 === Sc || Sc(!1)
              },
              onPadBack: zB
            }, Bc)
          }))
        }), aB && (0, qB.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, qB.jsx)(lc.e, {
            text: aB.reason
          })
        }), !aB && (!mB || gB) && (0, qB.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!mB && "Missing ingredients", (0, qB.jsx)("br", {}), gB && "Inventory is full"]
        }), !Ac && (0, qB.jsxs)(qB.Fragment, {
          children: [(0, qB.jsxs)(HB, {
            ref: yB,
            className: "DoCraftButton",
            onPointerDown: cB => {
              Wc((0, uB.B)(cB), (0, DB.q)(cB.nativeEvent) ? JB() : FB)
            },
            onPointerUp: wc,
            onPointerLeave: wc,
            disabled: kB,
            children: [pc && Fc && !kB && !Hc && (0, qB.jsx)(NB.d, {
              className: "CraftShortcutGlyph",
              glyph: Fc
            }), (0, qB.jsx)("div", {
              ref: Dc,
              className: "DoCraftItem",
              onPointerEnter: () => {
                cn.current = !0, null === Sc || void 0 === Sc || Sc(!0, jn(Mc, Yc))
              },
              onPointerLeave: () => {
                cn.current = !1, null === Sc || void 0 === Sc || Sc(!1)
              },
              children: (0, qB.jsx)(nB.d, {
                itemName: Mc,
                amount: fc
              })
            })]
          }), (0, qB.jsxs)(HB, {
            ref: Xc,
            className: "DoCraftAllButton",
            onPointerDown: cB => {
              Ec((0, uB.B)(cB), !0, !1)
            },
            disabled: kB,
            children: [(0, qB.jsx)("span", {
              className: "CraftAllLabel",
              children: Lc("general:craftAll")
            }), Uc > 0 && (0, qB.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", kn(Uc)]
            })]
          })]
        })]
      })
    }

    function AB(cB) {
      let {
        selectedIdx: Bc,
        hidden: nc
      } = cB;
      const Vc = (0, cn.s)(),
        rB = (0, Ic.useRef)(null);
      return (0, Ic.useLayoutEffect)((() => {
        const cB = rB.current,
          Vc = null === cB || void 0 === cB ? void 0 : cB.parentElement;
        if (!Vc || !cB) return;
        const Ic = Vc.querySelector(".CraftableItems"),
          uc = () => {
            var rB, uc;
            if (nc) return void(cB.style.opacity = "0");
            const sc = null === Ic || void 0 === Ic ? void 0 : Ic.children[Bc],
              Mc = null === (rB = null !== (uc = null === sc || void 0 === sc ? void 0 : sc.querySelector(".InvenItem")) && void 0 !== uc ? uc : sc) || void 0 === rB ? void 0 : rB.getBoundingClientRect();
            if (!Mc || 0 === Mc.width) return void(cB.style.opacity = "0");
            const Pc = Vc.getBoundingClientRect();
            cB.style.opacity = "1", cB.style.width = `${Mc.width}px`, cB.style.height = `${Mc.height}px`, cB.style.transform = `translate(${Mc.left-Pc.left+Vc.scrollLeft}px, ${Mc.top-Pc.top+Vc.scrollTop}px)`
          };
        uc();
        const sc = new MutationObserver(uc),
          Mc = new ResizeObserver(uc);
        return Mc.observe(Vc), Ic && (sc.observe(Ic, {
          childList: !0,
          subtree: !0
        }), Mc.observe(Ic)), () => {
          sc.disconnect(), Mc.disconnect()
        }
      }), [Bc, nc]), (0, qB.jsx)("div", {
        ref: rB,
        className: tn()("SelectionReticle", {
          Secondary: Vc
        })
      })
    }

    function GB(cB, Bc, nc) {
      return cB ? (0, UB.c)(bn.g, cB) ? cV(cB, Bc, nc) : cB : nc("classicGame:handCrafting")
    }

    function cV(cB, Bc, nc) {
      var Vc;
      const Ic = null === (Vc = Bc[cB]) || void 0 === Vc ? void 0 : Vc.displayName;
      if ("string" === typeof Ic) return nc(Ic);
      const rB = Pc.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Ic) ? Ic.map((cB => {
        if ("string" === typeof cB) return cB;
        if ("translationKey" in cB) return nc(cB.translationKey, (0, BB.j)(cB.params, rB));
        if ("str" in cB) {
          if ("string" === typeof cB.str) return cB.str;
          if ("translationKey" in cB.str) return nc(cB.str.translationKey, (0, BB.j)(cB.str.params, rB))
        }
        return ""
      })).join("") : Ic && "translationKey" in Ic ? nc(Ic.translationKey, (0, BB.j)(Ic.params, rB)) : cB
    }

    function Bn(cB, Bc) {
      return cB === Bc || null !== cB && null !== Bc && cB.name === Bc.name && cB.lF === Bc.lF
    }

    function nn(cB) {
      var Bc, nc, Vc;
      let {
        show: rB,
        onCraft: uc,
        dispatchSelectedCraftable: sc,
        selectedCraftable: Mc,
        craftingStation: Oc,
        setHovered: Tc
      } = cB;
      const {
        t: fc
      } = (0, BB.x)(), [mB, ec] = (0, Ic.useState)(""), [tB, Sc] = (0, Ic.useState)(0);
      (0, Ic.useEffect)((() => {
        rB || (ec(""), Sc((cB => cB + 1)))
      }), [rB]);
      const [yB, zB] = (0, Ic.useState)(Oc);
      yB !== Oc && (zB(Oc), "" !== mB && (ec(""), Sc((cB => cB + 1))));
      const pc = (0, Ic.useRef)(null),
        hc = (0, Ic.useRef)(null),
        aB = (0, vn.l)(),
        lc = aB.showing && "recipe" === aB.kind,
        [Yc, Lc] = (0, Ic.useState)(0),
        Uc = null !== Oc && void 0 !== Oc ? Oc : null,
        bB = (0, Ic.useRef)(null),
        Zc = cB => {
          return !((Bc = bB.current) === (nc = cB) || null !== Bc && null !== nc && Bc.station === nc.station && Bn(Bc.recipe, nc.recipe)) && (bB.current = cB, Pc.gameBridge.send("focusCrafting", cB), !0);
          var Bc, nc
        };
      Zc(rB ? {
        station: Uc,
        recipe: (null === (Bc = bB.current) || void 0 === Bc ? void 0 : Bc.station) === Uc ? bB.current.recipe : null
      } : null);
      let Qc = Pc.gameBridge.latest("crafting");
      const Cc = (0, gB.g)("itemInfo"),
        vB = "" !== mB.trim(),
        Dc = (0, XB.K)(),
        Nc = (0, XB.G)(),
        Ec = (0, XB.L)(),
        oc = function(cB, Bc) {
          const [nc, Vc] = (0, Ic.useState)(!1);
          (0, Ic.useEffect)((() => {
            if (!cB) return void Vc(!1);
            const Bc = setTimeout((() => {
              Vc(!0)
            }), 0);
            return () => {
              clearTimeout(Bc)
            }
          }), [cB]);
          const rB = cB && nc,
            uc = (0, Ic.useRef)({
              station: Bc,
              at: new Map
            });
          return (uc.current.station !== Bc || !rB && uc.current.at.size > 0) && (uc.current = {
            station: Bc,
            at: new Map
          }), rB ? uc.current.at : null
        }(rB, Oc);
      let Wc = Qc.recipes.filter((cB => {
        let {
          listed: Bc
        } = cB;
        return Bc
      }));
      if (vB) {
        const cB = [];
        for (const Bc of Qc.recipes) {
          var wc;
          const nc = null !== (wc = Nc.get(Bc.name)) && void 0 !== wc && wc.hideIngredients ? [] : Bc.requires.flatMap((cB => {
              let {
                items: Bc
              } = cB;
              return Bc.flatMap((cB => [cB, cV(cB, Cc, fc)]))
            })),
            Vc = WB(mB, [Bc.name, cV(Bc.name, Cc, fc)], nc);
          null !== Vc && cB.push({
            item: Bc,
            rank: Vc
          })
        }
        cB.sort(((cB, Bc) => cB.rank - Bc.rank)), Wc = cB.map((cB => {
          let {
            item: Bc
          } = cB;
          return Bc
        }))
      } else {
        if (oc && oc.size > 0) {
          const cB = Qc.recipes.filter((cB => !cB.listed && oc.has(RB(cB))));
          Wc = Wc.concat(cB)
        }
        Wc = (0, XB.n)(Wc, Dc, Nc, Ec), oc && (Wc = (0, XB.j)(Wc, oc, RB))
      }
      const kB = cB => Wc.find((Bc => RB(Bc) === cB)),
        Xc = `${Oc}|${mB}`,
        [Hc, Fc] = (0, Ic.useState)(null),
        Jc = (null === Hc || void 0 === Hc ? void 0 : Hc.context) === Xc ? Hc.key : null,
        jB = Mc ? RB(Mc) : null,
        Rc = null !== (nc = null !== (Vc = kB(jB)) && void 0 !== Vc ? Vc : kB(Jc)) && void 0 !== nc ? nc : Wc[0],
        iB = Rc ? RB(Rc) : null,
        Kc = Rc ? {
          name: Rc.name,
          lF: Rc.lF
        } : null;
      rB && Zc({
        station: Uc,
        recipe: Kc
      }) && (Qc = Pc.gameBridge.latest("crafting")), iB !== jB && iB !== Jc && Fc(iB ? {
        context: Xc,
        key: iB
      } : null), (0, Ic.useEffect)((() => () => {
        bB.current = null, Pc.gameBridge.send("focusCrafting", null)
      }), []);
      const xB = Bn(Qc.detail, Kc) ? Qc.detail : null,
        dc = null !== xB && !xB.roomForOne,
        Ac = Wc.findIndex((cB => RB(cB) === RB(Rc))),
        cn = () => hc.current ? (0, CB.d)(hc.current) : null,
        nB = (0, Ic.useRef)(null),
        VB = (0, Ic.useRef)(0);
      VB.current++;
      const IB = VB.current;
      (0, Ic.useEffect)((() => {
        const cB = nB.current;
        if (!cB || IB <= cB.afterRender) return;
        if (nB.current = null, cB.key !== iB) return;
        const Bc = cn();
        var nc;
        null !== Bc && void 0 !== Bc && Bc.press("primary") && !cB.XB && (null === (nc = Bc.release) || void 0 === nc || nc.call(Bc))
      }));
      const rn = cB => {
          const Bc = {
            name: cB.name,
            lF: cB.lF
          };
          return {
            choose: () => {
              sc(Bc), (0, Gc.w)(hc.current)
            },
            craft: () => {
              var cB, nc;
              return sc(Bc), RB(Bc) !== RB(Rc) ? (nB.current = {
                key: RB(Bc),
                XB: !0,
                afterRender: VB.current
              }, !0) : null !== (cB = null === (nc = cn()) || void 0 === nc ? void 0 : nc.press("primary")) && void 0 !== cB && cB
            },
            stopCraft: () => {
              var cB, Bc;
              nB.current ? nB.current.XB = !1 : null === (cB = cn()) || void 0 === cB || null === (Bc = cB.release) || void 0 === Bc || Bc.call(cB)
            },
            refuse: () => {
              RB(Bc) !== RB(Rc) && sc(Bc), Lc((cB => cB + 1))
            }
          }
        },
        uB = () => {
          var cB, Bc, nc;
          (0, Gc.w)(null !== (cB = null === (Bc = pc.current) || void 0 === Bc || null === (nc = Bc.querySelector(".CraftableItems")) || void 0 === nc ? void 0 : nc.children[Ac]) && void 0 !== cB ? cB : null)
        },
        sB = Wc.map(RB).join("|"),
        MB = (0, Ic.useRef)(sB);
      return (0, Ic.useEffect)((() => {
        MB.current !== sB && (MB.current = sB, lc && Ac >= 0 && (0, vn.h)() && uB())
      })), (0, qB.jsxs)("div", {
        className: "Craftables",
        children: [(0, qB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: GB(Oc, Cc, fc)
        }), (0, qB.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, qB.jsx)(QB.e, {
            className: "CraftingSearch",
            placeholderText: fc("general:searchRecipes"),
            defaultValue: mB,
            maxLength: 100,
            onValueChange: cB => {
              ec(cB)
            },
            blurOnEnter: !0
          }, tB), 0 === Wc.length && vB && (0, qB.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: fc("general:noRecipesMatchSearch")
          }), Wc.length > 0 && (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsxs)("div", {
              ref: pc,
              className: "CraftablesLeftSide",
              children: [(0, qB.jsx)(ZB.e, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Wc.map((cB => {
                  let {
                    name: Bc,
                    lF: nc,
                    haveIngredients: Vc
                  } = cB;
                  return {
                    name: Bc,
                    lF: nc,
                    haveIngredients: Vc
                  }
                })))],
                observing: rB,
                children: Wc.map((cB => {
                  const {
                    name: Bc,
                    lF: nc,
                    haveIngredients: Vc
                  } = cB, Ic = RB(cB);
                  return (0, qB.jsx)(KB, {
                    recipeId: Ic,
                    itemName: Bc,
                    onClick: () => {
                      sc({
                        name: Bc,
                        lF: nc
                      })
                    },
                    isSelected: RB(Rc) === Ic,
                    haveIngredients: Vc,
                    craftable: Vc && !Nc.has(Bc) && !(RB(Rc) === Ic && dc),
                    setHovered: Tc,
                    padActions: rn(cB),
                    marked: Dc.has(Bc),
                    lock: Nc.get(Bc),
                    itemInfo: Cc
                  }, Ic)
                }))
              }), (0, qB.jsx)(AB, {
                selectedIdx: Ac,
                hidden: lc && aB.steppingSlots
              })]
            }), (0, qB.jsx)(dB, {
              show: rB,
              recipeItem: Rc,
              detail: xB,
              onCraft: uc,
              setHovered: Tc,
              craftButtonRef: hc,
              onPadBack: uB,
              showPadShortcut: lc,
              refusedCount: Yc,
              lock: Nc.get(Rc.name),
              itemInfo: Cc
            })]
          })]
        })]
      })
    }
    var Vn = nc(35325),
      In = nc(2444),
      rV = nc(27),
      un = nc(1725),
      sn = nc(7583);
    class Mn {
      constructor(cB, Bc, nc) {
        this.commit = cB, this.delayMs = Bc, this.defers = nc, this.pending = null, this.timer = void 0, this.XB = !1, this.flush = () => {
          clearTimeout(this.timer);
          const cB = this.pending;
          null !== cB && (this.pending = null, this.commit(cB))
        }
      }
      type(cB) {
        this.pending = cB, clearTimeout(this.timer), this.XB || this.defers() ? this.XB || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(cB) {
        var Bc;
        return null !== (Bc = this.pending) && void 0 !== Bc ? Bc : cB
      }
      isHeld() {
        return this.XB
      }
      setHeld(cB) {
        this.XB = cB, cB || this.flush()
      }
    }

    function Pn(cB) {
      return null === cB ? "creativeInventory:all" : `creativeInventory:${cB}`
    }

    function qV(cB) {
      let {
        category: Bc
      } = cB;
      return null === Bc ? (0, qB.jsx)(tB.e, {
        name: "layer-group"
      }) : (0, qB.jsx)(nB.d, {
        itemName: Vn.creativeItemCategoryIcons[Bc],
        amount: 0
      })
    }

    function On(cB) {
      let {
        labelKey: Bc,
        isSelected: nc,
        onSelect: Vc,
        setHovered: Ic,
        children: rB
      } = cB;
      return (0, qB.jsx)("div", {
        className: tn()("CreativeCategoryTab", {
          Selected: nc
        }),
        onClick: Vc,
        onPointerEnter: cB => {
          (0, uB.u)(cB) || Ic(!0, {
            name: {
              translationKey: Bc
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Ic(!1)
        },
        children: rB
      })
    }

    function Tn(cB) {
      let {
        categories: Bc,
        selectedCategory: nc,
        onSelect: Vc
      } = cB;
      const {
        t: rB
      } = (0, BB.x)(), [uc, sc] = (0, Ic.useState)(!1), Mc = (0, Ic.useRef)(null), Pc = (0, Ic.useCallback)((() => {
        sc(!1)
      }), []);
      return (0, un.e)(Mc, Pc), (0, qB.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: Mc,
        children: [(0, qB.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            sc(!uc)
          },
          children: [(0, qB.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, qB.jsx)(qV, {
              category: nc
            })
          }), (0, qB.jsx)("span", {
            children: rB(Pn(nc))
          }), (0, qB.jsx)(tB.e, {
            name: uc ? "caret-up" : "caret-down"
          })]
        }), uc && (0, qB.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: Bc.map((cB => (0, qB.jsxs)("div", {
            className: tn()("CreativeCategoryDropdownOption", {
              Selected: nc === cB
            }),
            onClick: () => {
              Vc(cB), sc(!1)
            },
            children: [(0, qB.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, qB.jsx)(qV, {
                category: cB
              })
            }), (0, qB.jsx)("span", {
              children: rB(Pn(cB))
            })]
          }, null !== cB && void 0 !== cB ? cB : "all")))
        })]
      })
    }
    const fn = (0, Ic.memo)((function(cB) {
      let {
        creativeScrollDiv: Bc,
        playerInvenNumSlots: nc,
        getSetHoveringForIdx: Vc,
        getPointerDownForIdx: rB,
        getPointerUpForIdx: uc,
        creativeSearchVal: sc,
        setCreativeSearchVal: Pc,
        creativeCategory: Oc,
        setCreativeCategory: Tc,
        show: fc
      } = cB;
      const {
        t: mB
      } = (0, BB.x)(), ec = (0, gB.g)("creativeVisibility"), {
        userContext: Sc
      } = (0, aB.c)(), yB = (0, Mc.j)("canUseDevCreativeItems"), zB = Sc.playerHasRank("developer") || !!yB, pc = (0, Ic.useMemo)((() => en("", ec, zB)), [ec, zB]), hc = (0, Ic.useMemo)((() => {
        const cB = (0, Vn.creativeItemIds)(),
          Bc = new Set(pc.map((Bc => (0, Vn.creativeCategoryOf)(cB[Bc]))));
        return Vn.creativeItemCategories.filter((cB => Bc.has(cB)))
      }), [pc]), lc = null !== Oc && hc.includes(Oc) ? Oc : null, Lc = (0, Ic.useMemo)((() => "" === sc ? pc : en(sc, ec, zB)), [pc, sc, ec, zB]), Uc = (0, Ic.useMemo)((() => {
        const cB = (0, Vn.creativeItemIds)();
        return null !== lc ? Lc.filter((Bc => (0, Vn.creativeCategoryOf)(cB[Bc]) === lc)) : "" === sc ? Lc.filter((Bc => !(0, Vn.showOnlyInCreativeCategory)(cB[Bc]))) : Lc
      }), [Lc, lc, sc]), bB = Vc();

      function Zc(cB) {
        Tc(cB), Bc.current.scrollTop = 0
      }
      const Qc = [null, ...hc],
        {
          isTouchScreen: Cc
        } = (0, rV.j)(["isTouchScreen"]),
        vB = !Cc,
        Dc = (0, Ic.useRef)(null),
        [Nc, Ec] = (0, Ic.useState)(0);
      (0, Ic.useEffect)((() => {
        const cB = Dc.current;
        if (!cB) return;
        const Bc = new ResizeObserver((cB => {
          Ec(cB[0].contentRect.height)
        }));
        return Bc.observe(cB), () => {
          Bc.disconnect()
        }
      }), [vB]);
      const oc = (0, Ic.useRef)(null),
        Wc = (0, Ic.useCallback)((function cB() {
          "up" === oc.current ? Bc.current.scrollTop -= 10 : "down" === oc.current && (Bc.current.scrollTop += 10), oc.current && requestAnimationFrame(cB)
        }), [Bc]),
        wc = (0, Ic.useCallback)((function(cB) {
          oc.current || (oc.current = cB, Wc())
        }), [Wc]);

      function kB() {
        oc.current = null
      }
      const Xc = (0, Ic.useRef)({
        creativeSearchVal: sc,
        setCreativeSearchVal: Pc
      });
      Xc.current = {
        creativeSearchVal: sc,
        setCreativeSearchVal: Pc
      };
      const [Hc] = (0, Ic.useState)((() => new Mn((cB => {
        Xc.current.setCreativeSearchVal(cB)
      }), 250, cn.f))), Fc = cB => {
        var nc;
        null === (nc = Bc.current) || void 0 === nc || nc.classList.toggle("CreativeItemSlotsStale", cB)
      };
      (0, Yc.f)(sn.d, (cB => {
        Hc.setHeld(cB), cB || Fc(!1)
      })), (0, Ic.useEffect)((() => Hc.flush), [Hc]);
      const Jc = (0, qB.jsx)(QB.e, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: sc,
          maxLength: 1e4,
          onValueChange: (cB, Bc) => {
            "" === Hc.getTyped(Xc.current.creativeSearchVal) && "" !== cB && Tc(null), Hc.type(cB), Fc(Hc.isHeld())
          },
          onEnter: Hc.flush,
          blurOnEnter: !0
        }),
        jB = (0, qB.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Cc && (0, qB.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, qB.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                wc("up")
              },
              onPointerLeave: kB,
              onPointerUp: kB,
              children: (0, qB.jsx)(tB.e, {
                name: "arrow-up"
              })
            }), (0, qB.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                wc("down")
              },
              onPointerLeave: kB,
              onPointerUp: kB,
              children: (0, qB.jsx)(tB.e, {
                name: "arrow-up"
              })
            })]
          }), (0, qB.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: Bc,
            children: [0 === Uc.length && "" !== sc && (0, qB.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: mB("general:noResults")
            }), (0, qB.jsx)(ZB.e, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [sc, lc],
              observerRoot: "CreativeItemSlots",
              observing: fc,
              children: Uc.map((cB => {
                const Bc = nc + cB;
                return (0, qB.jsx)(lB.c, {
                  idx: Bc,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: Vc(Bc),
                  pointerDown: rB(Bc),
                  pointerUp: uc(Bc)
                }, Bc)
              }))
            })]
          })]
        });
      return (0, qB.jsxs)("div", {
        className: tn()("CreativeItemSlotsWrapper", vB ? "WithRail" : "WithDropdown"),
        children: [vB && (0, qB.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: Dc,
          style: {
            "--rail-height": Nc > 0 ? `${Nc}px` : void 0,
            "--tab-rows": Math.ceil(Qc.length / 2)
          },
          children: Qc.map((cB => (0, qB.jsx)(On, {
            labelKey: Pn(cB),
            isSelected: lc === cB,
            onSelect: () => {
              Zc(cB)
            },
            setHovered: bB,
            children: (0, qB.jsx)(qV, {
              category: cB
            })
          }, null !== cB && void 0 !== cB ? cB : "all")))
        }), (0, qB.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, qB.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Jc, !vB && (0, qB.jsx)(Tn, {
              categories: Qc,
              selectedCategory: lc,
              onSelect: Zc
            })]
          }), jB]
        })]
      })
    }));

    function mV(cB) {
      var Bc;
      return null !== (Bc = (0, In.f)(cB)) && void 0 !== Bc ? Bc : ""
    }

    function en(cB, Bc, nc) {
      let {
        publicLobby: Vc,
        shownInGame: Ic
      } = Bc;
      const rB = cB.toLowerCase(),
        uc = (0, Vn.creativeItemIds)(),
        sc = cB => {
          var Bc;
          const rB = uc[cB];
          return !(0, Vn.itemIsDisabled)(rB, Vc, null === (Bc = Ic[mV(rB)]) || void 0 === Bc || Bc, nc)
        };
      if ("" === rB) return uc.map(((cB, Bc) => Bc)).filter((cB => !(0, Vn.showOnlyInCreativeSearch)(uc[cB]))).filter(sc);
      const Mc = [];
      for (let Pc = 0; Pc < uc.length; Pc++) mV(uc[Pc]).toLowerCase().includes(rB) && Mc.push(Pc);
      Mc.sort(((cB, Bc) => {
        const nc = mV(uc[cB]).toLowerCase(),
          Vc = mV(uc[Bc]).toLowerCase();
        return nc.indexOf(rB) - Vc.indexOf(rB)
      }));
      for (const [Pc, qB] of(0, Vn.creativeAltNames)())
        for (const cB of qB)
          if (cB.toLowerCase().includes(rB)) {
            const cB = uc.indexOf(Pc);
            Mc.includes(cB) || Mc.push(cB)
          } return Mc.filter(sc)
    }
    var tV = nc(35437),
      Sn = nc(569);

    function yV(cB) {
      const Bc = cB / 2,
        nc = [];
      for (let Vc = 0; Vc < Bc / 6; Vc++)
        for (let cB = 0; cB < 12; cB++) {
          const Ic = cB < 6 ? 0 : Bc;
          nc.push(Ic + 6 * Vc + cB % 6)
        }
      return nc
    }

    function zV(cB) {
      let {
        numSlots: Bc,
        renderSlot: nc
      } = cB;
      const {
        t: Vc
      } = (0, BB.x)(), rB = (0, Ic.useRef)(null);
      var uc;
      return uc = rB, (0, Ic.useLayoutEffect)((() => {
        var cB;
        const Bc = null === (cB = uc.current) || void 0 === cB ? void 0 : cB.closest(".InvenBody");
        if (!Bc) return;
        const nc = () => {
          Bc.style.zoom = "";
          const cB = parseFloat(getComputedStyle(document.documentElement).fontSize),
            nc = window.innerWidth - 2 * cB,
            Vc = Bc.getBoundingClientRect().width;
          Vc > nc && (Bc.style.zoom = "" + nc / Vc)
        };
        return nc(), window.addEventListener("resize", nc), () => {
          window.removeEventListener("resize", nc), Bc.style.zoom = ""
        }
      }), [uc]), (0, qB.jsxs)("div", {
        ref: rB,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, qB.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: Vc("doubleChest:title")
        }), (0, qB.jsx)("div", {
          className: "GridItemSlots",
          children: yV(Bc).map((cB => nc(cB)))
        })]
      })
    }

    function pn(cB) {
      let {
        dD: Bc,
        initialPasskey: nc
      } = cB;
      const {
        t: Vc
      } = (0, BB.x)(), [rB, uc] = (0, Ic.useState)(nc), [sc, Mc] = (0, Ic.useState)(nc);
      (0, Ic.useEffect)((() => {
        uc(nc), Mc(nc)
      }), [...Bc]);
      return (0, qB.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, qB.jsx)("div", {
          className: "SmallTextBold",
          children: Vc("ironChest:currentPasskey", {
            currentPasskey: rB.join("")
          })
        }), (0, qB.jsx)(zn, {
          className: "IronChestPasskeyEditor",
          Gs: sc,
          onPasskeyUpdated: Mc,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Pc.gameBridge.send("changeIronChestPasskey", {
              pos: [...Bc],
              Gs: [...sc]
            }), uc([...sc])
          }
        })]
      })
    }

    function hn(cB) {
      let {
        variation: Bc,
        canCraft: nc,
        show: Vc,
        creativeMounted: Ic,
        specialItemRef: rB,
        draggedInfo: uc,
        getSetHovering: sc,
        getPointerDownForIdx: Mc,
        getPointerUpForIdx: Pc,
        enchantingTablePosition: Oc,
        enchantingTableBlockName: Tc,
        selectedCraftable: fc,
        dispatchSelectedCraftable: mB,
        creativeScrollDiv: ec,
        creativeSearchVal: tB,
        setCreativeSearchVal: Sc,
        creativeCategory: yB,
        setCreativeCategory: zB,
        onCraft: pc
      } = cB;
      const {
        userContext: hc
      } = (0, aB.c)(), {
        t: lc
      } = (0, BB.x)(), Yc = (0, gB.e)("inventory", (cB => cB.chest)), Lc = (0, gB.e)("inventory", (cB => cB.player.length)), Uc = (0, gB.e)("inventory", (cB => cB.creative));
      if (0 === Lc) return null;
      let bB, Zc;
      const Qc = cB => {
          const Bc = Lc + cB;
          return (0, qB.jsx)(lB.c, {
            idx: Bc,
            draggedInfo: uc,
            specialItemInfo: rB.current,
            setHovered: sc(Bc),
            pointerDown: Mc(Bc),
            pointerUp: Pc(Bc)
          }, Bc)
        },
        Cc = Yc ? (0, tV.b)(Yc.type) : null;
      if (Cc) bB = tn()("InvenLeftSideChestCustom", Cc.className), Zc = (0, qB.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Cc.render({
          dD: Yc.pos,
          renderSlot: Qc
        })
      });
      else if (Yc) {
        const cB = Yc.pos,
          Bc = "Iron" === Yc.type || "Moonstone" === Yc.type ? Yc.type : "Standard";
        let nc = !1,
          Vc = null;
        "Iron" === Bc && (nc = Yc.ironChest.ownerDbId === hc.whamm, Vc = Yc.ironChest.Gs), bB = `InvenLeftSideChest${Bc}`;
        const Ic = Yc.numSlots > Sn.k;
        Zc = (0, qB.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [nc && (0, qB.jsx)(pn, {
            dD: cB,
            initialPasskey: Vc
          }), Ic && (0, qB.jsx)(zV, {
            numSlots: Yc.numSlots,
            renderSlot: Qc
          }), !Ic && (0, qB.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, qB.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: lc("Moonstone" === Bc ? "item:moonstoneChest" : "Iron" === Bc ? "item:ironChest" : "item:chest")
            }), (0, qB.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(Yc.numSlots).fill(0).map(((cB, Bc) => Qc(Bc)))
            })]
          })]
        })
      } else if (!Uc || Bc && nc)
        if (nc && "Enchanting Table" === Bc) bB = `InvenLeftSide${(null!==Tc&&void 0!==Tc?Tc:"").replace(/ /gi,"")}`, Zc = (0, qB.jsx)(YB, {
          specialItemInfo: rB.current,
          setHovered: sc,
          pointerDown: Mc(MB.f),
          pointerUp: Pc(MB.f),
          enchantingTablePosition: Oc,
          enchantingTableBlockName: Tc
        });
        else if (nc && "Salvaging Table" === Bc) bB = "InvenLeftSideSalvagingTable", Zc = (0, qB.jsx)(gn, {
        specialItemInfo: rB.current,
        setSpecialItemInfo: cB => {
          rB.current = cB
        },
        setHovered: sc,
        pointerDown: Mc(MB.f),
        pointerUp: Pc(MB.f)
      });
      else {
        if (!nc) return null;
        bB = `InvenLeftSide${(null!==Bc&&void 0!==Bc?Bc:"HandCrafting").replace(/ /gi,"")}`, Zc = (0, qB.jsx)(nn, {
          show: Vc,
          onCraft: pc,
          craftingStation: Bc,
          selectedCraftable: fc,
          dispatchSelectedCraftable: mB,
          setHovered: sc()
        })
      } else bB = "InvenLeftSideCreative", Zc = Ic ? (0, qB.jsx)(fn, {
        creativeScrollDiv: ec,
        playerInvenNumSlots: Lc,
        getSetHoveringForIdx: sc,
        getPointerDownForIdx: Mc,
        getPointerUpForIdx: Pc,
        creativeSearchVal: tB,
        setCreativeSearchVal: Sc,
        creativeCategory: yB,
        setCreativeCategory: zB,
        show: Vc
      }) : null;
      const vB = !!Yc || nc && !!Bc;
      return (0, qB.jsx)("div", {
        className: `InvenLeftSide ${bB}`,
        "data-pad-inventory-start": vB ? "" : void 0,
        children: Zc
      })
    }
    var aV = nc(556);
    const lnc = {
      Helmet: "empty_armor_slot_helmet",
      Chestplate: "empty_armor_slot_chestplate",
      Gauntlets: "empty_armor_slot_gauntlets",
      Leggings: "empty_armor_slot_leggings",
      Boots: "empty_armor_slot_boots"
    };

    function Yn(cB) {
      let {
        draggedInfo: Bc,
        specialItemInfo: nc,
        craftFlyAnims: Vc,
        getSetHovering: Ic,
        getPointerDownForIdx: rB,
        getPointerUpForIdx: uc,
        variation: sc,
        canCraft: Mc,
        isNewSlot: Pc
      } = cB;
      const Oc = (0, gB.e)("inventory", (cB => cB.player.length));
      return 0 === Oc ? null : (0, qB.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, qB.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(aV.d.length).fill(0).map(((cB, Tc) => {
            const fc = Oc - aV.d.length + Tc;
            return (0, qB.jsx)(lB.c, {
              idx: fc,
              draggedInfo: Bc,
              specialItemInfo: nc,
              craftFlyHoldbackInfo: (0, sB.g)(Vc, fc),
              setHovered: Ic(fc),
              pointerDown: rB(fc),
              pointerUp: uc(fc),
              defaultIconB64: Xc.c.getTexture(lnc[aV.d[Tc]], Hc.h.ITEM).url,
              variation: Mc ? sc : void 0,
              showNewDot: Pc(fc)
            }, fc)
          }))
        }), (0, qB.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Oc - 10 - aV.d.length).fill(0).map(((cB, Tc) => {
            const fc = Oc - aV.d.length - Tc - 1;
            return (0, qB.jsx)(lB.c, {
              idx: fc,
              draggedInfo: Bc,
              specialItemInfo: nc,
              craftFlyHoldbackInfo: (0, sB.g)(Vc, fc),
              setHovered: Ic(fc),
              pointerDown: rB(fc),
              pointerUp: uc(fc),
              variation: Mc ? sc : void 0,
              showNewDot: Pc(fc)
            }, fc)
          }))
        })]
      })
    }
    var Ln = nc(35446),
      gV = nc(35451);

    function Un(cB) {
      const {
        e: Bc,
        idx: nc
      } = cB, Vc = (0, uB.n)(cB.readInventory(), nc), Ic = (0, uB.t)(Bc);
      nc === MB.e ? function(cB, Bc) {
        const {
          draggedInfoRef: nc,
          removeItem: Vc,
          removeDraggedInfoRef: Ic,
          close: rB
        } = cB;
        if (nc.current) {
          const cB = Bc && nc.current.amount || 1;
          Vc(nc.current.idx, cB, !0) && (nc.current.amount -= cB, nc.current.amount <= 0 && Ic())
        } else Bc && rB()
      }(cB, Ic) : nc === MB.f ? function(cB, Bc) {
        const {
          e: nc,
          draggedInfoRef: Vc,
          specialItemRef: Ic,
          moveAmtIntoSlot: rB,
          removeDraggedInfoRef: uc
        } = cB;
        if ((0, uB.B)(nc) && Ic.current) Ic.current = null;
        else if (Vc.current && Ic.current && (Vc.current.idx === Ic.current.idx || (0, gV.e)(Vc.current, Ic.current)) && Vc.current.amount > 0 && Ic.current.amount > 0 && Ic.current.amount < SB.e.maxItemStackSize)
          if (Vc.current.idx === Ic.current.idx) {
            if (Bc) {
              const cB = Math.min(Vc.current.amount, SB.e.maxItemStackSize - Ic.current.amount);
              Ic.current.amount += cB, Vc.current.amount -= cB
            } else Vc.current.amount--, Ic.current.amount++;
            Vc.current.amount <= 0 && uc()
          } else if (Bc) {
          const cB = Math.min(Vc.current.amount, SB.e.maxItemStackSize - Ic.current.amount);
          rB(Ic.current.idx, cB) && (Ic.current.amount += cB)
        } else {
          rB(Ic.current.idx, 1) && Ic.current.amount++
        } else if (!Vc.current || Ic.current || Bc) {
          const cB = Vc.current;
          Vc.current = Ic.current, Ic.current = cB
        } else Vc.current.amount--, Ic.current = {
          idx: Vc.current.idx,
          name: Vc.current.name,
          attributes: Vc.current.attributes,
          amount: 1
        }
      }(cB, Ic) : (0, uB.B)(Bc) ? function(cB, Bc) {
        var nc, Vc;
        const {
          idx: Ic,
          draggedInfoRef: rB,
          specialItemRef: uc,
          canCraft: sc,
          variation: Mc,
          swapSlots: Pc,
          moveIntoSlots: qB
        } = cB;
        if (!Bc) return;
        let Oc = Bc.amount;
        Ic === (null === (nc = rB.current) || void 0 === nc ? void 0 : nc.idx) && (Oc = rB.current.amount <= 0 ? 0 : Bc.amount - rB.current.amount);
        Ic === (null === (Vc = uc.current) || void 0 === Vc ? void 0 : Vc.idx) && (Oc = uc.current.amount <= 0 ? 0 : Bc.amount - uc.current.amount);
        if (0 === Oc) return;
        const Tc = cB.readInventory(),
          fc = Tc.player.length,
          mB = Tc.chest,
          ec = fc - aV.d.length,
          tB = () => {
            if (!(0, cn.f)()) return void qB(10, ec, Ic, Oc);
            const cB = cB => {
              const nc = (0, uB.n)(Tc, cB);
              return nc ? {
                amount: nc.amount,
                stacksWithMoved: (0, gV.e)(nc, Bc)
              } : null
            };
            for (const Bc of ((cB, Bc, nc, Vc, Ic) => {
                const rB = [];
                let uc = Vc;
                if (null !== Vc) {
                  let sc = 0;
                  for (let Vc = Bc; Vc < nc; Vc++) {
                    const Bc = cB(Vc);
                    null !== Bc && void 0 !== Bc && Bc.stacksWithMoved && null !== Bc.amount && Bc.amount > 0 && (sc += Math.max(0, Ic - Bc.amount))
                  }
                  const Mc = Math.min(Vc, sc);
                  if (Mc > 0 && (rB.push({
                      start: Bc,
                      end: nc,
                      amount: Mc
                    }), uc = Vc - Mc), uc <= 0) return rB
                }
                for (let sc = nc - 1; sc >= Bc; sc--)
                  if (null === cB(sc)) {
                    rB.push({
                      start: sc,
                      end: sc + 1,
                      amount: uc
                    });
                    break
                  } return rB
              })(cB, 10, ec, Oc, SB.e.maxItemStackSize)) qB(Bc.start, Bc.end, Ic, Bc.amount)
          };
        if (!sc || "Enchanting Table" !== Mc && "Salvaging Table" !== Mc) {
          const nc = (0, Lc.nb)(Bc.name),
            Vc = nc ? (0, Lc.kb)(nc) : null;
          if (!aV.d.includes(nc) || Ic !== Vc && (0, uB.r)(Tc, cB.itemInfo, Vc, Ic))
            if (mB)
              if (Ic < fc) {
                var Sc, yB;
                const [cB, Bc] = null !== (Sc = null === (yB = (0, tV.b)(mB.type)) || void 0 === yB ? void 0 : yB.quickMoveRange) && void 0 !== Sc ? Sc : [0, mB.numSlots];
                qB(fc + cB, fc + Bc, Ic, Oc)
              } else qB(0, fc - aV.d.length, Ic, Oc);
          else Tc.creative ? Ic < 10 ? tB() : Ic < fc ? qB(0, 10, Ic, Oc) : qB(0, fc - aV.d.length, Ic, null !== Bc.amount ? SB.e.maxItemStackSize : null) : Ic < 10 ? tB() : qB(0, 10, Ic, Oc);
          else Ic < fc - aV.d.length || Ic >= fc ? Pc(Vc, Ic) : (qB(0, fc - aV.d.length, Vc, Oc), IB.d.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else uc.current = {
          idx: Ic,
          name: Bc.name,
          attributes: Bc.attributes,
          amount: null !== Bc.amount ? Oc : 0
        }
      }(cB, Vc) : cB.draggedInfoRef.current ? function(cB, Bc, nc, Vc) {
        const {
          draggedInfoRef: Ic,
          specialItemRef: rB,
          moveAmtIntoSlot: uc,
          swapSlots: sc,
          removeItem: Mc,
          removeDraggedInfoRef: Pc
        } = cB, qB = cB.readInventory(), Oc = Ic.current.idx;
        if (nc && (Bc === Oc || (0, gV.e)(Ic.current, nc)) && Ic.current.amount > 0 && (0, uB.e)(nc) > 0 && (nc.amount < SB.e.maxItemStackSize || Bc === Oc)) Vc ? nc.amount + Ic.current.amount <= SB.e.maxItemStackSize || Bc === Oc ? uc(Bc, Ic.current.amount) : uc(Bc, SB.e.maxItemStackSize - nc.amount) : uc(Bc, 1);
        else if (Ic.current.amount > 0 && !nc) uc(Bc, Vc ? Ic.current.amount : 1);
        else if (Vc || nc || 0 === Ic.current.amount)
          if (qB.creative && !qB.chest && Bc >= qB.player.length) {
            const cB = 0 === Ic.current.amount ? 1 : Ic.current.amount;
            Mc(Ic.current.idx, cB, !1) && Pc()
          } else {
            var Tc;
            const nc = (null === (Tc = rB.current) || void 0 === Tc ? void 0 : Tc.idx) === Bc;
            if (sc(Bc, Ic.current.idx)) {
              const Vc = cB.readInventory(),
                uc = (0, uB.n)(Vc, Oc),
                sc = !Vc.chest && Vc.creative && Ic.current.idx >= Vc.player.length;
              if (uc && Ic.current.idx !== Bc && !sc) {
                let cB = (0, uB.e)(uc);
                nc && (cB -= rB.current.amount), Ic.current = nc && 0 === cB ? null : {
                  idx: Ic.current.idx,
                  name: uc.name,
                  attributes: uc.attributes,
                  amount: cB
                }
              } else Pc()
            }
          }
        else uc(Bc, 1)
      }(cB, nc, Vc, Ic) : function(cB, Bc, nc, Vc) {
        var Ic;
        const {
          draggedInfoRef: rB,
          specialItemRef: uc
        } = cB;
        if (!nc) return;
        let sc = (0, uB.e)(nc);
        const Mc = (null === (Ic = uc.current) || void 0 === Ic ? void 0 : Ic.idx) === Bc;
        Mc && (sc -= uc.current.amount);
        Vc || (sc = Math.ceil(sc / 2));
        rB.current = Mc && 0 === sc ? null : {
          idx: Bc,
          name: nc.name,
          attributes: nc.attributes,
          amount: sc
        }
      }(cB, nc, Vc, Ic)
    }

    function bV(cB, Bc) {
      return !!Bc && Bc.name === cB.name
    }

    function Zn() {
      return Pc.gameBridge.latest("inventory")
    }

    function Qn(cB, Bc, nc) {
      return Pc.gameBridge.send("removeInventoryItem", {
        slot: cB,
        amount: Bc,
        drop: nc
      })
    }

    function Cn(cB) {
      return (0, uB.j)(cB, Pc.gameBridge.latest("itemInfo"), Pc.gameBridge.latest("stationItems").enchantable)
    }

    function vV(cB) {
      let {
        show: Bc,
        close: nc,
        canCraft: Vc,
        variation: rB,
        inventoryItemsMoveable: uc,
        setCraftFlyAnims: sc
      } = cB;
      (0, gB.g)("itemInfo");
      const [Mc, qB] = (0, Ic.useState)(null), [Oc, Tc] = (0, Ic.useState)(null), [fc, mB] = (0, Ic.useState)(!1), ec = (0, Ic.useRef)(null), tB = (0, Ic.useRef)(null), Sc = (0, Ic.useRef)(null), yB = (0, Ic.useRef)(null), [zB, pc] = (0, Ic.useReducer)((cB => cB + 1), 0), hc = (0, Ic.useCallback)((() => {
        Bc && pc()
      }), [Bc, pc]), aB = (0, Ic.useCallback)((() => {
        tB.current = null, Nc.current = null, hc()
      }), [hc]), lc = (0, Ic.useCallback)(((cB, Bc) => {
        sc((nc => nc.map((nc => "ingredient" === nc.kind ? nc : nc.FX === cB ? {
          ...nc,
          FX: Bc,
          to: (0, uB.i)(Bc)
        } : nc.FX === Bc ? {
          ...nc,
          FX: cB,
          to: (0, uB.i)(cB)
        } : nc))))
      }), [sc]), Yc = (0, Ic.useCallback)(((cB, Bc) => {
        const nc = Wc.current;
        if (nc.x = cB, nc.y = Bc, ec.current) !wc.current.isTouch || wc.current.itemBeingDragged && !Nc.current ? (ec.current.style.transform = `translate(${nc.x}px, ${nc.y}px)`, mB(wc.current.isTouch && !Nc.current)) : (ec.current.style.transform = "translate(0.5rem, 0.5rem)", mB(!0));
        else if (yB.current) {
          const nc = yB.current;
          let Vc = cB + 10,
            Ic = Bc + 10;
          const rB = nc.offsetWidth,
            uc = nc.offsetHeight;
          Vc + rB > window.innerWidth && (Vc = cB - rB - 10), Ic + uc > window.innerHeight && (Ic = Bc - uc - 10), Vc < 0 && (Vc = 0), Ic < 0 && (Ic = 0), yB.current.style.transform = `translate(${Vc}px, ${Ic}px)`
        }
      }), []), Uc = (0, Ic.useCallback)((cB => (Bc, nc, Vc) => {
        if (qB(Bc && void 0 !== cB ? cB : null), Bc) {
          if (void 0 === cB && !nc) return void(0, Ln.e)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== cB) {
            var Ic;
            const Bc = Zn();
            let nc;
            if (nc = cB === MB.f ? Sc.current ? (0, uB.n)(Bc, Sc.current.idx) : null : (0, uB.n)(Bc, cB), !nc) return void Tc(null);
            if ((null === (Ic = Sc.current) || void 0 === Ic ? void 0 : Ic.idx) === cB) {
              if (0 === (0, uB.e)(nc) - Sc.current.amount) return void Tc(null)
            }
            Tc(Cn(nc))
          } else Tc({
            name: nc.name,
            desc: nc.desc,
            fontStyle: "normal"
          })
        } else Tc(null);
        Vc && setTimeout((() => {
          Yc(Vc.pageX, Vc.pageY)
        }), 0)
      }), [Yc]), bB = (0, Ic.useCallback)(((cB, Bc) => {
        const nc = Pc.gameBridge.send("moveInventoryItem", {
          from: tB.current.idx,
          to: cB,
          amount: Bc
        });
        return nc ? (tB.current.amount -= Bc, tB.current.amount <= 0 && aB()) : console.error("moveInventoryItem failed"), nc
      }), [aB]), Zc = (0, Ic.useCallback)(((cB, Bc) => {
        const nc = Sc.current,
          Vc = null === nc || void 0 === nc ? void 0 : nc.idx;
        nc && (nc.idx = function(cB, Bc, nc) {
          return cB === Bc ? nc : cB === nc ? Bc : cB
        }(Vc, cB, Bc));
        const Ic = Pc.gameBridge.send("swapInventorySlots", {
          a: cB,
          b: Bc
        });
        return Ic ? lc(cB, Bc) : nc && (nc.idx = Vc), Ic
      }), [lc]), Qc = (0, Ic.useCallback)(((cB, Bc, nc, Vc) => {
        const Ic = Pc.gameBridge.send("quickMoveInventoryItem", {
          slot: nc,
          start: cB,
          end: Bc,
          amount: Vc
        });
        null !== Ic && lc(nc, Ic)
      }), [lc]), Cc = (0, Ic.useCallback)(((cB, Bc) => {
        var Ic;
        ((cB, Bc, nc) => {
          const Vc = cB - (nc - aV.d.length);
          return !(!Bc || Vc < 0 || Vc >= aV.d.length) && (0, Lc.nb)(Bc) !== aV.d[Vc]
        })(Bc, null === (Ic = tB.current) || void 0 === Ic ? void 0 : Ic.name, Zn().player.length) || (Un({
          e: cB,
          idx: Bc,
          readInventory: Zn,
          itemInfo: Pc.gameBridge.latest("itemInfo"),
          draggedInfoRef: tB,
          specialItemRef: Sc,
          moveAmtIntoSlot: bB,
          swapSlots: Zc,
          moveIntoSlots: Qc,
          removeItem: Qn,
          removeDraggedInfoRef: aB,
          close: nc,
          canCraft: Vc,
          variation: rB
        }), hc())
      }), [Vc, nc, bB, Qc, aB, Zc, rB, hc]), vB = (0, Ic.useRef)(0), Dc = (0, Ic.useRef)(null), Nc = (0, Ic.useRef)(null), Ec = (0, Ic.useRef)(null), oc = (0, Ic.useRef)(new Set), Wc = (0, Ic.useRef)({
        x: 0,
        y: 0
      }), wc = (0, Ic.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), kB = (0, Ic.useCallback)((() => (Ec.current = null, wc.current.itemBeingDragged = !1, clearTimeout(Dc.current), !!Nc.current && (Nc.current = null, hc(), !0))), [hc]);
      (0, Ic.useEffect)((() => {
        kB(), oc.current.clear()
      }), [Bc]);
      const Xc = cB => void 0 !== cB && (oc.current.has(cB) || null !== Ec.current && cB !== Ec.current),
        Hc = cB => {
          wc.current.isTouch = (0, uB.u)(cB)
        },
        Fc = (0, Ic.useCallback)((cB => Bc => {
          const Vc = (0, uB.u)(Bc);
          if (Vc || Yc(Bc.pageX, Bc.pageY), uc)
            if (Xc(Bc.pointerId)) void 0 !== Bc.pointerId && oc.current.add(Bc.pointerId);
            else {
              if (Hc(Bc), vB.current = Date.now(), Vc) {
                wc.current.itemBeingDragged = !0, Ec.current = Bc.pointerId;
                const nc = (0, uB.n)(Zn(), cB);
                if (nc && nc.amount && nc.amount > 0) {
                  const nc = Bc.pageX,
                    Vc = Bc.pageY,
                    Ic = Wc.current.x,
                    rB = Wc.current.y;
                  clearTimeout(Dc.current), Dc.current = setTimeout((() => {
                    if (tB.current && tB.current.idx === cB && (Math.abs(nc - Wc.current.x) < 20 && Math.abs(Vc - Wc.current.y) < 20 || Ic === Wc.current.x && rB === Wc.current.y) && wc.current.itemBeingDragged) {
                      const cB = Zn(),
                        nc = cB.creative && !cB.chest && tB.current.idx >= SB.e.numInvenSlots && null !== (0, uB.n)(cB, tB.current.idx).amount ? SB.e.maxItemStackSize : tB.current.amount;
                      Nc.current = {
                        initTouchX: Bc.pageX,
                        initTouchY: Bc.pageY,
                        maxAmount: nc
                      }, tB.current.amount = Math.ceil(tB.current.amount / 2), ec.current.style.transform = "translate(0.5rem, 0.5rem)", mB(!0), hc()
                    }
                  }), 500)
                }
              }
              Cc(Bc, cB)
            }
          else cB === MB.e && (0, uB.t)(Bc) && nc()
        }), [Yc, Cc, uc, nc, hc]),
        Jc = (0, Ic.useCallback)((cB => cB => {
          if (Xc(cB.pointerId)) return;
          const Bc = (0, uB.u)(cB);
          if (Hc(cB), !kB()) {
            if (Bc && tB.current && Date.now() - vB.current > 150) {
              const Bc = document.elementFromPoint(cB.clientX, cB.clientY);
              if (null !== Bc) {
                const nc = Bc.getAttribute("data-inven-idx");
                null !== nc ? Cc(cB, parseInt(nc)) : Bc.classList.contains("InventoryBackgroundScreen") && Cc(cB, -1)
              }
            }
            Yc(cB.pageX, cB.pageY)
          }
        }), [Yc, Cc, kB]);
      (0, Ic.useEffect)((() => {
        let cB;
        const nc = ["pointerup", "pointercancel"],
          Vc = cB => {
            oc.current.has(cB.pointerId) ? setTimeout((() => {
              oc.current.delete(cB.pointerId)
            }), 0) : cB.pointerId === Ec.current && setTimeout((() => {
              Ec.current === cB.pointerId && kB()
            }), 0)
          };
        if (Bc) {
          for (const cB of nc) document.addEventListener(cB, Vc, !0);
          if (!wc.current.isTouch) {
            const cB = Wc.current;
            Yc(cB.x, cB.y)
          }
          cB = cB => {
            cB.preventDefault(), Xc(cB.pointerId) || (Hc(cB), Yc(cB.pageX, cB.pageY), Nc.current && cB.pointerId === Ec.current && (cB => {
              if (!tB.current) return Nc.current = null, void hc();
              const {
                initTouchX: Bc,
                maxAmount: nc
              } = Nc.current, Vc = (cB.pageX - Bc) * Nc.current.maxAmount / 160, Ic = Math.ceil(nc / 2) + Math.ceil(Vc);
              tB.current.amount = Math.min(nc, Math.max(1, Ic)), hc()
            })(cB))
          }, document.addEventListener("pointermove", cB, !0)
        }
        return () => {
          document.removeEventListener("pointermove", cB, !0);
          for (const cB of nc) document.removeEventListener(cB, Vc, !0)
        }
      }));
      const jB = (0, Ic.useCallback)((() => {
          if (tB.current) {
            const cB = (0, uB.n)(Zn(), tB.current.idx);
            (!bV(tB.current, cB) || cB.amount < tB.current.amount) && aB()
          }
        }), [aB]),
        Rc = (0, Ic.useCallback)((() => {
          const cB = tB.current;
          if (cB) {
            const Bc = (0, uB.n)(Zn(), cB.idx);
            bV(cB, Bc) && (cB.attributes = Bc.attributes)
          }
        }), []);
      return {
        draggedDomRef: ec,
        draggedInfoRef: tB,
        specialItemRef: Sc,
        hoverInfoDomRef: yB,
        longHoldSplitInfoRef: Nc,
        currHoveredIdx: Mc,
        currHoveredDisplayInfo: Oc,
        displayDraggedItemName: fc,
        forceRerenderIfVisible: hc,
        removeDraggedInfoRef: aB,
        checkDraggedItemConsistencyWithInven: jB,
        refreshDraggedAttributes: Rc,
        swapSlots: Zc,
        getPointerDownForIdx: Fc,
        getPointerUpForIdx: Jc,
        getSetHovering: Uc,
        setCurrHoveredDisplayInfo: Tc,
        moveFollowerTo: Yc
      }
    }
    class Dn {
      constructor(cB) {
        this.snapshot = [], this.newSlots = new Set, this.update(cB, !1)
      }
      update(cB, Bc) {
        const nc = cB.map((cB => {
          var Bc;
          return cB ? {
            name: cB.name,
            amount: null !== (Bc = cB.amount) && void 0 !== Bc ? Bc : 1
          } : null
        }));
        nc.forEach(((cB, nc) => {
          const Vc = this.snapshot[nc],
            Ic = (null === cB || void 0 === cB ? void 0 : cB.name) !== (null === Vc || void 0 === Vc ? void 0 : Vc.name);
          (!cB || Ic || cB.amount < Vc.amount) && this.newSlots.delete(nc), Bc && cB && (Ic || cB.amount > Vc.amount) && this.newSlots.add(nc)
        })), this.snapshot = nc
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(cB) {
        return this.newSlots.has(cB)
      }
    }
    const Nn = (cB, Bc, nc) => ({
      button: Bc,
      shiftKey: nc,
      pageX: cB.clientX,
      pageY: cB.clientY,
      clientX: cB.clientX,
      clientY: cB.clientY,
      pointerType: "mouse"
    });

    function En(cB) {
      const [Bc, nc] = (0, Ic.useState)(cB);
      return cB && !Bc && nc(!0), (0, Ic.useEffect)((() => {
        if (Bc) return;
        let cB = !0;
        const Vc = () => {
            cB && (cB = !1, nc(!0))
          },
          Ic = "function" === typeof window.requestIdleCallback,
          rB = Ic ? window.requestIdleCallback(Vc, {
            timeout: 2e3
          }) : void 0,
          uc = setTimeout(Vc, Ic ? 2e3 : 1e3);
        return () => {
          cB = !1, clearTimeout(uc), void 0 !== rB && window.cancelIdleCallback(rB)
        }
      }), [Bc]), Bc
    }
    const onc = (0, Ic.memo)((function(cB) {
      var Bc;
      let {
        show: nc,
        onOpen: Vc,
        onClose: rB,
        variation: sc
      } = cB;
      const Oc = (0, Ic.useRef)(null),
        Tc = (0, Ic.useRef)(null),
        fc = function(cB) {
          const [Bc, nc] = (0, Ic.useState)(!0), [Vc, rB] = (0, Ic.useState)(!1), uc = (0, Ic.useRef)(null), sc = (0, Ic.useRef)(null), Pc = (0, Mc.j)("_shield"), qB = (0, Ic.useRef)(null), Oc = (0, Mc.j)("_health"), Tc = (0, Ic.useRef)(null);

          function fc(cB) {
            const Bc = Date.now() + cB;
            Bc < sc.current || (nc(!1), clearTimeout(uc.current), sc.current = Bc, uc.current = setTimeout((() => {
              nc(!0)
            }), cB))
          }
          return (0, Ic.useEffect)((() => {
            fc(qn);
            const cB = mB.i.subscribe("requestingPlayVideoAd", (() => {
              fc(qn)
            }));
            return () => {
              clearTimeout(uc.current), mB.i.unsubscribe(cB)
            }
          }), []), (0, Ic.useEffect)((() => {
            (qB.current > Pc || Tc.current > Oc) && fc(6e4), qB.current = Pc, Tc.current = Oc
          }), [Pc, Oc]), (0, Ic.useEffect)((() => {
            let Bc = null;
            return cB ? Bc = setTimeout((() => {
              rB(!0)
            }), 250) : rB(!1), () => {
              clearTimeout(Bc)
            }
          }), [cB]), Bc && Vc
        }(nc),
        ec = En(nc),
        tB = En(nc),
        [Sc, yB] = (0, Ic.useState)([]),
        zB = (0, Ic.useCallback)((cB => {
          yB((Bc => Bc.filter((Bc => Bc.id !== cB))))
        }), []),
        pc = (0, Ic.useRef)(null),
        hc = (0, Ic.useRef)(0),
        aB = (0, Ic.useCallback)((() => {
          pc.current && (hc.current = pc.current.scrollTop), rB()
        }), [rB]),
        lc = (0, Mc.j)("inventoryItemsMoveable"),
        Uc = (0, Mc.j)("canCraft"),
        {
          clientEscMenuOptions: bB
        } = (0, rV.j)(["clientEscMenuOptions"]),
        Zc = (0, Ic.useRef)(null);
      Zc.current || (Zc.current = new Dn(Pc.gameBridge.latest("inventory").player));
      const Qc = Zc.current,
        {
          draggedDomRef: Cc,
          draggedInfoRef: vB,
          specialItemRef: Nc,
          hoverInfoDomRef: Ec,
          longHoldSplitInfoRef: oc,
          currHoveredIdx: Wc,
          currHoveredDisplayInfo: wc,
          displayDraggedItemName: kB,
          forceRerenderIfVisible: Xc,
          removeDraggedInfoRef: Hc,
          checkDraggedItemConsistencyWithInven: Fc,
          refreshDraggedAttributes: Jc,
          swapSlots: jB,
          getPointerDownForIdx: Rc,
          getPointerUpForIdx: iB,
          getSetHovering: Kc,
          setCurrHoveredDisplayInfo: xB,
          moveFollowerTo: dc
        } = vV({
          show: nc,
          close: aB,
          canCraft: Uc,
          variation: sc,
          inventoryItemsMoveable: lc,
          setCraftFlyAnims: yB
        });
      (0, Ic.useEffect)((() => {
        const cB = !nc && null !== Pc.gameBridge.latest("inventory").chest;
        if (cB && Pc.gameBridge.send("closeChest", null), nc || (Qc.clearMarks(), Kc(null)(!1)), mB.i.Vu("inventoryComponentVisible", nc), cB) {
          IB.d.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [nc]), (0, gB.d)("chestToggled", (cB => {
        if (cB ? Vc() : nc && aB(), cB) {
          IB.d.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      })), (0, gB.d)("inventory", (cB => {
        let {
          player: Bc
        } = cB;
        var Vc, Ic, rB;
        (Qc.update(Bc, !nc), Nc.current) && (Nc.current = (Ic = Nc.current, rB = null !== (Vc = Bc[Nc.current.idx]) && void 0 !== Vc ? Vc : null, bV(Ic, rB) ? (Ic.attributes = rB.attributes, null !== rB.amount && Ic.amount > rB.amount && (Ic.amount = rB.amount), Ic) : null));
        Jc(), null !== Wc && Kc(Wc)(!0), Xc()
      })), (0, Ic.useEffect)((() => (Pc.gameBridge.send("setInventoryOpen", nc), () => {
        Pc.gameBridge.send("setInventoryOpen", !1)
      })), [nc]);
      const Ac = (cB, Bc) => {
        if (cB === MB.f) return void(cB => {
          const Bc = Nc.current;
          if (!Bc || null === (0, uB.n)(Pc.gameBridge.latest("inventory"), Bc.idx)) return;
          const nc = cB ? Math.max(Bc.amount, 1) : 1,
            Vc = Bc.amount - nc;
          if (!Pc.gameBridge.send("removeInventoryItem", {
              slot: Bc.idx,
              amount: nc,
              drop: !0
            })) return;
          const Ic = Nc.current;
          Ic && (Ic.amount = Math.min(Ic.amount, Vc), Ic.amount <= 0 && (Nc.current = null)), Xc()
        })(Bc);
        const nc = null === cB ? null : (0, uB.n)(Pc.gameBridge.latest("inventory"), cB);
        if (null !== nc) {
          var Vc, Ic, rB;
          const uc = Bc && null !== (Vc = nc.amount) && void 0 !== Vc ? Vc : 1;
          Pc.gameBridge.send("removeInventoryItem", {
            slot: cB,
            amount: uc,
            drop: !0
          }), cB === (null === (Ic = vB.current) || void 0 === Ic ? void 0 : Ic.idx) && (vB.current.amount -= uc, vB.current.amount <= 0 && Hc(), Xc()), cB === (null === (rB = Nc.current) || void 0 === rB ? void 0 : rB.idx) && (Nc.current = null, Xc())
        }
      };
      (0, gB.d)("inventoryDropRequested", (cB => {
        nc && Wc !== MB.f && Ac(Wc, cB)
      }));
      const cn = (cB, Bc) => {
        let nc = Bc;
        if (Bc === MB.f) {
          if (!Nc.current) return;
          nc = Nc.current.idx
        }
        const Vc = jB(cB, nc);
        if (Vc && vB.current && (vB.current.idx === nc ? vB.current.idx = cB : vB.current.idx === cB && (vB.current.idx = nc)), Vc && Bc === MB.f) {
          const cB = (0, uB.n)(Pc.gameBridge.latest("inventory"), nc);
          Nc.current = cB ? {
            idx: nc,
            name: cB.name,
            attributes: cB.attributes,
            amount: cB.amount
          } : null
        }
        Xc()
      };
      (0, gB.d)("numberKeyPressed", (cB => {
        null !== Wc && nc && cn(cB - 1, Wc)
      })), (0, Ic.useEffect)((() => {
        nc || (Nc.current = null, Hc(), xB(null))
      }), [nc, Hc, xB, Nc]);
      const BB = Nc.current;
      (0, Ic.useEffect)((() => {
        Wc === MB.f && Kc(MB.f)(!0)
      }), [BB, Wc, Kc]), (0, gB.d)("chestRefreshed", (() => {
        Fc(), Jc(), Xc()
      })), (0, gB.d)("inventorySynced", (() => {
        Nc.current = null, Hc(), Xc()
      }));
      const [nB, PB] = (0, Ic.useState)(new Map), OB = null !== (Bc = nB.get(sc)) && void 0 !== Bc ? Bc : null, eB = (cB, Bc) => {
        PB((nc => {
          const Vc = nc.get(cB);
          return Vc && Vc.name === Bc.name && Vc.lF === Bc.lF ? nc : new Map(nc).set(cB, Bc)
        }))
      };
      (0, Yc.f)("craftingRecipesEdited", (() => {
        Xc()
      })), (0, Yc.f)(XB.e, (cB => {
        let {
          variation: Bc,
          itemName: nc
        } = cB;
        eB(Bc, {
          name: nc,
          lF: 0
        })
      }));
      const [tn, SB] = (0, Ic.useState)(null), [yn, zn] = (0, Ic.useState)(null);
      (0, gB.d)("enchantingTableOpened", (cB => {
        let {
          position: Bc,
          blockName: nc
        } = cB;
        SB(Bc), zn(nc)
      }));
      const [pB, hB] = (0, Ic.useState)(""), [an, YB] = (0, Ic.useState)(null);
      (0, Ic.useEffect)((() => {
        nc && pc.current && (pc.current.scrollTop = hc.current)
      }), [nc]);
      return (cB => {
        const Bc = (0, Ic.useRef)(cB);
        Bc.current = cB, (0, Ic.useEffect)((() => {
          if (!cB.show) return;
          const nc = (cB, nc, Vc, Ic) => {
              const {
                getPointerDownForIdx: rB,
                getPointerUpForIdx: uc
              } = Bc.current;
              rB(cB)(Nn(nc, Vc, Ic)), uc(cB)(Nn(nc, Vc, Ic))
            },
            Vc = {
              primary: (cB, Bc) => {
                nc(cB, Bc, 0, !1)
              },
              secondary: (cB, Bc) => {
                nc(cB, Bc, 2, !1)
              },
              quickMove: (cB, Bc) => {
                nc(cB, Bc, 0, !0)
              },
              dropHeld: (cB, nc) => {
                Bc.current.getPointerDownForIdx(MB.e)(Nn(nc, cB ? 0 : 2, !1))
              },
              dropSlot: (cB, nc) => {
                Bc.current.dropFromIdx(cB, nc)
              },
              swapWithHotbar: (cB, nc) => {
                Bc.current.swapWithHotbar(cB, nc)
              },
              cancel: () => {
                Bc.current.removeDraggedInfoRef()
              },
              isHolding: () => !!Bc.current.draggedInfoRef.current,
              hasItemAt: cB => {
                const {
                  draggedInfoRef: nc,
                  specialItemRef: Vc
                } = Bc.current;
                if (cB === MB.f) return !!Vc.current;
                const Ic = (0, uB.n)(Pc.gameBridge.latest("inventory"), cB);
                return !!Ic && (0, lB.d)(cB, (0, uB.e)(Ic), [nc.current, Vc.current]).shown
              },
              hover: (cB, nc) => {
                const {
                  moveFollowerTo: Vc,
                  getSetHovering: Ic
                } = Bc.current;
                Vc(nc.clientX, nc.clientY), Ic(null !== cB && void 0 !== cB ? cB : void 0)(null !== cB, void 0, {
                  pageX: nc.clientX,
                  pageY: nc.clientY
                })
              },
              moveTo: cB => {
                Bc.current.moveFollowerTo(cB.clientX, cB.clientY)
              },
              close: () => {
                Bc.current.close()
              }
            };
          return (0, Gc.s)(Vc)
        }), [cB.show])
      })({
        show: nc,
        close: aB,
        draggedInfoRef: vB,
        specialItemRef: Nc,
        getPointerDownForIdx: Rc,
        getPointerUpForIdx: iB,
        getSetHovering: Kc,
        moveFollowerTo: dc,
        removeDraggedInfoRef: Hc,
        dropFromIdx: Ac,
        swapWithHotbar: cn
      }), (0, Ic.useEffect)((() => {
        mB.i.Vu("inventoryDraggedItemUpdated", {
          draggedInfo: vB.current,
          specialItemInfo: Nc.current,
          setHovered: Kc,
          pointerDown: Rc,
          pointerUp: iB,
          variation: Uc ? sc : void 0,
          craftFlyAnims: Sc
        })
      })), (0, qB.jsxs)(Dc.c, {
        show: nc,
        style: {
          touchAction: nc ? "none" : void 0
        },
        children: [vB.current && (0, qB.jsx)(TB, {
          draggedInfo: vB.current,
          toAddRef: Cc
        }), vB.current && kB && (0, qB.jsx)(fB, {
          className: "DraggedInvenItemName",
          displayInfo: Cn(vB.current),
          domRef: null
        }), !vB.current && wc && (0, qB.jsx)(fB, {
          displayInfo: wc,
          domRef: Ec
        }), oc.current && vB.current && (0, qB.jsx)(mn, {
          info: oc.current,
          draggedInfo: vB.current
        }), Sc.map((cB => (0, qB.jsx)(sB.d, {
          anim: cB,
          onComplete: zB
        }, cB.id))), (0, qB.jsx)(uc.b, {
          show: nc,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: aB,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: Rc(MB.e),
          pointerUp: iB(MB.e),
          doGameplayStartStopOnShow: !0
        }), ec && (0, qB.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, qB.jsx)("div", {
            ref: Oc,
            className: "InventoryAdOuter",
            children: (0, qB.jsx)(rn.d, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Oc
              },
              verticalAlign: "start",
              showing: nc && fc,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, qB.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, qB.jsxs)("div", {
              className: "Inventory",
              children: [(0, qB.jsx)("div", {
                className: "InventoryFiller"
              }), (0, qB.jsx)(VB, {
                show: nc
              }), (0, qB.jsxs)("div", {
                className: "InvenBody",
                children: [(0, qB.jsx)(hn, {
                  variation: sc,
                  canCraft: Uc,
                  show: nc,
                  creativeMounted: tB,
                  specialItemRef: Nc,
                  draggedInfo: vB.current,
                  getSetHovering: Kc,
                  getPointerDownForIdx: Rc,
                  getPointerUpForIdx: iB,
                  enchantingTablePosition: tn,
                  enchantingTableBlockName: yn,
                  selectedCraftable: OB,
                  dispatchSelectedCraftable: cB => {
                    eB(sc, cB)
                  },
                  creativeScrollDiv: pc,
                  creativeSearchVal: pB,
                  setCreativeSearchVal: hB,
                  creativeCategory: an,
                  setCreativeCategory: YB,
                  onCraft: function(cB, Bc) {
                    let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (Fc(), (cB || nc.length > 0) && yB((Bc => {
                        const Vc = [...Bc],
                          Ic = Bc.filter((cB => "ingredient" === cB.kind)).length;
                        for (const cB of nc.slice(0, Math.max(0, 24 - Ic))) Vc.push({
                          id: (0, sB.f)(),
                          ...cB,
                          to: cB.to
                        });
                        return cB && Vc.push({
                          id: (0, sB.f)(),
                          ...cB,
                          to: (0, uB.i)(cB.FX)
                        }), Vc
                      })), null !== Bc) {
                      var Vc;
                      const cB = Pc.gameBridge.latest("inventory");
                      (0, Lc.nb)(null === (Vc = (0, uB.n)(cB, Bc)) || void 0 === Vc ? void 0 : Vc.name) ? Rc(Bc)({
                        button: 0,
                        shiftKey: !0
                      }): jB(Bc, cB.selectedSlot)
                    }
                  }
                }), (0, qB.jsx)(Yn, {
                  draggedInfo: vB.current,
                  specialItemInfo: Nc.current,
                  craftFlyAnims: Sc,
                  getSetHovering: Kc,
                  getPointerDownForIdx: Rc,
                  getPointerUpForIdx: iB,
                  variation: sc,
                  canCraft: Uc,
                  isNewSlot: cB => bB.showNewItemIndicator && Qc.isNew(cB)
                })]
              })]
            }), (0, qB.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, qB.jsx)("div", {
                ref: Tc,
                className: "InventoryAd",
                children: (0, qB.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Wn = nc(1246),
      wn = nc(145);
    const kV = (0, Ic.memo)((function(cB) {
      let {
        show: Bc,
        onOpen: nc,
        onClose: Vc
      } = cB;
      const rB = (0, Ic.useRef)(0),
        sc = () => (0, Wn.e)() && !(0, Wn.k)() && rB.current <= 2;
      Bc = sc() && Bc;
      const Mc = () => {
        rB.current++, Vc()
      };
      (0, Yc.f)("ctrlCrouchWithoutFullscreen", (() => {
        sc() && nc()
      })), (0, Yc.f)("displaymodeFullscreenChange", (cB => {
        Bc && cB && Mc()
      }));
      const Pc = "crazygames" === wn.r;
      return (0, qB.jsx)(uc.b, {
        close: Mc,
        escDoesExit: !0,
        show: Bc,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, qB.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, qB.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Pc && (0, qB.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, qB.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, qB.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Pc && (0, qB.jsx)(fc.n, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Wn.m)(), Mc()
              },
              children: (0, qB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, qB.jsx)(fc.L, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                Mc()
              },
              children: (0, qB.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var Xn = nc(1125),
      Hn = nc(2787);
    nc(2790);
    const Fn = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(""), [Mc, Oc] = (0, Ic.useState)(""), [Tc, fc] = (0, Ic.useState)(null), [mB, ec] = (0, Ic.useState)(null), tB = (0, gB.g)("hiddenPlayerNames"), Sc = {
          kind: "worldCodeLine",
          onSubmit: (cB, Bc) => {
            Vc(), Pc.gameBridge.send("reportWorldCodeChat", {
              chatMsgId: mB,
              SV: cB,
              details: Bc
            })
          }
        }, yB = {
          kind: "player",
          shownPlayerName: (0, Xn.g)(rB, tB),
          onSubmit: (cB, Bc) => {
            Vc(), (0, Hn.d)({
              playerId: Mc,
              playerName: rB,
              chatMsgId: mB,
              policyId: cB,
              details: Bc
            })
          }
        };
        return (0, Yc.f)("OpenReportMenu", (cB => {
          let {
            playerEId: Bc,
            playerName: Vc,
            Uu: Ic,
            serverChatMsgId: rB
          } = cB;
          Oc(Bc), sc(Vc), fc(Ic), ec(rB), nc()
        })), (0, qB.jsx)(uc.b, {
          show: Bc,
          close: Vc,
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeReportBackgroundScreen",
          globallyUniqueKey: "MakeReportComponent",
          children: (0, qB.jsx)("div", {
            className: "ReportMenu",
            children: Bc && (0, qB.jsx)(Hn.b, {
              reported: null === Mc ? Sc : yB,
              chatMessage: Tc,
              inGame: !0,
              onCancel: Vc
            })
          })
        })
      })),
      Jn = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(null), [Mc, Oc] = (0, Ic.useState)(0);
        (0, Yc.f)("OpenDiscordReportBox", (cB => {
          Pc.gameBridge.send("requestDiscordReportKey", cB), Oc(0), nc()
        }));
        return (0, Yc.f)("setDiscordReportKey", (cB => {
          sc(cB)
        })), (0, qB.jsx)(uc.b, {
          show: Bc,
          close: () => {
            Vc(), sc(null), Oc(0)
          },
          padShowsHud: !0,
          togglePointerLock: !1,
          escDoesExit: !0,
          centerChildren: !1,
          className: "MakeDiscordReportBackgroundScreen",
          globallyUniqueKey: "MakeDiscordReportComponent",
          children: (0, qB.jsxs)("div", {
            className: "ReportKeyBox",
            children: [(0, qB.jsx)("div", {
              className: "ReportKeyBoxHeader SmallTextBold",
              children: "Report via Discord"
            }), (0, qB.jsxs)("div", {
              className: "ReportKeyBoxDescription SmallTextLight",
              children: ["Hacking/auto-clicking and explicit build reports must be made via discord.", (0, qB.jsx)("br", {}), (0, qB.jsx)("br", {}), "1. Join the Bloxd discord server", " ", (0, qB.jsx)("a", {
                href: "https://discord.gg/playbloxd",
                target: "_blank",
                rel: "noreferrer",
                children: "here"
              }), ".", (0, qB.jsx)("br", {}), "2. Copy the Report Key below", (0, qB.jsx)("br", {}), "3. Raise a report ticket (and include the report key!)", (0, qB.jsx)("div", {
                className: "ReportKeyBoxSubheader SmallTextBold",
                children: "Report Key:"
              })]
            }), (0, qB.jsxs)("div", {
              className: "ReportKeyInnerWrapper",
              children: [(0, qB.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== rB && void 0 !== rB ? rB : "Loading report key..."
              }), (0, qB.jsx)(fc.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(rB).catch((cB => {
                    console.error("Failed to copy report key:", cB)
                  })), Oc(Date.now())
                },
                disabled: Date.now() - Mc < 1e3 || !rB,
                children: Date.now() - Mc < 1e3 ? "Copied" : "Copy"
              })]
            })]
          })
        })
      }));
    var jV = nc(1142),
      Rn = nc(1205);
    const iV = {
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
      Kn = (0, Ic.memo)((function(cB) {
        let {
          show: Bc,
          onOpen: nc,
          onClose: Vc
        } = cB;
        const [rB, sc] = (0, Ic.useState)(null), Mc = (0, Ic.useRef)(0), Oc = (0, Ic.useRef)(null), {
          t: Tc
        } = (0, BB.x)();
        (0, Yc.f)("EditCustomLobbyBlock", (cB => {
          let {
            pos: Bc
          } = cB;
          sc(Bc), null !== Bc && nc(), Oc.current.scrollTo(0, Mc.current)
        }));
        const fc = cB => {
          Pc.gameBridge.send("setCustomLobbyBlock", {
            pos: rB,
            blockName: cB
          }), Vc()
        };
        return (0, qB.jsx)(uc.b, {
          className: "CustomLobbyBlockEditorOuter",
          close: Vc,
          escDoesExit: !0,
          show: Bc,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, qB.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Oc,
            onScroll: () => {
              Mc.current = Oc.current.scrollTop
            },
            children: (0, qB.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(iV).map((cB => {
                let [Bc, nc] = cB;
                return (0, qB.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, qB.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Tc(Bc)
                  }), (0, qB.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(nc).map((cB => {
                      let [Bc, {
                        tooltip: nc,
                        blocks: Vc
                      }] = cB;
                      return (0, qB.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, qB.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Tc(Bc), (0, qB.jsx)(Rn.c, {
                            hoverInfo: Tc(nc),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, qB.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: Vc.map((cB => (0, qB.jsx)(xV, {
                            blockName: cB,
                            selectBlock: fc
                          }, cB)))
                        })]
                      }, Bc)
                    }))
                  })]
                }, Bc)
              }))
            })
          })
        })
      })),
      xV = (0, Ic.memo)((function(cB) {
        var Bc;
        let {
          blockName: nc,
          selectBlock: Vc
        } = cB;
        const Ic = (0, In.e)(nc),
          rB = null !== (Bc = void 0 === Ic ? void 0 : (0, Vn.displayNameOf)(Ic)) && void 0 !== Bc ? Bc : nc,
          uc = void 0 === Ic ? void 0 : (0, Vn.descriptionOf)(Ic);
        return (0, qB.jsx)(Rn.d, {
          tooltipInner: (0, qB.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, qB.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, qB.jsx)(lc.e, {
                text: rB
              })
            }), uc && (0, qB.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, qB.jsx)(lc.e, {
                text: uc
              })
            })]
          }),
          children: (0, qB.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => Vc(nc),
            children: (0, qB.jsx)(nB.d, {
              itemName: nc,
              amount: 1
            })
          })
        }, nc)
      }));
    var dn = nc(2258),
      An = nc(3431),
      Gn = nc(35460);

    function cI() {
      const cB = (0, gB.g)("itemInfo");
      return (0, Ic.useMemo)((() => function(cB) {
        return {
          getDefaultItemStat(Bc, nc) {
            var Vc;
            const Ic = cB[Bc];
            return "description" === nc ? null === Ic || void 0 === Ic ? void 0 : Ic.description : null !== (Vc = null === Ic || void 0 === Ic ? void 0 : Ic.displayName) && void 0 !== Vc ? Vc : Bc
          }
        }
      }(cB)), [cB])
    }
    const BV = (0, Ic.memo)((function(cB) {
        var Bc, nc, Vc, rB, sc, Mc, Pc, Oc, Tc, fc, mB, ec, Sc, yB, zB, pc, hc, aB, lc, Lc, gB, Uc, bB;
        let {
          togglePointerLock: Zc,
          show: Qc,
          onOpen: Cc,
          onClose: vB
        } = cB;
        const {
          t: Dc
        } = (0, BB.x)(), Nc = cI(), Ec = (0, Ic.useRef)(null), oc = (0, Ic.useRef)(An.c.MobHungerLevel.Hungry), Wc = (0, Ic.useRef)(null), wc = (0, dn.e)(), kB = (0, Ic.useRef)(null), Xc = (0, Ic.useRef)(null), Hc = Ec.current;
        (0, Ic.useEffect)((() => {
          if (!Qc) return;
          const cB = Gn.d.openPet(kB.current);
          return Xc.current = cB, () => {
            cB.close(), Xc.current = null
          }
        }), [Qc]), (0, Ic.useEffect)((() => {
          Qc && Hc && Xc.current.show(function(cB) {
            var Bc;
            let {
              mobType: nc,
              mobSettings: Vc
            } = cB;
            return {
              mobType: nc,
              variation: null !== (Bc = Vc.variation) && void 0 !== Bc ? Bc : "default",
              shownGroups: {
                collar: !(0, Sn.E)(Vc.ownerDbId),
                saddle: "Saddled" === Vc.metaInfo,
                antlers: "Antlers" === Vc.metaInfo
              }
            }
          }(Hc))
        }), [Qc, Hc]), (0, Ic.useEffect)((() => {
          const cB = () => {
            var cB;
            const Bc = An.c.getMobHungerLevel(null === (cB = Ec.current) || void 0 === cB ? void 0 : cB.mobSettings.petInfo.lastFedAt);
            if (Bc !== oc.current && (oc.current = Bc, wc()), Wc.current) {
              var nc;
              const cB = Date.now(),
                Bc = An.c.getNextStateAt(null === (nc = Ec.current) || void 0 === nc ? void 0 : nc.mobSettings.petInfo.lastFedAt);
              let Vc = Math.floor((Bc - cB) / 1e3),
                Ic = "";
              if (Vc > 3600) {
                Ic += Math.floor(Vc / 60 / 60).toString().padStart(2, "0"), Ic += ":", Vc %= 3600
              }
              const rB = Vc % 60;
              Ic += Math.floor(Vc / 60).toString().padStart(2, "0"), Ic += ":", Ic += rB.toString().padStart(2, "0"), Wc.current.textContent = Ic
            }
          };
          cB();
          const Bc = setInterval(cB, 250);
          return () => {
            clearInterval(Bc)
          }
        }), [Hc, wc]), (0, Yc.f)("showPetUi", (cB => {
          let {
            mobType: Bc,
            mobSettings: nc
          } = cB;
          Ec.current = {
            mobType: Bc,
            mobSettings: nc
          }, Qc || Cc()
        }));
        const Fc = null === (Bc = Ec.current) || void 0 === Bc ? void 0 : Bc.mobSettings.health,
          Jc = null === (nc = Ec.current) || void 0 === nc ? void 0 : nc.mobSettings.maxHealth,
          jB = An.c.getFriendshipLevelInfo(null !== (Vc = null === (rB = Ec.current) || void 0 === rB ? void 0 : rB.mobSettings.petInfo.friendshipPoints) && void 0 !== Vc ? Vc : 0);
        return (0, qB.jsx)(uc.b, {
          className: "PetUIOuter",
          close: vB,
          escDoesExit: !0,
          show: Qc,
          togglePointerLock: Zc,
          forcePointerUnlock: Qc,
          globallyUniqueKey: "PetUI",
          children: (0, qB.jsx)("div", {
            className: "PetUI",
            children: (0, qB.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, qB.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, qB.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (sc = null === (Mc = Ec.current) || void 0 === Mc ? void 0 : Mc.mobSettings.name) && void 0 !== sc ? sc : "Your Pet"
                }), (0, qB.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: kB
                })]
              }), (0, qB.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, Sn.E)(null === (Pc = Ec.current) || void 0 === Pc ? void 0 : Pc.mobSettings.petInfo.friendshipPoints) && (0, qB.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, qB.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: Dc("mobAiPlugin:friendshipTitle")
                  }), (0, qB.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: An.c.getIconsFromFriendshipPoints(null !== (Oc = Ec.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Oc ? Oc : 0).map(((cB, Bc) => (0, qB.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: cB,
                        amount: 1
                      })
                    }, Bc)))
                  }), (0, qB.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, qB.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, qB.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${jB.totalPointsForNextLevel>0?Math.max(jB.pointsIntoCurrentLevel/jB.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, qB.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: jB.totalPointsForNextLevel > 0 ? ` ${Math.ceil(jB.pointsIntoCurrentLevel)}/${Math.ceil(jB.totalPointsForNextLevel)}` : Math.ceil(jB.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, qB.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, qB.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: Dc("mobAiPlugin:hungerTitle")
                  }), (0, qB.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: An.c.hungerLevelIcons[oc.current].map(((cB, Bc) => (0, qB.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: cB,
                        amount: 1
                      })
                    }, Bc)))
                  }), (0, qB.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [Dc(An.c.hungerLevelTranslations[oc.current].translationKey), oc.current !== An.c.MobHungerLevel.Starving && !(0, Sn.E)(null === (Tc = Ec.current) || void 0 === Tc ? void 0 : Tc.mobSettings.petInfo.lastFedAt) && (0, qB.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [Dc("mobAiPlugin:nextFeedIn", {
                        state: Dc(An.c.hungerLevelTranslations[oc.current + 1].translationKey)
                      }), ":", " ", (0, qB.jsx)("span", {
                        ref: Wc
                      })]
                    })]
                  })]
                }), (0, qB.jsx)(Rn.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, qB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Dc("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, qB.jsxs)("div", {
                    className: tn()("PetUIQuickStatsItem", {
                      Disabled: (0, Sn.E)(Fc) || (0, Sn.E)(Jc)
                    }),
                    children: [(0, qB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, qB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, Sn.E)(Fc) || (0, Sn.E)(Jc) ? "" : (0, qB.jsxs)(qB.Fragment, {
                        children: [Math.ceil(Fc), (0, qB.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Jc)]
                        })]
                      })
                    })]
                  })
                }), (0, qB.jsx)(Rn.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, qB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Dc("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, qB.jsxs)("div", {
                    className: tn()("PetUIQuickStatsItem", {
                      Disabled: (0, Sn.E)(null === (fc = Ec.current) || void 0 === fc ? void 0 : fc.mobSettings.attackDamage) || Ec.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, qB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, qB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (mB = Ec.current) || void 0 === mB ? void 0 : mB.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, qB.jsx)(Rn.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, qB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Dc("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, qB.jsxs)("div", {
                    className: tn()("PetUIQuickStatsItem", {
                      Disabled: (0, Sn.E)(null === (ec = Ec.current) || void 0 === ec ? void 0 : ec.mobSettings.secondaryAttackDamage) || Ec.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, qB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, qB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (Sc = Ec.current) || void 0 === Sc ? void 0 : Sc.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, qB.jsx)(Rn.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, qB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Dc("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, qB.jsxs)("div", {
                    className: tn()("PetUIQuickStatsItem", {
                      Disabled: (0, Sn.E)(null === (yB = Ec.current) || void 0 === yB ? void 0 : yB.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, qB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, qB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (zB = null === (pc = Ec.current) || void 0 === pc || null === (hc = pc.mobSettings.baseRunningSpeed) || void 0 === hc ? void 0 : hc.toFixed(2)) && void 0 !== zB ? zB : ""
                    })]
                  })
                }), (0, qB.jsx)(Rn.d, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, qB.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: Dc("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, qB.jsxs)("div", {
                    className: tn()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (aB = Ec.current) || void 0 === aB ? void 0 : aB.mobSettings.metaInfo)
                    }),
                    children: [(0, qB.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, qB.jsx)(nB.d, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, qB.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (lc = Ec.current) || void 0 === lc ? void 0 : lc.mobSettings.metaInfo) ? (0, qB.jsx)(tB.e, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, Sn.E)(null === (Lc = Ec.current) || void 0 === Lc ? void 0 : Lc.mobSettings.tameInfo) && (0, qB.jsxs)(qB.Fragment, {
                  children: [(0, qB.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, qB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, qB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, qB.jsx)(VV, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: An.c.feedTextColours[An.c.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, qB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, qB.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Ec.current.mobSettings.petInfo.superlikedFoodKnown ? (0, qB.jsx)(nV, {
                            food: Ec.current.mobSettings.petInfo.superlikedFood
                          }) : (0, qB.jsx)(VV, {
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
                    }), (0, qB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, qB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, qB.jsx)(VV, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: An.c.feedTextColours[An.c.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, qB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (gB = Ec.current.mobSettings.tameInfo.likedFoods) || void 0 === gB ? void 0 : gB.filter((cB => !Ec.current.mobSettings.petInfo.superlikedFoodKnown || cB !== Ec.current.mobSettings.petInfo.superlikedFood)).map((cB => (0, qB.jsx)(nV, {
                          food: cB
                        }, cB)))
                      })]
                    }), (0, qB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, qB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, qB.jsx)(VV, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: An.c.feedTextColours[An.c.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, qB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Uc = Ec.current.mobSettings.tameInfo.neutralFoods) || void 0 === Uc ? void 0 : Uc.map((cB => (0, qB.jsx)(nV, {
                          food: cB
                        }, cB)))
                      })]
                    }), (0, qB.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, qB.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, qB.jsx)(VV, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: An.c.feedTextColours[An.c.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, qB.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (bB = Ec.current.mobSettings.tameInfo.dislikedFoods) || void 0 === bB ? void 0 : bB.map((cB => (0, qB.jsx)(nV, {
                          food: cB
                        }, cB)))
                      })]
                    })]
                  }), Ec.current.mobSettings.tameInfo.levelUpBonuses && (0, qB.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: An.c.MAX_LEVEL + 1
                    }).map(((cB, Bc) => {
                      const nc = Bc;
                      if (0 === nc) return null;
                      const Vc = Ec.current.mobSettings.tameInfo.levelUpBonuses[nc],
                        Ic = An.c.getBonusDisplayInfo(Nc, Ec.current.mobSettings, Ec.current.mobType, Vc);
                      return (0, qB.jsxs)("div", {
                        className: tn()("PetUIFeedDropContainer", {
                          Selected: nc === An.c.getFriendshipLevelInfo(Ec.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, qB.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: nc
                          }).map(((cB, Bc) => (0, qB.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, qB.jsx)(nB.d, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${nc}-${Bc}`)))
                        }), (0, qB.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Ic && (0, qB.jsx)(VV, {
                            icon: Ic.icon,
                            displayName: Ic.displayName,
                            description: Ic.description
                          })
                        })]
                      }, nc)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      nV = (0, Ic.memo)((function(cB) {
        let {
          food: Bc,
          includeDescription: nc = !1
        } = cB;
        const Vc = cI(),
          Ic = Vc.getDefaultItemStat(Bc, "displayName"),
          rB = Vc.getDefaultItemStat(Bc, "description");
        return (0, qB.jsx)(VV, {
          icon: Bc,
          displayName: Ic,
          description: nc ? rB : null
        })
      })),
      VV = (0, Ic.memo)((function(cB) {
        let {
          icon: Bc,
          displayName: nc,
          description: Vc,
          tintColor: Ic,
          className: rB = "PetUIFoodItem"
        } = cB;
        return (0, qB.jsx)(Rn.d, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, qB.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, qB.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, qB.jsx)(lc.e, {
                text: nc
              })
            }), Vc && (0, qB.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, qB.jsx)(lc.e, {
                text: Vc
              })
            })]
          }),
          children: (0, qB.jsx)("div", {
            className: rB,
            children: (0, qB.jsx)(nB.d, {
              itemName: Bc,
              amount: 1,
              tintColor: Ic
            })
          })
        })
      }));
    var IV = nc(2903),
      rI = nc(988),
      uV = nc(1090),
      sV = nc(1108),
      MV = nc(35484),
      PV = nc(35477),
      qI = nc(867),
      OV = nc(1199),
      TV = nc(1194),
      fV = nc(1908);

    function mI(cB) {
      let {
        peers: Bc
      } = cB;
      const [nc, Vc] = (0, Ic.useState)(null), rB = (0, gB.g)("players");
      return (0, qB.jsx)("div", {
        className: "CodeEditorPresence",
        children: Bc.map((cB => {
          var Bc, Ic;
          const uc = null !== (Bc = null === (Ic = rB.byId[cB.playerId]) || void 0 === Ic ? void 0 : Ic.cosmetics) && void 0 !== Bc ? Bc : {};
          return (0, qB.jsxs)("div", {
            className: tn()("PresenceIcon", {
              Viewer: !cB.isEditor
            }),
            style: {
              backgroundColor: cB.colour
            },
            onMouseEnter: () => {
              Vc(cB.playerId)
            },
            onMouseLeave: () => {
              Vc(null)
            },
            children: [(0, qB.jsx)(fV.b, {
              cosmetics: uc
            }), nc === cB.playerId && (0, qB.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: cB.colour
              },
              children: cB.playerName
            })]
          }, cB.playerId)
        }))
      })
    }
    var eV = nc(279),
      tI = nc(35471),
      SV = nc(35207),
      yI = nc(35490);

    function zI(cB) {
      const Bc = cB.split("/"),
        nc = [];
      for (let Vc = 1; Vc < Bc.length; Vc++) nc.push(Bc.slice(0, Vc).join("/"));
      return nc
    }

    function pV(cB) {
      return cB.slice(cB.lastIndexOf("/") + 1)
    }
    const hV = (0, Ic.memo)((function(cB) {
      var Bc;
      let {
        files: nc,
        activePath: Vc,
        canEdit: rB,
        directoryLinked: uc,
        pluginNames: sc,
        activePluginName: Mc,
        activePluginFile: Pc,
        onSelect: Oc,
        onSelectPlugin: Tc,
        onCreate: mB,
        onRename: ec,
        onRenameFolder: Sc,
        onDelete: yB,
        onToggleDirectorySync: zB,
        schematics: pc,
        onManageSchematic: hc
      } = cB;
      const {
        t: aB
      } = (0, BB.x)(), lc = null !== (Bc = (0, PV.c)(nc)) && void 0 !== Bc ? Bc : sV.g, Yc = Object.keys(nc), [Lc, gB] = (0, Ic.useState)((() => new Set)), Uc = function(cB, Bc, nc) {
        const Vc = {
          folders: new Map,
          files: []
        };
        for (const uc of cB) {
          if (uc === Bc) continue;
          let cB = Vc;
          for (const Bc of zI(uc)) {
            let nc = cB.folders.get(Bc);
            nc || (nc = {
              folders: new Map,
              files: []
            }, cB.folders.set(Bc, nc)), cB = nc
          }
          cB.files.push(uc)
        }
        const Ic = [];
        cB.includes(Bc) && Ic.push({
          kind: "file",
          path: Bc,
          name: pV(Bc),
          depth: 0
        });
        const rB = (cB, Bc) => {
          const Vc = [...cB.folders.entries()].sort(((cB, Bc) => {
            let [nc] = cB, [Vc] = Bc;
            return nc.localeCompare(Vc)
          }));
          for (const [uc, sc] of Vc) {
            const cB = nc.has(uc);
            Ic.push({
              kind: "folder",
              path: uc,
              name: pV(uc),
              depth: Bc,
              collapsed: cB
            }), cB || rB(sc, Bc + 1)
          }
          cB.files.sort(((cB, Bc) => cB.localeCompare(Bc)));
          for (const nc of cB.files) Ic.push({
            kind: "file",
            path: nc,
            name: pV(nc),
            depth: Bc
          })
        };
        return rB(Vc, 0), Ic
      }(Yc, lc, Lc);
      (0, Ic.useEffect)((() => {
        gB((cB => {
          const Bc = new Set(cB);
          let nc = !1;
          for (const Ic of zI(Vc)) nc = Bc.delete(Ic) || nc;
          return nc ? Bc : cB
        }))
      }), [Vc]);
      const bB = Yc.length >= kB.w,
        Zc = (cB, Bc) => {
          if (cB.length > MV.r) return `Path must be at most ${MV.r} characters`;
          if (!(0, MV.p)(cB)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === cB) return "index.d.ts cannot be the world-code entry";
          const Vc = !!Bc && (0, PV.d)(Bc, cB);
          if (Bc && (0, PV.h)(Bc) && !Vc) return `Cannot rename ${Bc} (only swapping ${sV.g} and ${sV.k} is allowed)`;
          if (cB in nc) return "A file with that path already exists";
          if ((0, PV.h)(cB) && !Vc) {
            if ((cB === sV.g ? sV.k : sV.g) in nc) return `World code cannot have both ${sV.g} and ${sV.k}`
          }
          return null
        },
        Qc = cB => {
          TV.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === cB ? void 0 : `${cB}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: cB => Zc(cB)
          }).getResult().then((cB => {
            "notificationTornDown" !== cB && null !== cB && "submit" === cB.type && mB(cB.value)
          }))
        },
        Cc = cB => {
          TV.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: cB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Bc => Bc === cB ? "That is already the file's path" : Zc(Bc, cB)
          }).getResult().then((Bc => {
            "notificationTornDown" !== Bc && null !== Bc && "submit" === Bc.type && ec(cB, Bc.value)
          }))
        },
        vB = cB => {
          const Bc = cB => cB.replace(/\/+$/, "");
          TV.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: cB,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: nc => {
              const Vc = Bc(nc);
              if (Vc === cB) return "That is already the folder's path";
              for (const [Bc, Ic] of(0, PV.p)(Yc, cB, Vc)) {
                const cB = Zc(Ic, Bc);
                if (null !== cB) return cB
              }
              return null
            }
          }).getResult().then((nc => {
            "notificationTornDown" !== nc && null !== nc && "submit" === nc.type && Sc(cB, Bc(nc.value))
          }))
        },
        Dc = cB => {
          TV.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: cB
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((Bc => {
            !0 === Bc && yB(cB)
          }))
        };
      return (0, qB.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, qB.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, qB.jsx)("span", {
            children: "Files"
          }), rB && !bB && (0, qB.jsx)(fc.u, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Qc()
            },
            children: (0, qB.jsx)(tB.e, {
              name: "plus"
            })
          })]
        }), (0, qB.jsxs)("div", {
          className: "FileTreeList",
          children: [Uc.map((cB => {
            const Bc = cB.path;
            if ("folder" === cB.kind) return (0, qB.jsx)(YV, {
              path: Bc,
              name: cB.name,
              depth: cB.depth,
              collapsed: cB.collapsed,
              onToggle: () => {
                var cB;
                cB = Bc, gB((Bc => {
                  const nc = new Set(Bc);
                  return nc.delete(cB) || nc.add(cB), nc
                }))
              },
              canCreate: rB && !bB,
              canRename: rB,
              onCreate: Qc,
              onRename: vB
            }, `folder:${Bc}`);
            const Ic = (0, PV.h)(Bc),
              uc = sV.g in nc && sV.k in nc,
              sc = !Ic || uc,
              Pc = null === Mc && Bc === Vc;
            return (0, qB.jsx)(gI, {
              path: Bc,
              label: cB.name,
              depth: cB.depth,
              isActive: Pc,
              canRename: rB,
              onSelect: Oc,
              onRename: Cc,
              onDelete: Dc,
              canDelete: sc && rB
            }, Bc)
          })), (0, qB.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, qB.jsxs)("span", {
              children: ["Schematics (", Object.keys(pc).length, "/", yI.e, ")"]
            }), rB && (0, qB.jsx)(fc.u, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(pc).length >= yI.e,
              onClick: () => {
                hc("")
              },
              children: (0, qB.jsx)(tB.e, {
                name: "plus"
              })
            })]
          }), Object.keys(pc).sort().map((cB => (0, qB.jsx)(gI, {
            path: cB,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: hc
          }, cB))), sc.length > 0 && (0, qB.jsxs)(qB.Fragment, {
            children: [(0, qB.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, qB.jsx)("span", {
                children: "Plugins"
              })
            }), sc.map((cB => {
              var Bc;
              const nc = tI.e[cB],
                Vc = Object.keys(null !== (Bc = null === nc || void 0 === nc ? void 0 : nc.files) && void 0 !== Bc ? Bc : {
                  "index.ts": ""
                }).sort(((cB, Bc) => "index.ts" === cB ? -1 : "index.ts" === Bc ? 1 : cB.localeCompare(Bc)));
              return (0, qB.jsxs)("div", {
                children: [(0, qB.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, PV.y)(cB)
                }), Vc.map((Bc => (0, qB.jsx)(gI, {
                  path: Bc,
                  nested: !0,
                  isActive: Mc === cB && Pc === Bc,
                  canRename: !1,
                  onSelect: () => {
                    Tc(cB, Bc)
                  },
                  canDelete: !1
                }, Bc)))]
              }, cB)
            }))]
          })]
        }), (0, qB.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, qB.jsx)(fc.d, {
            className: "FileTreeFooterButton",
            onClick: zB,
            children: aB(uc ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function aI(cB) {
      return cB > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": cB
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function lV(cB) {
      let {
        depth: Bc
      } = cB;
      return (0, qB.jsx)(qB.Fragment, {
        children: Array.from({
          length: Bc
        }, ((cB, Bc) => (0, qB.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": Bc
          }
        }, Bc)))
      })
    }

    function YV(cB) {
      let {
        path: Bc,
        name: nc,
        depth: Vc,
        collapsed: Ic,
        onToggle: rB,
        canCreate: uc,
        canRename: sc,
        onCreate: Mc,
        onRename: Pc
      } = cB;
      const Oc = [];
      uc && Oc.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          Mc(Bc)
        }
      }), sc && Oc.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Pc(Bc)
        }
      });
      const Tc = aI(Vc);
      return (0, qB.jsxs)("div", {
        className: tn()("FileTreeItem FileTreeFolder", Tc.className),
        style: Tc.style,
        children: [(0, qB.jsx)(lV, {
          depth: Vc
        }), (0, qB.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Ic,
          onClick: rB,
          children: [(0, qB.jsx)(tB.e, {
            className: "FileTreeFolderCaret",
            name: Ic ? "caret-right" : "caret-down"
          }), (0, qB.jsx)(tB.e, {
            className: "FileTreeFolderIcon",
            name: Ic ? "folder" : "folder-open"
          }), nc]
        }), (0, qB.jsx)(LV, {
          path: Bc,
          actions: Oc
        })]
      })
    }

    function LV(cB) {
      let {
        path: Bc,
        actions: nc
      } = cB;
      const Vc = (0, Ic.useRef)(null);
      return 0 === nc.length ? null : (0, qB.jsxs)("div", {
        ref: Vc,
        className: "FileTreeItemActions",
        children: [(0, qB.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${Bc}`,
          children: (0, qB.jsx)(tB.e, {
            name: "ellipsis"
          })
        }), (0, qB.jsx)(SV.c, {
          triggerElementRef: Vc,
          options: nc
        })]
      })
    }

    function gI(cB) {
      let {
        path: Bc,
        label: nc = Bc,
        depth: Vc = 0,
        isActive: Ic,
        canRename: rB,
        onSelect: uc,
        onRename: sc,
        onDelete: Mc,
        canDelete: Pc,
        nested: Oc
      } = cB;
      const Tc = [];
      rB && sc && Tc.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          sc(Bc)
        }
      }), Pc && Mc && Tc.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          Mc(Bc)
        }
      });
      const fc = aI(Vc);
      return (0, qB.jsxs)("div", {
        className: tn()("FileTreeItem", fc.className, {
          Active: Ic,
          Nested: Oc
        }),
        style: fc.style,
        children: [(0, qB.jsx)(lV, {
          depth: Vc
        }), (0, qB.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: nc === Bc ? void 0 : Bc,
          onClick: () => {
            uc(Bc)
          },
          children: nc
        }), (0, qB.jsx)(LV, {
          path: Bc,
          actions: Tc
        })]
      })
    }
    async function UV(cB) {
      const Bc = (0, PV.c)(cB);
      if (!Bc || "" === cB[Bc].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: Vc
      } = await Promise.all([nc.e(274), nc.e(275)]).then((() => nc(39440)));
      return (0, tI.d)(Vc(cB))
    }
    var bI = nc(35496);

    function ZV(cB, Bc) {
      const nc = Object.keys(cB),
        Vc = Object.keys(Bc);
      if (nc.length !== Vc.length) return !1;
      for (const Ic of nc)
        if (!(Ic in Bc) || cB[Ic] !== Bc[Ic]) return !1;
      return !0
    }

    function QV(cB, Bc) {
      const nc = [],
        Vc = [],
        Ic = [];
      for (const rB of Object.keys(Bc)) rB in cB ? cB[rB] !== Bc[rB] && Ic.push(rB) : nc.push(rB);
      for (const rB of Object.keys(cB)) rB in Bc || Vc.push(rB);
      return nc.sort(), Vc.sort(), Ic.sort(), {
        creates: nc,
        deletes: Vc,
        updates: Ic
      }
    }

    function CV(cB, Bc) {
      var nc;
      const Vc = {
          ...cB
        },
        Ic = (0, PV.c)(Bc),
        rB = (0, PV.c)(Vc);
      if (sV.g in Vc && sV.k in Vc) {
        const cB = null !== Ic && void 0 !== Ic ? Ic : sV.k,
          nc = cB === sV.g ? sV.k : sV.g;
        var uc;
        if (!(cB in Vc)) Vc[cB] = null !== (uc = Bc[cB]) && void 0 !== uc ? uc : "";
        return delete Vc[nc], Vc
      }
      var sc;
      return Ic && !(Ic in Vc) ? (rB || (Vc[Ic] = null !== (sc = Bc[Ic]) && void 0 !== sc ? sc : ""), Vc) : (rB || Ic || (Vc[sV.g] = null !== (nc = Vc[sV.g]) && void 0 !== nc ? nc : "", delete Vc[sV.k]), Vc)
    }

    function vI(cB, Bc) {
      const nc = (0, PV.c)(Bc),
        Vc = sV.g in Bc && sV.k in Bc;
      return cB.filter((cB => !(0, PV.h)(cB) || (!!Vc || nc !== cB)))
    }
    async function DV(cB, Bc, Vc) {
      const Ic = cB.getLobbyFiles(),
        rB = (0, kB.h)(Vc, (0, PV.r)(Ic, Bc)),
        uc = await cB.ensureJoined(Bc),
        sc = (0, MV.s)(uc.docKey);
      if (uc.doc === rB) return;
      for (let nc = 0; nc < 100; nc++) {
        const nc = cB.getCollabSnapshot();
        if (nc && (0, MV.s)(nc.docKey) === sc && cB.getActivePath() === Bc) {
          if (cB.replaceActiveDoc(sc, rB)) return;
          await (0, Sn.J)(40)
        } else await (0, Sn.J)(40)
      }
      const {
        ChangeSet: Mc
      } = await nc.e(270).then((() => nc(39279))), qB = cB.getCollabSnapshot(), Oc = qB && (0, MV.s)(qB.docKey) === sc ? qB : uc;
      await async function(cB, Bc, nc, Vc) {
        const Ic = cB.of({
            from: 0,
            to: nc.length,
            insert: Vc
          }, nc.length),
          rB = JSON.stringify([{
            clientID: Bc.clientID,
            changes: Ic.toJSON()
          }]),
          uc = (0, MV.s)(Bc.docKey);
        rB.length <= MV.e ? Pc.gameBridge.send("sendCodeCollab", {
          oN: MV.b.Push,
          kE: uc,
          XN: Bc.version,
          uE: rB
        }) : await (0, rI.postJsonWithMetricsCookiesAndJsonResponse)(`${Bc.httpConfig.gsUrl}/code/collab-push`, IV.n["collab-push"].toBuffer({
          gameNameWithVariation: Bc.httpConfig.gameNameWithVariation,
          lobbyName: Bc.httpConfig.lobbyName,
          docKey: uc,
          version: Bc.version,
          updates: rB
        }), {
          retries: 0
        })
      }(Mc, Oc, Oc.doc, rB)
    }
    class NV {
      constructor(cB) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = cB
      }
      async writeLobbyFiles(cB) {
        const Bc = {
            ...this.bridge.getLobbyFiles()
          },
          nc = {
            ...Bc
          };
        for (const {
            path: rB,
            text: uc
          }
          of cB) nc[rB] = uc;
        if (!cB.every((cB => {
            let {
              path: Bc,
              text: Vc
            } = cB;
            return (0, kB.h)(Vc, (0, PV.r)(nc, Bc)) === Vc
          }))) return !1;
        const Vc = [];
        try {
          for (const {
              path: Bc,
              text: nc
            }
            of cB) Vc.push(Bc), Bc in this.bridge.getLobbyFiles() || (this.bridge.createFile(Bc, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(Bc, !0)), await DV(this.bridge, Bc, nc)
        } catch (Ic) {
          for (const cB of Vc) cB in Bc ? await DV(this.bridge, cB, Bc[cB]).catch((Bc => {
            console.error("World Code AI: couldn't put back", cB, Bc)
          })) : this.bridge.deleteFile(cB);
          throw Ic
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const cB = await (0, bI.y)(this.bridge.getStorageKey());
        return !!cB && (this.handle = cB, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(cB), !0)
      }
      async unlinkFolder() {
        const cB = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, bI.e)(cB), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const cB = this.bridge.getStorageKey(),
          Bc = await (0, bI.w)(cB);
        return !!Bc && (!!await (0, bI.k)(Bc, "readwrite") && (this.handle = Bc, this.linked = !0, await (0, bI.F)(cB, Bc), await this.scaffoldLocalTypes(Bc), !0))
      }
      scaffoldLocalTypes(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const Vc = (await UV(Bc)).map((cB => tI.e[cB])),
              Ic = Vc.map((cB => {
                var Bc;
                return `${cB.name}:${Object.keys(null!==(Bc=null===cB||void 0===cB?void 0:cB.files)&&void 0!==Bc?Bc:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Ic) return;
            const {
              ensureLocalBloxdTypes: rB
            } = await Promise.all([nc.e(70), nc.e(272), nc.e(277)]).then((() => nc(39449)));
            await rB(cB, Vc), this.scaffoldedPluginNamesKey = Ic
          } catch (Vc) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", Vc)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(cB) {
        this.handle && await this.scaffoldLocalTypes(this.handle, cB), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(cB)
      }
      async onDocTextChanged(cB, Bc) {
        if (!this.handle) return;
        const nc = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [cB]: Bc
        })];
        this.running && (this.pendingDocText.set(cB, Bc), nc.push(this.flushDocTextToDisk())), await Promise.all(nc)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const cB = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const Bc = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [nc, Vc] of Bc) this.lastSynced[nc] !== Vc && (await (0, bI.O)(cB, nc, Vc), this.lastSynced = {
              ...this.lastSynced,
              [nc]: Vc
            })
          }
        } catch (Bc) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", Bc), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, bI.A)(this.handle))
          } catch (cB) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", cB)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, bI.k)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const Bc = this.bridge.getLobbyFiles(),
              nc = await (0, bI.A)(this.handle);
            for (const cB of Object.keys(Bc).filter(yI.c)) {
              if (nc[cB] === bI.q) return void this.bridge.setMessage(`Move ${cB} outside the linked folder before syncing its placeholder.`, "warning");
              nc[cB] = yI.k
            }
            if (ZV(nc, Bc)) {
              for (const cB of Object.keys(Bc).filter(yI.c)) await (0, bI.O)(this.handle, cB, yI.k);
              return this.lastSynced = {
                ...nc
              }, void this.beginWatch()
            }
            const Vc = await this.promptReconcile(function(cB) {
              return null !== (0, PV.c)(cB)
            }(nc));
            if ("unlink" === Vc) return void await this.unlinkFolder();
            if ("dismissed" === Vc) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === Vc) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(nc);
                for (const cB of Object.keys(Bc).filter(yI.c)) await (0, bI.O)(this.handle, cB, yI.k);
                this.lastSynced = {
                  ...await (0, bI.A)(this.handle)
                }
              } else await (0, bI.Q)(this.handle, Bc), this.lastSynced = {
                ...Bc
              }
            } catch (cB) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", cB), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(cB) {
        return await new Promise((Bc => {
          const nc = [{
              choice: "local",
              Button: fc.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: fc.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: fc.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            Vc = (0, qB.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, qB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, qB.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: cB ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, qB.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: nc.filter((Bc => "local" !== Bc.choice || cB)).map((cB => {
                  let {
                    choice: nc,
                    Button: Vc,
                    labelKey: rB,
                    descriptionKey: uc
                  } = cB;
                  return (0, qB.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, qB.jsx)(Vc, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (cB => {
                          Ic.tearDownNotification(), Bc(cB)
                        })(nc)
                      },
                      children: this.bridge.t(`codeEditor:${rB}`)
                    }), (0, qB.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${uc}`)
                    })]
                  }, nc)
                }))
              })]
            }),
            Ic = TV.NotificationProvider.showCustomPopup({
              body: Vc,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Ic.getResult().then((cB => {
            "notificationTornDown" === cB && Bc("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, bI.J)(this.handle, (cB => {
          this.onDiskFilesChanged(cB)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (cB) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", cB)
        }
      }
      async onDiskFilesChanged(cB) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const Bc = this.bridge.getLobbyFiles();
        let nc = CV(cB, this.lastSynced);
        for (const rB in Bc)
          if ((0, yI.c)(rB) && nc[rB] === bI.q) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const Vc = Object.keys(nc).filter((cB => (0, yI.c)(cB) && !(cB in Bc)));
        Vc.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const rB of Object.keys(Bc).filter(yI.c))(rB in nc || Vc.length > 0 || !(rB in this.lastSynced)) && (nc[rB] = yI.k);
        if (!ZV(nc, cB)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(cB, nc), nc = CV(await (0, bI.A)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!ZV(nc, this.lastSynced)) {
          this.applying = !0;
          try {
            const cB = QV(this.lastSynced, nc);
            if (await this.pushDiskDeltaToLobby(nc, Bc), null !== this.lastLobbySeen)
              for (const nc of [...cB.creates, ...cB.updates, ...cB.deletes])(0, yI.c)(nc) || (nc in Bc ? this.lastLobbySeen[nc] = Bc[nc] : delete this.lastLobbySeen[nc]);
            this.lastSynced = {
              ...nc
            }
          } catch (Ic) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Ic), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(cB, Bc) {
        if (this.handle) {
          for (const nc of Object.keys(cB)) nc in Bc || await (0, bI.B)(this.handle, nc);
          for (const [nc, Vc] of Object.entries(Bc)) cB[nc] !== Vc && await (0, bI.O)(this.handle, nc, Vc)
        }
      }
      async applyRemoteTreeToDisk(cB) {
        if (!this.handle) return;
        const Bc = this.lastLobbySeen;
        if (null === Bc) return void(this.lastLobbySeen = {
          ...cB
        });
        const nc = Object.keys(cB).filter((nc => Bc[nc] !== cB[nc])),
          Vc = Object.keys(Bc).filter((Bc => !(Bc in cB)));
        if (0 !== nc.length || 0 !== Vc.length) {
          this.applying = !0;
          try {
            for (const Bc of [...Vc, ...nc]) try {
              if (Bc in cB) await (0, bI.O)(this.handle, Bc, cB[Bc]), this.lastSynced = {
                ...this.lastSynced,
                [Bc]: cB[Bc]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [Bc]: cB[Bc]
              };
              else {
                await (0, bI.B)(this.handle, Bc);
                const cB = {
                  ...this.lastSynced
                };
                delete cB[Bc], this.lastSynced = cB;
                const nc = {
                  ...this.lastLobbySeen
                };
                delete nc[Bc], this.lastLobbySeen = nc
              }
            } catch (Ic) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Ic), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(cB, Bc) {
        const nc = function(cB, Bc) {
          const nc = (0, PV.c)(cB),
            Vc = (0, PV.c)(Bc);
          return nc && Vc && nc !== Vc ? {
            from: nc,
            to: Vc
          } : null
        }(cB, Bc);
        return !!nc && (this.bridge.renameFile(nc.from, nc.to), await this.bridge.waitForLobbyPath(nc.to, !0), !0)
      }
      async applyLocalTreeToLobby(cB) {
        var Bc;
        const nc = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), cB);
        const Vc = this.bridge.getLobbyFiles(),
          Ic = QV(Vc, cB),
          rB = vI(Ic.deletes, Vc);
        for (const Pc of Ic.creates)(0, yI.c)(Pc) || (this.bridge.createFile(Pc, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Pc, !0));
        for (const Pc of rB)(0, yI.c)(Pc) || (this.bridge.deleteFile(Pc), await this.bridge.waitForLobbyPath(Pc, !1));
        if (!(0, PV.c)(this.bridge.getLobbyFiles()) && !(0, PV.c)(cB)) {
          if (this.bridge.createFile(sV.g, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(sV.g, !0), !this.handle) return;
          await (0, bI.O)(this.handle, sV.g, ""), cB = {
            ...cB,
            [sV.g]: ""
          }
        }
        const uc = this.bridge.getLobbyFiles();
        for (const Pc of Object.keys(cB))(0, yI.c)(Pc) || uc[Pc] !== cB[Pc] && await DV(this.bridge, Pc, cB[Pc]);
        const sc = this.bridge.getLobbyFiles(),
          Mc = nc in sc ? nc : null !== (Bc = (0, PV.c)(sc)) && void 0 !== Bc ? Bc : sV.g;
        await this.bridge.ensureJoined(Mc)
      }
      async pushDiskDeltaToLobby(cB, Bc) {
        const nc = this.bridge.getActivePath(),
          Vc = await this.renameLobbyEntryIfSwitched(Bc, cB) ? this.bridge.getLobbyFiles() : Bc,
          Ic = QV(this.lastSynced, cB),
          rB = vI(Ic.deletes, Vc).filter((cB => cB in Vc));
        for (const uc of Ic.creates)(0, yI.c)(uc) || (uc in this.bridge.getLobbyFiles() || (this.bridge.createFile(uc, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(uc, !0)), await DV(this.bridge, uc, cB[uc]));
        for (const uc of rB)(0, yI.c)(uc) ? await this.bridge.deleteSchematic(uc) : (this.bridge.deleteFile(uc), await this.bridge.waitForLobbyPath(uc, !1));
        for (const uc of Ic.updates)(0, yI.c)(uc) || await DV(this.bridge, uc, cB[uc]);
        nc in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== nc && await this.bridge.ensureJoined(nc)
      }
    }
    var EV = nc(1062);

    function oV() {
      const {
        websocketUrl: cB,
        gameNameWithVariation: Bc,
        lobbyName: nc
      } = Pc.gameBridge.latest("connectedGame");
      return {
        gsUrl: EV.clientSideServerUrls.getHttpUrlFromWebSocketUrl(cB),
        gameNameWithVariation: Bc,
        lobbyName: nc
      }
    }
    async function WV(cB) {
      const {
        gsUrl: Bc,
        gameNameWithVariation: nc,
        lobbyName: Vc
      } = oV();
      return await (0, rI.postBinaryWithMetricsCookiesAndCustomResponse)(`${Bc}/code/schematics`, IV.vj.schematics.toBuffer({
        gameNameWithVariation: nc,
        lobbyName: Vc,
        request: JSON.stringify(cB)
      }), {
        retries: 0
      }, rI.HttpPayloadType.json)
    }
    var wV = nc(152),
      kI = nc(35074);

    function XV(cB) {
      let {
        path: Bc,
        revision: nc
      } = cB;
      const [Vc, rB] = (0, Ic.useState)(""), [uc, sc] = (0, Ic.useState)(!1), [Mc, Pc] = (0, Ic.useState)(0);
      return (0, Ic.useEffect)((() => {
        let cB = !1;
        return rB(""), sc(!1), WV({
          action: "preview",
          path: Bc
        }).then((Bc => {
          cB || rB(`data:image/webp;base64,${Bc.previewBase64}`)
        })).catch((Bc => {
          console.error("Could not load schematic preview", Bc), cB || sc(!0)
        })), () => {
          cB = !0
        }
      }), [Bc, nc, Mc]), (0, qB.jsxs)("div", {
        className: "SchematicPreview",
        children: [Vc && (0, qB.jsx)("img", {
          src: Vc,
          alt: `Preview of ${Bc}`
        }), !Vc && !uc && (0, qB.jsx)(Uc.e, {
          loaderType: "Secondary"
        }), uc && (0, qB.jsxs)(qB.Fragment, {
          children: [(0, qB.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, qB.jsx)(fc.d, {
            onClick: () => {
              Pc(Mc + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function HV(cB) {
      var Bc;
      let {
        initialPath: nc,
        onChanged: Vc,
        onClose: rB
      } = cB;
      const uc = "" === nc,
        [sc, Mc] = (0, Ic.useState)(null),
        [Pc, Oc] = (0, Ic.useState)(nc),
        [Tc, mB] = (0, Ic.useState)(!1),
        [ec, tB] = (0, Ic.useState)(!1),
        [Sc, yB] = (0, Ic.useState)(null),
        [zB, pc] = (0, Ic.useState)(!1),
        [hc, aB] = (0, Ic.useState)(""),
        lc = (0, Ic.useRef)(null),
        Yc = (0, Ic.useRef)(!1),
        Lc = (0, Ic.useRef)(!0);
      (0, Ic.useEffect)((() => (Lc.current = !0, WV({
        action: "state"
      }).then((cB => {
        Lc.current && Mc(cB)
      })).catch((cB => {
        console.error("Could not load schematic assets", cB), Lc.current && aB("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        Lc.current = !1
      })), []);
      const gB = null === sc || void 0 === sc ? void 0 : sc.assets[nc],
        Uc = Object.keys(null !== (Bc = null === sc || void 0 === sc ? void 0 : sc.assets) && void 0 !== Bc ? Bc : {}).length,
        bB = Pc.trim(),
        Zc = bB ? (0, yI.c)(bB) ? null !== sc && void 0 !== sc && sc.assets[bB] && (uc || bB !== nc) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Qc = !!bB && !Zc && (uc ? Uc < yI.e : bB !== nc),
        Cc = zB || !sc;
      async function vB(cB) {
        if (!Yc.current && Lc.current) {
          Yc.current = !0, pc(!0), aB("");
          try {
            const Bc = await WV({
              ...cB,
              expectedRevision: sc.revision
            });
            Vc(Bc), Lc.current && rB()
          } catch (nc) {
            var Bc;
            if (console.error("Schematic asset operation failed", nc), Lc.current) aB(nc instanceof wV.c ? null !== (Bc = nc.errorMessageForUser) && void 0 !== Bc ? Bc : nc.message : String(nc));
            try {
              const cB = await WV({
                action: "state"
              });
              Vc(cB), Lc.current && Mc(cB)
            } catch (Ic) {
              console.error("Could not refresh schematic assets", Ic)
            }
          } finally {
            Yc.current = !1, Lc.current && pc(!1)
          }
        }
      }
      return (0, qB.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, qB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: uc ? "New schematic" : Tc ? "Rename schematic" : "Schematic"
        }), hc && (0, qB.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: hc
        }), !sc && !hc && (0, qB.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, qB.jsxs)("fieldset", {
          disabled: Cc,
          children: [uc || Tc ? (0, qB.jsxs)("label", {
            className: "SchematicField",
            children: [(0, qB.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, qB.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, qB.jsx)(QB.e, {
                className: "InputGenericPopupInput",
                defaultValue: nc,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Oc
              }, Tc ? "rename" : "create")
            })]
          }) : (0, qB.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: nc
          }), (uc || Tc) && Zc && (0, qB.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Zc
          }), uc ? (0, qB.jsxs)(qB.Fragment, {
            children: [Uc >= yI.e && (0, qB.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", yI.e, " maximum)."]
            }), ec ? (0, qB.jsxs)(qB.Fragment, {
              children: [(0, qB.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, qB.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Cc || !Qc,
                children: (0, qB.jsx)(kI.b, {
                  loading: null === Sc,
                  schematics: null !== Sc && void 0 !== Sc ? Sc : [],
                  disableAutoExport: !0,
                  onSchematicPicked: cB => {
                    !Cc && Qc && vB({
                      action: "profile",
                      path: bB,
                      schematicId: cB.schematicId
                    })
                  }
                })
              }), (0, qB.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, qB.jsx)(fc.d, {
                  className: "InputGenericPopupButton",
                  disabled: Cc,
                  onClick: () => {
                    tB(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, qB.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, qB.jsx)(fc.d, {
                className: "InputGenericPopupButton",
                disabled: Cc || !Qc,
                onClick: () => {
                  lc.current.click()
                },
                children: "Upload Schematic"
              }), (0, qB.jsx)(fc.d, {
                className: "InputGenericPopupButton",
                disabled: Cc || !Qc,
                onClick: () => {
                  !async function() {
                    if (tB(!0), aB(""), !Sc) try {
                      const cB = await (0, rI.postJsonWithMetricsCookiesAndJsonResponse)(`${EV.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      Lc.current && yB(cB)
                    } catch (cB) {
                      console.error("Could not load profile schematics", cB), Lc.current && (tB(!1), aB("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, qB.jsx)("input", {
              ref: lc,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: cB => {
                var Bc;
                const nc = null === (Bc = cB.target.files) || void 0 === Bc ? void 0 : Bc[0];
                if (cB.target.value = "", !nc) return;
                if (nc.size > yI.h) return void aB("The schematic file is too large.");
                const Vc = bB;
                pc(!0);
                const Ic = new FileReader;
                Ic.onload = () => {
                  vB({
                    action: "upload",
                    path: Vc,
                    base64: String(Ic.result).split(",")[1]
                  })
                }, Ic.onerror = () => {
                  console.error("Could not read schematic file", Ic.error), Lc.current && (pc(!1), aB("Could not read the selected file."))
                }, Ic.readAsDataURL(nc)
              }
            })]
          }) : gB ? (0, qB.jsxs)(qB.Fragment, {
            children: [!Tc && (0, qB.jsx)(XV, {
              path: nc,
              revision: sc.revision
            }), !Tc && (0, qB.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(gB.byteSize / 1024), " KB \xb7 ", gB.dimensions.join(" \xd7 "), " blocks"]
            }), (0, qB.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Tc ? (0, qB.jsxs)(qB.Fragment, {
                children: [(0, qB.jsx)(fc.d, {
                  className: "InputGenericPopupButton",
                  disabled: Cc || !Qc,
                  onClick: () => {
                    vB({
                      action: "rename",
                      path: nc,
                      newPath: bB
                    })
                  },
                  children: "Rename"
                }), (0, qB.jsx)(fc.d, {
                  className: "InputGenericPopupButton",
                  disabled: Cc,
                  onClick: () => {
                    mB(!1), Oc(nc)
                  },
                  children: "Cancel"
                })]
              }) : (0, qB.jsxs)(qB.Fragment, {
                children: [(0, qB.jsx)(fc.d, {
                  className: "InputGenericPopupButton",
                  disabled: Cc,
                  onClick: () => {
                    mB(!0)
                  },
                  children: "Rename"
                }), (0, qB.jsx)(fc.L, {
                  className: "InputGenericPopupButton",
                  disabled: Cc,
                  onClick: () => {
                    vB({
                      action: "remove",
                      path: nc
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : sc && (0, qB.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function FV(cB) {
      if ("string" !== typeof cB) return null;
      try {
        const Bc = JSON.parse(cB);
        return (0, PV.l)(null === Bc || void 0 === Bc ? void 0 : Bc.worldCodeEngine) && "boolean" === typeof Bc.engineLocked && function(cB) {
          if (null === cB) return !0;
          const Bc = null === cB || void 0 === cB ? void 0 : cB.location;
          return "string" === typeof(null === cB || void 0 === cB ? void 0 : cB.reason) && (null === Bc || "string" === typeof(null === Bc || void 0 === Bc ? void 0 : Bc.path) && Number.isInteger(Bc.line))
        }(Bc.fallback) ? Bc : (console.error("[CodeCollab] Malformed engine settings", cB), null)
      } catch (Bc) {
        return console.error("[CodeCollab] Failed to parse engine settings", Bc), null
      }
    }

    function JV(cB) {
      let {
        fallback: Bc,
        onGoToLine: nc
      } = cB;
      const {
        t: Vc
      } = (0, BB.x)(), {
        location: Ic
      } = Bc;
      return (0, qB.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [Vc("codeEditorEngine:notice", {
          reason: Bc.reason
        }), Ic && (0, qB.jsxs)(qB.Fragment, {
          children: [" ", (0, qB.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              nc(Ic.path, Ic.line)
            },
            children: Vc("codeEditorEngine:goToLine", {
              line: String(Ic.line)
            })
          })]
        })]
      })
    }
    var jI = nc(3985),
      RV = nc(3551);

    function iI(cB) {
      let {
        label: Bc,
        hint: nc,
        checked: Vc,
        onChange: Ic
      } = cB;
      return (0, qB.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, qB.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, qB.jsx)("span", {
            children: Bc
          }), (0, qB.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: nc
          })]
        }), (0, qB.jsx)("span", {
          className: "SwitchContainer",
          children: (0, qB.jsx)(RV.c, {
            className: "SwitchCheckbox",
            checked: Vc,
            onChange: cB => {
              Ic(cB.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function KV(cB) {
      let {
        engine: Bc,
        onSetEngine: nc,
        aiHints: Vc,
        variation: Ic
      } = cB;
      const {
        t: rB
      } = (0, BB.x)();
      return (0, qB.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, qB.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: rB("codeEditor:moreOptions")
        }), Bc && (0, qB.jsx)(iI, {
          label: rB("codeEditorEngine:toggle"),
          hint: rB("codeEditorEngine:toggleHint"),
          checked: "ses" === Bc,
          onChange: cB => {
            nc(cB ? "ses" : "quickjs")
          }
        }), Vc && (0, qB.jsx)(iI, {
          label: rB("codeEditorAiHints:toggle"),
          hint: rB("codeEditorAiHints:toggleHint"),
          checked: Vc.shown,
          onChange: Vc.setShown
        }), Ic && (0, qB.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, qB.jsx)(jI.f, {
            label: "codeEditor:variationLabel",
            children: (0, qB.jsx)(QB.e, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Ic.name,
              onValueChange: Ic.setName,
              onEnter: Ic.reload
            })
          }), (0, qB.jsx)(fc.A, {
            className: "CodeEditorButton",
            onClick: Ic.reload,
            children: rB("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var xI = nc(35498),
      dV = nc(35501);

    function AV(cB) {
      let {
        close: Bc
      } = cB;
      const {
        t: nc
      } = (0, BB.x)(), Vc = [{
        name: nc("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: nc("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: nc("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, qB.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, qB.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: nc("codeEditor:tutorialsTitle")
        }), (0, qB.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: Vc.map((cB => (0, qB.jsx)(fc.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              Bc(), (0, dV.G)(cB.tutorial)
            },
            children: cB.name
          }, cB.tutorial)))
        })]
      })
    }
    var GV = nc(125),
      cr = nc(35204),
      BI = nc(7689);
    const nI = (0, Ic.forwardRef)((function(cB, Bc) {
      let {
        value: nc,
        onChange: Vc,
        onSubmit: Ic,
        placeholder: rB,
        maxLength: uc,
        rows: sc = 2,
        allowNewLines: Mc = !1,
        onKeyDown: Pc,
        before: Oc
      } = cB;
      const {
        t: Tc
      } = (0, BB.x)(), mB = "" !== nc.trim(), ec = () => {
        mB && Ic()
      };
      return (0, qB.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Oc, (0, qB.jsx)("textarea", {
          ref: Bc,
          className: "PanelPromptInput",
          value: nc,
          maxLength: uc,
          rows: sc,
          placeholder: rB,
          spellCheck: !1,
          autoComplete: "off",
          onChange: cB => {
            Vc(Mc ? cB.target.value : cB.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: cB => {
            cB.nativeEvent.isComposing || 229 === cB.nativeEvent.keyCode ? cB.stopPropagation() : "Escape" !== cB.key && (cB.stopPropagation(), null === Pc || void 0 === Pc || Pc(cB), cB.defaultPrevented || "Enter" !== cB.key || Mc && cB.shiftKey || (cB.preventDefault(), ec()))
          }
        }), (0, qB.jsx)(fc.d, {
          className: "PanelPromptSend",
          disabled: !mB,
          onClick: ec,
          ariaLabel: Tc("codeEditorPanels:send"),
          children: (0, qB.jsx)(tB.e, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function VI(cB) {
      let {
        close: Bc,
        inputRef: nc
      } = cB;
      const {
        t: Vc
      } = (0, BB.x)(), {
        messages: rB,
        reportedPlayers: uc,
        channel: sc
      } = (0, BI.m)(), [Mc, Pc] = (0, Ic.useState)(""), Oc = (0, Ic.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, qB.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, qB.jsxs)("div", {
          className: "CodeEditorChatHeader",
          children: [(0, qB.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: Vc("codeEditorChat:title")
          }), (0, qB.jsx)(fc.k, {
            className: "CodeEditorChatHide",
            onClick: Bc
          })]
        }), 0 === rB.length ? (0, qB.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: Vc("codeEditorChat:empty")
        }) : (0, qB.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, qB.jsx)(cr.c, {
            messages: rB,
            reportedPlayers: uc
          })
        }), (0, qB.jsx)(nI, {
          ref: nc,
          value: Mc,
          onChange: Pc,
          onSubmit: () => {
            (0, BI.l)(Mc), Pc(""), Oc.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: Lc.vc,
          rows: 1,
          placeholder: sc ? Vc("touchOnly" === (0, GV.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: sc.channelName
          }) : Vc("codeEditorChat:placeholder"),
          before: sc && (0, qB.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: sc.elementBgColor
            },
            onClick: () => {
              BI.d.selectNextChannel(), nc.current.focus()
            },
            children: (0, qB.jsx)(lc.e, {
              text: sc.elementContent
            })
          }),
          onKeyDown: cB => {
            const Bc = Mc === Oc.current.text;
            if ("ArrowUp" !== cB.key && "ArrowDown" !== cB.key || !Bc && "" !== Mc) "Tab" === cB.key && !cB.shiftKey && sc && (cB.preventDefault(), BI.d.selectNextChannel());
            else {
              cB.preventDefault();
              const nc = Bc ? Oc.current.stepsBack : 0;
              Oc.current = (0, BI.j)(nc + ("ArrowUp" === cB.key ? 1 : -1)), Pc(Oc.current.text)
            }
          }
        })]
      })
    }

    function II(cB) {
      let {
        side: Bc,
        defaultWidth: nc,
        children: Vc
      } = cB;
      const rB = (0, Ic.useRef)(null),
        [uc, sc] = (0, Ic.useState)(null),
        Mc = (0, Ic.useRef)(null),
        Pc = () => {
          Mc.current = null
        };
      return (0, qB.jsxs)("div", {
        ref: rB,
        className: tn()("ResizableSidePanel", `ResizableSidePanel-${Bc}`),
        style: {
          width: null !== uc && void 0 !== uc ? uc : nc
        },
        children: [Vc, (0, qB.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": "vertical",
          onPointerDown: cB => {
            if (0 !== cB.button) return;
            cB.preventDefault();
            const Bc = rB.current,
              nc = Array.from(Bc.parentElement.children).reduce(((cB, nc) => nc !== Bc && "0" !== getComputedStyle(nc).flexGrow ? cB + nc.clientWidth : cB), 0),
              Vc = Bc.offsetWidth,
              Ic = Math.min(200, Vc),
              uc = Math.max(Ic, Vc + Math.max(0, nc - 160));
            Mc.current = {
              startX: cB.clientX,
              startWidth: Vc,
              minWidth: Ic,
              maxWidth: uc
            }, cB.currentTarget.setPointerCapture(cB.pointerId)
          },
          onPointerMove: cB => {
            const nc = Mc.current;
            if (!nc) return;
            const Vc = "left" === Bc ? cB.clientX - nc.startX : nc.startX - cB.clientX;
            sc(Math.min(nc.maxWidth, Math.max(nc.minWidth, nc.startWidth + Vc)))
          },
          onPointerUp: Pc,
          onPointerCancel: Pc,
          onLostPointerCapture: Pc
        })]
      })
    }
    var rr = nc(35507);
    class uI {
      constructor(cB, Bc) {
        this.storageKey = cB, this.defaultValue = Bc, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const cB = vB.h.getItem(this.storageKey);
            this.value = "boolean" === typeof cB ? cB : this.defaultValue
          }
          return this.value
        }, this.set = cB => {
          this.value = cB, vB.h.setItem(this.storageKey, cB);
          for (const Bc of this.listeners) Bc(cB)
        }
      }
      subscribe(cB) {
        return this.listeners.add(cB), () => {
          this.listeners.delete(cB)
        }
      }
    }
    const sI = new uI("codeEditorLightMode", !1),
      MI = new uI("codeEditorAiHints", !0);

    function PI(cB) {
      const [Bc, nc] = (0, Ic.useState)(cB.get);
      return (0, Ic.useEffect)((() => {
        const Bc = cB.subscribe(nc);
        return nc(cB.get()), Bc
      }), [cB]), [Bc, cB.set]
    }
    var qr = nc(35516),
      OI = nc(35519),
      TI = nc(1464),
      fI = nc(35521);
    const mr = (0, Ic.lazy)((() => Promise.all([nc.e(274), nc.e(270), nc.e(273), nc.e(269), nc.e(70), nc.e(272), nc.e(271), nc.e(268)]).then((() => nc(39268))))),
      eI = (0, Ic.lazy)((() => Promise.all([nc.e(65), nc.e(68), nc.e(69), nc.e(67), nc.e(276)]).then((() => nc(39426))))),
      tr = (0, Ic.lazy)((() => Promise.all([nc.e(274), nc.e(273), nc.e(70), nc.e(68), nc.e(69), nc.e(67), nc.e(272), nc.e(271), nc.e(66), nc.e(75)]).then((() => nc(39433)))));

    function SI(cB) {
      return Pc.gameBridge.query("worldCodeAiChunk", cB)
    }

    function yr() {
      return Pc.gameBridge.query("worldCodeAiGameState", null)
    }

    function zr(cB) {
      const {
        gsUrl: Bc,
        gameNameWithVariation: nc,
        lobbyName: Vc
      } = oV();
      return (0, rI.postJsonWithMetricsCookiesAndJsonResponse)(`${Bc}/code/get-lobby-code`, IV.vj["get-lobby-code"].toBuffer({
        gameNameWithVariation: nc,
        lobbyName: Vc,
        path: cB
      }), {
        retries: 1
      })
    }
    let pI = !1;
    const hI = [],
      ar = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      lI = (0, Ic.memo)((function(cB) {
        var Bc, nc;
        let {
          show: Vc,
          onOpen: rB,
          onClose: sc,
          isLobbyCode: Oc
        } = cB;
        const Tc = (0, Ic.useRef)(""),
          [ec, Sc] = (0, Ic.useState)(null),
          yB = (0, Ic.useRef)(Oc),
          [zB, pc] = (0, Ic.useState)({
            message: null,
            type: null
          }),
          [hc, aB] = (0, Ic.useState)(""),
          lc = zB.message ? zB : {
            message: hc,
            type: "warning"
          },
          [bB, Zc] = (0, Ic.useState)(!0),
          [Qc, vB] = PI(sI),
          [Dc, Nc] = PI(MI),
          [Ec, oc] = (0, Ic.useState)(!1),
          [Wc, wc] = (0, Ic.useState)(!1),
          Xc = (0, Ic.useRef)(null),
          Hc = (0, Ic.useRef)(!1);
        (0, Ic.useEffect)((() => {
          var cB;
          Wc && Hc.current && (Hc.current = !1, null === (cB = Xc.current) || void 0 === cB || cB.focus())
        }), [Wc]);
        const Jc = (0, rr.c)(),
          jB = (0, Ic.useRef)(null),
          Rc = (0, Ic.useRef)(null),
          {
            openInGameMenuName: iB,
            openEverythingMenuName: Kc
          } = (0, rV.j)(["openInGameMenuName", "openEverythingMenuName"]),
          xB = cB => {
            Vc && (jB.current = cB, YB.current = !0)
          };
        (0, Yc.f)("OpenReportMenu", (() => {
          xB("PV")
        })), (0, Yc.f)("OpenStoreFromCodeEditor", (() => {
          xB("store")
        })), (0, Ic.useEffect)((() => {
          const cB = jB.current;
          null === cB || "PV" === cB && ("makeReport" === iB || "makeDiscordReport" === iB) || "store" === cB && null !== Kc || (jB.current = null, null === iB && null === Kc ? Oc ? (Rc.current = cV.current, mB.i.Vu("EditLobbyCode", ec)) : mB.i.Vu("EditCodeBlock", {
            pos: ec,
            canChangePos: yB.current
          }) : (0, dV.y)())
        }), [iB, Kc, Oc, ec]), (0, Ic.useEffect)((() => {
          if (Vc) return () => {
            Rc.current = null
          }
        }), [Vc]);
        const [dc, Ac] = function() {
          const [cB, Bc] = (0, Ic.useState)(pI);
          return (0, Yc.f)("CodeEditorAiHelperShown", (cB => {
            Bc(cB)
          })), [cB, (0, Ic.useCallback)((cB => {
            pI = cB, mB.i.Vu("CodeEditorAiHelperShown", cB)
          }), [])]
        }(), [Gc, cn] = (0, Ic.useState)(null), [nB, VB] = (0, Ic.useState)([]), [IB, rn] = (0, Ic.useState)(0), [uB, sB] = (0, Ic.useState)(0), [MB, PB] = (0, Ic.useState)(""), qn = (0, Ic.useRef)(null), [OB, TB] = (0, Ic.useState)(Oc ? fI.f : null), fB = Oc || null !== ec, mn = (0, Mc.j)("canEditCode"), eB = (0, Mc.j)("canUseDevCreativeItems"), SB = (0, xI.h)("welcome"), yn = (0, xI.h)("docsOverview"), zn = yn ? "docsOverview" : "welcome", pB = null !== yn && void 0 !== yn ? yn : SB, hB = (0, xI.h)("aiHelperOverview"), an = hB ? "aiHelperOverview" : "welcome", lB = null !== hB && void 0 !== hB ? hB : SB, YB = (0, Ic.useRef)(!1), LB = (0, Ic.useRef)(!1), gn = (0, Ic.useRef)(null), [UB, bn] = (0, Ic.useState)(""), [ZB, QB] = (0, Ic.useState)(!1), [CB, vn] = (0, Ic.useState)(null), DB = (0, gB.g)("connectedGame"), NB = Oc && mn && "classic" === DB.gameNameWithVariation && !(0, uV.F)(DB.lobbyName), [EB, oB] = (0, Ic.useState)(null), [WB, wB] = (0, Ic.useState)({
          [sV.g]: ""
        }), [kn, XB] = (0, Ic.useState)({
          assets: {},
          revision: 0
        }), HB = (0, Ic.useRef)(kn), FB = (0, Ic.useCallback)((cB => {
          var Bc;
          cB.revision < HB.current.revision || (HB.current = cB, XB(cB), aB(cB.startupError ? `Schematics could not load: ${cB.startupError}` : ""), null === (Bc = fn.current) || void 0 === Bc || Bc.onLobbyFilesChanged({
            ...un.current,
            ...(0, yI.j)(cB.assets)
          }))
        }), []), [JB, jn] = (0, Ic.useState)(sV.g), [RB, KB] = (0, Ic.useState)(null), [xn, dB] = (0, Ic.useState)(null), AB = (0, Ic.useRef)(!1), GB = (0, Ic.useRef)(null), cV = (0, Ic.useRef)(JB);
        cV.current = JB;
        const Bn = (0, Ic.useRef)(RB);
        Bn.current = RB;
        const nn = RB ? null : CB,
          Vn = nn && !nn.engineLocked ? nn.worldCodeEngine : null,
          In = (0, Ic.useRef)(xn);
        In.current = xn;
        const un = (0, Ic.useRef)(WB);
        un.current = WB;
        const sn = (0, Ic.useRef)(null),
          Mn = (0, Ic.useRef)(null),
          [Pn, qV] = (0, Ic.useState)(!1),
          On = (0, bI.t)(),
          Tn = (0, Ic.useRef)([]),
          fn = (0, Ic.useRef)(null),
          mV = (0, Ic.useRef)(null),
          en = (0, Ic.useRef)(null);

        function tV(cB) {
          pc(cB), clearTimeout(gn.current), gn.current = setTimeout((() => {
            pc({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const yV = (0, Ic.useCallback)((function() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            AB.current && GB.current && (Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.Leave,
              kE: (0, MV.s)(GB.current),
              sF: !!cB || null
            }), AB.current = !1, GB.current = null), oB(null)
          }), []),
          zV = (0, Ic.useCallback)((cB => {
            const Bc = {
              kind: "lobby",
              path: cB
            };
            GB.current = Bc, jn(cB), Tc.current = "", Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.Join,
              kE: (0, MV.s)(Bc)
            }), AB.current = !0
          }), []),
          pn = (0, Ic.useCallback)((cB => {
            var Bc;
            const nc = null === (Bc = mV.current) || void 0 === Bc ? void 0 : Bc.collabState;
            return nc && "lobby" === nc.docKey.kind && nc.docKey.path === cB && cV.current === cB ? Promise.resolve({
              doc: nc.doc,
              version: nc.version,
              clientID: nc.clientID,
              docKey: nc.docKey,
              httpConfig: nc.httpConfig
            }) : new Promise(((Bc, nc) => {
              const Vc = setTimeout((() => {
                  Tn.current = Tn.current.filter((cB => cB !== Ic)), nc(new Error(`Timed out joining ${cB}`))
                }), 15e3),
                Ic = nc => {
                  "lobby" === nc.docKey.kind && nc.docKey.path === cB && (clearTimeout(Vc), Tn.current = Tn.current.filter((cB => cB !== Ic)), Bc(nc))
                };
              Tn.current.push(Ic), cV.current !== cB ? (yV(!0), zV(cB)) : AB.current || zV(cB)
            }))
          }), [zV, yV]),
          hn = (0, Ic.useCallback)((async function(cB, Bc) {
            let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const Vc = Date.now();
            let Ic = cB in un.current;
            for (; Ic !== Bc;) {
              if (Date.now() - Vc > nc) throw new Error(`Timed out waiting for lobby path ${cB} present=${Bc}`);
              await (0, Sn.J)(50), Ic = cB in un.current
            }
          }), []),
          aV = (0, Ic.useCallback)((cB => {
            const Bc = un.current,
              nc = sV.g in Bc && sV.k in Bc;
            if (!(0, PV.h)(cB) || nc) {
              if (cV.current === cB) {
                var Vc;
                const Ic = nc && (0, PV.h)(cB) ? cB === sV.g ? sV.k : sV.g : null !== (Vc = (0, PV.c)(Bc)) && void 0 !== Vc ? Vc : sV.g;
                Mn.current = {
                  fromPath: cB,
                  toPath: Ic
                }, jn(Ic)
              }
              Pc.gameBridge.send("sendCodeCollab", {
                oN: MV.b.DeleteFile,
                kE: (0, MV.s)({
                  kind: "lobby",
                  path: cV.current
                }),
                qJ: cB
              })
            }
          }), []),
          lnc = (0, Ic.useCallback)((cB => {
            Rc.current = null, KB(null), dB(null), !Oc || cB === cV.current && AB.current || (yV(!0), zV(cB))
          }), [Oc, yV, zV]),
          Yn = (0, Ic.useCallback)(((cB, Bc) => {
            const nc = tI.e[cB],
              Vc = nc && Bc in nc.files ? Bc : "index.ts";
            if (cB !== Bn.current || Vc !== In.current) {
              var Ic;
              if (cB !== Bn.current) null === (Ic = fn.current) || void 0 === Ic || Ic.stopContinuousSync(), yV(!0);
              KB(cB), dB(Vc)
            }
          }), [yV]),
          Ln = (0, Ic.useCallback)((cB => {
            var Bc;
            const nc = cV.current,
              Vc = un.current[nc],
              Ic = AB.current && !Bn.current && nc in cB && void 0 !== Vc ? {
                ...cB,
                [nc]: Vc
              } : cB;
            wB(Ic);
            const rB = sn.current;
            if (rB && rB in cB) sn.current = null, rB !== cV.current && lnc(rB);
            else if (!(cV.current in cB) && AB.current && !Bn.current) {
              var uc;
              lnc(null !== (uc = (0, PV.c)(cB)) && void 0 !== uc ? uc : sV.g)
            }
            null === (Bc = fn.current) || void 0 === Bc || Bc.onLobbyFilesChanged({
              ...Ic,
              ...(0, yI.j)(HB.current.assets)
            })
          }), [lnc]),
          gV = (0, Ic.useCallback)((() => zr(cV.current).then((async cB => {
            if (!AB.current || !cB.files) return null;
            Ln(cB.files);
            const Bc = await WV({
              action: "state"
            });
            return FB(Bc), {
              ...cB.files,
              ...(0, yI.j)(Bc.assets)
            }
          })).catch((cB => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", cB), tV({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [Ln, FB]),
          Un = () => {
            sc()
          };
        (0, Ic.useEffect)((() => {
          if (aB(""), !Vc || !Oc) return;
          let cB = !1;
          return HB.current = {
            assets: {},
            revision: 0
          }, XB(HB.current), WV({
            action: "state"
          }).then((Bc => {
            cB || FB(Bc)
          })).catch((Bc => {
            console.error("Could not load project schematics", Bc), cB || aB("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            cB = !0
          }
        }), [Vc, Oc, FB]);
        const bV = (0, Ic.useCallback)((() => {
            GB.current && Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.Submit,
              kE: (0, MV.s)(GB.current)
            })
          }), []),
          Zn = (0, Ic.useCallback)((() => {
            if (!GB.current || "lobby" !== GB.current.kind) return;
            const cB = UB.trim();
            (0, qI.t)(cB) ? (Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.ReloadAsVariation,
              kE: (0, MV.s)(GB.current),
              uE: cB
            }), QB(!1)) : tV({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [UB]),
          Qn = (0, Ic.useCallback)((cB => {
            Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.SetEngine,
              kE: (0, MV.s)({
                kind: "lobby",
                path: cV.current
              }),
              uE: cB
            })
          }), []),
          Cn = (0, Ic.useCallback)((cB => {
            if (!Bn.current && mn && (yB.current || Oc)) {
              if (Oc) {
                var Bc;
                const nc = (0, PV.r)(un.current, cV.current),
                  Vc = Math.min(kB.u, Math.max(0, kB.x - nc)),
                  Ic = cB.slice(0, Vc);
                return Tc.current = Ic, wB((cB => ({
                  ...cB,
                  [cV.current]: Ic
                }))), void(null === (Bc = fn.current) || void 0 === Bc || Bc.onDocTextChanged(cV.current, Ic))
              }
              Tc.current = cB, PB(cB)
            }
          }), [mn, Oc]);
        (0, Yc.f)("EditLobbyCode", (cB => {
          var Bc;
          Cc.featureFlags.canSeePlayerWrittenText && Oc && (yV(), Sc(cB), Tc.current = "", wB({
            [sV.g]: ""
          }), vn(null), jn(sV.g), KB(null), dB(null), sn.current = null, Mn.current = null, null === (Bc = fn.current) || void 0 === Bc || Bc.stopContinuousSync(), rB(), zV(sV.g))
        })), (0, Yc.f)("EditCodeBlock", (cB => {
          let {
            pos: Bc,
            canChangePos: nc
          } = cB;
          if (Cc.featureFlags.canSeePlayerWrittenText && !Oc)
            if (yV(), null !== Bc && (Bc = [...Bc]), Sc(Bc), yB.current = nc, null !== Bc) {
              Tc.current = "", PB(""), rB();
              const cB = {
                  kind: "codeBlock",
                  pos: Bc
                },
                Vc = (0, MV.s)(cB);
              qn.current !== Vc && (qn.current = Vc, VB([]), sB(IB)), TB((0, fI.e)(Vc, [Bc[0], Bc[1], Bc[2]], !!nc)), GB.current = cB, Pc.gameBridge.send("sendCodeCollab", {
                oN: MV.b.Join,
                kE: (0, MV.s)(cB)
              }), AB.current = !0
            } else Vc && sc()
        })), (0, Yc.f)("codeCollabRejoin", (cB => {
          const Bc = GB.current ? (0, MV.s)(GB.current) : null;
          Bc && cB.docKey === Bc && (Tc.current = cB.doc, Oc || PB(cB.doc), oB((Bc => Bc ? {
            ...Bc,
            doc: cB.doc,
            version: cB.version,
            clientID: (0, eV.d)()
          } : Bc)))
        })), (0, Yc.f)("codeCollab", (cB => {
          var Bc;
          const nc = GB.current ? (0, MV.s)(GB.current) : null;
          if (cB.type === MV.d.LobbyFilesChanged && Oc) {
            if ("string" !== typeof cB.files) return void gV();
            try {
              Ln(JSON.parse(cB.files))
            } catch (Pc) {
              console.error("[CodeCollab] Failed to parse lobby files", Pc), gV()
            }
            return
          }
          if (cB.type === MV.d.EngineSettings && Oc) return void vn(FV(cB.engineSettings));
          const Ic = cB.type === MV.d.Joined ? (0, MV.i)(cB.docKey) : null,
            rB = Oc && "lobby" === (null === (Bc = GB.current) || void 0 === Bc ? void 0 : Bc.kind) && (0, PV.h)(GB.current.path) && "lobby" === (null === Ic || void 0 === Ic ? void 0 : Ic.kind) && (0, PV.h)(Ic.path);
          if (!nc || cB.docKey === nc || rB)
            if (cB.type !== MV.d.ForceClose) {
              if (Vc)
                if (cB.type === MV.d.Joined) {
                  var uc;
                  const qB = JSON.parse(cB.peers),
                    fc = cB.existingCursors ? JSON.parse(cB.existingCursors) : [],
                    mB = (0, eV.d)(),
                    tB = oV(),
                    {
                      gsUrl: Sc,
                      gameNameWithVariation: yB,
                      lobbyName: zB
                    } = tB,
                    hc = null !== (uc = (0, MV.i)(cB.docKey)) && void 0 !== uc ? uc : GB.current;
                  hc && (GB.current = hc, "lobby" === hc.kind && (jn(hc.path), cV.current = hc.path));
                  const aB = hc || (Oc ? {
                    kind: "lobby",
                    path: cV.current
                  } : {
                    kind: "codeBlock",
                    pos: ec
                  });

                  function lc(Bc) {
                    var nc, Vc;
                    if (!AB.current) return;
                    const Ic = null !== (nc = Bc.code) && void 0 !== nc ? nc : "",
                      rB = null !== (Vc = Bc.collabVersion) && void 0 !== Vc ? Vc : 0;
                    Tc.current = Ic, Oc || PB(Ic), Oc && Bc.files ? wB(Bc.files) : Oc && wB((cB => ({
                      ...cB,
                      [cV.current]: Ic
                    })));
                    const uc = {
                      doc: Ic,
                      version: rB,
                      clientID: mB,
                      docKey: aB,
                      peers: qB,
                      editorCount: cB.editorCount,
                      existingCursors: fc,
                      httpConfig: tB
                    };
                    if (oB(uc), "lobby" === aB.kind) {
                      var sc;
                      const cB = {
                        doc: Ic,
                        version: rB,
                        clientID: mB,
                        docKey: aB,
                        httpConfig: tB
                      };
                      for (const Bc of [...Tn.current]) Bc(cB);
                      null === (sc = fn.current) || void 0 === sc || sc.startWhenReady()
                    }
                    Bc.canSeeCode ? (clearTimeout(gn.current), pc({
                      message: null,
                      type: null
                    })) : function(cB) {
                      clearTimeout(gn.current), pc(cB)
                    }(ar);
                    const Mc = Rc.current;
                    Rc.current = null, Oc && Mc && Bc.files && Mc in Bc.files && Mc !== cV.current && lnc(Mc)
                  }
                  Oc ? zr(cV.current).then(lc).catch((cB => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", cB), yV()
                  })) : (0, rI.postJsonWithMetricsCookiesAndJsonResponse)(`${Sc}/code/get-code-block`, IV.vj["get-code-block"].toBuffer({
                    gameNameWithVariation: yB,
                    lobbyName: zB,
                    pos: ec
                  }), {
                    retries: 1
                  }).then(lc).catch((cB => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", cB), yV()
                  }))
                } else if (cB.type === MV.d.Presence) {
                if (!nc) return;
                const Yc = JSON.parse(cB.peers);
                oB((Bc => Bc ? {
                  ...Bc,
                  peers: Yc,
                  editorCount: cB.editorCount
                } : Bc))
              }
            } else {
              var Mc;
              if (!nc) return;
              const Lc = GB.current;
              AB.current = !1, GB.current = null, oB(null);
              if (!Oc || "close" === cB.updates) return (0, OI.i)(), void(Vc && sc());
              if (!Vc) return;
              const gB = un.current,
                Uc = Mn.current;
              Mn.current = null;
              const bB = "lobby" === (null === Lc || void 0 === Lc ? void 0 : Lc.kind) && Lc.path === (null === Uc || void 0 === Uc ? void 0 : Uc.fromPath),
                Zc = Uc && (bB || Uc.toPath in gB || (0, PV.h)(Uc.toPath)) ? Uc.toPath : cV.current in gB ? cV.current : null !== (Mc = (0, PV.c)(gB)) && void 0 !== Mc ? Mc : sV.g;
              zV(Zc)
            }
        })), (0, Yc.f)("refetchCode", (() => {
          Cc.featureFlags.canSeePlayerWrittenText && Vc && AB.current && (mn || (yV(), Oc ? mB.i.Vu("EditLobbyCode", ec) : mB.i.Vu("EditCodeBlock", {
            pos: ec,
            canChangePos: yB.current
          })))
        }));
        const vV = (0, Ic.useCallback)((() => {
            Vc && (oc(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [Vc]),
          Dn = (0, Ic.useCallback)((() => {
            oc(!1)
          }), []);
        (0, Ic.useEffect)((() => {
          Vc && mn && ("docsButton" === pB && Ec ? (0, dV.f)("docsButton") : pB && dV.j.includes(pB) && !Ec && (oc(!0), Ac(!1)))
        }), [Vc, mn, pB, Ec, Ac]);
        const Nn = (0, Ic.useCallback)((() => {
          Ac(!1)
        }), [Ac]);
        (0, Ic.useEffect)((() => {
          Vc && mn && fB && ("aiHelperButton" === lB && dc ? (0, dV.f)("aiHelperButton") : lB && dV.b.includes(lB) && !dc && (Ac(!0), oc(!1)))
        }), [Vc, mn, fB, lB, dc, Ac]), (0, Ic.useEffect)((() => {
          if (!Vc || !mn) return;
          const cB = Oc ? "worldCode" : "codeBlock";
          return (0, dV.A)(cB, !0), () => {
            (0, dV.A)(cB, !1)
          }
        }), [Vc, mn, Oc]), (0, Ic.useEffect)((() => {
          if (Vc) return () => {
            YB.current ? YB.current = !1 : (0, dV.y)()
          }
        }), [Vc]), (0, Ic.useEffect)((() => {
          (0, dV.D)("exportButton", !!eB)
        }), [eB]);
        const {
          t: En
        } = (0, BB.x)(), onc = !dc && IB > uB, Wn = onc ? fc.L : fc.A, wn = (0, Ic.useCallback)(((cB, Bc) => {
          mB.i.Vu("CodeEditorGoToLine", {
            path: cB,
            line: Bc
          }), lnc(cB)
        }), [lnc]), kV = (0, Ic.useCallback)((cB => {
          en.current = cB
        }), []), Xn = function(cB, Bc) {
          const [nc, Vc] = (0, Ic.useState)(null);
          return (0, Ic.useEffect)((() => {
            if (!Bc) return void Vc(null);
            let nc = !1;
            return UV(cB).then((cB => {
              nc || Vc(cB)
            }), (cB => {
              console.error("[CodeEditor] could not collect the imported plugins", cB), nc || Vc(null)
            })), () => {
              nc = !0
            }
          }), [cB, Bc]), nc
        }(WB, Vc);
        (0, Ic.useEffect)((() => {
          Xn && RB && !Xn.includes(RB) && (KB(null), dB(null), Oc && !AB.current && zV(cV.current))
        }), [RB, Xn, Oc, zV]), mV.current = {
          collabState: EB,
          ensureJoinedPath: pn,
          waitForLobbyPath: hn,
          pullLobbyFiles: gV,
          t: En,
          canEditCode: !!mn
        }, fn.current || (fn.current = new NV({
          getLobbyFiles: () => ({
            ...un.current,
            ...(0, yI.j)(HB.current.assets)
          }),
          deleteSchematic: async cB => {
            const Bc = await WV({
              action: "remove",
              path: cB,
              expectedRevision: HB.current.revision
            });
            FB(Bc)
          },
          getActivePath: () => cV.current,
          getCollabSnapshot: () => {
            var cB;
            if (Bn.current) return null;
            const Bc = null === (cB = mV.current) || void 0 === cB ? void 0 : cB.collabState;
            return Bc ? {
              doc: Bc.doc,
              version: Bc.version,
              clientID: Bc.clientID,
              docKey: Bc.docKey,
              httpConfig: Bc.httpConfig
            } : null
          },
          replaceActiveDoc: (cB, Bc) => {
            var nc, Vc;
            return null !== (nc = null === (Vc = en.current) || void 0 === Vc ? void 0 : Vc.call(en, cB, Bc)) && void 0 !== nc && nc
          },
          ensureJoined: cB => mV.current.ensureJoinedPath(cB),
          createFile: (cB, Bc) => {
            !1 !== (null === Bc || void 0 === Bc ? void 0 : Bc.focus) && (sn.current = cB), Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.CreateFile,
              kE: (0, MV.s)({
                kind: "lobby",
                path: cV.current
              }),
              qJ: cB
            })
          },
          renameFile: (cB, Bc) => {
            const nc = (0, MV.s)({
              kind: "lobby",
              path: cV.current
            });
            cV.current === cB && (Mn.current = {
              fromPath: cB,
              toPath: Bc
            }, jn(Bc)), Pc.gameBridge.send("sendCodeCollab", {
              oN: MV.b.RenameFile,
              kE: nc,
              qJ: cB,
              mJ: Bc
            })
          },
          deleteFile: cB => {
            aV(cB)
          },
          waitForLobbyPath: (cB, Bc, nc) => mV.current.waitForLobbyPath(cB, Bc, nc),
          pullLobbyFiles: () => mV.current.pullLobbyFiles(),
          setMessage: (cB, Bc) => {
            tV({
              message: cB,
              type: Bc
            })
          },
          onUnlinked: () => {
            qV(!1)
          },
          t: cB => mV.current.t(cB),
          canEditCode: () => mV.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: cB,
              lobbyName: Bc
            } = Pc.gameBridge.latest("connectedGame");
            return (0, bI.h)(cB, Bc)
          }
        }));
        const Hn = (0, Ic.useCallback)((async cB => {
            const Bc = fn.current;
            if (!Bc) return !1;
            try {
              return await Bc.writeLobbyFiles(cB)
            } catch (nc) {
              return console.error("World Code AI: couldn't write the change", nc), !1
            }
          }), []),
          Fn = (0, Ic.useCallback)((async cB => {
            var Bc, nc;
            const Vc = null === (Bc = cB.find((cB => cB.path === qr.e))) || void 0 === Bc ? void 0 : Bc.text,
              Ic = GB.current;
            return void 0 !== Vc && "codeBlock" === (null === Ic || void 0 === Ic ? void 0 : Ic.kind) && (!(null === (nc = en.current) || void 0 === nc || !nc.call(en, (0, MV.s)(Ic), Vc)) && (Tc.current = Vc, PB(Vc), !0))
          }), []),
          Jn = (0, Ic.useCallback)((async () => {
            try {
              var cB, Bc;
              const nc = await zr(sV.g);
              return !1 === nc.canSeeCode ? null : null !== (cB = nc.files) && void 0 !== cB ? cB : {
                [sV.g]: null !== (Bc = nc.code) && void 0 !== Bc ? Bc : ""
              }
            } catch (nc) {
              return console.error("World Code AI: couldn't read World Code for a code block", nc), null
            }
          }), []),
          jV = (0, Ic.useMemo)((() => ({
            [qr.e]: MB
          })), [MB]),
          iV = (0, Ic.useCallback)(((cB, Bc) => {
            mB.i.Vu("CodeEditorGoToLine", {
              path: qr.e,
              line: Bc
            })
          }), []);
        (0, Ic.useEffect)((() => {
          dc && Vc && sB(IB)
        }), [dc, Vc, IB]);
        const Kn = (0, Ic.useCallback)((() => {
            var cB, Bc;
            bV();
            const nc = (0, Cc.isTouchscreen)() ? "open World Code again" : `press ${null!==(cB=null===(Bc=Fc.v.OpenCodeEditor)||void 0===Bc?void 0:Bc[0])&&void 0!==cB?cB:"F8"}`,
              Vc = Oc ? `\ud83e\udd16 Try out your change, then ${nc} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            mB.i.Vu("chat", {
              content: [{
                str: Vc,
                style: {
                  color: Lc.C.cyanUiText
                }
              }]
            })
          }), [bV, Oc]),
          xV = (0, Ic.useCallback)((cB => {
            const Bc = ec,
              nc = yB.current;
            Oc || !Bc || Pc.gameBridge.lookup("codeBlockClickable", Bc) ? (0, OI.k)(cB, {
              submit: () => {
                bV(), mB.i.Vu("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: Lc.C.cyanUiText
                    }
                  }]
                }), !Oc && Bc && setTimeout((() => {
                  Pc.gameBridge.send("clickCodeBlock", Bc)
                }), 1e3)
              },
              reopen: () => {
                (0, TI.p)() || (Oc ? mB.i.Vu("EditLobbyCode", Bc) : mB.i.Vu("EditCodeBlock", {
                  pos: Bc,
                  canChangePos: nc
                }))
              }
            }) : Kn()
          }), [bV, Oc, ec, Kn]),
          dn = (0, Ic.useCallback)((() => {
            Ac(!1)
          }), [Ac]),
          An = (0, Ic.useRef)(Un);
        An.current = Un;
        const Gn = (0, Ic.useCallback)((function(cB) {
            let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            mB.i.Vu("WorldCodeAiDraft", {
              text: cB,
              send: Bc
            }), An.current(), mB.i.Vu("EditLobbyCode", ec)
          }), [ec]),
          cI = (0, Ic.useCallback)((cB => {
            An.current(), cB.codeBlock ? mB.i.Vu("EditCodeBlock", {
              pos: [...cB.pos],
              canChangePos: cB.canChangePos
            }) : mB.i.Vu("EditLobbyCode", ec)
          }), [ec]);
        (0, Yc.f)("WorldCodeAiDraft", (cB => {
          Oc && (cn(cB), Ac(!0))
        }));
        const BV = !!mn && !!pB && dV.j.includes(pB);
        (0, Ic.useEffect)((() => {
          Vc && dc && fB && !BV && oc(!1)
        }), [Vc, dc, fB, BV]);
        const nV = (0, Ic.useCallback)((() => {
            cn(null)
          }), []),
          [VV, fV] = (0, Ic.useState)(null);
        (0, Yc.f)("WorldCodeAiSelection", (cB => {
          Vc && (fV(cB), Ac(!0), oc(!1))
        }));
        const SV = (0, Ic.useCallback)((() => {
          fV(null)
        }), []);
        (0, Yc.f)("chat", (cB => {
          let {
            content: Bc
          } = cB;
          if (!Oc && null === qn.current) return;
          const nc = Array.isArray(Bc) ? Bc : [Bc],
            Vc = nc.some((cB => {
              var Bc;
              return (null === cB || void 0 === cB || null === (Bc = cB.style) || void 0 === Bc ? void 0 : Bc.color) === Lc.C.redUiText
            })),
            Ic = nc.map((cB => {
              var Bc;
              const nc = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.str) && void 0 !== Bc ? Bc : cB;
              return "string" === typeof nc ? nc : ""
            })).join("");
          Vc && /world code|error/i.test(Ic) && (VB((cB => [...cB, Ic].slice(-10))), rn((cB => cB + 1)), (0, OI.e)(Ic))
        })), (0, Ic.useEffect)((() => {
          if (!Vc || !Oc || !On) return;
          let cB = !1;
          return (async (Bc, nc) => {
            const Vc = await (null === (Bc = fn.current) || void 0 === Bc ? void 0 : Bc.tryRestoreHandle());
            !cB && Vc && (qV(!0), null === (nc = fn.current) || void 0 === nc || nc.startWhenReady())
          })(), () => {
            cB = !0
          }
        }), [Vc, Oc, On]), (0, Ic.useEffect)((() => {
          var cB;
          Vc || (null === (cB = fn.current) || void 0 === cB || cB.stopContinuousSync(), yV(!1), LB.current && (LB.current = !1, Pc.gameBridge.send("sendChatMessage", {
            Uu: "//export",
            channelName: null
          })))
        }), [Vc, yV]);
        const zI = (0, Ic.useCallback)((async () => {
            if (On && fn.current) try {
              if (!await fn.current.linkFolder()) return;
              qV(!0), await fn.current.startWhenReady()
            } catch (cB) {
              console.error("[WorldCodeDirectorySync] Link failed", cB), tV({
                message: En("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [On, En]),
          pV = (0, Ic.useCallback)((async () => {
            fn.current && await fn.current.unlinkFolder()
          }), []),
          aI = (0, Ic.useCallback)((() => {
            On ? Pn ? pV() : zI() : TV.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [On, Pn, zI, pV]);
        return (0, qB.jsxs)(uc.b, {
          className: tn()("CodeEditorBg", {
            CodeEditorLight: Qc
          }),
          close: Un,
          escDoesExit: !0,
          show: Vc,
          togglePointerLock: !1,
          globallyUniqueKey: Oc ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, qB.jsx)(xI.e, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: En("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!mn && !Oc
          }), (0, qB.jsx)(xI.e, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, qB.jsxs)(qB.Fragment, {
              children: [(0, qB.jsx)("p", {
                children: En("codeEditor:tutorialWorldCodeWelcome")
              }), (0, qB.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, qB.jsx)("li", {
                  children: En("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, qB.jsx)("li", {
                  children: En("codeEditor:tutorialWorldCodeUseReact")
                }), (0, qB.jsx)("li", {
                  children: En("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!mn && Oc
          }), (0, qB.jsx)("div", {
            className: "CodeEditorTitle",
            children: Oc ? "World Code" : "Code Block"
          }), (0, qB.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, qB.jsx)("div", {
              className: "CodeEditorTopLeft",
              children: (0, qB.jsx)(Rn.d, {
                tooltipInner: En(eB ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: eB ? void 0 : 0,
                hideTooltip: "exportButton" === SB,
                children: (0, qB.jsx)(xI.f, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: En("codeEditor:tutorialExport"),
                  enabled: !!mn,
                  children: (0, qB.jsx)(fc.n, {
                    className: "CodeEditorButton",
                    disabled: !eB,
                    onClick: () => {
                      "exportButton" === SB && ((0, dV.f)("exportButton"), YB.current = !0), LB.current = !0, Un()
                    },
                    padDestructive: !0,
                    children: En("codeEditor:exportWorld")
                  })
                })
              })
            }), (0, qB.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [mn && (0, qB.jsx)(Rn.d, {
                tooltipInner: En("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === SB,
                children: (0, qB.jsx)(xI.f, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: En("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, qB.jsx)(fc.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: En("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, dV.f)("helpButton"), TV.NotificationProvider.showCustomPopup({
                        body: cB => (0, qB.jsx)(AV, {
                          close: cB
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, qB.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, qB.jsx)(tB.e, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, qB.jsx)(Rn.d, {
                tooltipInner: En("codeEditor:closeTooltip"),
                children: (0, qB.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    Un()
                  },
                  children: (0, qB.jsx)(fc.k, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, qB.jsx)(mI, {
            peers: null !== (Bc = null === EB || void 0 === EB ? void 0 : EB.peers) && void 0 !== Bc ? Bc : []
          }), (0, qB.jsxs)("div", {
            className: "CodeEditorMainArea",
            children: [Wc && Jc && (0, qB.jsx)(II, {
              side: "left",
              defaultWidth: "max(16rem, 24%)",
              children: (0, qB.jsx)(VI, {
                inputRef: Xc,
                close: () => {
                  wc(!1)
                }
              })
            }), Oc && (0, qB.jsx)(hV, {
              schematics: kn.assets,
              onManageSchematic: cB => {
                mn && TV.NotificationProvider.showCustomPopup({
                  body: Bc => (0, qB.jsx)(HV, {
                    initialPath: cB,
                    onChanged: FB,
                    onClose: Bc
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: WB,
              activePath: JB,
              canEdit: !!mn,
              directoryLinked: Pn,
              pluginNames: null !== Xn && void 0 !== Xn ? Xn : hI,
              activePluginName: RB,
              activePluginFile: xn,
              onSelect: lnc,
              onSelectPlugin: Yn,
              onToggleDirectorySync: aI,
              onCreate: cB => {
                sn.current = cB, Pc.gameBridge.send("sendCodeCollab", {
                  oN: MV.b.CreateFile,
                  kE: (0, MV.s)({
                    kind: "lobby",
                    path: cV.current
                  }),
                  qJ: cB
                })
              },
              onRename: (cB, Bc) => {
                cV.current === cB && (Mn.current = {
                  fromPath: cB,
                  toPath: Bc
                }, jn(Bc)), Pc.gameBridge.send("sendCodeCollab", {
                  oN: MV.b.RenameFile,
                  kE: (0, MV.s)({
                    kind: "lobby",
                    path: cV.current
                  }),
                  qJ: cB,
                  mJ: Bc
                })
              },
              onRenameFolder: (cB, Bc) => {
                const [nc] = (0, PV.p)([cV.current], cB, Bc);
                nc && (Mn.current = {
                  fromPath: nc[0],
                  toPath: nc[1]
                }, jn(nc[1])), Pc.gameBridge.send("sendCodeCollab", {
                  oN: MV.b.RenameFolder,
                  kE: (0, MV.s)({
                    kind: "lobby",
                    path: cV.current
                  }),
                  qJ: cB,
                  mJ: Bc
                })
              },
              onDelete: aV
            }), (0, qB.jsx)("div", {
              className: tn()("CodeEditorMessage", {
                CodeEditorMessageHidden: !lc.message,
                CodeEditorMessageSuccess: "success" === lc.type
              }),
              children: lc.message && (0, qB.jsx)("div", {
                className: "CodeEditorMessageText",
                children: lc.message
              })
            }), (0, qB.jsx)(Ic.Suspense, {
              fallback: (0, qB.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, qB.jsx)(Uc.e, {})
              }),
              children: (0, qB.jsx)(mr, {
                isLobbyCode: Oc,
                code: EB ? EB.doc : Tc.current,
                files: Oc ? WB : void 0,
                activePath: Oc ? JB : void 0,
                pluginName: RB,
                pluginFile: xn,
                pluginSource: RB && xn ? null === (nc = tI.e[RB]) || void 0 === nc ? void 0 : nc.files[xn] : void 0,
                onChange: Cn,
                canEditCode: mn,
                setTemporaryMessage: tV,
                close: Un,
                showTooltips: bB,
                lightMode: Qc,
                collabState: EB,
                setActiveDocReplacer: kV,
                showAiHints: fB && Dc,
                canAiChangeCode: !!mn && (Oc || !!yB.current),
                onRemoteDocChange: cB => {
                  var Bc;
                  (Tc.current = cB, Oc) ? (wB((Bc => ({
                    ...Bc,
                    [cV.current]: cB
                  }))), null === (Bc = fn.current) || void 0 === Bc || Bc.onDocTextChanged(cV.current, cB)) : PB(cB)
                }
              })
            }), Ec && (0, qB.jsx)(II, {
              side: "right",
              defaultWidth: "40%",
              children: (0, qB.jsx)(Ic.Suspense, {
                fallback: (0, qB.jsx)("div", {
                  className: "DocsPanel",
                  children: (0, qB.jsx)(Uc.e, {})
                }),
                children: (0, qB.jsx)(eI, {
                  popOutDocs: vV,
                  hideDocs: Dn,
                  tutorialEnabled: !!mn
                })
              })
            }), dc && OB && fB && (0, qB.jsx)(II, {
              side: "right",
              defaultWidth: "max(18rem, 36%)",
              children: (0, qB.jsx)(Ic.Suspense, {
                fallback: (0, qB.jsx)(Uc.e, {}),
                children: (0, qB.jsx)(tr, {
                  target: OB,
                  chatKey: `${DB.gameNameWithVariation}/${DB.lobbyName}/aiHelper`,
                  historyKey: `${DB.gameNameWithVariation}/${DB.lobbyName}/${OB.key}`,
                  files: OB.codeBlock ? jV : WB,
                  activePath: OB.codeBlock ? qr.e : JB,
                  canEdit: !!mn && (OB.codeBlock ? !!yB.current : !RB),
                  isLoaded: null !== EB,
                  errors: nB,
                  errorCount: IB,
                  applyFiles: OB.codeBlock ? Fn : Hn,
                  submit: Kn,
                  testRun: xV,
                  close: dn,
                  goToLine: OB.codeBlock ? iV : wn,
                  openWorldCode: OB.codeBlock ? Gn : void 0,
                  readWorldCode: OB.codeBlock ? Jn : void 0,
                  viewChunk: SI,
                  viewGameState: yr,
                  openTarget: mn ? cI : void 0,
                  draft: Gc,
                  onDraftUsed: nV,
                  selection: VV,
                  onSelectionUsed: SV
                }, OB.key)
              })
            })]
          }), (null === nn || void 0 === nn ? void 0 : nn.fallback) && (0, qB.jsx)(JV, {
            fallback: nn.fallback,
            onGoToLine: wn
          }), (0, qB.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, qB.jsx)(Rn.d, {
              tooltipInner: En(Qc ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, qB.jsx)(fc.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: En(Qc ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  vB(!Qc)
                },
                children: (0, qB.jsx)(tB.e, {
                  name: Qc ? "moon" : "sun-bright"
                })
              })
            }), (0, qB.jsx)(Rn.d, {
              tooltipInner: En("codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.n, {
                className: "CodeEditorButton",
                onClick: bV,
                padDefaultFocus: !0,
                children: En("codeEditor:submitCode")
              })
            }), (0, qB.jsx)(Rn.d, {
              tooltipInner: En(Ec ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === pB || "hideDocsButton" === pB,
              children: (0, qB.jsx)(xI.f, {
                tutorial: zn,
                step: Ec ? "hideDocsButton" : "docsButton",
                text: En(Ec ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!mn,
                placement: "top",
                waitForClick: !0,
                onPrevious: Ec && "welcome" === zn ? Dn : void 0,
                children: (0, qB.jsx)(fc.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, dV.f)(Ec ? "hideDocsButton" : "docsButton"), oc(!Ec), Ac(!1)
                  },
                  children: En(Ec ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), fB && (0, qB.jsx)(xI.f, {
              tutorial: an,
              step: dc ? "hideAiHelperButton" : "aiHelperButton",
              text: En(dc ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === an ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!mn,
              placement: "top",
              waitForClick: !0,
              onPrevious: dc && "welcome" === an ? Nn : void 0,
              children: (0, qB.jsx)(Wn, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, dV.f)(dc ? "hideAiHelperButton" : "aiHelperButton"), Ac(!dc), oc(!1)
                },
                children: dc ? "Hide AI Helper" : onc ? "Fix error with AI" : "AI Helper"
              })
            }), Jc && (0, qB.jsx)(Rn.d, {
              tooltipInner: En(Wc ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.A, {
                className: "CodeEditorButton",
                onClick: () => {
                  Hc.current = !Wc, wc(!Wc)
                },
                children: En(Wc ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, qB.jsx)(Rn.d, {
              tooltipInner: En("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  mB.i.Vu("FormatCode")
                },
                children: En("codeEditor:formatCode")
              })
            }), (0, qB.jsx)(Rn.d, {
              tooltipInner: En("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Tc.current).then((() => {
                    tV({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    tV({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: En("codeEditor:copyCode")
              })
            }), (0, qB.jsx)(Rn.d, {
              tooltipInner: En(bB ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  Zc(!bB)
                },
                children: En(bB ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Oc && (0, qB.jsx)(Rn.d, {
              tooltipInner: En("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === SB,
              children: (0, qB.jsx)(xI.f, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: En("codeEditor:tutorialWorldCodeButton"),
                enabled: !!mn,
                placement: "top",
                waitForClick: !0,
                children: (0, qB.jsx)(fc.A, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === SB && ((0, dV.f)("worldCodeButton"), YB.current = !0), Un(), mB.i.Vu("EditLobbyCode", ec)
                  },
                  children: En("codeEditor:worldCode")
                })
              })
            }), (NB || Vn || fB) && (0, qB.jsx)(Rn.d, {
              tooltipInner: En("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, qB.jsx)(fc.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  QB(!0)
                },
                children: (0, qB.jsx)(tB.e, {
                  name: "ellipsis"
                })
              })
            })]
          }), ZB && (0, qB.jsx)(OV.c, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              QB(!1)
            },
            body: (0, qB.jsx)(KV, {
              engine: Vn,
              onSetEngine: Qn,
              aiHints: fB ? {
                shown: Dc,
                setShown: Nc
              } : null,
              variation: NB ? {
                name: UB,
                setName: bn,
                reload: Zn
              } : null
            })
          })]
        })
      })),
      YI = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function LI(cB) {
      return "inventory" === cB
    }
    const gr = (0, Ic.memo)((function() {
      const {
        openEverythingMenuName: cB,
        openInGameMenuName: Bc
      } = (0, rV.j)(["openEverythingMenuName", "openInGameMenuName"]), nc = (0, gB.g)("fullInventory"), rB = (0, Ic.useRef)(null);
      (0, Yc.f)("toggleMenu", (cB => {
        var Bc;
        const nc = rV.d.get("openInGameMenuName");
        let Vc = null === cB || void 0 === cB ? void 0 : cB.split("|")[0];
        const Ic = null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.split("|")[1]) && void 0 !== Bc ? Bc : null;
        ("closeCurrentMenu" === Ic && nc || Vc === nc) && (rB.current = null, Vc = null);
        const uc = "closeCurrentMenu" === Ic ? null : Ic;
        rB.current !== uc && (rB.current = uc), null !== Vc && (0, jV.o)("InGameMenu", {
          keepsMovement: LI(Vc)
        }), rV.d.set({
          openInGameMenuName: Vc
        })
      }));
      const uc = (0, Ic.useCallback)((cB => () => {
          mB.i.Vu("toggleMenu", cB)
        }), []),
        sc = (0, Ic.useRef)({
          cantCrouchIfNotFullscreen: uc("cantCrouchIfNotFullscreen"),
          makeReport: uc("makeReport"),
          makeDiscordReport: uc("makeDiscordReport"),
          editBook: uc("editBook"),
          editNameTag: uc("editNameTag"),
          inventory: uc("inventory"),
          inviteLink: uc("inviteLink"),
          writeOnBoard: uc("writeOnBoard"),
          codeEditor: uc("codeEditor"),
          lobbyCodeEditor: uc("lobbyCodeEditor"),
          customLobbyBlockEditor: uc("customLobbyBlockEditor"),
          ironChestPasskeyInput: uc("ironChestPasskeyInput"),
          petUi: uc("petUi")
        }),
        Mc = (0, Ic.useCallback)((() => {
          rV.d.set({
            openInGameMenuName: null
          })
        }), []),
        Pc = (0, Ic.useRef)(null);
      return (0, Ic.useEffect)((() => {
        if (Bc) {
          var cB;
          (0, jV.o)("InGameMenu", {
            keepsMovement: LI(Bc)
          }), Pc.current = YI.has(Bc) ? null !== (cB = rV.d.get("openEverythingMenuName")) && void 0 !== cB ? cB : Pc.current : null, rV.d.set({
            openEverythingMenuName: null
          })
        } else {
          const cB = Pc.current;
          Pc.current = null, null !== cB && null === rV.d.get("openEverythingMenuName") && rV.d.set({
            openEverythingMenuName: cB
          }), rB.current = null, (0, jV.l)("InGameMenu")
        }
      }), [Bc]), (0, Ic.useEffect)((() => {
        null !== cB && Mc()
      }), [cB, Mc]), (0, qB.jsxs)(qB.Fragment, {
        children: [(0, qB.jsx)(Vc.i, {
          show: "clientGame" === Bc
        }), (0, qB.jsx)(kV, {
          show: "cantCrouchIfNotFullscreen" === Bc,
          onOpen: sc.current.cantCrouchIfNotFullscreen,
          onClose: Mc
        }), (0, qB.jsx)(Fn, {
          show: "makeReport" === Bc,
          onOpen: sc.current.makeReport,
          onClose: Mc
        }), (0, qB.jsx)(Jn, {
          show: "makeDiscordReport" === Bc,
          onOpen: sc.current.makeDiscordReport,
          onClose: Mc
        }), (0, qB.jsx)(dc, {
          show: "editBook" === Bc,
          onOpen: sc.current.editBook,
          onClose: Mc
        }), (0, qB.jsx)(xB, {
          show: "editNameTag" === Bc,
          onOpen: sc.current.editNameTag,
          onClose: Mc
        }), nc && (0, qB.jsx)(onc, {
          show: "inventory" === Bc,
          onOpen: sc.current.inventory,
          onClose: Mc,
          variation: rB.current
        }), (0, qB.jsx)(wc.b, {
          show: "inviteLink" === Bc,
          onClose: Mc
        }), (0, qB.jsx)(Nc, {
          show: "retentionFeatures" === Bc,
          onClose: Mc
        }), (0, qB.jsx)(Kc, {
          show: "writeOnBoard" === Bc,
          onOpen: sc.current.writeOnBoard,
          onClose: Mc
        }), (0, qB.jsx)(lI, {
          show: "lobbyCodeEditor" === Bc,
          onOpen: sc.current.lobbyCodeEditor,
          onClose: Mc,
          isLobbyCode: !0
        }), (0, qB.jsx)(lI, {
          show: "codeEditor" === Bc,
          onOpen: sc.current.codeEditor,
          onClose: Mc,
          isLobbyCode: !1
        }), (0, qB.jsx)(Kn, {
          show: "customLobbyBlockEditor" === Bc,
          onOpen: sc.current.customLobbyBlockEditor,
          onClose: Mc
        }), (0, qB.jsx)(yn, {
          show: "ironChestPasskeyInput" === Bc,
          onOpen: sc.current.ironChestPasskeyInput,
          onClose: Mc
        }), (0, qB.jsx)(BV, {
          togglePointerLock: !0,
          show: "petUi" === Bc,
          onOpen: sc.current.petUi,
          onClose: Mc
        })]
      })
    }))
  },
  35144: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => er
    });
    nc(35149);
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(2898),
      sc = nc(1252),
      Mc = nc(1536),
      Pc = nc(957);

    function qB() {
      const cB = 2e3,
        [Bc, nc] = (0, Vc.useState)(null),
        [Ic, qB] = (0, Vc.useState)(null),
        Oc = (0, Vc.useRef)(null);
      (0, sc.f)("showBottomMessage", (Bc => {
        let {
          message: nc,
          timeoutLength: Vc = cB,
          type: Ic
        } = Bc;
        qB({
          message: nc,
          type: Ic
        }), clearTimeout(Oc.current), Oc.current = setTimeout((() => {
          qB(null)
        }), Vc)
      })), (0, sc.f)("showPermanentBottomMessage", (cB => {
        nc(cB)
      })), (0, Vc.useEffect)((() => ((0, uc.c)((() => {
        nc(null)
      })), () => {
        clearTimeout(Oc.current)
      })), []);
      const Tc = Ic || Bc;
      return Tc ? (0, Pc.jsx)("div", {
        className: rB()("BottomScreenMessage", Tc.type),
        children: (0, Pc.jsx)(Mc.e, {
          text: Tc.message
        })
      }) : null
    }
    var Oc = nc(1894),
      Tc = nc(1566),
      fc = nc(1330);
    var mB = nc(985),
      ec = nc(981),
      tB = nc(244),
      Sc = nc(1946),
      yB = nc(35),
      zB = nc(1594),
      pc = nc(51),
      hc = nc(1609),
      aB = nc(27),
      lc = nc(1611),
      Yc = nc(1226),
      Lc = nc(7738),
      gB = nc(1640),
      Uc = nc(1051);
    const bB = (0, Vc.memo)((function() {
      const {
        isTouchScreen: cB,
        loadingOverlayVisible: Bc
      } = (0, aB.j)(["isTouchScreen", "loadingOverlayVisible"]), nc = (0, Yc.s)();
      (0, ec.e)();
      const Ic = (0, Sc.j)("showBasicMovementControls"),
        [uc, sc] = (0, Vc.useState)("movement"),
        Mc = "movement" === uc,
        qB = nc && !1 !== Ic;
      return (0, Vc.useEffect)((() => {
        "padActions" !== uc || qB || sc("done")
      }), [uc, qB]), (0, Vc.useEffect)((() => {
        if (Bc || "done" === uc) return;
        const cB = setTimeout((() => {
          sc("movement" === uc && (0, Yc.f)() ? "padActions" : "done")
        }), 7e3);
        return () => {
          clearTimeout(cB)
        }
      }), [Bc, uc]), pc.h.getItem(tB.Jb) > 2 ? (0, Pc.jsx)(vB, {
        showingMovementControls: !1
      }) : (0, Pc.jsxs)(Pc.Fragment, {
        children: [cB && !nc || !Mc || !1 === Ic ? null : (0, Pc.jsxs)("div", {
          className: rB()("ControlsTutorialDiv", {
            UnderLoadingOverlay: Bc
          }),
          children: [(0, Pc.jsx)(Zc, {}), (0, Pc.jsx)(Cc, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Pc.jsx)(Cc, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === uc && qB && (0, Pc.jsx)(Qc, {}), (0, Pc.jsx)(vB, {
          showingMovementControls: "done" !== uc
        })]
      })
    }));

    function Zc() {
      const cB = (0, Yc.s)();
      return (0, Pc.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Pc.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), cB && (0, Pc.jsx)(lc.c, {
          noaAction: "forward"
        }), !cB && (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Pc.jsx)(lc.c, {
              noaAction: "forward"
            })
          }), (0, Pc.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Pc.jsx)(lc.c, {
              noaAction: "left"
            }), (0, Pc.jsx)(lc.c, {
              noaAction: "backward"
            }), (0, Pc.jsx)(lc.c, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function Qc() {
      const {
        t: cB
      } = (0, Uc.x)(), Bc = (0, Sc.j)("useInventory");
      return (0, Pc.jsxs)("div", {
        className: "ControlsTutorialDiv",
        children: [(0, Pc.jsx)(Cc, {
          header: cB("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Pc.jsx)(Cc, {
          header: cB("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== Bc && (0, Pc.jsx)(Cc, {
          header: cB("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Pc.jsx)(Cc, {
          header: cB("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function Cc(cB) {
      let {
        header: Bc,
        noaAction: nc
      } = cB;
      return (0, Pc.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Pc.jsx)("div", {
          className: "KeyHeader",
          children: Bc
        }), (0, Pc.jsx)(lc.c, {
          noaAction: nc
        })]
      })
    }

    function vB(cB) {
      let {
        showingMovementControls: Bc
      } = cB;
      const {
        isTouchScreen: nc
      } = (0, aB.j)(["isTouchScreen"]), Ic = (0, Yc.s)(), rB = (0, gB.c)("OpenShop"), [uc, sc] = (0, Vc.useState)(!1), Mc = `SeenShopControls|${(0,hc.e)("connectedGame",(cB=>cB.gameNameWithVariation))}`, qB = () => (!(0, Yc.f)() || null !== (0, Lc.d)("OpenShop")) && !pc.h.getItem(Mc) && zB.d.get("shopInfo") && !Bc, Oc = () => (sc(!0), pc.h.setItem(Mc, !0), (0, Yc.f)() || yB.i.Vu("showShopTouchTutorial"), setTimeout((() => {
        sc(!1)
      }), 7e3));
      (0, Vc.useEffect)((() => {
        let cB;
        const Bc = yB.i.subscribe("showShopTutorial", (() => {
          qB() && (cB = Oc())
        }));
        return () => {
          clearTimeout(cB), yB.i.unsubscribe(Bc)
        }
      }), [Bc]);
      const Tc = (0, Vc.useRef)();
      return (0, Sc.f)("currencyAmounts", (cB => {
        if (qB()) {
          let nc = !1;
          const Vc = zB.d.get("shopInfo");
          for (const Ic in Vc) {
            for (const rB in Vc[Ic].items) {
              var Bc;
              const uc = Vc[Ic].items[rB];
              if (void 0 !== uc.currency && cB[uc.currency] && uc.cost <= cB[uc.currency].amount && (null === (Bc = uc.hidden) || void 0 === Bc || !Bc)) {
                nc = !0;
                break
              }
            }
            if (nc) break
          }
          nc && (Tc.current = Oc())
        }
      })), (0, Vc.useEffect)((() => () => {
        clearTimeout(Tc.current)
      }), [Bc]), !uc || Ic && !rB ? null : (0, Pc.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: nc && !Ic ? null : (0, Pc.jsx)(Cc, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Dc = nc(1205),
      Nc = nc(926);
    const Ec = (0, Vc.memo)((function() {
      return (0, ec.e)(), (0, Pc.jsx)(oc, {})
    }));
    class oc extends Vc.Component {
      constructor(cB) {
        super(cB), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = yB.i.subscribe("TopRightHelper", (cB => {
          this.showQueue.push(cB), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        yB.i.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(cB, Bc) {
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
        let cB, Bc, nc, Vc, Ic, rB = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, cB = "slideIn") : "slideOut" === this.state.currState ? cB = "slideOut" : null === this.currMessage && (rB = !1), this.currMessage) {
          const rB = this.currMessage.color || "rgb(102, 102, 102)";
          Bc = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === cB ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, nc = {
            backgroundColor: rB
          }, Vc = {
            animation: "2s " + ("slideOut" === cB ? "CloseNotification" : "ExpandNotification")
          }, Ic = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === cB ? "textDisappear" : "textAppear")
          }
        }
        return rB ? (0, Pc.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...Bc
          },
          children: [(0, Pc.jsx)("div", {
            className: "LeftSide",
            style: nc,
            children: (0, Pc.jsx)(Nc.e, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Pc.jsx)("div", {
            className: "RightSide",
            style: Vc,
            children: (0, Pc.jsx)("div", {
              className: "HelperText",
              style: Ic,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Wc = nc(35152),
      wc = nc(1237);
    const kB = (0, wc.j)((cB => cB.PadSneakChip));

    function Xc(cB) {
      const [Bc, nc, Vc] = function(cB) {
        const Bc = parseInt(cB.substring(1), 16),
          nc = (Bc >> 16) / 255,
          Vc = (Bc >> 8 & 255) / 255,
          Ic = (255 & Bc) / 255,
          rB = Math.max(nc, Vc, Ic),
          uc = Math.min(nc, Vc, Ic),
          sc = (rB + uc) / 2,
          Mc = rB - uc;
        if (0 === Mc) return [0, 0, sc];
        const Pc = Mc / (1 - Math.abs(2 * sc - 1));
        let qB;
        qB = rB === nc ? (Vc - Ic) / Mc % 6 : rB === Vc ? (Ic - nc) / Mc + 2 : (nc - Vc) / Mc + 4;
        return [(60 * qB + 360) % 360, Pc, sc]
      }(cB), Ic = 0 === nc ? 0 : Math.min(.6, nc + .03), rB = Vc > .5 ? -1 : 1, uc = Hc(Vc + .09 * rB);
      return {
        panel: cB,
        slot: Fc(Bc, Ic, uc),
        slotSelected: Fc(Bc, Ic, Hc(uc + .2 * rB)),
        slotUnavailable: Fc(Bc, Ic, Hc(Vc + -.1 * rB))
      }
    }

    function Hc(cB) {
      return Math.min(1, Math.max(0, cB))
    }

    function Fc(cB, Bc, nc) {
      const Vc = (1 - Math.abs(2 * nc - 1)) * Bc,
        Ic = Vc * (1 - Math.abs(cB / 60 % 2 - 1)),
        rB = nc - Vc / 2;
      let uc;
      return uc = cB < 60 ? [Vc, Ic, 0] : cB < 120 ? [Ic, Vc, 0] : cB < 180 ? [0, Vc, Ic] : cB < 240 ? [0, Ic, Vc] : cB < 300 ? [Ic, 0, Vc] : [Vc, 0, Ic], "#" + uc.map((cB => function(cB) {
        return Math.round(255 * cB).toString(16).padStart(2, "0")
      }(cB + rB))).join("")
    }
    var Jc = nc(35191),
      jB = nc(3487),
      Rc = nc(1927),
      iB = nc(1934),
      Kc = nc(35184),
      xB = nc(3866),
      dc = nc(1267),
      Ac = nc(569);

    function Gc(cB, Bc) {
      return cB.clientX >= Bc.left - 8 && cB.clientX <= Bc.right + 8 && cB.clientY >= Bc.top - 8 && cB.clientY <= Bc.bottom + 8
    }
    var cn = nc(1142),
      BB = nc(7795);
    const nB = 25 * Math.PI / 180,
      VB = 45 * Math.PI / 180;
    class IB {
      constructor(cB) {
        this.deps = cB, this.phase = "idle", this.armTimer = null, this.speed = 0, this.armedSpeed = 0, this.suspended = !1
      }
      move(cB, Bc, nc) {
        if (this.suspended) return;
        this.speed = nc;
        const Vc = Math.hypot(cB, Bc),
          Ic = Vc > 0 ? Math.acos(Math.min(1, -Bc / Vc)) : Math.PI;
        if ("armed" === this.phase || "ready" === this.phase) return void((Vc < .5 || Ic > VB) && this.setPhase("idle"));
        const rB = Vc >= .8 && Ic <= nB;
        rB && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.armedSpeed = this.speed, this.setPhase("armed")
        }), 1e3)) : rB || "charging" !== this.phase || this.setPhase("idle")
      }
      target(cB) {
        cB && "armed" === this.phase ? this.setPhase("ready") : cB || "ready" !== this.phase || this.setPhase("armed")
      }
      lift() {
        return "ready" !== this.phase ? (this.cancel(), null) : (this.setPhase("locked"), this.armedSpeed)
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
      setPhase(cB) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const Bc = this.phase;
        this.phase = cB, this.deps.onPhase(cB, Bc)
      }
    }
    const rn = {
      charging: "AutorunCharging",
      armed: "AutorunArmed",
      ready: "AutorunReady",
      locked: "AutorunLocked"
    };
    const uB = 50;

    function sB(cB) {
      let {
        onMove: Bc,
        mode: nc,
        speedCurve: Ic,
        autorun: rB = !1
      } = cB;
      const uc = (0, Vc.useRef)(null),
        sc = (0, Vc.useRef)(null),
        Mc = (0, Vc.useRef)(null),
        qB = (0, Vc.useRef)(null),
        Oc = (0, Vc.useRef)(null),
        fc = (0, Vc.useRef)(null),
        mB = (0, Vc.useRef)(null),
        ec = (0, Vc.useRef)(null),
        tB = (0, Vc.useRef)(!1),
        Sc = (0, Vc.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: yB
        } = (0, Uc.x)(),
        zB = "fixed_shown" === nc || "fixed_hidden" === nc,
        pc = (0, aB.j)(["notchSize"]).notchSize.left,
        lc = function(cB, Bc, nc, Ic, rB) {
          const uc = (0, Vc.useRef)(null),
            sc = (0, Vc.useRef)({
              onUnlocked: Ic,
              onArmed: rB
            });
          return sc.current = {
            onUnlocked: Ic,
            onArmed: rB
          }, (0, Vc.useEffect)((() => {
            if (!cB) return;
            let Vc = null,
              Ic = null;
            const rB = new IB({
              onPhase: (cB, uc) => {
                const Mc = Bc.current;
                if (null !== Mc) {
                  for (const [Bc, nc] of Object.entries(rn)) Mc.classList.toggle(nc, Bc === cB);
                  if ("charging" === cB) Vc = nc.current.animate([{
                    strokeDashoffset: 1
                  }, {
                    strokeDashoffset: 0
                  }], {
                    delay: 400,
                    duration: 600,
                    fill: "forwards"
                  });
                  else if ("idle" === cB) {
                    var Pc;
                    null === (Pc = Vc) || void 0 === Pc || Pc.cancel(), Vc = null
                  }
                  "armed" === cB && "charging" === uc && sc.current.onArmed(), "ready" === cB && BB.g.play("autorunReady"), "locked" === cB && (BB.g.play("autorunLocked"), Ic = setInterval((() => {
                    Tc.gameBridge.lookup("dropAhead", null) && (BB.g.play("autorunLedgeStop"), rB.cancel())
                  }), 100)), "locked" === uc && (clearInterval(Ic), Ic = null, sc.current.onUnlocked())
                }
              }
            });
            uc.current = rB;
            const Mc = () => {
                rB.suspend()
              },
              Pc = () => {
                "hidden" === document.visibilityState && Mc()
              },
              qB = (0, cn.d)((cB => {
                let {
                  keepsMovement: Bc
                } = cB;
                Bc ? rB.suspendArming() : Mc()
              }));
            return document.addEventListener("visibilitychange", Pc), window.addEventListener("blur", Mc), window.addEventListener("resize", Mc), () => {
              qB(), document.removeEventListener("visibilitychange", Pc), window.removeEventListener("blur", Mc), window.removeEventListener("resize", Mc), rB.cancel(), clearInterval(Ic), uc.current = null
            }
          }), [cB, Bc, nc]), (0, hc.d)("localPlayerAliveSet", (cB => {
            var Bc;
            cB || null === (Bc = uc.current) || void 0 === Bc || Bc.suspend()
          })), uc
        }(rB, sc, fc, (() => {
          Qc(), Zc()
        }), (() => {
          Yc(), null === ec.current && lc.current.suspend()
        }));

      function Yc() {
        ec.current = function(cB, Bc, nc, Vc) {
          cB.style.display = "";
          const Ic = cB.offsetWidth,
            rB = cB.offsetHeight,
            uc = Math.min(Math.max(Bc.x - Ic / 2, 8), window.innerWidth - 8 - Ic);
          let sc = Bc.y - nc - 80 - rB;
          const Mc = [...Vc].sort(((cB, Bc) => Bc.top - cB.top));
          for (const Pc of Mc) uc < Pc.right && uc + Ic > Pc.left && sc < Pc.bottom && sc + rB > Pc.top && (sc = Pc.top - 8 - rB);
          return sc < 8 ? (cB.style.display = "none", null) : (cB.style.transform = `translate(${uc-(Bc.x-nc)}px, ${sc-(Bc.y-nc)}px)`, {
            left: uc,
            top: sc,
            right: uc + Ic,
            bottom: sc + rB
          })
        }(mB.current, qB.current, uB, function() {
          const cB = [];
          for (const Bc of document.querySelectorAll(".TouchInventoryKey")) {
            const nc = Bc.getBoundingClientRect();
            nc.width > 0 && "visible" === getComputedStyle(Bc).visibility && cB.push(nc)
          }
          return cB
        }()), tB.current = null !== ec.current && Gc(Sc.current, ec.current)
      }

      function Lc(cB) {
        sc.current.style.transform = `translate(${cB.x-uB}px, ${cB.y-uB}px)`
      }

      function gB(cB) {
        const Bc = sc.current;
        Bc.classList.add("Resting"), Bc.classList.toggle("Returning", cB), Bc.style.display = "fixed_hidden" === nc ? "none" : "block", Lc(function() {
          const cB = pc * window.innerWidth / 100,
            Bc = window.innerHeight > window.innerWidth ? 135 : 100;
          return {
            x: cB + 90,
            y: window.innerHeight - Bc
          }
        }())
      }
      const bB = (0, Vc.useRef)({
        restFixed: gB,
        release: Cc
      });

      function Zc() {
        zB ? gB("fixed_shown" === nc) : "floating" === nc && (sc.current.style.display = "none"), Bc({
          x: 0,
          y: 0
        })
      }

      function Qc() {
        Oc.current = null, qB.current = null, Mc.current.style.transform = "translate(-50%, -50%)"
      }

      function Cc(cB) {
        Qc();
        const nc = lc.current,
          Vc = cB && nc ? nc.lift() : null;
        null === Vc ? (null === nc || void 0 === nc || nc.cancel(), Zc()) : Bc({
          x: 0,
          y: -Vc
        })
      }

      function vB(cB) {
        const nc = Array.from(cB.touches).find((cB => cB.identifier === Oc.current));
        if (null === qB.current || null === Oc.current || (0, Ac.E)(nc)) return;
        const Vc = lc.current,
          rB = nc.clientX - qB.current.x,
          uc = nc.clientY - qB.current.y,
          sc = Math.hypot(rB, uc),
          Pc = sc > 0 ? Math.min(1, uB / sc) : 0,
          Tc = rB * Pc,
          fc = uc * Pc,
          mB = Math.hypot(Tc, fc) / uB,
          yB = Ic && mB > 0 ? Ic(mB) / mB : 1;
        Mc.current.style.transform = `translate(calc(-50% + ${Tc}px), calc(-50% + ${fc}px))`;
        const zB = Tc / uB,
          pc = fc / uB;
        if (Bc({
            x: zB * yB,
            y: pc * yB
          }), null !== Vc && null !== ec.current) {
          Vc.move(zB, pc, mB * yB), Sc.current = {
            clientX: nc.clientX,
            clientY: nc.clientY
          };
          const cB = tB.current;
          tB.current = Gc(nc, ec.current), tB.current !== cB && Vc.target(tB.current)
        }
      }
      return bB.current = {
        restFixed: gB,
        release: Cc
      }, (0, Vc.useLayoutEffect)((() => {
        if (!zB) return;
        null === Oc.current && bB.current.restFixed(!1);
        const cB = () => {
          null === Oc.current && bB.current.restFixed(!1)
        };
        window.addEventListener("resize", cB);
        const Bc = sc.current;
        return () => {
          window.removeEventListener("resize", cB), Bc.classList.remove("Resting", "Returning"), null === Oc.current && (Bc.style.display = "", Bc.style.transform = "")
        }
      }), [zB, nc, pc]), (0, Vc.useEffect)((() => {
        const cB = cB => {
            const Bc = Oc.current;
            null === Bc || Array.from(cB.touches).some((cB => cB.identifier === Bc)) || bB.current.release("touchend" === cB.type && Array.from(cB.changedTouches).some((cB => cB.identifier === Bc)))
          },
          Bc = () => {
            null !== Oc.current && bB.current.release(!1)
          },
          nc = () => {
            "hidden" === document.visibilityState && Bc()
          };
        document.addEventListener("touchstart", cB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", cB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", cB, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", cB, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", Bc), document.addEventListener("visibilitychange", nc);
        const Vc = (0, cn.d)((cB => {
          let {
            keepsMovement: nc
          } = cB;
          nc || Bc()
        }));
        return () => {
          Vc(), document.removeEventListener("touchstart", cB, {
            capture: !0
          }), document.removeEventListener("touchmove", cB, {
            capture: !0
          }), document.removeEventListener("touchend", cB, {
            capture: !0
          }), document.removeEventListener("touchcancel", cB, {
            capture: !0
          }), window.removeEventListener("blur", Bc), document.removeEventListener("visibilitychange", nc)
        }
      }), []), (0, Vc.useEffect)((() => {
        const cB = uc.current,
          Bc = cB => {
            cB.preventDefault()
          };
        return cB.addEventListener("touchstart", Bc, {
          passive: !1
        }), () => {
          cB.removeEventListener("touchstart", Bc)
        }
      }), []), (0, Pc.jsx)("div", {
        ref: uc,
        className: "JoystickZone",
        onTouchStart: function(cB) {
          var Bc;
          if (null !== Oc.current) return;
          const Vc = Array.from(cB.changedTouches).find((cB => {
            var Bc;
            return null === (Bc = uc.current) || void 0 === Bc ? void 0 : Bc.contains(cB.target)
          }));
          if (Vc) {
            if (null === (Bc = lc.current) || void 0 === Bc || Bc.startTouch(), Oc.current = Vc.identifier, "pinned" === nc) {
              const cB = sc.current.getBoundingClientRect();
              qB.current = {
                x: cB.left + cB.width / 2,
                y: cB.top + cB.height / 2
              }
            } else qB.current = {
              x: Vc.clientX,
              y: Vc.clientY
            }, sc.current.classList.remove("Resting", "Returning"), sc.current.style.display = "block", Lc(qB.current), rB && (Sc.current = {
              clientX: Vc.clientX,
              clientY: Vc.clientY
            }, Yc());
            vB(cB)
          }
        },
        onTouchMove: vB,
        children: (0, Pc.jsxs)("div", {
          ref: sc,
          className: "Joystick",
          style: {
            width: "100px",
            height: "100px",
            transform: "pinned" === nc ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Pc.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: "100px",
              height: "100px"
            }
          }), rB && (0, Pc.jsxs)(Pc.Fragment, {
            children: [(0, Pc.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Pc.jsx)("circle", {
                ref: fc,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Pc.jsxs)("div", {
              ref: mB,
              className: "AutorunTarget",
              children: [(0, Pc.jsx)(Nc.e, {
                name: "lock"
              }), yB("settingsMenu:autoRun")]
            })]
          }), (0, Pc.jsx)("div", {
            ref: Mc,
            className: "JoystickKnob",
            style: {
              width: "50px",
              height: "50px"
            }
          })]
        })
      })
    }
    var MB = nc(35238),
      PB = nc(35175),
      qn = nc(7787),
      OB = nc(35243);
    class TB {
      constructor(cB) {
        this.zones = cB, this.followed = new Map, this.onStart = cB => {
          if (this.releaseMissing(cB.touches), cB.target instanceof HTMLCanvasElement)
            for (let Bc = 0; Bc < cB.changedTouches.length; Bc++) {
              const {
                identifier: nc,
                clientX: Vc,
                clientY: Ic
              } = cB.changedTouches[Bc];
              this.release(nc);
              const rB = this.zones.hitZone(Vc, Ic);
              if (!rB) continue;
              const {
                key: uc
              } = rB;
              for (const cB of uc.getAnimations()) cB.cancel();
              const sc = {
                hit: rB.element,
                key: uc,
                x: rB.x,
                y: rB.y,
                reach: .6 * rB.radius
              };
              this.followed.set(nc, sc), (0, dc.h)(rB.element, !0), fB(sc, Vc, Ic)
            }
        }, this.onMove = cB => {
          this.releaseMissing(cB.touches);
          for (let Bc = 0; Bc < cB.changedTouches.length; Bc++) {
            const {
              identifier: nc,
              clientX: Vc,
              clientY: Ic
            } = cB.changedTouches[Bc], rB = this.followed.get(nc);
            rB && fB(rB, Vc, Ic)
          }
        }, this.onEnd = cB => {
          for (let Bc = 0; Bc < cB.changedTouches.length; Bc++) this.release(cB.changedTouches[Bc].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const cB = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, cB), document.addEventListener("touchmove", this.onMove, cB), document.addEventListener("touchend", this.onEnd, cB), document.addEventListener("touchcancel", this.onEnd, cB), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(cB) {
        for (const Bc of [...this.followed.keys()])(0, OB.c)(cB, Bc) || this.release(Bc)
      }
      releaseAll() {
        for (const cB of [...this.followed.keys()]) this.release(cB)
      }
      release(cB) {
        const Bc = this.followed.get(cB);
        if (!Bc) return;
        this.followed.delete(cB);
        for (const Ic of this.followed.values())
          if (Ic.key === Bc.key) return;
        (0, dc.h)(Bc.hit, !1);
        const {
          key: nc
        } = Bc, Vc = nc.style.translate;
        nc.style.translate = "", Vc && nc.animate({
          translate: [Vc, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        })
      }
    }

    function fB(cB, Bc, nc) {
      let {
        key: Vc,
        x: Ic,
        y: rB,
        reach: uc
      } = cB;
      const sc = Bc - Ic,
        Mc = nc - rB,
        Pc = Math.min(1, uc / (Math.hypot(sc, Mc) || 1));
      Vc.style.translate = `${sc*Pc}px ${Mc*Pc}px`
    }
    const mn = new Set;

    function eB(cB) {
      const Bc = new Set(Array.from(cB.touches, (cB => cB.identifier)));
      for (const nc of mn) {
        for (const cB of nc.ids) Bc.has(cB) || nc.ids.delete(cB);
        if (0 === nc.ids.size) {
          mn.delete(nc);
          nc.pressesOnPointerDown && "touchstart" === cB.type && Array.from(cB.changedTouches).some((cB => cB.target instanceof Node && nc.element.contains(cB.target))) || nc.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const lr of ["touchstart", "touchmove"]) window.addEventListener(lr, eB, {
        capture: !0,
        passive: !0
      });

    function tn(cB) {
      let {
        pressesOnPointerDown: Bc = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const nc = (0, Vc.useRef)(cB);
      nc.current = cB;
      const Ic = (0, Vc.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: Bc,
        release: () => {
          nc.current()
        }
      });
      (0, Vc.useEffect)((() => {
        const cB = Ic.current;
        return () => {
          mn.delete(cB), cB.ids.clear()
        }
      }), []);
      const rB = cB => {
        const Bc = Ic.current;
        for (const nc of Array.from(cB.changedTouches)) Bc.ids.delete(nc.identifier);
        0 === Bc.ids.size && mn.delete(Bc)
      };
      return {
        onTouchStart: cB => {
          const Bc = Ic.current;
          Bc.element = cB.currentTarget;
          for (const nc of Array.from(cB.changedTouches)) nc.target instanceof Node && cB.currentTarget.contains(nc.target) && Bc.ids.add(nc.identifier);
          Bc.ids.size > 0 && mn.add(Bc)
        },
        onTouchEnd: rB,
        onTouchCancel: rB
      }
    }
    const SB = () => {
      const cB = (0, jB.l)(),
        Bc = (0, Yc.s)();
      return cB || Bc
    };

    function yn(cB) {
      (0, Kc.f)(cB.x, cB.y)
    }
    const zn = (0, Vc.memo)((function() {
        const cB = SB(),
          {
            joystickMode: Bc,
            touchSpeedCurve: nc,
            autorun: Ic
          } = (0, aB.j)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, Vc.useEffect)((() => ((0, xB.h)(Rc.x.TouchControls, Rc.x.TouchControls), () => {
          (0, xB.h)(Rc.x.TouchControls, 0), (0, Kc.f)(0, 0)
        })), []), (0, Pc.jsx)("div", {
          className: rB()("TouchMovementWrapper", {
            Hidden: cB
          }),
          "data-camera-keeper": "",
          children: (0, Pc.jsx)(sB, {
            onMove: yn,
            mode: Bc,
            speedCurve: nc ? MB.b : void 0,
            autorun: Ic
          })
        })
      })),
      pB = (0, Vc.memo)((function() {
        const cB = SB(),
          {
            clientEscMenuOptions: Bc
          } = (0, aB.j)(["clientEscMenuOptions"]),
          nc = (0, qn.h)(Bc.touchActionButtons);
        return (0, Vc.useEffect)((() => new TB(Kc.e).start()), []), (0, Vc.useEffect)((() => {
          yB.i.Vu(PB.b)
        }), [cB]), (0, Pc.jsxs)("div", {
          className: rB()("TouchComponentsButtons", {
            Hidden: cB
          }),
          "data-camera-keeper": "",
          children: [(0, Pc.jsx)(YB, {}), (0, Pc.jsx)(NB, {
            hidden: cB,
            actionButtons: nc
          }), (0, Pc.jsx)(lB, {})]
        })
      }));

    function hB(cB, Bc) {
      (0, Vc.useEffect)((() => () => {
        Bc.current && (Bc.current = !1, (0, iB.z)(cB, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function an(cB) {
      const Bc = Bc => nc => {
        (0, dc.h)(nc.currentTarget, Bc), cB(Bc, nc.nativeEvent)
      };
      return {
        onPointerDown: Bc(!0),
        onPointerUp: Bc(!1),
        onPointerCancel: Bc(!1)
      }
    }

    function lB() {
      const cB = (0, Sc.j)("canCrouch"),
        Bc = (0, hc.g)("crouching"),
        nc = (0, Vc.useRef)(!1);
      hB(Rc.w.Crouch, nc);
      const Ic = (cB, Bc) => {
          nc.current = cB, (0, iB.z)(Rc.w.Crouch, cB, Bc)
        },
        rB = (0, Vc.useRef)(null),
        uc = () => {
          nc.current && (rB.current && (0, dc.h)(rB.current, !1), Ic(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        sc = tn(uc);
      return (0, Vc.useEffect)((() => {
        !1 === cB && uc()
      }), [cB]), !1 === cB ? null : (0, Pc.jsx)(PB.f, {
        ref: rB,
        slot: PB.i.Crouch,
        className: "CrouchKey",
        lit: Bc,
        ...sc,
        ...an(Ic),
        children: (0, Pc.jsx)(Nc.e, {
          name: "arrow-down-to-line"
        })
      })
    }

    function YB() {
      const cB = (0, Vc.useRef)(!1);
      hB(Rc.w.Jump, cB);
      const Bc = Bc => nc => {
          cB.current = Bc, (0, dc.h)(nc.currentTarget, Bc), (0, iB.z)(Rc.w.Jump, Bc, nc.nativeEvent)
        },
        nc = (0, Vc.useRef)(null),
        Ic = tn((() => {
          cB.current && (cB.current = !1, nc.current && (0, dc.h)(nc.current, !1), (0, iB.z)(Rc.w.Jump, !1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        }));
      return (0, Pc.jsx)(PB.f, {
        ref: nc,
        slot: PB.i.Jump,
        className: "JumpKey",
        onTouchStart: cB => {
          Ic.onTouchStart(cB), Bc(!0)(cB)
        },
        onTouchEnd: cB => {
          Ic.onTouchEnd(cB), Bc(!1)(cB)
        },
        onTouchCancel: cB => {
          Ic.onTouchCancel(cB), Bc(!1)(cB)
        },
        children: (0, Pc.jsx)(Nc.e, {
          name: "arrow-up-from-line"
        })
      })
    }
    const LB = [{
        icon: "arrows-rotate"
      }],
      gn = [{
        icon: "Arrow"
      }],
      UB = [{
        icon: "crosshairs"
      }],
      bn = [{
        icon: "swords"
      }],
      ZB = [{
        icon: "hand-back-point-up"
      }],
      QB = [{
        icon: "Firecracker"
      }];

    function CB(cB, Bc, nc, Vc) {
      return {
        id: JSON.stringify(Bc),
        render: Ic => (0, Pc.jsx)(EB, {
          code: cB,
          slot: Ic,
          icon: Bc,
          label: Vc,
          hidden: nc
        })
      }
    }

    function vn(cB, Bc) {
      return {
        id: "fly",
        render: nc => (0, Pc.jsx)(DB, {
          slot: nc,
          flying: cB,
          label: Bc
        })
      }
    }

    function DB(cB) {
      let {
        slot: Bc,
        flying: nc,
        label: Vc
      } = cB;
      return (0, Pc.jsx)(PB.f, {
        slot: Bc,
        className: "FlyKey",
        lit: nc,
        label: Vc,
        ...an(((cB, Bc) => {
          (0, iB.z)(Rc.w.Fly, cB, Bc)
        })),
        children: (0, Pc.jsx)(Nc.e, {
          name: "feather-pointed"
        })
      })
    }

    function NB(cB) {
      var Bc, nc;
      let {
        hidden: Vc,
        actionButtons: Ic
      } = cB;
      const {
        t: rB
      } = (0, Uc.x)(), {
        gun: uc,
        aimable: sc,
        chargeName: Mc
      } = (0, hc.g)("heldItemAim"), qB = (0, hc.g)("gliderBoostFuel"), {
        canFly: Oc,
        flying: Tc
      } = (0, hc.g)("flight"), fc = (0, Sc.j)("touchscreenActionButton"), mB = uc ? LB : fc, ec = sc ? {
        icon: gn,
        label: rB("touchKeys:aim")
      } : null, tB = null !== Mc ? {
        icon: [{
          icon: Mc
        }]
      } : null, yB = null !== ec && void 0 !== ec ? ec : tB, zB = null !== (Bc = null === (nc = uc ? ec : null !== tB && void 0 !== tB ? tB : ec) || void 0 === nc ? void 0 : nc.icon) && void 0 !== Bc ? Bc : ZB, pc = [!Ic && yB ? CB(Kc.c.Action2, yB.icon, Vc, yB.label) : null, uc ? CB(Kc.c.Action3, UB, Vc, rB("touchKeys:scope")) : null, Oc ? vn(Tc, rB("touchKeys:fly")) : null];
      return (0, Pc.jsxs)(Pc.Fragment, {
        children: [mB && (0, Pc.jsx)(EB, {
          code: Kc.c.Action1,
          slot: PB.i.Game,
          icon: mB,
          label: uc ? rB("touchKeys:reload") : void 0,
          hidden: Vc
        }, JSON.stringify(mB)), Ic && (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)(EB, {
            code: Kc.c.Attack,
            slot: PB.i.Attack,
            icon: bn,
            name: rB("touchKeys:attack"),
            hidden: Vc
          }), (0, Pc.jsx)(EB, {
            code: Kc.c.Use,
            slot: PB.i.Use,
            icon: zB,
            name: rB("touchKeys:use"),
            hidden: Vc
          })]
        }), (0, PB.m)(pc, Ic), qB > 0 && (0, Pc.jsx)(EB, {
          code: Kc.c.Boost,
          slot: PB.i.Context,
          icon: QB,
          label: rB("touchKeys:boost", {
            fuel: qB > 99 ? "99+" : qB
          }),
          hidden: Vc
        })]
      })
    }

    function EB(cB) {
      let {
        code: Bc,
        slot: nc,
        icon: Vc,
        label: Ic,
        name: rB,
        hidden: uc
      } = cB;
      const sc = (0, PB.q)(Bc, uc);
      return (0, Pc.jsx)(PB.f, {
        ref: sc,
        slot: nc,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Ic,
        role: void 0 !== rB ? "img" : void 0,
        "aria-label": rB,
        children: (0, Pc.jsx)(Mc.e, {
          text: Vc
        })
      })
    }
    var oB = nc(3461),
      WB = nc(2258),
      wB = nc(279);
    const kn = (0, Vc.memo)((function() {
      (0, ec.e)();
      const cB = (0, Vc.useRef)([]),
        Bc = (0, WB.e)(),
        nc = (0, Vc.useRef)(0),
        Ic = (0, Vc.useRef)(0),
        rB = (0, Vc.useRef)([]),
        uc = (0, Vc.useRef)(null);

      function qB(nc, Vc, Ic, rB) {
        const uc = (0, wB.d)(),
          sc = setTimeout((() => {
            cB.current = cB.current.filter((cB => cB.id !== uc)), Bc()
          }), rB);
        Tc.gameBridge.send("recordFlyingMiddleText", {
          content: nc,
          K8: Vc,
          angle: Ic,
          Z2: rB
        }), cB.current.push({
          id: uc,
          content: nc,
          K8: Vc,
          Z2: rB,
          removeTimeout: sc,
          angle: Ic
        }), Bc()
      }
      return (0, hc.d)("shotDamageToShow", (cB => {
        let {
          damage: Bc,
          wasCrit: nc,
          distance: Vc
        } = cB;
        const Ic = -Math.PI / 4 + Math.random() * Math.PI / 2;
        qB(nc ? [{
          str: Bc.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [Bc.toString()], Vc, Ic, 1e3)
      })), (0, sc.f)("flyingMiddleMessage", (cB => {
        let {
          content: Bc,
          K8: Vc,
          Z2: sc
        } = cB;
        rB.current.push({
          content: Bc,
          K8: Vc,
          Z2: sc
        });
        const Mc = () => {
          const {
            content: cB,
            K8: Bc,
            Z2: Vc
          } = rB.current.shift(), uc = function(cB) {
            const Bc = -Math.PI / 4,
              nc = Math.PI / 4,
              Vc = nc - Bc,
              Ic = (1 + Math.sqrt(5)) / 2,
              rB = 2 * Math.PI / (Ic * Ic);
            let uc = cB + rB;
            for (; uc > nc;) uc -= Vc;
            for (; uc < Bc;) uc += Vc;
            const sc = Math.PI / 6;
            if (Math.abs(uc - cB) < sc) {
              uc = cB + (Math.sign(uc - cB) || 1) * sc, uc > nc && (uc = cB - sc), uc < Bc && (uc = cB + sc)
            }
            return uc
          }(Ic.current);
          Ic.current = uc, nc.current = Date.now(), qB(cB, Bc, uc, Vc)
        };
        if (!uc.current) {
          const cB = () => {
            rB.current.length > 0 && Mc(), 0 === rB.current.length && (clearInterval(uc.current), uc.current = null)
          };
          uc.current = setInterval(cB, 200), nc.current + 200 < Date.now() && cB()
        }
        for (; rB.current.length > 4;) Mc()
      })), (0, sc.f)("forceFlyingMiddleMessage", (cB => {
        let {
          content: Bc,
          K8: nc,
          angle: Vc,
          Z2: Ic
        } = cB;
        qB(Bc, nc, Vc, Ic)
      })), (0, Vc.useEffect)((() => () => {
        clearInterval(uc.current), uc.current = null;
        for (const Bc of cB.current) clearTimeout(Bc.removeTimeout)
      }), []), (0, Pc.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: cB.current.map((cB => {
          const {
            id: Bc,
            content: nc,
            K8: Vc,
            Z2: Ic,
            angle: rB
          } = cB;
          return cB.pos || (cB.pos = function(cB, Bc) {
            const nc = 50 / (cB ** .7 * .35);
            return {
              x: nc * Math.sin(Bc),
              y: -nc * Math.cos(Bc)
            }
          }(Vc, rB)), (0, Pc.jsx)(XB, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Ic,
            enterActiveStyle: {
              transform: `translate(${cB.pos.x}vw, ${cB.pos.y}vh)`,
              transition: `transform ${Ic}ms ease-out`
            },
            children: (0, Pc.jsx)("div", {
              children: (0, Pc.jsx)(Mc.e, {
                text: nc
              })
            })
          }, Bc)
        }))
      })
    }));

    function XB(cB) {
      let {
        children: Bc,
        className: nc,
        classNames: Ic,
        timeout: rB,
        enterActiveStyle: uc
      } = cB;
      const [sc, Mc] = (0, Vc.useState)(!1), [qB, Oc] = (0, Vc.useState)(!1), Tc = (0, Vc.useRef)(null);
      return (0, Vc.useEffect)((() => {
        Mc(!0)
      }), []), (0, Pc.jsx)(oB.c, {
        className: nc,
        classNames: Ic || nc,
        in: sc,
        timeout: rB,
        nodeRef: Tc,
        onEntering: () => {
          Oc(!0)
        },
        children: (0, Vc.cloneElement)(Bc, {
          ref: Tc,
          style: qB && uc || void 0
        })
      })
    }
    var HB = nc(35245);

    function FB() {
      const cB = (0, hc.g)("health");
      return (0, Pc.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Pc.jsx)(HB.d, {
          placement: "statBars"
        }), (0, Pc.jsx)(JB, {
          actualValue: cB.shield,
          maxValue: cB.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Pc.jsx)(JB, {
          actualValue: cB.health,
          maxValue: cB.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function JB(cB) {
      let {
        actualValue: Bc,
        maxValue: nc,
        hideAtValue: Vc,
        icon: Ic,
        className: rB
      } = cB;
      return (0, ec.f)(), null === Bc || null === nc || Bc === Vc || nc === Vc ? null : (0, Pc.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Pc.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Pc.jsx)("div", {
            className: `BottomScreenStatBar ${rB}`,
            style: {
              transform: `scaleX(${Math.max(Bc/nc,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Pc.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Pc.jsx)(Nc.e, {
              name: Ic
            }), ` ${Math.ceil(Bc)}/${nc}`]
          })]
        })
      })
    }
    var jn = nc(8187),
      RB = nc(3646),
      KB = nc(1373),
      xn = nc(2167),
      dB = nc(1255),
      AB = nc(1164),
      GB = nc(2604),
      cV = nc(2633),
      Bn = nc(623),
      nn = nc(2648),
      Vn = nc(145),
      In = nc(8135),
      rV = nc(302);

    function un(cB, Bc) {
      let {
        shownName: nc,
        lifeformType: Vc
      } = cB;
      return null !== nc ? nc : null !== Vc ? Bc(`lifeform:${(0,rV.Nd)(Vc)}`) : null
    }
    var sn = nc(2617),
      Mn = nc(2625);
    const Pn = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      qV = (0, Vc.memo)((function() {
        var cB, Bc;
        const nc = (0, ec.e)(),
          Ic = (0, fc.useNavigatePreserveSearch)(),
          {
            t: uc
          } = (0, Uc.x)(),
          {
            loadingOverlayVisible: Mc
          } = (0, aB.j)(["loadingOverlayVisible"]),
          qB = (0, Yc.s)(),
          [Oc, mB] = (0, Vc.useState)(!1),
          [tB, yB] = (0, Vc.useState)(!0),
          [pc, lc] = (0, Vc.useState)(null),
          Lc = (0, WB.e)(),
          gB = (0, Sc.j)("respawnButtonText"),
          bB = (0, Sc.j)("usePlayAgainButton"),
          Zc = (0, Sc.j)("useRespawnButton"),
          {
            gameNameWithVariation: Qc
          } = (0, hc.g)("connectedGame"),
          Cc = (0, Vc.useRef)(zB.d.get("secsToRespawn")),
          vB = (0, Vc.useRef)(Tc.gameBridge.latest("localPlayerAlive")),
          Dc = (0, Vc.useRef)(zB.d.get("secsToRespawn")),
          Ec = (0, Vc.useRef)(zB.d.get("autoRespawn")),
          oc = (0, Vc.useRef)(null),
          Wc = (0, Vc.useRef)(0),
          kB = (0, Vc.useRef)(0),
          [Xc, Hc] = (0, Vc.useState)(!1),
          Fc = (0, Vc.useRef)(null),
          Jc = (0, Vc.useRef)(null),
          jB = (0, Vc.useRef)(null);
        (0, Sc.f)("secsToRespawn", (cB => {
          console.log("Received new secsToRespawn with", cB, "and current canRespawn value of ", Ec.current), Dc.current = cB, xB()
        })), (0, Sc.f)("autoRespawn", (cB => {
          console.log("Received autorespawn", cB, "current canRespawn value of ", Cc.current), Ec.current = cB, xB()
        }));
        const Rc = cB => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", cB), cB || Wc.current++, vB.current = cB, xB()
        };
        (0, hc.d)("localPlayerAliveSet", Rc), (0, Vc.useEffect)((() => {
          const cB = Tc.gameBridge.latest("localPlayerAlive");
          cB === vB.current ? (console.log("Updating respawn component from initial mount"), xB()) : Rc(cB)
        }), []), (0, Vc.useEffect)((() => {
          if (Oc) {
            Hc(!1);
            const cB = setTimeout((() => {
              Hc(!0)
            }), 600);
            return (0, In.f)(), () => {
              clearTimeout(cB)
            }
          }
          return () => {}
        }), [Oc]);
        (0, hc.d)("kill", (cB => {
          let {
            killer: Bc,
            victim: nc,
            withItem: Vc
          } = cB;
          if (!nc.local) return;
          const Ic = ((cB, Bc) => {
            if (cB.local) {
              const cB = Pn[Bc];
              return cB ? uc(cB) : null
            }
            const nc = un(cB, uc);
            return nc ? uc("respawnPage:killedBy", {
              name: nc
            }) : null
          })(Bc, Vc);
          Ic && lc({
            text: Ic,
            deathCount: vB.current ? Wc.current + 1 : Wc.current
          })
        }));
        const iB = () => {
            Oc && Ec.current && vB.current && Xc && mB(!1)
          },
          Kc = Oc && Ec.current && vB.current && Xc && !Mc;
        (0, sc.f)("usedKeyboard", (() => {
          iB()
        })), (0, Mn.d)("respawn", Kc, iB);
        const xB = () => {
            yB(Dc.current >= 3 || !Ec.current), vB.current ? (clearInterval(oc.current), oc.current = null, Ec.current ? Lc() : mB(!1)) : (mB(!0), Cc.current = Dc.current, Lc(), console.log("Running respawn stats updated", Ec.current, Cc.current), Ec.current && Cc.current <= 0 && dc(), clearInterval(oc.current), Cc.current > 0 && (oc.current = setInterval((() => {
              Cc.current = Math.max(Cc.current - 1, 0), Lc(), Cc.current <= 0 && (clearInterval(oc.current), oc.current = null, zB.d.get("autoRespawn") && dc())
            }), 1e3)))
          },
          dc = () => {
            if (Date.now() - kB.current > 1e3) {
              const cB = () => {
                Tc.gameBridge.send("respawn", null), kB.current = Date.now()
              };
              zB.d.get("autoRespawn") ? cB() : (0, AB.cb)((() => {
                cB()
              }), "video_respawn")
            }
          },
          Ac = (0, Vc.useMemo)((() => {
            var cB;
            return null === (cB = (0, Bn.m)(Qc)) || void 0 === cB ? void 0 : cB.otherGameLinksOnRespawnPage
          }), [Qc]),
          Gc = 0 === Cc.current,
          cn = (null === pc || void 0 === pc ? void 0 : pc.deathCount) === Wc.current ? pc.text : null,
          BB = Oc && tB && !Mc,
          nB = qB && Kc && null !== (cB = null === (Bc = (0, wc.f)()) || void 0 === Bc ? void 0 : Bc.getBoundButton("menuConfirm")) && void 0 !== cB ? cB : null,
          VB = cB => Gc ? cB : uc("respawnPage:actionInSeconds", {
            action: cB,
            seconds: Cc.current
          });
        return (0, Pc.jsx)(jn.d, {
          showing: Oc,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Pc.jsx)(GB.c, {
            show: Oc,
            children: (0, Pc.jsxs)(RB.b, {
              close: () => {
                mB(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: Ec.current || Mc ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, Vn.l)() && (0, Pc.jsx)(dB.c, {
                onClick: cV.e,
                children: uc("homePage:backToGames")
              }), (0, Pc.jsxs)("div", {
                className: "RespawnContainer",
                onClick: iB,
                children: [(0, Pc.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Pc.jsx)("div", {
                    ref: Jc,
                    className: "RespawnSideSquareBannerDiv",
                    children: nc[0] > 925 && (0, Pc.jsx)(xn.d, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Jc
                      },
                      showing: BB,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Pc.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Pc.jsxs)("div", {
                      className: rB()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: qB
                      }),
                      children: [Ec.current && (0, Pc.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Pc.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Pc.jsx)(Nc.e, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), uc("respawnPage:youDied")]
                        }), (0, Pc.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === nB && (vB.current ? uc("respawnPage:pressAnywhereToContinue") : Gc ? uc("respawnPage:respawning") : VB(uc("general:respawn"))), null !== nB && (0, Pc.jsx)(sn.c, {
                            text: uc("controller:screensPressToContinue", {
                              button: sn.g
                            }),
                            glyph: nB,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), cn && (0, Pc.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: cn
                        })]
                      }), !Ec.current && (0, Pc.jsxs)(Pc.Fragment, {
                        children: [(0, Pc.jsxs)("div", {
                          className: rB()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Ac
                          }),
                          children: [bB && (0, Pc.jsx)(dB.n, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, AB.cb)((() => {
                                (0, aB.h)("inGameReplay");
                                const cB = (0, KB.e)(Qc);
                                Ic(cB)
                              }), "video_start")
                            },
                            disabled: !Gc || !Xc,
                            touchPressOn: "pointerup",
                            children: VB(uc("respawnPage:playAgain"))
                          }), Zc && (0, Pc.jsx)(dB.d, {
                            className: "RespawnPageButton",
                            onClick: dc,
                            padDefaultFocus: !bB,
                            padBack: "sessionBasedGame:stayInLobby" === gB,
                            disabled: !Gc || !Xc,
                            touchPressOn: "pointerup",
                            children: VB(uc(gB))
                          }), !(0, Vn.l)() && (0, Pc.jsx)(dB.L, {
                            className: "RespawnPageButton",
                            onClick: cV.e,
                            disabled: !Gc || !Xc,
                            touchPressOn: "pointerup",
                            children: VB(uc("respawnPage:exitGame"))
                          })]
                        }), Ac && (0, Pc.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Pc.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: uc("respawnPage:orTry")
                          }), (0, Pc.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Ac.map((cB => (0, Pc.jsx)(nn.g, {
                              source: {
                                type: "game",
                                gameNameWithVariation: cB
                              },
                              disabled: !Gc || !Xc,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, aB.h)("inGameReplay");
                                const Bc = (0, KB.e)(cB);
                                Ic(Bc)
                              }
                            }, cB)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Pc.jsx)("div", {
                    ref: jB,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Pc.jsx)("div", {
                  ref: Fc,
                  className: "RespawnBottom",
                  children: (0, Pc.jsx)(xn.d, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: Fc
                    },
                    showing: BB,
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
    var On = nc(35259);
    const Tn = [{
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
      fn = [{
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
      mV = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      en = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      tV = (0, Vc.memo)((function() {
        const cB = (0, Vc.useRef)(null);

        function Bc(Bc) {
          let {
            y_: nc,
            screenPos: Vc
          } = Bc;
          const Ic = cB.current;
          Ic.getAnimations().forEach((cB => {
            cB.cancel()
          })), Ic.classList.remove("HitmarkerCrit"), Vc ? (Ic.style.left = `${Vc.x}%`, Ic.style.top = `${Vc.y}%`) : (Ic.style.left = "50%", Ic.style.top = "50%"), Ic.style.rotate = 16 * (Math.random() - .5) + "deg", nc && Ic.classList.add("HitmarkerCrit");
          Ic.animate(nc ? fn : Tn, nc ? en : mV).onfinish = () => {
            Ic.classList.remove("HitmarkerCrit")
          }
        }
        return (0, sc.f)("localGunHitmarker", (cB => {
          let {
            y_: nc
          } = cB;
          Bc({
            y_: nc
          })
        })), (0, sc.f)("yourAttackHit", (cB => {
          let {
            y_: nc,
            screenPos: Vc
          } = cB;
          Bc({
            y_: nc,
            screenPos: aB.d.get("isTouchScreen") ? Vc : void 0
          })
        })), (0, sc.f)("sendHitmarker", (cB => {
          let {
            y_: nc,
            screenPos: Vc
          } = cB;
          Bc({
            y_: nc,
            screenPos: Vc
          })
        })), (0, Pc.jsxs)("div", {
          ref: cB,
          className: "Hitmarker",
          children: [(0, Pc.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Pc.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Pc.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Pc.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function Sn() {
      const cB = (0, Vc.useRef)(!0);
      return (0, sc.f)("localBlockMined", (() => {
        BB.g.play("blockMined")
      })), (0, sc.f)("yourAttackHit", (() => {
        BB.g.play("hitLanded")
      })), (0, sc.f)("localGunHitmarker", (() => {
        BB.g.play("hitLanded")
      })), (0, sc.f)("damagedByOtherPlayer", (() => {
        BB.g.play("damageTaken")
      })), (0, hc.d)("localPlayerAliveSet", (Bc => {
        !Bc && cB.current && BB.g.play("death"), cB.current = Bc
      })), null
    }
    var yV = nc(1553),
      zV = nc(35273),
      pn = nc.n(zV),
      hn = nc(1661),
      aV = nc(1651),
      lnc = nc(2444),
      Yn = nc(35325);
    const Ln = rV.Dd ? 7e7 : 7e3,
      gV = pn()("#ffffff").alpha(.5).string();

    function Un(cB) {
      const Bc = (0, lnc.e)(cB);
      return void 0 !== Bc && "Gun" === (0, Yn.itemTypeOf)(Bc)
    }

    function bV(cB) {
      if (!cB) return console.error(`Killfeed colour was ${cB}`), gV;
      try {
        return pn()(cB).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${cB} is not a colour`), gV
      }
    }
    const Zn = (0, Vc.memo)((function() {
      const {
        t: cB
      } = (0, Uc.x)(), Bc = (0, Vc.useRef)([]), nc = (0, WB.e)();
      return (0, hc.d)("kill", (function(Vc) {
        var Ic, rB;
        let {
          killer: uc,
          victim: sc,
          withItem: Mc,
          killstreak: Pc
        } = Vc;
        const qB = Bc.current;
        if (qB.length >= 3) {
          const cB = qB.shift();
          clearTimeout(cB.timeout)
        }
        const Oc = Tc.gameBridge.latest("hiddenPlayerNames"),
          fc = {
            deadName: un(sc, cB),
            killerName: un(uc, cB),
            isFriend: {
              killer: (0, hn.g)(uc.realName, Oc),
              dead: (0, hn.g)(sc.realName, Oc)
            },
            withItem: Mc,
            wasHeadshot: !1,
            killstreak: Pc,
            timeout: setTimeout((() => {
              qB.shift(), nc()
            }), Ln),
            reactId: `${null!==(Ic=uc.id)&&void 0!==Ic?Ic:uc.shownName}|${null!==(rB=sc.id)&&void 0!==rB?rB:sc.shownName}|${Date.now()}`,
            killerBackground: bV(uc.colour),
            deadBackground: bV(sc.colour)
          };
        qB.push(fc), nc()
      })), (0, Vc.useEffect)((() => {
        const cB = Bc.current;
        return () => {
          for (; cB.length > 0;) {
            const {
              timeout: Bc
            } = cB.pop();
            clearTimeout(Bc)
          }
        }
      }), []), (0, Pc.jsx)("div", {
        className: "Killfeed",
        children: Bc.current.map((cB => {
          let {
            deadName: Bc,
            killerName: nc,
            withItem: Vc,
            wasHeadshot: Ic,
            killstreak: rB,
            killerBackground: uc,
            deadBackground: sc,
            reactId: Mc,
            isFriend: qB
          } = cB;
          return (0, Pc.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${uc} calc(100% - 10rem), ${sc} 100%)`
            },
            children: [rB >= 2 ? (0, Pc.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, rV.I)(rB)
            }) : null, (0, Pc.jsx)("div", {
              className: "KillfeedKillerName",
              children: nc
            }), qB.killer && (0, Pc.jsx)(aV.d, {}), (0, Pc.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: Un(Vc) ? "7.5vmin" : "5vmin"
              },
              children: (0, Pc.jsx)(yV.d, {
                itemName: Vc,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Ic ? (0, Pc.jsx)(Nc.e, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Pc.jsx)("div", {
              className: "KillfeedDeadName",
              children: Bc
            }), qB.dead && (0, Pc.jsx)(aV.d, {})]
          }, Mc)
        }))
      })
    }));
    var Qn = nc(35330),
      Cn = nc(35333),
      vV = nc.n(Cn),
      Dn = nc(35167),
      Nn = nc(35337),
      En = nc(1152);
    const onc = {},
      Wn = (0, Vc.memo)((function() {
        const cB = (0, Vc.useRef)({}),
          [, Bc] = (0, Vc.useReducer)((cB => cB + 1), 0);
        (0, sc.f)("setDirectionArrow", (nc => {
          let {
            id: Vc,
            position: Ic,
            style: rB,
            text: uc,
            l_: sc
          } = nc;
          const Mc = cB.current,
            Pc = rB || onc,
            qB = uc,
            Oc = Mc[Vc];
          if (!Oc) return Mc[Vc] = {
            position: Ic,
            style: Pc,
            text: qB,
            shouldShowDistance: sc,
            Cnc: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void Bc();
          const Tc = !vV()(Oc.style, Pc) || !vV()(Oc.text, qB) || Oc.shouldShowDistance !== sc;
          Oc.position = Ic, Oc.style = Pc, Oc.text = qB, Oc.shouldShowDistance = sc, Tc && Bc()
        })), (0, sc.f)("clearDirectionArrow", (nc => {
          let {
            id: Vc
          } = nc;
          const Ic = cB.current;
          if (null === Vc)
            for (const cB in Ic) delete Ic[cB];
          else delete Ic[Vc];
          Bc()
        })), (0, Vc.useEffect)((() => {
          const Bc = cB.current,
            nc = (0, En.g)((() => {
              ! function(cB) {
                const Bc = Tc.gameBridge.lookup("localPos", null),
                  nc = Dn.d - wn,
                  Vc = (0, Dn.m)() - wn;
                for (const Ic in cB) {
                  const rB = cB[Ic];
                  if (!rB.Cnc) continue;
                  const uc = Tc.gameBridge.lookup("screenPos", rB.position),
                    sc = uc.x - 50,
                    Mc = uc.y - 50;
                  uc.x === rB.lastScreenX && uc.y === rB.lastScreenY || (rB.lastScreenX = uc.x, rB.lastScreenY = uc.y, rB.Cnc.style.translate = `${uc.x}vw ${uc.y}vh`, rB.chevronElement && (rB.chevronElement.style.rotate = `${rV.b.fastATan2(Mc,sc)}rad`));
                  const Pc = Math.abs(sc) < nc && Math.abs(Mc) < Vc;
                  if (Pc !== rB.onScreen && (rB.onScreen = Pc, rB.Cnc.classList.toggle("DirectionArrowOnScreen", Pc)), rB.shouldShowDistance && rB.distanceElement) {
                    const cB = rB.position[0] - Bc[0],
                      nc = rB.position[1] - Bc[1],
                      Vc = rB.position[2] - Bc[2],
                      Ic = Math.round(Math.sqrt(cB * cB + nc * nc + Vc * Vc));
                    (-1 === rB.lastRenderedDist || (0, Nn.c)(Ic, rB.lastRenderedDist, rB.lastDistUpdateTime)) && (rB.distanceElement.textContent = `${Ic}m`, rB.lastRenderedDist = Ic, rB.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(Bc)
            }));
          return () => {
            nc();
            for (const cB in Bc) delete Bc[cB]
          }
        }), []);
        const nc = cB.current;
        return (0, Pc.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(nc).map((cB => {
            var Bc;
            let [Vc, Ic] = cB;
            const rB = null !== (Bc = (0, tB.Sb)(Ic.style)) && void 0 !== Bc ? Bc : "#ffffff";
            return (0, Pc.jsxs)("div", {
              ref: cB => {
                nc[Vc] && (nc[Vc].Cnc = cB)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Ic.style.fontSize,
                opacity: Ic.style.opacity
              },
              children: [(0, Pc.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: cB => {
                  nc[Vc] && (nc[Vc].chevronElement = cB)
                },
                children: [(0, Pc.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Pc.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Pc.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Pc.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Pc.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: rB
                    }
                  }), (0, Pc.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: rB
                    }
                  })]
                })]
              }), (0, Pc.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: rB,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${rB}`
                }
              }), Ic.text && (0, Pc.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: rB,
                  fontWeight: Ic.style.fontWeight,
                  fontStyle: Ic.style.fontStyle
                },
                children: (0, Pc.jsx)(Mc.e, {
                  text: Ic.text
                })
              }), Ic.shouldShowDistance && (0, Pc.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: cB => {
                  nc[Vc] && (nc[Vc].distanceElement = cB)
                },
                style: {
                  color: rB,
                  fontWeight: Ic.style.fontWeight,
                  fontStyle: Ic.style.fontStyle
                }
              })]
            }, Vc)
          }))
        })
      })),
      wn = .5;
    const kV = (0, Vc.memo)((function(cB) {
        let {
          isTouchScreen: Bc
        } = cB;
        return (0, Pc.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Pc.jsx)(Jn, {}), Bc && (0, Pc.jsx)(pB, {})]
        })
      })),
      Xn = {
        readyForNext: 0,
        running: 1
      },
      Hn = 50;

    function Fn(cB) {
      console.assert(cB.state.current === Xn.readyForNext);
      const Bc = cB.queue.current,
        nc = cB.foreground.current;
      if (Bc.length > 0 && nc) {
        const {
          toFraction: Vc,
          toDuration: Ic
        } = Bc.shift();
        cB.state.current = Xn.running, nc.style.transition = `transform ${Math.max(Ic-Hn,0)}ms linear`, nc.classList.remove("Complete"), cB.timeout.current = setTimeout((() => {
          nc.style.transform = `scaleX(${Vc})`, cB.timeout.current = setTimeout((() => {
            1 === Vc && nc.classList.add("Complete"), cB.state.current = Xn.readyForNext, Fn(cB)
          }), Math.max(Ic - Hn, 0))
        }), Hn)
      }
    }

    function Jn() {
      const cB = (0, Vc.useRef)([]),
        Bc = (0, Vc.useRef)(Xn.readyForNext),
        nc = (0, Vc.useRef)(void 0),
        Ic = (0, Vc.useRef)(null),
        rB = (0, Vc.useRef)({
          queue: cB,
          state: Bc,
          timeout: nc,
          foreground: Ic
        }),
        uc = (0, Sc.j)("showProgressBar");
      if ((0, Vc.useLayoutEffect)((() => (uc && Bc.current === Xn.readyForNext && Fn(rB.current), () => {
          Bc.current = Xn.readyForNext, clearTimeout(nc.current), uc && (cB.current.length = 0)
        })), [uc]), (0, sc.f)("progressBarUpdate", (nc => {
          let {
            toFraction: Vc,
            toDuration: Ic
          } = nc;
          cB.current.push({
            toFraction: Vc,
            toDuration: Ic
          }), Bc.current === Xn.readyForNext && Fn(rB.current)
        })), !uc) return null;
      return (0, Pc.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Pc.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Ic,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var jV = nc(35345),
      Rn = nc(2840),
      iV = nc(2838),
      Kn = nc(1464),
      xV = nc(1314),
      dn = nc(1466),
      An = nc(1495),
      Gn = nc(1718),
      cI = nc(988),
      BV = nc(3496),
      nV = nc(1283),
      VV = nc(1199);
    const IV = 2e4,
      rI = 6e5,
      uV = new Set;

    function sV() {
      const {
        gameEntrySource: cB,
        loadingOverlayVisible: Bc
      } = (0, aB.j)(["gameEntrySource", "loadingOverlayVisible"]), nc = (0, hc.e)("connectedGame", (cB => (0, BV.g)(cB) ? cB.lobbyName : null)), Ic = (0, hc.g)("localPlayerAlive"), rB = (0, hc.e)("players", (cB => null !== cB.localId && void 0 !== cB.byId[cB.localId])), [uc, sc] = (0, Vc.useState)(null);
      return !Bc && Ic && rB && null !== nc && uc !== nc && sc(nc), (0, Vc.useEffect)((() => {
        if (!(0, BV.j)(cB) || null === uc || uc !== nc || uV.has(uc)) return;
        const Bc = setTimeout((() => {
          uV.add(uc), async function(cB) {
            const Bc = await cI.userContextManager.getCurrentUserContext();
            let nc;
            try {
              nc = (await xV.e.getWorldOwnerFriendOffer(Bc)).owner
            } catch (Ic) {
              return void console.warn("Couldn't ask who owns this world", Ic)
            }
            if (!nc || (0, BV.p)(nc.name, Date.now())) return;
            const Vc = nc;
            ! function(cB, Bc) {
              const nc = Date.now() + rI;
              let Vc = Date.now(),
                Ic = 0;
              const rB = () => {
                const uc = Date.now(),
                  sc = Tc.gameBridge.latest("connectedGame");
                sc.lobbyName !== cB || uc > nc || (null === sc.websocketUrl ? Vc = 1 / 0 : Vc === 1 / 0 && !aB.d.get("loadingOverlayVisible") && Tc.gameBridge.latest("localPlayerAlive") && (Vc = uc + IV), Ic = uc < Vc || !Tc.gameBridge.latest("localPlayerAlive") || aB.d.get("isUiHidden") || aB.d.get("isUiHiddenByCamera") || (0, An.isTypingInInput)() || aB.d.get("loadingOverlayVisible") || (0, Kn.p)() || (0, Rn.f)() || (0, VV.k)() ? 0 : Ic + 1, Ic >= 2 ? Bc() : setTimeout(rB, 500))
              };
              rB()
            }(cB, (() => {
              (0, BV.d)(dn.e.getSocialState().friends, Vc.name) || ((0, BV.l)(Vc.name, Date.now()), Gn.c.showWorldOwnerOffer(Vc), (0, nV.h)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(uc).catch((cB => {
            console.error("Failed to offer the world's owner as a friend", cB)
          }))
        }), IV);
        return () => {
          clearTimeout(Bc)
        }
      }), [cB, uc, nc]), null
    }
    var MV = nc(1540);
    const PV = (0, Vc.memo)((function(cB) {
        let {
          durationMs: Bc,
          endsAtMs: nc
        } = cB;
        const [, Ic] = (0, Vc.useReducer)((cB => cB + 1), 0), rB = null === nc ? Bc : Math.max(nc - Date.now(), 0);
        return (0, Vc.useEffect)((() => {
          if (null === nc || rB <= 0) return;
          const cB = setTimeout(Ic, rB - 1e3 * (Math.ceil(rB / 1e3) - 1));
          return () => {
            clearTimeout(cB)
          }
        })), (0, Pc.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, rV.Z)(rB)
        })
      })),
      qI = (0, Vc.memo)((function() {
        const cB = (0, hc.g)("localEffects");
        return (0, Pc.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(cB).map((cB => {
            let [Bc, {
              icon: nc,
              displayName: Vc,
              durationMs: Ic,
              endsAtMs: rB,
              level: uc
            }] = cB;
            return (0, Pc.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Pc.jsx)(MV.c, {
                icon: nc,
                className: "EffectInfoIcon"
              }), (0, Pc.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Ic ? "0" : "1rem"
                },
                children: [(0, Pc.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Pc.jsx)(Mc.e, {
                    text: null !== Vc && void 0 !== Vc ? Vc : Bc,
                    className: "EffectInfoName SmallTextBold"
                  }), uc > 1 && (0, Pc.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, rV.I)(uc)
                  })]
                }), null !== Ic && (0, Pc.jsx)(PV, {
                  durationMs: Ic,
                  endsAtMs: rB
                })]
              })]
            }, Bc)
          }))
        })
      }));
    var OV = nc(35353),
      TV = nc(35507),
      fV = nc(174),
      mI = nc(1194),
      eV = nc(2180);

    function tI(cB, Bc) {
      (0, Vc.useLayoutEffect)((() => {
        let Bc, nc;
        const Vc = requestAnimationFrame((() => {
          nc = setTimeout((() => {
            nc = void 0;
            const Vc = cB();
            Bc = "function" === typeof Vc ? Vc : void 0
          }), 0)
        }));
        return () => {
          var cB;
          cancelAnimationFrame(Vc), clearTimeout(nc), null === (cB = Bc) || void 0 === cB || cB()
        }
      }), Bc)
    }

    function SV(cB) {
      return 5 * (cB ? 4 : 3)
    }

    function yI(cB, Bc, nc, Vc, Ic) {
      const rB = cB.getContext("2d");
      if (!rB) return null;
      const uc = Bc.fontFamily,
        sc = Bc.fontWeight;
      return cB.width = nc, cB.height = Vc, rB.fillStyle = Bc.color, rB.textAlign = "center", rB.textBaseline = "middle", rB.font = `${sc} ${Ic}px ${uc}`, rB
    }
    const zI = (0, Vc.memo)((function(cB) {
      let {
        show: Bc
      } = cB;
      const nc = (0, Vc.useRef)(null),
        Ic = (0, Vc.useRef)(null),
        rB = (0, Vc.useRef)(null);
      return (0, Vc.useEffect)((() => {
        let cB = 0,
          Bc = 0,
          nc = 0,
          Vc = 0;
        const uc = (0, En.g)((() => {
          var uc;
          cB++, Bc++;
          const sc = performance.now();
          if (sc - nc < 1e3) return;
          const Mc = Math.round(cB / (sc - nc) * 1e3);
          if (Ic.current = Mc, null === (uc = rB.current) || void 0 === uc || uc.call(rB, Mc), cB = 0, nc = sc, Mc < 55) {
            var Pc, qB;
            Vc += 1;
            const cB = pc.h.getItem("decreaseLoadDistPromptDeniedCount"),
              [Bc, nc] = zB.d.get("minChunkAddDist");
            if (Vc >= 15 && function(cB, Bc) {
                const nc = Tc.gameBridge.lookup("zC", null);
                return null !== nc && (nc.horizontal > cB || nc.vertical > Bc)
              }(Bc, nc) && (null !== (Pc = pc.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== Pc ? Pc : 0) + 432e5 < Date.now() && (null !== (qB = pc.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== qB ? qB : 0) < 3) {
              pc.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
              mI.NotificationProvider.showPromptPopup({
                title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
                confirmText: "general:yes",
                cancelText: "general:no",
                unlockPointerKey: "chunkLoadDistanceLagPopup"
              }).getResult().then((Vc => {
                Vc ? (Tc.gameBridge.send("setChunkAddDistance", {
                  horizontal: Bc,
                  vertical: nc
                }), pc.h.setItem("chunkHorizAddDist", Bc), pc.h.setItem("chunkVertAddDist", nc), yB.i.Vu("updatedChunkLoadDist"), pc.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : pc.h.setItem("decreaseLoadDistPromptDeniedCount", cB + 1)
              }))
            }
          } else Vc = 0
        }));
        let sc = performance.now();
        Bc = 0;
        let Mc = null,
          Pc = !document.hidden;

        function qB() {
          const cB = performance.now() - sc,
            nc = 1e3 * Bc / cB;
          Pc && (null === Mc && (Mc = nc), eV.c.setFps(nc, Mc)), Bc = 0, sc = performance.now()
        }
        let Oc = setInterval(qB, 15e3);

        function fc() {
          const cB = Pc;
          Pc = !document.hidden, !cB && Pc && (Bc = 0, sc = performance.now(), clearInterval(Oc), Oc = setInterval(qB, 15e3))
        }
        return document.addEventListener("visibilitychange", fc), () => {
          uc(), document.removeEventListener("visibilitychange", fc), clearInterval(Oc)
        }
      }), []), tI((() => {
        var cB;
        if (!Bc || rB.current) return;
        const Vc = nc.current,
          uc = window.getComputedStyle(Vc.parentElement),
          sc = null !== (cB = window.devicePixelRatio) && void 0 !== cB ? cB : 1,
          Mc = parseFloat(uc.fontSize) * sc,
          Pc = Math.round(3 * Mc),
          qB = Math.round(Mc),
          Oc = yI(Vc, uc, Pc, qB, Mc);
        if (!Oc) return;
        const Tc = cB => {
          Oc.clearRect(0, 0, Vc.width, Vc.height), Oc.fillText(cB.toString(), Vc.width / 2, Vc.height / 2)
        };
        rB.current = Tc, null !== Ic.current && Tc(Ic.current)
      }), [Bc]), (0, Pc.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: Bc ? "flex" : "none"
        },
        children: [(0, Pc.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Pc.jsx)("canvas", {
          className: "FpsCanvas",
          ref: nc,
          width: 48,
          height: 16
        })]
      })
    }));

    function pV(cB) {
      return Math.sign(cB) * Math.round(100 * Math.abs(cB))
    }

    function hV(cB) {
      let {
        getCoordinates: Bc,
        showChunkCoords: nc
      } = cB;
      const Ic = (0, Vc.useRef)(null);
      return tI((() => {
        var cB;
        const Vc = Ic.current,
          rB = window.getComputedStyle(Vc.parentElement),
          uc = null !== (cB = window.devicePixelRatio) && void 0 !== cB ? cB : 1,
          sc = parseFloat(rB.fontSize) * uc,
          Mc = Math.round(sc * SV(nc)),
          Pc = Math.round(sc),
          qB = yI(Vc, rB, Mc, Pc, sc);
        if (!qB) return;
        let Oc = !0,
          fc = 0,
          mB = 0,
          ec = 0,
          tB = 0,
          Sc = 0,
          yB = 0;
        const zB = () => {
          Oc = !0
        };
        document.fonts.load(qB.font).then(zB, zB);
        const pc = () => {
          yI(Vc, rB, Mc, Pc, sc), zB()
        };
        Vc.addEventListener("contextrestored", pc);
        const hc = (0, En.k)((() => {
          var cB, Ic, rB, uc, Mc, Pc;
          const [zB, pc, hc] = Bc(), aB = pV(zB), lc = pV(pc), Yc = pV(hc);
          let Lc = null;
          if (nc) {
            const cB = Tc.gameBridge.lookup("localPos", null);
            Lc = (0, Ac.W)(cB[0], cB[1], cB[2])
          }
          const gB = null !== (cB = null === (Ic = Lc) || void 0 === Ic ? void 0 : Ic[0]) && void 0 !== cB ? cB : 0,
            Uc = null !== (rB = null === (uc = Lc) || void 0 === uc ? void 0 : uc[1]) && void 0 !== rB ? rB : 0,
            bB = null !== (Mc = null === (Pc = Lc) || void 0 === Pc ? void 0 : Pc[2]) && void 0 !== Mc ? Mc : 0;
          if (!Oc && aB === fc && lc === mB && Yc === ec && gB === tB && Uc === Sc && bB === yB) return;
          Oc = !1, fc = aB, mB = lc, ec = Yc, tB = gB, Sc = Uc, yB = bB;
          const Zc = [(aB / 100).toFixed(2), (lc / 100).toFixed(2), (Yc / 100).toFixed(2)];
          Lc && Zc.unshift(`${gB} ${Uc} ${bB}`), qB.clearRect(0, 0, Vc.width, Vc.height);
          const Qc = Vc.height / 2;
          for (let Bc = 0; Bc < Zc.length; Bc++) qB.fillText(Zc[Bc], 5 * sc * (Bc + .5), Qc)
        }));
        return () => {
          hc(), Vc.removeEventListener("contextrestored", pc)
        }
      }), [Bc, nc]), (0, Pc.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Pc.jsx)("canvas", {
          ref: Ic,
          className: "CoordinateCanvas",
          width: 16 * SV(nc),
          height: 16
        })
      })
    }
    const aI = (0, Vc.memo)((function() {
        const cB = (0, Vc.useCallback)((() => {
          const cB = Tc.gameBridge.lookup("localPos", null);
          return [cB[0], cB[1], cB[2]]
        }), []);
        return (0, Pc.jsx)(hV, {
          getCoordinates: cB,
          showChunkCoords: !1
        })
      })),
      lV = (0, Vc.memo)((function() {
        const cB = (0, Vc.useCallback)((() => {
          const cB = Tc.gameBridge.lookup("localPos", null),
            Bc = fV.e.kI;
          let nc = cB[0] % Bc,
            Vc = cB[1] % Bc,
            Ic = cB[2] % Bc;
          return nc < 0 && (nc += Bc), Vc < 0 && (Vc += Bc), Ic < 0 && (Ic += Bc), [nc, Vc, Ic]
        }), []);
        return (0, Pc.jsx)(hV, {
          getCoordinates: cB,
          showChunkCoords: !0
        })
      }));
    var YV = nc(1674),
      LV = nc(1188),
      gI = nc(867),
      UV = nc(1090),
      bI = nc(107),
      ZV = nc(35363),
      QV = nc(1259),
      CV = nc(2329);
    const vI = (0, Vc.memo)((function() {
      const cB = (0, Sc.j)("auraPerLevel"),
        Bc = (0, Sc.j)("maxAuraLevel"),
        [nc, Ic] = (0, Vc.useState)((() => {
          var cB;
          return null !== (cB = Tc.gameBridge.latest("aura")) && void 0 !== cB ? cB : void 0
        })),
        [rB, uc] = (0, Vc.useState)((() => zB(nc))),
        [sc, Mc] = (0, Vc.useReducer)((cB => cB + 1), 0),
        qB = (0, Vc.useRef)(null),
        Oc = (0, Vc.useRef)([]),
        fc = (0, Vc.useRef)({
          width: 0,
          level: 0
        }),
        mB = (0, Vc.useRef)(null),
        tB = (0, Vc.useRef)(null);

      function yB() {
        if (null !== mB.current) return;
        if (0 === Oc.current.length) return;
        const {
          width: cB,
          level: Bc
        } = Oc.current.shift();
        let nc;
        if (Bc !== fc.current.level && Bc > fc.current.level !== cB > fc.current.width) {
          const Vc = Bc > fc.current.level;
          nc = Vc ? cB : 100 - cB, qB.current.style.transition = "none", qB.current.style.width = Vc ? "0%" : "100%", qB.current.offsetWidth
        } else nc = Math.abs(cB - fc.current.width);
        const Vc = 100 * nc / 20;
        qB.current.style.transition = `width ${Vc}ms linear`, uc(cB), fc.current = {
          width: cB,
          level: Bc
        }, Oc.current.length > 0 && (mB.current = setTimeout((() => {
          mB.current = null, yB()
        }), Vc))
      }

      function zB(nc) {
        return Math.floor(nc / cB) === Bc ? 100 : nc % cB / cB * 100
      }
      return (0, Vc.useEffect)((() => () => {
        clearTimeout(mB.current), clearTimeout(tB.current), mB.current = null, tB.current = null
      }), []), (0, hc.d)("aura", (Bc => {
        if (tB.current && clearTimeout(tB.current), null === Bc) return clearTimeout(mB.current), tB.current = null, mB.current = null, Oc.current = [], fc.current = {
          width: 0,
          level: 0
        }, Ic(void 0), void uc(0);
        tB.current = setTimeout((() => {
          const Vc = Math.floor(nc / cB),
            rB = Math.floor(Bc / cB),
            uc = zB(Bc);
          Bc > nc && ZV.d.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), rB > Vc ? (rB % 5 === 0 && ZV.d.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), Mc(), Oc.current.push({
            width: 100,
            level: Vc
          })) : rB < Vc && Oc.current.push({
            width: 0,
            level: Vc
          }), Bc === nc && rB === Vc || Oc.current.push({
            width: uc,
            level: rB
          }), Ic(Bc), yB()
        }), 50)
      })), (0, ec.f)(), 0 === Bc ? null : (0, Pc.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Pc.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Pc.jsx)(QV.c, {
            showSignal: sc,
            particleElement: (0, Pc.jsx)("img", {
              src: (0, CV.e)("glint"),
              alt: ""
            })
          }), (0, Pc.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, CV.e)("glint"),
            alt: "aura"
          }), (0, Pc.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== nc && void 0 !== nc ? nc : 0) / cB)
          })]
        }), (0, Pc.jsx)("div", {
          className: "AuraBar",
          children: (0, Pc.jsx)("div", {
            ref: qB,
            className: "AuraBarBackground",
            style: {
              width: `${rB}%`
            }
          })
        })]
      })
    }));
    var DV = nc(2001);

    function NV(cB) {
      cB.timed && (cB.endedAnimation = cB.timed.animation, cB.timed = null)
    }
    const EV = (0, Vc.memo)((function() {
      const cB = (0, Vc.useRef)(null),
        Bc = (0, Vc.useRef)(null),
        nc = (0, Vc.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, sc.f)("middleScreenBarInitiate", (cB => {
        var Vc;
        let {
          duration: Ic,
          U3: rB,
          horizBarRemOffset: uc
        } = cB;
        const sc = nc.current;
        NV(sc);
        const Mc = Bc.current;
        if (!(Ic >= 0) || !Mc) return;
        null === (Vc = sc.endedAnimation) || void 0 === Vc || Vc.cancel(), sc.endedAnimation = null;
        const Pc = Mc.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Ic,
          fill: "forwards"
        });
        sc.timed = {
          U3: rB,
          horizBarRemOffset: uc,
          animation: Pc
        }
      })), (0, sc.f)("middleScreenBarRemove", (() => {
        NV(nc.current)
      })), (0, Vc.useEffect)((() => {
        const Vc = nc.current;
        let Ic = Number.NaN,
          rB = Number.NaN,
          uc = Number.NaN;
        return (0, En.f)((() => {
          var nc, sc, Mc, Pc;
          const qB = cB.current,
            Oc = Bc.current;
          if (!qB || !Oc) return;
          null !== (nc = Vc.timed) && void 0 !== nc && nc.U3 && "finished" === Vc.timed.animation.playState && NV(Vc), null === (sc = Vc.endedAnimation) || void 0 === sc || sc.cancel(), Vc.endedAnimation = null;
          let fc = Vc.timed ? 1 : 0;
          if (!Vc.timed) {
            const cB = Tc.gameBridge.lookup("momentumFrac", null);
            fc = cB > 0 ? 1 : 0, cB !== uc && (uc = cB, Oc.style.transform = `scaleX(${cB})`)
          }
          const mB = null !== (Mc = null === (Pc = Vc.timed) || void 0 === Pc ? void 0 : Pc.horizBarRemOffset) && void 0 !== Mc ? Mc : 0;
          mB === Ic && fc === rB || (Ic = mB, rB = fc, qB.style.transform = `translateX(calc(-50% + ${mB}rem)) scaleX(${fc})`)
        }))
      }), []), (0, Pc.jsx)("div", {
        className: "MiddleScreenBar",
        ref: cB,
        children: (0, Pc.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: Bc
        })
      })
    }));
    var oV = nc(3756),
      WV = nc(2159);

    function wV() {
      const {
        t: cB
      } = (0, Uc.x)(), Bc = (0, sc.g)("serverUpdating", null), nc = (0, WV.b)(250, null !== Bc);
      return null === Bc || nc - Bc > 3e4 ? null : (0, Pc.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Pc.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: cB("updateWaiting:updatingIn", {
            countdown: (0, oV.s)(Bc - nc)
          })
        }), (0, Pc.jsx)("div", {
          children: cB("updateWaiting:bringYouBack")
        })]
      })
    }
    var kI = nc(35526),
      XV = nc(1613);
    const HV = [{
        translationKey: "general:interact"
      }],
      FV = (0, Vc.memo)((function() {
        const cB = (0, Sc.j)("crosshairText"),
          {
            interactPrompt: Bc,
            blockText: nc,
            neededTool: Ic
          } = (0, hc.g)("crosshairTarget"),
          {
            isTouchScreen: rB
          } = (0, aB.j)(["isTouchScreen"]),
          uc = (0, Yc.s)(),
          qB = (0, gB.c)("alt-fire");
        (0, Vc.useEffect)((() => {
          Tc.gameBridge.send("setCrosshairInteractPrompt", !rB || uc ? "key" : (0, qn.l)() ? "touch" : "off")
        }), [rB, uc]);
        const [Oc, fc] = (0, Vc.useReducer)((cB => cB + 1), 0);
        (0, sc.f)("customBindingsChanged", fc);
        var mB;
        if (null !== Bc && (uc && null !== qB || !rB && null !== (0, XV.q)("alt-fire"))) return (0, Pc.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Pc.jsx)(lc.c, {
            noaAction: "alt-fire"
          }), (0, Pc.jsx)(Mc.e, {
            text: null !== (mB = Bc.label) && void 0 !== mB ? mB : HV
          })]
        });
        let ec = null;
        return null !== nc ? ec = nc : null !== cB && "" !== cB ? ec = cB : null !== Ic && (ec = [{
          icon: Ic,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), ec ? (0, Pc.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Pc.jsx)(Mc.e, {
            text: ec
          })
        }) : null
      }));
    var JV = nc(2010);
    const jI = (0, Vc.memo)((function() {
      var cB;
      const {
        interactPrompt: Bc
      } = (0, hc.g)("crosshairTarget"), {
        openInGameMenuName: nc,
        openEverythingMenuName: Vc
      } = (0, aB.j)(["openInGameMenuName", "openEverythingMenuName"]), Ic = (0, sc.g)("aimingOverlay", "none"), rB = (0, jB.l)(), uc = (0, JV.c)();
      return null === Bc || null !== nc || null !== Vc || "sniper" === Ic || rB || uc ? null : (0, Pc.jsx)(RV, {
        label: null !== (cB = Bc.label) && void 0 !== cB ? cB : HV
      })
    }));

    function RV(cB) {
      let {
        label: Bc
      } = cB;
      const nc = (0, PB.q)(Kc.c.Interact, !1);
      return (0, Pc.jsx)("div", {
        ref: nc,
        className: "TouchInteractHit",
        children: (0, Pc.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Pc.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Pc.jsx)(Nc.e, {
              name: "hand-back-point-up"
            })
          }), (0, Pc.jsx)(Mc.e, {
            text: Bc
          })]
        })
      })
    }
    var iI = nc(3808),
      KV = nc(3876),
      xI = nc(35543),
      dV = nc(35549);
    const AV = (0, Vc.memo)((function() {
      const cB = (0, Sc.d)();
      return (0, Pc.jsx)(Pc.Fragment, {
        children: cB.map(((cB, Bc) => (0, Pc.jsx)(dV.b, {
          className: "HeaderChip",
          text: cB
        }, Bc)))
      })
    }));
    var GV = nc(2795),
      cr = nc(3712);
    const BI = (0, Vc.memo)((function() {
      const {
        t: cB
      } = (0, Uc.x)(), [Bc, nc] = (0, Vc.useState)(!1), Ic = (0, Vc.useRef)(!1), rB = function(cB) {
        let {
          gameNameWithVariation: Bc,
          lobbyName: nc
        } = cB;
        if ((0, gI.k)(Bc)) return nI;
        if ((0, UV.A)(nc)) return VI;
        return null
      }((0, hc.g)("connectedGame"));
      if (!rB || Bc) return null;
      const uc = cr.e[rB.target];
      return (0, Pc.jsx)(Dc.d, {
        tooltipInner: (0, Pc.jsx)("div", {
          children: cB(uc.reportButtonTooltip)
        }),
        children: (0, Pc.jsx)("div", {
          children: (0, Pc.jsx)(dB.P, {
            onClick: () => {
              Ic.current || (Ic.current = !0, (0, cr.g)(rB.reportPolicyIds, uc).then((cB => {
                null !== cB && void 0 !== cB && cB.selectedPolicyId && (Tc.gameBridge.send("reportLobbyOrGame", {
                  target: rB.target,
                  SV: cB.selectedPolicyId,
                  details: cB.ND
                }), nc(!0))
              })).finally((() => {
                Ic.current = !1
              })))
            }
          })
        })
      })
    }));
    const nI = {
        target: "customGame",
        reportPolicyIds: GV.d
      },
      VI = {
        target: "lobby",
        reportPolicyIds: GV.f
      };
    var II = nc(7699),
      rr = nc(35551),
      uI = nc(35554),
      sI = nc(35557),
      MI = nc(35559),
      PI = nc(35584);

    function qr(cB) {
      return cB instanceof Error && OI.has(cB.message) ? cB.message : void 0
    }
    const OI = new Set([PI.b.saveBusy.text, PI.b.saveClosed.text, PI.b.cropBusy.text]);
    let TI = !1;
    async function fI(cB, Bc) {
      var nc, Vc;
      const {
        files: Ic
      } = Bc, rB = Ic.replayKey();
      if (null === rB) return "none";
      if (TI) throw new Error(PI.b.saveBusy.text);
      const uc = null !== (nc = null === (Vc = Ic.saveRefusal) || void 0 === Vc ? void 0 : Vc.call(Ic)) && void 0 !== nc ? nc : null;
      if (null !== uc) throw new Error(uc);
      TI = !0;
      try {
        return await async function(cB, Bc, nc) {
          const {
            files: Vc
          } = Bc, Ic = () => Vc.replayKey() === nc, rB = (cB, Bc) => {
            Ic() && Vc.markSaved(cB, Bc)
          };
          let uc = null;
          if (Bc.pickerSupported()) {
            try {
              if (uc = await Bc.chooseFile(cB ? null : Vc.fileHandle()), null === uc) return "gs"
            } catch (Mc) {
              Bc.onFallback(Mc)
            }
            if (!Ic()) throw new Error(PI.b.saveClosed.text)
          }
          const sc = await Vc.encode();
          if (null === sc) {
            if (null !== uc) throw new Error(PI.b.saveClosed.text);
            return "none"
          }
          if (null !== uc) try {
            return await Bc.write(uc, sc), rB(uc), "written"
          } catch (Mc) {
            Bc.onFallback(Mc)
          }
          return rB(null, Bc.download(sc)), "downloaded"
        }(cB, Bc, rB)
      } finally {
        TI = !1
      }
    }
    var mr = nc(3652),
      eI = nc(83);
    const tr = [1, 2, 4, 8, 16, 32, 64];

    function SI(cB, Bc) {
      return Math.max(0, Math.min(cB, Bc))
    }

    function yr(cB, Bc, nc) {
      return nc <= Bc ? 0 : (cB - Bc) / (nc - Bc) * 100
    }

    function zr(cB, Bc, nc) {
      const Vc = nc - Bc;
      return Math.round(Bc + cB / 100 * Vc)
    }

    function pI(cB, Bc) {
      const nc = Math.floor(cB / Bc / 60),
        Vc = Math.floor(cB / Bc % 60),
        Ic = cB % Bc;
      return `${nc.toString().padStart(2,"0")}:${Vc.toString().padStart(2,"0")}:${Ic.toString().padStart(2,"0")}`
    }

    function hI(cB) {
      return Number.isInteger(cB) || tr.includes(cB) ? `${Math.round(cB)}\xd7` : `${cB.toFixed(1)}\xd7`
    }

    function ar(cB, Bc) {
      const nc = tr.indexOf(cB);
      if (-1 !== nc) return "in" === Bc ? tr[Math.min(nc + 1, tr.length - 1)] : tr[Math.max(nc - 1, 0)];
      if ("in" === Bc) {
        for (const Bc of tr)
          if (Bc >= cB) return Bc;
        return cB
      }
      for (let Vc = tr.length - 1; Vc >= 0; Vc--)
        if (tr[Vc] <= cB) return tr[Vc];
      return tr[0]
    }

    function lI(cB, Bc) {
      const nc = Bc.getBoundingClientRect();
      if (nc.width <= 0) return 0;
      const Vc = (cB - nc.left) / nc.width * 100;
      return Math.max(0, Math.min(100, Vc))
    }

    function YI(cB, Bc) {
      return Bc <= 0 ? 0 : cB / Bc * 100
    }

    function LI(cB, Bc, nc) {
      const Vc = [];
      let Ic = Math.ceil(cB / nc) * nc;
      for (; Ic <= Bc;) Vc.push(Ic), Ic += nc;
      return Vc
    }
    var gr = nc(35592);
    const UI = [{
        label: "Linear",
        easing: gr.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: gr.e
      }, {
        label: "Ease Out",
        easing: gr.g
      }, {
        label: "Ease In Out",
        easing: gr.d
      }],
      br = 200,
      ZI = 150;

    function QI(cB) {
      const Bc = cB => Number(cB.toFixed(3)).toString();
      return `cubic-bezier(${Bc(cB[0])}, ${Bc(cB[1])}, ${Bc(cB[2])}, ${Bc(cB[3])})`
    }

    function CI(cB, Bc) {
      return {
        cx: 25 + cB * ZI,
        cy: 25 + (1 - Bc) * ZI
      }
    }

    function vr(cB, Bc, nc) {
      const Vc = cB - nc.left,
        Ic = Bc - nc.top;
      return {
        x: rV.b.clamp((Vc - 25) / ZI, 0, 1),
        y: rV.b.clamp(1 - (Ic - 25) / ZI, -1, 2)
      }
    }

    function DI(cB, Bc, nc, Vc, Ic) {
      return {
        x: (0, gr.o)(cB, nc, Ic),
        y: (0, gr.o)(Bc, Vc, Ic)
      }
    }
    const NI = (0, Vc.memo)((function(cB) {
      let {
        value: Bc,
        onChange: nc
      } = cB;
      const Ic = (0, Vc.useRef)(null),
        rB = (0, Vc.useRef)(null),
        [uc, sc] = (0, Vc.useState)(null),
        Mc = (0, Vc.useCallback)((() => {
          const cB = Ic.current;
          if (!cB) return;
          const nc = cB.getContext("2d");
          if (!nc) return;
          const Vc = window.devicePixelRatio || 1;
          cB.width = br * Vc, cB.height = br * Vc, nc.setTransform(Vc, 0, 0, Vc, 0, 0), nc.clearRect(0, 0, br, br), nc.fillStyle = "rgba(38, 52, 93, 0.85)", nc.fillRect(0, 0, br, br), nc.beginPath();
          const rB = CI(0, 0),
            sc = CI(1, 1);
          nc.moveTo(rB.cx, rB.cy), nc.lineTo(sc.cx, sc.cy), nc.strokeStyle = "rgba(164, 164, 164, 0.35)", nc.setLineDash([3, 3]), nc.stroke(), nc.setLineDash([]);
          const [Mc, Pc, qB, Oc] = Bc, Tc = CI(Mc, Pc), fc = CI(qB, Oc);
          nc.strokeStyle = "rgba(252, 211, 115, 0.55)", nc.lineWidth = 1.5, nc.beginPath(), nc.moveTo(rB.cx, rB.cy), nc.lineTo(Tc.cx, Tc.cy), nc.moveTo(sc.cx, sc.cy), nc.lineTo(fc.cx, fc.cy), nc.stroke(), nc.strokeStyle = "#fcd373", nc.lineWidth = 2, nc.beginPath();
          for (let Bc = 0; Bc <= 50; Bc++) {
            const cB = DI(Mc, Pc, qB, Oc, Bc / 50),
              Vc = CI(cB.x, cB.y);
            0 === Bc ? nc.moveTo(Vc.cx, Vc.cy) : nc.lineTo(Vc.cx, Vc.cy)
          }
          nc.stroke();
          const mB = (cB, Bc, Vc) => {
            nc.beginPath(), nc.arc(cB, Bc, Vc ? 6 : 5, 0, 2 * Math.PI), nc.fillStyle = Vc ? "#ffb914" : "#fcd373", nc.fill(), nc.strokeStyle = "#1a1f2e", nc.lineWidth = 1.5, nc.stroke()
          };
          mB(Tc.cx, Tc.cy, "p1" === uc), mB(fc.cx, fc.cy, "p2" === uc)
        }), [uc, Bc]);
      (0, Vc.useEffect)((() => {
        Mc()
      }), [Mc]);
      const qB = (0, Vc.useCallback)(((cB, Vc) => {
          const uc = Ic.current,
            sc = rB.current;
          if (!uc || !sc) return;
          const Mc = uc.getBoundingClientRect(),
            {
              x: Pc,
              y: qB
            } = vr(cB, Vc, Mc);
          nc("p1" === sc ? [Pc, qB, Bc[2], Bc[3]] : [Bc[0], Bc[1], Pc, qB])
        }), [nc, Bc]),
        Oc = (0, Vc.useCallback)((cB => {
          const nc = Ic.current;
          if (!nc) return;
          const Vc = nc.getBoundingClientRect();
          let {
            x: uc,
            y: Mc
          } = vr(cB.clientX, cB.clientY, Vc);
          uc = rV.b.clamp(uc, 0, 1), Mc = rV.b.clamp(Mc, 0, 1);
          const [Pc, Oc, Tc, fc] = Bc.map((cB => rV.b.clamp(cB, 0, 1))), mB = Math.hypot(uc - Pc, Mc - Oc), ec = Math.hypot(uc - Tc, Mc - fc), tB = mB <= ec ? "p1" : "p2";
          ("p1" === tB ? mB : ec) > .12 || (rB.current = tB, sc(tB), nc.setPointerCapture(cB.pointerId), qB(cB.clientX, cB.clientY))
        }), [qB, Bc]),
        Tc = (0, Vc.useCallback)((cB => {
          rB.current && qB(cB.clientX, cB.clientY)
        }), [qB]),
        fc = (0, Vc.useCallback)((cB => {
          rB.current = null, sc(null), cB.currentTarget.hasPointerCapture(cB.pointerId) && cB.currentTarget.releasePointerCapture(cB.pointerId)
        }), []);
      return (0, Pc.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Pc.jsx)("canvas", {
          ref: Ic,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: br,
            height: br
          },
          onPointerDown: Oc,
          onPointerMove: Tc,
          onPointerUp: fc,
          onPointerCancel: fc
        }), (0, Pc.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: QI(Bc)
        })]
      })
    }));
    var EI = nc(1492),
      oI = nc(1480);
    const WI = 12;

    function wI(cB) {
      return {
        left: cB.left + cB.width / 2,
        top: cB.top - 8
      }
    }

    function kr(cB, Bc) {
      const [nc, Ic] = (0, Vc.useState)(null);
      return (0, Vc.useLayoutEffect)((() => {
        const nc = cB.current;
        if (!nc) return;
        const {
          width: Vc,
          height: rB
        } = nc.getBoundingClientRect();
        Ic(function(cB, Bc, nc) {
          const Vc = window.innerWidth,
            Ic = window.innerHeight,
            rB = Bc / 2;
          let uc = cB.left + cB.width / 2;
          uc = Math.max(WI + rB, Math.min(uc, Vc - WI - rB));
          const sc = cB.top - 8 - WI,
            Mc = Ic - cB.bottom - 8 - WI,
            Pc = sc < nc && Mc >= sc;
          let qB;
          Pc ? (qB = cB.bottom + 8, qB + nc > Ic - WI && (qB = Ic - WI - nc), qB = Math.max(WI, qB)) : (qB = cB.top - 8, qB - nc < WI && (qB = WI + nc));
          return {
            left: uc,
            top: qB,
            placeBelow: Pc
          }
        }(Bc, Vc, rB))
      }), [Bc, cB]), nc
    }

    function XI(cB, Bc, nc) {
      (0, Vc.useEffect)((() => (0, oI.c)("pointerdown", (Vc => {
        var Ic, rB;
        const uc = Vc.target;
        uc instanceof Node && (null !== (Ic = cB.current) && void 0 !== Ic && Ic.contains(uc) || null !== nc && void 0 !== nc && null !== (rB = nc.current) && void 0 !== rB && rB.contains(uc) || (0, EI.i)(uc) || Bc())
      }))), [nc, Bc, cB])
    }

    function HI(cB) {
      let {
        label: Bc,
        value: nc,
        onChange: Vc
      } = cB;
      return (0, Pc.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Pc.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: Bc
        }), (0, Pc.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((cB, Bc) => (0, Pc.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Pc.jsx)("span", {
              children: cB
            }), (0, Pc.jsx)("input", {
              type: "number",
              step: "any",
              value: nc[Bc],
              onChange: cB => {
                const Ic = Number.parseFloat(cB.target.value);
                if (Number.isNaN(Ic)) return;
                const rB = [nc[0], nc[1], nc[2]];
                rB[Bc] = Ic, Vc(rB)
              }
            })]
          }, cB)))
        })]
      })
    }
    const FI = (0, Vc.memo)((function(cB) {
        var Bc, nc, Ic;
        let {
          keyframe: uc,
          anchor: sc,
          hasOutgoingSegment: Mc,
          onClose: qB,
          onApply: Oc,
          onDelete: Tc,
          onUseCurrentCamera: fc
        } = cB;
        const mB = (0, Vc.useRef)(null),
          ec = kr(mB, sc.rect),
          [tB, Sc] = (0, Vc.useState)((() => [uc.position[0], uc.position[1], uc.position[2]])),
          [yB, zB] = (0, Vc.useState)((() => [uc.direction[0], uc.direction[1], uc.direction[2]])),
          [pc, hc] = (0, Vc.useState)((() => uc.easing));
        (0, Vc.useEffect)((() => {
          Sc([uc.position[0], uc.position[1], uc.position[2]]), zB([uc.direction[0], uc.direction[1], uc.direction[2]]), hc(uc.easing)
        }), [uc]), XI(mB, qB);
        const aB = (0, Vc.useCallback)((() => {
            Oc({
              cn: uc.cn,
              position: tB,
              direction: yB,
              easing: pc
            }), qB()
          }), [yB, pc, uc.cn, Oc, qB, tB]),
          lc = (0, Vc.useCallback)((() => {
            Tc(uc.cn), qB()
          }), [uc.cn, Tc, qB]),
          Yc = (0, Vc.useCallback)((() => {
            const cB = fc();
            cB && (Sc([cB.position[0], cB.position[1], cB.position[2]]), zB([cB.direction[0], cB.direction[1], cB.direction[2]]))
          }), [fc]),
          Lc = wI(sc.rect);
        return (0, Pc.jsxs)("div", {
          ref: mB,
          className: rB()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (Bc = null === ec || void 0 === ec ? void 0 : ec.placeBelow) && void 0 !== Bc && Bc,
            Positioned: null !== ec
          }),
          style: {
            left: `${null!==(nc=null===ec||void 0===ec?void 0:ec.left)&&void 0!==nc?nc:Lc.left}px`,
            top: `${null!==(Ic=null===ec||void 0===ec?void 0:ec.top)&&void 0!==Ic?Ic:Lc.top}px`
          },
          onPointerDown: cB => {
            cB.stopPropagation()
          },
          children: [(0, Pc.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Pc.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Pc.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", sc.cn]
            })]
          }), (0, Pc.jsx)(HI, {
            label: "Position",
            value: tB,
            onChange: Sc
          }), (0, Pc.jsx)(HI, {
            label: "Direction",
            value: yB,
            onChange: zB
          }), Mc && (0, Pc.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Pc.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Pc.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: UI.map((cB => {
                const Bc = (nc = pc, Vc = cB.easing, nc[0] === Vc[0] && nc[1] === Vc[1] && nc[2] === Vc[2] && nc[3] === Vc[3]);
                var nc, Vc;
                return (0, Pc.jsx)(dB.Q, {
                  className: rB()("ReplayKeyframePopoverPreset", {
                    Active: Bc
                  }),
                  onClick: () => {
                    hc(cB.easing)
                  },
                  children: cB.label
                }, cB.label)
              }))
            }), (0, Pc.jsx)(NI, {
              value: pc,
              onChange: hc
            })]
          }), (0, Pc.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Pc.jsx)(dB.d, {
              className: "ReplayViewerCompactButton",
              onClick: Yc,
              children: "Use current view"
            }), (0, Pc.jsx)(dB.n, {
              className: "ReplayViewerCompactButton",
              onClick: aB,
              children: "Apply"
            }), (0, Pc.jsx)(dB.L, {
              className: "ReplayViewerCompactButton",
              onClick: lc,
              children: "Delete"
            })]
          })]
        })
      })),
      JI = (0, Vc.memo)((function(cB) {
        var Bc, nc, Ic;
        let {
          anchor: uc,
          hasPlaybackMark: sc,
          onClose: Mc,
          onMark: qB,
          onZoom: Oc,
          onCrop: Tc,
          onDeleteKeyframes: fc,
          onClearMark: mB
        } = cB;
        const ec = (0, Vc.useRef)(null),
          tB = kr(ec, uc.rect),
          Sc = wI(uc.rect),
          yB = {
            startTick: uc.startTick,
            endTick: uc.endTick
          },
          zB = uc.endTick > uc.startTick;
        return XI(ec, Mc), (0, Pc.jsx)("div", {
          ref: ec,
          className: rB()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (Bc = null === tB || void 0 === tB ? void 0 : tB.placeBelow) && void 0 !== Bc && Bc,
            Positioned: null !== tB
          }),
          style: {
            left: `${null!==(nc=null===tB||void 0===tB?void 0:tB.left)&&void 0!==nc?nc:Sc.left}px`,
            top: `${null!==(Ic=null===tB||void 0===tB?void 0:tB.top)&&void 0!==Ic?Ic:Sc.top}px`
          },
          onPointerDown: cB => {
            cB.stopPropagation()
          },
          children: (0, Pc.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Pc.jsx)(dB.n, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                qB(yB)
              },
              disabled: !zB,
              children: (0, Pc.jsx)("span", {
                children: " Play range "
              })
            }), (0, Pc.jsx)(dB.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Oc(yB)
              },
              children: (0, Pc.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Pc.jsx)(dB.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Tc(yB)
              },
              disabled: !zB,
              children: (0, Pc.jsx)("span", {
                children: " Crop "
              })
            }), (0, Pc.jsx)(dB.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                fc(yB)
              },
              children: (0, Pc.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), sc && (0, Pc.jsx)(dB.Q, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                mB()
              },
              children: (0, Pc.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      jr = (0, Vc.memo)((function(cB) {
        var Bc, nc;
        let {
          maxTick: Ic,
          displayTick: uc,
          WBc: sc,
          cameraKeyframes: Mc,
          playbackMark: qB,
          onSeek: Oc,
          onPause: Tc,
          onScrubTickChange: fc,
          onMoveCameraKeyframe: mB,
          onUpdateCameraKeyframe: ec,
          onDeleteCameraKeyframe: tB,
          onUseCurrentCamera: Sc,
          onMarkRange: yB,
          onCropRange: zB,
          onDeleteKeyframesInRange: pc,
          onClearMark: hc,
          zoomLevel: aB,
          onZoomLevelChange: lc
        } = cB;
        const Yc = (0, Vc.useRef)(null),
          Lc = (0, Vc.useRef)(null),
          gB = (0, Vc.useRef)(!1),
          Uc = (0, Vc.useRef)(!1),
          bB = (0, Vc.useRef)(aB),
          Zc = (0, Vc.useRef)(null),
          Qc = (0, Vc.useRef)(null),
          Cc = (0, Vc.useRef)(null),
          vB = (0, Vc.useRef)(null),
          [Dc, Nc] = (0, Vc.useState)(null),
          [Ec, oc] = (0, Vc.useState)(uc),
          [Wc, wc] = (0, Vc.useState)(null),
          [kB, Xc] = (0, Vc.useState)(null),
          [Hc, Fc] = (0, Vc.useState)(null),
          [Jc, jB] = (0, Vc.useState)(null),
          Rc = (0, Vc.useMemo)((() => Mc.map((cB => cB.cn))), [Mc]),
          iB = null !== Dc && void 0 !== Dc ? Dc : uc,
          {
            viewStart: Kc,
            viewEnd: xB
          } = (0, Vc.useMemo)((() => function(cB) {
            const Bc = cB.maxTick + 1,
              nc = Math.max(1, Math.ceil(Bc / cB.zoomLevel)),
              Vc = Math.floor(nc / 2);
            let Ic = cB.centerTick - Vc;
            return Ic = Math.max(0, Math.min(Ic, cB.maxTick - nc + 1)), {
              viewStart: Ic,
              viewEnd: Math.min(cB.maxTick, Ic + nc - 1)
            }
          }({
            maxTick: Ic,
            zoomLevel: aB,
            centerTick: Ec
          })), [Ic, aB, Ec]);
        (0, Vc.useEffect)((() => {
          if (null !== Dc || null !== Qc.current || null !== Cc.current || null !== vB.current) return;
          if (gB.current) return void(gB.current = !1);
          if (Uc.current) return void(Uc.current = !1);
          const cB = bB.current !== aB;
          bB.current = aB, cB && oc(uc)
        }), [aB, uc, Dc]);
        const dc = (0, Vc.useCallback)((cB => {
            let Bc = SI(cB, Ic);
            return qB && (Bc = Math.max(qB.inTick, Math.min(Bc, qB.outTick))), Bc
          }), [Ic, qB]),
          Ac = (0, Vc.useCallback)(((cB, Bc) => {
            const nc = dc(cB);
            Oc(nc), Bc && oc(nc)
          }), [dc, Oc]),
          Gc = (0, Vc.useCallback)(((cB, Bc) => {
            const nc = dc(cB);
            Nc(nc), fc(nc), Ac(nc, Bc)
          }), [dc, Ac, fc]),
          cn = (0, Vc.useCallback)((() => {
            Nc((cB => (null !== cB && oc(cB), null))), fc(null)
          }), [fc]),
          BB = (0, Vc.useCallback)((() => {
            Fc(null), jB(null)
          }), []),
          nB = (0, Vc.useCallback)((cB => {
            const Bc = Yc.current;
            if (!Bc) return 0;
            return SI(zr(lI(cB, Bc), Kc, xB), Ic)
          }), [Ic, xB, Kc]),
          VB = (0, Vc.useCallback)((cB => {
            const Bc = Lc.current;
            if (!Bc) return 0;
            return SI(zr(lI(cB, Bc), 0, Ic), Ic)
          }), [Ic]),
          IB = (0, Vc.useMemo)((() => {
            if (!Wc) return [...Rc];
            const cB = Rc.filter((cB => cB !== Wc.fromTick));
            return cB.push(Wc.previewTick), cB.sort(((cB, Bc) => cB - Bc)), cB
          }), [Rc, Wc]),
          rn = (0, Vc.useMemo)((() => {
            var cB;
            return kB && null !== (cB = Mc.find((cB => cB.cn === kB.cn))) && void 0 !== cB ? cB : null
          }), [Mc, kB]),
          uB = (0, Vc.useMemo)((() => !!rn && Mc.some((cB => cB.cn > rn.cn))), [Mc, rn]);
        (0, Vc.useEffect)((() => {
          kB && !rn && Xc(null)
        }), [kB, rn]), (0, Vc.useEffect)((() => {
          if (!Jc) return () => {};
          const cB = cB => {
            "Escape" === cB.key && BB()
          };
          return window.addEventListener("keydown", cB), () => {
            window.removeEventListener("keydown", cB)
          }
        }), [BB, Jc]);
        const sB = (0, Vc.useCallback)(((cB, Bc) => {
            BB(), Tc(), Oc(cB, {
              ignorePlaybackMark: !0
            }), Xc({
              cn: cB,
              rect: Bc.getBoundingClientRect()
            })
          }), [BB, Tc, Oc]),
          MB = (0, Vc.useCallback)(((cB, Bc) => nc => {
            0 === nc.button && (nc.stopPropagation(), Xc(null), BB(), Tc(), Zc.current = {
              fromTick: cB,
              startX: nc.clientX,
              startY: nc.clientY,
              didDrag: !1,
              track: Bc
            }, wc({
              fromTick: cB,
              previewTick: cB,
              track: Bc
            }), nc.currentTarget.setPointerCapture(nc.pointerId))
          }), [BB, Tc]),
          PB = (0, Vc.useCallback)((cB => {
            if (!Wc) return;
            cB.stopPropagation();
            const Bc = Zc.current;
            if (Bc && !Bc.didDrag) {
              const nc = cB.clientX - Bc.startX,
                Vc = cB.clientY - Bc.startY;
              Math.hypot(nc, Vc) > 5 && (Bc.didDrag = !0)
            }
            const nc = "detail" === Wc.track ? nB(cB.clientX) : VB(cB.clientX);
            nc !== Wc.previewTick && wc({
              ...Wc,
              previewTick: nc
            })
          }), [Wc, nB, VB]),
          qn = (0, Vc.useCallback)((cB => {
            if (!Wc) return;
            cB.stopPropagation();
            const Bc = Zc.current,
              nc = "detail" === Wc.track ? nB(cB.clientX) : VB(cB.clientX);
            Bc && !Bc.didDrag ? sB(Bc.fromTick, cB.currentTarget) : nc !== Wc.fromTick && mB(Wc.fromTick, nc), wc(null), Zc.current = null, cB.currentTarget.releasePointerCapture(cB.pointerId)
          }), [Wc, mB, sB, nB, VB]),
          OB = (0, Vc.useCallback)((cB => {
            if (0 !== cB.button) return;
            Xc(null), Tc();
            const Bc = nB(cB.clientX);
            Qc.current = {
              pointerId: cB.pointerId,
              startX: cB.clientX,
              startY: cB.clientY,
              startTick: Bc,
              currentTick: Bc,
              didSelect: !1
            }, Fc(null), jB(null), cB.currentTarget.setPointerCapture(cB.pointerId)
          }), [Tc, nB]),
          TB = (0, Vc.useCallback)((cB => {
            const Bc = Qc.current;
            if (!Bc || Bc.pointerId !== cB.pointerId) return;
            const nc = nB(cB.clientX);
            if (Bc.currentTick = nc, !Bc.didSelect) {
              const nc = cB.clientX - Bc.startX,
                Vc = cB.clientY - Bc.startY;
              if (Math.hypot(nc, Vc) <= 5) return;
              Bc.didSelect = !0
            }
            const Vc = Math.min(Bc.startTick, nc),
              Ic = Math.max(Bc.startTick, nc);
            Fc({
              startTick: Vc,
              endTick: Ic
            })
          }), [nB]),
          fB = (0, Vc.useCallback)((cB => {
            const Bc = Qc.current;
            if (!Bc || Bc.pointerId !== cB.pointerId) return;
            if (Qc.current = null, cB.currentTarget.releasePointerCapture(cB.pointerId), !Bc.didSelect) return BB(), void Ac(Bc.startTick, !0);
            const nc = nB(cB.clientX),
              Vc = Math.min(Bc.startTick, nc),
              Ic = Math.max(Bc.startTick, nc),
              rB = {
                startTick: Vc,
                endTick: Ic
              };
            Fc(rB);
            const uc = Yc.current;
            if (!uc) return;
            const sc = uc.getBoundingClientRect(),
              Mc = yr(Vc, Kc, xB) / 100,
              Pc = yr(Ic, Kc, xB) / 100,
              qB = sc.left + Mc * sc.width,
              Oc = sc.left + Pc * sc.width;
            jB({
              ...rB,
              rect: new DOMRect(qB, sc.top, Math.max(Oc - qB, 1), sc.height)
            })
          }), [BB, Ac, nB, xB, Kc]),
          mn = (0, Vc.useCallback)((cB => Bc => {
            if (0 !== Bc.button) return;
            Bc.stopPropagation(), Xc(null), BB(), Tc(), Cc.current = {
              pointerId: Bc.pointerId,
              track: cB
            }, Bc.currentTarget.setPointerCapture(Bc.pointerId);
            const nc = "detail" === cB ? nB(Bc.clientX) : VB(Bc.clientX);
            Gc(nc, !1)
          }), [BB, Tc, Gc, nB, VB]),
          eB = (0, Vc.useCallback)((cB => {
            const Bc = Cc.current;
            if (!Bc || Bc.pointerId !== cB.pointerId) return;
            cB.stopPropagation();
            const nc = "detail" === Bc.track ? nB(cB.clientX) : VB(cB.clientX);
            Gc(nc, !1)
          }), [Gc, nB, VB]),
          tn = (0, Vc.useCallback)((cB => {
            const Bc = Cc.current;
            Bc && Bc.pointerId === cB.pointerId && (cB.stopPropagation(), Cc.current = null, cB.currentTarget.releasePointerCapture(cB.pointerId), cn())
          }), [cn]),
          SB = (0, Vc.useCallback)((cB => {
            0 === cB.button && (BB(), Tc(), vB.current = {
              pointerId: cB.pointerId
            }, cB.currentTarget.setPointerCapture(cB.pointerId), Gc(VB(cB.clientX), !0))
          }), [BB, Tc, Gc, VB]),
          yn = (0, Vc.useCallback)((cB => {
            const Bc = vB.current;
            Bc && Bc.pointerId === cB.pointerId && Gc(VB(cB.clientX), !0)
          }), [Gc, VB]),
          zn = (0, Vc.useCallback)((cB => {
            const Bc = vB.current;
            Bc && Bc.pointerId === cB.pointerId && (vB.current = null, cB.currentTarget.releasePointerCapture(cB.pointerId), cn())
          }), [cn]),
          pB = (0, Vc.useCallback)((cB => {
            const Bc = Math.max(1, cB.endTick - cB.startTick + 1),
              nc = Ic + 1,
              Vc = nc / Bc,
              rB = Math.max(1, Math.ceil(nc / Vc)),
              uc = cB.startTick + Math.floor((rB - 1) / 2);
            Uc.current = !0, bB.current = Vc, oc(SI(uc, Ic)), lc(Vc), BB()
          }), [BB, Ic, lc]),
          hB = (0, Vc.useCallback)((cB => {
            yB(cB), BB()
          }), [BB, yB]),
          an = (0, Vc.useCallback)((cB => {
            zB(cB), BB()
          }), [BB, zB]),
          lB = (0, Vc.useCallback)((cB => {
            pc(cB), BB()
          }), [BB, pc]),
          YB = (0, Vc.useCallback)((() => {
            hc(), BB()
          }), [BB, hc]);
        (0, Vc.useEffect)((() => {
          const cB = Yc.current;
          if (!cB) return () => {};
          const Bc = Bc => {
            Bc.preventDefault();
            const nc = SI(zr(lI(Bc.clientX, cB), Kc, xB), Ic),
              Vc = Bc.deltaY < 0 ? "in" : "out",
              rB = ar(aB, Vc);
            rB !== aB && (gB.current = !0, oc(nc), lc(rB))
          };
          return cB.addEventListener("wheel", Bc, {
            passive: !1
          }), () => {
            cB.removeEventListener("wheel", Bc)
          }
        }), [Ic, lc, xB, Kc, aB]);
        const LB = yr(iB, Kc, xB),
          gn = YI(iB, Ic),
          UB = YI(Kc, Ic),
          bn = Ic > 0 ? YI(xB, Ic) : 100,
          ZB = null !== qB,
          QB = null !== (Bc = null === qB || void 0 === qB ? void 0 : qB.inTick) && void 0 !== Bc ? Bc : 0,
          CB = null !== (nc = null === qB || void 0 === qB ? void 0 : qB.outTick) && void 0 !== nc ? nc : Ic,
          vn = YI(QB, Ic),
          DB = Math.max(YI(CB, Ic) - vn, 0),
          NB = yr(Math.max(QB, Kc), Kc, xB),
          EB = yr(Math.min(CB, xB), Kc, xB),
          oB = Math.max(EB - NB, 0),
          WB = ZB && CB >= Kc && QB <= xB,
          wB = yr(QB, Kc, xB),
          kn = yr(CB, Kc, xB),
          XB = ZB && QB >= Kc && QB <= xB,
          HB = ZB && CB >= Kc && CB <= xB,
          FB = YI(QB, Ic),
          JB = YI(CB, Ic),
          jn = null !== Hc && void 0 !== Hc ? Hc : Jc ? {
            startTick: Jc.startTick,
            endTick: Jc.endTick
          } : null,
          RB = jn ? yr(Math.max(jn.startTick, Kc), Kc, xB) : 0,
          KB = jn ? yr(Math.min(jn.endTick, xB), Kc, xB) : 0,
          xn = Math.max(KB - RB, 0),
          dB = null !== jn && jn.endTick >= Kc && jn.startTick <= xB,
          AB = (0, Vc.useMemo)((() => LI(0, Ic, sc)), [Ic, sc]),
          GB = (0, Vc.useMemo)((() => LI(Kc, xB, sc)), [Kc, xB, sc]),
          cV = (0, Vc.useMemo)((() => IB.filter((cB => cB >= Kc && cB <= xB))), [IB, xB, Kc]),
          Bn = (0, Vc.useCallback)(((cB, Bc, nc) => {
            const Vc = "detail" === Bc ? yr(cB, Kc, xB) : YI(cB, Ic),
              uc = null !== Wc && nc === Wc.fromTick,
              sc = null !== kB && kB.cn === nc;
            return (0, Pc.jsx)("button", {
              type: "button",
              className: rB()("ReplayTimelineCameraKeyframeMarker", "detail" === Bc ? "Detail" : "Overview", {
                Dragging: uc,
                Selected: sc
              }),
              style: {
                left: `${Vc}%`
              },
              onPointerDown: MB(nc, Bc),
              onPointerMove: PB,
              onPointerUp: qn,
              onPointerCancel: qn,
              "aria-label": `Camera keyframe at tick ${nc}`
            }, `cam-${Bc}-${nc}`)
          }), [MB, kB, qn, Wc, Ic, PB, xB, Kc]),
          nn = (0, Vc.useCallback)((cB => Wc && cB === Wc.previewTick ? Wc.fromTick : cB), [Wc]);
        return Ic <= 0 ? null : (0, Pc.jsxs)("div", {
          className: "ReplayTimeline",
          children: [kB && rn && (0, eI.createPortal)((0, Pc.jsx)(FI, {
            keyframe: rn,
            anchor: kB,
            hasOutgoingSegment: uB,
            onClose: () => {
              Xc(null)
            },
            onApply: ec,
            onDelete: tB,
            onUseCurrentCamera: Sc
          }), document.body), Jc && (0, eI.createPortal)((0, Pc.jsx)(JI, {
            anchor: Jc,
            hasPlaybackMark: ZB,
            onClose: BB,
            onMark: hB,
            onZoom: pB,
            onCrop: an,
            onDeleteKeyframes: lB,
            onClearMark: YB
          }), document.body), (0, Pc.jsxs)("div", {
            className: rB()("ReplayTimelineOverviewSection", {
              Hidden: aB <= 1
            }),
            children: [(0, Pc.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Pc.jsxs)("div", {
              ref: Lc,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: SB,
              onPointerMove: yn,
              onPointerUp: zn,
              onPointerCancel: zn,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Ic,
              "aria-valuenow": iB,
              tabIndex: 0,
              children: [AB.map((cB => {
                const Bc = YI(cB, Ic);
                return (0, Pc.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${Bc}%`
                  }
                }, cB)
              })), ZB && (0, Pc.jsxs)(Pc.Fragment, {
                children: [(0, Pc.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${vn}%`,
                    width: `${DB}%`
                  }
                }), (0, Pc.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${FB}%`
                  },
                  "aria-hidden": !0
                }), (0, Pc.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${JB}%`
                  },
                  "aria-hidden": !0
                })]
              }), IB.map((cB => Bn(cB, "overview", nn(cB)))), (0, Pc.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${UB}%`,
                  width: `${Math.max(bn-UB,.5)}%`
                }
              }), (0, Pc.jsx)("button", {
                type: "button",
                className: rB()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== Dc
                }),
                style: {
                  left: `${gn}%`
                },
                onPointerDown: mn("overview"),
                onPointerMove: eB,
                onPointerUp: tn,
                onPointerCancel: tn,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Pc.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Pc.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Pc.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Pc.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [pI(Kc, sc), " \u2013 ", pI(xB, sc), aB > 1 && (0, Pc.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: hI(aB)
                })]
              })]
            }), (0, Pc.jsxs)("div", {
              ref: Yc,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: OB,
              onPointerMove: TB,
              onPointerUp: fB,
              onPointerCancel: fB,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": Kc,
              "aria-valuemax": xB,
              "aria-valuenow": iB,
              tabIndex: 0,
              children: [GB.map((cB => {
                const Bc = yr(cB, Kc, xB);
                return (0, Pc.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${Bc}%`
                  }
                }, cB)
              })), WB && (0, Pc.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${NB}%`,
                  width: `${oB}%`
                }
              }), XB && (0, Pc.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${wB}%`
                },
                "aria-label": `Play range start at tick ${QB}`
              }), HB && (0, Pc.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${kn}%`
                },
                "aria-label": `Play range end at tick ${CB}`
              }), dB && jn && (0, Pc.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${RB}%`,
                  width: `${xn}%`
                }
              }), cV.map((cB => Bn(cB, "detail", nn(cB)))), (0, Pc.jsx)("button", {
                type: "button",
                className: rB()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== Dc
                }),
                style: {
                  left: `${LB}%`
                },
                onPointerDown: mn("detail"),
                onPointerMove: eB,
                onPointerUp: tn,
                onPointerCancel: tn,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Pc.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Pc.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      RI = (0, Vc.memo)((function(cB) {
        let {
          enabled: Bc
        } = cB;
        const nc = (0, Vc.useRef)(!1),
          Ic = (0, Vc.useRef)(null),
          [uc, sc] = (0, Vc.useState)(!1),
          Mc = (0, Vc.useCallback)((cB => {
            Bc && 0 === cB.button && (nc.current = !0, sc(!0), Ic.current = {
              x: cB.clientX,
              y: cB.clientY
            }, cB.currentTarget.setPointerCapture(cB.pointerId))
          }), [Bc]),
          qB = (0, Vc.useCallback)((cB => {
            if (!Bc || !nc.current || !Ic.current) return;
            const Vc = cB.clientX - Ic.current.x,
              rB = cB.clientY - Ic.current.y;
            Ic.current = {
              x: cB.clientX,
              y: cB.clientY
            }, Tc.gameBridge.send("dragReplayCamera", {
              dx: Vc,
              dy: rB
            })
          }), [Bc]),
          Oc = (0, Vc.useCallback)((cB => {
            nc.current && (nc.current = !1, sc(!1), Ic.current = null, cB.currentTarget.releasePointerCapture(cB.pointerId))
          }), []);
        return Bc ? (0, Pc.jsx)("div", {
          className: rB()("ReplayViewerCameraDragSurface", {
            Dragging: uc
          }),
          onPointerDown: Mc,
          onPointerMove: qB,
          onPointerUp: Oc,
          onPointerCancel: Oc,
          "aria-hidden": !0
        }) : null
      }));
    var ir = nc(35594),
      KI = nc(35601);
    const xr = (0, Vc.memo)((function(cB) {
        var Bc, nc, Ic;
        let {
          anchorRect: uc,
          anchorRef: Mc,
          onClose: qB
        } = cB;
        const Oc = (0, Vc.useRef)(null),
          Tc = kr(Oc, uc),
          [fc, mB] = (0, Vc.useState)(KI.b),
          ec = (0, Vc.useMemo)((() => Object.values(fc).every((cB => cB))), [fc]);
        (0, sc.f)("replayViewer|uiVisibilityChanged", (() => {
          mB((0, KI.b)())
        })), XI(Oc, qB, Mc);
        const tB = (0, Vc.useCallback)(((cB, Bc) => {
            (0, KI.f)(cB, Bc), mB((0, KI.b)())
          }), []),
          Sc = (0, Vc.useCallback)((cB => {
            for (const {
                group: Bc
              }
              of ir.g)(0, KI.f)(Bc, cB);
            mB((0, KI.b)())
          }), []),
          yB = wI(uc);
        return (0, eI.createPortal)((0, Pc.jsxs)("div", {
          ref: Oc,
          className: rB()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (Bc = null === Tc || void 0 === Tc ? void 0 : Tc.placeBelow) && void 0 !== Bc && Bc,
            Positioned: null !== Tc
          }),
          style: {
            left: `${null!==(nc=null===Tc||void 0===Tc?void 0:Tc.left)&&void 0!==nc?nc:yB.left}px`,
            top: `${null!==(Ic=null===Tc||void 0===Tc?void 0:Tc.top)&&void 0!==Ic?Ic:yB.top}px`
          },
          onPointerDown: cB => {
            cB.stopPropagation()
          },
          children: [(0, Pc.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Pc.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Pc.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Pc.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Pc.jsx)("input", {
                type: "checkbox",
                checked: ec,
                onChange: cB => {
                  Sc(cB.target.checked)
                }
              }), (0, Pc.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), ir.g.map((cB => {
              let {
                group: Bc,
                label: nc
              } = cB;
              return (0, Pc.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Pc.jsx)("input", {
                  type: "checkbox",
                  checked: fc[Bc],
                  onChange: cB => {
                    tB(Bc, cB.target.checked)
                  }
                }), (0, Pc.jsx)("span", {
                  children: nc
                })]
              }, Bc)
            }))]
          })]
        }), document.body)
      })),
      dI = (0, Vc.memo)((function(cB) {
        let {
          disabled: Bc
        } = cB;
        const nc = (0, Vc.useRef)(null),
          [Ic, rB] = (0, Vc.useState)(!1),
          [uc, sc] = (0, Vc.useState)(null),
          Mc = (0, Vc.useCallback)((() => {
            nc.current && (sc(nc.current.getBoundingClientRect()), rB((cB => !cB)))
          }), []),
          qB = (0, Vc.useCallback)((() => {
            rB(!1)
          }), []);
        return (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)("div", {
            ref: nc,
            children: (0, Pc.jsx)(dB.d, {
              className: "ReplayViewerActionButton",
              onClick: Mc,
              disabled: Bc,
              children: (0, Pc.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Ic && uc && (0, Pc.jsx)(xr, {
            anchorRect: uc,
            anchorRef: nc,
            onClose: qB
          })]
        })
      })),
      AI = ["freeCamUp", "freeCamDown"];

    function GI(cB, Bc) {
      Tc.gameBridge.send("holdReplayFreecamVertical", {
        action: cB,
        XB: Bc
      })
    }
    const cu = (0, Vc.memo)((function() {
        (0, Vc.useEffect)((() => () => {
          ! function() {
            Tc.gameBridge.send("moveReplayFreecam", null);
            for (const cB of AI) GI(cB, !1)
          }()
        }), []);
        const cB = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("moveReplayFreecam", cB)
          }), []),
          Bc = (0, Vc.useCallback)((cB => ({
            onTouchStart: Bc => {
              Bc.preventDefault(), Bc.stopPropagation(), GI(cB, !0)
            },
            onTouchEnd: Bc => {
              Bc.preventDefault(), Bc.stopPropagation(), GI(cB, !1)
            },
            onTouchCancel: Bc => {
              Bc.preventDefault(), Bc.stopPropagation(), GI(cB, !1)
            }
          })), []);
        return (0, Pc.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Pc.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Pc.jsx)(sB, {
              onMove: cB,
              mode: "pinned"
            })
          }), (0, Pc.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Pc.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...Bc("freeCamUp"),
              children: (0, Pc.jsx)(Nc.e, {
                name: "arrow-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Pc.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...Bc("freeCamDown"),
              children: (0, Pc.jsx)(Nc.e, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Br = [],
      nr = (0, Vc.memo)((function() {
        const cB = (0, jB.l)();
        return (0, hc.d)("replayViewerRequested", (cB => {
          (0, jB.j)("toggle" === cB ? !(0, jB.h)() : "open" === cB)
        })), cB ? (0, Pc.jsx)(Vr, {}) : null
      })),
      Vr = (0, Vc.memo)((function() {
        var cB, Bc, nc, Ic, uc, sc, Mc, qB, Oc, fc, mB, ec;
        const tB = Vc.useRef(null),
          [Sc, yB] = (0, Vc.useState)(null),
          [zB, pc] = (0, Vc.useState)(1),
          [Yc, Lc] = (0, Vc.useState)(null),
          [gB, Uc] = (0, Vc.useState)(!1),
          {
            isTouchScreen: bB
          } = (0, aB.j)(["isTouchScreen"]),
          Zc = (0, hc.g)("replay"),
          Qc = (0, hc.g)("replayEdits"),
          Cc = null !== Zc,
          vB = null !== (cB = null === Zc || void 0 === Zc ? void 0 : Zc.cn) && void 0 !== cB ? cB : 0,
          Ec = null !== (Bc = null === Zc || void 0 === Zc ? void 0 : Zc.totalTicks) && void 0 !== Bc ? Bc : 0,
          oc = Math.max(0, Ec - 1),
          Wc = null !== (nc = null === Zc || void 0 === Zc ? void 0 : Zc.playing) && void 0 !== nc && nc,
          wc = null !== (Ic = null === Zc || void 0 === Zc ? void 0 : Zc.speed) && void 0 !== Ic ? Ic : 1,
          kB = null !== (uc = null === Zc || void 0 === Zc ? void 0 : Zc.WBc) && void 0 !== uc ? uc : 20,
          Xc = null !== Yc && void 0 !== Yc ? Yc : vB,
          Hc = null !== (sc = null === Zc || void 0 === Zc ? void 0 : Zc.freecam) && void 0 !== sc && sc,
          Fc = null !== (Mc = null === Zc || void 0 === Zc ? void 0 : Zc.cameraMode) && void 0 !== Mc ? Mc : "recording",
          Jc = null !== (qB = null === Qc || void 0 === Qc ? void 0 : Qc.cameraKeyframes) && void 0 !== qB ? qB : Br,
          Rc = null !== (Oc = null === Qc || void 0 === Qc ? void 0 : Qc.playbackMark) && void 0 !== Oc ? Oc : null,
          iB = null !== (fc = null === Qc || void 0 === Qc ? void 0 : Qc.fileName) && void 0 !== fc ? fc : null,
          Kc = null !== (mB = null === Qc || void 0 === Qc ? void 0 : Qc.unsavedChanges) && void 0 !== mB && mB,
          xB = null !== (ec = null === Qc || void 0 === Qc ? void 0 : Qc.suggestSaveAs) && void 0 !== ec && ec,
          dc = (0, hc.g)("replayVideoExporting"),
          Ac = !dc && Cc && ("freecam" === Fc || ("recording" === Fc || "keyframe" === Fc) && !Wc),
          Gc = bB && Cc && "freecam" === Fc && !dc && !gB;
        (0, mr.c)(!0, !0, "ReplayViewerOverlay"), (0, Vc.useEffect)((() => {
          Tc.gameBridge.send("syncReplayCameraMode", null)
        }), [Hc]);
        const cn = (0, Vc.useCallback)(((cB, Bc) => {
            Tc.gameBridge.send("seekReplay", {
              cn: cB,
              ignorePlaybackMark: null === Bc || void 0 === Bc ? void 0 : Bc.ignorePlaybackMark
            })
          }), []),
          BB = (0, Vc.useCallback)((() => {
            Tc.gameBridge.send("setReplayPlaying", !1)
          }), []),
          nB = (0, Vc.useCallback)(((cB, Bc) => {
            Tc.gameBridge.send("moveReplayCameraKeyframe", {
              from: cB,
              to: Bc
            })
          }), []),
          VB = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("setReplayCameraKeyframe", cB)
          }), []),
          IB = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("deleteReplayCameraKeyframes", {
              start: cB,
              end: cB
            })
          }), []),
          rn = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("deleteReplayCameraKeyframes", {
              start: cB.startTick,
              end: cB.endTick
            })
          }), []),
          uB = (0, Vc.useCallback)((() => Tc.gameBridge.lookup("replayCamera", null)), []),
          sB = (0, Vc.useCallback)((cB => {
            Lc(cB)
          }), []),
          MB = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("setReplayPlaybackMark", {
              inTick: cB.startTick,
              outTick: cB.endTick
            })
          }), []),
          PB = (0, Vc.useCallback)((() => {
            Tc.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          qn = (0, Vc.useCallback)((cB => {
            const Bc = Tc.gameBridge.latest("replay");
            if (null === Bc || cB.endTick <= cB.startTick) return;
            const nc = cB.startTick,
              Vc = cB.endTick;
            mI.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((cB => {
              var Ic;
              if (!0 !== cB) return;
              if ((null === (Ic = Tc.gameBridge.latest("replay")) || void 0 === Ic ? void 0 : Ic.id) !== Bc.id) return;
              Tc.gameBridge.send("cropReplay", {
                start: nc,
                end: Vc
              }) && (Lc(null), pc(1))
            }))
          }), []),
          OB = (0, Vc.useCallback)(((cB, Bc) => {
            yB(null), pc(1), Lc(null), (0, rr.e)().open(cB, Bc).catch((cB => {
              console.error(cB), yB(cB instanceof Error ? cB.message : "Failed to parse recording")
            }))
          }), []),
          TB = (0, Vc.useCallback)(((cB, Bc) => {
            null !== Tc.gameBridge.latest("connectedGame").websocketUrl ? mI.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((nc => {
              !0 === nc && OB(cB, Bc)
            })) : OB(cB, Bc)
          }), [OB]),
          fB = (0, Vc.useCallback)((cB => {
            var Bc;
            const nc = null === (Bc = cB.target.files) || void 0 === Bc ? void 0 : Bc[0];
            if (cB.target.value = "", !nc) return;
            const Vc = new FileReader;
            Vc.onload = () => {
              TB(new Uint8Array(Vc.result), {
                fileName: nc.name
              })
            }, Vc.onerror = () => {
              yB("Failed to read file")
            }, Vc.readAsArrayBuffer(nc)
          }), [TB]),
          mn = (0, Vc.useCallback)((() => {
            const cB = () => {
              var cB;
              null === (cB = tB.current) || void 0 === cB || cB.click()
            };
            (0, MI.k)() ? (0, MI.e)().then((cB => {
              cB && TB(cB.bytes, {
                fileHandle: cB.handle
              })
            })).catch((Bc => {
              console.error(Bc), cB()
            })): cB()
          }), [TB]),
          eB = (0, Vc.useCallback)((async function() {
            let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let Bc;
            try {
              Bc = await fI(cB, {
                files: (0, rr.e)(),
                pickerSupported: MI.k,
                chooseFile: MI.d,
                write: MI.o,
                download: sI.h,
                onFallback: console.error
              })
            } catch (nc) {
              return void(cB => {
                console.error(cB), mI.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: qr(cB),
                  confirmText: "OK"
                })
              })(nc)
            }
            "written" !== Bc && "downloaded" !== Bc || (() => {
              const cB = mI.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                cB.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          tn = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("replayAction", cB)
          }), []),
          SB = (0, Vc.useCallback)((cB => {
            pc((Bc => ar(Bc, cB)))
          }), []),
          yn = (0, Vc.useCallback)((cB => {
            if (!Tc.gameBridge.latest("replayVideoExporting")) switch (cB) {
              case "replayLoad":
                mn();
                break;
              case "replaySave":
                eB(!1);
                break;
              case "replaySaveAs":
                eB(!0);
                break;
              case "replayTimelineZoomIn":
                SB("in");
                break;
              case "replayTimelineZoomOut":
                SB("out")
            }
          }), [mn, eB, SB]);
        (0, hc.d)("replayUiActionRequested", yn);
        const zn = (0, Vc.useCallback)((cB => {
            Tc.gameBridge.send("setReplayCameraMode", cB)
          }), []),
          pB = Cc ? dB.d : dB.n,
          hB = Kc && !xB ? dB.n : dB.d,
          an = Kc && xB ? dB.n : dB.d;
        return (0, Pc.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Pc.jsx)(RI, {
            enabled: Ac
          }), Gc && (0, Pc.jsx)(cu, {}), (0, Pc.jsx)("input", {
            ref: tB,
            type: "file",
            accept: sI.e,
            className: "ReplayViewerFileInput",
            onChange: fB
          }), (0, Pc.jsxs)("div", {
            className: rB()("ReplayViewerBar", {
              Collapsed: gB
            }),
            children: [(0, Pc.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                gB ? Uc(!1) : Cc ? Uc(!0) : (0, jB.e)()
              },
              "aria-expanded": !gB,
              "aria-label": gB ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Pc.jsx)(Nc.e, {
                name: gB ? "angle-up" : "angle-down"
              })
            }), !gB && (0, Pc.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Cc && Ec > 0 && (0, Pc.jsx)(jr, {
                maxTick: oc,
                displayTick: Xc,
                WBc: kB,
                cameraKeyframes: Jc,
                playbackMark: Rc,
                onSeek: cn,
                onPause: BB,
                onScrubTickChange: sB,
                onMoveCameraKeyframe: nB,
                onUpdateCameraKeyframe: VB,
                onDeleteCameraKeyframe: IB,
                onUseCurrentCamera: uB,
                onMarkRange: MB,
                onCropRange: qn,
                onDeleteKeyframesInRange: rn,
                onClearMark: PB,
                zoomLevel: zB,
                onZoomLevelChange: pc
              }, oc), (0, Pc.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Pc.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Pc.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Cc && (0, Pc.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== iB && void 0 !== iB ? iB : "Unsaved recording", Kc ? " *" : ""]
                    }), (0, Pc.jsxs)(pB, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yn("replayLoad")
                      },
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Pc.jsxs)(dB.d, {
                      className: "ReplayViewerActionButton",
                      onClick: jB.e,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Pc.jsxs)(hB, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yn("replaySave")
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Pc.jsxs)(dB.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Tc.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Pc.jsxs)(an, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        yn("replaySaveAs")
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Pc.jsxs)(dB.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Tc.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Cc || 0 === Ec || dc,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Pc.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Pc.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Pc.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Pc.jsx)(lc.c, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Pc.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Pc.jsx)(Dc.d, {
                        tooltipInner: (0, Pc.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Pc.jsxs)(dB.Q, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === Fc,
                          onClick: () => {
                            zn("recording")
                          },
                          disabled: !Cc,
                          children: ["Recorded ", (0, Pc.jsx)(Nc.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Pc.jsx)(Dc.d, {
                        tooltipInner: (0, Pc.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Pc.jsxs)(dB.Q, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === Fc,
                          onClick: () => {
                            zn("freecam")
                          },
                          disabled: !Cc,
                          children: ["Free ", (0, Pc.jsx)(Nc.e, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Pc.jsx)(Dc.d, {
                        tooltipInner: (0, Pc.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Pc.jsxs)(dB.Q, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === Fc,
                          onClick: () => {
                            zn("keyframe")
                          },
                          disabled: !Cc,
                          children: ["Preview ", (0, Pc.jsx)(Nc.e, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Pc.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Pc.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Pc.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Pc.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: pI(Xc, kB)
                      }), (0, Pc.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Pc.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: pI(oc, kB)
                      })]
                    }), (0, Pc.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Xc, " / ", oc]
                    })]
                  }), (0, Pc.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Pc.jsxs)(dB.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        tn("replaySkipBack")
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsxs)("span", {
                        children: [" ", (0, Pc.jsx)(Nc.e, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Pc.jsx)(lc.c, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Pc.jsxs)(dB.n, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Tc.gameBridge.send("setReplayPlaying", !Wc)
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsxs)("span", {
                        children: [" ", Wc ? (0, Pc.jsx)(Nc.e, {
                          name: "pause"
                        }) : (0, Pc.jsx)(Nc.e, {
                          name: "play"
                        }), " "]
                      }), (0, Pc.jsx)(lc.c, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Pc.jsxs)(dB.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        tn("replaySkipForward")
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsxs)("span", {
                        children: [" ", (0, Pc.jsx)(Nc.e, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Pc.jsx)(lc.c, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Pc.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Pc.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Pc.jsxs)(dB.n, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        tn("replayRecordKeyframe")
                      },
                      disabled: !Cc,
                      children: [(0, Pc.jsx)(lc.c, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Pc.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Pc.jsx)(dI, {
                      disabled: !Cc
                    }), Rc && (0, Pc.jsx)(dB.Q, {
                      className: "ReplayViewerActionButton",
                      onClick: PB,
                      disabled: !Cc,
                      children: (0, Pc.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Pc.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Pc.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Pc.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Pc.jsx)(dB.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          tn("replaySpeedDown")
                        },
                        disabled: !Cc || (0, uI.f)(wc),
                        children: (0, Pc.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Pc.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [wc, "\xd7"]
                      }), (0, Pc.jsx)(dB.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          tn("replaySpeedUp")
                        },
                        disabled: !Cc || (0, uI.d)(wc),
                        children: (0, Pc.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Pc.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Pc.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Pc.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Pc.jsxs)(dB.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yn("replayTimelineZoomOut")
                        },
                        disabled: !Cc || zB <= tr[0],
                        children: [(0, Pc.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Pc.jsx)(lc.c, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Pc.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: hI(zB)
                      }), (0, Pc.jsxs)(dB.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          yn("replayTimelineZoomIn")
                        },
                        disabled: !Cc || zB >= tr[tr.length - 1],
                        children: [(0, Pc.jsx)("span", {
                          children: " + "
                        }), (0, Pc.jsx)(lc.c, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Pc.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Cc && "Load a recording to begin playback"
              }), Sc && (0, Pc.jsx)("div", {
                className: "ReplayViewerError",
                children: Sc
              })]
            })]
          })]
        })
      }));
    var Ir = nc(1177);

    function ru() {
      const [, cB] = (0, Vc.useState)(0);
      return (0, sc.f)("replayViewer|uiVisibilityChanged", (() => {
          cB((cB => cB + 1))
        })), (0, sc.f)("replayViewer|replayLoaded", (() => {
          cB((cB => cB + 1))
        })),
        function() {
          if (!(0, Ir.g)()) return {};
          const cB = {
              [ir.e]: "true"
            },
            Bc = (0, KI.b)();
          for (const {
              group: nc,
              dataAttr: Vc
            }
            of ir.g) Vc && !Bc[nc] && (cB[Vc] = "true");
          return cB
        }()
    }
    var ur = nc(8182),
      sr = nc(1682),
      Mr = nc(7625),
      Pr = nc(7613),
      qu = nc(1691);
    const Or = (0, Vc.memo)((function() {
      var cB, Bc, nc;
      const Ic = (0, Sc.j)("customButtons");
      (0, Vc.useEffect)((() => Ic ? (Tc.gameBridge.send("bindCustomButtonKeys", Ic.filter(Mr.g).map((cB => {
        let {
          id: Bc,
          keycode: nc
        } = cB;
        return {
          id: Bc,
          keycode: nc
        }
      }))), () => {
        Tc.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Ic]);
      const rB = null !== (cB = null === Ic || void 0 === Ic ? void 0 : Ic.filter(Mr.g)) && void 0 !== cB ? cB : [],
        uc = (0, Pr.e)(),
        sc = null !== (Bc = null === (nc = (0, qu.e)()) || void 0 === nc ? void 0 : nc.hideButtonHints) && void 0 !== Bc && Bc,
        Mc = "customButton" !== (null === uc || void 0 === uc ? void 0 : uc.kind) || sc ? null : uc.id,
        qB = rB.length > 0,
        Oc = (0, Vc.useRef)(null);
      return (0, Vc.useLayoutEffect)((() => {
        if (!qB) return () => {};
        const cB = Oc.current,
          Bc = cB.closest(".InGameUi"),
          nc = () => {
            Bc.style.setProperty("--custom-buttons-top", `${cB.offsetTop}px`)
          };
        nc();
        const Vc = new ResizeObserver(nc);
        return Vc.observe(cB), Vc.observe(cB.parentElement), () => {
          Vc.disconnect(), Bc.style.removeProperty("--custom-buttons-top")
        }
      }), [qB]), (0, Pc.jsx)("div", {
        ref: Oc,
        className: "" + ((0, bI.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: rB.map((cB => {
          var Bc, nc;
          return (0, Pc.jsx)(Tr, {
            button: cB,
            padGlyph: cB.id === Mc && null !== (Bc = null === (nc = (0, wc.f)()) || void 0 === nc ? void 0 : nc.getBoundButton("actionButton")) && void 0 !== Bc ? Bc : null
          }, cB.id)
        }))
      })
    }));

    function Tr(cB) {
      let {
        button: Bc,
        padGlyph: nc
      } = cB;
      const Ic = (0, Vc.useRef)(null),
        rB = () => {
          null !== Ic.current && (Ic.current = null, Tc.gameBridge.send("pressCustomButton", {
            id: Bc.id,
            down: !1
          }))
        };
      (0, Vc.useEffect)((() => rB), []);
      const uc = tn(rB, {
          pressesOnPointerDown: !0
        }),
        sc = cB => {
          Ic.current === cB.pointerId && rB()
        };
      return (0, Pc.jsxs)("div", {
        className: "CustomIcon",
        ...uc,
        onLostPointerCapture: sc,
        children: [(0, Pc.jsx)(sr.b, {
          icon: Bc.icon,
          keyboardHint: (0, Mr.e)(Bc.keycode),
          padGlyph: nc,
          onPointerDown: cB => {
            cB.currentTarget.setPointerCapture(cB.pointerId), null === Ic.current && Tc.gameBridge.send("pressCustomButton", {
              id: Bc.id,
              down: !0
            }), Ic.current = cB.pointerId
          },
          onPointerUp: sc,
          onPointerCancel: sc,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), Bc.description && (0, Pc.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: Bc.description
        })]
      })
    }
    var fr = nc(1943),
      mu = nc(35219);
    const er = (0, Vc.memo)((function() {
        const {
          isUiHidden: cB,
          isUiHiddenByCamera: Bc,
          isTouchScreen: nc
        } = (0, aB.j)(["isUiHidden", "isUiHiddenByCamera", "isTouchScreen"]), Ic = (0, TV.c)(), uc = ru(), sc = (0, Sc.j)("showKillfeed");
        return (0, Vc.useEffect)((() => {
            let cB;
            const Bc = () => {
                clearTimeout(cB), cB = setTimeout((() => {
                  Tc.gameBridge.latest("connectedGame").replay || (Tc.gameBridge.send("leaveGame", {
                    reloadPath: "/"
                  }), (0, fc.navigatePreserveSearch)("/"))
                }), 3e5)
              },
              nc = () => {
                clearTimeout(cB)
              };
            return window.addEventListener("focus", nc), window.addEventListener("blur", Bc), () => {
              window.removeEventListener("blur", Bc), window.removeEventListener("focus", nc), clearTimeout(cB)
            }
          }), []),
          function() {
            const cB = (0, Sc.j)("inventoryColourOverride");
            (0, Vc.useEffect)((() => {
              if (!cB) return;
              const {
                panel: Bc,
                slot: nc,
                slotSelected: Vc,
                slotUnavailable: Ic
              } = Xc(cB), rB = document.documentElement.style;
              return rB.setProperty("--InventoryPanelColour", Bc), rB.setProperty("--InventorySlotColour", nc), rB.setProperty("--InventorySlotSelectedColour", Vc), rB.setProperty("--InventorySlotUnavailableColour", Ic), () => {
                rB.removeProperty("--InventoryPanelColour"), rB.removeProperty("--InventorySlotColour"), rB.removeProperty("--InventorySlotSelectedColour"), rB.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [cB])
          }(), (0, Vc.useEffect)((() => {
            const cB = setTimeout((() => {
              (0, yB.f)()
            }), 0);
            return () => {
              clearTimeout(cB), yB.i.Iq(!1)
            }
          }), []), (0, Pc.jsxs)(Pc.Fragment, {
            children: [(0, Pc.jsxs)("div", {
              className: rB()("InGameUi", {
                Hidden: cB,
                HiddenByCamera: Bc
              }),
              ...uc,
              children: [(0, Pc.jsx)(On.e, {}), (0, Pc.jsx)(tV, {}), (0, Pc.jsx)(Sn, {}), (0, Pc.jsx)(EV, {}), (0, Pc.jsx)(FV, {}), nc && (0, qn.l)() && (0, Pc.jsx)(jI, {}), (0, Pc.jsx)(kn, {}), (0, Pc.jsx)(Qn.d, {}), (0, Pc.jsx)(Wn, {}), (0, Pc.jsx)(qV, {}), (0, Pc.jsx)(kI.c, {}), (0, Pc.jsx)(nr, {}), (0, Pc.jsx)(iI.d, {}), (0, Pc.jsx)(KV.h, {}), (0, Pc.jsx)(HB.j, {}), (0, Pc.jsx)(hr, {
                showChat: Ic
              }), (0, Pc.jsx)(xI.i, {}), (0, Pc.jsx)(wV, {}), (0, Pc.jsxs)("div", {
                className: rB()("RightElements", {
                  RightElementsTouchscreen: nc
                }),
                "data-camera-keeper-host": "",
                children: [(0, Pc.jsxs)("div", {
                  className: xI.g,
                  children: [(0, Pc.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    children: [(0, Pc.jsx)(YV.c, {}), (0, Pc.jsx)(Ec, {}), (0, Pc.jsx)(Rn.d, {}), bI.featureFlags.useSocialFeatures && (0, Pc.jsx)(iV.b, {
                      placement: "inGame"
                    }), bI.featureFlags.useSocialFeatures && (0, Pc.jsx)(sV, {}), sc && (0, Pc.jsx)(Zn, {}), (0, Pc.jsx)(ur.b, {})]
                  }), bI.featureFlags.useSocialFeatures && (0, Pc.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Pc.jsx)(DV.b, {})
                  })]
                }), (0, Pc.jsx)(HB.d, {
                  placement: "topRight"
                }), (0, Pc.jsx)(au, {})]
              }), (0, Pc.jsx)("div", {
                className: "LeftCentre",
                children: (0, Pc.jsx)(Or, {})
              }), (0, Pc.jsxs)("div", {
                className: "BottomCentre",
                children: [(0, Pc.jsx)(bB, {}), (0, Pc.jsx)(tu, {}), (0, Pc.jsxs)("div", {
                  className: "BottomElements",
                  children: [(0, Pc.jsxs)("div", {
                    className: rB()("BottomLeftElements", {
                      Touch: nc
                    }),
                    children: [(0, Pc.jsx)(qI, {}), !nc && (0, Pc.jsx)(fr.e, {})]
                  }), (0, Pc.jsx)(pr, {}), (0, Pc.jsx)(kV, {
                    isTouchScreen: nc
                  })]
                })]
              }), (0, Pc.jsx)("div", {
                className: "MiddleLeft"
              }), nc && (0, Pc.jsx)(zn, {}), (0, Pc.jsx)("div", {
                className: "CameraFadeHost",
                ref: mu.k
              })]
            }), (0, Pc.jsx)(II.c, {}), (0, Pc.jsx)(OV.d, {})]
          })
      })),
      tu = (0, Vc.memo)((function() {
        const cB = (0, sc.g)("aimingOverlay", "none");
        (0, ec.e)();
        const Bc = (0, Sc.m)("middleTextUpper"),
          nc = (0, Sc.m)("middleTextLower");
        return (0, Pc.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === cB ? {
            visibility: "hidden"
          } : {},
          children: [(0, Pc.jsx)(zu, {
            text: Bc,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Sr
          }), (0, Pc.jsx)(zu, {
            text: nc,
            className: "MiddleText",
            maxHeightFraction: yu
          })]
        })
      })),
      Sr = .3,
      yu = .2;

    function zu(cB) {
      let {
        text: Bc,
        className: nc,
        maxHeightFraction: Ic
      } = cB;
      const rB = (0, Vc.useRef)(null),
        uc = (0, Vc.useRef)(null);
      return function(cB, Bc, nc, Ic) {
        (0, Vc.useLayoutEffect)((() => {
          const Vc = cB.current,
            Ic = Bc.current;
          if (!Vc || !Ic) return;
          let rB = -1,
            uc = -1;
          const sc = cB => (Ic.style.setProperty("zoom", String(cB)), Vc.getBoundingClientRect().height),
            Mc = () => {
              const cB = document.documentElement.clientHeight * nc;
              let Bc = 1;
              if (sc(1) > cB) {
                let nc = .5,
                  Vc = 1;
                for (let Bc = 0; Bc < 6; Bc++) {
                  const Bc = (nc + Vc) / 2;
                  sc(Bc) <= cB ? nc = Bc : Vc = Bc
                }
                Bc = nc
              }
              uc = sc(Bc), rB = Vc.getBoundingClientRect().width
            };
          Mc();
          let Pc = 0;
          const qB = () => {
              cancelAnimationFrame(Pc), Pc = requestAnimationFrame(Mc)
            },
            Oc = new ResizeObserver((() => {
              const {
                width: cB,
                height: Bc
              } = Vc.getBoundingClientRect();
              cB === rB && Bc === uc || qB()
            }));
          return Oc.observe(Vc), window.addEventListener("resize", qB), () => {
            Oc.disconnect(), window.removeEventListener("resize", qB), cancelAnimationFrame(Pc), Ic.style.removeProperty("zoom")
          }
        }), [cB, Bc, nc, Ic])
      }(rB, uc, Ic, Bc.content), (0, Pc.jsx)("div", {
        ref: rB,
        className: "MiddleTextFit",
        children: (0, Pc.jsx)(dV.b, {
          ref: uc,
          text: Bc,
          className: nc
        })
      })
    }
    const pr = (0, Vc.memo)((function() {
        const cB = (0, sc.g)("aimingOverlay", "none");
        (0, ec.e)();
        const Bc = (0, Sc.j)("useInventory");
        return (0, Pc.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === cB ? {
            visibility: "hidden"
          } : {},
          children: [(0, Pc.jsx)(qB, {}), (0, Pc.jsx)(HB.d, {}), (0, Pc.jsx)(FB, {}), (0, Pc.jsx)(vI, {}), (0, Pc.jsxs)("div", {
            className: "HotBarRow",
            children: [Bc ? (0, Pc.jsx)(Wc.e, {}) : (0, Pc.jsx)(Wc.f, {}), (0, Pc.jsx)(kB, {})]
          })]
        })
      })),
      hr = (0, Vc.memo)((function(cB) {
        let {
          showChat: Bc
        } = cB;
        const {
          t: nc
        } = (0, Uc.x)(), {
          clientEscMenuOptions: Ic
        } = (0, aB.j)(["clientEscMenuOptions"]);
        (0, ec.e)();
        const {
          userContext: rB,
          isUserContextUpdating: uc
        } = (0, mB.c)(), sc = (0, Sc.j)("hideCoordinates"), Mc = (0, Sc.j)("customVariationTitle"), {
          requestedGameNameWithVariation: qB,
          gameNameWithVariation: Tc,
          lobbyName: fc,
          shownLobbyName: yB
        } = (0, hc.g)("connectedGame"), zB = (0, Oc.e)(qB, fc, !1), [pc, lc] = (0, Vc.useState)(null), Yc = (0, gI.o)(Tc || qB || ""), Lc = Mc || Yc || "";
        (0, Vc.useEffect)((() => {
          uc || xV.e.getFavouriteLobbies(rB).then((cB => {
            console.log("Got favourite lobbies", cB), lc(cB)
          }))
        }), [uc, rB]);
        const gB = (0, Vc.useRef)(null);
        return (0, Vc.useLayoutEffect)((() => {
          const cB = gB.current,
            Bc = document.documentElement,
            nc = new ResizeObserver((() => {
              Bc.style.setProperty("--InGameHeaderRowsHeight", `${cB.offsetHeight}px`)
            }));
          return nc.observe(cB), () => {
            nc.disconnect(), Bc.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsxs)("div", {
            className: xI.d,
            ref: gB,
            children: [(0, Pc.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Pc.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: cB => {
                  cB.stopPropagation(), cB.preventDefault()
                },
                onClick: () => {
                  aB.d.set({
                    openEverythingMenuName: tB.i.SETTINGS
                  })
                },
                children: [(0, Pc.jsx)(LV.e, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Pc.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Pc.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === zB && (0, Pc.jsx)(LV.e, {}), null !== zB && (0, Pc.jsxs)(Pc.Fragment, {
                  children: [zB, Lc && ` ${Lc}`]
                })]
              }), (0, Pc.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Pc.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: yB
              }), (0, UV.A)(fc) && (0, Pc.jsx)(Dc.d, {
                tooltipInner: (0, Pc.jsx)("div", {
                  children: nc(null !== pc && pc.includes(fc) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Pc.jsx)("div", {
                  children: (0, Pc.jsx)(dB.w, {
                    isLiked: null !== pc && pc.includes(fc),
                    onClick: () => {
                      try {
                        if (!pc) return;
                        pc.includes(fc) ? (xV.e.unfavouriteLobby(rB, fc).catch((cB => {
                          console.error("Failed to favourite lobby", cB)
                        })), lc(pc.filter((cB => cB !== fc)))) : (xV.e.favouriteLobby(rB, fc).catch((cB => {
                          console.error("Failed to favourite lobby", cB)
                        })), lc([...pc, fc]))
                      } catch (cB) {
                        console.error("Failed to like lobby", cB)
                      }
                    },
                    isLoading: null === pc
                  })
                })
              }), (0, Pc.jsx)(BI, {})]
            }), (0, Pc.jsx)(zI, {
              show: Ic.showFPS
            }), !sc && Ic.showCoordinates && (0, Pc.jsx)(aI, {}), !sc && Ic.showChunkCoordinates && (0, Pc.jsx)(lV, {}), (0, Pc.jsx)(AV, {})]
          }), (0, Pc.jsx)("div", {
            className: "TopLeftElements",
            children: (0, Pc.jsx)("div", {
              className: "InGameHeaderAndChat",
              children: Bc && (0, Pc.jsx)(Jc.c, {})
            })
          })]
        })
      })),
      au = (0, Vc.memo)((function() {
        (0, ec.e)();
        const cB = (0, Sc.m)("RightInfoText"),
          [Bc, nc] = (0, Vc.useState)(null);
        return (0, jV.d)(Bc, ".RightElements"), cB.hasText ? (0, Pc.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Pc.jsx)(dV.b, {
            ref: nc,
            text: cB,
            className: "RightInfoDiv",
            children: (0, Pc.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Pc.jsx)(Mc.e, {
                text: cB.content
              })
            })
          })
        }) : null
      }))
  },
  35164: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Tc,
      f: () => qB,
      g: () => Oc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(1553),
      sc = nc(957);
    const Mc = 350;
    let Pc = 0;

    function qB() {
      return Pc += 1, Pc
    }

    function Oc(cB, Bc) {
      let nc = 0;
      for (const Vc of cB) "ingredient" !== Vc.kind && Vc.FX === Bc && (nc += Vc.amount);
      return nc > 0 ? {
        idx: Bc,
        amount: nc
      } : null
    }

    function Tc(cB) {
      var Bc, nc;
      let {
        anim: Ic,
        onComplete: Pc
      } = cB;
      const qB = null !== (Bc = Ic.delayMs) && void 0 !== Bc ? Bc : 0,
        Oc = null !== (nc = Ic.durationMs) && void 0 !== nc ? nc : Mc,
        [Tc, fc] = (0, Vc.useState)(Ic.from),
        [mB, ec] = (0, Vc.useState)(0 === qB),
        [tB, Sc] = (0, Vc.useState)(!1),
        yB = (0, Vc.useRef)(!1);
      return (0, Vc.useEffect)((() => {
        let cB, Bc;
        const nc = () => {
            yB.current = !0, ec(!0), cB = requestAnimationFrame((() => {
              Bc = requestAnimationFrame((() => {
                fc({
                  x: Ic.to.x,
                  y: Ic.to.y
                }), Sc(!0)
              }))
            }))
          },
          Vc = yB.current ? 0 : qB;
        let rB;
        Vc > 0 ? rB = setTimeout(nc, Vc) : nc();
        const uc = setTimeout((() => {
          Pc(Ic.id)
        }), Vc + Oc + 50);
        return () => {
          clearTimeout(rB), cancelAnimationFrame(cB), cancelAnimationFrame(Bc), clearTimeout(uc)
        }
      }), [Ic.id, Ic.to.x, Ic.to.y, Pc, qB, Oc]), (0, sc.jsx)("div", {
        className: rB()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Ic.kind,
          Waiting: !mB,
          Arrived: tB
        }),
        style: {
          left: Tc.x,
          top: Tc.y,
          "--fly-duration": `${Oc}ms`
        },
        children: (0, sc.jsx)(uc.d, {
          itemName: Ic.itemName,
          amount: Ic.amount
        })
      })
    }
  },
  35152: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Dc,
      f: () => oc
    });
    var Vc = nc(73),
      Ic = nc(2258),
      rB = nc(5542),
      uc = nc(1699),
      sc = nc(1682),
      Mc = nc(1946),
      Pc = nc(7747),
      qB = nc(302),
      Oc = nc(35),
      Tc = nc(1252),
      fc = nc(107),
      mB = nc(51),
      ec = nc(912),
      tB = nc.n(ec),
      Sc = nc(244),
      yB = nc(35157),
      zB = nc(981),
      pc = nc(1536),
      hc = nc(1609),
      aB = nc(7597),
      lc = nc(957);

    function Yc(cB) {
      var Bc, nc;
      let {
        slotIdx: rB
      } = cB;
      const uc = (0, hc.e)("hotbar", (cB => {
          var Bc;
          return null !== (Bc = cB.items[rB]) && void 0 !== Bc ? Bc : null
        })),
        sc = (0, hc.e)("hotbar", (cB => cB.ammo)),
        [Pc, Oc] = (0, Vc.useState)(!1),
        Tc = (0, Vc.useRef)(null),
        [fc, mB] = (0, Vc.useState)(null),
        [ec, Sc] = (0, Vc.useState)(null),
        yB = (0, Mc.j)("maxAuraLevel"),
        Yc = (0, Ic.e)(),
        Lc = (0, Vc.useCallback)((() => {
          if (clearTimeout(Tc.current), uc) {
            var cB, Bc, nc, Vc;
            const Mc = uc.displayName,
              Pc = [],
              Oc = Array.isArray(Mc) ? Mc : [Mc],
              Tc = {
                fontStyle: null !== (cB = uc.attributes.customAttributes) && void 0 !== cB && cB.author ? "italic" : "normal"
              };
            for (const cB of Oc) cB.str ? Pc.push(cB) : Pc.push({
              str: cB,
              style: Tc
            });
            if (null !== (Bc = uc.attributes.customAttributes) && void 0 !== Bc && Bc.enchantments) {
              Pc.push(" ");
              const cB = Object.entries(uc.attributes.customAttributes.enchantments).sort(((cB, Bc) => Bc[1] - cB[1])),
                Bc = uc.attributes.customAttributes.enchantmentData;
              for (const [nc, Vc] of cB) {
                var Ic, rB;
                const cB = null !== (Ic = null === Bc || void 0 === Bc || null === (rB = Bc[nc]) || void 0 === rB ? void 0 : rB.icon) && void 0 !== Ic ? Ic : `${nc} Enchantment`;
                var sc;
                if (Vc < 4)
                  for (let Bc = 0; Bc < Vc; Bc++) Pc.push({
                    icon: cB,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else Pc.push({
                  icon: cB,
                  style: {
                    fontSize: "1.5em"
                  }
                }), Pc.push(null !== (sc = (0, qB.I)(Vc)) && void 0 !== sc ? sc : Vc.toString())
              }
            }
            mB(Pc), Sc(null !== (nc = null === (Vc = uc.attributes.customAttributes) || void 0 === Vc ? void 0 : Vc.enchantmentTier) && void 0 !== nc ? nc : null)
          } else mB(null), Sc(null);
          Oc(!0), Yc();
          const Mc = null === uc || void 0 === uc ? void 0 : uc.attributes.customAttributes;
          void 0 === (null === Mc || void 0 === Mc ? void 0 : Mc.shotsLeft) && (Tc.current = setTimeout((() => {
            Oc(!1)
          }), 2e3))
        }), [null === uc || void 0 === uc ? void 0 : uc.name, rB, null === uc || void 0 === uc ? void 0 : uc.instance, null === uc || void 0 === uc ? void 0 : uc.displayName]);
      (0, Vc.useEffect)((() => (Lc(), () => {
        clearTimeout(Tc.current), Oc(!1)
      })), [null === uc || void 0 === uc ? void 0 : uc.name, rB, null === uc || void 0 === uc ? void 0 : uc.instance, Lc]);
      const gB = null === uc || void 0 === uc || null === (Bc = uc.attributes.customAttributes) || void 0 === Bc ? void 0 : Bc.shotsLeft,
        Uc = void 0 === gB ? null : (0, lc.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${gB}|${uc.requiresAmmo?`${sc}x${uc.clipSize}`:uc.clipSize}`
        }),
        bB = (0, zB.f)(),
        Zc = (0, aB.l)();
      return (0, lc.jsx)(lc.Fragment, {
        children: Pc && uc && !Zc.showing ? (0, lc.jsxs)("div", {
          className: tB()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === yB,
            Enchanted: null !== ec
          }),
          style: {
            bottom: `${Math.min(Math.round(.05*bB),70)}px`,
            "--enchantmentColour": null !== (nc = qB.db[ec]) && void 0 !== nc ? nc : qB.db.None,
            "--duration": ec ? (0, qB.ab)(ec) + "s" : void 0
          },
          children: [ec && (0, lc.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, lc.jsx)(pc.e, {
              text: fc
            }), Uc]
          }), (0, lc.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, lc.jsx)(pc.e, {
              text: fc
            }), Uc]
          })]
        }) : null
      })
    }
    var Lc = nc(35164),
      gB = nc(27),
      Uc = nc(1566),
      bB = nc(569),
      Zc = nc(35167),
      Qc = nc(35175);
    var Cc = nc(1267);

    function vB() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    const Dc = (0, Vc.memo)((function() {
      const [cB, Bc] = (0, Vc.useState)(0), nc = (0, Mc.j)("useFullInventory"), {
        isTouchScreen: sc,
        openInGameMenuName: Pc
      } = (0, gB.j)(["isTouchScreen", "openInGameMenuName"]), qB = null !== Pc && "inventory" !== Pc, mB = (0, uc.b)(vB), ec = sc && !mB;
      ! function(cB, Bc, nc) {
        (0, Vc.useLayoutEffect)((() => {
          const Vc = document.documentElement.classList;
          return cB && (Vc.add("TouchHotbar"), Vc.toggle("TouchHotbarKeysAbove", Bc), Vc.toggle("TouchHotbarHasBag", nc)), (0, Zc.k)(), Oc.i.Vu(Qc.b), () => {
            Vc.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Zc.k)(), Oc.i.Vu(Qc.b)
          }
        }), [cB, Bc, nc])
      }(sc, ec, nc);
      const [Sc, zB] = (0, rB.c)("changedHotbarUsingNumkeys", !(0, fc.isMobile)()), pc = (0, hc.e)("hotbar", (cB => cB.selectedSlot)), aB = null !== pc && void 0 !== pc ? pc : cB, [Cc, Dc] = (0, Vc.useState)(!1), Wc = (0, Ic.e)(), wc = (0, Vc.useRef)(null);
      (0, Tc.f)("inventoryComponentVisible", (cB => {
        Dc(cB)
      }));
      const Xc = (0, Tc.g)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Tc.f)("inventoryDraggedItemUpdated", (cB => {
        wc.current = cB, Wc()
      })), (0, hc.d)("hotbarScrolled", (cB => {
        null === pc && Fc(cB)
      })), (0, hc.d)("hotbarSlotRequested", (cB => {
        Hc(cB), zB(!1)
      })), (0, hc.d)("numberKeyPressed", (() => {
        zB(!1)
      })), (0, hc.d)("hotbarDropRequested", (cB => {
        const Bc = Uc.gameBridge.latest("hotbar").items[aB];
        if (Bc) {
          var nc;
          const Vc = cB && null !== (nc = Bc.amount) && void 0 !== nc ? nc : 1;
          Uc.gameBridge.send("removeInventoryItem", {
            slot: aB,
            amount: Vc,
            drop: !0
          })
        }
      }));
      const Hc = cB => {
          Uc.gameBridge.send("selectHotbarSlot", cB), Bc(cB)
        },
        Fc = cB => {
          Hc((aB + cB + bB.l) % bB.l)
        };
      let Jc, jB = null,
        Rc = null,
        iB = cB => cB => {},
        Kc = cB => Bc => {
          Hc(cB)
        },
        xB = cB => cB => {},
        dc = [];
      if (Cc) {
        var Ac;
        const cB = wc.current;
        if (null === cB || void 0 === cB || !cB.setHovered) return (0, lc.jsx)("div", {
          className: tB()("HotBarContainer", {
            Touch: sc,
            KeysAbove: ec
          }),
          children: (0, lc.jsx)("div", {
            className: "HotBar"
          })
        });
        jB = cB.draggedInfo, Rc = cB.specialItemInfo, iB = cB.setHovered, Kc = cB.pointerDown, xB = cB.pointerUp, Jc = cB.variation, dc = null !== (Ac = cB.craftFlyAnims) && void 0 !== Ac ? Ac : []
      }
      return (0, lc.jsxs)("div", {
        className: tB()("HotBarContainer", {
          Touch: sc,
          PopupOpen: sc && qB,
          KeysAbove: ec
        }),
        children: [(0, lc.jsxs)("div", {
          className: tB()("HotBar", {
            HoverDisabled: Xc
          }),
          children: [sc && (0, lc.jsxs)(lc.Fragment, {
            children: [(0, lc.jsx)(Ec, {
              useFullInventory: nc,
              inventoryOpen: Cc
            }), (0, lc.jsx)(Nc, {
              direction: "Previous",
              onPress: () => {
                Fc(-1)
              }
            })]
          }), !sc && (0, lc.jsxs)(lc.Fragment, {
            children: [(0, lc.jsx)(oc, {}), (0, lc.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, lc.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((cB, Bc) => (0, lc.jsx)(yB.c, {
              idx: Bc,
              draggedInfo: jB,
              specialItemInfo: Rc,
              craftFlyHoldbackInfo: (0, Lc.g)(dc, Bc),
              setHovered: iB(Bc),
              pointerDown: Kc(Bc),
              pointerUp: xB(Bc),
              variation: Jc,
              isSelected: Bc === aB,
              hoverDisabled: Xc,
              showNumber: Sc
            }, Bc)))
          }), sc && (0, lc.jsx)(Nc, {
            direction: "Next",
            onPress: () => {
              Fc(1)
            }
          }), !sc && (0, lc.jsxs)(lc.Fragment, {
            children: [(0, lc.jsx)("div", {
              className: "HotBarFiller"
            }), (0, lc.jsx)("div", {
              className: tB()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !nc
              }),
              onPointerDown: () => {
                Oc.i.Vu("toggleMenu", "inventory")
              },
              children: (0, lc.jsx)(kB, {})
            })]
          })]
        }), (0, lc.jsx)(Yc, {
          slotIdx: aB
        })]
      })
    }));

    function Nc(cB) {
      let {
        direction: Bc,
        onPress: nc
      } = cB;
      return (0, lc.jsx)("div", {
        className: tB()("HotBarArrow", Bc),
        ...Cc.e,
        children: (0, lc.jsx)(sc.b, {
          icon: "Previous" === Bc ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: nc
        })
      })
    }
    const Ec = (0, Vc.memo)((function(cB) {
        let {
          useFullInventory: Bc,
          inventoryOpen: nc
        } = cB;
        const Vc = (0, Mc.j)("maxAuraLevel");
        return (0, lc.jsxs)("div", {
          className: tB()("TouchInventoryKeys", {
            NoAuraBar: 0 === Vc,
            InventoryOpen: nc
          }),
          children: [(0, lc.jsx)(oc, {
            touchKey: !0
          }), (0, lc.jsx)("div", {
            className: tB()("TouchInventoryKey BagKey", {
              Hidden: !Bc
            }),
            ...Cc.e,
            children: (0, lc.jsx)(kB, {
              touchKey: !0
            })
          })]
        })
      })),
      oc = (0, Vc.memo)((function(cB) {
        let {
          touchKey: Bc = !1
        } = cB;
        const nc = (0, Pc.b)();
        return (0, lc.jsx)("div", {
          className: Bc ? tB()("TouchInventoryKey ShopKey", {
            Hidden: !nc
          }) : tB()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !nc
          }),
          ...Bc ? Cc.e : {},
          children: (0, lc.jsx)(sc.b, {
            icon: (0, qB.Nb)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerup",
            onClick: () => {
              nc && gB.d.set({
                openEverythingMenuName: Sc.i.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Wc(cB) {
      let {
        player: Bc
      } = cB;
      return Bc.some((cB => null !== cB && qB.qc.includes(cB.name)))
    }

    function wc(cB) {
      cB.creative || mB.h.getItem("LogInInventoryRedDotTutorialComplete") || (Wc(cB) ? (Oc.i.Vu("RedDotOpenInventoryIcon", !0), Oc.i.Vu("TouchTutorialOpenInventoryIcon", !0)) : (Oc.i.Vu("RedDotOpenInventoryIcon", !1), Oc.i.Vu("TouchTutorialOpenInventoryIcon", !1)))
    }
    const kB = (0, Vc.memo)((function(cB) {
      let {
        touchKey: Bc = !1
      } = cB;
      return (0, Vc.useEffect)((() => {
        wc(Uc.gameBridge.latest("inventory"))
      }), []), (0, hc.d)("inventory", wc), (0, Tc.f)("toggleMenu", (cB => {
        null !== cB && void 0 !== cB && cB.startsWith("inventory") && Wc(Uc.gameBridge.latest("inventory")) ? (mB.h.setItem("LogInInventoryRedDotTutorialComplete", !0), Oc.i.Vu("RedDotOpenInventoryIcon", !1), Oc.i.Vu("TouchTutorialOpenInventoryIcon", !1)) : "shop" === cB && Oc.i.Vu("showShopTouchTutorial", !1)
      })), Bc ? (0, lc.jsx)(sc.b, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerup",
        onClick: () => {
          Oc.i.Vu("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchIconPosition: "topleft"
      }) : (0, lc.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          Oc.i.Vu("toggleMenu", "inventory")
        },
        children: (0, lc.jsx)(sc.b, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: cB => {
            Oc.i.Vu("toggleMenu", "inventory"), cB.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  35157: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => tB,
      d: () => mB
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(1559),
      sc = nc(1553),
      Mc = nc(1566),
      Pc = nc(1609),
      qB = nc(35161),
      Oc = nc(8201),
      Tc = nc(1226),
      fc = nc(957);
    const mB = (cB, Bc, nc) => {
      let Vc = Bc,
        Ic = !1;
      for (const rB of nc)(null === rB || void 0 === rB ? void 0 : rB.idx) === cB && (Ic = !0, Vc > 0 && (Vc -= rB.amount));
      return {
        displayedAmt: Vc,
        shown: !Ic || Vc > 0
      }
    };
    const ec = cB => {
        let {
          idx: Bc
        } = cB;
        return (0, Tc.s)() ? null : (0, fc.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: Bc < 9 ? Bc + 1 : 0
        })
      },
      tB = (0, Vc.memo)((function(cB) {
        var Bc, nc, Vc;
        let {
          idx: Ic,
          setHovered: Tc,
          pointerDown: tB,
          pointerUp: Sc,
          draggedInfo: yB,
          specialItemInfo: zB,
          craftFlyHoldbackInfo: pc,
          defaultIconB64: hc = null,
          variation: aB,
          isSelected: lc = !1,
          hoverDisabled: Yc = !1,
          showNumber: Lc = !1,
          showNewDot: gB = !1
        } = cB;
        const Uc = (0, Pc.e)("inventory", (cB => Ic === qB.f ? null : (0, Oc.n)(cB, Ic)));
        let bB, Zc, Qc, Cc;
        if (Ic === qB.f) zB && (bB = zB.name, Qc = zB.amount, Cc = zB.attributes);
        else if (Uc) {
          var vB;
          bB = Uc.name, Zc = Uc.icon, Qc = null !== (vB = Uc.amount) && void 0 !== vB ? vB : 0, Cc = Uc.attributes
        }
        const Dc = null === (Bc = Cc) || void 0 === Bc || null === (nc = Bc.customAttributes) || void 0 === nc ? void 0 : nc.enchantmentTier,
          Nc = (0, uc.g)(Cc),
          {
            displayedAmt: Ec,
            shown: oc
          } = mB(Ic, Qc, [yB, zB, pc]),
          Wc = bB && oc,
          wc = void 0 !== aB && function(cB, Bc) {
            const {
              enchantable: nc,
              salvageable: Vc
            } = Mc.gameBridge.latest("stationItems");
            return "Enchanting Table" === cB ? !0 === nc[Bc] : "Salvaging Table" === cB && !0 === Vc[Bc]
          }(aB, bB);
        return (0, fc.jsxs)("div", {
          className: rB()("InvenItem", {
            Highlighted: Wc && wc,
            Selected: lc,
            HoverDisabled: Yc
          }),
          onPointerEnter: () => {
            null === Tc || void 0 === Tc || Tc(!0)
          },
          onPointerLeave: () => {
            null === Tc || void 0 === Tc || Tc(!1)
          },
          onPointerDown: tB,
          onPointerUp: Sc,
          "data-inven-idx": Ic,
          children: [Wc && (0, fc.jsx)(sc.d, {
            itemName: null !== (Vc = Zc) && void 0 !== Vc ? Vc : bB,
            amount: Ec,
            enchantmentTier: Dc,
            bar: Nc
          }), Wc && gB && (0, fc.jsx)("div", {
            className: "InvenItemNewDot"
          }), Lc && (0, fc.jsx)(ec, {
            idx: Ic
          }), hc && !Wc && (0, fc.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${hc})`
            }
          })]
        })
      }))
  },
  35161: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      f: () => Ic
    });
    const Vc = -1,
      Ic = -2
  },
  35607: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Yc
    });
    var Vc = nc(73),
      Ic = nc(1946),
      rB = nc(1536),
      uc = nc(550),
      sc = nc(35),
      Mc = nc(912),
      Pc = nc.n(Mc),
      qB = nc(35207),
      Oc = nc(2027),
      Tc = nc(35213),
      fc = nc(2056),
      mB = nc(2036),
      ec = nc(2785),
      tB = nc(27),
      Sc = nc(1661),
      yB = nc(1908),
      zB = nc(1090),
      pc = nc(3965),
      hc = nc(1609),
      aB = nc(107),
      lc = nc(957);
    const Yc = (0, Vc.memo)((function() {
      const cB = (0, Ic.j)("lobbyLeaderboardInfo"),
        Bc = (0, hc.g)("players"),
        nc = (0, hc.g)("lobbyLeaderboardRows"),
        sc = (0, hc.g)("hiddenPlayerNames"),
        Mc = (0, Vc.useRef)(null),
        [Pc, qB] = (0, Vc.useReducer)((cB => cB + 1), 0);
      return (0, Vc.useEffect)((() => (0, Sc.c)((() => {
        qB()
      }))), []), (0, lc.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, lc.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!cB) return (0, lc.jsx)(lc.Fragment, {});
            const Vc = JSON.parse(JSON.stringify(cB)),
              Ic = [...Bc.ids],
              Pc = {},
              qB = {};
            for (const cB of Ic) {
              var Oc, fc;
              Pc[cB] = null === (Oc = nc[cB]) || void 0 === Oc ? void 0 : Oc.colour;
              const Bc = null === (fc = nc[cB]) || void 0 === fc ? void 0 : fc.values;
              Bc && (qB[cB] = {
                ...Bc
              })
            }
            const mB = Object.keys(Vc);
            mB.sort(((cB, Bc) => Vc[cB].sortPriority - Vc[Bc].sortPriority)), Ic.sort(((cB, Bc) => {
              if (!qB[cB] || !qB[Bc]) return 0;
              for (const nc of mB) {
                const Ic = qB[cB][nc],
                  rB = qB[Bc][nc];
                let uc = 0;
                if ("string" == typeof Ic && "string" == typeof rB ? uc = Ic.localeCompare(rB) : "number" == typeof Ic && "number" == typeof rB ? uc = Ic - rB : "number" == typeof Ic && "string" == typeof rB ? uc = 1 : "string" == typeof Ic && "number" == typeof rB && (uc = -1), uc) return uc * ("ascending" === Vc[nc].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const cB of Ic) {
              var ec, tB, hc;
              const {
                name: Vc,
                ranks: Ic,
                cosmetics: rB
              } = Bc.byId[cB], sc = [], Mc = null !== (ec = null === (tB = nc[cB]) || void 0 === tB || null === (hc = tB.tags) || void 0 === hc ? void 0 : hc.flatMap((cB => 0 === cB.length ? cB : [...cB, String.fromCharCode(8198)]))) && void 0 !== ec ? ec : [];
              sc.push(...Mc), sc.push(...(0, zB.u)(Ic, Vc, (null === rB || void 0 === rB ? void 0 : rB.nameColour) === uc.b || null === rB || void 0 === rB ? void 0 : rB.nameColour)), qB[cB] ??= {}, qB[cB].name = sc
            }

            function aB(cB, nc) {
              if (qB[cB] && void 0 !== qB[cB][nc]) {
                if ("name" === nc) {
                  const {
                    name: Vc,
                    cosmetics: Ic
                  } = Bc.byId[cB];
                  return (0, lc.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Ic && (0, lc.jsx)(yB.b, {
                      cosmetics: Ic
                    }), " ", (0, lc.jsx)(rB.e, {
                      text: qB[cB][nc],
                      friendBadgeFor: (0, Sc.g)(Vc, sc) ? Vc : void 0
                    })]
                  })
                }
                return (0, lc.jsx)(rB.e, {
                  text: qB[cB][nc]
                })
              }
              return ""
            }
            const Yc = Object.keys(Vc).filter((cB => !0 !== Vc[cB].hidden)).map((cB => {
              var Bc;
              return {
                key: cB,
                header: (0, lc.jsx)(rB.e, {
                  text: null !== (Bc = Vc[cB].displayName) && void 0 !== Bc ? Bc : ""
                })
              }
            }));
            return (0, lc.jsx)("div", {
              ref: Mc,
              className: "LobbyLeaderboard",
              children: (0, lc.jsx)(pc.d, {
                columns: Yc,
                rows: Ic,
                getRowKey: cB => cB,
                renderRow: cB => {
                  const nc = cB !== Bc.localId;
                  return (0, lc.jsx)(Lc, {
                    playerId: cB,
                    playerName: Bc.byId[cB].name,
                    isOtherPlayer: nc,
                    opensProfileCard: (0, Tc.i)(nc, Bc.byId[cB].name, sc),
                    lobbyLeaderboardInfo: Vc,
                    getPlayerValue: aB,
                    playerColors: Pc
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Lc(cB) {
      let {
        playerId: Bc,
        playerName: nc,
        isOtherPlayer: Ic,
        opensProfileCard: rB,
        lobbyLeaderboardInfo: uc,
        getPlayerValue: Mc,
        playerColors: Sc
      } = cB;
      const yB = (0, Vc.useRef)(null);
      (0, Vc.useEffect)((() => () => {
        Oc.b.closeIfOwner(yB)
      }), []);
      const zB = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            sc.i.Vu("OpenReportMenu", {
              playerEId: Bc,
              playerName: nc,
              Uu: null,
              serverChatMsgId: null
            })
          }
        },
        pc = () => ({
          ...(0, Tc.e)(Bc, nc),
          showLocation: !1,
          status: null,
          extraActions: [zB],
          friendRequestSource: "leaderboard"
        });
      return (0, lc.jsxs)("tr", {
        ref: yB,
        "data-pad-focusable": rB || void 0,
        [Oc.d]: rB || void 0,
        onClick: rB ? () => {
          var cB;
          Oc.b.toggle(yB, {
            ...pc(),
            anchor: null !== (cB = yB.current.querySelector(".PlayerPfpAndName")) && void 0 !== cB ? cB : yB.current
          })
        } : void 0,
        onContextMenu: rB ? cB => {
          (0, fc.g)(yB, cB, pc(), tB.d.get("isTouchScreen"))
        } : void 0,
        onPointerDown: rB ? cB => {
          (0, mB.b)(cB, (() => (0, Tc.e)(Bc, nc).playerSocialPreview))
        } : void 0,
        children: [Object.keys(uc).map((cB => !0 === uc[cB].hidden ? null : (0, lc.jsxs)("td", {
          className: Pc()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Ic
          }),
          children: [(0, lc.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: Mc(Bc, cB)
          }), (0, lc.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: Sc[Bc]
            }
          })]
        }, cB))), Ic && !rB && (0, lc.jsx)(qB.c, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: yB,
          options: [{
            icon: zB.icon,
            text: zB.text,
            onPointerDown: zB.onClick
          }, ...null === nc || aB.featureFlags.useSocialFeatures ? [] : (0, ec.e)(null, nc)]
        })]
      })
    }
  },
  35543: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      g: () => Oc,
      i: () => Tc
    });
    var Vc = nc(912),
      Ic = nc.n(Vc),
      rB = nc(35549),
      uc = nc(73),
      sc = nc(1946),
      Mc = nc(981),
      Pc = nc(957);
    const qB = "InGameHeaderContainer",
      Oc = "TopRightElements",
      Tc = (0, uc.memo)((function() {
        const [cB] = (0, Mc.e)(), Bc = (0, sc.m)("middleTextTop"), nc = (0, uc.useRef)(null), [Vc, Tc] = (0, uc.useState)(!1), fc = Bc.hasText;
        return (0, uc.useLayoutEffect)((() => {
          const cB = nc.current;
          if (!cB) return;
          const Bc = document.querySelector(`.${qB}`),
            Vc = document.querySelector(`.${Oc}`),
            Ic = () => {
              const nc = cB.getBoundingClientRect(),
                Ic = Bc ? Bc.getBoundingClientRect().right : 0,
                rB = Vc ? Vc.getBoundingClientRect().left : window.innerWidth,
                uc = nc.left < Ic + 8,
                sc = nc.right > rB - 8;
              Tc(uc || sc)
            };
          Ic();
          const rB = new ResizeObserver(Ic);
          return rB.observe(cB), Bc && rB.observe(Bc), Vc && rB.observe(Vc), () => {
            rB.disconnect()
          }
        }), [fc, Bc.content, cB]), fc ? (0, Pc.jsx)("div", {
          className: Ic()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Vc
          }),
          children: (0, Pc.jsx)(rB.b, {
            ref: nc,
            className: "MiddleTextTop",
            text: Bc
          })
        }) : null
      }))
  },
  35074: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      c: () => Tc
    });
    var Vc = nc(73),
      Ic = nc(1194),
      rB = nc(1051),
      uc = nc(1188),
      sc = nc(2648),
      Mc = nc(3977),
      Pc = nc(957);

    function qB(cB) {
      let {
        loading: Bc,
        schematics: nc,
        onSchematicPicked: Vc,
        selectedSchematicIdList: Ic = [],
        disableAutoExport: Mc
      } = cB;
      const {
        t: qB
      } = (0, rB.x)();
      return (0, Pc.jsxs)("div", {
        className: "SchematicList",
        children: [Bc && (0, Pc.jsx)(uc.e, {}), !Bc && 0 === nc.length && (0, Pc.jsx)("div", {
          className: "NoSchematicsText",
          children: qB("worldBuilder:noSavedSchematic")
        }), !Bc && nc.map((cB => (0, Pc.jsx)(sc.g, {
          source: {
            type: "schematic",
            schematic: cB
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            Vc(cB)
          },
          isSelected: Ic.includes(cB.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: cB.isAutoExported && Mc,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, cB.schematicId)))]
      })
    }

    function Oc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Ic
      } = cB;
      const {
        t: uc
      } = (0, rB.x)(), [sc, Oc] = (0, Vc.useState)(null);
      return (0, Pc.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === sc && (0, Pc.jsxs)(Pc.Fragment, {
          children: [(0, Pc.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: uc("worldBuilder:schematicList")
          }), (0, Pc.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: uc("worldBuilder:clickSchematicForOptions")
          }), (0, Pc.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Pc.jsx)(qB, {
              loading: !1,
              schematics: Bc,
              onSchematicPicked: cB => {
                Oc(cB)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== sc && (0, Pc.jsx)(Mc.h, {
          schematic: sc,
          inSourceWorld: sc.schematicId === nc,
          onSchematicUpdate: cB => {
            Oc(cB)
          },
          onClose: () => {
            Oc(null), Ic()
          }
        })]
      })
    }

    function Tc(cB) {
      let {
        ownedSchematics: Bc,
        currentWorldSchematicId: nc,
        onClose: Vc
      } = cB;
      Ic.NotificationProvider.showCustomPopup({
        body: cB => (0, Pc.jsx)(Oc, {
          ownedSchematics: Bc,
          currentWorldSchematicId: nc,
          onClose: cB
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: Vc,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  35526: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => hc,
      f: () => pc
    });
    var Vc = nc(3461),
      Ic = nc(1252),
      rB = nc(73),
      uc = nc(5454),
      sc = nc(3443),
      Mc = nc(1142),
      Pc = nc(1566),
      qB = nc(1536),
      Oc = nc(1255),
      Tc = nc(1051),
      fc = nc(35531),
      mB = nc(912),
      ec = nc.n(mB),
      tB = nc(1164),
      Sc = nc(926),
      yB = nc(1134),
      zB = nc(957);
    const pc = "SleepingOverlay";

    function hc() {
      const {
        t: cB
      } = (0, Tc.x)(), [Bc, nc] = (0, rB.useState)(!1), [mB, hc] = (0, rB.useState)(null), [lc, Yc] = (0, rB.useState)(1), [Lc, gB] = (0, rB.useState)(!1), [Uc, bB] = (0, rB.useState)(!1), Zc = (0, rB.useRef)(0), Qc = (0, rB.useRef)(!1), Cc = (0, rB.useRef)(!1), vB = (0, rB.useRef)(), Dc = (0, rB.useRef)(null);

      function Nc() {
        const cB = null !== mB && void 0 !== mB ? mB : "Rested Speed";
        Pc.gameBridge.send("wakeUp", Uc ? cB : null), Dc.current = null, nc(!1), hc(null), Yc(1), gB(!1), bB(!1)
      }

      function Ec() {
        return !Lc && (Nc(), !0)
      }
      return (0, Ic.f)("PlayerPhysicsTypeUpdate", (cB => {
        cB !== Dc.current && (Dc.current = cB, cB === uc.o.SLEEPING ? (Cc.current || (Zc.current = Pc.gameBridge.lookup("cameraZoom", null), Cc.current = !0), Qc.current = !0, Pc.gameBridge.send("setCameraZoom", 3), nc(!0), Yc(function() {
          for (const cB of Pc.gameBridge.lookup("blocksStandingOn", null)) {
            if (fc.b.leafBeds.includes(cB)) return console.log(`Found leaf bed: ${cB}`), 1;
            if (fc.b.woolBeds.includes(cB)) return console.log(`Found woold bed: ${cB}`), 2;
            if (fc.b.strongBeds.includes(cB)) return console.log(`Found strong bed ${cB}`), 3
          }
          return 1
        }())) : (Cc.current = !1, nc(!1), hc(null), Yc(1)))
      })), (0, rB.useEffect)((() => () => {
        (0, Mc.l)(pc)
      }), []), (0, rB.useEffect)((() => {
        Bc ? (0, Mc.o)(pc) : ((0, Mc.l)(pc), Qc.current && (Pc.gameBridge.send("setCameraZoom", Zc.current), Qc.current = !1))
      }), [Bc]), (0, yB.v)("overlay", vB, Ec, Bc), (0, zB.jsx)(Vc.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: Bc,
        timeout: 300,
        nodeRef: vB,
        unmountOnExit: !0,
        children: (0, zB.jsx)("div", {
          ref: vB,
          onClick: cB => {
            Ec() && cB.stopPropagation()
          },
          children: (0, zB.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, zB.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: sc.i.map((Bc => (0, zB.jsxs)(aB, {
                restedEffect: Bc,
                OJ: mB,
                setChosenRestedEffect: hc,
                children: [(0, zB.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, zB.jsx)(qB.e, {
                    text: [{
                      icon: Bc
                    }]
                  }), sc.f[Bc].shortName]
                }), (0, zB.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: cB(sc.f[Bc].description, {
                    time: sc.f[Bc].effectLevelDurations[lc] / 6e4
                  })
                })]
              }, Bc)))
            }), (0, zB.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, zB.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, zB.jsxs)(Oc.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: cB => {
                  Uc ? Nc() : (gB(!0), (0, tB.bb)((() => {
                    gB(!1), bB(!0)
                  }), !0)), cB.stopPropagation()
                },
                loading: Lc,
                children: [!Uc && (0, zB.jsxs)(zB.Fragment, {
                  children: [(0, zB.jsx)(Sc.e, {
                    name: "film"
                  }), " ", cB("classicGame:watchAdToGetRestedPerk")]
                }), Uc && cB("classicGame:wakeUp")]
              }), (0, zB.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, zB.jsx)("div", {
                  className: ec()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === lc
                  }),
                  children: (0, zB.jsx)(qB.e, {
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
    const aB = (0, rB.memo)((function(cB) {
      let {
        children: Bc,
        restedEffect: nc,
        OJ: Vc,
        setChosenRestedEffect: Ic
      } = cB;
      return nc === Vc ? (0, zB.jsx)(Oc.n, {
        onClick: cB => {
          cB.stopPropagation()
        },
        children: Bc
      }) : (0, zB.jsx)(Oc.g, {
        onClick: cB => {
          Ic(nc), cB.stopPropagation()
        },
        children: Bc
      })
    }))
  },
  35213: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Pc,
      i: () => Mc
    });
    var Vc = nc(550),
      Ic = nc(1566),
      rB = nc(1466),
      uc = nc(107),
      sc = nc(1125);

    function Mc(cB, Bc, nc) {
      return uc.featureFlags.useSocialFeatures && cB && null === (0, sc.e)(Bc, nc)
    }

    function Pc(cB, Bc) {
      var nc, uc;
      const sc = rB.e.getSocialState().friends.find((cB => cB.name.toLowerCase() === Bc.toLowerCase())),
        Mc = Ic.gameBridge.latest("players").byId[cB],
        Pc = void 0 !== Mc && Mc.name === Bc,
        qB = Pc && null !== (nc = Mc.cosmetics) && void 0 !== nc ? nc : void 0,
        Oc = sc && qB ? {
          ...sc,
          cosmetics: qB
        } : sc;
      return {
        playerSocialPreview: null !== Oc && void 0 !== Oc ? Oc : {
          isError: !1,
          name: Bc,
          ranks: Pc ? [...Mc.ranks] : [],
          cosmetics: null !== qB && void 0 !== qB ? qB : {},
          nameColour: null !== (uc = null === qB || void 0 === qB ? void 0 : qB.nameColour) && void 0 !== uc ? uc : Vc.b,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== sc
      }
    }
  },
  35175: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => qB,
      f: () => Tc,
      i: () => Oc,
      m: () => fc,
      q: () => Pc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(35184),
      sc = nc(35),
      Mc = nc(957);

    function Pc(cB, Bc) {
      const nc = (0, Vc.useRef)(null);
      return (0, Vc.useLayoutEffect)((() => (uc.e.set(cB, nc.current, Bc), () => {
        uc.e.set(cB, null)
      })), [cB, Bc]), nc
    }
    const qB = "touchKeysChanged",
      Oc = {
        Crouch: "C",
        Jump: "J",
        Use: "U",
        Primary: "P",
        Attack: "A",
        Game: "G",
        Context: "X"
      },
      Tc = (0, Vc.forwardRef)((function(cB, Bc) {
        let {
          slot: nc,
          canvasZone: Ic = !1,
          lit: uc = !1,
          label: Pc,
          className: Oc,
          children: Tc,
          ...fc
        } = cB;
        return (0, Vc.useEffect)((() => (sc.i.Vu(qB), () => {
          sc.i.Vu(qB)
        })), []), (0, Mc.jsx)("div", {
          ref: Bc,
          className: rB()("TouchKeyHit", `TouchSlot${nc}`, Oc, {
            CanvasZone: Ic
          }),
          ...fc,
          children: (0, Mc.jsxs)("div", {
            className: rB()("TouchKey", {
              Lit: uc,
              Labelled: void 0 !== Pc
            }),
            children: [Tc, void 0 !== Pc && (0, Mc.jsx)("span", {
              className: "TouchKeyLabel",
              children: Pc
            })]
          })
        })
      }));

    function fc(cB, Bc) {
      const nc = Bc ? [Oc.Context] : [Oc.Primary, Oc.Context];
      return cB.filter((cB => null !== cB)).slice(0, nc.length).map(((cB, Bc) => {
        const Ic = nc[Bc];
        return (0, Mc.jsx)(Vc.Fragment, {
          children: cB.render(Ic)
        }, `${cB.id}:${Ic}`)
      }))
    }
  },
  3965: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc
    });
    var Vc = nc(73),
      Ic = nc(912),
      rB = nc.n(Ic),
      uc = nc(957);

    function sc(cB) {
      let {
        columns: Bc,
        rows: nc,
        getRowKey: Ic,
        renderRow: sc,
        className: Mc
      } = cB;
      return (0, uc.jsxs)("table", {
        className: rB()("Table", Mc),
        children: [(0, uc.jsx)("thead", {
          children: (0, uc.jsx)("tr", {
            children: Bc.map((cB => (0, uc.jsx)("th", {
              children: cB.header
            }, cB.key)))
          })
        }), (0, uc.jsx)("tbody", {
          children: nc.map((cB => (0, uc.jsx)(Vc.Fragment, {
            children: sc(cB)
          }, Ic(cB))))
        })]
      })
    }
  },
  35498: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => pc,
      f: () => zB,
      h: () => Tc
    });
    var Vc = nc(73),
      Ic = nc(83),
      rB = nc(1210),
      uc = nc(1255),
      sc = nc(1205),
      Mc = nc(1134),
      Pc = nc(1051),
      qB = nc(35501),
      Oc = nc(957);

    function Tc(cB) {
      const [Bc, nc] = (0, Vc.useState)((() => (0, qB.n)(cB)));
      return (0, Vc.useEffect)((() => (nc((0, qB.n)(cB)), (0, qB.H)((() => {
        nc((0, qB.n)(cB))
      })))), [cB]), Bc
    }

    function fc(cB, Bc) {
      "function" === typeof cB ? cB(Bc) : cB && (cB.current = Bc)
    }

    function mB(cB) {
      let {
        tutorial: Bc,
        step: nc,
        enabled: Vc = !0
      } = cB;
      const Ic = Tc(Bc);
      return Vc && Ic === nc
    }

    function ec(cB, Bc) {
      const nc = (0, qB.o)(cB),
        Vc = nc.indexOf(Bc);
      return !nc.slice(Vc + 1).some((Bc => (0, qB.w)(cB, Bc)))
    }

    function tB(cB, Bc, nc, Vc) {
      let {
        tutorial: Ic,
        step: rB,
        waitForClick: uc = !1,
        onPrevious: sc
      } = cB;
      const Pc = Bc && (0, qB.u)(Ic, rB),
        Oc = Bc && !ec(Ic, rB),
        Tc = uc ? Vc : nc;
      let fc = null;
      Pc ? fc = () => {
        null === sc || void 0 === sc || sc(), (0, qB.r)(Ic, rB)
      } : Oc && (fc = () => {
        (0, qB.k)(Ic)
      }), (0, Mc.v)("popup", null !== Tc && void 0 !== Tc ? Tc : nc, fc, Bc && null !== Tc, null, Pc ? void 0 : "controller:menusSkipTutorial")
    }

    function Sc(cB) {
      let {
        tutorial: Bc,
        step: nc,
        text: Vc,
        waitForClick: Ic = !1,
        onPrevious: rB
      } = cB;
      const {
        t: sc
      } = (0, Pc.x)(), Mc = ec(Bc, nc);
      return (0, Oc.jsxs)(Oc.Fragment, {
        children: [(0, Oc.jsx)("div", {
          className: "TutorialStepText",
          children: Vc
        }), (0, Oc.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, qB.u)(Bc, nc) && (0, Oc.jsx)(uc.g, {
            className: "TutorialStepButton",
            onClick: () => {
              null === rB || void 0 === rB || rB(), (0, qB.r)(Bc, nc)
            },
            children: sc("tutorial:back")
          }), !Ic && (0, Oc.jsx)(uc.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, qB.f)(nc)
            },
            padDefaultFocus: !0,
            children: sc(Mc ? "tutorial:done" : "tutorial:next")
          }), !Mc && (0, Oc.jsx)(uc.g, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, qB.k)(Bc)
            },
            children: sc("tutorial:skip")
          })]
        })]
      })
    }

    function yB(cB) {
      let {
        rect: Bc
      } = cB;
      const nc = Math.max(0, Bc.top - 6),
        Vc = Bc.bottom + 6,
        Ic = Math.max(0, Bc.left - 6),
        rB = Bc.right + 6;
      return (0, Oc.jsxs)(Oc.Fragment, {
        children: [(0, Oc.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: nc
          }
        }), (0, Oc.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Vc,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, Oc.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: nc,
            left: 0,
            width: Ic,
            height: Vc - nc
          }
        }), (0, Oc.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: nc,
            left: rB,
            right: 0,
            height: Vc - nc
          }
        })]
      })
    }
    const zB = (0, Vc.forwardRef)((function(cB, Bc) {
      let {
        placement: nc = "right",
        children: uc,
        ...Mc
      } = cB;
      const Pc = mB(Mc),
        qB = (0, Vc.useRef)(null),
        Tc = (0, Vc.useRef)(null);
      tB(Mc, Pc, qB, Tc);
      const {
        getArrowProps: ec,
        getTooltipProps: zB,
        setTooltipRef: pc,
        setTriggerRef: hc
      } = (0, rB.d)({
        placement: nc,
        trigger: null,
        visible: Pc,
        interactive: !0,
        closeOnOutsideClick: !1
      }), [aB, lc] = (0, Vc.useState)(null), Yc = function(cB, Bc) {
        const [nc, Ic] = (0, Vc.useState)(null);
        return (0, Vc.useEffect)((() => {
          if (!Bc || !cB) return void Ic(null);
          let nc = 0,
            Vc = null;
          const rB = () => {
            const Bc = cB.getBoundingClientRect();
            Vc && Bc.left === Vc.left && Bc.top === Vc.top && Bc.width === Vc.width && Bc.height === Vc.height || (Vc = Bc, Ic(Bc)), nc = requestAnimationFrame(rB)
          };
          return rB(), () => {
            cancelAnimationFrame(nc)
          }
        }), [cB, Bc]), nc
      }(aB, Pc);
      (0, Vc.useEffect)((() => {
        Pc && aB && aB.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [Pc, aB]);
      const Lc = uc.ref,
        gB = (0, Vc.useCallback)((cB => {
          hc(cB), Tc.current = cB, lc(cB), fc(Bc, cB), fc(Lc, cB)
        }), [hc, Bc, Lc]),
        Uc = (0, Vc.useCallback)((cB => {
          pc(cB), qB.current = cB
        }), [pc]);
      return (0, Oc.jsxs)(Oc.Fragment, {
        children: [(0, Vc.cloneElement)(uc, {
          ref: gB
        }), Pc && (0, Ic.createPortal)((0, Oc.jsxs)(Oc.Fragment, {
          children: [Yc && (0, Oc.jsx)(yB, {
            rect: Yc
          }), (0, Oc.jsxs)("div", {
            ref: Uc,
            ...zB({
              className: "tooltip-container SmallTextLight TutorialStep"
            }),
            children: [(0, Oc.jsx)(Sc, {
              ...Mc
            }), (0, Oc.jsx)("div", {
              ...ec({
                className: "tooltip-arrow"
              })
            })]
          })]
        }), (0, sc.e)())]
      })
    }));

    function pc(cB) {
      const Bc = mB(cB),
        nc = (0, Vc.useRef)(null);
      return tB(cB, Bc, nc, null), Bc ? (0, Ic.createPortal)((0, Oc.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, Oc.jsx)("div", {
          ref: nc,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, Oc.jsx)(Sc, {
            ...cB
          })
        })
      }), (0, sc.e)()) : null
    }
  },
  5542: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(73),
      Ic = nc(51);

    function rB(cB, Bc) {
      var nc;
      const [rB, uc] = (0, Vc.useState)(null !== (nc = Ic.h.getItem(cB)) && void 0 !== nc ? nc : Bc);
      return [rB, Bc => {
        Ic.h.setItem(cB, Bc), uc(Bc)
      }]
    }
  },
  35345: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => sc,
      d: () => Mc
    });
    var Vc = nc(73),
      Ic = nc(27),
      rB = nc(1252),
      uc = nc(35175);

    function sc(cB, Bc, nc) {
      let Vc = null;
      for (const rB of document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit")) {
        const uc = rB.getBoundingClientRect();
        var Ic;
        if (uc.height > 0 && uc.top > nc && uc.left < Bc && uc.right > cB) Vc = Math.min(null !== (Ic = Vc) && void 0 !== Ic ? Ic : uc.top, uc.top)
      }
      return Vc
    }

    function Mc(cB, Bc) {
      const {
        isTouchScreen: nc
      } = (0, Ic.j)(["isTouchScreen"]), Mc = (0, Vc.useRef)(null);
      (0, rB.f)(uc.b, (() => {
        var cB;
        null === (cB = Mc.current) || void 0 === cB || cB.call(Mc)
      })), (0, Vc.useEffect)((() => {
        const Vc = null === cB || void 0 === cB ? void 0 : cB.closest(Bc),
          Ic = document.querySelector(".BottomRightElements");
        if (!nc || !cB || !Vc || !Ic) return;
        const rB = () => {
          ! function(cB, Bc) {
            const nc = cB.getBoundingClientRect(),
              Vc = sc(nc.left, nc.right, -1 / 0),
              Ic = Bc.getBoundingClientRect().bottom + parseFloat(getComputedStyle(Bc).bottom),
              rB = null === Vc ? "0px" : `${Math.ceil(Ic-Vc+4)}px`;
            Bc.style.getPropertyValue("--touch-keys-reach") !== rB && Bc.style.setProperty("--touch-keys-reach", rB)
          }(cB, Vc)
        };
        Mc.current = rB;
        const uc = new ResizeObserver(rB);
        return uc.observe(cB), uc.observe(Ic), window.addEventListener("resize", rB), () => {
          Mc.current = null, uc.disconnect(), window.removeEventListener("resize", rB), Vc.style.setProperty("--touch-keys-reach", "0px")
        }
      }), [nc, cB, Bc])
    }
  },
  35507: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB
    });
    var Vc = nc(27),
      Ic = nc(1164);

    function rB() {
      const {
        clientEscMenuOptions: cB
      } = (0, Vc.j)(["clientEscMenuOptions"]);
      return (0, Ic.z)() && cB.showChat
    }
  },
  35446: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Mc
    });
    var Vc = nc(2187),
      Ic = nc(2848),
      rB = nc(2230);
    const uc = ["Unable to create vertex buffer"];
    let sc = {};

    function Mc(cB, Bc) {
      const nc = new Date;
      console.error(`${nc.getUTCHours()}:${nc.getUTCMinutes()}:${nc.getUTCSeconds()}`, cB, Bc, null === Bc || void 0 === Bc ? void 0 : Bc.stack), uc.includes(null === Bc || void 0 === Bc ? void 0 : Bc.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, Vc.e)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${Bc.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, rB.logError)("warning", `${cB}\n ${Bc} "\n" ${null===Bc||void 0===Bc?void 0:Bc.stack}`);
      const Ic = cB + Bc + (null === Bc || void 0 === Bc ? void 0 : Bc.stack);
      Ic in sc || ((0, rB.logError)("error", `${cB}\n ${Bc} "\n" ${null===Bc||void 0===Bc?void 0:Bc.stack}`), sc[Ic] = !0)
    }(0, Ic.onGameReset)((() => {
      sc = {}
    }))
  },
  35337: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Ic
    });
    const Vc = [{
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

    function Ic(cB, Bc, nc) {
      const Ic = Math.abs(cB - Bc),
        rB = Date.now() - nc;
      for (const uc of Vc)
        if (cB < uc.maxDist) return Ic >= uc.hardUpdateDist || rB > uc.timeBetweenSoftChecks && Ic >= uc.softUpdateDist;
      return !1
    }
  },
  35554: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => uc,
      f: () => rB,
      h: () => Ic
    });
    const Vc = [.25, .5, 1, 2, 4, 8, 16];

    function Ic(cB, Bc) {
      const nc = Vc;
      let Ic = nc.indexOf(cB);
      return -1 === Ic && (Ic = nc.findIndex((Bc => Bc >= cB)), -1 === Ic && (Ic = nc.length - 1)), "up" === Bc ? nc[Math.min(Ic + 1, nc.length - 1)] : nc[Math.max(Ic - 1, 0)]
    }

    function rB(cB) {
      return cB <= Vc[0]
    }

    function uc(cB) {
      return cB >= Vc[Vc.length - 1]
    }
  },
  35594: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Vc,
      g: () => Ic
    });
    const Vc = "data-replay-ui-active",
      Ic = [{
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
  35601: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Pc,
      e: () => Oc,
      f: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(35594);

    function uc() {
      const cB = {};
      for (const {
          group: Bc
        }
        of rB.g) cB[Bc] = !0;
      return cB
    }
    let sc = uc();

    function Mc() {
      Ic.i.Vu("replayViewer|uiVisibilityChanged")
    }

    function Pc() {
      return sc
    }

    function qB(cB, Bc) {
      sc[cB] !== Bc && (sc = {
        ...sc,
        [cB]: Bc
      }, "nametag" === cB && Vc.d.set({
        areNametagsHidden: !Bc
      }), Mc())
    }

    function Oc() {
      sc = uc(), Vc.d.set({
        areNametagsHidden: !1
      }), Mc()
    }
  },
  35463: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      cB instanceof Promise ? cB.then(Bc).catch((cB => {
        console.error("Couldn't open the preview", cB)
      })) : Bc(cB)
    }
    nc.d(Bc, {
      c: () => uc
    });
    class Ic {
      constructor(cB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height), null !== this.view && cB.show(this.view))
        }))
      }
      show(cB) {
        var Bc;
        this.view = cB, null === (Bc = this.opened) || void 0 === Bc || Bc.show(cB)
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    class rB {
      constructor(cB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(cB).then((cB => cB.ready)), Vc(cB, (cB => {
          this.closed ? cB.close() : (this.opened = cB, null !== this.size && cB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var cB, Bc;
        return null !== (cB = null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.isReady()) && void 0 !== cB && cB
      }
      setCosmetic(cB, Bc) {
        var nc;
        null === (nc = this.opened) || void 0 === nc || nc.setCosmetic(cB, Bc)
      }
      playEmote(cB) {
        var Bc;
        null === (Bc = this.opened) || void 0 === Bc || Bc.playEmote(cB)
      }
      async untilDrawn(cB) {
        var Bc;
        await this.ready, await (null === (Bc = this.opened) || void 0 === Bc ? void 0 : Bc.untilDrawn(cB))
      }
      resize(cB, Bc) {
        var nc;
        this.size = {
          width: cB,
          height: Bc
        }, null === (nc = this.opened) || void 0 === nc || nc.resize(cB, Bc)
      }
      close() {
        var cB;
        this.closed = !0, null === (cB = this.opened) || void 0 === cB || cB.close(), this.opened = null
      }
    }
    const uc = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(cB) {
        this.host = cB
      }
      setDefaultHost(cB) {
        this.makeDefault = cB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(cB) {
        return new Ic(this.current().openMob(cB))
      }
      openPet(cB) {
        return new Ic(this.current().openPet(cB))
      }
      openMobLineup(cB) {
        return new Ic(this.current().openMobLineup(cB))
      }
      openCharacter(cB) {
        return new rB(this.current().openCharacter(cB))
      }
    }
  },
  35460: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.c
    });
    var Vc = nc(35463);
    class Ic {
      constructor(cB) {
        this.load = cB, this.loaded = null, this.loading = null
      }
      run(cB) {
        return null !== this.loaded ? cB(this.loaded) : (this.loading ??= this.load().then((cB => (this.loaded = cB, cB)), (cB => {
          throw this.loading = null, cB
        })), this.loading.then(cB))
      }
    }
    class rB {
      constructor() {
        this.mobScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(145)]).then((() => nc(39167))))), this.characterScene = new Ic((() => Promise.all([nc.e(212), nc.e(211), nc.e(230), nc.e(231), nc.e(63), nc.e(62), nc.e(228), nc.e(61), nc.e(238), nc.e(232), nc.e(237), nc.e(235), nc.e(227), nc.e(203), nc.e(266), nc.e(208), nc.e(221), nc.e(233), nc.e(236), nc.e(123), nc.e(181), nc.e(219), nc.e(204), nc.e(101), nc.e(99), nc.e(267), nc.e(144)]).then((() => nc(39259)))))
      }
      openMob(cB) {
        return this.mobScene.run((Bc => Bc.openMobPreview(cB)))
      }
      openPet(cB) {
        return this.mobScene.run((Bc => Bc.openPetPreview(cB)))
      }
      openMobLineup(cB) {
        return this.mobScene.run((Bc => Bc.openMobLineupPreview(cB)))
      }
      openCharacter(cB) {
        return this.characterScene.run((Bc => Bc.openCharacterPreview(cB)))
      }
    }
    Vc.c.setDefaultHost((() => new rB))
  },
  35437: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      e: () => rB
    });
    const Vc = new Map;

    function Ic(cB) {
      var Bc;
      return null === cB ? null : null !== (Bc = Vc.get(cB)) && void 0 !== Bc ? Bc : null
    }

    function rB(cB, Bc) {
      return Vc.set(cB, Bc), () => {
        Vc.get(cB) === Bc && Vc.delete(cB)
      }
    }
  },
  35253: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => rB,
      h: () => ec,
      i: () => tB,
      m: () => sc,
      p: () => Tc,
      q: () => Sc,
      t: () => Oc,
      w: () => zB,
      x: () => mB,
      y: () => yB
    });
    var Vc = nc(27),
      Ic = nc(35);
    const rB = "clientGameInventoryButtonsChanged",
      uc = new Map;

    function sc() {
      return [...uc.values()].sort(((cB, Bc) => {
        var nc, Vc;
        return (null !== (nc = cB.order) && void 0 !== nc ? nc : 0) - (null !== (Vc = Bc.order) && void 0 !== Vc ? Vc : 0)
      }))
    }
    let Mc = null;

    function Pc(cB) {
      Mc = cB
    }
    let qB = !1;

    function Oc(cB) {
      qB = !0;
      try {
        cB.onClick()
      } finally {
        qB = !1
      }
      cB.panel && "clientGame" === Vc.d.get("openInGameMenuName") && Pc(cB.id)
    }

    function Tc() {
      return qB
    }

    function fc() {
      return sc().filter((cB => cB.panel && !cB.disabled))
    }

    function mB(cB) {
      const Bc = fc(),
        nc = Bc.findIndex((cB => cB.id === Mc));
      return !(nc < 0 || Bc.length < 2) && (Oc(Bc[(nc + cB + Bc.length) % Bc.length]), !0)
    }

    function ec() {
      return null !== Mc && fc().length > 1
    }

    function tB() {
      Pc(null)
    }

    function Sc() {
      "inventory" !== Vc.d.get("openInGameMenuName") && Pc(null)
    }

    function yB() {
      const cB = Mc;
      return Pc(null), cB
    }

    function zB(cB) {
      return uc.set(cB.id, cB), Ic.i.Vu(rB, sc(), !0), () => {
        uc.get(cB.id) === cB && (uc.delete(cB.id), Ic.i.Vu(rB, sc()))
      }
    }
  },
  35247: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => sc,
      f: () => tB,
      j: () => Sc,
      m: () => Tc,
      o: () => Pc,
      s: () => ec,
      w: () => fc,
      x: () => qB
    });
    var Vc = nc(27),
      Ic = nc(35),
      rB = nc(1142),
      uc = nc(35253);
    const sc = "clientGameUiChanged";
    let Mc = null;

    function Pc() {
      return Mc
    }

    function qB(cB, Bc) {
      const nc = {
        content: cB,
        menu: Bc
      };
      return Mc = nc, Ic.i.Vu(sc, Mc, !0), () => {
        Mc === nc && (Mc = null, mB = !1, tB(), Ic.i.Vu(sc, null))
      }
    }
    let Oc = null;

    function Tc() {
      return Oc
    }

    function fc(cB) {
      return Oc = cB, () => {
        Oc === cB && (Oc = null)
      }
    }
    let mB = !1;

    function ec() {
      const cB = Vc.d.get("openInGameMenuName");
      "clientGame" !== cB && (mB = "inventory" === cB), (0, uc.p)() || (0, uc.i)(), (0, rB.o)("InGameMenu"), Vc.d.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function tB() {
      yB(!1)
    }

    function Sc() {
      yB(mB)
    }

    function yB(cB) {
      "clientGame" === Vc.d.get("openInGameMenuName") && Vc.d.set({
        openInGameMenuName: cB ? "inventory" : null
      }), cB || (0, uc.i)(), mB = !1
    }
  },
  35567: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => GB,
      e: () => AB
    });
    var Vc = nc(3441),
      Ic = nc(569),
      rB = nc(2945),
      uc = nc(2911),
      sc = nc.n(uc);
    const Mc = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Pc = "EV_boolean",
      qB = "EV_double",
      Oc = "EV_string",
      Tc = "EV_doubleArr",
      fc = "EV_armour",
      mB = "EV_other",
      ec = "EV_cosmetics",
      tB = "OEV_boolean",
      Sc = "OEV_int",
      yB = "OEV_double",
      zB = "OEV_string",
      pc = "OEV_stringArr",
      hc = "OEV_meshScaling",
      aB = "IV_int",
      lc = "IV_string",
      Yc = "IV_doubleArr",
      Lc = "IV_double",
      gB = "HV_int",
      Uc = "HV_slots",
      bB = "EnvV_string",
      Zc = "EnvV_double",
      Qc = "EnvV_doubleArr",
      Cc = "EnvV_boolean",
      vB = {
        type: Oc,
        name: Oc,
        position: Tc,
        rotation: Tc,
        scale: qB,
        speed: qB,
        jumping: Pc,
        crouching: Pc,
        cameraPitch: qB,
        armSwinging: Pc,
        heldItemName: Oc,
        heldItemEnchantmentTier: Oc,
        pose: Oc,
        followingEId: Oc,
        ridingVehicleEId: Oc,
        leaderboardTop: Oc,
        meshKind: Oc,
        meshOpts: Oc,
        followingOffset: Tc,
        shouldMatchFollowingEntityRotation: Pc,
        meshOffset: Tc,
        baseRenderHeading: qB,
        armour: fc,
        Mnc: mB,
        playerCustomisations: ec,
        variation: Oc,
        metaInfo: Oc,
        soundName: Oc,
        volume: qB,
        refDistance: qB,
        maxHearDist: qB,
        rate: qB,
        aiState: Oc
      },
      Dc = {
        opacity: yB,
        zIndex: Sc,
        overlayColour: zB,
        canSee: tB,
        meshScaling: hc,
        nameTagInfo: zB,
        multilineTextBox: zB,
        hasPriorityNametag: tB,
        ranks: pc,
        nameColour: zB,
        _isAlive: tB,
        _invisibleEffect: tB,
        _invincible: tB,
        killfeedColour: zB,
        hideNameSeed: Sc,
        _glowingEffect: tB,
        lockHeadToBody: tB
      },
      Nc = {
        itemName: lc,
        amount: aB,
        position: Yc,
        size: Lc,
        attributes: lc
      },
      Ec = {
        skyBox: bB,
        fogColourOverride: bB,
        fogChunkDistanceOverride: Zc,
        cameraTint: Qc,
        fogOnSkybox: Cc,
        fogBlockDistanceOverride: Zc
      },
      oc = {
        type: "array",
        items: "double"
      },
      Wc = {
        type: "array",
        items: "int"
      },
      wc = {
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
      kB = {
        type: "map",
        values: oc
      };

    function Xc(cB, Bc) {
      return {
        type: "record",
        name: cB,
        fields: [{
          name: "x",
          type: Bc
        }]
      }
    }
    const Hc = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Xc(tB, "boolean"), Xc(Sc, "int"), Xc(yB, "double"), Xc(zB, "string"), Xc(pc, {
              type: "array",
              items: "string"
            }), Xc(hc, kB)]
          }]
        }
      },
      Fc = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Xc(Pc, "boolean"), Xc(qB, "double"), Xc(Oc, "string"), Xc(Tc, oc), Xc(fc, wc), Xc(mB, Hc), Xc(ec, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Jc = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Xc(aB, "int"), Xc(lc, "string"), Xc(Lc, "double"), Xc(Yc, oc)]
          }]
        }
      },
      jB = {
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
      Rc = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Xc(gB, "int"), Xc(Uc, jB)]
        }]
      },
      iB = {
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
      Kc = {
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
      xB = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Xc(bB, "string"), Xc(Zc, "double"), Xc(Qc, oc), Xc(Cc, "boolean")]
          }]
        }
      },
      dc = [{
        name: "UBc",
        type: "record",
        fields: [{
          name: "pos",
          type: Wc
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
          type: Wc
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
      Ac = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "fK",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "lK",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "vx",
              type: ["null", "string", oc],
              default: null
            }, {
              name: "NK",
              type: ["null", "double"],
              default: null
            }, {
              name: "Bx",
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
          name: "pN",
          type: "string"
        }, {
          name: "W4",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "k_",
          type: "double"
        }, {
          name: "j_",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "K9",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: oc
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "pE",
          type: "string"
        }, {
          name: "Dcc",
          type: ["null", "double"],
          default: null
        }, {
          name: "Ecc",
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
          name: "K8",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "Z2",
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
      Gc = [{
        name: "position",
        type: oc
      }, {
        name: "direction",
        type: oc
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

    function cn() {
      const cB = [{
        name: "entities",
        type: {
          type: "map",
          values: Fc
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Jc
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: Gc
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
              items: Rc
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", iB],
        default: null
      }];
      return cB.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "pE",
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
      }), cB.push({
        name: "uiElements",
        type: Kc
      }, {
        name: "environment",
        type: xB
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: dc
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Ac
        }
      }), cB
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
                name: "cn",
                type: "int"
              }, {
                name: "position",
                type: oc
              }, {
                name: "direction",
                type: oc
              }, {
                name: "easing",
                type: oc
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
    var nB;
    const VB = {
      9: (nB = [{
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
            name: "WBc",
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
              type: Wc
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
            fields: cn()
          }
        }
      }, BB], sc().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: nB
      }, {
        en: Object.create(null)
      }))
    };
    var IB = nc(35571);
    let rn, uB, sB, MB;
    const PB = 12;
    var qn, OB;
    const TB = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", 91, 8191, 88, 13, 14, !1, 3, 60, 127, 2, 128, !0, 16, 138, 4, 139, 140, 15, 135, 10, 5, 11, 9];

    function fB(cB) {
      return typeof Vn !== TB[5] && Vn ? (new Vn).decode(new In(cB)) : typeof rV !== TB[5] && rV ? rV.from(cB).toString("utf-8") : Mn(cB)
    }

    function mn() {}

    function eB() {
      eB = function() {}
    }
    var tn, SB;
    eB(qn = {}, OB = ["Jl{k%kxxIDvTm(n/Mb~KVu;x56[Tk9qJ|UCUM;8Y2XtcJ`6=A8M5Z2nE1$3fF", "d)I=L8strh9)KL6=]!R:f9$WrEku`D!Z)mc:2$Qw!hhue{uquDc(q.M", "Km8S.6O[EDtj`q=J^/Uk|xobA6dpF", "`8)re+BB[w{48P7p", "`Ly|A#Xj6~R|Jxfq^M", '"o2=*|M', '.D10dh.JojsjN#4QIdmt)&9h"Ddl0cEIxlOP}[(HMdqR>p?OJi{P', '"!,0(%@tL)M14cVY&+!a]+IBsx|4@LhlJ8Hrn1}yQXR&Nr&N%M', "sI%o2.ptMz*0bm^lhNi0=Jcq!h~6,Ip/oK8:Y~B3HRF(E9.@z0W", ">EQUk;2xt&N,eL+qP8S:R", "JzY=!zUh^ZsKJDiyPK{ug4?F", 'Hl>S=6X[vK"JMOMY;|CPw2TF', "0RO0V63xSZQ4j;&@{KMKq", 'L|."?)wocK9T/j]JrLF', "mc[&t%NEcE_2c*V2n/yuf*8Esif,8PmQRI6:Bi*woSKc`[gp,un|=", "f+b&{x?5f!$$;J~Bf86T^+EGkhEl>cWZ.6vS~T_./~b&F", 'Qh.+zN"oijV6a6gyTIyu2#M', "O!z&uhUJYzBxbmS", "Bz9TMbvFhx/3]3[Ue):0AuDwp!9C=e#/I+[+;?#j9z_vM", "_~yKW;2kadNHn%/Q]6nTD4iko", "zK&PH99jB6$k*#aY$NkTU{ixcEyZdD!B?~7r6,7EJzUHpW0J5ZIpf7bWs", "p8xaG&2EFd_)rPGXZop(O8sjtRDj$ptU:m(im.(kJK?&Ns$/0bJ:v&37%dG!F", "k|1Un9@X*)5:.zBH/o3K;+zWS6m", "(6ai)z%jrd3Fu(=lErP=<Nob{<J4a+0lk?3rpQD`~$(ahP", "p84sN#qXHZiP{}ZR", "<0)4T$o2LEykKe]=CI9aT;Z=pDr", 'UAnGk|PBn!"Y@LUlDASp/i&loxV', '1oMVx;VhjDEp]Ja/WY.IS*=t"Drr4p^NO!/=M,Xt9h1$j(&==bW', "$!_Pz(SHsjcWC%<mmo14n6[=;KF8F", "QLHV09pT:YY5TjbX46xTb8kW6~b4!qNZ?8q(A|TF", ':$I:{}:|KDD!>p>IYhK(N6"Yb);qF', "wc9saJjT]xg,W#/IXaAat,}E0ZTUn[)lv/!|06d@s", "liM1?)&ljg&P6x3pKa)0^hr.?grZ]9#2>hC&zOtj!E:3GOLONdIpY", '_u`P:*vl&wMiy{GXz8FB|xBwd)K!AWn0,RwoX*oY{TE#8d)2ylY(U1"xt', "!KU4<L1o?<se|DJqsPU4u~lF&w)to%mXw8[*_Q&F", "ky6:a6exRXH,|Q7C<8+r6|73IRO4JI#=$?cS", '6+J:g*2Eci[0s;kyNm[S+"rJ[jdZl}[U@8|T.9!l5!o8b}yY', "#+3ik}]E*zc{qe!2[ZcsVJAX|zjmij~Zl=i0M,CG!Y#", "ciBreh&)6!2cv}PYQLP*G74o;X<YGOCy", ';R{rQ3[="Dj,8csYTN3iY%M', '!~.4"hs_iwz<(c#/`!Fod4~b<z~t&`OQiixa"*7HI!q(IIJHkM', "(8Y(#:PxXzV,O`:p<i{PT$BwGS9`J+Ly`Rc", "&Ryo{rkW", "fY:IiN0E$x<J~q=Zfl7tU1s5p6B[33B=}Ltk.9N7x~dR<q=l96j&21{@Xh$", "[|QrB.#JNhTq^PuIu?Q04[kkD6muXdD", "nfC0aiV{#Y.TDso", "JiRU5%jq+R5J/mcBVmW", 'f"R:U++[P', "}00S}?rF", "=874k)EWMg", '#c?"<NZjOx9C$6iNp!BK(,2EF)=xcQMH@AZo', 'ClHoR9}72w2NLp60JL_0W"k8mX9z4d2BIauo%%V=>ghk%LfO8/=tD', ':|@i$O@JfZ1:"ISI^07kHkM', "borob:8HH!w0v`!lDoj&0+uF", "pzOPp./H/D=[}%uXVh3r>mU)^!rHWqRNnTLKP&|l~YM+#P}p$K/p^hW3P", "x870IuVh)dXmMdEOkM", "Uz@(6`F%rKA3.2^ls).0p", ";O&kz;IBn!r", '=dGVk([|KxU4vclybKB0d"(YA~WW$pERol|=;QM', "vl=tBu+jKx8:[jjpg|6=6::F", 'ImrpKzcTE~4"iDOY564I@{7k9h3CfWYy1|S599tX0!w`me"O|L_0O.Qko', '0d_u{8ujkh""/}cY<LYpX1mX{grgj;epddai{x`"qZ[Y`%NZvotkni)ht', 'ZbCV6`[l/~ND"rOqeY|(V1%@(xN(iq+Uj8;+j', 'gd%ie"sF/Zi`#2i@daESd"yY1f;`G2o', "SyuivNOFVzJ4)c(Y%$)KKh<YADk6>+;pxIO4A$^tt", "`L#Sf[xBc", 'Hi:I8b_=1)!Gb#+q.0qBd4h@SZVH&}5qv?_PD*"YbG|', "!cB4B#(BS!j!H+tXc=[tD&@XNKDSf*BHK=qp~bHkx!s8X9+QPimUFTsqs", "MiaKsN7Er)b~RcFAXaoUVrIHN)4r26eNOZ{4t2u@1d|Ha+`Q4!ot", "$NtVLrzYow8P)`0Blh~P<b/H,zo}d}yQX=70j", '5Z.U}?i7qZ!DDmFZ5Z~0"~+jlwi)~jK', "XYDU}V^hgw[0R92H0l[t39`k%Yoe6}XNrLwKg4qXZijmy6YR", "QlR::[g{|wc}fW~HxRt4MzAhJK%bUIqJ", '6R/5^9T){)2U%POH]6.Px(qXCX"JRdsQ_/8:[[nHdYHZ/#omPzN:H9ZF', "LU<|,h&tPj|)]Ji@ErW", 'GhE"S%$Wd<U63cnl]o9TN#bkEgyUnqd', "A=2S~(03xD<Yw9B/FgyrJ3&JWK^=0p4Qwm`t$xq{WKgxj(H0tb|S[(iW", '(/Mi6TyW>6*ufOZy%D"|>|rJ,T7"8z5I6K~kzLOXx!P|x#WY)0_KByGk:f', "#6_of[/kADY~,IeNjI+u7.Vtsil,I#oQJlOPN8cX{d[);6D", ".RSp=9W2=YN[{DXy{iCtX1=X!i{rD%N2;RSpb).=;h&", "v~z=`([|<)9vJDMY!o~U?$o2RjgSA`,Od+3ij*3H`jo8s;pJAR{P", "^fGoq1mhEZDmF;,p~Z$iK&SY`wWp86h0xROrL$PG{)3)W#[HNmitS7=tMg", "&oS5d2m{{)?SdQ:p?~Mp4QnETxkJF", "Qi5s[[]ybY+bJWYyaz<TiNU5|h2[Mp]CS8QK):V{mj|$OIFm.M", '5!"=x|E2kKg[Qxmmn$6awb2E^~nF.2UB{+9sa8p{#$zrF', "WhHB91W2^R3)OWJH&KkT}%l@1Ys}h2WY)~&rm${.LEr", 'L|E&b}[jIZ]")6pl1|dBaJSbRh=4ep/XDF', "@~;=!,$YAGJSW#NY[?4t}h2BGxE88Hw/$I(rghsj3)7:Ez==MrY:]9M", "&ZP*zzzW", "xKmU=y#J~6ZmF", "lz.4F29tVYh:Lp9pc<Giu%i7)d^a~mRy", "%6oV.6aHM)sl1[x/;M", "Li)o{x;N.w:)AxPHJi5sR~wo46pSNqsH9LaK", "!mBPmmJjRi3zq(+YQho&vNMxVE`JvQ5IZoOrR+)F", ";6U0hz8oeE)FMpNlVoNpd[SYrYgSF;&=7M", 'o8$KN.7b06g&zpNl"~QK:&Aj,TpLuHRNe)sks[yytx#udW', "VziUC*jtID)07[PQaAlr71nbHZ2(Pe!Bab<ah(.@.i%:{D&N,u>S*m}bs", "8|?&{8>WNd(FUDd", '$!8"k(M', 'YalV@m>H"~(:fcw=$l9T,9ky%d`:c}eO`/@|)ztTVYv:3HwHi!=&IhQW&RxDF', 'Da(rQ.4NF);vG;N2Qz~r"*78IDl4l}8H|!F', 'U"~PimFJ/f6:)Qw2No2S', ")K2:/i@XXhzP|}`HulGVYQm{`XYNF;2B,$9sF&OjcE`:f+7yJcQkf~}Hsw=,M", "V8;*Q3J[rKD8bqqN*iCt_[h)Ud", "ZzlkZ~>ykX5:9D(XFYOkAm+jWXW5vddy^N5=V12W", "h|{k?:zBvi0Rwp^l;U7UI", 'rR,kU6a2lj=pycWmCEe1_V5hw).",9mq;R.+lh0Y!iX,~},p(M', ")!C&)&fT*z%siqhl7!doO#0B)dw`fdI@fyV|R*dtMY`FF", '9RgSz:*y?6iu0e)l[uk"7?$Y8wbH5DlJez*a|$a2;jcmAW', "~04IlkZ[LE", "2hY:W~xW", "uUOP~z5hmX1dn%^@BKOrC", "~m_kX9PwGxclse,O", "{y/5g[,FuR{r5`vm?E[t^6bEbg+`>p*0@~G1yi..Rw@kbqfIoJM1Y", "LRR:1*BYwzOZu2Yy.q.*o*~x$R$0R9^=dhdK%22BvhrgF", "JE.UNr2YWd", "xbOH{nBy", "B[cjkOH1", "9Lg3g&?1", "Xt+>hS:P", "4@)g4=cf", ">B,uHWzf", "1XC8u", "Hu2Ch#*y", "4@)gdLtf", "e3[dBh|:", 'e.Q!>gs"', "2cJI%Njxcdo{+yPP@TkGJJbej(w`|5_", "Q9A[MD/kk~w", "8)%vC+Ng", "sPW7>7xg", "8)g7|iTg", "&0!kbLK+", "//^_v", "M]q8rpRv", "!`N5u4C8", "k4{Xt+[8", "^5ZJl", ",]>3", "?]{Xw#/8", "|5k)", "z]<$Men8", ";+KR@LN]", "u3_;", "Iv^7", "k3Qz*Vv]"]), eB(nn = function() {
      var cB, Bc, nc, Vc = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }];
      eB(cB = void 0, Bc = []);
      try {
        eB(cB = Object, Bc[TB[11]]("".__proto__.constructor.name))
      } catch (In) {}
      cB: for (nc = TB[0]; nc < Vc[TB[4]]; nc++) try {
        var Ic;
        for (cB = Vc[nc](), Ic = TB[0]; Ic < Bc[TB[4]]; Ic++)
          if (typeof cB[Bc[Ic]] === TB[5]) continue cB;
        return cB
      } catch (In) {}
      return cB || this
    }() || {}, Vn = nn.TextDecoder, In = nn.Uint8Array, rV = nn.QV, un = nn.String || String, sn = nn.Array || Array, Mn = function() {
      var cB, Bc, nc = new sn(TB[22]);
      return eB(cB = un[TB[8]] || un.fromCharCode, Bc = []),
        function(Vc) {
          var Ic, rB, uc, sc;
          for (eB(rB = void 0, uc = Vc[TB[4]], Bc[TB[4]] = TB[0]), sc = TB[0]; sc < uc;) eB(rB = Vc[sc++], rB <= TB[20] ? Ic = rB : rB <= 223 ? Ic = (31 & rB) << TB[7] | Vc[sc++] & TB[6] : rB <= 239 ? Ic = (rB & TB[29]) << TB[10] | (Vc[sc++] & TB[6]) << TB[7] | Vc[sc++] & TB[6] : un[TB[8]] ? Ic = (rB & TB[9]) << 18 | (Vc[sc++] & TB[6]) << TB[10] | (Vc[sc++] & TB[6]) << TB[7] | Vc[sc++] & TB[6] : (Ic = TB[6], sc += TB[18]), Bc[TB[11]](nc[Ic] || (nc[Ic] = cB(Ic))));
          return Bc.join("")
        }
    }()), (() => {
      function cB(cB) {
        return typeof qn[cB] === TB[5] ? qn[cB] = function(cB) {
          var Bc, nc, Vc, Ic, rB, uc, sc;
          for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
            var Mc = 'GyfrHAlsYkhUKiMXpqc~t^72T|u.jv91gCN)D/#a}xd_Vm&<`$!b?B3I"4nPzO{6J[]E@W8FZ>RSQ=o5Le(,;*%w0+:'.indexOf(Bc[sc]);
            if (Mc !== -TB[1])
              if (uc < TB[0]) uc = Mc;
              else {
                eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                do {
                  eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                } while (rB > TB[9]);
                uc = -TB[1]
              }
          }
          return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
        }(OB[cB]) : qn[cB]
      }
      cB(116) + "c" in mn && function() {
        function cB(cB) {
          var Bc, nc, Vc, Ic, rB, uc, sc, Mc = ',1P8dAjb:+MR}Tu`Vr|*eZFBc7Wnv/N]i"L@IQJ2wHY9qtK?a$&>=ChOGDSlxU^<;5o#!(kyzE63~X.f0g4_ms{)[p%';
          for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
            var Pc = Mc.indexOf(Bc[sc]);
            if (Pc !== -TB[1])
              if (uc < TB[0]) uc = Pc;
              else {
                eB(uc += Pc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                do {
                  eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                } while (rB > TB[9]);
                uc = -TB[1]
              }
          }
          return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
        }

        function Bc(Bc) {
          return typeof qn[Bc] === TB[5] ? qn[Bc] = cB(OB[Bc]) : qn[Bc]
        }

        function nc(cB) {
          const Bc = {};
          for (let nc of cB.replace(/[^w]/g, "").toLowerCase()) Bc[nc] = Bc[nc] + TB[1] || TB[1];
          return Bc
        }

        function Vc(cB, Bc) {
          const nc = buildCharMap(cB),
            Vc = buildCharMap(Bc);
          for (let Ic in nc)
            if (nc[Ic] !== Vc[Ic]) return TB[17];
          return Object.keys(nc).length !== Object.keys(Vc).length ? TB[17] : TB[23]
        }

        function Ic(cB) {
          return rB(cB) !== 1 / 0
        }

        function rB(cB) {
          if (!cB) return -TB[1];
          const Bc = rB(cB.left),
            nc = rB(cB.right),
            Vc = Math.abs(Bc - nc);
          if (Bc === 1 / 0 || nc === 1 / 0 || Vc > TB[1]) return 1 / 0;
          return Math.max(Bc, nc) + TB[1]
        }
        window[Bc(117) + Bc(118) + Bc(119) + "_"] = {
          buildCharacterMap: nc,
          isAnagrams: Vc,
          isBalanced: Ic,
          getHeightBalanced: rB
        }
      }();
      const Bc = TB[24],
        nc = cB(120) + cB(121) + cB(122),
        Vc = [TB[0], TB[1], TB[21], TB[18]].map((Bc => {
          cB(123);
          let Vc = TB[0];
          for (let Ic = TB[18]; Ic >= TB[0]; Ic--) {
            function rB(cB) {
              var Bc, nc, Vc, Ic, rB, uc, sc;
              for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
                var Mc = 'C"+.H_Qhd>pVN@J/Gu2~6yj0R,=S{vm*[8U7o9`bKMl}nI)LgF(Y!k&w|ET<eX#racq;^5%$134i]?tBDAZ:OxfWPsz'.indexOf(Bc[sc]);
                if (Mc !== -TB[1])
                  if (uc < TB[0]) uc = Mc;
                  else {
                    eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                    do {
                      eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                    } while (rB > TB[9]);
                    uc = -TB[1]
                  }
              }
              return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
            }

            function uc(cB) {
              return typeof qn[cB] === TB[5] ? qn[cB] = rB(OB[cB]) : qn[cB]
            }

            function sc() {
              module.exports = async (cB = () => {
                throw new Error(function(cB) {
                  return typeof qn[cB] === TB[5] ? qn[cB] = function(cB) {
                    var Bc, nc, Vc, Ic, rB, uc, sc;
                    for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
                      var Mc = '];/"y2#xmGAQ_}W~kd7wSZtgvq&n<O@%Ls[,B+zPH4|c8VFIX5r`{*K.ETf=>0oMa(C!?)$N1hDj6iJ9:Ublp3eRu^Y'.indexOf(Bc[sc]);
                      if (Mc !== -TB[1])
                        if (uc < TB[0]) uc = Mc;
                        else {
                          eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                          do {
                            eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                          } while (rB > TB[9]);
                          uc = -TB[1]
                        }
                    }
                    return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
                  }(OB[cB]) : qn[cB]
                }(TB[20]))
              }) => {
                const Bc = new Set(process.argv.slice(TB[21]));
                if (!Bc.has(uc(TB[22]))) {
                  if (Bc.size !== TB[1]) return TB[17];
                  if (!Bc.has("-v")) return TB[17]
                }
                return await (async () => {
                  function Bc(cB) {
                    return typeof qn[cB] === TB[5] ? qn[cB] = function(cB) {
                      var Bc, nc, Vc, Ic, rB, uc, sc;
                      for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
                        var Mc = 'OagPWdlmFuv%TpY5*9woxj)0!/,6EUky<eAz3hNMtB`;?J^1{C_D[rG2=$IH>:L.R~qX+ibSZf4#c78}QVns|(&"@]K'.indexOf(Bc[sc]);
                        if (Mc !== -TB[1])
                          if (uc < TB[0]) uc = Mc;
                          else {
                            eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                            do {
                              eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                            } while (rB > TB[9]);
                            uc = -TB[1]
                          }
                      }
                      return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
                    }(OB[cB]) : qn[cB]
                  }
                  return void 0 === await cB() ? Bc(131) + "l)" : ""
                })(), TB[23]
              }
            }
            uc(126) in mn && sc(), Vc = Vc << TB[2] | nc[uc(132) + uc(133)](Bc * TB[26] + Ic)
          }
          return Vc >>> TB[0]
        })),
        Ic = (cB, Bc) => cB << Bc | cB >>> 32 - Bc,
        rB = (cB, Bc, nc, Vc, rB) => {
          (function(cB) {
            return typeof qn[cB] === TB[5] ? qn[cB] = function(cB) {
              var Bc, nc, Vc, Ic, rB, uc, sc;
              for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
                var Mc = 'HvBEAa!31R%i6L[l+_K}(J?I@5xZ4c^bN9.~UnorQYtP*"OkDmW;qgsCST&FGz2M#]X$|0ue,p8hfj)dV<>:/=7w{y`'.indexOf(Bc[sc]);
                if (Mc !== -TB[1])
                  if (uc < TB[0]) uc = Mc;
                  else {
                    eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                    do {
                      eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                    } while (rB > TB[9]);
                    uc = -TB[1]
                  }
              }
              return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
            }(OB[cB]) : qn[cB]
          })(134) in mn && function() {
            var cB, Bc = function(Bc, nc) {
              var Vc, Ic = [];
              return eB(Vc = Bc.length, Bc.sort(((cB, Bc) => cB - Bc)), cB(Ic, [], TB[0], Vc, Bc, nc)), Ic
            };
            eB(cB = function(Bc, nc, Vc, Ic, rB, uc) {
              var sc, Mc = null;
              if (!(uc < TB[0])) {
                if (uc === TB[0]) return Bc.push(nc);
                for (sc = Vc; sc < Ic && !(rB[sc] > uc); sc++) sc > Vc && rB[sc] === rB[sc - TB[1]] || eB(Mc = Array.from(nc), Mc.push(rB[sc]), cB(Bc, Mc, sc + TB[1], Ic, rB, uc - rB[sc]))
              }
            }, console.log(Bc))
          }(), eB(cB[Bc] += cB[nc], cB[rB] = Ic(cB[rB] ^ cB[Bc], TB[24]), cB[Vc] += cB[rB], cB[nc] = Ic(cB[nc] ^ cB[Vc], TB[10]), cB[Bc] += cB[nc], cB[rB] = Ic(cB[rB] ^ cB[Bc], TB[2]), cB[Vc] += cB[rB], cB[nc] = Ic(cB[nc] ^ cB[Vc], TB[9]))
        };
      MB = (cB, nc, Ic, uc) => {
        function sc(cB) {
          return typeof qn[cB] === TB[5] ? qn[cB] = function(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
              var Mc = 'aN8O)TmwJ23@&f!]Fc?o<>[zsqn=ul,gXLbAVk/QUv~BGDCy76R*^;5+S1jY`p_r"x|{P9E4.i#Kt$M}(e%Z0:dIHWh'.indexOf(Bc[sc]);
              if (Mc !== -TB[1])
                if (uc < TB[0]) uc = Mc;
                else {
                  eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                  do {
                    eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                  } while (rB > TB[9]);
                  uc = -TB[1]
                }
            }
            return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
          }(OB[cB]) : qn[cB]
        }
        const Mc = new DataView(nc[sc(TB[30])], nc[sc(136) + sc(137)], PB),
          Pc = new Uint32Array(Bc);
        eB(Pc[sc(TB[25])](Vc), Pc[sc(TB[25])](cB, TB[26]), Pc[TB[15]] = Mc[sc(TB[27]) + sc(TB[28])](TB[0], TB[23]), Pc[TB[16]] = Mc[sc(TB[27]) + sc(TB[28])](TB[26], TB[23]), Pc[TB[29]] = Mc[sc(TB[27]) + sc(TB[28])](TB[2], TB[23]));
        const qB = new Uint32Array(Bc),
          Oc = new Uint8Array(qB[sc(TB[30])]);
        for (let Tc = TB[0], fc = Ic; Tc < uc[sc(141)]; Tc += Bc * TB[26], fc++) {
          function mB(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (eB(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = TB[0], rB = TB[0], uc = -TB[1]), sc = TB[0]; sc < nc; sc++) {
              var Mc = '2:]%q0DF$7;JXp53(=+jQ_Ak4Wvsxguf@a/|UMP`Led9NbYIO1T6hR)>,?B{y~[C^o#mcrtHw.S!Kz*8iVZ}&E<nGl"'.indexOf(Bc[sc]);
              if (Mc !== -TB[1])
                if (uc < TB[0]) uc = Mc;
                else {
                  eB(uc += Mc * TB[12], Ic |= uc << rB, rB += (uc & TB[13]) > TB[14] ? TB[15] : TB[16]);
                  do {
                    eB(Vc.push(Ic & TB[3]), Ic >>= TB[2], rB -= TB[2])
                  } while (rB > TB[9]);
                  uc = -TB[1]
                }
            }
            return uc > -TB[1] && Vc.push((Ic | uc << rB) & TB[3]), fB(Vc)
          }

          function ec(cB) {
            return typeof qn[cB] === TB[5] ? qn[cB] = mB(OB[cB]) : qn[cB]
          }

          function tB() {
            console.log((function(cB) {
              var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc = cB.length;
              if (Oc < TB[21]) return TB[0];
              if (eB(Bc = Math.max(...cB), nc = Math.min(...cB)), Bc === nc) return TB[0];
              for (eB(Vc = Array(Oc - TB[1]).fill(Number.MAX_SAFE_INTEGER), Ic = Array(Oc - TB[1]).fill(Number.MIN_SAFE_INTEGER), rB = Math.ceil((Bc - nc) / (Oc - TB[1])), uc = TB[0]), sc = TB[0]; sc < Oc; sc++) cB[sc] !== nc && cB[sc] !== Bc && eB(uc = Math.floor((cB[sc] - nc) / rB), Vc[uc] = Math.min(Vc[uc], cB[sc]), Ic[uc] = Math.max(Ic[uc], cB[sc]));
              for (eB(Mc = Number.MIN_SAFE_INTEGER, Pc = nc), qB = TB[0]; qB < Oc - TB[1]; qB++) Vc[qB] === Number.MAX_SAFE_INTEGER && Ic[qB] === Number.MIN_SAFE_INTEGER || eB(Mc = Math.max(Mc, Vc[qB] - Pc), Pc = Ic[qB]);
              return Mc = Math.max(Mc, Bc - Pc)
            }))
          }
          ec(142) in mn && tB(), eB(Pc[TB[10]] = fc, qB[ec(143)](Pc));
          for (let yB = TB[0]; yB < TB[31]; yB++) eB(rB(qB, TB[0], TB[26], TB[2], TB[10]), rB(qB, TB[1], TB[32], TB[34], TB[15]), rB(qB, TB[21], TB[7], TB[31], TB[16]), rB(qB, TB[18], TB[9], TB[33], TB[29]), rB(qB, TB[0], TB[32], TB[31], TB[29]), rB(qB, TB[1], TB[7], TB[33], TB[10]), rB(qB, TB[21], TB[9], TB[2], TB[15]), rB(qB, TB[18], TB[26], TB[34], TB[16]));
          for (let zB = TB[0]; zB < Bc; zB++) qB[zB] += Pc[zB];
          const Sc = Math[ec(144)](Bc * TB[26], uc[ec(145)] - Tc);
          for (let pc = TB[0]; pc < Sc; pc++) uc[Tc + pc] ^= Oc[pc]
        }
      }
    })();
    const yn = [210, 0, 1, "h", "c", 243, 9, 7, "e", "f", 200, 8, 255, "length", "d", "a", "undefined", void 0, 58, 3, 98, 196, 63, 6, "fromCodePoint", 12, "push", 59, 109, 91, 8191, 88, 13, 14, "b", 175, 55, 246, 244, 95, 24, 162, 37, 2, "i", 5, 113, 4, 77, "g", 73, 139, 16, 176, 188, 512, 218, 137, 193, 11, 131, 15, 104, 29, 64, 207, 129, 149, 27, 230, 1023, 127, 31, 128, 18, 32, 250, 22, 10, 19, 84, 65535, 25, null, 138, 238, 45, 36, 151];

    function zn(cB) {
      return typeof Vn !== yn[16] && Vn ? (new Vn).decode(new In(cB)) : typeof rV !== yn[16] && rV ? rV.from(cB).toString("utf-8") : Mn(cB)
    }

    function pB(cB, Bc, nc) {
      if (cB === function(cB) {
          return typeof tn[cB] === yn[16] ? tn[cB] = function(cB) {
            var Bc, nc, Vc, Ic, rB, uc, sc;
            for (an(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = yn[1], rB = yn[1], uc = -yn[2]), sc = yn[1]; sc < nc; sc++) {
              var Mc = '"?<#;}Idy|n9bu5{Vq1`)H/(&zgivjTLXYMO2Jl%:^.wak>Qx$_0Zs[@PD4eCrBARU~]Go8E+3F=!67h,SptmW*NfKc'.indexOf(Bc[sc]);
              if (Mc !== -yn[2])
                if (uc < yn[1]) uc = Mc;
                else {
                  an(uc += Mc * yn[29], Ic |= uc << rB, rB += (uc & yn[30]) > yn[31] ? yn[32] : yn[33]);
                  do {
                    an(Vc.push(Ic & yn[12]), Ic >>= yn[11], rB -= yn[11])
                  } while (rB > yn[7]);
                  uc = -yn[2]
                }
            }
            return uc > -yn[2] && Vc.push((Ic | uc << rB) & yn[12]), zn(Vc)
          }(SB[cB]) : tn[cB]
        }(yn[62])) return Bc + nc
    }

    function hB() {}

    function an() {
      an = function() {}
    }
    an(tn = {}, SB = ["hO2&FOLg$OF<Q4n]6[ork", 'ji#HgA`%l@b4)YhmPc"OYnB%Km*gHuk2$0:LDVz?d+0!Qkd?', 'TT"TBT%+24U">N[FXu:TO,C`0IK!TK)Dux7MO#vkG~0MiiSoZPaH0w(S', ")~sW==f<#K+1i=k2#He~z6`%w*8F>N", "rIB&0Yf<Xzyn?A?(3e1%da&!&10+/x)gr5)xK)=&NKpbZlm.exN", "!z0HbA~k]<U8aMdF#{F}qDujm0av3)^5YT=LZz_S", "l4yT:ZC", ":voMHO/!G", "RYiHT#O]ILi20{+(gol^", "!c{Ge6Oc_[aW/uk2t47/e4lR+.Xe~ya*v]`!22pN", '0rC;c}^k64y6<4j($Of}d8"SNKqbKu]5$6mT:rh)G', '[OF73Do*D*ObEN.6YOHPU}Jg]+"8sk3`S[kpk94g/.', 'RIj"cYhS6KIGx"Pga{Y~/8=2_[pMDu.]iQ5W;aQSzuiG3"Rq!`l', "oTj{^}E&V[@i0h:5$0k;0", "MIs%U6mg605>&GSgjQG7%hlkK:Obii{Dvxa7(8yg`vVmdGzw", "3h~TV[rjum!iD+V6FS", "ViD8G,Q!f|x/tEGm4FYPN=%]9:fmA58H8Ha7;=:jL++", 'pcgTx;>&l[bVyl)*dl]"/DFrH1T', "7oz,PrQ[(v4", "3aL~}Xl,AOHQKuW", "NoF&MY+gAU|fS", "eIqG),T(}@.b84!krTe8]!}<i<OFF/~", '#{Lp]ek*L}YeO"lpPGgp/zh2ae050/GDQ8}bYcpwfek', "!cTrG6+]G[)XCl", "0U;H)6^*QKog#<PHSUk/mA,&1+q>nkz2H&3t;)c+)Okv0zVh<cW%Gw]mVm", 'Q6Z^we![+Ix)(5Yx|rUG9"<k#LYvhi`x7S', "(?)WE$dS{@Ob/uPgaToXO,@#Bvs&2ne6W[UbY!uN", ";PG7]UI+&z0Y&Y+&;i$M1bWRXz3_hnlHv~N", "GmjHEA,2@mL?nk:mH6[TQ,bmam", "t~pG7[X>J.x/#<!*acL~v{H*ZOA2EuW*1O0&:I=<#1$zKDH58?|M~[C", "dYSth5&)n04V75y/ac}b4h,?pzw:QGu]or5r`!{(v~", "&5!LcrJISUBb/x.Fca&r0)3Vp:vg]{<", "+{!xf,_24,v>8G", '"Y[Ojsr]8vG?^Yd(ZC', "d6#%nwpwg<B)elY/+]H8#n4pbu!t1w7", 'Rz)HM>m+$mOH9iN5Pt)WDsf2"0Z_&Mig)Y9P8wr#}.F)pntg4YN', "rPTt2Vb+:Oce|x~H<#5Fwc4j1<91Q4R&9~RF+6B0>K)8wEDg(5l", '{Og"N=6moI</gllkCo]Pk9tgXueVhl[`}cL/*AK*4z&>*Aaht?Gr!Dh9W', "|[9b>bvSzeC$L{_p:8IWVb1<7QyTb/[&QPIGFD%%8.h8u^N?yS", "ZQBHNY?&c*uv/xi5zYsFubIrL.OF[yO($[&%^)i0Y[N+x^", "t4_t#i]ga,#%)G,/qQS", "=u`!IZZ#_4u6{u(kL{L~LIh*l", "t]%,PYF0dvj=QG?F$ThFof=<G", 'W?:TX[j+FuJ_)kh*c?i%ZI8[_~[8{l"]<Ug/29o*[QZwx=5kD~LOnE~(n0', "MY!t*)rg)+T86Do*DORb5fv&l", "Xzv/fY{W&z#}f41/Zl6/aX7+S0WTS", "k#_r^,osS[eV#iNv%[!A>wBgY[$lMEL*", '|"|&)=LjR<k<g9x&_5LPRs92=[oz4E`DK~cr,ZTWoLV=A<Fv&Ql', ",.NM@YK<l", "C4>O(2oWevl+8Ycm", "aQ^ACMf9g.VL:k7", '!zgTz+#]ovkg+<@&=Hi{=)mL2*4V)"Jy;csFFO+jumu5%KW55?g$+,C', "hx,rk%UTA[CPik1]i?<r9TA%k+C;>N4pN2otJzXsl*D8S", "K[OWjb~UC:?}JlDHUcD%}>7gBz@865x&JYD}4>tpFv", "TYh8/]ygAOH}QG", 'D{j"VrLLZ<lywzE6DP6T2f=&@K?P*D`DtcN&MAWS=0"Iu^x(sY;GP6qL8+HvS', "V8HFoiD0tK^9)M/?[~jGK[sv.~", '2OZXZ)D%SKk/Jzl5#Iu$ps!(Y49}u5U5(TU8D"tml', '(0t"2;%#[+wbtM:mU6XrM}?*>Kaz}nlpV8!^""gN', '<G}beUT9r|UF+"mFPU>FoiE&w*Yb@w<.6KDHx[FjG', "2lI}]UK(Hm#8<53&6o*XF", "iI3T&8Jg4|c4C{cHEHsAZEZ6eQ7/S", ":F@8BTX<6KSnS", "7mSp$;12p1L<XM@?%6MOYn!S", "3ejWZ{tm;,H/S4<*", "Yl)H*E[?9Kq.ayHg6?c&BTgVj+=LTnJy", "K]!,,hgjY:!r!u8hjk.r^Yd?MQE4C{e2N2T&C6}(:~%b1yf``IpF*){WI|5", 'u#ztE[m+E4V,U+Jqu~,}yIjgrzI"lDF`"5eO/', ":898N,zsy:nXD<tgW[8P1bj6T*F+=whDh.~/H;FV)<", "1x+TiAC`@[.)<YlotO27#n##z|K6HD3qzYl", "?&7t[>;m^<8q]EdFR8>bofxp.<}G*Ndqav&W", "/]bX8[xLA0l<MKNwkcYPZ)#pW+mPO5_ph~v/]2Lw1@=e3k^oXavPAerr|z_tS", "1Q:t@r$*IL6>)wf2%~;GDs()|zK>hnbhcF6M^rXS^", 'H["Tirtwc<:F]9PgU~(pyDXW4eE,ik$`;52XT!>[$4*}h+%/sTqW', "el}by[[2c<I#>x)gg#%HywO]~Iy6(G", 'hYOH$%7#~7W?|usq!Q"LIZS*T4@#Kn9/IF~prIQ[m4*70K<*3YcHP=Dp=m', "AQ`&EDT9n01509d2", "(v3TE{imG", 'BT$!z>vSpUNNq^"]f{_LyICm]+@%`fgF|U_&jsW,6UGcS', "{5IH+T$(&1o", '`Qx!bbi#C0m>7NS?3QI"DnXU4uaHtEGgD.W$Ra;g#Ue8.l"]*43,29%jl[9uS', 'Pm=T6]]g(Qw)A56mH0qbt8f&az^O+fRqr.qG{4h[8.@"/DzvFrUGsaFm}.7YS', "HllM2zGj4LfW_u+FpOsHn=@p~unLy9$g0tT,7wE[ouu5ExtwrC", "z6g;d$zUJ+S~~yY]cC", "8I)A;D)<].#vG{y.#IxTuA$)+.{FQMV6l[c}F;4#+uYI84Vx!HW%%hn+G", "TxTt:ww+!..)tM/`v#P}R)[9X,{_Qw]x}vXH,h6gG", 'LxN/Qw1<O@*<9N5p;HJ"5e`0:Oy!DN', 'BP9G^6o*9L|PQgcHu"v/kzuiP', ")TK~.IA+l*og+<wDYQvO8}%p4IZAeK+&jC", 'EzR"@#`]G', "}vL$59r0G", "@l!&Ds6@kQObll:wbTXbgEB@a1XeBlRyjTmTy=S*S:o1HnGgI?&}_}99Z[@LS", 'iHK~9cDN&:(gaYU`|rh"=%T(l', "SK,HLYR2P+nA9i0xZP7t3E?,T4/Ml{Cw/]}F^=5WnK", "Hlg8I,D@a|yc?Dm.9I>b9!C", "bPx!TXDgpK#82ix(DvxTljC", '}PIFnb:ma|}kp5U5"a9%Ww%j+IV|QM(*XzPW~>Tsi@G6+)v/yS', "FQC!M}i%Y4$)1=H&0tqW", 'WUeTBT#%AUEkq5&&S0D}@Z"*?@W+(MfwNU!,W>0w^*4', "4FELOUs[)*_Fp^", "M5M~weW=2*olnk.]", "MT}GH9j#IezX4l|DiOvTo8Lwa,*7bEcp7maHWI6wh+.Miu/`IIqW,Zn+~vxQS", "c8P%mDW(l*RSBlcH`cUP~bNgbI}V4G", "{TsG4+7p;mmIJE$v<o{FfTn+W<<>yyK/4c}~", "*0=}NoW?", "WtK~Cr?S", "jGd#!R/_", "eAt^", "LquHQD{?x[<79d", "S^EWs&gABX6Zad", "$$eHs&!0/^mr~H", "IsEIGDm1UaR<Md", "Mq*rB<gA!^mXwd", "MB;HL_1=^BF", "!ki3;Z_$", "hG|59c!_", "L+QL>aM_", "]cuyR", "o#a*wLXA", "1H`1xrfg", "ZTa?E", "01V]oIE8on&A^I2~]KD^?neX9*", "woXe|q{uK4}kXVWM.^8FQ>Y@b=", "HDud%;$t4l5;iuw4(!P|(CND}+", "Uwe]f=Ty", "u73]A59v", "&dXEA}Oy", "ATe]KzQy", "._$&dSRy", 'S"~h&Ev', "Fw9BRms74d3jQ4", "91@8hQW/JH}EQ4", "J+hLsR,W4dleRy", 'h"v]YXx?_^">c4', "3NB%6R)(e]{NDy", "Tk=5BmZVMH3", "22D(7^Nu", "NspJ(Px*ADO", "X(&(4lrWZ9K", '+s3[J2I"79', "9Q1)FTty", "pT!#YY/IR9N", "?!z&Q=Ry", "BfD:W_N9", "RMeP", "MMvh]_O9", "_C|do", "HM&Rpdv", "HMT,6w=9", ">MpP", "1%.K*`s9", "&L#&RhOi&|", '"Ron]Y/9', "w;J2", "7L{2s", "Y6c2", "JR)&t8o", "k%H}Ff/9"]), an(nn = function(...cB) {
        an(cB[yn[13]] = yn[1], cB[yn[15]] = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }], cB[yn[2]] = yn[17], cB[yn[4]] = []);
        try {
          an(cB[yn[2]] = Object, cB[yn[4]][yn[26]]("".__proto__.constructor.name))
        } catch (SB) {}
        cB: for (cB[yn[14]] = yn[1]; cB[yn[14]] < cB[yn[15]][yn[13]]; cB[yn[14]]++) try {
          for (cB[yn[2]] = cB[yn[15]][cB[yn[14]]](), cB[yn[8]] = yn[1]; cB[yn[8]] < cB[yn[4]][yn[13]]; cB[yn[8]]++)
            if (typeof cB[yn[2]][cB[yn[4]][cB[yn[8]]]] === yn[16]) continue cB;
          return cB[yn[2]]
        } catch (SB) {}
        return cB[yn[2]] || this
      }() || {}, Vn = nn.TextDecoder, In = nn.Uint8Array, rV = nn.QV, un = nn.String || String, sn = nn.Array || Array, Mn = function(...cB) {
        return an(cB[yn[13]] = yn[1], cB[yn[27]] = new sn(yn[73]), cB[-yn[28]] = un[yn[24]] || un.fromCharCode, cB[-yn[18]] = []),
          function(...Bc) {
            for (an(Bc[yn[13]] = yn[2], Bc[-yn[21]] = yn[17], Bc[-yn[20]] = yn[17], Bc[yn[19]] = Bc[yn[1]][yn[13]], cB[-yn[18]][yn[13]] = yn[1]), Bc[-yn[0]] = yn[1]; Bc[-yn[0]] < Bc[yn[19]];) an(Bc[-yn[20]] = Bc[yn[1]][Bc[-yn[0]]++], Bc[-yn[20]] <= yn[71] ? Bc[-yn[21]] = Bc[-yn[20]] : Bc[-yn[20]] <= 223 ? Bc[-yn[21]] = (Bc[-yn[20]] & yn[72]) << yn[23] | Bc[yn[1]][Bc[-yn[0]]++] & yn[22] : Bc[-yn[20]] <= 239 ? Bc[-yn[21]] = (Bc[-yn[20]] & yn[61]) << yn[25] | (Bc[yn[1]][Bc[-yn[0]]++] & yn[22]) << yn[23] | Bc[yn[1]][Bc[-yn[0]]++] & yn[22] : un[yn[24]] ? Bc[-yn[21]] = (Bc[-yn[20]] & yn[7]) << yn[74] | (Bc[yn[1]][Bc[-yn[0]]++] & yn[22]) << yn[25] | (Bc[yn[1]][Bc[-yn[0]]++] & yn[22]) << yn[23] | Bc[yn[1]][Bc[-yn[0]]++] & yn[22] : (Bc[-yn[21]] = yn[22], Bc[-yn[0]] += yn[19]), cB[-yn[18]][yn[26]](cB[yn[27]][Bc[-yn[21]]] || (cB[yn[27]][Bc[-yn[21]]] = cB[-yn[28]](Bc[-yn[21]]))));
            return cB[-yn[18]].join("")
          }
      }()),
      function(...cB) {
        return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = function(...cB) {
          for (an(cB[yn[13]] = yn[2], cB[-yn[5]] = 'CSNlG^PWL~7|0<uKyvm*.1q?gkx/F&pHt$62w5Dh](`oBa#9Y"AT%,O}e[+z4fIU@Q:_c)i{M8r!bX;>V=nEZsjRJd3', cB[yn[0]] = "" + (cB[yn[1]] || ""), cB[yn[4]] = cB[yn[0]].length, cB[yn[10]] = [], cB[yn[8]] = yn[1], cB[yn[9]] = yn[1], cB[yn[7]] = -yn[2]), cB[yn[3]] = yn[1]; cB[yn[3]] < cB[yn[4]]; cB[yn[3]]++)
            if (cB[yn[6]] = cB[-yn[5]].indexOf(cB[yn[0]][cB[yn[3]]]), cB[yn[6]] !== -yn[2])
              if (cB[yn[7]] < yn[1]) cB[yn[7]] = cB[yn[6]];
              else {
                an(cB[yn[7]] += cB[yn[6]] * yn[29], cB[yn[8]] |= cB[yn[7]] << cB[yn[9]], cB[yn[9]] += (cB[yn[7]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                do {
                  an(cB[yn[10]].push(cB[yn[8]] & yn[12]), cB[yn[8]] >>= yn[11], cB[yn[9]] -= yn[11])
                } while (cB[yn[9]] > yn[7]);
                cB[yn[7]] = -yn[2]
              } return cB[yn[7]] > -yn[2] && cB[yn[10]].push((cB[yn[8]] | cB[yn[7]] << cB[yn[9]]) & yn[12]), zn(cB[yn[10]])
        }(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
      }(105) + "6" in hB && function(...cB) {
        cB[yn[13]] = yn[1]
      }(), (() => {
        function cB(...cB) {
          return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = function(...cB) {
            for (an(cB[yn[13]] = yn[2], cB[-yn[39]] = 'v_y"4*1)%][6x/w!{7?($uz.308L:qAphXVWcmRDQMgilaOfGBtNoId&PrFkTnH^9+`~=;E5jJbK#2}>eYS,|@ZsU<C', cB[-yn[37]] = "" + (cB[yn[1]] || ""), cB[yn[38]] = cB[-yn[37]].length, cB[yn[42]] = [], cB[yn[8]] = yn[1], cB[-yn[41]] = yn[1], cB[yn[7]] = -yn[2]), cB[yn[18]] = yn[1]; cB[yn[18]] < cB[yn[38]]; cB[yn[18]]++)
              if (cB[yn[40]] = cB[-yn[39]].indexOf(cB[-yn[37]][cB[yn[18]]]), cB[yn[40]] !== -yn[2])
                if (cB[yn[7]] < yn[1]) cB[yn[7]] = cB[yn[40]];
                else {
                  an(cB[yn[7]] += cB[yn[40]] * yn[29], cB[yn[8]] |= cB[yn[7]] << cB[-yn[41]], cB[-yn[41]] += (cB[yn[7]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                  do {
                    an(cB[yn[42]].push(cB[yn[8]] & yn[12]), cB[yn[8]] >>= yn[11], cB[-yn[41]] -= yn[11])
                  } while (cB[-yn[41]] > yn[7]);
                  cB[yn[7]] = -yn[2]
                } return cB[yn[7]] > -yn[2] && cB[yn[42]].push((cB[yn[8]] | cB[yn[7]] << cB[-yn[41]]) & yn[12]), zn(cB[yn[42]])
          }(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
        } [][yn[13]] = yn[1], cB(106) + "O" in hB && function(...Bc) {
          an(Bc[yn[13]] = yn[1], Bc[yn[77]] = function() {
            var Bc, nc, Vc = yn[1];

            function Ic(...cB) {
              return cB[yn[13]] = yn[2], qB(Mc(fc(cB[yn[1]])))
            }

            function rB(...cB) {
              return cB[yn[13]] = yn[43], qB(Pc(fc(cB[yn[1]]), fc(cB[yn[2]])))
            }

            function uc(...cB) {
              return cB[yn[13]] = yn[43], Oc(Pc(fc(cB[yn[1]]), fc(cB[yn[2]])))
            }

            function sc(cB, Bc, nc) {
              return Tc(Pc(fc(cB), fc(Bc)), nc)
            }

            function Mc(...cB) {
              return cB[yn[13]] = yn[2], ec(Yc(mB(cB[yn[1]]), cB[yn[1]].length * yn[11]))
            }

            function Pc(...cB) {
              function Bc(...cB) {
                for (an(cB[yn[13]] = yn[2], cB[yn[15]] = 'Q$vL*3f&0/5=F+?DxVTpbPNogJAY8|OIh^Wq1<(>B6)CH2U@SjXk~a]nmsrlue:dM#%KzZ4Gycwi{RE9}.,`7_!;["t', cB[yn[43]] = "" + (cB[yn[1]] || ""), cB[-yn[48]] = cB[yn[43]].length, cB[yn[51]] = [], cB[-yn[35]] = yn[1], cB[yn[50]] = yn[1], cB[yn[49]] = -yn[2]), cB[yn[3]] = yn[1]; cB[yn[3]] < cB[-yn[48]]; cB[yn[3]]++)
                  if (cB[yn[6]] = cB[yn[15]].indexOf(cB[yn[43]][cB[yn[3]]]), cB[yn[6]] !== -yn[2])
                    if (cB[yn[49]] < yn[1]) cB[yn[49]] = cB[yn[6]];
                    else {
                      an(cB[yn[49]] += cB[yn[6]] * yn[29], cB[-yn[35]] |= cB[yn[49]] << cB[yn[50]], cB[yn[50]] += (cB[yn[49]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                      do {
                        an(cB[yn[51]].push(cB[-yn[35]] & yn[12]), cB[-yn[35]] >>= yn[11], cB[yn[50]] -= yn[11])
                      } while (cB[yn[50]] > yn[7]);
                      cB[yn[49]] = -yn[2]
                    } return cB[yn[49]] > -yn[2] && cB[yn[51]].push((cB[-yn[35]] | cB[yn[49]] << cB[yn[50]]) & yn[12]), zn(cB[yn[51]])
              }

              function nc(cB) {
                return typeof tn[cB] === yn[16] ? tn[cB] = Bc(SB[cB]) : tn[cB]
              }
              cB[yn[13]] = yn[43], cB[yn[15]] = mB(cB[yn[1]]), cB[yn[15]].length > yn[52] && (cB[yn[15]] = Yc(cB[yn[15]], cB[yn[1]].length * yn[11]));
              var Vc = Array(yn[52]),
                Ic = Array(yn[52]);
              for (cB[yn[53]] = yn[1]; cB[yn[53]] < yn[52]; cB[yn[53]]++) an(Vc[cB[yn[53]]] = 909522486 ^ cB[yn[15]][cB[yn[53]]], Ic[cB[yn[53]]] = 1549556828 ^ cB[yn[15]][cB[yn[53]]]);
              return cB[yn[54]] = Yc(Vc.concat(mB(cB[yn[2]])), yn[55] + cB[yn[2]].length * yn[11]), ec(Yc(Ic.concat(cB[yn[54]]), pB(nc(114), yn[55], 256)))
            }

            function qB(...Bc) {
              function nc(...cB) {
                for (an(cB[yn[13]] = yn[2], cB[yn[56]] = '$AgtlkB9zuCcT7fXQRWiN&D=:E~1U>sZo)x,L|Y4`bp_[<M(#5PyF?^!+2v}G6;@wHS0rnJ*qV.I/8{O%Khja"m3ed]', cB[yn[43]] = "" + (cB[yn[1]] || ""), cB[yn[4]] = cB[yn[43]].length, cB[yn[47]] = [], cB[yn[45]] = yn[1], cB[yn[23]] = yn[1], cB[-yn[58]] = -yn[2]), cB[-yn[0]] = yn[1]; cB[-yn[0]] < cB[yn[4]]; cB[-yn[0]]++)
                  if (cB[-yn[57]] = cB[yn[56]].indexOf(cB[yn[43]][cB[-yn[0]]]), cB[-yn[57]] !== -yn[2])
                    if (cB[-yn[58]] < yn[1]) cB[-yn[58]] = cB[-yn[57]];
                    else {
                      an(cB[-yn[58]] += cB[-yn[57]] * yn[29], cB[yn[45]] |= cB[-yn[58]] << cB[yn[23]], cB[yn[23]] += (cB[-yn[58]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                      do {
                        an(cB[yn[47]].push(cB[yn[45]] & yn[12]), cB[yn[45]] >>= yn[11], cB[yn[23]] -= yn[11])
                      } while (cB[yn[23]] > yn[7]);
                      cB[-yn[58]] = -yn[2]
                    } return cB[-yn[58]] > -yn[2] && cB[yn[47]].push((cB[yn[45]] | cB[-yn[58]] << cB[yn[23]]) & yn[12]), zn(cB[yn[47]])
              }

              function Ic(...cB) {
                return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = nc(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
              }
              for (Bc[yn[13]] = yn[2], an(Bc[yn[60]] = Vc ? cB(115) + cB(116) + Ic(117) : Ic(118) + Ic(119) + Ic(120), Bc[yn[34]] = "", Bc[-yn[59]] = yn[17]), Bc[yn[14]] = yn[1]; Bc[yn[14]] < Bc[yn[1]].length; Bc[yn[14]]++) an(Bc[-yn[59]] = Bc[yn[1]].charCodeAt(Bc[yn[14]]), Bc[yn[34]] += Bc[yn[60]].charAt(Bc[-yn[59]] >>> yn[47] & yn[61]) + Bc[yn[60]].charAt(Bc[-yn[59]] & yn[61]));
              return Bc[yn[34]]
            }

            function Oc(...cB) {
              function nc(...cB) {
                for (an(cB[yn[13]] = yn[2], cB[yn[62]] = '9,ma`]1+pFdgcuA*246=T35BX<.~Z^e0jOi{MfC)8t&KxvLSI|/DkR}%!nUwh:PqWolGybzs"_Y(>7JNH?;VEr@Q[$#', cB[yn[34]] = "" + (cB[yn[1]] || ""), cB[yn[4]] = cB[yn[34]].length, cB[yn[47]] = [], cB[yn[45]] = yn[1], cB[yn[64]] = yn[1], cB[yn[7]] = -yn[2]), cB[yn[63]] = yn[1]; cB[yn[63]] < cB[yn[4]]; cB[yn[63]]++)
                  if (cB[yn[44]] = cB[yn[62]].indexOf(cB[yn[34]][cB[yn[63]]]), cB[yn[44]] !== -yn[2])
                    if (cB[yn[7]] < yn[1]) cB[yn[7]] = cB[yn[44]];
                    else {
                      an(cB[yn[7]] += cB[yn[44]] * yn[29], cB[yn[45]] |= cB[yn[7]] << cB[yn[64]], cB[yn[64]] += (cB[yn[7]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                      do {
                        an(cB[yn[47]].push(cB[yn[45]] & yn[12]), cB[yn[45]] >>= yn[11], cB[yn[64]] -= yn[11])
                      } while (cB[yn[64]] > yn[7]);
                      cB[yn[7]] = -yn[2]
                    } return cB[yn[7]] > -yn[2] && cB[yn[47]].push((cB[yn[45]] | cB[yn[7]] << cB[yn[64]]) & yn[12]), zn(cB[yn[47]])
              }

              function Vc(...cB) {
                return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = nc(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
              }
              for (cB[yn[13]] = yn[2], an(cB[yn[2]] = Vc(121) + Vc(122) + Vc(123) + "/", cB[yn[34]] = "", cB[yn[66]] = cB[yn[1]].length), cB[yn[65]] = yn[1]; cB[yn[65]] < cB[yn[66]]; cB[yn[65]] += yn[19])
                for (cB[yn[67]] = cB[yn[1]].charCodeAt(cB[yn[65]]) << yn[52] | (cB[yn[65]] + yn[2] < cB[yn[66]] ? cB[yn[1]].charCodeAt(cB[yn[65]] + yn[2]) << yn[11] : yn[1]) | (cB[yn[65]] + yn[43] < cB[yn[66]] ? cB[yn[1]].charCodeAt(cB[yn[65]] + yn[43]) : yn[1]), cB[yn[9]] = yn[1]; cB[yn[9]] < yn[47]; cB[yn[9]]++) cB[yn[65]] * yn[11] + cB[yn[9]] * yn[23] > cB[yn[1]].length * yn[11] ? cB[yn[34]] += Bc : cB[yn[34]] += cB[yn[2]].charAt(cB[yn[67]] >>> yn[23] * (yn[19] - cB[yn[9]]) & yn[22]);
              return cB[yn[34]]
            }

            function Tc(...cB) {
              var Bc, nc, Vc, Ic;
              for (an(cB[yn[13]] = yn[43], cB[yn[68]] = cB[yn[2]].length, cB[yn[19]] = Array()), cB[yn[4]] = Array(Math.ceil(cB[yn[1]].length / yn[43])), Bc = yn[1]; Bc < cB[yn[4]].length; Bc++) cB[yn[4]][Bc] = cB[yn[1]].charCodeAt(Bc * yn[43]) << yn[11] | cB[yn[1]].charCodeAt(Bc * yn[43] + yn[2]);
              for (; cB[yn[4]].length > yn[1];) {
                for (an(Ic = Array(), Vc = yn[1]), Bc = yn[1]; Bc < cB[yn[4]].length; Bc++) an(Vc = (Vc << yn[52]) + cB[yn[4]][Bc], nc = Math.floor(Vc / cB[yn[68]]), Vc -= nc * cB[yn[68]]), (Ic.length > yn[1] || nc > yn[1]) && (Ic[Ic.length] = nc);
                an(cB[yn[19]][cB[yn[19]].length] = Vc, cB[yn[4]] = Ic)
              }
              for (cB[yn[45]] = "", Bc = cB[yn[19]].length - yn[2]; Bc >= yn[1]; Bc--) cB[yn[45]] += cB[yn[2]].charAt(cB[yn[19]][Bc]);
              for (cB[yn[23]] = Math.ceil(cB[yn[1]].length * yn[11] / (Math.log(cB[yn[2]].length) / Math.log(yn[43]))), Bc = cB[yn[45]].length; Bc < cB[yn[23]]; Bc++) cB[yn[45]] = cB[yn[2]][yn[1]] + cB[yn[45]];
              return cB[yn[45]]
            }

            function fc(...cB) {
              var Bc, nc;
              for (an(cB[yn[13]] = yn[2], cB[yn[15]] = "", cB[-yn[69]] = -yn[2]); ++cB[-yn[69]] < cB[yn[1]].length;) an(Bc = cB[yn[1]].charCodeAt(cB[-yn[69]]), nc = cB[-yn[69]] + yn[2] < cB[yn[1]].length ? cB[yn[1]].charCodeAt(cB[-yn[69]] + yn[2]) : yn[1]), 55296 <= Bc && Bc <= 56319 && 56320 <= nc && nc <= 57343 && an(Bc = 65536 + ((Bc & yn[70]) << yn[78]) + (nc & yn[70]), cB[-yn[69]]++), Bc <= yn[71] ? cB[yn[15]] += String.fromCharCode(Bc) : Bc <= 2047 ? cB[yn[15]] += String.fromCharCode(192 | Bc >>> yn[23] & yn[72], yn[73] | Bc & yn[22]) : Bc <= yn[81] ? cB[yn[15]] += String.fromCharCode(224 | Bc >>> yn[25] & yn[61], yn[73] | Bc >>> yn[23] & yn[22], yn[73] | Bc & yn[22]) : Bc <= 2097151 && (cB[yn[15]] += String.fromCharCode(240 | Bc >>> yn[74] & yn[7], yn[73] | Bc >>> yn[25] & yn[22], yn[73] | Bc >>> yn[23] & yn[22], yn[73] | Bc & yn[22]));
              return cB[yn[15]]
            }

            function mB(...cB) {
              for (an(cB[yn[13]] = yn[2], cB[yn[2]] = Array(cB[yn[1]].length >> yn[43])), cB[-yn[52]] = yn[1]; cB[-yn[52]] < cB[yn[2]].length; cB[-yn[52]]++) cB[yn[2]][cB[-yn[52]]] = yn[1];
              for (cB[-yn[52]] = yn[1]; cB[-yn[52]] < cB[yn[1]].length * yn[11]; cB[-yn[52]] += yn[11]) cB[yn[2]][cB[-yn[52]] >> yn[45]] |= (cB[yn[1]].charCodeAt(cB[-yn[52]] / yn[11]) & yn[12]) << yn[40] - cB[-yn[52]] % yn[75];
              return cB[yn[2]]
            }

            function ec(...cB) {
              for (an(cB[yn[13]] = yn[2], cB[-yn[76]] = ""), cB[yn[43]] = yn[1]; cB[yn[43]] < cB[yn[1]].length * yn[75]; cB[yn[43]] += yn[11]) cB[-yn[76]] += String.fromCharCode(cB[yn[1]][cB[yn[43]] >> yn[45]] >>> yn[40] - cB[yn[43]] % yn[75] & yn[12]);
              return cB[-yn[76]]
            }

            function tB(cB, Bc) {
              return cB >>> Bc | cB << yn[75] - Bc
            }

            function Sc(...cB) {
              return cB[yn[13]] = yn[43], cB[yn[1]] >>> cB[yn[2]]
            }

            function yB(...cB) {
              return cB[yn[13]] = yn[19], cB[yn[1]] & cB[yn[2]] ^ ~cB[yn[1]] & cB[yn[43]]
            }

            function zB(cB, Bc, nc) {
              return cB & Bc ^ cB & nc ^ Bc & nc
            }

            function pc(cB) {
              return tB(cB, yn[43]) ^ tB(cB, yn[32]) ^ tB(cB, yn[77])
            }

            function hc(...cB) {
              return cB[yn[13]] = yn[2], tB(cB[yn[1]], yn[23]) ^ tB(cB[yn[1]], yn[59]) ^ tB(cB[yn[1]], yn[82])
            }

            function aB(...cB) {
              return cB[yn[13]] = yn[2], tB(cB[yn[1]], yn[7]) ^ tB(cB[yn[1]], yn[74]) ^ Sc(cB[yn[1]], yn[19])
            }

            function lc(...cB) {
              return cB[yn[13]] = yn[2], tB(cB[yn[1]], 17) ^ tB(cB[yn[1]], yn[79]) ^ Sc(cB[yn[1]], yn[78])
            }

            function Yc(...cB) {
              var Bc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc;
              for (an(cB[yn[13]] = yn[43], cB[yn[80]] = new Array(1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225), cB[yn[34]] = new Array(yn[64])), an(cB[yn[1]][cB[yn[2]] >> yn[45]] |= yn[73] << yn[40] - cB[yn[2]] % yn[75], cB[yn[1]][(cB[yn[2]] + yn[64] >> yn[6] << yn[47]) + yn[61]] = cB[yn[2]]), qB = yn[1]; qB < cB[yn[1]].length; qB += yn[52]) {
                for (an(Bc = cB[yn[80]][yn[1]], Vc = cB[yn[80]][yn[2]], Ic = cB[yn[80]][yn[43]], rB = cB[yn[80]][yn[19]], uc = cB[yn[80]][yn[47]], sc = cB[yn[80]][yn[45]], Mc = cB[yn[80]][yn[23]], Pc = cB[yn[80]][yn[7]]), Oc = yn[1]; Oc < yn[64]; Oc++) an(Oc < yn[52] ? cB[yn[34]][Oc] = cB[yn[1]][Oc + qB] : cB[yn[34]][Oc] = Lc(Lc(Lc(lc(cB[yn[34]][Oc - yn[43]]), cB[yn[34]][Oc - yn[7]]), aB(cB[yn[34]][Oc - yn[61]])), cB[yn[34]][Oc - yn[52]]), Tc = Lc(Lc(Lc(Lc(Pc, hc(uc)), yB(uc, sc, Mc)), nc[Oc]), cB[yn[34]][Oc]), fc = Lc(pc(Bc), zB(Bc, Vc, Ic)), Pc = Mc, Mc = sc, sc = uc, uc = Lc(rB, Tc), rB = Ic, Ic = Vc, Vc = Bc, Bc = Lc(Tc, fc));
                an(cB[yn[80]][yn[1]] = Lc(Bc, cB[yn[80]][yn[1]]), cB[yn[80]][yn[2]] = Lc(Vc, cB[yn[80]][yn[2]]), cB[yn[80]][yn[43]] = Lc(Ic, cB[yn[80]][yn[43]]), cB[yn[80]][yn[19]] = Lc(rB, cB[yn[80]][yn[19]]), cB[yn[80]][yn[47]] = Lc(uc, cB[yn[80]][yn[47]]), cB[yn[80]][yn[45]] = Lc(sc, cB[yn[80]][yn[45]]), cB[yn[80]][yn[23]] = Lc(Mc, cB[yn[80]][yn[23]]), cB[yn[80]][yn[7]] = Lc(Pc, cB[yn[80]][yn[7]]))
              }
              return cB[yn[80]]
            }

            function Lc(cB, Bc) {
              var nc = (cB & yn[81]) + (Bc & yn[81]);
              return (cB >> yn[52]) + (Bc >> yn[52]) + (nc >> yn[52]) << yn[52] | nc & yn[81]
            }
            return Bc = "", nc = new Array(1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998), {
              hex: Ic,
              b64: uc,
              any: sc,
              hex_hmac: rB,
              b64_hmac: uc,
              any_hmac: sc
            }
          }(), console.log(Bc[yn[77]]))
        }();
        const Bc = yn[6],
          nc = cB(124) + cB(125) + cB(126) + cB(yn[71]) + cB(yn[73]) + cB(yn[66]),
          Vc = {
            [yn[6]]: cB(130) + cB(yn[60]) + cB(132) + cB(133) + cB(134) + cB(135)
          },
          Ic = (...Bc) => {
            Bc[yn[13]] = yn[2];
            const nc = Vc[Bc[yn[1]]];
            if (!nc) {
              function Ic(cB) {
                var Bc, nc, Vc, Ic, rB, uc, sc;
                for (an(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = yn[1], rB = yn[1], uc = -yn[2]), sc = yn[1]; sc < nc; sc++) {
                  var Mc = 'zu"@%Nvw/.ZdALQUKYh:9BlR}tmX?+C([<1V0i&Fnb~sGk=Jf$I3T^!6]SrHOcD{#eyM2*7Pg_8;4`pE|joqa,W>)x5'.indexOf(Bc[sc]);
                  if (Mc !== -yn[2])
                    if (uc < yn[1]) uc = Mc;
                    else {
                      an(uc += Mc * yn[29], Ic |= uc << rB, rB += (uc & yn[30]) > yn[31] ? yn[32] : yn[33]);
                      do {
                        an(Vc.push(Ic & yn[12]), Ic >>= yn[11], rB -= yn[11])
                      } while (rB > yn[7]);
                      uc = -yn[2]
                    }
                }
                return uc > -yn[2] && Vc.push((Ic | uc << rB) & yn[12]), zn(Vc)
              }

              function rB(...cB) {
                return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = Ic(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
              }

              function uc() {
                var cB;

                function Bc() {}
                an(cB = function(...cB) {
                  for (an(cB[yn[13]] = yn[43], cB[yn[15]] = yn[1], cB[yn[34]] = yn[1], cB[yn[47]] = new Bc(yn[1]), cB[yn[75]] = cB[yn[47]], cB[yn[8]] = cB[yn[1]], cB[-yn[82]] = cB[yn[2]]); cB[yn[8]] !== yn[83] || cB[-yn[82]] !== yn[83];) an(cB[yn[34]] = (cB[yn[8]] ? cB[yn[8]].val : yn[1]) + (cB[-yn[82]] ? cB[-yn[82]].val : yn[1]) + cB[yn[15]], cB[yn[15]] = Math.floor(cB[yn[34]] / yn[78]), cB[yn[75]].next = new Bc(cB[yn[34]] % yn[78]), cB[yn[75]] = cB[yn[75]].next, cB[yn[8]] = cB[yn[8]] ? cB[yn[8]].next : yn[83], cB[-yn[82]] = cB[-yn[82]] ? cB[-yn[82]].next : yn[83]);
                  return cB[yn[15]] && (cB[yn[75]].next = new Bc(cB[yn[15]])), cB[yn[47]].next
                }, console.log(cB))
              }
              throw rB(136) + "m" in hB && uc(), new Error(rB(yn[57]) + rB(yn[84]) + rB(yn[51]) + Bc[yn[1]])
            }
            return [yn[1], yn[2], yn[43], yn[19], yn[47], yn[45], yn[23], yn[7]].map((Bc => (cB(140) + yn[9] in hB && function(...cB) {
              function Bc() {}
              cB[yn[13]] = yn[1], an(cB[yn[15]] = function(...cB) {
                for (an(cB[yn[13]] = yn[43], cB[yn[84]] = yn[1], cB[yn[85]] = yn[1], cB[yn[4]] = new Bc(yn[1]), cB[yn[45]] = cB[yn[4]], cB[yn[8]] = cB[yn[1]], cB[yn[9]] = cB[yn[2]]); cB[yn[8]] !== yn[83] || cB[yn[9]] !== yn[83];) an(cB[yn[85]] = (cB[yn[8]] ? cB[yn[8]].val : yn[1]) + (cB[yn[9]] ? cB[yn[9]].val : yn[1]) + cB[yn[84]], cB[yn[84]] = Math.floor(cB[yn[85]] / yn[78]), cB[yn[45]].next = new Bc(cB[yn[85]] % yn[78]), cB[yn[45]] = cB[yn[45]].next, cB[yn[8]] = cB[yn[8]] ? cB[yn[8]].next : yn[83], cB[yn[9]] = cB[yn[9]] ? cB[yn[9]].next : yn[83]);
                return cB[yn[84]] && (cB[yn[45]].next = new Bc(cB[yn[84]])), cB[yn[4]].next
              }, console.log(cB[yn[15]]))
            }(), parseInt(nc[cB(141)](Bc * yn[11], Bc * yn[11] + yn[11]), yn[52]))))
          };
        an(rn = (...cB) => (cB[yn[13]] = yn[2], cB[yn[1]] >= Bc), uB = (...Bc) => {
          function nc(cB) {
            return typeof tn[cB] === yn[16] ? tn[cB] = function(...cB) {
              for (an(cB[yn[13]] = yn[2], cB[yn[2]] = 'v.90A)|Z3hP(7eqM*;bmTpEHg[=BJo>VRlNzuc"`%W8fL^~]Y{OC#a:}SDFG5@QknyKt_Uji?2x!d,64/w$&rXI1s+<', cB[yn[36]] = "" + (cB[yn[1]] || ""), cB[yn[4]] = cB[yn[36]].length, cB[-yn[87]] = [], cB[yn[45]] = yn[1], cB[yn[9]] = yn[1], cB[-yn[86]] = -yn[2]), cB[yn[3]] = yn[1]; cB[yn[3]] < cB[yn[4]]; cB[yn[3]]++)
                if (cB[yn[6]] = cB[yn[2]].indexOf(cB[yn[36]][cB[yn[3]]]), cB[yn[6]] !== -yn[2])
                  if (cB[-yn[86]] < yn[1]) cB[-yn[86]] = cB[yn[6]];
                  else {
                    an(cB[-yn[86]] += cB[yn[6]] * yn[29], cB[yn[45]] |= cB[-yn[86]] << cB[yn[9]], cB[yn[9]] += (cB[-yn[86]] & yn[30]) > yn[31] ? yn[32] : yn[33]);
                    do {
                      an(cB[-yn[87]].push(cB[yn[45]] & yn[12]), cB[yn[45]] >>= yn[11], cB[yn[9]] -= yn[11])
                    } while (cB[yn[9]] > yn[7]);
                    cB[-yn[86]] = -yn[2]
                  } return cB[-yn[86]] > -yn[2] && cB[-yn[87]].push((cB[yn[45]] | cB[-yn[86]] << cB[yn[9]]) & yn[12]), zn(cB[-yn[87]])
            }(SB[cB]) : tn[cB]
          }
          Bc[yn[13]] = yn[43];
          const Vc = crypto[cB(142) + nc(143) + nc(144)](new Uint8Array(PB)),
            rB = IB[yn[8]][nc(145) + nc(146)](Bc[yn[2]], {
              [nc(147)]: yn[2]
            });
          MB(Ic(Bc[yn[1]]), Vc, yn[2], rB);
          const uc = new Uint8Array(PB + rB[nc(148)]);
          return an(uc[nc(yn[67])](Vc), uc[nc(yn[67])](rB, PB)), uc
        }, sB = (...cB) => {
          function Bc(...cB) {
            return cB[yn[13]] = yn[2], typeof tn[cB[yn[1]]] === yn[16] ? tn[cB[yn[1]]] = function(cB) {
              var Bc, nc, Vc, Ic, rB, uc, sc;
              for (an(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = yn[1], rB = yn[1], uc = -yn[2]), sc = yn[1]; sc < nc; sc++) {
                var Mc = 'oU9A;cwTin2PO{#%S"[<.|513Fsx7k)&}X$rN,WVR~0^:Jd]uD/6v>@tz4eHLM+ym=GEY(8_IB!CfK*gh`aZ?Qjlpbq'.indexOf(Bc[sc]);
                if (Mc !== -yn[2])
                  if (uc < yn[1]) uc = Mc;
                  else {
                    an(uc += Mc * yn[29], Ic |= uc << rB, rB += (uc & yn[30]) > yn[31] ? yn[32] : yn[33]);
                    do {
                      an(Vc.push(Ic & yn[12]), Ic >>= yn[11], rB -= yn[11])
                    } while (rB > yn[7]);
                    uc = -yn[2]
                  }
              }
              return uc > -yn[2] && Vc.push((Ic | uc << rB) & yn[12]), zn(Vc)
            }(SB[cB[yn[1]]]) : tn[cB[yn[1]]]
          }
          if (cB[yn[13]] = yn[43], cB[yn[2]][Bc(150)] < PB) throw new Error(nc);
          const Vc = new Uint8Array(cB[yn[2]][Bc(yn[88])](PB));
          MB(Ic(cB[yn[1]]), cB[yn[2]][Bc(yn[88])](yn[1], PB), yn[2], Vc);
          const rB = new(IB[yn[8]][Bc(152) + yn[8]])({
            [Bc(153)]: !0
          });
          if (rB[Bc(154)](Vc), rB[Bc(155)] || !rB[Bc(156)]) throw new Error(nc);
          return rB[Bc(157)]
        })
      })();
    var lB = nc(35575),
      YB = nc(35577);

    function LB(cB) {
      return rB.QV.from(Uint8Array.from(cB))
    }

    function gn(cB) {
      return Array.from(cB)
    }

    function UB(cB, Bc) {
      return {
        [cB]: {
          x: Bc
        }
      }
    }

    function bn(cB) {
      if (null === cB || "object" !== typeof cB || Array.isArray(cB)) return cB;
      const Bc = Object.keys(cB);
      if (1 !== Bc.length) return cB;
      const nc = cB[Bc[0]];
      return null !== nc && "object" === typeof nc && !Array.isArray(nc) && "x" in nc ? nc.x : cB
    }

    function ZB(cB, Bc) {
      return void 0 === Bc ? null : Mc.has(cB) ? null === Bc ? null : JSON.stringify(Bc) : Bc
    }

    function QB(cB, Bc) {
      return null === Bc && Mc.has(cB) ? null : "string" === typeof Bc && Mc.has(cB) ? JSON.parse(Bc) : Bc
    }

    function CB(cB, Bc, nc) {
      return (0, Ic.E)(nc) ? null : UB(cB, ZB(Bc, nc))
    }

    function vn(cB, Bc) {
      return (0, Ic.E)(Bc) ? null : QB(cB, bn(Bc))
    }

    function DB(cB) {
      const Bc = {};
      for (const nc in cB) {
        const Vc = cB[nc];
        Bc[nc] = void 0 === Vc ? null : Vc
      }
      return Bc
    }

    function NB(cB) {
      const Bc = {};
      for (const nc in cB) {
        const Vc = cB[nc];
        null !== Vc && void 0 !== Vc && (Bc[nc] = Vc)
      }
      return Bc
    }

    function EB(cB, Bc) {
      return Object.prototype.hasOwnProperty.call(cB, Bc)
    }

    function oB(cB, Bc) {
      const nc = {};
      for (const Vc in cB) {
        const Ic = cB[Vc];
        nc[Vc] = Bc(Ic)
      }
      return nc
    }

    function WB(cB, Bc, nc) {
      const Vc = [];
      for (let Ic = 0; Ic < Bc.length; Ic++) {
        const rB = Bc[Ic];
        EB(cB, rB) && Vc.push({
          i: Ic,
          v: nc(rB, cB[rB])
        })
      }
      return Vc
    }

    function wB(cB, Bc, nc) {
      const Vc = {};
      for (const Ic of cB) {
        const cB = Bc[Ic.i];
        void 0 !== cB ? Vc[cB] = nc(cB, Ic.v) : console.error(`Unknown Partial field index ${Ic.i}`)
      }
      return Vc
    }

    function kn(cB, Bc) {
      return (0, Ic.E)(Bc) ? null : "Mnc" === cB ? function(cB) {
        return UB(mB, WB(cB, YB.w, ((cB, Bc) => CB(Dc[cB], cB, Bc))))
      }(Bc) : CB(vB[cB], cB, Bc)
    }

    function XB(cB, Bc) {
      return (0, Ic.E)(Bc) ? null : "Mnc" === cB ? function(cB) {
        return (0, Ic.E)(cB) ? null : wB(cB, YB.w, vn)
      }(bn(Bc)) : vn(cB, Bc)
    }

    function HB(cB) {
      const {
        type: Bc,
        ...nc
      } = cB, Vc = {};
      for (const Ic in nc) {
        const cB = nc[Ic];
        Vc[Ic] = ZB(Ic, cB)
      }
      if ("chunkAdded" === Bc || "chunkRemoved" === Bc) Vc.rle = LB(Vc.rle);
      else if ("playSound" === Bc) {
        const cB = Vc.lK;
        Vc.lK = (0, Ic.E)(cB) ? null : DB(cB)
      } else if ("customKillfeed" === Bc) {
        var rB, uc;
        Vc.killer = DB(null !== (rB = Vc.killer) && void 0 !== rB ? rB : {}), Vc.victim = DB(null !== (uc = Vc.victim) && void 0 !== uc ? uc : {})
      }
      return {
        [Bc]: Vc
      }
    }

    function FB(cB) {
      const Bc = Object.keys(cB)[0],
        nc = cB[Bc],
        Vc = {};
      for (const Ic in nc) {
        const cB = nc[Ic];
        Vc[Ic] = QB(Ic, cB)
      }
      if ("chunkAdded" === Bc || "chunkRemoved" === Bc) Vc.rle = gn(Vc.rle);
      else if ("playSound" === Bc) {
        const cB = Vc.lK;
        Vc.lK = (0, Ic.E)(cB) ? null : NB(cB)
      } else if ("customKillfeed" === Bc) {
        var rB, uc;
        Vc.killer = NB(null !== (rB = Vc.killer) && void 0 !== rB ? rB : {}), Vc.victim = NB(null !== (uc = Vc.victim) && void 0 !== uc ? uc : {})
      }
      return {
        type: Bc,
        ...Vc
      }
    }

    function JB(cB) {
      var Bc, nc;
      return (0, Ic.E)(cB) ? null : {
        name: cB.name,
        amount: null !== (Bc = cB.amount) && void 0 !== Bc ? Bc : null,
        attributes: JSON.stringify(null !== (nc = cB.attributes) && void 0 !== nc ? nc : {})
      }
    }

    function jn(cB) {
      if ((0, Ic.E)(cB)) return null;
      const Bc = cB;
      return {
        name: Bc.name,
        amount: Bc.amount,
        attributes: JSON.parse(Bc.attributes)
      }
    }

    function RB(cB) {
      if ((0, Ic.E)(cB)) return null;
      return {
        fullSlotsArray: Array.isArray(cB.slots),
        entries: WB(cB, YB.i, ((cB, Bc) => {
          if ((0, Ic.E)(Bc)) return null;
          if ("slots" === cB) {
            const cB = Array.isArray(Bc) ? function(cB) {
              const Bc = {};
              for (let nc = 0; nc < cB.length; nc++) Bc[nc] = cB[nc];
              return Bc
            }(Bc) : Bc;
            return UB(Uc, function(cB) {
              const Bc = {};
              for (const nc in cB) {
                const Vc = cB[nc];
                Bc[nc] = JB(Vc)
              }
              return Bc
            }(cB))
          }
          return UB(gB, Bc)
        }))
      }
    }

    function KB(cB) {
      if ((0, Ic.E)(cB)) return;
      const Bc = cB.fullSlotsArray;
      return wB(cB.entries, YB.i, ((cB, nc) => {
        if ((0, Ic.E)(nc)) return null;
        if ("slots" === cB) {
          const cB = function(cB) {
            const Bc = {};
            for (const nc in cB) {
              const Vc = cB[nc];
              Bc[Number(nc)] = jn(Vc)
            }
            return Bc
          }(bn(nc));
          return Bc ? function(cB) {
            const Bc = [];
            for (let nc = 0; nc < Ic.l; nc++) Bc.push(nc in cB ? cB[nc] : null);
            return Bc
          }(cB) : cB
        }
        return bn(nc)
      }))
    }

    function xn(cB) {
      return {
        entities: oB(cB.entities, (cB => WB(cB, YB.h, kn))),
        items: oB(cB.items, (cB => WB(cB, YB.m, ((cB, Bc) => CB(Nc[cB], cB, Bc))))),
        camera: cB.camera,
        hotbar: RB(cB.hotbar),
        playerHud: (0, Ic.E)(cB.playerHud) ? null : WB(cB.playerHud, YB.p, ((cB, Bc) => (0, Ic.E)(Bc) ? null : function(cB, Bc) {
          return {
            [cB]: Bc
          }
        }("double", Bc))),
        effects: (0, Ic.E)(cB.effects) ? null : (0, lB.l)(cB.effects),
        uiElements: WB(cB.uiElements, YB.y, ((cB, Bc) => (0, Ic.E)(Bc) ? null : JSON.stringify(Bc))),
        environment: WB(cB.environment, YB.t, ((cB, Bc) => CB(Ec[cB], cB, Bc))),
        structuralEvents: cB.structuralEvents.map(HB),
        ephemeralEvents: cB.ephemeralEvents.map(HB)
      }
    }

    function dB(cB) {
      var Bc;
      const nc = {
          entities: oB(cB.entities, (cB => {
            const Bc = wB(cB, YB.h, XB),
              nc = Bc.type ? (0, Vc.r)(Bc.type) : null;
            return nc && (Bc.type = "Mesh", Bc.meshKind = nc.meshKind, Bc.meshOpts = nc.meshOpts), Bc
          })),
          items: oB(cB.items, (cB => wB(cB, YB.m, vn))),
          camera: {
            ...cB.camera,
            charging: null !== (Bc = cB.camera.charging) && void 0 !== Bc && Bc
          },
          uiElements: wB(cB.uiElements, YB.y, ((cB, Bc) => "string" === typeof Bc ? JSON.parse(Bc) : Bc)),
          environment: wB(cB.environment, YB.t, vn),
          structuralEvents: cB.structuralEvents.map((cB => {
            const Bc = FB(cB);
            return "UBc" === Bc.type ? (Bc.fromBlockData ??= null, Bc.toBlockData ??= null) : "chunkAdded" !== Bc.type && "chunkRemoved" !== Bc.type || (Bc.sharedBlockData ??= []), Bc
          })),
          ephemeralEvents: cB.ephemeralEvents.map((cB => FB(cB)))
        },
        rB = KB(cB.hotbar);
      return void 0 !== rB && (nc.hotbar = rB), (0, Ic.E)(cB.playerHud) || (nc.playerHud = wB(cB.playerHud, YB.p, ((cB, Bc) => (0, Ic.E)(Bc) ? null : function(cB) {
        if (null === cB || "object" !== typeof cB || Array.isArray(cB)) return cB;
        const Bc = Object.keys(cB);
        return 1 !== Bc.length || "int" !== Bc[0] && "double" !== Bc[0] ? cB : cB[Bc[0]]
      }(Bc)))), (0, Ic.E)(cB.effects) || (nc.effects = (0, lB.g)(cB.effects)), nc
    }
    let AB, GB;
    var cV, Bn, nn, Vn, In, rV, un, sn, Mn, Pn, qV;
    const On = [90, 0, 1, 8, 3, 106, "i", 129, "e", 249, 156, 255, "length", 66, 9, "d", "a", "undefined", void 0, 31, 4, 201, "b", 63, 6, "fromCodePoint", 7, 12, "push", 182, 230, 222, 215, 91, 122, "f", 8191, 88, 13, 14, 232, 2, 158, 121, "c", "join", 124, 65, 166, 142, 173, 81, 1023, 25, 181, 65536, 241, 10, 55296, 56320, 128, 239, 15, 18, 118, 54, 5, 51, 101, 103, 22, "g", 194, 214, 199, 192, 127, 29, 61, 67, 224, "h", 240, !1, null, 49, 220, 107, 238, 95, 109, 178, 24, 56319, 77, 64512, 19, 65535, 57343, 148, 16, 4294967168, 116, 4294965248, 4294901760, 4292870144, 119, 198, 20, 42, 84, 2048, 145, 248, 1114111, 177, 38, 205, 93, 80, 203, 62, 218, 208, 52, 155, 170, 47, 98, 186, 79, 111, 197, 146, 231, 237, "QV", 184, 34, 114];

    function Tn(...cB) {
      return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
        for (tV(cB[On[12]] = On[2], cB[-On[5]] = '17!_^[v$x{=DE&;WYSzqX)3u4<"2Z6U~waLI%(9Fj,0b/oC.?ycg5kmpP8#Gn*BM`Vf|T+QJKRsNrAH@Ot]hd>}:lei', cB[-On[0]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[-On[0]].length, cB[-On[10]] = [], cB[On[8]] = On[1], cB[-On[9]] = On[1], cB[On[7]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[4]]; cB[On[3]]++)
          if (cB[On[6]] = cB[-On[5]].indexOf(cB[-On[0]][cB[On[3]]]), cB[On[6]] !== -On[2])
            if (cB[On[7]] < On[1]) cB[On[7]] = cB[On[6]];
            else {
              tV(cB[On[7]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[7]] << cB[-On[9]], cB[-On[9]] += (cB[On[7]] & On[36]) > On[37] ? On[38] : On[39]);
              do {
                tV(cB[-On[10]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[-On[9]] -= On[3])
              } while (cB[-On[9]] > On[26]);
              cB[On[7]] = -On[2]
            } return cB[On[7]] > -On[2] && cB[-On[10]].push((cB[On[8]] | cB[On[7]] << cB[-On[9]]) & On[11]), fn(cB[-On[10]])
      }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
    }

    function fn(...cB) {
      return cB[On[12]] = On[2], typeof Vn !== On[17] && Vn ? (new Vn).decode(new In(cB[On[1]])) : typeof rV !== On[17] && rV ? rV.from(cB[On[1]]).toString("utf-8") : Mn(cB[On[1]])
    }

    function mV() {}

    function en(cB, Bc, nc, Vc = {}, Ic, rB, uc, sc) {
      if (rB || (rB = function(cB) {
          return typeof cV[cB] === On[17] ? cV[cB] = Ic(Bn[cB]) : cV[cB]
        }), Ic || (Ic = function(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[16]] = 'uMeDKEnSUlCPWNdgcHrmfBz){1ok~=R>b(|v!5G3"$Aw%<p&#Fx*s+JVOyiL7It`Y6.X[8}@Z:2^40_9?Qhj/];aq,T', cB[-On[31]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[-On[31]].length, cB[-On[40]] = [], cB[On[34]] = On[1], cB[On[35]] = On[1], cB[On[32]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[4]]; cB[On[3]]++)
            if (cB[On[6]] = cB[On[16]].indexOf(cB[-On[31]][cB[On[3]]]), cB[On[6]] !== -On[2])
              if (cB[On[32]] < On[1]) cB[On[32]] = cB[On[6]];
              else {
                tV(cB[On[32]] += cB[On[6]] * On[33], cB[On[34]] |= cB[On[32]] << cB[On[35]], cB[On[35]] += (cB[On[32]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[-On[40]].push(cB[On[34]] & On[11]), cB[On[34]] >>= On[3], cB[On[35]] -= On[3])
                } while (cB[On[35]] > On[26]);
                cB[On[32]] = -On[2]
              } return cB[On[32]] > -On[2] && cB[-On[40]].push((cB[On[34]] | cB[On[32]] << cB[On[35]]) & On[11]), fn(cB[-On[40]])
        }), tV(uc = void 0, sc = {
          [Tn(On[90])]: function(...cB) {
            function Bc(...cB) {
              return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
                for (tV(cB[On[12]] = On[2], cB[On[16]] = '`YJTW}SgBIlC4hUQFR(7<9e>HDL8|"@uXv2qGNx5_E^ri;AtfyPc~Ow+n#Kzma&0{M]VsZ6$jb?.d:opk!%),=31*[/', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[41]].length, cB[On[20]] = [], cB[-On[43]] = On[1], cB[On[24]] = On[1], cB[-On[5]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[4]]; cB[On[3]]++)
                  if (cB[On[42]] = cB[On[16]].indexOf(cB[On[41]][cB[On[3]]]), cB[On[42]] !== -On[2])
                    if (cB[-On[5]] < On[1]) cB[-On[5]] = cB[On[42]];
                    else {
                      tV(cB[-On[5]] += cB[On[42]] * On[33], cB[-On[43]] |= cB[-On[5]] << cB[On[24]], cB[On[24]] += (cB[-On[5]] & On[36]) > On[37] ? On[38] : On[39]);
                      do {
                        tV(cB[On[20]].push(cB[-On[43]] & On[11]), cB[-On[43]] >>= On[3], cB[On[24]] -= On[3])
                      } while (cB[On[24]] > On[26]);
                      cB[-On[5]] = -On[2]
                    } return cB[-On[5]] > -On[2] && cB[On[20]].push((cB[-On[43]] | cB[-On[5]] << cB[On[24]]) & On[11]), fn(cB[On[20]])
              }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
            }
            tV([
              [cB[On[44]], cB[On[2]], cB[-On[46]]], cB[219]
            ] = qV, console[Bc(110)]("" + cB[On[44]][On[45]](".") + (Bc(On[131]) + Bc(112)) + cB[-On[46]][Bc(113) + "me"] + Bc(On[139]) + cB[On[2]]))
          }
        }), Bc === Tn(115) + rB(On[102]) && (qV = []), Bc === rB(117) + rB(On[64])) {
        function Mc(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[48]] = '4MNRSgqPFuYO@xe|#hn"8CQb(o{$?LBXZr90E.l:ma,%A>v;Ti73!=z<JG2_&[dt]kwHsIfp+D6Kj/WUVy*~^c}`5)1', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[On[41]].length, cB[On[15]] = [], cB[-On[49]] = On[1], cB[On[35]] = On[1], cB[On[26]] = -On[2]), cB[On[47]] = On[1]; cB[On[47]] < cB[On[44]]; cB[On[47]]++)
            if (cB[On[6]] = cB[On[48]].indexOf(cB[On[41]][cB[On[47]]]), cB[On[6]] !== -On[2])
              if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[6]];
              else {
                tV(cB[On[26]] += cB[On[6]] * On[33], cB[-On[49]] |= cB[On[26]] << cB[On[35]], cB[On[35]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[15]].push(cB[-On[49]] & On[11]), cB[-On[49]] >>= On[3], cB[On[35]] -= On[3])
                } while (cB[On[35]] > On[26]);
                cB[On[26]] = -On[2]
              } return cB[On[26]] > -On[2] && cB[On[15]].push((cB[-On[49]] | cB[On[26]] << cB[On[35]]) & On[11]), fn(cB[On[15]])
        }

        function Pc(...cB) {
          return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Mc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
        }

        function qB() {
          ! function(...cB) {
            function Bc(...cB) {
              for (tV(cB[On[12]] = On[2], cB[On[16]] = [], cB[On[41]] = On[1], cB[On[4]] = cB[On[1]].length, cB[-On[50]] = On[18], cB[-On[51]] = On[18]); cB[On[41]] < cB[On[4]];) tV(cB[-On[50]] = cB[On[1]].charCodeAt(cB[On[41]]++), cB[-On[50]] >= On[58] && cB[-On[50]] <= On[93] && cB[On[41]] < cB[On[4]] ? (cB[-On[51]] = cB[On[1]].charCodeAt(cB[On[41]]++), (cB[-On[51]] & On[95]) == On[59] ? cB[On[16]].push(((cB[-On[50]] & On[52]) << On[57]) + (cB[-On[51]] & On[52]) + On[55]) : (cB[On[16]].push(cB[-On[50]]), cB[On[41]]--)) : cB[On[16]].push(cB[-On[50]]));
              return cB[On[16]]
            }

            function nc(...cB) {
              if (cB[On[12]] = On[2], cB[On[1]] >= On[58] && cB[On[1]] <= On[98]) {
                function Bc(cB) {
                  var Bc, nc, Vc, Ic, rB, uc, sc;
                  for (tV(Bc = "" + (cB || ""), nc = Bc.length, Vc = [], Ic = On[1], rB = On[1], uc = -On[2]), sc = On[1]; sc < nc; sc++) {
                    var Mc = '~/y{5|*>)=<}[%ZBgl01,RTCxL@jQeVJKYpoS.UMG!ab_]HmEN$3(`h#6A^7uwPntvW+fd?2I:rs9i4;&Dq"8zkOFXc'.indexOf(Bc[sc]);
                    if (Mc !== -On[2])
                      if (uc < On[1]) uc = Mc;
                      else {
                        tV(uc += Mc * On[33], Ic |= uc << rB, rB += (uc & On[36]) > On[37] ? On[38] : On[39]);
                        do {
                          tV(Vc.push(Ic & On[11]), Ic >>= On[3], rB -= On[3])
                        } while (rB > On[26]);
                        uc = -On[2]
                      }
                  }
                  return uc > -On[2] && Vc.push((Ic | uc << rB) & On[11]), fn(Vc)
                }

                function nc(...cB) {
                  return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Bc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                }
                throw Error(nc(120) + nc(On[43]) + nc(On[34]) + cB[On[1]].toString(On[100]).toUpperCase() + (nc(123) + nc(On[46]) + nc(125) + On[8]))
              }
            }

            function Vc(...Bc) {
              return Bc[On[12]] = On[41], cB[On[2]](Bc[On[1]] >> Bc[On[2]] & On[23] | On[60])
            }

            function Ic(...Bc) {
              return Bc[On[12]] = On[2], (Bc[On[1]] & On[101]) == On[1] ? cB[On[2]](Bc[On[1]]) : (Bc[On[61]] = "", (Bc[On[1]] & On[103]) == On[1] ? Bc[On[61]] = cB[On[2]](Bc[On[1]] >> On[24] & On[19] | On[75]) : (Bc[On[1]] & On[104]) == On[1] ? tV(nc(Bc[On[1]]), Bc[On[61]] = cB[On[2]](Bc[On[1]] >> On[27] & On[62] | On[80]), Bc[On[61]] += Vc(Bc[On[1]], On[24])) : (Bc[On[1]] & On[105]) == On[1] && tV(Bc[On[61]] = cB[On[2]](Bc[On[1]] >> On[63] & On[26] | On[82]), Bc[On[61]] += Vc(Bc[On[1]], On[27]), Bc[On[61]] += Vc(Bc[On[1]], On[24])), Bc[On[61]] += cB[On[2]](Bc[On[1]] & On[23] | On[60]), Bc[On[61]])
            }

            function rB(...Bc) {
              if (Bc[On[12]] = On[1], cB[On[73]] >= cB[On[44]]) {
                function nc(...cB) {
                  for (tV(cB[On[12]] = On[2], cB[On[16]] = 'vFDqoZpNeKMCGj7H*9,BXJ/YUPh=S#"|~]%mOsLu4Wx!l(Tcwi$`?anIkRy[^QVAfE)2_z56g3{rt&8d1;<0:+.>b}@', cB[-On[69]] = "" + (cB[On[1]] || ""), cB[-On[70]] = cB[-On[69]].length, cB[On[15]] = [], cB[On[8]] = On[1], cB[On[72]] = On[1], cB[On[71]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[-On[70]]; cB[On[3]]++)
                    if (cB[On[6]] = cB[On[16]].indexOf(cB[-On[69]][cB[On[3]]]), cB[On[6]] !== -On[2])
                      if (cB[On[71]] < On[1]) cB[On[71]] = cB[On[6]];
                      else {
                        tV(cB[On[71]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[71]] << cB[On[72]], cB[On[72]] += (cB[On[71]] & On[36]) > On[37] ? On[38] : On[39]);
                        do {
                          tV(cB[On[15]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[72]] -= On[3])
                        } while (cB[On[72]] > On[26]);
                        cB[On[71]] = -On[2]
                      } return cB[On[71]] > -On[2] && cB[On[15]].push((cB[On[8]] | cB[On[71]] << cB[On[72]]) & On[11]), fn(cB[On[15]])
                }

                function Vc(...cB) {
                  return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = nc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                }
                throw Error(Vc(126))
              }
              if (tV(Bc[-On[74]] = cB[On[20]][cB[On[73]]] & On[11], cB[On[73]]++), (Bc[-On[74]] & On[75]) == On[60]) return Bc[-On[74]] & On[23];
              throw Error(function(...cB) {
                return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
                  for (tV(cB[On[12]] = On[2], cB[On[68]] = 'Vq85~46{}HA:GuJ0TxgP,B=%"eS.WzCvX?D3Ikn]1>*Os!m#L2tNFw+|^Z@_Qb&9E$rdlfc`)[(;7<iy/MYpohaKURj', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[On[22]].length, cB[On[15]] = [], cB[On[66]] = On[1], cB[On[24]] = On[1], cB[On[26]] = -On[2]), cB[On[67]] = On[1]; cB[On[67]] < cB[On[44]]; cB[On[67]]++)
                    if (cB[On[7]] = cB[On[68]].indexOf(cB[On[22]][cB[On[67]]]), cB[On[7]] !== -On[2])
                      if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[7]];
                      else {
                        tV(cB[On[26]] += cB[On[7]] * On[33], cB[On[66]] |= cB[On[26]] << cB[On[24]], cB[On[24]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                        do {
                          tV(cB[On[15]].push(cB[On[66]] & On[11]), cB[On[66]] >>= On[3], cB[On[24]] -= On[3])
                        } while (cB[On[24]] > On[26]);
                        cB[On[26]] = -On[2]
                      } return cB[On[26]] > -On[2] && cB[On[15]].push((cB[On[66]] | cB[On[26]] << cB[On[24]]) & On[11]), fn(cB[On[15]])
                }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
              }(On[76]))
            }

            function uc(...Bc) {
              if (tV(Bc[On[12]] = On[1], Bc[-On[79]] = On[18], Bc[On[44]] = On[18], Bc[On[15]] = On[18], Bc[On[4]] = On[18], Bc[On[20]] = On[18]), cB[On[73]] > cB[On[44]]) {
                function Vc(...cB) {
                  for (tV(cB[On[12]] = On[2], cB[On[78]] = 'U@h4fE,u!`VFbM=?%Qw~c3^K>L5<y7*].#(&/jrsW;9{m26t1_}CSXzd+Hv$PxR[:Ji)q|l0e"aB8GAYoOIgpTDNZkn', cB[-On[77]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[-On[77]].length, cB[On[20]] = [], cB[On[8]] = On[1], cB[On[35]] = On[1], cB[On[71]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[44]]; cB[On[3]]++)
                    if (cB[On[6]] = cB[On[78]].indexOf(cB[-On[77]][cB[On[3]]]), cB[On[6]] !== -On[2])
                      if (cB[On[71]] < On[1]) cB[On[71]] = cB[On[6]];
                      else {
                        tV(cB[On[71]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[71]] << cB[On[35]], cB[On[35]] += (cB[On[71]] & On[36]) > On[37] ? On[38] : On[39]);
                        do {
                          tV(cB[On[20]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[35]] -= On[3])
                        } while (cB[On[35]] > On[26]);
                        cB[On[71]] = -On[2]
                      } return cB[On[71]] > -On[2] && cB[On[20]].push((cB[On[8]] | cB[On[71]] << cB[On[35]]) & On[11]), fn(cB[On[20]])
                }

                function Ic(...cB) {
                  return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Vc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                }
                throw Error(Ic(On[60]))
              }
              if (cB[On[73]] == cB[On[44]]) return On[83];
              if (tV(Bc[-On[79]] = cB[On[20]][cB[On[73]]] & On[11], cB[On[73]]++), (Bc[-On[79]] & On[60]) == On[1]) return Bc[-On[79]];
              if ((Bc[-On[79]] & On[80]) == On[75]) {
                if (tV(Bc[On[44]] = rB(), Bc[On[20]] = (Bc[-On[79]] & On[19]) << On[24] | Bc[On[44]]), Bc[On[20]] >= On[60]) return Bc[On[20]];
                {
                  function uc(...cB) {
                    for (tV(cB[On[12]] = On[2], cB[On[16]] = '?:[26]DZ&yKrX{RM7b;GsIF*OaL.TCV8/k5,m!ziBv=p$PU)l+^NS(4>_9c|#<o"%HhWux1qf3t0g`w@E}YQdjeAn~J', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[41]].length, cB[On[15]] = [], cB[On[20]] = On[1], cB[On[24]] = On[1], cB[On[71]] = -On[2]), cB[On[81]] = On[1]; cB[On[81]] < cB[On[4]]; cB[On[81]]++)
                      if (cB[On[14]] = cB[On[16]].indexOf(cB[On[41]][cB[On[81]]]), cB[On[14]] !== -On[2])
                        if (cB[On[71]] < On[1]) cB[On[71]] = cB[On[14]];
                        else {
                          tV(cB[On[71]] += cB[On[14]] * On[33], cB[On[20]] |= cB[On[71]] << cB[On[24]], cB[On[24]] += (cB[On[71]] & On[36]) > On[37] ? On[38] : On[39]);
                          do {
                            tV(cB[On[15]].push(cB[On[20]] & On[11]), cB[On[20]] >>= On[3], cB[On[24]] -= On[3])
                          } while (cB[On[24]] > On[26]);
                          cB[On[71]] = -On[2]
                        } return cB[On[71]] > -On[2] && cB[On[15]].push((cB[On[20]] | cB[On[71]] << cB[On[24]]) & On[11]), fn(cB[On[15]])
                  }

                  function sc(...cB) {
                    return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = uc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                  }
                  throw Error(sc(On[7]))
                }
              }
              if ((Bc[-On[79]] & On[82]) == On[80]) {
                if (tV(Bc[On[44]] = rB(), Bc[On[15]] = rB(), Bc[On[20]] = (Bc[-On[79]] & On[62]) << On[27] | Bc[On[44]] << On[24] | Bc[On[15]]), Bc[On[20]] >= On[111]) return nc(Bc[On[20]]), Bc[On[20]];
                throw Error(Pc(130))
              }
              if ((Bc[-On[79]] & On[113]) == On[82] && (tV(Bc[On[44]] = rB(), Bc[On[15]] = rB(), Bc[On[4]] = rB(), Bc[On[20]] = (Bc[-On[79]] & On[26]) << On[63] | Bc[On[44]] << On[27] | Bc[On[15]] << On[24] | Bc[On[4]]), Bc[On[20]] >= On[55] && Bc[On[20]] <= On[114])) return Bc[On[20]];
              throw Error(Pc(131))
            }
            tV(cB[On[12]] = On[2], cB[On[2]] = String.fromCharCode), tV(cB[On[20]] = On[18], cB[On[44]] = On[18], cB[On[73]] = On[18]), tV(cB[On[1]].version = Pc(132), cB[On[1]].encode = function(...cB) {
              for (tV(cB[On[12]] = On[2], cB[On[53]] = Bc(cB[On[1]]), cB[On[22]] = cB[On[53]].length, cB[-On[64]] = -On[2], cB[On[65]] = On[18], cB[On[66]] = ""); ++cB[-On[64]] < cB[On[22]];) tV(cB[On[65]] = cB[On[53]][cB[-On[64]]], cB[On[66]] += Ic(cB[On[65]]));
              return cB[On[66]]
            }, cB[On[1]].decode = function(...nc) {
              for (tV(nc[On[12]] = On[2], cB[On[20]] = Bc(nc[On[1]]), cB[On[44]] = cB[On[20]].length, cB[On[73]] = On[1], nc[On[2]] = [], nc[-On[79]] = On[18]);
                (nc[-On[79]] = uc()) !== On[83];) nc[On[2]].push(nc[-On[79]]);
              return function(...Bc) {
                for (tV(Bc[On[12]] = On[2], Bc[-On[37]] = Bc[On[1]].length, Bc[On[53]] = -On[2], Bc[-On[54]] = On[18], Bc[-On[56]] = ""); ++Bc[On[53]] < Bc[-On[37]];) Bc[-On[54]] = Bc[On[1]][Bc[On[53]]], Bc[-On[54]] > On[97] && tV(Bc[-On[54]] -= On[55], Bc[-On[56]] += cB[On[2]](Bc[-On[54]] >>> On[57] & On[52] | On[58]), Bc[-On[54]] = On[59] | Bc[-On[54]] & On[52]), Bc[-On[56]] += cB[On[2]](Bc[-On[54]]);
                return Bc[-On[56]]
              }(nc[On[2]])
            })
          }(typeof exports === Pc(133) + Pc(134) ? this.utf8 = {} : exports)
        }

        function Oc(...Bc) {
          var nc;
          return Bc[On[12]] = On[1], Pc(135) in mV && function(...cB) {
            var Bc;
            tV(cB[On[12]] = On[1], Bc = function(...cB) {
              tV(cB[On[12]] = On[2], this.Qc = cB[On[1]], this.length = On[1], this.map = {}, this.head = On[84], this.tail = On[84])
            }, Bc.prototype.get = function(cB) {
              var Bc = this.map[cB];
              return Bc ? (this.remove(Bc), this.insert(Bc.key, Bc.val), Bc.val) : -On[2]
            }, Bc.prototype.put = function(...cB) {
              tV(cB[On[12]] = On[41], this.map[cB[On[1]]] ? (this.remove(this.map[cB[On[1]]]), this.insert(cB[On[1]], cB[On[2]])) : this.length === this.Qc ? (this.remove(this.head), this.insert(cB[On[1]], cB[On[2]])) : (this.insert(cB[On[1]], cB[On[2]]), this.length++))
            }, Bc.prototype.remove = function(cB) {
              var Bc, nc = cB.prev;
              (Bc = cB.next) && (Bc.prev = nc), nc && (nc.next = Bc), this.head === cB && (this.head = Bc), this.tail === cB && (this.tail = nc), delete this.map[cB.key]
            }, Bc.prototype.insert = function(...cB) {
              tV(cB[On[12]] = On[41], cB[On[16]] = new List(cB[On[1]], cB[On[2]]), this.tail ? (this.tail.next = cB[On[16]], cB[On[16]].prev = this.tail, this.tail = cB[On[16]]) : (this.tail = cB[On[16]], this.head = cB[On[16]]), this.map[cB[On[1]]] = cB[On[16]])
            }, console.log(Bc))
          }(), tV(nc = function(...Bc) {
            function nc(...cB) {
              return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
                for (tV(cB[On[12]] = On[2], cB[On[16]] = ':kps~wD@Nxe`izX?C=P+<vo!aBg.Y>UJ)MAOq|S5fLIG,rZVju#KWm[H"8*n(69/Q7E2t0T^3&b;_}1Fl{]4%Rchyd$', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[22]].length, cB[On[15]] = [], cB[On[8]] = On[1], cB[On[85]] = On[1], cB[On[26]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[4]]; cB[On[3]]++)
                  if (cB[On[6]] = cB[On[16]].indexOf(cB[On[22]][cB[On[3]]]), cB[On[6]] !== -On[2])
                    if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[6]];
                    else {
                      tV(cB[On[26]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[26]] << cB[On[85]], cB[On[85]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                      do {
                        tV(cB[On[15]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[85]] -= On[3])
                      } while (cB[On[85]] > On[26]);
                      cB[On[26]] = -On[2]
                    } return cB[On[26]] > -On[2] && cB[On[15]].push((cB[On[8]] | cB[On[26]] << cB[On[85]]) & On[11]), fn(cB[On[15]])
              }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
            }
            return nc(136) + "D" in mV && function(...cB) {
              function Bc(...cB) {
                for (tV(cB[On[12]] = On[2], cB[On[2]] = 'AuORqsJkjLeC_zWPY^oTM{+;"px9(>2?B,V*vmhfE0=$`[grH}D7a.d#1cw]G:|)/5F6y&nbZ43NXSiIlQ%~8t!UK<@', cB[On[86]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[86]].length, cB[On[20]] = [], cB[On[89]] = On[1], cB[On[35]] = On[1], cB[On[88]] = -On[2]), cB[On[87]] = On[1]; cB[On[87]] < cB[On[4]]; cB[On[87]]++)
                  if (cB[On[6]] = cB[On[2]].indexOf(cB[On[86]][cB[On[87]]]), cB[On[6]] !== -On[2])
                    if (cB[On[88]] < On[1]) cB[On[88]] = cB[On[6]];
                    else {
                      tV(cB[On[88]] += cB[On[6]] * On[33], cB[On[89]] |= cB[On[88]] << cB[On[35]], cB[On[35]] += (cB[On[88]] & On[36]) > On[37] ? On[38] : On[39]);
                      do {
                        tV(cB[On[20]].push(cB[On[89]] & On[11]), cB[On[89]] >>= On[3], cB[On[35]] -= On[3])
                      } while (cB[On[35]] > On[26]);
                      cB[On[88]] = -On[2]
                    } return cB[On[88]] > -On[2] && cB[On[20]].push((cB[On[89]] | cB[On[88]] << cB[On[35]]) & On[11]), fn(cB[On[20]])
              }

              function Vc(cB) {
                return typeof cV[cB] === On[17] ? cV[cB] = Bc(Bn[cB]) : cV[cB]
              }
              cB[On[12]] = On[1],
                function(cB) {
                  var Bc, Vc, Ic, rB;

                  function uc(...cB) {
                    for (tV(cB[On[12]] = On[2], cB[On[16]] = 'uGcOfihWDLRpaJ3;Y&@0e|g}8wt)+N^yXZ{$=Cbz*7(dBKF2~M1A9#.<V/?vT_%SsHxU>[I`"E:l4m!or]kjPQq6,n5', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[41]].length, cB[On[15]] = [], cB[On[66]] = On[1], cB[On[92]] = On[1], cB[On[91]] = -On[2]), cB[On[81]] = On[1]; cB[On[81]] < cB[On[4]]; cB[On[81]]++)
                      if (cB[-On[90]] = cB[On[16]].indexOf(cB[On[41]][cB[On[81]]]), cB[-On[90]] !== -On[2])
                        if (cB[On[91]] < On[1]) cB[On[91]] = cB[-On[90]];
                        else {
                          tV(cB[On[91]] += cB[-On[90]] * On[33], cB[On[66]] |= cB[On[91]] << cB[On[92]], cB[On[92]] += (cB[On[91]] & On[36]) > On[37] ? On[38] : On[39]);
                          do {
                            tV(cB[On[15]].push(cB[On[66]] & On[11]), cB[On[66]] >>= On[3], cB[On[92]] -= On[3])
                          } while (cB[On[92]] > On[26]);
                          cB[On[91]] = -On[2]
                        } return cB[On[91]] > -On[2] && cB[On[15]].push((cB[On[66]] | cB[On[91]] << cB[On[92]]) & On[11]), fn(cB[On[15]])
                  }

                  function sc(...cB) {
                    return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = uc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                  }

                  function Mc(...cB) {
                    for (tV(cB[On[12]] = On[2], cB[On[16]] = [], cB[On[22]] = On[1], cB[On[4]] = cB[On[1]].length, cB[On[15]] = On[18], cB[-On[94]] = On[18]); cB[On[22]] < cB[On[4]];) tV(cB[On[15]] = cB[On[1]].charCodeAt(cB[On[22]]++), cB[On[15]] >= On[58] && cB[On[15]] <= On[93] && cB[On[22]] < cB[On[4]] ? (cB[-On[94]] = cB[On[1]].charCodeAt(cB[On[22]]++), (cB[-On[94]] & On[95]) == On[59] ? cB[On[16]].push(((cB[On[15]] & On[52]) << On[57]) + (cB[-On[94]] & On[52]) + On[55]) : (cB[On[16]].push(cB[On[15]]), cB[On[22]]--)) : cB[On[16]].push(cB[On[15]]));
                    return cB[On[16]]
                  }

                  function Pc(...cB) {
                    for (tV(cB[On[12]] = On[2], cB[On[2]] = cB[On[1]].length, cB[-On[29]] = -On[2], cB[On[96]] = On[18], cB[On[20]] = ""); ++cB[-On[29]] < cB[On[2]];) cB[On[96]] = cB[On[1]][cB[-On[29]]], cB[On[96]] > On[97] && tV(cB[On[96]] -= On[55], cB[On[20]] += Bc(cB[On[96]] >>> On[57] & On[52] | On[58]), cB[On[96]] = On[59] | cB[On[96]] & On[52]), cB[On[20]] += Bc(cB[On[96]]);
                    return cB[On[20]]
                  }

                  function qB(...cB) {
                    if (cB[On[12]] = On[2], cB[On[1]] >= On[58] && cB[On[1]] <= On[98]) {
                      function Bc(...cB) {
                        for (tV(cB[On[12]] = On[2], cB[On[63]] = 'OGdUTP&X0wjQ![W,=R>r5B(u3mYt`iF}xbV2#y+p_e7%8f"9{DnZCv.s4|Ia:Hqk1Jlz6Lh@;SN^*]$<M?~)c/EAgoK', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[22]].length, cB[-On[99]] = [], cB[On[8]] = On[1], cB[On[24]] = On[1], cB[On[26]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[4]]; cB[On[3]]++)
                          if (cB[On[14]] = cB[On[63]].indexOf(cB[On[22]][cB[On[3]]]), cB[On[14]] !== -On[2])
                            if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[14]];
                            else {
                              tV(cB[On[26]] += cB[On[14]] * On[33], cB[On[8]] |= cB[On[26]] << cB[On[24]], cB[On[24]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                              do {
                                tV(cB[-On[99]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[24]] -= On[3])
                              } while (cB[On[24]] > On[26]);
                              cB[On[26]] = -On[2]
                            } return cB[On[26]] > -On[2] && cB[-On[99]].push((cB[On[8]] | cB[On[26]] << cB[On[24]]) & On[11]), fn(cB[-On[99]])
                      }

                      function nc(...cB) {
                        return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Bc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                      }
                      throw Error(nc(137) + nc(138) + nc(139) + cB[On[1]].toString(On[100]).toUpperCase() + (nc(140) + nc(141) + nc(On[49]) + nc(143)))
                    }
                  }

                  function Oc(cB, nc) {
                    return Bc(cB >> nc & On[23] | On[60])
                  }

                  function Tc(...cB) {
                    return cB[On[12]] = On[2], (cB[On[1]] & On[101]) == On[1] ? Bc(cB[On[1]]) : (cB[-On[102]] = "", (cB[On[1]] & On[103]) == On[1] ? cB[-On[102]] = Bc(cB[On[1]] >> On[24] & On[19] | On[75]) : (cB[On[1]] & On[104]) == On[1] ? tV(qB(cB[On[1]]), cB[-On[102]] = Bc(cB[On[1]] >> On[27] & On[62] | On[80]), cB[-On[102]] += Oc(cB[On[1]], On[24])) : (cB[On[1]] & On[105]) == On[1] && tV(cB[-On[102]] = Bc(cB[On[1]] >> On[63] & On[26] | On[82]), cB[-On[102]] += Oc(cB[On[1]], On[27]), cB[-On[102]] += Oc(cB[On[1]], On[24])), cB[-On[102]] += Bc(cB[On[1]] & On[23] | On[60]), cB[-On[102]])
                  }

                  function fc(...cB) {
                    for (tV(cB[On[12]] = On[2], cB[On[16]] = Mc(cB[On[1]]), cB[On[22]] = cB[On[16]].length, cB[On[106]] = -On[2], cB[-On[107]] = On[18], cB[On[108]] = ""); ++cB[On[106]] < cB[On[22]];) tV(cB[-On[107]] = cB[On[16]][cB[On[106]]], cB[On[108]] += Tc(cB[-On[107]]));
                    return cB[On[108]]
                  }

                  function mB(...cB) {
                    if (cB[On[12]] = On[1], rB >= Ic) {
                      function Bc(...cB) {
                        for (tV(cB[On[12]] = On[2], cB[On[2]] = 'ABpE,6eHW~)Y"/[}zRV_*cI^<y+FxSb$|gCjm:sqhG=5`wL!Oio7v{;8Z9T(?410M#@3%Nu.>2&a]rXDdJlkKfPnQtU', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[On[41]].length, cB[On[20]] = [], cB[On[8]] = On[1], cB[-On[70]] = On[1], cB[-On[82]] = -On[2]), cB[-On[109]] = On[1]; cB[-On[109]] < cB[On[44]]; cB[-On[109]]++)
                          if (cB[On[14]] = cB[On[2]].indexOf(cB[On[41]][cB[-On[109]]]), cB[On[14]] !== -On[2])
                            if (cB[-On[82]] < On[1]) cB[-On[82]] = cB[On[14]];
                            else {
                              tV(cB[-On[82]] += cB[On[14]] * On[33], cB[On[8]] |= cB[-On[82]] << cB[-On[70]], cB[-On[70]] += (cB[-On[82]] & On[36]) > On[37] ? On[38] : On[39]);
                              do {
                                tV(cB[On[20]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[-On[70]] -= On[3])
                              } while (cB[-On[70]] > On[26]);
                              cB[-On[82]] = -On[2]
                            } return cB[-On[82]] > -On[2] && cB[On[20]].push((cB[On[8]] | cB[-On[82]] << cB[-On[70]]) & On[11]), fn(cB[On[20]])
                      }

                      function uc(cB) {
                        return typeof cV[cB] === On[17] ? cV[cB] = Bc(Bn[cB]) : cV[cB]
                      }
                      throw Error(uc(144))
                    }
                    if (tV(cB[On[16]] = Vc[rB] & On[11], rB++), (cB[On[16]] & On[75]) == On[60]) return cB[On[16]] & On[23];
                    throw Error(nc(On[112]))
                  }

                  function ec(...cB) {
                    if (tV(cB[On[12]] = On[1], cB[On[22]] = On[18], cB[On[2]] = On[18], cB[On[63]] = On[18], cB[On[8]] = On[18], cB[On[20]] = On[18]), rB > Ic) throw Error(nc(On[133]));
                    if (rB == Ic) return On[83];
                    if (tV(cB[On[22]] = Vc[rB] & On[11], rB++), (cB[On[22]] & On[60]) == On[1]) return cB[On[22]];
                    if ((cB[On[22]] & On[80]) == On[75]) {
                      if (tV(cB[On[2]] = mB(), cB[On[20]] = (cB[On[22]] & On[19]) << On[24] | cB[On[2]]), cB[On[20]] >= On[60]) return cB[On[20]];
                      {
                        function Bc(...cB) {
                          for (tV(cB[On[12]] = On[2], cB[On[16]] = 'g0G"kMDC[j$fY]Kxt1<4s:*+eQO(#Jp6cE,uhviL/zZ{39!o|`F2&W?r=7Pn^.>)~}yX5b@%BHw8lTUIVSd_Aq;NRam', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[110]] = cB[On[22]].length, cB[On[20]] = [], cB[On[66]] = On[1], cB[On[24]] = On[1], cB[On[26]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[110]]; cB[On[3]]++)
                            if (cB[On[14]] = cB[On[16]].indexOf(cB[On[22]][cB[On[3]]]), cB[On[14]] !== -On[2])
                              if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[14]];
                              else {
                                tV(cB[On[26]] += cB[On[14]] * On[33], cB[On[66]] |= cB[On[26]] << cB[On[24]], cB[On[24]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                                do {
                                  tV(cB[On[20]].push(cB[On[66]] & On[11]), cB[On[66]] >>= On[3], cB[On[24]] -= On[3])
                                } while (cB[On[24]] > On[26]);
                                cB[On[26]] = -On[2]
                              } return cB[On[26]] > -On[2] && cB[On[20]].push((cB[On[66]] | cB[On[26]] << cB[On[24]]) & On[11]), fn(cB[On[20]])
                        }

                        function uc(...cB) {
                          return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Bc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
                        }
                        throw Error(uc(147))
                      }
                    }
                    if ((cB[On[22]] & On[82]) == On[80]) {
                      if (tV(cB[On[2]] = mB(), cB[On[63]] = mB(), cB[On[20]] = (cB[On[22]] & On[62]) << On[27] | cB[On[2]] << On[24] | cB[On[63]]), cB[On[20]] >= On[111]) return qB(cB[On[20]]), cB[On[20]];
                      throw Error(nc(On[112]))
                    }
                    if ((cB[On[22]] & On[113]) == On[82] && (tV(cB[On[2]] = mB(), cB[On[63]] = mB(), cB[On[8]] = mB(), cB[On[20]] = (cB[On[22]] & On[26]) << On[63] | cB[On[2]] << On[27] | cB[On[63]] << On[24] | cB[On[8]]), cB[On[20]] >= On[55] && cB[On[20]] <= On[114])) return cB[On[20]];
                    throw Error(nc(On[99]))
                  }

                  function tB(...cB) {
                    for (tV(cB[On[12]] = On[2], Vc = Mc(cB[On[1]]), Ic = Vc.length, rB = On[1], cB[-On[85]] = [], cB[On[41]] = On[18]);
                      (cB[On[41]] = ec()) !== On[83];) cB[-On[85]].push(cB[On[41]]);
                    return Pc(cB[-On[85]])
                  }
                  Bc = String.fromCharCode, tV(Vc = void 0, Ic = void 0, rB = void 0), tV(cB.version = sc(149), cB.encode = fc, cB.decode = tB)
                }(typeof exports === Vc(150) + Vc(151) ? this.utf8 = {} : exports)
            }(), qV = Bc, sc[cB].apply(this)
          }, Bc[On[115]] = Vc[cB]), Bc[On[115]] && Bc[On[115]], nc
        }
        Pc(On[106]) + "L" in mV && qB(), uc = Pn[cB] || (Pn[cB] = Oc())
      } else {
        function Tc(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[2]] = '6EmTkqlPeBMasjJAbpIS>hdVL`c*Y1G|0:/X{fOZ#CRWUK+2~g,o;Hriu(3DQ!tFnN?xw9z[5=8&^4v%<)$.@}_y]7"', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[On[22]].length, cB[-On[117]] = [], cB[-On[116]] = On[1], cB[On[24]] = On[1], cB[On[26]] = -On[2]), cB[On[3]] = On[1]; cB[On[3]] < cB[On[44]]; cB[On[3]]++)
            if (cB[On[77]] = cB[On[2]].indexOf(cB[On[22]][cB[On[3]]]), cB[On[77]] !== -On[2])
              if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[77]];
              else {
                tV(cB[On[26]] += cB[On[77]] * On[33], cB[-On[116]] |= cB[On[26]] << cB[On[24]], cB[On[24]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[-On[117]].push(cB[-On[116]] & On[11]), cB[-On[116]] >>= On[3], cB[On[24]] -= On[3])
                } while (cB[On[24]] > On[26]);
                cB[On[26]] = -On[2]
              } return cB[On[26]] > -On[2] && cB[-On[117]].push((cB[-On[116]] | cB[On[26]] << cB[On[24]]) & On[11]), fn(cB[-On[117]])
        }

        function fc(...cB) {
          return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Tc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
        }

        function mB(...cB) {
          tV(cB[On[12]] = On[1], cB[On[16]] = function(...cB) {
            for (tV(cB[On[12]] = On[2], cB[On[16]] = On[1], cB[On[27]] = {}, cB[On[44]] = On[1], cB[On[20]] = On[1], cB[-On[64]] = On[1], cB[On[35]] = cB[On[1]].length), cB[On[26]] = On[1]; cB[On[26]] < cB[On[35]]; cB[On[26]]++) {
              for (tV(cB[On[27]] = {}, cB[On[44]] = On[1], cB[On[20]] = On[2]), cB[-On[118]] = cB[On[26]] + On[2]; cB[-On[118]] < cB[On[35]]; cB[-On[118]]++) cB[On[1]][cB[On[26]]].x !== cB[On[1]][cB[-On[118]]].x || cB[On[1]][cB[On[26]]].y !== cB[On[1]][cB[-On[118]]].y ? (cB[On[1]][cB[On[26]]].y === cB[On[1]][cB[-On[118]]].y ? cB[-On[64]] = Number.MAX_SAFE_INTEGER : cB[-On[64]] = (cB[On[1]][cB[On[26]]].x - cB[On[1]][cB[-On[118]]].x) / (cB[On[1]][cB[On[26]]].y - cB[On[1]][cB[-On[118]]].y), cB[On[27]][cB[-On[64]]] || (cB[On[27]][cB[-On[64]]] = On[1]), tV(cB[On[27]][cB[-On[64]]]++, cB[On[44]] = Math.max(cB[On[44]], cB[On[27]][cB[-On[64]]]))) : cB[On[20]]++;
              tV(cB[On[44]] += cB[On[20]], cB[On[16]] = Math.max(cB[On[16]], cB[On[44]]))
            }
            return cB[On[16]]
          }, console.log(cB[On[16]]))
        }
        fc(152) + "m" in mV && mB(), uc = sc[cB]()
      }
      if (nc === rB(153) + rB(154)) {
        function ec(...cB) {
          for (tV(cB[On[12]] = On[2], cB[-On[121]] = '+NEWmGpQL4|~ZM{SK>Y7=?1y%I)au3@xsfv_ljcP^tUn:zF"&<i/*w[rJhXDC(!,Tqg}O2V5H0;b.]ekB86$A#9dRo`', cB[On[22]] = "" + (cB[On[1]] || ""), cB[-On[120]] = cB[On[22]].length, cB[On[124]] = [], cB[-On[122]] = On[1], cB[On[123]] = On[1], cB[-On[33]] = -On[2]), cB[On[119]] = On[1]; cB[On[119]] < cB[-On[120]]; cB[On[119]]++)
            if (cB[On[6]] = cB[-On[121]].indexOf(cB[On[22]][cB[On[119]]]), cB[On[6]] !== -On[2])
              if (cB[-On[33]] < On[1]) cB[-On[33]] = cB[On[6]];
              else {
                tV(cB[-On[33]] += cB[On[6]] * On[33], cB[-On[122]] |= cB[-On[33]] << cB[On[123]], cB[On[123]] += (cB[-On[33]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[124]].push(cB[-On[122]] & On[11]), cB[-On[122]] >>= On[3], cB[On[123]] -= On[3])
                } while (cB[On[123]] > On[26]);
                cB[-On[33]] = -On[2]
              } return cB[-On[33]] > -On[2] && cB[On[124]].push((cB[-On[122]] | cB[-On[33]] << cB[On[123]]) & On[11]), fn(cB[On[124]])
        }

        function tB(...cB) {
          return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = ec(Bn[cB[On[1]]]) : cV[cB[On[1]]]
        }
        return {
          [tB(On[125]) + tB(On[10])]: uc
        }
      }
      return rB(157) + "9" in mV && (module.exports = async (cB = (...cB) => {
        throw cB[On[12]] = On[1], new Error(function(...cB) {
          if (cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17]) return cV[cB[On[1]]] = function(...cB) {
            for (tV(cB[On[12]] = On[2], cB[On[2]] = 'Doz*[syU$Pe!OR`L%bA/.|xi#_K3p2wtQM,?@cBEJHhnrf"qI5YSVTv7dGX(g{9C>W]Nk);4:1uj0FmZ^l<=}&+~68a', cB[-On[125]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[-On[125]].length, cB[-On[75]] = [], cB[On[128]] = On[1], cB[-On[129]] = On[1], cB[-On[127]] = -On[2]), cB[-On[126]] = On[1]; cB[-On[126]] < cB[On[4]]; cB[-On[126]]++)
              if (cB[On[6]] = cB[On[2]].indexOf(cB[-On[125]][cB[-On[126]]]), cB[On[6]] !== -On[2])
                if (cB[-On[127]] < On[1]) cB[-On[127]] = cB[On[6]];
                else {
                  tV(cB[-On[127]] += cB[On[6]] * On[33], cB[On[128]] |= cB[-On[127]] << cB[-On[129]], cB[-On[129]] += (cB[-On[127]] & On[36]) > On[37] ? On[38] : On[39]);
                  do {
                    tV(cB[-On[75]].push(cB[On[128]] & On[11]), cB[On[128]] >>= On[3], cB[-On[129]] -= On[3])
                  } while (cB[-On[129]] > On[26]);
                  cB[-On[127]] = -On[2]
                } cB[-On[127]] > -On[2] && cB[-On[75]].push((cB[On[128]] | cB[-On[127]] << cB[-On[129]]) & On[11]);
            return fn(cB[-On[75]])
          }(Bn[cB[On[1]]]);
          return cV[cB[On[1]]]
        }(On[42]))
      }) => {
        const Bc = new Set(process.argv.slice(On[41]));
        if (!Bc.has(rB(159))) {
          if (Bc.size !== On[2]) return On[83];
          if (!Bc.has("-v")) return On[83]
        }
        return await (async () => void 0 === await cB() ? function(...cB) {
          if (cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17]) return cV[cB[On[1]]] = function(...cB) {
            for (tV(cB[On[12]] = On[2], cB[On[50]] = ')p+DrQyKN5buY,zM7le_o|n`3kga<qcs>GZBFv!Ji*Sd^@t&]Hj}m#(E%6f{hCUVx0P4T?[w.;I$2O~A/X91L8R"=W:', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[44]] = cB[On[22]].length, cB[On[20]] = [], cB[On[66]] = On[1], cB[On[106]] = On[1], cB[On[71]] = -On[2]), cB[On[81]] = On[1]; cB[On[81]] < cB[On[44]]; cB[On[81]]++)
              if (cB[On[14]] = cB[On[50]].indexOf(cB[On[22]][cB[On[81]]]), cB[On[14]] !== -On[2])
                if (cB[On[71]] < On[1]) cB[On[71]] = cB[On[14]];
                else {
                  tV(cB[On[71]] += cB[On[14]] * On[33], cB[On[66]] |= cB[On[71]] << cB[On[106]], cB[On[106]] += (cB[On[71]] & On[36]) > On[37] ? On[38] : On[39]);
                  do {
                    tV(cB[On[20]].push(cB[On[66]] & On[11]), cB[On[66]] >>= On[3], cB[On[106]] -= On[3])
                  } while (cB[On[106]] > On[26]);
                  cB[On[71]] = -On[2]
                } cB[On[71]] > -On[2] && cB[On[20]].push((cB[On[66]] | cB[On[71]] << cB[On[106]]) & On[11]);
            return fn(cB[On[20]])
          }(Bn[cB[On[1]]]);
          return cV[cB[On[1]]]
        }(162) + "l)" : "")(), !0
      }), uc
    }

    function tV() {
      tV = function() {}
    }
    tV(cV = {}, Bn = ["iV$H%*G7jSOtk^(~RXE=Ly@gGx<VF;!S=w/sL*gq#S7]Y_#ZSj>~Jk?z{=", "GGTJe5HE[&S48K|z]XE=", "=jop9*cz[", "(T!6W8/C+`;]7", "6Ec2yAKzLE6@n2USbub6d5G.4XzBL&w0!y_K9(BC2V~+*+=", "s~^c!dijbGy+2!PL}?Esqc)k?WADBys9WJqA3+n#$=/_.!P0}1", '[^DwgF(qbB:6@"Qza(lv_s1', "~j<gl8(q;z?IH<~SEuE=W+IMRS*^6^", "%T/AqB)$@n(S`_?2EsjRqG1", "xstg@8e$1MpOm(&qO([sML]Cs;RA*yeYBjdc)hE4^", '<sB^"810x=V77', "WMIsb(gu]E{Nu.|~+m@R)J^x?fa4HyxqK?4NqHp,~MQAwhFq", "eB3p|Kh&aW.5~;_45mhcOc{t?z", "V_|[Sh}#L8^YZ_rF8;/A8g$:xXYL=(D<Yv,U0QBz^", "{I7N;+05!WK^d_f~:G&=>5N8GD;XYGU4HohcU", "JVGwkkrL:XfM.]tjDC/p&c&.h`2SlJ{", "wn<U{}1xI`lE~!L4Pu1vo(|7;)V^s+nu", 'egbw(OW,m&fI8Y_<.VL2A?p&Cz~4@"n,NL=gyT4%{;cRe<U4DC@y@p666)!]7', "*(:R,I>+WW0IAK)2FBywft>@WWkM5h^b9??{", 'CEev{?HjUf.GlIOF(br6?y*u/)S(^h|(`m,KXcPzu#2_x_~0"X!', "C(pZFNvxY8>|KGk,#_#x1#:S<#wKT4T4,T.v", 'rP"g/I86?f6&l_w(8oa2PCEC]qRwSKLUob;$u+dC1zY]VKxq`RA$SB1', "kgJ{ML*Il#8QPGcj>Lp{", "w6E6oNZ!7zP~yK14,Vvp391", ":g1mY86$j#5MRnyF0v`RFyG6=X9r8(YL(XWr&", "aE>JwmQC[&7g>n*IyjTc}cW.$`rs<[6%=T7", 'iB"6q8N&{VQ<l.40u8*^nQ$7O{!Lmyi36{(~UO.,Q`Xp3*>,cJksY%1', "$I{m{r@gKX_@Q;/FdgNx*#jj]{L@PW8Zt;wUSBn4^", "Wj*$?g}LWf_YF#v<,J{Hv%)q{=o", "YbzN5A,.hm&p/hISa?B^^Lt,U)l67", "]_Yv6JQ5$#$@i<[U4uYv_Bi47MtM2]{q&jxagPR7", "^m+~9.%5^8W_]<5LqJ1v>+]C@EKOy&3LYm<wcC7M~Wi|a^TU~6bAUJ4xv", "Pm5~u.}4q8`Ge?{~(n*Z]BFq+`;X?G((", '"bYH%*2$@zb$E2%S*Xbw[s~N]m{uTW!z0S!', "PSm^rpd}kq4##t}3)6FZZ>P#=B$2rJQ9", "H;|[cTK4=pqKv[", 'Umd63JrjbD$m[nb"mLYvrha$?flCKJ%~SMfAttHE?n,Rb2x', "Isig0PS,OE;Nx_yj<WJ{$nx%1nX([%0<n?B~2J1", "aL7NpM[<pX0B<?Z0h?{vO8+uEV0+b2i,F_wRam45fEDplhr9y1", ":Zhx6*j!yzs6A4.Fh1", "5~+sqB`TeVtPF]$<Qux{C*j#l&|MD!)Zum*ZW8M&wWQAHtbF>Q7", "sS{2ZG_+#BWTQ&Q~CV$rmdV6cEB$<^E9k1", '{jdAgN8NCfWp~9D9T~T"{@87&;9~|;J~WmswmQ/!f8=Y5h{F~C7', "!b4mrpMg!8I", "?{$aK%|&Xqw+aKq22jNAT@|+j#8I.#|<h?*p0I`}0B5+*KT43J$rZ", '<T=wuhqIYEgZF#7by_mpxthIv`wrv]",uV,vd+Qz(mTW+KoFWEpy(jP!', "ETN6zrt>VWhz4hL(|R;~&s0!", "a(F^nA4}2S7YlIx9}VU~urHzv", "vzRmKp~.o)mIA%w4J_?m>JmCw{`PSn.2n(xmXh;!", "=J%pGg1", '+Tm^}+xx4&/)G]}ZOB)=Iy_<oD;N|_y"BVfkGL3}<Vm5dIxqDzgA(>1', "EyAZ1}%U5&s|AtV%V{H5H86,58[(lWoFA;/s1d:7BDn", 'YbUZZ5lBwfAA!"1u7m>Z@JGu2Vb;P_', "`GN6T?kIF&nwoKbFOD<UPQdsMMR^myI~<j_w(G($^", "0vzw&rMuv&ROJ9GuInDs:cM8I8/$^_$4znOg5]#T$pZ$%_", 'hX_6QcG&vpAzs<;"!W~Rgg/CzWr%b!', 'a{ymSpD7+`hcq;=XT{sxN++$!qzN;*O"xJ}yuGPs@kiQW!$(vylv', 'VjT6Pgwz;G=u#<7u2Jk=mP0`(&i%Y2Rz<{+"&t0#=B3=V^', 'rX0KoM!4@EaX*4V~E^>"/]CE6)?ynhK9G(d"29W&8V%KDc<6eV>$B@I&v', 'uv7UnKwzCM~;zt?"oBBy}cdCLm>7aK1%~ucx', '{TcApLU%cWeA]!D"ETmr:aq7p#z]3(!zF??RS', '`gArS9O58VmzGQ~6,VRmD9E%V{Hyb"hjdgiAV?h$@W~5j2{9?J7', "=MksMC?CYMz4G#,<*usws+@$GPfAq;IU:VVxD+]52Xa", "Dz0g{?DksV&Nf(i%iPFm3HWqan/;XJPZi;ksZIHC@EfOFJ=<#GQr2", '[sPy((/jX8ugKWV0=bn=ttwE2;B$f+i6>FgK"H|u9q^L5WfS3nuySt1', "yVSHzh.>ADrOztdZ$MSHmk1", "nL?{Nsl5(q4V&%x9Ao?{38R&yzNP%hfSZj_", "}gQ{(*~.AP<gWc+(jT1{gy2.3`L_Ly^4", "WC~yWso$?):s%K#0#GHybMxx%m9;P2[<Pv9$`nh$=;", "k_uy(jlBeScO(KmjlD}5U*8.)&", "]o=6.FPCo)7H8(T4zj}~eJ*,!q:sOhGI+BE6`LrCyMKn~!)Iix.^", "~W($Qs?CeX&=@Qh24n@yT?++MW#^Z.g,78cw%T>Szq*zD]5j=zGkNs;Czn9B7", "N~*s29J+OEb;JQQ<", '"X_A|kQEanqNx_', ">Z)pgyk6yM@MwhG6%njgjM?zvpk", "[MRxmk8&v", '`vuygg@$78t|"]_(`uhkIjhI~z==^WV~xT+55Q*7yEa)EWGSP_7U.F0jV{6L7', 'G?"ADpS$+#rPR4@"gVqKK?<64&hQst:6Ru!', "{JUrQ@}5fq&*#&uIs~cxz5q6z{4", 'bbdk(P5C0;pI(YEF<n1m*kbIHGs3y?"627', "Hgmpxs~qqq", "dVA5x}1}RVuB*4Z0", "tPhk?FWqhEMR$WiY(J4N5M+7|meA[[nI#J9yc#5zC)zvtK}3$zm~X9h7", '~_=NK%nClSl%P2;"e;{gs?7+wf^]9y~6', '=6I6@s>@J&&(T2",pBaKS%MgtMz?2;E<JV7HShh&7{TW^W~(u"_[X+1', "iL@^#Au.u`}Q]+IzjVQ~2J2+r;)XL(s<UbgK;B}#G;=#nhzX;MHJz", "G?yw4hR6)#7g;[", "tv:ZD}g6@z4SX2`SlGrA@JW+K#2K7[zj#B~^", "<JQ$_C[:i;B5w_=", "6E+pQ?rjP&j;+%{F+Xix&pKsaMVAl.P0kX?vLIB#.W=2&nB0DbVv", 'uT]w6>M6o;$U!<%4QRh[LjHL+`gPiy^9{buy>r0j/Bqp!t$zAPT"vs1U^', 'BX7vt%M8F`^@H"xzWvjv[pbIwf5)O_v(#B|[', "a_$aimx`HzP<(Ynu`{r6SrA8n;pR7*bq@X&=VFi4cEe`SnB6g~pymF9!", "s(+JS5c!", "pgxahG#jrDWVc&D<f1", 'mu.R5#A&*kRxxhwu?"Km<G3C#B=_F"&9FB[5)8%E~MX(g]v', "(sdA:h1z.Prn8^{zP_uy)", '*J,2]t%E,S"?_",qw8Dw^pD&T&`5i<}YQB%6>>"UUW8OJWx"?E:^', "|Z<NoMpuy8#GwGx", "bS~RUJ^%=Grszt=", "0T7Uvc1%(msO3!Eq4V4{<JijbPcB~!`u&7", "(XBrbQyq^q7V/hZ02C}{<rGup`!UOh@2h06pA+o+^m|Q5W7SjSm~&p4s]E", "HRQr:J=UaWhnH<uIv^FR:hH4@z!N]y3Z^mT$6", "!^OmeoUUND&Ty<`0>QGxr9>$RBb_jJF9=6ix=+$kUf7{2;_<t1", "_s!NvLk.=GC$*nB4I8/69]n!", 'zvprqJ=z=GW_ucN"k{;$ML@&6;L).;,9K(H^@ol5NS"', '7Miw1nk.wnUp?h="qm3aaj|6$`&KaYGI8Vv~S', "MR~RD?Z!", "fg9~AtX!", "PG2={8p7", "sc~:rk`", "m/_WP5lY", "X#)B$e`", "+$qX4+4J", "A/8)=_X`", "8JCRE?R7", "w>IVo", "cJ9Jz8aM", "Z#;S=", "7@BP8IhM", "{b1K2TEy", "83(i+I[y", "JBKLbV~", "wL%<!ikx>", "B{Y?zd7d*", "t34mNfHV>", '940~Xt{UAZE1%QmCi4"|Q:v', 'x1pX,7("Et_ri2{kSQN}0(PM94$/DbG', "QWg.c8a>[EJo(x&F_W*]xpU", 'bBQ/sgtO%^|hw+Z!L#N&MtG}"]HE5<X', 'hm~Z8j6(]7_wWiP.{&3F|6"ytgkV9[@', 'hm~Z8j6(]7z?Z_s"<O~FZpd(jh7', "}:QiVr4", "[mBXM+?N", "o|KF", "<dA/?;_M", "%<(bm*dk", "U%rx@({d", "cZC]z;!d", "},xm%FO", "Hm[je]_d", "mGD0gM=d", "^VCvN(.d", "^V^xm", "Rhk|*]&<06#dC4jYihb$4KA", "=f4)<_baQ#nE1u@|g(KN?b+{/w7lA6i", "=f4)<_ba/w7lA6O`ufUJ6%:", "1/_cslwe~FnyU`CvO^2[xw4S)M}V,.Y", "=f4)<_baQ#[Y)nt+H`4N)^9a_=#", "qzgMrZu", ":E2?uZ(O", "pPNj", "2(2=v9,m", "1@g(h!7e", ":66J=", "Iqw|1hQN", "BIA;?", "f7(k@Q6M", "snmqt4jUnb9Vc[EEwG%Pmm<+jW/Sh5O", "n5Qb$?g++mV", "_zPCF[Ge", "jDK070fe", "~n+OL?Y+", "bb~Z[KLU=X", "Tg5AbO1", "X.B=Q/N]3", "+FD&OY>l", "5OhB", "M?tXLz^E", "#?@D}j(K", "zl=Y;", ";0O<Q[#K", "{..2T", ";.|XdzkE", "b;Aqp", '"IMCaqG', "s`!;^K$L", "fSuC/h(L", "2e.*.", "LMY*pQ4X", "_4k>U", "WzeS^7[j", "Xx9gjj:K", "vlIvL3Hqv7", "sQy.y", 'sQy.K"oic83mc', "Wn,*S<3!>4mAj", 'sjl*_2yCNm"oj', "IjH/E=XSr4+HT", "[nG*/RkQ7^NAj", "hBPOc]Q)w)dHT", "Cz3:OMi`P"]), tV(nn = function(...cB) {
      tV(cB[On[12]] = On[1], cB[On[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], cB[-On[13]] = On[18], cB[-On[14]] = []);
      try {
        tV(cB[-On[13]] = Object, cB[-On[14]][On[28]]("".__proto__.constructor.name))
      } catch (Bn) {}
      cB: for (cB[On[15]] = On[1]; cB[On[15]] < cB[On[16]][On[12]]; cB[On[15]]++) try {
        for (cB[-On[13]] = cB[On[16]][cB[On[15]]](), cB[On[8]] = On[1]; cB[On[8]] < cB[-On[14]][On[12]]; cB[On[8]]++)
          if (typeof cB[-On[13]][cB[-On[14]][cB[On[8]]]] === On[17]) continue cB;
        return cB[-On[13]]
      } catch (Bn) {}
      return cB[-On[13]] || this
    }() || {}, Vn = nn.TextDecoder, In = nn.Uint8Array, rV = nn[On[136]], un = nn.String || String, sn = nn.Array || Array, Mn = function(...cB) {
      return tV(cB[On[12]] = On[1], cB[-On[29]] = new sn(On[60]), cB[On[30]] = un[On[25]] || un.fromCharCode, cB[-On[19]] = []),
        function(...Bc) {
          for (tV(Bc[On[12]] = On[2], Bc[On[2]] = On[18], Bc[On[22]] = On[18], Bc[-On[21]] = Bc[On[1]][On[12]], cB[-On[19]][On[12]] = On[1]), Bc[On[20]] = On[1]; Bc[On[20]] < Bc[-On[21]];) tV(Bc[On[22]] = Bc[On[1]][Bc[On[20]]++], Bc[On[22]] <= On[76] ? Bc[On[2]] = Bc[On[22]] : Bc[On[22]] <= 223 ? Bc[On[2]] = (Bc[On[22]] & On[19]) << On[24] | Bc[On[1]][Bc[On[20]]++] & On[23] : Bc[On[22]] <= On[61] ? Bc[On[2]] = (Bc[On[22]] & On[62]) << On[27] | (Bc[On[1]][Bc[On[20]]++] & On[23]) << On[24] | Bc[On[1]][Bc[On[20]]++] & On[23] : un[On[25]] ? Bc[On[2]] = (Bc[On[22]] & On[26]) << On[63] | (Bc[On[1]][Bc[On[20]]++] & On[23]) << On[27] | (Bc[On[1]][Bc[On[20]]++] & On[23]) << On[24] | Bc[On[1]][Bc[On[20]]++] & On[23] : (Bc[On[2]] = On[23], Bc[On[20]] += On[4]), cB[-On[19]][On[28]](cB[-On[29]][Bc[On[2]]] || (cB[-On[29]][Bc[On[2]]] = cB[On[30]](Bc[On[2]]))));
          return cB[-On[19]][On[45]]("")
        }
    }()), tV(Pn = Object[Tn(108)](On[84]), qV = void 0), tV(AB = (...cB) => {
      function Bc(cB) {
        return typeof cV[cB] === On[17] ? cV[cB] = function(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[2]] = 'GLW*MxrQ,;8mHAg1df&wnX_|!+R/9zi6^[Ih7pVPSD<y.Bc02kl`YO#Uo]:}%(v)4FJjuq=Ke{@"tCE$T~?Za3s5Nb>', cB[On[22]] = "" + (cB[On[1]] || ""), cB[On[4]] = cB[On[22]].length, cB[On[15]] = [], cB[On[8]] = On[1], cB[On[24]] = On[1], cB[On[40]] = -On[2]), cB[On[81]] = On[1]; cB[On[81]] < cB[On[4]]; cB[On[81]]++)
            if (cB[On[6]] = cB[On[2]].indexOf(cB[On[22]][cB[On[81]]]), cB[On[6]] !== -On[2])
              if (cB[On[40]] < On[1]) cB[On[40]] = cB[On[6]];
              else {
                tV(cB[On[40]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[40]] << cB[On[24]], cB[On[24]] += (cB[On[40]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[15]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[24]] -= On[3])
                } while (cB[On[24]] > On[26]);
                cB[On[40]] = -On[2]
              } return cB[On[40]] > -On[2] && cB[On[15]].push((cB[On[8]] | cB[On[40]] << cB[On[24]]) & On[11]), fn(cB[On[15]])
        }(Bn[cB]) : cV[cB]
      }
      cB[On[12]] = On[2];
      const nc = function(cB) {
          var Bc;
          return {
            meta: {
              ...cB.meta,
              formatVersion: YB.c,
              variation: null !== (Bc = cB.meta.variation) && void 0 !== Bc ? Bc : null
            },
            initialChunks: cB.initialChunks.map((cB => ({
              chunkPos: cB.chunkPos,
              rle: LB(cB.rle),
              sharedBlockData: ZB("sharedBlockData", cB.sharedBlockData)
            }))),
            ticks: cB.ticks.map(xn),
            editState: cB.editState
          }
        }(cB[On[1]]),
        Vc = VB[YB[On[44]]];
      cB[-On[130]] = On[18];
      try {
        cB[-On[130]] = Vc[Tn(163)](nc)
      } catch (sn) {
        function Mc(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[2]] = 'wlAx(43myB^gf[r1Z7*MQLGJ]?sTo"=Pe2_{0q5EhpUOK8a,C~nFD>.Xk9#H6;:)I|vj+Rz<duN}/&%bY`V@c!$WtiS', cB[On[132]] = "" + (cB[On[1]] || ""), cB[On[131]] = cB[On[132]].length, cB[On[15]] = [], cB[On[134]] = On[1], cB[On[35]] = On[1], cB[On[133]] = -On[2]), cB[On[121]] = On[1]; cB[On[121]] < cB[On[131]]; cB[On[121]]++)
            if (cB[On[6]] = cB[On[2]].indexOf(cB[On[132]][cB[On[121]]]), cB[On[6]] !== -On[2])
              if (cB[On[133]] < On[1]) cB[On[133]] = cB[On[6]];
              else {
                tV(cB[On[133]] += cB[On[6]] * On[33], cB[On[134]] |= cB[On[133]] << cB[On[35]], cB[On[35]] += (cB[On[133]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[15]].push(cB[On[134]] & On[11]), cB[On[134]] >>= On[3], cB[On[35]] -= On[3])
                } while (cB[On[35]] > On[26]);
                cB[On[133]] = -On[2]
              } return cB[On[133]] > -On[2] && cB[On[15]].push((cB[On[134]] | cB[On[133]] << cB[On[35]]) & On[11]), fn(cB[On[15]])
        }

        function Pc(cB) {
          return typeof cV[cB] === On[17] ? cV[cB] = Mc(Bn[cB]) : cV[cB]
        }
        throw tV(console[Tn(164)](nc), Vc[Pc(165)](nc, {
          [Pc(On[48]) + Pc(167)](...cB) {
            function Bc(...cB) {
              return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
                for (tV(cB[On[12]] = On[2], cB[On[2]] = '1EKleDgkHLX5>%=O,)h]Fpdum;(t3TRY`<v*[j/PZSCn_x$48"6}o|2^MzN?#&w!y.i9V:J0r{q@I~BabGQWA7cs+Uf', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[15]] = cB[On[41]].length, cB[-On[135]] = [], cB[On[66]] = On[1], cB[On[24]] = On[1], cB[On[26]] = -On[2]), cB[-On[120]] = On[1]; cB[-On[120]] < cB[On[15]]; cB[-On[120]]++)
                  if (cB[On[14]] = cB[On[2]].indexOf(cB[On[41]][cB[-On[120]]]), cB[On[14]] !== -On[2])
                    if (cB[On[26]] < On[1]) cB[On[26]] = cB[On[14]];
                    else {
                      tV(cB[On[26]] += cB[On[14]] * On[33], cB[On[66]] |= cB[On[26]] << cB[On[24]], cB[On[24]] += (cB[On[26]] & On[36]) > On[37] ? On[38] : On[39]);
                      do {
                        tV(cB[-On[135]].push(cB[On[66]] & On[11]), cB[On[66]] >>= On[3], cB[On[24]] -= On[3])
                      } while (cB[On[24]] > On[26]);
                      cB[On[26]] = -On[2]
                    } return cB[On[26]] > -On[2] && cB[-On[135]].push((cB[On[66]] | cB[On[26]] << cB[On[24]]) & On[11]), fn(cB[-On[135]])
              }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
            }
            return qV = [cB, {}], new en(Bc(168), Bc(169) + Bc(On[126]), Bc(171) + Bc(172))[Bc(On[50]) + Bc(174)]
          }
        })), sn
      }
      const Ic = uB(YB[On[44]], cB[-On[130]]),
        uc = rB[On[136]][Bc(175)](On[20]);
      return uc[Bc(176) + Bc(On[115]) + "E"](YB[On[44]]), rB[On[136]].concat([uc, Ic])
    }, GB = cB => {
      function Bc(...cB) {
        return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = function(...cB) {
          for (tV(cB[On[12]] = On[2], cB[-On[122]] = 'TjXGJ^PaSs>wICtzD)9c4kRq`"U.1W+O*FBg}L8|nfrEvH;:{l(eAQK[d6i,7NmybopY52ZMu$V?/x3<=]_#%@!~&0h', cB[On[137]] = "" + (cB[On[1]] || ""), cB[-On[138]] = cB[On[137]].length, cB[On[20]] = [], cB[On[8]] = On[1], cB[On[24]] = On[1], cB[On[7]] = -On[2]), cB[On[81]] = On[1]; cB[On[81]] < cB[-On[138]]; cB[On[81]]++)
            if (cB[On[42]] = cB[-On[122]].indexOf(cB[On[137]][cB[On[81]]]), cB[On[42]] !== -On[2])
              if (cB[On[7]] < On[1]) cB[On[7]] = cB[On[42]];
              else {
                tV(cB[On[7]] += cB[On[42]] * On[33], cB[On[8]] |= cB[On[7]] << cB[On[24]], cB[On[24]] += (cB[On[7]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[20]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[24]] -= On[3])
                } while (cB[On[24]] > On[26]);
                cB[On[7]] = -On[2]
              } return cB[On[7]] > -On[2] && cB[On[20]].push((cB[On[8]] | cB[On[7]] << cB[On[24]]) & On[11]), fn(cB[On[20]])
        }(Bn[cB[On[1]]]) : cV[cB[On[1]]]
      }
      const nc = rB[On[136]][Bc(On[91])](cB);
      if (nc[Bc(179) + Bc(180)] >= On[20]) {
        function Vc(...cB) {
          for (tV(cB[On[12]] = On[2], cB[On[2]] = 'AKLMBCYPDGsItOnoZpiEHUVqbRJrFc<#1W]8f=?wahlXQ07:9g^~`j3}vx,N@(k;dTe_S/!{.6"y|)u[&*>zm245+%$', cB[On[41]] = "" + (cB[On[1]] || ""), cB[-On[39]] = cB[On[41]].length, cB[On[15]] = [], cB[On[8]] = On[1], cB[On[35]] = On[1], cB[On[71]] = -On[2]), cB[On[88]] = On[1]; cB[On[88]] < cB[-On[39]]; cB[On[88]]++)
            if (cB[On[14]] = cB[On[2]].indexOf(cB[On[41]][cB[On[88]]]), cB[On[14]] !== -On[2])
              if (cB[On[71]] < On[1]) cB[On[71]] = cB[On[14]];
              else {
                tV(cB[On[71]] += cB[On[14]] * On[33], cB[On[8]] |= cB[On[71]] << cB[On[35]], cB[On[35]] += (cB[On[71]] & On[36]) > On[37] ? On[38] : On[39]);
                do {
                  tV(cB[On[15]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[35]] -= On[3])
                } while (cB[On[35]] > On[26]);
                cB[On[71]] = -On[2]
              } return cB[On[71]] > -On[2] && cB[On[15]].push((cB[On[8]] | cB[On[71]] << cB[On[35]]) & On[11]), fn(cB[On[15]])
        }

        function uc(...cB) {
          return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Vc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
        }
        const sc = nc[Bc(On[54]) + uc(On[29])](On[1]);
        if (VB[sc]) {
          function Mc(...cB) {
            for (tV(cB[On[12]] = On[2], cB[On[2]] = '5crBnJfdqXTYHeIC1bM097]!%PuyZjov.W|=iV6pLkGOSU"t`E/Qzah>A;:Rl&g8+KDF(smN_w$^@{2#3[<}*)4~?x,', cB[On[41]] = "" + (cB[On[1]] || ""), cB[On[46]] = cB[On[41]].length, cB[On[15]] = [], cB[On[8]] = On[1], cB[On[24]] = On[1], cB[On[139]] = -On[2]), cB[-On[32]] = On[1]; cB[-On[32]] < cB[On[46]]; cB[-On[32]]++)
              if (cB[On[6]] = cB[On[2]].indexOf(cB[On[41]][cB[-On[32]]]), cB[On[6]] !== -On[2])
                if (cB[On[139]] < On[1]) cB[On[139]] = cB[On[6]];
                else {
                  tV(cB[On[139]] += cB[On[6]] * On[33], cB[On[8]] |= cB[On[139]] << cB[On[24]], cB[On[24]] += (cB[On[139]] & On[36]) > On[37] ? On[38] : On[39]);
                  do {
                    tV(cB[On[15]].push(cB[On[8]] & On[11]), cB[On[8]] >>= On[3], cB[On[24]] -= On[3])
                  } while (cB[On[24]] > On[26]);
                  cB[On[139]] = -On[2]
                } return cB[On[139]] > -On[2] && cB[On[15]].push((cB[On[8]] | cB[On[139]] << cB[On[24]]) & On[11]), fn(cB[On[15]])
          }

          function Pc(...cB) {
            return cB[On[12]] = On[2], typeof cV[cB[On[1]]] === On[17] ? cV[cB[On[1]]] = Mc(Bn[cB[On[1]]]) : cV[cB[On[1]]]
          }
          const qB = nc[Pc(183)](On[20]),
            Oc = rn(sc) ? rB[On[136]][Pc(On[137])](sB(sc, qB)) : qB;
          return function(cB) {
            var Bc, nc, Vc, rB, uc;
            const sc = null === (Bc = cB.meta) || void 0 === Bc ? void 0 : Bc.formatVersion;
            if (!YB.f.includes(sc)) throw new Error(`Unsupported recording format version: ${sc}`);
            if (!Array.isArray(cB.initialChunks) || !Array.isArray(cB.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Ic of cB.ticks)
              if (!Array.isArray(Ic.structuralEvents) || !Array.isArray(Ic.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const Mc = {
              ...cB.meta
            };
            return Mc.formatVersion = YB.c, (0, Ic.E)(Mc.variation) && delete Mc.variation, {
              meta: Mc,
              initialChunks: cB.initialChunks.map((cB => {
                var Bc;
                return {
                  chunkPos: cB.chunkPos,
                  rle: gn(cB.rle),
                  sharedBlockData: null !== (Bc = QB("sharedBlockData", cB.sharedBlockData)) && void 0 !== Bc ? Bc : []
                }
              })),
              ticks: cB.ticks.map(dB),
              editState: {
                cameraKeyframes: null !== (nc = null === (Vc = cB.editState) || void 0 === Vc ? void 0 : Vc.cameraKeyframes) && void 0 !== nc ? nc : [],
                playbackMark: null !== (rB = null === (uc = cB.editState) || void 0 === uc ? void 0 : uc.playbackMark) && void 0 !== rB ? rB : null
              }
            }
          }(VB[sc][Pc(185)](Oc))
        }
      }
      throw new Error(Bc(On[129]) + Bc(187) + Bc(188) + Bc(189) + Bc(190) + Bc(191))
    })
  },
  35577: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      c: () => Vc,
      f: () => Ic,
      h: () => qB,
      i: () => Oc,
      m: () => Mc,
      p: () => Tc,
      t: () => sc,
      w: () => Pc,
      y: () => uc
    });
    const Vc = 9,
      Ic = [9],
      rB = 100,
      uc = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      sc = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Mc = ["itemName", "amount", "position", "size", "attributes"],
      Pc = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      qB = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "Mnc", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Oc = ["selectedSlotIndex", "slots"],
      Tc = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  35575: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Oc,
      f: () => mB,
      g: () => Mc,
      k: () => uc,
      l: () => sc,
      n: () => Pc
    });
    var Vc = nc(302),
      Ic = nc(35);

    function rB(cB) {
      return null === cB || void 0 === cB ? null : "string" === typeof cB ? cB : null
    }

    function uc(cB, Bc) {
      return JSON.stringify(cB) === JSON.stringify(Bc)
    }

    function sc(cB) {
      const Bc = [];
      for (const nc of Object.keys(cB)) {
        const Vc = cB[nc];
        for (const cB of Object.keys(Vc)) Bc.push({
          pE: nc,
          name: cB,
          ...Vc[cB]
        })
      }
      return Bc
    }

    function Mc(cB) {
      const Bc = {};
      for (const rB of cB) {
        var nc, Vc, Ic;
        Bc[rB.pE] || (Bc[rB.pE] = {}), Bc[rB.pE][rB.name] = {
          icon: rB.icon,
          level: rB.level,
          displayName: null !== (nc = rB.displayName) && void 0 !== nc ? nc : null,
          endTick: null !== (Vc = rB.endTick) && void 0 !== Vc ? Vc : null,
          showInNametag: null === (Ic = rB.showInNametag) || void 0 === Ic || Ic
        }
      }
      return Bc
    }

    function Pc(cB, Bc) {
      const nc = {};
      for (const Ic of Object.keys(cB)) {
        const rB = {};
        for (const nc of Object.keys(cB[Ic])) {
          const Vc = cB[Ic][nc];
          null !== Vc.endTick && Vc.endTick < Bc || (rB[nc] = {
            ...Vc,
            endTick: null === Vc.endTick ? null : Vc.endTick - Bc
          })
        }(0, Vc.dc)(rB) || (nc[Ic] = rB)
      }
      return nc
    }

    function qB(cB, Bc, nc) {
      if (null !== cB) return Math.max(0, 1e3 * (cB - Bc) / nc)
    }
    class Oc {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(cB, Bc) {
        this.clear();
        const nc = Date.now();
        for (const sc of cB.iterateEntityIds()) {
          const Mc = cB.getEffects(sc);
          if ((0, Vc.dc)(Mc)) continue;
          const Pc = Bc(sc);
          for (const cB of Object.keys(Mc)) {
            var Ic, uc;
            const Bc = Mc[cB];
            this.upsert(Pc, cB, {
              icon: Bc.icon,
              level: Bc.level,
              displayName: rB(Bc.displayName),
              showInNametag: null === (Ic = Bc.showInNametag) || void 0 === Ic || Ic,
              endTime: void 0 !== Bc.duration && null !== Bc.duration ? (null !== (uc = Bc.appliedAt) && void 0 !== uc ? uc : nc) + Bc.duration : null
            })
          }
        }
      }
      upsert(cB, Bc, nc) {
        this.tracked[cB] || (this.tracked[cB] = {}), this.tracked[cB][Bc] = nc
      }
      remove(cB, Bc) {
        const nc = this.tracked[cB];
        nc && (delete nc[Bc], (0, Vc.dc)(nc) && delete this.tracked[cB])
      }
      handleUpdate(cB) {
        var Bc;
        0 !== cB.duration ? this.upsert(cB.pE, cB.name, {
          icon: cB.icon,
          level: cB.level,
          displayName: rB(cB.displayName),
          showInNametag: null === (Bc = cB.showInNametag) || void 0 === Bc || Bc,
          endTime: void 0 !== cB.duration && null !== cB.duration ? Date.now() + cB.duration : null
        }) : this.remove(cB.pE, cB.name)
      }
      handleRemove(cB, Bc) {
        this.remove(cB, Bc)
      }
      sample(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Ic = {},
          rB = 1e3 / Bc;
        for (const uc of Object.keys(this.tracked)) {
          const Bc = this.tracked[uc],
            sc = {};
          for (const Vc of Object.keys(Bc)) {
            const Ic = Bc[Vc];
            let Mc = null;
            if (null !== Ic.endTime) {
              const Bc = Math.max(0, Ic.endTime - nc);
              if (0 === Bc) {
                this.remove(uc, Vc);
                continue
              }
              Mc = cB + Math.ceil(Bc / rB)
            }
            sc[Vc] = {
              icon: Ic.icon,
              level: Ic.level,
              displayName: Ic.displayName,
              endTick: Mc,
              showInNametag: Ic.showInNametag
            }
          }(0, Vc.dc)(sc) || (Ic[uc] = sc)
        }
        return Ic
      }
    }

    function Tc(cB, Bc, nc, Vc) {
      cB.hasEntity(Bc) ? cB.updateEffect(Bc, nc, Vc) : function(cB, Bc, nc) {
        Ic.i.Vu("EffectUpdate", {
          pE: cB,
          name: Bc,
          ...nc
        }, !0)
      }(Bc, nc, Vc)
    }

    function fc(cB, Bc, nc) {
      cB.hasEntity(Bc) ? cB.removeEffect(Bc, nc) : function(cB, Bc) {
        Ic.i.Vu("RemoveEffect", {
          pE: cB,
          name: Bc
        }, !0)
      }(Bc, nc)
    }

    function mB(cB, Bc, nc, Vc, Ic, rB, uc) {
      for (const qB of Object.keys(nc))
        for (const rB of Object.keys(nc[qB])) {
          var sc;
          null !== (sc = Bc[qB]) && void 0 !== sc && sc[rB] || (fc(cB, qB, rB), Vc && qB === Vc && String(Ic) !== String(qB) && fc(cB, Ic, rB))
        }
      for (const ec of Object.keys(Bc))
        for (const sc of Object.keys(Bc[ec])) {
          var Mc, Pc;
          const tB = Bc[ec][sc],
            Sc = qB(tB.endTick, rB, uc);
          if (0 === Sc) {
            fc(cB, ec, sc), Vc && ec === Vc && String(Ic) !== String(ec) && fc(cB, Ic, sc);
            continue
          }
          const yB = null === (Mc = nc[ec]) || void 0 === Mc ? void 0 : Mc[sc],
            zB = yB && (mB = tB, (Oc = yB).icon === mB.icon && Oc.level === mB.level && Oc.displayName === mB.displayName && Oc.endTick === mB.endTick && Oc.showInNametag === mB.showInNametag),
            pc = {
              icon: tB.icon,
              level: tB.level,
              displayName: null !== (Pc = tB.displayName) && void 0 !== Pc ? Pc : void 0,
              duration: Sc,
              showInNametag: tB.showInNametag
            };
          zB || Tc(cB, ec, sc, pc), Vc && ec === Vc && Tc(cB, Ic, sc, {
            ...pc,
            showInNametag: !1
          })
        }
      var Oc, mB
    }
  },
  35559: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Pc,
      e: () => Mc,
      h: () => Oc,
      k: () => uc,
      o: () => qB
    });
    var Vc = nc(35557),
      Ic = nc(35567);
    const rB = {
      description: "Bloxd Replay",
      accept: {
        [Vc.f]: Vc.e
      }
    };

    function uc() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function sc(cB) {
      return cB instanceof DOMException && "AbortError" === cB.name
    }
    async function Mc() {
      try {
        const [cB] = await window.showOpenFilePicker({
          multiple: !1,
          types: [rB]
        }), Bc = await cB.getFile();
        return {
          handle: cB,
          bytes: new Uint8Array(await Bc.arrayBuffer())
        }
      } catch (cB) {
        if (sc(cB)) return null;
        throw cB
      }
    }
    async function Pc(cB) {
      if (cB && await async function(cB) {
          const Bc = {
            mode: "readwrite"
          };
          return "granted" === await cB.queryPermission(Bc) || "granted" === await cB.requestPermission(Bc)
        }(cB)) return cB;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, Vc.l)(),
          types: [rB]
        })
      } catch (Bc) {
        if (sc(Bc)) return null;
        throw Bc
      }
    }
    async function qB(cB, Bc) {
      const nc = await cB.createWritable();
      await nc.write(new Blob([Bc], {
        type: Vc.f
      })), await nc.close()
    }

    function Oc(cB) {
      return (0, Vc.h)((0, Ic.e)(cB))
    }
  },
  35114: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Oc
    });
    var Vc = nc(27),
      Ic = nc(107),
      rB = nc(51),
      uc = nc(2754),
      sc = nc(2585),
      Mc = nc(5626);
    const Pc = "shaderPackListingCheckedAt",
      qB = 36e5;

    function Oc() {
      const {
        canUseShaderPacks: cB
      } = Ic.featureFlags.settings;
      var Bc, Oc;
      (0, sc.i)(cB) && !(0, sc.f)(cB) && (Bc = rB.h.getItem(Pc), Oc = Date.now(), "number" !== typeof Bc || Oc < Bc || Oc - Bc >= qB) && (0, uc.d)((() => {
        (async function() {
          if ("landingPage" !== Vc.d.get("gameState")) return;
          const cB = await (0, Mc.e)();
          if (void 0 === (null === cB || void 0 === cB ? void 0 : cB.listing)) return;
          rB.h.setItem(Pc, Date.now());
          const {
            followListingUpdates: Bc
          } = await Promise.all([nc.e(123), nc.e(120), nc.e(112)]).then((() => nc(39158)));
          await Bc(cB, cB.listing) || rB.h.removeItem(Pc)
        })().catch((cB => {
          console.error("Failed to check the shader pack listing for an update", cB)
        }))
      }))
    }
  },
  35132: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc
    });
    var Vc = nc(244),
      Ic = nc(27),
      rB = nc(35136),
      uc = nc(1464),
      sc = nc(1613);

    function Mc(cB, Bc) {
      var nc, Mc, Pc;
      if (!Ic.d.get("isKeydownEnabled") || cB.repeat) return;
      const qB = cB.code;
      "Escape" === cB.key ? (0, uc.h)(cB) : null !== (nc = sc.v.OpenSettings) && void 0 !== nc && nc.includes(qB) ? (0, uc.w)(cB, Vc.i.SETTINGS) : null !== (Mc = sc.v.OpenCharacterCustomization) && void 0 !== Mc && Mc.includes(qB) ? (0, rB.b)() || (0, uc.w)(cB, Vc.i.CUSTOMISATION, Bc()) : null !== (Pc = sc.v.ShowDebugOverlay) && void 0 !== Pc && Pc.includes(qB) && Ic.d.set({
        showDebugOverlay: !Ic.d.get("showDebugOverlay")
      })
    }
  },
  35118: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Sc
    });
    var Vc = nc(569),
      Ic = nc(1094),
      rB = nc(152),
      uc = nc(1114),
      sc = nc(1090),
      Mc = nc(35),
      Pc = nc(3517),
      qB = nc(1524),
      Oc = nc(2244),
      Tc = nc(1164),
      fc = nc(1177),
      mB = nc(1314),
      ec = nc(1062),
      tB = nc(35121);

    function Sc(cB) {
      return async (Bc, nc, sc, mB, ec) => {
        let tB;
        if ((0, Vc.E)(sc)) {
          if (ec.aborted) return yB();
          const cB = await zB(Bc, nc, mB);
          if (ec.aborted || Oc.f.matchmakingEnded(cB.isError() ? null : performance.now()), cB.isError()) {
            const Bc = cB.asError();
            return console.log("Join room did not succeed, reason:", Bc.message), Bc.forward()
          }
          tB = cB.getValue()
        } else {
          Oc.f.skipPlayWait();
          const cB = pc(sc.replace("https://", "").replace("http://", ""));
          if (cB.isError()) return cB.asError().forward();
          tB = {
            endpoint: cB.getValue(),
            gameNameWithVariation: nc,
            lobbyName: Bc instanceof Ic.f ? Bc.getLobbyName() : Bc
          }
        }
        if (ec.aborted) return yB();
        console.log(`Connecting to ${tB.gameNameWithVariation} in lobby ${tB.lobbyName} on game server ${tB.endpoint}`), Mc.i.Vu("matchmakeAndPlayStepCompleted", {
          step: rB.h.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, Pc.g)(), qB.d.markGameLoadStart(), (0, fc.t)({
          websocketUrl: tB.endpoint,
          gameNameWithVariation: tB.gameNameWithVariation,
          lobbyName: tB.lobbyName
        }), Mc.i.Vu("loadingScreenState", "loadingPage:loadingGame");
        const Sc = await cB({
          place: tB,
          userContext: mB,
          direct: !(0, Vc.E)(sc),
          rematch: async () => {
            const cB = await async function(cB, Bc, nc, Vc) {
              const Ic = await zB(cB, Bc, nc);
              if (!Ic.isError() && !Vc.aborted) {
                const {
                  endpoint: cB,
                  gameNameWithVariation: Bc,
                  lobbyName: nc
                } = Ic.getValue();
                (0, fc.t)({
                  websocketUrl: cB,
                  gameNameWithVariation: Bc,
                  lobbyName: nc
                })
              }
              return Ic
            }(Bc, nc, mB, ec);
            return cB.isError() || (tB = cB.getValue()), cB
          }
        }, ec);
        return Sc.isError() ? Sc.asError().forward() : ((0, Tc.T)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), uc.d.value({
          gameNameWithVariation: tB.gameNameWithVariation,
          lobbyName: tB.lobbyName,
          addLobbyToRecentlyPlayed: !(Bc instanceof Ic.f)
        }))
      }
    }

    function yB() {
      return uc.d.errorWithCode("Left the game while it loaded", rB.h.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        gs: !0
      })
    }
    async function zB(cB, Bc, nc) {
      return (0, Vc.E)(cB) || cB instanceof Ic.f || !(cB.length > sc.J) ? await mB.e.matchmakePlayer(nc, cB, Bc, (0, tB.c)()).then((cB => {
        if (!1 === cB.succeeded) return uc.d.errorWithCode(cB.failReason, rB.h.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: Bc,
          lobbyName: nc,
          gameNameWithVariation: Vc
        } = cB, Ic = pc(Bc);
        return Ic.isError() ? Ic.asError().forward() : uc.d.value({
          endpoint: Ic.getValue(),
          gameNameWithVariation: Vc,
          lobbyName: nc
        })
      })).catch((cB => (console.error("Bad response from the matchmaking server:", cB), uc.d.errorWithCode(cB.toString(), rB.h.REQUEST_TO_MATCHMAKING, {
        error: cB,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", cB), uc.d.errorWithCode("This lobby link's name is too long. Ask for a new link.", rB.h.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function pc(cB) {
      const Bc = ec.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(cB);
      return Bc.isError() ? uc.d.errorWithCode(Bc.asError().message, rB.h.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : uc.d.value(Bc.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, fc.m)("/")
    }
  },
  35121: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => ec,
      d: () => tB
    });
    var Vc = nc(867),
      Ic = nc(283),
      rB = nc(302),
      uc = nc(876),
      sc = nc(3638),
      Mc = nc(107),
      Pc = nc(145),
      qB = nc(1495),
      Oc = nc(125),
      Tc = nc(35124),
      fc = nc(51),
      mB = nc(946);

    function ec() {
      var cB, Bc;
      return [...null !== (cB = navigator.languages) && void 0 !== cB ? cB : [null !== (Bc = navigator.language) && void 0 !== Bc ? Bc : "none"], "En-Gb"]
    }

    function tB(cB, Bc, nc, tB, Sc) {
      const yB = (0, Vc.k)(Bc) ? (0, Vc.r)(Bc) : null,
        zB = {
          cookies: (0, qB.getAllCookiesForGameNameWithVariation)(Bc),
          isMobile: (0, Mc.isMobile)(),
          isUsingCustomGameTexturePack: null !== yB && Sc(yB),
          generalCookies: {
            joinDiscord: !!fc.h.getItem("DiscordPressed"),
            newGo: sc.b,
            ...cB.getMetricsCookies(),
            trafficCode: tB,
            compliance: Mc.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, Mc.getBrowserName)(),
            version: (0, Mc.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, Mc.getPlatformType)(),
            deviceType: (0, Oc.b)()
          },
          isLoggedIn: cB.isLoggedIn(),
          lobbyName: nc,
          languages: ec(),
          version: Ic.c,
          siteUsed: Pc.r,
          subsiteUsed: Pc.A,
          playSessionId: (0, Tc.l)(Bc),
          visitSessionId: (0, mB.e)()
        };
      return null !== yB && (0, rB.gc)(yB) ? (zB.lobbyName = (0, Vc.g)(yB, (0, Vc.o)(Bc), nc), {
        roomName: `classic_${uc.c}`,
        joinOptions: zB
      }) : {
        roomName: Bc,
        joinOptions: zB
      }
    }
  },
  35243: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      for (let nc = 0; nc < cB.length; nc++)
        if (cB[nc].identifier === Bc) return !0;
      return !1
    }
    nc.d(Bc, {
      c: () => Vc
    })
  },
  35501: (cB, Bc, nc) => {
    nc.d(Bc, {
      A: () => Ec,
      D: () => oc,
      G: () => Dc,
      H: () => Wc,
      b: () => Mc,
      f: () => bB,
      j: () => sc,
      k: () => vB,
      n: () => gB,
      o: () => aB,
      r: () => Cc,
      u: () => Qc,
      w: () => Lc,
      y: () => Nc
    });
    var Vc = nc(51);
    const Ic = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      rB = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      uc = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      sc = rB.filter((cB => "docsButton" !== cB)),
      Mc = uc.filter((cB => "aiHelperButton" !== cB)),
      Pc = "codeEditorTutorials",
      qB = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Oc = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Tc = null,
      fc = null;
    const mB = new Set,
      ec = new Set;
    let tB = null;
    const Sc = new Set,
      yB = new Set;

    function zB() {
      yB.forEach((cB => {
        cB()
      }))
    }

    function pc() {
      if (!Tc) {
        const cB = Vc.h.getItem(Pc);
        Tc = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof cB && null !== cB ? cB : {}
        }
      }
      return Tc
    }

    function hc(cB) {
      const Bc = pc();
      Bc[cB] || (Tc = {
        ...Bc,
        [cB]: !0
      }, Vc.h.setItem(Pc, Tc))
    }

    function aB(cB) {
      return "docsOverview" === cB ? rB : "aiHelperOverview" === cB ? uc : fc ? Ic[fc] : []
    }

    function lc(cB) {
      return ("worldCodeButton" !== cB || !pc().worldCodeIntroShown) && !Sc.has(cB)
    }

    function Yc(cB) {
      var Bc;
      return (null === (Bc = tB) || void 0 === Bc ? void 0 : Bc.name) === cB ? tB.stepsDone : mB
    }

    function Lc(cB, Bc) {
      if (! function(cB) {
          return tB ? tB.name === cB : "welcome" === cB
        }(cB) || !lc(Bc) || Yc(cB).has(Bc)) return !1;
      if (tB) return !0;
      const nc = qB[Bc];
      return nc ? !pc()[nc] || ec.has(Bc) : !pc()[Oc[cB]]
    }

    function gB(cB) {
      var Bc;
      return null !== (Bc = aB(cB).find((Bc => Lc(cB, Bc)))) && void 0 !== Bc ? Bc : null
    }

    function Uc(cB) {
      var Bc;
      hc(Oc[cB]), (null === (Bc = tB) || void 0 === Bc ? void 0 : Bc.name) === cB && (tB = null)
    }

    function bB(cB) {
      const Bc = (tB ? [tB.name] : ["welcome", "docsOverview"]).find((Bc => gB(Bc) === cB));
      if (!Bc) return;
      Yc(Bc).add(cB);
      const nc = qB[cB];
      nc && (hc(nc), tB || ec.add(cB)), null === gB(Bc) && Uc(Bc), zB()
    }

    function Zc(cB, Bc) {
      const nc = aB(cB),
        Vc = Yc(cB);
      for (let Ic = nc.indexOf(Bc) - 1; Ic >= 0; Ic--)
        if (Vc.has(nc[Ic]) && lc(nc[Ic])) return nc[Ic];
      return null
    }

    function Qc(cB, Bc) {
      return null !== Zc(cB, Bc)
    }

    function Cc(cB, Bc) {
      const nc = Zc(cB, Bc);
      nc && (Yc(cB).delete(nc), zB())
    }

    function vB(cB) {
      Uc(cB), "welcome" === cB && aB("welcome").forEach((cB => {
        const Bc = qB[cB];
        Bc && hc(Bc)
      })), zB()
    }

    function Dc(cB) {
      tB = {
        name: cB,
        stepsDone: new Set
      }, zB()
    }

    function Nc() {
      (tB || 0 !== mB.size || 0 !== ec.size) && (tB = null, mB.clear(), ec.clear(), zB())
    }

    function Ec(cB, Bc) {
      const nc = Bc ? cB : fc === cB ? null : fc;
      nc !== fc && (fc = nc, zB())
    }

    function oc(cB, Bc) {
      Sc.has(cB) === Bc && (Bc ? Sc.delete(cB) : Sc.add(cB), zB())
    }

    function Wc(cB) {
      return yB.add(cB), () => {
        yB.delete(cB)
      }
    }
  },
  35184: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      e: () => qB,
      f: () => sc
    });
    var Vc = nc(1927),
      Ic = nc(1934),
      rB = nc(1940),
      uc = nc(263);

    function sc(cB, Bc) {
      return (!(0, rB.c)() || 0 === cB && 0 === Bc) && (0, Ic.v)(Vc.f.Joystick, 0, cB, Bc, 0)
    }
    const Mc = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Pc(cB) {
      return {
        x: cB.left + cB.width / 2,
        y: cB.top + cB.height / 2,
        radius: Math.min(cB.width, cB.height) / 2
      }
    }
    const qB = new class {
      constructor(cB, Bc) {
        this.write = cB, this.keysHit = Bc, this.elements = new Map
      }
      set(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        Bc ? this.elements.set(cB, {
          element: Bc,
          hidden: nc
        }) : this.elements.delete(cB), this.measureOne(cB)
      }
      measure() {
        for (const cB of this.elements.keys()) this.measureOne(cB)
      }
      hitZone(cB, Bc) {
        let nc = null,
          Vc = 1;
        for (const [Ic, {
            element: rB
          }] of this.elements) {
          const uc = this.shownRect(Ic);
          if (!uc) continue;
          const sc = Pc(uc),
            Mc = Math.max(0, uc.width / 2 - sc.radius),
            qB = Math.max(0, uc.height / 2 - sc.radius),
            Oc = Math.max(0, Math.abs(cB - sc.x) - Mc),
            Tc = Math.max(0, Math.abs(Bc - sc.y) - qB),
            fc = rB.firstElementChild;
          let mB = Math.hypot(Oc, Tc) / sc.radius;
          this.keysHit && (mB = Math.min(mB, Math.max(Math.abs(cB - sc.x) / (fc.offsetWidth / 2), Math.abs(Bc - sc.y) / (fc.offsetHeight / 2)))), mB < Vc && (nc = {
            code: Ic,
            element: rB,
            key: fc,
            ...sc
          }, Vc = mB)
        }
        return nc
      }
      measureOne(cB) {
        const Bc = this.shownRect(cB);
        if (!Bc) return void this.write(Vc.f.TouchZone, cB, 0, 0, 0);
        const nc = Pc(Bc);
        this.write(Vc.f.TouchZone, cB, nc.x, nc.y, (0, Ic.i)(nc.radius))
      }
      shownRect(cB) {
        const Bc = this.elements.get(cB),
          nc = Bc && !Bc.hidden ? Bc.element.getBoundingClientRect() : null;
        return !nc || nc.width <= 0 || nc.height <= 0 ? null : nc
      }
    }(Ic.v, !uc.l)
  },
  35471: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Mc,
      e: () => sc
    });
    const Vc = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Ic = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      rB = {
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
      uc = {
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
      sc = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: Vc.files,
          dependencies: Vc.dependencies,
          bundledSource: Vc.bundledSource,
          types: Vc.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Ic.files,
          dependencies: Ic.dependencies,
          bundledSource: Ic.bundledSource,
          types: Ic.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: rB.files,
          dependencies: rB.dependencies,
          bundledSource: rB.bundledSource,
          types: rB.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: uc.files,
          dependencies: uc.dependencies,
          bundledSource: uc.bundledSource,
          types: uc.types
        }
      };

    function Mc(cB) {
      const Bc = [],
        nc = new Set,
        Vc = cB => {
          if (nc.has(cB)) return;
          const Ic = sc[cB];
          if (Ic) {
            nc.add(cB);
            for (const cB of Ic.dependencies) Vc(cB);
            Bc.push(cB)
          }
        };
      for (const Ic of cB) Vc(Ic);
      return Bc
    }
  },
  35477: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Mc,
      d: () => sc,
      h: () => uc,
      l: () => rB,
      p: () => Pc,
      r: () => qB,
      t: () => mB,
      x: () => fc,
      y: () => Tc
    });
    var Vc = nc(1108);
    const Ic = ["quickjs", "ses"];

    function rB(cB) {
      return Ic.includes(cB)
    }

    function uc(cB) {
      return cB === Vc.g || cB === Vc.k
    }

    function sc(cB, Bc) {
      return cB === Vc.g && Bc === Vc.k || cB === Vc.k && Bc === Vc.g
    }

    function Mc(cB) {
      const Bc = Vc.k in cB,
        nc = Vc.g in cB;
      return Bc && nc ? null : Bc ? Vc.k : nc ? Vc.g : null
    }

    function Pc(cB, Bc, nc) {
      const Vc = `${Bc}/`;
      return cB.filter((cB => cB.startsWith(Vc))).map((cB => [cB, `${nc}/${cB.slice(Vc.length)}`]))
    }

    function qB(cB, Bc) {
      let nc = 0;
      for (const [Vc, Ic] of Object.entries(cB)) Vc !== Bc && (nc += Ic.length);
      return nc
    }
    const Oc = "@plugins/";

    function Tc(cB) {
      return `${Oc}${cB}`
    }

    function fc(cB, Bc) {
      return `/node_modules/@plugins/${cB}/${Bc}`
    }

    function mB(cB) {
      if (!cB.startsWith(Oc)) return null;
      const Bc = cB.slice(Oc.length);
      return function(cB) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(cB)
      }(Bc) ? Bc : null
    }
  },
  35490: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => sc,
      e: () => Ic,
      h: () => uc,
      j: () => Mc,
      k: () => rB
    });
    var Vc = nc(35484);
    const Ic = 5,
      rB = "[SCHEMATIC]",
      uc = 1024e4;

    function sc(cB) {
      return cB.endsWith(".bloxdschem") && (0, Vc.p)(cB.slice(0, -11) + ".ts") && cB.length <= 64
    }

    function Mc(cB) {
      return Object.fromEntries(Object.keys(cB).map((cB => [cB, rB])))
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);