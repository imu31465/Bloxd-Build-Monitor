export const id = 83;
export const ids = [83];
export const modules = {
  36064: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Av,
      f: () => Qv
    });
    var hv = Pv(52),
      Sv = Pv(1876),
      ev = Pv(36067),
      gv = Pv.n(ev),
      pv = Pv(4292),
      dv = Pv(1858),
      Nv = Pv(1439),
      lv = Pv(73),
      Tv = Pv(86),
      Wv = Pv(312),
      wv = Pv(1035),
      av = Pv.n(wv),
      sv = Pv(22),
      Cv = Pv(1042),
      iv = Pv(1610),
      cv = Pv(1692),
      Gv = Pv(1652),
      mv = Pv(1952),
      jv = Pv(1387),
      fv = Pv(2013),
      Fv = Pv(1374),
      Yv = Pv(8474),
      nv = Pv(36074),
      Ov = Pv(36104),
      Dv = Pv(1457),
      Kv = Pv(2328),
      Vv = Pv(1175),
      Uv = Pv(36118);
    var Rv = Pv(8924);
    var xv = Pv(1082);
    const tv = Pv(36123),
      qv = ["enter", "t", "/"];
    let Iv = !1;

    function Qv() {
      return Iv || (0, cv.isTextEntry)(document.activeElement)
    }

    function Zv() {
      var vv, zv;
      (0, fv.d)();
      const Pv = null !== (vv = null === (zv = (0, jv.f)()) || void 0 === zv ? void 0 : zv.getBoundButton("keyboardChannel")) && void 0 !== vv ? vv : null;
      return Pv ? (0, xv.jsx)(mv.d, {
        className: "ChatInputChannelGlyph",
        glyph: Pv
      }) : null
    }

    function Av() {
      const {
        t: vv
      } = (0, Vv.x)(), {
        isTouchScreen: zv
      } = (0, sv.i)(["isTouchScreen"]), Pv = (0, Fv.m)(), [ev, wv] = (0, hv.useState)(!1), mv = (0, hv.useRef)(ev), jv = (0, hv.useRef)(null), {
        messages: fv,
        reportedPlayers: Qv,
        channel: Av
      } = (0, Yv.l)(), Hv = (0, hv.useRef)(0), Mv = (0, hv.useRef)(""), yv = (0, hv.useRef)(null);
      var Bv;
      Bv = yv, (0, hv.useEffect)((() => {
        if (!(0, lv.isIOS)()) return;
        const vv = Bv.current;
        let zv = null;
        const Pv = Pv => {
            const hv = Pv.changedTouches[0];
            zv = "none" === getComputedStyle(vv).pointerEvents ? {
              id: hv.identifier,
              y: hv.clientY
            } : null
          },
          hv = Pv => {
            const hv = zv,
              Sv = hv && (0, Uv.b)(Pv.changedTouches, hv.id);
            Sv && (Pv.preventDefault(), vv.scrollBy({
              top: hv.y - Sv.clientY,
              behavior: "instant"
            }), hv.y = Sv.clientY)
          };
        return vv.addEventListener("touchstart", Pv, {
          passive: !0
        }), vv.addEventListener("touchmove", hv, {
          passive: !1
        }), () => {
          vv.removeEventListener("touchstart", Pv), vv.removeEventListener("touchmove", hv)
        }
      }), [Bv]);
      const [Jv, Ev] = (0, hv.useState)(!1), [ov, bv] = (0, hv.useState)(!1), rv = (0, hv.useRef)(Jv), kv = (0, hv.useRef)(null), Xv = (0, hv.useRef)(!1), uv = (0, hv.useRef)(null), vz = (0, hv.useRef)(null), zz = (0, hv.useRef)(null), Pz = (0, hv.useRef)(gz);
      Pz.current = gz;
      const hz = (0, Kv.g)();

      function Sz() {
        mv.current = !1, wv(!1), vz.current.blur()
      }

      function ez(vv) {
        rv.current = vv, Ev(vv)
      }

      function gz() {
        const vv = vz.current.value;
        vz.current.value = "", pz(vv)
      }

      function pz(vv) {
        (0, Yv.j)(vv), Hv.current = 0, ez(!1)
      }

      function dz(vv, zv) {
        0 === Hv.current && (Mv.current = vz.current.value);
        const Pv = (0, Yv.h)(Hv.current + vv, zv);
        Hv.current = Pv.stepsBack, vz.current.value = 0 === Pv.stepsBack ? Mv.current : Pv.text, setTimeout((() => {
          vz.current && vz.current.setSelectionRange(-1, -1)
        }), 0)
      }

      function Nz() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        yv.current && (!vv && rv.current || (yv.current.scrollTop = 1e5))
      }
      return (0, pv.e)(!0, ev, "ChatComponent"), (0, hv.useEffect)((() => (Iv = ev, () => {
          Iv = !1
        })), [ev]), (0, Nv.g)("appManagerUpdated|openEverythingMenuName", (() => {
          (0, iv.p)() && wv(!1)
        })), (0, hv.useEffect)((() => {
          vz.current.addEventListener("blur", (vv => {
            if (null === vz.current) return;
            Array.from(document.querySelectorAll(":hover")).some((vv => vv.classList.contains("ChatInputChannel") || vv.classList.contains("ChatMsgSelectWrapper"))) || ((0, lv.isMobile)() && mv.current && "" !== vz.current.value && Pz.current(), wv(!1))
          }));
          const vv = vv => {
            jv.current.contains(vv.target) || (0, Gv.m)(vv.target) || wv(!1)
          };
          document.addEventListener("touchstart", vv, {
            capture: !0
          });
          const zv = vv => {
            (0, Ov.e)(vv.target) && (mv.current = !1, wv(!1))
          };
          document.addEventListener("mousedown", zv, {
            capture: !0
          });
          const Pv = () => {
              clearTimeout(kv.current), ez(!0)
            },
            hv = () => {
              clearTimeout(kv.current), kv.current = setTimeout((() => {
                ez(!1), Nz()
              }), 4e3)
            },
            ev = () => {
              document.pointerLockElement ? (wv(!1), bv(!0), Xv.current = !1, ez(!1), Nz()) : bv(!1)
            };
          yv.current.addEventListener("pointermove", (vv => {
            "touch" === vv.pointerType || Xv.current || document.pointerLockElement || (Xv.current = !0, clearTimeout(kv.current))
          })), yv.current.addEventListener("pointerleave", (vv => {
            "touch" !== vv.pointerType && (Xv.current = !1, rv.current && hv())
          })), yv.current.addEventListener("pointerdown", (vv => {
            "touch" === vv.pointerType || document.pointerLockElement || (Xv.current = !0, Pv())
          })), yv.current.addEventListener("wheel", (vv => {
            document.pointerLockElement || vv.deltaY >= 0 && Math.abs(yv.current.scrollTop) < 1 || (Pv(), Xv.current || (kv.current = setTimeout((() => {
              ez(!1)
            }), 4e3)))
          }), {
            passive: !0
          }), yv.current.addEventListener("touchstart", Pv), yv.current.addEventListener("touchend", hv), yv.current.addEventListener("touchcancel", hv), document.addEventListener("pointerlockchange", ev);
          const pv = vv => {
            if (hz.shown && (mv.current || ! function(vv) {
                if ((0, cv.isTypingInInput)()) return !0;
                const zv = document.activeElement;
                return (zv instanceof HTMLButtonElement || "button" === (null === zv || void 0 === zv ? void 0 : zv.getAttribute("role"))) && ["Enter", " "].includes(vv.key)
              }(vv)) && "codeEditor" !== sv.c.get("openInGameMenuName") && "lobbyCodeEditor" !== sv.c.get("openInGameMenuName") && !Sv.gameBridge.latest("connectedGame").replay)
              if (mv.current || !(0, iv.p)()) {
                if (mv.current) {
                  if ("ArrowUp" === vv.code || "ArrowDown" === vv.code) return dz("ArrowUp" === vv.code ? 1 : -1, !1), void vv.stopPropagation();
                  if ("Tab" === vv.code) return Yv.c.selectNextChannel(), vv.stopPropagation(), void vv.preventDefault();
                  if (vv.ctrlKey && Lv.includes(tv[vv.keyCode])) return vv.preventDefault(), void vv.stopPropagation()
                }
                if ([...qv, "esc"].includes(gv()(vv)))
                  if ("esc" !== gv()(vv)) {
                    if (!mv.current || "/" !== gv()(vv)) {
                      if ("t" === gv()(vv)) {
                        if (mv.current) return void vv.stopPropagation();
                        vv.preventDefault()
                      }
                      mv.current && "" !== vz.current.value && Pz.current(), vv.repeat || (mv.current || "/" === gv()(vv) && (vz.current.value = "/", vv.preventDefault()), wv(!mv.current))
                    }
                  } else mv.current && (wv(!1), vv.stopPropagation());
                else mv.current && vv.stopPropagation()
              } else qv.includes(gv()(vv)) && (vv.preventDefault(), vv.stopPropagation(), (0, iv.b)(vv))
          };
          document.addEventListener("keydown", pv, {
            capture: !0
          });
          const dv = yv.current;
          let Nv = !1;
          const Tv = new ResizeObserver((() => {
              Nv && (Nv = !1, Nz())
            })),
            Wv = () => {
              Nv = !0, Tv.unobserve(dv), Tv.observe(dv)
            };
          uv.current = Wv;
          const av = new MutationObserver(Wv);
          return av.observe(dv, {
            childList: !0,
            subtree: !0
          }), () => {
            document.removeEventListener("keydown", pv, {
              capture: !0
            }), document.removeEventListener("touchstart", vv, {
              capture: !0
            }), document.removeEventListener("mousedown", zv, {
              capture: !0
            }), document.removeEventListener("pointerlockchange", ev), uv.current = null, av.disconnect(), Tv.disconnect(), clearTimeout(kv.current)
          }
        }), []), (0, Gv.q)(vz, {
          open: () => {
            wv(!0)
          },
          close: () => {
            Sz()
          },
          submit: () => {
            "" !== vz.current.value && gz(), Sz()
          },
          stepHistory: () => {
            dz(1, !0)
          },
          sendLine: vv => {
            pz(vv), Sz()
          },
          selectNextChannel: () => {
            Yv.c.selectNextChannel()
          }
        }), (0, hv.useEffect)((() => {
          var vv;
          (mv.current = ev, vz.current) && (ev ? (Hv.current = 0, vz.current.focus()) : (vz.current.blur(), null === (vv = uv.current) || void 0 === vv || vv.call(uv)))
        }), [ev]),
        function(vv, zv) {
          (0, hv.useLayoutEffect)((() => {
            if (!zv) return;
            Rv.b.hold();
            const Pv = vv.current.closest(".InGameHeaderAndChat"),
              hv = window.visualViewport;
            let Sv = "";
            const ev = () => {
              const vv = `${hv.offsetTop+hv.height}px`;
              vv !== Sv && (Sv = vv, Pv.style.setProperty("--keyboard-top", vv))
            };
            return ev(), hv.addEventListener("resize", ev), hv.addEventListener("scroll", ev), () => {
              hv.removeEventListener("resize", ev), hv.removeEventListener("scroll", ev), Pv.style.removeProperty("--keyboard-top"), Rv.b.release()
            }
          }), [vv, zv])
        }(jv, ev && zv), (0, xv.jsx)(xv.Fragment, {
          children: (0, xv.jsxs)("div", {
            ref: jv,
            className: av()("Chat", {
              Chatting: ev
            }),
            "data-camera-keeper": ev ? "" : void 0,
            children: [(0, xv.jsx)("div", {
              ref: yv,
              className: av()("ChatMessages", {
                HideScrollbar: !Jv && !ev,
                NoScrolling: !(0, lv.isMobile)() && ov
              }),
              children: (0, xv.jsx)(nv.d, {
                messages: fv,
                reportedPlayers: Qv
              })
            }), zv && !ev && (0, xv.jsx)("button", {
              type: "button",
              className: "ChatIconWrapper SmallTextLight",
              "aria-label": vv("general:chat"),
              ...(0, Dv.g)((() => {
                wv(!0), zz.current.style.display = "flex", (0, lv.isIOS)() && vz.current.focus()
              }), "pointerup"),
              children: (0, xv.jsx)(Cv.b, {
                name: "comment-dots",
                className: "ChatIcon"
              })
            }), (0, xv.jsxs)("div", {
              ref: zz,
              className: "ChatInputWrapper",
              style: {
                display: "" + (ev ? "flex" : "none")
              },
              children: [Av && (0, xv.jsx)("button", {
                type: "button",
                className: "ChatInputChannel",
                style: {
                  backgroundColor: Av.elementBgColor
                },
                onClick: vv => {
                  Yv.c.selectNextChannel(), vz.current.focus()
                },
                children: (0, xv.jsx)("span", {
                  className: "SmallTextBold",
                  children: (0, xv.jsx)(dv.c, {
                    text: Av.elementContent
                  })
                })
              }), Av && Pv && (0, xv.jsx)(Zv, {}), (0, xv.jsx)("input", {
                className: "ChatInput",
                maxLength: Wv.Nc,
                ref: vz,
                spellCheck: "false",
                autoComplete: "off",
                autoCorrect: "off",
                "aria-label": vv("general:chat"),
                placeholder: Av ? `${Av.channelName} Chat${"touchOnly"===(0,Tv.b)()||Pv?"":" [Tab]"}` : ""
              })]
            })]
          })
        })
    }
    const Lv = ["W", "S", "D", "N", "T", "<tab>", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "<page-up>", "<page-down>", "B", "O", "H", "J", "F", "G", "J", "M", "<enter>", "L", "K", "E", "P", "R", "O", "U"]
  },
  36074: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => nv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(8481),
      pv = Pv(26),
      dv = Pv(2284),
      Nv = Pv(3342),
      lv = Pv(1975),
      Tv = Pv(22),
      Wv = Pv(1858),
      wv = Pv(36078),
      av = Pv(2097),
      sv = Pv(36086),
      Cv = Pv(2457),
      iv = Pv(2441),
      cv = Pv(2436),
      Gv = Pv(3364),
      mv = Pv(36090),
      jv = Pv(2904),
      fv = Pv(1923),
      Fv = Pv(1082);

    function Yv(vv) {
      for (let Pv = vv.length - 1; Pv >= 0; Pv--) {
        const hv = "string" === typeof(zv = vv[Pv]) ? zv : "str" in zv && "string" === typeof zv.str ? zv.str : "";
        if ("" !== hv.trim()) return hv
      }
      var zv;
      return ""
    }

    function nv(vv) {
      let {
        messages: zv,
        reportedPlayers: Pv
      } = vv;
      return (0, Fv.jsx)(Fv.Fragment, {
        children: zv.map((vv => (0, Fv.jsx)(Ov, {
          message: vv,
          reportedPlayers: Pv
        }, vv.clientChatMsgId)))
      })
    }
    const Ov = (0, hv.memo)((function(vv) {
      var zv;
      let {
        message: Pv,
        reportedPlayers: Sv
      } = vv;
      const nv = (0, hv.useRef)(null),
        [Ov] = (0, hv.useState)(jv.j),
        {
          author: Dv
        } = Pv,
        Kv = null === Dv || void 0 === Dv ? void 0 : Dv.id,
        Vv = null !== (zv = null === Dv || void 0 === Dv ? void 0 : Dv.name) && void 0 !== zv ? zv : void 0,
        Uv = (0, lv.c)(Vv),
        Rv = null !== Dv && void 0 !== Dv && Dv.profileEffect ? av.f[Dv.profileEffect] : void 0,
        xv = null !== Dv && !Dv.local,
        tv = null === Dv && null !== Pv.serverChatMsgId,
        qv = (0, fv.g)("hiddenPlayerNames", (vv => (0, sv.d)(xv, Vv, vv))),
        Iv = null === Pv.serverChatMsgId || null === Dv ? null : {
          text: Yv(Pv.content),
          serverChatMsgId: Pv.serverChatMsgId,
          authorId: Dv.id
        },
        Qv = tv || null !== Iv && !Sv.includes(Kv),
        Zv = (0, Nv.j)(xv && null !== Vv && void 0 !== Vv ? Vv : null),
        Av = (0, cv.h)(nv);
      (0, hv.useEffect)((() => () => {
        cv.c.closeIfOwner(nv)
      }), []);
      const Lv = () => {
          tv ? pv.j.zC("OpenReportMenu", {
            playerEId: null,
            playerName: void 0,
            al: (0, gv.c)(Pv.content),
            serverChatMsgId: Pv.serverChatMsgId
          }) : null !== Iv ? pv.j.zC("OpenReportMenu", {
            playerEId: Kv,
            playerName: Vv,
            al: Iv.text,
            serverChatMsgId: Iv.serverChatMsgId
          }) : console.warn("Reporting a chat message the server never acknowledged")
        },
        Hv = void 0 === Vv ? [] : (0, Gv.d)(Zv, Vv, Iv);
      return (0, Fv.jsxs)("div", {
        ref: nv,
        className: ev()("MessageWrapper", {
          ChatMsgSelectWrapper: Kv,
          Still: Ov
        }),
        onContextMenu: qv ? vv => {
          (0, Cv.c)(nv, vv, {
            ...(0, sv.c)(Kv, Vv),
            showLocation: !1,
            status: null,
            extraActions: Qv ? [{
              icon: "flag",
              text: "Report",
              onClick: Lv
            }] : [],
            moderationActions: (0, mv.b)(Vv),
            friendRequestSource: "chat"
          }, Tv.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: qv ? vv => {
          (0, iv.c)(vv, (() => (0, sv.c)(Kv, Vv).playerSocialPreview))
        } : void 0,
        children: [Rv && (0, Fv.jsx)(Rv, {
          className: "ChatMessageBackground",
          simple: !0
        }), (xv || tv) && !Av && (0, Fv.jsx)(wv.e, {
          className: "ChatFloatingActions",
          triggerElementRef: nv,
          options: [{
            icon: "flag",
            text: "Report",
            onPointerDown: Lv,
            show: Qv
          }, ...Hv, {
            icon: "user-plus",
            text: "socialBar:sendFriendRequest",
            onPointerDown: vv => {
              (0, dv.j)(Vv, "chat")
            },
            analyticsClick: {
              id: "social.add_friend",
              value: "chat"
            },
            show: qv && "blocked" !== Zv
          }]
        }), (0, Fv.jsx)(Wv.c, {
          text: Pv.content,
          friendBadgeFor: Uv ? Vv : void 0
        }, Pv.clientChatMsgId)]
      }, Pv.clientChatMsgId)
    }))
  },
  36132: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => wv,
      g: () => av,
      i: () => Wv,
      m: () => Tv
    });
    var hv = Pv(8997),
      Sv = Pv(36137),
      ev = Pv(36139),
      gv = Pv(8413),
      pv = Pv(1439),
      dv = Pv(52),
      Nv = Pv(62),
      lv = Pv(1082);

    function Tv() {
      var vv;
      return (0, pv.j)(Sv.d, (0, Sv.q)()), (0, lv.jsx)(lv.Fragment, {
        children: null === (vv = (0, Sv.q)()) || void 0 === vv ? void 0 : vv.content
      })
    }

    function Wv(vv) {
      var zv;
      let {
        show: Pv
      } = vv;
      (0, pv.j)(Sv.d, (0, Sv.q)());
      const Nv = null === (zv = (0, Sv.q)()) || void 0 === zv ? void 0 : zv.menu;
      return (0, dv.useEffect)((() => {
        var vv;
        Pv || (null === Nv || void 0 === Nv || null === (vv = Nv.onClose) || void 0 === vv || vv.call(Nv), (0, ev.o)())
      }), [Pv, Nv]), (0, dv.useEffect)((() => Pv ? (0, gv.f)(ev.y, ev.c) : void 0), [Pv]), (0, lv.jsx)(hv.d, {
        showing: Pv,
        globallyUniqueKey: "clientGameMenu",
        children: null === Nv || void 0 === Nv ? void 0 : Nv.content
      })
    }

    function wv(vv) {
      let {
        placement: zv = "bottom"
      } = vv;
      return (0, lv.jsx)("div", {
        id: `clientGameHud-${zv}`,
        style: {
          display: "contents"
        }
      })
    }

    function av(vv) {
      let {
        children: zv,
        placement: Pv = "bottom"
      } = vv;
      const [hv, Sv] = (0, dv.useState)(null);
      return (0, dv.useEffect)((() => {
        Sv(document.getElementById(`clientGameHud-${Pv}`))
      }), [Pv]), hv ? (0, Nv.createPortal)(zv, hv) : null
    }
  },
  36391: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv,
      e: () => lv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1442),
      pv = Pv(1082);
    const dv = 200,
      Nv = 160;

    function lv() {
      return window.matchMedia("(max-width: 900px)").matches
    }

    function Tv(vv) {
      let {
        side: zv,
        defaultSize: Pv,
        covers: Sv,
        onClose: lv,
        children: Tv
      } = vv;
      const Wv = (0, hv.useRef)(null),
        [wv, av] = (0, hv.useState)(null),
        [sv, Cv] = (0, hv.useState)(Pv);
      sv !== Pv && (Cv(Pv), av(null));
      const iv = (0, hv.useRef)(null),
        cv = "top" === zv,
        Gv = vv => cv ? vv.clientY : vv.clientX,
        mv = () => {
          iv.current = null
        };
      return (0, pv.jsxs)("div", {
        ref: Wv,
        className: ev()("ResizableSidePanel", zv && `ResizableSidePanel-${zv}`, {
          Covers: "always" === Sv,
          CoversWhenNarrow: "narrow" === Sv,
          Dragged: null !== wv
        }),
        style: {
          [cv ? "height" : "width"]: null !== wv && void 0 !== wv ? wv : Pv
        },
        children: [Tv, zv && (0, pv.jsx)("div", {
          className: "ResizableSidePanelHandle",
          role: "separator",
          "aria-orientation": cv ? "horizontal" : "vertical",
          onPointerDown: vv => {
            if (0 !== vv.button) return;
            vv.preventDefault();
            const zv = Wv.current,
              Pv = Array.from(zv.parentElement.children).reduce(((vv, Pv) => Pv !== zv && "0" !== getComputedStyle(Pv).flexGrow ? vv + (vv => cv ? vv.clientHeight : vv.clientWidth)(Pv) : vv), 0),
              hv = cv ? zv.offsetHeight : zv.offsetWidth,
              Sv = Math.min(dv, hv),
              ev = Math.max(Sv, hv + Math.max(0, Pv - Nv));
            iv.current = {
              start: Gv(vv),
              startSize: hv,
              minSize: Sv,
              maxSize: ev
            }, vv.currentTarget.setPointerCapture(vv.pointerId)
          },
          onPointerMove: vv => {
            const Pv = iv.current;
            if (!Pv) return;
            const hv = "right" === zv ? Pv.start - vv.clientX : Gv(vv) - Pv.start;
            av(Math.min(Pv.maxSize, Math.max(Pv.minSize, Pv.startSize + hv)))
          },
          onPointerUp: mv,
          onPointerCancel: mv,
          onLostPointerCapture: mv
        }), lv && (0, pv.jsx)(gv.i, {
          className: "ResizableSidePanelClose",
          onClick: lv
        })]
      })
    }
  },
  36414: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => jv,
      D: () => Yv,
      H: () => Sv,
      L: () => Fv,
      d: () => Gv,
      g: () => Cv,
      k: () => av,
      o: () => wv,
      r: () => cv,
      s: () => nv,
      w: () => mv,
      z: () => fv
    });
    var hv = Pv(52);
    const Sv = 5e3,
      ev = 500,
      gv = 3e3;
    let pv = null,
      dv = null,
      Nv = null;
    const lv = new Set;

    function Tv(vv) {
      pv = vv;
      for (const zv of lv) zv()
    }

    function Wv() {
      if (!pv || void 0 !== pv.endedAt) return;
      null !== dv && (clearTimeout(dv), dv = null), Tv({
        ...pv,
        endedAt: Date.now()
      });
      const vv = Nv;
      Nv = null, null === vv || void 0 === vv || vv()
    }

    function wv(vv, zv) {
      let {
        submit: Pv,
        reopen: hv
      } = zv;
      null !== dv && clearTimeout(dv), Nv = hv, Tv({
        ...vv,
        startedAt: Date.now(),
        errors: []
      }), dv = setTimeout(Wv, gv), Pv()
    }

    function av() {
      pv && void 0 === pv.endedAt && void 0 === pv.ranAt && (null !== dv && clearTimeout(dv), Tv({
        ...pv,
        ranAt: Date.now()
      }), dv = setTimeout(Wv, Sv))
    }
    const sv = 3;

    function Cv(vv) {
      if (!pv || void 0 === pv.ranAt || void 0 !== pv.endedAt || pv.errors.includes(vv) || pv.errors.length >= sv) return;
      const zv = 0 === pv.errors.length;
      Tv({
        ...pv,
        errors: [...pv.errors, vv]
      }), zv && (null !== dv && clearTimeout(dv), dv = setTimeout(Wv, ev))
    }

    function iv(vv) {
      var zv;
      return (null === (zv = pv) || void 0 === zv ? void 0 : zv.chatKey) === vv ? pv : null
    }

    function cv(vv) {
      const zv = iv(vv);
      return zv && void 0 !== zv.endedAt ? (Tv(null), zv) : null
    }

    function Gv(vv) {
      var zv;
      (null === (zv = pv) || void 0 === zv ? void 0 : zv.chatKey) === vv && (null !== dv && (clearTimeout(dv), dv = null), Nv = null, Tv(null))
    }
    const mv = "These changes from your last answer didn't go in. Make them again.";

    function jv(vv) {
      const zv = [...new Set(vv)].slice(0, sv);
      return `Fix this in your change: when it ran, the world showed ${1===zv.length?"this error":"these errors"}: ${zv.join(" ")}`
    }

    function fv(vv) {
      return `Your change didn't go in, because the code wouldn't run at all: ${vv.join(" ")} Send the whole change again with that fixed.`
    }

    function Fv(vv) {
      return `Fix this in your change: ${vv.join(" ")}`
    }

    function Yv(vv) {
      var zv;
      if (void 0 === vv.ranAt) return {
        title: "Couldn't test it",
        text: "Your change didn't go into your world, so it couldn't be tested. Press Submit to try it."
      };
      const Pv = Math.max(1, Math.round(((null !== (zv = vv.endedAt) && void 0 !== zv ? zv : vv.ranAt) - vv.ranAt) / 1e3)),
        hv = `Your change ran in your world for ${Pv} ${1===Pv?"second":"seconds"}`;
      return 0 === vv.errors.length ? {
        title: "Tested: no errors",
        text: `${hv} without an error.`
      } : {
        title: 1 === vv.errors.length ? "Tested: it showed an error" : `Tested: it showed ${vv.errors.length} errors`,
        text: `${hv} and showed: ${vv.errors.join(" ")}`
      }
    }

    function nv(vv) {
      const [zv, Pv] = (0, hv.useState)((() => iv(vv)));
      return (0, hv.useEffect)((() => {
        const zv = () => {
          Pv(iv(vv))
        };
        return zv(), lv.add(zv), () => {
          lv.delete(zv)
        }
      }), [vv]), zv
    }
  },
  36418: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      e: () => hv
    });
    const hv = {
      key: "worldCode",
      label: "World Code",
      codeBlock: !1
    };

    function Sv(vv, zv, Pv) {
      return {
        key: vv,
        label: `Code block at ${zv.join(", ")}`,
        codeBlock: !0,
        pos: zv,
        canChangePos: Pv
      }
    }
  },
  36406: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv,
      h: () => ev,
      j: () => gv,
      n: () => Sv
    });
    const hv = "code block",
      Sv = "World Code/";

    function ev(vv) {
      return vv.trim().toLowerCase().startsWith(Sv.toLowerCase())
    }

    function gv(vv) {
      return vv.trim().slice(Sv.length).replace(/^\.?\//, "")
    }
  },
  36376: (vv, zv, Pv) => {
    Pv.d(zv, {
      C: () => mv,
      E: () => Kv,
      I: () => Ov,
      M: () => Wv,
      N: () => xv,
      O: () => Yv,
      S: () => nv,
      W: () => Rv,
      b: () => av,
      d: () => dv,
      g: () => sv,
      i: () => Dv,
      m: () => pv,
      q: () => lv,
      u: () => wv,
      y: () => Cv
    });
    var hv = Pv(36372),
      Sv = Pv(36374);
    const ev = "bloxd-world-code-directory-sync",
      gv = "handles",
      pv = "[INVALID SCHEMATIC PLACEHOLDER]";

    function dv(vv, zv) {
      return `${vv}::${zv}`
    }
    const Nv = new Set(["node_modules", ".git"]);

    function lv() {
      return "undefined" !== typeof window && "function" === typeof window.showDirectoryPicker
    }

    function Tv() {
      return new Promise(((vv, zv) => {
        const Pv = indexedDB.open(ev, 1);
        Pv.onupgradeneeded = () => {
          const vv = Pv.result;
          vv.objectStoreNames.contains(gv) || vv.createObjectStore(gv)
        }, Pv.onsuccess = () => {
          vv(Pv.result)
        }, Pv.onerror = () => {
          var vv;
          zv(null !== (vv = Pv.error) && void 0 !== vv ? vv : new Error("Failed to open directory sync IndexedDB"))
        }
      }))
    }
    async function Wv(vv, zv) {
      const Pv = await Tv();
      try {
        await new Promise(((hv, Sv) => {
          const ev = Pv.transaction(gv, "readwrite");
          ev.objectStore(gv).put(zv, vv), ev.oncomplete = () => {
            hv()
          }, ev.onerror = () => {
            var vv;
            Sv(null !== (vv = ev.error) && void 0 !== vv ? vv : new Error("Failed to store directory handle"))
          }
        }))
      } finally {
        Pv.close()
      }
    }
    async function wv(vv) {
      const zv = await Tv();
      try {
        return await new Promise(((Pv, hv) => {
          const Sv = zv.transaction(gv, "readonly").objectStore(gv).get(vv);
          Sv.onsuccess = () => {
            var vv;
            Pv(null !== (vv = Sv.result) && void 0 !== vv ? vv : null)
          }, Sv.onerror = () => {
            var vv;
            hv(null !== (vv = Sv.error) && void 0 !== vv ? vv : new Error("Failed to load directory handle"))
          }
        }))
      } finally {
        zv.close()
      }
    }
    async function av(vv) {
      const zv = await Tv();
      try {
        await new Promise(((Pv, hv) => {
          const Sv = zv.transaction(gv, "readwrite");
          Sv.objectStore(gv).delete(vv), Sv.oncomplete = () => {
            Pv()
          }, Sv.onerror = () => {
            var vv;
            hv(null !== (vv = Sv.error) && void 0 !== vv ? vv : new Error("Failed to clear directory handle"))
          }
        }))
      } finally {
        zv.close()
      }
    }
    async function sv(vv) {
      const zv = {
        mode: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readwrite"
      };
      return "granted" === await vv.queryPermission(zv) || "granted" === await vv.requestPermission(zv)
    }
    async function Cv(vv) {
      if (!lv()) return null;
      try {
        const zv = await window.showDirectoryPicker({
          mode: "readwrite"
        });
        return await Wv(vv, zv), zv
      } catch (zv) {
        if (function(vv) {
            return vv instanceof DOMException && "AbortError" === vv.name
          }(zv)) return null;
        throw zv
      }
    }

    function iv(vv) {
      return vv.startsWith(".") || Nv.has(vv)
    }

    function cv(vv) {
      if (!vv) return !0;
      const zv = vv.split("/");
      for (const Pv of zv)
        if ("" === Pv || "." === Pv || ".." === Pv) return !1;
      return !0
    }
    async function Gv(vv, zv, Pv) {
      for await (const [ev, gv] of vv.entries()) {
        if ("directory" === gv.kind) {
          if (iv(ev)) continue;
          const vv = zv ? `${zv}/${ev}` : ev;
          if (!cv(vv)) continue;
          await Gv(gv, vv, Pv);
          continue
        }
        const vv = zv ? `${zv}/${ev}` : ev;
        if (!(0, hv.r)(vv) && !(0, Sv.b)(vv)) continue;
        const pv = await gv.getFile();
        Pv[vv] = (0, Sv.b)(vv) ? await Vv(pv) : await pv.text()
      }
    }
    async function mv(vv) {
      const zv = {};
      return await Gv(vv, "", zv), zv
    }

    function jv(vv) {
      return !(!vv || vv !== vv.trim() || vv.startsWith("/") || vv.includes("\\") || vv.includes("\0")) && cv(vv)
    }
    async function fv(vv, zv, Pv) {
      const hv = zv.split("/"),
        Sv = hv[hv.length - 1];
      let ev = vv;
      for (let gv = 0; gv < hv.length - 1; gv++) ev = await ev.getDirectoryHandle(hv[gv], {
        create: Pv
      });
      return {
        dir: ev,
        fileName: Sv
      }
    }
    async function Fv(vv, zv, Pv) {
      if (!jv(zv)) throw new Error(`Refusing to write unsafe path: ${zv}`);
      const {
        dir: hv,
        fileName: Sv
      } = await fv(vv, zv, !0), ev = await hv.getFileHandle(Sv, {
        create: !0
      }), gv = await ev.createWritable();
      await gv.write(Pv), await gv.close()
    }
    async function Yv(vv, zv, Pv) {
      const hv = await async function(vv, zv) {
        if (!jv(zv)) return null;
        try {
          const {
            dir: Pv,
            fileName: hv
          } = await fv(vv, zv, !1), Sv = await Pv.getFileHandle(hv), ev = await Sv.getFile();
          return await ev.text()
        } catch (Pv) {
          if (Pv instanceof DOMException && ("NotFoundError" === Pv.name || "NotAllowedError" === Pv.name)) return null;
          throw Pv
        }
      }(vv, zv);
      hv !== Pv && await Fv(vv, zv, Pv)
    }
    async function nv(vv, zv, Pv) {
      if (!(0, hv.r)(zv) && !(0, Sv.b)(zv)) throw new Error(`Refusing to write non-allowlisted path: ${zv}`);
      if ((0, Sv.b)(zv)) {
        if (await Uv(vv, zv) === pv) throw new Error(`Move the binary schematic ${zv} outside the linked folder before syncing its placeholder`)
      }
      await Fv(vv, zv, Pv)
    }
    async function Ov(vv, zv) {
      if (!jv(zv)) throw new Error(`Refusing to remove unsafe path: ${zv}`);
      try {
        const {
          dir: Pv,
          fileName: hv
        } = await fv(vv, zv, !1);
        await Pv.removeEntry(hv)
      } catch (Pv) {
        if (Pv instanceof DOMException && ("NotFoundError" === Pv.name || "NotAllowedError" === Pv.name)) return;
        throw Pv
      }
    }
    async function Dv(vv, zv) {
      if (!jv(zv)) return null;
      try {
        const Pv = zv.split("/");
        let hv = vv;
        for (const vv of Pv) hv = await hv.getDirectoryHandle(vv);
        return hv
      } catch (Pv) {
        if (Pv instanceof DOMException && ("NotFoundError" === Pv.name || "NotAllowedError" === Pv.name)) return null;
        throw Pv
      }
    }
    async function Kv(vv, zv) {
      if ((0, hv.r)(zv) || (0, Sv.b)(zv)) {
        if ((0, Sv.b)(zv)) {
          if (await Uv(vv, zv) === pv) throw new Error(`Refusing to remove a binary schematic: ${zv}`)
        }
        await Ov(vv, zv)
      }
    }
    async function Vv(vv) {
      if (vv.size > 64) return pv;
      const zv = await vv.text();
      return Array.from(zv).some((vv => {
        const zv = vv.charCodeAt(0);
        return zv < 9 || zv > 13 && zv < 32 || 65533 === zv
      })) ? pv : zv
    }
    async function Uv(vv, zv) {
      try {
        const {
          dir: Pv,
          fileName: hv
        } = await fv(vv, zv, !1);
        return await Vv(await (await Pv.getFileHandle(hv)).getFile())
      } catch (Pv) {
        if (Pv instanceof DOMException && "NotFoundError" === Pv.name) return null;
        throw Pv
      }
    }
    async function Rv(vv, zv) {
      const Pv = await mv(vv);
      for (const hv of Object.keys(Pv)) hv in zv || (0, Sv.b)(hv) || await Kv(vv, hv);
      for (const [ev, gv] of Object.entries(zv))((0, hv.r)(ev) || (0, Sv.b)(ev)) && await nv(vv, ev, gv)
    }

    function xv(vv, zv) {
      var Pv, hv;
      let Sv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      const ev = null !== (Pv = Sv.debounceMs) && void 0 !== Pv ? Pv : 300,
        gv = null !== (hv = Sv.pollMs) && void 0 !== hv ? hv : 1e3;
      let pv = !1,
        dv = null,
        Nv = null,
        lv = null;
      const Tv = () => {
          pv || (dv && clearTimeout(dv), dv = setTimeout((() => {
            dv = null, Wv()
          }), ev))
        },
        Wv = async () => {
          if (!pv) try {
            if (!await sv(vv, "readwrite")) return;
            const Pv = await mv(vv);
            pv || zv(Pv)
          } catch (Pv) {
            console.error("[WorldCodeDirectorySync] Failed to read watched directory", Pv)
          }
        };
      Wv();
      const wv = window.FileSystemObserver;
      if (wv) try {
        lv = new wv((() => {
          Tv()
        })), lv.observe(vv, {
          recursive: !0
        })
      } catch (av) {
        console.warn("[WorldCodeDirectorySync] FileSystemObserver unavailable, falling back to polling", av), lv = null
      }
      return lv || (Nv = setInterval((() => {
        Tv()
      }), gv)), () => {
        pv = !0, dv && clearTimeout(dv), Nv && clearInterval(Nv), lv && lv.disconnect()
      }
    }
  },
  4574: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Cv,
      f: () => iv
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(1175),
      pv = Pv(4582),
      dv = Pv(1858),
      Nv = Pv(2324),
      lv = Pv(4589),
      Tv = Pv(1082);
    const Wv = new WeakMap;
    let wv = 0;

    function av(vv) {
      let zv = Wv.get(vv);
      return void 0 === zv && (zv = wv++, Wv.set(vv, zv)), zv
    }

    function sv(vv) {
      let {
        piece: zv
      } = vv;
      return "space" === zv.kind ? (0, Tv.jsx)(Tv.Fragment, {
        children: zv.text
      }) : (0, Tv.jsx)("span", {
        className: "DialogueWord",
        style: {
          "--word-delay": `${zv.delayMs}ms`
        },
        children: (0, Tv.jsx)(pv.c, {
          text: "icon" === zv.kind ? `[[${zv.icon}]]` : zv.text
        })
      })
    }

    function Cv(vv) {
      let {
        display: zv
      } = vv;
      const {
        selectedLanguage: Pv
      } = (0, gv.x)(), hv = (0, ev.useMemo)((() => (0, lv.d)((0, lv.e)(zv).plan.pieces)), [zv, Pv.code]);
      return (0, Tv.jsxs)("div", {
        className: Sv()("Dialogue", {
          DialogueAnimateIn: !1 !== zv.animateIn
        }),
        children: [zv.speakerName && (0, Tv.jsx)(dv.c, {
          text: zv.speakerName,
          className: "DialogueSpeaker"
        }), (0, Tv.jsx)("p", {
          className: "DialogueLine",
          children: hv.map(((vv, zv) => 1 === vv.length && "space" === vv[0].kind ? vv[0].text : (0, Tv.jsx)("span", {
            className: "DialogueGlue",
            children: vv.map(((vv, zv) => (0, Tv.jsx)(sv, {
              piece: vv
            }, zv)))
          }, zv)))
        })]
      })
    }
    const iv = (0, ev.memo)((function() {
      const vv = (0, Nv.i)("dialogue");
      return (0, Tv.jsx)("div", {
        className: "DialogueAnchor",
        "data-camera-keeper": "",
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        children: vv && (0, Tv.jsx)(Cv, {
          display: vv
        }, av(vv))
      })
    }))
  },
  36190: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => sv,
      f: () => Cv
    });
    var hv = Pv(52),
      Sv = Pv(1439),
      ev = Pv(1923),
      gv = Pv(36153),
      pv = Pv(626),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(1082);
    const Tv = [Wv()];

    function Wv() {
      return {
        source: null,
        direction: null,
        hU: null,
        timeout: void 0,
        writtenAngle: null
      }
    }

    function wv(vv) {
      return Tv.find((zv => null !== zv.source && zv.source === vv))
    }

    function av(vv) {
      clearTimeout(vv.timeout), vv.source = null, vv.direction = null, vv.writtenAngle = null, vv.hU && (vv.hU.style.rotate = "")
    }
    const sv = (0, hv.memo)((function() {
      const [, vv] = (0, hv.useReducer)((vv => vv + 1), 0);
      return (0, Sv.g)("damagedByOtherPlayer", (zv => {
        let {
          Je: Pv,
          direction: hv
        } = zv;
        const Sv = Pv || "nonDirectional",
          ev = function(vv) {
            var zv;
            const Pv = null !== (zv = wv(vv)) && void 0 !== zv ? zv : Tv.find((vv => null === vv.source));
            if (Pv) return Pv;
            const hv = {
              source: null,
              direction: null,
              hU: null,
              timeout: void 0,
              writtenAngle: null
            };
            return Tv.push(hv), hv
          }(Sv);
        clearTimeout(ev.timeout), ev.source = Sv, ev.direction = hv, ev.timeout = setTimeout((() => {
          av(ev), vv()
        }), 800), vv()
      })), (0, ev.d)("kill", (zv => {
        let {
          killer: Pv,
          victim: hv
        } = zv;
        const Sv = Pv.local && wv(hv.id);
        Sv && (av(Sv), vv())
      })), (0, hv.useEffect)((() => {
        const vv = (0, gv.c)("turnDamageIndicators", Cv);
        return () => {
          vv(), Tv.forEach(av)
        }
      }), []), (0, lv.jsx)("div", {
        className: "DirectionalDamage",
        children: Tv.map(((vv, zv) => (0, lv.jsx)("div", {
          ref: zv => {
            vv.hU = zv
          },
          className: Nv()("DamageIndicator", {
            DamageIndicatorFullCircle: (0, pv.N)(vv.direction),
            DamageIndicatorIdle: null === vv.source
          })
        }, zv)))
      })
    }));

    function Cv(vv) {
      for (const zv of Tv) {
        if (null === zv.source || (0, pv.N)(zv.direction)) continue;
        const Pv = zv.direction - vv;
        Pv !== zv.writtenAngle && (zv.writtenAngle = Pv, zv.hU.style.rotate = `${Pv}rad`)
      }
    }
  },
  36078: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Cv
    });
    var hv = Pv(52),
      Sv = Pv(62),
      ev = Pv(1175),
      gv = Pv(1035),
      pv = Pv.n(gv),
      dv = Pv(1692),
      Nv = Pv(1042),
      lv = Pv(1265),
      Tv = Pv(1465),
      Wv = Pv(1630),
      wv = Pv(1457),
      av = Pv(1082);
    const sv = 14;

    function Cv(vv) {
      let {
        className: zv,
        triggerElementRef: Pv,
        options: gv
      } = vv;
      const {
        t: Cv
      } = (0, ev.x)(), [iv, cv] = (0, hv.useState)(!1), [Gv, mv] = (0, hv.useState)({
        x: 0,
        y: 0
      }), jv = (0, hv.useRef)(null);
      (0, hv.useEffect)((() => {
        let vv = null;
        const zv = zv => {
            vv = {
              x: zv.clientX,
              y: zv.clientY
            }
          },
          hv = zv => {
            if (null === vv || !(0, wv.c)(vv, zv)) return;
            vv = null;
            const Pv = sv * (0, dv.getRemInPx)();
            mv({
              x: Math.min(zv.clientX, window.innerWidth - Pv - 5),
              y: zv.clientY
            }), cv((vv => !vv))
          },
          Sv = vv => {
            var zv;
            null !== (zv = jv.current) && void 0 !== zv && zv.contains(vv.relatedTarget) || cv(!1)
          },
          ev = Pv.current;
        return ev.addEventListener("pointerdown", zv), ev.addEventListener("pointerup", hv), ev.addEventListener("mouseleave", Sv), () => {
          ev.removeEventListener("pointerdown", zv), ev.removeEventListener("pointerup", hv), ev.removeEventListener("mouseleave", Sv)
        }
      }), [Pv]), (0, hv.useEffect)((() => {
        if (iv) return (0, Wv.b)("pointerdown", (vv => {
          !jv.current || jv.current.contains(vv.target) || Pv.current.contains(vv.target) || cv(!1)
        }))
      }), [iv, Pv]), (0, hv.useLayoutEffect)((() => {
        if (!iv || !jv.current) return;
        const vv = jv.current.getBoundingClientRect().height,
          zv = Math.max(5, window.innerHeight - vv - 5);
        Gv.y > zv && mv({
          x: Gv.x,
          y: zv
        })
      }), [iv, Gv]), (0, lv.q)("popup", jv, (() => {
        cv(!1)
      }), iv);
      const fv = gv.filter((vv => !1 !== vv.show));
      return iv && 0 !== fv.length ? (0, Sv.createPortal)((0, av.jsx)("div", {
        ref: jv,
        className: pv()("FloatingActions", {
          [zv]: zv
        }),
        style: {
          width: `${sv}rem`,
          top: Gv.y,
          left: Gv.x
        },
        children: fv.map((vv => {
          let {
            icon: zv,
            text: Pv,
            onPointerDown: hv,
            analyticsClick: Sv
          } = vv;
          return (0, av.jsxs)("div", {
            className: "FloatingAction",
            "data-pad-focusable": !0,
            onPointerUp: vv => {
              void 0 !== Sv && (0, Tv.reportAnalyticsClick)(Sv), hv(vv), cv(!1), vv.stopPropagation()
            },
            children: [(0, av.jsx)(Nv.b, {
              name: zv
            }), (0, av.jsx)("div", {
              children: Cv(Pv)
            })]
          }, Pv)
        }))
      }), function() {
        var vv;
        return null !== (vv = document.querySelector(".WholeAppWrapperInner")) && void 0 !== vv ? vv : document.body
      }()) : null
    }
  },
  36202: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Pg
    });
    var hv = Pv(36132),
      Sv = Pv(52),
      ev = Pv(2008),
      gv = Pv(4285),
      pv = Pv(4287),
      dv = Pv(2324),
      Nv = Pv(1876),
      lv = Pv(1082);

    function Tv(vv) {
      let {
        className: zv,
        style: Pv,
        vw: hv,
        maxPx: Sv,
        children: ev
      } = vv;
      console.assert("number" === typeof hv && "number" === typeof Sv, "vw and maxPx passed to Text must be numbers");
      const gv = window.innerWidth * (hv / 100) > Sv ? `${Sv}px` : `${hv}vw`;
      return (0, lv.jsx)("div", {
        className: zv,
        style: {
          ...Pv,
          fontSize: gv
        },
        children: ev
      })
    }
    var Wv = Pv(36206),
      wv = Pv(1442),
      av = Pv(26),
      sv = Pv(1903),
      Cv = Pv(1042);

    function iv(vv) {
      let {
        tasks: zv,
        lastDisplayedTasks: Pv
      } = vv;
      return (0, lv.jsx)(lv.Fragment, {
        children: Object.keys(zv).map((vv => (0, lv.jsx)(cv, {
          task: zv[vv],
          lastDisplayedAs: Pv[vv]
        }, zv[vv].text)))
      })
    }

    function cv(vv) {
      let {
        task: zv,
        lastDisplayedAs: Pv
      } = vv;
      const [hv, ev] = (0, Sv.useState)(null !== Pv && void 0 !== Pv && Pv.progress ? Pv.progress / zv.goal : 0), [gv, pv] = (0, Sv.useState)(!1), [dv, Nv] = (0, Sv.useState)(zv.claimed || !1);
      return (0, Sv.useEffect)((() => {
        ev(zv.progress / zv.goal)
      }), [zv.progress, zv.goal]), dv ? null : (0, lv.jsxs)("div", {
        className: "Task",
        children: [(0, lv.jsx)("div", {
          className: "TaskDescDiv",
          children: (0, lv.jsx)(Tv, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: zv.text
          })
        }), zv.progress < zv.goal ? (0, lv.jsxs)("div", {
          className: "TaskProgress",
          children: [0 !== hv ? (0, lv.jsx)("div", {
            className: "TaskProgressForeground",
            style: {
              width: 100 * hv + "%"
            }
          }) : null, (0, lv.jsx)("div", {
            className: "TaskProgressText",
            children: `${zv.progress}/${zv.goal}`
          })]
        }) : (0, lv.jsx)(wv.j, {
          className: "ClaimRewardButton",
          onClick: () => {
            pv(!0)
          },
          children: (0, lv.jsx)(Tv, {
            className: "",
            style: {},
            vw: 1.5,
            maxPx: 30,
            children: "Claim Reward"
          })
        }), gv ? (0, lv.jsx)(Gv, {
          task: zv,
          close: () => {
            zv.claimed = !0, Nv(!0), pv(!1)
          }
        }) : null]
      })
    }

    function Gv(vv) {
      let {
        task: zv,
        close: Pv
      } = vv;
      const [hv, ev] = (0, Sv.useState)({}), [gv, pv] = (0, Sv.useState)("closed");
      (0, Sv.useEffect)((() => {
        let vv;
        return "animStart" === gv && (vv = setTimeout((() => {
          pv("animEnd")
        }), 700)), () => {
          clearTimeout(vv)
        }
      }), [gv]), (0, Wv.d)((() => {
        Nv.gameBridge.send("completeTask", zv.text)
      }));
      const Tv = (0, dv.i)("currencyAmounts");
      return (0, lv.jsxs)("div", {
        className: "RewardBackground",
        onClick: () => {
          if ("animEnd" === gv)
            if (0 === zv.rewards.length) Pv(), Nv.gameBridge.send("completeTask", zv.text);
            else {
              const vv = {
                ...sv.c.get("currencyAmounts")
              };
              for (const zv in hv) vv[zv] = {
                ...vv[zv],
                amount: vv[zv].amount + hv[zv]
              };
              sv.c.apply({
                currencyAmounts: vv
              }), pv("closed")
            }
          else "closed" === gv && (ev(zv.rewards.pop()), pv("animStart"))
        },
        children: [(0, lv.jsx)("img", {
          className: "Chest",
          alt: "closed" !== gv ? "open chest" : "closed chest",
          src: `/textures/miscImages/Treasure Chest ${"closed"!==gv?"open":"closed"}.png`
        }), (0, lv.jsx)("div", {
          className: "Rewards",
          children: "closed" !== gv ? Object.keys(hv).map((vv => {
            const zv = null === Tv || void 0 === Tv ? void 0 : Tv[vv];
            return !zv || zv.hidden ? null : (0, lv.jsxs)("div", {
              className: "Reward",
              children: [(0, lv.jsx)(Cv.b, {
                name: zv.icon,
                className: "3x UiCurrencyIcon RewardIcon",
                style: {
                  color: zv.iconColour
                }
              }), (0, lv.jsx)("div", {
                className: "RewardAmountText",
                children: "animStart" === gv ? 0 : hv[vv]
              })]
            }, vv)
          })) : null
        }), "animStart" === gv ? (0, lv.jsx)(mv, {}) : null, (0, lv.jsx)("div", {
          className: "ChestsLeft",
          children: zv.rewards.length
        })]
      })
    }

    function mv() {
      const [vv, zv] = (0, Sv.useState)(0);
      (0, Sv.useEffect)((() => {
        zv(1)
      }), []);
      return (0, lv.jsx)(lv.Fragment, {
        children: Array.from({
          length: 40
        }).map(((zv, Pv) => (0, lv.jsx)(Cv.b, {
          name: "star",
          className: "3x UiCurrencyIcon OpenStar",
          style: {
            bottom: 50 * vv * Math.cos(Pv / 40 * (2 * Math.PI)) + 50 + "vh",
            left: 50 * vv * Math.sin(Pv / 40 * (2 * Math.PI)) + "vh",
            opacity: 0 === vv ? 1 : 0
          }
        }, Pv)))
      })
    }
    av.j.subscribe("requiredLibrariesLoaded", (() => {
      setTimeout((() => {
        const vv = new Image,
          zv = new Image;
        vv.src = "/textures/miscImages/Treasure Chest open.png", zv.src = "/textures/miscImages/Treasure Chest closed.png"
      }), 1e4)
    }));
    var jv = Pv(2917),
      fv = Pv(1108),
      Fv = Pv(1858),
      Yv = Pv(1439),
      nv = Pv(312),
      Ov = Pv(1923),
      Dv = Pv(1327);

    function Kv(vv) {
      var zv, Pv;
      let {
        byId: hv,
        localId: Sv
      } = vv;
      return null === Sv ? null : null !== (zv = null === (Pv = hv[Sv]) || void 0 === Pv ? void 0 : Pv.name) && void 0 !== zv ? zv : null
    }

    function Vv(vv) {
      let {
        lbStats: zv,
        storedState: Pv = {}
      } = vv;
      const {
        userContext: hv
      } = (0, fv.d)(), ev = (0, Ov.g)("players", Kv), [gv, pv] = (0, Sv.useState)(Pv.selectedCat || (null === zv || void 0 === zv ? void 0 : zv[0]) || null), [dv, Tv] = (0, Sv.useState)(Pv.selectedTimeframe || "Today"), [Wv, wv] = (0, Sv.useState)(null);
      (0, Sv.useEffect)((() => {
        null === gv && null !== zv && zv.length > 0 && pv(zv[0])
      }), [zv, gv]);
      const [av, sv] = (0, Sv.useState)(Pv.seeingTop || !1), [Cv, iv] = (0, Sv.useState)(!1), cv = (0, Sv.useCallback)((() => {
        null !== gv && null !== dv && (Nv.gameBridge.send("requestLeaderboard", {
          category: gv.value,
          timeframe: dv,
          seeTop: av
        }), mv(!0), xv && tv(null))
      }), [gv, dv, Pv, av]);
      (0, Sv.useEffect)((() => {
        cv(), Pv.selectedCat = gv, Pv.selectedTimeframe = dv, Pv.seeingTop = av
      }), [gv, dv, Pv, av, cv]), (0, Sv.useEffect)((() => {
        if ((null === Wv || void 0 === Wv ? void 0 : Wv.length) > 0)
          if (av) av && iv(null === Vv(Wv));
          else {
            for (const vv of Wv)
              if (1 === vv.place) return void iv(!1);
            iv(!0)
          }
      }), [Wv, av]), (0, Yv.g)("leaderboardResponse", (vv => {
        let {
          category: Pv,
          timeframe: hv,
          data: Sv
        } = vv;
        for (let ev = 0; ev < zv; ev++)
          if (zv[ev].value === Pv) {
            pv(zv[ev]);
            break
          } Tv(hv), wv(Sv), mv(!1)
      }));
      const [Gv, mv] = (0, Sv.useState)(!0);

      function Vv(vv) {
        const zv = Kv(Nv.gameBridge.latest("players"));
        for (let Pv = 0; Pv < vv.length; Pv++)
          if (vv[Pv].name === zv) return vv[Pv].place;
        return null
      }
      const [Uv, Rv] = (0, Sv.useState)(!1), [xv, tv] = (0, Sv.useState)(null);
      (0, Sv.useEffect)((() => {
        if (Wv && !Uv) {
          const vv = Vv(Wv);
          vv < (Pv.lastSeenPlayerPlace || 0) && tv(Pv.lastSeenPlayerPlace - vv), Rv(!0)
        }
      }), [Wv, Pv, Uv]), (0, Sv.useEffect)((() => () => {
        Wv && (Pv.lastSeenPlayerPlace = Vv(Wv))
      }), [Wv, Pv]);
      const qv = (0, Sv.useRef)(null),
        [Iv, Qv] = (0, Sv.useState)(void 0);
      return (0, Sv.useEffect)((() => {
        var vv, zv;
        Iv !== (null === (vv = qv.current) || void 0 === vv ? void 0 : vv.offsetHeight) && Qv(null === (zv = qv.current) || void 0 === zv ? void 0 : zv.offsetHeight)
      })), hv.isLoggedIn() ? (0, lv.jsxs)(lv.Fragment, {
        children: [(0, lv.jsxs)("div", {
          className: "LeaderboardSelectors",
          children: [(0, lv.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, lv.jsx)(jv.e, {
              options: zv.map((vv => ({
                label: vv.label,
                value: vv.value
              }))),
              value: gv,
              onChange: vv => {
                pv(vv)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), (0, lv.jsx)("div", {
            className: "LeaderboardSelect",
            children: (0, lv.jsx)(jv.e, {
              options: nv.Bc.map((vv => ({
                value: vv,
                label: vv,
                className: "LBDropdownMenuItem"
              }))),
              value: dv,
              onChange: vv => {
                Tv(vv.label)
              },
              controlClassName: "LBSelectClass",
              arrowClassName: "LBSelectArrow",
              menuClassName: "LBDropdownMenu"
            })
          }), Cv ? (0, lv.jsx)("div", {
            className: "SeeTopText",
            onClick: () => {
              sv(!av)
            },
            children: av ? "See Yourself" : "See Top"
          }) : null]
        }), (0, lv.jsx)("div", {
          className: "LBTableWrapper",
          children: Gv ? (0, lv.jsx)("div", {
            className: "LoaderContainer",
            children: (0, lv.jsx)(Dv.c, {})
          }) : null === xv ? (0, lv.jsx)(lv.Fragment, {
            children: (0, lv.jsxs)("table", {
              className: "LBTable",
              children: [(0, lv.jsx)("thead", {
                className: "LBTableTHead",
                ref: qv,
                children: (0, lv.jsxs)("tr", {
                  children: [(0, lv.jsx)("th", {
                    className: "LBTablePlaceTH LBTableTH",
                    children: "PLACE"
                  }), (0, lv.jsx)("th", {
                    className: "LBTablePlayerTH LBTableTH",
                    children: "PLAYER"
                  }), (0, lv.jsx)("th", {
                    className: "LBTableValueTH LBTableTH",
                    children: gv.label.toUpperCase()
                  })]
                })
              }), (0, lv.jsx)("tbody", {
                children: Wv.map((vv => (0, lv.jsxs)("tr", {
                  className: "LBTableTR " + (vv.name === ev ? "LBTableTRYou" : ""),
                  children: [(0, lv.jsx)("td", {
                    className: "LBTableTD",
                    children: `#${vv.place}`
                  }), (0, lv.jsx)("td", {
                    className: "LBTableTD",
                    children: (0, lv.jsx)(Fv.c, {
                      text: [{
                        entityName: vv.name
                      }]
                    })
                  }), (0, lv.jsx)("td", {
                    className: "LBTableTD",
                    children: vv.stat
                  })]
                }, vv.name)))
              })]
            })
          }) : (0, lv.jsx)("div", {
            className: "LBIncreaseWrapper",
            onClick: () => {
              tv(null)
            },
            children: (0, lv.jsxs)("div", {
              className: "LBIncreaseDiv",
              children: [(0, lv.jsx)("div", {
                className: "TriangleUp"
              }), (0, lv.jsx)("div", {
                className: "LBIncreaseText",
                children: `${xv} Place${xv>1?"s":""}`
              })]
            })
          })
        })]
      }) : (0, lv.jsxs)("div", {
        className: "LBLoginDiv",
        children: [(0, lv.jsx)("div", {
          className: "LBLoginInfo",
          children: "Login to see the leaderboard"
        }), (0, lv.jsx)("div", {
          className: "LBLoginInfo",
          children: "You can login from the top left homescreen"
        })]
      })
    }
    var Uv = Pv(2899),
      Rv = Pv(73),
      xv = Pv(39),
      tv = Pv(3164);
    const qv = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onClose: Pv
      } = vv;
      (0, Uv.d)();
      const hv = (0, dv.i)("_tasks"),
        ev = (0, dv.i)("_availableLeaderboards"),
        [Nv, Tv] = (0, Sv.useState)({});
      hv && Object.keys(hv).length > 0 && 0 === Object.keys(Nv).length && Tv(hv);
      const [Wv] = (0, Sv.useState)({
        tasks: {},
        leaderboard: {}
      }), wv = {
        tasks: {
          Title: "Tasks",
          getIsDefined: () => !!hv && Object.keys(hv).length > 0,
          content: (0, lv.jsx)(iv, {
            tasks: hv,
            lastDisplayedTasks: Nv
          })
        },
        leaderboard: {
          Title: "Leaderboard",
          getIsDefined: () => (null === ev || void 0 === ev ? void 0 : ev.length) > 0,
          content: (0, lv.jsx)(Vv, {
            lbStats: ev,
            storedState: Wv.leaderboard
          })
        }
      };

      function av() {
        for (const vv in wv)
          if (wv[vv].getIsDefined()) return vv;
        return null
      }
      const [sv, Cv] = (0, Sv.useState)(av());

      function cv() {
        Tv({
          ...hv
        }), Pv()
      }(0, Sv.useEffect)((() => {
        sv || Cv(av())
      }), [av()]), (0, pv.b)(!0, sv && zv), (0, Sv.useEffect)((() => {
        zv && !sv && (console.log("CLOSE"), cv())
      }), [zv, sv]);
      const [Gv, mv] = (0, Sv.useState)(!1);
      return (0, Sv.useEffect)((() => {
        zv && sv && !Gv && mv(!0)
      }), [zv, Gv, sv]), (0, Sv.useEffect)((() => {
        !Gv && hv && "tasks" !== sv && Cv("tasks")
      }), [Gv, hv, sv]), (0, lv.jsx)(lv.Fragment, {
        children: sv ? (0, lv.jsx)(tv.b, {
          className: "RetentionFeaturesWrapper",
          show: zv,
          children: (0, lv.jsxs)(gv.c, {
            close: cv,
            escDoesExit: !1,
            closeClassnameList: ["VerticalMenuScreenDiv"],
            togglePointerLock: !1,
            globallyUniqueKey: "RetentionFeaturesComponent",
            children: [(0, lv.jsxs)("div", {
              className: "VerticalMenuScreenDiv",
              children: [(0, lv.jsx)(Qv, {}), (0, lv.jsxs)("div", {
                className: "MenuDiv",
                children: [(0, lv.jsx)(Iv, {
                  setCategory: Cv,
                  menuCategories: wv,
                  selectedCat: sv
                }), (0, lv.jsx)("div", {
                  className: "MenuCategoryContainer",
                  children: wv[sv].content
                })]
              })]
            }), (0, lv.jsx)("div", {
              className: "BottomScreenMenuWrapper",
              children: Rv.featureFlags.useDiscord && (0, lv.jsx)("div", {
                className: "DiscordMenuDivDiv",
                children: (0, lv.jsx)("div", {
                  className: "DiscordMenuDiv",
                  children: (0, lv.jsx)(Zv, {
                    tasks: hv
                  })
                })
              })
            })]
          })
        }) : null
      })
    }));

    function Iv(vv) {
      let {
        selectedCat: zv,
        setCategory: Pv,
        menuCategories: hv
      } = vv;
      return (0, lv.jsx)("div", {
        className: "MenuHeader",
        children: Object.keys(hv).map((vv => hv[vv].getIsDefined() ? (0, lv.jsx)("div", {
          className: "MenuHeaderCategory " + (vv === zv ? "SelectedHeaderCat" : "UnselectedHeaderCat"),
          onClick: () => {
            Pv(vv)
          },
          children: hv[vv].Title
        }, vv) : null))
      })
    }

    function Qv() {
      const vv = (0, dv.i)("currencyAmounts");
      return (0, lv.jsx)("div", {
        className: "TopScreenCurrencies",
        children: Object.keys(null !== vv && void 0 !== vv ? vv : {}).map((zv => {
          const Pv = vv[zv];
          return Pv.hidden ? null : (0, lv.jsxs)("div", {
            className: "TopScreenCurrencyDiv",
            children: [(0, lv.jsx)(Cv.b, {
              name: Pv.icon,
              className: "3x UiCurrencyIcon",
              style: {
                color: Pv.iconColour
              }
            }), (0, lv.jsx)("div", {
              className: "UiCurrencyAmount",
              children: Pv.amount
            })]
          }, zv)
        }))
      })
    }

    function Zv(vv) {
      let {
        tasks: zv
      } = vv;
      return (0, lv.jsxs)("a", {
        className: "MenuDiscordButtonWrapper",
        href: "https://discord.gg/playbloxd",
        target: "_blank",
        rel: "noreferrer",
        children: [(0, lv.jsx)(Cv.b, {
          name: "discord",
          kit: "brands",
          className: "DiscordButton",
          onClick: () => {
            xv.h.setItem("DiscordPressed", !0), Nv.gameBridge.send("setServerCookie", {
              key: "joinDiscord",
              value: "true"
            }), "joinDiscord" in zv && av.j.zC("clientTaskProgress", {
              taskId: "joinDiscord",
              progress: 1
            })
          }
        }), (0, lv.jsx)(ev.d, {})]
      })
    }
    var Av = Pv(22),
      Lv = Pv(1610),
      Hv = Pv(36064),
      Mv = Pv(8895),
      yv = Pv(4386),
      Bv = Pv(144),
      Jv = Pv(1200),
      Ev = Pv(1344),
      ov = Pv(2480),
      bv = Pv(1175),
      rv = Pv(1612),
      kv = Pv(2298),
      Xv = Pv(2284),
      uv = Pv(1827),
      vz = Pv(1980),
      zz = Pv(1243),
      Pz = Pv(1465),
      hz = Pv(36213),
      Sz = Pv(36217),
      ez = Pv(36221),
      gz = Pv(36229),
      pz = Pv(36236),
      dz = Pv(2547);

    function Nz(vv) {
      let {
        playersHere: zv,
        exclude: Pv,
        Km: hv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)(), gv = (0, dz.k)(dz.f), [pv, dv] = (0, Sv.useState)([]), Nv = [], Tv = (vv, zv) => {
        const hv = [...Pv, ...Nv.map((vv => vv.player.name))];
        Nv.length < 3 && !(0, Sz.k)(hv, vv.name) && Nv.push({
          player: vv,
          status: zv
        })
      };
      for (const Sv of zv) Tv((0, pz.g)(Sv.name, Sv.cosmetics, Sv.ranks), ev("worldSocial:inThisWorld"));
      if ("loaded" === gv.state.status)
        for (const Sv of gv.state.recentPlayers) Sv.preview.name && !Sv.preview.isError && Tv({
          ...Sv.preview,
          location: {
            status: "offline"
          }
        }, ev("worldSocial:playedWithYou"));
      const Wv = vv => {
        dv((zv => [...zv, vv])), hv(vv).finally((() => {
          dv((zv => zv.filter((zv => zv !== vv))))
        }))
      };
      return (0, lv.jsx)(lv.Fragment, {
        children: Nv.map(((vv, zv) => {
          let {
            player: Pv,
            status: hv
          } = vv;
          return (0, lv.jsx)(pz.d, {
            zIndex: Nv.length - zv,
            player: Pv,
            status: hv,
            onSendFriendRequest: () => {
              Wv(Pv.name)
            },
            actions: (0, lv.jsx)(Ev.h, {
              tooltipInner: (0, lv.jsx)(lv.Fragment, {
                children: ev("recentPlayers:addFriend")
              }),
              delayShow: 0,
              hoverOnly: !0,
              children: (0, lv.jsx)(wv.d, {
                className: "FriendRequestButton",
                disabled: pv.includes(Pv.name),
                ariaLabel: `${ev("recentPlayers:addFriend")} ${Pv.name}`,
                onClick: () => {
                  Wv(Pv.name)
                },
                children: (0, lv.jsx)(Cv.b, {
                  name: "user-plus"
                })
              })
            })
          }, `suggestion:${Pv.name}`)
        }))
      })
    }
    var lz = Pv(36252),
      Tz = Pv(36258),
      Wz = Pv(1209),
      wz = Pv(1475),
      az = Pv(4384),
      sz = Pv(284),
      Cz = Pv(4370);
    const iz = ["auto", "auto_existing"];

    function cz(vv) {
      return iz.includes(vv)
    }

    function Gz(vv, zv) {
      const Pv = (0, Wz.ub)(vv);
      return null !== zv && (0, Wz.ub)(zv) === Pv || (0, Cz.c)().some((vv => (0, Wz.ub)(vv.name) === Pv))
    }
    const mz = new Set;

    function jz(vv) {
      return `worldSocialSeen:${vv}`
    }

    function fz(vv) {
      return !vv || mz.has(vv) || !0 === xv.h.getItem(jz(vv))
    }

    function Fz(vv) {
      vv && !mz.has(vv) && (mz.add(vv), xv.h.setItem(jz(vv), !0))
    }
    var Yz = Pv(2331),
      nz = Pv(2337);

    function Oz(vv) {
      let {
        show: zv,
        onClose: Pv,
        opener: hv
      } = vv;
      const {
        lobbyName: ev,
        shownLobbyName: pv
      } = (0, Ov.h)("connectedGame");
      return (0, Sv.useEffect)((() => {
        zv && (0, Pz.reportAnalyticsClick)({
          id: "world_social.open",
          value: hv
        })
      }), [zv]), (0, lv.jsx)(gv.c, {
        show: zv && null !== ev,
        close: Pv,
        togglePointerLock: !1,
        className: "WorldSocialBackgroundScreen",
        globallyUniqueKey: "WorldSocialPopup",
        doGameplayStartStopOnShow: !0,
        ignorePressesAsShown: "icon" !== hv,
        children: zv && null !== ev && (0, lv.jsx)(Dz, {
          lobbyName: ev,
          worldCode: null !== pv && void 0 !== pv ? pv : ev,
          onClose: Pv
        }, ev)
      })
    }

    function Dz(vv) {
      var zv;
      let {
        lobbyName: Pv,
        worldCode: hv,
        onClose: ev
      } = vv;
      const {
        t: gv
      } = (0, bv.x)(), pv = (0, Sv.useRef)(null), {
        settings: dv,
        loading: Nv,
        answered: Tv,
        change: Wv,
        retry: av
      } = (0, hz.i)(Pv), sv = (0, rv.l)(), iv = (0, Ov.h)("players"), cv = (0, Ov.h)("hiddenPlayerNames"), [Gv, mv] = (0, Sv.useState)([]), [jv, Fv] = (0, Sv.useState)([]), [Yv, nv] = (0, Sv.useState)(!1), Kv = (0, Yz.e)(), Vv = (0, Sv.useMemo)((() => {
        var vv, zv;
        const Pv = null === iv.localId ? null : null !== (vv = null === (zv = iv.byId[iv.localId]) || void 0 === zv ? void 0 : zv.name) && void 0 !== vv ? vv : null;
        return iv.ids.flatMap((vv => {
          const zv = iv.byId[vv];
          return null !== zv && void 0 !== zv && zv.name && zv.name !== Pv ? [{
            name: zv.name,
            cosmetics: zv.cosmetics,
            ranks: zv.ranks
          }] : []
        }))
      }), [iv]), Uv = (0, Sv.useMemo)((() => (0, Sz.i)(sv.friends, Pv, Vv.map((vv => vv.name)))), [sv.friends, Pv, Vv]), xv = Rv.featureFlags.canSeeRealPlayerNames ? Vv.filter((vv => null === (0, zz.b)(vv.name, cv))) : [], tv = null !== dv && void 0 !== dv && dv.canManage ? dv : null, qv = null !== tv, Iv = null !== (zv = null === dv || void 0 === dv ? void 0 : dv.visibility) && void 0 !== zv ? zv : null, Qv = "whitelist" === (null === tv || void 0 === tv ? void 0 : tv.visibility), Zv = "private" === Iv || "whitelist" === Iv && !qv, {
        userContext: Av
      } = (0, fv.d)();
      (0, Sv.useEffect)((() => {
        qv && Gz(Pv, Av.getPersonalWorldLobbyName()) && Fz(Av.whamm)
      }), [qv, Pv, Av]);
      const Lv = Zv ? gv("whitelist" === Iv ? "socialBar:inviteWorldManagersOnly" : qv ? "worldSocial:privateLinkRow" : "socialBar:inviteWorldPrivate") : null,
        Mv = null === Lv;
      (0, Sv.useEffect)((() => Zv ? void 0 : uv.f.quietFriendAdded()), [Zv]), (0, Sv.useEffect)((() => uv.f.quietFriendRequests()), []);
      const dz = (0, Sv.useRef)(!1);
      (0, Sv.useEffect)((() => {
        const vv = pv.current,
          zv = !dz.current;
        dz.current = !0;
        const Pv = null === document.activeElement || document.activeElement === document.body;
        null !== vv && void 0 !== vv && vv.contains(document.activeElement) || !zv && !Pv || (0, Hv.f)() || null === vv || void 0 === vv || vv.focus({
          preventScroll: !0
        })
      }), [Mv]), (0, Sv.useEffect)((() => {
        const vv = vv => {
          "Escape" !== vv.key || null !== document.activeElement && document.activeElement !== document.body || ev()
        };
        return document.addEventListener("keydown", vv), () => {
          document.removeEventListener("keydown", vv)
        }
      }), [ev]);
      const Wz = null === dv && !Tv,
        wz = (Nv || sv.loading) && 0 === sv.friends.length,
        az = sv.friends.flatMap((vv => vv.name ? [vv.name] : [])),
        sz = Gv.filter((vv => !(0, Sz.k)(az, vv))),
        Cz = Uv.length + 3,
        iz = sz.length + Cz,
        cz = Yv ? sv.requests : sv.requests.slice(0, 1),
        mz = async function(vv) {
          let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (const Pv of (0, Sz.o)(vv, yv.y)) {
            if (!await Wv({
                whitelistAdd: Pv
              }, (vv => (0, Sz.t)(vv, Pv, !0)), {
                quiet: zv
              })) return !1
          }
          return !0
        }, jz = vv => {
          if (Qv && tv) return {
            on: (0, Sz.k)(tv.whitelist, vv),
            onChange: zv => {
              (0, Pz.reportAnalyticsClick)({
                id: "world_social.whitelist_toggle",
                value: zv ? "on" : "off"
              }), Wv(zv ? {
                whitelistAdd: [vv]
              } : {
                whitelistRemove: vv
              }, (Pv => (0, Sz.t)(Pv, [vv], zv)))
            }
          }
        }, fz = async (vv, zv) => {
          (0, Pz.reportAnalyticsClick)({
            id: "world_social.add_friend",
            value: zv
          });
          const Pv = await (0, Xv.g)(vv, "world_social");
          return (0, Xv.e)(Pv, vv, {
            announceSent: !1
          }), "failed" !== Pv.kind && ("sent" === Pv.kind && mv((zv => (0, Sz.k)(zv, vv) ? zv : [...zv, vv])), Qv && await mz([vv]), !0)
        };
      return (0, lv.jsxs)("div", {
        ref: pv,
        className: "WorldSocialPopup AnimFadeInScaleUp",
        tabIndex: -1,
        onKeyDown: vv => {
          vv.target === vv.currentTarget && " " === vv.key && vv.preventDefault()
        },
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "WorldSocialTitle",
        children: [(0, lv.jsxs)("div", {
          className: "WorldSocialHeader",
          children: [(0, lv.jsx)("h2", {
            id: "WorldSocialTitle",
            className: "WorldSocialTitle SmallTextBold",
            children: gv("worldSocial:title")
          }), (0, lv.jsx)(wv.i, {
            className: "WorldSocialClose",
            onClick: ev
          })]
        }), Wz && (0, lv.jsx)("div", {
          className: "WorldSocialLoading",
          children: (0, lv.jsx)(Dv.c, {})
        }), !Wz && (0, lv.jsxs)(lv.Fragment, {
          children: [(0, lv.jsx)(ez.d, {
            worldCode: hv,
            message: Lv
          }), null === dv && !Nv && (0, lv.jsx)("button", {
            type: "button",
            className: "WorldSocialLoadFailed",
            onClick: av,
            children: gv("worldSocial:loadFailed")
          }), qv && null !== Iv && (0, lv.jsx)(gz.d, {
            visibility: Iv,
            onPick: vv => {
              (async vv => {
                if (vv === Iv) return;
                (0, Pz.reportAnalyticsClick)({
                  id: "world_social.set_mode",
                  value: vv
                });
                const zv = [...(0, Tz.d)(Pv), ...jv],
                  hv = "whitelist" === vv && dv ? (0, Sz.e)(Uv, zv, dv.whitelist) : [];
                await Wv({
                  setVisibility: vv
                }, (zv => ({
                  ...zv,
                  visibility: vv
                }))) && await mz(hv)
              })(vv)
            }
          }), sv.requests.length > 0 && (0, lv.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, lv.jsx)(ov.b, {
              label: (0, lv.jsxs)(lv.Fragment, {
                children: [(0, lv.jsx)(Cv.b, {
                  name: vz.g
                }), " ", gv("socialBar:requests")]
              }),
              meta: (0, lv.jsxs)(lv.Fragment, {
                children: [sv.requests.length, sv.requests.length === Jv.s && (0, lv.jsx)("span", {
                  className: "SocialSectionTitleLimit",
                  children: gv("socialBar:limitReached")
                }), !Yv && sv.requests.length > 1 && (0, lv.jsx)("button", {
                  type: "button",
                  className: "WorldSocialMoreRequests",
                  onClick: () => {
                    nv(!0)
                  },
                  children: gv("worldSocial:moreRequests", {
                    count: sv.requests.length - 1
                  })
                })]
              })
            }), (0, lv.jsx)("div", {
              className: "PlayerRows",
              children: cz.map(((vv, zv) => (0, lv.jsx)(pz.d, {
                zIndex: cz.length - zv,
                player: vv,
                actions: (0, lv.jsxs)(lv.Fragment, {
                  children: [(0, lv.jsx)(Ev.h, {
                    tooltipInner: (0, lv.jsx)(lv.Fragment, {
                      children: gv("general:accept")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, lv.jsx)(wv.d, {
                      className: "FriendRequestButton",
                      ariaLabel: `${gv("general:accept")} ${vv.name}`,
                      analyticsClick: {
                        id: "social.accept_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Xv.f)(vv.name, !0, {
                          source: "world_social"
                        })
                      },
                      children: (0, lv.jsx)(Cv.b, {
                        name: "check"
                      })
                    })
                  }), (0, lv.jsx)(Ev.h, {
                    tooltipInner: (0, lv.jsx)(lv.Fragment, {
                      children: gv("general:decline")
                    }),
                    delayShow: 0,
                    hoverOnly: !0,
                    children: (0, lv.jsx)(wv.e, {
                      className: "FriendRequestButton",
                      ariaLabel: `${gv("general:decline")} ${vv.name}`,
                      analyticsClick: {
                        id: "social.decline_friend_request",
                        value: "world_social"
                      },
                      onClick: () => {
                        (0, Xv.f)(vv.name, !1, {
                          source: "world_social"
                        })
                      },
                      children: (0, lv.jsx)(Cv.b, {
                        name: "xmark"
                      })
                    })
                  })]
                })
              }, `incoming:${vv.name}`)))
            })]
          }), (0, lv.jsxs)("div", {
            className: "WorldSocialSection",
            children: [(0, lv.jsx)(ov.b, {
              label: (0, lv.jsxs)(lv.Fragment, {
                children: [(0, lv.jsx)(Cv.b, {
                  name: vz.e
                }), " ", gv("socialBar:friends")]
              }),
              meta: sv.loaded && !Zv ? sv.friends.length : void 0
            }), (0, lv.jsx)(lz.d, {
              label: gv("socialBar:sendRequest"),
              icon: "user-plus",
              placeholder: gv("worldSocial:addFriendPlaceholder"),
              onSubmit: async vv => await fz(vv, "field") ? {
                ok: !0
              } : {
                ok: !1,
                error: null
              }
            }), wz && (0, lv.jsx)("div", {
              className: "WorldSocialLoading",
              children: (0, lv.jsx)(Dv.c, {})
            }), !wz && (0, lv.jsxs)(lv.Fragment, {
              children: [(0, lv.jsxs)("div", {
                className: "PlayerRows",
                children: [sz.map(((vv, zv) => (0, lv.jsx)(pz.d, {
                  zIndex: iz - zv,
                  player: (0, pz.g)(vv, null),
                  status: gv("worldSocial:requestSent"),
                  MT: jz(vv)
                }, `request:${vv}`))), !Zv && Uv.map(((vv, zv) => (0, lv.jsx)(pz.b, {
                  zIndex: Cz - zv,
                  row: vv,
                  MT: jz(vv.friend.name),
                  canInvite: (0, Sz.d)(dv) && "here" !== vv.place,
                  invited: jv.includes(vv.friend.name),
                  onInvite: () => {
                    (async vv => {
                      (0, Pz.reportAnalyticsClick)({
                        id: "world_social.invite",
                        value: "friend"
                      });
                      const zv = () => {
                        Fv((zv => zv.filter((zv => zv !== vv))))
                      };
                      Fv((zv => [...zv, vv]));
                      const hv = (0, Sz.r)(dv, vv);
                      if ("none" !== hv) {
                        const Pv = mz([vv], "quiet" === hv);
                        if ("required" === hv && !await Pv) return void zv()
                      }
                      await (0, kv.m)(vv, "game", {
                        announceSent: !1,
                        source: "world_social"
                      }) ? ((0, Tz.e)(Pv, vv), setTimeout(zv, Bv.r)) : zv()
                    })(vv.friend.name)
                  }
                }, vv.friend.name))), sv.loaded && 0 === sv.friends.length && (0, lv.jsx)(Nz, {
                  playersHere: xv,
                  exclude: Gv,
                  Km: vv => fz(vv, "suggestion")
                })]
              }), Qv && sv.loaded && 0 === sv.friends.length && 0 === sz.length && (0, lv.jsx)("div", {
                className: "WorldSocialEmpty",
                children: gv("worldSocial:whitelistNoFriends")
              })]
            })]
          })]
        }), Kv && (0, lv.jsxs)(wv.K, {
          className: "WorldSocialManageLobby SmallTextLight",
          onClick: () => {
            (0, nz.f)({
              page: "players",
              source: "invite_popup"
            }), ev()
          },
          children: [(0, lv.jsx)(Cv.b, {
            name: "users-gear"
          }), " ", gv("lobbyManageEntry:manageLobby")]
        })]
      })
    }
    var Kz = Pv(2355),
      Vz = Pv(2328);

    function Uz(vv) {
      let {
        show: zv,
        onClose: Pv,
        option: hv
      } = vv;
      const ev = (0, Ov.g)("connectedGame", (vv => (0, Kz.b)(vv) ? vv.lobbyName : null));
      return function(vv) {
        const {
          gameEntrySource: zv,
          loadingOverlayVisible: Pv
        } = (0, Av.i)(["gameEntrySource", "loadingOverlayVisible"]), {
          userContext: hv
        } = (0, fv.d)(), ev = (0, Ov.h)("localPlayerAlive"), gv = (0, Ov.g)("players", (vv => null !== vv.localId && void 0 !== vv.byId[vv.localId])), pv = (0, Vz.g)(), dv = (0, Sv.useRef)(null), Nv = (0, Sv.useRef)(null), lv = "worldCreation" === zv, Tv = hv.whamm, Wv = hv.getPersonalWorldLobbyName();
        (0, Sv.useEffect)((() => {
          var zv;
          null !== vv && (null === (zv = Nv.current) || void 0 === zv ? void 0 : zv.lobbyName) !== vv && null !== qz(vv, lv, Tv, Wv) && (Nv.current = (0, hz.e)(vv))
        }), [lv, vv, Tv, Wv]), (0, Sv.useEffect)((() => {
          if (null !== vv && (!Pv && ev && gv)) return pv.whenShown((() => {
            var zv;
            const Pv = dv.current === vv ? null : qz(vv, lv, Tv, Wv);
            if (null === Pv) return;
            const hv = (null === (zv = Nv.current) || void 0 === zv ? void 0 : zv.lobbyName) === vv ? Nv.current : (0, hz.e)(vv);
            Nv.current = null, dv.current = vv,
              function(vv, zv, Pv, hv) {
                const {
                  lobbyName: Sv
                } = vv, ev = () => {
                  ! function(vv, zv) {
                    if (!Lz()) return void zv(!0);
                    const Pv = performance.now() + Zz;
                    let hv = 0;
                    const Sv = () => {
                      hv = Lz() ? 0 : hv + 1, hv >= 2 ? zv(!0) : !Az(vv) || performance.now() > Pv ? zv(!1) : setTimeout(Sv, Qz)
                    };
                    setTimeout(Sv, Qz)
                  }(Sv, (ev => {
                    hv();
                    const gv = "auto_existing" === zv && fz(Pv);
                    ev && Az(Sv) && !xz(Sv) && !gv && (Iz(vv) ? tz(Sv) : (tz(Sv), Fz(Pv), function(vv) {
                      const zv = sz.d.world_social_popup_v1;
                      return (0, sz.k)("world_social_popup_v1"), (0, Pz.reportAnalyticsClick)({
                        id: "world_social.auto_open",
                        value: `${zv}:${(0,az.e)()}:${vv}`
                      }), (0, wz.flushClientAnalyticsEvents)(), "auto_open" === zv
                    }(zv) && ((0, hz.b)(vv), av.j.zC("toggleMenu", `inviteLink|${zv}`), "inviteLink" !== Av.c.get("openInGameMenuName") && console.warn("World social popup: the auto-open asked for it, but it didn't open"))))
                  }))
                };
                if ("auto" === zv && !Iz(vv)) return void ev();
                vv.response.then((vv => {
                  if (!("error" in vv)) return vv.settings.canManage ? void ev() : (tz(Sv), void hv());
                  hv()
                }))
              }(hv, Pv, Tv, (() => {
                dv.current === vv && (dv.current = null)
              }))
          }))
        }), [pv, lv, Pv, vv, ev, gv, Tv, Wv])
      }(ev), (0, Sv.useEffect)((() => {
        zv && null !== ev && tz(ev)
      }), [zv, ev]), null !== ev ? (0, lv.jsx)(Oz, {
        show: zv,
        onClose: Pv,
        opener: cz(hv) ? hv : "icon"
      }) : (0, lv.jsx)(Mv.d, {
        show: zv,
        onClose: Pv
      })
    }
    const Rz = new Set;

    function xz(vv) {
      return Rz.has(vv) || !!xv.l.getItem(`worldSocialShown:${vv}`)
    }

    function tz(vv) {
      Rz.add(vv), xv.l.setItem(`worldSocialShown:${vv}`, !0)
    }

    function qz(vv, zv, Pv, hv) {
      return xz(vv) ? null : function(vv) {
        let {
          justMade: zv,
          playerId: Pv,
          lobbyName: hv,
          personalWorld: Sv
        } = vv;
        return zv ? "auto" : !fz(Pv) && Gz(hv, Sv) ? "auto_existing" : null
      }({
        justMade: zv,
        playerId: Pv,
        lobbyName: vv,
        personalWorld: hv
      })
    }

    function Iz(vv) {
      let {
        answer: zv
      } = vv;
      return null !== zv && "settings" in zv && !zv.settings.canManage
    }
    const Qz = 500,
      Zz = 3e4;

    function Az(vv) {
      return "inGame" === Av.c.get("gameState") && Nv.gameBridge.latest("connectedGame").lobbyName === vv
    }

    function Lz() {
      return (0, Hv.f)() || Av.c.get("loadingOverlayVisible") || (0, Lv.o)()
    }
    var Hz = Pv(36266),
      Mz = Pv(2940),
      yz = Pv(1934),
      Bz = Pv(2934);

    function Jz(vv, zv, Pv) {
      return Bz.b.overridesTexture(vv) ? Bz.b.getTexture(vv, zv).url : Pv
    }
    var Ez = Pv(9854);
    const oz = (vv, zv) => {
        (0, Sv.useEffect)((() => {
          setTimeout((() => {
            vv && vv.current && vv.current.focus()
          }), 1)
        }), [zv])
      },
      bz = (0, Sv.memo)((function(vv) {
        let {
          isInputActive: zv,
          onClose: Pv,
          onChange: hv,
          textAreaRef: Sv,
          fontSize: ev,
          lineHeight: gv,
          currText: pv
        } = vv;
        return (0, lv.jsxs)("div", {
          className: "WriteOnBoardWrapper",
          children: [(0, lv.jsx)("img", {
            src: Jz("board_full", Mz.f.BLOCK, Ez),
            alt: "Board",
            className: "WriteOnBoardImg"
          }), (0, lv.jsx)("textarea", {
            className: "WriteOnBoardTextArea",
            value: pv,
            ref: Sv,
            style: {
              fontSize: `${ev}rem`,
              lineHeight: `${gv}rem`
            },
            onKeyDown: vv => {
              var zv;
              "Escape" !== vv.key && (vv.stopPropagation(), "Tab" === vv.key && function(vv) {
                vv.preventDefault();
                const zv = vv.target,
                  {
                    value: Pv
                  } = zv;
                let hv = zv.selectionStart,
                  Sv = zv.selectionEnd,
                  ev = Pv.slice(hv, Sv);
                if (!ev.includes("\n") && !vv.shiftKey) return void document.execCommand("insertText", !1, "\t");
                for (; hv > 0 && "\n" !== Pv[hv - 1];) hv--;
                const gv = "\n" === Pv[Sv - 1];
                gv && Sv--;
                ev = Pv.slice(hv, Sv);
                const pv = ev.split("\n").map((zv => vv.shiftKey ? zv.replace(/^\t/, "") : "\t" + zv)).join("\n");
                if (vv.shiftKey && Pv.slice(hv, Sv) === pv) return;
                let {
                  selectionStart: dv
                } = zv;
                zv.setSelectionRange(hv, Sv), dv > hv && (!vv.shiftKey || "\t" === ev[0]) && (dv += vv.shiftKey ? -1 : 1);
                Sv = hv + pv.length + (gv ? 1 : 0), document.execCommand("insertText", !1, pv), zv.setSelectionRange(dv, Sv)
              }(vv), /^F\d+$/i.test(vv.code) && null !== (zv = yz.z.OpenCodeEditor) && void 0 !== zv && zv.includes(vv.code) && Pv())
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: hv
          })]
        })
      }));

    function rz(vv) {
      return 1.3 * vv
    }
    var kz = Pv(1652);
    const Xz = (0, Sv.memo)((function(vv) {
        let {
          show: zv,
          onOpen: Pv,
          onClose: hv
        } = vv;
        const [ev, pv] = (0, Sv.useState)(null), [dv, Tv] = (0, Sv.useState)(""), [Wv, av] = (0, Sv.useState)(0), [sv, Cv] = (0, Sv.useState)(null), [iv, cv] = (0, Sv.useState)({
          text: "",
          textSize: 0
        }), Gv = (vv, zv) => sv ? (0, Hz.m)(vv, zv, sv.width, sv.height) : (0, Hz.d)(vv, zv), mv = vv => {
          Tv(Gv(dv, vv)), av(vv), xv.h.setItem("lastBoardTextSize", vv)
        }, jv = () => {
          hv(), sv && dv === iv.text && Wv === iv.textSize || Nv.gameBridge.send("writeOnBoard", {
            pos: ev,
            text: dv,
            textSize: Wv
          })
        };
        (0, Ov.d)("boardEditRequested", (vv => {
          var Sv, ev;
          if (!Rv.featureFlags.canSeePlayerWrittenText) return;
          if (null === vv) return pv(null), void(zv && hv());
          const {
            pos: gv,
            noticeboardSpan: dv,
            text: Nv
          } = vv;
          pv(gv), Cv(dv), Tv(Nv);
          const lv = null !== (Sv = null !== (ev = vv.textSize) && void 0 !== ev ? ev : xv.h.getItem("lastBoardTextSize")) && void 0 !== Sv ? Sv : 0;
          av(lv), cv({
            text: Nv,
            textSize: lv
          }), xv.h.setItem("lastBoardTextSize", lv), Pv()
        }));
        const fv = (0, Sv.useRef)(null);
        oz(fv, zv), (0, kz.s)(fv, {
          kind: "sign",
          submit: jv
        });
        const Fv = function(vv, zv) {
            const Pv = Hz.c[vv];
            if (!zv) return Pv.uiFontSize;
            const {
              numLines: hv,
              charsPerLine: Sv
            } = (0, Hz.v)(zv.width, zv.height, vv);
            return Pv.uiFontSize * Math.min(Pv.charsPerLine / Sv, Pv.numLines / hv)
          }(Wv, sv),
          Yv = rz(Fv);
        return (0, lv.jsxs)(gv.c, {
          className: "WriteOnBoardBg",
          close: jv,
          escDoesExit: !0,
          show: zv,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, lv.jsx)(bz, {
            isInputActive: () => zv,
            onClose: jv,
            onChange: vv => {
              Tv(Gv(vv.target.value, Wv))
            },
            textAreaRef: fv,
            fontSize: Fv,
            lineHeight: Yv,
            currText: dv
          }), (0, lv.jsx)("div", {
            className: "WriteOnBoardTextSizeHeader SmallTextBold",
            children: "Text Size"
          }), (0, lv.jsxs)("div", {
            className: "WriteOnBoardTextSizeButtons",
            children: [(0, lv.jsx)(wv.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mv(0)
              },
              disabled: 0 === Wv,
              children: "Small"
            }), (0, lv.jsx)(wv.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mv(1)
              },
              disabled: 1 === Wv,
              children: "Medium"
            }), (0, lv.jsx)(wv.d, {
              className: "WriteOnBoardTextSizeButton",
              onClick: () => {
                mv(2)
              },
              disabled: 2 === Wv,
              children: "Large"
            })]
          })]
        })
      })),
      uz = (0, Sv.memo)((function(vv) {
        let {
          show: zv,
          onOpen: Pv,
          onClose: hv
        } = vv;
        const [ev, pv] = (0, Sv.useState)(""), dv = () => {
          hv(), Nv.gameBridge.send("writeNameTag", ev)
        };
        (0, Yv.g)("EditNameTag", (vv => {
          Rv.featureFlags.canSeePlayerWrittenText && null !== vv && (pv(vv), Pv())
        }));
        const Tv = (0, Sv.useRef)(null);
        oz(Tv, zv), (0, kz.s)(Tv, {
          kind: "nameTag",
          submit: dv
        });
        const Wv = Hz.E.nameTag.uiFontSize,
          av = rz(Wv);
        return (0, lv.jsxs)(gv.c, {
          className: "WriteOnBoardBg",
          close: dv,
          escDoesExit: !0,
          show: zv,
          togglePointerLock: !1,
          globallyUniqueKey: "WriteOnSignComp",
          children: [(0, lv.jsx)("div", {
            className: "NameTagTrim",
            children: (0, lv.jsx)(bz, {
              isInputActive: () => zv,
              onClose: dv,
              onChange: vv => {
                const zv = vv.target.value.replaceAll("\n", "");
                pv((0, Hz.q)(zv, "nameTag"))
              },
              textAreaRef: Tv,
              fontSize: Wv,
              lineHeight: av,
              currText: ev
            })
          }), (0, lv.jsx)(wv.d, {
            onClick: dv,
            className: "WriteOnNameTagCloseButton",
            children: "Finish"
          })]
        })
      }));
    var vP = Pv(18023);
    const zP = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onOpen: Pv,
        onClose: hv
      } = vv;
      const [ev, pv] = (0, Sv.useState)(""), [dv, Tv] = (0, Sv.useState)(0), [Wv, av] = (0, Sv.useState)(!1), [sv, Cv] = (0, Sv.useState)(["", "", "", "", "", "", "", "", "", ""]), [iv, cv] = (0, Sv.useState)("Title"), [Gv, mv] = (0, Sv.useState)(!0), [jv, fv] = (0, Sv.useState)(!1);
      (0, Yv.g)("EditBook", (vv => {
        let {
          pages: zv,
          title: hv,
          isPublished: Sv
        } = vv;
        var ev;
        Rv.featureFlags.canSeePlayerWrittenText && (null !== zv ? (Cv(zv), pv(null !== (ev = zv[0]) && void 0 !== ev ? ev : ""), cv(hv), Tv(0), av(!1), mv(!Sv), fv(!1), Pv()) : Cv(["", "", "", "", "", "", "", "", "", ""]))
      }));
      const Fv = (0, Sv.useRef)(null),
        nv = (0, Sv.useRef)(null);
      oz(Fv, zv), (0, kz.s)(Fv, {
        kind: "book"
      }), (0, kz.s)(nv, {
        kind: "el"
      });
      const Ov = Hz.E.book.uiFontSize,
        Dv = rz(Ov),
        Kv = () => {
          (Gv || jv) && Nv.gameBridge.send("writeBook", {
            pages: [...sv],
            title: iv,
            published: !Gv && jv
          })
        },
        Vv = vv => {
          Wv && (sv[dv] = ev, av(!1)), pv(sv[vv]), Tv(vv)
        };
      return (0, lv.jsxs)(gv.c, {
        className: "WriteOnBoardBg",
        close: () => {
          hv(), sv[dv] = ev, Kv()
        },
        escDoesExit: !0,
        show: zv,
        togglePointerLock: !1,
        globallyUniqueKey: "WriteOnBookComp",
        children: [(0, lv.jsxs)("div", {
          className: "WriteOnBookWrapper",
          children: [(0, lv.jsx)("textarea", {
            className: "BookTitleTextArea SmallTextLight",
            value: iv,
            ref: nv,
            style: {
              fontSize: "2.5rem",
              lineHeight: `${Dv}rem`
            },
            onKeyDown: vv => {
              Gv && vv.stopPropagation()
            },
            spellCheck: "false",
            autoComplete: "off",
            onChange: vv => {
              let zv = vv.target.value;
              zv = (0, Hz.q)(zv, "el"), cv(zv)
            },
            readOnly: !Gv
          }), (0, lv.jsx)("img", {
            src: Jz("book_page", Mz.f.ITEM, vP),
            alt: "book_page",
            className: "WriteOnBookPageImg"
          }), (0, lv.jsx)("div", {
            className: "BookTextAreaPadding",
            children: (0, lv.jsx)("textarea", {
              className: "WriteOnBookPageTextArea",
              value: ev,
              ref: Fv,
              style: {
                fontSize: `${Ov}rem`,
                lineHeight: `${Dv}rem`
              },
              onKeyDown: vv => {
                Gv && vv.stopPropagation()
              },
              spellCheck: "false",
              autoComplete: "off",
              onChange: vv => {
                const zv = vv.target.value;
                pv((0, Hz.q)(zv, "book")), av(!0)
              },
              readOnly: !Gv
            })
          })]
        }), (0, lv.jsxs)("div", {
          className: "BookNavigationWrapper",
          children: [(0, lv.jsx)(wv.d, {
            disabled: 0 === dv,
            onClick: () => {
              Vv(dv - 1)
            },
            className: "BookNavButton",
            children: "<"
          }), (0, lv.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, lv.jsx)(wv.d, {
            disabled: 9 === dv,
            onClick: () => {
              Vv(dv + 1)
            },
            className: "BookNavButton",
            children: ">"
          }), (0, lv.jsx)("div", {
            style: {
              width: "2rem"
            }
          }), (0, lv.jsx)(wv.d, {
            onClick: () => {
              mv(!Gv), fv(!0)
            },
            className: "BookNavButton",
            children: Gv ? "Publish" : "Edit"
          })]
        })]
      })
    }));
    var PP = Pv(36139),
      hP = Pv(8374),
      SP = Pv(1374),
      eP = Pv(1871);

    function gP(vv) {
      let {
        show: zv,
        buttons: Pv
      } = vv;
      const {
        t: hv
      } = (0, bv.x)(), ev = (0, Sv.useRef)(null);
      return (0, Sv.useEffect)((() => {
        var vv, Pv;
        const hv = zv ? (0, PP.z)() : null;
        if (!hv || !(0, SP.d)()) return;
        const Sv = (0, PP.i)().findIndex((vv => vv.id === hv));
        (0, hP.r)(null !== (vv = null === (Pv = ev.current) || void 0 === Pv ? void 0 : Pv.children[Sv]) && void 0 !== vv ? vv : null)
      }), [zv]), 0 === Pv.length ? null : (0, lv.jsx)("div", {
        ref: ev,
        className: "ClientGameInventoryButtons",
        onPointerDown: vv => {
          vv.stopPropagation()
        },
        onPointerUp: vv => {
          vv.stopPropagation()
        },
        children: Pv.map((vv => {
          const zv = hv(vv.labelKey);
          return (0, lv.jsxs)(wv.j, {
            className: vv.className,
            disabled: vv.disabled,
            onClick: () => {
              (0, PP.r)(vv)
            },
            ariaLabel: vv.iconOnly ? zv : void 0,
            title: vv.iconOnly ? zv : void 0,
            children: [vv.icon && (0, lv.jsxs)("div", {
              className: "ClientGameInventoryButtonIcon",
              children: ["item" === vv.icon.kind && (0, lv.jsx)(eP.b, {
                itemName: vv.icon.name,
                amount: 0
              }), "image" === vv.icon.kind && (0, lv.jsx)("img", {
                src: vv.icon.src,
                alt: "",
                draggable: !1
              }), "icon" === vv.icon.kind && (0, lv.jsx)(Cv.b, {
                name: vv.icon.name
              })]
            }), !vv.iconOnly && zv]
          }, vv.id)
        }))
      })
    }
    var pP = Pv(36269),
      dP = Pv(2577),
      NP = Pv(9013),
      lP = Pv(36060),
      TP = Pv(36056);
    let WP = null;
    window.setShowInventoryAdsOverride = vv => {
      WP = vv
    };
    const wP = 24e4;
    var aP = Pv(1873);

    function sP(vv) {
      var zv;
      let {
        draggedInfo: {
          name: Pv,
          attributes: hv,
          amount: Sv
        },
        toAddRef: ev
      } = vv;
      return (0, lv.jsx)("div", {
        className: "DraggedInvenItem",
        ref: ev,
        children: (0, lv.jsx)(eP.b, {
          itemName: Pv,
          amount: Sv,
          enchantmentTier: null === hv || void 0 === hv || null === (zv = hv.customAttributes) || void 0 === zv ? void 0 : zv.enchantmentTier,
          bar: (0, aP.h)(hv)
        })
      })
    }

    function CP(vv) {
      let {
        className: zv = "",
        displayInfo: Pv,
        domRef: hv
      } = vv;
      return (0, lv.jsxs)("div", {
        className: `InvenHoveredItemInfo SmallTextBold ${zv}`,
        ref: hv,
        children: [(0, lv.jsx)(Fv.c, {
          text: (0, nv.sb)(Pv.name, {
            fontStyle: Pv.fontStyle
          })
        }), (0, lv.jsx)("div", {
          className: "InvenHoveredItemInfoDescription",
          children: (0, lv.jsx)(Fv.c, {
            text: Pv.desc
          })
        })]
      })
    }

    function iP(vv) {
      let {
        info: zv,
        draggedInfo: Pv
      } = vv;
      const hv = (0, Sv.useRef)(null);
      return (0, Sv.useLayoutEffect)((() => {
        const vv = hv.current,
          {
            left: Pv,
            top: Sv
          } = function(vv, zv, Pv, hv) {
            const Sv = hv.left * Pv.width / 100 + 4,
              ev = Pv.width - hv.right * Pv.width / 100 - 4 - zv.width,
              gv = hv.top * Pv.height / 100 + 4,
              pv = Pv.height - 4 - zv.height;
            return {
              left: Math.max(Sv, Math.min(vv.x - zv.width / 2, ev)),
              top: Math.max(gv, Math.min(vv.y - 48 - zv.height, pv))
            }
          }({
            x: zv.initTouchX,
            y: zv.initTouchY
          }, {
            width: vv.offsetWidth,
            height: vv.offsetHeight
          }, {
            width: window.innerWidth,
            height: window.innerHeight
          }, Av.c.get("notchSize"));
        vv.style.left = `${Pv}px`, vv.style.top = `${Sv}px`
      }), [zv]), (0, lv.jsxs)("div", {
        className: "LongHoldSplitInfoUI SmallTextBold",
        ref: hv,
        children: [(0, lv.jsx)("div", {
          className: "LongHoldSplitInfoUIInner",
          style: {
            width: Pv.amount / zv.maxAmount * 100 + "%"
          }
        }), (0, lv.jsxs)("div", {
          className: "LongHoldSplitInfoUIText",
          children: [Pv.amount, "/", zv.maxAmount]
        })]
      })
    }
    var cP = Pv(1035),
      GP = Pv.n(cP),
      mP = Pv(185);
    const jP = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onOpen: Pv,
        onClose: hv
      } = vv;
      const ev = (0, Sv.useRef)({
          pos: null
        }),
        [pv, dv] = (0, Sv.useState)([0, 0, 0, 0]),
        {
          userContext: Tv
        } = (0, fv.d)();
      (0, Ov.d)("ironChestOpenRequested", (vv => {
        let {
          pos: zv,
          ownerDbId: hv,
          cachedPasskey: Sv
        } = vv;
        if (ev.current.pos = zv, hv !== Tv.whamm) return null !== Sv ? (dv(Sv), void Wv(Sv)) : void Pv();
        Wv(pv)
      })), (0, Ov.d)("localEffectUpdated", (vv => {
        "Thief" === vv && hv()
      }));
      const Wv = vv => {
        const {
          pos: zv
        } = ev.current;
        Nv.gameBridge.send("openIronChest", {
          pos: zv,
          Yg: vv
        })
      };
      return (0, lv.jsx)(gv.c, {
        className: "IronChestPasskeyInputScreenOuter",
        close: hv,
        escDoesExit: !0,
        show: zv,
        togglePointerLock: !1,
        globallyUniqueKey: "IronChestPasskeyInputScreen",
        children: (0, lv.jsx)("div", {
          className: "IronChestPasskeyInputScreen",
          children: (0, lv.jsx)(fP, {
            Yg: pv,
            onPasskeyUpdated: dv,
            confirmText: "ironChest:tryUnlock",
            onConfirm: () => {
              Wv(pv)
            }
          })
        })
      })
    }));

    function fP(vv) {
      let {
        className: zv = "",
        Yg: Pv,
        onPasskeyUpdated: hv,
        confirmText: Sv,
        onConfirm: ev
      } = vv;
      const {
        t: gv
      } = (0, bv.x)();
      return (0, lv.jsxs)("div", {
        className: `${zv} IronChestPasskeyInput`,
        children: [(0, lv.jsx)("div", {
          className: "SmallTextBold IronChestPasskeyInputTitle",
          children: gv("ironChest:passkeyInputTitle")
        }), (0, lv.jsx)("div", {
          className: "IronChestPasskeyInputRow",
          children: new Array(mP.f.ironChestPasskeyLength).fill(0).map(((vv, zv) => (0, lv.jsx)(FP, {
            digit: Pv[zv],
            onPasskeyDigitUpdated: vv => {
              const Sv = [...Pv];
              Sv[zv] = vv, hv(Sv)
            }
          }, zv)))
        }), (0, lv.jsx)(wv.j, {
          className: "IronChestPasskeyInputConfirmButton",
          onClick: ev,
          children: gv(Sv)
        })]
      })
    }

    function FP(vv) {
      let {
        digit: zv,
        onPasskeyDigitUpdated: Pv
      } = vv;
      return (0, lv.jsx)("div", {
        className: "IronChestPasskeyDigitInputWrapper",
        children: (0, lv.jsxs)("div", {
          className: "IronChestPasskeyDigitInput",
          children: [(0, lv.jsx)(wv.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Pv(nv.d.mod(zv + 1, 10))
            },
            children: (0, lv.jsx)(Cv.b, {
              name: "angle-up"
            })
          }), (0, lv.jsx)("div", {
            className: "SmallTextBold IronChestPasskeyDigit",
            children: zv
          }), (0, lv.jsx)(wv.j, {
            className: "IronChestPasskeyChangeDigitButton",
            onClick: () => {
              Pv(nv.d.mod(zv - 1, 10))
            },
            children: (0, lv.jsx)(Cv.b, {
              name: "angle-down"
            })
          })]
        })
      })
    }
    var YP = Pv(9011),
      nP = Pv(36321),
      OP = Pv(36054);

    function DP(vv) {
      let {
        specialItemInfo: zv,
        setHovered: Pv,
        pointerDown: hv,
        pointerUp: ev,
        enchantingTablePosition: gv,
        enchantingTableBlockName: pv
      } = vv;
      const {
        t: Tv
      } = (0, bv.x)(), [Wv, av] = (0, Sv.useState)(null), [sv, Cv] = (0, Sv.useState)(null), iv = (0, dv.i)("auraPerLevel"), cv = Math.floor((0, Ov.h)("aura") / iv);
      (0, Sv.useEffect)((() => {
        if (!zv) return void av(null);
        let vv = !0;
        return Nv.gameBridge.query("enchantingOffer", {
          slot: zv.idx,
          name: zv.name,
          blockName: pv
        }).then((Pv => {
          var hv, Sv;
          let {
            perks: ev,
            options: gv
          } = Pv;
          if (!vv) return;
          const pv = {
            isEnchantable: ev.length > 0,
            possibleEnchantments: ev,
            options: gv.map((vv => {
              let {
                level: zv,
                odds: Pv
              } = vv;
              return {
                level: zv,
                possibilities: Object.fromEntries(Pv.map(((vv, zv) => [`Tier ${zv+1}`, vv])))
              }
            })),
            isAlreadyEnchanted: ev.length > 0 && void 0 !== (null === (hv = zv.attributes) || void 0 === hv || null === (Sv = hv.customAttributes) || void 0 === Sv ? void 0 : Sv.enchantmentTier)
          };
          av(pv), (vv => {
            const zv = vv.options.map((vv => Object.entries(vv.possibilities).map((vv => {
              let [zv, Pv] = vv;
              return {
                str: `${zv}: ${Pv>0?Pv<.01?Pv.toPrecision(1):Pv.toFixed(2):0}%\n`,
                style: {
                  color: nv.nb[zv]
                }
              }
            }))));
            Cv(zv)
          })(pv)
        })), () => {
          vv = !1
        }
      }), [zv, gv, pv]);
      const Gv = [];
      for (let Sv = 0; Sv < nP.d; Sv++) {
        const vv = null === Wv || void 0 === Wv ? void 0 : Wv.options[Sv],
          hv = !vv || vv.level > cv;
        Gv.push((0, lv.jsx)(wv.d, {
          className: "EnchantmentButton",
          onPointerEnter: vv ? vv => null === Pv || void 0 === Pv ? void 0 : Pv()(!0, {
            name: "",
            desc: sv[Sv]
          }, vv) : void 0,
          onPointerLeave: vv ? () => null === Pv || void 0 === Pv ? void 0 : Pv()(!1) : void 0,
          onClick: hv ? void 0 : () => {
            Nv.gameBridge.send("enchantItem", {
              slot: zv.idx,
              level: vv.level,
              tablePos: gv
            }), av(null)
          },
          disabled: hv,
          children: vv ? (0, lv.jsxs)(lv.Fragment, {
            children: [(0, lv.jsxs)("h1", {
              className: "EnchantmentLevels",
              children: [(0, lv.jsxs)("span", {
                className: "EnchantmentLevelsCost",
                children: [Tv("enchantments:cost"), ": "]
              }), " ", Tv("enchantments:levels", {
                level: vv.level
              })]
            }), (0, lv.jsxs)("div", {
              className: "EnchantmentPossibilities",
              children: [(0, lv.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, lv.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Tv("enchantments:tier")
                }), Object.entries(vv.possibilities).map((vv => {
                  let [zv, Pv] = vv;
                  return 0 === Pv ? null : (0, lv.jsx)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nv.nb[zv]
                    },
                    children: zv
                  }, zv)
                }))]
              }), (0, lv.jsxs)("div", {
                className: "EnchantmentPossibilitiesRow",
                children: [(0, lv.jsx)("span", {
                  className: "EnchantmentPossibilitiesTitle",
                  children: Tv("enchantments:odds")
                }), Object.entries(vv.possibilities).map((vv => {
                  let [zv, Pv] = vv;
                  return 0 === Pv ? null : (0, lv.jsxs)("span", {
                    className: "EnchantmentPossibilitiesValue",
                    style: {
                      color: nv.nb[zv]
                    },
                    children: [Pv > 0 && Pv < .1 ? "<0.1" : Pv.toFixed(0 < Pv && Pv < .95 ? 1 : 0), "%"]
                  }, zv)
                }))]
              })]
            })]
          }) : !1 === (null === Wv || void 0 === Wv ? void 0 : Wv.isEnchantable) ? (0, lv.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Tv("enchantments:notEnchantable")
          }) : (0, lv.jsx)("h1", {
            className: "EnchantmentLevels",
            children: Tv("enchantments:enterItem")
          })
        }, Sv))
      }
      return (0, lv.jsxs)("div", {
        className: "EnchantingTable",
        children: [(0, lv.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: pv
        }), (0, lv.jsxs)("div", {
          className: "EnchantingTableBody",
          children: [(0, lv.jsxs)("div", {
            className: "EnchantingTableLeft",
            children: [(0, lv.jsx)(OP.b, {
              idx: TP.h,
              setHovered: vv => {
                null === Pv || void 0 === Pv || Pv(TP.h)(vv)
              },
              pointerDown: hv,
              pointerUp: ev,
              draggedInfo: null,
              specialItemInfo: zv,
              variation: "Enchanting Table"
            }), Wv && Wv.possibleEnchantments.length > 0 && (0, lv.jsxs)("div", {
              className: "PossibleEnchantments",
              children: [(0, lv.jsx)("h2", {
                children: "Possible Perks:"
              }), Wv.possibleEnchantments.map((vv => (0, lv.jsxs)(Sv.Fragment, {
                children: [(0, lv.jsxs)("div", {
                  className: "PossibleEnchantmentName",
                  children: [(0, lv.jsx)("div", {
                    className: "PossibleEnchantmentIcon",
                    children: (0, lv.jsx)(eP.b, {
                      itemName: `${vv} Enchantment`,
                      amount: 1
                    })
                  }), (0, lv.jsx)("div", {
                    className: "PossibleEnchantmentNameText",
                    children: vv
                  })]
                }), (0, lv.jsx)("div", {
                  className: "PossibleEnchantmentDescription",
                  children: Tv((0, YP.n)(vv).translationKey)
                })]
              }, vv)))]
            })]
          }), (0, lv.jsxs)("div", {
            className: "EnchantmentOptions",
            children: [Wv && Wv.isAlreadyEnchanted && (0, lv.jsx)("div", {
              className: "AlreadyEnchantedWarning",
              children: Tv("enchantments:alreadyEnchanted")
            }), Gv]
          })]
        })]
      })
    }
    var KP = Pv(36323);

    function VP(vv) {
      var zv;
      let {
        specialItemInfo: Pv,
        setSpecialItemInfo: hv,
        setHovered: ev,
        pointerDown: gv,
        pointerUp: pv
      } = vv;
      const {
        t: dv
      } = (0, bv.x)(), Tv = (0, Ov.g)("inventory", (vv => vv.freeSlots)), [Wv, av] = (0, Sv.useState)(null);
      (0, Sv.useEffect)((() => {
        if (Pv) {
          const vv = (0, KP.d)(Pv.name, Pv.amount);
          av({
            salvageable: !!vv,
            produces: vv
          })
        } else av(null)
      }), [Pv, null === Pv || void 0 === Pv ? void 0 : Pv.name, null === Pv || void 0 === Pv ? void 0 : Pv.amount]);
      const sv = !!Pv && !(null === Wv || void 0 === Wv || !Wv.salvageable) && !(null !== (zv = Wv.produces) && void 0 !== zv && zv.some((vv => {
        let {
          amt: zv
        } = vv;
        return zv < 1
      })));
      return (0, lv.jsxs)("div", {
        className: "SalvagingTable",
        children: [(0, lv.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: dv("item:salvagingTable")
        }), (0, lv.jsxs)("div", {
          className: "SalvagingTableBody",
          children: [(0, lv.jsx)("div", {
            className: "SalvagingTableLeft",
            children: (0, lv.jsx)(OP.b, {
              idx: TP.h,
              setHovered: vv => {
                null === ev || void 0 === ev || ev(TP.h)(vv)
              },
              pointerDown: gv,
              pointerUp: pv,
              draggedInfo: null,
              specialItemInfo: Pv,
              variation: "Salvaging Table"
            })
          }), (0, lv.jsx)("div", {
            className: "SalvagingTableRight",
            children: (0, lv.jsx)(wv.d, {
              className: "SalvageButton",
              onClick: sv ? () => {
                const {
                  idx: vv,
                  name: zv,
                  amount: Sv
                } = Pv;
                Nv.gameBridge.send("salvageItem", {
                  slot: vv,
                  name: zv,
                  amount: Sv
                }) && (av(null), hv(null))
              } : void 0,
              disabled: !sv,
              children: Wv ? Wv.salvageable ? Wv.produces.some((vv => {
                let {
                  amt: zv
                } = vv;
                return zv < 1
              })) ? (0, lv.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, lv.jsx)("div", {
                  className: "SalvageText Error",
                  children: dv("salvagingTable:notEnoughResources")
                })
              }) : Tv < Wv.produces.length ? (0, lv.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, lv.jsx)("div", {
                  className: "SalvageText Error",
                  children: dv("salvagingTable:notEnoughInventorySpace")
                })
              }) : (0, lv.jsxs)("div", {
                className: "SalvageButtonText",
                children: [(0, lv.jsx)("div", {
                  className: "SalvageText",
                  children: dv("salvagingTable:salvage")
                }), (0, lv.jsx)("div", {
                  className: "SalvageIcons",
                  children: Wv.produces.map(((vv, zv) => {
                    let {
                      item: Pv,
                      amt: hv
                    } = vv;
                    return (0, lv.jsx)("div", {
                      className: "SalvageIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: Pv,
                        amount: Math.floor(hv)
                      })
                    }, zv)
                  }))
                })]
              }) : (0, lv.jsx)("div", {
                className: "SalvageButtonText",
                children: (0, lv.jsx)("div", {
                  className: "SalvageText Error",
                  children: dv("salvagingTable:unsalvageable")
                })
              }) : (0, lv.jsx)(lv.Fragment, {})
            })
          })]
        })]
      })
    }
    var UP = Pv(202),
      RP = Pv(9101),
      xP = Pv(2540),
      tP = Pv(1647),
      qP = Pv(8388),
      IP = Pv(8380),
      QP = Pv(1630),
      ZP = Pv(1952),
      AP = Pv(1387),
      LP = Pv(2013);

    function HP(vv, zv, Pv) {
      const hv = vv.trim().toLowerCase();
      if ("" === hv) return 0;
      let Sv = null;
      for (const ev of zv) {
        const vv = ev.toLowerCase().indexOf(hv);
        if (0 === vv) return 0;
        vv > 0 && (Sv = 1)
      }
      if (null !== Sv) return Sv;
      for (const ev of Pv)
        if (ev.toLowerCase().includes(hv)) return 2;
      return null
    }

    function MP(vv) {
      return vv.map((vv => {
        var zv;
        return vv ? {
          name: vv.name,
          amount: null !== (zv = vv.amount) && void 0 !== zv ? zv : 1
        } : null
      }))
    }

    function yP(vv) {
      return vv < 1e3 ? `${vv}` : vv < 1e4 ? Math.floor(vv / 100) / 10 + "k" : `${Math.floor(vv/1e3)}k`
    }
    var BP = Pv(36329);
    const JP = wv.d,
      EP = {
        initialDelayMs: 400,
        intervalMs: 100
      },
      oP = () => {
        const vv = (0, AP.f)();
        return vv ? vv.getPadRepeatTiming(EP) : EP
      };

    function bP(vv, zv, Pv) {
      var hv, Sv;
      const ev = (0, NP.z)(zv, vv);
      let gv = null === (hv = zv[vv]) || void 0 === hv ? void 0 : hv.description;
      if (Pv && (null === (Sv = (0, BP.h)().get(vv)) || void 0 === Sv || !Sv.hideIngredients)) {
        gv ? (gv = (0, nv.sb)(gv), gv.push({
          str: "\n"
        })) : gv = [], gv.push({
          str: "\n"
        }), gv.push({
          str: "Can be crafted from:\n"
        });
        for (const vv of Pv) "string" === typeof vv && (gv.push({
          icon: vv,
          style: {
            fontSize: "1.5em"
          }
        }), gv.push({
          str: " "
        }), gv.push(...(0, nv.sb)((0, NP.z)(zv, vv))), gv.push({
          str: "\n"
        }))
      }
      return {
        name: ev,
        desc: gv
      }
    }

    function rP(vv) {
      let {
        name: zv,
        sp: Pv
      } = vv;
      return `${zv}_${Pv}`
    }

    function kP(vv) {
      var zv;
      let {
        onClick: Pv,
        itemName: hv,
        recipeId: ev,
        isSelected: gv,
        haveIngredients: pv,
        craftable: dv,
        setHovered: Nv,
        padActions: Tv,
        marked: Wv,
        lock: wv,
        itemInfo: av
      } = vv;
      const sv = (0, Sv.useRef)(null);
      return (0, qP.d)(sv, {
        press: vv => !pv || "secondary" === vv && !dv ? (Tv.refuse(), !1) : "primary" === vv ? (Tv.choose(), !0) : Tv.craft(),
        release: Tv.stopCraft,
        hints: {
          primary: "inventoryChooseRecipe",
          secondary: "inventoryCraft"
        }
      }), (0, lv.jsxs)("div", {
        ref: sv,
        className: GP()("InvenItem", {
          CraftableItemNotEnoughIngredients: !pv && !wv,
          CraftableItemMarked: Wv,
          CraftableItemLocked: void 0 !== wv,
          CraftableItemLockedFar: (null !== (zv = null === wv || void 0 === wv ? void 0 : wv.stepsAway) && void 0 !== zv ? zv : 1) > 1
        }),
        "data-recipe-key": ev,
        "data-pad-inventory-default": gv ? "" : void 0,
        onClick: Pv,
        style: {
          cursor: gv ? null : "pointer"
        },
        onPointerEnter: vv => {
          null === Nv || void 0 === Nv || Nv(!0, bP(hv, av)), !gv && (0, QP.q)(vv.nativeEvent) && (0, IP.j)() && Pv()
        },
        onPointerLeave: () => {
          null === Nv || void 0 === Nv || Nv(!1)
        },
        children: [(0, lv.jsx)(eP.b, {
          itemName: hv,
          amount: 1
        }), Wv && (0, lv.jsx)("span", {
          className: "CraftableItemMarkBadge",
          "aria-hidden": "true",
          children: "!"
        }), wv && (0, lv.jsxs)("span", {
          className: "CraftableItemLockTag",
          children: [(0, lv.jsx)(Cv.b, {
            name: "lock"
          }), (0, lv.jsx)(Fv.c, {
            text: wv.tag
          })]
        })]
      })
    }

    function XP(vv) {
      let {
        idx: zv,
        status: Pv,
        shownItem: hv,
        dim: ev,
        onHoverStart: gv,
        onHoverEnd: pv,
        onPadBack: dv
      } = vv;
      const Nv = (0, Sv.useRef)(null);
      (0, qP.d)(Nv, {
        press: () => !1,
        back: dv,
        hints: {
          back: "inventoryBackToRecipes"
        }
      });
      const Tv = Pv.need > 0 ? Math.min(Pv.have / Pv.need, 1) : 1;
      return (0, lv.jsxs)("div", {
        ref: Nv,
        className: GP()("CupTile", {
          Short: Pv.missing > 0
        }),
        style: {
          width: ev,
          height: ev
        },
        "data-craft-ingredient": zv,
        onPointerEnter: gv,
        onPointerLeave: pv,
        children: [(0, lv.jsx)("div", {
          className: "CupFill",
          style: {
            transform: `scaleY(${Tv})`
          }
        }), (0, lv.jsx)(eP.b, {
          itemName: hv,
          amount: 0
        }), (0, lv.jsxs)("div", {
          className: "CupCount SmallTextBold",
          children: [yP(Pv.have), "/", yP(Pv.need)]
        })]
      })
    }

    function uP(vv) {
      var zv, Pv, hv, ev, gv;
      let {
        show: pv,
        recipeItem: {
          name: dv,
          sp: Tv,
          requires: Wv,
          produces: wv,
          haveIngredients: av
        },
        detail: sv,
        onCraft: Cv,
        setHovered: iv,
        craftButtonRef: cv,
        onPadBack: Gv,
        showPadShortcut: mv,
        refusedCount: jv,
        lock: fv,
        itemInfo: Yv
      } = vv;
      const {
        t: nv
      } = (0, bv.x)(), Ov = null !== sv && !sv.roomForOne, Dv = null !== (zv = null === sv || void 0 === sv ? void 0 : sv.craftAllTimes) && void 0 !== zv ? zv : 0, Kv = function(vv, zv) {
        return vv.map((vv => {
          let {
            items: Pv,
            amt: hv
          } = vv, Sv = 0;
          const ev = [];
          for (const gv of Pv) {
            const vv = zv(gv);
            Sv += vv, vv > 0 && ev.push(gv)
          }
          return 0 === ev.length && ev.push(Pv[0]), {
            shownItems: ev,
            need: hv,
            have: Sv,
            missing: Math.max(hv - Sv, 0)
          }
        }))
      }(Wv, (vv => {
        var zv;
        return null !== (zv = null === sv || void 0 === sv ? void 0 : sv.amounts[vv]) && void 0 !== zv ? zv : 0
      }));
      let Vv = "4rem",
        Uv = 4;
      3 === Wv.length || 4 === Wv.length ? Vv = "3.75rem" : Wv.length >= 5 && (Vv = "3rem"), 4 === Wv.length ? Uv = 2 : Wv.length <= 6 && (Uv = 3);
      const Rv = `calc(${Uv} * ${Vv} + ${Uv-1} * 0.4rem + 1px)`,
        xv = (0, Sv.useRef)(null),
        tv = (0, Sv.useRef)(null);
      (0, Sv.useLayoutEffect)((() => {
        xv.current.scrollTop = 0
      }), [dv, Tv]);
      const qv = (0, Sv.useRef)(jv);
      (0, Sv.useEffect)((() => {
        if (jv === qv.current) return;
        qv.current = jv;
        const vv = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? [{
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
        for (const hv of null !== (zv = null === (Pv = xv.current) || void 0 === Pv ? void 0 : Pv.querySelectorAll(".CupTile.Short, .CantCraftInfo")) && void 0 !== zv ? zv : []) {
          var zv, Pv;
          hv.animate(vv, {
            duration: 280,
            easing: "ease-out"
          })
        }
      }), [jv]);
      const Iv = (vv, zv, Pv) => {
          var hv;
          if ((0, BP.h)().has(dv)) return void(Pv && clearInterval(Qv.current));
          const Sv = null !== (hv = null === sv || void 0 === sv ? void 0 : sv.resultStackable) && void 0 !== hv && hv,
            ev = MP(Nv.gameBridge.latest("inventory").player),
            {
              Cp: gv,
              Vl: pv,
              amountAddedToSlot: lv
            } = Nv.gameBridge.send("craftRecipe", {
              name: dv,
              sp: Tv,
              times: zv || vv && Sv ? null : 1
            });
          if (gv > 0) {
            const zv = [],
              hv = new Set(Wv.flatMap((vv => {
                let {
                  items: zv
                } = vv;
                return zv
              }))),
              gv = function(vv, zv, Pv) {
                const hv = [];
                for (let Sv = 0; Sv < vv.length; Sv++) {
                  const ev = vv[Sv];
                  if (!ev || !Pv.has(ev.name)) continue;
                  const gv = zv[Sv],
                    pv = (null === gv || void 0 === gv ? void 0 : gv.name) === ev.name ? gv.amount : 0;
                  pv < ev.amount && hv.push({
                    idx: Sv,
                    itemName: ev.name,
                    amount: ev.amount - pv
                  })
                }
                return hv
              }(ev, MP(Nv.gameBridge.latest("inventory").player), hv).slice(0, 12),
              Tv = Pv ? 0 : Math.min(50, 400 / gv.length),
              av = Pv ? 220 : 320;
            for (const vv of gv) {
              var wv;
              const Pv = Wv.findIndex((zv => {
                  let {
                    items: Pv
                  } = zv;
                  return Pv.includes(vv.itemName)
                })),
                hv = null === (wv = xv.current) || void 0 === wv ? void 0 : wv.querySelector(`[data-craft-ingredient="${Pv}"]`),
                Sv = (0, NP.i)(vv.idx);
              hv && Sv && zv.push({
                kind: "ingredient",
                itemName: vv.itemName,
                amount: vv.amount,
                Vl: vv.idx,
                from: Sv,
                to: (0, NP.i)(hv),
                delayMs: Math.round(zv.length * Tv),
                durationMs: av
              })
            }
            let sv;
            if (null !== pv && lv > 0 && tv.current) {
              const vv = zv.length > 0 ? zv[zv.length - 1].delayMs + .6 * av : 0;
              sv = {
                itemName: dv,
                amount: lv,
                Vl: pv,
                from: (0, NP.i)(tv.current),
                delayMs: Math.round(vv)
              }
            }
            Cv(sv, vv && !Sv ? pv : null, zv), pP.c.play("wood1", .5).rate(1.75)
          }
        },
        Qv = (0, Sv.useRef)(null);
      (0, Sv.useEffect)((() => () => {
        clearInterval(Qv.current)
      }), []);
      const Zv = (vv, zv) => {
          Iv(vv, !1, !1), clearInterval(Qv.current), zv && (Qv.current = setTimeout((() => {
            Qv.current = setInterval((() => {
              Iv(vv, !1, !0)
            }), zv.intervalMs)
          }), zv.initialDelayMs))
        },
        Av = () => {
          clearInterval(Qv.current)
        },
        Lv = !av || Ov || Boolean(fv),
        Hv = (0, Sv.useRef)(null),
        Mv = null !== (Pv = null === (hv = (0, LP.d)()) || void 0 === hv ? void 0 : hv.hideButtonHints) && void 0 !== Pv && Pv,
        yv = null !== (ev = null === (gv = (0, AP.f)()) || void 0 === gv ? void 0 : gv.getBoundButton("inventorySecondary")) && void 0 !== ev ? ev : null,
        Bv = () => !Lv && (Iv(!1, !0, !1), !0);
      (0, qP.d)(cv, {
        press: vv => "secondary" === vv ? Bv() : !Lv && (Zv(!1, oP()), !0),
        release: Av,
        back: Gv,
        hints: {
          primary: "inventoryCraft",
          secondary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      }), (0, qP.d)(Hv, {
        press: Bv,
        back: Gv,
        hints: {
          primary: "inventoryCraftAll",
          back: "inventoryBackToRecipes"
        }
      });
      const [Jv, Ev] = (0, Sv.useState)(0), [ov, rv] = (0, Sv.useState)(null);
      (0, Sv.useEffect)((() => {
        if (!0 === pv) {
          Ev(0);
          const vv = setInterval((() => {
            Ev((vv => vv + 1))
          }), 1e3);
          return () => {
            clearInterval(vv)
          }
        }
        return () => {}
      }), [pv]);
      const kv = null === sv || void 0 === sv ? void 0 : sv.ingredientsCraftedFrom,
        Xv = (0, Sv.useRef)(iv);
      (0, Sv.useEffect)((() => {
        Xv.current = iv
      }), [iv]);
      const uv = !(null === fv || void 0 === fv || !fv.hideIngredients);
      (0, Sv.useEffect)((() => {
        var vv, zv;
        if (!ov) return;
        if (uv) return rv(null), void(null === (zv = Xv.current) || void 0 === zv || zv.call(Xv, !1));
        const Pv = ov[Jv % ov.length];
        null === (vv = Xv.current) || void 0 === vv || vv.call(Xv, !0, bP(Pv, Yv, null === kv || void 0 === kv ? void 0 : kv[Pv]))
      }), [ov, Jv, Yv, kv, uv]);
      const vz = !!fv,
        zz = (0, Sv.useRef)(!1);
      (0, Sv.useEffect)((() => {
        var vv;
        vz && (clearInterval(Qv.current), uv && zz.current && (zz.current = !1, null === (vv = Xv.current) || void 0 === vv || vv.call(Xv, !1)))
      }), [vz, uv]);
      const Pz = (0, NP.z)(Yv, dv);
      return (0, lv.jsxs)("div", {
        ref: xv,
        className: "CraftableInfo SmallTextBold",
        children: [(0, lv.jsx)("div", {
          className: "CraftableHeader",
          children: (0, lv.jsx)(Fv.c, {
            text: Pz
          })
        }), !uv && (0, lv.jsx)("div", {
          className: GP()("CraftableIngredients", {
            Compact: Wv.length >= 5
          }),
          style: {
            maxWidth: Rv
          },
          children: Kv.map(((vv, zv) => {
            const Pv = vv.shownItems[Jv % vv.shownItems.length];
            return (0, lv.jsx)(XP, {
              idx: zv,
              status: vv,
              shownItem: Pv,
              dim: Vv,
              onHoverStart: () => {
                rv(vv.shownItems)
              },
              onHoverEnd: () => {
                rv(null), null === iv || void 0 === iv || iv(!1)
              },
              onPadBack: Gv
            }, zv)
          }))
        }), fv && (0, lv.jsx)("div", {
          className: "CantCraftInfo CraftableLockReason",
          children: (0, lv.jsx)(Fv.c, {
            text: fv.reason
          })
        }), !fv && (!av || Ov) && (0, lv.jsxs)("div", {
          className: "CantCraftInfo",
          children: [!av && "Missing ingredients", (0, lv.jsx)("br", {}), Ov && "Inventory is full"]
        }), !uv && (0, lv.jsxs)(lv.Fragment, {
          children: [(0, lv.jsxs)(JP, {
            ref: cv,
            className: "DoCraftButton",
            onPointerDown: vv => {
              Zv((0, NP.A)(vv), (0, QP.q)(vv.nativeEvent) ? oP() : EP)
            },
            onPointerUp: Av,
            onPointerLeave: Av,
            disabled: Lv,
            children: [mv && yv && !Lv && !Mv && (0, lv.jsx)(ZP.d, {
              className: "CraftShortcutGlyph",
              glyph: yv
            }), (0, lv.jsx)("div", {
              ref: tv,
              className: "DoCraftItem",
              onPointerEnter: () => {
                zz.current = !0, null === iv || void 0 === iv || iv(!0, bP(dv, Yv))
              },
              onPointerLeave: () => {
                zz.current = !1, null === iv || void 0 === iv || iv(!1)
              },
              children: (0, lv.jsx)(eP.b, {
                itemName: dv,
                amount: wv
              })
            })]
          }), (0, lv.jsxs)(JP, {
            ref: Hv,
            className: "DoCraftAllButton",
            onPointerDown: vv => {
              Iv((0, NP.A)(vv), !0, !1)
            },
            disabled: Lv,
            children: [(0, lv.jsx)("span", {
              className: "CraftAllLabel",
              children: nv("general:craftAll")
            }), Dv > 0 && (0, lv.jsxs)("span", {
              className: "CraftAllCount",
              children: ["x", yP(Dv)]
            })]
          })]
        })]
      })
    }

    function vh(vv) {
      let {
        selectedIdx: zv,
        hidden: Pv
      } = vv;
      const hv = (0, SP.m)(),
        ev = (0, Sv.useRef)(null);
      return (0, Sv.useLayoutEffect)((() => {
        const vv = ev.current,
          hv = null === vv || void 0 === vv ? void 0 : vv.parentElement;
        if (!hv || !vv) return;
        const Sv = hv.querySelector(".CraftableItems"),
          gv = () => {
            var ev, gv;
            if (Pv) return void(vv.style.opacity = "0");
            const pv = null === Sv || void 0 === Sv ? void 0 : Sv.children[zv],
              dv = null === (ev = null !== (gv = null === pv || void 0 === pv ? void 0 : pv.querySelector(".InvenItem")) && void 0 !== gv ? gv : pv) || void 0 === ev ? void 0 : ev.getBoundingClientRect();
            if (!dv || 0 === dv.width) return void(vv.style.opacity = "0");
            const Nv = hv.getBoundingClientRect();
            vv.style.opacity = "1", vv.style.width = `${dv.width}px`, vv.style.height = `${dv.height}px`, vv.style.transform = `translate(${dv.left-Nv.left+hv.scrollLeft}px, ${dv.top-Nv.top+hv.scrollTop}px)`
          };
        gv();
        const pv = new MutationObserver(gv),
          dv = new ResizeObserver(gv);
        return dv.observe(hv), Sv && (pv.observe(Sv, {
          childList: !0,
          subtree: !0
        }), dv.observe(Sv)), () => {
          pv.disconnect(), dv.disconnect()
        }
      }), [zv, Pv]), (0, lv.jsx)("div", {
        ref: ev,
        className: GP()("SelectionReticle", {
          Secondary: hv
        })
      })
    }

    function zh(vv, zv, Pv) {
      return vv ? (0, UP.b)(RP.g, vv) ? Ph(vv, zv, Pv) : vv : Pv("classicGame:handCrafting")
    }

    function Ph(vv, zv, Pv) {
      var hv;
      const Sv = null === (hv = zv[vv]) || void 0 === hv ? void 0 : hv.displayName;
      if ("string" === typeof Sv) return Pv(Sv);
      const ev = Nv.gameBridge.latest("hiddenPlayerNames");
      return Array.isArray(Sv) ? Sv.map((vv => {
        if ("string" === typeof vv) return vv;
        if ("translationKey" in vv) return Pv(vv.translationKey, (0, bv.i)(vv.params, ev));
        if ("str" in vv) {
          if ("string" === typeof vv.str) return vv.str;
          if ("translationKey" in vv.str) return Pv(vv.str.translationKey, (0, bv.i)(vv.str.params, ev))
        }
        return ""
      })).join("") : Sv && "translationKey" in Sv ? Pv(Sv.translationKey, (0, bv.i)(Sv.params, ev)) : vv
    }

    function hh(vv, zv) {
      return vv === zv || null !== vv && null !== zv && vv.name === zv.name && vv.sp === zv.sp
    }

    function Sh(vv) {
      var zv, Pv, hv;
      let {
        show: ev,
        onCraft: gv,
        dispatchSelectedCraftable: pv,
        selectedCraftable: dv,
        craftingStation: Tv,
        setHovered: Wv
      } = vv;
      const {
        t: wv
      } = (0, bv.x)(), [av, sv] = (0, Sv.useState)(""), [Cv, iv] = (0, Sv.useState)(0);
      (0, Sv.useEffect)((() => {
        ev || (sv(""), iv((vv => vv + 1)))
      }), [ev]);
      const [cv, Gv] = (0, Sv.useState)(Tv);
      cv !== Tv && (Gv(Tv), "" !== av && (sv(""), iv((vv => vv + 1))));
      const mv = (0, Sv.useRef)(null),
        jv = (0, Sv.useRef)(null),
        fv = (0, IP.m)(),
        Fv = fv.showing && "recipe" === fv.kind,
        [Yv, nv] = (0, Sv.useState)(0),
        Dv = null !== Tv && void 0 !== Tv ? Tv : null,
        Kv = (0, Sv.useRef)(null),
        Vv = vv => {
          return !((zv = Kv.current) === (Pv = vv) || null !== zv && null !== Pv && zv.station === Pv.station && hh(zv.recipe, Pv.recipe)) && (Kv.current = vv, Nv.gameBridge.send("focusCrafting", vv), !0);
          var zv, Pv
        };
      Vv(ev ? {
        station: Dv,
        recipe: (null === (zv = Kv.current) || void 0 === zv ? void 0 : zv.station) === Dv ? Kv.current.recipe : null
      } : null);
      let Uv = Nv.gameBridge.latest("crafting");
      const Rv = (0, Ov.h)("itemInfo"),
        xv = "" !== av.trim(),
        tv = (0, BP.C)(),
        qv = (0, BP.A)(),
        Iv = (0, BP.G)(),
        Qv = function(vv, zv) {
          const [Pv, hv] = (0, Sv.useState)(!1);
          (0, Sv.useEffect)((() => {
            if (!vv) return void hv(!1);
            const zv = setTimeout((() => {
              hv(!0)
            }), 0);
            return () => {
              clearTimeout(zv)
            }
          }), [vv]);
          const ev = vv && Pv,
            gv = (0, Sv.useRef)({
              station: zv,
              at: new Map
            });
          return (gv.current.station !== zv || !ev && gv.current.at.size > 0) && (gv.current = {
            station: zv,
            at: new Map
          }), ev ? gv.current.at : null
        }(ev, Tv);
      let Zv = Uv.recipes.filter((vv => {
        let {
          listed: zv
        } = vv;
        return zv
      }));
      if (xv) {
        const vv = [];
        for (const zv of Uv.recipes) {
          var Av;
          const Pv = null !== (Av = qv.get(zv.name)) && void 0 !== Av && Av.hideIngredients ? [] : zv.requires.flatMap((vv => {
              let {
                items: zv
              } = vv;
              return zv.flatMap((vv => [vv, Ph(vv, Rv, wv)]))
            })),
            hv = HP(av, [zv.name, Ph(zv.name, Rv, wv)], Pv);
          null !== hv && vv.push({
            item: zv,
            rank: hv
          })
        }
        vv.sort(((vv, zv) => vv.rank - zv.rank)), Zv = vv.map((vv => {
          let {
            item: zv
          } = vv;
          return zv
        }))
      } else {
        if (Qv && Qv.size > 0) {
          const vv = Uv.recipes.filter((vv => !vv.listed && Qv.has(rP(vv))));
          Zv = Zv.concat(vv)
        }
        Zv = (0, BP.o)(Zv, tv, qv, Iv), Qv && (Zv = (0, BP.k)(Zv, Qv, rP))
      }
      const Lv = vv => Zv.find((zv => rP(zv) === vv)),
        Hv = `${Tv}|${av}`,
        [Mv, yv] = (0, Sv.useState)(null),
        Bv = (null === Mv || void 0 === Mv ? void 0 : Mv.context) === Hv ? Mv.key : null,
        Jv = dv ? rP(dv) : null,
        Ev = null !== (Pv = null !== (hv = Lv(Jv)) && void 0 !== hv ? hv : Lv(Bv)) && void 0 !== Pv ? Pv : Zv[0],
        ov = Ev ? rP(Ev) : null,
        rv = Ev ? {
          name: Ev.name,
          sp: Ev.sp
        } : null;
      ev && Vv({
        station: Dv,
        recipe: rv
      }) && (Uv = Nv.gameBridge.latest("crafting")), ov !== Jv && ov !== Bv && yv(ov ? {
        context: Hv,
        key: ov
      } : null), (0, Sv.useEffect)((() => () => {
        Kv.current = null, Nv.gameBridge.send("focusCrafting", null)
      }), []);
      const kv = hh(Uv.detail, rv) ? Uv.detail : null,
        Xv = null !== kv && !kv.roomForOne,
        uv = Zv.findIndex((vv => rP(vv) === rP(Ev))),
        vz = () => jv.current ? (0, qP.b)(jv.current) : null,
        zz = (0, Sv.useRef)(null),
        Pz = (0, Sv.useRef)(0);
      Pz.current++;
      const hz = Pz.current;
      (0, Sv.useEffect)((() => {
        const vv = zz.current;
        if (!vv || hz <= vv.afterRender) return;
        if (zz.current = null, vv.key !== ov) return;
        const zv = vz();
        var Pv;
        null !== zv && void 0 !== zv && zv.press("primary") && !vv.Vp && (null === (Pv = zv.release) || void 0 === Pv || Pv.call(zv))
      }));
      const Sz = vv => {
          const zv = {
            name: vv.name,
            sp: vv.sp
          };
          return {
            choose: () => {
              pv(zv), (0, hP.r)(jv.current)
            },
            craft: () => {
              var vv, Pv;
              return pv(zv), rP(zv) !== rP(Ev) ? (zz.current = {
                key: rP(zv),
                Vp: !0,
                afterRender: Pz.current
              }, !0) : null !== (vv = null === (Pv = vz()) || void 0 === Pv ? void 0 : Pv.press("primary")) && void 0 !== vv && vv
            },
            stopCraft: () => {
              var vv, zv;
              zz.current ? zz.current.Vp = !1 : null === (vv = vz()) || void 0 === vv || null === (zv = vv.release) || void 0 === zv || zv.call(vv)
            },
            refuse: () => {
              rP(zv) !== rP(Ev) && pv(zv), nv((vv => vv + 1))
            }
          }
        },
        ez = () => {
          var vv, zv, Pv;
          (0, hP.r)(null !== (vv = null === (zv = mv.current) || void 0 === zv || null === (Pv = zv.querySelector(".CraftableItems")) || void 0 === Pv ? void 0 : Pv.children[uv]) && void 0 !== vv ? vv : null)
        },
        gz = Zv.map(rP).join("|"),
        pz = (0, Sv.useRef)(gz);
      return (0, Sv.useEffect)((() => {
        pz.current !== gz && (pz.current = gz, Fv && uv >= 0 && (0, IP.j)() && ez())
      })), (0, lv.jsxs)("div", {
        className: "Craftables",
        children: [(0, lv.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: zh(Tv, Rv, wv)
        }), (0, lv.jsxs)("div", {
          className: "CraftablesBody",
          children: [(0, lv.jsx)(tP.c, {
            className: "CraftingSearch",
            placeholderText: wv("general:searchRecipes"),
            defaultValue: av,
            maxLength: 100,
            onValueChange: vv => {
              sv(vv)
            },
            blurOnEnter: !0
          }, Cv), 0 === Zv.length && xv && (0, lv.jsx)("div", {
            className: "CraftingNoMatches SmallTextBold",
            children: wv("general:noRecipesMatchSearch")
          }), Zv.length > 0 && (0, lv.jsxs)(lv.Fragment, {
            children: [(0, lv.jsxs)("div", {
              ref: mv,
              className: "CraftablesLeftSide",
              children: [(0, lv.jsx)(xP.b, {
                lazyLoadedClassName: "CraftableItems",
                observerUpdateDeps: [JSON.stringify(Zv.map((vv => {
                  let {
                    name: zv,
                    sp: Pv,
                    haveIngredients: hv
                  } = vv;
                  return {
                    name: zv,
                    sp: Pv,
                    haveIngredients: hv
                  }
                })))],
                observing: ev,
                children: Zv.map((vv => {
                  const {
                    name: zv,
                    sp: Pv,
                    haveIngredients: hv
                  } = vv, Sv = rP(vv);
                  return (0, lv.jsx)(kP, {
                    recipeId: Sv,
                    itemName: zv,
                    onClick: () => {
                      pv({
                        name: zv,
                        sp: Pv
                      })
                    },
                    isSelected: rP(Ev) === Sv,
                    haveIngredients: hv,
                    craftable: hv && !qv.has(zv) && !(rP(Ev) === Sv && Xv),
                    setHovered: Wv,
                    padActions: Sz(vv),
                    marked: tv.has(zv),
                    lock: qv.get(zv),
                    itemInfo: Rv
                  }, Sv)
                }))
              }), (0, lv.jsx)(vh, {
                selectedIdx: uv,
                hidden: Fv && fv.steppingSlots
              })]
            }), (0, lv.jsx)(uP, {
              show: ev,
              recipeItem: Ev,
              detail: kv,
              onCraft: gv,
              setHovered: Wv,
              craftButtonRef: jv,
              onPadBack: ez,
              showPadShortcut: Fv,
              refusedCount: Yv,
              lock: qv.get(Ev.name),
              itemInfo: Rv
            })]
          })]
        })]
      })
    }
    var eh = Pv(9019),
      gh = Pv(3037),
      ph = Pv(2048),
      dh = Pv(8359);
    class Nh {
      constructor(vv, zv, Pv) {
        this.commit = vv, this.delayMs = zv, this.defers = Pv, this.pending = null, this.timer = void 0, this.Vp = !1, this.flush = () => {
          clearTimeout(this.timer);
          const vv = this.pending;
          null !== vv && (this.pending = null, this.commit(vv))
        }
      }
      type(vv) {
        this.pending = vv, clearTimeout(this.timer), this.Vp || this.defers() ? this.Vp || (this.timer = setTimeout(this.flush, this.delayMs)) : this.flush()
      }
      getTyped(vv) {
        var zv;
        return null !== (zv = this.pending) && void 0 !== zv ? zv : vv
      }
      isHeld() {
        return this.Vp
      }
      setHeld(vv) {
        this.Vp = vv, vv || this.flush()
      }
    }

    function lh(vv) {
      return null === vv ? "creativeInventory:all" : `creativeInventory:${vv}`
    }

    function Th(vv) {
      let {
        category: zv
      } = vv;
      return null === zv ? (0, lv.jsx)(Cv.b, {
        name: "layer-group"
      }) : (0, lv.jsx)(eP.b, {
        itemName: eh.creativeItemCategoryIcons[zv],
        amount: 0
      })
    }

    function Wh(vv) {
      let {
        labelKey: zv,
        isSelected: Pv,
        onSelect: hv,
        setHovered: Sv,
        children: ev
      } = vv;
      return (0, lv.jsx)("div", {
        className: GP()("CreativeCategoryTab", {
          Selected: Pv
        }),
        onClick: hv,
        onPointerEnter: vv => {
          (0, NP.x)(vv) || Sv(!0, {
            name: {
              translationKey: zv
            },
            desc: ""
          })
        },
        onPointerLeave: () => {
          Sv(!1)
        },
        children: ev
      })
    }

    function wh(vv) {
      let {
        categories: zv,
        selectedCategory: Pv,
        onSelect: hv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)(), [gv, pv] = (0, Sv.useState)(!1), dv = (0, Sv.useRef)(null), Nv = (0, Sv.useCallback)((() => {
        pv(!1)
      }), []);
      return (0, ph.d)(dv, Nv), (0, lv.jsxs)("div", {
        className: "CreativeCategoryDropdown",
        ref: dv,
        children: [(0, lv.jsxs)("div", {
          className: "CreativeCategoryDropdownButton",
          onClick: () => {
            pv(!gv)
          },
          children: [(0, lv.jsx)("div", {
            className: "CreativeCategoryIcon",
            children: (0, lv.jsx)(Th, {
              category: Pv
            })
          }), (0, lv.jsx)("span", {
            children: ev(lh(Pv))
          }), (0, lv.jsx)(Cv.b, {
            name: gv ? "caret-up" : "caret-down"
          })]
        }), gv && (0, lv.jsx)("div", {
          className: "CreativeCategoryDropdownMenu",
          children: zv.map((vv => (0, lv.jsxs)("div", {
            className: GP()("CreativeCategoryDropdownOption", {
              Selected: Pv === vv
            }),
            onClick: () => {
              hv(vv), pv(!1)
            },
            children: [(0, lv.jsx)("div", {
              className: "CreativeCategoryIcon",
              children: (0, lv.jsx)(Th, {
                category: vv
              })
            }), (0, lv.jsx)("span", {
              children: ev(lh(vv))
            })]
          }, null !== vv && void 0 !== vv ? vv : "all")))
        })]
      })
    }
    const ah = (0, Sv.memo)((function(vv) {
      let {
        creativeScrollDiv: zv,
        playerInvenNumSlots: Pv,
        getSetHoveringForIdx: hv,
        getPointerDownForIdx: ev,
        getPointerUpForIdx: gv,
        creativeSearchVal: pv,
        setCreativeSearchVal: Nv,
        creativeCategory: Tv,
        setCreativeCategory: Wv,
        show: wv
      } = vv;
      const {
        t: av
      } = (0, bv.x)(), sv = (0, Ov.h)("creativeVisibility"), {
        userContext: iv
      } = (0, fv.d)(), cv = (0, dv.i)("canUseDevCreativeItems"), Gv = iv.playerHasRank("developer") || !!cv, mv = (0, Sv.useMemo)((() => Ch("", sv, Gv)), [sv, Gv]), jv = (0, Sv.useMemo)((() => {
        const vv = (0, eh.creativeItemIds)(),
          zv = new Set(mv.map((zv => (0, eh.creativeCategoryOf)(vv[zv]))));
        return eh.creativeItemCategories.filter((vv => zv.has(vv)))
      }), [mv]), Fv = null !== Tv && jv.includes(Tv) ? Tv : null, nv = (0, Sv.useMemo)((() => "" === pv ? mv : Ch(pv, sv, Gv)), [mv, pv, sv, Gv]), Dv = (0, Sv.useMemo)((() => {
        const vv = (0, eh.creativeItemIds)();
        return null !== Fv ? nv.filter((zv => (0, eh.creativeCategoryOf)(vv[zv]) === Fv)) : "" === pv ? nv.filter((zv => !(0, eh.showOnlyInCreativeCategory)(vv[zv]))) : nv
      }), [nv, Fv, pv]), Kv = hv();

      function Vv(vv) {
        Wv(vv), zv.current.scrollTop = 0
      }
      const Uv = [null, ...jv],
        {
          isTouchScreen: Rv
        } = (0, Av.i)(["isTouchScreen"]),
        xv = !Rv,
        tv = (0, Sv.useRef)(null),
        [qv, Iv] = (0, Sv.useState)(0);
      (0, Sv.useEffect)((() => {
        const vv = tv.current;
        if (!vv) return;
        const zv = new ResizeObserver((vv => {
          Iv(vv[0].contentRect.height)
        }));
        return zv.observe(vv), () => {
          zv.disconnect()
        }
      }), [xv]);
      const Qv = (0, Sv.useRef)(null),
        Zv = (0, Sv.useCallback)((function vv() {
          "up" === Qv.current ? zv.current.scrollTop -= 10 : "down" === Qv.current && (zv.current.scrollTop += 10), Qv.current && requestAnimationFrame(vv)
        }), [zv]),
        Lv = (0, Sv.useCallback)((function(vv) {
          Qv.current || (Qv.current = vv, Zv())
        }), [Zv]);

      function Hv() {
        Qv.current = null
      }
      const Mv = (0, Sv.useRef)({
        creativeSearchVal: pv,
        setCreativeSearchVal: Nv
      });
      Mv.current = {
        creativeSearchVal: pv,
        setCreativeSearchVal: Nv
      };
      const [yv] = (0, Sv.useState)((() => new Nh((vv => {
        Mv.current.setCreativeSearchVal(vv)
      }), 250, SP.d))), Bv = vv => {
        var Pv;
        null === (Pv = zv.current) || void 0 === Pv || Pv.classList.toggle("CreativeItemSlotsStale", vv)
      };
      (0, Yv.g)(dh.b, (vv => {
        yv.setHeld(vv), vv || Bv(!1)
      })), (0, Sv.useEffect)((() => yv.flush), [yv]);
      const Jv = (0, lv.jsx)(tP.c, {
          className: "CreativeItemSlotsSearch",
          placeholderText: "Search",
          defaultValue: pv,
          maxLength: 1e4,
          onValueChange: (vv, zv) => {
            "" === yv.getTyped(Mv.current.creativeSearchVal) && "" !== vv && Wv(null), yv.type(vv), Bv(yv.isHeld())
          },
          onEnter: yv.flush,
          blurOnEnter: !0
        }),
        Ev = (0, lv.jsxs)("div", {
          className: "CreateItemSlotsScrollable",
          children: [Rv && (0, lv.jsxs)("div", {
            className: "CreativeScrollButtons",
            children: [(0, lv.jsx)("div", {
              className: "CreativeScrollButton Up",
              onPointerDown: () => {
                Lv("up")
              },
              onPointerLeave: Hv,
              onPointerUp: Hv,
              children: (0, lv.jsx)(Cv.b, {
                name: "arrow-up"
              })
            }), (0, lv.jsx)("div", {
              className: "CreativeScrollButton Down",
              onPointerDown: () => {
                Lv("down")
              },
              onPointerLeave: Hv,
              onPointerUp: Hv,
              children: (0, lv.jsx)(Cv.b, {
                name: "arrow-up"
              })
            })]
          }), (0, lv.jsxs)("div", {
            className: "CreativeItemSlots",
            ref: zv,
            children: [0 === Dv.length && "" !== pv && (0, lv.jsx)("div", {
              className: "CreativeItemSlotsEmpty",
              children: av("general:noResults")
            }), (0, lv.jsx)(xP.b, {
              lazyLoadedClassName: "CreativeItemSlotsInner",
              observerUpdateDeps: [pv, Fv],
              observerRoot: "CreativeItemSlots",
              observing: wv,
              children: Dv.map((vv => {
                const zv = Pv + vv;
                return (0, lv.jsx)(OP.b, {
                  idx: zv,
                  draggedInfo: null,
                  specialItemInfo: null,
                  setHovered: hv(zv),
                  pointerDown: ev(zv),
                  pointerUp: gv(zv)
                }, zv)
              }))
            })]
          })]
        });
      return (0, lv.jsxs)("div", {
        className: GP()("CreativeItemSlotsWrapper", xv ? "WithRail" : "WithDropdown"),
        children: [xv && (0, lv.jsx)("div", {
          className: "CreativeCategoryRail",
          ref: tv,
          style: {
            "--rail-height": qv > 0 ? `${qv}px` : void 0,
            "--tab-rows": Math.ceil(Uv.length / 2)
          },
          children: Uv.map((vv => (0, lv.jsx)(Wh, {
            labelKey: lh(vv),
            isSelected: Fv === vv,
            onSelect: () => {
              Vv(vv)
            },
            setHovered: Kv,
            children: (0, lv.jsx)(Th, {
              category: vv
            })
          }, null !== vv && void 0 !== vv ? vv : "all")))
        }), (0, lv.jsxs)("div", {
          className: "CreativeItemSlotsMain",
          children: [(0, lv.jsxs)("div", {
            className: "CreativeItemSlotsSearchRow",
            children: [Jv, !xv && (0, lv.jsx)(wh, {
              categories: Uv,
              selectedCategory: Fv,
              onSelect: Vv
            })]
          }), Ev]
        })]
      })
    }));

    function sh(vv) {
      var zv;
      return null !== (zv = (0, gh.e)(vv)) && void 0 !== zv ? zv : ""
    }

    function Ch(vv, zv, Pv) {
      let {
        publicLobby: hv,
        shownInGame: Sv
      } = zv;
      const ev = vv.toLowerCase(),
        gv = (0, eh.creativeItemIds)(),
        pv = vv => {
          var zv;
          const ev = gv[vv];
          return !(0, eh.itemIsDisabled)(ev, hv, null === (zv = Sv[sh(ev)]) || void 0 === zv || zv, Pv)
        };
      if ("" === ev) return gv.map(((vv, zv) => zv)).filter((vv => !(0, eh.showOnlyInCreativeSearch)(gv[vv]))).filter(pv);
      const dv = [];
      for (let Nv = 0; Nv < gv.length; Nv++) sh(gv[Nv]).toLowerCase().includes(ev) && dv.push(Nv);
      dv.sort(((vv, zv) => {
        const Pv = sh(gv[vv]).toLowerCase(),
          hv = sh(gv[zv]).toLowerCase();
        return Pv.indexOf(ev) - hv.indexOf(ev)
      }));
      for (const [Nv, lv] of(0, eh.creativeAltNames)())
        for (const vv of lv)
          if (vv.toLowerCase().includes(ev)) {
            const vv = gv.indexOf(Nv);
            dv.includes(vv) || dv.push(vv)
          } return dv.filter(pv)
    }
    var ih = Pv(36342),
      ch = Pv(626);

    function Gh(vv) {
      return vv > ch.k
    }

    function mh(vv) {
      const zv = vv / 2,
        Pv = [];
      for (let hv = 0; hv < zv / 6; hv++)
        for (let vv = 0; vv < 12; vv++) {
          const Sv = vv < 6 ? 0 : zv;
          Pv.push(Sv + 6 * hv + vv % 6)
        }
      return Pv
    }

    function jh(vv) {
      let {
        numSlots: zv,
        renderSlot: Pv
      } = vv;
      const {
        t: hv
      } = (0, bv.x)(), ev = (0, Sv.useRef)(null);
      var gv;
      return gv = ev, (0, Sv.useLayoutEffect)((() => {
        var vv;
        const zv = null === (vv = gv.current) || void 0 === vv ? void 0 : vv.closest(".InvenBody");
        if (!zv) return;
        const Pv = () => {
          zv.style.zoom = "";
          const vv = parseFloat(getComputedStyle(document.documentElement).fontSize),
            Pv = window.innerWidth - 2 * vv,
            hv = zv.getBoundingClientRect().width;
          hv > Pv && (zv.style.zoom = "" + Pv / hv)
        };
        return Pv(), window.addEventListener("resize", Pv), () => {
          window.removeEventListener("resize", Pv), zv.style.zoom = ""
        }
      }), [gv]), (0, lv.jsxs)("div", {
        ref: ev,
        className: "ChestItemSlots DoubleChestSlots",
        children: [(0, lv.jsx)("div", {
          className: "InvenLeftSideHeader SmallTextBold",
          children: hv("doubleChest:title")
        }), (0, lv.jsx)("div", {
          className: "GridItemSlots",
          children: mh(zv).map((vv => Pv(vv)))
        })]
      })
    }

    function fh(vv) {
      let {
        PS: zv,
        initialPasskey: Pv
      } = vv;
      const {
        t: hv
      } = (0, bv.x)(), [ev, gv] = (0, Sv.useState)(Pv), [pv, dv] = (0, Sv.useState)(Pv);
      (0, Sv.useEffect)((() => {
        gv(Pv), dv(Pv)
      }), [...zv]);
      return (0, lv.jsxs)("div", {
        className: "IronChestPasskeyEditorWrapper",
        children: [(0, lv.jsx)("div", {
          className: "SmallTextBold",
          children: hv("ironChest:currentPasskey", {
            currentPasskey: ev.join("")
          })
        }), (0, lv.jsx)(fP, {
          className: "IronChestPasskeyEditor",
          Yg: pv,
          onPasskeyUpdated: dv,
          confirmText: "ironChest:changePasskey",
          onConfirm: () => {
            Nv.gameBridge.send("changeIronChestPasskey", {
              pos: [...zv],
              Yg: [...pv]
            }), gv([...pv])
          }
        })]
      })
    }

    function Fh(vv) {
      let {
        variation: zv,
        canCraft: Pv,
        show: hv,
        creativeMounted: Sv,
        specialItemRef: ev,
        draggedInfo: gv,
        getSetHovering: pv,
        getPointerDownForIdx: dv,
        getPointerUpForIdx: Nv,
        enchantingTablePosition: Tv,
        enchantingTableBlockName: Wv,
        selectedCraftable: wv,
        dispatchSelectedCraftable: av,
        creativeScrollDiv: sv,
        creativeSearchVal: Cv,
        setCreativeSearchVal: iv,
        creativeCategory: cv,
        setCreativeCategory: Gv,
        onCraft: mv
      } = vv;
      const {
        userContext: jv
      } = (0, fv.d)(), {
        t: Fv
      } = (0, bv.x)(), Yv = (0, Ov.g)("inventory", (vv => vv.chest)), nv = (0, Ov.g)("inventory", (vv => vv.player.length)), Dv = (0, Ov.g)("inventory", (vv => vv.creative));
      if (0 === nv) return null;
      let Kv, Vv;
      const Uv = vv => {
          const zv = nv + vv;
          return (0, lv.jsx)(OP.b, {
            idx: zv,
            draggedInfo: gv,
            specialItemInfo: ev.current,
            setHovered: pv(zv),
            pointerDown: dv(zv),
            pointerUp: Nv(zv)
          }, zv)
        },
        Rv = Yv ? (0, ih.e)(Yv.type) : null;
      if (Rv) Kv = GP()("InvenLeftSideChestCustom", Rv.className), Vv = (0, lv.jsx)("div", {
        className: "ChestItemSlotsWrapper",
        children: Rv.render({
          PS: Yv.pos,
          renderSlot: Uv
        })
      });
      else if (Yv) {
        const vv = Yv.pos,
          zv = "Iron" === Yv.type || "Moonstone" === Yv.type ? Yv.type : "Standard";
        let Pv = !1,
          hv = null;
        "Iron" === zv && (Pv = Yv.ironChest.ownerDbId === jv.whamm, hv = Yv.ironChest.Yg), Kv = `InvenLeftSideChest${zv}`;
        const Sv = Gh(Yv.numSlots);
        Vv = (0, lv.jsxs)("div", {
          className: "ChestItemSlotsWrapper",
          children: [Pv && (0, lv.jsx)(fh, {
            PS: vv,
            initialPasskey: hv
          }), Sv && (0, lv.jsx)(jh, {
            numSlots: Yv.numSlots,
            renderSlot: Uv
          }), !Sv && (0, lv.jsxs)("div", {
            className: "ChestItemSlots",
            children: [(0, lv.jsx)("div", {
              className: "InvenLeftSideHeader SmallTextBold",
              children: Fv("Moonstone" === zv ? "item:moonstoneChest" : "Iron" === zv ? "item:ironChest" : "item:chest")
            }), (0, lv.jsx)("div", {
              className: "GridItemSlots",
              children: new Array(Yv.numSlots).fill(0).map(((vv, zv) => Uv(zv)))
            })]
          })]
        })
      } else if (!Dv || zv && Pv)
        if (Pv && "Enchanting Table" === zv) Kv = `InvenLeftSide${(null!==Wv&&void 0!==Wv?Wv:"").replace(/ /gi,"")}`, Vv = (0, lv.jsx)(DP, {
          specialItemInfo: ev.current,
          setHovered: pv,
          pointerDown: dv(TP.h),
          pointerUp: Nv(TP.h),
          enchantingTablePosition: Tv,
          enchantingTableBlockName: Wv
        });
        else if (Pv && "Salvaging Table" === zv) Kv = "InvenLeftSideSalvagingTable", Vv = (0, lv.jsx)(VP, {
        specialItemInfo: ev.current,
        setSpecialItemInfo: vv => {
          ev.current = vv
        },
        setHovered: pv,
        pointerDown: dv(TP.h),
        pointerUp: Nv(TP.h)
      });
      else {
        if (!Pv) return null;
        Kv = `InvenLeftSide${(null!==zv&&void 0!==zv?zv:"HandCrafting").replace(/ /gi,"")}`, Vv = (0, lv.jsx)(Sh, {
          show: hv,
          onCraft: mv,
          craftingStation: zv,
          selectedCraftable: wv,
          dispatchSelectedCraftable: av,
          setHovered: pv()
        })
      } else Kv = "InvenLeftSideCreative", Vv = Sv ? (0, lv.jsx)(ah, {
        creativeScrollDiv: sv,
        playerInvenNumSlots: nv,
        getSetHoveringForIdx: pv,
        getPointerDownForIdx: dv,
        getPointerUpForIdx: Nv,
        creativeSearchVal: Cv,
        setCreativeSearchVal: iv,
        creativeCategory: cv,
        setCreativeCategory: Gv,
        show: hv
      }) : null;
      const xv = !!Yv || Pv && !!zv;
      return (0, lv.jsx)("div", {
        className: `InvenLeftSide ${Kv}`,
        "data-pad-inventory-start": xv ? "" : void 0,
        children: Vv
      })
    }
    var Yh = Pv(609),
      nh = Pv(19941),
      Oh = Pv(19947),
      Dh = Pv(19951);
    const Kh = {
      Helmet: {
        sprite: "empty_armor_slot_helmet",
        image: Pv(19958)
      },
      Chestplate: {
        sprite: "empty_armor_slot_chestplate",
        image: Oh
      },
      Gauntlets: {
        sprite: "empty_armor_slot_gauntlets",
        image: Dh
      },
      Leggings: {
        sprite: "empty_armor_slot_leggings",
        image: Pv(19960)
      },
      Boots: {
        sprite: "empty_armor_slot_boots",
        image: nh
      }
    };

    function Vh(vv) {
      const {
        sprite: zv,
        image: Pv
      } = Kh[vv];
      return Jz(zv, Mz.f.ITEM, Pv)
    }

    function Uh(vv) {
      let {
        draggedInfo: zv,
        specialItemInfo: Pv,
        craftFlyAnims: hv,
        getSetHovering: Sv,
        getPointerDownForIdx: ev,
        getPointerUpForIdx: gv,
        variation: pv,
        canCraft: dv,
        isNewSlot: Nv
      } = vv;
      const Tv = (0, Ov.g)("inventory", (vv => vv.player.length));
      return 0 === Tv ? null : (0, lv.jsxs)("div", {
        className: "InvenBodyRight",
        children: [(0, lv.jsx)("div", {
          className: "ArmourItemSlots",
          children: new Array(Yh.c.length).fill(0).map(((vv, Wv) => {
            const wv = Tv - Yh.c.length + Wv;
            return (0, lv.jsx)(OP.b, {
              idx: wv,
              draggedInfo: zv,
              specialItemInfo: Pv,
              craftFlyHoldbackInfo: (0, lP.j)(hv, wv),
              setHovered: Sv(wv),
              pointerDown: ev(wv),
              pointerUp: gv(wv),
              defaultIconB64: Vh(Yh.c[Wv]),
              variation: dv ? pv : void 0,
              showNewDot: Nv(wv)
            }, wv)
          }))
        }), (0, lv.jsx)("div", {
          className: "GridItemSlots",
          children: new Array(Tv - 10 - Yh.c.length).fill(0).map(((vv, Wv) => {
            const wv = Tv - Yh.c.length - Wv - 1;
            return (0, lv.jsx)(OP.b, {
              idx: wv,
              draggedInfo: zv,
              specialItemInfo: Pv,
              craftFlyHoldbackInfo: (0, lP.j)(hv, wv),
              setHovered: Sv(wv),
              pointerDown: ev(wv),
              pointerUp: gv(wv),
              variation: dv ? pv : void 0,
              showNewDot: Nv(wv)
            }, wv)
          }))
        })]
      })
    }
    var Rh = Pv(36351),
      xh = Pv(36357);

    function th(vv) {
      const {
        e: zv,
        idx: Pv
      } = vv, hv = (0, NP.n)(vv.readInventory(), Pv), Sv = (0, NP.u)(zv);
      Pv === TP.d ? function(vv, zv) {
        const {
          draggedInfoRef: Pv,
          removeItem: hv,
          removeDraggedInfoRef: Sv,
          close: ev
        } = vv;
        if (Pv.current) {
          const vv = zv && Pv.current.amount || 1;
          hv(Pv.current.idx, vv, !0) && (Pv.current.amount -= vv, Pv.current.amount <= 0 && Sv())
        } else zv && ev()
      }(vv, Sv) : Pv === TP.h ? function(vv, zv) {
        const {
          e: Pv,
          draggedInfoRef: hv,
          specialItemRef: Sv,
          moveAmtIntoSlot: ev,
          removeDraggedInfoRef: gv
        } = vv;
        if ((0, NP.A)(Pv) && Sv.current) Sv.current = null;
        else if (hv.current && Sv.current && (hv.current.idx === Sv.current.idx || (0, xh.c)(hv.current, Sv.current)) && hv.current.amount > 0 && Sv.current.amount > 0 && Sv.current.amount < mP.f.maxItemStackSize)
          if (hv.current.idx === Sv.current.idx) {
            if (zv) {
              const vv = Math.min(hv.current.amount, mP.f.maxItemStackSize - Sv.current.amount);
              Sv.current.amount += vv, hv.current.amount -= vv
            } else hv.current.amount--, Sv.current.amount++;
            hv.current.amount <= 0 && gv()
          } else if (zv) {
          const vv = Math.min(hv.current.amount, mP.f.maxItemStackSize - Sv.current.amount);
          ev(Sv.current.idx, vv) && (Sv.current.amount += vv)
        } else {
          ev(Sv.current.idx, 1) && Sv.current.amount++
        } else if (!hv.current || Sv.current || zv) {
          const vv = hv.current;
          hv.current = Sv.current, Sv.current = vv
        } else hv.current.amount--, Sv.current = {
          idx: hv.current.idx,
          name: hv.current.name,
          attributes: hv.current.attributes,
          amount: 1
        }
      }(vv, Sv) : (0, NP.A)(zv) ? function(vv, zv) {
        var Pv, hv;
        const {
          idx: Sv,
          draggedInfoRef: ev,
          specialItemRef: gv,
          canCraft: pv,
          variation: dv,
          swapSlots: Nv,
          moveIntoSlots: lv
        } = vv;
        if (!zv) return;
        let Tv = zv.amount;
        Sv === (null === (Pv = ev.current) || void 0 === Pv ? void 0 : Pv.idx) && (Tv = ev.current.amount <= 0 ? 0 : zv.amount - ev.current.amount);
        Sv === (null === (hv = gv.current) || void 0 === hv ? void 0 : hv.idx) && (Tv = gv.current.amount <= 0 ? 0 : zv.amount - gv.current.amount);
        if (0 === Tv) return;
        const Wv = vv.readInventory(),
          wv = Wv.player.length,
          av = Wv.chest,
          sv = wv - Yh.c.length,
          Cv = () => {
            if (!(0, SP.d)()) return void lv(10, sv, Sv, Tv);
            const vv = vv => {
              const Pv = (0, NP.n)(Wv, vv);
              return Pv ? {
                amount: Pv.amount,
                stacksWithMoved: (0, xh.c)(Pv, zv)
              } : null
            };
            for (const zv of ((vv, zv, Pv, hv, Sv) => {
                const ev = [];
                let gv = hv;
                if (null !== hv) {
                  let pv = 0;
                  for (let hv = zv; hv < Pv; hv++) {
                    const zv = vv(hv);
                    null !== zv && void 0 !== zv && zv.stacksWithMoved && null !== zv.amount && zv.amount > 0 && (pv += Math.max(0, Sv - zv.amount))
                  }
                  const dv = Math.min(hv, pv);
                  if (dv > 0 && (ev.push({
                      start: zv,
                      end: Pv,
                      amount: dv
                    }), gv = hv - dv), gv <= 0) return ev
                }
                for (let pv = Pv - 1; pv >= zv; pv--)
                  if (null === vv(pv)) {
                    ev.push({
                      start: pv,
                      end: pv + 1,
                      amount: gv
                    });
                    break
                  } return ev
              })(vv, 10, sv, Tv, mP.f.maxItemStackSize)) lv(zv.start, zv.end, Sv, zv.amount)
          };
        if (!pv || "Enchanting Table" !== dv && "Salvaging Table" !== dv) {
          const Pv = (0, nv.yb)(zv.name),
            hv = Pv ? (0, nv.xb)(Pv) : null;
          if (!Yh.c.includes(Pv) || Sv !== hv && (0, NP.r)(Wv, vv.itemInfo, hv, Sv))
            if (av)
              if (Sv < wv) {
                var iv, cv;
                const [vv, zv] = null !== (iv = null === (cv = (0, ih.e)(av.type)) || void 0 === cv ? void 0 : cv.quickMoveRange) && void 0 !== iv ? iv : [0, av.numSlots];
                lv(wv + vv, wv + zv, Sv, Tv)
              } else lv(0, wv - Yh.c.length, Sv, Tv);
          else Wv.creative ? Sv < 10 ? Cv() : Sv < wv ? lv(0, 10, Sv, Tv) : lv(0, wv - Yh.c.length, Sv, null !== zv.amount ? mP.f.maxItemStackSize : null) : Sv < 10 ? Cv() : lv(0, 10, Sv, Tv);
          else Sv < wv - Yh.c.length || Sv >= wv ? Nv(hv, Sv) : (lv(0, wv - Yh.c.length, hv, Tv), pP.c.play("equip_leather1", 1).rate(.9 + .3 * Math.random()))
        } else gv.current = {
          idx: Sv,
          name: zv.name,
          attributes: zv.attributes,
          amount: null !== zv.amount ? Tv : 0
        }
      }(vv, hv) : vv.draggedInfoRef.current ? function(vv, zv, Pv, hv) {
        const {
          draggedInfoRef: Sv,
          specialItemRef: ev,
          moveAmtIntoSlot: gv,
          swapSlots: pv,
          removeItem: dv,
          removeDraggedInfoRef: Nv
        } = vv, lv = vv.readInventory(), Tv = Sv.current.idx;
        if (Pv && (zv === Tv || (0, xh.c)(Sv.current, Pv)) && Sv.current.amount > 0 && (0, NP.e)(Pv) > 0 && (Pv.amount < mP.f.maxItemStackSize || zv === Tv)) hv ? Pv.amount + Sv.current.amount <= mP.f.maxItemStackSize || zv === Tv ? gv(zv, Sv.current.amount) : gv(zv, mP.f.maxItemStackSize - Pv.amount) : gv(zv, 1);
        else if (Sv.current.amount > 0 && !Pv) gv(zv, hv ? Sv.current.amount : 1);
        else if (hv || Pv || 0 === Sv.current.amount)
          if (lv.creative && !lv.chest && zv >= lv.player.length) {
            const vv = 0 === Sv.current.amount ? 1 : Sv.current.amount;
            dv(Sv.current.idx, vv, !1) && Nv()
          } else {
            var Wv;
            const Pv = (null === (Wv = ev.current) || void 0 === Wv ? void 0 : Wv.idx) === zv;
            if (pv(zv, Sv.current.idx)) {
              const hv = vv.readInventory(),
                gv = (0, NP.n)(hv, Tv),
                pv = !hv.chest && hv.creative && Sv.current.idx >= hv.player.length;
              if (gv && Sv.current.idx !== zv && !pv) {
                let vv = (0, NP.e)(gv);
                Pv && (vv -= ev.current.amount), Sv.current = Pv && 0 === vv ? null : {
                  idx: Sv.current.idx,
                  name: gv.name,
                  attributes: gv.attributes,
                  amount: vv
                }
              } else Nv()
            }
          }
        else gv(zv, 1)
      }(vv, Pv, hv, Sv) : function(vv, zv, Pv, hv) {
        var Sv;
        const {
          draggedInfoRef: ev,
          specialItemRef: gv
        } = vv;
        if (!Pv) return;
        let pv = (0, NP.e)(Pv);
        const dv = (null === (Sv = gv.current) || void 0 === Sv ? void 0 : Sv.idx) === zv;
        dv && (pv -= gv.current.amount);
        hv || (pv = Math.ceil(pv / 2));
        ev.current = dv && 0 === pv ? null : {
          idx: zv,
          name: Pv.name,
          attributes: Pv.attributes,
          amount: pv
        }
      }(vv, Pv, hv, Sv)
    }

    function qh(vv, zv) {
      return !!zv && zv.name === vv.name
    }

    function Ih() {
      return Nv.gameBridge.latest("inventory")
    }

    function Qh(vv, zv, Pv) {
      return Nv.gameBridge.send("removeInventoryItem", {
        slot: vv,
        amount: zv,
        drop: Pv
      })
    }

    function Zh(vv) {
      return (0, NP.m)(vv, Nv.gameBridge.latest("itemInfo"), Nv.gameBridge.latest("stationItems").enchantable)
    }

    function Ah(vv) {
      let {
        show: zv,
        close: Pv,
        canCraft: hv,
        variation: ev,
        inventoryItemsMoveable: gv,
        setCraftFlyAnims: pv
      } = vv;
      (0, Ov.h)("itemInfo");
      const [dv, lv] = (0, Sv.useState)(null), [Tv, Wv] = (0, Sv.useState)(null), [wv, av] = (0, Sv.useState)(!1), sv = (0, Sv.useRef)(null), Cv = (0, Sv.useRef)(null), iv = (0, Sv.useRef)(null), cv = (0, Sv.useRef)(null), [Gv, mv] = (0, Sv.useReducer)((vv => vv + 1), 0), jv = (0, Sv.useCallback)((() => {
        zv && mv()
      }), [zv, mv]), fv = (0, Sv.useCallback)((() => {
        Cv.current = null, qv.current = null, jv()
      }), [jv]), Fv = (0, Sv.useCallback)(((vv, zv) => {
        pv((Pv => Pv.map((Pv => "ingredient" === Pv.kind ? Pv : Pv.Vl === vv ? {
          ...Pv,
          Vl: zv,
          to: (0, NP.i)(zv)
        } : Pv.Vl === zv ? {
          ...Pv,
          Vl: vv,
          to: (0, NP.i)(vv)
        } : Pv))))
      }), [pv]), Yv = (0, Sv.useCallback)(((vv, zv) => {
        const Pv = Zv.current;
        if (Pv.x = vv, Pv.y = zv, sv.current) !Av.current.isTouch || Av.current.itemBeingDragged && !qv.current ? (sv.current.style.transform = `translate(${Pv.x}px, ${Pv.y}px)`, av(Av.current.isTouch && !qv.current)) : (sv.current.style.transform = "translate(0.5rem, 0.5rem)", av(!0));
        else if (cv.current) {
          const Pv = cv.current;
          let hv = vv + 10,
            Sv = zv + 10;
          const ev = Pv.offsetWidth,
            gv = Pv.offsetHeight;
          hv + ev > window.innerWidth && (hv = vv - ev - 10), Sv + gv > window.innerHeight && (Sv = zv - gv - 10), hv < 0 && (hv = 0), Sv < 0 && (Sv = 0), cv.current.style.transform = `translate(${hv}px, ${Sv}px)`
        }
      }), []), Dv = (0, Sv.useCallback)((vv => (zv, Pv, hv) => {
        if (lv(zv && void 0 !== vv ? vv : null), zv) {
          if (void 0 === vv && !Pv) return void(0, Rh.d)("Error in invenComp", new Error("isHovering true but no idx or text"));
          if (void 0 !== vv) {
            var Sv;
            const zv = Ih();
            let Pv;
            if (Pv = vv === TP.h ? iv.current ? (0, NP.n)(zv, iv.current.idx) : null : (0, NP.n)(zv, vv), !Pv) return void Wv(null);
            if ((null === (Sv = iv.current) || void 0 === Sv ? void 0 : Sv.idx) === vv) {
              if (0 === (0, NP.e)(Pv) - iv.current.amount) return void Wv(null)
            }
            Wv(Zh(Pv))
          } else Wv({
            name: Pv.name,
            desc: Pv.desc,
            fontStyle: "normal"
          })
        } else Wv(null);
        hv && setTimeout((() => {
          Yv(hv.pageX, hv.pageY)
        }), 0)
      }), [Yv]), Kv = (0, Sv.useCallback)(((vv, zv) => {
        const Pv = Nv.gameBridge.send("moveInventoryItem", {
          from: Cv.current.idx,
          to: vv,
          amount: zv
        });
        return Pv ? (Cv.current.amount -= zv, Cv.current.amount <= 0 && fv()) : console.error("moveInventoryItem failed"), Pv
      }), [fv]), Vv = (0, Sv.useCallback)(((vv, zv) => {
        const Pv = iv.current,
          hv = null === Pv || void 0 === Pv ? void 0 : Pv.idx;
        Pv && (Pv.idx = function(vv, zv, Pv) {
          return vv === zv ? Pv : vv === Pv ? zv : vv
        }(hv, vv, zv));
        const Sv = Nv.gameBridge.send("swapInventorySlots", {
          a: vv,
          b: zv
        });
        return Sv ? Fv(vv, zv) : Pv && (Pv.idx = hv), Sv
      }), [Fv]), Uv = (0, Sv.useCallback)(((vv, zv, Pv, hv) => {
        const Sv = Nv.gameBridge.send("quickMoveInventoryItem", {
          slot: Pv,
          start: vv,
          end: zv,
          amount: hv
        });
        null !== Sv && Fv(Pv, Sv)
      }), [Fv]), Rv = (0, Sv.useCallback)(((vv, zv) => {
        var Sv;
        ((vv, zv, Pv) => {
          const hv = vv - (Pv - Yh.c.length);
          return !(!zv || hv < 0 || hv >= Yh.c.length) && (0, nv.yb)(zv) !== Yh.c[hv]
        })(zv, null === (Sv = Cv.current) || void 0 === Sv ? void 0 : Sv.name, Ih().player.length) || (th({
          e: vv,
          idx: zv,
          readInventory: Ih,
          itemInfo: Nv.gameBridge.latest("itemInfo"),
          draggedInfoRef: Cv,
          specialItemRef: iv,
          moveAmtIntoSlot: Kv,
          swapSlots: Vv,
          moveIntoSlots: Uv,
          removeItem: Qh,
          removeDraggedInfoRef: fv,
          close: Pv,
          canCraft: hv,
          variation: ev
        }), jv())
      }), [hv, Pv, Kv, Uv, fv, Vv, ev, jv]), xv = (0, Sv.useRef)(0), tv = (0, Sv.useRef)(null), qv = (0, Sv.useRef)(null), Iv = (0, Sv.useRef)(null), Qv = (0, Sv.useRef)(new Set), Zv = (0, Sv.useRef)({
        x: 0,
        y: 0
      }), Av = (0, Sv.useRef)({
        isTouch: !1,
        itemBeingDragged: !1
      }), Lv = (0, Sv.useCallback)((() => (Iv.current = null, Av.current.itemBeingDragged = !1, clearTimeout(tv.current), !!qv.current && (qv.current = null, jv(), !0))), [jv]);
      (0, Sv.useEffect)((() => {
        Lv(), Qv.current.clear()
      }), [zv]);
      const Hv = vv => void 0 !== vv && (Qv.current.has(vv) || null !== Iv.current && vv !== Iv.current),
        Mv = vv => {
          Av.current.isTouch = (0, NP.x)(vv)
        },
        yv = (0, Sv.useCallback)((vv => zv => {
          const hv = (0, NP.x)(zv);
          if (hv || Yv(zv.pageX, zv.pageY), gv)
            if (Hv(zv.pointerId)) void 0 !== zv.pointerId && Qv.current.add(zv.pointerId);
            else {
              if (Mv(zv), hv) {
                xv.current = zv.timeStamp, Av.current.itemBeingDragged = !0, Iv.current = zv.pointerId;
                const Pv = (0, NP.n)(Ih(), vv);
                if (Pv && Pv.amount && Pv.amount > 0) {
                  const Pv = zv.pageX,
                    hv = zv.pageY,
                    Sv = Zv.current.x,
                    ev = Zv.current.y;
                  clearTimeout(tv.current), tv.current = setTimeout((() => {
                    if (Cv.current && Cv.current.idx === vv && (Math.abs(Pv - Zv.current.x) < 20 && Math.abs(hv - Zv.current.y) < 20 || Sv === Zv.current.x && ev === Zv.current.y) && Av.current.itemBeingDragged) {
                      const vv = Ih(),
                        Pv = vv.creative && !vv.chest && Cv.current.idx >= mP.f.numInvenSlots && null !== (0, NP.n)(vv, Cv.current.idx).amount ? mP.f.maxItemStackSize : Cv.current.amount;
                      qv.current = {
                        initTouchX: zv.pageX,
                        initTouchY: zv.pageY,
                        maxAmount: Pv
                      }, Cv.current.amount = Math.ceil(Cv.current.amount / 2), sv.current.style.transform = "translate(0.5rem, 0.5rem)", av(!0), jv()
                    }
                  }), 500)
                }
              }
              Rv(zv, vv)
            }
          else vv === TP.d && (0, NP.u)(zv) && Pv()
        }), [Yv, Rv, gv, Pv, jv]),
        Bv = (0, Sv.useCallback)((vv => vv => {
          if (Hv(vv.pointerId)) return;
          const zv = (0, NP.x)(vv);
          if (Mv(vv), !Lv()) {
            if (zv && Cv.current && vv.timeStamp - xv.current > 150) {
              const zv = document.elementFromPoint(vv.clientX, vv.clientY);
              if (null !== zv) {
                const Pv = zv.getAttribute("data-inven-idx");
                null !== Pv ? Rv(vv, parseInt(Pv)) : zv.classList.contains("InventoryBackgroundScreen") && Rv(vv, -1)
              }
            }
            Yv(vv.pageX, vv.pageY)
          }
        }), [Yv, Rv, Lv]);
      (0, Sv.useEffect)((() => {
        let vv;
        const Pv = ["pointerup", "pointercancel"],
          hv = vv => {
            Qv.current.has(vv.pointerId) ? setTimeout((() => {
              Qv.current.delete(vv.pointerId)
            }), 0) : vv.pointerId === Iv.current && setTimeout((() => {
              Iv.current === vv.pointerId && Lv()
            }), 0)
          };
        if (zv) {
          for (const vv of Pv) document.addEventListener(vv, hv, !0);
          if (!Av.current.isTouch) {
            const vv = Zv.current;
            Yv(vv.x, vv.y)
          }
          vv = vv => {
            vv.preventDefault(), Hv(vv.pointerId) || (Mv(vv), Yv(vv.pageX, vv.pageY), qv.current && vv.pointerId === Iv.current && (vv => {
              if (!Cv.current) return qv.current = null, void jv();
              const {
                initTouchX: zv,
                maxAmount: Pv
              } = qv.current, hv = (vv.pageX - zv) * qv.current.maxAmount / 160, Sv = Math.ceil(Pv / 2) + Math.ceil(hv);
              Cv.current.amount = Math.min(Pv, Math.max(1, Sv)), jv()
            })(vv))
          }, document.addEventListener("pointermove", vv, !0)
        }
        return () => {
          document.removeEventListener("pointermove", vv, !0);
          for (const vv of Pv) document.removeEventListener(vv, hv, !0)
        }
      }));
      const Jv = (0, Sv.useCallback)((() => {
          if (Cv.current) {
            const vv = (0, NP.n)(Ih(), Cv.current.idx);
            (!qh(Cv.current, vv) || vv.amount < Cv.current.amount) && fv()
          }
        }), [fv]),
        Ev = (0, Sv.useCallback)((() => {
          const vv = Cv.current;
          if (vv) {
            const zv = (0, NP.n)(Ih(), vv.idx);
            qh(vv, zv) && (vv.attributes = zv.attributes)
          }
        }), []);
      return {
        draggedDomRef: sv,
        draggedInfoRef: Cv,
        specialItemRef: iv,
        hoverInfoDomRef: cv,
        longHoldSplitInfoRef: qv,
        currHoveredIdx: dv,
        currHoveredDisplayInfo: Tv,
        displayDraggedItemName: wv,
        forceRerenderIfVisible: jv,
        removeDraggedInfoRef: fv,
        checkDraggedItemConsistencyWithInven: Jv,
        refreshDraggedAttributes: Ev,
        swapSlots: Vv,
        getPointerDownForIdx: yv,
        getPointerUpForIdx: Bv,
        getSetHovering: Dv,
        setCurrHoveredDisplayInfo: Wv,
        moveFollowerTo: Yv
      }
    }
    class Lh {
      constructor(vv) {
        this.snapshot = [], this.newSlots = new Set, this.update(vv, !1)
      }
      update(vv, zv) {
        const Pv = vv.map((vv => {
          var zv;
          return vv ? {
            name: vv.name,
            amount: null !== (zv = vv.amount) && void 0 !== zv ? zv : 1
          } : null
        }));
        Pv.forEach(((vv, Pv) => {
          const hv = this.snapshot[Pv],
            Sv = (null === vv || void 0 === vv ? void 0 : vv.name) !== (null === hv || void 0 === hv ? void 0 : hv.name);
          (!vv || Sv || vv.amount < hv.amount) && this.newSlots.delete(Pv), zv && vv && (Sv || vv.amount > hv.amount) && this.newSlots.add(Pv)
        })), this.snapshot = Pv
      }
      clearMarks() {
        this.newSlots.clear()
      }
      isNew(vv) {
        return this.newSlots.has(vv)
      }
    }
    const Hh = (vv, zv, Pv) => ({
      button: zv,
      shiftKey: Pv,
      pageX: vv.clientX,
      pageY: vv.clientY,
      clientX: vv.clientX,
      clientY: vv.clientY,
      pointerType: "mouse"
    });

    function Mh(vv) {
      const [zv, Pv] = (0, Sv.useState)(vv);
      return vv && !zv && Pv(!0), (0, Sv.useEffect)((() => {
        if (zv) return;
        let vv = !0;
        const hv = () => {
            vv && (vv = !1, Pv(!0))
          },
          Sv = "function" === typeof window.requestIdleCallback,
          ev = Sv ? window.requestIdleCallback(hv, {
            timeout: 2e3
          }) : void 0,
          gv = setTimeout(hv, Sv ? 2e3 : 1e3);
        return () => {
          vv = !1, clearTimeout(gv), void 0 !== ev && window.cancelIdleCallback(ev)
        }
      }), [zv]), zv
    }
    const yh = (0, Sv.memo)((function(vv) {
      var zv;
      let {
        show: Pv,
        onOpen: hv,
        onClose: ev,
        variation: pv
      } = vv;
      const Tv = (0, Sv.useRef)(null),
        Wv = (0, Sv.useRef)(null),
        wv = function(vv) {
          const [zv, Pv] = (0, Sv.useState)(!0), [hv, ev] = (0, Sv.useState)(!1), gv = (0, Sv.useRef)(null), pv = (0, Sv.useRef)(null), Nv = (0, dv.i)("_shield"), lv = (0, Sv.useRef)(null), Tv = (0, dv.i)("_health"), Wv = (0, Sv.useRef)(null);

          function wv(vv) {
            const zv = Date.now() + vv;
            zv < pv.current || (Pv(!1), clearTimeout(gv.current), pv.current = zv, gv.current = setTimeout((() => {
              Pv(!0)
            }), vv))
          }
          return (0, Sv.useEffect)((() => {
            wv(wP);
            const vv = av.j.subscribe("requestingPlayVideoAd", (() => {
              wv(wP)
            }));
            return () => {
              clearTimeout(gv.current), av.j.unsubscribe(vv)
            }
          }), []), (0, Sv.useEffect)((() => {
            (lv.current > Nv || Wv.current > Tv) && wv(6e4), lv.current = Nv, Wv.current = Tv
          }), [Nv, Tv]), (0, Sv.useEffect)((() => {
            let zv = null;
            return vv ? zv = setTimeout((() => {
              ev(!0)
            }), 250) : ev(!1), () => {
              clearTimeout(zv)
            }
          }), [vv]), zv && hv
        }(Pv);
      (0, Yv.j)(PP.b, null);
      const sv = (0, PP.i)(),
        Cv = sv.some((vv => vv.panel)),
        iv = (0, Ov.g)("inventory", (vv => null !== vv.chest && (null !== vv.chest.ironChest || Gh(vv.chest.numSlots)))),
        cv = Mh(Pv),
        Gv = Mh(Pv),
        [mv, jv] = (0, Sv.useState)([]),
        fv = (0, Sv.useCallback)((vv => {
          jv((zv => zv.filter((zv => zv.id !== vv))))
        }), []),
        Fv = (0, Sv.useRef)(null),
        Dv = (0, Sv.useRef)(0),
        Kv = (0, Sv.useCallback)((() => {
          Fv.current && (Dv.current = Fv.current.scrollTop), ev()
        }), [ev]),
        Vv = (0, dv.i)("inventoryItemsMoveable"),
        Uv = (0, dv.i)("canCraft"),
        {
          clientEscMenuOptions: Rv
        } = (0, Av.i)(["clientEscMenuOptions"]),
        xv = (0, Sv.useRef)(null);
      xv.current || (xv.current = new Lh(Nv.gameBridge.latest("inventory").player));
      const qv = xv.current,
        {
          draggedDomRef: Iv,
          draggedInfoRef: Qv,
          specialItemRef: Zv,
          hoverInfoDomRef: Lv,
          longHoldSplitInfoRef: Hv,
          currHoveredIdx: Mv,
          currHoveredDisplayInfo: yv,
          displayDraggedItemName: Bv,
          forceRerenderIfVisible: Jv,
          removeDraggedInfoRef: Ev,
          checkDraggedItemConsistencyWithInven: ov,
          refreshDraggedAttributes: bv,
          swapSlots: rv,
          getPointerDownForIdx: kv,
          getPointerUpForIdx: Xv,
          getSetHovering: uv,
          setCurrHoveredDisplayInfo: vz,
          moveFollowerTo: zz
        } = Ah({
          show: Pv,
          close: Kv,
          canCraft: Uv,
          variation: pv,
          inventoryItemsMoveable: Vv,
          setCraftFlyAnims: jv
        });
      (0, Sv.useEffect)((() => {
        const vv = !Pv && null !== Nv.gameBridge.latest("inventory").chest;
        if (vv && Nv.gameBridge.send("closeChest", null), Pv || (qv.clearMarks(), uv(null)(!1)), vv) {
          pP.c.play("chestClose", 1).rate(.8 + .4 * Math.random())
        }
      }), [Pv]), (0, Ov.d)("chestToggled", (vv => {
        if (vv ? hv() : Pv && Kv(), vv) {
          pP.c.play("chestOpen", 1).rate(.8 + .4 * Math.random())
        }
      }));
      const Pz = (0, Vz.g)();
      (0, Ov.d)("inventory", (vv => {
        let {
          player: zv
        } = vv;
        var hv, Sv, ev;
        (qv.update(zv, !Pv && Pz.shown), Zv.current) && (Zv.current = (Sv = Zv.current, ev = null !== (hv = zv[Zv.current.idx]) && void 0 !== hv ? hv : null, qh(Sv, ev) ? (Sv.attributes = ev.attributes, null !== ev.amount && Sv.amount > ev.amount && (Sv.amount = ev.amount), Sv) : null));
        bv(), null !== Mv && uv(Mv)(!0), Jv()
      })), (0, Sv.useEffect)((() => (Nv.gameBridge.send("setInventoryOpen", Pv), () => {
        Nv.gameBridge.send("setInventoryOpen", !1)
      })), [Pv]);
      const hz = (vv, zv) => {
        if (vv === TP.h) return void(vv => {
          const zv = Zv.current;
          if (!zv || null === (0, NP.n)(Nv.gameBridge.latest("inventory"), zv.idx)) return;
          const Pv = vv ? Math.max(zv.amount, 1) : 1,
            hv = zv.amount - Pv;
          if (!Nv.gameBridge.send("removeInventoryItem", {
              slot: zv.idx,
              amount: Pv,
              drop: !0
            })) return;
          const Sv = Zv.current;
          Sv && (Sv.amount = Math.min(Sv.amount, hv), Sv.amount <= 0 && (Zv.current = null)), Jv()
        })(zv);
        const Pv = null === vv ? null : (0, NP.n)(Nv.gameBridge.latest("inventory"), vv);
        if (null !== Pv) {
          var hv, Sv, ev;
          const gv = zv && null !== (hv = Pv.amount) && void 0 !== hv ? hv : 1;
          Nv.gameBridge.send("removeInventoryItem", {
            slot: vv,
            amount: gv,
            drop: !0
          }), vv === (null === (Sv = Qv.current) || void 0 === Sv ? void 0 : Sv.idx) && (Qv.current.amount -= gv, Qv.current.amount <= 0 && Ev(), Jv()), vv === (null === (ev = Zv.current) || void 0 === ev ? void 0 : ev.idx) && (Zv.current = null, Jv())
        }
      };
      (0, Ov.d)("inventoryDropRequested", (vv => {
        Pv && Mv !== TP.h && hz(Mv, vv)
      }));
      const Sz = (vv, zv) => {
        let Pv = zv;
        if (zv === TP.h) {
          if (!Zv.current) return;
          Pv = Zv.current.idx
        }
        const hv = rv(vv, Pv);
        if (hv && Qv.current && (Qv.current.idx === Pv ? Qv.current.idx = vv : Qv.current.idx === vv && (Qv.current.idx = Pv)), hv && zv === TP.h) {
          const vv = (0, NP.n)(Nv.gameBridge.latest("inventory"), Pv);
          Zv.current = vv ? {
            idx: Pv,
            name: vv.name,
            attributes: vv.attributes,
            amount: vv.amount
          } : null
        }
        Jv()
      };
      (0, Ov.d)("numberKeyPressed", (vv => {
        null !== Mv && Pv && Sz(vv - 1, Mv)
      })), (0, Sv.useEffect)((() => {
        Pv || (Zv.current = null, Ev(), vz(null))
      }), [Pv, Ev, vz, Zv]);
      const ez = Zv.current;
      (0, Sv.useEffect)((() => {
        Mv === TP.h && uv(TP.h)(!0)
      }), [ez, Mv, uv]);
      const gz = () => {
        ov(), bv(), Jv()
      };
      (0, Ov.d)("chestRefreshed", gz), (0, Ov.d)("inventorySynced", gz);
      const [pz, dz] = (0, Sv.useState)(new Map), Nz = null !== (zv = pz.get(pv)) && void 0 !== zv ? zv : null, lz = (vv, zv) => {
        dz((Pv => {
          const hv = Pv.get(vv);
          return hv && hv.name === zv.name && hv.sp === zv.sp ? Pv : new Map(Pv).set(vv, zv)
        }))
      };
      (0, Yv.g)("craftingRecipesEdited", (() => {
        Jv()
      })), (0, Yv.g)(BP.d, (vv => {
        let {
          variation: zv,
          itemName: Pv
        } = vv;
        lz(zv, {
          name: Pv,
          sp: 0
        })
      }));
      const [Tz, Wz] = (0, Sv.useState)(null), [wz, az] = (0, Sv.useState)(null);
      (0, Ov.d)("enchantingTableOpened", (vv => {
        let {
          position: zv,
          blockName: Pv
        } = vv;
        Wz(zv), az(Pv)
      }));
      const [sz, Cz] = (0, Sv.useState)(""), [iz, cz] = (0, Sv.useState)(null);
      (0, Sv.useEffect)((() => {
        Pv && Fv.current && (Fv.current.scrollTop = Dv.current)
      }), [Pv]);
      return (vv => {
        const zv = (0, Sv.useRef)(vv);
        zv.current = vv, (0, Sv.useEffect)((() => {
          if (!vv.show) return;
          const Pv = (vv, Pv, hv, Sv) => {
              const {
                getPointerDownForIdx: ev,
                getPointerUpForIdx: gv
              } = zv.current;
              ev(vv)(Hh(Pv, hv, Sv)), gv(vv)(Hh(Pv, hv, Sv))
            },
            hv = {
              primary: (vv, zv) => {
                Pv(vv, zv, 0, !1)
              },
              secondary: (vv, zv) => {
                Pv(vv, zv, 2, !1)
              },
              quickMove: (vv, zv) => {
                Pv(vv, zv, 0, !0)
              },
              dropHeld: (vv, Pv) => {
                zv.current.getPointerDownForIdx(TP.d)(Hh(Pv, vv ? 0 : 2, !1))
              },
              dropSlot: (vv, Pv) => {
                zv.current.dropFromIdx(vv, Pv)
              },
              swapWithHotbar: (vv, Pv) => {
                zv.current.swapWithHotbar(vv, Pv)
              },
              cancel: () => {
                zv.current.removeDraggedInfoRef()
              },
              isHolding: () => !!zv.current.draggedInfoRef.current,
              hasItemAt: vv => {
                const {
                  draggedInfoRef: Pv,
                  specialItemRef: hv
                } = zv.current;
                if (vv === TP.h) return !!hv.current;
                const Sv = (0, NP.n)(Nv.gameBridge.latest("inventory"), vv);
                return !!Sv && (0, OP.c)(vv, (0, NP.e)(Sv), [Pv.current, hv.current]).shown
              },
              hover: (vv, Pv) => {
                const {
                  moveFollowerTo: hv,
                  getSetHovering: Sv
                } = zv.current;
                hv(Pv.clientX, Pv.clientY), Sv(null !== vv && void 0 !== vv ? vv : void 0)(null !== vv, void 0, {
                  pageX: Pv.clientX,
                  pageY: Pv.clientY
                })
              },
              moveTo: vv => {
                zv.current.moveFollowerTo(vv.clientX, vv.clientY)
              },
              close: () => {
                zv.current.close()
              }
            };
          return (0, hP.n)(hv)
        }), [vv.show])
      })({
        show: Pv,
        close: Kv,
        draggedInfoRef: Qv,
        specialItemRef: Zv,
        getPointerDownForIdx: kv,
        getPointerUpForIdx: Xv,
        getSetHovering: uv,
        moveFollowerTo: zz,
        removeDraggedInfoRef: Ev,
        dropFromIdx: hz,
        swapWithHotbar: Sz
      }), (0, Sv.useEffect)((() => {
        av.j.zC("inventoryDraggedItemUpdated", {
          draggedInfo: Qv.current,
          specialItemInfo: Zv.current,
          setHovered: uv,
          pointerDown: kv,
          pointerUp: Xv,
          variation: Uv ? pv : void 0,
          craftFlyAnims: mv
        })
      })), (0, lv.jsxs)(tv.b, {
        show: Pv,
        style: {
          touchAction: Pv ? "none" : void 0
        },
        children: [Qv.current && (0, lv.jsx)(sP, {
          draggedInfo: Qv.current,
          toAddRef: Iv
        }), Qv.current && Bv && (0, lv.jsx)(CP, {
          className: "DraggedInvenItemName",
          displayInfo: Zh(Qv.current),
          domRef: null
        }), !Qv.current && yv && (0, lv.jsx)(CP, {
          displayInfo: yv,
          domRef: Lv
        }), Hv.current && Qv.current && (0, lv.jsx)(iP, {
          info: Hv.current,
          draggedInfo: Qv.current
        }), mv.map((vv => (0, lv.jsx)(lP.e, {
          anim: vv,
          onComplete: fv
        }, vv.id))), (0, lv.jsx)(gv.c, {
          show: Pv,
          className: "InventoryBackgroundScreen",
          globallyUniqueKey: "Inventory",
          close: Kv,
          togglePointerLock: !1,
          closeOnPressBackground: !1,
          preventContextMenu: !0,
          pointerDown: kv(TP.d),
          pointerUp: Xv(TP.d),
          doGameplayStartStopOnShow: !0
        }), cv && (0, lv.jsxs)("div", {
          className: "EntireInventoryWrapper",
          children: [(0, lv.jsx)("div", {
            ref: Tv,
            className: "InventoryAdOuter",
            children: (0, lv.jsx)(dP.d, {
              info: {
                adType: "leaderboard",
                adId: 6,
                adAlias: "inventory"
              },
              sizeInfo: {
                parentRef: Tv
              },
              verticalAlign: "start",
              showing: Pv && wv,
              extraContrastBackgroundBox: "top",
              noFillShowBloxdAdProbability: 0,
              autoRefreshMode: "none"
            })
          }), (0, lv.jsxs)("div", {
            className: "InventoryWrapper",
            children: [(0, lv.jsxs)("div", {
              className: GP()("Inventory", {
                WithPanelButtons: Cv,
                WideChestOpen: iv
              }),
              children: [(0, lv.jsx)("div", {
                className: "InventoryFiller"
              }), (0, lv.jsx)(gP, {
                show: Pv,
                buttons: sv
              }), (0, lv.jsxs)("div", {
                className: "InvenBody",
                children: [(0, lv.jsx)(Fh, {
                  variation: pv,
                  canCraft: Uv,
                  show: Pv,
                  creativeMounted: Gv,
                  specialItemRef: Zv,
                  draggedInfo: Qv.current,
                  getSetHovering: uv,
                  getPointerDownForIdx: kv,
                  getPointerUpForIdx: Xv,
                  enchantingTablePosition: Tz,
                  enchantingTableBlockName: wz,
                  selectedCraftable: Nz,
                  dispatchSelectedCraftable: vv => {
                    lz(pv, vv)
                  },
                  creativeScrollDiv: Fv,
                  creativeSearchVal: sz,
                  setCreativeSearchVal: Cz,
                  creativeCategory: iz,
                  setCreativeCategory: cz,
                  onCraft: function(vv, zv) {
                    let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    if (ov(), (vv || Pv.length > 0) && jv((zv => {
                        const hv = [...zv],
                          Sv = zv.filter((vv => "ingredient" === vv.kind)).length;
                        for (const vv of Pv.slice(0, Math.max(0, 24 - Sv))) hv.push({
                          id: (0, lP.h)(),
                          ...vv,
                          to: vv.to
                        });
                        return vv && hv.push({
                          id: (0, lP.h)(),
                          ...vv,
                          to: (0, NP.i)(vv.Vl)
                        }), hv
                      })), null !== zv) {
                      var hv;
                      const vv = Nv.gameBridge.latest("inventory");
                      (0, nv.yb)(null === (hv = (0, NP.n)(vv, zv)) || void 0 === hv ? void 0 : hv.name) ? kv(zv)({
                        button: 0,
                        shiftKey: !0
                      }): rv(zv, vv.selectedSlot)
                    }
                  }
                }), (0, lv.jsx)(Uh, {
                  draggedInfo: Qv.current,
                  specialItemInfo: Zv.current,
                  craftFlyAnims: mv,
                  getSetHovering: uv,
                  getPointerDownForIdx: kv,
                  getPointerUpForIdx: Xv,
                  variation: pv,
                  canCraft: Uv,
                  isNewSlot: vv => Rv.showNewItemIndicator && qv.isNew(vv)
                })]
              })]
            }), (0, lv.jsx)("div", {
              className: "InventoryAdOuter",
              children: (0, lv.jsx)("div", {
                ref: Wv,
                className: "InventoryAd",
                children: (0, lv.jsx)("div", {
                  className: "InventoryAdInner"
                })
              })
            })]
          })]
        })]
      })
    }));
    var Bh = Pv(1426),
      Jh = Pv(108);
    const Eh = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onOpen: Pv,
        onClose: hv
      } = vv;
      const ev = (0, Sv.useRef)(0),
        pv = () => (0, Bh.d)() && !(0, Bh.j)() && ev.current <= 2;
      zv = pv() && zv;
      const dv = () => {
        ev.current++, hv()
      };
      (0, Yv.g)("ctrlCrouchWithoutFullscreen", (() => {
        pv() && Pv()
      })), (0, Yv.g)("displaymodeFullscreenChange", (vv => {
        zv && vv && dv()
      }));
      const Nv = "crazygames" === Jh.o;
      return (0, lv.jsx)(gv.c, {
        close: dv,
        escDoesExit: !0,
        show: zv,
        togglePointerLock: !1,
        globallyUniqueKey: "CantCtrlCrouchIfNotFullscreenComp",
        children: (0, lv.jsxs)("div", {
          className: "CantCtrlCrouchIfNotFullscreenComp SmallTextBold",
          children: [(0, lv.jsx)("div", {
            className: "CantCtrlCrouchHeader",
            children: "Go fullscreen to crouch with ctrl"
          }), Nv && (0, lv.jsx)("div", {
            className: "CantCtrlCrouchInstructions SmallTextLight",
            children: "Press the crazygames full screen button"
          }), (0, lv.jsx)("div", {
            className: "CantCtrlCrouchSubtext SmallTextLight",
            children: "(Otherwise I can't stop CTRL+W closing the window!)"
          }), (0, lv.jsxs)("div", {
            className: "CantCtrlCrouchButtonsContainer",
            children: [!Nv && (0, lv.jsx)(wv.j, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                (0, Bh.p)(), dv()
              },
              children: (0, lv.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Go Fullscreen"
              })
            }), (0, lv.jsx)(wv.A, {
              className: "CantCtrlCrouchButtonWrapper",
              onClick: () => {
                dv()
              },
              children: (0, lv.jsx)("div", {
                className: "CantCtrlCrouchButton",
                children: "Nevermind"
              })
            })]
          })]
        })
      })
    }));
    var oh = Pv(3366),
      bh = Pv(3387),
      rh = Pv(1336),
      kh = Pv(3342),
      Xh = Pv(1342),
      uh = Pv(36086),
      vS = Pv(3356),
      zS = Pv(3364);

    function PS(vv, zv) {
      return (0, uh.d)(!0, vv, zv) ? () => {
        !async function(vv) {
          await kh.c.refresh();
          const {
            data: zv,
            failed: Pv
          } = kh.c.getState();
          if (null === zv || Pv) return;
          const hv = kh.c.getExclusion(vv);
          if ("blocked" === hv) return;
          const Sv = null === hv;
          rh.NotificationProvider.showCustomPopup({
            body: zv => {
              const Pv = Pv => ({
                text: vS.e[Pv].text,
                onClick: () => {
                  zv(), (0, zS.e)(Pv, vv, null)
                }
              });
              return (0, lv.jsx)(Xh.h, {
                title: Sv ? "socialBar:ignoreOrBlockAfterReport" : "socialBar:blockAfterReport",
                textOpts: {
                  title: {
                    playerName: vv
                  }
                },
                secondary: Sv ? Pv("ignore") : void 0,
                confirm: Pv("block"),
                cancel: {
                  text: "socialBar:notNow",
                  onClick: zv
                },
                destructive: !0
              })
            },
            disableExitButton: !0,
            unlockPointerKey: "exclusionAfterReport"
          })
        }(vv)
      } : null
    }
    Pv(3381);
    const hS = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onOpen: Pv,
        onClose: hv
      } = vv;
      const [ev, pv] = (0, Sv.useState)(""), [dv, Tv] = (0, Sv.useState)(""), [Wv, wv] = (0, Sv.useState)(null), [av, sv] = (0, Sv.useState)(null), Cv = (0, Ov.h)("hiddenPlayerNames"), iv = {
        kind: "worldCodeLine",
        onSubmit: (vv, zv) => {
          hv(), Nv.gameBridge.send("reportWorldCodeChat", {
            chatMsgId: av,
            ug: vv,
            details: zv
          })
        }
      }, cv = {
        kind: "player",
        shownPlayerName: (0, zz.f)(ev, Cv),
        onSubmit: (vv, zv) => {
          hv(), (0, bh.e)({
            playerId: dv,
            playerName: ev,
            chatMsgId: av,
            policyId: vv,
            details: zv,
            onAccepted: PS(ev, Cv)
          })
        }
      };
      return (0, Yv.g)("OpenReportMenu", (vv => {
        let {
          playerEId: zv,
          playerName: hv,
          al: Sv,
          serverChatMsgId: ev
        } = vv;
        Tv(zv), pv(hv), wv(Sv), sv(ev), Pv()
      })), (0, lv.jsx)(gv.c, {
        show: zv,
        close: hv,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeReportComponent",
        children: (0, lv.jsx)("div", {
          className: "ReportPanel",
          children: zv && (0, lv.jsx)(oh.d, {
            reported: null === dv ? iv : cv,
            chatMessage: Wv,
            inGame: !0,
            onCancel: hv
          })
        })
      })
    }));
    var SS = Pv(36360);
    const eS = (0, Sv.memo)((function(vv) {
      let {
        show: zv,
        onOpen: Pv,
        onClose: hv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)(), [pv, dv] = (0, Sv.useState)(null), [Tv, Wv] = (0, Sv.useState)(0);
      (0, Yv.g)("OpenDiscordReportBox", (vv => {
        Nv.gameBridge.send("requestDiscordReportKey", vv), Wv(0), Pv()
      }));
      const av = () => {
        hv(), dv(null), Wv(0)
      };
      return (0, Yv.g)("setDiscordReportKey", (vv => {
        dv(vv)
      })), (0, lv.jsx)(gv.c, {
        show: zv,
        close: av,
        padShowsHud: !0,
        togglePointerLock: !1,
        escDoesExit: !0,
        className: "ReportBackgroundScreen",
        globallyUniqueKey: "MakeDiscordReportComponent",
        children: (0, lv.jsx)("div", {
          className: "ReportPanel",
          children: (0, lv.jsx)(Xh.h, {
            className: "ReportKeyBox",
            title: "report:discordReportTitle",
            subtitle: "report:discordReportDescription",
            confirm: {
              text: "report:openDiscord",
              onClick: () => {
                window.open(SS.d, "_blank", "noreferrer")
              },
              padMouseOnly: !0
            },
            cancel: {
              text: "general:cancel",
              onClick: av
            },
            padStartsOn: "cancel",
            children: (0, lv.jsxs)("div", {
              className: "ReportKeyRow",
              children: [(0, lv.jsx)("div", {
                className: "ReportKeyInner",
                children: null !== pv && void 0 !== pv ? pv : ev("report:loadingReportKey")
              }), (0, lv.jsx)(wv.d, {
                className: "ReportKeyCopyButton",
                onClick: () => {
                  navigator.clipboard.writeText(pv).catch((vv => {
                    console.error("Failed to copy report key:", vv)
                  })), Wv(Date.now())
                },
                disabled: Date.now() - Tv < 1e3 || !pv,
                children: Date.now() - Tv < 1e3 ? ev("general:copied") : ev("general:copy")
              })]
            })
          })
        })
      })
    }));
    var gS = Pv(1272);
    const pS = {
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
      dS = (0, Sv.memo)((function(vv) {
        let {
          show: zv,
          onOpen: Pv,
          onClose: hv
        } = vv;
        const [ev, pv] = (0, Sv.useState)(null), dv = (0, Sv.useRef)(0), Tv = (0, Sv.useRef)(null), {
          t: Wv
        } = (0, bv.x)();
        (0, Yv.g)("EditCustomLobbyBlock", (vv => {
          let {
            pos: zv
          } = vv;
          pv(zv), null !== zv && Pv(), Tv.current.scrollTo(0, dv.current)
        }));
        const wv = vv => {
          Nv.gameBridge.send("setCustomLobbyBlock", {
            pos: ev,
            blockName: vv
          }), hv()
        };
        return (0, lv.jsx)(gv.c, {
          className: "CustomLobbyBlockEditorOuter",
          close: hv,
          escDoesExit: !0,
          show: zv,
          togglePointerLock: !1,
          globallyUniqueKey: "CustomLobbyBlockEditor",
          children: (0, lv.jsx)("div", {
            className: "CustomLobbyBlockEditor",
            ref: Tv,
            onScroll: () => {
              dv.current = Tv.current.scrollTop
            },
            children: (0, lv.jsx)("div", {
              className: "CustomLobbyBlockGameContainer",
              children: Object.entries(pS).map((vv => {
                let [zv, Pv] = vv;
                return (0, lv.jsxs)("div", {
                  className: "CustomLobbyBlockGame",
                  children: [(0, lv.jsx)("h2", {
                    className: "CustomLobbyBlockGameTitle",
                    children: Wv(zv)
                  }), (0, lv.jsx)("div", {
                    className: "CustomLobbyBlockCategoryContainer",
                    children: Object.entries(Pv).map((vv => {
                      let [zv, {
                        tooltip: Pv,
                        blocks: hv
                      }] = vv;
                      return (0, lv.jsxs)("div", {
                        className: "CustomLobbyBlockCategory",
                        children: [(0, lv.jsxs)("h3", {
                          className: "CustomLobbyBlockCategoryTitle",
                          children: [Wv(zv), (0, lv.jsx)(Ev.d, {
                            hoverInfo: Wv(Pv),
                            className: "CustomLobbyBlockTooltip"
                          })]
                        }), (0, lv.jsx)("div", {
                          className: "CustonLobbyBlockContainer",
                          children: hv.map((vv => (0, lv.jsx)(NS, {
                            blockName: vv,
                            selectBlock: wv
                          }, vv)))
                        })]
                      }, zv)
                    }))
                  })]
                }, zv)
              }))
            })
          })
        })
      })),
      NS = (0, Sv.memo)((function(vv) {
        var zv;
        let {
          blockName: Pv,
          selectBlock: hv
        } = vv;
        const Sv = (0, gh.c)(Pv),
          ev = null !== (zv = void 0 === Sv ? void 0 : (0, eh.displayNameOf)(Sv)) && void 0 !== zv ? zv : Pv,
          gv = void 0 === Sv ? void 0 : (0, eh.descriptionOf)(Sv);
        return (0, lv.jsx)(Ev.h, {
          tooltipInner: (0, lv.jsxs)("div", {
            className: "CustomLobbyBlockNameTooltip",
            children: [(0, lv.jsx)("div", {
              className: "CustomLobbyBlockName",
              children: (0, lv.jsx)(Fv.c, {
                text: ev
              })
            }), gv && (0, lv.jsx)("div", {
              className: "CustomLobbyBlockDescription",
              children: (0, lv.jsx)(Fv.c, {
                text: gv
              })
            })]
          }),
          children: (0, lv.jsx)("div", {
            className: "CustomLobbyBlockButton",
            onClick: () => hv(Pv),
            children: (0, lv.jsx)(eP.b, {
              itemName: Pv,
              amount: 1
            })
          })
        }, Pv)
      }));
    var lS = Pv(2775),
      TS = Pv(4008),
      WS = Pv(9044);

    function wS() {
      const vv = (0, Ov.h)("itemInfo");
      return (0, Sv.useMemo)((() => function(vv) {
        return {
          getDefaultItemStat(zv, Pv) {
            var hv;
            const Sv = vv[zv];
            return "description" === Pv ? null === Sv || void 0 === Sv ? void 0 : Sv.description : null !== (hv = null === Sv || void 0 === Sv ? void 0 : Sv.displayName) && void 0 !== hv ? hv : zv
          }
        }
      }(vv)), [vv])
    }
    const aS = (0, Sv.memo)((function(vv) {
        var zv, Pv, hv, ev, pv, dv, Nv, Tv, Wv, wv, av, sv, iv, cv, Gv, mv, jv, fv, Fv, nv, Ov, Dv, Kv;
        let {
          togglePointerLock: Vv,
          show: Uv,
          onOpen: Rv,
          onClose: xv
        } = vv;
        const {
          t: tv
        } = (0, bv.x)(), qv = wS(), Iv = (0, Sv.useRef)(null), Qv = (0, Sv.useRef)(TS.d.MobHungerLevel.Hungry), Zv = (0, Sv.useRef)(null), Av = (0, lS.d)(), Lv = (0, Sv.useRef)(null), Hv = (0, Sv.useRef)(null), Mv = Iv.current;
        (0, Sv.useEffect)((() => {
          if (!Uv) return;
          const vv = WS.j.openPet(Lv.current);
          return Hv.current = vv, () => {
            vv.close(), Hv.current = null
          }
        }), [Uv]), (0, Sv.useEffect)((() => {
          Uv && Mv && Hv.current.show(function(vv) {
            var zv;
            let {
              mobType: Pv,
              mobSettings: hv
            } = vv;
            return {
              mobType: Pv,
              variation: null !== (zv = hv.variation) && void 0 !== zv ? zv : "default",
              metaInfo: hv.metaInfo,
              tamed: !(0, ch.N)(hv.ownerDbId)
            }
          }(Mv))
        }), [Uv, Mv]), (0, Sv.useEffect)((() => {
          const vv = () => {
            var vv;
            const zv = TS.d.getMobHungerLevel(null === (vv = Iv.current) || void 0 === vv ? void 0 : vv.mobSettings.petInfo.lastFedAt);
            if (zv !== Qv.current && (Qv.current = zv, Av()), Zv.current) {
              var Pv;
              const vv = Date.now(),
                zv = TS.d.getNextStateAt(null === (Pv = Iv.current) || void 0 === Pv ? void 0 : Pv.mobSettings.petInfo.lastFedAt);
              let hv = Math.floor((zv - vv) / 1e3),
                Sv = "";
              if (hv > 3600) {
                Sv += Math.floor(hv / 60 / 60).toString().padStart(2, "0"), Sv += ":", hv %= 3600
              }
              const ev = hv % 60;
              Sv += Math.floor(hv / 60).toString().padStart(2, "0"), Sv += ":", Sv += ev.toString().padStart(2, "0"), Zv.current.textContent = Sv
            }
          };
          vv();
          const zv = setInterval(vv, 250);
          return () => {
            clearInterval(zv)
          }
        }), [Mv, Av]), (0, Yv.g)("showPetUi", (vv => {
          let {
            mobType: zv,
            mobSettings: Pv
          } = vv;
          Iv.current = {
            mobType: zv,
            mobSettings: Pv
          }, Uv || Rv()
        }));
        const yv = null === (zv = Iv.current) || void 0 === zv ? void 0 : zv.mobSettings.health,
          Bv = null === (Pv = Iv.current) || void 0 === Pv ? void 0 : Pv.mobSettings.maxHealth,
          Jv = TS.d.getFriendshipLevelInfo(null !== (hv = null === (ev = Iv.current) || void 0 === ev ? void 0 : ev.mobSettings.petInfo.friendshipPoints) && void 0 !== hv ? hv : 0);
        return (0, lv.jsx)(gv.c, {
          className: "PetUIOuter",
          close: xv,
          escDoesExit: !0,
          show: Uv,
          togglePointerLock: Vv,
          forcePointerUnlock: Uv,
          globallyUniqueKey: "PetUI",
          children: (0, lv.jsx)("div", {
            className: "PetUI",
            children: (0, lv.jsxs)("div", {
              className: "PetUIContainer",
              children: [(0, lv.jsxs)("div", {
                className: "PetUILeftSideContainer",
                children: [(0, lv.jsx)("div", {
                  className: "PetUITitle",
                  children: null !== (pv = null === (dv = Iv.current) || void 0 === dv ? void 0 : dv.mobSettings.name) && void 0 !== pv ? pv : "Your Pet"
                }), (0, lv.jsx)("div", {
                  className: "PetUICanvasContainer",
                  ref: Lv
                })]
              }), (0, lv.jsxs)("div", {
                className: "PetUIInformation",
                children: [!(0, ch.N)(null === (Nv = Iv.current) || void 0 === Nv ? void 0 : Nv.mobSettings.petInfo.friendshipPoints) && (0, lv.jsxs)("div", {
                  className: "PetUIFriendshipPoints",
                  children: [(0, lv.jsx)("div", {
                    className: "PetUIFriendshipPointsTitle",
                    children: tv("mobAiPlugin:friendshipTitle")
                  }), (0, lv.jsx)("div", {
                    className: "PetUIFriendshipHearts",
                    children: TS.d.getIconsFromFriendshipPoints(null !== (Tv = Iv.current.mobSettings.petInfo.friendshipPoints) && void 0 !== Tv ? Tv : 0).map(((vv, zv) => (0, lv.jsx)("div", {
                      className: "PetUIFriendshipHeart",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: vv,
                        amount: 1
                      })
                    }, zv)))
                  }), (0, lv.jsx)("div", {
                    className: "PetUIFriendshipBar",
                    children: (0, lv.jsxs)("div", {
                      className: "PetUIFriendshipBarBackground",
                      children: [(0, lv.jsx)("div", {
                        className: "PetUIFriendshipBarForeground",
                        style: {
                          transform: `scaleX(${Jv.totalPointsForNextLevel>0?Math.max(Jv.pointsIntoCurrentLevel/Jv.totalPointsForNextLevel,0):1})`,
                          transformOrigin: "left center"
                        }
                      }), (0, lv.jsx)("div", {
                        className: "PetUIFriendshipBarText",
                        children: Jv.totalPointsForNextLevel > 0 ? ` ${Math.ceil(Jv.pointsIntoCurrentLevel)}/${Math.ceil(Jv.totalPointsForNextLevel)}` : Math.ceil(Jv.pointsIntoCurrentLevel)
                      })]
                    })
                  })]
                }), (0, lv.jsxs)("div", {
                  className: "PetUIHungry",
                  children: [(0, lv.jsx)("div", {
                    className: "PetUIHungryTitle",
                    children: tv("mobAiPlugin:hungerTitle")
                  }), (0, lv.jsx)("div", {
                    className: "PetUIHungryCurrent",
                    children: TS.d.hungerLevelIcons[Qv.current].map(((vv, zv) => (0, lv.jsx)("div", {
                      className: "PetUIHungryIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: vv,
                        amount: 1
                      })
                    }, zv)))
                  }), (0, lv.jsxs)("div", {
                    className: "PetUIHungryLevel",
                    children: [tv(TS.d.hungerLevelTranslations[Qv.current].translationKey), Qv.current !== TS.d.MobHungerLevel.Starving && !(0, ch.N)(null === (Wv = Iv.current) || void 0 === Wv ? void 0 : Wv.mobSettings.petInfo.lastFedAt) && (0, lv.jsxs)("div", {
                      className: "PetUIHungryNext",
                      children: [tv("mobAiPlugin:nextFeedIn", {
                        state: tv(TS.d.hungerLevelTranslations[Qv.current + 1].translationKey)
                      }), ":", " ", (0, lv.jsx)("span", {
                        ref: Zv
                      })]
                    })]
                  })]
                }), (0, lv.jsx)(Ev.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, lv.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tv("mobAiPlugin:healthTooltip")
                  }),
                  children: (0, lv.jsxs)("div", {
                    className: GP()("PetUIQuickStatsItem", {
                      Disabled: (0, ch.N)(yv) || (0, ch.N)(Bv)
                    }),
                    children: [(0, lv.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: "Health",
                        amount: 1
                      })
                    }), (0, lv.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (0, ch.N)(yv) || (0, ch.N)(Bv) ? "" : (0, lv.jsxs)(lv.Fragment, {
                        children: [Math.ceil(yv), (0, lv.jsxs)("span", {
                          className: "PetUIQuickStatsValueMax",
                          children: ["/", Math.ceil(Bv)]
                        })]
                      })
                    })]
                  })
                }), (0, lv.jsx)(Ev.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, lv.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tv("mobAiPlugin:attackDamageTooltip")
                  }),
                  children: (0, lv.jsxs)("div", {
                    className: GP()("PetUIQuickStatsItem", {
                      Disabled: (0, ch.N)(null === (wv = Iv.current) || void 0 === wv ? void 0 : wv.mobSettings.attackDamage) || Iv.current.mobSettings.attackDamage <= 0
                    }),
                    children: [(0, lv.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: "Iron Sword",
                        amount: 1
                      })
                    }), (0, lv.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (av = Iv.current) || void 0 === av ? void 0 : av.mobSettings.attackDamage) || ""
                    })]
                  })
                }), (0, lv.jsx)(Ev.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, lv.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tv("mobAiPlugin:secondaryAttackDamageTooltip")
                  }),
                  children: (0, lv.jsxs)("div", {
                    className: GP()("PetUIQuickStatsItem", {
                      Disabled: (0, ch.N)(null === (sv = Iv.current) || void 0 === sv ? void 0 : sv.mobSettings.secondaryAttackDamage) || Iv.current.mobSettings.secondaryAttackDamage <= 0
                    }),
                    children: [(0, lv.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: "Stone Crossbow",
                        amount: 1
                      })
                    }), (0, lv.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: (null === (iv = Iv.current) || void 0 === iv ? void 0 : iv.mobSettings.secondaryAttackDamage) || ""
                    })]
                  })
                }), (0, lv.jsx)(Ev.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, lv.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tv("mobAiPlugin:speedTooltip")
                  }),
                  children: (0, lv.jsxs)("div", {
                    className: GP()("PetUIQuickStatsItem", {
                      Disabled: (0, ch.N)(null === (cv = Iv.current) || void 0 === cv ? void 0 : cv.mobSettings.baseRunningSpeed)
                    }),
                    children: [(0, lv.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: "Speed",
                        amount: 1
                      })
                    }), (0, lv.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: null !== (Gv = null === (mv = Iv.current) || void 0 === mv || null === (jv = mv.mobSettings.baseRunningSpeed) || void 0 === jv ? void 0 : jv.toFixed(2)) && void 0 !== Gv ? Gv : ""
                    })]
                  })
                }), (0, lv.jsx)(Ev.h, {
                  delayShow: 0,
                  delayHide: 0,
                  tooltipInner: (0, lv.jsx)("div", {
                    className: "PetUIQuickStatsTooltip",
                    children: tv("mobAiPlugin:saddledTooltip")
                  }),
                  children: (0, lv.jsxs)("div", {
                    className: GP()("PetUIQuickStatsItem", {
                      Disabled: "Saddled" !== (null === (fv = Iv.current) || void 0 === fv ? void 0 : fv.mobSettings.metaInfo)
                    }),
                    children: [(0, lv.jsx)("div", {
                      className: "PetUIQuickStatsIcon",
                      children: (0, lv.jsx)(eP.b, {
                        itemName: "Saddle",
                        amount: 1
                      })
                    }), (0, lv.jsx)("div", {
                      className: "PetUIQuickStatsValue",
                      children: "Saddled" === (null === (Fv = Iv.current) || void 0 === Fv ? void 0 : Fv.mobSettings.metaInfo) ? (0, lv.jsx)(Cv.b, {
                        name: "check"
                      }) : ""
                    })]
                  })
                }), !(0, ch.N)(null === (nv = Iv.current) || void 0 === nv ? void 0 : nv.mobSettings.tameInfo) && (0, lv.jsxs)(lv.Fragment, {
                  children: [(0, lv.jsxs)("div", {
                    className: "PetUIFood",
                    children: [(0, lv.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, lv.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, lv.jsx)(CS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:superlikedFoodTitle"
                          },
                          description: null,
                          tintColor: TS.d.feedTextColours[TS.d.MobFoodType.Superliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, lv.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: (0, lv.jsx)("div", {
                          className: "PetUIFoodItem",
                          children: Iv.current.mobSettings.petInfo.superlikedFoodKnown ? (0, lv.jsx)(sS, {
                            food: Iv.current.mobSettings.petInfo.superlikedFood
                          }) : (0, lv.jsx)(CS, {
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
                    }), (0, lv.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, lv.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, lv.jsx)(CS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:likedFoodTitle"
                          },
                          description: null,
                          tintColor: TS.d.feedTextColours[TS.d.MobFoodType.Liked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, lv.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Ov = Iv.current.mobSettings.tameInfo.likedFoods) || void 0 === Ov ? void 0 : Ov.filter((vv => !Iv.current.mobSettings.petInfo.superlikedFoodKnown || vv !== Iv.current.mobSettings.petInfo.superlikedFood)).map((vv => (0, lv.jsx)(sS, {
                          food: vv
                        }, vv)))
                      })]
                    }), (0, lv.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, lv.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, lv.jsx)(CS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:neutralFoodTitle"
                          },
                          description: null,
                          tintColor: TS.d.feedTextColours[TS.d.MobFoodType.Neutral],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, lv.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Dv = Iv.current.mobSettings.tameInfo.neutralFoods) || void 0 === Dv ? void 0 : Dv.map((vv => (0, lv.jsx)(sS, {
                          food: vv
                        }, vv)))
                      })]
                    }), (0, lv.jsxs)("div", {
                      className: "PetUIFoodSection",
                      children: [(0, lv.jsx)("div", {
                        className: "PetUIFoodTitle",
                        children: (0, lv.jsx)(CS, {
                          icon: "Pixelated Heart",
                          displayName: {
                            translationKey: "mobAiPlugin:dislikedFoodTitle"
                          },
                          description: null,
                          tintColor: TS.d.feedTextColours[TS.d.MobFoodType.Disliked],
                          className: "PetUIFoodTitleIcon"
                        })
                      }), (0, lv.jsx)("div", {
                        className: "PetUIFoodItems",
                        children: null === (Kv = Iv.current.mobSettings.tameInfo.dislikedFoods) || void 0 === Kv ? void 0 : Kv.map((vv => (0, lv.jsx)(sS, {
                          food: vv
                        }, vv)))
                      })]
                    })]
                  }), Iv.current.mobSettings.tameInfo.levelUpBonuses && (0, lv.jsx)("div", {
                    className: "PetUIFeedDrops",
                    children: Array.from({
                      length: TS.d.MAX_LEVEL + 1
                    }).map(((vv, zv) => {
                      const Pv = zv;
                      if (0 === Pv) return null;
                      const hv = Iv.current.mobSettings.tameInfo.levelUpBonuses[Pv],
                        Sv = TS.d.getBonusDisplayInfo(qv, Iv.current.mobSettings, Iv.current.mobType, hv);
                      return (0, lv.jsxs)("div", {
                        className: GP()("PetUIFeedDropContainer", {
                          Selected: Pv === TS.d.getFriendshipLevelInfo(Iv.current.mobSettings.petInfo.friendshipPoints).level
                        }),
                        children: [(0, lv.jsx)("div", {
                          className: "PetUIFeedDropHearts",
                          children: Array.from({
                            length: Pv
                          }).map(((vv, zv) => (0, lv.jsx)("div", {
                            className: "PetUIFeedDropHeart",
                            children: (0, lv.jsx)(eP.b, {
                              itemName: "Friendship",
                              amount: 1
                            })
                          }, `${Pv}-${zv}`)))
                        }), (0, lv.jsx)("div", {
                          className: "PetUIFeedDropItems",
                          children: Sv && (0, lv.jsx)(CS, {
                            icon: Sv.icon,
                            displayName: Sv.displayName,
                            description: Sv.description
                          })
                        })]
                      }, Pv)
                    }))
                  })]
                })]
              })]
            })
          })
        })
      })),
      sS = (0, Sv.memo)((function(vv) {
        let {
          food: zv,
          includeDescription: Pv = !1
        } = vv;
        const hv = wS(),
          Sv = hv.getDefaultItemStat(zv, "displayName"),
          ev = hv.getDefaultItemStat(zv, "description");
        return (0, lv.jsx)(CS, {
          icon: zv,
          displayName: Sv,
          description: Pv ? ev : null
        })
      })),
      CS = (0, Sv.memo)((function(vv) {
        let {
          icon: zv,
          displayName: Pv,
          description: hv,
          tintColor: Sv,
          className: ev = "PetUIFoodItem"
        } = vv;
        return (0, lv.jsx)(Ev.h, {
          delayHide: 0,
          delayShow: 0,
          tooltipInner: (0, lv.jsxs)("div", {
            className: "PetUIFoodItemTooltip",
            children: [(0, lv.jsx)("div", {
              className: "PetUIFoodItemName",
              children: (0, lv.jsx)(Fv.c, {
                text: Pv
              })
            }), hv && (0, lv.jsx)("div", {
              className: "PetUIFoodItemDescription",
              children: (0, lv.jsx)(Fv.c, {
                text: hv
              })
            })]
          }),
          children: (0, lv.jsx)("div", {
            className: ev,
            children: (0, lv.jsx)(eP.b, {
              itemName: zv,
              amount: 1,
              tintColor: Sv
            })
          })
        })
      }));
    var iS = Pv(3539),
      cS = Pv(1114),
      GS = Pv(1226),
      mS = Pv(36372),
      jS = Pv(36369),
      fS = Pv(1002),
      FS = Pv(2279);

    function YS(vv) {
      let {
        peers: zv
      } = vv;
      const [Pv, hv] = (0, Sv.useState)(null), ev = (0, Ov.h)("players");
      return (0, lv.jsx)("div", {
        className: "CodeEditorPresence",
        children: zv.map((vv => {
          var zv, Sv;
          const gv = null !== (zv = null === (Sv = ev.byId[vv.playerId]) || void 0 === Sv ? void 0 : Sv.cosmetics) && void 0 !== zv ? zv : {};
          return (0, lv.jsxs)("div", {
            className: GP()("PresenceIcon", {
              Viewer: !vv.isEditor
            }),
            style: {
              backgroundColor: vv.colour
            },
            onMouseEnter: () => {
              hv(vv.playerId)
            },
            onMouseLeave: () => {
              hv(null)
            },
            children: [(0, lv.jsx)(FS.e, {
              cosmetics: gv
            }), Pv === vv.playerId && (0, lv.jsx)("div", {
              className: "PresenceTooltip",
              style: {
                backgroundColor: vv.colour
              },
              children: vv.playerName
            })]
          }, vv.playerId)
        }))
      })
    }
    var nS = Pv(646),
      OS = Pv(36362),
      DS = Pv(36078),
      KS = Pv(36374);

    function VS(vv) {
      const zv = vv.split("/"),
        Pv = [];
      for (let hv = 1; hv < zv.length; hv++) Pv.push(zv.slice(0, hv).join("/"));
      return Pv
    }

    function US(vv) {
      return vv.slice(vv.lastIndexOf("/") + 1)
    }
    const RS = (0, Sv.memo)((function(vv) {
      var zv;
      let {
        files: Pv,
        activePath: hv,
        canEdit: ev,
        directoryLinked: gv,
        pluginNames: pv,
        activePluginName: dv,
        activePluginFile: Nv,
        onSelect: Tv,
        onSelectPlugin: Wv,
        onCreate: av,
        onRename: sv,
        onRenameFolder: iv,
        onDelete: cv,
        onToggleDirectorySync: Gv,
        schematics: mv,
        onManageSchematic: jv
      } = vv;
      const {
        t: fv
      } = (0, bv.x)(), Fv = null !== (zv = (0, jS.c)(Pv)) && void 0 !== zv ? zv : GS.i, Yv = Object.keys(Pv), [nv, Ov] = (0, Sv.useState)((() => new Set)), Dv = function(vv, zv, Pv) {
        const hv = {
          folders: new Map,
          files: []
        };
        for (const gv of vv) {
          if (gv === zv) continue;
          let vv = hv;
          for (const zv of VS(gv)) {
            let Pv = vv.folders.get(zv);
            Pv || (Pv = {
              folders: new Map,
              files: []
            }, vv.folders.set(zv, Pv)), vv = Pv
          }
          vv.files.push(gv)
        }
        const Sv = [];
        vv.includes(zv) && Sv.push({
          kind: "file",
          path: zv,
          name: US(zv),
          depth: 0
        });
        const ev = (vv, zv) => {
          const hv = [...vv.folders.entries()].sort(((vv, zv) => {
            let [Pv] = vv, [hv] = zv;
            return Pv.localeCompare(hv)
          }));
          for (const [gv, pv] of hv) {
            const vv = Pv.has(gv);
            Sv.push({
              kind: "folder",
              path: gv,
              name: US(gv),
              depth: zv,
              collapsed: vv
            }), vv || ev(pv, zv + 1)
          }
          vv.files.sort(((vv, zv) => vv.localeCompare(zv)));
          for (const Pv of vv.files) Sv.push({
            kind: "file",
            path: Pv,
            name: US(Pv),
            depth: zv
          })
        };
        return ev(hv, 0), Sv
      }(Yv, Fv, nv);
      (0, Sv.useEffect)((() => {
        Ov((vv => {
          const zv = new Set(vv);
          let Pv = !1;
          for (const Sv of VS(hv)) Pv = zv.delete(Sv) || Pv;
          return Pv ? zv : vv
        }))
      }), [hv]);
      const Kv = Yv.length >= Hz.z,
        Vv = (vv, zv) => {
          if (vv.length > mS.s) return `Path must be at most ${mS.s} characters`;
          if (!(0, mS.r)(vv)) return "Use a relative .js, .ts, or .d.ts path, e.g. lib/util.js";
          if ("index.d.ts" === vv) return "index.d.ts cannot be the world-code entry";
          const hv = !!zv && (0, jS.d)(zv, vv);
          if (zv && (0, jS.e)(zv) && !hv) return `Cannot rename ${zv} (only swapping ${GS.i} and ${GS.k} is allowed)`;
          if (vv in Pv) return "A file with that path already exists";
          if ((0, jS.e)(vv) && !hv) {
            if ((vv === GS.i ? GS.k : GS.i) in Pv) return `World code cannot have both ${GS.i} and ${GS.k}`
          }
          return null
        },
        Uv = vv => {
          rh.NotificationProvider.showInputPopup({
            title: "codeEditor:newFile",
            subtitle: "codeEditor:newFilePathHint",
            placeholderText: "lib/util.js",
            initialValue: void 0 === vv ? void 0 : `${vv}/`,
            submitText: "general:create",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: vv => Vv(vv)
          }).getResult().then((vv => {
            "notificationTornDown" !== vv && null !== vv && "submit" === vv.type && av(vv.value)
          }))
        },
        Rv = vv => {
          rh.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFile",
            subtitle: "codeEditor:newFilePathHint",
            initialValue: vv,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: zv => zv === vv ? "That is already the file's path" : Vv(zv, vv)
          }).getResult().then((zv => {
            "notificationTornDown" !== zv && null !== zv && "submit" === zv.type && sv(vv, zv.value)
          }))
        },
        xv = vv => {
          const zv = vv => vv.replace(/\/+$/, "");
          rh.NotificationProvider.showInputPopup({
            title: "codeEditor:renameFolder",
            subtitle: "codeEditor:renameFolderHint",
            initialValue: vv,
            submitText: "codeEditor:rename",
            secondaryButtonText: "general:cancel",
            middleScreenPopupContainerClassName: "FileTreePathPopup",
            validate: Pv => {
              const hv = zv(Pv);
              if (hv === vv) return "That is already the folder's path";
              for (const [zv, Sv] of(0, jS.k)(Yv, vv, hv)) {
                const vv = Vv(Sv, zv);
                if (null !== vv) return vv
              }
              return null
            }
          }).getResult().then((Pv => {
            "notificationTornDown" !== Pv && null !== Pv && "submit" === Pv.type && iv(vv, zv(Pv.value))
          }))
        },
        tv = vv => {
          rh.NotificationProvider.showPromptPopup({
            title: "codeEditor:deleteFile",
            subtitle: "codeEditor:deleteFileConfirm",
            textOpts: {
              subtitle: {
                path: vv
              }
            },
            confirmText: "general:delete",
            destructive: !0,
            cancelText: "general:cancel"
          }).getResult().then((zv => {
            !0 === zv && cv(vv)
          }))
        };
      return (0, lv.jsxs)("div", {
        className: "CodeEditorFileTree",
        children: [(0, lv.jsxs)("div", {
          className: "FileTreeHeader",
          children: [(0, lv.jsx)("span", {
            children: "Files"
          }), ev && !Kv && (0, lv.jsx)(wv.l, {
            className: "FileTreeHeaderButton",
            onClick: () => {
              Uv()
            },
            children: (0, lv.jsx)(Cv.b, {
              name: "plus"
            })
          })]
        }), (0, lv.jsxs)("div", {
          className: "FileTreeList",
          children: [Dv.map((vv => {
            const zv = vv.path;
            if ("folder" === vv.kind) return (0, lv.jsx)(qS, {
              path: zv,
              name: vv.name,
              depth: vv.depth,
              collapsed: vv.collapsed,
              onToggle: () => {
                var vv;
                vv = zv, Ov((zv => {
                  const Pv = new Set(zv);
                  return Pv.delete(vv) || Pv.add(vv), Pv
                }))
              },
              canCreate: ev && !Kv,
              canRename: ev,
              onCreate: Uv,
              onRename: xv
            }, `folder:${zv}`);
            const Sv = (0, jS.e)(zv),
              gv = GS.i in Pv && GS.k in Pv,
              pv = !Sv || gv,
              Nv = null === dv && zv === hv;
            return (0, lv.jsx)(QS, {
              path: zv,
              label: vv.name,
              depth: vv.depth,
              isActive: Nv,
              canRename: ev,
              onSelect: Tv,
              onRename: Rv,
              onDelete: tv,
              canDelete: pv && ev
            }, zv)
          })), (0, lv.jsxs)("div", {
            className: "FileTreeHeader Secondary",
            children: [(0, lv.jsxs)("span", {
              children: ["Schematics (", Object.keys(mv).length, "/", KS.d, ")"]
            }), ev && (0, lv.jsx)(wv.l, {
              className: "FileTreeHeaderButton",
              disabled: Object.keys(mv).length >= KS.d,
              onClick: () => {
                jv("")
              },
              children: (0, lv.jsx)(Cv.b, {
                name: "plus"
              })
            })]
          }), Object.keys(mv).sort().map((vv => (0, lv.jsx)(QS, {
            path: vv,
            isActive: !1,
            canRename: !1,
            canDelete: !1,
            onSelect: jv
          }, vv))), pv.length > 0 && (0, lv.jsxs)(lv.Fragment, {
            children: [(0, lv.jsx)("div", {
              className: "FileTreeHeader Secondary",
              children: (0, lv.jsx)("span", {
                children: "Plugins"
              })
            }), pv.map((vv => {
              var zv;
              const Pv = OS.e[vv],
                hv = Object.keys(null !== (zv = null === Pv || void 0 === Pv ? void 0 : Pv.files) && void 0 !== zv ? zv : {
                  "index.ts": ""
                }).sort(((vv, zv) => "index.ts" === vv ? -1 : "index.ts" === zv ? 1 : vv.localeCompare(zv)));
              return (0, lv.jsxs)("div", {
                children: [(0, lv.jsx)("div", {
                  className: "FileTreePluginName",
                  children: (0, jS.t)(vv)
                }), hv.map((zv => (0, lv.jsx)(QS, {
                  path: zv,
                  nested: !0,
                  isActive: dv === vv && Nv === zv,
                  canRename: !1,
                  onSelect: () => {
                    Wv(vv, zv)
                  },
                  canDelete: !1
                }, zv)))]
              }, vv)
            }))]
          })]
        }), (0, lv.jsx)("div", {
          className: "FileTreeFooter",
          children: (0, lv.jsx)(wv.d, {
            className: "FileTreeFooterButton",
            onClick: Gv,
            children: fv(gv ? "codeEditor:directorySyncUnlink" : "codeEditor:directorySyncLink")
          })
        })]
      })
    }));

    function xS(vv) {
      return vv > 0 ? {
        className: "Indented",
        style: {
          "--tree-depth": vv
        }
      } : {
        className: void 0,
        style: void 0
      }
    }

    function tS(vv) {
      let {
        depth: zv
      } = vv;
      return (0, lv.jsx)(lv.Fragment, {
        children: Array.from({
          length: zv
        }, ((vv, zv) => (0, lv.jsx)("span", {
          className: "FileTreeIndentGuide",
          style: {
            "--guide-level": zv
          }
        }, zv)))
      })
    }

    function qS(vv) {
      let {
        path: zv,
        name: Pv,
        depth: hv,
        collapsed: Sv,
        onToggle: ev,
        canCreate: gv,
        canRename: pv,
        onCreate: dv,
        onRename: Nv
      } = vv;
      const Tv = [];
      gv && Tv.push({
        icon: "plus",
        text: "codeEditor:newFile",
        onPointerDown: () => {
          dv(zv)
        }
      }), pv && Tv.push({
        icon: "pen",
        text: "codeEditor:renameFolder",
        onPointerDown: () => {
          Nv(zv)
        }
      });
      const Wv = xS(hv);
      return (0, lv.jsxs)("div", {
        className: GP()("FileTreeItem FileTreeFolder", Wv.className),
        style: Wv.style,
        children: [(0, lv.jsx)(tS, {
          depth: hv
        }), (0, lv.jsxs)("button", {
          type: "button",
          className: "FileTreeItemName",
          "aria-expanded": !Sv,
          onClick: ev,
          children: [(0, lv.jsx)(Cv.b, {
            className: "FileTreeFolderCaret",
            name: Sv ? "caret-right" : "caret-down"
          }), (0, lv.jsx)(Cv.b, {
            className: "FileTreeFolderIcon",
            name: Sv ? "folder" : "folder-open"
          }), Pv]
        }), (0, lv.jsx)(IS, {
          path: zv,
          actions: Tv
        })]
      })
    }

    function IS(vv) {
      let {
        path: zv,
        actions: Pv
      } = vv;
      const hv = (0, Sv.useRef)(null);
      return 0 === Pv.length ? null : (0, lv.jsxs)("div", {
        ref: hv,
        className: "FileTreeItemActions",
        children: [(0, lv.jsx)("button", {
          type: "button",
          className: "FileTreeActionMenuButton",
          "aria-label": `Actions for ${zv}`,
          children: (0, lv.jsx)(Cv.b, {
            name: "ellipsis"
          })
        }), (0, lv.jsx)(DS.e, {
          triggerElementRef: hv,
          options: Pv
        })]
      })
    }

    function QS(vv) {
      let {
        path: zv,
        label: Pv = zv,
        depth: hv = 0,
        isActive: Sv,
        canRename: ev,
        onSelect: gv,
        onRename: pv,
        onDelete: dv,
        canDelete: Nv,
        nested: Tv
      } = vv;
      const Wv = [];
      ev && pv && Wv.push({
        icon: "pen",
        text: "codeEditor:rename",
        onPointerDown: () => {
          pv(zv)
        }
      }), Nv && dv && Wv.push({
        icon: "xmark",
        text: "general:delete",
        onPointerDown: () => {
          dv(zv)
        }
      });
      const wv = xS(hv);
      return (0, lv.jsxs)("div", {
        className: GP()("FileTreeItem", wv.className, {
          Active: Sv,
          Nested: Tv
        }),
        style: wv.style,
        children: [(0, lv.jsx)(tS, {
          depth: hv
        }), (0, lv.jsx)("button", {
          type: "button",
          className: "FileTreeItemName",
          title: Pv === zv ? void 0 : zv,
          onClick: () => {
            gv(zv)
          },
          children: Pv
        }), (0, lv.jsx)(IS, {
          path: zv,
          actions: Wv
        })]
      })
    }
    async function ZS(vv) {
      const zv = (0, jS.c)(vv);
      if (!zv || "" === vv[zv].trim()) return [];
      const {
        collectImportedWorldCodePluginNames: hv
      } = await Promise.all([Pv.e(290), Pv.e(291)]).then((() => Pv(40771)));
      return (0, OS.b)(hv(vv))
    }
    var AS = Pv(36376);

    function LS(vv, zv) {
      const Pv = Object.keys(vv),
        hv = Object.keys(zv);
      if (Pv.length !== hv.length) return !1;
      for (const Sv of Pv)
        if (!(Sv in zv) || vv[Sv] !== zv[Sv]) return !1;
      return !0
    }

    function HS(vv, zv) {
      const Pv = [],
        hv = [],
        Sv = [];
      for (const ev of Object.keys(zv)) ev in vv ? vv[ev] !== zv[ev] && Sv.push(ev) : Pv.push(ev);
      for (const ev of Object.keys(vv)) ev in zv || hv.push(ev);
      return Pv.sort(), hv.sort(), Sv.sort(), {
        creates: Pv,
        deletes: hv,
        updates: Sv
      }
    }

    function MS(vv, zv) {
      var Pv;
      const hv = {
          ...vv
        },
        Sv = (0, jS.c)(zv),
        ev = (0, jS.c)(hv);
      if (GS.i in hv && GS.k in hv) {
        const vv = null !== Sv && void 0 !== Sv ? Sv : GS.k,
          Pv = vv === GS.i ? GS.k : GS.i;
        var gv;
        if (!(vv in hv)) hv[vv] = null !== (gv = zv[vv]) && void 0 !== gv ? gv : "";
        return delete hv[Pv], hv
      }
      var pv;
      return Sv && !(Sv in hv) ? (ev || (hv[Sv] = null !== (pv = zv[Sv]) && void 0 !== pv ? pv : ""), hv) : (ev || Sv || (hv[GS.i] = null !== (Pv = hv[GS.i]) && void 0 !== Pv ? Pv : "", delete hv[GS.k]), hv)
    }

    function yS(vv, zv) {
      const Pv = (0, jS.c)(zv),
        hv = GS.i in zv && GS.k in zv;
      return vv.filter((vv => !(0, jS.e)(vv) || (!!hv || Pv !== vv)))
    }
    async function BS(vv, zv, hv) {
      const Sv = vv.getLobbyFiles(),
        ev = (0, Hz.l)(hv, (0, jS.l)(Sv, zv)),
        gv = await vv.ensureJoined(zv),
        pv = (0, mS.v)(gv.docKey);
      if (gv.doc === ev) return;
      for (let Pv = 0; Pv < 100; Pv++) {
        const Pv = vv.getCollabSnapshot();
        if (Pv && (0, mS.v)(Pv.docKey) === pv && vv.getActivePath() === zv) {
          if (vv.replaceActiveDoc(pv, ev)) return;
          await (0, ch.V)(40)
        } else await (0, ch.V)(40)
      }
      const {
        ChangeSet: dv
      } = await Pv.e(286).then((() => Pv(40599))), lv = vv.getCollabSnapshot(), Tv = lv && (0, mS.v)(lv.docKey) === pv ? lv : gv;
      await async function(vv, zv, Pv, hv) {
        const Sv = vv.of({
            from: 0,
            to: Pv.length,
            insert: hv
          }, Pv.length),
          ev = JSON.stringify([{
            clientID: zv.clientID,
            changes: Sv.toJSON()
          }]),
          gv = (0, mS.v)(zv.docKey);
        ev.length <= mS.d ? Nv.gameBridge.send("sendCodeCollab", {
          ah: mS.b.Push,
          sh: gv,
          Ch: zv.version,
          mh: ev
        }) : await (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${zv.httpConfig.gsUrl}/code/collab-push`, iS.j["collab-push"].toBuffer({
          gameNameWithVariation: zv.httpConfig.gameNameWithVariation,
          lobbyName: zv.httpConfig.lobbyName,
          docKey: gv,
          version: zv.version,
          updates: ev
        }), {
          retries: 0
        })
      }(dv, Tv, Tv.doc, ev)
    }
    class JS {
      constructor(vv) {
        this.handle = null, this.lastSynced = {}, this.lastLobbySeen = null, this.pendingDocText = new Map, this.flushingDocText = !1, this.recheckingDisk = !1, this.stopWatch = null, this.lobbyPollTimer = null, this.running = !1, this.applying = !1, this.reconcileSettled = !1, this.reconcileInFlight = !1, this.linked = !1, this.scaffoldedPluginNamesKey = null, this.scaffoldingLocalTypes = Promise.resolve(), this.bridge = void 0, this.bridge = vv
      }
      async writeLobbyFiles(vv) {
        const zv = {
            ...this.bridge.getLobbyFiles()
          },
          Pv = {
            ...zv
          };
        for (const {
            path: ev,
            text: gv
          }
          of vv) Pv[ev] = gv;
        if (!vv.every((vv => {
            let {
              path: zv,
              text: hv
            } = vv;
            return (0, Hz.l)(hv, (0, jS.l)(Pv, zv)) === hv
          }))) return !1;
        const hv = [];
        try {
          for (const {
              path: zv,
              text: Pv
            }
            of vv) hv.push(zv), zv in this.bridge.getLobbyFiles() || (this.bridge.createFile(zv, {
            focus: !1
          }), await this.bridge.waitForLobbyPath(zv, !0)), await BS(this.bridge, zv, Pv)
        } catch (Sv) {
          for (const vv of hv) vv in zv ? await BS(this.bridge, vv, zv[vv]).catch((zv => {
            console.error("World Code AI: couldn't put back", vv, zv)
          })) : this.bridge.deleteFile(vv);
          throw Sv
        }
        return !0
      }
      isLinked() {
        return this.linked
      }
      async linkFolder() {
        if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), !1;
        const vv = await (0, AS.y)(this.bridge.getStorageKey());
        return !!vv && (this.handle = vv, this.linked = !0, this.reconcileSettled = !1, await this.scaffoldLocalTypes(vv), !0)
      }
      async unlinkFolder() {
        const vv = this.bridge.getStorageKey();
        this.pendingDocText.clear(), this.stopContinuousSync(), this.handle = null, this.linked = !1, this.reconcileSettled = !1, this.lastSynced = {}, this.lastLobbySeen = null, this.scaffoldedPluginNamesKey = null, await (0, AS.b)(vv), this.bridge.onUnlinked()
      }
      async tryRestoreHandle() {
        const vv = this.bridge.getStorageKey(),
          zv = await (0, AS.u)(vv);
        return !!zv && (!!await (0, AS.g)(zv, "readwrite") && (this.handle = zv, this.linked = !0, await (0, AS.M)(vv, zv), await this.scaffoldLocalTypes(zv), !0))
      }
      scaffoldLocalTypes(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.bridge.getLobbyFiles();
        return this.scaffoldingLocalTypes = this.scaffoldingLocalTypes.then((async () => {
          try {
            const hv = (await ZS(zv)).map((vv => OS.e[vv])),
              Sv = hv.map((vv => {
                var zv;
                return `${vv.name}:${Object.keys(null!==(zv=null===vv||void 0===vv?void 0:vv.files)&&void 0!==zv?zv:{}).sort().join(",")}`
              })).join("\0");
            if (this.scaffoldedPluginNamesKey === Sv) return;
            const {
              ensureLocalBloxdTypes: ev
            } = await Promise.all([Pv.e(82), Pv.e(288), Pv.e(293)]).then((() => Pv(40778)));
            await ev(vv, hv), this.scaffoldedPluginNamesKey = Sv
          } catch (hv) {
            console.error("[WorldCodeDirectorySync] Failed to scaffold local @bloxd types", hv)
          }
        })), this.scaffoldingLocalTypes
      }
      async startWhenReady() {
        this.linked && this.handle && !this.running && !this.reconcileInFlight && this.bridge.getCollabSnapshot() && (this.reconcileSettled ? this.beginWatch() : await this.runInitialReconcileAndSync())
      }
      stopContinuousSync() {
        this.flushDocTextToDisk(), this.running = !1, this.stopWatch && (this.stopWatch(), this.stopWatch = null), this.lobbyPollTimer && (clearInterval(this.lobbyPollTimer), this.lobbyPollTimer = null)
      }
      async onLobbyFilesChanged(vv) {
        this.handle && await this.scaffoldLocalTypes(this.handle, vv), this.running && this.handle && !this.applying && await this.applyRemoteTreeToDisk(vv)
      }
      async onDocTextChanged(vv, zv) {
        if (!this.handle) return;
        const Pv = [this.scaffoldLocalTypes(this.handle, {
          ...this.bridge.getLobbyFiles(),
          [vv]: zv
        })];
        this.running && (this.pendingDocText.set(vv, zv), Pv.push(this.flushDocTextToDisk())), await Promise.all(Pv)
      }
      async flushDocTextToDisk() {
        if (this.flushingDocText || this.applying || !this.handle || 0 === this.pendingDocText.size) return;
        const vv = this.handle;
        this.flushingDocText = !0, this.applying = !0;
        try {
          for (; this.pendingDocText.size > 0;) {
            const zv = [...this.pendingDocText];
            this.pendingDocText.clear();
            for (const [Pv, hv] of zv) this.lastSynced[Pv] !== hv && (await (0, AS.S)(vv, Pv, hv), this.lastSynced = {
              ...this.lastSynced,
              [Pv]: hv
            })
          }
        } catch (zv) {
          console.error("[WorldCodeDirectorySync] Failed to write remote doc to disk", zv), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
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
            await this.onDiskFilesChanged(await (0, AS.C)(this.handle))
          } catch (vv) {
            console.error("[WorldCodeDirectorySync] Failed to re-check disk after sync", vv)
          } finally {
            this.recheckingDisk = !1
          }
        }
      }
      async runInitialReconcileAndSync() {
        if (this.handle && !this.reconcileInFlight) {
          this.reconcileInFlight = !0;
          try {
            if (!await (0, AS.g)(this.handle, "readwrite")) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncPermissionDenied"), "warning"), void(this.reconcileSettled = !0);
            await this.bridge.pullLobbyFiles();
            const zv = this.bridge.getLobbyFiles(),
              Pv = await (0, AS.C)(this.handle);
            for (const vv of Object.keys(zv).filter(KS.b)) {
              if (Pv[vv] === AS.m) return void this.bridge.setMessage(`Move ${vv} outside the linked folder before syncing its placeholder.`, "warning");
              Pv[vv] = KS.m
            }
            if (LS(Pv, zv)) {
              for (const vv of Object.keys(zv).filter(KS.b)) await (0, AS.S)(this.handle, vv, KS.m);
              return this.lastSynced = {
                ...Pv
              }, void this.beginWatch()
            }
            const hv = await this.promptReconcile(function(vv) {
              return null !== (0, jS.c)(vv)
            }(Pv));
            if ("unlink" === hv) return void await this.unlinkFolder();
            if ("dismissed" === hv) return void(this.reconcileSettled = !0);
            this.applying = !0;
            try {
              if ("local" === hv) {
                if (!this.bridge.canEditCode()) return this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncNeedEdit"), "warning"), void(this.reconcileSettled = !0);
                await this.applyLocalTreeToLobby(Pv);
                for (const vv of Object.keys(zv).filter(KS.b)) await (0, AS.S)(this.handle, vv, KS.m);
                this.lastSynced = {
                  ...await (0, AS.C)(this.handle)
                }
              } else await (0, AS.W)(this.handle, zv), this.lastSynced = {
                ...zv
              }
            } catch (vv) {
              return console.error("[WorldCodeDirectorySync] Reconcile failed", vv), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning"), void(this.reconcileSettled = !0)
            } finally {
              this.applying = !1, this.settleAfterApplying()
            }
            this.beginWatch()
          } finally {
            this.reconcileInFlight = !1
          }
        }
      }
      async promptReconcile(vv) {
        return await new Promise((zv => {
          const Pv = [{
              choice: "local",
              Button: wv.d,
              labelKey: "directorySyncUseLocal",
              descriptionKey: "directorySyncUseLocalDescription"
            }, {
              choice: "live",
              Button: wv.d,
              labelKey: "directorySyncUseLive",
              descriptionKey: "directorySyncUseLiveDescription"
            }, {
              choice: "unlink",
              Button: wv.d,
              labelKey: "directorySyncUseUnlink",
              descriptionKey: "directorySyncUseUnlinkDescription"
            }],
            hv = (0, lv.jsxs)("div", {
              className: "CodeEditorDirectorySyncPrompt",
              children: [(0, lv.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptTitle",
                children: this.bridge.t("codeEditor:directorySyncDifferTitle")
              }), (0, lv.jsx)("div", {
                className: "CodeEditorDirectorySyncPromptBody",
                children: vv ? this.bridge.t("codeEditor:directorySyncDifferBody") : this.bridge.t("codeEditor:directorySyncLocalInvalidEntry")
              }), (0, lv.jsx)("div", {
                className: "CodeEditorDirectorySyncOptions",
                children: Pv.filter((zv => "local" !== zv.choice || vv)).map((vv => {
                  let {
                    choice: Pv,
                    Button: hv,
                    labelKey: ev,
                    descriptionKey: gv
                  } = vv;
                  return (0, lv.jsxs)("div", {
                    className: "CodeEditorDirectorySyncOption",
                    children: [(0, lv.jsx)(hv, {
                      className: "CodeEditorButton",
                      onClick: () => {
                        (vv => {
                          Sv.tearDownNotification(), zv(vv)
                        })(Pv)
                      },
                      children: this.bridge.t(`codeEditor:${ev}`)
                    }), (0, lv.jsx)("div", {
                      className: "CodeEditorDirectorySyncOptionDescription",
                      children: this.bridge.t(`codeEditor:${gv}`)
                    })]
                  }, Pv)
                }))
              })]
            }),
            Sv = rh.NotificationProvider.showCustomPopup({
              body: hv,
              disableExitButton: !0,
              disablePressBackgroundToClose: !0,
              unlockPointerKey: "worldCodeDirectorySync"
            });
          Sv.getResult().then((vv => {
            "notificationTornDown" === vv && zv("dismissed")
          }))
        }))
      }
      beginWatch() {
        this.handle && (this.stopContinuousSync(), this.reconcileSettled = !0, this.running = !0, this.stopWatch = (0, AS.N)(this.handle, (vv => {
          this.onDiskFilesChanged(vv)
        })), this.lobbyPollTimer = setInterval((() => {
          this.pollRemoteLobbyFiles()
        }), 2e3))
      }
      async pollRemoteLobbyFiles() {
        if (this.running && !this.applying) try {
          await this.bridge.pullLobbyFiles()
        } catch (vv) {
          console.error("[WorldCodeDirectorySync] Lobby poll failed", vv)
        }
      }
      async onDiskFilesChanged(vv) {
        if (!this.running || !this.handle || this.applying) return;
        if (!this.bridge.canEditCode()) return;
        const zv = this.bridge.getLobbyFiles();
        let Pv = MS(vv, this.lastSynced);
        for (const ev in zv)
          if ((0, KS.b)(ev) && Pv[ev] === AS.m) return void this.bridge.setMessage("Move binary schematic files outside the linked folder. Add them through the Code Editor.", "warning");
        const hv = Object.keys(Pv).filter((vv => (0, KS.b)(vv) && !(vv in zv)));
        hv.length > 0 && this.bridge.setMessage("Add or rename schematics in the Code Editor. Unknown local schematic files are not uploaded.", "warning");
        for (const ev of Object.keys(zv).filter(KS.b))(ev in Pv || hv.length > 0 || !(ev in this.lastSynced)) && (Pv[ev] = KS.m);
        if (!LS(Pv, vv)) {
          this.applying = !0;
          try {
            await this.persistEntryRepair(vv, Pv), Pv = MS(await (0, AS.C)(this.handle), this.lastSynced)
          } finally {
            this.applying = !1
          }
        }
        if (!LS(Pv, this.lastSynced)) {
          this.applying = !0;
          try {
            const vv = HS(this.lastSynced, Pv);
            if (await this.pushDiskDeltaToLobby(Pv, zv), null !== this.lastLobbySeen)
              for (const Pv of [...vv.creates, ...vv.updates, ...vv.deletes])(0, KS.b)(Pv) || (Pv in zv ? this.lastLobbySeen[Pv] = zv[Pv] : delete this.lastLobbySeen[Pv]);
            this.lastSynced = {
              ...Pv
            }
          } catch (Sv) {
            console.error("[WorldCodeDirectorySync] Disk\u2192lobby sync failed", Sv), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async persistEntryRepair(vv, zv) {
        if (this.handle) {
          for (const Pv of Object.keys(vv)) Pv in zv || await (0, AS.E)(this.handle, Pv);
          for (const [Pv, hv] of Object.entries(zv)) vv[Pv] !== hv && await (0, AS.S)(this.handle, Pv, hv)
        }
      }
      async applyRemoteTreeToDisk(vv) {
        if (!this.handle) return;
        const zv = this.lastLobbySeen;
        if (null === zv) return void(this.lastLobbySeen = {
          ...vv
        });
        const Pv = Object.keys(vv).filter((Pv => zv[Pv] !== vv[Pv])),
          hv = Object.keys(zv).filter((zv => !(zv in vv)));
        if (0 !== Pv.length || 0 !== hv.length) {
          this.applying = !0;
          try {
            for (const zv of [...hv, ...Pv]) try {
              if (zv in vv) await (0, AS.S)(this.handle, zv, vv[zv]), this.lastSynced = {
                ...this.lastSynced,
                [zv]: vv[zv]
              }, this.lastLobbySeen = {
                ...this.lastLobbySeen,
                [zv]: vv[zv]
              };
              else {
                await (0, AS.E)(this.handle, zv);
                const vv = {
                  ...this.lastSynced
                };
                delete vv[zv], this.lastSynced = vv;
                const Pv = {
                  ...this.lastLobbySeen
                };
                delete Pv[zv], this.lastLobbySeen = Pv
              }
            } catch (Sv) {
              console.error("[WorldCodeDirectorySync] Lobby\u2192disk sync failed", Sv), this.bridge.setMessage(this.bridge.t("codeEditor:directorySyncError"), "warning")
            }
          } finally {
            this.applying = !1, this.settleAfterApplying()
          }
        }
      }
      async renameLobbyEntryIfSwitched(vv, zv) {
        const Pv = function(vv, zv) {
          const Pv = (0, jS.c)(vv),
            hv = (0, jS.c)(zv);
          return Pv && hv && Pv !== hv ? {
            from: Pv,
            to: hv
          } : null
        }(vv, zv);
        return !!Pv && (this.bridge.renameFile(Pv.from, Pv.to), await this.bridge.waitForLobbyPath(Pv.to, !0), !0)
      }
      async applyLocalTreeToLobby(vv) {
        var zv;
        const Pv = this.bridge.getActivePath();
        await this.renameLobbyEntryIfSwitched(this.bridge.getLobbyFiles(), vv);
        const hv = this.bridge.getLobbyFiles(),
          Sv = HS(hv, vv),
          ev = yS(Sv.deletes, hv);
        for (const Nv of Sv.creates)(0, KS.b)(Nv) || (this.bridge.createFile(Nv, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(Nv, !0));
        for (const Nv of ev)(0, KS.b)(Nv) || (this.bridge.deleteFile(Nv), await this.bridge.waitForLobbyPath(Nv, !1));
        if (!(0, jS.c)(this.bridge.getLobbyFiles()) && !(0, jS.c)(vv)) {
          if (this.bridge.createFile(GS.i, {
              focus: !1
            }), await this.bridge.waitForLobbyPath(GS.i, !0), !this.handle) return;
          await (0, AS.S)(this.handle, GS.i, ""), vv = {
            ...vv,
            [GS.i]: ""
          }
        }
        const gv = this.bridge.getLobbyFiles();
        for (const Nv of Object.keys(vv))(0, KS.b)(Nv) || gv[Nv] !== vv[Nv] && await BS(this.bridge, Nv, vv[Nv]);
        const pv = this.bridge.getLobbyFiles(),
          dv = Pv in pv ? Pv : null !== (zv = (0, jS.c)(pv)) && void 0 !== zv ? zv : GS.i;
        await this.bridge.ensureJoined(dv)
      }
      async pushDiskDeltaToLobby(vv, zv) {
        const Pv = this.bridge.getActivePath(),
          hv = await this.renameLobbyEntryIfSwitched(zv, vv) ? this.bridge.getLobbyFiles() : zv,
          Sv = HS(this.lastSynced, vv),
          ev = yS(Sv.deletes, hv).filter((vv => vv in hv));
        for (const gv of Sv.creates)(0, KS.b)(gv) || (gv in this.bridge.getLobbyFiles() || (this.bridge.createFile(gv, {
          focus: !1
        }), await this.bridge.waitForLobbyPath(gv, !0)), await BS(this.bridge, gv, vv[gv]));
        for (const gv of ev)(0, KS.b)(gv) ? await this.bridge.deleteSchematic(gv) : (this.bridge.deleteFile(gv), await this.bridge.waitForLobbyPath(gv, !1));
        for (const gv of Sv.updates)(0, KS.b)(gv) || await BS(this.bridge, gv, vv[gv]);
        Pv in this.bridge.getLobbyFiles() && this.bridge.getActivePath() !== Pv && await this.bridge.ensureJoined(Pv)
      }
    }
    var ES = Pv(1184);

    function oS() {
      const {
        websocketUrl: vv,
        gameNameWithVariation: zv,
        lobbyName: Pv
      } = Nv.gameBridge.latest("connectedGame");
      return {
        gsUrl: ES.clientSideServerUrls.getHttpUrlFromWebSocketUrl(vv),
        gameNameWithVariation: zv,
        lobbyName: Pv
      }
    }
    async function bS(vv) {
      const {
        gsUrl: zv,
        gameNameWithVariation: Pv,
        lobbyName: hv
      } = oS();
      return await (0, cS.postBinaryWithMetricsCookiesAndCustomResponse)(`${zv}/code/schematics`, iS.Vj.schematics.toBuffer({
        gameNameWithVariation: Pv,
        lobbyName: hv,
        request: JSON.stringify(vv)
      }), {
        retries: 0
      }, cS.HttpPayloadType.json)
    }
    var rS = Pv(35906);

    function kS(vv) {
      let {
        path: zv,
        revision: Pv
      } = vv;
      const [hv, ev] = (0, Sv.useState)(""), [gv, pv] = (0, Sv.useState)(!1), [dv, Nv] = (0, Sv.useState)(0);
      return (0, Sv.useEffect)((() => {
        let vv = !1;
        return ev(""), pv(!1), bS({
          action: "preview",
          path: zv
        }).then((zv => {
          vv || ev(`data:image/webp;base64,${zv.previewBase64}`)
        })).catch((zv => {
          console.error("Could not load schematic preview", zv), vv || pv(!0)
        })), () => {
          vv = !0
        }
      }), [zv, Pv, dv]), (0, lv.jsxs)("div", {
        className: "SchematicPreview",
        children: [hv && (0, lv.jsx)("img", {
          src: hv,
          alt: `Preview of ${zv}`
        }), !hv && !gv && (0, lv.jsx)(Dv.c, {
          loaderType: "Secondary"
        }), gv && (0, lv.jsxs)(lv.Fragment, {
          children: [(0, lv.jsx)("div", {
            className: "SmallTextLight",
            role: "status",
            children: "Preview unavailable."
          }), (0, lv.jsx)(wv.d, {
            onClick: () => {
              Nv(dv + 1)
            },
            children: "Retry preview"
          })]
        })]
      })
    }

    function XS(vv) {
      var zv;
      let {
        initialPath: Pv,
        onChanged: hv,
        onClose: ev
      } = vv;
      const gv = "" === Pv,
        [pv, dv] = (0, Sv.useState)(null),
        [Nv, Tv] = (0, Sv.useState)(Pv),
        [Wv, av] = (0, Sv.useState)(!1),
        [sv, Cv] = (0, Sv.useState)(!1),
        [iv, cv] = (0, Sv.useState)(null),
        [Gv, mv] = (0, Sv.useState)(!1),
        [jv, fv] = (0, Sv.useState)(""),
        Fv = (0, Sv.useRef)(null),
        Yv = (0, Sv.useRef)(!1),
        nv = (0, Sv.useRef)(!0);
      (0, Sv.useEffect)((() => (nv.current = !0, bS({
        action: "state"
      }).then((vv => {
        nv.current && dv(vv)
      })).catch((vv => {
        console.error("Could not load schematic assets", vv), nv.current && fv("Could not load schematics. Reopen this panel to retry.")
      })), () => {
        nv.current = !1
      })), []);
      const Ov = null === pv || void 0 === pv ? void 0 : pv.assets[Pv],
        Dv = Object.keys(null !== (zv = null === pv || void 0 === pv ? void 0 : pv.assets) && void 0 !== zv ? zv : {}).length,
        Kv = Nv.trim(),
        Vv = Kv ? (0, KS.b)(Kv) ? null !== pv && void 0 !== pv && pv.assets[Kv] && (gv || Kv !== Pv) ? "A schematic already uses that path." : "" : "Use a relative path ending in .bloxdschem." : "",
        Uv = !!Kv && !Vv && (gv ? Dv < KS.d : Kv !== Pv),
        Rv = Gv || !pv;
      async function xv(vv) {
        if (!Yv.current && nv.current) {
          Yv.current = !0, mv(!0), fv("");
          try {
            const zv = await bS({
              ...vv,
              expectedRevision: pv.revision
            });
            hv(zv), nv.current && ev()
          } catch (Pv) {
            var zv;
            if (console.error("Schematic asset operation failed", Pv), nv.current) fv(Pv instanceof Bv.c ? null !== (zv = Pv.errorMessageForUser) && void 0 !== zv ? zv : Pv.message : String(Pv));
            try {
              const vv = await bS({
                action: "state"
              });
              hv(vv), nv.current && dv(vv)
            } catch (Sv) {
              console.error("Could not refresh schematic assets", Sv)
            }
          } finally {
            Yv.current = !1, nv.current && mv(!1)
          }
        }
      }
      return (0, lv.jsxs)("div", {
        className: "WorldCodeSchematicPanel InputGenericPopup PromptGenericPopup FileTreePathPopup",
        children: [(0, lv.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: gv ? "New schematic" : Wv ? "Rename schematic" : "Schematic"
        }), jv && (0, lv.jsx)("div", {
          className: "InputGenericPopupError SmallTextLight",
          role: "alert",
          children: jv
        }), !pv && !jv && (0, lv.jsx)("div", {
          className: "SmallTextLight",
          children: "Loading schematic\u2026"
        }), (0, lv.jsxs)("fieldset", {
          disabled: Rv,
          children: [gv || Wv ? (0, lv.jsxs)("label", {
            className: "SchematicField",
            children: [(0, lv.jsx)("span", {
              className: "SmallTextBold",
              children: "Project path"
            }), (0, lv.jsx)("div", {
              className: "InputGenericPopupInputRow",
              children: (0, lv.jsx)(tP.c, {
                className: "InputGenericPopupInput",
                defaultValue: Pv,
                placeholderText: "maps/arena.bloxdschem",
                maxLength: 64,
                onValueChange: Tv
              }, Wv ? "rename" : "create")
            })]
          }) : (0, lv.jsx)("div", {
            className: "SchematicPath SmallTextBold",
            children: Pv
          }), (gv || Wv) && Vv && (0, lv.jsx)("div", {
            className: "InputGenericPopupError SmallTextLight",
            role: "alert",
            children: Vv
          }), gv ? (0, lv.jsxs)(lv.Fragment, {
            children: [Dv >= KS.d && (0, lv.jsxs)("div", {
              className: "SmallTextLight",
              children: ["Delete a schematic before adding another (", KS.d, " maximum)."]
            }), sv ? (0, lv.jsxs)(lv.Fragment, {
              children: [(0, lv.jsx)("div", {
                className: "SmallTextBold",
                children: "Choose from profile"
              }), (0, lv.jsx)("div", {
                className: "SchematicProfilePicker",
                "aria-disabled": Rv || !Uv,
                children: (0, lv.jsx)(rS.c, {
                  loading: null === iv,
                  schematics: null !== iv && void 0 !== iv ? iv : [],
                  disableAutoExport: !0,
                  onSchematicPicked: vv => {
                    !Rv && Uv && xv({
                      action: "profile",
                      path: Kv,
                      schematicId: vv.schematicId
                    })
                  }
                })
              }), (0, lv.jsx)("div", {
                className: "InputGenericPopupButtons",
                children: (0, lv.jsx)(wv.d, {
                  className: "InputGenericPopupButton",
                  disabled: Rv,
                  onClick: () => {
                    Cv(!1)
                  },
                  children: "Back"
                })
              })]
            }) : (0, lv.jsxs)("div", {
              className: "InputGenericPopupButtons",
              children: [(0, lv.jsx)(wv.d, {
                className: "InputGenericPopupButton",
                disabled: Rv || !Uv,
                onClick: () => {
                  Fv.current.click()
                },
                children: "Upload Schematic"
              }), (0, lv.jsx)(wv.d, {
                className: "InputGenericPopupButton",
                disabled: Rv || !Uv,
                onClick: () => {
                  !async function() {
                    if (Cv(!0), fv(""), !iv) try {
                      const vv = await (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${ES.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
                        retries: 0,
                        minTimeout: 3e3
                      });
                      nv.current && cv(vv)
                    } catch (vv) {
                      console.error("Could not load profile schematics", vv), nv.current && (Cv(!1), fv("Could not load your schematics. Try again."))
                    }
                  }()
                },
                children: "Choose from profile"
              })]
            }), (0, lv.jsx)("input", {
              ref: Fv,
              type: "file",
              accept: ".bloxdschem",
              hidden: !0,
              onChange: vv => {
                var zv;
                const Pv = null === (zv = vv.target.files) || void 0 === zv ? void 0 : zv[0];
                if (vv.target.value = "", !Pv) return;
                if (Pv.size > KS.h) return void fv("The schematic file is too large.");
                const hv = Kv;
                mv(!0);
                const Sv = new FileReader;
                Sv.onload = () => {
                  xv({
                    action: "upload",
                    path: hv,
                    base64: String(Sv.result).split(",")[1]
                  })
                }, Sv.onerror = () => {
                  console.error("Could not read schematic file", Sv.error), nv.current && (mv(!1), fv("Could not read the selected file."))
                }, Sv.readAsDataURL(Pv)
              }
            })]
          }) : Ov ? (0, lv.jsxs)(lv.Fragment, {
            children: [!Wv && (0, lv.jsx)(kS, {
              path: Pv,
              revision: pv.revision
            }), !Wv && (0, lv.jsxs)("p", {
              className: "SchematicDetails SmallTextLight",
              children: [Math.ceil(Ov.byteSize / 1024), " KB \xb7 ", Ov.dimensions.join(" \xd7 "), " blocks"]
            }), (0, lv.jsx)("div", {
              className: "InputGenericPopupButtons",
              children: Wv ? (0, lv.jsxs)(lv.Fragment, {
                children: [(0, lv.jsx)(wv.d, {
                  className: "InputGenericPopupButton",
                  disabled: Rv || !Uv,
                  onClick: () => {
                    xv({
                      action: "rename",
                      path: Pv,
                      newPath: Kv
                    })
                  },
                  children: "Rename"
                }), (0, lv.jsx)(wv.d, {
                  className: "InputGenericPopupButton",
                  disabled: Rv,
                  onClick: () => {
                    av(!1), Tv(Pv)
                  },
                  children: "Cancel"
                })]
              }) : (0, lv.jsxs)(lv.Fragment, {
                children: [(0, lv.jsx)(wv.d, {
                  className: "InputGenericPopupButton",
                  disabled: Rv,
                  onClick: () => {
                    av(!0)
                  },
                  children: "Rename"
                }), (0, lv.jsx)(wv.A, {
                  className: "InputGenericPopupButton",
                  disabled: Rv,
                  onClick: () => {
                    xv({
                      action: "remove",
                      path: Pv
                    })
                  },
                  children: "Delete"
                })]
              })
            })]
          }) : pv && (0, lv.jsx)("div", {
            className: "SmallTextLight",
            children: "This schematic is no longer in the project."
          })]
        })]
      })
    }

    function uS(vv) {
      if ("string" !== typeof vv) return null;
      try {
        const zv = JSON.parse(vv);
        return (0, jS.g)(null === zv || void 0 === zv ? void 0 : zv.worldCodeEngine) && "boolean" === typeof zv.engineLocked && function(vv) {
          if (null === vv) return !0;
          const zv = null === vv || void 0 === vv ? void 0 : vv.location;
          return "string" === typeof(null === vv || void 0 === vv ? void 0 : vv.reason) && (null === zv || "string" === typeof(null === zv || void 0 === zv ? void 0 : zv.path) && Number.isInteger(zv.line))
        }(zv.fallback) ? zv : (console.error("[CodeCollab] Malformed engine settings", vv), null)
      } catch (zv) {
        return console.error("[CodeCollab] Failed to parse engine settings", zv), null
      }
    }

    function ve(vv) {
      let {
        fallback: zv,
        onGoToLine: Pv
      } = vv;
      const {
        t: hv
      } = (0, bv.x)(), {
        location: Sv
      } = zv;
      return (0, lv.jsxs)("div", {
        className: "CodeEditorEngineNotice",
        children: [hv("codeEditorEngine:notice", {
          reason: zv.reason
        }), Sv && (0, lv.jsxs)(lv.Fragment, {
          children: [" ", (0, lv.jsx)("button", {
            type: "button",
            className: "CodeEditorEngineNoticeLink",
            onClick: () => {
              Pv(Sv.path, Sv.line)
            },
            children: hv("codeEditorEngine:goToLine", {
              line: String(Sv.line)
            })
          })]
        })]
      })
    }
    var ze = Pv(4681),
      Pe = Pv(4129);

    function he(vv) {
      let {
        label: zv,
        hint: Pv,
        checked: hv,
        onChange: Sv
      } = vv;
      return (0, lv.jsxs)("label", {
        className: "CodeEditorMoreOptionsRow CodeEditorOptionSwitch",
        children: [(0, lv.jsxs)("span", {
          className: "CodeEditorOptionSwitchText",
          children: [(0, lv.jsx)("span", {
            children: zv
          }), (0, lv.jsx)("span", {
            className: "CodeEditorOptionSwitchHint",
            children: Pv
          })]
        }), (0, lv.jsx)("span", {
          className: "SwitchContainer",
          children: (0, lv.jsx)(Pe.e, {
            className: "SwitchCheckbox",
            checked: hv,
            onChange: vv => {
              Sv(vv.target.checked)
            },
            disabled: !1
          })
        })]
      })
    }

    function Se(vv) {
      let {
        engine: zv,
        onSetEngine: Pv,
        aiHints: hv,
        variation: Sv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)();
      return (0, lv.jsxs)("div", {
        className: "CodeEditorMoreOptions",
        children: [(0, lv.jsx)("div", {
          className: "CodeEditorMoreOptionsTitle",
          children: ev("codeEditor:moreOptions")
        }), zv && (0, lv.jsx)(he, {
          label: ev("codeEditorEngine:toggle"),
          hint: ev("codeEditorEngine:toggleHint"),
          checked: "ses" === zv,
          onChange: vv => {
            Pv(vv ? "ses" : "quickjs")
          }
        }), hv && (0, lv.jsx)(he, {
          label: ev("codeEditorAiHints:toggle"),
          hint: ev("codeEditorAiHints:toggleHint"),
          checked: hv.shown,
          onChange: hv.setShown
        }), Sv && (0, lv.jsxs)("div", {
          className: "CodeEditorMoreOptionsRow",
          children: [(0, lv.jsx)(ze.f, {
            label: "codeEditor:variationLabel",
            children: (0, lv.jsx)(tP.c, {
              className: "CodeEditorVariationInput",
              maxLength: 32,
              defaultValue: Sv.name,
              onValueChange: Sv.setName,
              onEnter: Sv.reload
            })
          }), (0, lv.jsx)(wv.p, {
            className: "CodeEditorButton",
            onClick: Sv.reload,
            children: ev("codeEditor:reloadAsVariation")
          })]
        })]
      })
    }
    var ee = Pv(36379),
      ge = Pv(36387);

    function pe(vv) {
      let {
        close: zv
      } = vv;
      const {
        t: Pv
      } = (0, bv.x)(), hv = [{
        name: Pv("codeEditor:welcomeTutorial"),
        tutorial: "welcome"
      }, {
        name: Pv("codeEditor:docsOverviewTutorial"),
        tutorial: "docsOverview"
      }, {
        name: Pv("codeEditorAiTutorial:tutorialName"),
        tutorial: "aiHelperOverview"
      }];
      return (0, lv.jsxs)("div", {
        className: "PromptGenericPopup CodeEditorTutorialsPopup",
        children: [(0, lv.jsx)("div", {
          className: "PromptGenericPopupTitle SmallTextBold",
          children: Pv("codeEditor:tutorialsTitle")
        }), (0, lv.jsx)("div", {
          className: "CodeEditorTutorialsList",
          children: hv.map((vv => (0, lv.jsx)(wv.d, {
            className: "CodeEditorTutorialsListButton",
            onClick: () => {
              zv(), (0, ge.J)(vv.tutorial)
            },
            children: vv.name
          }, vv.tutorial)))
        })]
      })
    }
    var de = Pv(86),
      Ne = Pv(36074),
      le = Pv(8474);
    const Te = (0, Sv.forwardRef)((function(vv, zv) {
      let {
        value: Pv,
        onChange: hv,
        onSubmit: Sv,
        placeholder: ev,
        maxLength: gv,
        rows: pv = 2,
        allowNewLines: dv = !1,
        onKeyDown: Nv,
        before: Tv
      } = vv;
      const {
        t: Wv
      } = (0, bv.x)(), av = "" !== Pv.trim(), sv = () => {
        av && Sv()
      };
      return (0, lv.jsxs)("div", {
        className: "PanelPromptInputRow",
        children: [Tv, (0, lv.jsx)("textarea", {
          ref: zv,
          className: "PanelPromptInput",
          value: Pv,
          maxLength: gv,
          rows: pv,
          placeholder: ev,
          spellCheck: !1,
          autoComplete: "off",
          onChange: vv => {
            hv(dv ? vv.target.value : vv.target.value.replace(/\r?\n/g, " "))
          },
          onKeyDown: vv => {
            vv.nativeEvent.isComposing || 229 === vv.nativeEvent.keyCode ? vv.stopPropagation() : "Escape" !== vv.key && (vv.stopPropagation(), null === Nv || void 0 === Nv || Nv(vv), vv.defaultPrevented || "Enter" !== vv.key || dv && vv.shiftKey || (vv.preventDefault(), sv()))
          }
        }), (0, lv.jsx)(wv.d, {
          className: "PanelPromptSend",
          disabled: !av,
          onClick: sv,
          ariaLabel: Wv("codeEditorPanels:send"),
          children: (0, lv.jsx)(Cv.b, {
            name: "arrow-up"
          })
        })]
      })
    }));

    function We(vv) {
      let {
        inputRef: zv
      } = vv;
      const {
        t: Pv
      } = (0, bv.x)(), {
        messages: hv,
        reportedPlayers: ev,
        channel: gv
      } = (0, le.l)(), [pv, dv] = (0, Sv.useState)(""), Nv = (0, Sv.useRef)({
        stepsBack: 0,
        text: ""
      });
      return (0, lv.jsxs)("div", {
        className: "CodeEditorChatPanel",
        children: [(0, lv.jsx)("div", {
          className: "CodeEditorChatHeader",
          children: (0, lv.jsx)("span", {
            className: "CodeEditorChatTitle",
            children: Pv("codeEditorChat:title")
          })
        }), 0 === hv.length ? (0, lv.jsx)("div", {
          className: "CodeEditorChatEmpty",
          children: Pv("codeEditorChat:empty")
        }) : (0, lv.jsx)("div", {
          className: "ChatMessages CodeEditorChatMessages",
          children: (0, lv.jsx)(Ne.d, {
            messages: hv,
            reportedPlayers: ev
          })
        }), (0, lv.jsx)(Te, {
          ref: zv,
          value: pv,
          onChange: dv,
          onSubmit: () => {
            (0, le.j)(pv), dv(""), Nv.current = {
              stepsBack: 0,
              text: ""
            }
          },
          maxLength: nv.Nc,
          rows: 1,
          placeholder: gv ? Pv("touchOnly" === (0, de.b)() ? "codeEditorChat:channelPlaceholderTouch" : "codeEditorChat:channelPlaceholder", {
            channel: gv.channelName
          }) : Pv("codeEditorChat:placeholder"),
          before: gv && (0, lv.jsx)("button", {
            type: "button",
            className: "CodeEditorChatChannel",
            style: {
              backgroundColor: gv.elementBgColor
            },
            onClick: () => {
              le.c.selectNextChannel(), zv.current.focus()
            },
            children: (0, lv.jsx)(Fv.c, {
              text: gv.elementContent
            })
          }),
          onKeyDown: vv => {
            const zv = pv === Nv.current.text;
            if ("ArrowUp" !== vv.key && "ArrowDown" !== vv.key || !zv && "" !== pv) "Tab" === vv.key && !vv.shiftKey && gv && (vv.preventDefault(), le.c.selectNextChannel());
            else {
              vv.preventDefault();
              const Pv = zv ? Nv.current.stepsBack : 0;
              Nv.current = (0, le.h)(Pv + ("ArrowUp" === vv.key ? 1 : -1)), dv(Nv.current.text)
            }
          }
        })]
      })
    }
    var we = Pv(36391);

    function ae(vv) {
      return "expanded" === vv ? "always" : "shown" === vv ? "narrow" : void 0
    }

    function se(vv) {
      var zv;
      let {
        oT: Pv,
        worldPanel: hv,
        closeWorld: Sv,
        aiShown: ev,
        defaultWidth: gv,
        children: pv
      } = vv;
      const dv = "hidden" !== Pv;
      return (0, lv.jsx)(we.c, {
        side: "right",
        defaultSize: dv ? "max(18rem, 40%)" : gv,
        covers: null !== (zv = ae(Pv)) && void 0 !== zv ? zv : ev ? "narrow" : void 0,
        children: (0, lv.jsxs)("div", {
          className: GP()("CodeEditorRightColumn", {
            WorldShown: dv,
            WorldExpanded: "expanded" === Pv
          }),
          children: [dv && (0, lv.jsx)(we.c, {
            side: "top",
            onClose: Sv,
            children: hv
          }), pv]
        })
      })
    }
    var Ce = Pv(1927),
      ie = Pv(1099),
      ce = Pv(1285);
    class Ge {
      constructor(vv, zv, Pv) {
        this.measure = vv, this.apply = zv, this.now = Pv, this.last = null, this.resizedAt = -1 / 0, this.resizing = !1, this.stretchedAt = null
      }
      get rect() {
        var vv, zv;
        return null !== (vv = null === (zv = this.last) || void 0 === zv ? void 0 : zv.rect) && void 0 !== vv ? vv : null
      }
      sync() {
        const vv = function(vv) {
          const zv = Math.round(vv.left),
            Pv = Math.round(vv.top);
          return {
            left: zv,
            top: Pv,
            width: Math.round(vv.right) - zv,
            height: Math.round(vv.bottom) - Pv
          }
        }(this.measure());
        if (vv.width <= 0 || vv.height <= 0) return;
        const zv = this.now(),
          Pv = this.last;
        let hv = {
          width: vv.width,
          height: vv.height
        };
        null === Pv || vv.width === Pv.rect.width && vv.height === Pv.rect.height || (this.resizing = zv - this.resizedAt < 100, this.resizedAt = zv);
        const Sv = null !== Pv && this.resizing && zv - this.resizedAt < 100 && (vv.width !== Pv.bufferSize.width || vv.height !== Pv.bufferSize.height);
        Sv && (this.stretchedAt ??= zv), Sv && zv - this.stretchedAt < 250 ? hv = Pv.bufferSize : this.stretchedAt = null;
        const ev = {
          rect: vv,
          bufferSize: hv
        };
        var gv, pv;
        null !== Pv && (pv = ev, (gv = Pv).rect.left === pv.rect.left && gv.rect.top === pv.rect.top && gv.rect.width === pv.rect.width && gv.rect.height === pv.rect.height && gv.bufferSize.width === pv.bufferSize.width && gv.bufferSize.height === pv.bufferSize.height) || (this.last = ev, this.apply(ev))
      }
      stop() {
        null !== this.last && (this.last = null, this.apply(null))
      }
    }

    function me(vv) {
      const {
        style: zv
      } = document.documentElement;
      for (const [Pv, hv] of [
          ["--worldViewLeft", null === vv || void 0 === vv ? void 0 : vv.left],
          ["--worldViewTop", null === vv || void 0 === vv ? void 0 : vv.top],
          ["--worldViewWidth", null === vv || void 0 === vv ? void 0 : vv.width],
          ["--worldViewHeight", null === vv || void 0 === vv ? void 0 : vv.height]
        ]) void 0 === hv ? zv.removeProperty(Pv) : zv.setProperty(Pv, `${hv}px`)
    }
    var je = Pv(1692),
      fe = Pv(1938);

    function Fe(vv, zv) {
      (0, Sv.useEffect)((() => {
        if (!vv) return;
        const Pv = vv => {
          var Pv;
          "Escape" === vv.key ? (vv.stopPropagation(), vv.preventDefault(), zv()) : (Pv = vv.code, Object.entries(yz.z).some((vv => {
            let [zv, hv] = vv;
            const Sv = fe.g[zv];
            return Sv.includes("ui") && !Sv.includes("core") && hv.includes(Pv)
          })) && !(0, je.isTextEntry)(vv.target) && vv.preventDefault())
        };
        window.addEventListener("keydown", Pv, !0);
        const hv = (0, Lv.n)(zv);
        return () => {
          window.removeEventListener("keydown", Pv, !0), hv()
        }
      }), [vv, zv])
    }

    function Ye() {
      return (0, gS.o)().some((vv => vv !== gS.e))
    }

    function ne(vv, zv) {
      return vv.map((vv => zv ? String(vv) : vv.toFixed(1))).join(", ")
    }

    function Oe(vv) {
      let {
        freeCamera: zv,
        picking: Pv,
        hovered: hv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)(), gv = (0, Sv.useRef)(null), pv = (0, Sv.useRef)(null);
      return (0, Sv.useEffect)((() => {
        const vv = (vv, zv) => {
            vv.textContent !== zv && (vv.textContent = zv)
          },
          Pv = () => {
            const Pv = zv ? Nv.gameBridge.lookup("freeCameraPos", null) : null;
            vv(gv.current, ne(null !== Pv && void 0 !== Pv ? Pv : Nv.gameBridge.lookup("localPos", null), !1));
            const hv = Nv.gameBridge.lookup("targetedBlockPos", null);
            vv(pv.current, hv ? ne(hv, !0) : "-")
          };
        return Pv(), (0, ce.A)(Pv)
      }), [zv]), (0, lv.jsxs)("div", {
        className: "WorldPanelCoordinates",
        children: [(0, lv.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: ev(zv ? "codeEditorWorld:camera" : "codeEditorWorld:position")
        }), (0, lv.jsx)("span", {
          ref: gv
        }), (0, lv.jsx)("span", {
          className: "WorldPanelCoordsLabel",
          children: ev("codeEditorWorld:lookingAt")
        }), (0, lv.jsx)("span", {
          ref: pv,
          hidden: Pv
        }), Pv && (0, lv.jsxs)(lv.Fragment, {
          children: [(0, lv.jsx)("span", {
            children: hv ? ne(hv.pos, !0) : "-"
          }), hv && (0, lv.jsx)("span", {
            className: "WorldPanelCoordsName",
            children: hv.name
          })]
        })]
      })
    }
    var De = Pv(36395);

    function Ke(vv) {
      const zv = vv.currentTarget.getBoundingClientRect();
      return {
        x: (vv.clientX - zv.left) / zv.width,
        y: (vv.clientY - zv.top) / zv.height
      }
    }

    function Ve(vv) {
      const [zv, Pv] = (0, Sv.useState)(!1), [hv, ev] = (0, Sv.useState)(null), gv = (0, Sv.useRef)(null);
      (0, Sv.useEffect)((() => {
        if (!zv) return;
        let vv = null,
          Pv = null,
          hv = 1 / 0;
        const Sv = (0, ce.v)((zv => {
          hv += zv;
          const Sv = gv.current;
          if (Sv === Pv && hv < 100) return;
          Pv = Sv, hv = 0;
          const pv = Sv && Nv.gameBridge.lookup("blockAtViewPoint", Sv);
          var dv, lv;
          (dv = pv) === (lv = vv) || null !== dv && null !== lv && dv.name === lv.name && (0, De.d)(dv.pos, lv.pos) && (0, De.d)(dv.normal, lv.normal) || (vv = pv, ev(pv), Nv.gameBridge.send("setBlockHighlight", pv))
        }));
        return () => {
          Sv(), null !== vv && Nv.gameBridge.send("setBlockHighlight", null), ev(null)
        }
      }), [zv]);
      const pv = (0, Sv.useCallback)((() => {
        Pv(!1)
      }), []);
      Fe(zv, pv);
      const dv = {
        onPointerMove: vv => {
          gv.current = Ke(vv)
        },
        onPointerLeave: () => {
          gv.current = null
        },
        onClick: hv => {
          if (!zv) return;
          const Sv = Nv.gameBridge.lookup("blockAtViewPoint", Ke(hv));
          null !== Sv && (Pv(!1), vv(Sv.pos))
        }
      };
      return {
        picking: zv,
        setPicking: Pv,
        hovered: hv,
        slotHandlers: dv
      }
    }

    function Ue(vv) {
      Nv.gameBridge.send("setFreeCameraMovesFly", vv)
    }

    function Re(vv) {
      let {
        shown: zv,
        setShown: Pv,
        canInsertCode: hv
      } = vv;
      const {
        t: ev
      } = (0, bv.x)(), {
        isTouchScreen: gv
      } = (0, Av.i)(["isTouchScreen"]), pv = (0, Sv.useRef)(null), Nv = (0, Sv.useCallback)((() => {
        var vv;
        null === (vv = pv.current.closest(".CodeEditorBg").querySelector(".cm-content")) || void 0 === vv || vv.focus()
      }), []), {
        control: Tv,
        take: Wv,
        release: sv,
        blocked: iv
      } = function(vv) {
        const [zv, Pv] = (0, Sv.useState)("none"), hv = (0, Sv.useRef)("none"), [ev, gv] = (0, Sv.useState)(!1), pv = vv => {
          hv.current = vv, Pv(vv)
        }, dv = (0, Sv.useCallback)((() => {
          const zv = hv.current;
          "none" !== zv && (pv("none"), (0, gS.r)(gS.e), "mouse" === zv && vv())
        }), [vv]), Nv = (0, Sv.useCallback)((vv => {
          Ye() ? gv(!0) : (pv("mouse" === vv && "touchOnly" !== (0, de.b)() ? "mouse" : "touch"), (0, gS.q)(gS.e))
        }), []);
        return (0, Yv.g)("pointerLockUpdate", (vv => {
          vv && "touch" === hv.current && "touchOnly" !== (0, de.b)() ? pv("mouse") : vv || "mouse" !== hv.current || dv()
        })), (0, Sv.useEffect)((() => {
          if (!ev) return;
          const vv = () => {
            Ye() || gv(!1)
          };
          return vv(), (0, gS.i)(vv)
        }), [ev]), Fe("none" !== zv, dv), (0, Sv.useEffect)((() => {
          if ("none" === zv) return;
          const vv = vv => {
            (0, je.isTextEntry)(vv.target) && dv()
          };
          return document.addEventListener("focusin", vv), () => {
            document.removeEventListener("focusin", vv)
          }
        }), [zv, dv]), (0, Sv.useEffect)((() => (document.addEventListener("pointerlockerror", dv), () => {
          document.removeEventListener("pointerlockerror", dv)
        })), [dv]), (0, Sv.useEffect)((() => () => {
          "none" !== hv.current && null !== Av.c.get("openInGameMenuName") && (0, gS.r)(gS.e)
        }), []), {
          control: zv,
          take: Nv,
          release: dv,
          blocked: ev
        }
      }(Nv), cv = (0, ie.l)(we.e);
      (0, Sv.useEffect)((() => {
        "touch" !== Tv || "shown" !== zv || cv ? "none" === Tv && "expanded" === zv && Pv("shown") : Pv("expanded")
      }), [Tv, cv]),
      function(vv, zv) {
        const Pv = (0, Sv.useRef)(zv);
        Pv.current = zv;
        const hv = (0, Sv.useRef)(null);
        (0, Sv.useLayoutEffect)((() => {
          const zv = new Ge((() => vv.current.getBoundingClientRect()), (vv => {
            var zv;
            "none" !== Pv.current && me(null !== (zv = null === vv || void 0 === vv ? void 0 : vv.rect) && void 0 !== zv ? zv : null), (0, ce.D)().setGameView(vv)
          }), (() => performance.now()));
          hv.current = zv, zv.sync();
          const Sv = (0, ce.s)((() => {
            zv.sync()
          }));
          return () => {
            Sv(), Av.c.set({
              worldPanelHud: null
            }), zv.stop()
          }
        }), [vv]), (0, Sv.useLayoutEffect)((() => {
          hv.current.sync(), me("none" === zv ? null : hv.current.rect), Av.c.set({
            worldPanelHud: zv
          })
        }), [zv])
      }(pv, "touch" === Tv ? "touchControls" : "none");
      const {
        picking: Gv,
        setPicking: mv,
        hovered: jv,
        slotHandlers: fv
      } = Ve((vv => {
        av.j.zC("CodeEditorInsertText", {
          text: `[${vv.join(", ")}]`,
          focus: !gv
        }), (0, we.e)() && Pv("hidden")
      })), Fv = function() {
        const {
          allowed: vv,
          movesFly: zv
        } = (0, Ov.h)("freeCamera"), Pv = (0, Sv.useRef)(zv), hv = (0, Sv.useRef)(zv);
        return hv.current !== zv && (hv.current = zv, Pv.current = zv), (0, Sv.useEffect)((() => () => {
          Pv.current && Ue(!1)
        }), []), {
          allowed: vv,
          on: zv,
          toggle: () => {
            Pv.current = !zv, Ue(!zv)
          }
        }
      }(), nv = (0, dv.i)("hideCoordinates"), Dv = (0, Ov.h)("localPlayerAlive"), Kv = !Dv || iv;
      (0, Sv.useEffect)((() => {
        Dv || sv()
      }), [Dv, sv]), (0, Sv.useEffect)((() => {
        !Kv && hv || mv(!1)
      }), [Kv, hv, mv]);
      const Vv = Fv.on ? wv.j : wv.d,
        Uv = Gv ? wv.j : wv.d;
      return (0, lv.jsxs)("div", {
        className: "WorldPanel",
        children: [(0, lv.jsxs)("div", {
          className: "WorldPanelHeader",
          children: [(0, lv.jsx)("span", {
            className: "WorldPanelTitle",
            children: ev("codeEditorWorld:title")
          }), "touch" === Tv && !cv && (0, lv.jsx)(wv.d, {
            className: "WorldPanelButton",
            onClick: sv,
            children: ev("codeEditorWorld:backToCode")
          }), !Kv && Fv.allowed && !gv && (0, lv.jsx)(Ev.h, {
            tooltipInner: ev("codeEditorWorld:freeCameraTooltip"),
            hoverOnly: !0,
            children: (0, lv.jsx)(Vv, {
              className: "WorldPanelButton",
              ariaPressed: Fv.on,
              ariaLabel: ev("codeEditorWorld:freeCamera"),
              onClick: Fv.toggle,
              children: (0, lv.jsx)(Cv.b, {
                name: "video"
              })
            })
          }), !Kv && hv && (0, lv.jsx)(Ev.h, {
            tooltipInner: ev("codeEditorWorld:pickTooltip"),
            hoverOnly: !0,
            children: (0, lv.jsxs)(Uv, {
              className: "WorldPanelButton",
              ariaPressed: Gv,
              onClick: () => {
                sv(), mv(!Gv)
              },
              children: [(0, lv.jsx)(Cv.b, {
                name: "crosshairs"
              }), ev("codeEditorWorld:pick")]
            })
          })]
        }), !nv && (0, lv.jsx)(Oe, {
          freeCamera: Fv.on,
          picking: Gv,
          hovered: jv
        }), (0, lv.jsxs)("div", {
          ref: pv,
          className: GP()("WorldPanelSlot", {
            TouchControl: "touch" === Tv,
            Picking: Gv
          }),
          onPointerDown: vv => {
            0 !== vv.button || Kv || Gv || Wv(vv.pointerType)
          },
          ...fv,
          children: [!Kv && !Gv && (0, lv.jsx)("div", {
            className: "WorldPanelCrosshair",
            children: "+"
          }), !Kv && "touch" !== Tv && (0, lv.jsxs)("div", {
            className: "WorldPanelHint",
            children: [Gv && ev(gv ? "codeEditorWorld:tapToPick" : "codeEditorWorld:clickToPick"), !Gv && "none" === Tv && !Fv.on && ev(gv ? "codeEditorWorld:tapToPlay" : "codeEditorWorld:clickToPlay"), !Gv && "none" === Tv && Fv.on && ev("codeEditorWorld:clickToFly"), "mouse" === Tv && (0, lv.jsxs)(lv.Fragment, {
              children: [(0, lv.jsx)(Ce.e, {
                noaAction: "OpenLobbyLeaderboard"
              }), ev("codeEditorWorld:backToCode")]
            })]
          }), Kv && (0, lv.jsxs)("div", {
            className: "WorldPanelWaiting",
            children: [(0, lv.jsx)("span", {
              children: ev(Dv ? "codeEditorWorld:gameWaiting" : "codeEditorWorld:died")
            }), (0, lv.jsx)(wv.d, {
              onClick: Lv.f,
              children: ev("codeEditorWorld:toGame")
            })]
          })]
        })]
      })
    }
    var xe = Pv(4765);

    function te(vv) {
      let {
        oT: zv,
        setWorld: Pv,
        toggleWorld: hv,
        aiShown: Sv,
        closeAi: ev
      } = vv;
      const {
        t: gv
      } = (0, bv.x)(), pv = Sv ? "ai" : "hidden" !== zv ? "world" : "code", dv = [{
        value: "code",
        label: gv("codeEditorWorld:codePane")
      }, {
        value: "world",
        label: gv("codeEditorWorld:title")
      }];
      Sv && dv.push({
        value: "ai",
        label: gv("codeEditorWorld:aiPane")
      });
      return (0, lv.jsx)("div", {
        className: "CodeEditorPaneSwitch",
        children: (0, lv.jsx)(xe.c, {
          options: dv,
          value: pv,
          onChange: vv => {
            "world" !== vv ? (Sv && ev(), Pv("hidden")) : "hidden" === zv ? hv() : ev()
          },
          ariaLabel: gv("codeEditorWorld:panes"),
          keepsFocus: !0
        })
      })
    }
    var qe = Pv(36398);
    class Ie {
      constructor(vv, zv) {
        this.storageKey = vv, this.defaultValue = zv, this.value = null, this.listeners = new Set, this.get = () => {
          if (null === this.value) {
            const vv = xv.h.getItem(this.storageKey);
            this.value = "boolean" === typeof vv ? vv : this.defaultValue
          }
          return this.value
        }, this.set = vv => {
          this.value = vv, xv.h.setItem(this.storageKey, vv);
          for (const zv of this.listeners) zv(vv)
        }
      }
      subscribe(vv) {
        return this.listeners.add(vv), () => {
          this.listeners.delete(vv)
        }
      }
    }
    const Qe = new Ie("codeEditorLightMode", !1),
      Ze = new Ie("codeEditorAiHints", !0);

    function Ae(vv) {
      const [zv, Pv] = (0, Sv.useState)(vv.get);
      return (0, Sv.useEffect)((() => {
        const zv = vv.subscribe(Pv);
        return Pv(vv.get()), zv
      }), [vv]), [zv, vv.set]
    }
    var Le = Pv(36406),
      He = Pv(36414),
      Me = Pv(36418);
    const ye = (0, Sv.lazy)((() => Promise.all([Pv.e(290), Pv.e(286), Pv.e(289), Pv.e(285), Pv.e(82), Pv.e(288), Pv.e(287), Pv.e(284)]).then((() => Pv(40590))))),
      Be = (0, Sv.lazy)((() => Promise.all([Pv.e(77), Pv.e(80), Pv.e(81), Pv.e(79), Pv.e(292)]).then((() => Pv(40757))))),
      Je = (0, Sv.lazy)((() => Promise.all([Pv.e(290), Pv.e(289), Pv.e(82), Pv.e(80), Pv.e(81), Pv.e(79), Pv.e(288), Pv.e(287), Pv.e(78), Pv.e(89)]).then((() => Pv(40762)))));

    function Ee(vv) {
      return Nv.gameBridge.query("worldCodeAiChunk", vv)
    }

    function oe() {
      return Nv.gameBridge.query("worldCodeAiGameState", null)
    }

    function be(vv) {
      const {
        gsUrl: zv,
        gameNameWithVariation: Pv,
        lobbyName: hv
      } = oS();
      return (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${zv}/code/get-lobby-code`, iS.Vj["get-lobby-code"].toBuffer({
        gameNameWithVariation: Pv,
        lobbyName: hv,
        path: vv
      }), {
        retries: 1
      })
    }
    let re = !1;
    const ke = [],
      Xe = {
        message: "You do not have permission to view the code.",
        type: "warning"
      },
      ue = (0, Sv.memo)((function(vv) {
        var zv, Pv;
        let {
          show: hv,
          onOpen: ev,
          onClose: pv,
          isLobbyCode: Tv
        } = vv;
        const Wv = (0, Sv.useRef)(""),
          [sv, iv] = (0, Sv.useState)(null),
          cv = (0, Sv.useRef)(Tv),
          [Gv, mv] = (0, Sv.useState)({
            message: null,
            type: null
          }),
          [jv, fv] = (0, Sv.useState)(""),
          Fv = Gv.message ? Gv : {
            message: jv,
            type: "warning"
          },
          [Kv, Vv] = (0, Sv.useState)(!0),
          [Uv, xv] = Ae(Qe),
          [tv, qv] = Ae(Ze),
          [Iv, Qv] = (0, Sv.useState)(!1),
          [Zv, Hv] = (0, Sv.useState)(!1),
          Mv = (0, Sv.useRef)(null),
          yv = (0, Sv.useRef)(!1);
        (0, Sv.useEffect)((() => {
          var vv;
          Zv && yv.current && (yv.current = !1, null === (vv = Mv.current) || void 0 === vv || vv.focus())
        }), [Zv]);
        const Bv = (0, qe.d)(),
          Jv = (0, Sv.useRef)(null),
          ov = (0, Sv.useRef)(null),
          {
            openInGameMenuName: rv,
            openEverythingMenuName: kv,
            worldPanelHud: Xv
          } = (0, Av.i)(["openInGameMenuName", "openEverythingMenuName", "worldPanelHud"]),
          uv = vv => {
            hv && (Jv.current = vv, Oz.current = !0)
          };
        (0, Yv.g)("OpenReportMenu", (() => {
          uv("yw")
        })), (0, Yv.g)("OpenStoreFromCodeEditor", (() => {
          uv("store")
        })), (0, Sv.useEffect)((() => {
          const vv = Jv.current;
          null === vv || "yw" === vv && ("makeReport" === rv || "makeDiscordReport" === rv) || "store" === vv && null !== kv || (Jv.current = null, null === rv && null === kv ? Tv ? (ov.current = hP.current, av.j.zC("EditLobbyCode", sv)) : av.j.zC("EditCodeBlock", {
            pos: sv,
            canChangePos: cv.current
          }) : (0, ge.z)())
        }), [rv, kv, Tv, sv]), (0, Sv.useEffect)((() => {
          if (hv) return () => {
            ov.current = null
          }
        }), [hv]);
        const [vz, zz] = function() {
          const [vv, zv] = (0, Sv.useState)(re);
          return (0, Yv.g)("CodeEditorAiHelperShown", (vv => {
            zv(vv)
          })), [vv, (0, Sv.useCallback)((vv => {
            re = vv, av.j.zC("CodeEditorAiHelperShown", vv)
          }), [])]
        }(), [Pz, hz] = (0, Sv.useState)(null), [Sz, ez] = (0, Sv.useState)([]), [gz, pz] = (0, Sv.useState)(0), [dz, Nz] = (0, Sv.useState)(0), [lz, Tz] = (0, Sv.useState)(""), wz = (0, Sv.useRef)(null), [az, sz] = (0, Sv.useState)(Tv ? Me.e : null), Cz = Tv || null !== sv, iz = (0, dv.i)("canEditCode"), cz = (0, dv.i)("canUseDevCreativeItems"), Gz = (0, ee.p)("welcome"), mz = (0, ee.p)("docsOverview"), jz = mz ? "docsOverview" : "welcome", fz = null !== mz && void 0 !== mz ? mz : Gz, Fz = (0, ee.p)("aiHelperOverview"), Yz = Fz ? "aiHelperOverview" : "welcome", nz = null !== Fz && void 0 !== Fz ? Fz : Gz, Oz = (0, Sv.useRef)(!1), Dz = (0, Sv.useRef)(!1), Kz = (0, Sv.useRef)(null), [Vz, Uz] = (0, Sv.useState)(""), [Rz, xz] = (0, Sv.useState)(!1), [tz, qz] = (0, Sv.useState)(null), Iz = (0, Ov.h)("connectedGame"), Qz = Tv && iz && "classic" === Iz.gameNameWithVariation && !(0, Wz.S)(Iz.lobbyName), [Zz, Az] = (0, Sv.useState)(null), [Lz, Mz] = (0, Sv.useState)({
          [GS.i]: ""
        }), [Bz, Jz] = (0, Sv.useState)({
          assets: {},
          revision: 0
        }), Ez = (0, Sv.useRef)(Bz), oz = (0, Sv.useCallback)((vv => {
          var zv;
          vv.revision < Ez.current.revision || (Ez.current = vv, Jz(vv), fv(vv.startupError ? `Schematics could not load: ${vv.startupError}` : ""), null === (zv = sP.current) || void 0 === zv || zv.onLobbyFilesChanged({
            ...dP.current,
            ...(0, KS.j)(vv.assets)
          }))
        }), []), [bz, rz] = (0, Sv.useState)(GS.i), [kz, Xz] = (0, Sv.useState)(null), [uz, vP] = (0, Sv.useState)(null), zP = (0, Sv.useRef)(!1), PP = (0, Sv.useRef)(null), hP = (0, Sv.useRef)(bz);
        hP.current = bz;
        const SP = (0, Sv.useRef)(kz);
        SP.current = kz;
        const eP = kz ? null : tz,
          gP = eP && !eP.engineLocked ? eP.worldCodeEngine : null,
          pP = (0, Sv.useRef)(uz);
        pP.current = uz;
        const dP = (0, Sv.useRef)(Lz);
        dP.current = Lz;
        const NP = (0, Sv.useRef)(null),
          lP = (0, Sv.useRef)(null),
          [TP, WP] = (0, Sv.useState)(!1),
          wP = (0, AS.q)(),
          aP = (0, Sv.useRef)([]),
          sP = (0, Sv.useRef)(null),
          CP = (0, Sv.useRef)(null),
          iP = (0, Sv.useRef)(null);

        function cP(vv) {
          mv(vv), clearTimeout(Kz.current), Kz.current = setTimeout((() => {
            mv({
              message: null,
              type: null
            })
          }), 3e3)
        }
        const mP = (0, Sv.useCallback)((function() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            zP.current && PP.current && (Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.Leave,
              sh: (0, mS.v)(PP.current),
              Bg: !!vv || null
            }), zP.current = !1, PP.current = null), Az(null)
          }), []),
          jP = (0, Sv.useCallback)((vv => {
            const zv = {
              kind: "lobby",
              path: vv
            };
            PP.current = zv, rz(vv), Wv.current = "", Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.Join,
              sh: (0, mS.v)(zv)
            }), zP.current = !0
          }), []),
          fP = (0, Sv.useCallback)((vv => {
            var zv;
            const Pv = null === (zv = CP.current) || void 0 === zv ? void 0 : zv.collabState;
            return Pv && "lobby" === Pv.docKey.kind && Pv.docKey.path === vv && hP.current === vv ? Promise.resolve({
              doc: Pv.doc,
              version: Pv.version,
              clientID: Pv.clientID,
              docKey: Pv.docKey,
              httpConfig: Pv.httpConfig
            }) : new Promise(((zv, Pv) => {
              const hv = setTimeout((() => {
                  aP.current = aP.current.filter((vv => vv !== Sv)), Pv(new Error(`Timed out joining ${vv}`))
                }), 15e3),
                Sv = Pv => {
                  "lobby" === Pv.docKey.kind && Pv.docKey.path === vv && (clearTimeout(hv), aP.current = aP.current.filter((vv => vv !== Sv)), zv(Pv))
                };
              aP.current.push(Sv), hP.current !== vv ? (mP(!0), jP(vv)) : zP.current || jP(vv)
            }))
          }), [jP, mP]),
          FP = (0, Sv.useCallback)((async function(vv, zv) {
            let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
            const hv = Date.now();
            let Sv = vv in dP.current;
            for (; Sv !== zv;) {
              if (Date.now() - hv > Pv) throw new Error(`Timed out waiting for lobby path ${vv} present=${zv}`);
              await (0, ch.V)(50), Sv = vv in dP.current
            }
          }), []),
          YP = (0, Sv.useCallback)((vv => {
            const zv = dP.current,
              Pv = GS.i in zv && GS.k in zv;
            if (!(0, jS.e)(vv) || Pv) {
              if (hP.current === vv) {
                var hv;
                const Sv = Pv && (0, jS.e)(vv) ? vv === GS.i ? GS.k : GS.i : null !== (hv = (0, jS.c)(zv)) && void 0 !== hv ? hv : GS.i;
                lP.current = {
                  fromPath: vv,
                  toPath: Sv
                }, rz(Sv)
              }
              Nv.gameBridge.send("sendCodeCollab", {
                ah: mS.b.DeleteFile,
                sh: (0, mS.v)({
                  kind: "lobby",
                  path: hP.current
                }),
                Jg: vv
              })
            }
          }), []),
          nP = (0, Sv.useCallback)((vv => {
            ov.current = null, Xz(null), vP(null), !Tv || vv === hP.current && zP.current || (mP(!0), jP(vv))
          }), [Tv, mP, jP]),
          OP = (0, Sv.useCallback)(((vv, zv) => {
            const Pv = OS.e[vv],
              hv = Pv && zv in Pv.files ? zv : "index.ts";
            if (vv !== SP.current || hv !== pP.current) {
              var Sv;
              if (vv !== SP.current) null === (Sv = sP.current) || void 0 === Sv || Sv.stopContinuousSync(), mP(!0);
              Xz(vv), vP(hv)
            }
          }), [mP]),
          DP = (0, Sv.useCallback)((vv => {
            var zv;
            const Pv = hP.current,
              hv = dP.current[Pv],
              Sv = zP.current && !SP.current && Pv in vv && void 0 !== hv ? {
                ...vv,
                [Pv]: hv
              } : vv;
            Mz(Sv);
            const ev = NP.current;
            if (ev && ev in vv) NP.current = null, ev !== hP.current && nP(ev);
            else if (!(hP.current in vv) && zP.current && !SP.current) {
              var gv;
              nP(null !== (gv = (0, jS.c)(vv)) && void 0 !== gv ? gv : GS.i)
            }
            null === (zv = sP.current) || void 0 === zv || zv.onLobbyFilesChanged({
              ...Sv,
              ...(0, KS.j)(Ez.current.assets)
            })
          }), [nP]),
          KP = (0, Sv.useCallback)((() => be(hP.current).then((async vv => {
            if (!zP.current || !vv.files) return null;
            DP(vv.files);
            const zv = await bS({
              action: "state"
            });
            return oz(zv), {
              ...vv.files,
              ...(0, KS.j)(zv.assets)
            }
          })).catch((vv => (console.error("[CodeCollab] Failed to fetch lobby files via HTTP", vv), cP({
            message: "Could not refresh the file list",
            type: "warning"
          }), null)))), [DP, oz]),
          VP = () => {
            pv()
          };
        (0, Sv.useEffect)((() => {
          if (fv(""), !hv || !Tv) return;
          let vv = !1;
          return Ez.current = {
            assets: {},
            revision: 0
          }, Jz(Ez.current), bS({
            action: "state"
          }).then((zv => {
            vv || oz(zv)
          })).catch((zv => {
            console.error("Could not load project schematics", zv), vv || fv("Could not load schematics. Reopen the Code Editor to retry.")
          })), () => {
            vv = !0
          }
        }), [hv, Tv, oz]);
        const UP = (0, Sv.useCallback)((function() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            PP.current && Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.Submit,
              sh: (0, mS.v)(PP.current),
              ...vv ? {
                mh: "keepOpen"
              } : {}
            })
          }), []),
          RP = (0, Sv.useCallback)((() => {
            if (!PP.current || "lobby" !== PP.current.kind) return;
            const vv = Vz.trim();
            (0, fS.t)(vv) ? (Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.ReloadAsVariation,
              sh: (0, mS.v)(PP.current),
              mh: vv
            }), xz(!1)) : cP({
              message: "Variation must be 1-32 characters: A-Z, a-z, 0-9, _, -",
              type: "warning"
            })
          }), [Vz]),
          xP = (0, Sv.useCallback)((vv => {
            Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.SetEngine,
              sh: (0, mS.v)({
                kind: "lobby",
                path: hP.current
              }),
              mh: vv
            })
          }), []),
          tP = (0, Sv.useCallback)((vv => {
            if (!SP.current && iz && (cv.current || Tv)) {
              if (Tv) {
                var zv;
                const Pv = (0, jS.l)(dP.current, hP.current),
                  hv = Math.min(Hz.y, Math.max(0, Hz.B - Pv)),
                  Sv = vv.slice(0, hv);
                return Wv.current = Sv, Mz((vv => ({
                  ...vv,
                  [hP.current]: Sv
                }))), void(null === (zv = sP.current) || void 0 === zv || zv.onDocTextChanged(hP.current, Sv))
              }
              Wv.current = vv, Tz(vv)
            }
          }), [iz, Tv]);
        (0, Yv.g)("EditLobbyCode", (vv => {
          var zv;
          Rv.featureFlags.canSeePlayerWrittenText && Tv && (mP(), iv(vv), Wv.current = "", Mz({
            [GS.i]: ""
          }), qz(null), rz(GS.i), Xz(null), vP(null), NP.current = null, lP.current = null, null === (zv = sP.current) || void 0 === zv || zv.stopContinuousSync(), ev(), jP(GS.i))
        })), (0, Yv.g)("EditCodeBlock", (vv => {
          let {
            pos: zv,
            canChangePos: Pv
          } = vv;
          if (Rv.featureFlags.canSeePlayerWrittenText && !Tv)
            if (mP(), null !== zv && (zv = [...zv]), iv(zv), cv.current = Pv, null !== zv) {
              Wv.current = "", Tz(""), ev();
              const vv = {
                  kind: "codeBlock",
                  pos: zv
                },
                hv = (0, mS.v)(vv);
              wz.current !== hv && (wz.current = hv, ez([]), Nz(gz)), sz((0, Me.b)(hv, [zv[0], zv[1], zv[2]], !!Pv)), PP.current = vv, Nv.gameBridge.send("sendCodeCollab", {
                ah: mS.b.Join,
                sh: (0, mS.v)(vv)
              }), zP.current = !0
            } else hv && pv()
        })), (0, Yv.g)("codeCollabRejoin", (vv => {
          const zv = PP.current ? (0, mS.v)(PP.current) : null;
          zv && vv.docKey === zv && (Wv.current = vv.doc, Tv || Tz(vv.doc), Az((zv => zv ? {
            ...zv,
            doc: vv.doc,
            version: vv.version,
            clientID: (0, nS.d)()
          } : zv)))
        })), (0, Yv.g)("codeCollab", (vv => {
          var zv;
          const Pv = PP.current ? (0, mS.v)(PP.current) : null;
          if (vv.type === mS.c.LobbyFilesChanged && Tv) {
            if ("string" !== typeof vv.files) return void KP();
            try {
              DP(JSON.parse(vv.files))
            } catch (Nv) {
              console.error("[CodeCollab] Failed to parse lobby files", Nv), KP()
            }
            return
          }
          if (vv.type === mS.c.EngineSettings && Tv) return void qz(uS(vv.engineSettings));
          const Sv = vv.type === mS.c.Joined ? (0, mS.g)(vv.docKey) : null,
            ev = Tv && "lobby" === (null === (zv = PP.current) || void 0 === zv ? void 0 : zv.kind) && (0, jS.e)(PP.current.path) && "lobby" === (null === Sv || void 0 === Sv ? void 0 : Sv.kind) && (0, jS.e)(Sv.path);
          if (!Pv || vv.docKey === Pv || ev)
            if (vv.type !== mS.c.ForceClose) {
              if (hv)
                if (vv.type === mS.c.Joined) {
                  var gv;
                  const lv = JSON.parse(vv.peers),
                    wv = vv.existingCursors ? JSON.parse(vv.existingCursors) : [],
                    Cv = (0, nS.d)(),
                    iv = oS(),
                    {
                      gsUrl: cv,
                      gameNameWithVariation: Gv,
                      lobbyName: jv
                    } = iv,
                    fv = null !== (gv = (0, mS.g)(vv.docKey)) && void 0 !== gv ? gv : PP.current;
                  fv && (PP.current = fv, "lobby" === fv.kind && (rz(fv.path), hP.current = fv.path));
                  const Fv = fv || (Tv ? {
                    kind: "lobby",
                    path: hP.current
                  } : {
                    kind: "codeBlock",
                    pos: sv
                  });

                  function Yv(zv) {
                    var Pv, hv;
                    if (!zP.current) return;
                    const Sv = null !== (Pv = zv.code) && void 0 !== Pv ? Pv : "",
                      ev = null !== (hv = zv.collabVersion) && void 0 !== hv ? hv : 0;
                    Wv.current = Sv, Tv || Tz(Sv), Tv && zv.files ? Mz(zv.files) : Tv && Mz((vv => ({
                      ...vv,
                      [hP.current]: Sv
                    })));
                    const gv = {
                      doc: Sv,
                      version: ev,
                      clientID: Cv,
                      docKey: Fv,
                      peers: lv,
                      editorCount: vv.editorCount,
                      existingCursors: wv,
                      httpConfig: iv
                    };
                    if (Az(gv), "lobby" === Fv.kind) {
                      var pv;
                      const vv = {
                        doc: Sv,
                        version: ev,
                        clientID: Cv,
                        docKey: Fv,
                        httpConfig: iv
                      };
                      for (const zv of [...aP.current]) zv(vv);
                      null === (pv = sP.current) || void 0 === pv || pv.startWhenReady()
                    }
                    zv.canSeeCode ? (clearTimeout(Kz.current), mv({
                      message: null,
                      type: null
                    })) : function(vv) {
                      clearTimeout(Kz.current), mv(vv)
                    }(Xe);
                    const dv = ov.current;
                    ov.current = null, Tv && dv && zv.files && dv in zv.files && dv !== hP.current && nP(dv)
                  }
                  Tv ? be(hP.current).then(Yv).catch((vv => {
                    console.error("[CodeCollab] Failed to fetch lobby code via HTTP", vv), mP()
                  })) : (0, cS.postJsonWithMetricsCookiesAndJsonResponse)(`${cv}/code/get-code-block`, iS.Vj["get-code-block"].toBuffer({
                    gameNameWithVariation: Gv,
                    lobbyName: jv,
                    pos: sv
                  }), {
                    retries: 1
                  }).then(Yv).catch((vv => {
                    console.error("[CodeCollab] Failed to fetch code block via HTTP", vv), mP()
                  }))
                } else if (vv.type === mS.c.Presence) {
                if (!Pv) return;
                const nv = JSON.parse(vv.peers);
                Az((zv => zv ? {
                  ...zv,
                  peers: nv,
                  editorCount: vv.editorCount
                } : zv))
              }
            } else {
              var dv;
              if (!Pv) return;
              hv && Tv && "keptOpen" === vv.updates && av.j.zC("CodeEditorKeepEdits");
              const Ov = PP.current;
              zP.current = !1, PP.current = null, Az(null);
              if (!Tv || "close" === vv.updates) return (0, He.k)(), void(hv && pv());
              if (!hv) return;
              const Dv = dP.current,
                Kv = lP.current;
              lP.current = null;
              const Vv = "lobby" === (null === Ov || void 0 === Ov ? void 0 : Ov.kind) && Ov.path === (null === Kv || void 0 === Kv ? void 0 : Kv.fromPath),
                Uv = Kv && (Vv || Kv.toPath in Dv || (0, jS.e)(Kv.toPath)) ? Kv.toPath : hP.current in Dv ? hP.current : null !== (dv = (0, jS.c)(Dv)) && void 0 !== dv ? dv : GS.i;
              jP(Uv)
            }
        })), (0, Yv.g)("refetchCode", (() => {
          Rv.featureFlags.canSeePlayerWrittenText && hv && zP.current && (iz || (mP(), Tv ? av.j.zC("EditLobbyCode", sv) : av.j.zC("EditCodeBlock", {
            pos: sv,
            canChangePos: cv.current
          })))
        }));
        const qP = (0, Sv.useCallback)((() => {
            hv && (Qv(!1), window.open("/docs", "_blank", "popup=yes,width=1200,height=800"))
          }), [hv]),
          IP = (0, Sv.useCallback)((() => {
            Qv(!1)
          }), []);
        (0, Sv.useEffect)((() => {
          hv && iz && ("docsButton" === fz && Iv ? (0, ge.f)("docsButton") : fz && ge.h.includes(fz) && !Iv && (Qv(!0), zz(!1)))
        }), [hv, iz, fz, Iv, zz]);
        const QP = (0, Sv.useCallback)((() => {
          zz(!1)
        }), [zz]);
        (0, Sv.useEffect)((() => {
          hv && iz && Cz && ("aiHelperButton" === nz && vz ? (0, ge.f)("aiHelperButton") : nz && ge.d.includes(nz) && !vz && (zz(!0), Qv(!1)))
        }), [hv, iz, Cz, nz, vz, zz]), (0, Sv.useEffect)((() => {
          if (!hv || !iz) return;
          const vv = Tv ? "worldCode" : "codeBlock";
          return (0, ge.B)(vv, !0), () => {
            (0, ge.B)(vv, !1)
          }
        }), [hv, iz, Tv]), (0, Sv.useEffect)((() => {
          if (hv) return () => {
            Oz.current ? Oz.current = !1 : (0, ge.z)()
          }
        }), [hv]), (0, Sv.useEffect)((() => {
          (0, ge.F)("exportButton", !!cz)
        }), [cz]);
        const {
          t: ZP
        } = (0, bv.x)(), AP = !vz && gz > dz, LP = AP ? wv.A : wv.p, HP = (0, Sv.useCallback)(((vv, zv) => {
          av.j.zC("CodeEditorGoToLine", {
            path: vv,
            line: zv
          }), nP(vv)
        }), [nP]), MP = (0, Sv.useCallback)((vv => {
          iP.current = vv
        }), []), yP = function(vv, zv) {
          const [Pv, hv] = (0, Sv.useState)(null);
          return (0, Sv.useEffect)((() => {
            if (!zv) return void hv(null);
            let Pv = !1;
            return ZS(vv).then((vv => {
              Pv || hv(vv)
            }), (vv => {
              console.error("[CodeEditor] could not collect the imported plugins", vv), Pv || hv(null)
            })), () => {
              Pv = !0
            }
          }), [vv, zv]), Pv
        }(Lz, hv);
        (0, Sv.useEffect)((() => {
          yP && kz && !yP.includes(kz) && (Xz(null), vP(null), Tv && !zP.current && jP(hP.current))
        }), [kz, yP, Tv, jP]), CP.current = {
          collabState: Zz,
          ensureJoinedPath: fP,
          waitForLobbyPath: FP,
          pullLobbyFiles: KP,
          t: ZP,
          canEditCode: !!iz
        }, sP.current || (sP.current = new JS({
          getLobbyFiles: () => ({
            ...dP.current,
            ...(0, KS.j)(Ez.current.assets)
          }),
          deleteSchematic: async vv => {
            const zv = await bS({
              action: "remove",
              path: vv,
              expectedRevision: Ez.current.revision
            });
            oz(zv)
          },
          getActivePath: () => hP.current,
          getCollabSnapshot: () => {
            var vv;
            if (SP.current) return null;
            const zv = null === (vv = CP.current) || void 0 === vv ? void 0 : vv.collabState;
            return zv ? {
              doc: zv.doc,
              version: zv.version,
              clientID: zv.clientID,
              docKey: zv.docKey,
              httpConfig: zv.httpConfig
            } : null
          },
          replaceActiveDoc: (vv, zv) => {
            var Pv, hv;
            return null !== (Pv = null === (hv = iP.current) || void 0 === hv ? void 0 : hv.call(iP, vv, zv)) && void 0 !== Pv && Pv
          },
          ensureJoined: vv => CP.current.ensureJoinedPath(vv),
          createFile: (vv, zv) => {
            !1 !== (null === zv || void 0 === zv ? void 0 : zv.focus) && (NP.current = vv), Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.CreateFile,
              sh: (0, mS.v)({
                kind: "lobby",
                path: hP.current
              }),
              Jg: vv
            })
          },
          renameFile: (vv, zv) => {
            const Pv = (0, mS.v)({
              kind: "lobby",
              path: hP.current
            });
            hP.current === vv && (lP.current = {
              fromPath: vv,
              toPath: zv
            }, rz(zv)), Nv.gameBridge.send("sendCodeCollab", {
              ah: mS.b.RenameFile,
              sh: Pv,
              Jg: vv,
              Eg: zv
            })
          },
          deleteFile: vv => {
            YP(vv)
          },
          waitForLobbyPath: (vv, zv, Pv) => CP.current.waitForLobbyPath(vv, zv, Pv),
          pullLobbyFiles: () => CP.current.pullLobbyFiles(),
          setMessage: (vv, zv) => {
            cP({
              message: vv,
              type: zv
            })
          },
          onUnlinked: () => {
            WP(!1)
          },
          t: vv => CP.current.t(vv),
          canEditCode: () => CP.current.canEditCode,
          getStorageKey: () => {
            const {
              gameNameWithVariation: vv,
              lobbyName: zv
            } = Nv.gameBridge.latest("connectedGame");
            return (0, AS.d)(vv, zv)
          }
        }));
        const BP = (0, Sv.useCallback)((async vv => {
            const zv = sP.current;
            if (!zv) return !1;
            try {
              return await zv.writeLobbyFiles(vv)
            } catch (Pv) {
              return console.error("World Code AI: couldn't write the change", Pv), !1
            }
          }), []),
          JP = (0, Sv.useCallback)((async vv => {
            var zv, Pv;
            const hv = null === (zv = vv.find((vv => vv.path === Le.e))) || void 0 === zv ? void 0 : zv.text,
              Sv = PP.current;
            return void 0 !== hv && "codeBlock" === (null === Sv || void 0 === Sv ? void 0 : Sv.kind) && (!(null === (Pv = iP.current) || void 0 === Pv || !Pv.call(iP, (0, mS.v)(Sv), hv)) && (Wv.current = hv, Tz(hv), !0))
          }), []),
          EP = (0, Sv.useCallback)((async () => {
            try {
              var vv, zv;
              const Pv = await be(GS.i);
              return !1 === Pv.canSeeCode ? null : null !== (vv = Pv.files) && void 0 !== vv ? vv : {
                [GS.i]: null !== (zv = Pv.code) && void 0 !== zv ? zv : ""
              }
            } catch (Pv) {
              return console.error("World Code AI: couldn't read World Code for a code block", Pv), null
            }
          }), []),
          oP = (0, Sv.useMemo)((() => ({
            [Le.e]: lz
          })), [lz]),
          bP = (0, Sv.useCallback)(((vv, zv) => {
            av.j.zC("CodeEditorGoToLine", {
              path: Le.e,
              line: zv
            })
          }), []);
        (0, Sv.useEffect)((() => {
          vz && hv && Nz(gz)
        }), [vz, hv, gz]);
        const rP = (0, Sv.useCallback)((() => {
            var vv, zv;
            UP();
            const Pv = (0, Rv.isTouchscreen)() ? "open World Code again" : `press ${null!==(vv=null===(zv=yz.z.OpenCodeEditor)||void 0===zv?void 0:zv[0])&&void 0!==vv?vv:"F8"}`,
              hv = Tv ? `\ud83e\udd16 Try out your change, then ${Pv} to tell the AI Helper how it went.` : "\ud83e\udd16 Click the code block to try your change, then open it again to tell the AI Helper how it went.";
            av.j.zC("chat", {
              content: [{
                str: hv,
                style: {
                  color: nv.L.cyanUiText
                }
              }]
            })
          }), [UP, Tv]),
          kP = (0, Sv.useCallback)((vv => {
            const zv = sv,
              Pv = cv.current;
            Tv || !zv || Nv.gameBridge.lookup("codeBlockClickable", zv) ? (0, He.o)(vv, {
              submit: () => {
                UP(), av.j.zC("chat", {
                  content: [{
                    str: "\ud83e\udd16 Testing your change. The AI Helper comes back in a moment.",
                    style: {
                      color: nv.L.cyanUiText
                    }
                  }]
                }), !Tv && zv && setTimeout((() => {
                  Nv.gameBridge.send("clickCodeBlock", zv)
                }), 1e3)
              },
              reopen: () => {
                (0, Lv.o)() || (Tv ? av.j.zC("EditLobbyCode", zv) : av.j.zC("EditCodeBlock", {
                  pos: zv,
                  canChangePos: Pv
                }))
              }
            }) : rP()
          }), [UP, Tv, sv, rP]),
          XP = (0, Sv.useCallback)((() => {
            zz(!1)
          }), [zz]),
          uP = (0, Sv.useRef)(VP);
        uP.current = VP;
        const vh = (0, Sv.useCallback)((function(vv) {
            let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            av.j.zC("WorldCodeAiDraft", {
              text: vv,
              send: zv
            }), uP.current(), av.j.zC("EditLobbyCode", sv)
          }), [sv]),
          zh = (0, Sv.useCallback)((vv => {
            uP.current(), vv.codeBlock ? av.j.zC("EditCodeBlock", {
              pos: [...vv.pos],
              canChangePos: vv.canChangePos
            }) : av.j.zC("EditLobbyCode", sv)
          }), [sv]);
        (0, Yv.g)("WorldCodeAiDraft", (vv => {
          Tv && (hz(vv), zz(!0))
        }));
        const Ph = !!iz && !!fz && ge.h.includes(fz),
          hh = !!iz && !!nz && ge.d.includes(nz);
        (0, Sv.useEffect)((() => {
          hv && vz && Cz && !Ph && Qv(!1)
        }), [hv, vz, Cz, Ph]);
        const Sh = (0, Sv.useCallback)((() => {
            zz(!1), Qv(!1)
          }), [zz]),
          {
            oT: eh,
            setWorld: gh,
            toggleWorld: ph
          } = function(vv) {
            let {
              showAi: zv,
              showDocs: Pv,
              showChat: hv,
              hideOtherRightPanels: ev
            } = vv;
            const [gv, pv] = (0, Sv.useState)("hidden"), dv = (0, Sv.useRef)(null), Nv = (0, Sv.useCallback)((() => {
              dv.current = null, pv((vv => "hidden" === vv ? vv : (0, we.e)() ? "hidden" : "shown"))
            }), []);
            (0, Sv.useEffect)((() => {
              (zv || Pv) && Nv()
            }), [zv, Pv, Nv]), (0, Sv.useEffect)((() => {
              hv && Nv()
            }), [hv, Nv]);
            const lv = "hidden" !== gv && (0, we.e)();
            (0, Sv.useLayoutEffect)((() => {
              if (lv) {
                const vv = document.activeElement;
                vv instanceof HTMLElement && vv.closest(".cm-content") && (dv.current = vv, vv.blur())
              } else {
                var vv;
                null === (vv = dv.current) || void 0 === vv || vv.focus(), dv.current = null
              }
            }), [lv]);
            const Tv = (0, Sv.useCallback)((() => {
              "hidden" === gv ? (pv("shown"), (0, we.e)() && ev()) : pv("hidden")
            }), [gv, ev]);
            return {
              oT: gv,
              setWorld: pv,
              toggleWorld: Tv
            }
          }({
            showAi: vz,
            showDocs: Iv,
            showChat: Zv,
            hideOtherRightPanels: Sh
          }),
          dh = vz && null !== az && Cz,
          Nh = (0, Sv.useCallback)((() => {
            hz(null)
          }), []),
          [lh, Th] = (0, Sv.useState)(null);
        (0, Yv.g)("WorldCodeAiSelection", (vv => {
          hv && (Th(vv), zz(!0), Qv(!1))
        }));
        const Wh = (0, Sv.useCallback)((() => {
          Th(null)
        }), []);
        (0, Yv.g)("chat", (vv => {
          let {
            content: zv
          } = vv;
          if (!Tv && null === wz.current) return;
          const Pv = Array.isArray(zv) ? zv : [zv],
            hv = Pv.some((vv => {
              var zv;
              return (null === vv || void 0 === vv || null === (zv = vv.style) || void 0 === zv ? void 0 : zv.color) === nv.L.redUiText
            })),
            Sv = Pv.map((vv => {
              var zv;
              const Pv = null !== (zv = null === vv || void 0 === vv ? void 0 : vv.str) && void 0 !== zv ? zv : vv;
              return "string" === typeof Pv ? Pv : ""
            })).join("");
          hv && /world code|error/i.test(Sv) && (ez((vv => [...vv, Sv].slice(-10))), pz((vv => vv + 1)), (0, He.g)(Sv))
        })), (0, Sv.useEffect)((() => {
          if (!hv || !Tv || !wP) return;
          let vv = !1;
          return (async (zv, Pv) => {
            const hv = await (null === (zv = sP.current) || void 0 === zv ? void 0 : zv.tryRestoreHandle());
            !vv && hv && (WP(!0), null === (Pv = sP.current) || void 0 === Pv || Pv.startWhenReady())
          })(), () => {
            vv = !0
          }
        }), [hv, Tv, wP]), (0, Sv.useEffect)((() => {
          var vv;
          hv || (null === (vv = sP.current) || void 0 === vv || vv.stopContinuousSync(), mP(!1), Dz.current && (Dz.current = !1, Nv.gameBridge.send("sendChatMessage", {
            al: "//export",
            channelName: null
          })))
        }), [hv, mP]);
        const wh = (0, Sv.useCallback)((async () => {
            if (wP && sP.current) try {
              if (!await sP.current.linkFolder()) return;
              WP(!0), await sP.current.startWhenReady()
            } catch (vv) {
              console.error("[WorldCodeDirectorySync] Link failed", vv), cP({
                message: ZP("codeEditor:directorySyncError"),
                type: "warning"
              })
            }
          }), [wP, ZP]),
          ah = (0, Sv.useCallback)((async () => {
            sP.current && await sP.current.unlinkFolder()
          }), []),
          sh = (0, Sv.useCallback)((() => {
            wP ? TP ? ah() : wh() : rh.NotificationProvider.showAlertPopup({
              title: "codeEditor:directorySyncUnsupported",
              subtitle: "codeEditor:directorySyncUnsupportedBody",
              confirmText: "general:ok"
            })
          }), [wP, TP, wh, ah]),
          Ch = Tv && "hidden" !== eh;
        return (0, lv.jsxs)(gv.c, {
          className: GP()("CodeEditorBg", {
            CodeEditorLight: Uv,
            WorldShown: "hidden" !== eh,
            WorldTouchControl: "touchControls" === Xv
          }),
          close: VP,
          escDoesExit: !0,
          show: hv,
          togglePointerLock: !1,
          globallyUniqueKey: Tv ? "LobbyCodeEditor" : "CodeBlockEditor",
          children: [(0, lv.jsx)(ee.e, {
            tutorial: "welcome",
            step: "codeBlockIntro",
            text: ZP("codeEditor:tutorialCodeBlockIntro"),
            enabled: !!iz && !Tv
          }), (0, lv.jsx)(ee.e, {
            tutorial: "welcome",
            step: "worldCodeIntro",
            text: (0, lv.jsxs)(lv.Fragment, {
              children: [(0, lv.jsx)("p", {
                children: ZP("codeEditor:tutorialWorldCodeWelcome")
              }), (0, lv.jsxs)("ul", {
                className: "TutorialStepList",
                children: [(0, lv.jsx)("li", {
                  children: ZP("codeEditor:tutorialWorldCodeUseSetUp")
                }), (0, lv.jsx)("li", {
                  children: ZP("codeEditor:tutorialWorldCodeUseReact")
                }), (0, lv.jsx)("li", {
                  children: ZP("codeEditor:tutorialWorldCodeUseRun")
                })]
              })]
            }),
            enabled: !!iz && Tv
          }), (0, lv.jsx)("div", {
            className: "CodeEditorTitle",
            children: Tv ? "World Code" : "Code Block"
          }), (0, lv.jsxs)("div", {
            className: "CodeEditorTopBar",
            children: [(0, lv.jsxs)("div", {
              className: "CodeEditorTopLeft",
              children: [(0, lv.jsx)(Ev.h, {
                tooltipInner: ZP(cz ? "codeEditor:exportTooltip" : "codeEditor:exportOwnerOnly"),
                delayShow: cz ? void 0 : 0,
                hideTooltip: "exportButton" === Gz,
                children: (0, lv.jsx)(ee.m, {
                  tutorial: "welcome",
                  step: "exportButton",
                  text: ZP("codeEditor:tutorialExport"),
                  enabled: !!iz,
                  children: (0, lv.jsx)(wv.j, {
                    className: "CodeEditorButton",
                    disabled: !cz,
                    onClick: () => {
                      "exportButton" === Gz && ((0, ge.f)("exportButton"), Oz.current = !0), Dz.current = !0, VP()
                    },
                    padDestructive: !0,
                    children: ZP("codeEditor:exportWorld")
                  })
                })
              }), (0, lv.jsx)(te, {
                oT: eh,
                setWorld: gh,
                toggleWorld: ph,
                aiShown: dh,
                closeAi: XP
              })]
            }), (0, lv.jsxs)("div", {
              className: "CodeEditorTopRight",
              children: [iz && (0, lv.jsx)(Ev.h, {
                tooltipInner: ZP("codeEditor:helpTooltip"),
                hideTooltip: "helpButton" === Gz,
                children: (0, lv.jsx)(ee.m, {
                  tutorial: "welcome",
                  step: "helpButton",
                  text: ZP("codeEditor:tutorialHelpButton"),
                  placement: "bottom",
                  children: (0, lv.jsx)(wv.d, {
                    className: "CodeEditorHelpButton",
                    ariaLabel: ZP("codeEditor:helpTooltip"),
                    onClick: () => {
                      (0, ge.f)("helpButton"), rh.NotificationProvider.showCustomPopup({
                        body: vv => (0, lv.jsx)(pe, {
                          close: vv
                        }),
                        unlockPointerKey: "codeEditorTutorials"
                      })
                    },
                    children: (0, lv.jsx)("div", {
                      className: "CodeEditorHelpButtonInner",
                      children: (0, lv.jsx)(Cv.b, {
                        name: "circle-question"
                      })
                    })
                  })
                })
              }), (0, lv.jsx)(Ev.h, {
                tooltipInner: ZP("codeEditor:closeTooltip"),
                children: (0, lv.jsx)("div", {
                  className: "CodeEditorCloseButtonClickZone",
                  onClick: () => {
                    VP()
                  },
                  children: (0, lv.jsx)(wv.i, {
                    className: "CodeEditorCloseButton"
                  })
                })
              })]
            })]
          }), (0, lv.jsx)(YS, {
            peers: null !== (zv = null === Zz || void 0 === Zz ? void 0 : Zz.peers) && void 0 !== zv ? zv : []
          }), (0, lv.jsxs)("div", {
            className: GP()("CodeEditorMainArea", {
              WorldCovers: "always" === ae(eh),
              WorldCoversWhenNarrow: "narrow" === ae(eh)
            }),
            children: [Zv && Bv && (0, lv.jsx)(we.c, {
              side: "left",
              defaultSize: "max(16rem, 24%)",
              onClose: () => {
                Hv(!1)
              },
              children: (0, lv.jsx)(We, {
                inputRef: Mv
              })
            }), Tv && (0, lv.jsx)(RS, {
              schematics: Bz.assets,
              onManageSchematic: vv => {
                iz && rh.NotificationProvider.showCustomPopup({
                  body: zv => (0, lv.jsx)(XS, {
                    initialPath: vv,
                    onChanged: oz,
                    onClose: zv
                  }),
                  unlockPointerKey: "worldCodeSchematics"
                })
              },
              files: Lz,
              activePath: bz,
              canEdit: !!iz,
              directoryLinked: TP,
              pluginNames: null !== yP && void 0 !== yP ? yP : ke,
              activePluginName: kz,
              activePluginFile: uz,
              onSelect: nP,
              onSelectPlugin: OP,
              onToggleDirectorySync: sh,
              onCreate: vv => {
                NP.current = vv, Nv.gameBridge.send("sendCodeCollab", {
                  ah: mS.b.CreateFile,
                  sh: (0, mS.v)({
                    kind: "lobby",
                    path: hP.current
                  }),
                  Jg: vv
                })
              },
              onRename: (vv, zv) => {
                hP.current === vv && (lP.current = {
                  fromPath: vv,
                  toPath: zv
                }, rz(zv)), Nv.gameBridge.send("sendCodeCollab", {
                  ah: mS.b.RenameFile,
                  sh: (0, mS.v)({
                    kind: "lobby",
                    path: hP.current
                  }),
                  Jg: vv,
                  Eg: zv
                })
              },
              onRenameFolder: (vv, zv) => {
                const [Pv] = (0, jS.k)([hP.current], vv, zv);
                Pv && (lP.current = {
                  fromPath: Pv[0],
                  toPath: Pv[1]
                }, rz(Pv[1])), Nv.gameBridge.send("sendCodeCollab", {
                  ah: mS.b.RenameFolder,
                  sh: (0, mS.v)({
                    kind: "lobby",
                    path: hP.current
                  }),
                  Jg: vv,
                  Eg: zv
                })
              },
              onDelete: YP
            }), (0, lv.jsx)("div", {
              className: GP()("CodeEditorMessage", {
                CodeEditorMessageHidden: !Fv.message,
                CodeEditorMessageSuccess: "success" === Fv.type
              }),
              children: Fv.message && (0, lv.jsx)("div", {
                className: "CodeEditorMessageText",
                children: Fv.message
              })
            }), (0, lv.jsx)(Sv.Suspense, {
              fallback: (0, lv.jsx)("div", {
                className: "CodeEditorContent",
                children: (0, lv.jsx)(Dv.c, {})
              }),
              children: (0, lv.jsx)(ye, {
                isLobbyCode: Tv,
                code: Zz ? Zz.doc : Wv.current,
                files: Tv ? Lz : void 0,
                activePath: Tv ? bz : void 0,
                pluginName: kz,
                pluginFile: uz,
                pluginSource: kz && uz ? null === (Pv = OS.e[kz]) || void 0 === Pv ? void 0 : Pv.files[uz] : void 0,
                onChange: tP,
                canEditCode: iz,
                setTemporaryMessage: cP,
                close: VP,
                showTooltips: Kv,
                lightMode: Uv,
                collabState: Zz,
                setActiveDocReplacer: MP,
                showAiHints: Cz && tv,
                canAiChangeCode: !!iz && (Tv || !!cv.current),
                onRemoteDocChange: vv => {
                  var zv;
                  (Wv.current = vv, Tv) ? (Mz((zv => ({
                    ...zv,
                    [hP.current]: vv
                  }))), null === (zv = sP.current) || void 0 === zv || zv.onDocTextChanged(hP.current, vv)) : Tz(vv)
                }
              })
            }), (Iv || dh || "hidden" !== eh) && (0, lv.jsxs)(se, {
              oT: eh,
              worldPanel: (0, lv.jsx)(Re, {
                shown: eh,
                setShown: gh,
                canInsertCode: !!iz && !kz
              }),
              closeWorld: () => {
                gh("hidden")
              },
              aiShown: dh,
              defaultWidth: Iv ? "40%" : "max(18rem, 36%)",
              children: [Iv && (0, lv.jsx)(we.c, {
                onClose: Ph ? void 0 : IP,
                children: (0, lv.jsx)(Sv.Suspense, {
                  fallback: (0, lv.jsx)("div", {
                    className: "DocsPanel",
                    children: (0, lv.jsx)(Dv.c, {})
                  }),
                  children: (0, lv.jsx)(Be, {
                    popOutDocs: qP,
                    hideDocs: IP,
                    tutorialEnabled: !!iz
                  })
                })
              }), dh && (0, lv.jsx)(we.c, {
                onClose: hh ? void 0 : XP,
                children: (0, lv.jsx)(Sv.Suspense, {
                  fallback: (0, lv.jsx)("div", {
                    className: "CodeEditorPanelLoading",
                    children: (0, lv.jsx)(Dv.c, {})
                  }),
                  children: (0, lv.jsx)(Je, {
                    target: az,
                    chatKey: `${Iz.gameNameWithVariation}/${Iz.lobbyName}/aiHelper`,
                    historyKey: `${Iz.gameNameWithVariation}/${Iz.lobbyName}/${az.key}`,
                    files: az.codeBlock ? oP : Lz,
                    activePath: az.codeBlock ? Le.e : bz,
                    canEdit: !!iz && (az.codeBlock ? !!cv.current : !kz),
                    isLoaded: null !== Zz,
                    errors: Sz,
                    errorCount: gz,
                    applyFiles: az.codeBlock ? JP : BP,
                    submit: rP,
                    testRun: kP,
                    close: XP,
                    goToLine: az.codeBlock ? bP : HP,
                    openWorldCode: az.codeBlock ? vh : void 0,
                    readWorldCode: az.codeBlock ? EP : void 0,
                    viewChunk: Ee,
                    viewGameState: oe,
                    openTarget: iz ? zh : void 0,
                    draft: Pz,
                    onDraftUsed: Nh,
                    selection: lh,
                    onSelectionUsed: Wh
                  }, az.key)
                })
              })]
            })]
          }), (null === eP || void 0 === eP ? void 0 : eP.fallback) && (0, lv.jsx)(ve, {
            fallback: eP.fallback,
            onGoToLine: HP
          }), (0, lv.jsxs)("div", {
            className: "CodeEditorButtons",
            "data-pad-hint-bar-avoid": !0,
            children: [(0, lv.jsx)(Ev.h, {
              tooltipInner: ZP(Uv ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
              placement: "top",
              children: (0, lv.jsx)(wv.d, {
                className: "CodeEditorButton CodeEditorThemeButton",
                ariaLabel: ZP(Uv ? "codeEditor:switchToDarkMode" : "codeEditor:switchToLightMode"),
                onClick: () => {
                  xv(!Uv)
                },
                children: (0, lv.jsx)(Cv.b, {
                  name: Uv ? "moon" : "sun-bright"
                })
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP(Ch ? "codeEditorWorld:submitCodeTooltip" : "codeEditor:submitCodeTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.j, {
                className: "CodeEditorButton",
                onClick: () => {
                  UP(Ch)
                },
                padDefaultFocus: !0,
                children: ZP("codeEditor:submitCode")
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP(Iv ? "codeEditor:hideDocsTooltip" : "codeEditor:showDocsTooltip"),
              placement: "top",
              hideTooltip: "docsButton" === fz || "hideDocsButton" === fz,
              children: (0, lv.jsx)(ee.m, {
                tutorial: jz,
                step: Iv ? "hideDocsButton" : "docsButton",
                text: ZP(Iv ? "codeEditor:tutorialHideDocs" : "codeEditor:tutorialDocs"),
                enabled: !!iz,
                placement: "top",
                waitForClick: !0,
                onPrevious: Iv && "welcome" === jz ? IP : void 0,
                children: (0, lv.jsx)(wv.p, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    (0, ge.f)(Iv ? "hideDocsButton" : "docsButton"), Qv(!Iv), zz(!1)
                  },
                  children: ZP(Iv ? "codeEditor:hideDocs" : "codeEditor:showDocs")
                })
              })
            }), Cz && (0, lv.jsx)(ee.m, {
              tutorial: Yz,
              step: vz ? "hideAiHelperButton" : "aiHelperButton",
              text: ZP(vz ? "codeEditorAiTutorial:hideAiHelperButton" : "welcome" === Yz ? "codeEditorAiTutorial:welcomeAiHelperButton" : "codeEditorAiTutorial:aiHelperButton"),
              enabled: !!iz,
              placement: "top",
              waitForClick: !0,
              onPrevious: vz && "welcome" === Yz ? QP : void 0,
              children: (0, lv.jsx)(LP, {
                className: "CodeEditorButton",
                onClick: () => {
                  (0, ge.f)(vz ? "hideAiHelperButton" : "aiHelperButton"), zz(!vz), Qv(!1)
                },
                children: vz ? "Hide AI Helper" : AP ? "Fix error with AI" : "AI Helper"
              })
            }), Bv && (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP(Zv ? "codeEditorChat:hideChatTooltip" : "codeEditorChat:showChatTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.p, {
                className: "CodeEditorButton",
                onClick: () => {
                  yv.current = !Zv, Hv(!Zv)
                },
                children: ZP(Zv ? "codeEditorChat:hideChat" : "codeEditorChat:showChat")
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP("hidden" === eh ? "codeEditorWorld:showWorldTooltip" : "codeEditorWorld:hideWorldTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.p, {
                className: "CodeEditorButton CodeEditorWorldButton",
                onClick: ph,
                children: ZP("hidden" === eh ? "codeEditorWorld:showWorld" : "codeEditorWorld:hideWorld")
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP("codeEditor:formatCodeTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  av.j.zC("FormatCode")
                },
                children: ZP("codeEditor:formatCode")
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP("codeEditor:copyCodeTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  navigator.clipboard.writeText(Wv.current).then((() => {
                    cP({
                      message: "Successfully copied code to clipboard",
                      type: "success"
                    })
                  })).catch((() => {
                    cP({
                      message: "Failed to copy code to clipboard",
                      type: "warning"
                    })
                  }))
                },
                children: ZP("codeEditor:copyCode")
              })
            }), (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP(Kv ? "codeEditor:hideTooltipsTooltip" : "codeEditor:showTooltipsTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.d, {
                className: "CodeEditorButton",
                onClick: () => {
                  Vv(!Kv)
                },
                children: ZP(Kv ? "codeEditor:hideTooltips" : "codeEditor:showTooltips")
              })
            }), !Tv && (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP("codeEditor:worldCodeTooltip"),
              placement: "top",
              hideTooltip: "worldCodeButton" === Gz,
              children: (0, lv.jsx)(ee.m, {
                tutorial: "welcome",
                step: "worldCodeButton",
                text: ZP("codeEditor:tutorialWorldCodeButton"),
                enabled: !!iz,
                placement: "top",
                waitForClick: !0,
                children: (0, lv.jsx)(wv.p, {
                  className: "CodeEditorButton",
                  onClick: () => {
                    "worldCodeButton" === Gz && ((0, ge.f)("worldCodeButton"), Oz.current = !0), VP(), av.j.zC("EditLobbyCode", sv)
                  },
                  children: ZP("codeEditor:worldCode")
                })
              })
            }), (Qz || gP || Cz) && (0, lv.jsx)(Ev.h, {
              tooltipInner: ZP("codeEditor:moreOptionsTooltip"),
              placement: "top",
              children: (0, lv.jsx)(wv.d, {
                className: "CodeEditorButton CodeEditorMoreButton",
                onClick: () => {
                  xz(!0)
                },
                children: (0, lv.jsx)(Cv.b, {
                  name: "ellipsis"
                })
              })
            })]
          }), Rz && (0, lv.jsx)(Xh.e, {
            middleScreenPopupContainerClassName: "CodeEditorMoreOptionsPopup",
            close: () => {
              xz(!1)
            },
            body: (0, lv.jsx)(Se, {
              engine: gP,
              onSetEngine: xP,
              aiHints: Cz ? {
                shown: tv,
                setShown: qv
              } : null,
              variation: Qz ? {
                name: Vz,
                setName: Uz,
                reload: RP
              } : null
            })
          })]
        })
      })),
      vg = new Set(["makeReport", "makeDiscordReport", "inviteLink"]);

    function zg(vv) {
      return "inventory" === vv
    }
    const Pg = (0, Sv.memo)((function() {
      const {
        openEverythingMenuName: vv,
        openInGameMenuName: zv
      } = (0, Av.i)(["openEverythingMenuName", "openInGameMenuName"]), Pv = (0, Ov.h)("fullInventory"), ev = (0, Sv.useRef)(null), gv = (0, Vz.g)();
      (0, Yv.g)("toggleMenu", (vv => {
        var zv;
        if (!gv.shown) return;
        const Pv = Av.c.get("openInGameMenuName");
        let hv = vv.split("|")[0];
        const Sv = null !== (zv = vv.split("|")[1]) && void 0 !== zv ? zv : null;
        ("closeCurrentMenu" === Sv && Pv || hv === Pv) && (ev.current = null, hv = null);
        const pv = "closeCurrentMenu" === Sv ? null : Sv;
        ev.current !== pv && (ev.current = pv), null !== hv && (0, gS.r)(gS.e, {
          keepsMovement: zg(hv)
        }), Av.c.set({
          openInGameMenuName: hv
        })
      }));
      const pv = (0, Sv.useCallback)((vv => () => {
          av.j.zC("toggleMenu", vv)
        }), []),
        dv = (0, Sv.useRef)({
          cantCrouchIfNotFullscreen: pv("cantCrouchIfNotFullscreen"),
          makeReport: pv("makeReport"),
          makeDiscordReport: pv("makeDiscordReport"),
          editBook: pv("editBook"),
          editNameTag: pv("editNameTag"),
          inventory: pv("inventory"),
          inviteLink: pv("inviteLink"),
          writeOnBoard: pv("writeOnBoard"),
          codeEditor: pv("codeEditor"),
          lobbyCodeEditor: pv("lobbyCodeEditor"),
          customLobbyBlockEditor: pv("customLobbyBlockEditor"),
          ironChestPasskeyInput: pv("ironChestPasskeyInput"),
          petUi: pv("petUi")
        }),
        Nv = (0, Sv.useCallback)((() => {
          Av.c.set({
            openInGameMenuName: null
          })
        }), []),
        Tv = (0, Sv.useRef)(null);
      return (0, Sv.useEffect)((() => {
        if (zv) {
          var vv;
          (0, gS.r)(gS.e, {
            keepsMovement: zg(zv)
          }), Tv.current = vg.has(zv) ? null !== (vv = Av.c.get("openEverythingMenuName")) && void 0 !== vv ? vv : Tv.current : null, Av.c.set({
            openEverythingMenuName: null
          })
        } else {
          const vv = Tv.current;
          Tv.current = null, null !== vv && null === Av.c.get("openEverythingMenuName") && Av.c.set({
            openEverythingMenuName: vv
          }), ev.current = null, (0, gS.q)(gS.e)
        }
      }), [zv]), (0, Sv.useEffect)((() => {
        null !== vv && Nv()
      }), [vv, Nv]), (0, lv.jsxs)(lv.Fragment, {
        children: [(0, lv.jsx)(hv.i, {
          show: "clientGame" === zv
        }), (0, lv.jsx)(Eh, {
          show: "cantCrouchIfNotFullscreen" === zv,
          onOpen: dv.current.cantCrouchIfNotFullscreen,
          onClose: Nv
        }), (0, lv.jsx)(hS, {
          show: "makeReport" === zv,
          onOpen: dv.current.makeReport,
          onClose: Nv
        }), (0, lv.jsx)(eS, {
          show: "makeDiscordReport" === zv,
          onOpen: dv.current.makeDiscordReport,
          onClose: Nv
        }), (0, lv.jsx)(zP, {
          show: "editBook" === zv,
          onOpen: dv.current.editBook,
          onClose: Nv
        }), (0, lv.jsx)(uz, {
          show: "editNameTag" === zv,
          onOpen: dv.current.editNameTag,
          onClose: Nv
        }), Pv && (0, lv.jsx)(yh, {
          show: "inventory" === zv,
          onOpen: dv.current.inventory,
          onClose: Nv,
          variation: ev.current
        }), (0, lv.jsx)(Uz, {
          show: "inviteLink" === zv,
          onClose: Nv,
          option: ev.current
        }), (0, lv.jsx)(qv, {
          show: "retentionFeatures" === zv,
          onClose: Nv
        }), (0, lv.jsx)(Xz, {
          show: "writeOnBoard" === zv,
          onOpen: dv.current.writeOnBoard,
          onClose: Nv
        }), (0, lv.jsx)(ue, {
          show: "lobbyCodeEditor" === zv,
          onOpen: dv.current.lobbyCodeEditor,
          onClose: Nv,
          isLobbyCode: !0
        }), (0, lv.jsx)(ue, {
          show: "codeEditor" === zv,
          onOpen: dv.current.codeEditor,
          onClose: Nv,
          isLobbyCode: !1
        }), (0, lv.jsx)(dS, {
          show: "customLobbyBlockEditor" === zv,
          onOpen: dv.current.customLobbyBlockEditor,
          onClose: Nv
        }), (0, lv.jsx)(jP, {
          show: "ironChestPasskeyInput" === zv,
          onOpen: dv.current.ironChestPasskeyInput,
          onClose: Nv
        }), (0, lv.jsx)(aS, {
          togglePointerLock: !0,
          show: "petUi" === zv,
          onOpen: dv.current.petUi,
          onClose: Nv
        })]
      })
    }))
  },
  36038: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => eg
    });
    Pv(36041);
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(3515),
      pv = Pv(1439),
      dv = Pv(1858),
      Nv = Pv(1082);

    function lv() {
      const vv = 2e3,
        [zv, Pv] = (0, hv.useState)(null),
        [Sv, lv] = (0, hv.useState)(null),
        Tv = (0, hv.useRef)(null);
      (0, pv.g)("showBottomMessage", (zv => {
        let {
          message: Pv,
          timeoutLength: hv = vv,
          type: Sv
        } = zv;
        lv({
          message: Pv,
          type: Sv
        }), clearTimeout(Tv.current), Tv.current = setTimeout((() => {
          lv(null)
        }), hv)
      })), (0, pv.g)("showPermanentBottomMessage", (vv => {
        Pv(vv)
      })), (0, hv.useEffect)((() => ((0, gv.b)((() => {
        Pv(null)
      })), () => {
        clearTimeout(Tv.current)
      })), []);
      const Wv = Sv || zv;
      return Wv ? (0, Nv.jsx)("div", {
        className: ev()("BottomScreenMessage", Wv.type),
        children: (0, Nv.jsx)(dv.c, {
          text: Wv.message
        })
      }) : null
    }
    var Tv = Pv(2273),
      Wv = Pv(1876),
      wv = Pv(1492),
      av = Pv(2328);

    function sv() {
      let vv;
      const zv = () => {
          clearTimeout(vv), vv = setTimeout((() => {
            Wv.gameBridge.latest("connectedGame").replay || (Wv.gameBridge.send("leaveGame", {
              reloadPath: "/"
            }), (0, wv.navigatePreserveSearch)("/"))
          }), 3e5)
        },
        Pv = () => {
          clearTimeout(vv)
        };
      return window.addEventListener("focus", Pv), window.addEventListener("blur", zv), () => {
        window.removeEventListener("blur", zv), window.removeEventListener("focus", Pv), clearTimeout(vv)
      }
    }
    var Cv = Pv(1108),
      iv = Pv(2899),
      cv = Pv(302),
      Gv = Pv(2324),
      mv = Pv(26),
      jv = Pv(1903),
      fv = Pv(39),
      Fv = Pv(1923),
      Yv = Pv(22),
      nv = Pv(1927),
      Ov = Pv(1374),
      Dv = Pv(8505),
      Kv = Pv(1958),
      Vv = Pv(1175);
    const Uv = (0, hv.memo)((function() {
      const {
        isTouchScreen: vv,
        loadingOverlayVisible: zv,
        openInGameMenuName: Pv,
        openEverythingMenuName: Sv
      } = (0, Yv.i)(["isTouchScreen", "loadingOverlayVisible", "openInGameMenuName", "openEverythingMenuName"]), gv = (0, Ov.m)();
      (0, iv.d)();
      const pv = (0, Gv.i)("showBasicMovementControls"),
        [dv, lv] = (0, hv.useState)("movement"),
        Tv = "movement" === dv,
        Wv = gv && !1 !== pv;
      (0, hv.useEffect)((() => {
        "padActions" !== dv || Wv || lv("done")
      }), [dv, Wv]);
      const wv = zv || null !== Pv || null !== Sv,
        av = (0, hv.useRef)({
          step: dv,
          ms: 0
        });
      return (0, hv.useEffect)((() => {
        if (wv || "done" === dv) return;
        av.current.step !== dv && (av.current = {
          step: dv,
          ms: 0
        });
        const vv = av.current,
          zv = performance.now(),
          Pv = setTimeout((() => {
            lv("movement" === dv && (0, Ov.d)() ? "padActions" : "done")
          }), 7e3 - vv.ms);
        return () => {
          clearTimeout(Pv), vv.ms += performance.now() - zv
        }
      }), [wv, dv]), fv.h.getItem(cv.xb) > 2 ? (0, Nv.jsx)(qv, {
        showingMovementControls: !1
      }) : (0, Nv.jsxs)(Nv.Fragment, {
        children: [vv && !gv || !Tv || !1 === pv ? null : (0, Nv.jsxs)("div", {
          className: ev()("ControlsTutorialDiv", {
            Covered: wv
          }),
          children: [(0, Nv.jsx)(Rv, {}), (0, Nv.jsx)(tv, {
            header: "Sprint",
            noaAction: "sprint"
          }), (0, Nv.jsx)(tv, {
            header: "Jump",
            noaAction: "jump"
          })]
        }), "padActions" === dv && Wv && (0, Nv.jsx)(xv, {
          covered: wv
        }), (0, Nv.jsx)(qv, {
          showingMovementControls: "done" !== dv
        })]
      })
    }));

    function Rv() {
      const vv = (0, Ov.m)();
      return (0, Nv.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Nv.jsx)("div", {
          className: "KeyHeader",
          children: "Move"
        }), vv && (0, Nv.jsx)(nv.e, {
          noaAction: "forward"
        }), !vv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("div", {
            className: "WasdKeysTopRow",
            children: (0, Nv.jsx)(nv.e, {
              noaAction: "forward"
            })
          }), (0, Nv.jsxs)("div", {
            className: "WasdKeysBottomRow",
            children: [(0, Nv.jsx)(nv.e, {
              noaAction: "left"
            }), (0, Nv.jsx)(nv.e, {
              noaAction: "backward"
            }), (0, Nv.jsx)(nv.e, {
              noaAction: "right"
            })]
          })]
        })]
      })
    }

    function xv(vv) {
      let {
        covered: zv
      } = vv;
      const {
        t: Pv
      } = (0, Vv.x)(), hv = (0, Gv.i)("useInventory");
      return (0, Nv.jsxs)("div", {
        className: ev()("ControlsTutorialDiv", {
          Covered: zv
        }),
        children: [(0, Nv.jsx)(tv, {
          header: Pv("controller:tutorialMine"),
          noaAction: "primary-fire"
        }), (0, Nv.jsx)(tv, {
          header: Pv("controller:tutorialPlace"),
          noaAction: "alt-fire"
        }), !1 !== hv && (0, Nv.jsx)(tv, {
          header: Pv("controller:tutorialInventory"),
          noaAction: "OpenInventory"
        }), (0, Nv.jsx)(tv, {
          header: Pv("controller:tutorialPause"),
          noaAction: "OpenSettings"
        })]
      })
    }

    function tv(vv) {
      let {
        header: zv,
        noaAction: Pv
      } = vv;
      return (0, Nv.jsxs)("div", {
        className: "KeyControlDiv",
        children: [(0, Nv.jsx)("div", {
          className: "KeyHeader",
          children: zv
        }), (0, Nv.jsx)(nv.e, {
          noaAction: Pv
        })]
      })
    }

    function qv(vv) {
      let {
        showingMovementControls: zv
      } = vv;
      const {
        isTouchScreen: Pv
      } = (0, Yv.i)(["isTouchScreen"]), Sv = (0, Ov.m)(), ev = (0, Kv.d)("OpenShop"), [gv, pv] = (0, hv.useState)(!1), dv = `SeenShopControls|${(0,Fv.g)("connectedGame",(vv=>vv.gameNameWithVariation))}`, lv = () => (!(0, Ov.d)() || null !== (0, Dv.b)("OpenShop")) && !fv.h.getItem(dv) && jv.c.get("shopInfo") && !zv, Tv = () => (pv(!0), fv.h.setItem(dv, !0), (0, Ov.d)() || mv.j.zC("showShopTouchTutorial"), setTimeout((() => {
        pv(!1)
      }), 7e3));
      (0, hv.useEffect)((() => {
        let vv;
        const zv = mv.j.subscribe("showShopTutorial", (() => {
          lv() && (vv = Tv())
        }));
        return () => {
          clearTimeout(vv), mv.j.unsubscribe(zv)
        }
      }), [zv]);
      const Wv = (0, hv.useRef)();
      return (0, Gv.e)("currencyAmounts", (vv => {
        if (lv()) {
          let Pv = !1;
          const hv = jv.c.get("shopInfo");
          for (const Sv in hv) {
            for (const ev in hv[Sv].items) {
              var zv;
              const gv = hv[Sv].items[ev];
              if (void 0 !== gv.currency && vv[gv.currency] && gv.cost <= vv[gv.currency].amount && (null === (zv = gv.hidden) || void 0 === zv || !zv)) {
                Pv = !0;
                break
              }
            }
            if (Pv) break
          }
          Pv && (Wv.current = Tv())
        }
      })), (0, hv.useEffect)((() => () => {
        clearTimeout(Wv.current)
      }), [zv]), !gv || Sv && !ev ? null : (0, Nv.jsx)("div", {
        className: "ControlsTutorialDiv",
        children: Pv && !Sv ? null : (0, Nv.jsx)(tv, {
          header: "Shop",
          noaAction: "OpenShop"
        })
      })
    }
    var Iv = Pv(1344),
      Qv = Pv(1042);
    const Zv = (0, hv.memo)((function() {
      return (0, iv.d)(), (0, Nv.jsx)(Av, {})
    }));
    class Av extends hv.Component {
      constructor(vv) {
        super(vv), this.showQueue = [], this.slideDuration = 1, this.state = {
          showQueue: [],
          currState: null
        }, this.currMessage = null, this.justShowed = !1
      }
      componentDidMount() {
        this.sub = mv.j.subscribe("TopRightHelper", (vv => {
          this.showQueue.push(vv), this.setState({
            showQueue: this.showQueue
          })
        }))
      }
      componentWillUnmount() {
        mv.j.unsubscribe(this.sub), clearTimeout(this.slideOutTimeout), clearTimeout(this.hidingMessageTimeout)
      }
      componentDidUpdate(vv, zv) {
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
        let vv, zv, Pv, hv, Sv, ev = !0;
        if (this.state.showQueue.length > 0 && null === this.state.currState ? (this.currMessage = this.state.showQueue[0], this.justShowed = !0, vv = "slideIn") : "slideOut" === this.state.currState ? vv = "slideOut" : null === this.currMessage && (ev = !1), this.currMessage) {
          const ev = this.currMessage.color || "rgb(102, 102, 102)";
          zv = {
            width: this.currMessage.width || "250px",
            height: this.currMessage.height || "70px",
            animation: "1s " + ("slideOut" === vv ? "HelperSlideKeyFrameReverse" : "HelperSlideKeyFrame")
          }, Pv = {
            backgroundColor: ev
          }, hv = {
            animation: "2s " + ("slideOut" === vv ? "CloseNotification" : "ExpandNotification")
          }, Sv = {
            fontSize: this.currMessage.fontSize || "16px",
            animation: "2s " + ("slideOut" === vv ? "textDisappear" : "textAppear")
          }
        }
        return ev ? (0, Nv.jsxs)("div", {
          className: "TopRightHelperBox",
          style: {
            ...zv
          },
          children: [(0, Nv.jsx)("div", {
            className: "LeftSide",
            style: Pv,
            children: (0, Nv.jsx)(Qv.b, {
              name: this.currMessage.icon,
              className: `fa-${this.currMessage.iconSizeMult||3}x HelperIcon`
            })
          }), (0, Nv.jsx)("div", {
            className: "RightSide",
            style: hv,
            children: (0, Nv.jsx)("div", {
              className: "HelperText",
              style: Sv,
              children: this.currMessage.text
            })
          })]
        }) : null
      }
    }
    var Lv = Pv(36045),
      Hv = Pv(1387);
    const Mv = (0, Hv.i)((vv => vv.PadSneakChip));

    function yv(vv) {
      const [zv, Pv, hv] = function(vv) {
        const zv = parseInt(vv.substring(1), 16),
          Pv = (zv >> 16) / 255,
          hv = (zv >> 8 & 255) / 255,
          Sv = (255 & zv) / 255,
          ev = Math.max(Pv, hv, Sv),
          gv = Math.min(Pv, hv, Sv),
          pv = (ev + gv) / 2,
          dv = ev - gv;
        if (0 === dv) return [0, 0, pv];
        const Nv = dv / (1 - Math.abs(2 * pv - 1));
        let lv;
        lv = ev === Pv ? (hv - Sv) / dv % 6 : ev === hv ? (Sv - Pv) / dv + 2 : (Pv - hv) / dv + 4;
        return [(60 * lv + 360) % 360, Nv, pv]
      }(vv), Sv = 0 === Pv ? 0 : Math.min(.6, Pv + .03), ev = hv > .5 ? -1 : 1, gv = Bv(hv + .09 * ev);
      return {
        panel: vv,
        slot: Jv(zv, Sv, gv),
        slotSelected: Jv(zv, Sv, Bv(gv + .2 * ev)),
        slotUnavailable: Jv(zv, Sv, Bv(hv + -.1 * ev))
      }
    }

    function Bv(vv) {
      return Math.min(1, Math.max(0, vv))
    }

    function Jv(vv, zv, Pv) {
      const hv = (1 - Math.abs(2 * Pv - 1)) * zv,
        Sv = hv * (1 - Math.abs(vv / 60 % 2 - 1)),
        ev = Pv - hv / 2;
      let gv;
      return gv = vv < 60 ? [hv, Sv, 0] : vv < 120 ? [Sv, hv, 0] : vv < 180 ? [0, hv, Sv] : vv < 240 ? [0, Sv, hv] : vv < 300 ? [Sv, 0, hv] : [hv, 0, Sv], "#" + gv.map((vv => function(vv) {
        return Math.round(255 * vv).toString(16).padStart(2, "0")
      }(vv + ev))).join("")
    }
    var Ev = Pv(36064),
      ov = Pv(4058),
      bv = Pv(2304),
      rv = Pv(2306),
      kv = Pv(36126),
      Xv = Pv(4561),
      uv = Pv(1453),
      vz = Pv(626);

    function zz(vv, zv, Pv, hv) {
      vv.style.display = "";
      const Sv = vv.offsetWidth,
        ev = vv.offsetHeight,
        gv = Math.min(Math.max((zv.left + zv.right) / 2 - Sv / 2, 8), window.innerWidth - 8 - Sv);
      let pv = zv.top - Pv - ev;
      const dv = [...hv].sort(((vv, zv) => zv.top - vv.top));
      for (const Nv of dv) gv < Nv.right && gv + Sv > Nv.left && pv < Nv.bottom && pv + ev > Nv.top && (pv = Nv.top - 8 - ev);
      return pv < 8 ? (vv.style.display = "none", null) : (vv.style.transform = `translate(${gv-zv.left}px, ${pv-zv.top}px)`, {
        left: gv,
        top: pv,
        right: gv + Sv,
        bottom: pv + ev
      })
    }

    function Pz(vv) {
      const zv = [];
      for (const Pv of document.querySelectorAll(vv)) {
        const vv = Pv.getBoundingClientRect();
        vv.width > 0 && "visible" === getComputedStyle(Pv).visibility && zv.push(vv)
      }
      return zv
    }

    function hz(vv, zv) {
      return vv.clientX >= zv.left - 8 && vv.clientX <= zv.right + 8 && vv.clientY >= zv.top - 8 && vv.clientY <= zv.bottom + 8
    }
    var Sz = Pv(8561);
    class ez {
      constructor(vv) {
        this.deps = vv, this.phase = "idle", this.armTimer = null, this.suspended = !1
      }
      get locked() {
        return "locked" === this.phase
      }
      get offered() {
        return "armed" === this.phase || "ready" === this.phase
      }
      target(vv) {
        vv && "armed" === this.phase ? this.setPhase("ready") : vv || "ready" !== this.phase || this.setPhase("armed")
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
      hold(vv, zv) {
        this.suspended || (this.offered ? zv || this.setPhase("idle") : vv && "idle" === this.phase ? (this.setPhase("charging"), this.armTimer = setTimeout((() => {
          this.armTimer = null, this.onArm(), this.setPhase("armed")
        }), 1e3)) : vv || "charging" !== this.phase || this.setPhase("idle"))
      }
      onArm() {}
      setPhase(vv) {
        null !== this.armTimer && (clearTimeout(this.armTimer), this.armTimer = null);
        const zv = this.phase;
        this.phase = vv, this.deps.onPhase(vv, zv)
      }
    }
    const gz = 25 * Math.PI / 180,
      pz = 45 * Math.PI / 180;
    class dz extends ez {
      constructor() {
        super(...arguments), this.speed = 0, this.armedSpeed = 0
      }
      get lockedSpeed() {
        return this.armedSpeed
      }
      move(vv, zv, Pv) {
        this.speed = Pv;
        const hv = Math.hypot(vv, zv),
          Sv = hv > 0 ? Math.acos(Math.min(1, -zv / hv)) : Math.PI;
        this.hold(hv >= .8 && Sv <= gz, hv >= .5 && Sv <= pz)
      }
      onArm() {
        this.armedSpeed = this.speed
      }
    }
    var Nz = Pv(1272);

    function lz(vv, zv) {
      const Pv = (0, hv.useRef)(null),
        Sv = (0, hv.useRef)(zv);
      return Sv.current = zv, (0, hv.useEffect)((() => {
        if (!vv) return;
        const {
          create: zv,
          elementRef: hv,
          ringRef: ev,
          classPrefix: gv,
          keptBehindMovementPanels: pv,
          resizeEnds: dv
        } = Sv.current, Nv = {
          charging: `${gv}Charging`,
          armed: `${gv}Armed`,
          ready: `${gv}Ready`,
          locked: `${gv}Locked`
        };
        let lv = null;
        const Tv = zv({
          onPhase: (vv, zv) => {
            const Pv = hv.current;
            if (null !== Pv) {
              for (const [zv, hv] of Object.entries(Nv)) Pv.classList.toggle(hv, zv === vv);
              if ("charging" === vv) lv = ev.current.animate([{
                strokeDashoffset: 1
              }, {
                strokeDashoffset: 0
              }], {
                delay: 400,
                duration: 600,
                fill: "forwards"
              });
              else if ("idle" === vv) {
                var gv;
                null === (gv = lv) || void 0 === gv || gv.cancel(), lv = null
              }
              var pv, dv;
              if ("armed" === vv && "charging" === zv && Sv.current.onArmed(), "ready" === vv && Sz.e.play("lockReady"), "locked" === vv) Sz.e.play("lockLocked"), null === (pv = (dv = Sv.current).onLocked) || void 0 === pv || pv.call(dv);
              "locked" === zv && Sv.current.onUnlocked()
            }
          }
        });
        Pv.current = Tv;
        const Wv = () => {
            Tv.suspend()
          },
          wv = () => {
            "hidden" === document.visibilityState && Wv()
          },
          av = () => {
            dv ? Tv.suspend() : Tv.suspendArming()
          },
          sv = (0, Nz.l)((vv => {
            let {
              keepsMovement: zv
            } = vv;
            zv && pv ? Tv.suspendArming() : Wv()
          }));
        return document.addEventListener("visibilitychange", wv), window.addEventListener("blur", Wv), window.addEventListener("resize", av), () => {
          sv(), document.removeEventListener("visibilitychange", wv), window.removeEventListener("blur", Wv), window.removeEventListener("resize", av), Tv.cancel(), Pv.current = null
        }
      }), [vv]), (0, Fv.d)("localPlayerAliveSet", (() => {
        var vv;
        null === (vv = Pv.current) || void 0 === vv || vv.suspend()
      })), Pv
    }
    var Tz = Pv(2347),
      Wz = Pv(2359),
      wz = Pv(1095),
      az = Pv(3148),
      sz = Pv(2366);

    function Cz(vv, zv, Pv) {
      const hv = function(vv, zv, Pv) {
        const hv = Pv.map((Pv => ({
            left: Math.max(0, Pv.left),
            top: Math.max(0, Pv.top),
            right: Math.min(vv, Pv.right),
            bottom: Math.min(zv, Pv.bottom)
          }))).filter((vv => vv.right > vv.left && vv.bottom > vv.top)),
          Sv = [...new Set([0, zv, ...hv.flatMap((vv => [vv.top, vv.bottom]))])].sort(((vv, zv) => vv - zv)),
          ev = [];
        for (let gv = 0; gv < Sv.length - 1; gv++) {
          const zv = Sv[gv],
            Pv = Sv[gv + 1],
            pv = hv.filter((vv => vv.top <= zv && vv.bottom >= Pv)).map((vv => [vv.left, vv.right])).sort(((vv, zv) => vv[0] - zv[0]));
          let dv = 0;
          for (const [vv, hv] of pv) vv > dv && ev.push({
            left: dv,
            top: zv,
            right: vv,
            bottom: Pv
          }), dv = Math.max(dv, hv);
          dv < vv && ev.push({
            left: dv,
            top: zv,
            right: vv,
            bottom: Pv
          })
        }
        return ev
      }(vv, zv, Pv);
      if (0 === hv.length) return 'path("M0 0Z")';
      if (1 === hv.length && 0 === hv[0].left && 0 === hv[0].top && hv[0].right === vv && hv[0].bottom === zv) return "";
      const Sv = vv => Math.round(10 * vv) / 10;
      return `path("${hv.map((vv=>`M${Sv(vv.left)} ${Sv(vv.top)}H${Sv(vv.right)}V${Sv(vv.bottom)}H${Sv(vv.left)}Z`)).join("")}")`
    }

    function iz(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
      const Sv = [],
        ev = 2 * Pv / hv;
      for (let gv = 0; gv < hv; gv++) {
        const hv = zv - Pv + gv * ev,
          pv = hv + ev,
          dv = Math.min(Math.max(zv, hv), pv) - zv,
          Nv = Math.sqrt(Math.max(0, Pv * Pv - dv * dv));
        Sv.push({
          left: vv - Nv,
          top: hv,
          right: vv + Nv,
          bottom: pv
        })
      }
      return Sv
    }
    var cz = Pv(8563),
      Gz = Pv(36104);

    function mz(vv) {
      const zv = vv.getBoundingClientRect(),
        Pv = {
          left: zv.left,
          top: zv.top,
          right: zv.right,
          bottom: zv.bottom
        },
        hv = (0, kv.e)(vv);
      if (hv.whole) return [Pv];
      const Sv = function(vv) {
          const zv = vv.right - vv.left,
            Pv = vv.bottom - vv.top,
            hv = Math.min(zv, Pv) / 2,
            Sv = (vv.left + vv.right) / 2,
            ev = (vv.top + vv.bottom) / 2;
          return zv >= Pv ? [{
            left: vv.left + hv,
            top: vv.top,
            right: vv.right - hv,
            bottom: vv.bottom
          }, ...iz(vv.left + hv, ev, hv), ...iz(vv.right - hv, ev, hv)] : [{
            left: vv.left,
            top: vv.top + hv,
            right: vv.right,
            bottom: vv.bottom - hv
          }, ...iz(Sv, vv.top + hv, hv), ...iz(Sv, vv.bottom - hv, hv)]
        }(Pv),
        ev = hv.keyBox;
      if (ev) {
        const vv = (Pv.left + Pv.right) / 2,
          zv = (Pv.top + Pv.bottom) / 2;
        Sv.push({
          left: vv - ev.width / 2,
          top: zv - ev.height / 2,
          right: vv + ev.width / 2,
          bottom: zv + ev.height / 2
        })
      }
      return Sv
    }

    function jz(vv) {
      const zv = vv.getBoundingClientRect();
      return 0 === zv.width && 0 === zv.height || "visible" !== getComputedStyle(vv).visibility ? [] : [(0, cz.m)(zv, 44)]
    }

    function fz(vv, zv) {
      (0, hv.useEffect)((() => {
        const Pv = vv.current;
        if (!zv || !Pv) return;
        const hv = () => {
          const vv = Array.from(document.querySelectorAll(".TouchComponentsButtons .TouchKeyHit, .TouchInteractHit")),
            zv = vv.find((vv => vv.classList.contains("TouchInteractHit")));
          zv !== Sv && (Sv && ev.unobserve(Sv), Sv = zv, zv && ev.observe(zv));
          const hv = Array.from(document.querySelectorAll(sz.d)),
            gv = [...vv.flatMap((vv => mz(vv))), ...hv.flatMap(jz)],
            pv = function(vv, zv) {
              const Pv = zv.map((zv => ({
                left: zv.left - vv.left,
                top: zv.top - vv.top,
                right: zv.right - vv.left,
                bottom: zv.bottom - vv.top
              })));
              return Cz(Math.ceil(vv.width), Math.ceil(vv.height), Pv)
            }(Pv.getBoundingClientRect(), gv);
          Pv.style.clipPath !== pv && (Pv.style.clipPath = pv)
        };
        let Sv;
        const ev = new ResizeObserver((() => {
          hv()
        }));
        hv(), ev.observe(Pv);
        const gv = Pv.closest(".InGameUi"),
          pv = new MutationObserver(hv);
        gv && pv.observe(gv, {
          attributes: !0,
          attributeFilter: ["class", Gz.c]
        });
        const dv = [(0, mv.l)(az.e, hv), (0, mv.l)(sz.x, hv), (0, mv.l)(sz.h, hv)];
        return () => {
          ev.disconnect(), pv.disconnect();
          for (const vv of dv) vv();
          Pv.style.clipPath = ""
        }
      }), [vv, zv])
    }
    var Fz = Pv(4165);

    function Yz(vv) {
      var zv;
      let {
        onMove: Pv,
        mode: Sv,
        speedCurve: ev,
        autorun: gv = !1
      } = vv;
      const pv = (0, hv.useRef)(null),
        dv = (0, hv.useRef)(null),
        lv = (0, hv.useRef)(null),
        Tv = (0, hv.useRef)(null),
        wv = (0, hv.useRef)(null),
        av = (0, hv.useRef)(null),
        sv = (0, hv.useRef)(null),
        Cv = (0, hv.useRef)(null),
        iv = (0, hv.useRef)(null),
        cv = (0, hv.useRef)(!1),
        Gv = (0, hv.useRef)({
          clientX: 0,
          clientY: 0
        }),
        {
          t: mv
        } = (0, Vv.x)(),
        jv = (0, Fz.j)(Sv),
        fv = (0, Yv.i)(["notchSize"]).notchSize,
        Fv = fv.left,
        nv = (0, hv.useRef)(16),
        Ov = (0, Wz.d)(),
        [Dv, Kv, Uv] = "pinned" === Sv ? Tz.q : null !== (zv = Ov.hudElements.joystick) && void 0 !== zv ? zv : Tz.q,
        Rv = "pinned" === Sv ? null : Ov.hudSafe,
        xv = Math.max(Fz.f, Fz.g * Uv);
      fz(dv, "pinned" !== Sv);
      const tv = function(vv, zv, Pv, Sv, ev) {
        const gv = (0, hv.useRef)(null),
          pv = () => {
            clearInterval(gv.current), gv.current = null
          },
          dv = lz(vv, {
            create: vv => new dz(vv),
            elementRef: zv,
            ringRef: Pv,
            classPrefix: "Autorun",
            keptBehindMovementPanels: !0,
            resizeEnds: !0,
            onArmed: ev,
            onLocked: () => {
              gv.current = setInterval((() => {
                Wv.gameBridge.lookup("dropAhead", null) && (Sz.e.play("autorunLedgeStop"), dv.current.cancel())
              }), 100)
            },
            onUnlocked: () => {
              pv(), Sv()
            }
          });
        return (0, hv.useEffect)((() => pv), []), dv
      }(gv, lv, sv, (() => {
        Mv(), Hv()
      }), (() => {
        qv(), null === iv.current && tv.current.suspend()
      }));

      function qv() {
        const vv = lv.current.getBoundingClientRect();
        iv.current = zz(Cv.current, vv, 80, Pz(`.TouchInventoryKey, ${sz.d}`)), cv.current = null !== iv.current && hz(Gv.current, iv.current)
      }

      function Iv() {
        const {
          innerWidth: vv,
          innerHeight: zv
        } = window, Pv = (0, sz.I)(Rv, vv, zv, (0, sz.N)(fv, vv, zv), nv.current);
        return {
          left: Pv[3],
          bottom: Pv[2]
        }
      }

      function Zv(vv) {
        lv.current.style.transform = `translate(${vv.x-xv}px, ${vv.y-xv}px)`
      }

      function Av(vv) {
        const zv = lv.current;
        zv.classList.add("Resting"), zv.classList.toggle("Returning", vv), zv.style.display = "fixed_hidden" === Sv ? "none" : "block", Zv(function() {
          const {
            innerWidth: vv,
            innerHeight: zv
          } = window, Pv = Iv(), hv = Fv * vv / 100 + Pv.left, Sv = pv.current.offsetHeight || zv, ev = ((0, wz.d)(vv, zv) ? Fz.c : Fz.b) + Pv.bottom;
          return {
            x: Math.min(vv - xv, Math.max(xv, hv + Fz.d + Dv * vv)),
            y: Math.min(Sv - xv, Math.max(xv, Sv - ev + Kv * Sv))
          }
        }())
      }
      const Lv = (0, hv.useRef)({
        restFixed: Av,
        release: yv
      });

      function Hv() {
        jv ? Av("fixed_shown" === Sv) : "floating" === Sv && (lv.current.style.display = "none"), Pv({
          x: 0,
          y: 0
        })
      }

      function Mv() {
        av.current = null, wv.current = null, Tv.current.style.transform = "translate(-50%, -50%)"
      }

      function yv(vv) {
        Mv();
        const zv = tv.current;
        vv && null !== zv && void 0 !== zv && zv.lift() ? Pv({
          x: 0,
          y: -zv.lockedSpeed
        }) : (null === zv || void 0 === zv || zv.cancel(), Hv())
      }

      function Bv(vv) {
        const zv = Array.from(vv.touches).find((vv => vv.identifier === av.current));
        if (null === wv.current || null === av.current || (0, vz.N)(zv)) return;
        const hv = tv.current,
          Sv = zv.clientX - wv.current.x,
          gv = zv.clientY - wv.current.y,
          pv = Math.hypot(Sv, gv),
          dv = pv > 0 ? Math.min(1, xv / pv) : 0,
          Nv = Sv * dv,
          lv = gv * dv,
          Wv = Math.hypot(Nv, lv) / xv,
          sv = ev && Wv > 0 ? ev(Wv) / Wv : 1;
        Tv.current.style.transform = `translate(calc(-50% + ${Nv}px), calc(-50% + ${lv}px))`;
        const Cv = Nv / xv,
          mv = lv / xv;
        if (Pv({
            x: Cv * sv,
            y: mv * sv
          }), null !== hv && null !== iv.current) {
          hv.move(Cv, mv, Wv * sv), Gv.current = {
            clientX: zv.clientX,
            clientY: zv.clientY
          };
          const vv = cv.current;
          cv.current = hz(zv, iv.current), cv.current !== vv && hv.target(cv.current)
        }
      }
      return Lv.current = {
        restFixed: Av,
        release: yv
      }, (0, hv.useLayoutEffect)((() => {
        if (!jv) return;
        const vv = () => {
          nv.current = (0, sz.S)(document)
        };
        vv(), null === av.current && Lv.current.restFixed(!1);
        const zv = new ResizeObserver((() => {
          vv(), null === av.current && Lv.current.restFixed(!1)
        }));
        zv.observe(pv.current);
        const Pv = lv.current;
        return () => {
          zv.disconnect(), Pv.classList.remove("Resting", "Returning"), null === av.current && (Pv.style.display = "", Pv.style.transform = "")
        }
      }), [jv, Sv, fv, Dv, Kv, xv, Rv]), (0, hv.useEffect)((() => {
        const vv = vv => {
            const zv = av.current;
            null === zv || Array.from(vv.touches).some((vv => vv.identifier === zv)) || Lv.current.release("touchend" === vv.type && Array.from(vv.changedTouches).some((vv => vv.identifier === zv)))
          },
          zv = () => {
            null !== av.current && Lv.current.release(!1)
          },
          Pv = () => {
            "hidden" === document.visibilityState && zv()
          };
        document.addEventListener("touchstart", vv, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchmove", vv, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchend", vv, {
          capture: !0,
          passive: !0
        }), document.addEventListener("touchcancel", vv, {
          capture: !0,
          passive: !0
        }), window.addEventListener("blur", zv), document.addEventListener("visibilitychange", Pv);
        const hv = (0, Nz.l)((vv => {
          let {
            keepsMovement: Pv
          } = vv;
          Pv || zv()
        }));
        return () => {
          hv(), document.removeEventListener("touchstart", vv, {
            capture: !0
          }), document.removeEventListener("touchmove", vv, {
            capture: !0
          }), document.removeEventListener("touchend", vv, {
            capture: !0
          }), document.removeEventListener("touchcancel", vv, {
            capture: !0
          }), window.removeEventListener("blur", zv), document.removeEventListener("visibilitychange", Pv)
        }
      }), []), (0, hv.useEffect)((() => {
        const vv = pv.current,
          zv = vv => {
            vv.preventDefault()
          };
        return vv.addEventListener("touchstart", zv, {
          passive: !1
        }), () => {
          vv.removeEventListener("touchstart", zv)
        }
      }), []), (0, Nv.jsxs)("div", {
        ref: pv,
        className: "JoystickZone",
        style: jv && (Dv > 0 || Uv > 1 || Iv().left > 0) ? {
          width: `max(35vw, calc(${Fv+100*Dv}vw + ${Iv().left+Fz.d+xv+24}px))`
        } : void 0,
        onTouchStart: function(vv) {
          var zv;
          if (null !== av.current) return;
          const Pv = Array.from(vv.changedTouches).find((vv => {
            var zv;
            return null === (zv = pv.current) || void 0 === zv ? void 0 : zv.contains(vv.target)
          }));
          if (Pv) {
            if (null === (zv = tv.current) || void 0 === zv || zv.startTouch(), av.current = Pv.identifier, "pinned" === Sv) {
              const vv = lv.current.getBoundingClientRect();
              wv.current = {
                x: vv.left + vv.width / 2,
                y: vv.top + vv.height / 2
              }
            } else {
              wv.current = {
                x: Pv.clientX,
                y: Pv.clientY
              }, lv.current.classList.remove("Resting", "Returning"), lv.current.style.display = "block";
              const vv = pv.current.getBoundingClientRect();
              Zv({
                x: Pv.clientX - vv.left,
                y: Pv.clientY - vv.top
              }), gv && (Gv.current = {
                clientX: Pv.clientX,
                clientY: Pv.clientY
              }, qv())
            }
            Bv(vv)
          }
        },
        onTouchMove: Bv,
        children: [(0, Nv.jsx)("div", {
          ref: dv,
          className: "JoystickTouchLayer"
        }), (0, Nv.jsxs)("div", {
          ref: lv,
          className: "Joystick",
          style: {
            width: 2 * xv + "px",
            height: 2 * xv + "px",
            transform: "pinned" === Sv ? "translate(4vw, calc(50vh - 50%))" : void 0
          },
          children: [(0, Nv.jsx)("div", {
            className: "JoystickBase",
            style: {
              width: 2 * xv + "px",
              height: 2 * xv + "px"
            }
          }), gv && (0, Nv.jsxs)(Nv.Fragment, {
            children: [(0, Nv.jsx)("svg", {
              className: "AutorunRing",
              viewBox: "0 0 100 100",
              children: (0, Nv.jsx)("circle", {
                ref: sv,
                cx: "50",
                cy: "50",
                r: "48",
                pathLength: 1
              })
            }), (0, Nv.jsxs)("div", {
              ref: Cv,
              className: "AutorunTarget",
              children: [(0, Nv.jsx)(Qv.b, {
                name: "lock"
              }), mv("settingsMenu:autoRun")]
            })]
          }), (0, Nv.jsx)("div", {
            ref: Tv,
            className: "JoystickKnob",
            style: {
              width: `${xv}px`,
              height: `${xv}px`
            }
          })]
        })]
      })
    }
    const nz = .35,
      Oz = .22;

    function Dz(vv) {
      if (vv < .1) return 0;
      if (vv < nz) {
        const zv = (vv - .1) / (nz - .1);
        return .06 + .16 * zv * zv
      }
      return vv < .85 ? Oz + .78 * (vv - nz) / .5 : 1
    }

    function Kz(vv, zv) {
      const Pv = (0, hv.useRef)(null);
      return (0, hv.useLayoutEffect)((() => (kv.g.set(vv, Pv.current, zv), () => {
        kv.g.set(vv, null)
      })), [vv, zv]), Pv
    }
    const Vz = "C",
      Uz = "J",
      Rz = "U",
      xz = "P",
      tz = "A",
      qz = "G",
      Iz = "X",
      Qz = (0, hv.forwardRef)((function(vv, zv) {
        let {
          slot: Pv,
          canvasZone: Sv = !1,
          lit: gv = !1,
          label: pv,
          className: dv,
          children: lv,
          ...Tv
        } = vv;
        return (0, hv.useEffect)((() => (mv.j.zC(az.e), () => {
          mv.j.zC(az.e)
        })), []), (0, Nv.jsx)("div", {
          ref: zv,
          className: ev()("TouchKeyHit", `TouchSlot${Pv}`, dv, {
            CanvasZone: Sv
          }),
          ...Tv,
          children: (0, Nv.jsxs)("div", {
            className: ev()("TouchKey", {
              Lit: gv,
              Labelled: void 0 !== pv
            }),
            children: [lv, void 0 !== pv && (0, Nv.jsx)("span", {
              className: "TouchKeyLabel",
              children: pv
            })]
          })
        })
      }));

    function Zz(vv, zv) {
      (0, hv.useEffect)((() => () => {
        zv.current && (zv.current = !1, (0, rv.A)(vv, !1, {
          isTrusted: !0,
          timeStamp: performance.now()
        }))
      }), [])
    }

    function Az(vv, zv) {
      const Pv = zv ? [Iz] : [xz, Iz];
      return vv.filter((vv => null !== vv)).slice(0, Pv.length).map(((vv, zv) => {
        const Sv = Pv[zv];
        return (0, Nv.jsx)(hv.Fragment, {
          children: vv.render(Sv)
        }, `${vv.id}:${Sv}`)
      }))
    }
    var Lz = Pv(36118);
    class Hz extends ez {
      constructor() {
        super(...arguments), this.start = {
          x: 0,
          y: 0
        }, this.moved = !1
      }
      press(vv, zv) {
        this.start = {
          x: vv,
          y: zv
        }, this.moved = !1, this.startTouch(), this.hold(!0, !1)
      }
      move(vv, zv, Pv) {
        const hv = Math.hypot(vv - this.start.x, zv - this.start.y) <= 12;
        this.moved ||= !hv;
        const Sv = null !== Pv && zv < this.start.y - 12 && hz({
          clientX: vv,
          clientY: zv
        }, Pv);
        this.hold(!this.moved, hv || Sv)
      }
    }
    const Mz = new Set;

    function yz(vv) {
      const zv = new Set(Array.from(vv.touches, (vv => vv.identifier)));
      for (const Pv of Mz) {
        for (const vv of Pv.ids) zv.has(vv) || Pv.ids.delete(vv);
        if (0 === Pv.ids.size) {
          Mz.delete(Pv);
          Pv.pressesOnPointerDown && "touchstart" === vv.type && Array.from(vv.changedTouches).some((vv => vv.target instanceof Node && Pv.element.contains(vv.target))) || Pv.release()
        }
      }
    }
    if ("undefined" !== typeof window)
      for (const sg of ["touchstart", "touchmove"]) window.addEventListener(sg, yz, {
        capture: !0,
        passive: !0
      });

    function Bz(vv) {
      let {
        pressesOnPointerDown: zv = !1
      } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Pv = (0, hv.useRef)(vv);
      Pv.current = vv;
      const Sv = (0, hv.useRef)({
        ids: new Set,
        element: null,
        pressesOnPointerDown: zv,
        release: () => {
          Pv.current()
        }
      });
      (0, hv.useEffect)((() => {
        const vv = Sv.current;
        return () => {
          Mz.delete(vv), vv.ids.clear()
        }
      }), []);
      const ev = vv => {
        const zv = Sv.current;
        for (const Pv of Array.from(vv.changedTouches)) zv.ids.delete(Pv.identifier);
        0 === zv.ids.size && Mz.delete(zv)
      };
      return {
        onTouchStart: vv => {
          const zv = Sv.current;
          zv.element = vv.currentTarget;
          for (const Pv of Array.from(vv.changedTouches)) Pv.target instanceof Node && vv.currentTarget.contains(Pv.target) && zv.ids.add(Pv.identifier);
          zv.ids.size > 0 && Mz.add(zv)
        },
        onTouchEnd: ev,
        onTouchCancel: ev
      }
    }

    function Jz(vv, zv) {
      return null === zv ? null : (0, Lz.b)(vv.nativeEvent.changedTouches, zv.id)
    }

    function Ez(vv) {
      let {
        lockable: zv
      } = vv;
      const {
        t: Pv
      } = (0, Vv.x)(), Sv = "round" === (0, Tz.bb)().hudShape, ev = (0, hv.useRef)(!1);
      Zz(bv.t.Jump, ev);
      const gv = (0, hv.useRef)(null),
        pv = (0, hv.useRef)(null),
        dv = (0, hv.useRef)(null),
        lv = (0, hv.useRef)(null),
        Tv = (0, hv.useRef)(null),
        Wv = (0, hv.useRef)(null),
        wv = (0, hv.useRef)(!1),
        av = (vv, zv) => {
          ev.current = vv, (0, rv.A)(bv.t.Jump, vv, zv)
        },
        sv = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            isTrusted: !0,
            timeStamp: performance.now()
          };
          ev.current && (gv.current && (0, uv.i)(gv.current, !1), av(!1, vv))
        },
        Cv = lz(zv, {
          create: vv => new Hz(vv),
          elementRef: gv,
          ringRef: pv,
          classPrefix: "JumpLock",
          keptBehindMovementPanels: !1,
          resizeEnds: !1,
          onArmed: () => {
            const vv = gv.current.getBoundingClientRect(),
              zv = dv.current.parentElement,
              Pv = zv.getBoundingClientRect(),
              hv = {
                left: Pv.left + zv.clientLeft,
                top: Pv.top + zv.clientTop,
                right: Pv.right - zv.clientLeft,
                bottom: Pv.bottom - zv.clientTop
              };
            if (Tv.current = zz(dv.current, hv, 16, Pz(`.TouchKeyHit:not(.JumpKey) > .TouchKey, .TouchInventoryKey, ${sz.d}`)), null === Tv.current) return void Cv.current.suspend();
            const Sv = Tv.current;
            Wv.current = {
              left: Math.min(vv.left, Sv.left),
              top: Sv.top,
              right: Math.max(vv.right, Sv.right),
              bottom: vv.bottom
            }, wv.current = null !== lv.current && hz({
              clientX: lv.current.x,
              clientY: lv.current.y
            }, Sv)
          },
          onUnlocked: () => {
            null === lv.current && sv()
          }
        }),
        iv = vv => {
          var zv;
          lv.current = null, null === (zv = Cv.current) || void 0 === zv || zv.cancel(), sv(vv)
        },
        cv = Bz((() => {
          iv()
        })),
        Gv = vv => {
          const zv = lv.current;
          var Pv;
          return null === zv ? null !== (Pv = Cv.current) && void 0 !== Pv && Pv.locked ? null : "lifted" : Jz(vv, zv) ? "lifted" : (0, Lz.f)(vv.nativeEvent.touches, zv.id) ? null : "dropped"
        };
      return (0, Nv.jsxs)(Qz, {
        ref: gv,
        slot: Uz,
        className: "JumpKey",
        onTouchStart: vv => {
          cv.onTouchStart(vv), (0, uv.i)(vv.currentTarget, !0), null === lv.current || (0, Lz.f)(vv.nativeEvent.touches, lv.current.id) || iv();
          const zv = vv.changedTouches[0];
          var Pv;
          null === lv.current && zv && (lv.current = {
            id: zv.identifier,
            x: zv.clientX,
            y: zv.clientY
          }, null === (Pv = Cv.current) || void 0 === Pv || Pv.press(zv.clientX, zv.clientY));
          ev.current || av(!0, vv.nativeEvent)
        },
        onTouchMove: vv => {
          const zv = lv.current,
            Pv = Jz(vv, zv);
          if (!Pv) return;
          const hv = Cv.current;
          if (null === hv || void 0 === hv || hv.move(Pv.clientX, Pv.clientY, Wv.current), null !== hv && void 0 !== hv && hv.offered) {
            const vv = hz(Pv, Tv.current);
            vv !== wv.current && (wv.current = vv, hv.target(vv))
          }
          zv.x = Pv.clientX, zv.y = Pv.clientY
        },
        onTouchEnd: vv => {
          var zv;
          cv.onTouchEnd(vv);
          const Pv = Gv(vv);
          null !== Pv && ("dropped" !== Pv ? (lv.current = null, null !== (zv = Cv.current) && void 0 !== zv && zv.lift() ? (0, uv.i)(vv.currentTarget, !1) : sv(vv.nativeEvent)) : iv(vv.nativeEvent))
        },
        onTouchCancel: vv => {
          cv.onTouchCancel(vv), null !== Gv(vv) && iv(vv.nativeEvent)
        },
        children: [(0, Nv.jsx)(Qv.b, {
          name: "arrow-up-from-line"
        }), zv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("span", {
            className: "JumpLockBadge",
            children: (0, Nv.jsx)(Qv.b, {
              name: "lock"
            })
          }), (0, Nv.jsx)("svg", {
            className: "JumpLockRing",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            children: (0, Nv.jsx)("rect", {
              ref: pv,
              x: "2",
              y: "2",
              width: "96",
              height: "96",
              rx: Sv ? 48 : 0,
              pathLength: 1
            })
          }), (0, Nv.jsxs)("div", {
            ref: dv,
            className: "JumpLockTarget",
            children: [(0, Nv.jsx)(Qv.b, {
              name: "lock"
            }), Pv("settingsMenu:jumpLock")]
          })]
        })]
      })
    }
    const oz = new WeakMap;
    class bz {
      constructor(vv) {
        this.zones = vv, this.followed = new Map, this.onStart = vv => {
          if (this.releaseMissing(vv.touches), vv.target instanceof HTMLCanvasElement)
            for (let Pv = 0; Pv < vv.changedTouches.length; Pv++) {
              var zv;
              const {
                identifier: hv,
                clientX: Sv,
                clientY: ev
              } = vv.changedTouches[Pv];
              this.release(hv);
              const gv = this.zones.hitZone(Sv, ev);
              if (!gv) continue;
              const {
                key: pv
              } = gv;
              null === (zv = oz.get(pv)) || void 0 === zv || zv.cancel();
              const dv = {
                hit: gv.element,
                key: pv,
                x: gv.x,
                y: gv.y,
                reach: .6 * gv.radius
              };
              this.followed.set(hv, dv), (0, uv.i)(gv.element, !0), rz(dv, Sv, ev)
            }
        }, this.onMove = vv => {
          this.releaseMissing(vv.touches);
          for (let zv = 0; zv < vv.changedTouches.length; zv++) {
            const {
              identifier: Pv,
              clientX: hv,
              clientY: Sv
            } = vv.changedTouches[zv], ev = this.followed.get(Pv);
            ev && rz(ev, hv, Sv)
          }
        }, this.onEnd = vv => {
          for (let zv = 0; zv < vv.changedTouches.length; zv++) this.release(vv.changedTouches[zv].identifier)
        }, this.onVisibilityChange = () => {
          document.hidden && this.releaseAll()
        }
      }
      start() {
        const vv = {
          passive: !0
        };
        return document.addEventListener("touchstart", this.onStart, vv), document.addEventListener("touchmove", this.onMove, vv), document.addEventListener("touchend", this.onEnd, vv), document.addEventListener("touchcancel", this.onEnd, vv), document.addEventListener("visibilitychange", this.onVisibilityChange), () => {
          document.removeEventListener("touchstart", this.onStart), document.removeEventListener("touchmove", this.onMove), document.removeEventListener("touchend", this.onEnd), document.removeEventListener("touchcancel", this.onEnd), document.removeEventListener("visibilitychange", this.onVisibilityChange), this.releaseAll()
        }
      }
      releaseMissing(vv) {
        for (const zv of [...this.followed.keys()])(0, Lz.f)(vv, zv) || this.release(zv)
      }
      releaseAll() {
        for (const vv of [...this.followed.keys()]) this.release(vv)
      }
      release(vv) {
        const zv = this.followed.get(vv);
        if (!zv) return;
        this.followed.delete(vv);
        for (const Sv of this.followed.values())
          if (Sv.key === zv.key) return;
        (0, uv.i)(zv.hit, !1);
        const {
          key: Pv
        } = zv, hv = Pv.style.translate;
        Pv.style.translate = "", hv && oz.set(Pv, Pv.animate({
          translate: [hv, "0 0"]
        }, {
          duration: 150,
          easing: "ease-out"
        }))
      }
    }

    function rz(vv, zv, Pv) {
      let {
        key: hv,
        x: Sv,
        y: ev,
        reach: gv
      } = vv;
      const pv = zv - Sv,
        dv = Pv - ev,
        Nv = Math.min(1, gv / (Math.hypot(pv, dv) || 1));
      hv.style.translate = `${pv*Nv}px ${dv*Nv}px`
    }
    const kz = () => {
      const vv = (0, ov.l)(),
        zv = (0, Ov.m)();
      return vv || zv
    };

    function Xz(vv) {
      (0, kv.k)(vv.x, vv.y)
    }
    const uz = (0, hv.memo)((function() {
        const vv = kz(),
          {
            joystickMode: zv,
            touchSpeedCurve: Pv,
            autorun: Sv
          } = (0, Yv.i)(["clientEscMenuOptions"]).clientEscMenuOptions;
        return (0, hv.useEffect)((() => ((0, Xv.g)(bv.u.TouchControls, bv.u.TouchControls), () => {
          (0, Xv.g)(bv.u.TouchControls, 0), (0, kv.k)(0, 0)
        })), []), (0, Nv.jsx)("div", {
          className: ev()("TouchMovementWrapper", {
            Hidden: vv
          }),
          "data-camera-keeper": "",
          children: (0, Nv.jsx)(Yz, {
            onMove: Xz,
            mode: zv,
            speedCurve: Pv ? Dz : void 0,
            autorun: Sv
          })
        })
      })),
      vP = (0, hv.memo)((function() {
        const vv = kz(),
          {
            clientEscMenuOptions: zv
          } = (0, Yv.i)(["clientEscMenuOptions"]),
          Pv = zv.touchActionButtons;
        return (0, hv.useEffect)((() => new bz(kv.g).start()), []), (0, hv.useEffect)((() => {
          mv.j.zC(az.e)
        }), [vv]), (0, Nv.jsxs)("div", {
          className: ev()("TouchComponentsButtons", {
            Hidden: vv
          }),
          "data-camera-keeper": "",
          children: [(0, Nv.jsx)(Ez, {
            lockable: zv.jumpLock && !vv
          }), (0, Nv.jsx)(WP, {
            hidden: vv,
            actionButtons: Pv
          }), (0, Nv.jsx)(PP, {})]
        })
      }));

    function zP(vv) {
      const zv = zv => Pv => {
        (0, uv.i)(Pv.currentTarget, zv), vv(zv, Pv.nativeEvent)
      };
      return {
        onPointerDown: zv(!0),
        onPointerUp: zv(!1),
        onPointerCancel: zv(!1)
      }
    }

    function PP() {
      const vv = (0, Gv.i)("canCrouch"),
        zv = (0, Fv.h)("crouching"),
        Pv = (0, hv.useRef)(!1);
      Zz(bv.t.Crouch, Pv);
      const Sv = (vv, zv) => {
          Pv.current = vv, (0, rv.A)(bv.t.Crouch, vv, zv)
        },
        ev = (0, hv.useRef)(null),
        gv = () => {
          Pv.current && (ev.current && (0, uv.i)(ev.current, !1), Sv(!1, {
            isTrusted: !0,
            timeStamp: performance.now()
          }))
        },
        pv = Bz(gv);
      return (0, hv.useEffect)((() => {
        !1 === vv && gv()
      }), [vv]), !1 === vv ? null : (0, Nv.jsx)(Qz, {
        ref: ev,
        slot: Vz,
        className: "CrouchKey",
        lit: zv,
        ...pv,
        ...zP(Sv),
        children: (0, Nv.jsx)(Qv.b, {
          name: "arrow-down-to-line"
        })
      })
    }
    const hP = [{
        icon: "arrows-rotate"
      }],
      SP = [{
        icon: "Arrow"
      }],
      eP = [{
        icon: "crosshairs"
      }],
      gP = [{
        icon: "swords"
      }],
      pP = [{
        icon: "hand-back-point-up"
      }],
      dP = [{
        icon: "Firecracker"
      }];

    function NP(vv, zv, Pv, hv) {
      return {
        id: JSON.stringify(zv),
        render: Sv => (0, Nv.jsx)(wP, {
          code: vv,
          slot: Sv,
          icon: zv,
          label: hv,
          hidden: Pv
        })
      }
    }

    function lP(vv, zv) {
      return {
        id: "fly",
        render: Pv => (0, Nv.jsx)(TP, {
          slot: Pv,
          flying: vv,
          label: zv
        })
      }
    }

    function TP(vv) {
      let {
        slot: zv,
        flying: Pv,
        label: hv
      } = vv;
      return (0, Nv.jsx)(Qz, {
        slot: zv,
        className: "FlyKey",
        lit: Pv,
        label: hv,
        ...zP(((vv, zv) => {
          (0, rv.A)(bv.t.Fly, vv, zv)
        })),
        children: (0, Nv.jsx)(Qv.b, {
          name: "feather-pointed"
        })
      })
    }

    function WP(vv) {
      var zv, Pv;
      let {
        hidden: hv,
        actionButtons: Sv
      } = vv;
      const {
        t: ev
      } = (0, Vv.x)(), {
        gun: gv,
        aimable: pv,
        chargeName: dv
      } = (0, Fv.h)("heldItemAim"), lv = (0, Fv.h)("gliderBoostFuel"), {
        canFly: Tv,
        flying: Wv
      } = (0, Fv.h)("flight"), wv = (0, Gv.i)("touchscreenActionButton"), av = gv ? hP : wv, sv = pv ? {
        icon: SP,
        label: ev("touchKeys:aim")
      } : null, Cv = null !== dv ? {
        icon: [{
          icon: dv
        }]
      } : null, iv = null !== sv && void 0 !== sv ? sv : Cv, cv = null !== (zv = null === (Pv = gv ? sv : null !== Cv && void 0 !== Cv ? Cv : sv) || void 0 === Pv ? void 0 : Pv.icon) && void 0 !== zv ? zv : pP, mv = [!Sv && iv ? NP(kv.b.Action2, iv.icon, hv, iv.label) : null, gv ? NP(kv.b.Action3, eP, hv, ev("touchKeys:scope")) : null, Tv ? lP(Wv, ev("touchKeys:fly")) : null];
      return (0, Nv.jsxs)(Nv.Fragment, {
        children: [av && (0, Nv.jsx)(wP, {
          code: kv.b.Action1,
          slot: qz,
          icon: av,
          label: gv ? ev("touchKeys:reload") : void 0,
          hidden: hv
        }, JSON.stringify(av)), Sv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)(wP, {
            code: kv.b.Attack,
            slot: tz,
            icon: gP,
            name: ev("touchKeys:attack"),
            hidden: hv
          }), (0, Nv.jsx)(wP, {
            code: kv.b.Use,
            slot: Rz,
            icon: cv,
            name: ev("touchKeys:use"),
            hidden: hv
          })]
        }), Az(mv, Sv), lv > 0 && (0, Nv.jsx)(wP, {
          code: kv.b.Boost,
          slot: Iz,
          icon: dP,
          label: ev("touchKeys:boost", {
            fuel: lv > 99 ? "99+" : lv
          }),
          hidden: hv
        })]
      })
    }

    function wP(vv) {
      let {
        code: zv,
        slot: Pv,
        icon: hv,
        label: Sv,
        name: ev,
        hidden: gv
      } = vv;
      const pv = Kz(zv, gv);
      return (0, Nv.jsx)(Qz, {
        ref: pv,
        slot: Pv,
        className: "TouchActionKey",
        canvasZone: !0,
        label: Sv,
        role: void 0 !== ev ? "img" : void 0,
        "aria-label": ev,
        children: (0, Nv.jsx)(dv.c, {
          text: hv
        })
      })
    }
    var aP = Pv(4036),
      sP = Pv(2775),
      CP = Pv(646);
    const iP = (0, hv.memo)((function() {
      (0, iv.d)();
      const vv = (0, hv.useRef)([]),
        zv = (0, sP.d)(),
        Pv = (0, hv.useRef)(0),
        Sv = (0, hv.useRef)(0),
        ev = (0, hv.useRef)([]),
        gv = (0, hv.useRef)(null);

      function lv(Pv, hv, Sv, ev) {
        const gv = (0, CP.d)(),
          pv = setTimeout((() => {
            vv.current = vv.current.filter((vv => vv.id !== gv)), zv()
          }), ev);
        Wv.gameBridge.send("recordFlyingMiddleText", {
          content: Pv,
          aP: hv,
          angle: Sv,
          sP: ev
        }), vv.current.push({
          id: gv,
          content: Pv,
          aP: hv,
          sP: ev,
          removeTimeout: pv,
          angle: Sv
        }), zv()
      }
      return (0, Fv.d)("shotDamageToShow", (vv => {
        let {
          damage: zv,
          wasCrit: Pv,
          distance: hv
        } = vv;
        const Sv = -Math.PI / 4 + Math.random() * Math.PI / 2;
        lv(Pv ? [{
          str: zv.toString(),
          style: {
            color: "#ff8a80",
            fontSize: "1.6em"
          }
        }] : [zv.toString()], hv, Sv, 1e3)
      })), (0, pv.g)("flyingMiddleMessage", (vv => {
        let {
          content: zv,
          aP: hv,
          sP: pv
        } = vv;
        ev.current.push({
          content: zv,
          aP: hv,
          sP: pv
        });
        const dv = () => {
          const {
            content: vv,
            aP: zv,
            sP: hv
          } = ev.current.shift(), gv = function(vv) {
            const zv = -Math.PI / 4,
              Pv = Math.PI / 4,
              hv = Pv - zv,
              Sv = (1 + Math.sqrt(5)) / 2,
              ev = 2 * Math.PI / (Sv * Sv);
            let gv = vv + ev;
            for (; gv > Pv;) gv -= hv;
            for (; gv < zv;) gv += hv;
            const pv = Math.PI / 6;
            if (Math.abs(gv - vv) < pv) {
              gv = vv + (Math.sign(gv - vv) || 1) * pv, gv > Pv && (gv = vv - pv), gv < zv && (gv = vv + pv)
            }
            return gv
          }(Sv.current);
          Sv.current = gv, Pv.current = Date.now(), lv(vv, zv, gv, hv)
        };
        if (!gv.current) {
          const vv = () => {
            ev.current.length > 0 && dv(), 0 === ev.current.length && (clearInterval(gv.current), gv.current = null)
          };
          gv.current = setInterval(vv, 200), Pv.current + 200 < Date.now() && vv()
        }
        for (; ev.current.length > 4;) dv()
      })), (0, pv.g)("forceFlyingMiddleMessage", (vv => {
        let {
          content: zv,
          aP: Pv,
          angle: hv,
          sP: Sv
        } = vv;
        lv(zv, Pv, hv, Sv)
      })), (0, hv.useEffect)((() => () => {
        clearInterval(gv.current), gv.current = null;
        for (const zv of vv.current) clearTimeout(zv.removeTimeout)
      }), []), (0, Nv.jsx)("div", {
        className: "FlyingMiddleTextWrapper",
        children: vv.current.map((vv => {
          const {
            id: zv,
            content: Pv,
            aP: hv,
            sP: Sv,
            angle: ev
          } = vv;
          return vv.pos || (vv.pos = function(vv, zv) {
            const Pv = 50 / (vv ** .7 * .35);
            return {
              x: Pv * Math.sin(zv),
              y: -Pv * Math.cos(zv)
            }
          }(hv, ev)), (0, Nv.jsx)(cP, {
            className: "FlyingMiddleText",
            classNames: "FlyingMiddleText",
            timeout: Sv,
            enterActiveStyle: {
              transform: `translate(${vv.pos.x}vw, ${vv.pos.y}vh)`,
              transition: `transform ${Sv}ms ease-out`
            },
            children: (0, Nv.jsx)("div", {
              children: (0, Nv.jsx)(dv.c, {
                text: Pv
              })
            })
          }, zv)
        }))
      })
    }));

    function cP(vv) {
      let {
        children: zv,
        className: Pv,
        classNames: Sv,
        timeout: ev,
        enterActiveStyle: gv
      } = vv;
      const [pv, dv] = (0, hv.useState)(!1), [lv, Tv] = (0, hv.useState)(!1), Wv = (0, hv.useRef)(null);
      return (0, hv.useEffect)((() => {
        dv(!0)
      }), []), (0, Nv.jsx)(aP.c, {
        className: Pv,
        classNames: Sv || Pv,
        in: pv,
        timeout: ev,
        nodeRef: Wv,
        onEntering: () => {
          Tv(!0)
        },
        children: (0, hv.cloneElement)(zv, {
          ref: Wv,
          style: lv && gv || void 0
        })
      })
    }
    var GP = Pv(36132);

    function mP() {
      const vv = (0, Fv.h)("health");
      return (0, Nv.jsxs)("div", {
        className: "BottomScreenStatBarList",
        children: [(0, Nv.jsx)(GP.e, {
          placement: "statBars"
        }), (0, Nv.jsx)(jP, {
          actualValue: vv.shield,
          maxValue: vv.maxShield,
          hideAtValue: 0,
          icon: "shield",
          className: "ShieldBar"
        }), (0, Nv.jsx)(jP, {
          actualValue: vv.health,
          maxValue: vv.maxHealth,
          icon: "heart",
          className: "HealthBar"
        })]
      })
    }

    function jP(vv) {
      let {
        actualValue: zv,
        maxValue: Pv,
        hideAtValue: hv,
        icon: Sv,
        className: ev
      } = vv;
      return (0, iv.f)(), null === zv || null === Pv || zv === hv || Pv === hv ? null : (0, Nv.jsx)("div", {
        className: "BottomScreenStatBarWrapper",
        children: (0, Nv.jsxs)("div", {
          className: "BottomScreenStatBarBackground",
          children: [(0, Nv.jsx)("div", {
            className: `BottomScreenStatBar ${ev}`,
            style: {
              transform: `scaleX(${Math.max(zv/Pv,0)})`,
              transformOrigin: "left center"
            }
          }), (0, Nv.jsxs)("div", {
            className: "BottomScreenStatBarText SmallTextBold",
            children: [(0, Nv.jsx)(Qv.b, {
              name: Sv
            }), ` ${Math.ceil(zv)}/${Pv}`]
          })]
        })
      })
    }
    var fP = Pv(8997),
      FP = Pv(4285),
      YP = Pv(1311),
      nP = Pv(2577),
      OP = Pv(1442),
      DP = Pv(1295),
      KP = Pv(3164),
      VP = Pv(3218),
      UP = Pv(3187),
      RP = Pv(763),
      xP = Pv(3236),
      tP = Pv(108),
      qP = Pv(8898),
      IP = Pv(312);

    function QP(vv, zv) {
      let {
        shownName: Pv,
        lifeformType: hv
      } = vv;
      return null !== Pv ? Pv : null !== hv ? zv(`lifeform:${(0,IP.ee)(hv)}`) : null
    }
    var ZP = Pv(3177),
      AP = Pv(3180);
    const LP = {
        FallDamage: "respawnPage:diedFallDamage",
        VoidJump: "respawnPage:diedVoid",
        Lava: "respawnPage:diedLava",
        "Toxic Waste": "respawnPage:diedToxicWaste",
        "Poison Potion": "respawnPage:diedPoisoned",
        "Rotten Brain": "respawnPage:diedPoisoned"
      },
      HP = (0, hv.memo)((function() {
        var vv, zv;
        const Pv = (0, iv.d)(),
          Sv = (0, wv.useNavigatePreserveSearch)(),
          {
            t: gv
          } = (0, Vv.x)(),
          {
            loadingOverlayVisible: dv
          } = (0, Yv.i)(["loadingOverlayVisible"]),
          lv = (0, Ov.m)(),
          [Tv, av] = (0, hv.useState)(!1),
          [sv, Cv] = (0, hv.useState)(!0),
          [cv, mv] = (0, hv.useState)(null),
          fv = (0, sP.d)(),
          nv = (0, Gv.i)("respawnButtonText"),
          Dv = (0, Gv.i)("usePlayAgainButton"),
          Kv = (0, Gv.i)("useRespawnButton"),
          {
            gameNameWithVariation: Uv
          } = (0, Fv.h)("connectedGame"),
          Rv = (0, hv.useRef)(jv.c.get("secsToRespawn")),
          xv = (0, hv.useRef)(Wv.gameBridge.latest("localPlayerAlive")),
          tv = (0, hv.useRef)(jv.c.get("secsToRespawn")),
          qv = (0, hv.useRef)(jv.c.get("autoRespawn")),
          Iv = (0, hv.useRef)(null),
          Zv = (0, hv.useRef)(0),
          Av = (0, hv.useRef)(0),
          [Lv, Mv] = (0, hv.useState)(!1),
          yv = (0, hv.useRef)(null),
          Bv = (0, hv.useRef)(null),
          Jv = (0, hv.useRef)(null);
        (0, Gv.e)("secsToRespawn", (vv => {
          console.log("Received new secsToRespawn with", vv, "and current canRespawn value of ", qv.current), tv.current = vv, rv()
        })), (0, Gv.e)("autoRespawn", (vv => {
          console.log("Received autorespawn", vv, "current canRespawn value of ", Rv.current), qv.current = vv, rv()
        }));
        const Ev = vv => {
          console.log("Updating respawn component from localPlayerAliveSet. isAlive:", vv), vv || Zv.current++, xv.current = vv, rv()
        };
        (0, Fv.d)("localPlayerAliveSet", Ev), (0, pv.g)(VP.p, (vv => {
          "connected" === vv && !xv.current && qv.current && Rv.current <= 0 && (Av.current = 0, kv())
        })), (0, hv.useEffect)((() => {
          const vv = Wv.gameBridge.latest("localPlayerAlive");
          vv === xv.current ? (console.log("Updating respawn component from initial mount"), rv()) : Ev(vv)
        }), []), (0, hv.useEffect)((() => {
          if (Tv) {
            Mv(!1);
            const vv = setTimeout((() => {
              Mv(!0)
            }), 600);
            return (0, qP.f)(), () => {
              clearTimeout(vv)
            }
          }
          return () => {}
        }), [Tv]);
        (0, Fv.d)("kill", (vv => {
          let {
            killer: zv,
            victim: Pv,
            withItem: hv
          } = vv;
          if (!Pv.local) return;
          const Sv = ((vv, zv) => {
            if (vv.local) {
              const vv = LP[zv];
              return vv ? gv(vv) : null
            }
            const Pv = QP(vv, gv);
            return Pv ? gv("respawnPage:killedBy", {
              name: Pv
            }) : null
          })(zv, hv);
          Sv && mv({
            text: Sv,
            deathCount: xv.current ? Zv.current + 1 : Zv.current
          })
        }));
        const ov = () => {
            Tv && qv.current && xv.current && Lv && av(!1)
          },
          bv = Tv && qv.current && xv.current && Lv && !dv;
        (0, pv.g)("usedKeyboard", (() => {
          ov()
        })), (0, AP.b)("respawn", bv, ov);
        const rv = () => {
            Cv(tv.current >= 3 || !qv.current), xv.current ? (clearInterval(Iv.current), Iv.current = null, qv.current ? fv() : av(!1)) : (av(!0), Rv.current = tv.current, fv(), console.log("Running respawn stats updated", qv.current, Rv.current), qv.current && Rv.current <= 0 && kv(), clearInterval(Iv.current), Rv.current > 0 && (Iv.current = setInterval((() => {
              Rv.current = Math.max(Rv.current - 1, 0), fv(), Rv.current <= 0 && (clearInterval(Iv.current), Iv.current = null, jv.c.get("autoRespawn") && kv())
            }), 1e3)))
          },
          kv = () => {
            if (Date.now() - Av.current > 1e3) {
              const vv = () => {
                Wv.gameBridge.send("respawn", null), Av.current = Date.now()
              };
              jv.c.get("autoRespawn") ? vv() : (0, DP.eb)((() => {
                vv()
              }), "video_respawn")
            }
          },
          Xv = (0, hv.useMemo)((() => {
            var vv;
            return null === (vv = (0, RP.n)(Uv)) || void 0 === vv ? void 0 : vv.otherGameLinksOnRespawnPage
          }), [Uv]),
          uv = 0 === Rv.current,
          vz = (null === cv || void 0 === cv ? void 0 : cv.deathCount) === Zv.current ? cv.text : null,
          zz = Tv && sv && !dv,
          Pz = lv && bv && null !== (vv = null === (zv = (0, Hv.f)()) || void 0 === zv ? void 0 : zv.getBoundButton("menuConfirm")) && void 0 !== vv ? vv : null,
          hz = vv => uv ? vv : gv("respawnPage:actionInSeconds", {
            action: vv,
            seconds: Rv.current
          });
        return (0, Nv.jsx)(fP.d, {
          showing: Tv,
          globallyUniqueKey: "RespawnComponent",
          alwaysMountChildren: !0,
          children: (0, Nv.jsx)(KP.b, {
            show: Tv,
            "data-holds-camera-keeper": "",
            children: (0, Nv.jsxs)(FP.c, {
              close: () => {
                av(!1)
              },
              togglePointerLock: !1,
              closeOnPressBackground: !1,
              className: "RespawnBackgroundScreen",
              padLayerKind: qv.current || dv ? null : "death",
              padBackCloses: !1,
              cameraKeeper: !0,
              children: [(0, tP.i)() && (0, Nv.jsx)(OP.b, {
                onClick: UP.e,
                children: gv("homePage:backToGames")
              }), (0, Nv.jsxs)("div", {
                className: "RespawnContainer",
                onClick: ov,
                children: [(0, Nv.jsxs)("div", {
                  className: "RespawnTop",
                  children: [(0, Nv.jsx)("div", {
                    ref: Bv,
                    className: "RespawnSideSquareBannerDiv",
                    children: Pv[0] > 925 && (0, Nv.jsx)(nP.d, {
                      info: {
                        adType: "square",
                        adId: 1,
                        adAlias: "banner_respawn_1"
                      },
                      sizeInfo: {
                        parentRef: Bv
                      },
                      showing: zz,
                      horizontalAlign: "start",
                      extraContrastBackgroundBox: "left",
                      noFillShowBloxdAdProbability: 0
                    })
                  }), (0, Nv.jsx)("div", {
                    className: "RespawnMainContent",
                    children: (0, Nv.jsxs)("div", {
                      className: ev()("RespawnMainContentInner", {
                        RespawnMainContentInnerPad: lv
                      }),
                      children: [qv.current && (0, Nv.jsxs)("div", {
                        className: "AutoRespawnDeathInfo",
                        children: [(0, Nv.jsxs)("div", {
                          className: "AutoRespawnDeathTitle FullyFancyText",
                          children: [(0, Nv.jsx)(Qv.b, {
                            name: "skull",
                            className: "AutoRespawnDeathIcon"
                          }), gv("respawnPage:youDied")]
                        }), (0, Nv.jsxs)("div", {
                          className: "AutoRespawnDeathCause FullyFancyText",
                          children: [null === Pz && (xv.current ? gv("respawnPage:pressAnywhereToContinue") : uv ? gv("respawnPage:respawning") : hz(gv("general:respawn"))), null !== Pz && (0, Nv.jsx)(ZP.d, {
                            text: gv("controller:screensPressToContinue", {
                              button: ZP.g
                            }),
                            glyph: Pz,
                            className: "AutoRespawnContinueGlyph"
                          })]
                        }), vz && (0, Nv.jsx)("div", {
                          className: "AutoRespawnStatus",
                          children: vz
                        })]
                      }), !qv.current && (0, Nv.jsxs)(Nv.Fragment, {
                        children: [(0, Nv.jsxs)("div", {
                          className: ev()("RespawnPageButtons", {
                            RespawnPageButtonsVertical: !Xv
                          }),
                          children: [Dv && (0, Nv.jsx)(OP.j, {
                            className: "RespawnPageButton",
                            padDefaultFocus: !0,
                            onClick: () => {
                              (0, DP.eb)((() => {
                                (0, Yv.g)("inGameReplay");
                                const vv = (0, YP.e)(Uv);
                                Sv(vv)
                              }), "video_start")
                            },
                            disabled: !uv || !Lv,
                            touchPressOn: "pointerup",
                            children: hz(gv("respawnPage:playAgain"))
                          }), Kv && (0, Nv.jsx)(OP.d, {
                            className: "RespawnPageButton",
                            onClick: kv,
                            padDefaultFocus: !Dv,
                            padBack: "sessionBasedGame:stayInLobby" === nv,
                            disabled: !uv || !Lv,
                            touchPressOn: "pointerup",
                            children: hz(gv(nv))
                          }), !(0, tP.i)() && (0, Nv.jsx)(OP.A, {
                            className: "RespawnPageButton",
                            onClick: UP.e,
                            disabled: !uv || !Lv,
                            touchPressOn: "pointerup",
                            children: hz(gv("respawnPage:exitGame"))
                          })]
                        }), Xv && (0, Nv.jsxs)("div", {
                          className: "RespawnPageOtherGames",
                          children: [(0, Nv.jsx)("div", {
                            className: "RespawnPageOtherGamesTitle",
                            children: gv("respawnPage:orTry")
                          }), (0, Nv.jsx)("div", {
                            className: "RespawnPageOtherGameThumbnails",
                            children: Xv.map((vv => (0, Nv.jsx)(xP.i, {
                              source: {
                                type: "game",
                                gameNameWithVariation: vv
                              },
                              disabled: !uv || !Lv,
                              gameWidth: "13rem",
                              hideDescription: !0,
                              hideFavourites: !0,
                              hideCcu: !0,
                              onClick: () => {
                                (0, Yv.g)("inGameReplay");
                                const zv = (0, YP.e)(vv);
                                Sv(zv)
                              }
                            }, vv)))
                          })]
                        })]
                      })]
                    })
                  }), (0, Nv.jsx)("div", {
                    ref: Jv,
                    className: "RespawnSideSquareBannerDiv"
                  })]
                }), (0, Nv.jsx)("div", {
                  ref: yv,
                  className: "RespawnBottom",
                  children: (0, Nv.jsx)(nP.d, {
                    info: {
                      adType: "leaderboard",
                      adId: 1,
                      adAlias: "banner_respawn_2"
                    },
                    sizeInfo: {
                      parentRef: yv
                    },
                    showing: zz,
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
    var MP = Pv(36148);
    const yP = [{
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
      BP = [{
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
      JP = {
        duration: 300,
        easing: "ease-out",
        fill: "forwards"
      },
      EP = {
        duration: 400,
        easing: "ease-out",
        fill: "forwards"
      },
      oP = (0, hv.memo)((function() {
        const vv = (0, hv.useRef)(null),
          zv = (0, hv.useRef)(null);

        function Pv(Pv) {
          var hv;
          let {
            WP: Sv,
            screenPos: ev
          } = Pv;
          const gv = vv.current;
          null === (hv = zv.current) || void 0 === hv || hv.cancel(), gv.classList.remove("HitmarkerCrit"), ev ? (gv.style.left = `${ev.x}%`, gv.style.top = `${ev.y}%`) : (gv.style.left = "50%", gv.style.top = "50%"), gv.style.rotate = 16 * (Math.random() - .5) + "deg", Sv && gv.classList.add("HitmarkerCrit");
          const pv = gv.animate(Sv ? BP : yP, Sv ? EP : JP);
          zv.current = pv, pv.onfinish = () => {
            gv.classList.remove("HitmarkerCrit")
          }
        }
        return (0, pv.g)("localGunHitmarker", (vv => {
          let {
            WP: zv
          } = vv;
          Pv({
            WP: zv
          })
        })), (0, pv.g)("yourAttackHit", (vv => {
          let {
            WP: zv,
            screenPos: hv
          } = vv;
          Pv({
            WP: zv,
            screenPos: Yv.c.get("isTouchScreen") ? hv : void 0
          })
        })), (0, pv.g)("sendHitmarker", (vv => {
          let {
            WP: zv,
            screenPos: hv
          } = vv;
          Pv({
            WP: zv,
            screenPos: hv
          })
        })), (0, Nv.jsxs)("div", {
          ref: vv,
          className: "Hitmarker",
          children: [(0, Nv.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Nv.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Nv.jsx)("div", {
            className: "HitmarkerBar"
          }), (0, Nv.jsx)("div", {
            className: "HitmarkerBar"
          })]
        })
      }));

    function bP() {
      const vv = (0, hv.useRef)(!0);
      return (0, pv.g)("localBlockMined", (() => {
        Sz.e.play("blockMined")
      })), (0, pv.g)("yourAttackHit", (() => {
        Sz.e.play("hitLanded")
      })), (0, pv.g)("localGunHitmarker", (() => {
        Sz.e.play("hitLanded")
      })), (0, pv.g)("damagedByOtherPlayer", (() => {
        Sz.e.play("damageTaken")
      })), (0, Fv.d)("localPlayerAliveSet", (zv => {
        !zv && vv.current && Sz.e.play("death"), vv.current = zv
      })), null
    }
    var rP = Pv(1871),
      kP = Pv(36155),
      XP = Pv.n(kP),
      uP = Pv(1978),
      vh = Pv(1968),
      zh = Pv(3037),
      Ph = Pv(9019);
    const hh = IP._d ? 7e7 : 7e3,
      Sh = XP()("#ffffff").alpha(.5).string();

    function eh(vv) {
      const zv = (0, zh.c)(vv);
      return void 0 !== zv && "Gun" === (0, Ph.itemTypeOf)(zv)
    }

    function gh(vv) {
      if (!vv) return console.error(`Killfeed colour was ${vv}`), Sh;
      try {
        return XP()(vv).alpha(.5).string()
      } catch {
        return console.warn(`Killfeed colour ${vv} is not a colour`), Sh
      }
    }
    const ph = (0, hv.memo)((function() {
      const {
        t: vv
      } = (0, Vv.x)(), zv = (0, hv.useRef)([]), Pv = (0, sP.d)();
      return (0, Fv.d)("kill", (function(hv) {
        var Sv, ev;
        let {
          killer: gv,
          victim: pv,
          withItem: dv,
          killstreak: Nv
        } = hv;
        const lv = zv.current;
        if (lv.length >= 3) {
          const vv = lv.shift();
          clearTimeout(vv.timeout)
        }
        const Tv = Wv.gameBridge.latest("hiddenPlayerNames"),
          wv = {
            deadName: QP(pv, vv),
            killerName: QP(gv, vv),
            isFriend: {
              killer: (0, uP.e)(gv.realName, Tv),
              dead: (0, uP.e)(pv.realName, Tv)
            },
            withItem: dv,
            wasHeadshot: !1,
            killstreak: Nv,
            timeout: setTimeout((() => {
              lv.shift(), Pv()
            }), hh),
            reactId: `${null!==(Sv=gv.id)&&void 0!==Sv?Sv:gv.shownName}|${null!==(ev=pv.id)&&void 0!==ev?ev:pv.shownName}|${Date.now()}`,
            killerBackground: gh(gv.colour),
            deadBackground: gh(pv.colour)
          };
        lv.push(wv), Pv()
      })), (0, hv.useEffect)((() => {
        const vv = zv.current;
        return () => {
          for (; vv.length > 0;) {
            const {
              timeout: zv
            } = vv.pop();
            clearTimeout(zv)
          }
        }
      }), []), (0, Nv.jsx)("div", {
        className: "Killfeed",
        children: zv.current.map((vv => {
          let {
            deadName: zv,
            killerName: Pv,
            withItem: hv,
            wasHeadshot: Sv,
            killstreak: ev,
            killerBackground: gv,
            deadBackground: pv,
            reactId: dv,
            isFriend: lv
          } = vv;
          return (0, Nv.jsxs)("div", {
            className: "IndividualKillWrapper SmallTextLight",
            style: {
              background: `linear-gradient(90deg, ${gv} calc(100% - 10rem), ${pv} 100%)`
            },
            children: [ev >= 2 ? (0, Nv.jsx)("div", {
              className: "KillfeedKillstreak",
              children: (0, IP.S)(ev)
            }) : null, (0, Nv.jsx)("div", {
              className: "KillfeedKillerName",
              children: Pv
            }), lv.killer && (0, Nv.jsx)(vh.c, {}), (0, Nv.jsx)("div", {
              className: "KillfeedItem",
              style: {
                height: "5vmin",
                width: eh(hv) ? "7.5vmin" : "5vmin"
              },
              children: (0, Nv.jsx)(rP.b, {
                itemName: hv,
                amount: 0,
                gunTransform: "scaleX(-1)",
                itemMarginTop: 0
              })
            }), Sv ? (0, Nv.jsx)(Qv.b, {
              name: "crosshairs",
              className: "3x KillfeedHeadshotIcon"
            }) : null, (0, Nv.jsx)("div", {
              className: "KillfeedDeadName",
              children: zv
            }), lv.dead && (0, Nv.jsx)(vh.c, {})]
          }, dv)
        }))
      })
    }));
    var dh = Pv(36190),
      Nh = Pv(1121),
      lh = Pv.n(Nh),
      Th = Pv(3142),
      Wh = Pv(36193),
      wh = Pv(1285);
    const ah = {},
      sh = (0, hv.memo)((function() {
        const vv = (0, hv.useRef)({}),
          [, zv] = (0, hv.useReducer)((vv => vv + 1), 0);
        (0, pv.g)("setDirectionArrow", (Pv => {
          let {
            id: hv,
            position: Sv,
            style: ev,
            text: gv,
            sv: pv
          } = Pv;
          const dv = vv.current,
            Nv = ev || ah,
            lv = gv,
            Tv = dv[hv];
          if (!Tv) return dv[hv] = {
            position: Sv,
            style: Nv,
            text: lv,
            shouldShowDistance: pv,
            hU: null,
            chevronElement: null,
            distanceElement: null,
            lastRenderedDist: -1,
            lastDistUpdateTime: 0,
            lastScreenX: NaN,
            lastScreenY: NaN,
            onScreen: void 0
          }, void zv();
          const Wv = !lh()(Tv.style, Nv) || !lh()(Tv.text, lv) || Tv.shouldShowDistance !== pv;
          Tv.position = Sv, Tv.style = Nv, Tv.text = lv, Tv.shouldShowDistance = pv, Wv && zv()
        })), (0, pv.g)("clearDirectionArrow", (Pv => {
          let {
            id: hv
          } = Pv;
          const Sv = vv.current;
          if (null === hv)
            for (const vv in Sv) delete Sv[vv];
          else delete Sv[hv];
          zv()
        })), (0, hv.useEffect)((() => {
          const zv = vv.current,
            Pv = (0, wh.v)((() => {
              ! function(vv) {
                const zv = Wv.gameBridge.lookup("localPos", null),
                  Pv = Th.e - Ch,
                  hv = (0, Th.n)() - Ch;
                for (const Sv in vv) {
                  const ev = vv[Sv];
                  if (!ev.hU) continue;
                  const gv = Wv.gameBridge.lookup("screenPos", ev.position),
                    pv = gv.x - 50,
                    dv = gv.y - 50;
                  gv.x === ev.lastScreenX && gv.y === ev.lastScreenY || (ev.lastScreenX = gv.x, ev.lastScreenY = gv.y, ev.hU.style.translate = `${gv.x}vw ${gv.y}vh`, ev.chevronElement && (ev.chevronElement.style.rotate = `${IP.d.fastATan2(dv,pv)}rad`));
                  const Nv = Math.abs(pv) < Pv && Math.abs(dv) < hv;
                  if (Nv !== ev.onScreen && (ev.onScreen = Nv, ev.hU.classList.toggle("DirectionArrowOnScreen", Nv)), ev.shouldShowDistance && ev.distanceElement) {
                    const vv = ev.position[0] - zv[0],
                      Pv = ev.position[1] - zv[1],
                      hv = ev.position[2] - zv[2],
                      Sv = Math.round(Math.sqrt(vv * vv + Pv * Pv + hv * hv));
                    (-1 === ev.lastRenderedDist || (0, Wh.b)(Sv, ev.lastRenderedDist, ev.lastDistUpdateTime)) && (ev.distanceElement.textContent = `${Sv}m`, ev.lastRenderedDist = Sv, ev.lastDistUpdateTime = Date.now() + Math.floor(100 * Math.random()))
                  }
                }
              }(zv)
            }));
          return () => {
            Pv();
            for (const vv in zv) delete zv[vv]
          }
        }), []);
        const Pv = vv.current;
        return (0, Nv.jsx)("div", {
          className: "DirectionArrows",
          children: Object.entries(Pv).map((vv => {
            var zv;
            let [hv, Sv] = vv;
            const ev = null !== (zv = (0, cv.Ob)(Sv.style)) && void 0 !== zv ? zv : "#ffffff";
            return (0, Nv.jsxs)("div", {
              ref: vv => {
                Pv[hv] && (Pv[hv].hU = vv)
              },
              className: "DirectionArrow",
              style: {
                fontSize: Sv.style.fontSize,
                opacity: Sv.style.opacity
              },
              children: [(0, Nv.jsxs)("div", {
                className: "DirectionArrowChevron",
                ref: vv => {
                  Pv[hv] && (Pv[hv].chevronElement = vv)
                },
                children: [(0, Nv.jsxs)("div", {
                  className: "DirectionArrowShadowLayer",
                  children: [(0, Nv.jsx)("div", {
                    className: "DirectionArrowBar"
                  }), (0, Nv.jsx)("div", {
                    className: "DirectionArrowBar"
                  })]
                }), (0, Nv.jsxs)("div", {
                  className: "DirectionArrowBarLayer",
                  children: [(0, Nv.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: ev
                    }
                  }), (0, Nv.jsx)("div", {
                    className: "DirectionArrowBar",
                    style: {
                      background: ev
                    }
                  })]
                })]
              }), (0, Nv.jsx)("div", {
                className: "DirectionArrowMarker",
                style: {
                  background: ev,
                  boxShadow: `0 0 3px rgba(0, 0, 0, 0.8), 0 0 8px ${ev}`
                }
              }), Sv.text && (0, Nv.jsx)("div", {
                className: "DirectionArrowLabel SmallTextLight",
                style: {
                  color: ev,
                  fontWeight: Sv.style.fontWeight,
                  fontStyle: Sv.style.fontStyle
                },
                children: (0, Nv.jsx)(dv.c, {
                  text: Sv.text
                })
              }), Sv.shouldShowDistance && (0, Nv.jsx)("div", {
                className: "DirectionArrowDistance SmallTextLight",
                ref: vv => {
                  Pv[hv] && (Pv[hv].distanceElement = vv)
                },
                style: {
                  color: ev,
                  fontWeight: Sv.style.fontWeight,
                  fontStyle: Sv.style.fontStyle
                }
              })]
            }, hv)
          }))
        })
      })),
      Ch = .5;
    const ih = (0, hv.memo)((function(vv) {
        let {
          isTouchScreen: zv
        } = vv;
        return (0, Nv.jsxs)("div", {
          className: "BottomRightElements",
          "data-camera-keeper-host": "",
          children: [(0, Nv.jsx)(jh, {}), zv && (0, Nv.jsx)(vP, {})]
        })
      })),
      ch = {
        readyForNext: 0,
        running: 1
      },
      Gh = 50;

    function mh(vv) {
      console.assert(vv.state.current === ch.readyForNext);
      const zv = vv.queue.current,
        Pv = vv.foreground.current;
      if (zv.length > 0 && Pv) {
        const {
          toFraction: hv,
          toDuration: Sv
        } = zv.shift();
        vv.state.current = ch.running, Pv.style.transition = `transform ${Math.max(Sv-Gh,0)}ms linear`, Pv.classList.remove("Complete"), vv.timeout.current = setTimeout((() => {
          Pv.style.transform = `scaleX(${hv})`, vv.timeout.current = setTimeout((() => {
            1 === hv && Pv.classList.add("Complete"), vv.state.current = ch.readyForNext, mh(vv)
          }), Math.max(Sv - Gh, 0))
        }), Gh)
      }
    }

    function jh() {
      const vv = (0, hv.useRef)([]),
        zv = (0, hv.useRef)(ch.readyForNext),
        Pv = (0, hv.useRef)(void 0),
        Sv = (0, hv.useRef)(null),
        ev = (0, hv.useRef)({
          queue: vv,
          state: zv,
          timeout: Pv,
          foreground: Sv
        }),
        gv = (0, Gv.i)("showProgressBar");
      if ((0, hv.useLayoutEffect)((() => (gv && zv.current === ch.readyForNext && mh(ev.current), () => {
          zv.current = ch.readyForNext, clearTimeout(Pv.current), gv && (vv.current.length = 0)
        })), [gv]), (0, pv.g)("progressBarUpdate", (Pv => {
          let {
            toFraction: hv,
            toDuration: Sv
          } = Pv;
          vv.current.push({
            toFraction: hv,
            toDuration: Sv
          }), zv.current === ch.readyForNext && mh(ev.current)
        })), !gv) return null;
      return (0, Nv.jsx)("div", {
        className: "ProgressBarBackground",
        children: (0, Nv.jsx)("div", {
          className: "ProgressBarForeground",
          ref: Sv,
          style: {
            width: "15vw",
            transformOrigin: "left center",
            transform: "scaleX(0)"
          }
        })
      })
    }
    var fh = Pv(36198),
      Fh = Pv(2352);
    const Yh = ["--notchTop", "--notchRight", "--notchBottom", "--notchLeft"];

    function nh(vv) {
      let {
        classes: zv,
        gone: Pv
      } = vv;
      const hv = document.documentElement;
      hv.classList.remove(...zv);
      for (const Sv of Pv) Sv.style.display = "block";
      return () => {
        hv.classList.add(...zv);
        for (const vv of Pv) vv.style.display = ""
      }
    }

    function Oh(vv) {
      const {
        isTouchScreen: zv
      } = (0, Yv.i)(["isTouchScreen"]);
      (0, hv.useLayoutEffect)((() => {
        if (!zv) return;
        const Pv = vv.current,
          hv = document.querySelector(`.${fh.m}`),
          Sv = vv => {
            const zv = () => {
              const zv = vv.querySelector(Fh.h),
                hv = function(vv) {
                  const zv = document.documentElement;
                  return {
                    classes: Tz.I.map(sz.A).filter((vv => zv.classList.contains(vv))),
                    gone: [...vv.querySelectorAll(`.TopRightTrayToggle.${Fh.j}`)]
                  }
                }(vv);
              zv && function(vv, zv) {
                (0, Fh.C)(vv, zv.classes.length > 0 || zv.gone.length > 0, (() => nh(zv)))
              }(zv, hv);
              const Sv = `${Math.floor(function(vv,zv,Pv){const hv=document.documentElement,Sv=hv.classList.contains((0,sz.F)("menu")),ev=hv.style.getPropertyValue((0,sz.M)("menu"));if(!Sv&&""===ev)return vv.getBoundingClientRect().left;const gv=zv?(0,Fh.o)(zv):()=>{},pv=nh(Pv);hv.classList.remove((0,sz.F)("menu")),hv.style.removeProperty((0,sz.M)("menu"));const dv=vv.getBoundingClientRect().left;return pv(),gv(),Sv&&hv.classList.add((0,sz.F)("menu")),""!==ev&&hv.style.setProperty((0,sz.M)("menu"),ev),dv}(vv,zv,hv)-Pv.getBoundingClientRect().left-4)}px`;
              Pv.style.getPropertyValue("--InGameHeaderMaxWidth") !== Sv && Pv.style.setProperty("--InGameHeaderMaxWidth", Sv)
            };
            zv();
            const Sv = new ResizeObserver(zv);
            Sv.observe(vv), Sv.observe(hv), window.addEventListener("resize", zv);
            const ev = () => Yh.map((vv => document.documentElement.style.getPropertyValue(vv))).join();
            let gv = ev();
            const pv = new MutationObserver((() => {
              const vv = ev();
              vv !== gv && (gv = vv, zv())
            }));
            pv.observe(document.documentElement, {
              attributes: !0,
              attributeFilter: ["style"]
            });
            const dv = (0, mv.l)(sz.h, zv),
              Nv = new MutationObserver(zv);
            return Nv.observe(vv, {
              childList: !0,
              subtree: !0
            }), () => {
              Sv.disconnect(), pv.disconnect(), Nv.disconnect(), dv(), window.removeEventListener("resize", zv);
              const Pv = vv.querySelector(Fh.h);
              Pv && (0, Fh.o)(Pv)
            }
          },
          ev = () => hv.querySelector(".TopRightIconsContainer"),
          gv = ev();
        let pv;
        if (gv) pv = Sv(gv);
        else {
          const vv = new MutationObserver((() => {
            const zv = ev();
            zv && (vv.disconnect(), pv = Sv(zv))
          }));
          vv.observe(hv, {
            childList: !0,
            subtree: !0
          }), pv = () => {
            vv.disconnect()
          }
        }
        return () => {
          pv(), Pv.style.removeProperty("--InGameHeaderMaxWidth")
        }
      }), [zv, vv])
    }
    var Dh = Pv(3430),
      Kh = Pv(3428),
      Vh = Pv(1610),
      Uh = Pv(1482),
      Rh = Pv(1612),
      xh = Pv(1692),
      th = Pv(1827),
      qh = Pv(1114),
      Ih = Pv(4066),
      Qh = Pv(1465),
      Zh = Pv(1342);
    const Ah = 2e4,
      Lh = 6e5,
      Hh = new Set;

    function Mh() {
      const {
        gameEntrySource: vv,
        loadingOverlayVisible: zv
      } = (0, Yv.i)(["gameEntrySource", "loadingOverlayVisible"]), Pv = (0, Fv.g)("connectedGame", (vv => (0, Ih.e)(vv) ? vv.lobbyName : null)), Sv = (0, Fv.h)("localPlayerAlive"), ev = (0, Fv.g)("players", (vv => null !== vv.localId && void 0 !== vv.byId[vv.localId])), [gv, pv] = (0, hv.useState)(null);
      return !zv && Sv && ev && null !== Pv && gv !== Pv && pv(Pv), (0, hv.useEffect)((() => {
        if (!(0, Ih.g)(vv) || null === gv || gv !== Pv || Hh.has(gv)) return;
        const zv = setTimeout((() => {
          Hh.add(gv), async function(vv) {
            const zv = await qh.userContextManager.getCurrentUserContext();
            let Pv;
            try {
              Pv = (await Uh.e.getWorldOwnerFriendOffer(zv)).owner
            } catch (Sv) {
              return void console.warn("Couldn't ask who owns this world", Sv)
            }
            if (!Pv || (0, Ih.l)(Pv.name, Date.now())) return;
            const hv = Pv;
            ! function(vv, zv) {
              const Pv = Date.now() + Lh;
              let hv = Date.now(),
                Sv = 0;
              const ev = () => {
                const gv = Date.now(),
                  pv = Wv.gameBridge.latest("connectedGame");
                pv.lobbyName !== vv || gv > Pv || (null === pv.websocketUrl ? hv = 1 / 0 : hv === 1 / 0 && !Yv.c.get("loadingOverlayVisible") && Wv.gameBridge.latest("localPlayerAlive") && (hv = gv + Ah), Sv = gv < hv || !Wv.gameBridge.latest("localPlayerAlive") || Yv.c.get("isUiHidden") || Yv.c.get("isUiHiddenByCamera") || (0, xh.isTypingInInput)() || Yv.c.get("loadingOverlayVisible") || (0, Vh.o)() || (0, Dh.g)() || (0, Zh.i)() ? 0 : Sv + 1, Sv >= 2 ? zv() : setTimeout(ev, 500))
              };
              ev()
            }(vv, (() => {
              (0, Ih.d)(Rh.d.getSocialState().friends, hv.name) || ((0, Ih.h)(hv.name, Date.now()), th.f.showWorldOwnerOffer(hv), (0, Qh.reportAnalyticsClick)({
                id: "social.world_owner_offer",
                value: "shown"
              }))
            }))
          }(gv).catch((vv => {
            console.error("Failed to offer the world's owner as a friend", vv)
          }))
        }), Ah);
        return () => {
          clearTimeout(zv)
        }
      }), [vv, gv, Pv]), null
    }
    var yh = Pv(1861);
    const Bh = (0, hv.memo)((function(vv) {
        let {
          durationMs: zv,
          endsAtMs: Pv
        } = vv;
        const [, Sv] = (0, hv.useReducer)((vv => vv + 1), 0), ev = null === Pv ? zv : Math.max(Pv - Date.now(), 0);
        return (0, hv.useEffect)((() => {
          if (null === Pv || ev <= 0) return;
          const vv = setTimeout(Sv, ev - 1e3 * (Math.ceil(ev / 1e3) - 1));
          return () => {
            clearTimeout(vv)
          }
        })), (0, Nv.jsx)("div", {
          className: "EffectInfoDuration SmallTextLight",
          children: (0, IP.ib)(ev)
        })
      })),
      Jh = (0, hv.memo)((function() {
        const vv = (0, Fv.h)("localEffects");
        return (0, Nv.jsx)("div", {
          className: "EffectInfosWrapper",
          children: Object.entries(vv).map((vv => {
            let [zv, {
              icon: Pv,
              displayName: hv,
              durationMs: Sv,
              endsAtMs: ev,
              level: gv
            }] = vv;
            return (0, Nv.jsxs)("div", {
              className: "EffectInfo",
              children: [(0, Nv.jsx)(yh.b, {
                icon: Pv,
                className: "EffectInfoIcon"
              }), (0, Nv.jsxs)("div", {
                className: "EffectInfoRightSide",
                style: {
                  marginTop: null !== Sv ? "0" : "1rem"
                },
                children: [(0, Nv.jsxs)("div", {
                  className: "EffectInfoNameWrapper",
                  children: [(0, Nv.jsx)(dv.c, {
                    text: null !== hv && void 0 !== hv ? hv : zv,
                    className: "EffectInfoName SmallTextBold"
                  }), gv > 1 && (0, Nv.jsx)("div", {
                    className: "EffectInfoName SmallTextBold",
                    children: (0, IP.S)(gv)
                  })]
                }), null !== Sv && (0, Nv.jsx)(Bh, {
                  durationMs: Sv,
                  endsAtMs: ev
                })]
              })]
            }, zv)
          }))
        })
      }));
    var Eh = Pv(36202),
      oh = Pv(36398),
      bh = Pv(185),
      rh = Pv(1336),
      kh = Pv(2594),
      Xh = Pv(2711);

    function uh(vv, zv) {
      (0, hv.useLayoutEffect)((() => {
        let zv, Pv;
        const hv = requestAnimationFrame((() => {
          Pv = setTimeout((() => {
            Pv = void 0;
            const hv = vv();
            zv = "function" === typeof hv ? hv : void 0
          }), 0)
        }));
        return () => {
          var vv;
          cancelAnimationFrame(hv), clearTimeout(Pv), null === (vv = zv) || void 0 === vv || vv()
        }
      }), zv)
    }
    const vS = [5, 5, 5],
      zS = [7, 4, 4, 4];

    function PS(vv) {
      return vv.reduce(((vv, zv) => vv + zv), 0)
    }

    function hS(vv, zv, Pv, hv, Sv) {
      const ev = vv.getContext("2d");
      if (!ev) return null;
      const gv = zv.fontFamily,
        pv = zv.fontWeight;
      return vv.width = Pv, vv.height = hv, ev.fillStyle = zv.color, ev.textAlign = "center", ev.textBaseline = "middle", ev.font = `${pv} ${Sv}px ${gv}`, ev
    }
    const SS = (0, hv.memo)((function(vv) {
      let {
        show: zv
      } = vv;
      const Pv = (0, hv.useRef)(null),
        Sv = (0, hv.useRef)(null),
        ev = (0, hv.useRef)(null),
        gv = (0, av.g)();
      return (0, hv.useEffect)((() => gv.whenShown((() => {
        let vv = 0,
          zv = 0,
          Pv = performance.now(),
          hv = 0;
        const gv = (0, wh.v)((() => {
          var gv, pv, dv;
          vv++, zv++;
          const Nv = performance.now();
          if (Nv - Pv < 1e3) return;
          const lv = Math.round(vv / (Nv - Pv) * 1e3);
          if (Sv.current = lv, null === (gv = ev.current) || void 0 === gv || gv.call(ev, lv), vv = 0, Pv = Nv, lv >= 55) return void(hv = 0);
          if (hv += 1, hv < 15) return;
          const Tv = null !== (pv = fv.h.getItem("decreaseLoadDistPromptDeniedCount")) && void 0 !== pv ? pv : 0,
            [wv, av] = jv.c.get("minChunkAddDist");
          if (function(vv, zv) {
              const Pv = Wv.gameBridge.lookup("Wm", null);
              return null !== Pv && (Pv.horizontal > vv || Pv.vertical > zv)
            }(wv, av) && (null !== (dv = fv.h.getItem("lastDecreaseLoadDistPromptTime")) && void 0 !== dv ? dv : 0) + 432e5 < Date.now() && Tv < 3) {
            fv.h.setItem("lastDecreaseLoadDistPromptTime", Date.now());
            rh.NotificationProvider.showPromptPopup({
              title: "Lag (low FPS) caused by high chunk load distance. Decrease it?",
              confirmText: "general:yes",
              cancelText: "general:no",
              unlockPointerKey: "chunkLoadDistanceLagPopup"
            }).getResult().then((vv => {
              "notificationTornDown" !== vv && (vv ? (Wv.gameBridge.send("setChunkAddDistance", {
                horizontal: wv,
                vertical: av
              }), fv.h.setItem("chunkHorizAddDist", wv), fv.h.setItem("chunkVertAddDist", av), mv.j.zC("updatedChunkLoadDist"), fv.h.setItem("decreaseLoadDistPromptDeniedCount", 0)) : fv.h.setItem("decreaseLoadDistPromptDeniedCount", Tv + 1))
            }))
          }
        }));
        let pv = performance.now();
        zv = 0;
        let dv = null,
          Nv = !document.hidden;

        function lv() {
          const vv = performance.now() - pv,
            Pv = 1e3 * zv / vv;
          Nv && (null === dv && (dv = Pv), kh.d.setFps(Pv, dv)), zv = 0, pv = performance.now()
        }
        let Tv = setInterval(lv, Xh.d);

        function wv() {
          const vv = Nv;
          Nv = !document.hidden, !vv && Nv && (zv = 0, pv = performance.now(), clearInterval(Tv), Tv = setInterval(lv, Xh.d))
        }
        return document.addEventListener("visibilitychange", wv), () => {
          gv(), document.removeEventListener("visibilitychange", wv), clearInterval(Tv)
        }
      }))), [gv]), uh((() => {
        var vv;
        if (!zv || ev.current) return;
        const hv = Pv.current,
          gv = window.getComputedStyle(hv.parentElement),
          pv = null !== (vv = window.devicePixelRatio) && void 0 !== vv ? vv : 1,
          dv = parseFloat(gv.fontSize) * pv,
          Nv = Math.round(3 * dv),
          lv = Math.round(dv),
          Tv = hS(hv, gv, Nv, lv, dv);
        if (!Tv) return;
        const Wv = vv => {
          Tv.clearRect(0, 0, hv.width, hv.height), Tv.fillText(vv.toString(), hv.width / 2, hv.height / 2)
        };
        ev.current = Wv, null !== Sv.current && Wv(Sv.current)
      }), [zv]), (0, Nv.jsxs)("div", {
        className: "FpsWrapperDiv",
        style: {
          display: zv ? "flex" : "none"
        },
        children: [(0, Nv.jsx)("div", {
          className: "FpsLabel",
          children: "FPS"
        }), (0, Nv.jsx)("canvas", {
          className: "FpsCanvas",
          ref: Pv,
          width: 48,
          height: 16
        })]
      })
    }));

    function eS(vv) {
      return Math.sign(vv) * Math.round(100 * Math.abs(vv))
    }

    function gS(vv) {
      let {
        getCoordinates: zv,
        showChunkCoords: Pv,
        columns: Sv
      } = vv;
      const ev = (0, hv.useRef)(null);
      return uh((() => {
        var vv;
        const hv = ev.current,
          gv = window.getComputedStyle(hv.parentElement),
          pv = null !== (vv = window.devicePixelRatio) && void 0 !== vv ? vv : 1,
          dv = parseFloat(gv.fontSize) * pv,
          Nv = Math.round(dv * PS(Sv)),
          lv = Math.round(dv),
          Tv = hS(hv, gv, Nv, lv, dv);
        if (!Tv) return;
        let wv = !0,
          av = 0,
          sv = 0,
          Cv = 0,
          iv = 0,
          cv = 0,
          Gv = 0;
        const mv = () => {
          wv = !0
        };
        document.fonts.load(Tv.font).then(mv, mv);
        const jv = () => {
          hS(hv, gv, Nv, lv, dv), mv()
        };
        hv.addEventListener("contextrestored", jv);
        const fv = (0, wh.A)((() => {
          var vv, ev, gv, pv, Nv, lv;
          const [mv, jv, fv] = zv(), Fv = eS(mv), Yv = eS(jv), nv = eS(fv);
          let Ov = null;
          if (Pv) {
            const vv = Wv.gameBridge.lookup("localPos", null);
            Ov = (0, vz.ib)(vv[0], vv[1], vv[2])
          }
          const Dv = null !== (vv = null === (ev = Ov) || void 0 === ev ? void 0 : ev[0]) && void 0 !== vv ? vv : 0,
            Kv = null !== (gv = null === (pv = Ov) || void 0 === pv ? void 0 : pv[1]) && void 0 !== gv ? gv : 0,
            Vv = null !== (Nv = null === (lv = Ov) || void 0 === lv ? void 0 : lv[2]) && void 0 !== Nv ? Nv : 0;
          if (!wv && Fv === av && Yv === sv && nv === Cv && Dv === iv && Kv === cv && Vv === Gv) return;
          wv = !1, av = Fv, sv = Yv, Cv = nv, iv = Dv, cv = Kv, Gv = Vv;
          const Uv = [(Fv / 100).toFixed(2), (Yv / 100).toFixed(2), (nv / 100).toFixed(2)];
          Ov && Uv.unshift(`${Dv} ${Kv} ${Vv}`), Tv.clearRect(0, 0, hv.width, hv.height);
          const Rv = hv.height / 2;
          let xv = 0;
          for (let zv = 0; zv < Uv.length; zv++) {
            const vv = dv * Sv[zv];
            Tv.fillText(Uv[zv], xv + vv / 2, Rv, vv), xv += vv
          }
        }));
        return () => {
          fv(), hv.removeEventListener("contextrestored", jv)
        }
      }), [zv, Pv, Sv]), (0, Nv.jsx)("div", {
        className: "CoordinateUI",
        children: (0, Nv.jsx)("canvas", {
          ref: ev,
          className: "CoordinateCanvas",
          width: 16 * PS(Sv),
          height: 16
        })
      })
    }
    const pS = (0, hv.memo)((function() {
        const vv = (0, hv.useCallback)((() => {
          const vv = Wv.gameBridge.lookup("localPos", null);
          return [vv[0], vv[1], vv[2]]
        }), []);
        return (0, Nv.jsx)(gS, {
          getCoordinates: vv,
          showChunkCoords: !1,
          columns: vS
        })
      })),
      dS = (0, hv.memo)((function() {
        const vv = (0, hv.useCallback)((() => {
          const vv = Wv.gameBridge.lookup("localPos", null),
            zv = bh.f.aa;
          let Pv = vv[0] % zv,
            hv = vv[1] % zv,
            Sv = vv[2] % zv;
          return Pv < 0 && (Pv += zv), hv < 0 && (hv += zv), Sv < 0 && (Sv += zv), [Pv, hv, Sv]
        }), []);
        return (0, Nv.jsx)(gS, {
          getCoordinates: vv,
          showChunkCoords: !0,
          columns: zS
        })
      }));
    var NS = Pv(2002),
      lS = Pv(1327),
      TS = Pv(1002),
      WS = Pv(1209),
      wS = Pv(73),
      aS = Pv(36269),
      sS = Pv(1445),
      CS = Pv(2934);
    const iS = (0, hv.memo)((function() {
      const vv = (0, Gv.i)("maxAuraLevel");
      return 0 === vv ? null : (0, Nv.jsx)(cS, {
        maxLevel: vv
      })
    }));

    function cS(vv) {
      let {
        maxLevel: zv
      } = vv;
      const Pv = (0, Gv.i)("auraPerLevel"),
        [Sv, ev] = (0, hv.useState)((() => {
          var vv;
          return null !== (vv = Wv.gameBridge.latest("aura")) && void 0 !== vv ? vv : void 0
        })),
        [gv, pv] = (0, hv.useState)((() => mv(Sv))),
        [dv, lv] = (0, hv.useReducer)((vv => vv + 1), 0),
        Tv = (0, hv.useRef)(null),
        wv = (0, hv.useRef)([]),
        av = (0, hv.useRef)({
          width: 0,
          level: 0
        }),
        sv = (0, hv.useRef)(null),
        Cv = (0, hv.useRef)(null);

      function cv() {
        if (null !== sv.current) return;
        if (0 === wv.current.length) return;
        const {
          width: vv,
          level: zv
        } = wv.current.shift();
        let Pv;
        if (zv !== av.current.level && zv > av.current.level !== vv > av.current.width) {
          const hv = zv > av.current.level;
          Pv = hv ? vv : 100 - vv, Tv.current.style.transition = "none", Tv.current.style.width = hv ? "0%" : "100%", Tv.current.offsetWidth
        } else Pv = Math.abs(vv - av.current.width);
        const hv = 100 * Pv / 20;
        Tv.current.style.transition = `width ${hv}ms linear`, pv(vv), av.current = {
          width: vv,
          level: zv
        }, wv.current.length > 0 && (sv.current = setTimeout((() => {
          sv.current = null, cv()
        }), hv))
      }

      function mv(vv) {
        return Math.floor(vv / Pv) === zv ? 100 : vv % Pv / Pv * 100
      }
      return (0, hv.useEffect)((() => () => {
        clearTimeout(sv.current), clearTimeout(Cv.current), sv.current = null, Cv.current = null
      }), []), (0, Fv.d)("aura", (vv => {
        if (Cv.current && clearTimeout(Cv.current), null === vv) return clearTimeout(sv.current), Cv.current = null, sv.current = null, wv.current = [], av.current = {
          width: 0,
          level: 0
        }, ev(void 0), void pv(0);
        Cv.current = setTimeout((() => {
          const zv = Math.floor(Sv / Pv),
            hv = Math.floor(vv / Pv),
            gv = mv(vv);
          vv > Sv && aS.c.play("exp_collect", .1).rate(1.6 + .5 * Math.random()), hv > zv ? (hv % 5 === 0 && aS.c.play("exp_levelup", .45).rate(.95 + .1 * Math.random()), lv(), wv.current.push({
            width: 100,
            level: zv
          })) : hv < zv && wv.current.push({
            width: 0,
            level: zv
          }), vv === Sv && hv === zv || wv.current.push({
            width: gv,
            level: hv
          }), ev(vv), cv()
        }), 50)
      })), (0, iv.f)(), (0, Nv.jsxs)("div", {
        className: "AuraBarWrapper",
        children: [(0, Nv.jsxs)("div", {
          className: "AuraBarLabel SmallTextBold",
          children: [(0, Nv.jsx)(sS.d, {
            showSignal: dv,
            particleElement: (0, Nv.jsx)("img", {
              src: (0, CS.e)("glint"),
              alt: ""
            })
          }), (0, Nv.jsx)("img", {
            className: "AuraBarLabelImage",
            src: (0, CS.e)("glint"),
            alt: "aura"
          }), (0, Nv.jsx)("div", {
            className: "AuraBarLabelText",
            children: Math.floor((null !== Sv && void 0 !== Sv ? Sv : 0) / Pv)
          })]
        }), (0, Nv.jsx)("div", {
          className: "AuraBar",
          children: (0, Nv.jsx)("div", {
            ref: Tv,
            className: "AuraBarBackground",
            style: {
              width: `${gv}%`
            }
          })
        })]
      })
    }
    var GS = Pv(2413);

    function mS(vv) {
      vv.timed && (vv.endedAnimation = vv.timed.animation, vv.timed = null)
    }
    const jS = (0, hv.memo)((function() {
      const vv = (0, hv.useRef)(null),
        zv = (0, hv.useRef)(null),
        Pv = (0, hv.useRef)({
          timed: null,
          endedAnimation: null
        });
      return (0, pv.g)("middleScreenBarInitiate", (vv => {
        var hv;
        let {
          duration: Sv,
          xv: ev,
          horizBarRemOffset: gv
        } = vv;
        const pv = Pv.current;
        mS(pv);
        const dv = zv.current;
        if (!(Sv >= 0) || !dv) return;
        null === (hv = pv.endedAnimation) || void 0 === hv || hv.cancel(), pv.endedAnimation = null;
        const Nv = dv.animate([{
          transform: "scaleX(0)"
        }, {
          transform: "scaleX(1)"
        }], {
          duration: Sv,
          fill: "forwards"
        });
        pv.timed = {
          xv: ev,
          horizBarRemOffset: gv,
          animation: Nv
        }
      })), (0, pv.g)("middleScreenBarRemove", (() => {
        mS(Pv.current)
      })), (0, hv.useEffect)((() => {
        const hv = Pv.current;
        let Sv = Number.NaN,
          ev = Number.NaN,
          gv = Number.NaN;
        return (0, wh.s)((() => {
          var Pv, pv, dv, Nv;
          const lv = vv.current,
            Tv = zv.current;
          if (!lv || !Tv) return;
          null !== (Pv = hv.timed) && void 0 !== Pv && Pv.xv && "finished" === hv.timed.animation.playState && mS(hv), null === (pv = hv.endedAnimation) || void 0 === pv || pv.cancel(), hv.endedAnimation = null;
          let wv = hv.timed ? 1 : 0;
          if (!hv.timed) {
            const vv = Wv.gameBridge.lookup("momentumFrac", null);
            wv = vv > 0 ? 1 : 0, vv !== gv && (gv = vv, Tv.style.transform = `scaleX(${vv})`)
          }
          const av = null !== (dv = null === (Nv = hv.timed) || void 0 === Nv ? void 0 : Nv.horizBarRemOffset) && void 0 !== dv ? dv : 0;
          av === Sv && wv === ev || (Sv = av, ev = wv, lv.style.transform = `translateX(calc(-50% + ${av}rem)) scaleX(${wv})`)
        }))
      }), []), (0, Nv.jsx)("div", {
        className: "MiddleScreenBar",
        ref: vv,
        children: (0, Nv.jsx)("div", {
          className: "MiddleScreenBarFill",
          ref: zv
        })
      })
    }));
    var fS = Pv(4444),
      FS = Pv(2572);

    function YS() {
      const {
        t: vv
      } = (0, Vv.x)(), zv = (0, pv.j)("serverUpdating", null), Pv = (0, FS.e)(250, null !== zv);
      return null === zv || Pv - zv > 3e4 ? null : (0, Nv.jsxs)("div", {
        className: "UpdateCountdownBanner",
        children: [(0, Nv.jsx)("div", {
          className: "UpdateCountdownBannerTitle",
          children: vv("updateWaiting:updatingIn", {
            countdown: (0, fS.n)(zv - Pv)
          })
        }), (0, Nv.jsx)("div", {
          children: vv("updateWaiting:bringYouBack")
        })]
      })
    }
    var nS = Pv(36427),
      OS = Pv(1934);
    const DS = [{
        translationKey: "general:interact"
      }],
      KS = (0, hv.memo)((function() {
        const vv = (0, Gv.i)("crosshairText"),
          {
            interactPrompt: zv,
            blockText: Pv,
            neededTool: Sv
          } = (0, Fv.h)("crosshairTarget"),
          {
            isTouchScreen: ev
          } = (0, Yv.i)(["isTouchScreen"]),
          gv = (0, Ov.m)(),
          lv = (0, Kv.d)("alt-fire");
        (0, hv.useEffect)((() => {
          Wv.gameBridge.send("setCrosshairInteractPrompt", !ev || gv ? "key" : "touch")
        }), [ev, gv]);
        const [Tv, wv] = (0, hv.useReducer)((vv => vv + 1), 0);
        (0, pv.g)("customBindingsChanged", wv);
        var av;
        if (null !== zv && (gv && null !== lv || !ev && null !== (0, OS.t)("alt-fire"))) return (0, Nv.jsxs)("div", {
          className: "CrosshairText SmallTextBold InteractPrompt",
          children: [(0, Nv.jsx)(nv.e, {
            noaAction: "alt-fire"
          }), (0, Nv.jsx)(dv.c, {
            text: null !== (av = zv.label) && void 0 !== av ? av : DS
          })]
        });
        let sv = null;
        return null !== Pv ? sv = Pv : null !== vv && "" !== vv ? sv = vv : null !== Sv && (sv = [{
          icon: Sv,
          style: {
            opacity: .8
          }
        }, {
          str: " needed",
          style: {
            opacity: .8
          }
        }]), sv ? (0, Nv.jsx)("div", {
          className: "CrosshairText SmallTextBold",
          children: (0, Nv.jsx)(dv.c, {
            text: sv
          })
        }) : null
      }));
    var VS = Pv(2420);
    const US = (0, hv.memo)((function() {
      var vv;
      const {
        interactPrompt: zv
      } = (0, Fv.h)("crosshairTarget"), {
        openInGameMenuName: Pv,
        openEverythingMenuName: hv
      } = (0, Yv.i)(["openInGameMenuName", "openEverythingMenuName"]), Sv = (0, pv.j)("aimingOverlay", "none"), ev = (0, ov.l)(), gv = (0, VS.d)();
      return null === zv || null !== Pv || null !== hv || "sniper" === Sv || ev || gv ? null : (0, Nv.jsx)(RS, {
        label: null !== (vv = zv.label) && void 0 !== vv ? vv : DS
      })
    }));

    function RS(vv) {
      let {
        label: zv
      } = vv;
      const Pv = Kz(kv.b.Interact, !1);
      return (0, hv.useEffect)((() => (mv.j.zC(sz.x), () => {
        mv.j.zC(sz.x)
      })), []), (0, Nv.jsx)("div", {
        ref: Pv,
        className: "TouchInteractHit",
        children: (0, Nv.jsxs)("div", {
          className: "TouchInteractKey",
          children: [(0, Nv.jsx)("span", {
            className: "TouchInteractIcon",
            children: (0, Nv.jsx)(Qv.b, {
              name: "hand-back-point-up"
            })
          }), (0, Nv.jsx)(dv.c, {
            text: zv
          })]
        })
      })
    }
    var xS = Pv(4512),
      tS = Pv(4574);
    const qS = (0, hv.forwardRef)((function(vv, zv) {
        let {
          text: Pv,
          className: hv,
          children: Sv
        } = vv;
        return Pv.hasText ? (0, Nv.jsx)("div", {
          ref: zv,
          className: ev()("HudTextPanel", hv, {
            NoBackground: !Pv.showBackground
          }),
          children: null !== Sv && void 0 !== Sv ? Sv : (0, Nv.jsx)(dv.c, {
            text: Pv.content
          })
        }) : null
      })),
      IS = (0, hv.memo)((function() {
        const vv = (0, Gv.m)("middleTextTop"),
          [zv, Pv] = (0, hv.useState)(null),
          Sv = (0, fh.q)(zv);
        return vv.hasText ? (0, Nv.jsx)("div", {
          className: ev()("MiddleTextTopContainer", {
            MiddleTextTopBelow: Sv
          }),
          children: (0, Nv.jsx)(qS, {
            ref: Pv,
            className: "MiddleTextTop",
            text: vv
          })
        }) : null
      })),
      QS = (0, hv.memo)((function() {
        const vv = (0, Gv.c)();
        return (0, Nv.jsx)(Nv.Fragment, {
          children: vv.map(((vv, zv) => (0, Nv.jsx)(qS, {
            className: "HeaderChip",
            text: vv
          }, zv)))
        })
      }));
    var ZS = Pv(3385),
      AS = Pv(4367);
    const LS = (0, hv.memo)((function() {
      const {
        t: vv
      } = (0, Vv.x)(), [zv, Pv] = (0, hv.useState)(!1), Sv = (0, hv.useRef)(!1), ev = function(vv) {
        let {
          gameNameWithVariation: zv,
          lobbyName: Pv
        } = vv;
        if ((0, TS.l)(zv)) return HS;
        if ((0, WS.N)(Pv)) return MS;
        return null
      }((0, Fv.h)("connectedGame"));
      if (!ev || zv) return null;
      const gv = AS.b[ev.target];
      return (0, Nv.jsx)(Iv.h, {
        tooltipInner: (0, Nv.jsx)("div", {
          children: vv(gv.reportButtonTooltip)
        }),
        children: (0, Nv.jsx)("div", {
          children: (0, Nv.jsx)(OP.I, {
            onClick: () => {
              Sv.current || (Sv.current = !0, (0, AS.f)(ev.reportPolicyIds, gv).then((vv => {
                null !== vv && void 0 !== vv && vv.selectedPolicyId && (Wv.gameBridge.send("reportLobbyOrGame", {
                  target: ev.target,
                  ug: vv.selectedPolicyId,
                  details: vv.vp
                }), Pv(!0))
              })).finally((() => {
                Sv.current = !1
              })))
            }
          })
        })
      })
    }));
    const HS = {
        target: "customGame",
        reportPolicyIds: ZS.e
      },
      MS = {
        target: "lobby",
        reportPolicyIds: ZS.g
      };
    var yS = Pv(8484),
      BS = Pv(36448),
      JS = Pv(36456),
      ES = Pv(36460),
      oS = Pv(36467),
      bS = Pv(36498);

    function rS(vv) {
      return vv instanceof Error && kS.has(vv.message) ? vv.message : void 0
    }
    const kS = new Set([bS.c.saveBusy.text, bS.c.saveClosed.text, bS.c.cropBusy.text]);
    let XS = !1;
    async function uS(vv, zv) {
      var Pv, hv;
      const {
        files: Sv
      } = zv, ev = Sv.replayKey();
      if (null === ev) return "none";
      if (XS) throw new Error(bS.c.saveBusy.text);
      const gv = null !== (Pv = null === (hv = Sv.saveRefusal) || void 0 === hv ? void 0 : hv.call(Sv)) && void 0 !== Pv ? Pv : null;
      if (null !== gv) throw new Error(gv);
      XS = !0;
      try {
        return await async function(vv, zv, Pv) {
          const {
            files: hv
          } = zv, Sv = () => hv.replayKey() === Pv, ev = (vv, zv) => {
            Sv() && hv.markSaved(vv, zv)
          };
          let gv = null;
          if (zv.pickerSupported()) {
            try {
              if (gv = await zv.chooseFile(vv ? null : hv.fileHandle()), null === gv) return "ev"
            } catch (dv) {
              zv.onFallback(dv)
            }
            if (!Sv()) throw new Error(bS.c.saveClosed.text)
          }
          const pv = await hv.encode();
          if (null === pv) {
            if (null !== gv) throw new Error(bS.c.saveClosed.text);
            return "none"
          }
          if (null !== gv) try {
            return await zv.write(gv, pv), ev(gv), "written"
          } catch (dv) {
            zv.onFallback(dv)
          }
          return ev(null, zv.download(pv)), "downloaded"
        }(vv, zv, ev)
      } finally {
        XS = !1
      }
    }
    var ve = Pv(4292),
      ze = Pv(62);
    const Pe = [1, 2, 4, 8, 16, 32, 64];

    function he(vv, zv) {
      return Math.max(0, Math.min(vv, zv))
    }

    function Se(vv, zv, Pv) {
      return Pv <= zv ? 0 : (vv - zv) / (Pv - zv) * 100
    }

    function ee(vv, zv, Pv) {
      const hv = Pv - zv;
      return Math.round(zv + vv / 100 * hv)
    }

    function ge(vv, zv) {
      const Pv = Math.floor(vv / zv / 60),
        hv = Math.floor(vv / zv % 60),
        Sv = vv % zv;
      return `${Pv.toString().padStart(2,"0")}:${hv.toString().padStart(2,"0")}:${Sv.toString().padStart(2,"0")}`
    }

    function pe(vv) {
      return Number.isInteger(vv) || Pe.includes(vv) ? `${Math.round(vv)}\xd7` : `${vv.toFixed(1)}\xd7`
    }

    function de(vv, zv) {
      const Pv = Pe.indexOf(vv);
      if (-1 !== Pv) return "in" === zv ? Pe[Math.min(Pv + 1, Pe.length - 1)] : Pe[Math.max(Pv - 1, 0)];
      if ("in" === zv) {
        for (const zv of Pe)
          if (zv >= vv) return zv;
        return vv
      }
      for (let hv = Pe.length - 1; hv >= 0; hv--)
        if (Pe[hv] <= vv) return Pe[hv];
      return Pe[0]
    }

    function Ne(vv, zv) {
      const Pv = zv.getBoundingClientRect();
      if (Pv.width <= 0) return 0;
      const hv = (vv - Pv.left) / Pv.width * 100;
      return Math.max(0, Math.min(100, hv))
    }

    function le(vv, zv) {
      return zv <= 0 ? 0 : vv / zv * 100
    }

    function Te(vv, zv, Pv) {
      const hv = [];
      let Sv = Math.ceil(vv / Pv) * Pv;
      for (; Sv <= zv;) hv.push(Sv), Sv += Pv;
      return hv
    }
    var We = Pv(36506);
    const we = [{
        label: "Linear",
        easing: We.h
      }, {
        label: "Ease",
        easing: [.25, .1, .25, 1]
      }, {
        label: "Ease In",
        easing: We.f
      }, {
        label: "Ease Out",
        easing: We.g
      }, {
        label: "Ease In Out",
        easing: We.e
      }],
      ae = 200,
      se = 150;

    function Ce(vv) {
      const zv = vv => Number(vv.toFixed(3)).toString();
      return `cubic-bezier(${zv(vv[0])}, ${zv(vv[1])}, ${zv(vv[2])}, ${zv(vv[3])})`
    }

    function ie(vv, zv) {
      return {
        cx: 25 + vv * se,
        cy: 25 + (1 - zv) * se
      }
    }

    function ce(vv, zv, Pv) {
      const hv = vv - Pv.left,
        Sv = zv - Pv.top;
      return {
        x: IP.d.clamp((hv - 25) / se, 0, 1),
        y: IP.d.clamp(1 - (Sv - 25) / se, -1, 2)
      }
    }

    function Ge(vv, zv, Pv, hv, Sv) {
      return {
        x: (0, We.p)(vv, Pv, Sv),
        y: (0, We.p)(zv, hv, Sv)
      }
    }
    const me = (0, hv.memo)((function(vv) {
      let {
        value: zv,
        onChange: Pv
      } = vv;
      const Sv = (0, hv.useRef)(null),
        ev = (0, hv.useRef)(null),
        [gv, pv] = (0, hv.useState)(null),
        dv = (0, hv.useCallback)((() => {
          const vv = Sv.current;
          if (!vv) return;
          const Pv = vv.getContext("2d");
          if (!Pv) return;
          const hv = window.devicePixelRatio || 1;
          vv.width = ae * hv, vv.height = ae * hv, Pv.setTransform(hv, 0, 0, hv, 0, 0), Pv.clearRect(0, 0, ae, ae), Pv.fillStyle = "rgba(38, 52, 93, 0.85)", Pv.fillRect(0, 0, ae, ae), Pv.beginPath();
          const ev = ie(0, 0),
            pv = ie(1, 1);
          Pv.moveTo(ev.cx, ev.cy), Pv.lineTo(pv.cx, pv.cy), Pv.strokeStyle = "rgba(164, 164, 164, 0.35)", Pv.setLineDash([3, 3]), Pv.stroke(), Pv.setLineDash([]);
          const [dv, Nv, lv, Tv] = zv, Wv = ie(dv, Nv), wv = ie(lv, Tv);
          Pv.strokeStyle = "rgba(252, 211, 115, 0.55)", Pv.lineWidth = 1.5, Pv.beginPath(), Pv.moveTo(ev.cx, ev.cy), Pv.lineTo(Wv.cx, Wv.cy), Pv.moveTo(pv.cx, pv.cy), Pv.lineTo(wv.cx, wv.cy), Pv.stroke(), Pv.strokeStyle = "#fcd373", Pv.lineWidth = 2, Pv.beginPath();
          for (let zv = 0; zv <= 50; zv++) {
            const vv = Ge(dv, Nv, lv, Tv, zv / 50),
              hv = ie(vv.x, vv.y);
            0 === zv ? Pv.moveTo(hv.cx, hv.cy) : Pv.lineTo(hv.cx, hv.cy)
          }
          Pv.stroke();
          const av = (vv, zv, hv) => {
            Pv.beginPath(), Pv.arc(vv, zv, hv ? 6 : 5, 0, 2 * Math.PI), Pv.fillStyle = hv ? "#ffb914" : "#fcd373", Pv.fill(), Pv.strokeStyle = "#1a1f2e", Pv.lineWidth = 1.5, Pv.stroke()
          };
          av(Wv.cx, Wv.cy, "p1" === gv), av(wv.cx, wv.cy, "p2" === gv)
        }), [gv, zv]);
      (0, hv.useEffect)((() => {
        dv()
      }), [dv]);
      const lv = (0, hv.useCallback)(((vv, hv) => {
          const gv = Sv.current,
            pv = ev.current;
          if (!gv || !pv) return;
          const dv = gv.getBoundingClientRect(),
            {
              x: Nv,
              y: lv
            } = ce(vv, hv, dv);
          Pv("p1" === pv ? [Nv, lv, zv[2], zv[3]] : [zv[0], zv[1], Nv, lv])
        }), [Pv, zv]),
        Tv = (0, hv.useCallback)((vv => {
          const Pv = Sv.current;
          if (!Pv) return;
          const hv = Pv.getBoundingClientRect();
          let {
            x: gv,
            y: dv
          } = ce(vv.clientX, vv.clientY, hv);
          gv = IP.d.clamp(gv, 0, 1), dv = IP.d.clamp(dv, 0, 1);
          const [Nv, Tv, Wv, wv] = zv.map((vv => IP.d.clamp(vv, 0, 1))), av = Math.hypot(gv - Nv, dv - Tv), sv = Math.hypot(gv - Wv, dv - wv), Cv = av <= sv ? "p1" : "p2";
          ("p1" === Cv ? av : sv) > .12 || (ev.current = Cv, pv(Cv), Pv.setPointerCapture(vv.pointerId), lv(vv.clientX, vv.clientY))
        }), [lv, zv]),
        Wv = (0, hv.useCallback)((vv => {
          ev.current && lv(vv.clientX, vv.clientY)
        }), [lv]),
        wv = (0, hv.useCallback)((vv => {
          ev.current = null, pv(null), vv.currentTarget.hasPointerCapture(vv.pointerId) && vv.currentTarget.releasePointerCapture(vv.pointerId)
        }), []);
      return (0, Nv.jsxs)("div", {
        className: "CubicBezierEasingEditor",
        children: [(0, Nv.jsx)("canvas", {
          ref: Sv,
          className: "CubicBezierEasingEditorCanvas",
          style: {
            width: ae,
            height: ae
          },
          onPointerDown: Tv,
          onPointerMove: Wv,
          onPointerUp: wv,
          onPointerCancel: wv
        }), (0, Nv.jsx)("span", {
          className: "CubicBezierEasingEditorReadout",
          children: Ce(zv)
        })]
      })
    }));
    var je = Pv(1652),
      fe = Pv(1630);
    const Fe = 12;

    function Ye(vv) {
      return {
        left: vv.left + vv.width / 2,
        top: vv.top - 8
      }
    }

    function ne(vv, zv) {
      const [Pv, Sv] = (0, hv.useState)(null);
      return (0, hv.useLayoutEffect)((() => {
        const Pv = vv.current;
        if (!Pv) return;
        const {
          width: hv,
          height: ev
        } = Pv.getBoundingClientRect();
        Sv(function(vv, zv, Pv) {
          const hv = window.innerWidth,
            Sv = window.innerHeight,
            ev = zv / 2;
          let gv = vv.left + vv.width / 2;
          gv = Math.max(Fe + ev, Math.min(gv, hv - Fe - ev));
          const pv = vv.top - 8 - Fe,
            dv = Sv - vv.bottom - 8 - Fe,
            Nv = pv < Pv && dv >= pv;
          let lv;
          Nv ? (lv = vv.bottom + 8, lv + Pv > Sv - Fe && (lv = Sv - Fe - Pv), lv = Math.max(Fe, lv)) : (lv = vv.top - 8, lv - Pv < Fe && (lv = Fe + Pv));
          return {
            left: gv,
            top: lv,
            placeBelow: Nv
          }
        }(zv, hv, ev))
      }), [zv, vv]), Pv
    }

    function Oe(vv, zv, Pv) {
      (0, hv.useEffect)((() => (0, fe.b)("pointerdown", (hv => {
        var Sv, ev;
        const gv = hv.target;
        gv instanceof Node && (null !== (Sv = vv.current) && void 0 !== Sv && Sv.contains(gv) || null !== Pv && void 0 !== Pv && null !== (ev = Pv.current) && void 0 !== ev && ev.contains(gv) || (0, je.m)(gv) || zv())
      }))), [Pv, zv, vv])
    }

    function De(vv) {
      let {
        label: zv,
        value: Pv,
        onChange: hv
      } = vv;
      return (0, Nv.jsxs)("div", {
        className: "ReplayKeyframePopoverVec3",
        children: [(0, Nv.jsx)("span", {
          className: "ReplayKeyframePopoverVec3Label",
          children: zv
        }), (0, Nv.jsx)("div", {
          className: "ReplayKeyframePopoverVec3Inputs",
          children: ["X", "Y", "Z"].map(((vv, zv) => (0, Nv.jsxs)("label", {
            className: "ReplayKeyframePopoverAxis",
            children: [(0, Nv.jsx)("span", {
              children: vv
            }), (0, Nv.jsx)("input", {
              type: "number",
              step: "any",
              value: Pv[zv],
              onChange: vv => {
                const Sv = Number.parseFloat(vv.target.value);
                if (Number.isNaN(Sv)) return;
                const ev = [Pv[0], Pv[1], Pv[2]];
                ev[zv] = Sv, hv(ev)
              }
            })]
          }, vv)))
        })]
      })
    }
    const Ke = (0, hv.memo)((function(vv) {
        var zv, Pv, Sv;
        let {
          keyframe: gv,
          anchor: pv,
          hasOutgoingSegment: dv,
          onClose: lv,
          onApply: Tv,
          onDelete: Wv,
          onUseCurrentCamera: wv
        } = vv;
        const av = (0, hv.useRef)(null),
          sv = ne(av, pv.rect),
          [Cv, iv] = (0, hv.useState)((() => [gv.position[0], gv.position[1], gv.position[2]])),
          [cv, Gv] = (0, hv.useState)((() => [gv.direction[0], gv.direction[1], gv.direction[2]])),
          [mv, jv] = (0, hv.useState)((() => gv.easing));
        (0, hv.useEffect)((() => {
          iv([gv.position[0], gv.position[1], gv.position[2]]), Gv([gv.direction[0], gv.direction[1], gv.direction[2]]), jv(gv.easing)
        }), [gv]), Oe(av, lv);
        const fv = (0, hv.useCallback)((() => {
            Tv({
              MT: gv.MT,
              position: Cv,
              direction: cv,
              easing: mv
            }), lv()
          }), [cv, mv, gv.MT, Tv, lv, Cv]),
          Fv = (0, hv.useCallback)((() => {
            Wv(gv.MT), lv()
          }), [gv.MT, Wv, lv]),
          Yv = (0, hv.useCallback)((() => {
            const vv = wv();
            vv && (iv([vv.position[0], vv.position[1], vv.position[2]]), Gv([vv.direction[0], vv.direction[1], vv.direction[2]]))
          }), [wv]),
          nv = Ye(pv.rect);
        return (0, Nv.jsxs)("div", {
          ref: av,
          className: ev()("ReplayViewerPopover ReplayKeyframePopover", {
            Below: null !== (zv = null === sv || void 0 === sv ? void 0 : sv.placeBelow) && void 0 !== zv && zv,
            Positioned: null !== sv
          }),
          style: {
            left: `${null!==(Pv=null===sv||void 0===sv?void 0:sv.left)&&void 0!==Pv?Pv:nv.left}px`,
            top: `${null!==(Sv=null===sv||void 0===sv?void 0:sv.top)&&void 0!==Sv?Sv:nv.top}px`
          },
          onPointerDown: vv => {
            vv.stopPropagation()
          },
          children: [(0, Nv.jsxs)("div", {
            className: "ReplayKeyframePopoverHeader",
            children: [(0, Nv.jsx)("span", {
              className: "ReplayKeyframePopoverTitle",
              children: "Camera keyframe"
            }), (0, Nv.jsxs)("span", {
              className: "ReplayKeyframePopoverTick",
              children: ["Tick ", pv.MT]
            })]
          }), (0, Nv.jsx)(De, {
            label: "Position",
            value: Cv,
            onChange: iv
          }), (0, Nv.jsx)(De, {
            label: "Direction",
            value: cv,
            onChange: Gv
          }), dv && (0, Nv.jsxs)("div", {
            className: "ReplayKeyframePopoverEasing",
            children: [(0, Nv.jsx)("span", {
              className: "ReplayKeyframePopoverEasingLabel",
              children: "Easing to next"
            }), (0, Nv.jsx)("div", {
              className: "ReplayKeyframePopoverEasingPresets",
              children: we.map((vv => {
                const zv = (Pv = mv, hv = vv.easing, Pv[0] === hv[0] && Pv[1] === hv[1] && Pv[2] === hv[2] && Pv[3] === hv[3]);
                var Pv, hv;
                return (0, Nv.jsx)(OP.K, {
                  className: ev()("ReplayKeyframePopoverPreset", {
                    Active: zv
                  }),
                  onClick: () => {
                    jv(vv.easing)
                  },
                  children: vv.label
                }, vv.label)
              }))
            }), (0, Nv.jsx)(me, {
              value: mv,
              onChange: jv
            })]
          }), (0, Nv.jsxs)("div", {
            className: "ReplayKeyframePopoverActions",
            children: [(0, Nv.jsx)(OP.d, {
              className: "ReplayViewerCompactButton",
              onClick: Yv,
              children: "Use current view"
            }), (0, Nv.jsx)(OP.j, {
              className: "ReplayViewerCompactButton",
              onClick: fv,
              children: "Apply"
            }), (0, Nv.jsx)(OP.A, {
              className: "ReplayViewerCompactButton",
              onClick: Fv,
              children: "Delete"
            })]
          })]
        })
      })),
      Ve = (0, hv.memo)((function(vv) {
        var zv, Pv, Sv;
        let {
          anchor: gv,
          hasPlaybackMark: pv,
          onClose: dv,
          onMark: lv,
          onZoom: Tv,
          onCrop: Wv,
          onDeleteKeyframes: wv,
          onClearMark: av
        } = vv;
        const sv = (0, hv.useRef)(null),
          Cv = ne(sv, gv.rect),
          iv = Ye(gv.rect),
          cv = {
            startTick: gv.startTick,
            endTick: gv.endTick
          },
          Gv = gv.endTick > gv.startTick;
        return Oe(sv, dv), (0, Nv.jsx)("div", {
          ref: sv,
          className: ev()("ReplayViewerPopover ReplayTimelineSelectionPopover", {
            Below: null !== (zv = null === Cv || void 0 === Cv ? void 0 : Cv.placeBelow) && void 0 !== zv && zv,
            Positioned: null !== Cv
          }),
          style: {
            left: `${null!==(Pv=null===Cv||void 0===Cv?void 0:Cv.left)&&void 0!==Pv?Pv:iv.left}px`,
            top: `${null!==(Sv=null===Cv||void 0===Cv?void 0:Cv.top)&&void 0!==Sv?Sv:iv.top}px`
          },
          onPointerDown: vv => {
            vv.stopPropagation()
          },
          children: (0, Nv.jsxs)("div", {
            className: "ReplayTimelineSelectionPopoverActions",
            children: [(0, Nv.jsx)(OP.j, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                lv(cv)
              },
              disabled: !Gv,
              children: (0, Nv.jsx)("span", {
                children: " Play range "
              })
            }), (0, Nv.jsx)(OP.d, {
              className: "ReplayViewerActionButton",
              onClick: () => {
                Tv(cv)
              },
              children: (0, Nv.jsx)("span", {
                children: " Zoom "
              })
            }), (0, Nv.jsx)(OP.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                Wv(cv)
              },
              disabled: !Gv,
              children: (0, Nv.jsx)("span", {
                children: " Crop "
              })
            }), (0, Nv.jsx)(OP.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                wv(cv)
              },
              children: (0, Nv.jsx)("span", {
                children: " Delete all keyframes "
              })
            }), pv && (0, Nv.jsx)(OP.K, {
              className: "ReplayViewerActionButton Quiet",
              onClick: () => {
                av()
              },
              children: (0, Nv.jsx)("span", {
                children: " Clear range "
              })
            })]
          })
        })
      })),
      Ue = (0, hv.memo)((function(vv) {
        var zv, Pv;
        let {
          maxTick: Sv,
          displayTick: gv,
          ZD: pv,
          cameraKeyframes: dv,
          playbackMark: lv,
          onSeek: Tv,
          onPause: Wv,
          onScrubTickChange: wv,
          onMoveCameraKeyframe: av,
          onUpdateCameraKeyframe: sv,
          onDeleteCameraKeyframe: Cv,
          onUseCurrentCamera: iv,
          onMarkRange: cv,
          onCropRange: Gv,
          onDeleteKeyframesInRange: mv,
          onClearMark: jv,
          zoomLevel: fv,
          onZoomLevelChange: Fv
        } = vv;
        const Yv = (0, hv.useRef)(null),
          nv = (0, hv.useRef)(null),
          Ov = (0, hv.useRef)(!1),
          Dv = (0, hv.useRef)(!1),
          Kv = (0, hv.useRef)(fv),
          Vv = (0, hv.useRef)(null),
          Uv = (0, hv.useRef)(null),
          Rv = (0, hv.useRef)(null),
          xv = (0, hv.useRef)(null),
          [tv, qv] = (0, hv.useState)(null),
          [Iv, Qv] = (0, hv.useState)(gv),
          [Zv, Av] = (0, hv.useState)(null),
          [Lv, Hv] = (0, hv.useState)(null),
          [Mv, yv] = (0, hv.useState)(null),
          [Bv, Jv] = (0, hv.useState)(null),
          Ev = (0, hv.useMemo)((() => dv.map((vv => vv.MT))), [dv]),
          ov = null !== tv && void 0 !== tv ? tv : gv,
          {
            viewStart: bv,
            viewEnd: rv
          } = (0, hv.useMemo)((() => function(vv) {
            const zv = vv.maxTick + 1,
              Pv = Math.max(1, Math.ceil(zv / vv.zoomLevel)),
              hv = Math.floor(Pv / 2);
            let Sv = vv.centerTick - hv;
            return Sv = Math.max(0, Math.min(Sv, vv.maxTick - Pv + 1)), {
              viewStart: Sv,
              viewEnd: Math.min(vv.maxTick, Sv + Pv - 1)
            }
          }({
            maxTick: Sv,
            zoomLevel: fv,
            centerTick: Iv
          })), [Sv, fv, Iv]);
        (0, hv.useEffect)((() => {
          if (null !== tv || null !== Uv.current || null !== Rv.current || null !== xv.current) return;
          if (Ov.current) return void(Ov.current = !1);
          if (Dv.current) return void(Dv.current = !1);
          const vv = Kv.current !== fv;
          Kv.current = fv, vv && Qv(gv)
        }), [fv, gv, tv]);
        const kv = (0, hv.useCallback)((vv => {
            let zv = he(vv, Sv);
            return lv && (zv = Math.max(lv.inTick, Math.min(zv, lv.outTick))), zv
          }), [Sv, lv]),
          Xv = (0, hv.useCallback)(((vv, zv) => {
            const Pv = kv(vv);
            Tv(Pv), zv && Qv(Pv)
          }), [kv, Tv]),
          uv = (0, hv.useCallback)(((vv, zv) => {
            const Pv = kv(vv);
            qv(Pv), wv(Pv), Xv(Pv, zv)
          }), [kv, Xv, wv]),
          vz = (0, hv.useCallback)((() => {
            qv((vv => (null !== vv && Qv(vv), null))), wv(null)
          }), [wv]),
          zz = (0, hv.useCallback)((() => {
            yv(null), Jv(null)
          }), []),
          Pz = (0, hv.useCallback)((vv => {
            const zv = Yv.current;
            if (!zv) return 0;
            return he(ee(Ne(vv, zv), bv, rv), Sv)
          }), [Sv, rv, bv]),
          hz = (0, hv.useCallback)((vv => {
            const zv = nv.current;
            if (!zv) return 0;
            return he(ee(Ne(vv, zv), 0, Sv), Sv)
          }), [Sv]),
          Sz = (0, hv.useMemo)((() => {
            if (!Zv) return [...Ev];
            const vv = Ev.filter((vv => vv !== Zv.fromTick));
            return vv.push(Zv.previewTick), vv.sort(((vv, zv) => vv - zv)), vv
          }), [Ev, Zv]),
          ez = (0, hv.useMemo)((() => {
            var vv;
            return Lv && null !== (vv = dv.find((vv => vv.MT === Lv.MT))) && void 0 !== vv ? vv : null
          }), [dv, Lv]),
          gz = (0, hv.useMemo)((() => !!ez && dv.some((vv => vv.MT > ez.MT))), [dv, ez]);
        (0, hv.useEffect)((() => {
          Lv && !ez && Hv(null)
        }), [Lv, ez]), (0, hv.useEffect)((() => {
          if (!Bv) return () => {};
          const vv = vv => {
            "Escape" === vv.key && zz()
          };
          return window.addEventListener("keydown", vv), () => {
            window.removeEventListener("keydown", vv)
          }
        }), [zz, Bv]);
        const pz = (0, hv.useCallback)(((vv, zv) => {
            zz(), Wv(), Tv(vv, {
              ignorePlaybackMark: !0
            }), Hv({
              MT: vv,
              rect: zv.getBoundingClientRect()
            })
          }), [zz, Wv, Tv]),
          dz = (0, hv.useCallback)(((vv, zv) => Pv => {
            0 === Pv.button && (Pv.stopPropagation(), Hv(null), zz(), Wv(), Vv.current = {
              fromTick: vv,
              startX: Pv.clientX,
              startY: Pv.clientY,
              didDrag: !1,
              track: zv
            }, Av({
              fromTick: vv,
              previewTick: vv,
              track: zv
            }), Pv.currentTarget.setPointerCapture(Pv.pointerId))
          }), [zz, Wv]),
          Nz = (0, hv.useCallback)((vv => {
            if (!Zv) return;
            vv.stopPropagation();
            const zv = Vv.current;
            if (zv && !zv.didDrag) {
              const Pv = vv.clientX - zv.startX,
                hv = vv.clientY - zv.startY;
              Math.hypot(Pv, hv) > 5 && (zv.didDrag = !0)
            }
            const Pv = "detail" === Zv.track ? Pz(vv.clientX) : hz(vv.clientX);
            Pv !== Zv.previewTick && Av({
              ...Zv,
              previewTick: Pv
            })
          }), [Zv, Pz, hz]),
          lz = (0, hv.useCallback)((vv => {
            if (!Zv) return;
            vv.stopPropagation();
            const zv = Vv.current,
              Pv = "detail" === Zv.track ? Pz(vv.clientX) : hz(vv.clientX);
            zv && !zv.didDrag ? pz(zv.fromTick, vv.currentTarget) : Pv !== Zv.fromTick && av(Zv.fromTick, Pv), Av(null), Vv.current = null, vv.currentTarget.releasePointerCapture(vv.pointerId)
          }), [Zv, av, pz, Pz, hz]),
          Tz = (0, hv.useCallback)((vv => {
            if (0 !== vv.button) return;
            Hv(null), Wv();
            const zv = Pz(vv.clientX);
            Uv.current = {
              pointerId: vv.pointerId,
              startX: vv.clientX,
              startY: vv.clientY,
              startTick: zv,
              currentTick: zv,
              didSelect: !1
            }, yv(null), Jv(null), vv.currentTarget.setPointerCapture(vv.pointerId)
          }), [Wv, Pz]),
          Wz = (0, hv.useCallback)((vv => {
            const zv = Uv.current;
            if (!zv || zv.pointerId !== vv.pointerId) return;
            const Pv = Pz(vv.clientX);
            if (zv.currentTick = Pv, !zv.didSelect) {
              const Pv = vv.clientX - zv.startX,
                hv = vv.clientY - zv.startY;
              if (Math.hypot(Pv, hv) <= 5) return;
              zv.didSelect = !0
            }
            const hv = Math.min(zv.startTick, Pv),
              Sv = Math.max(zv.startTick, Pv);
            yv({
              startTick: hv,
              endTick: Sv
            })
          }), [Pz]),
          wz = (0, hv.useCallback)((vv => {
            const zv = Uv.current;
            if (!zv || zv.pointerId !== vv.pointerId) return;
            if (Uv.current = null, vv.currentTarget.releasePointerCapture(vv.pointerId), !zv.didSelect) return zz(), void Xv(zv.startTick, !0);
            const Pv = Pz(vv.clientX),
              hv = Math.min(zv.startTick, Pv),
              Sv = Math.max(zv.startTick, Pv),
              ev = {
                startTick: hv,
                endTick: Sv
              };
            yv(ev);
            const gv = Yv.current;
            if (!gv) return;
            const pv = gv.getBoundingClientRect(),
              dv = Se(hv, bv, rv) / 100,
              Nv = Se(Sv, bv, rv) / 100,
              lv = pv.left + dv * pv.width,
              Tv = pv.left + Nv * pv.width;
            Jv({
              ...ev,
              rect: new DOMRect(lv, pv.top, Math.max(Tv - lv, 1), pv.height)
            })
          }), [zz, Xv, Pz, rv, bv]),
          az = (0, hv.useCallback)((vv => zv => {
            if (0 !== zv.button) return;
            zv.stopPropagation(), Hv(null), zz(), Wv(), Rv.current = {
              pointerId: zv.pointerId,
              track: vv
            }, zv.currentTarget.setPointerCapture(zv.pointerId);
            const Pv = "detail" === vv ? Pz(zv.clientX) : hz(zv.clientX);
            uv(Pv, !1)
          }), [zz, Wv, uv, Pz, hz]),
          sz = (0, hv.useCallback)((vv => {
            const zv = Rv.current;
            if (!zv || zv.pointerId !== vv.pointerId) return;
            vv.stopPropagation();
            const Pv = "detail" === zv.track ? Pz(vv.clientX) : hz(vv.clientX);
            uv(Pv, !1)
          }), [uv, Pz, hz]),
          Cz = (0, hv.useCallback)((vv => {
            const zv = Rv.current;
            zv && zv.pointerId === vv.pointerId && (vv.stopPropagation(), Rv.current = null, vv.currentTarget.releasePointerCapture(vv.pointerId), vz())
          }), [vz]),
          iz = (0, hv.useCallback)((vv => {
            0 === vv.button && (zz(), Wv(), xv.current = {
              pointerId: vv.pointerId
            }, vv.currentTarget.setPointerCapture(vv.pointerId), uv(hz(vv.clientX), !0))
          }), [zz, Wv, uv, hz]),
          cz = (0, hv.useCallback)((vv => {
            const zv = xv.current;
            zv && zv.pointerId === vv.pointerId && uv(hz(vv.clientX), !0)
          }), [uv, hz]),
          Gz = (0, hv.useCallback)((vv => {
            const zv = xv.current;
            zv && zv.pointerId === vv.pointerId && (xv.current = null, vv.currentTarget.releasePointerCapture(vv.pointerId), vz())
          }), [vz]),
          mz = (0, hv.useCallback)((vv => {
            const zv = Math.max(1, vv.endTick - vv.startTick + 1),
              Pv = Sv + 1,
              hv = Pv / zv,
              ev = Math.max(1, Math.ceil(Pv / hv)),
              gv = vv.startTick + Math.floor((ev - 1) / 2);
            Dv.current = !0, Kv.current = hv, Qv(he(gv, Sv)), Fv(hv), zz()
          }), [zz, Sv, Fv]),
          jz = (0, hv.useCallback)((vv => {
            cv(vv), zz()
          }), [zz, cv]),
          fz = (0, hv.useCallback)((vv => {
            Gv(vv), zz()
          }), [zz, Gv]),
          Fz = (0, hv.useCallback)((vv => {
            mv(vv), zz()
          }), [zz, mv]),
          Yz = (0, hv.useCallback)((() => {
            jv(), zz()
          }), [zz, jv]);
        (0, hv.useEffect)((() => {
          const vv = Yv.current;
          if (!vv) return () => {};
          const zv = zv => {
            zv.preventDefault();
            const Pv = he(ee(Ne(zv.clientX, vv), bv, rv), Sv),
              hv = zv.deltaY < 0 ? "in" : "out",
              ev = de(fv, hv);
            ev !== fv && (Ov.current = !0, Qv(Pv), Fv(ev))
          };
          return vv.addEventListener("wheel", zv, {
            passive: !1
          }), () => {
            vv.removeEventListener("wheel", zv)
          }
        }), [Sv, Fv, rv, bv, fv]);
        const nz = Se(ov, bv, rv),
          Oz = le(ov, Sv),
          Dz = le(bv, Sv),
          Kz = Sv > 0 ? le(rv, Sv) : 100,
          Vz = null !== lv,
          Uz = null !== (zv = null === lv || void 0 === lv ? void 0 : lv.inTick) && void 0 !== zv ? zv : 0,
          Rz = null !== (Pv = null === lv || void 0 === lv ? void 0 : lv.outTick) && void 0 !== Pv ? Pv : Sv,
          xz = le(Uz, Sv),
          tz = Math.max(le(Rz, Sv) - xz, 0),
          qz = Se(Math.max(Uz, bv), bv, rv),
          Iz = Se(Math.min(Rz, rv), bv, rv),
          Qz = Math.max(Iz - qz, 0),
          Zz = Vz && Rz >= bv && Uz <= rv,
          Az = Se(Uz, bv, rv),
          Lz = Se(Rz, bv, rv),
          Hz = Vz && Uz >= bv && Uz <= rv,
          Mz = Vz && Rz >= bv && Rz <= rv,
          yz = le(Uz, Sv),
          Bz = le(Rz, Sv),
          Jz = null !== Mv && void 0 !== Mv ? Mv : Bv ? {
            startTick: Bv.startTick,
            endTick: Bv.endTick
          } : null,
          Ez = Jz ? Se(Math.max(Jz.startTick, bv), bv, rv) : 0,
          oz = Jz ? Se(Math.min(Jz.endTick, rv), bv, rv) : 0,
          bz = Math.max(oz - Ez, 0),
          rz = null !== Jz && Jz.endTick >= bv && Jz.startTick <= rv,
          kz = (0, hv.useMemo)((() => Te(0, Sv, pv)), [Sv, pv]),
          Xz = (0, hv.useMemo)((() => Te(bv, rv, pv)), [bv, rv, pv]),
          uz = (0, hv.useMemo)((() => Sz.filter((vv => vv >= bv && vv <= rv))), [Sz, rv, bv]),
          vP = (0, hv.useCallback)(((vv, zv, Pv) => {
            const hv = "detail" === zv ? Se(vv, bv, rv) : le(vv, Sv),
              gv = null !== Zv && Pv === Zv.fromTick,
              pv = null !== Lv && Lv.MT === Pv;
            return (0, Nv.jsx)("button", {
              type: "button",
              className: ev()("ReplayTimelineCameraKeyframeMarker", "detail" === zv ? "Detail" : "Overview", {
                Dragging: gv,
                Selected: pv
              }),
              style: {
                left: `${hv}%`
              },
              onPointerDown: dz(Pv, zv),
              onPointerMove: Nz,
              onPointerUp: lz,
              onPointerCancel: lz,
              "aria-label": `Camera keyframe at tick ${Pv}`
            }, `cam-${zv}-${Pv}`)
          }), [dz, Lv, lz, Zv, Sv, Nz, rv, bv]),
          zP = (0, hv.useCallback)((vv => Zv && vv === Zv.previewTick ? Zv.fromTick : vv), [Zv]);
        return Sv <= 0 ? null : (0, Nv.jsxs)("div", {
          className: "ReplayTimeline",
          children: [Lv && ez && (0, ze.createPortal)((0, Nv.jsx)(Ke, {
            keyframe: ez,
            anchor: Lv,
            hasOutgoingSegment: gz,
            onClose: () => {
              Hv(null)
            },
            onApply: sv,
            onDelete: Cv,
            onUseCurrentCamera: iv
          }), document.body), Bv && (0, ze.createPortal)((0, Nv.jsx)(Ve, {
            anchor: Bv,
            hasPlaybackMark: Vz,
            onClose: zz,
            onMark: jz,
            onZoom: mz,
            onCrop: fz,
            onDeleteKeyframes: Fz,
            onClearMark: Yz
          }), document.body), (0, Nv.jsxs)("div", {
            className: ev()("ReplayTimelineOverviewSection", {
              Hidden: fv <= 1
            }),
            children: [(0, Nv.jsx)("div", {
              className: "ReplayTimelineSectionLabel",
              children: "Overview"
            }), (0, Nv.jsxs)("div", {
              ref: nv,
              className: "ReplayTimelineOverviewTrack",
              onPointerDown: iz,
              onPointerMove: cz,
              onPointerUp: Gz,
              onPointerCancel: Gz,
              role: "slider",
              "aria-label": "Recording overview",
              "aria-valuemin": 0,
              "aria-valuemax": Sv,
              "aria-valuenow": ov,
              tabIndex: 0,
              children: [kz.map((vv => {
                const zv = le(vv, Sv);
                return (0, Nv.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Overview",
                  style: {
                    left: `${zv}%`
                  }
                }, vv)
              })), Vz && (0, Nv.jsxs)(Nv.Fragment, {
                children: [(0, Nv.jsx)("div", {
                  className: "ReplayTimelineMarkRegion Overview",
                  style: {
                    left: `${xz}%`,
                    width: `${tz}%`
                  }
                }), (0, Nv.jsx)("div", {
                  className: "ReplayTimelineMarkMarker In Overview",
                  style: {
                    left: `${yz}%`
                  },
                  "aria-hidden": !0
                }), (0, Nv.jsx)("div", {
                  className: "ReplayTimelineMarkMarker Out Overview",
                  style: {
                    left: `${Bz}%`
                  },
                  "aria-hidden": !0
                })]
              }), Sz.map((vv => vP(vv, "overview", zP(vv)))), (0, Nv.jsx)("div", {
                className: "ReplayTimelineViewport",
                style: {
                  left: `${Dz}%`,
                  width: `${Math.max(Kz-Dz,.5)}%`
                }
              }), (0, Nv.jsx)("button", {
                type: "button",
                className: ev()("ReplayTimelinePlayhead Overview", {
                  Scrubbing: null !== tv
                }),
                style: {
                  left: `${Oz}%`
                },
                onPointerDown: az("overview"),
                onPointerMove: sz,
                onPointerUp: Cz,
                onPointerCancel: Cz,
                "aria-label": "Scrub playhead"
              })]
            })]
          }), (0, Nv.jsxs)("div", {
            className: "ReplayTimelineDetailSection",
            children: [(0, Nv.jsxs)("div", {
              className: "ReplayTimelineDetailHeader",
              children: [(0, Nv.jsx)("span", {
                className: "ReplayTimelineSectionLabel",
                children: "Timeline"
              }), (0, Nv.jsxs)("span", {
                className: "ReplayTimelineDetailRange",
                children: [ge(bv, pv), " \u2013 ", ge(rv, pv), fv > 1 && (0, Nv.jsx)("span", {
                  className: "ReplayTimelineZoomBadge",
                  children: pe(fv)
                })]
              })]
            }), (0, Nv.jsxs)("div", {
              ref: Yv,
              className: "ReplayTimelineDetailTrack",
              onPointerDown: Tz,
              onPointerMove: Wz,
              onPointerUp: wz,
              onPointerCancel: wz,
              role: "slider",
              "aria-label": "Recording timeline",
              "aria-valuemin": bv,
              "aria-valuemax": rv,
              "aria-valuenow": ov,
              tabIndex: 0,
              children: [Xz.map((vv => {
                const zv = Se(vv, bv, rv);
                return (0, Nv.jsx)("div", {
                  className: "ReplayTimelineSecondMarker Detail",
                  style: {
                    left: `${zv}%`
                  }
                }, vv)
              })), Zz && (0, Nv.jsx)("div", {
                className: "ReplayTimelineMarkRegion Detail",
                style: {
                  left: `${qz}%`,
                  width: `${Qz}%`
                }
              }), Hz && (0, Nv.jsx)("div", {
                className: "ReplayTimelineMarkMarker In Detail",
                style: {
                  left: `${Az}%`
                },
                "aria-label": `Play range start at tick ${Uz}`
              }), Mz && (0, Nv.jsx)("div", {
                className: "ReplayTimelineMarkMarker Out Detail",
                style: {
                  left: `${Lz}%`
                },
                "aria-label": `Play range end at tick ${Rz}`
              }), rz && Jz && (0, Nv.jsx)("div", {
                className: "ReplayTimelineSelectionRegion Detail",
                style: {
                  left: `${Ez}%`,
                  width: `${bz}%`
                }
              }), uz.map((vv => vP(vv, "detail", zP(vv)))), (0, Nv.jsx)("button", {
                type: "button",
                className: ev()("ReplayTimelinePlayhead Detail", {
                  Scrubbing: null !== tv
                }),
                style: {
                  left: `${nz}%`
                },
                onPointerDown: az("detail"),
                onPointerMove: sz,
                onPointerUp: Cz,
                onPointerCancel: Cz,
                "aria-label": "Scrub playhead"
              })]
            }), (0, Nv.jsxs)("div", {
              className: "ReplayTimelineWheelHint",
              children: [(0, Nv.jsx)("span", {
                className: "Select",
                children: "Drag timeline to select"
              }), " \xb7 Scroll to zoom \xb7 Drag playhead to scrub"]
            })]
          })]
        })
      })),
      Re = (0, hv.memo)((function(vv) {
        let {
          enabled: zv
        } = vv;
        const Pv = (0, hv.useRef)(!1),
          Sv = (0, hv.useRef)(null),
          [gv, pv] = (0, hv.useState)(!1),
          dv = (0, hv.useCallback)((vv => {
            zv && 0 === vv.button && (Pv.current = !0, pv(!0), Sv.current = {
              x: vv.clientX,
              y: vv.clientY
            }, vv.currentTarget.setPointerCapture(vv.pointerId))
          }), [zv]),
          lv = (0, hv.useCallback)((vv => {
            if (!zv || !Pv.current || !Sv.current) return;
            const hv = vv.clientX - Sv.current.x,
              ev = vv.clientY - Sv.current.y;
            Sv.current = {
              x: vv.clientX,
              y: vv.clientY
            }, Wv.gameBridge.send("dragReplayCamera", {
              dx: hv,
              dy: ev
            })
          }), [zv]),
          Tv = (0, hv.useCallback)((vv => {
            Pv.current && (Pv.current = !1, pv(!1), Sv.current = null, vv.currentTarget.releasePointerCapture(vv.pointerId))
          }), []);
        return zv ? (0, Nv.jsx)("div", {
          className: ev()("ReplayViewerCameraDragSurface", {
            Dragging: gv
          }),
          onPointerDown: dv,
          onPointerMove: lv,
          onPointerUp: Tv,
          onPointerCancel: Tv,
          "aria-hidden": !0
        }) : null
      }));
    var xe = Pv(36512),
      te = Pv(36515);
    const qe = (0, hv.memo)((function(vv) {
        var zv, Pv, Sv;
        let {
          anchorRect: gv,
          anchorRef: dv,
          onClose: lv
        } = vv;
        const Tv = (0, hv.useRef)(null),
          Wv = ne(Tv, gv),
          [wv, av] = (0, hv.useState)(te.e),
          sv = (0, hv.useMemo)((() => Object.values(wv).every((vv => vv))), [wv]);
        (0, pv.g)("replayViewer|uiVisibilityChanged", (() => {
          av((0, te.e)())
        })), Oe(Tv, lv, dv);
        const Cv = (0, hv.useCallback)(((vv, zv) => {
            (0, te.l)(vv, zv), av((0, te.e)())
          }), []),
          iv = (0, hv.useCallback)((vv => {
            for (const {
                group: zv
              }
              of xe.e)(0, te.l)(zv, vv);
            av((0, te.e)())
          }), []),
          cv = Ye(gv);
        return (0, ze.createPortal)((0, Nv.jsxs)("div", {
          ref: Tv,
          className: ev()("ReplayViewerPopover ReplayUiVisibilityPopover", {
            Below: null !== (zv = null === Wv || void 0 === Wv ? void 0 : Wv.placeBelow) && void 0 !== zv && zv,
            Positioned: null !== Wv
          }),
          style: {
            left: `${null!==(Pv=null===Wv||void 0===Wv?void 0:Wv.left)&&void 0!==Pv?Pv:cv.left}px`,
            top: `${null!==(Sv=null===Wv||void 0===Wv?void 0:Wv.top)&&void 0!==Sv?Sv:cv.top}px`
          },
          onPointerDown: vv => {
            vv.stopPropagation()
          },
          children: [(0, Nv.jsx)("div", {
            className: "ReplayUiVisibilityPopoverHeader",
            children: (0, Nv.jsx)("span", {
              className: "ReplayUiVisibilityPopoverTitle",
              children: "UI visibility"
            })
          }), (0, Nv.jsxs)("div", {
            className: "ReplayUiVisibilityPopoverChecks",
            children: [(0, Nv.jsxs)("div", {
              className: "ReplayUiVisibilityPopoverCheck",
              children: [(0, Nv.jsx)("input", {
                type: "checkbox",
                checked: sv,
                onChange: vv => {
                  iv(vv.target.checked)
                }
              }), (0, Nv.jsx)("span", {
                children: "SELECT ALL"
              })]
            }), xe.e.map((vv => {
              let {
                group: zv,
                label: Pv
              } = vv;
              return (0, Nv.jsxs)("label", {
                className: "ReplayUiVisibilityPopoverCheck",
                children: [(0, Nv.jsx)("input", {
                  type: "checkbox",
                  checked: wv[zv],
                  onChange: vv => {
                    Cv(zv, vv.target.checked)
                  }
                }), (0, Nv.jsx)("span", {
                  children: Pv
                })]
              }, zv)
            }))]
          })]
        }), document.body)
      })),
      Ie = (0, hv.memo)((function(vv) {
        let {
          disabled: zv
        } = vv;
        const Pv = (0, hv.useRef)(null),
          [Sv, ev] = (0, hv.useState)(!1),
          [gv, pv] = (0, hv.useState)(null),
          dv = (0, hv.useCallback)((() => {
            Pv.current && (pv(Pv.current.getBoundingClientRect()), ev((vv => !vv)))
          }), []),
          lv = (0, hv.useCallback)((() => {
            ev(!1)
          }), []);
        return (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("div", {
            ref: Pv,
            children: (0, Nv.jsx)(OP.d, {
              className: "ReplayViewerActionButton",
              onClick: dv,
              disabled: zv,
              children: (0, Nv.jsx)("span", {
                children: "Hide UI elements"
              })
            })
          }), Sv && gv && (0, Nv.jsx)(qe, {
            anchorRect: gv,
            anchorRef: Pv,
            onClose: lv
          })]
        })
      })),
      Qe = ["freeCamUp", "freeCamDown"];

    function Ze(vv, zv) {
      Wv.gameBridge.send("holdReplayFreecamVertical", {
        action: vv,
        Vp: zv
      })
    }
    const Ae = (0, hv.memo)((function() {
        (0, hv.useEffect)((() => () => {
          ! function() {
            Wv.gameBridge.send("moveReplayFreecam", null);
            for (const vv of Qe) Ze(vv, !1)
          }()
        }), []);
        const vv = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("moveReplayFreecam", vv)
          }), []),
          zv = (0, hv.useCallback)((vv => ({
            onTouchStart: zv => {
              zv.preventDefault(), zv.stopPropagation(), Ze(vv, !0)
            },
            onTouchEnd: zv => {
              zv.preventDefault(), zv.stopPropagation(), Ze(vv, !1)
            },
            onTouchCancel: zv => {
              zv.preventDefault(), zv.stopPropagation(), Ze(vv, !1)
            }
          })), []);
        return (0, Nv.jsxs)("div", {
          className: "ReplayFreecamTouchControls",
          children: [(0, Nv.jsx)("div", {
            className: "ReplayFreecamJoystickWrap",
            children: (0, Nv.jsx)(Yz, {
              onMove: vv,
              mode: "pinned"
            })
          }), (0, Nv.jsxs)("div", {
            className: "ReplayFreecamVerticalButtons",
            children: [(0, Nv.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam up",
              ...zv("freeCamUp"),
              children: (0, Nv.jsx)(Qv.b, {
                name: "angle-up",
                className: "ReplayFreecamVerticalIcon"
              })
            }), (0, Nv.jsx)("button", {
              type: "button",
              className: "ReplayFreecamVerticalButton",
              "aria-label": "Freecam down",
              ...zv("freeCamDown"),
              children: (0, Nv.jsx)(Qv.b, {
                name: "angle-down",
                className: "ReplayFreecamVerticalIcon"
              })
            })]
          })]
        })
      })),
      Le = [],
      He = (0, hv.memo)((function() {
        const vv = (0, ov.l)();
        return (0, Fv.d)("replayViewerRequested", (vv => {
          (0, ov.i)("toggle" === vv ? !(0, ov.f)() : "open" === vv)
        })), vv ? (0, Nv.jsx)(Me, {}) : null
      })),
      Me = (0, hv.memo)((function() {
        var vv, zv, Pv, Sv, gv, pv, dv, lv, Tv, wv, av, sv;
        const Cv = hv.useRef(null),
          [iv, cv] = (0, hv.useState)(null),
          [Gv, mv] = (0, hv.useState)(1),
          [jv, fv] = (0, hv.useState)(null),
          [Ov, Dv] = (0, hv.useState)(!1),
          {
            isTouchScreen: Kv
          } = (0, Yv.i)(["isTouchScreen"]),
          Vv = (0, Fv.h)("replay"),
          Uv = (0, Fv.h)("replayEdits"),
          Rv = null !== Vv,
          xv = null !== (vv = null === Vv || void 0 === Vv ? void 0 : Vv.MT) && void 0 !== vv ? vv : 0,
          tv = null !== (zv = null === Vv || void 0 === Vv ? void 0 : Vv.totalTicks) && void 0 !== zv ? zv : 0,
          qv = Math.max(0, tv - 1),
          Zv = null !== (Pv = null === Vv || void 0 === Vv ? void 0 : Vv.playing) && void 0 !== Pv && Pv,
          Av = null !== (Sv = null === Vv || void 0 === Vv ? void 0 : Vv.speed) && void 0 !== Sv ? Sv : 1,
          Lv = null !== (gv = null === Vv || void 0 === Vv ? void 0 : Vv.ZD) && void 0 !== gv ? gv : 20,
          Hv = null !== jv && void 0 !== jv ? jv : xv,
          Mv = null !== (pv = null === Vv || void 0 === Vv ? void 0 : Vv.freecam) && void 0 !== pv && pv,
          yv = null !== (dv = null === Vv || void 0 === Vv ? void 0 : Vv.cameraMode) && void 0 !== dv ? dv : "recording",
          Bv = null !== (lv = null === Uv || void 0 === Uv ? void 0 : Uv.cameraKeyframes) && void 0 !== lv ? lv : Le,
          Jv = null !== (Tv = null === Uv || void 0 === Uv ? void 0 : Uv.playbackMark) && void 0 !== Tv ? Tv : null,
          Ev = null !== (wv = null === Uv || void 0 === Uv ? void 0 : Uv.fileName) && void 0 !== wv ? wv : null,
          bv = null !== (av = null === Uv || void 0 === Uv ? void 0 : Uv.unsavedChanges) && void 0 !== av && av,
          rv = null !== (sv = null === Uv || void 0 === Uv ? void 0 : Uv.suggestSaveAs) && void 0 !== sv && sv,
          kv = (0, Fv.h)("replayVideoExporting"),
          Xv = !kv && Rv && ("freecam" === yv || ("recording" === yv || "keyframe" === yv) && !Zv),
          uv = Kv && Rv && "freecam" === yv && !kv && !Ov;
        (0, ve.e)(!0, !0, "ReplayViewerOverlay"), (0, hv.useEffect)((() => {
          Wv.gameBridge.send("syncReplayCameraMode", null)
        }), [Mv]);
        const vz = (0, hv.useCallback)(((vv, zv) => {
            Wv.gameBridge.send("seekReplay", {
              MT: vv,
              ignorePlaybackMark: null === zv || void 0 === zv ? void 0 : zv.ignorePlaybackMark
            })
          }), []),
          zz = (0, hv.useCallback)((() => {
            Wv.gameBridge.send("setReplayPlaying", !1)
          }), []),
          Pz = (0, hv.useCallback)(((vv, zv) => {
            Wv.gameBridge.send("moveReplayCameraKeyframe", {
              from: vv,
              to: zv
            })
          }), []),
          hz = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("setReplayCameraKeyframe", vv)
          }), []),
          Sz = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("deleteReplayCameraKeyframes", {
              start: vv,
              end: vv
            })
          }), []),
          ez = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("deleteReplayCameraKeyframes", {
              start: vv.startTick,
              end: vv.endTick
            })
          }), []),
          gz = (0, hv.useCallback)((() => Wv.gameBridge.lookup("replayCamera", null)), []),
          pz = (0, hv.useCallback)((vv => {
            fv(vv)
          }), []),
          dz = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("setReplayPlaybackMark", {
              inTick: vv.startTick,
              outTick: vv.endTick
            })
          }), []),
          Nz = (0, hv.useCallback)((() => {
            Wv.gameBridge.send("setReplayPlaybackMark", null)
          }), []),
          lz = (0, hv.useCallback)((vv => {
            const zv = Wv.gameBridge.latest("replay");
            if (null === zv || vv.endTick <= vv.startTick) return;
            const Pv = vv.startTick,
              hv = vv.endTick;
            rh.NotificationProvider.showPromptPopup({
              title: "Crop recording to the selected range? This cannot be undone.",
              confirmText: "Crop",
              destructive: !0,
              cancelText: "Cancel"
            }).getResult().then((vv => {
              var Sv;
              if (!0 !== vv) return;
              if ((null === (Sv = Wv.gameBridge.latest("replay")) || void 0 === Sv ? void 0 : Sv.id) !== zv.id) return;
              Wv.gameBridge.send("cropReplay", {
                start: Pv,
                end: hv
              }) && (fv(null), mv(1))
            }))
          }), []),
          Tz = (0, hv.useCallback)(((vv, zv) => {
            cv(null), mv(1), fv(null), (0, BS.c)().open(vv, zv).catch((vv => {
              console.error(vv), cv(vv instanceof Error ? vv.message : "Failed to parse recording")
            }))
          }), []),
          Wz = (0, hv.useCallback)(((vv, zv) => {
            null !== Wv.gameBridge.latest("connectedGame").websocketUrl ? rh.NotificationProvider.showPromptPopup({
              title: "Leave current game and play recording?",
              confirmText: "Yes",
              cancelText: "No"
            }).getResult().then((Pv => {
              !0 === Pv && Tz(vv, zv)
            })) : Tz(vv, zv)
          }), [Tz]),
          wz = (0, hv.useCallback)((vv => {
            var zv;
            const Pv = null === (zv = vv.target.files) || void 0 === zv ? void 0 : zv[0];
            if (vv.target.value = "", !Pv) return;
            const hv = new FileReader;
            hv.onload = () => {
              Wz(new Uint8Array(hv.result), {
                fileName: Pv.name
              })
            }, hv.onerror = () => {
              cv("Failed to read file")
            }, hv.readAsArrayBuffer(Pv)
          }), [Wz]),
          az = (0, hv.useCallback)((() => {
            const vv = () => {
              var vv;
              null === (vv = Cv.current) || void 0 === vv || vv.click()
            };
            (0, oS.n)() ? (0, oS.g)().then((vv => {
              vv && Wz(vv.bytes, {
                fileHandle: vv.handle
              })
            })).catch((zv => {
              console.error(zv), vv()
            })): vv()
          }), [Wz]),
          sz = (0, hv.useCallback)((async function() {
            let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            let zv;
            try {
              zv = await uS(vv, {
                files: (0, BS.c)(),
                pickerSupported: oS.n,
                chooseFile: oS.c,
                write: oS.p,
                download: ES.e,
                onFallback: console.error
              })
            } catch (Pv) {
              return void(vv => {
                console.error(vv), rh.NotificationProvider.showAlertPopup({
                  title: "Failed to save recording",
                  subtitle: rS(vv),
                  confirmText: "OK"
                })
              })(Pv)
            }
            "written" !== zv && "downloaded" !== zv || (() => {
              const vv = rh.NotificationProvider.showAlertPopup({
                title: "Recording saved",
                disableBackground: !0
              });
              setTimeout((() => {
                vv.tearDownNotification()
              }), 1e3)
            })()
          }), []),
          Cz = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("replayAction", vv)
          }), []),
          iz = (0, hv.useCallback)((vv => {
            mv((zv => de(zv, vv)))
          }), []),
          cz = (0, hv.useCallback)((vv => {
            if (!Wv.gameBridge.latest("replayVideoExporting")) switch (vv) {
              case "replayLoad":
                az();
                break;
              case "replaySave":
                sz(!1);
                break;
              case "replaySaveAs":
                sz(!0);
                break;
              case "replayTimelineZoomIn":
                iz("in");
                break;
              case "replayTimelineZoomOut":
                iz("out")
            }
          }), [az, sz, iz]);
        (0, Fv.d)("replayUiActionRequested", cz);
        const Gz = (0, hv.useCallback)((vv => {
            Wv.gameBridge.send("setReplayCameraMode", vv)
          }), []),
          mz = Rv ? OP.d : OP.j,
          jz = bv && !rv ? OP.j : OP.d,
          fz = bv && rv ? OP.j : OP.d;
        return (0, Nv.jsxs)("div", {
          className: "ReplayViewerOverlay",
          children: [(0, Nv.jsx)(Re, {
            enabled: Xv
          }), uv && (0, Nv.jsx)(Ae, {}), (0, Nv.jsx)("input", {
            ref: Cv,
            type: "file",
            accept: ES.b,
            className: "ReplayViewerFileInput",
            onChange: wz
          }), (0, Nv.jsxs)("div", {
            className: ev()("ReplayViewerBar", {
              Collapsed: Ov
            }),
            children: [(0, Nv.jsx)("button", {
              type: "button",
              className: "ReplayViewerCollapseTab",
              onClick: () => {
                Ov ? Dv(!1) : Rv ? Dv(!0) : (0, ov.b)()
              },
              "aria-expanded": !Ov,
              "aria-label": Ov ? "Expand replay viewer" : "Collapse replay viewer",
              children: (0, Nv.jsx)(Qv.b, {
                name: Ov ? "angle-up" : "angle-down"
              })
            }), !Ov && (0, Nv.jsxs)("div", {
              className: "ReplayViewerBarBody",
              children: [Rv && tv > 0 && (0, Nv.jsx)(Ue, {
                maxTick: qv,
                displayTick: Hv,
                ZD: Lv,
                cameraKeyframes: Bv,
                playbackMark: Jv,
                onSeek: vz,
                onPause: zz,
                onScrubTickChange: pz,
                onMoveCameraKeyframe: Pz,
                onUpdateCameraKeyframe: hz,
                onDeleteCameraKeyframe: Sz,
                onUseCurrentCamera: gz,
                onMarkRange: dz,
                onCropRange: lz,
                onDeleteKeyframesInRange: ez,
                onClearMark: Nz,
                zoomLevel: Gv,
                onZoomLevelChange: mv
              }, qv), (0, Nv.jsxs)("div", {
                className: "ReplayViewerControls",
                children: [(0, Nv.jsxs)("div", {
                  className: "ReplayViewerControlsLeftSide",
                  children: [(0, Nv.jsxs)("div", {
                    className: "ReplayViewerControlsGroup FileGroup",
                    children: [Rv && (0, Nv.jsxs)("div", {
                      className: "ReplayViewerFileName",
                      children: [null !== Ev && void 0 !== Ev ? Ev : "Unsaved recording", bv ? " *" : ""]
                    }), (0, Nv.jsxs)(mz, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        cz("replayLoad")
                      },
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replayLoad",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Load "
                      })]
                    }), (0, Nv.jsxs)(OP.d, {
                      className: "ReplayViewerActionButton",
                      onClick: ov.b,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replayViewerOpen",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Hide "
                      })]
                    }), (0, Nv.jsxs)(jz, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        cz("replaySave")
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replaySave",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Save "
                      })]
                    }), (0, Nv.jsxs)(OP.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wv.gameBridge.send("leaveGame", {
                          reloadPath: "/"
                        })
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replayExit",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Exit "
                      })]
                    }), (0, Nv.jsxs)(fz, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        cz("replaySaveAs")
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replaySaveAs",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Save As "
                      })]
                    }), (0, Nv.jsxs)(OP.d, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Wv.gameBridge.send("exportReplayVideo", null)
                      },
                      disabled: !Rv || 0 === tv || kv,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replayExportVideo",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Export "
                      })]
                    })]
                  }), (0, Nv.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Nv.jsxs)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: [(0, Nv.jsx)("span", {
                        children: " Camera Mode "
                      }), (0, Nv.jsx)(nv.e, {
                        noaAction: "replayChangeCameraMode",
                        padHidesKey: !0
                      })]
                    }), (0, Nv.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody CameraModes",
                      children: [(0, Nv.jsx)(Iv.h, {
                        tooltipInner: (0, Nv.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Replicate how the camera was set when recorded."
                        }),
                        children: (0, Nv.jsxs)(OP.K, {
                          className: "ReplayViewerModeButton",
                          active: "recording" === yv,
                          onClick: () => {
                            Gz("recording")
                          },
                          disabled: !Rv,
                          children: ["Recorded ", (0, Nv.jsx)(Qv.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Nv.jsx)(Iv.h, {
                        tooltipInner: (0, Nv.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Move the camera freely around."
                        }),
                        children: (0, Nv.jsxs)(OP.K, {
                          className: "ReplayViewerModeButton",
                          active: "freecam" === yv,
                          onClick: () => {
                            Gz("freecam")
                          },
                          disabled: !Rv,
                          children: ["Free ", (0, Nv.jsx)(Qv.b, {
                            name: "circle-info"
                          })]
                        })
                      }), (0, Nv.jsx)(Iv.h, {
                        tooltipInner: (0, Nv.jsx)("div", {
                          className: "ReplayTooltip",
                          children: "Display the replay in real time using keyframes."
                        }),
                        children: (0, Nv.jsxs)(OP.K, {
                          className: "ReplayViewerModeButton",
                          active: "keyframe" === yv,
                          onClick: () => {
                            Gz("keyframe")
                          },
                          disabled: !Rv,
                          children: ["Preview ", (0, Nv.jsx)(Qv.b, {
                            name: "circle-info"
                          })]
                        })
                      })]
                    })]
                  })]
                }), (0, Nv.jsxs)("div", {
                  className: "ReplayViewerControlsGroup TimeGroup",
                  children: [(0, Nv.jsxs)("div", {
                    className: "ReplayViewerTimecodeContainer",
                    children: [(0, Nv.jsxs)("span", {
                      className: "ReplayViewerTimecode",
                      children: [(0, Nv.jsx)("span", {
                        className: "ReplayViewerTimecodeNow",
                        children: ge(Hv, Lv)
                      }), (0, Nv.jsx)("span", {
                        className: "ReplayViewerTimecodeDivider",
                        children: "/"
                      }), (0, Nv.jsx)("span", {
                        className: "ReplayViewerTimecodeTotal",
                        children: ge(qv, Lv)
                      })]
                    }), (0, Nv.jsxs)("span", {
                      className: "ReplayViewerTickLabel",
                      children: ["Tick ", Hv, " / ", qv]
                    })]
                  }), (0, Nv.jsxs)("div", {
                    className: "ReplayViewerTimecodeControls",
                    children: [(0, Nv.jsxs)(OP.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Cz("replaySkipBack")
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsxs)("span", {
                        children: [" ", (0, Nv.jsx)(Qv.b, {
                          name: "clock-rotate-left"
                        }), " 1s"]
                      }), (0, Nv.jsx)(nv.e, {
                        noaAction: "replaySkipBack",
                        padHidesKey: !0
                      })]
                    }), (0, Nv.jsxs)(OP.j, {
                      className: "ReplayViewerMediaButton PlayButton",
                      onClick: () => {
                        Wv.gameBridge.send("setReplayPlaying", !Zv)
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsxs)("span", {
                        children: [" ", Zv ? (0, Nv.jsx)(Qv.b, {
                          name: "pause"
                        }) : (0, Nv.jsx)(Qv.b, {
                          name: "play"
                        }), " "]
                      }), (0, Nv.jsx)(nv.e, {
                        noaAction: "replayPlayPause",
                        padHidesKey: !0
                      })]
                    }), (0, Nv.jsxs)(OP.d, {
                      className: "ReplayViewerMediaButton SkipButton",
                      onClick: () => {
                        Cz("replaySkipForward")
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsxs)("span", {
                        children: [" ", (0, Nv.jsx)(Qv.b, {
                          name: "rotate-forward"
                        }), " 1s"]
                      }), (0, Nv.jsx)(nv.e, {
                        noaAction: "replaySkipForward",
                        padHidesKey: !0
                      })]
                    })]
                  })]
                }), (0, Nv.jsxs)("div", {
                  className: "ReplayViewerControlsRightSide",
                  children: [(0, Nv.jsxs)("div", {
                    className: "ReplayViewerControlsGroup RecordKeyframeGroup",
                    children: [(0, Nv.jsxs)(OP.j, {
                      className: "ReplayViewerActionButton",
                      onClick: () => {
                        Cz("replayRecordKeyframe")
                      },
                      disabled: !Rv,
                      children: [(0, Nv.jsx)(nv.e, {
                        noaAction: "replayRecordKeyframe",
                        padHidesKey: !0
                      }), (0, Nv.jsx)("span", {
                        children: " Record keyframe "
                      })]
                    }), (0, Nv.jsx)(Ie, {
                      disabled: !Rv
                    }), Jv && (0, Nv.jsx)(OP.K, {
                      className: "ReplayViewerActionButton",
                      onClick: Nz,
                      disabled: !Rv,
                      children: (0, Nv.jsx)("span", {
                        children: " Clear range "
                      })
                    })]
                  }), (0, Nv.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Nv.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Speed"
                    }), (0, Nv.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Nv.jsx)(OP.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Cz("replaySpeedDown")
                        },
                        disabled: !Rv || (0, JS.f)(Av),
                        children: (0, Nv.jsx)("span", {
                          children: " \u2212 "
                        })
                      }), (0, Nv.jsxs)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: [Av, "\xd7"]
                      }), (0, Nv.jsx)(OP.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          Cz("replaySpeedUp")
                        },
                        disabled: !Rv || (0, JS.c)(Av),
                        children: (0, Nv.jsx)("span", {
                          children: " + "
                        })
                      })]
                    })]
                  }), (0, Nv.jsxs)("div", {
                    className: "ReplayViewerControlBox",
                    children: [(0, Nv.jsx)("span", {
                      className: "ReplayViewerControlBoxLabel",
                      children: "Timeline Zoom"
                    }), (0, Nv.jsxs)("div", {
                      className: "ReplayViewerControlBoxBody",
                      children: [(0, Nv.jsxs)(OP.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          cz("replayTimelineZoomOut")
                        },
                        disabled: !Rv || Gv <= Pe[0],
                        children: [(0, Nv.jsx)("span", {
                          children: " \u2212 "
                        }), (0, Nv.jsx)(nv.e, {
                          noaAction: "replayTimelineZoomOut",
                          padHidesKey: !0
                        })]
                      }), (0, Nv.jsx)("span", {
                        className: "ReplayViewerControlBoxValue",
                        children: pe(Gv)
                      }), (0, Nv.jsxs)(OP.d, {
                        className: "ReplayViewerMediaButton Compact",
                        onClick: () => {
                          cz("replayTimelineZoomIn")
                        },
                        disabled: !Rv || Gv >= Pe[Pe.length - 1],
                        children: [(0, Nv.jsx)("span", {
                          children: " + "
                        }), (0, Nv.jsx)(nv.e, {
                          noaAction: "replayTimelineZoomIn",
                          padHidesKey: !0
                        })]
                      })]
                    })]
                  })]
                })]
              }), (0, Nv.jsx)("div", {
                className: "ReplayViewerEmptyState",
                children: !Rv && "Load a recording to begin playback"
              }), iv && (0, Nv.jsx)("div", {
                className: "ReplayViewerError",
                children: iv
              })]
            })]
          })]
        })
      }));
    var ye = Pv(1306);

    function Be() {
      const [, vv] = (0, hv.useState)(0);
      return (0, pv.g)("replayViewer|uiVisibilityChanged", (() => {
          vv((vv => vv + 1))
        })), (0, pv.g)("replayViewer|replayLoaded", (() => {
          vv((vv => vv + 1))
        })),
        function() {
          if (!(0, ye.g)()) return {};
          const vv = {
              [xe.c]: "true"
            },
            zv = (0, te.e)();
          for (const {
              group: Pv,
              dataAttr: hv
            }
            of xe.e) hv && !zv[Pv] && (vv[hv] = "true");
          return vv
        }()
    }
    var Je = Pv(8991),
      Ee = Pv(2004),
      oe = Pv(8433),
      be = Pv(8424),
      re = Pv(2013);
    const ke = (0, hv.memo)((function() {
      var vv, zv, Pv;
      const Sv = (0, Gv.i)("customButtons");
      (0, hv.useEffect)((() => Sv ? (Wv.gameBridge.send("bindCustomButtonKeys", Sv.filter(oe.e).map((vv => {
        let {
          id: zv,
          keycode: Pv
        } = vv;
        return {
          id: zv,
          keycode: Pv
        }
      }))), () => {
        Wv.gameBridge.send("bindCustomButtonKeys", [])
      }) : () => {}), [Sv]);
      const ev = null !== (vv = null === Sv || void 0 === Sv ? void 0 : Sv.filter(oe.e)) && void 0 !== vv ? vv : [],
        gv = (0, be.j)(),
        pv = null !== (zv = null === (Pv = (0, re.d)()) || void 0 === Pv ? void 0 : Pv.hideButtonHints) && void 0 !== zv && zv,
        dv = "customButton" !== (null === gv || void 0 === gv ? void 0 : gv.kind) || pv ? null : gv.id,
        lv = ev.length > 0,
        Tv = (0, hv.useRef)(null);
      return (0, hv.useLayoutEffect)((() => {
        if (!lv) return () => {};
        const vv = Tv.current,
          zv = vv.closest(".InGameUi"),
          Pv = () => {
            zv.style.setProperty("--custom-buttons-top", `${vv.offsetTop}px`)
          };
        Pv();
        const hv = new ResizeObserver(Pv);
        return hv.observe(vv), hv.observe(vv.parentElement), () => {
          hv.disconnect(), zv.style.removeProperty("--custom-buttons-top")
        }
      }), [lv]), (0, Nv.jsx)("div", {
        ref: Tv,
        className: "" + ((0, wS.isMobile)() ? "CustomIconsMobile" : "CustomIcons"),
        children: ev.map((vv => {
          var zv, Pv;
          return (0, Nv.jsx)(Xe, {
            button: vv,
            padGlyph: vv.id === dv && null !== (zv = null === (Pv = (0, Hv.f)()) || void 0 === Pv ? void 0 : Pv.getBoundButton("actionButton")) && void 0 !== zv ? zv : null
          }, vv.id)
        }))
      })
    }));

    function Xe(vv) {
      let {
        button: zv,
        padGlyph: Pv
      } = vv;
      const Sv = (0, hv.useRef)(null),
        ev = () => {
          null !== Sv.current && (Sv.current = null, Wv.gameBridge.send("pressCustomButton", {
            id: zv.id,
            down: !1
          }))
        };
      (0, hv.useEffect)((() => ev), []);
      const gv = Bz(ev, {
          pressesOnPointerDown: !0
        }),
        pv = vv => {
          Sv.current === vv.pointerId && ev()
        };
      return (0, Nv.jsxs)("div", {
        className: "CustomIcon",
        ...gv,
        onLostPointerCapture: pv,
        children: [(0, Nv.jsx)(Ee.d, {
          icon: zv.icon,
          keyboardHint: (0, oe.c)(zv.keycode),
          padGlyph: Pv,
          onPointerDown: vv => {
            try {
              vv.currentTarget.setPointerCapture(vv.pointerId)
            } catch {
              return
            }
            null === Sv.current && Wv.gameBridge.send("pressCustomButton", {
              id: zv.id,
              down: !0
            }), Sv.current = vv.pointerId
          },
          onPointerUp: pv,
          onPointerCancel: pv,
          showTouchTutorialPubSubId: !1,
          showRedDotPubSubId: !1
        }), zv.description && (0, Nv.jsx)("div", {
          className: "CustomIconDescription SmallTextBold",
          children: zv.description
        })]
      })
    }
    var ue = Pv(2320),
      vg = Pv(250);
    const zg = {
      frame: vv => {
        const zv = requestAnimationFrame((() => {
          vv()
        }));
        return () => {
          cancelAnimationFrame(zv)
        }
      },
      afterFrame: vv => {
        const zv = setTimeout(vv, 0);
        return () => {
          clearTimeout(zv)
        }
      }
    };
    class Pg {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : vg.e,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zg;
        this.idle = vv, this.frames = zv, this.waiting = [], this.cancelIdle = null, this.cancelFrame = null, this.cancelAfterFrame = null, this.starvedFrames = 0, this.shown = !1
      }
      request(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.shown ? (vv(), () => {}) : (zv ? this.waiting.unshift(vv) : this.waiting.push(vv), this.schedule(), () => {
          const zv = this.waiting.indexOf(vv);
          zv >= 0 && (this.waiting.splice(zv, 1), this.settle())
        })
      }
      show() {
        for (this.shown = !0; this.waiting.length > 0;) this.mountNext()
      }
      schedule() {
        0 !== this.waiting.length && (this.cancelIdle ??= this.idle((vv => {
          for (this.cancelIdle = null; this.waiting.length > 0 && vv.timeRemaining() >= 8;) this.mountNext();
          this.schedule()
        })), this.cancelFrame ??= this.frames.frame((() => {
          this.cancelFrame = null, this.starvedFrames++, this.starvedFrames >= 4 && (this.cancelAfterFrame ??= this.frames.afterFrame((() => {
            this.cancelAfterFrame = null, this.mountNext(), this.schedule()
          }))), this.schedule()
        })))
      }
      mountNext() {
        this.starvedFrames = 0;
        const vv = this.waiting.shift();
        try {
          vv()
        } finally {
          this.settle()
        }
      }
      settle() {
        0 === this.waiting.length && this.stop()
      }
      stop() {
        var vv, zv, Pv;
        null === (vv = this.cancelIdle) || void 0 === vv || vv.call(this), this.cancelIdle = null, null === (zv = this.cancelFrame) || void 0 === zv || zv.call(this), this.cancelFrame = null, null === (Pv = this.cancelAfterFrame) || void 0 === Pv || Pv.call(this), this.cancelAfterFrame = null
      }
    }
    const hg = (0, hv.createContext)(null);

    function Sg(vv) {
      let {
        children: zv,
        first: Pv = !1
      } = vv;
      const Sv = (0, hv.useContext)(hg),
        [ev, gv] = (0, hv.useState)(null === Sv);
      return (0, hv.useEffect)((() => {
        if (!ev && null !== Sv) return Sv.request((() => {
          gv(!0)
        }), Pv)
      }), [Pv, ev, Sv]), ev ? (0, hv.createElement)(hv.Fragment, null, zv) : null
    }
    const eg = (0, hv.memo)((function(vv) {
        let {
          shown: zv
        } = vv;
        const [Pv] = (0, hv.useState)((() => new av.e(zv))), [Sv] = (0, hv.useState)((() => zv ? null : new Pg));
        return (0, hv.useLayoutEffect)((() => {
          zv && (null === Sv || void 0 === Sv || Sv.show(), Pv.show())
        }), [zv, Pv, Sv]), (0, Nv.jsx)(av.d.Provider, {
          value: Pv,
          children: (0, Nv.jsx)(hg.Provider, {
            value: Sv,
            children: (0, Nv.jsx)(gg, {})
          })
        })
      })),
      gg = (0, hv.memo)((function() {
        const {
          isUiHidden: vv,
          isUiHiddenByCamera: zv,
          worldPanelHud: Pv,
          isTouchScreen: Sv
        } = (0, Yv.i)(["isUiHidden", "isUiHiddenByCamera", "worldPanelHud", "isTouchScreen"]), gv = (0, oh.d)(), pv = Be(), dv = (0, av.g)(), lv = (0, hv.useRef)(null), Tv = (0, Gv.i)("showKillfeed");
        return function() {
            const vv = (0, av.g)();
            (0, hv.useEffect)((() => vv.whenShown(sv)), [vv])
          }(),
          function() {
            const vv = (0, Gv.i)("inventoryColourOverride");
            (0, hv.useEffect)((() => {
              if (!vv) return;
              const {
                panel: zv,
                slot: Pv,
                slotSelected: hv,
                slotUnavailable: Sv
              } = yv(vv), ev = document.documentElement.style;
              return ev.setProperty("--InventoryPanelColour", zv), ev.setProperty("--InventorySlotColour", Pv), ev.setProperty("--InventorySlotSelectedColour", hv), ev.setProperty("--InventorySlotUnavailableColour", Sv), () => {
                ev.removeProperty("--InventoryPanelColour"), ev.removeProperty("--InventorySlotColour"), ev.removeProperty("--InventorySlotSelectedColour"), ev.removeProperty("--InventorySlotUnavailableColour")
              }
            }), [vv])
          }(), (0, hv.useLayoutEffect)((() => dv.whenShown((() => {
            var vv;
            null === (vv = lv.current) || void 0 === vv || vv.classList.remove("PreMounted")
          }))), [dv]), (0, Nv.jsxs)(Nv.Fragment, {
            children: [(0, Nv.jsxs)("div", {
              ref: lv,
              className: ev()("InGameUi", {
                PreMounted: !dv.shown,
                Hidden: vv,
                HiddenByCamera: zv,
                HiddenByWorldPanel: null !== Pv,
                WorldPanelTouchControl: "touchControls" === Pv
              }),
              ...pv,
              children: [(0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(MP.b, {}), (0, Nv.jsx)(oP, {})]
              }), (0, Nv.jsx)(av.f, {
                children: (0, Nv.jsx)(bP, {})
              }), (0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(jS, {}), (0, Nv.jsx)(KS, {}), Sv && (0, Nv.jsx)(US, {})]
              }), (0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(iP, {}), (0, Nv.jsx)(dh.c, {}), (0, Nv.jsx)(sh, {})]
              }), (0, Nv.jsx)(av.f, {
                children: (0, Nv.jsx)(HP, {})
              }), (0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(nS.b, {}), (0, Nv.jsx)(He, {})]
              }), (0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(xS.g, {}), (0, Nv.jsx)(tS.f, {})]
              }), (0, Nv.jsx)(Sg, {
                children: (0, Nv.jsx)(GP.m, {})
              }), (0, Nv.jsx)(Sg, {
                children: (0, Nv.jsx)(wg, {
                  showChat: gv
                })
              }), (0, Nv.jsxs)(Sg, {
                children: [(0, Nv.jsx)(IS, {}), (0, Nv.jsx)(YS, {})]
              }), (0, Nv.jsxs)("div", {
                className: ev()("RightElements", {
                  RightElementsTouchscreen: Sv
                }),
                "data-camera-keeper-host": "",
                children: [(0, Nv.jsxs)("div", {
                  className: fh.m,
                  "data-holds-camera-keeper": "",
                  children: [(0, Nv.jsxs)("div", {
                    className: "TopRightElementsLeft",
                    "data-holds-camera-keeper": "",
                    children: [(0, Nv.jsx)(Sg, {
                      children: (0, Nv.jsx)(NS.e, {})
                    }), (0, Nv.jsxs)(Sg, {
                      children: [(0, Nv.jsx)(Zv, {}), (0, Nv.jsx)(Dh.c, {})]
                    }), wS.featureFlags.useSocialFeatures && (0, Nv.jsx)(av.f, {
                      children: (0, Nv.jsx)(Kh.d, {
                        placement: "inGame"
                      })
                    }), wS.featureFlags.useSocialFeatures && (0, Nv.jsx)(av.f, {
                      children: (0, Nv.jsx)(Mh, {})
                    }), Tv && (0, Nv.jsx)(av.f, {
                      children: (0, Nv.jsx)(ph, {})
                    }), (0, Nv.jsx)(Sg, {
                      children: (0, Nv.jsx)(Je.e, {})
                    })]
                  }), wS.featureFlags.useSocialFeatures && (0, Nv.jsx)("div", {
                    className: "TopRightElementsRight",
                    children: (0, Nv.jsx)(Sg, {
                      children: (0, Nv.jsx)(GS.b, {})
                    })
                  })]
                }), (0, Nv.jsxs)(Sg, {
                  children: [(0, Nv.jsx)(GP.e, {
                    placement: "topRight"
                  }), (0, Nv.jsx)(ag, {})]
                })]
              }), (0, Nv.jsx)("div", {
                className: "LeftCentre",
                children: (0, Nv.jsx)(Sg, {
                  children: (0, Nv.jsx)(ke, {})
                })
              }), (0, Nv.jsxs)("div", {
                className: "BottomCentre",
                "data-holds-camera-keeper": Sv ? "" : void 0,
                children: [(0, Nv.jsx)(av.f, {
                  children: (0, Nv.jsx)(Uv, {})
                }), (0, Nv.jsx)(Sg, {
                  children: (0, Nv.jsx)(dg, {})
                }), (0, Nv.jsxs)("div", {
                  className: "BottomElements",
                  "data-holds-camera-keeper": Sv ? "" : void 0,
                  children: [(0, Nv.jsx)("div", {
                    className: ev()("BottomLeftElements", {
                      Touch: Sv
                    }),
                    children: (0, Nv.jsxs)(Sg, {
                      children: [(0, Nv.jsx)(Jh, {}), !Sv && (0, Nv.jsx)(ue.b, {})]
                    })
                  }), (0, Nv.jsx)(Sg, {
                    children: (0, Nv.jsx)(Wg, {})
                  }), (0, Nv.jsx)(Sg, {
                    children: (0, Nv.jsx)(ih, {
                      isTouchScreen: Sv
                    })
                  })]
                })]
              }), (0, Nv.jsx)("div", {
                className: "MiddleLeft"
              }), Sv && (0, Nv.jsx)(Sg, {
                children: (0, Nv.jsx)(uz, {})
              }), (0, Nv.jsx)("div", {
                className: "CameraFadeHost",
                ref: Gz.i
              })]
            }), (0, Nv.jsx)(av.f, {
              children: (0, Nv.jsx)(yS.c, {})
            }), (0, Nv.jsx)(Sg, {
              first: !0,
              children: (0, Nv.jsx)(Eh.b, {})
            }), (0, Nv.jsx)(av.f, {
              children: (0, Nv.jsx)(pg, {})
            })]
          })
      }));

    function pg() {
      return (0, hv.useEffect)((() => {
        const vv = setTimeout((() => {
          (0, mv.f)()
        }), 0);
        return () => {
          clearTimeout(vv), mv.j.bC(!1)
        }
      }), []), null
    }
    const dg = (0, hv.memo)((function() {
        const vv = (0, pv.j)("aimingOverlay", "none");
        (0, iv.d)();
        const zv = (0, Gv.m)("middleTextUpper"),
          Pv = (0, Gv.m)("middleTextLower");
        return (0, Nv.jsxs)("div", {
          className: "MiddleTextBottom",
          style: "sniper" === vv ? {
            visibility: "hidden"
          } : {},
          children: [(0, Nv.jsx)(Tg, {
            text: zv,
            className: "MiddleText MiddleTextUpper SmallTextBold",
            maxHeightFraction: Ng
          }), (0, Nv.jsx)(Tg, {
            text: Pv,
            className: "MiddleText",
            maxHeightFraction: lg
          })]
        })
      })),
      Ng = .3,
      lg = .2;

    function Tg(vv) {
      let {
        text: zv,
        className: Pv,
        maxHeightFraction: Sv
      } = vv;
      const ev = (0, hv.useRef)(null),
        gv = (0, hv.useRef)(null);
      return function(vv, zv, Pv, Sv) {
        (0, hv.useLayoutEffect)((() => {
          const hv = vv.current,
            Sv = zv.current;
          if (!hv || !Sv) return;
          let ev = -1,
            gv = -1;
          const pv = vv => (Sv.style.setProperty("zoom", String(vv)), hv.getBoundingClientRect().height),
            dv = () => {
              const vv = document.documentElement.clientHeight * Pv;
              let zv = 1;
              if (pv(1) > vv) {
                let Pv = .5,
                  hv = 1;
                for (let zv = 0; zv < 6; zv++) {
                  const zv = (Pv + hv) / 2;
                  pv(zv) <= vv ? Pv = zv : hv = zv
                }
                zv = Pv
              }
              gv = pv(zv), ev = hv.getBoundingClientRect().width
            };
          dv();
          let Nv = 0;
          const lv = () => {
              cancelAnimationFrame(Nv), Nv = requestAnimationFrame(dv)
            },
            Tv = new ResizeObserver((() => {
              const {
                width: vv,
                height: zv
              } = hv.getBoundingClientRect();
              vv === ev && zv === gv || lv()
            }));
          return Tv.observe(hv), window.addEventListener("resize", lv), () => {
            Tv.disconnect(), window.removeEventListener("resize", lv), cancelAnimationFrame(Nv), Sv.style.removeProperty("zoom")
          }
        }), [vv, zv, Pv, Sv])
      }(ev, gv, Sv, zv.content), (0, Nv.jsx)("div", {
        ref: ev,
        className: "MiddleTextFit",
        children: (0, Nv.jsx)(qS, {
          ref: gv,
          text: zv,
          className: Pv
        })
      })
    }
    const Wg = (0, hv.memo)((function() {
        const vv = (0, pv.j)("aimingOverlay", "none");
        (0, iv.d)();
        const zv = (0, Gv.i)("useInventory");
        return (0, Nv.jsxs)("div", {
          className: "BottomMiddleElements",
          style: "sniper" === vv ? {
            visibility: "hidden"
          } : {},
          children: [(0, Nv.jsx)(lv, {}), (0, Nv.jsx)(GP.e, {}), (0, Nv.jsx)(mP, {}), (0, Nv.jsx)(av.f, {
            children: (0, Nv.jsx)(iS, {})
          }), (0, Nv.jsxs)("div", {
            className: "HotBarRow",
            children: [zv ? (0, Nv.jsx)(Lv.c, {}) : (0, Nv.jsx)(Lv.g, {}), (0, Nv.jsx)(Mv, {})]
          })]
        })
      })),
      wg = (0, hv.memo)((function(vv) {
        let {
          showChat: zv
        } = vv;
        const {
          t: Pv
        } = (0, Vv.x)(), {
          clientEscMenuOptions: Sv,
          isTouchScreen: gv
        } = (0, Yv.i)(["clientEscMenuOptions", "isTouchScreen"]);
        (0, iv.d)();
        const {
          userContext: pv,
          isUserContextUpdating: dv
        } = (0, Cv.d)(), lv = (0, Gv.i)("hideCoordinates"), Wv = (0, Gv.i)("customVariationTitle"), {
          requestedGameNameWithVariation: wv,
          gameNameWithVariation: av,
          lobbyName: sv,
          shownLobbyName: mv
        } = (0, Fv.h)("connectedGame"), jv = (0, Tv.d)(wv, sv, !1), [fv, nv] = (0, hv.useState)(null), Ov = (0, TS.m)(av || wv || ""), Dv = Wv || Ov || "";
        (0, hv.useEffect)((() => {
          dv || Uh.e.getFavouriteLobbies(pv).then((vv => {
            console.log("Got favourite lobbies", vv), nv(vv)
          }))
        }), [dv, pv]);
        const Kv = (0, hv.useRef)(null);
        return (0, hv.useLayoutEffect)((() => {
          const vv = Kv.current,
            zv = document.documentElement,
            Pv = new ResizeObserver((() => {
              zv.style.setProperty("--InGameHeaderRowsHeight", `${vv.offsetHeight}px`)
            }));
          return Pv.observe(vv), () => {
            Pv.disconnect(), zv.style.removeProperty("--InGameHeaderRowsHeight")
          }
        }), []), Oh(Kv), (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsxs)("div", {
            className: ev()(fh.i, {
              Touchscreen: gv
            }),
            ref: Kv,
            children: [(0, Nv.jsxs)("div", {
              className: "InGameHeader",
              children: [(0, Nv.jsxs)("div", {
                className: "InGameHeaderLogo",
                onMouseDown: vv => {
                  vv.stopPropagation(), vv.preventDefault()
                },
                onClick: () => {
                  Yv.c.set({
                    openEverythingMenuName: cv.o.SETTINGS
                  })
                },
                children: [(0, Nv.jsx)(lS.c, {
                  showFace: !0,
                  loading: !1
                }), "bloxd.io"]
              }), (0, Nv.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Nv.jsxs)("div", {
                className: "InGameHeaderGameName",
                children: [null === jv && (0, Nv.jsx)(lS.c, {}), null !== jv && (0, Nv.jsxs)(Nv.Fragment, {
                  children: [jv, Dv && ` ${Dv}`]
                })]
              }), (0, Nv.jsx)("div", {
                className: "InGameHeaderSpacer"
              }), (0, Nv.jsx)("div", {
                className: "InGameHeaderLobbyName",
                children: mv
              }), (0, WS.N)(sv) && (0, Nv.jsx)(Iv.h, {
                tooltipInner: (0, Nv.jsx)("div", {
                  children: Pv(null !== fv && fv.includes(sv) ? "customLobby:removeFromFavourites" : "customLobby:addToFavourites")
                }),
                children: (0, Nv.jsx)("div", {
                  children: (0, Nv.jsx)(OP.m, {
                    isLiked: null !== fv && fv.includes(sv),
                    onClick: () => {
                      try {
                        if (!fv) return;
                        fv.includes(sv) ? (Uh.e.unfavouriteLobby(pv, sv).catch((vv => {
                          console.error("Failed to favourite lobby", vv)
                        })), nv(fv.filter((vv => vv !== sv)))) : (Uh.e.favouriteLobby(pv, sv).catch((vv => {
                          console.error("Failed to favourite lobby", vv)
                        })), nv([...fv, sv]))
                      } catch (vv) {
                        console.error("Failed to like lobby", vv)
                      }
                    },
                    isLoading: null === fv
                  })
                })
              }), (0, Nv.jsx)(LS, {})]
            }), (0, Nv.jsx)(SS, {
              show: Sv.showFPS
            }), !lv && Sv.showCoordinates && (0, Nv.jsx)(pS, {}), !lv && Sv.showChunkCoordinates && (0, Nv.jsx)(dS, {}), (0, Nv.jsx)(QS, {})]
          }), (0, Nv.jsx)("div", {
            className: "TopLeftElements",
            "data-holds-camera-keeper": "",
            children: (0, Nv.jsx)("div", {
              className: "InGameHeaderAndChat",
              "data-holds-camera-keeper": "",
              children: zv && (0, Nv.jsx)(Ev.e, {})
            })
          })]
        })
      })),
      ag = (0, hv.memo)((function() {
        (0, iv.d)();
        const vv = (0, Gv.m)("RightInfoText"),
          [zv, Pv] = (0, hv.useState)(null);
        return (0, az.j)(zv, ".RightElements"), vv.hasText ? (0, Nv.jsx)("div", {
          className: "RightInfoDivContainer",
          children: (0, Nv.jsx)(qS, {
            ref: Pv,
            text: vv,
            className: "RightInfoDiv",
            children: (0, Nv.jsx)("div", {
              className: "RightInfoDivInner",
              children: (0, Nv.jsx)(dv.c, {
                text: vv.content
              })
            })
          })
        }) : null
      }))
  },
  4582: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv
    });
    var hv = Pv(52),
      Sv = Pv(302),
      ev = Pv(1871),
      gv = Pv(1082);

    function pv(vv) {
      let {
        text: zv
      } = vv;
      const Pv = [];
      let pv = "";
      return (0, Sv.Vb)(zv).forEach(((vv, zv) => {
        if ("string" === typeof vv || !(0, ev.d)(vv.icon)) return void(pv += "string" === typeof vv ? vv : vv.icon);
        const Sv = Math.max(0, pv.trimEnd().search(/\S{1,12}$/));
        Pv.push((0, gv.jsxs)(hv.Fragment, {
          children: [pv.slice(0, Sv), (0, gv.jsxs)("span", {
            className: "InlineIconTextGlue",
            children: [pv.slice(Sv), (0, gv.jsx)("span", {
              className: "InlineIconTextIcon",
              role: "img",
              "aria-label": vv.icon,
              children: (0, gv.jsx)(ev.b, {
                itemName: vv.icon,
                amount: 0
              })
            })]
          })]
        }, zv)), pv = ""
      })), Pv.push(pv), (0, gv.jsx)(gv.Fragment, {
        children: Pv
      })
    }
  },
  36060: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Wv,
      h: () => lv,
      j: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1871),
      pv = Pv(1082);
    const dv = 350;
    let Nv = 0;

    function lv() {
      return Nv += 1, Nv
    }

    function Tv(vv, zv) {
      let Pv = 0;
      for (const hv of vv) "ingredient" !== hv.kind && hv.Vl === zv && (Pv += hv.amount);
      return Pv > 0 ? {
        idx: zv,
        amount: Pv
      } : null
    }

    function Wv(vv) {
      var zv, Pv;
      let {
        anim: Sv,
        onComplete: Nv
      } = vv;
      const lv = null !== (zv = Sv.delayMs) && void 0 !== zv ? zv : 0,
        Tv = null !== (Pv = Sv.durationMs) && void 0 !== Pv ? Pv : dv,
        [Wv, wv] = (0, hv.useState)(Sv.from),
        [av, sv] = (0, hv.useState)(0 === lv),
        [Cv, iv] = (0, hv.useState)(!1),
        cv = (0, hv.useRef)(!1);
      return (0, hv.useEffect)((() => {
        let vv, zv;
        const Pv = () => {
            cv.current = !0, sv(!0), vv = requestAnimationFrame((() => {
              zv = requestAnimationFrame((() => {
                wv({
                  x: Sv.to.x,
                  y: Sv.to.y
                }), iv(!0)
              }))
            }))
          },
          hv = cv.current ? 0 : lv;
        let ev;
        hv > 0 ? ev = setTimeout(Pv, hv) : Pv();
        const gv = setTimeout((() => {
          Nv(Sv.id)
        }), hv + Tv + 50);
        return () => {
          clearTimeout(ev), cancelAnimationFrame(vv), cancelAnimationFrame(zv), clearTimeout(gv)
        }
      }), [Sv.id, Sv.to.x, Sv.to.y, Nv, lv, Tv]), (0, pv.jsx)("div", {
        className: ev()("CraftItemFlyAnimation", {
          Ingredient: "ingredient" === Sv.kind,
          Waiting: !av,
          Arrived: Cv
        }),
        style: {
          left: Wv.x,
          top: Wv.y,
          "--fly-duration": `${Tv}ms`
        },
        children: (0, pv.jsx)(gv.b, {
          itemName: Sv.itemName,
          amount: Sv.amount
        })
      })
    }
  },
  36045: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => qv,
      g: () => Zv
    });
    var hv = Pv(52),
      Sv = Pv(2775),
      ev = Pv(6287),
      gv = Pv(2004),
      pv = Pv(2324),
      dv = Pv(8520),
      Nv = Pv(312),
      lv = Pv(26),
      Tv = Pv(1439),
      Wv = Pv(39),
      wv = Pv(1035),
      av = Pv.n(wv),
      sv = Pv(302),
      Cv = Pv(36054),
      iv = Pv(1858),
      cv = Pv(1923),
      Gv = Pv(8380),
      mv = Pv(1082);

    function jv(vv) {
      var zv, Pv;
      let {
        slotIdx: ev
      } = vv;
      const gv = (0, cv.g)("hotbar", (vv => {
          var zv;
          return null !== (zv = vv.items[ev]) && void 0 !== zv ? zv : null
        })),
        dv = (0, cv.g)("hotbar", (vv => vv.ammo)),
        [lv, Tv] = (0, hv.useState)(!1),
        Wv = (0, hv.useRef)(null),
        [wv, sv] = (0, hv.useState)(null),
        [Cv, jv] = (0, hv.useState)(null),
        fv = (0, pv.i)("maxAuraLevel"),
        Fv = (0, Sv.d)(),
        Yv = (0, hv.useCallback)((() => {
          if (clearTimeout(Wv.current), gv) {
            var vv, zv, Pv, hv;
            const dv = gv.displayName,
              lv = [],
              Tv = Array.isArray(dv) ? dv : [dv],
              Wv = {
                fontStyle: null !== (vv = gv.attributes.customAttributes) && void 0 !== vv && vv.author ? "italic" : "normal"
              };
            for (const vv of Tv) vv.str ? lv.push(vv) : lv.push({
              str: vv,
              style: Wv
            });
            if (null !== (zv = gv.attributes.customAttributes) && void 0 !== zv && zv.enchantments) {
              lv.push(" ");
              const vv = Object.entries(gv.attributes.customAttributes.enchantments).sort(((vv, zv) => zv[1] - vv[1])),
                zv = gv.attributes.customAttributes.enchantmentData;
              for (const [Pv, hv] of vv) {
                var Sv, ev;
                const vv = null !== (Sv = null === zv || void 0 === zv || null === (ev = zv[Pv]) || void 0 === ev ? void 0 : ev.icon) && void 0 !== Sv ? Sv : `${Pv} Enchantment`;
                var pv;
                if (hv < 4)
                  for (let zv = 0; zv < hv; zv++) lv.push({
                    icon: vv,
                    style: {
                      fontSize: "1.5em"
                    }
                  });
                else lv.push({
                  icon: vv,
                  style: {
                    fontSize: "1.5em"
                  }
                }), lv.push(null !== (pv = (0, Nv.S)(hv)) && void 0 !== pv ? pv : hv.toString())
              }
            }
            sv(lv), jv(null !== (Pv = null === (hv = gv.attributes.customAttributes) || void 0 === hv ? void 0 : hv.enchantmentTier) && void 0 !== Pv ? Pv : null)
          } else sv(null), jv(null);
          Tv(!0), Fv();
          const dv = null === gv || void 0 === gv ? void 0 : gv.attributes.customAttributes;
          void 0 === (null === dv || void 0 === dv ? void 0 : dv.shotsLeft) && (Wv.current = setTimeout((() => {
            Tv(!1)
          }), 2e3))
        }), [null === gv || void 0 === gv ? void 0 : gv.name, ev, null === gv || void 0 === gv ? void 0 : gv.instance, null === gv || void 0 === gv ? void 0 : gv.displayName]);
      (0, hv.useEffect)((() => (Yv(), () => {
        clearTimeout(Wv.current), Tv(!1)
      })), [null === gv || void 0 === gv ? void 0 : gv.name, ev, null === gv || void 0 === gv ? void 0 : gv.instance, Yv]);
      const nv = null === gv || void 0 === gv || null === (zv = gv.attributes.customAttributes) || void 0 === zv ? void 0 : zv.shotsLeft,
        Ov = void 0 === nv ? null : (0, mv.jsx)("div", {
          className: "SelectedItemShotsLeft",
          children: `${nv}|${gv.requiresAmmo?`${dv}x${gv.clipSize}`:gv.clipSize}`
        }),
        Dv = (0, Gv.m)();
      return (0, mv.jsx)(mv.Fragment, {
        children: lv && gv && !Dv.showing ? (0, mv.jsxs)("div", {
          className: av()("SelectedItemName SmallTextBold", {
            NoAuraBar: 0 === fv,
            Enchanted: null !== Cv
          }),
          style: {
            "--enchantmentColour": null !== (Pv = Nv.nb[Cv]) && void 0 !== Pv ? Pv : Nv.nb.None,
            "--duration": Cv ? (0, Nv.kb)(Cv) + "s" : void 0
          },
          children: [Cv && (0, mv.jsxs)("div", {
            className: "SelectedItemNameGradient",
            children: [(0, mv.jsx)(iv.c, {
              text: wv
            }), Ov]
          }), (0, mv.jsxs)("div", {
            className: "SelectedItemNameNormal",
            children: [(0, mv.jsx)(iv.c, {
              text: wv
            }), Ov]
          })]
        }) : null
      })
    }
    var fv = Pv(36060),
      Fv = Pv(22),
      Yv = Pv(1876),
      nv = Pv(626),
      Ov = Pv(2328),
      Dv = Pv(3142),
      Kv = Pv(3148);
    var Vv = Pv(1099),
      Uv = Pv(1095),
      Rv = Pv(2366);

    function xv() {
      return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--touch-hotbar-ends-spare")) >= 0
    }
    var tv = Pv(1453);
    const qv = (0, hv.memo)((function() {
      const [vv, zv] = (0, hv.useState)(0), Pv = (0, pv.i)("useFullInventory"), gv = (0, pv.i)("highlightedHotbarSlots"), {
        isTouchScreen: dv,
        openInGameMenuName: Nv
      } = (0, Fv.i)(["isTouchScreen", "openInGameMenuName"]), Wv = null !== Nv && "inventory" !== Nv, wv = (0, cv.h)("fullInventory") && "inventory" === Nv, sv = function() {
        const vv = (0, Vv.l)(((vv, zv) => `${vv}:${(0,Uv.d)(vv,zv)?"portrait":"landscape"}`)),
          [zv, Pv] = (0, hv.useState)(xv);
        return (0, hv.useLayoutEffect)((() => {
          Pv(xv())
        }), [vv]), (0, Tv.g)(Rv.h, (() => {
          Pv(xv())
        })), zv
      }(), iv = dv && !sv;
      ! function(vv, zv, Pv) {
        (0, hv.useLayoutEffect)((() => {
          const hv = document.documentElement.classList;
          return vv && (hv.add("TouchHotbar"), hv.toggle("TouchHotbarKeysAbove", zv), hv.toggle("TouchHotbarHasBag", Pv)), (0, Dv.l)(), lv.j.zC(Kv.e), () => {
            hv.remove("TouchHotbar", "TouchHotbarKeysAbove", "TouchHotbarHasBag"), (0, Dv.l)(), lv.j.zC(Kv.e)
          }
        }), [vv, zv, Pv])
      }(dv, iv, Pv);
      const [Gv, Ov] = (0, ev.d)("changedHotbarUsingNumkeys", !0), tv = (0, cv.g)("hotbar", (vv => vv.selectedSlot)), qv = null !== tv && void 0 !== tv ? tv : vv, Av = (0, Sv.d)(), Lv = (0, hv.useRef)(null), Mv = (0, Tv.j)("pointerLockUpdate", Boolean(document.pointerLockElement));
      (0, Tv.g)("inventoryDraggedItemUpdated", (vv => {
        Lv.current = vv, Av()
      })), (0, cv.d)("hotbarScrolled", (vv => {
        null === tv && Bv(vv)
      })), (0, cv.d)("hotbarSlotRequested", (vv => {
        yv(vv), Ov(!1)
      })), (0, cv.d)("numberKeyPressed", (() => {
        Ov(!1)
      })), (0, cv.d)("hotbarDropRequested", (vv => {
        const zv = Yv.gameBridge.latest("hotbar").items[qv];
        if (zv) {
          var Pv;
          const hv = vv && null !== (Pv = zv.amount) && void 0 !== Pv ? Pv : 1;
          Yv.gameBridge.send("removeInventoryItem", {
            slot: qv,
            amount: hv,
            drop: !0
          })
        }
      }));
      const yv = vv => {
          Yv.gameBridge.send("selectHotbarSlot", vv), zv(vv)
        },
        Bv = vv => {
          yv((qv + vv + nv.l) % nv.l)
        };
      let Jv, Ev = null,
        ov = null,
        bv = vv => vv => {},
        rv = vv => zv => {
          yv(vv)
        },
        kv = vv => vv => {},
        Xv = [];
      if (wv) {
        var uv;
        const vv = Lv.current;
        if (null === vv || void 0 === vv || !vv.setHovered) return (0, mv.jsx)("div", {
          className: av()("HotBarContainer", {
            Touch: dv,
            KeysAbove: iv
          }),
          children: (0, mv.jsx)("div", {
            className: "HotBar"
          })
        });
        Ev = vv.draggedInfo, ov = vv.specialItemInfo, bv = vv.setHovered, rv = vv.pointerDown, kv = vv.pointerUp, Jv = vv.variation, Xv = null !== (uv = vv.craftFlyAnims) && void 0 !== uv ? uv : []
      }
      return (0, mv.jsxs)("div", {
        className: av()("HotBarContainer", {
          Touch: dv,
          PopupOpen: dv && Wv,
          KeysAbove: iv
        }),
        children: [(0, mv.jsxs)("div", {
          className: av()("HotBar", {
            HoverDisabled: Mv
          }),
          children: [dv && (0, mv.jsxs)(mv.Fragment, {
            children: [(0, mv.jsx)(Qv, {
              useFullInventory: Pv,
              inventoryOpen: wv
            }), (0, mv.jsx)(Iv, {
              direction: "Previous",
              onPress: () => {
                Bv(-1)
              }
            })]
          }), !dv && (0, mv.jsxs)(mv.Fragment, {
            children: [(0, mv.jsx)(Zv, {}), (0, mv.jsx)("div", {
              className: "HotBarFiller"
            })]
          }), (0, mv.jsx)("div", {
            className: "HotBarGameItemsContainer",
            children: new Array(10).fill(0).map(((vv, zv) => (0, mv.jsx)(Cv.b, {
              idx: zv,
              draggedInfo: Ev,
              specialItemInfo: ov,
              craftFlyHoldbackInfo: (0, fv.j)(Xv, zv),
              setHovered: bv(zv),
              pointerDown: rv(zv),
              pointerUp: kv(zv),
              variation: Jv,
              isSelected: zv === qv,
              hotbarHighlighted: !0 === (null === gv || void 0 === gv ? void 0 : gv.includes(zv)),
              hoverDisabled: Mv,
              showNumber: Gv && !dv
            }, zv)))
          }), dv && (0, mv.jsx)(Iv, {
            direction: "Next",
            onPress: () => {
              Bv(1)
            }
          }), !dv && (0, mv.jsxs)(mv.Fragment, {
            children: [(0, mv.jsx)("div", {
              className: "HotBarFiller"
            }), (0, mv.jsx)("div", {
              className: av()("HotBarItem ButtonHotBarItem", {
                HiddenButtonHotBarItem: !Pv
              }),
              onPointerDown: () => {
                lv.j.zC("toggleMenu", "inventory")
              },
              children: (0, mv.jsx)(Hv, {})
            })]
          })]
        }), (0, mv.jsx)(jv, {
          slotIdx: qv
        })]
      })
    }));

    function Iv(vv) {
      let {
        direction: zv,
        onPress: Pv
      } = vv;
      return (0, mv.jsx)("div", {
        className: av()("HotBarArrow", zv),
        ...tv.f,
        children: (0, mv.jsx)(gv.d, {
          icon: "Previous" === zv ? "caret-left" : "caret-right",
          touchPressOn: "pointerdown",
          onClick: Pv
        })
      })
    }
    const Qv = (0, hv.memo)((function(vv) {
        let {
          useFullInventory: zv,
          inventoryOpen: Pv
        } = vv;
        const Sv = (0, pv.i)("maxAuraLevel"),
          ev = (0, hv.useRef)(null);
        return function(vv, zv, Pv) {
          (0, hv.useLayoutEffect)((() => (document.documentElement.classList.toggle("TouchHotbarHasShop", zv), () => {
            document.documentElement.classList.remove("TouchHotbarHasShop")
          })), [zv]), (0, hv.useLayoutEffect)((() => {
            const zv = vv.current.closest(".BottomMiddleElements");
            return zv.classList.toggle("TouchInventoryOpen", Pv), () => {
              zv.classList.remove("TouchInventoryOpen")
            }
          }), [vv, Pv])
        }(ev, (0, dv.d)(), Pv), (0, mv.jsxs)("div", {
          ref: ev,
          className: av()("TouchInventoryKeys", {
            NoAuraBar: 0 === Sv,
            InventoryOpen: Pv
          }),
          children: [(0, mv.jsx)(Zv, {
            touchKey: !0
          }), (0, mv.jsx)("div", {
            className: av()("TouchInventoryKey BagKey", {
              Hidden: !zv
            }),
            ...tv.f,
            children: (0, mv.jsx)(Hv, {
              touchKey: !0
            })
          })]
        })
      })),
      Zv = (0, hv.memo)((function(vv) {
        let {
          touchKey: zv = !1
        } = vv;
        const Pv = (0, dv.d)();
        return (0, mv.jsx)("div", {
          className: zv ? av()("TouchInventoryKey ShopKey", {
            Hidden: !Pv
          }) : av()("HotBarItem ButtonHotBarItem", {
            HiddenButtonHotBarItem: !Pv
          }),
          ...zv ? tv.f : {},
          children: (0, mv.jsx)(gv.d, {
            icon: (0, Nv.$b)(),
            noaAction: "OpenShop",
            touchPressOn: "pointerdown",
            onClick: () => {
              Pv && Fv.c.set({
                openEverythingMenuName: sv.o.SHOP
              })
            },
            showTouchTutorialPubSubId: "showShopTouchTutorial",
            showRedDotPubSubId: "showShopIconRedDot",
            touchIconPosition: "topleft"
          })
        })
      }));

    function Av(vv) {
      let {
        player: zv
      } = vv;
      return zv.some((vv => null !== vv && Nv.Gc.includes(vv.name)))
    }

    function Lv(vv) {
      vv.creative || Wv.h.getItem("LogInInventoryRedDotTutorialComplete") || (Av(vv) ? (lv.j.zC("RedDotOpenInventoryIcon", !0), lv.j.zC("TouchTutorialOpenInventoryIcon", !0)) : (lv.j.zC("RedDotOpenInventoryIcon", !1), lv.j.zC("TouchTutorialOpenInventoryIcon", !1)))
    }
    const Hv = (0, hv.memo)((function(vv) {
      let {
        touchKey: zv = !1
      } = vv;
      const {
        backpackPointerRequested: Pv
      } = (0, Fv.i)(["backpackPointerRequested"]);
      (0, hv.useEffect)((() => {
        Lv(Yv.gameBridge.latest("inventory"))
      }), []), (0, cv.d)("inventory", Lv);
      const Sv = (0, Ov.g)();
      return (0, Tv.g)("toggleMenu", (vv => {
        Sv.shown && (null !== vv && void 0 !== vv && vv.startsWith("inventory") && Av(Yv.gameBridge.latest("inventory")) ? (Wv.h.setItem("LogInInventoryRedDotTutorialComplete", !0), lv.j.zC("RedDotOpenInventoryIcon", !1), lv.j.zC("TouchTutorialOpenInventoryIcon", !1)) : "shop" === vv && lv.j.zC("showShopTouchTutorial", !1))
      })), zv ? (0, mv.jsx)(gv.d, {
        icon: "backpack",
        noaAction: "OpenInventory",
        touchPressOn: "pointerdown",
        onClick: () => {
          lv.j.zC("toggleMenu", "inventory")
        },
        showRedDotPubSubId: "RedDotOpenInventoryIcon",
        showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
        touchTutorialRequested: Pv,
        touchIconPosition: "topleft"
      }) : (0, mv.jsx)("div", {
        className: "HotBarButton",
        onPointerDown: () => {
          lv.j.zC("toggleMenu", "inventory")
        },
        children: (0, mv.jsx)(gv.d, {
          icon: "backpack",
          noaAction: "OpenInventory",
          onPointerDown: vv => {
            lv.j.zC("toggleMenu", "inventory"), vv.stopPropagation()
          },
          showRedDotPubSubId: "RedDotOpenInventoryIcon",
          showTouchTutorialPubSubId: "TouchTutorialOpenInventoryIcon",
          touchTutorialRequested: Pv,
          touchIconPosition: "topleft"
        })
      })
    }))
  },
  36054: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Cv,
      c: () => av
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1873),
      pv = Pv(1871),
      dv = Pv(1876),
      Nv = Pv(1923),
      lv = Pv(36056),
      Tv = Pv(9013),
      Wv = Pv(1374),
      wv = Pv(1082);
    const av = (vv, zv, Pv) => {
      let hv = zv,
        Sv = !1;
      for (const ev of Pv)(null === ev || void 0 === ev ? void 0 : ev.idx) === vv && (Sv = !0, hv > 0 && (hv -= ev.amount));
      return {
        displayedAmt: hv,
        shown: !Sv || hv > 0
      }
    };
    const sv = vv => {
        let {
          idx: zv
        } = vv;
        return (0, Wv.m)() ? null : (0, wv.jsx)("div", {
          className: "HotbarItemNumber SmallTextBold",
          children: zv < 9 ? zv + 1 : 0
        })
      },
      Cv = (0, hv.memo)((function(vv) {
        var zv, Pv, hv;
        let {
          idx: Sv,
          setHovered: Wv,
          pointerDown: Cv,
          pointerUp: iv,
          draggedInfo: cv,
          specialItemInfo: Gv,
          craftFlyHoldbackInfo: mv,
          defaultIconB64: jv = null,
          variation: fv,
          isSelected: Fv = !1,
          hotbarHighlighted: Yv = !1,
          hoverDisabled: nv = !1,
          showNumber: Ov = !1,
          showNewDot: Dv = !1
        } = vv;
        const Kv = (0, Nv.g)("inventory", (vv => Sv === lv.h ? null : (0, Tv.n)(vv, Sv)));
        let Vv, Uv, Rv, xv;
        if (Sv === lv.h) Gv && (Vv = Gv.name, Rv = Gv.amount, xv = Gv.attributes);
        else if (Kv) {
          var tv;
          Vv = Kv.name, Uv = Kv.icon, Rv = null !== (tv = Kv.amount) && void 0 !== tv ? tv : 0, xv = Kv.attributes
        }
        const qv = null === (zv = xv) || void 0 === zv || null === (Pv = zv.customAttributes) || void 0 === Pv ? void 0 : Pv.enchantmentTier,
          Iv = (0, gv.h)(xv),
          {
            displayedAmt: Qv,
            shown: Zv
          } = av(Sv, Rv, [cv, Gv, mv]),
          Av = Vv && Zv,
          Lv = void 0 !== fv && function(vv, zv) {
            const {
              enchantable: Pv,
              salvageable: hv
            } = dv.gameBridge.latest("stationItems");
            return "Enchanting Table" === vv ? !0 === Pv[zv] : "Salvaging Table" === vv && !0 === hv[zv]
          }(fv, Vv);
        return (0, wv.jsxs)("div", {
          className: ev()("InvenItem", {
            Highlighted: Av && Lv,
            Selected: Fv,
            HotbarHighlighted: Yv,
            HoverDisabled: nv
          }),
          onPointerEnter: () => {
            null === Wv || void 0 === Wv || Wv(!0)
          },
          onPointerLeave: () => {
            null === Wv || void 0 === Wv || Wv(!1)
          },
          onPointerDown: Cv,
          onPointerUp: iv,
          "data-inven-idx": Sv,
          children: [Av && (0, wv.jsx)(pv.b, {
            itemName: null !== (hv = Uv) && void 0 !== hv ? hv : Vv,
            amount: Qv,
            enchantmentTier: qv,
            bar: Iv
          }), Av && Dv && (0, wv.jsx)("div", {
            className: "InvenItemNewDot"
          }), Ov && (0, wv.jsx)(sv, {
            idx: Sv
          }), jv && !Av && (0, wv.jsx)("div", {
            className: "InvenItemUnfilled",
            style: {
              backgroundImage: `url(${jv})`
            }
          })]
        })
      }))
  },
  9003: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev
    });
    var hv = Pv(312),
      Sv = Pv(9011);

    function ev(vv, zv, Pv) {
      const ev = Object.entries(zv).sort(((vv, zv) => zv[1] - vv[1])),
        gv = (0, hv.sb)(vv);
      gv.push(vv ? "\n\n" : "\n");
      for (const [Sv, av] of ev) {
        var pv, dv, Nv;
        const vv = null !== (pv = null === Pv || void 0 === Pv || null === (dv = Pv[Sv]) || void 0 === dv ? void 0 : dv.icon) && void 0 !== pv ? pv : `${Sv} Enchantment`;
        gv.push({
          icon: vv,
          style: {
            fontSize: "1.5rem"
          }
        }), gv.push({
          str: `${Sv} ${null!==(Nv=(0,hv.S)(av))&&void 0!==Nv?Nv:av}\n`
        })
      }
      gv.push({
        str: "\n"
      });
      for (const [hv, av] of ev) {
        var lv, Tv, Wv, wv;
        const vv = null !== (lv = null === Pv || void 0 === Pv || null === (Tv = Pv[hv]) || void 0 === Tv ? void 0 : Tv.icon) && void 0 !== lv ? lv : `${hv} Enchantment`,
          zv = null !== (Wv = null === Pv || void 0 === Pv || null === (wv = Pv[hv]) || void 0 === wv ? void 0 : wv.description) && void 0 !== Wv ? Wv : (0, Sv.n)(hv);
        gv.push({
          icon: vv,
          style: {
            fontSize: "1.25rem",
            opacity: .75
          }
        }), gv.push({
          str: zv,
          style: {
            fontSize: "0.8em",
            fontWeight: "normal",
            opacity: .75
          }
        }), gv.push({
          str: "\n"
        })
      }
      return gv
    }
  },
  36056: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv,
      h: () => Sv
    });
    const hv = -1,
      Sv = -2
  },
  9013: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => Tv,
      e: () => Nv,
      i: () => cv,
      m: () => Cv,
      n: () => dv,
      r: () => iv,
      u: () => lv,
      x: () => Wv,
      z: () => sv
    });
    var hv = Pv(302),
      Sv = Pv(626),
      ev = Pv(312),
      gv = Pv(4008),
      pv = Pv(9003);

    function dv(vv, zv) {
      var Pv;
      let {
        player: hv,
        chestOrCreative: Sv
      } = vv;
      var ev;
      return zv < hv.length ? null !== (ev = hv[zv]) && void 0 !== ev ? ev : null : null !== (Pv = Sv[zv - hv.length]) && void 0 !== Pv ? Pv : null
    }

    function Nv(vv) {
      var zv;
      return null !== (zv = vv.amount) && void 0 !== zv ? zv : 0
    }

    function lv(vv) {
      return 0 === vv.button || void 0 === vv.button
    }

    function Tv(vv) {
      return !!vv.shiftKey
    }

    function Wv(vv) {
      return "touches" in vv || "touch" === vv.pointerType || "pen" === vv.pointerType
    }
    const wv = new Set,
      av = 50;

    function sv(vv, zv) {
      var Pv;
      const hv = null === (Pv = vv[zv]) || void 0 === Pv ? void 0 : Pv.displayName;
      return (0, Sv.N)(hv) ? "string" !== typeof zv ? "" : (!wv.has(zv) && wv.size < av && (wv.add(zv), console.warn(`No item called "${zv}", so its hover shows the name as given`)), zv) : hv
    }

    function Cv(vv, zv, Pv) {
      var dv, Nv, lv, Tv, Wv, wv, av, Cv, iv, cv, Gv, mv, jv, fv;
      const Fv = vv.attributes,
        Yv = null !== (dv = null === (Nv = zv[vv.name]) || void 0 === Nv ? void 0 : Nv.rootName) && void 0 !== dv ? dv : vv.name,
        nv = null !== (lv = null !== (Tv = Fv.customDisplayName) && void 0 !== Tv ? Tv : null === (Wv = zv[vv.name]) || void 0 === Wv ? void 0 : Wv.displayName) && void 0 !== lv ? lv : sv(zv, Yv);
      let Ov = nv;
      const Dv = null === (wv = Fv.customAttributes) || void 0 === wv ? void 0 : wv.enchantmentTier;
      Dv && (Ov = (0, ev.sb)(nv, {
        colour: ev.nb[Dv]
      }));
      const Kv = null !== (av = null !== (Cv = null !== (iv = function(vv, zv) {
        var Pv;
        if (void 0 === vv || null !== (Pv = zv.customAttributes) && void 0 !== Pv && Pv.author) return vv;
        const Sv = (0, hv.Vb)(vv);
        return Sv.every((vv => "string" === typeof vv)) ? vv : Sv.map((vv => "string" === typeof vv ? vv : {
          icon: vv.icon,
          style: {
            fontSize: "1.5em"
          }
        }))
      }(Fv.customDescription, Fv)) && void 0 !== iv ? iv : null === (cv = zv[vv.name]) || void 0 === cv ? void 0 : cv.description) && void 0 !== Cv ? Cv : null === (Gv = zv[Yv]) || void 0 === Gv ? void 0 : Gv.description) && void 0 !== av ? av : "";
      let Vv = Kv;
      if (null !== (mv = Fv.customAttributes) && void 0 !== mv && mv.enchantments) Vv = (0, pv.e)(Kv, Fv.customAttributes.enchantments, Fv.customAttributes.enchantmentData);
      else if (Pv[Yv]) Vv = (0, ev.sb)(Kv), Vv.push({
        str: "\n"
      }), Vv.push({
        str: "Enchantable",
        style: {
          fontSize: "0.8em",
          fontWeight: "normal",
          opacity: .4
        }
      });
      else if (null !== (jv = Fv.customAttributes) && void 0 !== jv && jv.mobSettings) {
        var Uv, Rv;
        const vv = Fv.customAttributes.mobSettings;
        var xv, tv;
        if (Vv = [], (0, Sv.N)(Fv.customAttributes.health) || (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Health",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: Fv.customAttributes.health.toString()
          }), (0, Sv.N)(vv.maxHealth) || (Vv.push({
            str: "/"
          }), Vv.push({
            str: vv.maxHealth.toString()
          }))), !(0, Sv.N)(vv.attackDamage) && vv.attackDamage > 0 && (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Iron Sword",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.attackDamage.toString()
          })), !(0, Sv.N)(vv.secondaryAttackDamage) && vv.secondaryAttackDamage > 0 && (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Stone Crossbow",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.secondaryAttackDamage.toString()
          })), (0, Sv.N)(vv.baseRunningSpeed) || (Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Speed",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: " "
          }), Vv.push({
            str: vv.baseRunningSpeed.toFixed(2)
          })), "Saddled" === vv.metaInfo) Vv.push({
          str: "\n"
        }), Vv.push({
          str: {
            translationKey: "general:has"
          }
        }), Vv.push({
          str: " "
        }), Vv.push({
          icon: null !== (xv = null === (tv = vv.tameInfo) || void 0 === tv ? void 0 : tv.saddleItemName) && void 0 !== xv ? xv : "Saddle",
          style: {
            fontSize: "1.5em"
          }
        });
        if (Vv.push({
            str: "\n"
          }), Vv.push({
            str: "\n"
          }), vv.petInfo && null !== (Uv = vv.tameInfo) && void 0 !== Uv && Uv.supportsFriendship) {
          const zv = gv.d.getIconsFromFriendshipPoints(vv.petInfo.friendshipPoints);
          for (const vv of zv) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: "\n"
          });
          const Pv = gv.d.getMobHungerLevel(vv.petInfo.lastFedAt);
          for (const vv of gv.d.hungerLevelIcons[Pv]) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: " "
          }), Vv.push({
            str: gv.d.hungerLevelTranslations[Pv],
            style: {
              fontWeight: "bolder"
            }
          })
        }
        if (vv.tameInfo && null !== (Rv = vv.tameInfo) && void 0 !== Rv && Rv.supportsFriendship) {
          var qv, Iv;
          let zv = null !== (qv = vv.tameInfo.likedFoods) && void 0 !== qv ? qv : [];
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Superliked]
            }
          }), Vv.push({
            str: " "
          }), null !== (Iv = vv.petInfo) && void 0 !== Iv && Iv.superlikedFoodKnown ? (Vv.push({
            icon: vv.petInfo.superlikedFood,
            style: {
              fontSize: "1.5em"
            }
          }), zv = zv.filter((zv => zv !== vv.petInfo.superlikedFood))) : Vv.push({
            icon: "Question Mark",
            style: {
              fontSize: "1.5em"
            }
          }), Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Liked]
            }
          }), Vv.push({
            str: " "
          });
          for (const vv of zv) Vv.push({
            icon: vv,
            style: {
              fontSize: "1.5em"
            }
          });
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Neutral]
            }
          }), Vv.push({
            str: " "
          });
          for (const Pv of null !== (Qv = vv.tameInfo.neutralFoods) && void 0 !== Qv ? Qv : []) {
            var Qv;
            Vv.push({
              icon: Pv,
              style: {
                fontSize: "1.5em"
              }
            })
          }
          Vv.push({
            str: "\n"
          }), Vv.push({
            icon: "Pixelated Heart",
            style: {
              fontSize: "1.5em",
              color: gv.d.feedTextColours[gv.d.MobFoodType.Disliked]
            }
          }), Vv.push({
            str: " "
          });
          for (const Pv of null !== (Zv = vv.tameInfo.dislikedFoods) && void 0 !== Zv ? Zv : []) {
            var Zv;
            Vv.push({
              icon: Pv,
              style: {
                fontSize: "1.5em"
              }
            })
          }
        }
        Vv.length > 0 ? (Vv.shift(), Vv.unshift(...(0, ev.sb)(Kv))) : Vv = (0, ev.sb)(Kv)
      }
      return {
        name: Ov,
        desc: Vv,
        fontStyle: null !== (fv = Fv.customAttributes) && void 0 !== fv && fv.author ? "italic" : "normal"
      }
    }

    function iv(vv, zv, Pv, hv) {
      const Sv = dv(vv, Pv),
        ev = dv(vv, hv);
      if (!Sv) return !1;
      const gv = zv[Sv.name].armourReduction,
        pv = zv[ev.name].armourReduction;
      if (pv === gv) {
        var Nv, lv, Tv, Wv;
        const vv = null !== (Nv = null === (lv = Sv.attributes.customAttributes) || void 0 === lv ? void 0 : lv.enchantmentTier) && void 0 !== Nv ? Nv : "Tier 0",
          zv = null !== (Tv = null === (Wv = ev.attributes.customAttributes) || void 0 === Wv ? void 0 : Wv.enchantmentTier) && void 0 !== Tv ? Tv : "Tier 0";
        return parseInt(vv.replace("Tier ", "")) >= parseInt(zv.replace("Tier ", ""))
      }
      return gv > pv
    }

    function cv(vv) {
      let zv;
      if ("number" === typeof vv) {
        const Pv = document.querySelector(`[data-inven-idx="${vv}"]`);
        if (!Pv) return null;
        zv = Pv.getBoundingClientRect()
      } else zv = vv.getBoundingClientRect();
      return {
        x: zv.left + zv.width / 2,
        y: zv.top + zv.height / 2
      }
    }
  },
  8895: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => wv,
      h: () => av,
      k: () => sv
    });
    var hv = Pv(1442),
      Sv = Pv(52),
      ev = Pv(1295),
      gv = Pv(4285),
      pv = Pv(2273),
      dv = Pv(1175),
      Nv = Pv(73),
      lv = Pv(1923),
      Tv = Pv(1327),
      Wv = Pv(1082);

    function wv(vv) {
      let {
        show: zv,
        onClose: Pv
      } = vv;
      const {
        requestedGameNameWithVariation: hv,
        lobbyName: Sv,
        shownLobbyName: ev
      } = (0, lv.h)("connectedGame"), dv = (0, pv.d)(hv, Sv, !1);
      return Nv.featureFlags.canUseInviteLinks && (0, Wv.jsx)(gv.c, {
        show: zv,
        close: Pv,
        padShowsHud: !0,
        togglePointerLock: !1,
        globallyUniqueKey: "InviteLinkBox",
        doGameplayStartStopOnShow: !0,
        children: (0, Wv.jsxs)("div", {
          className: "InviteLinkBox AnimFadeInScaleUp",
          children: [(0, Wv.jsx)("div", {
            className: "InviteLinkBoxHeader SmallTextBold",
            children: "Invite Friends"
          }), (0, Wv.jsxs)("div", {
            className: "InviteLinkBoxDescription SmallTextLight",
            children: [(0, Wv.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: '"Join Lobby Name" Button Info'
            }), "Game: ", null === dv ? (0, Wv.jsx)(Tv.c, {}) : dv, (0, Wv.jsx)("br", {}), "Lobby Name: ", ev, (0, Wv.jsx)("br", {}), (0, Wv.jsx)("br", {}), (0, Wv.jsx)("br", {}), (0, Wv.jsx)("div", {
              className: "InviteLinkBoxSubheader SmallTextBold",
              children: "Link"
            })]
          }), (0, Wv.jsx)(av, {})]
        })
      })
    }

    function av() {
      var vv;
      const {
        t: zv
      } = (0, dv.x)(), Pv = null !== (vv = sv(Nv.featureFlags.canUseInviteLinks)) && void 0 !== vv ? vv : "Loading Link...", [ev, gv] = (0, Sv.useState)(0), [pv, lv] = (0, Sv.useReducer)((vv => vv + 1), 0);
      return (0, Sv.useEffect)((() => {
        const vv = setTimeout((() => {
          lv()
        }), 1100);
        return () => {
          clearTimeout(vv)
        }
      }), [ev]), Nv.featureFlags.canUseInviteLinks && (0, Wv.jsxs)("div", {
        className: "InviteLinkInnerWrapper",
        children: [(0, Wv.jsx)("div", {
          className: "InviteLinkInner",
          children: Pv
        }), (0, Wv.jsx)(hv.d, {
          className: "InviteLinkCopyButton",
          onClick: () => {
            navigator.clipboard.writeText(Pv).catch((vv => {
              console.error("Failed to copy invite link:", vv)
            })), gv(Date.now())
          },
          disabled: Date.now() - ev < 1e3,
          children: Date.now() - ev < 1e3 ? zv("general:copied") : zv("general:copy")
        })]
      })
    }

    function sv(vv) {
      const [zv, Pv] = (0, Sv.useState)(null);
      return (0, Sv.useEffect)((() => {
        if (!vv) return;
        let zv = !0;
        return (0, ev.F)().then((vv => {
          zv && Pv(vv)
        })).catch((vv => {
          console.error("Failed to get invite link:", vv)
        })), () => {
          zv = !1
        }
      }), [vv]), zv
    }
  },
  36518: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => nv
    });
    var hv = Pv(52),
      Sv = Pv(2324),
      ev = Pv(1858),
      gv = Pv(602),
      pv = Pv(26),
      dv = Pv(1035),
      Nv = Pv.n(dv),
      lv = Pv(36078),
      Tv = Pv(2436),
      Wv = Pv(36086),
      wv = Pv(2457),
      av = Pv(2441),
      sv = Pv(3364),
      Cv = Pv(36090),
      iv = Pv(22),
      cv = Pv(1978),
      Gv = Pv(2279),
      mv = Pv(1209),
      jv = Pv(4662),
      fv = Pv(1923),
      Fv = Pv(73),
      Yv = Pv(1082);
    const nv = (0, hv.memo)((function() {
      const vv = (0, Sv.i)("lobbyLeaderboardInfo"),
        zv = (0, fv.h)("players"),
        Pv = (0, fv.h)("lobbyLeaderboardRows"),
        pv = (0, fv.h)("hiddenPlayerNames"),
        dv = (0, hv.useRef)(null),
        [Nv, lv] = (0, hv.useReducer)((vv => vv + 1), 0);
      return (0, hv.useEffect)((() => (0, cv.b)((() => {
        lv()
      }))), []), (0, Yv.jsx)("div", {
        className: "LobbyLeaderboardContainer Menu",
        children: (0, Yv.jsx)("div", {
          className: "MenuBody",
          children: function() {
            if (!vv) return (0, Yv.jsx)(Yv.Fragment, {});
            const hv = JSON.parse(JSON.stringify(vv)),
              Sv = [...zv.ids],
              Nv = {},
              lv = {};
            for (const vv of Sv) {
              var Tv, wv;
              Nv[vv] = null === (Tv = Pv[vv]) || void 0 === Tv ? void 0 : Tv.colour;
              const zv = null === (wv = Pv[vv]) || void 0 === wv ? void 0 : wv.values;
              zv && (lv[vv] = {
                ...zv
              })
            }
            const av = Object.keys(hv);
            av.sort(((vv, zv) => hv[vv].sortPriority - hv[zv].sortPriority)), Sv.sort(((vv, zv) => {
              if (!lv[vv] || !lv[zv]) return 0;
              for (const Pv of av) {
                const Sv = lv[vv][Pv],
                  ev = lv[zv][Pv];
                let gv = 0;
                if ("string" == typeof Sv && "string" == typeof ev ? gv = Sv.localeCompare(ev) : "number" == typeof Sv && "number" == typeof ev ? gv = Sv - ev : "number" == typeof Sv && "string" == typeof ev ? gv = 1 : "string" == typeof Sv && "number" == typeof ev && (gv = -1), gv) return gv * ("ascending" === hv[Pv].sortOrder ? 1 : -1)
              }
              return 0
            }));
            for (const vv of Sv) {
              var sv, Cv, iv;
              const {
                name: hv,
                ranks: Sv,
                cosmetics: ev
              } = zv.byId[vv], pv = [], dv = null !== (sv = null === (Cv = Pv[vv]) || void 0 === Cv || null === (iv = Cv.tags) || void 0 === iv ? void 0 : iv.flatMap((vv => 0 === vv.length ? vv : [...vv, String.fromCharCode(8198)]))) && void 0 !== sv ? sv : [];
              pv.push(...dv), pv.push(...(0, mv.C)(Sv, hv, (null === ev || void 0 === ev ? void 0 : ev.nameColour) === gv.d || null === ev || void 0 === ev ? void 0 : ev.nameColour)), lv[vv] ??= {}, lv[vv].name = pv
            }

            function fv(vv, Pv) {
              if (lv[vv] && void 0 !== lv[vv][Pv]) {
                if ("name" === Pv) {
                  const {
                    name: hv,
                    cosmetics: Sv
                  } = zv.byId[vv];
                  return (0, Yv.jsxs)("div", {
                    className: "PlayerPfpAndName",
                    children: [Sv && (0, Yv.jsx)(Gv.e, {
                      cosmetics: Sv
                    }), " ", (0, Yv.jsx)(ev.c, {
                      text: lv[vv][Pv],
                      friendBadgeFor: (0, cv.e)(hv, pv) ? hv : void 0
                    })]
                  })
                }
                return (0, Yv.jsx)(ev.c, {
                  text: lv[vv][Pv]
                })
              }
              return ""
            }
            const Fv = Object.keys(hv).filter((vv => !0 !== hv[vv].hidden)).map((vv => {
              var zv;
              return {
                key: vv,
                header: (0, Yv.jsx)(ev.c, {
                  text: null !== (zv = hv[vv].displayName) && void 0 !== zv ? zv : ""
                })
              }
            }));
            return (0, Yv.jsx)("div", {
              ref: dv,
              className: "LobbyLeaderboard",
              children: (0, Yv.jsx)(jv.e, {
                columns: Fv,
                rows: Sv,
                getRowKey: vv => vv,
                renderRow: vv => {
                  const Pv = vv !== zv.localId;
                  return (0, Yv.jsx)(Ov, {
                    playerId: vv,
                    playerName: zv.byId[vv].name,
                    isOtherPlayer: Pv,
                    opensProfileCard: (0, Wv.d)(Pv, zv.byId[vv].name, pv),
                    lobbyLeaderboardInfo: hv,
                    getPlayerValue: fv,
                    playerColors: Nv
                  })
                }
              })
            })
          }()
        })
      })
    }));

    function Ov(vv) {
      let {
        playerId: zv,
        playerName: Pv,
        isOtherPlayer: Sv,
        opensProfileCard: ev,
        lobbyLeaderboardInfo: gv,
        getPlayerValue: dv,
        playerColors: cv
      } = vv;
      const Gv = (0, hv.useRef)(null);
      (0, hv.useEffect)((() => () => {
        Tv.c.closeIfOwner(Gv)
      }), []);
      const mv = {
          icon: "flag",
          text: "Report",
          onClick: () => {
            pv.j.zC("OpenReportMenu", {
              playerEId: zv,
              playerName: Pv,
              al: null,
              serverChatMsgId: null
            })
          }
        },
        jv = () => ({
          ...(0, Wv.c)(zv, Pv),
          showLocation: !1,
          status: null,
          extraActions: [mv],
          moderationActions: null === Pv ? [] : (0, Cv.b)(Pv),
          friendRequestSource: "leaderboard"
        });
      return (0, Yv.jsxs)("tr", {
        ref: Gv,
        "data-pad-focusable": ev || void 0,
        [Tv.d]: ev || void 0,
        onClick: ev ? () => {
          var vv;
          Tv.c.toggle(Gv, {
            ...jv(),
            anchor: null !== (vv = Gv.current.querySelector(".PlayerPfpAndName")) && void 0 !== vv ? vv : Gv.current
          })
        } : void 0,
        onContextMenu: ev ? vv => {
          (0, wv.c)(Gv, vv, jv(), iv.c.get("isTouchScreen"))
        } : void 0,
        onPointerDown: ev ? vv => {
          (0, av.c)(vv, (() => (0, Wv.c)(zv, Pv).playerSocialPreview))
        } : void 0,
        children: [Object.keys(gv).map((vv => !0 === gv[vv].hidden ? null : (0, Yv.jsxs)("td", {
          className: Nv()("LobbyLeaderboardValue SmallTextBold", {
            LobbyLeaderboardValueHighlighted: !Sv
          }),
          children: [(0, Yv.jsx)("div", {
            className: "LobbyLeaderboardValueText",
            children: dv(zv, vv)
          }), (0, Yv.jsx)("div", {
            className: "LobbyLeaderboardValueBg",
            style: {
              backgroundColor: cv[zv]
            }
          })]
        }, vv))), Sv && !ev && (0, Yv.jsx)(lv.e, {
          className: "LobbyLeaderboardRowFloatingActions",
          triggerElementRef: Gv,
          options: [{
            icon: mv.icon,
            text: mv.text,
            onPointerDown: mv.onClick
          }, ...null === Pv || Fv.featureFlags.useSocialFeatures ? [] : (0, sv.d)(null, Pv)]
        })]
      })
    }
  },
  36090: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv
    });
    var hv = Pv(1903),
      Sv = Pv(2337),
      ev = Pv(36098);
    const gv = {
      kick: "lobbyManageEntry:kicked",
      ban: "lobbyManageEntry:banned",
      unban: "lobbyManageEntry:unbanned"
    };

    function pv(vv, zv) {
      return async () => function(vv, zv, Pv) {
        return null === zv ? {
          message: {
            key: "lobbyManageEntry:noAnswer"
          },
          next: null
        } : zv.ok ? {
          message: {
            key: gv[vv.type]
          },
          next: Pv
        } : {
          message: {
            fromServer: zv.message
          },
          next: null
        }
      }(vv, await (0, ev.h)(vv), zv())
    }

    function dv(vv) {
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
        run: pv({
          type: "ban",
          name: vv
        }, (() => function(vv) {
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
            run: pv({
              type: "unban",
              name: vv
            }, (() => null))
          }
        }(vv)))
      }
    }

    function Nv(vv, zv) {
      if (null === vv) return [];
      const Pv = [],
        hv = function(vv, zv) {
          var Pv, hv;
          return null !== (Pv = null !== (hv = vv.here.find((vv => vv.name === zv))) && void 0 !== hv ? hv : vv.away.find((vv => vv.name === zv))) && void 0 !== Pv ? Pv : null
        }(vv, zv);
      var ev, gv;
      return null !== hv && void 0 !== hv && hv.can.kick && Pv.push((ev = zv, gv = hv.can.ban, {
        kind: "act",
        icon: "person-falling-burst",
        text: "lobbyManageEntry:kick",
        destructive: !1,
        confirm: null,
        analyticsClick: {
          id: "lobby_manage.kick",
          value: "profile_card"
        },
        run: pv({
          type: "kick",
          name: ev
        }, (() => gv ? dv(ev) : null))
      })), null !== hv && void 0 !== hv && hv.can.ban && Pv.push(dv(zv)), Pv.push({
        kind: "leave",
        icon: "users-gear",
        text: "lobbyManageEntry:manageLobby",
        destructive: !1,
        onClick: () => {
          (0, Sv.f)({
            page: "players",
            focusName: zv,
            source: "profile_card"
          })
        }
      }), Pv
    }

    function lv(vv) {
      var zv;
      return Nv(null !== (zv = hv.c.get("lobbyManage")) && void 0 !== zv ? zv : null, vv)
    }
  },
  36098: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      h: () => dv
    });
    var hv = Pv(1465),
      Sv = Pv(1903),
      ev = Pv(1876);
    const gv = 1e4;
    let pv = 0;

    function dv(vv) {
      const zv = ++pv;
      return new Promise((Pv => {
        const pv = zv => {
            dv(), clearTimeout(Nv), !1 === (null === zv || void 0 === zv ? void 0 : zv.ok) && (0, hv.reportAnalyticsClick)({
              id: "lobby_manage.refused",
              value: vv.type
            }), Pv(zv)
          },
          dv = Sv.c.subscribe("lobbyManage", (vv => {
            const Pv = function(vv, zv) {
              var Pv;
              return null !== (Pv = null === vv || void 0 === vv ? void 0 : vv.results.find((vv => vv.requestId === zv))) && void 0 !== Pv ? Pv : null
            }(vv, zv);
            null !== Pv && pv(Pv)
          })),
          Nv = setTimeout((() => {
            pv(null)
          }), gv);
        ev.gameBridge.send("lobbyManage", {
          ...vv,
          requestId: zv
        })
      }))
    }
    const Nv = [{
      translationKey: "lobbyManageEntry:noAnswer"
    }];
    class lv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dv;
        this.onChange = vv, this.sendAction = zv, this.pending = new Map, this.statuses = new Map
      }
      send(vv, zv, Pv) {
        var hv;
        return this.statuses.delete(zv), this.pending.set(zv, (null !== (hv = this.pending.get(zv)) && void 0 !== hv ? hv : 0) + 1), this.sendAction(vv).then((vv => {
          var hv;
          const Sv = null !== vv && void 0 !== vv ? vv : {
              requestId: -1,
              ok: !1,
              message: Nv
            },
            ev = (null !== (hv = this.pending.get(zv)) && void 0 !== hv ? hv : 1) - 1;
          ev > 0 ? this.pending.set(zv, ev) : this.pending.delete(zv);
          const gv = !Sv.ok || Sv.message.length > 0 ? Sv.message : null === Pv ? null : [Pv];
          return null !== gv && this.statuses.set(zv, {
            ok: Sv.ok,
            text: gv,
            until: Date.now() + 4e3
          }), this.onChange(), Sv
        }))
      }
      show(vv, zv) {
        this.statuses.set(vv, {
          ...zv,
          until: Date.now() + 4e3
        }), this.onChange()
      }
      expire(vv) {
        for (const [zv, Pv] of this.statuses) Pv.until <= vv && this.statuses.delete(zv)
      }
      nextDeadline() {
        let vv = null;
        for (const Pv of this.statuses.values()) {
          var zv;
          vv = Math.min(null !== (zv = vv) && void 0 !== zv ? zv : 1 / 0, Pv.until)
        }
        return vv
      }
      statusOf(vv, zv) {
        const Pv = this.statuses.get(vv);
        return !Pv || Pv.until <= zv ? null : {
          ok: Pv.ok,
          text: Pv.text
        }
      }
      isPending(vv) {
        return this.pending.has(vv)
      }
    }
  },
  4512: (vv, zv, Pv) => {
    Pv.d(zv, {
      g: () => cv,
      c: () => iv
    });
    var hv = Pv(52),
      Sv = Pv(1439),
      ev = Pv(1858),
      gv = Pv(4520),
      pv = Pv(1082);
    const dv = (0, hv.memo)((function(vv) {
      let {
        initialParameters: zv
      } = vv;
      const Pv = (0, hv.useRef)(null),
        Sv = (0, hv.useRef)(null),
        dv = (0, hv.useRef)(0),
        Nv = (0, hv.useRef)(null),
        lv = zv.description,
        Tv = zv.Bz,
        {
          scale: Wv,
          rotation: wv
        } = null !== zv && void 0 !== zv ? zv : {},
        av = (0, gv.f)();
      return (0, hv.useEffect)((() => {
        const vv = av.onFrame((() => {
          const vv = av.getState();
          if (!vv.isActive || !Pv.current || !Sv.current) return;
          const zv = vv.state;
          if (Pv.current.value = zv.progress, zv.clickCount > dv.current) {
            dv.current = zv.clickCount;
            const vv = Sv.current;
            vv.classList.add("pulse"), Nv.current = setTimeout((() => {
              vv.classList.remove("pulse")
            }), 100)
          }
        }));
        return () => {
          clearTimeout(Nv.current), vv()
        }
      }), [av]), (0, pv.jsx)(pv.Fragment, {
        children: (0, pv.jsxs)("div", {
          className: "QTEProgressBarWrapper",
          style: {
            ...null !== Wv && {
              "--scale": Wv
            },
            ...null !== wv && {
              "--rotation": `${wv}deg`
            }
          },
          children: [(0, pv.jsx)("progress", {
            id: "catch",
            max: 100,
            className: "QTEProgressBar",
            ref: Pv
          }), (0, pv.jsx)("span", {
            className: "QTEProgressBarInteractionIndicator",
            ref: Sv,
            children: (0, pv.jsx)(ev.c, {
              text: [{
                icon: Tv
              }]
            })
          }), (0, pv.jsx)("div", {
            className: "QTEProgressBarDescription",
            children: (0, pv.jsx)(ev.c, {
              text: lv
            })
          })]
        })
      })
    }));
    var Nv = Pv(1035),
      lv = Pv.n(Nv);
    const Tv = 2 * Math.PI * 90,
      Wv = (0, hv.memo)((function(vv) {
        let {
          initialParameters: zv
        } = vv;
        const Pv = (0, hv.useRef)(null),
          Sv = (0, hv.useRef)(null),
          dv = (0, hv.useRef)(null),
          Nv = zv.label,
          Wv = zv.icon,
          wv = zv.bz,
          {
            scale: av,
            rotation: sv,
            rz: Cv
          } = null !== zv && void 0 !== zv ? zv : {},
          iv = (0, gv.f)();
        return (0, hv.useEffect)((() => {
          const vv = iv.onFrame((() => {
            var vv, zv;
            const hv = iv.getState();
            if (!hv.isActive || !Sv.current) return;
            const ev = hv.state,
              gv = null !== (vv = ev.timeRemaining) && void 0 !== vv ? vv : 0,
              pv = null !== (zv = ev.Ez) && void 0 !== zv ? zv : 1,
              Nv = Tv * (1 - gv / pv);
            Sv.current.style.strokeDashoffset = `${Nv}`, Pv.current && (Pv.current.style.opacity = gv > 0 ? "1" : "0"), dv.current && wv && (dv.current.textContent = `${(gv/1e3).toFixed(1)}s`)
          }));
          return () => {
            vv()
          }
        }), [iv, wv]), (0, pv.jsxs)("div", {
          className: "QTETimedClick",
          ref: Pv,
          style: {
            ...null !== av && {
              "--scale": av
            },
            ...null !== sv && {
              "--rotation": `${sv}deg`
            }
          },
          children: [(0, pv.jsxs)("div", {
            className: "QTETimedClickCircleContainer",
            children: [(0, pv.jsxs)("svg", {
              className: "QTETimedClickCircularProgress",
              viewBox: "0 0 200 200",
              children: [(0, pv.jsx)("circle", {
                className: "QTETimedClickProgressTrack",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12"
              }), (0, pv.jsx)("circle", {
                className: "QTETimedClickProgressArc",
                cx: "100",
                cy: "100",
                r: 90,
                fill: "none",
                strokeWidth: "12",
                strokeLinecap: "square",
                strokeDasharray: Tv,
                ref: Sv
              })]
            }), (0, pv.jsx)("div", {
              className: "QTETimedClickCenterContent",
              children: (0, pv.jsx)(ev.c, {
                text: [{
                  icon: Wv
                }],
                className: lv()("QTETimedClickInnerText", {
                  QTETimedClickBreathe: Cv
                })
              })
            })]
          }), (0, pv.jsxs)("div", {
            className: "QTETimedClickRightTextContainer",
            children: [(0, pv.jsx)(ev.c, {
              text: Nv,
              className: "QTETimedClickLabelText"
            }), wv && (0, pv.jsx)("span", {
              className: "QTETimedClickTimeText",
              ref: dv
            })]
          })]
        })
      })),
      wv = (0, hv.memo)((function(vv) {
        let {
          initialParameters: zv
        } = vv;
        const Pv = (0, hv.useRef)(null),
          Sv = (0, hv.useRef)(null),
          dv = (0, hv.useRef)(null),
          Nv = (0, hv.useRef)(!1),
          lv = zv.description,
          Tv = null === zv || void 0 === zv ? void 0 : zv.icon,
          Wv = (0, gv.f)();
        return (0, hv.useEffect)((() => {
          const vv = Wv.onFrame((() => {
            const vv = Wv.getState();
            if (!vv.isActive) return;
            const zv = vv.state;
            if (Pv.current) {
              const vv = 100 * (zv.catchZonePosition - zv.Xz / 2);
              Pv.current.style.left = `${vv}%`, Pv.current.style.width = 100 * zv.Xz + "%", zv.isCatching !== Nv.current && (Nv.current = zv.isCatching, zv.isCatching ? Pv.current.classList.add("catching") : Pv.current.classList.remove("catching"))
            }
            Sv.current && (Sv.current.style.left = 100 * zv.moverPosition + "%"), dv.current && (dv.current.value = zv.progress)
          }));
          return () => {
            vv()
          }
        }), [Wv]), (0, pv.jsxs)("div", {
          className: "QTEGravityBar",
          children: [(0, pv.jsx)("div", {
            className: "QTEGravityBarDescription",
            children: (0, pv.jsx)(ev.c, {
              text: lv
            })
          }), (0, pv.jsx)("progress", {
            max: 100,
            className: "QTEGravityBarProgress",
            ref: dv
          }), (0, pv.jsxs)("div", {
            className: "QTEGravityBarTrack",
            children: [(0, pv.jsx)("div", {
              className: "QTEGravityBarCatchZone",
              ref: Pv
            }), (0, pv.jsx)("div", {
              className: "QTEGravityBarMover",
              ref: Sv,
              children: (0, pv.jsx)("span", {
                children: Tv && (0, pv.jsx)(ev.c, {
                  text: [{
                    icon: Tv,
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
    var av = Pv(626);
    const sv = (0, hv.memo)((function(vv) {
        let {
          initialParameters: zv
        } = vv;
        const Pv = (0, hv.useRef)(null),
          Sv = zv.label,
          dv = zv.gP,
          {
            icon: Nv,
            scale: lv,
            rotation: Tv
          } = null !== zv && void 0 !== zv ? zv : {},
          Wv = 100 * (.5 - dv / 2),
          wv = 100 * dv,
          sv = (0, gv.f)();
        return (0, hv.useEffect)((() => {
          const vv = sv.onFrame((() => {
            const vv = sv.getState();
            if (!vv.isActive || !Pv.current) return;
            const zv = vv.state;
            Pv.current.style.left = 100 * zv.markerPosition + "%"
          }));
          return () => {
            vv()
          }
        }), [sv]), (0, pv.jsxs)("div", {
          className: "QTEPrecisionBarWrapper",
          style: {
            ...!(0, av.N)(lv) && {
              "--scale": lv
            },
            ...!(0, av.N)(Tv) && {
              "--rotation": `${Tv}deg`
            }
          },
          children: [Nv && (0, pv.jsx)(ev.c, {
            text: [{
              icon: Nv
            }],
            className: "QTEPrecisionBarIcon"
          }), (0, pv.jsxs)("div", {
            className: "QTEPrecisionBarTrack",
            children: [(0, pv.jsx)("div", {
              className: "QTEPrecisionBarSuccessZone",
              style: {
                left: `${Wv}%`,
                width: `${wv}%`
              }
            }), (0, pv.jsx)("div", {
              className: "QTEPrecisionBarMarker",
              ref: Pv
            })]
          }), (0, pv.jsx)("div", {
            className: "QTEPrecisionBarLabel",
            children: (0, pv.jsx)(ev.c, {
              text: Sv
            })
          })]
        })
      })),
      Cv = (0, hv.memo)((function(vv) {
        let {
          initialParameters: zv
        } = vv;
        const Pv = (0, hv.useRef)(null),
          [Sv, dv] = (0, hv.useState)((() => new Array(zv.dP).fill("pending"))),
          [Nv, lv] = (0, hv.useState)((() => {
            const vv = zv.TP;
            return (0, av.N)(vv) || vv <= 0 ? [] : new Array(vv).fill("pending")
          })),
          Tv = zv.label,
          {
            icon: Wv
          } = zv,
          wv = (0, hv.useRef)(0),
          sv = (0, hv.useRef)(0),
          Cv = (0, hv.useRef)([]),
          iv = (0, gv.f)();
        return (0, hv.useEffect)((() => {
          const vv = iv.onFrame((() => {
            const vv = iv.getState();
            if (!vv.isActive || !Pv.current) return;
            const zv = vv.state,
              hv = 30 + 60 * zv.outerCircleProgress;
            if (Pv.current.setAttribute("r", String(hv)), !0 === zv.lastClickResult && zv.successes > wv.current) {
              Pv.current.classList.remove("QTERhythmClickOuterCircle--miss"), Pv.current.classList.add("QTERhythmClickOuterCircle--hit");
              const vv = setTimeout((() => {
                var vv;
                null === (vv = Pv.current) || void 0 === vv || vv.classList.remove("QTERhythmClickOuterCircle--hit")
              }), 200);
              Cv.current.push(vv)
            } else if (!1 === zv.lastClickResult && zv.misses > sv.current) {
              Pv.current.classList.remove("QTERhythmClickOuterCircle--hit"), Pv.current.classList.add("QTERhythmClickOuterCircle--miss");
              const vv = setTimeout((() => {
                var vv;
                null === (vv = Pv.current) || void 0 === vv || vv.classList.remove("QTERhythmClickOuterCircle--miss")
              }), 200);
              Cv.current.push(vv)
            }
            zv.successes === wv.current && zv.misses === sv.current || (wv.current = zv.successes, sv.current = zv.misses, dv((vv => {
              const Pv = [...vv];
              for (let hv = 0; hv < zv.dP; hv++) Pv[hv] = hv < zv.successes ? "success" : "pending";
              return Pv
            })), lv((vv => {
              if (0 === vv.length) return vv;
              const Pv = [...vv];
              for (let hv = 0; hv < Pv.length; hv++) Pv[hv] = hv < zv.misses ? "miss" : "pending";
              return Pv
            })))
          }));
          return () => {
            vv();
            for (const vv of Cv.current) clearTimeout(vv);
            Cv.current = []
          }
        }), [iv]), (0, pv.jsxs)("div", {
          className: "QTERhythmClickWrapper",
          children: [(0, pv.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Sv.map(((vv, zv) => (0, pv.jsx)("div", {
              className: "QTERhythmClickDot" + ("success" === vv ? " QTERhythmClickDot--success" : " QTERhythmClickDot--pendingSuccess")
            }, zv)))
          }), (0, pv.jsxs)("div", {
            className: "QTERhythmClickCircleContainer",
            children: [(0, pv.jsxs)("svg", {
              className: "QTERhythmClickSvg",
              viewBox: "0 0 200 200",
              children: [(0, pv.jsx)("circle", {
                className: "QTERhythmClickInnerCircle",
                cx: "100",
                cy: "100",
                r: 30
              }), (0, pv.jsx)("circle", {
                className: "QTERhythmClickOuterCircle",
                cx: "100",
                cy: "100",
                r: 90,
                ref: Pv
              })]
            }), Wv && (0, pv.jsx)("div", {
              className: "QTERhythmClickCenterContent",
              children: (0, pv.jsx)(ev.c, {
                text: [{
                  icon: Wv
                }],
                className: "QTERhythmClickIcon"
              })
            })]
          }), Nv.length > 0 && (0, pv.jsx)("div", {
            className: "QTERhythmClickProgress",
            children: Nv.map(((vv, zv) => (0, pv.jsx)("div", {
              className: "QTERhythmClickDot" + ("miss" === vv ? " QTERhythmClickDot--miss" : " QTERhythmClickDot--pendingMiss")
            }, zv)))
          }), (0, pv.jsx)("div", {
            className: "QTERhythmClickLabel",
            children: (0, pv.jsx)(ev.c, {
              text: Tv
            })
          })]
        })
      }));

    function iv(vv) {
      let {
        qte: zv
      } = vv;
      switch (zv.type) {
        case "progressBar":
          return (0, pv.jsx)(dv, {
            initialParameters: zv.parameters
          });
        case "timedClick":
          return (0, pv.jsx)(Wv, {
            initialParameters: zv.parameters
          });
        case "gravityBar":
          return (0, pv.jsx)(wv, {
            initialParameters: zv.parameters
          });
        case "precisionBar":
          return (0, pv.jsx)(sv, {
            initialParameters: zv.parameters
          });
        case "rhythmClick":
          return (0, pv.jsx)(Cv, {
            initialParameters: zv.parameters
          });
        default:
          return console.warn("Unknown QTE type"), null
      }
    }
    const cv = (0, hv.memo)((function() {
      const [vv, zv] = (0, hv.useState)({
        type: null,
        parameters: null,
        state: null,
        isActive: !1
      });
      return (0, Sv.g)("qteStateUpdated", (vv => {
        zv(vv)
      })), vv.isActive && vv.type ? (0, pv.jsx)("div", {
        className: "QTE",
        "data-camera-keeper": "",
        children: (0, pv.jsx)(iv, {
          qte: vv
        })
      }) : null
    }))
  },
  4520: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => pv,
      f: () => dv
    });
    var hv = Pv(52),
      Sv = Pv(1285),
      ev = Pv(4525);
    const gv = {
        getState: () => ev.d.getCurrentState(),
        onFrame: Sv.s
      },
      pv = (0, hv.createContext)(gv);

    function dv() {
      return (0, hv.useContext)(pv)
    }
  },
  8991: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1923),
      pv = Pv(1082);

    function dv(vv) {
      const zv = Math.floor(vv / 3600),
        Pv = Math.floor(vv % 3600 / 60),
        hv = Math.floor(vv % 60),
        Sv = `${Pv.toString().padStart(2,"0")}:${hv.toString().padStart(2,"0")}`;
      return zv > 0 ? `${zv}:${Sv}` : Sv
    }
    const Nv = (0, hv.memo)((function(vv) {
      let {
        className: zv
      } = vv;
      const {
        recording: Pv,
        seconds: hv
      } = (0, gv.h)("replayRecorder");
      return Pv ? (0, pv.jsxs)("div", {
        className: ev()("RecordingIndicator", zv),
        children: [(0, pv.jsx)("span", {
          className: "RecordingIndicatorDot"
        }), (0, pv.jsx)("span", {
          className: "RecordingIndicatorLabel",
          children: "REC"
        }), (0, pv.jsx)("span", {
          className: "RecordingIndicatorTime",
          children: dv(hv)
        })]
      }) : null
    }))
  },
  35906: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => lv,
      e: () => Wv
    });
    var hv = Pv(52),
      Sv = Pv(1336),
      ev = Pv(1175),
      gv = Pv(1327),
      pv = Pv(3236),
      dv = Pv(4679),
      Nv = Pv(1082);

    function lv(vv) {
      let {
        loading: zv,
        schematics: Pv,
        onSchematicPicked: hv,
        selectedSchematicIdList: Sv = [],
        disableAutoExport: dv
      } = vv;
      const {
        t: lv
      } = (0, ev.x)();
      return (0, Nv.jsxs)("div", {
        className: "SchematicList",
        children: [zv && (0, Nv.jsx)(gv.c, {}), !zv && 0 === Pv.length && (0, Nv.jsx)("div", {
          className: "NoSchematicsText",
          children: lv("worldBuilder:noSavedSchematic")
        }), !zv && Pv.map((vv => (0, Nv.jsx)(pv.i, {
          source: {
            type: "schematic",
            schematic: vv
          },
          gameWidth: "25%",
          useLongRatio: !0,
          onClick: () => {
            hv(vv)
          },
          isSelected: Sv.includes(vv.schematicId),
          hideCcu: !0,
          hideFavourites: !0,
          showPublishedChip: !0,
          hideUnpublishedChip: !0,
          disabled: vv.isAutoExported && dv,
          disabledReason: "worldBuilder:autoExportDisabled"
        }, vv.schematicId)))]
      })
    }

    function Tv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: Sv
      } = vv;
      const {
        t: gv
      } = (0, ev.x)(), [pv, Tv] = (0, hv.useState)(null);
      return (0, Nv.jsxs)("div", {
        className: "SchematicListWindow",
        children: [null === pv && (0, Nv.jsxs)(Nv.Fragment, {
          children: [(0, Nv.jsx)("h1", {
            className: "SchematicPopupTitle",
            children: gv("worldBuilder:schematicList")
          }), (0, Nv.jsx)("h2", {
            className: "SchematicPopupSubtitle",
            children: gv("worldBuilder:clickSchematicForOptions")
          }), (0, Nv.jsx)("div", {
            className: "SchematicPopupSchematicListContainer",
            children: (0, Nv.jsx)(lv, {
              loading: !1,
              schematics: zv,
              onSchematicPicked: vv => {
                Tv(vv)
              },
              disableAutoExport: !1
            })
          })]
        }), null !== pv && (0, Nv.jsx)(dv.h, {
          schematic: pv,
          inSourceWorld: pv.schematicId === Pv,
          onSchematicUpdate: vv => {
            Tv(vv)
          },
          onClose: () => {
            Tv(null), Sv()
          }
        })]
      })
    }

    function Wv(vv) {
      let {
        ownedSchematics: zv,
        currentWorldSchematicId: Pv,
        onClose: hv
      } = vv;
      Sv.NotificationProvider.showCustomPopup({
        body: vv => (0, Nv.jsx)(Tv, {
          ownedSchematics: zv,
          currentWorldSchematicId: Pv,
          onClose: vv
        }),
        middleScreenPopupClassName: "SchematicPopup",
        onClose: hv,
        unlockPointerKey: "schematicListPopup"
      })
    }
  },
  36427: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => jv,
      c: () => mv
    });
    var hv = Pv(4036),
      Sv = Pv(1439),
      ev = Pv(52),
      gv = Pv(6192),
      pv = Pv(4021),
      dv = Pv(1272),
      Nv = Pv(1876),
      lv = Pv(1858),
      Tv = Pv(1442),
      Wv = Pv(1175),
      wv = Pv(36434),
      av = Pv(1035),
      sv = Pv.n(av),
      Cv = Pv(1295),
      iv = Pv(1042),
      cv = Pv(1265),
      Gv = Pv(1082);
    const mv = "SleepingOverlay";

    function jv() {
      const {
        t: vv
      } = (0, Wv.x)(), [zv, Pv] = (0, ev.useState)(!1), [av, jv] = (0, ev.useState)(null), [Fv, Yv] = (0, ev.useState)(1), [nv, Ov] = (0, ev.useState)(!1), [Dv, Kv] = (0, ev.useState)(!1), Vv = (0, ev.useRef)(0), Uv = (0, ev.useRef)(!1), Rv = (0, ev.useRef)(!1), xv = (0, ev.useRef)(), tv = (0, ev.useRef)(null);

      function qv() {
        const vv = null !== av && void 0 !== av ? av : "Rested Speed";
        Nv.gameBridge.send("wakeUp", Dv ? vv : null), tv.current = null, Pv(!1), jv(null), Yv(1), Ov(!1), Kv(!1)
      }

      function Iv() {
        return !nv && (qv(), !0)
      }
      return (0, Sv.g)("PlayerPhysicsTypeUpdate", (vv => {
        vv !== tv.current && (tv.current = vv, vv === gv.s.SLEEPING ? (Rv.current || (Vv.current = Nv.gameBridge.lookup("cameraZoom", null), Rv.current = !0), Uv.current = !0, Nv.gameBridge.send("setCameraZoom", 3), Pv(!0), Yv(function() {
          for (const vv of Nv.gameBridge.lookup("blocksStandingOn", null)) {
            if (wv.b.leafBeds.includes(vv)) return console.log(`Found leaf bed: ${vv}`), 1;
            if (wv.b.woolBeds.includes(vv)) return console.log(`Found woold bed: ${vv}`), 2;
            if (wv.b.strongBeds.includes(vv)) return console.log(`Found strong bed ${vv}`), 3
          }
          return 1
        }())) : (Rv.current = !1, Pv(!1), jv(null), Yv(1)))
      })), (0, ev.useEffect)((() => () => {
        (0, dv.q)(mv)
      }), []), (0, ev.useEffect)((() => {
        zv ? (0, dv.r)(mv) : ((0, dv.q)(mv), Uv.current && (Nv.gameBridge.send("setCameraZoom", Vv.current), Uv.current = !1))
      }), [zv]), (0, cv.q)("overlay", xv, Iv, zv), (0, Gv.jsx)(hv.c, {
        className: "SleepingOverlay",
        "data-camera-keeper": "",
        in: zv,
        timeout: 300,
        nodeRef: xv,
        unmountOnExit: !0,
        children: (0, Gv.jsx)("div", {
          ref: xv,
          onClick: vv => {
            Iv() && vv.stopPropagation()
          },
          children: (0, Gv.jsxs)("div", {
            className: "SleepingOverlayBody",
            children: [(0, Gv.jsx)("div", {
              className: "SleepingOverlayPerkList",
              children: pv.j.map((zv => (0, Gv.jsxs)(fv, {
                restedEffect: zv,
                pl: av,
                setChosenRestedEffect: jv,
                children: [(0, Gv.jsxs)("div", {
                  className: "SleepingOverlayPerkTitle",
                  children: [(0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: zv
                    }]
                  }), pv.i[zv].shortName]
                }), (0, Gv.jsx)("div", {
                  className: "SleepingOverlayPerkDescription",
                  children: vv(pv.i[zv].description, {
                    time: pv.i[zv].effectLevelDurations[Fv] / 6e4
                  })
                })]
              }, zv)))
            }), (0, Gv.jsxs)("div", {
              className: "SleepingOverlayPerkBottom",
              children: [(0, Gv.jsx)("div", {
                className: "SleepingOverlayPerkBottomSide"
              }), (0, Gv.jsxs)(Tv.d, {
                className: "SleepingOverlayWakeUpButton",
                onClick: vv => {
                  Dv ? qv() : (Ov(!0), (0, Cv.ab)((() => {
                    Ov(!1), Kv(!0)
                  }), !0)), vv.stopPropagation()
                },
                loading: nv,
                children: [!Dv && (0, Gv.jsxs)(Gv.Fragment, {
                  children: [(0, Gv.jsx)(iv.b, {
                    name: "film"
                  }), " ", vv("classicGame:watchAdToGetRestedPerk")]
                }), Dv && vv("classicGame:wakeUp")]
              }), (0, Gv.jsxs)("div", {
                className: "SleepingOverlayPerkBottomSide",
                children: [(0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 1 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: "Leaf Bed"
                    }]
                  })
                }), (0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 2 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
                    text: [{
                      icon: "Red Bed"
                    }]
                  })
                }), (0, Gv.jsx)("div", {
                  className: sv()("SleepingOverlayBedIcon", {
                    SleepingOverlayBedIconActive: 3 === Fv
                  }),
                  children: (0, Gv.jsx)(lv.c, {
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
    const fv = (0, ev.memo)((function(vv) {
      let {
        children: zv,
        restedEffect: Pv,
        pl: hv,
        setChosenRestedEffect: Sv
      } = vv;
      return Pv === hv ? (0, Gv.jsx)(Tv.j, {
        onClick: vv => {
          vv.stopPropagation()
        },
        children: zv
      }) : (0, Gv.jsx)(Tv.e, {
        onClick: vv => {
          Sv(Pv), vv.stopPropagation()
        },
        children: zv
      })
    }))
  },
  36086: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      d: () => dv
    });
    var hv = Pv(602),
      Sv = Pv(1876),
      ev = Pv(1612),
      gv = Pv(73),
      pv = Pv(1243);

    function dv(vv, zv, Pv) {
      return gv.featureFlags.useSocialFeatures && vv && null === (0, pv.b)(zv, Pv)
    }

    function Nv(vv, zv) {
      var Pv, gv;
      const pv = ev.d.getSocialState().friends.find((vv => vv.name.toLowerCase() === zv.toLowerCase())),
        dv = Sv.gameBridge.latest("players").byId[vv],
        Nv = void 0 !== dv && dv.name === zv,
        lv = Nv && null !== (Pv = dv.cosmetics) && void 0 !== Pv ? Pv : void 0,
        Tv = pv && lv ? {
          ...pv,
          cosmetics: lv
        } : pv;
      return {
        playerSocialPreview: null !== Tv && void 0 !== Tv ? Tv : {
          isError: !1,
          name: zv,
          ranks: Nv ? [...dv.ranks] : [],
          cosmetics: null !== lv && void 0 !== lv ? lv : {},
          nameColour: null !== (gv = null === lv || void 0 === lv ? void 0 : lv.nameColour) && void 0 !== gv ? gv : hv.d,
          location: {
            status: "inGame"
          }
        },
        isFriend: void 0 !== pv
      }
    }
  },
  8997: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(4287),
      Sv = Pv(4292);

    function ev(vv) {
      let {
        children: zv,
        showing: Pv,
        globallyUniqueKey: ev,
        alwaysMountChildren: gv = !1,
        doGameplayStartStopOnShow: pv = !0,
        keepsMovement: dv = !1
      } = vv;
      return (0, Sv.e)(!0, Pv, ev, dv), (0, hv.b)(pv, Pv), Pv || gv ? zv : null
    }
  },
  4662: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1082);

    function pv(vv) {
      let {
        columns: zv,
        rows: Pv,
        getRowKey: Sv,
        renderRow: pv,
        className: dv
      } = vv;
      return (0, gv.jsxs)("table", {
        className: ev()("Table", dv),
        children: [(0, gv.jsx)("thead", {
          children: (0, gv.jsx)("tr", {
            children: zv.map((vv => (0, gv.jsx)("th", {
              children: vv.header
            }, vv.key)))
          })
        }), (0, gv.jsx)("tbody", {
          children: Pv.map((vv => (0, gv.jsx)(hv.Fragment, {
            children: pv(vv)
          }, Sv(vv))))
        })]
      })
    }
  },
  36379: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Yv,
      i: () => fv,
      m: () => Fv,
      p: () => av
    });
    var hv = Pv(1035),
      Sv = Pv.n(hv),
      ev = Pv(52),
      gv = Pv(62),
      pv = Pv(1348),
      dv = Pv(1442),
      Nv = Pv(1344),
      lv = Pv(1265),
      Tv = Pv(1175),
      Wv = Pv(36387),
      wv = Pv(1082);

    function av(vv) {
      const [zv, Pv] = (0, ev.useState)((() => (0, Wv.m)(vv)));
      return (0, ev.useEffect)((() => (Pv((0, Wv.m)(vv)), (0, Wv.L)((() => {
        Pv((0, Wv.m)(vv))
      })))), [vv]), zv
    }

    function sv(vv, zv) {
      "function" === typeof vv ? vv(zv) : vv && (vv.current = zv)
    }

    function Cv(vv) {
      let {
        tutorial: zv,
        step: Pv,
        enabled: hv = !0
      } = vv;
      const Sv = av(zv);
      return hv && Sv === Pv
    }

    function iv(vv, zv) {
      const Pv = (0, Wv.p)(vv),
        hv = Pv.indexOf(zv);
      return !Pv.slice(hv + 1).some((zv => (0, Wv.x)(vv, zv)))
    }

    function cv(vv, zv, Pv, hv) {
      let {
        tutorial: Sv,
        step: ev,
        waitForClick: gv = !1,
        onPrevious: pv
      } = vv;
      const dv = zv && (0, Wv.t)(Sv, ev),
        Nv = zv && !iv(Sv, ev),
        Tv = gv ? hv : Pv;
      let wv = null;
      dv ? wv = () => {
        null === pv || void 0 === pv || pv(), (0, Wv.q)(Sv, ev)
      } : Nv && (wv = () => {
        (0, Wv.j)(Sv)
      }), (0, lv.q)("popup", null !== Tv && void 0 !== Tv ? Tv : Pv, wv, zv && null !== Tv, null, dv ? void 0 : "controller:menusSkipTutorial")
    }

    function Gv(vv) {
      let {
        tutorial: zv,
        step: Pv,
        text: hv,
        waitForClick: Sv = !1,
        onPrevious: ev
      } = vv;
      const {
        t: gv
      } = (0, Tv.x)(), pv = iv(zv, Pv);
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, wv.jsx)("div", {
          className: "TutorialStepText",
          children: hv
        }), (0, wv.jsxs)("div", {
          className: "TutorialStepButtons",
          children: [(0, Wv.t)(zv, Pv) && (0, wv.jsx)(dv.e, {
            className: "TutorialStepButton",
            onClick: () => {
              null === ev || void 0 === ev || ev(), (0, Wv.q)(zv, Pv)
            },
            children: gv("tutorial:back")
          }), !Sv && (0, wv.jsx)(dv.d, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wv.f)(Pv)
            },
            padDefaultFocus: !0,
            children: gv(pv ? "tutorial:done" : "tutorial:next")
          }), !pv && (0, wv.jsx)(dv.e, {
            className: "TutorialStepButton",
            onClick: () => {
              (0, Wv.j)(zv)
            },
            children: gv("tutorial:skip")
          })]
        })]
      })
    }
    const mv = 6;

    function jv(vv) {
      let {
        rect: zv,
        margin: Pv
      } = vv;
      const hv = Math.max(0, zv.top - Pv),
        Sv = zv.bottom + Pv,
        ev = Math.max(0, zv.left - Pv),
        gv = zv.right + Pv;
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: 0,
            left: 0,
            right: 0,
            height: hv
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: Sv,
            left: 0,
            right: 0,
            bottom: 0
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hv,
            left: 0,
            width: ev,
            height: Sv - hv
          }
        }), (0, wv.jsx)("div", {
          className: "TutorialSpotlightBackdrop",
          style: {
            top: hv,
            left: gv,
            right: 0,
            height: Sv - hv
          }
        })]
      })
    }

    function fv(vv) {
      let {
        target: zv,
        placement: Pv,
        boxRef: hv,
        className: dv,
        spotlightMargin: lv = mv,
        children: Tv
      } = vv;
      const {
        getArrowProps: Wv,
        getTooltipProps: av,
        setTooltipRef: sv,
        setTriggerRef: Cv
      } = (0, pv.d)({
        placement: Pv,
        trigger: null,
        visible: !0,
        interactive: !0,
        closeOnOutsideClick: !1,
        offset: [0, lv]
      });
      (0, ev.useLayoutEffect)((() => {
        Cv(zv)
      }), [zv, Cv]);
      const iv = function(vv, zv) {
        const [Pv, hv] = (0, ev.useState)(null);
        return (0, ev.useEffect)((() => {
          if (!zv || !vv) return void hv(null);
          let Pv = 0,
            Sv = null;
          const ev = () => {
            const zv = vv.getBoundingClientRect();
            Sv && zv.left === Sv.left && zv.top === Sv.top && zv.width === Sv.width && zv.height === Sv.height || (Sv = zv, hv(zv)), Pv = requestAnimationFrame(ev)
          };
          return ev(), () => {
            cancelAnimationFrame(Pv)
          }
        }), [vv, zv]), Pv
      }(zv, !0);
      (0, ev.useEffect)((() => {
        null === zv || void 0 === zv || zv.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        })
      }), [zv]);
      const cv = (0, ev.useCallback)((vv => {
        sv(vv), hv && (hv.current = vv)
      }), [sv, hv]);
      return (0, gv.createPortal)((0, wv.jsxs)(wv.Fragment, {
        children: [iv && (0, wv.jsx)(jv, {
          rect: iv,
          margin: lv
        }), (0, wv.jsxs)("div", {
          ref: cv,
          ...av({
            className: Sv()("tooltip-container SmallTextLight TutorialStep", dv)
          }),
          children: [Tv, (0, wv.jsx)("div", {
            ...Wv({
              className: "tooltip-arrow"
            })
          })]
        })]
      }), (0, Nv.k)())
    }
    const Fv = (0, ev.forwardRef)((function(vv, zv) {
      let {
        placement: Pv = "right",
        children: hv,
        ...Sv
      } = vv;
      const gv = Cv(Sv),
        pv = (0, ev.useRef)(null),
        dv = (0, ev.useRef)(null);
      cv(Sv, gv, pv, dv);
      const [Nv, lv] = (0, ev.useState)(null), Tv = hv.ref, Wv = (0, ev.useCallback)((vv => {
        dv.current = vv, lv(vv), sv(zv, vv), sv(Tv, vv)
      }), [zv, Tv]);
      return (0, wv.jsxs)(wv.Fragment, {
        children: [(0, ev.cloneElement)(hv, {
          ref: Wv
        }), gv && (0, wv.jsx)(fv, {
          target: Nv,
          placement: Pv,
          boxRef: pv,
          children: (0, wv.jsx)(Gv, {
            ...Sv
          })
        })]
      })
    }));

    function Yv(vv) {
      const zv = Cv(vv),
        Pv = (0, ev.useRef)(null);
      return cv(vv, zv, Pv, null), zv ? (0, gv.createPortal)((0, wv.jsx)("div", {
        className: "TutorialCentreBackdrop",
        children: (0, wv.jsx)("div", {
          ref: Pv,
          className: "tooltip-container SmallTextLight TutorialStep TutorialCentreStep",
          children: (0, wv.jsx)(Gv, {
            ...vv
          })
        })
      }), (0, Nv.k)()) : null
    }
  },
  36198: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => gv,
      m: () => pv,
      q: () => dv
    });
    var hv = Pv(52),
      Sv = Pv(2899);
    const ev = 8,
      gv = "InGameHeaderContainer",
      pv = "TopRightElements";

    function dv(vv) {
      const [zv] = (0, Sv.d)(), [Pv, dv] = (0, hv.useState)(!1);
      return (0, hv.useLayoutEffect)((() => {
        if (!vv) return;
        const zv = document.querySelector(`.${gv}`),
          Pv = document.querySelector(`.${pv}`),
          hv = () => {
            const hv = vv.getBoundingClientRect(),
              Sv = zv ? zv.getBoundingClientRect().right : 0,
              gv = Pv ? Pv.getBoundingClientRect().left : window.innerWidth,
              pv = hv.left < Sv + ev,
              Nv = hv.right > gv - ev;
            dv(pv || Nv)
          };
        hv();
        const Sv = new ResizeObserver(hv);
        return Sv.observe(vv), zv && Sv.observe(zv), Pv && Sv.observe(Pv), () => {
          Sv.disconnect()
        }
      }), [vv, zv]), Pv
    }
  },
  6287: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(52),
      Sv = Pv(39);

    function ev(vv, zv) {
      var Pv;
      const [ev, gv] = (0, hv.useState)(null !== (Pv = Sv.h.getItem(vv)) && void 0 !== Pv ? Pv : zv);
      return [ev, zv => {
        Sv.h.setItem(vv, zv), gv(zv)
      }]
    }
  },
  36252: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1647),
      pv = Pv(1442),
      dv = Pv(1327),
      Nv = Pv(1042),
      lv = Pv(1082);

    function Tv(vv) {
      let {
        label: zv,
        icon: Pv,
        placeholder: Sv,
        onSubmit: Tv
      } = vv;
      const Wv = (0, hv.useRef)(null),
        [wv, av] = (0, hv.useState)(""),
        [sv, Cv] = (0, hv.useState)("Enter"),
        [iv, cv] = (0, hv.useState)(null);
      (0, hv.useEffect)((() => {
        if ("Success" !== sv && "Error" !== sv) return;
        const vv = setTimeout((() => {
          "Success" === sv && Wv.current && (Wv.current.value = "", av("")), Cv("Enter")
        }), "Success" === sv ? 1e3 : 4e3);
        return () => {
          clearTimeout(vv)
        }
      }), [sv]);
      const Gv = () => {
        const vv = wv.trim();
        "" !== vv && "Enter" === sv && (Cv("Loading"), Tv(vv).then((vv => {
          Wv.current && ("error" in vv ? null === vv.error ? Cv("Enter") : (cv(vv.error), Cv("Error")) : Cv("Success"))
        })))
      };
      return (0, lv.jsxs)("div", {
        className: "PlayerNameField",
        onKeyDown: vv => {
          vv.target === Wv.current && "Escape" !== vv.key && vv.stopPropagation()
        },
        children: [(0, lv.jsxs)("div", {
          className: ev()("AddFriendBodyOverlay", `AddFriendBodyOverlay${sv}`),
          children: ["Loading" === sv && (0, lv.jsx)(dv.c, {}), "Success" === sv && (0, lv.jsx)(Nv.b, {
            name: "check"
          }), "Error" === sv && iv]
        }), (0, lv.jsxs)("div", {
          className: "PlayerSearch",
          children: [(0, lv.jsx)(gv.c, {
            className: "PlayerSearchInput",
            domRef: Wv,
            maxLength: 32,
            placeholderText: Sv,
            ariaLabel: Sv,
            stopPropagation: !1,
            onValueChange: vv => {
              av(vv)
            },
            onEnter: Gv
          }), (0, lv.jsxs)(pv.d, {
            className: "PlayerSearchInputButton SmallTextLight",
            disabled: "Enter" !== sv || "" === wv.trim(),
            onClick: Gv,
            children: [(0, lv.jsx)(Nv.b, {
              name: Pv
            }), " ", zv]
          })]
        })]
      })
    }
  },
  36229: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Tv
    });
    var hv = Pv(52),
      Sv = Pv(1035),
      ev = Pv.n(Sv),
      gv = Pv(1175),
      pv = Pv(1042),
      dv = Pv(1082);
    const Nv = {
        unlisted: "link",
        public: "globe",
        whitelist: "user-check",
        private: "lock"
      },
      lv = ["unlisted", "public", "whitelist", "private"];

    function Tv(vv) {
      let {
        visibility: zv,
        onPick: Pv
      } = vv;
      const {
        t: Sv
      } = (0, gv.x)(), Tv = (0, hv.useRef)([]);
      return (0, dv.jsx)("div", {
        className: "WorldSocialTiles",
        role: "group",
        "aria-label": Sv("worldSocial:whoCanJoin"),
        children: lv.map(((vv, hv) => {
          const gv = vv === zv;
          return (0, dv.jsxs)("button", {
            ref: vv => {
              Tv.current[hv] = vv
            },
            type: "button",
            className: ev()("WorldSocialTile", {
              WorldSocialTileSelected: gv
            }),
            "aria-pressed": gv,
            tabIndex: gv ? 0 : -1,
            onKeyDown: vv => {
              ((vv, zv) => {
                const Pv = "ArrowRight" === vv.key || "ArrowDown" === vv.key ? 1 : "ArrowLeft" === vv.key || "ArrowUp" === vv.key ? -1 : 0;
                var hv;
                0 !== Pv && (vv.preventDefault(), null === (hv = Tv.current[(zv + Pv + lv.length) % lv.length]) || void 0 === hv || hv.focus())
              })(vv, hv)
            },
            onClick: () => {
              Pv(vv)
            },
            children: [(0, dv.jsx)("span", {
              className: "WorldSocialTileIcon",
              children: (0, dv.jsx)(pv.b, {
                name: Nv[vv]
              })
            }), (0, dv.jsxs)("span", {
              className: "WorldSocialTileText",
              children: [(0, dv.jsx)("span", {
                className: "WorldSocialTileTitle",
                children: Sv(`worldSocial:${vv}`)
              }), (0, dv.jsx)("span", {
                className: "WorldSocialTileDescription",
                children: Sv(`worldSocial:${vv}Description`)
              })]
            })]
          }, vv)
        }))
      })
    }
  },
  36243: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => pv
    });
    var hv = Pv(1175),
      Sv = Pv(2472),
      ev = Pv(4129),
      gv = Pv(1082);

    function pv(vv) {
      let {
        MT: zv,
        children: Pv,
        ...pv
      } = vv;
      const {
        t: dv
      } = (0, hv.x)();
      return (0, gv.jsx)("div", {
        className: "WhitelistTickRow",
        onClick: () => {
          zv.onChange(!zv.on)
        },
        children: (0, gv.jsx)(Sv.f, {
          ...pv,
          opensProfileCard: !1,
          children: (0, gv.jsxs)("div", {
            className: "WhitelistTickRowActions",
            onClick: vv => {
              vv.stopPropagation()
            },
            children: [Pv, (0, gv.jsx)("label", {
              className: "WhitelistTickRowTick",
              children: (0, gv.jsx)(ev.e, {
                checked: zv.on,
                disabled: !1,
                ariaLabel: dv("worldSocial:letJoin", {
                  playerName: pv.playerSocialPreview.name
                }),
                onChange: vv => {
                  zv.onChange(vv.target.checked)
                }
              })
            })]
          })
        })
      })
    }
  },
  36221: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => av
    });
    var hv = Pv(52),
      Sv = Pv(1175),
      ev = Pv(1827),
      gv = Pv(73),
      pv = Pv(22),
      dv = Pv(1465),
      Nv = Pv(2511),
      lv = Pv(8895),
      Tv = Pv(1442),
      Wv = Pv(1042),
      wv = Pv(1082);

    function av(vv) {
      let {
        worldCode: zv,
        message: Pv
      } = vv;
      const {
        t: av
      } = (0, Sv.x)(), {
        isTouchScreen: sv
      } = (0, pv.i)(["isTouchScreen"]), Cv = gv.featureFlags.canUseInviteLinks, iv = (0, lv.k)(Cv && null === Pv), [cv, Gv] = (0, Nv.i)(), mv = (0, hv.useRef)(null);
      if (null !== Pv) return (0, wv.jsxs)("div", {
        className: "WorldSocialLinkRow WorldSocialLinkRowMessage",
        children: [(0, wv.jsx)(Wv.b, {
          name: "lock"
        }), (0, wv.jsx)("span", {
          children: Pv
        })]
      });
      const jv = Cv ? iv : zv,
        fv = sv && Cv && (0, Nv.e)();
      return (0, wv.jsxs)("div", {
        className: "WorldSocialLinkRow",
        children: [!Cv && (0, wv.jsx)("span", {
          className: "WorldSocialCodeLabel",
          children: av("worldSocial:worldCode")
        }), (0, wv.jsx)("input", {
          ref: mv,
          className: "WorldSocialLink",
          readOnly: !0,
          value: null !== jv && void 0 !== jv ? jv : "",
          "aria-label": av(Cv ? "worldSocial:worldLink" : "worldSocial:worldCode"),
          onFocus: vv => {
            vv.currentTarget.select()
          }
        }), (0, wv.jsxs)(Tv.d, {
          className: "WorldSocialCopy",
          disabled: null === jv,
          onClick: () => {
            null !== jv && (0, Nv.g)(jv, {
              useShareSheet: fv,
              onOutcome: vv => {
                if ((0, dv.reportAnalyticsClick)({
                    id: "world_social.copy_link",
                    value: "copied" !== vv || Cv ? vv : "code"
                  }), "copied" === vv) Gv();
                else if ("failed" === vv) {
                  var zv;
                  null === (zv = mv.current) || void 0 === zv || zv.focus(), ev.f.showMessage({
                    translationKey: "partyBar:copyFailed"
                  })
                }
              }
            })
          },
          children: [(0, wv.jsx)(Wv.b, {
            name: cv ? "check" : fv ? "up-from-bracket" : "copy"
          }), " ", av(cv ? "general:copied" : fv ? "worldSocial:share" : "general:copy")]
        })]
      })
    }
  },
  36236: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => wv,
      d: () => Wv,
      g: () => Tv
    });
    var hv = Pv(602),
      Sv = Pv(1175),
      ev = Pv(1612),
      gv = Pv(2472),
      pv = Pv(2432),
      dv = Pv(1442),
      Nv = Pv(36243),
      lv = Pv(1082);

    function Tv(vv, zv) {
      var Pv;
      return {
        isError: !1,
        name: vv,
        ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
        cosmetics: null !== zv && void 0 !== zv ? zv : {},
        nameColour: null !== (Pv = null === zv || void 0 === zv ? void 0 : zv.nameColour) && void 0 !== Pv ? Pv : hv.d,
        location: {
          status: "offline"
        }
      }
    }

    function Wv(vv) {
      let {
        player: zv,
        isFriend: Pv = !1,
        status: hv,
        showLocation: dv = void 0 === hv,
        MT: Tv,
        onSendFriendRequest: Wv,
        actions: wv,
        zIndex: av
      } = vv;
      const {
        t: sv
      } = (0, Sv.x)();
      let Cv = hv;
      null !== Tv && void 0 !== Tv && Tv.on && (Cv = (0, lv.jsxs)(lv.Fragment, {
        children: [null !== hv && void 0 !== hv ? hv : (0, lv.jsx)(pv.b, {
          socialPreview: zv
        }), (0, lv.jsxs)("span", {
          className: "WorldSocialCanJoin",
          children: [" \xb7 ", sv("worldSocial:canJoin")]
        })]
      }));
      const iv = {
        playerSocialPreview: zv,
        isFriend: Pv,
        hideFriendBadge: !0,
        onFriendRemoved: Pv ? vv => {
          ev.d.removeFriendFromState(vv)
        } : void 0,
        status: Cv,
        showLocation: dv,
        onSendFriendRequest: Wv,
        zIndex: av
      };
      return Tv ? (0, lv.jsx)(Nv.e, {
        ...iv,
        MT: Tv,
        children: wv
      }) : (0, lv.jsx)(gv.f, {
        ...iv,
        opensProfileCard: !1,
        children: wv || void 0
      })
    }

    function wv(vv) {
      let {
        row: zv,
        MT: Pv,
        canInvite: hv,
        invited: ev,
        onInvite: gv,
        zIndex: pv
      } = vv;
      const {
        t: Nv
      } = (0, Sv.x)(), Tv = "online" === zv.place ? dv.d : dv.e;
      return (0, lv.jsx)(Wv, {
        player: zv.friend,
        isFriend: !0,
        status: "here" === zv.place ? Nv("worldSocial:inThisWorld") : void 0,
        showLocation: !0,
        MT: Pv,
        zIndex: pv,
        actions: hv && (0, lv.jsx)(Tv, {
          className: "WorldSocialInvite SmallTextLight",
          disabled: ev,
          onClick: gv,
          ariaLabel: `${Nv("worldSocial:invite")} ${zv.friend.name}`,
          children: Nv(ev ? "worldSocial:invited" : "worldSocial:invite")
        })
      })
    }
  },
  36213: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      e: () => gv,
      i: () => Nv
    });
    var hv = Pv(52),
      Sv = Pv(4342),
      ev = Pv(1827);

    function gv(vv) {
      const zv = {
        lobbyName: vv,
        answer: null,
        response: Sv.e.getSocialSettings(vv)
      };
      return zv.response.then((vv => {
        zv.answer = vv
      })), zv
    }
    const pv = new Map;

    function dv(vv) {
      pv.set(vv.lobbyName, vv)
    }

    function Nv(vv) {
      const [zv] = (0, hv.useState)((() => function(vv) {
        var zv;
        const Pv = null !== (zv = pv.get(vv)) && void 0 !== zv ? zv : null;
        return null !== Pv && void 0 !== Pv && Pv.answer && "error" in Pv.answer ? null : Pv
      }(vv))), [Pv, gv] = (0, hv.useState)((() => null !== zv && void 0 !== zv && zv.answer && "settings" in zv.answer ? zv.answer.settings : null)), [dv, Nv] = (0, hv.useState)(!0), [lv, Tv] = (0, hv.useState)(null !== Pv), Wv = (0, hv.useRef)(Pv);
      Wv.current = Pv;
      const wv = (0, hv.useRef)(0),
        av = (0, hv.useRef)(0),
        sv = (0, hv.useRef)(!1),
        Cv = (0, hv.useRef)(!0),
        iv = (0, hv.useCallback)((async zv => {
          const Pv = ++wv.current,
            hv = await (null !== zv && void 0 !== zv ? zv : Sv.e.getSocialSettings(vv));
          Cv.current && Pv === wv.current && (Tv(!0), Nv(!1), "error" in hv || gv(hv.settings))
        }), [vv]),
        cv = (0, hv.useCallback)((() => {
          Nv(!0), iv()
        }), [iv]),
        Gv = (0, hv.useCallback)((() => {
          av.current > 0 ? sv.current = !0 : iv()
        }), [iv]);
      (0, hv.useEffect)((() => (Cv.current = !0, pv.delete(vv), Nv(!0), iv(null === zv || void 0 === zv ? void 0 : zv.response), () => {
        Cv.current = !1
      })), [iv, vv, zv]);
      const mv = vv => {
        wv.current++, Nv(!1), Wv.current = vv, gv(vv)
      };
      return {
        settings: Pv,
        loading: dv,
        answered: lv,
        retry: cv,
        refresh: Gv,
        change: async function(zv, Pv) {
          let {
            quiet: hv = !1,
            onAnswer: gv
          } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          const pv = Wv.current;
          if (null === pv) return !1;
          mv(Pv(pv)), av.current > 0 && (sv.current = !0), av.current++;
          const dv = await Sv.e.setSocialSettings(vv, zv);
          av.current--;
          const Nv = !("error" in dv);
          if (!Cv.current) return Nv;
          if (null === gv || void 0 === gv || gv(dv), hv);
          else if ("error" in dv) ev.f.showMessage({
            translationKey: dv.error
          });
          else
            for (const vv of dv.notFound) ev.f.showMessage({
              translationKey: "worldSocial:notFound",
              params: {
                playerName: vv
              }
            });
          if (av.current > 0) return Nv;
          const lv = sv.current;
          return sv.current = !1, !lv && "settings" in dv ? mv(dv.settings) : (lv || mv(pv), iv()), Nv
        }
      }
    }
  },
  36258: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => gv,
      e: () => ev
    });
    var hv = Pv(144);
    const Sv = new Map;

    function ev(vv, zv) {
      var Pv;
      const hv = null !== (Pv = Sv.get(vv)) && void 0 !== Pv ? Pv : new Map;
      hv.set(zv, Date.now()), Sv.set(vv, hv)
    }

    function gv(vv) {
      const zv = Sv.get(vv);
      if (!zv) return [];
      const Pv = Date.now();
      for (const [Sv, ev] of zv) Pv - ev >= hv.q && zv.delete(Sv);
      return [...zv.keys()]
    }
  },
  36217: (vv, zv, Pv) => {
    function hv(vv, zv) {
      const Pv = zv.toLowerCase();
      for (const hv of vv)
        if (hv.toLowerCase() === Pv) return !0;
      return !1
    }

    function Sv(vv, zv, Pv) {
      const Sv = [],
        ev = [],
        gv = [];
      for (const pv of vv) !pv.isError && pv.name && ("inGame" === pv.location.status && pv.location.inLobbyName === zv || hv(Pv, pv.name) ? ev.push({
        friend: pv,
        place: "here"
      }) : "offline" === pv.location.status ? gv.push({
        friend: pv,
        place: "offline"
      }) : Sv.push({
        friend: pv,
        place: "online"
      }));
      return [...Sv, ...ev, ...gv]
    }

    function ev(vv, zv, Pv) {
      const Sv = [],
        ev = vv.flatMap((vv => "here" === vv.place ? [vv.friend.name] : []));
      for (const gv of [...ev, ...zv]) hv(Sv, gv) || hv(Pv, gv) || Sv.push(gv);
      return Sv
    }

    function gv(vv, zv) {
      return null === vv || void 0 === vv || !vv.canManage || hv(vv.whitelist, zv) ? "none" : "whitelist" === vv.visibility ? "required" : "quiet"
    }

    function pv(vv) {
      if (null === vv) return !0;
      const {
        visibility: zv
      } = vv;
      return "public" === zv || "unlisted" === zv || "whitelist" === zv && vv.canManage
    }

    function dv(vv, zv, Pv) {
      if (Pv) {
        const Pv = zv.filter((zv => !hv(vv.whitelist, zv)));
        return {
          ...vv,
          whitelist: [...vv.whitelist, ...Pv]
        }
      }
      return {
        ...vv,
        whitelist: vv.whitelist.filter((vv => !hv(zv, vv)))
      }
    }

    function Nv(vv, zv) {
      const Pv = [];
      for (let hv = 0; hv < vv.length; hv += zv) Pv.push(vv.slice(hv, hv + zv));
      return Pv
    }
    Pv.d(zv, {
      d: () => pv,
      e: () => ev,
      i: () => Sv,
      k: () => hv,
      o: () => Nv,
      r: () => gv,
      t: () => dv
    })
  },
  36398: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => ev
    });
    var hv = Pv(22),
      Sv = Pv(1295);

    function ev() {
      const {
        clientEscMenuOptions: vv
      } = (0, hv.i)(["clientEscMenuOptions"]);
      return (0, Sv.E)() && vv.showChat
    }
  },
  36351: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv
    });
    var hv = Pv(2599),
      Sv = Pv(3438),
      ev = Pv(2702);
    const gv = ["Unable to create vertex buffer"];
    let pv = {};

    function dv(vv, zv) {
      const Pv = new Date;
      console.error(`${Pv.getUTCHours()}:${Pv.getUTCMinutes()}:${Pv.getUTCSeconds()}`, vv, zv, null === zv || void 0 === zv ? void 0 : zv.stack), gv.includes(null === zv || void 0 === zv ? void 0 : zv.message) && (console.error("Unrecoverable error occurred. Leaving game."), (0, hv.d)().client.leaveGameUnwanted({
        reason: `Unrecoverable error occurred.\nThis is a bug.\n\nError:\n${zv.message}\n\nPlease refresh the page.`,
        requiresRefresh: !0,
        canReconnect: !1,
        automaticallyReconnect: !1
      })), (0, ev.logError)("warning", `${vv}\n ${zv} "\n" ${null===zv||void 0===zv?void 0:zv.stack}`);
      const Sv = vv + zv + (null === zv || void 0 === zv ? void 0 : zv.stack);
      Sv in pv || ((0, ev.logError)("error", `${vv}\n ${zv} "\n" ${null===zv||void 0===zv?void 0:zv.stack}`), pv[Sv] = !0)
    }(0, Sv.onGameReset)((() => {
      pv = {}
    }))
  },
  4589: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => tv,
      e: () => xv
    });
    var hv = Pv(4592),
      Sv = Pv(302);
    const ev = 120,
      gv = 260,
      pv = 1.15,
      dv = 1.2,
      Nv = 2,
      lv = 1.08,
      Tv = .8,
      Wv = .95,
      wv = 8,
      av = "[\"')\\]\u300d\u300f\uff09]*",
      sv = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${av}$`),
      Cv = new RegExp(`[?\uff1f]${av}$`),
      iv = new RegExp(`[!\uff01]${av}$`),
      cv = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Gv = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      mv = new RegExp(`[${Gv}]`),
      jv = new RegExp(`[${Gv}]|[^${Gv}]+`, "g"),
      fv = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function Fv(vv) {
      let zv = 2166136261;
      for (let Pv = 0; Pv < vv.length; Pv++) zv ^= vv.charCodeAt(Pv), zv = Math.imul(zv, 16777619);
      return (zv >>> 0) / 4294967295 * 2 - 1
    }

    function Yv(vv) {
      var zv;
      if (mv.test(vv)) return 1;
      const Pv = vv.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        hv = Pv.replace(/[^0-9]/g, "");
      if (hv.length > 0 && !/\p{L}/u.test(Pv)) return Math.min(hv.length, 4);
      const Sv = null !== (zv = Pv.match(fv)) && void 0 !== zv ? zv : [];
      if (0 === Sv.length) {
        var ev, gv;
        const vv = null !== (ev = null === (gv = Pv.match(/\p{L}/gu)) || void 0 === gv ? void 0 : gv.length) && void 0 !== ev ? ev : 0;
        return 0 === vv ? 0 : Math.min(Math.max(1, Math.round(vv / 2.5)), wv)
      }
      const pv = Pv.replace(/[^\p{L}]/gu, ""),
        dv = Sv.length > 1 && "e" === Sv.at(-1) && pv.endsWith("e") && !pv.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(vv.replace(/[^\p{L}]/gu, ""));
      return Math.min(Sv.length - (dv ? 1 : 0), wv)
    }

    function nv(vv) {
      return vv.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ov(vv) {
      const zv = vv.replace(/[^\p{L}]/gu, "");
      return zv.length >= 2 && zv === zv.toUpperCase() && zv !== zv.toLowerCase()
    }

    function Dv(vv, zv) {
      var Pv;
      const wv = zv && (0, hv.h)(zv),
        av = null !== (Pv = null === wv || void 0 === wv ? void 0 : wv.syllableMs) && void 0 !== Pv ? Pv : hv.c,
        Gv = function(vv) {
          const zv = [];
          for (const hv of (0, Sv.Vb)(vv))
            if ("string" === typeof hv)
              for (const vv of hv.split(/(\s+)/)) {
                if ("" === vv) continue;
                if (/^\s+$/.test(vv)) {
                  zv.push({
                    kind: "space",
                    text: vv
                  });
                  continue
                }
                if (!mv.test(vv)) {
                  zv.push({
                    kind: "word",
                    text: vv,
                    delayMs: 0
                  });
                  continue
                }
                let hv = !0;
                for (const Sv of null !== (Pv = vv.match(jv)) && void 0 !== Pv ? Pv : []) {
                  var Pv;
                  const vv = zv.at(-1);
                  hv || "word" !== (null === vv || void 0 === vv ? void 0 : vv.kind) || mv.test(Sv) || /[\p{L}\p{N}]/u.test(Sv) ? (hv || zv.push({
                    kind: "space",
                    text: "\u200b"
                  }), zv.push({
                    kind: "word",
                    text: Sv,
                    delayMs: 0
                  }), hv = !1) : vv.text += Sv
                }
              } else zv.push({
                kind: "icon",
                text: hv.icon,
                delayMs: 0
              });
          return zv
        }(vv),
        fv = [];
      let Dv = [];
      for (const hv of Gv) "space" !== hv.kind && (Dv.push(hv), sv.test(hv.text) && (fv.push(Dv), Dv = []));
      fv.push(Dv);
      const Kv = [];
      let Vv = 0;
      for (const hv of fv) {
        var Uv, Rv;
        const vv = null !== (Uv = null === (Rv = hv.at(-1)) || void 0 === Rv ? void 0 : Rv.text) && void 0 !== Uv ? Uv : "",
          zv = Cv.test(vv),
          Pv = iv.test(vv),
          Sv = hv.map((vv => "word" === vv.kind ? Yv(vv.text) : 1)),
          Gv = Sv.findLastIndex((vv => vv > 0));
        for (const [Cv, iv] of hv.entries()) {
          const vv = "word" === iv.kind,
            hv = Sv[Cv];
          iv.delayMs = Vv;
          for (let Sv = 0; wv && Sv < hv; Sv++) {
            const {
              intonation: ev
            } = wv;
            let gv = Gv > 0 ? -ev.declineSemitones * (Cv / Gv) : 0;
            gv += Fv(`${nv(iv.text)}|${Sv}`) * ev.variationSemitones;
            const sv = Math.min(1, ev.variationSemitones);
            let cv = wv.glideSemitones,
              mv = 1;
            Pv && (gv += ev.exclaimLiftSemitones, mv *= pv), zv && Cv === Gv && (gv += ev.questionRiseSemitones * (hv > 1 ? .5 + .5 * Sv / (hv - 1) : 1), Sv === hv - 1 && (cv = Math.abs(cv) + ev.questionRiseSemitones / 2)), vv && Ov(iv.text) && (gv += Nv * sv, mv *= dv), hv > 1 && 0 === Sv && (gv += Tv * sv, mv *= lv), Kv.push({
              atMs: Vv + Sv * av,
              semitones: gv,
              glideSemitones: cv,
              durationMs: Sv < hv - 1 ? Math.min(wv.durationMs, av * Wv) : wv.durationMs,
              level: mv
            })
          }
          Vv += hv * av + (sv.test(iv.text) ? gv : cv.test(iv.text) ? ev : 0)
        }
      }
      return {
        pieces: Gv.map((vv => "space" === vv.kind ? vv : "icon" === vv.kind ? {
          kind: "icon",
          icon: vv.text,
          delayMs: vv.delayMs
        } : {
          kind: "word",
          text: vv.text,
          delayMs: vv.delayMs
        })),
        blips: Kv
      }
    }
    var Kv = Pv(1175),
      Vv = Pv(1234),
      Uv = Pv(1884);

    function Rv(vv) {
      if ("string" === typeof vv) return vv;
      const zv = Vv.f.get().getCurrentLanguageCode();
      return (0, Kv.j)(zv, vv.translationKey, (0, Kv.i)(vv.params, Uv.b.shown))
    }

    function xv(vv) {
      const zv = void 0 === vv.voice ? null : (0, hv.l)(vv.voice),
        Pv = zv && (0, hv.h)(zv);
      return {
        plan: Dv(Rv(vv.line), Pv),
        synth: Pv
      }
    }

    function tv(vv) {
      const zv = [];
      let Pv = [];
      for (const [Sv, ev] of vv.entries()) {
        var hv;
        "space" === ev.kind && (" " !== ev.text || "icon" !== (null === (hv = vv[Sv + 1]) || void 0 === hv ? void 0 : hv.kind)) ? (Pv.length > 0 && zv.push(Pv), zv.push([ev]), Pv = []) : Pv.push(ev)
      }
      return Pv.length > 0 && zv.push(Pv), zv
    }
  },
  36193: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    const hv = [{
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

    function Sv(vv, zv, Pv) {
      const Sv = Math.abs(vv - zv),
        ev = Date.now() - Pv;
      for (const gv of hv)
        if (vv < gv.maxDist) return Sv >= gv.hardUpdateDist || ev > gv.timeBetweenSoftChecks && Sv >= gv.softUpdateDist;
      return !1
    }
  },
  36456: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv,
      f: () => ev,
      j: () => Sv
    });
    const hv = [.25, .5, 1, 2, 4, 8, 16];

    function Sv(vv, zv) {
      const Pv = hv;
      let Sv = Pv.indexOf(vv);
      return -1 === Sv && (Sv = Pv.findIndex((zv => zv >= vv)), -1 === Sv && (Sv = Pv.length - 1)), "up" === zv ? Pv[Math.min(Sv + 1, Pv.length - 1)] : Pv[Math.max(Sv - 1, 0)]
    }

    function ev(vv) {
      return vv <= hv[0]
    }

    function gv(vv) {
      return vv >= hv[hv.length - 1]
    }
  },
  36512: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv
    });
    const hv = "data-replay-ui-active",
      Sv = [{
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
  36515: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Nv,
      h: () => Tv,
      l: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(36512);

    function gv() {
      const vv = {};
      for (const {
          group: zv
        }
        of ev.e) vv[zv] = !0;
      return vv
    }
    let pv = gv();

    function dv() {
      Sv.j.zC("replayViewer|uiVisibilityChanged")
    }

    function Nv() {
      return pv
    }

    function lv(vv, zv) {
      pv[vv] !== zv && (pv = {
        ...pv,
        [vv]: zv
      }, "nametag" === vv && hv.c.set({
        areNametagsHidden: !zv
      }), dv())
    }

    function Tv() {
      pv = gv(), hv.c.set({
        areNametagsHidden: !1
      }), dv()
    }
  },
  9049: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => gv,
      g: () => Sv,
      k: () => lv
    });
    var hv = Pv(1548);

    function Sv(vv) {
      var zv;
      return {
        ...gv.store,
        yaw: gv.store.yaw + (null !== (zv = hv.b[vv].previewYaw) && void 0 !== zv ? zv : 0)
      }
    }
    const ev = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      gv = {
        player: ev,
        store: {
          ...ev,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function pv(vv, zv) {
      vv instanceof Promise ? vv.then(zv).catch((vv => {
        console.error("Couldn't open the preview", vv)
      })) : zv(vv)
    }
    class dv {
      constructor(vv) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height), null !== this.view && vv.show(this.view))
        }))
      }
      show(vv) {
        var zv;
        this.view = vv, null === (zv = this.opened) || void 0 === zv || zv.show(vv)
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    class Nv {
      constructor(vv) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(vv).then((vv => vv.ready)), pv(vv, (vv => {
          this.closed ? vv.close() : (this.opened = vv, null !== this.size && vv.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var vv, zv;
        return null !== (vv = null === (zv = this.opened) || void 0 === zv ? void 0 : zv.isReady()) && void 0 !== vv && vv
      }
      setCosmetic(vv, zv) {
        var Pv;
        null === (Pv = this.opened) || void 0 === Pv || Pv.setCosmetic(vv, zv)
      }
      playEmote(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.playEmote(vv)
      }
      setOrbit(vv) {
        var zv;
        null === (zv = this.opened) || void 0 === zv || zv.setOrbit(vv)
      }
      resetCamera() {
        var vv;
        null === (vv = this.opened) || void 0 === vv || vv.resetCamera()
      }
      async untilDrawn(vv) {
        var zv;
        await this.ready, await (null === (zv = this.opened) || void 0 === zv ? void 0 : zv.untilDrawn(vv))
      }
      resize(vv, zv) {
        var Pv;
        this.size = {
          width: vv,
          height: zv
        }, null === (Pv = this.opened) || void 0 === Pv || Pv.resize(vv, zv)
      }
      close() {
        var vv;
        this.closed = !0, null === (vv = this.opened) || void 0 === vv || vv.close(), this.opened = null
      }
    }
    const lv = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(vv) {
        this.host = vv
      }
      setDefaultHost(vv) {
        this.makeDefault = vv
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(vv) {
        return new dv(this.current().openMob(vv))
      }
      openPet(vv) {
        return new dv(this.current().openPet(vv))
      }
      openMobLineup(vv) {
        return new dv(this.current().openMobLineup(vv))
      }
      openCharacter(vv, zv) {
        return new Nv(this.current().openCharacter(vv, zv))
      }
    }
  },
  9044: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.e,
      i: () => hv.g,
      j: () => hv.k
    });
    var hv = Pv(9049);
    class Sv {
      constructor(vv) {
        this.load = vv, this.loaded = null, this.loading = null
      }
      run(vv) {
        return null !== this.loaded ? vv(this.loaded) : (this.loading ??= this.load().then((vv => (this.loaded = vv, vv)), (vv => {
          throw this.loading = null, vv
        })), this.loading.then(vv))
      }
    }
    class ev {
      constructor() {
        this.mobScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(154)]).then((() => Pv(40376))))), this.characterScene = new Sv((() => Promise.all([Pv.e(70), Pv.e(227), Pv.e(226), Pv.e(246), Pv.e(95), Pv.e(247), Pv.e(73), Pv.e(72), Pv.e(244), Pv.e(71), Pv.e(254), Pv.e(248), Pv.e(253), Pv.e(251), Pv.e(243), Pv.e(219), Pv.e(265), Pv.e(223), Pv.e(238), Pv.e(249), Pv.e(252), Pv.e(75), Pv.e(196), Pv.e(216), Pv.e(94), Pv.e(220), Pv.e(235), Pv.e(113), Pv.e(236), Pv.e(74), Pv.e(153)]).then((() => Pv(40476)))))
      }
      openMob(vv) {
        return this.mobScene.run((zv => zv.openMobPreview(vv)))
      }
      openPet(vv) {
        return this.mobScene.run((zv => zv.openPetPreview(vv)))
      }
      openMobLineup(vv) {
        return this.mobScene.run((zv => zv.openMobLineupPreview(vv)))
      }
      openCharacter(vv, zv) {
        return this.characterScene.run((Pv => Pv.openCharacterPreview(vv, zv)))
      }
    }
    hv.k.setDefaultHost((() => new ev))
  },
  36342: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      h: () => ev
    });
    const hv = new Map;

    function Sv(vv) {
      var zv;
      return null === vv ? null : null !== (zv = hv.get(vv)) && void 0 !== zv ? zv : null
    }

    function ev(vv, zv) {
      return hv.set(vv, zv), () => {
        hv.get(vv) === zv && hv.delete(vv)
      }
    }
  },
  36139: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => sv,
      e: () => Cv,
      i: () => pv,
      k: () => Wv,
      o: () => iv,
      r: () => Tv,
      u: () => Gv,
      y: () => av,
      z: () => cv
    });
    var hv = Pv(22),
      Sv = Pv(26);
    const ev = "clientGameInventoryButtonsChanged",
      gv = new Map;

    function pv() {
      return [...gv.values()].sort(((vv, zv) => {
        var Pv, hv;
        return (null !== (Pv = vv.order) && void 0 !== Pv ? Pv : 0) - (null !== (hv = zv.order) && void 0 !== hv ? hv : 0)
      }))
    }
    let dv = null;

    function Nv(vv) {
      dv = vv
    }
    let lv = !1;

    function Tv(vv) {
      lv = !0;
      try {
        vv.onClick()
      } finally {
        lv = !1
      }
      vv.panel && "clientGame" === hv.c.get("openInGameMenuName") && Nv(vv.id)
    }

    function Wv() {
      return lv
    }

    function wv() {
      return pv().filter((vv => vv.panel && !vv.disabled))
    }

    function av(vv) {
      const zv = wv(),
        Pv = zv.findIndex((vv => vv.id === dv));
      return !(Pv < 0 || zv.length < 2) && (Tv(zv[(Pv + vv + zv.length) % zv.length]), !0)
    }

    function sv() {
      return null !== dv && wv().length > 1
    }

    function Cv() {
      Nv(null)
    }

    function iv() {
      "inventory" !== hv.c.get("openInGameMenuName") && Nv(null)
    }

    function cv() {
      const vv = dv;
      return Nv(null), vv
    }

    function Gv(vv) {
      return gv.set(vv.id, vv), Sv.j.zC(ev, pv(), !0), () => {
        gv.get(vv.id) === vv && (gv.delete(vv.id), Sv.j.zC(ev, pv()))
      }
    }
  },
  36137: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => pv,
      g: () => Cv,
      j: () => iv,
      m: () => Wv,
      q: () => Nv,
      r: () => sv,
      u: () => wv,
      w: () => lv
    });
    var hv = Pv(22),
      Sv = Pv(26),
      ev = Pv(1272),
      gv = Pv(36139);
    const pv = "clientGameUiChanged";
    let dv = null;

    function Nv() {
      return dv
    }

    function lv(vv, zv) {
      const Pv = {
        content: vv,
        menu: zv
      };
      return dv = Pv, Sv.j.zC(pv, dv, !0), () => {
        dv === Pv && (dv = null, av = !1, Cv(), Sv.j.zC(pv, null))
      }
    }
    let Tv = null;

    function Wv() {
      return Tv
    }

    function wv(vv) {
      return Tv = vv, () => {
        Tv === vv && (Tv = null)
      }
    }
    let av = !1;

    function sv() {
      const vv = hv.c.get("openInGameMenuName");
      "clientGame" !== vv && (av = "inventory" === vv), (0, gv.k)() || (0, gv.e)(), (0, ev.r)(ev.e), hv.c.set({
        openInGameMenuName: "clientGame",
        openEverythingMenuName: null
      })
    }

    function Cv() {
      cv(!1)
    }

    function iv() {
      cv(av)
    }

    function cv(vv) {
      "clientGame" === hv.c.get("openInGameMenuName") && hv.c.set({
        openInGameMenuName: vv ? "inventory" : null
      }), vv || (0, gv.e)(), av = !1
    }
  },
  36473: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => kz,
      h: () => rz
    });
    var hv = Pv(4019),
      Sv = Pv(626),
      ev = Pv(3521),
      gv = Pv(3546),
      pv = Pv.n(gv);
    const dv = new Set(["nameTagInfo", "multilineTextBox", "animationScript", "content", "skyBox", "opts", "fromBlockData", "toBlockData", "sharedBlockData"]),
      Nv = "EV_boolean",
      lv = "EV_double",
      Tv = "EV_string",
      Wv = "EV_doubleArr",
      wv = "EV_armour",
      av = "EV_other",
      sv = "EV_cosmetics",
      Cv = "OEV_boolean",
      iv = "OEV_int",
      cv = "OEV_double",
      Gv = "OEV_string",
      mv = "OEV_stringArr",
      jv = "OEV_meshScaling",
      fv = "IV_int",
      Fv = "IV_string",
      Yv = "IV_doubleArr",
      nv = "IV_double",
      Ov = "HV_int",
      Dv = "HV_slots",
      Kv = "EnvV_string",
      Vv = "EnvV_double",
      Uv = "EnvV_doubleArr",
      Rv = "EnvV_boolean",
      xv = {
        type: Tv,
        name: Tv,
        position: Wv,
        rotation: Wv,
        scale: lv,
        speed: lv,
        jumping: Nv,
        crouching: Nv,
        cameraPitch: lv,
        armSwinging: Nv,
        heldItemName: Tv,
        heldItemEnchantmentTier: Tv,
        pose: Tv,
        followingEId: Tv,
        ridingVehicleEId: Tv,
        leaderboardTop: Tv,
        meshKind: Tv,
        meshOpts: Tv,
        followingOffset: Wv,
        shouldMatchFollowingEntityRotation: Nv,
        meshOffset: Wv,
        baseRenderHeading: lv,
        armour: wv,
        wV: av,
        playerCustomisations: sv,
        variation: Tv,
        metaInfo: Tv,
        soundName: Tv,
        volume: lv,
        refDistance: lv,
        maxHearDist: lv,
        rate: lv,
        aiState: Tv
      },
      tv = {
        opacity: cv,
        zIndex: iv,
        overlayColour: Gv,
        canSee: Cv,
        meshScaling: jv,
        nameTagInfo: Gv,
        multilineTextBox: Gv,
        hasPriorityNametag: Cv,
        ranks: mv,
        nameColour: Gv,
        _isAlive: Cv,
        _invisibleEffect: Cv,
        _invincible: Cv,
        killfeedColour: Gv,
        hideNameSeed: iv,
        _glowingEffect: Cv,
        lockHeadToBody: Cv
      },
      qv = {
        itemName: Fv,
        amount: fv,
        position: Yv,
        size: nv,
        attributes: Fv
      },
      Iv = {
        skyBox: Kv,
        fogColourOverride: Kv,
        fogChunkDistanceOverride: Vv,
        cameraTint: Uv,
        fogOnSkybox: Rv,
        fogBlockDistanceOverride: Vv
      },
      Qv = {
        type: "array",
        items: "double"
      },
      Zv = {
        type: "array",
        items: "int"
      },
      Av = {
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
      Lv = {
        type: "map",
        values: Qv
      };

    function Hv(vv, zv) {
      return {
        type: "record",
        name: vv,
        fields: [{
          name: "x",
          type: zv
        }]
      }
    }
    const Mv = {
        type: "array",
        items: {
          type: "record",
          name: "OtherEntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Hv(Cv, "boolean"), Hv(iv, "int"), Hv(cv, "double"), Hv(Gv, "string"), Hv(mv, {
              type: "array",
              items: "string"
            }), Hv(jv, Lv)]
          }]
        }
      },
      yv = {
        type: "array",
        items: {
          type: "record",
          name: "EntityDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Hv(Nv, "boolean"), Hv(lv, "double"), Hv(Tv, "string"), Hv(Wv, Qv), Hv(wv, Av), Hv(av, Mv), Hv(sv, {
              type: "map",
              values: "string"
            })]
          }]
        }
      },
      Bv = {
        type: "array",
        items: {
          type: "record",
          name: "ItemDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Hv(fv, "int"), Hv(Fv, "string"), Hv(nv, "double"), Hv(Yv, Qv)]
          }]
        }
      },
      Jv = {
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
      Ev = {
        type: "record",
        name: "HotbarDeltaEntry",
        fields: [{
          name: "i",
          type: "int"
        }, {
          name: "v",
          type: ["null", Hv(Ov, "int"), Hv(Dv, Jv)]
        }]
      },
      ov = {
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
      bv = {
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
      rv = {
        type: "array",
        items: {
          type: "record",
          name: "EnvironmentDeltaEntry",
          fields: [{
            name: "i",
            type: "int"
          }, {
            name: "v",
            type: ["null", Hv(Kv, "string"), Hv(Vv, "double"), Hv(Uv, Qv), Hv(Rv, "boolean")]
          }]
        }
      },
      kv = [{
        name: "eD",
        type: "record",
        fields: [{
          name: "pos",
          type: Zv
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
          type: Zv
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
      Xv = [{
        name: "playSound",
        type: "record",
        fields: [{
          name: "KP",
          type: "string"
        }, {
          name: "volume",
          type: "double"
        }, {
          name: "rate",
          type: "double"
        }, {
          name: "RP",
          type: ["null", {
            type: "record",
            name: "SoundPosSettings",
            fields: [{
              name: "xP",
              type: ["null", "string", Qv],
              default: null
            }, {
              name: "tP",
              type: ["null", "double"],
              default: null
            }, {
              name: "qP",
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
          name: "lS",
          type: "string"
        }, {
          name: "WS",
          type: "int"
        }, {
          name: "animationScript",
          type: ["null", "string"]
        }, {
          name: "wS",
          type: "double"
        }, {
          name: "aS",
          type: "double"
        }]
      }, {
        name: "bullet",
        type: "record",
        fields: [{
          name: "Je",
          type: "string"
        }, {
          name: "bulletDirections",
          type: {
            type: "array",
            items: Qv
          }
        }]
      }, {
        name: "lifeformHealth",
        type: "record",
        fields: [{
          name: "Cv",
          type: "string"
        }, {
          name: "Uz",
          type: ["null", "double"],
          default: null
        }, {
          name: "Rz",
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
          name: "aP",
          type: "double"
        }, {
          name: "angle",
          type: "double"
        }, {
          name: "sP",
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
      uv = [{
        name: "position",
        type: Qv
      }, {
        name: "direction",
        type: Qv
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

    function vz() {
      const vv = [{
        name: "entities",
        type: {
          type: "map",
          values: yv
        }
      }, {
        name: "items",
        type: {
          type: "map",
          values: Bv
        }
      }, {
        name: "camera",
        type: {
          type: "record",
          name: "ReplayCameraState",
          fields: uv
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
              items: Ev
            }
          }]
        }],
        default: null
      }, {
        name: "playerHud",
        type: ["null", ov],
        default: null
      }];
      return vv.push({
        name: "effects",
        type: ["null", {
          type: "array",
          items: {
            type: "record",
            name: "ReplayActiveEffect",
            fields: [{
              name: "Cv",
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
      }), vv.push({
        name: "uiElements",
        type: bv
      }, {
        name: "environment",
        type: rv
      }, {
        name: "structuralEvents",
        type: {
          type: "array",
          items: kv
        }
      }, {
        name: "ephemeralEvents",
        type: {
          type: "array",
          items: Xv
        }
      }), vv
    }
    const zz = {
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
                name: "MT",
                type: "int"
              }, {
                name: "position",
                type: Qv
              }, {
                name: "direction",
                type: Qv
              }, {
                name: "easing",
                type: Qv
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
    let Pz;

    function hz(vv) {
      if (9 === vv) return Pz ??= (zv = [{
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
            name: "ZD",
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
              type: Zv
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
            fields: vz()
          }
        }
      }, zz], pv().Type.forSchema({
        type: "record",
        name: "RecordingState",
        fields: zv
      }, {
        kW: Object.create(null)
      })), Pz;
      var zv
    }
    var Sz = Pv(36480);
    let ez, gz, pz, dz;
    const Nz = 12;
    var lz, Tz;
    const Wz = [0, 1, 8, 255, "length", "undefined", 63, 6, "fromCodePoint", 7, 12, "push", null, 91, 8191, 88, 13, 14, 3, 60, 16, 113, 4, 114, 115, !0, 15, 2, 10, 5, 11, 9];

    function wz(vv) {
      return typeof zP !== Wz[5] && zP ? (new zP).decode(new PP(vv)) : typeof hP !== Wz[5] && hP ? hP.from(vv).toString("utf-8") : gP(vv)
    }

    function az() {}

    function sz() {
      sz = function() {}
    }
    var Cz, iz;
    sz(lz = {}, Tz = ["Y:{0T9`#gkC!|Z9p.jbxtRm)^k;)m6pa2kI/W", '|b:x"apIU!)|hXUTR:Lb!rl_rDvjYOB7f]9`u;&bn1=)K`', ":54b*^875~jC29[L>~/c<&yd1|9c4", "O~vD|V#Vwz^x~iRe,*4bYtj}oI", "2VCdtkR;@@Ys[G&+mB3B{:=pik6x1Gw61kocalGg#@*q}GtXsu{qyu+Jcg", '(2(%;;M}B@mG#`n9z}"c96OihJl18?Z', ".J0<n9F|^ks@NGX.}u5B}R(u;DpjKat_Y7yIk3v", "U^(5;A++fzU)Sk6X", "NS2PkRaiH#TRTZ8/`@Bl%>arSy7WvexaR:OmIAs!=J?", "?jBzkRmyA@o^`@xum5;Awfj.%&lSu$/+;N5BDuwyb_bjyrb", "hN}3]Ufa^|<zB]B/RZ/ca=hyRIqq?lE5I5~mcNc.h@uwM+J", ":}q`uNYuV|tkX^?+>^kd%tz.9_vt~e%+y&&N=&KU%O=S_8", "!grd0F<0#0]zZ$_u{XIzbr6iD!Nqt@%1#DU<XtZ8cwjB>O4EfO%xl)v", "!|1/JAPL/wZuA?~L*3U(s^a%RJhs_Zx.xv", 'x^8etkk/"1B(:[aXO*U"Gfv', "ju`mmr6iBgPVu$.gvV8e&0=y$", 'p~BDQ}4XB}}l.[M%[}@(E)UJ.~>"_8"a*v', '~|fD{:x;,zA=$$6/y5;5z}Fn[g&|)ldX)6,3e9^/[}.14Gc1[}/"q^~8', "b*nAM:+=KyYd<e2.$*4", '~zNDH(C.4}6W={1LPbEq8fC!,}j49l#/8wR"Xtup`', '.jH(<fBph|N)@tGc$50<2(J8~!r"C9Bg.1,n}YV8', "KZOBY9$X2y=IJ@jc<V8", "ij!xS|~Ivz.NmZc%%kY%W}Zyw|)Nc]", "7jx`|RmV4wPC!^{.$llbwG5/hkcxVlZ5ijQ$jf<0M&YquATu2k+cr0op<", ",bM3H,H;?O|Vc9<X1bHlq+i<9#v[f`4pIdY%0YH%l|.1Ch5.+]SlaP2_`", "K75nBi_ivkW!&f}%W3>qj040,|q4n9+9eD?>p9q!ECnqkpv/(3|b", 'HN!m>6,<OC8/Se6XDb/"A*GVG~{|Ie=e', "uDT<C}|n)y0`K]KTxDGzf+U>d~(+4", '2z&(!(g>Y}"(7X)c>25ee', "T3*xN+@<?ZZjR5$pAb:cjFm#+DPlSev7pt,/XO~=l}*=4", 'm}Q$X}2r8DXm(]K%fjR>ulC!H!"r5h=eD2Y596(Jg@QdK{t_(&6>=x)*uJ', "x2Jd2(v", "Xj1D}Ysah_,ZPrb69J1b;r(>z1.O<5@5>~8nXN6}s_", "Z5%d.N|%2y][E5E9O*r<x6cahzQd4", "~|sByqugV0@2>{<c_4", "yOiNy0|}{krl$+nF(v", "Q:rA?uer;_r=U)Bpvw30jkv", 'btr"9l};EjAO}+mX|"$xQDVJ>#,1$Y~L0:rASGyLbx]2*]z5', '+J>0MO`7>D$3(t>"/DkcW;58:I)Nf+"a9}`Ayqi4', "b%^l+PPLIyp3_8NcKj5B2{l;n1.", 'R6H`WLc|nC=sRZc+,k*$x6p+w}p&H9Q%"uV"~rC<M~z2({O.', '&Lv,*+A/"O^17!CFeueqOF|id~WGQrSuCV|>^|{%cgv*EZQ+O&XPBDei<', "j^1/]R^>!OX^V!57<ak%pPb+kIcm4Gz", '}*g%+ngyoj]Ro`c1?ZKzMtR4"1ql~{b', 'o6~%YPX<p!m2@Avgbz"%Wr=pVId=CelL6tYq]Rj}$', '0}MBa?F<6!C[I@M"r~[/tRE<^|rNv^z', "|*%mX}IVa#WrB]4cmVFbn}}4", '3j2(z}1Xvke<c8<pkOk0Z&a<!w0=n@"a', "j&Sb=9ciBkB", "@ErAanYJC~Z2zG//p@)`", "|Dr<vR|a,w&S^eX%Hv", 't~;c:a(geO`~"i41lv', "<VI,Q9@<cJh%Li~La^4", '~5rmg9J#uD=0?G41;cQBqx(b[zT1~t(5G:i"3|z|ej"yUXS"|c6meDIV$', "1tO%0SG/v@:16`bcfuDxhf_!51A(H{nFEjKNH,T+^}q|3Z@", "!}plpAy/`!_y&6y+L~+m/i`Uk&tqE8Ae$*8", "<%V<`0$<^}+uB{hLWj#zIf#VkOj=mhk2WJQBsVgpszd=CZN_S&U`/", "b2=b7lgIEI", "~VxNl)J+8}um2Z0u", "+E*$B*)gg}Tb>]x%~JXe_{`p1k5e4", "xL^Dd}jag|o&~ic6)^4eI+;4", "UOr($xq4PC0r.6gL+*;>qf]r(S6r8hK7q24byYPu|kk>y?vgY~z/p", "Q^<z6;C!7~`zFZx.Z|9`l*q.5jgp@ZTe", "|OCGD|DUEjj07?kaE2!xb+1!6_`i={}.6k|D5{.fJ&rkDl3.z4", 'FdyBq^;1vJk<^]M[aup/i3SVNj%yq+*9U7R"+iwgb_1*|hm9]zD(2i~8', "<V<(O07LTyvhR9(_7&0`", "B3X/V6^/jknae8@", "936<?0?|[k(lR86g03f359!!aD6m*O$6/V~x&F2<uJ)@yl8pV1p/5Lu8", 'h34PAS7LEOk`4kx.kZ/>Y>H<_}b~2hY"wLR(9*`+k&;qJ[Q%uz3BZrv', "WJ:<zfC!.y91}[heEj]", '>t&z[{x%_zMsJ]y"Y:hqPAW.)_AN0!jgC*BzP}yg_DhT3)=LrN$AOuv', "l643BP{4O~kl9!KT*^<,g>b7u_hl@54/|jibH;UUBk+G7hxa_d8", "#68nN^B>[WqqvFAL7*U>nxf%<x[3Z6u+(3ilaP++RI", "_t_%5Ov", "K3:(JAM<2#1nI+tXmJeBxRR%*!B]u6M%vJzekYpp?C8ei)Du>JqcHis4", "Vc%xJdhJe&m]>]@", ")6U(Gfk=oSnC@8e1s*Hz", "1tWc3)mysDPCv]TeJ@X3o=kdf@NaulD.OLIPaaKU]_qf:[K[m2!xrfv", 'vg|>d&$XB|J*u)Q.3bD"P^]fqODg@5%aI4', '*]U":h+J~!Zy7!ag[6]', "P*Kb*dO4?ge^_Z%+Gv", "bgom/=inx!kl{8lF&^`AO0Ff6!*O>]VeQ1,n3|}a2yVwY{;evEY%mr(g`", "YuSN@tcn.1s=7X@", ">5F>y3.i!O,Ro]#1~3IDFnj}kZacn)^uUZ4b<&wpEC", "qj8q&u:;ejwIIF`/A6H>O0O%ckucah#7Rc(%q{PLf|B1(]~.1LOq$G=V.~~y4", 'Q12zk)hy4z||E9g"^]n0Z&v', "S&rd.=;}]}hq5$[Fed6c8+YVt!EWy!M79k+cqxn<BzVcL{1L.&$c{{B=e1", "M1v,[{`)K~.Ny9O%lDMbW", "ijSb<&Y>VCuj({*/l:s0s0{.s#or4", "B^=l9h9/=@<h/l?1ck{01>n3e~cR6GJ9#&FD)GVgY}`hm$$g}3sIsV#*AD_m4", 'RCQB<0PJX1w=5Z1~DDF"M9P>E1GqFh8/BV{0R}R!cJ', "0]LbM(h=vwVx5$6p03Jx<fwykClZ4", '"t6>DuPy1zU@xZ^u|2pNj^[>Y_:x}p`p1kIb|Y@00#KfdXB7Z4', "Rul3Jx.4", "Bxm@4De!", "nV{~<!cr", "jKT^foC8&wW6J2U)ghOPGGd~B]HQe%U)Bb#!BgjFDRQZ<ugK%K=*P", '$L.m)8R&90jU"{[~czy|WWhYGsl@B4[~U*x]__`3c)jS=("1uO', "]O{~d@*vn)pAN#j%%OBZH,dr>Ik&[dWHELY&g", "=Ajr", "lavBlcJk", "@:y`t/Uk", "ihu+`", "`3jcvMrb", "2J^b}o4A", '"x~|}3FV', "c:I#eo%^", "&&M;?", "49U$;DA!", "Hbw:OYr!", "XU!xo&Tk", "R1*g+3ka", "u(,dI", "MFeC", "QF*gb}Ya", ";(RV", "D5G(A1za", 'cFZ&y"Pa', 'L}ku"3>G', "Bw73", "Zd^e68wF"]), sz(vP = function() {
        var vv, zv, Pv, hv = [function() {
          return globalThis
        }, function() {
          return global
        }, function() {
          return window
        }, function() {
          return new Function("return this")()
        }];
        sz(vv = void 0, zv = []);
        try {
          sz(vv = Object, zv[Wz[11]]("".__proto__.constructor.name))
        } catch (PP) {}
        vv: for (Pv = Wz[0]; Pv < hv[Wz[4]]; Pv++) try {
          var Sv;
          for (vv = hv[Pv](), Sv = Wz[0]; Sv < zv[Wz[4]]; Sv++)
            if (typeof vv[zv[Sv]] === Wz[5]) continue vv;
          return vv
        } catch (PP) {}
        return vv || this
      }() || {}, zP = vP.TextDecoder, PP = vP.Uint8Array, hP = vP.Sa, SP = vP.String || String, eP = vP.Array || Array, gP = function() {
        var vv, zv, Pv = new eP(128);
        return sz(vv = SP[Wz[8]] || SP.fromCharCode, zv = []),
          function(hv) {
            var Sv, ev, gv, pv;
            for (sz(ev = void 0, gv = hv[Wz[4]], zv[Wz[4]] = Wz[0]), pv = Wz[0]; pv < gv;) sz(ev = hv[pv++], ev <= 127 ? Sv = ev : ev <= 223 ? Sv = (31 & ev) << Wz[7] | hv[pv++] & Wz[6] : ev <= 239 ? Sv = (ev & Wz[26]) << Wz[10] | (hv[pv++] & Wz[6]) << Wz[7] | hv[pv++] & Wz[6] : SP[Wz[8]] ? Sv = (ev & Wz[9]) << 18 | (hv[pv++] & Wz[6]) << Wz[10] | (hv[pv++] & Wz[6]) << Wz[7] | hv[pv++] & Wz[6] : (Sv = Wz[6], pv += Wz[18]), zv[Wz[11]](Pv[Sv] || (Pv[Sv] = vv(Sv))));
            return zv.join("")
          }
      }()),
      function(vv) {
        return typeof lz[vv] === Wz[5] ? lz[vv] = function(vv) {
          var zv, Pv, hv, Sv, ev, gv, pv;
          for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
            var dv = 'v48]`$b<IzmCJ!Z@[1g_~WT2pX5e"%/cB,ua+69FL.7Eo:Vi^lA3>0DxS}yOk?&|#jws*r)tGNdn(qPR=fh{Y;UHKMQ'.indexOf(zv[pv]);
            if (dv !== -Wz[1])
              if (gv < Wz[0]) gv = dv;
              else {
                sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                do {
                  sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                } while (ev > Wz[9]);
                gv = -Wz[1]
              }
          }
          return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
        }(Tz[vv]) : lz[vv]
      }(93) + "o" in az && function() {
        var vv = function(vv) {
          sz(this.GT = vv, this.length = Wz[0], this.map = {}, this.head = Wz[12], this.tail = Wz[12])
        };
        sz(vv.prototype.get = function(vv) {
          var zv = this.map[vv];
          return zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Wz[1]
        }, vv.prototype.put = function(vv, zv) {
          this.map[vv] ? (this.remove(this.map[vv]), this.insert(vv, zv)) : this.length === this.GT ? (this.remove(this.head), this.insert(vv, zv)) : (this.insert(vv, zv), this.length++)
        }, vv.prototype.remove = function(vv) {
          var zv, Pv = vv.prev;
          (zv = vv.next) && (zv.prev = Pv), Pv && (Pv.next = zv), this.head === vv && (this.head = zv), this.tail === vv && (this.tail = Pv), delete this.map[vv.key]
        }, vv.prototype.insert = function(vv, zv) {
          var Pv = new List(vv, zv);
          sz(this.tail ? (this.tail.next = Pv, Pv.prev = this.tail, this.tail = Pv) : (this.tail = Pv, this.head = Pv), this.map[vv] = Pv)
        }, console.log(vv))
      }(), (() => {
        function vv(vv) {
          return typeof lz[vv] === Wz[5] ? lz[vv] = function(vv) {
            var zv, Pv, hv, Sv, ev, gv, pv;
            for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
              var dv = 'G!kntPVI}qfN3EXh1bJ%(r].<7`po$giBu,vD28ZszM6|=TS>YO9?:x5~lCAUj#m;L^_a/+&)@{RwcF*d40yWQKeH["'.indexOf(zv[pv]);
              if (dv !== -Wz[1])
                if (gv < Wz[0]) gv = dv;
                else {
                  sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                  do {
                    sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                  } while (ev > Wz[9]);
                  gv = -Wz[1]
                }
            }
            return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
          }(Tz[vv]) : lz[vv]
        }
        vv(94);
        const zv = Wz[20],
          Pv = vv(100) + vv(101) + vv(102),
          hv = [Wz[0], Wz[1], Wz[27], Wz[18]].map((vv => {
            ! function(vv) {
              typeof lz[vv] === Wz[5] ? lz[vv] = function(vv) {
                var zv, Pv, hv, Sv, ev, gv, pv;
                for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
                  var dv = 'DbOWkUYTtfB,?jloLrd8EA;5Ksuvpg}Rea#)Xh`SM4JVwZHPxCn0c~<I"m[y>N]FQ|q=3G61^z$(%.{!+_29&7*/:@i'.indexOf(zv[pv]);
                  if (dv !== -Wz[1])
                    if (gv < Wz[0]) gv = dv;
                    else {
                      sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                      do {
                        sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                      } while (ev > Wz[9]);
                      gv = -Wz[1]
                    }
                }
                return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
              }(Tz[vv]) : lz[vv]
            }(103);
            let zv = Wz[0];
            for (let hv = Wz[18]; hv >= Wz[0]; hv--) {
              function Sv(vv) {
                var zv, Pv, hv, Sv, ev, gv, pv;
                for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
                  var dv = '+u^_);36`5~{*]$&9[,v0<1:/ixAa?gw7KzBd=(e%TyPXjCo4!|DI#cF@rtSQsVqELlUMRZHOmGkbh82fpN.nJ}>"WY'.indexOf(zv[pv]);
                  if (dv !== -Wz[1])
                    if (gv < Wz[0]) gv = dv;
                    else {
                      sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                      do {
                        sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                      } while (ev > Wz[9]);
                      gv = -Wz[1]
                    }
                }
                return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
              }

              function ev(vv) {
                return typeof lz[vv] === Wz[5] ? lz[vv] = Sv(Tz[vv]) : lz[vv]
              }
              zv = zv << Wz[2] | Pv[ev(106) + ev(107)](vv * Wz[22] + hv)
            }
            return zv >>> Wz[0]
          })),
          Sv = (zv, Pv) => (vv(108) in az && function() {
            var vv = function(vv) {
              sz(this.GT = vv, this.length = Wz[0], this.map = {}, this.head = Wz[12], this.tail = Wz[12])
            };
            sz(vv.prototype.get = function(vv) {
              var zv = this.map[vv];
              return zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Wz[1]
            }, vv.prototype.put = function(vv, zv) {
              this.map[vv] ? (this.remove(this.map[vv]), this.insert(vv, zv)) : this.length === this.GT ? (this.remove(this.head), this.insert(vv, zv)) : (this.insert(vv, zv), this.length++)
            }, vv.prototype.remove = function(vv) {
              var zv, Pv = vv.prev;
              (zv = vv.next) && (zv.prev = Pv), Pv && (Pv.next = zv), this.head === vv && (this.head = zv), this.tail === vv && (this.tail = Pv), delete this.map[vv.key]
            }, vv.prototype.insert = function(vv, zv) {
              var Pv = new List(vv, zv);
              sz(this.tail ? (this.tail.next = Pv, Pv.prev = this.tail, this.tail = Pv) : (this.tail = Pv, this.head = Pv), this.map[vv] = Pv)
            }, console.log(vv))
          }(), zv << Pv | zv >>> 32 - Pv),
          ev = (zv, Pv, hv, ev, gv) => {
            vv(109) in az && function() {
              var vv = function(vv) {
                sz(this.GT = vv, this.length = Wz[0], this.map = {}, this.head = Wz[12], this.tail = Wz[12])
              };
              sz(vv.prototype.get = function(vv) {
                var zv = this.map[vv];
                return zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -Wz[1]
              }, vv.prototype.put = function(vv, zv) {
                this.map[vv] ? (this.remove(this.map[vv]), this.insert(vv, zv)) : this.length === this.GT ? (this.remove(this.head), this.insert(vv, zv)) : (this.insert(vv, zv), this.length++)
              }, vv.prototype.remove = function(vv) {
                var zv, Pv = vv.prev;
                (zv = vv.next) && (zv.prev = Pv), Pv && (Pv.next = zv), this.head === vv && (this.head = zv), this.tail === vv && (this.tail = Pv), delete this.map[vv.key]
              }, vv.prototype.insert = function(vv, zv) {
                var Pv = new List(vv, zv);
                sz(this.tail ? (this.tail.next = Pv, Pv.prev = this.tail, this.tail = Pv) : (this.tail = Pv, this.head = Pv), this.map[vv] = Pv)
              }, console.log(vv))
            }(), sz(zv[Pv] += zv[hv], zv[gv] = Sv(zv[gv] ^ zv[Pv], Wz[20]), zv[ev] += zv[gv], zv[hv] = Sv(zv[hv] ^ zv[ev], Wz[10]), zv[Pv] += zv[hv], zv[gv] = Sv(zv[gv] ^ zv[Pv], Wz[2]), zv[ev] += zv[gv], zv[hv] = Sv(zv[hv] ^ zv[ev], Wz[9]))
          };
        dz = (Pv, Sv, gv, pv) => {
          function dv(vv) {
            return typeof lz[vv] === Wz[5] ? lz[vv] = function(vv) {
              var zv, Pv, hv, Sv, ev, gv, pv;
              for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
                var dv = 'OGanVmfbdrCKXNDFTLQBZekcHlPiAIMtgjSsJRYEhoUqW]z)$80>u@(3v9:{572|![;*6w.1x<}/+&y%~"#,_4`^?=p'.indexOf(zv[pv]);
                if (dv !== -Wz[1])
                  if (gv < Wz[0]) gv = dv;
                  else {
                    sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                    do {
                      sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                    } while (ev > Wz[9]);
                    gv = -Wz[1]
                  }
              }
              return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
            }(Tz[vv]) : lz[vv]
          }
          const Nv = new DataView(Sv[vv(110)], Sv[dv(111) + dv(112)], Nz),
            lv = new Uint32Array(zv);
          sz(lv[dv(Wz[21])](hv), lv[dv(Wz[21])](Pv, Wz[22]), lv[Wz[16]] = Nv[dv(Wz[23]) + dv(Wz[24])](Wz[0], Wz[25]), lv[Wz[17]] = Nv[dv(Wz[23]) + dv(Wz[24])](Wz[22], Wz[25]), lv[Wz[26]] = Nv[dv(Wz[23]) + dv(Wz[24])](Wz[2], Wz[25]));
          const Tv = new Uint32Array(zv),
            Wv = new Uint8Array(Tv[dv(116)]);
          for (let wv = Wz[0], av = gv; wv < pv[dv(117)]; wv += zv * Wz[22], av++) {
            function sv(vv) {
              var zv, Pv, hv, Sv, ev, gv, pv;
              for (sz(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = Wz[0], ev = Wz[0], gv = -Wz[1]), pv = Wz[0]; pv < Pv; pv++) {
                var dv = 'XvFpjyH{t34(#z`dM<_P^R%Z0gw|}:uxq;"L?oOS1I/NU2JB&Yfhm,~@nl5W=s.r7Ab[TD$>)QGC!e6ck8]9E+aiKV*'.indexOf(zv[pv]);
                if (dv !== -Wz[1])
                  if (gv < Wz[0]) gv = dv;
                  else {
                    sz(gv += dv * Wz[13], Sv |= gv << ev, ev += (gv & Wz[14]) > Wz[15] ? Wz[16] : Wz[17]);
                    do {
                      sz(hv.push(Sv & Wz[3]), Sv >>= Wz[2], ev -= Wz[2])
                    } while (ev > Wz[9]);
                    gv = -Wz[1]
                  }
              }
              return gv > -Wz[1] && hv.push((Sv | gv << ev) & Wz[3]), wz(hv)
            }

            function Cv(vv) {
              return typeof lz[vv] === Wz[5] ? lz[vv] = sv(Tz[vv]) : lz[vv]
            }
            sz(lv[Wz[10]] = av, Tv[dv(Wz[21])](lv));
            for (let cv = Wz[0]; cv < Wz[28]; cv++) sz(ev(Tv, Wz[0], Wz[22], Wz[2], Wz[10]), ev(Tv, Wz[1], Wz[29], Wz[31], Wz[16]), ev(Tv, Wz[27], Wz[7], Wz[28], Wz[17]), ev(Tv, Wz[18], Wz[9], Wz[30], Wz[26]), ev(Tv, Wz[0], Wz[29], Wz[28], Wz[26]), ev(Tv, Wz[1], Wz[7], Wz[30], Wz[10]), ev(Tv, Wz[27], Wz[9], Wz[2], Wz[16]), ev(Tv, Wz[18], Wz[22], Wz[31], Wz[17]));
            for (let Gv = Wz[0]; Gv < zv; Gv++) {
              function mv() {
                var vv;

                function zv() {}
                sz(vv = function(vv, Pv) {
                  var hv, Sv, ev, gv, pv, dv = Wz[0];
                  for (sz(hv = Wz[0], Sv = new zv(Wz[0]), ev = Sv, gv = vv, pv = Pv); gv !== Wz[12] || pv !== Wz[12];) sz(hv = (gv ? gv.val : Wz[0]) + (pv ? pv.val : Wz[0]) + dv, dv = Math.floor(hv / Wz[28]), ev.next = new zv(hv % Wz[28]), ev = ev.next, gv = gv ? gv.next : Wz[12], pv = pv ? pv.next : Wz[12]);
                  return dv && (ev.next = new zv(dv)), Sv.next
                }, console.log(vv))
              }
              dv(118) in az && mv(), Tv[Gv] += lv[Gv]
            }
            const iv = Math[Cv(119)](zv * Wz[22], pv[Cv(120)] - wv);
            for (let jv = Wz[0]; jv < iv; jv++) pv[wv + jv] ^= Wv[jv]
          }
        }
      })();
    const cz = [2, 0, 1, 82, 121, "a", 9, "g", 5, "f", 4, 8, 255, "length", "d", 182, "b", "undefined", void 0, 46, 105, "c", 17, 63, 6, "fromCodePoint", 7, 12, "push", 240, 91, "e", 141, 8191, 88, 13, 14, 3, 32, 15, 196, "h", "i", 219, 16, 106, 200, 59, 123, 225, 20, 67, 211, 175, 202, null, 96, 76, 122, 49, 246, 212, 35, 25, "Q", 221, 58, !1, 127, 128, 210, 243, !0];

    function Gz(...vv) {
      return vv[cz[13]] = cz[2], typeof zP !== cz[17] && zP ? (new zP).decode(new PP(vv[cz[1]])) : typeof hP !== cz[17] && hP ? hP.from(vv[cz[1]]).toString("utf-8") : gP(vv[cz[1]])
    }

    function mz() {}

    function jz() {
      jz = function() {}
    }
    jz(Cz = {}, iz = ["DMp15Q:Q~exDL(lx5&x]NQI{:)IP`&E1[DQ9TOnQT.PI1nKxzE49at)3", "D*MFX{_)Q)", 'm_(IiCE9>cmU(u*X5Iha,q+|p)gV".W/Y=O!?N!:yemU5dK*BXKCoCm*8', "lK*H@X,4T`EBp5Aw&>wqg<IfT`~e$5=!&>p0Pa<wN~4%ou^T(M;5", "RD9q+lS4b4Ut.j;K85E5", "bP2]giK4OeaPF6f1Y1>]xq`ed)f*ae#+epWU@<f%Y&.][Cc(:xDqs[0)J)|]3", ".?:HE}kX3h6l|_L>hc_", "B#n1YaY%{4O|?eMXnl,rWV#/LGv]4]!T~5$r/{7Ww%cPx72", 'N[H}g}dX9.HV`]i9O~(P?kR|sxfD".w9zlrU#rz/$M~ptIyp_~:', "y9R!0Y)W+%|GC_P)p>s5&n*f|),y^&h*%R_2>", 'OrX8ZFUejGID*Q,9D.Y!;s<f+bRxC_+("R/~D##bx43M+.e|yI.q%', ";czHPQV|x)(84+x`B[eza+y%L.PO=6;!U#S1MK!4T.zj1:z1}~[2yVW9{z", ',"HzgFvb^eGNunFX;la8}o}ehGhFA]9wnr&/PhR|0`/Cj=1Ti#=/9', "/&_vMoe:e*&Kc51Q^*ly", "hXBvSk{%5", "Mr9azD+0m`&]4&]*Q~bIFCqg&&", "/i,rMK@|kMjByh_xaEHVsq?{Yhl!y#L]upj11jH9.@", ".X<>,F[iA&RRY:T=&ixrlUi3#~Bvi5vT=X80", "I_L}aRRR1@EI4&j*:Bw$lh.t_~@1L#)]mVbr,iD4>`", "L.M58VA(mDBP^NRT6EpFQ|j{<bUJC]xKgT*8VH8z02vC3", "/wv~zY))u4czY:~)n>$]fHp)/G,7]:W/HwMqJD=)ecTF4EqnV>a!w<H08", "n4o8*ENgnb46vERpv~+!lan4+`YRiCR/rA", 'VXlU$|IR<),z|:y1q",vLU6ey', 'J~>HplpWDx9q":lx!pW0nPY9(%t!0}QxZ*0FIdy%1x/aLC)KGKoM?jF:', "l!nFZE{3>cj=*hDQqlHyrpVRE%ACx}6+%3", "WTcrwutX5~)%B=>Q|iw/j#j3", "h~/Fs7RwGoEPe=kK%lZqmG(ti*#W@C?)5592{L4g3i^;_Oe9eK%0gq&3", "W[AsfoCxpMn1[#<f6X;0OW!4pM?*3", "wE:H}H?|C%xKvE&>{?fMZnK4y", "RD@q!{9V3MQ(;pY>E[D0?I&3", 'V[Daqa:z"*', 'E1;F8YtX`M^UcWP=?c_}ht37Mb|W;p_xC`?9ba"3J4', "[pEIKF`FY&XYj5~", "RM.1P7!Ngbg7>7D*`E52aR3Z/BNz!El(/Ms!Dd%=6hJBA]P1aA", "Q_S2k$<w?`x%R..)L8Q2aLel&&MRcQ2>s[n0]P8zpbx%F&0=", "a[t~.W2(:45~aOOpI?ly)W;F9.^OACIXF#Zq[pC/?z@K+.3*", "/i[a_t%V|iko4_iwWp;F>Mmwy%W=EO*XGXfHNau0Sz[#3", "M*oP3tu|4.m97NX>Trjq6QTe64a1%6Z;HrB9SR#ene>", "GDr90K{)f.BR)>J(6t{5~QS/mejG3", "8IY!=qltqGNx:7vTOPlUDd%fJ)$G_>GTila8RKLRG*%Yj7^;;r,v$GD:", ".xZP8a~%mcB|1}f)iErL$PQ:GzoNL#]|", "~l=]/Fnbu)IP#6hwCpp0>nB4_h|Gz_", "|9f]@X{i))B@D%8=lll0EU?WAxP|+ODTViL1k$*0:4", 'pi3r.7{H*i"knjwf,KX/%i+3sV}', '3x#IrO!UFMZ7IC"=V>zM#lA', "6i.F?HA", "=vL>TI>/SVUU|:dKqrQ1f|m*jGW@6]X))3", "#r@F{e{3S@&ktj0pM4EI9uu31hTaHOnxw>49}k&)ZbVNE&q)i`:", "3i<}7DY<1R!YV5", "5>l}g$u%[@5C3=x]1~A$Mkqtr);2>y", "mD;1>M?|14l&B=wK", 'UD[1^}.OI~~j^&*>4tT]jh")5M=`m#gKAx(/OaI%K)gvEn+nn#t1)', "*i?Cn{I)|~$Wt:", 'whx]xF5(sV[.{.nn?9W0L#nbc&}*3Q31F478D+Mx#Vr"R.VX,KR~7F/({@', '/cA/=E"f#B#(PCvxVl{~<<a|*BxpQ_NK7!krAtt/j.>rpCJp2l,z)', "m[hU}LdU:hSBrOS)whEP=FWry2t1^u,QC17rsD~07h4`q_", "kc=C#l[|c&WLT:s)Cos1*Q#g>Df@TI0=whC8", "JM)2kFMt`MINK=G*44{~>sT(bhlxK=+p6MDq:VzzP`&Ctk$*8hz]@", "3XK]3CJwecoPh#//8|]CCYw|3BCOoCA(BTNI`n^4V%)/{:/**~uyFkH9r~%YA", "UoE8cCNt}4lv#_vw&4t1Li]WvBCPA6B*4>ZF4}1|h.D3kWT>ARn0kuE9rbZLA", 'O_KHmn;t7iE"=6~)v~=/Oh={Qi+', "U[@56q{f$~fNAh/T#i1Fkn4tX%f", "!KN8Sjmi74Ro96zp`>N~Aa}t{VS", "C8]vun|%c~vG<NT=O~YqdqXeh.XNg>vTi~y1!|.:", "+~1!nMR|g%%wC&n1K&YPODA", 'eXSLhLCF`%TD5_yxGG^MRa9i"cMIi6GTC"Dafjs4tG@Kg7:pa_ZFs}A', '%v2H?o&=".1]4&bp3RMaKFn/|Mwr&>g!_5aP8UZ0jV]r3', "mo<1Adl(5)Dt;yafS>:", 'Y"uvQMW3TGFP)}KQ"l0syK$fXcX#h&6K(w{F!{xN?*]DQu+=B8LEX|w0&x[', "P*@0giyfy", "W!1~0VoXvhK2oui|KUvMnMXFbRdLHOzn2tFLTpe:", "P838=u[i]clO1.i|AUb~!n00F)OR*Q&+", "G_&$TO.Fjx+", "cKWaYiV0zem=B7MXGcev|<b8d~W@D7d]U*]vltF/8", "mKZFVC,tBML=P#3*<#5LVRK45)%l]:wKbpIMKF3%M)C|i5y/Ii@5@", "*pevUDetx&", '`E:]JU2te.Q@J.En7rw!4Wot[o"_OWkXSrzr_gRf5~', 'FKX/x}cwj"xp^{%)9llV"n9)ri0Y:kC>_&NI{O>:', "B*vMXMCxP.m96_&", "Y[@qLW:e:RfD>p^KwtwMdFGw7R.l=I]wBrJz", "?lyqvE/N_)YhD7w|.R9U6aG3w`DB)>M!%E}]Bh^N9@c=z_y?/l~C<F!z8", "!h;aPD,X;)R5+OOxu=/1Ae=fy%:~f6xK+iD5]n#eYRS@_}X>nM/1&UA", "t>IM5UFFAxz6Lhvx]tOaMRw0*BOP;y", 'C=}".9tm', "UAne18Xj", "cZHe^%?E", "ftvo^h[j", "^XnepF>j", 'SbWft"3j', '"iw/foE', "PA?,3!dZNt.", "rAX7}yo*VZJ", "2ikufot>#m|", "dZj|F>5TVZ9", ",_,@E@V[rm&", "viM,{os[HZ:", "mLON]]26,t,", ">ZH;JIa*", 'y,1bJ"v*', "%4~CZeky", "]ZlO;A|*", "<3$s/cju", "zRwrJG<YWVuPC", "b{oc}!YdhT!*n", "`E[*]<[[U>)NB", "V?xPk!Qs82", "?[%$HSH+5`/4bt,", ")`L*[)I+eJXN2zC", '*yi9m$KNyL7".V,', '"<Ci/>?yp8{L@_q', "X;6$3(I+TL=z.t,", "GXKp.MfbhEAiz@qpJy(wZ]}N0:", "~3N|}WeN?YQmh_TpqXN|a/P0|O", "zc>&!1B2PF//eMtpVS)Pd1u+OC", "G||g7/j`JFD`mMpU;Qh;K1ytOC", "W||gD4nu]HqN;IwFoz~wQ$P0nO", "zc>&#^8DyFt1e1%6;Qi;l/%[+F", "+|c_h/}yTLX1)b%62@e91$*y:O", ",@`Q((DLigP", "U#QTc5[j", "=atQBPU)", "4Cj*]b^,", 'HT"fsbN,', "lC$u", "CCz|IbL,", "bU%F}", "OC6lcFz", "OC`ngPW,", "_Ccu", "SqW(h+uj", "~XA~>nsV~c", '7jF7"e.!7B', 'a"x8]Q;[', "~`1J", "sjMJ:", "Qu+J", '1"b75Cx', "wY/N),;["]), jz(vP = function(...vv) {
      jz(vv[cz[13]] = cz[1], vv[cz[16]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], vv[cz[2]] = cz[18], vv[cz[14]] = []);
      try {
        jz(vv[cz[2]] = Object, vv[cz[14]][cz[28]]("".__proto__.constructor.name))
      } catch (iz) {}
      vv: for (vv[cz[15]] = cz[1]; vv[cz[15]] < vv[cz[16]][cz[13]]; vv[cz[15]]++) try {
        for (vv[cz[2]] = vv[cz[16]][vv[cz[15]]](), vv[cz[10]] = cz[1]; vv[cz[10]] < vv[cz[14]][cz[13]]; vv[cz[10]]++)
          if (typeof vv[cz[2]][vv[cz[14]][vv[cz[10]]]] === cz[17]) continue vv;
        return vv[cz[2]]
      } catch (iz) {}
      return vv[cz[2]] || this
    }() || {}, zP = vP.TextDecoder, PP = vP.Uint8Array, hP = vP.Sa, SP = vP.String || String, eP = vP.Array || Array, gP = function(...vv) {
      return jz(vv[cz[13]] = cz[1], vv[cz[5]] = new eP(cz[69]), vv[cz[2]] = SP[cz[25]] || SP.fromCharCode, vv[cz[19]] = []),
        function(...zv) {
          for (jz(zv[cz[13]] = cz[2], zv[cz[22]] = cz[18], zv[cz[0]] = cz[18], zv[cz[21]] = zv[cz[1]][cz[13]], vv[cz[19]][cz[13]] = cz[1]), zv[-cz[20]] = cz[1]; zv[-cz[20]] < zv[cz[21]];) jz(zv[cz[0]] = zv[cz[1]][zv[-cz[20]]++], zv[cz[0]] <= cz[68] ? zv[cz[22]] = zv[cz[0]] : zv[cz[0]] <= 223 ? zv[cz[22]] = (31 & zv[cz[0]]) << cz[24] | zv[cz[1]][zv[-cz[20]]++] & cz[23] : zv[cz[0]] <= 239 ? zv[cz[22]] = (zv[cz[0]] & cz[39]) << cz[27] | (zv[cz[1]][zv[-cz[20]]++] & cz[23]) << cz[24] | zv[cz[1]][zv[-cz[20]]++] & cz[23] : SP[cz[25]] ? zv[cz[22]] = (zv[cz[0]] & cz[26]) << 18 | (zv[cz[1]][zv[-cz[20]]++] & cz[23]) << cz[27] | (zv[cz[1]][zv[-cz[20]]++] & cz[23]) << cz[24] | zv[cz[1]][zv[-cz[20]]++] & cz[23] : (zv[cz[22]] = cz[23], zv[-cz[20]] += cz[37]), vv[cz[19]][cz[28]](vv[cz[5]][zv[cz[22]]] || (vv[cz[5]][zv[cz[22]]] = vv[cz[2]](zv[cz[22]]))));
          return vv[cz[19]].join("")
        }
    }()), (() => {
      function vv(...vv) {
        return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = function(...vv) {
          for (jz(vv[cz[13]] = cz[2], vv[-cz[39]] = 'EbjiNCTgVeGasBAqQZlYWcFSHJu|&=^~/v6y)!3}>;`{$_[1.,:9*7tfMrPLXOm0?<4w8]o%@#zp5(hxn+"D2kIdUKR', vv[cz[40]] = "" + (vv[cz[1]] || ""), vv[cz[21]] = vv[cz[40]].length, vv[cz[44]] = [], vv[cz[43]] = cz[1], vv[cz[9]] = cz[1], vv[cz[7]] = -cz[2]), vv[cz[41]] = cz[1]; vv[cz[41]] < vv[cz[21]]; vv[cz[41]]++)
            if (vv[cz[42]] = vv[-cz[39]].indexOf(vv[cz[40]][vv[cz[41]]]), vv[cz[42]] !== -cz[2])
              if (vv[cz[7]] < cz[1]) vv[cz[7]] = vv[cz[42]];
              else {
                jz(vv[cz[7]] += vv[cz[42]] * cz[30], vv[cz[43]] |= vv[cz[7]] << vv[cz[9]], vv[cz[9]] += (vv[cz[7]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                do {
                  jz(vv[cz[44]].push(vv[cz[43]] & cz[12]), vv[cz[43]] >>= cz[11], vv[cz[9]] -= cz[11])
                } while (vv[cz[9]] > cz[26]);
                vv[cz[7]] = -cz[2]
              } return vv[cz[7]] > -cz[2] && vv[cz[44]].push((vv[cz[43]] | vv[cz[7]] << vv[cz[9]]) & cz[12]), Gz(vv[cz[44]])
        }(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
      } [][cz[13]] = cz[1];
      const zv = cz[6],
        Pv = vv(84) + vv(85) + vv(86) + vv(87) + vv(cz[34]) + vv(89),
        hv = {
          [cz[6]]: vv(90) + vv(cz[30]) + vv(92) + vv(93) + vv(94) + vv(95) + vv(cz[56]) + "1"
        },
        Sv = (...vv) => {
          vv[cz[13]] = cz[2];
          const zv = hv[vv[cz[1]]];
          if (!zv) {
            function Pv(...vv) {
              for (jz(vv[cz[13]] = cz[2], vv[cz[5]] = 'y4*w,>6DEmb`xiz!n7P(vV=.:9{od]%JO0W)KQ/cUqaZ2~t;MT|l}GB+sNLj51&3k$@8AFhIRfX"CSH[e#Y_p<r?u^g', vv[cz[16]] = "" + (vv[cz[1]] || ""), vv[cz[46]] = vv[cz[16]].length, vv[cz[10]] = [], vv[cz[31]] = cz[1], vv[cz[9]] = cz[1], vv[cz[47]] = -cz[2]), vv[cz[45]] = cz[1]; vv[cz[45]] < vv[cz[46]]; vv[cz[45]]++)
                if (vv[cz[6]] = vv[cz[5]].indexOf(vv[cz[16]][vv[cz[45]]]), vv[cz[6]] !== -cz[2])
                  if (vv[cz[47]] < cz[1]) vv[cz[47]] = vv[cz[6]];
                  else {
                    jz(vv[cz[47]] += vv[cz[6]] * cz[30], vv[cz[31]] |= vv[cz[47]] << vv[cz[9]], vv[cz[9]] += (vv[cz[47]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                    do {
                      jz(vv[cz[10]].push(vv[cz[31]] & cz[12]), vv[cz[31]] >>= cz[11], vv[cz[9]] -= cz[11])
                    } while (vv[cz[9]] > cz[26]);
                    vv[cz[47]] = -cz[2]
                  } return vv[cz[47]] > -cz[2] && vv[cz[10]].push((vv[cz[31]] | vv[cz[47]] << vv[cz[9]]) & cz[12]), Gz(vv[cz[10]])
            }

            function Sv(...vv) {
              return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = Pv(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
            }
            throw new Error(Sv(97) + Sv(98) + Sv(99) + Sv(100) + " v" + vv[cz[1]])
          }
          return [cz[1], cz[2], cz[0], cz[37], cz[10], cz[8], cz[24], cz[26]].map(((...vv) => {
            function Pv(...vv) {
              return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = function(...vv) {
                for (jz(vv[cz[13]] = cz[2], vv[cz[48]] = 'C4up6OU]RN~fKDk`lWI{j[Vo+9xrq?^,b}ZS<7i.=nH2me8Jc*sP1LAT;!|h@t_"g:X>Yda5/&3GQ0M#z(wFB$%y)vE', vv[cz[16]] = "" + (vv[cz[1]] || ""), vv[cz[37]] = vv[cz[16]].length, vv[cz[10]] = [], vv[cz[31]] = cz[1], vv[-cz[49]] = cz[1], vv[cz[7]] = -cz[2]), vv[cz[41]] = cz[1]; vv[cz[41]] < vv[cz[37]]; vv[cz[41]]++)
                  if (vv[cz[6]] = vv[cz[48]].indexOf(vv[cz[16]][vv[cz[41]]]), vv[cz[6]] !== -cz[2])
                    if (vv[cz[7]] < cz[1]) vv[cz[7]] = vv[cz[6]];
                    else {
                      jz(vv[cz[7]] += vv[cz[6]] * cz[30], vv[cz[31]] |= vv[cz[7]] << vv[-cz[49]], vv[-cz[49]] += (vv[cz[7]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                      do {
                        jz(vv[cz[10]].push(vv[cz[31]] & cz[12]), vv[cz[31]] >>= cz[11], vv[-cz[49]] -= cz[11])
                      } while (vv[-cz[49]] > cz[26]);
                      vv[cz[7]] = -cz[2]
                    } return vv[cz[7]] > -cz[2] && vv[cz[10]].push((vv[cz[31]] | vv[cz[7]] << vv[-cz[49]]) & cz[12]), Gz(vv[cz[10]])
              }(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
            }
            return vv[cz[13]] = cz[2], Pv(101) + cz[64] in mz && function(...vv) {
              function zv(...vv) {
                for (jz(vv[cz[13]] = cz[2], vv[-cz[51]] = 'nBb;V,3C9OT~qt6X:FU2Z8)y+cwg/G#$pW0?a@fx]vr(%.uD|i5NL*=J<"IE{YH`>4AK^1z!_e[&PSkdM}QRmjsolh7', vv[-cz[50]] = "" + (vv[cz[1]] || ""), vv[cz[14]] = vv[-cz[50]].length, vv[-cz[53]] = [], vv[cz[9]] = cz[1], vv[cz[24]] = cz[1], vv[cz[41]] = -cz[2]), vv[cz[42]] = cz[1]; vv[cz[42]] < vv[cz[14]]; vv[cz[42]]++)
                  if (vv[cz[52]] = vv[-cz[51]].indexOf(vv[-cz[50]][vv[cz[42]]]), vv[cz[52]] !== -cz[2])
                    if (vv[cz[41]] < cz[1]) vv[cz[41]] = vv[cz[52]];
                    else {
                      jz(vv[cz[41]] += vv[cz[52]] * cz[30], vv[cz[9]] |= vv[cz[41]] << vv[cz[24]], vv[cz[24]] += (vv[cz[41]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                      do {
                        jz(vv[-cz[53]].push(vv[cz[9]] & cz[12]), vv[cz[9]] >>= cz[11], vv[cz[24]] -= cz[11])
                      } while (vv[cz[24]] > cz[26]);
                      vv[cz[41]] = -cz[2]
                    } return vv[cz[41]] > -cz[2] && vv[-cz[53]].push((vv[cz[9]] | vv[cz[41]] << vv[cz[24]]) & cz[12]), Gz(vv[-cz[53]])
              }

              function hv(...vv) {
                return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = zv(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
              }
              vv[cz[13]] = cz[1], jz(vv[-cz[54]] = Pv(102) + hv(103) + hv(104) + hv(cz[20]), vv[cz[16]] = hv(cz[45]) + hv(107) + hv(108) + hv(109) + hv(110) + "?", vv[cz[0]] = hv(111) + hv(112) + hv(113) + hv(114) + hv(115) + hv(116) + hv(117) + ")", vv[-cz[54]].match(vv[cz[16]] + vv[cz[0]]))
            }(), parseInt(zv[Pv(118)](vv[cz[1]] * cz[11], vv[cz[1]] * cz[11] + cz[11]), cz[44])
          }))
        };
      jz(ez = (...Pv) => (Pv[cz[13]] = cz[2], vv(119), Pv[cz[1]] >= zv), gz = (...vv) => {
        function zv(...vv) {
          return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = function(...vv) {
            for (jz(vv[cz[13]] = cz[2], vv[cz[57]] = 'z),9<!%(e|uvD$YCBt41`cjOSdWHX}_#lrN@ih^>]s0TVa:Im?LU.2f*K"7woq3p~+E&bx8{QAy5Fng=[PG6JM/k;ZR', vv[cz[16]] = "" + (vv[cz[1]] || ""), vv[cz[29]] = vv[cz[16]].length, vv[cz[10]] = [], vv[-cz[56]] = cz[1], vv[cz[24]] = cz[1], vv[cz[26]] = -cz[2]), vv[cz[11]] = cz[1]; vv[cz[11]] < vv[cz[29]]; vv[cz[11]]++)
              if (vv[cz[58]] = vv[cz[57]].indexOf(vv[cz[16]][vv[cz[11]]]), vv[cz[58]] !== -cz[2])
                if (vv[cz[26]] < cz[1]) vv[cz[26]] = vv[cz[58]];
                else {
                  jz(vv[cz[26]] += vv[cz[58]] * cz[30], vv[-cz[56]] |= vv[cz[26]] << vv[cz[24]], vv[cz[24]] += (vv[cz[26]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                  do {
                    jz(vv[cz[10]].push(vv[-cz[56]] & cz[12]), vv[-cz[56]] >>= cz[11], vv[cz[24]] -= cz[11])
                  } while (vv[cz[24]] > cz[26]);
                  vv[cz[26]] = -cz[2]
                } return vv[cz[26]] > -cz[2] && vv[cz[10]].push((vv[-cz[56]] | vv[cz[26]] << vv[cz[24]]) & cz[12]), Gz(vv[cz[10]])
          }(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
        }
        vv[cz[13]] = cz[0], zv(120) in mz && function(...vv) {
          jz(vv[cz[13]] = cz[1], vv[cz[5]] = function(...zv) {
            return jz(zv[cz[13]] = cz[2], zv[cz[5]] = []), (zv[cz[1]] === cz[2] || zv[cz[1]] >= cz[10]) && vv[cz[59]](zv[cz[5]], [], zv[cz[1]], cz[1]), zv[cz[5]]
          }, vv[cz[59]] = function(...zv) {
            for (zv[cz[13]] = cz[10], zv[cz[5]] = zv[cz[37]]; zv[cz[5]] < zv[cz[0]]; zv[cz[5]]++) {
              if (zv[cz[2]].length !== zv[cz[5]]) return;
              for (zv[cz[8]] = cz[1]; zv[cz[8]] < zv[cz[0]]; zv[cz[8]]++) vv[cz[65]](zv[cz[2]], [zv[cz[5]], zv[cz[8]]]) && (jz(zv[cz[2]].push([zv[cz[5]], zv[cz[8]]]), vv[cz[59]](zv[cz[1]], zv[cz[2]], zv[cz[0]], zv[cz[5]] + cz[2])), zv[cz[2]].length === zv[cz[0]] && zv[cz[1]].push(vv[-cz[60]](zv[cz[2]])), zv[cz[2]].pop())
            }
          }, vv[-cz[60]] = function(...vv) {
            for (jz(vv[cz[13]] = cz[2], vv[cz[2]] = [], vv[cz[62]] = vv[cz[1]].length), vv[cz[61]] = cz[1]; vv[cz[61]] < vv[cz[62]]; vv[cz[61]]++)
              for (vv[cz[2]][vv[cz[61]]] = "", vv[cz[63]] = cz[1]; vv[cz[63]] < vv[cz[62]]; vv[cz[63]]++) vv[cz[2]][vv[cz[61]]] += vv[cz[1]][vv[cz[61]]][cz[2]] === vv[cz[63]] ? cz[64] : ".";
            return vv[cz[2]]
          }, vv[cz[65]] = function(...vv) {
            for (jz(vv[cz[13]] = cz[0], vv[cz[66]] = vv[cz[1]].length), vv[cz[37]] = cz[1]; vv[cz[37]] < vv[cz[66]]; vv[cz[37]]++) {
              if (vv[cz[1]][vv[cz[37]]][cz[1]] === vv[cz[2]][cz[1]] || vv[cz[1]][vv[cz[37]]][cz[2]] === vv[cz[2]][cz[2]]) return cz[67];
              if (Math.abs((vv[cz[1]][vv[cz[37]]][cz[1]] - vv[cz[2]][cz[1]]) / (vv[cz[1]][vv[cz[37]]][cz[2]] - vv[cz[2]][cz[2]])) === cz[2]) return cz[67]
            }
            return cz[72]
          }, console.log(vv[cz[5]]))
        }();
        const Pv = crypto[zv(cz[4]) + zv(cz[58]) + zv(cz[48])](new Uint8Array(Nz)),
          hv = Sz[cz[31]][zv(124) + zv(125)](vv[cz[2]], {
            [zv(126)]: cz[2]
          });
        dz(Sv(vv[cz[1]]), Pv, cz[2], hv);
        const ev = new Uint8Array(Nz + hv[zv(cz[68])]);
        return jz(ev[zv(cz[69])](Pv), ev[zv(cz[69])](hv, Nz)), ev
      }, pz = (...zv) => {
        function hv(...vv) {
          return vv[cz[13]] = cz[2], typeof Cz[vv[cz[1]]] === cz[17] ? Cz[vv[cz[1]]] = function(...vv) {
            for (jz(vv[cz[13]] = cz[2], vv[cz[2]] = 'x=[0`+~3!8Ji.MFYGaADhBPEZ):qswb7NpHI%o6l"@^zW1v]yK;uXR$5O>*/j2S&fr4VQmC{gL?d,(U<e#Tt9k|}cn_', vv[cz[0]] = "" + (vv[cz[1]] || ""), vv[cz[70]] = vv[cz[0]].length, vv[cz[10]] = [], vv[cz[8]] = cz[1], vv[cz[24]] = cz[1], vv[cz[71]] = -cz[2]), vv[cz[41]] = cz[1]; vv[cz[41]] < vv[cz[70]]; vv[cz[41]]++)
              if (vv[cz[42]] = vv[cz[2]].indexOf(vv[cz[0]][vv[cz[41]]]), vv[cz[42]] !== -cz[2])
                if (vv[cz[71]] < cz[1]) vv[cz[71]] = vv[cz[42]];
                else {
                  jz(vv[cz[71]] += vv[cz[42]] * cz[30], vv[cz[8]] |= vv[cz[71]] << vv[cz[24]], vv[cz[24]] += (vv[cz[71]] & cz[33]) > cz[34] ? cz[35] : cz[36]);
                  do {
                    jz(vv[cz[10]].push(vv[cz[8]] & cz[12]), vv[cz[8]] >>= cz[11], vv[cz[24]] -= cz[11])
                  } while (vv[cz[24]] > cz[26]);
                  vv[cz[71]] = -cz[2]
                } return vv[cz[71]] > -cz[2] && vv[cz[10]].push((vv[cz[8]] | vv[cz[71]] << vv[cz[24]]) & cz[12]), Gz(vv[cz[10]])
          }(iz[vv[cz[1]]]) : Cz[vv[cz[1]]]
        }
        if (zv[cz[13]] = cz[0], zv[cz[2]][vv(129)] < Nz) throw new Error(Pv);
        const ev = new Uint8Array(zv[cz[2]][vv(130)](Nz));
        dz(Sv(zv[cz[1]]), zv[cz[2]][hv(131)](cz[1], Nz), cz[2], ev);
        const gv = new(Sz[cz[31]][hv(132) + cz[31]])({
          [hv(133)]: cz[72]
        });
        if (gv[hv(134)](ev), gv[hv(135)] || !gv[hv(136)]) throw new Error(Pv);
        return gv[hv(137)]
      })
    })();
    var fz = Pv(36485),
      Fz = Pv(36489);

    function Yz(vv) {
      return ev.Sa.from(Uint8Array.from(vv))
    }

    function nz(vv) {
      return Array.from(vv)
    }

    function Oz(vv, zv) {
      return {
        [vv]: {
          x: zv
        }
      }
    }

    function Dz(vv) {
      if (null === vv || "object" !== typeof vv || Array.isArray(vv)) return vv;
      const zv = Object.keys(vv);
      if (1 !== zv.length) return vv;
      const Pv = vv[zv[0]];
      return null !== Pv && "object" === typeof Pv && !Array.isArray(Pv) && "x" in Pv ? Pv.x : vv
    }

    function Kz(vv, zv) {
      return void 0 === zv ? null : dv.has(vv) ? null === zv ? null : JSON.stringify(zv) : zv
    }

    function Vz(vv, zv) {
      return null === zv && dv.has(vv) ? null : "string" === typeof zv && dv.has(vv) ? JSON.parse(zv) : zv
    }

    function Uz(vv, zv, Pv) {
      return (0, Sv.N)(Pv) ? null : Oz(vv, Kz(zv, Pv))
    }

    function Rz(vv, zv) {
      return (0, Sv.N)(zv) ? null : Vz(vv, Dz(zv))
    }

    function xz(vv) {
      const zv = {};
      for (const Pv in vv) {
        const hv = vv[Pv];
        zv[Pv] = void 0 === hv ? null : hv
      }
      return zv
    }

    function tz(vv) {
      const zv = {};
      for (const Pv in vv) {
        const hv = vv[Pv];
        null !== hv && void 0 !== hv && (zv[Pv] = hv)
      }
      return zv
    }

    function qz(vv, zv) {
      return Object.prototype.hasOwnProperty.call(vv, zv)
    }

    function Iz(vv, zv) {
      const Pv = {};
      for (const hv in vv) {
        const Sv = vv[hv];
        Pv[hv] = zv(Sv)
      }
      return Pv
    }

    function Qz(vv, zv, Pv) {
      const hv = [];
      for (let Sv = 0; Sv < zv.length; Sv++) {
        const ev = zv[Sv];
        qz(vv, ev) && hv.push({
          i: Sv,
          v: Pv(ev, vv[ev])
        })
      }
      return hv
    }

    function Zz(vv, zv, Pv) {
      const hv = {};
      for (const Sv of vv) {
        const vv = zv[Sv.i];
        void 0 !== vv ? hv[vv] = Pv(vv, Sv.v) : console.error(`Unknown Partial field index ${Sv.i}`)
      }
      return hv
    }

    function Az(vv, zv) {
      return (0, Sv.N)(zv) ? null : "wV" === vv ? function(vv) {
        return Oz(av, Qz(vv, Fz.A, ((vv, zv) => Uz(tv[vv], vv, zv))))
      }(zv) : Uz(xv[vv], vv, zv)
    }

    function Lz(vv, zv) {
      return (0, Sv.N)(zv) ? null : "wV" === vv ? function(vv) {
        return (0, Sv.N)(vv) ? null : Zz(vv, Fz.A, Rz)
      }(Dz(zv)) : Rz(vv, zv)
    }

    function Hz(vv) {
      const {
        type: zv,
        ...Pv
      } = vv, hv = {};
      for (const Sv in Pv) {
        const vv = Pv[Sv];
        hv[Sv] = Kz(Sv, vv)
      }
      if ("chunkAdded" === zv || "chunkRemoved" === zv) hv.rle = Yz(hv.rle);
      else if ("playSound" === zv) {
        const vv = hv.RP;
        hv.RP = (0, Sv.N)(vv) ? null : xz(vv)
      } else if ("customKillfeed" === zv) {
        var ev, gv;
        hv.killer = xz(null !== (ev = hv.killer) && void 0 !== ev ? ev : {}), hv.victim = xz(null !== (gv = hv.victim) && void 0 !== gv ? gv : {})
      }
      return {
        [zv]: hv
      }
    }

    function Mz(vv) {
      const zv = Object.keys(vv)[0],
        Pv = vv[zv],
        hv = {};
      for (const Sv in Pv) {
        const vv = Pv[Sv];
        hv[Sv] = Vz(Sv, vv)
      }
      if ("chunkAdded" === zv || "chunkRemoved" === zv) hv.rle = nz(hv.rle);
      else if ("playSound" === zv) {
        const vv = hv.RP;
        hv.RP = (0, Sv.N)(vv) ? null : tz(vv)
      } else if ("customKillfeed" === zv) {
        var ev, gv;
        hv.killer = tz(null !== (ev = hv.killer) && void 0 !== ev ? ev : {}), hv.victim = tz(null !== (gv = hv.victim) && void 0 !== gv ? gv : {})
      }
      return {
        type: zv,
        ...hv
      }
    }

    function yz(vv) {
      var zv, Pv;
      return (0, Sv.N)(vv) ? null : {
        name: vv.name,
        amount: null !== (zv = vv.amount) && void 0 !== zv ? zv : null,
        attributes: JSON.stringify(null !== (Pv = vv.attributes) && void 0 !== Pv ? Pv : {})
      }
    }

    function Bz(vv) {
      if ((0, Sv.N)(vv)) return null;
      const zv = vv;
      return {
        name: zv.name,
        amount: zv.amount,
        attributes: JSON.parse(zv.attributes)
      }
    }

    function Jz(vv) {
      if ((0, Sv.N)(vv)) return null;
      return {
        fullSlotsArray: Array.isArray(vv.slots),
        entries: Qz(vv, Fz.n, ((vv, zv) => {
          if ((0, Sv.N)(zv)) return null;
          if ("slots" === vv) {
            const vv = Array.isArray(zv) ? function(vv) {
              const zv = {};
              for (let Pv = 0; Pv < vv.length; Pv++) zv[Pv] = vv[Pv];
              return zv
            }(zv) : zv;
            return Oz(Dv, function(vv) {
              const zv = {};
              for (const Pv in vv) {
                const hv = vv[Pv];
                zv[Pv] = yz(hv)
              }
              return zv
            }(vv))
          }
          return Oz(Ov, zv)
        }))
      }
    }

    function Ez(vv) {
      if ((0, Sv.N)(vv)) return;
      const zv = vv.fullSlotsArray;
      return Zz(vv.entries, Fz.n, ((vv, Pv) => {
        if ((0, Sv.N)(Pv)) return null;
        if ("slots" === vv) {
          const vv = function(vv) {
            const zv = {};
            for (const Pv in vv) {
              const hv = vv[Pv];
              zv[Number(Pv)] = Bz(hv)
            }
            return zv
          }(Dz(Pv));
          return zv ? function(vv) {
            const zv = [];
            for (let Pv = 0; Pv < Sv.l; Pv++) zv.push(Pv in vv ? vv[Pv] : null);
            return zv
          }(vv) : vv
        }
        return Dz(Pv)
      }))
    }

    function oz(vv) {
      return {
        entities: Iz(vv.entities, (vv => Qz(vv, Fz.j, Az))),
        items: Iz(vv.items, (vv => Qz(vv, Fz.q, ((vv, zv) => Uz(qv[vv], vv, zv))))),
        camera: vv.camera,
        hotbar: Jz(vv.hotbar),
        playerHud: (0, Sv.N)(vv.playerHud) ? null : Qz(vv.playerHud, Fz.s, ((vv, zv) => (0, Sv.N)(zv) ? null : function(vv, zv) {
          return {
            [vv]: zv
          }
        }("double", zv))),
        effects: (0, Sv.N)(vv.effects) ? null : (0, fz.m)(vv.effects),
        uiElements: Qz(vv.uiElements, Fz.E, ((vv, zv) => (0, Sv.N)(zv) ? null : JSON.stringify(zv))),
        environment: Qz(vv.environment, Fz.w, ((vv, zv) => Uz(Iv[vv], vv, zv))),
        structuralEvents: vv.structuralEvents.map(Hz),
        ephemeralEvents: vv.ephemeralEvents.map(Hz)
      }
    }

    function bz(vv) {
      var zv;
      const Pv = {
          entities: Iz(vv.entities, (vv => {
            const zv = Zz(vv, Fz.j, Lz),
              Pv = zv.type ? (0, hv.t)(zv.type) : null;
            return Pv && (zv.type = "Mesh", zv.meshKind = Pv.meshKind, zv.meshOpts = Pv.meshOpts), zv
          })),
          items: Iz(vv.items, (vv => Zz(vv, Fz.q, Rz))),
          camera: {
            ...vv.camera,
            charging: null !== (zv = vv.camera.charging) && void 0 !== zv && zv
          },
          uiElements: Zz(vv.uiElements, Fz.E, ((vv, zv) => "string" === typeof zv ? JSON.parse(zv) : zv)),
          environment: Zz(vv.environment, Fz.w, Rz),
          structuralEvents: vv.structuralEvents.map((vv => {
            const zv = Mz(vv);
            return "eD" === zv.type ? (zv.fromBlockData ??= null, zv.toBlockData ??= null) : "chunkAdded" !== zv.type && "chunkRemoved" !== zv.type || (zv.sharedBlockData ??= []), zv
          })),
          ephemeralEvents: vv.ephemeralEvents.map((vv => Mz(vv)))
        },
        ev = Ez(vv.hotbar);
      return void 0 !== ev && (Pv.hotbar = ev), (0, Sv.N)(vv.playerHud) || (Pv.playerHud = Zz(vv.playerHud, Fz.s, ((vv, zv) => (0, Sv.N)(zv) ? null : function(vv) {
        if (null === vv || "object" !== typeof vv || Array.isArray(vv)) return vv;
        const zv = Object.keys(vv);
        return 1 !== zv.length || "int" !== zv[0] && "double" !== zv[0] ? vv : vv[zv[0]]
      }(zv)))), (0, Sv.N)(vv.effects) || (Pv.effects = (0, fz.h)(vv.effects)), Pv
    }
    let rz, kz;
    var Xz, uz, vP, zP, PP, hP, SP, eP, gP, pP, dP;
    const NP = [0, 1, 8, 255, "length", 2, 3, 17, "f", "undefined", void 0, 114, 36, 63, 6, "fromCodePoint", 7, 12, "push", 19, 91, 8191, 88, 13, 14, null, 101, 68, "join", 241, 25, 55, 9, "e", 4, "h", "c", "i", 159, !1, 209, 201, 40, 49, "a", "b", 11, 182, 199, 5, "k", 167, 224, 180, 54, 217, 32, 185, "d", 84, 135, 187, 48, 168, 30, 95, "js", 64, "g", 219, 56, 156, 183, !0, 178, 154, 123, 38, 153, 147, 215, "Sa", 104, 160, 230, 146, 125, 81, 127, 128, 242, 72, 34, 214, 223, 105, 221, 10];

    function lP(...vv) {
      return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(vv) {
        var zv, Pv, hv, Sv, ev, gv, pv;
        for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
          var dv = 'A&R<]~:%_!1(O=K.)anhfu5dgXJevQH>oEtw^x2b/7B#CksPq{DcmS[?,@;+|yi09z"6`j3VY*$48pFU}TrZlIGLNWM'.indexOf(zv[pv]);
          if (dv !== -NP[1])
            if (gv < NP[0]) gv = dv;
            else {
              aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
              do {
                aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
              } while (ev > NP[16]);
              gv = -NP[1]
            }
        }
        return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
      }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
    }

    function TP(vv) {
      return typeof zP !== NP[9] && zP ? (new zP).decode(new PP(vv)) : typeof hP !== NP[9] && hP ? hP.from(vv).toString("utf-8") : gP(vv)
    }

    function WP() {}

    function wP(vv, zv, Pv, hv = {}, Sv, ev, gv, pv, dv) {
      if (gv || (gv = function(...vv) {
          var zv;
          aP(vv[NP[4]] = NP[0], zv = function(...vv) {
            aP(vv[NP[4]] = NP[1], this.GT = vv[NP[0]], this.length = NP[0], this.map = {}, this.head = NP[25], this.tail = NP[25])
          }, zv.prototype.get = function(...vv) {
            var zv;
            return aP(vv[NP[4]] = NP[1], zv = this.map[vv[NP[0]]]), zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -NP[1]
          }, zv.prototype.put = function(...vv) {
            aP(vv[NP[4]] = NP[5], this.map[vv[NP[0]]] ? (this.remove(this.map[vv[NP[0]]]), this.insert(vv[NP[0]], vv[NP[1]])) : this.length === this.GT ? (this.remove(this.head), this.insert(vv[NP[0]], vv[NP[1]])) : (this.insert(vv[NP[0]], vv[NP[1]]), this.length++))
          }, zv.prototype.remove = function(...vv) {
            aP(vv[NP[4]] = NP[1], vv[NP[27]] = vv[NP[0]].prev, vv[NP[26]] = vv[NP[0]].next), vv[NP[26]] && (vv[NP[26]].prev = vv[NP[27]]), vv[NP[27]] && (vv[NP[27]].next = vv[NP[26]]), this.head === vv[NP[0]] && (this.head = vv[NP[26]]), this.tail === vv[NP[0]] && (this.tail = vv[NP[27]]), delete this.map[vv[NP[0]].key]
          }, zv.prototype.insert = function(...vv) {
            aP(vv[NP[4]] = NP[5], vv[NP[5]] = new List(vv[NP[0]], vv[NP[1]]), this.tail ? (this.tail.next = vv[NP[5]], vv[NP[5]].prev = this.tail, this.tail = vv[NP[5]]) : (this.tail = vv[NP[5]], this.head = vv[NP[5]]), this.map[vv[NP[0]]] = vv[NP[5]])
          }, console.log(zv))
        }), ev || (ev = function(...vv) {
          return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = Sv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
        }), Sv || (Sv = function(vv) {
          var zv, Pv, hv, Sv, ev, gv, pv;
          for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
            var dv = '_!<&%x}yVz1fUQF;?qZB.ub$wYISJD^h4dNvP,5X2eK3mH0kjOs*CLG(>[o7ia:=#E@9lA]T8W/c`p~"g)R+M6tn|{r'.indexOf(zv[pv]);
            if (dv !== -NP[1])
              if (gv < NP[0]) gv = dv;
              else {
                aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
                } while (ev > NP[16]);
                gv = -NP[1]
              }
          }
          return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
        }), ev(80) in WP && gv(), aP(pv = void 0, dv = {
          [ev(NP[87])]: function(vv, zv) {
            zv || (zv = function(...zv) {
              return zv[NP[4]] = NP[1], typeof Xz[zv[NP[0]]] === NP[9] ? Xz[zv[NP[0]]] = vv(uz[zv[NP[0]]]) : Xz[zv[NP[0]]]
            }), vv || (vv = function(vv) {
              var zv, Pv, hv, Sv, ev, gv, pv;
              for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
                var dv = '(&q0Yd>:9~knpUf]!Vx%H8#7@*wC}R[b=zgQ"D3vFBN6OmZKA,`aPEoS?_yJr^TGlM45Is|.+L<j/Wu{2ht$e)1i;Xc'.indexOf(zv[pv]);
                if (dv !== -NP[1])
                  if (gv < NP[0]) gv = dv;
                  else {
                    aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
                    } while (ev > NP[16]);
                    gv = -NP[1]
                  }
              }
              return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
            });
            var [
              [Pv, hv, Sv], gv
            ] = dP;
            console[ev(82)]("" + Pv[NP[28]](".") + (ev(83) + zv(NP[59])) + Sv[zv(85) + "me"] + zv(86) + hv)
          }
        }), zv === ev(87) + ev(NP[22]) && (dP = []), zv === ev(89) + ev(90)) {
        function Nv(...zv) {
          var Pv;

          function Sv(...vv) {
            return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
              for (aP(vv[NP[4]] = NP[1], vv[NP[31]] = '9PnFVqQbSABJXlTKc:Uu1W)i{=6^v?zh/(]2<gCY;50"rNMO@R!|%8}y~pwxaHfZms&L.+etd#*I,$_o>`3k4GDj[E7', vv[NP[29]] = "" + (vv[NP[0]] || ""), vv[-NP[30]] = vv[NP[29]].length, vv[NP[34]] = [], vv[NP[33]] = NP[0], vv[NP[30]] = NP[0], vv[NP[16]] = -NP[1]), vv[NP[2]] = NP[0]; vv[NP[2]] < vv[-NP[30]]; vv[NP[2]]++)
                if (vv[NP[32]] = vv[NP[31]].indexOf(vv[NP[29]][vv[NP[2]]]), vv[NP[32]] !== -NP[1])
                  if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[32]];
                  else {
                    aP(vv[NP[16]] += vv[NP[32]] * NP[20], vv[NP[33]] |= vv[NP[16]] << vv[NP[30]], vv[NP[30]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(vv[NP[34]].push(vv[NP[33]] & NP[3]), vv[NP[33]] >>= NP[2], vv[NP[30]] -= NP[2])
                    } while (vv[NP[30]] > NP[16]);
                    vv[NP[16]] = -NP[1]
                  } return vv[NP[16]] > -NP[1] && vv[NP[34]].push((vv[NP[33]] | vv[NP[16]] << vv[NP[30]]) & NP[3]), TP(vv[NP[34]])
            }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
          }
          return zv[NP[4]] = NP[0], Sv(NP[20]) in WP && (module.exports = async (vv = (...vv) => {
            function zv(...vv) {
              for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = 'j:FIAl_T7/6E4=835Bpdf,kCu1@`VN>?0nrbwO;i2(e.*&P9)MtDcJ+Zs%|}z#QaSL"$[GKhR~{Xqo]xvHUWy^Yg<m!', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[36]] = vv[NP[5]].length, vv[NP[38]] = [], vv[NP[33]] = NP[0], vv[NP[8]] = NP[0], vv[-NP[23]] = -NP[1]), vv[NP[35]] = NP[0]; vv[NP[35]] < vv[NP[36]]; vv[NP[35]]++)
                if (vv[NP[37]] = vv[NP[1]].indexOf(vv[NP[5]][vv[NP[35]]]), vv[NP[37]] !== -NP[1])
                  if (vv[-NP[23]] < NP[0]) vv[-NP[23]] = vv[NP[37]];
                  else {
                    aP(vv[-NP[23]] += vv[NP[37]] * NP[20], vv[NP[33]] |= vv[-NP[23]] << vv[NP[8]], vv[NP[8]] += (vv[-NP[23]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(vv[NP[38]].push(vv[NP[33]] & NP[3]), vv[NP[33]] >>= NP[2], vv[NP[8]] -= NP[2])
                    } while (vv[NP[8]] > NP[16]);
                    vv[-NP[23]] = -NP[1]
                  } return vv[-NP[23]] > -NP[1] && vv[NP[38]].push((vv[NP[33]] | vv[-NP[23]] << vv[NP[8]]) & NP[3]), TP(vv[NP[38]])
            }

            function Pv(...vv) {
              return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = zv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
            }
            throw vv[NP[4]] = NP[0], new Error(Pv(92))
          }) => {
            const zv = new Set(process.argv.slice(NP[5]));
            if (!zv.has(Sv(93))) {
              if (zv.size !== NP[1]) return NP[39];
              if (!zv.has("-v")) return NP[39]
            }
            return await (async (zv, Pv) => {
              function hv(...vv) {
                for (aP(vv[NP[4]] = NP[1], vv[-NP[41]] = 'AQkhFTHLUnoXEpPtBWRgjerfZKNdbDaMscSqGiJ2O|Y=C/I{:mzw}(l3$,5v^x>]0%1.6*?<u#4+&`7"~y8[_!@);9V', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[5]].length, vv[-NP[43]] = [], vv[-NP[42]] = NP[0], vv[NP[14]] = NP[0], vv[NP[16]] = -NP[1]), vv[-NP[40]] = NP[0]; vv[-NP[40]] < vv[NP[6]]; vv[-NP[40]]++)
                  if (vv[NP[37]] = vv[-NP[41]].indexOf(vv[NP[5]][vv[-NP[40]]]), vv[NP[37]] !== -NP[1])
                    if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[37]];
                    else {
                      aP(vv[NP[16]] += vv[NP[37]] * NP[20], vv[-NP[42]] |= vv[NP[16]] << vv[NP[14]], vv[NP[14]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                      do {
                        aP(vv[-NP[43]].push(vv[-NP[42]] & NP[3]), vv[-NP[42]] >>= NP[2], vv[NP[14]] -= NP[2])
                      } while (vv[NP[14]] > NP[16]);
                      vv[NP[16]] = -NP[1]
                    } return vv[NP[16]] > -NP[1] && vv[-NP[43]].push((vv[-NP[42]] | vv[NP[16]] << vv[NP[14]]) & NP[3]), TP(vv[-NP[43]])
              }

              function Sv(...vv) {
                return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = hv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
              }
              return Pv === await vv() ? Sv(96) + "l)" : ""
            })(), NP[73]
          }), aP(Pv = function(...zv) {
            return Sv(97) + NP[50] in WP && function() {
              var vv = function(...vv) {
                if (aP(vv[NP[4]] = NP[1], vv[NP[44]] = vv[NP[0]].length), vv[NP[44]] < NP[5]) return NP[0];
                if (aP(vv[NP[45]] = Math.max(...vv[NP[0]]), vv[NP[6]] = Math.min(...vv[NP[0]])), vv[NP[45]] === vv[NP[6]]) return NP[0];
                for (aP(vv[-NP[48]] = Array(vv[NP[44]] - NP[1]).fill(Number.MAX_SAFE_INTEGER), vv[NP[49]] = Array(vv[NP[44]] - NP[1]).fill(Number.MIN_SAFE_INTEGER), vv[-NP[47]] = Math.ceil((vv[NP[45]] - vv[NP[6]]) / (vv[NP[44]] - NP[1])), vv[NP[16]] = NP[0]), vv[-NP[46]] = NP[0]; vv[-NP[46]] < vv[NP[44]]; vv[-NP[46]]++) vv[NP[0]][vv[-NP[46]]] !== vv[NP[6]] && vv[NP[0]][vv[-NP[46]]] !== vv[NP[45]] && aP(vv[NP[16]] = Math.floor((vv[NP[0]][vv[-NP[46]]] - vv[NP[6]]) / vv[-NP[47]]), vv[-NP[48]][vv[NP[16]]] = Math.min(vv[-NP[48]][vv[NP[16]]], vv[NP[0]][vv[-NP[46]]]), vv[NP[49]][vv[NP[16]]] = Math.max(vv[NP[49]][vv[NP[16]]], vv[NP[0]][vv[-NP[46]]]));
                for (aP(vv[-NP[51]] = Number.MIN_SAFE_INTEGER, vv[NP[52]] = vv[NP[6]]), vv[NP[50]] = NP[0]; vv[NP[50]] < vv[NP[44]] - NP[1]; vv[NP[50]]++) vv[-NP[48]][vv[NP[50]]] === Number.MAX_SAFE_INTEGER && vv[NP[49]][vv[NP[50]]] === Number.MIN_SAFE_INTEGER || aP(vv[-NP[51]] = Math.max(vv[-NP[51]], vv[-NP[48]][vv[NP[50]]] - vv[NP[52]]), vv[NP[52]] = vv[NP[49]][vv[NP[50]]]);
                return vv[-NP[51]] = Math.max(vv[-NP[51]], vv[NP[45]] - vv[NP[52]]), vv[-NP[51]]
              };
              console.log(vv)
            }(), dP = zv, dv[vv].apply(this)
          }, zv[NP[53]] = hv[vv]), zv[NP[53]] && function(...vv) {
            function zv(...vv) {
              for (aP(vv[NP[4]] = NP[1], vv[NP[61]] = '=QYFeTRGHtpsPCoh!~|uZB:>0ryKN}#Lj")]Mxv53_S.m%d^XU9`qOg81[(bcI?;+kiA<2E4Wwz6,*Va/&f7l@D$Jn{', vv[-NP[20]] = "" + (vv[NP[0]] || ""), vv[NP[36]] = vv[-NP[20]].length, vv[NP[63]] = [], vv[NP[49]] = NP[0], vv[NP[8]] = NP[0], vv[NP[16]] = -NP[1]), vv[-NP[47]] = NP[0]; vv[-NP[47]] < vv[NP[36]]; vv[-NP[47]]++)
                if (vv[NP[62]] = vv[NP[61]].indexOf(vv[-NP[20]][vv[-NP[47]]]), vv[NP[62]] !== -NP[1])
                  if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[62]];
                  else {
                    aP(vv[NP[16]] += vv[NP[62]] * NP[20], vv[NP[49]] |= vv[NP[16]] << vv[NP[8]], vv[NP[8]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(vv[NP[63]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[8]] -= NP[2])
                    } while (vv[NP[8]] > NP[16]);
                    vv[NP[16]] = -NP[1]
                  } return vv[NP[16]] > -NP[1] && vv[NP[63]].push((vv[NP[49]] | vv[NP[16]] << vv[NP[8]]) & NP[3]), TP(vv[NP[63]])
            }

            function Pv(...vv) {
              return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = zv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
            }
            vv[NP[4]] = NP[0], Pv(NP[95]) + NP[50] in WP && hv();

            function hv(...vv) {
              function zv(...vv) {
                for (aP(vv[NP[4]] = NP[1], vv[NP[44]] = 'b%|[P=zrjD04BI6e"$ZJ#iq{Qc`OGE]9)M_L3g;*pN@XCUhdau8H}(1SfRoW,/><~lK^s!nT&5k:yFw.7xvAV+2?mYt', vv[-NP[64]] = "" + (vv[NP[0]] || ""), vv[NP[36]] = vv[-NP[64]].length, vv[NP[34]] = [], vv[NP[49]] = NP[0], vv[NP[14]] = NP[0], vv[NP[16]] = -NP[1]), vv[-NP[65]] = NP[0]; vv[-NP[65]] < vv[NP[36]]; vv[-NP[65]]++)
                  if (vv[NP[32]] = vv[NP[44]].indexOf(vv[-NP[64]][vv[-NP[65]]]), vv[NP[32]] !== -NP[1])
                    if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[32]];
                    else {
                      aP(vv[NP[16]] += vv[NP[32]] * NP[20], vv[NP[49]] |= vv[NP[16]] << vv[NP[14]], vv[NP[14]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                      do {
                        aP(vv[NP[34]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[14]] -= NP[2])
                      } while (vv[NP[14]] > NP[16]);
                      vv[NP[16]] = -NP[1]
                    } return vv[NP[16]] > -NP[1] && vv[NP[34]].push((vv[NP[49]] | vv[NP[16]] << vv[NP[14]]) & NP[3]), TP(vv[NP[34]])
              }

              function Pv(...vv) {
                return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = zv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
              }
              vv[NP[4]] = NP[0];
              const hv = require("path"),
                {
                  version: Sv
                } = require("../../package"),
                {
                  version: ev
                } = require("@redacted/enterprise-plugin/package"),
                {
                  version: gv
                } = require("@redacted/components/package"),
                {
                  sdkVersion: pv
                } = require("@redacted/enterprise-plugin");
              require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), hv.resolve(__dirname, Pv(106) + Pv(107) + NP[66])
            }
          }(Pv, zv[NP[53]]), Pv
        }
        pv = pP[vv] || (pP[vv] = Nv())
      } else pv = dv[vv]();
      if (Pv === ev(98) + ev(99)) {
        function lv(...vv) {
          for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = 'g0Loz`JNRy%:=e/Tx}|h3l7w.q+&Pdm;{_@[Z$OX#>KWQvibA(t1~Vus8Fk]B*HSCn)<D6?j9^2IcU4"5p!GM,EYfra', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[-NP[54]] = vv[NP[5]].length, vv[NP[58]] = [], vv[NP[56]] = NP[0], vv[-NP[57]] = NP[0], vv[NP[16]] = -NP[1]), vv[NP[35]] = NP[0]; vv[NP[35]] < vv[-NP[54]]; vv[NP[35]]++)
            if (vv[-NP[55]] = vv[NP[1]].indexOf(vv[NP[5]][vv[NP[35]]]), vv[-NP[55]] !== -NP[1])
              if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[-NP[55]];
              else {
                aP(vv[NP[16]] += vv[-NP[55]] * NP[20], vv[NP[56]] |= vv[NP[16]] << vv[-NP[57]], vv[-NP[57]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(vv[NP[58]].push(vv[NP[56]] & NP[3]), vv[NP[56]] >>= NP[2], vv[-NP[57]] -= NP[2])
                } while (vv[-NP[57]] > NP[16]);
                vv[NP[16]] = -NP[1]
              } return vv[NP[16]] > -NP[1] && vv[NP[58]].push((vv[NP[56]] | vv[NP[16]] << vv[-NP[57]]) & NP[3]), TP(vv[NP[58]])
        }

        function Tv(...vv) {
          return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = lv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
        }

        function Wv() {
          function vv(...vv) {
            return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
              for (aP(vv[NP[4]] = NP[1], vv[NP[59]] = 'xy5<v0*9!38."T=uMDNC]GR;7Q/S&apK|l#(Y?^_>%Ud~Li{O4$o)HewXJ`:Ir6g}F+P,2Zjqbnf[m1t@BzEAscVkhW', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[45]].length, vv[NP[60]] = [], vv[NP[49]] = NP[0], vv[NP[29]] = NP[0], vv[NP[16]] = -NP[1]), vv[NP[35]] = NP[0]; vv[NP[35]] < vv[NP[6]]; vv[NP[35]]++)
                if (vv[NP[32]] = vv[NP[59]].indexOf(vv[NP[45]][vv[NP[35]]]), vv[NP[32]] !== -NP[1])
                  if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[32]];
                  else {
                    aP(vv[NP[16]] += vv[NP[32]] * NP[20], vv[NP[49]] |= vv[NP[16]] << vv[NP[29]], vv[NP[29]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(vv[NP[60]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[29]] -= NP[2])
                    } while (vv[NP[29]] > NP[16]);
                    vv[NP[16]] = -NP[1]
                  } return vv[NP[16]] > -NP[1] && vv[NP[60]].push((vv[NP[49]] | vv[NP[16]] << vv[NP[29]]) & NP[3]), TP(vv[NP[60]])
            }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
          }
          const zv = require("path"),
            {
              version: Pv
            } = require("../../package"),
            {
              version: hv
            } = require("@redacted/enterprise-plugin/package"),
            {
              version: Sv
            } = require("@redacted/components/package"),
            {
              sdkVersion: ev
            } = require("@redacted/enterprise-plugin");
          require("../utils/isStandaloneExecutable"), require("./resolve-local-redacted-path"), zv.resolve(__dirname, vv(NP[26]) + vv(102) + NP[66])
        }
        return ev(100) in WP && Wv(), {
          [ev(103) + Tv(NP[82])]: pv
        }
      }
      return pv
    }

    function aP() {
      aP = function() {}
    }
    aP(Xz = {}, uz = [';d`1YD2n#_Pj"=Ynq<k>S;Hnn|(`&', "DO(Yx/%==KLQhK~h!wR", "@V$_*?m${.B", 'Ca%!Y^4cS[Y,].~#).!Hq3S=W;isZR|d$a"o$jL7E.J<hRhvF,k]AsT&', "{/AEaZA", "t|Hv@|>7<[N52y!>cz_Fq0uhMKpp]q!", '6k,*;czQ>u"w.2C2Ics8.Zc%c@,KT^%Xp+=8vPe%r[ae/ZiaZv<~', '^$<~Zky&>O"}6ewHK|Fmx,iO][4pl]dvq@:!58vR<', "G<X[[,LQvu+", "rc(p7yR3&@<t3j/>R[MQ|p#=++8$yq12>&", ":J)HrkJ_<h5:dDu/Y+v1", "~Vj$)igsMa*6]<", "hJRc|31sC(&cX)KJ?ai83iFOkKu>rjq/$+i*~TB;vawU+<gw7cz[$jw%3=", 'eti>M@P&q@EiP3^H]"K%', 'pXGvRT[m3;l$,<XtrqCQ:Gu7.n}_OZA#:]0m"Y*c4(fUhJHd', "Y:4orTTwPuO)CVQQ$cHvn2TIvKFX8ZsJlA", "[[FvhD%4|KVpSqE^UXcQc4!4}O:UO+WvFK1Y:?oR", "Vi9c:t:sXi*68Z`nzd@cRsL%D!X=`e(2HO):Q", "7:ZSnD(4s,H89^<>6B(Y#c2m++|+Mj^>p+umt{5m8i9sWgKh;t[%", ":Qac}8q;z|}_&", "M<{[Px4@Q+h?Y+RxhJk?]q.70,EUQxY>Zcjmw}dPk_", "SqA[6tF$<@hjA", "X$):_?:Bo.&YpTOhr:DY>*~S@il3jXMB%`9[ylt^Nz}3#+S//d3%", ".:[m/}W%`[}3/+M)2VKmaT6wZOEiI^K", 'Hz2?~tv_U0F,O<nbiaP!QI)g,fYvu^)e<np$2{07|(EUJ2#b"xR', 'Tf28fV1;q"veE]', '&Qz:;l.%s"B?!^W7r+K8Ds9s."$3w2Gt*kWog2=TI=_`E)&Bg|j1vZwP4a{', 'fnu$>P(SvaBg:~^n)!c_tIRG)|5?rj~xs#gE)Z674Ky"^P;Bt@!FJZ;;Wa', "Nc<$b{@PLfS8I{^HH&", "X/&[3qA", ";q}[2})g8()frT,w?[imZihwC+fqIq%XotEccp%07zCv(K:2?dW[0p?%%=&R&", "5@(YWEAHchN@!qFJe!y$OZd7<@jp(JI/(ddvmry4pSRHXqOb5sQ8CwV@]", '?+X:6$v9"|fgc3AH*d{cRY;}vKJcB=wa', "OdL*p8:m_z*(0K`god)HL+X4vi=;6rtx1`_:BxNt^!A`||>d1]!Hn", "mcoev[E4pSej?esJ,cZ_W*fRTOoa+;Dt?A", 'px<p}TYgnO,3<2?w/JcS]qrmt!"s#;~X?J]pEIzwb=g?tx<#{c>v&T_s%', "r32{SS6QoO}6#<uw+`Hm,Y!S{|f;)VSvZA", "fVj1JmCR", "d|!oz?Iamh<)&)xn8+3mvw^m7zarpgEaMiQ8)", "H/Uvvmx%+,;3~^<#.sa4Aq8OMiKd%rae.VV:!TH^%", "uOgHdD%%R!;*s{9^XVR", "j!VmjS*@|(U&v<Q^{A", "}*q[+t9;#zlQ5xZ7R{lQ$8a=^9Ke?Kgt$k&4j|1H<", "a0H{T84@BfW^IqVn`>l~5m?wC(T.;T`2!]no|Y*ci+S}B=iH", "mO|SuZy=<", "TX3]d@:;Fn46[y&>]`P:9sAHJKZp8ZM58`lV,0P&<", 'fO9[^[449O"og<3xaVTcFTP4a@a4l^`gLfsvLkIw`h>Y<.^2~@A4[3$n/a6+&', 'jkF%k4sR@Kq"=lUb:!R', "q[Iv0U[sLf}&0KshM<fpj?0Q/zG^;T+d,zMoPx>w!?mn&", 'Yfi]OD|Rt!oY}g"xrv8JzT;RJ+O`S{XQb:CQ]?hS`@Yv3T&doc%!o*Z=Tn', ":]RYZj2He+FXp^K", "AwLv8D&X=+tUi342T3$QmcXjp(8pP;ZtD/8Sam$::", "G<toWFuhr0xj>e7n|V2mjYSw90et?20a0x&:.?vn+zNOi=`>", "qzjv#4GmF_b>;X;w3zz:aVO;m9EeAV]n|fLv;SW7/;N3XYV25z&", "QOs%D`I=}!(4BJbnsz>mB}U%p,f=E)^XWiho9YYOUn2", "vQ?]h2eQUn(YI{&x]o<", "7qg*u8N$ShNsA.<HZX?mx*5RZ|s80K<^z<M_Vj3G#a,3l<", "xqF82{Ia0_rp%Zqe#dPmdV,/Ci(c3{Ram<&e0?}gz[ejc3)eTxUmIk@&", "MkO1YtNgPuBK?KJ7XQ@:.?A", "Vik1]$`Gk(@}j{#JR{<", "#@F>tFcQ{.l6&", "oqlDE*pj<h}XZ2LQ=V?myS]3,;%<ij=", "|qTo=$9Of@%UgP3xX/.!U?A", '.one6iB}sn?"9.5wCda[s{[HAOxmS]$>2cQ1#c@Q6hBw@Y9n^d(Y?sA', 'T:I%Z@fmj[Z3_)<X2x#o|tuP%=j3*YI7}+q!pZ1nE"gcX^&^sadmWEA', '[J.E;|KGe+5fS|d7"atc4q,}s")<]e,v{z>[omk4$K', ",<K?$D>4x=%;/Z)/itV*LFZ7|+OUeK;B", '*B4oMmU=."I3"=5eF3%8)2A', '%$#pk}2^hO=)txo^i+}!iS(7a"eY&', "5ds%4$4&", "$,ImY^:s}!.U])Ha_$woKjMGBiW5u)(bE`58tyFt009,7]", 'rX6o^[$;Q+"v5x,BX/Z_Q', "w.gED3w%va9]fe}t5[dH7`9$(+.?!^@wzxM_)8[sj[sux)Nvf.`~", '|VMS?bSPZ|DvOVzg~V[?.V%%?;Ji/eMvDkRe@p;n&"*(UR', ":Qn4*@!&KuHfeD1XUK|SFT=7Ma8$yTjhkdx%", "Tk>*O?Fgo.8}4Zfv5J#o1^n^2hc(~YWvudO1O$}O(f%rn~", "A#S?GmO;<@Jjnx/>WcJeXVfGC_C]>R3xCdVmP`$O8S5t5~", '4BJe&b_3$iKdSYn/R"H8DpWjMK@*1xxx2OeQNVBspKwu}VG)d!~1J2A', "V[A:uV,R", '"c2>pTfR', "PUd*tCf!", "oI?G[0?<", "l*Cp3g_", "ir2%sX1!", "=_$9.#(", "S.Q=pSpq", "ZcC$)F=(", 'rHV~"/.<', "sHrxb", "_G_ckOW!", "&iwzD", "WphR+dvn", "l.]9?hXT.BQcOAii>%5/]]UYXLdDeM4", "Qg`/5>K88uy", "7rXom6Jk", "[hF`^`jk", "7rk`_*Ek", "|As}*a}n", "c:6%q:c!", ",/wzJ", "~:TJn[6!", "B_=4KjN5", "i3P|wZyy", ">$V^/5Z<", "4H2V=", "ZcBz?*`Q", "x*6u9TZ|", "hD^)Sn%%", "te6OAaWX", "Wzxc6Y/X", "!I4f7Bo0", "+2<t<z{0", "Td;Cj86)", "::},q#2`RX", "<AFS:tBg", "G2`M,|+", ".4sk`^ygH", "n6}UO$#f", "zODs", "!=u4mTuj", "jYcMUn+", "I25A3<?g", "BzGMhvfg", "3`ZQX+oR", "}_reP4^`a5", "Hx!/C]8@5!", '2{]O"D7T7b', 'Rq"Kp`//=,', "$yehq`IH", '@."d+9+BOg$YH3(', "&gah.&RB#fnU,N!", "hTM1^dSUTaecLo(", "cr!M$X@T~lCaW;x", "nAJd=yRB_aENL3(", ")nS~L?<H[QmMNWx~fTyK:P*U@7=j5Buk05g/T", 'x?_}i4lFTV3s*s"JA0m;"4C/g(nYR<{qPZO}B', "Tx(Khq*UTaeCIo?n&Y1]FYt%P+)jH3]Vu5g/b", "?1A1W$r==f[c~CKVoEbKFYa=}VojH3~G|5bKT", "wLbK=ynFR1C9a?&@8Wz2*pncu!.rl3~G*58", "NPm*m", "uCK*JvYp", "%YgGt", "pum1xz?c", "0_{s!!oc", ",/mcT$,z", "1`o1;<F%1m", "Iu~x~", "Iu~xb|n^39<B3", "H+/*B>z4GY6iZ", ".ZR*%N[bd6F:Z", "{Z9l7VpBcYX9;", "!+O*lEgv$rdiZ", "e}Ah?fv0S0o9;", 'b"z~hC|nA']), aP(vP = function(...vv) {
      aP(vv[NP[4]] = NP[0], vv[NP[7]] = [function() {
        return globalThis
      }, function() {
        return global
      }, function() {
        return window
      }, function() {
        return new Function("return this")()
      }], vv[NP[1]] = NP[10], vv[NP[5]] = []);
      try {
        aP(vv[NP[1]] = Object, vv[NP[5]][NP[18]]("".__proto__.constructor.name))
      } catch (uz) {}
      vv: for (vv[NP[6]] = NP[0]; vv[NP[6]] < vv[NP[7]][NP[4]]; vv[NP[6]]++) try {
        for (vv[NP[1]] = vv[NP[7]][vv[NP[6]]](), vv[NP[8]] = NP[0]; vv[NP[8]] < vv[NP[5]][NP[4]]; vv[NP[8]]++)
          if (typeof vv[NP[1]][vv[NP[5]][vv[NP[8]]]] === NP[9]) continue vv;
        return vv[NP[1]]
      } catch (uz) {}
      return vv[NP[1]] || this
    }() || {}, zP = vP.TextDecoder, PP = vP.Uint8Array, hP = vP[NP[81]], SP = vP.String || String, eP = vP.Array || Array, gP = function() {
      var vv, zv, Pv = new eP(NP[89]);
      return aP(vv = SP[NP[15]] || SP.fromCharCode, zv = []),
        function(...hv) {
          for (aP(hv[NP[4]] = NP[1], hv[NP[1]] = NP[10], hv[NP[12]] = NP[10], hv[NP[6]] = hv[NP[0]][NP[4]], zv[NP[4]] = NP[0]), hv[-NP[11]] = NP[0]; hv[-NP[11]] < hv[NP[6]];) aP(hv[NP[12]] = hv[NP[0]][hv[-NP[11]]++], hv[NP[12]] <= NP[88] ? hv[NP[1]] = hv[NP[12]] : hv[NP[12]] <= NP[94] ? hv[NP[1]] = (31 & hv[NP[12]]) << NP[14] | hv[NP[0]][hv[-NP[11]]++] & NP[13] : hv[NP[12]] <= 239 ? hv[NP[1]] = (15 & hv[NP[12]]) << NP[17] | (hv[NP[0]][hv[-NP[11]]++] & NP[13]) << NP[14] | hv[NP[0]][hv[-NP[11]]++] & NP[13] : SP[NP[15]] ? hv[NP[1]] = (hv[NP[12]] & NP[16]) << 18 | (hv[NP[0]][hv[-NP[11]]++] & NP[13]) << NP[17] | (hv[NP[0]][hv[-NP[11]]++] & NP[13]) << NP[14] | hv[NP[0]][hv[-NP[11]]++] & NP[13] : (hv[NP[1]] = NP[13], hv[-NP[11]] += NP[6]), zv[NP[18]](Pv[hv[NP[1]]] || (Pv[hv[NP[1]]] = vv(hv[NP[1]]))));
          return zv[NP[28]]("")
        }
    }()), lP(78) in WP && function(...vv) {
      aP(vv[NP[4]] = NP[0], vv[-NP[19]] = function(vv) {
        var zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv, Tv = vv.length;
        if (Tv < NP[5]) return NP[0];
        if (aP(zv = Math.max(...vv), Pv = Math.min(...vv)), zv === Pv) return NP[0];
        for (aP(hv = Array(Tv - NP[1]).fill(Number.MAX_SAFE_INTEGER), Sv = Array(Tv - NP[1]).fill(Number.MIN_SAFE_INTEGER), ev = Math.ceil((zv - Pv) / (Tv - NP[1])), gv = NP[0]), pv = NP[0]; pv < Tv; pv++) vv[pv] !== Pv && vv[pv] !== zv && aP(gv = Math.floor((vv[pv] - Pv) / ev), hv[gv] = Math.min(hv[gv], vv[pv]), Sv[gv] = Math.max(Sv[gv], vv[pv]));
        for (aP(dv = Number.MIN_SAFE_INTEGER, Nv = Pv), lv = NP[0]; lv < Tv - NP[1]; lv++) hv[lv] === Number.MAX_SAFE_INTEGER && Sv[lv] === Number.MIN_SAFE_INTEGER || aP(dv = Math.max(dv, hv[lv] - Nv), Nv = Sv[lv]);
        return dv = Math.max(dv, zv - Nv)
      }, console.log(vv[-NP[19]]))
    }(), aP(pP = Object[lP(79)](NP[25]), dP = void 0), aP(rz = vv => {
      function zv(...vv) {
        return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
          for (aP(vv[NP[4]] = NP[1], vv[NP[44]] = '+gXDcrTRSAEb]o{@*B1>H~Q=5)Whe_wL3ZYv#Pxkz8V,.}/m(!"2`^64spFCJfKluq&aGn%<Ni[jOM:?|t0yU$I7;9d', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[36]] = vv[NP[45]].length, vv[NP[34]] = [], vv[NP[69]] = NP[0], vv[NP[14]] = NP[0], vv[NP[68]] = -NP[1]), vv[NP[67]] = NP[0]; vv[NP[67]] < vv[NP[36]]; vv[NP[67]]++)
            if (vv[NP[52]] = vv[NP[44]].indexOf(vv[NP[45]][vv[NP[67]]]), vv[NP[52]] !== -NP[1])
              if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[52]];
              else {
                aP(vv[NP[68]] += vv[NP[52]] * NP[20], vv[NP[69]] |= vv[NP[68]] << vv[NP[14]], vv[NP[14]] += (vv[NP[68]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(vv[NP[34]].push(vv[NP[69]] & NP[3]), vv[NP[69]] >>= NP[2], vv[NP[14]] -= NP[2])
                } while (vv[NP[14]] > NP[16]);
                vv[NP[68]] = -NP[1]
              } return vv[NP[68]] > -NP[1] && vv[NP[34]].push((vv[NP[69]] | vv[NP[68]] << vv[NP[14]]) & NP[3]), TP(vv[NP[34]])
        }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
      }
      zv(108) + "P" in WP && function(...vv) {
        var zv;
        aP(vv[NP[4]] = NP[0], zv = function(vv) {
          aP(this.GT = vv, this.length = NP[0], this.map = {}, this.head = NP[25], this.tail = NP[25])
        }, zv.prototype.get = function(...vv) {
          var zv;
          return aP(vv[NP[4]] = NP[1], zv = this.map[vv[NP[0]]]), zv ? (this.remove(zv), this.insert(zv.key, zv.val), zv.val) : -NP[1]
        }, zv.prototype.put = function(...vv) {
          aP(vv[NP[4]] = NP[5], this.map[vv[NP[0]]] ? (this.remove(this.map[vv[NP[0]]]), this.insert(vv[NP[0]], vv[NP[1]])) : this.length === this.GT ? (this.remove(this.head), this.insert(vv[NP[0]], vv[NP[1]])) : (this.insert(vv[NP[0]], vv[NP[1]]), this.length++))
        }, zv.prototype.remove = function(...vv) {
          aP(vv[NP[4]] = NP[1], vv[NP[1]] = vv[NP[0]].prev, vv[NP[45]] = vv[NP[0]].next), vv[NP[45]] && (vv[NP[45]].prev = vv[NP[1]]), vv[NP[1]] && (vv[NP[1]].next = vv[NP[45]]), this.head === vv[NP[0]] && (this.head = vv[NP[45]]), this.tail === vv[NP[0]] && (this.tail = vv[NP[1]]), delete this.map[vv[NP[0]].key]
        }, zv.prototype.insert = function(vv, zv) {
          var Pv = new List(vv, zv);
          aP(this.tail ? (this.tail.next = Pv, Pv.prev = this.tail, this.tail = Pv) : (this.tail = Pv, this.head = Pv), this.map[vv] = Pv)
        }, console.log(zv))
      }();
      const Pv = function(vv) {
          var zv;
          return {
            meta: {
              ...vv.meta,
              formatVersion: Fz.g,
              variation: null !== (zv = vv.meta.variation) && void 0 !== zv ? zv : null
            },
            initialChunks: vv.initialChunks.map((vv => ({
              chunkPos: vv.chunkPos,
              rle: Yz(vv.rle),
              sharedBlockData: Kz("sharedBlockData", vv.sharedBlockData)
            }))),
            ticks: vv.ticks.map(oz),
            editState: vv.editState
          }
        }(vv),
        hv = hz(Fz[NP[68]]);
      let Sv;
      try {
        function Nv(vv) {
          var zv, Pv, hv, Sv, ev, gv, pv;
          for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
            var dv = ';x@OWqY.!wR>SLvjtybnX|H91&T",/`}a_2[7ik~A<]:+56fIeuDMZGF4o=3m%s$BVzC^*0{#rcEhJNp(8lgKP?)QUd'.indexOf(zv[pv]);
            if (dv !== -NP[1])
              if (gv < NP[0]) gv = dv;
              else {
                aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
                } while (ev > NP[16]);
                gv = -NP[1]
              }
          }
          return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
        }

        function lv(...vv) {
          return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = Nv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
        }

        function Tv(...vv) {
          function zv(...vv) {
            return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
              for (aP(vv[NP[4]] = NP[1], vv[NP[43]] = 'u0),v?fm6;r>i$"Dkx&N^%A!4#*sLVH5O]2MZq|XnoJ+Ud[{l:zCh~jBa98b1cwS=KYW@(7/`gEteTQ_p<}FG3yPI.R', vv[NP[45]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[45]].length, vv[NP[34]] = [], vv[NP[49]] = NP[0], vv[NP[72]] = NP[0], vv[NP[68]] = -NP[1]), vv[NP[70]] = NP[0]; vv[NP[70]] < vv[NP[6]]; vv[NP[70]]++)
                if (vv[NP[71]] = vv[NP[43]].indexOf(vv[NP[45]][vv[NP[70]]]), vv[NP[71]] !== -NP[1])
                  if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[71]];
                  else {
                    aP(vv[NP[68]] += vv[NP[71]] * NP[20], vv[NP[49]] |= vv[NP[68]] << vv[NP[72]], vv[NP[72]] += (vv[NP[68]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                    do {
                      aP(vv[NP[34]].push(vv[NP[49]] & NP[3]), vv[NP[49]] >>= NP[2], vv[NP[72]] -= NP[2])
                    } while (vv[NP[72]] > NP[16]);
                    vv[NP[68]] = -NP[1]
                  } return vv[NP[68]] > -NP[1] && vv[NP[34]].push((vv[NP[49]] | vv[NP[68]] << vv[NP[72]]) & NP[3]), TP(vv[NP[34]])
            }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
          }

          function Pv(...vv) {
            if (vv[NP[4]] = NP[1], !vv[NP[0]]) return -NP[1];
            const zv = Pv(vv[NP[0]].left),
              hv = Pv(vv[NP[0]].right),
              Sv = Math.abs(zv - hv);
            return zv === 1 / 0 || hv === 1 / 0 || Sv > NP[1] ? 1 / 0 : Math.max(zv, hv) + NP[1]
          }
          vv[NP[4]] = NP[0], window[zv(110) + zv(111) + zv(112) + "_"] = {
            buildCharacterMap: function(...vv) {
              vv[NP[4]] = NP[1];
              const zv = {};
              for (let Pv of vv[NP[0]].replace(/[^w]/g, "").toLowerCase()) zv[Pv] = zv[Pv] + NP[1] || NP[1];
              return zv
            },
            isAnagrams: function(vv, zv) {
              const Pv = buildCharMap(vv),
                hv = buildCharMap(zv);
              for (let Sv in Pv)
                if (Pv[Sv] !== hv[Sv]) return NP[39];
              return Object.keys(Pv).length !== Object.keys(hv).length ? NP[39] : NP[73]
            },
            isBalanced: function(vv) {
              return Pv(vv) !== 1 / 0
            },
            getHeightBalanced: Pv
          }
        }
        zv(109) in WP && Tv(), Sv = hv[lv(113)](Pv)
      } catch (dv) {
        function Wv(...vv) {
          for (aP(vv[NP[4]] = NP[1], vv[NP[44]] = ',fjYhEHFMsJCLB~iuX)%`&?vgI=lZ3ke]7o[t>zqDadO_0TQ|S56}#4.<m!8VAP+Kc2rn(9RG@y/^U"w$1Nx*{:p;bW', vv[-NP[20]] = "" + (vv[NP[0]] || ""), vv[NP[75]] = vv[-NP[20]].length, vv[-NP[42]] = [], vv[-NP[78]] = NP[0], vv[NP[14]] = NP[0], vv[-NP[77]] = -NP[1]), vv[NP[74]] = NP[0]; vv[NP[74]] < vv[NP[75]]; vv[NP[74]]++)
            if (vv[-NP[76]] = vv[NP[44]].indexOf(vv[-NP[20]][vv[NP[74]]]), vv[-NP[76]] !== -NP[1])
              if (vv[-NP[77]] < NP[0]) vv[-NP[77]] = vv[-NP[76]];
              else {
                aP(vv[-NP[77]] += vv[-NP[76]] * NP[20], vv[-NP[78]] |= vv[-NP[77]] << vv[NP[14]], vv[NP[14]] += (vv[-NP[77]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(vv[-NP[42]].push(vv[-NP[78]] & NP[3]), vv[-NP[78]] >>= NP[2], vv[NP[14]] -= NP[2])
                } while (vv[NP[14]] > NP[16]);
                vv[-NP[77]] = -NP[1]
              } return vv[-NP[77]] > -NP[1] && vv[-NP[42]].push((vv[-NP[78]] | vv[-NP[77]] << vv[NP[14]]) & NP[3]), TP(vv[-NP[42]])
        }

        function wv(vv) {
          return typeof Xz[vv] === NP[9] ? Xz[vv] = Wv(uz[vv]) : Xz[vv]
        }

        function av(...vv) {
          aP(vv[NP[4]] = NP[0], vv[NP[44]] = function(...vv) {
            for (aP(vv[NP[4]] = NP[1], vv[-NP[79]] = vv[NP[0]].length, vv[-NP[70]] = [], vv[NP[6]] = NP[0]), vv[NP[58]] = NP[0]; vv[NP[58]] < vv[-NP[79]]; vv[NP[58]]++) vv[-NP[70]].push(vv[NP[58]] !== NP[0] && vv[NP[0]][vv[NP[58]]] > vv[NP[0]][vv[NP[58]] - NP[1]] ? vv[-NP[70]][vv[NP[58]] - NP[1]] + NP[1] : NP[1]);
            for (vv[NP[80]] = vv[-NP[79]] - NP[1]; vv[NP[80]] >= NP[0]; vv[NP[80]]--) vv[NP[80]] !== vv[-NP[79]] - NP[1] && vv[NP[0]][vv[NP[80]]] > vv[NP[0]][vv[NP[80]] + NP[1]] && (vv[-NP[70]][vv[NP[80]]] = Math.max(vv[-NP[70]][vv[NP[80]]], vv[-NP[70]][vv[NP[80]] + NP[1]] + NP[1])), vv[NP[6]] += vv[-NP[70]][vv[NP[80]]];
            return vv[NP[6]]
          }, console.log(vv[NP[44]]))
        }
        throw zv(NP[11]) in WP && av(), aP(console[zv(115)](Pv), hv[wv(116)](Pv, {
          [wv(117) + wv(118)]: (...vv) => (dP = [vv, {}], wP(wv(119)))
        })), dv
      }
      const gv = gz(Fz[NP[68]], Sv),
        pv = ev[NP[81]][zv(120)](NP[34]);
      return pv[zv(121) + zv(122) + "E"](Fz[NP[68]]), ev[NP[81]].concat([pv, gv])
    }, kz = vv => {
      function zv(...vv) {
        return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = function(...vv) {
          for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = ';ZpOsrAWB.GS{bj"w0)?YgE&nFtmaHXh*U}`Iu,y+#c739x~1R2Pivq!oQ|/$d6[T:JKMN]CL@^<l=z>Vf%k_548(De', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[84]] = vv[NP[5]].length, vv[NP[58]] = [], vv[-NP[82]] = NP[0], vv[NP[85]] = NP[0], vv[NP[68]] = -NP[1]), vv[-NP[83]] = NP[0]; vv[-NP[83]] < vv[NP[84]]; vv[-NP[83]]++)
            if (vv[NP[32]] = vv[NP[1]].indexOf(vv[NP[5]][vv[-NP[83]]]), vv[NP[32]] !== -NP[1])
              if (vv[NP[68]] < NP[0]) vv[NP[68]] = vv[NP[32]];
              else {
                aP(vv[NP[68]] += vv[NP[32]] * NP[20], vv[-NP[82]] |= vv[NP[68]] << vv[NP[85]], vv[NP[85]] += (vv[NP[68]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(vv[NP[58]].push(vv[-NP[82]] & NP[3]), vv[-NP[82]] >>= NP[2], vv[NP[85]] -= NP[2])
                } while (vv[NP[85]] > NP[16]);
                vv[NP[68]] = -NP[1]
              } return vv[NP[68]] > -NP[1] && vv[NP[58]].push((vv[-NP[82]] | vv[NP[68]] << vv[NP[85]]) & NP[3]), TP(vv[NP[58]])
        }(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
      }
      lP(NP[76]) + "I" in WP && function(...vv) {
        function zv(...vv) {
          for (aP(vv[NP[4]] = NP[1], vv[-NP[1]] = 't8HAo(=!1Z_bx3JnkVG,:l&TB5K]$)/d~pq@IW<DPwiy"L%FjMOUahEfrcRQC7+gXYmS4sN2;#.}z9`v?*0|^{u>6[e', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[5]].length, vv[NP[34]] = [], vv[-NP[86]] = NP[0], vv[NP[8]] = NP[0], vv[NP[16]] = -NP[1]), vv[NP[35]] = NP[0]; vv[NP[35]] < vv[NP[6]]; vv[NP[35]]++)
            if (vv[NP[37]] = vv[-NP[1]].indexOf(vv[NP[5]][vv[NP[35]]]), vv[NP[37]] !== -NP[1])
              if (vv[NP[16]] < NP[0]) vv[NP[16]] = vv[NP[37]];
              else {
                aP(vv[NP[16]] += vv[NP[37]] * NP[20], vv[-NP[86]] |= vv[NP[16]] << vv[NP[8]], vv[NP[8]] += (vv[NP[16]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(vv[NP[34]].push(vv[-NP[86]] & NP[3]), vv[-NP[86]] >>= NP[2], vv[NP[8]] -= NP[2])
                } while (vv[NP[8]] > NP[16]);
                vv[NP[16]] = -NP[1]
              } return vv[NP[16]] > -NP[1] && vv[NP[34]].push((vv[-NP[86]] | vv[NP[16]] << vv[NP[8]]) & NP[3]), TP(vv[NP[34]])
        }

        function Pv(...vv) {
          return vv[NP[4]] = NP[1], typeof Xz[vv[NP[0]]] === NP[9] ? Xz[vv[NP[0]]] = zv(uz[vv[NP[0]]]) : Xz[vv[NP[0]]]
        }
        vv[NP[4]] = NP[0], aP(vv[-NP[87]] = lP(124) + Pv(NP[86]) + Pv(126) + Pv(NP[88]) + Pv(NP[89]), vv[NP[90]] = Pv(129) + Pv(130) + Pv(131) + Pv(132) + Pv(133) + "?", vv[-NP[91]] = Pv(134) + Pv(NP[60]) + Pv(136) + Pv(137) + Pv(138), vv[-NP[87]].match(vv[NP[90]] + vv[-NP[91]]))
      }();
      const Pv = ev[NP[81]][zv(139)](vv);
      if (Pv[zv(140) + zv(141)] >= NP[34]) {
        function hv(vv) {
          var zv, Pv, hv, Sv, ev, gv, pv;
          for (aP(zv = "" + (vv || ""), Pv = zv.length, hv = [], Sv = NP[0], ev = NP[0], gv = -NP[1]), pv = NP[0]; pv < Pv; pv++) {
            var dv = '.cX|Cx"T1KRe)Y6utG%PDn[irwQ/fpIV>BZS,4$k&y30`:No{sEmv!8?]_(Wzh+d2;j9~OMqaUH@5F7l^=A#g*}<JLb'.indexOf(zv[pv]);
            if (dv !== -NP[1])
              if (gv < NP[0]) gv = dv;
              else {
                aP(gv += dv * NP[20], Sv |= gv << ev, ev += (gv & NP[21]) > NP[22] ? NP[23] : NP[24]);
                do {
                  aP(hv.push(Sv & NP[3]), Sv >>= NP[2], ev -= NP[2])
                } while (ev > NP[16]);
                gv = -NP[1]
              }
          }
          return gv > -NP[1] && hv.push((Sv | gv << ev) & NP[3]), TP(hv)
        }

        function gv(vv) {
          return typeof Xz[vv] === NP[9] ? Xz[vv] = hv(uz[vv]) : Xz[vv]
        }
        const pv = Pv[gv(142) + gv(143)](NP[0]);
        if ((0, Fz.o)(pv)) {
          function dv(...vv) {
            for (aP(vv[NP[4]] = NP[1], vv[NP[1]] = '73z]0y/c%{pAFEoqgLDTYmWCV+i~Kdn1x!es^#&U;vJSR8|GtHPu,rZQ*_N=`h$9fbw:jIB.6M>5O4k)<?"[(}@2Xal', vv[NP[5]] = "" + (vv[NP[0]] || ""), vv[NP[6]] = vv[NP[5]].length, vv[NP[34]] = [], vv[NP[33]] = NP[0], vv[NP[93]] = NP[0], vv[NP[90]] = -NP[1]), vv[-NP[92]] = NP[0]; vv[-NP[92]] < vv[NP[6]]; vv[-NP[92]]++)
              if (vv[-NP[76]] = vv[NP[1]].indexOf(vv[NP[5]][vv[-NP[92]]]), vv[-NP[76]] !== -NP[1])
                if (vv[NP[90]] < NP[0]) vv[NP[90]] = vv[-NP[76]];
                else {
                  aP(vv[NP[90]] += vv[-NP[76]] * NP[20], vv[NP[33]] |= vv[NP[90]] << vv[NP[93]], vv[NP[93]] += (vv[NP[90]] & NP[21]) > NP[22] ? NP[23] : NP[24]);
                  do {
                    aP(vv[NP[34]].push(vv[NP[33]] & NP[3]), vv[NP[33]] >>= NP[2], vv[NP[93]] -= NP[2])
                  } while (vv[NP[93]] > NP[16]);
                  vv[NP[90]] = -NP[1]
                } return vv[NP[90]] > -NP[1] && vv[NP[34]].push((vv[NP[33]] | vv[NP[90]] << vv[NP[93]]) & NP[3]), TP(vv[NP[34]])
          }

          function Nv(vv) {
            return typeof Xz[vv] === NP[9] ? Xz[vv] = dv(uz[vv]) : Xz[vv]
          }

          function lv(...vv) {
            function zv() {}
            vv[NP[4]] = NP[0], aP(vv[-NP[94]] = function(...vv) {
              for (aP(vv[NP[4]] = NP[5], vv[NP[44]] = NP[0], vv[-NP[96]] = NP[0], vv[NP[36]] = new zv(NP[0]), vv[NP[58]] = vv[NP[36]], vv[NP[33]] = vv[NP[0]], vv[NP[95]] = vv[NP[1]]); vv[NP[33]] !== NP[25] || vv[NP[95]] !== NP[25];) aP(vv[-NP[96]] = (vv[NP[33]] ? vv[NP[33]].val : NP[0]) + (vv[NP[95]] ? vv[NP[95]].val : NP[0]) + vv[NP[44]], vv[NP[44]] = Math.floor(vv[-NP[96]] / NP[97]), vv[NP[58]].next = new zv(vv[-NP[96]] % NP[97]), vv[NP[58]] = vv[NP[58]].next, vv[NP[33]] = vv[NP[33]] ? vv[NP[33]].next : NP[25], vv[NP[95]] = vv[NP[95]] ? vv[NP[95]].next : NP[25]);
              return vv[NP[44]] && (vv[NP[58]].next = new zv(vv[NP[44]])), vv[NP[36]].next
            }, console.log(vv[-NP[94]]))
          }
          Nv(144) + "5" in WP && lv();
          const Tv = Pv[Nv(145)](NP[34]),
            Wv = ez(pv) ? ev[NP[81]][Nv(NP[85])](pz(pv, Tv)) : Tv;
          return function(vv) {
            var zv, Pv, hv, ev, gv;
            const pv = null === (zv = vv.meta) || void 0 === zv ? void 0 : zv.formatVersion;
            if (!(0, Fz.o)(pv)) throw new Error(`Unsupported recording format version: ${pv}`);
            if (!Array.isArray(vv.initialChunks) || !Array.isArray(vv.ticks)) throw new Error("Recording is missing initialChunks or ticks");
            for (const Sv of vv.ticks)
              if (!Array.isArray(Sv.structuralEvents) || !Array.isArray(Sv.ephemeralEvents)) throw new Error("Recording tick is missing structuralEvents or ephemeralEvents");
            const dv = {
              ...vv.meta
            };
            return dv.formatVersion = Fz.g, (0, Sv.N)(dv.variation) && delete dv.variation, {
              meta: dv,
              initialChunks: vv.initialChunks.map((vv => {
                var zv;
                return {
                  chunkPos: vv.chunkPos,
                  rle: nz(vv.rle),
                  sharedBlockData: null !== (zv = Vz("sharedBlockData", vv.sharedBlockData)) && void 0 !== zv ? zv : []
                }
              })),
              ticks: vv.ticks.map(bz),
              editState: {
                cameraKeyframes: null !== (Pv = null === (hv = vv.editState) || void 0 === hv ? void 0 : hv.cameraKeyframes) && void 0 !== Pv ? Pv : [],
                playbackMark: null !== (ev = null === (gv = vv.editState) || void 0 === gv ? void 0 : gv.playbackMark) && void 0 !== ev ? ev : null
              }
            }
          }(hz(pv)[Nv(NP[79])](Wv))
        }
      }
      throw new Error(zv(148) + zv(149) + zv(150) + zv(151) + zv(152) + zv(NP[78]))
    })
  },
  36489: (vv, zv, Pv) => {
    Pv.d(zv, {
      A: () => lv,
      E: () => pv,
      c: () => gv,
      g: () => hv,
      j: () => Tv,
      n: () => Wv,
      o: () => ev,
      q: () => Nv,
      s: () => wv,
      w: () => dv
    });
    const hv = 9,
      Sv = [9];

    function ev(vv) {
      return Sv.includes(vv)
    }
    const gv = 100,
      pv = ["RightInfoText", "middleTextTop", "middleTextUpper", "middleTextLower", "crosshairText", "headerChips"],
      dv = ["skyBox", "fogColourOverride", "fogChunkDistanceOverride", "cameraTint", "fogOnSkybox", "fogBlockDistanceOverride"],
      Nv = ["itemName", "amount", "position", "size", "attributes"],
      lv = ["opacity", "zIndex", "overlayColour", "canSee", "meshScaling", "nameTagInfo", "multilineTextBox", "hasPriorityNametag", "ranks", "nameColour", "_isAlive", "_invisibleEffect", "_invincible", "killfeedColour", "hideNameSeed", "_glowingEffect", "lockHeadToBody"],
      Tv = ["type", "name", "position", "rotation", "scale", "speed", "jumping", "crouching", "cameraPitch", "armSwinging", "heldItemName", "heldItemEnchantmentTier", "pose", "followingEId", "followingOffset", "shouldMatchFollowingEntityRotation", "meshOffset", "baseRenderHeading", "armour", "wV", "playerCustomisations", "variation", "metaInfo", "soundName", "volume", "refDistance", "maxHearDist", "rate", "ridingVehicleEId", "leaderboardTop", "meshKind", "meshOpts", "aiState"],
      Wv = ["selectedSlotIndex", "slots"],
      wv = ["_health", "_totalMaxHealth", "_shield", "maxShield", "_aura", "auraPerLevel", "maxAuraLevel"]
  },
  36485: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Tv,
      g: () => av,
      h: () => dv,
      l: () => gv,
      m: () => pv,
      n: () => Nv
    });
    var hv = Pv(312),
      Sv = Pv(26);

    function ev(vv) {
      return null === vv || void 0 === vv ? null : "string" === typeof vv ? vv : null
    }

    function gv(vv, zv) {
      return JSON.stringify(vv) === JSON.stringify(zv)
    }

    function pv(vv) {
      const zv = [];
      for (const Pv of Object.keys(vv)) {
        const hv = vv[Pv];
        for (const vv of Object.keys(hv)) zv.push({
          Cv: Pv,
          name: vv,
          ...hv[vv]
        })
      }
      return zv
    }

    function dv(vv) {
      const zv = {};
      for (const ev of vv) {
        var Pv, hv, Sv;
        zv[ev.Cv] || (zv[ev.Cv] = {}), zv[ev.Cv][ev.name] = {
          icon: ev.icon,
          level: ev.level,
          displayName: null !== (Pv = ev.displayName) && void 0 !== Pv ? Pv : null,
          endTick: null !== (hv = ev.endTick) && void 0 !== hv ? hv : null,
          showInNametag: null === (Sv = ev.showInNametag) || void 0 === Sv || Sv
        }
      }
      return zv
    }

    function Nv(vv, zv) {
      const Pv = {};
      for (const Sv of Object.keys(vv)) {
        const ev = {};
        for (const Pv of Object.keys(vv[Sv])) {
          const hv = vv[Sv][Pv];
          null !== hv.endTick && hv.endTick < zv || (ev[Pv] = {
            ...hv,
            endTick: null === hv.endTick ? null : hv.endTick - zv
          })
        }(0, hv.oc)(ev) || (Pv[Sv] = ev)
      }
      return Pv
    }

    function lv(vv, zv, Pv) {
      if (null !== vv) return Math.max(0, 1e3 * (vv - zv) / Pv)
    }
    class Tv {
      constructor() {
        this.tracked = {}
      }
      clear() {
        this.tracked = {}
      }
      seedFromClient(vv, zv) {
        this.clear();
        const Pv = Date.now();
        for (const pv of vv.iterateEntityIds()) {
          const dv = vv.getEffects(pv);
          if ((0, hv.oc)(dv)) continue;
          const Nv = zv(pv);
          for (const vv of Object.keys(dv)) {
            var Sv, gv;
            const zv = dv[vv];
            this.upsert(Nv, vv, {
              icon: zv.icon,
              level: zv.level,
              displayName: ev(zv.displayName),
              showInNametag: null === (Sv = zv.showInNametag) || void 0 === Sv || Sv,
              endTime: void 0 !== zv.duration && null !== zv.duration ? (null !== (gv = zv.appliedAt) && void 0 !== gv ? gv : Pv) + zv.duration : null
            })
          }
        }
      }
      upsert(vv, zv, Pv) {
        this.tracked[vv] || (this.tracked[vv] = {}), this.tracked[vv][zv] = Pv
      }
      remove(vv, zv) {
        const Pv = this.tracked[vv];
        Pv && (delete Pv[zv], (0, hv.oc)(Pv) && delete this.tracked[vv])
      }
      handleUpdate(vv) {
        var zv;
        0 !== vv.duration ? this.upsert(vv.Cv, vv.name, {
          icon: vv.icon,
          level: vv.level,
          displayName: ev(vv.displayName),
          showInNametag: null === (zv = vv.showInNametag) || void 0 === zv || zv,
          endTime: void 0 !== vv.duration && null !== vv.duration ? Date.now() + vv.duration : null
        }) : this.remove(vv.Cv, vv.name)
      }
      handleRemove(vv, zv) {
        this.remove(vv, zv)
      }
      sample(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now();
        const Sv = {},
          ev = 1e3 / zv;
        for (const gv of Object.keys(this.tracked)) {
          const zv = this.tracked[gv],
            pv = {};
          for (const hv of Object.keys(zv)) {
            const Sv = zv[hv];
            let dv = null;
            if (null !== Sv.endTime) {
              const zv = Math.max(0, Sv.endTime - Pv);
              if (0 === zv) {
                this.remove(gv, hv);
                continue
              }
              dv = vv + Math.ceil(zv / ev)
            }
            pv[hv] = {
              icon: Sv.icon,
              level: Sv.level,
              displayName: Sv.displayName,
              endTick: dv,
              showInNametag: Sv.showInNametag
            }
          }(0, hv.oc)(pv) || (Sv[gv] = pv)
        }
        return Sv
      }
    }

    function Wv(vv, zv, Pv, hv) {
      vv.hasEntity(zv) ? vv.updateEffect(zv, Pv, hv) : function(vv, zv, Pv) {
        Sv.j.zC("EffectUpdate", {
          Cv: vv,
          name: zv,
          ...Pv
        }, !0)
      }(zv, Pv, hv)
    }

    function wv(vv, zv, Pv) {
      vv.hasEntity(zv) ? vv.removeEffect(zv, Pv) : function(vv, zv) {
        Sv.j.zC("RemoveEffect", {
          Cv: vv,
          name: zv
        }, !0)
      }(zv, Pv)
    }

    function av(vv, zv, Pv, hv, Sv, ev, gv) {
      for (const lv of Object.keys(Pv))
        for (const ev of Object.keys(Pv[lv])) {
          var pv;
          null !== (pv = zv[lv]) && void 0 !== pv && pv[ev] || (wv(vv, lv, ev), hv && lv === hv && String(Sv) !== String(lv) && wv(vv, Sv, ev))
        }
      for (const sv of Object.keys(zv))
        for (const pv of Object.keys(zv[sv])) {
          var dv, Nv;
          const Cv = zv[sv][pv],
            iv = lv(Cv.endTick, ev, gv);
          if (0 === iv) {
            wv(vv, sv, pv), hv && sv === hv && String(Sv) !== String(sv) && wv(vv, Sv, pv);
            continue
          }
          const cv = null === (dv = Pv[sv]) || void 0 === dv ? void 0 : dv[pv],
            Gv = cv && (av = Cv, (Tv = cv).icon === av.icon && Tv.level === av.level && Tv.displayName === av.displayName && Tv.endTick === av.endTick && Tv.showInNametag === av.showInNametag),
            mv = {
              icon: Cv.icon,
              level: Cv.level,
              displayName: null !== (Nv = Cv.displayName) && void 0 !== Nv ? Nv : void 0,
              duration: iv,
              showInNametag: Cv.showInNametag
            };
          Gv || Wv(vv, sv, pv, mv), hv && sv === hv && Wv(vv, Sv, pv, {
            ...mv,
            showInNametag: !1
          })
        }
      var Tv, av
    }
  },
  36467: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Nv,
      g: () => dv,
      k: () => Tv,
      n: () => gv,
      p: () => lv
    });
    var hv = Pv(36460),
      Sv = Pv(36473);
    const ev = {
      description: "Bloxd Replay",
      accept: {
        [hv.d]: hv.b
      }
    };

    function gv() {
      return "function" === typeof window.showOpenFilePicker && "function" === typeof window.showSaveFilePicker
    }

    function pv(vv) {
      return vv instanceof DOMException && "AbortError" === vv.name
    }
    async function dv() {
      try {
        const [vv] = await window.showOpenFilePicker({
          multiple: !1,
          types: [ev]
        }), zv = await vv.getFile();
        return {
          handle: vv,
          bytes: new Uint8Array(await zv.arrayBuffer())
        }
      } catch (vv) {
        if (pv(vv)) return null;
        throw vv
      }
    }
    async function Nv(vv) {
      if (vv && await async function(vv) {
          const zv = {
            mode: "readwrite"
          };
          return "granted" === await vv.queryPermission(zv) || "granted" === await vv.requestPermission(zv)
        }(vv)) return vv;
      try {
        return await window.showSaveFilePicker({
          suggestedName: (0, hv.g)(),
          types: [ev]
        })
      } catch (zv) {
        if (pv(zv)) return null;
        throw zv
      }
    }
    async function lv(vv, zv) {
      const Pv = await vv.createWritable();
      await Pv.write(new Blob([zv], {
        type: hv.d
      })), await Pv.close()
    }

    function Tv(vv) {
      return (0, hv.e)((0, Sv.h)(vv))
    }
  },
  35993: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Tv
    });
    var hv = Pv(22),
      Sv = Pv(73),
      ev = Pv(39),
      gv = Pv(688),
      pv = Pv(3201),
      dv = Pv(6377);
    const Nv = "shaderPackListingCheckedAt",
      lv = 36e5;

    function Tv() {
      const {
        canUseShaderPacks: vv
      } = Sv.featureFlags.settings;
      var zv, Tv;
      (0, pv.j)(vv) && !(0, pv.f)(vv) && (zv = ev.h.getItem(Nv), Tv = Date.now(), "number" !== typeof zv || Tv < zv || Tv - zv >= lv) && (0, gv.c)((() => {
        (async function() {
          if ("landingPage" !== hv.c.get("gameState")) return;
          const vv = await (0, dv.g)();
          if (void 0 === (null === vv || void 0 === vv ? void 0 : vv.listing)) return;
          ev.h.setItem(Nv, Date.now());
          const {
            followListingUpdates: zv
          } = await Promise.all([Pv.e(75), Pv.e(131), Pv.e(123)]).then((() => Pv(40586)));
          await zv(vv, vv.listing) || ev.h.removeItem(Nv)
        })().catch((vv => {
          console.error("Failed to check the shader pack listing for an update", vv)
        }))
      }))
    }
  },
  36027: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => dv
    });
    var hv = Pv(302),
      Sv = Pv(22),
      ev = Pv(36031),
      gv = Pv(1610),
      pv = Pv(1934);

    function dv(vv, zv) {
      var Pv, dv, Nv;
      if (!Sv.c.get("isKeydownEnabled") || vv.repeat) return;
      const lv = vv.code;
      "Escape" === vv.key ? (0, gv.h)(vv) : null !== (Pv = pv.z.OpenSettings) && void 0 !== Pv && Pv.includes(lv) ? (0, gv.u)(vv, hv.o.SETTINGS) : null !== (dv = pv.z.OpenCharacterCustomization) && void 0 !== dv && dv.includes(lv) ? (0, ev.b)() || (0, gv.u)(vv, hv.o.CUSTOMISATION, zv()) : null !== (Nv = pv.z.ShowDebugOverlay) && void 0 !== Nv && Nv.includes(lv) && Sv.c.set({
        showDebugOverlay: !Sv.c.get("showDebugOverlay")
      })
    }
  },
  35999: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Dv
    });
    var hv = Pv(626),
      Sv = Pv(1212),
      ev = Pv(144);
    const gv = "cf-";

    function pv(vv) {
      return `${gv}${vv}`
    }

    function dv(vv) {
      return vv.startsWith(pv("game-server-"))
    }

    function Nv(vv) {
      return /^game-server-[a-z0-9-]+\.bloxd\.io$/i.test(vv)
    }
    var lv = Pv(1230),
      Tv = Pv(1209),
      Wv = Pv(26),
      wv = Pv(1736),
      av = Pv(1758),
      sv = Pv(2747),
      Cv = Pv(1295),
      iv = Pv(1306),
      cv = Pv(1482),
      Gv = Pv(1184),
      mv = Pv(36003),
      jv = Pv(39),
      fv = Pv(108),
      Fv = Pv(1779);
    const Yv = "gameServerRoute";
    async function nv(vv) {
      if (!vv.ok) {
        const zv = await vv.text().catch((() => ""));
        return 403 === vv.status && "ipv6_unsupported" === zv ? "ipv6Refused" : "other"
      }
      const zv = await vv.json().catch((() => null));
      return "object" === typeof zv && null !== zv && Number.isFinite(zv.version) ? "ours" : "other"
    }
    const Ov = new class {
      constructor(vv) {
        this.deps = vv
      }
      hostFor(vv) {
        return this.deps.enabled && Nv(vv) && "cloudflare" === this.heldRoute() ? pv(vv) : vv
      }
      async afterJoinFailed(vv, zv) {
        if (!this.deps.enabled || void 0 === zv) return !1;
        const Pv = new URL(vv).hostname,
          hv = this.stored();
        if (dv(Pv)) return this.deps.yw("game_server_route", "cf_join_failed", 0), "cloudflare" !== (null === hv || void 0 === hv ? void 0 : hv.route) || hv.aliasFailedOnce || "ours" !== (await this.probeHost(Pv)).answer ? this.store({
          route: "direct",
          until: this.deps.now() + 36e5
        }) : this.store({
          ...hv,
          aliasFailedOnce: !0
        }), !1;
        if (!Nv(Pv) || "direct" === this.heldRoute()) return !1;
        const {
          outcome: Sv,
          cfMs: ev
        } = await this.check(Pv);
        return "blocked" !== Sv ? (this.deps.yw("game_server_route", Sv, ev), !1) : (this.store({
          route: "cloudflare",
          until: this.deps.now() + 1728e5
        }), this.deps.yw("game_server_route", "blocked", ev), !0)
      }
      afterJoined(vv) {
        if (!this.deps.enabled) return;
        const zv = new URL(vv).hostname,
          Pv = dv(zv);
        if (Pv) this.deps.yw("game_server_route", "cf_join", 0);
        else if (!Nv(zv) || this.deps.random() >= .01) return;
        const hv = Pv ? zv.slice(gv.length) : zv;
        this.deps.delay(2e4).then((async () => {
          await this.reportRtt(hv, "direct", "direct_failed"), await this.reportRtt(pv(hv), "cf", "cf_failed")
        }))
      }
      async check(vv) {
        const zv = this.probeHost(pv(vv));
        if ("none" !== (await this.probeHost(vv)).answer) return {
          outcome: "direct_reachable",
          cfMs: 0
        };
        const {
          answer: Pv,
          ms: hv
        } = await zv;
        return "ours" !== Pv && "ipv6Refused" !== Pv ? {
          outcome: "cf_unreachable",
          cfMs: 0
        } : "none" !== (await this.probeHost(vv)).answer ? {
          outcome: "direct_reachable",
          cfMs: hv
        } : {
          outcome: "ipv6Refused" === Pv ? "blocked_ipv6" : "blocked",
          cfMs: hv
        }
      }
      async reportRtt(vv, zv, Pv) {
        const hv = "ours" === (await this.probeHost(vv)).answer ? await this.probeHost(vv) : null;
        "ours" === (null === hv || void 0 === hv ? void 0 : hv.answer) ? this.deps.yw("game_server_rtt", zv, hv.ms): this.deps.yw("game_server_rtt", Pv, 0)
      }
      probeHost(vv) {
        return this.deps.probe(`https://${vv}/version`, 8e3)
      }
      stored() {
        return function(vv) {
          if ("object" !== typeof vv || null === vv) return null;
          const {
            arm: zv,
            route: Pv,
            until: hv,
            aliasFailedOnce: Sv
          } = vv;
          return "holdout" === zv || "cloudflare" !== Pv && "direct" !== Pv || "number" !== typeof hv ? null : !0 === Sv ? {
            route: Pv,
            until: hv,
            aliasFailedOnce: Sv
          } : {
            route: Pv,
            until: hv
          }
        }(this.deps.storage.getItem(Yv))
      }
      heldRoute() {
        const vv = this.stored();
        return null !== vv && vv.until > this.deps.now() ? vv.route : null
      }
      store(vv) {
        this.deps.storage.setItem(Yv, {
          ...vv,
          arm: "cloudflare"
        })
      }
    }({
      storage: jv.h,
      probe: async function(vv, zv) {
        const Pv = performance.now(),
          hv = await (0, Fv.o)(vv, {
            cache: "no-store"
          }, zv, (async vv => {
            const zv = Math.round(performance.now() - Pv);
            return {
              answer: await nv(vv),
              ms: zv
            }
          }));
        return null !== hv && void 0 !== hv ? hv : {
          answer: "none",
          ms: 0
        }
      },
      yw: wv.w,
      enabled: !(0, fv.b)(),
      now: Date.now,
      random: Math.random,
      delay: vv => new Promise((zv => {
        setTimeout(zv, vv)
      }))
    });

    function Dv(vv) {
      return async (zv, Pv, gv, pv, Nv) => {
        let Tv;
        if ((0, hv.N)(gv)) {
          if (Nv.aborted) return Kv();
          const vv = await Vv(zv, Pv, pv);
          if (Nv.aborted || sv.f.matchmakingEnded(vv.isError() ? null : performance.now()), vv.isError()) {
            const zv = vv.asError();
            return console.log("Join room did not succeed, reason:", zv.message), zv.forward()
          }
          Tv = vv.getValue()
        } else {
          sv.f.skipPlayWait();
          const vv = Uv(gv.replace("https://", "").replace("http://", ""));
          if (vv.isError()) return vv.asError().forward();
          Tv = {
            endpoint: vv.getValue(),
            gameNameWithVariation: Pv,
            lobbyName: zv instanceof Sv.e ? zv.getLobbyName() : zv
          }
        }
        if (Nv.aborted) return Kv();
        console.log(`Connecting to ${Tv.gameNameWithVariation} in lobby ${Tv.lobbyName} on game server ${Tv.endpoint}`), Wv.j.zC("matchmakeAndPlayStepCompleted", {
          step: ev.o.REQUEST_TO_MATCHMAKING,
          totalSubSteps: 1
        }), (0, wv.j)(), av.e.markGameLoadStart(), (0, iv.o)({
          websocketUrl: Tv.endpoint,
          gameNameWithVariation: Tv.gameNameWithVariation,
          lobbyName: Tv.lobbyName
        }), Wv.j.zC("loadingScreenState", "loadingPage:loadingGame");
        const cv = async () => {
          const vv = await async function(vv, zv, Pv, hv) {
            const Sv = await Vv(vv, zv, Pv);
            if (!Sv.isError() && !hv.aborted) {
              const {
                endpoint: vv,
                gameNameWithVariation: zv,
                lobbyName: Pv
              } = Sv.getValue();
              (0, iv.o)({
                websocketUrl: vv,
                gameNameWithVariation: zv,
                lobbyName: Pv
              })
            }
            return Sv
          }(zv, Pv, pv, Nv);
          return vv.isError() || (Tv = vv.getValue()), vv
        }, Gv = !(0, hv.N)(gv), mv = () => vv({
          place: Tv,
          userContext: pv,
          direct: Gv,
          rematch: cv
        }, Nv);
        let jv = await mv();
        const fv = jv.isError() && !0 === jv.asError().debugResult.rematch;
        if (jv.isError() && !Gv && !Nv.aborted && (fv || await Ov.afterJoinFailed(Tv.endpoint, jv.asError().debugResult.gameServerUnreachable))) {
          if (Nv.aborted) return Kv();
          console.log("Matchmaking again");
          const vv = await cv();
          if (vv.isError()) return vv.asError().forward();
          if (Nv.aborted) return Kv();
          jv = await mv(), !jv.isError() || fv && !dv(new URL(Tv.endpoint).hostname) || await Ov.afterJoinFailed(Tv.endpoint, jv.asError().debugResult.gameServerUnreachable)
        }
        return jv.isError() ? jv.asError().forward() : (Ov.afterJoined(Tv.endpoint), (0, Cv.R)(), window.gtag ? window.gtag("event", "conversion", {
          send_to: "AW-16469618203/ipUBCJKWoJUZEJvcqa09"
        }) : console.error("window.gtag not defined"), lv.e.value({
          gameNameWithVariation: Tv.gameNameWithVariation,
          lobbyName: Tv.lobbyName,
          addLobbyToRecentlyPlayed: !(zv instanceof Sv.e)
        }))
      }
    }

    function Kv() {
      return lv.e.errorWithCode("Left the game while it loaded", ev.o.REQUEST_TO_MATCHMAKING, {
        severity: "low",
        ev: !0
      })
    }
    async function Vv(vv, zv, Pv) {
      return (0, hv.N)(vv) || vv instanceof Sv.e || !(vv.length > Tv.U) ? await cv.e.matchmakePlayer(Pv, vv, zv, (0, mv.e)()).then((vv => {
        if (!1 === vv.succeeded) return lv.e.errorWithCode(vv.failReason, ev.o.REQUEST_TO_MATCHMAKING, {
          severity: "low"
        });
        const {
          gameServerHost: zv,
          lobbyName: Pv,
          gameNameWithVariation: hv
        } = vv, Sv = Uv(Ov.hostFor(zv));
        return Sv.isError() ? Sv.asError().forward() : lv.e.value({
          endpoint: Sv.getValue(),
          gameNameWithVariation: hv,
          lobbyName: Pv
        })
      })).catch((vv => (console.error("Bad response from the matchmaking server:", vv), lv.e.errorWithCode(vv.toString(), ev.o.REQUEST_TO_MATCHMAKING, {
        error: vv,
        severity: "medium"
      })))) : (console.error("Invalid lobby ID:", vv), lv.e.errorWithCode("This lobby link's name is too long. Ask for a new link.", ev.o.REQUEST_TO_MATCHMAKING, {
        severity: "low"
      }))
    }

    function Uv(vv) {
      const zv = Gv.clientSideServerUrls.getServerWebSocketUrlFromServerUrl(vv);
      return zv.isError() ? lv.e.errorWithCode(zv.asError().message, ev.o.CONNECT_TO_GAME_SERVER, {
        severity: "medium"
      }) : lv.e.value(zv.getValue())
    }
    setTimeout((() => {
      window.initialD ? Date.now = window.initialD : console.error("window.initialD not defined")
    }), 3e3), window.leaveGame = () => {
      (0, iv.i)("/")
    }
  },
  8898: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => wv,
      f: () => Wv
    });
    var hv = Pv(22),
      Sv = Pv(1657),
      ev = Pv(39),
      gv = Pv(1336),
      pv = Pv(3417),
      dv = Pv(1465),
      Nv = Pv(1374);
    const lv = 2592e5,
      Tv = "notificationOptInLastPromptedAt";
    async function Wv() {
      var vv;
      const zv = await wv();
      if (null === zv) return;
      const Pv = null !== (vv = ev.h.getItem(Tv)) && void 0 !== vv ? vv : 0;
      if (Date.now() - Pv < lv) return;
      if ((0, Nv.d)()) return;
      const hv = await gv.NotificationProvider.showPromptPopup({
        icon: "bell",
        title: "mobilePushNotifications:optInTitle",
        subtitle: Sv.d.supports("notifications") ? "mobilePushNotifications:optInSubtitle" : "mobilePushNotifications:optInSubtitleBrowser",
        confirmText: "mobilePushNotifications:optInConfirm",
        cancelText: "mobilePushNotifications:optInCancel",
        padStartsOn: "cancel"
      }).getResult();
      "notificationTornDown" !== hv && (ev.h.setItem(Tv, Date.now()), (0, dv.reportAnalyticsClick)({
        id: !0 === hv ? "push.allow" : "push.deny",
        value: Sv.d.supports("notifications") ? "app" : "browser"
      }), !0 === hv && zv().catch((vv => {
        console.error("Failed to ask for push notifications:", vv)
      })))
    }
    async function wv() {
      return await Sv.d.ready, Sv.d.supports("notifications") ? hv.c.get("mobilePushNotificationsCanAsk") ? async () => {
        Sv.d.request("notifications.requestPermission", {}).then((vv => {
          let {
            canAsk: zv
          } = vv;
          hv.c.set({
            mobilePushNotificationsCanAsk: zv
          })
        }), (vv => {
          console.error("The app couldn't ask for push notifications:", vv)
        }))
      }: null: await pv.b.canAsk() ? () => pv.b.requestPermission() : null
    }
  },
  36010: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Wv,
      g: () => lv,
      k: () => wv,
      m: () => Tv
    });
    var hv = Pv(312),
      Sv = Pv(646),
      ev = Pv(656),
      gv = Pv(39);
    const pv = {
        idStorageKey: "playSessionId",
        lastActivityStorageKey: "playSessionLastActivityMs",
        expiryMs: 3e5
      },
      dv = "playSessionGameNameWithVariation",
      Nv = "wasMatchmakePlayer";

    function lv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      (0, ev.i)(vv, pv)
    }

    function Tv() {
      (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).setItem(Nv, !0)
    }

    function Wv() {
      let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l;
      return (0, ev.d)(vv, pv)
    }

    function wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gv.l;
      const Pv = (0, ev.d)(zv, pv),
        lv = function(vv) {
          const zv = vv.getItem(dv);
          return "string" !== typeof zv ? null : zv
        }(zv),
        Tv = function() {
          return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).getItem(Nv)
        }(zv);
      let Wv;
      return Wv = null !== Pv && null !== lv && (0, ev.g)(zv, pv) && function(vv, zv, Pv) {
          const Sv = (0, hv.Pb)(vv),
            ev = (0, hv.Pb)(zv),
            gv = (0, hv.Kb)(vv),
            pv = (0, hv.Kb)(zv);
          return !(Sv !== ev || !Pv) || Sv === ev && gv === pv
        }(lv, vv, Tv) ? Pv : (0, Sv.d)(), (0, ev.j)(zv, pv, Wv), zv.setItem(dv, vv),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gv.l).removeItem(Nv)
        }(zv), Wv
    }
  },
  36003: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => cv,
      i: () => Gv
    });
    var hv = Pv(1002),
      Sv = Pv(628),
      ev = Pv(312),
      gv = Pv(1006),
      pv = Pv(635),
      dv = Pv(668),
      Nv = Pv(4279),
      lv = Pv(73),
      Tv = Pv(108),
      Wv = Pv(1692),
      wv = Pv(86),
      av = Pv(36010),
      sv = Pv(39),
      Cv = Pv(650),
      iv = Pv(36016);

    function cv() {
      var vv, zv;
      return [...null !== (vv = navigator.languages) && void 0 !== vv ? vv : [null !== (zv = navigator.language) && void 0 !== zv ? zv : "none"], "en-gb"]
    }

    function Gv(vv, zv, Pv, Gv, mv) {
      const jv = (0, hv.l)(zv) ? (0, hv.q)(zv) : null,
        fv = {
          cookies: (0, Wv.getAllCookiesForGameNameWithVariation)(zv),
          isMobile: (0, lv.isMobile)(),
          isUsingCustomGameTexturePack: null !== jv && mv(jv),
          generalCookies: {
            joinDiscord: !!sv.h.getItem("DiscordPressed"),
            newGo: Nv.c,
            ...vv.getMetricsCookies(),
            trafficCode: Gv,
            compliance: lv.compliance
          },
          browserInfo: {
            ua: window.navigator.userAgent,
            name: (0, lv.getBrowserName)(),
            version: (0, lv.getBrowserVersion)(),
            platform: navigator.platform,
            platformType: (0, lv.getPlatformType)(),
            deviceType: (0, wv.b)()
          },
          isLoggedIn: vv.isLoggedIn(),
          lobbyName: Pv,
          languages: cv(),
          version: Sv.c,
          siteUsed: Tv.o,
          subsiteUsed: Tv.v,
          playSessionId: (0, av.k)(zv),
          visitSessionId: (0, Cv.d)(),
          clientReason: pv.m.reason,
          budgetBasis: (0, iv.e)(),
          ...null !== dv.s && {
            diagClaim: dv.s.claimId
          }
        };
      return null !== jv && (0, ev.uc)(jv) ? (fv.lobbyName = (0, hv.k)(jv, (0, hv.m)(zv), Pv), {
        roomName: `classic_${gv.f}`,
        joinOptions: fv
      }) : {
        roomName: zv,
        joinOptions: fv
      }
    }
  },
  36118: (vv, zv, Pv) => {
    function hv(vv, zv) {
      for (let Pv = 0; Pv < vv.length; Pv++)
        if (vv[Pv].identifier === zv) return vv[Pv];
      return null
    }

    function Sv(vv, zv) {
      return null !== hv(vv, zv)
    }
    Pv.d(zv, {
      b: () => hv,
      f: () => Sv
    })
  },
  36387: (vv, zv, Pv) => {
    Pv.d(zv, {
      B: () => Iv,
      F: () => Qv,
      J: () => tv,
      L: () => Zv,
      d: () => dv,
      f: () => Kv,
      h: () => pv,
      j: () => xv,
      m: () => Ov,
      p: () => fv,
      q: () => Rv,
      t: () => Uv,
      x: () => nv,
      z: () => qv
    });
    var hv = Pv(39);
    const Sv = {
        codeBlock: ["codeBlockIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "worldCodeButton", "exportButton", "helpButton"],
        worldCode: ["worldCodeIntro", "docsButton", "hideDocsButton", "aiHelperButton", "hideAiHelperButton", "exportButton", "helpButton"]
      },
      ev = ["docsButton", "docsPanel", "docsClientOptionsTab", "docsClientOptions", "docsApiReferenceTab", "docsApiReference", "docsCallbacksTab", "docsCallbacks", "hideDocsButton"],
      gv = ["aiHelperButton", "aiPanel", "aiAskBox", "aiModelChip", "aiAnswer", "aiEdits", "aiGear", "aiNotes", "aiGameSettings", "hideAiHelperButton"],
      pv = ev.filter((vv => "docsButton" !== vv)),
      dv = gv.filter((vv => "aiHelperButton" !== vv)),
      Nv = "codeEditorTutorials",
      lv = {
        codeBlockIntro: "codeBlockIntroShown",
        worldCodeIntro: "worldCodeIntroShown"
      },
      Tv = {
        welcome: "welcomeComplete",
        docsOverview: "docsOverviewComplete",
        aiHelperOverview: "aiHelperOverviewComplete"
      };
    let Wv = null,
      wv = null;
    const av = new Set,
      sv = new Set;
    let Cv = null;
    const iv = new Set,
      cv = new Set;

    function Gv() {
      cv.forEach((vv => {
        vv()
      }))
    }

    function mv() {
      if (!Wv) {
        const vv = hv.h.getItem(Nv);
        Wv = {
          codeBlockIntroShown: !1,
          worldCodeIntroShown: !1,
          welcomeComplete: !1,
          docsOverviewComplete: !1,
          aiHelperOverviewComplete: !1,
          ..."object" === typeof vv && null !== vv ? vv : {}
        }
      }
      return Wv
    }

    function jv(vv) {
      const zv = mv();
      zv[vv] || (Wv = {
        ...zv,
        [vv]: !0
      }, hv.h.setItem(Nv, Wv))
    }

    function fv(vv) {
      return "docsOverview" === vv ? ev : "aiHelperOverview" === vv ? gv : wv ? Sv[wv] : []
    }

    function Fv(vv) {
      return ("worldCodeButton" !== vv || !mv().worldCodeIntroShown) && !iv.has(vv)
    }

    function Yv(vv) {
      var zv;
      return (null === (zv = Cv) || void 0 === zv ? void 0 : zv.name) === vv ? Cv.stepsDone : av
    }

    function nv(vv, zv) {
      if (! function(vv) {
          return Cv ? Cv.name === vv : "welcome" === vv
        }(vv) || !Fv(zv) || Yv(vv).has(zv)) return !1;
      if (Cv) return !0;
      const Pv = lv[zv];
      return Pv ? !mv()[Pv] || sv.has(zv) : !mv()[Tv[vv]]
    }

    function Ov(vv) {
      var zv;
      return null !== (zv = fv(vv).find((zv => nv(vv, zv)))) && void 0 !== zv ? zv : null
    }

    function Dv(vv) {
      var zv;
      jv(Tv[vv]), (null === (zv = Cv) || void 0 === zv ? void 0 : zv.name) === vv && (Cv = null)
    }

    function Kv(vv) {
      const zv = (Cv ? [Cv.name] : ["welcome", "docsOverview"]).find((zv => Ov(zv) === vv));
      if (!zv) return;
      Yv(zv).add(vv);
      const Pv = lv[vv];
      Pv && (jv(Pv), Cv || sv.add(vv)), null === Ov(zv) && Dv(zv), Gv()
    }

    function Vv(vv, zv) {
      const Pv = fv(vv),
        hv = Yv(vv);
      for (let Sv = Pv.indexOf(zv) - 1; Sv >= 0; Sv--)
        if (hv.has(Pv[Sv]) && Fv(Pv[Sv])) return Pv[Sv];
      return null
    }

    function Uv(vv, zv) {
      return null !== Vv(vv, zv)
    }

    function Rv(vv, zv) {
      const Pv = Vv(vv, zv);
      Pv && (Yv(vv).delete(Pv), Gv())
    }

    function xv(vv) {
      Dv(vv), "welcome" === vv && fv("welcome").forEach((vv => {
        const zv = lv[vv];
        zv && jv(zv)
      })), Gv()
    }

    function tv(vv) {
      Cv = {
        name: vv,
        stepsDone: new Set
      }, Gv()
    }

    function qv() {
      (Cv || 0 !== av.size || 0 !== sv.size) && (Cv = null, av.clear(), sv.clear(), Gv())
    }

    function Iv(vv, zv) {
      const Pv = zv ? vv : wv === vv ? null : wv;
      Pv !== wv && (wv = Pv, Gv())
    }

    function Qv(vv, zv) {
      iv.has(vv) === zv && (zv ? iv.delete(vv) : iv.add(vv), Gv())
    }

    function Zv(vv) {
      return cv.add(vv), () => {
        cv.delete(vv)
      }
    }
  },
  35849: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => hv,
      e: () => Sv,
      f: () => ev,
      g: () => gv
    });
    const hv = 1024,
      Sv = 1024 * hv;

    function ev(vv) {
      return 2 ** Math.floor(Math.log2(Math.max(1, vv / Sv)))
    }

    function gv(vv) {
      return (vv / Sv).toFixed(1)
    }
  },
  36024: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      i: () => pv,
      k: () => gv,
      m: () => dv,
      o: () => Nv,
      q: () => lv
    });
    var hv = Pv(185);
    const Sv = 32 * Pv(35849).e,
      ev = 6144,
      gv = 4608,
      pv = 512;

    function dv(vv) {
      return Math.floor(Sv * vv / ev)
    }

    function Nv(vv) {
      const zv = vv - Math.floor(vv / 6);
      let Pv = hv.f.maxChunkHorizAddDistance,
        Sv = hv.f.maxChunkVertAddDistance;
      if (lv(Pv + 1, Sv + 1) <= zv) return null;
      for (; lv(Pv + 1, Sv + 1) > zv && (Pv > 0 || Sv > 0);) Pv > Sv ? Pv-- : Sv--;
      return {
        horizontal: Pv,
        vertical: Sv
      }
    }

    function lv(vv, zv) {
      const Pv = Math.max(vv, zv);
      let hv = 0;
      for (let Sv = -Pv; Sv <= Pv; Sv++)
        for (let ev = -Pv; ev <= Pv; ev++)
          for (let gv = -Pv; gv <= Pv; gv++) Tv(vv, zv, Sv, ev, gv) && hv++;
      return hv
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      const ev = Pv * Pv + Sv * Sv;
      return vv === zv ? ev + hv * hv <= vv * vv : vv > zv ? Math.abs(hv) <= zv && ev + hv * hv <= vv * vv : ev <= vv * vv && ev + hv * hv <= zv * zv
    }
  },
  36016: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => fv,
      e: () => jv,
      h: () => mv
    });
    var hv = Pv(185),
      Sv = Pv(73),
      ev = Pv(2693),
      gv = Pv(4156),
      pv = Pv(644),
      dv = Pv(36024);
    const Nv = 1048576,
      lv = 1024 * Nv,
      Tv = 400 * Nv,
      Wv = 147456,
      wv = .5,
      av = 1.5 * lv,
      sv = 768 * Nv;

    function Cv(vv) {
      return Tv + vv * Wv
    }

    function iv(vv, zv, Pv) {
      var Sv, gv;
      let {
        footprintBytes: pv,
        basis: Nv,
        namesLimit: iv
      } = function(vv) {
        const {
          os: zv,
          deviceMemory: Pv
        } = vv;
        if ("ios" === zv) switch ((0, ev.e)(vv)) {
          case "ipad_m":
            return {
              footprintBytes: Cv(dv.e), basis: "ipad-m", namesLimit: !1
            };
          case "ipad":
            return {
              footprintBytes: sv, basis: "ipad", namesLimit: !0
            };
          case "iphone_6gb":
            return {
              footprintBytes: av, basis: "iphone-6gb", namesLimit: !0
            };
          case "iphone":
            return {
              footprintBytes: sv, basis: "iphone", namesLimit: !0
            }
        }
        return "number" === typeof Pv && Number.isFinite(Pv) && Pv > 0 ? {
          footprintBytes: Pv * lv * wv,
          basis: `memory-${Pv}`,
          namesLimit: !0
        } : "android" === zv ? {
          footprintBytes: sv,
          basis: "android",
          namesLimit: !0
        } : {
          footprintBytes: Cv(dv.k),
          basis: "unreported",
          namesLimit: !1
        }
      }(vv);
      if (Pv) {
        const vv = Math.min(pv, Cv(dv.e));
        pv = Tv + Math.max(0, vv - Tv) / 2, Nv += "+killed", iv = !0
      }
      null !== zv && Cv(zv) < pv && (pv = Cv(zv), Nv += "+learned", iv = !0);
      const cv = function(vv) {
          const zv = Math.floor((vv - Tv) / Wv);
          return Math.min(dv.e, Math.max(dv.i, zv))
        }(pv),
        Gv = (0, dv.o)(cv);
      return {
        footprintBytes: pv,
        shedFootprintBytes: iv ? Math.max(pv, Cv(cv)) : null,
        chunkCap: cv,
        maxHorizDistance: null !== (Sv = null === Gv || void 0 === Gv ? void 0 : Gv.horizontal) && void 0 !== Sv ? Sv : hv.f.maxChunkHorizAddDistance,
        maxVertDistance: null !== (gv = null === Gv || void 0 === Gv ? void 0 : Gv.vertical) && void 0 !== gv ? gv : hv.f.maxChunkVertAddDistance,
        basis: Nv
      }
    }
    let cv = null;

    function Gv() {
      return iv({
        os: (0, Sv.getOperatingSystem)(),
        deviceMemory: navigator.deviceMemory,
        ...(0, ev.f)()
      }, (0, gv.g)(), (0, pv.G)("wasm").length > 0)
    }

    function mv() {
      return cv ??= Gv(), cv
    }

    function jv() {
      var vv;
      return (null !== (vv = cv) && void 0 !== vv ? vv : Gv()).basis
    }

    function fv(vv, zv) {
      return vv.setChunkCap(zv.chunkCap)
    }
  },
  36126: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      e: () => Wv,
      g: () => iv,
      k: () => Nv
    });
    var hv = Pv(22),
      Sv = Pv(2304),
      ev = Pv(2306),
      gv = Pv(2312),
      pv = Pv(2366),
      dv = Pv(26);

    function Nv(vv, zv) {
      return (!(0, gv.e)() || 0 === vv && 0 === zv) && (0, ev.x)(Sv.f.Joystick, 0, vv, zv, 0)
    }
    const lv = {
      Action1: 1,
      Action2: 2,
      Action3: 3,
      Attack: 4,
      Use: 5,
      Interact: 6,
      Boost: 7
    };

    function Tv(vv) {
      return vv.classList.contains("TouchKeyHit") && wv() ? null : vv.firstElementChild
    }

    function Wv(vv) {
      return vv.classList.contains("TouchKeyHit") && !vv.classList.contains("CanvasZone") ? {
        whole: !wv(),
        keyBox: null
      } : {
        whole: !1,
        keyBox: av(Tv(vv))
      }
    }

    function wv() {
      return document.documentElement.classList.contains(pv.o)
    }

    function av(vv) {
      return !(vv instanceof HTMLElement) || vv.offsetWidth <= 0 || vv.offsetHeight <= 0 ? null : {
        width: vv.offsetWidth,
        height: vv.offsetHeight
      }
    }

    function sv(vv, zv) {
      const Pv = vv => Math.min(65535, Math.round(4 * vv));
      return (Pv(vv) | Pv(zv) << 16) >>> 0
    }

    function Cv(vv) {
      return {
        x: vv.left + vv.width / 2,
        y: vv.top + vv.height / 2,
        radius: Math.min(vv.width, vv.height) / 2
      }
    }
    const iv = new class {
      constructor(vv) {
        this.write = vv, this.elements = new Map, this.canvasLeft = 0, this.canvasTop = 0
      }
      set(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        zv ? this.elements.set(vv, {
          element: zv,
          hidden: Pv
        }) : this.elements.delete(vv), this.measureOne(vv)
      }
      measure() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          left: this.canvasLeft,
          top: this.canvasTop
        };
        this.canvasLeft = vv.left, this.canvasTop = vv.top;
        for (const zv of this.elements.keys()) this.measureOne(zv)
      }
      hitZone(vv, zv) {
        let Pv = null,
          hv = 1;
        for (const Sv of this.elements.keys()) {
          const ev = this.shown(Sv);
          if (!ev) continue;
          const {
            rect: gv,
            element: pv
          } = ev, dv = Cv(gv), Nv = Math.max(0, gv.width / 2 - dv.radius), lv = Math.max(0, gv.height / 2 - dv.radius), Wv = Math.max(0, Math.abs(vv - dv.x) - Nv), wv = Math.max(0, Math.abs(zv - dv.y) - lv), sv = pv.firstElementChild;
          let iv = Math.hypot(Wv, wv) / dv.radius;
          const cv = av(Tv(pv));
          cv && (iv = Math.min(iv, Math.max(2 * Math.abs(vv - dv.x) / cv.width, 2 * Math.abs(zv - dv.y) / cv.height))), iv < hv && (Pv = {
            code: Sv,
            element: pv,
            key: sv,
            ...dv
          }, hv = iv)
        }
        return Pv
      }
      measureOne(vv) {
        const zv = this.shown(vv);
        if (!zv) return void this.write(Sv.f.TouchZone, vv, 0, 0, 0);
        const {
          rect: Pv,
          element: hv
        } = zv, ev = Cv(Pv);
        this.write(Sv.f.TouchZone, vv, ev.x - this.canvasLeft, ev.y - this.canvasTop, sv(Pv.width, Pv.height));
        const gv = av(Tv(hv));
        this.write(Sv.f.TouchZone, 256 | vv, 0, 0, gv ? sv(gv.width, gv.height) : 0)
      }
      shown(vv) {
        const zv = this.elements.get(vv),
          Pv = hv.c.get("worldPanelHud");
        if (!zv || zv.hidden || "none" === Pv) return null;
        const Sv = zv.element.getBoundingClientRect();
        return Sv.width <= 0 || Sv.height <= 0 ? null : {
          rect: Sv,
          element: zv.element
        }
      }
    }(ev.x);
    (0, dv.l)(pv.h, (() => {
      iv.measure()
    }))
  },
  36360: (vv, zv, Pv) => {
    function hv(vv) {
      return "fetch" === vv || "timeout" === vv || "integrity" === vv ? "download" : "browser"
    }
    Pv.d(zv, {
      d: () => Sv,
      g: () => gv,
      j: () => dv,
      k: () => pv,
      n: () => hv,
      p: () => ev
    });
    const Sv = "https://discord.gg/playbloxd";

    function ev(vv) {
      return "download" === vv ? {
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

    function gv(vv, zv) {
      return {
        icon: "face-dizzy",
        title: "wasmScreens:crashTitle",
        help: zv ? "wasmScreens:crashHelp" : "wasmScreens:crashHelpNoDiscord",
        helpValues: {
          code: vv.code
        },
        discordLink: zv,
        confirm: "general:reload",
        cancel: "general:back"
      }
    }

    function pv() {
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

    function dv(vv, zv, Pv) {
      return {
        icon: "wifi",
        title: "wasmScreens:disconnectedTitle",
        help: Pv ? "wasmScreens:reconnectingHelp" : "wasmScreens:disconnectedHelp",
        helpValues: {
          reason: vv.reason
        },
        discordLink: null === vv.name,
        confirm: zv ? "general:reconnect" : vv.requiresRefresh ? "general:reload" : "general:ok",
        cancel: null
      }
    }
  },
  36395: (vv, zv, Pv) => {
    function hv(vv, zv) {
      return null === vv || null === zv ? vv === zv : vv[0] === zv[0] && vv[1] === zv[1] && vv[2] === zv[2]
    }

    function Sv(vv) {
      return [vv[0] + .5, vv[1] + .5, vv[2] + .5]
    }
    Pv.d(zv, {
      b: () => Sv,
      d: () => hv
    })
  },
  36362: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => dv,
      e: () => pv
    });
    const hv = {
        files: {
          "debugLog.ts": "export function debugLog(message: string): void {\n\tconsole.log(`[debug] ${message}`)\n}\n",
          "index.ts": 'import type { PlayerId } from "@bloxd"\nimport { debugLog } from "./debugLog"\n\nonPlayerJoin = (player: PlayerId) => {\n\tapi.log(`Player ${player} joined - Love from Debug Plugin!`)\n}\n\nexport { debugLog }\n'
        },
        dependencies: [],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  debugLog: () => debugLog\n});\nmodule.exports = __toCommonJS(index_exports);\n\n// world-code-plugin:debugLog.ts\nfunction debugLog(message) {\n  console.log(`[debug] ${message}`);\n}\n\n// world-code-plugin:index.ts\nonPlayerJoin = (player) => {\n  api.log(`Player ${player} joined - Love from Debug Plugin!`);\n};\n',
        types: "declare function debugLog(message: string): void;\n\nexport { debugLog };\n"
      },
      Sv = {
        files: {
          "index.ts": 'import type { CustomTextStyling, DialogueText, PlayerId, SpeechVoice } from "@bloxd"\nimport { clearTimeout, setTimeout, TimeoutId } from "@plugins/helpers"\n\n/** Long enough to read most lines once they have appeared. */\nconst DEFAULT_DURATION_MS = 6000\n\nexport type DialogueOpts = {\n\t/** Shown above the line, such as a name. */\n\tspeakerName?: string | CustomTextStyling\n\t/** A preset such as "regular" or "gruff", or every synth parameter. Omit for a silent line. */\n\tvoice?: SpeechVoice\n\t/** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n\tdurationMs?: number\n}\n\nconst hideTimeouts: Record<PlayerId, TimeoutId> = {}\n\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item\'s icon inline\n * @param opts - The speaker\'s name, the voice that reads it out, and how long it stays up\n */\nexport function sayDialogue(playerId: PlayerId, text: DialogueText, opts: DialogueOpts = {}) {\n\tif (hideTimeouts[playerId] !== undefined) {\n\t\tclearTimeout(hideTimeouts[playerId])\n\t\t// Cleared first, so a line said again replays rather than matching the value already set\n\t\tapi.setClientOption(playerId, "dialogue", null)\n\t}\n\tapi.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice })\n\thideTimeouts[playerId] = setTimeout(\n\t\t() => {\n\t\t\tclearDialogue(playerId)\n\t\t},\n\t\topts.durationMs ?? DEFAULT_DURATION_MS,\n\t\tplayerId,\n\t)\n}\n\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\nexport function clearDialogue(playerId: PlayerId) {\n\tif (hideTimeouts[playerId] === undefined) {\n\t\treturn\n\t}\n\tclearTimeout(hideTimeouts[playerId])\n\tdelete hideTimeouts[playerId]\n\tapi.setClientOption(playerId, "dialogue", null)\n}\n\nonPlayerLeave = (playerId: PlayerId) => {\n\tdelete hideTimeouts[playerId]\n}\n'
        },
        dependencies: ["helpers"],
        bundledSource: 'var __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === "object" || typeof from === "function") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\n\n// world-code-plugin:index.ts\nvar index_exports = {};\n__export(index_exports, {\n  clearDialogue: () => clearDialogue,\n  sayDialogue: () => sayDialogue\n});\nmodule.exports = __toCommonJS(index_exports);\nvar import_helpers = require("@plugins/helpers");\nvar DEFAULT_DURATION_MS = 6e3;\nvar hideTimeouts = {};\nfunction sayDialogue(playerId, text, opts = {}) {\n  if (hideTimeouts[playerId] !== void 0) {\n    (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n    api.setClientOption(playerId, "dialogue", null);\n  }\n  api.setClientOption(playerId, "dialogue", { line: text, speakerName: opts.speakerName, voice: opts.voice });\n  hideTimeouts[playerId] = (0, import_helpers.setTimeout)(\n    () => {\n      clearDialogue(playerId);\n    },\n    opts.durationMs ?? DEFAULT_DURATION_MS,\n    playerId\n  );\n}\nfunction clearDialogue(playerId) {\n  if (hideTimeouts[playerId] === void 0) {\n    return;\n  }\n  (0, import_helpers.clearTimeout)(hideTimeouts[playerId]);\n  delete hideTimeouts[playerId];\n  api.setClientOption(playerId, "dialogue", null);\n}\nonPlayerLeave = (playerId) => {\n  delete hideTimeouts[playerId];\n};\n',
        types: "import { CustomTextStyling, SpeechVoice, PlayerId, DialogueText } from '@bloxd';\n\ntype DialogueOpts = {\n    /** Shown above the line, such as a name. */\n    speakerName?: string | CustomTextStyling;\n    /** A preset such as \"regular\" or \"gruff\", or every synth parameter. Omit for a silent line. */\n    voice?: SpeechVoice;\n    /** How long the line stays up, counted from when it starts to appear. Defaults to 6 seconds. */\n    durationMs?: number;\n};\n/**\n * Shows a player a line of dialogue below the crosshair for a while. A new line replaces the one already up.\n * @param playerId - The player to show the line to\n * @param text - The line. `[[Item Name]]` shows the item's icon inline\n * @param opts - The speaker's name, the voice that reads it out, and how long it stays up\n */\ndeclare function sayDialogue(playerId: PlayerId, text: DialogueText, opts?: DialogueOpts): void;\n/**\n * Hides the line of dialogue a player is shown.\n * @param playerId - The player shown the line\n */\ndeclare function clearDialogue(playerId: PlayerId): void;\n\nexport { clearDialogue, sayDialogue };\nexport type { DialogueOpts };\n"
      },
      ev = {
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
      gv = {
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
      pv = {
        debug: {
          name: "debug",
          specifier: "@plugins/debug",
          sourceVfsPath: "/node_modules/@plugins/debug/index.ts",
          typesVfsPath: "/node_modules/@plugins/debug/index.d.ts",
          files: hv.files,
          dependencies: hv.dependencies,
          bundledSource: hv.bundledSource,
          types: hv.types
        },
        dialogue: {
          name: "dialogue",
          specifier: "@plugins/dialogue",
          sourceVfsPath: "/node_modules/@plugins/dialogue/index.ts",
          typesVfsPath: "/node_modules/@plugins/dialogue/index.d.ts",
          files: Sv.files,
          dependencies: Sv.dependencies,
          bundledSource: Sv.bundledSource,
          types: Sv.types
        },
        helpers: {
          name: "helpers",
          specifier: "@plugins/helpers",
          sourceVfsPath: "/node_modules/@plugins/helpers/index.ts",
          typesVfsPath: "/node_modules/@plugins/helpers/index.d.ts",
          files: ev.files,
          dependencies: ev.dependencies,
          bundledSource: ev.bundledSource,
          types: ev.types
        },
        sessionBasedGame: {
          name: "sessionBasedGame",
          specifier: "@plugins/sessionBasedGame",
          sourceVfsPath: "/node_modules/@plugins/sessionBasedGame/index.ts",
          typesVfsPath: "/node_modules/@plugins/sessionBasedGame/index.d.ts",
          files: gv.files,
          dependencies: gv.dependencies,
          bundledSource: gv.bundledSource,
          types: gv.types
        }
      };

    function dv(vv) {
      const zv = [],
        Pv = new Set,
        hv = vv => {
          if (Pv.has(vv)) return;
          const Sv = pv[vv];
          if (Sv) {
            Pv.add(vv);
            for (const vv of Sv.dependencies) hv(vv);
            zv.push(vv)
          }
        };
      for (const Sv of vv) hv(Sv);
      return zv
    }
  },
  36369: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => dv,
      d: () => pv,
      e: () => gv,
      g: () => ev,
      k: () => Nv,
      l: () => lv,
      o: () => av,
      q: () => wv,
      t: () => Wv
    });
    var hv = Pv(1226);
    const Sv = ["quickjs", "ses"];

    function ev(vv) {
      return Sv.includes(vv)
    }

    function gv(vv) {
      return vv === hv.i || vv === hv.k
    }

    function pv(vv, zv) {
      return vv === hv.i && zv === hv.k || vv === hv.k && zv === hv.i
    }

    function dv(vv) {
      const zv = hv.k in vv,
        Pv = hv.i in vv;
      return zv && Pv ? null : zv ? hv.k : Pv ? hv.i : null
    }

    function Nv(vv, zv, Pv) {
      const hv = `${zv}/`;
      return vv.filter((vv => vv.startsWith(hv))).map((vv => [vv, `${Pv}/${vv.slice(hv.length)}`]))
    }

    function lv(vv, zv) {
      let Pv = 0;
      for (const [hv, Sv] of Object.entries(vv)) hv !== zv && (Pv += Sv.length);
      return Pv
    }
    const Tv = "@plugins/";

    function Wv(vv) {
      return `${Tv}${vv}`
    }

    function wv(vv, zv) {
      return `/node_modules/@plugins/${vv}/${zv}`
    }

    function av(vv) {
      if (!vv.startsWith(Tv)) return null;
      const zv = vv.slice(Tv.length);
      return function(vv) {
        return /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(vv)
      }(zv) ? zv : null
    }
  },
  36374: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => pv,
      d: () => Sv,
      h: () => gv,
      j: () => dv,
      m: () => ev
    });
    var hv = Pv(36372);
    const Sv = 5,
      ev = "[SCHEMATIC]",
      gv = 1024e4;

    function pv(vv) {
      return vv.endsWith(".bloxdschem") && (0, hv.r)(vv.slice(0, -11) + ".ts") && vv.length <= 64
    }

    function dv(vv) {
      return Object.fromEntries(Object.keys(vv).map((vv => [vv, ev])))
    }
  },
  36372: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv,
      c: () => ev,
      d: () => Wv,
      g: () => pv,
      j: () => dv,
      n: () => Nv,
      r: () => Tv,
      s: () => lv,
      v: () => gv
    });
    var hv = Pv(1226);
    let Sv = function(vv) {
        return vv[vv.Join = 0] = "Join", vv[vv.Leave = 1] = "Leave", vv[vv.Push = 2] = "Push", vv[vv.Cursor = 3] = "Cursor", vv[vv.Submit = 4] = "Submit", vv[vv.ReloadAsVariation = 5] = "ReloadAsVariation", vv[vv.CreateFile = 6] = "CreateFile", vv[vv.RenameFile = 7] = "RenameFile", vv[vv.DeleteFile = 8] = "DeleteFile", vv[vv.SetEngine = 9] = "SetEngine", vv[vv.RenameFolder = 10] = "RenameFolder", vv
      }({}),
      ev = function(vv) {
        return vv[vv.Joined = 0] = "Joined", vv[vv.Updates = 1] = "Updates", vv[vv.Presence = 2] = "Presence", vv[vv.RemoteCursor = 3] = "RemoteCursor", vv[vv.ForceClose = 4] = "ForceClose", vv[vv.LobbyFilesChanged = 5] = "LobbyFilesChanged", vv[vv.EngineSettings = 6] = "EngineSettings", vv
      }({});

    function gv(vv) {
      return "lobby" === vv.kind ? `lobby:${vv.path}` : `codeBlock:${vv.pos[0]},${vv.pos[1]},${vv.pos[2]}`
    }

    function pv(vv) {
      if ("lobby" === vv) return {
        kind: "lobby",
        path: hv.i
      };
      if (vv.startsWith("lobby:")) {
        const zv = vv.slice(6);
        return Tv(zv) ? {
          kind: "lobby",
          path: zv
        } : null
      }
      const zv = vv.match(/^codeBlock:(-?\d+),(-?\d+),(-?\d+)$/);
      return zv ? {
        kind: "codeBlock",
        pos: [parseInt(zv[1]), parseInt(zv[2]), parseInt(zv[3])]
      } : null
    }

    function dv(vv) {
      return vv.endsWith(".d.ts")
    }

    function Nv(vv) {
      return vv.endsWith(".ts") && !dv(vv)
    }
    const lv = 64;

    function Tv(vv) {
      if (!vv || vv !== vv.trim()) return !1;
      if (vv.length > lv) return !1;
      if (vv.startsWith("/") || vv.includes("\\") || vv.includes("\0")) return !1;
      if (!dv(vv) && !Nv(vv) && ! function(vv) {
          return vv.endsWith(".js") && !vv.endsWith(".min.js") && !vv.endsWith(".bundle.js")
        }(vv)) return !1;
      const zv = vv.split("/");
      for (const Pv of zv)
        if ("" === Pv || "." === Pv || ".." === Pv) return !1;
      return !0
    }
    const Wv = 14e3
  },
  4592: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv,
      e: () => hv,
      f: () => ev,
      h: () => dv,
      l: () => gv
    });
    const hv = ["sine", "triangle", "square", "sawtooth"],
      Sv = 55,
      ev = {
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

    function gv(vv) {
      return "string" !== typeof vv ? vv : Object.hasOwn(ev, vv) ? ev[vv] : null
    }

    function pv(vv, zv, Pv) {
      return Math.min(Pv, Math.max(zv, vv))
    }

    function dv(vv) {
      const zv = pv(vv.durationMs, 10, 500),
        Pv = pv(vv.attackMs, 0, zv),
        {
          intonation: Sv
        } = vv;
      return {
        waveform: hv.includes(vv.waveform) ? vv.waveform : "sine",
        pitchHz: pv(vv.pitchHz, 20, 4e3),
        glideSemitones: pv(vv.glideSemitones, -24, 24),
        durationMs: zv,
        attackMs: Pv,
        releaseMs: pv(vv.releaseMs, 0, zv - Pv),
        lowpassHz: null === vv.lowpassHz ? null : pv(vv.lowpassHz, 20, 2e4),
        volume: pv(vv.volume, 0, 2),
        intonation: {
          variationSemitones: pv(Sv.variationSemitones, 0, 6),
          declineSemitones: pv(Sv.declineSemitones, 0, 12),
          questionRiseSemitones: pv(Sv.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: pv(Sv.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: pv(vv.syllableMs, 25, 200)
      }
    }
  },
  9854: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAHklEQVR4nGNY3x/6nxjMQH2Fcyq8/hODaWA11d0IAPvLyX36T0UzAAAAAElFTkSuQmCC"
  },
  18023: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAC4CAYAAADqkK6nAAAAAXNSR0IArs4c6QAAAuxJREFUeJzt1jFOFHEchuEfxpqeaGusuYDhCpbewMbEwmNYmNBwA0quYLgAtaGF2HuBtVpEWHBNXnBXnqeanUzxT+bNtzMDsOl21nhm8eCnYBvd2c6zxzwFT8N9S7WYmfn0am9mZl6+2H2M87DhLi5/zMzM5/Pvy1u3GrJU5FYt1WJm5svB60c+Ctvo49dvy8urliwVuetL5RuKv7bqG8tSkXt+88afFurN+3czM7P/9sPDnIiNcHZy+Nvv06Pjlc9d9fJrqXxT0bu1VHexUE/Tzfd912JdZ6nIrb1UFop1WSpyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIiJypyoiInKnKiIicqcqIit3ZUZyeHc3Zy+JBn4T9hqcg9X/fB06Pj337vv/2QH4bNs/x3uvn+72OpyO1cu17MzHx6tTczMy9f7P6L87BlLi5/zMzM5/Pvy1s7lorczop7i5mZLwevH/kobKOPX78tL69aslTkVi3Vkm8sbln1DXXzGUtF7r6lWlo8+CnYRne2Y6mAzfcTBsFAqM32XQcAAAAASUVORK5CYII="
  },
  19941: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJUlEQVR4nGMwsIpkIAYz0FThfyjGymcgVSFMEJtCsBjJCgcgeABOGmAZtndiFgAAAABJRU5ErkJggg=="
  },
  19947: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJ0lEQVR4nGMwsIpkIAYzQBn/kTBWMQYsgtgwA+0UMuBTNIgU4g1wAE6xgffL0CuLAAAAAElFTkSuQmCC"
  },
  19951: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAJElEQVR4nGMwsIpkIAYzkKrwPxLGKsZAc4UMaJh8hdQPHoIKAboeZhN3YNlSAAAAAElFTkSuQmCC"
  },
  19958: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMUlEQVR4nGMwsIpkIAYzoAn8R8MM2BSiK/qPrJiQov8wxWQrxMkm2USiPUNS8OANcADc3H37DfNNQQAAAABJRU5ErkJggg=="
  },
  19960: vv => {
    vv.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAKElEQVR4nGMwsIpkIAYzIHH+48AMyApxKfoPU0yRQgZsYkNJIcEABwCQU3/5LLo7QwAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);